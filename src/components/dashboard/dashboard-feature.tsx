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
    "YdH5hzdjdbZex5K8bn5yF78f4yS62uuwjE5r1cKsao3PPsnxKMgvpuNvC6LCQw3gzaSx7noz6u4Z47MJfqAiPqa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sx8zdFDsPCDAgXYbx19iTKDvayebdyV1iTBm6XFtzC1UGL5F5tVEKkXnFRBFhkqd23gXctYkoekNVuQkPRfb8KF",
  "key1": "313Wp6ZmBubkBpXWHgb7SpywC1QQKkwuYxj9QEaQ2P8mTCHA8CRZjis327or3371KJyXMLTz4hY5x5LJvXMCrK58",
  "key2": "3TUgfRvCCbpqVb39sqJ3NKpKNqieuA8H4SyAdraZqXJULMZmX8BCD5uXNkH9kMMLKXDUcNTYtDndpAGq6pYerrTB",
  "key3": "3JXvLwaFg8VwaUMZRVLBWihByGF6ngSArdFPJhKn2GzYnPcySUwoeyJx65owreiBNF6KJYfQaVF3Qu3iL9ARBY8d",
  "key4": "5p58ehsfEtPPjTUrBXmn9z3vWPaNFXYjFL7hyhLVbTKPPimSB5a4MbBw7puts2AUav9dShFvzzhWVDK4sP2KUXs5",
  "key5": "5jEs3H5Byba2jQx6NhgJ7TLwGLpq51VuRDdupZJZvbZKiZnWRNgz7rXnLCoZbSQwnGYNer7wK2W9W8CKPWVM9MMB",
  "key6": "4ujUwVKSYBwWwtBWgyPRxqXfLCqfquAd197nz5ALy6GDg67NMbhcrjKsLPitKE5CQ13ksoX1SZ7BdNPtboJNk7Bq",
  "key7": "4vtCP5YouxDRtvnBVbV7cdx9M1cnofsGXknysjCfUozRfZ5cZzrhu4kxzeYjjA9wGft1CfQHSvxQN5st8VRbmZ31",
  "key8": "qZjYfhcyPryDQXn7zMhfVpp9DhhQoxWrbaqYGyMXSfbHJo5Mg977DJupnsw5ksu51sekfontDAeyKPj4dEiiFyi",
  "key9": "4KshfjdH4AHr6WaMW7hbtACe8zaYQQZnV6LbAVkDrjVqiMa97LUfkd4s4rzz9wGUFBboEThM3hwQ6GHczs8q2tnc",
  "key10": "4KfWZ44K2BJAaFu2bU5CJtwiKKukHsVyNafTAmoHK6nsfXajVve6vsoQGeHkYdNbx9TUN3CaMy93qtGnFe8w4a35",
  "key11": "5a2nCqGJrhXUn4tpM21wWw5jqUnWThJnwFjLdg4szy1jB7i44SQAek5ikcGHbcHymEQ37jSkhmSEakKdyf3NsEie",
  "key12": "3H2dhnuNQjnMMpcLnmPZ1QkzLoWRgY6xxnPa8aEnWZ82mFoMy7SgCUHdhCuPxQ3mBJDj8Ag2jJ1N8qfdC6rWmfJi",
  "key13": "3uJ9UGh8zosJB2EceGA13CXNm5SYAkScMwH5TSLsLmEdFcpbbp3DcVDHuax3q3AoEHfHQDFitn5kXBvwRrFkPnAE",
  "key14": "3HvkuLxHdvguDaUBAZCj7TZ6CQsSdNtyj8DbkffkqAm2HL2eGUQTW85yHsChdSnpgZpBqobgSBzFEo6jj9rpAKxq",
  "key15": "3JYSdguVE9R4MksYreL4on3dhLBz1CA97H8mhjyTgeeWEnymYcW1xz1J3TZZbdofF2u6quDNc5GCgbbRKEd8TMDF",
  "key16": "cB2R6HU45X5ofktx2EmaM8LVYH1ZVHmjuSuD7wEfA8vQHRD2xstTTUfzj4v2GTF2kTQJsvY1dnMyGcUamLjsgv1",
  "key17": "5zyvQaazwefhJQcyCbf1LyFivtXKP3goV5AdGaTJiqoQtRTEfK19E27UkXBTaQp5UWfGZ7uYNWQp9jHWGKUux7iy",
  "key18": "5szzJnhwvNxy8rWiYjaocBzNgvsFyfvSMmvbs2Hk8Z2K67KEwhHqFwiAypqUiEWZ1LUoG78k2Q6JTSdTP4FFhdJ6",
  "key19": "5WqEKhAwoGpzGhrDuRk794rFi3sRRPzdGgVXBZcKMCYirHBtupFgqeHrygWxMkgbLSTnL1uchDeK8Gk51EwNyki3",
  "key20": "2fMwSdQWtAFvK159DAZMhnJ1fxY6nJrHEjCruLExtGikcY4LMaJbULbdRKF2Qjp6kX4vXtzSjeTARa7wperQ48XH",
  "key21": "5s6c9Aj1dXyJZrgFWEGvmR77y2CmTpYZEhTyEzV7dnV8AqotDYCNcaxwJ9L16dx4Vs29HP4diswbFscD296yjuhn",
  "key22": "2i75Dhn4v7d6e44xkbYSFGPqXAutACr7PF65CKRvCiDTPJGSmCW5cVCx4eNSiawQF3Z9ix1voymT8SRC4Suz41Mk",
  "key23": "2tkcfSywYryCvrCfdnDFwxJKnHiLey7SnyqWCXSzS1dJp1mVoGGhK6sLksM7tfb2NcGDVXFeTfCjeZcsx7SX1VDg",
  "key24": "4DX3Nt1StsJSa74iRuzXA6c68g1wzL1YceNZYEeNtCTLSgSxhBNH2YbEFt3qxqe8RPk8mkwssRyfuuDc7zanZn5n",
  "key25": "3CQURaJU3Aj1z25M16EDPwpjs1wrp4ZgEL1mFSBFr4xzCNtgHdqDWenGUKaKtXnpqqJZrtDHFrnvCV4BZwFCJSVk",
  "key26": "2cZujM8gxown6r5Hz1tFqc2B7dYfmsYQZYkXP2fP1S6xNAoeFqnWZfgqkaWTsykiEM55zbv66LtxRLroNfFPsCPx",
  "key27": "5qe79rZc9VMYUwFGAmoQ2tJESbbb6gzYsvQJe34rAcJm9ViWQcWgPfop6CocM221Zyvm64kcckrJEmjuVT5GBT25",
  "key28": "8R7MamuPU4qkeGQRQR9icYwA2FdxesW9hq4qsSARcod3XzYea7gaNGGX5WykgsHtyH8eUtm1xvWbY58t4jPwzvJ",
  "key29": "62To6Kr2ewJ1xqcsn15kyGNqxD7DeHqNqYpcCA8LUXhQ1pZVS7mc8WBvsFFBPB6BiGa4TPaaCwFBRzPgoWCLmNZ",
  "key30": "3aGZyD8wzLkwFgAPK5uhdTq32LuUcn4EmutSrb5EeGJzW8xmHrWzB4b7eqCqFc2GiyVUiGno3nR1Wf7vKoCagnYX",
  "key31": "6454e9yZaCRJ7pUP3PkQ1nGUi7QRagWYyjnMTBCw6dW6kKUy2LwvQkS6igPh4gre4p1J8vbw6dzBPQGGfCdhftLj",
  "key32": "YK73SEdEYXicxjD1mthThBrE2LhnHNjugmPmKwDStNCbd5nGjqRAMq4SnweRdzuzdPpYf5oeAouDVdfFsp2W826",
  "key33": "38zvfbNhd9JyC1DmTtu3zW3EzjE4NomukmKXYKPikzieJLSdTCRJwPUpjm1m994D69wctzYqwvg3ghckd6aREopS",
  "key34": "5pzFvPJuHs1cbcYgPxdwYLq7mq3GBJ9bzX81msK6SMsQQNAKAd2dzh2tBcgT6gn5ome8cm7cTQZFi44nCGf2ZihE",
  "key35": "42RSHC44jc5nRebtApYB2kdQqb1AnVe6YDxJT9fPTwE8vkzG3v9GxybjGQwfdBmhY3GkXWtN9wQ3mfkpZtAZuTR5",
  "key36": "5SnBdFHfuDEqgbQ24HT4B6qRuNHiLhfq2TSvjGrFYVVCfhL4wpK9MK5KM8SgTR23kkEqVLncDud3BmZMHMsv9Nry",
  "key37": "Jkt39Jh3YVB9yjrJFp5K8SZ6zdoiGpA6qpBHhctiw8J5ftREiaT5cuCuz8axhMB6Ruo3fQfxRu2AenAwFV8d1b5",
  "key38": "T7RjmLwt5ZcDR4eDdZYm5dp7AuJpZ4Wed3ca3c9Rysea5zzLs3jggqqiPGq6mTQJUpCrGYeZSvgpvKgUgb4yohk",
  "key39": "FD5CbpxdEnnUuY4bn2ai2BxcFtkXdNrCeGK1fwmuCKX7i2KJHSkDWY2fVbZVgqdpu3rAWZLSqYUrsD1TzaFGKFT"
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
