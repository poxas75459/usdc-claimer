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
    "3KdvAxvTWSq9sX6qj6kx4hums3yGi7bszkbEttfj1B2JVpdyEvVXuG2xpd8dgfMnYgyLudNXxX8SubTxTJ81Ef6N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MjaHZuU1YChuUX6u6SLBxLQj5yGnjos24dgmNH7WEU6ghHvPEZDEdabN3jBHwWECa1yhFt17AXRVbenkhxk8kh1",
  "key1": "1oLmT8ZCGMjFm6xXMrJHrDjfbR4reG5C6bTp1rycEDmDhzKneUtv1Z6JxSC7yXi3K7xdfADKmi6hG1YX4Ykencw",
  "key2": "53SWDkpB2uUUQdziuuwgzr4EJQEGd28jRQZBktv1zk3tzSxjFriWLT79FC9CaVcKFHf5G8DNE6jQZQbHhm1rbiVr",
  "key3": "4j311r9SYBqBLYxsBJk8jXLa2ijsVjNWFw2aJq2vr9HMwdVjYpSL7FESWv9YoWKAm5pVBJ8nb5biPiwFB7tSy8rT",
  "key4": "J6rShrs7j4ELzcX3Fpxpms8z8ymEPKSfnjuew55tP2gCwSRNX5Vi3Xsds4xcBACnacpUwC7ACGS4FjTgeyCpJ5J",
  "key5": "wm84eyFLy73sww4MmFp6hMechY3vPHKgFZXU6TveAwzRx6chogXc8M1f6XbM3Vmqct65Sc59JafgAKxbQxBLBtK",
  "key6": "ZJWRUFzC6AFD5tkFBBpZytmndF3xycqPXTNmcEgcQVkyXbzVdFK4ihMe2Vjsj4U8KAqmfcQFLBVP7UfTq3bpzfw",
  "key7": "ZVpP1go7pa8kUZtfnrQXmb8oyNpeviatCuqjGkzeznprRWB3Knc9qgmRCKUaRbCWQZPGvh3RR25Mk16a1pJVqfC",
  "key8": "3u6scNuxQTAjm2vaYFJnY8ixijFGJYQs1ZujyTGTNApcXevoaDpcqETB9eJZKJiyZqadM3rUtvVJWv4Tgrtd2xM8",
  "key9": "2QK4GwruCrXEgmWFFRFNPGDrnANZjRXEk3PfogZMdixaRaHbQjQ5rMgLAgcCnWZi6hbtBL2oaN1zgsyvSneDBZ9b",
  "key10": "4fUrpDNVhqi8zA44nWyTeTv2BRGRwtNdxWeN3NjHZwN91hms2YFLFfzG4y8hUF1sVrBHg6yeqHyFbt5A2dTGkiVJ",
  "key11": "43eAkR3SxTwGuudmmLgv8KFedubPQsCJtt8PXzNttXxGg5KExcCini5WkQaYdSoshxRuWW6SdEHyhtuF5TFfJEGs",
  "key12": "tfwbyU2BxDm25xAd3DxT7xwD6McFXfYW5ubELHpncnzAmn9uqaD1pTF36D5ZyTzKDE52odxPpveQLHqeFAijcHr",
  "key13": "2cc5FRX3vQLpCRKXnrL6NobxB87UkGScYE5LRwrQQhNLmc5jg2mzLVoaw7DeHp82j6dG83yBGBwPZ8wWKEVcHA1h",
  "key14": "5DerNFQBP6k8TYzP6ReGEAFcCGrQyLxTMv9YoJFfntPHVsKtnGSX2x8kDQSD86NnNcDcu7diiUgyRHxVD1YRKGC9",
  "key15": "4zfyiXW8Jd74WTowrgCJ7cxJSTDYW93PZTm7iGsCwouX8XkQNUtpiK6QBbpB58x2ofnG4eK8hjfWvPzbMUk73F15",
  "key16": "3q9afHoPkj23ybS1aBwpVX5siZ3XHVW2tZ6vwpvBUPMcuX37iGLGB2LCKT3UFrd6arZWyLAX6VAYJa11odj5R9df",
  "key17": "36yaBv2fxi5JsDvVnXtn63hx6WB6NVh6umPv51KBWJgkhDcrMqihvtnVjCo9T2b5vAXnzBFZGL7mWUuVfvSYYUBL",
  "key18": "3di77zshkDGMuQQ6GJUw8SekxQAPgM9KS72uZZWCC7C7b3FFY5NT8RiPVTjS5AtqP8CNbRufQziW1CJUzm6wZyBb",
  "key19": "3cWgCvGmiv3D1MyTNUfx6J4qvdnXsEZwoNn1g2JQb1cJ5LV6WD4gWLK6445mN2bWfBrNWE1obTAW9fP7oA9yqcKj",
  "key20": "3oM9zQAEYZtKTmGsCga6Bwz3puFsBV6B8d69bfM8nya8o1WvH8vzLJFQNothuUdiwu26o5pwHFUpXXoShSRtcVi7",
  "key21": "4czPUS3qwKadJ68CNWq8Xuiwf1J8d9w58rmsE9Gy6eLxmqLbvNSfcTA2CpZtZM2c73VqoG8SGjS2kTx6yVPkmwGz",
  "key22": "2G3yRoKbvtASuRyaKQuBSVmH4gdtAHLcYNxCbRqoeFw819t3cxrUx2VVXMkvQncLLLdNXz9HvfALKSpVQQCvB1VX",
  "key23": "61m24phXT2QJNej3daA5iANUKMcNXAjeWaKacr6RGYqZsBqWxnPc9yWw7R6rTfoDmnxSRmQ4n8VNYY4uCMpRSMMn",
  "key24": "28XRvQPHLjWiHAL249v1UuYZYsaQbPoWBYDBGMDhyWoKvHyActgRRG2Pg3FtyGuNQbTpHqSb43MiQiV6Zq4KUDYM",
  "key25": "2n228CTLhRqp84PN6mq76eDa7hoBhYwjRPJSzPZTjvo1Hbptt584rxFhd7gFqhytYRMQKFLzpUNacUuhs6ExqRXV",
  "key26": "59pPWDbRcm6N97yktMVSfrzikvoeMtdbfenheS6p7S7vF1tSa4xuq2tGyUngU3gbguzKJw8xT9j2qK4GZ4XxjJAU",
  "key27": "64hu63V9ytMN3YFuzH7D7gzmHQvM4DbfPdvWzbr9jiYUXmvxQ1bY4kGUXCdBJB5gCMZuww635So7bWnRvL75vvn8",
  "key28": "28rcadWv8G92Hyx5UtEHbJkKhxfqXsStFGtDA2xZZ8Hej9f9JFPTWhLZ82p8eDM6ySgU6ejW6dQFnwicVotkWDk3",
  "key29": "S5KwMsXyvkjeKM9RjkDrFrhu7nKx9eMddfFsGzqudXokssAPek8bZrQn5BBBbhqUcEihxFQmT8kGWXkKuCjtc7e",
  "key30": "2QhpYYLbAYSzL3mE1VmP4nQbYezLyRTmsmFoab9eaSN4Lu2JbczXqDzznwQmfP84L5HTjTXdv9cTMeGoGcdZzP6M",
  "key31": "3qCbyZpmaEDp1foUicUWwHNm9xKJYPsHkpBPXmrMDFjuXz5CoijRssMKbnbVGfERJw6WBHxRwz2Jfkhtvo7V4UfR",
  "key32": "DfhbXhsuPWABhRQrTP842WCsyUnfeJxToXj9XQMxCtciohCXz1g3Ub3NSNtt6cxxyYfjzoM2HQm5C795ELMxNoW",
  "key33": "5DFvwB21XiDeEEqjecjiwMX1RSjMZ54sGwmJjHvCSZmbAS9wL6L5Fn7PzbSF3U88mqk55FkSG3six36orTiuMF8r",
  "key34": "5YhyWmhXE5rLFmGy4Z6LNF1mYMkLQiNDcpKvQuyDPHEM7Zhm6wA3EySSyTDmAuZnEUAoPXrVV8GKdhtGkDQq14wJ",
  "key35": "48aMAJe1f4Hh5aE9mrULRjeeZ6U4PXK6HBLszKmQU4aeEERp2PVBoKRt52z96PfiQbNkTiCRdhMtef9nqPkxtE5z",
  "key36": "5E7wE3SCUXDGfweYSFqu4s17fV1v3YRvL8u76tzdCsygDuNMtVCchHcUCxGPjwQbhxeqxEory1FzveT48ZRHTd38",
  "key37": "5eKY4LAiquEjPm4AKU26y9GUQiEz3EnfLqiUj6YoJVxMQjth4JcCecAAyhh8qiRPJjPpeV91NJqw3EaBGsncshfJ",
  "key38": "63kcDTnqFRdeNKdYHo2c3i1mv9xBZRkJ9YCu4XVigWBRAAbsWhBJX548TozUjsskWbDHD6vKohAD8nZubAkrjr1d",
  "key39": "4fbmT97qth3rjEobuTZYR4gbW6SjNgtg5odgzyJM2FgHDCZ24t9iHGNCZFeRmkCFJzVdw3b7BF6gAi8rA8btpuBP",
  "key40": "43RXndPtM6gZYxXdNAFEiBjMiMvPgoGo3Kwywz14fCcm4nKRJivZEEqXMGsnGkogNw9eYABJP9vNqEerZ7bs2V1Q",
  "key41": "34oempNdXp5y3xv1xZvZnNUsDn6JdLsnMwMZt8C8kFqJ9n69isUJXzQxUqkZULLCGkj9qX8aoNFUVC16WLJK8Uwo",
  "key42": "4z4Xa34XtFjcLV6yDUans9piPmsGr4iUDRai13HniEUMwCeszsdvfaDrRYcp1kSMNFf2fg78KEXXHcbbVifUr17h"
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
