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
    "2VP1e8Q1ZUjYNCd3ySrhfpHiHGWkurBTkwqH3VBS8KF1U9aTckEsFaks2GtZdECKgh3mrgUVtpV4g6CTHFpry3VC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qs7qNb4dm3HqAE4vKeyxNPFk8CJnRBsQdaM6FprtTn8YwTkPnBcX7nfAPsqw2rR7Y47NcYZv3wFvfWpQkdtjLwz",
  "key1": "5QmPyJbgAXYcsLQVe1UqvcGx5svZCWVMAS6D51YUseDBR27Y8AScjboT7tAohYyLE6tetSYhbusg1PkPH4Lefxp5",
  "key2": "4LQSrKMR9teUdjZL541PPsgkKWnfiZJFFWpWgFqaxCgbMMqZp1ohq97pRgRQDx6migccTAL4iVx8Lp8Pw3n71GnR",
  "key3": "481cM8du6kpojEU1T93dYv38tL3HCnw65s8HfLV3wemRDY6MmeJPtjfWKdbP3hT72CPVXqyE4HMh9SJoa76XjTqE",
  "key4": "5V4myo1pYrVdB5LJ6wi9JFAUVAUaPY5TJhBqm8N91QC7TPkNVN53XgCZzSLwoNkuWfD4PYtuQXW5jkQipRi8AcYf",
  "key5": "GgYfTNQNBsu1pMxWpKtpCoBrewLvAPPc2FaF23NrbZKcmX7dVfoBuBWVmyXUdxVW1iVF4oui8Sr8FJytpVCtnv6",
  "key6": "q3TvCLHoKqSTyxZNjLqmYpeSEEn7gBSLfbr6ymVaT2Z5e1mFZ7Jia2jfxyQchsermKcG3buegoZ7xyBZaS7FppP",
  "key7": "21T1cXWQugHerx9iuCFp5dtbHV2FrW4VXdWU2uas2A97UQfxVhdy9mksWGTbGSouzGCUdrLKo1pDb7Nafr9nUAeY",
  "key8": "2y9isQciko8N7bumYvQU2SVQhCoVKYLX4g9qSkcW9iFs5WhuuC9iVqQuiVKp5z7JXpiRPrMwdEmtQd4te7ktCzFW",
  "key9": "5gto4ju6qdQb8gG8SA8G4Z6UWaj16jS9gsTEcbKx1aSANTrkq7XoD3qt18cZEgkPEd8aMwWpXjaFJeyXkLfzqraB",
  "key10": "2nDo7kYzp4vyV91aQLzGtheqjZ1Q9BqZGjUZT2APLsQbaQhtgx1XmA8usdXEdazoZHbrbrrqgbxqgLR2JgRUH1cw",
  "key11": "3NgJJZw6g1a4qCM1i4f74uR2fyzRWjuuu3FfSRtABLDNnMv9Gz3XoHmK1DBo6wZfo3wgSd9ZuRdh8HtKo61DpQT5",
  "key12": "54pQ7W42bmBMunSXZUoKth8PQy9oqMShKf35UJvrv7vkhLYqWeFy5tkf7BPbdyR2m2TM2UU53LyBj2aPSabEKZnh",
  "key13": "5CrKS4WhaTn7cNYPRKabU2ggHyJTPvKgfWqYGUKb1g6iy1gzwSRdh2ULVe8ymfjA88VfFdGRVQHrix4FGYfTBLUH",
  "key14": "4RukUhjDd5MXCrGC3DmNZzyGDkFbGTVKJ8tMXKCxJhUcAMd8BzcyRmqQfbStvMLR2Za6W7sqX3G9UwbanyBbEnUp",
  "key15": "4Ln9jsoHZcc2vxGSWsRQtoHvtqb1yLMYfJ215uoHFWc9nzq1U2EdFQ6826QWQnSjf2gBupcWhiscf7rdXP8ox3k2",
  "key16": "31qCiW3xh94qjXUf8RN1tin2LyD7AYH56VFQHuLT8FfGSAYpHeGUW8X1jXnNiz99X1M7CffNtVPD1n4fb1ZUNHEN",
  "key17": "3CFH7CqfZ2Ccvy3NjryGJapXr4AVSqgMip6nXyo6tesr3VbYQ9S7xTwfc7MmY1HJr9AeXYVGLscgjdF2i2Kzgdun",
  "key18": "3YfnSJQwyrYJ9ysaNLThKAhpYig2pUCbrJrDkcxGp8XQKWXPkum1qm5wraLE1jS6JAd5kjKhGPzUpk8DLhtHBzHg",
  "key19": "5AjMm6TuWHjGk6FYnHNXDr6qN8o9BVNcSrxB9TfBDsaRRpgbsHqtgy7nj9a7SGzo8tcfmAcBh8sLeYsXVDxBWkHs",
  "key20": "2jeQXKiF7nwM8uNw5Qh9rtbBT3nj7uSaPesitbSZw7sdFGJfbjvYPJqxFHSd2B4d3eDwq5tve76vWf3dW3UJqwa4",
  "key21": "CcTS2jJsBTcKw6YsUu57RA8qnvPifMyANXrvgqNAGx1d4s6aw2QokZUzrSZgydd91fXmpKL57JQBh6dAmGNh1k3",
  "key22": "2ssP4abyzjzmj6CEbc7bCsmJywBC77AsNnNUwhEXd3i1Ct3g5jniX66vHTtEuTqNGHzrbFPRZcAMRwMPQvZfwpkb",
  "key23": "4tuvhbXqooHesRpT8441M5oW8EeRRmZ2z4Vigvrv9wXyiBHWX6RA7YrbX4kZNQPQStRRurMKLK6ZmwXdT5vSG6Jc",
  "key24": "5jGaUbVLuj7TzxuCikeovcrfL3tqhL1A6GHhFa8ajc4pe72upqtr8G9H8DGgUoCzShfNWc5ajJTLxkqnTa7Whk4A",
  "key25": "5RHjB9kMWHmnqyahLqLb2xD5XNvLeLMGpiSwRpUBhpWqUjB4MvcEvUsbWHAqcpLnUJ9jDWXnZZL4RVz7fioafZa8",
  "key26": "5ALeRPPUBEhCacD7UNjeE71JLyhbv6CFGheid9rcgtq2vKmACka98yAb9ccM6bfSNjrM5k7mWZ43FfuanUqunQKG",
  "key27": "4TUagHgMLGzgooEs3MyTrgyXFDebnXKEtMjJQ7Lvsakjp2ZyPXGgtFEY9HDhVAfPv5Cs9ZzECbQpV69yJYmYwkpr",
  "key28": "3H2ML5VHhY5nz9zyAQiwNAz5Z5HZuroMviegdkjiAkUkCki485KBQzXVZnWRcfEADPdnn3hBxmcT8DKRTrFAg3A4"
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
