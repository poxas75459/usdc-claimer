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
    "4jKLbqNY1CsYCsQKdFHyyshMgfMH6ccyWFwP3FA9CN58wV3gnCQo1AgG6C3N6jfBrvRcQ4VCcsMMNrZf9RJn2REw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "384AHkqu963uN5xbiN4joWFrZ7kWCwVqV11sMCQ2HH7mUxfcYDRzVKj3B33by2LvQsw2T1H1e1DMtro8oRTnFhbe",
  "key1": "32fsRyVD1wEVcLW9BjHF37P4hjWFzoUjMCmL8PxjZqFt4x8p1f8xtVD38DQ2HJiib76cRAJqbmcqWHYomKHpTV6S",
  "key2": "3aQeGdTrp8LgCRSon3Wcimy2HNVHHTwNv9GwLm5536visbhRWfqQVYvYSZLnH9zqgN5fFAe1Ys2CJ6coNbdBi3dg",
  "key3": "61q4oiDx6ieqoUzhFKc2MVVEC5FcFiRMQpwxMRe4oyJxRSP4MC56Pbyrm86aVtk6BuBUT5g2CphvHNq6ZZavmLm9",
  "key4": "48jdGjYG26mgsTw3N5TbgWBc1qLTcYy1oBPhiRijLz1W1YrsNA5q7zKqKG4zNeVLFto4pvutF7SWdUSRVTnwUZGQ",
  "key5": "3EPMR1SmgeQVmyDmwgJkqTVWq8GWYyFdBAuki2HquanAUtFia1yVAgnzaDMAAyg75psybX2N4uhL5ftrN2xAGG7J",
  "key6": "D5yk7TJH6FUbUGaXozRkPRYqWAM6JcQbU3tvv9m6ggnougX4RFjtUEKVx2cnsQ9tv8sRgSySor5TvnHC8ZRdnh4",
  "key7": "3fSma2GF51fC3F4her24JXzSpkyjvEpD2jFzgTouLw61dXgTdyLrnSabqWbZ2Km74zaFc927Cdw3bQaSy8PAKRw7",
  "key8": "3pc9yGW6jBEeCGmbYLj11mA11gAnmFLbQsBu5qH2KBcNy5oc7LyCTUGXy7qq7iGKMT3LeSBgYLUKXjYqTeKMnF8a",
  "key9": "48hy5LcWMepq55MgqdWD7hS3y9gxEQD6g7S9oh7mr6F6WHL7MjJr9DJ9zR1ckcJyEtW3or8ZtEWDmQo2jrhkTt5h",
  "key10": "5keh5X7iENzsdzBzoVeHFPvQg7p9pmhzKayB4PxK7BeQuVmHmCs9vBNxE15fjCWjsj2FTim8yoBJtR1KpFVbiFjx",
  "key11": "4iTnKSiiX3Y2HGpXJz3KevacEgiZSnKNCLnMRnNyJvDz9nYYn8AKEFwupNt5hCHCxhdc7cHD819X7DKz1i331Fq3",
  "key12": "5TKWAjunkRZNzCq5SsV4AiXoowLZpRKWdYhZC2AVH9ieawHJi8DjodJv4xyhkTEsDgEHBrahNF4w17DBMZ4X4gCi",
  "key13": "oaNS9169rUZxHRM74a9U6DyQHVSdVcVpQzQhE5JfUNN3ju7cuv3fMnwkFee8YihMfcRq2UH1qw5f9y282NeBhDH",
  "key14": "66X4HkvjmDwDY4BDBbzrUS59p4d9MMekmenkJH9fe9QTVWD4ATtfe21CBZqQWQu9aWiejMTwBL1T2i8e6gmWWLi",
  "key15": "2uYDNLHuUoTHprHa9MAFoNZNMoe59fwyxsUzg37LadpJiHbuYtkNW3ZuRs9gmuHq7VEJmhHRDJkW8r5LxhXAw75V",
  "key16": "5TNPE9bWJYVfvzZVRxJZgUZ7MyuZnR1Y3pwaJQ4ZKzcTDHyWxb6gBSf7e3uBkZh1GXbKe4KVDZdAeiMvfLVpQmh1",
  "key17": "3QjrJW5coDNccYbfchGA6DV1DJ6Y8RdDcMh3Nv5B6TjzhorourqEYGdPhXHfyA2bggagcsVcZT8HhunJXrDY1wcp",
  "key18": "5QTbzeSCfeifitX9WoKQCqFpXAAaiYzu4EnE74dy16HxDKmng888XBW9ba6HUoby28KDKfiCa48NcV4DFySE2tj8",
  "key19": "2WQkJRKFzRqBMiYwCB8ygVP7WDMYbRihgBHkEroj55b7fpbC7A59TjeYD2z78HtuptNiSWgZnqDTCneBVkCuvugk",
  "key20": "38xUmg1MQAHY9CDZEqvwZJzpfNjy5RHV1jwWSF9PqrAANb5iVq6uJnrQKaN46WLKgcWHv8eTheztfThQLs9Vdqp5",
  "key21": "4e6Wh3kgve6DHj8d2tkBBo3H6ZJoEhonAJ8wtADssSu1zFh7EqA2trvqNvR8JMEhrYUCuNwcogJVMo7DxB3Q3qeZ",
  "key22": "3B5Tx3qRPns35yzL34JJPKxhPA3E6MNM1bmjL5PibNE9qEn6vTZXkJn4H6FkohTZUrzLcNgbantC5yr6qBETh6vo",
  "key23": "2muGmcsWM4ob74ezy6udnrk3KFGybMJf41aUdG3Hihu9M5xYB5n1x5rjAqm4WjFFJoyGM3eNTshgm5UyULJ1zb4p",
  "key24": "2TcJpAQonfLJ6k7ZGgsG2Wd3vh2egf9tMphTBUedKYGfBj4upqrwTmPNsd9pZr9xqjcPNGkssKpjPfF8Z3rsRpeK",
  "key25": "4G2KhzrvAgwwzQBCr31cUx5v9n1P7rAYUWaVN2Ud8Agh7FKwFxYbZ67nFDwy8m44pHXystrupzvfFHqW7H2yxzZ9"
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
