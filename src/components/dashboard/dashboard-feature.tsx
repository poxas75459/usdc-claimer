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
    "3eQovKJFeAafi3AAoJuECEXT2UkpoYbhi8as4VAP9eLvupqTpasCeqKAzCZX9JQfoWmEgGnaAsovTwubi54pxYDh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ws3EVjqFESRVw5QhnU4RNc73Y78UMAHebAHji5ur4v2xPNDq61FuT4484SPYANqVje1geFw3YLx7xmwLkfCHfRV",
  "key1": "2GcAn4REuDny9y4aQT5gidrH62Q8gCF3pnb1aJQGntM1SvJaKzNw3ELMR1tJiELx1CTpkDrWxREmiFSeTC1pLp3v",
  "key2": "5NsC9eL2XRuqS4ab5Z7StYHHrERfeK1hEFda3wQJZiK7XM7WeELGkgJw1WEBTKq25Ubasu7nMZPaJaxWDNsVDnjN",
  "key3": "4B8JqTmFHiWLnRz3cP9k2dfDbQbejjqfVT3vLdFBMUKtAFdQafFjwmaSiR3kp2go89L9xVA56HbMNEXaDezN7RXA",
  "key4": "22zpW51y1Uu7hgctfTLRTR5k2rENbNF7gTBfekYtQdgUtbCQVANPvoe8EKo7WPz8oMZchBNSVzjrjAUJYQDXajDn",
  "key5": "3ykWR9CtADazsFvveGTZTXi6r6RTvDTFQgz29T7mmJiEzKyECJLZrdQtxKiaJ7CpZ9vrLkcp2AdKWv7GeDCWifU8",
  "key6": "4oSRwGLoUZor2B5BSg3jkZpVoG1eREffpw7biqUtSV1yk6TH9RobrGf2cN3deRRoPyNHSDmx7gqh2MgNTj9MLibV",
  "key7": "WjoxajJGMYihh7REdCAtigQdGrHLLpfBgXhHQyNDb8hahDjzcCXUKyBCLFWuYkYr6bNqUdxFjE9nu3TeeDEgG16",
  "key8": "5aBv29ut4VMKhTskk3TdKieNx4okJegv4fE4Rp7cDFhyvU5kdE1HcWTSHVwz57U8vqhkjEC2oxaQiUbqCpUWQNhX",
  "key9": "2Fmda6Ey8Uki2ivjt15D4gRBd3XQEVm3SmfFcLLx89es1DVi1ZMxARLFQTaF4kfFfZ8qLk7fYC3KoKFSRdTjDZ2q",
  "key10": "5KdcpajhpZcPbPsAcT96u4rqdiGe8c9v1NYHbsvvoc2y3P4jVCPfnDNkm9a1SnP2V8CZDGEHn2mYX546DMxfpEKu",
  "key11": "2yJzGDfXYHiWSdqFAwp9Cyf793ZVEFR9gTrgS5zRr1VNgzokmkrQpqvkPMSBLCagUCgKsGSPJdnwddMYdqBqRPPK",
  "key12": "67DnCxpYiULjZjdqM5kSGcbWx19e68J9P7Qz6VcvjDvoP6HMs6m6XnKdwPQ9adUu6Keoc8VJZdkDtsu4xnyq7uz5",
  "key13": "3n4SQr5qsMUqDw2kHuFqAs6XzN4R4wjExE2w7ZsMoQBCwLBmaQ8vfn5HWto6ddU7FXhbnSB3fmnsZ5Svo76eBS2p",
  "key14": "3cbXR6kqJK6V8q5hdKJW5k8weaHttg43Fz7q2R5mt2oser6paTdWEKY4WFLvxc7YT7aeTmWHp6oZRdkwuEBj2oQj",
  "key15": "ek8KKVLViGk9A2EFaV1hCXf92C2ifQsqMCyS5czKS5MVh3F8vD579EfDveqMqTF4YBieoNKaxK7sBBubLB3YyhS",
  "key16": "5Q44keTVup6Kc3wrjgWHoQZnzpdbJeBvvmgHKSmc9p3NrZJ1tAQy52J8MYcbnNYiTCYX3xYJKAAfKgnTZghCEetL",
  "key17": "613Em5LJutwkumV2uTUaqkZyX4LEhr2w1DYxaKrvPieHo7sMkLVdjT82E78YAkbtrPDCoQVBC898Bxdp8qQ5P5fs",
  "key18": "5D9nQqvShSKvwQS4PJtgTc5hgf79FCJoZa9qCVrUyxXU93NhtkQkZHPdkub9ptuLW7LPUTn21neXk5gGA39Swg6F",
  "key19": "4ooSRHpXHMnyPRRtgfoHduwW53dhczXiCbsJzsE1PufJjqEWgXy1KK5TEMyHwZZpccyGUWGLsahuL2Ki8qbycsB2",
  "key20": "2MFy861D6pzWHR8XCf6nN65tngbjPm7vspQjzTkWqzoEHxbd6utCq2KFCrPRHUric3xvxSFe4X7BArdaGH9KkP9t",
  "key21": "6sLyUkn9v7bUo1PZXfYSnU5wYpTSds5nBJuW9gPp5k1qRA1hB7Le5tmFErVXGv4bnDUUQRgUeLQkwknZJvmUWrE",
  "key22": "5nEn3o1mFyqdv5VCgxwZaVpUH2xNoVDLz8XCHqcokXvKx1vQkd1122yncvqjwzp1buivCZssc2ZMx2VpSBGe7U2e",
  "key23": "4eQJWLxSs4DQcEUSb3QEK5p6SQfGSCj9iCVPJ8c6EjykU9d728ZbrM9sSC5fkBhPSeQTc83Epa3PTTb91dJz48Ds",
  "key24": "ziJcMtP4ungF76eKjCPCAczoEvkHJkWz1VpSvfDpyq5Z2L85uveQ3ac54aBgayx9qTuwBjLYgwesjctuJH8LZmS",
  "key25": "8mh2mscv8kePEp9YBHXWpF5PVv1ULvSYyf6kt3iWtQLpyo8w5minpX8kKd9dvCrJFKYAa5ncPvRLN6bQn5PaA6N",
  "key26": "3J6JQBGYUaWNswiJLU1AUMBfcYQCa6VSpha4PzKXY4g96cb6aX5Lu8ntux5ypiZ81fgKwrzBdzLzE8dLe2DQKjZ9",
  "key27": "5YvpU67KpE3MRZZ4wE815dgoYUPxv4uWYKzy4mUR7x4reQxLHnNkqNEFuJisfVa2HtE7pDz59xNZYjA9NzkMQzPR"
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
