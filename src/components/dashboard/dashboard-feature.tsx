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
    "23PW7aSCyYj2bxYKzZfReFKcHSNE5nFYVppRMYNyrAix3ASTTK6zZakDBzU1NsheuoSqLk2e6ypmTjNQKQbuhdj2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2atUpbYV8nDCMCTRVwsNdaY2qgezjUENzzEHWkpuk6SwDN2N4Ak4na7XUXqMr6NtwUXcR2ZfXfyHMJn3GtF8D9xR",
  "key1": "5PmEKUsGB49wckPjyVcXnNJkv75FSZov39VvBY1Me6N1p5QGayywN537Uq8wUgraRQPmw3d188KEewPAPy3pMuyw",
  "key2": "5yiNteLgWcD5Gra5ScoNjcMi4K5LJaELNPopN43mKoQpE3Qdjnk6HDQoiK47Lyy6vgpx4QrDHMhjigFAp4M9x6B9",
  "key3": "2xKU1gcfjWMFepZn4pZH22ZxNSt5gZ2TG9kexoFccy3zPuG1dg9NBmZ3AZ4XdnQXGZ6mZKDh8B8z2WDZWKGDFmue",
  "key4": "5zmCveC8fnCGkfJt5AiBCHWRSvZrkD495mgQdKRoW4Jye2XSzneeNE6AFaRPkXkwgngknw7KVjzE4X7LEYMEd8fc",
  "key5": "2Zvp6thkfKkik6RXA9NB6gAeJGDnzjY7pnFzdMYPjAtuU785a3Cv3x4q8z1pwcRvSSvdFYPQ6ss9N4zjbohsCgmA",
  "key6": "t31kcdmHo71bYXnxN3Ts3e6jHNFsn6S9iyTXd8Wd2JgqBV8Mukv9KjTFqvuQNp8Tp1GS3p7r5KA2ndyYZ2iRjTr",
  "key7": "5P1ArVEA99fySnwnK2PgS9VPtrsFTVnq2ouQauc3fDHNqiYmfht14bAxGJbnZRstdzCNP9Tu8v4R9hNc7kFRPYvr",
  "key8": "5VVAxJE1i4d28NJpDToVb4Msjb69km3Gursd9oLegPxPi29y1TcXe5cWmRwuPvLvugUMR41CCGJoeZiZtZFkrqQm",
  "key9": "3i7g6sUyggse54gKqivei7tEcx35DhdXJWNEFsmJvNcUNj3y9C4A1markJveR81dTixozwaUPPfCc1gjnmLx2LZy",
  "key10": "2gibanXj8AUZmH2oZqLrYRSHKHbqgm7rJuFnGznqHiQM1VvGB8PaECPD2A7be9aFuMBhD2cN4S9Rv15Agh7MbJvH",
  "key11": "fFDTvaNf2hCAqpsaKx91gWzSBEH81qhEWxLHtY2mAXsL8Sf6LsST7AaUhMujs2o9x4A4evmuHk4GdPgWssrfcus",
  "key12": "33JdqdENiAAuKhVoh3HkFQmXN31hNSyD9RLtTQf8y6UhAd4YhiUZpK8EtAT674yDqtraaPQExjEZLBZDhsLxuX9t",
  "key13": "4jSbarPhG3vsCSFoMjZPp3u28pw6ZQhjQPXfZ3YXdR28HAvVuA3vYjmE7du73XMLBN7EKiHYSfwCCCRm5CRT3KwY",
  "key14": "1drzEEzyAj9pTVarfuB8FjqiBG8zFVniRXuPivvsZSJVXs8EWKvWFKfm5ia2FQRzF5qPT1ynauC32hWWx2fSdX3",
  "key15": "5JepDGsYhZ7nvbwiVvNRK6jLETiQJjUY3oPm2jUj9EHg3VFJmW5oNU2cJydmNjs8DTpJEBgyJDXWMy8cExvemAbV",
  "key16": "WSK5U7rYcdQ3qnZfJA4Wwz8HX5BaiQ8qg1DwFW4ih1m4rxLszwQWGjcdX4GNh4R3zWN9vfZgYgcsYgcQmXSybHW",
  "key17": "4DEcvAb9n9ec4g4EHM8bPSb75rgdSARWU9DpNDxTMkWcbkRDxRWNKiZLqrmRULDAjsA5uR2j3J6XhszPANNFfwCz",
  "key18": "5Hjw3LqnR6T2CpGqhnYeX1GTjvsQESzAamvexV4oxk68Fh5fBRmUFcR5S4iRKwWTJb3qJPengC7vDWmnqPHC8QvQ",
  "key19": "42aNChvZ6178zxRVcuVDCbdR3ksE7y7dczCc7pD3VeQmN5dWxm8MpzaQUiExAiAkupiPataaEWvy6Aqbp1idEJcF",
  "key20": "4JWkTpTL3F6eCXDk5NPi2qTSVY1gpuqWoaW3VL2ptC4PBAUnoJ19GvyMHGfsKMaTPUTBQPfMFhmxd1PdeVZ7HqzQ",
  "key21": "2TRx8zKLNjugYWb8W84EvZq5jAhtUFsL68Ln2qhMeFeGmHydyeZMFhawSbh8ZwGEgeQJvQrN8jsDuvzDAeryA7jg",
  "key22": "43ruhZRno2DbDwyT2q9NA94Q7GBKKxU6zZexdZtK84w7MRrRzX6X2LjwoqTqk62yxjYjKx6WC6emy3pdMeRdLRw5",
  "key23": "36CX1WBMSgLqVY8j16uCi36TUYdvtuTDAXN25EC9ma4qsAebqATxyLZVf1wKFfL6YRskWJhUPt7fhEt9tV4RgJF6",
  "key24": "51PKzjh7Y3JLgNKDARNd8sQgQ5tKZ61LXLuo47RP1jSKhCPTvUYajppooA867ymsboVeXom7Xqs2De3ogJhgRpA8",
  "key25": "45C949EZcdnEP7EQWvvrt3MN5hEsEqwv69PJgQYC54CWXvwVKdtVLJtVty1Cn31YWUJwNmG444TB3BQLZxwrMWcm",
  "key26": "4huHBqQ4WHMxJh24pv7XUguxQZYhBt59zvn4EvdhrmSA8j2MC2yQbFYpu9YzEdePjUqpt5PsBZJnBmeer9ZmxGjs",
  "key27": "jtvccDEpjVpMEtSWAnXGKHBFXaC6GqUhDuBqbGLX743Lni5AALDoApNfsbmhwQCpjaCxihoSu8C5otfK7AaXcSg",
  "key28": "igjN5h1qCUVfnVWRBYCuFFWfUNsVKrsmBryndFrAY3jwDcRWm5vTygHGJQ2BsgyDq17jP27gzvHZkD9He9FAS8Y",
  "key29": "3UapwkEXCkWDKMxxoQxuszR9EH78uJLoRwKqv3tMKRKocJn7C8fBhSGqDNToBEe5iSEUJ9dCBZ2WMcr6YPkfzc1U",
  "key30": "3zsShH3mPVSs4pTPBQzNdMZ3fqYH6LYmQmEU5qMSjFyDS8i2jyKNPadKYEnrP9ud75ecMdB9gB34iwo8FYKEYN6B",
  "key31": "2QabxHx2i184Gt1ZKjRfGw8F3efJaLxB82XxkyJAEc1b9CvnKojQEVwZXGeWP4YQrhiFwZK2xDAdigeCHJtMCEkk",
  "key32": "2BEHWHs2BpXcyCiJq3nTTiaYMfCEjM2zXT1mr4zNjQGA92FK4PWXqe7TyhGDvPUtG57HZEw6qSBX7Sn1cQkzvKY7",
  "key33": "4vfZKGr1gvhs5KcwmVNQTKCDVkytT66SwQg9EtJuKXATQTT933aUfPYPJp2Er5HemyU1JWNoBjC5ckj4F7wL5gq9"
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
