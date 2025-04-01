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
    "4Rw5oTr7wXWd95giGwhUyVj9ZDrBq2ANwR2CJP9kC6KHXdsMJFdUS3FRFzREsMiefeTWQQCLyxQbThf8c2jmzLf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PANfM1miHDP2JwkkXcXQYRbZ8rvtCSnAtaUiWZcVMWKh3199TQ49Z6JqwCQUKjMHKsCTeSJYsR4WAL99QXAQX33",
  "key1": "3GpwxF7EU6GQtTjTNNbsUYxng7vyeyNLfhWjUfQwz2U8hY9ZEcx3aDGrmt2Jd37pPYYc3ihe95zKp7J4NqRw1yg1",
  "key2": "2ZPMp4oRYxDSDu1tqRUhQzNa7iTwH8udzveNNAEVT9SjbmUZSha2ENLPogTGumq5vDT46tFJmgZS5eqPN8jbSJHc",
  "key3": "3qzx6dSjwCS7auveFgEE7GuBYN1H3LJcMsqX96edjvrvqc64WuJDQW3QdTSHJfyF7C44FpYWkg753yYYTBRH2fxC",
  "key4": "TFsx3FUNVjKfAP4E8eTUBZhYo83XF8KrrXydg7vg6gdnKbEcBcSryTGzWY83kr2Tp2RJXvhS4GGys9aS2pv9qNu",
  "key5": "4RGZM1DBc4hdVBajhkCyUg7bTgeRA4sjntk6yT7qc39G1pTzGM1xBog3BCinmR7LLbwC69zEzjjpPbxut6QN1i5h",
  "key6": "5iLUye55DZcKkbVgDKAH1b3eLXjZNrSeEqmr3GL2e57enicVmVxb9g7i4od3VganAdGv1ssBpznwg4QeBugaMqvm",
  "key7": "ZApH8CenbmuoMyiDvR24v3TgbfkEewNESwLq3sPYQxLMXS4H6ihAqHjBRzAbehsLELhBbb4D9LLrr1R41rPbkEW",
  "key8": "4JqrvTkgsvEYV6XsbTpsok8opWLX5rehFMAfgSB6z72TY9EcKRMHd5cap6wY64bd6k6babFCNyu4p6Xs7KsTR3sf",
  "key9": "5FYjXEtPpfkvwAf2oxR52FUgAwmJTMG97gga8dZxwpZXesVdxaJAjYurR67F3LudYtUup6ZkAJp9yRT7LPJrMbTa",
  "key10": "VoKBwGRvTTtqyyyHhsUcFwVhywpwbeVdBMYVPDizbD6WLTo57tWeLP7kZwTohmZzXhLD8tudbkGsHRTvQqiU5s6",
  "key11": "27ZbBUfpUtbA24QHdMkD2uHjGEzRyszLQAxyWURY13kCbhz2BVqAMMrDGScTrtFXGcY6S6Pmu729R21nXi7myQ7o",
  "key12": "3ewMdJ43K3yWs5fEZp5AaLsVDaQmBzdM8CaaFBXmRvLf8YRaH6dVNBsNRUEcY64efX3Ttz92LTLwrTPUyiQtbm2g",
  "key13": "46nt8KNDDcLnJDfDfTcWztRGftRj4ALJTKxDLvp8WtrwjfS5opXCq8BNKJx21a1qBecEbKvcbtmiQikgbkvqeogN",
  "key14": "2vxCyJxvx7ntWFQrn1mpGoctWyWZ9WoiV4FgzCGuBca5cjXUYvTaeiYwckEP51R24MUw5LDgpe1yyz98HvtFh3QQ",
  "key15": "2rYcvZhNWQZezVUxSeE7q95Ruk2chdXbQb9hfgudAfQRDqGFWkjvsVksqE8wkSAbA4fxLy5EjmZ6YAJEcQGvgtbd",
  "key16": "3m7xFUPzaknSeivbUvGTJnfvPu5wRF77bqhoj3nfH7NnaFeFm4kefyrhAkH3aijta1wDB44N229JcFywk17soX5m",
  "key17": "2AR2rNhHPJPNfKMRwQ1pAeJwBn7EynravQb1MDpWB6zYAkoJ6zRAAC7XhZuiUVADqqvinKdVaeh4BARm7kWPUSz7",
  "key18": "3oias2RYxH6varmZQGnW8kiPeEJ5FVtJDp3yn8za4MsmqGdQfCZQ1jBBH9K1r6DhEJyzVCBeqrfZjp8dbFratARf",
  "key19": "2PA5oopDCWzemSZ4dSWdfFLCQEYbAWpyUUuw4LvRtksSvJd85VDDtN9mCiUZrwfZyyoTZC9qWZkPubZDZDmvUyJZ",
  "key20": "5DNMqSLU9qa6aMXs68pnSuDh5d1n9fTZqwbuh5rPwjizFMMxY5pij4w45iTQt91txxGkijQ4kTZS37giSMkxbd1s",
  "key21": "2pRXdtpd4cSdh5iuUHqEmW1D4rH8tGN12va3zArPpFxaFi2N3QC55XkZBDgYF4fU3aJ6PkoRN4APagdQQH3b1qxD",
  "key22": "3bFQiCZCp745dBw9tFMsWgCvH3NqNg7PWHp2k4ENG2zf756bK43D3urxNpehwapgxS2RMJc82QzbgJ1TWzHWv1og",
  "key23": "2Wf6KQzkFRRxjrSxUK9ZcBQY5KRQV6nC8bp1VJ4ZsTpESUMBDAwaYvtWtw4sHSbCfPm6bw63HmHBv5woA1wpAhXM",
  "key24": "5JUMyVV8cndbPsXBefQ7xwXJ11XdGnhdLuSPjQZpxBLxvfcWbrvvewUfU3LonSLHgJDcRnLNF9br2Pr3gxNYBbUj",
  "key25": "5ZTcFeUdzkrtbgytz4yPHSUvo3XNz4dXKXUicqsv4cbSvgX3fmCLnL5wEALavGjQHpYqftUmY27FYEGmbPLB7H2v",
  "key26": "2xi2itsUeYsE4JCKuV3YJdEm8tBHus51z7FkDFzchB81F5u2tBAQP2kMM8nocVGXUBaKifJQXHzP3USWFm6PyWdn",
  "key27": "1C3f9Re2Amx38zQxPaTevSdQdtMuYarT5zfbDFcP96nQ8gLHnX9cByeECY9GpoarwDpjRUSXh4W2N6MQ4bEL9FG",
  "key28": "5bymLEz5JXwh9ZWVJDGWy86sxgAPwYXgk9W6dX64mThRtDMPvPwUph4VpavWP9SUxt4zm82bJANN1tGgR44bZPcd",
  "key29": "3czyRyB5Z8rKwnNiBw4mChea6VVv3r6AnafGwQqiif5p2VWz3VNi6eefL2U4wMn7nqWx6xysy4fp2tuFWgim4bYY",
  "key30": "5Fuavuh76QzAeZ5hXvFABBuKmo2udH69xFKbwuCmjNtgQtkq5HEEh931wNT2xws1BAt98RDNjnieAXXg1BhMRxp4",
  "key31": "5SnNXsrhwJ41w14NMRprF4nUaiKVphwuQuXBnM9chdmfF5VFQPZy3d2BZys6ntmJ5R1eur3mUte7nrVm8FjDBPe9",
  "key32": "5ikw49KB9vgqpt1ZewPGJJ7AwpWcB9aBHhxA2XPVFHPoidxaQgyaJH4pZYKxPAfXwAbv7b5tMHANm6sn1DUvXTGd",
  "key33": "4f5BY1sNraxpAfhnmGY3Mjtojh86CqczfWuexTN62niVTtE5ZwW1tfUuaZ83wfuUAKwqnEd7ZiBUqpALyXz96THE",
  "key34": "eUnDyzHNun28enPfYxTJETyQ7XS8LDQVdbw6WwHy4eUpfcTfSx1LBJBmJSXmUTYYyg6R6ocnghL8LvEoX25VCNh",
  "key35": "5pU8dfhYByYfpi2wG8mK38WrhmeBQedJP7XUQU7qYRcywBNMpz8z6q1qufnTaow9ynacj6e8hYB7SBas52CadFoN",
  "key36": "2XHqTJzUP2r8azxGQZEUbw31BQwPuXQjhJy6Vmn9Z4tCMGjPZRtmAWYgEPWETqEYSJ8HpkH7y9K8QTx1ivu8CT3",
  "key37": "5jX7SWRDpAdMX5dWVBbvG3NnHayMga85XqX1fcJ17QnnAqCH2Fpd9Gwh9N7rvFP83LGDDn1aZrRzWAFfz57r8AL7",
  "key38": "2Hv5k1EBHUrEnKcjgVA4LY82yeNGvmXHKw3wU3iw4vH1HCty9E1UzzfEteEmuYTGK9zvJJTdDy4SFpmmzhW4uboA",
  "key39": "F4EjeKnBSm7TG2n2aeimdedZKNuV7DyQ43G9n9v6EcLT8br5qo2GSQA6s5nmhfH2vj1FoxxrUSDHvfcqY6fzEBw",
  "key40": "2A81JfrDckCUrnJof5nYqnnwowhpfFmW65mw9q6qsuc2wVDgnri5e6uh6mjPw5Cs1Z1Kj3BQcrptKBgXhXDsjUW7",
  "key41": "3X9o2YujDJNpLkB67i6uEKvFsdtVpToyerDwhWdvbrPXDDXwP1EgkY2dC5ZPCoQNAwH7cv77Yunp5L4QDxNb1Jba",
  "key42": "4WdPK9Q24QXtsuhLnERXodFRmhPKp7gSL6P5K6STnsYRjBf6orTrsaAfGjCdvrk2DRJ58DfqtaxzsVvmvhYG7puP",
  "key43": "243YNXNcQ54E9RRbcg9TE4ZzFc9d4yU7vzCpNAuGj1Sjk29jqf5qAqwyS1zwxywg4FrhLqphSgPiGmCs85T7nJsH",
  "key44": "4cdGW9cyEVqpfeBwVxqaDk8tziJwzNqEeSXTuzEKL9KQJMrFx2aqWYoaNUGGWQp7fBTym6yU3Q9XHSdVv8zU4vb4",
  "key45": "3B2XeTHNhhDRPzrcD9oVCPBZSPpenLKqkCS9g2ekj6RZ9tUCcLitacz18kPjs8ch3xH7yB6fdoWd8Vx4b31UFgJF"
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
