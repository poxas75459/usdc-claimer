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
    "5Kcptb6ZCQC6Nt9RiQDv9D6Zht1bFmpsTuPFT3NUUYhsYK4SAxAbycpR7W5AAC3BQiBm4JQjdfQLiX8NoPXqRPGW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VU6xKhkbCY12S13UpsSvHuqodnmwMoubYwhgD9xf9GEkuWpWMqpA9FKa1VdGtSUBqUeUWJHveFZ65en4kSh375H",
  "key1": "342XHpoRtq3LHRtjSLt5g9evXZFyujqMan9DkvTBtKU1Cb7XAro9MdTH3qWMtaCmuNBBvycbRaBMohbmcNXZTnjF",
  "key2": "qZWawJtVSXGbysEPB7CxtbvuVohaqha9W23bJD44YsLge5nAqZS4j7cEd3RgsoUtnmenGX22bf37ykrZoUsHfYf",
  "key3": "5Ym9Z9UDVpVzvhA9pwFTf7HHU3WT2VxWrhMD87Qh92t2iq6MvbpmFrADFWs7LghYFCWzJs3t7GdwBksZnG4DZtKx",
  "key4": "2Ewf7bmsEimsATkAdmSE9W2p8vzarz8BrBfi1aZ6T13hDUGeiGK3qy9XDfrBLRZTtMNWPrTGPGXBiwQiizafeXPS",
  "key5": "f3kPLXUWqtpWpcf4qAZtJKg654VoU5aEDc8B6RkSPRrWUbNaHtABs2uWnd6N4xpFstdt9mftUktHA4kd8qHf7zG",
  "key6": "56CWMRfuDyRvGsc6LzEis2cAhhUUaryVPmTZ5j3fFAnmza9b3CfhbJxP1BvkiYGcy7LvtMGLDKigx7zEQXm5nweN",
  "key7": "2DWTP5bKS69TQP7m1UMLW3awuG2MHm1RCCpWUJq2m4TaAixHUVgxCWjBa8ZHJmPxay1UiwsUDXr9fLarzaeJY9pJ",
  "key8": "4kSeSJsAKPRthwXBNdLBeFRrFZXTCjjfWTGDmBFDgo27dW1xHjor9aL54ipKFVzHCfXAdUP9gRuy1harJBCt2jbS",
  "key9": "2JuB6azAiGYc7WKuXNQoZRnEpYmYBDR4pb4vpRSCngksFzdyxj67tQUkFvCN3zeKVd6VvQTn7BzTTS4JtB6nuAQQ",
  "key10": "4TCop66eFX9sAuFWLt74PQJwrFw2FLYybmGRp6pJueLYWuynqSbxCQaEiYFX663Wc4hhz5Ad8x8ZWf3r3iuo4fX8",
  "key11": "2uXMMT61jwMWKMJXZKQNupNEkxuqoP5exBPj6whMBzHdge9HdcuvKegvVHWxso3hkqnDyLuCWf5uDf2czAvfbRTM",
  "key12": "2F1vCLKGVnBLLizajpGHeHubxEDGkjndNh1sdj91RrjqFE38Btxd3JQ2aoiHkDvSdvVjwouwjWQezNCf1zTW1GrT",
  "key13": "57hPB6oGhYuNsAbBYMDWbHMEZCmDdoe6xiMe2Z6sBpGR63wRc1941rbhhMgZnk34KY5uXsPg84tR7D4ezKrNKuTy",
  "key14": "t4SRq9V8NvETRQv8yqmpAoDUW2bSR9HGEFQgSC6LH89NMUBCbuSLaJ4Zi3aVZXSCv2NqG2iQPVqpLprT1KggPGG",
  "key15": "y2nvvR62ZiRjGeY8n3VQfpLs23BrnS8xx8ZxKdW1J19kNbV6FuaR8d1hYHujM5EiKT9XcJPEAxKLtukvjN5TZit",
  "key16": "5923UW1sCLm6e1LbRtGFEf64E6UzoRWztcW8uDEJTm6mBDVhfaRxuHTDCBUmBxip7yCJhmZTg43CRuFcjeJrt4qo",
  "key17": "3JrpZ1nT9JHTR6LLbGSsjhKqueAb3ZDWx93mCGtRonHTjN33V2boBsLU1ikxkSqeQWz1kktr9CXK8QsACtCGb7no",
  "key18": "2T7ELKFNvqq4dm2G5BYvMU8LhX4w7Svg8snLgxDXgmBi4NKMbgS1VYmHuX2rsioACnBkf8LvBaMFixxhqeE54iFJ",
  "key19": "LR893zfwptKCHcYQbrUbvXEGozBSZ79CCFUygZ69a4k38DPuviicijt1eKTC3b4rowQaQf9qeJfGwmNihNjkVd1",
  "key20": "3aJTS6z3qu5pMdsGW52drD4so7iWcGUdEvbLoR7uUUgw2ayutpqZhcoBNFpyhB3FaXNHReZnLo2C9KbRgqgpxqe2",
  "key21": "436tLQo2eu7kfj8Lksz7Ardctde3TqqiQqCW41EiFvxPxkuFZQCHbMtU76HtAxJ7SKeWf9wTGQUtqVzvzLBmTZX9",
  "key22": "5BCVwsDrJYYDdCNBPLV6NGgmN25NNeKVceQebbZnV6xy6TWiBvTjC49HuDsTDBvLMo2g6gSEWWYoHvKJoWvNkV6c",
  "key23": "L6QVevNHkhPcDi7RU5mGQAYnWNzRyapb75R17ZYuD92JMGq8Yhb7iwYVh2wpEWmteA4tbdFpwz9WYLWSMaNqpzL",
  "key24": "3XUYL1vBMJRKgUgkDukdsvTBc3ZLEyyagfm8fgt5qNq5hJUZQxn6ACRD2NR6UPHRiMiobkx4KGXdYJjA9uMsByh6",
  "key25": "3UpjAtgrP9tED4hjuVVC2SKdTrVYcchXq5wtFuqoKgi75ZVTCPAEAt2sGgtaaYNiQrPVpkuTdwPfvh1R97aiUVQX",
  "key26": "rV5GgpZFQfK9tsfUdF2GybDyMi17iBSwqB7RSvUnro6JTTr2iBRy4pgaJdLvMYLYzPj1yNmf895rDgBrzctLhSG"
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
