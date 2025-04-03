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
    "2zVyyvgFe37hCWRbrWBmiJjK3ihu8U5TiuPJpRp48mDg1KLwhi6wSZZemkSTckp2KxVPFxqqqbuSRnrtbRpEGeEa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "c7JjkGn5d3UpBYXL42rzMK1BeydCneqasmNmqzJqgw7J49MtSsJ8eN9i5pQS3xGpzdr3f8WWnoBwbxHdg7inK64",
  "key1": "2rszfbDAUgEEVPsTLFs16UkKjHwX53WqJ6z8sGN8SCmPFga8U37vcEca5tTvwZq4J7oYsQVv2RF2zSLqHYvWBkbd",
  "key2": "5R1JqdLqffCw3mJjXTW6Cb4m35FXV8Q6nyrZoeh6TiRDj8Fw49C8gzQpwz1e6Ph2gfxeEf1YfL9eWePT4dXeZa7v",
  "key3": "n1nLAEmJVPAHjksouraYqUwAfnbqmNQceRNH2Eh99xbU42mEQjAPT5b9ZykuCZSMHjwgvpe9m2v2j3MsGaNN8Wt",
  "key4": "2LWt5KPtG5ZVziMycFwXfZDZ4K1SGDJa2Rq6qmVxfK29bSeKjx9SoawS5oUkrxUC7JY8q2BzNPbJhHqsi3ERf9oN",
  "key5": "4TGdYAwTHPJH6eNwRfEqJ98bXWqtEpKsCsifi4dyJnVYc1ymZ9b1xwqKfg2MMKLCLZFXeaVrLCJg2MWvadCWzn4d",
  "key6": "bUdtp1fTVr8HQ2fCkCP5VgZYygTTwE2r9qt6oK4SFPJJJWwnwGjg6p7WQXQP8XdhefD8yBoTXwGms93Gteaa3C3",
  "key7": "5bmLeWw6oyCMhGMpsW3ebbjJE1a2dSVui6xq1RLSGPwaqn5HYW9yWGkw6Hxkij5LBVyNWTPbMQ29kGTEesfLFfA1",
  "key8": "3f5Y3CdusSTAUUDbX15k3B5iXztUtN3MPndA87YDpnfcHz1zbRfBgfGRZjscSvGzYwq98a3wMcekt3463FCWMDsF",
  "key9": "wqq9XyU2txS5EnZetp68k4yb9kwiDeEYeA3QdU9y65R7QL1LzehtK4Z51XPn31DnfrDokZVYrahNePYJeWgL2mJ",
  "key10": "3YdyGaogYU8Z3s2V1Hcs9DfExpBf2thZZ2nmYFyvTFy56HbnGS9t4ahEEi32HyEMnntgPj31QVoLQtD3duG6hN87",
  "key11": "346Ro3XGpV3hKg2hCwyZ9c6dfqzyvatupt22jmaJ8B9u382L6YqU3zsekwaV2BPsiHiBiP6pUASCefNxAxeeW1F7",
  "key12": "4LWW7dkrKo8Ympocp2PGhZPRm5v9fFDPoX8xdEXRW7nWinniEAsLB5dK2W473iZACaBXqC9VDY7jzPrtq8r3K217",
  "key13": "2HESUBzzjdhz3aEdG6Pr6Bh1anKb9RybZME5mHs7Xtwk66vLANhXiuQBxAHAMKtPamzK4Kqy1sYkw7B1akyaFGZo",
  "key14": "4P5VG5t1tntmNzaPW8zXnjdFVGzGB4SxYRAm7PqD7GM9wpdQVXJmPmu6c9GrhEZczuVRxiG6GCtksbvjSHdLPyCK",
  "key15": "7ae4co3mecHo5YeRwjdRk2GekgwaifDnve1rHcqrtg6t3bPA88gkK2Fy7iiPpBzpGMNVSNS13qQ6Zyeecp53Q7A",
  "key16": "2p2hsK4B1PBorCeNVHGqfYJH3FjoXwav5tmjSQ2q44HAgU6tpwJATv5CXz4mVFiPaqFwRSDVbbraeyBXMebwiSY",
  "key17": "2DKW8eBr9mFeBdLj2HiV7ehnc9dB1zzWq2TghwLPomwELsgf83X1eoYkaXr2nDc34mg5zu25kqytZP499kSHTqLM",
  "key18": "tYQ3rxsatQywB4S9NQgAo5UaXJ8Ggr6LHtSL1XZ4qAeDYSUwn8d4b8p8tH3PDaq3obtk8nPhZsS5VNgfYfhNJ2X",
  "key19": "4ALfMmKa14J5pDe13BWqW73sfrhRNaoVSRgNNMU8pB23S4LHwEfp7xBnXqcVdoKG6w3WxuCokQqPRTEsaZaZ3b8N",
  "key20": "UfLbHwXfiu8NuR7Lr1fUZ5Aak5XsnX2Pyr6sE6Ub86ENczm2usAh5WBqS3LkCo2RpZwT6VfZw2vETWu91prmrGN",
  "key21": "2NhapBMkfMPhnTdcQdoNonkXarxPt7TP19YJs4AvqMBT2PVnJ8pg4W6M1YRJMJefwHvydhqfA5inR83Q7cXCxqZt",
  "key22": "2J8JDb4TKpKdwAdoEVxkVrLunnDbTTGMuxbbPXPoVE9B8riwnDBQBmbtRdHEiYxPvneQLRjWBA3itendsRAfnU4N",
  "key23": "4GtzUvgFW4ommgrsA7btFkNWeahZBrNiBGVuGxNtXpTLyRJevTYikDWjLcDvxngie86EYSbjyVKwAeAmNVG8Hc5d",
  "key24": "2BWfyjKyhCLXXZkqtLHu5dtJHT5GQh1yhQTzMzZKz6Dpsu5dTGdzf3j92mZhSK4AR2vdnfXfbRjswTLeNoHaZdXC",
  "key25": "2Nvn26AmFwpNt8CYgc1dybpqvFjPPAXcnbK28DNjVtgkxNYFrVJ5nB7AmJUfG1h3y6wXh5DdTwMRmst3PCY49ocH",
  "key26": "ZM7ceDnXwj7cXbXyPBCPZda3pjMKevoTGnh3qo3vXqzD1Ba5EnNReJjNgVACMwSqiNJJnxYnZziUA7twAy1nhu2",
  "key27": "5Qnvg8TrHUHbz4ZctmcFbRDMe9aWuCj2V3StzkXCpPA6cGoL4mcyVUrna5BBr51fxZfoxKW6TPpqSDRe9Q2387ZE",
  "key28": "igBQuQGDifa2U6FrLvUtWHCtHjCZ4WLEmbWmcEN1a74rSdyy26pKKksVTSgCMoH31P1FajwVpHBghz1XfwhqsNY",
  "key29": "jGcAqGPKn6kzUGHsMbtVvdG4d9PRo2E3CkvYay7zPD6LWWaEu2GzsJrDJBuMnF13WaBofXriGd5QFeSQAxv9KzN",
  "key30": "648SvMRs3b3qDgedbQtkFkHRVbkpbp3TMJduvjiwjKUK6EUXv6T6SedbhncBW3itCqVqpXsJbFGVgsom5bDhheef",
  "key31": "2mSVkCCirb6Upe5rg9dtP4ABwYNcHrzKhbEfUMpGxGeAaZgYMxA4D99HQLp5Zaxtxqj1pbuBxVTpXs6nZz5Wkidm",
  "key32": "4phYVtfhZirWn8HTk93aBDQ81ycyaMTpwXCQbXepMbgxFWaFHmcAJAKFLBKfF5dXFXiqWJU2inFiTcELQwH3etnr",
  "key33": "2qJ7274MhCqH6MGHNi1WWxWojYfseSjvFLzTS1Y12FMLHfwY74kiF3hznpm9tsQnzvZrR6HJLcq6e6es1xDfa88",
  "key34": "643Uct1jp21SprqHJ4YV5ChBeAcigqa5AzeBLPUW3XH3ZskRcaCMmrppRTSon9Kd257YVPguwyDx95SZsiK1SK2J",
  "key35": "W6f32u6PBfSSN9VH4cfBg9ACYvGpYhYnHbqHw4AEh1cziHreUidC8YDyPpYNKckauT6GD5gvzdjFbP2ikTD9XfN",
  "key36": "5FRRu8gxZoVDjwb8Gd5aptWAZa3dF1JQevMT71DgSSP6p3Nb7ovJjUHWThAcuERoQs7K1oBTukZwJ3nQVZ5qJwUj",
  "key37": "2AmY4vHs9sUnyVHzcLy6ATBVYHbbu1xfKHXUo6WP9eMCtYCxuvvjt6ApHvaBBMqCRdLcusEbsRozDzq3aLhXhVSZ"
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
