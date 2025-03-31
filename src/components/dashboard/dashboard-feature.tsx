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
    "3PkrL3fNtbinYwgGkSuCCxWb3T49sb44PnwYK64TeAwnPYwjpZihuwCw3qZ4E8Z1EmjeXfs61avp3aAegiezWcFf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42T7hdeEzfpmwaxqJAN66KWryamcDxtogEBryGbhN9ZJiAmuDcyXgHqCwCK4YX9Ljx6NddaGDnR3FNCk71865T6d",
  "key1": "4RmkVYhpqBzYWuizA3JUqjVne8cuWbxubRJfSJLZmbt4ebBHX1kJAUvunb2EPxW4T5Em2sYU5zxU6vrSCkaLoPXy",
  "key2": "5dnMC6Q39WifionAjSXeiWfnkbyFieJGGE2kJDgcJYMCyWYFiF7hn1qFMtViosAxYYqRhMNAiHyGEZPk71Aak4A3",
  "key3": "4Uacbm3nppmUQoKTPLHKKB3ECQiYsom3HMUpMM5uxh26BUoHiSTW76zvd8S1oR7WTDcMKtJ61DKEAswGpVEHFeFq",
  "key4": "4x9gNTVfMsQ6T2Cn128VENnwoYVaYG13ybw1xzUcVeKSpfzhtKo6SXg5et65MLxj4CjWUqeDjd9y1feaX7r1FSTv",
  "key5": "3c43AqtUdKedMcX9rJJ26Wde4h5x7rbrZjVoKUNt5SEtH4QfugsNksFK1Qqdvm4HVxLczbC2qA6Eojx5aieZB8iU",
  "key6": "3YLRKphVWjMMeJFLmwL9qrLa2yJLU5mnDspyGfGqGFD2bG8cfxqXsxm6K7Pvk7uVM6BiipQ8J4yZk5KepasvHVzr",
  "key7": "3FiqiBMgbXC5oMj2BYb76MmeDM6bcQGPaySuD2qzF3TTx84fUSyJEPPzBw7rVpZPNaQJtuyMxuDdRqhqRARQ7XtT",
  "key8": "5ykLtcs8RMuqnzU2tYDV8MHQoU6NgwegnVAmsodBke9MjBmZq92vBeYQu8q8Pty6tGz4g6Bk2N4Jt9YyUh1wCwe3",
  "key9": "2VP4df35EEq1Ka7wWMAmKdcMgiNFZhXn2oQ7afx1X5CuPm1p1L1zo4rSKk5GCz9ArDYx6wPiCUZYguekqMK873xZ",
  "key10": "2aGZFbsoxWr38dMtm3mZehufPD7ALWSEFcnAFPAe68X5GFdF1j3gob4Y666RtoKtw52djYmPoPHgVCY26qXjTBtF",
  "key11": "2ZdnKvuBbqjrvpEP1wJqKzKkBG9KeTAXjEfrR9McjzqfE3VPwroPPQ4K5Rq4vDMwHBN4ixWyf3L1vN5s7zyW4T3m",
  "key12": "5sAJ1bgkXLhHmhpr247TSKDrgvCJTqsqGzVHua8D3C6eHGvu3hASmvCKKkKrLJdqzow9JJfzUfFcKkGrci9RT61A",
  "key13": "5qW4gSig729YZMB6vHJj13NMTvSM4j26Ap8GQWU6CVZ46PdxfcekYze54T5oxTco2mXD2fUbnmxURAVeqQV4qEyA",
  "key14": "3k98ifZVi6vTJQseADvAe8Emh2hhZ3TyCy2fZcvEXCfivUaZSbHcBJsaAa6e9eV5q6ujSFoFWMZdzVog5TC3EygZ",
  "key15": "2pvUiAJayjWAC6fUDxvm8hWb3w8c57ThomqzEBWmGYgt67dz6GW6z5FNmjWo29ciAF33yxvxCk2fef7Le7iR7wGU",
  "key16": "3hQ6QUWJjWNr4MV4XVp2yLgdcozxd6cZfjQK7AfLPDAUqP856WRf5bCJxhxT7nWh1GTAgfMYwukcoV8zqfcdp7DF",
  "key17": "5Xnt9pabUkjZKRobMqWB2AFPykmy9zNV1SqQX8m1s3rLmgfdQ1pnzZCDd35UrMg1Zw3hNdmiHAiJkHi1w6W3fEQy",
  "key18": "3T287HkboExtR1UADfkpwgvuYEtSvhd8JvxGSeeVTy8FAmZ244cLzkSyXn7MgA3LYVWomU7MJuGsw1gVJ5M8Ueit",
  "key19": "3LtTSFwFQUMoWagbHB13o8WqDCTwhRA1NoCfioce6PhEDUwHCQBnvHsXNU5nsEsg3x9bc8pSz56dxuw6iWpKxnF6",
  "key20": "2AZtMkf11Hzfa7QqJowbquGqrBQ8bKqQpF7HsXjKyXnXXpDL4vV75J5XYPE5dYtCVpZcV8UXzFnfHuK3srEqL7g9",
  "key21": "38nka2T8EBLYVVsdWAKsBDAdHqL1hmvCUV95ZrjSX1Hfz7PMUFXTmSi9J83QY9923jAnCobiVqeooWtKsseUH9Ma",
  "key22": "5YpifQHc1KkUzyP97XRZiCqXAC6K9UVsWS8Qw3vCtQA4jZJnjiFaibfRBMhjHC6om1vpQJU7iLUog7HQYtNNvT1V",
  "key23": "5C8fo45G9MRVvHAhojrDtxT4ZLihJkjDgoogcjVfH1xj2YY5W8zR381Y8JmgsyZwzoDzWcizQJRwzqwRSR5JE3ju",
  "key24": "4HSZe8frBpvys4SMLqHBpBF96BdP6PZNGyS7qjKAwLuhxULFZM9sn1Y2TBxTPkNprcNE7T2tN2LiiJqnfAkRqMxz",
  "key25": "4EZ5u5bxR6KNh6DJSASerkE8aQtazVscQtMnaJFS8P2BTyRpS8xcw7Eo9SrefvJvHrcESzHgMX8Ci8Vr32jZ1fXw",
  "key26": "6U7kgVA98ocrGzHy2CSu7jDhT9efLt3cNk3cjNDJ7fwXFWCVpuidNpeZos7pqheuntr3B2uDqggyGVG8N7xpKnm",
  "key27": "2sRrDhSGP4Nj238eCsZNdpiGrCYcP1rP99eZzEqazhBC83JLU6BdaMrx3qkBuL6guxULSkMjcEUAxjxaB1pmoCFn",
  "key28": "2GeatM6VRhtFsMH8CsHjDRBtE1NDG4zwpqnMxawW7aBrHUrr3WrwGwzmGBXJXcDvsdjJ4SwJv16qpUDck9CW7rmn",
  "key29": "j59VF4Zu12CBARixHyKhD7HpADfTWw1v6B53vUSVWgTRS2zytJU2vFHf2nK4Q47Cim92vXtKoJKfnToGw4He6fu",
  "key30": "34aey3dsRFEpJZi7UZcnK5ehfcecmLxEkUNo4MX9PX6Ag6izcAPeGoMy7qEGXGzhw5K5dNaw3JTZaRLtRMKntbMG",
  "key31": "2ykqMP6PKqP2CqcKjsHobRbHv8RqtSTbnEuxdxsezCUB3wdiHiEWsyTzewQJ6VqJUxmve2PHMRdmde1QkUwqS8cq",
  "key32": "2os5vhSCVbK7ZsZEzDbm8SRJLaUgiaDcGxhUDVsUVhe61diVGnaarf8V1wq2SzLk2v8ZmZUC2icgU2qLjLiv7jRX",
  "key33": "51fx4TXNuhsBqMh8DvDBuz8i68s9856AdTygFwoMPM3kQ23ZsftthbFoewGYn3XbM9fPriNEQ6Tx8RyRee8WfZcG",
  "key34": "3BxSuLrBgvwZqw8j3aD1arYgyNoqYkMaPd8Etwcj5kzfHPBwuNT4jqqS9F8c5XMSZRNcNBNr9r4UWKqbgP8BvmW6",
  "key35": "2D2f1nrkLS8xwS68guiwkxR4ebAQ2RjoFcHE8WyWRLFizYySGf3FZEerUx92EBfFTiEmH1GLKkYWxQSEjJKoRZpE",
  "key36": "2CDdmXQcCJCTYpp3EnE5x2uecgbdPFBjiGTxdYiJHWFZMMSrW1pTMzbEMiTqNykts5K4icHkop8o6zhJPz19fFPG",
  "key37": "aMFwnVtfzq4HJSytHffU5FcFhuJ3vuP8BtooYjY3XMZTcZUhMPGUJEScHH1DNGXzXZGuGiBFrxNVJddJRrQfyHm",
  "key38": "3tTxNHjRw4LM93UYKohab9HZKXLotA5P268h7wJam9x9eSy3ooHUCarLU4VcqfKnxzQ3mQ6Uas7SEfKxpincP4Vi",
  "key39": "2aTPD7c8b9SnoE6n3L7WTWzzkZKEoysKVcNt6dhWcEnw9GbYgoxqBtkSjWwuYGKNU4WWJwiSjtCcDxwGJRefQvVw",
  "key40": "3Pz9iuofACBSs2ktCB1agMq4T2xxrYQhmGMGyPepEawKZxG1Tp7s9p8SPaBaPjUuSormVAqfEm483KWohbevqox2",
  "key41": "TutZ9QB4TZ8CPFugQn2tTs4kmpy5HQs2PqBHo3wx5hCUwzt7BwEkBUaNJK9c6CQMqgfVks1eMLQD2pXaZeqctwt",
  "key42": "3wP7zftMSY7vX2j9ss3HgpX8J16YFpVPQCoox3C1mCQDSWAN4q3AJdFP2eVrGDoecTGuwvmmqr61vMUQSyd24PFj",
  "key43": "5mbLmvsCHL65GbZJNHSPD6nVvKFhzJuoJxiQSTsDqZyxJdaKY4uZ7NqtGTVTu5oMW1BA52fjtXw3JuUrEBYH2qhp",
  "key44": "78VMsVJHTVAALAUcyGYidLwUGvHLPGNsQdMhxEEbDNKya37DfxUZgpBWCuSc1ATFfrBZzAs5roLTrM7yB8Hvrqk",
  "key45": "3A5FjhQ1HEZ4wK9QLJ175KkwuVnpWD9iPyqQi1akp9NsLDnijCpfd5E9PCEMyNEXzpgLtAEJwnQRD1s9QLrTPK2J",
  "key46": "4zkWkB6v3A9bbW5sP4VdJEsPCo3bX3T6fUMvaN8SbYTdYPUkz1Lz1TYGLymQZLvf6dZGS4jRGwRfeXmpTm47McDH",
  "key47": "3E1Mqc7DhEZexNHW2ZhbWUPehMLB2A9gicRWehUcNHf4GH9ET5i39KihN5fcdajvESjGqpUQY6L9ZYHiYtUqoZFU",
  "key48": "4fy1EFXJPvSXhCfzv7PkBc8hGdEp6ikwwVu9LRHfjpQeXXVhnMwvkPTkYRcQ4HUVDQVk95d7gHiCZjKTPffZ9sB9",
  "key49": "2LMfYmanZgSK3F4vBA2rwvdTbXvBVY4EPM52bowQH2FCqmzjZCPCyZF4qD3o4JX3h6U7KRw4vNfQQjcZvk3KKFFR"
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
