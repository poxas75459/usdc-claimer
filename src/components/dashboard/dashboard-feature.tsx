/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "23ATnnQFBMmJRejVXbe2gWuvaLR2MyYHFLunsUfui2WNVwn6DDJzDhEJmfMASH2yTxnG5aUuZdRLmgCSTT7DFHXo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jLHxG2CWucZwK9w3viGgEEqprSUovaaJevK4dEXBYUR6riGhuEcFfXgwtbhBFqz8TDRtgc95CFNYRu9NqVhTkZC",
  "key1": "25Kb15wdjK5EAqXipw14poraf5hBXaQFxMe9xBQEZisP1ttGscUQckSUufvWnRW4E1sPt5HvjEnmnfqcdqnbB6V9",
  "key2": "2GoC488jf8jaiyqBRqbsQTFNK4HUjriu8eRaqqDukQbN8DFTLuPJevh7BaDqe4t9vg7e9EHQ1kfqe1ndy4nWRd6n",
  "key3": "zKQgZx5gh5xjA2dr3dRqmvEmKojMJAoqv5b9trJhiLFFmCkGokjRigmigyVZfp9tBmayarogmPv3tYkRvaFLAxX",
  "key4": "2Ze8sBqYQe2cFbEwfUHekYuwrZWANq3ACGQymauQ6mVMv2WRszAwXAXQE2HEX3sgQcWN4JwwZ7tcXWTox8cG3XSz",
  "key5": "2o8tjiasZ1PkrBG2yYUL1QrMrCwHSCNTV6ZZypByrFrkFMM6tMSz1nuFTHt2EYYEx4YpKcwNRZb88wdWS6GQaLX8",
  "key6": "2L8GC9e7ryczBey9uX2WLrqAdL3uRpJCi3FqUWifCpx18esLK8tyXUFpXjcT53BwWboppLdemuhLLgcnLpKmkaen",
  "key7": "3LfcjZYpdBje5jdYdc74Ef18xTQmKaJKsi4uXsEUnmvjaftevGK2Bo2GsfNQ2zoQQYC7H3j8viZ7QvXSYtfNryqc",
  "key8": "5VBmxGP1Dh6nCtChtdRqg4Lk4bknw9SKo58EbCyf583RypeCCJezX6S4ip1G1rcLB4rLvb61ctBsUPNRwGJK4hDj",
  "key9": "5jk1pjGiQyU9cPzxiRDoykRN1pyRwJVnvUzwnBxHayRv4XitVaHBBgE63hDysTpk73H2rVyvB48owvWJPh1xs1or",
  "key10": "4zNMvgPAyqFtVUweNSRP7bWBAUXeppnyaJQ8ALCBeZ9YrP7g4pnH9ykfjY9wR3hKbZwzfUXHsVoQr3o24CgSLtxV",
  "key11": "4NP8wAax45xvaHXofcmdWhXMaH9crpnAL6ZRVs6t35iPnxncrNtrFqGzDYMWxUW1aDDt7YWQxRwvBETexx2kkxsD",
  "key12": "3UuJPJ1pUP25TPf7CJj2uBjBcbnXQeYCoLTevmUX595rUsxoBsdTbzH853jtLm4jiK2oE1P1hU1vEmAVieFbN9ym",
  "key13": "2xa8hHF9vqm8cdvWtGk5LYoR6gwUqX3TgBnbF2TknNKy8qNfGeBiYmfJ1jP89TpV9311fafRVPUAwx2qm7eWsVQ2",
  "key14": "3iFKhKpTgSDvxHZbqHD96WhDTLekUT74tUXroXeptwwkJ1w7AsfPiqSN9PM5NL5o63JT74CRmDX55JAsrdHXMF2h",
  "key15": "cknfEiYGms9y24srKyMshHpAwyf5vpCLy8LhioZnvc66otVEL8k4CYRrbJwfyryhk2mYAxncxq9U4UoDrFALb1c",
  "key16": "V8wvdjMvSmhgkZutAUUr1ro45jZ5kD3WqQTduTBokthxd5PU1jasnWeDaJRX8nGYxEGTvNj3WdpRAq7dcina5Rx",
  "key17": "5J3raYtQZWaQ2UrrBAnAWb14V3oPwrPD7pRBp5m7bRSr5VqJpftUHjbPBPdmnoY3JvdBdbn6o1XCRJRbLk8b93cM",
  "key18": "3GhFnCjz3CC2NhhnkWMYdUMoKqWYkE89vvpJuScwqZycgLM4yh58hpM8wYwFeRwLguMjp2xS42q4SBmxC1cMsRAz",
  "key19": "2mWuPcGGDDhM4Vsk8tBvRjV5A7a49tkamVqAv3aaBJp9UhSYZnxSo2zeEYqLdcpQhTsjND8PVHpHZbEAon5SPjT9",
  "key20": "k2GEz54tygnwW5TzWxi7BQs4rxZgM9b1WpR4uC7iqr5toGSkS5Hyh4ux8ueJzhwMjrZBYK9LT3vZsfeHherQwCi",
  "key21": "bjNqm5WJ8ojCL4jxyTmwRzK5RvhD1FnNpC62xzLU3CgKurafMduUjegSB4DRHW5jvUZNY3MQ9mNzQsZ5Dh6SYhu",
  "key22": "4LpEJg452a7Z4qqh12CdMZf5MfAXES3M5sdxrPKwTZK2f2GLp7HmrwugucHU262yF7J1RXfiqu5w5u9LTyW4mwD9",
  "key23": "5e4Eay5z3m9xzVxp17pfZpxnK9FkV9uyvd4ADw38TwLosrvbB7F1pGCcE7wdHfZyw1ojG89fAMSuUunD6DoAx1xE",
  "key24": "5eDmbG6e3hA2JyDbNof93jQDRAKr17uvonCDmLUBUtUkw5CjZKg2V1dXqLzvp59Vo3USjo4ojraStnwknHU8PyiW",
  "key25": "4eCqS6KHdbqGxbJvLwUZFFCAfKM8PUnvhGfXXaiY96kc9KZ6NVJZrqmedXdKdPHcAiQdh4uBAmzp66GHjuiTNzdF",
  "key26": "4QdbEZkDiN45N1VM6UbgMf2wjFwFTdXGPwjKfPmqZqNeCytiehfUstdiAbcGgpx3YkGvzBpaoY9aEp9YpoRNqNWE",
  "key27": "3YvJEeuYY75Sr4NKVUdXcp2XdHPWfFa6CDf68xKyf7uoCeHRepN98uQweKMB4AvaxjjS1mke4PzEUW5wZGw3gVF6",
  "key28": "4LsdnxCeVUksC8PuSKiVGy5W5xHm5ogoJzbrHYvo7ymJHo3m1VWxid4bwzEvVjN8ge8do6ha3oVZsR19s98XHEBR",
  "key29": "2dTk5rR3DjCoR8eKXWc35aD38GnaddRKDL6BGi68nFkJ3A4hXxTqhYpP2qnyERevcWHEsPGyjVfFDcgF471ebsF3",
  "key30": "3QC3XTUKWnbZD43HyFecrPDpeG8Bn2cqhNkkoqZEgUbdhSkShite9GSrGuJNevTeTf58SgA3R7GD79hFvuu8Wniv",
  "key31": "3QP1Mh1B3auBwdERXaDYWyvwPPwrr8drEmDaRTpLCFqgfe5koCoLLAZZgG7B96MpJgbT4oJdGK7drpkVx423pTm2",
  "key32": "5P61QckCWqb6TiYPrntnxbkp2BarheAJUcPrujhGbRSEMhUP5ECLtRzkFzLAAiGHWwiT9DEpEDruin7ASbdYBeTN",
  "key33": "5tCuGEz46ucHW4F74GUsLH5pFnchjrZ2re7drimYnAFZseTFVaP6PRGCD1pa5M8SEDVmaQaQxAk9f7rr3gMrHgDv"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
