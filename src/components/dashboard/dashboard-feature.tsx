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
    "3Ssujso3N3kfwdr76BHYGYDoq55gZSx5TF3zUYB1JJDeA9bd8ZuPtoUHfgNKApQWoyVU2eqnMZb4uviZV9EcEy8Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64zsNQaKCRZNvFfycG6vHo6eMGFGWGg32XJf7x71vFAcTAQCsv1wLTBCTUyZF9DYcQRM8RVGXWLNVcomFSZtJrx9",
  "key1": "38dLmGSDHwcJHhUj1HgKwWGGKwrd76VQxUu8LsZoWD517iYtKcisUFYUADXQiAVHPSXrNLTLGnVGYUTSzjWSwwDR",
  "key2": "59GoR1uCowVqq2G7ws3SaVNy6kLnmoLnC7MisUX3pksJ8N14gTg58tr8uuZ4DTBxwPnaEoPoybxkZjcp16fg8Le",
  "key3": "56g1uAW6mSrPA4ysqxpPY4f7aLZGfZtFoXYtsV3soDhARe1YBk6BJSrNXj3ZBB7AuNTatfeJm18rBkfUqGtvVVER",
  "key4": "5fDkkC5jg4tdKqcPoAS7bGqW5rW4hmxDVLueHfgg4F52mCmVTDazo9eBB572N4VwZKYTspP7GGn9L7mfgeMmBUKh",
  "key5": "5Dtk4SAKgBtuwWAMB7Dh5p8NHVNVC817yaJpvV9Eyytk7JKRuTfwNpAfhkNpSCTZaqjvz5WRBBuYVtetERRNeDcq",
  "key6": "5Qgi41KVcWE42zGigXvjYUQfRhUq2DMbmG5RrJovoUkdiiGKrxWJF5CQbgTXLw6NfnUrJbbt4gjkTZcHzgFbKpVF",
  "key7": "49NHr53zAjtnPPJfnbqHenoHkHacKNnTXv1571b6Q5hhZxXV3Pajtug4qujCtG879xqXfa7QysR7y2d7VYxjysMe",
  "key8": "5JWS6NwfU3FK8ZQbFSnEJrfwEkDNrAsq5BFEwSyPDUdhvXvCXkqCgtuzCcK4nRQft3Z677NViRD1QdZNTUKdZjC2",
  "key9": "8B487Gcw32oXyshN74NW6JBbwY8dLZkd4RvqiKR1CXFTPrRjanqDPUnT8haCBjFLZgVMqPgDuRsHqu48uCYcXUo",
  "key10": "4E1woLwEsrTR4geF93ChBjXMbjM3vexfXcNgYZFUZ5uu8HXk8pQrBQ3KwiJ5LrFunQo4Vuh5jrkn1B1igc6h8Kre",
  "key11": "2VRjdhte2QkMgmvSLUihGczN4Ru1co2PZUT1ihjC8CU4nWvaru9ZaEmc2JXkMpBmsLaCnrhDaL6nPKi4RAtoivVY",
  "key12": "5797RnAcCuAKstnKsQDiyMpsgM5jivsK1seGbASAw5Ets7NYTBKKZWVRddy7nBoEoVe55LRkoSseEP6oxMjs3wbP",
  "key13": "2ZJbSSbZzqVigvDzhmDhZ6ZmNZgd6EPdiuQbxgZbDtiM64xFqzze55x7fWgSNnabyBckcQUK4WdyWH7QNd5wYa37",
  "key14": "3WavzkZGG8qR668MNTfZxoMesSyN6VFE7psBqKUDSmZqmzLfZMjxUoQ7N2BEX93R5jRqGV3ARQ4DWTZTQh3XgR47",
  "key15": "4ncfa1TzaFupn3KKgtEHnG3Q6mbkjAvXsgXBLcgb5AAiV9xSN1kMsykRx9CdrvB1mBCokNHar9zEJhKJrnNM8k3C",
  "key16": "p1FMi67USfU8VLV67DVZrM3WxYY4uR7iHbdeVDzEQ3wMFS89Wjj4cHR4t6sJ9KtvaMBcTNWioiBxAtANgYDtkJh",
  "key17": "4nnKyTvqJyRnwqAQEf4yzJKVwSr1TjWxRfhhnhMuTBBFApMAqyvjRqcSYtaigqswq8ETG4CnCfBXhnj4TyWxysBc",
  "key18": "41Mc7cWuju334rBUK5VVAFrRhcmhjyQehvitMUzr2JNvCCB2LNEzUcw8HcgnS5uh2XQ1D2YDcJvvCMQeo1LjKfrX",
  "key19": "2mKay6Ze8dhcHvTT9UniyW8paSdHRDb7zwiPNArRmrzPPjdBrhZCMa3bmBxG65nkruD8tpkMTkDyZTxG39QhDRqj",
  "key20": "5DoJhdetEYaXQ2gE8z6CzxJYDLNzu9aANLa3X8BhnpCgyQj32hnfnqh1QRsRn7U6UZ1smdCZS1gintTcUfUm56go",
  "key21": "3wRPzfohMWPTtDVcGhpWWjEya4gbSL1S3cR1hEHcyy3RLskVpo2Xd2WbUSYjjZzLqqw9TSvpYKdQtMd1TL7ysGZo",
  "key22": "4KpoGLRa43aHZBi3KVtMSeG1YHU1EUcTVvKsWHZVQUUoY4BkTfVznD8gun4Gxsu4xKWUMae9YDWa9tjQBmnAKErP",
  "key23": "2B7mqRx53PiFaeFDN1qPp3xtPM1k8RNijgu8C6xcKLomA4HPRTvp5ppmsnqzEdshaGKv9foDnG2SCbaQtaHBfSWU",
  "key24": "2FTST8BgoMasnHBEVRjkWVPYy28gmWq1QHSys6aukHWc7wQDNw3zRkYc7br9dn1dkFVh5eJgNS38wtEw9KDSmYrs",
  "key25": "5UiCtDRSBYnuZE7WbAGt3aQ3Y61QYzzrHajVrbLZiHtBUFqEJ2BjKLJnQ4mwTuX8hevs7edGV8pkJauUX8XLsTna",
  "key26": "4A3eGTNCzrGmhigaUB8YzshM8WWDXXzieensiBB8JBrdZGvcmodZV32MY3j2orKgiUoYrjfrRMzwZNmBoX1gkKX1",
  "key27": "Gb7AgDEwarzZc1CoeKN5KJHZT6xUqtJ8vDP7db2YNvoBPCWk6Yh29tVJ3x5pBMnpe2jmKx487MdcSmp4vebQrLW",
  "key28": "3TBZcDFSJMjtnohhM9mLuu5opSx1dhMrkbgZctZZomSAU4AXPHqEQZKA6tCF5gMCuHUWBX9yYDPsd9PWUrTgw4MG",
  "key29": "425GZkc9bBzyhSwizSx2jWB39FAQ5ZmWtoB8wwLhafV5c2op8XPUoQWxddhd7B1VS6wzgispSLKviaHjGgpSEvkk",
  "key30": "5nB5YK3h9ixXKU8J96mkoc4zpoSacsNbofoKe7QbDQgqoCA9948tgAq7vGiGby4WZX8F2T5f1RzPwjCE56ZZmeA5",
  "key31": "4jiDCQF6eJbpgVxTMp9yN2oN4SyLPhdm6sWt5kqrmHuisGsXGPqyDD5SBZbd3hrvh96sXP9D7x9MFnzNF5QCz7iH",
  "key32": "6HBVVLBVJRVv55BPF6PXhBmajp1TQ2MMfwi88TRRBjaMQp4HnF8qSHrr6GNePKi9ASH49hoS9Hs7VsfXB9srQ6E",
  "key33": "4skQuK98k4FrH8y6z3Soq6Z539dn4W8MheSxv4hk422THg75uuKFq4y2NWGsF49VcBaxsnQsWE8vX6AsfhWEJ9rk",
  "key34": "29C6rLDfYdvchmsYQc5z2FL5cg9kvpwvcTGtKtNLhCwvLfdUm7t8a9qsUCR3MZ78YXTWaih98nNrqnTFuMgcQEoW",
  "key35": "3vht3A9x1B3G3kPJXDmBoovqNSWHzY3CgNLZTDjRKwvH6yszJGEgTt6JvL7VPgxQARBAtHfjKZRszAtm6Uw6QhPp",
  "key36": "feSnmAz4ZnSVaAUcF7eg68C7KLYUD871tao46CYHmWsGt6kVDwPr6tWJfbMJh9kfwxL42DTPY5wCE71T4oTLY8F",
  "key37": "5BJDg1Em2sCQ4ScKJ4r5xYsDdFAgpaH9TseRghVhCCK7rrRPka1qoJDYi4d2F5DcLEsBdD2hBiTGSCSrZCC96hCf",
  "key38": "2kSJvYM79xjQbuTh1mk3GjNPF14SzVHQHDnPpVskyFGXbJpX1yWC2221EUayqm65Gx1BbPEr9tu2uZv1EamZW2HK",
  "key39": "dyM8f7M7qREwzBfxbqfuoQqjfdNgDth1oBhwJzrsQVkJbEquAFwpJCyesNB94bX2uuc7Aw1qzRezu2CgD2mnmkt",
  "key40": "2sRvYVdY6XX99dQhr8yBjhE2i9Jo5T8H4kjWoaoKE8gEoAZG6dm5SaGoEfcTwEhWtYfwnc11T299oXGfgn53kHJH",
  "key41": "5bLL6ohghADAs5khw4TTkTDQ3sono2LY2P4gizF6wM3WqsRHrmXHuupXEWcCJu976opwg1T81yg3Coy6xn5zpUUA",
  "key42": "4zLKpGJafihTYYvEi5EAGuTsHbHqdFsnQjRq32vJVL5ajpn19Kdd5DdRL8JoTBqCrbem2vcEUVXjAC2oaYfJpTKf",
  "key43": "3C91zUr9ucabGM87Jj81ChLw29w48pY2pxgUvrjJvYqBmaG2rCRE2rTiQtvGSm4RhgQSJWG3JvquQgYaS7e3ikeQ",
  "key44": "4WF6CHdDoLvLo8URpzkNsPWKZRiAevcpZ4KETr5qTaPcneMdeBuBbnqpXo4MR5UPe4M3rgUiHHfF5B7TqcBDZ5M8"
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
