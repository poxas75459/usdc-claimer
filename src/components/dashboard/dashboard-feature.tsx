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
    "26SAxgWhBhkEkBVvi1NR9LxnReZnJf8R3Yue9FB4YiMXXLaxAbc6GwDXDysBBbCJc5hLDdYYPdXT9arH8XEMjmpq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53RwrwRzM7qL5KTPcVtXPN6gcNygii1Av93SKd1Lgk97gTephQ88B4JTc51vXUDWdjWY5gTvVuEjMTZe6JoJMq6q",
  "key1": "2t2Z5oGvfjE4bD17yUq2kLvYz5NFGGWcTJTNvSVw6YYhjgQXCENuKQHhJaVHjqUk42QVfy1zsKh1ZLzD9F8vZ3Ae",
  "key2": "3hPFzYwjfibqv5eiMpMcKcnKdJ7o9PbDJm7n6fJi8UQB1MhMKKtdMKmCeA6ucDuStYzrvyK84LftyP6Ps5bG8XHs",
  "key3": "sTRuSoa1rC3X8YLU7WEuezBC8pcyUnSSNza2aRvmp7UwHQWCipZfh8jYRs1fC7n2Rt9PKeqxEFwjk6NgifjxcVa",
  "key4": "cbQMXrzZpGDF2sGjZgKxhw8gMoWFR41vvBkDtifwjk5DkwC1gtiMM5D9L5HcH3wTwV6h9fmufcP8o9qJxZ1us8Z",
  "key5": "3PVUV6rJdPrMUtuSbkSKKHtnDsq4r3LCTYZNwP3zKCkEdentBpnr4DdcjnXcn7SJ7N6Tbjss2hEyqGetAiuipxwe",
  "key6": "4FNwth5wjDgENZuPBmi5amqcrv2QREGHk9wemRMhR55jWDH9xJKduPDRa6JpcdxiTD1Nq1DXpge7pTuRZtGxGqTU",
  "key7": "GLPVL3ur8xcuRXn3cDGpibLqJ6FfJjaS7XU4u43pcpH7pMXdvgBooRY9F8fuv3QARN9cqWUQxnyYgydncaYrTwy",
  "key8": "4vFPsybkyDWc7hXwTeC7cuANsps4Z9Zr2rUXsoGeiSpqZMqv2rGto9MNfGaY9vdhvv7JyZXFC32ZRBfy61fJEoai",
  "key9": "d9oVnuQTf8Lb6AZ6jTwKRgGcsePha5UPdNLqMPXQyjscZgRLpcD61q4QnanFRmvPirTWpP7RACEkAk7uumYVQLa",
  "key10": "24ev4MMR8Nm4pwjtHcZspJyT7CESkGLEPL7YX3hmSXXh3KLMzXzzM3rb4rn3HSr26bFnP2iK2wLTM2Whcv1FuDSJ",
  "key11": "4NnwEAETMYgoqC6uw6Xo9dThjUTzrYeEAFbFp69cwm2uFrjp6Yib3aS4APfNSTeVMg5Gt5ymVS9KrD9hBRSyLogg",
  "key12": "2zy3CyjGyDmJYtWr18XV7eQKgDcXNnUTQf4GbCnhvf8xYX3J9DHX9kaJYgQkMTEeQj6fuowMU5KbEJAAYCRx3wxZ",
  "key13": "4kTkLjBkuHMpvMQKmCntFtFGu8vtnEZ9S9de6EU9HoFCCj1xQZY1C2HkdRDpX7fjucenqkwomp8oN2zyNjxk8ckY",
  "key14": "52XQhmDUsJvbz5WxpvfGNtFRgFbTofu7NzMCSbwygd4M4yCXHFvkj5EEqt3PqRW9aaiMqCTJ3KnoQ33mvGAF35MC",
  "key15": "wnsPbegMjruQvit2J1XZJ1xxwF4DW2nkQwjZUJu2z9FmSdjzNF6imu2qyFt5i7gv1VYAKT8MaZHpsgUivpjzxxS",
  "key16": "3K5EBeEx8uAe3vZGoK2NJyAW7rXt7SxJLnrpDKjypzVXbjuK6GSm7zQ5ay1FzCNKF4BA7XVwfD4K8mpMn55Qsmed",
  "key17": "Hsx7NFpXiLJDJztdAosavy6r3CLz9vpEgtoHpedey5SQEz5hLCSQA2QKLrsEa8316HPdExyyz1RDi5KnYFpDGcw",
  "key18": "5oU43HdZe2gWSwzFR9ybbW8WwzfnVq2NutB6VvSpi5vh1zmdeuQFg3k3VC7iJibf7EF3ogE7Ct7aJ8rcG7pZfoJN",
  "key19": "5WH9UQvTFF1bQwrSCoUbe86pi92fkGvESj7ePvXRrtQayU3ZPtkrs4jg5mTfdbbzaP8Yt7RSJ5N6b6xh1j7AX2jb",
  "key20": "4gkXuYvB7f8L1cn7CjmfDywhQNYYcGVALcL9vM4DWZjVzY8ycR6Co9dH826zbdPbtyoLWpo4234uiiCmvRRpKqyN",
  "key21": "13VnSSApAqNbeycW89cErZu8bpYrHFgMYrgCeQpxwKnbDrLhVQykSh4JGdzPh3F5j2bmkG3ocKK6NgU3kcAVTY7",
  "key22": "3sYkdtYGV6AVjkg1RV1vfuicq9Fv94VV8uFBRyKRUWHoFDeu9wn7cAYj3z7eJgS3LEfCRst8dT7nrTU848xGsRBr",
  "key23": "5immGt9yHCyQbX6UDUcGdBLNzjyQBFRwfpfh72Thnxw1xzW1trddreWvjceCipXLYM8jVF85Q6rTqYaD9gcirXw1",
  "key24": "3Rz26dpiDjAq6tNUjuLY3dncuXhNHnnzytwxHr6oDyXtM8GhKcjY3fTjLRqywdHK9SeuQXvZhNhMU4HNFqb3tULS",
  "key25": "5Lb17ojGd485yAXqBDUdev651yaKAWrdiWfnxYLkkRBTismTPYVJSebZovjKVM7xBoCfZu8siuRLX3jcMCYTywoc",
  "key26": "4mEUZwRzuSDHqBUEh8kPFBpB7cUWu3V5oPWKbPHyfZ8RcouTWiuqGryhDbGVwz6xKbsNwVMrpkXnuWrS4BFqc6cK",
  "key27": "ittJ5bBSTzEtRAybh54zC9imq1UM7J9cTh9Dbbu6AEN4druHHyQVbJmQHjDggAhHvzazihW8MxvxyaMiCgP6Sbo",
  "key28": "2837FkdyUMVUtRTsg9wop9obYKoDUYwKjKrDLdD7KaBRYP7AVrxi8YKujmTvaqwZB7UYno2ABrPyz3DeiBAmc3M2",
  "key29": "4LgdmEmSdumBx1oa7wzuc45Yut1cQVMVosPS4ACrrf7Eh3YFMLkaaARcHb7cLCWZNZfMggjDh3x6H7e9XSBfuL7d",
  "key30": "75Zu6qB4pgSfcJuUpZGD6Puf8YCDhp4AEZ4HBqJ8pGNvdzdvYuzAnFo9YZGMY6YjxLjqdhfUeYFpQ7hEiLYJWtJ",
  "key31": "2GdTHPemG9CgDfjDmoycPSPtAK4TBbXDbE3LYKxSRKWoFLvDBuTnvmMoazMPSsqEAqM814EsjJ8RVexeDH8tFo2R",
  "key32": "3MmBsTUNQd6CLmXYpVDhixDEtFxq42encdTtDUUncQwcvghxfnrDndkiuLvjXxNZH1XzAyQCVXbqcRUqXb8Efmek",
  "key33": "gNPtj9ecAt3TRE5WzjxF8sbkYFegbFwwMRu86vHFjrbwaJM225Z2Ve1sCuz63samk1VKE89c8qAuz8fe4kCy9Sq",
  "key34": "2fAMhTnXQ9bZewDpCpY7L2RpMkH9UAe13vxxuSUb4Buucy5eSS3qoiGpo1DVhnZwax7EuvRG8ho4hKqBBqK7x7KJ",
  "key35": "4U4wP6Vis6dLDeWnwnTzAGC43iCenGk8EA8KvCpqjf95dVp4kJ5SLRZeJDC9vv3hvNuGFAmB4tGt1d8CkVgSxo27",
  "key36": "n29hJrXTtbsig9ntNvnfv7wckYe4x1FTpkkVUoMDh8gmJLhtJKpYhXLMm6CW3ti5F31beDKR1owjbyMdKf3AWWz",
  "key37": "4WFUNVj5FADmwutTnDXunEE188cBiGR6fEyhm6aGEz5z7CNnhQPVJeG8iXcmqaTcT2uPrDNwk2AoqDYq1iYQzdVD",
  "key38": "f8hQTvUGuZ6QACzTTb8GDDpNpNExWTP8GkYEbskfvzbF59jroJMgJ15NAzRd2tpg57wH2vQoeTYLrrqXHoc5iV6",
  "key39": "i5ELaV2rdREkki3MkzxwC4HgnXsnt9wzrme6sQHw34cyw4NBjwaqyko6HAckGjAnjTdV6hWMLgdKYA4XDMc1BJ5",
  "key40": "49xthHWbPoBawTyFcgCYxYeTEXUVigAMhMDgh4g5odqLPmUPtEmJ7jwBWhjbyM7tQqGtAHSahW5jsecnuDZYJM7p",
  "key41": "24PYcaRdLbmzCZv5VuZcGRb5CwFmBY6SafxTNgK5EvJMJhPmLcRutFq9nKDb4Z6K4aRYwScASBoRvb77VcG4MD8V",
  "key42": "2rSLNrRsvAxWroeBbnR2uds3yXLzEe9fonY5nvDZ9kpRg1hnuddf5oJJ1mQJ17EVufuLxcwvR7ZsjzztyfG5jV3c",
  "key43": "4nbzmQ3hYvQChqQNJSFyDm2YbdqNqFdu19ebBj63xb9UZzZgLhtZk4iLEa8Gw5BX2zT917hf9rQ4Qns85ocUpBQf",
  "key44": "3vSm492gQgKJJ3sWp1dQqLEraC3S3CYjvChWH3dqhBqfh12ZBXL3ayJQXksua46LmZFvg7PEqpwWF1r7pvpvzYE6",
  "key45": "36hRTF8LUTJzUFpw8TRsCzQ9SeSwZKzwKFCdWrwrjaNxvQBTPJp62zzgdPTCiNYfMGze7XoY5CWLdPjf7DrbiSCY",
  "key46": "HJ24n3q4RVgeHWocjCTks8t2HXLWXpjNw2Xn75goxQyLTmwYNMN82UMqNZtE21ohiNVJyyT1KpWKwRzipywnm2V",
  "key47": "3HEHoQQDxD5pVbGvwvdxCu2Bn9jCmYvvXMCDv4cpLrQZ14rUpCPmHR845GguASYL5NJLgPR8ofr5q1Wttp7v4iAQ",
  "key48": "5HqxDrS13GVtrwobqZTikFBQ2zd6RmnEZXUF8f42JKERVhadgrthMpdJMszFWDmA5hp6hgeceoUVBeHP92pLs5yH"
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
