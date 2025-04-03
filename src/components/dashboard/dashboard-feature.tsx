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
    "5FFK5RZ7TpPcyLmewqqMU6FaYHYV5kPwp2idtKxzo7MGjCFKyNSM47iDKE6qUgnX859wt8TNaBdR4j7FS92NV9xb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZU7HADXeJnkBrjb6k9SqwdxmRr6H8UVCL3CNWkE1wLEtTuQgEyjdW64bWC9JFvHpe9HMJppeojNtfonnostrBN6",
  "key1": "2J5tMnusrRskQMxeQjWxgM124VaiLJSMAPtrinfkzJB9QV9YnmohDeRtR5LzgTJY4xq4GFNbxXvyoNthXYgpSHdc",
  "key2": "3bSS7U6tKTi2qj2nCWLfY7sLRrm9xm6suwM4GP2fvwSdRrTfrvQyosJpwPZHKfoMck88G46k6YJLkWFfBkovwfZr",
  "key3": "3HGV1FRBa4ZgfDLC9eaF99685Jk6VtK97iuRVXHjjznpEYFGUMmexAyeuzPHYzzHbr3XvSTmaqngW9A7XAbRHNnG",
  "key4": "3Q5vco1LkdeypriZCwtVPWao6FQj3hjjnFb6oHGDozZLm6BYV3w5nzaKKRqTs7FADSMgzUc3BZg1geRguJankKac",
  "key5": "2kmdiBFVxgrFkU6DUivepzYkt8WNPwxftW4HEMZ3jwWpCz3hU2cxMRs6pQqx5L15oNREjmyFTdRCipQzPmZb3Qb3",
  "key6": "2n6BogBVot462ZV8QaJLih5UocUgHR7jBagnpkfEXsb3wTpjy5LatJpuM1cQpCw1Lwh3w5iZmUWGD4xvH8ioUNwE",
  "key7": "5JzMGpKGRKhJajcG3NyRPvEorhLNr6Brmfc536KW6VrWkhpGThajfY48Z2P1kE4CXQ9HjhbR9vhyxF2ARg4qzw7K",
  "key8": "2FKEjPsyzEjdScjtZAFdNpvJafnjjgw3kug4fuhBnA6ggrCN9j9Ch6L1e2LiLdTBvdcM7xMNXdUWrKGFCYpDknru",
  "key9": "n8AQoyeqC8rCaGBebMzkAzM5Aif2qXmHqqvu7cK3rsJUAXFYH54htjrpmDHaW2aPF1uUPzeL3GFyeVosbN9dze8",
  "key10": "2KE58k7f9wJsLJA9eLtSnjP7Hd6nAuV6gEbEVzFLKPGyxSrEtTHE7bVMFDMaM3usK3Tbuo6S7yRXSShyuWfep4qz",
  "key11": "5joD2PQ532Z8LHm9vH9VytGQjxQAfCc6RzsCHcSgPLo6ctdop1RHqTyK8VjXhrQncUR9ap39UmEpHpnVSbULErQp",
  "key12": "T9ZmQQqDQHfXbSH35qsfWwmrJRGBdaMVzeaFuP7b6j2FcdsjUF8QrmwigrPAhvR8A8YuvBmucb5tVTNv5fM7P2x",
  "key13": "2yeBMzmCGudBm9KSEwUzstZXa1Zqr1BKTAVTi3QjfSw5cgbmMvdz4Krecq6qYqMy5wBy67njGxT5xQnRn93VkVa8",
  "key14": "2ZqBSd1PfwAbHeZahksM6bw2r6fNM7Jv9pt1PX9u6Nmt1cduppQuJbnM5b3sxgqDtEQe1sPg4sL7DPbFK1gKyq7h",
  "key15": "5ENAmYAFxZHmdxPtFUQMVhptgrqbm93qm8qYc3mpP9cUMWc5zGYHG9QT3MLtMkDLZp6YLT6ho81Ugh4BqJaLLTAM",
  "key16": "4fLBZ3pyU7KJCz7Tm3L3tynjzpfo9aZhPrZByZW73wKaFVyRPcBzigo46gT8738i882Hk3BD1RDq6TpwxZQ4XxoG",
  "key17": "2pvihb3NCzb9ZEatbVbhut6RpdwHSjKLL2zB3cBa7hwFFFxBS9Pa5i4etDs5GD54U873RD8RZGmxbELp2xLDuN7g",
  "key18": "4HnqHujsvgSpLUCyhBj3UYgeqTTdKCV1uK4Dham66pXQVZBf5WkgMQtX6s7CDAsBvnysv8Y3g25m5n6yj2GSnJ8M",
  "key19": "3WoLp4yqTHYBw6kgAu2cWePDown5hyMKdTkd5MdvZLHQzrUMRFK6TL3VnN32dW3xcqfcgyKiJgPg9o6fBTXXHSNH",
  "key20": "2Uryv8kC2NLqDhNBmUWYDKYt8k8gttvVp7egvUjJufbWAZg7imQv5evxs8EwF252AxLYfn7EQpEC4q54kyWP87zc",
  "key21": "39FhqTezaqqQH4PaS29mxi6PfLEFhwEKiVpUCHK7RQMXcZJ8cHPwg8xoKuWP8YvmBBh7YrBXJUHqn9aky83wNpXJ",
  "key22": "3zdsKzW9pbRTB6gfH1hf6kqgJ6vC7GWPpUSjGyZgQiXrEWtP45EsRfggyZQk6YJpkprMcypWnj4mLTzpR6BAS8uC",
  "key23": "4JjrFJHnHRMmAVymXQUWQzvjxgxqY2d2vEJz6UWvoDk8shzhNRvoy2Y185TM49eiVfsL7XhcpbUZc8nZnUzLV927",
  "key24": "467Tte2FvYJVMvsxeELxx4k43tix8fmBYCnZHa3nKGS1BPuPWynd5T62xCku6Uz6bjw4SYb7Wj1fGjxaKU9qYLR8",
  "key25": "62MLX7vyTRigpgvs2QgBBrWBxytDK5siXugHqB9Pm289jzSM9sMu7J8T51twF6E8VWoatHUhGnbCvkiHksv25yHy",
  "key26": "4wu6GLofmQCD1fwN82v8SPAkQZj6Autj1o9a2nvaUrFMQQjtwYx5DSA5jnBt87nXbhgfWEz9PHQrjgygK66gR97B",
  "key27": "kDh8z2jvGCAESXpX2CSTKnGe24wDTBmHnyS1RtW3bQVmvZqXppD4fEYbgshEbUJTvg5argbUmd1VLCNyxocqSzZ",
  "key28": "32ibsNjMwsjyFsmaWfWFwgc3b7Ud6QGM6GGVSzSyxD2pWKaiM9AuPDz4KYtzN7TTpvsm85YZ9r5ivvLGVKNm8Dwo",
  "key29": "y4JJ7EFLub2yXfXjdVYuaizuPdvSKnkM18LDR8omFe1ZqXB4yaL5HrcYBHNFYRWrCLjkoG3PbcMot2diCnVdBc1",
  "key30": "35FVyA3XoYtXECi7TwXnpuXKqNEgHigZnJ6Y6uGbJzVxurWwxSwt9uoFPKjpZCYvkUNbsdyNbUWHHj5mbVw3CUQ7",
  "key31": "ZaGM4YK6UqARAcc2XYmnpm1Cer8tLp5GgHmuQdFuzVaaXZ2mDZGeoMjNnnr7J3rXHWMfH2z5LCVpEamCsCaJeMt",
  "key32": "2Lw6UduvLJLWZjJ19NsbDt39B8CWfT8b3n5wDTMDRxbMfEXjej5oeQnjrV7J5Kj5DN768vXJFVb24365YGHCSwVd",
  "key33": "2n22dvU97aWsxjxKBTjkTxbNznbjVjEjGuRNTod5BnFskAmqcUmZxqRbJ4ADexG43izebuegs6zkAg64EYME3Afo",
  "key34": "4a6k2fcgWKg6VyVDjH9jjDwjQfyCFbyQsovwUBGU4xc3KfE9k27HZXVs7rKMnQA2GQ8BFptcvjb9MB4G7DHg2MW8",
  "key35": "2GoTyJPJ6Tz26NgjojSF2z6C82aAofxmomQ6H9njFS3aiVTEfvcyxR1dXqzGhTggHE9EjSfGRQkEA77SDjdPpG9x",
  "key36": "44e6QxnMwJnGaEdUNWmBMJV1B85tPm8GuxdiKF4hGGYQMCxattKS1iyCZM39PfUG3r6imsgA4CsRYqMWXmfqmfkH",
  "key37": "2HtiT1Xjd2T9GksZX57qxFEV9ZjiFtyNZ2VVn16iD7r3hfPAqQaZa72GHTMBGzoVMq1XWdMAR7eNvJVvJVKJJY1z",
  "key38": "4cLRpFDVJDQZVPSnaRTge2jRkKi9XbANNLouufy4Erh5JKrhperGmbX38Grd4PuhPgTdFiQY5p7SzZ3LJ9hHG5in",
  "key39": "DMAwfxXYDuaJQzSKFzppaGvuiRaKUmvSrsrbsTRFuyRBmurmUWD2VRSK5pyu7oXD7ttHHQ6EepsaJUGhxge7NAh",
  "key40": "3k4MzUZ4vr2xzT47X4Cj1s4HvA8wM1MfQkNbSDV3zW4PwehKpxuUQ8oerTEqL1of8HHszEPg8YPWnqa3UDwjm2e1",
  "key41": "3R3Qze1uby8gC1s5ntMGq1Crpse9LJiigisH5ZS9JHVqvp2AQLeQDxwMrh45xc8obLVL6NVdhWUGJoKJefphBDgq",
  "key42": "qFcxPjy9FzskDqZzJ7WJYjuP41dvfSW59vkmPcSU6DC49HZJzA1x5bumtfSKKojxBhKqsqNmqdnspjkby6WnCcy"
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
