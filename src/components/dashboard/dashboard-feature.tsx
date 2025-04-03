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
    "4wB94abdLDKZRJA9tRKhWh7oab7ZTRcsCADrA66k6pQ193CAL3zkk51bsVadg6BkcUHRMMRJNUeKDDjXnM55gZF7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21AaWXDw1tqaDjcHub93C8qFohgVK947TJDbfHpasSPP16xwyg4xqeQdsotbjEnVseouQKxup2xAbnKrer7FYee2",
  "key1": "2LhRei19v4AGYq9TCiot7ULwbjJWkv8iHHqknraQPuLZpymsqkLughqxqUn4hCE8S5UmNtGPYTDhfvCSFwAtaPzo",
  "key2": "veJDLysJU9q849bWkcTZ547UfDt3gzZ4AwwKeVdw1E26fjpCApvJ89NgxsdrudtaKeY5hnWQMN6T7hhSMF7Kym7",
  "key3": "3tz1Zw1i6AwCMHV5pLN99G2tg9u3JvqxAQhALH3eCeufaLxnWEbMzvFvqzviise3ZXPbQCcWQ7ceNeDAcfM3i28k",
  "key4": "3qgWtSzsCmPHFHxRbZ1HWdT7Hrqknbzv1hj88tUdjKEuLAxmFzRGbZ9enMUeSMZqWMdBwyGjg2y22U13gsk4ngMd",
  "key5": "639tJFpnQgeFfrmTUy2VQtxETpfJSM5SroGz7tDARv8ewQyPTcvC7ZRFRPA3UtpfyTTEBJesL6uEBcc44w4rX6gE",
  "key6": "4C4oSGxTfYk6BhdkdEXCdUMtDsLRVbwdsVUTHSRmUrPAzG25pRnhdJoWqw225m65NNuzHbNgQkA8grcGcNekhdc4",
  "key7": "2kR5ubYnFgjPZgfPtoGaNvcTdB6PFSTu2APNNPAzyR1RMC5sKJvVYZu7dgQynKVq7R2C3sk6fYSQjxMqHreSgKPq",
  "key8": "3AL1kV7ydCt5SZvzAXqrF42U6Nu3NAa61h8gxXhB92dLezMwPsYp1A5PzKgQE6ESktkjLmGHsRGJFnkna4Gv3EDh",
  "key9": "24i3Xef9Nrjmtn5waLtjXE4HBqA1Mict5Mn3jjhPBtHxWaSYgPssrWfB2yf9MnQpUhU28juBFgxbTtRcnQfRs1sq",
  "key10": "2AqcD2NiEF96b7nduuC3wvKwSfpdTEgV4WV9h7ov5ehTsUMgfx1DtMdqVAr3aD1hqpVhZ1zhvttHLahcHRwamF4o",
  "key11": "4oRxcpaijoQdSkQF5q7ty9wgRp16mGcCVh9LGRYAgZTR8S6ccg4VqtQbEh7s7SYkESpi9qE8UgAiS8H8eUnUYkhi",
  "key12": "52aug8Bxwny9HjMNk5ncP9DwKd7AYweTkPgVLekcqmDEJAPzkpCELfPzWoXvqHJUy5ZZAXJV4qDvu45uPtg1JDmX",
  "key13": "xbV4sToi6dD492mLtdumWY1LwfJ99vggYBbhEXczaCqFdc3GTXhfNnNADSjnVQW7LaYsWrRzfVEaa2HnLuT3p3D",
  "key14": "4g9yhV4F6y3qkJiPxuoxaMU4RNtmwjaqziedvEdH4EHY45yB1sZtDmMgGVEYhDe6X7LtETFMGPV5jGDJ1h64zmtN",
  "key15": "3TbtqWfxV7VoJf8LRq4TSeSGuS6dFCiWpeUcL4Emvoqttc6wifyLcRj6YBbiPmy3JPzLe7LeVsZhFSKDh8dpWjc5",
  "key16": "5v2SYYbVGLLmNuNocB7fLpXuUhnpTwjxrDB1tSQ1UyXa76itPXAZbW45tFh7oyKoyprQg8TyF89CdHPZDeHa6uHg",
  "key17": "ePSJLS9jir5HAFEHjkLjHM8qnARDy5dTBK73Nw95BuTHaSN8TsTdKeKfQKTEDuC8rd4WZXdZUtgcbFsLdL6izGy",
  "key18": "5HminMxtrMpK3TQ7PyxcfuGrwJ4h22Q92bDWRmn4WtqgNGkspW337uRPd9kFBygy19M7AFMNSzvUtu9JNAC1KTB8",
  "key19": "5EJCS48fcgMUN8SCBeQkMu5EssNEsApJLdFVbsVKTfHQ1RjYSb8J7QxxkLKGjyG4onpEP4drpJVg4Xpzuf54yKqc",
  "key20": "9EBgnKm3ZigKQsNcaasVGtW3fPtYLT1C1GEfLtfLQJjKTaM6DTj34qqWpUkQakd1oGeoUMrw8p4DrSakdgdRZcf",
  "key21": "57VknKWn38a8x1uMt6AC79RAfB3WzGBWnSWjXW4zXH9ayJTq7izqKpkXKGEXKpcnhnnjsKvaeiwPvVkyAwgoL2nA",
  "key22": "27ykEoFjgvPj1KwNie3wBgWqMZyqdskreYHQi1q7CSv5t1fwaP31XzmLjzoT3zZx5XrW9k9xfZHsGhgTDFQ2wunV",
  "key23": "2s4emt32LU5imPyGinUZ8eu2cCvdRjkUtUZEP7eEpRK2PmmtzkThhwgpmyJEiST7XBdK6i1tG4vdP111mDheLosN",
  "key24": "bcFg9iSeNjrmhiV6LtpthHfYwez5R7baRGCmciUcjBPhoq91jJ5GCr6W2MwefozExsVx8u8mWzc1eRSBbU4QjWK",
  "key25": "3MVFrNUrrXHKWYiBnSu5NUdCYSn7Bh5P28jCf49CvGsPig8ipjfxxee94J8pyNPsnK9jVYV9HyCkbkUyYCjddrmA",
  "key26": "2sSHESmbxWmhU8zs7N2oRGsWuSBp6TpE5NfneuktcPfUk9bWS5DL7PbqC23wSwc389tznRW2i4MRKwMbeEoTEgW2",
  "key27": "2UTdYaetDsPtNFicg9Aex4x32t6t2tRrfQ3YXHzB3AvxHU22vJaYvgAkQTT8wFyA1zsnAkDqS663GxeY5YgmSFLG",
  "key28": "2X3ZtCMjBjwpyvFBs2g9i5Rjy1A7MFAULN2wg7PbVb3f6wSc9zNwooScYn1jSdppiB546ZqUTdqAStb7431DdN4H",
  "key29": "5Er1u1yUQDG1AW8EAfLPWnrTr4seyuzdvn3qru7S11dvJ5xfQx7bNZjeFKQyGQHVYa6UqvAjiY3zcsXPNeSBAxkM",
  "key30": "35qSaN54pdh46ZndyvmTAgxtjuSxRQxFbFxnZGpdRXKfbaWAvmCKrmX2ttiFJKdJ68XUfXBRfYCkRcG9JTjAJ8GH",
  "key31": "2oym7wxD425CEM7oc1a2HmUvneYHvRKyd8kW9GgjifsV1ZDCeft1yC1uQ1pGF5PkTypX81oUNAd7G6hSpk29ApSt",
  "key32": "2oSK8T5xi64Pz7WbbWyJ4F7Do9BqTWc86chc72uS3ARS7eJuoz6Fi7Wt8Fp5TKNZWQkhpyFz7MBFvabe6K5x51UR",
  "key33": "7eHWLGrh73RnvjM6rAdd7yzJMiqy9pZny5N9Cnm8UdXXf1C5XKjpCKdq6hT2CVYzn62TEyKsJSUpVR9ZHP5yQro",
  "key34": "2e6gVUJsZktZ3xXkTtxeJ9kD3bM4eqBX9M12SbjHGT4oREDg4DBDQUaQCwW1yJyuQDGHX8tga5T5QaegkgA1kjLR",
  "key35": "21929U3jFYpUQGACSR5VLatHpbC38tukc8o2oJLRFq21U2KJny8DCnPDH5XHmnpXCyTHdDXsuidj6YNLERdZCLp8",
  "key36": "3BCUt3ZT4Nkcm5LpoMaqrr6u8QJKCMbGacAFc1ggDw8YN3rAjaGryLwWmf1jsnjUjcL7E61GYuKmsuB5Z1y92xR5",
  "key37": "2iB8hT2GgGDv1MjAp5BCQKacs1dcEJzjyhto4G6UghynwnAMXotCYajDvpJ52up8q6T37JSB6uyYEgJVR4tEJMMt",
  "key38": "48WQXsM2YwbUPDCLh8ztEyxvzRcCqW7j9yH3tKzv6pSuBL1ogJfmTZmzdNsxBWeSKXqkC39jQFezN787LMC7WPFc",
  "key39": "5dexqYMnPeKJGfzg3LKrwDo6JFePtcCc2F23cW4HKPMwB2SgRCg6yo5pNvbpe8fSdEXgtiQg9vkevSfh3B36fYJK",
  "key40": "4bq3YehU2pYJ9kcKcNGwgU9RtnWYVYHoupJiynQxdbL8XbJ5p3WnELFBPGqH2mQm2yq5YbsvEoLBDN9DfMSfAyE5",
  "key41": "mgDG1FZc1caLAwUEkxmuKq2fLnXqJd5rysKpYQjYTbWjLD5NnJLHw4yPqV84XoSSwLSC9oZHdzzz88L3rYzTXSX",
  "key42": "2ASx4qoAsHScWMQiXLJjg616hXvigyZvubKizvr83zkBWRRNHgfKGXan6BS6YbxqAUNkBV8ABbWtGCBHAfuDVfUJ",
  "key43": "2MjiShRwNQsfcC9XHG6QSN1YPGsQw7n7WRyCyfbashZeGNn8FSngmjAEGbPCRxEuZD3cN7hoxbsRrt3FLYtL49uS",
  "key44": "W3tou3HZycSS4zDfZEM8gao6jgik53wb4ugbWrXUCDgHK4cASZtNWsskVk6WNY3DScsX7aiKjV5KkeEK7gokemr",
  "key45": "49zckZNV8dFyEx5ww7WLRUVr8M3tTmAecsRPauoGZiHYCc2RTymtk3sfPa6P1byP5U71BWR4XhcK7vrcULgxftsq",
  "key46": "3AeDw3pz763C3ouqpUBRt9VAJoAmNytP1LDwNKKMfd4UJBrRcwbp3tGWH8VE8gnrJCwMKvSeQqVYsc6hmM17gPg8"
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
