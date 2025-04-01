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
    "5VJPnRxqKZ4i94s7FwcUTnfHkyEbazJpBh5nTPDsQc3dwwwmttQbNCCLG2KE51Ztm56eg8eb1CRyu49QDmnDxJii"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fncQEDyJwJG5oxo89NUKtghhDteusN3cd52ZxGbY6VR95aEAFfjEmEWgFYxzacm7J1KownDi1L6Si9JUGhP2Cw2",
  "key1": "28XAEzUb46jNnHbfQVwekQANRvqKXHj3cgX1PJ4dNc4h4YTE2iwu8ao2C4fcB8HMopTGdKfYrsA7he1wiakQTxZP",
  "key2": "ybz4xDGaBBcquPRRHSaCDmZzxW9HYYiPpbFwe7n6dJhZH4TtDTBShtXGRu1cvRj44NZ7HZZnyTUDJN7SvuXpxd4",
  "key3": "4c1JcENBKS9it7DiRfYSWUcHGaBS9d7rF8RtNDpSQMsb6PFv2xSXqDvCURJrtyvhDp5wVVLeySvnQVLH88xGfqxd",
  "key4": "3UtTbjMxXXioS8pYuLUs6AQdvB4Q1iZpFPZgcFabusZzgxYn1ZxFTfddaGi24gpZ1axA4Mxm3Y454C9MP2TWKZws",
  "key5": "5iEHSbm6N7yTJ77QySbzaHRJJxkPjT75U1qGdVtjCAEmCBEzYgMdU4gd4c9nuzTeHCgQS7dBBBA6xXfydq63ZMvK",
  "key6": "2cxyYcSZSchbwENwexeJY7VmSMEHntvurgAAEJqAZa4y3GPHRVguWhnc4p8Vp8PJkVNfUmoiMoVDtvorw5WKzY5M",
  "key7": "486hfkjhL2Mc7WuXAaBgKxHE9RKTsMMK1Bu8P5K3W55Pvw19fhF2SNLZ95wmCDCPpn8rEchW654MsYskHzc99NE7",
  "key8": "2pxncCugY2mQi6tjJ43ewbSm1p2GVddyqV5pG1b9Ny927PDMSP3LbikWf6KjidiaTf4PsovCmKRbhFxU324VxHXR",
  "key9": "zrm4GCSUFRvrWNndGvPHgncFL19LpqQB9kMBo9cMsbvwnbRaYtkgqqBftRVF9J7XLwrDvzNjVA5RDLdWTKTTJFR",
  "key10": "3FFSxp7Z9cmvaHEFT6gM91cd4t3eLW2TeqmHU5gA5DAeNf6f3ZpSEXkhhLxCJagDdnE155kbv3NmgUjvcwhWAeHQ",
  "key11": "4WLvxhaLsf1xfFWJkQ7FLDUfMnoLZyYBaVY7kmeZ5r7EAiNRuUt9NBth5kDEgzxdJEUrBhyPPDmTPstt2zdwPjN4",
  "key12": "2TsJQSXMJWbnNDVuYwDV9kp1YWVyN8Ab6P91aCdDsFv9Th9D23ZB2Z5h62Dg6H5tFECrUAJ1Ax4rQPR4og2YKETT",
  "key13": "2wkJ466K5Gj1V5JvohapeRxNZfGnaXbjJnXg4uThqFmkX5EkXbqR55vdbXsZ5P6swV9L8HRyNKosv2Dzz9w2HMJX",
  "key14": "5H1FLGz4dZCXLzcZEFNks4jh65HD21vXLzh9N1hcJUmFsPpiNBXLaWZ9CE9XT1j2VuBP2fD82BK2B93Aw9bHDtcM",
  "key15": "5MvRDAF1aw9oKwbbconniiXJuWjmymTQzaBYWMeBMeFgsrv4ZHrecTEYGsUBjNWi9JfRd81TaACAiDfX3Nbpt36F",
  "key16": "5AWqr8WUFahXypYqSJtRg6oh2dVFYhc5KzzNsnB5V1xZYaA9ki7JLahAuTQSz1D8tu142dJnEojkJ3XPJbRuEh9Q",
  "key17": "2bXW2gdNg4BPutMcn2VPS5cbQNi6s8as64ddNT3xNcFqYsZz84f1FJDVo98Nw4TXBLg9mfp9dXF8FHhwshMQaKFX",
  "key18": "5sCnUTD2dN6fKyVuhgvSrEFNtgU5Poncd9S71BSLDsPkZi335c2AzyWppZNfG6Cn9G46k549zpdWCbzj9x1LsKVs",
  "key19": "2Hu1Jqfx3krxdH7wD9NGMnsPZP1oMwjZQZ8bBCbk9pUCioaSdtMtWQ6WzU7X91zq7ABRARniYvrd2wzzCcFBvgV6",
  "key20": "5U8bnNBX5n1q5FZZdGiaG3nGze9gLGSJtE99V5WjWBVWKqFVXopV3JXrkTtTaSPmTjGv7fgtHszGWjQqhecm7dhP",
  "key21": "4E9wb28bZMQEnQqfD7AtttzeWNqkZEwjjbdo71yFJuyxJk1bf7wZE8RgLZmcg1c9qrfDx7kGHBnTct452okuwtuL",
  "key22": "3Hs3vPrYypL8VzN3FD9H8rDnrYaGcV4cuXCcZb9M3KYSNLtCV3khs4SXHKAbXD1wYZizeeLdt2QHsB7vCNrFk8BZ",
  "key23": "4L1JsLZDYCERsdXHMnXwfyENFtAsDaW1KyVTMTEZ3ipURRYfb2vRsenetpH7wfZPUkNmKaEMzdS5MVXXVwu7qoG6",
  "key24": "4xAgf8hVg5MGeU55XVBFhKKPqmzrBXfnf7vEKC9TrUkbBJBp4aeWzrnjzj3vNrKn1e7UAp5gDU3bdbEkNYHUqNcW",
  "key25": "2JwsVmnwEdgxNw1SAKp8meq3fQs5ifSFspPpmm3dGbDjyiM2YmGe5oQrVzpz3jcSAeBkL2YZ4H3nL9vrJ5C1U8ob",
  "key26": "3XM8QfCoKxRu9z7q171Te5tN37hzRPWVVmnJoVkcdeNz5eBJbwMzAuHj4L2v6SeoyZeAKNJPm2nQs1pMqLSUQSBW",
  "key27": "26NMQkhi1zUodVnh95jMHtwcAH5Wc4oLnicZ4rnboDeN6qpCtsPj1rtK28qG1BnVppzzAjtS8wvXhK3fKdoZecGr",
  "key28": "5x1Huy9zw2LkpsrnrFi8RJ1tnWpK4yvQgM6N6QNd7UwRp4ppHhCuQs6gRws5DjUJmdcqVrQjpRpHd8x8h8nRBsjA",
  "key29": "2wsx62GVk3qw5gt1qTuQea7y2p1YBLinFaeBNQp42Uzb2S2QPBHAZjwbCtLg6nrsHSdb1bVScTYk5uu3eQLqoUfr",
  "key30": "1ioZj6GiXev5C9VWwiKu3hGj95VXqUJJcTt91BiRUVz6186hSotFRfYiEgUD7wVidozcPkZnA384fe9UGig996z",
  "key31": "3TVLENEYcwrRLMG6TsEJYpbxrBT7Q6oAUboJmE9XL7qc9zK3Lebtst5jxQBiESzeTy5JKJZkjmXFiRm97YeP6NHr",
  "key32": "3FyXbfmaMYdKYguNdTidv6NmK2qm46Ggqv8Y2s7FxSLdqFo5UuFBmLgqz4jssAHwZYhP16PEojppQRRxhVZo2dfh",
  "key33": "4HRKQpUW9o6h4x5EttNEvz8DgsyPicT8yQwAH1mntjKSC8wmrCPCBjAXFYLDiVzYo2SEwKiZGr7ZHwg1Rbw9tac5",
  "key34": "2XwHd4cmwPQdGcXM5kZGsbjwYwrahm9MLa3xsX48RY89e9WQhqqxYmECkSJuLRE28UTNLSyQDvSqoXAaWYETig8J",
  "key35": "7AcRMFX818vYa2fyeYQSPYrKv4eUCrDgfKLkewACgcXEEKt2qZxtQUg9uuKgXRjdrTLPv9BzdgJ9arQPYvxqvyr",
  "key36": "3JLLXKNYKv6EcJGn2fpgmSLzQFN3ES4jveHyDefgPFedsXLsn5DgQCebCAS8BToYpLVqYuKDrdeMMBSyoYefhjnd",
  "key37": "5EyFYPbDfynC6PbHGRegcXpzLtzBucMjV5A8H6LfDttivSiL56HX3igEy7NqV29NboM8Ds5TrRKZ91TzhBHzqYt4",
  "key38": "pGR1xRtoWhsSn8iywZQSZhqeghEd8yD9jdvUvPdi6LML4i1vpPRU9iWT3DcAFtmCSErTHyTqaNC4RcRG7VpS6v2",
  "key39": "2MAanZxaRkEQgZYSeV9JWfuMbDAS2fBQks7rdsvqrN2bRxQwx95q74rXMYbKhKRdNQvX85RSFnP5tiCynKAnZFB2",
  "key40": "kgDdc5bcgM8isNrhANPUreNqUtyyW9zqvgH51GKd4V9oTZkXfQzVUctT1Nwg9J4pAQgiQhKyitrRudXwvCA8XNA",
  "key41": "VfER9dREBjrmQo5bFjGxRfQp7Fm4gGf4hbY6cogvWpq8dKMLmFRXKfaLhrQhWE4f6bCiyazURhSEYTdvnKLz3fi",
  "key42": "5QsgXksdcxj9TAiTLu2V5L4993R8PCterdVuCXamRVkSHTUgAyuZu7ZAZqrvz57PUZA9M2souQmewrGcrPPkgsn7",
  "key43": "2nHKSosojo9ypNqPwBKQ5M3EvutzS9xeStHAuhy6hZWWjbhqeAhVZqPjskQoRXYpVK78by8vs43RuQQbYEeabViy",
  "key44": "2wyTJ5RRRKA9a7ejAWKBeRbZ6EBkA5XAMXNBGdsdCgMCcyPF4qovtMdCvcKMBvTqar1GGFjCZk1sZ7huE1gTVVVE",
  "key45": "4fMyCMyCBVphnovTGWyRL33j8MNHjKL8P5Sj3ajVzZc98GkNhAJDwUfiwnxUPaSi3P5xVWJB7qrbyeLNgFBQZB3o"
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
