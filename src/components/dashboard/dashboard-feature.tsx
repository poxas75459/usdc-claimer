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
    "2tbwaAMqZFsXMNbEYDWqZxfTZXpJnKRpptwf9eVYKe9hkHhz8TgcSdC8YZyMeS4a2ghWAAFbEC38rgeLw1gPwVp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UyoLF5o3ND4bvYjBupmwgpFWj9ftVfzLH3EwBd2HM2kNHWrKMGncLFm675SY3zSTM8z8K3QVV5kZ9XcoxpBFguM",
  "key1": "5TSXTNxBwfeLGyKxZn5kR3uewCnPjoP3gkjv8b5qeMGzBDtK6Vkie3QY1iMK17jUz34dHqLiLxrPw49tsm796n9C",
  "key2": "36MqnGKLdN6xYffaJm23f5YRukLCWNdT4mj4mEQCcf8ozNJAp3EcWStrrgfvwjvcuNxQLLBYXw9VwnMhmgTEqJMU",
  "key3": "zhmgi6RoAiFQvejrfS62UaY2NarYKrMUDYbjofSPhP54hi9TYiiiYNMf65hYqg7bfHaxYcLVDHuDQLUVeJswAfs",
  "key4": "4w4Bu2G3Zo2pYSPoYcLLsW58n12CZbxm6GJYcXCsBpfKJs11ujkRD1VYo929bToUX33BioLYgypjFgDRBs2SDTNv",
  "key5": "2GTiWZSm9D8BvbqhRsEbBTbyqLtKqUwJFjmbiMaHCeHcFtuFgE3XCewqdrRS79YPD5oa5aPREKiVCMC5xJ6u2mQJ",
  "key6": "4WhXa1HM9UmPh3tWRYkMTJ42iWjTmGGeb1qr5bJJ6MBnmDyNp39boEAy8fmRaHq3mypN1iA8N7ARXTkFAVHbHcU8",
  "key7": "4rssVnEnB5yYwjLrbkTZomjzx5KwMSRXQRkxusHH44seZyLDVzGZpZJEcsCH57cuDGHhGAnmrVbAWk3sDbauGvLi",
  "key8": "5uZ8WrwGq8Y5hTM6GotsdVwaGewjTbP6F3jYHaxucy6PcL7NwwyxwVU3jeA6VAGJW2L3MKPB6NdA6jUeffqYwU8u",
  "key9": "F7f3gDKsfqJdHT17vYHqq6q5xP3kL4bz7wky387uq3tjXPdpKjehnEKcjKcASdUC9bUQsyPjEAKnfDwFqjMTsMU",
  "key10": "4hAHswWKWk9T3iVs7ctUttNbPMZpPq92myjrcGoUyL4vAtPjSdNjcqw2rDKeZXXSgexJkVGs7G7ixgV8E1MNHs9i",
  "key11": "5eMGeVkojeyuFGadyMR6nTo4PmcAksdaVCicAYqhsxHgr9ccE9uZkH5pJWjBm7qUTik58L8qWKzrrUrwqm8AMdUJ",
  "key12": "3gS5rnSFvkNiXjco2HjDeeee1fEZpeK7RcEkDiVJEXqp2zod78t7aTtqPQWhoe4RvXmQLUR6Fyjoiz7QVdjBKhAf",
  "key13": "5e3avsMgBK5X3xnQjREt9mYL2Sbw1SigCBPebBX9VY5Qc4E4oT3fyxC6VSTfBP19Gfo5HSy7TNW8ZcmuBhALagyM",
  "key14": "4YTtcvdMHxqxYc2SYE1KxDDG9z3Lm67ozB6NRY98qNfoVKybfvfbSkKNoFEtFxxbtacMBkRxruXhBG2AVtJWnJJ3",
  "key15": "57hohq4nSXiA3pKFWmv7uuhNZ7ZzcH4CXGuPnUofiZr9kdn5rGW8soj8ii8VLm93NVu9DKksG3Kz66WUTvicfZ7y",
  "key16": "5zNzXrkP3ksbCDxUu2kuAb8a7sBUxgAG5dLpaxrVQnkmjTDnW59xFtNL2FFEFMY233VJx7pQKf55BvfWPB7LDkjs",
  "key17": "62jwrEyiQBVoqAgn6hrFFjLz5es1vKA3eGybeuB1PcY6UR6hy6eoHyhKj97HRC1EfiEbxxB3Gd72UGNHVTdryXuC",
  "key18": "2DYJxyoNKLgEBrQT6iZTtT9Vu3YrevtgdpvRAiojAxii4tayPh9aHAD23KWLvCFcZfCAAoyrESqpCeAZT5xfim6P",
  "key19": "24gzvVBKnYEk9J6FXeQh4r7npLgrbZ6TjeCmgGz5mm6ZyZ6G7VZbkYkvkpY8g5yN1gFrcSMetHXAzkxF4NWc5N3q",
  "key20": "6yeMbsLWqignaDwnJJ5YBptEsb119rR772xY4jRc8kZGTVT5KrGgAEtsMUmftU2nDBLp64CD5dUa37m21QiWfyw",
  "key21": "4ffDPh2U6kkbsPm4iHHMVBZ7bVJnLLkGkcEp8BngPmutdeNZAxCBBA67FxHW8otRFsPb7CVwFAYDTzNdLVVuwuuJ",
  "key22": "5TYpxAGKLEgQHCL8iGVPDEJgH6oMvpicsCZvPc4vt8HCXAcG8jgoM4fzkCQKWvLSktfiHcJKc4yX6HKx1xVmsdG7",
  "key23": "5uLgL7W4PDZqQykhe8JZJTV81d4Wmk32Rm5v1PsitL9sfNGwuz9hsr4M1GsAtTfd5dXqfFxRWu7jtLUUpKUmkLSn",
  "key24": "5qZv81jtmkU8wxWF9LoVzCVdBC4bLPULApGq54vBSAHjRrmV7DPqiq55iHtCjqBi9X9Nf3GnPP8VxZ5PLNiWHxGX",
  "key25": "2Gd95UaWAdJF76zmipnq64iSA1QdssMjyiwZc7qvD3grahrMXqPiYuTJbRK3JyM61VpdMS6hdgeE4DbsvC9bEJwj",
  "key26": "2JxhktykojZ4GmRP14rkKrLtJefAkDQeQW8MQfE1EGhxBZmJMSVQmtZHD1njoeQM543pyYJw3XwcuYsvJHZNuVSn",
  "key27": "5AVkDwCsYGpPynrBvNK7HpfCUWeF81WpgkEANphxumkbCeLkxviuqMzHr547rvqyqExaq29D4AbbkKmx3Ebx6DRM",
  "key28": "aq7UeaCwWMeUuQRUda5tF6sngZZVXW3kAb9QesLt5deYmuEMcKktC97YHYHi9UXvrWjivchWAR8nkJRgg7zqs4W",
  "key29": "64Cfi2YrWRJvCJUyPJMnYN8HtZ4hGL9j7Xy6gtVdHB5HzhMDbuR1WxqH978t8JjG6tRLjJZWJaUj2wvTwCjQYk9s",
  "key30": "3QoNvtJ9C6WSYNPJGKruWrKqeF5B3ZQFESCy5ZWjjVT5VBLpQQMU4eofWBs367rRKi7Ffsm1vaaWrbJ1fdd1TXqS",
  "key31": "4qEyUUjfdpo2S7K4LvC6fmpdUuiydFZYKZaPvHKo1cPb8b2r6tgSFFAgnzHJVV2urNPVXp4cEuHZRxCXCs1mn4F9",
  "key32": "5666pxY2G9AKEpkRE4y1DRt71yBiciiWKuqnEejWTRzYN6KR9Q6AA1AnNWPYqk3sAvunRB4MnKLaocumte6TaUxj",
  "key33": "3BPKiMhJqtye96WiMjA3fyquzS53gm8Fnz5ea2Bm6aFN9e8mcjWZVjgf8xAL9ktRPzHskGtckkMxVoKAgt79wWrz",
  "key34": "3qH4SC3SQRRPCpsmsYxrdGgb8ZGUHfaVFK1rbecgyFaZk4wc2enxn7CsiKkYPbSc5tyu9g14PD8tnrBFCTZWeGvw",
  "key35": "5HoLrecuQ1uMM8wk9otWJ3aom4JZjNFHKynmL1V6ZZqw3fpNwpdffFCgTwCb7sBUfxCBR4AaMg4YSG9VnVeKh5Jc",
  "key36": "3AKXwX68WsVytNHaopbkAiMSLK4rFR19jbCBjLLDrFEYbgdhZuPN1JEi1WfTpWhHgQXakqjEdoa9Jmd5eeVN7pa5",
  "key37": "ksPkxTvZEQYHLTQWJEbgw2TuRxfmz72Me5eaLv9peKF4oon1t2MLmUuCsnEhNDCZZmXQLxG8AfZv9WjMo7iPcb8",
  "key38": "4J5H7jLstky6hV6HcH49iDWvH2GU4jcNoeDPZUe8aNiHYSB1LdAAgEFP3784TWnrpAWdZGq4bAxa3dh9RbAQR3A8",
  "key39": "41ZmmgKo1qfa3GvFYcvUpDks7zrKA9AWba7BLwaoTmaWLoHrhZzLsgAn85srcbbVPdMPXBoRa3FTdzx5XYaNs9hB",
  "key40": "3eunhoR7xh3EejivoyZqUVro2vtiPmFdhB5R6RX1Dxt3Kqg8auCEzx1GJw44LviLpKSSy3VNGDipYX6HkEkA9h21",
  "key41": "2XS9B9wHVXafpBhbVFEosx3NeRM7A622xeBX53sX6y7q9EwtTvjq8j1fPFRYDUh52nw6YJ1QY414HGTXJW7ZB5iZ",
  "key42": "5unm8NEKZe6duneWfiEExGm4BSmEjupahLAftiJTs5CjBHXCUW5sJB8Dqg2LNzovda9E1qZWUbvtAyHBWu8N4Kn8"
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
