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
    "34aS3vw6nxQ75pgHf1zRdeTz6HWxzFgreFAAXMt837p12JBJuvVRCRtZuTXVz5LhZw9m1PUUFgSkvdS3rrgSCJni"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42LyNUqWBquPurbsVi1gTjnRcQ8eeMFkB23gTxtGmXgMgdGtXawZZb3YjtG8oKQthygiKmzuxbYiZ8u3fSTeuamH",
  "key1": "4Dx6JswUg752UuN8HfYUn1EPXyRVQnKELSX9PvQB9a4qa2AVnmrwXthH233b6roYtS7RPne9z4b3BjmJBDaPuYgR",
  "key2": "2tscpv9KTYE819xHFyAUsuFQKQTJTxrFABeXhaa8gA8knU4hD8qKRDRgn39MztSLup8oJSioCogJY2XUGT8au8bo",
  "key3": "4geBrYuKB9ei1ELr1LaNLio3NVvwsZZ3m6eHzzm6QCJELGnYT97F3EncaLTPrVopJbHELReopwD6Mw6nRWC4syqY",
  "key4": "4S13G5mFeSY1wW7Hms1MQDtuAyFgMJXE8TBXoSijPDPB3Et1Kc98ZvJ7BViPZbdBWkU4N8Xkp5uyNtDyu2CYSETZ",
  "key5": "2GZFWKUsnFGsFxoSKQDcxR8iKhXXzne8hZU2PFF2vfgTTjEXYa5scLtNA2ZQpuRiymzVuX8ijUFZQq12cfUYkT1c",
  "key6": "2WfjZcuvZgS34e4EGKGDcGdYZcmfxHDMT5ZNc3deQNHprioUrPVHghW7i4NWPVtaupGJdHbnVWJXWjKXYphMkYo4",
  "key7": "4bzGMeTtX95XpRyYKdeB6gMLX4DyRmqtyw8iffYnKaCLoRHFwUw95rreuzkzrXd4tJArD1bJbYdfhvxLpHKw2pjC",
  "key8": "5bj8TdHLJ6gTW5ws5uVXJQrHNaVdZrxoq79HQyZby5tXCdULgPvGGdgAHiftTxvWLyH2HH17H2t88LedaYRgsyk7",
  "key9": "3HiHo6WZSBGXHZcFnMKhp36nfj8wqpLzdiaMSggA1nzN7J5ArofzLsKtAMbvzv9uLecZLQeDGyGRnScbd5Bw84yp",
  "key10": "2jXxYbb58zJKuGnmiFu1vtth5pFmmcEjF5PFz7uQbCy9Sxnd28Rc4ns7KebMVMvaqpTkwP8YZMmGD1rpyraKXtLt",
  "key11": "JVhgiBqCatRMfVZXTj14xRNqzLdyD2oitNn51eLPesWw4kDJ5oM6rF3zsoWQVFvcTvhy2tu96goQdDV1WaDhi6n",
  "key12": "27VuYQnnMxgTUSkjZ1ncDqZzEmUxQGWPRTChgvDNJX95UuhZP4FJ7gRDCa168yJqVHGMxqMvXtgwtDwH445cRuTQ",
  "key13": "aQj3ZtvSJEGCrSDHdm11MiZfXRitoYdi496uQrSbaf7GVerzpSYEbuy52vDtX6tA7PD8UmwpjQsmbit9p1aW9gC",
  "key14": "24jmXPhy8nd7MGxQewHyXdFQB8H7PArBJMh8JHjBubvqtNiXsKJsFPpV3VrjTwMh8i4UmDzoNDiGQg7moMxKGdfL",
  "key15": "3Zscbh137JUXgyLFsovzFqV9hhR1tEk5S1U4emFyvJhP8NNUJTX1TjjZEJLmCPq8Grc2HA7kdD5HhpJkXkQYbJKg",
  "key16": "JxsvQXBQZ7BRePwpnzRD4RYF24Jx6g4ByfjFihpXrdJq23EnfGab1xMiMbDG4nMnvXNB6aJDPhtTEgcdPvPwKUz",
  "key17": "4eameZNQBQWvg8whwrZuj5KJjsZoh5kYpSLTYCNov7tau4fpHCud5rk4eBdSivQhz39rNFN8HhXFUPE8j6Zh5DZ5",
  "key18": "QaWRGAQFGtj4r397gKkuFg2imRc4kmYF2vhWRjHPEEdiBThrFGcca2uVET8WCLRkepfE3rotnFDPcKreADm9ocv",
  "key19": "5UdRFsLP4KnshqDmupcswe7eLKG9RM7RXVEfF5Nv9GWMijaKnCePoj7xrMYd4SdUcKURU3it9Xmj78yA4wt2Hs8m",
  "key20": "7PSxjasoDxKZn7cHc8TKFtTY1dXqkRAUC9RsjUibtFT312bGGNy7Aw2E1Snneds3R5JvcCQzDWwtpjgsnmcn1vQ",
  "key21": "3YdFg4jgExG5F5YSixtVcqhFLhpSokcYTCjwPpmUHD77FfaGETVbaYsjjszh2p9M4cDjL3Hr4J8jxCr3FADbtfiF",
  "key22": "wnHoKf7Hmi2Zb5gPqzSCzZ93518auhaoBgCA8sRZ6UB6zBz1WE3U2d39k21N6RNpJihYFFngRaXZNRwEYKVqKKt",
  "key23": "4YQxwcscMqEpbkMeTzZUjo6CLvWoocYMb6B8TQL5bNAjhiTsV6DEtzpxb9GWAe3kxsNBXGpRqBtrjs2A9fbKGWE6",
  "key24": "5x2BxSBe9LYSPoAhNvSoqbhnC6yC8bv7RQbPSvLjBv1d86N26TT9Mrph8VzHTeD4NMg6qxgRq1kAPAKi6GeY4SUh",
  "key25": "3n3X96HDeCsbcHwGwAF3dNcAL3ryNihVoNyUmXLdveLVPu7H6roBb1vBsGgcuf1PuA9s63CNkMpmpCksmZhZLG1B",
  "key26": "3FSzLQaTA7dGAqPy5keDnwAk4fEXFEDJCwnu3iMnb1rEg1ei4wnLYf8J1hKGjeewb9eBZ1zYXBFEqHch9RreAyLM",
  "key27": "3VB9qM7FpztE5okjbbYQMpSHN31ZWWBT3HcJ7avEvZR6xp9ismo1XvTb39k52DVdJohykxhg8JW7h3RK9jQfcGyW",
  "key28": "55e6a6TBbuadxFKkVX2AtNpFAdph1bWATMDV4AxUf6CEZoBQ5LsZq69qJ4m9sAweyHJHFeMB7CNm4K64t8RX6fzs",
  "key29": "54TQrMppsZfrvT9Ftof1kQsfmibWFHiU25CEXVtUyr7gEdxnizKZuhvQ13XxuRhXRmJdo9R51tsizCweaspFbdm3",
  "key30": "3rS1gUsKcJeLNBHBvYZ39iNQyBmNSJRLNay5T1dRKXFzF5VNp6JEXy5xPw9ofViCt8npGxNfVxXYXBYihMaGYgW",
  "key31": "wyWTBXfNngtStj7k2QkyPmNF5nk61kE6RTjB2QHPMGhZkL9UzNrsojUTb2qcsQWaXKTJwrDC5pf2w13jHgHCCuu",
  "key32": "2A4SGTNhMwUKELdTTJjQNhH7hPJoNzfBRPKAswrmdf6zEzdS7p2C65rwoNPbfe7eSAe8Gecz2d1Z6xgn2WxNFaRi",
  "key33": "Zsg1RaG8xci9WdyBLyfQwULY2yKk4fqXEg3TSaPMZZ8rCXcg3hrBawnZMsWAYQy12hodTAUeiPurjebgjtAUULb",
  "key34": "vCowixjmBcC6goQjv2X6m3vWNYopL5cCSg5FRCaN6btZv8Vsp8ta7X4LGRdeR1WgKXEsnmnu6m87W3XbWJCat6d",
  "key35": "57dEpKD3niH3FmbNGozTVGaxMgzkMGKqz6zVkEtFtw413PvDuamcxKQCPx8cp99gQPRCkFGmhRcg3QHkNRiw6MZY",
  "key36": "5VQ4ggTckwy8TCM3vHeqzSYQ5Qgzc1MnoHVXpV2ALABv5oguTi4Ls75rN7vSNBcjfuDhuVeN5gVmmExKx14Qi8T5",
  "key37": "2zhTXDbU5c9vNbkAGoywELrdoJzJaij5TkzfScHPj8DffobXmF1w9sEobbm2MbHW1WkmS2UMRf1PsRTNqwFESPKp",
  "key38": "2tw9EnYy6cgoE1SSR91GVvrqedyg4ghzF8NVPXaPBGdnXBQWLddvyMb8CFaGZ2w23XadqPe6s9vZkxNpBpzUu5Jp",
  "key39": "3mcVxYyJx4ik4LWTZeAKj6DLFnrNpCHGnGX2qw66379rdFYMf1Nm8Q2iVk4EmTTxEtfmjMdrwmXqZYuF1ZtkTxVn",
  "key40": "3cXAoFURLLJE7kqgbFd5dXuFhNhLCLoLDFHB5e3GrVkhyNrzQTawJDtm5Jt2u4dBoi6pzapJyN7oPN14xDLKgtBX",
  "key41": "2SEdUaWDvZRgRuZytJSE4n5AFaToA5xQcF3YL2pLkccTuFhVLtxVWEXuWdYPQbPCps1BrCYXReVJ1SfLLU6LNFHk",
  "key42": "3LiLkmd2KzqASn3gTGCCi5c5ycEGYRfUGfTUp8xCQPivk5QHvaP5AvtSBV4eBLHW7tZJBDULATgFYrFj9d4ssUxu",
  "key43": "32tEkoi3fhHHbAmFkCvNVw9WVRUH5jzAUgdB2TeiYvnAruKUeLCa5mTtrpCJ5URJrbET68ZnD1Qn21DuJiVDSj1J"
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
