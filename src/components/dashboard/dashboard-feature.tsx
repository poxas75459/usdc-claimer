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
    "3uZNrHnydqhVriFEqX1UP2FBqcJ1pKmiWBsghdveS2h81uMa7RR9sP9WpHLEH9ZguPoXzrJgxqv95HgsifCiEQMy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ufBUeSxMpLGhzA2hwenihgNVCR8H9woadKDKNdFGthMFCm7B66LWg2pSggt1MiV9kwt7fZNgSa6JWA52S3T3Gtj",
  "key1": "24YRSL2hcY2f5baySdacwP9uKUJkCf8fCuQn26ukwTkfH6bHYBKyXJR9ajKHpdEyEKK7j42zbsJg2tXBWJG9549h",
  "key2": "5Ld8Vv82muiJBPmHyMvgv7Hb3AiwH98koyzzZsfvJfsaFpuu9sLGdqT1xLSPB7WHxQtCiwKMZvBxbL1ewQ2aErX1",
  "key3": "3kvybQBvqUQeojmRLW52fHXCwPq32x11monA9RQrJ2nT9cWQopzUpU9Pbj1fy78Xyeg4C2muoFmkcDQ63AkWRf1G",
  "key4": "3rtWrfNwFUmBUkMTDyvdPz8PQqfzaUT3SeCdAuGYioFKXJtSZJ2KFkLN2NoUsgShtp5f2W8wdBQjBAuG4prcgd7y",
  "key5": "ssV887bu6WcqBdc7QoFsSubBnHamEfBfZ1QJwEszci5YievgDXhvvsDL8iNQrUY4qR2Au2MszJtHseT4awGWmkm",
  "key6": "5gKmPkgCHR3maZqm6qkZTTg7atX4xvqCbtPpDAw9YnuaugNPx19ykZumZQdvLZNNRHRiaqkNqyNpeYaEzTS9Ant9",
  "key7": "2UpMCRauVq4aNw4wPuQeHTZ37dZHq3zUV1ZvJudQ3sdyEA49UCxuHPmtnoDCuNgfxRYWDWo3DVJL9w8QMdbf9T36",
  "key8": "5zA3eejguWR4NET1BcRd6M5k9gLm6oxU3WgpAXGE5tTRDfJ4posWDJUzbNSqTwUy8GcrJtfM26ymvrr5T5VWdXbY",
  "key9": "5gazKqULHHcgLRKnWwWFuS4eaSWyM1GuzqZKydZkViWjMunALUemEh3K1AYpncEs8ecSNoE1TqySVKGEb1YNwXo3",
  "key10": "4odnfvxoAsCHQqLaZiYtEjRPGPdLNGDtvF8gxQyHCtKkxa9rXpj5y5wr93AnMQNt4bK8QzC8vbS4sambRKk3hGuj",
  "key11": "D4PambGYmkVgP1YRoMApercEybdGJhSsiqRtWa8L4sTtZv6d4KrfKmM8RPE717YLpo4RPdJ6ncsGVjfynYeE3cq",
  "key12": "57mwvDzQs5ajbi6mJdsnNB1MkA1ZHpPA5yYQ5i2bNswPCbK7p5aJD3Z53K734LaQDN1JjKmGtDccKda6trYgvKnj",
  "key13": "oqmYxo8ipoQhvr8hmFQpucubz75ipebT6FCZiSBxzn7FggE2Pdfgw7QU9Az3VstjLoBKJhfA9RDqk5FePdPMCXX",
  "key14": "QQhJHqs3FdShyGqpSXgJz7DmCm2W5tihxi5F71snvrtc62Apz97BseHs5rwe9DmztZuN4pijpeWbvn7AJWjQG47",
  "key15": "4KoCpejiSkMRFxVmQ7B52LftZZJYSr7DUjxyL39kW5nfAdXf89WKzdHpXjeRJvCUTD19FmsoSZsyjtbpHJy9rbB",
  "key16": "2ePQL3C9Ddb59N4bh8J4zyyUxb7WdBTcxjA9nEk9cq8cgsi4ov7TuWk7rxErGj5djnjApwUViLRy1edm7TwdPB1a",
  "key17": "2TdtTDfNQ3VMabXEqPiihR2VauTXDJnuLJntSRJVgDr5aLTKBMrZXgc69PY6YH824NVzKroiC72t6ZrxkmYGvHN8",
  "key18": "z6RZR8bkg8npgeyifLSDgyi2NQoMFdSGegwLnFZuo52t55KivV9XDNHNwnjLyajRSm7X518nfuEEA7keHVNX5yt",
  "key19": "5qUbCZ7MA4urdYPMDbbqWPwbJBUQJuMtuCYNbgoDPs4PzaDCEuYCN7TXefhLNcBQRaZfsW74pZCSf3mxEFPszEj6",
  "key20": "3dXtZMikTW2PAsnoeFy85FjpYihUusxHWrHGcap2btFhVRB1e46mNMbRChqqUUUDR8Q6qkYe82gdREioURG5TvRV",
  "key21": "mb19PRTvWnG4YwKkDphTgsebNhbSax6WisNXEB8Y4sbnJikYbGn2HFwMeU3yRR53mDHxTyxKCmJzLdGMHHg2xk9",
  "key22": "5P8FonqSXqW8YD5UKNE1vsyuK3Tom2fQeAKReKyeeLQ5btAqRUvkWTDpenkgYudJoFYwgP1NM9g1VLB54bwDhTw4",
  "key23": "FgezUQNBn9rHQMgNMxhTt6Dk7fgNruguwEGRLToZcwPHqtkKRfXgYVq9nzmG7GKdNKVGsU9zgfBXg33n7R1TRmY",
  "key24": "5GG2NVbzVoRPejBFNojtkwd13RZ12SUifQuYTnBLPaSezjypVha6ucntXx9N627Tah8SxGYenAUkHEg3Hgmm42xL",
  "key25": "25XM569W5ZaFPB2W63HEBye6HNMQbfXcsuviSgcyUgV5DKXbXaLJqBJNaDDvuCqunhQ4Q4UNW1LFujHP5UsJ3rLH",
  "key26": "3YSJAYB2JuhPjeQ5VzjJYEcqzryuYHvYvr6zkqsZePvyQT7jaKpLJSsHd7HHZaVGTt3YdARRrzm7XwXoPkz7k5bP",
  "key27": "3s3UrbfyyfdenFbUK39GHQn9RxRLuedpCXLowveoLvDtRxAMvoDmBiMwbvrtb5LVYgawF3rK74KzHNjTURmHUAcZ",
  "key28": "4Y1fKVyzPUVUPSsvnJC4FvKtfjRSSCD14fyZHNRh3RpyUdr8ioasyEGXU31bg8qUE8oqTtM5gcNcbhwNfrgMa5Pz",
  "key29": "3foDA2z6SK7MPi15Pb5QUEq7VydNEPEhTE2x2etaSRfveAP2ZH5vmsLFUDWmUHEdDAvvov6vcrEevWovGUBePpDA",
  "key30": "9whWDwUMe843nx5CZnkWFSLNa4PmUQBcCWjdV9aJq2zy2eVWEq29dqEpjLiVtYh19gb7iaGryrChqmNTkiHx2g3",
  "key31": "27eCSQcp3EaVE8mUam5UdsQNBUqNa3fv1tcZWSXJkU9oX36yBN7WcqHDbr9F9wqzoVi6QFLEBN8TGAWgt5w2NfaX",
  "key32": "4UrTeDuQmm514LkkB4oGhxu6fbjqtuG6Kc5126wJEv8eqHwTGhvAVhGHca3qz6BHZd8EWYoRRgjMRk3W67FPhf4a",
  "key33": "4qivyUoSUfJjtezAQMo2FGcQkD69unC8wxTPT6kg5wtZEj18GFLdiP6nZ8HTaWGu2J5LBqetZZZtGm3NA6G5kAfs",
  "key34": "3o9W7EpFbyHz5d2LZ9tTfmUABgyPfSSMTg2axi5MVudG8q2RhDf2CksezUTDLhZKrFNjr5ghgWjhWaMyVJm2Lrez",
  "key35": "5fSdqiS3cPYe2wSqjXuDZ2eHAsD7CE65mmsfu1EMPtw9qbVQB7jUAHmU8W1GPPoEZD17pqd1Ek5q29G3D5Grm8Mk",
  "key36": "3DkVVRnyBPuWqsBpuHV6JMoD1EvKAvSYMsdzCBiTt3Gj8iUbzgNm2RoiUiGrLz7J2RRQYfnmkhPmiUzJPEW7F93Y",
  "key37": "5ouM6Gc35dHC4DE5Qqtqjqoerb9iB2Qjf6F5EjBDbjQ9P9nMVbjvMfVwKPFray1zERmT52UTjEkD2oNSqJyW34kY",
  "key38": "4vvG1kgwVUuH4kyRCxqnip9jsuXXRpkMu9QVPpBG9GVuFeCALCTL82nDudsK2uRmJxmvYR4iznxGtCRdsocBoknb"
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
