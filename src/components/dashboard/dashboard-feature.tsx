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
    "2uL2UjrdKK5tmD9Lb12bACdNuzrv8iwRTA8f4dgt6hX2zbbQ56FXsYBhxAc2ih9vP5HjKjVMJp4SRJ9rfVnbrcXa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41E5zHJVVYr4XfipcHf5PDSdJ3s3fECVh4nyfoiHzdPxbbKBUnsphQRzTDpuVeGtezRFVVJYezeaf7aNYdz99qzT",
  "key1": "7bidBgPSgQALGw7289qreVaYYbe5c2AgVpvma4cpXAVmF7Jcak4CwxCdubTCKkQbuS7o1oSJ73vAyJmJsZhRtJk",
  "key2": "2CNyJoWQtYZ7RyNULvQ61JKY2qkzR5c8YNX14ShnpEAe6MVkBnBeFADFm8d53R5GujxqWZTfYakczQ96jprdUbb3",
  "key3": "2dze2xtoXi8rMdiKnFMJiboa4MQMUJd57n1ja6kUYKHgFKoetiatfyMhV9BUn1Xe9kLWQzVraa6uNgwygxWftzmC",
  "key4": "EQ3zKZ5zaWhw8wMzmnXb7fwKb9UG528nP7gCMhwCFUYXQjGAtx1eY9Fr8TuoUKFgDt69SyA6t22Hh69YJho99v8",
  "key5": "2YmC9J3WiZKPtAu4dMp4wae6D3sz1wvEN9BDm5tU3zQLkLbfQ1nuz63agfii1XeTVXyPH1PqHLxZhHzENxRrTVQg",
  "key6": "4fq6ZMGWhHpUR3ndyE8cZf1D4HKKr9P9aW5LsBiBeqF7tydxGcFdNHVQ7tpbUfTKcAMUQuCxZLuFzyPPLcDbpEhi",
  "key7": "3MnqKgdS5GtjJ7EuCXRfWyh7AQzB2jtSbYsdQf6PxywAvNQepKwwH2X3kfmrbMWRkkneAjVMWAvG4nhn3qrdH3Pe",
  "key8": "KZct96bzDLBhgBdfwoxjTCcGeW17SiBTbG7d3wd4vGHHveagxdbTT9GrE85gB3bJACpZ47zWH8oMqmok3Vrc8yT",
  "key9": "33XdpXy6NwVkAVEhRVWgV2KrENZ9vNgcLS6Vc9JSTLDLD6TEasMgB62AyYmk3MwpjxborSYW7ePahb83BhyEcbGM",
  "key10": "2oo6TWTjrzrZPc1mMtBL7bbSmqkbWptaMYdgNTf2SHusJhXdLAf1HeCRgkRmUWyaDKbBSSTC7TBVpaqQDEVV7Qkj",
  "key11": "3iwdqhTuHxA5wrdRqZQbtDpDDhDtJ28Xzw6dGxL5HMkNJMv9oB6CMy8nKLfKCZJwvSKWFXKTd12e5DpoTwc8LW89",
  "key12": "3WEoqF7MiyKoGz2iqJMUH6SECfb5TZ8L4Efw4NvbkbVBsXvsi2JeN1p8K7oYyZHYMx6wqmoUXXeYPkPhZMo6SgMf",
  "key13": "2GUFfJrLwQctBtP9igwEUyMR4DxvTWasPRqHh3AUULyKcWUypd3UHBVtBdpuHeNzeCN5CPSFKHMtxWpiKc5USW7r",
  "key14": "UaoJ95AVUH8gwnjMwiiratq5CffHzH4qmG2NYMn2S9uHHGzFPGUABXdT1TmnHrjYHoPF3oyN5PUfuvbUJ4mQpFn",
  "key15": "SAFrBWYMSx6d8quQ7aQSSDHXaUtyYbqSQNubdrgCeqhoZs6WH5GeGCSnU2W4SsQan5tqtQJfn8fVqutpD3d6ZoX",
  "key16": "3SwYuyqyrD84hFt4uLaFrbgSTWeWore1KamLmdW3YTkWypsBQ6aMKoxEN6ccf5d6MRtMBzpxRMuNKonkRSd14H5G",
  "key17": "5R7cnqAErv6JTaF5Sd5HZRXYhKJwNdPbuNkm3AckDF4mZY9VVngxk35Mqhsu9xT3AHwrLtddG1KAbDVqLuESmKD9",
  "key18": "2bgG9UBQG88fXRarhu1Ck2QTc8bBjsztCqJAx29imhJsgJvyicXALWgqSr2yxyF6Ruy6m4Ng5Q34bJA9BSrV6o68",
  "key19": "5M545bok9cUWhT2TrEnfiU7gzsJKFJEfbCjcWqy8A6MBQBVkwdnSbjFEAhYQVPG8z9nbZD2eDbRyywE32XwhrtX4",
  "key20": "3EfQdCTsNDYfKpcJ4VfYje4cFd19VgtRqJdDfxo1UAqh28Hx72TWZ41d9Gw1nUhivAPa9PoNo9CLQGrmeA58K6AV",
  "key21": "3iiUbdKXr2mPRhg1nFd6FwV6DJMYjE5mLXhdmMDpcbVdWyZ67bnKHHdZymH3AiFFX6DFzdagi1uSewwQTVZXZ7jM",
  "key22": "3r8KBTrF3GjfYSRun6TPQFxGzs7njuxtgE31XkMJ13REq9PwHUp3yDZrqbLPiMVF5PNQ7ksNL8Wti5ksqwqG4i3T",
  "key23": "4iCFXxARecT7jxrxjpRCAsCYgaDzapijTPKz1xzPrnzWKQoyTPmfaXKp4ds5YU8b9LhKtswYGXnQXTGbeLbtM5hF",
  "key24": "2APj6m8TvJHtApKuCrxbJKGNWZ7GiyMKxi9rGLtxTCfkGaj2BeEAFrfhQsZQn6tXRqSriKS84BegXuDtBnU6QiS",
  "key25": "eUDxonmt3T6BP8NyMQPoVQo1PYdE3qLT8f4LroDSkWWBF5ityuFKT4HB57eSQR2VGvwaTPU4z1yFX1vuQ1pwX7A",
  "key26": "2QKtX6kRtzhygzbdDbxRVPThhDNJteGGp5UQVeNJkc3HSiKCVS9oukStJk4FUz5WLZrpRJPsY6ctvaXFy3HJmPU3",
  "key27": "rVhJFX4Em5msr8GaTPArbbhSqGd9mQ2GHm8U9kFQgg8MAbFXLqws1UGskECWXrhb93aNTbCpE1U2kRtY5HysR32",
  "key28": "NhyE7P6uqj6LjLNs83AGjZbq62jVANCGPmNxigdjUrsPT6SgzatBKwVbjULVnxKNEBU9HzPyK79eNMd7iwg1wUo",
  "key29": "2nEH4NFFPP6fJpPkypugNJikL31L5xxT998So9xMR4ktG6Jy5Ki2pw7ZXweb8Xf6CNaRcAtYMzTytsYFpnhNxw3u",
  "key30": "2F9TfSLgoemxxj717rxHtMQPH4yQPT857Jm2JfdDBcKBpZcx3wxjT7EszLYemJWXLoQ4pejqabeWGdbTaUQ1HeGo"
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
