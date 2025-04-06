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
    "56AUb5QuyjebbM6y2WYAX84ZHrPgvwtfXuveoNEpZugjU98UdG57LfBKJ9stoFaoxYkwiZmMoxQEvBpMrU9WK2Ri"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53WqkKbpxna2KSebDjsE9A62yynTubT8gHuDo52VKn5HQNgPwufM9HKsFKxhQit9CSbAH6PwoFgs43P7e9T98ZYK",
  "key1": "48nvk7QZs75ew1xajxrqHahDSswwVRSSQ44d2U6GKGVtVZ3jbsR8cfmBkvKipkQBczzZqnibBpYEBGjLXvcyqPD7",
  "key2": "4L5qgfvMYus7Vmka5wxwbojreGCnRVyPGmqz3gGpqCeKUDjfEVKwq3rKw4CEgM2BN9KrB8u1yvZcEfhgwVKYUg9o",
  "key3": "BFiTsEB6BzfcNCDDTRDu3rWhUhfYwv6pusH1EvwRTJMCm6jWnfRTkG2jBhib5nyfj8w5j8kEFVEKF9pCaSonf9K",
  "key4": "4gB2iB7Dc5DVQ6qZ8f8Smx4mK86pjHksnWdGhwTfQqEz6XehY32rwfutS2XG1Qh7cHHeUtoFdeUzy5ykkerZb91u",
  "key5": "2bsXnuCEAcCBnspnMKfF9sWjfzAxgLSs6NNnkMhZJfBy28RfSNgPDnJWetwzFakEL2NfAWqrAChk7oQWkgV4SX3H",
  "key6": "39KVT3yZAFNp18GpqVSyDufBfk7DNpzbVUtuE2VEvcxnxEDpPx2QMBt8reo1Xmg7RveyAH3D8yNgVw1YAUgtWhCR",
  "key7": "5paKN7kmsdSkXrC3J9698NMSE6MKGiA5zb8A45krq7SeL1hYdQqiyKLKKUoTA6qqskS1BeDtMA18VByijtvfyYQS",
  "key8": "2VueQamU1wmybQV4i1SohFiRnk7ksHCAso2orTKDgvkJztsouzJXFGdaCN6FNSFHU5HXcA9uKgFL5swu96ww3tHz",
  "key9": "21pYm9pGGh8WffxDYjBgwP7WtFruqTFpcoVWmJose9fGBgBCHJvBP8FENh3FL2MPiS89zDSUkpzxLzGMFTV4WPAk",
  "key10": "SNpx3DZLCu4JZpCZA5hvakF5nRosY4c1SfdgX8rT8pKeNSDmcYgdqKKi8XASaRid9u5Qvmn6YAv4eRm24hiHP1E",
  "key11": "FDFxGqX3T37b9UmbPvjtgYzQnVidQWcKebazWPudr2qDzfYKqF22CCz5c9y4noZ6q2dZEnhqhnXoo3btWZXNjhc",
  "key12": "2E1gcQ9SQKFXvWFjq5E1dRi6xEisnysFUpjiJ4W2AdvsK5d3c8gYQnnEUPNpNxcS68v3cQcThJTatkXBdwFFBJzf",
  "key13": "3zLKhTKt3jGYBR7LQDHeg2T93riNNw8bw7wymzzaUAMq1NLBPgDG78j1yqSMzocNaKjk9SAiVCgSTi3t6LTZYzD1",
  "key14": "5tbU3zosEdT1rRusHv33Z4eDSc6RUaaG4uKev18DV9qf8tPmtEPTb2RNPvardubUbU8EbAksPAEGYNXjs6N49esp",
  "key15": "ZiFY76zzsNonjw2LNe3U6c3vBPQByGiLMvUKnajxVRGCy5QuXxrUorvvoT6P2VZ2nYYggYE6jRreL2q6kjE5cZh",
  "key16": "2ZXnrhkkmjdkHM6A5ZLqduMkwiL5LUfasCuHYmJM63WYis6KhNSMDGdXptraooB5hBhT6TH6PdyijHkJYzPkbH7x",
  "key17": "QzL9FcJLDqgqU7vTDx7de7QZ9x6GUeJAr8oEd9w8SuViSnXE39UUvoYDKkfAx6yhNd838Gs9ryD1iRkDYkWKJ3o",
  "key18": "2SZztPTc7TvBHaC39ku7ZwsLZwKpb3nr7vKThQNwYDQkhzY16SuPVQNiFQohMe9SRLiFeaEPDygryxXLrSNb3uZQ",
  "key19": "5DEtRQ7PQ1LzvaHCEJMTDZvXjKAMrvp5z313Yz1dSk6SpQ4tevyiGNFbiWz2mWMhBnbQg4JxQ3CTEjhLGte8zThE",
  "key20": "59VEyhBaBeVC3NuSbqDbLUX9EmZSuwg1zKzYvFQUhKdh26J91c1g9UDwWuLSp6fKKFPmS5PN73m9cMNcPhf85pRb",
  "key21": "2SZaTRDfzPbDcyYZPwwSizukpRM7Xn4GdrrpVwchJkzECpAG6jTgqzHst4xdaDComiZygj5stdfUcv1akVZTDwkY",
  "key22": "4AcRDgUAJBqs82jcKum9WmSAc24h2sBKhcUNTTPUvqGY6qkkBDmL7zWM2sgy1UFNt86oWmLyJJPnThArDj8ZGsp8",
  "key23": "4fWDXpVC7E4xb24P5PHmN4nN3eGWr5Umoje5nsRiUFs1dEWUQaqxru6ezJCrVWGoChq3URLvouZWSegJi5ZF1KGp",
  "key24": "eXsaaCoPn82oWtw8aaBRct9fZVsS2HcyQEde8JACDnzm92Zi6P877MPBQTXPyY4zC1a1v5i6aRKNVZNGLBBKJ52",
  "key25": "5CraahDPNJuATEC6tjszWLwrKa9bRn9igpcmpBVsr2xji8geKpTinXDxuMWBcigAh3KSCZzxKjoiKetJFrhspZ5Z",
  "key26": "2PETWuhEiTjTrbYGjuuNvntGrr9ba2o71HShCdoV4Nt6uVWY6G9UdcfYKqNzWqsDx1YkdeYxDweiLsNrTuHoEhts",
  "key27": "f1FjwNJHGnjWd44GFqP5oja5QDDHvjPo2Du9gdXV5gLPtQFTwqPvZL3YmQPzeArwhCvcHvV6LXzBqo5CEEaeLJS"
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
