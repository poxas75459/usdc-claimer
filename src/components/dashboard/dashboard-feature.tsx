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
    "4FHqD9zPXBA6Ki4pTW5hKCp6TKTW64KRBF91XokSPLyUEPGzMuqSfcrEQz4h5jxpQpiQBKYTJzDRC3kpkxRJBYNM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZyKheSB3vsp7UFj6Mg6V3tUp5E5DHDCS7AbcoYYrwiYn79nd1YHjzkTLZ4JCAJgxjx8hpJ2pWvd1Q9bTkiFNoQv",
  "key1": "4HJbG52dk1CWrid8SnLjxfLEBzv1Dp7NVKbzGbMgHRsxy1N5S9E7MZaPdhEt68r8a5hSTiCMesjHk9tQyPRJTTZw",
  "key2": "5jBW3eiqx1ngGok5JxGwRwVymPwj6ehtGibCHXsY7ZHEFbx4Di9g63dgymaLFu9Pv3t6KAqPz9UH43GBRR2ABqgV",
  "key3": "aAz9sA3XQf22cGcsg4fCnKqnt3WMeGYCfi9Z2nMWruBZX6NeXcQ9xVu1XwFkGLJtvxCVzph1JWED8i9aozMPG6J",
  "key4": "4x1Xqo1VnrWEWGgwM9Sg3vAuupujJXUFSQhdC5GgLHrdTDKeRABLmL1uuaZrFFaf4zVvhJUJ89oEufUXai1PZg56",
  "key5": "5a3WvYuPTDjfJzVZaaqHyYjJHMLpg4PVnKMpeMtgDqSmExBxQ3vTnPsbDeF4WVFNVTe9sgKV2h5FsrHS3HqCgqTU",
  "key6": "5ySnNzBzcFof7XQHk72MVy4cYN1mvUH3GuA4pokcCSS9csrrA525PUgZaRWZbeoftoLsJaLdHXvKCHEu3w9T33hN",
  "key7": "2APMFUXvByUqXq6DVVGDnA2zchoBSini1ZYjz1XgLdZScRxc2bEUv8HbU1PA3eQh4YRLY1cRS5U9CGPJ5YNF8W5m",
  "key8": "2YcxRq6fBSWxD4XXdAZn8XMosnNzZnnpDmw9puNeqyXaik4i7azmVA8m9KudKFXfnMfoLjZ7ZniAmsijGyiqP3DH",
  "key9": "34yHJXYaAJR3XXX2BEtTTzidQ5McJWFkEhALRE5A5eT1c8sdKYYNHQTuDYiLpPcyreHgET9wKFhS8gMqpK7GsJBv",
  "key10": "35WtbLseitDvFMBjm5RHsGckZmUV8VPJrEUL7oGgq7HUpcqut8qqJbVPYkb8oUCW8QMbniVLr7ypftGp5T4i5G6x",
  "key11": "4HcVkMKFfJDpnPoWq2ooze82T5RkyYjK8pgoQn1CW9Naq1JfmHeSuhZ3L71uJ4JP7TcHxMQmm6EXbNkA3JfmCy2D",
  "key12": "4pmz3bhtbXW92dYRCzm8fgVhdvAvCdNYodjymDzBRWBDrLc6twJMEP48DFEKS2XEFRv2hYTXc6ybVp7YJKJN9s8h",
  "key13": "2wSq4YyPN7prWWnHgXTvAqimrHGfbjR5H7zJSbSDLpmJh9M1DmWvc6A8u2DBTV8NCu51DWWi6JJVcDbRrq6dvgq7",
  "key14": "2SYYzKxnv2y8i6zwviR8D9kdtft6G3n1M1wxtAyFnx6i1wgDawHWZeu5WGN3GQxNP1M5exzA7Ar7CagZKpk6CJ84",
  "key15": "JCmAg8jjjXTovU5m8fHkL9tNT2bACM78hQKBpkg2PXgRsiar7GFcQSJmH9KQfeDJ4Wu1Cw56eveBweXxgU4pKUp",
  "key16": "3t3kaQN6JhpiQ7znb29ZTbivs5ZRbkBtfKid329Vm4cTZR8TU5VY8aw4v9tCvXXMKvpNJ2RNe4KjZa3WR1r4Fiw2",
  "key17": "4JY4iVUmDgxjtCQYZAEwa6469LuYbdczhDKzo5qKjGC6TLDtw8nUkgn7RrTxyeoTSHP5yjcGxaTXe8M1dsWUY8Mb",
  "key18": "xiDcBgL8Pof9MgABaXPP3BYZfxnjCzC6TueQjSEZWe6aWAvTHtffR9ToNnmDnnbkH4NuP36dXcp4ecjkTjLyYmZ",
  "key19": "5kWPG6LmLgGTmtHDe9qw2CB7yrTraGB6n3Yeu5G58vfdN9v1KoDiunkcqbE8FiSAE5RnfekkKdae76RmSxjU4JXG",
  "key20": "2pht4ce7ZwSeFNJJemgBQ8t4dyMrxtw7ryzX3uAYzuVo2SqH4KZrzY4GqqyBf6QC4z5MUnEXo9nVn6NuUqkJXhNZ",
  "key21": "4xVnyPJBbCiSXxiSjomUSNmThnofZtWuYp8NMuto2DCcdZM11vHFbiavs5Jap75FRSha6AnPbykSrrGS9Kq5oGpw",
  "key22": "3HueCmpNNLpmP2G9Xr4o4EQ76drB2bMqTRudtahPrRMTLMBs2enZ2hGonNnc7MLKR4qJC8D6cR6jxkp6UC5wYF5B",
  "key23": "59WCKPpzG4YTND5RrfPfud2m2DsTNHnSQVEPS8kgwKQYbQpY6r7n2fQSz5oeqDWS9VZp52hGM917nWB3Bcns43EM",
  "key24": "41WF19h21bVNYZxfWfX8MXKkcMVTimj635F5DzYRmEgZvsZWWjVspfZFzsi4pnAWgQFj4vuyrShQGjCyW81Fvcc8",
  "key25": "2mZrr2BZKW6RreYiJkf8jCbNKFXjNTV5A4ExBJhF7ofWbBJbgfnLtkaZR58wDTi62V39dgLs5ZJQPJe3oWmprdcx",
  "key26": "2yFMsP4M8hWx8wq1ozBPWVjgPD4TmgVSpoRaKu3fV4Sw292UkQqfbN7uzmf5HE4LjTBcFFRfr2emywCf6NAy3ZhZ",
  "key27": "5r9dW6L1rjge9ts5J71UiTEm6F3yLSbBPjCJFdS7QnL5tEdD6x458jSTbVJSsko5GSgh5UNg42NRC7Tiv7ArxzMY",
  "key28": "3X2mFp1kPdHuv3ioLu9267uNwjXP8q5LtA7RwpbwVBNSmyaWHB4Jc1ttSnqAXu2h6tZGFJKPUhzJGGhYid5JXWRh",
  "key29": "38ZZNPEYvv6qiL1ZPkrNvEaxMVPCbbcW6W3d5sSGuqjFq92NGBSzEqm8A84qzDKrCavGZ5Tj6CMq4Yp1mG4SpcQX",
  "key30": "RyEkear8EN9H9vUztwj9b6aETnoZxSbHa5X2uN9Pi2nLQsjkaJt1hvFbdaUWzShB83pVJzT3EgcVuUDmkfNF6Tx",
  "key31": "9mvghuYAnc1LJW8NyxGmoxL13bYnzdQ2JLWuxEaGcuXc7WGhZHn7BScL7ZAYHxF9RTmyRzDKsxBr2UxoLtPGw5q",
  "key32": "4D9KimaC6BUvdCZqc7UB628fobK1J4znFKy8aK58KZBtRuxDXxj26BizbthWCJH51eiQP5GrSkLQ3Q27bVLQ1XwV",
  "key33": "4CEWctPmPxaiFEko3J7UM2zvH2Uqiyfedey416EL8RmGK7MFuhWWKcuHVbRA5Ltsr655M3WWmkEaXpeQp51rGdWK",
  "key34": "3R4HVVL9wf1GjvSLF7sWFBqKu8mr7k3AYSHQt8CDpVEPkL4YCeqDjhAj3RQZLpyymTNks34rf145TPnXnqoxu3Tq",
  "key35": "44HsXa7LLUQN96Y6184SwpJmbZVrXHYqPYHnRYb3wg2tRTbCVSiVKjqXixABLdHZUqgxM6WNTRZ4B3YUoVFX3UJA",
  "key36": "3tkhg54HXuq5VkWombryeNxvmbvnWfVWfZmJJxqLHBHtLTGEVFQixxsnx1ukx51QyrMkV2xxNocPaKwcr24XKRxp",
  "key37": "3Z1JgHNiA9De4YntjwWr8BDVeq6Lw7rpDjZD2Q331CiwupoQAATtGoC1ZddgCJETdRvLT3LLzDpWVGv2xJCCB4Jb",
  "key38": "G1KCL269Xwdu13EUvro3gkxXYAUmSDD3Vz4GqNvmt29XgfwFnSQpNkfJ5Ux4ers3GZDBN5KzZQ8DxVWP66Yeuuq",
  "key39": "4dkf914CQSdGhwfhDHwa1WyZXeBMUu4QYuC9NfxKaFd27szJRSRrrJ2sntz99r6iFEAUHsoUvSkWZSsTQHvuq6D3",
  "key40": "TcbjBi5mvvECBU1ate57Y2prnvTKYebQ2y9LBuTQhCsMn5kQBxYtLvaHM7wt1kgKLVCeChS8aoZxAu1nVa5invP",
  "key41": "2fLZ3FruU6en2q8PnUN8i8GjXp1B77Q7pyWCU8gHUCZYe4uLC9UmaGngZU6VyCW85cAjf8ZfmXrnh4oNv3WPBTBA",
  "key42": "3tzGcYX9pUftQuoDRgnCMLXEC1A6d9VYigHabqwck1RMMzVwF3xcuioqXacVw21S74Nx5wo9hQ1fhWQS3ip9dXCU",
  "key43": "2YgipxRehgD6hUiUreQpXwGNEchvXUjY8GrNyVo8DhB14yuCedQ2ztE6meZLyFzC3ZetAxV2wKxz3YQeeyeN8vGP",
  "key44": "5aXLWWAJLiLZeXBNVDAuvTcdWWe2bqg7g4iUp3tmbxELAv5Sv9F9kJsDCNCxvPBDPoVjdZmNWj2AYDCKKmYJscLK"
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
