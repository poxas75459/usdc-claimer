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
    "34YS3S67AuLRPBwxWGCwS1MUjXbcKGNfRCD29C7RUu2sYj2Zr8tV4uT1tD9EUGcEh3U5iA8eDV34zQKnMJyzzUow"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YLsiqHGdzPPAp42r6CFGybkwHcRtX26VhBpr6hnYztGBcnNeCNRByfvDws3LXrTFU9q7eEbH3Lb74WNx7tD42Gq",
  "key1": "3DGsoz2HdK24jLc9M6GigHae1n29yu21ZP2Ux1fVdYNSRTK5pKc8EStYJffSei81NWVmzTMZq3RsVJij7dnXCodh",
  "key2": "57V7z5N7KPAeB4sNp6uR8EX6BqpgCFn4KtBmwHTBrqaC19EVzZjdKoAgoSzjytcnwC4otTrdzwV7AShTqQnQJ4ox",
  "key3": "3Gu5zBaN5xzioM2BSsz6yNGF8ar1EANH1pL7ScdG9dSHGstQHF9BeWnj7oJ1M2SGjq13GoQDrjd9uMfmeepyhg6o",
  "key4": "Cf1G98WYSj6pCMfNiTDFx24hM1oM7QRM56kiCzh4tmaKBaLX44FHEKtLBJPyiyJom8zd8A1FHqMCe3e228ihv3h",
  "key5": "4URShwfhRvW9ZSoYQRwEtaRuz5HsAxnStsvwRvqEgV3zJ4QjSD1yE8f82vEVVB8eLrCz3vLFCuRQeUnk6oqDPzud",
  "key6": "5PA7skiX98fo15ueBxUdJ142htAQoTtqXzdbt6Pfadfi5cu3huM5Rd2L9ZuYiLQWPetSWZTeauaLQsG7nhwsAw4R",
  "key7": "4KvTutXEFFmsXGnkCQYyNVfFqzCs3CBkZoqfVCc664KPTcFHtvaLgDjgN8oe4BUsCcbm9ngCbE3risktb1QFz2NV",
  "key8": "2vRfirfMwKGWZgCd3BrP1vSG8Ajd8uaYygN6kWP2eVcvEqCExH4u6LdUbYyamDfDWKgpt1zxkpJ2hwBtKDstzZVi",
  "key9": "LDXSxcCU3QuzdoTyRwfzLngUQur6BGvgqQCjYMrgvombA3mMJammj3at1JMz7Je44xL5vHmUNmCyTFdMTyZZqED",
  "key10": "5SG3Xzsfcn5nrggFsW9QwmdxVdiceEehxLHyxq46JMP4CzBk9bj9YA7BjE9CvzcPPrNJm6wUCRM7hnrfpziUqaQs",
  "key11": "3mrvY4DaEbjbYsyfFqAguiuBoggmnF4GZo1qaBueKkUhfHgxVGPzsGZv7ZQ1w4wpY9CVEZi9EovfdwMm7nbC4o87",
  "key12": "2LgX9X7xdxzGaP8KLAKzka47dFrgEbAs4VATevDBFTqSLM9dZpeMRh8Fc9wnH3ksqGkSZBHJFUFrGYJ4EyGgrrDu",
  "key13": "2rwBN5ZvUs6zot8cuPELWvk34h55ZHHLf6rFaWj7W8GjwzDhEGpBGEsW69GdEGdY8pKH335N99yV1YxsQgYbz3jX",
  "key14": "2NxFKCvGhwMV6ghCZK76TuMmNpmfS7akmKJHSrmAmbJKkWWCZnJj4dgoHHspoAPZCQNSVczR5Sm1vSs2iVTYDfHR",
  "key15": "GUfxwxzBuKUqeEFsPDwBsd3biP3E7fPUjSj5aMLtKoLpRLCgEmy3ugTiXH7mmfFnEN8j8e4UgxXsfRSaQTNZJwJ",
  "key16": "2hGjXxqWS5bgzxNZeuZcA2EJtu9HZTC2Caw4i7owVaT4AodrLBMVECGToo61HE62u9DDbZLd7SNtqu6VprwGfagb",
  "key17": "3jXo7LQH9FEAbmwihTAGKExUBCuqNVo2jzJ7sJsDXaKHzyKjw8GYDTUWbsX1tAdyUBqqVcrTMvPqTihN481HTzmL",
  "key18": "igJFCtSeAiHYB3D4iJoTuTvTVc1kGWNJsSNG8RmpAPZ7Di8Mgw2o3cUrcschgQYKtJHc3TUVFHshyx2RUJTBHX2",
  "key19": "2i5YwVqufMz8DQ3mbLHRRwnDe6nmhsSWuYAaTuXJrxdr8VbNGDj7tEvFAJvntS6k37JjmrLm3ECz3z1eg8U92GKg",
  "key20": "2dPeXPeyqjp6fs8onFThhCRnocWgVWFYYPs4jxt55Ww9bfra6JrrGZZjXtxxknVNu9oCykHVRqgZP9sgHnJNh7Vs",
  "key21": "5pEXkCFPEoqBzB5kgVWfGSQ55myWdW4W4Xc69eWXenz8dy5Bp4dviLqxrBf5738wTCa9Jv6Sf5Mj2tx4N4Ux1TyF",
  "key22": "TRbCDP1HV1qvM2GsVuEe8q8sLTH9WFYTV4G3FQkRo7Px11AJTPSa1yXTs4wHFV7XyeP8hSxS7XTWTGpEVPAVWy5",
  "key23": "3kBwd1sVFv1mWQNnJuBW5Ttv9Z7Xgu51gKsEhr5qHuJekjGtWEDaPCkQ944jjzJ7hzYZUfx3gMoVbcyzTBRHB5E4",
  "key24": "4bzNu1awBt3WxurJJcX5yWXkG2ZcPNPEcSBmN6m3GYPZ7fmumwHR5KPqZjjWXhMFMnXAJW4jSCdEHpx1YVxDSUBk",
  "key25": "2CQaNPfPiZnGnKSKaGWKC4Ti5BUTkEsb6xfkgcLVh4wt2FTWNTLx6oxAesM1T5F7PwtNW1vpjJNsXEyMEBWdsSNP",
  "key26": "3rrMtq8QfJjp7mFAczr2XrZssroSck3vCHQq4eEPzYuVRtb3jgU5sGiDX4HAHAEePvTmHg65MMBmegjuJmgsXzuS",
  "key27": "4cLqcx2UjLXQALV1gcXaXqs4P5RjsGeriZ5NKbYWQznFL2HdoFcTsNz2TMQqGzbwdVDkG6dxTkRqJccaXDtCLC1c",
  "key28": "39G6MEvy4KaoN7YSYQdxscTKVGvHgoHPVvUvDEDz2s9oDrCkTfJm9YCJ8fqjdE4qDoSjcZpLBN8BdwFBBT5mR1mQ",
  "key29": "5wSLA2mwobLKpRHPqggiY6imjLtSBvUjFQ2d73M1uyKufX2qBufa5tbsLsv6UtZjopdv9F8cu6GvLeKYVxwXmGHf",
  "key30": "2xE67csZuwTBWXYFMhUxqx6cCY9XjzKQkmBc2xTi6R2J5outCSvMseYym5Z3bWah8UqzRHwAg6UrJESiY8QainSi",
  "key31": "48zu6uEQbRbnVkhhA3T4smucgriPBVvC9nwTT69cnQTfxkckXT5AGryXxxtEZ5SEWaKeaaHGu5qdfmkZJ8s97hih"
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
