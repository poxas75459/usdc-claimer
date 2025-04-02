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
    "5DpDJMc3jKrMtNX8Yv683gB1fPqa3oheqzrCgqFPySUKLmX9Ph978JKhkZqVBsdVQNNCeqb3XpZA9mvp8PR7wrad"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MRCetAgf7UkXfPVrdXNs6NgmumvNp3XwPTQPpoVH7UdhBBsDSxuRFe2ysRH4aHvVc8VHDSZ4uuDnE2uBJxPkwrD",
  "key1": "2YC35mxfHd8UYcYrsMrtTN6DgcbCuNP1KpFPJQGYEqZpScetFk6G3h5LswSVugHrbVpbSr3JUJV1XmvUXxxtc9eU",
  "key2": "5pFdtSPSXH1k212N4pW2ZbC6a8MSbBxGVfqen1k9Wzqa32TFabjJfjS29D4ujAXBxYBxREeKiBXowBqEXyMpPXzb",
  "key3": "XBihKKQnshKxVn5aCrJkSeSXuigd4DFmRSRMPyKEkzxg7AzfzV79usubdUdMGaJJnGnuVbUBmLL2sYnKEw6Lquz",
  "key4": "52CQznXXWTrhHEdsV8y6oYKM7T7mVqn86nKUBAfJKBmE9RQzBwi627XaEMByYRgEFL9echco1Rq41hmxSRXf3wfu",
  "key5": "4ByS8EbYXNWzG698w2fgMF6pJyuJbZ86vD8ZxERf457wgF5JmhgwQDz7FbCDk1bqnBQ9HwZhB45hXdRH8JGDmePC",
  "key6": "638r3WR2YTc23ot4ZM4B5gRsim9ksEqYbXNQrY6FMHRnJ4fE96kyw3rQ8nevjaEPALXmTiSSvfkpoNcB1t3hYsU",
  "key7": "3ULVdrFbFNiVB54YXmhxkKTBBZg29kSrsa6aqv7TUH44P3WYvG74xAfuDqoVr5arP8eXfUretBdmzr6rCyhZodV9",
  "key8": "3PzYiPczwiDtgeZdoexEGePEYSu3KYowoVaZ2SqwJ7btqrfHqym3rH2L7T73oqeUqVCsbymnoLDvMbwqoYJ322uN",
  "key9": "4WgJzSMhZnzaxuqJjWtg3QHjgKyBxsKsCZaXC1YVZsK4k5JGebXt4NBZogwJMRYVeiPsXxYWCUtd54QMKmyDjPhk",
  "key10": "39AkURKSi3hohoTA6qA5W8XZsJ7QtYjr2wCZ8xNr4LyhkYBVdLF4cg1MRonm7Kf9AgXtdecHe4ro44j65K8onUkJ",
  "key11": "4HYmJqXzQoEtfijdnXQb1buUXuBYe5dhzLtnAEXmTENg8zSLyxeP9pRqxbRAA8B7TBgnNHiXvmsHSypnPjmVFQdo",
  "key12": "T1bhsH8mVLYt6YydbLVNv8P8KB9bdaoZXGVbNUnYhruvWY37LYjUYmBuzP4UKuoxXsKSqv1c142RSEg1ExGCnQa",
  "key13": "3J5uyYcbvPZG3jM8NQ8ynSvvbGMvNZduihajVt3JFAzkU1sgHJJD4UF6HJxYgeYFXwWDW3VjVNomUcKwtq4HARi3",
  "key14": "5uPybJ8bdyd11u3C8mGyQ4E15DyF65zUrHZZLCm9V1K6kbqGJxYUBWbShHrTb524AgNqKuakFDUJAnALbKaQJ84z",
  "key15": "4PENVMu2zP4eMc9iSq7LC5fJ2GX573SmkYR6YvQcYBHFe4z5J9hDfYaQVKW34iKEZZQZiMimwJf36q6LpDhe4A62",
  "key16": "2an6EBAFu7EuXRUgZVRCYHq3X85UBX4aBAeJ27FGybhZWoYhqMUmJQa9fA9Dq6SwzTovmobvZJXwMJdC3Pgza5JV",
  "key17": "4vxWAGX5UFUSSnU57VDww27qpiLXvzNrmFEmumqornApkg6j3bdbBtaMCN82ZYy39pjbujiiMbrEGygXzUzybPf6",
  "key18": "6597eC2t3F7YvjUR6bju3fD9Fo2DfnQKPDebuUVSaZwvo1wRLPpPjABCT8bFXy5TScHzdVF9mumBMTYiFd8GTT6a",
  "key19": "2BjAcHNYRaf77ieNUmhcvPtwKaKEpSaRtBavaw21VNKTjZiTME2eCRNjpvj5SK7tTmxtHUXEj8BhjFpyYNeps33q",
  "key20": "3DCdc7X4u87KxM4Wm71mHFTfEe7simhGUsu6kQ936CSdmvcFHj3nnh7zz4R4sqXxMBZPmtUf568R6QMwacQMwVQG",
  "key21": "2YhHXvdJbeikCq3au6oLk8oHqtvtczcSoLYdAGet4zVhkPRSQ7eQivR23UWAokjoXK4EzBMx23CBLNmbCBob35ti",
  "key22": "2p4UCVb2ecNN6AFk82eeWhPKrVgphQecwZgTik8RH8G8fhF5sNArTgJtpmVSQP4ZWnxMmKAEbq1rfCfNV55Db9SZ",
  "key23": "2A3FRmwN4E2iTEKy7Zg47SajFjSbtjPYxJSGAPFCSKVfHVguwN9m6uKUCqX6UJUvTNFiNZv9KvqmLCWi8Mb1K4z2",
  "key24": "2SrgumvyRpjAB7DuLFRCCr56RtcPvwcJPQ1ohoP8gWWmAvDtHFCtW79SbPsZdHbG6zbGWbSirJvjAy4QgQ4oyyma",
  "key25": "5xvVPapqmpyjjs3UC9Wb1gNc4oBC1oi8uTSrnthV8FPEVWwQtvhC8BLHd3bak4z4tj5KFridoXm5Vf76PDV8R2eh",
  "key26": "3bR1eUT3CoBzKQQKUmRUXtyxt8xdPttotB9QpPmn8wSepTz27mKa3C8wyDhRxsnk53JEH5MHhRk5fT6w3akWwDQu",
  "key27": "2cCVjGz3bqopQxKUMhNVjP616WUdzF2jV7EXzU1VtjSFPZHZfZv2ccdH3RDeGyqmd51KEMhojEZQwSSxhhgQeNtu",
  "key28": "Y5PkbevaadgmUkB1v8aLhthBsUZenAYRHtPNyAjafWS5p5cq4egMQ4XwczaZiRZGeRvkwhhou9dZzwMn4XaJxXt",
  "key29": "qcZfNLh6JDkMMTXRvLFZqd1PkeXLiEZEHdQShTxVoiB6qjoQjG3AsvcBtcs9Qjx2QekJ7YTfC1nNFnLaWB9N1hj",
  "key30": "2CWUppWeZ35TSpcW371xY5GrR4me5Hadv62HrNhp1gmjhzVG9xbUHDXtQdE1r2rAwSB27APSbnGh7qmjRLJ5ATsN",
  "key31": "3CupRhgGhVwvd8YPcwFvH4vHYTcxgD4DWF1Jh1V3dyFcEs9MgH5FSSBob8SpqF7WSta1U2WTYg7thiVegeiCJmCA",
  "key32": "4yZ5dLamK7FA193UgWmA2UK5Mxukzd5cYdbtsiqUGMLSXhft4NZDwqn1TTCkCsBUSMh3t459fsz5hk9N25Dk927u",
  "key33": "4SjZvd4SZ4tvEQaju7NFZD1zFCNLBeEZaPJ7hjZUEr6AaH9TMABYBKP3ShaW35sNiWYLGdAF1Cck2FXvAT8PxyF2",
  "key34": "56NPSaTccrz7gULiEMmdTh1P4Z448H3aAZ5XuzF6bh2h551GVfrhp3y9imqMpPwmts7U3Ck3xhSq6EmdER8Nc6mi",
  "key35": "xH277Hq9W9iFnMZkzKyeAWVpwJmxTEZT5K3wwUEPe4M2efKQiMavuirdQurRHbxvKHYdgikEGMj2UmjhrGqZ4gK",
  "key36": "f29HDcpcKVz3Aa4x1Z12yfkNJZaGDGxJ4WqASNQFNLCiAET8Pa5HKkDaSqk4wpsf3NP6KKfe4ieQmBQkk6oVNDt",
  "key37": "R5merekr2Coc2vU84wAuMymsdghM4GjJHak5NpWqn9ikvq2RT8YxVA7vfYNTZ8Ukw6NVRP5fw5CCDVou6TDkxN3",
  "key38": "3GofiQeaotijpFftwH2tGj32n1CPPJ4cUV3ZDSQhQkWMBEorDTPpJMW7iZrcBvZKrGhdDFaQXGhK5q2rghCzLjn1"
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
