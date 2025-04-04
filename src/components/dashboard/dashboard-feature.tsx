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
    "3mEobFKpDtXkip71WqwdhrLzdTHZSufcn9m7xuBqhfqt3XU22NqMkH5W64aW5k82ht8yBYgh1gH4PR2W35tsZoSF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FYZf7e3bL6FvQ9wskTawp8LptiKgAvqcTC2USQQFMGahq9zK4uJ9GHgDTyFAHuYhUHF7mipHzuCeNWXEZHLfCY7",
  "key1": "4FYAE2GB3vGKru2oVrTAV1oMPSEMbyBCgGxiijL3YCmqgRUutTqpmbc3kU1ChYQbGTafgLBSA2QiFqbc8V1MQ8DG",
  "key2": "21A3rBnPwM5KMAMTaZLM6xgXnPLNVEPjp2eWQ7hznpRudqTzcaSH7ZVK8g4sc56zRBgbsi3hHWQ3msY2c8msL9zN",
  "key3": "4V8v6PqpHduhG6LPwxc3aVvvP8WhmJAZDM1PNQSgXV8C6DuxTAaC5Rn4734w4PWf5TmGDrxxx9jMVjzus5vPCQxd",
  "key4": "5KZYrkCCpY75TGeWNniLQkZq36g2ThD7nVoHbwyVNhH8JB5gEVXizrzFHNBap9xLofMJ85nTHK5WjmtYmeGrQEmf",
  "key5": "4hedoY34rvTcQqP4p8BoZGTiDZUeKUJhEm17iRgU4D84QWe45R5jmXAnFdbcyiWJgbofBfTHnXwrrm9CovuMCxTP",
  "key6": "3MDzyZP8N9eisVB9Vriz7ooGzdjSaaLA2R4rnaocEXKuMutU1yWFHRhXutE2YSYe58nyzpGjmsYU5qak3dY5hCUz",
  "key7": "KCMPutH8Q4SD316KEwmM8d9eZvSmmAxMfWoYHmqj6X8XgQsCdPXZc7ZcNsTQ6iWmNgEVW33JwVKuF9EYwnaE88X",
  "key8": "3nP423TndkLb79L6DJ6anu3QeugCS5bEHbjkffbD9auixg7J6fkGTpFhViTFNkBvSoEK3otY7KkJc6VFeVNyzoWG",
  "key9": "2ibKt3CwAa7nbddcwrUMXfzP1T6xXkQA7S3oRLSmdioP8CL6kheUUyuJWvX7oghf3iUZWYo9HKCdtvPG7RH6EA9d",
  "key10": "38REZwygLSTmT8MpdEy2b3qX5WreqmFbR9eCxbV7Bah1X3Yd6qNdrdvyT75CdTFzkJzV3AufZHAe2CQPemoQw9vh",
  "key11": "5VrJazX9URkvSas8wayJAHTh5jK1cvVuodw31KN1CX51qnMLP2WkByyy7X17Bs45aXoRHYuv3GaCVejaP9EHHwLR",
  "key12": "zpKQR92zAk2Dkiw8ZoD4H9cRAtcpWozfKAF1UGkhszkvujhG9eRYPBukuTDpi1aP6dztGDBNYysr6fDyP8oyYk3",
  "key13": "5GTMUF9Q6chSEynx5qTSbGy48fWXUiJK2kEbqfQF5zgHpKvPQzD3sHXYNA4HiTu5x8ntt8jAnYaa9G4XV6gZmPWK",
  "key14": "4zGyUUGRsnqbnyXTB94KJDBD7pccH3EtAmUY2hQwtZpNSrWmUnCFM6zLmKRoHJeeeMMTq1h2rJpmr7tMVm6Zhex",
  "key15": "A7n5etqxfT93gReM4tntUwW6XN1ZCq8wNmmk486UnZsZJDgEK9i8mNp7vPXEkEcdf5A4imHp5qUsBMrnx7PYHtU",
  "key16": "36bMahY1Vm1xmA4ve2Vpu5gskx4vHF5QAYFAQxu3bCxjUNySkURXDFmwxDXLHDD43TPdFkUTHe1aHrXdXvUy1Gi7",
  "key17": "3gfUxJikYJWR422zA4TWCDeSnc5t8VXE3P6GYc56DBKd3Tv7U5dUqDyKkZBa4g4bM84T7zQaNcj3kHG9zEqtGSSD",
  "key18": "333UFCkJzND9D5PQ8t1EY48R37hVAh24AFfarBQvaUSCxzGn8RLxY9AizRx6gf7wXLKDDsBhp98eS7P65Rcxqk3o",
  "key19": "4NKYHqGTvZCarQ3Fn37JyhEa6UdqtR3C94PvzZCp8berxCSp7e18vNeRmb3zGzKmiC2mcwfpWf9EKqRi4Qh5TW44",
  "key20": "5meZHjA2CfXsU6P3EGr7w41uxywxiQmkrwVZhnWstyUNUN3UvP2NqWLFoFVPEWzZM2JxnCppkPRGZJs3G3cLzkdL",
  "key21": "y47H9TYzbR2mK86FdPp3gnsft6WmzRJDh3Y1op9SPH2wYR1phpDU3pHMFTxqfPPx7wtfuhs8PGtKpRcR6QUxCci",
  "key22": "2S1V614a267Z82XUgwe2imGcj4uCAUUgX3xDm1MZ4NWVwXzXkYj8Jm7vbnng8qB51WdkWeXBX4AD3zFZAY7DE4Ef",
  "key23": "5CjrYjKVVs4jDzSjuL1CnZ6VC9UKNMCPibcvUpwQNL6JW1efFL6GiDwb1MC3T4CbW9v9bsKmbTL1VWQFZLjjcY9M",
  "key24": "5AXdipbapnZiGxeAxnXtNxNiPR6iLphpbkesEf4sywFppAmNdqcVvDB3347SZ2Q21FuYrYYqBwJvyaQQBrw57QDW",
  "key25": "62s39MwJT9wEPZgYfjiUufPpdPXec3gUCh1AQoiPEV5NX3KoszNWx7fkbXK677bYAuWG2KdruVg5wYLF3WMrMwGC",
  "key26": "5LcW9bmh9nUCMkSL1exqtMdx9Q37BuhYQ86gdnazzZEvWwdjwQPETbY8S2WnT7uDAvMJmMwC9WkmZmjWbLYZERFe",
  "key27": "5wvuU197gVSv8pCqMzCprcVcmBYGzyp1QQbSSNKyYc94vjqjP6UbaoMmyTpuGqodSA5zncWaMLZg61V5DULeeiPi",
  "key28": "5a7MMLLYpzs7q312khuZGkUeY59oC59xXjcXCY3nCee4a4u7dcWJCMfCmwhcwP7i4wmPKSmR5sDmwAtRyUfhJBig",
  "key29": "3xpNL6TFK43LjTFYc4QQNUw5zQ3iWAxscX6vD3TTesRaze8CcX21F7KMMKizGGLkAuV2wsUHGxm5wCF2UTHYcS7c",
  "key30": "4ZJ1UgY7viTx5TsLxBgLNq62RRqd8WySaZXQXbmWACCxeQ6u4H9YVRL761XZAX1KNYcaBvLpfPjMaioZHXEjNpAH",
  "key31": "3bmMAU9cHDzuNrbcab5Dj8m4uPp8o7M632XmnscnMpMeQ6WbumSZ3CqsBnBVkcYB8nmcXbiEfFKQ3T2khRdRMZQb",
  "key32": "3mG6fEYqCP4RovdLzUHKxoiqfDupaKFP4HFfVjQtz9HR3Ue4k5y4dCNVZEqqAfhRFu5nKrWKNV8SkhPKvBhMR3wN",
  "key33": "2rsZdmwp3QLzHKP1bHaWxZH7RnL9jxRS6Zsqp6dpycsAMKBy81KvXot8hVEVfRH25QZB6CCkt3S6tJggPRB6iE85",
  "key34": "3dZZSSFcveveDoBvdEjfdHbRodjMksyNmRk46AYtNWAsJokRF6M26G8FoE5DLzAcEvwTWbCcSBZXktJUFa3m8E3C",
  "key35": "wCSE2ZTmTT6VuCMwp8siSPx1RKgdNpxDuNs6x3zs2jiUZP59rp8NSrZZ3We8YEakuTFniA73UuVjvqu8SxnLpgW",
  "key36": "2jDJCKVadA4hWHPkMLTGpJJb2u66DeHiLYLWNc5cejwywy6x51SNaCF6vyuCmTDMA2JEfD4d6zCNmhGuiprQ3sMk",
  "key37": "5UXyBuA8Tnyfqpipzf2LYWxxeAnLzgSPFv5tXtjnnksjHXov5naYNhk837TgUrSvv6J7ib47AcZxWWrP8nkVNLic",
  "key38": "5gpkoeoDFLtE23YJ58FQLUhdeg1ZBkZpaYpJ2esL9xgGKLfqGkGQDz3LR3uGhr6Hy73rN6W8zjS3xnYw3VPmjx6n",
  "key39": "4jotbkNAnC4HdEpEGWV8mjSuz6V1U7TfUDD4oM67AfxXYNbrcy3xrsbULR8CujQFQyAogmAxf1CyunJH2Rz4KE7y",
  "key40": "oNwMVrmP1rabvjtaSR74UHuftTMdic8XN5AWUWAMismZUdBddER6RZ6teKDJK496ZA7hTWt7HyFRGJrnzhKWq7e",
  "key41": "yNUVyuRUjkgY8zmBeP3Mo8QGmJiwyK46tT125ZKn6C2iuiKWWES6KpDyq3Pjez3AoJm84mwrH4SCXcNrEyr8TFR",
  "key42": "toKDLgBSQ5tfrbqhibG77zsB7HNq4B4FnmbFsYL7S5H3jtv9oGaQNHDJKeJgsr7DgjBtjLPoqYCjqZWtVRwMxjw",
  "key43": "3VAft6hAJ2G4MJYLmrgU7MMvxkxxT5Ez9v91WNnCofJavUtgNzJUrNeSHPq6fSVaKWXpamaus5Xfn9E88CVDJ3Wm",
  "key44": "2YXgQyefoKmsSq614zKmicgFmBfXkYi3rLV9ZKS2k9Wv5hNYVcF4adjCRBBbpFbRJSXW579e4viXPJ7YkQB3qrTj",
  "key45": "5RXrG9dRPpaQo5cGXsL8yakx539PbNQy6knWeKXuT2FiEg4hRVevadpfbtKRVhBKdvY511r7Tr6fY7RtaLXhNwcZ",
  "key46": "eKkTw1HKdUPzZNmQTQGEF7291DxTcQUuqg5MFPn26BRnN5RyccBS8XmkGWaHw1EfGuVkKhB2DeWNRJkswF8LNMs",
  "key47": "3YGLeFqUQrJNjsNx9oEdzhkonDXUgMVQrtgeTFLLNFB8mkDsZR4cnaYfke9DeShjmxEW7miiG9BxGELZKNq7efJc",
  "key48": "2eT8H5BawSVpqSbnYhH2SWrwPUYgWtYTXzvnVvRNjTiwJmJgyPbrJfgFotvRaYPX1MCGs52GcR82tyS8LJFbDHnn",
  "key49": "hLGoMcQMrvZUmA5qKXJw7Z2EeTDuJoN2YmW1ZejxrBAUkHdFK9Pk5vekgaEf5T1UwEUCAo4yEH1r7m4F4vMHarf"
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
