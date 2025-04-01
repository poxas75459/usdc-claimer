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
    "3kCcrvAq9V14owqEf26yv4vncWGmeuJ71PSowFcci6UWqj5VYFaqmyEhVqb1Mtov56WLzSryZpNEvNNh3fu82H7X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5upxzQMcvYmAouf22AufPhAmjpQ1UdCE85WptXDSSW2LTnm4HXkgP6RAz8m9Pd9zm2dqQh5EA3nKWNG1sMB6A3ac",
  "key1": "GWK1pGcnPFqBbPqXRWT2TgFGoXoGikPuhkWVJGfJEfTwXjTb9adVCWiJdxNF8JyuCaMeVpLvat3w6B6i6qsDKFi",
  "key2": "29hR2K24gFE3YyGJPTqzZbY4wN1rF1qr6eczmJ5AHtw7rKEqzMfzxif7o7aoku4Qh1XqqZWxy6yECnNjyVsKEcMC",
  "key3": "3PdjUqCMi5BqDUpYCtzNmVy3m4CujF3qhGSNSN4h6nKvR5fqCicAan6cMSe782BaDeFJ3ChQMzUcXHxnppf1zXqy",
  "key4": "63steK3qb6EN21UvRWWpkzr8jABKqqCmyo1CvmdurQaEywQt8L8pCpdzpjFFHbRo8fFzafk5VREaiX4K1sAAgvHi",
  "key5": "2KZe7u9io73yyAtyCspA1y3EGCRBSUVRWHhUgmKLLqd7WagUy6xe5Daswt4UsFc5vMs5PMYqQ87en3cWsd5R4Y8Y",
  "key6": "2hTbiG59o4rWKE4PALRahicaBwnN4D4YzcRMNsU8pqVJRnSPiWZNnFM3ccuL8Y4Pg7qa4ZanE2tp5CrfA7K9CxLt",
  "key7": "3bY4SXKctKv8sxR5PWuRifMUnQhp2QaZ6MFA2PDqaCDrdon87jQM21MDkKkhetu8JDSoroeuJ2sr17H6gjfehEYm",
  "key8": "4j6kZEXWw7vEZyRFHJv1M3yxTmeSn67mhNg4EwCREhscbB5EtzyoiRRxZHV1ukN7K1LhJX495dwpCMCFhDtgwcMY",
  "key9": "3wzL1doEEFVjjSse4SDM9JGB6LjqbDhuPmCFyKeeKEmokSSS7APA9pLh44WyWSKqgMcNgCHbcCEHqZC3Q5CmZKok",
  "key10": "4Ggvr6wpCc12NRsy6J3tLR3BcUPfkspRkXX5BiZgrHPY4UnxqSzmUStJQbzJWgkBLM1jH78zaFjXrL4vPG7YbNcB",
  "key11": "4kLc5k11k1NHhrs8uE8U6qZbG4CUdxxocgw4QrLjxbh9vHriQHh3Kf6kPKzgZGkFrZ2UEZ34ziBFbnva5hJuP91T",
  "key12": "441RBtrvYZohPaQeNNkcjuxeCBMWRTMYaM31zn4ebtL69iJnGnJ26ws4RwK6K2zyWR5vW3eS5rFfEmxriPXYmXBa",
  "key13": "2FSfbauics7S6jrRzFwjZ3BLokWLRZmgNphXHcSBmn3fv3gL2fFX2vEozxTAhqhvN7w3pTdABmbAL13Zkxmd3RHV",
  "key14": "5HZuC7Lcbi9TQJxQNumX1hgRuJJmPQceecYaPKqML7uKG8anrVht2N6SE8Jhyp4hxAu7H67TAUTV8yQLb5ozPDwZ",
  "key15": "5goaHevJwduiebZLPAihzJ76HtXLSDtmniCqThuAvErcnMT9vYSx2txQLg4dQ83MafRnJeWwgC2sWZoLANqbcukh",
  "key16": "4HFqzY2eux71RrnL9vAzYUHm6WRQJ5vznfmV1p55uW2YxLzaAjCGtm7QG4xZTfcFAQYqR4JBWav6gXFSEBHGpUD9",
  "key17": "9scjkGLYmVRTjPRVLNUGPDBRabARTTvk1FjiKYn47sbcwGDg8JMgUgjwxndJpKWTn8hDBRHjnxuPTkg7DTrGyQV",
  "key18": "2ECnSnFUCjD1UjoYh6YoQHsoEtAkUKpDTm65vzr54XDCDCmjKhX5s2JvNe8sf6u4CqVo92qBuKdb9nG9XA6tzndq",
  "key19": "rbqcQM41KPr2Pc1Y9LLHRJen3PB292QBKqgL4dypT4dW728UESxRsGo5jUp7D3ZCFyXUcoyZmQUWHjrp2fydSMb",
  "key20": "4UraAo6xwb3ttmwwRrT41jKpqSCRR82muyHY2vp1sSAQW2jRHmvPTca5sf4Ztk4VXyVKNskryzWMHWjyMj1XHCr7",
  "key21": "63VoewEqGQab3GSAXBc5VK2jCbTcGy53FM4QFS1sVb6zKjkhvudLJsXdAspQLkxAHV3scLFCyKjU97ZnMAszRCk9",
  "key22": "37krhc8xuNco445pTczw7Dthyr6MQRHcdSXYKjiw5ZzidPJ4JLYPrc3bh5jRMGwN8AisPg3qXrJxWi9TAZWwSWp5",
  "key23": "3zdhZkzgwudsxZP6YnHP5YbjzH6NumAKMZ4GjkXEhmVTzbKF65LtVRwXnnSrMzq89V52vmuhJNtgt1zEUxPVHqsf",
  "key24": "3613iDJ13HPQAUpjwpF5Lf7jfbdX2TLrnuBMEyJrYx5oCzrTQ6zqJJ6qrb9SmdVfMW96kSY6f2yked7bn6C4xuU8",
  "key25": "2hNxhbW7W8KRUvfkfBpvvVWEHUU8zaMgUAPG6Y2cxMVgBTpGuRtWnv9g8WHrSsuhzMvGXtmUvxsdpwibrZhY6n6t",
  "key26": "2BepZMMhkYECFSvh63mpLrthbvVJSRfw7r8eWjujQSzyhygcsziesiVyqxMN6YNLppoeoBbcfiGH4AqiT6wPET6X",
  "key27": "31GQf3ADg4xy8zYchfgFrti68ehwVLwPhQtPfB4c81yDDdfdDpvHbcXqe6BzDom2zLAibKs3XNjCmb5v4h5Arbz2",
  "key28": "23facJry7VVKKcsGWBGkLobqQwJG7UAJpqZEfEAjweoodd683TFWD7v7jeFk5GHNXugNSMJz5DquYFFJDr2T5tvD",
  "key29": "Zu4Rj7c4FkhPdxxBaeHqbMPTMydhMTrPWPtTWSG3KVbyZfvhGV16C67wwWrB9BExXCjU7v38hUQ1KZUkKCMyf8C",
  "key30": "2K2PrBRMQMH65mwfa7Ffcc92sFwBeB7FUt3uodcesCc6A4FtpZw8af6H2NXz8mT4XEBNqkRijDhPV6aZKPyEYCGw",
  "key31": "3oeFzjpQtqbNRcXWKJyk4nmhYjLzfSrvyHf1H3XWjd7cqApF3Cn1xH9HN8EEGKzaMeASumnBCDCAmKLzKYXhRK9q",
  "key32": "616DE6qnzQ5RHp2gQadbW7ahfcPk1icuauthGZFvLfYnG9oexki2ZncvkYWnzgZw66Me4QGuC2uJptJ1Epj1xzG9",
  "key33": "2ciw6HCJf7tdyGRygaTtFcBfukMBtSp2k2Fx8Wwf3mKCkRD1NMuicZJu5rKsMyxQYNtZBMHk74Jjh1CiNNYgzdMV",
  "key34": "4TosEdqUah2dapCai3t8XQD8Vef6kW2RfiJkKfsj9kiRW47AuQiyajSg1qM9RJg818zGes6etAKCfGcu3Gt77Pi4",
  "key35": "282ttb1Tm7vv7qcgXFxHK5NKFowsEFBEFeAtfgTQ1ZWg6NfDdcjrxiv3ZnUF8dca59mcDAhCJiEkLpgJTfGUAvVo",
  "key36": "2f5J3tb7jnimHt9yrD3VMTEMXrsaFnU4wQZw5kV7Hm69S295fgnjmoMuTRUFwCg9FQr54NKQTyMZM1qbpSdvdLG6",
  "key37": "5r2S8DKppnP5WD8tBW3CLJZ5NcVs6DBQq9RQcuQdQcpgxopZo8dMqYjJkWKndgZfRqn9XF36EvbnMe14MzTCFUbA",
  "key38": "29mF2LNSvpVoq4t5i5eG7ML5dvjmvr1AQjc6nTEHQVYUZPHhoQMhH9qVBr8pcgW5TrDxUvP8hW3u53tCpDc5CVhx",
  "key39": "2fnLrFhHukFKMXSMFYjFm9WGuE7uzCoNigmMq46KKT4aswN18uBEELrjVRSMNgc2sMM2dU4QvqJbprEHHLEZuoDZ",
  "key40": "4ikpxm2RKR2khvzk1MyBLbkXGbBzS955u3Zv4gLWMxnh16kRaiQwpf6T2rgAWBjUk3MKF2sKPEQMwjXDUgXbU4xa",
  "key41": "2PPrujJm5hRrCAJcPEEq8kyWmzvwHhxRj8ApPFFAFjNfGe9jEfkLEeiZqRBMkvGqBr3MwQqoDMax9VByKSY8NE7E",
  "key42": "3zkmcGcojgNhPQdJjDndxnNYmQEw879pHAukrTzuMwtY7YfEGHD74HbyyZEP2mTNwM5mFsyJq9En33SpjTS17RKY",
  "key43": "52ek3raxrqKufaLGhH8ejv2UyUauoHzjauQsxgm4hBbhqE1Mte5om3EpmXHAQ8qEohCoK3XWtTjgGEt322yX1xWw",
  "key44": "8H537pJzHp9RcDwpfBPjqcvzLnYLrvgRorjkjJLJAmUyZkXbxgyYKd2FhU2ZHAEzigBN4QKjRfQPsLd5Kp1UMEf",
  "key45": "52BToWbx4UtumebSSz3VD4tePjxApV7djsnce7LnP1n31SdYLY2m6MwFdf3tW2P1a2CoRB5eu5QSdZnY9SiDvZv8"
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
