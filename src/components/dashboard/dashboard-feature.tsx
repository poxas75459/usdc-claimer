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
    "Ws6JmSv8W6SVieYh8ZhcGioPCtddVEsuYoMgeYZhUnZmmhAWZbhb11VcHmkkoWtZ9LapBC5NGSVYWnCG6Pdgf4F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2d5oe7khRfPPYmQdrzsYKAqUoAw1hNqxYwLV4Pi3sqFhxwZdzbj4UVL5V1QMmhtMXZu4Wwu3JT3yszp3Z95diqXT",
  "key1": "3cNvZ2RJqzyzPu2Koz7ggcHsFkgH1FEgucuvS9MFp4AMYaP56y3axxagX9imVV5VbjGk9DMrZH7Hyzpdw5TNstLA",
  "key2": "xUiUtbBQq25XhkdJwf6vqe4U9SkKQipdSSRvzsxiQpFK1X2qTibSM4sHzuUKB68htdPgsxwVH7whcNZVJtouWat",
  "key3": "5jUY7xcDFF4GGQu8oSQftbeoVjPFsGj3Gvvk8SYRPy5gM7QU8ghbJsSicCWFQFHtu4uJ4hH19EMZ3EGxDaMyN8HB",
  "key4": "555HpYYVP453U54iDouqJBcrd2vVSia1wfLsAzeCS7MSwJL2m9Ttio3fzbq2EEFavQDBmN48vGfBVzbDPgt76oaY",
  "key5": "2dBPxeRKSMsBtwcJ5e2RCKMb2r7KkNte7Pw3Wdjo9e7AkbgUj7c9pwtRhoycC5WTVSd45gJ2kiCwr9vyZQTM5fRa",
  "key6": "3sko4pCqt92jPk1LvSB12hCeRybkZNSPDEsS99aCqhMc6pQJyxSVAFdY5cJXH9ZruXJqJnB2KC7ft1WJ1VBg1Q5e",
  "key7": "24yB71F9xUi8mbhCXp1QLagis6i2iEazqCKC6cebaWvi35pyUXoNxayY49stAGiYt8AZ89xHZtzMBhjvfYQajh2h",
  "key8": "mqQXrvdb6rE1mvyoReRq1H7hczmmoCRceudAsKXqgiaAGcZXin8wUgdwdaF5rCpzwrH4bLar7LXziZmdgqAjx6K",
  "key9": "4KJmMW1BNHFcH5v6o86Uwfs4u7F6AfYStkaX4Zd7ZDJAXRkCAUzBBZmS7j8gTczkfu6yaPrEoWeoEXQbwp1CvmHd",
  "key10": "5uY1U7EEsijo7b3FGaD84wNR9YVx6FRnXDb2ZzztXAcPyZfhQUye8DB5AetbiVhDofM42U4YvpGKGGj6kgxEGzuL",
  "key11": "5ZCAzDkMq8C4CCkSSbonSnPRVJpz6H6L3thHY5idrnoNafKLnwct3NnKdpc4nde2j6yeP7Rhjy1ujre3rqYJrnLW",
  "key12": "276jm7GSxNKYZ4fD91UVr2pyvNnMHzZNNAtQkJbSX35PDEMmk6ubwut4SFeVMb5cGt8P5UYXWEKvHPVKkFUJZm2w",
  "key13": "2H5C2TyV1kjoA3eD24Xv3HTgmKAsATRmbbHvem28ge7GdMFTc8EiyA6ZLiVTQcrHPQiih8t8wR8C1TtBsuXNNY1T",
  "key14": "4fhwuQniK3B6EvNAifh63eKLjCwEZhJRNveK7damsr272dRAPYBD3qrSvTDPtndNkNZgMM57MG5AodGnYXBniuF2",
  "key15": "6qWPHHQG8gcG6nEtcjncGfBpnVwry2woDKEz8hFKZ69vHgTn6G22WMbwMhn3bNHPH4kX7UPP8BSgrpJ1E2o4gLh",
  "key16": "mdkucWepZKAhJkHmTxu2Bd8DS7o56eKv9rp44nUHZcaDGHFb8yfHknfRCtgBCb6yNFYwpHtfkQ4DsLobduHEzrm",
  "key17": "3KaP5TLtSexA6JYtYhVxMExGjh7PjDh7rRHqe9a92HCSTcuggiNCxiJ3kwBu1xQnDSRTGBVtS1A8wf5nwALzT1pr",
  "key18": "4rDPbWsosd8hb6Ku9VFr47f9NQCcm5r6nYvma2HyznUXc6jhaazCjt72bk9Rqgyf9Wvucgq2A3D1hSUs2mJZrLZQ",
  "key19": "3T9sDDGmujeSgkndvSy7jxNz8uiACyUpfW4kuKcZFRX6LFPnLuaYnM7yqSQfST4cF3hEPyBoHqGuUMGtPAZDrg6f",
  "key20": "3otxnk8McMiwWiFsgdvcbGbkrzH5yjC6KXTUQ7tG36afrRUsceU1q5fZrCoorMB5kTXmka2yjoD2rCUxy7BXJXwN",
  "key21": "4KLkvY3JTdwf4hmv14h58VCtCyB9Jxm27B7qB1C7y5GsQgq1uNMuxRtssHzYDLmDffUuuRMuwtDmomSL2QqQbtLU",
  "key22": "33VWmrnPefdqPTwGodXzT7UBY8iMii24UWUeeDiawgqmjvtwzFRLJHc2wvGwUX3GQY5StUREC1tEDoEDCBZNrMzv",
  "key23": "3FQAmdPYsrbLQeCkorQiEawXd8dkHGv1p3jo8et79UdReSWMXTVdCCFKb5atn9L9WCsT2RiQFeTE9p8NhqT1quNi",
  "key24": "63qqiQvFH4FSJV788niZH5UfNzxoxoNzVoZTxwFbNBpTVBiureo55tiGbYVmWTXxExihQvwqhYwoUUDg1VTZnicE",
  "key25": "QrPnKducrSXXpbsp2cW1HPvgXCKqHrXL62GrLPe2Tv4Y8yRazCP95cKThAzaR539sx7sypYqYitXg2ZuwNMsrGJ",
  "key26": "63bioasF3Aicipk9UbxSt6s6JX7v3mFL8XMmAq1jtfpL4ZqPwSVyFRuT3tmwW7cnc6yLjw9X7GsrP8Mv5fSmDVXi",
  "key27": "2QwPm7K5z6c66yTiuqe2SKvKW3vAGhhVY4SpS2x4ai8SpCy62CeXrmnMDY3VF8x8Fi9BDPNj5CLNCYKVrhosYPk8",
  "key28": "4zpiQ1izxdhfpFJr795BbnSoSqs6bgztvvDz6VLZAseHpq5M6zP46N9BfYmri6VtuYwYh4oFRU9RYfkr43WeQbRY",
  "key29": "sqvFdmhfXopo8bT4nf4QsjbhqMPxvsHT8AeYLvHnLn6QEayvk5MXXy6RjrTo6zCkMsfEobxg7o6CaKUnA8MX6Pe",
  "key30": "2S5ATurNWfoQ9ooMK3vxq9vjRJTFNHpCoBM3i9QEVP8LV965krTZJ1cPwAatp2wXDcVpdhQwvrigtThbgKdBq9sS",
  "key31": "2kWw5tNz7nC6bruhgfhCFSpKcVB7JL9Gcqx3k9FyhrzpuhFEfMrYAeuNVcwWqvb4HqYApa6mDzBBzEKd1LHrZUCo",
  "key32": "3e5X9Se3bQ7sSSJfLz86aKWqqvMUDmWaQGSt16Xb5YuENRn1Wt6ugRn19g7RgGdwrmRdtbq9nrwjRRrudPNEfxkx",
  "key33": "cn2HgtKRME5hgNdBSo3jPVZnwN3pBtQN9nHPKHNYmEkbAs48G5dawY1ttFKd77vrcdyZBZih2KjRYEvP52rcD4z",
  "key34": "56KpfMdNnNrycLQmXmwZSuvyge7Ka7uuLdPFbPxGyuEew9Tpzru4eU6mKrsGviBe55zTsdKNdVHRBSvKgMfeZocj",
  "key35": "55Hu5xccExJEZUWgvEQqTex4Ngn8hzF2MugYb1rkyoYsAkbs1cQLukB1PsjnXV6GNdFwvoRYDszyU1gR7ptjmK8s",
  "key36": "4LPAcuCXdUE43oDPpGnRiZbx4MQYPhZWUrWET2KNoC6qbXYtiyZFzR7tx9xVPfQNBLtiAPomdTBbCcEqW9iQ75fp",
  "key37": "YSPQYabbosVU2MjYKUa3ZFE3ipUdbW3wiUrVnMgLs2dHAQ7XJR4cFEtGsW4LYGA74yxHjfQryUvCT3CDcq6r7QZ",
  "key38": "631LJK4jahJRUCF7cv97JfyZhy5rK19ykKCcoPEhi6c5K97o7M59FVBtdkDcEYLyi732xWPHJZoEyzyq6CAKMz4E",
  "key39": "2YvbnuV45FqtzrFYTDHFKoPye67UNAWR8sQyZ3Dv6yvp3qq4oRRmLigVHsQHjRu8EDjVrVYpqNZk2NkRmDZKBBDx"
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
