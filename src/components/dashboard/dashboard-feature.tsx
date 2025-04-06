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
    "5H2i8fEs911R8W1BdPR81soa5xWMJpAEVickzF3u7H8twHC8gSM5sDjTo7hsaxp8Rdt9MYFTH5BLAXEZnb3tvx3u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LT8iCEPRbGcNxS1V5AVo85FGjR6ADwF7NjceMqLiV6axck8Q9UpexqPau6hjXGen8L8TFtkhMNt4Q3ivsqm2SVC",
  "key1": "4UfNYvHHjLKdtLtxyoVEJecTwPw3BKVhMgC9v4Tgf3DLHR9oohR1ZCHds2R5H4Daa4j86K7xfNq6pFMczjrsLGUG",
  "key2": "3chNwZA7FZAJEgczzNuk7vFzB8KVwqaix4B7cEneXxRLqqUxqSNMXTfds85frFi2mrpcxGs7phBsPRoWU9Ab5p7W",
  "key3": "66EyLxQWURySJBXiJY6phDcBCqX5UdiuXQhY6r4KJfXMeXr36zbUjmYs53v5oRg3FvA3vRMLAsGR54VUxjWk6TaB",
  "key4": "5ESzw8xd5dWY9dMLLLvyrRJSEYnVL4Sp5AwfJbsKX7ZxUPgzMk6Dcs1U9sutECvGrR7M6W4EuqFobuLcch7rBFvL",
  "key5": "Cjg9qwfJYAg7xPUtRTbqJQZCJoUkeiS6TzK8972zmrezGAZY9QDCMFpFiY1o7DHyLwNHMvhffd3D8vL81PVrjWg",
  "key6": "4BeT518p3Bm9auJ2UW9JWsoebvCaujz8ZsLtyMTe1zEnZshkJAefNJ4V9TFRfbTdYucRiazbj1nmJiJXL1iRNPgx",
  "key7": "2m3h9HfntcEhAqveNCsDfemgHzHwtMtK3dZzJwc58q1iVtvc73ptJYGFh54BEVwSRk8zuTbZULKGGjaoHtXWHNn9",
  "key8": "3iNdEVupe4QMzWJVziCfWLzo8aYUcGQeaxRok8k45tZvdVxweq1Q2EkmfsnZ5tnm2jSBbP6WVjeS4WhvuhuQX59j",
  "key9": "6oY6KgsoVF2nwf54rDMZqD2XEhjfnUCtWVnW9TQCKZYtTwu6Ukn54xFv3Lfieq7crZj6GBRngc6yqm3nYkpqNPb",
  "key10": "2q85fZ313WoauxVoAkExJJrmCBdRQ9LsatTMF22drQNdcDAwP92ntvHiXBB6BS8hs7bWnf1qGjCtw8xrhXV9hmaY",
  "key11": "4BJsBCrxdJAL1U1DbCv1oN4iu23jiPgH3Z2gBur7LFSpzQwfEnHUKZvZyGtr135gKv8Wf17A9rkNh7hVRfNz2R8E",
  "key12": "38cj59f13FWxQ4186dEYYaisf4oCi6c9efob6ZvrsY9awiLc7BB3bLDDKSmcL3P3hy3JjCrwFtMuyPSgNNKgMA7t",
  "key13": "5D8m4wCC2ZeXAvVgrXnSrtbBzY55qpDGUBmccAJWP8kURWpd5kX6ghb1nKaojyQdqtrjLL8MrZmMmeju7N4sqcq3",
  "key14": "4mxdswwWND33PKMLdJ3Jjbh1AQ9Jtc81j9SqSjER1RDHAdtRve1d19UoS6Yzandws9upGxoVVsijgrv2y7ZV9HmC",
  "key15": "2XpRaPzWqGGLeS1GKRHF9ogeSQuw97Z21ffEjvvWwp3fTTbjV2TfgTR2fkcKKnXAF995qUpj71hZP2FnwKfxjxKP",
  "key16": "RUMEgBVRgM869WtM28o48Cw32zy6xgDfNVJFxa5mdnsW8TF3CzxSG8jnYrpcPMrtdWnX8G7NL2LPKHkb7x6QRpo",
  "key17": "FjPkXNKSDbvnG9Hmyke48NVK33i2kghNuFmBGQKgB1cCotGQeUEYg7TUPdqprzKTa2dUUpD7S2t1EVK1zd1c9DL",
  "key18": "3nQwSoThBpt2H8nHh2xCbg826qoVePMi8XffSk4tswdjaAaF5VtCYtu632x1CDwz3urNca8TKgUumtw3PhDPKc4z",
  "key19": "4ubrXfD8vZfGT5j5YxXVQ58ctSTnk5KcFi6SL2b4cU8zdDmd7uKQ2JcJ8tukPtTxK2ahNZ7GVdHWBJK8XGPML99J",
  "key20": "3o2y3LcetpGQ97rTUHrwHvpv5Scib6dpQvrZPafhRmaSrH64fF5vaRQC6Y961bdvDaha5DvzV721WKn5VHXcw6mS",
  "key21": "26VSLf2bNAq2YRZ8d3tYV1WbD6Ff2C2yb52dnp8iNnxagnWQqnLbkmEXW1gVS4m84wvFRVyqVtbfmanUudERFxb8",
  "key22": "5zEdsoqGVrkoxgWVnGyDCLd2vRtPHPTSe6g2fYPqPpvZD2enWUPDwfERyUTMe6XpXCFPgYkJqsH9ccBh7W4x3k7B",
  "key23": "2ZW3TxG1HEwQMbE9qwqjwGaocMSeFv6PJLSJ7oMnXaCav6DzkE16VKFAFMopTHX1vZ7RdJMWPpfmvPxYHkrXWgaq",
  "key24": "2BxuYq5uF2qpRSXi2d4jEXcdEAqWyd9UnFeFdK8gp7Hwsdjc86gqAJcMWHkeprVhri8jw6pavnpKjpfznrGkFgf4",
  "key25": "EbW2R6VAUV42MAfKkC7fitkEQ2cVFQxhcotqV6xt5btjYMSPw9P1z8oZPdqT1iaZtGnFC6YwMU2t5vVVEZ3dBK4",
  "key26": "5xgJDXrHGefustYqEd3wDZxEpwXcM9zbBZxq79jzcAQV3ivquULySaNgRkqBCthCFQoo4ic1kyZAdVjsMZQfXcPB",
  "key27": "5HA5EktnfrNaeJjfLhyywYxonwqYMABjWegweQXyuSeCATtBg6y9aDxUkmoYkxzVp7YLqUEDiGGMVqVAHofsxVnN",
  "key28": "3VNR1hN86cGaNymWhxnjMDwYojK4CNagZVwEjfqrVg7ht2kazEXeZnLdBz2GtHcmNCoJ9XLqJLft7rURffK3j8oe",
  "key29": "53jrLpZQQVyGsowfLDNzfyPCJ85KsoFbdMD1bnwxuXTbeGRMj6rxXBgXrcPCRE4D6SEqF567itHHqhkvu233z7px",
  "key30": "258FVx1PVtyUh99D6cNNiKT1GCx3j7UxqrKrYeMgRW6krbiJNBcWirX44i2G8Mv2Si3qytDNXR8ocYRGGYfrQPwM",
  "key31": "3cZrKqj7kDGFeYQ7SoXFo56mR1kFsgAsJRC7hBMadaS2wQaRPFKdDKVAWaaimDiJhC8DW3q4ECgf1nm6RJY5rA9n"
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
