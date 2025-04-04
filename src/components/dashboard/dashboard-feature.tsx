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
    "LxsxiZdTRi8V7wgcznHao8XJavdfsRuJmaqeqmcwWWjfEqkGdw18FjgWZtTCdNQiS7BUrAUi3CdFjyLpnLfoiGo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41eSFmPeQsatKKLs5QUH8VHa8mxtAxKp5dBPreVCuwmSwLhUyTKVDWc3qqKp7FZc1b6erL5tciWsMH9jVetesxat",
  "key1": "3VZFw6SCe3uzDMDETGqXKzS2iBJ7hRJMqi8PuT5f9dwNpPXoxVtJqX8L6kZYWFSQDyyZHbdcA82JPYuJccB1eMCo",
  "key2": "2vuHrvAT3PqtST2fMzyd3Lf84XuzW1kP4oHNsuqrzWDfqq4wXhdrVzCvekSwfwsFr7L6GaUpWj3bkCBDasSV1pfe",
  "key3": "2wbqw7ZiRuP5oEzzNHPVuycpa8R92U5J2PGPyQtrLtPWUxTJsU14SRFD3aQoCNFwVvs2Udav5HyhmXYYxEY2LA2R",
  "key4": "575gPaPdbpUwRYTHfXnSQWiTJteXjs7k9Tb7tZ3QFG4tRfG6678nJw5jVyjpfcJM3kMxBJVMDvC85F4qYeS5Kzgc",
  "key5": "67nWGg8f4My8h97HUhPbxq17e9u2owqK2H21bKVXyqt1T5nk6hjrE6YodPZJe3AHzh58VHeAdusbnFMk7mih1Xv1",
  "key6": "4wptrdjWMAMxKXvCHop8q8XUCxg2JR24VAPtnz8KLiAFrMsGaLLoBTXmYxH3ognQWjreHY7xMJmauaLrme5UjPQh",
  "key7": "vRHGuZ4WiB5zJKYBCQ2uCt3MfaKaVQ48zz3Mc7NRx8i7tKygdPXP9frEzyi8Eh9R43X94hb2NT2zpQnsPFo1r7B",
  "key8": "216KaJonDEUAWkUjzShzmR1MCndPGicnBdgyb46PRBxcHZLAW1nvMqLZJVQcP7PLvDxhA2k7dju4oEZzxAEKK5sX",
  "key9": "2dF5AHypN4roi2bR5ufha7DzzGqZgx9zQXCbpXXMu6KpyD58rpBaFigfep3mS2eQ2cBkFafJiWALQ2bC4M5wyADk",
  "key10": "3W4oive3gEcLWXKKUwtKQxNgHGrLeHMvZqXXAS6cP9NncNM292SPFrEWfRptux2pgoEvkRDUhBL9VtJgQrMxhQQ",
  "key11": "2pHoQSL9L4Yp6iVjrzeCHEpzBF6PWEgBsaFjWP25oatai386ANouYZ425wXMfbm6LxQq3aXNeqJJs6LFkN29ZNgC",
  "key12": "4HLXHLRU1vSuVSEkR6mRJduSwo53v6jNSmcnPXuV9Edc9Lqubnc4BsfKEkp6H3CEq9TbJvoLppkshEr9MssfZzHy",
  "key13": "2pMAzubHs4T8L6nutSCFoqfazXX5kt1Wh6z5b8Bjv687G4Ur1aMynFs7RYcZTfggYBhbJgdVDfQtshNXSo79UoqX",
  "key14": "4KccxH8yjrGihoU3gVmuLMqWYzBmNoA2wrr239LGgMC7z4x3cRJ6ARqNgdoNnJaxDZXX2qhEgcZRWJKDdUVFwrfK",
  "key15": "4EPei7EALoMhvGgQGvYwBuVJaWVsv234nqEakU4gqPwNUiHtPPdNhc5xtqZdsTRec6Y1MAjiEeYYBu3Cv8Ueimcr",
  "key16": "2dDyk4GoRJg95VSz1MEWNknfyXDiK85RmnBechhf1V1pcKjF98PP9W9YoBgHT6pNwv2Q8rFaDtPLWkubWHq6Gmex",
  "key17": "3SWzfAJYfUC9DRzrPraMy2vtJP7GTMu3pfopzEWWuFxqGgyY6F4p1Q65bquFPFgioihd1rJGWeWUeQnypimR7qh9",
  "key18": "2AnpseCkd68hFchVrcVb3H2yQEGhR5BFxxpwAkusQnaGM3rVDyRvS8gHdh3wRHZrod1nJxnhQAEp5EpknVUgP2R8",
  "key19": "hrnD3vUvuPydrkibFZsc5GfWevt1XLpS2Lgw6LCtYVy8yVvD2sKKiEv39cTz1q7Naxavyvvtqgvgu3XmcaY9FLe",
  "key20": "Pda5EndmZovZH9QVoTJ8MCaT5XZ2HYX7aLf2gWkGqvehVUSJQ1d526SAkbEpsuXtEHN25f5fAGymaqoGf5tKdcx",
  "key21": "3PdcJhY1upneB97uuqowJGnKq6gQd4RY6EL8LAWgXtLxo8pmLTT9mPEfdagdSXVrsSgA16zjMAXkdPsShz6r16sW",
  "key22": "4vUZG2HBVZK2K7oiyNpVufJyhEQQ43U6ajTrGe2MwLCzB1Lj4i5msbkZdzYd9nqBA3VgQUjwUnrW7399kwTMT6Jd",
  "key23": "2yKgzbyLDd5eMpQvRp1Rcv9LoDjmxCDhKqyNTZ5D7zVELrWx3HRTCMtYnviW1KaygKhp8ErRsu29UfXDWkR63SFR",
  "key24": "HuN8ai5cRKzLoZe1Rs713UvCCf4oahN3TS4ZUrENLKpw2E8D82fLRcTSQSMzfLx4SRXdgnDmPLLTmZ7BRu2Jjyr",
  "key25": "5fWS4VX2DGwyRSP4rPcs6ftrrXp5rYkXpM172m4U7wpGPcZCHxbUfFNZJLYd5xxmwda3P6uPB2kdTkoqNXcAKs88",
  "key26": "4tTcavkWJB4RHLwWA2vEGUMTbzvbQaUyLYNddJcuHx16G6AksY4ru4wognmvzcDE4NaNmQNqELSMnrZWFa7ecSkJ",
  "key27": "SbifuNkE8QLbSmEJ4KQ6GaGVKTZJAQvwf1N5qKaLqvd6CxeAhqwptG8NXTPeekeAoUnrK5rZ69G2HfFhcdMMmZ9",
  "key28": "2YZ6UFpMotFZGGW72RNdrECMhJ5Pb6QjC7qebLEHt3dtfJrnokXVEx3kpXnrCNDYP1hvFBLQw29LMPRAwpuHuQ15",
  "key29": "2aCQ9UPNhnYv2BAbMjEV8HRXpZwwigJYif74hspU3Y8X42r1QJicJb6JE628WxquhTUeNzZei8GyEdeukjz4PhQY"
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
