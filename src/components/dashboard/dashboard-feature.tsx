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
    "3jaHMAzZZvcUWx8gj5QwtWM6pdLjJuFnDx1TYJn6oqktGMDZzmNrZLUBVigHn6YtAZm1GWewZUDVsxgaHN31L2r3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ED8sGCraM2rxJa7xXaTm563XizeEocYCCbVSGRnTdDzgBDWgGPhetBRoqCEEsChJgy8u2pjdJCtsPiK499gbMMd",
  "key1": "2cZgdY8s5NmeWw7LjGrJyDpncKiVekiamrYYSheW4Fwm5MytP4YfpbaTmYe9ELPowCHYxPmdjYQS4RbTkLo7CzTj",
  "key2": "m616D9k7bJDWtXQeT52BoqBB8tKjF23PujhRUK9geu8iaNnSQMbt4QCkoos5ph7kN1H7bVokxkCKwo6JeuBa8YN",
  "key3": "9fFYWBg41ojp99PCJGj4wkasa5E6riU3bnXDoGBUjnUwhUgoGrsbyLSzZGpimgM9bsJNWoQJ8beU8eCxPHmrsHF",
  "key4": "9tNV8486RBRk111xnn8GBBCS4hhrsFbcN2H5aVHvfJ1Fu8eQRCj8wyWSznMPwDQwFyyji7hHPcTAcFWpBJmgNRF",
  "key5": "38kFiqT6Y7WfdKJxYejBbPs8LPSTgqs5SwNmaL2NZUfoLhQ52szTgnspGhM9uFg2Dp7otVxDJrCacFW1apdH9pgh",
  "key6": "GfXgUg8snCNpeEZykFukpxdDBjQpKR5eZjQKp6j3e8zy7eYkLYR7QXegkyLPwnRRdiMpcsR4M7ZmDwvvWQjViLD",
  "key7": "3F8efsT6754AzRGk7fLun7pLhhQpVDYphMa5YWhmgyA5oWQCszeKhzMVFXWf3zhCiC37ajyMV3MwJ4pcmNmnzwcv",
  "key8": "4buji5w79ZTUJaY3PAabLiP61ssvDTdJMe9LJ1WpE1bhDA41m9AH4jgTXPshGLXE3WQVd6215UUMw3s8M5rqHn8r",
  "key9": "3UzuCEENRToqtFgSfhpWmEFe3wC7dDajwkKMPCFVukfj16tDN5o5kezhmHoRbYp2Y6yUKYcuA5JKch3NVq1ink85",
  "key10": "3Ds323stkCjALrogks2TPKx8BeAq5UAsSABw628BZ23kGC6A2YYzBKmJW6Vj83GZNpiCzsoE5imuekQv9LnRECBL",
  "key11": "4D6LYg9B5YgGH7NdbBJFcbnhEuUVNmKTnZgq2U7sUCgP7tAhHF2DUYGZEAAf1fzWNbR8rSr2uBVxGF7vrpNj6UHA",
  "key12": "34F4EXH8tiuKF4MRhHWkyLppSALcWZYn4mfBsT2sgeUuJAkm1bLjuE31RfgSVEG2Ptyovdf9MoEaFGSGz1AmDhXR",
  "key13": "67UxSVdrRoUbQwCTJsN4dv914eM8txduiWCWekfKddbU3ypFu8na3tcZrS37KwJxkb3crU1kq6Ff5m4VCLqRk9DG",
  "key14": "43QZEY4Ut6bdUUx6NbJNDcjtxLFRYRmfSP2B2pMARjMsbkM4jRbiavJzhhQJmS9Nm74C61Kp325nk9BU5Ndb3G7f",
  "key15": "3UoyjGQNeGw7tHS3tmbSekaGiERDeWZzBwnr4zULdF91KCfw9aSwiSZKL8gtLCBdBY5uJmT6yM8XRoujuYEgF7oh",
  "key16": "3DprAuZ3CnV7cZpdcR33RQEeVGDxPFD17GiVWqu1CEqM5NVTkwGHTqwBbGJ4g9r8ykSfrakTHH5bhq1J584fQeAd",
  "key17": "4h58s8KCdHE4cmHzoY52bMqq58X33oEbeeTKAYmaTUkhXkSzE6p7HcXHzv5goa99x58Z5MTFuqhE9QfQvecocSVS",
  "key18": "2ALrPGdsxeMh1ZtejKhyHBMpFE3PnzyUXDTCgVUHK9FmaGTEg3ABcTfXpxKnoPZFpxXw4WtFFaWcPYqwgVzcoUCF",
  "key19": "47AkR7hYu1yc3qD6gLUc7qz2pBrca3K62meZSAqb912mabtfqtsMSEwwpGPoknhbLRk5oxtKnh3Z9RCLYxiX4F8g",
  "key20": "MWenFty35RifUw8EomVGF5EqmXJca1kP32UxgAM1XRNPftDmqgQzhskS5raqZcxh8HS4EHbPaU5qbZrKLwdzQ9S",
  "key21": "kRKg4nMAT6ePwxdebY3r2XjrvUbgV6osVzVjji2vCY1wUkcdSQKV94kX7H7f7bdEZew9qLGftLCzYFsnDHHkpNx",
  "key22": "3BuAofk24r3m3sMM8m4J3LcfiVQfbeaA1GkpUzVCnPhhEQ1ajoajeKxuWGE3uuFY4gkYZJrhNtMhFkFovhbNPrJ2",
  "key23": "3zLEs4pzXgUVSNTzmxEfcoutKpA6Wkxf4PUrcLAi1qWgddfoNncBPdBrSVYkrpW6Mrzstg3fwHNUCK8izyELczJC",
  "key24": "2Z2Nmd12hMQwBnSyZWY9j2wvvX2ru2aXAe81CFNuJizNd8f3sQ4VGMXVtsvmp5LBu2TLV3eho3mU5CwgLW5ZGGTE",
  "key25": "24b6MYofAcyWeHXEXZXZMQx8XtJJJDEDJWPVaL9urU9Q6eNjUSVjKwAgSs3aRGqg6TWBMxLzg6T5gaxVRjx84HqT",
  "key26": "cuZPnRrb4nKusyuAyjSNAQG4G6S7urVK69a9BAyLVhWeYk8srabmY45WfX1cbYRCY1fLFHvEjPLzV4uHmULhx37",
  "key27": "5FX2n5y6MqUsh8xvL5AfLW1HKvA7DiVVFndpaAzuE4TZNr4NoD7rEA6zeYCUrpkeV3mqoBLPHyhrC1TgwvQB7bYc",
  "key28": "KbewMDSWufYkYf9c2tYwgsEbDLodMVgZn922t51To5vW9xuhf3bcbNJNUFmQYmrEbXf9BTLvZZ7xbxYb1MRh9J5",
  "key29": "QkfkVKEXX1u8aaswhKd35FNDuiXCMm4NNJrA5RUuQvcFtxK7tA3CzXjD7hSbQERgNteTSLeQRccVoZbRBY1dFaa",
  "key30": "tbGGhmdTmp5BMN6XjqKDf32WV2evgg5jQLsvHeGj4wSZzaJJ2BH6kLNkAdhUPxa3Zq6heZ7EbnMNWW1nb24xx2z",
  "key31": "4mLk1xdvm4PtrPfN1qAVi7ASHrDbheXhX7Wvjp19ix1JwESNm3TtyqcmJuBN33QBpo9n5VpTTFdcQZtq8pd9nHhv"
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
