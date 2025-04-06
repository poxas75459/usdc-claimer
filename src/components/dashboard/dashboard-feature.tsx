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
    "2b6uXX9vdbYhpGg2SPdpfRz8JWjgaqFKCgnNcd5GnSR3LcAerHu98MWLgoUKamNZTJb49RAV4jCdxdm8yuq65xQJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uwcVkKQbEkK8gbgB8bptUjHfsTCTMxKu3vUsJFUTJFUQJ1iwgg2uVd3GNfvy8w7LQHc52Z9yZq9c4ezsQmWgRea",
  "key1": "4JfNTNLVEruFhKx9tGUM3o8i193C9TeLPcW6jsUWEDR4xPdD2sfZJysjrBwr2EeGdxiGo84XPfgXHc1uVupV5KXs",
  "key2": "4Roo3DEvTGSFXuhYAog3QV6DJhX98kHkfibJZTaXbgECxMf5diBABKj8z6roP869haKFFQA2grZ35QWny81gyKYt",
  "key3": "BjVfZcnH8ZGJavDkp8SzfxTZ4tV9xkn2qcZVEZRXbTbSqbqDry6y8X4saTdAdAdDZY1hHzhhAccGL9zUyH51kEN",
  "key4": "2TamSA2ao1UcmCVXgUVnGWqEr6TNNVdaGqcvYkw2xp1xgqPDEJoN6X7WrtiUYUN7Knz2mqDSoFNUJmRe1uYaf8Rj",
  "key5": "36j4dKE4uJhhcnD81XhaeV5t2MFAhvi8vFmsSZPcAjUe2MUWiQV3LWuAfoAWLxd99vRFP3fryzQP6KZxqMSP3oBy",
  "key6": "2FnNN3Surg4mNJJvxNiq8EKAabnNjLgZXo5pn6ZALVFkSiTDLw5cB4UbWTVa9tJchmBDdRUFzpwvAm4btoG6sQmS",
  "key7": "2RrqtpDXeAxcjSEw5JcCb7BjY3C9HwEzF3GnC2wJfqfvwe4yEqZ6Xi1ympQaevsrt5u95YhboBLMY66AfWTNJnVv",
  "key8": "HcU77nTLmnqyhood1Ujr1pTdCJ5h7yLe34a3hGhKJ5b7nAsdVpHnrf1dzrnWctiA1roPm5pgNbPjCicCBBxGvW6",
  "key9": "4QxkkGFxxBzTLsBxb1J2qYvak2ttu9khcSQKMeod9njb3mk39v3hXfsNM73WFFsDt5jc1px4uEqjHBznnp5XExVD",
  "key10": "4HS9nhRsN5ihNz6enJ4eRygybhVDD9eqEyBvefd542HBwGSxtaoEoCnDe5p8zwhUFvPB8CazhUwBGvph9u7bk99r",
  "key11": "2HVwUPkJh22v1ZtjV7xBDBXMJ2E6v4d6eXFPuUM68crLZ1Pv1Ciruocuhj9Ai3WLDs6bWShZasY2f6tgEhpc9UQg",
  "key12": "5kY3nnNPkJSrtmC4ZScT3Y9LsKrD3wg3SeXR5YZ8Li9nsNUepXMVA7Fdx1NPnkYtADzd6Z3hfJxnqjMthYyGSTtd",
  "key13": "csR13rARxff6Auo7UFCvQgbK9mZPZDSRZQfZi3dbQ4t6JVPjYdX2sMFo8jw4wGWFQqrzPcVM9o9aKjAEp2onKcb",
  "key14": "5zn1V4Kz31QApVoJpAyV5URntBNEiEuVwKeLZSLYbiBJwuMZYsTBvowfnc2v65JtwUtTRitf5Te2gUdwrMJvLAV3",
  "key15": "4w3qZJZRiwqB8QbUtxvwKa4mppnZGcC2k6Vza3aAzcV1zwXVwbmKu6CZqrngtFpaufMN8TmFvU8768U7JNKMYYoD",
  "key16": "5s9cmHhHwQA4ncjpBkzQhytAATfrsBcmyeJ9gJjmHs9z27boTDoWVk1SJQjkL3QBrsgd73sFMUMbJps6jf8gcrtS",
  "key17": "m68yooPpbzE796q1r9ryH4PzKBGDt4Mwy9YqyJ8cFAp14pz5r9z7GDx5dpMp9WL6mVC4S6dEeZfTYwBGRkrNeKp",
  "key18": "2TQoy1kdTgRKe85cdt8CR2uGjR3fYqx7er2sZgV1TvYBVUD2Lns8TTvn5C9CNLa3L2m28SjAPtHwxSNFvYxZ6NiR",
  "key19": "51m66dbbZPh633rcYdreR7GvYBFQBD4z3piasi8KRXUvNERCpPrQT2MDRXvANqiTo4KRNZZBrUztgmJUAT68x3ys",
  "key20": "2AkVcG8wSwn7VHMdU3GwQJugpkXGwDyBDDpu6NFb3XttFy4LPGZ3DMk3N4GQrf8oUjLARwHogjBkRiqtyGLy5AeU",
  "key21": "uetXqUPWzgZhD6Vd7T6it5DUdLbeAKyi8XLQKp6wiqgBiNHksRkDQVPErZCccMNtcTSHMrLzwUTfJJEckKAtErJ",
  "key22": "416GseehVKjJFxXGbqcFsEanbromsQ22GjaTabmXFFB2yDXtzGZ1zSkwh32xH5HM5256KUE63QnTz8ES1JCgABL9",
  "key23": "3sbzqWCbxyoGFh33kznj64L3yhTfhBX7z6sYnw1bMq3UbRyG8vcUWGyk1oX57ZnJc5Mm3TWsXXHHRttKs8i7TUSg",
  "key24": "5rmSkdF8tgXS9EQhhipzb1S3vkfRuu9WTLkowid46MAJd36swsnfVGSnYE9EhRKrHw7ESvAmtUchgQArnEcW6ne9",
  "key25": "5pnJGHzVA6xBZUJPppbuGWKwrqCBzk29FJj6FbZX38BH8ofEKA8h8GgeyGPB8mqRK3hMod3xgdG5rk2woC3gXceY",
  "key26": "SXWhutCRG3aCC1q92aGQp59d4SNdaiQgc4dES4xBXqi9CQwArApfMrLMMRV6a7awg4qon1ZJYfph1Tgx7xukJYX",
  "key27": "oHYKzQ7nYU8wEFEaA2MryLqi2uoWXEedEzBFSEErbTm3cXe6jrrrwTDoae4ikSriQSuMfRyFYTThkiFn2KhVJHG",
  "key28": "NEat7hxCQnHyZd4YHJs1i3Pgr5uSpTb4bpeVZJTNTjk7HCQYoYk8FFSaGx3XFMdZG4GsHAxPmTg6JzoJaSmCC2X",
  "key29": "2dsAB3cGDTuHNBqg7vmJpRv2wd3Ei7pLbSjiW5JzniZEsJRSP5J6TEc2deF29CdZYsdxVvme9kYsaZbkD4WVcWuk",
  "key30": "4da9Xdck8xTmsu9TQko7SNK6sYvLPg7EvyS2u1s5Zxt2Gm7naBUobHtADHePkavtseQbJRShsv1uPJ5N9YhEr7uB",
  "key31": "5Sgpmm99VHRUUVXoNJjGoy34asjvcti3f16dZu537mcn6pftPwV6bjYZ1c2Ez6JRPqbknCGX2oXtMpt7QAdk9MLy",
  "key32": "2fLXGgM2qqn5f2t9UPzXqmDvJoHWpa6QdxRwf6yhyP2CHv59wicjG87wYebnt9a8nuGRjLUNvWzVQPck6CPKdgs9",
  "key33": "VBUo6UcTtPaozrcrHhwEKmdwLa8ptn287BPgrCiGBFughXTj8aRpxwJqqZhpCzUQQkE2S33GoMDN65oQhxv9GYa",
  "key34": "4nTaKm2iDB6ep41YaKJV9QcEzRHPwkswbQWMtA4gaqiZYivKnzWFDQxC6dyEfyZLmnDjo4Vf1HSKqkmMRV1thTJn",
  "key35": "2XXQmhMxfZbBwhiixupGkbXCeXiKHEM9BohKnojSrnkcnZ8Uev3nKgNiXJRBLcGccPJBKZJ1iPTcnuT4FJoFrANy",
  "key36": "2rK2vLqa19zYS7mrZtpVMdZdnZHSjo7EM7Nwj2w1rr6eL3BR5Ds4wUPQFQfwaf19F5Q2gU9QRRUToDgAEyyhwqen",
  "key37": "X7JZAYvUpX1WiNsVMAP49EarphwAhJaXmZ4rEfE9AJFEwiF1wghCZBRD2xgZ3bHSAaeMFBEkDPGk6QvDRqVBqXf",
  "key38": "61vP98YzfmGegkbd7W32zVUGvSaWNW5KeDC9woQUW2CAJgidijg1e84pwNi5eLaCRKk4UDa3tsHxJiQdJXRVBq8M",
  "key39": "4afPJXVamhdd9sTTYrtaSteHdJNjpYGzSmm23HQGUzfk7N4pH92RfoBsjkq8nh4HKf42fVKi5C3UrXyESHFZ7mK5",
  "key40": "45oMq2cSdcviaNwH3qmxezK2m59FHQVeD2AB1sZE55s9WKqZL5K2eH2XdeWxwNzqzd2ddw2KhLcTvZRBsCMLx5rr",
  "key41": "5uZByR3UdcNeqxUjj9dPGzjWBHJz8ArLJXMzMGxRAMevq2Uas7wVLGXfvSUp4j1fCxM5keQztcKka9qCnQikCiMm",
  "key42": "4DUbgE9kMtNbDaaip3rBtnfXntcLrVfySkUVCuhKRCRMitFkP6oF2XEGsUig9s7cojrqSVGMfAM8uoPHuBs9gGB6",
  "key43": "3WUi6v7i7vL74C3qa2Qi4SYZbcHsPBDRw4uiBbqxseczMA9XE4cxRK7LQW5qDridEXVMuPhqXqMJMXD8rsfecoJ8",
  "key44": "5X3QupSBE7JqfrUYFe26SPQ6q4VnQVwrpFQg9z5CpZPXZavkpZ3jaNaLGwJzajZdMVNaLHf55SpdaSA7NsobQDyT"
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
