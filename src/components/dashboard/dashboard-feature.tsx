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
    "5Ljtftr3Ct2tGZPbvHx8PWSvzW8iXXcpaQ85cZCM4wxaFJPc5rrgdYXSgYZQcURQHM48mgeMbJjd8c9ezDEx4gQG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2C9NqNWZCUJPZLmKXAfuwK9aRQtP6RqZkmxMK8WGcBNQu3RoZaRJ4yigVnBqHpoDpqXqehksjHxszbde5g7DPLYi",
  "key1": "3sVQ91pJyMuctrBqFJPGK3WLVcHKbhjcHT7bo9pfEzbmCHLnB1Brwdo4EMgFrTSdfE41JaPXgmes2rXYZ3NYvDcs",
  "key2": "3PkLTMnUb5JgmgrgQBWbnk7Uj4a9v7pXpoB2DaZGpvYzXbFYVf2gVt6WWST8DsoCdPGdPHRb4X1QkZbqYWk7TJo8",
  "key3": "akbymyAEFnsksHbQcSMXFuR6wcQQ9zPvbqPkKhaZNx3xPok5PtGWo3EGjTkpabbmtF1jJfG9duSHcBNCPmyHj53",
  "key4": "5iebRtZbhbGyuC2d37MaAc1px14R3UmUsfvxc32ZvoT6dme72LbqfgbpUxeKg1LXfmrBFzTu21UtJasYUtH6Csra",
  "key5": "3TCKkF4gKVNgsrNAoNQJ7UA14EsTuQA7tzUpt5zJoLjboEaDwC7ZUYACcREV3aqLm3q9eLXMGePype2WL8WF38qJ",
  "key6": "5CdFy4JhWXbgezjHvkwQRca88N4FsxAjs8MRKdKhVDprrJqykNmViPpYQoRyeH4XM6dWSz2A74yLXLMiEtup7KwQ",
  "key7": "4fH8K6yyimVbAhhwJyDrC3CLkRhipHyNPurdSERgT6Qx9sUYvsmv5BWA9w1fNWayM2ASYN7BKS5F7r3B5VCUvYLu",
  "key8": "3WCtuFhJQZEoKfpSgDRmTF1QCzqWEzSFs5cY12ftHcYV8uoUR1HDW8mzv5xaQckeBUarFDHh9oPhMK1Q27ZTAnX",
  "key9": "7UYuFNv93dEEcjR2KpuQcZgW5uc23sDVwu71UJSccCYq2TFNFEsBHsnW4sZp5pbpsN1C5zeaYL6BR37LBgmgDbz",
  "key10": "4jXPfnXvqw7J1GPyWsXq4hxPafcsyTFa6ZQJawVZ8a6y2CLo8ZkCKKipm2fXQrkgJuGk1zgJKCpdTKcvpGHbXyYL",
  "key11": "5vQeLizEzhqpP8ayARQPCpVoCnr2FgredhtgRLe1MDNuSfqxiKETPpaPxbbydJsxk5kHfd92u85uSFHzJ6pgzR3Y",
  "key12": "5aPj6Yjn8fnwDniUJ21McJPv9tLPZr78yXXpZ3qnu4Z3kwsZ9Efv2dXtBNGDhjU3QxHZVoaSvSpMphTeG2LcCvp4",
  "key13": "3EJUWiECPtTLz2tSAwmUjn4jkqxRdSpG8nnTbzMgwr4ZxhVuqHWVoETqHPsq7jyoji6XtS9DxtoLr2cqwdAvCYPs",
  "key14": "4T5GBB4GcBu53EkaFTnCCo76ZAbXbZbQYjs16C8MGpx1Mg3gnJESJkPjcnrTVHmjmLvffRPGH3VC8P4FmaPDgvwY",
  "key15": "5VFCtjU9A5xPc7772YuNKDN21oF5DaV789tPQvjaFwJkSi3hwxvvRAuVivLNWNno4Y3pXVTcnto9iFnD7M46i2V4",
  "key16": "2W9iyRu9GogD4MDo1QujEYjuGXMyVtg5bFrrFeXL5JFmZzj6k9AvWD53VzBckzHVUAmroobsTUfnQRJFfewDiWBy",
  "key17": "5BuCzrfQXdz7GCihCdTkqBQk9o311pCfXhetyD7pan9KyJjgK9CbC9eE45c7BH1MJk4c3HKpxeaaBo9SV3BiqZXE",
  "key18": "3GGSELJzu5hUBrwfpjH5XXY5ReuyjRVzw1NQYJPWxpe1LMdUiStamorg7FQkhq4epwxuaRBbgxamZ8p6J7vhBciR",
  "key19": "3r6x1xjBFGmrTtqUWg8zkyeULXgkMyqUi3nVXRV6GcyseF99EjUe3GscRq8ULK24CVREf5TEQkHz1DiRR35wCBgu",
  "key20": "5c6XQvfk2c921rWR8W8aG7ZaYch6ZfVSpnzZpxBXVjzJ62w7z32fKkemL8qrWcgkL1pfczcAL9P4aU44F61N4TX2",
  "key21": "NaJNLo4MKe5pWmLRbw7s647XKUGcRMPaXNatMrUh4eXV6xKjvAWxqTp7nQXojawbkTbafGPxobQakp3AGfg7ASL",
  "key22": "3t8fSa1vpi2G935MiQWoqZX2sBqk7ccDrpRodbEZAFnVTTmfuEQ8bLik5XxwQeYjyEJQNohL3wf6oSjy2Jahx532",
  "key23": "5QrSqaL8pMcmBiZvXUUWVVvG7ch7QuMk3XJqotgRDduYkuWYiVz4SC51xFemV2chFgoSxVaCkXsp4867Pg5qGv7T",
  "key24": "43D4LE2Rv8bnDQtrkjtUYZnCRfMcFoNdUGV5CgucFMbw6htsJb3os6486Fjxb2ZMVYLns7FVuPcFegj9PQsNXSRB",
  "key25": "4HMd3Gy2W26TFikuJHs97hESQ5aags1zWMBEhcfwXAkSPU89cVZZ39WZbqjdGLzMgLK27CXrRFsF4Suo2vdSyMHx",
  "key26": "YPovmSVishvJfUUL9zaUQcVxozZUUX78RrEcnYmDDT7brAdd51WPh7ZKYDbtDsmWF8cT11wwqEeiYe9kfLfxEsH",
  "key27": "FrjEW1ZfWqLPwFWYD8i4eGF5WUecob2wgf85KN2j1aW7YDWHo4wmdsrhL9uKkAremA5meAsdsVW4tJodkgU3XuK",
  "key28": "4bdy7ZENZycYFP7Z8SeGTWo41b9e8Ywjxbj2LSdz12uBEmgwADJTVfTWLfL8xtwYj7JX7faxJjtGexNAsQNomLvp"
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
