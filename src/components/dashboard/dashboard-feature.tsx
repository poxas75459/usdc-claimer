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
    "GUEsCd56cXA9hDnXoMHS92oe3d5YaJyVPkn5DBocG2NjoJqpiFo91bT8PD1UMuXb94oDi7p7uMXmcQsSpihNmW9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vyrSDisBqVU74ayT7HToa5Qtgcf2GbvCoYtA74PpQEhXJYhiGgh5qNNFE2J5m7WYjM9U3jZMNHvhip6TD4FRVyZ",
  "key1": "2QptS5rJyQaBLnExHepULXuw2QdXUFvfWxeb9eE4jVnLKcoMygGmk1nJVoncu5CZmqcshkTS9xWnomNtMdJstfbA",
  "key2": "4bqbYiAYUTDSYt5N1Kxkvi5AUHtmELuvcKKSQGZ3wtxUM7QjkoHYpJuPr5iBv9gCYcqh93mJkqgSUU58VFbLJP4P",
  "key3": "5MjptnJwS17jy2CRJTi6tPfakhu9A171kyWX4YT91vSHBJt8MCVWRVrHiMbCYohmtSTsCdJsSrH9SJUDv3qSr3HT",
  "key4": "QB4atBdMsgemj6Scyfz1Q8SXmjGtuJuKasPLdmtBNWFovYndyMicdHh4ciPjAEzGbdua8FdVuzsZhr4qUVjfFRr",
  "key5": "2cuVhbV9wsAis4rZbGRYE98qCB5Dvdqq9n1kUoFExTeCuA69n2UJTp8ddTGckEzckhfdWZ6NorgbFDu6h4Dvxh1y",
  "key6": "3XegzCN7L3TNRXehmngYa4seymp2bTHdDapr25xBBAzMbkyTDbvmpnooyBuU3viPKrx1ZVzgWMMLoyDbJYeWKBPX",
  "key7": "2cP3EZuimAcoLnZXfxd7UbebxCfuck5Lk4XnyScWxKAEtXgjnAcxt25UjLxPz6MZfr9gDG87iCCqK1vch16g9HSE",
  "key8": "5EnVpJVHxKtkVdZYwNaTCxtGD4pQ4gab2VjFAgvDNpDaX7sR41LJG4v7yc1AHKFbeBGmqjvoUajX2TBUbFUDoftz",
  "key9": "3wPBWFcpC83JGoSxZgYgs6mZQsHuh9rJSFMT7EsZJVJzJcrba9hbWNTYdSesPCELQcZbv5H2zWT6ztdCbVrzKyAF",
  "key10": "2sNari6LCw6UvqbcvNDBMgDWJYEFRYouTAXaZcpruWX2FSKWTUd3TebopWCRWhbRK8UKCYL7vo529vV27cp5PzAB",
  "key11": "2xfAY3151THCNRxTfHQPTQU8SyooeJb2zt4V6BbqsQHZSSz1VzrjZXUsXACT9SvRT6suMx9ng88GitQuw7G4vp5i",
  "key12": "5RjAcXXtJkPGi7SZQj3RdcLmxyo9zKS9iPYUJkQxcqPE98dhgcznGyov2DwUcc9cH6KeNXLbc8K1gvyKPQXGMCx8",
  "key13": "4h8YEMv7h4Fy2fgnV6ETNqQgSb8ihBMkXdH3EHexKHxVr89U8JMQkvZeGR6PFq24L2mSVnB6PmayrrnC4rb8JLMz",
  "key14": "7PrUgnsJkAByhZhM6CQTe6grujJAJr68gvFyPyF4kwYbx5u8MTQYLRubcMteoZYwrminy9uxzLhPxWmB6RQUtoH",
  "key15": "ey7ZPkNxDmP7xKDaSMHQBSswsJfN4FtpY3fekeUmUsrX5CeMjxGU4mfDRm6WC4157YZzug9yidE53JY7MQqfwSJ",
  "key16": "5KaZ4KpvBfJ4hyhZoPVcES5N6MzqUWf1wXmsXZ9WEmQrjsJt9gdtjnji8gtZ65hSNiXjP5zVf7WrbvSJSg38SNix",
  "key17": "4vY7EJV3uBGJHaL3odjLSoFjPepJyxaGfZotpXfrXmLErBUo8TzPTPiJmAa1VdK5r16UxXGjQftWASyRyasL9EuX",
  "key18": "3MPg3voAK7dYoTDEXjutT33q1qcmdPaj4B91XXXpoYxjrkiH9tCGtWfmskGTkYMCrmxzqZyLAuahcyZH2KaCfCbF",
  "key19": "4FMdnyqfTTxDdKUemaa6SJjHeHg9irchdpKJK6Z9hsRxgRzfBo1MvJV4PezTtEEEJoQXPMv1eiyxCkDjfvp3jTCM",
  "key20": "5kjmQJqSqMyyDtwujHUYn5XoFDyihHmgFDEzEaePC4XL2j3jCWrLHacFV3XK5YiGs1KGbbNDZDJ6aBPpxXXW5bKU",
  "key21": "53pdjp8rowmwqr6chhpJoSnJ8Ly7nGfz3KwL4YQQicTeMfhKc1MpUPG9iV3hsBs29KobaYtb544kaKFdUGkcmpPx",
  "key22": "5UdC8Vym2hCFuQxjkorg2xeXiBvx9BNhs7UjGjRkuDNJyY6vidZE73cZQhqc9DWQdXYwawLfP4FSQePLNQKgp5Jp",
  "key23": "4nGR1sV1aLt1wDvA3m72BTVM3CMYTK1GZXhvVPUkj9KfjEn2omaewFUKaWzRBzcvMVx3McfDufN3HHpbJUW4zD2R",
  "key24": "3cxfcwndmA1DDdywU5YrPNWnWYHCKKTV7Sk3pgADVtFZHXtywgyghc9rvN119bXjJi8KNrkRkq9xoC1GdhAiUSvg",
  "key25": "45ATij8DoQjFUZLWYFZg1gSN87tQGLyTrzfa9joHSnS52GRajhc6DbZ7t8xcRhwUp3TQUU1Lrp9Wz7Vo29sCXD45",
  "key26": "1jcv3cZCvnuPrFn6mms9GekChj5YaX6iemcpusMiMpEsgBvEfRbC3Hh37XCuEGSnThJFwLicE8xxaxbo8TwWjNm",
  "key27": "3WJYRs6Ps8tpsB558SM14JKdMhMUBjRx9kJp9cSEr9qSYTEvY488capohQcbDvxSBhABNiHvhopGdoKZYeUZC2RY",
  "key28": "yV5rjL8993aFhzKoZ25hDPSgu3QWwYFjWJnR1aXghVPHDShaSzZstQsUH4kxBKPYapUgKdjSCqsxwASMuirpmFG",
  "key29": "5bHWqQ5avUakyKAoGKqRgxd2ZejFaTRj7zJcPz5zFhQJCjeEpiPE6qpzCELhNi9Ubwn2rn38rUxaTMtCLToyr9cQ",
  "key30": "iUjizWoQ6HyiWwFGzmQGeMAeXHDXQxFVuy761FP6zpjCMWqmECGnbmCFeqp3kXtY1tKKThceENzXFfWEGVqjHSQ",
  "key31": "2bP4KbTMdtQ4Fe3Vp9f6aZMLZZufcFVKcgJ6jwDStnqD7A15ZNxGniJSyTgbT2DvVzuyE5pbQjvSTKRRf19djb6S",
  "key32": "TejCiZ6oCb5UzLiMCSWUXP2XpXPZQEwjTUgcRnJv7Ef9xdENUzmqqSs8BhyYs35ZhdTTw55oVUAGV8MpnX475r2",
  "key33": "3LzsJMb12ffYBCrTgwkF4DFwpKwjLqs6GXNavctnUk3E89xJ3eVeNKY4E71Rf3XijYB4z6YmxVCF9KhiHxSGaKGr",
  "key34": "5TkWLSB5Yt2GRXFojpjm2BXFFyPe6YNaMa3BGaH3Kgcs6GmyH8kC1z5FhKsV4WNkyzjwqPzRwbisUKFr4hSAuLKe",
  "key35": "235v2X5p89Wy5an8RE48YZiA48jRx65bRBtMoaSRXmdW5BcJVuYctU5n2GvYZ7Tsb4DruNTn5SGNiZgyAoyz7YKY",
  "key36": "J4U6tod4cuED2nYSoEuq6etYyip8fdV7nLbA6UG9HSNtpbpmfbAfcLQNSReHkCpVVxXAryV5caPEebSFNhEg8sY",
  "key37": "4UAtBXHk2ENztACHuWA5rW2iQcVLB4NXGrbsjsXnKVCBiwrVMijCExu6uLGv22fJs2SRLn7kGeNiyCQJkm2t1Mbn",
  "key38": "qCJ3AuvCeCyCBqKAca72D9xYBq8hiBW91ERfEkPALhWBZZzaima2EkAQ1h3G8qDE5SuPabVDjoL8Thn8ueycC9E",
  "key39": "3kyi3SUFwU5X9J28UCQWjDPZBbtmLmqfbQyDSwJiA5NwGGAgzefq6B3yZxi6ETWCFB3YJrtviKi2UEMX2shx1k91",
  "key40": "46nwtebTeGDs6gLDsPFUCiu7gr4qvWWyjM4QqSNaZvx4YMNTrF225Dr5Q3G2bbwkH4BBowCHGdkhtigmKaNp8n4J",
  "key41": "3bqLALea8wRaGgucpNttAr1RFurdsUm6TX3HWcuPpuFsrSMWoZBXtxt1GrryniV3N5Dpa2kaNFVtcoLdfayZyDgo",
  "key42": "4TJ7ExvwqhCXFSYygPGqMdH1zAz4foBJURpMGA5nHPwtMXwEn3jvEiD24hmi9aWCommemKN4zuBM4yTNibTbUZ83",
  "key43": "37pquVDjnY9KZQ6EaFii7RVwQHVijRbpnDFR4h1YriKgvzgusTCkMTjNH1vUMZZaeCH8aPkEe1d8aDsRqaLN8Gra",
  "key44": "2i7Y44Xz6zickw71ymEKLXfabSFc6SZRx11SoKrqfa4p1w9vuAp8oVFENa9WYJyCE6944kkVeWyTMsQBpr62h6YT",
  "key45": "4RHAcdNUCgRCsof1uCEkKCoemWQD4RrtazfaH7YPepLZAPvn5KUgGwDDdtyn75NWwvqZ77n7t4XvHUZJwFpn8YHA"
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
