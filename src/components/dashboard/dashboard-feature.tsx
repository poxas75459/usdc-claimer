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
    "66b7FFgKvNQf1JSnZDnXsYiqSfMWYqPdbJsdrC24DNQBk9yC1Br7phJqAoJNiKWbwNSSLVHDqViQ2E7hmCuGYaP2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55tufwDe6ikFoKrETmgYx2E4FHc71Fadq2Rkbyk1kh2EJrAzdmeVN9gBMQsCCV3UzTYpGE5wNa1ywdVshmsgno8w",
  "key1": "4eN7WYgXGmV9irAYN1mk6gpsXXQiuse7RZcNbeWAiriu3depF78TSHvAyWx1JbRmJovvUgux2XZr2uRrftrTCWCG",
  "key2": "45Ck6hdZ8Uhe2r3cWzPkZhGdh4Uu3HujuTQGzynPchRpkaA7mMqHpQmd8wWpnsyCRyzHPSmWLUdxrfWnb88P94f4",
  "key3": "2Y75R7b4QSbw5fxtkA6Hq7LaypM97vsmviHCM4FQkRWAVB7frptQxWpfZmN142B8RP8byirt6R3ycPq2iwspC3wD",
  "key4": "4UUstzgi8ZJ4eyshWuBYnvYPzK5kpkkWHWX4z6Zft3v4FMNTK7qkLmxFSWFohe7wE8dE8FQUpJp1AiLMMfvwtpLi",
  "key5": "e7WcDHNzymaGANFrKncR81G8D8CgNv3nydSH2McMssqg7uEwywtSUE2Mt76GPzbEvDZYwS47rG8TgRy1GZpjC3E",
  "key6": "5M9cyKfDPi5BfhP8JHFjYKy24LUd81n1UGfedaopRod526mmgQ9EC42rqFwoXoeYKXqngLqExveyd3mPnyBXAZc8",
  "key7": "4g332YohsqjBHf4a2xatYF2rVREE5oj7nVsgXw2gjE9iygpt3Cqi7a9ki9vUoLRZc4c9tnz8FJiScTvaYKEXBZzt",
  "key8": "2PHybHJKJxH2Ax19PZV5xVD2YteiTcXAxEZi9bUgcdx22AjhEWi443Gw6cmsdFC23y9jpszLEVK1NrhQUSoAgBog",
  "key9": "ncseKiatyQQ8HUfP4xxtmQVhfiQyAdYupjDnjtnsFYZx4Sd74KJztCKS2n1dC8EgdfxSmbi2QnJiX2N94YW3ou7",
  "key10": "UE21vXfL73sxP7SMMNPR973witae5nUAfMm5FLQ19yEJAvUxpXacbgqqW4Xu29qew1Jbqo2UWBkYHowgNt4CCrf",
  "key11": "4vcAZ8k47x3JgedzMCpUbzY3ZHi56GZdmGf23VbfUBsCgoYbNTj9eXgm1dA3W53HQ5vpB61B8kdaRTTHQY821Q1K",
  "key12": "2ErtSk39D3jmBAgr2yMD4eKJiBCYv3hbUE73tsSYiRwxznJpi4i22HHKsJK3JCWGCAnvXvbA7zkH99rP14S7b2z7",
  "key13": "4sx9WGnuD66fBQyaHSesEArsRPsnF8Xh2VA45eUqzDBNF98AuBVcPxMRx9cBJKoneSGLsEXz5mVKDLqxXvsCYAuL",
  "key14": "F2et7CHGCXuPRN7nLSkzG77JiN8tgGhmsuojE5pPHQtx5d8YcynQ8PVxSdbPGZk6hKbgQLX36CA4GcYyGNbivDe",
  "key15": "5GUTkHC7gv78fyJ6n38ZL6Xw82SZLMk6z87sfVmfDvrmmuWHzFwa8mpohs2GqdmkycgDnjHTB6rNrFzktGUEdnd8",
  "key16": "55mAN9AhhKKWBbTNPg2zgDQB8CRfnqNjtNqc84MbfFvMPJrJ4RXV9JZq5HQfffwnrBdxJsbNA3F9CRfUxakpEbqk",
  "key17": "5MHjEuUaMxQaZJmxJqzzoQpWTciJhQrZcf7HdYyKLzZQ63pJUaSusqXctVvSnE42bQWfyxaW1EjtuQbiNbV99tMn",
  "key18": "4aN2nFdqFNVrrCEnGSDdyyMzMSGvAXxrBibqT8Ne3yZxxHtVWrAYAk3frP7A6zzTQ8Z8fheQEMDuwYr9dKPasArm",
  "key19": "3jg48NcdawWmqzecQm1xArWfH96C6D3r6icyFFptrWqQfJdgroXrbTv3LGjYqCJRf1hgPxvBe6xM2gED2zqwWqdz",
  "key20": "3QB8swK2KQoN3ZeQwgxKHpSMJ1Lj1Jc3zn8rQrEBhdNuepw3c9hCufJyysocvLayJKqLqwX2AEGtkiKfF6feSxR6",
  "key21": "2xTc9DRBwiGW8Pd2Zt8S3v3CF28PH5zLdersLzKNsxDsETsQyHenPdyfAser487aF5XxoKgdRnjZSqS5hixktKxj",
  "key22": "624Qo7xifVYi9o1Coh3otS4nq9BZe5qSA2fq7T6PDSCXA3cgmR3d8wkxCBbmYQReYSphJWBcAeGQgKS1M2QNCtr6",
  "key23": "4QUji1ojcAKsEWr3XWBavpK9n2c7hek9CCkiXNLBEPKsuuHuo24W2Ycq6Z29RsgY7Ttzxc7ymo6nW1NETtT4YyGL",
  "key24": "2XNEpwoRTikfVJZmv88QVuWbgxf6tzycS9CeMNs2soobsxoKw4gVATV7s4ifKDAuJuVrebEzSZyeBuhbWNcYLcbb",
  "key25": "4FjDFDU6pfQCsRR55kEjYSYCU38US659bAtz2i68uRHfb6rjNt5T1D8BmXXdT6WYX3Hkq9ycg6XtNkAQ6WpBRvLc",
  "key26": "3ce7icdjYdMZCufLqxpKmPLQmVCBexV31qHVLkTf5NJCQHykyUDN3VZ783eyi8gjaJiLHgcY6wACMEonBkQxqefE",
  "key27": "5Hj5KpQqvYeQmmoE2AygUpx3SMRJ6JDQKwpffFfZVGaGjDumGAVxPYubzBMvFzEQxaE1bkh5WJadNtPGAdXi6DBz",
  "key28": "4VZZxp63ShHd8WBauZXUHGYYFRBCZ6zZaBz8ZSfqvxh3RNwv3bXZy9kiFJfgHrMYZ9CvBLumSKcukMxJDBkvBRiy",
  "key29": "3DESQSeh4TeePXoGfoKDGEhAGtAe349JzU2kBo8TbWpp9QFxEjWLAHUcn8T3kkgHfgrvQXDq7GgSV3HGGN8gkcvS",
  "key30": "431xxNNTv28V26Nz9hrSR4u2tsSworkZ2bCpZWSsyUeCu4CSSWEMgYcdwWnZo4HTFnxREiMHJunoUJucAJE2CeAR",
  "key31": "iVMT5Re4TwtZjjvieedWECV9XrQLNS7Q7AQyBY2HQFsiNLu6SgMT8Z7W9QAR8GoekqBRMQsc92i2CiTPSZQUxU6",
  "key32": "5qp4Zi66fQKg7T1eoDaMxiBhUWRSGefYj7CaG7CMhD1s3qNnoB5zP2x3wo3cEpW5aBGvtvwVEhJor2RMurczo3GT",
  "key33": "2FfF17RyCTVux9izjUvGfLBAvkn1kgWdPmuVfMgp1458dftkGxQe8DHhA3fZWo7HxKyDwo73xJmM2h2xsyEX2Hze",
  "key34": "5RHj1MbdpQb1M2Mrp8Z6rN33b4oXWW4bvez7nmU5hFL19zvnx464L3pEK5GgxTQ8V4cpK8yrjo7NAT5i3T7ooMP9",
  "key35": "QhTwdexbCbWeXuQqVQb3nCXLKwn6FrUA6RYpzGrjGHTn5wuzXwsmVrtoAexuTYstTt46q8YJtyZc1RdmbrkEK97",
  "key36": "gCVA9U1WhVobPamEqfTCeZHh4VBMxvA4xMCcn1WcH7wnL3hLw67geGdARTEAVQVBbpDuFexkvp2QsjzmEW1gkEY"
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
