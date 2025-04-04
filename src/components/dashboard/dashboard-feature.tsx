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
    "SUbmZa1ccWc7hczGbeA7zDSCdEJmiwzVrXdLMxZWk3q9b6V7dpT4xqA2eiYRcNyc6XtVQUrGw5Dywin4P8yW5UA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZCWiNVxeXcgd2B9WdoQSjzChWgAMKAwMcjnX6X9abLtw7QZq5P8ZewtaacXBT9MrVFjyJ5Yaxt29WNk6YUhqoy7",
  "key1": "56tcamdfpMgZW5kjShaR3LrYFZopGicjD5i6hx7g5D7GvHg4x8348NUTYb5iYyFgKfhzCEioFprtJSSu12HSavCN",
  "key2": "4ikFjxrbdhkzMez7RaMVzkBaxFoDsGNq7SvVjFEuS7zTo9zDGJnFWCvpqSXhPXgx7TGXV1ERDiECgBsCfW8Ws4er",
  "key3": "3EpX4oMoRAhC1kdRsNE5yaEp7tk3uRYgLgpEsdR1hQauYT65WxKvphTeipwqb2jHED166hJnZDzSvNV8G819sNRs",
  "key4": "23ghcAQbAfRWzEAAzTPNbEQ8M9bDmVRKH8mejb5mxw7Bwecj21TaaEyZt6fVWE2NtGb5kjWNhJMq7tfzLZQM7XHN",
  "key5": "2H9UMJzjJNwoXWaxzvYMAKkQc9CinUDBLArG78ty21U6uHG46uLUbTiSVuneSsYjRK2AwLSXDFb2P81H87emeu1Z",
  "key6": "54pCy174ND5Jo4spkvvT64ZbDG5jKWxsS1Qh8wFLxeGvoEnxp47dUpASYvhxrVkjcoX5gbUVhaEXXZDDqE2R6Nm",
  "key7": "54uDUp3ToiogSKUPVHay9wKSegpakZCGWbWefEX1WR7iJeDXwfb31jHZaGqACH3MHjFKot1h1RvfDYhg8yfK6shz",
  "key8": "3w9QMyxMFvM2ZAA1RiMvms3ptzndnMYb86R78ahzQAyXNTBFmHF9Km4hMhQjFCjhUiHmJrwpaABbMxUX7qk8QA3v",
  "key9": "2X3RiBbLmUyavrP68dRPFEUE1uRmnU9fQmwMXGvzJsvW4o7b4LRFggPCpXDahixvTAKMXvHdgQq9F35twBmGTX8P",
  "key10": "4SXNtaryGsogpmgax2ZM9ocgLE7R2ZcZeAgowMUyf6fWEJadQDfvjDLgssMX4AUpTPETpsYNmj1eeB6zcSR3FMxM",
  "key11": "4AejrhDWhaMP9mHg5HXTsjbHii1HFic6c4vJ2qBK9S9BmrqXAmAsArcNZGNZXNYZXLqRmPs5ueM2twE1bEoHKRFJ",
  "key12": "3FgpLYtReY7X3HLDpiuKMfhmzm1nj3R28bePy3o4jzyKrjZMPTAQ6mF6923Dmu1bHQWbKBgFd7JWnxtjLnH17A7T",
  "key13": "4PCPdRwdbzFE2RNWKsdHWBex7Avve4roTakSbfBnPcSsWeyLLbaQKPQTMbutyVXZscRmQBH4wXwGZsUv5PayKQSh",
  "key14": "oBVDyk14VFXupnbW8Sf1WLq66Wpu4U7RGKRxuD4i5K7mtxX8LVc3nRXhJ9V2Tfnidm1LCvabExLw16VC7pE5KCq",
  "key15": "3GmvHsva8L4HKJhHXqjq3T5FhNq1wgk5jFY13oShNqvXpMtxZGES5pbFPHvvGkxQJLrJtKn7YErmYx1qQhtQBCVE",
  "key16": "5mTik7NmtCnKfupewffHXENgjLCPyHxFcjQXPNBrygdxGc6FZ7iADKLmSwTHFcii34pVMYVdL87MRVcwaywFePYW",
  "key17": "28HdBAAAhBXmSHV8vE9zHbcJNzFvoYGyVYwG54uDPSjH5QqMBTKLfMKoeZduBBC5o3SPqk5izvVhuEQ2BXowACvN",
  "key18": "HYGJJy7GWrUeUsLCZL33HFnaUxhssDPcKKefE4qNm5eDwKFZePMamz7mEm1Y8qcXeW4xwEzQmWufG5rRopnZpQh",
  "key19": "58P7bwKW4zDUGs5VHVdLT2oKYEA7xdFQ6RXxM1USVZG3G1715FFivkM5Mj1GGLKx7LY7Hq1QR9US1K7q31GSTGxM",
  "key20": "58bUvggQNsRbAE2t34vfKjmW1n2RGrqfYvwCYXwFbNavJL9aAfkAcQtAg2CwRi1JeCni1McwtnhHpBdtENbTNCCq",
  "key21": "8q26FAiJdbaFZkBixGzKwtTSaQbxhHaN2ysv4tgNprruUNFdUaovxKVv1CueGsiMdTkNfA9p3ibAKKafVsThYPa",
  "key22": "5sxDYPGojLKHKp4tUz7FSGFDEKNd3PQbrL2hLNadXpvKtxPwosJhpWTZWfjngJBkCsg1z2eQjMpv36p9gSQG2wJv",
  "key23": "An4NvzF4VpKofNgGjyCv4KtEAKeC9gwR8SVcukdzfWj9qTmXeyYAUFxy4qJ3HKUebtR7Zgn3x7YUVy97sXycPs8",
  "key24": "2LqDPfuj1WxgizaeCHEMyhoMXKbv4AXeTGfV2eAnAfJ31EqgoWMWgDRjJzy2CZh5sL4NmCPrytE9DmJmYv9Q9mFZ",
  "key25": "3dvkpoc9qm9KwfwFFhLjPUcJH4DY8eV5HALLwhcEXnBnpFQdmLGGpimeDfMjjvkzDeUikA5BX4JatDSYVSZQc7y",
  "key26": "5RpfFX1NBSC8Pmoa74UkwNaNZCueQvpHTdhvaaq5XwXtSnZjymocdC8QjEePttRAxPSdKaJ6BBf4Hk7W1Whd55hv",
  "key27": "2LACh2QbQFC6bosndEkmGDrzYQ842RpgZx6MGUiakeoVt5L8iBrLwaTiAenJ31ahmS4miXFTMuPbY3Dc2GuxHfp7"
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
