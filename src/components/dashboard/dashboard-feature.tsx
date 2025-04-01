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
    "5d5FZfyCxyS1aMmgKYzcC5brpVEM7FJmjdNtztRy9Z2McSt1vq1KbGgYuy4JBZ61vR5LirvPwSiAHPThT6UT7r8m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5m8wKTx2D9m7UA8RZ6dKKuA5oeBT7m9y3a78U8BCdERjntH29sHew9ogBgFViPAs3AqJvzoExGjX1ptJ8NNMQhr4",
  "key1": "2eLBpxFrJgzJQkWrk2A1hidjHyeyZvyQJ7NQ3iWN4QKdFKV1scehYkP2fKb46Kv9pSV5yF32KZSLq1Tamg9TY6Tj",
  "key2": "3ncb6fwe4YVTbPLyVScLm86h5vwiNa8TMWiyoj2V6ApB8dnBqETLBSwM6vWvAS3QMhmLhw4RMH8pX9DJTag8UnFq",
  "key3": "63RcB9ALMFziGtjhB3AHPW2oXTE5wbhLJEetbjwvPEd7V6y5cAkHjLBYQA83Vi4aNXPKcpfnUJJD3WKghpF5EaYr",
  "key4": "4NzsohTV8Fq1Y24qywZuR9potV49oECWVuFrjn9BBN1Vj4ceqKCiKYDhqcZB7yTEi6nsVZenQ97tYgNpNy2K7R1s",
  "key5": "MnPjoivBTr4XcVHTRFagYFRSatppdW5fEZNoBQsEz5tWBzqjBNFDfVS579sWpUkdrKUMqrSDzTHxX5gfcvaxwL6",
  "key6": "51Y78RDV26ut3qeyig1CG9fmkrzD9XXota3qxs4zDJcqFhwQGfX4cpmVSGrQtAtEahCDNCyTJXphRVKLPL3KzigX",
  "key7": "4zeAmkWDTjJKcnCybBobcRcJxwjeJsXFqSKneqngjuJFzPzaVumz9k5JGCn5eVhZQjfP8Eu7WaApoKMXXyxM3Jg1",
  "key8": "fDJEsNSQtAkRW8H3xfuzS583LEDAm1GVFwQkFL8kceP65K7XiaNJaodGht5KYQE13R2u9fP3M4tmXY7e5SAM1U8",
  "key9": "uxhzPsrppSSssiQUzSKeqFQnqjsCGvtiFnQhBJAMVoyKPZ8QYAEkTJ1m6Ju7tQGs7T9W1qhmsdAVZ21HJTgeHeV",
  "key10": "srXkd3qXgLTYKGafwykiYqM1KVMHU6rtLgCmqiGszcu2ARV3YtKA7fJnrogb4fU6VJeQoZggpvgrr96tKVvvYQ7",
  "key11": "5LHgoCkUnSAaDXx8KcNSo2wR5KLBnTfpzZSCH7CDNEK1bLXFbSWRZt9GduS9h3MYHPt9vhK26U2Z9kVuJLs5SUh2",
  "key12": "3ShA5RAnJEyE7Y8y6znGngy2gubj9LN2b8TmyHnWPwJxEPSug4ZP34EiM4GcBmFhcdFVxe3r254Wy5jqQ3nDVpoF",
  "key13": "ghx9tJhMmJAGNqYLM8uo2S6w3opLyw8S3sTgV1iYxMoEbcPkTqJs6fe6MsRvELyNWEJxUP9TfPuf9ATu1ZJiWP5",
  "key14": "3JZirCwDpDdbtmPevMmx1Zi7MyiK9pz6zAiHgVUZfNaH3gNT6v9n45mMX8B12vMJJjf8rP6nTU4856EAAvcZWXan",
  "key15": "GWkSNED14P6FvbLmhoq9fUvfa3U25vYaBdBVaJae9tfrqFT9bystqtBJriqpaRteerUXU6rb7ge8ZLuDDane2JX",
  "key16": "2qUpxfcbXzWYzvAsbZqir8S2Vj7q5QidyQhvgPbZJpCThDir56szH1YWN38mkdg9ccahzbGSHbf1mToMABv6sAsG",
  "key17": "62ryQBqApM8GDTXiRefVUbX1mKNi6GoWzPhrhFMwiayo6MvjJDRE43Qg5vF8iifnY1J41k1yLHWoFUh6S9WVjSAR",
  "key18": "4oSDZcGKf9KfbZCh63Vg9T7QYRJQxushoEpewmsrKPCXwe27WdoZJUyq1Pf2Yyvv48EKVX1nNzd47JDtn47HJE7Z",
  "key19": "4X9f419zvB71VmZrTb5voepkix9Gz5yuKEuxHzivLitUYML67e865BgtrhnphA6ruUtVwEpFUMZtJkoTLTWutx7j",
  "key20": "3q12qPLuyd6SDeudWyD7TaahVjB2CwCUPZWBX37SrzZ2fMkAf9HXJTHYLhKnuA58kwRTg9pfHdxH3SKf5MWbxPCu",
  "key21": "5bfHdg4eRc45nAe2VC7p1Jjy62ib2H4DwLsroCiK2fcP4T4fXQpLfgz8Sc3MJvEGeeggq9sKRJaQVUUzaAcZXtsj",
  "key22": "49gG688nkxFwDghcoWAREkpmCx7qQUxn59fF5wx8bUqy8PxpoTSWCf7HsSiYBBS4YxpppR7PestWty6MiRda1Trr",
  "key23": "3e3z7Wgv5hhsaqH5yHcyoMJiEDkRRZDYuuvYJCCpHzvWdcVLj8x9vNN3tQ2J1yrAYiskHg86iuR7ejPYC8E2fFa5",
  "key24": "5fRGoRBRcPBQbFBAjVJQB5CLHWDkfSFoz5LibHcz4oeTFGdMYVHZHyibaec7yPsNFXuLuXKwd9GcmAmEDrzcgNUv",
  "key25": "5EwUHdHnmDF1CjTNUSjpPPwbyngMAuiE4ZkuNX44PxHk3jkSTFWtvXuiAC66vmVit3MpvddaxfsXP57HAqTM48HE",
  "key26": "4QUyCow2T6rNVGnCbRuNGxXZRV2zA62yusy56ucxzv8j8UkHCoVG6txyPv8guCKofq8A3dD5gPCqUSK9n2ex4gJn",
  "key27": "fpehvqCgAN1hrMwqFQUeTtXLRFPW3PXNpoMAQ1FJyXrxwGfitg4MkSRvoZ9TkTQ46h9FwSPS87DMyuFn4UMLbeD",
  "key28": "7TTqUhweze5B9Doa41nHrBXUqfvYAWVPk4B2PwTsq4TMZWAFm9eFWVY1vhgF6h4Ynu56eXn4Gh3EPqoQuvvYcnw",
  "key29": "dBkrBPfxMjWHiFKbk1HQo1vceFkfZhYL3oUADg27dFsh2x74NgcUGHjCKoebTNHniipNjKAD9p5D62ftFvhig1C",
  "key30": "NJfsaUK5UzM3DkBbAgkBt9H5kf2ji8NpS44byZQVVXW7wYNUiKyyeketLFS2NoV5tbUsfmmixs18HyHoagb96ZX",
  "key31": "55xQMYGL6SjuZ4bkHmx6x5EyoGR6s3BuBGuTmemcAKgkwF8wyCcPH2WJ41519UhT4mAwnFrWUkhJE6LqhtjxqyFo",
  "key32": "5rh5mXpUMVK9qLcbbUC1yGrxgTTbUxAbrWZ8kAHg49WhAhxbR8hxS9fP4B7n2PBCsikX4uzsXfx7aHSqTpxwTz1i"
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
