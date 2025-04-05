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
    "3eZS32NnkZHGMn3nEgy4SKzpMdDkAJLRHTShdBtoSSk2BShPsFodemB2hPDC7aXXXVf7sHiV8hRTxNDhFXzeTnmF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2htuWpgJnCMg5F33PYCBCoFXcwmcv52sBgS3YWGBWuqrELezAmGmo3Li76CNZmd4okGuXRwtXBCQr9xuxMkQoZrp",
  "key1": "5bDqQaHbWtVrZ8ysWiSC93cUkyxf9u5ah95fNJ3cw4a7M8QRFWFJTCFqWnVwWhezLqfcjTMATNkmynA6b7XZbWQ5",
  "key2": "3p3ok8ZZGHrFNcExaszbr9AtXKj54V82XvdexLctz4nyFRcxumf65QVCMhhhQotV37LZcN3TQD8Hrym15GUZ7h2b",
  "key3": "4VCge4zhjxwFj44GYAHvvA7z2U8yMS97FyXf9UTV1PaaFp3oN3PEK1pJ6NqyCjDocvyn9mbMnboqY5yQdj3yEoGX",
  "key4": "4GfivpZp1MdLfhbB2nvaPVJpjgREhiReTQtnKxzz8sg7QTH7MtaVnfYkHxsL7hEwbSAr994X1Ke3V74f93HVzNrQ",
  "key5": "5aXYWWnn1sG5MaWCziVj7mRuqF3GqSekFRLZj1jWdeCZXh1mZXzR42bKmVbhgST3KKPammW9zUttiuqQfAhP3u1c",
  "key6": "4iyUhRfh7njJtpwUZgJse3VekwhZpwq9DGMS2jSR4dAUgBQ84PGp15iqi2yHSrfVfuoJwhdoPB65zsXu73mteRSK",
  "key7": "4N3H27jMtuuXCT6eTjGHpxsP6kmz5D2WQpuNcBTu7R1PWcgADCStryxpMswpKLgf67vTPWkyqc6yQxbConv3Fpp9",
  "key8": "M2TUr9JGc79sVS1ZZoowSHc2Ru7tbNKUEz7wvimK1cEVjtsgGkyuJuZcbsaprM22z4CG4T9LZ34TqVwDiVe129m",
  "key9": "3ZQK2ru6rNnPbxYDpKgy7bpH44rPQ17wJuNehXcL7iQWvDBSxYE8hY4ySNAAJtu5Q111m7jbJCeZLbf9owsP4Ak9",
  "key10": "45bbL4qvoQQvthhkL6vRYnYyeFZ4utdtpTEoCKR66SK34fLrH1Bmnc3NZrVLuLsthS2fCmRzvxL4M1GJ31Dk7Ftu",
  "key11": "38UrMbn4A6gtXUPmod4fxCMc1JpDgy8BMnFN8wtBg3mFbco87CMZvTFkJu5AACNbYfVc3ESjvnDdCkb3L2wArHT5",
  "key12": "2jxEb66GMDi5iUW3scXxcaYWq6QTLujnqmVg2NBowHFTiqTuUxazhQGVmHW36scJtBHRuDYYLmFhFEbomEcpmjNy",
  "key13": "64P7wnJpwj1LDD8pX716iyuvq5oTVoy8puqSGcya28cKym9oAFRwTxgRapT6Pd6HsWUt7221ChB19Bu1RSMyojhX",
  "key14": "2NeZLtrks3cque2nJv5czRjpJXXexdfKE3wUzjZXRsWMqRohFfS7gx6kDfYTS2BHnFjsy2Chpc5TriQV1coWH14e",
  "key15": "42LXFJUvbkXzSESTNaAFbSGz1zbdTdTF1aTj8Ji24Pr9GMmMGb2aKdVNCDcgPEvdpBi6hyJW7MzaxxywESDGfkRv",
  "key16": "2bLQmxfRZahybAcfFpRSWx7fcWUSCGeNWj3SJbBtU6tctxjWWsfA5wwwwNVysWRKZHUa8oaXcWptT9gungKdsy7r",
  "key17": "wam8K2WiKGzkST6Yf61b7dU5RL5mJJEAvKHTJuKnDCGpCeqN528aNPkNwrJYEEmHNoKBk5AifNM4BBcz9yT3njv",
  "key18": "2tsnBWquGbWZnJw9gcnLfXMKc42MBPXRVJ6sEbQ5wfSpYWtLGig6eWKPpF3VMVE2UQTgAQzyESsuhYXMLvs7SELw",
  "key19": "2Lp1qxNqedbFaMbq61VVDieYRtSFZX8YupRhqqeXdYdRJqyumKN2YHxtj8kmE1m9Xy4MtmapMXG9gbgduX3NudUx",
  "key20": "36fnDALdpENU47v8XrhsJfxARJx3BtCivLS2v3c7TrCo9ugSfMH3EK5Y9D8bsi3HigcXfCH6qmPLrmztmAf4GLeN",
  "key21": "3uM5f3rSwpkth4VyAMjPne1HA5FdtfJTzcZZ8PTqRyHA3kuUQNWmwMafFqKyXsgo3QqJ1ZFQbD5toNBC5qTBW3JX",
  "key22": "3D4B6vBiVkQAApKw6gqyr5Xv4KdegfZUqDus5djg8iWE4AaSDh3ZTKtuSV8hwgbD64bdQHq9QmNEtBcdXEqj1L6d",
  "key23": "215f3BxLWZDLxrDvcsSjwrU3KZMF6vxJhAToUmPDvfrDtAfCgytgpComE6eGAKR5FLNN2x5GXAGCTTifwYwsUPXL",
  "key24": "5rbJYrG2EPL2dWPsPjzw8XnW1U7DSaeWT2UFgCWeZ9HqCjqBtZ9s6UEpkSgPam1F52TfBsm3taXwdebVokstjk3h",
  "key25": "3fx93zomyH44S4DDdeWfVfneAHCfZy31nWuwUG69FcAPf9KbfgKe2ePLaZEXZu1iJLnqA6GGhZKPreYCJbTPzQRA",
  "key26": "5fSSSgsMKQicjUo49gCwh21Y8nCdynmi9oBJLnZ75QLe4nKzHL8zjcej5M5ZgkDt9uYN8PnnMBMwSesAkMJckMZX",
  "key27": "5eZJf29vkYheS6g68hsbTP5CMR6KvGyTtz12TbtNWHGZ6YqSNSJCPzFPbYonSvouKZ8qtjDM8PXq1vgv39rWKUMd",
  "key28": "5xQBeuF3d5fuXg3TLLvZkPyCywCpyLXDeeUD4xNXymcFdBs99AZMermTPCDaVphyz3oHNdWW76jQfJHCmhbhWiNA",
  "key29": "395aBcjw34GxExSAycMyjXfwQ3vu4mSo1GaWnURLhZwUadhXvbRVhcgRJW3P3wBJQnmNWqTnhu6kAbmruWfJRB19",
  "key30": "3vJwxpzGhSU1jV2aVo5agU9Be62txx7aN4rtVa9Uba3SCHUk64EbqaFyXjnVhW7hKsyAYNKUWSxcbcRk727cTKv6",
  "key31": "37ykQnvskQVMKUXBoQc1KgFH2yBvtumEfryeraivrnohtnsPPesp83Af4sCPSx3GTdFFjabrT5UkHDADbkh1d5H1",
  "key32": "2NTBWcWXrnR8YGFqoAbPHhDzyaiSjii9Bnc4Hfqu67GXohoVqEkWnw7mjUXFqriKaB7Es5qCmY8cyNXTB4VGBdam",
  "key33": "5VmD8AWTxZN8UvM2beyGnsEHiYFoLWHweYiFux6PJ9yogP48VGJRuo6vEdqeHUPoSbs9eDUGRT3rStu16qXNGDyy"
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
