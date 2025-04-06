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
    "JsrJTZVyy5aYxTv7SqUEg2jgaJ8ZJVLxBqn6DSPehfxn1jRHReWRVYQxRwo61wkzx6KKQhLt6JSKnPGUWJJ4Sh2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RcvETV6kmbDCdCjivmemcirxzzEYjwKUL23Yx75HiDp7rZFDvf3sR2xnD4JM8bQxgX8VxSQ1aKFEXEojgGyfitB",
  "key1": "56KrVJCdZqzuX9mNA2RxjREeC45svZJ5qDEgpMxW73DdtQeAAfUE862ciZTiZsVKZe8M7QMRjrm5gFmfayiJQpUw",
  "key2": "124HEry8d7ukesVYHc6BrYcw8X9gr67sdEk7Q3Ay79x4v2aqkfnTsfZuxWVSRndjLfq72gEpS3x8DZCt8Ww7Xw4m",
  "key3": "3qDh638i1iNQgwHiFmKfWP9EUxGhtRTL4ARM5AnVd4geLaFFvLQqs5DPzQDFusMtVDEYS2LeaGkFpry2HUwa64fC",
  "key4": "cSb2m6Z6b9ifFJzmgnqSMquBSiRkTjWLmrywywyQaAD96FWyn8j9oKUXbyMWyHdD5mFGPoyQoKWc4dLn1JcvBJy",
  "key5": "5q8UTZADDcw6AT7TbfoBSE1a188siQTQQh6cmWkytKHAa7vYRAZcf2e4VXE1F5fjC5aJCNFrdZ5oH7rsL5jgMKGq",
  "key6": "2ACU1VG2PoYW22E8TuPZpPRLRmwC5DKuoHJa8R38xX5uphos8bVyQFYTVFyPqv6ScxjGdLW4wW4nsnNUQ3YTAJhP",
  "key7": "4NAVFPFenNz1rvDihJgHsjVdxB1ARMEySTzsjUXQkys3MgHMe22CG8Witj7mkrPDJdZ2Y8FW2SxTCEn8auUJbwax",
  "key8": "4xSarUgDqsTGbsfqmJU9Y898sdaayriaEzP6394g6CuvcgXdJdXxG8zAywBZSVbmP1XdfazxxSAiULoosJcncfDq",
  "key9": "29Eb7VRdvWF3PvNVg5qYHNCE9W2qbM9XzWzGSzZUrHWD2F23V6KjvJG4LfW9c4KB7LPo2W2nwQ2xJZ1UgsjooK3d",
  "key10": "2cyjo3hts8Mw3MGzRZGs1L1p8fsw1AjertZphLdq8XePk34gTvawsf4FCjBTMGPsoG8vgT13Yqyi6CQ8Lze7cBDs",
  "key11": "4dQFvAR1whiTTGHYGFVyuMKqjbr6YMFEKK5adjvqihKEQ4uqmyd247FiaPAM1CNafKyk4Ppoqrpbo14GQjaTtMNj",
  "key12": "4tR6UcGua6NBNeQAWETC4AgWkbCTPZXGndba6vHD5ALQT2kqX1gzgZEAnAFzMaUe3mPeBSSH4cLd2JgLpHuF4RT6",
  "key13": "33SHD9u2MEeZBF2xb1Hc5MxLD6dMjRk7pLEAEegqFEoysBpfnLzDB2QKiaV24Wa92asoxHzzYyq9QKSqnenTt3Wc",
  "key14": "5jSWtMLLknXNpqS6nohYeJsATvzp6mtK5WRj1ZLmsG1Yk3G2zo3mdtTiUMzxubSpYE1wiRPEZJbXmczsis7kH1cL",
  "key15": "4A1EgNbqQWnZJDAvTmPuBxMDkB6FLehvXdtoozUZ6CQ4qDnGhsbRZa6XqdGtPftiCjtQec3uwL87erJYrsfhDQsq",
  "key16": "iqJiVqExzByoE7X5f3uuesFgip6bvwhLBLMrqT8twM31BYfAsttd51rzEQRPWMPbw1iW21aB4LqVRFc9kCm2XCp",
  "key17": "jZfNJ6Ly3uYxkGUYmTQJ8UYpwez7dsVTpos6VXawuKZBwSAKLQT7tgw4GVuQ4BkoP5dt7mWzZFpNAa8T9AxnrLa",
  "key18": "4BGzidpX58XKo26za2qt5RNbG8FXjSXTmH7PyKvx7ra1NMACKcszn5WJtEoiVCJK7TKLbSHnSnBv7isbteaTNwDe",
  "key19": "sgQCkkuFhwnvRBxeC1vTPytJ8bRuPLpStKBpx9MfxgYK52MF8Y3ezwERHDgcPurPzcH2pGLABXzooLYdMbBHwq5",
  "key20": "DVEgmVbRNYzgQczpzJVLSzW1BSSAMUpDzP9fVhiLjqxADvFK4N7rztoeFKR7PWvRMHiL1QRmEsPNWDvVHuoWV6n",
  "key21": "6gCAFdAeYdSSEfVg2uMeXGnHx27PjYGoV8iHBui2En9Euo8dNyLX8tGqxWS11Q2UA7UXxYGSYXPFurEGBTLtKjf",
  "key22": "5155kAX2zHiEykroVhNdUEEnMFxkuR1rV25vxeFwtUAQQd5ujVTrZqy21QMbsvjtnwqhpdQ7JcCiToj1FoGKergD",
  "key23": "466BxAbeCPDnaPirFfKgqVMwoAZmgXXn1Po6xFNpc5HFST5p1qLPwYTsLYeJ5XGxpH3zgT7znDKfHf9JZgxF99SK",
  "key24": "2TmLZJyJPXx4cHShyR7Q8JT8LUMeffjeTvXmCAaNCcqdGQsDWn79sT3Rypoejf7FE5TiqfFK3R4bvbGyqY4qyM9V",
  "key25": "MQQvPUHyb3wzMmX79uTqitp3VXGva9YfE5PNibZoi4anmRFa8km4XB9D9KKspKiiyNpwwUbFhRLQN1iGN8mTK7b",
  "key26": "4a8KU14U9kZfdRbtPH2E2uUxaMfKPQevn33yA1MUcPdwgVX3TLLPnyn2EWe55rxH54B9yEm2KH5R1j4eBGx3135Z",
  "key27": "2TjG7hfdHD6ZqhGHuUMxGzXXYeyd2cm7GtKkGSfLcXKNHhC8bgZM5YaXYRm5SwtFCanWfdWv7mv5sfiuBHYBxWSp",
  "key28": "3i718XRFS2bH3U6K3zKJo9pR46JxmA4b8M3WFf7nsGSyB2jHHBtWEGTwwgvy5a4frq7BacqngE9vWpgBy9M3V88V",
  "key29": "2YyujUwZf9hgiVuqcbWKZ5V4ewNibZ3SH7rghtDtKxtzTgYaxhMznTgVUUa7BMUBQf5dThKqDMb43EvwqDEi8K5c",
  "key30": "2B8gh1bAR1qhR3GMkhJNsTQFrXRwSkcutPRecoR84gNZxtbEHaKr25j8pbKVG28r2X5cuZtNTAZ9EYJ44VwgAxb9",
  "key31": "66shCXVW3fTiraz4SGc1c3oD74bGyvBrFeveMxWjcDmCNVoB6xU7orpriPVC9BXfeVQAcxh3QhmG2aEDXgaYxWk4",
  "key32": "345CQXnB3U1hqy3xhWTcupNqQK97hjoPeA9ykmySHuCmEXbWMXpQZWpErSV9Agg5sxwgzp5M9xwz5iXPHjhfFpcE",
  "key33": "2aAADDt31vjcLLFKbMFpeV61Rs2wUxbN2ttpAn7wCMozFxcqyBC2zRTFeExE4mntmzKcHqExuf8DDXJTbVohvk6q",
  "key34": "3hzD5jv7zYQLeEZR9CSE2Pi6qoFTNmFf4ghH77rW42CewbJdPoAaBFvTCZHeQx5CTamZTb18mSWqqfNGPJ2STmdh",
  "key35": "pprWTRHLH5dn1wmnvskWhxrSjiUUt5k9WJ5uHFYr2dHnP6BCA4iqZsuYM9B9BWU93pkPeo3oe3dRbeKkFghd1LN",
  "key36": "5ppojgWFsVMYZp4V8NDrgG1oCK6X6pxwnETMLjV87CooD16dVLu187omnPwhpqWpZEc5jgbdNPtdZSTdXocQ2U4P",
  "key37": "61AhgecTLrQSjC5V3XJyLKpG1TTCwbndJJBgkLHEsTTxtiaYdeAqopaKkQ6CbaatJz1H5X5JqHKrHmqTdygFb3Xy",
  "key38": "2Dayzrrkfob1P48Jhr1N1UeQxDi9vTXHAvBSxDEFpteRf1CyDzHkh6Ym6uVMZvyBphZQbmoME6vcFvJPzRB3kTjJ",
  "key39": "3UWUYYgYfrJDMKHBoK7nDUAs8q9tyN9W7pgVdzyZJwHeyLxs5YKRSKGmrqLkPWZRPRhswW7FCKg4Yp2TCeyo9EMj",
  "key40": "7yeZGDNqwReNYLbo6QvpRH8TBG5SAgpRBZZjgzF6VX2QW6XdqPUJhu9QD6yCDuU5JsvpP2rMMBtryYzryfMGpRu",
  "key41": "59JpiHC7erfinUGbMWpKboYSc337qNvJpgNczTsywD692EzHTRSwEQyPKa2ZPeftEucJtYTfkK62GYrAF2GfkhPE"
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
