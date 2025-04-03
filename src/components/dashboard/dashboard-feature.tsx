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
    "VqsNGrvV5z8xNMK7ULpH2nCAAqyQoigxy2WWp6SPAkxGrBddssnBEhCNvUf2CgLfVtFPgEPvV2T1agTySMMzNvg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pa8GEeNfJ7H2B4ktE71hboed6PFVctY4wirSGVvoeXyGQQRkaZwbVzSuwQVKLtssVq8ZKnCGRRtC6xaUVyA4kpp",
  "key1": "2kk7FAWwrTFfGuHETskcJSGT77Hf7SMniqwYPQaWSYXyuxn5dSYH8wdNrZP8P2wHLAyi9MdDsRWLcmoC5m6yT93J",
  "key2": "4bCCUoTgXeQBXFdzRYurDS8Si5XPC5ng3NxfhsuAaEPAgDmFq1CSWPMAFAhe6evtUGaST2HgLxymNkhKYMSJxB4y",
  "key3": "yCwdvxg3yWAzBKDyPJqAxVVm49wsKZuRrvyXLz3vztcbNEpy2RiaREA6FE3Y5rzqengbEWz63V8BwhNL6JW2ARL",
  "key4": "547htAECt4ZZQpJuqqvbMBsqyiKA29tzowxXjuHnfiS9Df2XuVhRYFBv9WsTyApTUfzDKBQtCGdo6FujnjWozT1F",
  "key5": "3LD58ZSUCveR86ukHHwNBJZTwZwkL3HvMDHt8MzipQKUztNgh7g9QtoyZwuCWfg3WWCFee6RBrQ29jzyXvyhiwUs",
  "key6": "4jXVBve2akoBAaoLsRNiDBCuJnBvNr6qF4Dbtg13V3PGjjBZm638poZppjU3gWcsaaqc81GxHbXThX6hH4phXyud",
  "key7": "fyLfCywWRZekyjWRR4gQhhQckXCkMHwia6TS8KiGkN9UUx7QcLf3R9h6cjSDaFdYGFw8ZT9J5WJH6EWfL7Gfkmw",
  "key8": "jb23UoMqMzDZAN6og9boTEEDLoYPht6aB43z6Ha5DyCqmGxofvxGZYn9hCWWq5bm32e8LS3izqoT9zC9VW7YLtu",
  "key9": "3aNC1kuzLpUAXXx4dUzbTK5bXjJ2P8Gv1ScuiTvYJUzj7AHosh55n4BvjcaShc3PLAoY3NRTFgcWYJN1B9MsZgF8",
  "key10": "4EHaWVhAsze8f3yBVc3T7vdMNobc4odxHmFj45QHzTQCCDhs6eDSpQKgHZCVk1NZtrjFW1bypd6pNLgXewZaHzPz",
  "key11": "2w7dA9B2VjuUTAjJXp3aQ8osDjGHCHY2AMzXMZXaFd5RSDGicGX7xNUqKFzMVzbXfXCrSKgmAqPVMnjtV6gBmTdd",
  "key12": "4caBfw2mJJeSNfYGvUkuyRzfPLiu5tMQEfmtCRw4985uLRgVnksdfMvUeG2Vvfwk7t7JBWCb4gJxat9kyCdVAUQ",
  "key13": "2VjXvQBz2aqYG4wTA2VbmntYMPkbpWoWDQREboJZFJ2iYpvSZts8wRStQ97jMTtRHUu79zP38TvhPdexXLZ1nTS1",
  "key14": "43uDUERDq7gTEUHtTLsEpHBiWYTehtpXCB36GKwjgMcQVYaeU5N7uSV1GMuB7XyAKb38Ja2ra4wP2EcVcKD6gyE8",
  "key15": "4BiBZPKCCHu9TbHArPQg9KVodnXSnyEayUCxk9LuEe47aq64AEe9CNYoDRMQABAMiRWoeL2mBkz3acuEUx1zp2he",
  "key16": "5GqdtQ6tF63TJu3NYYRWHpsJcpHw4K2MK3GPVCVdfvJ7o59oBGkpgtDhKQZGxtDfDPpi2f73HDoGSjZWdJMLKafQ",
  "key17": "3RPUk2r1p75UmeoAUpLBBSKF5HmnBsZj7iDXNM2z1EQ569FuDmwhuKiE8JeHM79Zt3TeuzNy7r5Nyhtkwt6FkYfU",
  "key18": "5pz8noWouE4GEw2SvYGPKKXXxwZveu3UNyqyaM7DC78RE8qLgjecCGufNmf9z7rDe1GeYmYUZLk2k6cB8aVQTDmT",
  "key19": "rB2hGJvs2ZmSZxjXJQ646wKeUxYarfwVTcJyq9f4LEA8hQJDkZpskf6DSssmPA4xBPj1W6cwM5g5sv7arzWxBc9",
  "key20": "3zomiin6pb8RYFwfEcapR2EHrxe2rT7dVKCtCYAKh7hwfU1i3BWj3ydsFhV3AvnYJiyjZ6WdZdj49FGdS7hwANQM",
  "key21": "7CsiTJNXs4dNw4w6zFTY1qdmHmwAfWQeC66AbDRFx22PbitrwmGXGGjfRNLxaAH5yqaQzQ1UB7THH7YAowfKgXw",
  "key22": "3sdmuyXL1bB7Y56Nc9pRto3Xmvd1k45E5hvmYGkV8ZWC5kznkxfXTc3nu8nGCd6iAvLbickihC4qwqwEw4agN1bZ",
  "key23": "3N3bwczJCeiJ6xSxmyEjKg5QzMh53Nb2xQed6ggHVw8NVVJF72PSstH3kvb7wBdKDn1f92ktNTY4Pe5Sq9ErfwZh",
  "key24": "32SxCXWXjcTSL42X6VkvzdFHMnwt9onWv3vbpkvhuBUqFYZi1qKMYb6CRTH2UpU4kjRYUnTBxnwyijntJaSzBcFW",
  "key25": "2HNRC8mdR7fPmR3gPRsHnxhNEZeXnDVadXKerdHTrkcMAUK7iP1Nwo27N9uyH3WtpvmLqkyw26JfBcgEHDLcF33M",
  "key26": "GwBwz6k2dCXfmpewDzvw2pF3o3WqtE8PY2cRxHKeXpnoM2FW4hcnpNYFCqDh8bkxU42LQ66tivFz5dkwdyhX8yx",
  "key27": "3QJhXH5N9M4bv9AxVZ8s3DCC14WJHqtaq5BDj2rrivZeUtniNevxYbrL29b8nC6FzGXo5mut9WvEjfp2Yh7uMjXo",
  "key28": "5kbZAvcYpB1FcerpioZQ7Ux7s3DwrmhtMuMhVj5qm2AwB4X2enLpRzNJdLo8EbrkZsWwnuk1LFm34s7j3SWDhiea",
  "key29": "5x1jMZkUHL1GL2HaeQABDRdu4JatiCPb7w5Jus561926UTc9bHJDXaHu7FUdrVHTaZFgZcEGgh4XcUhzEnuYg3Ky",
  "key30": "4nLC8QuD7knCrDt8KdRKTwQoKt5wATP8b41Ld32PqmnA6SmEU2mVz3zVkQn1UDsXj1Qr8LXanGZm5gRiXKUGnBru",
  "key31": "3oUqmZPfEgDoGihbvVUDkaJkNpdVq83UtJUVySvf3VRtCyeVxzymjEqf3e7yyaKDnrSzsaFBeMW8B7uqt8gBoVie",
  "key32": "4QXEzsoBi3vrexzUJ2drdwt2vqin4NwACAmPH59632kafhxFVpQJHxRJM6WxZnxxjnopcBZdG1AQZVB4A4qmMYba",
  "key33": "27GcxuV9PbtF2WiQDWVpnyexLKSSNkCAQhssvKcBTLxsn9LprkULSJ1uVf5Ez7QiykTMNHt8X9P4YxAVnJ9Yn7Gf"
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
