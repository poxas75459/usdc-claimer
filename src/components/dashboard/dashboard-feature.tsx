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
    "44m8vkgkZHTVfRxcvj3EeKLmVMrkDJCUqGHJeRcNce2BuKuz9Qiyht6WqrsxVVt5EAHyTwjqN8jsMJKrasBCUr8L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nNepCtt9i8empXq9mA1WVERQaL1eekci4ieMFJU3571drF4iiyP6T6DoyRJ16nybVcg2iKCXJ3DciS7y99MqpyX",
  "key1": "3jQZgWzpWt94DZ9pY8yz77ciW8gK8RVqkpwRLiyNmuAdmDTDiTTb9mqJdbeVspLoQ8LyJCantiREKnAURa1PEcLv",
  "key2": "22C17pXXxJdJ6eRWU9KP8A9HoKS2wFtLFr3w537Y6Qa4VcK8P59BysKNY3FmT1qcdJSgZYpY4Cfmxn258TJcDeSK",
  "key3": "47CGx9eX3oXJQFtQUvj94gZYHhhWY9uifrSqHJ1uvqWMdRDRfjc3s6MvuNs96CbUn1vESbvh7X89u9tx8Sv8d4t5",
  "key4": "MDdwXbTjG1qKmL56SrvamUnujRZmemvNUc2mJi3k85gujiyzR3bqWXe4h8oGFRsSCPWfMhv8w1HvXS6UHs9mu5S",
  "key5": "Q36REnwUyyLx83LYQk2sacXiQF6FUbxvBQaxk3baKe3UDXHFLQzaRa6Lp5t3SQUmhJVYbzBjYjEzRoJJn2xiExN",
  "key6": "4NxpusyoCP9VwnpHTFWgD6doH15g6DaZ8vzg472RBTqsh6tLhrG2nGSY8WDEDabzSqQCA7dvDag7g1DLQfNeJjFk",
  "key7": "62xiNUWMfFEx3S2EYVycYuKNq2sa4EwPLCZ4K8rAUsHbJ51h52C9MFQuzFD669DCMmjHLFKvRwh5zJxaBUFodnaC",
  "key8": "vDiJJ38HkAY7JrBvWQCimPkGgJLKGxx98tNKzVaefpfbr7uqZSn2XqqkGC8jzj6eo8hYA7fnzuY6EBcgBqjEUf4",
  "key9": "5szCaoPr6SEuE1fDkhUqGtkGfXfS9YNoUxcaTf2MMzPGCzkNd18jGte6fAYsmZo6fyiNrhPx2fdcm62YEUfFWvPB",
  "key10": "2LUY1wABRc9yCAjQidLWW5Wy1D64eXiLJuZBWF2otyAy5PrPmL3Z4neaSsWS54Nq136DRkz8wbmNZ2YLadN4JSv",
  "key11": "55mY8htG3pdmEZBq4tmSQcyadz7VcVm57S7n1X2DfphSAyemfz1uDq11KaEhcXUsT3ULCDA2DbwqFWD3EZMfQdkb",
  "key12": "3RM3imFzpf9PdDijFRJuSPAFypP1sRme8bcSyzaDUKEGhgt4D8th77Dnbz9GfNdrd8YGbTyrqiggR5kBKP4PE2RD",
  "key13": "2z7Lta5YzQiDfPCUzPctmhVqTRX8VfCjsTQXNRjY3Gcgu4RqaRgYzgh3Ykmb1DeHiwk9ogqNHHByfe1dDoqYrcVn",
  "key14": "2Nc6HU9x9Fz1VpUWBMPRNh5P4stynJDHfYS3FZGCHrha5Wu4d41dd6K5MmP7LYLa3JWMeuyQEF5AnD5Ai5D4Dpm7",
  "key15": "3KCkaUAfkjWd2htwugfAy9gqeZX743H9kiatybG9dXWENU9kDVYoVmHeqa9Zs2AGaAPy8NMCFibvavXSxQA1enAU",
  "key16": "5LvQuJqoJ24t9ri1FnotpLL5pjCQd1Dzuu1qD4vGZj1ioS3QCULrBNewwvVrdMNw9DvV3XK44NMBHqHubgN3ALmk",
  "key17": "4y5mABpvKPSsp1P5ZURTALB9s2kPL4pqmVhtgxyFXmp3V8f2LqQRkcc5hGuTt5Hj2YXVhFzHUQfvLJHWSTPFSM5F",
  "key18": "4ign6cbrtQinLgj1vTttYKwwc7QjDxRvNUTrgKTCLBBdGE7yEgsiyuJXgLDgpUCTt6bwUXHjaXfNuF9T43VzwMY3",
  "key19": "44g1346o3cjHLHEhfHz7JR3eeTkkSEEs97x49XqR1HyNL1KY74g5AibbPDVnhq8WRdioe6HsHGhBE2ckx1Cxum7F",
  "key20": "NVWCjrWxK8cPUtpsCRLwJFFWi5bCJtBXUw6sVRnBcAr8qfAfxBMgAR9FkxJKrbLAxnETDqbCdvbNSZTvJYVM2t3",
  "key21": "4edwcj2XqCNmdnqrH7q263e5izZt6b8Xy24VAk6Bf3GpiZrYrvmz46j51aeKMwRVG6bBvpjRecCgD33rbKjtpkKB",
  "key22": "4YG3nNejmbcxq5w8UUSUp4ptgozbGymMRVzfgiedsbiG5csPdip4pWeeUg1HLzTDtTUtnEFyWyiMAiXBqdg9pvBF",
  "key23": "2WGUTsvVBiD2pJC3xbkfBRjamYexrsj8hMXPvrSP9nRPcM234WbVoa6RyHYWMbW7Ex6ZJeANEjNUrYKSgLCjP6bM",
  "key24": "3dehxWx4gsK3jwns9ZDrURvJrWV94XSoNM6cHarfEM6vnH8KXD329F7kkpvx7cQYZufPk3B6LFr9kVWGzdRGLX8u",
  "key25": "33JYM3Jqhuz3AzPnB7LaeX7JG8sdesR4E2V8mXHztUK3Aoik5iRBiULLpVx8PjRQPkNUpj89UGKXc9TT8hBpv6Pp",
  "key26": "4zKg8JuG6BHfE2ku26LZ7T9KoDwMP1GATQ96H6ewwQKThs5i4DCyJQGFEd7GkbGrji8Fzr1YcFZudHPXLL8K9qSR",
  "key27": "5tGnHeo1gVKxPfmWrMeFw19rApFSkLzpoSfv45eVEmYHzdLKdQQDMFKbjSqQjgJ4Kqoe3yi2RADnrveeX5eRpNzN",
  "key28": "2Facq4BL3skpLtJMm9vz2XGApJyKbG9EQfkgJeFvrXKanRodRf12zbAc81r3zX7fpYGzb3y8GE86oLZhB9ncAWXQ",
  "key29": "4nzjjpKCKpjwjiiWKnZAvY7B7HyBkddx3ib34Ek3qr6QfGMU9GWnd93e2tyarAGQfwFESsiiEQyBZgMuZ7kDC515",
  "key30": "2ZwidRksvWm43mYPGvMsYLAsZXqTTnB1E9nQdNdP8TFqzFBEYZY3U6u1kWSYUrPXNMMT9wmJLp1YHRSxHK5pCSiN"
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
