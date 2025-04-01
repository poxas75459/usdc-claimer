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
    "bLDsnCmPrZV9AVq9cAd5XvBXWUnJxaUW3RQ5a8PAfpCeRrh7uYC4BpUxBnQZmj2hD6iycninTeRu7GJHFf7HEiF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38wXRDKfzH9w6SBrFJodiXyWwJ2dYvvicokCXVpmRAJRqQTMHPyuwiAYL9af59j3nwnc1BVxtkYvGbuBSRdSM3Sj",
  "key1": "3PNnduZEqZDCCVFVvDJ1fFZJV7iCD7vbYEpf81rneeCT6K1xD2q3FNCataHRxGtLAmKA8goj3vNsxMFaCyJzRgKD",
  "key2": "GvQqeP5fkxpDugedwXMEs46A7VW3YkSBGUocPFvxb8P4QZBny5WUdL4rWnnTmQgVTiUQsbStqsrJQBfeXzigcpL",
  "key3": "36epNedPJdGKofEpDq1o1ooWMSPSwp8FJYBwvSkmr2BMpenHyRp9zhQyQTbPpCTP3yKoXonuLLxxL8uAQHwWUBSp",
  "key4": "3Yckkc5a74Xp8xC5t9MR4r4cVH2h1Vn4sNxUpCEhFTBU5v8Eps7KUfYXdoQxtjUKJAQWxPhoLvXVeiQ8yCSt1sBB",
  "key5": "4i6dVtjpo7ejftR2G3hFfZFdD42QJC6dw6Nay8RgGtsyzsGwAzETQc2uzUeojE1XPGqFbgxrALoTiSMJe6sj1FtW",
  "key6": "5TTAttDk9KNsMfdCVpLfm8QB6JSzinuGUWJ8Y4urSNSwoRzNWCpwPgBPKxGu9L254p6KXvZQrR4FkKYYY7czYb4f",
  "key7": "2qGFJJh6e9UUL1bsGMzKZf3fjfmNdteJMjyng2pDHwFceX1WV5o76YnPS7TXt4QEMjmLYbJT5ShLH7vQPyGqzvp5",
  "key8": "yp9fN776gNq5dRuAWAohdDT6r7uvV1ciuDg9CMQi38Hu5Y39SS2zeZB44v47w4Wg5nAMwaB5jRuD5E9An6f9sHC",
  "key9": "iuus5abCte4qtm9AJR36SBSHUSLzTWvyVFvd6mCVeJYZLdp7ow1g6YrFiNKcfFyjnmJFQGQwJqCXys45kh9z1xS",
  "key10": "3VtMMfQmm2NTnJrY12AH58UZ3B7dDxHuczJ5S1MZF2CLh112x8NfSL4VEfUn9GVNZNetXfA1XvCGGYuexyMsssYi",
  "key11": "pFLm2Wz2gw7VoSqnZiDQhgPzo4g8gTbQxo5gAv3dbK7RopPkdZhBDmu5x74AUnA75PM9crh1xiZEwPvbHxrCRig",
  "key12": "2U5oqLL6QAf6bkja6WAPpwkvruxACmQE4yEiGbesdmbVNsYS7tJkMiymSNUAB7TAv5bmo7QEUnugSckGqLr1UXoi",
  "key13": "4BskqwKhh1JepvaNKt66G1XNE4qJEDEM78hzN3ziaYDP8hf9oT9LUcehuXodav4kbsXTw8DgEme3dUK7yLtv7ykS",
  "key14": "3jPeiMjiGAipBxoc7Cdww7xYHbPNpA39wvU99qRKJCymC4UigFLXC2p61UYpMbD8q58ggDGfV9E4CyEH3x3aTR2E",
  "key15": "3p42nxKeZxhcvgdoxotMNQvdsEjMMd78T7g2RZ2nuY6vtAoUb6KUxjcRzPyzZTya5C5bFTZQKKzxAEcgmEmU4DT",
  "key16": "2VQkhF7V3ZkUK9d3cZAW4oPRLK54WFQgJhsm1HeNHn2btfQnifnaNpSaGWxUvH6q1YJHg9LB3arw78mTDvUKwMqu",
  "key17": "m5Jffbqw4FgQZYb5pSHpU17ypKdTHnXMd2JFFtJgvgqbTndEG4Bq6jWQ8TW6fJGk8nDtK4if3bZ8ny8zz74nk8k",
  "key18": "3MGrWnqUEwGP7ivJM9Xi6rqJRQLnn1z8cZin55MnvammnsuZMtY7oQuVPBaJGNZCxBKajRhJDNpJpjqkKuEv6JTG",
  "key19": "2skCtFKxfsUE9ZaCu16whd7Cc5hyq3mDHhKzJGzK8WvXvF5twFbu1A3FsCfYj85dgksyrwwvEoYSbC7JqztjwMtN",
  "key20": "5Umjemfr5v1yfv7Tzmey1Xb5arRKnFvf1KBR5LXeiHsSvtcEuZEZufgJSfu9z3LezdVgaQyhn7pqdwCo8xfnHz5",
  "key21": "64RPC8sNBk352WQX9fA3BSSB1Yc7hazRMnQX92GJk1aGkR1CN6mgaVxnDLm8FnpUz62umenEAhLior8nKatzUY3G",
  "key22": "uokuNJy933ZcotMNxSC3wYHwgGmpgT4CyWhRbEa38Gab2petqHzTBSEbW9PZHWb9wJ45caUiv6c4HqSaMyJJpsE",
  "key23": "gLm95U9r1ZVMoL1jTkuQfhJ9UXP9P3pAxgwZMpJi8LrzcdGwCDzhY3Hc5swm6zYNKAx33awZkpoMMFqzoBrQ3Qe",
  "key24": "b4LjvuwFZsaYviXAnowtqFXh2osetn7Jno9YHHVajpJdpCUVB8rkuoxSgeFLygZeBHx9CJBTvfbwerqKAfni4gy",
  "key25": "4YB4aBWaWbeNWWp9uuVzR36rgaudVgUx5TfWiSQhmVADSNUgMft6sVBo1p3p9JkHJuYYfhvhLrN7pAF252iTvtko",
  "key26": "qUxxzG8VLMDKPKCPoH47KRvsXniuQXosuMM9LkLWbPsFTJQUSiSHqM1kbnurnM9Ei9DNtdFUQv9Z8rfC8gpSJfi",
  "key27": "37LhsMqdBHSJMN1ACTjiYDAE1gCNAkFrYogdK6fQqxH1BaZDjV8GvMoGxNahugmA3T3wxLsCny6fx4TFRKAMMnsB",
  "key28": "XqG5sEGAbPnWYCjYvDimEuLQhXM79W8gVSRUFJrZGWoBRRVV56B9eeZnRcETrh3EUojf2gKwjaCqPtgkQQGakAh",
  "key29": "HqkU5X3B1AhvKdzyrViMy5eesmQWT6QoexKB2Mq4CyiZMQQnnebwwgPTssWMs4LH6FAQAf4j9SgahfjTJGdVGZg",
  "key30": "4um7fCDkqervWLwVSJPZaoSCKJqXSuUYbqrtQCS7JSehVUTStaBBuoLUHsHsTFKR7LnzBkYaDjsoRoZ319WTs9eb",
  "key31": "471mCmTzXHc6yqcHyQkjRHDSxWWgd5iyDKPLNiVqXBa1Y8VRKRDQ4iMsq1Ajp2RoJVcVRNiep8CJhMKE2Fz8WU3p",
  "key32": "4Dtmp4L5iF28CFZ9K1QzXFrSvnmQ4SriwbEKxez7aPaBfvv5jdyMY813KmadUkaBBikPFD4ARf9tCpqhSthVReig",
  "key33": "5QGqZpMfHxDbzMVz5apWuexSnJ25gwia7Uz6J8afPAD57U918BG4iZvM1RjuvpLurygMgESXnu7tyCFNYzYzAAEe",
  "key34": "35gwbS5BEEGznfjwb4KvBy1DXjT9q3SMG2mKimK8tyEVSiBG6NwBHce6qnSzXfwEQst5e9p3MGkQxf4eRVv9uEeu",
  "key35": "32mpaEhNdSDNz8RxLufnLJXjkVbKwHxmBwkwBpkkUs8HejSoV1TxphFXgJByQYstD6KRCJYUdtDZzwkjCgJhuQ3z",
  "key36": "3J5LUgPT5CagTbd7CqeHGguiGZgpsLMa8GcoJuH1WzztdvxuW4wC3H6sqicYf6bYj3Dpum7xgFJGjyRapQS1ipeT",
  "key37": "5hTMeEKpR2mwN9XbBZq3aUVuuh9tmCmELZdXM8obc1oUYqz3Vd5cQ48WAGqRgCZHbyv8ocdkrNYd3CAU5ujkycau",
  "key38": "D2v29x2Wwivcz9RzTUcbzEdTPQSwuyBEkiqnZRuwgqNhg2AqYT1VSeySyjVu8LA1DYXnr9D1LT4Y5Gd3gkEEs8s",
  "key39": "m2ah1ZvQTQ6Br4amReotSjQDBJzdSoCYhCQ82qD2SLtR5FMcKTfjQBK95Voxo9avmeQ4FSiSZqsEdSQFjiNmf9b",
  "key40": "3ofvQKQaps38hsZM21dNU27dC8aNfm7vnxCWUpHPdW1jUm1466uPoo7gdYQqrMQwTTDnrQDS3vLRQa4YhgQ6kG3D",
  "key41": "aFHefnVzF6bNK8sYda4k63HQ9ayLQ3Ao4Ecmw4tSoDiNS9NWs1y6FkHyUr8qhE4vGuBspH4jw3kYZaEx7nx5d94",
  "key42": "hhnDrgFoCbe7oGQjz9LXbP9TYfkLQ7oqVBNRocStYYVQo927TUPM5yZVFkF3DRLnxcUpL9Dan17gcAmtWyDmAFv",
  "key43": "41Z5BcbSVvU4HPSV8tV4NuGsBXit3qwLArdXEGujVoedrDHussHfRemsAQbdTxU6TwyUg1ee4oDV28WYm7fhzdG1",
  "key44": "5eB1b7xEXFo4f4EazvS5paeNN5qH2s5xDyqNjJ9cgdgTzaG8pxk3zzsnmQWGEKDntCK9ByYh9vr6U8ZtsmsJkFhJ"
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
