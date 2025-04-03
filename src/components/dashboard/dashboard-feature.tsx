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
    "4ExeuAwEeGCAJ7L2oMWmHUaPFuHznjzRFN2yAVtDdAn4YWfJcrVZfcTEZYKBbGbUzEawrVUw3L5QhaG6FrjosyQ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gwbxzELtyvcoQembxztooLazECy6sxKMMU24pVwW3qYtVos46jKXqe8gT6KwN8xUvAGGbmktwnZMMEmprMgUvAJ",
  "key1": "5K32SFFfgGvmwRr9ksTvDWhSQKGDwG6bDZBdibtcanNBi2FovSfxBGMjuUNUJFB8Q6opznVCSoqp67R9hNYez6G6",
  "key2": "364JTf7JS9Ax3fu4X8SiLEXxb5JcBpo4Lau64Gd3rRPhSgcisMrcMaYaBBSoeb2Z89GPk98XQDNDqJiM458qr3ht",
  "key3": "2RVTc9Dkywg7VnTMMhqSxMCL6eQkzMNTzrtW4ez4kDibAGepmEEG493Eikgmm3GtzHhon9qYDPmcPnYu8UkF12Tw",
  "key4": "2GiK4Ro9fdpTk4bDmRWK5ZPXttPEQkgtBCJ7Rv1foMvs1smDeZdsALtNdTo1ssBdtUyq5zziVqus9GW6sJqTgzbH",
  "key5": "4qwxeCZo7CeM4PLjKCp2RY7GD4FEzbqbGfW2Rem8kQNumYQ7EuyfXDUNAzQmZqHULuhwfCSD59UH71XL4z4QnJBS",
  "key6": "5w5EP8VNsz48kvmpiZtPhVspDKBbhRPKP3vUtMAnnd8QMzWAX6yM1rN6KSG6eZUbLdTenq26fUr5tZ2uWjLBGAp7",
  "key7": "3FqE1gqGNEZ24LmF2EwDT75sciyQ1bMcLhuP6EfFAyaSxHeL5RGv4fDiaYQu8PWfyB4UqxqUTxikR7BbK8jRXR4h",
  "key8": "33k45WftwJkMxsvtn6s8nF9Z7k5k9BKpcSyVfNjt2tZvEzRy3qbJ3aBNJuJokn5CgWKQVVAa4MZapLHEc3eaY95N",
  "key9": "5f7ZEdEAXT8obW3PqFCdUzN9qFYwBe35HcB1jRg1EXtaU11BtpFfZgqrHVVBNp1u7V66oke76bFN3FCYaUA2BFg1",
  "key10": "4xnvNyTbxNrZ26GrJaHAqGGaxegrx1ARjUbTYaNcEgmtm53coV5Nw3asuW7zivgRMQGtE4FCGSmQaMXkvEcv7uzL",
  "key11": "5maKpbGS1QyHiYE5gQPnovK4JyibLfPCc7CZbEEQsysyMH5LiU5zrTjqbpiwemLVSA5Qd9WPAEofSa3X2gX75kKR",
  "key12": "57aYqoMbswzaE1R2ncF7ytpZdNKdSnnPpafnwQ9MxmYV4yJcnUBsLqpJbPkJXXPVi368pApQ5KaMQMHf8h4YJsFq",
  "key13": "wsS2pWTpVfHWncX5PPPDW66Cw1hbQkWYQQmgtXGYEHBKY9JMVrh3tkZMygPCpzqE6xf3mR9znSktFMb5wgsRJBB",
  "key14": "eukkFGqvPjEAEFTekkrxDWTzH7J1YoyeeM7LWNFx5PZitoks8tRqCxx2MwQkzJU26dobmgoLfV5XT5rSSFmZDa6",
  "key15": "3coMesavuqMKfscW4TqMiVUmcEUGpBW5CjbrjrJTJ8QhdsEmLzFDonJS47NLfXMQqLKEsZVGbVr3Uwm8DKdCWzzk",
  "key16": "2r9mtDtqMpEwjjtRj7Mwqn56kNKpxXytanPFu1Hc1UdNpozkQ5hkFeuLk8ZmamLM6mFSix9qbMHDqx1dqrDKwSV9",
  "key17": "5goP1gyWi4U57D397nam7d8HaC6H8NRHNtbWtGpFb2ge8JqSjw5h5bxsfyTPJL3c8VqjeQUPhQjPfNirDCzmFooM",
  "key18": "3Fs4Kk1FSvCw3VuMWKgCVhvQFh9Z9M3WvvK8VHKe4aU1YE7V2d7Qmr3fxvzntjDbDgqiE2QbsMkcr8ZdXjwEFPMs",
  "key19": "b9pT2r9Kg5iHrZHgB2WvMGNXDTuhZtwd93XjBmWt46Y3qC7wS3wRSsVZxU2Z85oAKkVUaf32nsRs5RAdyWWtY3y",
  "key20": "5vMDDwJYQ5fVbTAbiBtXn7uH89v2omUvgQu7g4Eg6o5w71pgqT58wty9Yy6mD5YVtEwykTHqZNkYN6t2SXRtjL3J",
  "key21": "M2JAKHwzE5G3AQopQHEdLd6FbN4tcFTLTHXi5W3htFoC5ed6gjYu15XNCjQfUvsHKMJsv5dANQS6szsUmg8XZpf",
  "key22": "yqA9WQ5zycbAX2E1vyNqcx5EY1viTtBzRt1JJ1vTQpRr8sNLKqig1RbJhG28kBfbLn7zpYFKbv4V2h5oxP2Eupd",
  "key23": "32SZvuYDLLWvFvWSa387fSvkm3uSYxaFbSCqPCkvw9q9G6cD9K92JJCXZU3vji4RDwT6dQoEyshEYAyxcaBL8AW7",
  "key24": "3fHGNZpY5qqkajyyoQD5A4uYnrLwPHsw1F4tv4Eu37za2Ra4GaJDT411DaZZqd5nBj9eig84uepyNQeZ1qQ6qkq",
  "key25": "3eLeSZ4NAnqoGSSwtfterYJkCYa72hMmqpnYdgMBEcqb76gvR8opD9CDXG2JrTpJyYnazpFHDUwGGJAeUDcCxeDk"
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
