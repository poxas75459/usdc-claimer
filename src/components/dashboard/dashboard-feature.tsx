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
    "2XkF9znRZ9XxpSvC2fRqc6Uygh7Vd4LahqBJ9En9QvyXzb4ZZ2oGa5C6pLXDF65MavBAko9CwMgoqaSoN5dcLhCE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wDiQ8iRrd1PmNzw2uk81tt7frRK5bcj2i8NX1fKsH4XZ4F6Kz8Fx4jKC8jpyTbdva8zqV5caUS6BB3rmZh77FkD",
  "key1": "4M3xpjRWjTdGDbLCcCtPXcLN7BECt76JPaHJt3croEf4VmQe4s9fU7fR8ENXK8o67tWstX6vXZj7TjursoEBQ3te",
  "key2": "3nxaVzR6no3L8chUJrtazhfGnB9NYiDCpno2fa8gLGP7RedzXyrYmuvdqk7EYhYtYKN7RNWQBuAU5WrwALCR7aou",
  "key3": "43CTovkE6jyeWPFzXkFao71efV16tPCVKwv5nKBDDeYfyiZppotJofCXoQiXzYUKSNaojgdZDpFduaY2i2LSvt7W",
  "key4": "4REVrDTMVAHPLK31KfgbnRKk2c7J5n5icKKnqFKUEhLAuejX2Msm2avKSBBFpVYhTZqckC9yQiVfJrFV8AxGZvKA",
  "key5": "4VVUQ6ZEryx1GsBG2Z2yZ6cAEsE7zPcfnaWRrEvWCC5T8EzLaBpnQZKsrg5Fdy4fgDSBQN9heGfrN3atMphCHSAL",
  "key6": "FKi1wSJ7jUBvZm6keuXUvuoSqyAyab6uf26XCAfy29SN5iQxEqkNPonRpqyaZcUHDarsjzveNGy6ew4ac5SR9YP",
  "key7": "4tMUJTmbwcwyvYfZQ22hNeuPYgnz9e1Z1t5L7uZG6dAu8rFarj6xNHyZjCoXb2JKtcrgaxWeVDd8UnRDWaDo4HUm",
  "key8": "zDSVPowkNt6toWheMcHBsvRQijuGuHEoHHoyz7DQSw27qT6mBpioVetSx3M89zmwE8ufnSmFF92tzHqKLY9iHfo",
  "key9": "2zuWcCm6Fa9P4N88pgUPpmUo2MzFGrdEYoWGFW4xkaWriWdE8fvHdm3kGK5CPBx4XPktioTQvmKtkW6XiLT86WRa",
  "key10": "5kEiHktpzc2MQKbi1uoX7wQUtMqNvjop8bB2Vr3Tc1DgFhin41uQanAh12Cxjo4HK8mJwy61c9pSVRTTwveQeBjS",
  "key11": "9qUHaqBvdZrGFzWSKnJNbaXiMuq63QdJ9zUqjHUTNDWRG7tangTYqjMwf4pn4YxPxMZkWNCiwTpWG5yZawBQU3Z",
  "key12": "5H6XnRHDAE2nnf8h6zvAeyov1dXjXrVQT5DX6z3tKMSxbccQZLGED8ehK7zDySghSUWRs5QfNYnqTsxSFUyd5Cdt",
  "key13": "2MNQeruRVXpgMg7msXK5tCtehZgtT1h8iXG4JJ1h8xyJ6fDPXbTgwjXHxueCTC43x7HFvoEHZMXnhJQXAQz781mz",
  "key14": "2QMJ8PqX591PU1whwmLdwYQpgBP5HMaCNJuyHo1GKgJtiWQxRoxTkHAF4NA4cW8KzWmtRK5w5BsfkT8k9LXyndAX",
  "key15": "5q6q9juCN8fpjuPpummnUASdBzBRovzTmndXc2KaraidPiYSz3NfmNBmAWyrvGeVm2PUMTMEtDRS6CJqsDYpCVbW",
  "key16": "ggBLEjJr73dj8XoNHBmKcURwny7DRvYXZir9rhzT8h4UgRoyzESRRwgniE8v2E43ayzca9RgiHrAKPMA9vz4cns",
  "key17": "2cDQsC5FJ4MiHMEw6fm1dc7jQ696n7n5uVBzRF6T4MyyQGPJWJqVf5Qs49Jh9QwC3Tc8QwzLKTcZfgZMPBvQCcVe",
  "key18": "5Mz2xp71WWDwqfjBm5kr6Sbxjd6sXox9G7EiSbVHKnmzo2oJXQzWLJgpz1vEHRKAYuXzxFstnmhfq2Va6qUGKpyS",
  "key19": "2daBttMBFwDfV15gx858g284kMLbF8KsbMQLLbFGE6D4k1y1HoCydLGswVxy9HNWaRvi3wxzMXLtFBP98uKvCSMU",
  "key20": "3SwkfzzaSB4a6hvN71wyB9u1eHnRySu4jpdTn9AX1iqd1sBA5x6Ec3ZZ874CdJUVRjgiMJR8uB6LsABdMj8Jkq9d",
  "key21": "3mgKeckF8eyW9THCWig81WYKktBEzBAiBx3j4m4KQ6BZNngVHPDeQnTZciVUWethz5k8evXyuRT2xMmNWqgJTp6X",
  "key22": "24MVeCxNUkNHfVDUiaFWDDnKcqWyQmEiGKDgm55gmpELJst7DBDi2B6sps39YVmiypZNMFM9wTcBMZRa5PzGwUPg",
  "key23": "4zyptuJV6YfGgsyLtuMhGxwcxxSTA6xG5fFfjmxWWUrfyX1dq8FiuM3oYVBrSLfgp3wKt9RRKnBzmhe6sQyZo72n",
  "key24": "5ydBjibXkgPbYWBfV3DysgTBu7vn4cLyrmnDThT5LwSouY7eu7Ew1VozA5KyrjcxwAcuYpuDtmswT9NsXtkumYq2",
  "key25": "3sJ3A3Aj4tis7CwZ4davzc9hGQivDdubjAtWh7DFC83nrmmRvMttR7drGHtHemmAo9NV8vgk8W59dojiT4wXPvVJ",
  "key26": "2sm3kbA93BeTf4PQ79ERyiHqCD1PEvwB4VS9dsEMMzeXuXsvruDhrGbEQtA1YUTxxDrD3hRzibunWdZrAHgXCqon",
  "key27": "9CZ55NepSgno7c9RR52D7nLSSHqP1nKs9e15nZ5DLH8cDRJmDf182ZBEMzdH7Nc6ppPLT4xnZbuTZsCzWJE5Tnh"
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
