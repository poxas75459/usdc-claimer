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
    "3VNvds7J4r54fYRwUn13XydEtXUc3YsvVv2QMLF81KtUXH5aC6vJWmFkTpzJ23WWSXZchPKfAFPnBz2eU3GoNUMV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39KWRLoatnG768T7Nv5Tzsa98mL3jDXyjoa9XLsvftmqrtvwshavUykEZWiVDLbyBCGRUxraiPbUuiQ32ZdcYQhB",
  "key1": "5K1tVx6mdCHuDum1qohD9Tm11U6MEUyVNWHU3eTg22U3t3hMrDytMZAy4D7KNBzcZqcs3EF1a4Mx3qsNW6eEkFG3",
  "key2": "2Un2u142T1kSpQWAFzETHN6gesLNDb5tVAQPQCPhf1RmqZDLv61y3b3qnCpuokN9aUEdVjTDSGhfe2y4pgLpS6B8",
  "key3": "51SibBSGrc1wpZ74mYsWYeP4qxFk6bSvJ7pAZFYdPnm4KJhxm6YvyB6TrdfyoAGXSLc6TwVqBnRfdPAQowCBaRkX",
  "key4": "2p2UdGi596xrn8EbptRaJaHZd9ZerQVCZYFB2qUSSnxhSLFwpsdrZeKQ3xe9qhGwQwor25ZXEQvnxuEhc4Qsti1g",
  "key5": "5W9GXdtkF3vQnfgVUzcWJEh21UrJqMfAnAbf9ocfrX3eLVBBpbvJXqjZFgooABz62JsEfPzbUbq8G9yJF8X69EmM",
  "key6": "3yy3bkzAj7sKMfDc2ZNjwp8byM5giDCzuckGRg77rQy8XYmqgyf419NyqqBhriUNVhLZzTwpqqf9KfLFvQAkphvW",
  "key7": "44L7axTF1vydLNiXDccruawtpqUToi9h5sLAg1WmKY7htazzDHLHsyjSsb4xnHnRVCLX2mNWKQ9UhM9NHR1cVBSP",
  "key8": "4aUNofmfLuuK9GUacQeaRDencLG9hpiUS4Zvy8RFCrrmcg8NQYikJ7YKVG3epkXe8hhi7o3pgc16C7CCbRScjsFd",
  "key9": "4dnMpdEcC4i5qYdCi4KinNDmKdWjiiL6YB6ddgLPnkKr4eNX8b3TCb8pjXgdW8Gk4Hj8RUjf3CBvYvpHaXTGx63D",
  "key10": "3uvR3SuSUyKyEs6QkWkz65sJMu1hNYAAktRM8WzMRpZPoMcbtpTPdvGGwFSFd547T6dt7mQDEd8EPcagLZAS3kkR",
  "key11": "54xpfYDcSN1kLFGRWqtKJTqVXW6BvTpVGBb2w5Nmf6NzfmRjMGvEpoML6ddQ2Erq1EKXfXpxQzcFqtpFYtpRHCJd",
  "key12": "5GGbAyreUWtURN4xMprasn2xEu6dZwS8sLbgwb3RY2Ru4ypGsxqiKee8yQrNBD42VRw2yZaTcXwNjSiprykHdg7j",
  "key13": "3aZA42vjtorS7A4z8iMp4w88kzxWLjKUDpLuqUeBAShQuwS8LciQ2MTWL7HKCgJ49XgQD2q5NCHbctxiNZeYAg3J",
  "key14": "5nxEe3Hdh7oSQCchXrG2LViXXWqZL83oCBthRnJs2UjMWMnH7wXSHzfGHJnFHfHvYegojPa8jvzN8M3FDiBq1txi",
  "key15": "4CfBoqzaebT4LasRcb8SHfQdKpt5E8yHY1GMfKxaNmh1e7Dj6ZzCZAPwHBFMVhyusFfAb77uf71iAXuJeoaDVfRJ",
  "key16": "5qrvGbS4Lf9UTzV6F549w8zjpXpNPW2hxt9qQvUif3AecCUzvJfeCD7Ux4H1nuFjDbYXak6UuaUYUxSx9EmQURHw",
  "key17": "526adc2m8uZ4v8GftDgyfM9MsNAwEyPTien1eiZXvBD9h9fpXbu8YyJW3ZQPtnNcv3FmwPLLjSMf4DSwX6Gz7Bp6",
  "key18": "46dh5kmi1jPSj7TrnKqCTxXzi4vpdV7sR7TYuERcazzaM5uHvfSe5dQNuD31oW9tUpv4b6wRFT3P1z8Jzi3kEoeu",
  "key19": "2Nf57G82JKJ8tVPu5qxiX6TNwWejZegT7J8QCEYGSvkwXAL9aHZaBuArMHoMG7QdAnA8FyMAVR2WkPPFmRxXS9W5",
  "key20": "5tVhUBo8VXWKzFiJrvRrSA2WSqErGzf7rXK8Y4FwNFX7q9Vk4pX5kkeHhfdYjEzYUcYp1NU9PgWKz34Ys1uTmxzq",
  "key21": "21FPsz345sLP3mS9nsLUynevLASVjNr8gt9vu5QTfofCC1bry8iJGp3WjX6f7Utkk4DjKKetKrkx5uv8cTaDvbge",
  "key22": "2GkoYQS8GdXLXrfmb7fpaVYhdcnBVs59gp9uBdX9zLyh9KeDk57nm9So3aA73zrU6UDdLhxNVfpkDAiQgT87wrkD",
  "key23": "56Xc7u3d7uFyUoEF7g4og3Gh4QvtvmnL3586bh9zd3sTxRyLQ7ZUTgyp5ZNZwNjrHS65j5kPMW5Z8azfWR9NeAMt",
  "key24": "2yTu9S8r2Zayg5R5riwQuymxjPu9QM8AYZhzxgbMYKKHjdg6D7VALCMewqRyGnCP11Ho1ALCvQcxWjhjjMhadFkk",
  "key25": "5TAECHoF7CEJmvbsBwMBPw395vDgqsZUn4JYHBhmVouDgLVPDUFxvkPey2wiQiRvWAEcbjb3pPgW8EXDXxnyVE5",
  "key26": "3MBhH3YnmF1uqsGQ3iuYePKF9XNtzoDqRU8xDGvo1dUTkv8op3UateLcUE4VHnT2xSoThbmBsVFAaoGqwshza5CS",
  "key27": "3D4M4q9xD9FW1KYkVk3b77f5atw6nchab1vfAWs1KdLKx1dYdzofbuVVTrBKPm4A2NZXz2tE3HwkzJGKqQSEYhSF",
  "key28": "3QhfoCDhLPe47ScStVKPzqVwnUcEXL4RWpDvWTqTGev8kgsoioNX8Fd1VnaeNnbmS7bD1dDuDsu83a1rf587NyuE",
  "key29": "3VzVtmR3vgdzMxT2C2WxJ7tvfnFan1cSHeSsWjmRpmWwH36pJSJJJZr7PquSUgb4tsNzuSXQpnm9niTRGQUugRew",
  "key30": "5PwPkUFXkS8iJ7MCrd7QdzjW129q75cyaoQgHeFaK3CR7vKDcgXPJLd2bEHyGAnHVSnAfad972RnXvw9vNHCCRGc",
  "key31": "4ZWAnN6x3TJ2Lnfyt2ds7z27ESNmvWmtxJh7CgMAxrBiZanngMKRVV8XdJXbktU69tpeX46c8V2cveJ9tATPQGsZ",
  "key32": "2YWXbSypXgxEn2oD958KtDLdU5VgBk5BF9fRFq9NSd1XQq7TZvQS9yUWxbFfpLf486yyQ3M2Uzmfig6hyymEfpMs",
  "key33": "51DpU4yUAbbv4jTS7msvYpMBckTN2F8SppCcSWWTGYwmjHMaUwZewWWy3qPbr44nFxHhLvx392CHSo8SJppm3VUQ",
  "key34": "2NkLWycP57iwpUS7LEVtdSYa3ZWDpu42tipMNjfKqT1KHJS7kH6bEdqiWDppTeaFwVLiYTaiuxCmYu6NvMeGJzQB",
  "key35": "4ZjpSasD4tJXhycgxvaFLxkTZmgLZ896uUQKrezgFyXkgQmfUcAiMnSKxFTtHPrVTQRbKMrSZP75m5yhpPMUXL99",
  "key36": "3w97u6aPkj7pt1ugE6D7SqDXRLJTKBmYd35oFB81CCZ7RD2yzXDRSN9CvWj5kJCq1oRFt9e9k3gBiSdi51kExvwf",
  "key37": "2sgyQve75X4Vz6RtfXoT2HjrFLthGpuDHQL5LHVCZRVD5LevW1CH2isB2gkaN3MxooppRv2T6GBqaawYjZZS8K1b",
  "key38": "4qEgHpbwKKini8QZ3zKmGVyiEfj1vB84RqmnYPnb8KWhSLJLwJR6Je95T5nSBbMUAHdtMppt1KZ8K6jwN3yh2vHm",
  "key39": "U8Qg1tEmnSG35ZNeTEQNdQrsU4X6yr1WinvM65bxMnGx3J7vEcAN7R1eQaNaUM4zAYXzBGN9p2fzNhbLuW4XAz5",
  "key40": "4CN1mL2hmt5gPSpB4v5yB38D9RU1uEzbg1oZ68TBqN8kQzqinRGtENtu9wXUihiKUdFRnBXmY2mwZhpnkmXU1RGM",
  "key41": "2ZEf3W9uy8AaFm4KsYqe7h9JEo6SP4LptykkrBUrKScbA6cPqy7YhKTw8b3bmNrfHzQxS9kHebeS7F5FuUQtYLN2",
  "key42": "2UdN2kAdChsFcWUzagk7DMe4fs8PcPA9nUAGmeWQdATtwPwwwMiePjBubJpX4aiGEW2svF3uFqY9VoD9BfHW27hh",
  "key43": "52c1vQfZxYF5ULdQ3iVoJJCvqDjxYiD3Z88vVGgSzFQhFk6DgAVYRKQS7cHSM49ashQx3iviCEQAM8nymxo2fbFc",
  "key44": "xUkcdJFTgP6KSEM8bEst5UuuapzHr9pHCUXhnMjnbBQaBqX6yoWRuY2sTS2pQiYGRXwPCkLqMtsnzKtEG81S5BT",
  "key45": "3Z2RcRqF3USswnUTevNAWiGHmfP5QGg5cNDP3WXDqNaA5CG57f6exvhDFcnK6rp7Uh5D62cg7kQQetdUqjqrYmae",
  "key46": "4o6YLXXAznTGzcvfPUzR3CSY1wYo2XUyNAhi5QjvQnzd2BfkKT6iSq5n7xpqQKNc2xkvuNs9B3j4xcPeqnoa7id1"
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
