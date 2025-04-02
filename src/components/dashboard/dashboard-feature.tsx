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
    "5iT5JjMn6NvQ1uZ4VvxtMzX6nUA3zQzGGAgSLrsRiyNygBSJoqs9DZ94DJBBrxmrnFLZG3pbNaQ3NpU8UcBJedmg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sswdKZ9RisVdsiZ7kaJfbyxKqPtAR9RiUTzcfWQ9zaLe67REuBeiPMGqphAjvfFyw55pcntdhnfzSTVKFqTmCB3",
  "key1": "6HaKBpvvE5fXqTH9j3ayxV3a2uECoMSa769nRRaRLNhAQNCXG35DPvdAUHbAeCaFyAtQ19Mqf4SWnkL55scSuaM",
  "key2": "2LyanRzyyirYxAmqvYUFnRx81HusVfnPsLJHLKW9gL67NoyrSs8WV7cyh1n65WPMUPRP9W6XT2rUZSbc2DbsQSic",
  "key3": "2qXY6ELdDEkpABXTD5hNzNtCNTdbjeUWMdRcn1yM5Zn6vzVMqLLDYETeQWkKUM5ZFhGe6nBoW2nPcYVFUuTj1JpD",
  "key4": "124gsaLwXn8qkvac1dw3bRErDpkpBEguaR3XYpBj2omoPALksszt1WFjFoRge8wC8Q87PYhNEeY3z9vTm8bd9AMH",
  "key5": "21tvPuZmWiE55dFhRLCYSAXFnBS4ndqCdr36N4qmyCgAXppx2oVPun3W4Ktk9gzLJxyBBK7KbBBwxAo4NCgs4GFw",
  "key6": "298JwMu2aMjRWUwLrygrJ9RCb5jVufsUzrqUefycswUNHTsEmMJp4S9t8NAtBtERTJeMhvzn6UpQXRbS3rca5evn",
  "key7": "5iYqYqzPCz1paaxj6HFNBnyYJkzJZKw8jxDPEQECjNVVuRA251i2ZhaWDNa6PqkPXqVVQdpoE9hJdchYPZWso1mQ",
  "key8": "37yA5p47LBPMv3367R35HtD81ZDhTtHwqeei2poZURV7R3oMZ6AnVVAB2BthbJ5DkcoqgWmRYgWBEG2DPJTqpyEQ",
  "key9": "4g48pEzJswZofVn24UzEqDd5AJAjj246zmZmRWncoLGgnhvTVwMn3Ysom7tNCAyFaaoMu1hm3zdu5vPRFyZSccnn",
  "key10": "Puj94eUC5gcRsiGFryoxfFR4hiW9kaLecVrWyWa56ACTrnwrQ8fFYRLDRwHK8NWGCqCscMcuH2NJsgACrdu5T7Z",
  "key11": "2sB6yDyiFM4oAEvoF1vERMYqWuLefq56fWc5pxq3X4DhjeCvobx3C5x4NfqTfxqGR22SjXMC92xLqFQjPSBiocNi",
  "key12": "3rJz494azujrukRkSEzXz2fM5HtDdct4UrrwPHA3E7yuFpcCDU4ZJriWGr7GjvkL3AsTNJM4YG2dC7oV5nnSnHnu",
  "key13": "5A7tGduvCnfMB4c1jADhzDL9ALLmUaJ53ZiBg7oigsrBMardR7vv3T7TyFGVksVZeyD64nLPGkDW2ThesDNwusR3",
  "key14": "3euE98rBCp457yrRcj4dAThdmR2wsZN7PHkEmBX58rWPQxMVvFXTLSgZE2oFZgbF5C1bDAPMfe6wyrygJZ3eH8YX",
  "key15": "5Kd4DGo7ULS3xhCAPSt9ymkx4i8JPQgbv1Juw3jv8XwhfWqNrofYwg5386Y3bUrYTJpz9gKdq2J7ug76ZRzy2GpK",
  "key16": "3CP987dDYnaPjdcqFA7t32YwMzbM81UUSB1xmX5XXedidrvhwMCUqnCmUsYVJXyVzR5ersupgCMnr3xvtJLDpfKd",
  "key17": "4gySuWSgT3JipKof8Ji6PUVdJfv8U81pt5BeGmLLNYnCwqET4rk1kMoQ2ikMPPLs4G3bjqygGzkRg68tQRArneKz",
  "key18": "2gFSRocy1YqmS6bLvrrEf5S79LrSkoTAHBHsgDbg3Lf8vnJibMZmJ83reHHPJRnwTZZsVY1NPxDHgn2jgupDvxhd",
  "key19": "4MvCxNLE24jPWQkgVLuCd66tye5xCdD2srbEjKhTkMksuxxHF2fQgU8jne6cxfHxuZbJTGTg4aTt4VpvwwEdjKCh",
  "key20": "27ux4mhUmasMhdcZ3yH1PyWeYFXPchiFfDwbcFL9gbjojke9EELVZLC66NTt8zg6BEJkWQpnhk33YUyb2WXWwJa7",
  "key21": "5vS2FfFxfivvoPJ14Ek7MVebSen8rin3r29qYNEJ9sb7aBv4LLVQxmeZ3EmbjbYAHgUboKYxYyqUtchad4BdBgBE",
  "key22": "LoG2KaEcasryEAau3L8SbuMgH5UHioPisZKcueZEGo3pX17fyEwfjAn4eqvmxYiBUvuZrzPDumdvEc9xGVxaQkC",
  "key23": "65KTFngN4qqZ3WCc8vw6QmYxSpbSrS8kjfg7vDPSC1fNM75e57sjyA7nrEJpAGmAQxKmWMq5hz9VhrDu5eu9jQ7v",
  "key24": "2v7s5pkQHoqjqafRQmuURJMiM6fCZ1aKSeJupP8h15XxRjxC2nBYzygvNBtBxNcqCthb3LLmbs49jSYSfQ4BmdvH",
  "key25": "4ij4n26jhjXvGBMT9Qz5jaDsC9jEngHMoKFZntuUtpUFDegPMJzkW5QAcR6j9WCAerkE5m6xFD93P8iAGVh8KUXL",
  "key26": "3Bv64ADcQ5L2uuZXxTgxyTUTJjt4dQ3jMnQZfKwokRXJvKFUXzSw8uErR5eP59UJFfmLPrwk3FPa9EJnpRcLYn9h",
  "key27": "22ihCdJikeCoNCsX7AeMhkmKTKqrhYponWPVR5a8a31tGhizwAR5uzmt92xCGwZTX1DDJ7XW8zMsYbhG7NaGJuC5",
  "key28": "4F1H4kAZm9dvgrAipD2oX8CgiWAuZWwaoJdSNNUA5ctWJ3vVW5JNUU93dwmEmUyaRTHv1gvsriEzrRcnqEeeYD6Q",
  "key29": "2b5T2RHetnxExVK6XzvA7yVPVB99KSxoVavTCS24FdUQNeVFvoYWn8qa7WFGr1MpxpiQyoBUz6kQ6nmipzJHpHGF",
  "key30": "js4yzQHR49KvAKFmbEoJmQeHQbeF9zSwivX4oFKwdPjDQ5zBdh81iukpndCCotda2fQMbymWuR3VNqPgVXyhuaB",
  "key31": "58bDhqW1CgNvG3giE9FbGyayKXLuBGDTuouinqF6JE7a3Rq5R6dzB7323zcoGemfsCLzm2YMRDTtL5pXgVx86iVg",
  "key32": "2byRFhLesSxScvhQgVWJ5zWkmgJmLUmJarFkyyHqQr1RVnuTxzaYZXiEFFz4mDtiZJC3fW5K9HNsHtypSmKAG9EG",
  "key33": "2eQNKSB2is3s41rCjc2yjZJqcCvb8tKjjHSahNQZcmbChEkHFZwEpdnMz8PmnKm73PHVed4SqfSy8a8SJSJ3zSqr",
  "key34": "5gpX5NhqAtXzYJnouaTdFiXekcwzbGBhEQrwaxMKbSBcxL2NuyYT3JrxgFFHbsWVdQnbET8JWnwR29dmjvim4PbN",
  "key35": "Gw71HurPERR2rY6ZXvpUT1YrbiweieoHvUGin3Gp4Py4KSWJfbUCVAMH6C4tiSndD3orZYmg8oxtgiH1bcjkD4Q",
  "key36": "4PizqYe9QpmShXCrbbxtJxUQzk1vbgftnBKsnVJQqEK8kcoVkvxuBuuM9fQKnXySTTH6gaBhCpsN9JsbBf68eNw1",
  "key37": "qTAu3DBoHQnKDh3daUdtQ2b5yHiiJiqGE7ippzsP3LDLbrGeV9vSZBkSHc5Zw6MwQvuia7vng3ge6j7n7G3bNot",
  "key38": "TUu6e885VTfQx9t25DweKVmHQZEQZcxTyjG2TJjQbMwpbCNemxKBmccZC4WFdJUpuMkcEZcqkpS1md1muT1oeqg",
  "key39": "3ujmtYpe9JuzsbxUTFwnSxAa3QoDfMmxiphAPR3jJfmPvuh3GkQBBzf82WxF1NxEA8RCy6iNuGWsDb9SFUVfzVuo",
  "key40": "5Z6xRRmnqHSCZUPAEvq3ZgfEKme8Ytk9DXSenyHxod6YVhDwRo4jTmESf1vGWptNfY4uc6THNYuFPTNqQRdqp2v",
  "key41": "3SGFWCTMNKz6qbdKBtBNTPzodqr3WLn3GbNtaEKi3JEQsqVXtDMbZo5pqG7tK3mZ3KoZF7zC6ouRxAXq7jZgT8tz",
  "key42": "2uT59xKxUJosDQ5LyQtuPtkeVupQhDUkEeKhQSmiNsiv3cn6rtAk7BP2NXjWPPJDBT9VHEuso5jeUysSPQ1HEB9g",
  "key43": "2v9F86mtUyqt4X8fNCos2ZtQHYvnrHk1pf17mxgnuzuFYQvtqvkg952E4KsTWJ9rSDeAjoEWs9k5zgARNGR1em1r",
  "key44": "3Z5TfxoDt85eHRco43q6nQZekNhU8WtZ6UD1yiYjwBj4zVg7NxxUS46hQqT3tcHTvaMZCdpzLgEpC9uP9jDDNoh7",
  "key45": "3Xfn3L2yj8d8Eijr2jn7m8CJB7avxjarDDfMRQ2GDzqNvktDDYxWgcrLFqYp4t4LTPXg4hcaJrkWujRV9ToW9ZKw",
  "key46": "22udqRVEE3fF6E5Kge2otCGHfkjgLFYGi1hJLtLAtKGUzDSH3PaLycVg2CNuNjMYGfJ9cH1fW612SkhGfMwJupPA",
  "key47": "3EJYi2qUELT5f7ZQjuZbHkTwgfXZFW1KRZWEtJ7wUkcSdb7jnBmbEF73xf5V2dtMYkKJEg5RpMaaMYViXTJ3WAiz",
  "key48": "46fg1hC2b246StqJvCjRYP8wN8u44kEiKPaTm1AyMyqteY3ZpaLGtDbvSg2fzYkdKMYgBJE41ASsNDn7rqqZ1Qeh"
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
