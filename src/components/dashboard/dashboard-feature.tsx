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
    "MnZ6s8G8PxPVHMgSwjr8MRzd8tne8n14nARkCBWqL1LwziHxSZ7mUFq17yeZYbCHM7hTripWFYbXiF2mfuQSXeq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4r8Lxy2CtomW6Si8BRWcQMab1LujxjaTzhwFCSpE3uZF34oVnK83Dma9yEATd74eEYYX1GabSsgCN1VQjsZJLmNG",
  "key1": "JNLSms8kcySVnrdKfnLApjficMnVRzuZXcKpwJ87dWAUJXzt8xdagWnv7xupooSKTjpwdb4qVRhbDbSKRCM4sHW",
  "key2": "49dszdKpSkmtbqee8shLtCaWFWC2FiY4AUWEEZTLCkD8q3iFamV6gkoBJ83DnB5tpnLq2etnmNUAHm38EgXYKg8",
  "key3": "3r3MPWotJnck3aeUVjbPKLqp6vbgJPUpBUCLzTbk8vCsn3ZoYbryMpGUhoC9Gpu3LjkL46VRKEiR7mVJktZUiYRY",
  "key4": "4BGtjUMZjRp5AR7zVFM3As1FV8TpsXdhyPrtatfNgUEG65EodcksM7qi54HJWM2LGH6DnK9dzkLDGDHmJRAFKoVp",
  "key5": "5LyZUGeD6UqTvrfdC3m5JsKw3EsV9S6otP94bkCypCk3WNffoCJYopokxbKHy73eNwW2tafSjPqcq1YmUjqpPZy4",
  "key6": "2uk7S1FKp3pzUX45YZJkUcsvdx9UFjcaCpqhYZnQEVy3EgGv1UUzfBahBC2qMrqB5v3MJerp3EpQc9KP97GCY3L7",
  "key7": "47vgSPj1Psf7wUV4yB5uPB2TZnS6D7WZfjRDmuQq1mZ7DtRFeqXgx7ZEHTcuMbU6S4aPFFLdB6p6XwY57vi15P1D",
  "key8": "53jz3N5oCnEgxKtFkQ8z5325esDxk5kMKe4HvSqxgg5pcZ3NeLQ6Jx4kNtd7dDrQnC6GS9mjWmRrd4fNuGSPMqf1",
  "key9": "36tEetrEvEbaLfLhFdvbR34rngGpa4tUfViNoGydfqqbiqJepvuxzw8yVepBzA54ZN1GZ9uAbGUWbtsRoL5mxtuh",
  "key10": "5itJDoepiYwqg1GmyC7Faw8yAqeDpZJuf1pvGnWTdKzwDxV1JNC328n7ERim5zDx7yWMA95ZfrKJrYnevLsMbxZt",
  "key11": "3AYKULc7qNvNK2RjeniZtv64joYsE33RQZmodAeej12uSCzuGFPNCj91AmkK1gXSBKjLSck9YLTp2vYciWXKANHR",
  "key12": "3wixwbNNFSJ4MTeZTDphvmQrRDmi36wsM3Qz9xxr1tgtUV6zB3uBxxvdWT8DjdGyg62UR5SXjZStJwCfGS8zc4C2",
  "key13": "5LTn9njMWgGhZBRrPYstmx58E7JFEZDm37zLEpbCpRxHK2CDYHLCKWZEMGkfXqwLeWRpPGjYTTDX98jCPEGrijuY",
  "key14": "2vpfPwN59VHhggd3uVVCMw3YwRFmjEH5VVu8e6DEcwcSYLCThYbvtLQev9h5kzwT381h7mtRbXefiCsDE1QUNwEW",
  "key15": "5BNzuPFgSKu2Wyvgr2TBbLEEJQK19WhFAtM6zbMfAnxYg6MuwG6WAZRcLJGATFtS6bVUyAtw1dKpCek3V3nt4ozf",
  "key16": "4Wpa3x9gYW17qA9BWeVbAirbURVVt5y9s4VoqYnjeVDS9D7K85wfC5Lsff7Wtq3E9hWnKU8dftfXCZAhnx4GhbDA",
  "key17": "3jDftYpiy64yTMjNqP3a6EvPiEaZF6JdfLbEwevTvc6qDmjmSx297pQHuVtPHDLmheJ9AoSFrMBS7Pgm39YZX3TZ",
  "key18": "4DHADtFZRG9LQfqPEqUCWvuATfTnEdey17zGErW8h7SFGBMdLsUxiZAbrKt7pA8QQWQp2WsLcSMWd21oBhcKdjC7",
  "key19": "5ZfC7Rb34P4HMy2q3w9RG5qmTS4EUMAyDX9nTu4auwNQM81VetHHbSkXnAqSVvTKRxyZhV6CNQnYe2zKuMqZEcKP",
  "key20": "4p5YUsgSK5byrVUkFHER9DWdXXSwRatDvpks5zr1Ut2rfppALBcuPzy3B5xkjs6EsDVR9Hm2Xixn4Aa55u6J671w",
  "key21": "5pNcuDdCG2J5hLs9ZatyUjFJcEJXY8gdA4GaGUppxguzoJoRDfPLFvfATcnuGcvYYboMY2Fn7MvHq2VncGADrxgv",
  "key22": "2Sv8hSTgJdQhRrf41nFtdDbfP1LHLu76PG6usWGEt2n7A3YLg5o9H1N9xHgTDuqy3DNgj5DRPJN46dGpdUi4XKgh",
  "key23": "4rSqy6SsGjyd538SGLARM8v3pfEnApveKaYsjjeU95xNFNwt9AXvgMy3FKY1VKZjszr2nVQqZDhYhtCrLaSX4nTf",
  "key24": "2MX3XnPqeA4GyiWdDJGtFQuikh76QfRqoYpWidwDjTxGVfXJUMAPQkZsCLiXj7B8PFuHiy3X8imZKHGtTF744V33",
  "key25": "3CfiWoVBaJkLYBmDFn3We7QVZeEw6hp596hjwx11mmfRUt9RaAA4ysvrNT96nn2J9hXhE3nobhQCeTpzkX2ziBE1",
  "key26": "EYp7EZqy8kevFiPwj2fnMF75ZHnyD2eh1mTJ7cA3rLMVdYYBuZVabkfNwATB4L7CTNVmwkDkjVxUsV75uPhjXq4",
  "key27": "51RVdZerUGC6ipNf4GLuSdc8YgbtQiFFWkrWJi7Cddor1486TmMSE2o35KTAfq9GpePPG2sWKMbWTnbAwJzoqGrH",
  "key28": "4FXbqiMcmxRdtw4cSFj8271zUA9uhZpq8QRVyLGrtXY5HeT2GKpXCPwghM7SoWSiw3ZiW7HFeXdBSorNfJdr1fjq",
  "key29": "519nYzTPfUjtg7mc3u7TwC7nKrYm2T6UEvGVhKa6Jwwiiuwt4f5Ybk2kf7DpoaFdPmMPM1kmigcAdU7CxCC9eKD2",
  "key30": "4d5Btqg7mBnfGj71h4M6xAjjpfo5tNaNtzdGfUMwSUwiYhiNUzXMSMRLeeVnm9mh2YRYqY4Mw4NKPMA127ANbiP4"
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
