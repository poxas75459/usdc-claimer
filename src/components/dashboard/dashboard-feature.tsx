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
    "5c3B44QfWwYnwcUYQvedT9BYUqV96bnYCaznE2smdPLXRhMJ5hcgpB8t8VdsJ1sZ68MWr5Bir1RF1XVtdzAWTvef"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pSfwwR4q5f9KLuMpqchmwysvWVFQuEqRS38BYoKo3KWBnAsnhQ68yB8GvGE2gMHMFCZ9DcWreHY2QMZQznYbUjM",
  "key1": "52AXiZ1nPLKsYF5c472FVFbaCHh6rPsFUgtoymiH7zFUXh5347JStDTznuqE1XZE9o5h12cwzUmANTZmQ7LtuyLg",
  "key2": "5SmpbaNQJrc2Q7U4cp4C5AEnBERkbzbbieAvMYzEatDaSHiXwqoj1pr8xqeY4C4EyK3Eymin8gfPTdNpS7VQgX9X",
  "key3": "6729VULPHCS9P5hp3sSZskQCJWzoRkyF8bvaQsnVBxEAUhDDabVNJuruvoEHQQEjRaFW4mXTgxGNqc8YVKeK7WiA",
  "key4": "2WFkoFyzCKcR6hQNAKD8LVnTkzeu6RkzYLWRtk5V16UduKiEvu2Vdwnzq9bvUJB7H9AQcfwK1hEybpe5v3xj3jh7",
  "key5": "49B6tGUo9JuuzfXcvJzwvkhcor2Lgfxz8BepgMz8otQ4pVN1XnckDobFZkkCpmF6jf2MgUzxTvwivYn5UW8mpWAQ",
  "key6": "2q2sMxfTaobLavWk4e73hoD7oHotH4Ud84pFTFxrcvuacVQRxKxBJ1Fd46K11j3Xw1iw7VoCAd8qTmqszhvFdEik",
  "key7": "66awxMAKQVcibUB1HwvrzKc3zahUM2xfaUzf9uvhmJSSrBvYaqqF4L8MMLK7BUGuzfeGdvBvUW7Lm9xmrW7Q4Eyz",
  "key8": "4hj5M12fP8EnMpcFi9a7tjtrtFjzzFTm7vDbSnXEeougvf1XwVLMqDBensP4JG3UbxP4jYAHcLstzR6cJcYsgjC2",
  "key9": "619HgN9cKLLC7VhTdsndTnYpDZJnBaM1DUTbMVr9GmPrXziJfYX1S7caY8h36znPnUUJAPgehJQTeNp5fWQiPCR4",
  "key10": "2siXQmzCibSi1w7hywEeHdWvJqhVkgaHPUH7vqm4xKNKXBsfhCQGx4YGbqGrrjGiYSCSTxwKg9UtPJdq3mUsTk27",
  "key11": "5MwHAC5ufwmWn3bq83EULH4WtDhXPxd5yfwWgZmxVL6ZUQXsH7QYsBRhn5wjVQvkSiUqYbKprY4WjruEWGLU43qQ",
  "key12": "1y4BZz2QQHwDn6P1DSy6N7sv6NAiFYcHSaYGXSM6gBzPX4S24GbHmKEHtminKn3H4ZDZWBfhWyG8DikB1jdhVUx",
  "key13": "1yMCnPXdrgtG5DKr4HYBaNdJqzcUXmBV3DivDRGLKZBDw37y4S3viEUBQDRUcvYPNw6xUf6EUjvThKyCLA4fN3",
  "key14": "2h1YF74Xw1cFWQyD6kw5BcuW5iUaZjqRFnYSpoDHFNShhMB5Biw4MCQrnaZAF4c5YYe2dyvUQVY5XRmP5XbZtiMa",
  "key15": "59S68aqfExHvHbtPhADkq8YvaPoBWEf9UEbQugkcjoVqRh9nSeiYr1cF3yqu4zczSAsAirzxNYQ8qbfSACEZo9Sf",
  "key16": "aYJT4nHD1QUXTRf55cPpqnaj3TS9hSqGUSQmmsgMQgzf43yknY6oxeBHi1PjN7MPrLWuz74EzXgkHiafx9dgH83",
  "key17": "5sXUdx9CN8FWSrdHtoQ1pNF8bmLqWW512r1zLP6kUjgR9SWradZj33fS6uLvBVX9LozeJGQywDQot7C2CYaA5ZeA",
  "key18": "SaG7FiEdZbuBUVreGxghvaRZAYZZuVDi4iXBGzmuLpnXhvJjU5Sx7JdkVWt8vURK1RNvW69pvpoUsfMWBCtMF8H",
  "key19": "4GLS2UoR4supfFwVNEX9zXYaTnAvNvREgQ8GakxUZp8tDR2i4a9cxqtsBsquX2ft4K4AFiDr7tnkNjrU8wZXCMuM",
  "key20": "4FCR55SRfZeapHzaty4myJoVUAy8nygLZCmFDTPdaBBi9RNVZYPEXMy39EwpqFGvCkpeV8MEMKsskqU2U7nHuzPZ",
  "key21": "617ui6xBE5VuA754WW8EwVoWwjj1CqjAzWWqE7KYu49yMoE6vTFtjZpEbNDUREbMJAraHize8SB6boZfkjtqNZ1m",
  "key22": "64HnDbAV7nZfaWAvSBDkp1eQNqncrPBjGCQHKEuAnQVFtxYh8NP4nfVZCuMaKrPKKBKnq1vmLzy5a9FLQi6wrXg6",
  "key23": "B3ZAGC3AN3Bw2P1fmeqgZMsaLwgGiuTYaS4y9Dagr9T85EimFqPJasVkYzRL31V5UJJHsUfsVD5WvPzYbKRfeSa",
  "key24": "26BFe9dnc7S1JjkrP3MohJqisWcgXq1dKZRQV1iVdQpAArAuv48np8fk2VsPjN3nJycumbYHzeJmUNKnDZAGPeJ2",
  "key25": "2wa44xZGEso2jx57GxEEzj8t2Hav7tNf7R5jZbr6d3xyKG4GgJS8HbsBK7CSs8Ujn95tF3sttmUN3sVtDGgEKJr9",
  "key26": "4sKStKBYamWD5iEFVDifADhHB9BRxVyFsAy9WZT9oCKrYhpd9uGgxpSsg4mHyaDNbBBY6343sUrSu4QvNKg161tF",
  "key27": "4Q1CQHpu6W6NnqW4n4NyP716sYHKYKbCfGerEMsysLvkpD5ycuMLu7bhBCj16vx4GTfSVUJccCQ57gRWwMFf1iLg",
  "key28": "4E7LJ4SQFvYQ7ZfcHUZ5yByG1SEWE1Y15TmTXS6de7Cbu26UvwBwBKAdSTc3T4Kf3Zvj5PaxhxBNER3hbs7TTtVV",
  "key29": "2JEzWV3cpdF6j5S7PeqUUi1cycLEB8BDkXpB5TCnW4EGJn1mgJY7aC2erMXUJdSsJJzDQGb9hg7yqCs6CtJqmAiv",
  "key30": "2h9J46jccBkQpM3cnZuQSCw6p9YeZqrgvAhysiLFzWJ5Ro9H1RzmhT1vJZeAvJ3BKJ45q2eHzPxbJFa3b2UQ6QY7",
  "key31": "3S27AEXdSfuCcfayVK8LqVgneYYh4xrtXBGjtTrixDw1oi5Pt318Ppv2ogwSPVFWGiq9r4kNnTqsN116kUcjo6M7"
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
