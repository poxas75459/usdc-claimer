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
    "5SVp7FvsrwJ1XCFAcWwF49Ft6N7bweG2aSJLC3yh19nRZgRZfro47Xb37b9WBuukMjmZq9a9i9eQTCmexqySK2mT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KY7mLgDkFbPBvaVEsCh73MSG45fGESiu5dLdtKSMMgHBr4FTaz4vDd72W6trob5E6v3DZfZWdKzhCGNjsFr7qKi",
  "key1": "7MKuLWmP1tybkV9Q1ZKhcDZ5jMpnQpDtud5WMcZJaUtTEf9fZB2Ftsp6QxUzYmPxtz3TvcJAuSzg6AcRQJr45Nv",
  "key2": "QhE6JJCy33bZHKChdsgwAMdfYN34HSSj2mZsyvooJHVezojUvKcBxbLFmG4tEiFfmgeXTmzvpvUAymt43urnfuT",
  "key3": "mH1aqJjinrpxmcQYF3w2sMBgGY5HzWBfL23RsijNPMx3nPx7GYUvuWHKQRWgrifmtPzTzR1tPdQYTaxyneGeqSd",
  "key4": "4VE3uN3ZDuZHvJfLaX4LVKZDsCoKyqDsof6izuzEYMXTEKYDwVWTZ1asDisv8dPvcB2t9ytd7P3Xy9DCZHp7YUMY",
  "key5": "3Vx7Fan18oXhSYmciRNtCxAq7N8ag1YRtWYtQK1sHaHpCxh83V5zmNYcKCsrcfUGp8tSKYAfpnaT1PPTdjR8Qi4f",
  "key6": "4VhCYxEnFyiCAMawfqDv9jBD7dFgaVqeYCGNQFpgT2jzszu1Q9hvMEYhoVU5WuZXtiFtBrtFTnFvX1SgGQ3LTaJ5",
  "key7": "5wMVcFyA6jpdrRAbSU1xSbaVcVKVpJtRwjU5V7VyjCTdqRCfqT9krPSMS2S2zYEmNfM87eUZ2mexNjmtD54P3g2V",
  "key8": "478c1rmBGRfGtoiNzTALe54EsStA4rxYEBfRnx9ts2hXd1JNx4i49Vt2BKeFRvdRM7G5PNBwt1kpUj8hiZX9SZAA",
  "key9": "71UyKhmjp6eE7kKywxjjxgLHz9Y3zh9Ra7hXRZHFpzHuzEzgHbqAp7UX3hQuS9MwqiaYCn5daam6gnPT9cSbEaE",
  "key10": "4dDGWhW19cN97KnHox7vWusvCyp61Nh8NDm5Hjm3wY1xz7mtCwywmnSStXPzHR8urNjcpxghu413jxoX1oPh9Lag",
  "key11": "5mjqW7T3W5kFDTA5Ew1LmaaZowdXoexiCxip62wK4rzocRYDYmdB7GBR2e5piY6kWErubZxELKtRkEAeakhjLxTd",
  "key12": "4UEeUWJs6Xw5rwevg3emavmgnapS3575gMKaCEQSyXHEAkurmVgK8XRhfGayQvUeDFpgZkk9FVvTLkA3kftvzxKH",
  "key13": "Bf392EzfbkQWFSHNW32xvZBme6THBu7VUp7TYgTuc4GT3Cz8Lh1BMSALoTiXe9S4oyM4pCQ5GrkF4j5zshsS5dT",
  "key14": "4fFDEBtY9bdNBa2rZx7RGbLeAMNME1Vuv29wsde6xxBFSSCh1fXTp3qsXJSb6XcorG8amTfizTbkV8mEhRfATZxF",
  "key15": "a4V569wsUCKZskzp4n35r1cMQP96LPnBJ6bwqPrgCeqATkJNwTed23xC7zNUwoWJxJ4jQjQFKux2yYm6tZov45M",
  "key16": "5YYmvA9yqrngnyv8SvV6u8Hv5vYhWHY1qT6JaY7HEhsfCL4HrjJnsTEr29dxwi9YuMPkr4yax4tsArkacFKptpnA",
  "key17": "S4EUVUr8PZur41mHZTdJZbN9zNpcptVFvwkrvwZp8RA2sVSNmq1X2CkSVwSabk8qm5jhw8USsRtEdEJskLSbMSQ",
  "key18": "4tEZgmXDsx3f4SoxDHu2R98kQDLsvbNEXbgTBiBmvMZkpqq7P5swnFzKiXf5R95UqbCaT51kwQDC9eCLB7Mgkmgz",
  "key19": "2jJwZY2qZbXu3NybJCnWjw18aX6BoMGL5C5M7fJJd8m8wHpoS6zkNGG1oaZyWUYrtjrFPpvNDLTENKo585xUptFs",
  "key20": "4p21AJivxcYoPgWb36wGJiLg9wBTHsVhHiwCN7jy5o6TEo7sYrJ1tcgvrz25bE2AdKGXTdLcPFRsPLQ3Hw7qFTqP",
  "key21": "32r9ejPLnSDkPEaDzpFvsHmNqc7uWSD9gCetPtb2TKbuFcRLmVHc1W16MDaCUucf1bHKSCn7Kzz1QKBSx6e8mtYX",
  "key22": "2cgKGiDSv5R9nDbYKeL1H1Be69yZpWhfP248Mg8fuMF1sDmpWHmspqLqzJ9VfRY2cdUkmpkAWzVNTCmP71X3KEZg",
  "key23": "4p59yafz7nLVhW9bC8KubMFBW3zWh29ime2aYRx3Qj5DMqviA7q2FokduUMmf7fep55L2AUg2GXsxEoghkybijAV",
  "key24": "2bgYAogNvbu1iszqwo8AoLrWC1UfY9zMHHQL7JYRDqdCBzCDG199r83YK7HeJ39mJbuN8GWeGxbj9VLht8pyp18B",
  "key25": "4bWS8b5DqC8PagcZyUbsqXCAKH6MCHbpKWXqhGrzNetr8ai4MKBAgMeqcAi13M7CbPVzijmKQ8zTZEcj6SoqjGWU",
  "key26": "5nEuazwLkdwJ544xX7wSY3sm8fHVpTPuMJ2HCzYVUwimwXTzoa73jy418RaFeS3Kx4b2dWM3iMg1BoXs82RJAKM6",
  "key27": "YT4paPgsg7VfcTWzLHoWfRUE6y7kFhVd8By3LYmHBgfiic5cmEKwSqKuiAPvD2TUguanLq74cyyJDYWbhJ3MRz2",
  "key28": "33neZHwjuXZg3iBsxLJKY9mjkC9PzjaNR5FKAVcDZvV3ddwtAVJcYpV6Mnor6K5VtWP8GPNBVtymfSkQ6GiPHkh5",
  "key29": "3WgDXCiPVPpenSNzXyMtCxHRJJD5F7HrDZshZnji9Ky8Tum39cJpvKXW6KuBHsd6LuXzqZhLNGeHAdK8YqKpyXEQ",
  "key30": "3qBaEDR9EvdUbbfPYraF4Kj7eWeqkJ4XxdCzMDR1zEDL4qm8783AM8MTAwXPDvm4LJFkaV5BSuJLYNpxfQUZf4BR",
  "key31": "3ggji6iuggrvnNS8neCAgZnhHhHdX46h4motRZvhNzZDb8gEkaBJXifdx5F3gWoZbZ4PzVVbdCuFE9SNoPphUMTZ",
  "key32": "4Gv5S9uCdnU22Fnp8XdNu1at8f1mjmyADkXXqAp2UFpP7gU4F4HDMweXySVAvqweDZytznmnUPKuQaguxzm7Dy7g"
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
