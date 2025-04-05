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
    "2snACFBsGrergPrmrZx2MCSPoMDh6P53sUAn5TZt4HE57ZjdG4TCujLaDehdh2UYGJdFwerKpXBNeGeNFWEdUsJp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DnARukrsiFqDc6jzehCTF3AZpFSKVZgZueAs61gVELxCgAT65hxGAsaQW9XKQUAqosWuKjYwTRYZgSkq2CXikJX",
  "key1": "5WeyL56NYmPTj9DASTBv3mxe42sBjThBvvNnfyBJmhujW3ZoPnLmdj32cY7M6XMbnW3ei6jifC5YtkUtSJTF3Xtq",
  "key2": "5H8Fa8WCxHXtazt1p5LCcv72mejv6XRUCfpDvT1cB9tUv4ZGdc4JLQFy6HYpW3zvKvDCWbhafZsUzsydtqo2juU1",
  "key3": "3S7cZKtbYTDLzfEhXRjxBo3YTYnjgqtHXsiNmiEFC1ZpmD88w7yYagAbTwvTNXi5woQnQCQx2XSQpEfmwDE6rfZu",
  "key4": "9yY6vSPfwLB1EPCxsLuothUttXki4mX6aiUp4vkzEEuJJRaqfn3qp4aW1f5VVFkcCsMotwowr4MFZV38rXqwzLo",
  "key5": "2X7z3tsfY1guQLektrVDT5vLxvMAdZ6d6XrkGQfQXmbhJG7TtVZeVHBAV4BvKBPkSqDmVGXEB9EzSkt7CeQTYhEh",
  "key6": "5au931Zvs7etUfREigd9aAv2AGfn2485dWEErsUmX79hHzCBipTGaxRqAyWh7VaHrMMMyHrXXkJKCbsxSxaAbnJi",
  "key7": "428qyQytRSZPiCD4zhffqq34STDmZZkKsM9voyov2kiDC6rNjf3hPjg8dUh9mQKTrmp7UBnXPhs8dKxM88Zgkbzg",
  "key8": "FHiJ4W2xKiFeLUgg8kXYZCx13j3xoZ9KPR3jSWi26JUN8DEHo828DhkqEMZXF68nhCTaYeHekzLtth7d1D4NXEU",
  "key9": "LGK9bG3Nbkvcx8zhqWrhiyASMS4KquYdvGwAmQykVVo52aSFbgLanVZQ1GeWkD3YjNep4E5kbWJN42JJrSaj4xd",
  "key10": "5dEFqcBzRP7dk4VZXL2KjV8EBhJe8TCeCnJr6QZYbVUdZzLVdo8uwG3M1KXMsoYM6up7TQYYTonSBUDiEr8ddTbZ",
  "key11": "2ns3VWvfwYLmpNFmPCdVaF4hUf6y5x4R5FFfoYR62zvi1iubWrXFj3Mqj6WhA2MTCQScc4JVB3TdD5DKz2JjT8aH",
  "key12": "bJsVu1LHHA4bGCdmJWv6QxxiN8dBbDXx1gt6SP7ExPB3v8BWFLN3SoMpHvJ4QsYtUZ1JXk7roDeQd5d6yh41TTb",
  "key13": "2viXH2qLu2cFS2G7iZaABokoKdJsrbLuEqsb1dnhKe57pbt97KGkTJR5vMtAT8QpfRg2T6v4L1b7MdMSEnYsA1p3",
  "key14": "WmGAFfj8KeRxmGNjL9FbFcviNaAuxrPLJoE4FKBcVWPXnH4Gp3YdkXqd4hFMhjJVBhmzcNXEc7oairLBBxhp7SQ",
  "key15": "2hAJB3NFKqfMGZF2TqjUpXvu6ciq3gSHhrNt8r8hhDjha8ActH2e56iM6mHwMidmBsUM9xRTGrNnUBKdGz7dnpMp",
  "key16": "3MzNraryTJnNAnrpBGGiE7xDgTpMNEL3ttY6iQQfVbhqDgq9gcLUDXEX6UysjKTGb2SzAbtAtJUUzsjWVApeXrqN",
  "key17": "3q6PuCExYMUMPxTdkWNcAuVBy4fxpCANwfBbVshC8gZdWi4jL2yiWJvi2LwLaU5wTVoZc6BFULsWErNNkEC7AUev",
  "key18": "4nGL8tFjiBdHUW6743bVbyC6Y9b9X3fZFFxcDp3m73CdZhzW3MKbbSbKoP1LAXm4NSmsmdr6fzD8DiDq6V9zGnBz",
  "key19": "4VAz6PS6rHFQ7HEiSEKQSwyrDHTi9kZd4Xsh8nuLgz2hsSMsa4syUWY7SvDox6ZTSDQWA9wnsVMTM7AywtrRorVL",
  "key20": "61n9mEUbkcEC1G3kHwwdoJSQj7fYkJ68oq2js2yzB5o8wnyjBoYiZCrhKzs2i61VJf6vUGR8CHSBHRkv6rbkUuEg",
  "key21": "4PSWQ4tzricLpFwrvSdPJ1WEH3PU7GkJ7ndsmbj1qUAK65DxGNBH7n2VSvRm9Tawn21rSRNaMhJ1Qs1nrER4cxYD",
  "key22": "4rSVAbRurEv1WHufcysD5YVrTvKrwUSLuScn4d9MZnCoZZ4bYvZUkCAh1s3xBgSWM24wRoVFLkU7tpFQ2Guwxh5Y",
  "key23": "5qZLUcH8y6z2sb4JDUCH3MkES8Bv5WPRwHNTWJb9Vk5RtohzyGRk6tGWYTjftGH56tdDsUTvkvGXN351tJZjkWv7",
  "key24": "32hGtiwe5JH7dxPZth8vmtKexHm9DcnFmNqLMtKY8HFJgqKfqwyzHY1oR3qHcueWLJodY1edwXFm8ucRFP8QNWmq",
  "key25": "3VaM9CZLNhN1jkMVK1EzJr5HU44v6ahCNM8oz8HBQ5TRDuNKU2eRejRwYQa91NcaXXNzK1cdvSqxuV89Qd3ZWzzV",
  "key26": "663aEr2S7bUc6TbUwshL78NMB4dWsyuNdFshTNyYBjrJMpkXRnr1kYtU9JVXQ6QRJzWNJK5mQVAMDTZakkyZCFEU",
  "key27": "2tuTwMne1RK4VCxbYi3ZP4vNczfZPhNEievgZocgre3KsA1uRnnsGC1dUpKc5pu3qMQm6okQxNSVv9w8fC9phgzR",
  "key28": "2cu1A8csVBHGiULx46uNGe9R1QqaJEbNxqvLzvBfzHikB34tkSHL3hVGhyLb4piLgQmg9JZ1mCFSeRq122YxtRvo",
  "key29": "4z2i4JDASmWP1CMBV41vHmXfd5STagC6mg2Yq8v9HYg22qPyxViBUEWq8Wj3tbMVug88ofN7XcSasZoweopAHe41",
  "key30": "2zULKcwrW2GzeM25rj4w6xMAbbNLokqCZPhDAPbRWYAKA9WaGQMnR3RADu4or2q2644tcroUSe8Vex9TdnYBmaMR",
  "key31": "4ogLXo8FtohRvqsv3fg3ZmCr9zXPLUQEFrj62pL1iqYjo6Rt1tSmtHQpuMYq4YqggjqKR59oNoeXM3GbS6NDxoRd",
  "key32": "2bWrFD3KAMEaHuAUQWRLXppVbgw7XJsjiRQTACmnzVU3waGDvjMB42CJW88ay3odRCfqN3QNnoyzWUcczcPfMnzL",
  "key33": "5n3QnFxcDSHiLJpFHTJvCQBPBzM7onrWBNBxMpnV8sksv3wbyWvGPQh952EQMDkkwRigDCcHn6V82qLfZasahhtc",
  "key34": "34JCuisrHhtZ9H4nacRvHm2wyDnMehQNm4iSVFjbrMvFqcuvZYoi6mdCnMNFiPtKAeDRb8CPcrXSn1BE4zKrXgUa",
  "key35": "3rFix1Hc2vPhLnZwcdRwYJce2zhdaWud6x4iQHAbTVn6YTbPQftwF8Du7EdVBop8Z7N2hVRPpjqrDR3kBzHYXde9",
  "key36": "4TQPdfWh2UYwVcuMYF4JY4XcT7NdBaWPag9W89d3VZeg1MYm873eH8tFCZKnZRQbVeLi8aoxZ5ogL5jxtuL9ywYC",
  "key37": "4buG5Gfw8NpsaQ4DQfFEHB2mkdXrLEhdd8qxF8EZ4b2MRucPiUiNuRmJqF7D71Sfm6Tmib8RaJ34LcJXaSe4HhWn",
  "key38": "5F9AeqwB6DDyDkfJ8HyXAM1GK5hhjfQUBsyDt2bkmFPWFeAxHCbMmbNmmSJt1MHkpsVbsqGukF4XHKxkFu8ufy9c",
  "key39": "2vCF7f9JJZdn79hd2UjD52h2aJCRH94x9GqPQ4Q5M5jZsg7aBb2xMCGKdTE5ZgaD8Dm58aMispbkm29k4WHoYZTM",
  "key40": "3gEa26V4tEWrUE8TNvs6rZA63Gc8ScJpvMMuSh2A3BNNfxR4LRcnJPmP6tLJn1SicJr44KYFJxs7aND8T9geYPpy",
  "key41": "2taffr5B9mPJ84BZPbxk6qEjUAQqsiJ5L74nPoMCkmHwf9xQG1qHSGNMMHu6YNDi2To3qeynFL6WaJiaSzK6dHkn",
  "key42": "1n31hU77NntZhBqqYAoy9YzoNjrm42kyLUTb5HVQ1rEFP9Xzob9mxaKttHbCf8d7ztrfXrgybCL7iqDZLEqXt53"
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
