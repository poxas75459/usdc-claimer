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
    "4QgpABhSRTtxTGK9eGnEg8ZuksBDNW7QiBM8ZhdnWbNTVZNxKhYNVUhiFG6ex3budeLX9dUaoHj9GXpaKixpir5w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YyGawXeQvbyn2PRESkLRED4dgGenWH1kmZ94p7PfSJQpV1vJwFHCiH8aYe7V5xoHFTsvc54E3kSRntWwrE53DWC",
  "key1": "4xCkfdxHwFRJiaG8faSMxM4q9FEbiVYYzgQudWZ63KYKrZp716s7VMWhaWhEehUiGCx3WpmCQhoSUzYqQMNCtikD",
  "key2": "4PrhTq97kq38AMc9TA16hsTxk3MSSrYtDzfQaCZs3yju5RhUeanqqv9jiLHsbJzxogqjCnMGQwShF1oUCsRDK6ns",
  "key3": "3DwRcKfEDW9uVas1PEkojkzZBC3VuCeDjg5AHzB4afdzxeXUUyQtu6aNDJrHsM5CmFCNSotx1ssgqWEGQHFSpEQG",
  "key4": "24RudJkx6i8yvxPu66TBZpZMthNfQnFuhcQWyEeW1xQk7z6nfErsyqXcvdXAqTfcESU1xi9w36YwGe3BfZ3A2y7g",
  "key5": "2noBniu6fnLPciG4UvGnP7sghy6sYp9xBET8skFndwUx4iUz9gxx3iGEiGk5Qg4donAbjYXzC4eSU1MYpuEs1hYa",
  "key6": "38sA3ig1GspcJ4kvJ3iqx5h2t97kSnA9jSoXwCte56EbRzi46hXoJhnJtfybTwg31mbSWnRyjhY5XQJrztrYwRJj",
  "key7": "2Jm9XmHB9WN3D54gdMXbSHtbNkpCD2jeU7ZDbaYUVqbTUa24U7Wxe5Bj6wSHH3JuZ8xxeHBRYRtRLLrWjMWACJ6H",
  "key8": "3ZqqedLjdri9urkatBeqgg1AHkLbJpSHNF6sR2Fi8u1aY26PBkqW5vFHEezcy286AMyxj6dqrfw1Cxz5KjQmXDdu",
  "key9": "aokpXvRNvq7uuxvtnEZH3nMrfETHgNegLpfGTydY1VaU8fz7XqmchNo1NEEfhmVFTQDNU7XckLfRqGrGm2ruaqz",
  "key10": "3rvcTyAibP586CtgLCLdQ1v9qj3qZoGvQMipqr85Dnr3HMtB6qVjpuzfXDq9SHhTQfpJePgvva2dVJ6jhbpbwy5k",
  "key11": "z3SEeaPL8Lpzy8svGKx6PWQ789qFxnAorMPBF8pGSLBYwmgw3aFdxWwtKh8pps1XbbKQCK2b9MjLLgNrS4uEdSV",
  "key12": "2DjY2E3CLDetTSxPWzcMHpyWhnUXtyUMZ1V6NANDz3NraZTVzhhq2a5D94RznK6rJVeNbTgA3hM3PYqgRtefqWEu",
  "key13": "dyD5SLw1mDWLNYY7yLwWk4UgFmmcQVHxQBFB7HizwRz6P1D95JB4xLJhtbwo51J7TGAdJEF66XRhCvwjbZGaxp2",
  "key14": "3QdsYQstsmNEz9VmL1JaiyKcNB5XW1aAmeMVuNFPKKzHwP7Q2qngyaWQ9GPRmkg1JniwmrdzrbPRSLjaryjyVdc7",
  "key15": "5bmvxyC29edHyohwe1uYQzbAuNfs1PQGvgoFb5DtYcvfTyQurEDLta7j9RQgYcctySiif8D7BMwFKTXyVt74hEvE",
  "key16": "397T6rdgy2KuREpgohX7JaJE3FD1zg6WxxJHkqEbA8sLQ8YqR2orbmxeWNo6nKWZYjDYJtVqa7aApcxZpEkkgaqc",
  "key17": "2WtBc2d6ZbA1QxpQcDvFef3U6EB63g51WuhJ73VxF8VyAJUphvrkgiNrAmVQeCyzP7ePgZQiiVfRJ79Ussejjyeh",
  "key18": "4fcrvUovZof9rXL65ZmaQFS3XS7exwAp1iJbWibrj73hDC65kc5rYPjZ1i3g3GzwASfae6GYuhqFZ8gNdQrDtyri",
  "key19": "3Z8q9r6az7sGuAh8Wqy4rEmFxAhSLjNyuMQRS5QAf1NeJJhVJAvijzLfPucks8fUhpiyVk5rRsrMw6Qsbeit1Lwp",
  "key20": "4F4ofHg4mUdN1wq51TogZHhqHAJ1GbzCVoVQb2QMaJbretE1udo5U934CRXphPDUF4Yymw25rVQtUG3sJApGvoYS",
  "key21": "5iSRMkwJWMKYTducVDRqwZB7nKELBNRCdu2JUSw3YbwNZRk7gFRZ2q6kSo6RUWqmhPNYyBEXmdHLQYFKpznrkLor",
  "key22": "3ntBTLaoNzNk79LYNitfvXcWaCG5pGQuCQmBZFCZqazkQyuo71YNfcw93LCizoqrxKGSwMZp64PdLz6NWqDkQFWF",
  "key23": "3CYQUrPzPjBh3HajxdzFhJ2z2agMjNrtitPbBQBMhRghiGNKWVNHs3JcivBgJPNZK23nQCaeBarDr88MJSiuq66A",
  "key24": "APDj9sjRCZ2P9487eFYfrGBddkAJLuVtJRoKaiLwSW9atxNydtu5zAPUtyyroYbKjfmJ31m2vrVC5nrMK4LSavf",
  "key25": "xRNFNkewASxDdschUJsivtcG3e8294T1WwnrqwGyHNMFvM2YEsx7C84PoiKhMohtTQpMku9hYDHe4asVRu2SapA",
  "key26": "2J6JdaMd97TQtntUFn3YovtrMRksWg7wGkciM5q1N6VXfKSuZ9UvsYEyNUDgXSyzvWjEjJaNHQ5wn3YAVdVa87FL",
  "key27": "5zickc1q8GHgLXt2CMWnRcu4XCEzk7Aphys2wn3tW2oRYpaXN8U5tGSnRmiMNU5sSMQSp312czVkHdsjR28kdL9W",
  "key28": "5puH6NcnnMw8zprw3Sxszi7uPnutXzxz6MUjwHFjq4t4arYG3yxYvYPdRKiWe6bkuNHSuK3AxUrCzb2C4CZMVKYg",
  "key29": "2MD6523WMA1nFQ5n4vFiz5XmNpogwBoaTfjPyAMvFN3M6H9uzxS7DTNmMn7Xm5eDwkGf3AFH8YekfKPDXUk2MKyZ",
  "key30": "356wmg9S43YK8jFqvd5WGGjKcFkQdbnRtCUqMxySusSBWU6t4NJstA9Yf6qsnuvzCrDW7YfrPUvQwNqVYzL8b6Th",
  "key31": "4AvC8VoKXrFeYxvj3ohBvWK1GYANBT122S8bLN9H9ZALsPULe1XbuybmK42bE9mhXA8kCmAsH5Uj862SSJBQnvmi",
  "key32": "2krQH6hFNyzV9XTdXz9ydvfy3LKAAzj2drgzp76Nfw8637VG4S6CfU3yCbwWua8udgY4WDFdw6mHQFAVQDgrkj5Z",
  "key33": "3MvH2pBSeURTZoiMttiC77WREapL12prirvaCTw7k32CWqP4QJxoE4z2SQQaaGdrYVSFAyR7RJsVBLV4qV8GwDBi"
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
