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
    "fdSxcN6Tmq9kiqsYoUEwM9FLA9rRyNi2Yrqc3oXMrCNnnmXwSzGesun4U8PkpvwPdDf98fKiHLywW5oUCSm5G5s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jq1kJsjnL1FnDbT1ba9gao3eFADHQgTpEQ3a5dmZySbgfSDENvkGM4b5DCEon7mxTjuXx67fAm573EoSYBRR8Hs",
  "key1": "5rP6QUnXgxSwmUNXbSAueqyLhjfs1pzsDBmEz7qbHX3FHMzoS8WsqbQ7mP9GcMna1kDKdtTRkGSCL2vpki6ddcSn",
  "key2": "2CuLyXjZAu549JyuebKZ5K7WhMKPeHEqMxd8xPrGmztKWo2UTRpDhm21AYt1HPMDwugmaJG3xLeoD5xgAgmFBcuL",
  "key3": "4VXn3X2jyacqmpZCJtcSVGEn46wjJ62GnCVWKvKMzKxzkWLLwsR5pi3mL9VE2gqRPtTvvDSwgK1DC6BpNHR4fEGf",
  "key4": "4a5QorHUbYYHSjgS8pBu35zMrUnjeBFdCyo52VRhNkwZtJqo83xVrQcNZpHWUCTJaJiPKLJZye9zugjDmjCMimyQ",
  "key5": "4Mk7GzWLnsjUCNpXcPDYdoyEztwWPQMsti7G1bJvNPsray6qZaP1hUxATyFYGYP6tmL9WDt8VKwzHYCX22dgy7FK",
  "key6": "5KDzw2gcCLpCE5rSS2LDRuUEwPLVASLLPMXbWPpGqYTTjai61TvfVirz2cQgbMri7XBgV91hitd73EiUp1XhVpbF",
  "key7": "BSy2GdzMJAbWbqgP5FJK2qPiQM8THHJdxJthL8UTtBTtnNCjnDYSAhZqgkZPUDR22rvMU2NdX94pB2beq8vct8m",
  "key8": "2VbMrVZZiDuMH8zcWnVnZcm8zKpaJcqFyLu6V7ob4VJK6ugL1Uapf3qQ1nyNrEd9QKQHhm8kASHfQ3HpxWvzTQeu",
  "key9": "SbPEnYfC1pdmZpw9KX4y6Gi7S4c35wS2JCyQ8qvNA5hJeCmF9fFZMcESRbJarxuFUf1Ktn3f7TscEnBuyjt8X51",
  "key10": "2RnKitTgQyjddAUXx9SykFeAtRxxCXX4gqLNFKz9NPnJtFy9Tw9fErmkwY5J1bAXDw5PeXfBGwnyo1nq5CkaS6uP",
  "key11": "4XCJh9Ur8sPrSDHjG5bGpTBiT2ecAgdjYgDDhErWn9L4bog3fLvBvxFTLMdThcrVvkcs73EJB7tErsjGBzLGGKnq",
  "key12": "32F6eCa6Hjf9rb2Axp9J24hJxY5nkzx9uZqJdmNYxbHqZCEiMd3dVQN9EbMv2MREerVu7DRsbC16EZskXdwcBFZN",
  "key13": "4SgFMMikafzsv6u5U4iLBW7m1c6YDLMXkq3VaJ1DgUssk7ZDVH4uGUytW1WduR3QCd3g4u5Fba2tMT3jHwwriw1U",
  "key14": "5eJbPhift5Fv6rQoNWtfDWe2oSzqi7CQBmcRbEBDASyxQZfk7z84pM7xxZXbFzCK32aEjUkGcn8bwzXF1HJmbDuc",
  "key15": "5FtS3WszQvpZxRfGRRmDvmEDtmoUpoDaCbUZj7Ar9tWACHKKR2uMCdURPHucVPrQnGKwjwAfSPkgZafkqsyQPkHU",
  "key16": "2JmJz98m1x22b3eDhzJqXBg9Bi3KABzhLKJzC4caTiE1FZZ4ZSGAtRJ7dmCw1Jk1SFHKiztrP82LfxP1XNKURvjs",
  "key17": "3VSsVwamZRMjjGW2mtM7aqDtP8e4Z5wPRXmLBWdfZ6i8iQK249NDh9BKuTBq97NZs5HCZDkp1ua6FEXPkVDHNun",
  "key18": "5px4kf4FxhMdRB4v1S1NVowD6n1X27Yh9UxYbHnjYsceUjFNJqDMVBxojbtib9RAySP8zjwbn9Fh6Cw8rNC8HoSp",
  "key19": "5UWqrk2XmD6s1pZ3mBJSXt6B6XpiCjd7WMB3Nvc6Mcr4tzSb5KXdKcQ55cYi8zS126UxfnZvDuodhX83CKDaU924",
  "key20": "QxayL3ZEcUiWKXAxtGrAnPpeSHPf5bnLuAw5GYQydutSLcSiW5jsUX56atRdyryTUwcAxRLJZgThUBTspj3YVya",
  "key21": "4JrxGEydx1ou1aEkadxiBvUFnoiWfjykunpcAnVSCNJ1ML5YtPhyjd7i64gUjj9a5qpTahc6dNjCKajFuK7QLZD",
  "key22": "mSqiP1pSkSws3KvLZEYaQF8XEC5MFvqnd8BhfZDVdkaCibm1vuJjSySWfkjeKeCQ8pRhdVm2EUFJArm7orz3Yc6",
  "key23": "52tb5HztxEs8s7UcYPGzYsENM6qGjuYKWsoPTa5uYQN8kumRtXaVm9Uc6mYN4B79becjdhLj2brVTpvhfjYN87vD",
  "key24": "3ZbKsLo5u4ABwguDbZQEfDLkcLzFTkjKWL5f5guPJ98v7FUykxz2NFymAU3PC8C9BCRaFvnCKAiu5365jfPgNUdx",
  "key25": "cGCnsTq23C9F4xRJoYjkz1mVFQ5ca1XpzTqj5k2jW9HexoF87P4WFJ9kJzpvtjsEhQiCjp9o13nkQi813bvfDxr",
  "key26": "2icauLVBiAdHTgiF4drvjJ2vn6fxb95PLyBCZ5Xpho6j2iDNXMzJMaaievRAEhdyHWWGCfnMJsm34LuKwWGmzLBm",
  "key27": "4hAH72e5AHzeDAPzFiBwXFmUugr2n7Xi4epWwCKA8KmU9Rq8Wy1jPnuKQT2QvvwBD6fuWoev7ufp73aoPsfkdEvV",
  "key28": "3ihZqRfz1MyHXKYiuLXxCDubStS4xDUDAbRgBHX3fLNrdVaoCzDgYpLe9HkbHxQkG3LE2MpTYPuRUD9NXbH5BZVo",
  "key29": "tnB3vQkZffPV3MQmA9bhe76hDdYobLaaXBDWxSgfy3kSszXNXeMgzBKUc1EyRRMuKEqLTf6MciZYtvzSeZuqajn",
  "key30": "eSQJoThSY1sFFCWcgogwq8Bcgc7c6TUH4DfwonLGK7J62xLZLqSDu8gmvP8MbC4AF5YH9THA7yCn7qJcYnK7adQ",
  "key31": "3fAEV6URN1XU4nNNxy2E9csFxfmd17tSWGBa6QmLbwHxvfMuZRCybnqf7R5p7whoVvpDq7ubJYPVg6giLivn8sXb",
  "key32": "64e6mJ5LWdRmFedWttKQmNZWn7aUspPKAx5gj9QwmWxEj56tufie7vt1wpr6uj4y9P7XFw94mDHY3tpEb1wS2MsD",
  "key33": "rNucdErDQmQoHY4ZEKWbgw5hcrtMJwunHMGaxjPgs3h7tW2UuiYQGC1imBp6i1BXANqBJx6ide8sWvDaowL4sCZ",
  "key34": "V93Me6MExxLtm9ctqCQgBVoKZiBCuY47e64ngNywxnmJKWnncjWSu4WADkY7D5yvStZncPut7qKxRc1jzdCHD3i",
  "key35": "2Z9HLU5yHAgCyLzo5HJ34Fe8yiM7H4aieZRyzU78bXKAfX5rbRPumpA7NNRwa4pGVh5duBRThssC96PenJacuVQL",
  "key36": "4oHqPrfdgC6pREoNuAx4zbhLwPMRvkDYqx8iPiQuVWCmeK3CbB2ch4nhZ5TqTkdU46RRc7ajE2PfzzwMpCZHcpdJ",
  "key37": "2WFF7rpMQGCr2s8wNVwdeeqQXQjvUHv5Ls2XiWyhF8BaJAaJQyLEhwi5dhgjy34vWZdA5UMwG3uKVvEZaDsjMnhY",
  "key38": "to5qredj4Dzt82bYLapxGGe1UymtFCmBZFYjKrQhiu7gScfBgnN8TefdLorPHwTMBmoCHia7WFwEkfwzFtqxvyE",
  "key39": "5SD7CjcYSUw1zqG6eUtvtaEUBF864C862Bsqj6y7R9oUnnCzX5wvGy1di92X4LMeiEhMYBmsbz9CPjWbSyk2hLBB",
  "key40": "56vVtV6sNdNc2qeHEVLg9Pds6a1QaCbPBYBDjxQk7ZgJhZ72YzfFWNCspyRZy8ER4rZSxkKth7P65N7QTXUB6GwX",
  "key41": "3JEtvoG4w65m2E5r84HswAgHRvpYkcZJXCiJJSohCtFQKzCZpRUyWPtqi4urzhkVhUnGY4SNHkBiGmWkKoATcMqf",
  "key42": "igMRE54X97kVu29YphiAUMyKoNkCAezaeUBbD1cpnjV5Zupv2ZQyRRXdyN753ETBM3uiR6Bt1xYUdCyRD3bwexq",
  "key43": "3Jaf2KNr2J8ta4wBKXz21spCkMJrYKr15ScZVfKXcPyQ7e9X12vfxUtEMihz3H78e2icVPQ1otq1gdsFgF35Xe9G"
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
