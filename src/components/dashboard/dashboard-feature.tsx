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
    "hYXoqZJ3oJbC8YxnzmRoaZdz1zrmHnqyweqxPfE7zavsQ15j4Th8oh4xycvQBizf7BTmBy1n3RKMTPhJhE74UWm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Jdgzpw1XZyE4rBmkxFsuoEfFptkEMeWSF3QV9Jsg2LDbUYcT8kjv6iepdKgCTEsx7qPFoDeG33fexkTtoxS2vXy",
  "key1": "2JYzXamEcgQ4r2XNiKWoSajtDmLA6P37cW2sm8CjmCvBexahbNLECPH4A1XEzrKyyf7mSquoLLc9sdre7f91gJwS",
  "key2": "4uHoB66oBZvjBbcDxUf8HSZ39eQxZq14MkLernrPqjxEtvKiPPK6a44f2hKZM3Dn9qgKX7xLKTfFosvEnz1pXUAP",
  "key3": "3h9nCDSawHuP7EindheYBzV88AT8LKAoR4GvnGPs8YxQnJEnNWtNz3eViVNrEKaZepsBouGHLxkgBjHbEYn64y9Z",
  "key4": "5cLrWr8kWgmyHYxMr3TNuhZJViWKsTzhQQDVHmpXuMJoXHiHwfhxZeET9ExYwZxzkYKtWB1JDKQbNzvqzCAifhEt",
  "key5": "4PzPrCgeAb5k8yd1ASVzdbvAweMX3AsLYyMtGrPLW6hktuCKUgxp8LNegvJg7KScopN8EJHB81bmMELs3pntBfoC",
  "key6": "2RFVuT8M3CRc5MvsNZT1P75T7wzpJFeaFeBwfjJHVsfcK1WXx58oj46xLnQFXKZqj9CffSy99kvMfr8btZ1mkCYo",
  "key7": "2Aasx9D2aA1xabCrG3WVMmEF1znjbbnAiySVm3gnQEMc7RfHqJwCYZffjhpMBWjT5dUK1aD5zCouyJ3F1b7jJDPn",
  "key8": "3MgAZKjajtAzbv3uwNrSWL4DARWVt7YxD3WJUvXYtkeLMagcNyXD3v8vR9JX5SF3kJVxetjbrWYgvJMtVFyGGkbW",
  "key9": "2BC6orNB8uxg2v4LS1GAb2GCjPLu5M3rntiMaXBZgxK3UfBTWUjktLJdURaYPrYAi5AkrM2skKNL1EB2EKLgcuNQ",
  "key10": "5DQQJinF5y3aN4i2vPwqGNh82VixAX1r1qyTTeBGxxezxDaabwewEJ7Mj2vbKysa4MgBfRp7sZ1pNMFz3vF575zG",
  "key11": "2ErNQKtduvq38rKEhQVwcq7BQAUH9oL3wbgxesuC7vm7RxHENm22YP99GM8isbzhmGjQ4kQcGaW5oGH9CqVr7y6A",
  "key12": "Ai7BMaSTHsbYqMjyehoFknxV7JRbiEJ2WaPHipia3QAhLCeckFnnkoCbCXUP8oNjR3BQDpnzMrqqddeDa4P7zLq",
  "key13": "4CiUGE38PBHLDLiMY2ympH17tkzqFfE6HC2jeYuEWqhj1fNGd2jhghF3g476jhvY4CSuLBTazWTK6mn8aKkn8pJg",
  "key14": "3pGEqvtnqjYS1VBMJz65e3RxQa2Jf5RyoGHWmxawr4tFH9neS3jNN3NXzkJj4qxv2xiqEVUV3hShuN5dY1Cmgou6",
  "key15": "6657UqeVVj1pwGSuDiiSMo8N6p1HQD8ascRhTdydPHQNerchTrBWGJ54dRycGYm4Birh8PKa3W6wBUhaVYhZtKnY",
  "key16": "d2hGUc24coBVjGmpHDkzqJTbKfW4LeiLFZ2RYt3CYUwrz8bP5YBLfpFVWHWzwpVLaa8XZWqhT3PAcEfb8resocr",
  "key17": "3iFRobU4AhN5CG621DQWwbmbcaqc3Tx5r6JrhD7zJm3BtjAai4ckfTJYFoDJFWMUGqafqzQDSZBnjegxkvTiSBAJ",
  "key18": "5afLYzCeDHA1bCL3NzD1FWxRCt6NABfW21zXEfnRovsTDCdwM77Rv1nvTsMYDWYY7toj2ArgkvELrTTeWX1CdppK",
  "key19": "4prPq3u9nvR82MYiYrFgC2oj5HsSxwNi3aPwQrwLZEECuL3SkkJTXeaj9YeRaHcVH92W8aFUVwVuDia1Zr5j9Jpp",
  "key20": "3N9HoiW5x82Y4VBKVQjiFwEoVtQ4maVFZm8KCMDZA5YDnMH1FbvMwK4H6Z5mQffEoE9cr8tEtrhsAkfAmGUxqpY5",
  "key21": "bRtpm3ZEhCg9zom7bLQdCa9kZuFHfUzhkcxcFgcFtrCgnPNiPn9afN77R5QPV3zHdeNQGQrYVEPFvgfHRMBsjQY",
  "key22": "j3Xi1msk1Pe6ZwMce3G7pSRGiUF9Ck5JRZtSwNmtCs47Hghq7m5r75UrZnx9UmJMEQzm9ZrJaztVNGoadBk8XJk",
  "key23": "5HrE6LtN8BGGExmoS3EVLEAsYir9D5UoBorN2P5g2nT8bo247fnf4LLxYxjddRVuYCENdU8EnXtSLNv8uFMiRxvG",
  "key24": "3feKVKvRnTpzhBJu3hVSEb2aucyGLdWoT5bKamb8FvqbaL1eyxMpNhF8nqxdcdYnXTnhjAqihzn4tAAmgoxekPr8",
  "key25": "2Eono8niYYZ2GfurKJ1RVFGbv717x1CgZUJLMBm9nkAnWoUGXcosc2cgxGp1zT6iM5xdWfTSeakWUPjSb9ZHNi8r",
  "key26": "2KqozBeL2m64LmN4rkuP78UXFXynn8onAJA5zMi5hTmHogaZCQKmoWeKdHnW2uXDGqptDg5Ypsbt4f3GCAQQta5T",
  "key27": "61SCV2f434PCBbapJvJYz6mjp4pNrEqxx7dZDCDUMC5QK7vanA6uP5yedCj9DNST9nmxLJuGidqLkF1LDFNsKyaS",
  "key28": "24wbBPc44WmxmsF8HeFzUBV9a8oJyrXoW1CQkX3MioJdfmoALP7RM8NsSYvJM8jyCQwn6kKXwiokupjT6ngZKMjg",
  "key29": "464ERzSRNJ78q7HhqvEvHjNxtwBTZNyUMR8CH9JGUjoHwEZYA9XG2L7NHUyG7r3UtgzTxug4ieLknT8biuCxW8Wx",
  "key30": "3tANNxk67AQa4dkRjEhCUcw8rCDzsxTtNaB54wxUcH5iigPFjZ6DV7cgZDhe3QtpRtRzHdiJ6SdN34ajNTdzvnTY"
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
