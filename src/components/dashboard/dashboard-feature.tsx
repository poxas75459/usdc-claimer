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
    "FHxVEjKMqx4VNhMdUncvz6JntawZR44MfWwEfe4WaWRtXiDmo2c5hugZdh2cNhqqbWPFbfgTLq8UDGrMF4SDWt1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "P99kFuLEVxbvjd85xgcCfWQcwragjBV31439oCweo1F5oSBXALUUPEgGwWpp4yfznSy9X6wXVAcFrmPRgyds5GQ",
  "key1": "ckv86J6Jy1XLUY6HwSf9YuxtBTyWe5mgf4uJ2S5qosxp9PAPLSrkhoSiqzUiVD7wrKftUGyErRE8upcXL83FpAN",
  "key2": "4eAounZxtgbAa6CThHmCB9r9bqAH2KvWnatuW8oSkSXxnds96REopxp5Vo5ceRcZctUxXZYWRBCBrqSmhRdwNwWD",
  "key3": "26zzKEGWiovaSE1i22n4fYJikyddbnHUKmMqGEPSApGcHXipxhXJEfi5R2iUULZJBnoG4a1XNJP4SRTPzrEhUiBk",
  "key4": "RBEcUymKwgAeVoooLrZHdksgidHiPDrZMucws7pjd881pK3MXuzYYhpKk7wextbB7XbhcpnJqq5fLsrgA5PUpvi",
  "key5": "5fwuY8PjTfpyVK44KBNGdkkF667h62iKdm7c9npNX93z4N3Z2xeLvW52qJmAbFqV1LLGBg3Yowcp4YKMZHESMUV4",
  "key6": "4wxXPHP5YvLqcfy3WknVBsRcDNvx8LzGiShFCUVfoH5Dchmg59wpLGvBQ6HX7QWcvJF8Q2W6XGHqiW2bwzq6uDtm",
  "key7": "e1dNK2tBNuUwAp2WAPBgQ7N7cMhQVDGCBu94gJaHW34EopTFhD4hMwbkHewTgSxaDS3ZU1TvvTHTF4c5niq5hLB",
  "key8": "4FVADw6S9Sth2MKezNh7iA11JYAFmSk7f4ftia2LttcaZ8pFcdHQ9HSmj3ctymXpNEWqi3JG6FQdWfxbgsiDY6GH",
  "key9": "4rGFYS2D5J3ie9M9Ke5u2HemcVqAvxa7hxxPcU4b7m1nT3ZNPRJvxBP8rJhGzCRkGwvgfHS4Lkdhjocvis4sGq6y",
  "key10": "3h7Wb6LS8FgRexvKBiDyvdXkNimRwjFsjHyCurJkNQ2sPZLCE71mnTeVGqp94W75NuS3t9SiK3cg4tvKoZuVvJVh",
  "key11": "3EhxKDzahEYAQf1CD1Pv72uJkxGtyWpq1rzRjxKxm31W9YygqomRPAPTPk6zcRwmdvdhduBBBRmMhG3bQ1cp2re7",
  "key12": "WoNJTU1NZuPPNtVLS8TMr3fuDSkwLtEamZgnG7RRNCihtC44RoZdPFvxExeFucXb6EPxwNBjHe4Xdtk4GJFHRa1",
  "key13": "2kHtYWd889jR3WLtKragdoRLsMEp11J6mD4uhCUKV8ZSraoG77WWhBPAtbGsKhSUPKLjCYrdActJxitS6vqpaH9e",
  "key14": "3rb3GRVfN18sUNaYcDL7KMKeAv6Kaei7WcpaAKDhwRRpT6dNrk2vGtmAj17Ksgdvq7CESKAA1hYAaN77dS9eRxsa",
  "key15": "3Wif5Kcvexh2WFr4wpeADt76if1ymD9wXUpTDQjBGqbKCmArBzeLH458wNUrqX2Zf4vQh5Dri4uwMdB94Hoe3uUw",
  "key16": "gLytotxB8ggqf648fsRk3vx2zuYU5iNifrnYo2fodm9qmmAUxRcTP17r6ZQqcmkmss8jQWtcRi5Pp5V34vbPF4o",
  "key17": "5GTiwUYYMWCnWyDkfN2bSztZbrJVPrvxrck1zmi6ChMx7FsoTWNiyLKM44rVJX1en1GR3nb845uovMycc4tkvGzs",
  "key18": "4PasxbXkcHmkTxGq95VriuzLbA5b6M1yrfBq2DdsJ5Rvs5yhqf4hP77hJYLBcqoVrRHjpvrwHfLt6JcT51qPPMKn",
  "key19": "378VTeDC7QGLpUqpuHJ7ZgYn2w9FB9K12cxMz9TNRzwiajjfXrXGc7LrDi5HFUdqRMW6AqmYVE8RxzYnfSShURJs",
  "key20": "tL3CqL4bSLjkyGci2YSzqDU5dme7GF7QkyxxRsHRijchzsR9g77BauwQzDe2nYmjwyNAuMpcGAYnmAQoAEhZtTL",
  "key21": "4pjcTY25iHas2rY54KNXR5t5m7vbd9qHze7KnroycgodV9FKm8RDFxRuJpJ4EW8z8uCd11Bh5foRb8yC31xaXk8s",
  "key22": "5JL5y9kXoKdRFG9ngnr97DFV1iFbUSmq9N6DnzwGZgpW6AW5prq41ua8vjbEv4RbpHQ6CrpnxoahhGGjzoU8Mff6",
  "key23": "5VcQUpvNGmCY6CPXHTv3vBP2vokFswRx1g34CJwnqPXMhDc1vsE5nanaPr2DQ9gZJzG4bJHr6mGaEchkZZzzcUG6",
  "key24": "2eemaJjEu9WNyMnmg2aggC23HHwR1NkQo6e3SeiCFZ5igCmfTM3sKUT6auEutvdGYHdLypU2P2RaRxcCoAGPN5tC",
  "key25": "65rvFPsDqEGxU4VnELKXiXYSwSCeSERULpoNT9TYX5PhHRxHusXSsFApiLyAJKai6bNcrQbk83pMhVM9UmGpHWjQ",
  "key26": "5Rp6dSsHH6spTccKjfXcQRmThfFgxtoHXh8EbmLepaTXXTBSfK639XKAUhM6wxm6KCNTw24M9mP5LPrpGpCHqr1Y",
  "key27": "3fH1K3YwMAiTcgpVR8FRCAY27uoxEHmFo24Ac22DUJ7cWDyQkEgdTQWJwhGASRAM7eLL9eEoAhGs8GeHBiaRSXX1",
  "key28": "4VfcH218LQRjvy5c9cZM9uoDKkBxypmGh35GTFHkJ5EaqfQVcdYp9PE4d2GzCjRgV4DXUxvKZrbRb3rZgtdKsDRb",
  "key29": "4yzDfk72jqJVYLZjyhrNUp461gNSAz8HwsaqEDZc4pB1gzngidLuyLyVrjWbWYTcAhT5ZN1VZccSdkSZGzU7ADrw",
  "key30": "28GDwwp332TKEyuMn5GNfsyBcSrQrQWybWp6EF68saXakKMCqvohFcw8Ye1byY8xAzu4QGG8FnE9EoKMphu1PA6f",
  "key31": "2tDAiRmUoBLdKFUkBC6NJw7PdFnjfzKtwLzkrpKvgfkvAyeANWCwNyn4dpwCXcFGZhzjaH47UzgKkTMF1z97U4nn",
  "key32": "bWasmeqdVYQBRc8Kqv3rhpVu47VHjrSjBfEYDMr2Z5xfprFyzZs9T86LsJrwYHVkvuZTJTSRcpJBjkCtgsUGRQq",
  "key33": "64hSyBtmnt7Jn8tLsVAanT8r6cAu9gE9mzW3vfXkfdgYu9rm7Ee8qrRBU6HRkdYKpx4dZibdJRo6WVEB2LiXjizw",
  "key34": "55L9JngjrEEXMvSxV5SwzRbbUMYNcPJDBMG7c6diYXVqwkRbih715KJUBLuhF4fNTjULfBp2fdg7tmWScYHJEfBm",
  "key35": "5ZC5CtRVSiyjD4SG6enMLrPnSA4hoaohfrZTgSCdqXmyCwc7sVSYKrHSY6wGAzwftR3Xy9AooHgwqfJbgRL3xBob",
  "key36": "5ArdfMBEfWNLAGdLp3A93sMGh6UmRze3NumWH8nJ1KR544Xiv6nAh5vgohPpGZxPZtkjkyB2ZjDWL3juCpvVxVTi",
  "key37": "2rLxpPEKzmvFBufda9txyTpW1Rpb6oUxHUNYxiWUbGjEfXM8Db9nHDvMHGewXkmtHyLCzFTN6o16HCQhCst3yJ12",
  "key38": "2Zb79MPZ7UixUUbDaiDUcJAcmeDpsjGoGyAZui5kBSMWVdwHeboAy7Wfqscxg4YTbtcmeRc4UFkmfAx5kojsoesz",
  "key39": "62pXmb2Yo8DTMMxEYVnrCWd5wYk7AtAXcfbVornsPve23vJiRXebEBtpr57MtYcnmFVfvmL8KnNTemuAgrmJmpSZ",
  "key40": "3Nho1afE5oPXiZzMSum1HWoc18ZYpMzCpGGbZHa1W2cQRoZAp9gtoabgd2q3DLGUWMudPGk9z8sECTMPaiFaAVr3",
  "key41": "jiJpnyiWCjSZ8BxmdAWXHmJzrJU5GwikY1Di1LjSjDQLiNq7kfyCv8Ve2Wwt5jhXx8b6xdryNtMijDayZhZbrfv",
  "key42": "4nSuRfkduWfYZfiS4LUoc8rJMiG5o9DMU9jwhXzPVwAPeGLUqAeV6vjrq6wd2xYPp3jdc7TXjTbk7icBQi425qCs",
  "key43": "ruTZ3WNvrdrFrq3etRzB5VexWY8KLqT3Jc1Uk1LRTrSQ7kbJzeXewTN4RTZEyPRJ7PYXUThuaBUJ69xTEGb5MeP"
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
