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
    "42YaAk6sYxBvdE8iZarKVFRGwNwdyGJbNJ4FFYJmcAgGyni4MDqqAAiBaTrXBS4vygQ2f8Xdx21ZmNcE6GYpBs62"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wsZ11UkxAHZSgwJpe1cmPiaXHxii9BR25V6DJq5BaEwCjNtHBCcmHgSx9Zo3t2PyuLVmuENECoayEVHkvE9ubeE",
  "key1": "2ArcGdYqp11PL6UQ1dHFDMBxcxDP1cbep9Di2rW5wEJmr4byvBxJPtNpQj3zuQrxuZD2EV6vmXHrcD1BxZVCkuZQ",
  "key2": "2P7kvQ9DBTv47yDYrVPumrPpV7RdfxWCTwah8utLb2fAUpAHewBCCEcLTSby5xwMJrN4Z5CVoJwch7atNr33RKdD",
  "key3": "38gAYHx7z2av6Jxn82KUwJQkNmBJugMFNF8Q9kjYn3HBQ4mR1waK635Lze2yJEStEEtrr7hjJhGv9tchB4XBu4my",
  "key4": "sFs1nqGwUJoVhbsPtUBQgU4CG5A9uY1iNwvcWzKkTQDyvr5PHib3JBLDeDKT8FsTq1rVKnV8GmEJXCM91njBWz7",
  "key5": "3EVE2PVa6Tg5YCGB69gLozBCgwY2nHG55KjKk6zQjXbPzLTdUtxmhF6t6ipDC11EYwiJq4Lu6z5HxDzXpamgkBs",
  "key6": "57bMVpVosUdWStjbWwFWKJn411kkwDvY1XxXmDCn45VYGHudKbJ8PTZ9dJepgAtwnq8o1huWxgN8DedU4VNQoEhb",
  "key7": "4MufHCCtgBDRx5a4D5qgNRS1hAZqju41mkqYrNESHH7H6rcUEYCvQdbwWA3MZMndwusopHNJ7rHcTSkeaTjtdxfr",
  "key8": "61gz87cbbNGwUd93T4iV2eTeRUJxMXyDgPnbzjJodvvii5nFQunqoLh68xsiikA9TjmTdYUDF62Cb94k5Kbfk9Rn",
  "key9": "5oMV3bGHqWwF4wTQrQ2pwipoau48mhAFZXW6z8ScWGNNMS98cLTYptAVwtfvePDLbe6EfJkyK3ZcoR3zsJKfEWeW",
  "key10": "3cBjfbpcVgFBSAqG5DGSvzup2y5P5dZ7oFg6KGGDXnaVE9uz7ECJpcnBJeXB4ADuK665t5iTCSNwYHEhKkRyWu7V",
  "key11": "26NnnRkJptfdcCQjUDyTNx1HDTDLasNvFPHRfZc739zDbaVAX47CDwKuUPtfHNUwydacGDpaUUXWRoTyRbGExu14",
  "key12": "U4wxnqxmCMupUEV42V3jgCrfukV9cVRA6iCZxhqMxzHc8tjfDwzq8RzLxEXNyVbeAm68EUzTpvJvQVKbSHceDtX",
  "key13": "65X3qvEJMo6jPEZoK44YERRW2hFhWd1twJbv5cvmoVuZt9vTNeawey66NmCMbfvsBbvnFbuccsVFjDQvNUYN8vAH",
  "key14": "2pXqa5aUzYS8rsUkreEDCdUxiZCbh8SP1hrseFNQVyi6Qze7tkdbANjmrdjHv8YoTFUDw5UeeHxmjzo8pThTjzDZ",
  "key15": "52ahBV28cwUtVRV8Mi3W9Fh5VLhPjFjj3ecYMCaVgNp3jhK5fhw6LtefczQvaXNpfxGYFzB99u3svmqbufAKqLs8",
  "key16": "411SQ6RvmYdEZPK4V8uQb7ofBCLmbr4BFa8xPAAKdGw1H95jgjQVkENzdqYuNEXeyBAXXNnm8uLAMHyngeBDjf54",
  "key17": "Hgtyh7WWL4yVXaSbK9cmXMH9xd3u6wef7HRqu93kX9EQXLKivU5wEkJLTdpwuyTTP3EkkdmR9Bp3FARpBkSx6Hj",
  "key18": "3nktvAjTbwq3RfDuY9F6JsQCrPmsmdPWFkAc2UY9evMX5FoeH8HvhREFWXjuCuWh8XXADcJY82qwVaVXJySADra4",
  "key19": "dtiRWCDzRmSmqLjNpViBBjP4weAa1HcwGG8WvTPMkNkgqefQsdyoNNM5riz3wLwiec8CcQFiWpbkgFbuWj9gQXm",
  "key20": "2kFgJBCGjJus1oqexeeFghC7ekTMtsKYvmXkwnFzRz8VtjyvCjop1JV93o5SaVkZC3L7gqAvecwznmasTXv3rqxc",
  "key21": "3BdcR5fqzFJ43ZcMLPjmu2sNc6ibQ9VXfrz2iAWpdprGcowqTSBvBds5qhnVP3ZpepCWbDm6jZWnWQsaV7r2JzMp",
  "key22": "5zNoBsvhcAHh8zsUERmqgVtZB8YwLbGWxkk1nT7yPa6XaJnuHsPKaeFZE5v8hnM1AQMnfdvtTkntTG8ALh788dJo",
  "key23": "ZLGgjF5c2ULphUec6TmzdMqfipoXhCeiRrFcDPN4ewYwNqo3HwiREMJHvqnQrkDRHzcaRQtzznYdeB4CjEfMHC6",
  "key24": "2b6UMQVmpPW3S8bDZuyAGUDpJ383g7UTxMEg1igmRxSKiDxPfDPvkGTZHfqVire7uAKwrGL29Q1AGz593R7iMjSD",
  "key25": "SS16E4axWfjC4F8nXTgaDDnhRaJr3viLfCuwNzwu9uHtTrxNwgCDz4RPxfSBHRsqwtrQJoWpfiNT3EnBzkyAc1n",
  "key26": "4cQsH7J5UYDGRGUQzan25CLXQHKuLE5QGLkMDYESwBrDnkF3ZgBtgEc4Xy5fdmQxLW5xpPoNVYMaeerCWvuRG8sh",
  "key27": "LdwJavmjd73suLuf3q7m96aP11Bandapg5ucRHDpv6aN3wWhq6brCxXQPZDeA9zi4hvMNMd5wHj5AQJvHUGSdkk",
  "key28": "5XWjMYHkvJjCoSMgCEKLxr4PmYKx8z4L8wYugZ36KVwCoCvL6ow37HMEStAb3wxhadLjZW6Tx3EW4vCzAya25W8f",
  "key29": "4ywxRi8gPwEv7GAuXMW9aEXtdneA5rCPueDBRQfryeNBYRM7Ban4nAGnvGggUMvMqQhZzR7FSx9HKTeDem2H4S73",
  "key30": "wtjPuf1HqqQybtthF3GC7YBXSLQQbBMjZLTtwZXs5TJtKWgBpLSbbp1P95TxCfZgk2uXVtGJvocvDACUg5Vq35q",
  "key31": "2D7wLdVXeVem6ffsYeHCCWRj5e1zCtszNzvAjkSeAnmzGz5yEJHxrDRHHWRFxr6wkRki2aPBUvAm7mSw7Kqj9pRZ",
  "key32": "3X8PZLY3tUmvh4iBS4oZfvytH9LPHuXh5XUjq33yDLsc2rMDPzrfkKtxCaZ5h7HG89HHmsCP8RT8SZNskQNmXiZJ",
  "key33": "okYFSM5EqgCj5gHAwu2G8j4pZAnzPhY6NUjZMzz2KWgbUzYtdNCcKMDok5cvpHqZiGH5CFwbz92wPxen6mF14di"
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
