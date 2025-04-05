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
    "4CgiQGh5xYVTXK9Y9FLLKLX3gbPnmidQCYpeKrtMeZbfjN3TJzVhsJguJGiKawagCCe8sYCERw2rCMMtHhHVNWAH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WL57Ba9msXJwwhArZoZ6GuRcWgMmY6jyCoDcB3fhZ8L9u4YXnFZjVgP3w3jTbH53rm37igMHUYW3CKq2CF145f7",
  "key1": "3BX6KerRVkEYF8h1p5iAan2VRWsvmmQbKrusYcp3FzQQKJm8or7pJKmsahnoaDeSQRdfNYnENDYWrdLefvQkjq4k",
  "key2": "3xkah9KFzcMGVvygHgki4apZF38fzWbt8WQA63DhNxsgm1S5Pidy579CiNd1nvJ4kYGibJzTbRLSEgAbZDKFvRuf",
  "key3": "2BvgLfxU1Y9MMREMbeFn43bQxXN8SSFvH4jnXbuPX1eiERK1EGdkeLKAcLaK2hF9Rkf6gri6q7XcbZWGF7gkTubY",
  "key4": "4LVbnb2SbH8sw5oiPKnF22fp8CGPEAmCDkwXyEiwsuwCe76ymMeR9H4MfmPMUjnzFA71Lnh9NWqEwGkLENpL2Gq2",
  "key5": "2m7a74mcK4pWNmNTVGQPcfNJmqQxrP2amKVY7GRskGnV5brUneuNJmd8yC7LRC78GAKJGj4s9NzSgiviCm3Y8cxb",
  "key6": "TFRywooBTDzswxJcorjPx24nzFWjEaaST46x3x1bQXRNTqb9hnTCuUsEuw6ULzW21ud5Norkb7MAPcMJdnYxJtr",
  "key7": "56h5xFuYPfyheg2PR36m9mVeYj59iQ4FZbqamVEHbwze8roR7oBkKNCEmFVdhkoJUH11yividbEQGoiGspqERMBt",
  "key8": "5Dt8fu2Qn4HKdHjtZvHD9ECDbG8PPQrxqA4huYDx2VXTCNsAxc7maEvC5y4k2GtakiP9yD6xGVqFfHXMxG1vErY4",
  "key9": "44SdnarjFzWWL4DgGsH2obS9NaEVz7ShoLiVPt4VwGZcD1bahE84EVVwgmXPHJ9zNt2cTDhe4GsPpgEP8YjyuF31",
  "key10": "3H4LKw1ST2x4vQEeTSjaUNmNP6dCrwXmoMNzo7RaHZZJZJJMvDybCK2LzQYqs6WWim7p3y1r8Xd97xgBkEYr45ed",
  "key11": "3uFHUrQtCwyR5vsZYBUv4DW4MJFEzrYS2wTtfsNC6bsNoX9CWPexNG2b15PJTDcaeryjAsJkv23x33wLH1Z5miUv",
  "key12": "3kHpaEyKQuBG9t5fC6G8K6V84dZw2LLvmbKLRtyHj8KtdkXQ2zw1vmsjePzEjvShBE85VmNMxB3k9EQYEhzPPvjS",
  "key13": "3nDeexUvDZ7WZqTRfCnSpuydj5Q5tMPxwm7tDf9YiRyTNfqQ8Ftjrk3NjoX9Uq6R52uMSFdsDkRGpVnjKyMWYTgM",
  "key14": "8GiMcjhGjvHu4Atacq9JfXu9ToLymKWGYJr35VsW7sgrKoXZr8XGDND1yM99nhwiZpCVZuUMinfLv8NJBBDF9mQ",
  "key15": "2Muojadc36RpJKgif3zdz9nE6Dr4LfdLHSEv9nkubRUyP7nE9aXah19eEsiya7wYZ3bnFwvVYsi4TFahGWL3fR5K",
  "key16": "21wd18BDqfFyQZd1bFnvVuTCwnZuDiyURxFsnzraTexLWkHRQd9B4jHxZjChL5XDFNgBCfiJ6m8eZX1tJHbZqPb3",
  "key17": "4Z4XifoJBenL2DQ9GgUm3D9yD8RdB1HoJ9AquSXWyGvL3sfApVysiaG5TffJiViBZJi4VeoAR9akwCcTUCnJdv7u",
  "key18": "4vifGqVw6Zx79sFp1pMFsMQxnbxoTRRrMVhoWv5SEPwQ8NGyNZkS4S5w9rumk3Fnw1vz3iyAGjmnKKjphZyRg9Hn",
  "key19": "42cVoGxFNbzvy7qH8AfdrxR1rSd9nj4LfA1LHMmkCifXFpDq6AY6EzPjCPomR2AAKjfokJnahryjiS2eu9j7pLhn",
  "key20": "3tkupiymdTW48Bvh33V3a8ox43LnsGR5UDLVAkCuTXzkrYbTzjNdSvVfs6f7RnEMHGNuhaAEmUxsyJ6uQKiTGzzD",
  "key21": "46BfG8kRqaQykgqMhPxd2ivdDTC8ZKnsf9uQZ2nbzeCwesGfJr2Y6Ad1qG5LxUVqLZhavAHFjkvBR5GQULY436nd",
  "key22": "4tp4HiRGzs28dhoj29h8DfzN13hTeDTB3TvbKkL6cMwbKTU8NwN7sxUNzYRLoJAA1SukKW1UCQWG2FLewfXZiskC",
  "key23": "cyDYLD3xdisg6N8J25RtNKtTsDx7QxFrooXnBxvtrAHp5eSgSJpteKj9SEdzpxNov41UprKULmQ8qB4JSZAPepv",
  "key24": "5ujW8sR65nCBkmXFijpicKD2ERxQANkYy9GkN8W7kuJ17VsuufBaJQvX1J6YMUEWacFsy8qEDCobsirzHtFYBZEd",
  "key25": "a53YLeepofJUUkgzsSs8QjhfNWhmpDwWzGU13UJpqnf1Ng9YKnj7g1RfQyUusXL8U9EKNarAKAc6h4hmPuB8Vin",
  "key26": "4PsnUJ5xvXwwo9bUS9SibwY265k4FQeHohUmQRWkLzfNzz9v98ojpNxHN6jUbgSJbr7pQmfBoSMYgPezE936ki7z",
  "key27": "4UG6UhXq6DcaVQEhQY2xitJmbxE8Gf5hcLMB6o4Jwck7bC483qepVT7xZgscSb3zugzrwNam3uiaaHCUPcCjR8Fm",
  "key28": "2xGNhBobC5M8xtTfgnPsudjEtUawvT1VZsKQNf5XvkMe38aLsg9MoBiEVPX7eA5mfKo6V4DtF2igoxi5eTFJWreQ",
  "key29": "wf6LVfJetzdA8eujhoE5g5JuRHQGFzwqx68KbPddS95ztS3BPEZYRHsVXbHXjf1UUnx5YhZAwuiVwPsZfnC7nvi",
  "key30": "2Ewyiwr4g8gnhariMa9NAGJ7qcPKvDW3oC3fHQVbuMEtbgZsds6VHZsD3mZRSwmF1yauUVXzSXRxfP3YwYzfKa5a",
  "key31": "3accyNfNjtYMC2a4hNPePxCSj2g2mn6SLZ6TBEHsUtW6yXNHqBHz89BxoPnd4ih5BcGSf2kiSh9d2uBM8y43TLQm",
  "key32": "3PE4SxWmwtx72HLmeHwrPu8SC69nbH4RvMZbsC4bsw6GphaGV6TrSaAc4c6dSbJFiE9pHkeWYooQsEeg746rkQ2v",
  "key33": "165fsJVD6MvvKL9P9YGf2vMEh3voT8wzRL22HsdsrZruR7vaWi45TfEL7UYqmu8u2W3edVXFHPFCDwTyXT7UCAQ",
  "key34": "2pVe5msvR3sTR2xrUSGZkyNNXxJdJmYff8LJo7Bc1Gg4kG26ctuedMGpDru7Y8MPN8zBLRUZNyVc8caaxhmP7qoB",
  "key35": "28JK6vpGau98cyTn5SB4pYjXfYsqepSg7ABQHcDkf9NcjZmYy3p2HGHXoGQ5tWJiAFQ6XNC3w3FESpMe3g4zgmct",
  "key36": "3eoahVjko3P4iDqbxRXmnzqPdxBfU3YT7ZM6ronzNNwPZLdGNAMaq3DLEk3bxpqPjcVrNHEVSDXgVGkF1pbf6fMi",
  "key37": "23LSzHixGx9YJ45BNnvN3EPCSRjHNoWdCHYoDRUVtBJ1TRCBEwd7PMc78GgrE4pEv8Y7FzTCCW9UiVBEe18fmrt4",
  "key38": "5wchsFo9EtJ8g7DXSDtPM1n6eH3u7f49GyMH1riRC5uXiLhpHfHxG5NY8yL5B5fCB3JDv2Pkthc5VPrS4Yc1Z4RD",
  "key39": "5UNfHbpwPNYbCtykSwX9ZfkE52eT2yipAzD61XmosCGqcDR5nMjedKocXuGEn2CwRNBbPok6KUWw7PzV8HyinjM8",
  "key40": "4RELMsWqtGfPQ1rpd59iRtM5nhKiqXD4dLtLvLi4CGJVadJZ7oXQ7eawyT82UFKLoQT3vzHq8f3YmfLmsEHs89P4",
  "key41": "4ggzqQuKWB3G8Aa13FHGjuCsu9wdybYSVvzZAiHtLFRU4dqR45QWU5QLKvpHthtBt9xEX6zU7X9fFxQjiB2JsMsY",
  "key42": "7Hd5fXnXJbLsrZMBDKQFHiTFFxX8Usyfmb3wEmmnN7BaBfrNY8G8LvC8V4UTvpWncv91yKagcoaRUAPVnPrxrXB",
  "key43": "2vaUcDyxT6Cdi8uY51ZcqwtphdmLL8NS2KE8yMFZg9woTinvsP339KebxxH7WUt7L12qqBKEzJ9y8zsUtiHSrgYi"
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
