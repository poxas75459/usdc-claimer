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
    "2Js8wxH2ipoNveY1FZWqbCyAJeJSBVJVN1FYGnvEa6tKsDEWEfDeAXWTGqDdNLSPJidP6UB149gJdib4mZtgMvex"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BQq3gFN3SySijQdcry1uHfbRowoaucvMcbbRKJTKbavoo3NcANvF4Dy1Ys3ULstpUBCaqT3mNF1p7SySq8KgD1p",
  "key1": "71wnwGeo9osCF8MAL6BZc5Sogcdk5VBr1RkaRgSp7L5u5W3Ew9E6tgvJcVkMwPpcdKhqRoUZ1HgQg9GuY1TiPC7",
  "key2": "59372Ry2LnHCRDHKgPSkpqP1aAqPV58xpofpfAjqosea6qUW5wFmjj1sHU8469YjgoN5U77QkHiZvg92QPFPVEVM",
  "key3": "KuLJ1fnYhzcGdbtJYH4cLXodXZMrisijC7UNc6StWskiargLnmMQVNZXDRkpK1wdYsSY81go2pXBfCC18Gp2cE9",
  "key4": "UTxPyx7xPhFVe8kqdhLSgMRr6NBuuvQLxtM2MtU5QupuLWDN2rJd1bpr1HfErK7mwRmCXcscaE13B1KJMbSujbp",
  "key5": "4bW8irqLTguBhhTHQhN89cs1ZaLUEwcuSDo7KRDk54jF3xvMdCuauoXGmxgnM93B5mLH1vrS1Fyv8wM1HEaGZUvD",
  "key6": "5Xh5SKLrRJSiHbQHevnr5tQ8UgJhFotMeYn7Wgvbj3WGh5GEk4V7m7TQT8wQ5nP5kcv95TNdqkoyT4oEi2Dk7fkR",
  "key7": "3bbuA4Lsdzqq4WoAYHRNSWemBdv94tkcBkTcsvgq2Y5ziARFQstMLDVSrCweABvDZso2L7iouF2xBLF3ghFUTTLh",
  "key8": "5EoqWbLp3RvibdsvLJLL8FyTAo6z6GRBhEomESXCHjKF5k1FMq1ggn9MHaYFMBCEzqiNzh9mFxfCSEN1TiLtXvQD",
  "key9": "8zWpf3Cn6EXXYEvrxyLsgTrahyguTpHrSmDBcApUK66tHZs3aXYnUQfDhWSGHJy9RQgEwEdjJ1pXKMasFg7ZSMr",
  "key10": "2EvDTDdW1KPnVKQF22Y1QfzTDsgswDwCA3MfdU1TdpuNYHx6tdcff4g8uCKpdqLLqAXASJEx2rbtARNiUMPEiy64",
  "key11": "5d2x7rHXStGuD65KGcwJpCZKoZ358QVYSZWHaHpniwboLufNuXYXod9LPhyb199zfRxmksfajHLYW8jYRqAj7C6u",
  "key12": "4dMMuSD8sFvMu36KgvEN8YtsB7yVhkQG9eZkPQnedSeBaQWrXFbzHhpBLiHsUFdFLmA7by79TcHwTkDJ7B6wRJYL",
  "key13": "xpVaRoNPgFFAHb1WYnzu1ZvzULpTDEMB6bRe286RMU2m7Dpir5puR7ZbytQDQQagKCHrA8D1JG3ZeS3pRF9mEMw",
  "key14": "2hQrPuEUuM2T7zumGZDuebHj68X6xYTA1KjVsXPNu9bpZF3obWu5D94HfPXn1tymixSDXiwYZgAzQQTz7RevNjti",
  "key15": "3RYLyN2hqpT1Jc1w5E3pzeCazvqSWz48D4btWgLdvHXcNvgGUbwRNMmpui6njsFpcvFxSZrtmSiij6y7jzt1GBcX",
  "key16": "3vQFGc3qCkb4xL3Kau2iHEBQkyoH1Kb5KgD9XupseBzbDa6PpgE4VR4KMjnA9B6yX2StmbBCABBq1cmaf2qxD3LM",
  "key17": "67mYbJZsCwWozE4qpQ1n9yXv2E4bhdNat4N8rf6Kvz1MQPgvX7VFcZX8ZSySfqmvpBTptprvYXnaBompZb7zoBz4",
  "key18": "3somzP3adxomtWEcZJ7eir4pGRFX5Gq2tNMuuLczDy6tDRsJ5zhDfWsniiK6aHCeqDa3edvsY7G3zEZWKoo5zC9w",
  "key19": "5aaZKTuEccNLn3bdDRzSF8BJJSoLFJL6e7A1K6d1V6AvFx6vRi1hJQjTfkN49cAwqu2NCyeRk8CokowLQBrPMidW",
  "key20": "jaUPWpvXbMAi4ot8rMmbYgu6GkdSb36xmAghpoHkaEDgnf5CuPiCrgvgi92GeYbUwAoBSbVsYpykcehiWY1HaYW",
  "key21": "ZgGHwLG2nXfsgZECs6Ge41xHL8KBgFPbqGqwpHYxReipiyDsAfVB3iy8J7zYPZ3z66KHuZrqkoVBsTV5TfjWkq2",
  "key22": "S6SiARrfePHFuZig9Tph4L3pSRuhwjbcitoiEZF7GR3563NpcfdzPVRj3f6LTXBxD2fGKWtYea8gM72g5BGMvwJ",
  "key23": "hvLG6vmpfG6kyJJoqNgxUxpELe4mLLR9rM7agwk7xoTiHHeeR1gF78LSWtqQqP3FErDur1TT9ncxxwGs9EU2JeP",
  "key24": "53asCk7cTHDGxt5hYCVLo2KTqZ5dfiuuXk3Acwnao8kUMJVteJcbktqj6tvCDQq6eDjWfRP6HzTp9ppkvK3EPfvc",
  "key25": "59XJhxZ4xt3YMRd8JBVaP6Y5dVpD3GaYoMUEkJeQNMBCLvULNYqxBnbsue6Zt1NVLiMC7Xnbqb186a5riMnkmJCP",
  "key26": "5mScAe42UTj2CsgyBQ8aC8D8da9oGLxR99uGbukvJpVhADhkkKbD9bcKBKvc8bqny7JgdNhVtTjAsxQomZPXKtWn",
  "key27": "a88PnxAPR5KCVRoqpLhwJhdDbrJWkfNUoqLq9NUZB79DmynKKVx1pYufEq4TAEjXhcTTgzk3vx1ryhXWs6KmkQT",
  "key28": "61wDxor72mKYa6aGTVNU9cdesj71EQHW5LhaQXGRLYGmJ3TuJxQikAiMVk44xMmoFihp2c69uLSM6RhGTR271UrW",
  "key29": "5BdaF4WZXPotxL7Q9fjEmgkoUJnTEc3XZPnEzEUPec4Xt9f1kkE7rMvYWm2CipU3ao3Tw8jKsXfnY3hbpWQpWsAj",
  "key30": "3XGMS6zmMnPgfohVv47thWHYPHTq49mSUTDsQgVcyXmRZWbLfxkyNEkznZM2X6HMbRBRkFT6vVxMYvgE8Z561EDS",
  "key31": "2u5FvLoti3Ryxvy2oSFbQSw5EP8R6KMLWc1X5qJ38S8CBa2ZVyy7HcVJZSmB19FkCFwF8T9fm6BsNedbyeyZxZtE",
  "key32": "HcXwQCw6wS6q6za13TTZEec3Rv336uvvhKaqDHuZLVZ6614r6jnscAE9cA1Bp1MDjg1pjQSP7WCXKtSANzFYVnC",
  "key33": "2xLZYVK6rdx2Mbd2EWQNoopSoD623Cony8qCvnfTJh1fsgewiLFk9QeSAoU92jZKZYcyNU3xBPSSvs6rRsaetbPz",
  "key34": "3Mko1W7DQR2pkTYxamH3EyWf3v6WCMLdSgfHTUJDSZftf9PeowuL7vmRuou4s11Jh9VmjoMU8o3tXYeVFQBzX65S",
  "key35": "4X7P15LU1jbr79UqGb1fmsDLUa7pc6bL3qRGP7MtnS7rcVtuK1pExVyUJfPdwLs49HEeB55Q1EhBLg3Noyoa7CDy",
  "key36": "5Yc7QoqdHv54CoM5pDMrsYBmfVVKn9aLJwJeUH38M3xawPpYUvNvQfcevhszJSwfbdTtQGqfjzyutXAi5f2GY4Cy",
  "key37": "3ZdbLTw4m4ef6fBLMg6KkTpxgqiqzUBk3RaSsaDhxUxKamsRjr1XGeGuNy3EWHhfb21UE6p9t7Jy7qyVEo6Wz6pk",
  "key38": "4bQr9Ez5j5pzm1irtKTmZM9mTcv3HqHzNmEoDZJHNikNdCeifjC7B8qLKVt5YSbmr6t5sDAS5s1UVU59UTDXdxAN",
  "key39": "5zNMMZYGjc5puUPcLCDiey9kD2x7og2bvZuSaB9DJmztvXbRASJAJiLKtgABXaK2XYYAgdtHs6L87HCRpcbRcNBp",
  "key40": "cQkPe6AExWQvkGeAYQ5qNRyBhmqF4xTDUWBdoJxxdeYzVdekGUAhpJaCaw7gqsxnf54WaywUpfDiUWbap3FpeHR",
  "key41": "5VQJ6h1z7F1pGqCFQ655BDjrEUTv8m8BTpXhBWwhSgfZ9k7gQw3gxF3VXDXLQTZYaLf7RjzwGupMABgcoGE3iMxf",
  "key42": "3tPA8QZ3RVtJbwzgNN2Yaer1B5GMaMZzfixkVoszqG7bzSmJbRDHkZpQxXQhRFo3ppmv8qy6FWTCCXLHe6T3mxVd",
  "key43": "2PBmTJ5WC3u7dJzm16KeNHAABx36zA9PpGr9ecDtysaGuAj9MRW2tcyrwkt9avqrymYGbzK2LMhxGdKKZn1brZVx",
  "key44": "4BaECSyf7o1rEwkwg7U2UVMeN8aPnW6frgFgZ56v2iFLhHNUnQMDJqBqgcbgpXfFXG8KTCbmTfqwBJtYd8uJoHEn",
  "key45": "3ThKuAJDhaGeZXzd9DQSukEZd2bQSKEt91s3Z3PL8rSRhHQmCsKf95GYzJgxJkW4LFhzpGr4m8fDATXgdtVuGu8P",
  "key46": "oVHurgsVsG9ACyQQKGES9w17nVSdfHNTMisERsvYm3YPD6LydhoRvSYKrwhvALZtgDbJP5jiUkueZCve7Mw2EgM",
  "key47": "aK4BUmj2DfXVLbL1nisvTJStxHpWnADb2RQPHNacnL1tCsaTKegBpu6jqHepE6vxiTLEdMrcE1jjdoardLJwwTV",
  "key48": "4Qhhs3XAcCCmdi5PzSWjPn8nTkGaH88MaFyAdqh5VXo2CuCrDaRjQfYACdyrpaVGYY8eeyzPfiSFhwrRjxQPHRAC"
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
