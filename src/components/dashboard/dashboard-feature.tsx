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
    "2tZYEgZw2QDYuz9MpJFFgbGA6yZDSKujxZrtc5uvzAj8VKUZ4zGAZFbwiuoAVLzFnA7nNi6Vnj5gDnHb8xsUEVoR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yWPLZMfdpobNgxEomZShFfe47sJgqeM8hZ7JDnqtHKJybELT3j2UvSuru2w45gfyHFGoCwzuvBoicdKDPaqZGW2",
  "key1": "3dyfJ91KP57ZHXzXCEBtNha4abwdt6scZ1Fs9YdLnRPTHgLaVXN7LYBnN1aBLPPQM4QkLHQQMEemQ6agwotsBVoN",
  "key2": "yvq6dmKpTT9rEaCBYUX41fQvq2Ec4xLf3NutyCnZNLrbWpJNEVPZMQVJQECAs3FarGSC9ugsKJ5eZbXburpTJgE",
  "key3": "4ABmd9yx8RMf2hFcr1kDuWDmBnh1tUwaEmVpaqPgZx6uYzC9SSrFFAHzb1abWAYvTXPcAZPGFLmHiZoVR5xAocYi",
  "key4": "2pnLGvLmwMbajRobK8VGApubhUxKrkbdYXHJ9ab9Gpge22YPmMRSK8FF9E56SEiSJ3xK5B7UqWTsxiUbcagaGUJw",
  "key5": "44ZUu9a1aEG5CPn667bHjauvozobBWxjmMiN6u86hYBLD4jRMELUG7j8b5zXbmAmcp6YTDsJFhAPpJErVTGMekBJ",
  "key6": "3Lbkpn9cokh6G6eYCeEhXwoT7imwjRXyC6BYoYu6xcsyRa82Xrotkrasv4wKkoBS8bJe8AVXXxrGukevLxFhq4XT",
  "key7": "2RvCoeaNQabVZg4SPTAduCnbVwiwKQRWaCoByFLXHeKAfuyc1dP2WA3ZewHhYSMo39q3PeJwAXYDyfEVrp9uKYXg",
  "key8": "ix32Vs6BvY6vY4AdqtRGu9zs31rJSsZ4PLYLmdTdKzXTXNYGD3GVRUA5jrpztTffLZnLWokTunQh7TUWjEkENAb",
  "key9": "5pw6gcLQmGwLLZpUJPLWyRm5pQcqY5SY73d8xhQKq49GQ9ork12vxpfY7y6T63e6WrKyvMpCcXea8TdU2ym3jDq8",
  "key10": "5xuz4nqqPBWa1YGpejscQAJG4HAwSaBAtBxzGBH17Cnw2S7jTd1on2wDdE2LQqzrjC9PXaYwnSzaQ1J52wEnuTac",
  "key11": "2twYVRLhdwvbH5aXPqgu2YMPN3zSw55JMDKa2upfcMxQx84argjU4hHziyP8JTgLxLPoYE8XmhTZKw8Xchn7jpnh",
  "key12": "415hp5bbwM5iLuqLXVRCuwVM6TEw7gPs52zbZiwATvkg4qaHW6jxTCi8VbGF4UyK4HAfDSmhnoujZd8Snui4z5Dd",
  "key13": "25b5srdpeuWd1wrPWRcN8C2RHEQxEkhiqWj7C5YvJbu5WLjrfgAMqQ2zX9PLfHec4XfmdHskvThNiFzkRPahsSHs",
  "key14": "5nFrymiFPsG1rHS15pnuiJnXbrxkUcfvc24bs3PNguq2MENVrmq6h8NvHvDpjqnLvKZGprs6NfLzCt8Ue7iZxKvS",
  "key15": "An6v33MNdDbJcsoMMTxBzwCkBo2tcj6bEtqegGUEW5rWTQ4WmTU7Af5PP18XNJJ6gy1cN7WXbZteFv5C6FCoptG",
  "key16": "5oivKHQmY31qSuyspt3iH8vAfqXgcgHbao34bjJ5bxZfCjoRuKBesNzrovKuJSKKvs3LcE3ePRf4qhbv6LMPNhZE",
  "key17": "2MSwXxHrYFD3Bv6vfdPCqajSBWJoTFrX9osf8eYpnntgC6iRs8ACH2n1htjpBruwwJ4utEgYnAEaHjKJx3QkfcDT",
  "key18": "2duWqqjqiGnBDZVkKLDkMSUW9CFdRkZk5txaHmdFW9Ci3nkKXQaEE5UKRx3mA5x9z81Bj4S2QL4Am3XH9JTcL4rg",
  "key19": "3C59aZ69oEEBjCJqtmdkU8bHeqXbcxmGJxVBXR8QmCzeaAyiVrEUqCoRyDHiswmvjDKmZ74u9yXz8gdSBG7dGucE",
  "key20": "2CSspVXBc5BQx17hFL7ousbhr21siZqiiBz7vFSbzbiraHuKEg8MRv2CCbUbhZdxdh2RbcjYCGUNCEonYuvwtkSx",
  "key21": "5347BSw7NQHWvJ643z4aaFTnfv88omU5v2x8dmr3nkJKRWT6jTUhGVsAu7PUttaVnZbmTX9nX3TGJi9faFCbccEC",
  "key22": "5dWgLyP3zhGZxwDh9nCMXcivKNxLhomAtDUbzrTpZw6KswazvfBTBarK7YpGcT4K7Wmf5AupZGxrSHffR38DdRQS",
  "key23": "1ahupmJEuuqwtpsFuyNimzHyeAged3YEvFiPAyyuXjhNe2LhhGKzBtW4Lr46YVnQHRt5sU9bTewC6h1h3deebYY",
  "key24": "5hygNPf7oYYS5D3FK6obpntPKKe79syG97FaaAc1e6z2iR3injgdR6bYGjtjQTrooUysQoSFAza9HKorm32Cgp9",
  "key25": "4V6X2xZLM8JWtSrVP6hrD8RGCV9fqEDMRGf7eV7VEgNQDRHFjXecEEVGTTqueRy5JKP9u2WBBZYLdUUjhAiE4Mwp",
  "key26": "4f5Lziwst5nEVGuq2ux5ZQy37PyzvrGvgsdCF9R8LvhBd6hcrPyfPE4XhryAncKevdM9t1ynMfUtT8McqiR4HFED",
  "key27": "4BkVAXacH1rT473uayeZKUCa8eeQBShk2FwzhruwGfgukrgcsg3cvWnVZ9arWrwvTz7kHCMgmDStqYp5bM6vWp8Z",
  "key28": "3VaQ6mbKLNsiZLgKdGGvn5stzv2kDb3R2eoZTBsTRoj546b4FZG1WF91NPJ2rqBQ4LNZnMK3RpLrPhnUvFAst7La",
  "key29": "3ZSZyr8vRqVxaHwgHMUe3nJrcAVHLgMtbZWNYTqYuJNqjyXc21sSnHMr8gryM13imbsNyVzR51bVGxvaFrDZ19Dx",
  "key30": "d8PZRN4rvxeJiHFfp9osjgXzTJzHkALU2xVQtNbN9KLDk6i8e9XUo8qrMKZPuZSQjKWjEd6sFPpJUUwuzPaeqnJ",
  "key31": "29XkS8st8a7vvNLxha1M22Rym9nhAmVNAU73gY1QAjztCqSj38bepFsqX8yW6UkDGrqg5tBk2LBV2erZe7ZQYZ1X",
  "key32": "4LH5suSuEvUB63u1EcvNU8NvM8DXBG432xHC1w5xpRisWzPeiVXn1rV9995tx38SV72mqDa8kB1XaCV5sALJqwmh",
  "key33": "4G3Ax5z2WYNX5CdCPK85gkHwJ1zs7dL4ZUZtz9Rpw2g3374GJRbB6d5wSPnsJhmk2Fx6BKcqDMqtmRmWYLesrHvp",
  "key34": "5t1VTUMhFvkTcUXgUpHnanvU8VixQZpTuuR3hw7XCHKfzCUffsJsMieUpKLr7bru9jUZ45yJyZDbgS3p46FeGYNV",
  "key35": "3dZK6nSTvKDHAaGTS6KEgWe5rnWPwYeSYMBwNciVAaYzzLzZ55rh6fjsJ2ZkTetVPi8zBD9bmJLrsGhsA3wVQ67D",
  "key36": "4pZLbjoNZPxWZLnYXftmXFfQj4Gj8bUbpgPg1BvRjtdqKuiwG4RrTRxysdqKcyL63M7SnjbLbGFfPmojzTzv1Fqg",
  "key37": "4o1UGioUibW8QbvRQ3N81Vt6EEQemAXS8ixuZB8DquAHTP9iZRcx1Q5JBpQaJMWEmjDNgDeAtZC4eHtrNyXWZLWM",
  "key38": "hVpHrGxaYBnLCvesCCXgtdf6dm3ha84mUGHib9z7cof6sLF68DHqVgPcU8BGG81pjbzpwZCswaGnBP5XGMuz7fj",
  "key39": "4R596P8KoyU5JDkYp1VaVWgn7zZVM2Pe5zwdu1AomewTX3uyKXyVXRdnUY1JYRPsPKcNt6FP69xZHXjgL2FeJJhf",
  "key40": "3eyVSW2WUQQAhsBE9qzDRSDUab1KX4mSBR1MQvi9bU9s2rgQ8P1apyV537SHTqG42PsmMEsjHnihgxEA5MLaoqgK",
  "key41": "5ynKgjPRUMdnfULhYZg3hkQG3Fy6Sp267YcnZ1Vj8YPfwzwVihuJJaMzCnWswapFUjcqvyZNfN8vBprTpJQfYRXY",
  "key42": "3EYqDFBXWERAWZvXZVjbX6DZ9SLSpQfAga6zgSU38xBvVm3gcGxm2oAp8ptwNGaovS1utYk8tBQiHnGa6V4Jeq5Y",
  "key43": "3XTiqo2KNQn3V777AdwnYM1DfFjTkDcpUPb9vPXQa2yKnvUf1XmkuSxCAbQ4o4cEYupumuMgk9FwtMbXkJahmbdv",
  "key44": "35ubJVEUNPedAyfAMC1vziPhwdZMzqsmqXz632fjnbSTMEJwuieDK6heDkN76zHsYdhkqWQSPqg8h2NHYZHnCUUv",
  "key45": "Vxj4det9VS4xZZc36L3KzHdFaQR8Hc4H4c62my5Q6925VoMayKGzJY2kapBBcDZuNY76V7LwNE2DGcwMenCen7N",
  "key46": "4LZ9abgxKhzX7UJBRV5V9cwuWxVeZ2RvaQb21BAC7WUnbRhMFJ4Svh4rvjUeEcksbRegfx3L5vo8oHR9auqVYfPY",
  "key47": "383aF5UWguLchp8E7RTeB5diugkMS9kg54h1Gu4mKhkzKauYbf5Cb35u8duXsp9k7XqeLVQdFy21LtrjiqXncyG1",
  "key48": "5s8rwbHjxWruykkNDkaYvXRpQsMMe4co5XKVayRs2MKNjro6zPB7VSEcsjhfBC5Mh6h5QsvbwNU57YioYS9eWou9",
  "key49": "4rzCUAdpcdWW3hbFHoar1Dc2AkjYXhsQFF7cW8mvR5SmHj8xkp8Aih8buRhSHEicA8zWiNXhzZA9tFyyfjR8pUNS"
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
