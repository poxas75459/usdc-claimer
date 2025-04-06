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
    "5UdcyCeZMVc9U8Qx1Ci6yXyWnaxxzcBGxJnj94Hznhf39KCxbP9s5yiVFQsN5Z46AhaTw4ZAa46K6yW1oovkGqAg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZeoW7Sd8uacPiPqaEtzAdj5oEb2nTYCVycNLpkiUCJ2RfB9DvQxLmeTjFQoKfwA215H9xrcbWyrMDfDXsLufytm",
  "key1": "3Y6DTgqckbYpKSaXMhX6DfmGNwXVctEYEcAowg2Jv5beiwjhF4vMmpkAJjP8Xur4BsBforMTcirSkGrWUaY9aL3T",
  "key2": "3AinzMQEsS9LXC5Abk3sSLL2fEoueMBSKf3pyPcQYwyUzx3CLbgmMSQhjcHMS5BepDuMrrGEvWGSkKsWd7EnNVNF",
  "key3": "5VTAQKTJ8o8swdoS5kapFsqVxBhedtUTi81B4jDprZHaLD6HSTF5cWmpmkfJTrVYAzhXKN5wnxX6GL8Mzog4k8yA",
  "key4": "iVXQyHjGcQNhDqGMeCqz5GDDnwKTCW4F9jy3w9rmiUMkbJH2kU2U9MD3cStUDGK8LYg5QjCoKeMWvgzTQPxgf7Q",
  "key5": "2t3LVeaZivxMXQQFVzgjUQ1TQhvTs7SLvybiLxtbFYZamN2MvqTdqTHJFdcu27uiJ9TFnkTbaSjtGEMnXNLFYeZm",
  "key6": "M2gtFQHpdTNhgXZkrYx7Apg8WgbEZ6DaXETqaogQTJGsgugj7hxizQqfn4vQVxHYFANQoT56knn82Fahq1rECC2",
  "key7": "3Gw5wZXUCCVj8bTjM87zypQAMKuM5gDrJX7nkyppoxey5gF73e3h3ygtJQBgSgBkwkisqwERWTvHSLrNwbXq47zM",
  "key8": "4tbAs9MNgUi1MFH8FXKJiPkRVVBoZDVoF6P5e6BMWGcwZ2f342yY8hEZ1AagV69pL2MZNaFXnURQpsJAZzePYPWU",
  "key9": "3KagXTbyy8YiPTqd9onDo6Po5GRFYwfH4wC4NssAMoYdGZB9EJ27Mdv1oyqnyEEpHR3huuQ6kJWEJnsxmYLwjHLD",
  "key10": "NnV1TbtUF5E4FJh6tMaBLqYtMqk3Tefb1rciRhiCdhXE4m8bcTbvCzxi7ZA1RDBC54wzVMCuxvrAtQ7WsgyRMTY",
  "key11": "34zf5NGMLxrwoYMMFpUHgssknLA59GdHc5uqcss2XqvHPSbZFbSqx6VBZDQiYa5AxCBMefBqWgk9v2vR3RLFEupR",
  "key12": "2Ehx23zzQvjpQcnDnFRLhp42xCzDFxSri9eMHytgaUpAz4ySXnN6HGwe5k26SiQFLCdGZHv881SxZDJ6y9gJG5e",
  "key13": "4dLT9KcCVGmiQYkS5UjThUAWUNewMWQ3VCDgTgEDjcfvKfgwsQ8szubzoVjfSTGD7ZjeCq1Nuwabp1jPjPpFxkTk",
  "key14": "2rXi3WpoiCjfsPcu6X1Yno9tYNawTwaCHVvJyWriHsLcqU1qGnCAeWHxL8VUp5UEJsw4knYV5yMkCUW8ZrtkTFAD",
  "key15": "2EgzJBpxkAESmXYh4sH47X7sFmwNUg5nQqqHxyYAaX3ibgjomxyXBhcYXKKtD5Kd6kFz4ZbiZ9iAYgv5sQe4ztaS",
  "key16": "4YFZqgfdoRBnoyRVBLXtKybBTUuH33v8inkq11LmYzd6cKnGJDf12kA9cky7DcJHDa1bLrdz2nAdPDsNXi9FxueH",
  "key17": "54gW2jc28TqSf74yacj6NUcEsRQsqqJCqDw2nZLKAWCdA3VXCF7bfPHnx5en6JQPvKKhp6miwesvHuLsxXef2ZZc",
  "key18": "4FJemG6qzm37ZVTemzFk1du97oBmkZPcnTiqbctqULaMQ7reWzW3fWrHGKgZWRuvPq137QFekrvzrDvx7vbRftmM",
  "key19": "2uVJfEYBH7twMudLiSkXo8WCDjHekBTRG2vQi7FjfbSDBn51CNUh2LmwfVr7zMjoKGkyEzp7uKvnEijpwvvbySMb",
  "key20": "262UHzUHS7BGJxpHqYrPMG3Qrghf6cAbb5ePj82aDawAaujsZ2xFDcavwh66hiBQbJsmWkVSyFBA5XKVkGnFsG7F",
  "key21": "mVqEekWdoChFRuie5jnJcm3KgE8tJhqRsyLSvA77uokcpy1zQDWxqV7sr9DkbCNJcUuXBTZSrN6XXaiv4WmqeW8",
  "key22": "2buFRsqansXPDxieQBzvgvPTcF8eNUP829zfqdrnYcP1iMTcvs9e3de4ga1pMumFkjFWa149pEbiSoK6LdozoXQu",
  "key23": "53PpY5WYsyKuWCJSyRZB1W14zxTP3yLzwB252G11p5hEA4DRaFeUtU5bxyZ5R8cguEZGBYvhA1Q9fMPUgFux8geQ",
  "key24": "2T4ACkq3p71B2XbasPDCdeWNAoYFy7jeePQ74SP8qs9Y3QLZ3FbYSMWB7LhkAv5TVgPixABuBJzYag9FXuc3nEfy",
  "key25": "6neCZYbkcCheTEProA2owZ1w5FJAstG6tZ3hihhgpiu5Kq1xjwwW2zbQrr5F4Ms959ah2zfdWuLesBxTZREPtzx",
  "key26": "3uGqxpSQywMbH5Cja4nTz9qyStz7WecmUaZSruRoyXt6UyWW61UcP9XYhdVZMjCT2YJywqGEjzwNXCJ4mZkbB84o",
  "key27": "5nq7qUWN8VAvj6hMTG1587ehKY7sXSULawvewpCiHwfM5Ej1QE4A5iJFRr3ut568srD2vjdzbPchTnyRqh8scyrK",
  "key28": "2QQK9x31jHfwVtwPgd2pKPefdyT5yB2KXQSjpchjWWG8AkQK5rUREftUsqt7A2BEXhvCGZi6NHdo4aE4cAVTWcma",
  "key29": "79TbUtwcvu5Tw2WnnE371S1PYqyj8jMbUG7bJX4cPDnF7f9BoRcLsJft5MbfvRJZBus2ZHzr4R2aauDWZ151pyV",
  "key30": "2AeDWhJHFgLAXZYqukyecaA3NH8LNkXCAjLHtZLDCX3fBaCxtUkCtXtSbo6h5NZ6Zid2xgRzpQ1Qaqpy4HNVqNJM",
  "key31": "2ZLkG9qViZhz6eoNXBoAcfeWjWzgppaxCrVekFxeBmxNFdnjTP412ejF138367rEyN2RbQUpQ9ocWYovyKCwZGoF",
  "key32": "2dakH94ModoV8Fi4pPXEqWNfttjfZUJZZBe2oJZqmmJY81ZFZE4wu5KbAaUvvsuMcVc3Gw4Pw7YJEpu4LZqn9Jkd",
  "key33": "w3Bz71srEyut29RmW5XKp68UQDeW13XztvQadqinkXKn9kL4V8vi8ywV3CEeu8YPV93XSTKCRSHQi1UdjUx1nSR",
  "key34": "5LYMZrwQvuvAMdqtX24NX9hH8ZyCwaGWy94fen6MnEKCvMvDxbLTwqAdvw7s1a8JZoLgoQ2mkg2ZRkJCdu72kk8Z",
  "key35": "4jL5cWhvNPwpj4MQu2AmV7LGQ917BBC74CZFsYE18vFLKAAs7tqou5f3egy38Dq6cVUexrD9mWF9JzkZUPqbsT8w",
  "key36": "rZBb5QvFQP4KmJ8p3JLsWtSVJ7fFBwV1QiSYu2hF2gd5aDSvMsQ7f8YSRd7qzifoNNAszew9J85JqrqEeybgDXF",
  "key37": "23vajZ3q2wcHBLFh3RqwzTJKjQYU51jRda7u9DzYmAPTprnitajRtqHtFYD9w4266W5v4A76PSSYhjHFDyqUEmG3",
  "key38": "3aeiiD4M7vHDuNRAeBLuk1F3boZ5x8yfsRGfxR5hKjCozu4HynzdtZSd6GZDM4p6zDV4BtJRZaK32ZAA5GFQsFCr",
  "key39": "2XEwDY4ZF89wVjfZjLq4ZgZLYBBdZCUGDs6LmAwF2edpXeRVvjErHsTRqez9xiaaDgUUv2HH7USWTsdxajG8A3SQ",
  "key40": "5jDBm61CfUK1UraxHQ8BZuGLXMv76LjgfCr8mKme8S9kJz679raJoQZ8mBDh35QmzFDZwJ3wAksYC9Gxe6ixmkAC",
  "key41": "5jxYFLGS5HrNYQAKSoWUCvJq766WWFazfNG6h4jtoex2LZKQfGbmjiVwZgAK5sLa4yHoy8erwHXBHqTx4QqnRoJN",
  "key42": "5Y5xqGm6J1PQLh26vbXAZwAt5c76WswuUKw3MrsJ5opsgFVhFe3LCJvweE2cUrFCGJAEJTzbKgDGgxatKgfhyHfJ",
  "key43": "3DJ9g3YtK1BGF8xDnpp2jdiEb7Bz95eudNG6u5qSsaVbkuxfCGAbVn9dkvRT81ngXzZtstVQQL2u3iDzNLWZ6eE1",
  "key44": "BXACDvd7WEdhaCvshMYc9fsbHrpy4VjFKkrNdZhggaf8EDxYja6SyCeiufXRr1RZnRBfGff1AZyiXFg7msrmUVh",
  "key45": "2RutmjhR6hWBocHLrPbRfvGfp65HkKc7ZyEutqRVhwmxjjRqsE45NBD1ifn5NpBHLWyoXqjSNra4TM6wVn1Zdyct"
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
