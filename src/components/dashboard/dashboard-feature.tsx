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
    "26NnkcXQw8c8JzL9gFLFwQFkCgQzrBaVfy9MdPMktw2ucRR5ftKafqx471SKAFRrSVCg6BFEH2dE6NgncTosqVbu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ksJJajC3uMjxTmiDgoqnAbrQkGcX4y4BNWuRrujfNCQ9CVhuyY8Ne4EneakhojyW3fXGsifjm9zkPnwW8cQqi1q",
  "key1": "3LABAMiGsBmMQvqqkqu2yYuNy1uA1RRcfWfbSj4iUK53CmXnAboAdZ3p6N6Um3cXYPy5rMXV9NQu8M2RhoxHuCTj",
  "key2": "3cUyJwwykrHMQRJRp4tPjVUUUGirQ9E2WXye4P84VsGUetB1C1Pt7sArfuncBDwxM6QEYaEAntsGdU5TnfTGar5Z",
  "key3": "5MvekqQNEWQNJ7gGfmKiugAVgqgcJCAwAYMyVip3U1yHRTWYKUdooX5raz1uB8NZbsv9Diw14j8X2rQHcL3TSnbJ",
  "key4": "RVXWbrXRXG5zzmX1FWvCWv1NdAUPUXL6nWzDw44news9E2waQhikH8d6k1F95zdsRPSXxZB5RNsnvRQHmmETrAo",
  "key5": "4N6N4ThdAUNH8Ao8V7JRLC4W7YhSiStfgww7BHNRwGU8g5jzQ1fNyGKkbWPzk1TtuS7TCXsx6QcsMmCHE2QpxkXR",
  "key6": "55zYUtmUwPFTCb5HoxYweafh4CYZHFEyo5K6mrA7dEF7vrzbuvXfGURvQkgcP7rMcV3toQU3hT3Kq7KkfvKNFgUy",
  "key7": "f5sq8zeXPMcRFtgYnJYXe32tru7Qugg9swoWQ9bW7G7sYee3Suna99xfENEpg4Ve7f6NCnniH3jd85NyEnAhNpc",
  "key8": "5XShgghQdELyCfcyLs5k6dsPe6yHZJ5TH15wRYUKnkFFUuJhB5pqKsnxBCAmc9BQ1GMDMptMYSKkzgB92FhdP2xG",
  "key9": "4YCGoNEoT6VYVnQWkrXfRM5GiiSXsNfDwJuBf3qJcFMYqGMhn6TbGgdYwkhE9wJ7r3CFdQRhAUHRk3udxw8VfTxR",
  "key10": "LuwfhGkxrHi8k9JjeG3UTyaLakbjMhxX5tepnp8mksRSBoFcVf2tHcXNMi6kSC24KzzWZ9PySX7SjgL5rVbkjRi",
  "key11": "67FHDsLgSu1gvkJFGuGc3arfdbyNxgw6Qd7Wy96AMYaLy11NcsbEVA9i5vmU7TmRRJkfkUVMQdzZaprpij2XjCHa",
  "key12": "HSgy3jUsjZ4TyRPwnBWFbBonAzJUZTP7KFpVPzziFCjQTkKTdQu1sJNsmvSn9sV49JDMhLvezsQhLssgSFAWjEy",
  "key13": "EdNAHFTS995a5rpCua4je5sz1gH8Grr3uEJVCm5szWijKTm97ZJQiraG3JJ3sL1SM4hzHB7gox4CEAygeTykgro",
  "key14": "7vNy5Te2kvdnqbk1ySKB7nrJNEPZT5jTeSeo81sk7vcUV2AzRj93j8dMhyCJTjQuuvT8TkJ5bJ7qhJ6VeLgnCWm",
  "key15": "2gd4Zsqp8wyM2UArCv8c7qzaSvWd2CFpwpYDcJy75ZYWnPdr5xpYemoYFWwcEteZAwPx6CFgoeCfFWJ7LLpJA5MK",
  "key16": "3q3ht4TaumfqT2XJDo2AoCXwWq51ARV3ooF4CCZK7df3rBjZrPAF8DGKq3SunUNZYUsyYZF8tagtWV6c1Ce242pW",
  "key17": "2wy5UogMgpwfRxG1zkWwpBCxVPy7WgyMx8xM557dwToen8vzBPoLgpQZdcDdYSDAANuiCgtAXZtmVQNdu79THv3",
  "key18": "rdzBasGJcW1GAuRdSxqUczaJzjNidyGHJAih8XrrLCH4DdovKv8zVE4GqxHQWT754HvTASbw3HCb4oCuGFzRrNt",
  "key19": "4hNVyHHUifE7SEnwckUVwE64cP8JEF9Gg4w9vbw2XqMzKDw8R1W1CPxxxvJJbUdqSZQQFYnBkadLXbzwGXgXn3pG",
  "key20": "3UBrDYcW9AVeyZhU5VUtstPKeGQuKDVwsQdQvKfniYhcCnt2K91UiRvWmVkA2QyyYySrJHtCBXcXJ3UTD3eqSD6j",
  "key21": "4dJiVDsDuz5mUkjdL35MaJA4nmZ912UV9UohRY5N3epnAJodZ8V5VFm5PAZRwKpF8oaiXLgE2G3EA6JneiafisRu",
  "key22": "3XbrPxwx8Ye5ipKD9ZsZx8buu6Qw5bZY9f7hjV9AVcmy8RwYxx7EhGr7Uv59qDhxXkMSXADJZC4VyFjVj7EXof9m",
  "key23": "1ushg1thhJf97FzfMSLTR1CyHukw3B63AkUbayJcN91QXoYzEpaiuSyzWiw8VpZtPtKoUyeAMkAuGPqtR85NNTQ",
  "key24": "4VdDhbSJJN23A3YSPgPkhGFFsAEEMSYB3dZpkXvwPeZwk9aya8rE8DcxEqen1jG1SFbMbiwHzaAaZm2k3rxjAnER",
  "key25": "4cYVrXahZPffp3aNpGTFRMPRuoUSWp6ECVfb3VZYrzGFfTb9gwpGziwW4iXfjiUE4xUU7Eq3N9X81fGMT6tuymFX",
  "key26": "csENbJUkYRyCX2oiQoxeaeKdXYJNZreKBQkW7J8dtxkUDBdUL8FKYS3vQY6NLSGL8vnb2iizU7ySf2tGwPfABRw",
  "key27": "26NsB3DA44v39N81s7zrUqYp8AWtz6LVBcSYcuSSzarVnn6Q8g5uvQFzQ4Pwy2fLGNEu1oz6UoK9ukaZeguR3poJ",
  "key28": "5ecpafxPjvT5hpcew9zPgfWB68Mv66LpSgd1qCCuLdLSUn7mTAsHPvhd7nrGQagx6Qif725orMwfnYez8jhcYKK5",
  "key29": "49KbfQT4U7s8npCwMDhEpXcA8YCmZgFUjsMqZgiRhPa1B56T4FkCS66iVrbYxqpByYiCcQW6CAMpz3kG8hUkSUK2",
  "key30": "3DNT2S4QYJVcpRzjqYPR9SNSKyhHAdFnL16J4jKzG3TM1fhKhPsrRkN2mUFW3hf2LTExGMZUeudDoYoZzx4wyn7J",
  "key31": "FhKo8qPb9wFYTSCjgNBWXpySa65g5YhLeSnVmSRGdNeD9Ls5i9LPoxmm6iC7iW3VMVUoYFmfY5noFdcxV93aGeY",
  "key32": "5gwwQKoZ7G89Ae95dvmn4h9NVtdbBdLE5nbqUaFiR2vruaUfSEh4WwgM4dDcrfCGCFJXNpHNQZpukG1DJkGZCwHr",
  "key33": "unRjXCEMkkuyu3FWwkxjJwMAaxEGZ2mo3WVsMK6PRxYwudXf8fGwxvsk5sw9m2vZRtD8XDQ4tYEk26ViLS39XQo"
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
