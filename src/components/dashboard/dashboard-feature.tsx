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
    "3DcX4QasS4RrU6yfx3V2xC4NzaTQ1x4rHSPFJi6oztnVf5wfJ7cYbiAXHQNHAQU6PmsuE9j6kR2cW92ro2UZ9SGW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21Y5VoFLV33cNNeApB5cr84gJooUxihk8yck1ThRRzbZjaxY8n1VVzGspkbenTPtD2yQh6K1zs2awkB6nb52BDda",
  "key1": "25EFnt1AZLtEaiEi7wYzSnz9GZBXiPS4qe6iYUcfm1pkJjjZsXiZBDP5KhySbZ8opjjTF194fgsqCaNetk1RFGN9",
  "key2": "2sr8z91g31Rf5WuLh7eQX11JULJuez4ocgyeuY35ay3hDoAWuZd2FmtwBZ35vVzxDieztfHokevc5YtgCGmSQoYv",
  "key3": "4Lwta4SMgE37MgTSNiiTVfCWMTBLqPDffdQuqFs7vi2WQM8GGPktB5JhpXadLURGcqxJytDQqHqNWuh1m1X7BkMJ",
  "key4": "4pSjN1ay3YBEeM5Kz8hBG8NdsPZ1Tg7ZL6o7o8azC3wZQSqTyeyCLDESjpxWFQv2douo8wYAeoF1GsppaH6mUHxN",
  "key5": "5MjTxuSWuQLjy85yP7FcLQGyV72V3wERfHWAPeuX8RThDMRgJM3czGwFonFGaVLNCSFYanmjfGZFndNhKNndUJLg",
  "key6": "2TELo5X7i5LcFwvDBikaNHq9ymsudhBW7Ar9NwJspaXVQ5Vvmq52bQsEMRfy3x38yzgETqtujtivKUpEcN7dyDty",
  "key7": "CYVBLwLvEaGZt138Jv2Vxu3q6CiCqFRnZFwnkN52hvd26uMaHzbqjR2oQhY9AxzwyWU7EdtRd4ncUuKQa7vPpgd",
  "key8": "3HnYqWyDCmjmRuCy5gbzJZUZtmYV3Dq95BnGUKKDac5jhFeKudHjfNfgD6qixD3PN9zSrqefDnPByCktv46SdoT8",
  "key9": "2VsNRpjJUrASq37VpCtHH28bk5gZBKZAcuPiCTx68fPToCCsfTWfY6Kp5csLV9yyN8vMmJvTTRoXzvYCWpKj5HRc",
  "key10": "3Mfayzz8zgFZvtzDp8DCRLeEDVdvSzhCyJZjK8i1g1YeGdFtB3uMxrd4SismhotJyWWGWtYAS2sMhct4QvZxUw4",
  "key11": "28qWcyDtW9jUBnHhvUXUJgmZTu2EoW97YqswrazzCUewywZV5a4bRTRNE2BmLc3h3xkw79Y3GnVGVipb9XgfZHRv",
  "key12": "4Yg5W9J8sp6FcB3ZVCybaxojZ6As8s9nNHRRCkrxFw7pyQpWHNFWXC8TLYTafy5xd7MxcNZRMjbJ33wZGbQ1ripF",
  "key13": "4fjoPz12MDTJ321WCdWr6AcJ6Sun2RYPvP7KVhSdhD8MAme7RmEZ6U7P97uhC9B4kaVuerobDvfNQRvxT1gx1JYQ",
  "key14": "nzJkgUFx1uF9wUoq2i4WnYonrupRWWYQa4Jkaf7CtPkggCYpWP8zRKDiFYitGahjdQ46tQfgnqRUa2zYfBk2y7y",
  "key15": "5ttuFkrp87PVrW8NyHhKSP47EF8vJxkPtYUGd6QBM16phPZNNwtsDosNcKUCRw261TynTDqvgBjD5afkcFkfaGJ3",
  "key16": "T7xxxrUaF1t6p3YvQz1ojWzXqcGsM1cHK4essmw3WCpqEcADDQvczPddU1vPrrrbjhV4SAAuSUqnsKbDi1FhkN9",
  "key17": "2gkbvteBkVTick58Y87JAxf8MJJWmdatvDPm5buJ5C5qL2H6oaSzphXtHjnMYGo5rp4EgW2mzM8oijoHc39ifNVw",
  "key18": "84bYPeLL82ZuhKMe4iovJEEfa5NhtYcXbst7yJAHy9MbFr1o2cqUS2CHzPPRk62m5pJsMkT2WmDCvL24cHyiZEw",
  "key19": "4Ww8MHiYF2ZxhjQ8u4V8nit15h6LHC9wNrs7FG1FMcQTkvDasMzdHYcoUiBXPyXrkLfbsoXNM18qZ95eBHQ46Es3",
  "key20": "34h1QJAXM9SXjew6hUQbPCQAcBV5pscVyzfNtxxcbbWTrkgRB2MWZdXpr51uEkAgtpaBdqHxonCa7qthitCBAABb",
  "key21": "4LffUZTewub8zSvcUeiZpKQRhiJRiJfvtP3VmG1KRnpYizQ9Rz7N8KwYDAxCetQTi7H5rMoNEpaSpjARxhxTvUpD",
  "key22": "3sYCx1WU34ZtWCHEo9sVuY64J1gomp7gegaBzcJg4auv1abfmqNbQH1cNqrZ8wxnUmW3mfBdVBcYTjRoLJnzrL7n",
  "key23": "2R1P8dWgF5ULoozGmqBgktCZF34yVrtdswCGd92NxkP2U7AZNiPg8Tokp2AkyUHbm4PE5EtvbtXSQWo1CiRDLRKN",
  "key24": "2KRa8p1bjf9Z5RXutcHzRYdKAfusG2xvPdTjs4sJJKcNxXu2d6iuqJd3rMzHvyy887hzEtfSAmRpScDxpV5wBPtv",
  "key25": "2nSsSditGd8okz1FihsWEaMsUHmhLr6ijd3zYacP5jCuqiZZoh1AwKKYey9ZdYYGFZYoNUL9VHpqgUzd7qWWmpZz",
  "key26": "5HyNnvSai7rF9Q7mSHDGN7YZMgyNJxJiJNS8aErhzGsqJPsjB2zeUyyq3TVBPRfufDr85LSRGD2zMP9zSErazG64",
  "key27": "53MRtxw8TkQ6o1qkxMNLhN1Zg8zWvLyq53cD9mzzS5gpx7kJRYq2AtYbC5u1F3tf2Z9Rqiomqvs2xTWfVZ9PTMqe",
  "key28": "45PFim7DHy5qZp4ZTYEqqyPpwBuPGSkjW6XXYmoeCPniDEpcZq6GQJj4TFwBnQtmKpHSfyJS9m6WH4eJ2kMrNKHC",
  "key29": "5gerNhX6abLfrahV33RysJhc9jir8n3rfhPCjjrqCMTqY5Upq9mY9LTniRQaaKmSViNY7FM7sRUAGyZRd4jeMwzS",
  "key30": "ByoExksBdAKR5qL5ZwCuJztFEyKzB15VwZ9n4wm6LAbh4pPs9dS18rzMEPeEsaGk2WMsMP36GJa5srxwfb2XyHr",
  "key31": "RY24Paj4G4kWSYwGfmKTdtm6ARsVR3XsqTKwf7stqsyt2d4NmBtqCknCvKYG9HYPiuJfbsbhrT5fnZjDPpB6eKd",
  "key32": "6hHPzYG4WNYBRVdpExKBetgrkNjMag6DLCASt5C4D43Bdv7yWoyV3cCwp7cujvLEkGdiGVXP2zFZdy3GpWCR8zi",
  "key33": "YHfZyGwALgsFcJmN7KL1qgCYGwrKPsSfHB3B9kEwuH2w8YFoFY86p9eRfsGSFXhdFbb8f2JjcuMLpoCD9b5KjiK",
  "key34": "4L7v1RSv2wdH5Q986aqVtef4NLjfGo7RX9uwuPqMY7eMPyBKQNqggmmwPnVWg353REPB2HrYsELnCtyRM6rDhpH2",
  "key35": "3GkGgs9pSqaL19PRmzFHpRJtUqt1HobF5brRqfMzoTCtrLZzuhVt6dxf9J4Y5c6rD5M1Rtw59jsSr3puYaUz8w6U"
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
