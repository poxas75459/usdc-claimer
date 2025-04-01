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
    "JA8KFmU49Rz9866rZqALqT2AbdZEvzTyKA1ZXUrSD11iJ741wAajsKUSWzQ2Wy7XbywNj115zr2hDZLBQ7nY7dN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YFA6VBymAzeiDSudAF173T5zzFLU2gXJmCkMRnvggCMygZvXS9F5ePJJCXXo5ETQujV5C8UnGzwiwn2roBt1Dph",
  "key1": "3Gox3nPVd4d2dUCACeYZ6TMRYrKsJqVeBYr9vuM6EoEdNn4cssBwk82bwcsd7yKJhLnSKNU71m6xQDqnFHxJvt9m",
  "key2": "461xrnsuzGBkmDFZUViTMNEdq7UwnzE48CErEVcwoMNfizaim9Png5k4ihqy5v1goJSPtVJg7cbkd67z7KP6HH7N",
  "key3": "2odXa1Tdm3vxJ2rvnjC7kPGMAUXdibsTJnCghPbQe4fKrCzJUQWWdmD1yHcch8DPM2DuCpWCerwHD5Z8fZWsyTD",
  "key4": "2reqN4L4n4Vktz5NPsTCE4CNXSfmUPBRgHu1pmwhcDVFWbsoe4nzoY9K1hmLHAs3MbK8QnZtMBA7VuEz72wGWGSz",
  "key5": "32B1T4DYsAvjTyRaYrvbavCK7Z8gQtoXd73vfjXEParp8GZ2FdRUmw5Pes5i8n6XtgrXq9zRck7mK9bhP7XHFpX",
  "key6": "4acPKHAc2qAtUdZ6L8Mqx1C6AKYWr13wx3ZuqTcnn7YvXLueqpRxXgYZHk5zsqqC4MMCjHZVRKCQEzrDoeK4gm5N",
  "key7": "5Ju7V4i8MXq13kfs2NnesodhwBDiphLVvcrkHqqap54zRjURieQbmVvCpFXmJH4u4hDR9x2VyimjZMhNnEqbg643",
  "key8": "31GvPRqwi6U43RQpJC9jmKjUqx3HcSB7HjWhp6uP3poTmNSS3osRrAjbNp5PTHYXCMMavWYDTFN8d9rePuCnNjHR",
  "key9": "2ZxdzGpTHG1qkJdvksDn3Kqv5bdj9Dbn8viifYhktfSuXguxqyb1w2yxh6Q1KnKiTqrNeVAtqsVCi17cjErtYnLQ",
  "key10": "5ejW3jFbF7WWLpTW9GxxMLjgphytxXpN7dMCS64zEZ9unAn4212iAruf259t57CRirvpB3kXRxgZRtRbtbEtKb4c",
  "key11": "4XjU2ry67MvwHu63pJ1zVjDuN3khnQMLJqeGgRGgaL3kyc9TM6qdirpmzmMokjF4wR48FR3qUhfUV9rbemjojQ1G",
  "key12": "rqiu5QU4HEkkLDr4jgSym9rLbhhNFEgHQJMYSu566arUuJTTPTh6rxuAQJ1izKPyu4x1qqket55BJ4ok35RaT3o",
  "key13": "o6FC6nZsJbn8fcTHaEvGCQ23eJ8xY8SbfgQpF3YiZ5ioDBB9Vs2K1S9P3UGjN3ibPWga1LCrCYSjmU5RxXpFURk",
  "key14": "4icfuFe3LLmwXVzCZLExLYJ4Ez8xVeXQBs7Hr5RXMqMQvqAfeiJmxmjjQUaq9gMy8uSYuAJ8Coo4N3j2s5QcKwr6",
  "key15": "CB9yBqVEBUp5CH4MBeze1S6MkhzCfxzSQZS7ykisdBbZbfZMeozdLNtWzYWz7TvCpPhdgxwQ1rxrXr17ZKbHPff",
  "key16": "5PNU9qEHefVs3NBw4vfcYk8eLT1VdJC4X7iExZMEjFsiUyazsGyjRfoXjkfcPahwks4hS1VuapnjkmMAez1UENDj",
  "key17": "2EF1WqNPzEhzwnYYwqSkaZG5RdwEavVx1ufebUvtjqAWZE2nXGSM68PvMeya6ET4wFxte7TAtJnkba9qybL6rPb5",
  "key18": "2Yo4WaPdDvojCqBb1k2sZ5oNULvMRB3jnva6mDnMyDbuoRJtN68eARvnfnMSdyrhLEfFw67VnNyfX8x1K1u3Ej1m",
  "key19": "3i19nVe8yQjNtHXsJoHEiiQsnp6h9fi1GsUZDrFWbcCTSn9TrYmgzdNTnJwtkfdEGfDXQssiTVQNyvxUSG21xDi6",
  "key20": "55wqJp7utgNkyxghFDEAvXS7XeoZpfWvmT6a8ypWPuA7Ldd5zwY9kBSdtkGgnzLhCVwX1rjy1qStixrPQt5w7vJz",
  "key21": "3Q398zRWgue9caBo3Yz5LpiwYZoFhk5VYgCNNA6kCM4sH2Ax6rqKEtg2ttsNEVcuX6cf4enRWN4AzGEiS8DZTo9T",
  "key22": "v6nZZu3x5kf1UHVXfEdp7i5aQAeezot8AyAaRsnCC6TbF1tMcpRpoCE3mruHLVThij4uXZ3WKSAX1grSvvqpXLd",
  "key23": "5fsi7hkDEQvBnunD1Nf3hZ7wCojSqqRuoZQeXP5GP2UjwEYw38pkYfEm5itTRAggJL5CX3qDz3S4rKUBUxkb5qQC",
  "key24": "ieydSFFreg13x1idf4HMh7apPbz2WHQUmkLmQXfBpNVd5V7jrmD3svchzHEJ72ovrQ691K4d3oTVMKYTk5owWsq",
  "key25": "32PnMgz8eUHfnt8tUDZgMoqpUSsz1Zp4JQLw6MCXg44QwacscbcQJLzc3XNVPdGKu6zqk2QYhZ64sjKdh5FFxJWN",
  "key26": "DjhqUxxnyurogMvUeE13DJ8WyyuszVp3Z5qE1GVzdVqMXdEfYKrpMSMKa1excfStBesdHsYsYEGpF8XWuGhcqB9",
  "key27": "5k75cR8XkSVBYqVbgkq3ARpZMxSb1SYAD7Nb85VxCUjW5f76i5zKKF7K1kFUjdjt2CsLhWpShAkrk3uXjXnGFyn",
  "key28": "4US39CF2gKXi7DqzCZE5qz4ynjJCZ9j2uGnsCeDekgCqk1b36HnGDEiYDJHcokgVMPsPKch9Y1ZGFsCzkGZbDijM",
  "key29": "5o58vNbAJdwcoyaXK3RC4V49baPipPXnbNTEdvffHQKkaq23cWsdmrsQQZBEiHScuijuBeYxrxbmyVPWNZj3Fird",
  "key30": "3TqkKW1R9HxT6RsUynxXhWJEDFziNYKe6wx3mXsxbdaHT7QyLvdjqBaEWsGgZ2xuvQSr8Vy7Cv5Npqd1bNPf7ug7",
  "key31": "4Mv6pWBsqpsmzqCeLREF55BkQnqX1Lgph4v6GWX7UUWX5gXTR64kFjhshErZpvYwpExm4ManpsBwvg6vCpqYLc9",
  "key32": "2o9FcuiQ1JmVRtj1NE7kP57oqkjAuzKBEsptua2vU4SsTwB9KAoPnr1m8WkzyXXbmKPimCRZ9Wu7WdnJVzJV4y31",
  "key33": "5t339afJgEdsNFdzqNjN3SWEQ6BKMYzFm2EzrEJvjRuuYKsBFS6Ar22tRnzzHEJ7AwXL3ehfrHeBBs9uycuK7dBT",
  "key34": "Tzbb6KVGD5ixYUnP8d6fMHAeMhuaZeGjWyH4AJMviq7PybwpNFDB8WgY66RHPyzmHnCCGwc6dyvUc5cgUUnXKHm",
  "key35": "2VFH4pqUd7cH1Zz6obVzPE7XFW2bGEyUVPc8TiFwah39ypHw9B7PEZZom6T62q3oC1PPbFi9HJHZeP7SiXcHMaR4",
  "key36": "43A6H7k2AdSKSuXMswrUVXv8315Ao9dUyiMyV1yo79aYDNLGVZ5YVSFiWen7YYo4SvSLcjEWsejamNxZnqpweABi"
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
