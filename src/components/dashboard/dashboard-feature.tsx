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
    "5LzSk97MrqTqA6yeY5nNdECwHBtxFJvibtb6Yjjs2gi8i4bbGjAEdTHomEYBWsN7X4MAWsc63LkatudgzZf8X4DQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4R779VrzLgAnbwkT28qzLwfKLzJdbhJFyquy96RT4teA788BnZfSXteLGXa9SyBe81TkfYKYKPVdkcaiPcDmXRDd",
  "key1": "5b7jtXdagTgtnB3j256hwvh3rou6tKsnw1ByiD8NvC12Yx1N5Aj1p4EP1JuC4PJ7rrvmcSxZ5P2ky96N6Jn93KbQ",
  "key2": "3dw2UbWpQZU7kzCt162r64RLfST1xh2ryAgUr4CzZVTWfkAwkmKeCdAe9k3qevsojSeDENd4QcQFUa8LCUdMoHzE",
  "key3": "34xtMZBXuiqwdQNud74w9QcoY8mANvtv5YST3aqmhGAnwhiVisM6bG8GMUE3oUMmp5EgEvN1y56SHVqw2jzyJN9K",
  "key4": "4RLjRA3VE1VVfPiiX5rQuqrusT5bEWAEHpB8TK2caAJXt2Agc92NaarQTLZtiuSxFLjvDJ5R18u1ogwcraKdJV2X",
  "key5": "4xqwwhf3Yqffm1Rsy1DBKtswvfcGBRo9h5SER91nrmZPXB8g2XjorZBbcHLCQH2pBMrmJtnHngnGiHzqis9vJXCY",
  "key6": "5awD2KfTEbmGgDY8bvhq7AMrfCJsEoKWbzNybKhxcdpk1XkMmnCx8h8UiPg8rgUZ5K2hV9diaC8dJfzsAu84PNbw",
  "key7": "5sFtHVURfRiVACYgi33kSE48Teu5sc3gBicvvTtVDVtwaW78R4BLproQAkBCmd5sAkRVrVjbZb9jjas6SwJJc5yf",
  "key8": "2jC9KkqnvYzMpW9rXonS3CXpccPGRVJ98aipCB9yWZfQCVLk3HPQsCw7raCMFxyfiW6wkkzNcp2deYYB21c4fVHr",
  "key9": "4CqG1VBS4ZQyS8A14bRabYitRRAGfPastYnZYKPSg38wMcU2mVs2qcDQwBWvpiCrMprU9WUhZFcBjotLES1XDsEk",
  "key10": "41Uz3J26egadpv93ReVpKmLdcxTYiynuk9FonViP8mw44RGb7mo7gUcEKj1QdF2zTutdWWT8on1DpiU5CWigwC7G",
  "key11": "5LZ1Jzgg5SdTA2CmuX3qqdFhyD2umvr7MySAiqeERjiRyfjLGNNP4twUfboajAoUjzSU22rXCb543c9UNkXktJy1",
  "key12": "3SRDAHVQVJrs9TLjeybDBDdrrd2vdp4K8GiS4Qe7YH4wKFq7NsxTszrfxYcGNabhdr73XPmwhk6PnWQTDS7a3FFX",
  "key13": "59HrDq3KX6o8N2S8g8Jghq8wpXg2HL8rQwzHGbRCbHYBr9AxPz8u5HfpAHoey9sQ55iRp6zKpri6haNEmDmgdV1K",
  "key14": "4GW5DRdtUVYij7GW5jAc5EFg5AYFntC8cRQ5hwosgSpW8Y3Mpc9wU9cyW8wP3cemMmsdZWAA92L6EtBRjj2duReU",
  "key15": "4xVFpf7HKBpruX1i691G4avPXLyv5VVzLU5TUa8euoV7F5GLobEuQatcWDdtsRzkxd7ArrmVNmaxdMNcFHryBhh1",
  "key16": "Zacs2hq7cQEQKxzST9wj7CjqEspi95jZoFDq1V5uNoWtUqsQM3CaGXHpGhpr5T3PMvbZTbFVq5rNkSBhaN22tgu",
  "key17": "2srUmpd7KXLb34nUCEn4dgSutBFXxuJ8MtTR1YoYBpaH8ffpJ6tmsbcvFYtyGY122UQRSkDXGdC6suAXHNJwwaJj",
  "key18": "3h23d9rchB8oXig7USLngEc4RXnBLiXszQM2NGWckTHRXtWFm1g3u3JNd5ZfjaT24FoKY23WHEraFrNJ76YENafA",
  "key19": "3GT2tTZSUY4LgTehR2MJSFS5gV4oKrNBz9BNiHgrDFY9k3VvJvSfFutqZK1JS3UovdVxKQpe5pvLP5EBtGSGMRYu",
  "key20": "2wjJvGG4ARAcsZWzg3ZEmvdwC7ESinZLFUzcoUUfVXGjqVuC3KRv8APyAUhC395GLxEQvVUGrYZhg4zMwExaAxuv",
  "key21": "2eAxebwdG8M7ASdGGxTHL5XVVgo6iNBJEyzDimzRKaMbQ5hUjPHFUHwFdb5F81k3PV9rbZzVW9ULsx4DoSNDuqQD",
  "key22": "27tRigQ5KDEwvGs4JWTj2tgZM8Nne65qvgE8sqoy3wjc9kwFm5QLysDB25kSdKH1DTT4sZY84djn6Kq3apihQcic",
  "key23": "5tTQiAdu3aeTA8gHGiXLXsF7CcMhaaquu39vctFybJ2ASeYmYnyX8PVVGbC2DVxayG2FZjhgYWJSgh8wDu1hcEU9",
  "key24": "5vQGe3dKN3ofJcCYumR2kSv5VoWrCXRCWbWnwMyukBtEMHo4bYpzhvmiMh24K4MxtzFHhY2kH8EQyc3wBZjCdq8J",
  "key25": "i4oYYj51Cv9T4DiTVCJx3MYEirUjZtp1hzw9AjsiqH4CQFVa3Q7JPDyoWVaRBPbKsnAUFUscCi7bPzumbbm6rGs",
  "key26": "629zEq1BYhKKoc9AJW5789kbnYnpbmpnuZZx9FgRJHSUS84vpZ6FeWNr4JxQqnjQm65x3seCor2V1A9aGC6FJChS",
  "key27": "2oXbfqAoPY7Ex3kzCCJ8iZy3y73zU9mE2pXeQuMRv332r2mQnVB4e21q2gr2uceEBTPVFZ8n6RH6pnU5KmXFqAzg",
  "key28": "4MSdUCTyCmG5gSKeZV1cm8MFoMpnPfMMo4KZdyoromwtoQM38UBtuRV5iE7DLyuFm2iDm2ard6Av4fgnZtfggfQ4",
  "key29": "7Xx6SCqYFPrizS7usUqVLBiQazKC63tnBcTq17D8N7cQgPVYtQVonBUsd8gBFbMDUn6fkzBZ4N6HYGpRei3qJob",
  "key30": "m4WcfB1pmEfCYsyrdN5PR3GjkhVkp1qLPy6LRa1jZsyvuGgqq4T4rUsp6Xzvt4vMhAJLUt5gC1swCM3uZavJq7d",
  "key31": "pY3ZYVPSJzR5JK8dgqwm815RVpCQ6hkwtDuSVbwXbtqkoLqD4XWddo8VTeNCX1pPSkaheifyLikdiQpKUixm1jV",
  "key32": "PySAr2qQwGL7QaZA6d75rvdRLs5vkiyTTvEkRSda8G4zeBRcLbS7teoWe3jQ4F2Pak8nq41UbUkUEehBStr1W1L",
  "key33": "2XMEkPLhS1vHz1NgJhqxRFrGVDJdyhBXued4PYZ9dayT2K7bQyEZEAAY7ayUXTjMzBLUJ5zypV4J9Dt9RWwMTT5",
  "key34": "2F949qFHr5J8CDHnr9vMhb6pndABD4w5NXyKP1UKFy1rSVwW387QdteVrCVnC8hi2fEMeNEy2PE1UCL6LHNc5HE3"
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
