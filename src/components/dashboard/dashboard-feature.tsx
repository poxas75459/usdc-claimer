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
    "xswGY6MZDufQPxT5zL3kgdR6hArhZffrZW6btz7nuJXneUL3sNLKkueQYCeZyGKfwemCHmKZXcVBcMyff5aCbiX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2exC61mcjMMmSR9YKZpeQkPLCKZSVjQ6UxzTsh4ueJ4HFn5b1Si6dSvHNBr9zd4vfuyFKDPWmj7ySrsrPNWaBEKX",
  "key1": "rvGFz6oh1ZzqS6D4aihuKAWyAJCt6AiazXVFb9Pcspx69Qn9tVCm2WZYdKPzDKGbj4aQcWsZwaGbNaCrsZ6z74u",
  "key2": "Sna6EbPgS259YR57DsZVACSbAJuNd9ZTiQ3pedVVVygN6ML5dqmS5YQtUq8GPeoqZw2vNPDo6MKsFZsbM7Eshfi",
  "key3": "9uHpM5n3mYXF7H4gdaidnRW3PSj9436EapNNExroMwYkmUaSi3vH9gFfFtkUF7mDXudXbNQ1gwxoFPQmunbinRB",
  "key4": "1SsGzs3V7CFbyrTY4Fhk9TRxeHnkXWxypr8KKGFizo9AgLczekGzMqrEgqJhJhJB9wCivhxm2vAWQuLsnrwCMNc",
  "key5": "qUfft52wF5MSS7QFvFQwi38UPi5zWMT7Wr6qmDh5RxGndsqhBvjaNLAWe7fV3N9LJ9RG8v14Y3tQfkM4tszyk85",
  "key6": "4hgi55pcDYnckZ4HeDX1Ye6NTkKyfyHmfKdeCD6zf3tJRbXPNusksndPy5RvoTKW4xBhL73P7ZC1XY8RgLUx5ZUp",
  "key7": "ak2EohQBKhtUsXw8keQZV3kPwpHN25Scp9n1JLrmrftAtWDtcjjE6GcCJiHXTshD6CCpGdwfmnPunhHPuqvzt88",
  "key8": "5GqNr8E794D9mqbV9pBhoYJdNCCjA3cNuQfsCEwt7HDofnTxYseqwCcJ1SjJGzNfV6DCEBeFL5EibsE4axw79g96",
  "key9": "5kkaS44ZNztssaU5KxcMiBDfB5v5AhFNEnYW3VApTTzwTsNjmD6CFUH9nYCPNpxv7erYFSFQzY4dTDhJcspgXpBY",
  "key10": "ktoJ8B5PuJHwEstdUJzbVhGazB9B5C2NckSGpAyo1Yqyh7SSHN6pAiqHEJDYtw8xb5LJcA1ewpemL3m9rNyAZHe",
  "key11": "5wpiKzjWBny9PoKfpmi8k1LrjW64JFHFAceUiABA5kYK4SQ9bAWZf8Qbv1EQxHoGRde3sF4Gs7AXzQPzQjpcZv4",
  "key12": "4q1LU2kNiNMdgPD93HdGZCbJKg8rBKEVbWUKC2Z5wMT4QxThJyQ7vUbFnQDZEukhMxiV7Xh9CkhNCDMXKUgG9VZt",
  "key13": "3WWwA62zKZ7o5zMdmmCSTPa8sdHRLEXcVS5QQ27x2vwNTYsCvcQjtf5HedtmmDgC9v5kyQbPMHVBF1dbKyGxM8X4",
  "key14": "qbo2DiXAPtuMF1bm9g17CPgbYZ8SXsP6A6GtECt4E1McJRqGkH3JZjEoiYFMFnRx5eMG2guGNSnvBZ7azBtcn9Z",
  "key15": "4UNm1oYQxJMzsaq2VQr6n4wGRukhJoNcTeVrJCcRjNzN4ayDjTBbvetsYFAjSN5kyJUzNQT1E4axoDuLrkR27uE1",
  "key16": "PBewdPJrfrxBdtBFR3GPzq8mhRwvQktVcXSr2V7bWNPjcCXaaViUF9aeCZ72aGSruUskPbZQQp72Ww7jTqQYadL",
  "key17": "3SxJMt9yaMmcoovcdEs83rgckqMghw7aEhGuRVBxfTFCsEU8cGBsujvorPAzAACbbxxtGcNJuCLwfy3y8njkcmb3",
  "key18": "2yZtioRqMtjg7Kaq78Y9SdRE1AA2Ea9RvhrgQE8FaMSFsciV3obMaBtNXTv8sgheXu6q99fTbr1EaxKYFYZ5G37H",
  "key19": "2GhRa9gS9jjZ8NBeFeBuXNjCRPrzHoqWeJEjZMSQ85WgPPobqwAX29jp5KGgdmKGyWtYDA8XPsBCygMCFUxVY3ou",
  "key20": "1X4KLy2but9P7vTSkj3Rt12VD3vbLYGLby1JtSDYEDkT7Ei77B8C5Vzr4XPgb9reT3RsAwRMQKcqPBib87gRijo",
  "key21": "5JKXDFm84pNjPVPraaGoSLm6Pw2wTuYsHYsKtAo5NDXtkCTQVyJXUZX7N8CVMxsYri8hCEiWjWEVe7cL358q3Noe",
  "key22": "bt8DP9THHPds5ckH4oktYbSaj3a7hd5o7kjzAxraKqjLqHJAQfbgM2P7UiEEpnVWoekHNBJd5KXYRcLyZDsAzFx",
  "key23": "4YdFte1RyjjCAEBncHz2Rb9Vpa4xGzr1EqggUPF7RKbG4ZCPCS6nmciea8FVqzELJskdacwnHqXfvv2D3QajXYFP",
  "key24": "5bRBdYb1DYY8fTYvXeixg4CRex5E444U948fQmdDQJ95BTNHBFV5XS3UhgZVDGh1Q3pnyb47tai16343JeW6RcN7",
  "key25": "3MGq2unygZQ6A3XMMGGA4AFvDXMEJdjf4XmuT2ycdh51MncWda2bbbmPmDc2vazF6wq3kob7Ro5sGCfvmwFrtJp9",
  "key26": "22YBEbTm4ntvhsvX1m8JhdWuy7Xys5LmRR8Vg48VW8fgAt14uU7uhW9MPknyDMSeTaUdmpRp1kJMGM21MQ5PFtg2",
  "key27": "Soso8TfyQ6jCnhC4FPMER27Pusx1aEmc7zDwjuhE8G6HvhySEtqpCmKvPsfx9kgzvt67y8SuWuXfkLhmD6MvX2T",
  "key28": "45mBHxqAxj1VYPiyHdJT9hugmNhMJ1bg7RAhd4NRsByhnLzfwHfBYbdFrEXfc3Auu5JBstTfpufnDtB2y1375kQh",
  "key29": "2oruTKJDV68h2EvbDXuptJ1CV646NYzQoTJ1oWNLSan4iBfhrCerr1jAUGCMnN31fUKF2Up4z7k6cKv7J4ag2nks",
  "key30": "2NzjzKqfr6iDuMZaxgof26JxwsmNP3Re1Sbud6E7CvrQ9DhohM2r2Te42Rq2zXGuLpCroeRbQ627M3Rs4rxbSTvo",
  "key31": "HQ1XwvnhrGfpWDQ4nyVorvrKZQqNNjejcNtndNbAwHhvPsJC6wEMA6JFCoeGMH55qquUK97zGar6Gj4JcdJ3fui",
  "key32": "3UKZMTTysUaSGPZXpccvNkcxTmTunuRWxicPPBbQRt1EPThA7GMaXTF7AjfdHancpQ6rjwnufUTdja6EUoDrwArC",
  "key33": "5c643oXi4WsUMrtPBmk1Ya9f59v5sdWfGUZZdGWkjHksvJrjdPB7KMwWxaaTBqqfkRkYSviDJvN2vvogDT2KrKZ6",
  "key34": "gmitCf6nYGc2wK1jy2SUgMa4Ep7vfvBD93Rq8E5Lo6kPDaiN3A2UAbxtBrq2FPDMESfgt24nvjti5CTKUg7Xd3W",
  "key35": "ZrDVZRhcmyRrpvbAypo3G5nGRJkYCEAoHsJh2VVbAMcU3GTygrzbnvRX7cnAxHWuShLfrtyef6tCy4syn4iVb3J",
  "key36": "xTJCSkt3fL9kyiz9igJ2RqD3Q72H788qR3hayh49GwMzzzeHSvV8txKQNA1DKS4hgYrC4rjtT4cTcBJHtUFYvKQ",
  "key37": "2eKh8uL9PkjTDCp7Gzc2VMY95EEoMQZsbdWwEyQJr1pntFSERZf7XwsgWA2Xo3uHHbYT7dDm4CaSbd6a9v8a3dnK",
  "key38": "4oAthMggFrd9px9sLtNwEQP2hkeWq3N5UNJbX1rSrWiZqLvDZe1k8GBBEXwLM5zcornvFxRmWWTmYjhHMFxC3EHc",
  "key39": "2sHZfsEq9fz53fZzEr5s7WKbE3sC98DYSfMxLZFsJyRTZP4Z8jazmgojRy9cJKg3hHM3KUA66q9hMscdYjZXJ6vp",
  "key40": "37YuqGBMk4f9MiB57UoqEmiBaCqWFKF3PgVcxtiacXgzrRhf4o9RHfB45KMJsMbkLKDzutt2zdbJk68dnGZfawPM",
  "key41": "36RTkdrLzRga5WvUiFiuvf7GwSzBRdHpJCrtMEzVif5cEJYm7mS2DEaZvkwmvQ2XMUDsRydtWAJ9WQZobEdq8yqu",
  "key42": "4fr2CjQA3ceLQbSRSDtVnEY277iZWNxRvZ7SgXuw4ksgMChk7P8a7w28xYXySRXpVB66AZyzZC9askcSw5QxXT5v",
  "key43": "3bxHgKFYZYaHxWA3PrhZeSupdNPGQ96wvm9Y7nnha9qf7LArSzRv4J1ii1hshKo5kvAeULtuQHdPuhgzL8s8pHWH",
  "key44": "3eW3mBMNJN5a8zyE4sWWFV1AhpHXVPFi4MEfGCxYqzUu9mpSZFLBKjvEidQds4npokK2Ngd5ugVtyRjuNSjbuVB1"
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
