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
    "57tyMZfWGD35FEVJJJ1mRXCY81wJRuVs6tuUrmyZBszeuYiZNpdDECv1DYs6QpFcpEkjzwBW3Q9PAHFNTWwQiD6m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Rgnui7HfZr5K5ajmykvtKuVCEULRPHPxFm42HRVfapAifdEmkocAS796zMC2NJpxqvyxgrM8SKUZ19wBizP2Brn",
  "key1": "265dczupjidmugFdFn11mfakmDg19w9mmAfVwRFKsb1nAZFwgC4AVeZXj1tXxU5RzPALWhNXeCzy512mNFc7yExZ",
  "key2": "2izk3vbsA1KMSzfYsvTtDmdx7DA2Wvwyzv1Fin4fEsp8xYovtRhk5Vgr1xa61p9dk7y9LMvPwDectzmkg33HuhAh",
  "key3": "5RbouyMURTyAAiXv7hLTjh1RUUYpYhemp2FKCCqKaUvgEojnFYuN8qEYvKHBJn8M4WKp66x9rfr4UqTSEEqSaisu",
  "key4": "35AXMr6RNcBHscUV4VvsQCsapmtKB87VnqeT45qyvTACYarQLskeeDBoCnjrv5ULk2NWJ3n8GhRyB8yBTLDxbreo",
  "key5": "39js6tf7kdPuNi6YbdTYdsjVHQAmhB2j5nf4p4eYuzQJ9XFMt8tpEnernB3xG9tKi1sf3gBaRveUF1RoRY7oyfKE",
  "key6": "28LQBQStxsuqrgzeYWbwQhYp5ksAPDNCtqNScp3bVWYtdVnsU5aTx9XyupxVMDh3XEUEgDYnZBr3vrQzgmv5k27a",
  "key7": "5SjzGLGd5Su7yrJrjAyq8QFVECo6HL8zNpZb9Yocboey4rhjygJLRch1BEnQTty2cY9wLVtRxwoe7YUZB41idrLV",
  "key8": "2PQqNsrGjoWEVLBRCyVTonruvYFvAntsfS5xw834doBySPTC6nWdrWozt6wUQ6z4TEmuqUEDugH1E47ZGngJrZZf",
  "key9": "3QmW7vrSaqXNbGqJgJRZsJpFVS7pvhMpLizkdtTJ7tMSUeC96fuC7ws1ZQexgf1JLo3iJL6qdYR66WZAvaVxffeJ",
  "key10": "53th9BWL2w9c9MvtwQ8zz9jr8ytMmigFWPHtQXCY7Tk21T2HoRxCUcr2PpMCERquph3yvz6fmW6x6h4w92EF1vC9",
  "key11": "LJdTQ7du97tPwFCvWUgbkUQqHLUr7W6bSVH2mMkEQbeqFpaNJLWBYEshs7Fj5kBSsjNH2xb8xHWTEvMVZ2UrugU",
  "key12": "2f3u2qptpAEJwVrxoF6xU7Hx8zDcqQru949qii3ZhffwESWfjnD1zFrRR3SVibFsGu69wDd7aUvgBrPqkfu6gCq4",
  "key13": "4q7psEzNyh6p1VsGLB2k4cqSiRtnJXqqYMWfskhKMymhadaDLVC2pymPmYU94oMEdQQVM3RzEwETe1PtGXv3yTFG",
  "key14": "52GTdEVDzYA1J2zzKEJnTSyrGDjsA9mx7mL9TokVnEXEPokXNyAVwVU2J1yqEo5pGuWGESgvVGbQYGHJcd4TyPfk",
  "key15": "54WiJXnrAY9XmLyLf213BffEYKzQBXy17cnGc3MKeGn3Dhisii3DRvG7Cm8MhxJHdCiaFubmfKgoSTZmm2a2Hju4",
  "key16": "672TMUkGu9DqAere51qjNbhWRJuC5wPuG8bRR4EHpDuKtWdgm3bvjWBMB3GWkEKHN9UZ4rG66N6GjxLztTCEDHbR",
  "key17": "66b2tTDZWkqgfNUUjeFy753V6kpzjnxWwEM3hx4vHMuxWcWmzNPhyp66NTMc1ekT2BnuBUQtb51mHKm9AZSry2eN",
  "key18": "2DdEzVpmRiryVA4xFZHZLzskfe76b5pHg7nmHFqd5eYW74y1TBFB8yY8fxziUE8BTn8Vk5oA8yrzq4UqkNc4kS3w",
  "key19": "4m2fE21AVtCnyFLq5vuJQGJGKoXEzmvsa1j4nh6ZefVtu7rs9SatuTWP5K8sMJ3uad32r5w7MntYS2twL2PpQv1T",
  "key20": "3MUpTobjP8cLiWEwptrwr134Dh7NWfLtmCQE9GGcTxiSm5Xp1gdQZqPsC5iNGHsUmkjVSYRBZ3yGsKTuR5HJ73k9",
  "key21": "4qcGr4ZjXWPHicb87mTU8eYpscej4KPLEH5iQQiXky1ms5F4NYf68fPPJfk6eKdA36AuZvwsNru5MMpqRBh2HtjR",
  "key22": "QcmBLH8dBTNozRBKm5WoFnkteRmoZvBVTnXEgMLMNyc7ThRC4MQzZ7f6vngMmrfDkXG21D25bKHZ8YMQChgiv6d",
  "key23": "yUZHWh5DgN8GhGmTzFvbFXS3UuNGK2Vm1BZnuFWPBNh4APKMHpK67nkaGRhgHSRKob8d5ULK42tzPAumSPptWtT",
  "key24": "7URVPBQaELCdZAT1mkDRtmRkvtQjZhQvo64in1C8LKWrEAeFVQQ65V46dCJ2juHzUmxEfhsQZdU8Ci5gPnYpx8X",
  "key25": "2T3JCjAwxKqG2NP1ERrxX1Hqx8WrzakGwtVP7bJ7u2ekDAGnkPpJavHMsGRkd8eSjKn9YauVfrCupspjEL8EmMbA",
  "key26": "aJokFfg58zNMfkTDBFHrMaLpUwkcRUkBZ4bAqpDrg3ibbr63skC3c9tfxccEQ6fPHBUMh8yK34ez6g6ZL6B2kaN",
  "key27": "3FgyVHjrzhey6kByA1CpiRLNW2Up9b33UkRh7M6S5aN1twz3mTg2eiH7misDKe8ngB8vNziCJW4FWEgcUEi7LAYQ",
  "key28": "5cyctHBt7UKF2s4p6V8DDnsvUDqySzRT7bRjfK85yw59X7JG1Uk149iJXCg7RSmdsYU8DrHvh1MzCNh7n6tQvYNC",
  "key29": "2c3zkjRWaTmoky6VEyR61DYPxQBrJ1H9tHioRfU17vScJT3mqbY85iMD3bHG2ZVPFYFvUhBoqBqQAZvZ6ToT9qW2",
  "key30": "51KFfE32kft61pwhVSLwcWz6by5PAUH45B22Ktxa7rN12kxiry3pnJUn1ZkJk4GFUsY8MNb1xtgTWkRS3dLa7mxL",
  "key31": "kMfZfwybZAiGviN7kcvzTYDPCrZmAsB6day7R9Zr7S4HEAn3M3PepZcfkj51v1WYsw5cbyJBsYcsDrbdhCDRjge",
  "key32": "1QYnkS9rBx4nxxyz4Nwt1MFRUdwjcDmNWFKBiWuzG1DdVsZXXfBeeNvTg2vu1i8W4CQpVGQmHw6KQuXvGJ6QtjZ",
  "key33": "4RyHyHgN6eg5M9KRftQ6PicCKSmBNZpuTwxW5PFnvE89w4wyz5meSVzwtTBKKSvwx3LP2PJv4m11bsnmmhEaBQCP",
  "key34": "3Sv9LNrLpUW5cxPHV1hDYkrYPnVCBegnffNMrBEVvXKZXdW4FNAdNkdGrrXNFpuWwfw5zA4LV6RvzVTEh6BxT6hB",
  "key35": "Tqp8iuymHB9vshfUSNanCuxCyVet1k5Yo5YLucG5Po3NPbXJnpzqXjaZjBuVxCCMoXPdpFGJrYVznJsH1gAg9MB",
  "key36": "EdMnpy3Smw74URtVSurYeWSsaT7jbBuvuVgEtqt9m7bjg5Jnn2D3vf1sMXxxdFPedrYeDHK2T5iLn517fuj1cgg",
  "key37": "2Gv9DjZbJ2aHKXvmDX4L3t64fwyeZHo4D1NjUUHA7Yyw2mt6L7qp3m4UcyAZ9gUUWEv6jnbuxGfDmNKrHgbkjyrS",
  "key38": "2qyU4eoGGc3rhTdMbpKeH6mbeufXKRDGFLJhtryfUyH4536Zuiim3eLgLXYPgLAPy3TFJEWxAjfK4piVKYgfePyJ",
  "key39": "2KZ6xT2rCtYsinm1DbcYa9EVSbuCPHLApRKNp4jy3uDohrs2A3HNEEGknaNReSPgfNXmotkPzq143HkN4sJtRxGB",
  "key40": "4mMPGAvcXKCsnzCPEVTsCVwrDLkGTjftsagghBm1w6DS4bPqVX4rbfVahcg8JgLYPjp3h54weNxmyRmHqVzwBkz6"
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
