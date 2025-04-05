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
    "4LkYE4buKLET3LGCQfTBXy5FuDFgx5zGvC28BHZKkacP2nhUfBkkx4cUmwJvBtkxMUhpHHfNVGVWipucR7GHo72D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fXbLJr4RpMuJEEQnAUF6XNHhQauyyHpX9NzE4xpyaCSj5JcFrXJcZgtNd6P1EuEeXehbybs3fYSiyzw4BmjzUs3",
  "key1": "4GLQp5nNbnpKM7kdrB67o77dzBG1nw9MvGjwTQbxFkcrUBtkbrqiJVUxK7LM93AKQ1pz2cj4GXLnpNnjpt4TFxRK",
  "key2": "2pv14ZG6vhKygKvpgmHLF37wyS8o8ZLwGr1wcGEkfZ1jXL2LvKZcWQAQCSvqss8G6q7MdkGjbAbHz5bm1bwbJEU1",
  "key3": "eoaPk3p1WLFieUgCUf3YGcsRjsjjR7cWM26AGoMQ4Af7fdS4sWb79VgLsSkopDXsXq2mRDBEHZYzwMiSZRSC7xp",
  "key4": "22fjraYjp89z59BxcetaBt9yYcZdKUqn6KSR1NXzzabKwHQcHTeAAmz3WW42jZqnkHLN74vJRhdtUzQFMPiGjXuN",
  "key5": "3V9GcSf4r9LcXhzdxCezebqt4482fb1eqypEiLjDRyrz1ZRtdqX4ZWHUsnHGZ3CYbfciQjuuhi573oBoZg9MyJFX",
  "key6": "2sjUYH6EbNMba51T8gExnonvmxsthA5U2ULNjtA2KBocG4You6j3xZeSqnMwor7QP1qiiECp84cYXu96jsLD8sxn",
  "key7": "4tmYmMynj9no6SYqFWk7RQoFrSxhneNg3H5vWPovzMEu8LEnzCuj7Xzbc3YuAUHjKBn7rFapZc9s1RFTnLYHA2uz",
  "key8": "4fbbT1XLuJtNj7ziPcpfpH955piAZKZ61dhdyth7wNgbwJEswzWnQKaddsLwfutH63QfyeqbuDmjESV3ZY6SH5nT",
  "key9": "3ZBtiUatCa3jGhGSBv5qLs18UtsidMAryERN7X1fEGV43Kjs9cXKnisKmLhCMxNMKWa4V1zpnGhg3Laeovt8PSp8",
  "key10": "2WkeJCY7h69wKm5c3eCrSgQZ6DELdsR66giwSk5Ev9V7WDhmnPtEYiHo3JbxqVVEvqM1GShYosv1aTyya6Yq14Ao",
  "key11": "5isoestB6M693QSq7jngN8t7kyfUyuXj3ahYEaAcEvtXfz7bkBCT7r6gzvPe6qDeDFFkj6UFt7CojcNUxfmowq7F",
  "key12": "5RRcGEYbuFZg3kHFU1hfY7ay1nekCahLQrtF86hezuVZQsjmYguikSDc6NehDMjn3J4Ghc9WgaAUmpPGNGRDE7TP",
  "key13": "5wxX3vArUpNwi2YFeWGE2BM6vwdWqSfWivxBNLvvrP1HGcmZPTy8RjpcXwVZUnNgjtPLDZhovegT1kbafXXfBbdZ",
  "key14": "2VZBEEmfJUr6LsWdMzB6GSk3FnfZmVktSXJfBMYXFErLJ8fC2cTnbU3W4zh8LUXm3reNsCZd1dbruahLCYFztCeb",
  "key15": "58RXa86rZFWJ1SxMLt3hqc3jTJJwGot1ghi1PFQjpWPPAYXqsia2z98t9EUrHhqiDveYwjXyRN63dtir8cEJTro",
  "key16": "63dFYssy5c1XiSD3TtqjrbzwZFzVjPtgfibbuoLPP3cHTjGTQrMtD93mKf1bbUQohNGv8XQG2pGmGa8zvZ4utXf2",
  "key17": "354WYaysVvWGdWPN7v4wDthngp2amrpvWJJHFXh82xGJKf6VsTPxLPtv4JgnUFz8WUaKEhwCbVCWmMgYSfYrkF5g",
  "key18": "4UbcGckhy5mfhsKKnszUbhyZ92HXVBWP95ySaPD9mVWoCofHEg9EMAkRLikNFyUhMLTfn7ACu8UTmN5N3ggcWhhq",
  "key19": "2CcBaUwPAKkWi1yRQw5otHhH5tdS8fzKhEXSyG7pUzL7qXA5QGjNR8ihCXgJmVxzvcpkwvqc6HWKcgHU9tNNgwE7",
  "key20": "2UV5eQ3JAWTTwoy1VJvYAiUa4L1va26UecMuZGQfikemDLWP2oZuRPLHXduSUyghMPFKYngXebgXkTanPHZap9pU",
  "key21": "3ag9hAoM4Am4YvENKjUq1Abbw9nE1uWdtLfo7Ff756hASJaM3TmSw1TzUco5Be7TdBvxiWKdXSVSBVVEtosAvoXY",
  "key22": "3vGSTZSvHQhuTpXnvwrjq5iWjLjqctEjvBo5LcZmGoWWTKewZCuaidTcT51Fk6eZmGAyTVxL3VERveTR8D4HKqsB",
  "key23": "5ynviz5Cn1znbM39ZTwyydj96UCBjTuWVnazJBynmu6hSEotCGeEN89FT1FaZcdu8Zbn5BxwtQ5mNJ74VqYSYDJm",
  "key24": "5SkdrTDxXmeiwwMcz1tWWJebV7pmFHrM71QkfuBeUEcrCFtL2qqVQTXuFB36vfgfRYWBojJWhgovfrv2sTNHwgRC",
  "key25": "SGz7BgHhKTDfG6NMFo3sxW3cEFcFeRucXqrJaQoKA2oDdCbCBxmvdXbw5UUZs1fsRvM5kwJFhAdz6zLLg6px5zz",
  "key26": "2LMtjdXd2ip98vK6ZNABgeXGQj4RkEw4pVmDS5btF23aJwDhtYMpgsSAkj9THmoRjJE2TACVYWKbSJ77tvhVqWJB"
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
