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
    "GW9U2pXYYH9Pojc7TqSCJcAkkB4pzjHvEXADxLsNefmBK8vUC8WQWzdY4Gw9MR5coALMCvBhzQfSYRh53sbBrJD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oJcY2eXPrxp41z1y1EJMzGiCGyizStB2qDuVc6F4oVkyUZBcjWAynt1DnwSQJ9dhvy2k3BREFX6os1m1sTFAK1E",
  "key1": "48dKvvCxq1syz6N7awPhaB8SjxMWk4rTTSbGHKCySooFX9yX9p7N7Kw975YwYnn9yE8caQPu4AKBauxaVdkzGj1H",
  "key2": "FCZkiTZkkQzizLLHMwVbKaNKuvYpD7NFVmR2d62ntooW98kcLYKPxdjfMfwq2zpcQ9AVwSBg1GPsbqYUsH4Yxst",
  "key3": "2XmrBabnAG3uNFpvvGdrbKTrMaZiVCZ5rEqrWHWVMZeTJggJHdxZiJXd9aFRTpwD6K2rCwEhcjMRgxJ9Ajp3dez7",
  "key4": "3aBYh1Q9VdGNH3Pv2Hgs1mhAMm81vgbdUhStczgp4bPTpCQVSH7SdSNbSL8Jt9XuxooDmShfcf6YuFBbg4cz6DRp",
  "key5": "2vfhneAQfG5G7suR3JTbPGZjKBCiQoZ21fiJcp6gaJWF4hJP142DKnFNsEgn2VL5HBCtXxYcnLjjqJ6JqfR22SPw",
  "key6": "4QM21T9AxFiwDmfPT7Z2b7QvREsSskvA1GNdXqMemvesYYqyebhxcF7wsW2rGd2TetXjTqpjK9EWsd8HjfoFNgro",
  "key7": "2Z5LxppPaRzttf7ZmE8hJAZsV7v3wi6jDTukMe6s4siazsokYkXKqPobYnWc2VphnaNP8HiDEWuRmGP8iQSA4z1S",
  "key8": "5aWFZoPmDH5Fj55mHvFJhegGej8q1LvEL4vWXBqqNXgjfDz1oLBGtf14G5fA8dngTVMeyZCUW5L5rXbT97b5sxrf",
  "key9": "4Lnn5BEQEKzaDaDzgRmFjSAdQtTtCpuxvexbgsrnwgkgjfZEZ6W1zkPNZJ9VWg8jYsSnu8Ya9tnDNHGbgiHpruRn",
  "key10": "234yy6Urtm1Kwcsc7LjdPSkaqSwroU7oizrucoGCsjgKHQ5cM4PGfsBQhDhAsRuUD9uVtjxMEp1EQEuTaJr2ErYc",
  "key11": "5792NBKikAbAs2tHs2VjgMSWAGPVUqMwmd5iwtEsvqKCtwa9u5ULxx6pskGnXn8B8RFqWhrmirSit1xr6tQtsQwo",
  "key12": "57BhfRv9KfyrvjtveWtKQXAQq4pXttsSk1zvc4AaCrFfRtgpGXsLbghADz5TK2aQUco7zWNhfjyqjbMAG7uB9rw9",
  "key13": "5bvtUjeUFAcM6UEAEmNbDFbfxZ7TzZud5ribacfoQWSBQ83sGHQfi7RX79Tuo2WwsWhtTScWDyE2yK6YoMGAkBRR",
  "key14": "4DyKwPh6YUQAjEQhkCSNHwVpjcDv5tAsYcuwFAWwQRVWAhPDpmTPt1M47vu6uLCLSGE975SG8t4E1sYyce4xvWQm",
  "key15": "5Tjiji71c4e9tiEXD28Z7mNM8DHkSeXL9zNJcC8GeVKMVmEtx34GCq7E5iFa8PzHaoAHnjFgDkmARVw5EniuQjx4",
  "key16": "3prSF4N7ZNpDMpShAPEEtTsAjiPYNea4kNQoJ99ax2Rtk651yBPMY5xAynJHg92ckrDMX3XESAxAaPRSVtwt6mnb",
  "key17": "4P8hvzSwM26o2E2sm3DKsJzbkMtxEzbQe6xMfF6NkniscQ3SZPUc1JxLhcR3B7jACjbWo1tQ4oNqtWkWQUnj5XoW",
  "key18": "5X77ootDRz5cP5GYT5YUTUfMq2dQ6BFPbgkLMiAwrS7uJj16DCMYt2JvxDQL79bGwqCfaeJA2zPVmvpguUvH5ByH",
  "key19": "3BbpYxY6s3Gm6YMDA6sCTh6X2YMao4md23Wy699e4YTmcuVXQfEMdPXonYcLST4GnWjTxDXKpCW2qiMCCes98zcx",
  "key20": "6629bCwaCzwE5occsuqYgiJfsT6toxbfYwKJUFBeqVwinz5zVMnfrKknKv8yMWJM2ZFBQwkf9rKm4gtvGjo14PLK",
  "key21": "5wChVsHSNdJXCvgzAV3WBxL3fkJuFZicTNvoEmYvHcXq9o55GwVPEc3mX1LShoB74r4LZkhSHiU3ptNoSE8mhgKP",
  "key22": "2tZ8GsZE13bHzwwNwFpnAuPjcYjZTUSDUAPXGJENC4W75J6E4car838FyKuiJ2MkeCANJ4HjTzcDUGGp8N1om35B",
  "key23": "5sHcFbZWm2HqgTCcsnqkBGndwzUbAikvawR7n53MQkCyKPieRGs4cRjvMYaCXpUv7yfNsbvRJhJDEjxJp1LH6ZtB",
  "key24": "5Xggxe9JbUDNsVghYPTAFEMCtMCeCP8AE4HuHHjFYYxL1kpUWndrjkjmXWwgkXzKGt88CBnDtEHrhUMuGm5xfH4E",
  "key25": "5Ef1GLtkirDJAGxjpBtjP8BLvH3oAxgCjrfwiRwYAYu4XJXtXBC96FQg9zHXARZiH9WSkQZwT31rBECzPdcnUK9F",
  "key26": "3FxLa4eZRWbVHhd79FwbtCmEghJs4L1VC2JiA7Lnk38H9hoJbUtmsWCqUj7HFRy71ofUapoSsCpgQ52ojiToCL4q",
  "key27": "4VnetJz3krH3eMG97xJh5rSFmCCyQjbbYEALzMqC58t5j8SgXLfSocq2yyURJS5chYNmv4esDZQipgkivi8TpVyv",
  "key28": "58yrd4QrTKq1TtGU7LsmrcT61vxXxE2zxCfobKCTxHronWMyCqsRZ1oHjoJdf5WAUzupoC1XSBAi13bphbeRNNTn",
  "key29": "37pfcPhBa8t6cJaYPJYWPfYqstExDketmanjQ6jSch45LWWfjhrWr7EtLWyWfk78waA3gbyBJj1jur9dTNuekf3G",
  "key30": "Kk63KtM4x1q43dWHcTbqND5rJEP1p1BP9ApSrmDZVDFEJRmwWsbTdPa4m23J6KdEbuyPEx2SBK2TdKCBTcL3EdN",
  "key31": "oDF53Nv8Mk1RHFKuMCiE8uR3stsSNgnsJcLBuvKBPPs7x5SBTyHGkM9ysM3GU4DAhQjEgYQ6HEs9Yc6aGUAPntg",
  "key32": "263UWdDg2rZxY4RMac1HrKyvFi2zX4NPgqbAWZ4WB9TUsoNkh8YErY4iePhxk57Sia3s1JNQbHJUcUL51AteXYMm",
  "key33": "E8iFA8DaQ5J2fHqLo7cT65d4XwZtFLsn9sYa6wU5uUNCnVnh7JcHHUkjE2Qh1gGNh5horFnf32aPQRzU1BDhpx1",
  "key34": "4y85rZJNcVU8YeckJKSf9mfZCmXjXGQ8Z7GP29TLqbM2HUatAHFT3fFbKnvCQCViT1q2o42iK7jPKxGkxeUqamFp",
  "key35": "43g6cA7p4pMAofVuYWcUF4wARAz9xHnZDHiv6beLpbZfxC99U72yGQww5sbwA9MWGgCWBzvTYjHZoGw8YcYQGSfZ",
  "key36": "3T3pATomvJnxtLr4tpv8zENPu8AjHeLTqth2RPNPaCztbzRd4UbiskYa1yQ5LZCPHLswf8XQJNwVBT6E7y1Mzfbe",
  "key37": "4WNQGPVxd8xXE67ntnW4azc8ACdNh8aHCMRohcw1SEmAAbvtyq39oc8t6wVLmyMABshs5g1bDcMu4ViDar5Uni5E",
  "key38": "2Fp1PKNmnUVGC3B4wN7z4uqH4eKpvKoMAERFhrToD8ZxwqfQNXtEXwVk63dZ2BRnwUAdLzQMVas3DJ4SNefzPmGb",
  "key39": "5Ng45LEFCSsp5A81VjyhcjEPdNB6cXDaDLBcGSEUxbEpZGVucA4wZuaPAeb7kpyVTJTa5kN6ajaJJsAmr1H1mwAo",
  "key40": "2ArgkF1yod3SZkFfdeLDS8KynvooVnKS7R4YeCcWght1kSLQNMiRodUCxia4qvqXhe1JbrEksZ6maNL9tuJNNL3a",
  "key41": "4Rc49jczCznLL83yQk6F38rqTFnPdddbr2iCkdaq2DgLG4MwUL3ogtsiF2FFNd2jJEiNKTkRJeCaTw2Qrnzbaj6E",
  "key42": "5JcZ3sn7rbuHKEcF22ievVFgCfEvnQikKpucKgM3ZzfgEg5mCzHHpMp5XcrXR6HCNgrNFt8TQyqHP8DcrZcEAfeZ",
  "key43": "48nSvN4oqWhNiWnPzXWSjG4MoXsat5WjcE1DB61AuJqjDDcHDrV84mdRypn6U6t8PLje3W5L8Nm2TCd1UJgBtXkw",
  "key44": "5JtX8RLjwthoNkSpg4YpXMAKM9tUAJ3u4u3R48NFKttSwzas54Y5ZuT5UKTwXdic6228wbdQpHWvg8dB3nH92Hpm"
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
