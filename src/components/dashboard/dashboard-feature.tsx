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
    "2eJqk1RJ9jvfvVDej52o1S2Q22C9cJt3aJFAQvEDxsiKbc4c7EXdhspuUW7cC2aBeaPGar5AFRbgYGJn84yASdwT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LvAKZAT7gD4zoTX3CRnNAZTQ6GTTH83dEhf1GtYWpJc4MGH3VMP36zyJXVRSBkRtVyADLMwE1B8H1sVzGpnwGcA",
  "key1": "5izP88Jv3cfXE3BRQ7Syup24RMrGC9szGZJnsfBzWHXega9q9694BVVK6Lsif3VoQKqz1EvidHjVHxAjNiALsZmC",
  "key2": "3iXLfT6Xmf7BgcdPqhdnhbpbhiHhjNhomX3mrcsPDTpiGcFVp9WU8si1F38vVPdNoaAVFyXQjXkCuGhqhNn8C2vt",
  "key3": "4Kexs7p7rF7iNh7f5HPDtmpZH2iXFXZa1EVtnA15E8KWcBsU4B87LBBPYHW2mtqpqZTCTtfA8Ho2wfh1Lfh5eKyZ",
  "key4": "JRrHAgtwPXKWB6MRsk5LPFQ5CjkgCGWvYwdeGQ7DFU4fVHJZKTpx5KnpbcP997XHbsGP8iAxRrywAs62D7qdXAe",
  "key5": "5vKStv1QCivD1KMkvodmi2n19kNyx7e4gYdSdvx4fUnUgUoCgLzw7rgFAJjYdvYybwWaPSBggnbqEhRJLMzgmYoZ",
  "key6": "4oy316aow6Ykr3BueGhAGd2f4cQxKjkdb5ifkTiHTsaRkwKcsSHJrscFVnKs6twceGKHyr4efHQhVhC6BfwXc4mR",
  "key7": "2zwiLPEfV9xuqTcVncFFuQwMg1yuiepThcZd3o7gMv5EvxvTd4y6mKad4w91wsUD3faP7KjiNDuh5j4nSm9LJ77x",
  "key8": "5ts2D9ijFHDBbTropbbfrJKeU3CF78VGPAxqFvJY8s1VezANbhUxumSGbpSKZtS3u6294W5fWYboSSmFWkymJJoy",
  "key9": "nS6chPPMh8eDZV3PYE1eqNCUKSdBRT7vaRSyLJTF7wVjQCs94FwuU1jrs56UdnbYjTJymTGNTymBfEwRf2h7h5q",
  "key10": "3tcwJnDUb9KXB8tNnTN8BgRtjKRf7o8Ntz1YcZMG5mup51QhQ6MejCiWfrcRwk6Hins4efQsbFT7WdzdzTGisw2C",
  "key11": "2tXkyt36gVr82HQdcz4RBidHG22vju8SmysxJRAX1QZYa4aKEboMLML1kk16yZ9JfRRVZukMPU2jf87meDYSGxsG",
  "key12": "5sVzjT2w72dEBArnyvM5rD9sGpPBz5iw4dSVC24ewiMCaFwCk6FwhrGUveFRPKJ4B4ArPAsDgH8jZGEZorC7z4k9",
  "key13": "4NQaicL1Xgb3PaLQqmB4XFtkDdvxgCqbxwHuC6Vy1GXGHbsAUVYy7gNhhDErj4L4u28s4MxtY7KdbQoa59GUrMQT",
  "key14": "dJHcZZGZxGHMJx1B4BffxyMpSn8WtiVmrZYm2NbQ5wRWEwbjavTLkzLE4Gem7secvQf7triNYgVJGJkg25K5yeR",
  "key15": "5GeiW8PhfxySBiWvJCmsxphCPvZXXNcvNBWBEz9gu3mgySvaKKWUdvR2on74gAR5cvE4pYESA3xWry68WuHgqHnY",
  "key16": "3m1s9hcXLMwz8QBZV8jWmTKjV3Dzo6MzCPL1rfFD7Saebc48ddT2fhB4NCbayceffQy6caVqh3E6LSxABudGp9Jq",
  "key17": "4iyHqt498fCmYnhrRet32Rdr1PzdqeuhWbaCdgedCwqcS64q1j9jMREmYJMqbZg7tdGMWuY2yMqcmSvhJMhncBh5",
  "key18": "3ShMv97wSeoPmEx7NWT46nTN5XN3Gf9GUUYUBhE4Kc6uDVq6BuMC16PhJp2TLkaJHo5BhPJVGjxN8tHegmNseggB",
  "key19": "tLsC4BBnfZrDvkAe5VmfKt18MZvoQVRsquakjMFE237a21EeKwrWTatQAjdkTK7RLb9KeSPCdcFUwbwQxCzK7V7",
  "key20": "5HhmswuWnxEnX9SqajQCeBmeBN8Aja7WcL97gwf5NuXaXXnibmzBxfyDdAk1VBv8cSVhd8TRRxz2Hn4wmKifkMdj",
  "key21": "3v58MzGS2iXvCTdsiWgJchgBcDNarx4DmfipVK2CNqXd1s2EPkgD17mJTnyJEFFJHaphe24rpTbxDH8v78n7Kvge",
  "key22": "43H3xk83vLkY2HkurcJfFpS2tMUjUuxCByfLXpmZadNdxNQmLWNE6MTNqCvJPoWC81rg31CdXxWCTp41hRxnwAwe",
  "key23": "64gNbNpSeSJcYZgQG17mukLcvvbZkjBZsZ3e82wcPmEgaF1vo7nZUdcduYXFsMugy92nCwBjgDuiQLRsJS1XTUye",
  "key24": "2ts3SHwn9HF24nxipxadfnEewcLLVSJSizr13JM1XveNgQWtpXZQimi28pCT3TkyRW4itGMhzvpPfNZRiovnvSAF",
  "key25": "j74XoksJAks2i24BJgVmWS9up76tdMxQZAKzaSAHFu7HwKpvcQKYG2hRrbo97BoUVvqVo2mU7mkrvGRd4Wfzo9e",
  "key26": "3fiqgYoKftuRFyPtqt17vs4LtvbD19xUTVAYUySTwhWqc2tzQ5sKQaPJnuvXxHxnSaNxeLXkzX2wvTxJy2qrzawK",
  "key27": "2U2aLrZggHBjSq7WjTXqTtJLqpnKNkXyu5v8MXt9hs5X2PCjEAGhrijjjniVGw9miMEeD3yd1qEmRHBw6ffSqnWz",
  "key28": "38T57ejPWWaULLqPcqqHbxSbxNviWD8mSLL31NHZrsoUKtZnec37wuxqzJrKbEqzk8LEJG4NbgjVDK22SqjNAcZH",
  "key29": "56tkQifK4vEpCuBVHJVRvovNeCLSgfsTwkhMr71oDkimNNP2Dt5ZCVysy1L3o6tVpaxazCDymnkv5y51W9sDMesV",
  "key30": "59VYDwPchiGmaYm6tEnvHmwDbVYeQPmrntQiN5bzkDzeFN8Hs4NHtZXhjZiEgDdZjyBSro7ku49MjP79KAGmNZ9Y",
  "key31": "2rRdYZxZA8nUhmLcaMBpxaxJtdAUfySeN1d1eJJmmbCXn76tRoeiLq8FdTfEYxnSgp1iyh6yqSe2H3TodsPK4N1N",
  "key32": "3tDgzCZipMkGeRK7oB8V8mF2k66sUEQpWqFzHg2JWNuaGPQCP8uRXiTFck6rzDYJauyNBKebF34iN8kfuMztBeEV"
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
