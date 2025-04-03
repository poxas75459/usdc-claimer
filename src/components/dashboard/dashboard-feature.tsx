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
    "4bhJbeXXxDqACeVReu7AB3zBEYkK4ciYan12esCbGeaVHucjaPvXDQctNBDWPJ6JzttXvLAbdKJ3E5hrM5KMxhUK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eudbJEmkBzDZrWFQLjRAdbopQCUVBnk4dnfx4jf7dS8mUPb47JpYrpyWiPm9T9XG2yAv12q8sV7iHrCuAb9Dqh7",
  "key1": "5btrv8YsMFjaGrkpx2NTgE8H5kn72prtkQcRxeH9jv1jM6N4VbGdMCva7zrpTNBcobbHcciNM6REGaLVCJ6taFUG",
  "key2": "5A91jRgwCrGFYk2MUcuxmvnFqoyni4UEs2CCxYdgWKSCZ889jghJKXQyyBvDLoA3a9YCYqk8B2CbMXUPnUzPbWBm",
  "key3": "4u6ookesKeAp6gshVY9Ed69yubq31Zyp7wAtW4P2NeBTPR8CkwL3FqoNAWed7JsoYV3n1DceAKiYjv7bXbaNz9M9",
  "key4": "5n5RftjL4dfncyt4QfW5JRtgwfvdaPERV2BVg5fBxT77UChYoTjVTB5Lg3kpfDWHCw6CyeA8AwQDDzajy4EtsGgq",
  "key5": "2dM7szHhhKCnY9zQNLRM6qfy4xytjTVKrRiJbYse31Af2rrGvvQ3ST5L8Lc5YSdnrc4YFVo75VXRb4D6cpzjEcLQ",
  "key6": "2hZk5yHKushE5DYN7LyS4nnHU9LvbYaRtinNHfiBM4g5CQo2CektnuHL6vWNFhsBYfZ6wzL6WMZs7JZBTFQUg8Ls",
  "key7": "2feTU1QaWBy6bWJd8QpuMpWcanAwCTsucf1Uy1uWG96xYsKLVPpxfGTKFe7r8am7jyBc3fiCc4zsTXjYhrmG2frt",
  "key8": "5DH25ziJo6t12ehsMhMtqm4Q7ZkRKUDR4BYgieif4A7DdMrnx9k8N8AHuKBy3VRXugrvcdjhrRYcbRadkhxCYBSm",
  "key9": "4z2mx5p5v1uZNuoXKRTkFyFjJYtQumnyiwZmh6mq4bePnGNFP3LRNB4gthsCkqUdnEhpwnwbpNgeiFA9K5UXucSx",
  "key10": "tbst6YBgBESXuuGDNtXEb8CjJpHswk7HUKfJeKwPYYfc3QapdKpXwXc4f7vrXd85hJCq7aWKx2yLwTFyQVRCLPy",
  "key11": "3MN5YzxXpBeErDX87vW7XSvw599hQXJJqckNBVrx3MXUgRYXmix1hPbmws1V6QYDyp3vFry4rdeBFSfWLuCQiNtr",
  "key12": "4GGiFQdEa5Jq3ykvoqdaAAUe6JtrBViXHSexK7zZ7QtFnwfLopD6atqNkqbaDbBe7U6iJpWUnSu2KVNLs4YhLNts",
  "key13": "3PkbdwGsbfbMHcJBnusZPk1uakJj1vuEcYemvea7SuP2GdfbfJ2XDU8R6p25GfKWNBdwGNzt27QY7Cy8ncWgaVLi",
  "key14": "gJ7k4t2NpQUt1beYe4zU3uuEGgKhhF7ZJaHzoZ5Qh4YeGHUfrEquk5nZt58Pj6GJ8AegmDV48gbZLKWkv5L8ENA",
  "key15": "5XggJfGF55uFEiwDZ8Tw1mjyHMU1JZg8aiMWRJdu5sYgczpcgfRQzC4PqLTpk9beLn3UwKPWJFC9hKazsxy8aTxg",
  "key16": "2amrbSzVpnjyjEoLbYNhQv3H3rk4ZFrVrr3FeCLicGWrtUnzP3pfoP8RVhgCZWAVY5rAfhNvrh4A19wRSMg7oD5C",
  "key17": "4oyF4XYGrJMaRHPKCnCc9B99tQZz4qEbiWG5UMnW6vMm5dS2EXB9XBktA4kwo2cxK9U3PHdKpfFNijuK5KLrsLWs",
  "key18": "QXizyY68badkP7WuAF9v9Ga7hu7JrfiERbsUGsc6xnHnVmjr7WJdK8iaAkPks6vpGnPsRdAcYiy3hvNuEYXHjMx",
  "key19": "omwFugHDtHGsiDZLuoH1jq1vaQUB9unMEkWQadF77oy56XWshc4RF67GUXEnJvEJ4sVjnmvR4i1xQxS1q1nZLrF",
  "key20": "4qMfVmkkXCP2aUJjwzHbQWyqfAr1g2gaqZooV8z8uJpwfvhpjmUno7sBcSy81MgRUCvMjPd2U4BPQcjScSv26kPj",
  "key21": "3GHkMiZPZE1MQo8mERp465kUa8heDNPVgy6FC6NnxwtqYYeYpkHA7nqUBa5ey978NqJaYix4BGtPd17nVFDN5TL5",
  "key22": "2ifgGPcTpoRMRFSjeSWnFraTbxjg7yBi3qtsaSb54CjuH5yoDLW826C24ttpgK2KEPKpU6MpsJr16wvrjaWY2kjR",
  "key23": "Vp9b3UqdyfW3GgTkqb2L9WGJS9KEksGqF65QJD52FcEYfJipbn6b9geiwFPnS4h237RUTv67rTofbobm7BaTa5u",
  "key24": "5863JLUC3TtoHDpJBikFJCvz2bAAwSYcP3UHMCqYY1LRLYRkyhpXf9ihgC5TSM3AGjBwTV7RRsBS2R77poStUrrR",
  "key25": "3dwJankzM7aT2hUsDgKj1KF7VAYiFm6qCBTpfHEm6DZBQxhqnDPq3bU1MXi9K9w1dRpD5Sptsgn5A8gbfAoReD73",
  "key26": "VavRfsjDJrQgE5PqUpwc8qYeXV5qJDbTfc5sHTuCZsjqmVxMDtXrw1MJWLEFruB9tvcthczpHJCoQE7xHuc6V9o",
  "key27": "2FhV39DY2GRvyFmSZdbdvPtec3SJG9Pg3HrFYYZ2dkTMnMhd3P8do5tLZPkNmmPX55B6SDJJTx2LZrg6TCKsPvqN",
  "key28": "3kiz2KFYngtiuSWKMHaJ8eUUxLiqHysKsapy3GRhLEeoAiCXA132vfyQewX5UUsDZTbMvqsvgKGspCZ5zXeazq2J",
  "key29": "34yBY8G6aH83TXAXKaAirHPU7YUTXtTgnjNSKnbhDUdHHUsEfgJxZ1YdeLWLofAom9ChZzZ7zV94TGDJFr3q3DT3",
  "key30": "56EjsbSUi6GgWbpM56mnTfW2hDeCAS6LJk22bVt5p2SN4PSTQnA8dkQC6FhSMgdqESMeUZwPFCTUiBak15ipXTAS",
  "key31": "3nMcainJgQ2yZo8NZoQ8tD9czzrUw9Uo9o2AFt9qZNLQSrwW4pWvxVZPUpwJhrJFMsFc4qq6Vz45KcyrErCqERrG",
  "key32": "c3CWPFwELmJVnVqeqwbEQtm1mjnDhb1zZLXMCU3x1JBxTMYT9RBCH7iN9kDRyT9cUfV9teGh7JrTzZFjLSWpYer",
  "key33": "7dM7yne7nsxTdJp1pA8bTykcbaVxiFZJKx2XVvztudcXEcqftK3Q9ohN8Z128BjQ3MjLJdhb7Z7vvMBoJSEyvhV",
  "key34": "63mX77MNwJ4vMmLTq5SMzB4nu7SLjohVrj5TQWFqwznXWf7qGUdM3fokeRSAmkvQdBTsKxuuuwgCZDgA65s5d7DU",
  "key35": "62Ly3NaBCkJub3NcmxRqq5wU8GxyXHQNytDZJMKr7H5cLrL3KHLfE35ZoG9JRS5RkdRrhoGjmKQtEpHx2o5PgqLc",
  "key36": "3E9FNceEmKcwtq8Y5mG49U77AqMPsVNrrjtetygqReQq9px4AKpT2hcJgacTmUjpPESKG7J2DibdYvaR18dDmyRm",
  "key37": "5Bz21xCLstRgveF2uaN45sNzMAnuM8vH6rA2cCP2F6ZDQUu566V1LEdBYs4UVCYDRdzJGMYmKKe4wvxTkryCqhc7",
  "key38": "2mdxtrcATLMKzwtSKN8tmfKbw39N8zcy3oTYNLYocZND2UHe2Tk1xVeH8GEXyX4ieEDr6eJBnLB5cR16SbVcvjnY",
  "key39": "4Awt8Kt1GvmzLxKkDTHZSGD6xA9VbxPQ7k8pEwNW8b34VuYFtngx922k5xXWLURisvRJrHsv6TeYUAJHQzm2GxLu",
  "key40": "2AXAmqBqc9KCEw6dkgwsMhpz4SzH5rMbnRs3Y8oFF85ysNb8MdGVVdEi7vEU9D6EXj3mPQfuKXRbgKK7F4Ha92kC",
  "key41": "4kkqkUmmVjqKDisKE3aRCJEdMuuJVCCG5LxnvkYgF7HLdeDWgvA7Nkwx9j2SeK2wk9o89vC1ebzVWLRB6PkE96RE",
  "key42": "48rU2mfSCBox94r8YZy165vA77V6UngYdZC6JPUbaMd3ATojPsx4D7rxLiYGKitSj3gf3aGc9BFuny86jox8FKgN",
  "key43": "4mi6MY4UaQNCpKh6uoJEKxmmgKV89LMP9tyM74TNBkptMSomaVWDz3rpNd3q3AhV4MfVXtANVBkfh64qGP6x5h4S",
  "key44": "5rtDfvY6yGicPgj2awPez5GeJwExiRQhsEDiukGP1tttB2d8VXR4ZSnC9dTWjXGGGvuhmgwBmxKrMtDnCuyZSWvs",
  "key45": "37TNVXoaZD9J74ZdaiiWDBqQka1Gi6XpLRZuxY21g8TPyucNidKJmbC1eT8DcnScdZCM67Cux46xJkt9dktJztn4",
  "key46": "j2pmiZHwG33S4aH514hg8Hpg75rywbUNHTALgHFog6mw92FNqBgWP4gkQzzpEBxgmscKynv8YPdXtito6yKMhXu",
  "key47": "4wp1KvvMz3qABGyGfjimtKVVXdEaUkQyvPzk46bx27gsR3BF2eqFNJC6cscxsdUURCwRYjy6En984MWG6ssbJgbh"
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
