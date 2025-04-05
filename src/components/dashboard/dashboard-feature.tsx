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
    "4iuhdPk3jdCLYJv96KB8Fwfu4q7sJ8YzNvunYTvFDtbtu3fjwC8Fs9hmrcj541RishPa4VhXkvsZZ9Lfn4q3Sb8k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LDrfpp4SwvGgzn7WGfKgSmhLAH9Vny89w2YnCa7sAnHxVQnpfYeoTcdGaiUdGTAxfZmtw8kABnLGuDF38vQcAJu",
  "key1": "2n8UVSCboCvff1V5NtRMsxVFfAumKXNVmxTN9vFLdJgNPqZ1GRDu53y8ESoXGQxZ5r1DwLe5BYZQzNb5dXHEk1hs",
  "key2": "4g8mDHnYwPFXkrpXPJ2ygKcBGpHsEbJN7TFzYgB11WL9ruHDjktWHLntULp1hMcHUyX2HoCvRUHepWTkSmmZSanU",
  "key3": "3Q6cMP9CzpW6BprCiGBHJGYe6YyrZ43qkFekNHqKH1z192nn7Uw1tcFrVFjRVWpAjnt7txHWseqbZ3zkbQbkYWW8",
  "key4": "XNitx7GCMdmRP6C9uYNjY1DT15a97DUdiQKp1YHTSkko8r9buHYsS7RsDTWUyDzpsUDQHvuki8sPtfVkZDUTwtz",
  "key5": "5vEdBpNMH3iFH9fWRtqdLotXEsw6a5VZRa9dKM5aHbKjNj9WW3AajyvD9sWhk8cBe2XeQtkaoRQbcrv9BBL3W9x",
  "key6": "5YHccwsALSt4ghdsf39fTUxUNVD4xYUi5ngYndcXShbD665mCVGFZTzpy1bN5upgTztYC8S3NMEbbTr6X2PjUvvx",
  "key7": "3tcdGvBrgBYbcfxia7Pyrh3W7vZiVZi2CYUH4YLWsGMkM1inZCT1Zocg4j6qwdcsgbn78TCtGgt6rTLwch8ciMyx",
  "key8": "C5WX65G1BUxJnDNnX7aPmnCE4GdFyDRsrzA2pPuqFxNqEjjJtQW9GfE2M3kt6osRhLgKuP1njaCZ1nvR4gfpkFg",
  "key9": "64knGWYMEWFkAnDrcrGiT5qTgbEE6XBoZz3hZgztz1cSdgGQNtP5Ge5jyY9Gz7vhDUzLctVUCYQnD2w4nGG5KrW3",
  "key10": "zXG9skHFk9LgnwerCzLrA41Skv9C9zVggn4xefdk1xwTer6og4z954Nmc6Thswyeh2svwNLbMq9X8oUW4GJFz9d",
  "key11": "3uxcpr34s3xN6AnQ8XoVZUaTTCBBAb1Z37FRmPToqihWZnZ2b5v4EUScjtPYfa6zQhbD65qW3DeWq7ncwxjLbJcf",
  "key12": "2eqTbCeYt5pRiAuoNjZhKB4acGPpgPzxdRVNW8Kartxy9nqNXYjYCHFZsqaQ3kSDZ3HVggqRSqfGjfdQNiMsQHGh",
  "key13": "27p35JBdkXQVu8ZEKqqy7htYp8v1jY3XQGTpBDFZZcvhg3AgjuKPyRegfeDp6DYvx2gYbuJ81gJ7ruRHHQKQnqL1",
  "key14": "2pcUWy8CUaQgV35NNVYwNUAqCH4w8ZhYhsjChaCZ7y9ZS9pVPT4Ak2Nb5KqAk46VGnSWmrEm5E9YZ9duraPcxxtw",
  "key15": "3HEPpGe6HX3MdumgqV4H5iYC6ZVmaeop3gJzJQivVr6puqKB66VNsSE1A1HkmZDzFrGDV4DTJis6VhQ1rmv5Sztp",
  "key16": "i9izkjJsHa8crbqZD7VVXCdQoRkvRen3czxSRqy5kFEvHNQtF49yNvyzobPBq2xgGAENwPRdM6zgYBGZ2iwk12h",
  "key17": "2kM62vLi866ejJTanSgNXnC6J5CSe4c8oCBNVM6fMoC689ummjE9jsskmXinnEbAyf7QM693EFqjpkHyMMetwSYB",
  "key18": "65ExexvSAidaCghDqbjmaRzRdCv7JXUATdErVqVakf33orQhn7uqzFogAeqwLVczohPwkCVAyziKQdwNHzrketjj",
  "key19": "Pi6DJpx31TsvqLhzpCLE2amGWD2nomMSY1Ln2nL6aUNc1mkzaogoW1jLBJp3DvDNQx19zZTQAbwh3T6YLdF8r2V",
  "key20": "boQuxzjha8ovmnzvKwNpmUErME2HQnbi93yaCiBsi4aWoQcyZrdzqUmdG9xyZ8XnJtLiQQHJVt6g81DSydcVgwK",
  "key21": "4tM955DTDqWMKrCzwW5f8wRCrknBG2q1snTrjz8Jw9B2y7m48XUEYytUr5WF4RTJZ4BjPuUYCAr2KuSNYMZrrdNR",
  "key22": "3LQWgp6Wio4PpCVAug9ceqLYtAUtARUn8DxNPKc7Vv6RPwRcXXbstifyhtk19jJmbbjawgcMUniztP8ioKZdL4PP",
  "key23": "5TrPUdR8AYZBtckQr5SDUVievJ3xyZUfsntvg3t1SrsheVSiZX8WdPjkS1nN7KH7nDQG3f2uuLaUNdkGsQUZZjkW",
  "key24": "2eqdMHW1FD3sAArbz4dCGw5rMGHX4r2YKt6n3GL1FeHenyepT4Y8muLUPZdSsbSrkcgY1gMKF3Z6PZWDyKPDfMux",
  "key25": "2LXFFWckCuAYkKoo3o5HYmrpN91d8XFQGYX1pS1iEHYV5Ryic3WAMUS2JNYdi86jgfeVx2gd7FtmpDWRLJUfFgKk",
  "key26": "3raWSywACiUU39K6VewXzVdTes94DHTjpZ1maozXTCsyaz6zGM5JmsdVT3k5AjNQg1AAxGuQocBGi9C1NudNLFLe",
  "key27": "4UV5g9QrLuKYyb5Hoo6Az5ASNNaDih8rPJXTYzk3J7YRP76TRx7nVq9apYyhEcVfeVQ4YTYtQm93QkW5iL3BrTrW",
  "key28": "X2MGGLVhNsSEec9CkqtYsURLp7Qj2ShcPA33qBYNgCJ9m4uysXehe4XkiiLhn3JxgcU3EgpHyrsf4Xo8X5K5TR3",
  "key29": "3PHj56Km59WdjryKaAwYZKwV6hKWqLHtrHuNyvtMCpYaJFhrQTfPR1T9LfbfFXzSb5aeUZ5iSezXSfuDUckRjsUp",
  "key30": "4G7HCsAYJtB1vwSV7XVb8dWQikpoPCzHGCB18pVqGYyBdEKfJ4mKJeBaeoPy3wBNB1adidWXSegWzw67kniAWEHo",
  "key31": "3UJ8vYX6NyWFsyXFtcFKLnjRTfvSRj7CyfiFtUDqQ9M5WEkbU9gy3moqihmFo1u4ZcTU9vsfPc6wrwXv2nBGRxv6",
  "key32": "2JgGUcw7yeSTXggvsyPWoinBx1izvtDMHPVa9SJ1udbeR7hnyEHaPFvpF2csSUm3A1U6r7FbsnPwD1YcUQYxMFVK",
  "key33": "4Gj6wNtsPz6uzg69wgRBC9dhUzZt6pxsnJRKQS1vwD5nRuMLYnXx8cwsDu3QD7dPxDAv4sxsGFSgs2azg4TJryNi",
  "key34": "4RWcmYem5mN9wFTThotWm5EAHktH7xookkw6S6jJQZKJmnvbDxf3J1C4hfF4zCRhscoq3YHauAJpbFJziBUkZ2hK",
  "key35": "2qQoy9Bc15ScbqZQNE68Y6Qwjhnck8tt6KAz4pNqZA8YKiUDfPfCcagzX97xjyG41RniECiAviK2oucnAZLtbRHi",
  "key36": "5r5qJRr5wPQtnvNK96iFHfMYBioovgGFHLC1bdSW4Pm1JSM5CL3QSmwvwW3eXwG6j6mBeYXDz17eoeLwjFtDJqEc",
  "key37": "2AmwBVLKecH6T3zkNTVorVAQu5w4RMXFruti5Frcr3CBhGb57RBrRUpDAqQantiyBDAh3Umu98s974ohTDzpoaYa",
  "key38": "We5LDfgfvnGByz4huw42Wx91ca3eAofNVUvw5QhE8B34eW2P8vsD9cMyJygDJD4W6WBV2nUjTreZ6DrMavgTUdo",
  "key39": "52KmAVsidChK33wiH3PqocZLEms3CKNFxJw4xMFazPAZqkhLs1pMo4nFy8YmyVcbGogwmJQjhUFaHLbn7TerNFHm",
  "key40": "5PX6qgc92w7Tco6LMNqrhEr18U9gPb1oBHvrRx92iSQ9mWUcwmGVzXTFU4nMfQ6uKkmSvK5ykSrZ7nR5ej3xNsw9"
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
