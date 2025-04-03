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
    "47Shu82iAwTDn8ai6aTedexpCGWnwZukNgSiVYUZwd1bEQ9HQpvavQWLNSZxQVQ1MzMsV43QtAgLvPFoH4BbyHUC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mGFxFfd7jVioM4X1yUs7ynJsXjewGkmpMRZa92EbfT7EXRfGStFVoW6MgUE1ixtRoMHCqpq5TRzUch1td8ffM7u",
  "key1": "5dSENkofCigmc6VomrujFDq8CL1iU4oDifEaeRZhtexHGFGehbojxzmSeByARbKkmjtZk3FCfeSUuNAvBCiFnYRf",
  "key2": "qL4EsCfdJ1SJFHhjPp3XxfP5hrimPURh1XjYGaDoVZTAVKPVHzU1gp5Y515PdKQVxPQNRECx2ERtPYstVbZaQ5b",
  "key3": "RsAk829NYc6TjeJwzrKiPSyA27rEGQeoZUwvRfHbUsE32oUpRMiBXEr4UMYfF695FXFMx3wRRV5df4YhRxkj1Dz",
  "key4": "3xXUStxUzw38X7YVk3rZMX6omAEUzbH5DZxnBrNskVi1nmsfXJf4dHyVKqNFBx4rkoVE7qMt5WELDuRi2zuSzjas",
  "key5": "3h8Xm9P9MhyGntxCFqzeuhZxshxQuBv94YdUv1YGiHWUSE5BtFaAudTjP5Rd5vW2ZKpzb2w7hQFiBqX4xgL1ADkc",
  "key6": "5sEJ8D64mdTufpnBYqWbgDvX2Q5AziNEeUTQ6n3ta7ewkSvcWHp6FDjSFpTTU6fXL3xpxctsCEynYvZyUJoA2cHA",
  "key7": "3LJVm7kiaHgcAAwrmY64X4suGcxFSGz458mZdweXv37RvpfdKVxUoH9HZ9wSVPSL7zzEy3SYaYsc7cdUGFmqidT9",
  "key8": "5KKdAkjyeyk2v8NBNKu68f5Eufa9BoyjT2syqU1DrtBDJuEnzRyuhkoA3vDtQEXRvjtXYWUfSW8yy7vY1C5NasBu",
  "key9": "ZyHbFU8KDFo25yChFdWZM7g4CCYTXYn8jxX3A2dCFQ5qveR5bNa9J1aEMPvmiM1JfdnVCj4vqNS5DJadNYD6utq",
  "key10": "5tPfMeYtaEWnxqstTpShKpNgmLvs7z2fGqMuxUoXHs4tQfKzmJaNe4zE2Egv2oXSDbKjZXkkseuDsej7WRthCbw4",
  "key11": "3aXx4Ks8NxEPPfgoPV2DbfGVN1USvsLxjw61LaN954kUmJN4qL9Mwur4cQZiRkxLcP5XCNKZWYLUenkQbryaZeUP",
  "key12": "53k8qKFGsJjGqeT3kroRTWE3JP1Dr9EJvF8kJpisHfmsAxzRogNkwB9ZRonZf9THW68dT4boDEHHynLSCweSe2bu",
  "key13": "4RkYyc7u9znv9NtSWt2bdf2PikTJQpMJryU8iP7yd18fcWKdEb7q6i9grqvkhvSHZYiyxzDUWiQnXN4Vcswz65ed",
  "key14": "3YhZdMin8r1THsHjgnmLE61gkBK7rFgiJgATWLArBRmz1h5QuUUeFme3XkZW1nwi1LzxkbnTroNrcNXVDM9omrvP",
  "key15": "5bE9Z5xGDZkySq9EALpNPVzUVoTQAxywgzRqEnB5kYQrdKciJqz7VDegxh8thd6hQ9Kbew5ZZSve94yzehG84bzK",
  "key16": "4bAnRvsk41twTUQzgFedCRvZXQ5U2GRf4aun6Z8Tg67BTE1kwiwfPL91pvn27cR26EDMbyMJCRppohgA551Kse7j",
  "key17": "44DEJnRTtLiaGPwYZ9TzUQ3tJiNv12d9LrNAP8LqrUrAxwwwzobNH1mtUs7D9NLrzzVezA9ccFYrCLtpLNfrgJq1",
  "key18": "3oJw2ikqsmdmhcMQjT5rwqRnLLt3cDPSXFExLmP3iRgRRiTzqXuRo8HD42mjBMHGFHg82yYXgmssmXcdXZTuCoUF",
  "key19": "4ryfnnZgRZqeXZGaTjxJUDYwootGA6WYG438N99NVAP3sHENE36R6RxjUnppQnq9MNUGmuXVPzxp9UEYF91CEbJx",
  "key20": "32Ur74275aQT3KiSmqUMVDtvpAwcTFCgpf9QZQEXMUqgfZz47X3Ltjk699F2qZoEhneS3D1osrwPshsZ9WmTPxaP",
  "key21": "22Q9QutUXBTqsM9LGsfo5ZEVaRvW2hBVc9qAvHXECPdBJJd6YUNyACyFMR8oK9xJGai64VTj4ZTguAPuiSTHFVue",
  "key22": "57NMoLxwxrYwbE14muqtrMK6jZTbeGCb8i3EhhM7raX2paU389QcMUGS2SkvTTuuaifQht2UvBP51JAC1xjn6Zyc",
  "key23": "2rnYtPX2YAhGtU5Sf5FFohyh2t8ApKf4BU1SsubbMLYTWQ8cbXLGFwWUD2Q7AxWU7MJGH5Bm8RFyTkSfjAFczUoH",
  "key24": "2qCXnLrPCJq94zaHncTq8C1mnYq1HN6KEvCDPehNJwHAbj187TqepaLNnARB2XJjer24gCx6ZxJ8oeF6irYx1YfL",
  "key25": "5Gspbe9S6mcv3vnWLJ8fk8rgQH2W9EfHCNWRChJwNKoJXVbgSPQkK8jWjLvBimXFjeu3AUaqG44jsHibFuyQb3y6",
  "key26": "3BT98oLR3dqdoAnaH5UjBDT479xq5oPYPKDoSG95ewuWXnot3xkN2J4Uy6oXUWGriZ4LeiGBxePVxaXcRkib2rN6",
  "key27": "1zZ8pxAqwacy7BSQoMgNCMYdrucQdUGm5pB2cogHcjqhNPzhv3UYPVtkYwERwbQmc8ri9kSCG3Dd2E8nZN1YNyM",
  "key28": "2xFCoJHkKw88vHL1NNADWF2rX5Z4Anp9zfGuuzrAvwHkrQchJv1nqnynRo5tzE2JoyFgQ6wFTHiRpfMGHNpAgdGL",
  "key29": "jaMtadSUHtchXvHfKKttGVvQu1voyC1hpYaXBLFV4d1t7JiSGKmu4GGbQFeU8VuE3puLwUJmP7f5utXHvXgtMGt",
  "key30": "5VF6gQdppJu4FXVh5yBTdWp3bxZu8jpyjU2B1Yfq6yuQHE6euRGuvfsunEe9tQ3He7HN8vq71h4WBnR38yCwHuGH",
  "key31": "65CktAs1iibx6NqMC1AJHNVzTK4z1a3foxtZzrTPg9rYkajp3xBPy3ZM3wZibA9VJoxVodFfmXHJ5JYWeMXsxoSZ",
  "key32": "37C8YRC6Etf5z8ZdZqHUTD6jp1gkjSutLDPmMo6MLro8XzoEHeo8wiJwkiJXtT9hQmfKkE8WXaBwtb663BdaNyDd",
  "key33": "62N8T4LxZ3gHPnDd2wD3q3yCZ3CZDQZH8p4dNk7kTWhXxpGGXtmErLWP7GFniNatHk7aC2QKU8Az2UhCiXGcuJff",
  "key34": "5RAy3Z1mZnFaQfdeKTxWQFFZkrQBgKE96a6etbXwFykaEhMc8Vbk5w8Lr6ksNpDBHJGbrKiKjunXPxDdxSaBCM9N"
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
