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
    "5ofwFGd9TeyGz5ZSynd9qkyhFp79cNHkpNExftnHJ4NY5piK9bthoJJ4e3KS9L8rhJhaou85zqk5NvA2N1tydHmi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YMBG2k4jbThSMy4GRWw1RMZhjrQezyFFVe4SzU5S9ZQuNQUk3cE4uPy1vzanXjEjBB8qytnDtQ1VC7vnYH3VFDL",
  "key1": "W5ESj9BHhDpWmo9kXBXJLeXhDBtxcnqNHHqwdqQo2SikUWCrGt3ztvx7bMQ6NREnsijjgMmRTwTJR9fZEY1JwpV",
  "key2": "52AzqHPRu5VZMXkcSrSvMNd3Sufh3g5VqCQ6zyi33AdaWU3SpMeSfQ9a3NKLBSq4T5rYMJVAm4s49sd9xiRzJuMc",
  "key3": "5JKWw2bCRFJ3TEuNksCrNFoBDvRRib1q6k2M6gpWrt1c8WG1T9PL52CyGofkftzGAgpqMPn9iqAvfPm2PFW2hTyQ",
  "key4": "3mWo9XGeYn8sByiCdMWWATsPuEzLmJjcg3heFWx6cqq8k6GGZpRNepAepGj7byZQfokTQNv8dem7F1YiUBW2tD6E",
  "key5": "4MmtQsxEZC4GDs2Wr75uCxYfG5x56giiawktSNPUwbxVtB2KmL7THwQmxS3bmeSsFRTMsjC2trTwvF1uDRWehPsh",
  "key6": "5LUcn1gqXP1XFAgRXsdjPQHunVGThS4FQfPQwdi4UgpU54JxmzDjnmmuSqyc546qZmJKXEb4hXXdZKg4GQJxga1B",
  "key7": "2BhhJBeZY7MfwXP6CKohgDakKkrx6AxZ7FnMBwGVAigqAWYh8nLVtHdUaye3EfcK4p2HgVE2xzuPD4rnaxJkJmbH",
  "key8": "3cQaBaB6emucug2JHXgfVEmc2RByxpr8u4br6qs1fhgtv55M9KruGeZREADJzpazCcn2fURp88apVkhjpMKYKU3L",
  "key9": "568aZD7qfinPabYJXeYqyhWFNMJjMixkhEhx7PyUxbmyqw2Z5Ki6b2ovyc3zF4Yv3xwBAFWtS3js7LSMTTzDhvqH",
  "key10": "mzKTDVqgNBCwim4dR5oofenzkybyN8pf1jcRh2HVQyQGEKi5j8vuj7hVopwFxRMu4MxEBsPyeyoFs6mVPaYoE5D",
  "key11": "2N4uxyczWMZTp5sHchuiSQZw7teywZCgk1rKYNnJAkrhkZhGwr8DMWyJBytBmJAwDWSCLmKQTsPeLqDx6optS4wv",
  "key12": "33Hg2gwGyVGRJcySVWo9Nw6GKN7LcgCJGenio8bgDMqmAK5AbtWkubSqrqSp47gXS42EDf7K6fsnsM1CZ245c13s",
  "key13": "2dKRSv5JfuAcKMczwQhgWRKqWrdFkrQhnaae6kaZ86JbkqSjcQ2LTWFoCZiZhj2WCAZ8sZXx9QvXmjDtkMQWUwjg",
  "key14": "3s7QtvXcHziC9Gm3a2yycbwL2Hj2yKveh2jBHhdfXkpMEC3Kkin9nbHNW9kp8t5vN1sgZAWZ4LoWA7NjhxVFiFDK",
  "key15": "2sHRocW19mouipiSDU9HTTNT2sLSN1Tk57ChE6fbf6FMrK8BLzykcY6De5oVJrWuaYo18Gr5Koh75aCV6iRfg3H8",
  "key16": "5S6eSbiT67vjGuk6cE3dCHNT8kYFgMCnZw2dYJnEqrVmutMtov7Ey64Jhf6Hx1oA4ZeYQQG8zKQv245NjNpMUTkz",
  "key17": "4UpoZwAQh1qaE7MJiicAEZDsDMGW1md4R6wHJwBB7abMLWT1kEEWBaWFFQQwqWwQqnngipPm1K2sdYLihLSY4oye",
  "key18": "3Xg1FkpgEhauKss375jDUPTfu2td14DSqCPQ5bBBEfzGGJLuxz9tR8NuQYoPWPZx1xYWFmRG4U5D7Dh5nuU8PwwG",
  "key19": "2k538Hk5rtqcd5ZBuoRGYsLyEzWwLNyCmHaCuBnJHX1BHMmVtc2anHDg1DDKoNnJ6rBDogT34iuLhpkXrBaRZUPW",
  "key20": "2rFnt3vMMTLuY8ZvqJHqmRRbqXUBL1A2V6GVQNizf2QP6i7FQvFZwa65ey44BL8LdoyUTwhQtmVq43jkkFmHboif",
  "key21": "kLzc7EawKk1u4ySeSfgz68uMZRGmXjhkhCfneqkXoLNQpKRJAGWg9EtKxXdZrfDUDJPt9BRr9We36mQktrwHkTu",
  "key22": "5XUNQs9TfFCBG2yivFmx32AFMb8jgP9BQ96WyPzJtmBQwkxSjd5xFW87dTGy1t93pFgKZDdav1VCMMH9jmquUqZM",
  "key23": "5ACDSN64vhzdCjokXP18UfB9xhBsnSbntcqD2sNMYZJBdkcJC82QcwjomVmEKXwDLMcpCsj4JAykQq5gBLXaeoX",
  "key24": "1acUMPnujwH6HfNi7VZMAyUhpBbjfKWSocuiugjx6Y115ub4BnCjrCW9bMy7sPdwfG12GH4iou41ns7jhxX23Fh",
  "key25": "4a6Lo6dGPtmkn4fQDKCKht5moN8dw1Z82qwg4n8YpjgA6XPQiQog2dHUQqFMMXkXHq7yTfcdkHZkoiKKsYU1aHTL",
  "key26": "2nWu8pzXH58GPuNb7Gz2DgV49Xi1yfxsHG2A2YnzqsZ3P2LZWq69YHdwfzT5ot7BJhKpQ1bGKcbYiT2wMLyV7u3",
  "key27": "5JEaVMVCXJ3rBdTcTvvJBe9jvLKc1wCAA4WC3eTYqnfVbQkuFH8k3P9oAC3X6pboa8SrjddCnWgc11BtdqikKyJZ",
  "key28": "3xqMR2qiBUVxFeo4SvjqzGY2WhDJRrbLt6iSpYTEWUgJE1JBaU7u8ioCNFSu6PciTZL4sh44QaCd6LAeKL8k82Zi",
  "key29": "B99YoGatT7BbaqjMEJCH2sJioT78EuYPmbtuQ7v6VDaK1ZrBEmHGfLKsfw7rfwTeLLjjgfhFkUzz9Tjz3ZQehvJ",
  "key30": "5x9h8nhVGEcZ3YhrN7gBVZ8p3BVBXyDaX1wUQHR1pqy5zYzNDxjqXBdoyYG1eEbzW8fSDjRQVoBqQVgYYx1shVLe",
  "key31": "2gTuuMLVaFqm273UrX9RdSFSauNX2xqqEktDTPhLGsK4cCfb3w2B2uA4WtYa168SYTqzYHNqhPZjwd92GheqeLWH",
  "key32": "4d8aTShkTQKXZzLqBFmFV481kYE1FH2GjmbBa2kvrNnf9sZ9AptNAAVPHJVpccsJRaA8eqFjqYyfjcRMkm4BzQyS",
  "key33": "3wi7QHrJNZG5jvnmctHxiuh6vUTVy99tgoNGqaDDnhJbkpf82jkUVJHuMkoa2y9scZRRyiGSeQPtGxJTDTRaRUFP",
  "key34": "65cHXExiDk88wwYvT6FafhpaoCkxvhCo1phfgZ6WNstXdQV5FML2sPG7KG73L6zzL7udWWSVLCjMnentKFCQedef",
  "key35": "4ZuLwMincwuyJauqvaB2c4G9xYSAuRw5EJiL4N6hLSk7kMoQ1H283w34HoxyTbyXwQ2QUHvY3w1TtuwusBD8vxxU",
  "key36": "21QVNQzVqjkZ1b4UWgjkfJCxyGAWpzt5HKMugw9erd2xrq4C4nW51SdRFi3kHqj3kYkeug2KRSuxp9F8HNcWxsqu",
  "key37": "3EG2edgk1289ZPTYDKryEEJCPXQNbHCNdxQfj3XghWNVxvUEpzEWMbCkX9JMV8HnfhBZYe15icp5Mm77oP3kn8jw",
  "key38": "4pgtiFc1As1KncLkHySoaaUjLA5YntyfGCvosyayidKbrS9oporPNHZhttdi9NuZ2EpovJ3cUsYERC3hfnoShMyH",
  "key39": "26oE6cpUUceiDVz5i3rHoVq9qj1ebF2DvvLKkfMgGLjhaxkeemaGvdAtxA4GSdsBCHPTnm8iJz7pYoxnJj7Pjsea",
  "key40": "34E8sR2pSHtC6MwX1fJkLAgWhVNXi85gPd1fVNp8qCdfT4vUMVKdCoLRCrjTbj4VdXQg1Kz85dhpjWQmfCkf3FZn",
  "key41": "4AGDZV229kKyZNBT9b6AEJK1KSVwj1PUHWSBmfdbri74nDtgiCFsCrUUdryfZQtvcNHGfm9rsbm1eSGWERBbVLjN",
  "key42": "2BirN2xuLvAWBJe4V77c2uPFCASoynuhE4QmRYixMDcakkiKoV7cTNWjVpwBX4HHueVsXQ1Yhmsf4et6UfsimBXo",
  "key43": "2zLnz79CC5CGcfFMCLQEevE4kbtBGmWvYmPC8WwXhktgXo9HLfQa9aRtSH43MsD6FoGwL25TbLCknASRFeuXc9uu"
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
