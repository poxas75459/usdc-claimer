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
    "2WpVpQCnpz1iR5JXq6jjUb1UCMSULXxqQy5SjjeX43Tb82pJb6axf4nJJT1948KwYZ7u6E9j8qmeCifN5WcYVDAA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FjW7QaYnSDBWw2j2UXNuy1BpYPAgS87wgfMjDkmEXXGGfBacdqQhQYWW5jqXmJtJF1jUsTiNioA9Z3ssNMDoUMm",
  "key1": "P1SmJqUEGpJd4aMQHyonCdou6FjMLYUDkDRqyWAkFHSRdCbBH3mvcn8aZvrxb76nZhgrFEhmudD6s1c2NpBstzL",
  "key2": "5mWPcFCAFxKm9hVPHQ6XKFjWJtHgJaCt1vK43g6Z5yax56pVAUo8anvqvqwAMSJ7G7TP1q4UhixESfDohZ66hF7W",
  "key3": "3YjRhzFWKkKjdVkekzbXc3yndBAkNny8rfhW4vxWwYR8DUYKipdNhcHfvvrNZ5zXKxVUUcS25st2qNDNgk37otMr",
  "key4": "oG6UVUUPV1ssNEbzpdzQDDX4KSS34vRVDdXaZCXPBASaBt8GeqJwdTWJfzbLvEUgQQGuGM3sdaftgzoKMj2kMiT",
  "key5": "54ZFWb9s5x41Hy6un7QLrvE6uvedep6mQb7fouiJTvCP5a7hyMUsTSs1q5KtzypwATjBGPRhbsePgcqG3q3fte93",
  "key6": "5tT4jaAVmAjA8DK5jk8DSujxvshxA96ATgLPQkKDK78UwVQztFimNYP9TVWi226u4BVejSXESYTw3yXWrFfjXMHK",
  "key7": "5GUowZEmwfAYtyaSNxa5DhzFbHByNYaTq5NtApyLUJTrF4PYzcsZdhsk8RzmHC7JHfYe8sQ5no362QfzEyR84krQ",
  "key8": "oUqkmQ4WCAKwYo79XNtXQ4jMfo2K3Nn7AQQs2jJcNdUDgjp6zYWfE4THe2ddpd6kvveGkHYhzbnfEDyrnUdASJr",
  "key9": "5DZmq93DhErJirok64M39jEzxurNaGmo3NS3QDJeP6TtMKTEnkp4dU9VLzzBGoX4a2VQG5UsSzsnddFKb3D8iLGt",
  "key10": "2W1KX9xrBGRvscYxXRQi7itk8jYGbjH4a8vWWCxBjq5gTzUNsJ4JgM17CNxVqwCydavj2AUT9PiiBD4joXx33rEv",
  "key11": "2ZjMZNBZX423NjthVWpLDrqghubozQ7mqzgvsB7iSx6r81SARN8scoAuVkwxHwrGqrsMuA3dJMXNQXgnEVUt8Lzh",
  "key12": "3wHmqoLDacYUncLbpo2EnRDoRG1tDqxQfZKe37bxexQoXLi8R7Xznxcipp1tuQK6fQ8yTc3Fs1HT3FQ1zkTT8LjU",
  "key13": "2D2KesHTcBuqr3zB5kHC371ZRnE59V1Ji2uNn1qxsChK7186WqM8D5NnFkK4hx98hquD8p9r2G8Zh5u5esV5bamU",
  "key14": "3SaFShdDGHij88DMg3TpvVH7a8KzE5xcLfQKDgzQUK8oXwiMz1Aj7gnyw2zPqkFwQPHfkDLrPdXAdmhXunP2Lqne",
  "key15": "2CV4UYHb5KgKWupetWkMpWTXcBg6wSP7BcjMRnK8vxRFcaQ3oQEno6W7F2hGonsBB8DfbYfRMYX5Q1FV85DUayZK",
  "key16": "3xXHeU3siqtG6km8VQLbkoyMjAzErg8bdSYrA6xAasZJ7CT8DLt571F1pMjZNpXcmsd6AmRRGJgu1HQcqRnntaCd",
  "key17": "22jMa1hi1t7mafSGcNtowccpZstqKonAPfMnhEKBmqrS2iGZjiUSTCqkxKhTdY4CZX1PwLuikv6kXbN91MY8ffi2",
  "key18": "384yWJAr9upo3Pbe572Quy9oj3MX4DsT3y2yyrEcBZNQzUAoxnmtYb3xXxErTzmvsnLiMPhejnMQGBpPKGvVXeBm",
  "key19": "2HhW5sBLYetv2Qw8SdGx9myiz5msHkHam7XmE22bXDcUwUmz3WKZRPhsS7vieURbRGfzMqEahcAdJBFMWJ73F39y",
  "key20": "67Ron33ZneFcNn34LuG4CS2ukrZKvrthHDCDGAP2DKpRQZc22AiY1z6HWwQeACNU4d7Zq6gNTtGb667gowhLehiG",
  "key21": "3CEg5ModTnK2Qe9mTsQVcXkWuofd32YTdiu5BVGJg8jGLGmtw1HkhRXSmYf4hfQQrQvf1KQtHToWgehmMmjBgwde",
  "key22": "47xTfn1nX7x55sF4SSKCUvUDtgTjEnQnm9nHD1KmxjFruRMP9hsNHZLStYFiFkgJkvCEabApz1ixFdv97jyVnTPU",
  "key23": "5xU8CbMhP8mZcMypzCwn4H6JhPUWCs5tFDY37bvvg3jWnadkAcwZoWNw3wZ4RPUVRZ6ZkziSgU3h7fNgvx6zSu6n",
  "key24": "5F45HYa7cT6tEEdcRdpMD9NAtLB6PBR8rAcjJm5A6w3669WX4vg2st4x4s6wQEGiw7SpXtNpegNcphQpCSVRkjEE",
  "key25": "5AXFWDWnQMn4KuH77dRxeYbAXcmY9CypeYznnjU8Dz3u9Y9EcYdkbGgq5J1S53NiAiMhgs22QWcZRMxDCk8PtWLA",
  "key26": "4ZrUKXvFuN9XMvioXe5Yn62gQ2jqhiB6tvq8LSAh8Q9vCUHv7c9nGqMUqMyXKCDqBm8yM9Uba5GkzoNC5YXmmzp2",
  "key27": "5gi9fNavWHHc8ybjr3cSTH6U8fPkwdqAM5iRHAC2MgKaUrkyArGNJcZYjNsVAB8D7skwoVWWdHFBvRVusDAr3zq",
  "key28": "5MxwrWGWzoRzNK1aTGnHhQwgAsNp3BN91UpZ8PP7vm23zUPXvXG6x3CPnQyM3KRuWHqnKDsmFjpuBPhdHNimpqvV"
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
