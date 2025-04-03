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
    "4UH2461w9XbvXnPP1PpDeqLgjku1F74iC9AkY9Cv5tSg33JEE7Az3MZ9rVZovnw8vfELHYU4nSkuPDqMTPFgutFF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2govC1RQwsyRBBNLX9VcmgypZKEijoDXqjuSUvnw1JJWdDrwDunfnhEhA6nkoScJyz2EboUw1dwPupj55EXcugcv",
  "key1": "55ipxCiiyCsChtoTeAoCr6GfS8K9hTZbV1UmtfCsnh9neM5awiaeBFB9GpS6RgfWCy4o51fEAsa7fCPzy3n7hfwt",
  "key2": "4NNTsgot4KiJQdCiUiHqoyRkwLXczn6sGtUbQdMup1iG2VrNKwMF3UbR22fJuAz9RaRDoUWGdFj4gzcpxsb7kFqs",
  "key3": "3aFUdN8c79UHZ8Vv53pmw79zSzeVBipJRokTVVh8rYJcGBEcMWxm2xD9g5EHE5mw14rVNqPo2xujiMofzcKL9UW3",
  "key4": "4im1Xp41E3DAAZE2uRtLTp7eTWfSzJX84RPeD3fLHu9g5jHS7MJ1dYN49wfkVQwr9UFajtbPb23jSdreePb8sXgE",
  "key5": "4D87PS1NHAJQbcvYaw3sgtVxSzjXcmnrDn6C38zVuLGkwLWz8aVMxqAjjntaDJ6Y26GevLCrjbb6QskkTh9V4od3",
  "key6": "bhrJw7UafSHCjeKEfAo5gYcfHzh22RGqNGMmLBHrkWXaujeX4y5y9ZPKb32wProdeo77cBNfNzUTndDbTCfNAeR",
  "key7": "4PPpuhE2emdmYGvAo5D3gjZQAduuKYppRKqpQHTvMnHA4FJeypdpanxNxcMByuYEYRg5RvdTmFK5X1ufAnRMVUcT",
  "key8": "4CZGjC3J6sbHNv4Bx71j7idoMHxx1aspuU9M4U6ir6QioAMBSpQeiSa6Cv8JpRVqAkjMRqmqgYQnnsuW1WDrDEZL",
  "key9": "23fQcJsVjsEesTq6Q2yeKVbi2WarBEEStLSjpGRBhNjXGhiNyArRhG5H5MgrpwWZKLGiLPWuGeHh23Gq6a7Ff1gX",
  "key10": "4tSHb5HHmdn4dTXiSqouYPe5aqQfHqjc3zj5wABR6SR971KiHHMS329UFrpvVdkGhdKpBuGvkaXYi2NHWypkoV6J",
  "key11": "2Q24WKSAyWR8assbaQigCVQR2vws3FbDEqKb3YkFfUEzXjrE4e7sbcMnU3cgauveMzHDqBtNT4zKn7t3ooe6LtP8",
  "key12": "5HX7UsBhjjUhHWcxFeex1SuUEbGatLUiPeTKUx1dfiShGqBVNhc15XwTP5suKcG1hp2LxnxRKwGhUCAsPCbym369",
  "key13": "5B3DdnU1eZwPRpjkguoRfwUidRQFhVjTPup2RXBhTtKPTFEUQf5SsBbijayHbswL86D6oowmden4nsNfMjJkJjwp",
  "key14": "D4unhResypP3mhPh2Bq6edqLj8C7Z8RmkeWURc3jKB56g3pmjc2bonjKqAyCwFhyc3o1QnVFiGmwhQheNzHWEi2",
  "key15": "46zXBMAGcCkTVrrGub7oVrM5Fi1pre2kWWKbV7TFMfaos74wJ3SJGZvFjHnDsaa8zVNrZdDiptSeXh8dbuDhuEyM",
  "key16": "62MQNA4AWWHd6eo3e2MpniGrExtzT9o9kj3R6yCqRwyGp5JhSywr5oJC9d5AcbeJ2YWcMuG4HoLkYKUkspCJG7LU",
  "key17": "54VAepbzQfhGkyJnn1oYRruWi2kWPWjHBNiaF6mrPZQtrtRxPB1Nm3zfLh5mSouoH57icsVnWiAdger4EHATWVUc",
  "key18": "5ryrSe4DdBbPmgcCPWZc2AmdT8zrTmKorQyk6zMVnTgGXKjPNkojEqcqX9cig7nkeEDAy81q7xDcTrDnpWyaeWng",
  "key19": "5PyPkmDo8bs1kMJhtnZyUWqEpRE2ThLcXW8W4YoLoQQPt5QtJAZjiZw98q5bQ9a1bi723k4QvtgLjPvspZRqwZt7",
  "key20": "413DBsEM71ppuQjsJkRMUUpdQwv6k6fQQgJodnDj2kLfmGvKe8U53TkfhYqq8ZiLPGwWfWr4kkUqm8f2C1cGP5o9",
  "key21": "3LF4S835LderVxoCELrunD4qWPtqJMKebKK7iqifUzxgW2BVzLffunamo4Ls4oTsh2TrSYAYa8NNcfDT2gckdN3y",
  "key22": "2CP2BPRbDHBpBR1FsCLPV9F4QdCP87HKhhvDbua1ffeS1YebM29kXrz23e48EfjpESF2ddXda8ebrCZYPF8iinvH",
  "key23": "3PBRKzDaN7BnsLzGsfY5pxDyV7JkKoVPro93FGBqjCtBtCC2vHwhPSvbQWrptCzmTFVTudp1qfw3c93FuaVqDJxv",
  "key24": "EuuSRpEvAehFRurebZ8VhBo8ktg7Na7cLsuj3xhrxwLhWpDZvxdMymr8cnX1CRddx71k6eUNSfkVHgbNdWCQFR7",
  "key25": "3Md8Rrm7u5o8jKJeTR8QitKmDvRivE7QaH5QhJA5qxcc3JXKRPW2fg7syFwazvsNbiy11867WJYWGyTpeJQuTEuB",
  "key26": "5NS3aSTsbPJmUKpWMDWQ8HiPMrpysQ89Dzs7NSdakJkR8tJNj52NVz1qd21U4NypmhXVGmrt9yDTEU67wDbCDJUJ",
  "key27": "3BERWfiykCVx76paP7Dpjan1zurWJAisKZDa3mmPsAkSS2ePEHsihvbvzZ4BH9yJZkQagqB9rengRrCjWnVS5Kk1",
  "key28": "4shthzhAukyALbKAjRPE4TXaxAp7ooLWRnxzYBdrNeCmKJCzuMo1NFtHrYHhgdkYkqcWtdPiypmrvyCDGVtNkMUk",
  "key29": "BP9SciHsjipttKBYzjVxyXTAnpWj3oL1ru428zDbZLM1kddRBti5AitxYnQc8kb6TBWXUJTYBd7BbQhzT7ig3Zc",
  "key30": "2FbJmMqfYP89CJD1nvUnqwisuto8HjPFw5jrcEyxhVswpeT7hS7wQExTERfDTprgHBkqavN5H4CFFwpDbka5Wqwq",
  "key31": "QS8JguZMf9VTBBnqcfg2R3SR4bjtCkxu8KY4YT1aVr1QeRtN74nAeGWf6NGGgCzhzgDPmdjLCpVd2JQoE8JqCLa",
  "key32": "5gHagKgruh9kgius1HrFqKENr1cWij1c7NWjNHUKyiGooMkow7JW4uLHCJt8hF1sFUJCFoRdqMe43TPGa9utqBw2"
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
