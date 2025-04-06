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
    "2b3RkZcwixJMFZw2GaNpkDLUqNHatDNmTYQ8duLHx6urWuc7B7o3UFGXnegSzuMh6Ca7kc4XL1soJBhTr17aT9SE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35ACEQtqRkuvnRJDJ9hz2DXjB34d7KbAvkffd6yf8TL1aPKegCqm8kb8fs4gCrGac5fzSwDyNYcg1HJya5EqHcvC",
  "key1": "39fyT8NaPRP8sevGCq2mhyiaYuo29sbppnyi3mTzT9UCmaqsH3jjCibVzmGoTdTCTLJrjVPUBS9UtAiCy9DBFANQ",
  "key2": "2KRQorf4Zk4T5TiY9MCcBSHpdW1jTCMoMbAR1xURJK7sL2dhmNKyQqbCVXRa269ve6dQgRArjYb3QpR34CsdUR7Z",
  "key3": "4oxCTy3QjzuaEUcTSGaWLGW2MHJ75rnYxSYgmRpFu9Mz6Haqqar8bHnR1SH226NrrjhQb9Az4Ve1NioMUxGp6fEw",
  "key4": "wUnfb3KhLk35oozcMUZ6ryQ2sSiBPzUbkjUaJfqEoowiK1gVNikXRpY2MZYYCatg7NMF2XxScsbicmfuUSa1wBS",
  "key5": "hen5qewM72fUJrF1QEXjsf4honA7XR9rSLHEW8x2PG59PvSYhnzbHRqDBzsfPh4A6MUwNVmFMz6g7pWf9vynSNm",
  "key6": "3DzPt72qyHPmBZi9LYNs4STfyBUsBEkLXext7zw5yV3Qj8CHcUiXadnGFfMBVxLFBs6hsaiZHzbpgiN4y14xhkzb",
  "key7": "fZreZ6CSE2oHsmyPJtCSmaS5DaFHnCbaoA8PUnb4QzB87VS7mUz4FfJwfpHVCsWsaLc35R4upsT1EJ5gbRuVYsU",
  "key8": "uCCi13TbxYUGfgSueeyJEmU56JqVRcH7ku1svqwSVTD7cPe8D44e3FJhhub4wcCJ1CwJW3aSFvirj77uwfsszJu",
  "key9": "2UBcLDsZhjVF1DLgZA6jYfMWQ4U8t9P9Fn2niy2jUtXfKNiYXdg4tpXrLNbhfNWvN1HWnCUXrEtADsUVj4WSLhRK",
  "key10": "4XpyL6hp7MsY9P3zcd9qpRfo5k8zvNUfH7hY63tikiTUir3oKaZNwi4XPFzNkE2QTbZLVqzs5xk7uebnoQdUVvrL",
  "key11": "3iCxJpqG7ykujbsHKBDyc19FN334D4kHdpWp1Q3MLM6TzYC3hzjvndpYAUEvpj26g2VHLtMacVd6NnmMUGk3H4m4",
  "key12": "2HV2asaoAsEXC6pyFgoyhpYpFY7T5GHxvFHFe6BssiCPbrcX8pWCcet1NjcXw2XCcpTRspcPWgNixU1L2rFh9r48",
  "key13": "HzMmJPfiydDUh1XmBKLxjMyRehvjex1xA32YbvCZkf7giGSgXvSkNhAzHVayZx4NHecrbmW8ZCQryRvKeekF161",
  "key14": "2MV1UZ6FKXz54MRiK45m4dp11TBe5Rhc4ApSCNHH1dJstft56nhNt3nk1GFtUf5RB1LtmgWpobmg32CqnpZNwd4N",
  "key15": "uJaq5dftV8NnXnToeBPRfcWTa8scFvZ7dBeeXg1fAZpXGoNQRXCp1fg3jGWiuBY7PcpgoDNyX99twBPaKQBHME5",
  "key16": "32Lw5qhrv4Rjvao7cAdbViqmNQ91yBFUExwjYWsCSd6meqVkSraimU6m9ywnjygEru5LwRyAyuCitsVDkkXLEawu",
  "key17": "2v8nqs3D9ox7gNi1mkjttuCge6Hah1hYAjqVFEzJFJwUzCaPwaP79wdZkWZzh9TCo91rAKuAbVj5EBYabyTECF6A",
  "key18": "55AKkNzVvKRtbHaDn3fcqfV8gb1HEfvJyqrJY3PnHTXidoTGPLTbon6FCBYAZ7w3UmE1M5cMunMMJtwFnUSciXrc",
  "key19": "319g7uDxEj1iktBQTC3qwgMR5zwQ8vpUXHcPHzdyEsaTz6HYCzHc5SMhGq2cqV8LCcrY5RK2VxQyuWesBJPztbZd",
  "key20": "AHRX84YzNTXfM3xyyEFkBUspL8Fmsfh4GJuxERz7ooA3qPQGzFDwgXQAMvoD3CyK72oVLTBPQ7ht8NWx6nj8Z6M",
  "key21": "2QF21v1Pmd5ySWNkwzSWU8r4Ww7MpyLaf2uufJxp1oiW4jUdV3espBNW6NVp6e3GWeiyibghCqaPpUZGEerW5Yxm",
  "key22": "KB3A9fvtU6qTG94zGbj2xvVa42bvDrPj89x3Y88qpBnquraRHQeKvSqCqTVvipyBZQG72cP9RafqYa3sffbFPte",
  "key23": "2hWJCRtjbojJXSjUQ8Sipquwo8PVzNTshkbC3fW8nbDiZjDBW1wzLdgfBso79hVXCCcYsP5w6cYQLr5Bkia8aNEy",
  "key24": "QMuGW5LVzxxYo5Y5vXDZe9t9uqgEahzDN1Cr9BYXqqneMRDk6MWH8Z54rXbPmGLEzQsgmbkn75YoAUr4mHRD3SV",
  "key25": "3Ci5zwQXk8KyhGtbCguJshZ4Bzj436EnYzrWsswrw2UBd7u335YKHvtkuUAQoY4DFytirv8Q2wSVHqcAP821gQL7",
  "key26": "boA3CEANdR1jXjG5bDhTfNKDATHmg9G6TGjqSAdHDhCEs7pmeTQ4Dpt9PeW77BtCkCCxVtYVP1t3tWJJHzyTQUa",
  "key27": "4AQFFgjXePocAx2EV2T7jFYJkkF9AuNPqzEThQ3ASa38sfcUpP6TLShq8yhqBRNJczUYo9GKEBozMLMmasP65Q5n",
  "key28": "24R2BKP2HcFaWB8DbmPa4ywfykMeSin7Tgp9WDiFkeV9xv8M2ZBWZ5RS7RpdxCTW1xhJuRu8j8JwJRJxmzQPjcJS",
  "key29": "31yd1UCWAmaH3Lq44HNGScEsMJvzcYfdiBqQMo7bLXqCEXXY8Na5CrR82rX5XhvbwX6EGwFu1jvRfFTkiH7mnfbJ",
  "key30": "hmD6ZpdwK9MSFeDcvhErsFx4M6zXxHfG2N1TxJenp9xoLhSKm4tqufDKpDBUsDgRHxERpEjEHpQZpJeXR3DEtEW",
  "key31": "2JvKnqsRAHquib4U4BXFz68Ry5cz9gD5m85Y5UC8ieJrMDVLAdiiJoAbxpoQoApNXceWNTUc1mz8BCQKaVJqW1nY",
  "key32": "29XsAthS3Eb8Gm1qrm4oExjf63d7ziBHNeLaEWQosUmWFEPKfFPQSgap9xQciZC7NU8tHBj3jAHpwnnMJfSU5qAg",
  "key33": "5HScXM8rKnd5BbcUYdbsk1vvdVSJCogfVTESuzDk58DRvS3D4YNSKajb885rDq63A34k6LTazJzPQjx8jo7hy4Vi",
  "key34": "qwCT5qgfoKrnxmToABZ88rDm4QxCutoFqqvAxwSLnKYvzYCtteAnK983jN5B8tpfQVwoUyRwqV4ADQEa8uwu6Cm",
  "key35": "3gEPnUY9ReE6JPxMYN5JSSyGmuyt9jmeGW32mWRsYFXtMP5BtXQwg4BZRwr1Z1vqaceBfrgrgGhBrBYbBksfoxvY",
  "key36": "36cuo9Wq4WxccM1bAy4ePvFLsmBfv2nKFiMzC1PJMkBAVMbSfhJ2ihgRT8cQKa5zAf5AAMXJuNWYKikpxyCSt77Z",
  "key37": "5xEoLRWEswKZ553moztF59KMqU1rYbhU1kUZhvhUTKrP7M3rzCrsUZfPSMPp6p6oqSgYmvmeiBzrw4rVnsq8NzV2",
  "key38": "3sXZTVxFsX9cpc5p2waWHjoW1NGYEFNfajzTUMGGxykrV2HsMZATeSrAqDsBA5rdHiLa7X8tggQZKSQQ3Z5p3GdQ",
  "key39": "29p5Hc1c5vyzST7DvgLrDFkLZkkoHziDL9oqPqiJaTDKGqgfCC8sPNT5CGvXF2Ys7bqFsmwvHoNP2XiAtNDn8wts",
  "key40": "48DstS4C5AhEVSjU3jin49QEKG3ecNhauUZVkubyhiX8spqsXLfjgGafRgG7fotaorR9RRGeNUz3XYruQmJrwsUm",
  "key41": "3EagMnEykSFK8J2BjEAbWR3zyTYaba5LbFzfusRVqKGRX8svhy5LwGY4japjU2H2zrprdAgVGyUhW2HPG1P2yWCw",
  "key42": "3orBK4rGJKGqAnCt6EPLM3JcsZHZTkuEBvMFkNux7TZ3LDg1bvBwY7KXpiAb59mQxiNU2U8YawettGt9E6H8mD7G",
  "key43": "4vw8JzvAmjcyNciJ1TyNgct1SYug2fHtKXQciCewe98DoHZHFUGu22GfsLeGNeqZR5br4MQ3nWtaRBnvNKrHZ6or"
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
