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
    "5vXNqDHdsX5vyoKCMSk9XV4XwiLninC3rgVQXBgs5GyrwFHukktgkNMKWRx5BtK6Vv8hzvsHjgQKF1q2N9dCTHV9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dhGjBymCAhZDoVLti9nV8Dd5jpzaG9zNTQtN3LHQdRsf3eTcwG2WbGRHmUyXQU1DbB8Rb8DYtHWPhghuygHtpFY",
  "key1": "5eiBoaKtsWR5VY1BRRWGftehUFuN6TVwxSCHWqBopv7hJbFt45yAQg4VD3TBY3zWM3FdZkHeEfwf4q5APN1wEQd",
  "key2": "5YXzK4gA22ViQQQiw9uKuxUAcBE7wgVr8JoBptB5GQ9DVm5vwJuRsDRmSnVR43ta2qb7Ngm9cXcqrp5yvugmoSfm",
  "key3": "3mFdVBnpwHqADch5vXMfkZXpTecvrf7sZcHCrt7ms9Tmy88Z9Kwds2pBH8uNwGBuGj25gV4yHuG9Q7zWPXV2tDzo",
  "key4": "2PVaRuS3NPpfgB4GrDPxy2o1gkJoRKdxQMyMbenB8tWHSTPFs5RCtC2C9xfUNB6tR37yP1h1s6mncdUx3zeuQcAp",
  "key5": "2pv8w2UXVBPZWz2HqYqz7czpQRP6MJJomHZqXcr8Yca9Y1FoSHx66AfYf61MZVxvVxkwwvoM4wscAW6WCUMopcYY",
  "key6": "43zqFfLNthq54ES2iRQ1d7brBDcANxGF3vtHPWoZxQSrjTKcVNFBkvHNhA5qV2TzYi4swzYhDn6g3CAw9pRCv3CC",
  "key7": "2q9o5L1RWaagV7DCrPL8QE4BNxfRueZ9NDjEER1PTTEm22u7TDohHVy6PAWGM5k796baE9Qcj1orPJLecL2wMtQB",
  "key8": "3o5VrX1XaocVYJBWyNHDdSGR3T2BxM2En5ApGXR7BXThEapQgZF5husoEyhXrKPZP7WDhYUHaUwqYTxYEiamFc5n",
  "key9": "4p7wHKwx9hypCau7x2A4oowjGXS3nzACCio4nQnTgTQ5J1w9pkMMh2AMYhmEZiVPM9MKL5s4Y9vMpyUeoThnMUrd",
  "key10": "4jNWzZaQrVV5ecRwndZxXmFL3UDiR2bsGZdx4YvLoqJa1r3U4tWdTcmRxZjnwyZoQPfewvYnBL9P1Ne7VYVnhr6P",
  "key11": "3JJB6V44fm1n4tmDjjHX3AD2nvuzQQU27tp42Hf8g9VsE998RMCBj9NDBfiYf6FkiPFZwuirLUquzb4BpjJnuUwi",
  "key12": "3cRhxPu7acLNVZgHZQbBoEnRHQt3HigdzxZaGKDWhuk6KUVBXJyVtYeLX4WNGouzqQXuU9ULuWwkdHwLftCXs8n5",
  "key13": "gb6AdXATFqQJChhHWSNcrjaLbD1c8cCRUq2pWfUDR1DDhX4NJTAXPftwnmGCjuPvrGzuHuC44iBMSEoFPvfQsue",
  "key14": "5ooNCfKt6R3ULXaMmj2uDc69A35HKEsv3pAowcs86VSWJ73HaHxX9J97LFtvnhV6ZYRYvaRfakBRLgsVWJT7981S",
  "key15": "4GjtVAenUSpdWGyvBCcw52U96h3cJh8WDziqmQv3FmoZ95JXnUCkAJDMWMHFThLyZUo2FZkA63afUeoffvBFJxko",
  "key16": "NHdaC9BzhLexpSoi9zSbjYmSuVuCdWa5mtT9StfR9CVru8SVb1a8QBMGW35BHzZVykAbNbLwF69DY16GYhCmbeh",
  "key17": "29kvtLbXwifbGp1o2tXQrePzNgULQi5bTGNjCZbw9ev6JY4LtgwBZ6WdiVF56ErDUQ6rXksn8cZU4tFrNNNu428n",
  "key18": "5txEhgCdwRxd9Eg5LkSHue2ArAE8vhPTE28vGYwd1Ph7RPh4dfZKngdLvdNqg3yRFoiKi3KsM1uFNpLmUBKLUweo",
  "key19": "3CoGE9T8peEG54VerupJVbpYHok5UpXfQ3G9c9iZa7rrScDHBYdUUGnyS3J3vE9UV7AFDZXhepQSXUJRex7FqDmp",
  "key20": "44GcHbofNDpGKHEJgtuw4EfCSxSaVQBsK3iqFwb3FfxVuCaSkU8uu1GHtu6daxFFPz4kgq8aNQG3UZ3oYP499EMC",
  "key21": "45wghnBz4cf4yWe3y3tWMnPtGzrV7g5mE9gfvYABcqvsvvP9cRZoiC77JUcm22WNZqonkBEwu7wxEwF5LxEJS5Hh",
  "key22": "3D6YLzdRQVaBcApSAnyoRK469DJg8nP4gjGedBNbqhU2MPBuEvsfeC7YbKnF5fFwS1xuKATajrsuyvu49hLSs8w7",
  "key23": "4Sp9wRa7Qyewm5vTwYnZD1FxRnhpPuWqD8TFYpgrDXyNTG4Djs7kKo2rkJwHxnJGdsStGdywUEF2zbgMou5Ehtqn",
  "key24": "3u7RGim9jmqBHax5SyzFWmQU5j3nC3FrXjV3bv8GHzMxV34qDGdYwCHmMF5tfvR3r7qfhMEXf4BJj5eW86nEC2eC",
  "key25": "2qSkEFa6cGPByPLLHgfXDnyF72j9PUzekz18s1M8QUKNmUynwLcHQKrZqdP6GoPb18zh1RPEi13h8QENnrY3g7r3",
  "key26": "2MuQ88rtYEZxnvSmSqkjR36JvHRD5mU7EN2AFtBNvYQm4ENRdLvKq7y66ZCGx59kia4kKQ4kWE6zxabeQCBtC5kS",
  "key27": "3MbqyGPo3Yw2SWcvJgAAuU6ZG2Re4bqCEweVhayooxXDXd8gUJgvzopUxqXT21SQ8s4DGbwJfLwGw5eTWk1JgJic",
  "key28": "25JupjMAx1vChstijZh8EHse9RS6LxfEWc9oV2YV3VXtwfrN77aoGetfZ8nk4hXMkq6Ac8KazURPgMRxxsTQWC2j",
  "key29": "48WaHCkBndW7K3UcfezDuPpctKr83FKkAnqQmyBU9ZEnszuGDqaKPdtXPRKK5DT8pEzacbbtxStrCyCbsuy9VR8N",
  "key30": "4THyXbgS6vG53uj6KwEmqf85MqwErzzTtDU9Yfw97KJnDrEpSSWbpdBtJvjqck6KDaiVbaKjEr6VuwyyXuczztHm",
  "key31": "37Dzvfp1RLdqtkegbcLArtFoP5TdwJok8QsLrM5D6JrwjRAEPrw6ThCwzKU5rgx1tDwLDEEGP17XPXNFG1chpYhJ",
  "key32": "3tNsQHq71ZvcTFggcWUmFwfWTPYAkyAmSc9MFksUjmJmQ64AnjccLt4avGkeKB32mHtVC4rx3DpukEr8wvfE7dBp",
  "key33": "4xXZQJZjwa8b6vpPBF4iBAHLJ9vkrKkS7d7BzjbEF6HbN3FboG6hJWYrSu73mT9yPEWzwahiPowWREkVqaxuPTMG",
  "key34": "5hUGMBicGxioBMAXpPuE1FSE5w4UrZXB7aXTkJeFVdWzMsBzThQL4e34eqHr8FTXyLxE4jHH5CGtEN8rmp9cHHwd",
  "key35": "TzsKSjrfdnVsfx1MR9exbaa2niYJYmfZ69aSts5jPCo6qXbXwdUjpEUbi7CA8Qvr9KnQHi29dz4mN8yTCySs9uo",
  "key36": "3e2YLWnZMvUJkMpPyQxA3qUR12exXqAuoB19wfZKPys11W6A92ZJe3hApk3m55Xheekw1QDLmq3d2Ms1CJRL56AK"
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
