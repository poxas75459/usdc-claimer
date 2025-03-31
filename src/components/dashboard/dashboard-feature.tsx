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
    "2SiQ7Jeb7QNrCrDNrf9j31piNLyePYWcHae9EX2uTJnJhKzFzgzP9pdrk7Ky4Lc994AE6ivDTaxKDWj8tDh29oC1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YP1ZjW1gceUfA545VCLgMEyoo7mxTb3E9oa64d4hWb3iDdKfBf7uvd7H71NyV2LaRX8N2YGzGjuDjEF5Bxx1pjd",
  "key1": "4UndUf5N3Pjmh7WwwPDPnvDKFW7GJ21Ga3ynsfBun6neRhV87ZZdE7QwhrYkaqnBHeLw8sZ4wMDBkTNJqz2Aew7z",
  "key2": "3HTfFLs9BexWKj8GHsQbeYJymU2MSXm6sfdNBYC8qhvtqtvtpqTJXsbcDRR8pnjx79WU66vDQituiZM11yyv9mCR",
  "key3": "2JCpFWsegY3GNL48DnLzGFTP6uL25yZRiAGdbCk3MaTmubnwsMjhxhq7ipPXdxtgBfEyAcMP65RCK9HEjkmN2fhn",
  "key4": "3B7y9BLigKysJR2peSJciXpUMpofs5Pi4vgQor1iGwaStvsrriDnkDtXKXi5PsyVFWDDcbYGnH6cxsZhAR3SGTDw",
  "key5": "23b5123CvxmEwWYqfQeivnua5bpjRsoZYbJSrJQ3QNZSH4r4xzAhj61VdfbkfgHNy8L9km8Z866FdKFMbvL97UrZ",
  "key6": "5FNAcnjhfcKigKyj9bBks8SR5RnzDJK7Poei5oNr2NAak9sF8uhyW6qmLy1871BvoD5ETaHn6YfCndqvfwZ8No5x",
  "key7": "5Jyj9xaKWtCQuGhg1yGe6ELhJwL3sLTavq2dKZfLWQmryQUfDpiSWjHWTFof29iUc8bdizxymikpE1NDLi4XgATQ",
  "key8": "9iiUhbWJRjQq4ULwHPtvHECY1XkGtNQghLuEdmsxQWAxEu2HsnCNSeU1RpRqueb7GJZJZ7t6gyNw38Q6aZpNw1a",
  "key9": "3Sdheeud4s9dUaFWRNAEYPQnUFkABK9i7EPG1EreaSmwucQe4zTgPeJHPVWJWRHtQLPpn9wXyvW68SMsRHJRbjag",
  "key10": "2W77rit8wqXNbMxTqpoDmSauM2vrsvsGdBasvSmmHtMmLqEhNbhohb95mNd3Rc5Wba1E1HRRQfaUnJ6oJK6RRhCz",
  "key11": "5XMvKcvBhRoihJpyVkGg4yyMEEDAoZgB3EP16aBfTcMstL1C3r7EjGdAUbjs71YVq1zUKxXyy2Z5A6wUkE1xkSZ9",
  "key12": "4k2AxCJcFNrKVnsdJSc4Ji2WkdecrRcBhiTgGkZecz5TBTcCipnhy7PqonzmVu6YuoRgtQU3LUqTLANNVQ6jbmFN",
  "key13": "5RYESCD4KVCTExoMkyaPdGBs1m22PdfxRs1Dye3aCLxEuBWmZhgie9GN1X863bxEHh2TN2m8Zsvyf7wri5uMyn4F",
  "key14": "4vLBbuJ2WM5UCuyxpvNshZpSSWcx5kcvWshrohb7jcdzZEG1t361sWqGrBA1fM2cfS8xkSrsiRjChnEnX16Sg3Xq",
  "key15": "KyzLyqUE8AofPRwq5As2NAm8TTkrnoocRseMrKNQXzCqScG8bfx4dQUqnxthbcN9Tz9dsUAA7GykWjYTQuauA9o",
  "key16": "3VM5oR3XUxpE8krwctJCzKcr9MFMXwxGacQERJgPze1MXK4APZZxxGWvuYCZS7PgKNwQKncM8DFccsS2L3Nuim5L",
  "key17": "3uzZNMJY9LG8mQaqV8RPeHvzgk4AEpRskCG2eL4b8zRDrLFjRm3axYjjU5sziVRYucAmEtpG19o2nxKEZ3RbDNVQ",
  "key18": "MwDLiaNDMkUL4wECmbjy8yv93iNPDHxp1DSxSUhKriP7u2THFdGLSvopuCm2uuNMMZFphkmU3TpL8rtnuWmfDJR",
  "key19": "2EoqSvTpdvoAqzH6EZKezB5dcyh2XKsWEGTFMpJ1LNvroN65Byy6zd78CQZPsGagFkuHsAhWYQfPqc9AcmrRfR8x",
  "key20": "4hCE4KmCexGmaUaQtNftyhstcmt5c7GqAK9yR9EdBE4or7MHS6YQRZ4ffm4CmxQHPG3UHyt5uJjeLikf9hNChbM5",
  "key21": "4GDgYBVaZwCULNcBxefM8TnSrGJv8sjNYYWnF5vwNRbsnZjrXhfWyEeMPkKRZEaj3u7dc2NCaTRxCGyuhPfukRfL",
  "key22": "VUXBEi6in447fwqVPyA8fHV68DG4gTXMsHVYqnxijUjPgEEWn3rHEbR3YCauqERrnxw9515wDMvM4LtzuCWT3mS",
  "key23": "4foHzQaE2s6Gd3VuUToqLjEnVE26hCpCfq9VPbH4aXfR5BogFoZYRWQEArszmpXJxm1AX7MLvLRAoBhF7NjfzS9J",
  "key24": "45x8vxQ77pipTMJkTvYxYvVDju7K7DaDE7otwck5FHWCx6QSBfCA9TC4L1f2mbmYsU9FhfExdyANSVT3CigsRXJp",
  "key25": "5BwLJubGEuUzqUgLcQqUzewmfE8zbHVQBzeovvgo6dsJ5pfJFRCV67jo4uHi7qpeL3T3GqvQdR3QhDn2H5hfVyfz",
  "key26": "ARqU1wRtCAcGhw1E4Gwt6iNj4vV6icsAHh4iMWMQWWL7FXtJ7SSyW1pi7B4gBug2qnpupaFjiik4KXMxHEtGjgP"
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
