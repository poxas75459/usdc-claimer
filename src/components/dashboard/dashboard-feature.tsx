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
    "2w5z6gP45XPro9rBUpEgz1EX92dUgdczyWqcYAiSTYFpmXbsZxuhfuE3cQMGBm6nfaetgfMC9cVXWzpuunAhpgDB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2v3xK55nGSjBMBeSfP1esuFkzSH1Cx64gPLuG2skafhsRzs2Ebxcz5tE41evqyTRgrnVHLgFZ2Q6X7adR9yyUGHL",
  "key1": "3HBGmbjdi9aTnaBxpLbnKWMSPTpfZZpaXi7QHU7sdhk4DjNoz2724noJjZcbBoXFvNXAVXPczH4d3G6NmyunEeQe",
  "key2": "3PRd5ssPFTQSmaEuLj9wJe9oWVrZPZeYdyvG4wR3HTeahRkEnMQ4wGyAVXFu7oaetwyD3NNkmhtseEqu4qWZAexN",
  "key3": "51C8vcgFZ8FJwNSmP7TGhrbf455ULK6QthG3x7HeY2KRJVqipLyVgiicYyb6mxgSRyBxVzw6UDjbV3fYGhrhBUGE",
  "key4": "2SvrgoCKXM7sytz6ykzfkvzx3PDjK2bH6C4depEJHprfVxG6tFcR8D9w9v72ushVGbW1gGyZKL3EmhQe9LNfAdNc",
  "key5": "2xuHUwNa1fE68mcXRDM49SRynTVES3Zq1kQZysc9YDKKfHoJaiqGFzTdt3QxxwaeSKEsrHzRFqLz78rwCaaiYkTd",
  "key6": "C7tc3vtpbMJr4JVvvvmUJmGAsrGxAaCcTTSuQRDBh9p7FszV35pUbGvLbqS8cqrPuLmVGf9kUYXP3Y8j2Kj3fpX",
  "key7": "3RxxMAUhpV8NWt8Ey4jRzsBFkNRNNDNYDKhtqH8b35MxLWXNF8WnvjiNBxvBKYXwWszmLmMXawVKoccf25qQdrBE",
  "key8": "itKKdGKAaMW7F4H6xDbk4GxdUNieyfoj5jRPtUEESFtquDmCJwkxfWnt49MU736cNi417oxT2PE9peQVHfCzzfE",
  "key9": "2tuHWFFXbd78qwY3LVw5hjCjmbGihnAZyc5o5Vfz79Arq9DetL3LCEdzF6Nx7PW323LktEK7qyArCif4YsCGrV28",
  "key10": "2MsxU4P5FP2sRrcq24PGkYgybDRA4nDxQzob2zutPoZgysysDhW7qRbWan4Bf6X86wvbBzZAWQ6sAEVp2jwuVdmw",
  "key11": "36jQBMpEAZBPC1CrA6WYkQB7MJmbeow6JjxZQGAAnW7iZwgS2NzV8e7Cc5HpcQgwFEPEPfuuwvwtYE19ms2E5c1k",
  "key12": "2J9Kpjk4RUauPzeQYzmfsRdEMwSRJ3uDU3w1jRBrWS1d9V9DhMbrnPdDEw8ge5wfrsR4WkBdESo65f4HVXamsrF6",
  "key13": "67MKn4cCME1mWAjdvaBGs93fP2hkmMGycpR3mGthL3f8xJwNMXwQGjqb7Ymfz4ri7B6L8BVKPgbHDA18bxfZv6ad",
  "key14": "w1fZSriX1ATnTQAEcnxR9QK86f5gvKtffW8vFojJcUTHVivak1XTSVs2Zy4Phrq156pCt8Ld3qEPj4xHPTsc5Bf",
  "key15": "2a2sJtUVbdhqy7UaovQfbsYcgVsNcNyrvNEzeu4yTS61tPzXRczPSNbZchEBrbj2mbKcfp1MHwe3ThTzZra1StRG",
  "key16": "3B3DobN91KpJtraGc7vHv3o7DBd2JZNpgkHEJA8VE4PjcqZm7xf1WWyTDcX2QhVfUu546teVmmQR8xLmrYCVXyWf",
  "key17": "MbBLxf9ecLdFTXVjaVog75CzBt1PoLxjJDede5nMASxkkChc3hJJXwksD39PSJxjjK5BR83vxsUCPRbX493wbuG",
  "key18": "rYtqkvfzwbRK2bWWuYoxeYgHUBXfL65pMuVDHUovZgYf8J5AZ35xmzDbutMJinj96G56SPiEFhsgRmyLAn6GMUd",
  "key19": "4hjJxoMJr136narT3ctyg2yP1MDQYSsQ87jjNTrzHSERpUuwaZMBP3Y9d1gCLXAtxwg8BJYMZrLFSA7R5c1TcFN4",
  "key20": "GvbnShErwcMMM6pJTq2cceHa6ZvvoRquNN4pcYMo26Mif6cm3p2i1xLJVy6FjvQRchNQF9iKmcyuRY3o9xebNC4",
  "key21": "4C9sJSs4PV7WQyMECUCZ9CMuBZoznhs5D9Rwhrdu6KZHgkVZXmmKWfuzZTUx1qH8GqcWCZkwSLNTUBgyFncScueB",
  "key22": "hqEskZSLNVMVNPD5VKEFuTMnoS69eomdvhsNaTVaN4i9gmdDGKmbzbT4dtwdFC7hdVyuFADxp8WUxQb9QJTLU1W",
  "key23": "5bpkYJFowBZXnfP1g85MT673Uj6JY965KSJZVXnJeosLb1ZVFbBRBZU3r9Vd4kqQKcEBHgwp8bqd4VEjnuozgYdx",
  "key24": "5MyKTAWHoCRzFNaWLaGeWMjbNL7wJdWrPG678F6LkrZfFvQNy2GTFTv6VjfDpC3GHLfc1XUN7sEEiuvKcMYtyWT",
  "key25": "4h9GDnqAfSzUbvNZvzDEG8ki1TH7AwMZL1KwucPoFjmfoyhXXGvoLPFdF86NGeLFSsgaHUYZBmgYf5SjAQwRvEsH",
  "key26": "TjNZm7AMXG4eJsNGEXdNp9dqt7pur2nA5iKyHRYCtveDvBGKfafk6wxb2ttvU3DxXdndPL23dGaCmrLA4z5ABDy",
  "key27": "Uf8wGBqq5cNHjFtvbF2u9doo1Qi8hrjb9yCXBrt9p3mLVcb4TvfuyShcLXqvgrku6ThAvYgrV85EZ5duiXWf5tP",
  "key28": "7JjQWFz1NXqPSvrwKD87UbexDdX6TUBZkZfeBZGiTF1ZCZNC5kGaoPXRyzCxqZ614aDyxQxWmX5oU44dxh6NBbM",
  "key29": "436Y2L9pvSysvLTcWV62eKhofcJC312nZngntAgbt3TkJhoR9dXZ8bpGsn3mNZ31MmUUCWkMmZkr7iMs1nenKY5Z",
  "key30": "59Yxuygb4XkBjwcf2PRgk4kXjxLRpDrt7KtXNkAe7NPPJoknSsVHdFS678dM7ushgUoB2wgYN6ud4wQ7a1RULMNN",
  "key31": "wXXrv9ybjDZtf9M43MXckK8zTkAeJYV3UNwR3F5zjwtLL2EY5NwCdWf2PYxyXVUZrGhwiQxMGppRno9HPF4nz6N",
  "key32": "3b6sDhztpD9H8cpAbtAFWEWBsnGa92tysc8p7aKYoTx9DpSDGU1FfU1nVCEGJ1CL6PG2fpV116mcMe2ib1v6NeBs",
  "key33": "34HGaseN572wNASMiTb8QC9ejMoong8nv7ZK3AJdcRLfZudsvgudzGCJmwnQok1m15Ei2cvQL412W6GQnMyRRCr2"
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
