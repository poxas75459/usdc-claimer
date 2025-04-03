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
    "5QNmw4rKzpGFeyrTFUyUGJ1EmipZ6Q9egQcgfRSEMcC7c4qZoEjWvWqqMencL9HqTsYaLMK26BeMwVRppra5d6FT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2idRpqkT5ZrReeaMCM2TGActGngtCy874daFwe78oSR5miALrXzQ7QskoPqJoMnrvizojVKYXq7DCy2RFqQjocBA",
  "key1": "4NAAH4C3GuapTzGhDFw3YAfspx8HMgAVuJbeFxZAubnWWsm5dVbPAMcVegnzcng1FWujL1Bn4y9RE454zaEbhFq5",
  "key2": "4yBKi4k4txJSs6wjw5XCSyjaZ9SoRoWSn8J5RjseABi6zptcFVkkPnZp5t5tPKuy6qBzpqd2uChNcdqgSdgUsNW5",
  "key3": "2ciD34fzquWfhkbDioKhP5YjDnn6hvdncNa4yRoe2qSc2sxqghzxtQAaoiBC29xuFrcoTHrnFzrHHVAgdVKvTdci",
  "key4": "2xJayQgKCX8kySC4MfPBgseFCfk9Yf4z61MjDJSp1ddomh3DLStdfRtNDhxRFM97oSdtCFmYNXmfnpqzZUqkWBpY",
  "key5": "3q8VzxkSdXq7E8uGi641gyDvMy91skL7mEHfEGzJ428VthHjQhrjUaFjc7WTaw3bJ4KUGHTJGJhy9TMF7anmpEwb",
  "key6": "63iGHM5132yjaLY5WzSFfPw1gbkiFoxpj5xqTLuR4inwJuhhL1kNrMfXv3uCxoDVZarfUC6zzow4xZNg8S4FUuyE",
  "key7": "4KkE6XykAAHKzsiCwEMU5HNDx3cCif5qsujXcsbj6WKRdVzGniKRvoQp2s5fb7YF41Acuf7jdTUJojjjHqb93HB8",
  "key8": "5hcenqJTdjo8ofGzdcgJ3ewp6KPbBpDcv2GU1Uxt6QUDwR6pweeoeZrHvsQJT27gDRGHksc4Z1sbbt1FqBLtoP5z",
  "key9": "kbDLWF7XX7wUfwLDNNHabwBriSRVGUZ4dHEe2CLJ19tDPaf5KWgVp5yfpUhMvViW8k6NG5BEx7rkPxN7Wr8bANa",
  "key10": "5AHnNBpUn3AEBXje3diaEmcL3PvphyJUvmwZ3yB1i2yoaTm9rLZ4beSjWxiDVEcxBZC95AfUsDS56kUc85jqjwDW",
  "key11": "3U18fMQHVt5mGj4okzeZzHP12RKUKSCHRqExPmKgpb9r1E9heFYj5sQWfhh2jiRaJv1GiuKYJqk8ye8JUZeaZJLL",
  "key12": "5xdMZAU8K3KS8SAjz8PKGgrNfrtSFtS6MaAQ4LVNS5hzKEaBWybvnnCMZcyQAc7XSojoeeKmDCnatcdCbZU6tRPb",
  "key13": "2eC476mL9yzuqggUzhpZSB87xRGBT4yb1fUbbNnZN2d4x2ZVaD5ynAjqyxQb7BUnnUuvkc3kiZ5oPTjYYhBycDt",
  "key14": "2idcZDAe4zvtt716khEC5xMKWfuwKKYSnAuJRPpR8RmHNU99vu2wZj9ZhtVPhdYyxgVjrLvqyTekDZY8pYntVW8V",
  "key15": "43dP4D7ExEoBrCh3vzmDo2ahvTdjHuWjymzACdyoHYBpU9pkwovkP4jA2HhhdksfhHZ35nYDGqPuxgzq3sANwKA3",
  "key16": "2ocftT3oHo7hbKnCvs9Quca3F4PVQjTCUQcXLYah414m2wyJUCWbnk2KZRNbi5cuEUsb8zR1cqWBpoQxku8jziHd",
  "key17": "67NMsvamKvxiXKo9vGMR5XyMxDRXzKNtfgNd3ZD5mdbiB27u8ExKfgWtVyPPa9PrFNxxw2yRPKpEvGYdbM7nPTvW",
  "key18": "4xcNbNjKvB5v68b8vDJWUQcDxxCsEBC6SToBF8ppVgDZHX2BpEShcMu3iHTPiJQtQKpxAmbffXTnQA8fPrWYGtbB",
  "key19": "5Dxvp2LWu9VGoymmhbGV7yKCkPHUVFuD35CfeW9vYTFy4MAC5yR6oyhLjUtx7pWT7WZWnKJB8ZJyN1A29wGSZKiW",
  "key20": "41kmxSgcMPuQaUZ7j5WzEHkVuUY7FVMyjfqy7QFZ5zQGrL6BWJXagg7GAWb9SefnhLFBAQwvgsLcHhXtQ3xPA7fh",
  "key21": "2np3usYWmGSmsBf8CpPCqV4KQRXNVXHTHQB4fBZTXSzMvFQpR2xG6jgLhjrxrrrpNToDXrot7e4Z7P8KeNsZ5nHT",
  "key22": "42y7RSbXa9Agu2mqtmc9FXAeMAaBb3QQKZHeWnX5hV25rAvxyy1EsboqLiRkn4d1VgQUeS6RnfCa745dwGY5549P",
  "key23": "3S5vGRCffVo9rpSPsEFNVpAdndvZb9vPHbYw5R5o3SJiXddtUkS7txZjL9TRUPwF5wPVAz6zAWRQtuwcFXeakHKT",
  "key24": "4o2kqcgnfwhpJ96fHtNBU6a8TcEBMvhRWKzqd5MwCqBpanGZos47yo1BvP5zgW7XjKJF19JGrEPLMjsHvzjGtcgx",
  "key25": "2cY89LNyULw9MGK7jywQeJgryjU2J9PhyyN7oKVgme3FtLgyXbELma2mk9QpQDWb7NbvxQPSYnbqEtoHQGA2yFpC",
  "key26": "WmvpgajfDGN83ZLcXrHCSCf9gLz2ysgXSWANx4dW74qCLQpiKESxP35WDhwzjxnPvZmNiGj4gqbUFJK73RGcndd",
  "key27": "37zjSs8upjzzYLC3FoCJ1ZBuBzaUJkGN9EuQjNMMAAiv8qeCXuyhehMVotRTvUMjgHYkWGt8whgE3FaVQ2XxBv7e",
  "key28": "2AT7URYDLz6EyhtDKK6rEjtMa7hZ58drmRp5EGpTZPVnTiQr2QmzUvi8PBaeBdx7hDJqdUDwNAKvAbXcrXGSrK7e",
  "key29": "2AtxdPiCxMrZQGegwFTi7G1NszzgJBXRb49mJnJHWmixffJ5ZzH1nXtZQcNkPENFUWEDjYcaEPsGwo1P7iu55zsw",
  "key30": "5ViUXso6NpkUJZUxWmMU5inGRbMPDjhp16ZCgZuKfFcYvBkdZUfXF9FQU76AKtrJabxLmvF2RU1LRHpYrfdKu2sZ",
  "key31": "5hyYZYxBtzFXz3FRbwjjhe7giisfrhP4wLE1KykJrduKHnEYNP4iQYQPbqBjD2dHqJYBfzZYEpZ9MzAcvzYYTcBo",
  "key32": "2oWHCPeRSrQToxmMrwM55kVRmHPj4kW7epuxTYyPekVDDUy5LAFA8NsxYmbd5c14QsPYFHMDcnrSSe3R4x4RdoKB",
  "key33": "2iBmnJuyV9jx9bocAihTfWjKCbX3M4zRAyTYTe2KobcCadGrC7sicKETDiDu9iqeABWJMsZKNxYJhPJ6QwEgwL54"
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
