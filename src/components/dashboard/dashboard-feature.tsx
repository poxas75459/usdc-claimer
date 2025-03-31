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
    "Ma71yFS9tUdtPrXqnh6iRXPoYZvR2fk88fkPkLr4Tu3pevpfu8kUk1vxzAtpurkS1yHAR4whqLTTcXqmxiZ4raL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hyAhhfwuHzn7kyin2MYhYFTApJLEVQkfxvK8vrGFVnp2o22u5xf5V9GdUqWf5PtGuYYfQWsiZKnNyyV9QVYnZmQ",
  "key1": "4cHWBJ6eJj3vZREovr1QAXW9QEmX6HAHvyEyttCNTMWdbj9LYE6aZWDowrM1xjZDEabygVL5ao6UiDSCBLc9p3aS",
  "key2": "FJWGDpi5PngQ4uw7XM4TU6eH8wV2cW5dfKG18DTxn5BxGgCU6RqSbDgu3ef2QnUzqttTfjAanZy9BgmDuSpKrNZ",
  "key3": "FdXsAG9DVyKJwphKPrXD29wGRmfUR1KcyKt9QqRA8pN2kHqKeAkDNQduznmbXZ21kXQHpTbv7s6cgMP8WXTSmyD",
  "key4": "PsM5RqQxCPEibuQNUoUcZGa7Kt2S5W4yakGKCWYmfNsjYuiTDbewxdKcqcK9mHDU5pLnpwScEjL7SWKReY9NNHV",
  "key5": "CkTnytAKLTEVTstbs6JFBkdYXpp3Ls2fgrYPWfJ3sxbsXMB7hRCqY9zzuaz4DyJJJYXjEXFsS5sgViADvZuDGg3",
  "key6": "3XVBoBMgqjtAnQxpsh539QGun6wdEFdtHLENe7vbWHY8GPVKeDPT1nrHTgt3E3Zh68QQ3Y4o2qMQFgskm8xSk7ZB",
  "key7": "98RaDYMbF3yUWjprpUwzsnRPByjG9mspZB38Z6MLc67Wh1S75ySteJrLcgAMxYAuViDZ3nUuxHb3K3sjLRZ1E9C",
  "key8": "3HGUvEK62uJPEzuYmgJdCjY8RSKVkuvafVTj3BqTSNwuPdydpzauiXWX1ar9TxittKkc2U6kGxLQaH7VHK2K2gQb",
  "key9": "dGX8MykZdBuLuxHEMMxeyDPBusLFw7R3B1F8s2XK3698SDT1tLBJ8SW4nWkvubjAX7ABLzy4RiVe2iF4sg9YkAt",
  "key10": "38opnqBktkfeZM81Ccs4auEWjsMGjeZFvUENEktgeeZMQu47erLBNCdwkoxyKxpSwGsiw86F8PGskvXhtDysuv4C",
  "key11": "X6f3yj3vK5sH1g25MULvt9bH6nyGqYkvxvfeyVikMGuF56gRCgeiqix5moBMH1H57DMvZsk2wyDNi7vu3ysojn3",
  "key12": "FqXtak6PvUEgD6E7Fm3GxV7mdREZRGX3hyWkspqdFb4uC7MxizQHphvKCcne4mV56XB3mksbWmtFtRFWZrDNqvk",
  "key13": "5F2RRVKRuLziT4fxx6bS8Nu5jQNuZdoKyyhJB4z3qKxSChTm75S4iTQNT29wHtxJaLEov6pp4zHDDwjFzCGbV8tY",
  "key14": "5ZrZfM9EaJB53mLYauX5JFoDEAEPDE2H1EhTvANDwrUf2H1m8hp7XyPvVHrvd5CzCTPWig5V66vTDm6DiiSnNA3t",
  "key15": "434wChVRCuwsYdXPZBwozGWSWco514cYtni9iXJWSGU9m89xSSn4BS6ThVdMv4pCwxSGdTKx8SHRfjoUR3mZtYbH",
  "key16": "3Ef1fZrtwSfQEoSJ65rztg44D9mVXbzJetyvBMxD3DcrzYVVh4QiZYqVRkZA4gKDYu1RzQUjKFteJkB3dNRz5bSj",
  "key17": "3oiifK6xnPAX53vFC8QGHknXM7fxpiyDbHJ4EZAMoQTvDfTUJH82BkYsDB4c7rZQ84y1B2fcftLzk6tw2sSA8jwp",
  "key18": "3ZRYKMfc3JndynNHp1gETHHherR3S765TLJBDgdjKxun9dLSBKrNiej8F1scMNYMLgpoAtEWuUq42dGs66PLoAZU",
  "key19": "2T7NieY8JZiTxDRkWjSaYPbeQ577x9hrHogxoPqU8jp3EA7Pav7Usopk6xMk5QSU7F329PPz6j5hSZMfH6jXfHzN",
  "key20": "2ePUgtxDrmjorPiGRFWbqCfHPH8TzCKFqmoX7sEknnxuLf9cyxy6orawR8Z9bySuWgc3wSUqPNpPFPcp1pm2vkM1",
  "key21": "XMUVMqJEzgGxXniZEuN47KNEEkXJad7jEA5CeZZQjx8SLeAexpsYnjZiqgk16idi69eedY5ZftmQC1xbCJRH8Jh",
  "key22": "2C4GMmyEkkt6NPRtUkNBAxAmB4PxsT1WxRy7jm2qosDdpip6PuZJnpK1zEkXDvn8bfcw5XkPabDGonF9PWrs2vyw",
  "key23": "3QgZzfanS3f6QbKqUbewdhj11fctThtNLLcGnUp2madZZm1wwSGwJZMFRJSzw1SjLHxd7p9HM6VNXVe1dtaTVvFQ",
  "key24": "2pitw8UwKNtTsgWYpV76DCgHFJ6X3Ntf9RHjKT3XRjQAcgbpWvPE9B95uUQuge42X3HKksSNiLvTgXLqF8CgDRwe",
  "key25": "5BgpsnNhLtkA9CTR6ea4zmhhSF5gJRWc4d1rcHcKKztLyWj8SbcFQZ4kx3QyiggQk4GAZvo5kzF7pHn26VWqkmZX",
  "key26": "2eUSoZSKMeDWBEsssaa6X9YvzBiN6EtFrn7PPP88KapKuAkYK3E2U9CPXYpQxTmeLUEbKvYD1JGRLC7jCofQN4Bh",
  "key27": "285Jc6UMmyATXguTer4QD22ZTfUqqw4hDF5QyA6Ju8cBxsqDWFyp3NugGTWGnXGReGBkBmWxe2i47giHvVqUzdhm",
  "key28": "5JhoPEkBy51FeAnMgTYVi94LmeHvoGsYBcNJ87JQk39jiDWGbhwE3EhZf1EfraEyt37gkzSrKqB57GzZyfmrWbTa",
  "key29": "3Y8dbhNuaGCbxBV4n76WWtPYjG5TDbCg31yxwNb4MBH17YhYRjqMTq1q156Lgz8gUC4x1vh1vEAsx7PZEhTrDucA",
  "key30": "5KkgWYLxhC7Ptm8NEGnJFF88tbjzLhocbn1Q71jiKTtFejwSru12QBFGGwtXbZKvF79rk9DrVeHsVEAAA4pNmAvP",
  "key31": "4yMc7adRD41St5Uy9Yt3ttssF7wxnqujaHN7wxJusGzWpcxdv76M5ouSR7hj2iqZNLjxDPi7wNvwYUbYUT5T6gWS",
  "key32": "4dZKauCkcMuReWupdiH8Ju1eiT6FWwTvz8FexsYTZGqpvjNws3xYYRkwvtP5PEwAGgBeKi8kHhkQ3bqKmiLfbwwT",
  "key33": "wNbL8DedQ34m6irNg7VbGbMJMzCcqyvm9eQoiRgjN9i7bRhVxPFzZJxgFacoGESSX6ZG1n6AAf97vn9x5chjqg1",
  "key34": "4swe3HRzoZi8nCj3M2xM1C23jiwUVeC4yiLArRJheQehHCJwipFSrFmGVQD5fPRvoT1JYGtT8KyP6LhRE4cXwXAN",
  "key35": "544R8W6q4y99UoRgdoEhkeazMQx6Tx5CyZQNAdfnFYShc3GZMotr8Cbbk3Z5yqZ81L4yomhD97HYKHzeJVqRZMPY",
  "key36": "45g47JRRxAj8cxULREAFgcSrzhDrqDkhpxixb5XvNzvmndmSfBbuSv5ocLmyMJopEqEeEnWxiFYLf2g5pVXDAhMK",
  "key37": "DGyaFxGkkNckcwYZJ9XKB1uGfT7mUXDbPdKu4R8kKufYSCyjij7RFx5GLfETm7Ky6QzSg2nJgga4Xsddjppjw7z",
  "key38": "5WwhZ91uVtd8VTNJPhVvLdfPqUH4FbCFjVhfe5KRpgbJD4UerKCqBfEHrVjLAhGwJs4qPkghMnRvoGaT3ubznzM4",
  "key39": "4M32aLAUZjNqoXQS9U5GrUrK6dV5BAwFqbGp1G1LT9bv4MYoHWLHfhy3qMC9ZsfMCAVkJgtBRSNnyuAxUjrpYXfB",
  "key40": "2Cj64oCy6uJGUZE5ctHLvLpuuk5Gx8UCBsLBYNKqePKU9N7BRqVXXgA4G3vzooFdRVV3HhVTrpMQG9gncAJqp5nu",
  "key41": "2uW7ih7cTZVpng6eg2JVmQXUDHdi8hcTq3TPViCRzgz42YeaK2oFLYwxtxCERHm13UaNK8g8RFyxEXV9XsocFgvh"
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
