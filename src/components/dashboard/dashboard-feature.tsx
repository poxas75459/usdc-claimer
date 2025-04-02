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
    "5ZzinDSMyL2fPeLMerM7CzVckm1awKjBfu7EDj6uxq15q9jXmiHvctGMrwnwZvZHYJsae62KUdsxg4c6kiDG6SS8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zoc1Dbu1W5bGn6otJRAheGLn31qJfHAvsjDyfLNSAKnqjoXg8EzsTQFtRnFsE69DEKxBP8hJfL3Ed3x64H3SYWS",
  "key1": "2c4tTwP3tAWR5mcXPWS3z4mjLeWLzD5kwREraDuAhV3anDb3A4HNQX9R9N8PLjXFFtcFy76z2ZHgL6Cx1nznRvdw",
  "key2": "2gTL4m1sgCw7jhBmN3L6qxZwMuKKnTSSAkMjxx5V4htXnD5HmuQnnaCqAvGMVsXCpbJHDZee1SzshkSEybFKZZ6C",
  "key3": "M8tWieZGy5FZy72XfaqBPRYaGjSc8Y38h5dbNaCiZfXc3nai93ewPdHkcaYGvk9GLMcb7aAEh4YKNaicSvqiM9d",
  "key4": "65bfGvApNbnTUTN4Hb47HnwfjoySCkFqoC8Eo6jAjMiMrjNWLhUALdrrFQ7aqW2XU3YWgastwRYUf9gENnFoX1qc",
  "key5": "5xpfwS4sXK7PTLnW6jxfu8UQ6yRPYtg5Dq7kzAsrs2KpHLr1hTLrSK62Vnv6xoATVpBUjWfiMYjYNNxmhzY69MUt",
  "key6": "4XpPBvhTEpFPwFx8rMMstcJfaqbmz4BpyUuPaqShgMyjB5GgHu1WhXtdCtFq5FQxF7RQf2hkQL6WHfY6t3mESZpJ",
  "key7": "3BoCZraodNfe6BhxwowbBWcYRimTEQS6u4CdBDimgnM96ui2NAGzfkURJbbrt8WgNp9JYQmPeMT7wQnscJcyxpHB",
  "key8": "kGR55vaLgX8aAivQYew7mX25wcBxNGr6TiwaoKobkZjv44y8CzZaLiWQCLLiFgxvCZzFTEWssqti1fM9oaideZF",
  "key9": "MCXBhitdH7QaFMNCxqTwvZSk9uTstfsDt2fqpsfJeZaFBCrqgDbyqYrFqooJRJs4B1mxKGDu1dvPQsrq62PmYMJ",
  "key10": "4QsWLq17jruLAUCYv7AkrF7tq656K6G9MapyYWEVkN9kdpwAsq3UCLT9yiiToPr2zpgVfDhFDG8obTW83dxM6v6M",
  "key11": "zkyPnythpNPdHFmBTdHCRnqEj6y3Lu9Puirhhj8aUQuB4NEZvd4L4q5Fq5b3aTq6Gk7N6vQzmMBrMrWnZ5KidRo",
  "key12": "4WAHg4YH4Ars38Tvx76W7X4NaZbXmVjgWwwKBTmHmBixeQJtsMtCor7RsJ84BuqxvrefF2c6rFZmdMxN7nHo24cQ",
  "key13": "4Kq1Gf2zia7RcpkbsoNzezpBS4vybELyXYgqEKrTYKGDPhLdzQt7p91KZussj7vAFriPmyQ4U3nB4hN6MyKH2vB4",
  "key14": "63JyasgkMF5M6pyiYPeFefczEZUSXH5RrTFfrAydNfBaLhCoT3irTSkD9sBDWq7ffQrqFs376QCzmhUtMHanpWG1",
  "key15": "4dpBnbmirwb4srB1bKhbVHpBXewb7DbV28SgKrBS4qJGT5hGMPb4CFpeTE9ibYgdSRWsqKTAb5AtXwmc1W1HhyKE",
  "key16": "4j6Drgr3VXbrUBLi7MA752aNshUpsEntJUsqmZnirizVDc16AJvMuCGBGtosXg6juJMUtFNg2KbRC3BPqRCvRV3P",
  "key17": "364XkDVRRYuekz89MiPM75aUgnXKFBNjhAqc3FfNbFKEyGz4GGJFaVjgSEGquYmnKM4PCo3TRqS1o4Bfcpwy5gUX",
  "key18": "4Pu226SrxJwr7tgBEH9FN6n5JG6fdpDUGu9WpGkTxurkTcLUBEJP8NZ5qap423SadYqbk1rGazb4rzhn7DPqsrXY",
  "key19": "2YWeFRAdzT9AZKZTp5xnVJGS9RKgvJduPKoSCJGThQT89mprrDJkx53EZEEWCgSUm4xR6hcxSuusaZFfPHqpvLyh",
  "key20": "2Z9Sy7XpC5PaVPWYRxsD87He3N2Co6TW5He7WfDtuDnnBVJm4AabyM66zbjPAyaS2oDVMWb4AEweC3cgaxtsUtGV",
  "key21": "xApghW1mmrN4N58gbFbxXiNYWzbEBsDttq2BQWoaou6RsbvrRwjLLqvEB4ezG3hHFPojNgiKRyaFLiQUSsPFrhH",
  "key22": "3NwdA8QXknqkXNMErdrbrLEBmbhyrmPhVVkHe5tn8QkWr9QwYSsABEEegLGojAPbuZfSJ9GZ8wot6ArbFJbXnF3U",
  "key23": "2Y1fNQ2LcsGtm5aSnwZb3YaGwyeC68ou2JrnH3noW6Jr4rmGKSrNY47gbFQR5qucxWYremDcGYNxrFVwVnfjxpgm",
  "key24": "5kCzBjqZi4wiERkox2RFxDZQKVmFibDzgpHfi7V2rEFiRVZeVDdwfTxfYUih3PeZBj9qgXXFPY84kc7FXGnnCUtJ",
  "key25": "5KvbZzM2vCwz1EqjT6ucinhfnATfArtfMHqtbNuZsKRPFScLFMcHHA5DjUYrcKwr9LoaCeaiHehLuFuH8tbudNNi",
  "key26": "2QxCypBGEmQoVMhVBkMJgYx5EqFqGQnnxXoEFmCqVbtZQJkCPdnAm7nNsA8hwy2cre42gXT2Hw5LWTzcPczB78qh",
  "key27": "5AoDJbNewRjbozqxu78qvHdJnLTN9kYiBVDuomFGtnusBTeE5aM4quinYmbs4r2bYwyzXYcFbgqHJP6Vct26mJCs",
  "key28": "5CHHVAY8yc5T8mg2tM2bxQPVTHgpWJ1CREFDQTLQfvH2TJ419XM6CNGJ78uXPcD8isCLuXLwbknUXAVZBaVd4iJA",
  "key29": "2bMkyenVKBMTdiazCc5Z965twAuegtBD6BLUXyajt4svaX4bTQVW9QRJNF487ueWFF4f1GZTAD4omEfq74gMm5uY",
  "key30": "3EDLYh4EyHv6rieyJU2HPGRJrrEj74Gwiu5VkSEFenBqh2Vgxb9SnqzAtX7rB9qDEmRHBnpGdS2CbNKoStUeWYR",
  "key31": "3zoTE9MVXz3uZJCxRYcCCBamhuoWvkqLP8V2Xo2sGCtCABj3L1erqSZKAxPozJKtCTSF4xaKbxaJRNcrhRUFiRbu",
  "key32": "2Zw2NrziMDsnihjP6nwBPKoSDg9h7Jhq7jSx7C4xqzBfiHPxadobN4kCeGpqni1R8ryVSRHSphVyNmahcMCjNetv",
  "key33": "3ighJteQpsJvGPDkqfuMoH8BLQp4p1xpR2n7ukekmE47p4dCSGmRK8nEAUAd8gwxWuLSw162W7pqQa99KvWbi6zY",
  "key34": "2FfiuB6Y7MAuASJFYj8qYRn6YoGS3aCh8UDwoVTojp9eTeUAQpGm3Nspq4emrXLs9onsihxRZV1PxtJY8enNcmA",
  "key35": "64YXX29yTPyx2XNvFu9cE454x6mNVCwfff4GCCwKYRZEeK29AG614X1LCiEqQpts5qEiArfSxwfXJsFaMamkAPQU",
  "key36": "267DkfS6C6FXQT5Pf4Z9iVyemzctbyUT3kb8wR5xMzshrHDyDcc49n41JN4w3KmMdnHPtF5urd62TQycfotGQi22",
  "key37": "645g41suNvTUuMLuqbDLevsKbeWT6nLnUXMk1XE46qGjBLLrh5hDXho6hQgggvs3qpYjqbkL21mCR7U8qAsxN5HC",
  "key38": "4bmk2SpjkYVQErH88E3jLRKUkxkskno5t69R43hsWnjdwfGFoDwKen9FkVcBscYR5noDGrZt3majsqofkZTWobYn",
  "key39": "2EzvEQoKApACGqjACaTRJ6L8dyFZ1zHdXzgCy1UbAC6N3mJr461m6VtUBot4xw5oB2YJE7f3z5e2CiU6g8nbjGRo",
  "key40": "45xbwtDBK7f2nRdctnj2jUUaGryGfm2b4UWAhJ4HJwy29RCizqgziGCDyhFhHwHdTww7dihHnG72Sb747mX9bHdN",
  "key41": "3zkmbv37iaUbu5Tp1J8WFG4CXCX31XWDVJzbJZVhedipQRXKvYg7JTnczwtbt6KogTVy7FbwCHH9MtGc1gxLyzsU",
  "key42": "559VeAyEVp8wevtt5HgyarYk582FZ92Aythh7XM5hZQiBpU4X8kc6Vth5AJJFqoiVeEcS7CrVFMUgMZqxmgGSUdV",
  "key43": "36JiKgWKbeUdBx6s7z3XgQH2P6hFLtArEiQfxC5PZ6QDnWX9ARWAr9GUqea4xXeZgx3eL24wmbDHPtoeyzpKa7go"
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
