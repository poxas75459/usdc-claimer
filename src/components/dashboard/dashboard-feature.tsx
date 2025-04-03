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
    "5EAnXKU3ChLTSg22hNueXYqxeXRDZtVAa2BXTfLFgq4g44DFp9E64nCR5b4XnmcgYUeRxAqPBe9sL8YXRv1YSLer"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "J9N1o3YR7K1ZR93WNZP2ACLwCyFx41vBfdm5nfkRyGpyVwVgtScwANYdVUyPed4Sqp12K3Jy6jb2LhqMUepMMZo",
  "key1": "4KPLadMB3ASyabTE1G7rMG4AQ7NfdxryZ1c8gZrQG4hBzeCiMvRe5rdtzUgo9j62dZjyoBbpaMi38tyhVFaXd21p",
  "key2": "26q9UK9pEqMtczTNMnDioLyYf6tPh65ScPc39VVBAvbsCtFYStnfkUwVCdUa43rdUnLcY87uK8wTnXysgp9FLw6x",
  "key3": "2NWAfERjUauRQfi9D514rwSU9nDxJE3cE53hcFmSJ3hTk4EWWxTr12giR1dKQVjMvMmNe7qKN73pEUzpSVWGrAVE",
  "key4": "3P1iSSsvpiwbqS6fLh5A5ijodxt6spPB5RqejfX74aV5spQx1YJVrZEKSyiaiZVqBU6QWefVw3X9mu2q6VrzJp3m",
  "key5": "VPH5gCnkYyp7BqrJKGXqayMvpq3AM8mdWgjmi1XWhXv3ou6qNkYx71D2UDphWSsgQwMnwAsLKaPRBuGYb1WFZW9",
  "key6": "38wqLCxMKZ1D73kG7QeRsGurrSHjVVdWozLUa5ULPDP42kEVhNegyBue6c3mBjfRc357jAsa6twAALnE3Sz5LiKv",
  "key7": "5j5sd3HNZfcMzmUspDtTqpg3qoVa1VpZu2atRhjmJkkRvFJ29uoDg2hV94HwRW4hRzqLuovEYi5mfLwjNmbv8Dmt",
  "key8": "jK8wh71Cg1LV95meY1ed7wAWteTacbmfQsVsG3JwX34qZAYAwZCfvp95dN8bY7Kxkr9yzEF4W5VeVUfk7Co8C4x",
  "key9": "548LH1BY3P2J2BXyXk7eeUGegJxsvRya7Xc1UHWUMU9QLAwhx6D6uXwNPz9GoQBuL2RLXQZxwaoNp3Fi6gSEc6py",
  "key10": "ZfxGzQj7N37JquhMzG6461cYcZgAQpDoJii7SU6V97LfdRbdA6Qjnj6ri4ywSLuMKqwaLEsfprUytJZv3LHGjz7",
  "key11": "3YuYSEdgDV6hLpaaqBhq13ud9G8iM2EitQvcdG4eHRUC3QyJbKELdiKtWXSWXv8X8QdnMUsnqYdG1NBTrBsgQfS3",
  "key12": "3oFsghN6NZS9mA42CHCUczQ9hGbSMY3XDwoHjwEejv5D9Z2V5yGL74U7pYAPfayxxUNUvhKoPvAat13mfYZDsAMf",
  "key13": "3nNiVkMSna4ckkjCsoB4yrP5QrZps13F3xyQ4ZdKBCp2FkCtRbnNNA7P4m6wPAWSsUaQaEC7LaFxHU2gpKU9yShV",
  "key14": "bzG9waqFFvbUFaVXTKuENiYgE9YfrbX9S9RPRttgCcfy18jXYj2mvQQUrw1wV5z9cH5QU3zpm4wcbibHwxtdx9h",
  "key15": "3To2cZZn9pJw1RfXUirZUcEhJVH3QWDCrGBHnH6TGpasEWmoR8wFGXnp17Xv1LKa6bCvccGLddZLtQBXVJXoNxjc",
  "key16": "5AiM69Dr5BtpTi76BvCGkwCr9vJXN8XVqzt49oosBTvffpjro3NcE6oUVYniDQ9BtJ6EByQsLLsTwvxjLif9q5me",
  "key17": "3yL9nKnq93tnrT9T3F8UUbjRpLh5mmYhbmB7D8B2o2Ax6LYgQwBtfEDtQXr8E63bqgHTw1JBMXqqwrb3LHRtBuCs",
  "key18": "2NVAHmbLoVzz8ykBfJzd4xQc48iWQNcWSqDX4WQ3W4H7mNcBdYAvNJo4GFd6HNos2fvmm1Nwu1zGd1x8Zt2r3T12",
  "key19": "3NiiDA7DzjtjhdrS4UZD3Zg9dpmotCLbnCvFLuNhbpvQHypBm2zGuMbT9qFRvX2XrctK2qx1rewAJhrJ64mqLzqc",
  "key20": "2N6tcWH1DYohA4D1BS7oLXQRrTFsVucRKithRNDFNZA9HZV5tS1E43xq1dySZ7zrCYkbMtdN8CR2fmhdDEC3Ys4N",
  "key21": "3fsw4reoEYje3aZwyNnUpJxwuXhR3MLHrxvYjrJJxTu6RZcVgE4BVYjFMXb5FXgPQMKxx6F3nzyv9sYikjJe9hZv",
  "key22": "5Ayu2j2oLdqiAcRv5Jxf3RVLAVJbQqZctZ9SdZLbtMYiajXhcvBAaNnjtB26qSJN7XAfwsJEUUSRTmJohR92tbcL",
  "key23": "4XKmcqxNgcuWnPPw3idivcYM91Yzu8K9mPQjQWhwnsj9TBtMrQ27PajWTufkp1YHNGHfvx1TXkiG4UrezSVv4HLU",
  "key24": "221UW6NdjUc2oq5ECU7g9pVSmseqdqhMhCpRBnGyiwaVA3g792iWKgo7iij8LM4MsWX1g1dN6UtpVC8rcR5cUukc",
  "key25": "3NeegpthuG8b2aArX37BhcCYiDDtgQ8iRnBft5voCEyD7uXWQzWVxAywQURzV3mQjrzgztSRp2ssC84B3VKci7uJ"
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
