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
    "5GYaZesuN5dHeFhBqpgLEfFVF3zCsZAvczQdnhALJFcGacrYWtTRHnPn42ZyHH1zNE6Wf5xBYYWksaQnjAtWjAS5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kkct7UWfdpbQGG1NnYHMS5yFzoLPDYPzehUfkZkiVBo1MjrjGAzMStmH6CrQWmKdW5uTZYym8XmqHHvfQ51n8uV",
  "key1": "4EzYy6vAj3UwVqs3QtiqSzoCWvbJgoHFHKysqjeKw96XPsJPRUJ43B26iLLfDPWrTGwGhmcbhzaNdBaak7NxdNS7",
  "key2": "4JB3vBXKYL9qtru1xSYnSkos5H1nkwEuMXL2GQfMG7PsyBU85d3gHRTSbnu57Yz18QLbW1X9dgms1w6T6kSuZ6k1",
  "key3": "5swgyu9nDxWgFuLdGQkWVW5GerhURgoHscrHrj9EZVZJnrixygR1LJ4T9zh3TjjhD1ZvSREqJuaSj6mENR1jfzD9",
  "key4": "hZ2EGp4Emhqq4QXrBJioH43KRBuJHvrZ4UfZcgn6M5Wi7vmcrLxGM9WbLwsNXCTyvqtxUS3JbFeddmATNBJvp9v",
  "key5": "3Ke83oeFfTXqKqAbgazuMhtantfiyUxHFKeihyjshpX75tsS1WfoJSs9nENFSz92WXZi3zN89Ug9Pn8tE1NBYZZS",
  "key6": "42NFFsqMxYrsWHaRxsW22S2XE32EjWc6oBigZkW59DK4fbbymdKB1kJordJxp1B9y4DvSLYq1ciP1XbzM298Cy1C",
  "key7": "5BwxEPenUKnSF12pkryMbLTwSrwhK6o1qP79MjdKYVRcUeqxuiFqLrWNRWtm5EWD7duXgS1dfcC3LG2sb5aiQMWd",
  "key8": "2XwjdxFXLZX4eiZSFNd7vxPwnJB4xvNW4skzRfdjPaP9ysdyrm85DbKooYem37CZTfCe8K6GaUGf9Cw5Auf7XKX4",
  "key9": "48SxojoVhJcsBvLiKsuPk6AoCzS41XdWTaNyp4dcmUYvrBujnYHcbRXKcVUDJxzfQ4Di9Uak61v6wd41FY4WQ26i",
  "key10": "26zTF58wMSN3uuXxaeMnZdsqjnwjYSVWbSfbeZbzNyo3rmXXcenMbgnZqBQBECxTVV18kj6cTcmt6e3dn8dfMdWj",
  "key11": "5AABpKVrCFciBJyWpgyinRHe6kgL4NkVH5W2tasrZu3FtUZkSyecqNJoXXQuJK5VkSpoYSr7mQhTogCu18QH1Mwo",
  "key12": "2WF4za8T9Cae7kbWjNARwJ5VKc2LQEKiwcmBNrympPXxHCLzQVb6k27PUkjTPA5MYnJrho62XAZiZHHDrxgA4K8R",
  "key13": "2y9xhZ87dGbNNctkYZvS9FJHBBAGR6KSeo4b3z6MRaL7nEdvbVzt8AJnkYXbWTLSAPiVviem2YBrc2pcmHJxHnKv",
  "key14": "Yp3GgK9jGeiwUqXQ37zDWnGvNSDQyrbUkZW3gCBNhzoPfUR9YsCKfojHQ5vbocgX3qaawjVXJYJBV9mNWWzbDnt",
  "key15": "yocjn7Lq5Uso7AWf4r5T1F5QPBBHsV8iqCfGG8zTahoVLGFW82bLNX9ZoWBm5nVSFG6VrJWHmLh6bULSZ27Epw8",
  "key16": "yDPPHQ2Jb7gXyC1KjahquUZtoMtM3sNHZauzMR6jA1pZ7nZMoHMky8Yc8UYXygrLjL8dn12RupfS5fQdZttfrL3",
  "key17": "3VYgZhVmcv5WDeVTLEKpSxP3CyCFUX5fFZam2FRkZpZgLKmJsgfyS3hVPyTJiTNbfvE7LtrsT4QmnHvoKYvTPoW6",
  "key18": "3xYUfyfjY4LqGEJUh1ZwKm3MRUcuKZPvkmGGEdNFPaBaLLtvjw8wbvRy4wFcMpAUdvjP8qaqUEBEYagwCWhJ7saE",
  "key19": "2zeGdQn3D13brLgZdo3pmuiJXP2QM9QdAh1j7RLD3rC4PXte45fvMzS7NqUwcSjz73FvSu7f7vT6kPudsCbC4qKv",
  "key20": "5AJDhTp1P25y1HjanwYpC1tkrMqKaMGcZBRDjg5e3ts9ywynt2GxCrNYpKkBQFRW4MqcufN9e9GpkGTQNzn9HM3D",
  "key21": "5eark9FsWdspE98YRHSibAzxYWGEA9oKhCmpkeCabZLghiRNPY9tFmG3FyRZHXuqNoFtXuky89r4Hs16F7Gf6cGF",
  "key22": "5yqQ1YCME2PfkpQTz4g1LCdN92GPxEbH44DTpeFhBepD9Ecj7Hji8zzc7rXD2MePsUhJqJpU2vtiinSX76Sikrjr",
  "key23": "4qa8VfpQEMQbAyCNoixcqgXgZmvfWjLKp8z8dDdF2suA7SsnoYCVWKryzJY4jCqptePM972M9BEX1UTxor81od36",
  "key24": "2JY89EWDzKJW669xepvXQqxE7ohk3FahwYdEPLvmwDNmJYMFREwwUx6naPf8U12jFVGGNGLt1oEomsR1TQRJYVGQ",
  "key25": "2LuXJXHLJNNum5YDZaiqtRajKe6vzRtskHN3sDCnUk7yoK2aNt3n2HW5tGnKQYB8Gby9fq4W5TQrLN6GDwPRT1mD",
  "key26": "41bUCSqgVmbMQuFEwDodTTDTTCCvLtGn4PSVKhY2tzsZvnizAyPyH1Prf5oZEAJfDpKQmvRrDpzK829SvYdUq6nu",
  "key27": "3HFsaBULaFTJuVTLt5LXpK1J4c8xJq4gDgbgbLWdpKZHAWit3nno34Pm39VjLRScJwdLUCxFLqSskusH1khDL6an",
  "key28": "4RgZtv9WpEFiPKoeqz25LTwVzu15ejEYFSCPK2KomxcZiNaQWwyAcRAj9jHBGsqSDBs3LaCFsNpVGi88AepmdYmD",
  "key29": "NeABgjAsnqxPWKSFXujvTr1rUCpSSpfyaYdi82D3L6WRwFiPxHstYicyqKu6irCBRJba4bXyvT3RE3B5jgKQEFz",
  "key30": "5ZYmLfnPGCtGQYXE5fiaepTcjA3z3wsiLcrtxh8QuKALeKSxttGw7tGyq9ZzyEKDFS1hpbh162Mp2eBgAXS496Gz",
  "key31": "2WwTnp5mNnAgRqGUSdn5hFhGMvKKorUXPqSF738im7szCs5by1ATAAyzbWtX9KetoCEJHUg5RxKS1DzzS6deEF3B",
  "key32": "3uT1tEu1h5b6AayoGH83m9mKLrTCfNh7uPtiBqHdJFwNm8MhDzirwSMX2gSdygyFgM4JXFqYgahcS4WjP8DfKRTt",
  "key33": "7DASKnkUGPgmibM3u2j8ThSWGM6eQxEHr4Nqe7vE8Gq57g3ioYANwuV52Dt6UYXQQdL6VZQEbefSh31nc43Bajh",
  "key34": "5rS6tQaYxDRwGKsMLiDE4CLDpnuGia6v93PvB5BaBYLax1TeLJubLkWpGo3gW4Hz2q4wJn9rCmPs6kwaxW5VT1eD",
  "key35": "49UjikkhDWDchn52e7uacdCXCQinZZsuTerUEZ8qTtzicmxiFLGtncv1SxHUimBm7ozgQ7ry1y6A7Hzxr9wkq8QL",
  "key36": "42Z9ieWkXA2tzXaMZE6ZLjpGTajQ64hCZEGrHxmKst78ManNreDf3VZcKiwyDitUXNjjtsoHjKFFDFJfJLWxFKqz",
  "key37": "3bE1P7WghZAKhwDhbVGahiPkRFW6VBV13aWUSHbtAkK85JeriUrDFGe2MJ1kNogAXFkggcTWwgGcxeomTWhqCw1o",
  "key38": "67ceP5nUWHp4yS6F27XEXzMRfgD5vzDyHHxpLJ9zbo6zWct5DRmXDGkz6yyzag3zg59SXoKbPuMefvEVA12dStH1",
  "key39": "4QyNoh2pJ3coJx9aYsLiptXDykiYLjuKNsHrXtDXGWyzWH9VhH4s4hxeUi7VaFcGSXdbpgYvGtMtsqwexHNxrBev",
  "key40": "2piffJdypSuBwG7QJdFRhGzCpWF6LnBSyWPgWoKVy4U334D1Nv48jVhi1Q1nFX31dJi4mzzzL5yzH8uYWqkBpsxZ",
  "key41": "5kAfgaVA6c2ikWNyUJEcFuXZbzz5Y7i9KYRT4RujozwWpJLxBsApHFTQtsm1YNxzPtJ8ua91tCY7MrJg7JqFoYRw"
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
