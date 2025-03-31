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
    "53LduEZJbNidJAQbAwec6CsVprBL56VqQFnUmmJD2tfhLKrF8ywcsuav26K4nEQ8GnEBszrXye7A2iH8rJGDSSaQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wbvWVNLHezuSmD1t3ZkXVMErq442P2S8JL8UAMKPhGqeAUdcQFmq1A64juoUn6Myp5MGV2eWnogPsuDVYhgYx1P",
  "key1": "5HAgeaVy1TguBBCR3sdnfL6EogwFQELomRQ86o7ETFDPiL3LcbN1FqGYLhgBJsXr6iqHonZsDLBD6EDmfPhPKTo8",
  "key2": "214LsH5iYv9dSEKFvGqTjMykwyDgdqe4Sho9itrMnd1ZQ9AVNKV79YysDcxkLzcLXp6FjGFGMc1WQZhmo9EqfU1o",
  "key3": "4Ad4ZKkhgYf1o5LXRr4Pb2MoLZjDVczR44DTgPAxPRrtaYYA5LuB9KPFKuvxj6tqAp5Jqzgag4sQoTCyuZ7A83yg",
  "key4": "2BgksrzSZPiEaTZiVwiiYDxhCpRUZZd8kCz4ut1fH1u2GMQiP2tn2132v83FkaTiyDPrtAhEiYc9A3LcxQz4yVJK",
  "key5": "3YVjCG1go73vASh6feARHTp5Azh68QaK4zmKyhFJtJDgoCHQmSm8Wec5GcCz4WRcxCtUU8omiVR1axaARB8GWkNc",
  "key6": "3yh9qkKrwEVKSWSNVvX9onf6vZ8LfN6ZWcYbpLrNmFtApHRYqxG1CjSLqbyv9GKnWeLHm7t58tyQHvD9Ycym6XzV",
  "key7": "2HwRG4mbovX5839AfQ2cfPAeaboT64K36gsjdVGJQD6h1iQCAAXZM8RbA8Crip95HzBDeDtNmGyk3T1D3LNg5RGE",
  "key8": "5vqL3X5TGWV4niXxL5HRfA5G3Wm12EZPecrYgwDQsPDzGzo3qwC7QwK4UmA6YxDGEQ2is9b9FmvN1BDUA54wY2R9",
  "key9": "ciX7oStPcTANpY9TDyiDwB8HT4JzU5YgFZBZK956jhcNcLFzX6DZaUoP4TRbtmJeyKqEHV2yjyUPSv9D6dfVKng",
  "key10": "GE2upX3nC69ciUmLoPeTSQXigSRMRiNAore4jrPPbNU2YJSBYgcpmAVinwjxdbcuexdAFbc7HyJxRtKsRyXiQ3w",
  "key11": "3JZV17yCRpJzGz8EnQaTMA6ozg31UuNU36dZRbkA88NeKMfEBFvqGeW4bx5JzduiDnfGwv6kJXQzEpHbwRVmcViD",
  "key12": "4iwyec4TTj1BrVcsEbxfBk8JzbXhPj7EEZAaYidXjaqP3RkgNhFrLkCKLjjvwRtoZCN48zqErHknGkhegakpRgiG",
  "key13": "58c4opMdstssp6bDSTomV5ZqrySoZHPT81i4DBC8dAiy15HNT2MPgcGxMC3PFUVvf8QU3zfjxSM8nmCajzCu6Shk",
  "key14": "4ANXqzUCSwbqHGaMJ9dicf1iqfwnRpADdCTjK5Q2fawHQXx7oEH3HUknzhtkj99MAJoEHjUfYhcMhBY2PBiMhXct",
  "key15": "Y8sGRFVw4cAywEsZVTbrnFgifJh12N5K6MJq1eTEXvqZ3Et4XDwhprSS8v9kii3sGR3N5ntcxqXthak7bTSzYzb",
  "key16": "2sBB5jRx7QUqzN2jVP9ENwDK3T6xQsr4WfFwTq7tKLe5TXjDiiv9oxJLUib8eSLGebeyjfaBWpU43NouTUE5A3Yd",
  "key17": "3DgoMq87cNt7gkJJYBXGVJTr7GoSJr13cGAAEG3skfXunS2egZkfdkEZsCZwMvZcxRxVAj4dZvD9rohvDA3etFKD",
  "key18": "2zXPqQ6AQVUXKTUBcE1hAbMastkHsp1bsSF5e2oZ78GNTf1ex19UVcYsDKAHCPXwweYYAe4578o5MmN1YNkqhpPD",
  "key19": "3mpB4A9LxRYWBLpf9VrPLB2cQnSztw6zETbdY393N9hhp2CGip8sBzQFLP6R5J8Jy9qNCqDfh5bad5cFNpeXE3YK",
  "key20": "XgwpSPJP4gXE7ca4KVuj4DL2erQ13DLVkL1bZxif8XbbyJAXZX5zDgB2qpZBH194wC5LVY6dPfN5ycUMAkCJ6nG",
  "key21": "2CLdVoj7S5XB6vmeHbgfAK6zrXxppx2NUMLJaZabNhMRowPnd4GLBF2pG47jVrtAKPEBxGR8ntVj2Es5d7XcKEbJ",
  "key22": "2VmFRkmbyBJgjbNmfHRRMdyg31oFAggAFCZS7gLqUPewBrYtGerrvXQ2haWRSMjXvvUW1LrRDckMwEcX1c3RKwcR",
  "key23": "4m4CVw9rAKMpfa8SgyN8hj8yPpPdk3MyfRkLZ8VcUZYR8J8P38mtDq6pHwSmcGeqmkpT9jT78xEdBR2vX6SfZ9Lt",
  "key24": "mpXJ3biQGYnXxqYoohtjmouvkhNcP5TBciKC1r7tJGgdTjKeRgxx6LNehWa9VKZAePjUVHvnWT6ZrzbEKkU6Kyj",
  "key25": "3WzVcbgqBGzHUEt7U9zxrg5H4N1ZRyCnYHdPj4S4ANFAAVC4GTbw4TAbgFg6hmLrLpBkEsAbvkCgqGLEy9HpUV5k",
  "key26": "Z5oXero1hhsZXEVRj1YHczYy4XaAQxfhDM4zgTkVhEQDv1W8SUGyvhQADttXT7zzjQkjPzxuex2mKEPpdxLECSA",
  "key27": "4zaqb6Rro3ZjQCmUoSnr7mJw5PdcQidG8mX7nuVhxLnFaz4Qx4XUWuA2GXnXnPoFkreFNgspvVV9JCnXwjdNhHTD",
  "key28": "45yzYLebbVaH4tQe2WCiZNyRmc2U8Lw1jsWbYsbLjYG98mZhHQJcyUqWWFsTYD6Pg3BprpAb8cwv4kqJGd6QtTHj",
  "key29": "3ajFYXxhpXQonjxjuqRMfyuZvrp1gewehtpU9hxUEE54jFyUPobisiABjj8AKUcAQ3Rq5Nfv4jHdiu4LYzix3q6p",
  "key30": "2MjM3RwGHXpgZVaziryTCzdTW3YWqUVJhoNd8XzFPBMSjuaLaaHhHz8UbfemNrJkFK2RxzY3ZtMqvCJAAs9M6ndX",
  "key31": "58ASynv37Jf7sEeZ83yr3QKdSSSj3qa99aaXtfRS3a23hZSagtrUJmE4xep6CBPvJv2sJZwMXZwxpW3rMVoB9n8n",
  "key32": "4DQP33fZBL5ykj6VJRWjtUfyZmG8rhcgcg4YUEQ5uXyNkayxJ8bPj2xK9oqs7bLY2vm3ejmYezSEfhzF4Y3qd2xC",
  "key33": "5f9AcvuuD3G2CsvVLdRor3VBcvk9Gj3GiLv4nkL1hXwyUBGGiUvmoMig33BnEMveGPntTDkqW2SYCpaZFJk7wcVt",
  "key34": "5vjSg9TLb5ojnD2egBpJLSd6zj3MyGw3wBbmjcw7i1Y98uu8DBiBGJmKPLSqJ2tGpAVn8tdhpA6ZFJSiuiYj7ho1",
  "key35": "u3ifBwSKoju3DTJ3U5PMtdAo2YDAZdNFw7YxzjKxuHaLtkt1mttQgg6vQi3diRjVNQ8o3FgB5zRMVhgAeUsfiEb",
  "key36": "aWPLG8SWxGPRRAB9sW7BwpCxeZgMqkGMdohWEyVk8RDZLzP3dtWfhAsVFUu4ANqQj1BeivmsEFkc7aEjBcuiHPs",
  "key37": "3ECKtRtVi9PKHD7xDojTnv18vRJm7HZRWo9be1M9RL4LqUU1wsC2oHz1FVR25tD8NXfkpRGJjnnY5BEXA1TJavDg",
  "key38": "4gtofxpZHdYe4pPhvSCM6uKY4STmdhk27779pZKQLNcgGTZyH8XgPo6xSuFFpsbvFsQqv3ztmhHwGgbJ6LkBZTXt",
  "key39": "53n2N5BMKurADvsAngX1eu9TowbSULxmjfBa1ubLZbztY7meE97653FsmwhCngdXz31nmtcZH6RQAE2rywNDi5kz",
  "key40": "61bbyyErWN7PgKgLi4bc66jU2vzLY532sME6nfiF2cQjVCKWaHw68x2G4orwNzVviYVXERvDLUM6VeqQxDLLa5vB",
  "key41": "emn1LNN5C6VxYY8WrU9AsJPGQJmt42itdacQQK5UEezV4PXYAmcwaq1di677c9bPX1GC9ZxbWcBbpUkjPTEydXj"
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
