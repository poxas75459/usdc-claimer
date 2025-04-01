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
    "2SRpwT45Q31nVvYfympVYRKUR2oDJc6yigBDgtuPGbCgeXfxVgztGrjxkwyf3vsUyfTdA1Kcyo4YvdtZDzygYGMx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Rzgu1coxwz7DWmiqbTs4k1DqyNjMsiv3Bhh59R3YEyr1RtLRtNj9BDmMMBNo2AQTXzNaA88HnNjS5ZKFuLMajzg",
  "key1": "2A9aNoYLUxgpJimJGxov8R9D8EWAU8rj68qJjvFTU3nDwi8zLz6mQfLgqkFe3me83oqacLgwuSJrUWikVLm9KSDJ",
  "key2": "g2s1c2m2ifX9dvSX4wbynScHiiW2mVV87kaEBznkjWUADZaRUAFML7WJBsCKa5AUc6UdEFKueXakTWSHP62iwoW",
  "key3": "4hskYHsf3AmGZzfVdsu1t5uV7Hs3zGWdPrwyDn8m4WWs8a8GuYj7aXG1zmKWDUSZ7RqsPAZakP8XB7wzNF9hGVsg",
  "key4": "3QEXPDwp8DrNmLZoogWukEd1NH9U6wF3tWWSkRJVAc8D3JVxWhmtwcm7b3C89M3sot1hTwrRMyi5KGpxhg5DzYUU",
  "key5": "49Vs2C2RPbdoETcNqdnL5ZxhajwHduYPdF5WmMfZU2SufJvV3rEGD6yGpZXqNCuGkHmaHsNXma4mgUqnSZ5imCEc",
  "key6": "eHCG2qEnCaMmjXjTm3dJ6P5TRHqKGnLYuEuUTd8tdNyTjNP3e3PEfrruubKyaHe8wSJGhSFXCqp7N2gYBV4xe1b",
  "key7": "4uB6G4qFLBSyAznaREfRZz8GbqQQpDsimou9TfyQGUZSvaomMBxZ5F61hww4u2DhqngDHDtbTgi6oPkRU7qxm4cA",
  "key8": "3gD1jH2qBofSttWuFQRryGo6EoLNBhZW4v7rBgsL9yhZKXWyAyyUVZwzQTDyPWTHbPrPdt1uU9F8iy6r6dcRARQF",
  "key9": "42kTSx4B5YdvfxDujVVA4nZ5Yqoth2Zty4xmumT6MJcyo1ozpCtHvR7rSWinoB19LE9P47wQDKbsTmK3tEfJNcDS",
  "key10": "2qh5UtC2uvRp3Ws7ddbVmJQN6JAaBLSLTodzcDxzP711JtJUa668A2P3MWMjUz2MDS2ysLrSC5DGt15SkMevXtwn",
  "key11": "3copXxLAhYBQxbKS6KGUwx97VzGDkTRuLwmgJgyVR4kth2LgmZjdwPfNiHXCRWHXTC16u5pNSSQGnyLe35n7XfeL",
  "key12": "5FYzEycDPtemy1LW4zhmFga3SmCAKspeTSBC9HDi8vJnLyqgQKdE5jn3xNpwt489BHnUmv3CfWwz6gxxybPnDi4j",
  "key13": "VBoThJ2ABgxx41K1QWNxS1dQGGSSLc8Z13p323aTyZrA8ibdmjAueeCEWd9K5Pygp5rqAJSpSHweLnjAxNX3LFA",
  "key14": "4qFdzjEGPvbqcz3A74G9kiNq8DqDdDMp7NuowWWzKnzS3B1AJYLHeqhX9SKJDTqcHf6CsjYxcFEcKZp9oBXSmCZk",
  "key15": "WQRZF9ghm6Kmnv82unQnEbo37BFb1jofeYTBD21EsfWZCZfsEPSYoQSaYCnsqroJyKEkhueaLNMcRSrTGb9xv1F",
  "key16": "4JEvzs5FLo766JkMFvXdGn8LwPrGbpTKea6crecAhKCNfbHsDNoqy8NT5mbgajvHAeToXVxfWxLnWqmSkhLgcigF",
  "key17": "2txPygEbpX6PVt3c64HxJkhs1yMGJwvtux1mDDnj3JVK7mfvdNkhgePrRHaAUSADgu3BdxDPc6hwVu7eNokWxh3d",
  "key18": "53jHZe1H6XVcCiTwwPHzESUhGEboNMCLwqTjtBoHG3ZPujeSAa8tm1AJgtkaLrmq2myURVWihhBE2RsRkywJHMS5",
  "key19": "4Sv6ig4PSjXpyNm6Hex6ayHzvNKbR9v8wSE4171cK5zMLxNQ1xunHtQqoq8dqjXGats3bH2iAFXhet8sNmNzSFBv",
  "key20": "ox9iH4kFc6XtzstJVyU6zZFgAPTLUwTMDXJnocBEACjr7TdsUYCc4NhEmRaTGRXyn3Gqy6Hg36V7Edeg9sG8MhH",
  "key21": "5WU8nzfwgWN9p93B7ngXQh38bdXC9MJZQYQnKiw1NweXXEPvPS8p6fQhZWCJRAfhEdna2Z7g9RcZUZN8wLGbwFuM",
  "key22": "5X2nzNKvnebxyAs8NuHpamhxFE7QNcFXhUKY3r2LsCccDExWAqNW5a6od3Ef9pFBBpMXj9veXbd3ge6838sgE9Hy",
  "key23": "58B7mgzc1K6kyKyTwNt3X97qq3rSDk5RdjrXnF58KgjfP9CRbuE15Hs8EEPngDx7QB1YKngyH96tyzYgjA3zML8P",
  "key24": "2kLosFXzWHrE99FUoajqsLb61JvPE7sGDppKHR7ZeYfL4PzbAc5EaLgG5cDjS5Hu41Tjx5u2bUgNG8Uf3UsQU4yG",
  "key25": "EBLZmchAykHDzna3rybkYJsU5tYYh75zgkfeVRdh4r1HFZ8z2QY6ZoJAQSDWF53RzSTUAD9ni6qRQiTMfkKKjHs",
  "key26": "243upRjs3tAZyuvvmAWmxLSDo6GE2EcwKRasVozBswhjuQrm3DffHZoxH4Mq9Jr6jPnKZjD22x55PQmxn2y7SQAm",
  "key27": "3Rr7Kke25XgNnXMScqdHTg85EThtCD6W6mL2NURtfqm5ge6EMMF9tcbJV6RM2imfgq6HU1wbKkP3VEyjjFAVRJim",
  "key28": "5dS9rDbeEY5aQszZh57WA74VZbb572LSZ2RC7JJqW4haBk2fsZ6NQzMteSMxKExmf1tyNhM6vRbNhws2bpFiALw3",
  "key29": "GEtAnKC7ARXeWyDUgc2R8Qw1frbr3kKiLYLoHUgNnPby2uskywNEEKRL2RBZQbSL2a2p4JS1PJF5nZ6YfSgnoYh",
  "key30": "2kDuFhNsr7ZZEg5mPbQQHX4cgWwYR1T2MgxqhxnZNLZN6i1N3CKB368pRWes6GLc6Tu9uRCpWiZVUPSwWAZoSQpx",
  "key31": "5yh6zPFJ1YZV8VwfbFQQXNuNbrkJU6yhcfCEeWpBZvzzyQ6TZwRu9me4NPervgiEDj3oiFz8b4tVMqTSgRQZRcrZ",
  "key32": "2kmkqqn3t4Vw5hr2D1SSkc4AmeSWeQKCanQf6voV3Y5igxWHqV2uT6euyWugsgvoUFvyQTnzSRtvFGEsSAWsU4ub",
  "key33": "22PwzoduwVcRne9c3dtTXqi6m9suFKr7KVP6ach2bDEpdL4finZfJkNpxZAEnMFj141kkAJrsqZdzX5ThfZE92e2",
  "key34": "2NKCszYn2uYWs7As3NEgE4oUYD5ksx7F6rpvyzq7xgMNSAJ54S4sZmffkRcrkemnmuzzkhESzJxxk6EGHPriXGKQ",
  "key35": "qLWsSKo9vauKJwzN9Fe3EFSaJqp37c7YcTfZdyzxhU2EapgXihayuCN6TbcENwKgtPtGiac1Aq7PnrdSsbN4oqt",
  "key36": "Ez2sEiV5AuLwdGafxQhZEBRdYqGedYhX4KpjjCtE3Fwrc5ad7VzbfNqXfNQgbR6Gu9wMg1wt3aeT2VkiQqimm7g",
  "key37": "53wsGHPQajYWuqY3AvJNSFUYNTkvjCNsZ5ghFeiCJu4J4wgNXMFfwS2hK32TAFABSS3uofRPoG1XVPPkoLYPyQcE",
  "key38": "5teVyEq3qYfCHRUrG3aNrHimgxkUBidBxf8sbUjCQegmKKYXGGqz77pRbwN4iWTgHSuVcgagUWu5VefHQ55sg767",
  "key39": "55cfm9v2poCqL9tZzKu6o1G1MWTEmXSX44UkgWn17XdPXD2BND1aqP7eii5qatHw7KGWd1y16nJ9mrk3TWSSHmSY",
  "key40": "5fbywsb55bmzfr21bjHfnPaJgzrHpjYSHhGyzZMhHKVmTTZMSTzH7QYPjgZr7oKgSLFbz7TgfFU4EVF7BwpucJDq",
  "key41": "2kVyn759bfBzMTj6uNdgELS9GVPV3F1XRZHNzjfGybgxXfUfMVtUdit8Lwyz4idzTeMmgNUCGQP2hevhH7ark8oK",
  "key42": "iup2YnRBA3nDtvkTCR96ceUqnuncRcgkiqXXVHaHpPEvopUUaYC9qUggqYuh76UbMPbL9sVH6KtYUmrNNkgVBYy"
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
