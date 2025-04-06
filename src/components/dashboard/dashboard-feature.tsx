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
    "99xrZGnRQeoffcuuTuV4ujp2jPvsrVndDHGejf7iELwKp84stiE9Xe85mNMKQfpuCgRJoeugo4dTkTXwvWkFvpx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mM8tvUzBbgPuYQBucxcsGDJAyy9Jf9UKWbSkufmeCiDaUKzwJYZNXKeqXbk1H7BXhFJmmcLTsbBd1mg4QnKNXRT",
  "key1": "2pTL1zvDAfwFk4kVsbUGKK9BR5xdomuWkYwUkGo59EZ49otMSKHesn9eDKLg3DqFbymWM3PdNEjL7q746ZKJob5h",
  "key2": "eRuHdogtcpvuevMyLe4mS2EeaZUDGq7gt4gumtodumA3JPbTDX4MbYfFdTgnmaBFYyyhxPBkNzPVNVvqGD3ioWj",
  "key3": "3tXcnHq1wzzj64SZ5WGChKk87CfsudGPdM7shRYAvqiZpMzLr23W2XR8CeKWXU3EkG8NETqt6EZ7FcFQoTJxpqBd",
  "key4": "3ZQCcia9sNQ4Cf8oSyw5HXes2BLKxZKgD9qognGNhNCHt5kFDhR3WL3GckkuTkUBR8Mgi3AFkFqLUjtxMgH6uf4J",
  "key5": "3VEydD5CHGFkpuST9w3M3BcSXekhxPyYSXKvoRHhWBFgHcSrevoriFutHUdZGmz6dAPfiTnKu1CXrxxeXCMgWRsY",
  "key6": "3BcCwXoLxdcZrAibt5J6mT6fJxXGVsSoYoHroFZAkSmHFinvUgWFV4QNyCY1pTCKZecZMMazW3a3Cv1rhEnqTiGz",
  "key7": "thgtsZDfVUW6DYzRa1ZNdc8uBc4pcRBHZSNzapGzgyNMeqJCQ4bGzMUVVpqhYnmH1y7N85fW5VkoKRS9MQLRAz5",
  "key8": "5xH2eipuUqdbWCUmssP7MA1brfd33UJLJuqGx73XgeLaQ8hWA5ccanCbGU1jnn6HJf9oDa2QVBz1BGEnU2g6ofZV",
  "key9": "3bTmFrKspPG3Pu4HCwhuuKj8rqpN2tP4RQPtn1d9XKXWBGFHoWCRyuzPe9pP8ufyWgii1fX7iQvgtg3VXXan9niR",
  "key10": "4yRkFaWEqayznZvE6CibKuhvRzAsVHFQt9UAKa1AobcPEr3L7Z9GxnfbzStufyL4AcwYRB2ytRU9sPcYUYG1Cw9S",
  "key11": "BqnurELJdAi6KvSfi2i3mjcsvdy5S9msjDLx4MXkWgcszNzfyUEJTXSrDfjTF3eJxUFuzJhocQ8qNzxHUErRnMe",
  "key12": "5zQuWJNALCshtdYL7RLRUkCBWZDA7VEtx1vefncSN3UobQd6hJ3oYv5bZYxoYCmjKQ9YgtEovTfunYkkTv6ykeMZ",
  "key13": "61uuonhTaz26wxsAfp316w8JdgtUjvNP2Y6NDN4ZuvxUVpYY9Tw1dqT6ZxXohTSkUQKmPY4jLhgR1hu1bgekuFDY",
  "key14": "3vagP2kfkga12i6vsqyfNLpPLXdXqUcp5H4cemoyitQPyFGeobHFsRP2SaShdArNGd4doQikrcwArTRmNmFCw8K",
  "key15": "5igq2MksJJtMa8wsjQmeoVRzDEpoe1MGJfFj2vJGMZdqogNfGgdvfca1JgFUzUwRGyZv88nEb4Tf6mnQHE2h9cLa",
  "key16": "2UW8cxkSs7kGGFv1DzGxQ6Qh9uuDTGH5p3A5SQX4uVvkHnzv9hfniSUAexP7nczF7pRMmiXWw1e5rsZT1nwSTAJF",
  "key17": "7b1XJyaXG5thAWbmLD3ckVeAevqBWMoY599K83Hkx3YRQSvL7K8xisVsJaHzPs9kHaAHFHLCBxADngX4Pxwx4xe",
  "key18": "2WPXjLVBRzn1LrkAKA11vmcbYAGx5VHCheNmVGLKWsLygieFMvS6ApSCQxBY3KwawFmcJH9VBcbediAVRvRAJ6mA",
  "key19": "mFmuH7oXh8EmsZo9PY4ieVnmTfTrgk3tQRqUWPXu6q7GezMsiiiQwwCsvifvXRENSWRFnvEczwirvaruRYvk168",
  "key20": "3xbUL9GV4ghGhCpeedBrq1EtB5mTGcN7C1Dpk3BWe5RRzVzWvRoaKB77i6vgYwtpJLqeNyZ6s63tzWLX1K5K254J",
  "key21": "5VWtq4M3TkbMFuCzP2Uv8bM1EFvK8LWL3TELLau47Tgqmz2x6dU3weahVMLnWoENQR7Lss32q7ky5S5kFWb2uxCA",
  "key22": "2K2mFzHqv6J3AhPW8rvUwmfuQMN8BvHwuSoHJ29oc4wMwLDwsbSnxPwuTcempEzQsdoyQ4m9yoy94LfuzUpJvhGR",
  "key23": "3GkUtbbRcjYCXRS3KRB5s8jUTBnJfcYJmvmQTCMK9hAUkxMH8Gc8WnXiJEdGJQttXsZQ3CwQeVBUQVFSWkXhPYmz",
  "key24": "5wqWinS3pFUAPaYyZsKUVurjyhEYLrLvkDe3oyb39wsC7Gz1QUaP59ZMsuxcbSRUYZSvcaNAqvf7jkpQwRcpbFeW",
  "key25": "Pwf7sEDhbWU72KbLpFivLrmKt6ZHSHa7qaFuMqt2yHeCLVjxtFcghGs1FJVf7GwmtojenrbdUbQixHV814dHivt",
  "key26": "5ogVX8qwo5VGLmGfAZUKHWcviwkidXh73itUCySw3uvNNV1G7oMxKzqPYZxt3KtVX9mgQVPgLQJLQYC2jRE37fKY",
  "key27": "aHzkiDzY4za6Ct1Lbjvy3pDzYod2mNEdoEGPkJUayEAyjZovZDXyJAJeDUUB6ZwYD9ZY48yyhXGLsHF8W8M1Usx",
  "key28": "3evueKo1pMe899SSfH8ufo9u4JmLVho3acGNdv2Ej9REHFh4Ezx9BAjCspfTw54FqhgYdgMVKcFxLTZib5ervQdD",
  "key29": "3p7o6srmcWvv5YhwBggvdfSqYRvE5uCdeX46VjqvHZ3DCmF6GSYGSdQ8EendUWPhTRHqPkGFpEXKbhBYVzxJmPc9",
  "key30": "5UY1gLb2LVUjaug9KV4zXgc5ttYM5GA7ss2XdE3XuH3GsR4ATCwB3AoS4FM3W39RfmvnxjehtjmKg5uxzAr13qed",
  "key31": "4i5KHdos2UAciGj7nMAGqQ8T8KxKA6f9nQZwXEq2Raz7Gj9HqyDyBcUe3P7QtoUCsRMqXP58auzpP9v1jwzeSmzz"
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
