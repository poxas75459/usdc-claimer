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
    "1ykhYEujnABoxjmRTZ2phjVmMGMnhFqTzVhDN8P8HXJAhEmum7xRHdeBTrtZCgVNwtYmQyHnryvwVwLxW4Tpi6Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mxnHJNFyJEr3QxpUrFVvH5bNoXh7z93Fv6Wc7oRTvn7RxtHetonuBKEGmwfERxXzZbPF9835v2ssvjZcg843tju",
  "key1": "3Kf6yLLQiHCVi6BuZrkqNFtHBW2d2rBXBeq8q5S17jWkBGf8h6CfGnNUS3Pcn9RzWyTbyLmexhoac5ZrhsAfG4m3",
  "key2": "4sNJif9igojzCsBMs58VdHa9EcNWHXHAFNtp7AnK6aT4xb8zhh5B9gBYrdExxjc6c7kEDcPTriFXqgqB6Mugqoe1",
  "key3": "RQhAqc3cd5xCaVejmmFmAurjF1hy9BeCXgwNstGRYk836fQkM1QqRaUjwNQhkQogseAyuQ48vwN61P6uZGoQgWY",
  "key4": "48M4vKre4ukAeovznKPhyxUXRYfDJnTBVvLM8S2JQ52QYfDQzm11swfFJszwgcMGTQzWcBLDE1vqXGrM7pDha7cG",
  "key5": "2kbm1QXcqByAmTJs5EzFhCzFqWgPsdSXLC1ktn1xnSUXdyWVebUEuttR95pwf3sa9CPGJ9yGLBFcYt6ijiE2MBgV",
  "key6": "58xedDvxehb2MgH6KH7daebexYSjernYca1AYFfVWHYf6WxTdiGCaoNZz7kCrmsE7a8L5M5eJ8sCauvRi8QXajRS",
  "key7": "29ZKKQnaREhJ6vNucvEw8Dkp5Z4HhrParf1tjxyNaCAdt9FSU3vLJiMv1zeEwQAfbpZsZcs4Ae4BR7qUa7xtnzFG",
  "key8": "38bZ4UrRK9dhQpq7RJchuFzk8HqiSe9MWkZRM9i7Q8dF1udvgnyNQq9M2nQmhnjDS3EHDuExMp2TNdkddfsAEg1b",
  "key9": "96j3aLw4qVfS5GJP3MPtVTedU39JyanyfK3eNXdKtkiHZd6Tj9HB7fY42HJyojdfezj6jXquMjBjrKgVdouFrkm",
  "key10": "P83DEmKrjJuwWiP5cKd5m9rARRPmyZDHmqbowZzCMz1m1YkiG9JsapZfYXUMyVSBj73ACA8kfE8anSgpZ9cfVsL",
  "key11": "4LQCoCbAtUM1n3EZgTnrZjVwa76YYiANChsMLRMoPoF6FhwbhrSCrcxbMBaYjoVjZzSYzpqi5b4VGXaPgts6J6oY",
  "key12": "365DKcAYCrsvg8hYnkA28AT8qy2Fbw4XpnEFm2vuzD2XtNsLB5gEdysBKxVd6EWYx5iWRpjsgrDze8WhsH1fSRC6",
  "key13": "G2jgiBSzvHaDmY2pkkCToN51XvZu3ToXGesSJaeAStvn3Md392AbrLEFtfnfRFLide73QnY6e4KJhwR9VHSPBv6",
  "key14": "4yoQPKS6A3xEjLeje6Z77xxrtjsG8KjLXzVHWQkq5ra7LYRazdsWo81nBhBrQGxKYd63m32HyGZC5Wec7Yiw3tRU",
  "key15": "4XbXAUerCQVRp5U4uiQfkWC9xV91R8HM8SEtoEQaC2Hg21jgKSzqMzdQqYet1EnxrP9QbDSw9UKCDzsEtsDMzGt7",
  "key16": "4vnyNFfXstmsrhWxZZMaUN9xEfHYMJXqFFCZRHYxnk8ZfqrvgwyCD7BM64n5sYNWqMVXrtTLZ4N33Hv2y1HxnMhJ",
  "key17": "54niuRbcNRrhPcUo4igGg8UY5vZykfddH5wVbGC3WvqFDKUqCY3XAi38DMy8h8qX5f5ThAx1rk4BMhBGDwqm3krA",
  "key18": "2ktV2RZRho32xwJx6vwVuUnCXZz4pdwR4r15P3WTYWL4UnB9eVpvwHDm1pAnPyPbU9fquC7XMSmUGkarUGp4fSMf",
  "key19": "328sHQfWfbUUwZkQwuyoVb5b2nSFmBTFhX1HSdKTLKREy9EkGgUfEy9ssSnHoPhiksXtck7Nyh53hGc12HdRkCVK",
  "key20": "4ZFBYgfxAEGUveTUdbqW7WTwBSNyhqCSo8jQmQBG3vaanpsEiV2jKkqQd4ftLAgBnAxbjqoNbWv1GkxbTuFJstjC",
  "key21": "4kWPAe7B3KVXQ4sSc2PveCHVDte5P95w8W7BpqUjwwqUcdUer9eQfpJfBJbnjiP34nJ12SpKYZBLQbFG1KQcW38b",
  "key22": "2XRDocnJwxt9p4CPHWiggt72etXrP4nQK8YWxxf3AH38LGvjPe9QQ3uP4d1goRU8Q42z95i4pFXL59ay711owYoq",
  "key23": "5QKyDzJvhrLnNmTD71UesdDrBCsA7v6x5PoM4ry8KsdtpYjsUAAuGfVvGMy6NpTS3XuGUhUNJ1DEg7dEEzLMNcmc",
  "key24": "scnTfJCXb5g61XhQJRRXmfmoWgoTJxzxWRt5a5DwWVSyRzLiUQCgG47STfiZ26wvHNxR23YNFBeWxT66zh1eu84",
  "key25": "TdyWrRwbhYhe9cSe6Rsn7cuj9J1uQNJuTKDDv2k6j3eWFteLs9rrwE3P25VfpKTmJXYJWGdjmSs6v7qH2QoCgYf",
  "key26": "4sebLa9tm4ziS6xj6ENFrz632ZAb6GBd7RFsXu6VsS2TC64bRaa5C2HPbPBN5chmZ5WaDtHMmxoLHqDTUmCqW8Un",
  "key27": "51VcDbqzoTFcKm4wd5mKGc992iN48HFEf9vZ1AwWPTD1DXNCseY8bw6ggnaexcJDXdwkpwy7uPrpdC49d7c9Zzvm",
  "key28": "ycemCFmGPn9k8yKXpMBeK99y98REF9oNHbpcKbbh4w7rBUefiRFUU6xGZWY7uaMornkhW7jvKq5dAHoCX2XFEDT",
  "key29": "cLLbp6d4i478wznc8bFRKfh2yKEWFdw7PdT9RBeHQ9zpqVubXWW8RxfNQvup2FpzsZwuDEoBgYmnP5fg3Cg8ywB",
  "key30": "rqysCFhXseZjqS6frj1xHveMJvor12euGXgCn2UxzFQaFTqk3eVpZnPVHRMsovxrbzUbVnBXoQC3asKbiNHwvjN",
  "key31": "5nWvQfP7BCZbFcSW9exGHREqhjJ1Me3b7j93YsmEk5tDCHWazYqX5GAvGL4mJQNvweVYrk4vvpRBEvZQN1BjuNo3",
  "key32": "453oyX4DifBifsdGJDeRD7m9hZWfif7Y7zVNLXGDT6bJePocmARZesFQkpKe63o6LKhQLgN3hofP1TGFEuXGXds",
  "key33": "2JSpQd68GmRzddEGkB6Yzh73vgnvwsufq3ign9erSDbDxLES3HLXgYzsy2oU8R8MYz2EqQdtAcycCc2CcNViXpEw",
  "key34": "4p718m9yhspMZiTQKkuRPDocQAgWArGwCqZwaAni3LotvCjCC38NSuFzbunvpEEQDx51dbaCrTpNSCQeAuSxS3vC",
  "key35": "2ipm8ujcVHuNcK6KdrHcBeEKLpTaonLbArZohYsW9Kw7YFvPUzDF5W5QRc2pd54CX5aSkT185EKr4yFS3QN94Pf3",
  "key36": "sVz4YAg6e4LApJfDihttoVGAErpe1g7yD1cPhMxCKoaZAm9dDLvhNo21M63LTP5LRULdEmM6m78Ss6pxsm3o8x4",
  "key37": "3xNv1txfpn43Neqcihrrfy5Rt5kbEVquaxW5Brccr2T9gb86J1vFu3YNZ5wvM9XRj2ou4AzJCBmJhUW6uiN8FDfj",
  "key38": "52XM5k77rQLL2y35Ak5AEZ5DuJn9tpL15BbGzD7SEQpfdiLmssvVkPMQXm4kvMM9z1dpB8HZeqCqMkxDRuMTaPPn",
  "key39": "4EJiiTZbqWdCZt2JnE2DHp5yd6trTUkjbh1NcAMoxJ52rK2aR1bcNSZzY3GLU9i2ZuhUyCkfWfPSzGKvJHdc29ds",
  "key40": "5XdT3awz17HwhBACKkP4BrCnN7DdAc2ih28GuATtcaJ65wW1K2HyECg6Q3VU6Wge6g9LZyCDMGhHvPjtFnfFw77M",
  "key41": "3m7B21qgrD1KsJSEmtwPwjXw1GMQkJYMsq92DVFo5VckdaUEsi52kR5NNNMeDZp3XRy7zVFmoi71RTALLZR12zJh",
  "key42": "62wPHHr5tBAAnrrjqmoVDkUTSfidRxzVRTECxFQvNvd7LPtttBQU3HkRsU1gJwfHmCzaPm6Sk5ee8Rh7CPx5A4oF",
  "key43": "4SbNpbYWuiGMVWMgGdHdLJoDnbMz9cYQyCZce1jPdcpUQvMvDVUc1xfXvkbPogNtBejsioS9wXsREfh9RrnHtB4c",
  "key44": "2oHL536WGW256Xjouz715TGY6V12PBtjvNPF94F2ck37jsU7orJh6Ta4bBgA6X7c56hhD7bdjvfeCoLPD39Ka1XN",
  "key45": "RtMsP3P5HDVFjh9yAFoqe7i1XxeaoRRNtQs9ok9C22kbrhSYPxjmzwvRhwZ5QxxYVKFerX3MftC2zrUKZSqBhS7",
  "key46": "DXDNTPzrvmXXyy7GCygs1NNRCKUhuQV19tA78S8nV9X9uNRPJRu3oPjWQUH3aCa4yL2qa4qBT1S9M6zwDnCki8E",
  "key47": "5wXQwFidgsaBctPbhpg2Jheri9Cio5JBBe1ybdaezmXL6UuFqihCcy6W4e8w8PBD4pfR9fg2c5pW52kJmyPun7cj"
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
