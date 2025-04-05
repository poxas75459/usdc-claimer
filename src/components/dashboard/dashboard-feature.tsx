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
    "31ED1JTzqWs8dvcw47UjDhqtKgYoFXrmkjwitBNmMe2eLdaa4HFZbGVeTNtKPWnjSXpdF12FZAL51fKiApcmDY8d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SYtNMZwzdpF2CH671yX7xLdDt4xL6LfPaC2QxaugB3EU7jsbymrGXwXk91sAzEmYgC9RqgQiH2zMk6u5VbkLwoj",
  "key1": "2zS2EVmcC1k3x5wLdx8kw5v3Mu5RZccer8Gmdd87ZEHGhkKuziZNJhvAygBJnuJeb8hVFBdkcLvpE8sgDLfZMETy",
  "key2": "4T6VWyMQnsXyXRLsRon35zQ8nMZTSCbduDBPz41Ycw69wDLNQdm8ieLAyt2tb7BwkWKRWoS6CzcgGuJ3Qie7EbYP",
  "key3": "31pRKGL7Td68X2q9M5wAEX5Y1eTSQmPj5prfCUus7e4YB6o7tkPNaz9tXrSi2gHHxBH9JMrfvJsPikJHAEQQMVSv",
  "key4": "4cHPEECdtkX8nPr4xAUhjwznA3QsQBv38NgReuNo4bVobPRvuRJYTao4g68J5pquEz5UFWnEritBHumHXP1edENC",
  "key5": "5pCj911pJMDDzdJHcnhoe7fmBiXaU5CzcopfEyWhP1A8psEpi8LEasUmAmRM145H9kUUpFGuaKVfJ9aZhwYz6JMe",
  "key6": "5aVDYZM1CXcFmaLqhDMEy9WvvUSYbMqcrNzY51efs233ebauzhTbKaG89WQ3AeFbnrEAm76pLuJrLxgBmikaBzBn",
  "key7": "5JYMQDspj7LR1NNUdHpZUeei9MYpxYhidj7Fkqk9FeZMSoVtQ9vFYjn8HXJUC2KtjGXznXyLYbVNiKU1croueaLL",
  "key8": "3Wgk8PotbFthYpeGUCBo81RFdcvibLQVMijYLNt1NYdxin6JfRRorDNqC4qRYXm3KvvvhebVUaz5zu6LP3jcBgJ",
  "key9": "2Cs8jJPAS7b3EsoEndFDtHwEjcw3nsbx5yLUg9tCeT3TaQ4K2cFndcu3CGuchyFCr3vuqpba1kbeVFYr6qMCsJ6m",
  "key10": "2Z9qLAeQDdeEayxPTNvjniMnagxW7ouZQiawy2Yz1AYK3q9oekwuggWtZ6NcUQYQscfVMUhA9cqseeW2xoLEZSWN",
  "key11": "2scww3gWQsD9mwnpMgUG7yFtrUBU2yvL1QVtG6VBkeZu4bBBLP2FB6AZjtsrX29mSbUgs8ar5Sg4qrH6ZMRn8xCb",
  "key12": "wjVQ7rhSxswhLA4ZMmgCZs2SjksqwM8zTUAWQu5jnfCDaPHzvuazj87BmWeYNWTQznru7wVJDdwSVo5BLArQw6c",
  "key13": "CnPohHU9pjdNxsmkRACYSF5mbjBDYpC3c7qK9rvVvMRLBvML88DjqADKdWmcoL2uK6FoGW4Q4MMJjBu366b4VhP",
  "key14": "2K3yde7mHgd3aeyZ5iRfSSE6LvYRigsPn3YnLACNhsQD3A1eFUGByaXgi5bMbWM3QRQobdTUfhERkk5WFco1Q1to",
  "key15": "3DeyNzFJHmnHaGxhxBbiDRJ5gF54ktfVT4jcWWG89kV5Pu64ny2Y3iTDTVgSk2E3ZFM4Es7fY6qjgNFJjmkP2qmg",
  "key16": "52TV7P1AW6Ktc2MjSxXYCLjDzJTjBWqADHJzLokrgS3qw8TgzcXnPpyeciZdywenExmwjF3ZWTaRZ9CMtW753Nq8",
  "key17": "QoRCuqMJoTtRCyvHhhQXfbHiQqqGqrbjWmiBoKAZqB1ZyYC7K46xDH2xbkJ7cPxcUkvXVtTpEfbFY9C9VaRNUCp",
  "key18": "58az5WARBxow4GXPGpC139p1M1JMRi4EZF9K3EKK3sRQP7QfqJ5cbiLDeVwod4AQCffLegTmzKkCcyBwwTh69TT4",
  "key19": "4h2eRhBHr92mVK4V1xxv1xpzQgDgMCAKvGsJgALvzkv2JkmR9qnxmXukyNA8GKrpVrFCJ6jgq9W9PGbfVJF7dQsn",
  "key20": "2khcJ9JsQYYCYxuHokcbHhfo51NFPZKNKuQKniTJi5UA1suV5ojYFVide3xQGqjUcLE5WJ8PPN2ViBLEVM4tTUyV",
  "key21": "5Qdgp2AUu6ot6wukh7kkF6566Y75Jj2eBLj1q2Qw98X1XZ4kUVVrXaTUZNpuSCA5w6gYsYbwf5Hn7k11zyk62rmd",
  "key22": "47vy2QPZuwStrmeBpw2Q92wJQr8imcRFZqnD2vKHCqKKNtCnJyiTsQb6Dsuj5pD1feCWb5TbGmp3xaW6H84WTPrb",
  "key23": "5g3d2zaumKvRrLwzad4fxAzt5gSr7gjs58gutbG8JYsyyKq3s4QfiF3qxbcDA5LS2KEq3aJFsPyyLveM4hEydfTe",
  "key24": "4UyAVHpU1tSLpUqKwtHpH2Kamb9zzmnYKPwAj9cnyDaCSQNRoCJX9uGz6kXXTGBXFUf2zYBSzpwrnF6wSM94jK5H",
  "key25": "27tjyoTgnPeH8Xr9B44TSZq1ytFVL8i7DztfmSZuyAuinWBjLid84BY6F8MXNdSpDALpRFokFJxZaxXnwZ6kp4VJ",
  "key26": "umMtBdVGHspSF23ojHiF3dkFP5PvQE3zdHdBkvG4LqRBSm8KMCx5R3a9RkD9cS1BytVhfA4WvXxbWA4hHrQEfys",
  "key27": "AfdcydS3vX27FK48opibhHx7XnZzaf6ZaT5pVoaaQUuNzA5iVfwYevwoASGecEmL9zrVJeWLRHaGbXGFVS9c6ot",
  "key28": "5xthTqRcuF6fPTHsLh8efWmXYjbHdVvTojVSMWiC2qtTVL8HU7TAre5Ly56Xr5kgBkom9crMQmqZB73jT8x9b2ah",
  "key29": "2SyJUe3RPXGhqyWgRATVAm3vGunyMo76DkA3XLos4sC6NJYzbTZe1Nc4WgFGveyRfb3YqpLSmy2wDj4iQ4hXTmax",
  "key30": "5usQ9cAw5bvJmRQgAphhFbGrsCDweDCieKTLUy3MEJxB8oygpa121pDoDCpz7m95QtidRTP8sk6GfwZKrcnX6qJt",
  "key31": "2RT3UmNYbGCzms9tfW5rBn6bwfsy2zAzoeo6fNeMufRHMHnjv7vz8hroCk8DchJL4dxE1wD5VDFufUkYABKcguY8",
  "key32": "4MnaEabR6KMBkkNcXGYcfuAf7tK6JhDwLJ6mNzrR17C7LYxrPjYeGZ9wDaU2Zeho7SHwjLahVPvcP9RZe7bH8FiC",
  "key33": "4fBZyiuTd87XNbvcBSmUesgj31WvtQDWRqtrehLkhB7YKQzPzxJesrChrA33DETntxrwm4Z4bzAHMHWuGBBevuhr",
  "key34": "2tZYn2997WvRMKDrdsgy4yreCfRKpSxfQXjXLCuwCnU7hXPMyMteGEZxN1bFUR1VUxMzsPFRnKtxKGgyuCZKFgbB",
  "key35": "4oYbzX6FSph3kbh6pJBjVVQJF7yVV9tKgUGqJusR9ohYmpPzLcnGnAqpFTJ7HxANFRqoVsZ5Rra5PQZ3scqwQJAX",
  "key36": "4dcjAzjq35ih2QjvVrHzXgVzD7sXLmyDnhcpUFE2Ks265GCPAY7C2GXneZ9C9yi8CkDsLfcCPUosyeAbhdbZ6q5P",
  "key37": "5qvnkjts1bD7QCcKGVd7SMwzU2LafToMrHDpUWgoqRqLPpapcG22sH69Pr4v1emPj9EZQaf1ViAZfDoAfAM6VmzB"
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
