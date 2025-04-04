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
    "8CjCy6hc6nKbiZaAn26HeZuaRaTByngSdLkACxrH7bbfyc3B8EkDNxMr8VboUWxVApHZM5FGSR4Fe2sKpEq9EGt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37rZPFammHounpTJU64tEomB29PQXb1NNe6SigpiDaUwMrD9L5neqMAE8nXQ6yfZEyveUECzg4Tw8ujbc4F3Mhp4",
  "key1": "FsyXMXKQU7NMDTjyTssMAcckZN3VHtuGMfgyxiQkjDfbv5GeQzM6dN5cfSTEoNU7V9eukb6NqMjhLkRV9HTkNEr",
  "key2": "458qSZJL6dqUHMzvXmPPhLEXE3R9qrCeCJnqM8Ebek4tNGedDWGMdLQfN2v6bkMEVEJvsRXHgDH6YFqiMeGYghVC",
  "key3": "5K4gU5AWmqhd47cUbZdcjb8YiVtiC9t9C7ZaFsQohdf7xLhRwUZHhoXsPHc26WbDiPsYGAE2GARyPSThVVnzsbnX",
  "key4": "5fgbez2goDfdhEuxsxFPZ5cZY9SRFhYNibw3MybDyAiqE5HQW4aCwDsyMBEgia2RtHs91noCrRuAPmYHBCRLKGGg",
  "key5": "4ZkNDbWPbGiLKc6zodQyt5t6qzwAZAHF3RtkPYVaa5GPAbJrdDU3ChwjHTjFHK5ACwE8kaUtf1azQsmSQRG24WYF",
  "key6": "4LXSWkj22SVMUSbp21BhD9Ppyz3mY27xrb6JxbGzrUWxfdPujRzjCk2kPtf7R7osb5BfRhY52Cr4P9wiA13umTXN",
  "key7": "4KcjQnc8EfwRM5tt9xxPARTnR6cWcSaERirWzehUdRJ9LKFVbUNSCbM6JyeuPaM3PGoAyg77YKFnzjzn7tkvRFLw",
  "key8": "5Za5KrkyN4dx843bzw5Qn1QFHn5S7QVABZVCKSuRPXYrU88BA2Lu3iM5WcPiYKBw3YEXJgUuDRnLsh1idrP2TG5i",
  "key9": "3G5bvSXM7P9q5rXm4EGNENwWC7SgofPogty7yx1o3XC8EFCMm3iYPCE7xnkdehKb6mi5mWLqnFsJ1cBV2FuPqhMk",
  "key10": "4mN4zXWyahzcN5aHsAj6R8sCQ2FRVAEMTfU98KzKb2VB2zXUx3ARm4c83bSEHmdK4i4VobJharzv6AUmAKc4nDfz",
  "key11": "Mu4gxYno5J5NvZNJwMTgN7kv325aFtcmHcbw7RFrE77EoaH19v4UXUNQcWBj8Ege7nLLbWogUgy5nEVsApg4mW4",
  "key12": "3wwemFGb26J8wQLAJGFFwVx2mQgd6qRcWcgKmvZQUFCqrCkKGMbA962qiq4xHb3tHqN1KP31gzow4GBWA5MRZ7PN",
  "key13": "3ohfZgA1Xgg5gg9dSREwEvLb4uvMAdkyt5TKbc31479uX6YhsMfWj4g8BxeqMKJjmDnnwAhAqVk8QBqfwDt5cJQb",
  "key14": "49pFPCj3Jw4MWo6riWVjA2riGTdAeFvnbxTXCtSo1BigWCUuRqEHMpEJfm58336w7Qxy5sY7eNPukc8gBdH1tpiW",
  "key15": "FJ7Dvq61rSKook4p9Zfzcfuj8x3yfutG299qnpBvaKnBTEoxm4wyxhi7gaKhuJr8YHysMLmsDJZ3zX4La8EH42D",
  "key16": "5ZGFU9S5g1cxkNRHfDYwdfEZBYdZBYyvcQwDoBxVCpUPLySu9M2orvD47VDjX6u4ujsWEiQTwTnviof2zThJ4cPE",
  "key17": "55bDwyoR4rC3pksYVSXaREmuz2N4zhbbFJTSi9Y5twkiMKGkSQBYrXCmaNkHwUVr5j7m6baSHEgitn8QPp5aMzeZ",
  "key18": "3JVJUxMmVjfzXaDRpvbnX8VqLToMcq9CoQPaakzfHPRuacRd9K5WrWHVYoJ1vqgiFpM2cFfyEAg4EH3PC9DjtqK6",
  "key19": "dHpwroUXqjsBqoYzSus5dG1JL5q16iZ4qAveDj9kdgGGF52zh49uHpKo2L9YCSb6yvzuUqQUk6EQgcd66deXpf4",
  "key20": "HRVysVsZZ8FQGNxumv4GafrPHZ2tobtu8A5SBLDd7bxbfdq1cCmhCfKDPWJLicpJfDn24n9DowZfwnx1ra5KCkC",
  "key21": "3kuCWnTzHT1b6cwosRXJBcasnxfMMWGsP8Dyk66ata9Z9XhZpLXoiFGUNoWkzSsNZe12Puc3BDxHWtmhMt1YUFUq",
  "key22": "4x2Fk53YbtX29TJ5bHckNF2rfUmo6G8RcE43arrTNxHpEoinVqFZTrrcBZnqKFQuaWVcLsnh7oTfG1bUFJiBcgeN",
  "key23": "VoLgxXYDPwFSo6vmUZ93fekzmFxYx1ovsLvb9PtNqCSN7jDKP9cQ3VHJ1sA3aErbGbBZbPx3BsDZNUR8DK3u2rD",
  "key24": "323AZFC5uJi36DZzTz7QGi6qs6TGeZtjTQsatxEb3LLLd8q4hA6d9aBeQhyxSv1LJHJSpEhoRQmHQb67kMR8koQv",
  "key25": "4Nn2Fn3cLYf5wSGAGVwHBN3pC536tnmUhfxu9SfVJXXga1gxRp7rTCv8nnr4B3XFZaGf9haUB9t2phsQzZknLGQD",
  "key26": "4yRKZM7zXcuhdEjhHAfVgoRmYLgQT7sb9N3sCvTtpu1AN65eqTFP9oESZTH4N1qowNg826tcQmKq2JUb3jamf8uD",
  "key27": "5weHuzY1wV34ESZysWNHyhPEqnpEPSWwBDbWVR5nk7M38LaBSQTMKpNxXUeQ1uKEcEgTVXoKwEkpMcmMJseEQ4Hu",
  "key28": "DJBNQYFaVWVUKDymFNoVfcAyqgCx7z4b64Q4Zvanny1PRK9BpvBNTBALebJmdQvzedYgCu4TCwGKfYkDbgh49jy",
  "key29": "53bf3n73emG9JrktCKGAdueSh5vhtjYxGvX2Rpqh4Ka6Co68bTocMvwrxgvN5NaqeBZXy8QxRRSrhYCWseY1Tf6n",
  "key30": "4HxppgFX3Voe5qDSwtdUNqfKZg37EsoZFPb5PTBhjAXpUKFaaCWv7CYLqseEAkvRoLT7uJi4xJTKr8RfQAKxgss",
  "key31": "WDuohDoFizNjPSuEM7FUhXCtFktPmjsN87MUgSKeJxse8YcS8yv7PG18DYaRgR3jTSwNT7PGGjgPUm8J1LCeLwT"
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
