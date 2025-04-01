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
    "29WeJqzT6iYUNPWNbFAGCeiwamDZnBoucX6mpyEGhEF1vY2crGdwz4BWF5NfTKKArF27NCUPLWE5bWFpMGzU1S4o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42FYvk6vhdtFggfUfBQ238RmX9eAtNc1edLiiQy2TUH3ZCmZ3f5f8wAJ21X76Gr53Ckpv8g2RYyzX6r2ekx1e9wy",
  "key1": "4M8GZ5kJB9SGvcxfEnsSrWdm77rJZouy7HeMvyJAbnoL4z6tFX1bGCBqFe1LSct5bJk5PTuuW1Hbm49jHK7VjVL9",
  "key2": "kqh7UUaXtE5deeXdpiofk1VTUwFPgTft5Rzo8n5vjTfptZereYfUjtEV4SepWR7cGD5vApPhn5SdZGV3sYeWEnJ",
  "key3": "34LzgkMAhGUrLKUbF7eq1Wzg2LDeVFnGWjuxmeWrhTBnt86AaDwb9FhNGm2J9grL2wwvk2u8itqukFB3FJzSZkFo",
  "key4": "pxeCAa6LpbzcaaNvxVHzBgdRv24wcdbAPuNVk72SYG4nnnaPbWqDPtEa6LtoCFP7UqwXozzqU19TDT1hZG2wjgk",
  "key5": "29GRRAsGP7RwV7viGpFRhpmTHdUKytLceB74f4rzpfZVKGpQgjedtBRi657pzuXDyZ9JG8BLj5at1QeZyfzhTK4n",
  "key6": "UmpMpqg2gFimf1Bdccdbsu4gwaeQ7763sqKYZC1QpboWoZRTXwh6qXU8yKP7MUu1tyJhsccdgMLoxq9G6XLvU2T",
  "key7": "3CLNCScbsAj6NJuUs4EqJbCX2bH97tjUiY2E6mSCkMYByjFdhGabg864oW36vED251n5CzU58V9NQuij9y86jqpv",
  "key8": "5vMFAzoctNyiGmDKMLq3sz2LQgexDdtXnaL6FWQVZpR4kDk2Rj1UuQhs4DXn4wg3Gvpo8uR2cDua1Nh932tXJn5M",
  "key9": "4iTtugpe8PiEpc2mNBgEEBFYonvBELDGKXuDE3RL4bTDGPQDvjuQPS5iHBzji1y3uYDXQsqKv9T5bFNmYWM4WBff",
  "key10": "3XFbHTDPMByPaoL8CDhBWHTNSLqv5ucdTnh6TK6npQEJ95KH7zNQUtpHeB9zXFrsiD5kDKxQf1rJWZnpPfQi56ZT",
  "key11": "wf2vkBq8c41g8k1YWe4kyJFSnadEkLHkgDi2eGcFQjgCjgXwPx3mh571Yu8wKf2Bm97miTDte8u3LDXtAj6pasJ",
  "key12": "4xJxuxZyNpznnn5xUo2caZcsYLuNQhU3T2enWCUnrN4rSkAxnKi1V6qLgLgRJPHYm6a9dn7AeyLUgpDVH8YzBNJe",
  "key13": "5PbKJHmeT99pTpEmRo3Asy4NUwpKwUENkY2hKyWJYkm9HP2BdRT9SVJHqshd2zySH1BqZMAfUPPPXi9U3YWq6CiT",
  "key14": "3pJNQz73bZBjXgocMG5uH8sT7Znf8NBUhEZQL4AnDJzo1qBnoA3xUR6GGR9EbHvfgcExT9aJ45ZFzKtT4XTvb27Y",
  "key15": "3MYHw7QaTQ63LkMf3yb38aXgV58S5SMzs8K5hi5RhbFaMcp3QLDEfFcycZhgRSnDgSrMAZ1qNCx6vqn7vbjr6RYN",
  "key16": "42w6aqFHHtnoAK2X65yQZXZ5SXUoQyJuTKKaXdEVr1CrZuJLvfS9tbcHmtaENrpBqdMYXXSQ84WNK7X9PAj5uZvx",
  "key17": "4UnCbpFgttAdpVBmLdYBXHiKxfxpLyZu1MX2rLKtTvvbpvsaEZk4Ltiq1bo2afYSNcT5BDWYQSGSzSzGVWzvJbx1",
  "key18": "3pkg5aoiJEq6vMiF9pWeQE4FMfR8WG7Dk4WCxGzYW3fAfhozcUVkP8ZL6Y8YaXsdmUcqSXppZVBSmiayWvtyFPWU",
  "key19": "37MyzfhJCPHpKGKNPxq8VXAicqfDRGbg1zFSwMdSDjQ5iPBgJPpsux2SrQ4ZkvGpkKB8trcwCB46AKiZdaFHeTHs",
  "key20": "63bccvso94h8m6L5kws8uhB397JWEFHBux8t3k4pQnwv145VdB4Er7tC1nYu94vZ36w2WaiyWdnoRuD52xvjgJd4",
  "key21": "45vraZ1Y9qVRcPhjDVZzh8TyHfY3x9hmDDjeSjCEhvxQ1qjku1LospNQtwBRp9R9U3eLpQWyiYne9nLarmiCE163",
  "key22": "3pozedCBPk4mDbH8gNE253BvfYiTZkUgqCVp57HzAeF5Tn8ff375zPV7gDwdbCMEwiBSKR58pGQvdSmy57sofd7P",
  "key23": "22jr4trf7nVnrxftXMpPtJ8fMPEAuNDzwikvZtBRVQbGdCdMV4hHsoEFqMTLffgFaDBd5vMjmW5FnUk7YvPWREi5",
  "key24": "5ifgCQ1gxifdVytJHxJUE8dS5Ack24Y8NcwguXQQeX4SFydynWszh6FiJfEwHkiaUe3dwbaZqz4jxxBzXVoruMFA",
  "key25": "LDvEVPvebrACERQqRimLeAEeYz64B4n3HShX9P1BiWS3KxKeg8ASbLy3e3uHfTa6fh7MNcjEK6Xk3jKw8mg6Umk",
  "key26": "317uyq3YdidKjGkqJKagNLa7MYSPHKNnCJkTcSpV42FUxD2FJdH8zHZYVpt7Fts3CGYKYVFLEHxrBNpTNfxsHDMm",
  "key27": "4GEPTxMsBdiZzAPi5azQ46dmSJ6Lc8CDDwv7ZTcZ56oxPJwyCkuA88QeFUNc1PuJ1icnLeCwbWNNGZMWmEvhXzZo",
  "key28": "3ggXML298oPr8Ne9WNtLvDdCYg9asUTFvTcuuV6VWLmYN52jZpzsmqjSZYZHEpR4itKxExdDJA9v9DGtJQHagbPz",
  "key29": "52DurQp79xzsTCRYNMJ1y3pdUh6ZrFXdTW8VC1xwhW79mug7A9UUATuZawodn5h4Py6BsSXPGEd8o751zLkMdcuK",
  "key30": "piChtemhEcgmLKQHWdoBFQ6Ztfs2tpELBHeDYC7r9EypSSgjXUJt2vrRkFZFDKXauk1G2226dqiQimCibP88Dcm",
  "key31": "5MYwaqL7iMLhJWbKuESfX1cUni95tjsMKQmsYEhGwHqGvrJ5ZZFysvQ7noFEgdmquN3u5c3uVmQGzSxfFmzbgbSx",
  "key32": "4PgSeGpEy5SJUPqw3H6QVw1wwkvF2yycXC7JhAtGcHqMpoyzobEZdyL4DK38ZZ83CSWRyfSHatvJJK8nkoJC2bC4",
  "key33": "5DWPpchroy1LosajfZ8Gx1ZcDqzkpNfmA5zoDsTtdm86Cj3zkK2UJxVdiBqHiv7Rw7DRbreQ44DdKsmLf7pwKDsB",
  "key34": "2Z3RJAb6exVAVJ5H81xbe29EfGSWEqY9NhZFe6wx2KdcePqn7S1MnSKcYTSyxD7smT76xePiK5waJU4A9NXRXHkX",
  "key35": "26y9Sy8kzXt6xQBnTZrXZ3cf8YwmZvGy1ifxeQjkRQyNriRe7StS4hLWChFv9QB3A7hDViHaVmunDNnEtXTLtFb4",
  "key36": "5f6HeTpk7wVL9E4wkE3Ua1vyFhnqNYcXBWu2ggoMNkDjhi7Zq1bDXAmLhatp9y3iYCwYYW7XxLwxsJuuy7795VSq"
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
