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
    "51M1viVVL7u2PzPdmdCPYsrdp4QQj2XM3LH9swRsdqMey3SbPmFLspcrFSzLAiAX8gcofz8NYgJbR67MwhwGDi1u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TxXBfBrYKYe7oBjcz3BeGm5DBsSVRcysM44P3Z2kEjCTWD6tBPhAXhmMUsU5Qnqa3VsAWgiF4woqRDx31FSZME",
  "key1": "ovnxvq9wxYFGVr12B95bvbPR6T47Uck65k4qbp1ykNp6k2R3vvE2WjeRUyXtmvoWU63tkjVDtViKJBsyJvzWzBc",
  "key2": "39fPeBEg6cKiWXyBHCen4HrHxPg11S6rU8SPc3hNNHBW83C7kBgsWQ6F1FP2sxYsbzoHA92ww3czBW5FeKNbUcVd",
  "key3": "2XfTUyxwqkQeLumWM6WbnSadtq1y2q95Q5KXV7LKkmck7jwzkgSF42qh1AYu1YGBDBMAV5PApJatJqUGJoojomJY",
  "key4": "vv6WjWLxA1oz12xP3ZjbrtV862nbMPDTh1zfpkk2ez678upYDcfFRKqp7LSaZhzRnxmuYjaFgiL8YKxsDd3o2B4",
  "key5": "4ovkkF6E3mqnXWTjSuhTHXdNCbrAP2h3Vw8svXMXL6eW2N7nxPc7sJCSsoB34izPxPcUyy6iZeiPu7QyyAtrZb8c",
  "key6": "gaUdZ3Jknw7BFjLcwNjdNRa3jMeh22hzVutH5F1krzR5kXCs9rxpUJarHUHgqvUy5wDjZGHxQeg9eMFZw8CrPHt",
  "key7": "2aEjCdU5cMubpAkEvEqiwL4hbam251xj9P8KJGMgWf5CNbyY3EUKLxjdRj4TFnU9rxkK6Xus47kQ5KjpYSzkZKw1",
  "key8": "T8j6TkxydunwgfBnZNHxuZWS1nWk56pVZeJ3VQx16itKNXkoQt2DeEn7mRgJhuGacE9LQh83byPhD5oV8ELwUoZ",
  "key9": "3rrj8XFB1qjzX1yG43ZUDXtfj3FNjk2s5TnMjMenrv7ZJ9mT4gRpmhK8jjp5S9Mvam9rtGBgHm1YF1zEvKqUdfMo",
  "key10": "5KerGXXqsCB1BKpLVDx8zGzXJBFqaBhMFNUGPJacMAT6mMncXX9UUTbBUFeLpxmAetwYacTgwEZxPNvihqzw7xrf",
  "key11": "13RRijSZ5yWjafJ5Xi1T8tsDGKV8gsxJDaU94NTzjW7Y9o7dJH6bcck5KJwac9L3E435uf7x2YmpxTuxYLuZpNM",
  "key12": "4dAEpKJ4cC64DEPhjJVYGXr2jT5dPWGBTf9EbcRs8x8xMSrzEPPaEvaNHQtciRcJNi62iMuQrpmBsAwfnCH6tpQU",
  "key13": "VT8rRryZEJjPR7Mwht4jr4D7P8HXPhexDPtowwuzncxbfqMLh3Yrgeka25kdgcMYHKsLMhAPVdxZyrvmkia55dm",
  "key14": "4k6Q4JnyoDDerTiRqHLPoHuF9e9wQPA7Kh4QBwfVUKcjRmE3e8ThYr5cmJyMWj4LoA6Ee8YxAzXRgafbBys5FzH1",
  "key15": "3Hs4Y6mEuWcdYnAnVKntbpwEw8WL1pfXn9ZgPjAumun5KX1u1PcJhGL4VHmQfBnVhzaih6HTuFbBtSAnoA6ahwmV",
  "key16": "4umVsAbY8EXaqfYNHARCWytuQqEYrLunpgW2AS6caTqo7jwMvB4BDADbJKeHWWkB92zrURLbpBuB4HkvBXHhVXBC",
  "key17": "4JvZeoW3owBtvULFVHrx6gB5QEhvVfVjKSCUttD37wK9VYvikpwvvEZ2pc5w9FsgQjK7XFMgMwTJNxuFe1CPDqVv",
  "key18": "5WbWGc8wXr1JrNQ6g5v8FfQRpvntUAwt8JrtuVdvRia2oLqT3gphETjyTqk6fYKwH4makwNpRuR2s6aEkNWkW7AH",
  "key19": "2mz46AZUBhHJwDbzrdmqmMUU9jrBgchpMWsQo5aF57VyVe471QmsMwJEFasdUyJF8ZVGJDVx1GN5J24uPf6nJfij",
  "key20": "5kaKKkR9QoF68VN3DW4bEA2HYrdyufis5Kp755j1pgxriTBqBJQ2xxcmYmsmRjxNhv3zQJNGFWqsZz4joxeCNyco",
  "key21": "2tJpgf8fSL82rA3Gsfq5BeZ8akPs96UnE8AUxab9skrkEPsprzHWHepazho5QwhPhCPSevsyhmjNz7RCEJkynGd",
  "key22": "2Avcj4LQzRVAoSbZpqQauyD8ARi15aWPaaLQ2VbPVe48H2efuNYDRRbqEgK7bszmW9CrWC279NbxkQnXe6wFKYtC",
  "key23": "4hAJJqsuyVgCSHABXdMXE2y3T8ngFLosaB4tQz8MGZ6fFJ4MmefKhXyQ6bKd8u1LcFMYes3L9fp5KWoVdTK8MCZw",
  "key24": "496UAYuHeVAPuToE9ny5wrZF8vZkz3CGHUCkehDr1YFEwvs3rauJqsAbWnxRxcKnwUSNo413jqhcEtkCerDvR3Ku",
  "key25": "3ynYbbXKjBymUbMHa6wg2V68pWAs7rJnnnDwwEfn5LV4sj81MbGtFUGrDZRxN3xe26yyxANp6SqFC4dktbJFKSbr",
  "key26": "9pKM6mQYsWFSDQdngjtbQo1gbzcyJnZT2aE3N3vkb3NRyzSjGJ659QXaBrSJMRhZEtkDVS1t3otuDV6o5zDktCL",
  "key27": "Z4KoFscxTwK8ByT1D284VQFVHaBuj3cMH3KTFNPx9JZBSUpfekdSpLhvFrzsKgTheWG1weWgNLwgZudtEgbgxAZ",
  "key28": "3S2u6PAKqymX8WLDYVWsS48YfqHhyVxpbUYUREvKL9zVho2jruhmDAhCkggwKhw6HPbhg4XFpQdkm3USa3zk4cGS",
  "key29": "4r8eyNg4sgihDbvQx86h5nWxtkbwm1qkYXdhmy5QLCqpZnA1KJpnScq3tv7vHu8N8jv6k5M9yvzVfiCimPRcLC36",
  "key30": "yq2T9zpY4uifjyHgPUsqt2DXzHAJc9xqfET75uSUjHuDZSNMfouSVu2VSC2h7Pgshv95M7g7cz17yw2h4aMvm2J",
  "key31": "55hKosfyv6dSJZb95MnVuRNF6EyRJ4wgMe4wrnwySYnozmpC6Z6CyNqw5GFckUaDV5KEwvbYgxa6MwZrHPCkrYsG",
  "key32": "2JerLWNc8Xa5YRC3WaYQHVhNJKmf6D7XAmtGsSTUQijGjMBCKbPcB46LGM9Q7QsczsDRdNciSdwCbHEBUTZaDiSw",
  "key33": "2mrYk8iUaoDzs871eb2F5L8obxaRUYwHHJxS4PV5qT4v3dU6Fv4bQc7c5kk22tFAewYfzx8S5a4SN4xNSH53sNVn",
  "key34": "5ik1C6DstQY2Cm8AGLJHSGGbURKH2Zdzkkj8g9W8kv27y1Yi1XKNLtqws6jTnoDtTZ8sxyFb1j3no2yrWGwHMYDb",
  "key35": "3AVSVqPivkjepkoRsngVrQ2iuZykMZxbMQYQZqV1wGFZTFjWCmctfntZsjzK53DWDoNCrNacgqrAotbXNcHZM7YU",
  "key36": "5QcbFhuukFX294j3G1G7CGPiXq3N3yBm5jsnPYuHPNeu6ARFsikawTokgTYxMS4om43TSwQ9ZqcZrvqcyWmB6hKW",
  "key37": "2RBGtbDkiMEnmhZifCpxyzcEjVPwUzDjTNJkueVAbUEwsRwMSTeMVF1urA9eqvkJxvwkdB63PLowmCXN9FzgNv3R",
  "key38": "4XdpVkL2RM78uuweDj4fpyvmwBuR9BWH8mF6Yxk1DfJCjvWeqtQHoS6UyiSb21xJXppzc64vtn1KRfRoDULGZmbS",
  "key39": "4ufSD1y9SvGHQJmtVa2hdeN483SzeCjQqSmDTAwBNrtnTXzp8poM66GPYhGwKbRRjrQPo6V5yX8UFNwd6Kb8Ec9T",
  "key40": "4esiqH3pvDxwqv4wSTChiHGjQgoTBSr5xnYNTX4xBMkwuYnxoTt4RxHoRukr87PMrw9wMrHqFU8smjtgq4AbcZ2m",
  "key41": "3zr8CGQW7PE1VmV681GauvpKH426BKFj2SinQ7AjPnYz5Y58SFX22R3S2fsNEb5Kvx8MbrPobgKmRBzNk7gVJccU",
  "key42": "Zm3fFbnMPcs5pTsQqc7nTnS2DGdttr5QaaCMAHqsVLrjZzFdW1DTZUYuKt9DmMcXVYDY9JE2KU82E1X7YFzAd3V",
  "key43": "4osQPYCgyuzeF2ctnPiB7gKXxUpdny5rhcxQUrv5W3QnpXatGWPBzpKmRF5ui5Nw2cYfE5NP2qKsZFCJ2aG1pE3b",
  "key44": "3ubdWe9VPhnMVTYHcpwJCT9Z4KdiV1dXjG6GhLGcjkDoK1jmq9MUp3zZEhgnKNKjKDJr7GEce2jX4rbkbNoYJ1a2",
  "key45": "46fk9vaecvTKMB4H6GfMboZ5tgSVq2eyeo5eDqEQGto3DtNd1iRKkTfNnew1njxCXw4LUG8AWeXZ3oKZGyNdDH5b"
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
