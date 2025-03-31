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
    "45VVWS8vDYTrQaNGsdkriRvf8pf3B9yDZUQD71aAnRQSN1duSerEcJs3dgFgBcfYpnGPB1fgbR6wt81XcKFDy22p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62CPbV8nkWigQ7DhL5S3LMAkGCvGXwkAGLXDoyoFzjsxGULQpKhkpgPGoyr7MyNMnSNbFYE2c91j8piegoe8AHnf",
  "key1": "5pzjWYTLYmQ1B4vkbFzjPWEMhXd7q3MdbmuakqLdWpfrLHQA8G8aRoH1hdaGh26C6ZLZ78ak4e8fKuR8ci9ynDH8",
  "key2": "3d4rKHFLj99G3Dt5TgCKC4TeSEMU7MzTJMK2HHGvHAH2RDbjrkD12d4h4MH98DC1CYB1QsoGc9BwgH7rrjwRTJQu",
  "key3": "25vv3wBP8PURvQTbagz2NvDyqx37jBbuj4KMLBVU1BmQrssFQHf6T7dst39CBXMJo4TtYHuPMVBeKevzMsosynVB",
  "key4": "4SiD583aNLWLEkjCdZ9Q8DCJRfZr2oSyYcVEcsFCQ2LsXLGMVy5xNqWXAwhNSPxGHuqT6mLyYNqLUjbS7yJBkeQY",
  "key5": "41Vh9eU8BBedwm9iuPfar3xzKJtBsq1fNsfyGGVQqFoLWDt53W3uZh2PWAnNmz6keNioxzrrZHiKV9kP6xYaKpRy",
  "key6": "2rTnobttmNVLCFUHyC5tzChJf5d6h8jhNN8Ue7tv7Yz43BjjRhTFvmHm2WeZjGVdHSyhpzPYKUoTicSNZBdgKYT7",
  "key7": "2M7ffptk8aNiHuNSZDqEdUC2J2sm8cunkwh8tKiup8JsFoxYwBp8Y2g5ty914EyxM9PaahQZzHA6vNdanPoUhFnM",
  "key8": "2tvkL9qDimiAg5LC7MzNGEjruBL85ZqFt65KxGQvMzf2Gr9mhTJhpBRcxVs5A3nBQ2oaWRNCZwMoZrHMTkb1smuJ",
  "key9": "4Vf6AqBgMzNoETjC4JQ1zoAe2LtJwPW4pHQ9mw2VXrVW8piFomCnJdp9yd1MARmuHn1r2DGPnpCML4C7NZtbFWXn",
  "key10": "498EKbJk82UCSm99UAQ6pZT9JL533YuQiCijF3a5gM6wPpYE1dMij6QFcCarSy957mkKL6RHRQarq3eS5wez6Ex4",
  "key11": "3kq4jxt96Wczis5wQLZJtugdnpW2roLmScnCn34Cr94rCffpzNwR1PUe2SUetzkxZGUuDL3NTHVguPQmnTb6ASez",
  "key12": "4ggQsRs4mCCV41FMXYehiz8EjU44gjM7eDiL5B8UM5vM75EGdPAMA3TsGbfYiShbSzwpLemxgkkngm9T66BBEHcf",
  "key13": "3FpzzyQRKX3bSjimRy7GA1dFnzXxBbMmL26rJwZnBbviRtAJvcisKfdnmfEWU5TUdsyg5MYSGEdDQpCBqsLzKLEM",
  "key14": "2o5mD3SqyzhrABesfEcfZEBUpU5baFyrmKJJxxHQ4pBpfmbKS2NStae42NoLNbcWQsfN5cnhJFCjuG8pgfmLaSHE",
  "key15": "321Mmh3C6psUTwCQwg1J8w4ZPhVxLwrRrDUzgXiRjBioyZTHooAWz5kuVXo2t9pk3BAUtGAbPeAHVp78MjhJBtkX",
  "key16": "5QAj29ro19gsEoTm6Sr7hm5y57QN2bEvUmwAYLQKzn21L4zVpY1y5WXLqjeUa5ZswqKfs3nsXfLdUQCK9aQLiZLH",
  "key17": "y2ut32KrxSWXqKv7xje69pSfntPX36Gzfp9qwtLAFpWSmwyaBfwrDXq2UadQFtenPAzQsLsDaZVvzTYq6Hjhajp",
  "key18": "5Jveg1R8UrYYWqwRvMcNpnR11DGoG6Nqhq83gU9hGbzH9a3vHQjki5EVZ47sFQr97TBxx9sowtzY8azZyCdErZLF",
  "key19": "hcsrDracPJjLqDL3gT9yiZj9HcT2PqB7RHEfEAkearWxT9dUUZrT5v3z9KbLp2N9CHakvUFQoggV4vs7t9FVP99",
  "key20": "3W3w2P7iwZjWcX8R4rFByV8vh6YYaWNqfSGxViPfxocZ3EeU2xvb5Vqv9FSrYa1WBJHVHoAcrXbVP22CTjvgqzVy",
  "key21": "64zHvpV8o7GbT4wyWSxhoVQbGpYUphBj3bDZ4UrKjq7tKx88ehaRCKo3Sr5nnTMj9394RzSXNurh6PmxE85oE9dK",
  "key22": "kXoArR3QXSrgCF7yqoCUcx3BsdGfsz3rVDh4Ft6bF7qPHXaaAttuiGnk6TvswCFLYJowzsiDHqZLPtntPq3HLv8",
  "key23": "5J1hxPTny6qbkV7TpcnP7SYXueJTMW9WHuqrm3LZQ4bGg1adLdWkB7nDZ2VmRnDwoQMn5r9m9ggAMpsQFz22JAQj",
  "key24": "4nij3WaLvv5abSFDGsoYhYJQCtvaFwtHUux9zja4nbfZzLpWrx5UnST9YQMPASPe4oGUPezxLCpL7vbVjkzXVy3u",
  "key25": "3ndv4rdQWD5PaidSEKqppFRnMtkGtFKc3kVLcBXgzcXK2CyGhPwnx9ebDsYv2KeFzUm1z7Eo8a6EhwKpHvHM6idf",
  "key26": "AaMMjb6hi49LdyhzPT1L52qKux4Atr6Anp9E8tKovpk7pWoUUt6ukSzTtwNmukYVssvqWaiKWG6Y8ta32vqGuvH",
  "key27": "3qwnDetFx5Ayt1C5n9RwPf6rT41811yeU3TJy8XPA9KarPKKovqacEK9S9TTJD6drXXMgnUrtmxcFqGGyyP57NgF",
  "key28": "2Qmm9qgZXbuHo54Ve4XRFYmf1KwRUeHR1MCLGvPr3eTG3EoBVpj5JtdHfMPUZ6J4oWkWwTzWYPYCV4RF2TptnF6G",
  "key29": "3hgXSButfQZRirrEwwavZ3Uw7Gx8RodmxgPez8tdrMCjXRW1dwVCfjPn1hgtJepmgWaNLx72ZHw8vhFmGo3Us463",
  "key30": "1ownAq1MKF2ZTzaCX4Sb8kTsHYSQCx2DcLqiJt4Q2LdKJVTVDmcXh32poA2QbUXDjKB3v4kCeZj7pRk5LUhL6Dy",
  "key31": "3iqW3Mbzu8CRtYXz3L2QMJeUZpLwdWqpqgzMfSjv5ttJ11rdLQs77cFcT65s9uS1stK6RNSCEiAJF5rmbivS1aMa",
  "key32": "3pFGbEaMLZgkCFNmEBF5DhK3UY6sBpZ62NyBYcWG6xRR2WoDSZ1b9f8okXvkpDrPjzJKZ8mrNju2VGXVaDvBHohE",
  "key33": "R12QGjZrhMn6PAoEF6LV7tdnNQjzFKqSQgaSQSXPY2DH98DvJCSyZanfSH7ZrC4RAdwdrw8EGcJz5vUJk1DyJNe",
  "key34": "2V8nQmddqTPoy6DU3qUtEZ5n2LVzNfabSXg6diu7qhFPdkZDbYExX4xhanhDqWdFTZdiR5J2f1tGx4mWzV5UEtkP"
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
