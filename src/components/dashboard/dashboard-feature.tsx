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
    "4tBVX4HsfP9dQ966Md4XJQpg6mn9dnbu8doxDzWBFHjEsfpvzwWxBiyncyUfu5m12GcnfG7x6gRTSeSsoCMzL76Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MVX83Uxm4zquPiDS4HebhhUcsRvHEZmn1mQNYGNcnT9P1nWqLiQt48d9ueQEVw2GGk9kuBURHZBDrZ4L32zi8zZ",
  "key1": "HmF3oJKfNDMetNVGmRkCtcoLhAjhje8945e3uQAEH4nrXChJQswebZbqdi2RBiWGo7vPirqmoe2z1Ndcb7U5FNP",
  "key2": "4GPJYUwQ5gPs79iiBE4pjQipMUN9wh7sVyyK3g4hW1WwjYedKXcRDkPVoKzBdBQ5KLr4y1Sy3QhTLHUAcdbt8Kr",
  "key3": "3MvBNNX9im6HP1KcJgeFgSAhPMFk2D9EKEzULAPfk31wd8YygvmemLkQ6Yw8uFW1G2au6ukxdHepkaNH6hnpP9DM",
  "key4": "3oqyEhW8diuro6dsqao1nHNhHZWANw9dSEoyMUq9EnnEEqAvJ8XWdBzZSCb6g54EAssxDbxaeLwiRqNEv5mfKNi2",
  "key5": "63BCzK1r6Ha1CgMZ5S5kzuUT85pev7ekXyeLeie1dmdNieAH6yN9fgZKivtAoSjbp1gPSdgUBkXH9cxBkVVfQkQZ",
  "key6": "4E92BoZU636womLxBTAYWYeHBDq8cYpgG1gnN8KPxrthPSRcUb2gw1tTYra2cpvnnJf94qV4EGiYj13PEjTa5FLq",
  "key7": "5cnprhYfu3KeLibts8Ud25Md7XKVuMQSoXfU8NkTWFwGzGKhBRpSRza8tkBSDgVQvJruQDzuficR2hYokV7t19DR",
  "key8": "67YJUWHUeQrgn3UQg8hhhjiXa36BJpa8YknP56p8G9dfdy8QGprjsD5n85pYHx9wZRPbxEbmcjvvtoB2sVH4XGVn",
  "key9": "6GmJNG653nYf8ewfkMUWbiui43JtEe8d5xTvs6Mp99jJ6CBFALuETsp5AU3SJv3j8fXgFP9Keh46AXb8fSsGFt4",
  "key10": "4KRg4W9WtjTJ5B8fvLYUg22cgtXNGxVoVV9CV8Wj7CFcmbJfRBRPMYwFyWXTG7ni9dUbz9eXCMQU1SJ82pRjgHAv",
  "key11": "66jYxbfbNodz5r9LhKidt7gM6HG7jNMqJ8FUd6MGeJrZPhfYeZHV9FCjbMzaKKf8FsTzoqeozL1KHX2ATCMRij7f",
  "key12": "3GxDxZg3cuSmZpGYMQ4ZPHSVGivZ3YqyxmMyi6SfrCozP3VX9CEogeZkVZBsw56cpAPq2mAFSyVuSQnDadddNHk6",
  "key13": "565BDFXjZm62pc14T1UdQyxiZFmiJTEn9Zdy5f5CTUqMc47kdMH199ohFS3oveB8AirpHBswjgLJhHXxLGiMDJVb",
  "key14": "5sezgTK3ULtVXXCBsyzTuCh52WXH6dseHruZD4xgquFhvEZbo9ZGwFkaa7JC5QKpSX2T5zv8fGVknU7pgYo63Xfm",
  "key15": "umX5SvvU11k3LPxfwyk55ucDWfR37N7p1hxqxuzZvoWqxn1EF3gbsNcXY81jkZdiZ7ai2mQZacn3nvGfGd8HE3p",
  "key16": "3QazJq9e7ud3GFmq77zzryXaHugwbBL2Tsgm1wQYADiMC6euB4QbFGYnxwEDfonzGMf6ju4wwzvWnf8ULoCPWy2M",
  "key17": "3qPCwcFGuBv3L8EYHqVmEKw4WuV4r2ayuSWAHKrhrgqPC1FAMrdF6AgzdZoNzrguRTcQXJippZrFjx4Fks3YtFfJ",
  "key18": "4ChMKuVULschC1f4LVpdVJTTewkbz8srvEfadQ1eRXCzPcjQZixsg28zJaaWoZ789WkKNE4dFocyfqJCeUdZNzD5",
  "key19": "5AgVTFjyJ3vBf7e5X3syYDaHv7CKoSUjpJqF2bK9gNf8apU1e1WFSDHZpoBzzASQJ2QshWamotHsbW6DqLfKjizC",
  "key20": "3YHQSLNsQs8RGoBCGSkiMnvi9mZ9ErTXizcjnA3vniEX9TqGj6yibADvhAM9L4x1K9Q4tkKGaEpqpd16baPUiF7f",
  "key21": "5aNA5eNkMSgc17uUDvaktF1JsnrAd12MuVKe2YcXCjZnEq8pQYBuuPzjsQGunZ25kma5XGK3V4hKkhfYK7bEbbUA",
  "key22": "4ErB4Sqo4vhHADXGdnD1ALSwi12nyyCeBPbNFe7HG81yut3NnYjzLNSgw4Ghtgmt1nFdyzFgVxJDvfuzWiB7XtTM",
  "key23": "2DMuT7GMeDgM3xqZKTsSzh9pFnXxGcsDpqiFZB73ARFXnjJCtCLNbZFsw4bi55u2u9fM83oZTSRWYoh4MRyVnE7m",
  "key24": "GM3psjiBu1dmXkt5UUnVeBcPu3sSMKFKQxm6NRqDBg5Up3x9cPxGvZHbrrmeGhUKVpnDN3ZR8xKsDfRbmtJjzht",
  "key25": "64oBk8LH1du2YQMWsuodCy3CnjY3eEVFnKSYfA874mLr1XrEgvLwsgak2PdTi7V7a724ZrcNyeA8zz2kqWAco9nM",
  "key26": "3Pz1kvgmgGbpgtZ9aKy2aqVfoW1DkvvRpLk2344zdRUK22uwbok1Ly4jwYWmUpTcoNz97QoMf7XSPKXPMKqCAAsT",
  "key27": "63PL6YTuRC4QdVzKHzz5bY2GAgpGnx5f7FWxezTipW1geDJwMu6Hcc44zHRVqFJSbeamgNmMjLQnWS1geMbTr1PV",
  "key28": "34FC5maPuszCTCRAZVTcBVj4wZyGekSyGppkYQSGJ7EaVoMoqNc5BsUoV3MgLsjb6s8jW3Z62Vy8Rqn2bVNWdAbA",
  "key29": "4YUQup8eVWhpevWwyZ4pzV2dCwHQGBd4qrQDFDeFvdCssNFnssyfaiVRQx877dQKptw9kK4PG6JEHQCfYe6GmSDX",
  "key30": "3QEmtmBJcQuEkrS1FCoiYCNQEEsgxUGh5mxmiDqcoSVedgvwL9xAerha8mY4doMZoS4wGWqf9dW6b9JZCHLVENm6",
  "key31": "2zwDRhtf3AoU7AtdTBWdetvgZxg4n35o6idVNAAezMpxjUjMokLCDpLzM8T1BG68QwyNLEmwnAf4bXFEetfi6wyo",
  "key32": "21Aw13pqJSFNrpRnCuzgQB6jA33nPL6QsjQ4FhgV6Kd6MSW32nxpqDf5T4QMT6L6QH7LPr3KjS9feEhHDH9DoyUV",
  "key33": "5i4PF2Uvp2wCrwiCczVvB5bs2jymL6wJ6zAfSXFpaoLUh6SQ2EVMUFLo2uGjizTRuHoruskZ7i4Wdsh6GCUXdGTs",
  "key34": "3wJroDWkAfjFEUzVvLw7gDuwg5SsHbVir8WQU3e5SjvJu2TqBQtABterkCiALMW8wArtUoyG5nhXiYNNJc3PpRKY",
  "key35": "oAKsXT82QrYETC3jSXK9YamAGfS3AovREZEBDuTuBE1spL8TTRrjzU8Pr3wCeicsmqNsXAJcG6w3sAQPTdCZDFd",
  "key36": "zPBYuFxj8NPwvJEvnYFnPFmX2B2sVu2g1U3JdEGz2zrHYa9uUsgwr5mXWoqkvZYnfiigkQsUow9g5aPsmamKh6j",
  "key37": "468Gp7TbbVNmbokqvrBH4cs7tPrxRnMNhRpFit4hxMfCtDy8hJKGKAhPweyDPJJSjNPAayWtE8X42NNKiz3HvUxt",
  "key38": "3ryqFEPGi9kPwbpzkdZxFYeaJnEESturZhpSE849L1mrBLuT3BaHN6Gkm9swx9JdEqSS3ckUyDyiGAnSPLRfE8An",
  "key39": "66KQv5gGRdJL3gZ3N1mdMhKzpzTCnrusK75WavfjDAMw4r3MXfLtY1qYa2aHpEaqZ9EXUyn4tBV4kZByxWwz9NVY",
  "key40": "24J4HKCxgxUyTRmdevys8AP3nGsGCLYXhs7Bh5NqbMJJVEshSny6wydwKHTR7JbQVDoFgPwDGvWykye9u3WNofuo",
  "key41": "5DKkFrPCKouKVJqXqDNb6Zy7yyJLoM5KyeicbNCtrZcZ5s2gAMYfEqwrM4i7c8vnu6YPibSE234g5a9kUcN3bnxv",
  "key42": "4Qkyeqnm7Tzt9iBewPtkFy9WzZGN6jTTAtjmFa4cw5STFfJinnjjYZDLaa7Q26VnTxuXyQ6ocb4jpcKvEgVvXK1n"
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
