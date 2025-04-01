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
    "5Au8XqaeHS14mwUKRcddpofxFZhJiEj8YzAJ6yhfMR9hNAFkkzJybckAxp7UVHqzFFWvJafTNxnpBa8eUgk9tsmi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oFLcB7dn6enBNBxK5TLVo7nMTAhnD7KxucuXmtk43QKAwcKFzNJkhYDKuYoJ6DpeoyTaoaMbjWW6W94TTHNYE1r",
  "key1": "5hbzBKHCSHLf5MRujzV2yRPXUpfJPQsKappnZsre5AGcVtQXgRwywr6qEcsc6nJ3AU8AsbVN3byRNZSy5ZYbRTdi",
  "key2": "4641LBqcvXqX75HutnFjSJGjXxJWRygCd2HjjZ22wqQeqNhsbWtFpbAWS3vJdFqVKXPuvvyw7QgWaeLcGGnKrXfy",
  "key3": "3yEX1vkxb74bFd43KTUyWksBtix9uwu2FTFUGBsZDPC8fvExgx5gLRgdjcoxv2McRUfYMoNL4wMAsLJKJxetvQPN",
  "key4": "3dUNMnKFzPzdSV61zJbJzoPzdLchU2mJyjopHEcuXEQfoEF53NCHtDsDxvRcNrUnPMCNmwHb4zK1UhtDsWZNCXEj",
  "key5": "3ABsEXyFa6vUsWDnYeQ4cBMDPs9bz24vGXcXEN2DTMhAKsbNQC2hHBCAHJwombJjht277hkMD11XZizcU8CXZiFX",
  "key6": "3qEV1rxLk1o87n7HR9itWT4f1sjZWprWVCMDQAHDBPjtgXTAW6CpjVeAgbZhTndA2BP28wBSGRL2B42vkWKjBR63",
  "key7": "4ZdpNFXYMXAsRhNHDKRayNM4g2JZCmLKJxY3ex6aE7hySpUMUG8UWT8gbSD3MnZn6xuyjvskDhway51qH5hqosLu",
  "key8": "2Nsbw77GZEGVSWB3CiAtRCaA8uziVQ6oJfyXxqPowbfAskoUPjKp43L9bp6ytFmNrwq2F81TnNkfAnyvEGq3gqyw",
  "key9": "2SCAtJF1qkzPey4bX4o3UREmQVdB7kYomvXBR3w6EJJfSY3EraSh9R8RYCtfZox8cQG1S594fZggimkNdpdYY5Gd",
  "key10": "Lyb6egc6ZgSEaPXLPNRXdDFxWxbkknz5YmKAM5PTUEGBkD4da3BB4DQQ3jatrCqi4uBetQnXvKRsSzNHC3JZDFH",
  "key11": "3ehiDtV31NjHX8UANR6BmdY3aputLMJ1ZtRJizKCy8mUa9Hg3wr7jQ93aAAud3829L5Fz1XmgnNpda2UygBjqysj",
  "key12": "3wEeWYDaPNyBMniUor3cfrSU2jyQf7wYrbDwWBTejB8Q4FxSQruXxifKwWjyR5771dsppHfh43SUZSZ8SRGaPLsZ",
  "key13": "58K2o49poCfepZ7A2nm1yMHTsppZvthEiZv1vRuppdt3GQqmY5U6A2ED5iPuxNcFPDHaRbYCS9rCb5pag7SSEEoH",
  "key14": "cTQCc9G3GxCtgWUyr95VGmKM52gQfAMemgz2EcFubY3XwVeMeg4hwMQrxEAwFbQNV9MaHjkWCM3H1VKcZ9nGCKj",
  "key15": "39dzd5Tni3bVqg36Nkx1Rw176Bh6PnKYBP6n13t8g22Qc3YerWA7xniX26pN5B6hqmXEmfJXYKvNdcB1wTKkfqEe",
  "key16": "3TYzqXhYFRtYxrNNYeQwfERGfsWDe6WD6q632xDKbHr19DU6Rnpj3tpKzdaNrNGgKC2B6hWpeBtefGzmv3bnYFb8",
  "key17": "3fQAScXx2qX6ufE66b3xXmYByZs4zMoWpFvFJDUQjoZBM9u5F6ZcdGgXhg8Gonxp9vfcVVLJxZBnTn9qpq5mTgYx",
  "key18": "2enJg93V6Lj8WdaWuhN4gt2PmkhjCQh3eUnrj4Nk9keTNDBo4QwG5CX1uL216yYXCL3EL7FCohFc9nrQ9JiLrwgi",
  "key19": "PWKYLVXF5vocsTs1RiDLEnfJ3e3QHUq6UVsfpzwXzs28GmigmC82bgjiPhNwyNcCix6sDhFvZwUcKpfBiSJRcfi",
  "key20": "4L8bomPctRmg8M6E5DcYS7Zkp5bXgymQGxswroXvGEJR3h8weJ4BdUPQVD7xgAtP2hMEVpf46QF8pk6mBPVw552b",
  "key21": "5JtGG6Fw6dLy2SbZdz2957svuiz3d3FtrsSCBZ9s8Ptaoov1W9DcBgo5FmitE7yt3buKPVGrpyam1LjkfwieNuir",
  "key22": "2RLfmJbvG7fB6zgfoChLRW2Y1hRitUmiTMEqd9rR1uYbtyTFXssxq66UPpH7yaqrPq1p3EcaqG1BAqjTELp1z9if",
  "key23": "4L4DvhBr9C4JGjXBR1FPj4tSiio52sv1pYymSBASgU1jE8ewdKZbCow1U6YMR9Rz7jSPaUXnvJGqGcdUMvTVwVWS",
  "key24": "k4B74Kesnzt6SBoN33UHmr99bkgC36vJQxUof1vzB1F6EswuYrKDbd2g5BnmzxwPeJSGSxpiPG3V89PoG8nHSLv",
  "key25": "4JtPaQZvuSAxumJyKga8P3muUm7AMbzkJAgenZy92Bz1RX3KPSZtbygegRPKQ5iCjXbGqAHcNunL5NZgoxxwUzMe",
  "key26": "5quseGySum8e7YtDviF55KVbP5es4Ei49Nv8JCzbTdKHSKcVNXPBkYAFHt2EtSJdaQfHiHq5Z5mtrp5ACvMkMW6q",
  "key27": "3YA7KYBN6orSyuMHXC57h7aei2hCft4XWBF8psuWCPhppEZMiDgx4RbLxoZXust3fAxiviZm71BXYLnFTC3DeYwR",
  "key28": "5PyHVY7FKAxHvxWqYN7BrfvxSPTtnJyJbehMGmxpXnxtWGbprDsvpLNqa3YY89v54RcfEHRwhkTRugo2LFHSsGtv",
  "key29": "2LvMBQkyn4Xz5YDZAhxTd22BucBypGk4Ft15tH5NwK9T71NPj729zD9xgVpcAQU5irK4rPXXhRtoSeJpPPRVsUT7",
  "key30": "3Ki8tJfJcXUEMXkS76KvcPJ5vaZaxshxbvuyKya5e8YFXJdxqWr4W4AB9fopQ1BXjExW9h8eugiJkeiJooRuyK6j",
  "key31": "4ucE9ResMZm6cAJ4K2pG52NYb7rNEAKXDLkiFv7KgodykKM723gZ76rELwMZYMuM3cWSC3UX1ykewvVLrTx5k9pB",
  "key32": "3q3qMRR8CF8UAZFFFx66j4G2WtJDDwepPGcuw5ZnE8XGTmwZ6iimXd7vBrVxZ4KRv9vLTHNqAVyn9e3yqh66xvNX",
  "key33": "44qfaGsbT7vX1FoTAsapX95h8FqKm8J52ETRnN6pfEtUvVQJGV8vRahzmAeRQoqBXM9HZiPVSdT8qryBBTiZ3doi",
  "key34": "9jEv8R5QNMMS8C7jeiFFomTUWf45ehaddcLssoErr49LypZrE9pzpynbhUHW8HzJ9vjL5RPostBAKwEWWKC9iGw",
  "key35": "3WL4JBktXUE7r76CgKEF6e8aDEQx7BxqBWB5AKDevofJzsy4w5rdDfVffKgny7RtB9zYNioyD1AofLoUmJn3boQ4",
  "key36": "5CTrjzHKt7JqUacNXEwAJLAwNBV4gtjDBHRmHGD9fXWp12oSyTdGDj1SDUPjqoYzJyhnPVPTraVdxxQKFBjHunF5",
  "key37": "55acuRW9EG4UHFW5hHKyvyNCqSGHvviiMvdVCzbbxR117xpwzwoxzbK3Kw6zo26QZt6FtdaE8zr6Y4hUifsTaUN",
  "key38": "5J1uxBLYkVmftenh49EPgSy1VMHFkQY1iPB4A9gEz1uiTXAPfkAR2ZtjefiSgxdWJmj3T7hTAK5HQp3gDTQ8dxML",
  "key39": "4WRGnhsJwruESqxR4SC2ZHDoHuxGTKLGcwCPVtMyke5jc7GX6HKnY8NtZBYAbaHEcYCMJARWjPNsitLum6xZxGQ7",
  "key40": "48DPfB5MSu3gRXGJ6nLHHFSmDZsfoQh4hmYfmgEQHeFUPXU9e58jp7nWuaedESjd8mmwTNoo4fjeCCPAAmfNNEFq"
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
