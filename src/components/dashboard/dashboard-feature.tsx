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
    "5Fp3FA7KQyFDCayu9F1tYXHfd2bFjH6B9ijV9z2NgqdpgzXYfoZFyvjUmvs2RRWjyd7GJs66D2SJLudKPVwDmUgD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oMSw6iAqQcTSGCP7h4QgKHBHs8h18rQV6s1xG7zdE6r4n4soKLtYYgXo5LR1kwVYDVRTzPCqmd4V59GcrqZeZiN",
  "key1": "65ZStp6URFw7S56pNavKgGz9PF6hBrcyJihVi27kCuYJzNgRZKhiHRtH1cT5KA7XTdvwya87iKzgg75DdphyA98D",
  "key2": "4aeKvXCNjfy1FFBEn3gMSi5pURotDRetNy7zKyaBFjMjTAvgbmKifTHYtEZpPmXyCWJKVcQRiru8d4fvZCzCzenM",
  "key3": "5rWNvVJxBhDmn5uN2mEW5PrFGo1HMatkFvLM5EUdxWK2NdyKkFAv62ujyPq5HJyt4BwsAE4dPeCdFkT2ATSJJEas",
  "key4": "BmruNBrm6rdnUGwSEX4w1ZhaSq2o1A8MK6dTJdpT4jDGT9NprrKcu3dbFJJkKf4hcam44B6t3DtYcJC6kvixzGj",
  "key5": "2yN6jktPauZEVA3oNpYhPkn6h4LXc3hMMWRD17mwgYyrG7j1UMaxhUMUXE9hqa9AgQU3Mb9V8kak6qdNSxKuJnHU",
  "key6": "3esdRHMu37mVpSMEcWrZ1fYijKRKxKxhmiJa6TaNmMKsgHHgpAPwqKktghfWG19Vty6Ek1nhMR18yujokxfQrcCr",
  "key7": "3h4N4SEai9WvG3v5s3j7UyEW2NtisMSLTwnXjfeq8U4cw9sUVhPiMQ6zssS1mRMTpELhjZVJqVKJrVMivQ6ZHShY",
  "key8": "3Tpxsd6qjnRVk46vAvmZeqN9rvAxP3tLkriL3xVFSvgShxFsBGRuzH5jcacubMS6Bo9up8148t3ihaBXdL7j7qnD",
  "key9": "3uJzAxtAXyA3owWLYHEsvVxxjQmm5NDwoJwTDZyYcnMktwHVUNx1XjAJ9REm6qakoQc2uuVcDUkazjNDqZBzCs9S",
  "key10": "5EsZdh2eRr321rNvRdXAQi9LNsJbrnfPk2vgPJhkNFVp9CwbJkj28X7CrxtkHP9vn3ai4E4GBiEeT1w2EtWxGU8N",
  "key11": "4NPUf1bk2jqUcnA5iuiye9NYYTVRn4LrkYTFsCwM7uba4Qmko7wWD2hqDPu2erzxj3QjSqhypT8XZBVtrbSixbWJ",
  "key12": "2aq2yNmBkAXuqKuxa6fJ8EJs2xkeWHSWdiKpzK6SWxtvqmC65qHKxZb6JzWHXrgcTyxkZBhGTgQEfJGnX9Kyo8fG",
  "key13": "4p1H6Tirrp2ak6n3yVhH45dskVvMsE4eBNDC8RjCJigF9y7jEQiL7sAvNMTLPCBB3cqXhTTS1MXoLGsMaXokYhUv",
  "key14": "2UqanQG3nhQALrBf5PnsLsAMCxGTPnGa7zJndqkB2V9HbS3Vivgo5X4mqAKsnWrs5t2YusdFME7bnGrpamNXRn23",
  "key15": "574yMnRi1SpZt8zXBeNqEY7V8AVeTanW7fgBnEUT1NtVvqMJtZJUP9vX5FkbvHBuqcGtPRSSbE8daEB3xxwhxDrB",
  "key16": "61MHdWRNDwjpwwvm4j2ufZnLagcQDokAUEGfcWAXSuzBNhkpE9wLUdRnpoyZmQr8xj5tPdAdjK56BnzzGVcDD7e7",
  "key17": "5dN8i2H9RvdVsti5zgkdHDwEJnTddnvMHyPRVAvYRSTmaNg8Lz2gUSmQ9RM7QNrDjgxdrpqCp6KyyKCTVYfKRsqn",
  "key18": "dHXKceysFDfcFzzeK4SPgcGbP2Ge37MCdMwM6m2XWsdkHKuDjuk3pMo5dBiHa6tHzdP94MHt6dvKYZno49uZSp2",
  "key19": "4yDotEZYhuWVetpf6skgd1AyCoPuJN9WfAGNGVbAcP9vZteEJmjvJMEAmS13Bv3TQKiXewSijALgiJfo7ik5DPxV",
  "key20": "4Y4ruNBJo8Tz7XpAScAqMKD8GhgtKYLek2YBFhQkt7hMkdQv7kUbscgmPxt6QdA6fvickjVnCAFSJeWjDH2fux4v",
  "key21": "Wfp1zVUSJ81c52fBj1PTR9qhFBrA4Vyvz4U6QMLtsxa4vMfWu8sH2BzBTrNzwtLbdSx5JduXi7bd8hdPpw1h539",
  "key22": "42qE77zgjMcrs64NumZqyrFKb8qzcFFKkJBtZ1qVpvWD5nZ7RcmcJF5jRAbyntfrN4NgyysgebyveCnapmYjFYFm",
  "key23": "2fdZp8G9hskB5hdrPQ6HSeuJBCCrvYksHhjt6pZ6j1Mh7cCky4ZS5k6VpxC4yYpgoN8gu8MW14w92hMfvhG3YX43",
  "key24": "4BvePotbGJ8bbVYvUNUSZanai9HsVwHegGUGphAqq9oCu2mTAjz5bztDZqHXN8G3HZH75eNAeWVV9rZtyLZZyJFt",
  "key25": "5eyquEHrCNVCnq1a395rxqkaTJ8r3Yj67n2S71848BuZokEdfrBswfis6RhHdDBozrvFADPto2arAzvmq83aQFg7",
  "key26": "5mA6KwXAHEFX9uanUJxkkfHecG24iyQSECzyZcdezeQmxZJetZb2v9cgFaPMMSS7hwiodFaJ6qk64BHanV7ANYtR",
  "key27": "3UMKnhS4t9m3s84Tps5got5VXi7RSTYxkCrZk7uvrWYoqNrC6RSxMa4Kd7pDvkkeLEppZ3RimAQe67bGJQG6Z3mQ",
  "key28": "kLS54Tn6LJE3vo3UorFMTmGZ3MKhoJHKGMbbG8ZCctbxTqNreZSdQZmA59CdHP8mgvPXXTJVh7uLqUGSVZfsEo1",
  "key29": "3VxZvg4uwqaaJg1C1WguJ636xuxgeN4jCkuEFbdMmFrJZhSeW1viGgemrFEbPikedfPECLEFGjykzEbqBM7mi2G5",
  "key30": "39coXYz8ZeY4qcQoixTfKZqQcoZmnvq1RbUy7jS94xoj5uPkZbYK5RXb1V4tCvTLJ6bzhGfM7vyEtNf6yp6fV56r",
  "key31": "6ZfrSbhwWYie8w8pj2XBz2oqyz75PCSj5XuQyefqnwcVy9HoPVHBv4DoWh1ebRid6FEmJm8VanpAtSZ3LfJYNBg",
  "key32": "23smT5dRpZFvkQ3rKmr1Ep8xtx7ur7paXUaDrSSe46UwoWv4CEuGEG61hoaHj9zKFjmM2dSim4KuPWZTPm5HxRv2",
  "key33": "4Kgu29WEoqdHLAdM1nvm2FbMXcvGvh3kFMFVDJCDJHEVFaEBq84fKqcMVPifZsmggpbayEpNhnV1h67GwDQsuaUz",
  "key34": "5YBBAZEyyNaPtFKKPCvkBv94ujpJvG9nL1JRjZ5aN84HtVPq7wWeRZVtRhJMzXAffJj8KFicpjqgvJhorHm5hzez",
  "key35": "4RJ5y9dix8Dr2uJD6fXqVaWwv1xHcMomXrZQXvDVDCYweNgoTatLYdjCuRW28qqJTtGv7jGKtDX4XyNDDCKMUctM",
  "key36": "3hTevy7cRv1rRe4azewTsTVB1ZmAtYdxStKT92c9WLEqNuQXqFgXebAvncEo48PVrVEkyVipJTqbYQ16KMecB6dy",
  "key37": "4JZWxL9vN64fNYZ8mfDetPAmRh4hn81KS59r7cvKdGXSoa34quuheUPwvXi7RkmmmLdPKzGy6j5obJsGYP1tP2Kj",
  "key38": "NcDtJj9PFxvgMjmQBCpRsa8pkGSwjxoM8be6DHps7zEGBdAB6zPx8uZjQy5yrWW3kLKWysGx37Tfb2eHmRBiQEs",
  "key39": "2Huv6kv5qZngTZe3b7zrNPk4eRHHGJuRMteq3fzZq2HCXZjGqexiK6731PNR3Yy4hWhAUDAnhYBZunwCoTYynDMD"
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
