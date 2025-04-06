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
    "2ZuVHqocaxBoQzoChSq1QicMdoHRKHDGTtLneKkjAgWsc7pUV2AH1x2gpeCYx21UcYmMYooBSER86W6KTpkxRK7P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65EVAPQF7JEt5oyeXnYz8A542EKguFWC4Q77KtyLgDGP6Fvfpig7LiBa4rB86YCxMTZeu6fRP4QSfTGewGJshihv",
  "key1": "3wLsm6SQbsBaRDRbmhThziyPJPeiPDsrepJEZULCuhfZY1eGPhXGSUortd2PVhSMW121ppPkC1twpWM4zPoiB484",
  "key2": "MCRbjeUrZzzCVeeG51KXhMpTAdCeKe3V6s2Hcof5WQzGXMUmrN1yPktuWCJwFvtFzLEKoyCBDMAJFHcEQYf9Jst",
  "key3": "M84tcjF1qaHLM6CTiLedzpnquDn87nuCKniH8WERKb9vGPtTtA6jv4Bn8mMRdPw5tX89M5TUuypW1n7J3XrrXYN",
  "key4": "2SzQG6J96dUurhGY2N9w5RjuuvixCzvRXtjznKa1Lodd6fGxf3oSFhQHgoorjrkbqkhjYQpU2Zk3MMRADekgkw8y",
  "key5": "5fipRirh8d22BwqqsXb1n39PnBZRRzCAPcsFmyEJu6uFq98Rvb7zedN5DXdUTdgWvi9HiJWhP3m4i5asAe7RAubn",
  "key6": "4iFfm18H8CqB4kj3axGi9hMEvjCAM3xMRzE2m5px8XEKZve41bVDbD34aUpxDWpQAzdei6f6fiuEyU2zv7jMYU7M",
  "key7": "5uL6pExgRR3tcyuicm51PpXSvzFSWMuJfg5xaqYPqzxMS8WzFdy4QzSJHGcZtGoNB4aYQuciFxp1s2b1jjTPcb6d",
  "key8": "LzqTSegb7hcST6AcveFYvEBXMGmP3Vg83PfjgMKr311RXkKA71Wfcq2QPEBcaYbbFS8gkxFzYGtCkmMGFttk3Ce",
  "key9": "3ZhYhwocyWXrN15kU28LezNbwqSDK64EDLnutdovbrA7VcqnxshkxV5GLe9aCrmLCJRfHR2t5jiFFGpMWzspjN9c",
  "key10": "29xF7pn3E9UVeRM31db9sWttDQ3GuSXQTXH3voZGKtJBwtWEcLuAubhw52CGnT4j1t1jwP6azgLGtsW1YVBBzqF5",
  "key11": "2eJNxYdyPBf6mxG6axEMUdaqWGcseUrn5KTJZ6B1S67Rsqy9T2EGTuVEJQpDPc3vf2GeQjMM9JqWMEE31i5Zsk9h",
  "key12": "4NhAJJNpiE6PYFqqAbwqEZf6wfTiLJTT54EUWsVnN9X8xDzUaH6YC3qxmc22QW1fujTMKxECHXsoqJmSuHJrcYca",
  "key13": "2m6fqkbM2moAm78rJtwcEjTekWHkZeM9b2eCTiTcSdBp5MkEkeJXkagVrtbsede5JV81VQQs69o1VsZsY1ZQpgwB",
  "key14": "28Jt22avtPDzydXXL57UCNHpivXoqLHYZStncKXQEAgVoaW6B1WwT8UX4ZL2QF5yJn17h9u1wBaNJmPPrJG8oQ3K",
  "key15": "3GwPcCrZceEwHasAAdX5BMkcimvnxnk5UqJSyMgnSi64Yq9NeWxDKyPb1vPDHDjvZnwdPx7TDgMdjqfWVN6UQHHg",
  "key16": "4KNx7AeU7Fo2VQwaXfss9uUzVDLoi22w3rqFviUhv4hNNzq4HTEndQwGGaeNK51SoWjtn2vopKszALPWy3H5DVcx",
  "key17": "5CsTyfUWxW5JXdBgCA9ixAakD6Y5vmJHr22TLWv4DvYDF9iXF34KJ6ckLg2U1AHjFUdPHAMKmYfT94ubJm53SdU2",
  "key18": "McjrNTKfo4aZMWFn1yGDvk1EGMJiVWpTGUtFnpf26833m9dQe5ZgubTeFHmE7UYC9VqU6rK1ujafViRtsQqowZK",
  "key19": "3AeoBCqKDdzQshiwwrs41y2D7x9uYSobfXygn1p7J7cKxHBvP8zb1tpp49GD1jUMb245mr4uEjWbnW9v1AXDcEZR",
  "key20": "216u9SRPYL4ujfD8skU4bXPyZPt4GPbXAd4siWmYA86CZDtKXfEQGTA5v1woQy6kcy53kgRiArHinDJPLhCcnetP",
  "key21": "3W7f5p1mso2Zuzw1UFcVjTYZB6dwind7yA9btjG6nRPecpAEoCSqntGDrDmyMsqxmgQrpAk3NC85eNkjJmriKq3E",
  "key22": "3EBxHUotHEXKAGzxCX3PbYAFgoGzQm2QJsPdYGNAwBcoi9Gkv2feq7H47cs52sE7DGSwiJ6bZgXhRKJ62MYC5r2A",
  "key23": "5MXnkXofJtks3neScsec21qd21VGzi66KCLXUyDx1THMBY9qZRZrRjPUmesbsL3jDtfrHDM2hi6wPXqkyVQmXyRF",
  "key24": "2F1BBsF9UZbW94112eLRVJGNHz1D4z34R5TZWWKYLgdThjcw4GQoKfr2qZWcmZDWvxT8o2Ka4iQZH7LgVhiUVtta",
  "key25": "3A3wMFssro9JpyEdzFKKWB52ekoAaRHn8M9mVdG75R6DMwotYK7LADHPynkwgaHk94d62nrTbYxAyfZdYBC5h7Ae",
  "key26": "4JPtQyAM4eRYgtjWdWDrN5QQAk9RQMU6gGGPpbNHJbL4L5Tt5tioyhDWeDzkF9nHFEudUDuzczRh9NoKkYhDn4Vp",
  "key27": "6QFm7K2mZKU6eZiGd9o52A6ejRatYq28e7PPzHb6eD9cUC8vx4cMmT77AEBUqPCHPqFLJQ96Y2X8d374eh3smdr"
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
