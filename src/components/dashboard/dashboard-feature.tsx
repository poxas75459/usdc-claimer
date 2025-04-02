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
    "4w1TfCbt56chE8XVzAArfBWJGRpRkq44MvtAe4RbbxMe8cFVgVoAzwr1DgGXNHHASRYrYJfoEypgenWGcj4eki9X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PBGe2wzb3v7wC61hKtXCV7oXYm6AcGhf52agMvi3dDxGQY1hxEansSVGrr9onfeEyMoBTnkoVQitv4fgzVAJaWg",
  "key1": "3WSczdkmWZTZVgqa8oQL54HxpQBRXKcrrUMmJ3aYPdLoAHDN2n6oLSqSNRJ1yWs8uabDYpKoE5JbfasYtHBfEQFa",
  "key2": "2TczCzALastphCG1t2qgBahQxG4koMnePrkkiEHiYLcR3YLdYnmfn7z2DKZ6ajnKZqaUwPMcD5jhFPNZrjAYAhve",
  "key3": "5bNxFsjhbPJihmqPM8dsVcDbGjAz7nHahjgqXnFFRXfbku68BMtHSfTuEGnVFQ71Jww34GhMDoAVkxq9Hiavrgbs",
  "key4": "4Hr8E8q8y9mSH32wgrJivu2hYNo5ch7xaU3GmsBHsMdJUBHLLeGCqnJbjsGHyKnS95peyhD92sXqpejW62zVeKwG",
  "key5": "3kLRKcZzFAy4TtefaqDzTinxwAwWwTF9JMxKMYsN8m9Z7iEUjJZDhhoozy7Vmypn2DVRL9n2VAFZqAUcAkrmSV1g",
  "key6": "34uEEEEWFgtcTVHnWxKRVunhijPaxCj3K4ad8ncVJZpZKbXk5vr6M95eW8KvdZG6Lf2YHDX4UPnP2Bb9mPF1ZfJf",
  "key7": "23NPvjWzZ8LcKuHkmT6oXsdVefqzWUxtvtHE1Fq4QtmXVq7rVxQTyqqaiYgqiUJTthfVy9bZN2k4fthyroxshXqh",
  "key8": "2LCoptcsMCKTm6C7pXCps673qq1iGxy8xRG6cBfbP7uV8ZBGkZvzHkRwnJSvysKysCe7HtCkRzbGXiCJBTUj31mn",
  "key9": "36ZvhaM82gKsP1rjiJv1GqKSsqfPu7A8AScNn55MXEutMsHQzqo8WGZPYWxVcRjJnk4e9ixiLHTrJGSPMRyGehtY",
  "key10": "5YNLjH52hFoo1KyTvaYhxUuKaj6uvTzBGwWtRc2Ba6Nf9QShJGHAHjZNWwV2jRNzLeTepcRjDqjc71pmvwKvNNZL",
  "key11": "3ifZXzzrqndEkwG1KGmBM43faMDLnC8xh6q4UjcMPBqYJxpAGmdc2tMXxrXgzof3MoFgQVFepAHd82cpvHpBystv",
  "key12": "5fjJNQLNdEWzyVR6qAh9PdEjULfgb4UBizdRfaTTNyra6c4yEFcE5RMGno4BU2EZrXZPigeiMGUAPVejChNmPcyy",
  "key13": "3zdsRkzcQgKxzMpGDFytxJXqzLiGAfRrGSgKBfacrYkikLsRHDCpXU9mcNkvrgL4KdkG76yTf3hmWNQ9dR3G4n5f",
  "key14": "2f4qxSyB8Lx6TQPcW8EhYohz7VCF3kbbSYn57niHW5uA6TJUaERTWxXDSRoJQx7dJoDeL4LfVPrvdroRRZKP1dMT",
  "key15": "4crrDwWBRrPgtWE8BuQ8vsTx9WiAwSV71m8no4U1fveicZqo9SUN4u7UaJTua7CqaCmp6PxS5w8RFSmwAa1zSrb5",
  "key16": "2Skh5342XSQuzsaT1t2HccPxmNjMpyz34XT7gLCtZiYuWCj61yjHmbX12iLmkgRZ8xq2KCLVMVSPnuP9B29QTv39",
  "key17": "5qvG8MM1ic3fP9JJ2HAweGboqbVzBSLd1EUZX96tbewbSZnJVdnqcRftCGJPUn9YwP5GceYuQukVcsmKnzRn8qsf",
  "key18": "4ScVUp7EqKnZsGBJf4LooHae5Yn4242rmnk1RPeUysFgmodiKWfA7Ck3M324bA1Qs7dWmBxz3FbtKwhrvXp5wXrV",
  "key19": "41FwokHHQeZvoLYJsaD2krX5xzzPbY7yUrjpsrz8sYW2T8yaLpSHMiMD5QMPsU982hxWJECP6bfvEXPttUAQTNnL",
  "key20": "5vZUMTNYKADiWLmAk62AUNqXyjeuWTR5i5yX9Buvx2PHDxhjqCh4mrEQUgpQnqiQGR7mozQFzqDEfZeAAUmc72Rg",
  "key21": "5XcpX1TV74trPtxN4qVPk1vDCb4bkFS2LbijLH2JtFnzstodVT8dYoF76uKuEiXfPELJdRwHShpmkpHo11sipqF5",
  "key22": "24u6GRraYuGCVcFxK8gbiJq4f21xit4ABb8wtJYDue3EhFnMt66RxkWwya3MsSWNS6hgnuVT8sP2VkmwHUhXJyo4",
  "key23": "2vVVnKDcYQPTW2n7wbqukkF84pZNdce2S6zG2PEiLPbyTPh2AFuxMb39QjJnW6WbY5BFCG4NjbhRXLQ5bTdSKgQg",
  "key24": "4fMuKxdJLDYfRsXkgCYjM4og9C9XeJo8WBzaVaajdyMysom9vfQeSm8QATdRxkpdRKTFzzm2Xvsc1G6nccH3dCT3",
  "key25": "38Kxd6NanAb6D7NwnDrCDUAyRUY78AAursGCmucnmSZNrBjCy1eus3Yx6RcbMeBmq5i53yXFiPjVa9h42RGdXABN",
  "key26": "Hoa4EYmuAp1qv16GEQDCKqnRphZ6RW79Rcjfu2di12KpDoCPHqre8HsG2z7UbgcSbH5ppuS7HmZbMK5wLYmujYL",
  "key27": "5TwppKzkDoX2fDZscvUuiRLvdMnp36MpA7xPjWaV29rUBp6fRXMPGftgYnVqAckG5sJ3KJ9njbKJtx54MSr2nGdZ",
  "key28": "65iuSFKqGbjQiN4353AWzsH3LQTTGQQSRQdesnYuqLhwHgrybet1oQeWnmn7pX7KVW68KB1Uc2r32jYNSqdLYsX9",
  "key29": "2RpqYendtxTzoDqctKczFXazZMH9a8wbKXe1mebL9MLvTfTF4Qt3TC4iTEACB1T8TMn6Rwny9R62CUwDXDdFeXxb",
  "key30": "4wyY5ycqutTCyBSD5abK8uEAX8DarcEVPddEXo42cdThBUPKQnGHYEPteVBmMAEKdEmbs2V5PNBYYqzg2EYBWbNG"
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
