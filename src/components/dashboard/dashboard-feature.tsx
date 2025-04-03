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
    "5ibxN6FVYeBYgNocG4jN1E4iZqCuRCHW2DuQDcJ8jLrmJjmDGYZoWxsUcvUq5MXPMJRfMeN8MAEn8buFE3mZcRAT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jujcNNXL1eXGHyegtNYAzP5LNqmLPQ2nLSvmLAfvt3525d8EvAXCw18VRjjieVFLjbUimaUPbvqC2aPyGuzNRNt",
  "key1": "2fxTDwwhYMrPco94o5DygkEYGGcHg86euiEEgKFnRkkVzNJDoJta8t1kudRoigUPdLjFsM9cRQT6gpvJsef6HqcS",
  "key2": "4qjpPEfLsMvZAYrCrLmxPk6n6cA53ndW8GZKPAGK5M4TZ3dHjEEk7mZPdzkCYTD5ZuyQVKDU6iAPBeKNBUtERzzr",
  "key3": "5jUKUwQS9tHeqhXvN9j8rA1aScmmgGi1YWahMZrXcqwZt7FGrCtuoJM2Yqx2zhZLpPKh41H4AgcMrW6JrEF96yfH",
  "key4": "EPY2vinypadSG3VdgQBcCaAZSipXBrUGvb6hFD2Lbn3tGXQ3xb1grhbSHnHDbtFKGPXqQDXUigJ21iw6HxqXBqj",
  "key5": "5P1MmmY2AjgVMihyq6qQu5S8XiXbyHkQF5TmY3WS7xeSDB5aALwvUJYP2XJZpCdXU8JFn92KcELYZHSupwK5t694",
  "key6": "23QjowjkTQ1BPnWRwbYz2BD1oSbwMQW8NJ4nrhBKkZK3DYsPqYj6vF1HygYiXLTwm7Koyb8meGxWo2Jz9PvFnMvs",
  "key7": "3zAWVe8PHP8rGCRCdVK2EemcGB5AGrNGi16uRhEbdBGvVWb7bujXhUMGzSxTn67JsiHACNYSrJp6CZ4M6ktgoXCe",
  "key8": "cXyuMqKKv6hau6Dc8iX2uUSsX535cjYUZ1JY4APeGHWkNphZTNrC5wvAduiYjd9xEhRfbrom9sRyvHV87TAhNyi",
  "key9": "46j2wC847Y65znm4QpzdryadiJsKEAdXRyt8s8Yu4Nr8n3qXFCkkrcP2kg5mMQwhE7vR6WQDYxwhrYCRr8YFUvMP",
  "key10": "3yjF7DNYNccxbUSaghWoDgWwqmLGLFAnkDiHduxKV4vQryoCoktnYSTmPCDdpQY6fT8F2onLBjgGqLpcaptaWuYJ",
  "key11": "5Bu8cvmBxXMabrGpugjhd57ibSbYe53C7AUap1REttDdCQ2jJsac198tW852w18NepZybrSPQ9zKpLDJbM4j8jBd",
  "key12": "5dC1sDpRyGFziN18LjsnPSJfEBwSQVZ3Cj5ez5b93FyA8pbBz6Hwt969pV2xTMihqR8sFRgaQwuB8mpEmbbmbZmo",
  "key13": "EkvvSKa2DZLY9cFR3gxhLX642bge7PCXcgh4sBTjaHJpEYBKdfxM7pXj8GsoBsvyuJJVNpnGCworhM3etBSw76i",
  "key14": "2EnWJ12u5upA4n2bYFpEA1birGPwuchX9ZTg8gKseUEcLqRGMndwt2YC3uKcs3VgEMAKDYeNxUcuDpNJaiF41esY",
  "key15": "5RMWWEGmxBkhmiKhYkS4w68BKP2QfuyfXY1vdyCqGRXAT3i259KrYdgv16u2e9KaJBBsskUKkKnVB1nNyQXWP5yT",
  "key16": "5zmncGTQaMNtnbW8gNaQiCisJTYMnuWsstRybzmEtr2pokA1rSwp6EnCQdN2r2B8jVPKRXfW3W4biyKi9ab8jdVU",
  "key17": "64qrSZur2DZD1azbntrBeh9TMmMyJHsqZNu2iCGzhupEuXuL5sURqE7HC5sxciErESQkQju4HLUDPrLDKzGB3U8W",
  "key18": "5yLcHiXRYFyTj2xyjpYX2yma7xdqNfSPFMHucY7CbuwLDze9ypfftD5QsEMPjhh21oybStNuC93S1juYQQSY3pD8",
  "key19": "XPyQqVvdHtjG6QyN85HsQPNjk14v1uco3wzwHk2E3dZoVnGfvGdofsvqUCbpKX3aqfvMvUafJCdZSNZYXgzZSqu",
  "key20": "5JcsgDL2emkGqAspsU41DZxd8WCS87LTTmMfUPZAJ5BrvuhVXEJyjbTEPN6GLRy5tPxqb4hfDaiCoRwpidrYhVCx",
  "key21": "3GxXnsxrUPKDH2Yr6D2Me2bz6mHWPSZULFwUfq512mstbxUj7iqevKzLDHcREAHhXTTHN1SfL7kESSGsAU7kXnyg",
  "key22": "4nrT2zWzgwjv4x155uvvDaseHMG8Jw9TBXzTx4k9txQEaYQk9KEH7aFqZE1pYDCXFHhMzKrm9g5mgq6LXuTyuybx",
  "key23": "NyL3AxPfdo5z4pMNAxPh5aWZ5SP7tUvunLtRA5Pjhwgf9bPNBzUYXD637TWbt6KUWRASvA5JUE35D2jC2wKRheJ",
  "key24": "652fkBjthVoUjZrZyvL4xvnR1Ue9AZCKDrNbtdXTaEJi18YQhdB7seZn8J7CUDWMGsfZriBRyrCQMVsukucLMUvg",
  "key25": "5Eh5aM74NE4uUd1Q1JuSDPAB6HmE589edsBz98sTW3Nk1mRsbRwbKjDpLb3c6N36yecQ2UmLu6xHomSB3nM7k9Ve",
  "key26": "3kuC8iV3XJiHvw1USRq7WBPiayG7UAFiT7Xjh3E28t5cK4kvrv1vXvR3EJnnPprtt9xpqR9Y8honQXDx6jDpUT4r",
  "key27": "4jUwyYrFs6x3Tt7EX2GAf1qtvYszdngLpcBKgQR1psKyuifLPNKvC46kgLfNUcz3n29rk7QAaRGiDayKXwFfM56a",
  "key28": "5RnysDdYTKCMcsVEuAfA7EpXiGfQ4EKBrEs5JvknvjsU3SSSxud6EESPkC6njG4PpV9DGbciGAUwLzhcBezrTwZf",
  "key29": "5r5nmhbX8B1ZRREKmFv7SyQdgWcuE5zeLLRMVNimbyyTF2AobFnCmWXjqr5zT6KZw5C6DmF3wsiv36CaywcjeQrW",
  "key30": "5aquSwquFBAgb7xHnpSzmR12CeBTPYFCzhW9RqVqNJQwb1YxmKPXMGW8YUoH6dqGNg9N7WgPsWuyGRBM8ZqTw2Je",
  "key31": "5N5kk8pJgGaeJzYWWDcJyfiWX6PHxuQV91Bpgyh6FAAXVNU3exrxMSpCYDiYy4RqUdi24wJRUrEZmJn33iby3Ht4",
  "key32": "2tba6E4cjjQSRHonCswnX93HoffTm69gK7CJBn6obUTE2z1n8S6LCRAge8JHkLi3bod9rciUkGdL6aYXARPXXJHj",
  "key33": "Shemek7PAJhz16CMp9AMd1zn15ihe4RvuAoyHL1kHF6QfAEjWAzVqrhK7Hbhq7E9mCuVaMeWzyzN67Rhm6EhQ8y",
  "key34": "5DXzYyxajZujMZbwHkhozwkpppHun4fMVAkJtFc14gWTohFmYtyLNf2qRw6JmGpJXANpg4PC9BoYyvg16ycbCwuX",
  "key35": "8uZ8xebk3ZKwBPKDWNLgqhMC2QFCBmPAG8xGaWihLFSDBKN79e5hiP95pS2ENPjziB9JFp1L5wXntJCbi7b17AS",
  "key36": "4NLvr1crCSg3PpbHXGWj3cka6UhCgvBPoKAMyjDnfAx7CTgMwhanMTMAZ8hk7kWGfishgFig9vbYVuWnP1HkSDbK",
  "key37": "4vFTq2H7nSR3K674BvNsEhshBvMbVBcZ2YLXMvs3bGw7itDrJSrRmxkyr6XVLwaD8QjHxCuFtEAmP7D2n44QL4f3",
  "key38": "3DbxWQDwjdcH4hM9gRuLNmvgSugvWKRk8rEeQCS8DEsxY3BvG3TkZCa2vnMzSrL4czkRwVgRGT7vRyNeoYjzyGuk",
  "key39": "Z9ZWRpA5jyEjQDopeehZ2DnDjbrhJ6qfNLEcCn17eSzbcL1tJFWsyj14Vx499CiSDKo4yfTGPi9Mv2oYYE65G7c",
  "key40": "cmkVCkMS73f6vysw92XAXcCQWoXZ1whJquUxBznZUBJB7iyYrJmTNAAFfsKGXi8dNpSGideZDkmEwEBg2go6HGW",
  "key41": "4iGxNUuEWzfFLWgtwpbYBHMGCb7hcWVvKSc4oGiWjddeThPnfAXgSypcBBZgtRN2VPeG8u8LYEFXSpxZcasJ2d5y"
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
