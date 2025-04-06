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
    "RVvjAxHKNoZdnfBkyWFFLAj4ARAXHvxx6XkGfZgotR7nSGawnnVtMsCQD3h6iMq4GVzofJ5RuJConsKcTjsgdRb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ACSYMoJp4HkYLgB74ajsB6gNgWXVorMCZB5pg6HGQQt4HyVamYDMYQ41gFHCKpRbfFSGCTQpd6EEDgTs7GTEnEG",
  "key1": "4oeQbYuJQHfCeTSwSJo4AAjYM6GpaiJdsCzNvg4wU9k77Qa7kwLb1hWVbdASAHHmSBJtMAz76UfFcXZGxa4Uhw4b",
  "key2": "4Zjb2vkqwXUAYtC4szWF2JavWbEdN7t7zC3DzzJzjyk6rDnNhqkwbEsfzAht2kdvkZ2oUdjpHrXp7cidE4bSJ6Nz",
  "key3": "5hnAKXYs3TRAcE3Y391dBq96b4gn3Eycb1CqwqhSFojvXyBe33dEYm29vfZ3ZhrzRNrRdxGqk3hHFfrF3W5uLQSF",
  "key4": "3rWhNDJ7NEfn7VDeaDUKLqnmAjADzEgXphGUXRmDBjZek9Eff5i8sd57pMaEK7h2F3pLMKy7BmgT8nzMiRjKEN8q",
  "key5": "5TnUeh5zDkTeeZ5gwCCUBfFfRsYyRdAwtq8Lv95oTHggRdMfckbBvbExuuYiecRQTk8hNApJLvvjHgfymvuXK8AJ",
  "key6": "5teGvBAgfocWgCgUWxTsANtcmoMiTkUQUt8Q4S5czCW4hcyGPQez11eLJ2ZWuk1VKCwwbnb4mUAa1FnuDQANjsP4",
  "key7": "57sZJfHUWB72eLzX9Po3uytPySYNiFuzvtVRGyirZzHpZ6UDkaz56Z6EhZS9nLCGKhMCC6fiN8pF33WNaPL6fDxn",
  "key8": "YZZh51jgbwNdk7acyzvMccUDRcx5sob1wTxy5iqcL4TTiHc4b1sg7v5DhGtiHzcTCBEhmKL4bSpn3guzaZQfnrE",
  "key9": "5VKq2nG6K1aAroeG1o377EUnK16c3EYW3Z5DAweZJVE4HuFyRisg5HVSYHHWrQx6cDtmo9nkbWwEHwXHqqWsaT3M",
  "key10": "4A2thLJ1o1vBoMDGjykd4CscwC9PgypUzcHSxqGHRTUtsXcAUmNTVKH3wFtSr2SXdhFafpqXL2nXmsfUzbs3Nocp",
  "key11": "3oRm2JNxZjScEAd7fBuPcEpd3MNDsnPCx25SKw6LDn6vk9BSAX9c6jZ4yZ1iVwgd6KJiBVF7gwgJ96i7DBsM4PVT",
  "key12": "YUxjV3oyFBqgJzh5cSrX9LA1za2efVZzxt2fYZP2BszpHUSCTEVUQaFhekotombXU38bGmddHK92oRYD8bBg61n",
  "key13": "4WFT3fxRwHesqG1rSWJeRmfbcYpaqNMfY7hMko4uYeWs1cG9rAMKi3ufj72C4fftmwG7qUSVdEPdmaZP2YiHHkdo",
  "key14": "3yiMQrpgdhYMjoLwz4SPGUU5PXAco551ZATAAwkhyu2JpkRo14BbWcXm57V2EvcvZAs8LBJfQoxx7nLh4npgYeco",
  "key15": "5AAHCmBgePhoXLdQ2Ndgo8AoZi3iTGXZmwA2pdULaredgsKEM7J8T5f3ViQXupv6QXuRjpERBeYJ3QusHXYLFCy3",
  "key16": "2mUMrUhfeTwsTcJSb4wNp9enEsVK9zNq97LomkjKiMY9c8ahf3AAeEMrMmF1JMx64c7j59dJ9us9ghVrHauoEfKE",
  "key17": "4BoHHiLNt36KhNLTPXJPseLwos2p3n22pwgjcnHUszL3XKoJWyUukzT2wWvWg4vP5ARjzpbXXY8ze62uez7r1q1d",
  "key18": "2NasK4LTF1M8Hx8yKEu6ZxxJS7g8etwQTYbHsoKGtRC1wvbWrLcwHqKaPMcNDASEQr83f3HgojaXmYPvVGoF1Jkv",
  "key19": "X38dEsVNNNRxiPiwMSUdq5vL3CRrVzCadqjAoS2PaXnBsVtDuspzX8iWexKRCP2jezbau8bcXMtVE2UsupgP5Er",
  "key20": "3GHmbUbAvkmbwVFXzcXrqqkFAsiuYQTdARXPvCoC5fJFL5A72W7p7Fje4siJ93gzDFtf6aCeJYh4jXgrZQiJbudk",
  "key21": "4bNAKKCivqY4k27QEZTEg3EKegSTjXhB6X1FHDxYtd9Gav4BMvi34BtST47MqpQj4XRhzyoes7vMQTYJArTcWtMH",
  "key22": "64Gzr4KPKmWS5XiHDevpVnCFYiDLZURZJE15ZPrbYB8XhC2Shu18LXEQD9k2ZNWrUGmmsd8MyCGpjKVpZKPaPQn2",
  "key23": "2k6LUn1zt78LyGatv3BfrprrabL43KBwhmiKEwY6nnQQ45cXuUiv3yiaK48ebikgdjCVxos3cpHox4Sfv7nioDFF",
  "key24": "5TbSKh3TMk5Ni8L8LG3r5a7JUVM8Ukp4Y9XGGpjXs5CnCfgWNjqkxTXUQ3JZADNtwVth9DKBDfjNgEpV5yKQg2Vi",
  "key25": "4wHuKMVvcZLgVivcMJkqigmHuFYhnSq5g26fMcoKEDpyfARm9MESNHNYYssu4JH2izAcsayBq5vEeCcfZ1xX7nbw",
  "key26": "436sicXPAa7kuU2y6EcAiKq7rzV4i4efxTiXZA6noGZXUcbgufUMEqkikyDdoJx6rkqtb1nkGEMCvQEHZzdEfX8W",
  "key27": "mpZynRXjb8wb12EmDG8gzygEsuJ9vHQKwAo2xA5S1oDyVh7gn6we81GXPfPhisEF2uhpeXF8GUyJwS3NZ2F8mYy",
  "key28": "2nnbUARmh12ads89Mvcphcs6ZMtjeTNiyQtrsweFdJd3phu8MQz6mrQ1xYPiaVXDTYEN6EfC1FdDww5e5fg4UUQJ",
  "key29": "3ssHph6PHEGbyoGCsd6GrXfXui17cbYXpmZJ1Rw9BTdrMDbsMt11kJ9ntsDS6r3c1GMpQLVEsgsFR6SgYP7q4EoR",
  "key30": "2fFcjiuZSspkpwcq4UGQz3AWEiKSbCSowUEtyJsGMgqfv375T8sCzdo25XKTn6yuC6jyFnZ5EtMideDGGN6wFq9L",
  "key31": "3Y7YTP4Az6F3aNy5DVfcNt9eAr2a9mwZFfibN9cdWc4FpnbTkcs8gShnczovWL9SWmMfMrfQRWbYLiXzjwJpcs4m",
  "key32": "57yDVevZDooXAdwXixQ2e1m3d6jaoMeBVEys7nWVEkauzhRRnXLUWAQYktqPaC4kF4Lnavkwy2J4QsXLdtoYC3f5",
  "key33": "2y6RutSNjcS94X1SRCPWHF2eNoEgw98ehSpvQd9fEGZ5CwN36MdzkSUJRBTz6p4y4ASqZFhFsMYAmHEquELabwFR",
  "key34": "65xEegSgNdQWWFNYZCDMboGHDyHGAzQFAAowRhd643Hz9ZmYYMgQHMriT3WYAfTuBfejeiWUzripNhvjaLwfgTyr",
  "key35": "4jusv8vSJUtVEuUAbkb4YyNs4Mwz6ty5ovoNYtN9m27L798dxHyQQ7VZbBk3jwRaEqprgJaS8LX1odUDfgZLYuNc",
  "key36": "2RJDoGzC9By9VUvqQqZyxf89EA5MWQMqHJ4NRWCS5KSsK5UXbf79L3Feoj1526PX1iqCApnVrF2QhtBLMcPx8VTQ"
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
