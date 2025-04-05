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
    "4Ajvh7Q8aLN6r1xU5FQPyUpEZ6SNwfKRx6NxKKxgS5LzB95jHoQiH6BDiLfibsvVjy2KVaR5AWgqCqvoHd2gXGnM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NFP6GGPQuui7ZAktMqGdtaTAcxTi8KUmY8MzBSKNahm4t8RRRPpDSYEvemcsGapfbM3bcE1vEWsXHjKPfEFEWou",
  "key1": "HVCk5bfgT8V9gwUBwqjMJdPkrdKbjNAFvohipPxJZ4mm3FhYkCnGm2dxyaF9bQSvH48fsWCNb2jtkezRoQWDVGt",
  "key2": "3vU83Hvo5b7pHRBN4tZNtVMeUhDdJwr4om5vED3mdfQdZJDRwQP3D1BuPYZcCAmyqb8TNievBXNJPg4FrEeDTJQr",
  "key3": "1SrEjiuRSs6jbdhagyYnhK4teE9nFEecuTnqFkBh2aqFGevSHb2eHhc2331ZALVa6w2z8ek6CVhdTH1Shx8tjSp",
  "key4": "2g4ZTz5oTx5FsNWH3rHT5YdfdrfzNsHRLUiDAmiV4cEVwawxLhvkKpyR7pbK5aEZ6h2vju6BUFnAumbzpZm8LTQS",
  "key5": "4pqFmTC8KvAqiS2MyhtbiKM1V1qGYG88f5DXDH1SGNeeSkXjtPDHCPZHtDPhomkWFrpGfbog9Duc3e7FJKPkYB7S",
  "key6": "456f1WDif1hNqADx4jiPCkqWKMpyZSNx6SyuXZmoPc8sJBgWhPNg2m6rEPsXygiiiWPk3krqQYfFBFpcHmt4tT8i",
  "key7": "5YdNcxk9giuTb6wWeg8z4VfzCMqwHkZjqB5YFN4KWcouQortNytEBZWrxyChK176MYH8cdJXvExADJ6LpkhmTEyL",
  "key8": "2RZgDddJ91JqPbqTQY5VT4MjMp3T8TMp4pnneFQDWCnEqjnzz5PW97LhR6F4hmbur9TkEDQhFr3eFUXgAppVigjw",
  "key9": "33sgmuBQq7C8wz54HBwsn2JtwW21oex5utSPET63GkdxzUscKJJkTNK3a879x4Z5gu1tqFfPSs5AWLetBs3hn9K3",
  "key10": "5ZrKBBKTBWKe2sZS18YWtjrwHMw6d9r519Qv7yS9JTa8jhXwDgkLhrdBgp1skNjFmna8dV9vDdjHee38WDJKepvv",
  "key11": "3r7bLH789qNXD98heJaYmCt1N9yMPSuUc7mTpTkp4nvARoay26JsvzQhrvH8FL9cVbk2rrvQuL4QHzwepCQXUowp",
  "key12": "4dxhzVNVVG3dfrE8X2UHNTzgtXPE8fBpfCys1Y9QQJ4xJewg1MMEL7Y1y5aCiaKZcvUSL2uCaHPz7mDk1o5XRbNB",
  "key13": "5pmWu3cQEn8cLGwuowkaQCA7nmEuPziUkJcZhHNReQ4MEPPBcdnqaMMmJT8RA1aWL42cDKHzK5eLadDWhRFyT8hv",
  "key14": "tAt3EbMyTNsA88Tkp6dK42wymuQRHYeVdvKgZGCEfjb4YmQ7MZz6Hz6hp8GQTTZGHvpKLvmPwXH95xJuYRjgLpk",
  "key15": "4y6HF4MBcSEcw5kmqNs9vjvPBPUxQP7AZKSmfnqJkdqrQfQgj1bDxcnkqpR8g9UuLbHeguwdktvV3wNHxoP7BAQW",
  "key16": "3Tfq28bW8GjtptoZEyc9DpdwRk3uyQXqxXGgEn5tQeKSxkUaPDVwrkgATR9zEEZYJxeXRXTpfdbaXSejxoJEyBy3",
  "key17": "5U377pJYAmXWZy3Sp7Jtgr4gyy7WyfTi5G9aSMA98D8qCX5GZYTGtgYwRUjnyLrPEaMdnNHS5W8eZcnxPia76KyR",
  "key18": "26r5nFpVNkCWETSABZP7afXNHziyjKxm6PWR7HYP9H9fR15MqNZcNok1Z5ASyrWWWW7jv4X9rf35H2uzZ8m3ymDH",
  "key19": "29AZuS5AYqjbHbXMdgnS4b41By5ZwwoHq8Vt7kBnWz5sDhTG4WLevpaWibwU3mjL7QqXqoj9BdV59umjFm9M8kox",
  "key20": "5mMfG1MALqWdZVMUQQ2szYCdk7M7Rt5TWn7PSbx7MRCPr6aPRYMrPpgtxHJEyUKTfpcTbGhmeRTYdDfcB7HejCXq",
  "key21": "z85PgzTrL1H1Jn6q3ojvQAHn8JZkAcwd6Sv5guJvmUi8p6cGdjAcQz8LwvP7QkGkwZ6LBdBXccvRkJMR1pZoaL1",
  "key22": "3NpCVbDQYxWKCbmV7YJ3mbV7VFFJCYjCbdb4Y6WYhL8R5pdAAFLvX7xkReCZeBZjx3Bz7cZXurEApnrEbzUPrc43",
  "key23": "3rLkX9YrsWfJ2qJ5V9aFaubxLRkQ49yL6KWPZTRUU7EV64miU3Fbatm3jMFnVG47cgS8HPCXHPa3VgTv63B4CCxm",
  "key24": "5qYmw7NHZifT2Zw5sAgeNWAAs3WcLSLaTQ7tWDVgqyCqZ1t3QBYHVfwGXnycMDvYrk7A1P2dpoV7wNuqBXM2My78",
  "key25": "51umpqf7uR4n1rFa65XGdZjgQegkM7cvo3icFWAjpj9CzRcxBZNHTyA53L6Sg67ffm5mTLQthEEKzMgNYQ1t8qpE",
  "key26": "qV7StrntAGhwyi4igH2wsWNHVqUbCPHVutxbVL6fPaGyea3162DH4hZ4BknRjKLyNvFDyQKrpUzHZfmwxQox4YQ",
  "key27": "Scq818EBbA7oD8UV5rYEGxfzgzwJcRB8kATHM3GejGGLehMn4jj3KWJXLbPVwBYxaRc8To1XdJUqxCJ8dmx4zD3",
  "key28": "3WTXPrfxPwkYWhY4eXpZ4cL11piEhUxVAXtqmZMPK372qyrCaHdWzvxopwGg5WhQH9WNt9WPSD1MXUNEAEKCzGdt"
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
