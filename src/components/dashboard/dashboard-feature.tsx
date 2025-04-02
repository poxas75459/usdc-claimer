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
    "4kRrFe48VqhU49rbRXUUsJNYicFrd5f6ak1CQ4BxEVDp1iUGc1oq54wM2cNH37aUZmEr9dQMe4wkBrsVGMLTbRDj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TezsVcPa7eQM6stLm9oJ3YKx4uTwhRXjRVzeYLTvRfyJHREZwi8vBE78YgcLFgd1EYr8NiHGMgEVxU17xzmMbSA",
  "key1": "3op8cud2xTTpbNspERZnD35DStY5KmoF8q5ShtVF2F1B4eKZTv9Y4ynTFYMiYEd7itTStvXJ457EJADAdfdTnftX",
  "key2": "4RG1ozGMZdoVn543EmdLxHodbie1zwZ9RXtKcj1fj8xJF5LYCgdzbJ6WLbw4Y9WXF1nn6x18rgvSRyZqNn5Kvmw9",
  "key3": "4e9iY8kxquqdYXR9KMdt79rWqcUcNMtPRe2ztjiouXsuJEXHMyC9nodSRQgz7kAzV3dmm5AnAj7r7YNH91LxNsEr",
  "key4": "yuHtbZtyxojSX6gWcsTG3bgefz9AGQkfgLSLfgArc6sWZ6k6e4urEQC1UP7ACLtacNFobxJjyorrNRsGi6ByvED",
  "key5": "6cK7WfgVL6Du2Q5LCsrn8oqf4dfZHrAvLASpcgJ5wm9PjpWkx2uZNzSNXHjK46ahMFPRbeGMZSoM5eVKuXD5x7N",
  "key6": "4F36HsYvYjRVsKxEHaSZaaFzfwfJUsncPuAMhXvZNF4HzRyTbSBqNu4v1rDaGbzAsy3d7jLNderKEcYGCCCK77mJ",
  "key7": "3KgiQTLEd7LEt2qkzCw5upF4nQzMGkrhipMkFJWhWqtdYcPyUZh9eriggqZCrxKoJVURY6NZJzLP4S8niY9q8CPX",
  "key8": "22Pw8HxuB3bfsrcxq4FCxqnffFYPHfMFVnNQrw9Y8Qnr4iyR5pBibXwAxFAtZAyKKsN4xNX5NaBj8PNu6E4FVc9s",
  "key9": "55PWazbB5hxXhMCX31BwfScFr9vcBaJfbSerbgef4DvrQXKZBgAAsKpB9d3mfk3hPYbE6pw7hLSLasimTgjzxNJ2",
  "key10": "5Ss3uMW5dUC75Jmz8WHB57PAoSZNCD275jAEtXZ5oWHSbsM8Zu8JirBYYL2hiSQoX4KGz6MtuDxdVntHeUuFudV4",
  "key11": "3ZMub1CtMnWNBKErU8pRz5AEfd5pmDqXEKdcuh5hMSixqsuz4Jm2Fhxmc1JdPgWYXgNG3AhXDENkRb21z7hTLPvA",
  "key12": "3yGexChqw3vAce13wMTCL1WeXvJX28zZXXsUcaigJUcZNomd2Ram5eM9QHUxKW7JQn6JnzSJZUankFU5nJBjZpQo",
  "key13": "5nwn65gmw2VBXscPXyFKr78E1YmpcbwE4M9nFArgNWdsMNDkpTkXvDkz3iXd73CEmxVrxuvJiVbUd5fMdGLPUurz",
  "key14": "4AX7z7rjs9gTN7HgtPvh8BjN2ckwcUfoNgHNyF3cZyodXB5MCctzNM6pxxhkFXsbdo9XveRdDL3MHUJ1TXoTdXwF",
  "key15": "3ANrfegmMLT37yhJVXs9Rj6uPbcaZ1RMp1cCe6iLz531T1qMF6b5puj6fuC6n1GS13XHhyzEYNdmkTFbfJ4gYbGg",
  "key16": "HRT4zwPuQxn3AUBdec5f2ryeQnLCNhetbzkoL3x5yBPcDGiYKj9sQbt9jCivtGXJTBd6HA5Dk2Q4pduGxwvZ2Jw",
  "key17": "5db5RYrfAF6J1H5e3R1ysWw9rFQgwQk55pKFkvWVS2oezsqsiYQ1qrUMCxFYa4PStTXU14rubUWKG7gKWE31CGj8",
  "key18": "2Y7ArXPEU89bRsFne2PtXcL6sqnpUEJiEiDbuBvjmxbHEch92cxYBn5xLiJN1VDAy5SgM5j51X1t6nSoofMe6irR",
  "key19": "2ZVuLVdpzyTJ26HyKMK62cX37h6wcTLm7BdWrxi9UsBqLnEdacn7VciN3XM6o6qabz8X5KGh7tguSh54RD5q56hm",
  "key20": "4DDWZoPFKC4tsgRHEyzhoQL8VmbJZdb7WQEB7rz5FbivspAx3DRFGYPZJ67qp5aR1A4z82ySVTeb7sNiQvr99KGE",
  "key21": "4PgKmLW8tPxfuvZzMaxxdMC6mKPvNSv87KgzXndPHZ35UowmVVGJtuW9NYepXHX1G2b5XS78TTCegH8XMfYG6KT1",
  "key22": "4QsjPqbSZdzyz57GGygEXmPm1ZzkZxf3692qC8jzJp7vBtQ4bJio23pG9rmLskSAa4r2W8g2RaMiycdaonYGxsYS",
  "key23": "3Tk1SRkbPWT2pdLGuHeBJSxdM4UGcfXf2UE2e85A2Lq1HZ79mNCPSdR2a9jUHCWVdFk1hN6GnmVbvTssAWKTMmr7",
  "key24": "42KiggEXKpgvu27YWwsmHhdQEE6SGwVzHGzDgiGfVW4h3gWikor2S5Z7YEF17trAMPv3MgtJUjDt8cTFxF5mNSAr",
  "key25": "618DH49bPU8H5TabHUKvVMAPJ24fqEtjkABMk5HK2PtD9mxg473BoFKG6bD6Z9oBAdfk4JfAb155Fbcm8Rvo7LEL",
  "key26": "4w3M7XzGRRZqoB5Y5Vj7jU4XmZ8c3TVH63pXX6muZX6i15L3VGbQANwhAptSgCKmM9UgzfPTfkijb2seqzxSeuzt",
  "key27": "3MPsCk3SVYPCnPBeC1h6bRf2d7F5CqgLmi2fWkKWpV9ngEhJ7nvokpz5wEuh67bXV8oLxB4tcH7Ev5Hy7uRYtThq",
  "key28": "2exqSktVX95QTXxaoijRiTHq2GjhfsaGd5miLvxNEF8E6RCuz5u7tBqSvTV9182G4BAhobkReVJNG2aNj5ooCr6V",
  "key29": "3dxQVUJHW6qGddrGqPfewsuEGvu9WK9SbuAzCZmHpqNLM4vhf1ZkxsxTX6U21QbtkimDRJGYHUDD5V3uqexjouVZ",
  "key30": "3H14VJWRrHNHWvdm3KpRhXrdz1SrWj8BuBc7UGRwQaddBNciE25RWSD5MFo2SJGjFfbBVa7wd1NL9TzXhqqZQVeY",
  "key31": "5wMDB15JbWk3nP8TkQX2aRSRkuAPagpsSXaaxDPgRgfiRkwHrRSj5vomsiyb7Gt5ReQg29btBKypx7yH9tJXAYd6",
  "key32": "4bdP81u4mD5X4bUor7b1aGZaUVywN2EDF92sgFcAtoKqhwD9VCtuDfkg6AK1JapCy5FaxXWJ7wXDiZwtFocBmmiR",
  "key33": "zntJ33Hc6W28zYbrWJmnLVbSkNTNtv6J7UStKySzGujQYyjM41C3Xj1K4SGgptU7Vgd7aokqwLrhLhffSNdeZHG",
  "key34": "5jS3P8iKLm2EGYfj6Ab4teDE9StJAuSSiaLB3tnQoz71z8d9JfJP97jQRr58yVN4W56wbYDjcKqR69NC7nLZA21Z",
  "key35": "iowUxiTYEm2C9GZCKURbHJDEapgwzdTBfT6Vv77WD2J4f527d7BAicS1dvseSpEccic643HUs8Ba8KiWm6US7gY",
  "key36": "3TBZDrJTLGpUyged1VBJJKtngFtsuJUK8Hjjq8Hc5dfK8SQwugGP9U5uuNQyAeUXRPDPZoUK3adJUGWs7ULgZWd5",
  "key37": "5HBNoCyx6Uw3A1ncLkf2yDHrHg6kZhPA4a46oyiGWhXBEcTkkjfa2YxAtUd4GGJfiJy7Vi8FL6gzrZGhr69mA1AT",
  "key38": "q6intFr2DrZHZD5fDVBjcYyDJWqVj49qpqB9qiuixN1tj3HLJggpaKZAzy13wtUHfKQnPHkN2KbKcTedLqkuUZh",
  "key39": "5Rie8gtndEcxWFXjy5bYtCmgm4MNQ8y8SDEsr6p2q1Z17tH6o6h26ncnuExuiVMJuhrZjZVyXeAivK2P1pFZp1wy",
  "key40": "3zxkfVWLsuxtyC5mEZjp4jCzSFEUZoRR5N9MUkKVkYeePvFB7rwXWVvCN358RX52b5akZXjYF8VCmEMLaMRKHGs6",
  "key41": "Sm92dqz9nUQv6wNsYbpz1jwaSAhemWeSu9BXQzp8UHsp7RkyqBsL21pHo8J91g8qjXaBK5AStPHdhKGjHfookJk",
  "key42": "2H2eKZAawz46Dh1MeV6LLKqcfcTP5awmGxANWjv9tfq3XyjL4eJMTqfy7pqLsH7M6DgzsyWNgFxFJU1u2R2AYcBQ"
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
