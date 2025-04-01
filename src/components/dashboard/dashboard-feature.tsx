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
    "5bQ2S4mm2ST9pyLATZ9LFujsBHdFdv138HYtLnrSaXDHgcMajg1TfK8HDZDuzhh45bn28wkqHTDsVXysGX7k73d6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AZHD98gQaj9s1bVPjv8jp1tZskNna9eweBqWEUDxE1u8xBXBTJ18Z8Jd5K78USihcbz2esyXfYvnTx4eUYQhMxJ",
  "key1": "4YbF7pjKyW3FHzmTiuRu5fQ2Qf7Sn7CmcCiB5vut9XP2qpiyEMELwxKkBXfvbUvre3CkFg4ZqLf42KKbT567gjs",
  "key2": "5HMetRBFeFTdPE1mgovTjgXaqePfmbc7JJGvofxmamCiUCWn7YcAXYAMq7UXJu9dSNGQd2F8sKDQRyUfyZ1zEXeT",
  "key3": "3EHDR18t7BEtNC6bsHVJwkb3MdBY2nmdcyxeyZuH3vq7hzGmyXzbz7j8i11Lub6ZVbPbZnXKvZ8MLYwV3nwFTDy3",
  "key4": "2V1eXru3j7oRh1nDHiQJtN8hHLrxgWjf9RDtsisSCC1SjjZVVXvhQkzB4KYj1wiunWPT9CbWivnmtBa2V82bbaUp",
  "key5": "3GkyWGAKp13esTJkzq1VWqgV6W3Jce8EXnuZ3HkqJbEUyzwGGxBejcrjmYND8vshQ3TNw8NtvqSUYEgbrFmDHcW4",
  "key6": "63fQ64BJq1sgFqcgDZ2fQdVbkuCXHfz9FZS2hs8Kt62j2kahSNuk2NcbFFCYvhpYPL4yy7jgUt1iVvNS2Tfr4Hcy",
  "key7": "4gvs7FHCHVKYboZXxrPV5v8Em9FuiN8usQ9CtdGt8njwtHheT37mc7TxWpRNbirmUBti36dExaHm9L3fyS4YncD",
  "key8": "2iyKNJGuRkhUzLGJM7jvnujbp5AAANS6Jmt8dQeE45Ld3UHxtpwpayXonhyB8fatH7Q1ZDtpVu1LprFoz8mReXUM",
  "key9": "5Vx2g8vuHtah9QLMr4kixidsZMdc2zgLvENk1mac74Kgz86tSVUxHSskcAbEGGSTPWUdf84hPBTpiFYGfHmzb9ZC",
  "key10": "62WxjghEQhisK2cVSfCL17uLWjcdAFDbzTS1o2J4rbsjt9rHoUJgH8h4bmHoRgP4fPJQDPGWYk1vTFQC78hAVKPK",
  "key11": "5dDcc8jvRxTYjcZyQFXxyBHAar61gnCJmH2w8RRmSaDJg4g67JKdSo6wuCBDjCAPibvLX1Ycrr8pok4hc7R9CSSe",
  "key12": "5nnCx9SXbkCmn4Tk5aCUSdjqbn8FX7a5dqKPYHCKeKE32uLknjwutEnQc4sZMPsG8Kv4ptz38S8bSzSCbQqwhHSj",
  "key13": "2dK2QAYwsSJDDmwFS1kooMZ4KjZDTa8ve1CvqtzMGJPGz5Eo5RD2HmoM4Py8QBB8bJvnWh1fjjTFVCDsdL1z12DY",
  "key14": "48okevHQmf71a7etzX598PEmHhZvkoLKNGXfejkNV3xiA85YFaULN2vcB2NiY79nfQu2w3Ld1utnYw2YGVqbLaS9",
  "key15": "64uqhx9YigCZNdvEafGyaqPUaM6LFQjQfhvEaGkkzAwgQEgyzwLcNEaqLZzRFguQvMhP6XvfcsPpXaC1EdYSN9Pm",
  "key16": "59GkfgvhyqrkJoz8gpg24LPEAnCuwCoDFbEqCMxv4oEKrERimN4SKRYij7ixadn1EuemqMa2SeYfyK3U6xMCmQu1",
  "key17": "2QnH8yJ3qPsGHhsUz94TbRt5y3ZTw6GDjrnegirWVsCSEBUf1Ed9gzRM19ZHVozSoFtfkcBqHVcNriCFrvVyP8b8",
  "key18": "VZoVMF1WR72goPEaRzMrfgd7HFtxiAfdG1tS1BimVRWphGJ5J3La3cpr9A8Lo6xFmEUhKuQbkKRiDPMSNMc2ZMR",
  "key19": "2s5cGbNeW94Rm3EaEGBr5yJcPidM77GyuCtAbB2xwFkZqN4xEkJkJChGtnhndi6zve6VCkgoyrgsJoKXcHSSsiDb",
  "key20": "3UPH8K81U6G3rVU26ycSGkfLweZuGN4ae234VoQ3Tgf165kTwD2u1wu5ycMcf9pJ2fQSGe5eCi5zBxdaGnzCwQ2j",
  "key21": "eCojVZrnRo1E4U9ucfioVWqthm2WoVG6YBkYxYb2f6TmNqE276A2RSDzcRZzEUQP2wTkHJyRHubsKm6wMH1Qi5j",
  "key22": "2UoMQUreHfALEfdB4buTgP4y8Wz7bVbacv3orm6CV3KXPbDprwucMeKCr7QeKMNxHPexvrftPSg51knh7awEpTjA",
  "key23": "dEPcbs4JUHCR7mDR5GZx8EEp7sVsHNTXcHCUmrYQRqo9PgzeLniD4YhejzWYqzQLndDhpqsvWyk5qAbtGyKnPSC",
  "key24": "2NqxSzeLZSuuf3wRK5h23b1Uo88rSqBYQkSkLSAWHKG8rWSQ3gVc6fgsmtzczG93qttwUM5WDB1io1Xfx3uDtLnp",
  "key25": "2HWwNSvEEwGk9JMsbfuaqyp1jkFFD57Ks7aXLSa78teoEsCV1oegrPunc7eBQWsavDK7Ezngfzz9Utmxaz5JjDsc",
  "key26": "5ifxuiTx2HTb6uM9BsCaSuXTuLEgNa5jtYTCxMA6gNWwv4wXVxLjJPUi2DiPdURRcDGtfahSkbXjbSKvUU4y5Kqp",
  "key27": "3bF4nrZQmJuF22j9sRE9jeqRrRVPCn5N3Vva5Z6nNy65AZDPBgCkBsu8MhdEAWp2BoVKNNEDc6sRGmKCPZmNJJF3",
  "key28": "2ncgUZHChjh3tiMPwp8fqJkgqoszM4qcUH4eyVdJe5zqmczcKWwaUchEMybUiPYMEMKyCRYED67yBLUMhuAgXzqa",
  "key29": "5N8znYxwTvbGkV6tS5wqrRidKFNirngZpvTrFbp1EFgJVWK813JT5jfULtwb9C1MhZ91jxxpXsqYFFt642EKjqMG",
  "key30": "2wc56SU4vkcYMxCM1LuWadTMm8C7C92zVNwZ2dA8D3mQYWRMYFnHcQFkwFx27EKwBZ42BQ3aFJAvxYwGg85vYuqa",
  "key31": "5Q1crvQ4Uso9pmiH8Fao9xCDbC1ssbMPWwDFN28drSfMzvLALEFnw6S3MoBXfT4qzQUgayqT2NmzTuGYiiYNWtW9",
  "key32": "5LQbtGaqiKtf3JwVZzj9fo46SU7hathGUd9AnBGdvGJ3fPhMBcVvkWo9LpEv96r6iG64RiQTS7MHZaQbFdBJ97Gc",
  "key33": "5X6EojocxErGhBCJ9sdnmCUJf4jhXAH4SZp6dyVSwSGGYReV5TYHnAFg2HTxoEtFepg93U71RwRdtXVAoMxb4bMQ",
  "key34": "44FKzbyskv7o1Unuizgc4MqYr94qTJ3j8m3xzTzNHQLwpH2GpuHxijEqPVvjyKafVHwozhYiQLEHEwS4yhEoWpUx",
  "key35": "2ERTQfpUXK5fqFkDFM6CFug2HjdVZEhicHYiwXuiXnhWxdKmqkcvopNLsuTRiffmtvQ1Cowm3RoZDzQ5D1u6uoVS"
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
