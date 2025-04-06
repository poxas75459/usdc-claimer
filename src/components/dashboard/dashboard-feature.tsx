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
    "oo6ZyzFteQ6LQcCxx73PyHiFH8GCBLzPMZZjVkJ6HyiEtYVjQ7MEywyBcKTXBtawDuShWro4bHemGXcxNuU94c2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FnfQ2ysr2ucWJgfq879p1wnQnzaKq3TTPEoQgsNVq4qsPD8L46fWbfEEGVnggLGzK2WfvqMYSRbUFRfnZSN4i2",
  "key1": "3Kku3cvcnTccqiVbt4J1QGvDd2TD9RiR2nV6oSpgM8taiCpqvWHrteANiGunJi9jWbxgCPNF1VP3nK12k5K9tUSh",
  "key2": "3K7CMtF91NXcM454ZmMjgbUfDgtqoKihfRS57wz6XeLoDrQSVbyDUSdcanW6fkFZMcUnWChHZrTzhnPChQ5HDfjY",
  "key3": "3CGn4MWKhrDp5VZF3W1pUqt5Uaq32kFcNH8u7RBGR8HpBGCzFgLjnhvR8uEMB1gesJ7jtqgJVjDZS7aCo3kTV8qx",
  "key4": "371kes3vXmTsDKdPNTRZqumwkQ6LYXYUTFkswteMGgULZL38FiaNXp1njH4opxKKZnAiVwrS2nXHJtjVyqCCxcPM",
  "key5": "3ocPSSkuzQKYTCR3F9WVzFtko9JnSpUrKyjLSjSszu7eBhmE1XYqsNofKWctDWhEcguvd68yNAcCs26ZbwBWmmf9",
  "key6": "2rkpR6zasxfUtTBPMRrTjNUsKMpu6ortXBKdEooDCQPYmc5jFQm7ACicCojw4YePxxT9SWXtNAtts46FWRLSvw7W",
  "key7": "2ZgGJscoFe5jtdT9zxpRp41S2Eb6YXAPqCHJBaa4G23kWVUnnThmmMRHowrhVumsjmCB98D7KC16JvqmQm9TRqDo",
  "key8": "57KtZvo4wBMaZRoMcjgeuaBRAMxZFMSzDNmfH3QnANjwpRzUZsP4BzFVhqGq962yXQ8upVj2Nbrx6D1ZhU1VXDti",
  "key9": "4byE2KuVvP78VndFT3bvD82BR46xnzgpTwpuMAAznDEe4itkbmJB77V8PbBDFfCzqbcG1VV6i6Hqxj9LwvNGy668",
  "key10": "Kj2EqzpKgVthZChohPwVgu5w7SZiUY98jd63TPg2UvQnHpQjycprtXqkF1QY788k5vreVEEjyRU7rbg65KzqFXM",
  "key11": "679Pymtf1FXSXEvJxj3iARVFS7bui4dSHVso4beYrwaBKj7XKRfaofugpmp89kSAFUJ6vsV5atAMSSxHpviH5yHC",
  "key12": "4FXkuju7bLnZWsumr8WfsVKTHWBxt8aB2YbTPHA28qm7m1thckromBUtLNmaXQiDr91hLHuwf2g4kfAGuSAQuQUm",
  "key13": "VYDdyk67qwmcrWGQeaehTm7C1GUyPcZeYMrDEyvncN5eVJRSwHJKuZgmANtjEo4Vk1ptU7Dr6ZqYrnceVYqoYFT",
  "key14": "3jjXp9sEhz82EXgZve9ugYwXH2tHQHRxoJYZqe3Mz6wiTshrA7iCT84iXP9kMs4sQRXU73nnstwexq8DYYrWfxLa",
  "key15": "opd7AdxAgMwbsg4CA8Roq6w3yAFoRFDJBkzuFksYxuNNrb9EwhAvADf2eWVqTyJsbCvjKdiMSRy1yXuGCd7p13u",
  "key16": "63fkUuSZxNrJXd5UgmhNcC8Vugtx8qn5nfsT8YTTQzqBQFDDtCXVABXccJrASFTbBih7iPvhLdAkinwVbUbPQsDd",
  "key17": "5rHu9ybzWQwJGJJvJuKXvAfW8wdAgBJ1JxMdFmJ8Qq2fXthyiqGJ5TEr6DCv6jD65eLBmyYDRZ3byULLBPeUuhse",
  "key18": "EDsd5ZoJ8Ew2CNYJCJFDuwVjxLJNvqHNvAoFsVVeRBmB5MyPpYGoSRZXNdsQ5eBnfESyHBrMnze5bh4BnKCeSGm",
  "key19": "2htDRCG86APPk7CvYHCyvdbkKJ2m7uLs5p5bx2PpYfGed5Fim9iL3cYvH2fGHdMufJHp1iEHG2GzTZvjLivjXdKx",
  "key20": "27SmmhYPxzKjm2ioRGLrJNjCfR61fF8cG69F82QgHDsBsejiN2rZi9FeYw16fNdmR6BiLcnHydbrZ5XeZhagVVim",
  "key21": "5SAX9umqqgNuRNFLAnvMsqJoZV41vLE4THpqipVVaqHFc6TDp1eqcURbjsD5wRaoVLUrBM7xkcC8vXtqNC4f1XN1",
  "key22": "4DwUH3yYb6E5FvSGkfmCaAYavKEj9AZNZNsfMRzLHHfSQhLRSqT8ogAX7i5AH3BokUhWiZPQ1XsS8NmNDes45Whc",
  "key23": "2yEsquAU1bvEZfzYerxRSqTBocFrqBQ8RfBjTDMLvQ9ggJ376iSeX9JP62ksEbQbcJ4ownYmKn4MgU3Qi8kHjkQv",
  "key24": "Q6CW1skLMe3xYdeH5i1JJDSs5uzM4RN2NBQp7HBQL4u5AHLhaUEMVPe8ZMyvKpd7eDbsGmfqM8WmzbTrAF177L7",
  "key25": "4ZFkwzX26paMxMSWi94mJ57jzyBZRzaYtEah7PUKZAp4kVfdyruTVnnA7r3k8jUfg7WUyrV5Zsy9r4vpw7iCweF8",
  "key26": "zDPbbwQmhYhwEhBMu99gThap1fKSWqBQDAsozVKeVK7ksXuiN9hhk8JfExzWiPQc4XKZ5tdTSZECY6p2g7CoBRm"
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
