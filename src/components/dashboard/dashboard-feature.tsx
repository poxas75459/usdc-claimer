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
    "cKgPMK2nkXsz16nPvgGQfBvrEcuNtFbE24TXtwSh6HS2McJCpLPxLGnNhnVa4DZeH8GZNUViKcMvBpBvR4zh2ZS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5e8iFcCkGZgQHwktNp5WpywakZ871wDP4bY6jnHXjxzi9RGysC9zZqQJkVbSz1EZfnW9vtr3LYa6Vd991GMqVHb1",
  "key1": "5QRUz9EoZ7phMx68X5MbuNCvkkKT6QGvkHPHaaX9UCshEA7opX6q5s6bctSvZzaVz89UiUBP6UdhGbnSBmKHTDPi",
  "key2": "5XiUUEDFtpjPNvvFwWQBWTagN5BVfyPvWeRMyC6mSNgjfLXAtcR3tuxYfvASBJJXGhHpmp6Jtjrg8zbm9z8Zq4Rw",
  "key3": "2MamzT2o7tRwcxL7UJpe8SRQAjwackkvzaCGzxCXMaizREk5rZxUc11979HvWfHP1dMrTzJvkNWM46uwVqfEE7Qy",
  "key4": "3V6AWN2vqMGgHcDWYMM5fPxDewJHsTk7sJU8Au3nR8rT3kreCLZTGpQrDdm6pPbxkUJTrBjgm4LYey6AAo8BoJ3p",
  "key5": "4y38e7VLietCYDdM39bMHNTXyQQMohin7Y78wc3SVbxQtWTXToWEEWCAJvMofw3QRfBUqD2gPL2qXkLLwyB8vpc5",
  "key6": "5QEjdcDh3t97NgetiQwcArQDYQGRZWGSGmVmhE6f1tM7PQuXcuHzHXTPmdrxQE9Xk6NZXBk2KdfyscvCYMVYdVeR",
  "key7": "5xbNZocbuoDZMTB1yyM5s629oa1Qy3B5xmwQUfpZiTubw5sXP1kCvefPinHPRxBLj3wgkzLTtAT4A7VPK5PSE7Z4",
  "key8": "3grMxFynnNwBqk6wbY1Zs4YT3gJ4UJNSyCfXS6sBgcpQNP1MKPASG2iXbZZ9YivHCcvqRWGFrKtAWf61t8PY3sn2",
  "key9": "3YWJUKXintm5GHarFeWhgHuKaMvGJc6tLL1552VBme7Cn64av8kasmqnFH144thdSPRBa7SJCZPvaGZw5EcpJJjT",
  "key10": "2thjHEhZ9CrSS82b5grJSoczAJfy5m21SwEJowB42mTJLut1bMTSqvYUieGzZiBYFfWxG5uFR3EwYkiWZym5i25N",
  "key11": "3DAWE5eBnWFXBJ7oQpZKpS15Z6T7yVLh3Xn56Rncw36tkGQURuqCArxVeZiQoSqjiMRZKaG57LxDY3p5SBrnGgtj",
  "key12": "28zCRLVJ4ikUAbQeGuiVpZZ2CgfDp6JBrHX5h8mxRbDezdZe4GKKWk4aVh7chKEDKXVQxQBnyH5QmpVoVMVGZ8b5",
  "key13": "3pBx4sepbNwq5ug3iDGxCXEkFJicWeDVFH12ePNyviMxzkx89xGefJV4VigabnjrojtMD7c5dPKtJoPgBb4d4hin",
  "key14": "5FHXJH1zPjbzChxZvyfyKwpTp79XBgNwN1PVoQq1tGusJBkWzSpxP9nX8KPa6daJGp1XK9MqCgDe7UMYiRC3Hx83",
  "key15": "4DtQ1w99w7usrVUwNnqFGhgQbeeRRSBdNfVQBZkVobkLYm3uTpwfgbBgJiJVb48PhohdipjpUCi9DaugdL1BGyb3",
  "key16": "5btih4FFBnAkkX1uHYjFxXZRstQTPkDVW9tPdPsENYmLv3LVNsmMLYiKm4paoapBjJhZB9e1wUVTPujVS4Y1txLP",
  "key17": "385bx1wRoaj2mdLErUttjYrDQR2C7e59W6JaaBawzV5Sm4J9tWcLG5kmAqHUWekVQJvVwGwDwLf5AjEVtRDK5Yvz",
  "key18": "5X8kkFZxbSmtMr9rYJnV9rZ7K1KeDtMo3u3WV2yppCnkthGhjTN3Mj7UroGuZZzKsbd7z7dM9bcRS2ZhpoNVpArq",
  "key19": "3T2otMZyhnHZWsTZ869M41dJyNp7kfS1rhJUwXgkX6nwK6zdZ8n4UJCuRdhEGTm1oBGqWNWHaXgvQMPcJUWZqkGN",
  "key20": "465tN991iycBLymKMEwxsqjCjNsZ6Ew4Wx8DkddqfcCRLnHxhaHHHUkbBeTyDL1Dggtc4toFPKd6xxAQWA8yFNfK",
  "key21": "2jVHpGuwyH5SsdqcEBsWaETGC6NrP9B2Tq2wibxUHwd6CHRZQQLKxiEaHc6uqjGkwDAP99eY58kpavBS7BHRL853",
  "key22": "5acGfcKXHTMcHP5DuauTWUdrkPgGUJ5oBci7fBwKkQifAyeuRgZkGYP2wYpbHBBjtRKioot7GfiRMBoy2SzfJzyQ",
  "key23": "41t5JMcnhGn7kMCmRo324NtPmZUcTuSm9UDFvLjGZcfuLfnyGkUHddaHf9VkCihrXhFjHYCWFFXP5HZkyvqiRoSH",
  "key24": "5KcWVQGod71KRgjYQnWFHTLgsqqRc6dT3hystpCJMrREriPXmqwSGPCQZgxPQvDmC5j4Qtn4NF8wXpcFQn5CcwEj",
  "key25": "2VufdoWFy6hnSG4iHVgi8XYTSAcYcztnSWLhRYC9ZaP5JCp2x4wDNV8macMB2avbXy1rqH5MEADaFxp8tJLX5hZV",
  "key26": "e6VUb3UsvxxVCDtYHCYvWMeBXP1DHphuKVF8wxFti8fPexttPP7Mus5NbzVAwHiDyzRjiGXH2TMS4H4YrnefNqR",
  "key27": "5DsKJ68rNjrGDEnonm5qem536GrWV1htax1AFfhcVruGFdJW35dcbkErQEvw2BaCUHj6cmpBhL3sRkxJ7NVksXfk",
  "key28": "4Mw4rV6YLCkVmzW4ZhCkF4c5cuEqEHDwjwPiTkwmqPttjatKVWn4RQBAtQFavW25Y2WMsrNtUdUUwxdppMawh2vW",
  "key29": "3uLwRn519dyBiWuBvfp9zeBSA3GbjcDSmEJqmNVNf6FdcSPMSVUnzEsRZT44nER7nQoLK6y7YKGMWpfALRm5tqXj",
  "key30": "3necGFSJeV8TBvKVBQZ4g6PG5iQ67T4yJqvMEuD7vqJZdcQMuAXRNFZ2iQ6189t3r5qm4T39R3pHvKLwt3QA59cB"
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
