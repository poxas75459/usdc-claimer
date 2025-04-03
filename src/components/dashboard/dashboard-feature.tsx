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
    "4SQPdtrhrNRAYxhpFvvyr3NBk1Afzc8g4quVtgLH2sapq5JmyLnaGXS1rp3PY24oqUbQJHV9Lx5jpFJc92vubjgc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cT1w7uYmoYETpwehYAtqnQic3n7BLRVmKS5vMZsmmS3LQBySUZUFphEfE8ZsfL2un2HwZNpDjYDTp15QFmJoX9m",
  "key1": "3Ge1Ptra7HVakV9zzrvZWHUgwwsNfNRsqe3susu6orq3QyLeRaWVRnb5y86MfTftW8Zkexa3nzaaC7EVFmxhi1m2",
  "key2": "pN1Ws9tY7Jo21tcLMXJAeyEz6k8f2bEXh1hSyDqa4kWAPyF5z4gpGQf2UoHBK9wjk6X9snigCbf9XhfFR2rEp4d",
  "key3": "2duTNMe7YpZzpKqTnGScmzCfCH8DzXPCA7RL8frbpdwmHz2mokRVLkFaFketMt44Us1WWdAaajrYoCq4irCNcCek",
  "key4": "jhVattSFMgLZCdiuXF1tLqGikFzpUFSHq8Dr1EmaAP9voGLP3x7Y5VH4aT4WSNGdEDBadzfiXpPTqboVkduxV3L",
  "key5": "61pExoUkho3bAtd28bVCsP2XsNt3jnhA5B8wPyHAYf9GwoqG57pAb9KsYxReccRTSNcj5vKK75XAA7r6c4gnTZAs",
  "key6": "3JpJ11GbBbTc54kSWWp2kajsqP6FdHEPqq1hoMVdHZhoHFrt2EY7LvwzzWtWTaUBUMWQuHjZP4aSWt6zBJBbKGFr",
  "key7": "4VnC5sg4cU98kkMABnSUp8yAPjESBtnaxvcjmvZT5j6VUoyFokJrrCLKwCm9NU7qhDqV16RwWZ27bCnZWE9zrdHa",
  "key8": "21qAZ5QzL5ofzmhTSTUewJmDpaQpeGBocjNWvJsZhJoh3BvpKyxDKqa98P4mE3E35oBa3JSXfFWPpZ8L13HtPR9r",
  "key9": "4uB4FpqJJisag377beo56jzuT4EahFumM6BjNsCMkyVZdgx9VCSHbKR3ouL3wffJQRmSCHw4eaGtkFyapJMBf3HJ",
  "key10": "5KkK5yM2n4w2nBjLyDJHNXbGCp7kqPd7va2WponT8eqkU95ET77Z54kTMWf9MQ61bGd1XVbtBLVGJfUDDVzWx6Aq",
  "key11": "2JbS4YJcVXtqRCieA6UvRFx4iytKk2VsCN5dVeJ86owG3P8chRWNjovoECwPAcQciURroRe3DaHXymC5nwgGzZX5",
  "key12": "2dpsSvSzNQVQYh5vkRvs2focJGUz1Kt6ePmhL3hnCypzXhvA5yKyhHNEr1ioes9c6kXPJP7hBGJnH7j7FgTRkuJN",
  "key13": "3hUnVNdEp5e4v4md19bhxEsau7NjUiYD6HZmZsacj3eKaEiuFSWZivgWEZzKaTGBTBWDLoqxhHnnVG2HJ1LLZhur",
  "key14": "25pguDfttYhmhBufJfZ4FcGxsK9XWTnjH9qXzYpVk4ATJPGxXXWbEYX7yrsMSTrf7sbVXMiRg3dkdiEsL1i3fLRG",
  "key15": "335R9JbMEuK1WwnyTt9pmZWCpszXzRHgW2PPUj7RBVx1bFNuUZ21zeFC2UmDsubGiMy1v3MWHgk5iJXUFzHTixoS",
  "key16": "4hddFbn4pfrhUnq312q1pNuM2rkCBkJGsewK8ZniJxf8DC2A5tTYRDeeGLqxn4etXsJmChJSDAeQjiE57p4xojdy",
  "key17": "ZnE6xmAHWebLzP8asReWjf5KECBRnpAM2EPkYtFgVeKXMTr2EexGx8JXXCyGxjCkCrqHQ58YztVNeycTrCCSSvs",
  "key18": "4bxgZEJ4wXdjvn6arPo5ThzT6vgEEXss2cefpD9yP32uF9BUARSzZndTm898QYQSpQGDAcUDGkUcHxLyjachuec",
  "key19": "2BYmwsmNhdgMzZGQvXCjNfkr1JSqpoLWWXkeVKLH4SXPoLwfVLRHev4umEdWySDFWBf2CsKzU8v1F3eWur2mtt1B",
  "key20": "5DAAHd4YzBXoxhcNZhDmBh2VmY5syw24d7stzXorUXM8AJ8MUK3rimtDxz1Zb7bYm4zHDztWPjpXA24X2fRnDYrs",
  "key21": "MWht5pS3ow48vzfpWefUTm3LC5fqqqK7ZBjEX9B5dWmNTGVjiJ9rfqGcnPFCwXVvpuvfWCQeeKkW4uvc6TZsdnB",
  "key22": "bePY21hoeLXwAA1pjZ2vCukMVHqy2JAugkCQuNKkhocoKAFP4yCyGDRjL8YnAMVTieAm1RNqMX5Hgp3uehjzvaC",
  "key23": "52U6T2H83dGbyjqr8oDMnFAWbUjuTQQaB4XQ1Df3YFvZmunZvidcPi3ADawm7wm1nnVPjbqW4D1RTKdXjLB7woE4",
  "key24": "2NZQ1BKxFkY4vhYEggK37w6jiXeh3Pp9BMaCn7ZEaSwN9ftdwUqFaw7wGcN45dVopeNQmJ2Z2PKexwQ9Tu8bZFgE",
  "key25": "Ud1eKLu76EkAgMTkSdyzgcQA7pYehwdDdcJbHnpeuwZwez4TQ99YNMPVDLkLF6UXPvavo5bcoYkg3Prf8N55TmJ",
  "key26": "38DNkMADHawMZNLRrLcZPjDMhXHuEUj2GSEuJRPWJ7wcBcezAYamREJ8V4hiUh1F78JGsz5jmEU5QcHhS5bSFKFo",
  "key27": "3koz3TqSFQHMz1RLGtXyrUCkWzp742DQeAyPEHB5Tb5eiUB6tg7mLbC2JwxP1qMLvNDeGdFa6u7zXQruKEWd4iDi",
  "key28": "2JnaBq5zv63Pe7SHC8yeb1UPNbFxHPMv1ghSrMm6M7Kw47kAtDku4VqFB38Nb2NhKpMkvoxYyG5E2AgtR9jXbFye",
  "key29": "3o8bZHMT6ZxDyYoXXgSnfJPjWz1ASVYgjNdMTXUjjDCwgTXs3PQvpVmV5Nmx14BzDnToWXJcUVRhiXcFJ8yeV63r",
  "key30": "xhGNJmTSGuruf2y33vBGHDyoCgaetqVn5RsADo13YxpLGsiC8Twv8exs2EWz3d7f927RdVLBVceEizUjkyLsjND",
  "key31": "2gf9G8psw19Mdvm68Udc5X3AsiBHNK6UoRoK98Yq913HSV1pg4ELKZVjDWwD21nqkuHmQmRuRMSxW2QP7FFErv6i",
  "key32": "5uHDBZKidWgUCf5fttq2Ug9uRPnK53WX91tSeY1tusDeVc8ted4p7hCQung8E9gBzcKtT2Z3GaMmmVwcSr2zKsz5",
  "key33": "3J73a2jfrYsPc27aPEFoi7aXvE2AQdPS9cciDQJKqLqMUXSXVHsx4JkgzaBbuKNa6oPUVkAU8XcBvLa8kkiRVRXo",
  "key34": "MzkHz3wsMAt283ayX77WxckZxP6wucepUTy4wgCCCpseLj8nYakcHAHddrA7PSqdCbX9fjrDzGGj8UPKooX5G8d",
  "key35": "46kDsdVvDjn84U4E2Uw5ss1q996qJv7NKd3D2gwrHv1QooMBGx6yTyU7vAZhhYNBrPR2WP1cJPANWq3i3mj3k1Qz",
  "key36": "2152SQKjRMCUJARtRp3WxfaG4fsTpXg2U7RQzHV9Qh1Qipqd9eoTKWHBEKopnnE4SWVVxRm9nDpGe3KTcwgbxCZJ"
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
