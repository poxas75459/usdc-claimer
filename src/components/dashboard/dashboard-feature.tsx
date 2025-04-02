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
    "3Pk5F4EkHoqBNZRdaoNetLXr79ZQ7PGaAb3nFCQA8TLVnxBQ8rE4GRUE83FeYNo9C4AWthbz9GCuCHXyZu6mu6vv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5t6UKe1cPAiuJsN6QCr5NA7NfjR36qo8MAN3Bg7jbp7goqQPNNFqhpWsoFKrYFM83ReAVDrqccRoL9A5Rs2prxJR",
  "key1": "4SSpPJufxoCgPj7MTYbcxfKb8cVnXyBi9RUdrSLUQrcVfPrhzHxu2yL9t3EX8t7ZzxSDMLaGH9MpM3htooSy8FcQ",
  "key2": "575Sc92nj5mZUedHGEUYhN2YQwyismmi9vic9M2wfBgjVZ2VySCLpukRBJnPRpGpTHimkNwyscXiTJj868vo1A9D",
  "key3": "56cubNrUXSeJMDMFkTXtDHPPT3HcSFre9jkhoM7txV2vgoQBhZ2FxfXVYcKkoJYGLWdV3EyzeXed4G6mQSmRco2E",
  "key4": "5QyBtpFP8sHEmoaoKqk13tAMMKUDjJ6CNquDC898AvmBFeup2ZqkX7PD6bEjbX8rLimSV6q8LiSgKVZhjqXeGy9h",
  "key5": "2YntpyoB4wFZyEifyBrPCN1DTdRqdh9mnf8LhtQDk2qyEG94V29wJe7m5QvYthhAKGfcGwP3LzN6f8tbWgdoP6vE",
  "key6": "3Crh4CsGVcdUSr411YRPJbyVkf5HNrK3Z8xeDVN9JJGyyGpkW7vsTQPrQTacaESU4HDXZVvEMNrWSqudGZzLbR49",
  "key7": "5iRGHA7gzZvRoEhCQenJTEzHnjFw1KVWzXJ7QxmHc1w7gUrcR5wS9X6c9jMUsVr5EWKVir49x7fHHfg5UZnKHd8p",
  "key8": "62yW5tsaUnmKG85uiSEhivVFoFvg2FZtNgEFDho2gAX575VPJE66KBDXmd6vh79z399j2a1uQNppQevW4VzBSUvx",
  "key9": "3tM2w6VTgGXu6L7FfPnwGY4jZD5HhPqmYUjmkoVRhFxD45hSdw6i15jovcDpdCWbfZkCKUrww9uffMDrAwFs7ELW",
  "key10": "4oVR1GNpeujXyFc9HeTVCgcfu6J7SVB2wrwSqZrdPd7EcFiV3VSrD7Sjffsjji8w2YaL6A2qa7d9xLcPaFkT4L48",
  "key11": "2x95gHCVgnXwG7iK6Jz9xpyiMrSw6G2RvTJWmDKYjdyoBathPr5osRw2B3ck13ZoAmMSrPcgSEfHJzzwiEPs4RGj",
  "key12": "5qzVyY8JowJYayudCy2aREjKvrcYMUjmJtVfqny7Fe2VbjB4AbZ5n7vGXQ8oXz8QSVkk3cDhMr9ZbFK4dUboCBK3",
  "key13": "2HsSuUrh5nYHfkPH364t959zBYgvhmWBMq7AYjaUaeXX4qSw9SURnPJBGYrsUTbEEmTZmBrC2F3Tk75s2q3KFRjd",
  "key14": "2kqCA5XUjqdRjuJGgR9ykrp86A4vUYrKuAbWUaqLEhD1YQdu119NgLh5HSC1Upisonkb2odhDddkmo4nahkzuttv",
  "key15": "3ySqnjXSGSiR34VoHrZ1mVX6YSH1FMZnTVsN7XMXXF4HDkqN6Fu4KswZ1DR6bseZfQqrD4XpZVHZhdRErh1oS6pS",
  "key16": "5mia74HectJh3ipcSWdVxvZtuAhzFjrJJMAmUzhTQgH35pU7nsQwwCA4v8kT1KpwVLStroNR3RBJyx6B3kFq8zhc",
  "key17": "5CFqZbMQwszb9beR5MpcRHj2VTFbpeyDvNbqyAWRd2PwjFKycbukSigRhyYGRjeB1mUX3gJLrHGGeMj2fBiywJLh",
  "key18": "45ZXuh7urFU4gYBZoR6i4DspQAJ82REvRUHamT3Z8hBk17BrRc1Y3sCuvL32emETXqvj9FRsnvWw9FvRKQVpRgiK",
  "key19": "3jfzz9H6xS8GVrV7jyNUNnFr9DxrAcpoa9PhSiborqSHZjDnCMBXyvDQkrFc8mAANpArcfgEGR182LVvkZF966Ek",
  "key20": "5YbfeiicUJvrQtNWuPCNMNPaxnDFtxnVHkCesk1iLcf474gYuxYBTXrxczdR6XEAD5f3jECZcYyn3yq48KpvMB4c",
  "key21": "Zk5SELD36ErbTkqho6cEfJUjdmWeRnYZZiMTT4wBkUnfcQxuZ44Afgi3L12NuBWoB98mKWUS3s1Ty8Lj7h4Bx99",
  "key22": "42ZVBzsTjxNeU5Aveq9NHCf7FMwteK8DpBhfUHbvfwnLNvjfoFwQbMaeZfUakyjVdNwNcs5ioj9MiNxfkXKWJxLe",
  "key23": "6gVTtR1LLXrbKMNSp7XVsTTW6GRG2nPgHq5U9CjeRnmyCnyM2LLYRFWV3Nhva3afBPDsh1PfW5BM5UhNt42sYiq",
  "key24": "5z5YxCuBgegcA27E9fVXSGHVsttRYZWqUk7SUFSrPTtcXfLSJjj2yW2dEXdEUh9KHmEULzNXrn41NkZsLv7HC28h",
  "key25": "4KeAjqpfMuRivcbmqFxgWB4UZAiiFUynyux7W8yM2zKY7aZR71MZvTGGxw5t6zi8HL2QT4LT7Q7N5ZtxKENtsTP4",
  "key26": "zuKw6LuWCZPsEip9fv6UTZZh6Gmi93kyZSTMvfGuiDnkWm3TmvGxKbxQWQihr4Jk2mNdyvzy9Q34x3zPQHbSNan",
  "key27": "gsustk2YtWb41QPnKQoCPbLL1q86VPkTSsDaaaamnQuZUMVnq8VAC37MUjjcju4eBKDZHv8S7v7gDgwb789Hpg1",
  "key28": "4vPsumHFYPGk4qN629meS4DDvyei1oHEmcft6BSXtMbBmC8Wd1vaHaXJvfnNuyWmUJ8Sb9DS5yXD9hdTi6prbEtX",
  "key29": "3xY3zjCapwTysy4P9ZDE4bAqmY1rmhqNZqVjDHPNZMAHvjJ4CGJfkyPBorH4XWTDt4P24iPz4P4HfRmFV2nLZJ75",
  "key30": "tuefXmyQD5TzurajrSTQicddcMqFADxDXAjUiPMSaeZXhdYG74maN3e8C3fVTwkJeQ7DWoghq2B7JgQNeLc7p52",
  "key31": "3CVNPx9efPWkPeVNHVauCPZLo7nwc1w5ed8orymodExXHpHsVz8EygPKWvmE9zz7Qt9mSVCJPNgUHWqNewz1MBVW",
  "key32": "2r76q5uGRkoX35Ci6aWyPW7LCaFgd3npv8BNDtpPe8NuwV4Nr8faHrTKADma41UVj2PEAboK4ioB3rTF8XNbnK6w",
  "key33": "P6ZuD2vQKupT6mAvMtm4A9GGy1MBLt2VuR9fPCDBNuLrr86WBK5FZnNsYEWDN756B5zUY7npLgm8uDVEuwcxcLy",
  "key34": "3GoKDjHbDKu4reYw945HDMjURyhuWpSx7ePMuFnFFVzoTyYs87DWSHcoFvgxMWJSrtghDGTKzwVJNfkTAuctawNC",
  "key35": "5QvuV2pUMpU4zqqjTgF3fFXDyn8jLTQgrA7FygvrkjJbaf84ZN441euGTXkpeA66FNoyP1Y3wz2hLrktXAsxp5Ud",
  "key36": "3YuE4DagBwvgUf9ZLpH6cJDw32ndkAKZXdcttD8Cdxunz8gQwZm7HkgwcuMEnd4GAbUCcjPwWKAroioKCwYA7f9A"
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
