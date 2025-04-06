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
    "3N8zUBzuST2Jrv8rBKYAduMwAA6V2YEvuurTgJrdRdwDUuE7ss3DSJTQcBj5CDY9id1eEc1m3YhfxJwbLK8CdZa2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23LimYgo4R2NQKPaP1N1zJ6AF8oZfyBNfMjktrKcfwSFBQcKAMTDfhWkusrCeZ3bhiw1S1ys1ZhrXucUfFYdawTU",
  "key1": "3tAyi5FkcyyErqDhxvVNVw568xyLeizv29HeaKaEUaYonyiaAVe8NfPPY65WuCrYezpohCvPNUuT5xQfcJDTh83Z",
  "key2": "59gi5j1qFofQLs95zuFg86C6pZEQjiXW5SjUH75JzTehGdwamFabJfdJWUVrLeUirELg6S3ZmiWKfjN73WJesDu6",
  "key3": "3wHxiFjtjQvrvzuWWvJVzJ5hcuGsxDmeJiVYw4yNZDWf4PSyFx1fwy6bvPA2zdo5Jjz6c5fauQLBh5HsprBofrPL",
  "key4": "4QU3PovtdKmSZxcq5wbUUdVYZuT84Baw3drZLg3sNysftjTx5NPQcPkPHtfH9Ps533nwyi3UTNc9xXCu7vazzeXo",
  "key5": "mcyf3FzFGzY66CKBucjjJLhFtzzN1afvzwjw4oLhbhDTqhHNhkkTBUMXdYimU1zBsp6sswb3US734DLsvV8XGN8",
  "key6": "2ZpSJuq75KfJhH7vDFWenz4z3Q8FQ9v15Q1kmCocEsjq3Anrt5XaYJp7vMm8Tpc8qUfwsRGNU8zio5ojSagVpZ12",
  "key7": "49W2pZ5MLTrw1iajxvP6PWY4BpKgnVN157ZFJSX9MkZ7LHFuVXwWDD23JgCu8sJHqfonLStSyFv42w3K5b7NZfuT",
  "key8": "38Usgomhukq951WoCvHraTbSZ6xCZ9kms1bCzPHFFfwGKKLgWHAyiZ9TPn3k1jmKRvdqSFFiqGj3EPXAFWvvWpLE",
  "key9": "3n9R7Xha2mKcP5wUmKbZCBXCs8tQeT35c4b7VvKJVtkG5opn43fU6511EPfqiVzfTAvG5pW9aXmwrSSmJenJc14W",
  "key10": "28XpUL6NTVz85LqFwW23p5NeW45LE2YVoR647kqS3F7LGCDaAGwCiQtS6tLDg8LzbKK9HisZjjqR4nBCNnCsNyBm",
  "key11": "Ghe5gaNXH19S6ixhLXhzaQ9DFPH1whTfnkm7ZTsoe9Nej5uTWjCGEmpXJFb6XXeTGL69aXoMNxHgXp5NtUEpNvV",
  "key12": "3rN65gGRzfkWq5nmdxitdxzj81aUmHMC9dCUCER6xV17fDfPum8F4gUKZ8JMUHzJuso4eZBjtWD3mVMRyhLTEQjJ",
  "key13": "2ys9cuh94TMP3TnK19MWnt3wGFz4buQnVvMRRDGBNakGCRz95Qd5rYiuXdA3K2nwQxzxE9Q3DweRK1xo6D6yUyC6",
  "key14": "4gkD9bCkyp5CbvfNXix23ndTz59EFSiKkwKECLTMhw8ynguKSySvgi24y5n9KDqmqaiwkvvEWUrzkc53jJTzTYBs",
  "key15": "4meqDhhasQECEvzWMGVyioTPXrgzUNLG25mMfvayBqUjGHknBR4gQ3BBSCLzbhr1urGtNkhYfpDin6UY2LVxUu2W",
  "key16": "4HjM7Qsfok9RJ1y9KFoGC6EJpS8BNFnm4JrVPyax8URzudC5z8vVYoqdk5ojkM1idKmxd1KMPm4eofcwUKEkAnbv",
  "key17": "3JmDq3KduxoQ9KmorHSzHqCnaBYntsJsbcEYbJs7X8BdWUjpQ12BTfNqgiWm7x9hPF7mCMR8LAkv9SoZ4hJ4XtS",
  "key18": "3MeEEvcGoYPeHHQ5wceENA28LzYjZRfQoqE31gtMe5gcmDF3vm7fztyZVqdA5GdAkrkfwsj2BHLbGEfokbfaLpac",
  "key19": "4LR3pEnUkjg5unSiaSj1cVk3M5TeN3d6M91Q9FHQVqiq8QMFkgF9SNZP6PJ3UebJ4hCsfDc4GLHUGqZmf3nS9RPi",
  "key20": "5KKVPp5KidchW4eiYqvYNtKrbrxEHquwfhipE8KjX4zGZYixyTwy8m1LuNgBCa7RiFJU8x4gftioKtmPQVpm69xE",
  "key21": "4ZLYRp1NKzEEtSfZpiPkvN6rvBCZkEurCFNtzcLXPDfUmGNaMgMtneTmG6nJEhkJg8HiUXf2CeV5JtPgYTctXt5u",
  "key22": "gGw5ifL3Dsr142ryuvdizCM99G7EtUWGnZCXE9HkMabRVK9XTW4sQvhqogmDMVp3B6KBLcUixEnJraE1ZVv7RjV",
  "key23": "37j6tVLDeNicxpTLbbGfnkWAD4ToserJoKJqLVw9oeJxYxttqFWr2dz12hiyM9MVEqBVi1MxrZaABv9NZYTcvrBi",
  "key24": "2hKNMumDwRDM2xbiMCwFDQDF2jUyfMBztwWXVKxnzmVZPUFNr8YaoQAh4zcJ7Y3nXP7GZg5LdHFWvfbn1WUmZbKb",
  "key25": "3q3NWy8TERgD16biWXFkiECxzKpU89ieK5etLsJa9P4oVrU2rnmJ5NvwrLJU4nddMm6KQhNtR1bMwyH5TyWep1oJ",
  "key26": "66RToJ5JiuJTZgBctbcZp3gVQBNAENF6ebJa1CGeByLeKnaLkHucSb7KwDfPHNm5Wze4VAZS5Mh5g8obshYd1J7s",
  "key27": "49fjsZk3NKhtfDkPCtekeyfZqSTtHWupdLh8rKETUT8ottt6MKooiFpvtpmsgAwr4BDjiUwhp7tVhQUve3jbPcn2",
  "key28": "dRWr78i8CZdsyzCfbukT8hCG55kaR9uDjnb5ZeiaCgKw5nRCqxxfCjyx6EZHqAUWgbKr3LZ6NBjaf5pjoZ6YDPC",
  "key29": "27S1PNJM23PVQv6w2GBsxmUm2u3wfqtCsRJQbmM7JnVX2szKufgnVzHo1Dcg2cred3Lq4q3UVjKaG2kXUzVsEhWe",
  "key30": "2vShGwCJorm74DzaP9TEwwRpdZLD9tDFbKMRhGC24jKC7G4BFj7PWpQpzqJcmaMTeYZy5QNNa5DSqCdBvM7RStoQ",
  "key31": "psb5V3J6wFy94sUavBwUd3c9SZ76QEZDUY5XzSprcPSw4KveywQQckskaYNf9WJaJmzTRaEy5MuUFgUPFT5wDZH",
  "key32": "3nDZQCmC4SeJiQbdKBNU5cZmwso7Cma73SMLE6vQTydUQrzxYNSPTT8ryKx6QFRUyyrJAWS1LgMvLkeq5Yv18sMN",
  "key33": "2ZJ3UGc5FzDsUg6F32nyTuw56jGLrh71tVMWqxEduRgkH5suihVM7pDFYWoX18qXPUJjVJSGXc9HqpJmoEVhcRft",
  "key34": "3w71jLtdeTfjVfzyQ67GziSECsaPsbjyvtTvgKFVMEjWSnMi4oVRS6jyJaDL1tcrEKddr7UtKdb9gMWMY2NRLndC",
  "key35": "3dLFMw9QK7mUb5uU4arTT1YLLrsQNXK4cm59SK8z8N3Li9c5nE9vVb887KwphqvYMiFccq7wUSCXbF12pLtUxYdC",
  "key36": "4wPnth1axAk6UBXm9h3HGiqxs9kaia5dXvYUqFPDqdRGjWj6uhX6tmr4VCaZ6b84A8Tbh8pLNZGsokYawgXHN573",
  "key37": "4wTKWLzQd8SEN9QqMY7jhrWsW7jDGU3AUSYXWgD1Hmjk2dpME9eUTasc1L1GSYCK1rBMtdVawsoKC3zG7XKEMfs2",
  "key38": "p6DSfEiDLMg5XvyeUc9ViZy2aCZHkM87TUokdDZ28zRriGS6MQpahT7mNTtzsvvN8eg5n54SEzsDJKB7QyJsgPs",
  "key39": "3LR6wbyUrszkuatw7YNiFAMNWfZZ6rnSY6kHDm6z4dwm3r5xAwJxDRXSXGcf5Xw6Ln2MeqkCh4ezmYTFSSU6DAPc",
  "key40": "42B8Tdxq8ueaxTn5MQjDgLL9KfhZMB45GRmZd8QbxmCkxEQcFjxygTvVgwwEK9pJmxkC5uB2ToCP31AkRxZUZ6g7",
  "key41": "5VssmhdLxTDuZXTmN188DAUYQVhrcgUwPHywiMtLuqXishsSo9TDVg6m8et429T8X35SnHXaAwhaBguk9WDrp49A",
  "key42": "4AsQWDiRkboGzGg38uNS3ANMoUSXE2ycnHdCTiMc9P5Jev1Up1jDFEeSFhvz5xubZrB6jnLZMAZEuYVC6LFFLSiY",
  "key43": "26bzgWbKHDU5GSJk8yhyXWWqAMFkANVcoH9MCATa5yzXwP3kUe2kpWA67WjQyEPam3x8h3snEkLj2bmp3K2bmA1g",
  "key44": "55fW4wwhV35ZrChAhpeM9t34aGvfKGYG4tNj9yHg6ULJ4hd47a6bfoMQ4jnW2AzdJoXYSfSUd9EeaTu6aM66ZCsX",
  "key45": "5DqSHWzDqyJk8vT8vYDupXn1ZedjCd4DsBtVfm98GBhUgDoCbdCPpB7KYPcraTvhRWBGswLsUaDCp27pjbkBm5sX",
  "key46": "TJpEm2AmG8Yckf7thegWFbtGohnp3yE2kaeX1ECY6gLoURWjreCV1iKXvKGYepxpBsZYvxofkwVX5bpknpX9qnb",
  "key47": "2GQHW4d9uT1UvfGttSNBvw1ZCj9uF9waAYmhG1Fw8eYEGNahL2XafrFRvvLdR6Tapz5RtVEF1sK2gfq5XgukxU75"
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
