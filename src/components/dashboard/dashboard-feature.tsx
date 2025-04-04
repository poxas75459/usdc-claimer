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
    "4xKtHr46pDRn9eGrCtSCQWTbnGxEgrocjFLcWLgBuWPkaCnhBByDjp1h9kTfMR2CNo5L5BpccmfLMmtHVNG1zj4b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55SQhUSyhdSWmUjQoBKfxL5ziXpizkiGzVKEh7bEfgTmUTdaaXCgQgbNrj4V8VBrNwZYAccpx9hVKQQwKkWj9TEx",
  "key1": "ZG5WGqHUv4typJBEhMigJ3sSxGtjQYEoCUp6sJA1zCXuneHGKa1mzaevDfSDgHuq8N2iSHWehSzjS934QDRTfJG",
  "key2": "2uVFAnUJpvJoKeQpUqgrfFPr85etv5hHQT1HFmHmH1oGLq8cMawTXMvjjyfpLNsmziV1hpxj7JJe4PoqBNWaqtZY",
  "key3": "3jRBY9WG8kuhj1hYj2uWCvcBWVaeWwVunRi2M6e2BNQ8f6NqDTYY2Npp6TniRFK72oczaK3hvYiqGKffTpzVLyz1",
  "key4": "5oUCaqagQvT9RJcL5JrtXc9gdpK5nuzNM4P2USWSDVXtQUgyxBq5VM3jNtJD7g31spNThBf3qH9ZZjdrmEM5ozzR",
  "key5": "5DYVthumH6XNK9UYbfD9Z4F1XaZ7aFhas8hYY2jCuyLnTGGu9S7xpe3gxdnaqW5iJ9f79JXgcBPupaWvvSydGx8Z",
  "key6": "5wRSS6s5K3yRLVTQW45MED6RewayZQ8sXMrTS3LDHU84WR7RPKy6YHgJHydcsxWvtmjr3hrURXipwieaNMAnwrcY",
  "key7": "27fCzXVH1kpZMSqRJyqL3NK6j2b7vscwNuAAr2TPwWqfRbZewnkiyofMHaH39bV1fYJoVeaQY8DPXLnBrWevhYgB",
  "key8": "VWvxBaxBijUNdCUwHA4sHQMLwttp2SsFw3TsZqToVpPC4if89zHZpwmEW4coE1afg8JcL1NCev44JY93UL7jHEf",
  "key9": "2fYTKdnf3R65WtnHKqss7zZinbVW91mfEd3HqbbjHkYPUNLHp4qvM7tzPGkfjn4Dh3YpHpQEg3iiUFR8MRo66CWJ",
  "key10": "44iAqNbGRuicP49aAq6p1ZvFz9XdaYwhfW8P5F5Bgi77F9P5h1ds1ZtwaR9UMXZ2ksq3oqH2CtdYpPEhYHCpYv5U",
  "key11": "5ymERJtMwAEu9VVjwP2TU2fGPbdhu2dN5WjaopUiBwMbNtr8fQdc3cF4zoSwVHjwNv5yJJkHpKEVd6MPvvXhEnmG",
  "key12": "3yRCc5ZGYdzZuM9Qsdh6AwSQBbnZjees34PU3fNaaJxgfK9abdxd4crvVLDYaG3KhDCxER1r2T7aLj2WBRejkSK3",
  "key13": "38wPbjtLfkN5TsPSzPCch51WCHNh3v677mLn85EmwD4cMFqixAkbbWo7X9YmEecgmcYmcwS8nuCd3tVWRRMh3A2p",
  "key14": "RMHB7NRgcxHBRx6KUEsnSSBh3NEqJTi2choWmmN22zoMbUZmfBoUXWmzBUpQW2QPLL6JW7NWw5K2dohzMJNwbaT",
  "key15": "2uGC7dTLpPGQX3AQHhiEEbq6D2HDnVMPPrya4MT6eE3C7LfuRQPtojjFwWu44XwABUg7VNGE1jWjgZCt7D2VLCQb",
  "key16": "2x4yb46DAMcqM4KTxjWtUj62FvwG1VG4NF7D5NW6KfxWZBmAvmpvQ7gXZtVrfB2zJYiRfaUF1UeMpoTpxjFi93U5",
  "key17": "5wUaMiJfQTXwqaF47wEtDDoU95EdkxZJfcfbbhz7ET3rsrVGTbi5VSdzAhyfFPuhuGAozq7iDogQ6fAETuFvvHSv",
  "key18": "3EcxDyiwxUqAQbmtzfEh3kZj9ifX12xa6HBEihjvSMMah9bxEuT6q5crwUWcMnyTeNaYSMX5nsV8aXqmrGin4UX2",
  "key19": "5oFikweG9GruBWdNLPYH7KZjgoLRWuJJ3oC3nfZqNFFwXCa7E5FGrduyotHkJxHnw8Lw47Aiq9istk1wVT5bSVNf",
  "key20": "3rBLA2GcTpaF3Z5rVye8gcnHvVi8MPf2So8nhujFDNGr5Hs7L52kBAtfcH2b3WbbQhYtBzcrqbijEk52xoUB38fP",
  "key21": "4GJpGtgsiZtbAU9xueKaVDZAFMtcX6axFA4C3hsJ8tfxasx62XMBAdfZahTLvKZfpzMDFky7czQKEg628UjdVU17",
  "key22": "4GqY2GY65yoeMUSXwijmvpJbzbdDei99k57vHYZJdoUAqU7qnbmdoFzUw6eAb4d4GYXyWVY2MAsTFdRUkqsrki2F",
  "key23": "5bymXDuJjFXiGgtTJWL53W241oSmfZzrLtsDhtB5TCUTi2fVrcLAKWeXgBHb2AKzc5JdpmsWEPtVKEDxKvJzLTfq",
  "key24": "3YhBLpZZBwTtBaa74r4JxHMfj7DafpvdXnSkC5SvPJNPeuW4KCKE5jmY4SdPTGohX8kW3bvcH13uDcquH5q1cq4f",
  "key25": "3m24z87dSXXG3iP6tNTS6J6g6uRR6yPSUnwy5Ewbs8oNAL5q49XKBnZTUtvwbhfMExxCwBkkEfjTuV4n2ApAJMjT",
  "key26": "k8JbXiCRGTp2q4CnHPiu9i5CUah7GyPmpZGZynH4bECKUkfvmGLG7LaPp6icRJmtKPvizpGfzUAaxK9Bom6uJbe",
  "key27": "534NzcCfGaRGkQgfaC4Ezz2ks5s2kP1ZNxZcMGLcLd9gqM24bkq5LAsHYBVLa1ZmRUgoWN5GYwQpux97F7qzZXgW",
  "key28": "56ujBhG2wLTg58keedsJjd1WHTHfpsp5wGJ1JXeaAX14CLiZiQUF5snnxTTxBMef22SaQ9D5mamERWQAsFLJUtBP",
  "key29": "4LXqsUqUQqLHhzJADyVgFrcUNEo6MeJnCWwDLwiUFBfH3h1J73NN4M1GJkbEvbNFVygyup6vZQNjv8UmD54oLRRH",
  "key30": "W1aXrqzt5nfgdhpxHNk5pmoHCRx5Rmb6UMiXgZrGhDErXDJ4AU6QVEg6GAfixD5Et9zmXt9MKBQoTErd82i22S6",
  "key31": "5cn2LqvMhMSxPLzrYXUd6YPTjENbgQKKTocKUa5iGfNRG7vBcuUimUzqqn56X6c5NkLsKcQfwGi2TpD6gkiTSxXq"
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
