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
    "5DBQgiA3CUFQBht622r1bPdkh26NJFSLfq1UkaRnM5tU1X2yt4AQSzVkVvbCSNzqpFRd1Tvz9Pw571EwYgbwzxuy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UWtoS4mojTgLo633H2Pxt2KibTCzByG3huyG8BjBfLBqyXAXzdgrJxj23BFgJv9vdCdBopvRfh2w13dJ7yBZUQC",
  "key1": "EYEZEWgbad5jCSkT2VR3tvcZN4NqNfqX5MqYm2Ahu4sR8nmcVZvVwCZULPrYKU1fLHtm6rxrgvEMbXdQDfJQHjQ",
  "key2": "4i9kHBTqZkA5E7fa5rAUEYkKWMfVZKc4mA9iTf5kGKbBDic33CTx9xkmJSyZngE9Vbj8GGCYrtMyP3kFVDQCsJdY",
  "key3": "2SJ7LGfZ5kPXou21kBuSRJuujryNgVViB9Jd5gKgx47bYDDChdD6zvpKPa7gCraauJkJNqz2qiowo3SZmkAQZzde",
  "key4": "2gai5EK2vqp6nQhLeuwxjLUxCWka33g49mwenKRmjRkMuBpU1e4UmmtwuEbgyfr3t7LAkbXx3WRghNfNmETD4Qtu",
  "key5": "2oPQTPYnWScK5Z218uci14ong3CCn2N8W4m5RfJZNcWjT82cZqHxMihteYVPB73112UDcXGncWm4h192k7SDbtGk",
  "key6": "3UycFc4Xa7o7v2mLgjCjY7Yrnu9AhCNgPdzhfd5rBhLJfWnreMnpAfA1fhWMu3zRNxBSrDdUNW56DZmthM5AzyxQ",
  "key7": "58mnjbrrBSWwnHE9KWmkbtTSbuRW4WFNDxzs9bNrbJbtyduJpzsmnCAkwXfzs9BLtbtTyqNcbnwzFCdTwzJTJ8oK",
  "key8": "UwJdCQioPmwiU7wofqzNSiApzp31kS1PfqFTH8fWKfDKubrUrFgijiBcaKvTwtcPsBDnWNS4AgEvRhkUA6dfQPk",
  "key9": "3SmtEnBaHmHMhxSnU5kEf7rXMJpz83PkJS5cuvGTCVsDYNUQumVTbetfjCzp7dDsgByMdsFZH1qxxhsq8bD8kFDE",
  "key10": "3nUB3vYWRZQVrWYUZa4vjKbLbs2s4my1njBLDViUwgz6Y7PAWTmNET7QNj8y3sBWhxv4dKArvc15r9BHDJqxT3De",
  "key11": "UtLYCrME7u4t8A3cBEbpdQLRPFbQto3Rb33aaeAHZAheaQ6k3XqfwqiAanYJPjA7g4Zsaec7eadxVAz4gRJgP1c",
  "key12": "23vcF8QHcaoFyqj2upWkKVBHqJZiqJYGe3oTZWV2ALPHoXBBmHQjaepw8iPPFofZtp5ZEKAHf2XS6ztMRgtMjQzx",
  "key13": "5Fg13r54TB5ZvCVscYWWUxUP1say9UbE7WDtyaPuxs7U1yFQ8ceYTiLF7cQ9rAW4L3ix3fTKwXZRA6zkY2PQr5KL",
  "key14": "4LzZQNRWRX4DV9nLXisqmt4ti6EKEAr8ZdFd9aWBanch8sdyagkhaSkEW2wJk94YD76x4uFFZF9qM5unvMnkvCe5",
  "key15": "a5LV6Fza1uTcATCUBE73RjMB5AuLMVky3Ar8rtbKRNGYEgvLc8vtMynAKMS6h7Xy56q2EL7E61vBoo8vpnGG8yo",
  "key16": "3DXa3Bf14Meh7upb27V3zWAqngwLhqhBBqJWLVNPkMXXHkQgcecAcdbmXGZweY9DE2t7fSHz9Aq4ebPnNVDHqxRp",
  "key17": "27sYDGDU1BtBWWrx3VtHWCZ24ox4LQznEgDi5HAEinKcQnPqzVUW8X1BhGH1wGwjhQp2qSGhexreYbsZ25kF9RQD",
  "key18": "5yPfXdiMcEYUWScQQRTSvrZUiAKvJGSaEgMCCfmetn8hexpWA5eQMMgW4UxZseqF5Qn4baWzbgPd67CWNT3igv7K",
  "key19": "RnV6WiN5kBbUCkT4UXMGY5qL3RJw8uQqv9g62jM5kX5GDMgSUjEZ8jYEa5oTry1YbSd98gVMsUuJHMY117e42LC",
  "key20": "4CkAkeNT1sBekzvN2agUAFQ2qAKUiSLEgrdzaXpf1RSaf6NaeEyZivUpPQnv3tCtmu5MHivz452mHst8CNxCVgXt",
  "key21": "3ppqEN442erqHi6VPMaiekU8SARNKEp8nBz3FiQX8BodaagDQAzkKoZSzGCa6ET7mG36EkMPU1f2JLuDWtcjnbVv",
  "key22": "2bbkn2Mjnq7rV8KjZCgXCreRkuRUfSDKpxpDBad3rtw42TPXBXSCeFkEMGzAGfVVxsPtwXS5oyESZGT3aHL9oyje",
  "key23": "444qaUMK4NMU2NUUyCDm7zRF1C9GxAh2KzcYDLSwGGhtn6rLPr3yB3pEUGZMUzdsbi1pfNF8XYCsVdyEPR8c5Jk9",
  "key24": "49NRjfh1DjMRAufv9R2A4cwJa3FMYApN3PSV3VvZZS4Twwz2dRR58atgACy5ABC4y63Dx9enJdKAgEtaeKJmaUKv",
  "key25": "5MCGjhuzx1o1vo87xoiUfgMzjzeQp5kB4kn5Hyh2stR94zXtUcyUXRce3AhkZQbpXHcxHb4AXXkwBooMJyN4XcV4",
  "key26": "3j7pHzbL8VVJYdr9kWWhaW1NrYfTv2LP2JXG9xcqs9gWXUgePwYsZDndLx5BHC6LCefSeKJ5y3J7QoystbrQMVDi",
  "key27": "5Fw4DETRTBRZieRe6YcypWifEcNHHmAxZvmmmZnnZrZKBpiNFqK88xdjkLhwUxtER6eZSoEn68jPLdCMz3vtbBVM",
  "key28": "5VCJppXr8pMdH56yqAT3xJw6qfYPaa1hL9KeYy7x984yGotdoYZxxwXUMbVs3RE6ByrEP8VC9NTmNkSPJBTdQLLW",
  "key29": "5G2Va3rdTRS6TrEM8tANQ3xNmSdABnfTM2AHY8nfRFBirVozaNaEPhnKDpYHrvd3wqRuLJ7Us66ZEDEV7QfAuHXT",
  "key30": "4PoNZiMiBmsoX5Fr7eh8v5VCHd1k1hG5Ako1HdVuqVEtYy2m38gWaS7MBxvWRfR7FL1Jbf9nQo6PxeHLr4TnuKxF",
  "key31": "38BaK29jVgSGtezT9QUEnUW4VPKAV4VZ82nYEQQdxcn6MkwB546UmUpRY7fRbkRJsqjP6kH6yW2uRQ33rPhS87Tr",
  "key32": "55hbf2qqWHSgHn9UFvCdCNRLTPzGpvVZHvkKnX2mhuDA95yUTp6i5N1E767atk21YRdTz3H5ZXva8auTFuN2fKpx",
  "key33": "xSsrV4kGm4NZ8AsEnKS8N5g1pUQKKbwd2U81VnSAPdiwcgqi7RsYPBxJ5p7zYK4PUHcZvEP99kqEE5arFwy8V1S",
  "key34": "4GWEW8nZkbKMppuaDpFv4xKFF3KJHtFxuzdUxk6Lf8SHDNMGPY6o5LonbmcX2V68ezFpKvdNFBukDLpZz5VQjeKX",
  "key35": "4nKRNsPYAhWsgnXCLYPWvCWydX9mPBGKjfkE6D4ZJB9jprwbfJfmQ7QxSMk139zNn1AXcD5UtJj1ZATrzEwUFbh5",
  "key36": "4XPWfgVW7eMkLHbpuJWjhYDqiDUhQHxjtn3YXpWgEkGQ4HojzvVxe2VaFq5PZ7HKSJrC6Jjk8BHBu1FMUDnE8S4F",
  "key37": "jWvGtrPvrY9f9Cj4gw3kF9RoCfdy87D8xsBnSodTocYvqjmEbgZz638nkthzwbf6at22QYUMJ54AVW3EZuHVwuq",
  "key38": "c7zE3HD37v3TT5W2VuXth4EveQXEaonBJ1CxsEDy3baGM7GBfyM8qPF3wfr265WvbLQ4RUF9SpTs5eMCXREZoPN",
  "key39": "3HZS4ka4z9cirjK2ZKWV8TicVPqMgmHfWpJkuex9y1sKi49oi2BdWawWEgfjwjUHLs3YW5VeZtW6U8W39521Aqwp",
  "key40": "4tXbcgEkCcTd1WRyVVkCFtY4Li2ZPBLStSPbLd8KyzCX5VnpJ3krkaqvXrzzsPUGCXYDrG15QMQzKJfBagMgb8xf",
  "key41": "3KK5851MQVUu5XKuoHaG15BqPNYHiTizbD7TYutodXV18d7PZAyyjzS94jcQrqcebkXZLu3KTBs6AQ7Nq1mm3121",
  "key42": "4ogwsvn4ao77DWhTbzcQ4UJ2htegmS9t2FujBSbg99WEZaz5Z5vUWRCsYqj3QMj3cJVPURZsqRdChyTJUNQLk88M",
  "key43": "48mA9jnzX13rqrTkhAjt5gbykzXhnTnWayBqhhkbfWAdrS8xe9nLCnjjZXYy5ANDKjbq3tGbrc325fsKVYrjswYL",
  "key44": "2HtkD8fCm68oULYhGLscUm7g3h8fCktthjCJ72D2QtBBDskV5ERgdKbdwBHv3L6QYKxbeSJsJAAxprVzGDoSatQk",
  "key45": "5v2pLETbn1QcrgYiU3tAehmQG7qkbsWKWyUGUSdKmfCaYLWz6nLqpA4EmeACixTrJTn9WedJvxurNHK6pG1VgjfR",
  "key46": "5319E6ZRGgAoNf1w4a5TtiA1mafK4FHVnygfmdSuoxAgt4SwQcion2tytE1KRCFcgcRM8ZZUuV8eRigJpyDhDbJa",
  "key47": "4yQrd3SaHtozDahfVf4bpf78tcjxr5nnHuHJij4VJUBD8UwELZo4h9F63y8m13sWAybBL1MBqWBdBj1tEumqWoGU",
  "key48": "2uaAQfNBUwZZscLQb8h6BHzvULsc422nTP2dSLMRvj8xDShas1ij2z8XLss5ki3RHXYnzHATAuYGvKambipeYUcU"
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
