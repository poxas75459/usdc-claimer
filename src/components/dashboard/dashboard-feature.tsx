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
    "qU11RpkEZb1hSC7EA3FMraqD7EMYXiDgDyBFRUGgxsAZk6QTjykRuU27Xbma7Hz1R9zMQjT9kEb2gbcF32UQnDn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Sc958bzkpigBsNyFdT9AHyFbDTdiMa2F2Vhc54NvRmfiWYx7agoTZo5XgbDRRLVF6Js96tgJYWewa3mZ9mbDUJQ",
  "key1": "2FSy9EQ1V8wxzA83FL5AGkQFRLzNEzsxgQorrHactF87H5AqetyW6iFXw9uY2BqUT5ScRxTm4FzXNiuE5CEg4v46",
  "key2": "3NbHJXNDEy9bzV74nCFSzKGhwzheeqEgayGwifDnQxsFePbd14sGUyeuGcdLYcaJYKHptt8vAbDEANw9KFAq7Ux6",
  "key3": "qaRAsokg6maMB1sV48wV4g64MHWSYUrGTsh6Zk1sfyKJzX6ACHJA2qyaYMmVStgJ8vSG7LMoh6ALMgLDK9XYYdK",
  "key4": "4iFSnNLAQZxybLBA8H4Tj4AR5n3HSVEpFu5M79xEa6vSAJVpriMbHv4znDiPb73iuJWZ5gGRaXjBJYTZUhq8KA5",
  "key5": "U95fr6vSvRF3uHtyZ3yfaficMb5BgGU69Ejin8ZR9yQTchLtDcpU44GBbu6n5eTkadjAiytCsRoDbxDpeseimXp",
  "key6": "37aB4PBhHqE761QGRNLLJwttKJfNaE3Fyh7CYLhoYsKtYRzVgpUMmMtuKAjmf4q4tiMC3UMwVPTJ1JpCBw2byZzV",
  "key7": "2H956FQuvHeyeueu5V1YayYsUouBKUu2GDk8DLCq8GUP7riZxXfZAtopugRvEYixRAp8rLzZeWdoL955MZPvzB4G",
  "key8": "2VMSF9KTgpfoo8pMv1htrF5TpYioRVRDD73s6jLrJ7em84cMWTttQeKAaq2DFgHwP7Sr5rSGwCBSuApmABvPtAGL",
  "key9": "fmg9c3fpjyTZSV5GN8iJMbSbiyMZfHEnsD9p8jHZNepmYvF7PhmrcPTettH5ZDCa253jrLtH4STmLp5AuJcft4c",
  "key10": "4wEfGbzCfytcP9xckEVZSHLgzU9tPQHvpR6ao8PVHMpKoSHXco2EFb54sPRDNDxZ36ucBm6Xx7eMyE7hLNLFCoz1",
  "key11": "3w5pKcWS9u7PkyJuuDkCDRxxmLeb9EQRMJ1cJQrFQFmNCLk2qN2ZRDNbXVwssWbvpLjGGy52GHTeFYceZETZqz8G",
  "key12": "3jdEbcGBuU6KVAEf1CyVZbtCoGP9qzWqj7QXqdDVT5Ft9LCeSdCDBjMDuPXBuBRdokGnkUPA7kNZ9otiHSZTVTte",
  "key13": "34Nwdoi4CxMgsgEm5t1jWCYEeBzwYebLBpnrePXnmy6Si9Q98fuX7TdyAqz4VRJ6wV2gs4juQB94diUb19wBh7Wv",
  "key14": "2de8Xyw9WZLRUcuVqyDkBQQe8ZR9bVWBnwdyEXj3KpsPua59PzMgxL1AJbnFguN53TkG9MwH4Vrj8rdvGYngBgkc",
  "key15": "4prAJnbgQLjcedyacRrMtzHWaGXDCwDaTWC8meWxsBvBLLMEVfLYYwWPLDJr4eA5CAAkg5wvwoN5BmRtH44Fceuz",
  "key16": "5Wmynkp12RMTJ8mK1GiacLxLHCGVUHJjxm5c6AKqoP1qZgNemsyKKKwj9NA1ogx45G5Gjgmc29AT56GPashwUsGh",
  "key17": "CQ7eHXnoVUf6ghM6D5ABUup9t8DEeTrwQaJ3BDno9EisnFCYuM1kLWLFAjHdPkKagpBGNgY3HC7d3eWpGcppPmQ",
  "key18": "gxp7s7F85tX7kUNo1KZxsyYXQ7r9VDdbYPTpMxEYPqjbKAjjqR7GpTkXm9hK8m3Z3jYJTGE2HAwXrHDKbnDsTDn",
  "key19": "2Syi98LT6tJVtgTuXA5z2CFbHtdARivtfvdDeXA1Y3XzNsZ1MPTdxjb7HnQGwmnX8jfwj8du6av3qGzYBi4dkovm",
  "key20": "2pECQbH7tCroZuuULVTRHeYNF9NFqEFUXesn6mEczoaTFFnnfWVMfDp1jN38eTexLfp2kXjiGVXtSBW3MSmTQedC",
  "key21": "5C33DHUeH9o666p8rQXd1TaHiDZHFi96VrTEA9qJ8Qu8BAzF1YCoYET2JhN2Zc8C9EpK7ZpWgf4r9mzuLpMz6m9R",
  "key22": "5NuXkyXcWa7xJrTxpTtjngmaLPpkYgJmiEVYS1zgMEFmpewzAo4TcehrTWLoTPSxhucZmzUuyoDEHw5HFFHbT2AU",
  "key23": "2T9DXMnaEANxdeG7rvANcbvnjMciLYxcNyZEPNS8gkuke1Aka1rcrCsoaLT7M4XiXmZ7mhAhdxP7jrkJNeQQMjzh",
  "key24": "5a77QvUsc27McHsQa37LpFKPd5Qp2DuavMSh77ULL1GXSYymUGsdax1XdjaHtozk7TGuMd4MDBRStdBRK5hqczgY",
  "key25": "5VRak4GcDVAdAt3VxP85hUDbZaymkqN75RB84cTuMVrHdXDsZq5KBWZe3zdKPiwTtnMgYaLZUqFB7DhBKXN917uX",
  "key26": "uQBteLSS9wFrRVpet5yUzuBp1cvx4JZtxy2UKvo6v722xem3mQuZnQjQsHzunn4uEUfrBgaAeethj55KS8iYJ5H",
  "key27": "oVQpkpbeye2m9uqUHx9JJWxYkTX4YkjsyHgAyrxkxuA6oqtDKGLuoaq7vRqvABLZ3zeAhLZroipQUrSpxJxZukH",
  "key28": "2YxJiQP7BvNuckR2mxPNg49uACzPTm3pLGdML32kuJhaLX6qiPQratieeLoTovXux4PwyFjVvkM1WUYY4MF5SSJa"
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
