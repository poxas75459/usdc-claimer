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
    "4JWyfEKx3qdNs8yBFV5JvkmofZyxGuy2h665tUNKbkTS2AbYYqYaGgJshSUnM9f52tMQrdFprJ7kaJmRqf6wj9mK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Y9u3kejq8mYikXu8fmpWm2MJoJ7ra3yUCKRbu4qXSBS9Hqv3oY27CenRzecAc7nUw4aLZ8FZigavUHEJ6egE4rg",
  "key1": "5a1FL2oaPaiZ6EgYVb8hjrBG22cb6QohJPAVegmjyQuqiHKa5cojz27L6vYSsrKJKqAShWb589NFFcMNFh2WqEWP",
  "key2": "5ynH4ChnpxZy55Hp6rbXuZ6crBgC6k431XBuj3oMyRo7X3KJPpxfnDM3TAahSpJQuJZNnz6JB6Hrgy5PSQpSUfiN",
  "key3": "3fxWfYFcL4zEKeUoqKdhgX88cGA81xAh3Nr5oqD9BbBc8p5zBDPnwZcyY2T9npReyeHE4GQ8TVDATpB2T2ymvSsr",
  "key4": "wPz4nTqp7f1jfVE457Xpq7aGgJyneZQDyvj2pimCJW4bRBNFcA6DRSJ7HdkenrNAdK8VNHs89heHtjZgCk3w92z",
  "key5": "2wKU9eA3jj66QAYGLrV1ocijGQHMraTr76Uzn5gNrTztPFVr8J5mSryGwExkqnwAAAUHUutxdo279qwhPWqgH5Mb",
  "key6": "5vk8ET5giQ9hj9s4mBowSo4Z59385LD67ohM6MUsZP4meg8npC5WvQ9ds4gfQBWDSPmjqQ2aYEg5X8awdRJtjCCp",
  "key7": "2kywHvxfZwmoN8SbFU6aBQ4BCaA3PsnX3Nt8CJhkEkX3wNN2mEjNQpsTekjWSDeebfrYfNQGGHSDjYcJwCdJnzJS",
  "key8": "o9aurGTkHJjebUPX2eF4FTceCDAcm7vWjEzFMGQdTewC9xipE4qNZG3CmqpFTCqx7RQbvDs9B9L7eBG4XMR6xf4",
  "key9": "Zsj9HxLULdLUakKZrS5tZUTpDD3wj47UD8LjSDzjBJfGUbBbahmRGQPQkk7xHLNU9qp4M19fozEaPLt7bSyArpg",
  "key10": "26vo76pBdVd4WgKDZzBQVFAuo18KJ1i2stZUbioHQHxQ9aXmL4aDCwjW7NFX9j3umknnEqRryepujScE2UgfUGow",
  "key11": "2UZRc6LGvQDKCHcXDtVvwUY4bMKCew8ZtyL2Endqs9Qy1izbg865iii5JXswniaHagD2Eg1SCx6vz5LF6mQsmUzk",
  "key12": "35cuarC3u94GzkRKRXya8Bjs1zdLu8GUvSLRWko4UVSsshBdD51MBL58n3AMkfYo8RDEuxsH7eNP1tsu3LhSofKp",
  "key13": "4JsrTscCu3UB75HYNbSHoJSXvjc9es6rhGMQWYxvCZiGGw6kMjuyAoaNbcVmBMTyoZjqbeu5HGUuvtPkMaAqHyug",
  "key14": "59znGeGErFv2MEKoHEDQdeAXx1hkqEFLWGCaoBuxqUwvtV51nYdqeshWL86sBC2FyttWrfPPdSBJ9ppCPMeqHH3r",
  "key15": "3fAaFjQ8fENaacZerFb3jZHpWQzqtJiPd3rfL2UC78DpCQ5JRVKpcUovRX8trGkQWX6k5QBj58TDLVDx8zHFzuR1",
  "key16": "3hcRJvHL9K9hnDyCAnc8LjcvtxA5xKvaZKec5Q76WABynvtGRsKVZ3YRyEzF8nmtumF3hD5ijJoS766dBtYZBckh",
  "key17": "48wyRs2UkRmPz6zGHNiDBEEKcHUS1vZkQ4R9ddTpnDUTnj4ansJ4wzo6BbPZSRx3Wx6R9ieDBRXaBMfJQhB97rzC",
  "key18": "4Vj24nvPPr1T1Y6tS333a1ruofWxVS4jU2HjXfAzMQt3oQUTUuhGkVaLBE8T7svViPi1PgLFTDPQ1HJiq1cUtbKF",
  "key19": "5zooSSLkokcTqJvGSmp6YZy7VPLWmxhzWeBENUXPxNa5pYhPcU4g9x5XRuiBTL2EMpAWNj9mCmgjqPDsJjL5K5Ss",
  "key20": "2xk2C9QHWpen6t2rb6e47ueMyrsJ8wbCvkskLtbxDQfNAR2U4kjfPJ6CuUVLAQ59ehCuuVs2fGVtQbDKXN13HmaX",
  "key21": "63Zjb61Kk13caMAvDgvaRVEPGqwXFa1i8rnJ35gAWEDwBYVKzZQGSP8ybMArHVeyWn4nWRWGWY5cHLuhTGUUG4yA",
  "key22": "4nwV2kwZTgnLj51GQiRCGwiF6qiAx5En3yKvZvSY8fdMCcwqi5dt83i4x4y26cTMP83YWXCdKQ13cohgRNmqZK4c",
  "key23": "4wHjz7vxqqCNNQdtRFfXR5pYFTeo5fg7BZN9CqHy2UTmiY2N8nwQBwAXsVgE9cnZ9dE8nt2EXb7McWedmMfEkVRV",
  "key24": "4s2Y7ygzEw6iEW7EFhw6STZDpnN97tcqXn7gGxfLduo3NjnJdjzQCnJZmkcc9cR7dENzMmhMFyftUHmffv5avpqH",
  "key25": "5xfoiMZA4nhw4Qq54zVB4kC58umZXpYyMgSTUSaUWVrSZ5FFjFfk7TcU174fKzeqcNspTUATCn4iTKB1NhM11Mht",
  "key26": "3Zr91wYvPhgEziiTuJqbHiZkjpVh9PMorBikboq3WF7sm834b8iQhT3EVzuFQb7UaSzEDT81fnQpHRQzFQ8JM39B",
  "key27": "4kyezNoSiFRGejbEJ4HicyNeQBkifiWtgDQF6TJyMKYZCo4oZyjYCu1DJ3wp1gHH2GFtgWo1wNQGSkhddAQtRKfX",
  "key28": "5v3KNWWEbhHLNY4asJfVSG12jfv7JUVxWD5FasEaaxZmQNk5UxGTa5xEsnpoa8CdmyjSqUXs5irxqYMiqkUKGKLY",
  "key29": "59qrFRDyxTQ9mSKnv1f1MSWY6u1XQN9XQyZqRGcmUtF9sMEuEtEfdEh4YTXcxgvLA9a2ffAGnqWVprgrfj9ieL7R",
  "key30": "285tGPXeoZzbqjCZn2Hh6enVFwH1KcJunBv5yiRpdZLynuAJdbBrvSMzRBwiQatM6Zfm7bGFkx9mVKmQ1RUoVFAc",
  "key31": "4JDbsn172Lc2Tp7iDbhH3UYZrAEwZ8Pm7WkgBe21wjhPWNZcW3zmRqL4vGJ2gP5LuFAkwxiYcEHKPWvWAQYNqbGU",
  "key32": "4i1h5wajr5T2k2N7EfNrc4JuBY7u8qZzm8BABAdD5MP92g5tix5823ZjkBKjsNFBfsnRpxaQ3qVjQhkzFLDkKuGx",
  "key33": "5b17tPJ8cWkNpcXKqzYd8CfRd62L5hKHaVX6TrnXTMeN7TSqFNL337zE3GiyPVAZ8wgExTy29hs7HJE85dHNkVZE",
  "key34": "54thr88rukztSeoJCTD7S6indeAQWGphmGueKciD38csgyQDrd3GBEdhf2pBjne8nZHYVbQ9KBwFyE6rKoLEa8Fa",
  "key35": "A6n4ru5M8pVSX25aEefD3HwBu8H4Tj2sJQrh4NoUpyCQXFJwhW6VKCytJf7bAYoBCRqhy1i64q2XwDCBFaG39r4",
  "key36": "36QgwTWGFSC43vavqWS6gfbe1uaLt2zn3PKxQVv3iwcveDd7w7wy54DMxvU8ZW1ubpmCC5YCj8RCEkZeycJaYdcQ",
  "key37": "5vV6cJdd2fyihFDox7CBHP5SrbBNy9KBVrKvSyXqjbEptGSj5S1gASfBBe2ucoc3v8966GD1rVqfnpZ31EAx8RFZ",
  "key38": "e1LZ9WLAMLQ6HgnAwCsjMmWQL86Pvp8yLe5EgCNCJJrEf8zdKAsE49j4XE1FLvHhndLwiHAoqcVws1x5fDDV6UT",
  "key39": "33SeJwo2WiKW38uD4toPRrmtPskku5sn1eofpnMREbVJpn8X6coyGoT4unKEdtuzcvzf9xikkxoGiU58aDdE1ztE",
  "key40": "5W7WA2PPuJYE839M2jsiDqfKvCHdXZZ6kWaQm4RCb6Z3hbn7KX6dkRkSxxrqfDc6r7NPkYSV5vD4wPGAHr5cwuKf",
  "key41": "62xwsRnBBa8ucTagdxrBKMjMZifGi6GxHE3u8LGVaFTrwbT7TpcwREjVrWGH9BWZXEA8hXfyRpv6cWMgTv6eveZH"
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
