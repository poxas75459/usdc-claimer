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
    "QbYLRf2izDTZGTFxfR1opF8EmSHULfp6aNPnjv6kzkqHwpgzrqkBdPiLeccDNNaxeCAd5wdiNUPZ7gjkNUGgCWK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3un6MY9FYmrd64R9krQ6qFe79BQd4CLsxVb7im1FnYo6ETvT6eCYAzRDVYKEKB6b8pX7UBbtBcW25BkXDB1nwWNG",
  "key1": "3uyzW8yhCjPTVEuyK5hNGSAjjnmsS6G1mvQ6hbT1GrEMBDrpTbRVLi4knXY2cKXPEMMku5gYmyzRGHLJv1yaZdWh",
  "key2": "5efxSgYjRLYdSV9p5JYGZLvSB3bRTRoX6735pEvRz7aNgJCubzHJvqFApniSwzXCfAzteykcYTmtyFVjCBX4jLK6",
  "key3": "58GiRGsvrFJPD6xnXbWfCLnVDZpEVcW33HuFgMxVJw2qmvonLfzEB2jTuUNxLEga5P3RdzudKuZmXqs96TAU1Wmj",
  "key4": "46Qs5pmZ8uTcq3StwDS4Tp8v2DBDDYWsnX1d4E59sJ1GwFWVs3GdoJTWgpb2dvHvVMzwEcsuVed3akDuywUtq4Gg",
  "key5": "3bDQfHzaF8h8PobGYeZyk71QoF21RTcmmaZvux9pYqJqGwvwoha4mzp7BxSjgtaGxPDxpZN1Ws4zyoUMKZg4bpV3",
  "key6": "4j6Gg3nP431jzSYdPwzE7RzEPQz9pojGKaGaQDoCQaDE25gQqxVigmpW6Mr3peC69ttJGcdfwtDyFVhTG13hUwQz",
  "key7": "8MuR9cL9keEJ5AKqyZk57A4yLLPxZP7QLNedxZtr67R4CaEthNRVHgngt9diRF4mv3itS1e81ksnHPQkx419sS5",
  "key8": "4JTvRKNXZ4vEGLa3vjtZ8ZokVFJmgn1SUJMGtJBXTYioXHaZ8ATP1utwchGNQFCJbbXJdc8zYNtZmNaRSNfJFoyZ",
  "key9": "61YMc85PtHE8nAXnLSVaBGC8ZhfYr1mRV8ft57HVhXjpLaxFNtjqezGzpQJseA8B1JykQRBPkEBYKRL8rEnhXQY4",
  "key10": "hBBByMCo4UTHyNu2m3DTjHTpoEnujZqmLVyrPLmQLMDxkyKwqafmvU93pHRi8x5c7RiRcYemhiis1QabzWKgVxy",
  "key11": "52zksmjfqLHVdA3Wq3f7JupN2Mhc7e6m696kLKeKRd1i5NX5M3xgqZ5x7PXiq3PwE8Q3cM2Qf8pzyfvFVpJVfAdf",
  "key12": "62oS78iro6rdAKURPDxGnEmN36jZtF88f9HauWFdbgtaXu7zpW6TWgspWMMauvCyqnXJSDfzNVWTqbAiCrEE5Wey",
  "key13": "3EkEQRSXrvoUJkUqdjCngmKFLzEUm2CKcYXsjL4dxE4ZnPZVwCF4gQRdszqLrM3B6GQP7ziqwrwQg8ZTWPJ63sKf",
  "key14": "3vFFNosrWV9pi6DW4LK5EWSJLKd7r7oLwB9sS4ewEz9dnsVoXkc1q2agf72aeppSTiv4WFRqW9bxiKrrYKPAspXE",
  "key15": "5rQQ8a3HsWhkFXquvmwdxB5B51KjvwqRqScRcCuKFd496QWfLg5st78FWmju7KZkfptG7xez9dRvrrxCroNg5M35",
  "key16": "41CGHqr9vxjDPRznTP27ZVyLNaoPRLr4SeKootkZzCuWDbn8SVW81E2mDmruBGSyMwjfg34j7Yzarh5NAMWBfj3p",
  "key17": "3pywKZ11y87s9Y4n4JAYVS7cL56FrLyecnL4aQep6p76W8jeqV6swNGZToYovtb8yfqhNPhcc2ekcb9bruWZZGf5",
  "key18": "4fZL3TuFuoavy9eESxhx1pv6g9MSgVRrsnG7xvWbqu9XDSZXCMeg82qehbPc7ZCwoBPZ7SBKqmomxceFvPmSJgMp",
  "key19": "5EGcwm4fuRBMuWLGZHaud9sWRs6UftUgRpZsNxj44PY8YeHKa7HUpn9m5NgvPoB92JRaePGmLWab5qXbtB48veCW",
  "key20": "1mUEqtLisdShZzQ5CZQbxmKe42eDQHCgj4i5sY9CT5XKomLxP8JAbTjKVCrNxwTuNUuqi4L6JFSz4u4XTqqbkuF",
  "key21": "5MH6GGudYWrtAjrDYQPnKe1E6XGKXEHKcRbKSTqRayivPCBLYp4XqYrXY4MnU75Nt1LLd7sou2V1N8DMcKfi1FE1",
  "key22": "yEWbhHmQR8sA2BavajU8f2dr5UFRQ9DwAiPDQSgSCCjzV85Vye9Mqznf524ZwiSivHNpPTU2rrHwCRjQYqZ4vn2",
  "key23": "5JXfegcuN2TxyMJrr4XRaF8yXJEvuWaP5pTaTsdNEiQeKjkkgWFbwKGtH8xKTNz9rnd2KpedgXUNntJHgLZ7kiK5",
  "key24": "MDexRRP5ka9QTVPyM3r21ea41euZB1jHcJDT8QTKmwE41HwowYuAqkKDmsoH1XZmrdUG37sBMMv9xVF1iyDoAVP",
  "key25": "2PJRrbVVpDkSAwiZ44QogatXAd64JhsLLxccWsXHU5N46QrhSVMjVvSaTb9LAYscRHXXNW8kWaim53RXD5XyPmCS",
  "key26": "5VPe94uibsyG2W1H3V3knv28vzh7MiHoEkSnsSKYbEFiUcUETKtKF2MTm2DxJ8HYPXy7vQm3irasQ2heVu945Zqa",
  "key27": "3wQ1Gt8HMsySLS3TGLoCerJzwwMhGLMpXs6pJPq1msMR4C9A5jDsRaGH5qcnE8SpUzGgbeJVUS4b4313cbHJuW9d",
  "key28": "2fD65gahrE7YsezfxkuzVwRKbE5TvrPfkh1z7QVWYf1TP5qQThYDDf3tV61cFMoAuX4rLyj1aSZG6QcWRLwsWPfx",
  "key29": "3peDiEtFrgMgNJWargnZx3yt15N4bj4SGprf2gpkmxTHzf8LNXGbAGqG9MjgjkaWGczPtCFC8GHvHkjHmLQX3w2b",
  "key30": "23zrx9APMQb5hp8HxBjNZGLhSWTybwWZfvKHfyYDRivTUxn77QuijsfX6ZRFyb6yCCeTroNuSsANzGFbLhgjHSKp",
  "key31": "ibsXUGjXySkMzVZiYbmg3jYUUPQo4buurmfPXTj1ny9nsbd4N5Z2sHefsrBX2Hjt5WtZDbbnfKUHL5b3cuexoVQ",
  "key32": "53PWTEtW6Q3X8KBKoZfqQgdCRSBVKdT92ngJnMYCCaW7tNF4KZo8cx7CURhCVrbskP5k5qFxSLPMrSpYsvUTfMt6",
  "key33": "urKnCUDVL4SBYBUy6dDJdknr7rAy3gVdiEyxnrFvwmuwmMJCW2MRu2xQbkyErin2mxbcf74hEbZxQVhaVey13gj",
  "key34": "2gx3tfbwDXRPxZes2G3ejnu9WrE7oE8rmwYKQxT3hxfs6SN5sWAsoX8ZDwC6QGi8T1f3Ccm1edRPWMpLMwcDM9HU",
  "key35": "3Y5LK34wL7Z7W6bayiUDGsNHfJkyEV9qae2ke1zFZ8Jv7Wa3735qYM4hZ6jmStgk7hccrRDxHhvKQnpUEUxz7pZ5",
  "key36": "5wpFwcsrUHy7k56svdRU1cjWKKurNFEWAZiaKbcK8ijzFvGQp2QqVAVFSasrxv918vzYC2GrULczWZHDmiKKyuxA",
  "key37": "5nRBEJpJZHsgAdXbFeeP8gBbB2J23MWuid8VmBzmAxgBezYJ5yBh6v7jsNuBKCVhFva2j7yM8t3qNNwzXVm7xV1w",
  "key38": "5Ax1rPtntRt9CbEhUfyxh38D7jyqT4mR3Ufps4gmifRq5pvFExkHCKot3KVHeFTTjXBSQHk8VZXYVTuPBYC6RgGj",
  "key39": "4H2tdhFvuC791fJftCbaXgN5vSofhB9eiZw34AgmQH6qU2pCwqjXsQBax3JR6t1tq2ZrQwVtsWSsoTe9brJkHh5a",
  "key40": "4ysA7JY1gpQFn9S3xTEBf8PRgUBhP4yH9CRk3v2WEQcj6QNhJT9XPsXeU8NdAHa5VMoNmFfgyGGPZs7Cg4nEe2uf",
  "key41": "24cfaxAgLjoYt5vTRegNS3JG7xA8JiZsuUfamFU897ThaEYBaUaD5tRRqmVJ2ax6L1NEV1fBCay7wDx2YhqJ3iez",
  "key42": "apL7nHyf1zoPBPNd4dZHYFUQaQA7AhgSy4NDUavwRNMzJwSYoPEeJmziwRbfJnaStUSwLZUfhKaS6JiZHSrkTzh",
  "key43": "2fu2NXQcdCiC6AVeMoFbjypvPFUi19pdN3USiuZ69oac5ZuAPUxdfcWrYzQZXpLVzoGamUARKE95r7pajHtmWB1Y"
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
