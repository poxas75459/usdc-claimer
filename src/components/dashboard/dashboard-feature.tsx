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
    "ycGRspDLxEGgDoaDg6FiXY5LKBcmRKcj6Qj5D57FNgQftguyYLUhJWmYoLZjq1kHXtT9ozfJNv2YQFHN1JHr2og"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dWLfwLs21YCBrLpZ6X9qBiKFQaBbBarGraA3Huj9oKqQD9munYND8bve35zFDeFhXYvTzjR5Tcga1SBESz6yiLL",
  "key1": "2YLTQEbJdvkL6uVjuyJvkiy5SivPMYzMTAMakFfCSe9VJ8bsd5FTRQ7UDkZWdoVAaFy4gqdZehe6ATUAdhCuhxpM",
  "key2": "5q2FB4qTGgiAX25DVm4FPk2Wqiodox4zkM1YdLJYzsF6GP26hsH3sf2mvFKnLpbqyJVG6i2MfCTYS7CXoMzWEbBv",
  "key3": "tD3Nz5wGwUBve8454Q4ihjoRGHdjhRQb48zb7ZJYVxgEi4jGTfHcpv57kgzfk8KKjgqzmwuLRWur1n3fxtxgTf5",
  "key4": "4i2gmYyRqcaC3EexWraj5kDa7Le6U3YZvgUxhDwBNYn35XMuGxPWFfg9Fd8EGJ611yTC4F65KMC2J63jhr8Tq9Vp",
  "key5": "4Med6wgKSvqnaJcmbzYfEDXEU83CoUStBrzcbYdCquB4wGztzVMUm7t3mzBGuCk97jvNXxM1yvp8PxqXvj2hUeJJ",
  "key6": "4YPYZo113LXEm8wTk9M71KbRnH7Yxt5Gik7XY2uEhqDWre2jCSgGBPCgGobSQtMq3VYaNoFZM6HNRHKwgnUFcAVb",
  "key7": "CjYuDLBhvUomfJfckSJQt5adNMzgUYnAiFNehhVsPZa9E7Sz75HK6hKnXNWHrBrRS9gTx7C2rKbBiPYrgf6KxG7",
  "key8": "4r1fPKnkRb1H6sEjpyGTn8ZhE1dxMCxJqRJEcJFkfnrcXKPmf4jesckBdMigmo5br1yKdgw916L6ZynmrwBLodgK",
  "key9": "3t3fEE29FV3bCNP8xfZgBYzBXb1fwfDo7CukqoVcinuUDu6RrPEuNt5HJU5EkHQZL1kH7wZgqhzPoM32jASi6zMc",
  "key10": "35tTyLeK46Q9FNVdFzueHNvyKFqezxiULCZ6k1jKuThh1ejc5Z9NuXQJmtg6Q7U6LAXeSpmXKLLzUbQv72rui7Uy",
  "key11": "5nNE5BXE6NjLgbLcBQvaYwD8EaxDzVPumeSSTFdDLGytr8bjKSofEscfv5pbMoaqnSSLThY1pM8iqdZLpiK6V2gL",
  "key12": "3bPdh1zwT9PvRSQycsXh1TzzKx9CU4MBKXxceqMN9srzneYn3voohAgJngi1rViRUpusn7ANdajf1BRPsPkJ3xbS",
  "key13": "2sDA29FQ4p4bRkRJr4686iToF9aUXhmxTrsUkxXQCe6pV83TnA1vy4KA6M5yq66GKoHJsa2j7yzwovJKGFZbmN94",
  "key14": "5JjART7adXPEesNiFTBp2FpZhXKvTd9Yuyhf2sY7BCeVdznQL6CCfXjabaMFpLEypmpUkXoHzKA263Xd8TPAyGvr",
  "key15": "2N8wg1CAadF7bPgxzot5Hr3r67se1AACFRruJkHsW29rjrw7b12vuKpiHjex3yCo39NMwCtAfWcBaCrHXntYmyHt",
  "key16": "4ForiiK4JRrHNLL774Zw6aqGN7g46dGcnoLAPYt9wwzUj8VK8dprAm3Ye1jYvn1E6o2jqWh8DGPbn95xwT9PpDSu",
  "key17": "5xfLoCxmJtwSwNhRuZbiwHgM7LX9CRBgL6Q8BnuMgCZw4zMaehqrWH15WfUpbDyWNM6wXa2sDJGzaw9wE1gnscyC",
  "key18": "2atPnixiHbWrpFMVJyMLPHA1uH1Gjv3ni1Unm6NrRa1hFSxTPievAn6LYiP3QUjMR7A5KA7WFGXU5CxJSq9tJauc",
  "key19": "5qFioso4iXXXAFTAaVKPXHFXechzgMphSpH1LEHmADbHRKu87QFCNpf9dax9TgSN3fiLAhJzxiFtwXsVTa7fVkJ9",
  "key20": "2j4HTNecADgFTQXAkx7WJTJ4yoi2HKGGwa2pEBYKTM3BGupD8gkut9vLtMwgFrQf4kZguh51R7kGsFwQxbMSvNwY",
  "key21": "4eQP1tKXeGJKoprbX7SgtV6stSxTBdMJoCG2SSrgmCfgoGXAdsuPDiSMEyyWn4pS6j1gDx2kuwkp7BZ6WHU6wagM",
  "key22": "4Vuhj7JzcfacqGKpHrQ9DjJKnTjVaNsTWeRFYqxjdrg2xEQJ22k2pP5R33d2FYqbzye5ETVxhYCDHU22pSgV2RyV",
  "key23": "2nbbUR9kzTBLu6dCdpwfbS19ZDxVgQHa6CQiyv34zehcsWTRf9Dxia4Lpqfbr57zLmnmRnWmJj5tvrFZBNERY8Sa",
  "key24": "5J9t6ZXd6zUnuVXcZ7ht1QPiKJaWUNWigRrcRkhht45iw27EAaVBcSispb8ucRG14wM8KWzuBz2Mh46ajhAt3wvy",
  "key25": "4sfLA3ZFcdvok4KXWQhHqH3sWW7j1bai5pWjSudt2cwoZJ5tLC2UNwDLNkpqePerKux3EuDgWGWByD8AUrdLHqHf",
  "key26": "NsYARKwuoLD5QeXrJuHvfV5zNcwheHwXbe9Zr1FiLoNgTG46SHAyXmiYuBwSXGiyHfLerVfXntfFegLBoSbpCDY"
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
