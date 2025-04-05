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
    "Go8FxNjEkgSFvLDwGw58Cq3WXYALs2qggMmhbpEevXqiRdiBpGtmL1aubceGZ86z72GRhnAtBNdukwQGCyipjrW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56Hhjdu5yrqQmorB3SkzLJbGLd1wYKfFxMUWGdTa9CjweWiE9iZaViQP9nnbWYkRCYkxkLRJKbtqnrwtDtdbpBzG",
  "key1": "36PdFQiYApLPyjnaZjw8wEPR1cuiCPgQzCbxWUUMkqN2uDxktZHAjoTnaij3biNga89ScxNJtUdFbmBXzzg2ohHS",
  "key2": "5iqZnvEd7XnxteEKg3RKMGLGaRh7X79TP6KsvTCCeAjBBBiSeuweNcpUwVnnF3g9ypTCsGj14jmDdB2qnpaL5K9Y",
  "key3": "5kPQu1XAvase2tMkshziXBYx7v5b9ZXXCS6QDJ49NohrLabHh4tM3kzdbeNm8qqTpPSTY8TsKwjjTXBYmMu7QHSV",
  "key4": "4RzStoFFQWR68Px16x5DY5g1P8vJdP4AVewAubQQ3zpckeXWiKiyiDcNtDLuEuFouvaXWuxEQh65rktNXaZrtb5f",
  "key5": "5JVtKFwbavc4A81kWukEYjTviwAu8Pd4C6Pncvyag8DiFxWK5sUvVq5TR137eFJTjLhYo6tZEyg9tzDrnebjSBDq",
  "key6": "xfn3ticxM5YFDUNfzwvrRNy7DoxyxtmPop5ysas3Gab9KizL4NoLjatcQ6g9haFuM4Xg3aNv8enpBcUhQU2xcGJ",
  "key7": "epukMNUXzUNUVHx87imjRa4jiXqLg4N6A1dWxcjQaayfqpFhXDjgzvcRGf8EYmRaXG7Rq5GvWgM1dx7P5N3LRBL",
  "key8": "7LmgkcmN9b1WfEE6SHsxLnVxw7JjG4RyKdNKghpJ3hZXQkhhabH9vNe1Tr7Pap8b8o4KAfigb8ybR1hchVCxKyY",
  "key9": "63RZ9kjAMWKYjaocp6bxMRuRvbio8n21JvQkVNnzSzo3XGTqd6JwURkw3puXGQMXLy3SLyVD9DdmySmP5RzWucLg",
  "key10": "26cDwzDNJ5vjKn3NuHiHushLCbubDjJNepQdeHGRAc3Bvq3Snv1TcWuhWfHEutJczQS2LdhaEguYsSdBpBkhgbdr",
  "key11": "5p2uBWoJjBxz8WfptHyiANkmgCCZQ5kKxWFAcbnqLrPEjofp6mqRHoTL1zB8Tfyg3hoMWWnq198G73ptr3GaMEmp",
  "key12": "2HccTdijm98QLxsAShC8ZN4XsJbXDTauGu6YtNNMimMFGKJEZQgmobbd3rAE4HrqZJmRohVXwPY8fubLSwgpjTih",
  "key13": "5FtmZhLvKirhMT3UndAp9EgNrpK2zxGHWyqtBHjuhuUAHPWV3kcKEVsJg6SVUDbFY27cC17tobEPsN1opWEg6VXy",
  "key14": "LnPwGqdxKkymNutp6bwk6aTUVHXbyCs8YzXSi9bSDTTD2JbyphwGwEfXADVrW2PF65ewyNpPewQdQtKnFduqqep",
  "key15": "5XEMgZfPbe59ySxk5DmZ5PVVdCDJ4uZ1q1vr9DZwP9MJoGSZtPR5RcyrCHibyFUA46UgaVPHRXXnp3PENs3VEr7R",
  "key16": "pzCiFnYv7v69snDhKeaaBKKgNH4YLw3CvMWKuvA8UDBFU7h8h4bcRGWouH5aoCBUp1FFk5UafztNxihpdta9M1s",
  "key17": "ZtW4THzpn4sfYRL1EFxADPrBd2sMyiZy3N69xXAcrintqLUpDSe5cUw9RiyQYNhGJJcWAFeZG3cyrKobyDy57b1",
  "key18": "LfET7tULrYiVuBQB9WU7iPmWbhZooB5sWUGN5FqCpY2ArxzvEUZDPgv6G6yfN5WpftRUtH4XPxT3Mj2KVMV5skW",
  "key19": "3bxTNAvfNtp69GXeP72DZKM7d5psT1UqvE8CgkdrDAvVhhvp6nWgGVDLMCBvVbj9JDffSVxh1qke3gYQv6Er1v12",
  "key20": "2Es2cTPgVEnYJVR5LSgBkwMAyfCj4hPHAAjCzNUUJYxfZt4pkfvZTLiAeqQzXDvcGPyDT9DPoWELNkGosRvKF6za",
  "key21": "5pNaoWvBMLz23BFFXfwBjwVDYp8QHdWPchSbUXB6kA27dqeC8hJmbUqpRaGPny2PwdmbAwKNRy57RKnGb8xGZSHe",
  "key22": "544t4ph3HxivUPuJh4dcD71gSuviYoFYxT6CJ3FHefDJoes2rwyzweB2Pc4ssRFKxFs7PX2Mci5cHRLR9pmAMdWA",
  "key23": "2qw31YW21dWA6ZDxiRSFSJpqvoXMnWXJwJuMRhsZPvSM5hhrQRntkifYJHt11hsjDJ1PunFP5Yoj4oQHNoTxMVke",
  "key24": "4LmxPE5GcJ5oCHxnjgGKr7JjFB2gB78XrA9vK9XK77G3T28mzxdU8MBP4svkKjN7ZFCpc15XcwhPrw4mUoH11Ct",
  "key25": "4G7TWH22MiKZPjqorS6hGY8BJidkFa1UGzkqdHc6PQJHyLpCT429SSrkX1kvqzre52diiMA8fvpwGHSxQFrB7CZi",
  "key26": "pnh4pgygw12joJeyroSssB3NLjX3HpowUsAdQzr2Sd1sVmJQYmz5Gx5xqiJebz3RQEUqXzkm544FaTZjxny1Ur2",
  "key27": "5uh4A3wGMb1WVXPup17ZvTVATWrrxRjUmLKu4p7kghASxCvrDRHnwB3fHG8hcAnP9eRfsJYgG8pun8A8FNEvwy7U",
  "key28": "59E8oYkEcBYhnqKumqk68HU3bcUo1MLLN29mugSGe3NnHuLEC9cpRMSarpagVLAZG7AXmU1kzzJxjaPXL3CKx6it",
  "key29": "2WhXEmkwHfEdCr4VPtahKQoRsf7zZQDVvm5ptdTNLCknxFHeZURaJFFvV94wG6cSh3CoB3vSEeMX4Dv76j6MK3GN"
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
