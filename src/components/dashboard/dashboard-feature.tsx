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
    "3jjMzQyLx9ETjYMrfNaJxYnzeNh5ACPUspia7ZVtE6T8vQbgYUw7toeaMkha7ygQBeLJS1sZASLN9HjhgHkdvnMR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27URGBu5xttdDYQnefW9BP2dr93beDJ1suSxc7nMm1dGrag3XgURb9UdvQTYKoe2UeBZhs3hX3pZzmf2eeUd6vay",
  "key1": "2FKSmYaNBi9WZziQPvbUzH8A7BADvfxv4M2hDijtz28La2YnvASht83nzvcN6Yfo13bDvZTorXEp62RNDW97gotZ",
  "key2": "4d8AawZcxCU5ThKNPzcWNPXJpNQXeryTmaqjdzjsUi8PV2HbrynakXkyMruSKrRxEQS352wnnjnsjLz4U65mZ7Kr",
  "key3": "Hz8CRXe5146uHsH5NqpsbMgeXdXg53YDfT9VWmtYSAGSBganZAKpQZysDbdFhZ8t1EyxBLjLTyuduSewRUbiqpj",
  "key4": "2Y5LwCCnBk3fYXwVysjCpx7Df2RQaSpMzR2ZRZNs1RJnKiKgNGHbgFfzFxZ7uxeu6mTgeQJQiowSivgrGYmob7Ta",
  "key5": "2yHXeq7xhsTTKsNogvBFPpm9d7RdJNmbuPze3DEU3bsRJWqGtSjE33f838hfy6XBJX6dfuw6aFesjmY5DHiL8Yew",
  "key6": "5Q65GHHuTsR6hqqXs8ktp7V4EDsJX2YXazQ3Mnwa6kQube8Cs5gXj6ah5dYQswBK8hooNLBZBYyTy4VP6xiJV117",
  "key7": "4FEg2o3QHBvu8q9avXAUATaBbf2sfycqRhf9vhv5VrfkptXB2PHewppppxiw1SRF6ZaWDecJq1vjs12yBk7TxGyG",
  "key8": "66Kcsp2ZCZXUdfsW3tDnuK5hQFyud7pGt1gybpDs8c3gDn1oyQvVfwERhfRHUUh3qKE6n5eRPNdRMFaLKStYyd6k",
  "key9": "2vcqCg1s3meN13PnmTNdyWhkisptyXq1EW3CcJoTRjkrwfTpLhwqSST79qVTCAETJfYW7NoPRysirK1bLaodWrtn",
  "key10": "5M5NnQ3sTmyRepxTh9Bj3x1br6JRXYQ9vojRCXtsREWeRNekSVGujzFgLbxkF696GVxYRKsUjygjKByhqKRRwNcZ",
  "key11": "3brb8NCDX3KFY5ibpyzJTfUKCN2uTdB31SmgCXLUoTWwNcsfjqX6JCHkmJcZaq1qNrEMPnShGE7LbGQFgpYgrtHs",
  "key12": "64TTVHx1jrzbzQLdDVqJs3zf5g2kCi7YRZCeJznMiN1afxw9U9aWNZr1oXJyPVE3GizvYDeRrZyymL7FgLxsjwE4",
  "key13": "2VcDqGteFKDuAECKr8pf9YT1L6dzdypP9DjvZ1Qocvekg9vDAyEnzGE6aKY86druUwNfZ7y9WT9dGtK8mh2yuNrS",
  "key14": "4oLZdadtGTXGpEWjr22r2GFrbRy69FRLAU3D4QbnwMmp1aynNhwdTubr1rqm4XHMu52DJfZ38Bz7DQNXLV5V2R7t",
  "key15": "4fgvir7Np8fKBka1pPJYrnEb6JG5z6tqGNWQgJ5JfEqjdc7f7d223p4feLN3XiwdTzpwGGp1Z1SHW1EmuTvLYYco",
  "key16": "3ZiNtHwsb9SZWHYNsjcSgv84XUgaZfEd7YVnowCDGRUzutnsFwDFu2Pt2pDt9DL3RbXXcLXz2DqsXz6XgTLGmWBd",
  "key17": "WJfPLto7q3XfeCfTeqAsE2cNQGH4FbrHkvGZYzfU9dkcQJs8yHuz9tDRyqciWrdt4rrKiGbCbHHADBkHBy25VmD",
  "key18": "5B7bgFypZVUN41SYuj78DN9U8nwbnPdJVEQBf9yvj63k7kpTUz3FkqXSmWEMuzLQpgo1XiJawptqE1rHs9JTCYY2",
  "key19": "5xtqhwRt7VjcdMaazkUA4egtYAvndRp8edwRwypx2aHoSrCUpK42rbPyyMEVMQFdSby1z8VEXQ3PwQV5KidFCT3N",
  "key20": "5tjBt22DfwrbqkQ77XehNacVVtjMDWEyZTYevEMjYPP69Bh24iwHVN9qgixynotYBfyNgYSvxacLwzv6MHwN9u4M",
  "key21": "5AzunzBYrszXJWrbFR12L6LWVZ9PzxMbJNUeand6sr2PQCXd1PSuDXJRYAB4G6ZjA9oBr1vaxEcMrjqKQArtuRFz",
  "key22": "26EALc9RbwEXP5pCiaqkB9Pu5FL28aYpyQF9So6uZxJPQVbsJVhko5p4HBtGmHWSMagepkWVoXxxfBqGjjdxau6W",
  "key23": "3F8bJtajYTckueJa85H52k348dRUhPCV5m61iDEGwh69E58yg6ED4asB6T2fVSojY8VgAQGcE8uVMMS3aKDR7Fxm",
  "key24": "3SpjhSbpwxrBEgma8e782zAmAKXeoCiYAsKF2rwPHb3CYavFEzUJysJW1mAyG25q2Cct2XUzxhWxYxqwRMRSE8qV",
  "key25": "56fqZYJvWxLjaStdyPAHvx6pavQW1PSQpv5iMipxgHNTPL2saCRGvYK9PcZkVPxXqaz9cSAzY2mdoM9ReLreJADs",
  "key26": "5TcuakHb8VdsGWdAr19niLnZpdXhWtGkVepNk6J8ytQp1KiuhTuyvAB1dFXT4onosbgAtQ7NL81oV8jv4tekamnp",
  "key27": "MdNxXPDLShwQxm3X3SyqzYVucet5t63d9Sy8xDudfANKfFgBJAbu6FZJ7o5gjhbm7Tf4GuFQf7ZQkFQsgo1ydhD",
  "key28": "65tHwu29fUTNcyGXFazBHTftixP6AUPbbGp5XgG3ZEN3YkgrAvwe2J21hUbE1JnGy3qaPXAA1z2UjNW5Aijr8qDK",
  "key29": "2jXYYSNVEtPrkWKyM554ywGDKj4XNz3BwPRZ1D1WCEFLiuaQyFtfgWY2y6UDTDEuW96gAkPhwNtXT4Zpwkmhmz3r",
  "key30": "b3GYz2S7WgPU6JrQSCK534dXsF1Qh8y17pXtU1D5Zhuu4Vt8Jm7MbtSJEvRaeNdoLBZhggQ8qroKqT8BneKZawc",
  "key31": "5CK9vqzA6HSTsmCfNp3n9nbvjXRELMekERBK56Rp4DPteUJwUcTpZ4VQTTsJj5r9tKT1hSvNrJG5E8nPTXeKS6SW",
  "key32": "2yRchU3b6X1Sk5LbpXZsXPiqLpzFt9mQDhTRADN1hCD8cDvmWo4ScEimvyBjydz3QqJyc1EF3UZ5e5kwMsSCWitu",
  "key33": "3DC5UevUS6SSaR11E5BnZXpwU1czefeGCYKh7Ao7MCPZN94DWd38rSKdWY175xjCYtuen4qp6kWo33iEgixLH9KP",
  "key34": "5jThpj7mrYnhzvnXXrTteC4wEcmNwGeok8W2iVm5PGqMyy56QK1q3LpFXC3yky8zSiPYgMXxddLhPeeVHxyA4hUi"
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
