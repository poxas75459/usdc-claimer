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
    "4ouzCY2Fi4NzYsfTZM2fXTRdJW6UM3vMAADAqzTmao3Pat2YXppnNqkrnYWrSCLP4qx3HbsgC5fTXMZsiYJ7svia"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5T2Mzqp23bJiXR8YeL2xLwfUZhJ7kNzPLYwCH34b6J8ZQY28Zk8bb7XYSTEq7Dh6RZE1QnuT62wYKpz7XhqYHdzx",
  "key1": "6aHXALky5YsbGFUGKwPSPobrZ1UnMebDrhBCCx6JgqQVK8fB56CGybLkUvtEG6Gbseo7GBLHXfB7j6rWnj2EZvi",
  "key2": "3nNNhAjrNTnXR8AZEdFuE5N6cnPYuebveMHe5jE7aLMKECxvtHPUnkVKRr679LECjP5wqS1J8J5jzTwhkYCVJBrY",
  "key3": "39bRW4Z4vU88uMuo74MZHAiJwAV27hK7EBGN2FqGtZfCFuUgnrSv39ZxYtbfonywhjTKTARWAHvgjM96yHxXvAt9",
  "key4": "4wVKgbV7jo1AEruYhTAyYiB9bzwqqhetWzorwPjK7wTc2BFzTMg1RtRukeDTGUj7VPCewTVp6axbs5yfffC6mWqR",
  "key5": "2YWD1nC7r1PSubxynVXsPVeUCfAPeFxpWoFs9CN2q1vVoZuCidK3RkwG2KP4orvA3NDPB34b2JNoUqYZdNRk89EX",
  "key6": "5KkahqZtPiP7MM9HKjXxbvb3M8wwyTkYzTcWGmhXoiResyman32AAra4Dfdah4SiNXtJKTfAvMJiAg9avPnZexAe",
  "key7": "i9ZrV3JqX9mHyAWK3UCrtFp7QngNC7SAJszzkc6QaeE77W376NkLoC5A9wdF8jeGf7CRYcvWB7YPCmexzvVJ5LY",
  "key8": "4NxHH3huerspw7rujjSsMM7gyPBGzHbHJ8G8VRpcwmXiEALfVPmAqxeTSYroD6sxpBAt7yCLJdP2MXxfcfWtKvz6",
  "key9": "4QReK1uZbxhR9373iWGEN97v4rZTd8RNzYyVEUsScoAm8Wg1kUUUouxfXUbG28diSo29VmLb1WxPWo9G1o34cM27",
  "key10": "2n66x4yHehC2mPEyAzRU5nJCQKwR8SHrd1iCuvbLPzd6qoz1A6YBHs9SYaB1hAEhDzSTWeEaqCewCadGsaUPqiyv",
  "key11": "5sAo6aDpTvyHoRcffxCt8zSo8EWmBrLvw8AR3sxt4r2erkwAaFRHnrQnFCwRFy4bDqk15m5JH7Uf4V9xC7UA7nfq",
  "key12": "4V2RJqNNhQdHjVRuFortkswyrLqx24XPptRvm2JRSzxYpBD6CM8d42SQSHAP2KZEyfFtE27Pcks7tgncWzNn58Q6",
  "key13": "4aWQosEEPFqNEkpeccpWviSiix4DZP7vD1wbMSdrfPrBCn5ZTCYs5peNDeqxmw4ri33p66PRcPDDqMrYHB6WoFtS",
  "key14": "4EBh1W4EFGoevWYmzh9uXcwCE1VJScnJBSL6YqvydiecTgNdNrC1L7x1XNY38rfBPfpsXstep4xjBCM39emeaZsV",
  "key15": "3KKkTk7gPVCJocxpqxeDZAAob7yxkYqc2CQW4U4rasEttC92zrnK8ToShLTRb4gVyrrSkB5rzf8CN5P64BrG4CJb",
  "key16": "KfRas3eXN5VL8MM7pzS6YhLG6TvcvcK4SaEFJywA16kDyJxNxwHLRr1fAyaZFat5AQXyrwprZDuNw99x6cTSAh7",
  "key17": "gYjmT6DCYhcbrbckvm2dLAz3QxSktB2GzCnx4iyaNxPx3Drp8pCjXkhZ5pZAtKJdcDAsS7U2bZhHu9jJ4eXxSL5",
  "key18": "45PnHe1APm23ttZoCEXWZ1VKidHmnhPy8au44Hj4PGRGhoQ5ACtFW3yeyYECSTkA2DYpNcMNLFHnp4TZtpMFFmkh",
  "key19": "2MiLq5mLmjQN3RphrutQmATHXtKnTyrjJmukJZLngnYgzhiwE3u2UEeDFBcyi5H3mrzW71d7XJ2LT9gaV9nnUA7Y",
  "key20": "4ZD86xq7tbsCSm5Kwd6oS81nLUR6daLZSeYoTuHYBYTVLfRyycsh8BSRopFJXgzXKjJDgF6y1yGXopPzVmqHnNZa",
  "key21": "58kRwh6FpdSQZsYNvaAYXP7tWYXNhx6FSWDe8RthBxWSnUNUUAXUqnfaQkBjPB9tZSdEUWLkhuYK2YMmtaHDJHzS",
  "key22": "53QpUhts5bMvAV9jHXH8dDxmCdNowoE8fDPL3Cpz6Ny81JVFdkddQKwXu6GcdFWEzK2hGipHBmEw7kzjWL71qSEC",
  "key23": "5uAvqFfyub4JbVRszWUmyxBN1Rx87TztgzFowvoAgp78pYFy4Lw4mNSPsoPBzaBTj6ZMuUQuxcqnYspDHPnU7Rdh",
  "key24": "3kye9f8BuDy5CdhiWGbZq7ANdt41bprpjCpr1P59DsCRkw6SWECS1KKPqvogNzfJXpUejew7oatVw9vS1jXBqijp",
  "key25": "5bW5NKsMUXF2ViUrovfipHMRcEDCvV77AqLpBh4TGvrAtP37zQun2TAotZP4CVKURd8SBwGVh9L2D6BQqLJ8Sbap",
  "key26": "2YsWXkUXwK3sjFdYSjwSF9aWKriCXzj6aXqfYsYEmf3QHM11GXWy6R9GY1GD3KAn9PyA9VpocppQWyV424D9n2gB",
  "key27": "5Tc3H1FyxRauTQJvJGhwCz7cLd9uhPB226WK1WNGXuBiqHTj443cm8HCtzTPS73wXfknHBbQ2U9AZTsB2epYoemJ",
  "key28": "2Q6nP57ZS7t5orLsNJ4ZHq2gFNXZCnmnrGdZFyapSX5Sf3gQ7gHCopzohiz5u2FSC68AZrXZYtVLzR47ywKvXuhV",
  "key29": "4wWVkUnWw8wnsF9YU68intBjijn9npuCykKVvRHHYwYPpUcGDwVZKiQrJcJkMUq2Aoify4iS2Bc92m6BNdERaHAP",
  "key30": "2WchzhbsXKmg9u1DygaUE1jf58e4soa6E6RV5rxAxK2zrJajKpKiFBhnC8GTmrveTfkkNwhkWZnpamvUQv1BztDk",
  "key31": "5kneRHRwA4w3BYNjz8Y5kL3bjPQ9XZytXD8oUp1MrAB285osGffDjWtBTfE8A1y1Uy3Svgd2dTAQwtJcAaRgAp56",
  "key32": "61Jenyer5SNyK7sUActRHTFFf7TwkixUfH4R1sjV8PFoTQq8DWo8maWmKFCDSBsxK3gC5e7sBFTpQB7VvWX41vPr"
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
