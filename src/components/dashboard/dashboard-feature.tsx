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
    "4Sr2qiVyYD5d9i9L6YGbFBYEz1tcaAFyWxXhiYbJYj8t64XotNehTW77rwVh4pnCtcLHrvvu93NLNCenYDjK7gCR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NQXztdA9CqngMHH6o8YqDo8hqAkgL79Yu9hQXkjTvKkdA9ubKzmuLf1SC4A2DkcFa8h9V2cXi5AG23cCHLCMboR",
  "key1": "QvHEkFMZL2hBwLxsyzZHCn3HeMZaxFhd95MASByWfcU6922Az75ZLwCwF3JKiPqtrpGfFAY6NbcfNkj82wukndp",
  "key2": "4WkiURpS9jqwaoUFCoRndCyASZRCDgd9C6MQAQzC399W7CsYDymXVyPFke9QxP1km8zvvnZMAtiRNiZURTVyxhdU",
  "key3": "3m89fLn2znww9PbRedQ8bHs168W47CT9LDhLsvN1dMrHGjeo1oHPeAg7mUjii4hp1tV4ydvyFmfFkNS4hC7L3tW",
  "key4": "4C7yyeLoEH785xYHQvdsbnuvytwwWrr3nt7gXq6CzsgyA2YFV5G4NQD4FyW1sc8Jq16QA9xRUytjEbYJyhuUCTYm",
  "key5": "5wJwmcgXqnKFw8xGge5VsFFYf6GLn2H2ErT8DWnKaNBnP2gNBJYK9xbMVffCTzDnHmR9Cop6spb7Y3tK1u2pbqnX",
  "key6": "5xKGgdE1MQ1s7myxpaAjXzRChGqmfxqCoxHtpicxLPnjvc6i9uDmoqa4QQY9enD2CQyAfK4HD2NRJgtLKamxr3z3",
  "key7": "4cWtpxTsMJearbTdvS3BuL9A1nX7vUFo6L5xbm3Zhsw4uLPzYsUveVTiwpLHPHLKmxmDxzm6UBHYyMWry8ZM4nXh",
  "key8": "63cbGq5ZKTHr6RxPt83BPZh8kErGUJ4y8sFVEmM8WnM8YxZtwUYPmL9sBXnQz2yGPqppGmZ2fb53QvjPi8rC6MEw",
  "key9": "5kxmTfPeKvfdUNiKr64vtDHsVzJRnq8ZGtXz2VmMQG681D6aDkUPk7DuGok8zN8BJf2Ey87cDwj747wLzxKcXoRH",
  "key10": "3HWrnjUsurQD3p3KjkNpYNpDdcPoNXnXNaytDD79zr2Vo7aj1Kf28MTf5k1qtFFwVMfGidAvgFJS9NqEfkQjPNYa",
  "key11": "3o2MZWVf9efdWbkXydiJ9XVoNFqZSYKGEuc5o3PF2iTJKGuDTYUPbA66dmjt9d9XymV7XHUEpA9P5eL3Cjr6Lgvb",
  "key12": "2PeZ1e6JAAxk5JHRNPamzGyWfNNpACf763TH81gveLSXjjeWRLLX2nTTeiWGBUb9zP9PCruGkJcYosvFGSExrERP",
  "key13": "22hC7crVidurP6AEZ84PLEnPizqhaKG2teMCjT62GyAwhJtNP9WMx9CTaQw2FFfWeFiHd5sWk9Vf1zXzfXX4fX4P",
  "key14": "4ZeoX5Ln2x8XPvjzjSvWdkpWN1qVyHzY3ce5vnS4r9rMUdoYEmuFw5RQo1AxeyKt7c2HjdcF9FjTpzMTkjHw9jc8",
  "key15": "4y4GpURAdsyhSfhh2vtu812JpornfdbvbDLnbrQN3RhGSnAkhyqyWs8YedLQ79oHMWVZDmzKx7RbuDZ71iDusgTG",
  "key16": "4XnQ6BiZ4CxaSykAFbVU7eL38yHNhjLDpi97rUND8qvpU87pPQvZHMvj18MG1W7aJJhiA6G287YPKQz2DA6MiGF5",
  "key17": "63oBGtYwwQM5SPwvP78JgmXGu9JX4iZMdsdabwgL3vtvXQcWvHbCotcb6oFs28j9n4QxKx4PcQVeKt6NzWkfFkkm",
  "key18": "2oiUHyyYC2W3t3RRYk6hy1jUB2XXkKvhmGCZs6UULDiS12k6gn3z5LQz5PzYpZ1bt517RMg4qAFRZ6NYz8P9srTA",
  "key19": "5CfpMWvDXGSgtKP7xNULCPcKf7Fxsq9TBoJv48zDZmCVwqJPbzj31JrREr1xqPhVggjSp3uAPku8pAFiKH9iBnA",
  "key20": "3gWH2q5eE8oDaDuyzstLTgxGUfDM1tZDsYwH3szKwGvQh4WBi8TSLtYqGfX3rpiiZqBjAnfBnAWCwLsXBtMB3H49",
  "key21": "4AjnYCnhe4n3vDYdTaCzdEh5rgUrNK7iBPjVDyLkfwTSJPTjcwBXZamGREy7UpXb2cPPyk7kgoqT7cZDFaLJoYCa",
  "key22": "fjeq24BXVrkJ4yByMECnqU81FYcpRMt1aHNiZpaYk58Y4xGmBj6WBEnioyzNpTBhqEQJoc1fzVgS5nB11FVBJWM",
  "key23": "HTgvCLBXe9GyJdQAiPDE6unytXjJMVrhL3hidAouEkxF8y3bPxsqXPSHacRfTEh2xBGaE6WiQCbKm1gNabJqbZH",
  "key24": "5Di1q9ndG7EdSiUj9TSu9QYLLPaeoBbcx6YdJ84yuFU6tntU8CuR2y3AN56kuNnbBs3Dq1XQE4aKKMDxLJ96jt1m",
  "key25": "4Kbpk1rrSEvJAxn8cMtngPGvFV9VUyVofsGqLpGPE71eSgEW6wgUNeQFjipQK3cxekxrmeNQ88sHXknbBwYoTzNc",
  "key26": "V7nNtLMCLgr3qq9f5ohJNBfhoeqZ4gsfbbSgYRWA7rzq7VKgrbqxhFPr7j7Ztb3ZNbDMbxeCWj4DXPzGvQypzLT",
  "key27": "2AyEvpkLV5VyfFE4BJohVnvDp62QKiR8YDGtBxSJVUhbvpFsQmMLgYKdHb77ZMttAEJsR68RMY7dt5DYHzeqFUki",
  "key28": "3b8qdaYyzmFQCr85kK9WDH2jPej3EZJkczsdU18rtXiprdjnhj4X8TjebfLmPGk1tnYHxJXL4zNpYdPT6ESwceQE",
  "key29": "5dfjFssqE4mc7XvdjpwFooGNxegf5wCRuH7V5adPpErPTMUgTgW8DQHxKhukJpdu4biEuj482b8CTPixfUdpeKp7"
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
