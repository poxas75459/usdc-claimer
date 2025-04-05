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
    "252cJxttfAW3y71oKQNi3XFhawJeK86qjLadAEiRioxJK8ke2A9qtdvco4Qifjgj9vgibmxLo9fHjYvFDexrYcLJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZWM3yPUdFNVxoaX6574hsSorVnVtspQacMGUi297itTsvfyLXhdXzKA6b181wDgmfyzVANLSn1XiedwdJx4nNTB",
  "key1": "3Bg4WZpSZkAtBAn9eGn9qQp7A5doJEvPfaxTwrWPZbzMSuPwZu5eRef6vysgReh5a8DRKy3MLN74RdqtcjzCvJ8C",
  "key2": "2b5bebA9MyhNmuVzorY911wtzMitTnJTRDDNuVBM7XMPSQ9b4sZUPk2nrbTWCkNqLDtf8BtEWKscYh44qA57BAFM",
  "key3": "4TpEjFLXDAPRyfPH8HXQ2ArL9VRGrdqPfvyshGPfJsYKvpNC8qRiAfw8PxBAgXGJWqRQRx2GSirHmBF7qWwV28iW",
  "key4": "2KwHaQByiZDjJweNdW3gzJCGqAdo7VJqNv8nGVxRM9xKWCuSa1Y6QNwSeioPBw7ZYo2twnKF9F48REzxuFAZMdVi",
  "key5": "2HLRBZvXkUQ1c6rzfh4XD9kxvFhSU5zmtLrueF9pLWztviGKRhJdporDSzesn74mQyfKmUyp6dKvXyxu5EASRNmy",
  "key6": "3nZds37MqvNMobnNsfHdur6WtUtz3YrV4VCvgkTSwEzVAC3xXEhZ4bL4Zp6XDrVZx6E1un9n6AEx6TmJREzxjw52",
  "key7": "5xfRtejdbpRtMmxaYhdAhzRkVSQ5ocPmYJ1homrD2VBUTkBwubJagC5FQSdVzrFxh5Yap6QQNYD95zfsaKrntJns",
  "key8": "2ApuYmQYR4qLbDM8HCg4XMKrF55aSot7eeTfAi54x7Q4HzQwMQoKKyUuBVp4qZSx4AyxxySLBLkMid7ASv875qGk",
  "key9": "52qhix69Xg3fPceAVop6bxc1a6itL8137qDwahYsWusiFyFy5fDhzWVqPSCML4JyjLgjYkD3dLr8ZGbPbQ4XaaQY",
  "key10": "5E8TFEDTZd8VTXYW2qMnd6eATEjjntL23M6ArLqDFtZBjBDu1rN137hdJ3HfnrKp2XHf1uQ6NawFiKrHbwRg5Vj6",
  "key11": "weLG8AZpVS8F22SLMLG7YjTjJk3f9sS5EqLxDU7tZCzi9NQcfguRKedWVupogc4SLzN5wjJF8eP7CNur7LCxoEV",
  "key12": "64aBqvQnLZaCSM6t5F6oQazU8HVMofaAt7LVtVFBMEqUhZ18WJJrwP2VMvbSaUuFsh3KwaUDiyAGHEdowwEEosXJ",
  "key13": "3GqpkZVBtKYB15TQhGKjXqvbrp6cZGBtC4yLnjBuXdEAhLbNznN2aQewQKiTkBKjqUoHPvfMrnqe4eJZ2SbbiEhw",
  "key14": "4sWn2Hgdp7xcD1jtN8rJ2odvBFAizXx1LEV6WbgJveH7YeSzJydu9ky9rT1FEDrUpGSWHgeosedZAiZKeAFkbN6F",
  "key15": "zRSR1DZfdzpZptgGXCk6WZz9PhyyLPj4VbaMQM9GFedkhiksyuMUjvmyQyUFXSvj2JEbKXXoYTg89131nTkcDSv",
  "key16": "2MZmXgrMwuRQNsvcSWWYYE1SjLjFmtu2HxynoPGo2UJRBEShUM2ZTkwjVsYkurp9G9Fmk3NqNKW5TuCDMTbnYvis",
  "key17": "HhJx27V5fESW6RbfqTPkiDRWQwJhr9mchQcGeLiY5zfpRhVdQjZM4R2y1pLB9LjDpPi5TB8MEn82Mo1uxe78uty",
  "key18": "tSEWCGvMrjFuVmg8keP7stZTENEhyKxwJ4wfaEJCx4JbURdAmFdnKbEnQFSvGy72AQ2Jnmo11CYgozMhK54Wwbw",
  "key19": "GLwtSmwYRfk5cfd9sydxy1s1n8yXRrgQxzUB6opHWqSRSXEA36bo2x9EiunA6aJVCGJckoM39xa3CYAHmwDHemV",
  "key20": "k2R72XGBT7ZzsUvcXsfgFkfW6cmguGKeCQPjMWYgizFse2f1d1mJJQdfbKZSuswcbiRV1f2PMjLMYessnh6kJM2",
  "key21": "4iNFcJkdDR3Vk2QP4eqsaWoskzRH8RtnpVc75ueswNaHhQ738aEgTFsrtecCY4ZKf9pHw9y8txQ7WETNNpS1H1R1",
  "key22": "2yPmTQ2oRAdQJNaPVqKQdWooX9xMxuA6j6yeiMfCqi4wJbKZivAxP8w85HCxxz1xKwCkjssewJh61Fz7UrjmCD3q",
  "key23": "5c4RDnNfo7zeFR3QZJFbQAa6nRHZ3wcAVnAe6cuCnmJygz1epvxWKBQk1ZyzokbtL55g8HtdwwH3qYxFq8B4JBR1",
  "key24": "3xBKuxQTEPk8MiUcHaYAfVcVyraXrpoVMaNLKoMKGdSEkJo4m4TZZ5ADJdppudfRSMBCk87AxnT7BAuQaLk4Dvq5",
  "key25": "4tefnCqV7qnwguVvPjsyq6Uy7YXiDNQx85W5EBXA4msrcHVVA4xECjwAbxp46p4aS2qoNjknoi1Rq3ydNn99g7Mx",
  "key26": "3pbHFNCjsE6g3VBzr6FLk3qV4NdTLH2KTM6yGYi5FN322AZ27iFZs9Wh4SiWAh1aQsEJg7m5mN9uWo5MZd8yqosJ",
  "key27": "3QNEUjSpgKVFNNL965ii6bsAbaWA4fiMugTWGyKGxAFRkWWSFysTSz69tiGEAs5hpZVurZhWVL6H5rLDVTPcEQmm",
  "key28": "3L4hv7iaRgHJXnRNHDA3sKL8J75GaE6BdLuPvubu5yyDwjGZCsZaQsyWg6kLgg2qTtUiriRLAJgN5ri5nPA3mbEX",
  "key29": "1kh3KjQRYsycYxj3QpzSXnTbtLDEZ6YVr86niYXjhvhsk1bbR61ydkobyrqM5BoqQDB6PDWR5DeGgtj5LDzfCKe",
  "key30": "5tffzQ7axEy3QE1kAcK375pXqRKVrGvyDvAxgFfE5WRPWQ5Ti8U1Mtae5WvCNs6cAaE4dXfHw3PUWKt2CbVkjoA8",
  "key31": "3nLWKAvtwY66SsNdssatFR8nxbCF9HpLbn7LnpgeXW46fjVGNzFma9fT2X3Tm864hyrQtZDBArKH7wbgErtN4uRz",
  "key32": "VaSaKeE9xmCtgQCautF2ScZ1WYAzd4EF12SgAHVyWJbAqQ3T68AVY3zeoryPce7rGkH9FMZELPJhGLZdzqeUVHg",
  "key33": "4Fq7rcekC5tsafbPEw2jdBountE1SoGJKp1M3LCbhto82yvR3rqt2so3vAQCwWcP8bjxMZXzSm9uuwBkf5VHP58r"
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
