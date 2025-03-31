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
    "6LtF4HV3eG4aQsCf1UeKEh2EBMR1N456zr5b5tvuv3KHkkW4udwyt8m9swpFaKnexE5JCjgVU1mmRFzQNCiqd1N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HKiXo72KtAfat7GG5VKCEwYGm4jCbQWtXratuSYdeDuNqxic9JbvkT2japD6uL6EoTjiWkTWTVPPyw6xKXDq6be",
  "key1": "2tprXF1rTA4jjPJmnPBp418atgJrV2hadQJbqEz6ghfGUqGFAcyvdRWsYxUw1ZVZuXziAsJ9PjNkUi83DiRVjcN",
  "key2": "4rQTdoeNEbJZWKp95qXpdVisjdH2SGWxe7THqj9seDBBuKYUG8d8oWtcWE1d9Ywnm9aqmtFszgKenyCt22z25Lez",
  "key3": "48i1E7yFuXaGiWSnvdic59FGzbF5gAgQ3ZYken7AszvbVFmGA72W5DvFXHSKpxZd22ZdmkDGnt7pLD4yrXpy8Btj",
  "key4": "9gZbrb5znuPb7kJiK85gi4XYs7K4kd5yqMyzzHb6AMZSbLGekxaY34W9ygwzWCtBNX7Xvg9K8jdeBrR1WHMQof4",
  "key5": "71f6EcstLVGHqJJuuWWetXXgW6pdisLb6mBHezmhBAjsKZmAsrqSswAjWhAWXvYFFaW2PpMSPZFZ68Eu2zwSRaZ",
  "key6": "io7KtRd6jUNzi4iBQD2FcEnf14NhA1LW1D18r6aVgEww65u5ZXPXkQNkdAYBLAwUXWkyL6haHn5ZpQ765jPxbYo",
  "key7": "2voHUXnJSFbbYN27T3rRoeVsYrK3NCubw98ABWWt6c9FEXxt32TWnCU1uhuULBcvesK6nWafHJZq18bLMEgFPdYy",
  "key8": "2L1xuPDPeQrRwNfu4GKv1TyqT5szL3pFcusEgEjUH8yZi4WfPNbqQU5V9D8pf17iBfSZDbpWKwoJdZXdxSJbZ5kR",
  "key9": "qiQvXFX5Kods7sWGFDDUp4RpBEBDy7UvsyCs3bQq7DJf4MVACrUBoKkCc6ZMxiwX5rimD8tKLD36YhvkDyMMhuh",
  "key10": "4ySUfNdBFGbUphoV9HojD9829YXgmoFR3dBxi912zaw5n9RjpTdm7tmAtiUfuVwxeLNj58MbKi2HLE4X5jYS5H7",
  "key11": "MP1q3XpobHJUVjqsetp4gtqBMRbcZxrfBZ3rRM8RHvneNQFKRRbHQHCgnuvqSk6kDh9tgxhBQ6NUSPfoDbhMXTR",
  "key12": "4KEXbH174TojvV81cXKy4AY12gXv36WaxoNZsdjhZ2WxRGvFYHvUu9TFdVKBJF1iGrtXGKnUDXfb4F8sF86BfgAf",
  "key13": "DnqUwotZMcVjHX2Ja9fhccjDk3yFf1AREpEqtHE9J1tgnR9FzUbitMCFZmLSags7W3djsbvj16tJDRx3HCFRr8f",
  "key14": "2i4g5vQggwbJWhLHxBuxbnFzN6bXRR6AzAnxNR3gqQg6fPbfukZnKbAfTL3kNW74WKbw1RWbWBS9dsQ1Sue12Gzx",
  "key15": "pXgeT1TzKqQNibBrdzt8cBgVrLwvRKnJQxXW67QqB8z1iwK89A6GceSQ7jv3yVZMiSSCZ39XJbQpgDuy5SPwbXa",
  "key16": "2yrGXNgXZwSsQR9rB95GhmQwr4NJhKsrX18yUL8fBtMiQandgyhiWSirBPsYHMviEgoXodhCLwjtqhhvKXD2Bvm7",
  "key17": "2FL23nbL4Th8Eqc5AyDLZuuVTMiB7hKxYpD3wCAxqLSHx6k9iex9AVdac6J7WA38DgLvq1YJjnf8a1iKedB7r6ZE",
  "key18": "1mGh6iSrCLEvPNQLkXrkwuURKqga8P9wsXwGZGYk9h8GdEfg5JJcggHbVPWNharHag7AoeXvuyHeBGg5HrE4Dki",
  "key19": "3aFwNRwrdR6MG5JAzxz5zShPT6UEE45u6rKiRKPTKBaMuMbGhWdjzgxbK1ndeExU6sRcwgryZPF85NqefMMfcKuw",
  "key20": "4unbbQocPEwsY6gcWr3pkFcns8VygToEQ2b6fpMgakfzfu8HSYk5RR6TL5mRnFcCQMGY8w8wPKANdxVT9ATBd2eW",
  "key21": "51otSam1Z6Ub59gAU1Y8HhdHs7fLFEGvZrB86fCJGwsmJ3xaatEPfQEpKqwyfscCVMa9pKz8KnP4qBEV8PXMm6ME",
  "key22": "EbqjrTFoZjF6hSjM5zv4mv6Lg6SBdMXi3ijFaQYSziigvNAG5vtghJXWrbJtFebZXyfPbn9EwzwY9yyYxkQxceW",
  "key23": "d1hwwUz3SuoBWt6EUiQoRhtAEGdhEFPiHnNwPuexrkwgYJtRjRarFMaKzTReTkZSMjgR5kWEN7fs6vftJG8DsKb",
  "key24": "4dvWBPQLx2QinPnMx4r6KAiQVhf2PmEaRPYr37Q6czBtCKzrqzHvchHvcXTicHtNKstZc5ytk7FphVhS9QwgiFbw",
  "key25": "3cPRFQmp3L5iJt1DWBKLVoNqfM4DYFAgwA2zQzunL9nPuGq6woPiactSNoFQuhgcc6ck442dbhfuhMbiMGhtmNVY",
  "key26": "3Cd3ESxDv87rbxB5DUaJCcobCLYLrcVn5DDpG91zdYRE7crygnSesqBVbEt2TCt7NJiKd1zgCVfgGqcqD3YiEzX3",
  "key27": "4Y5N8tE6N3RF2R8Jb3B9JkwBQvSioHuuxHayjVdFundiXW2cLdQBZgLp228SfsbTM3uiXnx4n39rZiFQGcuf91CS",
  "key28": "36gXHEqeEcxU58os6CGRYxH42moZ8DykHn5rsrT62c6NWMPEKWXjfUBLPhvRwt1Zs8R3qCmaGSnNssNNehjjHKUo",
  "key29": "3VyY8U8j9gdX3urgXYX5LtqJdxGrAjJj9as7D8WhY3uVrXEDPNg32wVPFg9Hg2puVwH5fnZwkL6UPSYtRiemUGdP",
  "key30": "2uMXzZFq4UE1VtTEMzrXXzeYDLMTFzSYjWr5V94jAAHEyZ7RN3wSphj2CYCC56Gj6khsHchmcvZTuhusZK6HPe9T",
  "key31": "51t94dnPZRRDxW3BMgvomrVFrhDWUAFEZTMWcVmh3GaWcJnyW1PkdGZJkUANZkv3eJJb3qdBu2A8PA5GgNaFn6WC",
  "key32": "452QmZMFXV98CB45npD8N8zqZfnaYaQQtPRLk5FByUqGX2PSs6YxcaoAc5Dnm1taPvHuWPsP78TDaaiQtRRri81g",
  "key33": "13TZS2CZ6MquCbF4VrmF2Q3aTwHE9mCate6aXEexjMZXNs6bUVCGhPSCogY4iKXBPRQ2Bu8VoFBnYE5aaGVECRn",
  "key34": "2cDoNZHAUKb4U3L8idZy7srky3UtKCxseRk5DYiM5KQ32tsMTWTgjNVCT9tWThKXSCMcH1mX1WZgd73PsKMw823R",
  "key35": "C2rsuSfRWBLBoxWSpk8dASeQL8nG3ZruwYXqxTCfEs7bcPhvTXYiJ742vrgkVxvZZdDd4yMD7cFLtisyvS3hCxZ",
  "key36": "4yzEmsERS2KbPDJfLeyfATQg2VBK5vd9eFw7Zz4Z4Z7vG5JQA33G1zcJ7ZCFAghbwqkMvCf1rR3tdJ14wsLegUAw",
  "key37": "65BjkRLJY3yBhN6Tb8zPcoJwrMq3gHVJXjZjq7Mwftz8ucbpqyDLHxL1nheKniBU7CtMf6ZkR2pgffbR5dENMn82",
  "key38": "2rKRAMVVy3DQ3ForprNYT718WSBpgBHpr1VvjCFB3o54BFcrBi1YtgMvD6h5DdfXUitGDeb3ya2bUP2h33gL61ca"
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
