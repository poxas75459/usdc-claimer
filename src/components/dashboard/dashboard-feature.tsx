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
    "5c8mKs2gWujX8QAL4w2KPK5cmjkBj6S4geW3sH7pT7Be26JM8JmuHSQsgUg3nZM8PhJZBbLq2cDCRZZWhWKzQ4M1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dtCHWMRQz9r2oD1pjm8ZXbD5cfSgXd7QwwQSDEAUKKR7M4FFAw8gftU68v7H3mmSkTFV5ok7tK6DVkKWdAWvEyc",
  "key1": "62C1cDpYowPQbXnHEPePDYLEejgjkLsoXGKXJtpWyen7mPzrUYzfUS1f8j986kwZyih1rUKpvToKzp9aEtbWdejU",
  "key2": "3jgHVMKe3qMDZgmiZfepDD7ACUnAVoHJ9PsHwT9wLJtKoZb4bayZSAczUe5Tg2voNrBeu8L3CQFf5XZtwmVm6mho",
  "key3": "5Da4B7sVo4xsaFjFiXD4FT2GbAsSdjCjMKbExGzy8gj2mrvyBofCnwXCihHQwfUwMQVjKmZGKuWQ4S7ZT4MfWbnC",
  "key4": "kW32oHSvNs3Q7kT91CevNNRLmGYLPeWrDZi8PzHG1R77JXHZSZ1JtUWYsPKK9KE3CEe5B9VXZRxGfaJr257Ki1Z",
  "key5": "5VNuaZnbWLsY6Pqqy1UnEVNvtxwbJGHrEaw4xTnmSxcMiJxkBNr2gvTLc5uUzohmF1Xv3KQd89pvCEAvjZiUZghe",
  "key6": "EWZVidA829VySmRhf1k49tEXuoZA85khUDkExD5xBHa9vbwtXDf1HswdcZvcjsY3iS8GCwYjkNSfboboBvdU2oS",
  "key7": "5mT9rpU24SW5hThRe4UQVj4R6WkeVmiLrzTkcWTrMtXy3Rhej89hwG4M5JC8yxQpgyqx3Z7sbqQpUw9YovDgprg",
  "key8": "5Kx1VqUCAGEnyAidjegiBDn92PHqBZ74DDKXy2TPygUcgiirnBk6ehYc4RdH2cGcqayz8jbecuAx46uPfuTisrp5",
  "key9": "4RWkzKT6WAHWyUx4c7yCTcTVvvVCYWv4dTPqDwaAj48pPTh8DHncrPHgKiV9KQZYSpSv9Ub9gFGSGXo8dAcfHLAX",
  "key10": "35yPSfa4QKdzboUvWBYExyETi2NBpC7xhraadTS9b4iEzbM2QC2m4VVDqmMFCKvp4nVtshzpMYvsSmK1DSZQMWUL",
  "key11": "2u1cbBXBqvhvqxn6X7WHqhCt2Y7z3o95kPumomuacoe3FT2jDjVp2avXmD9x49iKCvYuAQB11qjRUY7ZDioEzxmP",
  "key12": "28szHMfCVV6UiRKL13epmSDqUcKeXZt2XBM9AgWEkgGpRMPerLiiSmThN8Uvkc8zmCsa1bHVHGYPGZ6BGqvarjxh",
  "key13": "49cXYHazsxSgRP9ARKLrajce54deGywp2RswJiePbQvsNtfVYjCqCsVvi4keWjMyyyaXWaJja5HEttnRXdJdR9ko",
  "key14": "4FS6odMKMP8ukRg95ztWb29KWJDenoL5NkoZc8BfJpn91JqPxA8dsDvC3kM5Y8ZicBNkSBTTJK3AoTDV5GWaynpx",
  "key15": "23jgjx4YN5RBe6o32iGCjFgd6zVqYL33gxkmjzu24xhFyp6uPd2AdDo9woW2Nk2ATJt2zQ8owP1QdMd82xz27XgF",
  "key16": "4HuCv34hZYZR9PSrKvDb6psX4brf36KWYdCtxGG6xXgXiaUaH7RLFqkX6p7pQACz11xoP7ZM3BDGck1NLXSK6khe",
  "key17": "5Y5ueDtKEW2Xi1ycST9GcRzeYE4nvjSohnk6JJQDeieqQxAiigt89CgeXmM2HWJnvNhc5eTp83Qv2ko7THXQXtby",
  "key18": "GZ8gPjv8F2Ji8BsYXg3Be7mq9UH4adZSt3g1W2uNocoPuSWAfTLsWxdZm6JLm6FFtcrYYXBoK6rNxVPMMiqyESy",
  "key19": "42LG8LrUeVKvxf96q41z8JwkVhxicHPxMgvwwZTtXYEDHv9Xk6LmBajvG92rzCX1Lpd9KKtu3PGaVFkuruhRgLvJ",
  "key20": "etZnt5813T4wA81gmQzngv6dJtQjwhWQ9eaTT2hvbyknzbFnLhExWJzkJoJiWkWJDVDHrU7viPr6EnZ2rDsSD2w",
  "key21": "LXTNp1z4tynxG6pgJG5CvSjeg2HY5pKuNLtzppHfzZLrHmB4s9N4ZrvQcKpEoAHGcnKTAU6DhpXxQz7t2jFxL4R",
  "key22": "4VuuXuB9S3mzsgu7Jrx9XTeGvLTKuH3M216CFpxQyaTQHMqWE6Ycrz1sr6iCdFArErdoWQ7uaVKgoX5Aq2nK13Wj",
  "key23": "4Dd4pRr39Vp4e5A4CGzndBHNwocpfkorvPZiYwXRjbWTM87sSEfvYyQ2e6pJ8NBMJ4yuwXdGZY6cMPfbzDSsz2KX",
  "key24": "4fdfNd7r1m7hxtkNkN18BSCgYb5DWtw81s26MZYcobR8XR9RsmY6DUmghNKu9EQLht6rRiA7o6XXfXUmRcJrbzuU",
  "key25": "3jQeW5RqhX2Mf7MhSjWk8TxErsbGoAYmivEqZYtVfXyUvmmMe2YxR4KXNEWAwLHDZLCKAaWR1hFmd839d5VkWmZR",
  "key26": "62b8qwSdTuxpbDwFw8ARDdJovQGLzEuZ1owTxKBtajTCRXwZVX1A9urxoE8yNiXDadD9jUXy3BsqdqpiDX4oqBt",
  "key27": "5dJZeTYRuDDehGQS2cXQQpHhuUeGoks8hX1oPk2VTLw8Aw3ucp6DXRk3VSDW66NM7osZUvchAD5yohvDUpPtrLYZ",
  "key28": "cqNLsGTpNv4vW3BKYNhmanW9sNDMcCDhEGb6TZ5XtLwbvmRQEmrt4QHrfux12hXMru72qyr5BJqQW2B7DuFBhjp",
  "key29": "67a5KSqemeEDQ54edncDFD4A3D9jfi4fMbs51roAtMYFBjWm9nz1aDKcYt8MtCeSmZsEk3r38qawvBVBGmz7Y9aV",
  "key30": "64YLxyqdEc97MKys4gbwDgbexEa2wVgVGUHh4Jf1iJFhm4ocYhHsCgJrbn3hyhjNh39AJdxBwHYUDQLKECdmzEg5",
  "key31": "4NHvibPhbBV2HNczDtCzZj63MsaM4jgxtF53xG78YYmNCH9QKgxDH2G4czgujLSerfvEqMoX8jjzxcrgMPunKpaD"
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
