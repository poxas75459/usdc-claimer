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
    "4oVWgYvaK9UhxnfbJkA9KZeDMhQge9SwJsbeq1YvfSJAAvGkKLcbeS3XMYvGpthoqJ3guHtuLLdstBXrfmhLkmNU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xHxPLpCoELZtML1Bhz7GEPRLzqtLtoSBbrf38bi1sHE7kDAPSQVokLoczx6mmgaoxDxK8et3J2yBwDafk2xXDea",
  "key1": "2FHJ4hZ3P1nyoYK1ueWoRyAesH8FAeNoV8eompAN5vZ2h3PRT9v2akkUeFNkwXEwMSWcNoC578TNCnBCyBFD13Ft",
  "key2": "ady5zcGUEPVkLoj29o8eZahXLr66DhT9Yt5wKiW2YnKeoLWSqUGoSCn5iFXdLsTFa1GzVvn2ZxRWUdB8pvL3hcC",
  "key3": "ARv684LTiujFmdA4bbV9V19YFcHQCquwQZyBD4t5Xnhqcb5Y5GacaPrCWet1oVEdTyWwa4vuPQZQ641S1CpgyWL",
  "key4": "4erVkMnvZDJ3KQb2NPGcf4SSmGWiukp5PX2wfgzDrG2wdXaSLoBPqtkzKUgq3K7RnUhHpQHMrwdMFa8ApVMJgvxW",
  "key5": "4XuQz2o8juFWPAS9CQ2ncRE73kdUPFs5yLUQ9eQduHyZyeJ1nCPoHFd9eQ2xb4EyWthT4FGkTCNYPBAF3MwJcHKj",
  "key6": "56Tp8o36EWZmuFcGpiBwuP5Zp6WiT6H6fvHZPWRDAoTUfaHdnsGUrpzs61crkt89EaoFQDWfxe9aVszoKm1qjrUa",
  "key7": "tbng94KyKBcA6UccCjdSXsfgFEUTgbvH1qthrbejvVEC5EQT1L82mAuVNzPyHS6jyJKdkoCHj2KVJg3KAu6YR8q",
  "key8": "5jUBkgt3pvNztCuktztu2eSobyDRuAy4jr86Lc1ntp3PBxdH1UkxBZXQq5MDyEa3BgphaPSzx6vWeguAAUbNAtDq",
  "key9": "2Y1zQFBpXpkWPnJoJvFtZFsTu5CMZU14rZQbtRpkfEmAjExDWXEjEpYPf39SkFyyWVVkvmzhbjMA8cayzVBbgWRL",
  "key10": "SrC7YpH9hK4RRZcqyoAbhm88KyFWNq9kBMxzbQcRzuvJJqyKq1mQkFzTY7Qv37yRsjDnGjeNGtQPujhL5kBDzEn",
  "key11": "5qjeHjqeS5HLqfT21rmLpagj2ZtRYNnbjZGE9Wgoo6JsLR1kpjhF8EYGMsj5s6mxCfBF5qP5RBAY25cm8v4u26fm",
  "key12": "1CRA1Yv2woxQy8UvcyZD6ss5NA1z5Wyr2LB7mDC7uuqvWn6poDLzFAy8Pv74oAkVc7PHjsdQkj7M9dSYxyFrV65",
  "key13": "3a2uYpPentCUYuZmVvEhhcVnyshqv4PPhNS934ivsBBS9WDNmas92RTATh7Ng4dogzPhs6spoAYk7B7syHqrAk2L",
  "key14": "2mfiyvTV1FBxhUHGvjESQPx8yQRCho1njzLQzM8W3ZabAEJXEdbNKXKDg2GtaKkTVnDv44Vu7qw7EkuHRuGJHXFV",
  "key15": "553oz1oqTWwEF9DLCyLSBwL6KKFgVzembNyL3LGLyKyik7JChv1nMKoPnTvfrBPPnGSksb5th1d9a7k81v1DvkVG",
  "key16": "3mYqu5tGssDmoUJ1eg4nhnqvQ2tghA61BqgkRYJr6knu6weF3BfZPHndFo3YYFC1S6LAg3ahE97eaPgt24bz6RDd",
  "key17": "3eoekwJ5m2wPxSkjAtbt2UmgsGqQ2fqK6gZ5nBmaczobiGzPsNyZShqxpzdMQ6KFeX1RMXXkUey7HJ7kAcw8Vcox",
  "key18": "3xcArWZnHXN2TaTQJRsiqZQqTUveUPRo9Js94hUqaPDuC3PPGimQLb63BA6GU1VF83eC5APm9xQzG7wRwuuRUKWk",
  "key19": "26W9KEchoGDPUBh3mZy4DR4JqM3vwCceZYwnr2m5sKpzQoCeTKZtRqrVjvuSmCU8HEpHGiKPqGULhUJFxPrM2EFe",
  "key20": "5W7twhyBr5CvAADkH9G7MtEqJnStv8ge5nfNnCfKMbq7Uhvwg7jqjkGufDjTdjXqKZkG5VsSxA9gf8qZ9R1CDjgc",
  "key21": "3mmqmDakmeDNdrA6Nvy7P8bw8s6KFUZtiyy2eX9E95XhSi7dvft2xp6mxSTCU5NFvWBsWaPPSDUCDeB8Wks4V1Ww",
  "key22": "4N4LF2PFaPA15oDQeUUrM5f3Ap1P3nxH5yHS2ybjAdDbpfNrT5MXqjZSdhaxGFDJxwQ2pA3FmEoPbTTfNYfURPgt",
  "key23": "hKPgSY8Sd4hQjs21GgSpB3yK4zp1y1gLF2fqY8fZwv8KmCdAWyGdfuAnGVU5AJYNzXtdruPPrmghMideEi52ASc",
  "key24": "2koU2F8g8TTyM5kXb5ZnqXENPWzYvVyAcrYFom57fPJoH871VGGJ24XLnNuNHWiheGUiZ3FPkiW2gAGGvc3MqK8H",
  "key25": "5tfuJpBBxXUN6yR1eXPZutsM6XsLQBK4mXyF6uPM3A8p7YfRDwrUY9zoApawDB3oBryEXRB6Dsm6gJDKWVQisPNo",
  "key26": "Vn1RV8A47aAWSgyiN5KJNcpFeG8HisT9ocfybdCjjs7eHDowXxFSBYByLzbA8fJAYs71jH73untnq9SmtWenjkA",
  "key27": "5a7guUA6apMR2t7YMn9yzPANtm2uUQBRoMxQxfzamBmLBhG3pYGd8f5e2rkwU7JVLKNqJuzwZisNnj8k55MLGNpb",
  "key28": "xcs3CtCTkjCZRAEhphFipvNYTKrGCJRinCVARKvB2ykaBvQGU6NGEG2A9jTiUYtrr26XzzK5rVzC7R5ywezhP12",
  "key29": "R8pEtVXfqBW94c6tihDR3JG1hLCSvVdQC2U9jjkPKksyrRoAWVFx6CbWCYB4SFkyTWuUmUxhBYaiyBGmeF43ug7",
  "key30": "5khUQ7fe53NkLyho2SjaWxUJYFZrzkQ84gpLMcGSaFJXPtbYP3Z7usoSPVYsdai7FxxyzHdCUfQ1gXKcQfews1np",
  "key31": "5djgvCo4Qzimbzr1zZh9pxg1b9Rm8961n9F16UGqoeCnXHn9dZCdWH5LjeuJE3JgKYUwr3Fc5DwQmts6B2P2Y1sk",
  "key32": "FCNoo9qpyXLe4FJwa12kChHwZHX5F9bwHXxzPLgDej8GMkpZ6mtQsYHKwLVvrA9A15qYHk4BHM3MCqVigishKR3",
  "key33": "3Dn9uDPhRUkmBcBWfPiYt6NyBLq3naA5vD59uCuJgEa1nkFYdqnXY7XasbeniE4Mf8bVyzucFaszT26ujXWvn7An",
  "key34": "5Sya5tZyFxkxCFX8P2YBzEzVX1ECMYXz8etRm8Hw4tS3zuhK1ZXLX67MFGvejYpFJ1LJE8exrFjFT9UKhQaGHQNP",
  "key35": "2nUG129hR25NJrrX5RTsMUWDaxdNp3ArUuJpE9jg6oLPjV8cFiMvt4jYKkgfynUmG5Lxnmb5btjkmVEqmxiPDzto",
  "key36": "5XHvWeuuZ4BE3Rcobze6YdqwKeeVnHDcJfdETGofTfVPKk7JYHnV9DtAKrpudBpH4CYZmhz8DcNaJdoXcrmh2EzM",
  "key37": "31oMWE7moCVdvci1QR2CwGnV3aBXr7hVho9FafHdhVEZ1aawimz5U4hJyGsQ2oMYuCFLSbhTqYif6eBgU2sYSNM4",
  "key38": "n9VFhQbEmvuii9eokpiBL7hnEbGEmt7S561khSFmYiCQeLNukBj5JoFjbFJuoLpJJZ5WbTMRvwsb5mJdvkeD2MX",
  "key39": "2KGEjnWhFVXS1XNz2U87ZRaYcjQC6ZChupYUoHJfcQsJTjSdcCXGX6epG5AbXiVzwcZpRN9BC6Whqd1HSRxWW94U",
  "key40": "2Yyf5Dv55BnrYM3crabT1o5gTxTz72JtKJHEzjEbfPsS3hP87DQCoMXSKFVmh85TwY3CgioXdqBR1gbd4ajF2Vs8",
  "key41": "3tHtDJJC4KA4S6EE5oHagt5PykDDKiF4Lio9ragTDkQhmWEcPHiH6cgoLjLPjoLvzDDUUrcEhAXUuABALeFtUxrV",
  "key42": "4tSceaW4cAw7TqUdL7ezg8XciGhHrPxCk25ipogY2N73LLKS74jDeoq4KcXmEpc51xZD8wmhWBoWeBFkJB2XCoMR",
  "key43": "Try6yAojaqFQ3B1atmihGwF5SzSxGYhi9Vxhge7t79SajFao7uidHQebnqBNYTMHbQqk1o8aSCNkeea1QLvdASP",
  "key44": "5SG9VGAJTXjj23RSLsLagaMFn2pwHWFEYe4YRmDzxwkhwggCHMUW2qsd2GNFvNx3eRXFsLeRuMWstKxVWKFRPzug",
  "key45": "4r7HzcpDxvUPAdJyct5A84ap465LzgR6Gg7f1VEfhRMrhnCX69PVZF7tiivn8ri7B5dWSeKWrmKJchB4PackT7ZP"
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
