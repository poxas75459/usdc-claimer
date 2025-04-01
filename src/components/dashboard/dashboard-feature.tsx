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
    "2ZJteygVW7WGt8Jf34rKCrZGE9kqS6p65JLJZV1aVM4qJ4iQGZ9Ri4ToSzcwG3iAQihw3gvBknV3XVQHJ7QcqzTT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NzKMrwKtYMuhQe96hMXzpigokzxGLxMdk7KRF5gL3QUrrBTLSxgUHhuByudNX1m7Y1M5HdtLY3mmzuW4Y6VWVee",
  "key1": "2WuMbRnxxeZup9Rtdif7SSsAHgiWDgFgcmYjhShrskeDTw7sZZWKgRK1Q8K6or1FgBxdpNBxFFp5Y1kDyAQoQbqb",
  "key2": "2XLVqeNXt31utoLeXB2JMvBaRmRy6TXJMJAqthy4vFaTH2RXYnBve13wkbBW3DJG9xmMS66dBUN486Jru1meQQKx",
  "key3": "291DroeBQmt7opgNusyNDBZ2L5FRLDPfWaQmZZADKkybbUUzgt81VPHZznyWq8sMpVBZvNPnFmar3w4kKm6mAwt8",
  "key4": "25o16rCdc2zcNq83eNoFL4ooAZ7HnsQs1yxu9yVB7JUSE3wVVWyRX6g5xtJubJsSeFazETdcjyf8zAgUrNYzt9Yx",
  "key5": "5GgTiAQkr74ykNsn8mq8htmWSwu2uywcGBefUQogHdu8AryE2TDNNVErwLQRzpFP4mzhWUX3YEDaRBS9jp8omF2E",
  "key6": "FBiD9zTX5na5tvq14F1T31xFEkCc6kxwJzzqZXCP21HMRtbVc5YJBi45QuK7Dp8DK3F8e1XikBy3BvTRwGvaTHK",
  "key7": "3vc8zRbkGxGWczPGHPSuuKVpsX2gJ8dQEN5YVS9vQ8ZetA7ryhNqZeK6med5UxZotzBSwzMdDWgYQkYchwLE88AD",
  "key8": "aCBwDp2FZacFxgEpb1zdmESxeBuzY8eRTUCTq93cioW7wJZtPcd7vcq1zuysc5u6SsNCJWqQfTd8khV6HkoCdti",
  "key9": "5p3paFXHRXFXK3SGDDsJS1HTh4andEbxwixmMTzfN54XTdgYtE8wUzXR2o3RfNyHTctzGmRrws4q9VyuQ1HyZq3y",
  "key10": "5RppSqKfQcDFU26eQQF43fxEAxppFeNPNhXLudMM2jXDPbuz35ESHdnyq7tfGjeZo2qfWbKsG2wHbjy1GQkAdiGa",
  "key11": "3vbjEvH5oSSwY91aPH71ssoxJWWnRki7pjduWDeWMK3wxEDptg5VoCBMXVR1Nphdu2xQTc2oYbWjtEwUisktKC6M",
  "key12": "3EVfD4yP9FMfVn6dRqX9wrVxTUZLdYCsRBxtyHhtkxJEdsrAeBdgjZbuSE5qkYHn1miEfZuaNoHvyw6JDf17uHM2",
  "key13": "52CMwBjPk1vNSX9N6QB8mk4tZR9Ss3xXu2Vr6bRQZCBPXM8TqxfCCpuyBKKXmJ8SNVxL1uz8zWwZmAZQhQQFjuum",
  "key14": "2ky6ijJ4SNkhs2rcmqwmGYrGC8An6qQZxPdPK9gc5EB53AbxsWQFNyHBqQDNZApkE38jzChoZonHnsLXB7F4z5xv",
  "key15": "3b8F3Y6x7bi8doLrBdrzv9HL7pS2oVSPUQZXdyvhf8VTaJFAr1rif8tukDcp4GArHz1dksaNedo6Qje1MDacS8Yj",
  "key16": "5gsAxtsDXz71JCoLJzXeKWu9iwtuaJdU46ZLECK6xkn4KSTvnZGRsrmsPu6H3wNdv8hMM6CeZVuHVrrkm5ZcncTN",
  "key17": "Xj2kCbL4Qxf44zn8ymZXF48NvZVP6WEZxV5dJtqXF6vgMCEgwNJ1hF4uNwsoq9fpYdkgmxndm7sLhTVoDoDTxC2",
  "key18": "qPwzwrhjHDsEyT9FrDF9ghYuQry8J4T1573vTBjx8N3zD4W427SpkFtHqbyvDthnwwA6DTnQXvf82nBVhqQaSEm",
  "key19": "4nRQDiPP38Zew6ccf79HaKbS2QfjhysouNfcTjR9pFRJ3fXFYkSyHvs7n5YqdE1YLGqqS8Kmv257FyRNVMLNACRb",
  "key20": "5mXVTHpQsdmnrczRJct3uyMs2vjYuY51po9DvmAvHHCYn3iAPAwbFsKKZ2MqMZn2Xdos7FHkrUH5hbZpeGwoHuBx",
  "key21": "3vjVPZQzLJS67sY8VSmDMRK8rgcDp1QK3QQLjsS5P6MJzaDomqwEauDgjvCmCQ3xkXXXUkYuJfhm1xZLXqL7msGG",
  "key22": "3fakwqCyag2ETY41Fq3c3tjKKf1hXE6Mx9joNwNQRayJ5nwv5ZLhZV5EmnSCvxTPQmBU7aDHyEb2FWKg7yDsn5t3",
  "key23": "3mrXfswQWCj9mHFybJXQBbZ2bvMCYdzCAbnfQgT9RHq69LJAHt4TJ9gBHtUsWtXiRJc2zgarPNMyGvHUHJ8c2S4B",
  "key24": "2fb4DpFMCkhfgSpbz3wWX8uhffJ2mrthiAidcGezgbjp9KhJrcFh6LJDXCmAkmWXzHJSHNbZTWc6uUJixPJGEmaL",
  "key25": "49bFgXYP32AKTiR7uYg1YUogVnjLb65vWZVTY22MVDoX73eKbMsFmRAhkj6ZjwJPtobaY9dGCFc5M8PG7Ltvpp8j",
  "key26": "24WQXzZfkkQJ24cA4LQrFQ7moSyUEwgSR8TZYzbdwfLSBtHQ1TAQwMDcDmJ2dWytZr5XnwddsWVQUXV3Hbn7dvYw",
  "key27": "4T9xuWBhNnvgWHL4qiTXGzkVXFazCt2g82BNvPBhXQ2FgqMgD6Gg3Z1RS3vkwM2YahZ9cDGjfDViqM3VR1WgTwyJ",
  "key28": "5N7gam5oVhCexg97WZwNkPLqmrueTmiGxaTF18z27EkmzLZZnKEoZ7vbFr524f6ftsGogPMhuokrisGo4pchn52w",
  "key29": "3wAmMayi3UAwRK8D2K8WqhQH7wCP7CmRGteb2nMizaDMhyHywQy3czEWjzuyMEdKfPRTjVXrGUhF4zF8prUReYt4",
  "key30": "5hqkDPAZ67aHcigo3hDLAWbU5CXYMXSPJwZmf6f5Dwtv1MxDd2tgKwZStCr6gqd7smZ771DydpU84rqQFhkTVCPe",
  "key31": "osa2BrCvxkxYsfvSpft8LQSa3FRxatKBPnh5UxuseEAru2Wq56Dq3J3na5hh1iKXU7MywXSDa7QrojSFmdktDN1",
  "key32": "dsXVmZ2w1Ruqprk4nc2ur1jFAiAcLNQ7hyggwuSvCtuvziGJeJbUexgsHhjzCKSME1iKbMkvD1HSpSqVe3SMSvz",
  "key33": "4QtWjKApkmnTL7eSdTEhq5R6NnsqwR5cu7ndmZxGj9FsaGgK6xmo14pn62J6ucToMYP7T8HWwjpdX4cpFeZxFrkL",
  "key34": "31HBQLQjZ5QfrcSmQPVa8iHa9opv1bA9hLSoSzDc64uc6dHHuh1k4QCqwnaWuUmEJsnUFACr73oRh2mfL4d9ctzj",
  "key35": "3B3EBwj3rZXvEk8WXKX9ibWjN3xcsdLHYb8QHPzkNPFUQbikvvCP6HzS1yHGV1sDsf2XpbNgpHY4vHyA2S9Fb5JC",
  "key36": "2wcgfEKyfYwhna7PZFpLa4HUeYkwX3rsXQbQ5phibixVPWQpwekaRfc15SLtVU6YvCoB2UEYcC5GdgLfYUw4T8Zw",
  "key37": "235vMXj9tDcQzSveyEVqLxWW7UfMJEredpwavgkDGvjbgYD646bYcakxx9EHAXhqrbjwvZTN1hpphMtKHNDTfU1G",
  "key38": "3kqcq7PRheC8ZSuaKkd9hjHBYuumWcCK4SD4LQpFTAscKF4aFCMSWjMaxQPUF8sKWHroeQkQcJHhSXSLSEfJ62k6",
  "key39": "2EDzrEdti8kS9JXphrcLQ3Nmd4GkRD2NhuvCRPw9ky5HPD9WqZyQgLEfiRLLZ4cqCf8Va5jgBNrDgCT3cAo9URUp",
  "key40": "s2Fw8AdkCMhdwMLL6Vw953wjURy4ZkRGicxEn2qWHTBwH2c7dqVLJYmENsAaYx1tkDnkFSG2mEUdL5tHPuvZFM1",
  "key41": "5AbTZYuiNReuq6gC4obTpVFuiff4hcgmYmnJMR9XyKTTPVVzjBjA2cU6Y4udU9NutRhtHY7ybFmfygJCwCQd5dmU",
  "key42": "5XLemNHcRsCXtuTah9K18Y45gp5tMZbUxhU17Mrokg3gixvBVWdSMBcVojCAbTEFxZgGAPM5mkmg54N7qiGaGfqh"
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
