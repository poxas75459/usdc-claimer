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
    "4FhyNXWPmtSZ1PHQpUYwp8b4hGCF6wPXoRaRKU8Wz1Q9WrDdwqHGPyBJFcL1rj4zZgw3ykSaqXsBLep4kdmW5DGS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Hdcv7d39tBp6RKvkURQXVpiV6tpHZhceoAV9w2YTw2iUhnoEokonXEy1uh14MEkW2P3FLdPDPSyoSnPYewXVyQG",
  "key1": "5A9Cv3LRrRnuD8zsvScPLGPu4U8hqmvtv5oLNu935xUAiXQJ9Fx9T3kwC6i84kTVJBRprjv6eppx8eXnqnW8HF9q",
  "key2": "64NwssBu8YBPkWPt6XT4P9xyuT74apvgNzg35RigWrk93hPAre56UCfKgsBLeDB4HLVpAeDF55acfHVqBbvDPvia",
  "key3": "XjNBQUkF4aagmSHgouda2AqB4sQCbFQQkzzzRsFAr2yfDmCQPYSnVuAcreztHAbUfzoU6XF6f1VWs5wSuqcaesk",
  "key4": "4348CrpsSayTzMYWys2vzEnQ6wy9AJEbWEh2pnmuJMPtNT76yWPXXpp7gcE3KrixE5Y3Nn7y5xbRZ68jejgLAEH",
  "key5": "4ugQHfGu3GBYqxw5SroXS1eNtkoK5onf2WALeeFkd6iuUddoYUcCkWbc487A66hAeVBZZ3ii6DDmhmuv6tofq96R",
  "key6": "3qABJ2UXGkyHeCPF5rGpP8eajrJDRg5BkrtDs3ugAnG6sNL5kDcaDuBCfdrRwTyk9jMpLmGjxCH3WARTCt8AuGGZ",
  "key7": "36P3QeC3nre5NiHG1fBcfrA6A5CgUr1qQiuGBJ48cDjFMWzTAzyLrVN12FZDLfMbN6FT7EJ7CBmseDoHMasV4wZG",
  "key8": "2RCgSk3X81MpwjWifkNwMdbzQLK1YW5GSbQr91xm9meEYgS9YsdfgBGNGuAa2MXxJVKtQoxFNCQyRmj1hrw5gK19",
  "key9": "3xAzyFEBUdLRT5VQDPJFgh9xFrDijKJFpn5Hx1chYDZZGRw1Tn8U1P78FrLh6VMWYsbvC7yhzjqFXDHBijQFw7RH",
  "key10": "28De4qQ4tXRUnxj4bvsgdjnYRYK4NxXp1sgjKsA2cSRGvEnN19efZVrkq2r92Mh34LiohsYx7yDKxp9y8cba8niL",
  "key11": "569z1hjGmnhqP7gQDyMEoJzhzTEnWpXLXEumqH9muNDBvN1iiRk4ehAJhKk4joMh7RRidDgjojanzpbcHNbs3oFx",
  "key12": "4vkcjrx9Q5i1jt21DPDYJbSvSwg8GVLWRUEBghcYt7vTb9feWjNN7uLpBoETrP5dLFJAELLXLzBcBAKvw5rwcMNz",
  "key13": "4mU458qmSVs6nnRAofezGPEDmXJsB2tCCZtKEEXWe6VzWvhuL1zVmRucaZcUwNq2XntBLS6qAGa1s7Wew3Km1Rk4",
  "key14": "5PG1BynxUcqJPDqBafmAFYV4PKfPfjtoTYDxVqynDA3rHxCAyuir3SPpcqG7F5bh4uirW32yuYdkSQg1o5zzeJ3T",
  "key15": "5Rh6BN7ws7fLgNDzDzNvJ5AbzhhZjNA19f4eatmg8t52Ef4Z5qpjYQxBdazqUQHvAS2VrPd1fo4KZpvS7AvgBzUM",
  "key16": "3FTes2gbVdf7FQRp67ynLiosE4S3Sb2U9V74TtVbQp9N6jZxPrXvfggFBfi14Fb7u79zcnNx1nu5wCR8dG7pggxZ",
  "key17": "4FjvkuZgJjSDE5yoanauBJpDC3VveEixZUGXF8CbwwwnL8zVqJjwFpoDk51KuES9TMibXU9Cum6j6Kp25ZsCk522",
  "key18": "4iw3CkxSwAErgEZ4RJ1zFNCijLy1ZfBAyBpBQi8aXYEEcTPoS4A1MvjnRtR86bF4QfWgAK3BHLSyMT7sDqUK8awN",
  "key19": "5NeejqQDH5Q3ZF89jvewGDFsLkyB19bB8onjCPnB3oXxf6uniiPBfvpnv5S9T8haZgP7TZApJCscR8kXiKUqMPyq",
  "key20": "3jtGy46znm45UYiNsW5huz23mwUWuJcT7bHaQxPDcpSLEwo6svs1nZx5NNduFjq1H8aa9kMANKmLodShWc6Lqv7",
  "key21": "4MxgyRqPPY5cWZ9nLXB5gffSbPSmgCvAvZycRiZ3K6ACY1EJGrt1tRFBi4rRSnDhpuHjYgpNGwdPymt8M6dMbEUu",
  "key22": "5VVAZUpJBAgESWZY7qfKgWhsn2K3WxLqcuWYXtKjsxpep51eG9GGFyBLFc2QpvdCcca94RwFdXQh21s8ZC7CsEBC",
  "key23": "4UR9pbJzC7neWKie6ZB6eFGh6kA9g4iSkEeZVivBkCRrorRbZ8vUUTrALyikN6PVJFCNKAFgSBcrT7g6WZKJa27t",
  "key24": "PZMUxpd7vM4p4skUZtCfNnUZhv8LzmwpM2t1BED3nzu3tXZkNRDBYYoRUUNiAuMwnui53RgDjvXGvF2xeqNCJXt",
  "key25": "5QsfWFpZFskSuLk8um9LCmpcVVgkbkMZPsH9vVTaYdfcqMGKqXVdmrtKVAcdJau2TDcBSf9wQL47mZ1z4j21FMhd",
  "key26": "38mXKMruQkaovPDFerweepXDpCASWjuU6CKMU8uZoqegW9SVKJXL6kf49KoTmoGuu7m4vUkRPpXXBMyAcrsqeh34",
  "key27": "5AV8HRu7deai2p6SPWbpeF6bKUaDbsNu9pTeASK1ekauQmyunx6VX1BRtQS2KFnwMjQNxp7qDYmiXPP21gn1BCJo",
  "key28": "3EU4hePGkR56pqYWcsrQgW72TFccdrujVCiVtUS6fH5NdBaEPEy5osPGX9QwWQgYSRY2o2MWViq1VZ4mspj2qUhj",
  "key29": "m3Ejv1h2mGmf25QQUGyG6Zaic9fdXvULN7zFZA4WH8SupKbbVg91gcrsEnvtJACVBhThnF898HxUhF9o3D6U4W1",
  "key30": "3cxQQmVXC5xZwmBtJPZ6WwUQJzLKXogTZZPhUqBRnnHD1Sf7tgDMaTxUr2dTknpEPfL1RNUBKmty7PoQApCt9zGp",
  "key31": "3cWXoV4csVfRgxtNBGZY8WwCmaZ92MXLrzJNv3SKUiymzk4vK3Vfn3ieqpG9RTvfZAwdWXvMxKiKjYB91cAQQTqH",
  "key32": "2zZ8gb4vC6idoYwwsMyhtZ73Mgw3zamoeGGX6dK5r7yHdmYc3jnMZdqVHX6GA5S2saRGTbUercskmqUtGweKdQBK",
  "key33": "4Ye2E3J2rx7baTznewi6Pe9TSxFYewyfxseSDxJ4XSkyCNnH9Wbys1mmqGhAQGytJAd5FgNExsh8aMjmguuaDN5i",
  "key34": "5bYhe6f9g3vEkLD2EigfyX9uD95HjrFyS7TTnWrLuiWadAC9ztf1EmHwvtV574KSY9wNzZM5eq4ExEzS3TkK5pom",
  "key35": "5HF827PcERAffU5bTnysLdeNg9zf68X1ZKMUz3FwaUwVc5m3GhK4LNqnKsnvmgqG44bzC3CFEDjZGwujbgnex9Hz",
  "key36": "58AAkS2BmZv1RYrSz7km7azPVXQCbYXhcHgQTT4VTDbD34mCo6i5XdB6dJ812mJ6CUQnMGD12M3b1MCWdSS4TpWD",
  "key37": "4mjCkNfZaMCrJjELJfu9yPXzVw15wCfmDb2AMp5DYfeN5giivsHc9HsDnnvDYdiqUGmYnYvwXfBE4XqYhrFneksa",
  "key38": "fuvZXjP6GbXqsn7G2LQZtxVZzkQF6zjgTuSEUwQDnbozTsPjYUgoPfRmtGvweUuFZo6X17YuBG3ou8CYgBT1ZcN",
  "key39": "4vZDjAmabmN839fza6YYLykwDapS8gBdQdKYeeMCfZmgrVKwfA6wquRwq8sHF3XHsCwwMZSBc2N6uq75ZDzjsXS7",
  "key40": "kzdjrg2KxkVqo8HeoUpQho9y13TErF8P5KCB6EQ2rYoP1928oBp3wVFAsvKCUUHEZdGGkPFGecZHeYWNLPtwxcM",
  "key41": "3j1q2KFRfEEG7aF6cZsp47hMrmu3dy7Z6wicU7X3bmvfcNEPTwDa6sY612UZ5UqAMGZxsJakxUBhkU7NVzyd7ETf",
  "key42": "fKZ3JpC3VYmtfAbYnHPeo9oMpeui89wy45WjJTay8xq6bB8udNaMdJt2fwcPSCDuYK6TBaBkt93US9zoeLivfiG",
  "key43": "2SMxchp6tzx8bseWHuGdhQcHEZ95aLaGuGn83MQLxy4YYTjzuRpB4sbCZ6UnnqzS3f3YV2GRF1ghpsNPp2uBrqSh",
  "key44": "5BJxZz4tg1vCSGNMkaH5Cd74uswty3EukExqWfJ7okQXbAd41D2PGJhoXVBATaHvjQZTmooMHM6vVCZRDc9QQcZT"
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
