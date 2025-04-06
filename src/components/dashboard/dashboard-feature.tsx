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
    "2GhD4euiQP6jMX9BKAw9GUawxECTz5AnaA7JqMxFFjnMs3HULXBgXpUivpCj9CbDqLkwiBGacJYZjtY2bV74BbZ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "16d85hgbg3YhKxxh8UESWQVReLKwqzePrsGnSB2DNrZZEMzYJZsjrJJAi2Ei8xZFza13yUSyxntAKMoUyZMPu6s",
  "key1": "R5nbznL5wCVfdv74C29eX1vfEMcjGPgemjnVdndDiG9LrkyFiSiU9x4BCzwcSEdMeJes8eNqv17GJ1Cxiam52f6",
  "key2": "2TEJ3mA7Av2A2YittZds1x9qqfGQ4GCabrkJVUwLvmQTBVVVZwwTatmtUvBjwMGFxVE7RRrsxrVDLmp6jBpVLY8F",
  "key3": "gfAsy6ync388NTWCJ4yHwkPXJSCcw2djFYepqiL15XBaZt55qVWM1oz8Ya4hewcjfQsx82J41VM3i8ZEjVRzPvY",
  "key4": "2Rs7rwVQBMKG6NEBJPiNmmzDyNVJZpEeftzDKLQtfBkVtWZEeqLBd1SnQfbSDtP6ttXbmjUjpwPEbo6dt6Efkyxn",
  "key5": "38Emig1W1DXRTLJuVUciYjg5t4g1Zeiqbue5iKjkfMFnNPWTGWznE1TWHntmYWRSM3od1MPzGcMg6wxxvL81Kxgr",
  "key6": "3Uadtk1D2jDbCuunXmzYuNjCwwCDTsuEKCmeqVRPAprJPCUvTKGFyrsRN72YgoFpZBAoNS2rTihyR24b7PaRu4i8",
  "key7": "5wJ83WE3i2CrGiHUN9dXTH4xp72cX8QGH3duYBD2oGyiMVPcytHaSkH8Vae6pTcYJwiuaUDu3FtPE2P15MXwCezX",
  "key8": "4sd4XdQPA9Ueybawm57GM5CuittDyVHMRtM61HYth9HVb7VNuggrpXhVJCcW8NXaxR32Qio4wYRShYC2H1gDDiue",
  "key9": "2hG8ucJrVjFAFKsmN2v6iKsANt7hZtRTMz45nQjXKQmCLtL8z2LDSdkZqTycr1PGS3Xk5uvXsazv9hhHPgoE6vCS",
  "key10": "c2TNweZopf4ZDrDXUJpnWWk46z3ZJaDiRZNN3kPyXpvvDSoRs3ijrRyADxsUVmEE1muuv6qjUiziwwGBXEggWNM",
  "key11": "5RnQgrC9pwdqtYtE7TeXN6TgmCk3vk2U86tQ3zKAXt1TDCsDe5WEnr6qNaVie3wZr2GNV2y85zeLy5X5sTHuDCwd",
  "key12": "GF5WvZCtAnSkfbPewDQVvbfsQsPDV7hfvBwmKZMvuREztT7r8mCJijtKbXX9GRb99fdoTFRAKKEFSNSurwS1Pyr",
  "key13": "3gSYkBYwGV24LEx227Nh1DomF7P3yPmNRtp3M4ve9jHR9AGKguFRkXbhXXcvCgSsDcToYSMxGaksLNMK4AzD3X5X",
  "key14": "4s7Gkf3EJfVKhk1YS3hc9wY3CYTK24pwWEkiCSbUgb6WXj1V1RwNk6VCXpVhGsps57eZGQpDjUVYZxxV7PWm7WFK",
  "key15": "3N8bDD5L4Gx1hvzsvSt7UfcWtrasLEQ4tGrYLwdm3pHT25AhMpToRgzVkvCWfpJAq3azKU9AJJmfFeiqU3Rgy5Bd",
  "key16": "5QE9QNfNKknAi7rj3kgEbkinmcrpfwo3xQu3ynsFARULC3GAcsFSQ6CxjGXwHhRXysAsv8D5W9YumU4c7cG2iw2q",
  "key17": "2nFuuPRZC1keuHjizU6WFwvzbxxoz2Hiarp5XmxCmyGf1Z8jKBGc97xEtyhMRPy64ZV88sD8VQDuehzxytKX4kU5",
  "key18": "3QpHQv5VBo5rGKjRWn7xix7KjTVmDBZ4CJzLAwkXVo1cDhT2n9u13QEtLiXNGYxJP7G2wKTTRFnqBAMetWdXgSFz",
  "key19": "4ioHxdaL68TeBDPTte6otiXCXPXBWe4FSmm5bo85L5aUEF5Q3EzNH7hSXC6MSg9cuZnv5vcKDEZF16cwD9iTp4vg",
  "key20": "2VqxyDgSroZUYvohbi5JgWC48k5M84RwYiZTBdwtRAC81ouznYEvENNJqkA4TutVhMUdgMtvmWpuuRoziFBw282S",
  "key21": "iCYCJ1hYbaKxxxbQQVKfTRWwKcdkyufRCLQeQ4oSx1Lk2iusyrKga32kQhTzJ6Yb8CHsgPAjyADQExCvoboRFLs",
  "key22": "4skSJ9ftnoo2ZjuLGtQTxcgvTC2vZYDY2Qc5Q2mYRK9DuJyAmAscWEQbbPpA1MDvyzuzmpZ3UvwSBqyCE1mkv9dm",
  "key23": "8bEEPZJVWq85KBVCHyx3Rt77EuFMwrgE9aB14v19zz9ALH6E9jmJBBgN173CQZ5hoYAcbLhcH9bWNmFwtMNf8AA",
  "key24": "3k3GcbfhxvRpe33LZjWewme8wm9TDiAqFAcvvRZdhwvdXcgUUU6qFX1ZzGnxDMguWdfTkdq3n8FdG4qBb64xL5Q1",
  "key25": "3mysEx2MZywcovTRetrVaUcmGDb88rq5sCVFaEM1Dgi7zZ1cBiyCzYoD6Bi3qiT7qoAuutn3vtjXodsRuabbS12S",
  "key26": "5D6dkSCSJ4YASnvvTc5H95csYMcT4gMhHuxXvsVYU5ff4QzMWCxuEnrgSpEGCrzZAUSJGkMVssJJW8SYuunR2A61",
  "key27": "hZDM7AA4FcfXbE2yZ594ULfHjuX8aNYM7Y6xp3KYTMsaaHavYZyaHKaVKkAhbyZcDXkn9mPDdW9TnuMyyd9PCpq",
  "key28": "2QB6amBKM1saUr4Kc3pkV7LH2ak9jY9wEvBvbodx2SeoKKkRpWE4oZzufKoze9CANqUZ9H2YMB5ukShu4yYg3xLW",
  "key29": "BoUZ7RxLcPvSU9se9SCTo9nm1KM4Q7zm1B81jWEz9Vnd2mVmthMkdVWPxQBXnZCthQECjN3PhZsJ5SJLGETqRkM",
  "key30": "LFvor5VRgdg4beEjShpdRt14CDcfwx6MfXRojvRYNSzXnVLZTK7ouH4kYpNLjBC69rj24W5q3WvKCQGHnuMNMVF",
  "key31": "8u3HHca7WjEb87Bjp23JVkwzSXqaf2ECEsSUbadPKdMSj3jVXAfgDusoLLvEb2N9W8PVm8AmMZPDwYR5U65ypXJ",
  "key32": "2515Di296qN4967aA2QjSAYpgpAED7u3Fixh591F8v8rFmqhHv2L854FdpjTczkgMsUu4NxgUAiBLgtZncYuWFzA",
  "key33": "4HCJdEvVGuzSbvWtXstbwhXMscmzBT3nY9gjknihic2Xo2HLKbSbC2xavKpLEw8ZkdhxvG9AfMPQgKDfJeKuXkFS",
  "key34": "3sVZ9UbJcb7V14BFjyEA4yfJZZJ8PCRt7i4yJzxnJEKAGmYuaMQAcvitEeJraBE3vkx66T1UwMw3fnytcPLZbvin",
  "key35": "31PWvSb5JYVwBzu7JCity8TJr2cnKE4YRytShkUa33JryhK2wffV1ERdQBJXrr6MUpiBcripwjfNNhkKwVCjdgQR",
  "key36": "2WnadCbde98coq1n2b46n4wCGiMU4CU3pqsKc3Nu5Guz17Z6qdmwMhLXM9kmcJ1mSXmfMBMSo5JzFTePf58iQAat",
  "key37": "2wGLp7Mfgvdcwt17hHMTaArQMa8LL2TKnGGSo6aarNKY4nh6GcAQGcZtQF4F7jdeGrGarRwDFWcZC4o38i9spFLX",
  "key38": "5yjovbZB2QxAbCKd4bCrt2zP74o4qecnwMy3KxMqbSCX7TZ8Cfvoeb2vbmSuzfLXgPD4fNfwopKLWjz7M1w5bDBs",
  "key39": "5u916vh9VjXg2s5oHx8B2iMZP3szPmEFjv1ARyTyxWeg5aHoC6CEpEfzymo4aewyioLbLKEHbtNo6TncK915d4mM",
  "key40": "4W8Kuw1mba7BdSzk9RLoLDzHCMKcUa6aKshMHUbFSShoixX84kjSrSAfdhwXcsD83ikScEygSKudEkynSgpaHYmK",
  "key41": "4DzPSJ5sKW4pimjcUafyMADTx5G2RmsM5B3o3gZVkNcGJLRAa4TBx5qp3wM9fYSyDAScvbmh8gH8QqCpkERYQSw9",
  "key42": "2AQoZAtagoKNQ3ysdtG2S2itGn8dEybzLuxCn5p3MNtTtVYjjptnf7y7AYfZ9LUsHyQXTkzqWvPkcE6VSCzJccs5",
  "key43": "5JeTThVyAAwkSdgeQbgZxsVaTkbbszc7zjrUNfKkWyjCekCRECGPTY3ZyQv2fVKcbqBoAfZFqcfPHugyfNdbUB8n",
  "key44": "2GPXJyfhdsPwbMkt4SXP5rg1SvGkJXrWtZh6NrV4Ce87q58NEKqVW1xhW5EsFXvyFBjYLJeMcyPjDwFqvuAV6K8L",
  "key45": "Fjvc56QUTMd9bRyb8q9uqF1ebgFCMc5kEGHf913CL67BdeLBc5TJv6CTjNe56P8S7fdH9q99xRX4L4NJCp7uPKA",
  "key46": "4o4NA2fbFX6eGyktooRqj266q8xQhQTkQdKkVw7wyiRH8WgfVaS5GvLFyp9wa96emBkbxaxtQ6v9d3GSCHLX5EXS"
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
