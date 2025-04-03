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
    "APkPVjK8fAL5QxUfzT5BamFX1NM6hFLgDD61E3eBv8xznFU3DdteQDGSahxr6GKuXUGdRrEfBHagmePbpK4NMvU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LuKnAQMTnHS2vdCJFH4T9LbiJZDBnkbB3MpXctrDY9qegSJB2B7FCLng4juP1i5JR3MhBQSMVKoPVmDMopsyF5v",
  "key1": "5xY9xU1uHhwYidY4czLbbjnAb3Qvc8kpB2QVVGs2RYDbTY3RqaeW1NhFkXkYSAFxuecynAY5RsttiKzejHrGHtwz",
  "key2": "2mFAZivKurHXCqgYDtQtJnkG5vZeBb6r8xgDVJSM3cswQysSrJGfUrU5oviAsoQpEs86CeMunJGFCwJJDxho5Jnn",
  "key3": "5ey52GwyvCyHJuWQBV3j6deeyaLNXHNB5ZTM2fHJVg3NeKi6M4KT3zDQ6nzPfhaqhJaz5RJ1PoUTsLcEcJs7xxcU",
  "key4": "35MecmnJmtgnoMibHJts7xPMgs1X4WVkc3RgePNyf29SJNjpcVhkwNMKD8pXYqz67c3hLMyiBZ6APBpGL9vMihix",
  "key5": "5bpeWGiN5BMCtpPYThjW4rV7hvJTQ6jcfZQ4u4jqXd5rKivdp7CCe1ArDvFHTCv4xhPev3Nu18su6rLm3pnu4sx2",
  "key6": "5txDVtgRtKXxAhhkmuU48RKgcEqgqu2c5heBoYnQfpXhD1NR4rmkxxe6gcFA3iP4BoV9Xv8kQqcs4mFzc7Bx4Ptb",
  "key7": "31KPTDGhvw3ksvgcyHXE6V8dYBPYyh6U4gKkrwaYidMAbsWkdmGjAN9nRpk5t2tTYLQpBmE83npn9Gv3pV8UxQC9",
  "key8": "FutpcYBn7qpqCkuWymdH7QMkH1H1VEnpjrzv8b8u7B4L5pUYtrr76GiaW97VjQ8yWdQwgMX9aoQqxofQ8SS7TP6",
  "key9": "WST5pZgXqLv4uuxHd3xsbuxyNHDU5tjhQfsLyCXGVqSp6xdWGAkEGTKirnYMKSxJmL6Hd3ZFSppDMgSarDYXkwv",
  "key10": "66ZyucRX5sTMEiRxC4zLq2SXhYRaWSz9M27Y7KLvuZog2Zf7pYCgAGbi7BUFhKTYxUtxoiPzDVaVCozTicd41f1M",
  "key11": "34v5ERKak6Bj84G1AtgcMsUp5Tj6comNwgZUx26qWhXzmamShaBscF3E2Hwp4jiNwKQNxaP5CZ8scM9sJrBd2gx5",
  "key12": "3bMjqirdVH5dvqaCeya4i9hRa1qLHECp1jSGSVJVHh5hCts9ZN838NtaqhpJTMgwjbJ9Y75ytVQTS4m8XBhcRWWQ",
  "key13": "2HcLxwyhiCasyQMGRnXB3sk6hrmm8XZfjH7dc5ujUjWspiQCSFnxEVuN4sc6GHSGtq4VtgNGgfVtBaaaUTX6SGZm",
  "key14": "48MD4SfDnrxXZN38Uq1c6ZqwVCzmF2FndGLU3XgENWp28xx9J8BWRSKZLUZLLGLfW1pQv2xeuC14ehDLgqATEJyK",
  "key15": "45SvtkjATt26VKWnwJYXE2cqsU8s9KhQkb5f6egZLPvTnUvNrWTugNmU3NYBZbA2iVh83oGsRtiKcJwab9yT3szy",
  "key16": "4km9Lpw8vCb3jXAt1VBBdZ3g4uQGfLp92uKU1wRQK4BijGgqBmec2ZmvK1vc5tAEo7wfrDz9wknn7SWcMmYr7zQy",
  "key17": "3ZG3ckiBf8zmDMUKdWvFB5z3KoW4xHQGNqghbu2QYuVgyMJ93adpov4X5qJjRVU2qbwijqBMUpjkC3ECZJBhmrAz",
  "key18": "4fw5SQJPhsPgQz59V8Yog1XtFzrhJ9qRfHsTMrMWc1jghde3u3dT5zSQtA4xs95cFxysoxYStKStJxyWeYjqdApd",
  "key19": "2vURpk8A5FMrNZzaHfjyadBsafu6GG8eicZMzyCU5skYqzDCPkaPW1RrJg4XZCrhy8S8qhvqrjSEQLYYUqnETJoQ",
  "key20": "43XQ9xcC4TvRsgWN6MrNhuXnJxmN5zpwZXjKSrMf36v142yKbgdLfXQP7JJFBPpQbKNF2AqKgAvhUPHFXP2nKkQU",
  "key21": "8e3H2xMQ5BPpf2meADYkFXGJG8jqEB21FoV9RCPqT8WThSqka6P7ydKPhfxNnhfT5wCs7E7P9H5TTCqXtFaEi3Z",
  "key22": "xPpQc62QHFRKk4HycQs4Y4TLUbyg3wPQyETG2Ko34XPdBjyu7XmomAJimAXWiTMP6eV2U5EEw1ykdZ9cQhc7Zh1",
  "key23": "3DQhauUQkQA5m9Kk9wQWfb3DB7ehiBPCysqCdiRApa2dnauHejdkSTwenEVYCGkcwEwmCgXoH1QA42xVSM9HjN1G",
  "key24": "3qF4AebNPqUsvTSKhmMCiynwRjTesx11mVGyVYzitrQCJjfgq99fnTyYVSkR5K36EMMYSVXJDNTKcdkbEUrGcQzG",
  "key25": "4m2EqiboZTJTUbM1rKZ9BffiVfPnjmVw77WJr5evT3fMFRqEiXBpGSHi9G8rze4nXoEXs6T6gxEoJsJxfS4dPJLk",
  "key26": "4Nv1x2NzuQt3zKP3t4NpTW2hWCUGvGJ3DXr51yebPrmJTL3CBJwWPYuPmSkQkYedKw3hgaZCz16f5h8493Zo7kqG",
  "key27": "3VpsY6iP3x7y8qHDc4L7vf6QBKyZoR7MMS1JFDUpBuf92SvaGqQLT2gJZNHvnNuQYTjTjaT9zCbro89vCDX8cZAQ",
  "key28": "59qXVEkP3iV9qCPkNYpcQ5kqEV8Di2zW7QW4C72FHC4Eb5zizcVGekuuwSymPDhVdA4ZLsSQZeKYkR6sjD7ypqmi",
  "key29": "cRgwrWprmEzQq3UQ3C8kqLfbGuCLsL9bL2b9ncviGf81b51r9fdZ61wn1eBvFqHeBS5MpWdKEgxrzi74RWhnuhh",
  "key30": "1DLZKVcaDhoSKMFdhpKToUraEEJJrwXWdZL4S9BV7xiKZPrakrUx8KdNVw49pxabRjLBUmzbheHGCdq6Z8B2oT8",
  "key31": "41fZmfuPbqACCcSk2UzWFxW5tt1dhfjhPfLtyKHsmf6VrtfPS2MSTgsUFVFm452XPBRsTuosP9Fd31TdEVYo4Wu9",
  "key32": "2J1wZHWGLZRho2z7QhY9EHQAyo3ekx1RYHx8MKi2kbfM8jyvoGnzM4aDnpcEDrZjoYGy56cQyUsz98MiKiAPmB8t",
  "key33": "4Xy9Rx617aD3VLgKoqLtxUGQ5JXNw1zZC5XwBMDzfphqC9BxvwLWT5HPH6oev3CpPfZv8MWA1ThxPc2gmn2NvxbK",
  "key34": "5L1yhD6TAQ7SfbWcjdrvb29vBDwZQUpxLSf224CBdEiG4m3rXBRoiQ3eu6xvUTjwxr1p251mAAV6B6zB2gFynFSs",
  "key35": "ADZwagqoFVfUBUiMCGEJhATTCZPzF28JGhCMC1meLeAh9ZxFokCedBDWm6voK9vaaj5wvkstqgJ39SfbcWUQjhF",
  "key36": "4fhwYgR27DopQcSy5fhgKMs3uVLpK17GdnGpptQRugPokbXCzgjVbWU8Veia6qCXMZJQHqdt3aUmHgYJgUtasM5r",
  "key37": "31TRnPydaqTSr2y7zq8WHCUGGh7F1Fg2RSWqiUn813S3uvD244SLqSCMbXWStcFTCrGdENVmPFTXnA3Kyp55HJmW",
  "key38": "4uMkk6jRCZ29nXLmFNz3VBuj2mpAWQ1mpbC6N9dHyHDfnqo4rgt3LnJRKYvS27aCB6GBuaXDABT3Mu5Ma2JKV5pT",
  "key39": "4qePM3mgKAa7isbgDBT7Z5ixxbMoNys1WjFbruCCaqAyzHFvmx7Mynz84sFG6rP8hCg2PEuiEXT19QUmGiU2byes"
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
