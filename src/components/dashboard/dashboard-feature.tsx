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
    "2RRcKTrx4bzZWBQ28JfgXtp3uEgAHQnMQMbGJEFGnKeBS86UwtUfPKJkGwe74WLRs7XAZsx4wN7iK9MGEcYahWAN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2woo6Fpisci2KJym7UL9QJWpGWvfeV8BBUFfsy959F3e4ujCVXAS1K6mj1PH8Db43XonXSzmfxfz8nsCQR9ZrNaR",
  "key1": "4oXhHJ7XFiq7nSUcnDZGQ2ZYEHqniMti2ftpwxw7hurJcc73fygfp39LMZ7yYBVcdYPncZUvGsptx7rvq1MybM8J",
  "key2": "5DW8s1ojQiGjJcTGFJLaU1dkymWPADF76HymG9hsGpr1hnaQF9Ri9jTrHKCFEUr6fHxjpzc7mhhcpLUVm9CTfeN8",
  "key3": "4VnoK5zuUS7BseYLdz83aBAj9UqzqUuXHNV9Kw113T6cKToafD4DxGaxBqctPuSddEq1TpYqr86upVSo2QQXrLAZ",
  "key4": "3PaW4kbMe5EcSQaMZc6HjpZhKG8fVSuZvkjc3rmWaiwj5Rz234CD7z38o6z69hUNi1aQoyJy88YGNNZ7yAYgrUDs",
  "key5": "YjiTfzdX7ZPzn7khrH6qbShyzxMYYE6RCsYdkkedA4yezyALotzdZEwNcz82PN55Mn5qE7yBqaBmqPdE2jxaok4",
  "key6": "5W82YJBoRZCeoE8ZbMXwA6LALiAEooreJvKVu4P4a69ykJHauMWt3BbAJWp8Gx7a64xWxHDCchRjT5q7GxY83oZ1",
  "key7": "bjNGfZdwzJwjqoZYov2aqm35HXGd7bbHm1RpcXDofwcThBsat3rU9E2kTtLier4rNrQB8GfEoLbN3NHbxxBwvCb",
  "key8": "3P7VyyZQAv3h6xFMas3bQFnyFHKXg9jYuZ3Wo7n6xDfFFeU8KhbopNGZWF3j6MpiioiWRx1PEPUSh6vxYE42q3Yb",
  "key9": "3EPgwmnUGH65qfYnzE3AL5jG3EuKhFu4FA3ZWRLWa6GBGGP9gcYMJXif5EQYX32qBoobe2KyaTGAn4D7avG3TjmY",
  "key10": "46KHm5jG7ioZsqf6T3Rd7pBQkaM7ZScnt5J7JCfyQAXHFNvbeGcoscNuPsE65a9qWA1CJBbC8dxcKGNMJoWHmUN8",
  "key11": "2oaWYCdLinSgXFfD34aSKCHvsymewnhWMRkT4yT1z3dGzQXRFwDcBgNPMZyJPf5YxnKjTJVh1ziZArritGPCMBAM",
  "key12": "2nhZaCjb5VQ9hnWDWApTZ8Ea3HyCVUQ9XufnRyeJB6c41mWE1vysShZELsNSsDw4Gj6Y38iVH3FVxQVeqXeJzWo4",
  "key13": "4YVgARbE4DcWgzoBKoZHwV364CJahgq8ivcvH4ViniGqA876seQddZNJwjRbhurmB1m3SJqoW3efYDVVxeSNbVyR",
  "key14": "2yambwrXyLV2Gb6JNefkSDogR5sK34brfLgzjLkt8aYwy8bua9JNHMXGTKBwzXnUKoWpD9yiw3Vz8v7UbYi6RNtX",
  "key15": "2t68nYrqN5k44o6n4HAtjzt6184dBSLERR4gdZW1ZAuFHCEv3ZdCw3S8Ec4hW2fPX49qREkboRCSNmqhXNBYbo44",
  "key16": "4VX7L85N9QBwX61y1CXF3QARyiofVzBw7CzqXcUTsazufLUeeJmo8tVR11CsRLUHuwq53vC6mCTTyK32Khxeaeqk",
  "key17": "58FKZXryuLHZX9E4Yd8hnjgoTq3wrZid8QMRjuDA5GgybzLnqstsW4GNnMWPLNkFktrQt7gwon4DJ7VUGd75YDmh",
  "key18": "22hJPgr8ErHui8cAjpHsa3cXGNWcUjuTSTPaSJ4yE6uxbnquN3erxqxrTBZdKccuE7efXMHktPdDNAQkuXCUJGEZ",
  "key19": "5UMATj9bnxSqcXULKkF8B62B8EhaU1ZDrVQ7qLLzVs44tZ4Cte3ssuQPTRHqnamygMbP8HrLK9KMFT266s5KZQzf",
  "key20": "5mFC5i2cFKBDG5HzR8n9L1TePQHxiYJzWsqJtsQy5T7Ns5m6yBiA7cDAq8AHg4FmbFqbYPmYKyN1uSbiYcxZqVjo",
  "key21": "4TkNbgTzvApmaJwaLeWmKiUe2DDRQFCbCvSFcUnV4VjJ9UZT3QorxDvqCZr4rJ32uCaNwf6inC8pw77r7vewruCD",
  "key22": "DL2ufqeG2v7EqsFweVi4fzBheTNjNx2M6SzJrnnSdGWTe6qqzWQaZ7h7GrkrqZJ7geW87awngyB8byfQD8BKRBM",
  "key23": "2Qvf4N7bbtCs5gDCn2oPJfAzxM2YBaQ4Y6WzGEJrBmef7FX6pYUGqUxvapH6nsUCjxZBwySF92k9gCtXxCdjrUbz",
  "key24": "3aG6PR6r7Ef2v7tJ3oC134nDijgddAWnzDqNNHzrcsJqFd61fLaieog8Jvoov2rcAhkAEuWLEsBp9acKHuPfsPAf",
  "key25": "5MBsL2nFNwmfH2mijufyKE8GfQorwNYXLe8A6jgfL7RhyoVr1curmyuHXTiUUAcHU1Jsa1DjFqbjgkHxkrLZnLVV",
  "key26": "28RPKBxeDyT3Cm4QAqBPXSyPRkKZNj4mWjV15s4dt2xxXqbr4jqLhJ4YHm4c6stgjJLrms1N33RYHcwu4a7af3Vk",
  "key27": "454XWPA4wxk2YeCEUFKH7ZNYEsKvhVAGKgce6wSAh46ucEwMQFusLZGtAuHBeXhqVkEyoJ9uFZHr3qSyShDnuvqJ",
  "key28": "3vUMUCwvuEPJ5JZatyHirnC26TKfQ67Fdhw4buQXm6junEmE4VCZoQJYprqEqPTM14FtJVQwYyohJPt3uX4xCPkE",
  "key29": "gjWjBHoYBGnN7Ewgz3LStTKAQusHft3NKeLrL92qb2ne8BaE436gApps1xAbBrCKp25MMEJSaRYBD181Ri2bB9w",
  "key30": "5UmYpCyKtzpv5wrogbwWqZZ4Y95R1mEpaT1Bpd2KqzBVmejacm1DThbDFvFhWzVBcgByb1QUKDDFbccocXoFSm4g",
  "key31": "ZVAbNypnnY3gwbk4NuhJ2G7ksw5dc5eEnsThWoNTN21t2t1wMbwKMxSXviscSntgoxzCdeQJd3542CkAPv4zggG",
  "key32": "5vvvYNXNvkCa54sDe73iTepuBu2RzykTiPdU63JTExw2qRh1RBaxVwJ6twAr3ZGsfTj1Wv9Lp2oYmdbH2mMijHu3",
  "key33": "2ScQ8mg188FmNCaWgRVdeLcDY4ibNoDD66xx2h7wF949uWGoGkdJK2MuZd7ZRW8CEF4VHBLmLusbUSKz5vUWUS1F",
  "key34": "36PPC8iywRjUuKn6xTsaNLNF3ZRdBod1a8UXXoq5jir8A4BZbgPksyGjhibdgBGFzJMXvfYeTAB1dezFgsHcvvge",
  "key35": "VHti6nNtFR2bqbjY393txszGEL79iygEwYAMgDKeHiA6x4gPL4PLX5RyPp9C2YpqW7wmPSnkFhQkDti1vnwiv1C",
  "key36": "29HE3zfbBkZ8PhehG1G8Wyaz677DejczgPeGStf2x89RtRpmFSGcG8vNzhe7b3dRMb1gZ15sUTrZkqeEWGHKA7gR",
  "key37": "ZgHYCKPbpBZ88sJffRwf7Qq4gAqH2nNFZRJfz9wqCp2xSk1pBQFgkRAfVuqcfUVdEDeW8WaUTY7dvZqpzeQwcfF",
  "key38": "25whVov4FBKHJmjfq1JZFney1Mgpyz1rG33XVZ8xihS286FomVqkvnyUqYpU1zFoN9U1qVax2oub6k5agSnNBmGF",
  "key39": "4vaJsCTtXDLkjKWZ6Sv9i6hU87CT8LgmdAhd5RHtS6jFroPDKVgX6ULYjnyZNhpCqj1JjFrhYuepY8mZyM2r4ZS4"
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
