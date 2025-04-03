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
    "5pj1Rgo8NSjURMn8A77Yu25z3V9DMtZxs9dko2uWBw6qayFcKGQ11XLv4MdzZMQfrGzvdjSg8mWX8wVA3bSeeJk9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vuwYqq9CxXK1DKQoUKuHzGfY1k94D32VkggjnDws692931eAfcbLyczC75rpRPaoA8VFD1ZVsEoeojAKas2RqVi",
  "key1": "4gpYcZgBRh3qqChHSQPfxFKaBYpK3HpNTXmA5aDzB4TqAkcjyYmP9QXomWGnEQJy3RwVkVojEBCrb8F824a5g9nu",
  "key2": "GgRoPMXRSzocgNDRV6nsRvcA5fZ1t9jRCeM4XCFsoYZdgCqX1QdFW2MzZCcn74Y9ZXX5rLLZ1DpeAYRYqXCaAv9",
  "key3": "5UenZLMERDWrFLvdem4kjPoYDXmoADd6WBfGGi9udfJ76tv7zxF3JNvDR4L4pWxiguvWekMhf2QXSVmgSZccqFzc",
  "key4": "2ifofcohQQzDa4RsE4hoffGGZQWpV7ktKjpKDhbs5BZQpthxhDMzTg5L3nWoN5cWcLFTLtgqcFyKH2tunk91MWR8",
  "key5": "3nzBEJfkg3JkkSFHtUQnWxSuFh6UQsWbLvPLN8PY1whkCLWbUdrFHt9pBFAW4ayfMBxYCCsX57S2mS38z7vy8C8A",
  "key6": "5urE19cgQn52tiKyHBDok9NFgCAEkwtEdvHXoggCPoNd5jWMT6btjWiniJSmJSGs1eZTV9ELMYmrwgUqRZhXsYvL",
  "key7": "59u4H5BWshpweGTWHL4s9hrEvmvh4B2P2z87tBBmc5WzogQXpz7q25mS2xrcd2kCLP8ynehdFXu87YJjnF2reZG9",
  "key8": "3D767ttWMabnwSsX5jwvuQLGgagstV9ifP3fkCk5XPwkPjqpwzqfNq16nnfvfccxM4LqhY1ShqbbSgX9NxQVAadF",
  "key9": "4DdpJfvZ535Aeax8JLExyThrMSYEQifywxxaKcwE3NbbLENvBL3nv19QPkL2tMZaPEQTgoYzUKL3hZ3cuHE6G49D",
  "key10": "3bUmTYax1YPVrjRh9WdReHcxBaGKUbdAmPcu35ep1Jod6Ko3DPGQMrkpU8Dr8fSbeEPDQRu69kSq8L54b8Cwrxsp",
  "key11": "64JJa6pHoRsof3tWhQHeGy6gLTAKhZQipYxZtJ5kU6N2JdFtKWKLYGHXm8PNzHxYqhxZiQWa9NS3uvnDkpqrokDK",
  "key12": "56pUViCCV7SnHAXAnCqjJmsWujSiXb7nZXXKCdHHRKwbCNDsGnqw1EGLdxhkRm3Ej4bAuKS8Msuc3hrzQ2gr8hRJ",
  "key13": "5MEcx3LANY6NRMU1252D6yhbXbPsbjaFBfVchdX7cZe5DvCmCWsJcA3R5Dhu7gdAVjtC8cPpRX1gha345o32ShnK",
  "key14": "VaLAZPNKdS7rXx9o3caCZrtRMh7H12GZNpfn7uRvH122pcUeyQNVcAyuuPp2dEmDAHvDg2vgNZkEfpUkBgX87Pt",
  "key15": "24QvkRAADWL19a7nLFsL9FhXigukhWbypZpZMzkJqJ6Q7KH6dyG1QPV7ubhUDBNMi7vm7ZsuJMYvJ5BvmcdtAknx",
  "key16": "3Vtdsd3qHG3WsUCxuuxCP5iARjSyz6veD3NDW46mKuYnbNCp352rjXZWtrFC2Wh8USy8S6j6MhGtESUh5ZUrzcVY",
  "key17": "2pzwh3pGDJsBNr87jKnbzNRuBPuAVo3rE4uogqSb6rKKcwMvBM4o3feZ6iUWyG7Qn92WDTKuZpeq9LUmHkBzA9jv",
  "key18": "F26NTXQvWLhXXgVgPHGrqFeY7w1Grd7UeC4CFWYCJt4GLaEQnQDdNbedCtqheMzkXNXS49Ap1uto2PHQCHTsfoz",
  "key19": "5JvtWs9bPyHWrGacJQPhb4X18sBNwULFDpBst1xivF9QtjrY6pMWxnCMkrXFTBUUjpmoi7M9bu2MNnERCBubMy9c",
  "key20": "34X27i1z8qrXkZa6PMjKjPCSBAbWHfDsTHwgJSA2qB1wQoumzAF1tBLreHZqnJtfxi9sTzjHHWHGKiosQezuAB9",
  "key21": "4jyFsTZibKjiAnfxkxhk4fjjaGh7Qs3keY6iVp1JrRacNRsWn7PVmK5WjgyjMjeavfVZDe764daqBf3wBESvaivk",
  "key22": "4mrYENfbtXC4a4rtzo7H9JVWkiwQTTBSbG67E2VdCRuhnNrTuPn375DzgAfTgAUzGQuABtuT2cDA9QE3hQwjBrk",
  "key23": "2Q3NnTkkRtKfLfFJfm6AafwkFEaSuLLiKcrMkBQk9zeMzcK67DREo7uXxZfk61xPhdBzLBLQMzvmJsEoJKV9Xfrg",
  "key24": "31aaStpGLzNwAx1YMXpWCvQP3ediGeYJrQDKr8H8vUsbX3FmAYRYxsXXCzEBpz7dwrfnsvqj5kiifEZQT8vFVH7M",
  "key25": "5BfysPsKBEm2YmBY2mtKKurHKyGzg924yu8thfXUtgjcKKF2Mh9Peui3jNE83Xfw8ueAtBEnMhx9hgjb5K8r9jt6",
  "key26": "rSqge2UU3YWA9cPS4qJq7zFaz51erg2fWHyKkex2S71rDGpb9MPEjq3muJjUJQ125kHRjJ4849me4Ly91wdKbXq",
  "key27": "2x56e7JrXCYQWMR4niUfLQ1wfgPuXx2ZvNSunQzp9T8KGzPqVSUfrcu136cG3WFhJAwkAQXSEGtsnuFusK1mCdCM",
  "key28": "2jfy7Px6y1689urTj4EktHHGqLU8HrYNChQCnUjvaNAuBFa5j7wHTL2cHyjxaXoRVE6XJiQrFZCVPiYqUi2CjqE4",
  "key29": "2nEnaBQNPV9u2JtK2xcHvJRw3pKcDxSsgzMFZ5RVCma5G5CtJrnN7wapAtwP8v5ArQXihPFv6hty6gNzdA7N9P6U"
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
