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
    "2exYit5UwqjtFktsozAXsKwW1yDdePRb9QQFb8pNE4acAJByfJ3x21QeVCVRtbYYsMd7ELY1R6CYukwbEf4wtv1c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vwgUwYex8wwUprUCbPZ9x49CPUKviiBv9NPzGY7WwH4J2NA579NWd1TGzFvRhA1qC2VxT1GaJXafxqAGFZxUp7h",
  "key1": "rwkivwCQpmuNzesxJUUhLtr7zikpK1FyCHh3dqarS2cyFYEFhhCCtmpFf6VzpY3QKRFdmvfdD2LviN85QLk7o94",
  "key2": "2mhTb7zGeQrd8Dq2fpCydAozrkiGn9U8JdrcUdmZJbsASAABtLExcxx1Po3qDL82F4bJw3nkoyrTS8YmZZL3EezV",
  "key3": "2t1XzLcLJ6KB9R2qfCN9ZuHsnDyTdHaVuW6mP9TTXZEDU36nbd6T54Y9Tv35dvfqqZJnfSzgqD4sRwFzZhw5VfXC",
  "key4": "3L2Dz5HKHSmuKbrzdb2HG4u3t4SqoA5orTAvCuBweGCDqcN41AD3U2U5DAKGBCV3mo35d2cZBpY5ZCEmsbjZAXoo",
  "key5": "65or2qd78Pew9ukg8s88edoD6gxhY25EBTubNamUp8fszC14K32HwB1ZhHk4fkpextU4GyReUeD73E35tuXBc3aX",
  "key6": "2MZQDi76sdPjZB2sbCPPaFyEXiA5cDs3kKrbE87Joq6iWhsEsJ5PmXM1ejBBq5M4eektKmmimvjhpfgMGtGpDM5R",
  "key7": "3Pnp5oejqDto4bq5W939YoKGxXBZvc15X9Uy54aY6uhPBv371nn7keqFEiHMdd56jnmLZtmR8tFwRk3ETGT7d9gr",
  "key8": "entKQ2PC7dPPXZeeGvZ2UpaHVvR89Ly7sqMXNbvvk8Nj4gSunzFE7Gh4bFP8S7LhnCtTJFwuHL9zRJndq3GmS2d",
  "key9": "2c2EToRGpMtPSXXbie1Zpjev27GHcAdErwF2xG7UCZdrsHRC8TpU8ciZWEvLDtDk6e8tD6BcJzLeNndpPReyHvfU",
  "key10": "2feLZn5AAosi796yMoAtk3XbtjqhRhU6Tc5zzrYTA5bX3NDCs2xafAEKZtEgmVV9xFb7FfETuTHtkDhXFkHxpxux",
  "key11": "38jmjaDKPJ1qu5am6eeK8XRJkLrZ8ke6AYZishvuCtTyfCzwUsLDYnYeJbjTde2DSyrLmNmFbopQRwwwomGrRdVP",
  "key12": "2ijMUevSvgooH2ownGd8WZQ78dATmcqEDYG2aV66s7yCJ11YQz5T1iyXQGPGpmypFw5vaGiJf6N5DARzSvSuDbfW",
  "key13": "2rmee5UC8AWkRLKUP8Q5NnCYetenHTH1y1tEPZZh4fj4ma8CHzVfouvdawVCXq8HTEaVLDc9KhW5P4H5uFv9XinP",
  "key14": "3ucGdRSNBTj8Y3at3ZghGkZQ4LPaHR8DurQxw4rf3xXpu1UPjkMXfeUk15QFrSqUJVVNoUCRgPr9mCHwc5khBA8L",
  "key15": "3kxbpY6hdxXCZDxjLGyTBm8RhBjyXN5MAs7x6R2KxkvuvKfcSsJGHj9pLumy2KN6BTpq3L78zzUmoTj4Q9y89AXB",
  "key16": "58rWSySHpVgVDBi7NHPh9WP7Vh5Vqr9a2otnAwMMSH7oHiDSuNh5HKD4zN6Er2nFRvP3mEtwJCH3TwJSuUjgzDac",
  "key17": "2L7yvbHc67Kp36N12nGsBDcWeBXRMJ9ofJhVkfHhaFkEaB1DKbedEqANEtve1JEYRP7TZEVaK9mksUVhf11mrbVQ",
  "key18": "5PBHSczn6Kqx3jASNvAG4ajpxnE1tkkMYFM4xfWP8oekXGgZcZqbyNysS7Q3JYHNs5p3wcHk51VBxP5dX1D2E2WS",
  "key19": "vDyfaTiNPADBMedBbXbPpEvAMHryDYKKTWLhPSh7ZyDoGCAtAGGyhUbZZFwWBjZKF64cYDujvEdc6tMo35v3sNJ",
  "key20": "3wMSKbdhdvjb4XpD7jUWy2fDwbVbHhoqK4gDq6G5pJuGyrEam65FxrBUytVfsTZN31tFrHjdknp7e1BfMm4oCJYC",
  "key21": "5CUX1HswSoGFqbCjvsNDNRaU1ceZn29rw7kmpw9yV8uiz4fSnTDDp1raJPwzLTDRjBA9RAYgi9bdd8qeUmvS4giW",
  "key22": "2ySByyYFryw1bonnwZzgF3zRFThBrGcnkHHrTVXtTUf2Z3WCtTTUoMrbiLgVR6PWowEvhfsHHZJ9WWNrnrCuBBrM",
  "key23": "29LybwKBUea6mypc3QpFN86WCtPr416KVen9Pk8nVSyANvAXXv84h2dBFJU5KTcEdRtJtDPpxBiedoVcHY6MegfQ",
  "key24": "3iYUpDJMq461wNvujyMcAsLh3kW21hkKqrqRCMS2KMNSoPpun3RySLfUPr4PQLtLTaewxb32pmepwTtuamaNoWTU",
  "key25": "5t9yRqi6xY4dVciE9HimZ69y1r64nsutozEgUjeySoTABZkZ2cKrMTqaY1WAdB2FgvbkMHkx3RzDhne2dTPdnoQL",
  "key26": "2ARJ6Y79bkvuysM1sQRgSHX7fiLBTWJ5JRYpCApGLqPRUVUgD1zHnFG8HFcjx2LiP3xBdDNSAQSWPsrHe1byg45N",
  "key27": "2HDv72H9rEuuYDhfQZvERuCifVCQXDBgrUB96EJ7cGR3Rm7Dq7MUfviJ4MBbgeobKCinNaLqT5TkusAEpX1KWBhR",
  "key28": "4mRSc55us2wDLDrGyDPUT37JQ3UZvgXMmb7HVzXejKR7srW7jzde7vqLu1cc7rurUwk6VJ9CFtFiqKHYWfLTxgmK",
  "key29": "5BCvsDdnt635ME9DAnN7etGoPCQz1xnnnUwFA7XzCm6X8cPGnEATTqHQHWX48m3Sfr2ePtabMHeqZusUZ5Ng8ovq",
  "key30": "2DSfiGbhbb9gcke4i31dqHeUzscio3dXQ3jMcGTtyqHoNVUsj3DmUBURYaLEcbGFU8wZM8r3NNRCoi3MyouSS2b9",
  "key31": "24hrGLqE4hgsrJDFTEzJjDDT8i27zaFBFeths3XccCkDoH6m2iEqPKCohYc12hbB4eFtC8WtbJH1EHhyAX3eiAo4",
  "key32": "5486aWY6ZaRFqmRxzf8J4aM2JqFyAJ99Wj6KRYCdYqvGiUNiAvPZ56EZPy8G5XNGVhDBTdyAfhE2r2NKvcTvoSZb",
  "key33": "5GJdqJHhD9d2bwYR23G8oRCRJr7CL7f2YumCuUv7gtxZXC1o4CnhH1ZB8ZtCEdxZGAAxitMPwYoJB7umts3xCmEU",
  "key34": "pyor16PG3eYEEXfiWoPFMiza54wQSAtfzQ3JmejTruTN26r96mtB2mJv5igKdCsUp4aFsj2vpREUuwmEMVytZrS",
  "key35": "3dbR9accCFdfWDcMNeAHMoKHkJ7rUEGKSBNi4E3qfnL3JDqkTn9zqmpF2d18jNCKARYeb45H48KtNPnmm6xdCuWY",
  "key36": "Haz3S8m9Emb88yaRXXJMkQjciKHAHqSC7RLg6yEUL3gionReAHVW2UwXciB9Cv5cboJar4AE2EzcmxJtREz5H6Y",
  "key37": "4gTkWGcjpd8LJzvu7RkPTkBVHFAanUMquf9N9bFQReE6AASnE3TYgWMJTFh7D8vNLtemVr7AyRQR2y6EsdBrs3dY",
  "key38": "2CJrppNkW1wxRQSVsQtr9xbgJqMLgwtvcRZKx4SspsZZgfVR9euYxKHPQwf3CZnAwdYZgYvBBxPUPkyh5uY8ifuv"
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
