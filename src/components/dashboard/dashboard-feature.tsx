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
    "5hMXGZpA1WAp8p9EBMtou41ckvZ5Nx5wJ3RaWTPsuG86drpu5ZfLN87HtSYajCUsMD8uo4abMKVuM5tngG7CwyGV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6Ju3cZQoLSY4J1kervy6rgU2nUc5r8pB5cfD5G2SjUTKkpNyZ9QBV29ZzhXLX7EJeso8bMSzQJ9WNATCKu1g9QB",
  "key1": "5iWnohBzDsLGBXL42FmECkU7gwce4sVjJXmkVxuNWJebDH3BVWhW1Wy1x64ra1De1Wq3LCiN2jVrxEVgnq2byZKC",
  "key2": "5HbkPVmFMtUjwFSFBGgW59126SLA29BffAMqmykw2GBbgkLHXnzViCcbMEsQKaeBV7JHrzRVZtB1M5nNBwZXXAsS",
  "key3": "5LZe8TPC9ij7aFSjzqPpTWc5aj75TMjLSQ9YDEn8tbMNY1rTNwB63viibiXdAvtA29mGD7qeP3MWQ5TX9mJNirg4",
  "key4": "21V94WB1F13RevcQxjiCnzcDRdXP5yoZ53tVC8xXfK3iFs2HG2fXCoqgppFCt7cxqnEeFE4JpP1YEuDw1yZRGt9a",
  "key5": "45WXNGe3N4V9Yn8wkSCzZ9bzggCMX9QcSUzbuwosJeAvMr9DYTKGsMhEE4cM8pufL3XeYKJHXnCBMbdFDSmxycCL",
  "key6": "5obbNiuJArvt4UMpnxHfzwt27HLvRSoWfLwHTzNEBXiJ62Q6sUxM79Q4UzgJP9oA2tjQMsDQRFwGXZtFVYecs54Z",
  "key7": "4LzMgJcU6gL4wKWmqPBJXFh6qpeEQhLFZ53WtXAcyq7uXZPrsDeezy84gvTM3S6PesnS7jgKCf7MCpJiTufTxHTu",
  "key8": "45yfHUJbrCDXvfKHUDxEs6bC21qVy693bcAD4rUe39o4i7nggoWtmsa6AcPapDjaf2BV22DcnyBceKsa1hemk9B9",
  "key9": "2ALrnFRVR5iSaBDkfjo4qeK8ohSoXE8h5YZW9vgYF6iYYyzD5pw7ADW6pTAfj8hYx89rX2BBiTpYx5GELp9njsDX",
  "key10": "2h9y5ueaqXRDx9RLouno5sTHoi1EMKhxy2ZswyDzLmy7R6fjS4r179wtb6a6ZvMt2orjivKbzn6bayKLAGVfuyb",
  "key11": "5KpyzZPym9XdJe6txK1qyPVZLQCWvXMR6vhk1UMVD6XHXc3UUZ8GCai7waTV1K5UiUjp4zWeQ6qUT3qjiUHVzsn",
  "key12": "5Hwhm4s3ZohUD9TMkG8a8WanJTo5taAJhnNtvNyPkdoDeDvFfm4oyBnunvWCCEu3EdLX69GW5xy1237Vzfqp4ra7",
  "key13": "4LwoLHNLbGH1hxWqrytoahURtGPD9xYuDgs3Tq4ATkkv6j4XWxM7gVvFUSZ537eJsXXy28ZpSKzoQbLkPfSESHzs",
  "key14": "5zi3twH4qbY9jd1e5w1xJBsU9gPxQzEyugnd1QbYFYS7o6FQXRYH6uLQGJLFJNrrbissuW7Y4y3iUy55txnQvCMY",
  "key15": "2nJ15HJyVKEckRv2sqYEFf3hoRbnB8a1EhVBRu5h1Ejwt97EkdEgCUXGhJ4b9Tmm9xFb9aGXoCYVoR4esfK76acu",
  "key16": "3di4it7pvbsnvmTrE3XnDnPirRehFVJJYSXpwQdsd7SB2dec8WPHEGn9Vj4fgwpsNumUk8oxPD75fzh1ma5mwCfk",
  "key17": "2YJu4uQXT1FoEaT5J2hNyzAmSfwxfVUY3uNpbBJgto2E1AgUhxWDog2CAyojA6PTstnt9RvqiNrCeJJm6WD8DxSu",
  "key18": "3ZkLTSSiERNbMFUoaZFjLV9fRFFxveLXPdRKX3MerQgwpK9Rmq5uX4wzyVbX7vUCmZWqQiFeoWqEcHe1EYTS8Ndf",
  "key19": "Gi93C5j3bDvH3ks6JhEbTJYp3o79DvECqeLtQSZeiHKwNVwZGZwiUSv3ynhP4J3ERvDFg36WTVkobQoPtEbx91o",
  "key20": "2HvbruT9g8LGHanBgoSP1ifEkyoLTqh2snkn5FRtxpYt8QEsWM1WmeJ9TaYeCvMfAq4hHahaEnzQqzexTu1dpdfe",
  "key21": "2FKU6hWZfizsGc8CS8UYLbvi2PJ3MWSbrrDuw3rMQbciSCFhWFeoXosamrGRQCeQMqPaYqzCRZHmYTm3CU3o1ak3",
  "key22": "YegqTgCr6n9FfsMp4jAQWakXQcdo6n2W1mVX9LigHgutiNF8au3Sbj4qFiYfAodxiVZBRYZqvq4YjNNbpnXDHom",
  "key23": "RkxCJrSWHDRB7amMWAFSLLoV4HMYqbqumCo4SZK5F5Lb8gLGMDYhNQ67uEGude91iNwgGmn92NyM4kVuHMKAjd5",
  "key24": "3XhWekMvSepMLW5NCsRgUi6ibqWduk8rT3gwnT1z1CryA4cmeU2P294AVQ6u6MZCMuAFf2rA8TAdQDYLi6ePhHaN",
  "key25": "xutW9SA6ZReVqEeVz8nFtk5MFqXi9eFuzVF3ZXL1M8cHVkSJgCJhnxbdkREHaUypzFM8UkAVguVs4nxrhe6CpBd",
  "key26": "2umbopWVvxBadx3d5DnLduHcR41G8nrYKQzPmxcscKGm7Fd9u2MnS4Q5sPmwFk6UiduVfjb6dt3pWvRv4mkUkuWp",
  "key27": "5P15j4p4QVjJpwLtCzdpa78tYF4JQ2obTsigkoKvZ56C1XHSe8XkCipTGFsPcJpKSRHbVieU9ESLSWYeSzShHAMq",
  "key28": "5mqG4AENWQ58s3CmXE3EWTjt4SrEJJfF5PvvQc9WJKM17DjU9kKBfHxMwyk5tUQVa5Cg7tRa5WfdVfpJhvKyLYgi",
  "key29": "5CWRL8vkpcza2aufubhjLHGy7Hp6wDtmZp53zN8gehKnjnqdkTVFwjS9yg25KsH5kMX2CNiXJYXVE7JHQAGnKW5h",
  "key30": "2q5Pe5EKjUmvfQTa99FxXhtEyexrrkkZcoZ9p5cUeuezQyBWmCVAUHprayHjU9AVQowjBz6cwhikqmXtg5RuFXqu",
  "key31": "2Jc6EpBGsc4pShyL4SLCtQnwjL5uA4ZfS6j1yFi97oddbzrT9sVNap6m3TsBFgSE8xjSWZJ4ZGFKrrHKHdx2WfZo"
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
