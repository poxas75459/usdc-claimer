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
    "3euXrYAAmZX7BSSswcaBZdghQZKT6cddmYnP4hGYXgwndkTNsoBXGYJsT8Yoxr6hQyfnY1qhj9VRgfPzEWahm1wk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HVHpSDTWeiYQYj25Nyf4R6bGpoG62y8PG7mgu6aR5pexsfjvi78gRixmoRHbkKFy2fk3KaNCKTLQ3srVeiPCMmN",
  "key1": "5mp481qUMnfE3Z7EacHXCUU28XefG162uYwZCShMCb1XAaLk3dY5MrUf9uBkBSyXUgJi7gu4sz5HLPiXaq7ZTrKU",
  "key2": "3RBJXH4V1wP1RWkmeEV3kqEShRHNHuvKmwWV1TVupnFmBc6NnXK7YSXRRh51ccPSGAvsvX2sp17KMucovZk3Eq7g",
  "key3": "2WsfCTWkq2KoSbdqWQrgq7ckmS68iHcEX9qrPSRykAtAQFXGfxe9LUKr4cSmaWZC4sS3CKwRiwTxZKpbDqUkYJFq",
  "key4": "61Xsff7VTbzFFF45eJCAZHShBJQAfKcperet1dcwr27qycuenB7SgJF6BVkThnKkbgthLC9AR8DnrxirNndNB1cW",
  "key5": "4i2MdUwQM7Q5EY2Zz14D2w5y6uwTPzhUCT2qXrxXwBf72Yr5rGFuv8hLScH4RfhZsqTt7oSoXGwquXtdrn24RkHw",
  "key6": "2Tf4dsd6Vqzso3we6x5YaJEeYuNifvk5fwAiVKkrwpxQkzU9u7tdDbNFhGU1ty5AUmSrNFDDqzB9eVoX8NVu43Bi",
  "key7": "2txNjzuTFz5f5n1Wk37gQq7Xok1EAo6EKZSPLhi3iFEgQfan59SroR1h7vUezwfDvAU1eevp8xvUYtCCnmxXvcxX",
  "key8": "3xD216y5hFwzUE6zxi9tgAi5oqnFrTZ1jTLLiwBG2J2gY1RSLXCgt83F1NJ8vPMb1QXURVU1q4FkxdvztzqewaKY",
  "key9": "3ST1Ei1p3sngVPUUHj5aGftNrCZSDkkUpgXn5yTxj1Lto41BRAzJG3YZZPV45XCHTGTTrPy1CSAShf2RoPHrfE7w",
  "key10": "Ai2u3aZiY1EDvfVgta7c2NGo1NbPYiJMAWmKVseWvgpARZSdN4bFDuAXbgVRMDEbkMKWVTZtJW28AiCmypgGT1p",
  "key11": "5wasEpXYfGNxdFYi6q6aVnrQumHC776Mg9Uk5Db4YDL1YgWuMwVoqFDdPaPEy4iZ5ntLvGfAuDrqqEUDDFURDmRb",
  "key12": "X75kM38QSgwLT124pQWcVEps13ctVSpkuzDWUkVeoEzyZijV3wnMuDemZWK9xQ2jg9Q3F3b8DrziPKn2ecDpXTc",
  "key13": "4rWNUbtfzasz5npp5kiTKyAPsHiFqnRiVPTMbsrJN5z28JLVXSUSu8zvSU5XgJxomCJtQVqMY95zvh6htTuQdvcm",
  "key14": "4tN2UEgDW4JC1cJjJJJRuYofzLATXvsAFCCbAYWa45r6LWMEBYRgDGK884tuqF7ekt6LW9WF7SwtJCVRpGBD9Jhz",
  "key15": "4UPSJvzUf4K6yW2xQt5jtQVVnpWAGPutj2YTES77Hoci2Gt6CfKNM4Rk6sSLPpE4REq37JSX6DpB2fvPJ4hSBqbT",
  "key16": "2Xjvuc65ahxjsJBY4T83e1TkR4aAabukJdLyHK525YmBZSyGqqAVTYExrVhAVeP4fV7V2AUV7fvMWFEicNmhaUvh",
  "key17": "2w78ef1YPPRb8eLBprDPPqPLsjkyni5WBkZx95FEBjEq2rjHkwDJy3ZFwyZ5WXpopqjTgqPiN1GXsyi5i6kqGUKS",
  "key18": "58m4ZCoH44AwqPKbGkPj1ZfaXqZ9J66Wj1eyJBni3PgCYYiGJqawXWSVmxMRLJo2Ehzhuu5mVBM36wDLszgkqDub",
  "key19": "5fUzYkz79Tf4qv8zJhxwkvFDeVDJGNN6aWZvqJgJcRg4wF4Z2T1xfBv79mwS6eoJQqeGAEDFWWVTqLHaGoabcmji",
  "key20": "3aMiC3dQAFVFz3LLPWxW8SaxKeF8Y2VG1h1wV52GAwo8yBuaB1QbmjEHqWM1YFJHuBt6fCcyG5weYqQsefRprcQS",
  "key21": "vCLLrPcKwCqNPRsQ58uaMvrY9qAVeSa5BDaMNHEuGF5i9joexV5WuHV1hBoPvimmX8of1nW2vdEi6rWe6b8TArg",
  "key22": "4Q7m3Njx4yf5YoHqRQzRzXsvkAGCXi6cqNjzkNHyditmHWtXUfh9HnmbVdhosKhwXydG2fhLk2FCEDfGbU6L5bAu",
  "key23": "5UAWyLhLxYEKYWDEDFeuHJNR2CMnS5JozMg2dAnYYi8FAciGExnBHdMrntEPAgTTvn2HMAYXUZpKxPXf2z7BbbMi",
  "key24": "3Nnqb6pY7XWHsCHo8LWAQP9SYHQGoxKZYpcBYHzPVoBpApNTVzFgSeMTt4A73sgbZcb8QtWTcKkMWGX2Lcy6NE1P",
  "key25": "4AweidikCeHdSjdasffFgeyLm6d1XRbvipg8YUk9euHzf8iw1phg2iAzgWPecUymLzejhBrzcRdBY6oE2qjztMJv",
  "key26": "3btiHRBk4DXLcybJX7oeN7z4uuHG174HwJXdXggjh4BQTQsyPCQbCpo3xrtw6d5s8rkEBXELFjCuTqceBL7SVfPn",
  "key27": "VPGMQ2qHaR7BVcSRhQH9Mcnjqg7imVsoKQitf5diH9ku58idntpQQJCshCSwhdMHzLBocyZTdDU48aUQV4d6i7s",
  "key28": "3eRktSuuywBQQvMivE73V2tEF1t4d9srNqDYZoLsdYra54HjNxgEf5nJBJVnt5LtBv6Kx78hazbeVJvH4q6pKCAj",
  "key29": "5fYRL4DvQk8g8gq5fdK2A864p14r65xP9dKbSagaACJcTVMr1kWx63BivZt1v6ryp9iSRvffoeCyrfW4p5aL8A12",
  "key30": "62mEtNGyfvjLXDecQ8qM28wgXg2EML3MXgErZj2TajGnKsA55baYHuaqerZLUdfQQbPytTncmArPvfWLocBSSEwa",
  "key31": "YN2c249xtzZA1kbgZRVpDRwnMhDG4maUAghM9Gx4gRoJkWQWqXDwsMZbCdJCL1W2s6pv6J9VtidZ3gxyYgFKTt7",
  "key32": "2vhqRqqtHGSkx3CzFQfP7zhQLDG7ngb1yfjT2s3GAwxaWy7p3Eo4tSmaaJsBwnVRVB1nSKeuFggZ7nQJTyPFuwXT",
  "key33": "37EEq7wqxPFMXZSMbn8iqY9TdyDtVZc5sArDLWpdipu8HQ5fJieVX7eSUDFeoJD8Pd38pKMTxGoDxJDe4z4PnkrA",
  "key34": "2qcQMpQgwBBvSFVemQHsuZWm1izYzgCYtojvP4MJrAhGj2EAAaU5z3BqULKfrC5Bn6QVjYh3UKLe3DUw93ah1b32"
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
