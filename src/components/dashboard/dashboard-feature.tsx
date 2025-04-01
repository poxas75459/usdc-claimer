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
    "4QqFz12X5r6WgA9bS8L5355sp65VNyaf1nY4nUAJSP8eE91ztJ1YY68QTGnetSPXdN6nZRHYbc69yZisvEVUBGpq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67dyPDuD79G6Vv5pAEzDdVWW77v6QuZhASNuSrJ1ipjK4GVPF3aze3DQiWmZewwRKoNNMAoXG7jLU6QzPKvdbS2L",
  "key1": "53ZvoYaNL8mdabi29zGTpEdGVQSwbASSGxriReUXBHviRFmRRCxTdAGFTQHvKZZDXPa4vmLPRYjmQrHCBqj4bACK",
  "key2": "41HbEr3Hks1hpMECq3zVQmcrf9SoWA9RxyNkqwSXnzfYbXJa3us3DY9JUsXoXSa4ihpK424fFZEq3S6XsamqgruL",
  "key3": "5NKZzDRWhLAZw85JygU6DGajNMGc4YxDtSF3DzKSPSRXMAT11hWWzSCdsayUVNeUdcCx1R9RE1yhqPME6SzRc9NG",
  "key4": "5a9g4814SYdtHSDPc5TPaEdphujao7rD5Ac7Nndcd46fYnvqWN99mJgzRLGMuh3CNLN5yQJPtYX8RCnDVUGHHdUs",
  "key5": "3g1vs3tbYSxMJ4zgSjENEWo5YGhpN6XkA3qbbdqi9oMUzgiDuwBXbKmcypjzcysN8JPsXUuCGJ1FV6dcN6y6aDHS",
  "key6": "3PdfaJQkE5Jks6YABt2fpy2PyNca75DKoGfdZKYiM4zucxVwKhPjt6CXFdgh5CaxTLUyDgJ1iYxWJGwccwdCfqRf",
  "key7": "2ydQMfwxu7UGEiGfpXrn96PZ1tPTtnsrs2hqk1uQDKTkpBRKgYDEa4wZsyKCUkXTC5SXKYZyQjJkRmNHv5WA6UDe",
  "key8": "3aFRdfQCcUx6GHnzpWXQKMk3PbSdKhRnBezLmZs5NKBRpR6BeqeMiBhmgkkiUcQt13sY4iahPqHpWfznMDKsBcoM",
  "key9": "541R2k8k4MUYXi2ydkt4PBxVAfrhDZRGcEcvkXKrW2K5qzVSEz8X6t57j8MaGcyY1FeAsy5y7NaJxsLks4v9prkm",
  "key10": "2DeTU4b4cZx254vdWSDXEAascqc6XnHHcFJdiHCE4WGLAsvdnXWiiJ2anUqiqUufua27gNHDtGK4NCRcfUorjAaD",
  "key11": "5wdgsnBzj1pZBTMTQymHyFKAo6s3ypFkVv7TCbKjWHd55C8fUv5B1UqyLtu9nPp1FZcbHW5rzaiWcuaNrLLrPBJp",
  "key12": "2zPrnBTGAk2D5yzJAxdt3eXkhZZVpKAiJq5zHByvD66PG4LBdGQfq8mKLjEfn7pqK5ogeZkmA4SSsb4UWwgJLoNr",
  "key13": "129X6AHwfDJnRi3AfYeFPkd4VLGBhoof5VNtpVKZgx1sdQYDeBvNL2NvbbLSprrfys78HJvZcjADBs9EsLuYTQuv",
  "key14": "43H9B1wApoVpDxhkVq46zbaot7TkCKvb7cx9E6nzjkgoKa6dL4Ub9E1RfazUwmfX7rDFbXC2DSFCqZq23AcA4vM8",
  "key15": "3FjoSTSuMyM7cD31DeqftSLUY7AUQ4f4GdSQCe7PM6FiSxCTGMxjV92Mf4dQrg74qZDd1TK1FDbtG6cXYfkw2qrj",
  "key16": "YNnMpvjqQ3uXpetMcy2kt463x6mwUDKXZxLvsDAFuorR46vJ5YzyexZpRKBVj6BZkwhU13YPpGamTbbQ2869X5Q",
  "key17": "4dVEEvGzqCxKN4EipNM2EvfTXPGoLeDkop21bpPGBRy8BgEk37M1RyarXhrkC9iR4zTQ7qWA53JyVJbfd6XabqZn",
  "key18": "5KstYUMcepirhEWXtKjiZounRst3VeRomN85WVhftN67TDbJhFPTVskVJ25dVdsDVcTidbT7EUuTprVHmaDHN6rs",
  "key19": "hNmQQELkKHb1em939hzJYQJcv6LhNnsURaq3pfY6vTLrwLtdkVEGuXcPTYzYQhyetEoqXxtvkyqA1vEZoH7iE2x",
  "key20": "3T1sajLcwL89DVBfgzGAreDMoshevDjuECRb5KYdvHYDwk8psyPzTDJdkZFGDEBZSZ7nL3L3TMXbzcPJCzMEjo44",
  "key21": "5iPGCjssyETDAET7db7kPADqcgnJhdu191irbrK1MsSkYvanvGZDSiy255YXsZfcd721ZdLzEWxawos7KPfePwmk",
  "key22": "4XvjyFmGzhD3pozfUy5cTPHNK9AU7C3aWrg6ETWZA9S2tBEgSHXNtoC4RGDGWoSASgpJPVk1k7zRheri7rsA9yiE",
  "key23": "456v4LzNdTgXnugRGRzzfJRXxpm7cAaBXvrjguffFLBM4jEKUUwWiQk7DPySwE7hwKzrApvbxd3MSGhRtTZASn3E",
  "key24": "4fsm9WJH3t6j6uDyMQqwde2HEEqSk5e8iuLWbHhGkg1nieExm9muqywn1fjyWjvdgXghZG7cdUezrezbo2FY57zu",
  "key25": "2mGM4iinYtaBy97UMciRpAuURxAKQytbh87A7dx98MUVNd9AuUdjN5dUvwzNoWiwvFBYT4oJm1JGuYbSaxLzofqj",
  "key26": "3UgtarzDEirKZpfqKrjgTB22XZUMfNk4ZtTVQ6Aj5B8ygYPwnBDRoe9u9thNEYZ8cxtmBv656WXoB1Xnyysv5RbV",
  "key27": "3qDfMNFJXrhCQg3pnMuN6b3mceQ4xZFc176NyiGKsh5Y8D7HiHCv9VjijVqzBo8vYfVSKsqfHFQyXppmHjav9ngo",
  "key28": "45QVJBDK573QnRs8PC1ZTznbVF9HK17tuD5yU7zHMfBhm66BbRceyVbgocCw4iBceyEVjD1b11kaehLNSzHJqzhR",
  "key29": "ujpDKAEtAKiXfdbrsmVtfzhtpTNjJmQZhtEjHnagz7iAnSVgcdr3vHgsJACD76muCWpJWkhPNiCYTBNWxomYCDe",
  "key30": "2Y63KH9dHqwQyUNTpXjAkidepL35gjN43TAmhopo8dVP6yimiBTyHnWQmPDqVVdXbFmQJC7LAK18fnoHjwikHEis",
  "key31": "2wBF9anXdn5VBg4M5uoRNTMK6hZxQzSYwNUjXQDNQ5zvgVpY5NGe3Wue1kRpQw7uLhamZXF4Jb1hGxnZqPJjNGzy",
  "key32": "5xpDMnj5WVvCvvjL4fNgV82PZ5qcHd7nENVrQScCfwxQeTFUSKFBtidhnYJzVoSKud1EsoYdwfFLWbujtox7uE3S",
  "key33": "4nmV7bT1pozGqjTBxAVePUdcNfg1jMpEJkSdeQ34y8AjJZBpAwds25hneypFfSFt4XoMB1v4nGSG71fK7NSGhxtL",
  "key34": "xusK3Y3SfjqCfoKKcJGMwqPYqpcWtEktSp4NmXHo2kyozVNjHFeMGzmmqWnYFqVAv94MRwFGD54CrbHeNH7mfz9",
  "key35": "3dCYV6BJUQKrYAwQcTTwLqMpB9g2R6HfR4K14K6wsoRV8kwbuciTqFgihbtjdydZ85HisUhD69fiAmLD24GMeem6",
  "key36": "3oh5h4ApytWZ3SCqFEEnEA3V59pLizSf1pL2yZ7W9tSffLHTSmM5yEGuFoeFSe3LizCX4NnEppXPDvf8zamCAf54",
  "key37": "2BTf1kbRZ7JoASi8fRfCNh82LstskYjt3nq4PQdbbLnkvpxZYKmGKJwTWSYwRRi8bqLtrJW7QyYJe9CF5WbyW3hT",
  "key38": "3TjPto69i76MUQw8f8s9ovcEFQqgQueb9SuieMhdHgT5FEvT8QqcwkgzNxAcT9B381GC4qdUtxN28SfaExveorgM",
  "key39": "4KoSzrW94qAQo9qyRBHrGCjx1949KFC4WNozCTbX7FVJF6Zvuhuw9mLwQrUcnafJFu2UcdDVYFcpmjvyvVvy3ff9",
  "key40": "2uk3tmzMPbv1JDcpNR2GVBdoMvo75F6JhCRJ4cH3LwzG17TDmuR951Xrj6ofbjyRCrBrrqYk9myHeJojLBERfLxy",
  "key41": "5AejHiG8tHeQbW7QhJUs7XtTAD7tKrQPLs1krJmGCbj6ywEe7qzgEoCMRNVUxogwcT3bsr2scYAyugMeYqfD4eQh",
  "key42": "3VPVwqtvVgjk41rviRFUUpcQceGGwmpZqawhc74zNRGdjEmXb4AfTgZM7oDGCarWfYCtTva2udC3aYvDDioRU6L9",
  "key43": "4vpBUd1jYj9S33fdtrsnXiCnFEmDtgtNyu962xovnRZdZTbFsyeUDrjJ2MWSxF1rEyDnj7SNvvSsEGc2WrcxzHGj",
  "key44": "4MjSnJXx4ZFFgAk3mj9uYdvHAkLFwC6oWPkcUx1HBfL4fMc8UGkR3E8D3U5daJZ4DBWhtbAC2L9jPaNPxRWTvMx8",
  "key45": "4ZFKyvveAhM9uTSFpYT33WRuPrm6oty7Zp97jtvdwzCTpw4nByZQegcnstsWEULmy9BEBDvfAcn2HmsRtFfsJwvE",
  "key46": "3QyfTjou7piFYmW9nttckvuBjSJNx14VAQ2Zztmbktgr2FrkgmF2i9yTgpHKFy13F288wYRVDCGLppF9ifadeWnp",
  "key47": "3NhtmzapX6XdzMqDrfj5t1NeEDBA9rNmFx5Q14ve92vg5wuBEH1wGGuQHyD8J2Rsh2ARUrqHab9y9Rm3kZxQDXyU",
  "key48": "5iFCnSQbTFdw4VBwntKWy6gKhSf4W4J78UvCrXpQcaabfYB494y1W2pfd7CDLoQAzNK89tbyL63hWT9daF3ua7JX",
  "key49": "5kwsBB4cRgpXN69VP4RCdrPAbthpsBe5YiuUZm4iopQWKDaqcVE6yQ2oNfWuo7HjNARTQzyBB5ppeHN537KckTCg"
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
