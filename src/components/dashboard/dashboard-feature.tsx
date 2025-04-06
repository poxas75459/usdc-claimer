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
    "3N45CVfP6dNQyLKBGF5V68EYoKaem5UBCWZ9WERYhbJM6UbAzsRxxr6M7gEr9YySupQQt4dLyDqxUMMRxCrazM9A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CfUXaDafUx3cSAYxoSuMh4CTs7hVHasriEUVW6KZkNaSMXBB91FMxVdM2bSgNgQ7wodFSppQoirRwYuMnFXrxXp",
  "key1": "65AyFak8tz2ZbPwwBq2sZztNBhs6LaMxYEYjC6oS1xnCV9fWShEYipLA49T9CKhe4iHUzPGmS3Jw8XWrnme16zqr",
  "key2": "5VyZf8pvJ2VEGvPfRTxxuGztDaznbZNQUaRx2UutcPQofrfX2QvqdKvnFC2yWeXB2ZjqmqsyPEJEuYyMFWMt7Pzo",
  "key3": "7gpjMCPFHNjRRKSEWCZzcrQyZEr6HLGEtE4gZYC34VKARrbDBcCFqyrBkPvRLM7eVsbuQgUooqvSzZ2PxEmdoro",
  "key4": "3JJhMQCCu9CC3YfByYGUJigspT949v51wej1CcPAPuniEABM1uDaPtPA4h5bUuDkKF1mB5m2EqmKfMEwpjhXGCMb",
  "key5": "3bDzveSiEGMm1qRzFgxY5EmKBhP8G3QrmVkf8vmGkka93VXhn7gDvSEG2fNSFcnpE1d4zJyiTAER6jsH7WTunUM5",
  "key6": "2Z3W1TCPGdChHT8QrFsuwQFvaYuuSabRepS4irsRkWW667oaZV2u6MrtU4cbj5tHsUxBqYJFwzN4dbcuA1MTwUik",
  "key7": "CNzj1nPLaBqAbjDAjYBhs8iSZ8QBm7F6xCNqYG93mFK29rh2AEcE2WsvxRosMBBjXYfoQYvsfrwwyuNhy7VTQAs",
  "key8": "1rSrNFx9CKoncJxacPFdBqXgAG2ashmwH1w4H6kQPpM4bfLCD5VDqvzqMoWsYWtREPvJh5zkBxHd4dgYwjdiCGh",
  "key9": "2aCmvxW8MXGGxhk9R3aq8r6NExe1K6w7TcVaca8US7kK8GD6sxffgqMRaJeXCRgfgo6Ce4vfwdLM7ZCUXq2UnrVu",
  "key10": "5URaNi1jN3KiiMZ9i3iqRLwc5TJ9henHaLmgK6cUjYnwdsvQPy9CgkoKscB9TqfBWzdBMPYz4kYnq7FJfcgNWFJ8",
  "key11": "bUcUKL5cjtZVVJUjWYW5ASrFXPELyY9NxLMnmztqoGzNCayT1dTM3wAbpcLzFnB3NG6rzwxuf9khEeMBowNzwhu",
  "key12": "qPFGr7j3rfEAhmPLozTgWxr7iRrsdE6GJ6anvKePtzcbnDFmL5yBuh8PFUM6eZRoN4xUcQXLWDUhuTksjFDPHnT",
  "key13": "62Q4Zgda9PiKtReeE59aMSjFiozsoU3DC5ouXrKiSRRNRBFieVRLmBhBLhfZeaYBTzk2ZB4LCKj1ZCBZ3ou1DQer",
  "key14": "5cbmNpAiJAsnZA6WUeyRHp7YbgiSYvTWuKN1KdbihbJEqXfTjtqqFoiicYe7bvbM4WBmwoX28gNdHibPFRLr6acS",
  "key15": "4G4isuPTAiiCF2hR8ntsxuVkv9KfUexDUFVBk8ZmohEdA2NXbLdvvNdx3zYidvehvQ4nMqJ8mvszPHe163XBMtTP",
  "key16": "3zQ5w9MdthRr9Upy2cEPwQrYLGFD9HExvS6ykCv4Jd5FQAjnDPsYjpSEagFNrZiqxGMdftpjfxTZML7FJhqMhf8y",
  "key17": "CRMdaDfbHUfaP2gkkMVqBDdgPZYNXi2QCsr4pSc5qtuMpCYU5KwMG6oS24BNuXGZoUVqMa48f1f4FU3PK2fH8yi",
  "key18": "3o38hYrV5as8N73oPF25pKavm9AAcmz8DyGaeoyzUuY6cmWLU53TEU4xjjyGRoqk7sHb6VEjjQJoZ4yunDPRdfz2",
  "key19": "nJG1bm2fbupsYEgUrd3EHyqnrxNue741wWBWUxLgshsnvHbyxvdkGkUUhkzG2my7zwLS8PWX4KLA8HFhT1ePmsY",
  "key20": "4df5VnaGnTqEJGiEdx4GXePvkESURpjhV1ku9ayYGJGRKzsV6fHu11Z3YQDhfHRLpjLdr9RcEQ2i1Pdyk1HQ1ATZ",
  "key21": "3dHGVCMf8J4E1an9X3Y4CbLKnNrVrR9a2VfGD7kAwaPSv4k4Kn4fxMFtaQP8x1nrdBJNxkCRcPeGLDXvQ4UAnJ76",
  "key22": "4L55Cth3qHf5kxMWCCDBPFmiNoNXvEphCkdDhZeVjS6DeGUqVNE6qbSm7APLAExDPeaD6CDJpYjqkHfqMmYszQ1v",
  "key23": "3THY4tCiww2m9F3o6ZF1c4HMMBX6tZ631zU3viC3KQJVMhBqEauaZMVQq1bZvq7wpD9KD6xoKykpDBBe2AZB13Mx",
  "key24": "45V6MFbumgTLnC1tjKRaBGokUJ7CK4hHgrgwuyz8V5DjmTpf9xd55HaxkGGxYEPb1LbAsNuCj3vBQQdNrmvKnAou",
  "key25": "5bwhq6aL2PBv2MwP37DyCDp5oYs2ZEZab3Qw78qEutEGbTFMRjNun6k5R861rEVP2uRY1GXUkGE5GnqNReHXvhH7",
  "key26": "4TSMJMrSUhjfS7aFsS2XzmkSGBq3vv3Jin8KVBTMdNCuihr1HYD7qnaAtViT9EeXqsXApjCuE8SrPhFdVJQTG6qa",
  "key27": "4A89j6wQEr3e3oExRiLEwAKFcznFE21ESjsALFM29XZokXg1GSFAbvxeM2h9z6HVrDVk8J6RDRAqCfEN7Hh2Q18C",
  "key28": "4RArZHHeo3ahuZHex6bF9cWLvLbZ7VzN49DopR9FMMR6LEEtrYNZzh2ALWSgCSsqEWZnmechHEBrbxvVywScdBbG",
  "key29": "NSSikH7caHiBqPqAvGbepJLcNf3oLUr9efY57cFGja3D6ZM7g3rLBwaMzujvS3V9m6xLgXuHb2zMSzDbqVVc6RQ",
  "key30": "4ufTQH1rQ421NRhXbJgs7Svy5M9V4yYnBLh7MG95Z59UJgPmsWQVQwgTci2jcfGzYW4tLhX1pzZ6Vi6natxvQEmz",
  "key31": "4G58CGbGNnjuuvPmDkterWFHNh18i9wbho1iEjyKBTHmQoh4A9NVTosuUcHWjoWno2mBxDzABBWJh6andDpm5fGy"
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
