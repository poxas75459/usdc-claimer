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
    "2r7azHFtu5PWaBeNYyFsc2GvSyCzW2tADhTmaDiMvEaPSqY546wTcgHPYwYopSNXdnbMatyWNEM3zWCvH4Mj483f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3V8JpHMGcmawZFxsYSuJTqdMM97pcyiuwQ4MH7tUUbgbrFwT22DU3Y41saLoPRiiMK6osr3raqcjtKdyWhrqYd76",
  "key1": "36XgVkzMq8mgyrdjyfndEcLphYx6V1NQnVk3Ffn91aYn8y7f6kh5CtWSCZXWzaqmtbJhF5z59ZXXnuGr9r5KgvRn",
  "key2": "a4ocfTFuC3jDxdEaNjc4uD3PXVhs9GrGhsxBREYff95pshxhwZA2TBDHHVRiJ8QzkuZNySd6RPwVQTzJLAuixTy",
  "key3": "57Nt8HTeiGxjfRMDjWNby9KmLpxqciDkwcFXbZUT4MsJ9oH77dU23C6eibLnWRVTxE3wMrC2qZeB7yXuZkgsPcdY",
  "key4": "2rnpwAsoTb7Xn558EvoCJpPh7ESFxo9J9pVbP6fbYBoz1XeDAP2gCaZWwcbEybiJEyW95xiy2gLorRSxWsFZ5F8N",
  "key5": "62745m24soaWQSPxwozniuytTmar6y1ykmw2xReN6f2LFc4rZ2UFf4MAEjeyhsZqZtLUBhtpCzVJSLxsWCXYpGrs",
  "key6": "4VqNBtZ17FdMvETVH7MdHmwcteY2ZKJFiek6G6hRdjAQT5WbLhH3ay6h2527YpPMegriydjj4tZ7U8SbvnCLxH23",
  "key7": "5uusLbiZRBVi6a64KADZoEgV2AKWVewLxuxBtfAzYoiPGJL74DvWYDMNB2uXe9jTZ5tvfDhozkPdthBiHVuMMgCQ",
  "key8": "3BUkfTBs1rNgYFXrJb6WtrjDSztYRFRyA4XQwX9JMx29Ymk2kWeMcqwWRekBupsfZ9Vp7UK4bfjbTmjfPEUjE8Gt",
  "key9": "25uaXeEJgwwygTj1YQgyfUMWUFaKN5ze4dFu4u93ostfTRJf5che1EhxhpEM7h7n6UgprBQHXGHp1vnvd9EcLVa8",
  "key10": "5KfyrhhFVchLPHb4XGfUoYsvykzFBLdqEoA7AyS9dHYXvRYnsvKoYAc4HzFg1cyaTbr1TsKzrzdgDPaR4mCnbJSb",
  "key11": "5WtuuMYomGAbcQapWqAAn14QpcvhKvoncBkPGM236FAv1wa3Mv125ZTZnR3EDwJJEJt81t9cfh99tpVFX4sHUgKP",
  "key12": "gbYM8KkdAYXvtM3EPBJxpwssLoLZLbV55vrtTNBnMKK9dVc7Xj1yL8R2c3cMrLFrWSZyvN98Xghu6uYfjWLYWgd",
  "key13": "4xEhz6rPCaGSiVHW2aukjE9iPrKkgq1enoQcVr6DRkcGB53D8cc1ftxmcZAYgTxfCsgx6BZJAVGzqASwuxJauRUY",
  "key14": "5Jmq18tiF8rXeFVnhuSnhCCEKzeTYcdfvnJNstRLmhCjauTabM2PNoC2xpusK9PAyJ8k8tfL36f9YcMZrwnUdmkP",
  "key15": "4rDnUjKpJ1fAvMKtK87uJ2htmgT22eoEtazsMqKPL3BASwmgtDCB8kWrh6hUS67nBkHe8zKrepAuvabd861YPbKU",
  "key16": "3x91XJZWssqW3eC8VKYdkkXnto2FhhUXgS6K64sci5oDWUMnVSwZKyMEwMWduXEXaqeoDUdHKi4b9guuTdzfWBYq",
  "key17": "3psXYhynkL3BahMjS1Zhhy8m8FUaNoEQ9Mq1FDGH1w2QFQZ2Rob4QpP3hgHCHjByyeJJZdGwbp1mDxLWb5ayYY3d",
  "key18": "xFYukbZiog2dQ1CHmtyvkrWqeW4YXonkNuQwYW2CxDHLvWGG6kn5Xs1sixWKnWHKDnxrzysMYiZKhxpUvqCSNWo",
  "key19": "4WcH3HbtEQdAj4ATr8bSi1DrL4ScjaTmV16HnCWLqvMvFxJA8Bj5se884WskQpsLpymEXyg4sh3u4HEQqqFsLXp6",
  "key20": "4GTaCdn7ENhnCDbP72NBLrSW6G1YKdiJhYNBRRJiqwdwwrbGeAg6epY5uT8QFLKm4sjqkp5KcoQQLNfggJKVez2Z",
  "key21": "3woHzjYLDvXw9f7z3g28k1bZoFuNBd1aXAeQhzNVFKHdh8N8cojuhAmGyqFMqj2xbsUt2NxUnCCRH7RVW8uHjqon",
  "key22": "3fU3JW2QYrrFaTdkXxAroY7sNx2cHJ2vJA7bWbTweGsyjoDenJuAMvZLDJG7FpAsJg4hrWxkGqvXgdtTS7EcWtiB",
  "key23": "3wuWTBysQHv4xHz5pteCE9KUbBBUz6w7TsYN5DgmKPtj4NhYL7kvCsntGY2mDzURyAbJXGJw8mdNTnr3eeh69obb",
  "key24": "2NnSisZyfcfSPrTqd9BizUSu7Du1A1QdwinMqfMBnASXUggWgZqWmJfQXjvofUyuqnJZYHP8S3UGTc9QDPp2AaAB",
  "key25": "3eoScAfNiMimvf7XtKwjU7XAhXmCH65e3Rh5otAh9PxqY1PpKoYuwHdNDxZAYoWknNLDrUn3UX4N5DcK82bmCbkP",
  "key26": "4AUbUDHNsZ6vSPmYLBrM88ZbbWYbSdoac3ps7n4KfVtfB6BDXnxk6YD9NrhxqyNvqPLCYa8KpGi95Qia3twYcRy9",
  "key27": "3LyXZzhNGGzHrCwcYtXvd6tcJ1LodtDjCvvPMtMQcEcfJksEiafeQweFDnHkeA6xR7vxwD6ezqt92rQU4EsHboSi",
  "key28": "4PSv8DUyJPMicLBGXkrqPL5JucCtB2h4LzXagqhqHGeYB9ZJPxqAGwm4jqqt8xvZPwjBLbKof5q9wYLVZ2MBqQep",
  "key29": "57fGKu8fmQERQ6MH8oAtCHsrDMfsQanbj4rdsFjoSech9X4LiNLWAiZNiX3xht1bhueZHKcSZCJ5nSvKzeKWYV8y",
  "key30": "88Xh7KCn72wnaDe1wUUo2nRWJfGTrTQBB43B1qLDJ5AdGLxH2oek35gQ1rHjiJ88pikaJNJt8q6keAQ3YYncdgK",
  "key31": "3hG5mQyvN4YwVT2WhHxjPt391ypgGPzX45Uw5h3bGF4ZW5QSofNeaFrkCFx96PF7KavFf7LTgMcto8hiWtfSkHT7",
  "key32": "4VSA4tFu1GsmEtq45p2UKii6A6vRK2EJ5khAfP9puXW9xnYGN9g7JffwsMvD9jFHcrBB2Ws74bY7wtTwHNE3APR7",
  "key33": "5UgbWvfdxAbJpWc3pux4k7gam2zpmZsBCNrgczWZrvFLLqH4Z4UhPaUrkwxKD4m8vztYhkZtGUAwfdgKodRmn4B2",
  "key34": "5N86mLu6LpnCM8D4MZMAtjNDHpc14t7263jX9P1ryCGRwkzcVCRx3JRfTK1DS5zbyNHm5hMYFK2izYbxAgQ9L3qX",
  "key35": "45zHUdMSR8qLjWY4QTEStUZThVxY3hqvNdUnSzJ3BfNpDv3Qz4EGUhy88A5QrDFaM9hV6bfRre9HxanWw3n3wYd5",
  "key36": "4LNZaSFd8TCtzyMTyFyRMSvtVVjeqz5jXKz1SG9CPuQtZhiiLz3DJUCQoQMCmUjezdUdkt2ZUUim9xoF3PNdPKup",
  "key37": "4rUKfx21dpZ948rjLDBbECuLFqpuLXuvh4sHNi5AXfYv9oUUkLgmttoeimdvn6ByivD9DFsv5jxripMo4n4V6Ert",
  "key38": "42zCMYrg2hPAGjD2yTv1dAUmHVsTCooXWKt5fCnB7aScSBvKyHjSZtd3oq3suqEnT91ToBkte7ydRddjCtTiEyvb",
  "key39": "2YubV5G25F9peSpT7A37rm2NFRPeZycm5AmwAM7rsGrvyxCjH2eGrM4gTtCXkhgUaBHUPwcRncDVCngFBj9goZJE",
  "key40": "acmwQjRdyLLunzQD6z1seU3WxDmVTbEuWTDmHn8emE1QDPG2XzQynsMYqfPLwJPvKmdKzEXctxqEcwLqWZ3iuv6",
  "key41": "apFTdp34tDsZ7o7DJQbsUykAsjUhin5arsf5D4T7xD1G6c16HWGaPH6bjcPEVBFEzxygdGLxWJgcbyZpE9Hy77X",
  "key42": "21mkZtTuG82Z4aA8F3T39GTwyi2cMzTooYDxfcXGD2k4VtcrwjoxcLyewbCSjChbN5Ug7o9yZRrEHMoxoFf9BE3R",
  "key43": "4ugNzjAHtEWgMsojatap1KDCCDGuyRfVeb1FmGUVv9wo8WoCdGe9n8H6Eg7Pye3TjNJoCjeYdtbiASMFzBgLKmQR",
  "key44": "55ktFfM38Y2WJ1kzALbQdtTMKJ7Hw6NfHZ7ttg1QHYMZe8EhKubV3mKbGwtiujEcXxCF9rcSygZfTbfr6nMj7s1g",
  "key45": "29ZPYuT6mXZQKYQvmexsSd4FmkiLdnZ92kk38UEJHMP5jzNL2NzsDBQW65ibHVcLkxB5bizNnPDCym3vRvaHxQGZ"
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
