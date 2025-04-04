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
    "5mzZUraqEQsj4Y8xFY5ZTXg2tdjBtGBYzcZxFsMWTrrUZjxfnwUt2efSe6RkGhTGNWoJMsMX9dYhvDrVxXjGKU9g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RncrHisciDzF84PG3XujPu3r9HBXtAWMjrnhBdRVbgoCtGuXrpdkAoVdNsUuMP11BmV8hcowEo56FJLPeVeEbNW",
  "key1": "4tdp4cSp8aa5RpRQF11v4moLoTtB9fBZmnbFMRrUj1JdsVLo72XwtXE1Rw787Uzb961cJZpHMhx1jVDaWCsA9BkG",
  "key2": "2AWZ6tTm8tb5GynrPbLnXaEQsJgGTid1v9kXr2u96EaPG6GPprGcMnMKeu3JuR23uC9HACUgkj7TYREtfgZfk4PA",
  "key3": "3mNuSNj6gYFGyNrE4wq2m6LCjpm6gpfXJjxuG4ausCzj7VTXwvpiHPYckgqraA7DgRtM89AGPueCBjGCZREPeySe",
  "key4": "2DtNzZwGC3TpWcjbybXbRUXXbkf1iKVYi8kYFSM1XG2J2iRTLbbjkN9x29sdfMnGExE12775cK1dbwC6SXEugiRa",
  "key5": "5BeXCNKjb2kGRs7mfbLxvKhJRqxJys71ACYSovTt6yq56b8BjSE4fs2k3ToJdaNitWY5MXfsmpoTZ5pE2pgauTnu",
  "key6": "42vMeQacjGjWVHUFFtMvrf6UXGh4HSgA1W9gzjcACQGvajZZw5p24Cb1wBqdqoXhrQcmtwdKt87P7JYgZsxMUc8Q",
  "key7": "2GUhHcin7uXW6Yy3BmuMmwbHKdjfpZ9jCEBU1WgA5SxMruHEBxscCo22Vr9DAgFuQeCVKmPcaYF8WawYdrQWP8ks",
  "key8": "3JaumMrLGbfTt2wLi41keo7FhxVBHb4Ef46zaWbqAqkgnJC8wEuVTJWQZ1TqTLvbmP1QfpG2nnqGCDnD3hoSTfV6",
  "key9": "44XAdrHiDK1p9xAYrUnwXMFNVXuLgfEuUc3GrGPSxKEwrkzqGNswN9aKiYAaCNuyFP7uqUbZtQKyrbXUc6VrFqSj",
  "key10": "26g624VHrXCiaXmwFHUnUCFpZkaNsyR4oiAGUcVhyysQmyFu5ay1BPqwerA43bNF3PyEUfzDZLVSFwZoAgbZX2Xf",
  "key11": "2R2ky4QkaLS66KhQXkQh24nHURQ9A8eJCe3yE1ZcMVaY6aoV5Ece7jEG2NDGGQUro3a8eojLusm9bpQc6ETxx78M",
  "key12": "5ENEff9w6xz1aEfAzNUHgYa8eSDL6Tw7pvVawQVN1ZU6ToJhYhSg1BkqFbRmsbMJy28nVKUaJCQeWo6SnR38J8G1",
  "key13": "SVTwsDNFtbyRsEjHQYRgEswuvWYEUJK5gux159ronMbq8CUmXMMAALr6iSgm7HxZgd1C7j4fCVPDS4FMapRpBxJ",
  "key14": "4fC9rTDn3TPd2HKGBrUj5HSyZj7dwVoQWpfk4gcGK8bukXJxTp8CntXer9FuHxwjEHwFc5956pemfdbd7HhFnc6t",
  "key15": "2g41CJ2mfv4PjEfa986CKqkGUgvucK2PjSTSCRzmG921j5CaUYsn9q8rkvh2e1fAJk75M7RV7ysRxPCNPmE1udpf",
  "key16": "2oMcVq93rNFEy64aqcGM1bXwjqU3LTZGKC7mhwGax4esZHT2x7rsGi3e1GZgbJR8W9tkSbVbUCiePgqfFR1MCSMM",
  "key17": "2oRfAnfYgbTgsc5c8Z9XH4nKjZi17Wz9HDyrzEZFDHA2sg7iU3TMnVpGTWfs79bDEyRuhGTaLt59KLwF9kfkRtvN",
  "key18": "5KQ48ai2fZEGNTqtuJ3sk6cLz4sDgpez3SPPjYLijtDY5QubfNcDRCD6zWsaahhZxhb3a8BsMRFuU5bCT443VWEi",
  "key19": "25Qh59prejVHUj2hUR5oi62KLYng4JHPkSZXogkoKeBBstnjRkXXu6o94ZD2KJFioEQ4Ye396ofaid75qJbWp5Sq",
  "key20": "v3LHMFaX9JoraT4kCmNUhXRQzX32rrgDBZjRHsAXKsYKipevVXQKvdHhSx5oqCeuiE4Pe35um8irNXnLgjoDGTW",
  "key21": "5waZX61325i1p1k2cs4rNE2YE1QxaGm9d6a7MRXfVny6ioKN2bdsiHB7GZasTYnVo7Yfuhv1aioGpm3AK5dih7Gy",
  "key22": "5Mg2oPcpYEKAcri4UNajivPneTuGhEqirqdooY4RsdwRxgwM4Gx2YmCLUUsbVD389KzPMXWAtpdcfnat2oN8MsZt",
  "key23": "4G9rfyPd5MbGjPk76fsxu3VSrrhuZUgpHmQWu6tDSsUUR3k8dMJbBy8mEaijqKt1boNFxLeJYPkqWf19n2iD6hX",
  "key24": "Vuy9xXTP1U9nQ4R53EW2sHMtiV8B9LEtpYwtWcGQCyY7EwoAKz1ukHrzFLaFv2efiGq2i3dUfJxtBcwYfAGi46R",
  "key25": "TJRp349Cc6kjuS48XEwcUB7EnkMS6wqkzRJ1bHPN4yL3CRyN7pjHxUrpu9x2FtQzrHw6ia6EhJibCuk522izKzv",
  "key26": "49TNenha54kfEeL1ebdkUPT69KAKfGHmzrbhPVth7DAX1FEAExovfxPqdqukWiPaC9LM19hp8TTkqjRBNWxfhV3M",
  "key27": "acfXgnmeVFXy1JU1dcrNkU796NXbiMjyfCZDw3QFSfxUVxc7uzUnjMebDZarZ4CnqaaBhSBnzsLt722XcEBvaZn",
  "key28": "21KKVfqeEPoZYhfZ289Nyx7zZSa53bNxKSEP9gWkDnBaRUS9NAYDKvNQMXgVFTKpcjqJuAvEWMoRSmhaVgfcgB4T",
  "key29": "25hZNxP3Z1rPWrXwrXVSFJz8wAFz1xn2psvXp73eW5Py9ErrxApE4BtJWM5oHJi8wsF1mFwANew1uEU5efbbneui",
  "key30": "4MR5MkcmTh2X2WhXv3zUxYPz6NxKc1JcxGARK5QwBW8fQJgSVTk8Sbufk4X4DmmaFQNsu7EuML3xMGCjF8DZX6BJ",
  "key31": "43Byt5ShXyAew2PuSNk8yLDcr6HzuWMnECkgQCWPR9qWpS1uVLR1TCz7CPUjPRBwnLzP7uZVLC34ai7vG6u1pHQo",
  "key32": "2f8yHm8ohKFfzJe4ccPG2b28e5DLJ2ncM388uwhBf7mC2tWiL8aP9Sx9djhHfMCNzNMKX5mns5c88JWDCsdh7P1o",
  "key33": "4NJro8YYnZAD39p2rtTgdv8qyiCANKJqSuk4fg17TBEibuo6BeUw3B6gkiJqRfb3qkC9GcWShYJ653V6CSyuE59y",
  "key34": "4cExg952qxW4dG1Q8B1GXdNzWe5k5gGFQ17ZFKNNmTZiWMjMbjXwj6FZNKHVr4nvm52iYF2hG4EEGTEJttKkGL7g",
  "key35": "3dvptY6ji36bGfXjk4XmovhDFxx7kPUNr8qAnYjkbgeXqRoN8hnjZBMyTU2tZZ2aKoiRggYZ8TfQJvQg4sHJAzsD",
  "key36": "5qnnKu27N78LEF4X5jUMCv3L2dx5engRt16k9A6jdJVqzQWYV17nadf5QsBTL6T4z7mvYqxRVh3AoRHGZj67uaB9",
  "key37": "HM5mttVRAwxARUZisJnuWcFZv6oKD7zqnhhqpbKxAcvv7rDxpihhiDczZ46jTxyVNzTiYQzbf57LGZ1WJjdbq2B",
  "key38": "5YrH4h7ax1Lxj4GF7h7t15SgPwwtYGGi1xyuFJncPaay6MjYrVJrKmZARMVJSko8WN615HfgtWSUq1HHnvNGP8qw"
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
