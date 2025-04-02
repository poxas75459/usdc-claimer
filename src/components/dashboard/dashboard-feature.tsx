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
    "27QEGR8LofLFHCXH5wxymq6CqZWFHYd1AuErqY29GsLNKWhUsdeCZoewkQvCNTfqkQEDjaGiod377arMKPcV4N8w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KFvPPmAQ6LCzbZc2dUoXFWjJ1ZA1gdeMD7sGUHJQWVVQU9Qw5bz7zakxFEi6Uz9wpwCx8AyQTvKPJUYb4LuJUcq",
  "key1": "2zzPAHg4sXpJEMSPV3B55kzCATqY3iYt1gjpk4wCBazafwWit7SHhoEZ9eZjxuigLztYgBSKprRzd5UXPi53VaWa",
  "key2": "3rQrp1jCJ3ry4pD9G65hJkv5dTin5eqgq6KArAa9DHuyHd6HbApVYfwxzpJgFgUYuCqBJUfLz5cuJdaaAV7tvd4c",
  "key3": "2WyasTgQ15rio7hNzfyL8EHkijhYYYzuvx4MH3PBDsq244PnG1cCGTsbiLuX8Z8yJNu2pGt68rw4CAr3JqX5JsJZ",
  "key4": "4LQj1f2cJjbm31y7c7FnEWq6Z7PjCKyz8yXQtCLVPfaqowumNJBbNkN2VoWugoz6xvDBse3HrAUZSLuzgdQMxPRu",
  "key5": "3epBTqW4dhJHMPrqQrxhfduqUpnyu3wULg5KWZwgteWwpRniuEPT6cUTtwyaqvp1RP5BQkD2yiTWH6pQYB2f9WSs",
  "key6": "3FEtecXV5UVEeJJ5f9Lbkd6CUxYbCQqfDo8WMPYDYc5vyQmhdBVCtp4ykHuJyerGMjEjdwmGksg9bRrzC4WPjP65",
  "key7": "22UnYbn8uu5zZgTm3x3DcCGD4QrZn3QXWzWAFDp2D2uHD99H3ikUbRbiXKkSeddZZZSMdwvAQeAmu5oX64FK8fbQ",
  "key8": "vGmzhUEfUyqkJuu1VTWWyadNbzQnYYdsS7a6SRpJWTySZqBP1fezgv485SYfCmXhEecXc92RnAFLFRkCiw3FGEM",
  "key9": "4uzaSUpkuGBihwYPxwGUmuLoiSmHd6NHCU49SEoFo5C3TfKGGNEr13y3CGa56379da6PxTXi13CRbjXz4mpaDjdN",
  "key10": "55VYg1KEqEjyAQmj46DmKzis3gLStMaRNRkCUEPm5iTQY5Szc6d1ZgFTRXcDh4ZWgnUWfXK7Jxdo7xEerxWST9Sd",
  "key11": "5zR7D2RpR95ZZG9wZJfbNgqYH3TzoKySVMrvYk3nMQbxZ4JLxPzpeLB6BRyKVSdgrSP3mSNWnP6DvtDKJFN7Zmhn",
  "key12": "VqGqAYtZJmFjaqsXDZnvpSR5EGihz6Rod6tf31oFUtMzKddX8WE3GmSynTDMU5vjH2pPFRqwCudXRwBNbHFHVnV",
  "key13": "2oajkRYWEV1gFWLudCr8hGDrh8oDAox1hwe8i2gk9uER4TaBEkgrYcWVuWiLzvs84iy756tQiKaSQrEiHZfgU2yT",
  "key14": "4v9PUpQcoMjDjdBgr4Xi5tou9c8VRdrwcj3qwsyjQxngqttuCTn1ZicUy7fgHJrBJGh2Hn1hebqighrXo7qMMpJg",
  "key15": "5hgSKEaz1o14KSRR9eimYPzkJgU9sbMM5UTr3v7kRRqvwLq5kVcf7iVT1YhrBBfUJW6u3ydTwNfywrQWyrBEfNui",
  "key16": "2w5z4q8n6jKHqVyfDWkJSSbdJZeHASrDg5yyQLFV85cpiBXBfETM2XFEnT2GYfX1GqfjkuW8n3gFkeqc94fkFi2s",
  "key17": "4b4TmMhWTeQXX64PRjMqy1ER7xNNoFtEb7aXbfgWEJk8DPF1dvNfPFvAxJ76QZxVrgGGRMx9Yj7umte2wzVhBi3Z",
  "key18": "3nMHyJPhtvfh7ehtmZPyiKiP9SoDzKJHr4PoyLFwuucWRN3XU9KwE42azyBn74YDVhbQR2UuLWKFZLqEVp4SHx77",
  "key19": "oeDfGZJoUxj5b6ruZQZKLjnMbhgyAPvB9GwBUdwynyVy4j6y96rXe1K8Y9oVtTiuNkTYnNyhPuWapxS8a3SyyKJ",
  "key20": "4CBkfk8jqFeSgkTS8qxrbY9AdXjtgZvqmnDv7Z7iPR3YNVvU7BK9gGje8YKsh53UNCiz7digkxDuNR3w7ghoXZgQ",
  "key21": "25DJmiR77786xWmbW5MRc7pkJDh2dFPXpeTj5Z6mSYyNX5SdHhUwaSki41LTfduyHkR8na56tTLJ6ejbK7rHkFe3",
  "key22": "5wVoci3rHLEbHu2Rhm4ybnWXXBnU15mrwQaCKwsDc6wUsdxHjdAXNbz9LtBhQNiWp8rzW4J55T2NujXR8eVoBzY3",
  "key23": "3eoHGx9BXBbbpmnw2UkAvv3KtVg8URNJy54mpK7gGzWjew4CVuPEKTJVKgBV1ZJ8qDPRQJaVUi2oWYueppC3asLN",
  "key24": "Y5taVzS7znatUVcjBjmn5DmPCwpkfc2qiLMAV5q8fdnG2zitkjKGi7JYdvYA37Zr4bHAT7JFtdjGAMexucLRCYr",
  "key25": "3SPtHhK49mwHdqpXoRMvmvze5iVvKYKsg1eNS3247KKh5FtEzKmaWkNbAcN8MMk4tYvKepPVERS83J4CXwP5xnfq",
  "key26": "qNtWrZCXNuDThuB7fFRvsc77bac91zaKdekHuDv7sGKLMXc2hopfGkzi5DRAZMxvBm9w8RTszsNXZ88eQSbz1M6",
  "key27": "5fCnQ1TjCx5is2Ty2saqTQQernV3dc1qyzwUZPkCw3QDRBZ26CNH8okED7PKjcXXwETNfA5Z2QdFhfuvAHCnq3mM",
  "key28": "53vhxygKbYLBxaU5Rc4sKv3uNzxEcaypYHhDZDdLumbXmCJnpCvTXd7pyaTUsDFJj84qdWeYiYJ44HHj2GzQCsT4",
  "key29": "mwstgYhTvz4gxdxCeuhSk7DVicixn7RxekyUekumXAVuMHAPUAmMVJ3cVik8EGeHEFrXcL2mjaaRfjPHKKLsian",
  "key30": "K8Abn2kTkL7H7wwfiBNk8WjhJxtVrEQ4iw6sXV6r5GENpoLiLGfEJr9YrVM6YzGsgmEZEpYhh9AvqQoyXXqXkBr",
  "key31": "4sSj7WfskbBx25T8tGHSipen9eKV3YnT5ZV25qqNPNnjEm92FBHgU3vRFHMsNBfR9Ac5F8MAy2DY2GRcaKjcWpCV",
  "key32": "3H4nEMi7s3PTX4uKXVmiKxdQuWXgfx39wZvXaqYEMi2XrjA1d683odwHuowqxR1Z9ZNjNAtmiBFVD6ca4dB7cjAt",
  "key33": "2uVy1SzzrvcyXvW3oZtZ5q2HyNmPBj4ffTwN6UzBCCoY3xNPiBUVQuvLMHD5L9WNkXnFFb4n2PaYsUVE2oRkd9Db",
  "key34": "2MXwxwrjQucHgCEL1xdjQ6UWnfcAdm7wkz8cQxoFkq75HdPEDvabo7RsupEKPzF97A2zHSUayV72GFBM1GS1xUXV",
  "key35": "4z2KJzQ6fpptK2anKWdrRP77xp31atBhd2c4P648dDTSGpjpZi7xYajniARpkHR18YGgtrSgo5AWpYpUSZ3SShAh",
  "key36": "6hLyefb1BcoBUkfqcRu4ZiPLCBb5xg2kxP6CjVbQPpKAQPpoC7pJvUe1zGGnPudvDNertYDxSsKn4AUQMVXDnmV",
  "key37": "49ZvL6XfQzcsc3nj6yQePhP9DSagXsATsEzCdnGD56dt9z7FR4DuP6N6k1rCsbxsVMwRKxgqW2HWLEDQyDf6j1ZN",
  "key38": "26oiKbcvgT777tfbzVUKWceZ9FfxzUHZGTSUZere3wpiSenc8BeFtmtrswrht6C5ofGVqA36bnNh2GRcxGoGNZmd",
  "key39": "4VZT8Ep3HjwT9rj64dRU6hbDpCbFCLvywqF9n4kswJ1YWhghyc1xdGU2jypcoW68TvxnQabzNgtGjNefNM7UZ2aw",
  "key40": "5LwbHfhs7uqHi9NtGkf4YFuEnLkPGeJauUHsd7Wgm6uDmfEbEFVGMdMtmnWbzmcH8kMMx1V4iN1K8akLrVdYNBWD",
  "key41": "5C7hTVrDdyKVLvZvnrPqEPjhXoiSYNPErM5zdS6bZyX2whtZgEpNKHqfv4n1VhXLjFQEZrM4JfhEq3S3fBp3Nm9n",
  "key42": "4K2vYGDs42wv4ZDCU19JLgmFDyEnmry9NdtvZq2uNL9EaNC2eTyx9WSJeyEvgXRj3BBwqCkmpYPieXDwPy1WDU84",
  "key43": "2kg3YayJprKvd6krnAa2DQksiewJvg66nQU7U2LgaVgkKqtSE9X6NND5DaFtqJTjngfxgZGSu9qZZXpFSc76k8Ze",
  "key44": "62ynAV4fabGcm4DPvK1r2sAqoDyWnXoTcRMGTJCqWe8TmgLq7LsZYebsyi8LDLZtdUNLXFAYsJLex5sbEETCUz3A",
  "key45": "4ojv9qMFbMTQZGKco5y9aZYeSakAU2cRAhZ3KUMsfPwREygQq42gcKMbPDQFNRneT2SJoA8g7yyUTBCBMpdzfsLM"
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
