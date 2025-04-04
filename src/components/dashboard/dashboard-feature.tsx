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
    "4eEPeBDd3ECDveft1nLdgoAZ1s2zcqCHuKFv8JhPMiH8fJ4YW2swqziP3JfP9G4hAf8Jvh4gfmHN3aG8MzLEtkna"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FD4nvcrrjq7Z1uCF5Msz5ejfVfhTv6GnmHvBLTjrTpxttYeeSWhciwHbPH4M3nGyqZhTUGNvCZQirKRZnuQW58Z",
  "key1": "34v3gTZrfQC68av8zW8qnwJNe82KMWpKPq2zVT1NiXwQhpQoDAvU66ufboNCnTy8214zUSzmfn17wWGEXWs6vtK3",
  "key2": "3LM2MxtJa41D2rm5HqCGcBDZ2pbktz3gfxgL9mPJe9hmKJbC3hNQ6DsegcRCh97sFYLj3U1NyBr5YDRxDfuY6SuC",
  "key3": "3Sfu987hKrT4w6LW2CLxFq6hmrkoXT5e3XHQMiZJHktgYBcxF7NVYZN59fWeBAE9vZyH2gnBXM6JqJGX69RM6vmS",
  "key4": "5zZ3o3dcf73pqBKFBkcJi16q1zdqbMfXRYWmRzSMwCf3JcE2RHJa68bNAjgYY4zVsVk1x1bTJkxdra616ERvuwLq",
  "key5": "3QJiC1K1HFojqW84Cd1ffWmPeudcdfNH5ha2eXKX6zdPbw9eh3teJ4HSTZGzt8GSTUnDDgf4Qd1dGvGNa7zEmfr5",
  "key6": "5yhqs8E7MbLCuiAxhNdctn1hQuYX6xbTo2EWZew9THsyJr3vbqk4KSCcLytfkcRGTX26U3cAy4rSvQDBxwmjJ7aT",
  "key7": "3tvC5nSP4FChfj1qA7CiKCpFDR6upG2y62gcZrsPGtyHdGQ6rsFsM82bPqBfnpqGPExPM6Z9VmnUbw1zbugoAFCv",
  "key8": "v3UMxNQrojTLvcHrgu2saCGeSZeXpfUcorhEHi6dh8fUWzGSnLzCWkjYEkiyKncJ6qGe4GMDhX3i4odDW7UF9SK",
  "key9": "5SD4jDHLYCK8c8Zo9ZFooATF2kjtE696QWkh6nkXt93x44VDeMwAH6gEcpJGgouKT5Z9ANRp8rspw31aQQxbkaVt",
  "key10": "2T5djWrcr46Anapkd3odBmWexQNesMYahWM9ASnkdtMqapmPDh3NapYASmF6pHhYvDh6eoiRW44mYaw7foYLS3gR",
  "key11": "Up2ahSv4cJHvYbes9TM9hebdcHZoGHgtLRk7mf6HRJHKPAgcAWxGTTy6mxCpd4Vo9fTNKABqYeadMsPxrEha1cD",
  "key12": "3wheN5q87AgG2HRw2mryFaoqf7boiDPvYLpk5LAdHGqHQjweH74RBKSQYJdaRjsq8mmer9eWFHhLZCQfA4Pi432E",
  "key13": "49g8PUiuTo3SseWMXSPRFDWR4SoP9nNCxDLpqHnfZmzTnZrm215Pb3Vn3PEiTGiL9wMrZVXfg2YEs2HzGKSsvcv6",
  "key14": "2JYiujVUZfpyHgPBwdTV635ZuwUx6a3zgDMJQYrpFLe4HVSjUzhcRRJ83aM1NvNL2iRMK1qpmRhN94B1r3SNLgsb",
  "key15": "4rmcrAe4XtwgHZXiL6d9WRBzg2cxa6U1wVPs4CSDLruLn9m6mqXhG8ynJJHhWjt5gf194xxDevfyk1pFoR5XJQQG",
  "key16": "bDGxVF9JDMo8QKzhyGVpZXkumkxwJc8nRqSH8nGow9wgtvikAQHjR2EN8jCT99nuZX5eT3hxVrTR7ED9rTDv3ZQ",
  "key17": "3pQd9uRCwgv6XyJXfNGTLYtNyRi1HVJRK3tivWFkdkcY6BDbheRsz3dE81sJdEnk9Hs4ZUCgTWUMJnMwkc29NLpn",
  "key18": "5CvB1dKtd2SEFfajdV7tesSpimkoJ2SLasTW7BkgmT6AnsQFyjUga3zuSWcUK753KwofnGGoKXGG3frKmytT4CUZ",
  "key19": "5Fv8MvGxqE3Sm2cS3WMBckSdrFAr8rkjm7oJPM2RuzAkcRNC7Hdif89rNqd8DPGQsLb8KnChXuE8zLVsfG2EBRuR",
  "key20": "58dJUqr8ghhkaSVJiRsqCFuNAQ3sdyYp5Radb7RJGbRHrZHaV8LDP17waAa7BbaPJKz1oJbY69ZL4AagBXhDxLJv",
  "key21": "3AiiiY9YoPm68ZV5n3TpF7oXg86cTKuHsbyNN8vvEi1Sdkr883eN38RJNpXwWjY5wLSNMZZvMqSPjjBDr6e1UMeC",
  "key22": "WKnjUDrYtwhfZkd7x5JJvAiZuBwVsCqusLe5RTpBccXP9fAkJVjqhT9W9tQFUufuBttyfwFFLhr4M8RiFCzzybA",
  "key23": "9WXMrCNhX2ma1FysCVpGGr9v3no2ktjYWan9RnWM7ehQFRsyiTwuZLtApHEreaS14JGWhXPJh3DKXUtWQUvKVoo",
  "key24": "64LTy8mUVNhM6tSK5eyhhAckJFVJfjgtyNEd4LDwcGrUrMfG2tYMYKgih6a1o52BGYjWqwtSeQq4Mtp29FfVV2sY",
  "key25": "4wDsTipD79uuCQHX8TNQwLLJjBgfhB5F28PZtPYbfeFtF1vepZJkc8vfo3etKwf6m2zxArNDiqzTjDZVtnU8jmLa",
  "key26": "5XZ8ekASB5YT5zBomMMMNnbs7C89RegLfvqz7ZQgAtg2SX1NnPgTLXQQE4zNXzTxkvg2gEuFCei3gEywucsWxQRH",
  "key27": "4hCA132y9282nWT9yWUMQwjBqKTPkGJui8W2uR6LQhZzjghe9NXW9vBaRZtTsF2NnEuuizj6ZeZ43nwhYUH2SaZq",
  "key28": "2szVSJNCke1G73fAEMfEVpSQSFc7yvbaVCwJhmMd4PpLChRovDQ8R3rrhQrpsHK5WHgEmzAogSbdh1N8noWs4yiY",
  "key29": "5Y6fAAEdyQei1QxLhsmDdVojoNGBMMML8vHjcSWRhpdrhbmvgb7a4R9fbUhBkwnxFAFPoG8z554mJmG4w3ivFYnF",
  "key30": "4huWfWkb53f8fYQp2bNvi3UqciMiDmfBW78RSJArYyjYFfbjydCfdJtyCbACdA4dw41mmzy9LaTUMzsaBtNCU2cg",
  "key31": "4QCY1jymUc7exUAWomr4LUdnnXmZRiHemCLiGc9zqMuFhZ47ov1PaxUcPLmur8UHB2MdrZ7LrfK2NynhugFgNgRg",
  "key32": "4MmiodrnqCPrPTwraa5m738CRoJn8WZ22oMEotZUeS2DmWhExoFajsefHqHbUzKTzZ2FmPzU9NeQD3BZs5uiYhpH",
  "key33": "3WAAeohr6Zgv3RmQakSjA3tdBmGoQaEVjiq9auxBCbeZGnm7tTc6A8gHewuzD3GSeom3GJpcqA6WzhUsM29MtANY"
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
