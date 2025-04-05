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
    "2jGNyfnqE6MhsQhVqt9GSCRyoKcysmbH7BbRBW77uix4BmjdDdzH75wpgE7CU68JRDGFJYFe7n2ZurxJMNdzWbqi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21fFV53bhz4YujMPP4UwpiyyW23WVQViimXFoZkBJd7XYyC7kW7264rve5togNEUn6XmNcGXmbv7TjpQ2skCLqZb",
  "key1": "1XrbXLQU3FfjnZzckJq2PJwSTvDvcaKtzZGtWXF6CxtLN7HF42bRU56RPwNvuZ2XkfsDXmn5HWFewE6GTzodf8o",
  "key2": "5BUVqWd2sP4Ri3NPTGzviCjee4KP5QtqNtG8vnZNt5k2hWbsYdA9uwFfyU1iWRz8RBFyRMt5ugYGD8GhMwSj7xuE",
  "key3": "4VAJWupMskmGna12WjJAFoZStcMS74k6DcE581ByKBxJzt8uxefF3r6H97ArpjCoSnWtrQCxuce5RT9MBr5UcQC",
  "key4": "5Tn5THfQbR2hSjztyoY5zwLxE8DBtixwvNm6vU4isuQZcP43NR6vjzSkSKgfqTWZCGjMyN24ZQUsJgtM7hVyzyJM",
  "key5": "rUUBciJW1u6LbL3ZA2FQoSnaP6iKFjGWzoUAUezc33cr2HWQdjVceo18L8E1LzuDyTHSb19dzt9iU2zhfc1Fcvw",
  "key6": "464nHa6RiR8XNFY2VaShc42Hw9THwCy2DbShaTDpMVXcf1YrtMHJZVjBGSePUNTVAygTu2rDTRdFktmQVFuhqp3B",
  "key7": "5TgcTtiAurmiCoTcHUstrYQwN1w8Rur5A2WYWVidqUyHLUJqdKH2CuFL1odzXvAERi8mcpsio1a2T64GZY7aPour",
  "key8": "2vjyJpqo9FXr8b4JQRBzfHPYNH69uqJPdzdtyr3offPsKNiEtBxNV4dHve6KbFTEn4DgyE7ekJXeuUSkuLe94pRY",
  "key9": "39tSskFKMzay68gPYGCgsgi6tyLspztiTsy2fvr1NLv6GJfrP3QLQr3UVnHLzYZisGRQAHVf38NA5awGc8G7Ez2M",
  "key10": "2dfZnopr5ESA1AGsM9n1zJCp9pRQHFp9QhjzojLabXUvd5XZh3QrguRfuCu3iT2Xd2gKAuiMWTqRtRB9ZPgacK2q",
  "key11": "5cdphxGVp1EQmQPJwsJAy5io6mxRmKXKuZ2eMCTqgyx3cSqtM8XYDxKxH16iPPBKPsgXoUZUD5R8rbe3Qz1aRj8v",
  "key12": "5qG1p2ZtbL6Q3yQvCgUSCokDKGFPf3TLqMP3FZU4Z8pCVED3QuKVLgGoQr8fwkfUJ673CBifX7HvzE4sukyatb8B",
  "key13": "4PFxBuHobVHdCQgVx2hAhA9GDFQccoJnEFq2o9UfFJTVdQi1rZzWXL8xz9R8mb48MKfYvzU4P3WdtPX1NhZHxigW",
  "key14": "5EtraV6A67dwj892eY8nfjNYHtMJDo9SdWxxVYWR9zncgWdAMc3KUmWLTYXGazLJbmRchikPpVCAMxgFeHCvBtuq",
  "key15": "5E7HjF16s6QmhXbUWWJjRzAdtRTrYW4xY5a5rQGH6wB1rSuUUqPuh3HznHDi1spKFg3YnR8CwoN6KN6p4F73otPB",
  "key16": "4m4QVfiV58s6b4gZNXXmoAa1nxY6QvfMwCdxs5j7TN5F1hwPBPkRpsRA6t98khwuC55M8j3hfCVjSXpXc9CwSnHL",
  "key17": "3xZkPyC3P9LaFY8ggJ2VGb2LPWuvaqJ4YnbLp8oSBrWppHH4ih8UgpMHaABjEtz6MrFpi31XxhBvvicC9HGA57rR",
  "key18": "5NwUJ1iCWyE6Xqe7D8iyJSoTYF9uktXJYueuxaQwdqUNTCJRipmSXFe22oy58ybHnp3nAP5JsSasWvXsf7wWnWn3",
  "key19": "4Yix7ohTpxrymjE9q8NybZr9HPUfwKc21EpgNtfTeGzhuWT1QAsme8oSubUs8ciR2nk5McZjjHqpNAxtsukorpG3",
  "key20": "59MnKFj6GGKBQ2RsFuhBQFDKjpjh9Zktj31enkS2Q9um3Q6XL2CCTomJeah7SiSZzYP7PH8hhP1wN4VFS6QLenja",
  "key21": "fRkQBAfEmE43BZzmKze2P1rbMsaTmEzu6paZErK8KFuni4Zf7JCqdxBGpgyUMcRUuiRq7GGD18b5vuC2FGNh9uN",
  "key22": "2t31RrvopTVy9CeUXr6pBPzYjinRmkkRJjcwpwTNusskRTPodcKsPyfHJ6MiTdb4JABxhgR88TN4ju6xior6WVKM",
  "key23": "3skFAKXUFPyex5ePehZiCo6QTJVUC1gaS2Me1oWjGWgvu6tLnz7KqnK28nh284vbxyZTnrGXuUd8jPiSHDLmMDd9",
  "key24": "4EXboZsc6B2Bc1pSPNk8LmSfKLDzhk9nKHUHK3Y2JH1QNfMKAEwaq5E9tjTT7fsSor6BTj5FR3MK7Ta535fxNoio",
  "key25": "qvdPf6VFCiiTkWS7zbMjfmTAq9oPJmgNcKV46KKguEna5oVHN7sk4Ebc4fuBwDMG4n1UweHduzkRvxarCBmkwzH",
  "key26": "4XbMJHmKXyx1XXQaZZCu2nj9w2SfXCmrRYyiksHLE7o9DLQxmrVHb5BJ3s4JtQ75FR1UwLyugKnyAxJE992Jj1xs",
  "key27": "2hsDef2zepD4nJusUDSySzkQHZtLJF7aJwgG5yHKsXZAsCtvTdHw2vvUUQ1hn5YTqikWqW4KSLR8qduzHWCoZDSB",
  "key28": "t2JXmo7SgQFRu4pDBYn9KxKCq1osRPj7TX9UrUtJ1quNHXL6ibQyPvMixCea6XKQX2C6FeFNarVuetYrQUpJKDU",
  "key29": "2CwJinVPjN7WczU7jSdjwpgwR8f4ekPCMAKLcGpZmeUPvPm7QSrbctpQG2E8mRgY86Adqy3LA5WUVMMJ1KR9bYgr",
  "key30": "3xssmat1V7BskV1aLPfEgpYAyvi7K4dKsbcn492d7tbvMHC9eJNVBnqqVnyjrhuYZiioWFUDi6Jb5jXHoW1RWrYu",
  "key31": "5HrxyzqXtHk8jJkucGE7zSHjxNkmNDLaTF2zdWoBRHFczvLjz8azErpzVE8mg3VhQRt83Gjwe7JjkyDQsmiE5YNu",
  "key32": "C1H2e1mQkfhCfQ81jGs6ywDoAmy3PqJKY4wdSkgBFqJUDp5xPfNnKb2ANiNFwsteZLxuzobA1aLcd1rpgnpFJqA",
  "key33": "2HN1ig6WFbG1g1jWHXQsaECz3yCmwE3kqktyJVHsPyNQFNrfGvGbNRtE3JVFknGcu5qdPpBGSR718HBVco6tdJ9t",
  "key34": "4a5K9HzaKajovyt6evaD8mXbrjbdJqmeMUgP3eHgLsRxUrGy8ddawS3gtXukSEbbr5aixupNBcJjvvf6kNMEEeN4",
  "key35": "3fNWnrAXscLFd64neK1Cp7tqpVCXhVe29FUKvBz1kURL5bU1EAm7CkKLFGjh8Ua4kb34VmRxRkSZuvS6WvfDVjW7",
  "key36": "3EcBv2KvB5qYMMc4Tsj6c9vmKYmvt8bhxe3fDPdiEKUeU1Toafr7TobgmWMtQN18raKKuEGkWhy14gXctTYLoeKh",
  "key37": "64LaT3Q4HcicNLqB9sB5X5cSSU4QjRZ47EULMYx7H7z1BZbCJ33UYr5QscnNzxyZ1vcRNzbpWaVuGP1vpSXJGDFN",
  "key38": "EAic6MLzcy1AP1AGmndv91TxT4LFAmXpXTM79pezo5S7vfUw6sNG2UrBFTAqBZbASSXaKcGxCziXuEhfimsd8yL",
  "key39": "3abtD27anDiQEq8QDpU3xuzy88gDmv8V3xWV6LkRdFHiEpcXzU77Rz9S1nWR83WTzXLgo1E15bmxZV3pmM16MoV6",
  "key40": "2cgtRy3cJmjKWWpxe4KpeSryLkRBRVSWZ5NB7Jj7xckn336di66Yqnxz7CJ7io6pyJEVwPPpKXk33Mtaeo9cV9np",
  "key41": "3aK9NEXzJpSxe2oNYAyEMy36QtnaRqg7bEiURcFZRVKquaVQkmARSW3eVr6zzpP7qHJpwabwVMTdkpFPERNckxzo",
  "key42": "4gzQYoHZ7MzoF5V89tfqjn7aQDN3GZy74FYptGQraGNyKowS9YYRwRyEB9dbAmS4YFRPfRuTHFkBXVSDopBn6dBq",
  "key43": "56QBzyYs7pNCzR75RcDPFyntyKmyi8AMGPQaeC2wC4HQiaBQLvyDHTzT26Y3fMb7zboxXkHdQTgwaQzmJzLbuVj",
  "key44": "MwYqRK9zD493o6beCaHEBifnA6wpAtgrgeoLvkvXvB9exWZaxUpubiDfWq3AqwJtnCgrfwMS7DtkA38FPRWydyW"
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
