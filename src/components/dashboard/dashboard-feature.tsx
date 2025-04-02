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
    "5EYGeqCJ8TqgzDUjkY7W9tRmN7xo4t9pifdZWgrBH49rR5C1jCy89k3RHS31HudZoCC6giSGBAYi7uVksaSLw9Fz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xoNQtt7Ez1GCWuHEGm6xnMRXs9sRmoPrtng3JYj8giZRHQZaARUSuP5C8fThvNcKdJvDaHzmnWUSoxZxP65f11N",
  "key1": "2Ln5JsSGQD59hEyrrUMKEfr5GnkGQQfnfPHXmGkWm4tE62i6NDLvT9skmNNJGdNjnsPnRFGDjmxqPvn55sMmR39y",
  "key2": "62vPBxga3ueBzC9A8eCj5xaFkgacYDkNSieh2LpbqBibmcGcSDGUsfCUKXoa4KXdRY39vphgT88i5NkT4LmMRYGq",
  "key3": "5j5u7PxVKefdSwUCyGcZiBQbKy1jarEjKPZ6ZJZFUeowCeqi3UQdaGxzde2S8LDtSwmkRt8JSFJGN2PDqRSRpYHL",
  "key4": "4kP8XaZp3eGQSo3wUgFB68vqajxQj7b2xYeLp5Ms8mdMKUpepk3eWZoizKXGnD9t3xy93oFEF2KKTDQaT8irZMjC",
  "key5": "zBBRWKDHPTkFmXdLhBefonJts5ZFc5EEUNQ9ca6SnU9rfEaLDu1dy91r6fz2DhsPSvGpbbvdTk35uhAKkU1vJmT",
  "key6": "2jQJue9sBT4r4neGfeu1cDshxfSGeXj4gNVN1LawhAUAnP3DHo5hj44HsdrMrsEeYmpuF6hmrySwPLsyJkrqLMZp",
  "key7": "4AD1tJzjk5rWUi3zDJSVchTGnpUyhSY9QnaKjDybHotCD5NT6qYeWpSXoTbsgsfBLnd2nDdoXX8TsHH1avvCcTuY",
  "key8": "3xsK22S7EosDxHBUW72QU3V5Yjd8E7RMBL27H8rZRfcPZu6bW4ZkkdxDi6nynJmT7Z1QXe6CcrbpmuyVLgZaVxSA",
  "key9": "C8uJZgXVTbt2EghKFfg4TPKtSeaCxMgmrJtmni8UEMkUszZVQEVJ5x3GXh68Z6ZxTHAW7DcZ5jo1E1Sp7cHGap2",
  "key10": "65FSpKo21zAVm2wemaZ2YJYo2q9HqJJoaX5hsgUg2qcFxXGt74F5kUCubHeNdD1WW3j9Yx22nprHCvQQMSH9pXtQ",
  "key11": "2LuD3QB96tE6j3jfkFHzXBGbyWoZcxasTbecDwNxkssSzp66QdFgtmiVRgGYYXNXy4R3FdUxQcvQ1VR8op2auofk",
  "key12": "2v2tu6aHy4U5YkGqZucMKCywPaQd3CcPd3eGHheHH87U45qW9HeRnxUZuGjAEuQVWYRb6p2TreTA9EdJWjshQPAD",
  "key13": "4ALPdnJV5bhYqMMMwGzbyGQfLHh3NqQ2p1SVMvKJY5kt156pw2G4ayZT1YTntLe4ZBT5kxJ4dhjq6ydW93fbhEgN",
  "key14": "5KdjbXRigXCRsS4xAeNMxuCDtdVvCrEyk1khWcCWui5V3Fq7aKmPfDhHSHC8LkvMyEr8oR1Xhi5cpt5EKA8bbh8w",
  "key15": "24hXTPLmvJaoDYsoqyeHkiwvej35LWqBrs5nqppHKtdsJzZRuRBPKxXpYnAaijYecNRhVezbgjZj8na7s6rC4uKw",
  "key16": "3S5LizCbpj5g8X449VLoxp8KkUGWecvPZwrtRhcWFWYUnqAZA8FqnKDGXVudMYrEgaZSP2B1Rdy9EdQz4BABUyPs",
  "key17": "3fQiwvnRZqWPPyMywqpbt18jdWGjWwWAFJvFhSAow2RUJxE2PioGNeQLHE9SHa3e3sLBKpmD4CjoLoJX92aiPA6S",
  "key18": "5GtfiqJpeNK5vjXvAPuUbVFLbZHdxmVSWkkoCJK6u1sB3Y6y7HKTvonX6gDCUcBmb9RHTkyY58JFZSDHWPQNg5RX",
  "key19": "4hSQ59AfveChTQ1eaUomFWTPa5ZNw2fq9kLegcgkqJMQZHuZEE3UuJzWiFSMwFZdzMbK99NPu9fforPFtRFpoqvE",
  "key20": "53pABUT9EhCBTwep6TL53s7qejDS6hDcNtsc5YxAfVmLNN8iHc8mCfwkVujvdEEJ7H68GZaynix9zgZZAcm4Z1qE",
  "key21": "CcbfT4MwyYkPcUfDVi3uMzma4YdwKCX5f8xXC1AEwDYCFzmXdNJxPcxf498y54iN85CtSF59QaaL9m36gpAJofT",
  "key22": "4wYpWC8CBcVQCyfUw6bjq47np9uPBzh5pM6jtz78EGii8KR2P7x4Q58Mp2R2NpM2hJTU3PXjfRkthbENKi9JzfZ3",
  "key23": "3gEEuC6d1ceJXPcpUPwA2EYNadLTkZ6VcGgkuyegXnQBnWemB3o8SUUpEVhVVtriAfqL5tQW5GtKBPCFR9LHfLkv",
  "key24": "5XjabKUmMZazLUE2jC9765nQHWVD4kWfy2fXHDcRW8meQqKXsf1vWpFucCddf8wkYisXnSRmVV89qi2QByRxmAdF",
  "key25": "2UiN22Lcid5uphbRvdggsvZzAxPt3UCkNSno6FeTfG3D9uLsYs8xxvEqrLnUzq9ciTC54EDEM8Mc7Y5KLDDZL6TA",
  "key26": "3aT9NWhreFySNw1D4JFs3dj2CeF38jfzEbFDdqdhZMmggSswrqqdgEXgsvWinkiv99LyowsXWR1tjJaTFCE4SnUw",
  "key27": "2X71D2Tmo433zbbNhdDxYSxy9ZRnFJkx47ed3E5SscoL9AD7jfZ2JE4sARs46jDTVHh6NaN7LZDrx75EjBN5FFK4",
  "key28": "amcjeHv1QEhyNvjvSP59g38maCRNgfGvTtqPKoVNJotRYXTZ6R3qqgHNy2K2bKdRwpzKsH8FsHfCy51RwyUqNik",
  "key29": "HoaR9hjtSTQ67MXCKQrzXk4iCCLL9SzUtDiBqmu1DaJTJKMmJXWNYNxd2Fdj74aicpYwosP55ixg3fgLXs1AgZW",
  "key30": "4vi3dJaFpv3kRXZsZAbgrsrSseFwX3LrwCQ5JkvRXtkVvj4gVWM44u1rBTJu1H71XgQmRc5mSGGckxmFXBhJoLAK",
  "key31": "5nhxXcdBEojDNkgjzUKJ3E52QHgb2U7JReJezLJsEHu9bvVDaheDd2k5xsJk16T2h5UbaueLMxMvpNjgakSeasja",
  "key32": "57qKikDXehSjvnSHXEGFAb7QAiC5mS2QEW7TDZsKvBTYKwfLxXirbecnAH8HP49rZWukFeLR5BnBAaaTd7RgHzMX",
  "key33": "4qWJgYgdbhNAsDygcGQxiEBUF3AvEQe69Z7emgwnNR7cw94f2qMsKmVGpyyHuGvCpXjKWcBf4tTQizR2d8pR2AWx",
  "key34": "22vdEuu2s6qn79dVN7ijAjmTs4zZ3zF9D5f7xXS6bF8NfSHmt4cqiwag28rdMpwGaJFV9Zgfv3UJ38CUevRFb9Ag",
  "key35": "2rpCqkgBFWroMMf8PUHM8ZTBM6YtCAgmoifa5Lfer7Qx6HNZK28WC5BMKaeN7MDVNk4xSWw21Kx79Mb7LAVDcoVK",
  "key36": "FfDpx2Wo4EhB59PNd1RtK8mYnPU1vuo7HXvoqgX8KWZQq49mUe6zLcvQzZpdmARtapX8z3Pd6X5duZQoGRSwmP8",
  "key37": "LfWHoECeD6GHY2Lm94AEyAsDHERi7wBr1xaPmiR9CPjVEVhUUrsAZDRqs1HcCwVH4xRwuWA2LsiacnL8LcjCSqS",
  "key38": "2hkFyTcbtfLbi7TymqaTc88jeXjb4gxWrDR4aHhGhKTyVE4iS19Xiwo72Jun9pWyeSXyfQ9vLhoANaVjMMT7w3oG"
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
