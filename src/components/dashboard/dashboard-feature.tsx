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
    "zwqgD3sqykCSLr7qyyksxT8cTqCwVQLTBX35X8RpTxeQJznruMkA3KJaAEwjHjBYjF6V6hHk8jQaaqE7mGiATc1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JSGhpNrQv3TnPUFoVaiRh46EVhyieYuhVeFH6dakS5x9ZBF2z73tp4zq5druypGXX8VsRWZiWXq7Uvqh7oLjsZq",
  "key1": "4Br4BTS3YPfxg4PrhzkB9wyCRPectrgbqw1vS2mQuo5sD7FXgNRGucQKEdDpeyYxgRihotTnWD3tu1p8zKk1U1rn",
  "key2": "5Efwq3uBLS8xMnwLmkRuFcQXZwFvwc3NsZatJ9GCgp2oLWTKAsuZhzKdrTJQUSZECjL93QHqMSQawooyz6rYzXGP",
  "key3": "3Qig22LUMcXgTmyPcXGGhL6swGy94Xgj66gLWjS2ru86CKLjazqwwX87jGqDZhcJPr33Zj2ftJvdPnFgAXxYm2jn",
  "key4": "5oB17LdbTm8tML1ZfZUPjhUbFqYZBA8S7dELbXJc2qDiBQew4A2uw4FZPLokXYK4KVPCZJUK7s6ixYG63gexohff",
  "key5": "3XkpsHngFdBeCZtTKYXF5urdPmSCLvaDvTprmKuS9tWyyL5wVj7s1LsYj75SavqZbh3r9kB8a9uVJ6HLBQ733Bgx",
  "key6": "3yoDdw8D2hjbgPm7RPRqKWm1vjZziT6i5a2txErnAn2Zz9rKtG2ypM3DJQUpgS12hBweKVUMfyMNkPfhyqWjUZiJ",
  "key7": "5yBZabnLFPLpuCmHciQQfUfmSj59g9Z9ekGTzq6kaKvJw8kPecUsbnQkZm32ec6tqbjnERmBy7JhLJqErXs1hyv7",
  "key8": "31b3LxRBZWiVqVMRyzDTSuGKZ6qeNw7xYTacazUpc6qd8DEgfS2NnDknTRPpwuBXgLmsYWr2ukGcRriqzQKbidcc",
  "key9": "633RdiobM9eo5pU3gqgCv7LJUExnMEFWLSigCj1peKfYiGouNDxLtcfMEX1c7LWwS5mSRdhkbftBv7wKDHyvqc3C",
  "key10": "4uwGai8md3audmkQHR2pPEtUYQXwScAoKVjTsNLVnuxJzKyv38X2BjgM35LprzvZtXn2BPUBdDKaAMS3JUan9x8g",
  "key11": "2c71ZCxU8gjQmo9bqsxN1MYC5GWrVHqXPib3VWvd35rfEfoYgJuWhrZPzAUB2YraFyLu6qy8WecZvLgRkYrsZofX",
  "key12": "fdRXtTAC4VWBxR9aBDmGLHz2DhV4Ms7pCpNVau38v2uedVpCFQRiSsDSsXE7S1CN2izw6q9L5m1qdT8DDaU1YCe",
  "key13": "5DUG8BixvvWASQVJeZ5Pyef2SVoE8zRxEqi1XBdw7EZu1AbQQoPzXBxgfhR7XrKZwwVddDXo5pNrhMdwbpdiqLQd",
  "key14": "5JuAabUHRhstAyrvUobNK6BjsPLXHqGnFe9vvZCFsyBk9uWZUJ2Eyu3h1K3AoAn6N8MWqhiGygapNUeqRJBijzKd",
  "key15": "4asZCnWsQJF7DurjrW3CvRAL5hn3MXFvaYJcWvGmAnf8GoZXyDVfH8cE8ZFrdyAynjDv4gEZfPBeKjPhQv3gRURV",
  "key16": "2J28vduaWQDa2Jami1svSgFNCntvhQawTm3a5EAJCwu9uK4eF6hgf1EKUD1673bT4r8YN2p3HSqc2UW7hoehov41",
  "key17": "3rAqxGWS8ZkkE6Tvv8jG1RWxanVoR8zJ6gAwGJGQeXSefEeurZbMqsUSnMnTkUQdxUmRQ452FfJ6tqTqC6MUkoAb",
  "key18": "s7E9P5y4PuYBTwPGCoTw4eCzKxFTs4ak84TyK2jXncQwELL12wSpnNGyAw97WmBCjDTsRDmPry4SbCrHKCAXpp4",
  "key19": "5Zgh9EmMh15eFn5aWF8Rug4FPvq5N6xLHJ2d5vVoGZy18418kAVavyPoFhQj7Kbqeep6TMyoZE5bXwqzbnqaS3L6",
  "key20": "3o7LqvLGYyKhjjbPUsydfSVZ12fGow9LYTaXN5wy7G4j5JbqaUNfEomafjQzYCRLtwUL5k2izrFokNfa8UVbhRnN",
  "key21": "3BgxvRwURbGxEnsVBWsbG4Mv31LEZjaEn8Q6mZugg64DP1LW4gKEXXGVZpX3JepCqPRZhTyRkYGPKc7CBuo8w5Vd",
  "key22": "gsfQA42dfQhrhTxSjr7J2F1tozAmHzfqQBofVrkAckVchE7CiGoy5773R2fLxczNuGKdCWmSKyKkHxUphCmMCyH",
  "key23": "RBqpdh1KdWNA5cAwA6zFmZSyd3n2h7hdn4PeKchBeHxGhyFpriAf2SkQbnoDiFfAmqHYNWPJJ21XQFCooccVAAf",
  "key24": "2f7W52pGWrikwAQNNaQSdNgYwupnpbqpccGHMq5Akc7tr3Jhq8YUU6ZF77nAxHtBhRhvPmZsK7dTb3Z82it214jX",
  "key25": "4smfo7vxtrkAnujUr25GTCjEaodgSzJjkK8t3KzsXU2nP8TLjnC9acBfo2nJgQYkFL4i5rc6pgZPpGAjLFbchmmk",
  "key26": "5aFqqXPSerebsrCAiL4WtRJWobUq9EYrNQvus11D86wfeH3P1dki1kD2F1qJR7DS9YiZs9MNAxTwh3hEYudF4JVj",
  "key27": "5PFWM2fXkpbfEFAQimveZDNitRKwE2MZUtXZpJWdMgJAepP4TGVDpZxK8zRYULi3U3hKWLpEM2fgW2aYEnNzgTgV",
  "key28": "mGhVQdzL2LzkDtjJpCBdATn38sguhYWpunUvYXochGG3RD996KvvCYQjrhE26QSyqoepvLLd2HsRp8XSH2JBNWt",
  "key29": "2fiWdcNa3raNB5B4eQghaLzq2uU6Kb8U2FWaivzPwoqrqDWaPpAr5C4Jx8mwa4fivGbGrNcfKWhNPSDhkf7LGRJj",
  "key30": "5Y7h2WS95M1KvC8gMJ7wm65LcaRWsyLLD3Mb3od3v4oLAWkuWcsF98U2gek4LS6KeMWUXjcXKuabX1TJPUKCM18a",
  "key31": "4LEFyR8QQrBcnc6akEfaiyUUSeefRKMTSNDJz4HHEFqALy2524RZgieztzC8pbEKnzeqByvdvp7tSiczjFEw37Qo",
  "key32": "43XYREeJc1Qy2ZZpoy1VtaCgj4he7knUZusAfZsXPD4E6xM31kCWu8i4z6NHqYAbrnDERfxYVgSVqg4CPw7e27fz",
  "key33": "2CwBbaBC9z6EzGEL8Aca9e1761eqLKcF5NcgHHDHXcCfgeqruuvn9DMpGMHCHRyxDBWmA7SwTrd7xb2FuXBzcuuP",
  "key34": "5Nm48QUQurS2kSRaKcEkPkG3srZdauhQXkrrktTB1fPWRc4eXkLaxjE9EVh4hQmDXA3wyRGnF1ZsoRSF1VAHJZoQ",
  "key35": "3iHzypPUS4RJnfQHN6F9LE86zc1SkquxTZUc1gmte4rezz8DmXnnSy3M4txm4KHRHv3zSUNRBBfgv2u7DVq2X7VK",
  "key36": "59rQQtpuYxXksDV472vNZpUHo5rAQRyPsp4brbZ4f5ZFEULi7PWvVpebkvAegZNA7ZVaEB9u9ZuHkgKdm7vL7Nvi",
  "key37": "37dee5B1bFGhsdyNHu6jBnZZju9Y49GaFnW5qMSmfdWn4x4QZZVk3ufa2fT23SjzfwqMhqgroXazrTEjzpR1GBim",
  "key38": "PqXrPvB5eUbrH6yQFEWeipfan2BZyrVwYEJ9HYhLqs7iejkrR8YZDg2CAMW8rVnYfasbaaLrh98vHtvTnBSGCH8",
  "key39": "5ZSn1QpoydefPbexAz7E182tasuZhQFUwnJHRmy28bs84soJntvh1MD7Fs811T2jXBEEyzK8aXnQjwZwGA7SaZ2n",
  "key40": "2nUH64QspU8bUfqh2Bqtnv2xB8aKavhPn4U2ceUBrsQY28hHLVZ4EkTrCSJQYKxTrRNUXG2Yj8jbvzZvWUgenxAQ",
  "key41": "3H7nLv83NFeJnQAR2YPzhuqsk8kJcuo5UR3H5BpVvVp2ZKJy59pm5QbBJyiAjv1DsFJj6pn9yteWoduMkdtP1tTA",
  "key42": "5pmsZfvwe8t6UwFHQ3FTRjCYpVYLKXrnN36kuwpChMUYFeZHuBhVfYfXRTSvqeVXDcZP5xytiVWtHJSJ3ko3jhwt",
  "key43": "2sNe1QYRsWYPxyDV7JnuemZppKJGD2wH7FVyhozVgi33hwj4aPv6mjmsHZJBDqhRjkCmNRHDakGZncJ5BVY6djcp",
  "key44": "5YjFuRFjXrevGXDDR9onMFacAeAFpws5roTyLyS7mr7gPzWsaGc47vMUhLs7NSi8YNtT9PLLwY3MKJvHaiYMMheH",
  "key45": "TUY93yFdmLynFp1G493ns5iE1TuYHWaRGuss9cUPkic4KkiTQSXbBCV2ivYzCs6q1LvawT7n2d5AvqCrPi3YrJi",
  "key46": "3dU2QV2DEae1BvfLsugsBRi1ebBrPxPf2ovi6e7HWeFDFV9kthTZSaJeLk2fjaC6BoewBMq6mNMNSD3hsYDF4Vdv",
  "key47": "2CV4WSr4ppj6164Knybg4ujxnW2t4e3fiw5BetYr8UEnLqTMKUvbyrjNM5Zv63mPKnRrfQmD817bHM1JpuwRXD2n"
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
