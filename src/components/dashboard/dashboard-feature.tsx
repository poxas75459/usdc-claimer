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
    "us9bYzBRjJunp1wHvvN36RdT9KnXr5UpNg86Ra42hgn8WkcG4Gzdf7T2t6H13b4RZiHTQNvY6jKB7Z87x7LDUZZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41j4t3JUUytYv66aqdp2cHE5pg6egpPTs16wQWc3gQ3Ntf2WSCjugF3tzTzCmNcwR6z1ZSXhqFHBnhLLb7j3roo4",
  "key1": "rW9KR46e4mcApXzEqEVUJ8audwYBcyz2XoZAkpHjGeEQ39aLbjJzEuqzhgR4WRH54WtRS5PdcPubn38yTiVDQsf",
  "key2": "2Qa4qx14cDa3e1E14WNC8gGRZVT5zerauKKmehXeTawQqXSZnrEzn7hPt5MPNtgqU1Y2FA7idyJbxWgNyZfYZRdT",
  "key3": "eZkHhFjiqKMqn1gzkeHiMhYDQgKGLsuw1Aor8EuoKCFpwdxkebvVT5L1txQ247wnUkE2SdkiRsVRXhvFhsYq5mZ",
  "key4": "qtggcMGTjapari3pCmz1rmqYRAxaP4W7U1gbxCvtMLCC9sy291SsyGKmrmT5jGwwD8VdbgWPGsWbhbB2u5r1r8W",
  "key5": "3hvZymKYYeWTdtUipNUwo3iMm66nFnjumnuU2Ni71gVkLuZBDAbwmfAkAqaR48Skga1xLr5kWUUVRQ2zGZnYaoGi",
  "key6": "hhqVWHiEab6dPGVLgyLipQZxN36rRTP9rEXTk3MsHrJ4RyxbvZMPYi7hLFbpMmW6THwCr2AKtbWgChe9sxaTdrW",
  "key7": "PXWD7uvviMFjv9FpW6zUhgikJexQau6W1bGK8Ri6nJeqYnvowHn9nQTUPWKtAKUVE6TiA1ENKXBZBrBeRAVGXKi",
  "key8": "2s3YUhQtgmrq3kUyGEZzQA63TFT1Cp3AyB6rbXHfatUVM2okecPkWA5hw8kmT2htaqfEjFXSp3nmXJdENnszDymF",
  "key9": "2W26cFHTzB1RvLjSAJbWJoE9xeqFEQ16PAmVDg5eaHJ13ayTH9r2185P81aHmLXQBSrmGdm1Qgj3Z7eu6Kkw3ZP4",
  "key10": "Z1ua1M4xjMrTXx6UWGYtabnNA7TxGMmEvsZhycgtesiimHDDD85iKLQuJ2vdd8UNoMnSrWQThjQsAqcYbHmnJhj",
  "key11": "4H6rAGJqSrc2wPmpqF3E6vA7PPuJo2F6DUv4tRivQp6bKfTFTmTbRLham8sJ2H2ibKRT4Fiq8Pqgsgc1RpGB2rZD",
  "key12": "5jf3AoMDtkDXsg2TrNRct39qmPEXXcAjxJZMtqzASN5ttmGYwDPunEzKXr3mSs7JAZAJ2UHzVro1YvdEThMmsd9v",
  "key13": "3C78Rw2o9N3KYmeM5hBqbzDQyX58SpLruBJjwKv2SFSsGZXCqdiC7rQhfLQ8cn6F8whGmMZEoZLbNp3QwwNLZYEE",
  "key14": "3zZ21mgPYbaTJ8TnDm7EwJGxq1NUfkYqCieD134SeUsbrsc6MCHcouKq6ZU3bzXJ45PzGgesVgXEL8GfYxQ38D9T",
  "key15": "5hoKqg1aJrX1JMmkd2kXdBy85HPnGCB4q8rFa2xCgbCTbD9mxSUzVCfzeM3E1FBq2yQkNz7BjnTahyc1CTbr4U5b",
  "key16": "279fPtWJtJ7ZYAx2ubT3kpUgptZBMmUx4tsivF1sub4gerj7wixFxW4m16AExzw81mQfY1fF51YR9gP8eDE6h6kU",
  "key17": "5kdKeKpkihuaohpg4eCpunpYEWVw8Gdq7EHvoavzLDhyKYNSCNN9PBs6pQRBxMM9AyYzs2MbjmxLoyYuLkSyhvcF",
  "key18": "yf2ZLd4Vs3nzSEYDqfNHjAiXcpDr2VS4fv94Nsoz94WrJkmW4RHtY5aY5KCJ8792Z6TsA8kzbi6htgSKz7ehndg",
  "key19": "237dNaYp1g7dQah9Q6qfW1MtrNB9vHXJT2xLAqsffdueu78bB3UckajAxB6HuFxdN5dt7xcfBTESThAdUSdQB12N",
  "key20": "4PcS51Zob6kQmpQ8PrJ8PgM9kqKW3gw9Rn859FSoQJ1JyVZmGWKPpNN1DsmyWe7Up8nzCWSvSHTc5iM3faCRzpPA",
  "key21": "3F8inEcR3xpybi57rfTeAHZQy9Ppo4CpjdvjewGCva2yTqpqUJPFBFp31gNfVGPZAvQEnQGUvbkSBWr1yJwZPWsS",
  "key22": "4C9LK2rKBGXqqe1gnQeBpDR4LYGJy5bMHEa3AhfYsx55NG5kGVbdNzx86rb49Js1xJPCzxKfbV2iQeQmrJANrQbr",
  "key23": "MRHjyHHfo35AhNvETfHsTNLTrbhexaQhq1hoPW7Vxtuc4JJWp96tgsKaWx7mpWYLhkpU5uFLm7ytpNx7PegwMA2",
  "key24": "3hvf89jcQABMcN9Sv21wYzG6vWCTyDTaFASELXGZknr3BERDYmFjkUKsA5Ri5Zi3iCZiG94zu9aagvy64Uz3QdGR",
  "key25": "5yw8xTXwi5EvE6N2t8nw1Jq7rKJb42mvoRPos8FxmK9azLU9BSLhypFSQTva87XxrvWP1dtbvPVzD8N6rxk1Ssmu",
  "key26": "3Ls3estv4REa1qwNMPtRTFoULiqLd1oCDvWkHrAMCn5vtzatpnZ4ZmmDrHMr1wqmXRCni9noDSzewzEpeesY9iJu",
  "key27": "VuFmGpyQPm8zVtfjE69voqdrzrYXStdvaLc6mMJA8HNfjuB3mYCYGdD6iA5qn5NfWrEfPnDBx3F1sxFCzUyMLYy",
  "key28": "2gFr4SNAbcmFH2iDh5nFbD3W9X4bfY9VPCDBvsnVN2ShoPMujqwGR7qsJv2Vz7DrQWEY3Nbe4L8JpscnmTF7pmrC",
  "key29": "4469CTLMAvZ76SeyPDLg2Rqrk79hiP6H9Sg2u8BUwjMg7g35EZ4XWqyq2fzcBxqjgzc6e17fgi9p2g5sP4avokTC",
  "key30": "2JjFxYrj4ZRJyy5picuKm4s8ycceKQ5Zk1dGmdAEzdZM6rVSCNA3p6bU8Xo1sByMEstBJ6d9ca2NP4xMqzNLwnfw",
  "key31": "4PXH4YzG3kVFBpjsof7Zn5a8kZ3LMP5VFDBGaQ3vJgdab1h3mYiR21NSGLsM1tJv5YPHQQxtJvt5vDC5V33dFnAg"
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
