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
    "PPN5ZXhjw5HzZCdkvTUa4WpM9pPsmkTV5AftMXWnLj73TvAQ8vrZcvKZ4NqYoCqCpEAqzoYZ9v9ePnWeSHam9Ya"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26afDqNY1zKtTsQPnp5NFxgBTSd58vgvnDbyL7bhAutY58VXZcAyduPYPZKRXhWCUmhH4qAW9JVXhY5so73ngp5n",
  "key1": "5P5Hdp21hoexxXzKaPQQbS7mDSfgLmQSDR6hGLZ1LjXzLnWHYCAr98B3CQTYZ2Fx8R3zJAuAK6Wrjj4zxXX8ykWR",
  "key2": "2TbwjQyf4AojRwVezfTrUUahGek7fry5f8THSh5LrTryAwFAAeiMfayMYi8fD4iAPj1kioGa5o8jFMnJee84PDFJ",
  "key3": "2Zfshn6ic2SyyjeCfNrXgXQ6DaBgDbqs7H6Ra4UKUPB6u3Phffx4woh7VcQ7kf5sJaSZq4Di9ucKad5gboKD5jNA",
  "key4": "aohhjC2Mtu1akETYrgbT6X73BoSBeVMgMrJNHPekzcqY7BTFYMvswmn3A9soTEmLgjzm4ewpGn6JS8J2V3DScRf",
  "key5": "28fXc8FXspZ6JKYS6A1YArkZB97ATajQn8aKkkbCsTQqDftpuZyL5wy3Ja7w2agcpueJuTsdZGpcYo91HqGne87J",
  "key6": "5VtWZvNwdmCfg6m9y7TjKFdY3wpYD4VYVTx1ZvXuVWqnmLGiYtNr7PTHn9YdKjV9g4tW9U9tC2ZWyaejvrZFnX44",
  "key7": "2KLuF6LmL8AKcwT8m4FcZ4HBUTN7boCAyRh8b3YuHGQLuJhtMBfpjaJfpxNp2XenbwRZJYmBihvq4WtNFMuVAtif",
  "key8": "4xPCzAJ1w3tfi1mxVywCnrPdoqGsfHcab232TWuQooKMUQEbpZjoE6zvMjcrkCP7YqdcbxUU53h4RSBQ81WDShrv",
  "key9": "5KbxT2Gq5yjzCYnZmCythaKdDWWnZVm1xGPZBqm9YPZipGxKR936cZyjRvHybphcxQJpa3wjh4ZTb33QtP8DffMa",
  "key10": "mQQRrcrjLw9BqGPjbkopqZ7hD6SA7E5GX9SYxdNtsmVgJ6zee6AGG4hFp68zoFSNPZs59wcoV34mEnzyTvqbwHj",
  "key11": "4sGCUH9EPWKHytFXNSf8yGoEinaHp1tYMPiF4KfcwwGehxTPicTJ6DAXWU7j7s1fyU7Kr5LWC4dB2XbpQ2wGusJ3",
  "key12": "2gvBZ6112MbVEveFb6MrcZLdfEvZX87XvBwBTemfaaMb474HpySMXU4pdjp5zU1ZajbKy2cMkb6E48JfmaUaTiZn",
  "key13": "fdCvS1vMbBHrAJWRBJ1FnmXYeeFuAR6VCfQ3ta2ZQaCtoCVGQa8W3FhQTq9FpxJUWFFrWHotZ6ESGKzaQmZs1Ld",
  "key14": "M4bGttKAZqAdzPt1QSHRkX3RdoKDDUbFJESGuPP3Vk7foHN6DMz8fsV1xTfJAaCnzTWQCKjdc441RRWvT8oqfkt",
  "key15": "sFJuVemoc3nU6Cf8F7k8NEnUMKADNr2Pqz3eniMnJtJo72jaDusdQAzRVb4gshTHiUmaNx7m1fUPTSDmgL2nzcS",
  "key16": "4QM4y6KBRkyboHPZFmd6WVqGQrrSgMkdjEGXRjnkCCscUt2zTpVhyaz2acSgsaJmUtXEEhoe4djt2WA2h3ykQtv",
  "key17": "4W8TPc6R1nBg3Xnd52JsvD8ZeXhVKq6wKrZp5Rb1mqoDQJeck8bKoRebA4wgpWPR4gCzYnzmTioKHWh4uATdB9EX",
  "key18": "2WyhTUXsBm9kAK42XupxFtEqSvwmmjpzGNTs2XedWwGHScBGN7XHPDyuT71Wv6w8ZdNRV5nP2MkkJeP8PLKgXw1r",
  "key19": "3RgbUuTdYsB8eHydRkVDay95KadfCrDjZoT1KhSC4kHbDYf7h9JvfYgNU8pJMx7noqYTcz5r8V2BDZN7YaVJ1no6",
  "key20": "AoX9DJ9A8fwcGtusVphsyCuiN1Ketp2NtZCXvCbbEXEDVs7GFAeD8b7ob17E9hwYtvLF8x54vM18x5Szwud649Y",
  "key21": "62t389soKuPWRsduSzES5BaFkkQdfodaN2LLHmA9UMJqSHrrP4qcGgayLhtgAK3Q3WwvdKUA6ES2VQUH1YbbvaHQ",
  "key22": "2aMbHH3HGfEcxHwJ1oDMdkNSGnNSBHyDkKhM2xmnRfK4gonCPkwNGC5Wa3tNNmuMkRqXo2gwWGqDzKU3Dv9PHqeJ",
  "key23": "5Wwskqi7JxbYRJsQT6RohB8PPbsTF38iiBQZ6koVmYvrNwvEXPyiuZKsE6bJmufJXFvxzof51p4gnP83DBW1PA8T",
  "key24": "4NMZmqf791iWFJe5eRAaawUHABx64ZPLE1DKRnKLcnxJEJhJh9UvohH7CdXwzYyKYrJXNXC6x1AKrDwzbVoCT1Bo",
  "key25": "4VWZrWXLosDmZH1m2H8BK9kp8gsvpgcKMJsZUEfjFaaQdktAp4j9vcKPwDNp5TvDHoYhAQdL6ukMhWPvwUy7ggpe",
  "key26": "3QdBa5ssrbGfhiiyA1CKyT9vnKEaSf4jQak2THCqfz1jQvQ2dxVN4SpdpY1R5HjzcWJfuGQFzYfaS5feALc5MgjS",
  "key27": "3dAEVTxfu5QGQW88mVXevQRre8RBMJA8XM5oTNmL5PFGQst4HBo2UnkY9dwzmNozKHeVfd1NxY6qkGsQ4e6VBBtB",
  "key28": "5iG2X9qyghrhHXvvizLULwWpszP7PauxEzvv8Eg3ynjkHugsvQ2M7rMAkGxbhNFVqtjS9YfXA6xeU4ss1a7g9uBW",
  "key29": "45FPxEmwid6MnFfM4teHBWR4mFY1svrFKoMxFtzRdE3Hc9VrUqzWx7eyRyeTMCZrwmn3v7AQ7av8jrmm2YazmEfM",
  "key30": "2QjaxpmdJFvgQsGpieAbqwzru8TqH3skVZ7Vk2HidM96YLPs8zBBv6c7tzrjc1J7S5HhLEiBZHq6W4V4ZrjZ6cbi",
  "key31": "3wejy8GiZbcVqWDcQN4vPr3Bt3HMW3EyHTESAzMkPom41emHmp1BvhbmM8Wst8C8nEk7wx5gpdsvUP4FNRnqU8vU",
  "key32": "43qbiBUvN2nUWM4h63tnX8d37Y6KrKQZFKX28rSoLNNXqY1J5GAt94drEiCXLSufjyXWD2k37NQ24DoK4LfTSjFw",
  "key33": "DAEQHcQVZZAKoVpcAV6p5pUjWP1Fuqm1D5nd93DyfgysZ9nBim83LpVmK7ZF586JbvQtkG3zEiySNGhSgogZswx",
  "key34": "3zt8BA9g2UNB5iXVjkp9ErnLDRL22DNKPfyyBCubtA2hSyQva7JjFb9MFmc9KU4gTp8TAz6bSM65etvhDgmnpVt2",
  "key35": "LeziQBQBwkvbZfPscC2e3HQKAPdAmpi8pSmpi53Ar2Y6xgK2ogMFs5UYpwMLmiGs5JrVULscD4UAdop8wS9GP4c",
  "key36": "2h6kZE2tJvqjeVGhXaq8qLsP2JG2WcZXSAgfX3mRQRV2UCwUdZwk5ZK9mZCEyUdW7iqYpUGTryfD8aLUNKy3sxvu"
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
