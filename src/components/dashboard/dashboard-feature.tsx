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
    "8U5gxcxFjJovd7hWJM2pxLzHE14275mWg8iVajWfj5VTytX9ud9mP2pcZtDsYmRKt52r19uE3CUDPLSHT9WZWjM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xfZ5AFnK1VSik1m2UyhvKyhBhJmJENoHMuvGBpz8BoULoteMPv8bQDDSTcTKi1yc4g19CttyrStXA11doepeCFM",
  "key1": "5C7z9xAji29sF9KpbjFLeb8m9qqi9gnu7nydsFKyzuMDoHZcMLfsq343z2CRGVXK1B9Wpx56V1FRYgRcoi1fh458",
  "key2": "5uWXGA6cdX3qF1yZLneG4wq6s3G1KHLX7RPdbMHpGVHFY9YUf39mYGM1vGmZdkvoYHLf4b2aW7wMkiyfkRkrdLVv",
  "key3": "31UMDywH2NY2i9nVmJowsjQ6Ds8EMKc33BrEgm96s3r76uVUwJzGi2vDeQ72bba9Kt3DcFNM4UKkF5Aq5VACSdGW",
  "key4": "tVWinF3DNQ4yC7m16raogrwz7sQjvpdiuNnRrGjB48YuGwJFzSDcrb4BXyJwnJswx3KcDufKiHPqGfgVTydxsw9",
  "key5": "4BbgCkrVzVsBA2LrtfP9hc7KHoTsbYkAhQ2NWPA6EkPGvLy9MKShg3tnewaoqtztfrFbjhimVgkfcFVMS1Hg6sp4",
  "key6": "3NTVsowSsgRH73fgvQoirwPZZqbvPX85yDLRvYnyENjPQwDvzhhFxN35DYaBBjqzV3s8AiNntutXZngA4BRrcadW",
  "key7": "62x4HG1SFMDvTMg5GcZzz66sHhPzRDhL1of4EtCVisnFedrRxgyUd4PxetGfkiFaVugZhVcntPrb97i56jZRBLNH",
  "key8": "2xUoezF1y9iBBzM58cXu1hC6huzqWozPmD3a48vqXUV9yDv9AoM41Ux6qtudKGeCztEKtGX81cd6KLaUg4udPTz3",
  "key9": "3VXZSRWtYdfx7eanvjDcxnWR7mXaiSoNAMfLjWjaKQzv15R6dQq7bma1JaqZwNREKeV1bGh4pb5W61qfbWBrbRG3",
  "key10": "37sTsaFgbhqBnV1szrxjNzzADDZp8kUmvr6zremQgtdNYPN9FcYvueqhYm8jWQdPF1ohGcULXi1vZVNrsoyjaZ2C",
  "key11": "2CEd1aSk2SiUyaDpr3B28CPv9R6bQxjNyGgi3qjGdEsL9nLFsgeFuumW8pgD2AHcRgudDVNT8dPJpxjknKsuPZMR",
  "key12": "22KxFstgdVyqayEBQgG1Ty2PJn2HCwbgCEif9tqMKd43EPruG1KQcC6Ukz82To5AbgCqBysbtKShyUoGKHXcsL12",
  "key13": "4Kh8YFx5HZUF3eUu5dvyr1Y9pfaG8xAfRUPNYF2US1AakRu1YjdsSDNbeuh3QHxn5Z9EhWqxf4z1L7ifzkz8nqiT",
  "key14": "3VjC5U336LRrQtawdSs6GWn54ib8UtjV4XCH4z8yw2LozBQvfCTuUwkmydpHUMc2TchyAKkkLjdrjyGvs5r6dj9Q",
  "key15": "4dvJ81FmZetLxKEYH1VUd4HtTUdD4sczTHYkp3MRp4BEUYeahCvS8gJWbEK669TQnAHaeno9pfqcvRp1oLQBtMH7",
  "key16": "55CnjgpHXHBwUufbUivpJm9NjbgRH7KURSMCu2ppzVArStF1NNmMyLqk3pt3Ujk7czEsga8VygEcz3cWNDVVLcUc",
  "key17": "3hHyEdNZpv8R8U3vrKSbQ93LjgA6ay7REQ46SJ6HbY2zkZ396Ub5x4wiY8z9eAzumSN1xdRDsFgC49Y4z32DFMkU",
  "key18": "3ULg9HijpnKn9XnnxhYn7FoFCRUMUeT8mEV1eJhMjTkasQPmMV2CPiDGKs5Mqs2bn6LXeNsQuabQfXaGQrVYf45C",
  "key19": "5BPMrQLwNCYdqGjNmZGg3XoosM2dBPNNfGUaZcrzCuRgACGHwjQBGzC66kuQ3BhYi4TpU9S5dMtPzpmjmJ6v4Dmc",
  "key20": "5rVtjYzeweuJfjTSn6BFxQDUDpEzSELRi7iYBtpNrYGuEjWFWTxuYpZER39oTUiqdq7MJ1FcVaGGVz7Ur9T2KmyQ",
  "key21": "3FgShBvjyv2uRKzvJTSt5MF8nWA6Y1sDxp4ynHi3AkHjrs8oTFKguHez1V8J42oyTjN6ikA5c4oCpSC69YbGWehP",
  "key22": "5Htg8dcKFH7Yux1J9j2jVv2edsPxTGf9mEQtHz2sYrqcnqJSVKBaGCyCr8vsF2D48UNsTuUep3dFX2Azo946mV4C",
  "key23": "3D5MQQVncDAnzD8nWpNME8oy3TphepwthvHMvr2ax5PPwJyqG8bq8rkWMg3Xmn3TC1hx7jT6dQjGykWMCSev7oGE",
  "key24": "49KtFVMdjiFveUKGv5opea7JFy7JmdsZydGRxpvm8WhrDydENF72wgQ93GLLkM3EynsMKqvT5iBHLSi7XkXjMF8S",
  "key25": "2jncmH4zLLqbvjJjgXWwSvkvR6LJRR5P7uW2sYJcEFK8Cg8Afk7qFobB4ezf8ou2EM8q14FFGT5CxHvoe2eztuhq",
  "key26": "3DeDR1oXzfdRJJj8NtPBwgXsGyuyjMijzGBjRot4Pn9maMo4QPAVFh2pVQRdjQ7LwhMN9wjVjSNEBUmahsEYWQ1W",
  "key27": "BR4oa6667AtkwtUyJZnJQt51n97o1zAKiHdTRRRhXRrVLxYwMtMBnne7Q5Eox73ecUfNFXhF6zLvnWxe74CfRfv",
  "key28": "T3b192HeLPFar69bzVHezgFWDBDL6LNVvi8nGA9zUXfEmV7yUZmxUM1xr7BLcXZjGhQgCDnH23Xbuxdda7NijVG",
  "key29": "3Q8kPzEa5bW9wJz2EDAT6VHqR5AfC9JXRDSkAFGq6ttncdapB4XvULg9BeUw8pQLhTMdJondSSpPLmQsXFFBpiz1",
  "key30": "3kYGcQTabUC6GvYY63zehMBRdLQjnM6vp6mTJvdzD9WYSFiZyTaXRSX68vEZuECGdTG1qyE736GhHrF2pb9ezwFv",
  "key31": "freMRVybrzxrBbsaYWzHPtoAGaitNXJUCvkNQk9aEYTkRPcSiaSoSKVDDBVdJfRLAYhVuMFkiRmmKJSEhnaJ8W7",
  "key32": "2X6XEAcMDCKXjqDaUoJYwyz7uig8Y8CJiMJj5Ckpe4aiBgCLJLfj296MWNp9vFeCJu2TM7Yxh7RR1dynpwJeTMN4",
  "key33": "4y4RVpRZzpiR9NVpSkfoBLRzhEz6bvEnMqKetqGqKtLC2gN3ea4gPGVbCGBWmcvBM1scvn1kg2UhqiZhwJKiNNNN",
  "key34": "5udBjJ5Yp4EgSBCRpxUoxYkk9GW5pRRgRtmucYAAC5STVu4xzxsgidrR1dQi5hW3JTpRf7NBNQCbxowrJDyBN9hS",
  "key35": "Rep3JpPKVxMvnbTBPGCc9EkmuJdBdHU2Svu8Uf3erXq3mCa4ywi9bevf4zsjiG13BjEo8DuDNxPGqrGayg2RSnW",
  "key36": "3p6f3oSJkcsjLSCnLXVgBZUqer3BytaHi3XkR3CXJWHbfRyWHQrQBSi7owfP7NBi3SuPQRHv31JGiNd6P6Fr4CAd",
  "key37": "46ToXtAA5rJEJQegE5onkzNMAPcKTiV2LqzdgKqmF1BYnC68GgEWzorcHTnSsn68rwHWjbe9sb17fDtnszFWHyfX",
  "key38": "5ix6sab1MxYzjFT8tFERvGSCB4XDT5pDMkp3e6ebJme3fBNGbPK59rHqBeb13uTBLbjNdayZ4xyhqC2k9y1pUAp1",
  "key39": "491cjWSTkCgaCgKmBUDHWRDVFiqe84GLTLMWqajABYKhZkidceJkuLzsw2Lk9D7YriC6x6HoAz1XzLsQ2vFfK9gR",
  "key40": "3eftDT1e5CbiCMJ8p5UzSRQBVaeiT6iYQLiE5A6kbAfeCe6bDXFK3URXTNh3ePCHAgDTyKVVqfxcS4qAukgvBFjc",
  "key41": "3Niyg2HnWVvqwsv78MZKdd2eg1cUtC9tvnELJ1PexCeBxo1wL3ePNacPEfYuZqQvcNdtQkxThLgVhi3tFAoknU3P",
  "key42": "Yr2aTEsMKRaiHjZLBymU7NmQym368MLAYXHYUpcaTUbPtigow38L3qkN6YDpjKvcZv7ku2ukmasqKysf3wwWg5B",
  "key43": "BVUbt9sPfVYn5pyu3mDuW25P4zxgDBw92YEkTUXLcbC3UvDBsxUy1JqBayxKapCeUM8CbGxfgX1MFFU5tCBWZz2",
  "key44": "4VGbrS43GkAwR98eeg8grtqjjVQqrz3xXxapT5rYQzb8uFSnvjUGHRDzu9wpxyRGgPofdN2uYLG6Fc23GDVAuQsH",
  "key45": "5a867ebUpydn2iTJg4Wes7BSKvjDHa2yWPcdfpWX3kygGSq9znRYKrpmq3a2r2NTxeikeqXgmDUsQMwMxArVQySC"
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
