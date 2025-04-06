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
    "3UiWNW7tCGZKfErrA5eCsVM1C1oim8qDtzXHAFHFDhXRpcvsenmtbb8KddVrQJkKw6YityAjpYuvzxzBSJm91cD8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WrVCBuToSaZ8djzx9WyMHSXxAnKmNWm4KG2muJe3gXLGWXHvRwrWEPo8QFBeJPHqajtLnDf8os32d4vstFZ8Q8m",
  "key1": "5oSkPNGewU4EtWV3Sd8UoBTfcL9FJsDUALwd3qinGqKWw8UpYq2jtWr8sGAHnpyKiKQuMpTmTpJZ7iZwXb7Lusom",
  "key2": "TMKywvikGgQF9WDxgvEXKbgfwLkzhnbNggtBJqKurkmiKMjDdZh7uLdjoxx2etLpb4Nxkqfneyeez6nuqmS44nL",
  "key3": "4TqcsApKgW9wDRn8HKfBmgWCLs8cECHbedFZPjP4CF1vAPtZkz5J6qwpXkCPDaDkZB6mFZcXVh3u1UMR2wsKLv4c",
  "key4": "4ExYVdFHdJMUukYaMbsMFwhjUppWUCye6dtbMrTi6e1mEdvUCFYwkDfuSYampwXEXswCXQ5z5SEiMa2qiYBedkgb",
  "key5": "5jgYasTGuLGWGE21P2jw4xy6pF1eCa2Nm5hB4ixXXMk9CqAmnok592Ue2TYj4RPho34Ri2YNBN9trr8haC3BkUqS",
  "key6": "3YSeDviuLdQE2MC98XiLJpbBU6pMFJCEtJRuhA79enJPFpdCAbjRQoJjSxZp1o58Fsw898AdnGKxBcKVh1PmWmPd",
  "key7": "44R5k2GJcMGMSpH9DmDu19ZBZBLWFzDCMtdMTxpMaRT3cQ1bqag4wNBVneAbEvEijWQb9aHXCWqw2cWDNJmfD1Lk",
  "key8": "4up9sHKRPdpYDso9q33MiaRXFxQvCAnWV4S3oQWg4saS1nJnYJmaLdHe8AA6BUHcNd1PoBYtDy7t4jG3mmUMQRzJ",
  "key9": "58AhotiwWQoh4LkLPZPNF8NgcwKMN1xuqEdd8G3xG5vDFVo8NUyuNqWLYXE6yaNuHQUFgstjCzzFRU3ZxGhRTuqD",
  "key10": "51EU8NvTbXxpRsjYq6DfLp6fda6i2sF7FCMbNHgRy16p4ZtMcvr3ZtuiC14UKoVwAZYqWXaN6LFsyuk9aX6z89JJ",
  "key11": "5Ua9jqd73rruDSr9mHdUHM6ptQ9JKQnsZomV3JgPqy2TpaTqLA1FdwvP7h8sc7fM28FRZDnsjkkCTdsTHP9qmPbu",
  "key12": "2adEe7VUDoNGM8VqoWyzphEszCbE5vGMLBX4h1fSk2z4jKJbyHtcDSA3gu9Nc3eujp3u9sqqLGGtHVvU2tsJhLP2",
  "key13": "4S7UDMKCZr1EAZ39aov5mdVDSxPrbzThQvyyNfXLx1zZyNvbxZPisrA18bEcpimY3Ku1qjGqU9TwZjCQRbgLTxtd",
  "key14": "4eKnvnjDG54kfEbLqUUdUKv559SD33qNksahDwit2nbvp2nKSMh56ddYmVh8ZtiZ8W9YpzKnd8japnZ8FpmgDKqb",
  "key15": "5KK7fc975hWio52jd27P2HHhWoxmuuK2FjtdVi55Qte2ann1Y8RewpXvRHmGAcyc8ZugsSMh9y8Aak43XHo1a1tP",
  "key16": "4XzXQhR2iE8qvB74PHVBGdQ1iQG9RAEszL29Q18eRx115NnSUDp8C6MsTh31Wvr11rNDZE6G681NPthvcj5yFgqX",
  "key17": "4fQuC8ePgKVu2keXDsYVyPm5TgvtSh46AFw3bCcmhMHGybY9s2pbcMv7DyJMC8322wMU5yWS59Gfgt3SkzLaooHh",
  "key18": "5xzg9sgpHjdYjDUt1uDfB4AcqpdXvAURBqy6Fk7A1bHbApkh6pRMadV5oQPjRPyPAGET138TBgh9mHpeJi5BTTwV",
  "key19": "5giry4Kze4wghgPF7fBV4EdDH9ixFJ6uQ7XLrcwNAkrPQR4cvNgMYA6hu5ZjzZAo9NrZ2EtJFwgPkSPz6t4gSCY7",
  "key20": "p4XiyKqBMnom3MGrY2EgRtvErAghiwZyzdxJUVSWWXrWmubXXAMfFvhHsypC9sMCfQmDGqm12DKxhktmAu9yUQy",
  "key21": "EHSPMVbXAMYAPSJ7ZU6Ug6yBLhzvEhmX3hUzBku67J4b2sFwhnLc747FofotKFKqPUrMKRnK2Dw9dnFDcz5nMf6",
  "key22": "32UDiUdfPBavzRB5pW2QkfWkHCTq4Ab9MjmZ2yTLDrggnvfuz3GbJFUBHuShdHiFpGaESSNaJERmrp8eGe1iFJ6P",
  "key23": "rDyo5KQdnGEiFM72WNunpCMKXqPJzscpUDJwG5nFM1ws7JpvfReaJnn8k1cwRyEwvXnGBpBMJGGkdsAdGRZUqy2",
  "key24": "txcXX3JxDoSuqp29TgTLWhnGAhQBoexWVckhBALEtfTUTeHUYSLbWvtSF8prDpFetJHPqyjHdsTeNbTUH1jFn3k",
  "key25": "578avJEXgWdBFvmikNuUPE2y1VV4EHZrH6kGoRGWEyZfLBoRqsuBAqu71tpdv188EmtHVFhvCK4ktcAqgnRqNFfS",
  "key26": "5TVqze1s7inF7KLkUXNWhbFpQUiv6ZdEezT7YtxY5oeXRvCJuRnf2AkC6gc9Wzg6a5qpwVgDQ9NLpSNey8kAta6D",
  "key27": "5fxetThLzRBdJ7rKWtL7XSdfQvaAedc4HxMSPnTa45b6jY4EjJbXtGsxqSGg4bMsQyZJFCVyd1zNyJsTCnNstgKx",
  "key28": "2ZbpzrJyDmdVdLSNDnVJXp7LZCyNQV8SLMQu3MasT7xMnVsAy2cCQdHdvuhLKUdp8aC8VEXjMbhzj9HYHZu1sHSQ",
  "key29": "3UJjvsmQnnYVHXQ1YtgGEo8GAvHWb7chSSs4qZQbWGGS6Et7cNQzthhTYrXFiv7id8V3auD5pRx8dS3hT4xK53mo",
  "key30": "K3HRdg43U26Ykgd9wyAhy3GXNo4j92YSJibyhHqS3Nm191hRbLByG36ayrfi6LapMqbTRaJpUF64Ye4MvVj8GMS",
  "key31": "56U7diM9fuVT1D2j7MLpUo7AmBhMZwn7gnaf8xmKNBS1Dvpu1VjbtMeBDjhhpsrutf61Cm6X95tg5BfpzaPX2ooL",
  "key32": "4z68EKgvxgEg7TxktbTaa4uJjxojxFPF4nw7eAAq1hcuiR6C1VodVjGz1mU8X79xCvTHGvxCuXsoR4wmfFsjxy4d",
  "key33": "4ZCRxD1ZtjsZYJLaxGvDnt3fLxvB9PBLNgTvcEJU2DCQUrhahL8KUg6WLcrAnq23yvEwzojSBAE2CS9ECRQWF3FQ",
  "key34": "4tTWSkGC1fmrda9iZBCdgmN67NFJRK3emYjRvu4h48Ki9EqKTdZDVv2d6wZYtyLdjr3DzRuymLH6U4VWsv5SYhDR",
  "key35": "2JygaBPqUULxD28f5kKkPzJTiCSc4SPR6X8t2SqLQNsSp8Str9r2t6RfEFmHGtkoeAxY7ssApDGZ5eoZzXvrtMQa",
  "key36": "3FammvJa21Hrt96uWRSduVvrTZEoVj1qnjj29vqPFyvsdpjKDzqPqpBD8Xti19BnqQs5bAcWFqNZujCeBMynmCfX",
  "key37": "2YLbsEBZugPP1UNcNGB1M3zQB1Nfnhai7WQq5PrCpoYY15wVji9fRAvMLRDiqUEDFxoWA5eUEMpgNjHQPfcsgNua",
  "key38": "5xyM6wCaw6GZt67ZtGeJmvw3qjggdScjPrnTdM5nhuX6Ujfe2XkxgEdYmxS7Zbo1k8Ly9oxEpwNpCRQtNBV4XVG1",
  "key39": "3Ugph4zZssYC58f1f2qCvVdG6KJGYs87ZMkm1fDE2KtpMhz1HEXrw3KkPyor7fprHkXBrMSJijkEwcboCJGkwTVw",
  "key40": "4XDTHcEW8WH5amHTicdxuTZaMbuskCD9VZpdaH5GxoR7ejtTvu6o9RTur9vUq6FJCMRGe4cUZLreJ5sYpVq6vbgm",
  "key41": "3GZ9NN1xGmyBTbXmJdLtcxpcumiUwYTLLVcAPFqR9UrVNKCf5YmNtyxA1KBcBoazxbjiEutF1A2Q6XGpH8KN1KN9",
  "key42": "5U1SfZy9JrK41si1YAT2EMbjG1Ardy63LH1mVH5HLsA7x2J4LzFazXNHJM5mDCPScyNAUpSoNE5BwiuQrVxiNWQn",
  "key43": "jCPA3v6NdVaKbzH41SgG1XBjn7otp173L2iY5MJ5B2xufSH6eUtUpxFzQMTrvny4P2oBrAKHitSrDSJGcBvihF9",
  "key44": "42UjZRifxt8CKharyR9CmoPDTLLruCdHUaaLgUx63gnkUByZ5PF8cZwQNcsyifmE9zKApWMNfkiikVQaUB8GykKV",
  "key45": "4Pcucr2QEB1Qsc3qJX7GDuJWetWKVvydSPJockQeWGCTseqGWu2GashAtEJAarVaHVGxnfhxswUCtBEQveNB7QdH"
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
