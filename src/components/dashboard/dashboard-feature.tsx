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
    "3Btw9hVXkyrUK5xenWA3CE892k8cmAW8DJ7wrMqkNs4T7k3i6w6U49PvPpAQmutW74ri622s1Pn1xycaRqTeC5Ck"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52LEyCNRjFFUAa5ioyuqqVrumUsjuQ6PuwuFayiW8vYjn5LheiU7FUSU6MZUNV6JxMtLYUWhRSUjqSywuCLsZWmK",
  "key1": "4akoM9ZxxG6jzvFiFosDVef5BUqyRiR3pVaYzZ2Qe9WLwWk3SWTrpth4KiuepmVNvV6pz9HyuTEY1BhXHZpeh8QD",
  "key2": "3hJg9wzxQ7kvFtbB93yeEjj3DPHYsSHSNAPZuFpne73o3s6qGXsEgabY7aYzmv7YEakfwehHcoAcPY3Y4aRr3Dgf",
  "key3": "5fdNCyYhdpZUEtDQR2hb9QSiY7YJF3BoSf6FNryhFmvGVTC8uZHtZ5RrBVXj8rM6rpSchJAM9yHbg89tiiHXVQqe",
  "key4": "4q859ngZTp8DJK6dzGWPLK5PBFRZMHtcs5ruzZpkf8U5iWWgSMd2aaXSjheUk5MMBY3xTmg6LiQzX7DETnXkgwYA",
  "key5": "2mxh9KUzCxqMTtkwZMBD9VfKyZEGsCdBK6PHjW1KcYRSbWCwWCBqiJLaj3uUjSygN3CcjpLhpiv9w9pHdvEsu8pd",
  "key6": "2b31wGmdpvkYEp7jQBseB18asjg6apQHh7L1P65fbsFb37CuC8oCvTgGJzV2kdKbaWcsitNVxrH4i39yd6VtvpL9",
  "key7": "2vA3mow4HbCeyqt5duJjL45Q95VBSZP3sNWVPjjtcePSb69p1roLso1uVV4RWfLHK7CEYX6sTuJmBfM4mfPEZz4r",
  "key8": "5jeXMYMVz8gSDs76azonkxFKh9PVmxBBZMRPRmh7in2iXbQ3YZ52stWS6tgKkwc8UgBhn8L9KXx9znkyE22wmS71",
  "key9": "57B6ekKDTdus18qsV4fodaYkn2WGZRvBaicSCEAXywcEaZv3RGtvjYnJ2e1zxyJFk94SJMEBKwk9XCpNg9frHN4x",
  "key10": "3ZKM3kGcjnbiLVa8F96GNWSxwDRQBMQ7YJB4ERJxwto5BjqsZnyvGKZXDg4doTcXrp5Ert82DZMaqdu3Zz9Xpa72",
  "key11": "5SZ4qGAQ6DhCqaDyfepUUhjtXr5iS3wDrFJuFZwTy5wiNS41zpu9NmTjbbQzk3RfGMju8uY1ngcAgZTUgLYidica",
  "key12": "3QThgkU7AEYSHdQB1N9rbm5R3hwVm7eHDRmVDTwzwBHMK2omyR7jeFtDk5YPX1aWJHcBu9nH6gNsBn2VJd3bHGrk",
  "key13": "4GvpxMFHo8y4SoZgsnqXw5vyg5Qj2fHhGvNPg3ZmVmK2Cy2FXpwe99AQaxW3voXaM86yEuodGfdPb2zVeJWQ3Pi4",
  "key14": "2uWJtV4T4TsZH6F3Hd9NsfCDAqsHFfzPQqNdjRr8bMo47gGyF1ih1KP2g1jLvTN6Dg5jGZpQVbiKoFY6z3h7in85",
  "key15": "59pkPXZDyfB5hrLY7RSi9PnzzA89uWyfxNTgLFDZAKqPk4DqN6MfeB5dhyyS8qb33vbYupSshwXvg12ETX8JXEe3",
  "key16": "2gEJYR45nsgCv1wkynEFkTjwKsLuNrzsXBF4ou3Cu1a5bJFH1i5tz2yr4xgWmJ6RVMzcEzW6QswLhVwn9qiXb8eh",
  "key17": "2u4qLjoiEa3rgeeRu5HzofdQEuDzvcrbjW2xboaKL9vPSYqVmPuqceDKdVLQ7Jrj2yR1tneafHCpPLisw5mdPY9r",
  "key18": "5agH5HwexDWZXdfxCoQtarHYuQ2W8Lu5y2oMz7M9arQ6rMMXdUkhf91umaL1aRgF8RZ1skDm2AbK8cjceWL527qL",
  "key19": "9tnY1siANo13aNBoK86CX23t2cLMxw4XGxRv3aAFTmmVsFjjEXnMyhTBPQbmVcxDFynH9bDRzuyBqxuY52WEBBE",
  "key20": "5R8tRJRWrcgBEEStZ6MXC93JLuSDZwWqL8JBP693NZz71k63DAszBNnmAJS5h5j4wdvsGgetxsuWCAQLRu1Txsyb",
  "key21": "i8pUytUAEUGQ4CRCtmLDaEvmxthDVhopbEM6tfdBAFrv4d8Zqa9QUpnupBYZnyxUPfge1uYiwrGtfriDVy6X5PK",
  "key22": "5RrNuqpSyw2as5RHZ2YZwD9L46VJ2zdeq1Nzt1EYRHKVgGQmuxkhbsWivT5bVJMbYwnmKC14KFcdCkvtfeBkYiwR",
  "key23": "2CS2jw5cXaiAhZYximXCHwMEEExbxynQaurVSGUKNSTby4iwWSrK4ExuG9ZVUGyKBFVccF6yTq7uhfeH2CxQT15m",
  "key24": "2QEqiEHfUhmiv1PAHjL97Qpr3CzcX5MRoPPzmTXmcDDYjZs7JbH4dgGzTkTosjEURJm9Gqk6N2ie7uzFNNQF1veb",
  "key25": "2gipJdjtRhN4Jdm2REG1afzGijYjY6jNkFcDXNwDcZU8Ty6kXpQWKYTtHV6Mm7nAss1bgfkxEFGvfqHqpxUiJGNx",
  "key26": "62XDNaxM8hkavwp2QKQZJQqFWUWGY4VfLiR4PMbYtGqfPyJXLhJ9EufyVEjSya4EXDNjicYByNzYrLNhHvenuiYJ",
  "key27": "3NJVVD1B158ATRP4guPeyq4oXG85iBb82q8dFBNDzviUgbU4R28fMdp58YLGWiwQTt7t8SDPgDiW45cQCb9Zsg6a",
  "key28": "4Am42i9RaMW4GhqVHcJ6LyRxHg8mXWfRNxLa11Vxq13CjuNfRSL8JQUA9AbHH6xV6jro94TmXBw4Cd8RXNZr5gNy",
  "key29": "2JnwrPUWdUMa97xbJAzfhv9qggLBRVPAoDYDP7Fxx1M7SHteXLcqUPAfnBYhEokV182aJEfxLUk64JEao3Q3TTHT",
  "key30": "xB3m5G7Av8m51aQeYWFJfJ7zREmHjB3oDdmYLmbnSy7zNGkaE4gRAvdccMfrDxXmyJzcMc8CQbrjE7PWpJ1iaFH",
  "key31": "JY2geLS7DeAPYtgCfviq4mP7Ukixka751YXywYGnebAiThiNubgkX4vY1oGCtp1dVfA5x348fyzHWcTAFuU8H4D",
  "key32": "4XhkY78Z1Q6nDqL9vRvhQmJ4C4zVTUCaEjxMXK8XLreCFE9FLPK9KmQWQcvTKemH8iQTsLjfoqpxPoxY8f7dKkgo",
  "key33": "48sVaiS1fognbXD8PP2syjP3VjtH5neXJ2E8D5TrGuxR5fhrbhpkVNkTbzBmaFHHQ6HZyDfAXDK7fZFRiuccuwnC",
  "key34": "5n8FEifgZ52njDriGCjiTkNjWcDehmLwCoWrG3xZU6EnrBi6BNJYJpZ6ehWRYfWFXnPXY5ypFXhGkYndPyo3BZM1",
  "key35": "4qxkgvuvJGFwNNVwgpC2Y3mJ5rx7gX7CUrmQrZ2TjPQW9EqNV2LmhS3adNvotKXdahckeqXvowRH2uCPu7HXssNc",
  "key36": "2wkPBDsWhqw6RghaaRZJdZSr2qBptQKaBEjD1aMMS72bZr8wzCHW6MJyimLRW4dv2VxcyYoGyuQNfRvxQDdDyxN6",
  "key37": "4wtQUbuFawn1PPDycJkCXbMuCCV6V2A6mruYAyhzyCqZCNEkjFcNqATQbs4TvTNcJ5VevFwEWZqd8oXoZLSDnemN",
  "key38": "25gRRU5ATECa5n49X9pni5W8u7WXE5zXTsVshXYEc1DxKF7zykBkJEBgBofxE5RTJrQMzyXHyu8iUNt8aPvntjzT",
  "key39": "cvnR36eNgpx1uLjx36FY2SvDGfLjnECjTD1XgTo5oKEtLuWFJ5vFugXxs7Qf8HoK5H9YJrBGN3763WFLcnKteW2",
  "key40": "3Fy7AbdJiy5heG7mVpNKejB5oQ4V3aC8BeJritd6no3Kx5Emys9QZ39K9XDnx2dQQhaoeeBiQ6LrX4P8HiBSqnGa",
  "key41": "3NV1MinCgeNN2533XKs37xTVBh9nGCbURo9xTD61MPhYS46jFiAMWsJQmkbJk5i9p6pXX6RDs7ZpCrbETpXjDDPE",
  "key42": "2Ne4BthYb4UQpKzN9ZxcdcjQntAN7y7FKqZfHe7jtZPcfpsta3GgUSbw7qdWRYWrScXWmkkfRKAvZhsnJBATaQk1",
  "key43": "5WFQqSvoxyHSEQXc2fdexAzHeTP5drFksRSQjTY6GUHERDT8kdc1hFJWyMmjLKn7vVdgD69fs4epqHUBLmRVeyuP",
  "key44": "44g6VXKZqHuQMTgDVUm7MKYjB1J4L4sz7aTF6cPLq37e3TWEdUFwjEuyRk5EjGq9og2sRckPi3r2CKJqcxENeMkL"
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
