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
    "2zKeogMmt5hT5cjpPkZYfgzeXpJpoTZrKKxnAs7X6j9cK49GFVeMYswZYfEb8oaSKAPu4dMzxYBgvcsBQB2JTtX1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kZGhxzztKW3eLngnLXtrGMYVmau91o5irG2jm93MW3QnGuZcJ7NyMMLMa8gGDz1GZHpyiF3EVU6Qk177gVXzNGm",
  "key1": "7f2dXqvKUcJCjjEjrfrqffSE9ccADnruztHzUBb9CKS9jr6vEbazK6CND99mbRz3GD7e1ZJvtJcfzJGDr38itJ5",
  "key2": "3Mw36CtswBKSyizKJt8gjkjyy2gH6wxJ4pYFtRNxrvxY2mz5GPwuaYqSpn7J9u7WbVMVwsYi5GThkkRYLNjrQqUV",
  "key3": "42tBXUTvzxZV5XHnJaoHd7UxcuG8FSEn8C3ZRU6Lq63C8BrtJPgFWcNzG1Q5rAQDkgoCSVvhJCLBJcTrKs1VPJ9m",
  "key4": "M1LicYM8HbhFERsDTEkXhJ4cTSJpqV4mJuS5mZEpHodZH7waP7dheo25G3ka4dDNuR5kMtCQ12gjqUdHPb48ZFV",
  "key5": "2CLvKV3A573GX66qinDKPcUPJ9DngiZk47vmmdcnmWgCbDz5syhHctQtMoGtvmTHyMo4C8Cyg6fFwXuwzAEN5sqS",
  "key6": "44ScsZnWHXa6YUZDhZsgJpCi5cLN6Qp5gMN2V14KtiLrdqTQHj32NnmWw2BQP82QPobqwamnXkgxfYXtCgAWYSfZ",
  "key7": "64ZpoV883uHKHPY7xnNDCAEAJdkatDKhCj2NZexsB1UxPNE43GHQVwrSEtr8tWTDJrNsmV3wBYu9Ftyt9BZrmXEz",
  "key8": "2PLhYsPaWH6fu5dq32QvLqKYZSVhodw2HUhMGjYPPKZ7tVALKn7mH95uUyghqtyB6RdiyoBREwjfKE7qi5uLo7Dx",
  "key9": "xR6mNvSbxbiWMSKDCzN1s5eKcZ4YZxyPPyAmRuu8KBbdCNLyifv9kbVvqGgdGcaeRuk31TQpXo7hp5HYXNSenXH",
  "key10": "2wBRRVr9GRtC3aHddtpBqGrmzLDJuVZjuEWy74THMkTS9PQwBPrkDrjkv6zBNngaeN229bJYZqzLHjBy3iz8aRNH",
  "key11": "4Sq645mwfvMk64MvvPCscrf8YNVr9y8BbJiqPdydvexdg2YZxWaqgHugHtbN3iCZD8xCsiQe4S6iX3vnCtiXqhvZ",
  "key12": "3dUCVqY9EEgnJfdihENdy3eiT6yFhP17Q6WM7qgNtcFPtir83SGJV726Lf2ZmMTbWm27VioNyVnBBUHC6BMVW6jC",
  "key13": "4pp7qs8kJLiKR1oAU6iNZxQ52q4pgmP4X5FL5k9r7rjdxx9cZyKbVYDCW1TFbuNUjypKfsnUS8tVqZFfupUN7mCv",
  "key14": "3hnJhLb6g1NgcdX91Gr1tovpSxDStf4cEdN23roFBZGH5Msk8v49vouhwFEM5x5yU4Jd5JNZXCjwYTpQEUYDRKuR",
  "key15": "2z4dW5A96v2LjNpGLCJ7KpiuXZ8K9x8GZceA4kqW8S1XFRJZ56j4numyLv9cmwATjEcL6qT5vbREnYvAcR93SZd7",
  "key16": "2tUo1cnGUadf5AtU4NAA2BZybKed7qvgR9ebPE391fqX2QvwqWnR5e1emLWJD3yKK4gxCfSUWASDKENLRmgoA2YY",
  "key17": "4JYsp8d8beDaFMJJvESf32Pn5e8kxkxXY8TgFm6U7EHFmpToTRfRKaiZVhFaW8zHVjv3cowXzbky6zZpn3nabXWf",
  "key18": "5peQNuCoUTDxYZvstP7vVr2PLZhTWqkqQX7HMGdioQ9JGWkL3WH5RjEKchLxPf2i22SNmDky7gzjFdfBm8eJ9Lys",
  "key19": "2cKj574N9PvQkEn3BaaKvmur1WXDq6KaycDJ9xZZRbFZuKvAULvudHBpzD6PYPVMSHi9AFGFkohyTXEjALo7E5jv",
  "key20": "39cSKwaPdNtkCRiZ52Dntc3JDuANhUVAqkjT417eKE1ffxUMS4ghb2Qmbck9stcxBC6vT21oH37McDzqgUvFCsm6",
  "key21": "3sdv62CYPTyAB9hLT13uevKCNzejWbZGQ7Er7iXhm3pRDHWwmnRKqCYvhTUwvvns4DTJP5qc8AE8xhoLPP7D4Jhs",
  "key22": "2DnemYGJBf23WFhrDuQq8mABTgmd51WN5V1D17nr6b35BpEJgHoWn3qKZ6e85yChvQFjwPucvG1KFbBYmveVdHC7",
  "key23": "2bfTwscPM3bmo47LC9uZqJiyNDaJAbdEYb9KpQRGYMzmqk8NVmzZoEARMre5RrfDxrd5xcebmBmYX9Ay8pNcubp5",
  "key24": "3pmxw7iD19yLX4P3ET6zgD5MHPd9hyq9JNLpXwL88CCdzYr8jLxU8m6MitinJJgkEkxo9Q1o5MzaftSoHXnP2aYk",
  "key25": "ecfsY63enSRwN3m5EhTDEtDxexZXYjruSh17HEkkwBUS9VV6mMnjkpyPNsea5kEbtJemreWMCagjMjyndAjRcQ8",
  "key26": "3a99RvQsAd8PG8JTLnxvkfjZtTxAMMHoBKkJQsJQwwzJhqvHfdVrcfeBprs536YxLvnQtKQiS8FuQsmNrgJzwExX",
  "key27": "2wej4XRcEgWSarXCitHCrFQm5bPfkTAY8GkRJVRPdTVn97Jve1ncche4mGma2ir5xANTHZa6NTCDNSaKjYL76ovW",
  "key28": "3s9X7TgMWetagUaf7p66tNgJC7KCjet9GwuhiFttRLmYa7L58xhP8qqo7g2tWhmFS3HDkdGHnS28EHUgke5S63du",
  "key29": "5LH8PRE1vAw447FFUCh78hPc3wBMKKNxmqCDhD9623DFmHZMCbtsV1nszC35RnT7iPK3R4YYQeCw7Piqtry3FuRy",
  "key30": "qfyaRrcwiDR9RVtjszR4sEN4PsBwHkQAS9Z1uEyz5qEtL4qzqbLC58y3WdaTcNoqvhQxKva2dBXFGEbFN3nUrS2",
  "key31": "RfYAjkWkUZAB9TR1uauSsggyyzPEnn2BVuhST7CwbqQZYEznbchvJN3MTpTioJ7WKHupui938ckeFgQVA4XAgfn",
  "key32": "359TpPoCoXqJBTk7UEAbec7bRMsVHbXR9iKUmifYtxNabjpf8jtgdAoKwe6jTXmxCHg2peErJxoH5MwHwLdUXebh",
  "key33": "2RRWn3GFpiG1odQ6R1GK7tveHC7JTboCt1Sz9BdDjYdjriAWQXKzGod9xQxh9QZtyaLxiSdfE7Xcbnh1xYqviB8D",
  "key34": "2fU3hQ2hdL3gkkVKmyRxnWcNACV5cRHPEFREtx22m1DqLUaNmNJqQsVjLApGRpqKkHddUA8PJhZZ9YimfDi6sWJA",
  "key35": "41m1vzFMNXr8Fy1BAkhY7d5xN7pA7wk1APVrBwyzbfZgYssXTRueqzFZQcyH1NvesXxq6Ngcsktp7q3f63nJoGw6"
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
