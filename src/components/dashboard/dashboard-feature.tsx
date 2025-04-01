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
    "44NLrwRS9TRm3S4gtHBDx6Mk1PmmC7jztoxCPQUVWaiHH9atSF56wqs2jN3bJ2Bvdfok2afs3K1dyDQuhHddZXsM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5es5cjnHZK6VS9ahRcPY94bNBCGEcC8cidBtV4bMcpTdAJs35BJ6McDRtbhmBZC4EexmHAPpDHkEiKdD1n1zWmkw",
  "key1": "3rVAfSD93QZhKBKxAoKytqTZHNCprKgzUkUC5zqPJjLxkcUtq3wyhemFKh9rfBzDE9ZU1FJuw3JDu838ESob9VEX",
  "key2": "5exuV9muKGLab7LsWvyrvuYtUjcQonXkpD9EpN8em66cSffGApYiRXQgvrhogbRWVeBRKRD2k4C2gbwMZGrAmcKc",
  "key3": "2g38U1SBWjZERJ6Kgxtm5sRiHG6EaW9RJ3kmghpxfWGLuBCXis11gYhLMKGCBDZEUvywhWeWye83oQMMsTSRzB6r",
  "key4": "4Lp8iZYcGcS4zmtJ7HDVm98W3NfBzrKczP5wzvrcy9ui2LBNfgkwMLAudfwNLp413jrNxw3C2fVDfUpzXuANxAWG",
  "key5": "SW36CZJhXRnZnQjTxGXPkXKaRApjGB7BdKBABi7v1YzMpXpYoekWgzxe4zn6kRY9LRmMQPEa6cGR1PvXfwfhAZd",
  "key6": "54Y7fB9ML893MnPPXA1dTWi8AsFoxQoLK3gHrjfitVp84KWL3QK6qfps43Q33AUK7ePwtoisDFnnp1eHw7KJhgnW",
  "key7": "5M9UtWgDqzRa3sz9iiEyvSaAz43vX3zQKCby2P8fDwtmQF9xrN1R8jSkV1s2deFH59K2vA9QVgPQ55V1xSD3TKJ5",
  "key8": "3VHHtBRxmdAMKM6NoHd5MQUwtc4iCdG2o1eMV8adJBUdUjn2MhsKtRRVEZq9HmDscyfYSpb21KtoScZ6biHWUBHw",
  "key9": "nyXL6P7WGFpniUFxUcAPdrgXHPNFZUcUqtC9mgzLtN5to6j5K2eRrMxXwvkDwMcUr5tyLhAugR94mwGB4cpFPp9",
  "key10": "5ZDeSbJLLHxLxEiCT4i4jsqnWypezBDePUJmxU5dusR5AuhQvdYjm3Bv9m5EN8r3YmYKzFf7L5wGFncN9em8KMhb",
  "key11": "2e1mWtu78kXNvrjPBMyKqqNMPUs1m6H1Qs6CkGauh8avUMrjtd4ZME31xqjfFnQDxTjR4E2ghFddLo9gtE72BGto",
  "key12": "2B4knF2SskDwkY5hQo7yqx4YzLZmJ4j7FCWoipfXSBHE3i2LePHnznvvEJSLGYGpaY38oJ93j7nTzBugMcKMm7wv",
  "key13": "5jM3Kv6MRmf1tZhWcEWhqJ8dtvoGi6b9dViqaCWUs38Knp38uj1Rfcn28pHJTrQKZEebeH477cHnr6UYY6goozLn",
  "key14": "4aZyzbnR74uCuFCXWb2EkBV3NNruiKXUEHvcyPmWWFAcaE7wyja4p5QM8ucLFPoa4Txod914vmQoiK95tHteE8H4",
  "key15": "oD9rQSNu5ehwpeRjkTyhmpTxFwvpRw917hKWmLKiMRuFjQE3Gw58V6DLp1CVbsJPeXkYYJKJZV3QknDP1Yyj3Q4",
  "key16": "4YsuawxksW295wkt2ufHHFYRedahkbQPRo9sw7K8fXcD97TPYkR5Ew3rNsMFYUEhS2jLXrNupLHNPdzQKMgDfiw7",
  "key17": "2cP7Bj1Nvq1txBMBcJHUkuLbqdw7oPUB8wMv9MWpA2aTnyv2WtMxQ75eBMJjhV2gmYV4YihSqtcyS8zZFTxV4a9d",
  "key18": "5vyTfF2gwHLXNr5o4UH26XDZdFVXQWcbzUCzBdoNm1BiG69KitnkZBiZLyo3NMwFHEkF2oyksR3mcxdadCgitRV9",
  "key19": "u5N744dKSZqETQctoJ7BZyX265hHq66aok5Qh4kpTGMLmCGgy2ujeTXJvuv3ZooycujtvSPYeJwjv6gDT5BbZcH",
  "key20": "486rnmi74iBjUdgnrPfQKvkn7FGQdoLAt67G47ou889e9T4ozdkt9CAREbPTSc9GJCNEKBDqjES3eDcSJQRAvLNG",
  "key21": "5mhKKSftSXQinRXTiJJB2HqWcUZS9nhBFDcdDNCweuK2jsECXFkqXsRRKELyZdB5JLtx5fJcByir8zhMqre6Nxf2",
  "key22": "59cLUaBt5ykSf4Ag52jSZRB6Uh8x7RHvgdkMkcSX7gYqinEQnkUTU2xtj5yY3jEpUZQijvepkVuoCoCrPwo6K5Bg",
  "key23": "2SQUDDa8wE83kX4u3dTA8QP57hbZe4qSgzPmCxJQoj6jNeWXvENAzXNWdcqchK3Ni8xfBZW6uhsaK7YfHLMkfN6k",
  "key24": "243SCt84EfwqCo6hw3h9ctgkzjj4B77t4QhTBxy1CecoGSAQyp5m6BHtTYnXZ29NWPWyWTervX1UsJLYuYN6EGi3",
  "key25": "66qm214rrxdSodSRbLt7QffQNhGTykMmMdL67WRGYsf9DMMy6H45d21HmCfwQFoVcwofNszyAxKQsVya78uJJVUK",
  "key26": "4rdb2Fk6zfUbSwHHRNrvZh2bPB5xiuMqxNXNMHQ6P2KhFKvm3jeSW7CwRdyp2viFQQJL6QbsNKxbresknjFtyvKk",
  "key27": "4XZycZMdKHKJTLKLbp2jiXEPVZfVMnrYrfkD83ackJzDYcNBQZAmebxSX2VfFoH7NToYiYTCoaubvzzsnuRto9B9",
  "key28": "AtyGiKriJprFRxRiyP16AWKozmeuKxdxRZV1kpNcAKXGNr8fAQ9QUPLNiD3YChxMgRbpNcWV9HX4HkSVXXWXRQa",
  "key29": "3Hrv8QYkC9TvbxQiuLccZ7Y5FPD8gAgPVTd58QHXNxQahmUgnDGWuJkThXLyYfL5ZVTCnfLMG5Bwzj1N4zQzvKtj",
  "key30": "2KwLGZaETaKQ6Fya5U6CFK8R59BouZDYwhNTphiWDoHb1njdFzgcvjrEVdJgAGxBpAuz3gnar6Kkh4VvKBGz2HTF",
  "key31": "3TdZYJ7MqcRkdhvL8WxfFP9fMGRibVtpFbr8gtjWjpovnSQ1JoYDzDWbmyHLJeiLDGrEePHns4Vpexirbm9GvKNp",
  "key32": "5oV1haUjAzjmPMB8fMSvAgG7ShbX6fpfzWK4NQEosgH8cYFbv1xQGdR5AMzTNmcbLFe2TwosnfQz2W3JtvYPQCoF",
  "key33": "4yeFDqnw21BEqrBQ9wwVjeYt85oFtzY5761CG9CyujhnkGW6ZmQHbfz5X7Y92BXnenxk4jtRY9HjTX3sxT4djikK",
  "key34": "4DWMEe4oZrP5ZoycxwVVzmPtGq1G5TSuAoYLRsbnD61qk8u7L8wUKfC45xUemi45rux53YqXzdzunLkWpngGAPRr",
  "key35": "3kFaJVthNyGbtTBDePLAKcWkZ6uMpdZfVtXGHWo93C7Wt2brp9uLJaXU8rHEDsvywVFLX4Y3VabkbDaTcyUGPqeb",
  "key36": "2KrSH7gAqeipaw1g8wE5qcUAoMtDPZFnJf63MapkjQq74C1EWfNncpo1xtvhx2h6QbAT5K4sqUaS7s7F8TENfWr4",
  "key37": "yMtGGE57itceEBfN6RJksK8DZdgcNek2usxhhm95sK69vHnNLiokGnU2qx9WQDkRLGA72uiVhuGshW6peTFzcE1",
  "key38": "DAo7AxVXjos1adRkuAe7xd9HatUddzjo7esphW1Venhf8cVYYbYzGSkaSDzjU3RfMWr7Sk4XxxsNwFSEbJZ7cfr",
  "key39": "3c3emeunYka4cjn3dKfNxNi9H289vxhATeznTdKWYURBkeggXwZ7uto16DLpLTNFqwKpnWWwCAkMMSFY77nUHjG4",
  "key40": "sUnX9d1ZyEAUdFV5pwzzKoivtgiR6yNcmd2Pj9cywNwC6f8Fw3WteGrby2XQ7viciom4iCrdJsquwa7LoR2fDyX",
  "key41": "2o6AxY5khvkyy87HrGCuaWVgBNLXN6tNUCfNjYtbLupkAQS2ouz65edmWkzahpJB7WWHYthtDBfe4kFSjM7TQ1G9",
  "key42": "49iU4jmNZB7Ns3jAd7CsExhWF9V49H8zVBT8agnyFFQyY7Je51U5itNPs96G5z3UJPUF5D2pbWvBk8HPraQ6knCd",
  "key43": "4zPqnSPPzKXMykLFj9T4zkwdGJtBTXU34Y48q3wK3uTxJJWCuCKAc6LB7yZnCe4Vc8pnoReLB8p21pxjukzuiyqQ"
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
