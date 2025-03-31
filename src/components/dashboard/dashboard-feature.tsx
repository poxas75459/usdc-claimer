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
    "52dYE66xTWYr7YS73bpDqBaTjMpqs5qEbfLX1upBUTgfbkXSYi2L71gtPgm6siRq9aXgb4oCu74eWHjGRGWRkaS3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QvfZ7FPjNMVEGHaW31g9PHXuEKjtufofp7CD6ZkabErdjADFehEynBdiVB98AHvG1J7zEiZS6Vh368SwgmuNwyc",
  "key1": "3jyqCwb3o8pwSqffczR98WFGAui9iRBWRYh7k4ucGPg3tmYEDNyeH5DRnSDAihR3qrb6EcmYMZpxbNXMtiZ91jzk",
  "key2": "kaVFfRe3haXiibygsEXsDe3KkZ5o2mD8Xdjtz3gbAcisurkckRHAFrWJS9wuSSLCEoqfqWdrmbeAyYSZMQRA3eq",
  "key3": "2ycgKP6pXqk7ZafCBPNYxoQion6DriWTTdgu94FNng1ubQDDBbQy8r9sM6jxDdFJEaDAKbZSqyYSWpDqmNXz8byH",
  "key4": "5f2hPSiTFMg2hV5UehGSYdXLX2Hnhes1FHkSmwfuVm4GkX6Ka4SWjCnRNS4tGanrSFgHSNyeNLjz7QNXATuQTD25",
  "key5": "53TgJY6uMXpNuaVXTLfmLo96jd3a7vtVyEhuwPXEPNeniX2ZFndQzwVGGJJV5n5Fuco9mnJU63NX8MrmcrXTSn2a",
  "key6": "5eteEx4JhXS1R6qKgo2t7ioSCgxFGbWhbHFQL8D2Mwa6MQhGpYbwCqB6igi75Y4p57tad2eQ681RrN37DAqfV6cK",
  "key7": "5tD4P8PmNh8Ketqh4wkbAcJo9kLTxdW2LNfDXBAYM6h36yYdjux9GPtHC7NRSoXXLX3NMVT7dgQ4CdF81ppgG1iT",
  "key8": "4N3LxvGKn2ECDWBasCerYidhjZZNah3dgV9KzPFzkCReRnqwzcoWHWDjbX1JogJ11VfQHywrgQpacXkk83XUJ6dE",
  "key9": "5aehpGFgNHU1SobGr7JQpk9qyQUE7NhbiU9h9sefwB1ACdXKAnUzL3hcRX17Jpink71W6kAqAYxLJrZWancix6ro",
  "key10": "5M688fH4E3dfNUfKAQ1wTBeH2Ba4dqJobYdj74cwPzrZyFbSgNGNFBgtNN1hN9zNmsSKXCL2Y3TkWvhc4kuM1V1Q",
  "key11": "5XsGZArEVYDdkj5ThdU3pGPpDAiSaPk38DJgu4EZk7iWckz9h1GjSqaedPtSFGUX1Y29a2DsisYUzhkcMJga5EJs",
  "key12": "h1Ee54S59hjKKdz2KGLvh2fuaYU7BKQJXQDbLxU99hc7RhARYXSu5WeH9VjwZEtE2aR7cisaaBLLxF1tqjuXAS4",
  "key13": "6v44PcqdA1RCyjjhYYfR8UBtMqZKfEnNcKVcw6R6VYYpEs2C6To2MQ5hu8edcAQLC2XTQzVCX9VMDmp5Qac1kD6",
  "key14": "5RX4gWrpSf2C26JhyaHXENdWzPou5p6eZqziK4nRg4L6hA4QzsWDGPaXSkTRtZ21maSubMchcXW3vruBwQbe9eN2",
  "key15": "3LmWCPB9UuxNHT6kfPVWFVrSHNE9y4QGnM9q6sEbC2ghN4UAB7psootWdBH5ns7NSes3TE68FA7ttk6Ntb2Zc65j",
  "key16": "47rraH9snwJ5GpfX5aQqbpWDkNUfVuhLuy7zBAXg6BXe7pjhTzJ7iXdsHU3G9gsQtUxFHe4Nu4jd7BVmng3WsSc3",
  "key17": "5qyqqc2V9Lgpi6vnNPK5fHMPhxPcHGJfrp4aQfLPiZrntknj8Ayh95Ldr5PdLqamiBrNccxV5cS29kNECsc7XJUf",
  "key18": "5boZ9ojfVhhaEiBRsNUiGeX4Vfk13FPYCMjs6Bbu3tvMVtsQX6mjUnidX5Wn6kr51k47YrzcKsoUvr2R7uGGLeEy",
  "key19": "55WqN3Hq4nm5WG54d8iPgthcZUEiDB6CuvsvG3rNVm32EsaX23Q65zM7BH8HKfppJccT1h9SbNomF7b1YKdfFAaQ",
  "key20": "4FUEtggm1tia2Yqm4SwWKRsKSPvQw4xBxrApHkknjccKUvoHY89QtE7wbHtdFgkBYT72JDBvhmBiEr5ddCZdEGkJ",
  "key21": "4zHq1Ad3i1qvumw4ubfeu6e6rs2GSQjuC7LbpZksYkggqzUAQdPMbSMJ6TwqvVsRCd2Mhz2aj4HgZ3KFDc6Z3qoS",
  "key22": "5czPxY7iGk9AgJD7KzSQan8nPqib23c1gXh4WfdZoV5bnub76BGVd4G5NMts3QuC5DUKEDGc47r8shL2qVrxdq7A",
  "key23": "5mErVU59oNK6tXnGm3ZaKZAGg7fLCrJugfc6FJr2MosMALxY765xYVdAxdBrPNu8UcSDHZ6iam3SX9xSRCHSuAQ7",
  "key24": "Bg48p1VbFKwdAoi8W3wnUbLoJ1mkJiCnVEdvEoaEiSP2EWABLkaXtpVzzMtxcXHyybtYWMkcstojDxLKkMimpVY",
  "key25": "65X5wzAoUPaZ4ASskhTYMvWppWkc2KuuCdDSEbnfDDd1fUMbBrMfCfzgUzyDGhG1mYvAHKkMciaBced29dSdWfqG",
  "key26": "p6MCHBftqXp87QjVvWzWHJHTn7tWVjcuxFqT3WfF2TdbD6E9M91iY8C6SWGb6J8ypFJxDKhAS5jwyJpxHzg7n5z",
  "key27": "46CbNqGDHvW7qWHtN55SU1iGVCHJwiL2qNRzR9yRKqpjKZfV161C9rfkGGt69A9cyDZQTnkHnkPWTM8GYrNstVcv",
  "key28": "2znRVuUkkonU8wZ78fVRaMHwuxQsyFqL5Sh4byNRB4s6ApFfdM2Zu9eha6LdEzZDxv2JpfXtkhVbgA1nhQeeHMCz",
  "key29": "4kTGXmvQZg987HtzMBMa2ttsD11vMHt5vKHCW386oeCfzeidqZ4Mr52EV542UXzTXMVdo5GGKK7i33W679XQf5Bb",
  "key30": "3BHHZc3wU91EB5QzjQWrMra9DPk3ex7ohrCfQnqrCws5xWECM8o3yYsKENyJ7r5hMZgfqpt2QpUCf6PChcvW3SbP",
  "key31": "4dKwkNeXhRaLt3CMBPWYXjP8DrEvrTbYLocX1VcZFajeNUrhbdSqQzqPonp9KisTvZf8BrTqv4Xqz1U2YDoctqwh",
  "key32": "3zsYSDFgfkkfjiksmcGU1qsFzFpt24Yf7TqYAh7up8wxgQpgToPETeyqnnXa1ptCduiZC3ECFjzRMENNDF26Ldrz",
  "key33": "2w2PEeu4CmrVF93xJ59uxUZxYhiyDjGiXecgBq3QdLwsyuNgeZwN8NDGxf6egzy1Cv1Ur3kTCUsajvuyrNUbMkkd",
  "key34": "58HhtompUMDRCF5QJETdVQEQ8CZ9rvNUzMKh7MgooNRjxksxsuWBez9SwdgCkaKftDR5b4VgdbmjT4wjmKBJdCYf",
  "key35": "22VfQwssxrxbvLiuBR76eiw9ADV96unKaH621xP6eDeSNeTuuerD4StQ9C35jgqrchPL9kLcYc61wC772wmLPSG8",
  "key36": "NUwAivGi5hKQWfjEd7iYwzorTv2jm7R4JgMrdZa3x9jNjvy7EWgPhizcWAYRC5zvaxUa5MnaB64LDGFfyuc8Ax3",
  "key37": "3vDCvT2Xnak3xro1ugWj5kmcHNWQTm6kQLgLuT82SuGNt4mt73T1h5B3p6tMQY6znjQftbp6BX499h4R9bowoejm",
  "key38": "3k76J1PUN5eaYa53BLaGRgGy96g1zqiV9hfDHC2jFa2eNDFco5pZJVrc8ZH35ChW78FQBvtAGNYosNNcrnWNKu8r",
  "key39": "3wF7xrYY5zp5VrJFzypghnqowWk4VGe9cpDho2aN9oPzgkTDcbgBR3JfVjnu48nFwBD1XYVNNsd6EU4j4AVHDBhF",
  "key40": "4mmkmYstEjWogetX2RUS9b6oS4hrfnHRvHmkt3wrbD1W6Si5FDh1aTEmPkDXE8s7hNMDL7gE1M32x85aBwgkCe2Y",
  "key41": "33244nm2rmFspTypB7odJ4AHxjMnD9Sp17aQNonrc1xB2bW7XPHqevixB3x9w5Jr3DyvJQ65RK7mw7A7svTAPcdR",
  "key42": "5a6YUEsqPms7ugmzby6eq2bts31fe5mMXsS7mA9o8uZoeVrZR5cPPZoqfpoZmMs7Tw8S6NfPh817oQQJQoEoKSyz",
  "key43": "PifBkDuzWVNN2F2fPV3fRHcAH23eKEpaRZEo3LMGxqbJB7aSPbAkxTuM4nXCzU8BJmC8Rz2GKsQ3ck8Z7Y3MTfR",
  "key44": "4F9VwnsoZYKSxtPGsJyUV8k6iptdyG1rw2FfAWXJ8ryveJiRFajwMPkBDBLMH5HUWVeFNTAFxkn82zkzMzJJHWZc",
  "key45": "5WE22LRD9m2dgggKCMvxQ9yutB416mUhy1sDMm29EkFMmEioCtTq2TcUtPW4AqbnJaxefvCT2wPtJsYZU6BAMBVP",
  "key46": "39SPTgTxynLENq3Kw5Mr3NYRAFvawGHuwW1zM7YcmLLukbddshfA578q8iwd35RgDq1PxnRABMD2LZUjSPe99EBB",
  "key47": "2hSCbCHatb5NK4LScTEp762qiTDGMbuk96G48Tkpn4KNAwhW2UyBDmcKVJi11zWY5otDkgtxzo5mVo576jgTv653"
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
