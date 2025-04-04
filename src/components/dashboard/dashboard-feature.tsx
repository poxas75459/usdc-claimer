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
    "7Qoq1sxcbGRTotL121yZjNh2R7XthZFUtCDBPyWgvC8qnWzrgku3rPgVuHDWRTyNWWnVbVrh7UWbmzfeGq9yTxe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vUmyJN18xFRisWYpHVJfuMofc4uJWo1WbKmen3uAfUzVqFCTmuSo8kzTcSe2yc9o5odwoS3pqVE5Q6rKsJhwMhV",
  "key1": "5KWf6g1ftt134bUbnQ7ETMvChZCskK5wVXAAgXqZCnvDPsWv2GHEnDHfr7j844GuYnDWCRAoxt2LK2R2wCdxwQo2",
  "key2": "hjrdztGjBnwSdqAyKU3aH8bPoejmkCZcPWh3anwigbPVGtNANjrbQ9gTzwuk1eisCRzfqRwZaJX76QCSfLztua7",
  "key3": "5oVvqmC4GnF834AUp4nDZCmGn6NadmSbAVAGQRmDmxM8sK4BjFfa3v1vaEhkRtVGYmZPHoeBrhQCu9FgaThfcCLW",
  "key4": "MUpSDtN3J9UFNBBhzAHReY1w3By76yPxB8Pi5yd9v6JUYDEgTnUzAe3FN7bQjqiJqME6UeRmXGx2mhGbTvmpm2F",
  "key5": "2GgrbB1AcJyLKAJzKv5yVMgNhAkntvitDQQ6uGWZfGqqqCRmf84EYxKmADroJ99v6uo5LCWBB8VmSvjfC91bXiaN",
  "key6": "63woz57aP7x1RbpBD2nqWZZjP7WtBvfQNyu48o91xvVxEgVLAyqbDQnixWGCr53ikvM9uojwQP9PRHJsFUdLo9wg",
  "key7": "2GWptzkWpZGHxP5MSQX6MEus7BDHmzHAk1swRYKQa2kKbPfUmMMJDmU3y7Kzbo2mMxRMKcuW2xeYqpca31N36pyf",
  "key8": "2XL3jTdDSTfV2HnoTzoV9WcgMmqMKiqHVdG622wNNYr2Z9naBQu4CWhQAwbYfm65aPZovGZgqS1k9gjHhubKHWrg",
  "key9": "3tp8WbX9xEea3G8sqz9RPobKdW1tRFvvqXaTg9251JjGpBP55roYw2QiD3ghbwZmTJKFUTQhxnok8W8tKxap7e1S",
  "key10": "4bNvjvtrMhtYGfdLQ7eTtjk9fcUjTBFxCGtq7zrFvX6C1Z3KHSCyTPTFjJd2suex3ycqSeBpmHvavpnTTcd8zoTV",
  "key11": "4MyNUbRMBoX4cPST9ySCiPRwBYBHwgmh4qiJx2X4tJUrB5gzvURQx2FHzzTKV7hS4uP12UngLaUqqPwsjGgbpqsz",
  "key12": "4KesgdDE8hzcW5TbxKFyGhWFMJdeRPSuymJJZrg9FNTFRGqwED2xTftfkUA2Ty3QCBftDipvmTuxn5aaLjEY1HdV",
  "key13": "2cabstzNxE2PLJRWVnsTjZ5CmB5sF9MLXT3aecsqTHasB5wo8KR5Zij7XbX8qiSE8n4ND2TBSQaRGUiR2XK9vNtJ",
  "key14": "5g736RfUripnVCXoDyhHGjWPoPMnYjA84JSFeJnroMunMbUBKXs7ERHQXYgNcPoHqDLCfjJCEPAvaEmYZ1h5hFtB",
  "key15": "4QxfJk1VLFD4T5Hh13Rq1nvt13ZZjDACWnd8bNHwDCQmTDaVf921dZU31S62wucmQs2aQ9iK5SRAh6wGko3xoREL",
  "key16": "5uXJtCNDQmRxQ35gwwZ3qJE1e2oUw1mwhd5CLHgkweioeP8VpjssZdWtnMttDjZQ6kh2SQqALUBcj928yi56MKDj",
  "key17": "4pwqvEQjtPYxYKBHt8VeBtdpigdNzVKyzLSFnMdqpB5NjzqGEHaWojLDyhREDgGFnkqVhiN5CoX8sEDAquqrWF7c",
  "key18": "3CFLZXmDjpByhT7FgEgSFymcxUXRMKHUqWSCphiaXDB6k7nyVSgoHUx3uUNapEYmtpKqZNgA8oEWeDxM59qUtrB",
  "key19": "2pVCDhJmnV5HgG5qVtZ9EFKnSqr42phnLvp14eyuW38yi98wZVR4kCEpEFBMw7c3eoaEbjh4kEYv8EWickepGfk1",
  "key20": "4TvfN2pMQanh8cyb6rbWj7yKq6mhrQAkgdSAGhG8sFWuWWbzjRHJKsr9r2XMuxw4qcoPR7fuJBSkH4qsnL8VxMHd",
  "key21": "4eu5p23RnEDjV8zsiUR6F6j9agxoLk2YASjUijC9bLMST4Gq9EBqn6uEdbc3QcJX5ofhaUKw4NnKYCy1PX8RpPLc",
  "key22": "5dVFfj8428xzHpFVwtgitWH3ydpmCyDFm796avG19EnUzfjWeukwgqxxH8aT37fRMCWLgWrzmVoDEfMujdziA85U",
  "key23": "RuZ4sDia8GFnw76x5etbV8YiXyo7HEjGjKwjAwZNSVRY7CbAXAtgbisXfJuejPLJxswjXhA5WcATTLSfWux9wxe",
  "key24": "5Ln4Q657AVdkEkkcezep82xr9isrXydd61M2pSGsJ5LD4mcjtEykYyBCPmTa6Xa97TXn9CBegoGmcvDPkAt2Scjf",
  "key25": "3cNVQjsCnemgJmT7LuqanHe3h1rnD9X8HgVbGMn3Y7BT187DxExWWki3oPxFZtSrSSUHpT85mEtwoKwBtkDWwqUJ",
  "key26": "52Z7mdg3XRJjgmpLT7biKrtFRxrnyrmSJvSbutnAHrNfHdxLrKshZ3heiHAjQBWzB97P86rywxpvf5myWpbZcJsJ",
  "key27": "2buCFvTLrNGtCZhLLuBjKUNQUM1rGiJLpT3uukRSmcg1gXdo1qZBsaMc2y8qf76oRasTjpiHXNKtx8aY4zHrXBMs",
  "key28": "4ziUraKuAcaDmQNn4PzZ4Si4PKg57T9VvQ5ymHENATFMKs9jjN2EdrSosyyMxGgKNP6Rk9JWACtsJvSrDRr18775",
  "key29": "41w2pV8LzSpZukDzKyMtFHaUbF1uwdkSzkMdV5Vh1KARcWDsbp6Skd2eqFyfEyW6FuHhrbJs8sRddW9fgukNH7np",
  "key30": "4x9mKn81PVrtmmpL3gBp62xPPXxLAkB918xYznpagbHCifGck2U7Y8p2H1ghGa8ikVB9WCkFEHGk7giQCSapg6qZ",
  "key31": "39BhtenRGzwcTSiSaMpeuumSYAT4w77CSWXpDwBfNp2zKPoYD29ZTAw1qUmfeSgBAo7RgwTxuucP4XTobsejWqgZ",
  "key32": "5ZWuXUKupFhhB2bjFAfXhM4hEMNwRdnLYqcva8ihcdUg2F4jydyk2EzzoYmxN6fTL7cMyrHj9D5YnsmjD3yUb4qb",
  "key33": "3QSm455tf4y3c6uwoiBtpDuteqng79xWw8b2QerMHS56Fw1Dq2xyY5grawRUpRjDRbfB8R45dkVe4AZa9tBniyb1",
  "key34": "5rqGPrDQWcZoXUpKcfujwZqnJhT38ffdMGPeTnVip84GofZvsn8xeHggFvrLPm6kr4EGFLyLNQE2wJQjeGnbfNnC",
  "key35": "5n3PYtDyYrTZLduuYAz1DTvm26Df3wveefjfUkv7TrRKUWez2XVC46pDeVqd6zLGhpb9wuNvgVSVXXQ879pmLkHP",
  "key36": "38TBvh7xNjSsrondFx8vR4hymcDaXQDJhjX4vh6Hvn2C9Cnha8NBZX65NwoximQVgQdP3vZ9ukJbJCMSkS8keQUb"
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
