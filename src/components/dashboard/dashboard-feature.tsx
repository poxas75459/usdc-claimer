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
    "2FEAkgcR81npiCWue9H3GUqffZ9XyiYxeDbLZZwZn83LDSNZ86CQ3Jqw46WXVxSfVxUKRJot7i3QYiVUMJBpPRnS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eveKVFYcVfg3wmRTQHmSa4gyoFeuDjFjqU2DoH17WqRX1rcbJfAWYBBwTYq97WbirqbzmWrxqcpJMUHskuAMQUR",
  "key1": "eXgLXAoNJ2kkJFZG4S8xNHX1STJLnC2XCGL7nNaJBuzMJ6JfGGqxWvPGvELhYa4WC8T8FsX8ZFqszR47v8gXpZG",
  "key2": "5dQQPWfisLrw9biqy82gaq3AcPqUyTWmpuLunBBX2YQurv9r8nNnPidRiqnJGDmm7NgrVVZpqUAhNAySozDRxe1X",
  "key3": "ApdYXpwnjRfdBtjSDuzUqsjJJpk469UrRRJ7CXmZUrA9ZNEXqneXxm3GvREzShqVRxaDnhk4Hr8F5nmCordYYLk",
  "key4": "3GHPXgRMr6AbXfWNWdNy7VgVdKJWtDboSPxLPdvKwXMW47D94uKLAgVCciRz6qMG2zjX4ULfNspd8php8qTsNPkC",
  "key5": "5U5oVjnt2g4qMSv6JCYoao8GZhVJes4x1Vo7E6bNKR7WfZctBWqGU5LSXoyEG2NWkJwXo1CWQZjcSQvSE1ok76UK",
  "key6": "4xPp2aDqZYaGL3cCTmFRTeuSwidDZi9F1WGLTPUuFGUnfsEK6ExEwMTEkZZGxYsesRMYYidVafXHi3iXLcLewUP7",
  "key7": "5wMRUtgwnXeg8UyTtNwQZbHGYzGmpn8tc8Dmb8ga8mupx1YE72YYgUvpeVisWtKSj9qqoBcjGecJ7mJoUNYEy9Ji",
  "key8": "93fJaSegPg9aVUAiAayQfAAhNjRRj7P8EmC9negMp43JmAhWBSRoYTHr2R7RPe7uj3ur223K879jzgqDHQzgD9G",
  "key9": "2LTFmhA1eNWb68VUMnSG3cV5LE2pXm2gmhyZV32K9fQUHXoJg62iWBk9qMsuwyJspJL8C3AHEn1EKEzLmYCB4Zuu",
  "key10": "jB3HT2RnPQFWpdH7mh4vjCipZiCKjWe6VwS4QiZrofzUDJXrkM6tn7gYv95L61swXTT9JVPYHjAKRu5oxmAWT7V",
  "key11": "SfkzGRKib9ujTXhHHe8nicQgJSCWKRbAoxscgdD8nFt8wYKFr56gUCg4aiyPVjhFKfhaHEXrK4KpexmSNRTBLqe",
  "key12": "48VAKJYcUbiDwYn67mfo3Gy3aE4NfdfzaB7MCHYT44cxfrrX5xHSeTxsAndgqTBuXCoLXVTGK5kMeSZDRWKf4CzF",
  "key13": "2steF2yDn2kUdmWG4aXhK8WKGiQUXsqBmoxdCinz4A77vDGKZTCgyGSF1Kc2Aq56JXKwm2v2si6cQBA7Xtx6JbEs",
  "key14": "5zGTQZYRVLt5bHTf3VNr6jhbn9DrbkPEpmAhBQwLYEWvPLhNnHxC6Qu2cuwtUmG94EGrSnXUtRSGYvqr1NaxkwxX",
  "key15": "2kX1n6X3mLxiW8PSKKUzJakfYMQnBiUukwzdhozthbf4GXYeFCsURQ3atp5PstYoWSo2mvNgLuyaiHzgRhTE4R6V",
  "key16": "2QgN17LofdGJXum322HBpajcHiTuqorSKhNivegiYNajmVB4HMC4LS8eLj4SnMiCTTbnuVHQFgC53ZJAwJm6cqzZ",
  "key17": "3A8AanJ9oWfBtecfP6XoKT1awbqz7kkgy2gsTPtR7wLqX3AZCwfT7uWYKb6x7ZuLrbMq4PNff3HzJWyjGjUJvuTe",
  "key18": "5Wwuy74TmBFMkqv9R3ye9cnpuMinLMeChFt4dFjKHA3SF7iaDVfn5eoFmsG2jYvtjRk5vgH5PuPs9LzLs96Ss5qf",
  "key19": "3hDtkBDwZXz3ejzUR3w5JE8VoesfNMxfZjM5WYsFLNYBaLDVcJPSK7TdQfys2snFu3qT4UqAdj4EQXzkrQMa8Uiw",
  "key20": "5P3g95qgPPY7pz9t6vKK23eX8L61cfduxdc7U4kSoW3d8NBkUJ6AqMzDjnnoWME12wAKzoXk7g44UfDJCLGHPjed",
  "key21": "5A2xL6CcM8tL44hu8keWqJmFRukbmGBhvFoYrKzd5n5nbRFsX8oSV7dbb7FHcQUkNvEdFcf1arg2dyxXCQzWkpbN",
  "key22": "FvN959vNxAU4PAroDeKU8PHLymdN1AyXdDTsbhroPGXLvUNYFifdgQPrfpboXc49p7uUAii1myqVoZtFkAVkQiN",
  "key23": "4Ntwx4b55kBLPR3zBUV8ebAEvWzTvTpKmzSziW77e7V8ZJJmQTBLzMgo73dKu2e3YacFsbP9GLTb8tQPPuTN1Enk",
  "key24": "4BFjm7GuyGteWpdte6XC6HPTQKpPZa3fto5uZd6NcUpBHD4JiAX4p9Qr4faNCvGLEbTgdz5yyMQukv4azXPu3zj1",
  "key25": "3TF1Xk984Wf2UBrVqfzCuufNs8P52qDnJHji3AjQEvE1HsZA7ioZPzDTB8kApuoQ2vYspr86wBGz1fqE8Ca8wax",
  "key26": "5EMEdYUNzi4cjQQcn6qhgoyvRmswLGrYgm9HYTTxsJVQ1LADgHZpPau453XLC6DHiKijC8Vuk9zPoYvPVHVek8w3",
  "key27": "3cSAJS5bVTLpBjP9JKFqFcfBAggzdabfs8JkfymQvz97zksA1MiDydzcWT3iXMhmuXhG61FtFWhkru123Bg6GLGa",
  "key28": "ccHUYHRDjwbFnpubuntMVZhuwyuG47QJhq3ngqEGfhEMoe7afks26WrbtBEy2tZf3pcY5YzZXcTcJXdeyQ89hDw",
  "key29": "54PWj7ifgqZ2w6odn9byjEqR2ZuW6hHS1kZrfJoXsyPZKYBHTgqeJoYYr6MAfv9dH1zT4jJeqfAzHDbe8n86NWsc",
  "key30": "3stwTestyiUVbEGfqnUNyz37aKGaLuU1WzG4LNE9c8SDUBfZYtM3pf6nhiFvKaQi7FUYLeNqZo9gnkMBDNQVK6Dk"
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
