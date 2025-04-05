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
    "67o28rsxzGiTZq8KabXpKkw7zTQWZQZ3epAXnbrZD97a5BgsevBKXFmUJa3WiW2YotUdrAQpUGJi5yAsEkANA1R4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bv9wpUAEyLJSELuJk9oaxCpL2asZf9viDSkw81XDsPnat8kk8Bk8NpYijbyMzczxEpno6Z6pp2XqNkW7XbD2SVC",
  "key1": "tYVUPSfv5ntU7HKvTvR44v7C388QEa5hsDDvURxgdH2iTDCYJqrPTALNX7RJwtJtNDPYwfnwm8hVzEuwqMxBazk",
  "key2": "5jj2mtum7qcKKGd5b3qJJsxG9R9LK3qyAStKNBDBfrszkUjEMwu5ibqvENo932d438bMdMbM78VyjC8ezTJEpJQ7",
  "key3": "3MPgaM8qP1F5EWQZFaxVrMqWyKySqDobSagfj1Y4MwVFGkB1hJPrJqaFn7cgUjnzLCdLsW82MSe7BLKjZQaYxcrX",
  "key4": "4wv9o76ckAuhk25eUiGdzE3qKnYgH3gazUqnvAnnyUataEyJ3fc7TDgjmDLjdp8WTa5fBF6PsmL63hsvamvzfxPx",
  "key5": "4MJcgMjF3se46Qrv7fhLeitgmcKGAAuXtUMu9rEu9eLie8gN9XQqqwteh6XWmEkmjkNcHKAtwwDoNahcFG6GT5SE",
  "key6": "3RiHZ6Dc14HipKy1zpGosEJL2jSdmjQEXBctauYSNbnojCeBXhUaTVDYvy5z9BQnGM3TEEskuyNrzdrdt6gqc1nB",
  "key7": "4we81EfNpm7wTuK5ZNDvhjuQw5rVdz4PrJH27mTfWmqoiYLY326ZzQa6MzPK4YjmD18Vb13CqVsfVhpVQrMJz1aL",
  "key8": "2bgGeJPkKQX4MzxqHWnc58zfSk6pWXHYKyNnBZUUfyHqHQqfceN6EDWpFeCoZi8rf6F662hq5fQmWEpoLKtuHYEp",
  "key9": "5Ca6ncrTzKp4drV9sWTus28rH6xMUrZSsDHuYfX1vMKJZixu2uXy5QDP9Cgo1XHp4zowRvEoWLWBqe7yjNPnXF2w",
  "key10": "4oS1t65LAGdqiCrspy3X2xHzqKJt4bNpRaggqXaQBLDCxSbKNBNSsvGaWAyPYe8ZTv9goNCEK3xSYiqAuGAMeNiG",
  "key11": "2oqtwegHgArHA71LyKTDYzKJgYmkSRh7yr2SR6NZ9iuhcLuRyj55fqPypHKqguoiGFySEcjbRf2HZrqdmvsUNCp9",
  "key12": "5nGegWQPH7Xt2HuSmBLE2RDaFCWKjp3xfKF3oVgLmMhhN6hVqtZ1qfqY3SfTBxLWGGjrV5p7dPPoC26XsbJJcE8q",
  "key13": "5GRJQrdnSx3CA6Mn5MrBrnxL6cGBbS97RgsrimhdumN1evMKTMYr9JcnM8jqW7qb8gC9zWWyiQp8Fn7zfnuhQLJc",
  "key14": "9MpS3WJB41mxgrgD65SxV4wXSM5XHHoWRUVJvFZ51XgKe4gx8E3ztqy4MAG4opXnmYpUBw8dvLzeF4oyhyu3js6",
  "key15": "52qacfQUAezMHDfp34kPv9BHtx8iUR6WitBzMgJUpmyEGxGd9V18gWbRkZdVg7XRxtuo93uHaiKXwaRWEUVNmczQ",
  "key16": "muz22C4yaxMUohasuTstQp5THdpi3AA7js7ZXbYmCtgssnx32pUez6ftEW53mi6GWLti49UU5LEiBZSKYK68p2J",
  "key17": "4Q9jggkqE8A2in9q37oWUiq1pUrHopdXCWDSBGxuacaRoa1tn8XTZDQAemZGaYRa144rFR1hbHDUuet8LZwDxKNg",
  "key18": "MxdwK15V8g3D9RYJcMLcJEncqrxZcZSmbyepdqG7v3Se5uvhPLfkmo1FfYXinBn7gEVyypdqBcfj2ckgMCcAtjM",
  "key19": "UZMiTwkk4CjQRwEumxJGoZBSoqzYgDrnfrqQtjPiK85ptXTgqUqG9jvpQNSgUGEwDEWvTbaiBroqN2mhRVWyGsB",
  "key20": "2kS6jTBj2YJzeJW3LgwpBmGn7XuPNfFAptpWkoLxJPVVEsuBDjZBJPXuLnZuHptqyzmp8FpZR6YYxmKxsTLSd5KB",
  "key21": "4cGYvxbeXPRdqKejiEUHcr3iZKvwECM9YNhE8FMnyUU2LFEik5wG1ov4FAWLBn9sosxA6KHes58KsakFgH9nYWtz",
  "key22": "5sVme65rAMyPJrXK8pQbrZVd6SD7VoG79QTdDrTEDyFcQTq1R78GYMawYfz72bXwRaCXY4tt1xR8AB8TnDefeK2",
  "key23": "4ycwdPrpbpPMQ8iw16EzuAfWcLHyff67sjGWRMRxAhTDHQxFXiBDWsdwKuo4sbRvWknjE76kX89iwUbDydZAgR7v",
  "key24": "4qovWLtWpCbuNSFVyHGnns4xo4wCZ3t5dks3se1LawTPJpwkPUggNqV3kXSz2o1tCRetkmoD6MepDUXv3FQpzoo3",
  "key25": "2FUYsJ7gVSQWVqCy2VjKLVrh3fFvJbcv8gUoj9NGzr9V74c27ZaHdbapfhcUmYnMLFvvUv8J4enGjvgsjgoS6BkY",
  "key26": "5QMZnZKXiRCFQ92eXPjpazjdpXqwK4mHnU4oFkZi4bLH7qnnwn8MHJqGDwSceHgk8itbLiD87Y7RNEDwJK931q91",
  "key27": "ZHh4Gx8VK3T2AnoCJCXf2gJxJPf1Msrq1JXKeqvADzMuaTttbiRaSA6fRWJHi4RzZsHRcpALDPEkZgcbdiMnbRK",
  "key28": "fQppUe3CZn5GM5W8gzw8TpxDEP3wMy62VVEYA9e8zXkrFeFc2MEiPRcoMbDr7JZSqk1sbvxHjvqs1jH3FaRu1H3",
  "key29": "37bRRX9bUtEjjbMze7SMxd79zbR3JXwPasDKxhRL36xTtmoHxRXZjsHxCy4zFUoVi2tWHGfnq72wnduhzmGkBPAF",
  "key30": "5LbCWAPuTeGpEGqUVzUrZJLbQf6Wvrmp3cjQL3T6sZYfVFBD1G74kUWQARCdD8AyVGqnx1uVR34wMomGbLEjiFRo",
  "key31": "4HWRwexnTczbvo4YE7VdqvDseczw3rdtk1jC95VTdVk4iU8Sy9xKmjriNCkbwDJjT9EJ18xjsFMVb7nvwGMSq65c",
  "key32": "5mP6Bjxc6WknND7GrvzDdxYoDKAM4q3uLX3c3wKNSBzNVHuDQRdZ5sdouvWiHZtvCCKcpg2wM9S2mvP9u1nwo1V7",
  "key33": "2wG8w6Za77LJifDyY8qoepy2sfSHyBDJt9wYcgpDr3WKrZyMaZEi71QCYMCe9mupyovJa9xqCF2PALyYsyT8951r",
  "key34": "4ij45WBzH69qfPGYFMYqwaxmsAHRQq8U3hZCAVjAmTEqB99tNFxGRx23WfYxozqHj8zeuHDKT8Dbgbm7Z46dku92",
  "key35": "2SX1yfnSkvoaViXKWBtjwt5aQUGr1DzhWCjn4bJy7TyUreDcnD2ijCYsJ6N8uY6w6L5298Xn95xqSLEbeeejAsLa",
  "key36": "cNY6zSUCNCu79NnF8xwPA5NrJ7z41A3x9V4BznTuhVyUyK2Ki4vJto2NYhqxzoEH2PYkjHGZLvbwGZ1Rt1vGzUA",
  "key37": "3Q8nfxMmcqyU6SCN39hJjCTN49x4nWVwdscfzhmexyCoyD7vWPRKCjnF1zzhrn3ECTWNz8h1d78kj4hLfg7Nd8QM",
  "key38": "b56K4GBZbtwLGNChgVdHakoc9MxjE58Q13mzN8avaZwcRQ8yWiygLH3dJK82yLV5SXYuaMC3LXRXQMhAZA8hgYJ",
  "key39": "qqbEmdPaz22MpyYkdEThGFHzdUPqBSqaFAEKN7vR42bs73Y1WXo14UqfrP8bSZuNu2nSwgRmTqvtE7uSQTGPDNN",
  "key40": "45th4owk5Xj8wayLAyZh1sip2xwqezJDf7PQfsFBJ5GFx4qXYFi2DbhPqogHcC2dab1wfixSqiW4JHaSe3EPK8An",
  "key41": "67qLQbRAiZb1VkE5G7RFKAm1PDjKaRNy3TUWN8GWnoQDNJ2fEtqKGvCmwN8gGTLhRo7sytV7HAAom87dkDeGvhwK",
  "key42": "3rcxxn2HB3d8ZJdeVN3u4cmSqR68UmWDj51WjyqNo6oMtHPJHjQHviF7px1XPj26hXvffQAhHsw8DfjynxkAA5eZ",
  "key43": "3QtbtotbTxsFYCyJXJ1gHyhACSzD2TX8yjRa11N11XzcZQtF73ACgottLdmqrS4cBN3bDYJkCvX3rdzTc135dP7Z",
  "key44": "5jmKDfUsAx2m5r8LL6NTZcYSTz3FB18GRwCtkvHCR4s18AZRrDBcdxKFXBQu4cbsAd7qKNRZR5y8DJAD7VnDJJxX",
  "key45": "5gEaAaN9awsiFQydMjjv3hUcx4dNPkup8diuVtR2Sr65hkdC5rCk2iqG3wiK5Vv32i2M55R3zJkFTXDZJ9aPPbuP",
  "key46": "2cLMCkEs4S3PaxU6oMJ2UxDCLxuPc6f2pUxEYTAJ3r1SrcJVMYanWkhdBSSzwyRxLudTw9MqZebM7W1bkHhhsEtA",
  "key47": "ext2nzif3RWjdTgbmj43BmU2Fnczsje6YS7h9ZaSHdt1i1oi5WtBEhtDFyNBstznDoYw3wm8zSGphT4S6HVwNDx",
  "key48": "5LhaNK5aykcr3D5h83eSfF7dBkhP3MyRoU9zPaD7eXv6m4zBju8s4QTNJzeBrLiufSTfiFxyPK7AH466kYoBETMd",
  "key49": "3FecBbZDu7Ffp24oegKTQfKw13LSxR9HWzS8hm2GgbxiYCBWQBTzmzbGZ13buXBHXWRVCDt4SJU8oQzCJyvZNzN1"
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
