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
    "3AFzj5KFcBW9DSvwDRJ53urDrqNYYQXedMno3K8th4EsfXChAFv2nPCguCgjYoBfdP9RD6o4QqE4LvGh2H7m6i97"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QATaABCS3kqeKBgb8Qyi99FU2FLDWkKCxJEC6bwAJ6ta7CKVqTbU45xQNkJJ8MZeUvL9AyewzrLuCbDpKRBAnQc",
  "key1": "Y9vAf43PABHtLPAuwsgPBp7Kdwhmcu6TemMT46PGkUyfEiYyszp6QdkQG7K8f3JoArCiJDAMe3d4og3mSss5i4i",
  "key2": "3q9HPs3y3zns8zboUbZdz6eMR4RXvfhHrWStAEMWg2oEDw5pSKRC5cce5wbSutPyWvcSsGBRstNMZTqwXPvAgviQ",
  "key3": "3Ruex3osSSdQ5JPYprybQNYhRCKRpK5ZV9vmuYjzq58fB8GS6GRbu65WH4KSKfH1uuuuNJbDD4CDFNAvZNFD5fkY",
  "key4": "MYFNMGFqTKs9tyhS1t4WnWGFfdgmgi1Pe67dwSBKThQ1pR4qUPRKMHngD8sVUjUsg9Uj3sJQGYpbvo2DqXj3uJL",
  "key5": "4RvAwPpkBZLnyT7nLCBYkxfLs2cTT9i3w4zchCUc4UpnqUXXodMudFg42WejeL9RVeCjbQWCr4kz4qJgGYzASzsv",
  "key6": "4vDmecf3Wmxkyab4gpeBrsvn467LoXtNvATjdPsEhi6Msgxaa5gan3Qnv6BhZ1gXYcAS9ERYpAh4GpMbn4BXuApY",
  "key7": "1J8f3LKyXsotvMsQRUxcDHZZJWbJ2kWHSTGgjFxdmLGM6vmqdmrRbAyuFhMHvUZmk9jmvnBSFo8CaJsJU2v3SPS",
  "key8": "3fKcp8mJ9HJekrBKDzZRimV5qAgbnm3RfDmiTbXNb52JAQM1bs4WMrTHH2THchCmogkkhKsQqFGMic12sGveM3i1",
  "key9": "2Dsprip7i5fSQjKXT7VkbhB3TCsBcf1zZbsjmcKP5LegDyduVZRbnZDDfNYjVB6yjTqmGULmBHJXcRLiib5txmXn",
  "key10": "2WcnCfQTupNmjtDf5NqiUeUDZsHDocpEX6WPpwn9RF4AMoia6bzsuK79QktDDPd9kUB6EhHeSJJGuk3eXecDSu3R",
  "key11": "5ppFm3EMZAavQY8WaB5iw1bGQprmM1qtTLXTM2DqdoYrEBrvoVstVpeYPdVgvNDmhX6i2Dstp1mAg2tGqT1Ye1nv",
  "key12": "3MRdEfZAsxcRpFrkBQpmGAEpZt9xCe8Y2axwwgRcLqAUGcSvQX5Vhn5eidoerwBLL5Vk9aj2xihZTjZZpN4WTYF8",
  "key13": "41QCmiJh78HERBtSUHvqCk5SrMciYE1GcoVNHsrepPvuEXxCraeDzKqzY2NTSG83ey6qzYoysamfwZejYCpyHsgJ",
  "key14": "2uTpRt45g2FmUphd6bri9XPY2YzydLeW3ruVAL5u3nMYD6JSiaSX83jP3XY4Pq6JHLwPiVQuM4SM4gyneRqBLRbb",
  "key15": "ExRhww5sRZYtaxQj5vesvDuR8iBGerBHXhM26G8kWKcShjfBRGyFKSF18HM6yq6CZCiib5PvR6fDUKND7N4yFhZ",
  "key16": "3soBa4hMFXgaYQV9JvMwS3Aa1hBUkoj42XBJiZC7AC5XcPfDGJcF7GHbNsAgLbrejZ4t6JviF7TVS3NrZQo7eEX2",
  "key17": "3rNEeQam57mRHTAaCmx17NYDu6EFD5n2G4m9quYvKYDvJRWjHyKHVzcWz2cwjRkzPmFoAPmH3cjPtKJQh65GEBHv",
  "key18": "3VXguF4LogGvRoUhPE75bUygZxZFAFDoLPK6vHXAC6bpSjqafHVWCtEn6awXJxfndHXNbA4Wkd3nScBANfqbBeQJ",
  "key19": "51kKCgNkcXk2KTPtzKpyT8XdgkNFykzXaKTnhSbVS1QD4nfWkJnLnq1BX8qGyL5CzTkzXmKo71Hwe2jsmsZ23CEp",
  "key20": "h91qQufLT7TnQ9GQCvsYjbjLQe3RHqNeAPRMLRrJUvtxeFEjaY54XAjiWAznqtsrYTutxPVaMMNVVekhiM4NqmQ",
  "key21": "5jjrqspf7oqXZnP5SVG7mx5JLaeKESXXZDYheZg1k1nVuBukB5i8Z4gjDST41qYbVxgwQct5SjsHbCVJNx51zRVZ",
  "key22": "5GXrE31WBmRQtrQz19PV2oeXD3L4Zy3tPuF9pfvP58VMHDMc2iks7WTXnHvvJthma3WtjhMEUpzddfJ2YHn3uFA8",
  "key23": "2BudL5qnXdERCuy9M9JRLBnp4KkPQ7LytV5MCWtQiceLdBb5HAuUH4QatUGYwqzWMwTAbRbopCipjNdPu7yfYGEu",
  "key24": "3vZhkfzHDvHaBY2iBwAySVreTtn1FMVENhPEZqy3DSoMhJgdJwDug8nQQrxD1i6HiPJsa6SCnGkGnkm8kvHjquKp",
  "key25": "5o7PXAZcMYhx65ga2eY5DneZWLqXYnDMeCLGXyVjthHGxN2ZvMPZiYQ1dw3AUrTrAi5DR2u419NnGXRmFC2xK8uU",
  "key26": "5jJeYn2ucP6ZAxEbFmgjNaT3kL5po8srXScCohTKMvdHLSsfFNtwrX2Vz98ec4BFxqySe6HEko67qXDTK1DaoYy6",
  "key27": "3PkSpBW7gA1hm4QNrG4FmDWQHjCBD9vrxM7jYX8oRuAZMxZ13D64NEHDnnRjySfFe1T4nPBq8ZC11X2mhpWVSHB1",
  "key28": "3c3Q1BeiJXbyu8otCmUHRd1zMp42uwV5M4tNZs7Z7jRq5dgGkDSFzuXX3JYnXj9Kz8CzQou5UGVD3BqaDtm9w34S"
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
