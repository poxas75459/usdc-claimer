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
    "3HbPeqMmXVcx6u6GWdezBdr6rDm8t2Q8QrFEAT1mn2Gp4EncjvrwmtQtaKC8NBbNkzkRfPj2BfxjdP7obVih1ztY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FWG3S4dAeDbMXCX4itC6yeAJmMCYSz6hmDDhEXKq6CvGuWXK6gTXoUD7VLfnxrp5hmLBPkDoZay1HfE57WVKfBA",
  "key1": "5qq2XVCqL1WBfShEDbtCX2q6ZEB7WiJ2zvkRAc7Gikk4oxmZM8C2SCFjz6Z1HSu8C6fx75HECd2TySbtxb9iMxZn",
  "key2": "2DFKjkcd3tnpZUKDcqu4Q8Tuk52oSiPUqs1nfs7Py1mgf8XCj3U8JbHwKm369RWC1KWKKrnebYZ5XUh3Kx2CJHDu",
  "key3": "2QuCFYiZDqisR6BKLbsxTdFkuLboet8xxFXNZrWzMVkbZTWURTYUDy5gGVJnhFeiTAn1qYB4fmovDpWjwwcyzkjs",
  "key4": "4MWk3xQoQosEPrkiuwAyJQnix1cVabuMrYFVTgqvAZqAJdTXAiToGDrQzLUVcfbKzHzPuPvkS3W9jLXcJaUssnqN",
  "key5": "4YYALhwPZF4QvGkJ882udwKMSAzRy9d45B87dD7cy4gdWc17sdD8wMwdkYKFKg7jAd5HbzY7jZ388E66L8gFPFEv",
  "key6": "3pNNxSwPTnmAeLFPytwpUg2PgE5Ka4PQfmhuDyGFn6DiYtcNFkmw4sJvvz8k3kZ2ri2gZxZhwsPJXrU6oppn1J7J",
  "key7": "3jKao2rPJt66AvrvMcMfvK98rDoBZ89MjDexYdnwVHEUo8NaLPsEW7CGYRGZmg89ByD7Eu1nfzVco23QFio2s72j",
  "key8": "61A9gFvqZT2WZ8iSaSULfZqVApBhX84GzRbTWxNjUY5FihJ9XJ8RAiamvB1qi5fDzkSWpjkMMyWFKURpgXGDg39d",
  "key9": "64av5FAMAzDuTJBDxxWtnbRdwRgHXgoKzDiv2SN3FtVb6mH2BhFuukf54DzkHoptPb48Sam1E3dSkC6KpDgavaHW",
  "key10": "iqwP3RLTwLQxKsfK19tFmFNQBtwZvYtqzwJk5Tcx7qTRB29QLQpQfKYccU2TLJZj5vfyrDd7DXWVhdWR9vNj5sn",
  "key11": "VoFaTrHQunL3LbK6ZtVUDzd7FvLCgFXiewk4m9qGi63zdRyXGG9kpzGB9HLcyDbBCEVg1mCaEwzNKWuVrjbvc9P",
  "key12": "4EpsdUx2LgtiJZBGLeg85pdXu7t5zQbxSwptiMwaGhmkpM1UDb5idTeWQRLeRrA8263RCebsMibu4yuos8J6emcj",
  "key13": "DS3k3gTENUNBSw3cEyz7ST9ceEPXCbFweuTmmKmfEfWopKHzfrjaiVWMY13EqfV6mi5169u7V7gafrEKMVvwwQW",
  "key14": "k1XUD7NqsSeXSNFM7Jd6bwLEwWD2fxJHLJX6Lf3FkevbY6C5QtZZ1BTj5G5JN2cenB1AhKMoxDQD9HMdH2fD1JJ",
  "key15": "3PZ6QttSxn1ELwf7RGJaQKnfTmDEDYFt2dDAfgon1FVZ3Fpo35DUFNs956GJM4jc3M5pz3ruFw73m5jtSt39Wxbm",
  "key16": "34imEh5YteRZs5WnW62zFcq6bq8iTUFjSC8X68pi94dD8BfucwPA1Xn3hNYDShG9oNWypcwRbkR7XBht9ghKieG",
  "key17": "1Gegdz96bk1YyZJyZuBwmjEqBNEucRPqYMMregyzdr6wudY6Jrqnu3QUxjMjqwpjjsYDT4zDgNpiPLa9KFwbYMH",
  "key18": "5jYqgh8D2oedRcVCBJVzWemzhc2WMnmpR36tNDB2xhAv8oBtxg9fafTaiRNE8ULtEdFY3PL9Yt67EvGekoX6YGxZ",
  "key19": "5KbXdY2cgfQ4zRZvFqNUEdJiS5qFp2SeP7af2F5YHriuARAoLb5GuHoQcApLFXhmaNCcZcrsPCnhM3pNccYYf5c7",
  "key20": "2vYaL5JbqaQb4SfpKgv6dhw3UtQDnCBcZwPXVLTZX1i35rp2ahTsrSNyAM9srDRibc7mpyAtLcHrM8y6ct5sfBFQ",
  "key21": "2E1Ccwc5tJw23wNAxsZdjpQTEsP1doKUW82Ye4EHPGckGpfePkwwYPdPsdPyTSLVDxe8sD9wwas1hdTkt4N5sfYC",
  "key22": "4yN8cpv3zorZB47WrHgfSvYqnrRcNDm55fcSQ2pESGkb5saYzU1ndz9ktmUspSJ4PE8wJBLyPYY1Xvqms4HBBjL2",
  "key23": "3bT5C5M8Rv7jmpq8UtPeMBjHFinEuQhDRCUkQSVoSFrR6L7iiPfDCLYifwkG1bQLCaX7qTiwLNNK9cqRVMbPjqAo",
  "key24": "4unm88pkjKmLzdHkYZwxs4UMrkRbxnyDQSf9sevAWcmruG5hn2fUqDrLLzo1Z547iQdFqA4u4JRa3NbPZPQjWQPE",
  "key25": "4RJPg3q27CEKhGRzfUeiqFJ1g9a6hVJkgvYvWxwntEv1JkqLpsJWPRQCemcBpz5qa1ouYybswCQEUzZBs7s3vep2",
  "key26": "36c6V6xEVM9tqMx7y3gjiNaPUTHouuLzNido1kpXDb85j7jsPmNofQqKfVx5iMTWwiFmv7t5fFXBRHGJud67bhbj",
  "key27": "3kFfAvhqW9k95ohqqcLHkaP3DrcZh4RTznmk8ntmKwiERgXQBmNehs3TkbgyaoHyqyXaCr765gdQTWgRoyE1rhqD",
  "key28": "2ctHHHjzHb9jzR6AJFpStDzG5Kgh8c2ZgXvXQJ5B9VVKk5aShysytgJHmUGqQyfvuYM8PWJE4ZSskhYrN5n2A6zZ",
  "key29": "jNYXJgpvt4A5k35PTu9xkM17DdowUhxAi6R3wDMtm1QrjqcAGmtdoWrz7cTpKR4ZSKLcoSbJxmJR3g4uQtMSyvb",
  "key30": "UCMbBxAth2iYbYvdnaCPx2ebjHkF3Z8JKTvH3WY7pyEBLgbJwrwgCJvsmDPdtngsGhBjDgbGJTu4YNpvojRUvoF",
  "key31": "4qdZD6nSZzu3g4WFbc2aTJqJdR8Aq7nfJzw3TBdiwB8sEFKtLGXRfnFv6APRx3k6KUUwtYPfnLGYVKXraL2TDcWD",
  "key32": "5kpazWTuJjcNuGz4ehUNQXjKjjjayDg5NAMZB1n7AqcKVETPBEjVVf84K8DLZa3pHMDzSEQFaspCebgRi2X21wkK",
  "key33": "52pS2H2VSg4eTMVZNdaFhogutVNQ6etGqNqB8vA6PXKytZq2873f8EqYtbwTUw4GgvpNtVrDtVnvBjSzPwGHUaLJ",
  "key34": "4G8QqTyU5MGUdBNxvJRx93C7rabZyixBJjEZgSQVGp9LJ7ghdW8UprJDQToV8WMcNcNYcmL3uxuMm7Mc6zhHqUxf"
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
