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
    "635WKBLz42kHK5koCGBpTaXmfn2UBoHarRstg5abSFcSckSvdNeFTmSLwRvFvYAix4rJZ6uaxrwXzvWswBx9vZnr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2k8j2LpethEccFXXGXrQgjDixPSuxq55BzmtcXy3cqFh1Uog9YiL2SDsa6xgduDsBQTvEUWYaPeFf4C5d8kkqSd9",
  "key1": "2nojfLbp3wg6MLA7XYRNfsURiMfqo2bCEpufS4Reyde8zNoajuMddqb33URN2TNuk1Ds6haGJL8p7HRTxh99mBo6",
  "key2": "44kcGnmLRVjRChhfugsHjmmuzzStoZYpSzyuSRLTWpnKHcNYsmNYSmLD318v1B99hkgc8iqFKbMhEEd5Vxt3pnj9",
  "key3": "2NSpBUzRJ4rXYYvigSzycnnoGFQ2J983DHuSiUzbjvjCsphDbjihNYPtnUgR8Bjzh6ZWV7Se21LTjkmkfsGy1iod",
  "key4": "2c1WoC5B4hYcQKWf2YGrkAfmdyKtVLrNFLLGaHpqFmoZwRAfhqeQvbZTXxo9ev37yPC94ezaHiQ73xGqBtEJVaug",
  "key5": "2TS4WXUu1tPNLfppSNowZypidr8kb8KWrGbRyjbBoowBpf9Lj4EJi5EV4Jmscei183B575D3LJmTus5XGe8Tgp5X",
  "key6": "cJdNEmZmiHWZ1vnMHxLW7zNMWYSDHCFK5WqoqVvn2rNy7j4DDAyoNUi6jGfjWRenNdrmkXDz2q1DnDiVrK1Rbxa",
  "key7": "5PbVc8GAadsdZpbLyZU6Wd8t2SxuPCe4TkrCdantbLaMYM1MSp9Vfo7u5NtDeRnh8Zrt9D9ASNZMQozXT46YLWe3",
  "key8": "2mrf8N1k63oqnabFzxoUBDCH8kcJnYd7nGkihH5d7JaTDbUSTaYWBtt77ncRQ6YxRq9TUKhNjp7PuXax7t8mbyWv",
  "key9": "4w1TSBVWacCLffTVzRek8jLEzFEtsk8pHxSVw19nUkZm3pQZmLfBZ2eNRspqBJ6p2Bc8gWPoDfpbRHohm61t3guk",
  "key10": "5nJ93cdj9daKzkfzVLQCPGQsPionwAT1gtnNuJyrcHjmRBXjTyguzkVvpcBmdfQDKsPZNfQu3SCnRdtYuWAAK6Y1",
  "key11": "Uzq1dKiCjp1DLh5NNF84deZPxNfuPJDGYj2GUZY228xCS8EUTGDV3oziAzrfRFeJGn3GWFCj4Xx3RnhErpXWgWP",
  "key12": "5bVXTHvxi6RtJhEXyysEncVMQFjeHANd7dPvGQrDmp5F2yuVm2jSnRtrPBsSXRX6DKTmnMV2Tj2xy2eZxcBNMhiD",
  "key13": "3a7YP3MzYiMfuF7zakfguc7WGL7DwTzXZ4Jz9Lnf28Fm1f19XtMYKmpLoVAUvh6uZE34sCJA7Zb9p6Jr9RMMHwgY",
  "key14": "tjLEKSa9Yy8FpX5Le6vP18KjHZDQS6GxfpMq84KtwQ36pcTcFFv6NEGE5UuKxpuNCqfGwT9nMKhsER2iEGXTD8F",
  "key15": "2uKgfmeiGuWF72Ea2N7taUg6MPBc7MEdZsxiatz8CWCfHs6ajZ6XNthALtcaAyZYZBW4JQiUtuxEFG2mxES8hceP",
  "key16": "tzZH2EYJP4mC92MPeN9D2SnuzYr6b3sRKz1zALeUdWURzA8Uvp3G9mFMj6znCPfsJd2uX1e9MneZ16h9daCVYmU",
  "key17": "2wm7Leuc8MKfSWmQ2RHW3LEK2uShJrr5k3yrd3rEy5PfifswN85sZRKAWDM2Et4vhwXSYZMFyJARKaQKykMpSvjk",
  "key18": "1gHGnDKxymayFEnq5wPbAqEVvRmDV1BC4iMnjLHsSu9MebBDRkjsFVSeZ4H6Px2VnTaJ21tNxPzTw82LSiu2QLT",
  "key19": "5tsoGSyJvRT3srmKk8UvmSJ6KJKZM8a14x518MdEHminndTeJ2N6Es9qUTsRkmXLXbrHgPxanKKxh94shyHYtrbi",
  "key20": "2DyiyB3Cw89rFYgNVPmpyrhQCp9fnVVFzLDBS75K4o3apsRZnZqxo5xQo1JHbsEgwUiE1oDDVMoBoD11tBZUt1Z6",
  "key21": "43CVCcQMF8FoQkM7EHgEL5STp6CS7vvkWE9PJ4Kibit8wuRBb9auC2A1Qnt65AxF4EwaEiGaUV7UXhgjPKBeSQdn",
  "key22": "2rAHkk887aXebZVjeceRbch5kvYQDNuWnCh3xTg3myxNLDe4kBmK6Av9eCUdHAr1iqzaeHz7GTu1ZsgNbM3P7d1L",
  "key23": "2FtVYoQmY2LZutZg7DKhDTwbLx8oK9pZxAUnbTYHt1CXRPdXyVpBT9SPrhv3zUYbCW1pnGzM9JH157mdi8pMF8LJ",
  "key24": "34UffFBpic3JmMPFehntVUbqgYMT64zY9LjXzxHS1LyGuMgFqwaqKXmxwG2TEx2rUFgbPLnXAFVcbayigvi9hwUZ",
  "key25": "3byWvi8tn8oR9MNZEbvbhTtsNVv3xVn3B2LZpR4zJwj2wutQZVyUwf6Aim8ENq4jdgjGbtUSHcWXMZ9DGF52MYd1",
  "key26": "3jMXPTK3N1Wgbo7uctxJx6Sj1wMi1JevQ9RzYCsgRH2REig81Bus16TQunF7W5QH9QfBfxrmvARKPgMPxuuPCxtx",
  "key27": "zUT2LUkNLcuT6BpyFNwuJTAtSzFFsSWCzNkjtpXVpSVGcHYpPkjKE14crtAyDtTrBG269pQe2Tr7BFdvjPGoFEV",
  "key28": "5QjY3SXBJH8U3ZE33jrJcMhMYHjcWoqxQTonHrqRMVN6ngHJCUhHSv8MvaSZPo1qgdpe8BvBCsfhzPGUMjwTekwN",
  "key29": "37EkVbGAy5zZLFjEynJP2Vtym8mge2VmYfHdft7Xeom5zGABSeMYmVuM4CMa8nVY2NP3dTi3pPUqrnJyMFECYLVF",
  "key30": "GLnfXGuwgZH5RUxMiznH3DaJchHv7ZXfHu2ZaVf1fDoFxpD2mCx94biakRTFxv3FQVBPeww62RWpz7SsWGjeXPK",
  "key31": "5pKbzDHJ7J5MSEo9dG2eV5i2WRFadAKhgw6DEoTC9ao2ntXd8LECeZaFSuUhycgJBHsL8kpeCuNAMafNAQd2tEgM",
  "key32": "3QZvQkzZSaTH1CvCq6X1jNWZ9EzmRQt92oQTGSn6ThfznLJ95rvdhaYe9QWA2sDRvz7qfKBUF1ydNYMB6bdorKTa",
  "key33": "62LaP6quA1YtwH5q61ErWaB2qdHqsZie9841LLGVRXymft5EJap9mvXQrbamn31vEqwot3Q53XYG8szLoNqtBMKY",
  "key34": "46fQo29jykdj9qLUmK5BTAM7LnWJkQoucaM21jLkir6GZB7S2fyR1ZtrXuEC15c2RYHroq5sjhSkQDkAqayY92T7",
  "key35": "63eBbYcng9zMrDbw1tk3eRXGZ8CQtcX7MZ1H78AWVc1W8F6hDm2GHnRHmWh7m3eiBDuBUGQKwBTmCwpfHH2WNTWc",
  "key36": "5htLLcomqCbhzpKR83PUz7stq6x5J5KrA3zXsRDaMbUKwen8YbHMs3s9vZPZsEoRCgmnUpNHCrGcMPxrwuNS7Etc",
  "key37": "3YWH3WAVTKpXKAfJYjBQxjwuXvrS79un6i5RxC6Zw1qVpNZG1PeiKqgmdN9vc1CXmAcXBajw23mkvNFkPujT7kVE",
  "key38": "3k38vpFf7Shd5H6mi24nhgd5Ba918Ac5M12xgeTKpnLDMKVUzcfPVsrGrfCmAqufySXZQwKSpktN41jWkWs7uCqL"
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
