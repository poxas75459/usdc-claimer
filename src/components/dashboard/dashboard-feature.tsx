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
    "2XJ8yDiWDNYSh6pgMa8g2Jc1WAvnQs9GSYtxhVaA8GS7ZwV9bQq8CW8YX35BYJGCyZAJi1wEd4V6MTtF4hMCJhTq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "N76MuuMNjgQTX24UbuEf8Fi6aBHVYCWBncm6UGi3jfH3XpDb2T2ojTwuEt13HLQircyXr6apXCpCutmSPxiG2S5",
  "key1": "5VKjyDHTD9dHi3pguc6tAm86N1TUWcFnHdwNEeYSBLjVeMhUqRjXYzny2SB1grquSYJMfrarWcQDD4y5Z925CF5J",
  "key2": "5mNFuoVgrtidi42rjSWwWFF5zyrSbBae1HmvM1gHdZfPbeJEs4pUogJKduMnUgfZPHqBnu67TCZcy5nsP8AyFJMV",
  "key3": "4ifL75uK4FKAQdr5U1ij859A3WQagCqn8oK3mpL2J8mjDLRNvrfLCYWFXtkX8yftynVH4Ck218ZC92xwZUWK25QV",
  "key4": "29jb8oJchKpupopkmp3dRy7VB5Cmc386urBV3JUzhQqEr6YWudgmJfZm4fvkTtwxFQchMTwdQAgHeRLs27ueVAwn",
  "key5": "UMygHQQUW9uwyGE8p2NEVjvat2WNg6abmRYwsdpWh3q9JuhdE1r2xAZ7eu8PpUggRW2FmLquensDqrsRhcJs3Ez",
  "key6": "2d79cfdeTwXzSzGjKFKDEmAtx2w9PhMm3FkPSNECn5zv1E9JrW7WTotaiDZVmTbe4mtmsHY795zMqoqAKEBCGMJD",
  "key7": "5Ksuo8PF6vDUo3W3bfsSrAnm4tKXderAxHYg1ZccFt3EQU1W2RubrMQJmKkKydN1sGLD1pELbAs4wfhiduudec6H",
  "key8": "5MB26Fsead4sxzLSotTJ1Csg736sqwxBedLRaMPETgvRp7WtDDyo27CcfzXCpBXJzB9u4phFpd3Cr7egas8XRDmg",
  "key9": "5Gje6tyKJCUQv1CGtKHhxQmtJAKv4L6G6S65JwnmPfrFHCauwqn8WhqfUdsP2cLEYtT5pn7t64gA1zz1UMLMDoGv",
  "key10": "5UNadc8j6q1dWqm8k3QuoNQf8JCkAaTtay2N2Ld6K81s3PfRSLkdDMDn6K5hVSVHtzUebkLSAa9SHHQoupTg8Wff",
  "key11": "MMe9GEArcX1SMDGy1cxcVwb4BGNBhNqcqKokm18x5wxTPWwPTynJ8sa3MdN2TayC94WjxJpAwdrVpBnJ4tQEktj",
  "key12": "4ctbViyfmJXz1A2nnD3KFwYXZe4YirxCJ7crrxMs8iMjd7n2dwdeqA7o6YXQPr6Erwn5aDrNLkQTcDnSGqR3pk57",
  "key13": "3RNYKxnNCJ1VLj5mzUYUkQaZUiA7AugrjstR1E4SmyDiaBjZktE9ztFjaPsFKYEzb8HsfDcaZRDCVwYShWPXysKE",
  "key14": "8wvFKxvSpu7eYZgPJsSEPRZFmEmfkzRyJ4Bi1LvZ5ejcptrgfwE1p99juX8t9zn32v6LuhcgeqDJ4VV9hccAL98",
  "key15": "3xuABunpSo4HPMxJ3QppqXcikNRcybePB1GS8xURndXoPgZQ1anGwvd7ULtuBwZxgduJKUC6po4Mqehy8PRtLUCV",
  "key16": "3w3h9ibA1QPkvytVWJrM7yduV5XPd2iKenKrj137Kd2WngZGYPfFy7paMCniG1gdPvehumaiqHBrA3zYbjtSLUq9",
  "key17": "4e9AGN8RrdqSTo52MkWXqPaSFfrHWNnivLWfTtKVevqCJXzh8EQpS761Wvhxwwb4PhXrbgtwazhAyJpDXBgQdY7K",
  "key18": "2vcCSyZoLpShJ1WpzmFnaE3bMqqGYKefU52khr6cvNjmem4wnzpPYYxJcFh5jyXcZ5YTgGTjyHy4kU2eTzcXrL4S",
  "key19": "4y7wDe8x1qMX59RwTjANbcGHXgtJPbZi2knsMnbMNJBBKQ4K2khkSLx3mqm9N2SbWhDZapRVb5GLQmMUAyXnGdKw",
  "key20": "2yMyJWjjXNnwqSh2wwiSzgYmT6wriBG9pbQExCfv5QnWmhGQK1owb6uaqqREYzcFCXo8JW5Lngmw9rDLwRNynNBG",
  "key21": "tSW63iw9LnTMCjyTVyVxWt1kMWSudpXNQspMeEEF287fV2bhUGZ9hTaeAckmxse4mgVoCiu3zdadwmoe34Zw8Wf",
  "key22": "Liuz5tjDXW9RUenWq1XUSuZjgjdcgXFCPW6tkQjriLusEd5g5a5BApH7C3SnwuUzETdr626WVWPvoMSsPYRt6M6",
  "key23": "41uKgyBCP8pu4Tf5oV3JJywA2SziFRFpg9goMWU8DcshpVUcktsPvXjLDZtY2bT9gh3HzsqpqH9nKdNewn2obXZK",
  "key24": "3ppoM8ZyaRmYxoutzdqWfZu7LfG9oE1EoQ7CZEhM3qf9RnhhkTMu2aWwNENrT4xTSXWGpHtx55mjnh5cnv1kyP2t",
  "key25": "HwU9AL5oaVNc5mLxAqtw4RARQNRgkJk6P4Xu9PMoQUeMRSw1ZUMWCMBbLFsE2CxLakLpXt3UCxtb5pRbFiVdo3X",
  "key26": "XRrgqHta8nepiKP6tYrffN1BF41Lkx4CDkzqB7NrmzB3peoP5uMPgrhfK2QgbtXxJ4qSjCJ4KhySKa6k1jyXTH7",
  "key27": "2ETXrA211Fk4uKczGLupqXfZAj3AUJR3nexsXp9v8SwEPDx5KFBBjGZsF9C3HRNzNxes4QTVBWmpbKXG1SnoPJZ6",
  "key28": "2yLBHxxnK5qKpgqXiJWRhtmguapGqyp4pkz28Rdz42e7QQRLu1jvV1SfXcaZGcT8hU7BnR1PnQEqEutfmXMkR7Uq",
  "key29": "3nqLV1pA8PGrz6nK8KjwyDubreaNJu9ehjVKWQrXW1xbvUeNAE6vhayNzNzPHA3SkV86JWJ4d73KNPZdatyau7mu",
  "key30": "2QezJ5X4CWoCrVwCP7nUyycCpoDJWAEQsTP4RTq43y1GqzYjHMVuo2heRdWsthnLh5aNEDoR8prTo484vMWJuSAP",
  "key31": "4e653Hczx7mpCvBXx8enCMZ5LXn8cdDD1N5aTsFB1FuUECztPbY47mRGuPWCBnuADvHBfgMYzV3vEP47YWdDeXBF",
  "key32": "5nYmtZwxtSPcRbKHt87WgC8WmJnKntFQRNHrzim1ivu9vzNuQv4UpZmhdbJw2M38wYWnoc39Ait9Y23KsEVUJ524",
  "key33": "iuVC1512PYfuz5TGTb1NDgBZnmpMwRzVnTPVFyZqMxQ1T6kpRRgjiEDthMwKg9w1A7RquzDUYDV6wqBd3WrZ3rc",
  "key34": "4tX9cPpDNTsxMdFcxFDUKMfRDv87TfPB7jCuqW257VGh3b4PNPByyBcB5WQbYhqHuJHamuvY2SmTN7WEVfpVwXEJ",
  "key35": "MSH85XDHAuyNFD7M9Fgq95sD7vdF2DaUZBvxQ3Yocjxfp6Wa5TjSrKUuY5ADB6fHy4ghUgVUDMRpgq6YZVoKPDA",
  "key36": "yDh9B8oSxyQNGpqpJNvPfrkrRBkYXYgKyuJMrDkGRLunGZtmdWm9NXXfd86Tw66SN4N3B35y6MEaU8NyA6FWV5U",
  "key37": "58b4jk6J6PaK7nCMzYeTy7VZoomcKVTy6jDkha9d8J1GT3FWqgX4e73sT6T4nRvWcni2MTsqzht7B3ysBuhmRyNq",
  "key38": "3FG9ABhy15QznDuognqejsZqjQsGN7yK8Wj1mh4cQeSPsp3wj6XFk83gidyPcSwy2rhCou9GuwKuZbMTghGbCFed",
  "key39": "GCb4ogesuwZBswXWvLiegEKaGSLW8zKDBHnAG5LwqAHyttxudYdMPXpSZc5tKwsVkmoGua6cZM8nW6bEjSXyhq5",
  "key40": "2eYbV9ye2SdrobqT9ZhwYRDWHqFxwS5uJ9Fjx7tyo6LJFsV3or35U4JJK9AGTdPT7ZmPrHfVkTwk1813jMVfb7X3",
  "key41": "35zbwgpA6mSvjUDhHHh7PmNgqbmYmJE9KB8a3HRhjGRHt71KYizrNGAR6RnCc5bBWNPeJ7XKG45SARmjEz9oyzfR",
  "key42": "2htUmTUVHuDXty1PoQD361aaMGGNHa8C6wPoeDuwbLntPmx3yx9ZBCrcPtvPhVrHDVGhXLmdJZvU4Nj1eh6BmRRr",
  "key43": "3N6wErAzzVLLYvzaKFegdDXrTfKkC4AV2NAQeW35vAbe6WAvhStjhVrRMVv7QKoTFj5Qkzkyx47TfaBaPCoeRWw3",
  "key44": "5VuRfRxneaE4SKGJ5uwFHnk2j6nAqAvBZJy97RgV1RyYHPWS7eDABHAeSkjgdBwbFx8rfW4F6VfJUhzswgELsqwP",
  "key45": "3WXeqz1kAdmF7dSu5BUqTBfbfayHAJhP6dkUfpcL7MPJqBimWSQVRsRjZqJj28FViyBrPnCctFMvn6xgvmtTW2XG"
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
