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
    "2iab1DyJnYMqWkmbZWt4X18yT4mXthtP11iCuTnyZTFpD8y2sundEEA8DoY1QU2hnjdjcdx1cRSXpWmSTJ3DeUuS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Fay5HjS6x8Yw7suJW2XKpaCcCKKnV1mgwb1bp7dHczy2jABihvcEAAvrt3AiFSM84AKzpks6HY1DeYPHXDutH25",
  "key1": "3hf7oWHwNcSkLYyWqhytrXSGZ2ftDUmX83Cm2umVtoUqsNMwFozYvGG1XeWFxJC7YQnjvr1nnpZgE7TXs3nasjgu",
  "key2": "4kieBZNmigtsY4bTcywjS7uLsFhzkLokKrQDZppqiW7pGTDvAJ5vzrVwWkToLetVi7dfCfsJYXRPYYqwX75csetH",
  "key3": "2rs3FaM7CzEXYpcyxC6d1EmZd9mouv5XcTPf2BmsSsjigP7nRvoF2ZMMhN6Q6m6tbQmS5k8Eb7Chep28vE4a5AzQ",
  "key4": "5g5EmUHjvGBzTDpHXnBpTuDf5aLkpH65AYr3wBMCiNjVfKbZMAiWXhGy7d4kKAGf4FjJ1cuaDWbYnffcqbiQyRKQ",
  "key5": "3gFSBhHTeBRssVYerxwwuQALafJzeSLSAokH5M9AVGDxd8LVMsGmymJ6WzZ8gjnD6zqwa22T5yfsUrmphTFyG8br",
  "key6": "5MY7LYosqHyYmbYdbCJqB9veCAUkp3MCMWh2qS8n2UBxFU3bEKbwQev1S7a3BXXxwf4ccp4LGSSbMpGKYSJ6fTWM",
  "key7": "48iczA4Ke1UVxFgfa5KfgLR61Ujd8DdFsjw1C2x3rCFtXFY5cGwcsP1DE5eAzXvyo5WyW888qnor329FaDUzaPSc",
  "key8": "29SwhoeVMToMsZQcDsJAFSuCMsnSzKtQgaNaEscGVDYCoAds8NPYNL9zC97dhjo4rWWhzspvjXqcYtnM7cHxDZrL",
  "key9": "4GtZnbDhFHqgFyD2Gn8QsWt3rG3VX7necy6KiMa93eg35EFrVeYiDGdTLCqNBewQqFofUUGQNW21a4pcjb1tLCt",
  "key10": "5xd9wqraHvsLbFhAwojfFujPY3NNF8ByY14oBbRRYKRBh98gyXPJMtBCxaKqh6isQMcjSNNbCwo6ZSv6FAgQiV63",
  "key11": "4YXoCJxqvencpDJY7KDtYB5heRqyDDb1V2cTu5UwyMA11rYNx9Nrd1mFVWgECdXQ7WtNGqCHa21Zb5dHGwQRXBjR",
  "key12": "2NXub6noD6ZyBbKntKiWuUCXbueDNSpFU2yrEH7sM6A4r4HWgRe1Etg5vgZNr7YwYHs6yf4ScFM4zgX1NTLjhD1d",
  "key13": "2NNwRjwq3yEyYMjUCPxsosx3aWDm9d4QZDtV53r2Yx47EF9ZpxAhiLAk1TeGE4c4D28B73m5dUhdQ48PNeNTckuX",
  "key14": "4vdnd1rEQjYJTmPu6S1i3cn2KVcUUZg1oUNSjJH3HQo4uDSctVx1bPNfRTEKiZSmiYTf94WiQLD7cCRJyDHnZ3B6",
  "key15": "DHt73RZ5F87PWHjHS7NYZMAtzdpiURevRquX4QkWNHrweDrwbqpTWgy7eTsT5An83urVNgpDDcSwaptHixCAG33",
  "key16": "633pqYyvbwtC9AF8YATjxWsFqzJPqhfV9dW7KknwAkknZ5HW2jhDiu4M17UAY9LZm74okyzYdsgKnGxpn74KA6Bz",
  "key17": "SeCbkbAiRU7m7ohYkmwnQSzeCd8seboWUHwqmZ85YnR16N5eRN8axCMVdN4AAFavsWwaKtKNYS1oh8HDak21r9V",
  "key18": "22LvvapHwbJxmT2tF9PXnigaWpWBNEueCWPtAJYs27pFGMeuxVTG3AiwFRADLQA2qyD8jtL1yrsPVxTXQeNq3aHv",
  "key19": "5E9Dt2GUhJnjg99ftDbwYMpHZBSuCe2cZMK32PBtLqKnrucsQz6DjVKQzHWkF9Ds7sZAo4drf9WU5TJqtr2QD23C",
  "key20": "67BKWryrF7GTL4BUPNRknmyV759Fp4mVw7MgU4oN286qpikK1NHSkqMHXJqpZar7r4zyUnWR1FeBJjuSmpvmR9BY",
  "key21": "2RNGAU6JoFTpjZx77B39RQxbuobb4Bg5SrRcoXfgfQXjG7XZv7v9T1TwBhMdX5JLNyVkRXx2CvheiNQY2xeyZv4k",
  "key22": "3khEQ3Z9x8fzpqqwk7fg9MBUyE54WUBrSMdmwLF33Am1P5iTScioSUXrNwzZqN7uTjgEy6QcPo3dAX2fZJtDA5i6",
  "key23": "2Y56knxmPfQsWCxKrr84xyMyQ9TKbUbLoPpwxrEtkKKn3gjXZfS9GXFJo3s96h7hyrgNdKcF2DMEbqY4F6HJkZmw",
  "key24": "5qFZH3rxck8WTghv8CFH5w47kaPmeSYi6L5vtLWtX7cfwv3Eyb5LhJijZHK7gB2gmQLvTSZnUfLSYdNdfwbCdFKy",
  "key25": "2anoQicuzU2aeVa3ejcJqiU5rV7BhjUSFf1go8DqLL7m1LBeNz6xeqRpQvCxKsfdvpBJm8MjbTis5Zy7jDwgzoFw",
  "key26": "5tznPHBk9JhBBE23N4YKgiK4JXG7cktWBncnKT7LwuoEQf7vsdpVuPVRSDpyuL9yaHQk6PV5pYxH4Uw9qkN2vrLm",
  "key27": "2NRhTCPe4zDSoXtSJm6SRGWzMHNkaVv91iP2WFLpwJyAMVZpre5eeLoB53sLYkt5oUJi4rRBGqALEqMySb8GiX3B",
  "key28": "5NV5L3VA65h7fBbMASLTQ8Ayeg2CvzXpcDPgCG96qCGbujEhVwmRNxMEsKF7LPTjKb4rwF8vbvnMrt694Gppx68f",
  "key29": "n1jq18QQsh1L53Rdpi7oUyqp4fZa5FSijSuwJHwt88rb6DX2S95SeEGoVSJT9ounQQFoVovGXoPMCjpAVsDo1Cg"
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
