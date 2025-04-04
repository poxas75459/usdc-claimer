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
    "4c5jWWHjuWvKqpF2CgQwMyyjb6dF8wUmV7rYFhLbYLaMdqpvVJwc23C1LdqmhipwcqLr6VwpMyCZK33nNy9YDmj4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yCMWi7YytXnwuCUq1eAtA8p9UnxkqPo8CV8kVjdGi1GmGgwHVjzDEy7D6fV6WzNEMkHUBmcjKZn3sUFKsekfWQ9",
  "key1": "hEMw3gtVs2GkeK2HsubAuqgUaZkSfdQqwhiVJV4QEp3ymuFEvKoYhqzKhjjDzdi6WDtPNGd7dWgWJgNUXuQpiur",
  "key2": "LUQKPetTVh7aFTcJvJcqmo6GBmmqHCHsgwFwvqmaKr23YKEWAXe3TS7ey1pPAnpKwETpyFwhcq3ncEypRgrDvBr",
  "key3": "4XKKy3SVLwesDsH4qnBzoQmFa62rbroyZpDxLXyEE8SzaY7ZKyiuKBC4mCVeX8mXNurZWEnGKi7CH4VossZeimUp",
  "key4": "2D9XqQ7zrJjqgcLdcagE9Gdo3YQdq3dR5ynGJWtgwT4oSXTrCJpTL2S3V16YaTSpAUYdLjWhGZmmw36vZV2MU4gk",
  "key5": "7ENy6soMGZqkyTjh9M9LRnDjg7FeoPutt16csKzZhvcymYmkxzs1YnsZNBcB13eTt2tQbZjcCvMDRas162TqX1n",
  "key6": "4vWEJ5X4c7LeK71see3TCV6kR4D6JF58TRA37y1UMrYZkLJLBYj3UAK7NUfPYiB2EFWzchiyN5roXBwG6pgD2zXn",
  "key7": "32nhX6HnLMYMLAPG7HatCJLUkXbW3GJV7mczDvLMtq5u7sPaK6VAM3n921DPGdanQwjn8bdPGrpX3oCdCktboWfe",
  "key8": "ui77vyMkEbfGxbWabKiAuUMB5jnMFuNz89kCnTmi2fqKz1Kd2WPktrz5DFTGxCc3jg9hApjZudr5b78GQvjCz8Z",
  "key9": "2CsgUqtwCNCbGgeL2h3WtkkB6jfzAoxc4VZ9iR9N83KGuZq1KAU9fT2hRp8V7iFdNhpjGc9a4skrxkBhwQfRYNqq",
  "key10": "3V2VXqTeWLoPxJLwDqwKbaSr7zCf13H2yrHBX32T6V7Lxh9gtjKeQa1WEmZx9WNkh3AQxvoWEeD7HiA4WKhBr3K8",
  "key11": "hsa21Da7ZSEnCcdid8iqrP6HQkYviVuQn4P7rYtL1gQeft62ShWvV6xgZLrtQm5YuqiADpogiiMeRyLcX5D6n3H",
  "key12": "3i9tvXhCg1nLgJhhCjXtXBKBArJmLHrSEHfysT3Spd72DWReBQLMC3CGyQbkVhEZN42SnopRiDUngKk6VuXGnJoX",
  "key13": "ghgcK3UXBfkZ9Y5ihjwTS2LaYMsa3YSyqPkRkXMxk2xr7SqkX26FE1KLu89cru1Pnb5iK2rgwLL9NnENvLDvVdC",
  "key14": "5sTCevgWGECr2p2BtJUtbajiNBtcDhbYhZjXWh9g3zAuXRTgYZrU4R1Pgdetttomymaa6UoLmtRZDbnajMu2JRWK",
  "key15": "2eEsiaMH7jj6wfhAWQZ7yptZmshM3ucw7Z5PsKc2QujgtY2wH9wFMQz2FWQsDCo3NEte437qgqFzCR1c4GdVfsvQ",
  "key16": "2cZkC7J2GR61KJCswYEutMfoevToKHDqeVF4g8n4Hbb1JomuHQ3nKJf4FPRTmS5qBGzxzeziXR77G6beJ8zy9Zza",
  "key17": "2r3DhNE9Cyj5dWSyYBfJU7wfoawVSBSsGxYikJMdk6NjqdgewKDrRGYYSQR1TzQ74n64cQv5LNTdcmq7eJuTFs6G",
  "key18": "4ibm77oqDAQMyecrJSEHJqiEnj5UCJL6h162DcoCy62Nn7SkV5NjtqoqKBYfHCwbZcbbb2ZDg9YGijiChoHj22nh",
  "key19": "5JYgi17ENkvR6aeDAx4jeC9kh6njNfQ6ebXFzjsvYDeQk8M9LJxSt3LFjSaroHoxEDnXdCmR6aE3KwWBmqdaDnK9",
  "key20": "3q31fQA5GR7KRv14N2YK6geuG9o1hwYakV9HtnFAUQ8kXsH6s2EF2RwW5hH5YdaCHn1suc6ACH2xbE39aomByhpY",
  "key21": "28AodeWThEZ2Bn1Rt7QTqfQWHqGqnBeUCvi3avjxg95P3QMSzvfQpKp1mAoJDPjgTvyQ29NUM7gP421DV78Cx6Yr",
  "key22": "2HgfzA6y9HxEoocuM9Z9o8Rc27sxzsGfyGv88g1rZbJQMKqEz4hqb1g3VjjzfyLBzNk6FrWnErjCNxitCaJ5LqB3",
  "key23": "4kQMJsqDjCTvNAWMsCxDakgRgs4NoavqwgaexcAMC6vLkeLCyWpsqrneuhcPuSXfeGKZdLafFPY2snqYLcSUA38i",
  "key24": "4ZYEB8ehCaP2NWA3gRbJnyNxNGMV3Hg1YLJZFhfWBGA12YPdyVetctDu9VSXPTW4ioGQPNsRqSUy9YWqxpWghSUR",
  "key25": "3kR2X5FFb8TrJQSSazQ5gWBnFEiwYWkBQ74zZ1d3W3HeVz7hkJrkjUF3aNiZ1VZneZ8b6nbkf9BTLiM2bP8JPgra",
  "key26": "3Qg73vGdWhznmYmwskWzHXp8JS1m4gpJK2mBhbRWr4jkkG2gYhZGwy2mAGgNopFQhYmca9C9KzAA5LFCFtefTU16",
  "key27": "56r36oAqYLBWG4Nmii4sz9hisM8N7pxsk32bQSZ9pYTwSqp5QcVNnYPkPwxnmCULm5hV3fz5PehS4vByTHguwRYx",
  "key28": "2Yy9YNHBSd6xCre8ojshhgZMTsiVCMv2ASZvAVHoJFhz78hdmJ1tASAKSpxXL5EnBGF2WbdFUojCPP7oobozXxur",
  "key29": "2jJRRacxjgWMDcT36ZQnfPM26go8Hyjkrm7iFj1R4xiBeUB3zpSGtoqJXcBxSDtGQiYjj7HmLQWaVXBZF7ptVrHc",
  "key30": "5Pujea2uPwsW7ok4E4wWtohEU3aEm3x5Jvrgan2A77jg4ztVK5fcqMw1XryFXxPrYLu636ws5iRmkzvc9CY5wWuM",
  "key31": "5SSfe8BUWVJXT8TAnzV9xWLM2NXAyudTTJAtVy5v8UyAFbvTHP57Q6mjiycYQSHfUd2wWwL3isUK7BnvMoA3dd5B",
  "key32": "4wX4iRk9GUC3aB5CAGwAFHFj5k7FTmKK9hXZq41g2r2gaPMg3cKpGpoD6L438ToHppViN1NvJ2heUADcGXnjJCJC",
  "key33": "3r4KBbNnkthZULaa5gF6DsKNr8KWAnYsYyncqhmsNikuLtvxvjDwVBtrG8BHxFnR3hai7ytpLgNq3LM4sEKypidk",
  "key34": "3M86gAqyDaQFLQjmiU6LAEk6SV69D5GVU5dkKybRjNHLfNLn5D3zC1BZfoU5o2MJN4wD7Dnzbzo84bCPhMvNKtFZ",
  "key35": "4xWsYEeHxEPyfvEQBDNZq9TWubE7N38rostnxY7cmBoUzLHzLdYgWim5e7EQFf7gPM4pbKxobYUNuvu8gqWF2oG3",
  "key36": "3FbJwjPAXLm6gifCYkZ2DjPfrs9s9vKKh7YWhaSxaN1112NQLhFbdimxp9d3zFFVG2nYeWwfqn2f6ihh7btYJtNF",
  "key37": "3PvrkRnNqbJq5oTaAPQjZDCDACUuKNLNMRaZcfVL6M3pfUAaeCbeGc9q6j66Dh5UrdRZoP7jrk1t4j6zLtDonY4s",
  "key38": "29gn1Tj1Gu6TZgeVy16WWSHCBzRaMn4ATyNtcvSyVnLxvEcLjjNeFccbVyY8S5jsrtpPg6KxxY83mJ3iPxrLUbhk",
  "key39": "6Z3S3rZgvJaUn5pidE1ueUjEYzLcUoVnEtPvgmetgT5amH7csCw7QiKCjpCJ4o2qHuHQxGmZFgVLnUtY91HSLCD",
  "key40": "2YgCLJhBAPJDEqAvc6xbwCGba1KhwpJ8RryZUhTfkE6uduxEJnQGtLSyaJAYARhtmLdDdL2DjhvZPThjY4n5Cx9S",
  "key41": "2P4St6H4TNRkxtj6WWDXqCWQ2wyB9xErE48jERsRWV9yN7C2x3ogh5SSj5UXM24nmbQNFV17jz3bnUuSKHpudQrc",
  "key42": "3sgWKTJwXg1XDSXJAj7BxFzLNprwFTLu8d4mRUqCPhWoEiz1Ex8SWdpfvjVfvCPkfXDWUGUiAWEfSb3ffbVos33i",
  "key43": "3u8hneL9S1tGyqjp4vwsQonGrTLcopqY3bMFvGxAv1muQgJERCHx2RVRYrA7ZJwv7qARnngrPgPxg66AuTheZrPx",
  "key44": "oXH9s6TSntRs6fRfg1od7qs6dVgpebfnHhYpvuDDJhHMKvMnPmA9msQLTBYjqT4YNTTHCNgmikkMXH7V1C7b2ar",
  "key45": "5CssqARePjC7S13TL1V53x7KXqWomYAddRwgkZiiRzKZpfF9cqW1ubaHoqtagQss94rGrr67x4H3N8PgiJwoo6D6",
  "key46": "xYHMPE5orSXMUFZfoyHzjcKeZfGRGc3akMHGBmsgodfqtcaGo6Q2cYgwe8Kwf7gr5fHqXRvYCQfNjmNAdL6gPsd",
  "key47": "2wZoL5HzBoe5Dc1fz3E8W4vAztWx2Vfe8vqJug968iBaU9mPP2bUZKSnphoFzUTauzwfkJHqnyhnBYwVQqFecZyK",
  "key48": "5hbbiVS3LNMoa5mVAteNJbQJKwJa74APePTYLBkMUTMDWgwwD8Sjism3GJsLprLUWMAr22xpQ32de7yoet7GmJLR",
  "key49": "41UNQLtBhFs1CEwh6irjwfSjQ8dyULstb5e3yNJcYdgiW4muHnngjFRRekPWke8su42hNaY3k5EE5LtahGXpN2qB"
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
