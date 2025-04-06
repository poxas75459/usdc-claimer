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
    "aBPdrabYaoBxA1hMxjbLmCF52JwDpD3981fJ2s28ZVzMcSpL7FS9g1SsMJHETsRAzQD7JyEHDAJ8HVzm6okXGwa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hKM3tCK6GEX6pQXYXjgMfdFarJ8XvDjRXjwWcJiq4rVwUonNpKQZGxEBDU9RFPXmVpFUQAxsH8VvTQGUDSVG44x",
  "key1": "bXs18Fs9kaxXFyBVBQ68KdjiLKvqNmuLDPk3qQua98rZGeKkbVug9epuJNsbptUxHDRVQE1WoRQ1h1BdnErJQqE",
  "key2": "4uWSAR4oD5Z89EoDreMP8h1xpGHPnkPwJn2knty2s7c6kpDvsuiK9AMoaiNc92bUHUqwAisnaVeBQusuroe4QrBM",
  "key3": "5HpYUH8ppJPW4zLT2cmEqxMx5ML4Sa8pJCK1uBu9629pa9htrNZiBbnYmA9FMsTAemBuKenGYAP1QAKx8mE5irDq",
  "key4": "3W4EaF3KaiJauRJSkhjnreFDKt2FDNMLHoNk21LkCiGYuBpKdXFEFezvUXKLS6jzniaK5mtpYuLNYUiH7hVNZK8k",
  "key5": "5EyGpTUDCRH9w81yFAL6JgjYF3WGyz6JoRZp2Yh8G2fLLTrh9S3XDRqCsNiL9Vg11VTvABYmHu1hrTuLA2RRkVVM",
  "key6": "2rH18W6RxJpdVGMg4gydi8reCbQ5Tp2vsjUraosdB6b9aBiyirVGkk7gHTTDY5v4x1dTR1cWeeDt7aVjis3hhTCV",
  "key7": "57TVq85pdH9T2zaEBZ4JDSBwAz8PWErrv6Uhh2ssk8wtPxHHNjC5QeCKouLrmjjs1Uza73jqUT5zpBJnABEUZx3f",
  "key8": "2FqBWdFuJDeRo9GJ541jLP27XLP7sWj935bYquLqVrhJJVDLj95yZLk7DqSkNbZnRGBw7AnKwwoPizzLqjspnyXw",
  "key9": "5N7NXyMeiT2aQtaqfmCFFPdUmrZy7nKnkoz65vi5aVDSCsrJkcaw4Cq8Fv2bRW7DjYtgGzTBdWk36TuEjsz76vFU",
  "key10": "bY42DCyHkj1jq84ekPa8MwuJzEArhHisN3XKn9nXoEv2QQbFQg5LzUuC321x8EwMnXSogG6bEue7gKQqG3HPRQt",
  "key11": "2CjRah7j9Em8EQSqE4oFx7WTHiPHwRJrLTiKEtaTjZe9q7VQzyPYtqsE9Ep6kxDrihzzxvWbrX4Fni75oQtpXNJG",
  "key12": "5Tbef8swmAte5GEvJE159sqbJ7S8oeM17pFeUZ8nuq5zFq9rsF4UaADp9FeP7k1WbT1q1oiEPRrgJ63LKJmxN294",
  "key13": "3EWGfpvUsw8iqdTFJUfTzMkcfefXvvjfx9CFQwKFL3w7geDnehhz9pkRac9dpLhqHDgWYZhEV3pEYQXDdNN7Y5xj",
  "key14": "5jViWT9uTDwRBzLPZyNhfvZTWFqY5jn4x63umBqHoHoj8x2cE38HN2UaPoGcVhnSWMC6qJSvQHYWsbubgjWBctBP",
  "key15": "UMiqusr8QsgxKgn2p9c4D7f9MKzK1a2kTJYRmDJZNn1ng61Wug3HYABtNEaPN8Ht82KxnF1b5F6JXx9hW9RBdaq",
  "key16": "41vFfemKXL3TAo52qxwWw9cUNrVLa3oiwQrCyvN6HYPh8aTbcFwhwsvJyLoDmi95NBe3twzXtjrGN2jnNLniBeJi",
  "key17": "TNLtGLguMEDZZfecETbcXtHbWm7R2HwqfYbNQMtqN6caZ3wDyGeXZwae457GwHgegy9XYfaAwvTF32T6URWNKb5",
  "key18": "3C172joEfRmcxKDn1gqxpHxxwgJqJyetvqXJgGRMKsAA9ZvHwr6cq2Po5dwKoyfuxc6L4wyDXyVaH1i213HPZqSU",
  "key19": "3EocJVfPZD5YonMXqjWqALPHPgyF3g7NcCSf3BH8m1n75eGgjJXLMGHiWoFAVQoZ9h4J5WxzUNN7r1NFBLsfPxEE",
  "key20": "Xw5EANqmucG5eDBJFTpwfBhnnPiR3JHWxXKYhNnAnnvV5wtvrDikxuTYXFyRBKdr1R8Vec3dpnybq1zo24bmxm2",
  "key21": "t9ufGbpDt3EQQ68z2CApasq3EdAKMnUwterPKw4KQcaXRcbmohU5bjfVvbxdzxedKK6AxJRwhAA2tuAAURLdU2k",
  "key22": "GSUf8NRCFsiEsJgURRsGya3zzaMr1X2zkttonRH4uqEGmnTy1penX9W69S7XWJAib8Tb5G9qxHXSwPwW6VmnKA2",
  "key23": "5ehexts6nbzZYQkQps5971L4YCz7JUgu39yse1Vt1UuxwJ28uLz1BAHcEcmcTxGjXX26GarMcsDPYnw5pUccCc1e",
  "key24": "27FoxjvAo3zZV5tLjgkqDMHwwBR6P37C7TEBbyfrCajzsm3hiFPfKEBYYMU3zPoKTy33kAVVekRHEzraDaMsmWLE",
  "key25": "2PT6khqG4sBmMHR4RUdxXbkPvLShbbJyj9eGKp3b4Pnz7sXm69zEPzEu7Rm7USRk8S22JZPviZbWHDPCx42x5rtY",
  "key26": "RhgVrTEud1GPuPgZsKm2fnVfpYD3CgtGk5WDFkzfh1BaKzbPjQ9LbMcMEi1sKdUbmMzQ39BVpGLKrvMqZMScLBX",
  "key27": "2nJnzYNyqGnCw2cn6BgnPY9qXBUfm1G1iBftARJD1PX26UWUiWaM4RukyjSfVXUDYq6SyPANCaQmHdTyMPcD8khS",
  "key28": "3vEm83FH4MydBFf4cY1VuLt4zXsPvYPkoZFNS4XrFpSFsrnhKoySyVfyQ7BVXviT8FiLEFWMbMVgioPSbknMb6e3",
  "key29": "5dtiaesRuR7JpoHDTc6W8ygA97exu8BdbjUqe2aivVUgp5FjmKMaScbnqZY1tomRtkHKYUtqWc9Ld7aim3Cfozr6",
  "key30": "5mFeBvQVczxfm77CtE71iKJxLjJ73Mip4HdcdikCr39RtHyeqDq9pzV3f2NAuuTwabs3VuqZZkmxH2h9HfH8WG6S",
  "key31": "ug6oy6SYW2JDKjkxzkRFMEbCUqrbkBanXuo95xS6BHuvfKqSbbQhvZgggnAF5aG9fGw23MPQ3ChVwu2Vkp4AJHp",
  "key32": "4oGyoCSEbD1w9FWS8BZKBjn7qdVT2GYwAf89GuD27e2uegFrL897tn51VWgJcTrEx9iByEDVAabAmKRXTN8y2YXH",
  "key33": "2pqNfkkyZ5wd1e6uXd8QZpNpyaXYPLPFjT8S8Vvtr6WHX5LCjti7PkpJgBtZarJtgydAovPzpF77bQhAE8YdsaY6",
  "key34": "24k6AkRmKFearyYnjgUgQuWLcsTxJy9XPntYz8gaq5VDWPEdxPeW9SuS3LKNPSALhWPCQk2DkXbjKWLT9UfvU47j",
  "key35": "3jDPzLYa78RCpy6Mtb4X7eRcFrFmTtDRrmpeocBZC34Xje9i2ZWnJMz17BE14ntLh3y8nGM2ZhywtvmoCNWp85pU",
  "key36": "32xgkkzgTagdgg1t3ahLEajRqkfmkmxFhuqQRe6Ybzf1UcfXWGsamMRT5HQ5ogZFQFVbVbwoCoAiejjwCXgxhbGd",
  "key37": "3VevgCqZDmpWabpY9ePSNL1vqV83Rzyd8tXptv3RiAatRXifA1cDaDX2MqU568UQUruqitUod6k8t3hRRReqFnM7",
  "key38": "3bv3SjHm8QwBsCvhgAmDw91vCX5jeKtMqhE9gtkXXdFyQ864TfovudFfqW7JZL6w2hpQzTaaUvTVDhvDPRWArtf5",
  "key39": "zXkVGB6UFF3UxCxYcy3NJK2Ytdk46MkEr4aaQ19ymgFs33UsmSDUvpeCbpZGaE5gSMafdeRHL2NpeiNEo4VRN4L",
  "key40": "5f493QXPTmjp17QYK6b8TovQYGcpTyJ6SijKtNGrjCozmYoqm4G6R9AZJSGbZ5RLsMR5JjAU813nNrycFdpo7Ssk"
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
