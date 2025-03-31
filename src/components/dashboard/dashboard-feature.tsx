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
    "5fEg4djJBwG456e6GvQCuU32ccz5V73xLfPYTDWrNiiMAkV7fdRafUFDD5N5dJ89TsP1VfCVDQrP1KVxd7rTnji9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Sm1oMPm7AFyrrEBZskoGiufN3QKdyAHTAUHCdvCHpDL7wayF2cJWSxeeDm71Yr6Vw6MBT556WdEBejTGgAxafsV",
  "key1": "3gRgLkcYTHdo8Zn9gEwy1YfsMF5honFtVbrx5fRSkLCnAdaoS35zKeLmo1A6R5X3SyRr9jAro7UBJ8DyVNfd3NCt",
  "key2": "2zSbW7ABiXHo4QbmbHKBF26bqhttPKEu7RgFuNpnkQNxtWsqpAHyJGA71DL9BpvNiStBc24gnojy5xzVWq9MTUxJ",
  "key3": "3g2rFUWqaDNWrs8LdfotPSjo7yPmZ2ZnQZSBLgwZ4hqor9CNfiT2mA8JQxNXCcy8beTxYURLh6FqnxBQDthZefXw",
  "key4": "3GqQf7rmJYwmVy52Fb9aeCzy4uy2z2JwdqgnJLefcKaGaPyeTNLqAEJXypKgpBaWEWGpvXZGQjK59MqsoS8AR1aE",
  "key5": "3UnFMePAg9hLRdkCDauHJZo4FfS35Rtwj4AyJbuJXV8YurViXzFzwZ5Dn7rMNUzgPG5PiYRSXG5BLMgQdaMqgAn9",
  "key6": "ED88fH5aiptyBtummJWgowTicAc3hiAsQeVjHisw7EgKAJH79jbaofemy3ThmvBX1Qy3zbhMtG4p9aixPUBi2WJ",
  "key7": "3CVdxMEVtQ3azhA72DZ3eEqEztpsHznDQZ6cUYgjE9D7jDdJeJYqXLobHNvuCQpRZ8NrwF1ZDyHGMBZrhAuxV98e",
  "key8": "3x9FUGy7JwK7M7s2p2Sjj3Kzi1AQ5S6r8uWH38NkspRvA95taS7gjgqJgEp3G2iJwmaidDw1DJxa21aTxgbevB37",
  "key9": "4LELnxGtrWLYLVMbfBC8vTcc6GxyQUjWMSoKvK73BCwWnrmtTgFaCdEzYd3g1p7rVsHtStXL8kW5s7p9xvr5yeua",
  "key10": "4YsvFUJy6srHWpoHuY3CmakYAxQc1H4Zxp2xctUsHphdkYWQwz6ATnJXrHG6kHG9ZDSw73gXeRX3sRP8h6Wb31BX",
  "key11": "2iGc9XikcPuhGkKD5Q8pZADBQwKtqB8bRUj9jM2qoHAvQjvupeoyPhFvZWAENEyQKhuTcaj4phjkr195q4Gft1VQ",
  "key12": "3qrPwigUCE8r1Wb9wLComnNzuPDFV1Gkn4V5p9AeSsvLb55xjQeqn5KJHCDnmF8sMMf7KXVDHZCm6XnwKKLq77BQ",
  "key13": "4KeTN1eN8wCTJMJp4TXcPXkcAxpVxhp3ThqKUVNBPjfuykq25LYDv1vy1tNrmNyMNJMJi2VZGy8uJuMqUL194Vy9",
  "key14": "27gPwy9CRu5WSLzWSEe8ZjzrMCqBAq911BxWK15B3WfadVU1UZvjAx4tNYGMqAgL7ZszqEdnphtYG32VMyvV7E5Y",
  "key15": "5Pb46F6xXLBy2KToZAniRb5UbTv3hvhgirZXnqgLSiA2aGFWN3apR3hW2ea7YQ7LwZdqqZV65hndkoY6gkgYAAbG",
  "key16": "62k1xKdPty2GUGt9HcerinwZw5BPLx1AiEWkBjCjYKm8v5JTfpJzH6EwLiBj99zFjR9V2829snKXb9RpxBrdZRxv",
  "key17": "3VdtB6LX7wKrAFgfzCBhyqMc7qzPvqBdaoc8kotn5XKGpWDYquZmB9TMfMt2qRHJcCDDLoJXdXgiAUSwj9xdhtWn",
  "key18": "3wo59X6CieyqJF5RFPapQs5TtskRs5bre8zLcTxZ5Vmotj9HFmZ9csrQFjgjWYp8zZ9Udh94MT8vqZKbhP91GSPm",
  "key19": "5M94H5JqEUTFGbqMu6ApLJWuYtYRTybE7jgDV6dkJpUJbPkDGGA1ryTAfUUphTcuWyTcPN7Moh3fFYhFgRwMHvNM",
  "key20": "LBVcCaoFmGA3zvXmHAPem8oaWU81q9twNCBzpFUjirkgW8vVNj4vdj59c8MAL4LJhoYxZsNaqGub48LXVwLLv2K",
  "key21": "3RAn3w2Cjuy6tWCHg2bf77bUzEoct6c6i1qJ7Jiu87Jh3e5pxYQJGKZQ4Q9maxx7pMkGFod82N3EL7HToj4z888W",
  "key22": "ZpFs2pNT3enCczBCEkRhYx1kHS5jQvg6ynFZ9zZxSnTPAueb7EZ1SyQhhGqFZCy2bJXBmtNZmc8CvwyTbnzkzPP",
  "key23": "4qPHHT7NF8SwFuv9ZnZhgFnZTMdfT3Y5esL9BtR9C7Q1SzBfgpPfQ8ip7yoE6BjJZ5GovUekBuCz4NBDHZeaeEqZ",
  "key24": "5FKPm2CfMH4cYUJ9QQyUTNQWEaNc5kaQ1HBPoRcT2rZBX1TiVuDFh8NHoGY2csP4q9CV37ggvh1qHhuF3A6apuqt",
  "key25": "QntJMLFm8mrnvYfgsYhGp7ivyvcp5e9ukQ4q4TQYu81zTnEsej6dyxmknhgpQBzSib8dWNpaS9Qv6JrCaHZzzJw",
  "key26": "3xekuHSXpAFHUrbXU3AK19MiekTUvmNQY3ZSzbHuMYU8V4R6kdpv1LxXY8J3YLxJfgnKi8avmmb7htieED6ez1fk",
  "key27": "45LRm1SH7iWwX9kQVBxP5QLCpUMh3VHxx4gWYTTTo2NWSmxmRnJ1uE69ZJHjRkXXHtn62vC8rCXfy2Cx2Cn1xAL9",
  "key28": "2aiCYjvJyw5LD1haUrrrGRGQsCd424YvFxz6ZTE6qmP5s8ob65LQpQkbegN7tfTnwm7EC5abzvn3FzfdYKxZ4sqf",
  "key29": "3d3cazQTkKm4YsGDuG4ZpvUUi5X7wjUStB6nNcGfHtGy5oSGbQdQGZ9jV3d23RBiZnoMqCtpqjL137MRErJXXyYA",
  "key30": "5vBZp3pg4EoFaJqFXPTPaGhC7amQZwwNDFigzLX9vgQE3665bE9c78exVnJKV8tSAN32ixkJRdaxfXedEaayDEKh"
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
