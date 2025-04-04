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
    "5kYoQMyhZmiPGPiaCDwUBFo84EDALZxksur7qgJcCWCijcH28rvcZi5DGD9VNCPe4HPKEkvtpjYph8nBGJVLwbYN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZFCkKWzFqixEzk4yJGUn1KL8sqCDub5tj51QvyWf8VaaCBXq6dzHLfqs2LyQugmo5g9EVZTuMPsU8A5dJXrXBXk",
  "key1": "2tmq14DqZkXb9tuZQBKertcBeXyW2WzY3z6NwMnxfKcj7vAziQGrZmd6no81Sx2we8ZMf8ErbFcpS1z3Qret7Wjh",
  "key2": "tC1dRUkvNrdTHxE9cZU7dedtgghsEmdX1vnCArKWH2wKth8Q5GK7npxbFqNzEbbAgECyaJdsy36vPZh11Viou35",
  "key3": "3SYpRuJbMru2YydxTtoGNEWSuPjGFjmFKdiew5yYt2JFRqZo9bHUh6hezdSPpAkNXo1wimVXVjc9kFAuAeWvJeLp",
  "key4": "2t5fuj44i8JpEBNc2tzystGo8kqfHZJzbt3Qu2ThPqhtgwiBoq4r4VZACkAP8UDQmmUrSmuJiTJBu5mpNvQPPq88",
  "key5": "3HcAcjzUJbByLZFfy8jcJ2Ma8UKYFCDo7QjJAWLBemrf5RPB81N3fCAhnXxEh97FVydLQJdnByTfVhBj5FnPTUnG",
  "key6": "p7iwTCwgpADAWe293XtFYbfZmr4MSskxBhXnJnj2BjBz2WJoRHZcS6k8vJ3fEHFDM3W2srsQR5cxWYWxTR3X4BX",
  "key7": "WHSH53BjoB8Gy9fRp5g5qL58p7wkBnuu7ppW7sKpwCQ4whkRUsYdXpzxgASw86ShPoxgjc1fNAJuPo2KJvt3TWY",
  "key8": "2STnvUPAEnKMimPPA9WtYGWVTAn5FhLxYVQssqqWjJ2rzWU8pswzdz6cXmzDE2xvbX5CZucjcm3iEnspJhMjGFXV",
  "key9": "2ikxwKEGrTVmytcPuyrn7QdX3a6pH6BK6wCHcNgPzwcWwBj7x6geMEMzrjwdNprMZKfqME6zVB1cebkqAUm4TT3g",
  "key10": "61DsMd2Ah2uaLvTe4NoVvSTyUkKdp8T8LYqsG574BDmFuX1SWeq3mXZZCXVGxioq3ze4yKacwXva6cWGrR3NrGki",
  "key11": "LqdenYLfcZSunSxNyKapdMXr8PfLtn5Xz7QWTqg7S56912cvi64oUyDRopPfBjWpch1maYEi5HUWMF14CXU7sZW",
  "key12": "NCrHeJ5vSbLQrtRDrucMA7mmLRzceZiSftxqPFMQssVS9UsSJ2uKPfdJgA6pqd5obDBg7zNZUcH7SXuTwnTKnKA",
  "key13": "xqg3C4TQ1REH9cMdD89drBvaQM6FwRNHhwM83yo6pSzPCx2YQwqQMeyVZbNHoSeiAqCLbrUG45pjMmTDt9WeMWj",
  "key14": "56Y1t6SHGjj6BajGUe8UZNmQUjMuXaDJcYpGKkTKiB3BKc6HeqbreexoraCnnrgcTv1Bn1DYTD3q5GgnrLr3Hiej",
  "key15": "hv72Xxvec7pUVXY83SR3BdH1QMGVxGusDR2scZyMuXdtx8qzJa3uxd6kaSx8jhtbw97JyiPkaz5Fc2H31uHKugV",
  "key16": "E1uy7eQcqFfSTeSk8EPGMHg8UNnsxr14J7P55Wg6qgCpS6P1py1ucmyWmgZJrHTsMWyxQxt1KkC6vg3BLDxU9UQ",
  "key17": "4ssCtxx9n7snPx5N8iJXsZCZy7XSmVH7zxh96K7UFj5UWUbWSKFkPuPde92J4aK8DZ3SztwwrBe9Zy9DQjkjiLks",
  "key18": "3A4uBN2fDpzyuYSP2ZY7pdt8M3CaYgNVXdxBFqK3DSqvCYktCJaqLbXisapAoBWwL5gxgnJ6cuCKLf5VuiBcVcW8",
  "key19": "677c5uMz1mNTf92d9aRxiy1xRLXXgeMjFjzikvtQ9u5kM7DhZPUv9KUKMR5pP7AcsAuMWcrjSYE2SLEVPQtmPULy",
  "key20": "2dLugNPK1q1nreMqX5aV9MwJkXykKWyQKXy4Q6P1SMq2M2RdjPfYJBgLaTXPWemHkkVywMToDESf2sKJvkY9y2Pr",
  "key21": "334ZKBa8womJfRY1DbXrkpaFfuR2LXy4689qa2DkNVjHKCNgnwDHF8mMqzpJabuKKjjJP3sdcMeMw6firkzoPeuP",
  "key22": "3Rxx5VRdgwmcz4JixPCeMt4BhQXvpJmMKkwweqjUysSeEkQoz5A4wcHCXBk3dYjZuZWWwSrPdsoeA1zm12nKDrGD",
  "key23": "49RUesyVqrQbGz7JFjHz6zyKzkewGXPR3Lf4CUBVpM93jRkmUTXWrcVAFU8s5pn751BtZKTYX8FdrWTMwx26A6q1",
  "key24": "2pf3o25HgKXNpbLBQyfURjZcLQjWqnmwdfr5pAj5M7zJ5SWRuZCPULGMVjbALNgo575C6ajZ6X4LZoLZYFtKCGKN",
  "key25": "4nbdozn9DJHEt2fso9TEzwVUmArHJEXHAvqqhuJmWx2Z8aEKUXadwjTdKhnGrKSP6ddVFhU8NyU84nAo3PxBsgMC",
  "key26": "2nHaw2SG86K1aKmhjwxsk7oAA3wVLqVzy5Y7vCtZo443pMfXfrDFcn7rC6QrpUfoe5indTK8SxYnU67sqGKha5Mc",
  "key27": "6QmpoH9DN3x15RPiRCEhfLMd61nvWKAQPJAm3pbzH4ZtV2rvvQgS4N6Ve55wqzbVq1TMbdpLQJqSnMc9StdKbsz",
  "key28": "sspzBGdd8hTP1mAxkot56fNjsp2CPuNMfnF3UesA2PG5GKKRDJZhhyWMDJNkX8yUscvM4tXZpFkjyuH1Qci5LSW",
  "key29": "4RMUYYAu4itvZjiykHGANMZPe85Je7ohENdi1uQ8ZyVBxr6p7mamiRqMr6p8eZH7F2M3sCSxiwaH49n6Aufa7jDs",
  "key30": "erzSr5jgz7xEbNkEnzuU6JgVQu6zP8FEHNKex3RK51oNBVFuX9xzbkQVYgYjdrhVzhFXVXTqGp4FsyCgxDVuMSd",
  "key31": "AqMewdGMF2m79cDYA5Nz7VRwAgpd22yefuTC1Sbxz1cQPb5GG8UbtiodxQq6K227diqFJqqKdrZfGMGxGmmDhYF",
  "key32": "5wUR6gvQndwGAerBoXoX682LsFHh7Nr1FLsMHvRmEFXXJMdoCQtrPGkBbLBi5okoLTfo48WNQKriC5dV5K2MjiVH",
  "key33": "5HU8TAreQSU4QJ1RwJEXuPHSW4892qdQ7JnoEdqEqzzKm34AAs6t723c4JDYwK6vLrZZeCbHHG1TArrNoxcoJoYe",
  "key34": "3yrE8x6DarTGkkLuHhQGPEE9jFEZS2FBcVhhvtWyzoNKXVR9HBpfigVcV2MJmiBRUuB91fAmGtQe9TD6wvpTZ5Td",
  "key35": "5cmVspa5eWtHE58Q4wydKH2Ug2hAkQPkaTSSXxdgDvAGbdGGEcTyBRJsJoVn29BsnPhmtw1nze5f4QowcDCBjjZq"
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
