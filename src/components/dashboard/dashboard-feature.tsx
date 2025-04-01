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
    "3RGBWXBMFGrkcjSHmeJwFt5xzaAvBhYh9J3rH3WWGbvGBq6tcuRckuw724ausLatpcSyoZNHeVRD3aHeLPGUmF5b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UyXxfrK5ykBsVjCMH9uxTCM35WU2Mx5QuvEZAVExA1aBGGuWnKMXbhLrw8m8PUs2ZxwhzJPTjFmxjPVgLBKo7ZX",
  "key1": "4ZtpgsXmfSBqH6xiewfhV4bFtuJ2pwMQvJiJxngfy21n3Vhy73pSr1wWrswQ3XZAKEvtZLWVCAadyN5SXXc6b4eF",
  "key2": "4pciWLuKxfj7grhvXsT1uB6d1gKoqyVn9DHoPGFyjYKJqP4Mfi95WHESDBa7X42fwCNbPqnDavUUPSajvbwqg9RK",
  "key3": "9xJQT2VwUdCjfFYwnZyu5taCkam4ozS2JVqrkQx8J2o36hKCjiv3GcZMTSBxSSe75CvP8vmhKCm2xkixh849MtL",
  "key4": "3yCdXfo6rKTeeYG2QgMemDAc9nPMDniEatNPFSY2g1tkQQims51ZVHDyhaj5hMj7Mr6FE9uwvf1VZQcE47jw1RaJ",
  "key5": "53g7K1LEKKgDW8XYE5VGDCkSshu8LJ7akEFir3xtdjKMKaYmrwh3SDbXm244jz4i1BDBZUTkrHNgvgyVA4CQaRfr",
  "key6": "3GzWaorvhSY7R53Rq2vs27TPiobWQ6u765yCd8zPQM3CQ7ZDhTLWF2eZHiAfa5mhYoSHn4EEPoea2AT1fEgJ7uqw",
  "key7": "FA2oUxfiuYoXdc8p5NSz3KXfuNagyqRWc3QvE1HCvb6WhpPKrofx755YsTGf1ViBZiFHqp1Z1KEjYJWc9bi4kf3",
  "key8": "2WF2QuTGtsNBYioPqga9ioL5DUSU2QpqWSrB89P3eSZE4LdJA4iW28quTk9TuiYWf9vWAykw5ry8KvtiT5nmnQc8",
  "key9": "5oSnKp9Nrcx2ianjaz8oyKHGVgzWjNQoEo9sjuTCP32iPy4pfBVJ9jiiETVgKgkbUdrPG4VBD2HVuFLZ3rQXzAsS",
  "key10": "VJSttA53yRzpNyd67w3JpqYDfXsd2A5ViJis8ttwHcKUammpX9s9zbTpWZ9FQH5RhJqnDSa3wxFU9tMjXawrxe8",
  "key11": "3XtUzFZ4nXVAphZK9fHnRSA169hw8vBoNQPErgp2NfWf821fKFvAic2N9WDy8oxNby3Xp2KVkgXSufjpeE9PgvZP",
  "key12": "3NHAhtUfdRgvzQDhYK2WDCtKpKYVznK2zggKM1CV8bsUA4vBWu5J9tyMtvpQZfAkiLmzuSBydHGZTSR36Ha2WYQb",
  "key13": "NftmbfQxphRXqn66LKYbPSLX44oR9gQijfD94B7ZCswa6QE7iR7gLbgvDua5LEm3Q8TSFFDy6CNG1FQSv63Prqa",
  "key14": "2zm7fqXcKcnJhWGBj5c3GxawGBm4mJmJt4gCxQagip76ekP36vHhLT7w6BthcxTHpVzd4dB8WWidnthstmBni8Zq",
  "key15": "2YJGkN64jisRHKMpA1BdmdehXpThn1dZLzJytkPAUPZ5wGMUdYmtCunrwpScKCBYY8LRQuzLAbssDFNTTKaFd41X",
  "key16": "4yp7wWnqzZbpzaa7mdxXSSYzXJnwXCXubS9K9LB8s4Uw9fHTWyWX4B8ZhcJu9D1o8RR424QvZ3wQk9UfC1nsXiHX",
  "key17": "2riYxUnb2FgkQto4Cn8ophTCDzE6n9owBoDBexBpAF3U7rvhtSz6eFdupzujANrSB54oFuGhpZdY5UYaCzmaka6U",
  "key18": "2sZAe38D3dEs37e3snDBc6X8NX2TyckJLWKqAnEpJHqYLDeqZYSQqboNs9xVuXq74skcDkRBaweDpk6t1xfjZzXK",
  "key19": "2Wj9JVpD5h1cMjrJLTwFFHKnukVSF8NPxHvjQtbfXx2ZLTkLFLBgqFKVwFCYnkNmjEJcnTzczL1FcUybYVaqok92",
  "key20": "UhvP2XMSuBp61Pqm6XHnurUERTutvKvm529sF7LaDbRiivAFSmS4H3EiKAZ6uptLizZNiSc89Y65DfazWGzeq9x",
  "key21": "65km4kK8WRh5474dVDU5p6jLQqHbra69VMV7HHfSNYpBMNuWjKc9janZ8KoCiXWjFWw7Lrt2AAMMZmhNcy1TrzQp",
  "key22": "2u7WDvUZcN4aDtzDhYfX8yEoqQwDqYwjE3hvXKddmeWQ8Bt8pEtBxCuf3Jcz8ViWzn9QtX4BGCHgKwEZWV6voL3A",
  "key23": "4AML89zrbek8b2vZb2TKoCbXmt1JaPiGq6fpwf3U69WZN7naxunNuregjncRyzx9K4kdttvaxWmGnPgprYCvL5bN",
  "key24": "RXpCXJtLTY4DbtGekGvgeMay5BxL8BbLodJWzS2chuSSmNuNmXjHd7n3c7749r82vFJMmuUibKibnjdGt4UJ2fe",
  "key25": "37kaGyj6if2sAsUKeeUiEdVjBjAo65GwEPa9ua8PfJkLWJ4WHT687szhwWvTehzEezNEFPCEqU1cnJBLV71yTjQU",
  "key26": "3pt8QcrfrCh7qtyNUEtWZUGoBRAQkgf6iDkkDe9zd9S7F9arWTMnjxiYtTFH12Nh8UMqj4FfcrsAbNiHq4Frpoqf",
  "key27": "xhkrj5iAawhtMfBZeSpAPdR4NVactX9Xc2UkdToVt6gELnvGvFi1sRDAWH1d8F8SFXXFWnj69NxTuCHYECBS6v7",
  "key28": "4v46NS1vJaZBJdCCp1Yo2ZA8DFY2T4AK6Mff2o4tek5tWwxxvKcvv2WBGSLQ7h5imkkQL5EzhHHdZvGmSzgJw8eV",
  "key29": "2Vym5PCb4tQnpY8NFjP7tNw5L1FXHbLA1muom1CGBYtteGz9c8sKna37vStZGVKZnBUpWyqZBU6xBcGUCfRXaCgq",
  "key30": "5d8vhw9cdKW7uSp4YXKta9ccBxQuvxGizC5YnEgWq8yL3zmYUjsLRiNt6u7wirKqYdm5SsKBUwF3uf2vjfb9oNcR",
  "key31": "3VoE6DQUngsKevaLKBjEJr5kbhPDdmtGyPcRT7Z8wbK5staBb97gwHX7cSmgVaynV8oUkbFneEup5ahT6QW1Nre7",
  "key32": "3pChC8pp4dAjEGWqbXYiHN7JBR5jx6K6VP5U7JrjwvmjhkXVvUq2z2D1dLdnuijBMPafnVLZp9Z6NnChx8CVD7Se",
  "key33": "51ERwAstaqNnMq3Yp9SBoxejiMbz9fH3T222zR5gBYPnciiCW8jZG7PFnfgrwVsK5HjgHg7JxH2zd2m2e1ke3fif",
  "key34": "4CamH73afsbzvTK4C4EJYS2WkEMhyk8j6xGGCEiEeZNg9jR3AkfZAxQdKQi91nTU1p3M7ewvrkoacg9XWJmopLeF",
  "key35": "255X5PfxyzgfJcinBp9cs8MFyqBShrKWcVnU1nqNhLHxkAM3DaeS9s9umG1yFpR4cH9iENMvz12FHsirfCtk96tc",
  "key36": "56JVH66uKuDPLn77WWXz6iAKEav7RpVoLfRsyUcMWeMMLSqMi3YRXn7Y47A8ZZVEatL3pFHKACyEv9bRwDLc3LXj",
  "key37": "4E14nteaWthUcqZNCZH6DSLe5ZVcYLEMofccmGPtRHx8zbXUxsLtNDM1KDR6Lej8Jj39HznocpU9bruMyeXLoi5p"
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
