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
    "29dHsGsckoiV5gceTfQzAUMw1fyhSLj2Tqx9E11dQjNMnpzFqZftRFSiVeGAXkvLo5UGAhVXX87n5wsBLgo2Zj29"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26vuXVR4YSTKHSbpoZECetbTUvi2pbAcLj5oNFoWTEhneCP2qGySWJNM1SKsSf37zAdFHcatyciAV7vnGu2LAzwm",
  "key1": "23k7fEwayqDBeJy3RRUkBmNibhw48cBxhKX1HSjHkuxcy4TYXDkJDucc2xEWR4D4YTK6TC9QvfSJwjxgPriievJb",
  "key2": "21B4woXEL8zspG3igZL8UTcb5icJ7fFe4n6Nx9WPhx8cZJ5BaFcuVHzuhgsAg28VG8LwqGgB4cjt4SXjDn3EyPGh",
  "key3": "5YkGtP8TToWJV45zSKkcUDBLhtFJGvZpheP6Ctweba8pC31jL8GU8rMqtpQWpGRiYbhmds8rC3EPTjJ7LCFJYym8",
  "key4": "ijMW6WQ39m5UMaR1GDJe95gzJkjseKCgYhWRtva1U1jz2ZPeuZwKg6mo8m3vrPsGkWP3FnjsPhSWZYMLW35Tud6",
  "key5": "3JsXceeG4GWexDQjLnqd6r1CLG4inTVcC8zkoZCB5RYS24DcZTFcShEzcg2hf8qcGnGqfdb7tBpEhZ7TRhqWN4k5",
  "key6": "37DLuhMwEZMJAqxSW2zEfGYCnoH2QfwVgcFPxgqfZCcnc1nb197bd7Crwzkdo8AwebdH1CTthvAkHgYcGwkJKvod",
  "key7": "3ybpWeSKakDjBpCuFseUp7nau43MJbFXKUMtaVvemi7WyRAwydFRyAtyUVE4fikM7rU4L99iFwVQcTyr7k2PKwCC",
  "key8": "RGA6wAErs2cisTmDLnLMFFzwCcRxh8uGWqwaN9aK8KAvZuchMW7uBxBp9NTCoeLaLkcygDfAfnpGYyvYLX2sksu",
  "key9": "2WB34GgmMqskNpdFfg6Ctyp3ZVRjfbDLdRbTh6zSFWLZgqF9mtjzSpMadvbmwHrdBr8YYuSbL2sVg2rT6b5hjva8",
  "key10": "2sNtAGeWJh2Cka5imwGZDwZPBA74R3UoReeLTt7KYxKFVNo7Qt5SuMUD3DtKk8TfjursPnvMEJy6GscJVmKMZm9E",
  "key11": "2bZ1QQjW5srSWgHbvoV8tDvbyZTvuNxr6wixNSNh4TKMN4Vfjw3qVZ6d4W3ayxjDmWGppAt9P5YtLqp5YXoceTNC",
  "key12": "5wDkA77MdEXh4fCKqxqqHiv7WEiuxbxf7GG8UJbDufYNz7n8QiJ5qcxfu9Ke3EpTotSpUgGfVoiwEt8Pc3tRoqtF",
  "key13": "sCUBgQNgfBgZjgDfrba6qssnJfDNijZ43fd1zitrv9Vn5rHrPcz5ZkjXvp2xAMjCvs3JtTvCpWEj3LemdU3XTgA",
  "key14": "3GRrFFZh7uEEse4V1phMkshtNDsJ7t5Xb2j4sNV8mfxGUTFv4f9SND1mV3dtJxYaJNiDgFEbYXGZmGdYdNxS1SWZ",
  "key15": "KYjz4Ujo4NauDzxRkE72Rd5PFKZhV21NQXgJ5xpkPUXwb9m5x5sCvnQMTSfrqYdo1tB8i2L6DmVa7bUn9P2tqg7",
  "key16": "2JmBVfaR8LDSo9AyxvYKX3L4NQkEFkpVVEgRNMuSDcy97okmjWkQqVQuxxFW7irEG9fWf77rAc3CKSdZn5LwS8fH",
  "key17": "2KhMsX9oMvvj3NS5UTLf5s5hTracKAhLxtFNW8qvzZBLaVcbJbp29dSQezaSJ7eV4aKCLTWWdZ8e9MC3cWi8KN9y",
  "key18": "24jcnM4jXKsvnvva8AD7k4BGSTaA5gUGxDpv4BZ8JJP6VWHmRoUH19W7orrUyNwF8PKBMuu5G51M7Ackohz3mvac",
  "key19": "564KwCFJb9eHBs9wHQ36pY3BPY5sQX3AShpjpXdgeKFFwLssSQTV5zeUDUa1idcJ2ZWfHsbBaUAVGqXWdyghNPB9",
  "key20": "2dUu4YsYFvaAFe3ubYQaaahMarVwYcQaxqmyBnviaN692NpnJnAV6H7A7UqM9SbdMiWkXAJ1Yt7HoozZ566iyPwQ",
  "key21": "2jnGKZSag8Jg4X9RVqStxjSf1HFLURVG8WtxFnMgF784XyMKAJDyqfymfmLvRjpNzMeNxekXctBjEy65v1Ubnyiz",
  "key22": "4t8xToQxKiUoL8oLTVKMPu112JA266B7Td9gH6pjmFF7qiwpoBLw4wDxrjj5W1jBVydUJ6q3XsoAGZo9AcCE4Br4",
  "key23": "xkz456mnMUVQ9yia2fbm7cLXYj7ZB1nPtJY1WofatQRJtvwrj1Q7N6oahq4o3eKLRL6ypi3LCutbaCXqKZqwWoF",
  "key24": "stjgxq3d1Ga8vfYDkUVHaw7yu4v1hjXn6jWmVEqMyk2qz15DB1dzgwcHu3FK5VCPzBU9RMvnpGX5kEnyRMgfyfG",
  "key25": "4kuenc1czrRzN3YyatiieStxbZhX1kDnVSTs5g4okpACAX7VWbFsKRm4WPR4jvDVVDVBWrs8Debk1ZRF4YCLWfzS",
  "key26": "4ffGTuCPZznc3uNeC2FrxLiqXyddpbuwKZcJT5dDB8sFo6KF3KcZ2XBin8DR2ZGEMnCnCrKA88RLH14SGviJSUtQ",
  "key27": "4NmquwX2is2LPHQXPe7Xm5HbJ7BarqjJ6mxt6KnqD4LcAeCPxTfazQhaDrSjwWXftS5tMhCRRegjMkwewPKQxBXT",
  "key28": "5KCk8BqTWHSUgjDgyZ3C1q8KQ9Yj2Qn2S4Ew6F2gE75pVubZYb97k2mPqQd4bfympUwkEAGLJm7YSk572jNX6xpN",
  "key29": "5BYySLms3bh81NvKCBwbdtSdDomNpHqecVUPKKsZTfTXRUyD19ec8mU1mrGDp93TpsJQQFhyMV3VrEPMz69XhPEC",
  "key30": "665HkNfD6NgsPfdexeqSv4T5hYLJHMweoBJyBb8vKrYmvz2LsN3LMo7LDi4jEvFbhhU7fj7LKhbhsMyHnGvHrbag",
  "key31": "38dBJvGzqTYtqeHxEXxmtGQY1TpePRfj8wQMAX2DndtMpZ6nfFQT1a2uci5XWk2b252A7oYKUkDoaJ7fMacBpWjM",
  "key32": "5gZKFyjjSPWK5maUkaJ9iCiCeSkvVTaoweKwy7mhi3fKzAN6VYgEM2z5Y9f4j9HkyasQQos2RbYAn26PYFZgKpwS",
  "key33": "65i3PG4iuvtzqNuCXFfGfTxscnGYZydEnDGrAWJ27nFHXeHEtEkoHLYfyxTVd2oEdthzRdfWjamECr15eBVZjMWp",
  "key34": "jxqxw8YJcMpEmsYv5CFHVZv3LnJWqn4n2yjdPtpHPuzT1AzzLbuUdv3eZwrHNp2pPbeVicNBmU66haeAHLgn3AE",
  "key35": "4mBQXPUYayU6XsMjgh25jMmpYvPt6NPc35kFnVp6V43aNbpGB7214c8UCg4NPEqauP7NW5LQf9Zrvj6dMX4nsvZr"
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
