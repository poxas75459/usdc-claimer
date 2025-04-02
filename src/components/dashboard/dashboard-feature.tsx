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
    "4a2WFRMr6Fw7acQ3XTr3WuLnwjWshoy9Vt4uSQA9smSQXAfTQohvtV5ShdU22Gx4UDy4FeUMpgyzdSREKP1fJC16"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MWy7gb6D31t4Tp6hSCSGM2TYVRPEFErvZ6sjeZSf8Xem2QjdFizqshN457hsgsVgVVSQS9XWzxYSfjhXQdZPgtz",
  "key1": "3coWqVcCAoWj8D4ZUnTWJyxUwmfJASjL9DrnH8txpn5Xznih83G73dtcE9ENdHpeuxTBAnkrXQmygrKeCpHHkFvo",
  "key2": "5RGrkj6C6aJzUd4cVJ2VNtFsS1LdxBQsh4j8bfKDMKygmMU1HeFyqGEBireAn3nWDtwLvnBn6pBrMeNhSKvKuY4V",
  "key3": "oEapUZ7ZL3BLKNPANiZbnd5QZrN8ztYhodo8YfrFWr5mEbTihAKF5Je1CkgbUwTjmauAhF1jR1K4P5aohnUsPSF",
  "key4": "2yQyD1SwZQW9sMk2njJXpm6KArmqCVz6KgWxTu1e5tjYDK8BjL2h9cGcaVHPiD83Zb4tGQ7Ertfapr3bm83YF7Gm",
  "key5": "4baz4Wd9p24mUN3M4iqE7SnQZ7hHxsy2G8kxkuLQPHiPSUiMKwC6bMDiyfYoba69qsouXGev8z9ZTfyKFtZ1oRFd",
  "key6": "4HZtY9ZvW7HYgGPqThGY29fWsWeAE35pV4mo7iAxWchtw2QzhtNBufvGCAVgN1w9deUmUqoENXE5peQHq49Ankr4",
  "key7": "5vRputNLyW2YvkdwfnSrpDHAztmWPaSqcQLTysv4NTPU5VEZbVu1WzkKmWpJA7VCYe7xEm6K7Ag8huzAbwZdFBc9",
  "key8": "3eVzVdtipFgwmiwHvJGaFSAppjgvZvsJxmTjWcn7jEVcB65YSDnyFgNxPb1wDzjA9RAYeeM5eG3141HyeV9Enj5o",
  "key9": "KTjrwE1QHf2ae7tVjrZMNZocd8PK2gAF9K7g83bsM7epzyQuWgcNvdHicbXJSdhs8huqpys16bTLXhkC9v8rptK",
  "key10": "4W6wc6paLsGsowiD21Sij4mnvS2tD1vVixMdezpRGqaKmTekAfCtrPTdisXgg6bN5qC7f48Wn5mjss15N8GPdXKu",
  "key11": "HaTHv9XReyLmkAk7WWboW8nTpGkf9pFHQwVRDG2S3imC943AX5nvAqGt7kp1uZ6Rb44yYpD6QyjM7D8pUwWawhB",
  "key12": "hZR9VTKY78d2nWY8Va1VMLFDukpixbN3MQw5bXuJc2qkn4e6Lbndhbwe4rAaxLKtQCrPpGW2Pbj6L7JAAbqiq2G",
  "key13": "2PQG3qVdttBpfiB4vi8wWckxj4amcvLqJuRb9wQUpEm1H8Nznb6t1gqZModcfV34wfnh5g3M7FkFJHWUFq3rP4Xz",
  "key14": "yM8f6Arnt7WqNYsTeTynVHRA9yVX6o29PeRDNbyNJvrDjmRweK41vtYnXo4gLBnSLGQumZu1x6eWLBMmyW7UzHG",
  "key15": "3N8WLPr44oxLPrV7VniwUkjDwfSivYi4AgxSTqyg1PQt7XF2svDyKD4igbUSYGTCtCsfWbbaouqtS7VdEGgqWq1w",
  "key16": "4ALFx8LJmhgg62SnTP4mPM2KVoDUca4ncm6PeJfsEn6VGZGa4qCQhzZZ2ELtg5x6dsQex1sA8hMJE2m2GMai1ytp",
  "key17": "Csz1PWaJzTHUjTCZZx3utfMAgFqyiTfhNTJTh2exGtFnoTZNgwCRhMNkyVD6Cxv6yaW4eWakGtp8fwBxh4Xw6cY",
  "key18": "nsxGDPLzBRgxFvfRdWo1ScYouA47aoto82h96dRnZLpbfYLQEWLWnWNEdTV2WJjrQmPqkHphZv95ErKG5j9Jb9F",
  "key19": "4LG7ypXo7wDTsSw485hKYBbDYMTUTs7SF8eQvrY57v5W7PijcrsjMpd4WzG96q9ovyV2PirPxFKdKkqdDehQyRJH",
  "key20": "4Bhq96rSyRqWoNDQjX8sxfxkgvaEjibLYbUvfJwCQx6T4aph2C3QQTEf7wE5DqfwrXvsPbkddSonZ9FWQBxZb72f",
  "key21": "2Dn5ED3dz9kg2TjeDpcEeg3fbKCkP5A4SK57RBbRihC5PJMx4hyTcWoQDX1NvFffPns2goAPXJcHMLUHUqojtjb6",
  "key22": "4cwrg6AuCHFgYKAKZFqPWhuA9CsExmHg9Nd46eMo6BBvyyXtZAutB6FkwKNcprPVipGbFFVTD1Q75i4Yz4WYmRRg",
  "key23": "61Sb9RSd2s8N2ZnV2QK9xiJbJpzrBQjUV1bW3KGeY1hLcTzyUxozCmCrqDGUZnBboyGEj9xctuRrCeLo4DSb2Hsk",
  "key24": "273tB8grkXW4aWWZG66QLEWgmydTkw657euFCaekoPtB3pqK3jtAkJEiS1PqBnThqFWDP8bzPbN557TdEuXVtg6M",
  "key25": "4HBg31gvGmrnsiQASCWb8MVWPGVvyU4y1NBPwwzSp6qRFcN7eyA1szAVxceVe7pJ6f4LzdXyzHzGVF6DFE1VKTdF",
  "key26": "3aiCZXkvZZdz47VjfsbsMxiqt5ofa5bb1BHEyyUfwyQU7FaBaju3MS2C6rW7PPcJPq6CoBS2pSwC1ZbGGCY3YgK9",
  "key27": "KAwr9QqZdFfGTnEXewv1hB6kTbf9UHvVzM7LSoYV5527dmn3pzr4dfERdDU7WaJjLKSCi14GuPwA4xG4TR4zviZ",
  "key28": "61aeB4TAGmvUnQM5FC8nYhUNcgeNJiRg5wzWRN4Hr2oTSVK5Nx1BGMnyr8xDXvhcGqbbhq8YN6ZF1pz3L8Hzv1H7",
  "key29": "vAhNXafPf9kejyvqz2W9Ew48v6Es5T5W1CCDPu1JN6BjY5nZ1uzP7wRYkBMruPoFfsuFWr15Dd4v23bDb8zmMQq",
  "key30": "2kVTECpXXNPdHgc5LJcNdpG4jKeCfsiftay2LdZZmSwiXoeCEH53Fehqp2i8ygwAL8yYMVRChtzL6Zc83eQP2Cip",
  "key31": "J5d4DMTLUU4b6LshydLizHG8Ss3hkWupBaRdSKg1KE6XK4u6vsMKcMKxp7neQwPKmJUqmy7v15ZxxsgW3TB17yA",
  "key32": "6Zt8Ze1gQTzFFMbpEySwkYF3JsyfwjQQWQ5SjawevpokB5uNdPN89qyzvZaNfcjhAtonyvEjxRVJfoyg6JXfMjR",
  "key33": "5j4g27u8rh7yW2iqosMDDtWqEwGDRpdru6vhwR6HnbhbPeYEvojTr98QPeLiNUvt5ooSwCP4oDzXBw9t4sqw4fEg",
  "key34": "474CVR9Gu1YMwz15c8q4mQfTbDeFJ2v9MkQrQ6tp7mUQvqvCUxxKnRoNJ4auNfNeNAq5UHXT294mBoTuLyufdFJq",
  "key35": "2jqAkhqV55E23hNyFTyCBM9usXZ1A2oKkMEzMSoE9T7j8e7L97AAA7FkMZh3pP2pEH9eKWYkDi4QPGFJjjBpooBj",
  "key36": "3ghL7ZDLdc3oaefupD3U3yTXkmQBtBbCw6B1TkyEEwFPPdWTV2gFfxEjqCvfdQTttTxPpGFC1Fv3qyXKa3c4ARDE",
  "key37": "JSfXthWmK7kjqy38k5ehjFV2KjKRbzzbXDQ2hW77MnynD4pivVHdJ3UQC3RzDfKUha6i6ZZm8bMPoKDDRz165FD",
  "key38": "3KorDnmdSb53RftANdkPW9W1PyUvDTturd64sxNdxf557t2kwiMEkBJBAiiStFfjPsraGe7X2etGWVkbMFCs9YhN"
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
