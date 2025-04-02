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
    "g2YSCQJ3KqizQWoF7d8EYZvWwNWdTtWoF85P96c8Vqs4Vb7L2qPQbPssDftbSTJMsoPU34sYBeMJJXEE8v9H16A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GydjgtyaXvTcZLsyYAf6MA36G4AoYvHPELztC4sp7Lj8BNHMePpzAwV3AMX1hQmmVSL79M6LLqhbwxQPwU7oybt",
  "key1": "4DhK8KLZuNfsiafG6ReKB5r4knPmoMbTPUPaMCqNi43tYFy7Rxnce6yun5HB5XwCcyJgYkNg6tGuUcB4JS26oU1X",
  "key2": "ooh6c2gnYTL3ANPuMgywB2MkMx93JGprQhPaX521TPqLi1ajgaCSGLUhuVtYTFMVzhxG2gv4XYdboScWJsguQqi",
  "key3": "2c7F9UyDZn2Egu7YgQTXKhMcvnBCQ7if6fUKCTqxzoBT5Qdj9yyQYkC2h32bhHZRojnwfunZ93Wg8qUeKNGKsUZC",
  "key4": "4t5tn43doeHyVo7kMT8MTUgwugHkNy8bZi5oBdcjkeCrXgXjy1eiuswdr7LYE2oMcQXz8ibw8GeTFESp76qLphxR",
  "key5": "c4Htu4eFkiH1pybChr3NTJGhDTucuUKnj2m3cdh19fQX5c6T1Y9fKq5hiU4UtTUxYcQNoNKveNzW1oUdKasEhNi",
  "key6": "3txZ69pX7nHvJ9X9t6Mrew4ZfhJJrHvGCWQqrW8CuW61LrBcEaUz2DDDUAp9rGv8Z6u1J1b8sY7krtyUh4Lep1wB",
  "key7": "3cETkFriakHHKesfwSDsQNysoNRtakBnXLTdMG64trpc9yu13i2ydGJcQRYhS2vfEvSvfDoU2s44LXsoPdNLPXyn",
  "key8": "JwLfb6EgDR7Y3zHrakaBq14C5oV6kBBrDVtKyyEVM2uBEDLqMw3SnJpuAfCWw5GWiT4ZC5zH1AqAzfCBJD9TLAK",
  "key9": "5NtNE1npvHAKZHmA1qriVEeBZzwXCgUSLRWYdbDMGu5itVJ6pDoW56vRQRHCwxGKeSniLHoJVLUdFnrevXSzDdhn",
  "key10": "5pgwp9LNyvoKHCXygzUpdmEyNDpuFpEpsE5yErHjs5eWAd3smaLQCKFW5xcRFayMCnV8j5At8UUUW3ZS5wmzVuZD",
  "key11": "2gyV3i2oVFybAyyVMTznpseFz8qG71rLQjB66iMH5SE2opopgMQJThhhuYtifYSFr2URoAjKQ41osv4Ew1YKbef4",
  "key12": "2KCer9Ws5atrGDZsuJE22AtLg8ekQpwhbkoYs1naHt8T4JEKtXkDSF4bQNB4vMcQKni8nA4mxL2JmHpgFAiYkjSQ",
  "key13": "2gYuXAQ4YXq56sjM8qLx2bGc1R1XumjbNXj4DVnwKxSyeyGauRkTJAPKPUwGQR23uPZ5tYLCv817HBDDmEU5qgPY",
  "key14": "3va5UZibuDnabhoArwZvtfAghFZC5GL9bRTmAMMUky8C6KPmMBFdNbAjUAwJVC3iXEd1Q4dkv7z382BKqr1VArcz",
  "key15": "45psVimNuE3x5rjYjEn3okX611nGJnuygXZUR1SEd3dJjpa4yqeoiizLEEWkfeZ8yAAxSsRfBk5aGh2K2mkBjJcT",
  "key16": "3vrT9rvUcv4JZ6MmjCgYuAvofcZ2eqLGu1jK71CLshL9SryYK5Am4ZrWWK5sf8ovrw9rPXDD2b6B5YQ1pEkY3jJ7",
  "key17": "2knK81jnxD2Cpvh7pQ4sYJKPrUkF2Jdo7ySESXYfSxpHvFDTG1s41kzb4hUsppGWuYGE6YMuATsxWPBe11zJ4jT7",
  "key18": "UVu6FFGg1NZ5DYZ4Tsz6PuA7qjwxcADb2YiHnpPY9RmbbZVd57WWTi2ZgDQsEvkjTwUKFLMMQCe1k6ErSrvRbdn",
  "key19": "49RCcoXdG9ncB6z5HFpReUszRmQ9VdTVw7CyyQECfPXjv4d15WbcRuk9hTZLvRgWGJR1j629pLX7wwhQ2m6RHoMp",
  "key20": "5Yd66uVQS94yRf2cwYv4DuuDkCC33xcAVPwSrE866bn2my62oJ9R9XTFLprNY1ytMmfzKN2ouyJHfSyn9oc3RFUr",
  "key21": "4Uxo8Uda8Lai4esERLDfG8d1jaSmRf68Zz25sKTBawxhnTtP5JaB7J9z6iZTjgR85z3tydrUn8NeooRnQDRpnWsm",
  "key22": "3qBLVKfoGcYqyBSUzFXJU8XX97hduE5frF4DQh1y32v7jfUDbNhdTLQ47GaDEVWbEZB4RekRs5SaVDfweNKAmBA1",
  "key23": "39HvcffpMAKRktXhsJ9cWSPKhypc1AUiaFb5Lz13B1tMiFdshDRmoGMDmVeoAhVmDYXo3fNm9UHzVf92xVavmkTp",
  "key24": "4JyMv9YC5xGZW47eFV6wh8c7QkHbwihgn1ngugNcegSjvbDBNCPuYg2RDJkcUuCnGSbqYjGuqfKuCod5HNVPqmUL",
  "key25": "4Wg4vBz6HeYmo7ZMpZzTSaGDhq7nGk3MU8Mn2dvN8SM6Uwr6iaaEzrpbC4UVsipGPJj1daZAGzsGyNtmKuxrQTv1",
  "key26": "4BeZiEWQdtEAWHt4PUgRtp8u1tqPGhfbupGeDee7yEuTkoSVHNi29Bfp62PXWQ1aaAeBcGHNGe9DqLCLeiVEA9rM",
  "key27": "2bq3ZkXQkB28LJ6mrp1mCpJPV4PUKjhXcvJUVsVKEsZqgfq6UejaguxkmgEHyHxww4pxeDQfYdTmAZSmYhkmagJJ",
  "key28": "3Ws1pJ6zDbbybM9whwbKGCVPRJxT1pxuKR4UjYT6Xr2eG3osjVV2vT94MNNXgbZmPZRdFWYBzLL7aDbU3Sabr7SS",
  "key29": "2XEwWQ3XwXAb55Zj3R1X6XHN47pSJf7Da7VzVMqC3HTG1AX5J9xpZvapXikAfHuRKyQY2w9a1jHLkuPgKto7Z6jg",
  "key30": "2sbyM7WENf8FepfJaUtLi5ZAxaKByMtKumaYf7jzEQaJcmV6TsASJrMCQD9EhVE1sQAX2brEEf6XUvwHFAYBSpCK",
  "key31": "dUhg33ckNETqyWtpjotzQQqqNkoWaWqT3NhMZygMinmVToreg8koMLBtPZktDujahwfZQPb2yXWKFDdFuKwZUVH",
  "key32": "3sRtkCLg3eR8GfmCuJ5KkPoCWE3CT3rMNTKv8e9fyBinGHVpFz7dc1BwFmyEZXRXGHSLypCdA4YXinvjTkjRhsb9",
  "key33": "zCNUnwY2rFQdPRwqj8JuM21V1A53BEPX6qtPCXJZGpZQgjCTWGDNntPWuyLxkpRjfaReJnX2H4y3fx3Sj7oXBUD"
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
