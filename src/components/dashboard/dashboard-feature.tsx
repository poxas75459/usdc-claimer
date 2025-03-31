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
    "3wKpK8BwC7Jqjvh8wQgAjpzJ69DDoCywJ5cvkhyPJsmZKdPy2pwyDFuvrd39GrJMjSoNZ5X4NFTgDYYkXNSeGSK5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "f83RzAV6AntW4Sd2aMeHa94ZQ9uT4DA4e6bzCBy4kJroZ2fFPGHdAkN98uqoQcG7xCPUT2rNNMBQQ6Ao9GUVdqF",
  "key1": "53Rqa6hEntu2BX7G7Yrympyhj8YvkXtLrKwbrSsystmL9fCwbPje8m5CHZSQjZuPvotz45TowVVPdxNCvANMh7HU",
  "key2": "MVSzznNaGqUPAPtsaWAoR82SociyiaExtiBdqBaTjsKMKnNucU7jcEgq1VYSFhuK8iZSabHULBqc7xnJfSSJnKv",
  "key3": "3Bjy9QvJPzPrnCFMmfoe6QGeheuECzuj65twbvQ1yXpNwcqyBzLCxmK1bHBxJmqtjGWFnWtKibny7qontrYnueU3",
  "key4": "5KdSqo6igeTmUxT3Z35kSQUaPWsnkiHAyaEPF1qSTm8i84SHZJfJnbCGUa92ausEs71uq3qYoi3ZZzfKBd2yG6vh",
  "key5": "2VLfpTK29zsvS6EHEw5EHRHKQZPRBSDJsYMyFRiPrztwxVYbbwjSgXBB8JTUQDsxu2o24bbTocsAy2CgnR9xqfJA",
  "key6": "BS6hGSsboJqLPg8YB4DidwXvky3q3YdVPmxifQqWmrv3L6s9B5KwwYyTBJfjB5D9Pe69WBZb1vtSzQ6SUEPQCNr",
  "key7": "3SznyoaSVbUVsqDkcJLDDrth5pgqgUE8EndQif9MuUsVhuXeB8Lmf8S8BewdEoa9KVBr4BjjjWuFgc8GRPoga4vj",
  "key8": "2TSpheYD9fBAeJLtUgx1BTK6ZUSKksJPNUjMeQ13e2Be7NLxTbQuhqngZA7tYeRxYPshK948RktsJiyc5PGTA4Gw",
  "key9": "2hDpqXETy6Krw2ceZSUELkFBHiekUKY5o2QQ1uaEgQdJBHBsCiNgGkKJVcqKf6d6vQFkgLjwV1ErxjKf4Rj5aqs7",
  "key10": "3cMTF4K6sFzRtPWq2iTjtZqyckJSeJntDqgiMobxkhr5HinHU7xSTUSwGoaFFHHgoBHbjKaJW4pBoepPSD6ejXR8",
  "key11": "4p8gpZoa2YR1vE6EahLys37CX8JThyQJM6zoCzgqfDSmWw8CzfGUji9drt3NhiyRmEgNvX6JEAyjYgmfmr4BiuiF",
  "key12": "KJqrq76vGQjX5i2EcgzzFL4dJsqE7jQNqj5Rq4rTRoNZPDLZr4gr4MkqJaDhrB4JjtSqwEf9g6uUhg6w9TMihSu",
  "key13": "4AkfJL51T4g5Gk8sDfF4dHJdGbydMX8tRXWzLRZVQrnLKHuvMygH38Y8fya9ZNmtxVEvqFoWqLziiMvx1FzwFmCM",
  "key14": "5Jzc5or3fZ8XERwy63oZ7KZb4VUUE2fdvoej4SovEPUuKQyrXze5kDSDgxVNoXDbZ71GLyMJQXGr8UJCYUA1Vspd",
  "key15": "4HXArMAwCRoughmAkM4Kudbyc7ctG4tm8xVmSrRYam45vzCyYRLoLeDA5GQymidh3UvEeS6hgN9FDeSEnLqzaZKa",
  "key16": "5XBZwsSnRCSeyKSw7S59Y7Wnvt9oEZjRzHFnzc5Hy2uhfiYurqxLKaJhJPhULpCvnyvm5KWYJqmua43WiekbVoKv",
  "key17": "7T9T5AwhQVcbXY4rkrR5SUUEezYXni2ArJTUUXRpy7ptCvvmUwSCYhwckP1rwdsFoW8ttE4PCBV6vXoCNXLXrWR",
  "key18": "37M43dojufXVc7yezm4A1H5VKNvQDisUeF9avJqrH3UxJZeXa6iSzMqWRQm8va1926YhnfQ2BjAkovkMGzbZrtwc",
  "key19": "EhtDwsXuyDaMJuD2tgvE2ou6KGKLGtK4XqgTY9Zp1nbCe1vnhuNPbBeFpsm4KdF6bx1wvsJTfjQ53wGL6AfNe8L",
  "key20": "3x511VGjtNAwTWNme6qRmNYVzqXiqyx4e1GMzVibL4uVLiTqWc4TU9kv8Jfu65KWwwE7rZFkW7M4jdWbmp9r8ysi",
  "key21": "21rNBpX6ZcycxHMBeFrLnnrNCY2KdVasH7cTG62tAF1k4nc9irkuVT1D7T8EzGyLmEfqViD2Eqi6Rrv6HVtkqByX",
  "key22": "65BbwxL47nT9tTwjcmhDog7QRCBDZgHWS6NpW2HtAZrZwARmRUcNYkBWGrmjd9ahxjK4GySLjH1syqkq3c7D27wo",
  "key23": "3PhS62vcuRjHnKkPyosnaUv63CYxrg6u7o9GFvaRKQimRPcWitGm8fVcxUg8DrxKjM8vdzcfRANiCQt8nGBdsX8x",
  "key24": "3hd9peNNSMPrHSPXiEGTPjDngGsAw3UU1hnhQFHYyjjm1CUGQ5et1DyY7UVvYeJ3KUsWkk3epbHLeCBvHaNoxccj",
  "key25": "4bjD2U7FZezHYteUY6zV7sqE6sST3bh1TWRiFLVR9W6qY6fdw9KS9Eq1q5m4gNYTjQCidLMX88uj3Vo44Qn4ncSQ",
  "key26": "2wUy1hmWtHVcQaxuUqj3MaTML3fqjkicRdemNhX8ojhH89hJr5p7iPUvccHrrDRSG3nY8CkXkCQviD49e6Vz2ryq",
  "key27": "63ZMkckAQtPmRm7zfy2PbwQhHC9QdcPpbziXbG4nqK4DhZ9X8Sqvt9W75wsqEKkV7KWhSFjm2K81msRTnx8xbbNN",
  "key28": "3JhyTvPfcBioegZkPvcgDD2xV5BeNpAfKypw5NaQDHeFbDivHFcitEky3FqfMJKQjWoVTtEqSXGsX6MYmApSsTy8",
  "key29": "61khJJQFLot2RqszQN556mm8QaUQeHRbHE5WnppKiQ5T2VF9MqwxYi3YHQtG6Wcy71gNHzsA4C9judu4zCscdQXw",
  "key30": "5WBhHv6H9trqkgT9GEW71dfdk6t9k7qyJESBN4SFxR2Mb8BrQJPP4oZiWCjTK7pPDBLssFmxQ3wZhfYZmXUbUUzG",
  "key31": "5rJWM1QqWRdDwqWrStVoSv5mxh67mFYPFmbf5QiBymMjd3xZXDFueYoQsMYCZZVZnh3SeUFDjSxZiawiQ5Vtj4pU",
  "key32": "fRwS5kiRiG5mmGmGM3u6DvSFYzPJYohd5YSegytRtkUFKy57AWa1vMN5Eqrc4wBU92keef6Vn31pJ4DK1SmQbTt",
  "key33": "5MbJPfehQZ8DKHA5WkwBXzoNkDR7Jm7XaSGSfsfns9jHHLNwe32vPvrVWPq2K5eFHb6q5ojC8hxuCrX7bmv4LyDq",
  "key34": "5oEvuobfJjCg8hdE8YiJ4EHC7EvQD5cTREAi8AabXGFpE5LcnCdi1kX2KnboYzuBSMEvoREhMkYdPQBiwYD1RNrF",
  "key35": "5nPSfY1trWWDe4f92qXfnFFrgM3dz88F9xuNTbxHJvH3gGi5EYhXUVG79mvmEqwAZrzFxENMXc6h6nHsK1MtXvg1",
  "key36": "3q4SuZrdg25SmmPJ4xb4vPPfEbB3rpaG96XvAn9EUcuiG9jQjuEDVEbvNU5Ds2va9HhFtMpS1qCRSXhFV4E8FpBv",
  "key37": "5391iemXsgBrTAo8zcYTFw7mBH4KEwEf2PxQ2CTwFVZpJBFZsXHmk8CtBpzTYtHn3Nhaw5FqrQbL12SEfrbUiXgN"
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
