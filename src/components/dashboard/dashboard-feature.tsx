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
    "3LtBVTRcyY5MpsyTHNPh7GPnqwCzjRQ6aaJ6Xs7XD6MJq5dsKqvAXkPCSL3KHgoEhyU7DoU6wnwACZhPjB54kDsH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51W74Ned7UFzLL7riM7FG7pfKDqPnCgUYAdSVBqXeBMpKWfNJuGnjNo75RagH2ngfFaxSa6qPfRkmVJ4UrmVUJGF",
  "key1": "2BVaSKvL6E5p49mtNwMYsNyNPei9ednT8K6fLRAkn46K5eJHNZPReNNNd4m5QSfZ1KBKk6dqJDL3KnqFqbYLwH6X",
  "key2": "3KYL51uZe8t6Cqbr1pBL8MAW8hXEDMJj2e6qAyUjEU1nHcxLNkno2hjeWGnsXubmaFTH2oSZiAduYmgyEo2aaA4T",
  "key3": "2eM98G9J4qsedBaGfXwCDUvJ7HTm6tegh7rCoGoy1RuSipR1KFD1vBnTBR5zwYJKzYx93CJSWZdk8RDoTC7kASEZ",
  "key4": "62ProK4mafWauxhsnRgbHjPw1hYHCQMYULwHh6ifxBh6AKphQeP4Si3Aw3DW3ZosmznFWUDHpNtufSPvgCyaZxeo",
  "key5": "3M5PhAQTc4HcZgFD85S5Fd7YjfmWgtQNrcZaqdS8ioMybRkGp9HfkxAG5cL7Q2qh6z7Jwmq62ZFv4bBxnXR4WxxP",
  "key6": "4CzXXdkBoZCKhng7QsEfKGERVJP4SXrZfBWUxbibZHVtQtirSXtRhKsjjqaaoeSoFtTGd88n3nXBVMCiHeEWtDY4",
  "key7": "3gxw2wZjKXce7MqriAub8DTaaWWRyZrDJDnLWvSX8UMUTKk1bHjZWxsuFgqmZUYHrdgZhoz1AaRZLEjGL5k5ywdC",
  "key8": "4Vno9tb69jVFujtHULNjFW5g5FWJnxN7rMuf87crnr4gkhVyFvqKpj1w9FcbcWSYoN8r9REGqyGUVi6PRRHPm2HR",
  "key9": "5mK7rkFAF1iA8nxoVrC8CVoNFnzX9i7ug3jubr6JT4KUEaSKUrsREaDcRGUYJHAmakjh5eTZti8TkR46dyJoNf48",
  "key10": "5MTTijbq52Q4jTrLZbEhqFwk62EJFyEH6ChL5aTKRYNANuHT4QSkHUKdHM2YgBuotyXFqqueKjdE6tBpmnrRkK84",
  "key11": "3tX4FB5t2o3BLLxMGFgNpAnpg33ch6DpzAFC3rTPpbGQXnKZ8e59YbfgKLJJRTJuhRX44aBGnC9MYzAQDntmPyjk",
  "key12": "5oD5Wz9jjSZe9vgfWrrgE1suLjbmdE9mZE1aEBkwCw7eBNvDbm3g4fJ2jpQtshQuvGXF34tRtbbB6G6WNvFZuKxZ",
  "key13": "64BVdmKw878qjAnCbBcyiBAjirfrYKkHvUh3eAAQsBVz7KEhSPZxsJR6w8EUE4rbLL3Y28XxbJYFp1WYjdCjQXGf",
  "key14": "5qYECCrzBddzeTq2SfHiriTUaQHk9iQq5Pm7KrhxCBmUrk9YmnqZVNwkPX3r7cUY5JKusFWoEuYBWoVo1C2A9v4n",
  "key15": "5LqcinZzyYEDqwpUDioMGF8XjtizGtviGptxSYrg9gRDU8ackDppmXqKMQdn2ZX85pzVkw98pgu547jEUuP85U4W",
  "key16": "5nRwHiuk1APXWaLYJJwcsJEzUwXDatXjy2hW9XPqZphxFb7NGtFGgepoc2fTTZsHQiz2xkVDDAvHVWCrNdtwP4Mt",
  "key17": "32wCuRFxUfpmdKiMFeLXcstrUJqdHiEheG1diuCa5ySu2pcLdnHV4xicmEgA74MEi2NTizwfa2iFC8RKPGQ4nbFC",
  "key18": "3uGH2UPwSvyXFHsyPvxnrYs5rdHWSkfHcpZxatrz17Za9Y97bJydc6r6GcSKWFMUQbnmRX4PuddWWvvowCD2pdEf",
  "key19": "2FzyyEp9nrbLJFn6vGNdPAdVK9f2nnfgFo5ZYkes1QVU6Dhy7aUNAxKqNnGY8V7XKN7ckMc51wEApuy1Q72HjDxH",
  "key20": "5vVWi5SQocqmvWex7pZzhSUSbVATGzJ2V5VVsFuHjG7XJpLxu2nsVEXaPuaBdrmV2usMWNNUuh1Nx7aJexTcsaGA",
  "key21": "63WGWoE4buPyakJaEXRnFSbC7PMAVpfkPqAJcy8877X9gRhEe1oAhVdQMfPtrRcjDsMybvGiG51uMeq6hGVZ4CsF",
  "key22": "oJiEQeGYnYXzMqQhUgMtm8CVNpNsRusnbz5qK58vdaFgNDvTnmuFVidQb1TtJzNeBb4ePZrxrhUZANLUTMhQGp4",
  "key23": "x4VmTHddN7U48LwvuZV2GTMQGowphmkoy1q335ee2v1dXe1Qyu62CpJPjMMmiq16P5mBB571dhBmzYAsf3y4UT8",
  "key24": "5ewFnQ3Wr7wiEdg93baL9R2FSsgssicK2aiMSQ3vVikJUE1CnBt92SYtsVvpThHBYrimAmmH9aaCrDgxdnsSDYVo",
  "key25": "5D6Cebtowo9ge6Xg4PHcHxSfA33xapimVVtJf8bkQgto3p2w6HuHMrXwMUTpNTLnc8VUAiUL9NKj23tfR2jyTe1t",
  "key26": "5HxNiex6fGLnT3JcK3Q2EUiBwJLTNF13rdRSwodz84n449TfWmfLZPnXzjavQqMjzfbk9t3uqo9MA65eUmpjQrjg",
  "key27": "5t1P8dCocnwnPbqDff4QmAfwhz1eo1ALYMjqYPahbxFBkSxcrLEekJUFQ73whUfwSKrQNdewN3z4oUAMG8ZGwrAy",
  "key28": "5YPcMCBzGoTcZ1UWxAGRcJdYAA4ryzuK3eLKBXsvphM1ewCT25BYi8H2wReUqNnm8mCHUawnz2nQr6ZrfauY4a7G",
  "key29": "dvKkg3rd55Vr6YthcWq6v4nCMdzbeoyPbdcioSVN9cHcJ2QEWb87pUbZedzLaRdUF8SfZR6kvMxQYcahN1cMaUv",
  "key30": "2Y2xUm27pJ1wQCpq2sKNtCtzNE399ezR2ks8D3UpiV5UQsrms7KMRqPq2RJEWj7cSBgPKEk6v3V6DSk4aMxUsRpB"
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
