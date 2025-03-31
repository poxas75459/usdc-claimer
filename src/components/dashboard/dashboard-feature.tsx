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
    "K55a3HY3dX2A4hpr44mNqgv38cwp9d7RGStQzB55Xc6m78brV96RfQc91Bz3ZAqk9ytoymE59kDcBBYQ91ShFdm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Svgxc5Ef87ReSehUHkhfTgTzfJi9ZsDLdQ476NCe73xQJ2KQowzRjfnwJx61VbE9H8s7k99vMNCWx8hzHE4Zjrx",
  "key1": "4aYGZo1w2ZgC1AJYWh8FdxxUe5Rvet7fQj2Mh6kVb7hH9yvnFmLN9yyWAzmJKLCtia99MX3mTMmxrQfsbpaNCgZG",
  "key2": "2BR7b3vEJV57RUwMJ3ariiCAvKkebtDYfvn9yScotvY95Mb7tR4n6fNCoYywHvdYERc2pWJD1q1yd9r5nPEzm7Bx",
  "key3": "5JVydkZ9zRvLYcePMnvj9PRMXyQRh241zLtR5C9wrgero8FVi97xCs64SuYfyDXH4ZVN2ZdWF3AcsgwbBM5pmayc",
  "key4": "46R1PzzsmXLVXvfKAChnVGmifD3rCXqtf9S4B3EAnxtodGeQbSKf86x82dryBW1tmJTuVecPmgBTaW3JYHLv52S7",
  "key5": "34Jki2zxBHV1juQTpJyiM9P5wncP7ajzDFjFi4Nkxxvz8cNsrimAdpwm7HCprEAs5wFGMSJs94UoJW3bAtumKgqn",
  "key6": "5fXAFMDWgMofDQL1Qm4qtKCBCrP4nizAEtvkr6LJ4mozb5BiNiNSXPMqiTruaDXuap3R1b96vXqbZUYvaWtQwDGK",
  "key7": "2vP7SapQHTe5iHhe6sdQpWq9oDwyQ7zrWxMVqXoun4SALGLmL5coyRKVLcvXya6AdfgEmydB5L1TEFunQ7ojB5gU",
  "key8": "3PmpXwLuKrs1YE4HN7DY9GL4aBn3nBriE6zKgkskVY1VX8EDsnRTUS3MGf2sFZhFE5SfBcbSHTdRziXckK4cXdQu",
  "key9": "zbFPyGoNTnxGKtzUZ2zkfRVcN2wbA6j9aEqi9KeacyNM9kbAkDVnygb9Vvsht5bNj6RSdLE3yJUyDhrF2yKgv6n",
  "key10": "33QghMbYtduyQp4fBZbrSggsUeAi9C63LkWeHfpUwqoNVy8h9TnH487GhtGJmKaVfar29wT4qQzL8vTZKnykLmY5",
  "key11": "3iewKpzv9y7F5hJpUvNAKHtMZMqF8HJA3WNYEpMv8qi5vSXrob4EynkNa7mBSz5MYd9f68wvYBjhMGyEwGfFq6U4",
  "key12": "3pp9j6rim2EKj67jRpHTyekNkmySZ4hRZCLKUuBL4y9z91dn39J8LDetWBXaUVaR5cQRa1En2qdwTkYaQeU7r5Ms",
  "key13": "5uWdz2nWzcozZBpF9FAjXiwBJFY3L151SgdVUSFc4gdzLd46qHiKn5ym3HNVFQ3YELC2ohVBW6VvRP4dizLxMvYk",
  "key14": "34uvgeArY2iTnAhmKTksnxx1cmyFMn917gf1g8L2LhymuGczfaxJxhuGrr2SocFQaZdMFHCKS9ZMmiMGPHbtBvdS",
  "key15": "ZgYxVjkYTXMjffs4oUdg5LcyM1mHh2JRZNwTVkbfVWrxrKeseY1XWhACyQWq9qdz5dG2euSPdb2vwSKDmZvLGCw",
  "key16": "53bMLMbi9RdmCCsHwWc8YpDgVTme5WE7h71E8U5cFzj4wsSdQPgthwj5y9hoZwj4G3cuy5mtHvuneP9wyue62nbK",
  "key17": "2MqUnmvw95iHNUBrmycLTV8e19R7ZcvYVijnWC7K6Nt12NsXmowdSBoW9WkqJyq7s77jXwSFZA3282r5XcLbVn64",
  "key18": "5x23JxvZ1p6qzX68FzL6Sf8ZSUXDFu8ntRiHB8cGEWzvjakxfyXbSrC9PguK5weSghewDvCZAVjBudG8Kyhquec2",
  "key19": "5ktUqGKRpGejFmy7NTxK1X6J5QaoahPx8TbqGo1DrLZbeGf4mXZdhHUt8pHfmXjiheDnUVjUARTS7whWaQqfCn3g",
  "key20": "3AN7ZMbAJzgj3DxNc5xn5rkZ1bCDaVFb5Quz4cPvqKFK3hXjW72xzy5BwZB6VEyahke1byBJxt2DCdZB3VqRCK4G",
  "key21": "2BizDGwb7bSjcZYMrbCGfcFHB5j71tL7GZpduaaN82WA1tYN1J4VoDeb3fSfQ6WtFpUbBXbkV3VdSUKejYfVdu9C",
  "key22": "3yMoCShjN1VMYPrnSyewUa7ChuiosvL3XLKAa88SGtNC5dgmqJXsVU3uLesHrJ5Gn89ZzDv6qN1ckNaBYwk5Td9u",
  "key23": "5TTyhV3ve7ug5xfXi9wh9Gkbp1sTb3AvXPRtNu5LtHrNCMa4LAeimu6g9EWQ3SCrNKMPAHwWXw2Ppnfyne2imK6t",
  "key24": "4XcJojMB7A1qYejjZ9vdvvNPbDV6YKgE2gH5ro5q8srs1rPyopafZnJhMQd2Ac6nZwzCSnGBZxmwAPogFveH2Uds",
  "key25": "2DdxFnhtPxy6jzcQ5wHVG7BS3uSPQAZxH55MG5f1Sg2P1kKCyRe1eWSTSDhUB8Uoi8AMpBi5iCHUwZYTdMYnQevA",
  "key26": "PFBU6PZJjkEN5QPd225T7dxdhdwpBMYcChSXtLyLabSGbp5QsKpQxG3swpDXYzb8r67CUxVDdXkXU8yifq8rKzK",
  "key27": "32eckGKjHuj4HvzeR8EoaMxp2XKzXRecvJ6HgcjBATBESJn7cP1kVToKqy86ipMCePRBvFRrfYibj1C4JsvjfNyB",
  "key28": "2yoy4j6U5QPtvezVPV69RvCXZa95HcPsLdP6pid6Vjztb8QjQGopXo9Tf32cA31YbvesYJmZm5vMkuvgn8eBaG3G",
  "key29": "5nXXcgU9MzfgBFSjismbqY8wxmtDvF2bjHYodLdoXxTRMuAs1eVk1g51fLLaA9RRbQj42HSzmu67ZkCswyeie4bq",
  "key30": "3aiu6EnnnpCouo3xdhiQKSaKRLsJVNawg3MXtkQHewCTYjNpVViaxRMmRr48L39Z7bn7ikTZ2PmvePhBQuRRk6kP",
  "key31": "2GAFctayTYykSoMLBdNfEb1993DdQJHNxhZdNZ7yeEMVVzBpqigFTEV59EMj5aRmW2eJCWcJyPimMmuZwKSEzdrU",
  "key32": "irWLqrGCGEh5mskSCrnfXm6RLHpSSe2hTri49KmCUh5SBJ6BLMX84t4JvVKtVS64fC1Eu9V5xuxUgA3m7CRohE9",
  "key33": "5pFH33pTUPdGtozQhVYzRuzXAmHJZbRwZfoehLSqAEwCD215KYQQW59L4rRA2VYaBcaRV1jYrWkeQqrVBVAh4kxg",
  "key34": "4UqNH1N9Um4ju7UnCNpPFFhp8KbrFkard5t8HadotoPxsiFMRG5SKYHQJagk5Wxx5Lg1FCTLa5hAaqgiXR8EUmMk",
  "key35": "4337E5FSbFq2JHyxoFt2kUw852KQCy4FAr7pAjBF53TcADtDPcqRxViXHpbQZzcXFQ5YfbhvGZwhb35WPHMfPRuS",
  "key36": "3dGLf12ZJyq2G3t4Ta5ue2HBTi9AVxUVYAaVXZAZeSZeA44voi6cuh6ykAdkcdgoWk3u26RVTEhDKTzUe5qCMfAg"
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
