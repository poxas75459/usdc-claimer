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
    "ChpCEh2CJwCpzMBDb1egYzZZQLPxqAb7oh9A2C3RFLqwADdtdvomUtrDr9Kzgxe12P2u2fq8i919qwuqJacrA2Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wmpQafLp9NbYnYFTqLnbHNkGB35ZhoMdfKMHbFm4cZTPXFYSjr9j95xSjd7FU9kbudeHT82N8XqisynCy5CmqBL",
  "key1": "5qgJFGuf5n9RhnEMVrvM7oFwo2uPjhx1QfubR8ySESxfvhAmnorwDd2JNqE1zfH7bgHpvZ5YA7AGm9RUgp3ZpfD1",
  "key2": "T1eHaHrvfvSzkvunRG6uRc2rwRa254tg6cwXT37uQqAVfVapawmVFSQnaDq3ZR7h2nLeewKpG7Kc83M3yE8Lo8M",
  "key3": "3Pjd2Aoqw181wwCiABoWskpTuLLR6wxjVyETCCj6e9rKCmXXbomge2yRWDo4k57A5DLx7t3P4HjFujzY2E7FabCy",
  "key4": "5zAvKBQEBB2Vy3YqHozhxFguxF75a7TH4FobF8nSuJbNouZK1sUQ7wzixjnMd4DNNPLargsVoyRRKtTFW9dmMk94",
  "key5": "4oEV57bgwcRe8wLGBAckDiSgj4EhzNh8GSYMJDUwbmdHFHihbi7Jps7KZ32ruHMcASir8sScCT4WGAQ6oZe2kCj1",
  "key6": "5F21MWGQmwFoiXSSTPZL3KGNsZVwBEENag8wqABBfjnhbf3avGhzedRRnnNbiaVHoxLsQfDqkmtXh6RudobtP1Sa",
  "key7": "5p4bXQgEH1sYeQmrBeMrCsHi6s4JfkDvKDUsq9U8wBJKBXtoUcjGJF53VYQg2G2pQewji6LiNcb8bu7wMmWEk8a2",
  "key8": "2ZCgNf1APzDDdmj2Kgmq1nrEU7rHeXgGS81B6bjMxxhfntSr5vXNGf5fdA2CDCLdeEvpVUbzsHUcadHkSzv7DV9F",
  "key9": "5a9juvnV2BvRZELUd3yEk7S8sxosbY5F2oNsW3PNw6ct8rpgdqdMq8Bom2KLJqi3qWsUpc3azhDfABUqNtX8iXw7",
  "key10": "X98GfXzmgsPvELvnPrBS4hGFjN3oMzdurF9LGuqsHX3614yLzzx7vkJzUASoXqiVvtYZzFhxGVR428Ds9tj35JB",
  "key11": "4fhPioMKyiGJqk79GU1ZrfQVj4e5hu6Lg7kszRYFHNvVzca89bd3G7eJwByer2ki7uf7DYFY2UQTC5URNVzLVtTh",
  "key12": "5HuxaQuxH8U2brQoiF6L27sdGJV3899AmKT5YFHokCLfZSWmsJY3n2YjHovSDFZazWBKWv1HpCLCZmaAgRVVTsp",
  "key13": "2kxDrKcn1b1S6LMgeJLgJes2kdyW1C26u2XpZHLH87mWA1WUsZ7WRoe7BFne6asMAgLN9HUmR4TyghBwtpxVk7w1",
  "key14": "2PF9Tj6n3k6MzcDnAsefYW3nRFrmCwUQngR4jE44jAePNoof3HBKmRscsd6Ya4vK2P5uCVHN2KDvS7vwJToV6zPD",
  "key15": "zESdeqFP5MaG7F5jxuoM5uR5LUmz7r1QbT98bxdAecV5CZLdXhZNqRNtdJCseJQJz4KHqWapFqUDbX3RUibsTve",
  "key16": "4YiaVdtPKWX2P6Up8DXYjfJCtCHiJAUtDzmdwox3zTtrEjrJxJ7552pcsgqeNige94FhudEgfSWMDZ3Z6c1jJZmR",
  "key17": "3N2JdVBRmi2oFyvudNRZ4MGTVxQNEqS9Wk6PaAwcMa8AWWNgrHBPzNQe9HNtc6dMSgztAzqnM85UcEzVDaprfQPC",
  "key18": "uEPmpKHfkd5r7iFu8n8Fdjy8qVBuSxUT9tfkz16tHheZ5F2rjk8rzhTS8ju4bDeCMcx9niKCMK2p69g1VHywCXX",
  "key19": "3po9jtj2xUs1bW33e73ZnGACwRX6X8KGnBZqVpbv3Ag4uWE6cwRaVBCbxGf8vxhtaaeck73PvfuKHhscCKTbbbWf",
  "key20": "42rWu7xPsQDbxKW4imHmnq6nFDEAdXFd9Gs1NmCDFijH67D8NETdoVnuJBNM3Lnj1gWePGbus29KmnsmgL7YTBnD",
  "key21": "5zxM72koXqPZQE9QPjqV8xGMWbPcgqW9DkPmQjSSFh9coT2iViKynk6YeGHCfZQVeBNHbaAssrPLYPxwgqx4UayM",
  "key22": "4CnX7kDZkSduDWMGZMKzL8Q1yKzM5kF8JCbSzdCDKh6ZncH9wcqoq5hKXEmftDpKniBwHvbi4jMH133AyTy8ULvH",
  "key23": "5hcDhZSVXZUp5fNLXR55gzSu7sWqWAJTv8SEEvBrPynUUsuDEqdgVWTQwfJh6SeNVhGNnvaxMYJd5VT3zRMzz9FW",
  "key24": "3ErbYEJU6Asq4ogEKj8i5pcL9AVCKUnxFYgSDvxn9nG2rnoBi5ENxaRvKqqhj4Bu3UkwkdjSckD9MBEVgrwDuXoh",
  "key25": "oeLdqzMiKabDcafCVBhCCGT4aGj7ph5xMU2B6i2CJASm86iN3xiiLezDmmoubv4Fibz8aasz55a35Fs72keZgPw",
  "key26": "3S5JMDmQeXAD3jUL6VSzvqhtTZqvrbCVvYEPV41V9fFzmyN8nwoTw47MJyyCaUpbjR4WfNv1XDhXhBC7Z5NDrguF",
  "key27": "4kMynUFWfMZZS3j19N4ksCtFSgFL8YRfrvcs98TNL3ot9PLXhim7fqjas1L6P7uuULVXdj1QDTR4F4PppKthAUrq",
  "key28": "2uuwHWhS9WaB4pBNy3XPZPWp6yDoXpaXvTxzpgALei5EH85e87imP9CRQg1WxBLtzDv753NUTdzjxePNK1WnFdur"
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
