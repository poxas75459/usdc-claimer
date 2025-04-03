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
    "5ovvBrZEBkDGf6ZttKuPRVENX1TpfqQxs5zgfuGhBmRUw9sHWLskTmRagi4W69ybmXmk6TBH7vdSYF3SUcJE5zvJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2P1RH1KeBsiTTZwGwAdQR44TAoWG2S7P3kta1315695F5TSizc6fDJ6q9zfgVbxDDkgacutqDtiizC276MBEvSkV",
  "key1": "4EYoCiEX4i9ACmHUfB1ZV9dTrTPuCeqmv1RQBcZpnLQXPLBFB1f8PrEMoPT7noyQ1zBUqHt6YjMiNa8WdAgnva9n",
  "key2": "26fRhubSccgimqe1VrmLWw6jAWynx3oRmk3aQoZB6jQ5tcJ3PyJRxep3pef4UXCBngTrUp9B52aDZ53QvjpTVy2j",
  "key3": "iFgyXqs9AxfHFRx5KRdG978JpHkfDGctLKABtZ63f916wuccAuCsfNUPAwtQ4jRudCNwLxwPi6ipYh17GmoHK59",
  "key4": "3rQjJnJxSqWes3XBkQY7d5h9mTs16gG676CqydYmBi84GymAyzYysH4F7HGJYFhXyj8mgSRfHN2mLc7hWJ2cR4UU",
  "key5": "45BnoWc2xHtyzG6Zj2AcgqbhoH1HjUVo9Ui7WAxuP91DE5Ny9wdgpwv1EtAfb73jDW2xH7ms2SheixK3cJ7JwqQC",
  "key6": "QVoHCJnYvgMUseSAXrQQF2DKWSQMjPFUH9aADnoTYJcvLgNaVxt4b85gAXNPar2Gh6d1mccQLfjEcVkvGC6Bu4R",
  "key7": "591pAfHViFnHJiUrHqKTckAizXWfnpNVSUi9ERmebdryf4tWQYbXy6hxrHUuPunwgqyp4HH8u9vbjimxgwaH9ua2",
  "key8": "2AHJ2S28fYbNNsdseH1ZJyVJqtFEiS4QHdwXQhrsFfSyFAKktrYx8Rcb3bY1XN8xMdWiHBfPxLFBEfSTPcTfmhz9",
  "key9": "24Dna7CXLGL3Rnp79Ez3YQnMMP8bTNmnyxymfqgtpb2oR7qcWMYxdgSoC4F5cuwyFSwngmQiZ8CHmeFmzepSAtJA",
  "key10": "5iehBuKdr2q1YHVM1V13GR7MNLhzvpmHnDDXWSJFzFxMXQLRsCjBFZjBZoE5spBFR3m3vsNp5X2MgcpCAFj6K2tk",
  "key11": "Aw5iAqHQPQHFSXVnyqijZFw5zRGaTdLGF8TzpUUerH87ue2eJ13mQUQ5CQdEcP86GgBbefQY6NXuQB7javJTtx5",
  "key12": "zEQYYUSpo1sf8q9BCMajfbL3B2hrHZwAjhmTxvkbqvXvg3AGyCfAHKHcnZa98GHYs8BXqavnpnaHWL5R1bRwT4f",
  "key13": "5TmdfekqvrN2yQK8Dc5EErZ4aT1CAWytRCSs8fNaipWrXQqeVY7NGMDTNdADXCzbCzvoutPPDf7GoDSzLr6yY7KQ",
  "key14": "5FiF8PZ8EXTs2DuvMY1g3Bb7ztujzDVo7HSKBZ6Fayj6GTucHYCiBvbt5w1AxQzKqhiYpPZgsMUBAGt4Eb6C4j9Z",
  "key15": "31hgKJPrMvgZPvNx5gU2HGwdXtvJRr3tuZhqiKz3LVZHiw2KShgAwtDVTdXVFwD3iAWhFLsp7njEcB86YDe8eDpR",
  "key16": "4moWZbjoza2LQMQQN2fFhd12t8ke1tvHGvdYeFncJTDkDpxmcWJ8vVUdbhyd6koUyBGLknuTZKCVhYqfJ4Y9Sar1",
  "key17": "2v7jagQcnyds76KBbRKhSdkcXpu6bVEjwoDmHCW4Xzw6zUMnwZ8ossxSCC3M7b8irRZwetNUJgNW8cKAmmni4NoF",
  "key18": "3sg4eiHdCoK12YXTm5breSeBaACboAF3icanWk9Ksj2f2xx23E6QSexM4no7qWsjsF454mkjhXeckwGijZVDTFjQ",
  "key19": "5wQTwg9PHcB9sKDPqv8hcmEW1V5XTNxbH3xkqor5gecerBLmhq2nWQTzeiQh5QpgK9tpWa6PtHvQsWkqGfjptLT",
  "key20": "8FyyiaFMym4Qb8HobHKYw9VGhaS7j6bZcXoSnea6phcJGVqP6AZAkjuEdGrtrjgWBzt2mfdd9RU8jrg2MKyehkE",
  "key21": "49pwA1k8afv7NNvkcKLTMXEwjNdRE6XWKkBPNJEurhx5iuo64DQoiwAoHLrD3weZP8s8ouCqWqD4x7ZyTk87VdZM",
  "key22": "3q57FbEZ1ZAmjgJ1YjbQ9QZXRL5UcfyJJ8txFfmtyyBUTF69yfSEMXu31YjSkqg1512pDhd3EoKvaikg1G2FxQZe",
  "key23": "kcEXFHnfRrHi8opxJrrXHCet9M3Ur2tFghfPS31evuwRJpYHtfMgorzq11dNDE5DX36RuYK6yeUystKJxGR8xfq",
  "key24": "2RxUdHnR4h7pPqXZ9Gc21qq1119SodWWLdbsMV2Aij6jDhunSTbCWATYCSCGo36kgfriyfPRYetFBsSnzFXFYXZ5",
  "key25": "92qrx19i7bNGEfEfZrjA5e8s4kbv3PjQ62FoZcodja5ztkFWhNL92bbUBJJdvDTMaHt8bWSNb5jdsXNJeoX6Gt4",
  "key26": "5BxhiYbFao8VZq1DGji8oM8aefCJNzogSP4XR48YSVur4LgWTXvNXYzcaseTJ9o3xHzPtPjdsifAsErNnPJEMS4s",
  "key27": "ZR7Ks4a6HyF8t9EvdugKNXYcNqfC9MzyTNrsLCxmAiEXTHBrq3KUQ8XvWYJy3qNbT69FL2ZwZ8uNvteYMX8bjT8",
  "key28": "3G49ik6GKt6cFep5aySFNedUbBkR5uKnLi3k65infYeSqJtQyHch73nfhLewrM2aYnnPoczn3nxKTxfhh53G3V4b",
  "key29": "5YKAa2F4wHMkwya6vG2Fir71FNZW84b8CFJFjXp3EXA41JzztichXW9XXat3LajgoAuAYewWA53tgE4GkYGAhLEy",
  "key30": "YBXD3xftGDZw3ETb9vh72dzgzxZFCZtvChdHZ5PFHPEd9A4PwnT5QvoutKaB2Ny4VRUauNcswLbmE2PeYLRvbbf",
  "key31": "nX6vdATr1ESWPEoBNSNoqE9XMzp3ZuzjLuF9PJP97VLDKtEh95wNEXb3fp3Hcxx4qN2bE6aPu6iDWRWtUiA6pi1",
  "key32": "1QGwZy5GRrxcSG3vS24pky9M6vsZTzmGotfnxVFnVdDaDJm1bkxeUMiyDhbMYAPcao9ArRD17uvem9UVJyn9EyH",
  "key33": "2qiC2hg1MgiT8iMDVWZ7euUcWNeX8JvfNuNuSEM4rxGpCHcLH31fzGZdYBovWMEAVB4VEAoeFrVggMwncqsWD6ez",
  "key34": "223LBeFAHLGDTZadrKhRmzr4ZH1Hf3pHiTLr7Th2Bw9XcvqhPDPJYoK94WXJNwtuhELXtxz9Ac2Ci8sF5zKFxBfN",
  "key35": "5pD5dsB8Jjy5LcHnj3gBfoXH7JwZzUETYzoa3NsGjMrTt5DBBomFZP6nFsRpfxCA1rTS58nUTNqEEFxdpa1hmqxb",
  "key36": "wVwrC4s4xHFvBvivExXDc5DkfSbguhxqB3cifhAWbv4J5jpEn7FVqtS9ZvqNykxmSXuJrYqVFTgoEaDamMTdfEH",
  "key37": "2XUkDqfwcshuPnB3JuFFToLbggJQEfQiakuoj1WWHC2jYoh8Esk1QGJ9KfXREKVKEQStiyr2qUEQ1sgFauwY5P6X",
  "key38": "nyyAyURB7YobxZJNyx9Hws5G5AdxaeefASyiVcBeXYHqhNhMS2uqUBgU7QWzdCB1JFB8KGbZvcGxJTLYEXeT5H1",
  "key39": "SnaRiDkCZTM83uugWxZ9U1e8FA1XEpTHE4ujt9ixDeoNzirtgmNs4jHKNiYttvqK9LmZrnezgL2zZgtHxSWxXS1",
  "key40": "369VSqSkYkcNc5wCtamA8xHaN5Fida42fxxaMBiNiSCtGAZPU7XThiVMfzx7DRNibFRa1EHFcFx6mfjpERfqffcT",
  "key41": "4htakebrTfDriti4P2NRbcjjdd53spcJaN55tYTUF5CL3Kx3im3knX9XE6g8kaFG8S3ZwfBstugJqybsihQCsfYq",
  "key42": "5siL1LfyBGZKuJtqH5WMR54HYdgTXNe3ePxuWXvE1p2iQuzucEtXJ4HinbPRPjyH3wBFLnBYETigwcB22MCqZbaT",
  "key43": "42jHyxbFJ9Ysu5Lkt7LEgdhVnTyacGoLkNKTqmkJ7KbrD6Ph6dKkbA42LfeTm1jxz2UvUUaPYkxtShxmLNKuzb8x"
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
