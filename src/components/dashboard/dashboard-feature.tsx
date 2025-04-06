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
    "5ALoNpVcPYAHgN5bLVQXGYYPMg4KD6ApkW84aVf5phjEdnNpsNW6TYQKB6gyBpnh3SeTLLF1S8HVU9yNU4T4Ws4p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KzSG3TRMV4eqir5JqQVgkR8ETJ1aHdV3Rq7oEkKnDtfqQvnhe5G2cZLtXKkweRH7wUg481Udzn2zF1G6pmSYn1G",
  "key1": "4B4jb3sT95rALWcYk7J9aXq1bP6DfvsWia7ddwxpjNTuXpxHQS1DsUNEWpZxU1Tt3ePBvyGApxgrL7Acq2TDgULV",
  "key2": "4YbWQmfoSf7Dd8PSLAJwaC6mxhdtvjjnHA8eCwT38oAd85sNNnvHu7eH9AFzdxzDmEG2G5cDmBtm1Gjngf2BLseG",
  "key3": "5XrvwJexobrbTUWy6qB9n94jejVtWjdhBfcgwfLwbc1RgY67wPxgCDm6dMCTDw2vqvdYaJEiMmstNZshwMGvLTkZ",
  "key4": "3pHpDNoGyjMXGin11Uwi5hXYEGwgGZmABsmwJDzxsPvT3qCBH5nLDSJgcBhtVhKRtJZbrgAdGjdrL8zmUX9UmSQ4",
  "key5": "5iGe3ACDhmBJUhHmv3FUf2BoHo8RPotGpp7M6M4sefVa5DxQZ4ec5kmS7MEmCpouvUHMvprRkr1xguymL1241FfG",
  "key6": "3D1gWTfjTZEe7Jcvxz3rhh7kfcTmSLpoRNutdiiRU4Lb74RUGrSmSFJ6cUWjyAzcZkQLy3YipFa7e3muUVZsbvLY",
  "key7": "dsjJKPeFfmu5fVBY76Rqzw8HBAb8S2Ny3idfBZAkAa6hncWoSW6B729JSD33gkS31bRfTDFkQiLnCBrWZ2NzX2T",
  "key8": "42iT5WhjFYZ8cEMJMmEAjEiVtBJCPQ1dDa9j4mrR6aAR7Sh5uLzybx3WBzmxmm5GN2ei3xfrGLMSyiGbDR14UVL7",
  "key9": "3vhhwQZH97s3CSHomU3WG835o76y9MtGoiu3QN8Mv1R4cp9wmBgMKSj2EaM5jzeywc6txL33JNuBnaWZnkm88Kja",
  "key10": "pjZMw3cShQXVDiwh7FaQwr6j5BGdwbQPMB7zkthLuGHq9tnWnvuNQYGLXmyGEZmr2GC4Sxfokkt9nFv9GbKbKai",
  "key11": "YcbCzgoT4WeDSnjcfxHV5PDXNMD3ymZYR4BF87HauN8T9c9U3TreFbtsMca9C79bphjGfcAuHu5jxPcPyELQr6s",
  "key12": "2QBojhMH92SHghFzdxAznsNB9XivBngM8Grpy4sHNVxUp5gtBby3V8w1nxe216EaAHtBuRJ63bC51ECSWpeuLBbQ",
  "key13": "5LPkCpp1oCiFFQZsa7ksdEHGXpxjLtZCMefeDyUDGEm7jsv7SecC7vUQznsMxPizJR1GHH18pMz5R2hL8G4i6En1",
  "key14": "5T4J7rsrwPAB6yS6nWbRG1gN1qFfu5asHmAqEUyFawe1V9Gw8UVTBHtbYRvrLYsXw6QcFJDasZpGtKtm3zG8gTZc",
  "key15": "2NoSNzdyXubzTtBV5KrytRLCezU25gKyUsYnPuJtRxHFPpdwzcRySCLGiF9L31ke7CqVpFeCc3ZK98mdWUWdHaM8",
  "key16": "2c1Cxoh3km4cA5ENhdvJjFGzSknPgbHGpjVLpggvzmqiuyPxYtAUbpxCvGbzAtJVHeetqA34M9YBwzpeJvVU67u3",
  "key17": "4SHptVBpN53n3pfpz8N254WPcV1R3Wqe1cmY8uEbxC1K4dA61yHnRJt5MPp4k7z5KtpqVhMkUQswsZd6CqowyaRB",
  "key18": "5zijbwqBykSLvPNjp4Q8CwrZLjqpnfZR6ggQCaYUKLmBgMYBtY3TkCH2nTuwKVkGHR35WkxEtYwCjmrmMAuPrSgW",
  "key19": "5ARRmjMvwGMDeHXXsWCTmBSFnpnBrb5hVzYzQZMA5ybNYbAHrGjuboR8E76gJJocGrraRcxigMpSm6cnG44joRhP",
  "key20": "bArNpTeLbkPXt8jpvwdvRLHokE5M1qm6XaawPGuQzx1UB4ndcFQwTg93FQ6zNpZTHNb5mziEhzKNasurmKDZx4K",
  "key21": "48xPY7f24uVswzEaY9n6PrJv8ZXDXKSd8YB7JVFdTCSrK9rx7vQqvRJMr3tByg1uzcnHnFn3yTXMWoRFq7WeKF1e",
  "key22": "4PRT9vjB4YmTqyBgoW7zpWGRGbXWAfrZjBx7DHKnTq14Zg9Yprh3tuKrEgNPW7q7TthfQA7Yx18NHP6dSrbzLFKV",
  "key23": "36pAfHnqJdwMELuG5nf2vFPTruyifEGfdTm8VLtSzZNHfkXmcpY9hnHjhPh7Xh5sRT5nXSDiv4TAx1xiXF8ny5oo",
  "key24": "67SbV1pLusGkTPvMV2jwTtQqMM97H4mPASzQu1qcKjFXLezRZRoeKye1FqrTBoUA39fWpzK5yKMKVpSaLRLwHk34",
  "key25": "248hqNByAXgKLbBWYGuLnh3FgkJXcFreaaFLfg86t58juzJjQcTDmds3NaBUahWGBAArgW6kXSe2MPuFUt9AqQRA",
  "key26": "4D8KJV7PRXT1muw1FgsqML8st6mnHqLZQiWdRJAprg6af2htQhxrRg7PD8CrudiKRkxu7ipBJTHRiEGZPTfAJRFw",
  "key27": "5bPRSXgY56vift5fpJwajE1aAHYwgkg5b46Hve2NAahbHzvaCPoj37rSXFBjY1ZHAiVzVM4aTAnzyFMevtfXWkQv",
  "key28": "SrcJ5mCgprSWxYFFu6aUqNLtnPVk4pXBRm9U9YEPjdx5XrD1XrZjs2LfMkpgrsx5Q4oa63HeoYf2ayfYQa2MCEm",
  "key29": "23oUE3LpFKS5pptxtHLSD2ueNNiHCZ8PrxwfZszfoSgAbAGc2qrC9vhyGXPkbuHLEhLBupVnpd4oCypfGupxLsAc",
  "key30": "4PHY9PvcUPrquDtUmGnULPuyGaQ1gKfkvYWpV1RqigTzjPW7ScZp7DFFxqKYSyzkdSHh4BhVsf9qdDVkh1yYWRxu",
  "key31": "3afbakFEgdWysDUsMTn4u1UBZuGbJBw3kDhvfv8aTykh1NWUnRJ2gmRByonXkaCyt5gSob8mK8CaZUxPRovrhEwa",
  "key32": "4wr1R5SmwzYTCHcPXgRfkvrbLHseViDYgomBjejPaRLDmxe5Uk6tTB7oaXpgWeR5hJWxgXDoMJFUzg7AyNr9ADkm",
  "key33": "3xAi9ziTUS4LxYeGegPr4M1jkHXiHZ9DpM8LHPUfvUrj2NotcXLLB8nNruNvUqZj3ictpw9csvxqQaXZ8uDMdT3B",
  "key34": "59XhXy5SQfQNh25yLeaguVzHzTfwm7ft6XVyMxPRHe4GERw96uTNjsdsoHegdQESdf8bVrRZds1Z1YyBn3QTtykx",
  "key35": "5ohVkLMpm38hMCC3ypyJ5VLCdLqD8bRciDh6x2aZLPGQeFCXgGccutjms1hYio5Yq9F9Mf8d7HeLxRxeDFY5JQcU",
  "key36": "3qLLWhvziUyYREs8nU3drEti8yU2CLAho1yYCMMVLDgW2TauPDn3imeE4UJY4DxzSmWz5tUAcoecPiuPEivBWUpD"
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
