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
    "bXA5EuTQMGsouDgKi6qTfVDFwbzou8dsuM3Yq2raKkkfjdtNQxMuSBiwAru1rti4nvwG4QTGWMymdrkFK9NMpjB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JckB1Rj6MFKRE5iaEeNbtaX3Wd39c4y2mVXCAG66Dk4DsSwgSBTtcHrrwBgjxhm4LfXwDBQRbPxxC7spmm1kpqe",
  "key1": "AV36oVqm3MyTjVBgcxSED8V8N69XWVnDyvFDdPpdpKiZPapLvC2htViBtQ41VJQbt9GgzS9sJoU4UN6vprddRP2",
  "key2": "3TFQUoqHcPoSCLrwwBtW8zTrhKQz1UEDHD3zJHc9j7Fg6du2Axr8uYk7cM7mLdAe14vGgT3fY51LJ4Lk2Gd8kmfL",
  "key3": "3bihybipc91uSS6919LRdm2DFu8i1y9xPWuuenHfNR1pT1KzwqdDNZZ8iNncctcqiGWGTnFAG6RJ4tyDXKbN1paC",
  "key4": "5mzA8bKjvyygK9nvhHxTgpicRY3xUofjoEeSCeX9d7CEX92Pt2XEKQrsKDfAb9cqi12ea3cwxvLBkQLVKPv9i3R9",
  "key5": "L31zWDxJsV3LJJ497VW3FNuQ5TZRw9Q24dk4VZxf86oanYVSFsPXLCZsFE3tcHjgPFV1Dps39STWbveivqScruA",
  "key6": "oM5tZ7ftC7N2tyw9h7NCbGYpvBmfYjifNUKU5frE4y7pAV3Z3AeV8JpQQbYfsiq73d5U8VifzNhMH6Sx7mYBteR",
  "key7": "5wfdwwDaS1zLh8PizSyeTZ2myweaTYgKiUtdmZKmcg2W3DEjv5zJgqxpjALQJ9WnqfnubknhwGVULZL7Pnf7ouA8",
  "key8": "2BqT7qQtMtz4ncat8BKaRkoZprjCZgoaLesFBGBbz3nc8TUZk7eMkPQcopimZboD9xBeLQ62K66EFhZT8NcVcn4K",
  "key9": "3XYVoamusbDRUDAVnu5HdpK2vEe9hrxVubzmNWs3kFZeAYZfVhuypKv8okXMEHtF7ePc5erN4kdY2Ht3LVfvggf8",
  "key10": "CGBHRwYNbXUV4EXSNMzE5WTvyphKB6NTkFLbjkyVNUNL8Ka8kQHSWM6iFBijcTpuznvn6HewonZVwtrVDeqisxn",
  "key11": "476z5anH4kntdw89tsg7nT7mpvBFQYiC2bbZkxqvsnAbnziseU8L5ZjtLNgyAZax1wZiyrACeRocmKPf24bxmCv2",
  "key12": "pS5fsa16qksXPP6JT27mfaSeqr1rt3vmT51ZTnnRVCjZ71EZdqnWMirT6yBDzGXVNLvYzytaTbXMVgmbaDdmFm4",
  "key13": "FuoEvoJqQMANM87H24EcaDtyUSkQ6xUDU7Hne7G3WFXQBpnND9mE38B4MK1BV1BRwSkk7GJz5nhe1PDZwHDzNuR",
  "key14": "5TdbaWYftK1iooq3KBU6FNeGikrvj2LjLX3C7VAxRbb5SzEqFEEwVBPaCT7fhfieQTa5P3yyxzWiRDEomKE7i6oc",
  "key15": "3KzoHm4q8hAMdYq6sDgiexjBUYDJV7yj3V2xnyFhwKJtXa7L5veZk23i7wTBxFoxgqvvGUGxLDQUbqFzAzCfHdLc",
  "key16": "5i59PtkobJfj6egEVYbhn28iEsPpLAxzJRppChkZbiUrbaC5qS6bQ2ZXpoVLMsyi4UK9Ag5KCdfpph92bQYitcn6",
  "key17": "4AYa1EqsHUobXFpSqcAzXp6ZK7QpnAjZupWks2Tzt3Jj437pZrrDmL4bMbURFipTs5mo1sYQDjLecBRVm8m9WdQD",
  "key18": "5K2rzYZAxzyoFdXaFcnAQYqxB4ReqrWrjhMAaSvVNQXcRkm4cqwkHbTTVvktqTyXz3L2RXHcwdELH5U1awDQV8Jr",
  "key19": "31qGj6daLimdUg8v4q9NfhHQWyUyN8ZmQuBEdJzAWLsLF39VtLYNSeXkK3uBUwhSqAvwzhLz8j5vzdKsRcfj8fbE",
  "key20": "49CYou4FV7WibcW2DDsdypghLd2zNBTqHKyJVxfJjvSBkKuVS12zjW73BdHpNGBrUN3HpfzXqDx6XXh4NSD7vt8K",
  "key21": "5PjD6MDd8vQzX1F8QxyhiPkyxBtkNnZKUDowzersBEaUg57RfocWBKyXMY2w2cV7LWw9V9JWrSSGP15rqzF6cbbA",
  "key22": "5B3724Z7XD9BokkiEmfdDKxGZKNHZxd4eZZK7ocSTHkPWioxk7Qz47YyEHmaG2NCj4C6ssSoz15sGY82TE4Kyujv",
  "key23": "a9H1UKRn9pfoRSJuLbJwHjSjHMVLTiK1dRy8zzRE49evhpfxpywzrmz1zmSf1DJACNCs1nkDES4zF8DAeD1GMGo",
  "key24": "2FcgG2KboPZ9rcNFbP2TyfpfoVMiKNoxYD5kPHD3yXTbTU1i8FG1AJcVyDzZeVhRUMpqnrnuNRvWtQTuVsQBnuXT"
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
