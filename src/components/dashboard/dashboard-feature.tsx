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
    "2MvjDudHjeB6NuGxE2rUWNKuHeB9U1ZbhyLWvX1pVvADBNdVTqdd4PH4QwSqBky8Ae6GhWYPZLHV8QR2f8TwJsGP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HhY4F1NhnszHHecJZF4NwW8jEAKNzc6F3DSJ6oCspeEeiqSpQmN45ChvY6YWow5CSfaPzTANnnARr86pvwueELE",
  "key1": "1yfaMvQBMQDZn68ju2qh1dExZddmuiYoXMMorAoNKe5wcUV4FDMvQWUaYzY9DYxNpWQ2cUXw91ZTSPHmwZajLNj",
  "key2": "3Mbq1qGsjr7PssUHwXWAWVEDpd3m26tLWUjpMZQuYv5VbMqhdJLmfVCtxz1XZgXkVVtyWc3aKzWg6NpxcTL4UXCc",
  "key3": "3EdrzsPJ4f2LDGrzeQrpuWmmkNT9VLpUV3bFTmanhPt5gnn9WAzwaQ6tED9DKsyJ7HCgRnN7nYoFADZSDUMfhi17",
  "key4": "5dH2e2dYABZU1bKV3Tq5mmJq9uJzCnfj7Ejoq9oz4fmtKUv96BNv4CQptucTyZypkSqRbBkBvK3AGfrKXrtw7qWC",
  "key5": "66rVrFqcT48G7LUDmsxeaTwwmpq84uvYhQSRdwKNgYQrfEm6u1McxLLE1fQKvCqZ7UnWVUpLf7XTtkGLqnXcWtUh",
  "key6": "5dDoKkHSLFPVG8UjLn9G7xoyVqyWBhuJvSR94MZb3MsJN4MSwh7fJqVpQhJ3XMH6SU8Sz4eouMEcTc9sgSR7Jgoo",
  "key7": "gCaaUjJqmmdJdbPnC528b4C4d6Ju9cqBsDAyxL7FiC3CARzQvv5wK1LnqRpo8gDkDQPnJ5oRD8x7fVqpJ35KRDv",
  "key8": "2ALXPDrqp5aBT4WAD89K5Jkz8FUfEtnjbKiQfzJ47UMV4eXqTWCZ7Nz1wAiGcckEFA6rKXvZpT5cKXEG7bdDebjx",
  "key9": "4wN9qXt7ep514mfY8gkvhCM1vHAwCx8rhPZeeTGTgiSzM8xYaUTR2mLaKTcHqeiHdFjVAWx4RyFFXzzigsmJtxxo",
  "key10": "54CeSg6ep9vW7CqyDyYjGVJDb9MLCSPyZdMiejqKLZa5K5J5AUkXGySdQGh59yCS8NZy11oRpAKP7t7YirXDw1ph",
  "key11": "4HjLhHPBTVx2d5BcTQpg78zE6gZMnp4dhLZr6Dxxh1E2tC33q4mBk39hp8MjdnBs8jfxAoHpZ1Mf1z3Tg4Xp8QdA",
  "key12": "2uL19gtDBg7dxAVrpU5og1tfX4XDnb9meWXW98qvA2q13Hwiu8h7uozDzB3QfqktT7o8DXccdM5EgaLbfTNqteoJ",
  "key13": "642hgBsW25tWFx28z4HiZYEmZCpygbwYdozjP1bbvhYsPRWGzohNyrLPV6jVfUBV76qX76oAbVVrGHpKEx4QRKBa",
  "key14": "5ik8FaRTxJDAZWK4F9fiZ68caGR2JQPCFwfAnxEiQsJ139fcBKuSnjyKeYyVYn19tLfLUY4L6fuSYWEijZwLNorF",
  "key15": "2c6pEJmEomJ64nSkypRtTdKNFjBw47DNJve1Eto7h7WQr331xB24eE7sx8HdhtqSG6XPUHzVcsuTSHJc7uM8DChU",
  "key16": "49qEtuk1WsHbRVzUGSaNQGqPno89boVm12RYTsYpZ1S7PUMERWHFWvYJcTUydTXkGFy5FUsstS2Nt33vKovqtyZG",
  "key17": "tAhqJA1bd7Uvn1cWk62gpAzsPVmPgqgENioe4WJ4qoeTR861CriVUwHzd9kyDhEWZ62G8jD2J52Yoyxm6SMuUjB",
  "key18": "4Ex858Y6YLnrGxf1CsPM6u5StahqaKgTkw75RoUK1355FkUre8PDeWk6RUdPqjHPLqZ6JQiurimcrLm2ACc7mqRD",
  "key19": "5MqUZMkCgSPcJdgcwVbKGmMZo1PipeX28U8epK54jjRUUtueUMCzfHYPZPgh5qDsUYb8R8u7SpPgTJuQjmsJ7j1s",
  "key20": "3WtmJ5p5Gj81ddSeDSjCX2NsQ8522B8jwGd3eeF3FyYbNqHjGzXU5bvdVV3tQBiD3tdAUMxKQJBwuHLWd73EzJbV",
  "key21": "2ZVesZ8RfHwvHeW8tnDhAJYMr8NVHLRiNVokZ5PKuuxvZYdYzNfjsCgM55Qcq7QAgSWYeueikvLYbCSCq59UvnSB",
  "key22": "29BmupNFFg9wQSBaDPVFdFDxWgeyZcNeETAGtkYSimnM5cReai3gU4Y6wjQtCwFcA2tPGJQ6uiCNZcbzL3gHWcGs",
  "key23": "5pyQPhCZwrA2rNJKPDmWo1CWtThWrpBbqryC1hjEkSDP1QmTJv3yNX6Z3xMc8fpBYkyrxCb4gnDzrBFd4AVek1Z",
  "key24": "5u9Hkx1vFd8bBJcmdZJC4NFaNgvQzCRngaavGi1k7DQ3qfpyjLLvpjL7HSFJsff9VE3n92c4LJGfNVAyqtcoQhCC",
  "key25": "46TpxTAUbjsdfx678DJnPv61DcV5WGLTixYqt6oZNierPJ3Ysg3GXy2bckv2UvC15soTP8wnEvXh3AbzrwZcBd3M",
  "key26": "39qyA5fArM1tR4Yp8BuS1pgjk1BwouuLmRJHDRXqyiBvbDjaofhFpjX2v91QFBoNtxkmXZYaXoGMKeCEH374Z8in",
  "key27": "2LWd7JbGW3VBDdtfgUrBdHobzLu22YPLTo7V5WYYF8HQVdEkjRta161GCTCadxcZv6uF7DejCAFqXN3VntJeS6bc",
  "key28": "2kntg5HGhPvWMLX9o9XUPbwatamXUWS666U4mQfueMETcAv6r3fLmqnKkB5xK7oA4xZhX4kQyRoquBY6rVQrLpzU",
  "key29": "Q5cqEHaa4WRVee3V4rjJ5zcMsswrnY2UfMwXx2eBgyeyY3MzKRRpwm4QtG5VtLkUhcXxqwEUXgr2DKZvRKAmoiZ",
  "key30": "5sdBdpTgKRh6MCUKYEUte86ms3bHvFiibwrPxcmK1x6DXT7dWhQLSZjyi47AeSGf439LwDU4tU3dKsS1RhizcWif",
  "key31": "5gtCcaEx6M5JFCgcURRJsmtBKbBumTG6PdbswCiGUNVrLCS3KxeQBZnHWT28nPm1FuBq1m7qNYxgnzjJqwkzQiT4",
  "key32": "5DipoUc5xu4ZM5wGZ745ihrCuYga7g51MmSKhoKR8P279Qkzno8GpRMiESpiRy7HgH3etXtwxqy8CyqapqNaY41n",
  "key33": "k29KFYNdQycminn8oJQ2vgUqYLmLwfmZNkXMgs1cpu2ZjkewasR77dYzRpEKebwQkB8YvmEiyGwajonb3gTX6kg",
  "key34": "4QAR2NTsjkqw6mgsLuAQSmBekhXqahSH5An6nDz1bnTA7CQkzzbSvDPMrHsHmYdMMBvcNS5kxS25KwU46TUVRCGw",
  "key35": "28nQaYhNjzWkTDjYi2SpChtHcYQnE2pRPQktxFzfc7SMyUngwUrNemR5LUmEy1F7rv7CFvbDZPgveaUwqziBjm9P",
  "key36": "5PMv4emwNvxiZE9sYdASNvp4rpPMRpNXkMZujoN2NxJpyrTUJevmDbE8KAz2oWzn5Vx9JYfPpFjSVDbhrhxRrArr",
  "key37": "G9oCrVfs7cNPnaH9P5wonhtthjnQxCkcKUCiLsZ2vEaoPGXX9dCXf3KPWLttsdLfFkNPNb7BCDEKZMrMqMe8HPh",
  "key38": "2AUsJFMzNTFodKWapBbfufyPPxy6EYas6Ydv4ciVtCvG14o9dYaDmQzhTVPSpseTJ9TzqMZhmpdCRfBj1xqbdHGw",
  "key39": "FmzvvDxdmaUJqKNShFopsYVBwUQN6MY9esCujLfp6vsKMpZqANrrkyVjyLW95d8ok2zerThf8UGCyH8nLk4hkGB",
  "key40": "3pW8g7vadLuoPLdKuHc4EH1eKEaUNxeJicEvD6mpGXmrbe5XGnb2GDknZywrp9AR5UGZN7WPCU26GnimyRkiFBVp",
  "key41": "4FBADz2zuqs2eXpip7JgY4brk4Awx8qWN2EJYP5AQtmwZH9Mz2hNqkJ8ZcbTV5rPKWJSsRLzT3m7ryYo8KrL8fg1",
  "key42": "2tBx14sgqb1owfDqiN36G9VFHW5gCofeFCoHZ7fSKyo1ja2mqx2eggQJNSsGnEXow2x3bECKv46T7gx7jUgjKBcq",
  "key43": "2kFDafizhoAxvq7dRJH3t7Rkq3xKCq3GurFdBwvp7JSxNhubm2JaaoTKVtcGhjrRHtMo6LPadrhLoY1rEypCpRag",
  "key44": "3o4nwcauMN1wVaX8YRL6P8bKHFCeaTxpuzywscnxiuPfV3S1kdL13DQCnmTRou3SKB2cuHtkiHDsAAsSKQYRXLQs",
  "key45": "5WgHVaLt6V9W81K7NDMpFDVHop6pnh8QfwpPMEHyRLPbRfgFKR7KX5ZTNrxD7ujpCZLZBEcSZPFjhEXZZMwRo22S",
  "key46": "3BuFqycYQ2yGUDyUHv9s6HZnNagRM4nWHdp5V1ofgCZ6T89dirm3s3id2GheXtGpiBvJKnoctWcwZZUt8UYSA4ky",
  "key47": "LCX4WJvrL2RwYMkExRQ273qhZhBimWNe9nJDAGGZZSmwUNitEoocFw43CUjVCXAFBsxW8PpsaCdSxviWUXsyXyN"
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
