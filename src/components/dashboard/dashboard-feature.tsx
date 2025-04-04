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
    "5ZQgAEBcBmMsVWRUbj88eARTayX6b78GRcWJDdMAYAkNdY4xQdDSxwBwZpHAaRpssfrRAVH8D5x4VLia4BaqSvia"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qs4yQLHbvwbfzAnwA5zQnRrwFXA9us4qCSqzzzGXueSqxxLZ9Z5WWWjBpyL3yxam1V3F64W9V6GCKKR2cMoovFd",
  "key1": "4757Nr3Daqp1je1yYwtmqpTpnn6HgEDSKDhnQ4jiYYcbHCGPqpuo2pkWNsBWvtqn8eM9rPpSj5gTYJ15y2WojMBS",
  "key2": "imMDqLoWpsTBYtbnCZNYC6HamYYU8FmZhtMBqBr3iq5oVDwVH7TVGoGd9DGFxTRkaTnmi39XTgYRhxv1i4h5tzG",
  "key3": "47W2AJr2i8o3Hdpk1kdpGbyJYZMFBFH4M3K7Hw56FoLCWCYaXbzGkNLKggs2tzKYPhsh2yfdJawJcKRTHeepHNbo",
  "key4": "2JDef3uJV6GtGRd4822AavQSjh4aCsbFm6pRnmnw2KErS4apMBMtyMJLiCuefQbLQHJ7wgGVdgqLkjcjrbuxjQ26",
  "key5": "386LJN2QqB9Y2SYTiCXhzzQXB8u62Fk7urHbYPjBSgewvpt87NTDGQU6KDnEjnX2eLN2qWVxF86cBgmQs97KgFw8",
  "key6": "4miM76paHioYTcwpSXqFr37LnzwWHCX9aoUBBbuXy8gyH3g8bqshCvVyibzP6U6BshqLkH87GiS14YkSPyKkVmsS",
  "key7": "4nCEft1chG4ygzRLLZjKYUowsrfwKsymt2oqQ9rLucFE88ukufwXaRr5V4ELoJ4GUjxYcyLg27htR1wNVtgDxtGT",
  "key8": "33aBe84Hh6kTTiYhRSvT8YN3kTB7AjGQpEjHGfug7KLHJTv5yRTJ1jvbv8w9uAQ12Z4skwBhJav5HVBe93gkA4yo",
  "key9": "25NxeJcEMT7iyFhHxUam8E1SapQvSu387wXcfmkzo3gHM44JrHAZi6emAVqH96x9dnsoyVA2MP7JgYmrcXsoEJbF",
  "key10": "VbKAGQKB3RjXDFdWFMXy35afKPjgQvDCc7wE2GSnP2bBtQwTp4qtPQ9pDZCWazdQBjM35NXtrHZHEk9zzARgJ5o",
  "key11": "5nnuEMTL6ZrFioe8id3TA5EPBpkTNkCJRfEupb29Rd14XqMvnqUnWnHZ5sHadDNWqVkz17VdmWi9nMcTUHF9oef5",
  "key12": "59P9sTdh89NKooDi4sifrDQdBNg99NZaipx6JbKiY3W8h7VCgtyrr6c199ZM3ZGsboQad4RkJsDthSAcD2U9Vf57",
  "key13": "NWkTe4iQ7uoArFyfWJdgeMdpNBnhLbPLeifhUL2YEV8aJHGzosHjVyZjPS3WFdTs8nDYJpjMVb6qr9PqQ1Cj5nr",
  "key14": "28z69mfAoN5LzybqLE88kqQuuPid6VgxnyS2JgXepwaCsSrqhtpeEpwGwsg6BEkWSf8V8g4gkriR1xtpFs1GPje9",
  "key15": "gP4vPxBRzwgLHTgSZM3HecfqoEfsyYtmd9F1Jruk1RLFPgmd9JmQQ31bs3X3v7PYvxNguH7eDu4f64C9VJFXAWs",
  "key16": "3Fte3876CzTC4drF6pCbw9HpNQ3XvJfuRADmMyWM5uykqUxQ4bCZkeaDFjKz7FNbte4kh9VcZYCdX2CQckc6GbXA",
  "key17": "5ozSB7iyFHRdTuESYB6VtTQavyS9NfHHCB2Anwpro7vHZSJM6cvcqoVTR8bBdFwJD19S7A3G6hHxUzvL2EPxu4WM",
  "key18": "2ngviy7oKbm4Nykm6kaBH1cCLCx9qfPS3ojDh7zfvin8hWqYaEGMcKrNAVgF1VDrd6vxf8Gn18AS5PE8WBTRcrHc",
  "key19": "CpYbJp4pgFXFHRw9KeRXKNdupw3WPyExPdQcbsRqhmthM8NNtXZVB9umL6wXgNkBHV78psdQSA4KUfCXh6ZTd58",
  "key20": "3StKCxsdigXQUXewqZRH5kzAXjXyJre3pWX35yGbdbo1AJsPKovsA7efjn4RUndw8gwY8et5aCaYLr7tLaEaSbc1",
  "key21": "3fJan67R2pK7hSgXpjQyHGBBYqS6WC5FWYCA3ojoEJKoNuB9pGXsJu8Y88eyVg492GFg3pJiUVsPhMXjJdrRLnW7",
  "key22": "2xYBh6SWcR2qpGa18jDUQdm7orQFHx5pLPxwabccyUJaWcyRv7JU7PqGmoomgA4E7pxd7ZsiDY71tqU9JpgLZBhR",
  "key23": "vWzVYoRyoi5dtgHxHywcSYkHQcKEQ6quNA62sXyJpdFo66hqTPMXamruw7UyEE8Uh4tWyyxGZR9QpuNWg5Jpk2a",
  "key24": "za9RsPZDto5ZaaBxwTbLQJi4eQLndWb4mSgtNiGuQT8PH2oJHXHbiTxkTpDGP4KvXUG3ip7RxdL7rPwiuF1fuXu",
  "key25": "2yBHyxSDXaHnx9Bgiozmv9yeByWtR5DBFmC59cUsL7LjHVirv1DrDsEw5zzVaEdTjWiEHDqViXxZLBAvavXW3Pxp",
  "key26": "vfYvgGykdA8JhKh9UHtkXJUB4uNREDKbMjUqAZJnrDrujqXBj2shPsXz4kSPNwwFgmQfwZ9kye2vw2V9qTXqSAH",
  "key27": "4fzfrfHa7Dd6wzJwyVrPk9LeWiR4EwzYe4ce88bM6LdWfT6D3jCQXhf8jNmxQeGCVGza2WwwcyS2jaXPFJxxU4L1",
  "key28": "4L7MHXndcQT5STn5QeXsDtBrNeuYPCk2eRT6bvgfbJ82yfAUFdhPhKk91YDEq2GtqjkMFcfvbMmZQ2HJszDgqBs5",
  "key29": "25QcgEKqeviUifg2dNNUiCg5EXHiprayPZKEH9bxUYD1SJuA33ey1PXCZy1QwxpAPL7v61PUK17fMxvi95FtG1Za",
  "key30": "4pq7z56iZkwf592atFDHuu27XLD6trghG5ts3omkhD9RYLhja5EGXB3v3hXnFRfJAK6SmQjMzfCMPaT6Xp9ZgwX2",
  "key31": "2XHn5gP7JTKiaq2i9mWKYYfXeaYh2cpnYrMKttBCDdbV6UAptFAPXDnoK9TYnPvZCHtXU4xYje7HYSPWocB4ames",
  "key32": "5xNoneJPrQkgGWLFRHy3xCnDYytoGNZwSdC6YgApHak4WxUtRWTnDuL99h2pM1J2uuVc85zgfFjrC29gHbrA5ouq",
  "key33": "J6t7QGM7huCv1ZGmmrAXzsnEACr4DoZ9vTpQ5RNA6QRgmbdakc6ZR7wVEvv4VRuLy1bqEH7GFDCfYt3AVWzWk2o",
  "key34": "4MfyLozRyLmXH2gKZpCeSowaBEmebTtn9AUdSusrpR6K8WRoCofxNs48mp8uJaHPvzrfw1s7YYJZNPG1Ebbd7Rfh",
  "key35": "3qabCUu67H7mM9oLdn1vVNrmZ3PZhhvWoLZumHKVg4NxQJk78UfLdfyrjBpMZ7Gmc1BeS2XbiMP5F9ACJP89jnRS",
  "key36": "4bB92BAWccw27ofko1vCGMMdjHyvySVSmFDHR7yiPaCqXTzUAF4AMQJj1vYiMoBudMhM2oziuG31Vj4Z3ZtGSvL6",
  "key37": "4iLSSfMYS38TbrFPNEfB91aCE9HTDFDjB3LCeQGWPSUTCeBr6Pz74kJicdXJPBqpb5CFW61LJRrU53xqX1TkYdU5",
  "key38": "pVLHMKZ1RS5cSsQ1VrLcdzsZRfbefbu8y6pCvECqbtwD4PUu3EdH4i8wQbWHakWJEu3eJq8mcqEFhvGCdBBkJqe"
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
