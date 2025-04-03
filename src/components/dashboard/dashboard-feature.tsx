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
    "5mbZU2AxPyp4xPXXaybWFU2LbkKtB8UyWTqtroAzoS1tzy8iLSryk4zRKoihQUv2Dz4YBAFcbFjgZYNQxFnPM9VB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NVtytDAmmDB1MLgFDAban2gJEbUw4A4aGiix3eRCRedSthEonixqxJam1Rb7QuMTRFxPiq8PusUJHWJv9NJ99Mu",
  "key1": "5sSTBGFMHQR8Jx4i1vHUTMMJnQttwuf8oYfCYqVwuUigseMHKkQx4mZkcRJjQQ8iN72JHBtouX9NkVQW6NR5Zga6",
  "key2": "3ZG8ffDsp88cwyRPg4y9HXfGVCdRcao6A2G3dMpPtwqk1XhJvhV3paBeMCJsBboRVdvkRQcCVNDWJxDZ8s3jysVv",
  "key3": "4HLazeK7Yw2iVSTvs68shjdxdp2rs7FDvRENhpR9AphjNyYhoQBhUJ9AyGBm7eyBFeR8Nk9Nrvt49Bd5o46RSdbL",
  "key4": "K3kGv49u6YVEuQBkwe5Xh6vQ6CVeJCnJbUCJsDBrQsBAxVngFsbxfSeDDSRggstXAkxR72T6RVz3JbrWNbdojcX",
  "key5": "34xCD8YMUKBH1s8hAMDzuk3RcND5XnBtgg5n5DRdBL6EBPDfBkPBBb5DrmP8hzKqXtMtbVLvaPoSqXu2KdEYvgfJ",
  "key6": "5LSG7EhSBeG1oqXwKuCP5udxeqJqcm6QhKhujju3ech8JNjeKnNPQVUqki5tBYpzyyTcTzmpdytRrPxJwRiJVaeH",
  "key7": "eHtKrM1zddKaoDuXuYJKvzjqFFzPkhq3HBVAYBAprMZCmFeuCzK3wutwoMMHK9LdXSZJubikiiJPJuZ4WCZhSjV",
  "key8": "27PXn5quC2KLG9KKbgEna9rhiryPNxiAvGrQvYcDUbV5aidoZq7VZHNukAnMAGEtiwHq3ny8GFeL3ccFtwv6tWgL",
  "key9": "2tvnMrEswAf9toVcHesH1C4sGYLN3F9zNPcFhJvDdcwbGsriVP8d6wYbc2TrUC4toptr98xTEZ6aviqCnpNCWd6h",
  "key10": "5nqoh9YvMmvcgCCwh5McxrVbKteujx1qGZGP5SPwmDWqEDGoryJaq26dq8T2AcpF3du2ww3BM5kxkWVtc2E1Umfn",
  "key11": "2PUfkJ4vEo4WKstTcbzLFqsw2PJSpDLYprJYzPDRtgpzxWZh8UvNePtKvcfrBt2P3jKPaCRUnqajXzJp4veVpppo",
  "key12": "28XZ2WpHQLJRVsC4PQWA4ZvhTe4sruyWGKbVWFy1kvSyiJ9ukWaWYAmvqpsxTrwuXvhoXFQzSFaaJDzJLzpT2rzt",
  "key13": "2TYmurafiwcqdsM8R5sFNXZDuEfBD2dknGVVfGErSjQFgmQ8kqH2EWSoqY1tjJthC4v3EBcipM8KP9HtNtkLLVqB",
  "key14": "LWVxEyhvuo3L2ZnnFxJ3wxZnd6dMG7wppHZzxst9cS6vdm86ojbE4CSpiBQvaxggeHgMunczSxUMkwRBzeDDVEt",
  "key15": "3k6aGXwDaBYQfPBdFG8xAsuLULKmdYyhMMtoCn3WBVkhF6mkFwJs7xpDbpxtBynvJPk7Vew2RsrndpSdZen3cqpQ",
  "key16": "8ivxxMzYkRWeTF7irPX6LY6NmQDuZ2PYygDNWYyiytybbac4ZSGR3DEQHN6Zn4eJunLSiKQt7AJkcRjg7Kda8pi",
  "key17": "3vxEsieQi5izgENNe9WJLGsmQj3P9mP6W66ezDJpRVwFV3MqTAr1wkT8eR6M98mTioCxEk3XmTG2rg78u9v34XGq",
  "key18": "5rpVs27NYh9NuBwXNQzEFhq9owdb2MZXVs7fXGXcXXRNNfDuCzo1dkzPjmXqjy8A3MqeicuUa3mQnsoYxZa5iXUL",
  "key19": "58xDYx9vMsPCkM2uDBe5FD9Fedndqzj5gDBrxpwzBWEnzaj1ngayF9Zf3DoTtkTaDPUaDGSXpVpTJKWsWremqgAZ",
  "key20": "5xJChVATUpuR7gmhuhqxVLduiXfu3LsTRapGsfQsXiZNY8CBsbSAq1JJCUPftaqAf64nAX7vippcWwFuK3LnpNe8",
  "key21": "3jSvF6JhaiQULcmdcAe6fmUMJ4FaY4hdqbg2ycXLXMqTFEoM4uf2otWsEnZL6ehhmesvNvvbK2kkgJd6HF73Kg5y",
  "key22": "2JNk7w8i8JLfTo9bHpCfa9Ru9xYm711SnVroPqWEonLKbwacg3RMQ9W2Wu27ZRWZnvYeX5fibQ75xyrbgcQtRT6",
  "key23": "HmnAZb2z2a6fFECF8SjWxZYNdXAZG1fovwhA4RdiU3i2SYJ3LsvzQnjvDERXx4nZg62qVij1wgjvmv2JY4yZ8fb",
  "key24": "4neBo1eSCKsirKg9UnRtzttebUnwZQToxEBEyAH2MjKA2pJMT7pJy8HWDHpS6vTbVapi8fPmjyE6rhZewbbp7u21",
  "key25": "2bayemczMZWmaXMqSrtDzKadtJyvBJTq7nQUhhEE6YmGjfSq3FxUf3NtYR4C99UP6bYbc1mKAAHYTnyeuhVFkJss",
  "key26": "2ncnm775Yqwq8yp2ucBp3QghmyPywboxKzsChNpCNvBqvrA3k3VvyjjwcU3r98zNyY79EBErpisAD5eHqTd4Nqhf",
  "key27": "2jfhTut2VhtCFfTu9iyCZaNoARG1cbBUv6pHEsuAbejGFWy8BngvMm5Xy1h57w4ZKcBEg8jpuhC9YpFoivT9HKKQ",
  "key28": "38whBstnNKs6VkbYDNCHhaxMRBPsRH2qgtXhwgGfK1s9TPpk7bQgjTpQTWtdJSVNP8EjwBRGQr7FHxtQbNDQ2tgT",
  "key29": "5o4VipPa8Qd4cUAmPZQchHVtTpLVtfp1PuUGtcE1sdQSeem8kfPQzJpgguZHhW9tyUNqN73XHEfcdTyF4qx9gtJa",
  "key30": "63p1WuRWZ3DpfrUFgfbdKzzzAvepS52Q3qi81tJkEkiws2933HKWGTXkNHexQ87ZcSMyZ4xNe8NiYNWTJKGHoNuB",
  "key31": "2nkzZB9DgVDzM7Mj5AMFbw5RE2nUewqXhcLqf8CaHEBZioDZ2ZgWCUuaiDWhtCJgSac48iKcX5rUoH862qXPScbP",
  "key32": "2vYzDNiuwmkwTfyYZzAWYKNH6A96PTZSYAkqNeBTEAKWZx22HFiAZMoy9djVTSZYDmdCg1yWVziS6aLbQJQMkEHa"
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
