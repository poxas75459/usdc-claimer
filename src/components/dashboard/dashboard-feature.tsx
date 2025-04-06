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
    "5K8trgYnawgEem68kV4Xo96hSNi8uzRuVj6tdEuYJxngiE3Sw8eJWwe7uYwoz65ixtfL5R78YSPZw1iqzvEJysEJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PmhqswPfV9gWr3Ureoz3dEMF72JPQCCUq31zywmt4wiW3cZRQHiWmCH3agiXmy9Hzej7J6Pt5r2K98s8RzfUzqd",
  "key1": "2mGUxoYbH25AvujY1eaiNSCz3JyzeeZe8GFHBJitiPCW2naxbv3H1oEW2iTasrgPvqbHkKeN46sT5gJwJCfoeUkq",
  "key2": "2HHQ3fRz3TTwg8AaZBRt2uPoTMw3J1zRdGz3HRB7Zn76zzMNtgnHFGL9n2AaZ4TdJnW4WCUiSW5VQ7po3jCu2DKR",
  "key3": "5h8c5U5awPosHbNd62MnVqxrnLDSy2FhxdEgyfXq325HTYTjKn8rANBaaNeQwWnwT6zWwKH1S8QJ9Pk1WQ48i14s",
  "key4": "V1vFJJumd843DmARQcweRjkgHwjiKYHjCxhYB5KrPQytYq2MW4MDAEU2d6zrucFBe3qdU8vqQtAPxjxWxz32xsk",
  "key5": "2Nd5EJpZXGHNxbEXKTnEAU2dX5vJrze79EaDMr8y41eZA1LAG99YZuXvoGnzQCtNwpBpFRUx5a9jVKXF2tVwgJBy",
  "key6": "4p2vJ7dcrPEDSNTkJFuRgzG3ybZofBAJAKcKHCyPRCmbhjaE8UUkGi58xcTZ2Ht6ysQahV3WpR8nR8ppBMygJFeR",
  "key7": "46VBNN6Un2RCvR4d4kGUrA7pYikntKcgh3bytvv9qN8M14zvbec2TSHZpFoBnULVaQ5J8qyMnx5VnKzrFw72P9A",
  "key8": "vxbabVYRUXnBmZDaHi9c18xESVUGS58hmTp8FWg1HEwDYCeGHKgfr3ZgxXTR5ZLec8siZ8RhmfTAaqvBg1dhLgz",
  "key9": "5gbce9zuWrMBJFTth55esHxm5USiyL58fkrtVhRrAAL5Ai8w1mkg6WhwVh3tsTX1ExN6kf2omb2XpqspheLxGru6",
  "key10": "unB3UPrvGQeyz4YnZvL9jv1CQmAHhpCvCCMvgtSNAH7GALogCQ9gNiANpdDmNfU49xYimm5mGfomsg4Bb2NAS8g",
  "key11": "3SFUm5QGBm9wz8n91nMByqQt7BdrC1GQARKsr5cD6cRjfXzg3bZzZ8GURw5RpgpjASzRQLJnCjP9ZXyT6Csgkdqy",
  "key12": "3WHHwRaNQ4csMMHiBvpY6cifemikmmpzi14T79qmWKaSJY2oM43S9yM9PWXomAowRasUtwb1BZbsNnzyMDPVpeXj",
  "key13": "2fQWunDxfEMiHb6jxVZisTcToo6JSbta3h9KoUGmPdNDGVoTtQxjDLGkBgVPZo3DkcZBFDoA7NXbZWzBZD8XNjz",
  "key14": "5X44h6mvrYBbGLJ2jDMRqCDpeWJdhZ2PzJFTbKpJr2DkWwwkprFibM7gU8ELPPJXZezw9Ka8mXxw1nAn5xnRGxMg",
  "key15": "2twUGw6iFBqJQhywgd59NLYD51LF3TyugzeiknKHmBtVSZk8bDJveXrGMdZsAe6HyC2Kv8N9DNmFKGtGf154aEAF",
  "key16": "2idsMjE6qtVjW66CgJ5CMdVkcbUfYwUSRAGPsZq23zpMNyWdQL2Ueo6LKmCTqYBY2e5cNXTUz6MSMLyDaXxBBKMw",
  "key17": "2uYwgg3xNXq4qRnGozrv3C1PLW93sNkkitgGtHVfEbzYMFuQWfpFpQta7gbzUowKctqvqvGmjR8nH2jq2KmTKK7L",
  "key18": "6XoXfE2A8TQv7D24WEQKowfZgypbaiQKK228WtQh9aTEe8oVm7tLYJ2eui1tcNNDoXbT82MFyDdrqGYTS3PnVK2",
  "key19": "2VsHpKgKnM3Xe2dcqWNFEij7nM1nGseoG795WFAuTMXEUzKmjgn2wLwXUCR7ZbXcBwc7Z5zgZsupQ3ozEmndNXFm",
  "key20": "YhsDDvStYob3MgUCp2L2t28A93w98mP7dBFRbdZN8VSb3q2quP95EiC9hWDmuKKjSTe9vJrToN8a2kgZBmp4NDc",
  "key21": "44RsUB2fYtmdmxui8W5xjzVLT9WKKdj5K74rfKouNWoEkPYLpwN4AsdHvVAK91ySFmAZTAGY3ug7SSQPRdL72AkT",
  "key22": "5E8tk7YUTTthbjfS7Cso62HFrZeVpoi8x6VdQfaFXvijjGP3tDaGR3bAtBkUpYAnd6VLRg9NoxU8CFjS1hkaadGf",
  "key23": "4NnUVnmqNVL9PYweWeeAtc8iyfQfmZCUUvkziojN8TFiE7xxTA4n8FikB8ss77MLjziB44GEFrHq2w1gBCo5UPRg",
  "key24": "4dYAhk1afSH9tFaCPbJvKoM531SpnKm9XzCwh91CADy1v5rVw353TdGTXd9n5fkrrCkwUwfVwWutMAnD4suJXPps",
  "key25": "3j6MUgd9wa4sdvFBNutLXxgo2BPhW3oXGaxoZMHUiDKdEj2weosxtHpRbdd1Q6f1bjSdWRDmGHHsv7W4jKJmYDFq",
  "key26": "QrSPvD91Wy13HWWRpNXVwwCFFy9xpiQbWUSEabNYJEjcP6vniquwYRdKU6msyoDAkhST6VyvApzZHC9HZ5H7kmC"
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
