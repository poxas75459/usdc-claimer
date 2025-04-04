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
    "4VnKFJ4v2g9cQJbWT5dBLbZYxjq6eowYyf45uEUHZhHFD4kMkaiVz6xHCxpW5JRm8hM5D75XXDtMefNoj2HdxwTd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2agyKefcgJyKXBQJKuRDYGUmL7HML2RUYWXkB6vU7SwkoCqaLq7hMZELBRgLe99gL5rPYnHgqRLXidJ44ba6xcmu",
  "key1": "2HwnEChCB4R7qtUh8uBAZEW9dnVfCx3CdM79pZRYVckh6b2EGLkbyeJyf6N7yG3TwXVAtT6UST9eyFSntJXETFsV",
  "key2": "45Lm6ihq5pDEV2dgDR7JoQxTf1f5UX4DHrtuUZAKrSpppCqmUvhKaz9GmrDy4r5SqcHeHRSU3hUe2hiV99tsuvBN",
  "key3": "2H7yYPT3VzQNhmANHtjNWt2gBVnck2emkKwy3ZPdajVjdhV28UmFSugRKr1oUqej2fVuXTUZCMALUHttRn8rKVKP",
  "key4": "5gw2krsJ94vU5PdF9f6ZKQshEPSph29z8BH3iLSwQ6LD15Nar1mFUjc5jgioFurKcH6h7gEdk1BZZXdgbRv1zQiC",
  "key5": "4XRefEbPsNuZLYrBLzCFRa5mVrUHdKJNv87MTe68RfXHWJDU3CWLU5T3qQKXdRjnuwGf7WgwhjcpQ8tWthwn1Dti",
  "key6": "43WVYhW5hUgFKEW4Ry2iGKiPPDGRj8pk52VMaEhxyApho6XTE5Gfrg1ToexSEKzsj1QgVbTeUZaYdf7uJHQAdKpA",
  "key7": "2nUz9dwL3wKBJWKooWDFEHb8gy7xHU3RER4QcYB34Cfk1rXM19Zp7vU7VJtSmShTsfUJN8Jj2do6FXBc7v6CRJjD",
  "key8": "4ueFGpvHc2PnmEt4Rwd8CEcXRwEvfps5tXGKaaesdQy3BW6dupL1xTs3VFijMiVWLVEUP6GGLWaSWJ5bmMcLDepL",
  "key9": "C5qrEKYyujDgkKs56dATK768ovf4sAzXP27yhZtDoVktxeWBijCVfQMCtZmkDXhpTiGAXZWv7GYXDDuy3ktXD2z",
  "key10": "4qhhM6mv5h3GijzFqVH9GVu29m33n1kFhg92JtVm9zMaNZPSqXTw265d2uqnNN9CHUi4VPdvroEtKj1qBps1unpo",
  "key11": "aELq1ZjzRAfm2qNam65JhrJJAV5i7k92DAo7vaHHgMaZdLYV62tvark4zDjh2UsJtgiFe3uJhGVjMimAFpXgZQi",
  "key12": "2cSSrZewD85zQ5qRCphDkR7NCtPDxdAG4pEM1DguZ8xKB6sETr4BzYxrGAxEQasdh8QLAr5oe5sVPx1p885gee2r",
  "key13": "5kCqoh1LYrbAW27NMnmkCvdcSCVNxabbi6HFR8iP48WmTGVmm8GQaMWMkXw9iW6t39wHtSht5w3XquQk2iGSDD9P",
  "key14": "4yBiEwpcyEjSoMoY1k25MiQgyV1ipArrBVoqXJthyFwQzsgHYesjy85DJatKWs7dgpHmtmEnxLQu1fEbMYa2YdB5",
  "key15": "2YPXqLTvSRJ9g8cA3hUvDPxWnBjRUJdpLzCs8Nk42PYGtrezximFNAPucVTRYmh4V2ncTzPkbhqfJeQeSTg7gv6d",
  "key16": "3zjrCaRqyxsMYj3vVzxtoXFbUctsC2WrSdEQ3kf9Pa3tfuF3opVFKmiPMb5MLvxAMvwaPkJ5A71Yiuy91dSkNE4Y",
  "key17": "3jr3KfFjrtDzMgYBCTHBDysr6PgxNz4SmB7fJU7ZMMfcBHLsi9GBLrePQVNegbNymvZXbkDXVb9G4DQpmgC3pUAg",
  "key18": "54mkgTDxSkfBMmQp8KMAAhhPAiaXd37pgpnL1TLL349jqQNkVWHtjMYJFnT3WAaqJGboHHKjog3RHgTbmtzSszrb",
  "key19": "2uWXUXPYVf1yQdBgvEwTZ1vYrE1VXsYRrUdtDjA5MMW4gG3eXrrZ6jvyTFPf54twJxjThwdqeBLSBYcD9jdj92DL",
  "key20": "4JYmXUpHEhYZj5NAxWgJox7fDVp3UR82unyMbNX1inNYQ3e8CwTs62zVmMkkuLU8E3nHjaQjU3a7YwgcHbNse9ke",
  "key21": "5sJ1DqiyXrEf7PXVLUZYmyAbuEZqKgeL6jtsGX5KTQaAtPwMM4fRFpGdkySBKYnPcXSVE2D3gdWVHcKUS89pb6c1",
  "key22": "26ut5hJPcZPT5BybHuGe7X7JfPSVtqsJg81CAKjJ7L8a6nMMAJeV19YKFK1pmctGogRFuGe7fyQykJK9SPA3V4XK",
  "key23": "2F4NdWeyA7jGQL9n8ZKSr1t9ZXzmWm422DnRRMo8iLNVRaMuQhoQ9VHEt8SoRNnT8LbUPRZSdoFMddLZppnrSyd5",
  "key24": "2XPKTa9dE2FCsB4tqvCUNmJUA7vMDWjP1bF8DRtwhnhEHEsZ4DzyAXb8umVzjmtdXFtHkCuxcXM3HWQv2xpybxkP",
  "key25": "61koPComac7j6utqL9KMQeAPuMhZybFhAXq2w3y6Gv2PnNrqG1BKumVCRvRCw3ug9exbfERr87cDGPVeeXfdHzKj",
  "key26": "2NFNgBwuavrM2jHDMBq538JDnWo8CKriX9FQbpaPJtEvDE5qrBrAYRMy5VFyBcpVsExQPKi2wja4TfvdK8m6FEG7",
  "key27": "mT8HwBeGGArGyzySKQVQHsF28taXyEbD4rcYfzkAqTKnJ7dk53V9jnBCs8q9j1kisFuCmLjruYpkyBhHYnAVAHJ",
  "key28": "5yKyfvBLmNNsjzn7zbssEwN9FKYaqr83DNgxn3hNRVJ8DpEhu9v4SVdCtj3k4gcsCW8QY6YySE5siTJ1kDuRUAA2",
  "key29": "2RQkGxzjtb2SxeLto2dWb9UQ7ZgTXQWzJVBZdk152q5rXPhQDAbEQSmb64akziQ1qj5HeSXNCZyTK7s2fbsrtSrr",
  "key30": "52iWLrmhAUr7QkSsgFJVmHPgE9ayMU9nNRs4RL4WDV2nG5X9MMkaQaYESpAXEctBftvALySeQrtngVTtPFWmSGiq",
  "key31": "5UKXiovi2QSqBJ23VVn4Dsnuo6xEJorAvaHirpYkDFvykFkfsDYgo856fFswEisjmzWo1giKbb4LcjPrYJoWeHRU",
  "key32": "KEjZEpjHgwupYS2qpyowUeuycxw5qaxuDiSWKy7JEqkVLSyTP3tSMjcBqfBu4X8eUS6rQVik94SAS9HJph688du",
  "key33": "2PEfPS6DXYvos85fN9Er9siainq7qi6RPm1QRckq1hri5c2YRfbeo2Pn7tAbV5ycj1DrdV62kPueGsSPs4EPQSVx",
  "key34": "x2MWqAAmoTqQfN8vErzB4ZH8DzBwumB4F8cvDsN3mfcMBY6RVbLqVE6EYZKbPog1mn3HWbKuTssm7W5EVUey5P7",
  "key35": "3Shp6TuZ6arWBa7RnUsvw32u2W196HrUxK1YRnfVGT2dd4w6jCUM3Pk3mnq1jSqUdzfkWgHBZXAWhhDFxqSRTkmh",
  "key36": "2RAQJzHcBj61F4SdS5GLP25Z8gSE5uBWz5Fjbm46RiS83P882YAxGmSZmZMqqj9TmdwZHLTgBxzXA2HxKayMzLpu",
  "key37": "2fSA2mTjnGsxezxAu5eGww39RYQG1UBovtwxb2ESL4kUfoaQznuDYhivekkHDeyf9e7GfrnnC5KwL1g4bVGXBaUL",
  "key38": "24vv7uUEeSitgDeU7JErRCyrBFWGgEyBHkovE2i4xgS2HPZ1paX7UUMo5Vyv3wiVAHRwr8rX6C9V2yMaxR1qq3hJ",
  "key39": "2Jqpwki4vLc7PzCo6qtSEaXse67yez2DTGjnuukgdhDva5E4SAcuyvy4btVCT4fyj6ps1NoQicQPfCXZHNf63zty",
  "key40": "5eKi39P1Jb3YKkggX9iGHEBNxtWufDdHpXK3V5vzf3HPT2asigon1SvPjt7ivAHrCVgTgDDogstC6e7Jh2vdJyqt",
  "key41": "jpL1XG9F1UanYsKwMdnkNacx4MLkdFUhec7veRxNVeXJYgCEwAr2sCm1a4FEgP7Uv8CvwkE6nv94tHtTyjJYaTu",
  "key42": "gAqHL8gqLuRmi3EULkwffvUu7kXMtNhXukohXxW5qyLzcnrtYA6BT4edtFR5n4czo4JtPC8f1bFVdQjaM3YVq4h",
  "key43": "2jU6axZSuJGNtH1ZWudBn6VBbzeQ5Lar28z339UwuVcMLfqH536MwpXC6fm5ExmsxBACD1qe8Tc2CakQJ4ArLE5z"
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
