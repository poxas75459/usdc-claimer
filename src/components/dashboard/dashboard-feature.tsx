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
    "5apgCmoNmdcyHbawWhTmb5GsgF8hNqwCrFNyJtJ6L5hRj5wVjPCvvMJMUEZEdX8zYpZMv8r7PPZpLWQK9w9erQoo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63x6oV4SEoFkkU2QRmDDzthoCckryVezoTgvde9nBXYGFFBaiV4fFwa3rUdBLNfLaC1Dg7JeaytYfk3pZwW1kegn",
  "key1": "4s8xdaWr9Dc2rsAawK51SQAfMpGkW7Nrq8kpXky31gfEi5FCBxxGQwSohNM8xocDGJtmL5nuz7erkiMFPPYCrCtr",
  "key2": "3WX3nhmNnFe5mzk6z8S32ZpVTHoz3bgn3CiquJcaC5gS18UspGfjb1QpdEogZY6vqwaBhKbVhzT5iRUFpdBtoy9Y",
  "key3": "2d29nvKS8g9p1MEFQFzesBEPZA7aE8Lgt7nXPbA5MT37io6HwghT2WzMP7oaRGUPE64Bv39YLZYCDNt2kSqpb3fb",
  "key4": "3SwuiqM58dK9uhEqMgYPaByM9iBCjttMWAJ3mCYqDpsXz1WUcsZisyB1t6JEofyscg4Cu5VCYe5BCwTUCRenGsJt",
  "key5": "3CLxBVSFdmSvyeLFCPPnYRUVQATdhiJouHfDobJxeEygKQi4mS8P5oKYZh9opVGFLsZsHRvfg893h5GaG9gkyjHx",
  "key6": "63eD4t8v7pAM7JRAeHwUxWiLHtEpp9rU4TQ97tiTwsnb3KwUYzhLU1FKGTUmbEyYEzL631qEUTvy9sozC1EGa522",
  "key7": "51P1KtDiwoByovnZmCmAUQJU4SeofYnkZNqfqgppugQD1aHPKgZH6oHhVN9oku9xwe7acTmzRhLPpNpRgSjXNVoV",
  "key8": "iYWu86MyuAt64KLcV6iR7oXvykCtGAd8HdqF7zuwekckDx5fsG1Z54i2Y4w22cNanBXLTbSdxv5BViVaRiMkEeg",
  "key9": "4BGXguZwCHgAeeCM9xDaKm4tJeGXbymUuuWHHmkCWu7CFYjsVxftGrkahM8Z2NWEXkzn3PsL12Ms5NcaUAFQB2iX",
  "key10": "34T6VnqGx2Ay15SFhTnad7vGRLNtLD5yTvyHTF2Jnog5KJ7xtGwqEe3B7RR5N4ueR2jpto8VMVyQ3AeKQa695HTv",
  "key11": "24UxJs7zKjK3AdpHBm4ekkLSAv9jHdiNyKTpwNne3KkZgmtwePWC4ksTfxZy4WbtGDAjX874rS1orTFCNcMtxhDZ",
  "key12": "BLAoGq3soerHfxDv843nQJwhj4QMYYzYkhfYnB7ZhVvuM8LaimY3V8i2RixbiJaSgKY3zhwDHEKcZPAx5cnqmMT",
  "key13": "65ugCbP4Je8jeaSVnaSyaLgD9U97nSA2i94D2zoRzfRSbzdAKfQQNzSL9G2ivt4pRQbE7vRqzc2weKCaXwPrtkfL",
  "key14": "5dpF6jmLgQrMbZ84to5q3nuJYiuvnSnoEMm3RD3VqpxeA6n5XT7zBJBPoWoqYKGbe5devUAmgwER5zQPseBoWEhV",
  "key15": "2b81ri54aLTNHV5RrmegEFHxswvEcESuJ1sEE7tSNcCwYturC3mN8dp9J6i1exynydzVoVNiNmahEgizSEdGbuWk",
  "key16": "4KtyDedND873Tc958jcpofS6oD9Bsshfg28ijxQYoqU8xPussjNCcCPjs4jQ7yjJtwSH88DZ5nVpVUqAYTo6GKyh",
  "key17": "3oYfn3TejVyp52giaHqgJE5ut4VUaspK8MaxEdJyStXMiJJ4H6HUeQMss2DUXW1rDgr9HBGtMFSbbsVb2vEaSKtz",
  "key18": "3GeLPqSHQuZotfyf5SsiP7AQk7LU3rX5ucfpJw3Q5WN7puobPBGSdXvcvk99axyBJKV5b3B1Tzgy79H8ABsYUZBL",
  "key19": "2DzQYEVFRMCCa8FFzjkFM7FJ3GriDvwgoiiAWNXLiRFWb28NWdhgHx4UPR8H1eAPthd1Af9M8o4eVzXwHhnJdM75",
  "key20": "4Ghyf2ppixx17Y97J7fiedMtZZWHoAeZTJcbYXFb11jyVkeF7yXZDji6tuBgs8tecggXfp2hb5n4p5wx47s2EDgY",
  "key21": "oVxKwb4Z9LForYuGQbupX9hWHtffdyE8BL1uK4vGJv5ajXD4G2GMKFNjewrxJBxeSsvBZoJnRJhxMCKkLQ33KqC",
  "key22": "3WiTqdhREtDRoKK6T27X4u2BiHkkukiC1sAyzv9aTQ1HTiQHZh1muiyZ9hFV2s6sELB4ASDAyVHzYADUAMmosMUU",
  "key23": "52SmMgcqBX1cQVitcmyGb3rBiWx5nmPH9TtAkA6qsTRWSyskW9Zh1UmFWoT1tQjFpBTAhdEAsNzm2ByWu2DYzL7t",
  "key24": "4AyWgXnRyadqx65DTM8N6jmXuV7xYnA6XwgYNUe5H35qjhswBjDpnR7SdAe87XadJidUK99YXSuHcb52zQXmPRAY",
  "key25": "1kCCrfsnXeFXQDgRreEN83dn4J4SNLJhobutqgwKvUz76oBErJCU3YmNMoDWp7FptpXFJf9ajKcM2wHQv3PaHKE",
  "key26": "4ojiyNjiyaUrQPhxzjP9Qp61tVJtG3zAi9jgunXp6aXVenpaYxGKP6eUapvXJ6nDqoToxmatCNnwbedjh4Zq5DT3",
  "key27": "5hnnUdZpPuhDMSQsJp3EXDyiNVpdyJGU7f1tiAgqqKr1Nx2E6YoTPxSKyT2uEtcmmS3CLrDFQKqwa4RPsGBhrSAL",
  "key28": "3hEEFDDe6tbuC1MgQPMyHwqeX1hNN9G93CFsUW21wmMqmbVo39MgSJ1CXGodmC8Q6hAULgYKqrjZBq6sRBkVGyLK",
  "key29": "MPajB9KxxUeypohhf1wo42CKsqJ21adPshyhgfjW9aZh4eNtcTC4a25AyjQkjXnunM8ot7q9HJzm4ytxEK7UcnT",
  "key30": "YKnsgikfBokAwiRLowSpGhDuBszpW9X59RtXxeGtvxXgdwCqudySPv2ibLrTE8J1BuGVKXXVcQ4acTfR8sKjW5Y",
  "key31": "xt6k6PJ2Tg1AxChSddTVMEGcX39CFJitSzD335goEyCVs7heNkcZMmQak5NU3HD1E7qATFm1Lx3GRqii7q4owBY",
  "key32": "48dTW2fjApiurzWJfJZru6muJHLWjbBZTd6NdPJ3LahcdtkGryd1rp5ANJBvmYg4MxX2voNptK7AMsfxTFKiLVhU",
  "key33": "3pTe7rC8iaVRPnF6Qqcw4AU5kqK6r5i7Vqcm1H7R2AMqX9aQ4XFxvS71gpDYmHqBUvejgMMHL4z3WXS5y6rqXavS",
  "key34": "4PdEQAeFvzmowkpVqKmexWnEnQo9VhjaWHHzjLgEnJm1DHe8CGsX5VfAaSBmp131cCH1nU4VGdJJNUmErMdMv8wg",
  "key35": "29zoszN35FrY1XxCGJU1SSFxbtvBgsvHyp3Uk4RycwxMmdx93fEJikijPJyzoMsRzj7sKYFbCQZREHz7b5oJTLCG",
  "key36": "5BkFcf5QC5YULGCuN6utNWPiQkMu4VKP24kdnD2JEtaz2Hxmyn9ekVW7LG9nxT2CeL2mzuoLvAoqDvjkAosY2kNP",
  "key37": "4ne31EGsLfvRBAhPCSAjCDx2QZ2Z6m3AuJKAmJAhkyMa65mTHQd7DLKAwtsxwGhUpTRuYAd2nprqo5LgL8Nyk6ma",
  "key38": "5XC2bZtpWChZh56iWbrm3h1VK7cNjJXnHS1Ne9jvcXr5TV2it4C1h5MW8VGmCiidrFef1g5kyggjqCrsoHbKxx3G",
  "key39": "459qFQgGUm9iXMtovV6Kr5bojWCdJeV3Q9RXdeyyoDuTfBi1fhEQRT8rbLzR41rxcbBw6KdjGZvwnEUVJpAupGYe",
  "key40": "2ynSw8NWhtEoShiFVr5yJJ24c3XzndqfAAhdriM5fBU7M9kAMjsKrKupjGhjhw4yjFeUQFmcPSrySmTR2MEBZH8a",
  "key41": "44FYfSgCQBcqEWSxygFrx4QJNEhnbf12CTpsH5txpVc7ojZQFFmazY3FdRHFmcV67eDu8WeGCFe6qHErLvvBBZmL",
  "key42": "5FgnP8dpenn7PxEQx122txGqGPnL4QnePxT4GQjMqj247UmWN2Zv5Mn5hxK7iKsrgPf8LnrCpyDkf54oFGuvgtEo",
  "key43": "2WeHiUANJk8qdLPNtGudKm7G9zCqcAJPVpqBBxAAsHoJtpdCP5qxJHRVefHc3pmRgNfjqFJnQ3C2NUtoK5ex5haH",
  "key44": "4e4ZTESp4J33cMN2iCNwJrrzZWfcXWCuHWN9P6FCdWs1QBsT5C5xfshxcFFVbsp7C4SBShaagKftbgPxxDYzPxuu",
  "key45": "3azd3NBf2xKy8o2wrW7bujmS4wpTeRJ2T1Azyrb3pYZiv7NAqYki1euRLcXYmWxywYLtzzJW7iLC8TJUURvGBokg",
  "key46": "58VyqeweiETMNUSWdDRYjHxykRtiNJwsoiwRdBJ3KZWPczyQkyEqttTWqW5ieUioSZGZGWWszx1tpdSzj556BuB1"
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
