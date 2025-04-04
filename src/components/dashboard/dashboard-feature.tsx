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
    "4QrERuTBzJMRXnFXiZTA6Jp9Nx6sGDxwEHPywiJhWuPN9eEPRCio4v1CCxcWG7QfMjASb52mjqhg4cVa4xjds9rG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XPUxkZjtrG14sXxp3NFcEvP99Rkd4vmykJTeu6EJJ4Td8AvuWSKRd7W74fAEE4tDxQsPuLXaYuRUTG4Yy5inZ8L",
  "key1": "4rFH5VMTyrErfwGV1NarBvsxDUJKTRXPUgjTh2KArARaTBmabuMGg9pCyBLTdNVU5yrRChQJpimPRJ1rkCb9mupk",
  "key2": "51n4itL92dWeHX7rEMXzSub3nTRuY5nsDPxrW3u8DY4BtVuPSe8axknMAJ2P3tUuh4DJLj4w4XB2Ne1DD7pRbyma",
  "key3": "1fmjc9NRNQn18BWya1SdPCF6Ctu9s8zT4N4MrR6TVx6yMCXipSymHWkso11SnuXXNesS4C9gZTKUv2y79jrZaS1",
  "key4": "2JCT2WW8SLT38VULzQLDKsX3vLzqowx7CKArNQg6c2rRMGGmm2CyZcFiZ6mFcqFfGJWAVRnrrVrNL5k8EnkeunUF",
  "key5": "3By3CDdJaJhUu6qc1AXhNAYffz6X7q7sA6gMyKunivJQ3j3QH8uxWZAkiAxBesAe11CaFtDYTPhZfxyvrkX8FDwv",
  "key6": "33LNM5emhRNvy3FtzHozCnCYg3diSuh7ZcKPF5VvfF7P6FdXZnkTbfuqbP1yyZ7DLKSbwHN13jK8CXRESeh8FxXx",
  "key7": "4MgifBMogxFt2bwisywpQ1DctBk9sr2PKLVP2T715z3DnhUDnHht33mfJyGrzqMDC7uhZ18VAQKNkXGJUEkPLBa2",
  "key8": "43YntC6gn1VJCuem6iJAgHCk7wwwptda7N5PpnTrekU8wS6kX9sunceJkJ3QDQfG3cyb5zt1H3tebX5wmbYcfdfo",
  "key9": "4yACRKCFuc9pUQjhLVi4Huk32YTZdybK9Mq7KRCkQNHWEw4KBwBBwWhaaZoiP62DLcRbPmbqnP5wvRufbBUkUfEB",
  "key10": "MuUtpsP28DWv18WtK2bweKNp6TetNnv3JEYxrkFLTA8DSv57jT3EPbKSVxZiWwM1GMy8zcRxxaysQNtZ9JpNLqi",
  "key11": "1PgUAFU1Jjk3Ln2CxxcLsxx4Dv876CmaDf3NUiLCwPddYm64nuvwCDPgMGvL3fdb9GHdRuHDW4hhr11hnF2MjAm",
  "key12": "5HJixehznsRaYTe1Ni9zydoAqkke5EpHGVtypemNn8kRryBus3gwLHXa2uRq1XhsDjHBxNeYtinw7HNU9qVxpSVy",
  "key13": "2JkfYkCrFVrxswyrUvcBdcS7BF3hynNB49sjrWVgJAohobN3mN9dLPSNbzRTdMN9Pq7waLSysjQ9jvRbzeaw1eZ9",
  "key14": "46x7uPkSqZ1VRh59JtQV5WmC3Hz2cFyXcCdLaePKg4eWDT8dKtLGFRX3fntThWs4FtRRKYWsjjno2cErejnGtSp9",
  "key15": "44yn9XCD8daomqznHYTG6vXBmJMqS3axrAZg9AgMyu7DaJDf35a3oTu5FXPk1dzfSqLrAsAe94XbiFaE62ZTQ2WW",
  "key16": "597Uxve6Po7r5eF6WRh2dSWTjyjVWvm7NsNXmB2pMjbmjMteBxnWWpP1HFwRgrvDzBkE64P225Js9ANoSRLbRLe2",
  "key17": "2fyatvgejTtZb6meD7DYPUsuPu7mee8VtKrc8XwgNfnexChmGhvE1y4EsEfJMQ77ZkEC2jgE1GZud4bJ8BUDbY3J",
  "key18": "3zHLAkcox8Y1T7ucFNbfL7uMVJSQZCsXUuQdFgoH61tWzYy7rDE6rfPYcT7x45DVa4M4pKkkY9RhP3r5Q1G1p3sq",
  "key19": "62XxQC54E4GZ6HbEonqqo1hGQuNuvKkjuZN29DaxRQQEdgeBt9DCN1SpzbexnpYNpQSXhQdhSHXThkAjJrRJyHMr",
  "key20": "33jaJmRGeaeeRmGezacmnnBj5Ke5BVx9pCQ5P6AjEmEs26GEiAv9ZeGvZ26DJXb6T3mVL9x2uQbDvBri1zMJeeUb",
  "key21": "4Yp1hpwJ2j2mqvLZco2Q5p6bKz4VhsM7CvnhFECDTmymGWfSdDt7ZxZhwARQcpUZntGMaTeQLun9tCvNBU3TwcCc",
  "key22": "48idsmPe8W4qnLe2fvg9vyUEmTn5Ki2yJGS3ExqznHFboDehTMvhhgRSK8ngv18Azw57bfq3e6vqDrV6Jmzmkp4s",
  "key23": "2Tp6wjKXAq8c8sJV12TRTKbUT2rhR4YuZJoEja5FPXfbzCSndk6MFQULNzxpkdb7vnYGmwuJhwnxzT4G8hmsr8YD",
  "key24": "2VfZTAqK6Te4mcSoq3EH9zE8yE8ScDJgHjY2iCCinnfLNJzDpvbC8Lv2fx8VeKN8hXLze6uZncXfJ9t2NGPCUNsq",
  "key25": "5G9DK2oAycBSEWcD1Dwe6mQbhGoJdqQrvbfT8nWbJoHv6NNkLmCWA5XHQrjTpnbnTJ3BPEbRHPGCo8JzEtkn1CZm",
  "key26": "5bciKppn1by96BsLNU3AAtmpxzA8shxkMT7fhoHgXM74KLJDsm1TRLEGpQVwLqQQneqTGEpPA8oG4W2H7q7RfsTC",
  "key27": "2cfjMTGE6m3xBWw1KxTjYsSn9w9q1QASqdyRHvfxD8xWWqmHTfotRkxZJctdvHg6jVQvVVkWwq3xUw8Y7ng98YCY",
  "key28": "2iwRT8oeFzpE7aDBT9L9dMtucJXQwsCDKhpFNLjUv22LML7RU282MYE84SVFzv3UnyTBJJ1puHAFP5gesoD73X89",
  "key29": "5GNYAT2RuAhvFE1UeAXsV3rTEX1ej7fqniosKqjEAyBptS3TCdizKvszHKL3ht94k4hXkmN6R4cNTpHJoM3gSFJf",
  "key30": "4fpUvqfYCbQjGBLSedGN9jb1uUwZpwYY3qsdSMQLU8ZBXoKjyTz4URF2koUpd2NqA3uEc3NCHAExoL52tihJfutq",
  "key31": "45AMvfRyNhy5VekUmnJtHecJRXHfaP1yErcgj8w3MeCeGo1ajfJnD4ef1tuQPL5i4zvF66Nqznmfko8DR5WzxNgn",
  "key32": "5HyNXAmd5VbkX7ac1env6dDB8Y5m6hUmX3vGCt4kvkjk7FAbsyprWJEqWEJvkNC64MNXHbuJmVVxFp1i2gYrWS47",
  "key33": "2nF6v26GPo5dCsG82E8TSei2tpmYxJTfVNz9o5vu6YMSusWnqyow7BXcnazSZwiimshHfPPHJQg9Jg8pKUZnaGE3",
  "key34": "5A23xL3V8xDbSABX61mxFT1vpQWXBAV1SMNyuNG3rq7r8bLeCrz1mhCoMvrJ1RrvoYZSffXiEsB99QjPy56bgTRV"
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
