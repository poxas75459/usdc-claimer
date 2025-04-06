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
    "2YiPRaqr9uqNEwuCNaWT9Y9228FjtX6KkFBMyUQUVPk9vMzeKFwCi7dbWjW6RUuYuzyzY6eYKjR6Maswdkn1NQbq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uqfcAox5aSh6Ndm3BMtpydDgqz7vyq33cP5KZ8u6SxpW1aj9anyU8cMAFfSX28XcQjvYD9RSKC6hxEAoqUVkZZY",
  "key1": "2FdoB2ysA5sfVJVLcKynxsAU1B7yMoXMkCBmFLSGeh9eh3AEuJveLsYT4CNbsVW6DD1MYFeQCjYa7TN2eMvbT6mU",
  "key2": "4LpRy5Cz6SsrvjKdqm1AVcKGzKdv9LMVyxz7h1AyQFT4nAiNQamnWMs9mEf4XoN7dfZqrbUzRuWoaX5hrsq1TCVx",
  "key3": "5LtyDUJAbgkrpxVqnhabQrdNb9xpwWatDw16crk7rZZG5uteeowPY1AH9fpb2C7cV2vCDiqTp6mFiWBqvcFvYBd9",
  "key4": "2dqhsMZCk525dAGbSiBjZKfEqf9CFntBLvvHmREh9jLfEQtjfMhfK5B29cYRfyWHUChDXGnpzaYmeCVPukFBhbYq",
  "key5": "52CZkZfRGQLMfVG1VyMday56NPnjhyU9gvUPpeGp3wMCyd4rtxojZcy6GxhWpTrjdQgrXNcHL1x5u3A6kv6C5WC2",
  "key6": "BE5BWe8TWRT3ugdvHc1wiaZ7YfuzAk1pHRupAU1RmEQ1CUoCaaqJGz15k5V1kZ6G6onJvLbmiRysxtJELzzjMsH",
  "key7": "nJTH9eDZihAy4VQYXKwRoRhGQ9xGyBfeMpAYamunYApfeuQnu2pUskrCww3cJVKuujznzg2Ac7a5PgdYTu5XeyU",
  "key8": "5KPXyemDwPmhWeTh6RMJMkC3eJHCiV3GzZeDJydF7xe9KhUbywqwZ7u4x3NjM6ADDd2EmdPBuMjGRzVCqL9VRbh4",
  "key9": "V2rEbp8i62MofBJYKBkZYEPMTRN51f8JWfeFjCEoKoGDwzKve7nUt79NnDpMFvJV5cjVBAuwheLsjVsi6sSJ18L",
  "key10": "3c2B1mHWzQvUL8CSDDgaQzz6BACq1e5hxzbXqwy83aEkeMYUXVvWuCMo6gSmwZVasM9LY7sx28S7M7zdZP1WfD6X",
  "key11": "5G3DWsuJmfTmRNHL4f8BqwSQQGdWwFyruwnXQNKvag9BJppSXuaz6A818bvLLGfkZByDP2V1duo2hgfKHfRK8xG",
  "key12": "4QVg2t4y98LMj9NvuQn9XVmaxsMtatvzG8U12VrBD9GTZMKDJLqQEtWNjjEtNsVqhsFRd1XMfXcJWChEFsu5TpB2",
  "key13": "3TgbiyWnLGDWg4nzErCw9FD8v5PdKfK4VMjJaXsaQ2G8xGcMzvcnePfYJ7b6vZJRXWdii5NPUaSNVQL7FJqXygUX",
  "key14": "34JJ2gHCW5wYpr8gcJWLabHEpXGLvzeD8zHytFuFhMRLYceaQardrgA7SGB6hE3h3ppEnQNPSQfaKE8EZG7rmdFW",
  "key15": "2ozqFEzaz1NBs5oZaRYjumiFJCXnXHAnAzVe9VeKuR2LegJRA4r9MVCJw6q34NCija6g9dQe3TEXTL6UAi1hGeXU",
  "key16": "5CYff5Fkv8YCw8NGpCMhL941fRih3WUnm8ZZRSMwVkaHEnwF6uXAi69jvNiLGxd4AGN9PoHbcFiPJnqUf6vbPfHF",
  "key17": "3p1aqoUCybsNazYVw8cjbpmXkrozFmDTxaQAnExDK4UyqA61MJEQpgvdT1BToMjd5txfYAdtkBbWAWaucN1ivAMR",
  "key18": "4hAMEMufuqwzYkXCUGgVxKGcEppVaYX2cdVDTyPtqy5mnbd1WXvUazmt5sk3zaQq3fFipnwUQRVcTqecJAf4qVbL",
  "key19": "4ve1e7TcmFBryNnX1N4qDZvku85aYm4RvewL5c8zxrziv3nFSAe4zq5XKLcnKcQSJ5v5gwZBx2kDSZgjZT5aaXqR",
  "key20": "zPKasBnYLx7eAoNAndHuokb8EQJvAFbSXs6mUuHjdAmKk1cdiaCgBaY8oCbCXBhKGj5B2mAoD2DsDDYvuSPmHYq",
  "key21": "pw3MdX6Ems5oP4rBjtXVs8dEZQDLcYzzzkVAuEUGLYU8NGX1pUYFBsGrLkWmJo2rvHdNCdjS9wn9R4HJC1Fg792",
  "key22": "3mG92f4syhrbYK2Ed5J4pJFLtGWEiTsaZSeEeRzGxZMMqGeVusVhBVzNJ2tTaK1AWptqSJZa5sA8RVw2NMG4kDuV",
  "key23": "2BXw7EZr69aFQs94x1qq1cBa9mmGbhwAX5fU4PsoGtVVC9zx5qvuMwYTRjDvWUC7om6SHWBn6t82BXRhkWFh9njg",
  "key24": "2CCBa4CetDaAJ2iFnAV1BtgCvDYXPBNprGgsLfdsCReCoLsbRh2hRa28A4er8MnfzyWJMNLuGJkgw2tMxBWgMSnN",
  "key25": "5RSLg3UAvKDeNuHkAzLWoP17YALsQm2SsCN4v2euJ98id3s56CSp83qWBaU7ont9r9X2HVaBycCj8HQD5tY1Qg2o",
  "key26": "3LwGfxiTAyS64gqbqwQqtAVL7e6mik5GxsVUEuZDKRuDRB1KqR8QctGxFDBVUAemhd6SovfgzC2nyY6Av3B5W95X",
  "key27": "2L76zjjxBCA7RU6jshGj6DBQn6i6j3VkSvdUapQAgBNtkR6te4P7QRJWw6UB1URJyqDqQqiuJ5cv8fdV5VToBsdo",
  "key28": "3rcQPGHN7FnW1HcBmsLGapH6NRkhsQysHved9WPSQorq9Se9AEbisZaAvrAKK7DGwCgmdxwnWQKEbnLC6ZsBhAi3",
  "key29": "2uvZrNpXeHdEHtdk5K8x6q1kWehw7QwPrcMLtUgCsAWAzFywwzDacUN9BftgSRhKQSAvytaTRpVqWMoiZpmzSCH8",
  "key30": "3FRwXLVFqKwAungf3puCfpKyuTty986qvbxcKne4MRwFiC3XtoSJY73RiG6D99yPZyty6VuQHFZnKMxZ2Jp4qwdb",
  "key31": "5V9EuoBbggKFPD8VNeeKkoikBeDkGga7tu2kXWuTyoUeXkfQX3J7xrRJ8nBAuApx6FDx6J9GvdLpF7qUUWtbGjF4",
  "key32": "29pMztP6FDCDFTmbr8wVnWoP1yG8aTrxWkyziuGaqvm7QgwMcX48RbT3FuxqiEj1uyHdjkimKaJreqQ4eJ3aqMcC",
  "key33": "3vcLDfp7WTwVSafoozTmsdmSp86u6Xz9TrGeg6fkknb41RixpKnzAvttMZgP6FPEc9GPWVowVb2Wxn8wkG2vMNaF",
  "key34": "2SfrYpHwXLi29pCiq5FuvicMZph6JFbRDCbu3haGDRoTAWWdLrug4miDDZAgdx7mgpiX3GBmecoRyk2k2ewSxL5t",
  "key35": "4YHDcfZmo8J5zvgBDr1hhMPWfktfwnAjn7M2WZ6xiDvgjKnbr4bsk5DJkLxyY2NCqwVzHYcMAjQkzGbHKRuj2xW3",
  "key36": "fGdBuwvbtayKP9wFXMQD3LcZKTj7MP33CQKmTCouhH551pgBorewGyD4bHkyvjpfg3gRsfNXKM11rvxMvGpZMuw",
  "key37": "4oonZscJhqaQdZsVnbrj5PxUgtoAMAXeVfmsh1q7wSnX471cNEbEAje1N4F9GfpiuT1LvsB8pukm7nG5LmucnqU",
  "key38": "MmJkhVsaYy5RKHSprvGo48hu9DSsx9rZSr5DwCmB2bhP2z6s6iwqWEGpV8B2CTyz8opG1unzmWDmkvuvnMSwEnW",
  "key39": "4uG6t9cDzaZgyLGke5SGToto8vid5R5MTqbVbcp8mXKgnMiYNFP7QrSjwVRhwriLFzKopaNrkyE9zs42n9ttwxyK",
  "key40": "5U9MP5PgSAj8k4wZNWhhc3QE8mr3bVqUmJK4BQZiWcBgLDnL3mm4iFUH3iwY93PYf7LXfXwjBJhex19BH9fcPVTV",
  "key41": "2FraBeawkBZxVjjFVP8tQbGX7tTAbYEUrJtsKjg5dS1uvqqa6bjAZVx8y3pTooyFRTFVV9WAiuMsGfYWa7PN5yAw",
  "key42": "4qtKxXAtFF2m3CgxnFY8piGFj8EpFAimCSVHNZjNWSHTDqR4QX5EeRHefMJRX8AWQoNkXCx3ANSxzXYi5SmAKA3Z",
  "key43": "362TzRcHCv953zn86cuweX12ejtKvGvQrQiSi3Rj74myR8zW1eYSq7BpDk7bMWovPdz7zJH4DWtYvdkTAcYdosCd",
  "key44": "3sRy5d7vApdaDTucmRA5wt85o1qDgTajKedWE42k3dKuNHsqD5VGRpWChdrQZTk7asGEQwihBfLi4fn1DQLbfXPb",
  "key45": "2tQ3cZ4NpktR5FzuynMQ9cJUi99oeCsrbF9nky6QKEYvbuS3Ao9TnR33QRL8zYwRMRRRAjWAxrQaGvCC3PY7XD9a",
  "key46": "3fKvtv5g8oWgYBY3XsMK8MhwYo6RzHqF8NmZaCrKH3i75FKyUHRSWa1Lm2GAmvyyXLwNPR7X2gTNZiAgQViczjj8",
  "key47": "3ZhMSH2ntf2czGRC2w3TaeisFMXERegbpGTZ6oEtzZuBc4ZwdkW74cGFBDRWsRHo83H7xrn7vaHs92QacWEDZgAp",
  "key48": "4YQNxbsnGZVtNTDmgdirbYvBcQFFezoiUQCQKDxCWfeCg6Cs8yj87hM7nPfVddA13S4nHYXsTt8q9EFqdh8uvWPW",
  "key49": "Lv1ekEzgiCFp46ioLb8hYMs5rbQtgVBJJHLRpVh2P3eJYd7XUVNnJVUJndiQRigAMfN264s8mqz2kGXThLpHmAD"
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
