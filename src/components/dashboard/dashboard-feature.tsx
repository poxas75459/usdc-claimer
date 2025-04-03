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
    "5foSHwDmLDd2ema8LXBJLvw3YZV2LeTt3qUuCnAdgpqPozUsVrXmGHYJKPMGbctrwbahF3yMZbXihR6bXwUET6xx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5c5a5juWfpGRqnmpFWNnE55XzBb76BaFoJFSdc4sdwyWiBEo92xJ3Zr5auhxebFX6qV2eJgKDMPxoHC9giLG5fmD",
  "key1": "2b7s1CX3QAbtQxynXUBJMYpqiFApDjd8yXhyAtQkrzmuWbFrmEsMYhFRWbm5V7M36YqpN3ZnBYrEei8PLRMz7jD2",
  "key2": "4xXZypC38kszr3Y2Ma3QcgXfCPufXyG2Q4kQrx7DF6CnMLEi1v6NN1efuMWZ6aNs5CiL84KdpVPsMkThJfYB3gcZ",
  "key3": "4Vzz5EHcf82oBTtRsSCpMXJGtwfWUDot6URKEKWCeGtvoxzgGfgDx6ADpJ3VXwfqMaeTDtjedy4yKN45Znd2JbKy",
  "key4": "2mJ2YwNAmPrXQfVfTqMBYP2caNE2HMoP52p9bbEKjm57Li4HdnYq6TrMskUNZpw24mbdJ3jZYJAU7xT4gpVxxxvT",
  "key5": "2mWzbD2dy9zxUZyQZ28kBTvBQ6hsgfeDxPyjcLQ2R87sDqCL8QdZ7Sn1ZNTAwR5badGKADnFmwJ5kdrHJiEHGKfE",
  "key6": "2ZU2dB3FyXp4D8iYB4UeQD162AbjvFioU9cyZ2Fk8tY45A4U3hhUKApDCauSCBWV8niJX4JvtLWLpRxtviw63C1y",
  "key7": "32MiBirgJxzCbewAEVUEeAjux5WSHT5oo8aE1GN1GVpNoFS4TZTmXZhFDcnHmL1jMDCVyFAdY4wpdKhpiroMiqRU",
  "key8": "499zJZAUjcW8v1ptPRUbuuwcDCshaTE3Wi4ws1eiyJ3xcqWBqKso9gFDwQ7CLo3krZ8ZParSNnChRZ8duhH7Fed2",
  "key9": "2ZMMCqsZt7QeurBDz1sHRyUTM97huqJk3zErBwXKAaLrVXcVtfWverVqZkakrhdqFYRtmdu5sCgveAL4u8LXvfv9",
  "key10": "2Mhv8LmKQGWKYAuZeWw3EqRjp2gGqEPbgqinFhq48tR3jFe2DTRqRmVg8mp55NTqrCPBgzFsaZAU8BQpiWLeomxi",
  "key11": "5yV1wpRbYFHTeu2wvYyn45j8D9d2nF6GiytHEwS46w7A7d6FJ3W9ABdUoqFb6d2GSjeN2U4cc3XcT63TNNPoxf4r",
  "key12": "AkMC6jKZoPtiU35yo5Ce1VyCTPAPGAFyxyHsYyJnny418zNVx7aq8wXYU7QQjPJJPw1Mp8tYdiRoYWcDPiYBKXB",
  "key13": "3Zs3MDpRU1ybVesQ7CutWrQ5fEySu4TKP7vgo7d34hf4HSF5fbTzuTfSUykfU5osogsQstEau6QaYQ25eLbFZnxe",
  "key14": "3MGdjDgm4jcojtr6BiC5swNm9Emg5LzGqggdMgqygsWnM9xTTz24rYw1kYmBK3Y39bJTV55UbCVEqksJfaie1PaQ",
  "key15": "55S2VPemQenVdALsMRsHdpgoJ9hqYy6qextAJ7B7m2cBgqVpDCKGxqxp2DuEuRv2v6RqFG31PpCaesi9nJ1hrVP6",
  "key16": "3aDxqPPsmQ6Cddxt8icrffXaEoybdhV9eBuQT3XH71idaBzp7gbduhhALfU5e8xkWaJLemAr8N8ZqMhyWM6ZygJH",
  "key17": "2Wc8YrsSH1XH96XYsrbztNsL5dgVATt5wNGXnxhK2jk9o7wox6vU6eNHU9uBY4UyUM86dzqW9sxQdSjoW75FtsZW",
  "key18": "2ATSJJFobyB68LotKLfuNovyXfmsfLiFHBeRxgr3NezGnPxBgJLQBja64cMugXCgUE7w7FVqGeVtqxh9QQhwhHzU",
  "key19": "2vJfpSQ6UVqjyePWWjY3cxGYCaPqY1DKJbFmnTGu63GTEWKKgKUqRzVovV4QLXjuWMBWpmumeT8uiP4nosJZjy88",
  "key20": "3NRyYojmxMPVZWz9Mo6DfWmvB2eZmDrpcejpWewQQnNhTd13NFM5KSiNJxaJAyDPFyBqs7TJpRgeezoXW1fZru8M",
  "key21": "2c7QyzP5txLquHActvjt8gkN9gv6DhxCf46NW6ygxnB5iewYwJucZXk86KrwnzXdAxXKSyBt8YwMNbQh2MMJntYA",
  "key22": "5vEJRjbvt6SL5C4JjmzVcb7v93ns834MhpykVktZYtqywaMmPK79kTN4Rk9rYWQMb8fE4n559Bdig74MDuvRAV7Y",
  "key23": "3pbdHFNsTniZqRv6ksBbfev5Qhgqm7QsiZogbtvoqPCdPU8jxrCbkN3MynthcALDhAijxtY1jTVKWzMUs1ogyv8x",
  "key24": "52vsTbS7FUgmqSBTRL476yFfgogzjZKrU1QSvgajXha8R4HRiTJygmxJMEzeLkB95og3JA2hqG67GNUA27Akq9m3",
  "key25": "5jc13hE3j1JT7ARSxVSkpVYbQWG8BZZ8a2HSg6qPkDJZrh4UQNrgWpxoUgTpWGEEjxCNeUcmaobzuD1WeuYzG22g",
  "key26": "28TWEfYMzH8hVETkb11GTpwLTsaRKCnDe6b67AcGp2pQqRdiSsPyz5d4ESq9ioCWTvVemehUVqnW4hWqrdceaNqr",
  "key27": "58RddFzwmvn92Eg7Dz8hrPRxBzrLB3nodFLUf4tpx7PnDnQPPxNT8hRzkBVKDzqsnodggCdVD5dE4dA9k2FbFqTp",
  "key28": "5jfUWRs7aq5huVnMcXTYFwENF1W45tCiF3MYSpopAUabMBPLRjC5S9BqHgeNE4KBthJqE7KVPefCoBg4bLu3ngTq",
  "key29": "5SBx6Q2nJDh7wAwSnxLnjYFjbnXmGpCdeBNMfmcAiaXh5bhzp9J49Qoo1QMRJhjjrCbacPgSvvZjGU34zVxNSHtW",
  "key30": "PCPpknnyXgZyg6eGN5Kn2tsfDZ1rNJHmFF262ybEh7dqCUJptKgHKdALd7t1wHbZ4FFM27ACgDsi8s8sq1VKvPN",
  "key31": "36RPXXRavVZ83EQWZFkbaEtjCKJrZjHKanuFeznSbzPVir4ZG8myvLTNqDAifcD8HwuA7BkL3cHw2DPWAdC9zLrW",
  "key32": "5WNHD8j8zLU4gSQ4XoTrBJGvs448MjxvHYrt12wwy1ERh1DG7Tvac2VqXmCf5zZ8279cHF6rXdRvtYm6WKMEaQSP",
  "key33": "4quSNx9giFUTooKWiM9LaoGw9ZKqHFEzYQheDHHfwhK4HLPocPqbTgFfZ3f47c9WLainp36jmv19SP6PMnhzFwx9",
  "key34": "36mCTMXU2VNoBP98oesMbRwHRm9c5LtCKHp4xUdNsMmEW4QmdHVoEXCkzSJCPjHAGAWwWtaVXecSYafLB3f1UAd8",
  "key35": "2jDG18ZB7ZJPGg5AZDFjSQf39s8xQA9sGtHm8PDmriYY9ReaK3HhUvP7dYXqu82coiv9ADSehxnt8WXQDpVWS3bN",
  "key36": "27G4UktHBgdimkRkpzyTfx1bs7FCL8UKvkfAiJnndoJCyfcLFMxBdbT2fEuYdvvDBHMtVUq2EaAxUYWxZ6GjNfjx",
  "key37": "4YF7gTSPAcBBAqoDsJKVDCUy5bJ6ymeZMhnFWJ5SjTCCam3198GwKoy1wqZHVJok5Ud3mfwmfAgd6sgjpsknPXnY",
  "key38": "5H94TG4ZPiU5SGfWK1DJ4eUNRBNFWZXYAdxAsXmVKotywAfVaj42bGSizyzwgGwUkSQbC3EBDcoLYHsikw6dwF48"
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
