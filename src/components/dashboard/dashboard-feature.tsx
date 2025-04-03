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
    "452RbuPWMaaWqPKDzAGLNAF4KdgRkUEHaWCR22bAGy9PP51w52PQaypaTR6bziErSXE1ykai1MJUEERn2WX2qfuq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AwDn5dynLcs8YyEXyXH3LL6DaohqMV2QNmemaftANedAnUP41RVZtP5mPMKNf9mJC5zVBwB5RhwBAPQCwk57pcx",
  "key1": "5egmuj8wNbU5uv9o9N1iSt88ahCmyyKqk7zfVQYgLNmGMnUK4ki6hA6JM31A6vECJk9gzqyATtXAX5vjxnjS7hBT",
  "key2": "5wQitP45QYNdyx8j3BHpr3MvLDb7zptMVWwcMVm3kUP9r5BNdEDLq1m3gAFrpBcndRRCXVbLxLkP1u6QN1My7nfm",
  "key3": "4KobBcevFdTwZxMuaeYVPpKtfapf9v7kjyHdUCKS5vdRH7mSx5yGkDWxHsu4rQUDfsbSKisyHqqp79utDzUjnhuv",
  "key4": "32FKLyUvLGbk7LSYEv3SRsVs9zgZ8cKdD5Xdj95is2TWg2f29CzHLhAScZ8jUyXEXwwyM1X6tp44zyHtzFQYcbxt",
  "key5": "4TTQpSZFCgFhPiFDuqeAkL9xmcdHLbx8khzU7q9Yb3wN7fHt4c6KPkQyPLFSXn79F3xnvaSfTJVsks86B7HLqjo5",
  "key6": "4Kgj2MUak1hjJ28GBULJbuEznfuS549AQ8kR8diNZiZsNBEveShMd6aASjfM3DbDLMCb3TaYbjUseb1c1fh4Ym2W",
  "key7": "5fVT8UnqK95SD9jJC9X4RsDK2TQeEhRQxNX5rMXZoTS2zMJhysoftzBhzRFHzeKUVzoXW8ejoJz4LeUgA31HWUqF",
  "key8": "5pr7x9ZLjkeT2JjJ9maJwjmTLqKZ4xkg8gvU6RarKXGY7dcubE2sVrWqxJoekMCLz1Xmi1yaeZiqAdnhj2BewBPz",
  "key9": "3kefxCgjoeDunC1Q4XDd9tCzoUBg5YQo3iBEh1dQdngBdFjD1g585z3x1jouv6DoAYRSk2MGCpHQk1WR4KM3zXPK",
  "key10": "4QWXwFugdnQrjTXL6GgNAXPnuixQu3Bhu7nheNHUa4FRYwdS8CMTi8WjUJDDgmwjPuyfZnEVPkekdFQpsSxmQJQo",
  "key11": "3VnreRzn2FJ7xJAnY2PSmVqRcNnezUrFd6ktn7rAfC15YE9bMYjzr2nWsdnwKjAw9qEyffgaCXwehMSwuKpraHy9",
  "key12": "4fa31LpaWNsTfamWo161rUU6ecGe5e1Ui7QfT8yQULeSf6J4JNqfLNd7BAUB3U9jfz2X3DZpgFY6gwsE5fbW7R5g",
  "key13": "jL3WCrG7hxnSrwvp5E6aytJcjqBqerQAtQQs2LTxcXJq2e2x9SHKDpR9E7Bjnj8zKXdk9qviPkxqNQd4zXGK5u3",
  "key14": "FEcv5NsQTKzxoPNpusCWy82dyQsQ5Lhr3ZZ67L8dVaR4c75Fta1LuwTBS1G7ct8pNgXM3Zu4uvoWZNNcdMJNiBE",
  "key15": "4y7jvrXPevr2R7RfYoPPx8mJBxu167EUP3kr5xDfWepUBYjSZ2Cavh3HDAnqGdVQM95G4d7RTnb6rUnMxnLz1ipL",
  "key16": "3LTejZBch8KP3wmRk3o9SEiCAgJJ6vBBgsr4dTpfRmEJjWRnkS6rnkWz9qRSiJjm2KejSMeJiE7oU2kqLkaSM65m",
  "key17": "TXoVVeUf6xyiLLZXXRD1Jt64sZD75ptTtdc5adHyESkQHb6cWZbjyqU4cA3WoY6o2Z8TrvwKgmKt3cBh4joLrNy",
  "key18": "4mgLXXLw9q5JXnSGavqW1tdPERB85LM1rpfGXm31SnV6jfKpAWh8FFAgPfRBEhQJcKrWMs3PYcpJqbJFWQd5Wqee",
  "key19": "2zUPc6SanFsQYhcKxPdHbqHnszXSPuaSfZfN8Su3xD3sLtCkdj16ReyY53Gi3WVrWf6VqfeBvUrzjePKR1PrJwjS",
  "key20": "5fY8qhNhUtmk7iCNGqNhJeNCZnzcuoLtfZsdkCoL1DqPeu9Ac1Rt1Y586hmkXkMZNxYidaowdocnVmPtw8y1xChh",
  "key21": "4PoTHwd3MSCRcQBtq5wfLcfiibzneH88mSEWHs19d1SrYZ9bJb5TAAUhfbU52BiVjbQivM7fukwJ5SR8ejHV6iYn",
  "key22": "JNnAJGbUbETjgrN1Yntn1o7GdKa7UbPeCYmCCMXQEVcF6yapoeVRTBRxaYDYcE2qfaGJSDhjqjQqg2z8AKhPkeS",
  "key23": "2iHkgYTTDC8uqEybn1zchxvVhLVYDVXsCiMhBq7JFvwVtboCmGF5CfCudhSn41fWBWF2jGmdbGdReLjgTKrZzni7",
  "key24": "5bY8jYh7AYSjrmw3MU8v4ixNUx3gqvejzMfefXjGBtFfgAkF3dhgBTudaakNjW3tHeyA7kLZVUfJHhWSgpwiNoX3",
  "key25": "23mAar7TPoAWtEbiXnEk5pbbXi4BmByZJTTPK22o91ZnMma9BuJ5Gkvm1cgKiRJAx4Hn1xhcVQKsE4XPjZBrcAJo",
  "key26": "4NCtSgDUE5a5q9tAwthgan8n2wGdy3G7VsegyixhwPjPfLWouXHucGX5KEmQ3r82Wz6ErXrzFB6hfJFVAnxn96xR",
  "key27": "56Egm9hcg7TWjEZw7cBC5iwLSsQhrgfpnGzJCbru597VCarJDmT3cg6Pecxh9WWgBevKkogujZ895s6VvwB6MDbS",
  "key28": "4MVPDKarLtKYCyHpYSdizo8Hz1jPUkvNTcc5VTaJkFUhKeYiaWCsvxCN5gWPsVGEzYCdGU9eBJnzT2pjtkYdUyfJ",
  "key29": "4GNasiPKKpWkAiLdyoejfMpgPHopDtD5UYUorVDFa1zjdUGZFkfWf16WMP5wTV4RJN77RrKZ5bkrkCuWwaoqLfby",
  "key30": "hSmcQVeJz1THkireiSxZNH5eyH9D2rk9USqDHk9ZMbLyfx9znJCNvpKELBtb5aX5iE6NV4xnL6bLiaoFHM7EFof",
  "key31": "JVewXjoQfatL2K4z5ji21q3aavAWyz8uVS1js4NTvwMAfTx6ys4gG8p354SPSX2hh2HghJzyBpmXamheNVyeZpM",
  "key32": "4TuM6eKRXFS75KcE4hXvnCvJsebTv11bqtskPYPkkiw5sQVghnbcfLvrXt6293Vqiqr2w84yuUDd8V579722AzHw",
  "key33": "ycuduqtiHQYvCEJ1FbsocYAZqRUV96ovSPCtQrFNTMzyNJ459wDnHgV2p93qCpYt2MA8rP7uhexZMwLHuCrfnfz",
  "key34": "2seTKeRDhMJbfPiowp5wa432q6atEAyJCGsGcX6oHaw3MF9tNKnT3rfPaR1oLMSj7DerogHZXvUtWJt8b1KXY8mM"
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
