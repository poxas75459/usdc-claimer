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
    "mnL1vUZDS1QrJ7nmM747Ps8iGZ7u3LyT5HXy2QETwFqErSeF8bkRv4j1TzdhRHugzBGWDHqjEUGB4p9jfXyF4ta"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kgRqGiqPcV1P2dJiRVa35GJ26uZ4eibswHcpoZYc86KV4MTxdtrJMTp2YayjrqjYsEMv6jvRLXn7ucGzjEpyCV9",
  "key1": "XNpanP4uTUpTJ9rLDHLhvFjKhnVrdNqeNFMWkS5cfTLYZ3v2Zjyn7FBkgiwujQKJcRVdVEEeuuZMHyZGqDXaMmB",
  "key2": "4yADHDamuQcy3dpdy1joF5uZ9cT6TTMYPVpkYAxSVkAXyp9CrFsXKkfUv3UJyHattfW6u2FLMzdxa3yF8yybfwFw",
  "key3": "4sY6jSgfvYraH16REbAeC2dvtKoJst223ibBhCeJ5uPZWe3HGdZYSdpaWMbD6Lx5WmugnSzxMfEnpkGRaChcLRRz",
  "key4": "35i9sLU8S68EbwPm3Yy6n3Q1Y67aSTgMP5Pf4bfRizJo2mhLoD2wCKD6xtEVAJ8WyR2N2dxAoL3wu6f7rEBxSEde",
  "key5": "5eak24g2owZMP5BnzT6ZMaCxE82gMo1KezGiGrYcS9Rz4m95N4MY25LbVHBLok1BsGpdMS2NtuKju7RXiXZxPgaV",
  "key6": "3jMzKKXDzS6G14stwNuFs9TqrZkNfcEJojgvFChCMjKuZycSBadnfU2NS5jR9WzbqbjoZTy53GXfEsNCY48bLpDN",
  "key7": "43nesf3GLJFGkWWkta6i43AYoFi8Ui6CAXyDbegKD99m5JxTVcdiPe6bapaFs92R7r57s2gKa27eYh1R4SPMsf7s",
  "key8": "3oJgHwjnAbVaZBZXdvfVZ6dHhHbdwpnv3wLA8snj4ZoZSPrhBPAdzd85rLYo7DqnxemfD4Ki1UYjeRfwPYjgBU8R",
  "key9": "633vLh9a5msdH7wbBjmA6gpX968NFY37VHw9ZrYHAJu2QM3YSVytDGvkz1QXGto3oaETts1py1bgRRetjUDkeRUx",
  "key10": "61QwzoJqLMEFPmg3fS2vY73RRVmkQ5DL7JpNBFZvcP1uXkVzTTfjt2rWXSSjgPqzzKQYCTvrPcst4PXgLtj5pX6G",
  "key11": "ueocpHbYnpTdzPNz9DwfzfTR6gVt2bsDcufh6vkoeM4yiKpkfT9JCccBkBKFrX85ofTq79XrHFUicmpcnXqckbk",
  "key12": "4z45wujyd5CvkoppUad6pp9ux3ZLMVvshWw3cJBk9KvuSF4qEgHPceVakKhJYFVY4yZ1fh26vgkAidBfXjGEJ7tL",
  "key13": "3uG6BcBKKLuGhsNXbRcMFQPmJsT25PHEVbMrshYnbSXnnXAYZprBdzCxRJQ1oFeQqinJbrCmHQAzXQL8KEKKzpJ1",
  "key14": "4H7wTpCanHVySbLneMm8iTqGj8hvC5fsWgrLVcXbtMTXxqn1Z5kcAckPjoiKeMVtgkBF9W2k2uHewYw7mVLfwW3E",
  "key15": "caDEC84NbJ9trH5ZdDsF4G4NKFxFWwKQagdAoy7dFnb8EEMi5UVckk6gsyQNMEhc5BpUcqs9Zf6y5cXtmKHTRc4",
  "key16": "4YzDVxZvTiiNHyxfPre9jkLARfdMUGyj2HF1DKVivwLAhy6hyBn1n2UbWM2m1kn8gF8u4B6eR4Buv59J4grwv62Q",
  "key17": "5d92SpxfMkx8jzeBdCVWrpcaLL9ZemabDx5Zt3Zan9XccTRwnk1KWZBBCjX1quTMTpSiAWDGKo29ycgFRf7W5iYi",
  "key18": "5tG5kP8Hm8MKesGcC77gWR3V5FVjHG9xU7YSTzn5GJFc5kmBA7R2S7Xm3DGi3wYhutLKK8zLdSosYrunPa63vkP6",
  "key19": "2qAc4VLFB7TPGWCyn5BwYfLXUQ9REHyPjSBoGvvUaaXXnSzDRQeGFYykZXiHk4ayN9vTcqV7QiQFq7y1vxnkxDNz",
  "key20": "2hNyTCDRkuPn4nn8m15DGd2MgyRJcPqcsvom2DDNs6sG8wtVGT9ujjR9wjzTzXqkGBSQSWeqgbWgNCGYhP154Bxr",
  "key21": "2scHgE2wem5prrCLTaYGrYhSdyYtgPhs2imY7eXwj5zry5ooPsuns2UaaW2VTc8qBNzMXWwYYAbRWuNTFb5qi5Vm",
  "key22": "XpSv8sXN4BKMwKEBmt2k7AYVVoR8Mc6A84ifpimQzrPQwuoVks9CQn7uLsS2zML4wisEvZXnH8r57DTSkn9GTg5",
  "key23": "39pgMzEjPHss2Jf9fc9p3wvor82D72D48MRuFEvrHmEpyNFy1afefPkPK78D1hzJwzH3BR7gwo4CzHBNa1uYBmEJ",
  "key24": "5ZBvrgFpFmyZg2g5wXYMpe6j17so1G8VF7wWK7NjYrt46z9kPF5U4qDDCTrJrwhduxQEcGQKz3tQKRVSBZYBY9G2",
  "key25": "4KJ531V92KwFVRiuidmVgjcsxBvW4Vgj6YnTHbcm73eY5hTZ5rjWd5c4iENkq6K6y5SQ6uZWybi7A3TXpygmjfVM",
  "key26": "2rgNCuvG5SZCpDKRBhevN5e73uHo78i3Edh7kkftzzEavFKc56dTrTdYA3fbyd5qRXNDq5oz3P5AdVTw6vugm5ZZ",
  "key27": "2mBCAwpJPVbqAge8qvqF941CC9M8Er8gtzJ5eZo1roib3mPY4Af2rUP8dY1Yn39BnbAjqU7prPAsac6Tn1dKyGu8",
  "key28": "325hcS1cD4Hsqozos345s3cU8uGuAT1F9SrVrBkKpCgpYxRcmiopQoVLUDSR4FzMB7LkMAEHsnnUWBGusjwsHLVT",
  "key29": "5szh1KYaCVC8Rt4tVR5wqkxfHUwnC5ZN4yd6msKixsVesKFN2vWdqgioACuGx9zN7BWppRSDWv2ipVtohqy8RxXP",
  "key30": "5xZtMqaYikqeWjfB8bH5KMhp9hyHwsAXNzxpcYWJoQCDWsZxokZnn5suXvok5VLYqjokwjRympGThm3HcjmeeuY9",
  "key31": "QGUMcXUpRRLhRQrKR3JumKx4T2Mc4b68EmHN6hVqdnD9mrUWj4XRojkMtaaPMCk1WgttDr3QLNy1FhvCR1GpL4F",
  "key32": "32jY9wmvxWcbASuYGJyz7Vd1ZDujnBwcNhtFBxwSeTTuB5LWoQdqkLECifC6yt7DUMbuCVukjGUdiXM2P3ZR62mu",
  "key33": "3ebkvrEMgGbjv1C3TwtPSsDL1U8nPS2S91WdmNSptVC5aRY5b67kMzBDWYQ5XnuxBoKJkQBq1915HhRRKcgydVzU",
  "key34": "2NUg5o8K925UobM1TMvE1XYATcsYVyAHFisMVJSYth2tg9VnL2mXEcNJgg1q1TVZXGfP85qJ54wvx3oqPmLVWVkM",
  "key35": "3JearM8qsWAcx5SHrpYeHazYZZM7vSNRJz75kPKf2gDk3psSMxLnU4UWjSN6DCtKJwF1WZ48PuwbauykmSsSj7Nu",
  "key36": "4yXjsF9kzbwxULyJD7V563TqMB5PBtgN9Jhi7JqF89TKvV173cfaXHAxeHCpPHU2JqjnTvnefUj6cX4XptSJk1Ye"
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
