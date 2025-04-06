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
    "vZcFxxKg87RfcAdBsEsy7Fs1ZYL39iWRxDewQ13sGS6gprBsFTiZwt3VFbbmN9AHtwPpAzoWm5PR73mAG3QDkgu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21Wj7wXWAbZkdJneR3ChFiqszPcdhua9LbArCiyoWRB889zcuHDqmQ7YokNFzNV4J8Bp2eCgu4CX6RxZgBj38nKf",
  "key1": "2g1noRC3hBHy3inkV5igbDFwTVg4EyUi8Hndn2Ybq94tGtBnTnwqSktG1kihY8TBebLZLaBa2Hw1LVfKCmLoaZcq",
  "key2": "SbVuYuHBJQzKUwwVYM9HVSLA9TDsVj1pxtFzyxWWPUowsPfb4cQ71WkbVnbrznexp6unaTX3fNB24Z85aNJJJy2",
  "key3": "43kWcHFKLNHHkfExXRy5aSQ3115ri45Aw3URJpwxJouSEENWxhfaTrvimMdXHzUjFYUtxpRZTLu6No7LmKofyhGf",
  "key4": "3utd7uzPLqqdp5TQfE9Vrc3ZsGiGYQfCw27VsFA99MAUZK4Sprzj2eTMhf9upwiWb65Dm5ooTUaF6JHgSYcK9cfa",
  "key5": "49XyLiM54jJiVHHEHDyPBf6LkENZSVbZUwpH5kjT191JBCBzacr2UbXDXmR3fcvvY7XMQ87KhQdHLjvTq7QAvi1f",
  "key6": "4PVBMnX2DZc8LM3tAUd3PzZWsXb9ryyeeeR1n1FShhqZeGLsNH5dEYKw4r4u6njoKNtNyVZq5sfQ5BSTcgmQwzuK",
  "key7": "62YawrGcYXHQPjrLGXXuL3zMBQGPYYLCNpXVfBR4yzMqPa6DUJDHryu5mUmNjaAtrMNbgqNw6amMstbZmT5VyTj3",
  "key8": "5tgd5nZWddUy7GkHnhkZA2yb7SKjmrbY7JWWgVyeqGcALQyzA2JqwfZvLpRA5dcrfeTeRJ6JoKkBT4So1NDcMBCK",
  "key9": "2ZyxvE1rBQWLZzbAfV3KUmzvj75yDnmY3Jjn2hAc7s6yMpqHRgyt3edzaEuTBtNrnWd4MoXQWv1pGz8AHF4jxgf3",
  "key10": "6RN7PNuxHxkRYmJQGq3W9JAEtbFtwjZgm3xWxxXDM5Ld4HP6T2oRS3JAEFisSegQaXLzeyaLJFCu6chcwQ4tgYy",
  "key11": "5qvgngThXAWPuuuhA9D2nMJpSvBjjZjHCjnx6swD6rfbhFMxKk9poe9PrYEp6HTUbUyZZmMedPqLUrfBTbh5Shze",
  "key12": "3izqBDNkj4E2cFfB7ZFPFQKzGzwSutWaUjSfpAxChHowcX7qAZP8Gm5xdxKRiPKRU4Bnob6EP84C9snGzAkN2JeB",
  "key13": "5kq8n32L3sBmwhuTQdcFnWLG7wcPt5SAVijiNGS9SxskMmnxqDS9VVjyYo7VdYA8XmAcQh7bcXwgt6cRe7WdJDq5",
  "key14": "U3txoZtUHdt6bLHJPoSXbFhMto6Mv1Dm8fyDZhSpLBANtWh9zcGVyXHhn9pN9VRTNg3kWg82VHVmHNmfFS1LcmP",
  "key15": "2kJx3gGUiCxuwj5hXU8BrPaDWnhdF3v4BPc2PUqRZbMGcPtRzRvrGvWpDkFteW31Rn4S11HSAJaFedYgS55MLtX4",
  "key16": "4SsRQiVNpkuW5Rz5ZA5e13ounxawLmpVyFQZpxYowuhbRLkcYSx6Q6kyk1xWpdede25BHAstQvTg5CL52yn8U58t",
  "key17": "29dPSSQ9DVifwkMRoYiSF25vh7ZMpTx6W7EdvBpf5QBxFehy4KCfdzRmbU1wr1NQB4gYmwRfvdXuYG2BcQLFzxdZ",
  "key18": "5PGcFuviutgi7TmYS2DPKzjcrc1Tad4FFo7PYUDQevntmQ2bKYB5YA77mSuVCtrCfwVfEn7zz5MP7bGhwN2dANbo",
  "key19": "4F8Yp7SSg5YVoxArKt6WzTixkmGRRjYAouHNUYYeEVXfHKqcAtK9XhbbSXrgsgoBgf9QxikDLtEnUtSmkKHPvVsB",
  "key20": "4bS38dgNnwzQBb87nHn1hbnCkHJcNG1MBSFVaFNur6NC6Pgnx3ZtC6bZ92Ezivi8BV5kEzYZpxKR2Afzoc8Pn2kx",
  "key21": "3kEW7MkfGHPJ1NY5YBQLGFRnGWJ7Akd7RdeXxdPV7JtxQrfTrYVMHtGF5Rm6GKWLVYouxaDK4cxwC2BCoPyv2bUf",
  "key22": "4wzDUZ9Ho1e9mv7Sco1qZ6wGhxpFrK2gf94Kze7tiu5uTnLKMfxtPem2E7F2ehwqYERoPWHF4Z48zJTFYu1eESSW",
  "key23": "4ohN3nZHFssLAPr7XaKKNPF7ZhAPBMDJSfYoFW6EiAwBcWfYJ6jTf32mRZt3hHSw48RdszLWrXhhpSqaQTSbWCQr",
  "key24": "5WeiXvhxG92FHrzVGTnJ5WjYZp7Ab5FpewVGF8V6qbDynT2iWxFoy92R1RFtyMLbrArq26awgL1J8MfZ8zqffozB",
  "key25": "ocSBxEW26xWRoBhjv4TR1Pe4Q3qASxZQmRRRyimgaQykKnCdDKCQWbGx9FzB3hwrPy9LmoKtyPSeT8z5cXXWv7T",
  "key26": "25EkaEauS5fCp6gQe94oY566UNRDb9rdNzpXwckvdRFZ9PqF4dQE27RqBk267uPQYdYdFVFNvkA28axx3zhMdzTw",
  "key27": "gNfRxzkxWokG44EuJNjRFxrTTiBVow2HhLxqfGguegvqQdihgMWQ3vUDsFNw6N4CFwQLKmbF5iau2XwdyqKZGP7",
  "key28": "4tzPiv2gd9p7fLJFruz44fxMS46EFnDsUcCC4SZSYCAhyjV8tDfQFb28VFJFd6FztPvMJqPRHsAh5uPKnPfEMhjv"
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
