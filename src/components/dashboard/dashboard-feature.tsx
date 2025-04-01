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
    "2RfzkgLG5cxhdDtsNiZ8Q5YjYQcN42VdADANuRUepgKFvHyeFJBCFUxD9WFyfY4xcxCRkitaSb9iAwavVBQ4B9VQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hJhyU2EwK2QGb85oafyjPsmsea4p73xWxAeG4B7NvUc5BY1UkqtPCYNCQZ4XPYsAQrTn9CEdjvHPazqiyySeGZC",
  "key1": "5XR5gtpppxL1UcnFnMboQ3p8gCNNeZUWoUXnDv2Df5Xii2nMLMHLqiCVx6S1dT7qS1iB6AnCt2CApKc8USi3kDUi",
  "key2": "4PwpwYrwfWufyF4TN3F5BkTFRnDBsaaCDaPb23Br3yDn44aAKgqeEkQLHErJWLHPDBZtAQqQYh4oLXWwqkdywcMY",
  "key3": "5DE88dvmJLJY2o34RLKZpoTKZ8ebwvDcYZHwFfaSxowqS9BVnm3sQnFhzReprsZofScZSqxJ2mdPTF5zgFhakHbA",
  "key4": "5PkAHCz3XXVcvZf58GfQ3wqswDHrE8xg8SdxZaYMM6S4qGEKpUj1kzeyL7WDCX9GKMLXuDEadFofro57n5efez2L",
  "key5": "3T9MEhPjyukCNhNXRxPrjRoMgryurwBqNSWt9p9VEQaMHG18RGG8N3vRkpehAnRR5E4azQFQRKrDB4nRXKRZzPaY",
  "key6": "5F4iuvodeuVWF5Th9bJfuz6XquvjVQGHth55EzbAQaUXaH4g6twcN5gQbbuh1GSeW1fJCXyCrM2aVKAJZkEKcVCw",
  "key7": "FGXcc1kHoJQZd6Qn8VoEgRor7BhhKyZRWsX9UtggdqhaqHokQ6NPQdYUjiZRLMT32357q7gc6GAjvRZoj9ZBQja",
  "key8": "mQ6Hq6TVUUBYmaTeKpzTCoDuCT2wUDVkwiBWXfKTCWVYWsVGwow6toXHEXc4Msddw6QrwsnrgXTLKgC63mVJnpz",
  "key9": "46G31s1CGHqD8Thh4LC58CR7Pm4BztiiYYTm4hffr8jNexAhEEFmrmDWXkLQXF2wFmHRYai3H2uQbJC3gwjFqVcC",
  "key10": "95vzvNknsSZNVKHhnGJpHUaAYmTA9xiMSJu7YeLqTkntMkzaAP173ZgEtcUYuJDsWHqDPrwGBwUmi1iVd5h8tGA",
  "key11": "2SV6C5GNzxZqAfEntgZunVrcC98cmGaHmdsvwnAhf32aikCck5q94z3aERxKHzSJ24yW4bcxr1ME4EJCm8FU7vGR",
  "key12": "4PTKTy7hLdisamwKmMqNSTZAwEUSHrWwUV4j9iKuMo3h4NjYPvuocBQswnQ264ubMHbtBbvrpjCQV2nuptg9biM3",
  "key13": "626rNRLAK8Ev3cwd4rQapJweD9kCA6Rx5NH7cXHag8vkgEuWzbTNppKzP8zSHtBj3hCKHiFe2zG1fLDoDtDT7ENM",
  "key14": "35zVL7YoZ8h4EfT2ZAWCC7H52q7aV1uRVgqYjJ9DALvHQzetguFT7wXNnrh6Y7sJLJLHkTEawJ8aWTE1iQe8H7MY",
  "key15": "55U1CZ1ePyw6GRRPn6Z9tbdUdehmcTVn2aYUyuDNbHR6KiJWSBVh8N48jnENB4foHBZBwq76rbfMzxfLpN2ZJ6f2",
  "key16": "4KEBh16aSzs2C9tgib6UDHm3A2i4jPnHS8gcVxMZCWgBUXvmrPxhX5gCpWmjVxETWkEVYUqkjw6pufidhXd271oF",
  "key17": "4hQg2yAgzSxR1e53VAXidt6x8EGQR91BwSjZ5ejLmMzgrEmjBMBWMDwDriJCfX6BdjQuP4Ed9mp9U56jWWeBxXDU",
  "key18": "5mNAocA1i8Z71hWPD5egrKfc8kna49fLHVy7oEupLEx4YX3LQEuNuRCinRYtqXBMvrHGchFn793f8bCzBe9ZtuGh",
  "key19": "4r6w5H32rnoL5tieno2hR498TGDfwE4dT4Fwitm3WQZtTf2XkU5qS1eAgSqhMv3j1TnVes3jupnv8RFRwWhQf6Qr",
  "key20": "3UnMzo8mpjW57XqXTFgckibDwv6NsA6dyzL6EknJQjqjC4Z1aLCfqm4yEZR8T4Ni1HLSCJdKgB9RRyXjvZz2w3Jd",
  "key21": "5Nmm5wgc7HzPmiqEzkxgooA5GfsioWKxhMxR8PBJhYPQk3XaJEdUP1j6c1AJj2XZg3iPdP1rUaMCWroVnBBmhFZp",
  "key22": "3ZYJ8PG1zwhVhGJcgwRP8WaPQ4LHzBMizok3WSHPoF7agtsnz2fLvzasackNS9k85CYQBA1rVBsGp9j5C84Lo6it",
  "key23": "2J5tV1gFY66sTtocYria3NtgZCt7ssgHJt6KEiXW8rnRvYfEDkwgDhcdqfu5LybZLqTcWufe5CcdmLUKebZSXNVF",
  "key24": "578z33rtPJiaRGMNppM7jjbWyxs3RMeat88XXryoopenMxw2j2FZ3Vgj5XCC8KqeKcrTASZyqozbJNEMgQKCJASG",
  "key25": "38d2XmLLopjyNCoSbYpkhneXXYGwoYYhFfdumFd9yB4FxsdTSJYh7GrWbnUovoEe56Q593XvoRkcuH4TTYrdTWGX",
  "key26": "4jd81chFbDVtNKV7mRQBQi62YfTNbBWcEK9vPafBngqVMNmRJBxUcZspph98bQmV16bLXUHCNtZn1bXWadLiqX7j",
  "key27": "4n4f4DQ9crMVz89CFYYZ9L9MzYm6s1fxmMATVEjp1RmymZcY3pnGrFmsq6BwGvEgJd9gYWbbMLknLDxCSo61WYY2",
  "key28": "5vqLBKi1x1L7YGYJZpQHtoY7LxFeDYZy7M4ZA6V2MSPkioCMGP8y49CwrLBSZCnqgvg33RQCuyLdG6jvaAt6JM1Q",
  "key29": "3FYq8X2pvGTHsyCDAhSqRnToTFKnXJhyuhpqPzJWxBSYKak7cbnPMZEGnXAsnw7AJxWZoSseGCbEV1pykGN3QXCg",
  "key30": "2j8BV8cYWh5Vp1W64LLKyXbheGWaVyG3QhYFtaGyE2LM12ULYocz25xn7DBWh8jGUNF85GJy8eDNrJS7W8xeLkvz",
  "key31": "FGo7ctGANaPiJmCzQLDgqxbQoEq7Lu8FwH22Zth3AMtHoh2DAdJnqLSbLyLSWpBNz8qyiz92SrG7E2QbipLPxdF",
  "key32": "27cmoKccNKQ2VdT9cHG8g9wUDjhnGgZDMKsvYxkGtSoh4V6bBtqypHGFV5JpqdkX2aUoDwucTqdg7m8h8JUXnn7f",
  "key33": "3U9LhpYBpvVb16ygKDb5agub2a9wzU447xWn3rszvtitY7gNCxtYY8fhwM7C89JCCfVRZ3Y43PWpA3Uqn5vEWFR4",
  "key34": "4VSz1sjfW3GSnFKQpxHRF6xayE3do2wRaMJ7W4kzrDF9nxhqGxaysb5XGcqLnDaaKCrcyRv64Eq6SWxoKE82NGQw"
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
