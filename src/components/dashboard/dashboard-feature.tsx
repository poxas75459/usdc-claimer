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
    "3kSr1cWzrFULurCKL8VUx55Zx94tDPAsrQhrc3oeyCUNFT55NSrqKynUg6gSBn9WWXGX8Lv8jVnQhLdwkWyZExDY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ekKkwYLpp7W1FM7v2aKHbuWu55KJipQenzefjZ9TTG5Nhz9FbGyHHpr6S4GqvasHXaPqH3cPG1bn7ja9HVyXiNz",
  "key1": "5Az1CyDcBmRensLjZXJ32egQ4XZfEVcssEHJHbeefFceCieGRyFumdDNAiXBxVMp9bKhyR7pHBvi6WzdpBQpxiFJ",
  "key2": "BXnikPrQ3n8fdWXRDXmpcy5PcA7pJSDEt2YUmsB2TyaGjVBCgXpEyDuizNezpe8thE3xWJgKmAwpcQc1PDcaDbX",
  "key3": "5w5DACZJpgAr9AtuLLjYqKcR2pECo2SDouW9VoNgHEtBHrYRqszPCB9TDu6AcPdgLDsXUhxktw3kHMZ3onqEygD7",
  "key4": "4uRjFyUZem7bJqQ2EHt5yFZc5hsA5PZE2Sd6VcFNiXqrnbmmoJWyRvbgM8TfJxaxNRMZxasqbY9ssstNEXNcr3F4",
  "key5": "3c2Tz6frqKiZyBGhB2wVXJf6qMxjt52jEYs3oBSMRcJ93wEutKBHkR5EgFMuAMgQ2Kdfb9hzdWMq9KyQdYsYDwL6",
  "key6": "DGcMeF3yyZ1X1B8iBgxpvH3iGyjFLqYUdsWpdBDyrBgGfhSsfLE3qycWzsp5Gqe4UYgMdaVMMDn2XzAGYDzLAR2",
  "key7": "2BBHwbMbc5xWuqDrgEFopwa18182QAi61BXTEJLBSfhZ8YqXvDJuHh1yH648LgCYRvJCej7Xx3L8Yp259aCZW86N",
  "key8": "2fHTHSNJqEcQhR8tthidkgypjQ7aTRw1kMrDX5NfAmWrvtP8XokhAgdvocBvdB9VNedZ81MmSyhMYW99yRfvCaaN",
  "key9": "66ion2Sy8dzqfQWZtzXDLU6ZqxWuHwqkd6N3abcxqDqZJkzUPKeuoJPdGCuxYvGSdWMnjWBfA4e93rfgigx2Z3aF",
  "key10": "5CW9piF9cHkVs3CbPJ7pcMSP8BS4sy9B7DaTo4GSnfcThMAf4MAzbR9H9gQ7ZXbbdZuDmBxLSmff3ejeAw2awjog",
  "key11": "3zsDLFNZK1kgSPYsyMto9Z9S84gzfusJMZJgnvuWRa4GNRT8ux5TegH51ZPYA8VFsCLNfy76LY12dAX3zdKaV5VJ",
  "key12": "4bpRo3fqBiAxe4YKtsws5iqAyS88w8Qet985CYHme9BZCC8b3s4czm6ETYErXctq4YaHA6KjXx1yFCGz53NKJkAN",
  "key13": "2RiybxVpMSmDrbmuu7FWD32RxqMyvt2zQXFXY12BkAz2XKLfwyAweot4DXwxbtQcupEGd3wxGESW1fVDz9bETmbM",
  "key14": "2yA3JqtXw7UYpJBHJrzNa99AG3one6qVETHU7n73i32Pc5MgDRgcwmXHDQSQCac6iiCFdnp8MgpZAj99pPUDJqqm",
  "key15": "3pcJkG8qaQLmSGuiDYDpKcKzP5JVpXQrvYm9N9mQdGCbwZqnkGKgyi2tBFB7sZD7KVG1o2N161UVfgPCdChbVGaU",
  "key16": "2hGwbBgDP7pvMQ98rFua7N8HaULfs1c1QfM7cCWrzzVnUo8qNnQRTSXxZNKTNnwhMENghbwzdLS5ArvoRAkn3sJx",
  "key17": "5NAdUKg4fAna1WFn8FErG18XFNG5c8bqnew2zbWMzNUxxB7BuhML6quCvhbpRDUyUNRA4RQ8PGJRE8NY2cS1zKCj",
  "key18": "2pb7dSSMfuJUEpKxbH2bou6CtjCXX567QYiUG21BmgCMXfbwLZjwze6HamzM9zGB1spcLtcnDA2LgLs1hyktsST6",
  "key19": "3iMTdxTRdy3xBSmpmwRex3yWD9ss6D4mydixJmSN3JgvvF2JVtn4tc6sDv2yoKdRqG5nBfqxtmRy3xou4Way9HZe",
  "key20": "8UJAZhP5gipyjmrcNSwE1sc5LTjXmkyqbBtNiF8oGWJ2xAr7axSgeTHq97f5E3e1ZoBZmm2gKJDFjmZZ9oMQHsG",
  "key21": "3jWF14JKZPVQnktryCn2KxzEXfChC6TSYaoMBao7qbS3DRcYTrXJN2J1teEeNkYKaUu542YXvKiYmWQ97dK93aez",
  "key22": "43FNE7iXkAJ2wk9RH8yeXrW6MmNGskQZJxVSAG3LA6tnopszzji17kALaASKV35NgzLbE8YiAurdYc3dseSni3Eo",
  "key23": "y93rZsyRz43c5VDpqKFccJK1VgGeQg9vA8TvjspZs6KjaAmeyZbUqGt4vQyVA9ov4CMknkKhddeSC7GDT3DCTnX",
  "key24": "4fzfSdyWKbquZ7ZGjr9ZA7CL5L3NrVUUuKMWNA7sGdB5GD1YuHnbEbjE5gnQ6yU8eJ7XQZHRtMd8ajAA8Akn9ZQ4",
  "key25": "3ax6y9k4tfRjFjNmUkNR55mQDfH6W5h4i2XYwmXqrmrXPFuefDyJ1Kfvq3iReS9b37SaxpDKmvN3sjzFsjNMmmcR",
  "key26": "2DFmb8z5UxGHHhVdEUC6AWm3vHiJ4oJrX43evvRikVj9Vg7Sq62v5N6JozQCN73tzL2yKAQVBz9d9DAMDG1wxttE",
  "key27": "56TUwuEtnby5Q9ARWDgx6cujxyezeaVbJU7E1FCkPMabhbGso46siNFju5ZJfGGfQhtyMbMkS6DgDvUDZAPzstt4",
  "key28": "93oyCRLTC1D8eN63EWwWvpcotrPM3ZbF8URrSaVZjnRzi9QoiUFeSgdRpmXvqNp7kwagbqPaJoSF9Vc7uxhvzFD",
  "key29": "5B2MX3K9Tvq3gAYiUqPnhofVdnFrqjwk8ofpNkkRNLMxFic8cphEgm14XrbhGnyCQkjR7A8TDLJBho69MaTfGhuV",
  "key30": "62yourASANhnn3N5yMMmR84DJ7sYQARBpnYUkMp2QNevMNnvUpirQRgzsU2gAHDvGgo7fe1VtYauG3hakRpqqkc8",
  "key31": "4siu2s5jKVLFGhBA7fUTLXLAzfeMALagD2hUnZueNqG7ooh72jzSRcgUjHyUd9JPfaPo9q4CfUyphk5VeGZYhK6f",
  "key32": "4cYci3RbA2yi7SQhh6FLNfixdvAuBrqbCSQy3kB7LDji9RG7yijcbaD7rWP6FUWFWfnY4ac4rLszbbAmdNAsKd9K",
  "key33": "DwzuCvYhTcUjjpQahnZhTbtqTPUvvA5eqciZYGSjtBiGFEvgDUBPLdEEJGRbmZUZYNbhNYp1xqeakdNU1kBwGMY",
  "key34": "4qPP5E88JAunJnXLEzwiwdt6WMr2mcYw9xYNBdXmdCKAHG1tJBa66QERhBiwUXLt9hY6Af8Y8XsgPKjr8fAv5MKb",
  "key35": "5Xb89jq7DWPkcDVfETpPagf33WdGsGcumbhVE2iXqBkxoX3pF86UXzJJzQdPvNFQRAGVQ2KiyH7P1y31yeVB1a7j",
  "key36": "3zX6hXCjGTGzmVuNuJwNtJ9PVspxzvdJKqVjCEssBpaxbze9dinTdVrg8McWLSus5gTbouyvgEmxFR2TSeGEQCgR",
  "key37": "2B45g1cUCqJibnSptPLZQm7FPknuKZgJP87ujiRjSRSL2Cb1uWfopYNvzXCuNyX8pccE8Hu2Po6Uf4jbryhkuYtj",
  "key38": "46a4HT1AYS6g9WZbh123qxV3j1gNMRE7wHdjAULCmM5gh9S1BBtSrq2ndv2cVHc5PYGF8oRP37o6y2i7UhXrwFVb",
  "key39": "AgE9T57SsBuJCvDEZX92BJrGveC87XvcGjQUbBNG4e4VeCNhtUPsZRg6Uiw4p7sKqBiTC7QfDpUfxAd5hGJ83qs",
  "key40": "5kMu22nWZN9yTqY2gAQ5dYmsun14rBhgdauwhp2gxSsbmsEJjtG3HHiF24QME28ShLeQStWgzzCpXfxfJXcMkPm2",
  "key41": "83MCa7A6PH8Xg7RxH4aLxbGg8bypnnnyLBxvymf32AupQrPKkZcbvo8ttHp3Pg7vMprSRgAhnfzzkGYYsjL1k9c",
  "key42": "ZW7yH2ZmsyEU3FGM1itKLx7fiWiXYZ5ZZsQtpf6EkSgCfAK8FVCjvrnDy4ifQFCEB7fuEienzzFbqWYqZyDX5x3",
  "key43": "xkd4uSoVp6UcPzMLEGsUC2WpXLnCVHK9NVjYmDcN7g2c2n69Q9XJYNkpXphZj894yxHcx5me8ZjuDukWisDnNex"
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
