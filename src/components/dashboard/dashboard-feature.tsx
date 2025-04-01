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
    "5KXwXascnEZFdPYXdtSbopZFzaoFnsQjXYVydnqo1VE6AtXsHvsVcQAvtW1s5CMqCETtcnHMeuddGwJThFjobErc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tZevydefSpeJ8SKLpE99yi2DqMPqt7PzzYJbGdiLux5FpzU7JXxUFMTqWgaF99pP3VZv4HU46QFVa1Fcg6z1Y7Z",
  "key1": "5h4MTqJHoWRoCEDYnurkTXCZj8NrrSVMnA8Yyj9UneyDxxnWEP277KrPZf5cCdMfxbekm73EGKicTTnuFwZbkw3F",
  "key2": "2CbPdWzhkpsqAH4sQ2jXNA1ao5baBFhhux896bu5fKUdKpp25Np3FiUV8h3RuBfR1oww313imTDjRSAUJoLNinjj",
  "key3": "639vi4oZz93PtMpLpxPhc2QwX4aCMDJDKuahrKfvFVTfYizttBkg3nXxtT6nRP52RyA7WTeExiDBEKeaBEzUGVo",
  "key4": "Arqu7ufYiU13iowMd7bioTaZUQdeBWDZpkpjWZ6zyc5po2XYf3XHQNz6Q5LCi8v54ksPJ3uGXqakH4F8yS24pzK",
  "key5": "4mTgJfgAqhuRxGDKnnFUjst8juruRdisy7X6r6RsyEcZ4pMvEZKRNZmPAuVnKpYYQkacpw5EznMa9am6cgpx3vQy",
  "key6": "NimfzSXacP1CLhGLN1h5hMFex3f9wTk4yBAwZHgAUVn3Bc71Mmh9idY354aXLpR31DLqjYxetx5b2iap1a5xpVj",
  "key7": "3ojpy3CUkDFscUUbth8ozkrhBLuU9JbPoG9NmvmrAsBkmLFpXCARvkczHPAFya1WFvh5nzjpXQaYciiJnhCqshmn",
  "key8": "4qyJ5gehujmR8XdhiqLuYv2JkZHQQ3Nh5gG6LZGFfmVTgePVZQh6hhsSDvZzX12zzPGrp95un2MeUeGe75jh8q5X",
  "key9": "5CTi6yd2MXv4RTU39tKc5mNybtoCDYaGA9Cdx1UA1r2GhqfURVVjsYd5DhYwDfuysc1owDQd46wqkgPStasSLkfp",
  "key10": "2aCyniqgwnovkktaGaWj7mZHHhyMKMNfv3iL21HWfv1SNirENzrMdmzM2KpkPAcq1JeH3xctj7UB5XG1bocCU8wR",
  "key11": "5hhgnVWwbgQ7bSbCVFFY9iJBJpYGyjKzi2AtkvDGQr68uowXLYDUYqmwUV11yX2vxSoFqEuG1jqkN7bmWbny32UE",
  "key12": "4yrbMskpVsSUf4r8PriphCTLZ3PKV5AW9Wv4ncYHJqMsVe2nk83ToYbQMgSdSSeThctZgApNFVFeey1gFoNhGFST",
  "key13": "2vhTSkHPGfooF86dcYueQCJHJuwtT935cRhLXc6fYqcR3jp25fQtxFYSTAXGWP2gfhkKmRfrmroCbN6EjYcPJTCB",
  "key14": "4zKS6axCxkD2L3QT7N5jMJXkWfNE1jKq2sZYjMJNQjDrAhxfpGhKfkraQjT5GXtE2DeLnaMJuhQ45etrZi8hkBiX",
  "key15": "yoM8sWGjatYuGRm3tdkcNvq6j2EaLMhncavVusgGjKUWRqYWdMpneNfKZ8kTvzM684FLoz6uCRKyJ4g3kWcHB9c",
  "key16": "2emYY9LSe59q1jzkqcwwN8pumNr9vVXiyvD8NxssQFYHEaB5Mw7Sc881LjHK3GhTi21cuxRw2iAaQc6BrkUHHha3",
  "key17": "3SmjSv2Fkg3PQh5gaQPtPoNcHuRE33Bh6K4E7K15N68VHzLAAjJFxRoDaNgBNK7BhQoPmG44M2Vbga5mY7V1M23",
  "key18": "3tBTydJNebLGkyYcdvykhpbiLNkpp3a4QzjYkY86oUWXCPS6fMofwvq3991SdPa2EreRQZfnsr5HRz29pU13jYXN",
  "key19": "3kXR59QXYgmYMtNQ9EEEwxUwrnpeqzsXnqk6dY8QErodAWde3aoa1reJNWUA6dLRXCrNpMUFb4iGJ9AT8HR1VVVK",
  "key20": "2YnH885i6jwRx4moA1jevck8uzxt2B3M7usE6k6GQMEai8XeqcZPzMjojjCvBF8RTzHDKTKzxZK4xi2yTXPoRrCW",
  "key21": "5saCPymuHzLBcFRW5AS5JCaDt8QAb77aWUMF3U3KGM68L9Pb1nWsc7ADopVRcDrJjZNsAso7764FDQuk75qQ1hbU",
  "key22": "uwNXs5ctRziJP4ZiZaPXRSzteNCgY99aXhaaPQCi9cmexDwjE4KrbagBUQuWNzsLSrtvm9P3cGgbodKcpCgAxjj",
  "key23": "3qM9jxt9MCECxgJCDmUwt28kGDVQfTGCtqpVnKPj8taT9EUccohBUDsvw5FtweGNL7wo7bvUMsc8QjSRmS5Rn8sc",
  "key24": "5FMdY6K4g2kiAnkbqBUKGZwmSnXry6Es7BtVNiXWbn4Ew5PhBKsA2Et1BR3wcSdWcfb55yx8kiYDnkbAnAKKiesB",
  "key25": "3ZgVykVTcw9DitTHRoSw6dBPiVyY7LAqAXyU3nW2ZcuYn5JSBSSuCaojkZBztBr5J3wYBsbHiA7J91KzLyWNBfHp",
  "key26": "59mgdNK85VvF3TiCovCNsaVphpZJJnz2YhDCkd5PTrd6mirxqMwsyekBGxBQrTsTpi2rzqtmZkjszdzstP6VxR3J",
  "key27": "5UcFHiEDevMkTx5x13F72JZq6TNmH7uTmyLQ1jUq6pv6ksyFxqWqirSdtyURGqLqbBwqudKuLcHt2khw5GF2gAoq",
  "key28": "5Zw4Qr6G2fR2i4c4ZJUC2xK2XRhBADrA4fn29XwzKTqso6DMnDHVxEikTSQagsMPyaxodPWvNXasvDxo1wiFtvFz",
  "key29": "3DusGJebfExV1FmGoVKCtySPyQ1EDEFdJJkkzuK194f1qD4cHAopKmZiB4wydLFj7H3KzgoTpxXrotPt8YGRWWqM",
  "key30": "y8ZDHi4jCLfBfkmJbo63zabi4kWaXfgkJweP8jtULkSJdtqUXPt7HddwfucHNNNZU4dr3BiP7gnb2nXNkei3YGa",
  "key31": "3mnUAfpvLQ2admjAZRqvfWPWzTPn2o5B3c7PfKan2oc4tuqNZ27FA8tedKp3B7AopamkGb1XqvpuNsSx6hcKxtng"
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
