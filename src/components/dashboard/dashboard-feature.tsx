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
    "4Yior7teqkzss4uKhuGMr6YzfbRKfCosC5L6o6jExjKiuTA3ZjRbgugKLfqGcFwJMkiReVSAWywC2akikC9eXHCk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2atCQwz5m58EuQH8FEs7AxAMcHYwkvbKuG89cSJn8aBD3HgC2SwhpCguHV5dahgJxaSf8iVcqezLfK4Vbv3E8Xb1",
  "key1": "5PXpy9cRaqqcdtCZAVmb24dG4SD25tAYt9yjJ1PJQqYhMYY6wntgbqEa5KVSCd3s7kykNxxdHNVqWXTMrmKX6Ddj",
  "key2": "tURez3JfmxBSrK3t7RP2tspWiFr4Qe1ZMRRQXgByuWeQX4ikyr6MrLdXytxgErYf1aj33RNmHwp3yG5RUu4kfXu",
  "key3": "2EPT3jTCsMNhpvJJu5jxvZb1zdX1dfsiAYNMJFEiUaAq3J79L3tM2bUGfVe754V1MedKDhWtKt36mgELHMXTKqQN",
  "key4": "63Hfveq47ib84UF21PNntEzkyB195eN9XKJvGkYq6xEGxcbosFuaukc1ZMAWi7y4ARRRhj8vnsi6vg5XSxnxdDBg",
  "key5": "28radEYJWc74SvdJxPo1wzgzVVxQqCEkEPeCSP5SQUzWdqnZ4V7SLzJshzVBEezHppcRF2nKfkVNeBjrzzpZ2stp",
  "key6": "4vx9htzZ2psTyFKGGYx7pQ8i96GYSXDdxkqM87ny4YcwXUznNswG3VVswQzqtQo6bzKNryZ68348juwstbuvRb8S",
  "key7": "3FFgsmXoDdsPjph9X1uaGeZaFiHiSrL69HKbVQA1azj88523TZwavpnF7oXVFAMBagQ1aZPoSJqkwTq2s6uQZ5My",
  "key8": "3HUjQnuxpqyFopvGvAnHewp8NxiwoQxgpMZnxw7zbBUQsnZpPE56QUFpHm4xutJShoFaFQbJz2NxzbMWzcDKuKsx",
  "key9": "3TEZ3DsAqvEyyoQfU8A7tkRwGa6x67gvLdoEuPrkDbAVjk3xc9DQ323BaUErAik4sMGLSr9xNkXBYaQYYvDp3Fhg",
  "key10": "4wtBLZqtmTkEaD8RkZi9a8F2yLfBpvLtXWmTaYQ3zBdiw8pQb2MTdfufgYj4BK1sbVZv25DnhURhs7L6P6ZEaBjs",
  "key11": "dZxHWsKpgenasoR7WFrambb2RZtERvSAPadZHdX82LtqsbooEttTHmwWWH9mLttvFj7Epq9pKrL6dM9NBSG5vWy",
  "key12": "3t5GuvkbocbwsgcnSp378bYGKRXvNCk6sGnT5MjYpLT76KFpSv9x1bS8rj5ptizVgh3BJr2umeGAckUiHXHoC69N",
  "key13": "43YoPj7RMuNkjsXCAy8qt34sbhrzxLHfrAHyvi69nZ2A5j3vgK7QZVcWKLd6eKTCBWsgkVyE7hXtCncMgoJjamKH",
  "key14": "5Pqt2sX4MaJRFqTL4vWbjKjnZFtv63N8ANr85jxoB9TwP8QiLdfRH2LnqJC43HfN5PwKzrqCU2P2mUNuJLDgmTVH",
  "key15": "27QAEZufs5J7PbsMgAjaCvSUhJDtvZxNN9rjuNBX5CR3nv5AkqFBmHAV3hAGNkVHQi2Z36pUK7NhRk8vG9r9JEww",
  "key16": "24EbtvB85qdYTv63CDqx4hm5MY6uxt4xJv6BCZFBMxCmUn6wQRTCnNToCuT1x8dJ3uY8WTynfR7MtgFCULuwMrDE",
  "key17": "36Ds4k9TTdQV5AqAxYLSqb9cGdNS8XKjb71N9pqqCQ5LwdiPRVpNrwiXhiBpCp2MwBDWQvEaa1Z1sWWGxhXErHoT",
  "key18": "49cNbSb3iSpgDhDFD5gVd7XTgjqjNGVfVHwVeDamHQQMaJmzRqwwetYLXMKRN3kbEPfGhb9CpjRWuaC6t3Wp8Zc6",
  "key19": "Ww6MVRbDEAzvjiqaEiwrcjRcVo7G5xYYSSgguq8b4TVKPxcdWMiFYbcuZVsstaHJ6WdgroeSza6bnWHsT6BjV7G",
  "key20": "5iJENVQpW5vpiVeL6hKL39VdrFULcQuDZquW67MPw3z9CPznAoHdqJUnMBXJrYsDJczf6hEAToSLwq4MCcREPe4u",
  "key21": "2QY5XbM1fXzB1mdSUfWyFtJKgkDGyS9762jmJujzexKFAjGV1vCLoPK23ofztuWvYa6QMSw5LBRqwJjCgv8gyfSY",
  "key22": "2qAqsTrJzoRdKi9Dc5uRPopYnpCgUuNEv7afUYX28CoUSAENSPrLhygGSzUGfDYicTMTQGCzqh1ffNn4ZVAbeLMZ",
  "key23": "5qAbc8q7wPzNdTGP5SSon9YsSyKdCcCrUcUrUK7bvAwXgqRpXMTgFsthhjFzkaxRtmwv8z7Cyh9GV1J5v6XbtkPD",
  "key24": "4f2sH3ybeptEkxkbaLpQYM4Mf9Fa4Nh5GB67HAXxEuhQMdwWePafh9N482Bq6Fy7yhtJeqyY7xe6oDA3Fg2oipm8",
  "key25": "2XXDaKhzQQ2it6ZqjJ8187WDmjx3PimNtBScVtQtjyPVrR3N6o5eVR6s4VSfqYZ2n2QTeDyAP1H2o69Qw69UGDFT",
  "key26": "4vhUrGvxtCH69u3KHAo9T1TDDCDtJgqKSBPqt7JZgQUHUqgbPPET8UijHdCciA5VkxhEjzrjxr9Akf9pgsBoWRgg",
  "key27": "5fdt5fvj6fLRrBvaFXzGyMdhcxvsCsKQQFvK8BJdtZqtjQn5dMpBUguKCCug6o7k8HWgzfN7R21xwz7DfZHviMoR",
  "key28": "4thXuHnrUVe7AAXFwmmDYicDDYKiacUd9W5addhLT6gf874qXZA7zBUK9pVm2WsKzk8qoBnrHJ526JQW1KrCSGUU",
  "key29": "3Vni5bDCDH1azTF3iKSYx2jLhP2fMFsMDbUwfqTj31QhnRbhLcuHXVtrb8YEGc6ZBgCwH86bnte6zxoCvB455AAf",
  "key30": "2S4VgR2kF6u5sNE5WeqsiQT7Qa2hCPri1uPUesZ13doHwUqDvrqtEWj5EXCu3ngK3KEQQTwzV6r7dBV3XNJDDXzt"
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
