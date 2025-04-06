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
    "5BKjwoXH23zj5ooRqfmAxRA1oe5EkEceibJEGt4KpcjUzVG88xUauJuBjwPwjTYAPuQHC5UGb8wK5Jt3RZ8QLZwz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hyGk1ES41TgdrJyDaRDD4cmWKMLJZ2FVvWX9HMg9avy4M9EyWiWG67XtXt9o3qG1tGUChpmShJ45N8vDWBumSdP",
  "key1": "4sbDfmAHZ9RM8L1qbnk8YY3AZFpzwxB8uojnxmX9D2GsvTRcgpsh9i5jFHyRcWhGLNv4DztSUVo9FuExNEs8ripj",
  "key2": "2CdK4LNHg64woeXvR1iCBehoB7wU8h5TQEJMUh7gVECsPGsu4JLFjop7HLWFHzxxFH4CjShePdD9itj1E8Cyihsg",
  "key3": "3X9TDyVfYbJmYbwCjpqVk31u6j9Ei8DmMZjssYrsX9J6n4qgJDtxWyihDk8ULSmeTQjghVSfkAcMeB9XioYnwqN6",
  "key4": "2DvNawsFNPjnPcqP6pPtHjVQzkeHaTSpi4chwinHhUAAKFeC1AFz8ptSQurkHEmc1VWVUHYaetEpUqyzYfPYtvxa",
  "key5": "BZnfL4Yq8K3Gxq9FJ2n7nFV2H9ZTsikMJDoS1JLKVsUaHBQ1hVzmHeRDB3Q8XmjUdw4uHevGjgdnypPwPfPQYjt",
  "key6": "22yMRBfwgDg1PUcngPHBoFy5KTgmp8xVdQwkBNxwNRQ76PmNxbEgQ4e4kxRghgJWMARy5w1gjqEmpkjBdjAqtMk3",
  "key7": "5kwfmkU6PX1ynkc2jnv9cBTPG3yHhmwGXenyWt8fZn5kukUZEu7pooBnz6X8k8rUaN2yATL8PRVkmXdzS3pw66Uf",
  "key8": "36qWdygcgUzcR6Gaw78caQCPc9j3yKFxyrGCHrJz4Rwwco9k6q5wfKikfb6qXtnYBeHnipETcYp6kMeCQLheFbta",
  "key9": "4zrbtEmYz8uvb7jthoys8q9pSrxcMDMUkfQsYpynpWD94Y2nmavKnq5RcnR7umh13FZJHJwYWpQ2eNnqhmsqs1TV",
  "key10": "2AdKP2TfkFkWJsd57xAjx3pQ93FDVZk12YuKbjJKCayMHH3Xf89XkUQT1sxnvhMqpnTkpUcR6gZ6ikfNDUNKaTA6",
  "key11": "5SfqpH9ZhBieUihaYqtkwPiEtCw5ZgjUF4xSCaSzzkGqM7NMfqfek95tgue9i9ZMZzXpN7L1xcgJsVqeVyB4zHnK",
  "key12": "CT8DHorKBTatGV6FMVLPBkVV8cs9fvaRYBLcrFh2v79zvXCjSYucsXPLS4oBtmeKsaa4EA5gDTgivVfGnRUDSvH",
  "key13": "2eCDyqHQDTL6SHKqw2E4j5MzqXDVunFzGr2RV2Aw46Pghwt88Tw3eaVCXiNh7GijN3drEhfJFuJQRw1eU8TnAYss",
  "key14": "V6ebpBHoHZW9bKTSqU5zC2XVggwYjwQeYFjAqhj1bfzyiVRVPxPpS9mgzyBv3TPNLaAXKo2EL44Qd2X2V2WMPkg",
  "key15": "a11VdL5jpfA4WogqFgjrc3VdYVr5bzbvfSxMKXcTp1DykjptJKomYRHc5SmzXSsugvZbFAxKHjPzS5dtoocjexq",
  "key16": "4bp4AxpdGNvcUv9idaBK1511FHjohE2zQbn7vQDQx3iM1BGf2FGPWTG4bqtfZg4hmtovzWWvvMJcTeuqyNtP55cw",
  "key17": "35yjBJWKkHvV47Nh6nhVM8hb2iy1Bua4wK49EYkqY4ZJj6YaJAhm1ExazM1KgCssUQ1WFbhJP1f2WBFmtBRv3eLf",
  "key18": "4BabbPoC2GDdU2heZvGqf5pj6Sz5xhEFKeNVZuWdxcmgyRGLD13jtdMZMBE9f6cHA9X7SMkRfVxT2ALcT41HihVq",
  "key19": "5ddo7bP1vadxSfbqD4gbaH4FX1SATnMBJu4GwtPDeScNRkwgVyfVKKq4vdPLeEfXWPv9bjTWDXwQ6i1Zk2QCiiAm",
  "key20": "5azCXEAVjxPQgoNqxYuEZiqmpzV7ZCLzp3q18HV8bt45b5Q5GYpAhpwPcbLEy1rkkco667C8CqR7gk7skiDYZGZ",
  "key21": "47q9smGGXMDEbp1xATdZZSHbPtQVLJsBbqK6oiDb27sykx65kr5A7WXVKxVyGGuuLkEw8qtfhx3it3jJ498G18Mr",
  "key22": "2twHq89SdDN71u2ruprUuwVJQaejsZk4o53DZ18MYZsp6ecJzaL22KQ8WAc34MCrfhJXvuznCoMu5FjZwjCnHEuR",
  "key23": "mgJD1fnWKKxB37zcRitV57ckqdWX82jJP861egfodyRP7ogdWtWqQcfBJ6DSSVxfir9ZpaJiGz1k7MnCV4LBoNx",
  "key24": "5Qfq6WHNu5gVTHhcT9AekCrZdFvA4KWJVfD3MCBo1jNUEasqDUXyh6fVBWTz8Gm4TUERqPoDd3BpbVA24tuhRDBE",
  "key25": "4WKTpJhHneb9wmJH2Urw91tqHQDLBhfdtyJL8GtjHX72hWqd3ZaPoz7vWZqbpVqbX4E4UmAT7VyKfaPKDpCK2Qyc",
  "key26": "q7Yw54PJa12b32jxsqHNCV7eLAWXAPs6gBJVD1YEfFJH5hWkosSmfL3gufi48jTxde53JtHFfdPFqGq8KNouFtN",
  "key27": "49u3YriTtckYXtA2L1Wvy49hfgE9Q8VCpYw2XP5asij7zELVDSGPhTsr1fd4jD9ZcdZSc3q3bKMtr3Cq2ukjtAoz",
  "key28": "2JGDoh29aPxek6bJyh8ZNTrdpxEnkfHsbnK7XrHHbRLEyQpqJAVNL8X2z5KhsiSEKoZbu9qx3Qyef9uCCvmvy6G5",
  "key29": "5nFmR9FsNvfbByBiTeQahz3mf7zBMcTx9S76WkZsPgwJinDmQZSXEBGhc9ygYFuzGCan9zHW92EdLqdxi7K8U3EJ",
  "key30": "29ZkjNyuJG1Xnx3jFBhR4svdN2Xxxt9Huawgirka49WxmpefCUeQJfFqPXY9itLXBx8yDGWMCHeef3faLQjSUajX",
  "key31": "gSc1bjvoYsNpmceePSai4tdTrfTV1dkTaXpW7EgiLbRk9Cxvnr8HtWNR5CCeVqas5hwCYaovr8percU75Qtvdcf",
  "key32": "3E11UsmMuQtJTq1jywpqwAAqwwsRcLXXk9KpayiorCyepY5z5FCimGzPoxE7hXX4wtW7HomY2aN8Hmejr4VBNPDF",
  "key33": "5XvSR5ga4o68ehthz6TV2o7wsLfuGDHbkAPmcF7EQNNfdYwUHmBRgAvFNQHz1gjfa6kMSyZNzScXQrvJc9cCPfp9",
  "key34": "3Mvr7sKCu6nAHpJXSYEmWcnNizWRf9kTQfrqNDqNddAzpHJgiobUfLuGYDmcEot2Dh5jmVvZFiss3ryfWNakzfBq",
  "key35": "5S4yCyK3hr4bksx2nXSBjjP7CHvj4KsLCigeBUzwRkxa4MmY1vcRfW7EZRdiitaDQHiHGYXqXX6PjzgBfYmfTFu4",
  "key36": "29CGuJVz9FwEEsxpgGfrLKezvznPUh1BmT3SXbUsDfCk5USAsMP5B8mTm9jCnYQ1Kk9Tcwm3525sxgiHgpMi6Zfi",
  "key37": "5cEBZPN7QpcHfEgc8RhsHFpKjwPMr9Ay5Gm9uCWLgBPvgTAyPyYyp6pX52bAa3m8a3tDrjLi36W3KWD3p84ULRPb",
  "key38": "2ePa6sYPxbEbsL8MnnJSUBTVwaRrESrsATqVknF5V3Zhr9gFACwThsQe1tKMr8jfeeLnVitRUJND3aVCoidFz8tn",
  "key39": "5daddqMxKRUhf3JwRGmY5rTCbJq1KPze8idLCtroJJQe3jiYXnKrqTW4zKMUK2FSPNzbMg5Cp5JHCcoth6avdsas"
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
