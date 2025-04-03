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
    "jWc9eCnqb1jesGf5THjMDLydhmtQtENrHf7dS8bLtUFPt39UeqfGgRADCBXLDV6xY5k1KK2mZX4wbg4rY1sr2ce"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28iJCxYJBeXSzoMaL6ik9UadL8W4rCjyMZijEEtGwhvboKLBNy1QLLUd9XuUfGWLY97WZwSh1NeAgFkZZ8hfrGFU",
  "key1": "6Gd3PB6KezGepK6Sea4ysN9A5182gMAhL31m3tJxbYEezcFSXxwBJTNGtAWt7vFsLH6okG5nT34ALFQmWzjviwX",
  "key2": "5nbvHiKyFkLq5CtEe8pXTxt4UqqiJQWH7hEtCsojFnnGYApwZTK6nqCcgwY694TCtsguE1AFDHBad1d9uAzvG7S3",
  "key3": "JVQiiij2vxHdjjawWwkYyJ3gkorWmsYShngTtaxcBwmtYq18js4g6EdywkD386qQma8TWhtxRpBwaA1vBg1wAJh",
  "key4": "j2cuN7xWo3hA4e5imov6ukY11279HfqRM7ERMRrBXnWEReJFV2BgNkqrvJEnCoGBb6wtTiDtjwNzhq7txY341qH",
  "key5": "4CAjzaYiGosuo9CuZq2eycPajBBArHK1rfFtnDJ5gC5MRp2nVqXBvAaEtobBq5BZQmKqdKTgBVs62n7BdR9aiFWZ",
  "key6": "41JbFXSmu7TyPBHD9DgE35gbe4XRv95guk43KLMiG23XymtJE4xodhGoby6VrC4hnpScAwxeCfBr2rDogWgc8RYS",
  "key7": "65F1LdB8yRYYPiVMeM8k6TyaZApmwBYHMt8jZGkmdHxHodbBDYQs6oDQ7LPC6v9Y6RWGPq2aYn6q4gPgHmbvcExo",
  "key8": "3ZovLMXXvx4VgbbD4FLYggePHpmnZJAUaHnKUXR2Pfpi8f97MUzm6EZdcxi2ew8YtojVWibSomWUu54z8B9gSdwh",
  "key9": "4Pv3JeeydLwnAPu582WFYByF78iaGwwFGFY4SPvf57KD5eU55dVzDW5KEm4KxcpmoNxdxsiLMKogFcvQRKeePHmT",
  "key10": "614XH61FASFyNXFJU36fU9D5M9WR5nGKUF3CKQoSAC173eBT6txpC5K7uzVWeNNumgviRPpZiz6bYacV6LsQLZQw",
  "key11": "2x6pNGBvjByfjoTCe3pS9FbLjPmTgpExx9s7mrc2pGpwp1nDz4KHiw6Dbz5jxC3fGPSgiavpuLiJKo5xPgvWZ8qe",
  "key12": "2uLZKVQN5p6Jvq6eXLogiABHTHtvoiqHGTcYa62zM3TCUcf3STu6FEe3uHm3N3QFJ3Wg7bh4yKytENTVjZCixgki",
  "key13": "5Ts11oWMwMNuyHBztFNZG9PkZLE1gGsapt6qddByDyHFVscKxbZ84ghmEdckTgyUtFWGA9qxzdXH4uYY39BXPKXb",
  "key14": "8339ZLzrvND5cZ3QXCSJBNTixWREy2Wsz5vN2679anAvads2vx4QXBCMFvJcMcGpF4EDdhrc8X3N6hhQKKpYcEs",
  "key15": "L655TxoUyqRq1mW2FyVWj713qmwz2F1HD8NDSJLXyn8Q72C79JN5ySJXJ2av7ZtQ9D4ag2TdGK8vrY5vz5pTYGj",
  "key16": "2hC6PYod1AvWmNkQbLfSnNLJqKRM8hmoEzwjeQNouNxK3Yc34mtM4mwZ2Z2RopHJTr5g7QFxhd6n1fdYE6m2nDVx",
  "key17": "5cjngY5Sifh79jxNvjk4sDUDE3TH8M4BLHNuM2WmB1c95Sc2N6V8AiA2afi5AVnn9LWFqvzzCSRuG3kzKPgJQnPn",
  "key18": "4DM8cQhUEddG7Q3ufyNtSUiRn29F6MRBNAD4rroPqUJjMWiePL2RPN5JTMKbD4M66U7ZskW715ndWjw5vY9ZmWKZ",
  "key19": "5cfQSb6Go8vnMicJD9CSukCrCAPSG9EoozGJ2Bzdc7NJLyDeXKybNqo5HUQwsV8W2FiZkiQB7cu4SXWMonNKs6E2",
  "key20": "3dPNHtDUrDkC4yVCuevL1RUwTFNDBqpAvUV52ai7F71n1fyuJTkUXBH4157znZJLLXpXMx5v5SL6pYW3Fb5j114P",
  "key21": "25aqTjvBb3x1zfrNNZCUji3qoogyCcF4fia8H7dtpFQo71h7rWAG8rAC2EDxLUGgo1RFUuU3tMU2cSgGjkfCsJPF",
  "key22": "5XHXnaV3qp9zP61EDXG13hutYDC25JhTku44XzScnQhwsAFiKD8VYPRVwXyHf74C4qkdptfvi1T8fLPjqEwncjYb",
  "key23": "wCEFuKo4jcgYgFpnRR5FskVEwbk2H4sZxVnZB8MJmQy5W7UeUJNPyrxrjUmqF1RTRUVhbY4PD5mKXHkqrXz9Egu",
  "key24": "3JcR3ckD2BbKje64G4ZhgkXyraskomTAerbudR4R7gfDLRTpSLf1gJ7T32QTHNJat51tdg95EdaiASiqCuyrZvp2",
  "key25": "39Uz77jK9QEsSkG9WpznhYKJQv6Bu24QdPRrhZHJfsRu8VSLQd2rHXS9jSeVDRm6yi4tzWmd1q1aunoBoCzon5rS",
  "key26": "52paXp5UHrMsRxR3qsFCAC7mJnaU3T9Uxr1yWx4ygxKnfHPsWte7EzvVfqix8HW2rRszB8waF6rr9MDJuJGLUe8G",
  "key27": "2HBYbzkR1Qyr5qfvnEk8z3p1WXZDgzsnNJJtRJjCjswnDzF9xstfxyS1nVgMtkCrmDxcQv4Yc3YU2DmzR7NRbRCu",
  "key28": "36kDdyu7pskLMemQoBUFdVoM2uwoyHvfQnJ4QEzYqWwjbW3uDpS5CCRiPCGxa2qtvdWMY4xWqbv6exZFCtncVfyb",
  "key29": "5EJ3rkna4TZVjUDbLnkfy4wbfvE9G7KA2cTTvVH7J1F1nGHtyZZHXenWBs9xLWTxqLnK2ZHGn7pt3TR8SJ1FTVQo",
  "key30": "3iWFnTK7AwXKVS6DpN624G85ufumZNiR47p7YY3gs8yGJ2LCb2bxMBw2NPp8o8yqcTL8bPBVerLKNkikG4oFY3dD",
  "key31": "3zaKrfVmEbur5SQWP5pd4VXZR4qX91BzqRrwXR3nC67hv4vUfNKr11fSSiJ6H23p1V4hyrAwyHqEK34ngCXmqeB5",
  "key32": "HPtNH1EcSADQeHLUz55NH7WDDSLMDRo4U7u6qfSUPA9WheQtdPEcnXBFTrzxNpT6GZYRtMXg4FmfqTz8kfrQf9x",
  "key33": "uYie1KP13CEWqdPCD5doXeEzTAe6z5HRPwVKvGGerobX6SNpsHW8cNwxLUBtqYLkzwQEM2fz3UWtX7A3rzDgqgj",
  "key34": "2ScuAZg8ZtT3CcCSLexZHKTj5iEy3xfDi7N49m6MdSRkCfg9HC1C1uUQKd43mSWGvXi9uPhxHy8uRiY8TPDgytJQ",
  "key35": "8nixo7s75qsAJfe6E2BjjdizdosKiFzBKmShXaY6ECTFN6RxUvTqa5xQ62Ab9rA2gkjN7uDKmVjxB1qGExwDjMh",
  "key36": "FeZ8Fd22UzPZgG2xZWW3cpNjfLBXVQZWTCYBdaDy95o1NqEJDS8dNTB33Gdyc2JBSoBS4nptuTY9KBVkgzSuPTZ",
  "key37": "4ViBCgGgHXrpfx7EvzUgXbnRFu2FtHoi7gCMHFAacSu7UDVWicNxcF8BFkDLbVoPGMjsPvsWGtk11acCkmX7MctJ",
  "key38": "2TJZdicVyybzWGWrZmtQYYMBnpPtAsEZPKxPzQU2w8sQmkF5x8wFGpwaGKYPTQW9LDzbbDF4tPeSbmkXGzfLac9x",
  "key39": "2vLFeUijKD6EtXa7YycWqHGvjK9zbt1yK5pio34BrUJmUvgA7mEq9f5d5XAdJukCXyuS9vonA4BbxF1myRkGijyn",
  "key40": "3pm7m9GtkQxMmZzx2XupfEA51U3Wxbwc5c5VLX3J6ybrNE8hQ4nefsYnzEq8JCmxaD8smYBnWqmcnGTNMRcigzKJ",
  "key41": "61FauBQKf6gueAqyHh4VA1YqW3WXwc4dCwQo6EXq8k5epJ8D26tu4pkSr3bgvCznGezPgNAqbHrdbwYdFbshg9Tt",
  "key42": "J82iE5Ubms6isESWbP3PgwLBxDUF1Q9tH1gF5VLg14H9EdbCBHovzgvgPbVEExLuWjt2yhTKpyJPZNpWrKwv6fy",
  "key43": "5RaG3uELZmYZS42nbAQaLnd1otZs5rBtC9NqWVgog73XodX86t4qMcqYtUrvCcdEQA7iim4hjya25bvH9rx88cgS",
  "key44": "5EFMHRo4HJTCG1TYhPnEzzNtGrHRpu6F6NkkTiVeJHcWR7bf2KANfqTmh4uizUQXVY7KWNihMaSgvUpfKuWucDCs",
  "key45": "5ivykQ33nf9xMuTfnF9Feskv1GT4xB5f8G2xfcnrP7a5MDdhkCfauMUiUryqQZd9sZ1qyKadJyDjHXuE1of4rZ2U",
  "key46": "2trAYr2iFLG27pCod6WDHeEwHHn7YAUiqQNPdLPD39F5N4AiSB3ULyqLuG4AMjnkFrnbPkzTcPdsGCfzfFbtS9TL"
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
