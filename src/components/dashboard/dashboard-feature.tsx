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
    "5z5Gy7QzMFn22FPxH9ZptWU6gfP8gtY4fdEs2ocBUzvWwHBVkPxx9dMM85bxcqGmSEEHj7PSfUEpvg3HXia9GBsf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nfFZ2DDYatNyW8gnnWdjyPQxVpTfiWMBB2FLYJtrtnavkVvuWS2rt5bTPRgmrbhRHp6QjWjsvC1Eh3aT7z2sfen",
  "key1": "4GbZso2BGGNUCKGWkmnGGN1NYq6rEXXU1nHsXZWyfFCfxb8EEox6MCQ5Y4boKL3eP4SYxUWxvN7GMXaNszhrRuUF",
  "key2": "59smxkz1AGHoVthZFr6v3YUBvELoVjKmdABe9uX5AM21MvbtXkwLemxko2vngBaEi8hzztbmWxVwzYZFcHskNG3w",
  "key3": "2xX8y7zk9ttSwUNxxr3QH7jGT75ZuPqRyqWubzh86SSqzpHe3fk5P7BCbbeBLSx3K7iMGMLJ529CmjypjBfQ5ERj",
  "key4": "SA8dYiNKTQSs3QPLTpBToGjGmtAdoq9ShFyfuFRkD5Z9DhB7jAAFtxu5WUHxH43ELSPqb3Rj3N73qP4fp9D1sXq",
  "key5": "3KVk8EHYPNef1wZTFBeeTt9xEJAfjEcevYTppcHzSXe5NDxhM1He2jGgVg34rLNUBupsxQQPBaNMPYGq7nMdg1vu",
  "key6": "2xCMWa2WPgC71yiGNismK7YcisYwG4EP8dr8YdyrZAtJYSLmowH5Jajbx3d1aT74dX7d5uHqsMcJmQPxkTR2dj1k",
  "key7": "5y6MnQDeq1N6y7NbnnDR5jPfSMkVqpYdMGvuJ7H75peA6hB9HFm4sPDZ82D1XKo7g1kxg4sCvt7N3mppzW5jB9ZM",
  "key8": "4h58DbcNWP8rhpXZ2SigdeSRaaV6QdMC128AuCC5uqsvhCTR8rgbLqGgsbPvWs9SQL4uTLk692D8rW5c1EGnW3QG",
  "key9": "Mfuq3r5utgcpm2z1kXHEM16awkh7g2of7ZPJsNh7jKhnLbS4nuSRvJjRm4SZgF8a5a9un9NYTsi4cmn9qAzfY4d",
  "key10": "3nHQ4BdkkE1EBW83YkhkZgnKq1m9eaJ9pLYfkTdTFXrUe9LsYdCC3T7MPTF1qZzMVBK6Thd929pQnBAwzYavRxY8",
  "key11": "4jUWPkpviP3KET6VXuSYutZU8tffMsnyYWwEdCJQt4pfgoh2vHqNn99Zv2J6983H6Sb9GXpvD7tDxjVb4h7sLbLn",
  "key12": "55oMLJb8b5gUAzMgd4DNo6mcbWBVnm5wJ831L6tPSa2QeqGNkWDH8oKRnsbA8BEpND3NHabeqz3g1GT8kaNrdjSb",
  "key13": "45EStDC71m41DkXsNCFwtnVo9fUr94J5AJ4JyLutTWrzgfd24kRqNxx8TELy4nibhmfsfbxA6QX4kyTiwvYnNoVb",
  "key14": "waSLFbEw4E6oYGWETFfYRXJ4Pokhy2ogi1uK2f1wenMWHPoERUsYT1hD2GFNwUZpLMyMvbJyqGusTFxphFRruiW",
  "key15": "5xTVyNu6k2JnZZRtQ8C5wrTaqYPRztR23xomATb7ugrb6CMBJ6gs9TDjYKDrpsiA9QvzcdkXbZT5QQJHEmxExwMn",
  "key16": "3ZBpXnSyp2GH8gg3bXR6PxXwT6WmktyuXuPpQRt4AAvsBVmFqPM3tcSNfe5rixwREysAV5EN2coMZAf28ZnAqAJS",
  "key17": "3pGSz8KwCQTmJPYMqbv12s6zwUMbBHu2urfUzau867wQymAsRLqA3XvAdikJoDBKhxgkvZEYdAznZnYuBtMzGfXn",
  "key18": "2oy87imPidA3CAqYYEHyeepd6qGWiq5fxS2WsDo9RqJcRWvxAqgKnuAhh5RBu5WvsZYBeWbFokkHbMMRqpTF7Ktt",
  "key19": "4iRQxSS9QnSNTByNKcWrA74nncdTzW1LxFDfxTJAyaPmgz8UxSwYMxMvayzbm2JrD1Vj7sYDG9tYRWs81VLWvHm1",
  "key20": "5a2ADwQU83VpjTdNE5dDFhdZMNVDLTDTH7NK9cApxvVnwqtwmxzNjkndWJaTwB3ryizZBTdNMqd4ZhChYWyqvR3k",
  "key21": "cuzvKJgU1zts1bRBbLA3cQTmeVtWmu7fpWYJZ1vpyeb2HdwFakXKMgVdBxZL1qjT7fss8ovZTFSpbJ3yJWpgdW5",
  "key22": "3cfUfXQcmJhEd4yyPqF6EXGGpn6RWeJg7G7KawA1ic4eLcv1LRy1B3GT1LnuAXrAvXD1YiKLsphgNZ9Yx7mV4L2Z",
  "key23": "3V9aXybHFANMBc3f8RgJKWVujthJYqiTxBHiZ4JLvcJUPYKNgbyM76EfbW4S7oqj17J3HvQcydjfb9XKVLJkuCuH",
  "key24": "31NvV3uER4xomEPyqUcsReJttWPWmeCHCfc1ndk3VXAKUJWC7ZF4241fyQXTdNeJaf5WYmXA8g8c6bDcHaopwknC",
  "key25": "4CJsss7ReSYFw4K5jYf74WwrBv3zo4zahMcohMYXPrsnMF812oR2hNThk9i8WV2q1pSZ3VQBJTt3G6sH3LsnLKir",
  "key26": "56fhWjJqc7rnxkaahhcZA6XRUy2qzGt4oKW2UVeDFqDmyZMWCDJWJSwvVe2hdMx8227fYxjJVDPgeTmZRdfkkyMZ",
  "key27": "Hb6CGM9wTBZCqz5t5F23DhG6DEXf4AJbU7E36usYdST4pXUBmvozhTQxaUmCmUeX5frQ2wzgyr457kxB2cGZAew",
  "key28": "zR1vDCwU8epgyMQ2okEkFwMNTe7KBUkaZ6FpJBda2CLJ9LBXdrHii3rDVGf2Vfh4jhsjMA1EzzYTGqweewRsD4D",
  "key29": "5kvVGB9nXcHFWe7fNvuWPPYHDKS49YjdUA4n4exFMMs8XtXeESSSZwyKDyw5xYZq6e6yScr7o4qwWSqEyxZ9RyMG",
  "key30": "5tTL8knkDLYkaQhNH7sASaY8yYVVW3JpKUK32mHNAYbV5dwHCdTYU2vXrw6Tc7dYPvcrEoXiMRyXxjdPEmBHbdg6",
  "key31": "2HR5vvj3puNoFbbgoQSs7N1jvjbLG3ikmU4wNi9xHHxsVuZiqmXgcp1wrijabhXBnFXNSaF5XzwNiTg4oEmrN4HJ"
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
