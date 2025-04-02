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
    "4BGM6ArTLmBvDQ3oEHakpy2qWeXKMV448snGS3cUzXxd2PYrJr7vUJg4kXgmino1MgTqTt2uNJbjFgQgBLDH9dpL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42ACda2qh1q6XeRJYNi4gFmciRsS1ks7kVak2FBW77pH24oLTpsY8P7CxyPN2wbgSPc1BcsiW2FbvPwLZFcdoK9u",
  "key1": "2Zu8YE7XMTihr8SJUXNL1Pb9dwMBDcBsU1aShD8rCEgwQcdzZob62bnqqv8pvZaVm18rwGaNRd4gy9acq4aHNW49",
  "key2": "FDLyKA82nj2PVhznF4YbxkDyggZVPVfUX8bUyi77gzaGxZAHipEaByrmvNRbYe4Vj3KM5Z4nBtSBezfFPT98o1T",
  "key3": "2cJdY2KYPC46d1RoPcFaYrQAQjjHunER9iFrkVcLfLKxMUrpen6mEF88ug43p116KCGNKYQ2iwKYXnMsNZ22ZrfM",
  "key4": "5RmZnPRCRX8XoGfStiK4quX6Sz4CGJ61JJoDVcCAMioUsVFxxX1THq5hrjkXYzFzj3iLPa2MfKSyF12FFmF6Ny24",
  "key5": "AH7jdfWRP5KHdbzLhXp67Hoj7P5ZmJFRx9SUCr957iQQ7oBKtVnXE5LyUuDmtxpKnyWBoc5NKbX3keHC59cVgc1",
  "key6": "3BPMrUKm7ubF1jMr3pbGEJ1SR7iA6mvktmDT4dXPu49yLozdxxDUACJiVpC8MYjXcy2J1ePL8T9CG7H47hVKeaCD",
  "key7": "4jAkN6sa5MCMp6Mf4XBSopXmbQeaMt3V4JPQ3tsTygmwpAMhPuh6ccJ2qq5RwDY8xbQHXsMEJHJCdoVFcFxa26tm",
  "key8": "4GMEvcGrrtSzg2FKz9YNqtEFdzQawHGLf55wkCWSB4qiGr15dmU1wQmGn4BoqRCa3tuz1MUvrUxeSLfacPX3Fadw",
  "key9": "665d9gV3bvUzDTYxPtUEMqgaBCPSRRQ8vyRRmbqxB1VXkNoxuL9v9usxnQrS8QRyk7xPqjMRRgfhgBR7w6HMKVQk",
  "key10": "52Vf721PBv1rAR7bz6j5TUEAV7jHkp5MsAMdu5xVhtd8E3DZUd7RtwDVnqTYh36ptVg6Yb6xweZ9BdQFCpvYnSTt",
  "key11": "3Mp1XGjdoBurMLSLPrDagyxeh8GpnCq22rbrNv33hLjdkNio9Bvo4M2DFHY7T8ghRjNp3rQXg28WHfbRNJ9Tu1nE",
  "key12": "4ARS9Zsftkn4ArU6iGcLE5ndkgW34Niq86BdkxVFhPAQoouqyas55Z9Jug4Crs82b9vcVCZ1rpYyVx71qH8kqqUp",
  "key13": "129Na3SFBWJfaPZKA1VYiMAU6ABntMsVsbqyZ5hv4GdjHU8NEgsPU7Wag814JDFHJwmDptV1zfDNsJcdABpBeofv",
  "key14": "63qAUbd55g2ZD1wjx4f7NQi9CiZEmWB2r6GcRhTecZKadLcFBuWEedPQZVHxQXpgzWufUGSWZHL4DKiNsxVUpBka",
  "key15": "24aHi4sr1JdzqMbWK9dCwwZQ8US6puuuA9NY4Csf1FGTtc4CGQi2s9hc6ewnVoBeiar28gtqTuGgGta2ETLZxkeQ",
  "key16": "yffrQLHYdtLmGjBfUANAqiSGNEg2dtfRjjsvj2uiHEbUALpZgnRV5sdTd2U3bTpsSTe8dMjmokwsFhUev8HKqtZ",
  "key17": "rdVn9rS9WQYpSaD7m1Xo5Q8TPezjKh6sEidGNvLNRucwZ6X5TA34xmY2DdeJTJu1B5NsVVUbimhvTaqNR7cty6D",
  "key18": "3HhAdQQYM39NpsF4qQGGcr8dQwtnWZPcShpPhetxtfi89rABaiRfz2X1KxibmpR7mRhtVfqPRZUZYTodHF7HYfHW",
  "key19": "3uYXtAXqsfLC3mtHTc7uagCYetZ1sqbWARgVaXm1qYc42ZCCfKuRomAzHm6g4suf2BNdLHkogFDym4r6Zi1mRpLQ",
  "key20": "3B5R6R5aevLTuqKUbYbGP9TNnoMDynojG5R7KwiUTR62sQUvHbnUW6jKKbWGfZbXnzD6upb291zbWTHUHaxBHAcB",
  "key21": "3wsNNuVHvFBkUbSgbDVhzc4Um6cA54ieEw5kdkX1GwtMwKJw5TT89UwqNuTm3jvHNbmufu9xDE7pZy5zNxCUX99d",
  "key22": "5jDYiaDnFLHx993WRcP8Z8aX9mW9H2EEqGNW71dBGmcjHbP8w7CDFCzHJMfhyVYbLzxtBRFwRAqEG13oNwS4RAYq",
  "key23": "3Z8xET9Cr3fQc3pSjDfMTct2TQrd9xh6ZtVoy4FyTeppJ8YJkDvVhEpSVGTJtBrvjY9xZZuPe3sFN4N8K1qmvmyF",
  "key24": "TzNejicf5pYTphiALqfktV185Ajktun4rLnqPiJAkEGoykvp3wxfMDcZ9j1YMEJAqbL7vW8dNeh936HkoJs2JZa",
  "key25": "34eiyKLShurpSZX72ohEgR7vDST198uGLuAMGWZ3RbDTnCCGMpaSdz9qUeQtWHX5Rcxjknz1DxR6e96xm9KY6CEY",
  "key26": "5NMKV8nGscCn9kK8tXnWHyRsqGBwZRnGMHp3BYDvfYbCFSwtjix3RZkcvdKVUG9RBbNKQBLgas5BUnSvCAtpbkuU",
  "key27": "4AXVBebA9yYDVr4pg5bP2B24Fxx9se5zwhMYNRvJ8SUzfcrfvphDKDSaXrJwbCdrdnQfWKwP6bg9hY6vLWUBQdzs",
  "key28": "4QcyKU3mwbawfFyH8QQS3RaZnggRFwwX3PaGZrh7wm6NHekrdtc3gZt5pWEoiPAhms6BkY53SshFoajMNjN618RQ",
  "key29": "3BeTzLy5x3FNFxNQ8tKzp7tHg91ignLsv5VRZUK3ndTwx244uotp8qG8wAtQKp6JB7vexcu4KVnVoyAHwCBWFfgD",
  "key30": "5mqTNj7MboTgfuCGM6bbB8PfmHYgAD7eXccjkUR74iiL5eLFau4YtTP6ZjZuB3TEFBqChQTkG76ZeLKo9HW7Ytyt",
  "key31": "4yiHDQCYpJLFWg9AHDoqYqzt5DSsdWxMUou2tt6DjZxkLcHmjHLQ5h1EFsu71fFJTRYG8GyDhopFb69mPKPvKgP7",
  "key32": "5ohtCLDDRGszVwQ9o3e9Jewr8H2w2tNfG3K4YYTGP3QxApb2L6YNU7rWCrnquU4Wfw3jvYBL98igioGmNwEwkKfR",
  "key33": "VPV752Ud72AsZHRnNsXq3sizVw4297pPkR3xNFy3VxSj9MvQtNVzK8crFdj5qGALTsVsNexdQi4mGyTgg89m2ox",
  "key34": "2kLWNM7aorXJXkL32wh6xczXuUQhFKLa2m5pWS68AMVjiu3LUti2H2oGsLY4D6X1TWAyMdS6F7z26s4ERHqNFfx4",
  "key35": "5j7j9jwPT2B15DA1BbeDyeMvaMwCM13BGLz8cwbzEhwrgNPg2TcU3fmu9wMq7wRpRmAA3BBP4sB4CG4VWoa85PS8",
  "key36": "2bKt3Nsg4PPuSNv6Xw6cvcsfbhuJgZJunFZs1skGGV7JC4XHd1ue6f9AVcMsgKEfmQbVGfh7LRjKn4BsSDYQqy8L",
  "key37": "7q7xtJEnSMHY7rMhXuzK9bfPJgyhoDDDhV6RoJkxBrzc2crpG6ZsTRik6MRvFT1xi3He3pG84ktRotY6mdpYZxJ",
  "key38": "5umZU9s4hCvRzq4ATchXUUtWTHy3qQuCR9F4CEh2Lm14KABfxAFUDNbGbKooBexXXqmQ9Q2YXMMGEHaj27LFR8GZ",
  "key39": "547qjQkZHvkuhpcbVnwJsDYqNQRtqsGUauk2Rzey8Xov3k5yG6rdTLvBXfYp3gFq6piDTRx37dViTdiESnJejqgA",
  "key40": "2F7A1hM9fxx2nc79UcNAFkcjsJKD96kx7MoMW923jpddxdLFoyXeQ5bbJ1THpRvy5n6q84Wga5vBrSb5tw9RhYE3",
  "key41": "U52vpXrZcheYHfSy8R9jv8h6Grw9EH6cNzCzw2haikYuU1jtjVyEksfq7Uasf1vy6VQ5kK2GNzjuzDzdty5QCZc",
  "key42": "g4XbpoBS7V7sGXjzby2Lmnt9Tak9hnn58MTKbekk5z6kViWJpf33sSbJDpnXCCWtCJPpuQZhrpfQBQpuVUkRhY8",
  "key43": "2GbHVsANnsgVpJer9gmXUSigSEQHZLjX2kzCdBNG3U9AbBUZYd4qhXUaQSKG86MjktWi5BEaCiSeUZjqUyvidEU6",
  "key44": "5GRBczU9FCDBvnwZj56oaPQHhDbiF6AYVeRdroc8zk4EnBa6ENRsmR3YbULECDTvZMFv1Ho8BeXUShfYs3FvRW58",
  "key45": "42zCai1ntmWYwsprpjomKVhEJZByQbnHbwLdaWY8JEDa2zZ2Gq8AQSyCAWBC2GHoq4uvCb3GKyEDmh35JXBYMes3",
  "key46": "5JE8YHjXM2HqbNvdiSCZGi1fUXTswTNuav68yhotD6eocBWeBuZ33uffpmWNvfSgrLpBcqFxCER3NfcxuKGMCwjD",
  "key47": "45sGd5CwW4C8XGLkN3iiAn4yJAUk8X4ybaoG65DH6rNVfxk4esJnrUJQvVpKgv2bVZYKKeCXUiecwECg1Qdaoo2J"
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
