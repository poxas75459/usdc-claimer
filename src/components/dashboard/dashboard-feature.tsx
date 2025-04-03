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
    "n5bkfzT1tVEpPXur6BEPycUtMbqdBqXwizKo94qwtWZhUooBSX2Mk6qQAaMzTJ1bNu5AWn6HEncWhyyXXXo2Mga"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4McPbn9UwFRnbt6BDykzQK86Woj7X5wKJBnye6qjNumjPwAac7WbGaSb2yEfS4Tg3puyYyButH4uxwXNHWtvpowg",
  "key1": "3Q58aAJFa8V7LpHKtznoFoWcubdwzS8FVANdAojnYTzW11Y2Uq5urWy17GCPkcYzm1Ksd2Hb3F6uaGeqvo3YCK6r",
  "key2": "4wiy7CFv5C8cbjnovYEiaixfY66v152s85E5CAVeRABBZT73snVE5oxvKjZPAnJmyhhgB6iLGpYoY7Bh6DAC4ffs",
  "key3": "3pWWcJw4ePCgRN9pJVZtS7pUGvDiX26pQ6WiBQBLYGZTsG4giBZXWQUcQqXc9keYqX7VaEQFjmayTcMbhZoRf4NL",
  "key4": "ZkoFASYjDDYEa6NLDL7Csqo2HupiSn5D1Z2WeQXTBG29UkJkKNNhG14hSzBs2YZ1kW4XHuge2ToxXcr4qMFXEpF",
  "key5": "58faXct9BmrReaECXZszvAPfR7c2YuUTaJHPy6wXDYwcWZCnfJTNsvycGYTP7B83FCBhdZf8ZaRjsy3wNWJ7KT9h",
  "key6": "fjDLYrxkfbPjkA6fFrTLhM7JxTKGjatvHeor2PAUqkcUPmCs4DN8uExU641oL8ew8tf3ykyEMcMGZS7Z5YKMbu2",
  "key7": "3yZfGhkVxcnfmERGnMhPAq79Uhba199rTzuh4L3yLWXyXZs3oeeNtnxpCuuXFGJ9Zg5YDjKsSqScx6Ndfsh5HEJP",
  "key8": "5o51rMQmocBzP9n961bN7VYWbE1bgdPkM3VBPbUr2HsT5YkAQy1P636hBsDdTEEzfjNZtbRxTPuc5F4nkK7gmcFU",
  "key9": "3rx4Q2R5ppMofmrwY8uui6AQrNgRa5w6hyV8ZuoSpNbavND96TVEWqaT23hS2hQ1H11Ps6JXCDNtcTGgH6Ma6zCa",
  "key10": "3HA4Aci4bcBduqiuPBZBu8P2WBYEDTebcdXZAqxm4fngGkQ4HvPenLwLPxhqDio7eQpNghqWNeJi9XcK5wMevVoi",
  "key11": "3CAqzSfBRKzrZ27xPDn6BXtmPRWzogWhJR2Su62XjpSZxWWyQfXzF6NqQ8MbaXNRkvqkhg76TvNnZiazXvYQYkQ3",
  "key12": "55fa2T3ssRwjL2xph3pGK8qGoWjRfu3g4WfBoc1pTuGBx88zmZ3BTQEZ2N6nzHoM1Xkrc2xiTtJqUN5JrMpjaJou",
  "key13": "57hXLZb91X1NLqCWu4zkWn79ihHbL4uVFFaorxwvZPuqdsj2FjgvqPCkifoa57s6pyF4ehWoSyFGURuwYq1EcHsF",
  "key14": "2NgWyxyk7zH3Hrxmr7PrBpb2MuhknN259ykaVWDS7ojedfahtC1JQA8CociQQ7iZAnat45yW558BAb26Z4PBJvNn",
  "key15": "3UhUxja2cNWT48qf8ea8B8FcYFoCvJUYDtW2B6JVkXEYyFSZHexjf9qsgf4xz8Be36HWcana8DfMvrGNu4bbwTws",
  "key16": "5a5punUKvAkeo7vncvamaUCpafk9AT296L1n5Tt5Bee6gjVMU8akXXxQyccmdb8WoDGAod5CMiJZF5x1rLyyLk1n",
  "key17": "4rDJuDPHpJNtX79atDVDqYFwsYamxHkm52LVvU9gKLrNQs2Vi1cCNUstphuXZo2pMrsY7xJ6a5HDckGkQX44RY91",
  "key18": "4b6G1gLFHsfjVGNkWbzdfwrUyu6nxDnVFbxGv3WSAxu2qC3jgU5hT6a868y1SncZ1aiaTuD8iTHPmZqLWpqSfeBs",
  "key19": "3PZkDVG21ivqCpcqoe1CKisy6ycVFDXs8Y7nGzLgAoYkE5rJf327BLyBEM811g7cfyo9PYvch1tJfsMEwKvp8EKs",
  "key20": "2xYKjwGunQjkQ5TVRYDTHneyywhXdmVLBoCirBzeFZLXaC9ZTDkNxsdR3p63uMqgvEqXWXBfUWq3oJGcPf7wdDHM",
  "key21": "3cHZisycEe9UsY2r6wqo6JFXvWU2HguBFuc3damsCMqxGmAgDTbCjEnG8tLeerFFDbsxpdwEWZ1C8sKRWJfEMZHt",
  "key22": "3Nrdf6J1YWRUktQAdHHyonSD6quRxarFgEA1dQpwqSPzQEqDUJ7ee9MnWGULHTxrpuMFPihNApykL1Pfd89692SV",
  "key23": "5VDL82MS3WraQfFCTpWYmDKTsDCicr2uHbcbiDZME2m4FynSXDg2T2i8jQrhnw3YYvmJ1fQ6F5iW3StJ2bPLEjs2",
  "key24": "3soubmmWPhLvgyKK7WTeD7rZxFBHTeTcotipcFnMZwmZWwpGD83P8pU1QymMePznhrtxt1ygQzMYh1ddVfrBWtbY",
  "key25": "5X6rAYHpmASfXozvGuV4oXDNHktDwcBS3ZjTYwLHtgXRLZqJbt8thi5neCRhUknBqPB3eCFXFwzEjGYfNNp7fsPU",
  "key26": "4FZvzgPmgxye6KvhpA9pfHTAEgDDwMMj83C32jCSGRVbABLwrnJiwz56N4TeERdNTEXzZEaWrarTMaH7zkkAFVsV",
  "key27": "2KjC3YdCYvH9Nb2QhW4DFRxtu4VG13a5Mnn8sEDmmeKepQn8oLTRuoPwxPUF6HGded3XyAx1ve2TkmyPLnfczaBF",
  "key28": "5FSAt5tvyQ6fUhe7YYAtom17bQckigGVC6WT9giro31ufZihrDGW7zJMmythF8RuA1hn1WpdA7VuYKNLWM43kfhM",
  "key29": "2P7JXrsZGocNq15BwGzcJQ2Dd5skp7CXRsSvfUeXGsL9NZqWoxyjAQL3Bhpt1rfYso9YyULGCoX748GctP5Nbh5X",
  "key30": "2JDi7MyWi8PgiTWnvsTtHK5LNA83akEdJrFTrEm3hEMihEMtRBee6x1w93G21q1oJ4zZjYR1hgV5oditxLWBpeMu",
  "key31": "gfzTLSa7GLRyLxJjnSkkFgdUybaTXw62wH3cs5e3HQ8ymBfpToC55arKz2U6xB1fo7cRBNSsMR3Bag8EBSspH5D",
  "key32": "2ZCgdqLeapsVLBZ4BeEzdUu5d19zGdGbMAp8B2Grg4sDUK2kUWL55XjjPzTAw8zYHFXhz58wnNfyxTkr3yKxqgsK",
  "key33": "2Ta8tJq6u2GdGiqXtsGQcbqUw8tvB2zc4kVvkpMNuJ7a21hYweLNbpZY5PfBqt7gT4M3zWPCtBHpWXo435mEiLWE",
  "key34": "36hXzchgt1fLrVu1nmCgKegvDsqVUQoKAaVqbSzs6Z3oUfnCwke7YNe8ixWAqUeSa6Go8FqLXivFiyNeJ8VS3qVZ",
  "key35": "22m5LjHhyo2EMx1jiKciznvq9QLPD5yu2jFPfkws3NBqMVDPpHXH75YnpnA2jHsCzHCJudSG7UgJZ17XUNpcGVjz",
  "key36": "2D3bjEgtrN6MnDrB6sPrXRFKVZgE8a96VR5r1hcCktY2z34PkZPwMSVfvMFHRCFp2XuxtocuEhDMk6zkbNbvCdVQ",
  "key37": "5SNou4rUwz3r8G2jsULogyy83QrqxLmgKTUHA2H9X5UXFN631PTP3GngTxYn9Gymh2TQ4aZkxhfWnbCGkfPsoNnN",
  "key38": "2FcuEJVszYDLhcSWjoThAeK2CSK7XSNrFAUsE4LYSMqZnSJsDfedAUs7pPnWzAtmk9tE93yiZ3Apak19ML8eM6yK",
  "key39": "4XN3rEVU72FCpkWj9J8mjjbaCcHs4WPMUDfHYQqGiZHXG9myq29S4DZhZBDvEeyHasL1YxuyGJbydEAfAXWFa8KA",
  "key40": "5VFucfsscddmXiAzy5L6cySfqjZpJgYtdwdmL53PSxQWiJqYpJSahvcjru3QHY4vVZiRWcdBdS6H2arFxN1N92x2",
  "key41": "ustFgPpC4Xi5y5jRn6TVt7Fe9VNY8CJmMfJMu4tugoC2UN6D6YPrFaMTsnyPWwSo1kcZ4fvL52Jv2nc24MnTX6D",
  "key42": "5nAVE2B2dYfRX5YPQ6Q2Mmdnyq6HWCXyy8JUHGd7CVRFCwH3YPi34fPXyW3j7HqUgzqyYHhPRKTJXZiCjwnpB2hg",
  "key43": "2FmBZUQyESJc3uJnXbtxs9c26AiScx8PWG37GZoMa2BYpeSgUgHb5hPVfhSAJrSKNtyLXv6ZbR43aMVHTgo1pdLH"
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
