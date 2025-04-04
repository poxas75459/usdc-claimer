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
    "3cM8fSeF76JYrrkCiCfReefyePnG3xz4cbV7mt7kUzd9GT4Nf5mstpd8V2HR7PSHyF98hFzQ8XWYzPkoJFFqp7ay"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59y7GgqNW8cU1C52QRXPrdfHqU4GUFuJPwfogeMTYyLZHC48DaisMVHYAJ3mZZQwPvFYk5GfewZSmeefCDyQ9X2v",
  "key1": "4rS3hqczbLri2xPdRtVfPEDWnAFWU2nZcZDZMuow5QeYgytTiTcmCcKrZpksySPRmu4nXbPSYgAT3ejqqidDqfiQ",
  "key2": "63ngWEWqadkkwkWt2pn8m8bxBamTVn76Hr5VaMsgNYUeUeLZ3L4ggpxMntP1Jn99tbqJcfUESFSJE4gbLPJ27uVh",
  "key3": "2nLoQYjLvWRUZKLDUtvLcCmctcpoV4cdtJnFUwQhF3XhyjtnoVwxQkcmsDnii998z4vsoJbiWnH7oTtobi51qPEi",
  "key4": "4fMB8aZPzNhynnD1qNbGi6MCNk1miVuHLBMxotX1j4BzKLG7wrjq6QwNieHuu7YEXGH1LsgtbqjLsUXTAy31842K",
  "key5": "489JqhPUMu7YQQpwo8zXaCVzjopPjARqjhPqGLuqfpqc3Jh6fG33VoPLrChHaCkDfyj64tb2DtEjz22c6LMQnvFe",
  "key6": "4hP4FaMicwm2GVvTuQXT9bqA56LLDWtJJYnonVJbPTMvegjDZFLQZekXLjb6RupKZZCN2eJuHESjvgnJGJVoUH3C",
  "key7": "4aXYVE7z75v7c2V5ABTuakUE3UJMHCHK8hDQcycxEj3HaMybEBg4PL3XF8AQj138Zcu7tAV3dNfWjhBdkWg1RCQv",
  "key8": "52zZ8fdR2ex1BTobuB3p6hY9iaYRXDpTG2xFE1bbme1k9vsrDegLVurLQ5opkAQHRkzcy7LHAXf5aunt88qXK6Ah",
  "key9": "5DjV91eQBMxtoxW5oSnmFLuMqzNEwJx477jQY1HAn5KwNt44fJfQcpGEF2Xn82ayRZv4TJ3mqz2zhtj2e9KGVACk",
  "key10": "3ThhyuDUmboxTDj7Z6PGMQ3etEZMVQzgBgz6Ydar7codETfjQdNbws2XePyVgVeCTXxfhpVDdgDcP6QVd7K4PeJw",
  "key11": "4Eao1BrCYz2bRumUBggM7uBmZqHpTfnkz8kjWQD66xr3eEtCBx39zQDtNbpCAY3tr59f8H8FE8uYtrh9G9eufRTQ",
  "key12": "23y1trMvjSCZa6TDkMsUiZWHKAuMG1R4qAMajXR7VzPUVntsY7YnjeLX6hczHQJD2TpC8rJbZmGZNtpE7SePLhzr",
  "key13": "7VuSooq58CEZzyacGUAHHCWoypoLa4q25s1x6ugJ8dt2ikM4porRcvxFNz9x7C3wNoqh9z9aZAdWEdqR2prrBDy",
  "key14": "5KaXL7NUHToiF2cN3u7xtyQMNJCgKXL8k4jVvPDdb4Uhw1Ty2QQeGX5LbkE6HbobgT83ErUReZrZ1jiqvGCajb1X",
  "key15": "2eM6egc2RCsuqtah5F4WAPXfTdVJnCLy4cCiZejE5sozdmbLFMpLxME5FAUE3jzXy2khRah5ExWoVHGdpSvbqZum",
  "key16": "4eZge2UWrqsqfaBYHmLQm4UkuKst7uVBN8RUxxBEQ5CL2T2nhbi88jWjpVQVehJ3A51tUyP3c6n4sZWgUhBMd9TB",
  "key17": "5McYuDswgYw8YA2iZXnXCXukmRQuGrdyBcmpLDM4NJX5UAsDhYXMkaPNTDiFURggh6rBzxC1aCGnuq96CxQuC3Hc",
  "key18": "xNDt5qyDajG53NwSgXEkcpWez7YVki1hP2g2XboizGbtBTxrDDBgnLufA1C8n6TTtJ8ddguZDYN36FPq1HSkRf4",
  "key19": "4XBhwrdRhY3mub8pGbM1jstX4GT2aY2nqFz3WW81dcpbbPH72oVAqmSaFpjGu7XLwj99k8Rcbcrncp3XJNgKt3xf",
  "key20": "5xMz8LyKxM2p7LiSetyZwzexnNzNCiw1hnVVGzEV7MpC5PZCpeUF9bnpWEAhaVkmFModTi5abqTVMkQL7vVPD9xw",
  "key21": "5jEKcgdHFqgyQBcJY5ZP93sMrCctLbaKTuJ5dqtySkEtHqhKFHSXFAJnxKdt5ot1tMEPqGVhEMZqVc5SAg85oAyB",
  "key22": "2AuxpepDrvW7QKGhx7PeEZvQAzEBJq9dQjnBZZf8uDyZobRuSDPe1JapL1i755bv1s4ZBZarAz9Tb7dS81Qbe6Dq",
  "key23": "3C8BzYiaqiVjRWiYjLCF3WMpA92yNdG1oaduCDHPse3nkgEYw1pQvyAxDTk9wbYi9V3v6S1ms7fydmAUtRUKqAW6",
  "key24": "5S9RG3m9dgrHMoQb8DjUs4HrgJzxnYn28NFxU7exhRuz7nayUBNMPinAJtoEwWp2CeukuWBSUu7Ue6PiHsGTag24",
  "key25": "4K9pjcDh2sqbrUT3jpsf5LZdBXQk2S7di5jAySVJ6zGmY8Vpu7o2nW153tU5tyHgVHJ8ZiE5kvpkFgr5o6zayvcP",
  "key26": "5Mm21VeS66aadMyPGg4NDssHktNEYk75AKP3ZaPnZPkbu7qVf7rgfy9rzT5ik5huyjPK9U8ijNpfx9rYYWUDti4U",
  "key27": "2JEhAfN7KT6D49p2JXkTrNpwZAxJhu6xPfSWFb8ii9f6WwCZc3yVvZE41suX2ba5ZFiJ9AhXidowxLfoKAxCM5hN",
  "key28": "3ZNYhoaH83evnnj2W5iJEuL9DLjt9NRMLizhzqHoUGD1iVkBDRTdVA1LwocrYWTyy4abFBXkr5qeetrBbRn955MN",
  "key29": "4aBhfqZBNXZqECnnABDYNHEJqEoreSmHSf6JCC9qWnEFRoLAZp8YWfSMpKAPdtztivdBQqLiDuAdn4TXkKMKt1H1",
  "key30": "5Cc3P5nHPzuE9rbXQiHUQprN4fUA97c5df1PFpeBv7evaQ8nJLfsPStgZTG6u9mN4TUkKzAkJX83Ccb5JdiANHJQ",
  "key31": "415qTVDGRvcqLKc7Sz3RcJDPuvwHoGdYLxpv7SFMoSBRKGZCC3fbz1cE91K9NRcCyVY8wmEhikKr9o1ekc2ufWfT",
  "key32": "2d6sfxG9RYzudVBQDc5ek3iuZU7Xpm6VqT1JJw2jycTQXvBXQyidNYrnaZuaZPK5ibLkkNjYg1wVCWD85WZ4Sp2E",
  "key33": "5L1HpvdtN4vkxwy3mVQCu8dMWpYsm95eMa5dLD3vYSDPvhXX2SHqRNsHsRjbFhRiinzHcg8ACDQVmR6xPpV6C6Aw",
  "key34": "3J4Nh176RrqsLSEwJtjasqMQ1ENJs2yjmzptsbzFZ7xnEQLXcbK9rehC26E1r3ByvJ1X9jtJbdXtuBPvZNpueUJB",
  "key35": "2GbjhAf9ngB529t12NFHr3B2Y2DnyR28hMxjGWcKwTSwYBbAR6kdFQtc7sKnwbDTUpsdSB1hFspMrpzmvTHzZZVt",
  "key36": "518wJvtJR3Tw69uq8ymtZu9D6BjHdCHGTQ7hocJURmjHjNhRd7mxNYBrDE19JRKvDJy2ckbi17PYktaD9sv7vNpa",
  "key37": "5eY76NecQBGD3tkgb4DuSjmgr8KBo7eW745waso6m6sGY1MoJcGZ2fcnWtWEaKdshtRnw2LhKDWEnseMvA4VyTjR",
  "key38": "4eijftbXSmKN7a11SVgFNx2bWnCatFzj22PLvJm2nGbf9dd9gSrLrDZcPmoDWcZnTh1QckM3encVnpP1iBoS6TqD",
  "key39": "4wWAKUyG4Utr7EPrAjsvdYHuPUY669m1iDJKYYf28Bmg1wx4uvhC68KiTSYHSmktsXAeH4euxXsFvb17BKTD6UA4",
  "key40": "2m7pgj7FpyZw7ourXPw1o5ZczNgvxDYFfXVGrvzKwPcqN91CwCmyfrcb74Tk6q59qWA3oH6NkQsoBoi8zrxPakQY",
  "key41": "4xATwCPGPcqt5edzfPtzZPXTxTfsziZ2dGMfmDCrHgBhq7YGsQyjT86691V3f87P5Xs3XvF3g29eZPPUwPNHVdg3"
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
