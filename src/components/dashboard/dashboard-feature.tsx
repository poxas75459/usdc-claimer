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
    "2KWXG7DZaS45smE6iVxVRP3HHRdy6xJA1Y9RuV9cLUMBdukRyMsrPCXLZMGNPGW6Pzyuf42dVvfgSK7T6YcieK75"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nHBYHL2ccF353dKjcVSbAumC8w8GzEP12EhF3sUxRBriosKXXWHuZLYXhGjXUkG6A3DtEFh4d9WqTDCc8jJCyHP",
  "key1": "4tW7d1mJVWUG7abibwSnv4P7dkdsnPhVpdPCU7DTeqotikKJaj3NgpzST6S7qvFMq1VYgrqP8Gofwi1wC47UFhj2",
  "key2": "4WuropLvVxCmoX9nMEpMioqBC6984je58LtLdRcPd3JZmAk4TaLaPXuji7TmNiTDE1BJFezCR3J5cBgR2N9MZhb2",
  "key3": "3Yx33u1yfJN6k6tMTY1gAeqzjMPiDXXYgZ56TT8feosXReSu1RKk8uLDZhKjTaPkdLW5BH41dqbGowAvB6Q2D5Gz",
  "key4": "4NAV4BsfZ2p4UeLUeedLWuJbjbXmERWHquJNvVuhLMB6JpbjuU45Y2dXVg6pWCUTmXKSvUvip5CkSAoWQdj9W1HP",
  "key5": "58UYj4wB54wLWzepgTH9KB5tFCkCHDhyku49so5Bin74paFRPbZwRKVvBWG82M9NVjjhwiBKZwT6S3ZJN942breu",
  "key6": "3UjJiX4KQoj47sPwvJVWi8Y8rxEjd2xZ1iKTuKfuedpiRbDbwd4AYcVkE8L9GJiVAhF9LUYhvkgLrRHmTf9jbxfs",
  "key7": "5r3AAKqkCP5xQp3B5u2nHpbYYg5FPcU5UVTwUyJxN6R6kwXFRje77s9Q9uiG4BrhuHJc1ZqczeuMJi7kBRzwVYJ8",
  "key8": "3VbHHLr7K5DQ46t8rEhwrFZYsRZmvoT6iD3BH9USEwUShUFsZi4S6uhDpRKnrCXNZjyaJfE1z7s99AMe3S2exkT1",
  "key9": "5EBMZsZTPYKm7vGMGMgAYQ3Tjaf2RgErHSfdUyXkLtrBmBGsahP3VvX83Q6Xv4NtKiU4xhxHQ2CUyCjtLE8tbpaY",
  "key10": "4NWtkbEHZ7fRMYQCGNtt7XVKv4gLB2vgTLSYMFYaX973PU81ALcchfZTb5Zck2WdVs1PmHwF9dKx1miihMZKv8JD",
  "key11": "5UsJQw3ga118f6q7TL9Edf1z9eTHQ3VoyFB9JzuGfHfhekHp4yRXm5SQKeHAmqzsqsas2GDfgFFegXyQACbMb5WA",
  "key12": "2oV9dUFjzn1ZJXwzpiKjzeyknX71Q6H8ND8ZrnqP44so8yAKCff7LhsApQCaqu5UEkmcW9R7Mn6SWwDDm92hKhrj",
  "key13": "5qE5HWxbGPnwgFForqWr5uie74sNmXQF1nLuhCgQVzsPgoT7qovcY6e4QDU9n7nutNvcaKw4ksigNgRMcNnikMJo",
  "key14": "4enFZ1zpfmLWjpWS2nkKrdRSTCiVxx27kAmdDpvzHYbL4VCXnzZ1Jx1mgpxuYEvYqBFBGnwgSNoizmxc6kQ4AHAg",
  "key15": "7QVVGAYStvDBQUiUDrMfiiywgtuae3Jf8qaTC4266gJE85Xw5Z1GmUAjaGjbuhvHU7zjGaCJJtDcEfFDXsvkq22",
  "key16": "5j6tecqATHqqSgWgrKxqP7Y5BeopSA9V7m8LTAL2H88y2FSP9cxMPfoum5zKWvMZBtqa8UNLvJd6ppy3iShVLMHN",
  "key17": "9sKaPGofwy3Sp1vyj8L4XBwG5vYrkoSNC6cDhHWXwNWNpWWZa4KFQakd3WUYY2tw9GCZW7iHSXpFvhotyNHm9PF",
  "key18": "5VQYGtwZemHUkXpp5sFVHKE12JkJP8L6W25HJSoNYMeLtS7eVhzLKXeYESXz5mewuxC8fA1ZzjQ99hZM5pgTPzC5",
  "key19": "4NCJH4bSrAdMGcvHiEngdeLoGkSzs9MiV4hB9ZacCGhAUM83KjNx1aaUR6pTFfdf5NEd43uSXgNXZGoJd4amhLzK",
  "key20": "5Ti4GSNMiLmeNqoTvueWn23sG16S63uJrBFiCTJEC57vS4E6PT2xi5kocF6z7TWpRVWVUcM2qggoJUuRgnETgaCd",
  "key21": "3GgAV9ctR5aPzHYgkZUjEp2mkFju2S6Go6oPWXyWf5bBMqAd3bUBMcxz9wKztc4hmB8KF5PZRjgWscBtkxtz4rML",
  "key22": "4F2TVMrY8HTgg6Q7Fe7M4dd4PvkysXH4Sg76cAbL7uGLUi3oqH4cuSLAEyBQbVwfwRjYy9rWhEGSHqoXnGEMjRR7",
  "key23": "6sK3sNZAJuJKMDdehsQgRDRF5xqMd3gX2tNa6YqVqb4aWog3wK3amAfQ7QGVt16JdbFoCYGM9aq3rsWGz5dJ3or",
  "key24": "9hLyVL5zP9A67PY9D7Z3sTitKkmCg6yNDagsFNTpRHW1hTaopE3U9WwgEUW16JsEQHJP7Nw1ozDWR82iqLDv3u3",
  "key25": "3XZWj6wWquEgzgB9NDJ1vfyQdS7Hrm9qz9AKaXpXtA96NyiRnBEZXrrtgYJfeeLGQtLKqCSnjK98VSPfQaQvyX75",
  "key26": "58SB6PCFSTPCs9JQrbAaMN1ka4kuzmVGiMyCE5G7revSLbZMbHRt74QLJdhfHeDhVbzyjVtsfsWafWLH97sR29db",
  "key27": "5gtKsuCsLXwjNoTFYkqvHFBWivxysxtgY2455NBiDwadWyWeKMu37ByBKFeQxSHxdNJfnsQdsb71djqnrktd9Kaw",
  "key28": "3s43ARzppBDXAbVN4nnLaiXTTbFYAgtroRRKT6efKxvctBfDaxfLzu3z3RKLCxd1rMEJBkYt2xY54DWFzb61wn5p",
  "key29": "2Fa7PULAieHo4KM6vGff1PH54bZstwdfmmLFsefEZnQUraz9oZvvQAFNY7TadYJGyNP1w5rPYYRv83xS1ZBRWWMX",
  "key30": "4XZ1Quj54VW5m1JstASqcmJCJxbfiKGUpemRULWqAwYpZfiDHmknfFQ2ec286rNb23UZjapb5jqK8Z3MGdFCtv46",
  "key31": "2mhKStfdDW3did2TMAyFj7ynpn6taWEhqsaTeYFp9G3d6y2B7Rb1UPXxbPo8EngTeexx4KyB55fgeo9JrK7YqH8y",
  "key32": "2PxESnNjekr77pLBWGWDntr8WLjnYeR5tdsrxAMZX4PwEi9farzx3ZPbLm3MC4MpwsvneBpm3QjkANnAcehGXYej",
  "key33": "5K17Nxo7FRcH6kPhLCp9hAsEjn8CqXxRG66zbBQoh8hzvQSpMLoCbKZtJ5GuB2rghhHdXYQgRGBcZTHvJXsYN3TU",
  "key34": "438NkCxHTsot4TTHWsthJDtUNh5f4v1EWGBv4dvzXkAJXHwkcrgvR7WXTWt4tJctik6QnFg2XMNfognmo4os9HaU",
  "key35": "wV53v76w3qAEqMaezZ1tCz22R1yqNn4kmHKzsazCV6F44mEdsn7xedFxBbMz7KvaXMMQUeaijaCkkREzzJeEWQ1",
  "key36": "2Q5XMhwBuyF1b1UTa3i5Y5n7DPVtbGnuG4h8YT8PDd2xcKXbbUdNHPXnBkMamT4LP6B7urSkpcs9iWXydYX76K3p",
  "key37": "33Qk7errjD9FKAvbV9hqGp6mpS5RebH21x67jcDXgPHjER59wLZJuG3ECaHzkKtAmUVjPguwivjFP93Nz3kmmW8F",
  "key38": "2kCtNGP5RqxmAbTB5gJKj7j28mcnJw9EX8tBtyFZ3apBy4aTN8y778Pgn6r6xBNYarnRQtCuXuyF5yCKu9qvhM8F",
  "key39": "2ajzx2xXM32TbQeDfufeUevPKdujMvWvSj4Mgpk3TMhvL7ptbyJtm1Y2scgRPf2PPLYVodLtsGXYVRPGyTvur5rP",
  "key40": "5k1WCF9mvvkSb2VU1vN3b8QAJh34jRXQFosnrg7Thf6Y7uDiUwFacJsLgCVSNCkjQK2kpFyc9G88SD5bYUW9tYhp",
  "key41": "4i3phMXy4BD2VJMfwSoAYr8ntwHSrWnV1HZdNCHZcf116i56A7ZHzMDxhGQPENdGgZpVHzXq5W3FGD2DBojP5mPv",
  "key42": "3PYfLUkyUJVpdhsAmGhUXQyvmP77xfuhQtAMQHfxR5zGZBTwKKzpRMbFVm8tpr3HGMktNuKCExWjdsU5FoeBgq7f",
  "key43": "4UQ34z9TLtoXZKNVTMJMKscRNJ4TM2WnrY2YaV3pGJhotAj8dPZRYxz2P5brbsx52j5ZdzZS3DXVrZSqrjCbX9ZL",
  "key44": "5KoNzbUNKdweds1TNqE5r6S4NC6V3m2UeRi7VQ362bVgh5qgi5TTtxw51nC5gxKSGAwcMELQiLt8hvdnsdHoSkjB",
  "key45": "4T4FH4PMxQuEfLEvTJweqT5mUyH3LUigXV1a6i6ryRJ95Eugbc2f6Vs5rR6kUuASdgHvBnmgcMHTvi2qLRSB7z99",
  "key46": "mXpPC2hKaR3Lx3guXNdfHLkW3Z4pketex248ESBGSeD9XnMgSikTgsLiDMTQPCCBVQzrXpsFY9UvFy1CPvsnZWU",
  "key47": "3Ku6KkKQ4zMsB9ap1GHiJhKCMn5LTJphNrzywwkyVA9VCsUPxobEkQ31UVAFXVqHZuWYXj7jq1XovsBCCkf4ypkA",
  "key48": "vYkrNc4h7nwr65YhhzcPRZJZKYGfNNdTiStRK1Z78E5Bjwry1r66KZ6dANkj69hfci1p9XxzCYrrxHDGjtk7zsw"
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
