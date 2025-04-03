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
    "2JNjKqFANXXbFJF42MSsHE1wmHeZt6NocMGSBMZwTYQAwLPnewftLdhwCo6YgXiP8ee6ewqWBZ18FkcfiRcGGhgK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41WM8SjAg4aZbeVSq92qf9ionNrrxijTnuFSgbQqWZZ8eMrTjGV9u8WXQ5QVHNa4uNTmoEzBhJc58ZRtk9Wm2nbE",
  "key1": "3syXd6jJsPNuayBZYTq1NDk1FPgaCYGN3fp7pHnahTVAVEYFwxWEusr7xz22YfiJGqaicbsAJakGJJrHLs6B4MaM",
  "key2": "4CLxX2PVfbcbZQiJFU7xkk7wb79w6pYj3TrDZB8fmSWCaXWbQnpskqYNoptcyzerEnZUo4gBroTa7rpC1Sqc5XWk",
  "key3": "AJV8rJshPphCMAdmpXX9iF8QY6WQCiZTzgaZEN6vi8odYBk8se7YdjSgyDu8bs1XshrH12JevTew15VD17L4fm5",
  "key4": "5URqojrRtfEXxfd5kGChSaBWsyVerunisWKfvZH2i52ebvDAYSNAxcc9wFaRLgxpWbEtzYS8MGfV4FTNo4pWafXQ",
  "key5": "KADsgt3Hm1eAo1HBS7njPnFFVgk5pd1Ynwxk65uwwcNZRHUsDt3fUu1Yzmi73hASisrCV2RDkFoLigtbuoXL5Z7",
  "key6": "5XFo93A29ng1YLhhFK6eBUaypEF4fCxieFo6S8jJJroMVd8EpvJxdxj88fQqjV9VxfUacRu76T72KbFqk9Kys6p6",
  "key7": "5m542DDCTfhYw6Etv4BMvcT7tNV5DedjqbLr4fV68Wc2FVioQQj8tkXnwYgyrkYjtw2TFuAz6LvTKdxEcPghwFNQ",
  "key8": "3K4pm8WPrQdLEQg9722UkyhFqdeUeHYkhBGuWFFK2RkX6oCAW4uW2NbJnEMbgVobCTaSRNvUYxqQ79MRr7ywPtgS",
  "key9": "VXrM8bDuo5wCDRhfV5Dnuv7T1gpFcHHuafX7ynpCrZqTvUmLhum5nt6irFjzUjhAU76MVGQjcq1LNFfTsRBSUBU",
  "key10": "4mPz6TkeuEtXX59ZotZy5uDBf7ng1PBNC9weeVRMyZAnmDYJx9sG86wTb2XQ3ZfGepZwHvNkwhzS9VptFDxBxTv1",
  "key11": "26ekyWtZAEdxZpTb1VqSuTtkpX3xkW655MJMxToX3Ep9FEWMsEievYsYR7q4WBYuUb6gAuR1Jce6sgec7Gc12XwB",
  "key12": "5DYmfVd2RFcdzJHEoysJcrVjjpadCRLqtZPDvYukh45XDG5su7H6ziq9CbpZeB4W6m1D3eLWHfwuuV4tsAfX7tuq",
  "key13": "AxAdMex2Cokr3bqjNRGXmNhDJxRry6mB7zA9h15ksGs7kqz3LvXsWHT3Kpx1M5GoFM6RTPnHR5EJWG2EXuo8tDE",
  "key14": "2CtCZFRdAt8ByR6eVDgZjniteYmD9LjCZtWyPYw9sCwp7hT4pa23RpXnzLtyKJ2PbshbKdM7D2VMjd5miRFfjMWU",
  "key15": "2sm5VifK5K3UM89nPpUrV1VYaDvDfwAadkpGwfnhN4hWraxaQtZQ5cVTdxxXC9LShmbq8eo8Q6rJPCbY7cskYiFN",
  "key16": "htoDKF831CfciJtiBhpY7zSgmRLRdoHtSF3QCcS9rTCNcTvymKGmHjt7tT62wriFENV7BjZYNjt1SqxZYQMehXf",
  "key17": "2J2KH7dvchdf7tcPSBwZWaKHbgoPrpCjCH5abWSM54tXe63YAgPJVLcJfAUgpVPgvvfrNUACRQcajSZtx9tHucAA",
  "key18": "5uKg2aTw6dci1CuKTS2JiRfJ1G8VyZJs5whfpTNecNcCprUE7Qo7Eoc7wUA6pFzxURqgaeKuNop7KpEQHvTx9SXd",
  "key19": "4CBfgc5CyYyhNXn4KqyW9aYyeqjAepbEAwfA8zZbhY9bCz924vHDFMY8cF3izT6vgw6Fv3htoWSS86zE4t9fvQ3f",
  "key20": "5z57gshZjoFbyszZtMBqm7WQmFdBudGVGXY9xfvWYAx9pR8GQG34D2zc2BGo5LoRziRQuwHq8zkVTK2GyAnadqgh",
  "key21": "3jT6x4T2444bmBxb3V8XAvXy64nstqVz3udvBAjJXL5gALL6mDvmXVJXazn4HYSGLW9nKt6MhgP9eP4iuk9sAG5h",
  "key22": "4xfDWmuaH1E5Bi4qqX7VVRv9GZf9FAN72xkUhzNiWXfh5N9phMEyTxYFGYRqX1C1MTJk5cY11D96YEBaBcdArCBB",
  "key23": "dcxYAEyc84pT4WGQVfjbpfoGjmNAUXH9fKtb5sFbPZePncYSxw1zJn7XynmS3uAdbHfZ1Ycr3Tsd8qvyEimDAxe",
  "key24": "6pV9QwpHZxG7653bJWAUhNHEYinGy4JLSRCyqKRF34WPDTwNfH7MsTm4uC5YwM1mYchE9jNMBCtquMydrbDjj2P",
  "key25": "4adbozoG1pH2ZhfC2MybwPiE3sqnzkRyf492Ag7tWWLAqTKXCFoXAgW4FVtmQqCr3HdJxntXk9bPhuiNEaY3sgfz",
  "key26": "UMxSe8bbfKVtbuaRw79758mYzNddz2ycPpsz4czDPevgtPrjHcRejJVzwbJCjP6jcB8c3p4uGH5GKz7NXLiAFES",
  "key27": "4Qkd5WfjvFExmXKSHvkf4bKTsMp7kpSdUrk6NVP9vJoZeWjqerLCzCA8seMta3pf7tQPDn7yfsLbW9oggFnFZuCh",
  "key28": "3HvvbWYX3fap4AoACapZQHsoYkYxS5TSTcuC48vzVA8QBGJZ58a4oPXFwYcibAZQUeHhiDrpuobh5YseCHkKCpuG",
  "key29": "4myDqfEPGUpJu2Vng548oFX4kV17RPMiNc2Q5ztKgBKJjBqysyKuahnjyBY2sUVosBL9YCkDT3WvUHjpC7kZA3gb",
  "key30": "5vvfQ3pHcnBEod8M8ac1WhU71yBJpoiUSGhtwhW5oScD5zQfcFcnvADCvQiGbSvgUa3NxLSprukjPHJdcc1JJnH2",
  "key31": "5w7aYdvGmqSZZuxmDoye4mofDadL2LjxT44zKAWxRftrVB2ggEtAFbv2TBCB8ATMv3RYCL2yz2NC3iTJKJRXApbi",
  "key32": "5J3cFVrkX3q1LFdNs7fFdzv7DexgM8FMvrvUBpVrJJz7ZyJ8vHptZSz4qthe8zY8hrDUcKDXZSaoLdbpcuQzY47g",
  "key33": "3GsVG3qpgNRfmKDtwvPU3Z5poUuSvY7MTTN7NLuNfD543hgHyYnU3dRPTcxJLWupFhQEmqeAszQKZDfkUoyhh6vV"
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
