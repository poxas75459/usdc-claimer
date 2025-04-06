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
    "4DMkuFaVFWh82Da3WT8BfPfZz9VyigkY2fHMQpm4WvJUy5b3n24MPishJ9CAnUqB6eYApgMUqd5DA4YVNRbGBi6K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UkskSvoiieKrPZw7n5vZiV7zyMgeHDqEXQ4S2Wd1hp5ka7KNpf6PQydNBY82BvQjAkiYqKjhTJisugQtJzwK6Wo",
  "key1": "Ra8STXj4hEwrywk3XUJ3JZwbtrEpQqXCHkRibBt9vEFmZ3YhJarv7ithJv4uc8mWauQ264BufYT7NUFTSqTXKRx",
  "key2": "5XKZjfKoPvnTYKGjTqdvVWDwwZjJQLdWi9PG1Tvt9T6ZYREZ52Bk8Dk8nDjewSx63P3gAc73Ha9sGWRHsVCPBnaR",
  "key3": "2JDY2ouc52NjNRiKGYMr3PANFeVq4vwBVoCqdZsonNc4GNxYUcLfyc6GeJBRPD3C4coLSfxnoTNUZ19CaXeaP3r4",
  "key4": "2Yh3gV9GnVQkmw47PtSLWsMygyUHQmPebtvzZxvNiUXmNsT177JuuN7H5Z6mfdQTPW67BVUmDuS7f63nCgGtvx2V",
  "key5": "2Pk9sf6a2Q4EEaW1SKJYZsPdNvzCxqxY3V5ct3qQH23WpDkQQQQtyFZw6TDEZ4ozshKAD1P9staUDvSGMYVrKNy7",
  "key6": "3oDWwAYNzdQRb9m58ie4njmBh3Jb9ZGWQj7KgFnsHvzGCpHtJqPT5HCYkCZa863XLFDgEW7HuCkvJ59FwFG81Yut",
  "key7": "3sgaQy9r1Lbv5FgJGSUnemeSWwuMCzKcDf8EU4psbYNzuF8Vg7zXu6AJ9ztWvFgEYVvuHuk7uTC2C6HGSRwFbRwf",
  "key8": "3fs5ehu9k6bqyQu3865498ZYUK8fbraDDtEFmVjaxviURwLpwFnGxCwvTCuFF5XCC9RnPDb8VEoovChtumXzyCL2",
  "key9": "Ya89V4hAUMsQq54kabMgdaKJUqYA4TiEZhvJwBCYpwUrWUarrr6Lg8Unw2DYcLxFueUDzi6DpZUjw32wdVarGUg",
  "key10": "4ALngT5TXwQJA2mjoccWAge8HjbnDga5U4x7bcubisLmyNEweBzTnwaD3eR6bgErhBYaju4x2zJyAeP8WXPTFR9V",
  "key11": "26X7JKyCDarNyjciVDCXN7vcg8d7h8XTaduMPzYxjx7kUdWyBmtmoGGkxjquBaCrdGFuW6t8r9vtoYNMkadkwc1o",
  "key12": "3b5CXRaTZuwWxPXA7vEACHHbiPjMx9MMVuLn4RmfGx1Ea3Hkj8Q9sSYR8t5Rt6DbA6GM1sWRNAANe8faQQNrL9Vv",
  "key13": "3y1EyNhWtnxvjC3YvN1GCNxDbqPHqXVjZx6Ra9Zp439stHbD3sHepKfg99jDsL6Qtrkvq3rkw3swrtj1jum46Cc1",
  "key14": "2aJoNbcaQoRj5HKbTrWit4zywyoyEZt88RipSdfShkSHYV4dTbRXWz3qtTueP4KFxJUh1Yr4RnqKDf7EBE4ExuE5",
  "key15": "3ceWDi7vqBkDkoR1En5N7qKG2iJBGCnPc3rywZ761MdDWUX6EE7STpFpkcjddFZcCfz2nq4GcbNxqyu96SDktqTU",
  "key16": "PBNnCbKj8WVhGYzef56tmc1kw6UKVSuiWz4WttiFnmEYqzd5jPzmeP8nV753J1JYSVKPTHkTvYJayipkhPjdnoT",
  "key17": "2MiSZKN7ksE1yi2BX2ywUc7dSHLK9tuRtx31tt7X7AcG3hGVeHQvetgPw1fXcamu3yfCaPgeaxBVMzvTiohirBKi",
  "key18": "3cMXrv1secq4T9oFV9GCaoiPbnDHaAod3hw9o9KhJ1r4983UnkE8uQHnmgQkNLAv5eCy7MLYdZdzpDGHh8FAAPJA",
  "key19": "H4dHAjixtgRZcmuQhnFLEJmLrnThgK5N8bFSRgq9fvwGdXTFBAMtQ9ntGH9QJZ7vpttjGXyjxPUnydNsDCyK8bW",
  "key20": "3afiChcW3tFQXCx19jz286GDEbJmYw56AR8Tbt2LwMys6djRHHU7xTXLfz8SyJ94vjFcyH3KdLoHFHhza6nw6qxr",
  "key21": "223WCcvbKDJSqvUbuHowLs2ZmpdtPUhF1mLni4h7Kk4KSoqeRxZ13A9sPJqcLA3ZdAySDAK851QjZdNGQJqm9HmS",
  "key22": "SmXH7rt3Wsv1cZjFJULRQ4zCsAP6ijMy4AXqzgPah41zaSqh8Bw5hUgPwpYBByiHR9VcSSmd1cBMfYJHW2dhVaV",
  "key23": "3yFuTw1tbufGdK2kTaMbUq5TJ7s7fGVbhfw9hP2qgkYwRNMBieZxwJt152X12rnyPbMoA3szjY3FrfKMpHxo5WS6",
  "key24": "2kv589vfHGuLH8tau7sGWg2xabwLv83qWWzpiVKz9euTgFbYNVha76ExL5ETvCS4cNZVxM4R8qQXtet9KJwagf2s",
  "key25": "BJ3qFsn9Nghjhj6G1BbK9B4haxTXaCsiEnfi9CuzdRqV1boiPrh4gLYJgrostAePivBvDNPooBd4EWBgkNmrMJn",
  "key26": "5AX6it2YAHo7mLTD6dZUYUcKy485RWHA5CCvXzq9CWTiYEeYm3yRTbGQUJNyeX637kKGD3pCfY2ZviA9a11LjHq4",
  "key27": "3LToSQoRtCh9HE813iRGALgsqxFbRAemmRWyf632kwrZBmjhnCF73GcyGdAPhqjfaJ9EGHV7BrKJHA5FaV55kiQZ",
  "key28": "4kASFp6gRntheM7RvgZT2B951QkB2XMSeB5h6tSzyytHt2nGyRgatJUKjuLQ3NxBwioX1khSp2cvrUvMhTLrKHq4"
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
