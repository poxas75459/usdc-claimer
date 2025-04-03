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
    "436djo9VtCkxqWJP48RUoSH8AQRrvfEjVnsxZedyq4LwPrCTAjXgJTsQPRHWmiuLV14gXhuymukRPDHz5qrM4f5Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tf6VcKTCgoi8nfBfdjDTui6JjhhNo6KxjUDu75mmK3qfqpWkHaWs9Nr5m9WmLqmeKUaTiCekjVHkMLUywHqW2YT",
  "key1": "4uhNx2z8XgsZPm3B1HEy3215r6Cx5ViAWwqZ2rJnfgHnF9ji7Ng7xvDTR361nc45JJ6eSf3biS9cjRzheCuGGKCB",
  "key2": "jdL1LTKvcDKFcubpsQyaaAwHS7r9EKm8GS2M5uenT8RpkciBBn7begLruZcZzj3LNMwFNwCG37owH8Vm9dGycYz",
  "key3": "2MAAHYwopdUBoW9z1osQBVW3uwhoxudyXK2vLboupysLEZHbhRWFvvNM2yTNWtEXJhqLCEv6CpRV7URnPz8XTaM6",
  "key4": "2pTJGVzFRfoSyK1xpX4n7q31rnhsh56xkhpEurn6bUQgMTe3nFqLWm4AxmXdD7ZFqewe8h1qnVStiV7Za1JYeFhW",
  "key5": "3ubm7wdib8ME8H6g5bXqojfE87DGG76548k9yhCHbU9zGwHoqNx5k1f6cHmArEAmPnNHSJLmUxCzA3QbEGzJuSs7",
  "key6": "5aSV4S4kvzTNbywuVN5YUJQxUSH1deYNptB3qgoq8mVRHSv527AdkVD9SamyjHUKMEg4J5wKcBWPtkqmoGyWxQb9",
  "key7": "4zCCUzD8hTjhWseVzJy18gTevG2ALBfa4URbomtNeq88h2xi1G8T3umGe2PDDcrwzEPENvptchNE8QjtBPL6PB6g",
  "key8": "48dMabGE8d7dgEWdzLRWET4oFBC9Z8idnqFiRTRBHqafZC5YNQjSqMoVFqVZMrxJmdH1rigAQ1KbCtpZ3PkAUhou",
  "key9": "3GvLL3JbCR6YREzgnntseUQduMhAnuNKwCWgzxySojZaeN67PWRDy8pkWCNCRVAcoGejvnoxRoq5fdB13ZGJswFK",
  "key10": "7qo1wes4QCXQ8Qm2shkLgrw7djYwxcbpjUZdnxUSAdEXJhzQYbBXR43DhtCU3BsdE8aHqYWNtoSdPji8pjK1o6o",
  "key11": "4odBWKCPMxmjenxetm6zi8tpSZVDWCj54KTcfTXLqUobaDv2HfSb5Y1AJEE2nbRrLv22XjmqtaVWFpTCWTiSf4aJ",
  "key12": "2BLQvNfsooQJoVvycFLoW5tQkVRnJ9dWJTmUdxqTYBHj8xj1bMJ6zKwL6VzHggXqt6AyfteFSh9Zz8WccVrjLEey",
  "key13": "3mGkfTowx2Xzia7ofh6QspS8cx92UijsGyr5dZJ6H9TkyUqT3KK2nL1f1CPVxhqgAvNh9JnxN9Ehneyz2X2mg4pd",
  "key14": "GhNLKYPKFiqQgSZXsbSUvVzAT7ucjHZgTztwBueEvmKYkZmdHojcptzRVYXHGndiKyirXe8jK3LTficgVTymosb",
  "key15": "To2HoYPie6dSRTt93CmiHGjsj4iivfxvwBb9WU8qfBPtPjKQ2hpWVMZifsUB7TDXCWK5pQ2zSmtfffjDetM58JB",
  "key16": "2B31nB3jGQLkVKaGVEekdeQiQYN6vrukbAiqtGwkb3SsASBN5qrdDh7tZkpmtmw8AEDXaeJ3dvrQpEZXkSau8K9f",
  "key17": "2rpWi4FSn8X9brfCH8HiTN8gpdVTQV1f4yoLWjScXTR42zvXwdjioA9EtseQcwu6V5mC3WiEdGsEQK8SeEqHr7Ed",
  "key18": "5VAfCqWdnpLV5Y37T59dX4Ka1ZKvkGXNYAynEL79uHvbsjMUXoqY3oivgaEWQsUENawMoUWekn2BZS5w7BeQkw9j",
  "key19": "2yWoCUUSXazS8sTGeZ6v4sq1qRH69nuM6c95kkddrPq4HPh9tcMRZEptMD8AVXbjvm6hLTjGShoUXM4GkeC1KDNE",
  "key20": "5V2xT73QyqkzqC27BrfwyFRkPcuJNna9mruFZeekRhBFTN965RBWfuf3iduvbGZDqQ5UC1oxc21Byz8tLs7heRFB",
  "key21": "21CvJm5X4wCCvVqcLy3ipJootyKN9grYMhiao6DEaEPDpdVrASjFVJrMxRJAUfWnVwDzSq7FvjrQxwLNWT9yAUu4",
  "key22": "3RJrqPjTH9U9eCLwjbXaPVxtAEkY9yWZbWD4w3Xn4YHxEcAbUCoDeMb5MngXAw9ad7RLPqQU2z7uVBKFcsFccJg5",
  "key23": "5Brb5ko6WJMajUWV4UEWgpejvPZ7eJQ3nCGkucnereHyRdCEUmv4VArmbVcfTeancXzt2UJVGwn9zfqjBvnmtryT",
  "key24": "21CFmgTUPVy7LM6PWL6Kn9vJithfP8ca21EGkJaAzTsdVgUaG4j9sDYG4twSTvFTirMq6WuyekxrYuC4sXVXTqbi",
  "key25": "4tLhyt1ZMqvhprnunZVtGCvYbSDbLLR7bktYqizzQkBK2YTvsBvsyvXPAoyp4jWryoA9VMFT91gBYhKdCKTWvNro",
  "key26": "5TeutavFm6CMv338r9Jbopwdo7u3pmbQppoeVWQHrW9dJ1Fj91cHpuzL2Y4D16Dn7AiMTw8fT8ChiFDsAZesCtM4",
  "key27": "2cebs5528xwN26qL8fHBVyrSCXir6192Q7qrWRCf82WcMY8HzP2Rv8yQDGVzhqNZ9U5c35MEhDUthV8mEtuC3bfH",
  "key28": "2AiTx4xRWZRw7EnsiED9gGpmpYtRswKzoQFmasbmZ3WHifYNHgNV4sdFqxcyy5583Mm4cbK4pUeaubavAqwLKMHy",
  "key29": "4gCDbvsTLPKvbD2cQ1Fn8Bxvs2Us5XFsHEDkz4Svg5CXv7uznbVUMizR54jEwW28ih3ddTdUVcSsJgb8DFTVVtsR",
  "key30": "4HPJmC6XPqUFkzkkSMnCUYARs1GJbC22ZzcvbdMhVJ2BTRMxfDZzTeHARw9ydgV8LPkZtkUkRuGAVmwCtf4vmBDF",
  "key31": "369Lcxaw7mnqJMYkxHQPjShuZaRG9WjTm7fG64Vu9oL8CBMBM2zzcXVmBobKgp1cjQ76LSnHH6whRCNjpGzc6DAK",
  "key32": "EqfBcHGcYn7f1HyL4cBo8cgaWzpJMdasfujkar44xpRmJbaV6zSFvQqi5QBq3zQuKwheJ4kLipRqyADDbp4A842",
  "key33": "m7Gi7z5UNwdHSBbV4S2rj9i8Ks39fkzLveENHpcAuY8VeZNnvNHMAwQQBHUmvZ1W9dBwsE3y6ZfqCz9TPdAz9yf",
  "key34": "49Xqkyz8Cm2SEecapixBHKi83yWWZdBRGv9q39jBuqx8RLT5VVBHcBDAxGG8outU2s5VYqBV5GFAkhaGNFwAWDn9",
  "key35": "3beaFWV9WweYRUMS72eNNetvB9jwYoSG1xG8R5ND2VLPc7Tyvhc8kKci9pKK5etteT8qR1VJirimZ24BADiERhoA",
  "key36": "4d64EepeoJ4UtX8UXk3PaTusuboddQ4UBhEtG8F6BB4JZpBJmQYD28Kj7Mkus4VGdXaeMFFESuyAnGXgjZdFajis",
  "key37": "66tCPNUqpLeMSQg8aALEV8WMqYiFHb3hJWtMsL2xg1UmwYb4fhiEom7AxaPRtgwcYVgjmXMv57Nnm3TPNJbqChtJ",
  "key38": "4gR19YrykwvNbhZsr2vcaMMdSzmZAUPj7nPGZE8DoXwAy83Emo4EzHEmQQRwUe2UiSaiteVfBLf8py9Lbyp8BaAd",
  "key39": "433nLSsPQWeeVeG27tftEkZFJqmJNvnAppMznSpW7aVGhZ2xBZe8FozDjwykcHRCyxZGmGW7nZHn84iX3vxUFoCd",
  "key40": "3AvT9eAgR5raSrWFWuc172yvQFFMQ72Q72kuvNFyfYJ7Yb16yy5ePkoEbxWMxR9zBwbiE3Cf3fPm7nG1yAZhfwCj",
  "key41": "zbJgtVYLA5VzvZMrYz9dpFHT1KgegdZsR5Ab2ZmugFeexLN8NH3k5MioWeEvxP3JQo4ka1oDaQgYwexAksdPzx1",
  "key42": "6gp7CunnBBbjoRvNEwRgWoT6s91ShX9SYXU3UWAENt4aXc5NPBm693pQpqC4oi2KbTyi1iLbSnohcTFaVoFHdJY",
  "key43": "3JERWeUAT5AvciULk25ZckK1CuQXsxNwaqnT72p845CnvWrKsnht79QqjM7dMeHi4deegFWV9LwRL6ThGYug5sBq",
  "key44": "4VE3R2gWcgqxnQkMySSB21kXxmHmCKmwsqYLwEjvdyGk4K9jKt76gYy7MC1DwcjXqE8G5c9ExWCDNW7chbK6bG1d",
  "key45": "2KcSea4n6bRmDHJkjdKdsQwfUYYvPsebbrNmaPXsVUdTg8pWucW7XppHmE6rzv2HUvCyhY4TQ4cedM3NjR5zYzGg",
  "key46": "3mdWKKiCk6i99yL1Xe5JT1thGJaf97dPbW46FgzqYaXMd2VA7tfh8cY9bTtyQuf7zV5fvhSrZ983cdgFy36iq4ch"
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
