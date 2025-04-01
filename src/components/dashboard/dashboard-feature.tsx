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
    "3xyZmznU1SiNhrRr96nTjazmcx8JrMo7vDkqGbWUXFVzznoRqrzEqeqemCcAUipJE9MHgv4yw17Z6yF1x7J6EbZ5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rX4Lx1SGkSWwWEtBdm9aofMksDVmWnucgAbHtoCjipkp5zNg7pzjHL1wTwxpyLHXqrE9JnNyY4eB6VwayShgVEQ",
  "key1": "5MtG42827jLxLEdMAeiDz6y7PQtbqikgSNyzoiq6NTz8BcRmMuv2Y74DZnSyLvZbHJUR6tRkQDf2J4C3S9ZohyQA",
  "key2": "4DbXo3qiF5c7aL8NWmmTEjQUgUjiPWrKWGya2Siy6pTDC17MPnaV3VW2Z1oyQ1gvGUDJv39XNj8przXureqPCJsW",
  "key3": "28SudJ9gqkREAS52DPWg9tG2jHPHxcb5gqsp7wDZLYFxX7ukkJAszLjexSm45Lc3jKhT9uYtsQ1EwwPuqwpVPBVK",
  "key4": "NhdSbSd6JaqPX3RWXjvvBo48uyyQ1mH87Emc4uuCgKNBvGx2MiZ5MyWddJrfZW42dUHWNxokNmJ7rYZuBoEBiit",
  "key5": "2XwbHLgx6MCwtVX2FoHa4PH1hwV3Kp2kyX4qSHx9GMs7c6tSQnGNCH1q1ApPB1FXmRk2XHsEitKMXe5LdjLxcNtv",
  "key6": "iEkKn9zpAi6kp1aEVwMqp6rtJSZxoJGqs56WXVndQAdAGsdWMDh7z8dnpvBfNFyUcQ8RWK2iPTQCHFBMXUV2YGZ",
  "key7": "5DP2w19xQ9Mxsf2ufWDY3NYkqULxHRqCZdhiWc5aMhiJbG6est2hYGc3ammmzhJ6taRuTwr7eQ1YXD5UxMAmG95t",
  "key8": "63i9FyNPz5cvbnrCYtyjtc9sZrQqKCrxTLgPeqUSGYsGnVuiUhcjLzV3qjYWaUYKgtNB2yiPvQPowvfrS5jpamBK",
  "key9": "2toZCsVwMfPhj5C1Wa7irnyLrabheqUbScqB3JagcnnzcPZFDETo2bNbwYr4QqfdsnVDWxBZhAwpzKsp5gD4yXW2",
  "key10": "4tDfmqpQ9nKdiHTyjSVxT9DbPSS5g6RqkejofcinYumRH7sVNfxuF9Ywk8jf2KcaxHLFwYEdP8SuebiGMxU5z4Ji",
  "key11": "WaQSDRK9CduxAk1rTDm1rgubvvo7xYJivdTmsdqP77FSXUtcFHy8JyU4rpJRFdtGCRLXDLBYCeiyiD8FrF4hUhT",
  "key12": "4aVSE5dqFQKCSAEY4GwAzktEZHRLY7mj6d1eJtvdQconVqkgFysxD9dcbLRy2VapqGaf5kve248ds3iZ16ApCur4",
  "key13": "3YrnWJcMnRqhmYNnoT1i2sCmQNDZY5zzT273SZqy1jtXaMdxePnhLgiEa2hunWL1ZaqbYkHYbtYmUUSCoR6YmGWv",
  "key14": "1oWdVQmmRCRX4YsCeoQYrVyLoLLUSK2o1dwdAj6zZZNzVFJhXsgEHEKnnivaRbDUJsmQBzD6TQR83FteESfKEhm",
  "key15": "2VouTeQeitgBj9j71R2sW61JV5P35NnkK9TcF2jKFVEGqqZs8kD5DRHJ6xeixDN7KsRsVcqyjFvopZ5igu7tvrUS",
  "key16": "3VEB37k6WvkLRvaLAgH18Mri4i2YruQF2R8cULDcsxMxdJecwdZSFx69MGu9hk3io8LaSpsLZkRyenNxEUiE6s8J",
  "key17": "3kMQW86frwQRmoeZWSk6t4YwRA4pCjVUNLpN9DgvrAPsri5HUxzTfSCREowB41Gp79m1opyJYU3UYVg2PNS7wUoE",
  "key18": "3A6aecmcLHYVeaKp4BkwXfpV76kjLMuWyonL5dHLMrKPdBJ72NHjQEQDtaMD7yiZJBndkasQK9MS2LUVW25rA7e4",
  "key19": "2J4afsHAduxqWWAK47ZvUy31GpTMt2P6622HUtG47pmG2D3oWPsj2yCsCbMJpqKogHr4zGUkNtEFSUUS8wZuDuBh",
  "key20": "5WELqeoRKsd8h5ErX1Ut9f3MzfVo3kwgNfXP8cqEvyZxHuV8WkpbKynKYoCDYtAwER1pNQz98FpgsVbUshUCJfFm",
  "key21": "4dKoxF5831PgF3Vi57KGnyswHTRHLv1VTQQjNgYZYxkf1CHg9zV9mUaGWgqDTzw9JDpsLsRySsY7TnF58sgbm2nB",
  "key22": "6o1bE2HPeECUicLSQsRAWvEe6gra5RHEJifTv7SqakP5FraYMp22du5jhdrq9u3shYrTfjxWAxkGwSGahyqPno7",
  "key23": "4pQW4GeWDaLbsQEKpemSkKCfcmJm63kdTAGRXRCkKEBLnpEZ21FZZYcawTkd78LroULMTeJi1RzwzKUBa9Pm5tqn",
  "key24": "4JNQ8sdmy5xxCWWFhVFpDs8HHKctd8j9SV4WuaUTiCr1PJk1KyqSDhfRKb4pfQ7gAw24WTZKpg2ebqW5wNan39NF",
  "key25": "4wCrV2DVgA7AVJS68DwtMU29yk7zEcnSsaUbeNVEBrgtkP8jgkERDU8hev8TGwP5E737uEghoBgmYcVULrdUS3qb",
  "key26": "3kKoE78tEdzNVwRU1EJjt7Sd9mK9A5bgRy7aCaoND3tPPYaK3YCG2XBKfQEWHDHBoKf8j2ZEqw6E3TFmCws7Hhp3",
  "key27": "aU4YbuCksrxTSqWYqhFRGcak2SXkJLxdsCMQ1jkVg3FX17am5J23aWXSaRaXRQ8sWpzs2uruvmqy2evyxaSebnQ",
  "key28": "3Qx1bufrTeftzQoF35QCmzWUqPumM69Y9HpN7N2tuXFNmiF4F5dEizeR3Vco5wvXoRpJ3GDa7vjb3YXUyh2ywdDP",
  "key29": "5BAofnMS3LAaecee1oXw8bJNXQwM1MiW39zMfxu9BupT7YgX9mdLFhMGYiTeg56r2xDT29GEhHuyQy5fAvMTRN2d",
  "key30": "2De4NbkNxaX7yYRtHTLNbKsqf9Dpkp4ef58T6iRFdhcZFUPybPNWjCFPoSagpsXcCEN3Us5nYXrKVz4vieGfZBzP",
  "key31": "45xZ2CQJD7FmoD2wak3ACnxEycJjmZwnkvHP3XQGiAP73M1cEMcGgd1JXpFBzxLybUmMhAVRZcufxQGtHTF5S1ga",
  "key32": "2rQ7ErYPieTie7CQU21mnr7vcfRYZiiGoz8qq379yvFf4YLahyGSAp42zNEHZ7AHPZxTFkLstUuir21nzV8TNf6s",
  "key33": "5KMZuzRNwmk3esZ1DFEDgBsuYPfZgtgfXc7W8v9phcNMbEMRjpr2kfp1MRvsYNbJiGTRKo1wP848aB3ARhsxqtJg",
  "key34": "2QCQoAonwDzw2r6rS75oN2BBrm13ViWctxtCYFwqgv2oVFe7dJGe8LvQbDPyK6zdJJD6mnvxXzefjYABmA9TCkzP"
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
