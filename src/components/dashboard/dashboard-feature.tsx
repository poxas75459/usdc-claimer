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
    "33Y1fbuBzXRo279iUWhwuAseDdfbZQqkoAHvENW2a1HB8Jw3b4CW8Fe7yWTuxLN5fFXXygoVvjvb2DxGNk55hgtd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3i6oKUq9NadjuNbbxPrbw8WHMS89U4Q7tuo53upknWeAKjjn3MogeFV5TSbZ96euyLDEdQxhuXPmsbWiqkoGSYsH",
  "key1": "5445QzQekGFQMNuK71xqjEpWUMt8j9nhW322WPsDsWtmxTmR6xksBhj6PDBq5f2DeZyE8X6h9KAuBn8v8My7zE28",
  "key2": "4zeFx9a6ob4jzMgCgAbRiTnAZQc61kq1sWPdPMXp16JrFUTjP1t1cjMPJjYfMMrXxrv7wmpnGTWzQY7pERVEdq16",
  "key3": "QjxGtSz7Nuf2SVVxwNPZEEitVFCzyrgniHpACncRpxihJAxrjsWEBYmVjesHWkRZnthaGFaTF7GQic3a6BhTXTo",
  "key4": "3q6FXcHaPn21HnBkBcHKJNXkHhhgRJuEiiYAcgn2hc8ia1HkHe8PqJL25xaovm6QpVU2eP5M4b3MxkSXYHgvg8A6",
  "key5": "54LwaMBfCNgSAFDbiq66JCcRyLBdP3S9ZoGW521BhPFJuUjnKqMYec14b7bf8VjUf4LoAeo2MLEwPew8ufARFewn",
  "key6": "3HJ9Mzf3HsLQEyeBvY4kGsK6s6PEyFZxvNLT7f1HBoSCyKdnaEmghVP74A3BmytCnv6EWdsCMJENqPVxGsaBtzX3",
  "key7": "5isS5BqGbCzDKLHUZKqYq1cXtGfr7F4e67J9WuEf3bSfxHQ7aJDuGz23swCFXQgEoGx9Qcoc1BxTYvkdyDa7SjS5",
  "key8": "5ufwhvWRSu7qqjNMsSfJPrKpVSJFX6bvcMFxPzyhKdDEr8679xnSkusZFBUkjhRXc5tUA41ZTJ69nW1tGtnWFXLZ",
  "key9": "4mHwcn9QbJz76UJY9T8FLW2XjeRU2tK3BPUaCVxgzMqbWtj7AuZvqopDC57iarEkX9sX3mZ6buaQEv6RnXah6G1P",
  "key10": "jC49PuLrzQccaMMVuYZPozx3pwnZUHPr7LwDeP2jqAnbsKAQLyZoCE3NJNatk2rnJ8Hbxrz1qpK4ca8JTzKfX2C",
  "key11": "2kgEs6WoUns9gP8GjC7AU8ven64Y1ptAvjC7LZ3Lnw4qgGNqBQBPfeF5zizAU2vWQqkzyUhWfpjPSrj5X9srbN32",
  "key12": "3MoePZ9c2cmENUwqQnm7CWVgJ11F8RiWupxEHa9MfxZKyB9uv5yQMopnBPnTYHS4f3YVBLD6cvo5DsaKrs81pT5r",
  "key13": "V9FMXLnQyDLynUqru14hYwcethTV2WGZ6B5Hb9NS3RqU2vdSf17ornSomgvp8js3meny912DCxGcyYL361rapeo",
  "key14": "2PDjzdxdvqGF2hyAWKn2cg1NLCQEBgFidrauhfvL4v7DXEgGNiSSeoLm4s7MRSQ8ZoV7xBCghLwNY8UDNvjqAJQX",
  "key15": "R6bJrDqRvgw9CGD6bDCi9zghGmkkrH2CbZp7svt41rd1njBuTM8R4xgwWHySkxQrVqJb9Z96z9uR31UE5SzmWKE",
  "key16": "2K9Vyyq9mLpq3yLCf11GTYDc3vQuXWuknr3uPH33LdimFHu8vjqvLSKfiTJJeDpEkqUYUQxSzqcmgvWYs4Pru48K",
  "key17": "4ncwqSqYB7t7fZPGHiubzdSDMHvkKamAhhSkKkHUtbw1jq6VsTqQK9uLDH1bR5FdnLvWhdz8mmsULZv9shM9fype",
  "key18": "Pqbeu6f2xo4DjtAJE9yofwC3cnsAgq8Ja4StPMGg5pU6jMpTYLYXCiQX8bTtptHvLBke63StWbUhkVZBfBybTZT",
  "key19": "3ipJE63p7QoA549TKvMaPse6zgduNh5iBD9XYtdRnsALYoxmvJ8zfF7L4GKj8eP42aNEEJA5YZxrfx2ou3RzncpZ",
  "key20": "5228mrQioP6aj2Rv7CJP13goh4ymnrepm8ffKbmYAoZmcbnxJFj8ERPB7HbjakT8nKDqEUE3Wd7TvnpCvLT7r1NM",
  "key21": "3JR5Ji7Ma2H232cPAf86uR8CLooYNFLCHrhcS6P9eMxqQNUWYQLM9kCJyWgmAd6Q37fF4m3BvZMeXAi3L83ZR33Q",
  "key22": "4NSYXtY8eFwhcmmXQXtvLbSjmgxx7LfFeFSW6XV28sNrN74QAD7y3VLsvBweRrXdJnBpYWZsPBCXeoxC1d7KWoga",
  "key23": "2UwRYRiwCWTGF4ht9ZKPj4EQbYb2VNh66WbWkWf7EmNcifKXvxMjFD2wMMGNRN2y5vresxnGXVmsn4JeioWNb7Vk",
  "key24": "4DoykaXEzszYaAAATCok3utNuECgFSyFVujxZu8ejC1jnNWzGuNKNw6SNp7DNQNv3yxaExGTYpAR7vZg78dpD8fD",
  "key25": "4hjxi19TpB8fb35G6uKn1jT2p2f4rL1xumrsHyfaJvzSmpodQzpkW1ZQL5NBzvujyTwR6VBybJcLCDDMSzDEZvzh",
  "key26": "5wBqWf4oF3q7FnUtsJ6LbUDG9tqKuCcGAA9UJHvHyciAaUpiyP5YcKuP53yr9BSGuDQvPFHUh51BSEzsChN9fdqq",
  "key27": "5VMH3suYCSeApC3sLHDGYSzrXxPEvoPcM3GgrAz2ho3EkaE5X2sv4HkeQAvuiKYyaX6UXJBXpLu2nwkV6ypR7g5Y",
  "key28": "Ceopxik1WhYwexr9JbYd9Euqdp5yb5pD3Z8wdYbmHfLPbPVWbwWLKYn7stLhpMKzX41fBAAUWNWrt97f51mKWS4",
  "key29": "3wKwsKaKeEg8aiaeb2yAURCK2QFeys8bG5y1uK9viWjPw6ZYWmBAGYQxD9vdv52tzriPZTqKeFq9Eev8Em38BSnu",
  "key30": "3kczCa8beE6L4EXppYxBUP8iRuj9zSZhLAfDRd9eAzLJP2stfTjRQBS1EgVraf9RCBTNVT6jdJZhLDa29Z4Fs8Ux"
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
