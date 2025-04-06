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
    "2HnFXfHpQsSMj89ZbpoS2yw8eJSLqdCXwBiF1NjqvGtWAUg1cK3zt8v8ZcJjdjKc7dbhRnKpYUHWht8GYxLDwWkt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GvGMd7MsCRwBcNVNCfVQUXAKoAcxCkRngKVvxjUpA1CCqXJ7KBeGidMHxkkJMo9HcNVimcBE17dUXVxrXHKKLNM",
  "key1": "4YBiZyjr8z49SjHdsjXJwMRb2SwePhCxRiuUV9Vzh9ZgarDsaZYr9NLjWNuZYbZGTisPWheKc6ahRfFLg5TAem9w",
  "key2": "5BgWcsm1m9HrHvH7B5iua797xnhQusA914FaSzZ5JGTbtQzVsBjczdP8iDExUddcg6fwS1eM5P3qyuBna47ga2Rg",
  "key3": "5Ss4yTL2gyYPsqcres2YTzgkFmJoyjXsdMnCwfpa2B9EJtbcY3n4fc9XfC32DBbJPkV63NpiV79mS45JdE9aPEAy",
  "key4": "5xCXs9FuYfchFf3RyGBdR21Uf3brdS69ZLZpDeRHodzGjdi7wyiV3h2Yx7uMnyYjfiDRW3e2MQ5jDwVytGHgF7ES",
  "key5": "2DnjMUc2P1VwKgm1ZXXKbRuBVjdyuXgLXGZyPBHXNJAo3WjYMDtKV3pKt97HzdfgavkF1JXFVzJhBwAKnjkQ6c6G",
  "key6": "5QQo25m2JHaaC7tEmfEHoudZpUhybKxNkFSgLUiPk8xLMUdFxJezjRSUx9XB5Ag5gihw2cCQ2gpmCDhTmcYN4Rf2",
  "key7": "56XjZmcedrKsvFu1gBv1Mz3FfrHDvmQGsaqVHcCnc4GKKeXzB9WCyFPvLZqWBnfWeKDuUJbnGdg5jdWJ77RDPizS",
  "key8": "XCuivinZYBb97VuWdnJ7aGyz7ZiKLuFxjawU47oP67N83xSf8wfF8GSGXt7AaebdciNaKt4NPP1HnG111bagjXM",
  "key9": "3yUV2KQap1nj1yrF2gvXXt1P96LtQwmwy8cu1D8rUdiJcR6xVCBwQTEYzeKKUzsaVdSXYxEShQHocDySynrHuipa",
  "key10": "3h7b49EqyVFhfVLamqKZyaDo4oRwveytVshYbigBxbCrD4kWmnL5geuPVrduAbLmR8mjUq9HeSUJaRrHmKzuzf6u",
  "key11": "4i1XfDmPEoGautddJoyeK3wfFUAFLTdGTmEX6NqaWidrFadYaKzUTJh9ugSTadvx1oLEMyDTQBTLLcT6B3pgRKKg",
  "key12": "5FHcH46zH3fg4fspTMsxyh5jYYN4PkLpg5Ev7ywTSwo13qtj9mWybaLbRXj2acFhcRZPBxfx2hajPChxQ4y6FsX9",
  "key13": "3eSpJcM6Tc7vv6RYs5exv2Z9nH1YomPMAdQRqzTHXREToo7zTShnr15deu45NmGbVCQdAjWZqG1CvCu6LrMVygFj",
  "key14": "RuLnE3itpyfBfy5yYAVKGGcFoiuUBUGoKQ5n6RMBLedkd88HFCz9Cf4r3MorkdTRZt7UFzGAumU4LLxScpjqotq",
  "key15": "KWQVqkouWkKKkkfwYqiqvhtQgUnswEojsbrYgMJzP3E8PQCg6srhZtvDGYFKsY4PSnJamLh1RehqKiek8R3eEBa",
  "key16": "3zA64EfN67QtCdBnCdajDUj4Jyrfp71bRTjPZRpTqM3zEbWDWRzMoFD47PzHNGvDD6zMjvLwYBXyAGcsQ3zATVWU",
  "key17": "44MJ15Gu8xgk9ZNxbuhU8Tmd3mYmvsNEuziaXwv5CS27fBPxiwKDnZjqZnLSZ4w7vVMcKLsDz6dDTHFbSEjQXQJm",
  "key18": "27ycWe3cy5DwSSmmzpSDrRVm6n6j3gw5NjuFkcCEG5Fay9rdv77iHXLTSwSiWUoUtiTM2So8HaF3DFNtm7tPH4PQ",
  "key19": "VJFpkQHxNmYK3391MZJGHrhHCF8vyXMjyUnACNCZ1nSgVynbWw9DZq3CNW6Vovz3CEyk5Udsh58QknaC9Q6Npvw",
  "key20": "44UDCHVhB2DhHDpXbTCPyQLWk7MVwKNK5LpCWKWJEQi6pJPrWtRLRC46Di1a396WPZATv6T21X711nYgK7pUAKXS",
  "key21": "588B6aYM3NDhavphvGUYgk1w2ShjAvnAnST8YVvzV4rKGoNZpmm5r9ux7poV5MPSzazXtiDq5GzZaCnLfXHDdfVf",
  "key22": "2KnET9xjWCPqUupveWkB18aVQTFvL3CsTnkaDkNXYLf9DMiBFmszqar95StrPjqufJ5fZKoBGEVJYGY7YXxuELUc",
  "key23": "2ieVn8A9xWx8KNfEs8dJfNqr4UgcZqJwZcUMH621P77DZi1JSCA4Jauss5sqAS4QYn5qfx84kVr8Ugk4GAz45kos",
  "key24": "27aiJDddh3G2DvkmweNi8NWwFaf8p91E1FLpCmVFzYshhdhQD2TLNt1BQ1zocs8o1M4FhtvFCUbuEmYJNLfSuTrs",
  "key25": "4CfnuXYN4oA19idxX1N5hXBx6a2bLGA9sFPbgQqvgkJSYULM2v3o22LAh1oMrhTN7KrvsuhcMrcNDGhAtDeXexCH",
  "key26": "5AkuXzmobwZgb79Y9CvFB2kVHq5fmcfmpixw5pTALUY9f3vy9RwbLZ18j2oCdJRucHqGNQ8KEVZzaUfBzFFgVwwU",
  "key27": "4xYvuSfYhfzS1hQDTV84XnHv9SPVk3LaAPvQsBKEFPU3b4L4jzEtYEe7PAKQwqJyJJeLFA7npiZuNmivWthdCBFC",
  "key28": "8CnX5dsYTn1KSCxmv6eYEdmrWubDhPikEb6WdLQTfpE833G9LPs91h4R6iU2pNJJsmYZcFbW8WC8YsVnymcAUNa",
  "key29": "5Pq7494N5zYzLzrwmNnGuF5h99YRuUvi9NsZuLzPWzho7Yd2LB5iCMuqF6q66SMWppxTSRWG4uEdGVSr6jxQWrHb",
  "key30": "5cZsM6Xd9QBE8H1vtQWs7ovtWDhd7LWaBfYL2wFRf4tJzDQRvaaSikWuFsm1xpkQCjuX1mN41mhVNjwT1zLg7XuE",
  "key31": "2RobG5XradqRagMqfeT4SUTvKuPaVSNm8Ty9gCmqEbpxU1qvxQE312wj5v2cbE182ecrDjD5puE3dhtLjjbYthyA",
  "key32": "5ngnhoALDH25QanMoVLsCc8JmAvV83d7aAHp5sPtSc2zHxBPKss5GpFrX8sWSGbqrKwSaqPkBJkHJek8fE4XcHJR",
  "key33": "taDzUy6jwwjq562RwT21tsLD1ZJT5KnRWLP4V72McUhp3DMsiEkihWdry4PEhRXt6ctMz3CjwRUPXuoBw3foxyn",
  "key34": "22qGiHafDchgiPJ9erqhq6NE68X14BkeF7YUZHmTqR71u6AwPQ5pQZ7T3zDiuRmbCh4PpsLcmw6iUQas76KnDNCs",
  "key35": "43DCLDpG2oFnVZYGkUH2oAyBNND84s8A4piEGFNX4HWGq72ak9gBThtVnTxcjT7WtiM1FTHyqivoXbUKWMrzAkRp",
  "key36": "3nfHtfz3zUs8XoD3PBhMjn7DKhUjD1y5WcEyeQeNjsKKMxxEJS9ieaCGF1cRJnhiwM2xXstq7vZnjtzezaF2ZpJ4",
  "key37": "4ywJpCLrCv3zCtQ5nHT8ez667ZEbQXf2FN5urtuXkHbuStkJyuWq2WCoeozYnJFFwjHCpqV4tNqjNRaECJfva8YQ",
  "key38": "4yhgNiPqBjEAvcYSjajsHDX3B7dKJBZdyXRMdz8XqYynehEat4X3NjsmotLz4dordjXqXZru2ejBVBuC8Gx89Phr",
  "key39": "7EDs9GYGmsteKRfmDdaHkZcPvNhdiHzySMeZwS1JBPgDUqYr4KhAwnXv1MpXixzDgFyKqierNu7HgK75ow7d4jA",
  "key40": "5AMJktSxjjjHuPNLU4NykuFpZ39Jf7AhxGL9J8Xnxe6KhJT3RoNbdZta1DojQ9JnddhqPdbcUyJAE5xVPhNthyxE",
  "key41": "3xGekEA3ei3KBEX967u1E8NARXRy2etXp4MgEtoKvfzNV44T3hJMQshKurmZpTwj83jqQ5M8t8FsJgq7exY8R5KC"
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
