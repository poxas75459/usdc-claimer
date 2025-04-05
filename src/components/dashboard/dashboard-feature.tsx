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
    "46JoAuRt5nfAf6pUHVBjZ3DeuVmp7nToTZxnaajHvRzaHEwa5vxwJPkf3jg3UtGjKgLQJgW8pwrfjv8cMBzAKG6F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ExMm9T1FJ3yp8MnbTThmQvTRy2CkF8WyNGHvyNAHiLMiDbnWmMYRRpFHwCvFU844SoHf99nNd3U4VEsP1aKXWSv",
  "key1": "2RNEshgh12fS3hVPfQZ2A8aJRXhsPXwWvVopKQRAA27QZ1nJFrktY2eJ4GuDPfzStNWLjuoQmxeZ4TckpN4GG1eR",
  "key2": "43dvYh3xLoVcAomnb8nTViCsXaMsG87ctoYdmgNLYFjgcZiDfhsXpivnbMyaQXWbX8hU1wjKcGXhrxviedjt6Hs3",
  "key3": "3h5stig1aptNnxQgVWmF6PQ4LbcCbb4Mn9RwNCDhvi9s4XxuvXkVmMBGedUzbyxv34MA9R7JX2gs2SDiTvMrh7fA",
  "key4": "5jRTNTrVapC8kLz1nYLY7EeUm3nWRir97eyv9NtJaq55YGhdadFag43ADBSyW9eiQyvPJk4JE4wDRFyzw1Xh926a",
  "key5": "4XnU2kgSFYJVqDU1Fg6z3GaZ5eSaNqAtJSy9F2ffvUQi3N6qqnkzWWVbMWubwezna85vARTGxWXVja4APyga7RkG",
  "key6": "5MrS9qksKxqQe81BPqC6z7LFUij2Q8xRNXGcrqACMKZyDrJxRfrmTCqKaJn3VMweq6P2d9baE9VC1pWDLiJssao9",
  "key7": "3YJWeky7pAa11JnfmGFGahQM5fhLQgbvjGmeW88i5hxPkQkdSPUZTTiAyWxxi5ZpsdhXepP7DwuJJQbo8orD7auz",
  "key8": "33NYqo5A6v2YY1D8Vh8HtLMHzXny8L5ifUVkxjDcP7dEkA4Q3GwyHjAJ2Tuwb5JDyMoiwY42aRCK6vhQMonLSXud",
  "key9": "3niBTpqqptVnFgk2yrVihGZWLirVUavy6DqMwKaHxAbCUHZJaQo7FjTk4fBnAg1toNzJr6gdroUrysHGzBUGrKUp",
  "key10": "3K6RwA2G7chXvYHhx3LQFiL91g8ApKai3b5h3RpjAENENWc2WtPeykXnjCvf8txk9iAkm1FSZ4WiXJUHeurzedub",
  "key11": "2d1BjDngw7fKxeukLqatazr3YfwCQLbVs9iJDVwYpFBvWLbT3rkmcZXCT4jZtp3xQfMnU1nukgZc9fnmQWytmY7W",
  "key12": "4fZJXgFievzbAkHfVbsUqfgw67otZqJX8ouxyRcXwKq8hUbd6NVyCXWXJsSa8SmhZTxxVvnukNnZw6vRAEv5GQcD",
  "key13": "3ELnBht3NZx6FeCJJHSvuePY4cmtAJsc8UsPJK49s9QQ6iyqhcsVW3EhmMW3k43t8NNs1as3b1t3rZWEXhea4D6o",
  "key14": "5KBPu4oSJhsKFE4Nmj1Pb736GuYUSA4u2SnnPomtigaHvPA1aVCMsXqEmc7nm6fEneKoSSAaSypto9j5ekeNC6zB",
  "key15": "HUPZNAD7AVGRch5WwJ7tQywqmxPVk1uYmQTAuPZmgFj2cdAve2wFHcQCPXP86GCqRBqAHzUpH7G14N8zAfwn2WD",
  "key16": "37WFTsqroxnDdANtHsHN8tSuPYNM6R9X857N8rhUvDjqS9ofthTeAXw4XW8ikgK8dyTcdamdT9roFDfQQFSjWCv6",
  "key17": "35z79AVNV694gJt38UDBuBRxvodopkrEf3X3RK7jYwACtP9R4UovSnV9on6bjkgng5Ai6oUTZzeMtug4K1ydjuy9",
  "key18": "2Rkz8Y5XNNZba24qKHBh5P4SEQh89jPJBMGzQBFX42oJ4boWeo8aizM1tsTMK3cQFeSFHKAMmpzQtq1DCNJtowMz",
  "key19": "21JGcue8ChZv4dM8EwXjSHz54FcDAHPAk6qtS4GJBwWzcDmukAFXzTrrRuymkvpakubY2p6TuDcYBLrAxZK88mfW",
  "key20": "5wAvgzrZ1Ax37VnbquWZSYTGyKet5YduuDkiMmNibA76Cc6TFdnmRsUaMidw3EQHkSmvfx7famcnQEf45xRAxXKB",
  "key21": "5T1Zz9QJQ2NuiicWpggNfMmhJdhf6oTS3ajZQVwpybFwYQxAKHm5beVqWvyokFWtQ4y95gRoFxUuSVBQ8ftjexW1",
  "key22": "4t7ED7DGUwUNsawqrGheFdHU7FdsQUTuH8yowdAawzqnDd54GsLzhu4TgF6FFH8B4bURF1S9XefDznaAW94fAtKi",
  "key23": "37FJ15ccGMuAJLyJDinspnpZsc8GBGYd2w82GQarSVbdEJHm6kzjX6xxe3FtAKpfzUf96ekAZ4LHxkVwmu7LGpT5",
  "key24": "488Jg5kSLnw3nq57B4qesxEHpQLHpMH2UALqqgCAtmT7ygofMXT9nLYTmmfvWiJXaU6De52t5Zy2FMbSUEBNUW3P",
  "key25": "3tvVY6j5TgHBvb2RPT6ApFTRyzbvSiFrwLr1kh28Dte3mwMAVoScDeczYWaPNESreiUT6DgAAnjAWDPvMxw8EB8y",
  "key26": "3QaBK1ufNGceHKYWXAYC9uaPW9tTTW6BFBszSwRq7mWADBpAZvveYDytvcg6zPtNcJj83QcqQvmdFdD3Qto3iWLq",
  "key27": "5mhnSX6uqq83uaKZJ99JT2XQkQ3X4nGFkv8pY7EMiHpdKvXmFW9asEoB7U8dvNkX4iMj27ipqUHuUuNn4DU4VvRP",
  "key28": "5zARhXYRDFthFzUQsPUKPe5yu7uu9se892Mi2aS61gunswMmTnVnLR1MiBcNtucs9YxhtEC6WR2UnGqEV3qUyJ43",
  "key29": "3mTikSTqmDBPMoPyuMwJuaYRQtk2hi5AkKbqsWej4Bi6tAG389HroGxmqpJ4PBUBrC6zPdYkho2kXxQ8CWB9SBHw",
  "key30": "4c8LSqbz6sCbWPtDj6NZpRB6nniYBoEXznV2MPGwqrJxuq6Copa4yquwkKuX3Po4HCqdtgngQSPWtMokNfW2dqwF",
  "key31": "3rZkw4JvvzNT3D4GP28KrFjGRHFnFhCiFjUteTrkwHwk9h9pZC15SgwSr8a4dpZeCKtmfXvmZZhdRTivw5aQBWxL",
  "key32": "52VZZmCvr6pWaVpD7XETRSpqaHY8jShJcZ2Nh3YGCPpXdC6g1oEAr3KiLqeNLhHwqQfRssJP3EswPpxHJ28FPjWs",
  "key33": "57XcahP8amsTthenVBWgtC3AYQmjNFq7YMUztQAxVC7jdU65HQMpPzGtyT5cqKhyLg1n6CccM3TRqyPAYCqBk4cd",
  "key34": "5nEVYsMoyjwxukMA45gt1p5HgQqKDFo74cBsMqctU9kR5MifsDorUXX5wsVih3YR3bfuMi5GPRLqfExdmkv1P5Cf",
  "key35": "4S2txTR6zSFVg3SeahJVTitaJ2XQyEztaYNczBbwcgRMqnxZ23R56DUoZSCsF3Hb7fhAA4VbexJGVoadoZy8dXRx",
  "key36": "2FFTs9TZK1bPYdkFyM6bj9ebDG16dgwh7emL1kknLbNLsYUhJUqDhXmi1cdbAdyv7RfLEuxsDkUsDxNuxrPEwMmF",
  "key37": "iraQr94SrTYuLQNPWiR2HsJLdPmMfGgREL8NXMpFWE3rPf3qHhU4zMWAq1UGAxNLoFdyGxAzuoMPR4rZz99Ax2Y",
  "key38": "3qrWPcoVtSZ2QHLRcbPcoi2jaVJpwDMitH8Y9j6abPJyATdzqCRWQSZvnGYQKw4XuCry6EwbDXUpqCNynQps3Yve",
  "key39": "Xo7iMg7pBfiwAdcuxxKToNL7GGRM9REomTM36ej2YQitdpo13TJPYvUHQRDpx4eQeWDWABQFq4WSeuL5FtVuK99",
  "key40": "2Lad4G5dPZqFj6nFz4K5W5Ndyzv1xPmueZrqPwRqutgCcoDB87ZdP1KQYg5jPYbdNegb8K5RSvsLqmz5E4bDU3zF",
  "key41": "2R932w4ksEUhVsepfghrQkv1v5GqonxwNfmiCzPRhLM4UddYtzgwGqsYihbsEcZZcmBYt7u36C1qaifHNzqodXUJ",
  "key42": "5BFjnWnXph3qu2bQDHE3HuS5GmagdDVnbjTjYhuCo5gjaEjd16NxWdy6JvDhgx4RLtm3TGMPpFkaiuW4BGt8gttX",
  "key43": "VvTby2dHQ53zSeH1vtTKNpiupFZZyBdmmPK44wmVdHLxL27jpYNnRE6FKQE34ocr5HWndadtzLn6YRzJmuZz2E6",
  "key44": "bJBgXy3PtkpVCJRnKBhyH2g1GMHXTc7HJy1h8dyZXoHBA4xaBoXk4yT4irNs3421EVEru9FnJdCAfsPWYvVYQaJ",
  "key45": "3aq4C3GQz3pb7Fm52r9KonwEgB93xkEr1RsTBr2uXNADsV8k8nYReUh3JmLK7S3qoCJyW981QR9yHjTGBSWv4xhX",
  "key46": "4CvQg56cBUCfQ4C3AFXewX5XTLdVTrVExdWTsA4aSZxMkXU3vKuXs8kH56t7zzaPMhihtVoiY1JjbhcJX2Eh2E4f",
  "key47": "64UW9Ct5BwZJ5fnUk4bJk3vmn9yC6ZGggNwm4xFebtwjYZDdiFQYzMJNx6LdX5CYoPn6fAkvgjoarvrqzuEz4gQ4"
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
