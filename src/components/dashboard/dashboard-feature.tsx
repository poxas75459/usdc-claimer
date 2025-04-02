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
    "3EQUqrFQ3muruzBJBfrGdVsyZLqAWUg6RPKwoiAwJ67qyHF1kBWPxH5ebjuYaDz5dt5gt9155m6uJ3s9DnojpnK8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jxZEX7V6SB9JQdXB8KUwZC255kdZosWjSGjnS1kGhmvwvTCXvG12K8fgCjBNuresgHpGadpWxhvzurwHzjBDC6Y",
  "key1": "GxCRSG7LxVx63cPfkj3ptj9aY3CxLFbXo5KRqu34jZguWwQk8KftW14n6ju8jJHPHzAqnXZGhjw3eW4c5Xs8mni",
  "key2": "4dqqPg85YJ7uFFLz8rhj8U6xENRx3K54pAH52fRYNj69k9daR9kACqh7yNmTJ1iwMKJih74HuBT7RPicGcWG1Gsz",
  "key3": "2g56BBqiKDLGbystpQDCyGSduEpDQPzHDQArKKroTKoKnA5PkL6fpK9xuuVyzMh3KwVrMwaSFC7QahHjuEpxodzs",
  "key4": "27Sfv5VfbyvhhcXatQe1RA39ukQPLhqEdTfWKPYPh4WGiA5kj1ecr7A8R8mzDycjut1XVpKKbJp6r9fXtG8yQHb7",
  "key5": "4tuKTE9pdAZrqubLgsHaQN1u5B5ip5v7hs2g83b6tkMg86a8nThJdx9BfKsEijqvRawwL2cxyZFdai15xGUaCjoc",
  "key6": "2eQ8ArpPiaicoLdMQunJiLuTKUxTUFLwNKtjnyRHhtuExPnH1bcepx7VkAw6R6QQKkUB5ws2sF48rDqbtm51NnkQ",
  "key7": "3BNBMmKwzTzmf1nnnrWkJf49zSEB5Y7yrV8x9yU1faZ9zU1fXHsgQ6DKHDm3LDihP1DTLP1xuVL5r8EbNYecGmnS",
  "key8": "25oT6CgkeqftoDKXw6TMomHesbVXcGTdXnr9baZd6nHDCJfQe5UhkeXJPGmXyp8pbKrbZVCagaRCpGX5UAEMwD9L",
  "key9": "5RP12hQc4CdCpYXwnhQkE5vj4wdSJMbUNVRgN3Se9mN1BSazogJKF5EAPvFCFB3YRtsfEcNpBJrqjRzZaN7BawWJ",
  "key10": "28W5d54v9Da6oYXNit7FKv2xVApyrudsfCXBgcrHNFQajCoYbWeb1by5wcBSaoBLppn8DomRSt28Jz5NBMi6iHVy",
  "key11": "3YNPa1qXcfXpU7ytsSF1FyqwhMrBY8JrXkkkKx6MEfo1EMBHQgsCa5TffgXEoVWfKYQ9ojMMPqgLAvZjiPqJ8dfz",
  "key12": "2BHvbxr8kTjqrJUCRgnu8DaSFezFLRtjsMMF8AKH5tG3Xh8qSuurqzjZ3FK997tDCSLHvzwR1euFsgCxtyvtXtS6",
  "key13": "3axRA41Hawa3iWKeAMTLxFTSvmRV9cBn5wEMgUHcsaVkZerh8G8GVk2DnJJcKPSC5xXKCWyoT9SUi6JDGLb67BTj",
  "key14": "2Do3AC9dCzx967UJghQNzxagjARPyQXime4jrqCyVb7vNTy4iUrDFYjf7587kavrXitqAagVZ57LpPGwL63oY6NY",
  "key15": "5rwgaWsUz91MycPq9No99Qpk3JjEHNHj8zgrcbknnTmGWuseqXEqLfPscz3zyDidEH3uBHfVFXLeUdvvYyJp7BXg",
  "key16": "S4NksJibE7ceJzva66WaJwSQdiV3Gg8kfBEPLwV9ZsMkdCVEB7UMFrGz5dzaJsr1R3nN1itH1muoURtdBHQrJbv",
  "key17": "2zw5k8odz96udnQ4J7izKUPPEG439KFToNZYBLtZe7bA4ud4TxZf1kchBMN3ShY4nKvirXK6zTEGxC8yTyyVVtVH",
  "key18": "EFjJY1UtJtEWiq8P7g4dCuJLrqyhyjab9D8AUa8TsAUDVu92GV5pZdQKd6KgTFzfiRFhfwp2gzDyATWvGGHNXXu",
  "key19": "5juS168r6qBeJDjcDmtQXrQoNGqevFSQ1z8tjDd4sYh8BjrcUtGkW4SNVBPYcPgNNPPEu34g8tDtVP13kgz1c7JE",
  "key20": "2NVTmp1J93Vnai8QMwkPMyZQn4g9o2GcJiBGqnjiHdKWfhumgiQrivTsB5svSxDWMcx1Ci1q75dz4oztBsSBU7mV",
  "key21": "4QJT8TmyduNS1upEEVJiZxUmr8PLyV6BwSVkPpVnB7MToqqNRDEmSMwDGjXmaNrDsR7SXGJd8gyQmLco13rhMDpF",
  "key22": "5Q8eZmuk7CyjczCUfsa6NCUR2c74krzah9ygRz1tWhq94jKxTnz8NQoSdvQ7w23JZwSDZd9eMuCQqrgcxpUob9mD",
  "key23": "2wL4thdjZcnTioKxdE9UgGgKp136JijmV2wMgSJTYC6HbrgfyZK3JHs1SnWuUnAtPqgXCg7p4d238SHgco8mGu77",
  "key24": "2Yieyji3KTQKNhJtCyE7DQdXZ2zp3MpYtoH9bQuzehTKKcHmc65enetmUF3VmTmNbxrXqiZfwx9H3xNuos8Yqmr9",
  "key25": "64B4EXVBAeMcJ2nX9i5pYJ33T9cwf79W7s6hTWFojkRDRFFh8yzqi7kox4tvtPGG8LMXuTdxSfZBUqho6m43XWkf",
  "key26": "3YN95qsh79HMR4PRBqkjh34vPoLqCfSnBUfxn67f9nrvid8YCLi7G2T4myJD55AvnLwqRpEU8e4PqxSSeYeHKKUt",
  "key27": "55t9NEpiRgSiDuMADRfebHUubp8DmkLMtD41ZXFQErGsBZB2u6xE9EEv3JqYNdB9PuT8p4a7zcjeV8THr7TNxZmv",
  "key28": "TFuVEhqdzWeazkQdC9p7jE26scRnDWoGGNg8JGhJoZwwDm9FtJM1moohbRVBcU2AgNjP8aJeB76NRPGXoN74CL2",
  "key29": "E67Qy5XakwVjJewfoq1edtajcai3BJGq6avqP2Vs8eNK6F8dde8eCXaygyZ9RLqjqe2TNM2FNapUWrckief7gQn",
  "key30": "GxGuHGKisxyByEug2gkDBESuAqdhEGT3Yf5rtxiyxptErgGUVheHDJ9DwJafWV95wGvYmuU8drND2EPVD9b6Q87",
  "key31": "vePRofiV7pKbQS8C3M5s64H9VkVtytA2AdFb5WAZNC7LLRSnKANmNG8y8KAVyNsxEULSQ9eGYcddT8Zi8dCrqBc",
  "key32": "DosVbL6wMh7EUgbPEpKYBwnTgzGLJyUvQqQ1phK69S8WoFiM35ZeoUpXRbvU32CBS2gHw9C5BsnAd47cue2kCLa",
  "key33": "2oSEx6pcFLDCNZZs6wFg52xLiMLQDw7JHtVe66LrbxCXJbaAhjtfJxkJ4hBtFuNMiKwojy1DusAVoYtzLM4Ea81Y",
  "key34": "soTeRqyNRrSZ63m5adKykedcFr9m1HM8aAYH8W1puixndpe7WEChXd4nuCRLbj1Snu5J9Bb7jdrGe8aCpMUBYdd"
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
