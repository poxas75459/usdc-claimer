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
    "29ceQPzrS81t1fegrTk6NNxoQaQsif5MkbmjA8JdkY66QmoL1RxQEXpu7eB2G3HicoUZuh9HLabeyGpWFt2YHTZw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55M7Gpk8GfoY7nNADjLcsjj5end4tiw1ZMmaz1QsdM917jyrVncYiG1ofuWSCAKtQU5eUErd7n2Yff3kRVh8yyny",
  "key1": "2WfjNKtYZDD2NPwsbN3jpAc9sVxjGfBji9eERRAmm6Uo3bENuCa9Tqg9Bt6djSsQUTajvyY1Tgf7UoFSQtnscxA1",
  "key2": "225aG7K31QCHHbRUPfw6Zr3TZ4vh6QdjqR62BffdFHEHymfcFDTwStKGGJSWSBddPTznw1E9mTxr9kVku7KbKLSZ",
  "key3": "2vUS57Xz4zVVokZGBTTBQsSXeK6RrSYLREvW5eab8GdVhyTWYhKbckkdtDYaGJo82AMgmaTYsqEY4tDmXQkgmXPc",
  "key4": "3TcMscXSUtbHjqAc6AiRtm3B46Zdi4efvyRRccSGLuBcS3rteEFL2TJP6HmXB119qFY5Jd1dut6bYyHusV6Ehv3C",
  "key5": "4PyUQwNvJxHr8nzgUA1kGVRDnaquKQm6yM1S4b2GdLaxvgzJKN7WuAJwjvrrvA6LPSrtoHWSX2bkz6DfEQkA9ZqP",
  "key6": "5MpPj5GP9t4gSMJo5DBUcnHdwCT8qTFfYEjAQ21a5eNLTDExzmr3ko2X4LjnbESfk4zQpwXWZ6FhFEm71bSCRbVP",
  "key7": "38uS6aUhwzaxKgExzA18bx81wqqh3x2NNAdEU3bsmRbdB25tVngUcRPExq499Nui62BqNfg5iD246FYXRe6boxxD",
  "key8": "wUCuvhb4fZGqWXBLjLSXHVJvt9TPCzAgP596pcXf2JEEw6wnWw6uTVna41TYSkQdme4iW8PAnU1L4Rtg7epM3R3",
  "key9": "2zbfPGEBRBdCuo8CDnzzexhSxKTiMwkgePDLkki4RC8U48pYgFBbRTZpZ2fU7PvHvTHupDeD46f5rTtqSnCEysWK",
  "key10": "5SRJPfGgX9AT6ZUmW4Ud6D3Js5Rgit9oZjw3fuboUmqyRzakLyhKGaTyJzcKfBNopn9MfYfVDHfdJMNUz11CLTKu",
  "key11": "2MRipLZvXe9T8rHEjcr5zahoFKQGFC6E8k1ZUXKybJgbfesAf56Ya8yzzhmvcoQavFoR8uEomyvGKALxL2KPvXg",
  "key12": "5epayQeNBTHePrtEuzxaowLUbTWz6jW2vUrhr2oh5K8uegU5jTfWLqhbt9ZWE34YpDCoYpWFqqxML2EhWD248GFW",
  "key13": "KHS1YJ9qD6Vbf5P5MxLma9ev1dfSVwwLTLsU19iJAgTm9pQkBKe3HquKP7WffzEDjK8YGbGnU3jtS5sWE93UxYU",
  "key14": "76DpJzWb1SCkr6FhwDZytUYAYVU1CKHo6KLAW67SkzLBSzGjpErSUcaiJYTPEyq1FUvVMsy1xFaj5fkAjEzzTsJ",
  "key15": "2gQu86LF6GD41QmyktqSWLACizRHpfi5DV4YTJbrSHq8c2Cj9tjEQoASQvUjsr5pB39LydKYuHWYAk7f1SpVPYBk",
  "key16": "fza6ap4XXZww3uhSibg6RJ3Niza2dyapCrPqsPcp2RHzQuHmXoDLGTG6VBjR94p3wqGjrwQGP48tkD146Lo4Tru",
  "key17": "3p4YDy8iyDHxGiUG4DZgRrhNVJKSMNrt4sqJ6g1duqrNnMR1ZV3xQEa7ZHGdFRPd65PTzR6bY7S2ySbtruTddrFs",
  "key18": "4LQ1QdwkvMQhVH2jRC3UUoAf1zcPrHjfqMfi5VSxfciqrw7AHVh3W2MQetk8L1yDEUASGawj7XLKWRkrYgY6zMqt",
  "key19": "f92SK29M4GRBsGD2SMgMgqmuo3qcV9isPexxhcKUe2MY4HyFUqiUbJHEnytdPmfNKoq9TubHqq3XddncvPnB6o9",
  "key20": "1o7Y5Dz79pPqW4wNdumiGtiZVZpSdMxNNytnZDm4maJhQT4TC5QPf1GH4cN5ACJLPbXi9VTASmAu5Gs5MCi4eY2",
  "key21": "2FTUh5V5xbqYTwHL8FutiVnp8d2dmqQ4RLBAKAaTNtmjSGcU5By1FS2k91KzrBaupTAn3wxSRauBZJrLNjacdikt",
  "key22": "mu634A6bCJTDyXj8L4Pv7sjg9jybWGrz2zXBGnbUwa3XkHiioCKeUnkmPyesTjktz2z1hibBE7EmxFofxCo9Mcj",
  "key23": "3XRA5xjycAbAWZgp6gC1Hm626bvsgyee4eKC15taUyZyjosHXeLMhVoMjVSdZNipsK79fdsW7VLShcKY5NaK89W6",
  "key24": "5iX7yj9CCbj2kTnHwzDze7gz2HGQMUhDvottTx4NKcskRrPYmXDXMB7fqJQpsJyheVJzMmN5J7TxmMYyRGeuVQ3X",
  "key25": "4GBeRHSoypv38WHRij7JX2TjqKZnNzxiW7mkz4yEkYrDPq1fJWYDrjTiYc7m4pPvmDUcZH14gK3XM1x7EJ6bVGzp",
  "key26": "52rrg4BfCE68Hm3SNkPLqK86eBfqUKdxbFMqytmucVjujjgqvG52mtNVmBK2Q4Pnp7qPSjCiaXGgdEtrrCRfoWP",
  "key27": "2KtqBgpcrFFjvoftQmUU2MysihpLwDUrACAgtmB4TkEeS4ewWGXQ8p4TSe4irUiHJaYpXc6ZRRTtAqYWUUUAz8cx",
  "key28": "4nKdZLaZ6G2zPfJRJEgtpWBCjZoJZD6CWiGEMccU7BFpTiFtEwjXjtHg2N5UmZNtvt6JBaaKNSiFNELY7TUi6s3h",
  "key29": "yGcj8Vj3SggKgByc8JWZKqhQ2quMxnSv1Tk5hGpHLQ6Eov97ajFvjquKWLEKw8DvGNeRUUZzwufjXSYLha97Qut",
  "key30": "4ZmvuDFL3s9mDxV2Z2MHyXpMb49d5DygdZZ2rrRoH1V3jC3ytpsZZKaQkmUhUtiWjUFxmTsnqfbLYqss8Vo2f8BU",
  "key31": "5yH4nLQDm8uWubPQbq6bGC3RXhW2t61PcDhL5rE8i3EZvxRncdP1P9kijVv7ikUNmP6k5dTpud6NvchoFFQ1XyBe",
  "key32": "2kMN7ERLou7csiPYj2HUqyFVztRP2gyd2ErfBB64ACo57Hc5kanhQM3B8zJRHn54yAhRX8bTNtHUJS1FjFzcGHmt",
  "key33": "3FtPNTMTexHXoweYj3EUVxBGbeHMKR83MoTVuLDjM99aFww3RQeNUrfgtJy9H2s6inGAJGsyBswWgT6JggQ8GKP7",
  "key34": "3ZZ5PyNCCGmCxAMpYB64zDu3f2fYRpvRmk7SxfP4pD8eN5gdvKSSF8an24Zo7WFquqQzch2vHEby7NHRNYbWWgwH",
  "key35": "2Dr8Y87pprxmVpv6H5TKidt2W5nm4jVZE9FU4N7PG5fZx1yTTqVtvbZmqqwJfm9C7S7jSrZjrvpsTfRgWeYUzuC6",
  "key36": "2DPrkmuAqqoCq2s6p6UaKYqDyy6Ggajw2qy4Lzd4MwEG2Ah4KDsTuGefMyYLJ9yfugGi4oujDy2W8sWRzPDby6xM",
  "key37": "62oDoa2t6cATNDyNxUPftUjUk2W43xryms9SxjqzaMQdGmdxc2eaydGnNaS6MR3h4DevPnVPwsPhE98toqzfaNkh",
  "key38": "4MecwWdEZgZXEkXGEe4mhHb2XfP9hAK3o7c48qaZZmn4vFc1iRkgqYNS1uv8dTdv5zoakSjBV46FiKaSarZ2JfAa",
  "key39": "4waddq91a27ufaGuTWG6m72CmnMpMfrrRnKRVGBGKWukkkkkzsNGY7SKctAuMVFAPv8q9KsBRpWbDoYzh4sskEdK",
  "key40": "2qcUZJ2U5gFQ7mdCburrFUKwHEAXdxQLscZgCiNqH7fpN915tZN5LBEx2CVoH2p5sPSoyH7TArQf6nM56jLkdg85",
  "key41": "67TZahXHvWNruMiHaF5PAxKn78ajmg6zpzTXTx9FxZ73AHTCVNJJHofZV2J62nnLEddb5ETUnMUEXm3HBWvMwamQ",
  "key42": "3qhWzUeZwJQvykS15X8XcA94Wu9kuQPB4FQ4gf3erGd5y547fdwUFoP7TMVPGFHFmzpMjBWgJ79ka6Nbe3ZUKdJv",
  "key43": "2MQkhutPrii7YeKrJvjf1ujGFQ3cAWZGdYJ5NFfMJKwCaARhaJG4E4b3m5PnCiSkSeYgyXBZW2HR9pQHAP9BZb9e",
  "key44": "3rxTAZb79hPXSvMthdBTSzzAJ5ehYfxvfjwyY5BK42amaTisJSdyiRrNN9dPqZ3AkvXDHf2px44jqXLy9imEHxdw",
  "key45": "VH64FPeiNdLPHscQs2DRHJhUPzmskM8LpZvEGn8pd7b5YNbgH2tM8aUBA9rcPyZENie4GccGwsAYmGTccGrok6F",
  "key46": "3ARypmozcXJX2ZYiz4znwN3BKFwwPijAHxkd5BoGpzGhUsxSDK4XJETVkJNmkYsGH5bvXK2BFy7pzfugg7tGsxFk",
  "key47": "Ax6gns9KcB1sFTqhokya5qkZh3ixZTooR2PdMLGoVTmLKurdQRS8m2NxYGCE6rNSmBtBGjiapzVxXCaZUnZYgeP",
  "key48": "281jf6WMRbwrqPYYAPrRMqMJawo3Fxm9XUGChe6D26RqFAakNdmHBf39r22Q6UdwywjMU6coMLvRicAh8C4uKaqU"
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
