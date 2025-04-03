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
    "21BkdA7fD47pgCwrjSS2p5dm5Scf7Ci795B34rPoP1Rtg2JfveRmeBD39PvqidxS6h7GgxipqASSfxcAjeFFLbvq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "494Rzbq4x2zUtL4kGmSisFzrRzrawVKfHRvhoYamY2Qjde4p3ZcezMYCjgrNeS8rxAmRii1gtacpYwqz1LbBKPgB",
  "key1": "33mvkb68fRFaZuh9jumdax8Sqk4zwSWcUUygNiUv7ZKGGMDLHWfEcFTTgfi28TSfHzgaTKkR5w3YAAYbgDp53gsd",
  "key2": "VT8BUeF2V2S8w8qVoBY9oUUfwxiDp8in2oJJsXib7QuMqmCq9fixj4Y59DAGCTpZJKDNvkgwLuyhGGryVucA78G",
  "key3": "4FmPJRvsdsXWJGHVUQheDGjTAeLXbzLEL3gpGV3cJXn667ZLErehQSmSZJ227BSdDp4LYTZ6W9Z7NGrx6wbg6PQC",
  "key4": "5gsHPeizYzjvJuo9i2zhdv51nRTtYZqkH54qziYwvr7Mn7Z7zpMNpeyyEMDCP3gA2vY8LTvvoqr4BgefkCddU6Aw",
  "key5": "32Fr9um4MZ5bsN2gEFyzW6tauGeSKk1jY2Z9STSvj9nQsq2jEGqPVU5f1RcFJLLoeUXiHt6Se2nwyVoEDbXD8ZmY",
  "key6": "3m8jDeK65TRCk1AUNGKo8nhYpUjbX9KeJFqGiyQMWdS6MMo7ckFLEBWQnomKqbS1Aorq8sG8voYJq3Si11pRwJv1",
  "key7": "2SjJ2nwH4gyrCFw6JwW17kWEyJKRbttJRffrk8PGC42YzqCBEtMaAkxndtXc1JANdM7mUTUPR3vt6VNvGZhVPr2r",
  "key8": "gsSSnH6s8bu1W4voFPtvBKjABq4wNHjUvCWtYFfmKFFJjuvMPeUCa2DSnHsQadQGcKzZLbsQWd2mMQtn9b39fKE",
  "key9": "XzmnXnfwjfejE2ZDZKeK47fXwt96aF82XWiBunCQNaHew8cZe3JeKnrgyDU6tCqRXMiP4cUbq8Jw4ptLxsRGi4P",
  "key10": "4zbxgytr8pAHTNwjqRnj7huQLYjiEKpvHQK4MG5CKUW3KqkA6h1KCRLiGsxK8jnHwkULJhm81LAsNECXc69FwSBv",
  "key11": "3gR4ucnKYbTtSPN4mjBJW9QYFD4sFGJQr3o4DT5q8xMaH6ZPUxj81czigb8DzJ9M48kHc9sLDF4iHjxnGEyzscNu",
  "key12": "3Lto4htExTR8m985WGvw2Y2srjPUUPspmraKJxiQ2ZESGtbhxd5be1XSwari54ieg1bWvBTa6i8g49TPPbCTiBfw",
  "key13": "2v5GLATi83Wv1KU2xr5uXxh2HPoAyHjTuhVRuUeqeSzvL4eX43s491nHQyZ468ymzqyiQMMkSSxMPmLqQsnj9aD3",
  "key14": "4XGHnrKtzai67CSg6KzCWScshAe4W7Mth38eK9X42kqnGYLurVrRXvABRjGNpbcwNqbGrZycftGiNms55PRYhewG",
  "key15": "qfi9SfZB5mp13fiWqxrL7sYQoiBip6qPM9RzmJ4P5yuRfL7vV477E81cdfnb15NjBmz9Mb1fTh3YmHtQjdaQpe5",
  "key16": "2ADqYvdSiwNkTgMqjNcL9r55fN4hmWsRnuAEueLyxGRVwvRS8oUwiRdHbAv83waYZEPTT4sBmzfMuHzW7DrQR87S",
  "key17": "4awCoDUjy7TWNY6V64D5NXZrKwKiZdmokvztM9ymCa6C6wFJcH6TwYyrvuqZtfXsWqyZMmEAsWgUAJmcoEVDD7Nh",
  "key18": "4wx1zLiixktkuKghNaEwEiX9Rrkcyv7wnCXofK1HXwxkNUKjPAdDsxThx3kYg7p647gPYUg5cfuDPQacpRYhU376",
  "key19": "2LK2izNy3S25GTVHHi9ixV5BUKGxmW4NPydWpTZbgq7Jw6nVMAYa4Aqxs28nQqiQZEodMsz5UrHLrBcVLeGr3uQg",
  "key20": "3MgVcwmZea6rEZeoRGYaoJKiWA3ZsdTC4dzywCE8yxfSMRNBZHkeujWDEMjSNvCMZK52m5Q3nkGw4DTzNHUEAGCg",
  "key21": "38SjFcbeNs9Dn6pkzmJEV5LZyAXW4dAotvBKW6Tv2wa9CGHNi4DUQwJxj8RdwNUUML9f5th5kGAJLAorZRDLFyQW",
  "key22": "3ApufCZRtFjfNGUi8P3QQXzSSc9bYRDYiGZ2Y38Ryt7YbTsT8KuZgiWKp41QwG7Bi7tX6MdgxbYHJCKpcxC5svsX",
  "key23": "3j9fkNYLqTJDPY3tRogQDWnsdVK1cEcU25wyu4oSTbffondGhMwpV9xaKVXag31KutnhnfXuH5FUxLTPC1xWVDts",
  "key24": "3TcZY2paVovPV6DRphJHxgh43mL1U1s8U7XbxDELLFNVgnjhvLLutU2K5mN4pmcyjVDKQQPc29x58nDy1msnPnSk",
  "key25": "2JhnawdxG7RNjhH8V9msmm8ZSiMZniCcnPcwE2UCytveLunhU3ewhuXhXRHTTB3AoRjo3MuBuy4Ttnia7cLojtvj",
  "key26": "3XKDrPfjTDSmBJoJUfohorhCpKyqTSCj9WimswVwmU4BVdamdpgzmAH5fFsgJUQiLxPX5z5divMiP4tooxpUrFBz",
  "key27": "2m2jkzKBqSKU3Z1iAQzDxSvuSLBsHpVPUZVJftpDTyCsPXEzNrPBBtWRmusPzJQeb22LLdbuVe8qi5EPXYRGrj9T",
  "key28": "5eQgEWLVUJ1wo2PGvRTFkjG6pV6gt9rrBbu76FasEkLWYRA65ZyRvZokE5ekB96uvyyvtxFbWQ8oKUJuxoi7HASu",
  "key29": "4DidUVXmJWp5QfmWJaBDLNK13pQR4FcML7EEMdMsWmbNurUiRmuSFsKgrra8kRYqpZMEKxtjJucQhFzdKE4AcwnH",
  "key30": "4yhMxu7KKj4zUaoxRvtqZ8DAxJLwLkB7Zpq7aqne9NcK27Jg5pjyDm7f3bBMfwxK14LZxF2DmiL6NLsiEuaFhVxa"
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
