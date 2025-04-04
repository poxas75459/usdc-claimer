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
    "mVyEGfKEnQie27S7WANRfn9Z5rLV39fuv8jHsP1tsH3rqyBBfaFdJ7GQq6VkqafPqee2gvQnovCKQSJptKoCPB4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3X3UDn4sCq4cuYvhHiNaRFFwvfpQ4chQE4uYF2Q3QwW8cseG54e9m6suvcHL7koKR3vr847oBi3pWAcXKKADpPik",
  "key1": "4b9tzD4zMevvv93eWYpR9P9gYpUHH2YAXz6cB36X4s4AjtQVgJzhnTpReeZ5X1eexBQWDocvkY89og8C5kDnjmWq",
  "key2": "4rd9jZhijdGo3ZCXrnrwYmv2AMNgPNG8vTd3ZbLccgvdyqsPr9i1R5BFYXwcdnt9CzBp7qo3FE6sWpiTX6db87M7",
  "key3": "3o6bd8g3tRnr8CvoaMUbHsvaebWvdk5XM8KSje32b3XcuoUNR4JeroX8WRxBY4x46kPWPgbN6B8BANdrTLhSC8eH",
  "key4": "3o3pbyEEqijBgowyh5wZgCWJegM7pc5ZQDWNc1tNR9pxrBuZ84R99u6vXZHXbT6QhRUg46cZiadoDfLXEJdJNyaR",
  "key5": "5TrqdpJtH4DYHUykQvFLKayHhy9V5dmmzjwvTV9YWMyEt2B9HLu8CpmD4LRqyH4z8KdXsXpVJk6sDzkBhc2VkfiR",
  "key6": "4DVG1E7EbQbESBwEszEvh2XyK1f9NnMYjca1tNjHRAQUuXvD6GXKab8AXrxE1QQVVupnwMe797afUN7zQtVVkhSc",
  "key7": "2RhozSycCaJAtrDqT32bzZuLjHR3SWgPd59huBLoi7fdRkNLjXyASpS44hT9fzMUj4DH1XBLqGnFV69vTwbsGs6J",
  "key8": "4woVaQwPWxRxh58ZNRokyTUxbDDxSxb8ijNb9g38nMeCYNfGu1rPzkbsMZpaUt6PbkVDiijTSDXWoX6TW4y1gfqw",
  "key9": "2zG3JVAD5KCHGS6Z8AgkmDuB7JNpAJ44DQEGENzeDqSQupqXACzQPuypR5wmZZxbKfPBcjzPjA3XmVwRypY25cDx",
  "key10": "28rc3oHWzmmFu6sKGirBFHzVELu1Qgbff5wnfG9chZkDM3YhMHyXbeBVNxDDChsr7AchCWxnpe4q6326tVGfLPvs",
  "key11": "4EsPfgDcMYR8mVbbzgMWR3imkDD1A1caPW2ev68GQ5kB8hHP8wjysUBYPqPGPRC9xzogdKFd4keXzw1mqDnjDWKU",
  "key12": "5j6oj1RgQC1kzw79xQvm5BM4o5CjQPUqV3jVuxdGcZXFYENPmdeRfdDFS3ZHwAHNrWPNeAHmbzjMEdbJczytf5Lt",
  "key13": "2DYfMN4K3xkRcdk4WSsQ6YijsSeFPMUHYwi5g2HRquD2fSnUn4JW6JndtHgKsFr4EkmfNCCW6PqzYPtUHttLX2Uu",
  "key14": "2FHECXWnb2J1b5RTzMJf5ykQWT8aL9VMY5K33eN27P2MLxJxZm9RFNfrz2dXk39yY7qQk2zEqUVEqhgPSu6sfmwU",
  "key15": "pUi4WkTFJCyt15zsQvQX7qYEiEEVjLcgDDZ7Uz1MiH5orqNuEfagZDYB8Dfx6KDaRSxjQC7EeMP4Zkq5UaGSte1",
  "key16": "2Rmj9wdYPMi2cTKGZTBCaTS6QQbawBcqNytEwfnTyVBrHpjdssLN4XSqGVUf8okxgw1iJCoK4Mr3db3b1MEoNG13",
  "key17": "4n1uN4DPZ6cmYixdHsBB3RWRqsX3P4ZdJxzGqmnehQyiYtr13q1iy3PTXTbXHhddLW42srzkvGtTLMfEe8w4f7iy",
  "key18": "2LNg4oSUyCjDXD3muFjkizqKY79PGj83hQ97TwP31ZUJUbzWwbCg9426mv4rr86qGSTUZi1EkZUPbjw8ZBk5GCHJ",
  "key19": "4dYtwtU9qv9KVDhhm8pUobEjXcaV1hvxXBFqMkMyk3fshnmDTFrduptAZRNGCwhhq5jkpTdqXS4NPmgXi12GrE1R",
  "key20": "5QvE5ukvcz1RobjMi2t7TEA7Xmrr5XxumGD6wwKsW2jh7JZ4f6pQHRM8uZKy9TNLc56UwZN36JL3YWHJr8xvKpCD",
  "key21": "3tLAsDnH4tg2Maf7DbhVEjzsaSovyLCAtVVsUQ1pXThi55aJUQsmSbRaUsugHTzjap4LUuB3NGh4zQNyLVM9Ugzj",
  "key22": "3TqsqyFtELcmrDhGe7WFwGXkiUWFipV4AWWyMyZcKSKv6Bf71uewiN5NTFizpvq8DaGveW8LH2ux2frRvT31mJxo",
  "key23": "47qkhmQrbhV62AFeH6pC7zeuQdRo6me43XjTxD5jFRBJdY3aex3VwdAVNuHpTFVzHD7kFidFUdJR2jz9jGAMqp1T",
  "key24": "2Z8eMwLhRWZBGGwBEN1WTBr3hPYcCg2sH9AB1KmWYi9WQPA5BxUEz14goST66727kymW5BKJK8WNkPsqZivnCBYn",
  "key25": "3fYH8kdTHP4DNFAgwsUKSeWUWxAvSQdUPcCiQigCUArQF2CvmCqSxSYBaFisTHpzNAYVHJzcFzAd3J5mp1kSF3Te",
  "key26": "2H6D6Ad7JhBQ8Eefntf7WiDUV1Q2TKou1F12gckzGGoJJS4zq1dM4mxuzpkT5fZrnytGchY5zvC2gJ4tYdMvPdqJ",
  "key27": "4WdvdYrFRCuLCZRkfCyk4N7i39GmPcsBctUUkrxouUQpBMtHpXjzGzLVRuAVQ5TxPipYbRAmfy5NDbaDUftmfnjn",
  "key28": "7N8oGVrFUPL9hBiDC9VUSAA6MKnodbWmso2bojyHiXBEmWfVjCjg4YjCvSoCwy7pYiDJ8Z3ppaBvrbpiGLXNdvo",
  "key29": "4cHk1SfSt799dSvcEFgBUVnLo2rQszHf1eYBVx3FZJXr1Y8Qaqn4iwSjKNvaZLG78wvU3dqNokp3SYekvYSNbTi5",
  "key30": "4LNeDJy2a6Woe78C3BBnGw2MjfaCEtLjpTebf8Z5CzQDfkpCaMkZLd3dvVgcj9uzPxyZyWt1dyU3HotSsAnAZV7E",
  "key31": "4M8NYqtzerAUNVn3wD7DrU7xQvPy3Wt6XpkeTxjprs8CKyB5KLGkrPrXGC5f2BebXyEX9Ty6HzL1Zr1rZZnBQgZi",
  "key32": "4ENQaXabPMn6z87qawg4uvR9fDALgderHVBR8DseriH4LxLUvuT6bgdspKyE76GWRDh35pqCQVKGHkTiVEMo1bvj",
  "key33": "4wHXHacpnH369swJmTqd3csQYaehiVdqs5ybZQ3E2Grt45Ap4WtAhmsUV6fgeYJNNHNaticbz47MsesGKEd9W3LB",
  "key34": "4VBKXZwPeq7qeFaUmm2y4sGuntGUHBGpQPXYBSbtqScj7exGAPnGmdc8vt4XtbRoqbKBBySMTm6F9ancfAH6pbyf",
  "key35": "fJFXLxrUSQzW98UMFjjPNwg2MKRWFz7AgN1WL1TuBX8Q8DcSZ4xLNxDfbNBbi7aEE9YnjHNhLsJAwywfnRJFUWs",
  "key36": "5TMaeWFr2DFZ4QzR7Y6GqyE4sT8q3Y2mB1BF49y69Cn4GnZdjQPkDMrWGKYV53QnjwNjgDu7y87GeFs7Vxi8qLff",
  "key37": "5AyaBoXwKcfD1jATMEMETdHDaLsuAMkTXUdvknUyniQAZ2utxKRaKxBfvgzQqKLSq6Bw9EVMyoyRy1xb5HX929Mi",
  "key38": "3e9NT6VYR1CPFxiHuY4FiMPa1QukqeyeqJSPfqhMyiPDmsNf4LfmYksmzxjhDrtnGH9VHTP3v7SjLCW2DGVLja6F",
  "key39": "3zZX5htNWzJcVZCrgSioLiTyQLfejCMpxFP9qN7LxMtaVghznMEsfzSTCwZTTGQ2jY8spQpDZuZtWhHg2gru2z71",
  "key40": "4USBdxJF9CndtBBpCbRmibeJhyZv8tNeBRPahGM4ar1rNzCvrzyNSQVKhAHoqMdXytKuWFRZsFj5RipvvW2idB6T",
  "key41": "3dNNExVWemktju7QvyZCRpSEp7FCNttpzdsC5CR82LFKUSDsRE2rzHABhaQNJkEFy8KvYoAZXwGdiwY7rhVnJJsT",
  "key42": "4THwJNy66Yu3bvZqBQPR8tof5MTzpGTYuyRtWMryqMqfLrzQpawWwDbMAtk5VYfufVpjd56N4zn9pU3d9p1pr3VF",
  "key43": "5xbxj39Q1NY1D4GEVBxSa7BsMiy9X4vRxPzY4V1FbRn4gfmBzHU1w7W9gsqFuc5kEoHREh8rj6kPvhB77Zi28tXY",
  "key44": "5zMgv9w4nLDCEXKKKhXS6nHW8zC1vumhdRwWQyrJKgnGdY44tvctGG3a8pwnbDWMdgoBUyhYbjwG1B8Re1NnxKBq",
  "key45": "4qFynCn8CzpwcVgRz8yg1t2wBWLPRMufC4DRcLayEsSsYBWc3jFFrj4JCGy4YSv8sdmn3Wf4tHiUgrb6dvE6JKdH",
  "key46": "2vzSWf5RnovWpNZBBhNP95pMEqHtsnbUnc5AXfheb2hjEMoPtnS9uZa84AyhzmLA9CcMDFYMBFcjDMkLZKFvRpbf"
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
