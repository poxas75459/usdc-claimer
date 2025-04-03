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
    "yp3b1N8HEWErKvyvocon2BTetCBQi8SmtxZ5uevAVkiHrv7vet9AzQjpwrqXXkLCkSDgYgD7Ei5GsjY5kuQKRQ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48bbjU6LZsrzbBACu5JJph5DcYfcLJMrTP3cKGXFBeaS3nw2RKtykoDzFiekPJRh1WpytCvujrS9S28kfhP4ZBos",
  "key1": "4G5j7UumCgvqBpBnnD4QJxbC1byJjTnguc2Ke8bZZLAHvG6ubJvEmZQFA3KczcDGQSVpumyE8kwsiSxKswG9jsid",
  "key2": "4K8AyJVyrisAzBsCrd9cMyJ1pJoNecBtwLRfTWQjg7DsdVVigWN7tNCuGKP8hak4AC4JjBw9JmBDgJxaycNh6gKB",
  "key3": "3T6rBQYNHD4LMT8HwH28mav4CQ6g1AXAZqqJBXXQefSzrEwERkt654V7Rvd8BNRqq8zLLypfZxeLq7MdfMxfcYkH",
  "key4": "2kua8d5GSKMoJqx33mC5ZxSVRPsYX4u2s9NWauq4XrhHEefpWP4st91rwjsyFWCTW9jrU5wpagicrmGhjGAUmFt8",
  "key5": "5ii8hu5Je4bfsN2g7hj8cHF8cW1souZm3qwK4aUV3CgJgio5NQCoHjtpbB2R8U3MNyW1wyjnQLxxEuJWWEFV1ia8",
  "key6": "2kGBUqH8frA6UQmeFRtdpYbtBMycpgsihRECqwnqYqSSCt2YLBckYqMqoTCtazGSxuVB6KPsAgjyVbo5tYQmtfxG",
  "key7": "57Fo7F8G5yjp26kMLVKPBa8CH9QLyQ3wjtCDhzitcqHHvttGLuwjwUenD76MpRheDyoGdztHrKuMDnvpQrCh2GPV",
  "key8": "3FUgi35HGzkZVzcj2xb9RByjuGSeerHkzAPeZMofHGPbvo9E1chiDpwYHa9pZhv3GRWsDCdAa8UZbfbqB2sYNDnA",
  "key9": "3RNbLybaTR8PeJtsbwkDG2e6sLFP26ujbavpwkKQVW82aUTSqr2C8MavwqbjGLEkfgWpGFgtRDzDfYgsHo65hqsK",
  "key10": "23T3WzGFddSHM3CJo1yrPqNroxAZeAvDC7JRCJHwTRAPYCq6pUanMCtEMjZxVX3nfx6Nprm4rKkq2QMaj49EaT8s",
  "key11": "46UNLCozqnU2iRSsaGbwWWzPomdW2fQf3yFKYsDBUNBmmKUCk4qzt272r2TGCZNGkmuvADrRJiWQgpw7i8tsqZao",
  "key12": "nR7ZZzCuJBt55tyQXSTq5uxB8ptrUvfYDj1ASWh4i4aLLog7F38bDEkY8qaLEaQ9fkVqsSPthMwKgRW95vUyyyb",
  "key13": "4PRBmFJUjv2jsnpkuLTnvphUmZfXNTRswd3bA4Q8cj39uFvkBu8sYR1nRoUpVbRuSvCVmb6PPLzKFLs8eowy7SqG",
  "key14": "ZSQxQWj2pzKRjLcKHphdLwoEKANUTZbje3iepPj66DT6H43ZqwddSKZCpvUyBKyGJ2R4Dd1EgsLch5fJtoeyLMm",
  "key15": "34fBfKXefqqNYJoLzGKpHA3dfquzW1nf2ejW2XNQSwd2VfWuEcMVMysiuPC8uyEpaiSvRp2hRn1Qeiqi22MhfyTM",
  "key16": "2Ny4RE4HuUC6U6wszBWRFURAZVhDmGH5ejMUuP5yTkvqpoLcugZV8QmhoQ4q8mS9xP6aHamyumPw4jGmzmUe4diY",
  "key17": "3zWFUnHSQZ42L2NaQzKNT1kv8YuNNcfDLMSrKMLU7FAvYEoC8LgmXcZkJfjFPWP1RhBb7PMCYYBqBuRgce57G6Ng",
  "key18": "4tG6NV7Dr9vrCWJNVRANALzbNH35d7TfTRQTWCSJiG42jv4gYJHEPVnLGqHd1WKftWyM2nEq4k6i4eDhHgHxbsra",
  "key19": "9tMtVkdfmZxVDVZCUBpJySRdDcujU5FfjTDkw5mgcv3NtsGaVa42GGytZEfBwXs2rRaja4baoKVts7YWMhsSy8Z",
  "key20": "3jYg1gCDx2v1b1n3mCbWRWebLiGmLtFEPtYRHm9i4WG39ncU1nh3mn3BujnUF97FLoF8CtWysCZ6SP9bSZ49XQH",
  "key21": "4vaE5FoWJzHufNoruW7bANDHR1yhU5svrLgtmaDfio1xHJzgfduyrVP4GTzh2cEQqVnrtZUeFj28Vgi7rE8dKPxg",
  "key22": "4wwiJJPvyw1bTtA2B9zMR2NtZHjQspcZ5YytQBqr9MTgMLvTGD4HSphB9jQX3fqpXbmT4M9oTQivGfkWS9iox7Bf",
  "key23": "3uruTNKzayDw6Ee5wcUUkPY93GKJoC58kqxtd8kKccc1Ntu3xpjnaRF4HHNQMkiCW41o8ttCCY7zxpjGGzV9D6Qp",
  "key24": "cbUHeiwAmWuXnJLvj2DPRpy5Ey1khNFhVVALAXWa358SZcJw4AEiwTN2VkTkXoNS5tY65fn2oNofrg9Y4EEWqmC",
  "key25": "5i9jFE83MXvMryhoQ7bPpiztR7f2deu56PtuDp6GhPFW3XUwATX1AEVtkNxnjsJsqrnJitHicRJquTPUv8rbcHgg",
  "key26": "5yoFCtLF8LGKChQEXiMuPaLFxV2vJ5w3Sx4EV2scFPa48dB8vaLJQmh6kbn9pPEUXL4HHFKm9h9U3utuEz59Ka5F",
  "key27": "3dcCGEZS5cRvy2jAVQz1VsviZmF356iXCZpx5SyH5QA68RMMNAuEHaQYHA2HWurXKRrZw5H29JhAUKyqxVK279Tp",
  "key28": "4QuBLg9ZDA6CidkjWju9zU5J9ma1Pp8KCcaaBJ1cYRgcywFX4PaDnGe5nSFAQncJdzkurHE7nkUFz7XbL5PoDudG",
  "key29": "Z48UZQs9ibJSG1YapB8pKkGzMz1TuC3k7LeZGpxA9wBTdKERR87TBfJ6QVypeNoQXoXNKrWzkDGPM9uuRQwhQTm",
  "key30": "pEiuJWSX3zPa1B6QMS6dP3ANJRcUyaqZhbEDo7trsq75b1Ckvhna1LUGCmJzVkee6grdhiSGgxWt64gP341XKA5",
  "key31": "2pRzFS6ajDZcduDYB8pcVAoeisPiEtepXmMKSsLvEMoaZUKcJY1JevuEkrPg9zfanLtGkYr9k4H3aFnRSXRTdvph",
  "key32": "21stCtw691SauU23uTDSVyzTLEiKKPr6oMC1rSApVZWZp1xxMrExXr7HvZWerSuSf5bWSMM7Affp6VXXB4GFV6iJ",
  "key33": "56fsugV3x29T8nKvWqtvnY5nG7fGFkbxURVqbRmRxLnTQ7s2kgfsTrHeUe2ZM3wNgbWiMYQA1LgXZUAqQgk73QVS",
  "key34": "2qmEfmNKS85jYE5MMkJ3ZDCC29Y1eEqGD5Fk2FzYKzAuLfFerHKfYRJmjSpcwfEDSpGLyydZYbs6UkpxDTbge5TT",
  "key35": "3dAjLLtZnkYrGLTovv9wPN96XjcdYo7pCjUUNzsQEjB1E6KZDwgY3K3Jrz6hsm3SnZwLgg2dcNpCzJnhCBbXjXjQ",
  "key36": "RUYcskgeNA8AzFFBcW1M4S5n2841cU6bfU8G69ymo61pdUhHmXJyCjL3WUVdBcGXu5KSGECj9WwHRU2vLRrTjXd",
  "key37": "XtjHqY8yi1zFidnQ4qWFCU9TsxjsRW8t1MbsDbZUZ5qBf5eM2mQPn9511WqLQeyhYKsmWwYN9sw7KvtcK4xAWnP",
  "key38": "5P2w8dShS76E4Mh59NXSaPNJ2MhnHK4Dfza3pa18M834zqxmM32iG8sGh2rz1EErf6zx74kG475qF6H2jxrvQ7wa",
  "key39": "Ha6G67hjWAxyLkNrDv6H52i4Xt1Cebni2JqjGJn3BFVgEwDGPpr6DeEpN9CoM3jAXUN4MPTnxAe7EF98KPuReoW"
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
