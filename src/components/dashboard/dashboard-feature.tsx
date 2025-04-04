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
    "TmgpG3FzwMBGtMh8xRGEMX5vQ63RKybB4FyQut4376FvtdmqvLb8WeeN9gCbtpg3A91GqjRUHsoNwtX7Dbsz6di"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fNbcDDAj29FsPTWt61etjVDt93AbsCTZZsTnQefZbudh468ebT8Kze8L5XGznJZSB6YnZiJXfEJ4EDRoTibPNEU",
  "key1": "3LvdarZFzdGERvhTkbDhh4jGAqY1pJKRixytgfmV21mqQ6iyBUQNiZAQWuxaWKUqn47r6fh6J2ZMKERZgZyzaUH8",
  "key2": "7tncWysMWwTHaTo3xiyMGe2uBqdPN4ysiKsvsAFR9rt76tJ6akZEQMP22PkXFb6C1KGXuThrdT2cHNxBnynjDd5",
  "key3": "3QJsjVN1YmwNnN8bWuNQS6f2uNVfifqGSL5vjPVPyWNwAj5N3pFUejwBypgGtqsf3AmFwTaw45izQgGTV9V5gsYZ",
  "key4": "3GLq47R2wZcZcQV9rTwogeNExNV89Sshjd2XtnyR8e73rHqqdjk8Qr19sTvEv7w3tXcL1fqLVJEsjXvch5dXqsv6",
  "key5": "fK39rvpVXSjxDeafHNeToLq4w9zFxRBVASnsDNe5WA438vqWY3DGgAHBedgqfpaaTWsmwwmgnKW8RwwrgVnjoWN",
  "key6": "4W3rnHm4gQxd3U1GRYfowB4V2sztgTC9hVxdJtVTtu9KKDBm66B7e67quYWd335objq44X2kDeKAi1dbmwF14oF3",
  "key7": "3NQ1KnxUFTUgejevyYrPKpuGuufdGHNMdYomiXbuvk64rpHSdUh44VYtCuSqPM49btGC4RDPxNMmbjrUzE2AQcB1",
  "key8": "BQXhWU619gZHsgGWQS5jpmGQEyNJRAMants4ioBbQ8fLELLDWVi3c4e4ydvijEZkGMmZZURiLAHTvJXYyEcW8Kc",
  "key9": "5QdgBo9CvFDhFMfVAHDH8vhRvcMKGF4QsDh7WdHEA26jVrgxGTqCrAH8MiUnPy9xctKnZ4sy25Gec3T4eohZsuTX",
  "key10": "ZF9knt9xAk9Rh99vAzDbfz6c8t2GFxmNT5T9FD5ds3u8KMsjjYuMJTwCTMR6MFbriaJoYRK26wp7QFDTy5pPVwR",
  "key11": "5Uf5DdPE6tWwHnZqiPQDhpFThpqdXSJ3vz1ms2yVBhw7vWFQKAdVcnFvVkzY1TYfQWeoNmNPBCg7VSCh4Tm45diM",
  "key12": "5CgV23sRMLPFPRtSneGMzC8KKK5GkfqnexpyK2MSMsEaQpFtqXe8s1dmZbhNWRbxuwCJMAo9Dg5BM6WkiAHnnXuf",
  "key13": "262BbPdgVp3P3GGxsKvvA676cWCVDeyxy7wnxAFvGCgxKuUSDRX3pXQ1SceP3HMYd3qxrfUQBwKRiQBj6UXjmYbw",
  "key14": "3qyFyYXuPkhGvMvxevXJSR8TeanGBAvAJurGemk5oGv7To7tbZLAYRXozj8y2FW8pMCvDGUw9PgBzQvzGckNgFNZ",
  "key15": "mRsAK1s3mzzqpxnwaszVPGCd7QWKYaDf4qwmNxnTVE5y2Rdf9H9JhDc4DrBgz56nfEEhzY4rKrxW41kaMYudvn5",
  "key16": "2diohmwokaAGHXiY1gdCNh7xxxjckdFyTFE9w4tJZyMcNMbK7qV5UgLeBbcM94bKBjLJSmZxrGsZ4S4GnYeiEQfr",
  "key17": "5BrctbXtckocKbgg6joMdyLU7XijNDP3NSfBE2WZgUiCyVUnowgMPdVhyntY9tpPPr5HjSb1PjNvcQBhGGUwtXhg",
  "key18": "4x3Z3VsYShTD96iX2YmFpC4xpi5SKxUdQBxPc7fYtZAxT3Dt4SKzA1y5J6DCR5i69BKSBFxx2CZ4RDGLCDEGEzCg",
  "key19": "zrWxBkM7WDxH3D5zNUMwokeEj6LUSHEgtbpQFNoy1YpG9gTQ8UYgoeVH3aAPQbpaXmKKtmjQ6XiMhntzhk9GojR",
  "key20": "2jCBDNv6q8w1PTpFf8m3McYLB98kyTrghiTzfLXNikZjzhduuV1WRsXZuLFbsnCruN82ZUwMzSTPmDCc9ktkzTjT",
  "key21": "5zWWySSpfpSJ12mA7Fw5h6LH3c4okYwqxVhkNvaexaMeV8jWBcHY2ykiCHaiNt1h1qEi8sMC921KpggMmXWw2aUY",
  "key22": "678WuNinqwnfZdxkadZpYhLmPWk1QLCcEAfK13VNBkn2A2GYKeJNapsp9ufrasdt3truNVXPKWumgMSUn4uCztke",
  "key23": "3WqP6L2fpUKexzPbLAnzo6Ss8GjgqFWPEdyPswE2NDp6ZxkxDWHz1yryEcTbGjhqMgjSyBC1Huvp42By9RsESMxz",
  "key24": "4z5Pc3AVdcjGmAX9xFEgvHguR4Wo5q25xzCVWpDjgau4EHtoEABqrp6RAZ5LRGBFA8ZNVkiwJs4Vypdw7G8JUkHb",
  "key25": "2C4AMVMYgKpkucn9QfQu3khbwqhLM5wwP9fT1aiCDmdhu2V84Tq4eRbH9x3oxZjx8KE1qdRg9H6to7Zm8RYHeE4u",
  "key26": "Pzo3CBay7CeGgsvgVHjW4FJWWs8eVtN4tTsn7JhuVrfm2PQxFGQJUXAU4GUfJhHnXvnvbsLFkGzqLvZZZWWUK1m",
  "key27": "2YNCN6Y1tKNyTu8YRXXQWCxVdXu7gLPa9isvKFkVf2gkiCzhSSggLJS5nwFtkg58pXQJWnvQWotBT4YSLk6MY4iL",
  "key28": "5LAKDsMtNApJtsjSjZQtmfh85NoSQ414MD9ht48eQqDWwrew8ua2uSirPMSKMF3ExpT81gvmd5WSv6PDLLMuht5J",
  "key29": "58QUV1moBfi9j3s3p5CxadidijL7toz6o1Bsj3BLixDHkFWC7P6ZKF9RF5s5zM8VqfkkYsYfddYGEY6dcdBNTgPc",
  "key30": "47NYhNCya5Q9MJPDGXnHrU27hPkmMWuqorZseswnqcMFCdY7fHFBWFzPbhL1AADgK92LGhDUrigQmTYtuxX8GzY5",
  "key31": "54BpFXSZj864hGwKiAS1BUF1otYsEcwymyJtQMX2dYXKrR4e9rzKF4YmxcZZnVesYGJbTRWMeSnRKkEkjPczCV3e",
  "key32": "3mmDNifAhyu1jy383GhSpzSSqffP13TZDHw4MjdedC8TdXhLM5Uw2BWKBHb5inevu6hqAX6LTschhZQNHjDGJvHS",
  "key33": "3amCF2S9ifVcjg8qzifPyauz23mA6PRiHrpnXUq2WtMCV413n8xb6fK63hdUyeSKp34kpGYv7ybj6ecjqGMZurso",
  "key34": "2JyP57TkrGntHFcYjW14pEAw82g3VQhUFruTp53pz1Sb1DimfPTahnouCeGH4SKGbqS1GR5FzP9X5SCk4bq5FDJ9",
  "key35": "jzX2UdNE9s9mMfuGN7yZrGixcGf6ASbovdz13D6TT11rT6zRQ31smbjTWyHabb36sZxU8syGvX3cAm2it6U3UT7",
  "key36": "4BYuD9N3946RNvGqCwgjp7HQgu7g5dkPXSG3Qm6U1tYudw75h7qpN31cc8gFR6f1ng3HfisCP5LxaaWkjrAo2bR4",
  "key37": "36Gs5i3s7j2ptWWtWMzHdz3Vg5UWtTQNXuEESoxj468oPAcqdzHEAXLe9Vorp1iVn1tTnhaJjhhDKke8Gt1tVHLy",
  "key38": "LKQY3U7pmgXGGbzZhXc9FpUWFrvdYNmLXuguWRgk6BcT6prqbMQxCxL6XMQpqJNHY4VZXBTkABT26uFfQA4HC2e",
  "key39": "e2P3BRzYq72A1TFxvJHJJBQSG3iKjbtU4HRoM2yeD14uZ9W6fw9kctg6qrHRjKKruFWB7Niw7tcvd8agB6uYuxF",
  "key40": "mdrp3h9J9MjRB1EaCcX8FZ11RxCM78DBAKykyPpaPKFKdvwHrjvtMVe3ZCRpQ6oPSsGFLKkJLTpCE3NxC8Z9GnS",
  "key41": "5MLxhWPPanrUgLomS3QLCHJbm2fRshqkbddY3wYDBtx9CHZu3PH24mazTzSAuWCrnFxBGzsyozK5JwQ6755B3w2p",
  "key42": "HMQEDZ2VvF18pYxFpyQnd2VM1L3XLjvvHf23aNF8TuanEWaeqNdNyZTzcxTZc5FRvJkosRVCxcZn3o1zxe7cdG5",
  "key43": "3wz6cjBiQCiaYgPX169uPD6U19PpfMBgY3omvHwbHemn8TkGafT6m9yNxtUGQbgdHF6PqbkEJJwyjKJB9GmPVhSR"
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
