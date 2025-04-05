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
    "33SwGKhRLnEuY21NCe5pA8RTyyAdLuuGP1r2DCwAr6DwPGSbJFkVayHiZ97s8fycJkyDMQW3ijpiEFg2iRXN3j4J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PbZaXMmJjWMsj23CSuq9YQnf6HcCEjCXDoXwbRSpJzZ3AQr7TVFxedBCuBdA8GSNG3wS3gYTefxyxHFpnJarW25",
  "key1": "3VjVWDF4Z1HCWD9kwRhu4SQ1yH59hPRFp2h6Yr4mvG9urG6beyxCK2427tB6QUSgxVtfX2yymaBggwrWrDuxGmLd",
  "key2": "5eYh6PGswgHfSZvZJALm2H31efLwEnmGeKAvjfuqUoPUUChnwuzEdscqmYmW164qwtkf5dZ2yjLUNx6cdtm2HiDB",
  "key3": "3vJZXuX8Koz5dzFkqDgGYu9pUTaDwDh6kGjUaGfvGLhPBQMkBCm9eCYHeEMBTdeVRU1wbKJrMJPpcZ8sQxbMX3rQ",
  "key4": "4WA2nLQFM6tEyYiYxFaUBJwE3CC1EWr99S4CvZvdoWNQ42wvf9yQk8p135bZ731ge7gPryGtKv7J8Veqy7rg9zuz",
  "key5": "4D8cYVzA34etJeGfhZAZkJ4LbcdJmD5s2DSoGcQaPXCyJ9GCPTiNh6SDTaKexedAQp6mmCpEC3crWdZ7JTH3YLrr",
  "key6": "47UzoZcB7ab9YJzVjcHtEVMm8GfHZ8bzmPrLH6AKpWTVwadP2xBcJ5hWAxFx2v8HiBpZX3MbVB3iJV445WdFnJjS",
  "key7": "5mtrSpcWGRm3vqv6xTaB6hPYssBrDFWXSYjdG59eym7WwZipaAqkbtP2zvwrKVYAVLjqmK53A1X9GchSPtpVNA9u",
  "key8": "2vNGYreWJvUFE9sAeJ5HEbpwmx5wsJCdvsYm2JswQ5YNq3SaZcN2sBbtcgPCjr3t88pXg2bRBvv6AAHtXNQ55YW5",
  "key9": "4WPwJ1jkcuozryqxh7Tr9ckHCXurtrChr4wYykzimdQ72dx43B4HVCLvpta7DfjGz9SQnNEhnhjsJ8kjZutsQuEL",
  "key10": "5pY5J6j2617gukfKZfqyMUHusCtfNRAC9vBKFNKYNR6r9o5tm5pi2ZfW7hHaiFnNkAnH9roxHb5H82MnjeLC5sBn",
  "key11": "2YiuhU9YVjMcze8mz6V4GYMpyW1juUJa8c4qjV6fj4TjXb8XMerTbshAv1XuZHYpke23u7bFjcjF9YB2QnYuhWx7",
  "key12": "3JsH5PJRTNvFr5neFsfY9ZqJtGQ18mThNMgAr31BYHkYJkaZMf4asagzL9Taf2a2nmqxDMfupCcZNrvesN516Jw9",
  "key13": "475fSnhpWzxo9hu8tddoukAhh5bzUZGCc2qYMuPYyunRPAUeZt6rbGvqdQXLrMcNkntNsPGmTBFeEqnsD1qJ6bk8",
  "key14": "3MGoieTMqYYvW7N62HYXxMZZLR3ZT8t4iKMSLqk1jKQtHAeiNWH5nDDZdC4bRJEiLhHefgjcDuDnq5ekofnLU8JC",
  "key15": "4JV5dE4FDSPfjJjchxPr514Wvf5mYmhKm72fkM1KrcKBydLeThUe9gSrjCwH8VT1Xx9j5G9XLvP4UqicvmqUyfR1",
  "key16": "254158hhv5SPJhus3nCukm9W7WZvDnpwBFEzBQZenHd6kVH3igduax5F5mo5C4fEFDpzhPm9nMsqG1tRXoh5kohh",
  "key17": "3KA8Dy6sYaURpPZGKaMUSA2zCJmfyVh4AsVkgmuEWdhS21cTfZqn57L6cpLECqLZsS2fWfjfJBygaCTq7K728xch",
  "key18": "JJeQw72uEkgjkEDwijLgceYts4Ds1nrcX7SS3qfdNPyZaR1XDehiDys1TNpDZ3KCyaRpMypneSUacCMfXLsPuGk",
  "key19": "3AEG9bPeUDxhJRwPYWDFN41Zn1v66nP6yHuHHjtUymuzLHoCadmG1detMc5A6SLUDCcioHRbTSS8mbYTx375PZcT",
  "key20": "3E1MykfKLvzSuNoxcK9hgYe3tymWCcm3H5hGB7P4TNA5KrrB5sknsaEFBDZcrZ1pKRCYv8afDYRqiDYBTxYmUZxA",
  "key21": "2UY9eREkFAcu7axq3dasP27n1cCHeXP8sbnkEkujDMqnzUiD2ypwrmiCmNNhfJ9aaCFbjYYTnkzXgLAt3stWirsq",
  "key22": "5KPDnvEWmWZ9oXkXrgvMESyjuVXB1AZ13Agi82DZoJnMWcjUApBwXbGL6hz5gpmWK6P7p8grjFcm4sWV8oCUkx3z",
  "key23": "2n3enRFrfwxB8FcUEM6BSVPhFJaJmBCWhz55bMSEuuRwuXCBEjTNfSHmXGHXS8GQu4H1SnDdnbqefpuSNpqzE4n2",
  "key24": "5dFUVNDPRZz2ejq8f1rsyhimFhBhSYxQbtg4qNrB5XDoR6Fwx47nTBujnvtgeZugzAmXfMiWjaXYKFsgMFNDUpYT",
  "key25": "3xsnXU4KHF3ynZZ5VyiRv5jGQq3U1h9tbgHXFNYzU71bz8fwtBKs8P2oyErK6ce77Ypm5JCrP3xXgaQaySRd1Z7S",
  "key26": "47dW4Dbh71kSGTw2dCVzE9ZKQ79qMUxE8sJrzgjoXaiV54R97CtBQq2Vkgkn7mEyadGNcGp5h9Gd55jrjy5iP8qq",
  "key27": "51jTy9peocABCihMWySy327kXbKETzVSeY83LxAkrWDEJNm28aKK3GGWqmUbBwpET1X7LJmCSuh5qenjuBZkmByY",
  "key28": "5pQUMqitxiRquHuz6ZZCEWhah4obDN6QWKLg9SbXaw6gGYGB39AV6EheGJgmzottL7vjCZRCZUhp2UMiiPegnU7H",
  "key29": "GDbG67LzLwpyR7A3Fu6pqq8Uvi8yH7M3Xu1FJsQon2HMQ6CGJdW9mHNv3vUu5vRHctr9M7umeprP1XXdFPuMfHN",
  "key30": "UZhz8Fsae2zqefALbgBzrs21g68g5YabHhtFu1PAoDiGP83JmUevvAXLdMj78JR5TYBeJwgmCoVKNGvtCNPkQuW",
  "key31": "4LDu6Rw9vZ9ZdT3qZ8Vu8911dGp3UUhCL318n7MUgLsW4zFXnFdnQL51pPpfwujWMnTn3PtcqWbcv9ZFQ8kXAuXG",
  "key32": "y9GiehtSMssJUb1SxTyH4tusoxLRnq4CinKKWVeV5k95fo8aiHWiaxCfFFw59XcSq1fHBz26jiXdX3SKQ1EBnwc",
  "key33": "4im5GGhBchv4Y6GuT3nsLBQ3FJh42qBa8Bv7Gr6jSXCKQzMmNprwmTsJa6bUYAyjjRowrDk4vXSaCTEKy5r2bH9n"
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
