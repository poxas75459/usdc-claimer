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
    "4neSBuRMHNAm7i4KN7fC7gX7cfajFijAYqpV2YAhvv8pacrSVmr1Mcqib7GfJTAcXEEYYC29NjQfnXmmamaYmYp9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SeuLrpkrLSxxYbo5X1GAQEzWeJZeri18yKk1SzVA1HY8QQCrUCc97LYHDV6sP48Qd2e2wu4WJ7wBQh9rtffLTsk",
  "key1": "2UR7cmer6DPu4mWWQ4QspWLraGZBCR3t6oe3je2esVTdVQG95ZPektQQcit5hmFHaMzsBwfB1KzdvpcXaCg9K6UN",
  "key2": "5Hpt4ai2SQEUDCBU2qebQTPXbdWmggNZCTuu9bXQLG4VKaJVL4AWVhPAnW3TqugJjWxbmPt2U2ZaQweVEp3n1okV",
  "key3": "4y5K7bqAR1bQyyLBA4TgBkE6bqnVtL1XLoxMTSRY4CTCRFKFoMzGGHuiD536b1LMPWbpT9vJ5n6navwg6MDwd5rH",
  "key4": "2woG3gtrkCLxpUWnP8gFsAjswUaBz2Z2Ycm4aUTRrUmxQSFqqCQDkBbvw3xaLZDivnkazkC4cdFV8C7sqDWCqKa",
  "key5": "25tspUpenGgRhQ2ZXDjwyek5fFjomXJvMnbHfi3bvoQ6asDmmLaySuwaivhKFejbmcsi9hSxp3gLwy7SnTm7nqLM",
  "key6": "4bwzyaHEMHkuFCqWd1HTmPaV85y1hhYAGTn54XZaX8dABt9soE2SjeEGRrcDDMNks4UoNwxjfVa2XQ722nsMzGHU",
  "key7": "qe1RhjNn6xWFxBdXXF8FQTNtt4uSzKUYxtyNqhTmwwP7CZ184y9NSnRs29juSz7ufe7swUPnjXcGLpg5RVYNfHH",
  "key8": "2EyoTzi2d5gvYQsKdW9Sj2DuSwzWec3eSsSgxogZz6ZqXJm5nWgVFHwhJ3t26RW55VpXfo41CuNKqLLxETqgxXWk",
  "key9": "4cyW1L7GArCAGGhqj75E7YqwAXWkEiGcTVcjyGukzsE5Zt1kTeKBPNnjBbth965E6PDnMdMQyjFZucC3q5xzvigK",
  "key10": "DdF7o3eZDWA2e6BsT35Fn3nmNkJ8SdRXUDW7deN2o5XFPwAVuRjEweebct8dTuXJKM8PFHbCSUWHMr4Q15KEbfQ",
  "key11": "5kx3nUM3LqrKmWw6ADGDGcToFt1CRgShpXRje8xXjGpSDPZH9EBjQJT5FKu94a9VVustjySvoj5fxGpzSUfQZuMu",
  "key12": "4RTiwvSysuBJTjh25WwMKR42zRHMdD29ZndirNM7hz2mqNpg2CosNRcnUa3Ad4CZ6WPcKvwyjZdSw44n6iiqN33u",
  "key13": "2kMKwDS9aEXYUR8obNxyHKWVKXefZFN1KRtD2gJVuDwijjEoViCymPqXNE8Ld3925wnFicB5WpYShXp1nX265zc4",
  "key14": "mq57tzzeJ8d1R2n79rKRUsKoMeqQSJfMLZvctbuyZW6UCynCQD6upgFfjsuR3Sgsz9ZvS5ECMh38xeZofV1T5Lw",
  "key15": "2CmdExqDPBKtT5GUrAum84RgXwgPCsa1otEbUFZZmi684A6d5ENSi9LCr4R21W7nBpYGeafhTDbtDUpwjPEH2Y8F",
  "key16": "39rCAoZVs7xTGFktvSYuJmyY6EJHPPHpQLf7uqc9qGAzCH5SkL8EASunnX6K6BJypaTp1VMwfHzNs1S1V35Zcx1v",
  "key17": "3PauGSfgB21APiY5ZP2E7Hg3jaxsavd9TwRJchYbe7pzip9bkUs31LyTous3CHA6ALwGE6P3Q6HZK324tadwgsQr",
  "key18": "VjNa3WMR448ghAVBwTeiJwXbg3DRTwyAbr4NqzXY2Cms3jumNdbNTDyg64Tnw9nSqNpMbMDSHY21JydUKfAYBEC",
  "key19": "5WjNLJwhWL5tZriof2SCJ7zSUd3yRm9heSaHNtHL3c2dWJL239Wiccx1jxpDMrBfQeo52Kz41AUEiLbrm4tvyWXY",
  "key20": "3uKNU4fSuFzfCX6wmEMvt6SfWmBNQzgFgPLY2YrT5QJTcQ3opJrLvhrcXr6g5zF1KcpphgY2mQjitbN3zT5Nrc7o",
  "key21": "2CdupmpZYfGVmVkzHkjsckDq7WwQV4tfiDmLBFMs75yf2CgZQ6JGPcT4z2tCLhs3dYKej6UgGYoMAmyVf9kakZSv",
  "key22": "3BYaXgdf2QtkBxnCJVKRWokNt4Hpy4QHVRS7Cr4LXWmpWy4gg8hRWGMvjWKKgxbWv79qnJTRy8XmtT5M6GadLwWr",
  "key23": "4V1J5jfPSoku9hpcT5MSvNhQDvVNQ6sQd9LykwNZfHakYT84PtAHYtP2j8GxXQXEMveh8GU3DpoA1DL7BgwADJDk",
  "key24": "mxj2gvKMJhBk6ontjrApr744LXgBu2pAGsEcdimuhv4bzBCH2YPa4bqW7irihCuLPgfyuGeCedWoUU1ZSpnp2bJ",
  "key25": "2Cd75W8RtwhnK9XUnqnUg6x1Ak2cB1ofuVWwK8AJGVBxUbMF5V5p4CxLtVfCv1vjh7X1Ri61SBcZPxuPZ4zDsZz2",
  "key26": "q5APkhgPRBygQVjHyAFPtuyTChk8YWSeMJME4jheQBSyUpTkKYbVQvT74qyU75DTTZAa7MLmCkpLTM1BDG6Wu9K",
  "key27": "2J48f6ETZ6aeEq1pDU2ZVgnuD263Dz7AFzTkSwEAYBRoqgtykrP1S7p1xY1uvA7i535b2HuefN45zD7yR9twfMG",
  "key28": "r95hdaitfgDaDPCjVCF8e6BH5tqTZWu5GVYMhKRX7BiqqoM5Yw4C5hxAXGf77HGpprsgjeZ4bTMrTiv84dFaiHE",
  "key29": "4T5SPAdSo2ZkmemSUnbHAdfgJFXWfGZfMUjz5peDWqYPYVX4Amamqi467rhz2yxrf6YusHMUDXnVS4FfbpU4dKAQ",
  "key30": "4RuZb4qxR1bJU3AByDHUhSVQzDJeEtmuuzyt7n8EEQQjrfixsr4jZpjutQVZZHEGgy3hLwdTfYX1chbkPpzfoQrh",
  "key31": "BJjhaF3Agp3Km3i5MXdziDLTDxfRsGYP9N8yeWJ6NEm5cFbqJHPi5v2zzEtoE6YH21MgzCjC7idusQAffc8sFc1",
  "key32": "2ozzBXi6gCKLatKiKexmkGpnU2xh7qo7kH2XaAZMyewcKgeaPPvQoUPgMnc2en8rf2nnM41DrUXFBn3hr1Z7361q"
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
