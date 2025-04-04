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
    "2hHos1kJhqneqb9JZngNvkd19GPhzyMLfUavGqZJXQ6eoTE4qjqmbShUH1r4ddxbUpbVRYwbUZecB8kbkXedTcE4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bxYtkJUattomwwz2hgk9RB3VbX9AK8Nu45gVUis1gVwGxVPRiJzBEi6jPzUgebXa2Ut3fAESnKQY69H6srVERkt",
  "key1": "2kvCE2iE1gviTcjgcm1wL6Cs9FaaDDxUzvPjcYTbUqWAE2AqRMDnChvsnSpbnDAhBBkwnjABRV9kqHdyzRkubV4s",
  "key2": "ixNVYWxPRJWNwhHuiNDPehfcibvfbtozASkbmANWKhDFaot61h6Yx5eFw69LQi3E5G4nEkvqoZoyjYgViGPw6F2",
  "key3": "34S8fYMjLPbAE73yD1GQAxNKhzTaoqub5QNqKZnr34HxmSF6JcT2B8kUS5xbYoRtd6CZVPqMK89WtCyh2EbHprM7",
  "key4": "ywNpdu46yTgGp2RZtVcSS9UoZno5fEq1fmdEMSc26iSvZBdoVe7AMFCV9UbBYeHumHZkxUKcPLiHVwWkgPja5Dn",
  "key5": "3mV51LPFGnjq4z6SZ4k4184auM6qoabgJA5AGy4rhZTZ2GWBy915qAMRQiNi4t6DbaPjpvntHK4uTm136avFXax5",
  "key6": "4VdK3XnsN6RWam2SaWarPtesD1JMc7zpRfWYU5MThXECwWpNXxdYxcAFg56KdfCe165YHRz1eEXnM9VUpnrvSeKB",
  "key7": "3fUeJFwGmcA3D4p6DRNTV8ej9KkHRTKCJoBqhJqfVP1X7HJLMpiHuisueP8uVsQ2vBgGxemGdhQwPbXc2DMkqPqS",
  "key8": "k6WZ59GBCdPTyH2KcQwWUDmoSCMG79rJJ6izaehx6P2smButavZXk65x8npnBV8qwjVVMXDxPG944RvLrt9p4Gc",
  "key9": "4WX3XwZhySzRwGKvHpGXnKS1aamoF1tF2a6JMws6n9vfKLE6MDhXRyH4rqPiGwMgRQcL7msMDp28nNsLtX3BF37k",
  "key10": "597Xqxh7a9LPyYFoF8MhJtRp1F5fwKBeSUAMpdsrHLDVWusGkc9QPfmq2k971FPYGYJ1Et7K5muWpivUm2Egkn4B",
  "key11": "4ueS3V4PLKhYAEgNnpdhuzZNAyf9qQKMnpd1nqHxdPXpzGFmM1kBLhoWXpFjrnJJNZnHucoC6SsbZhPG3PRWzfE1",
  "key12": "4MjEWX9Vf2sFX9k5jrsmqy1uMWvNazw2rFySrq71Ux6XM1Y5P91kGYgipJd3Wxg2wjfSiXLhr6dtTz5GejXzYNYb",
  "key13": "2u9RtxEiQimnBHX7G3F9Q538CjuPejgRYiTvptER2yuYWxvwqUA3zkziTPZHwkWDMvRM3T1AJHm3EPTMqd1FNnSU",
  "key14": "13sBg1WV6Ubutd9WWgyJET8RqD269aRHDCFCuWEFSj63DtntTKHocgkDzghb3a7uBne1z7jBVFTeDKto8iPC6DS",
  "key15": "2YVTWoSoZ1r8uorNYtn7FXtSJXrWk7fyFoEQHjndrzsqDxTcUCxFYSfsMqXx7ji8Da5mLUpKLchUL5WNZVEve3sw",
  "key16": "2ZWsfEkY5NQ61vZnF1mMwwk7fhs7RKYQsKsKLnbDxNsvtrsGaYz4CLH8DsGEpNsiBrPzP4BUud9vSuLg6MXmXyqn",
  "key17": "5RU3CxDWK4V5pQFL4qV4n8oJjfSTrcQpYnGhuYdLjpXT2bG6XTntw8PzRcwk7iaNxh6KiXTSGPqtcU4rgExz4Zj",
  "key18": "2jyJfSRRV679XqH1sNuXojVyWfMYh5TQFzXeAVhdoFDz3eBxvbnjHNMEwUz8JhXAgF49CJTxouS1su3BmjwG22x1",
  "key19": "5DhyzDeM5b9fUJ85fvM4NkCbUzMaEfuBqNrQo3D9KhNBA9UXauZwKrTDVEGLVAz7BsCJcVfc9uWpwT6YHoXpoMtN",
  "key20": "3QSdbygkaDWhZyQTYLBheCeFkS5GwWcjjDsvrDD5VqWyK9Ri1LBrFt58ZtHvL6jyRYqonR1M6oMFNrQjn4MRKMz8",
  "key21": "L1brBVTw817gwY7MxN7GXoXq2WSzwNjBiVhhzAo5FbqmUk8ovntXdCQ2wwpNezbwYTBk6Apef5K1d8wDNutv6Af",
  "key22": "2Nx9PzbGNky5Rndfqpo49S8KRosL2oe7g7WumEv3BgcVHT5bhRi9NPT7iQtnX15xsYLfMYXuPSuxaNs4DmZ2yAYW",
  "key23": "3Sb62wUdnDWFk4Brr7NbYarogBvmqNWQrUTSWEMebNWpPNzZBZnyTniXpUs5aLztpdpjdp8d2pwzbNQ2pfwEK2bi",
  "key24": "Wd24WdATQFs4nKNGanMJ85dU8pyY29EbVGMu39t84Um8CtzAC5fWD9b936PyphWpY54zusCv2KbBR18nkQPRFVq",
  "key25": "4bS3EQrNSx4GfopyyBbRDGAWQbeiJa3EoYnGQH49YFLWVQJge4FoM2b6vstwQSQ6YtfGNErz9HcWTg6a867u7ZmB",
  "key26": "5C91XNNvPzCh3PYqDdn6PbqLumyVyJGKJqFP5aWPh2UEkvk5qNan3j56jBKQ4aVoLEYYBqXhSBCvLR83wPemFjiM",
  "key27": "igr9mAKhipqbwzpfj4DfHr9hQArn7NiT94u9TKSsFE51LqyPHk4bPa3k9vmNUypmK9GMF8khNAjV8hR2EWEWGAN",
  "key28": "dJ1R3ZcMrGeXxY3pXxrMCpHdh8URWExbFrvjJuxwRQ217BH3BLcTh19mj6jkdREjpz9de3PMKAYe5XwfK16JaWM",
  "key29": "27mGKQZtFhd49ujytPcFnf4xEJVLPEX1QHphfTWDSyTJitd4moMeECodwtGSv7FS61C1cgmR9H7XknVdN3FBLbPy",
  "key30": "5euktDPxL9xe1L9ptXZ4vzTt4uvGZ1u9grWc5VoCNuTDQ3t9s8mf9BEbSXU4J89c5tTa6qmF2KpsSRQdZXS3qqTC",
  "key31": "5pJ5p3Ay6NpKKu8uwrRLxpLspxkx8R1UYSoQVsGjh1LJhhGTwfAsttWbTBMQj6cQ5oXyMTKaFUHRhtjMzBPc9h4s",
  "key32": "4gdyvg8vRosGYfGHtCdwRwguJxxyCLi6TtkKR3KgJ22STogHZTRjAUJwz7nejpLm561T9NkPmqg2vHwZHnsLAk28",
  "key33": "Xxg8rqBwp2CyLP2QZhTvZtaa88Wj4HhCrokLUvPN2ePK1cMVHuyETALSAzwy23ieuvFFRr4enFW8i9VymRXoLdW",
  "key34": "69PHzDrBAM5iEwdJxy5mZVCune61mWkM9LPck87UpstGN4HUKr7rxWdoKk393JE7kYg7Bs3468hZ7dwkxQFugTZ",
  "key35": "56CQ4GETj6kLh9ia9MkJios7Xy7EK62RVo76rzMw8zL5Qdg3wVi5dzEe7XoN7hxtWrKepe1xxJNKNtSobjKkfViF",
  "key36": "5vZ2d5byFbFTejkxb6gdNVobWTPMPRUwMpV7CU4jrJojyYGkiS3QUVeXEAd7bCL9rYyDmaGzr7TSpCh7qmoPAHXm",
  "key37": "2ziNF4uM1UeDaaetrGhbJxGuEp9sUMUNofG9Ya6Ye2SnMXWgMmqpaGz35YvSCLeEZFKQJhEKs7X95mT4yrk33QdS",
  "key38": "4m9ZMpsdNDcngnM9GwaviZzmrV8hRg7sKfprENaLNacikh2ouamf9eM4x754seTNQknWP5RtaXTWGHFrV1CvLagH",
  "key39": "Y1DiUDUJjFubURr5afpP8vipFBnQ6hWpsayL1c7fQZsQuEjKxuNLvt9WgPLHXAH7qMP653wTe59iQbfMUVFwWJR",
  "key40": "2Z2bbZwwne1rtDaZt7RYYoxp87ex7VWFE4Cc939tRQaCfUfG2fxNydWQBfhXVRSf4PYvKFLcVQVTREg6Q91aKMsx",
  "key41": "2fbTPLvYAmofnGi2hsyo1QHT9QDgLV4jy76TQzGWu24dTfefKoAQaxxHXW2gGgtUAczekz7mFp6vEtX4PL6wCXMn",
  "key42": "3AYVfr1QoHxHJdFafgxC9FA2Bhvps7svU9w31ZEiYhGQmz2CuiwqL1qjHkQQViryaEVne1FA9cYAUQjudmeQx7KC"
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
