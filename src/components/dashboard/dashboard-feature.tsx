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
    "3fVqM3D6Tu4snXeHrU23WNxrXrGECrGt73oJLs8nyjrY6NwhzNZmxJEqYWM4BFFbprqN5N6Reo2qmfpkjJa7KeA2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fBq25zidwYw2re9m4yRPH8qhXH338Wp2qViKYe2JtDXMjpEHoxMtbJb5y1rX71pvuciLZUsoWqdREe4EqUEJCtz",
  "key1": "dSK8qF4wKgwdmt1mM4R1Gx8CxHJtNasUBCriP9wPAdo8xBqp63YSjDQreBZ2okgETg1XxjfQCuTYbiBSzw5ivkA",
  "key2": "2fuzvJCfp15iB7xZ729temXvfjpNoyeiWFv7UuPkQFsLBi5ZqSQpVjLysuhjf1aPzZvR4ckXXqqeYtRRFVugYdnX",
  "key3": "51JzGvbpf8qz4ncUjni1p3B7pmY8Udcz5tqMzAf3b87RJuY9dxr5CuyszogDJV1mcfzxhMuPcXiXRBEh2FxCLKnd",
  "key4": "31x2Z8oF9NtVd9fkXnJSQre2EiZaizqUNNhZ2PZAtqBmnQxw6SUVxkfrxfSEAWodvLTs2hK37ChuomvqvRs4nuCv",
  "key5": "4xw193GEZRGBpEeaiwpH9Bie7qoWniuA3qHTDpKCoGB1oVJWQqvDGxBGWhhW5cwrTAxcfU5SvXZVKRswwhbxSdTJ",
  "key6": "5nhRNmLxMNtQ9Uxt3nji1c6mNwJfKTMPufqKesfpqAdJyMUtYLBz8hZRQ9sebWUmRs17GjxuKAjPx5QdB6oaveZQ",
  "key7": "3hAYMiPbJadKQ1kEjnVAspf7mej6imfwg1jmgkgMMDH7pZ4ty7Y3x2cVn6xcBjw7kjaitKEmpb8uKEkcmd24JsuJ",
  "key8": "3Y9mFduZLPLgT6LuVrQupQTb8MmigxsNHPfrKq34TMTsuvyHPaXQka5mj8CowneJFK1NnRvX1dhQQwFNyn6YrHPQ",
  "key9": "5opiVm1N83QPf1Vuk9Fd8KgrufuPmze6kU62zSczu2WY5vJ7D67PQ2fSb4HDRQd4q9YqpSRG15qEva1J4KpbKtv1",
  "key10": "2yM9bsEGp5Ds3D1hB7vgbMvirNHYME7EQf54VNXxQssbzVG5JJHNQ2mUY3fBR2jBPg7UtzahPnAysxDuJ2wTCGoT",
  "key11": "FP1DSoeJxgrPLVrAx4Tu9ZNHS7VNxa4TG5vAL8fzEfBofjYwowgnEMe5vh3tuMqDRSQJuBHDZK2ZXrvgPyAJyhJ",
  "key12": "38vB8xkjtNhr5sPozwPTVYGkbm86jNBUN6YWjTnQccm3Dr5u9XRjHaidordKwcZuHutauK8qAugTcoaVDgZtcCqL",
  "key13": "23A5xiNnV9U6zfqnXVqJuF95FnoqQ9vwV3QVbUGtzuyxAem3BSsYXLgVYuox6woaeCjw5Ad1CdnCnU8RVyuUxeHE",
  "key14": "5AwqmEjCz8CYLfq1mGvAkWDuPp8A6B9GJBZk5quPvj9WCRJoexhZdCd5Eir6kRBthQDjeYBPWHXAech684b6ZAEH",
  "key15": "2ha8fU7iJiR7FmnfEUF1PLryUWjnXGuJnKXgKK1hnm9kET9Edeim1WLAicV8AApggwYRNSAWJC6zAWR9QZ7oL4Z5",
  "key16": "4vX5MENB4CyJuZBhWWhkXs6oUHVupKyFkMFQFMRVVmb6HpeEfPneRYntVhGbAkb5ZLPic5zELgZmBhGJsYHzA8rb",
  "key17": "28vVur4xfg6jkLJpDyY2RG37bbHpdKh2FHdpHza4gZ3gFSj6iuCuS5gBzNjcrSE5uReatMQo3bSYPYPFT1HZ5yJs",
  "key18": "4Q9ACsmwNRQARFvipubSrc5HU64SNCdAzP2sfGtmUofXWSAqkTY9sCfAP8q5ZZG9RvFe9RMswCoeVnCMsFLAoVyF",
  "key19": "2ax5ph7Li7VXrBD9uiRetRFjVYbtFgQThdibu2ggcvbifiZieKaQkwEcPktJNhk3kqD3XshbKjAQQXuBiUGPqMqz",
  "key20": "5VpaRiMCNZrZ92AhrXietsV6fmi6oUbfBGrshTKFeakhmaXpPXWCNqNXdy5vXZhx8HUnt9ZxQYbAppZdu8sCnBu3",
  "key21": "3HeNh69tkxxG7QsbEtvqku3gycCBxg8eeFqFTzZ1TSsEmY7N8J4vsq2deiLsqntkRcepbswe4rYHCcxwczGynVAU",
  "key22": "5rBkYCo12TnCa7GobnA19LwRXs4vVVizFi2emS1jNZscKQwh3pSKqEDULhJRe5gZB6TCrccicgknnZf8Bs419d9P",
  "key23": "2igQndrkWVQe7Czv5iFCBZ7UoaoX6m1oMWoYLAo2wnsWDnhhi6Q2FV21wM1De3irxXcAR45dokQLe2WSeFgNa6Th",
  "key24": "2PXc8zEGsVhEX3QLiWXsudHyzqLSw1j2bXyQ8wgAMxyiHoTNtsHHo6kSj4m9BFzoHm9APmn5A7gGpciWrjG5gLyx",
  "key25": "4JCvjwdGPPczG3iaEs2Jt1oYonpoEuycdECE3eYu4K5L9tpPv5k25tnLeYe97WATFFqS3MU1hNp4u4msWzq89tMq",
  "key26": "47xdKvN1mbfz7DeEwW77wziThoPbaVwbfPEVHZqQXk9WLGDB9MSZdkKqZZbSxgiA3GAbQv7ifa5JUA49Z78q5NqE",
  "key27": "X8vwMGU7NmD5gNVS3HCEjtYRPYPVxQWw77PEwpvYNLPPZVePo7YC74cmzhNPPcmQZ1JCdWoNQpk4yYyicCQjoCz"
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
