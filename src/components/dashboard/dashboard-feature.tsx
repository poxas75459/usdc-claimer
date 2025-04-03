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
    "NJ1m5G8dDzkfMxuvoKfpCSDHSrY1DhuCKcHSHTaq5kNPxTErb6ycLoTtnokwtvmGAAeb46Uaxfi5q6E2KF29pyD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45uAZ7GPy2pXvD5EWwPiaqroChhZZuQd7p2pXiofHseP8UssRzk9KEeejPjdQ3aVi51tqpJ4RgAwBCQECqemnxV5",
  "key1": "3qsNJ4qxCqcSFWwZYonDEEsWew1MjChphgxUaVNhs9EeDeqYaK5oCjFxBM5YjWVp6A45BLywxRHktmionFyQSJQ3",
  "key2": "61XRtuACQnu3XtHCYFatQg6HjfRZrUhK3bFwNUthrRxM4515gygRuJoTuJxHpCYkwp9ZnJvPThcDpD6VyqiGHmXB",
  "key3": "5s6vK19Fyvn95d3H5QujnhWUk6BbwSJHe3Fsri3WNWUKxGfirQURGwmS4yTuqP23qFYyhPVffDP9SMg1PNjHKZFf",
  "key4": "3tpnd2ks1Cs9mJj4hoQheynjLQ3dQDyazMaDHW1g93zJchMR7GRHunFS8bLP8ZKtFyVcqCoV7wkc55hHWr7Y78CT",
  "key5": "ApTUU7q4AXynCtfK39c1cdidFLMLSRnQLho1DupPsyzpM1gkLtRuBd3CyZ1tZS6SFtoqNDJijSH4NY8V8qUBuRe",
  "key6": "5aVFovGLwEHqK4ypXrhAPNmH6wttcfAN28WHG1rDCG8thTM6LJhPzYcH35GfSy2t3FwpRgZvYuuvopuugvE6exP9",
  "key7": "34Y158L6Q3QbkZZ59sxjYBN2EKNZCKT9UKKDTGQbnRYD8e1R7Gp8MscSXSZ1KgHdQ3rVyaV32yAjeQi8HgPKbhxF",
  "key8": "21GPoTomKVRuGSV62SS1jXRQxRPKF16jVgNSWdbbY2YaJvN1ZsETGCPHXCWM6LTScEPvBogJfTDftSiMF2PjKypr",
  "key9": "5Yi3fE8mw8foqQs1avsJcsvoFNZbC3UxDwZ4UXfZQDewQXh7ZabdNMd9RAcQLoPT8ASkzxr8S4vAXAKbW49EX8r",
  "key10": "2Pi3T9nUoi71XKr4rG5sBtLybpLcC5KTWCra4R44z1ztDQofsdaZXnkvzSvxD4J4sV9jQ9mZdmYwQowCyHFjDuJ7",
  "key11": "3h6VMAzgfgmCgvYHeMApbEKt8i93yY8KCYK1tQMwCFdYhLJYPK6zYRntaBePxNVdjtYMrecWNrufCkzMUjT551m8",
  "key12": "5NwuzEoYrEChENvaPf5XZm63iyRsYwnM2j1JB35n4fexUAMpRJKZ7GLuknpVbnh5G1iJ3Q9jMxBKoXWYxDqXbmc5",
  "key13": "48M6bv2JU7QGme9LqS894nbybdYJM9D5T1Djq7WxfbkBowCeRhvqgvN2K5pzuJxxPuo6k8s4BaALknpvEiUGeN2Q",
  "key14": "5awdNpESgNZfEUftc628p5NCb3APzQGUhwzbEjQvdDaGFk2RHF6vbX3eyrXiYZ75spXbHFth9RMHwmNaK1jtutmz",
  "key15": "3PsA6AGgoStPJTySVFbzFxt5YWXMo9Mqxr8okiup2oX3X2VbWS3BNLrhDG2SGuTHjUoNxKiuZ9DT2yUiTVKeokcE",
  "key16": "4BTiKj8kc1DuMBjYpmUBjLeaKktbeym9qv6HkVorPH8BRwkAZ4HwAiKf88CjGoXwSdGdEuS87LsASTicfReAwUV1",
  "key17": "2Z5fTYAzQTyUA1PF9sTNLGEindHUmPc6pDqv9ixUDoux3fYYMLMaU3yhQaMf2JBzgDGaLkXvTDGDVH88pp15WgkC",
  "key18": "4ddVqSNh5JcbafBZ9xineMMhCKp5jSd9a4CnKvTvqrjREbTBStEnYwBH2Cq7ygY8Z6v1TahvDn7M5VWibsqSsQMx",
  "key19": "3sdxsm544ajtXr3jU47syuHP14Fymc341dsuSiNADGsFj1eqM8n4Ry4mpccwg2nKmq3jSYxitM9qAGiKS5SUxkrX",
  "key20": "4QmXyeiKZQC5518qRhpuYHNpAFwKMygFQHREKBRf2vjvRs5eR44LwRQU99k1jmGqD18AXdUqcsxqjJ6aeaZQx3i3",
  "key21": "4NyetYDhbUaickZYzJSLbUfxiKR6KjT8KhLhnc4pUCHthf1UAh7QHJpb15Y5LFdqD8nkuDPVAeWBCDfQRsVriisA",
  "key22": "2TCEdjqRAmR7wj7NmxhhUegCs51ejAwg42oHA8o3cW2V9SUR6ut5g9M5p3Nto7EeWr8iPv374rotsB5E2WruJzAu",
  "key23": "5c1CKBKtrfnBcu3t4VdRXee6zHX8fHKsSsizGjEuk4bjHhX9bp37fgbpoHBqWF5ZBmfiwz3YuwMfdHjJb8WzYJuQ",
  "key24": "67Qdeu8xTyaqRigL1ZL43fdg49ba7YP4Y7vFScfFbp6AdCERGk13DwRfkELxndSERfYuLE2oLyR3LorUojEUXMM4",
  "key25": "6HWc9f1pxn8boNiji3Loqgj84qC9zkFnPm3p3RUn55Tbg5Wa9JT8ozPvMF3JP4kkCxQK7MvpaDzu8fm6c3T9GS9",
  "key26": "4x3i3u9w9Eo7dqTinxTroaLL6NEU8pPuGPG756gu373oBmntEEq97GsWbL4jvnLjpPUdrbjTDNRy9R8wS6y3gUW1",
  "key27": "puFAjqXptXgfkGkRDEt71kUsPpjoc74ofNsyTWEa7W6Yqf1UFwzMZqQBVagvgA7inrj2nNsEecTSaYtE1RnnnCU",
  "key28": "U32eUaqHkuRC8tKBi1qjvP5WvHLGwYdNvsX29dVyUzDV4bjD9BK2EbM56Tk21LmLWQPVPxi6oh3whsU6HTkPPrW",
  "key29": "4jjCw1GnaZvrzWbX8K9a5FVkXQFgcjPrBGmaKaqryU6TtUxQLxYNvQd2LqyovcyzEdHdMLhBTfNoptYL3G9KYjUg",
  "key30": "3ok1kaE2FjGCHRjtRsonviTm4HsAsQp1o3iCznGaukCFJeuEa2zQGyxipa8kQMnE5vpyvgqAX9jMbdxoba6o38hj",
  "key31": "2iQ465fvASZNiegxu84CDdRCS4UVsHtVQdUBtVdjGuKYidkBUNgURjMweX42sHDNvqPDcWEehefJjsg2fZYoPWRo",
  "key32": "4LH9wJkFnVX1duZP4VnfXCUT6WjL41JvzK5QQFgPPbT621HRmMfCNwiqbSjZ2rqT2BnnqFRpFppk3BWyediyNqWP",
  "key33": "EwEBmodn2cPGRmULrDtcMR1fNsKgrNCsCzYpKhkaRYSud8GLB9q1KHG1SmkafYvCHepDgHLJJ9BS13vdHUZFW7B"
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
