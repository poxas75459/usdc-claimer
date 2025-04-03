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
    "3NQUeYfgz5eoceGp7uAxjnGiNLc11duDYEDDVBknMeDFKxBHwY6UJyyswRDrsuZncwXDCprhGMgfG32uLy6xanCe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Lub8FrmDtAuNUpkxaeuqUnZcXhbKTN5s5xSaW77oyqHam8TjVe47bhAnkdexRbFpnjc5gR8349gZzkqBuPD8Wem",
  "key1": "2sFnz1a6QdEnyukWbBgLKcB3xNCvACka6P6QMzDUukB1xexWTdYKfsbcoTUrjBj4aYxMBSGw45VAUY28FcDwaRbC",
  "key2": "QxPyYKyjG8cih1LhcZ58vXE6AnrSwLa193ZpdssAoAQzSZpnAzbUWYVrCrYqoSWL9FgXToBLr42NTrsd6YRHxac",
  "key3": "5zv3Ppif9PdH8NC7cCwaGaYVmr2QP3L4jyaEbkmBhx6j1NQSCo4TnZ15CqhuqvKFvLq7j3idiP5aHDiFatNgz6qS",
  "key4": "5VKoxyZv3RhFA8QLRzFAWGAHPM3WL3mM16pNiHNpTF7CTZGdBzrgsdveZzgSvCywCY2ts4LsnMthMUqNav5AvP9x",
  "key5": "2dR48qoZmJqB1ZEZaVZoiz8vbkoTKTz1fg4LGfjKTKDPbZTqCb7WsMVj7EHq342nPEnYoAVKozzqtYm37du34sgU",
  "key6": "pMXN6i3zZRyB8KUt93iCDbpDsitNB9fPoSP3LZeA7QFfHUy5CFXB5QqC1tDrrWrEheaMiemccTr2aJ86xWCnULP",
  "key7": "55DozDNimRrHdfRnwzsK46ZNNCtWRbegCcoMncP3z8UHAgtpoNq42vK3QUuSE6XgCjkKPCiMG5SwCeQhxJsCrJz3",
  "key8": "53hjQu8VncAzdXXqRcLo5wKUD4v7khK4GHNrQmzqrgQVSwmNdmTxa18WxHGaFEhkMV6HqAke1m94ZwhzVvsb8Sk9",
  "key9": "2dcUqpHoWCmHFvxyDxgmxRnWY4849bgi878aPr1Kvvui8aHSyHKDesEz5vKAQqVN5jugCsZUVegrZbG2og5Ng8uh",
  "key10": "52wkcDXKNozAmmCNUXoiMgZKj1b3SuXB98qTwJdBwTJxNswwAgyqob2AySxX9m47KTSXaKmASVPKp3YFpghGc9Xb",
  "key11": "3J5qmNqVzXu9Qgyi8HPdToHiZQqjroF9aLW5urSF5X7eLUdgHRrr5ku2nsrXfTzFTQb8oSktfuHGkK6TPM9ZC1VB",
  "key12": "378AVUTYYvk4tddhr3KCcirUTKzRFtky7pyRkAmgrLFBMrNte1wmtgVsP9abyeZB2fSHoAxhcw49hyswf6t4J1EP",
  "key13": "56mdZDCcnWZTz9FTEc3Wb4BweaWtX1dTHcP7UVTMZQ3cYEx7fi4anTHCKWp3QC2817mMJBU4r6eeJK6pyNLY7hRK",
  "key14": "2So7Gv1i6vYQmEumwJ2zKRA4RV5twiVv8JPXph9KjPzZiuaf3AfNU1HdsntMEj1mEWDysKM1faTEKharwra38EYC",
  "key15": "4G14zTteusSETkGXTFdBAA8B6DTeTmbjLHiB9Li5w3SxYRmsLR1A8aZ2zx6889TGmPuaaTzBJ6CXvXi3YAa7iZ7q",
  "key16": "uFjyrYJRA2rmiwbE4vQijDz1jVRinDsSExcXL6hKt2PbsLq8WuKsMWYUiR687yfvBTe2ZmUo55bLmn4yTNvsuqW",
  "key17": "MKbbkcgrjmxHmWinAC2L2K8hrasrgjJ6panp6tkMmJrq49WjQRwc2nG9JboWWhd57mm9pLdPrXUqtCLHnpinBH5",
  "key18": "2vMGMM9z1RHeFWyh2WKJLKZHuAHfE9SkbNtepzvzbdhfH2pB9f3DsWzme1VmnZWPDy8aYVDcFZxoDEFA4QoXd7fy",
  "key19": "5VNtQuVjvCNje7frTwYcnsfygFaDoxwYq3BjZkfFS8NwDYPHLcKwYsvjApYMqpDdZnHSf6MUBFb8QfGJsmDEVvth",
  "key20": "5TP3wRvNd5wAmN5vWWFyuCR25nEHWatAnie87xWy5RvVU7XudyHu12rZpDBVR7nCkaS58TGDZ9C76fiy5NKs879d",
  "key21": "345C4p9xoZRC1yCBET4WmtbPxEvh2WjHiMX2SXUfZZp2bkzz4T4Vvkei9J4VjGQE5cdTuEQ8MNx4N1zbN1pHLCTb",
  "key22": "66xgtcvKLNUr2YUp1EyvoRCJuWyvavLtvddDtJ1Awjsy81rBwJcVBduzM1j2snzfLjMB2qysHAXdWHCf25DFuA6d",
  "key23": "3uifmjWRABVUBQW1Fy6DbCBVNphHyXkj1LD6kDS3cUb2hXm59YzjytGhS7m6mqoGxLL2hsex3dRLWuQyureQM72q",
  "key24": "j4SWy3DUp5C1BdH8YwnFN3K5QHYtHRb7V2iXjpBoAYoGz4LLHpZB99Uc4A68viaMvtnTHw3NVXJ7N7QoYBpZkjS",
  "key25": "4ezrVVxHYhLo8K8vZ7rir4zs4YR9r16x89zyxXu6vhpCFBLZTG3kQU1tLKe3iAzwh88D9Kp726dj8rfapRGLdSu4",
  "key26": "4oPG1wvHTWXydTNh5N3o7qo8GJmTizSEG8UZgCmW6KuwABCSHCU1ViqLJjA5uGnCCEGHnnZwJdnYh1nfCgUDpow2",
  "key27": "3uSxuUsgaXEahJHpETqipQ9bpY4Zj7cFsd3oVWFyY5LGmtAGrFnQuFfp55mtMWWBxkdFTc34hLcrsWnPbsR2czU9",
  "key28": "5wKP1dmarQeduNvxx2Gp8pNm7otbwZMq5VA17UedqxHqkbT6hJuByNLFgyn3RZb7GZsL8yXR1fjHJsT48okEHyZu",
  "key29": "BYgeSXEfvMqqZGczbdhP84oBtviz3HDGhk44PwbwbnZW8wW4ACdA3XAGwmKurpM3RfqcCb8jNoGj2zsdhHLSKVL",
  "key30": "vrQCRJfmkYrGCLQyjZRdh9uwnpnqfLh8mMYECiL78B56gTosyQQBPhckvXRo2oH6poG9zspoTVV5bmqs9tCRgT2",
  "key31": "5UarBrwatRznvhPazELjhsHUC9aPJpKR3aeX2LyauwnvUshuiJXj64aMT74mZ1ZgWuKENPCgTnhwRk5gwSbBF5Rw",
  "key32": "3AiBTKVpD4M8fyaXsb4KdcX9zVCbQGK6R7ukffLLyncQHYP7hT9pTAs8SAf1QKNYK4S9A9ZHDZX4NGFHMQUW7vc8",
  "key33": "3zvyedBH2LzmuwgWQwtdY7YpWAV3Ubo7XNsQjPZYjRzrEzsgP5RnRznaVje2dqxoGD4j972cwUMd2ZhGuHUE7TeJ",
  "key34": "WCaC6x5zTSoaRFr4UQ1XjMBpfWBvTkUVwSVPnLkWm8ZNAQ8LoJjAidaT9dySbyxW74sT21y1v1PPkQz3DBsQ1Xw",
  "key35": "5ZDwW6ScE8pU4C15wseptXYNXTuCAehUXRfdaewnKnxh8dmvZiGXp5EewZdvQZaDJsjjTZSBWBdkE6J45xFkPAPb",
  "key36": "3NHEH9AAfbvrd1xowv12nmrJcBf4KagHbjrFqiLSkghVqyVkTd1wdW6Unn7dodkuturdJ9Dsq5FQ2ns8fkWhaChh",
  "key37": "5NKNCsCW7gbkLp37W7AM3YfHsubQHGGuJZVoJQozpwaU9diFhSwg8XgLs53X9gPBNwS4HzkL5D4tLgKt9oUVRder",
  "key38": "4zrC16feVBRWBQBUZD8qMh4ETtP3vq4MJmP2L1iPLxwAmCXJXSorC5RZoeA2UCTWhCfBtGUMoGpPt129QGqbUKAz"
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
