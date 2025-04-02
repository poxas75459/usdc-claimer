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
    "eFLMTqk9hctjVBpGfSo1sayKgmuLp1AndCktHezLGpy3EUR1VbAzE41owMEVppiL8NUWgvsMunubekXoFPKgfK3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39Ta1ozgWHMfVj1avMCoBAd38ujnTXXcQVwhufFdbpcaLkeniEy2zJ8drR2FhyDK3AiP1YRZxsK8qwG6ce2npoAu",
  "key1": "5iHu48AqdssKhHxE7CTeudzfTTxjGxmSXYUsgpKYBZwNfVBLrYXxvdfq6s7igxskQuXv9zbERBNg1mAKRJVLnwDx",
  "key2": "4sKphLYkoWKuCFcrdcSeK2Nyy5HHCCjjVjWDfrQpw5HgrAzSCRC7CFN1ZozLMxvR3bVmQ7YcY3yRRZbRheHmwMSy",
  "key3": "5gz52spbzsDWJtBDttcKQmUvNTkzYcpJmswB9UBLjnvjpCDVoPSvNQjkwitLujgMTeFk51ZxTBLqAjTCrpjwbeGD",
  "key4": "JovbouDzJgKoiCmSiNXkV3VdXYXgZyEPJruMY2HqwE14KzNL5HS9qyRyMbjnBEbDg1gVMfr2FXbBbNHn5VKw4Pn",
  "key5": "5Ae4rDSWqUZpNFszhWMRgKFdGy26UL7oKLnN6y474p2EWdQr3QwGD6Ty7aDonZHgXPhv8kbFAt41ok8tdnHg1qMi",
  "key6": "21YAm15BftuRELq9e3fLY4dDR4Uw6abCNadQVco742gsjQiymFrBZMkoeTm2fVBzKoXRp2PiUmUket47CH5g58iP",
  "key7": "5UsTs6oCsapQRFYXoQTvPGMGU5xMzxof1rKg19g5m9Bjm7UT2FYiMyg8NkBcpAkHPEUQDF9jHvQ7g6DmQ5xQ9uyN",
  "key8": "2GQMS9U3Pace7J3fJVEpqQ7VwXePz7KXbYnfhug7k1fc8z2gpQD9rDrcRW6i5HYH2LBwFvVU9ZRVCCdXSgJP73mk",
  "key9": "2QCJagLhpQpzwsyLVifFs5NmKQAjjWx781q4ryh8c7aQFzCiLZDoNWTm3vaCMX42ANTMeNF8xpT8V3nbzpouWK4k",
  "key10": "3zLxtif85amDev5hAP6iqyGCwQ2Rf2mHHqHCYfy3d7HF2CuzAsg2GbqDbNTCnvAotBYtpnS6jr5wJREwedb2rcRZ",
  "key11": "3cSh1PF47GWr72zkadHFpzwA4R19MWWS92GKrX8wCL3U4xf5BLqkyfKrmqbNW5u36qgKkEUE63vD1ZRTbiiu6jPS",
  "key12": "58cfudi21ybBFqyxQwNV9qia5ZsykPDbFzTFCL5cmpgYtJHxtrLFxruJeSYVQjsnMVJ1PsGt3kJwaiB3j1MDLLce",
  "key13": "4cF1y9kdkoetfRyjYX2qVKPYicQd3mpgG1QR7fe7GFXL358iFyVs3hAnjdmzn6bLHAfoYtF2Fj6XG9h2eLMaYw1C",
  "key14": "5cSiGt7bmRcLfXUL61Rg49K274Lcj6ymmyyFeZwEXsvTMis5vspWXzoMjgEJ3QfEyYZA4D8gtUk55uLpbB1RFoDU",
  "key15": "5NgHW3rMpMpoZAJHrCGEdvGNaQSHFydJ7w2X2VjLdBkSHTk8c8RCSH9m1MKUqRgWaq4YN3kzudhQrvopPwnqQzYW",
  "key16": "5VM3M5xH28CUPJ8XZVcaT3uz6VvWwn2zfCbgStqNdsGzTQpXgHenLdVxUJFrAa6k8UXj28UH3q328jcsPnKGXT2G",
  "key17": "5krJVVjJum6t2di6vqceU9ov9mUKwAYG8dDkzk63nTqLEpQaQVuecDGQxFtcB2iRtQK9vMM3SdQq1sRAs14EwSnm",
  "key18": "fLjJQSfWP7oQLsz6BYYFH2wvr1KTX8wkfgicXkovUjU3bPbWVkussyBqJRM846JsGnqfgXLtEQ2CNvFQoE2ots3",
  "key19": "VE2bcKt4sBSFNo9oWe96oQ1qYWMaZtzhJ1tCvKW1pWMba8uFHpvcbDpngb275Pkk3AynGdqGXLRSpgUPa7cuGvN",
  "key20": "67iAMLFXHa98qxs3PY5M3qfnSSWrBhS8FBBq7XvkDaV6FsGwGCFAnuxK82EbcS81aFUmKKbAAneySHqLa4igqWBP",
  "key21": "jbyF5gdpCXdfZnggqJMVonuhWkYXgCpw4MZVZCTo2GbJCBxGhpJSV9y9sLT4h28s1uoXy8HJegk2rnBHKAwPyGf",
  "key22": "sZzpAK4EF1jLV488XZ2NodSzVrsm6MabY21phjWRfxDD6Nrkqj6B2uHu7dQGJPgWNZLKhaJCgdtpEGLvmjauHGL",
  "key23": "4L8jraAzLpvRgbyHy9tuWzogqCTCjmKoBpyrYRA9T4DLZmiWybL4KEBCHDXYMaQSf2EPG1GqvUpEKXBo7SDojvM1",
  "key24": "4nPUDVxdwqGeRJBhqxBB8N9sA4LPjPrtMK5qKpwotgLrVQAeemoat7vriHsXzeK7eMPCzYQGZaphnpZfeT43osPz",
  "key25": "4HrNF5zTLY6UCAQBwuRRazebrucXCM3sVB8SK7MMA25kTpTvne2vL6YhU3twc6HM2pJPxyj8uA8aqQSTsfehDR26",
  "key26": "5vPeLMDup1ncknPxmuNjQQZ15C6b7L8bnLF1dttmdAYxUZCWfs8WgKrajSsoErTyZmkuK72mGTCnMcUia3KYrQSU",
  "key27": "27WWi9acFonPH2AQ8V6G6xzXRdW44b36FQy3GcQ5ZZetR8NApXpC8LC9Wu9Ah9Zpi1fgCEyWS2ytN7pBJVKJMvrR",
  "key28": "4nNZRDejFKoW1kcF8vAdhNZ1niH81gPNFcxXZVAr1pjajgkKeFjgKwbSo3ArxizX5SdSNivKydAAMxMGSoqrtaWd",
  "key29": "2CWgB3diibhu3hzRYF259jVqJUFaeFbZpr5udzYUPtt3eUc61fkV5PtmeR5uqHZUx4TLTFq5fyi6VnAiYEEPVCfo",
  "key30": "2yrknpunztcuaukdgVuD34YqzgdeUR7AR2fbN7ddXvfRoAy1QcvfWF3TBfFGRwVfBUd4NA6uRxRhGkEiy12wZ3MS",
  "key31": "4h5TMEttqoHZBuXKDnsCr6t4P1MbpzR999q8BabS45DsNFPDQoAPUDjnJC5JhQ7LXoaPcfg5zo6AxxRZXuHGrn3V",
  "key32": "3tXxscxbEiBq3A5WvCpdtfKL1Lup1A3iLkBTojr4JR6sUeJ1EvyvDF838hce9J6zj7zu6WFG6wwyeTYd5seRQNyz",
  "key33": "5EWHXgkkuRB5ETCgofy5BnFhpaRhGkyZZFGUnLZ8xBTVv2iNjL4uMJ1y5rKpvUKCmKRXyEPmCjPUHfBhVvRQVppV",
  "key34": "24Z5DJC8JsxH46qC4a5duv6zzLMkwLeKV8z7wLyp15Y1xiJxa5LUKfceeYRiJrRLzWad4n3Qk47tZmFAor5KXxQc",
  "key35": "2YjbYFACjpyqpLBUxJmYd2yG1eJXFxCMdvx7zEC1Upk1uGx2rRX8ijY4PoAvQUB4pfqPFc1xbFZ37ptrnrAEzJEE",
  "key36": "4j92nQuSKPgFzqUqu5ukFATG6ynKwPEccrTahw6Wo5cj2VDg9aZYZjEyPVhqvxDzzzwSnX7dLd4SqQQ266XaSn6T",
  "key37": "4HEY4pkiKVcBN1rPSQwDTX4YhNMyxwmAzzsmfjVRu5jf8g8CWeHFkEwY82pLMhcTsgqBTpghir133JjcsdqPhDPa"
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
