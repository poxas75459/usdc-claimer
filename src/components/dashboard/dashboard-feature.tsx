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
    "grXvystFxFZprAmDAPsZ3ckxWD5aHJdK59UduGKGgpThb4NFq5MZ5mY1GXJ2fPxrQz8Bb8d48jUcWiz7E3vwa5E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kXQ7mNLU1aJseEy37ypxJcG3dPLiKRJsHjAMjxAFNsqgGCaJxTGn83ohgWZyCWYzCTqNmqKnnRYgAS3poi7hfL9",
  "key1": "2qrFUHp4dJwNLCKJtWvp8n1vLPKfNtuwfEtGC992di2V66y35s6EvS2Vt9gXpRaQNYfNYmF4pknyteuruc9mbefJ",
  "key2": "5vQBP46KYc6vixYAQZHiqw5AFEDE2A1jnHPTQRjDdQYS19J7aQJ9DmJ1pPRuz4PyGJHQc4e5yKMMf4zHZjSUixUA",
  "key3": "27b9QebWz3Zv1R7baWX6e2arGnbrZF7q6uW1RinbbxF8cYyvZFXoywPxDDJ9aDPNrURW1z8gJ4n2HKDHA95aTfhp",
  "key4": "4w7QMGzewVVS6fcJitZ773YHf8FX2tbgGjKVJvxvmkDkDQfSbuCJbUAFg7FCDC4s21CzFhNDfXDVYLLHM47Ms8SA",
  "key5": "4ZSmopK8KGWJGeTpRg2y3sQvE9WhJXmUPK1UwXSGkV2zJUgwg1WsFFgmW3Xqi5GRkcSUhV3sLr1U4deGC7o8YKLU",
  "key6": "5nBos5TW6YWVJy7LhxXLnSxsGnGoXGeai3pMXUtATDsm3PcYwDuhiJf4bDeftvmHUfTHGADXJhXX9jJN7RQQCFPD",
  "key7": "29eYHkcYLFKqQByRWgsh9byV3j71XmEikHj85cnnMA1FbotjBM8tukYxFJwdhGaxVrjbL8TNFWdhPr3L1FVXzSrL",
  "key8": "3sE7nUSNF6H4bgAwv9dawLdD7bnQfcwgcwSrD4xiKw2UzV65Vm7KSMXtRewzEWfqpUuB8KKShMgBAofPSWKtb3sv",
  "key9": "2mzvh65U6g9DS8drqX4J5eULQBwMPJwJmcF6QANGxMfC18JLeegvHhNeFfkVeXr7qrRT3qL1JaZbCzmaBqcC92XF",
  "key10": "4uK9NsVG6ueCvwDcKEjMEBfjqWCmpedTyWR4Z4ipFDsHzxUKjNCL52zEgEQdeHSnCybuG8uTX7iABKb7NuoceM3k",
  "key11": "2B6KPxgdVrdC6ukJNjdqLrk6tBNaWM9gXG4xNBBorQMsShPAiQwGCMkb62Nj8XBPG3PW8LZY91JJodCQWHFSp47P",
  "key12": "5wVdzGgnFWHh3hQGP1QvunzghfcQWXwxCmKygpYMURzRP9ky2SN9AgHsA4R9cKb7vr7eW4QEuGyYY886aamyxtN",
  "key13": "5KjtbVZfJbhZPQtcoQPfKYiwFtqxpwhy2DYZYKhmUcpcc9bi9bz39mM2mF3yRBgFaMAZoac7MAFt64fyD6z8fmNg",
  "key14": "4Vfjtsofd7kJrfHLL6vcTgrE6rBF9TfVwLQKkMguEbGxcUrfp2QRiwF4pMEtDF86ndApnWjjf85BWDNo8kXbdcEV",
  "key15": "P7YWeVHMPRTFexnBb3AbSKKECzJvBLffbFhR5vpa275S3sujezLy61rDjVomFnhU8EaqVPAg1ughb3rje5Zax9X",
  "key16": "4qkfjiDsRT49kaUbHHbu3S5euM82fS9iTgTbKXbrUnf6BS5rzfc2fRPfstLMFenN1S7BHrmDAGX6ZQ3s1VpzTj5n",
  "key17": "33QYwx8uevfpZieJciyd5iDFUa7pHNrLzKDTXTvwzbfqzyPYemkwu6xwxvwAqAxNYX8NX1wXSVajVs7M62ggyXqc",
  "key18": "4HUfy8rdQGTsXebSeYyna7MToFeWuPztfAG4jNShBC8erhX6uemLHQdxqzkdwjd1djfBPnGEDfyUvp4ugPSYFNdC",
  "key19": "qAVuvMBGoD8eV37XDnmDmCR6h1ozMuChyDrkReXhRNayyJzWDG5S68S9kQ42GVXGfFY8P7rZZv4krFBesug6w1k",
  "key20": "2M3Movp99YGpoQw9iweyKUacwCd85E95EqRoSYqkVRcqE9uJjpbH1VtLpuNxPLeZtkVa4nrzi3E6FswtJDz2DR14",
  "key21": "4dkNPoBMNFbAptqjVsUFsqheZJ1dm4EiQAgnW9WL4uXn7H6tS9UvJBUh4nb9CjqfpySYfhQyEmZsAXWHWpgtNxhw",
  "key22": "Wm3ngFFb5UQwUzx4fcRFWprE65sDC7FBj8NjZGhZ2rwLahPZorNSpDLg2Zjq855wJbeaM7D9XLJnndwembe3oWS",
  "key23": "4S2iTwtJCMHXakQK1jdTPtr4JLDRm8LPA4MXottKywSiD1p6iFT7Be3EH66Qs5NxbS9UQVBLV2burvAFKo6o6wPU",
  "key24": "4jXgArrmm3YFmmT8vPk7FKkXwEejCiDSMbfvp4xpLJC7oihgPx7HW4nZBvry5igDP123DQ572xcU228uWeazQJrz",
  "key25": "53QwqUa4413TxastRzo9ub4dXzZ8mSNN2Gs6pVtED8FgyobkEHrgrG2XbRSxWCxo6Utxyz2WcwRUMHR1PeAgpKK9",
  "key26": "39iKRTcbX7ymGAWEqbyDzjD3bgbfavyQ1np6bSArjcfKiVtLrC29LhpV5aWuDqBTBTtv5CEG153Msteep6bu5mG2",
  "key27": "46gLsGdQhWqKZ9EGdnHzVvHw93qb9TDzGuoDJpyhnsQLCjSDaLiWirwYX5Bh4v5ckwMuw5qgj6bBKUepbsXFNRun",
  "key28": "4YQXeVHV15BrRQ3dJErGCUdEve7S9Apb5NDy6qezBVxwJvYs5iT2aWJFCtMCncTCnsahNJpCyeDrWWNh8ScaXyMx",
  "key29": "3sJH5KoWpX1Z3qz2eZuMnrpNoypsJKooBKAPtD4W8VuJu55AjLdSMzDhydXDoFXaNbBxqrepfM3YjYHTQNHSSL93",
  "key30": "2J7AEs9QLF2qiZShquH8XTpTjPdeP5rLvv3iRT4WRgrGoFjZNgSAg2Yic7ukPeKkuiVL3aKiExVnL2xxdbXQsVgK",
  "key31": "3YG8NMCVN96e76Wqs1ALNJGxJ6GWkuxwh4hgSAV5T2WzQPajs3hZiRYwVKf7Enw15WMH5ZZyg3g8vDYZ3dXtdM69",
  "key32": "589ZoBRgsbKu9D3jffS4XWdieLK1zmXmSsEgxxzLWVnTBRQYR4S9tDKXNp1bwSgCwJjXL44xfQ66sPQqQfCEWmsh",
  "key33": "2fX3GyDtN3LQn7XX7fxHFYNK7vj2gQk8qTuWCb27KtsrJm41FvKqng8PLf9igh7NoTEnDpwTxsXEbS7D3fUccGUJ",
  "key34": "4GdytzV6W7h6ePGKVx3zuqYjDyo2bxD9qm6eiXyzPjbMyc94ngzjGQN7GMSs4PU97nYAYpMwV9jwAHFmcJtBbYAX"
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
