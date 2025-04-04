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
    "4vX93HjPfdFu8mif8eqWahgCgFbW4LHrUKa9dP2RqBJY7miLyPsEsXU8m1eRzjWMxRxNZBREKNGyMKMVUdkMW2vo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XsXw1J4tuX7PS9YBeCuq44qJjm2kgrQowX7LamWThBvkp7pJNX1xhrjAjY6nbDTmE8mf2ogbRAfrHNVVBb8mSQq",
  "key1": "27mVJAJ3Z8MfW8662Y8j7CSow2jFNFWqYryvHCD8xnV6B2opBdexXTStN5XN56pwbeDsNbSngNkZzbqs4BvwoAis",
  "key2": "3EocNFUnEfkim1DtmHTVmRhAc4LKTcsoopLBPXk3noETWFB9YW9PHe3R7j6uG8HAURUapHuGsQhcqXEY94dTknsx",
  "key3": "4XFfbcnA8TjMLEhRZqYuc69VpB9QSPKiqHTRcSF4j6bTnVdoio1wx7iTG7UbDqhjgPETvd1Y3fEwLJqd9quqc4mR",
  "key4": "32fB2j2bC84vnLtQAnaUBiLtQrCkiyxV42BzTz2JKionBR6iW5RLLgkgUN7CTZMhKNFjSgnjyijL6Vpns4tm1RF9",
  "key5": "4FXVnQ1845xHo8ztxb4Rh17vSmphA52gsmBdWVrtYuWCsmzTDzEiKt2fAJAiKBPofyodCuykiBcf3wba4mrgfhhg",
  "key6": "4g4K47EPBE4DWmrEAxLA24nvBy7bBap4W58JHjQDWPvYnizq6sBEwJC2u71AvJwPSoBeSHtk1Ax2b9GV5J1hYY2d",
  "key7": "2LTqPaLqYRXJU49qaHugpSM9yGPNXpyXaKsP7TedbWyWJWLGncgnmm1A8ad49zrUg1Rd25zb4HohKAeJE5dfRo91",
  "key8": "2ebiXhJyY6Wn1o8ugBVviixqyTu3zi6EJRtk9TLag2jQDHKx9fudqoDQ4YxihmTuU6hVr3ySNCvTKaDYar7Jf3WH",
  "key9": "adjDAU1M2ZgToSUy6iTYTjqTsrbLWv7oMHkPAtymiFbHG4XkARBB5gjdCSaKY5z7dLCS747R7NUBbzuhvaSLabr",
  "key10": "4ejLLp7stH8bXUsPifnGWQVoY2oci5UtAYifZbVRa4Wt5CX2cH1j5VKXLvFhguyq2h5t3T9GdxrEEdDSBv9feEq1",
  "key11": "48rShVucKncfaGoZqkpREqDCPTio6RTaE5W762zmdsPLdK74kXqqTsSSCwy6GvYCU8FcDxDtkZjiUkSa91dHEQYW",
  "key12": "5QPt4KjyqEzA3gvdxW5vQSzFw2k25tXVH8roSLrSva6dvUBQN37QxZNFxT3j2FwaKNq9ACubi2QkPoBQzrExJgUR",
  "key13": "3X2wWWQZVz3jvHJbPGktqFMbyjymG7Ukp8dfca2MnddLscb77XtF4godaQGFTtvRNxNiDwjm5HbpNs5x1L8yrtu7",
  "key14": "4inqwWG13i8BuMyxDgQCj9iy8is6cNdutXXTPAMYABd762nJS9huCjdMkn9itH1GhormqR4ryUCsyMLpSwgTgBYB",
  "key15": "51axVwyZ6mE5zcVK8ybeugA2NbUJwZtrjesFRz39VPStmnSbGn62MVN786GrN5uCPJtpwUfr2C34x7Pmyy79TXnB",
  "key16": "3cUXwE4P1HnLoCqviZbJsq9yUYeEJKxQwaPCq3UuGVfZpDS3usqzh6KpnqZ7PDj4bmpZm2SqDoGmhX1pSKpUitsU",
  "key17": "iWY11DBR24Jxxtui3oiMu11mVHHViy8xoUzU9kJZcYdf4EXPTtwdVWX6i8a9UNSM567CBEnnwMU3JSL73JdSpTS",
  "key18": "4aULPGJhQA5S9pqpSVyxUs7NFdEGGdBwQVcztmeNoa8Dm1A8btgrrAu3zYkmCo7PLhnGgvZ3y9z5w8kkCh4aiPfW",
  "key19": "NkNPHJnUPggJ2qFM8ba9KeexmMX7FR3xQmyss2xyBGynXAtAX1EMmbZN46CDHExt1xmN59grXhZh3c3ZdMDQBLw",
  "key20": "57qBh2ew5Zo8d6HnP5h7YFNJdAnrCgcmhowUJT78r74wprzTtvCaAsJyaLN6QqAwRJ62uSehtPS6ywnZAeTWfWeY",
  "key21": "4orqFyMdctucW21HcfT9hMP5p4v65hwn21ANRRmT3F9GoCDhcyBx4qU4TfvnbACEuP5DjiD5i1G7ntpCkqoF2TJ8",
  "key22": "4ugENXp17LXJCtydkfHtuWShpLNR45F7pPiSh4NFzg1z74YF3xgW3Z5ErvbKmEnQYK51vkaW1DH6FXdLTFztsSWp",
  "key23": "4T291DbtmPcSJ6rNRxWd7zVAfhqgmqRRfpsMrw1hLiBsva7DGgn2EhVF63or7SHRnJFtmRsSXBTbvPovrZ9eV3hs",
  "key24": "4XuwxsSLgbee1vg1ftYrK1AnXVMh34b7QsSJ1XDcHLBURR3uG326NxhJU4Mpf8KEG2S8nNVAuGhnrY3GQuxjh5un",
  "key25": "3bNe68wozB2BxiFtYrzGk4utbX3DzH31KeV3f6vdmkEBCDgKnr5faTryfk7XDQU2TeenWcgr59nHvpGRezWmGcEt",
  "key26": "ZhndhHQmwSJH7nJekQ1FyS1UMeJM9VKRD14psVuZUNCgjoaWGiUMbXfYouNk8nUkVVmbbYNd6ofue5bWJjky9Tn",
  "key27": "3CtyeKCYoNgbrtHkRnNa9behRhnXpEvFpwPvW9uGASumWYrYX8qUQS8vLw9rhcephPAEWs3Htf8uusNu8ktR8rxt",
  "key28": "4iFpTXvsdV8QAcmLwKGknWeD4pHc77fp1ssbPPDJFUm7AN6e6Dej4daktc8p9SRPdY9TMoMomgT4gmFcAWv3CCxM",
  "key29": "Ynm5RmMFDY1eupKWH2WqtgmDVo4A1C2gCCDDGgHuKrbN8qzNq5auuTJQ1TuZP2TYPc8StTJDFRwopYCNEFGAxqv",
  "key30": "5WDPCHxXUCvSh6ALTLETx1nnGBx5dMiz9j4ypQPQYbQjLoNbHH1G9gDNgWd7ZUrGSN25kz9C86CGEh39B783te7S",
  "key31": "3iap8DBDU5tZc1XVoHdPJzDewgQ7pMhYtsvGyyBYtTXy155B11AdzTE6xojT8bxsFAC4FGyPmJ7n8iLWDFSMxJVV",
  "key32": "QVCthymVqHMCdK1LJQqaqZjYAKAfouansScyDsyMwTsN9X7XL56iuTu1iaWUpA3TrYVbYT5HGGkGCxKSWMEvzLh",
  "key33": "43qPAB9At3fgD9XeEahheuvaPHDXeD4tamXZuzag24FAVfVrDxMBaPwqo5qmvFLu6kXuEqabWfqzrrP9hFztwAH6",
  "key34": "HeWf6uUfidU7RoMxzkCeXAikHj8t6JW5671kXyE1shs7tk6puTfYNita5nLS4QKxegmKSpLAKkeQTDwWeCPmEWb",
  "key35": "3ozTCRsSfus6H4dHn8Aj7bh83APfCke3dQBYMnyX2XqJSJjCGWyjyQGPfPy56sQAe6RH3gkAsVVnrrPhSy234syz",
  "key36": "4LHzE3o5Uc37JfJNwSzhgb2TrJX2VFRYQ12gUqg1hg6MmyP573AU2fy5DbtvijbAMgLGNEDFtLmqDtu4pq9DUG1e",
  "key37": "5VFN1EXpkSUbDAWAaRD7jfXJJBUFwbd8Vu7rZZAWRCBcfreSpg8AwpX6P9r7S3Ns9MSL3FerqpQ2dErw97ZoHoRV",
  "key38": "2YqpyRGDJT8rALMzVGLzNAtdAJFG75hD8BH1ATo38hAdX2ePWEFet8EAv4c4Usig27Y2BzZtsdzYHvuqXKDd9FbF",
  "key39": "225FdVLKAriftSzBShg2qHt1YjJAZqRfHbnXX6sr9PbjzysWhpJEEetRYKEtxBqq2ZpCERcuS3eWEcx9D1zsfGc2",
  "key40": "GvBMKaT5aTLoMAVhj5XegxjpuzSNdBgFNsJeWkM7taeYYymn4SJgqFyuqgFYPtkfWMufY5pHbpZKMuSWph13e59",
  "key41": "3kCsf1HGBwfMJ1SHkUTVgvKUdpkSuVfKyYkJnp2DSiWFBxobvp1M1DT2tcVFAoEd5FtHqeuWedWR2hhckABgYMDC",
  "key42": "598bUAhcyQXr3fJJ1ZDn3rK3epHwnBmDjCEkCncYF5jzbhUFjtoLZHp8dCaYnTaDfRpxAE8WqJptZsDZ2LEGLdB2",
  "key43": "3acUnH5PHzxtnX6k7C1sm8ewd2YVCSZTMbZ8V5LXFFfPve79xFQtVxr29Yb3Bh8C8dNUFPUm3RNBULypyj4bntJM"
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
