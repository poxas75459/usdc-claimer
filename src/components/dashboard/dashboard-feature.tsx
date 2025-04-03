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
    "ah5DWX6uh141KXgDSRkqLwsvWoPr6tqdNVENcQMag5gNRgfg3SF8URU4uroEnA63yRwMnwy1j4Vo3RujwvF27ys"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SsH5oULNgy1JFZXXCutYRHEVpwvxwd1RPe5obmEXe6yEsXeTwzukGoRTte6iikQXjCBPtTq1LF99HhznyeXLe7Z",
  "key1": "4TiCgoQMVBDXEsGTk1mPotuLEiKKXHJRqCqq37BuZvAwvVoyTh2UuhxiGaPpREfeQQP2Gx3TaCW5tSwzt7ucD19M",
  "key2": "4LoDoD7AadsEbowqgEJvHAPhN9avL2tLYJe77XA2SPJxBYVoGwWe6LgQhNz29K1QS5o1Nd1nmhyWfVYAoEgr3mxS",
  "key3": "42K42ZoEvXKbEphbDcgedbk3NUarL3qMneJt5niyE73i8kYYngtJGnGUWq9SEyCWLed8QJzhbV7KDNEh5WcV4KLD",
  "key4": "2vtuumtk78Sm8jQPpUjPHKUQHCdWnVS1DszGqu5PNFG7kC8rvmCzMd9pLn5WwM5hCF1QYWdLHXbwRFxVd3MkVCq8",
  "key5": "4MGe5WHZ94fS1SwikSprJLDjku6LDzwPi6iEr8ycppA3xF8CbwXxzSmu5Tkvi9pbCJ6FWcUg3mENHRXdRL9bkgtm",
  "key6": "xGVuLFHBSPe4kbkCNQ4A1T198jerxNP4LdCYwhyMvarqnitrj1kDmKg5sr7gMrzV1DpUZVQ33kCeCpDfR2vaeXL",
  "key7": "55RChivgNFVpyXxShq8xPM3FZSauFEPgk1ER3eC684k9bdteSLggrKCc9KeEXWvZvFh51GsEWVEefaz5K2zr3E3T",
  "key8": "gJfn2fYjmg81sP3mtr6x7p41gLepcctuRsjwkotALzCrCznq1BeByH48v36wBcHC5sjGvoRB5CHg2woEvuj1QXZ",
  "key9": "63FrKU26hiSBj69V9fYUbmtUgRasgocJbnMBwaFV2gtxuxUaYh6YgLt9oT941CymDSwwHTjQedD9GFMTud3GFRvU",
  "key10": "2yPcmdScY1g688yChvcZVyjtHCxXGe1THPTpAqoFcCrUMgypZFbq7Q5DQUvpYAtWEQ685GtjMUyqHDHBPyNFUrP8",
  "key11": "3krqsWnozd41fLKD6mDVKBRehB5JquqhjBw2SQR7nfDWht15Mm5qwh8yvzMjkhbxb919NSh43LoDxqfwDCdd4rik",
  "key12": "3cqDpHM1SSnyNQVux8Lp2mRaVUYbrgdh6itR4dntG2WeQzku8SdWqpg2tFi1wKHHD2meJtGTcogmGke5YXGDws1k",
  "key13": "2jhJzL4pPy6ifgAA1nPgJEAHmnMoXi8gJMEoMxAnAyjyW6C6ZsvsyVzmXDNFQaYwFc5kJaexCa1jTp5GNLDHXjQR",
  "key14": "2FFh5kJmMSiXiA8HGpvrpo4DLZ3gLBtpHPbgSffA8qmDFpXZUGGyD8w6nxakffL1UYcYRJ31Z21NgMhbDP47nAGK",
  "key15": "2TDCAjcBUaRvPga3APqmDjY5XnQDq5CRQpgJuHboPjVJ9pBo7aLWfwnWu5EDQAwp2ZdZUJ3mWQ8FBe43ez9v57Sy",
  "key16": "4pTbjwt6JB9awXaoVicVS3M7H6s3VjzDuMNsmGpK49EZ7WsLrBqEBC9UKVHLHe8YBfmBdmQjrx1KPDxE5aNk5vSL",
  "key17": "4DYECbBnZsAbBa46TrRbB7YEttpCZXk87vYYEYWMv8wgbPg5gNYKFugsAKn2ZboZn6yrWJLGNLeSSnav57eZF6eX",
  "key18": "26nkNw515igc2Ktbc97S97BbnojjPLoi9UTK6H2aA57zKZA91ERYvwsz8hp9jhkszK3vQ5x5XxPf3stTkWpGQsfB",
  "key19": "2FmfiqnsP8RaeFA2oQXHidQUmUmxSas21KtcX8toEKJwVhsTuCskP2gXXiYFTUVDhEG7FodcTS9jToWEEjDKK91a",
  "key20": "22fJ52ip2QFdKtsReKNGRySYpVg6bufr21xMXj1z4CLGdh2R4WaVyFACaNaQS9nsc6yy5BfYh13QRsrg4afDrnX9",
  "key21": "2GeZfvdzt62wrzk42CLBFFWDQe3aXLYpbwtJ5SvvLM7XM2uejeyBhPfZannMeDt8hGWziqzcnL252qMoJbgz9Scq",
  "key22": "67X2yS8eSeF9CaiMRdrGAbB6PrcHEYiBWmDEWn9scraskzhzYnqDGdZkffdnUeiLgBdgdzzmv1QCghENLvSiX7j7",
  "key23": "a2KX97vyDLe1U39xKX5k4XsXyrtSM9aa1y1kba3rvuRFVKneU2SV5SfefBUUmBQjTLah7Nv6yrtLwZtLZ1UBfK1",
  "key24": "8y5tr2GzjvGipFCe9h1EQ94cCcPD5ijHDHwjMqD6SzXdxmk4gXEyLF3Hb7GEKpR87eTsDFe844W7LSvSFAWuDyn",
  "key25": "5Fc12wHzwg7o8SPnjchw2j7jb7iRm3HXB2762UUuaQki5JmKoR7qqy8C88PhUSahRu6YVDig6cDrAcUhbqfKmYeW",
  "key26": "4WJVKCmbJx9wfVVCnJoZNLaPHJSExeckFbeC6DMKyKD2ffrf1BdfZ24NyfMNw4JpYvrBJY4aq75t6cj6Y6nUEPwp",
  "key27": "4g87wkWFgtuMNMjn5qrnaNtrxkRGYbDtm5D6HdEyeXcmnW4FGA1qJTPKwRuqYGUMeQKnWLzWVh23rHcKJYvfoTLP",
  "key28": "3G6gLWpGDaHyEa9PqN6F5CpmVFyCkpmPVo4gRphwUaPY6z5bznUpiztuxYwbb37yRTN5v5T33QDwwUN6tR2Wwksi",
  "key29": "4agD2tpWYtbBbPJbrAg9wDgq1RB4B9G97ep84jZzbzeqTvwJgWBRaXeKNqUwV4YLCfmuenTT1UZEu9TE4BcpekQw",
  "key30": "T6BCrDHw6pfMTaperh8jTDm9dgE2H27YUJSM3BCpRjcr3FgXF6NYaRc68CFWpATCJDGv4qKota4yaFLbxrYoUd3",
  "key31": "55sWq1b8c4Pb2UWbzERrfeNQoF1yZYxfysFDkkCD5nyiwVrV2R3Kp74xcCtmYbE2RaH3JsB9vWLeCnkLkjdRffp7"
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
