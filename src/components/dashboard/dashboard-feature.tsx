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
    "4NmqN8MgDaAnnyRtUkwmpQa2nGnoCUi3oTs1ZKcN7QgVJeKz5qdRKfY3ZALipFbhdbX3Q9z8x1LkVu6QanTzBnMj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZTpF8n9jprNYZMFSWZfjp2EUvNuQdBs7yqM8Fyfp3QJBpgvhpSR4d1crUBLSuSDNxGVG7AWme79eVby5Sr1t1wF",
  "key1": "4m9k79WYZcmQLQJi3KL1XH9VCzb9C4Mr1YjQXW842r2eAZAAxY1AZ6814CzDCXXz4u8JLgrmYErcyjjPwo9nA7BM",
  "key2": "2V3UwqKG5T4ZJFpm2QSN2rCdRR3MAYb26eWAuFhSMG4rM2p8LtX5kCKjQAammxrvadfDkzzBegF9RAtrc89mgotT",
  "key3": "349TVZrEEgAGsmWDmvEq8BQPury2chD38LtcUTGtsw5EREVw7wgLcP7Nbnc7heoFjhARv3ut6mHUcjSGQXTJrDSr",
  "key4": "4JWuCANeErf276fxM6aGoEjcts8q3XGBV3uZeCXNEroqXS1GHQCohNMfhs5X4jBFuC8LwNch71JpixCdqpDZb78q",
  "key5": "4kHrFR5R8bnN7BKdQKTe8zUtQDsWHynWRLtzEjEtpEmFvushxoPFj9Mtz6BiQsQdrh3Ur7JLFDjCdwKgrATSSxqq",
  "key6": "29pUCZ1Xhnb1kzV97xmtjwitfSQmDUsemNd9WZ6DLpfV5gtUh3w6kBQpYAq6aft9QZSa5CnbBEhagB5qQQCzikVE",
  "key7": "5DpqDF917PuXhCkoqmm2HHH1mNsLWC443my4HT4Nky3onrbc5CYq1RLM5Zk3KVaji4aF3BNNVusgYvXoFLFkniPG",
  "key8": "5MLKjRGTdbBw1iYgDiGN3RFshdiVPbfzjoFNanF9pNKYTXSt996LiPi9BsoTNME9LacRC3zKNAWScz46A1vANuY7",
  "key9": "2A1JGPD1qgucHsntQu6MCEkwiSx3Gjc7japVy7yLcenyBYstJsJjzMGHcXt6yn6JMdiK68smvUEf2wusEEC9DdTh",
  "key10": "4XHpL8MWap9MmDWNcnvFXxHBjPKmkvopvHtGwWisC4vWUb4i2WvPsKVUX3WhUjMFP3ATnoq26rU4LbcqVkE92xW5",
  "key11": "5yGAef98bAVqCpr7AhMWLjyf3pmKsVHc93XsAzj5qzfu8rxwmKVywkkXKxxt6oP4mvxQqDN7SCh8UDubA9JmpByg",
  "key12": "pq8M3ZqtXbdestTJEw3hxzFB6kPe7ptegKuS6zUmBPnjNbgp6CvT6YbGtWLvivCZsX2qJPWQFEwwtTTuaTmWXR1",
  "key13": "4YbpGmpDbYrhDSQkVtpCuTTbVF9mhdcfCb8scANoRRA7QVbuBC2obABZ1M1AeguPQkxU4AgmPSQzxaTuy89ZoRDn",
  "key14": "4iWiX4MNs5ytyGTXXDZoxae2paLYEKxpxxSJnfQX3LgFCsJcBNoHmjcvhnNe7YBUHBkLJ519suGDcXD3eSo5tHEj",
  "key15": "4QkdMiZGBDQ5RY8hAUjQFxgWQLnxHKc5PuWZtppcGaH6XBgaygegxmuuKbf6cxQHjkJFfE5bLSAkZpbEf6dsEVXp",
  "key16": "5MDa9k9TvwhfB11ZixiiYQ8GGFMLiZjymHh2aVN9sHgwr79GW9GScn8ucNc9LDmdfQZLc1t47aJAPALykzDDENfb",
  "key17": "5BKheXgGfw52ceJcbxkUMeiMjSxV3fHYdnTRzxiADMDg7tEeb3utvcaXtqwNSDC3UC6HqSPbF9xGWXaTsmTnKenu",
  "key18": "5ffEfxp1PbmwfHn2HE3CPptMwPWk4rbLHcQxFa3oiGHrg3cnzv6KoDfYMx8PKmpjqKKFRxwnZzMn9xd4s9PBCtqq",
  "key19": "4y2y5NygP2YYRkNZkSXj4W1FRNFRjpiY6JQK3m5AN3Gwgcx12kZPoHWZfPFzj4nMPGehUdzzmyztermbsFynFdnJ",
  "key20": "2t5k6mwr51i2w62FrXn3xEmSpWUdfMrHLdgsdG4tUCPxgJRRyBgkiYCQBxYqS4Cj5APuWJp6fAYS7eB3JFBJgonA",
  "key21": "5sQ9mPk4FgRqzjUHWNwP1k1LuKXmWAgSsxnSGPeydF4VjG6kz3m81eEKPx6pYA8UcAUruowbvZGxpU9Mhva6WaGG",
  "key22": "2j7JMqQG9yajtSR7PGmYhodomKUqFaYx3nVKUznM61HHQRpC1srsRZvbQqty7yF1zXBoRwgGcugh7UeSKHvEvm4q",
  "key23": "mSXcrG1d9ev2mJi28zX2MFqAyptZWj8VkFmdv9kR6umHxtpyy9h7q8619hjuJnPBwSniBsKkExYokRzJjnRizFJ",
  "key24": "L73tyfHbMcHKTXMa4oNQGHv19FK11WDJYYMKDHpBBS4eVraBa6qjFBA9u3MhrjtERxyHcxy9YkKLAGsUDwZe9ty",
  "key25": "5m4642yJZQxMvocseJgC92DnE58ungSC2GkS3dPNdh2UhReNyKXGmz2vzsiZzqeugyQJwWjFUo9Dsm3mhyeuS6f4",
  "key26": "zUPmj8PS9mp1Lw3aezoCbkhNQctpSK3uBexschfj6omfh4zYn6cf8VrsE4YnHFgLJx5orJ2s1kdwr6BENqp2s1K",
  "key27": "3bK1hRzU62DBKAh3JR2uvk4YTu1vRN51PiSdMg4Mj3Aydq48aJ2A3o6N2X1C7gW69TZUbPBquWwGuSQXNtv8ar1v",
  "key28": "5bcesPinpKmFpYfAhigxiM6LZStDbqyTWjZ9BscLhQjqdz6YPgqZ8pctWuE1JGnTqt1RAnXZieWGdDbzHT1yqbmx",
  "key29": "62Cx1KX8s3Ar4oSSjCFjGuXVT8SR67tG8Do9iS5jGnnTGcSaSoBYCYe6NM1Bb5RRDQwZGvwCZRqBaAWa7yQwN3eH",
  "key30": "2VeCw7EU3KGGJvVioRhV3M5L7NFxUarHpyAtVTFDvjenjwUqoCZnopS9ZBeyQDYYWR2jubHbjCNqzCjisWuRo55s",
  "key31": "3ZQ18rNgpqheAjbrzcztwpb5cybV8XKbVc3oVTQk9MczatuC5FSAF4LMR3JkbEXESAmDcAj7ZSixTjBVpQjtBceB",
  "key32": "2H2jBtkyMVxWMh4FVrFaoySdmYq1Ad5Rr2yRRYshukaKtnp1HNXgy913d6v4AvNo9AGC7dEKZVYfcuWcWD5aSDDg",
  "key33": "2KmD5TKgR7g3tHiYzTwEuzQH34RsVJBdPMuCfxT7dTtfCLrhX1cX4DPy5iekSbHdasCnktigR7HhdzA19VfCwzCh",
  "key34": "4GMmnQ3bUvWrRs1PXmiQq2z2DZdASLWrMWi7a3QCofD3bHkku2Dee3pygjEUwss4eigssW4iKyic3J9yoXv36CPc",
  "key35": "2phcJHZ7ndC9YnzJfqeawGSogC3vFQmNffczvW1A3oFvFUfNTaWxfcnrtqJQyr2vSmfc1FLHEVSU4DzbL8guBr3i",
  "key36": "4anFjkJ41wf8UQs33DAq7XrLSTB5dPiYNXuyBbQeZ41wHxjK8NbocxPjMRBABvqor3G124e5NEZUsoLtFZyVLqff",
  "key37": "57hj4jZTiS5epjmbvUY6qouk4VdhTzY1P1Xuamp3uKaf4Yupm6V4j9SYoTmLnQq9QsoVKPM4KrzJ6SXbJig5pWsL",
  "key38": "5bC4m7ctPBQQcHyVLgJ5xYu7y9Zxj8txShuqpjBnRfTVNwR8rTpgovgNT7TGqiGgHYSpvfbPXX761F5LfaVtDH7d",
  "key39": "5juEefE9B5pRxP3BtsyriRyT7ERu3EN2xUiUprvabsUcHkfSoeUce5vMGKsqmeEKDc5JzTDxbvTiy6M5henNsYWn",
  "key40": "2YAtHaHpRKvu3iEXGxCTb8abtAk7xte1cNJjh9zPCy7XKbM2oXU8ekguEc2kLF5YAmLp2EoKwhr6ohrseL9gb7Qg",
  "key41": "4pTVouHzD1h8QrFXE9mUTVzLER2ud3JzAoJjMQhinFFCEF5DEKgmyxUsRHaa21ipw1NVz263kpRwmnxveUk1n1XD",
  "key42": "26GW8S8x8q7wmYKmgAm6wWXXb6hftnwgk1xEpZhNKrmQEGRmVwSMUeNmfLAgYamHu1gJNMysH7xuXE13AQFS8Yin",
  "key43": "4JMoDKmCtDfcAfu62kSAZr6wUjrBdNTpV2DHKJrDLv8HQZXdhxf8R1sPMa2unA2q3TwKB5Ns9ZfsV2kFtAGJ4hBv",
  "key44": "3KQ9HCEgt9cREqUx6NDFiQ7CStWF4nhokoBWYHHGnQg81XmMmu43bXmoBXs8zKamEcsULU5QgUWSAVgvYsbhv415"
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
