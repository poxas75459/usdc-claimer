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
    "3Nodre5YaikXph9qLRhAqWGhKyKD9QuUVKvRiDUvYsaYP2tWXaxfWpsDATcZK495Qxzbh4VoTHft4AyMv7aE4LoU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "493uNa3QtHPYdkTRLMmDbyrVtdGTSsm7m6wAFWwCMEwC6KUaSr5BQP7R7qxYgrvddzLDjrcQGjNASjpJBeMvk59p",
  "key1": "FXxefvny4HSzoyV7stag4rr3d1mazZD4exxybRrDxKgUr72ygKioV8B51d3vastYQ3QjPTnZsBp6XXHVvfn4UBW",
  "key2": "4t2V8JFqguaAVt7mzQxo4eLnKPL66JE89rammDiJyNbYhthDtMPfEruvW4azWNAqceqSsjT5fYSiXrbAGKbba89U",
  "key3": "4A5YTtidki14BewHxJrdWfjZvQkXB1YdiojEWnBdjtDg4mKTsGrUYHdoCa9xp9ZBx4ZTekBffvULSiCvzYTxvZw8",
  "key4": "5V1cpyt1M4PvkdrAbfoMxz6PB9aab3eDE3S6PUK39vYx8DBNFquN9TGxMYEFZnpwSqWyrv8fMnQsGPH6HbmmbmKH",
  "key5": "HcvK1EmJ74Mw1RqjGUVbvnHjCPKXiMoKyXZxYXjQn8Jw3SH2oMvm7ubEgPWSw6QDdtXHX71vKrXGTGpFCxhLtfB",
  "key6": "2o1t3qVJ98yKnyU9tq5c6czNx1eqpMYp7asEcDTiUC2XmgmTUnYy98Pk3uZUxBGG1xbAD8rLrWG2sqFhbDBhND2f",
  "key7": "3zoqWvGeQPUPyiMy7g8PpwXZfeXkDfbnjbYbS3hCHkj7gfYV61BAJh1bap8aNHJmngEyjYqhi9iNvQxdzpg81zma",
  "key8": "5SBjMToYgSwhpJ9rvsnaJ2dUpt3AA3WrZiaeVRuvGHwGN2vaUniKXbZviUSwZXDPDGmDbzRfoWFXaSh2zZ8Th451",
  "key9": "4ZafSwXNNkkrQP7XwzZcNm5Kr6pU7abpToBPaJeoVC3GC5HDLFpuaReBG7yifgEn1zULXXXr6wcRrsLfVJM3fdXr",
  "key10": "2mSoBQLgx98JMRqALfcFuAKKuYdPs1ckw9o99r6QiJYmDJM6HFMXxtcDsm2x1RpGLedkqjVM74EzZmTipAj7ywEi",
  "key11": "2vRZ6aPVeXc5VSyYYZYdE6PUYiEbVWwieZGBTPXq7RMUNeHbPzFVjNJWtyKKSDNZ7Cew2EUxkbTJEgrynBAhspaa",
  "key12": "5gXfL7YSrSUYBoHtHHHQCzSc6CKnZDVn2aJekvcMjFxUyPE3iJJwXDL5EmMC7BgCZLYABRLzCg9Z4Bja2gwH7WMk",
  "key13": "2fHHuisQz6BtiNTHyvDdVnD5oAfMcFq3D3QsDsR2U1MfAGdbTWXvh4bYG5sCbct2oePBNc767VVvRF94KQSg5oZ7",
  "key14": "4UPyjoYFDAMfs6WJnRAMM4ZTsg8BadtLefxRiYgEcv1gbfhkxnnM3AxeoZpubDhSBpALwhDSVewJD1x6KTDJHhfB",
  "key15": "2bS1bFnngWaBE52RH4JoHP5Wcn6zswCkeUpn6fRwriaQaM6d7rL69P5J2KakebErX8y2jJMrSuiGHov64TqvxWGA",
  "key16": "3xRbBm8MFkeQqG7KbmjRQvj9uGkpweizB5NcdEPsXGLJyF2MLm5DHKutvdNiLsiaj2KCrwjuoppXNji26iWZ6Hx7",
  "key17": "XDVtypA6AmTkBKLiv915HSX6okqcufxL6Kqtb5DN1ADMg7omdGX32pCRBbhHWX27shSSqwkHRTuyQgsJWXLX9dZ",
  "key18": "S1SR2dhh1HA7NXday6Ec6yg6a7K7gJ8KKaCQccbh7NEVX5VjeSdoKg96Wgm7gGU1tQ4nviqheJkcCtYCEgybKgc",
  "key19": "2hSssEnRUZUvaQRXohtc7RY7arjSLBrM2jPe4BAr9HWmA63JGPa8T8vkYnPJ5N84F7B6TST4snT8vHDgeFzfGwFe",
  "key20": "2gH5wVdohmxtS61Do7i5XGhxp7zdrs74wMeKzsN8kiSSsu2b8RLCbz4VwYYSqx3dWtT4Ybms9h2ZBVYPwFWawm85",
  "key21": "5QvbYpoQkgMj8gWimzPAHXCAEBhnaU8TU9pTutwsYcpKrmWzKkfbCZYiUwB9vuL4CynUPkjnjWfC3SnrZdf1o8eS",
  "key22": "yCGnY1nrgTggLMX7rE1pxCd3u1eqUREqqbbU5i1odCnmJKkwukYDVe4dHBBAg6bKa7wQUSx5MpaSn9QGGchv2LZ",
  "key23": "3YQb81WMhjPyZjr9UAr4ES39b7QAvgRth2ixyovp2wVzQRxKnY1QUuJVrxfnKzKwEJuE7aCEiV2ib8RbgWM2usNK",
  "key24": "5vtwQzcHsePTAptZBUmeesXtRdihVTtC4nQYZFN6ybRWRuQFfaNjjVhEV6V4qKg9FuxJZvbehrBu1haS8Qvjn9SS",
  "key25": "4Fe2qKNdXdaP7skAoSLCFXgYSd2HTSy9tTt8JcHUacVthNb17HcdYQ75kxo48UixuaLXnwUGXT66sywmnLwAmcT4",
  "key26": "4DtVHuoAAFik6zZvoQEnLKekNDbCzXguvMjcBEm2Ts74NLvHBcmXfeheZTVzubxZSfrw8XD3CFuWS9kjsvSo1Fcd",
  "key27": "vqEfaDe1hD61aJjq4GSPL9hjLyzKFQ9mGWsMf86sGJz5pkcqCvvVhPSqW82wR5PEap255BvLQCKYDrcx6cLw2KU",
  "key28": "hDPoQ2KZw1qMjyCNU6rfspVASaeHN9ftcFxDCiL43rnB1MDo8TRyFPAdhGEs3nLD1wBh3qPvFnv5rSfDQ2vHfs7",
  "key29": "4qKhTJUVaBvJoxvcbgVk7yGDJUp6wY421Sqm594sLpeaCpiYZ8k8L8JEnb99aocpvSHHX1EgwnWS3FXJETreYbdV",
  "key30": "4QgvHvvprPjp4nH7EYvRpJtwXEKFJfvdF9R1DwchDLgxRTXkqxjvJGAWqcRqFSt3bEY3ygzaPzgG1FhjFdtdSXNx"
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
