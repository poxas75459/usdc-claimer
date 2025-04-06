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
    "4RFAHaCYcZCsA3y3KWnuSGj55QVMoywZq8UZ9Svt7gswN9yLEk1cu2H5GdhRaxdt3cuhcn8QDkQScyipvSTAHcpD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kJy5NgELbLDNN4N9fYf6qfN5aN4b8TSK4CkE7mHqVwwC64oEB9mVXiNG2pvtWEhuhecrYeTJRxypoUTKFXYNhgQ",
  "key1": "4r9Qw3EFM9CWu5tRkp3BM2svU9t8rKTSGrbgGFDqXrM71wKAWGDyifj8X8NiCp9HUSDicrVhFj9bfYTLQYJia4ug",
  "key2": "2uDCfFBqZ41C9J3YomzVRpyYivppi8bPsPS9h2FGbNhQ9E91TDtG6jnUfF92uRtwSaSbTKAMVPmmALzCJWaqF3Cf",
  "key3": "jkNmEhQL3AQiqqnTaakKrggDVMvywyxmvgyRgCrj17N2voDgFWcZ1w7EjfSm5HYnmYwJwvZ6ZnfmgGAcnt4YsKU",
  "key4": "4DGP15yAwiMBu2TMkSVeCg4aoFVTMfEZAhVrDgk4x6NEg1sG8ppWDgrUJ9z3pCU13LKkBGcsf5QbRJH5x9jnrirf",
  "key5": "zoa1m8JwQn2KUuJswPQarhhagGNVQBQojG22F2LmdKgNxfJo7jfmX8Yj5sJGG35M3JDSHgx9hExXjkn3LBUmmjr",
  "key6": "dyLT9wusGMhyB33FsQNjtiaY3cSCY64cL9bt9YH6uxC8tGEGioq9xWG6GsdnNyoeJYJ2HoNKoNFzFHetCqwgJ1Y",
  "key7": "2L1age6HvVhuo1pb3xQfqAsZSkM2sPi2eEsAfxQAJqxHaLaa4NjhnVXmgDVV9bsrFKdDa9GpLmfhdAK1WH2n7PCF",
  "key8": "3YRJx6ZT97qdyodJXYbq1aBGKfLkWna6Re2pwgoz5gSK9AJFLW6KHxSGciTmWaKdUR13ZhSQTE843MULvUSeSi4t",
  "key9": "2MgGuYSZDYLHEUPnvohrdJNnW65FgPzxrZpnvK5aVnYQtzrcWJuw6S95EgJBMBvd6TzAfQU4rrMQfSC2NRWqWbeG",
  "key10": "5xHR4Kxf76psPLg8CKYBYsAnCZZUhCCtjdBLTA1oRR4pyCebBc4YMhsJHzhZA6nu3dzuDAL2wnQURm7ZeLqZnbq6",
  "key11": "4yoMmE87uBb4pKdkptv973rtHxsbi2aU5bq5g64P3vQ2PDErRVZ9HvtQ5bGYk38pHYFdJujpFid62Xk56GMQsNZW",
  "key12": "3UL9Ahy6Dr6pXez3g1oosvuPS5kXFf6viFAE2cFtm7jq4aCS1GdNbU6pUp2BLbgmmKoFPEtJEM5DPxu5jxovsKyc",
  "key13": "3AYRAPtc9qUgnJEDTjFihZvaMiUxPFAxooKCAD7HFNWLJLSADbN6kPeuKDsjnfqDyatjZsWiz5VVjwjD55imkyot",
  "key14": "2g871j4369qQbz4rTKK8tWhLeBwqGwq5N3wQNpAF8TYZEU2gAzaaAxNnS2uNnGtGqrKxGPRBSgKxZPMj4zqPwJ5V",
  "key15": "4YXakygVSUvfwaPaipSJhaYtcXhxeHa1CkVNrTKnR1F8Rwb4CpxDUU1VTiJD2c6Yjw4MYkmNdEE9GcSVT3JYN3E5",
  "key16": "5SL8Ns3WfPVtS8mh8dUefFcNx5xesAk2e2aTjkyxq3od3CVi2F9GiVjD7pggGa9XRw8i8hrkJLCMPmorHwVAfNfN",
  "key17": "2yQ2XqnzeK2zvFcQGUCBMZ5CEytEi3sh95m4xq3iRfTgVVXuuS4yd3emL5iUsXKE9dPA1zqfjYvJmFTD9eTkZn8Q",
  "key18": "2pGBt6gUSdBtAcT73UJHxtzGJ1LadwKMnssAnJtXqeue6UcCqP7M3jKC6ESUuWpXumcHHxuzLRTkVqAJ69y8A8i1",
  "key19": "3SLUXHWzkTvM4dVMGbmyeH1rRX3ULSPpXC2w1ddr8bNqE5obDYGCdWGzMCzzJhaQjN2NxdF3b7B8d47DVUrQH2F3",
  "key20": "34axjAk3f8wdv4CiY8HKjEyDvKjcihowvcE2tBXa47q9g8jJwN1TNu2vZqQqCiqwuKX2PpvMrigdbRnF2AdFNHiV",
  "key21": "3aowZKAm1QrNYbPKQwg4jiwQqQurfZQDgG5HVSbt52DbEeTmTxoUUXXGiLBgTJrN7XBUfpksFiJpw6c83mjgYca3",
  "key22": "9tu7bx4BT4CMKqaZYbkiRKgXKy3VnDTYkn4Ds9NacbE5VUXFoZ41XQp9vqZskWahpbpYRQc65P25Ft46UhHizbz",
  "key23": "3J3FRv7f1tQgbbm72bRL9CPjFj2yPpKpMjkAN5S7x8RChb6nUsoHF5FBLpWuhqQ5u89uvFrUsbzQtvYpv4MWVXD",
  "key24": "2KvJHjD2ghNgmezvVngESLEp262GYPDURRm4aRZpnC2BTPQcxEmYcYVdJnGhhDTkwDcHbxkDZPEm9UU6gr14Dufg",
  "key25": "5EXp6E3Gqj3r6CVBAGGA41jKxuMJki5WMAUPVZRQr94KVUiq5NvHYHkUCYECBP6iBQJ1LkBx14KVPfNpkMPRMSt6",
  "key26": "fKE4vRWcuvmCScGdkgGkhkS2M8dGNMsvH72SopmXKepmEbHyKiQg2ecJMYPLXpFV2MUjBnezh9ooAkKrEtcUMn3",
  "key27": "2okLHzHL4gpNzytnP7EU9kEykSn9x4ogc5ZgoJxNXZw2Xooq6sWy4KJxQRyN5ky3erKGgEsa6uf84Y5Dz8fzh45P",
  "key28": "3PYVJ2qVJwnmrze6HsJoyfoNXGdzVZjvfczwoybaUbMT6m7UTXmhszgwnq8bp6insPURLDw3FN77Dw2o6njiLedR",
  "key29": "5cupHdmsX7VE3PjA7md9AU7i9jV3kAei7Qnd51keq8CaJ9pNahi5XZswXVHuAQYuN1DmU8MtQ1VwBRsdrga1gGsC",
  "key30": "EsticRj3uLMeKD9XGgAR5BsYWQwnq4sjA9MiZ7uLwC2sKqX5jfw8kK2pXjyCDrKBcXdVLJMn4M4ddxgmkUGFm6B",
  "key31": "66t5v88urxs6PG87ube2wQe8Ht9siocPPFRYBAg2Sitfi8vBATLxZZQL4t3qoZGj5TyJuaN6aJTxDiecPophbvZ5",
  "key32": "2iPoiS3iEau1AvvHxkrzNpUh3deXoTfpmCFUvYAqyMXffJAyrJGL1yf8tQQLhZZ7mzVkwYhev8uRwcHN2xDdouXT",
  "key33": "43nQ8nvCJXdBGirVCHSXTfCrDBStznX8tz1VTxHqsuTAN9iQXTXvBm6efjYQWMnHiPynAS28zRy4C8vK4Yes91J9",
  "key34": "5jwUQQCu1GJjD1DGKdmVCJiNQXNRhAGKbsuA5MqY97bRFeM81FPCA32v75afxKgb6cu2Qe3cdStSmJbkjgYACyj4",
  "key35": "3NrTcigzbpWrSVhkNPXd3qsymqKJ6oVQqmU1Z75qkDvkALRHs193jugE1bDYtfwabwdrVVQPeFdUCyYUpkDAu2K7",
  "key36": "5PxVCa7ycxWeVUiUqCbPYBQD9umEFzeUKrMAubchRnT17eVburH1xqd6BBZFEdZamDY1KjfDRQHGbXFEAeakepof",
  "key37": "3KPWGkn9L1gbVjNkV4brjaUsvc3dZnYZ9fzWX9Df9MnJLx9aqgTfv92MvDQzE45gz8Xp2bmgfBGYgV8Sx2khkwrj",
  "key38": "2g6wmu9K4enDM9dcgqfUyB6kudZYNyANRYcTu1X8Se3AEcX9XKzQgQWwbmbsGUMftqpChdrN9FKgUNsTURy3ZggG",
  "key39": "4kT18yMY6mwFJ3PEApkSgXgct9K4MuDjvkvJep1U4KFZRP39rE3SxWfETjtpr29m333717Qn9zXBU3WiAB42f2Jf",
  "key40": "W2CnJepPk5dAxgh4CghasneWRS9KFa1vib6VnUfFr1asMvVt2vJwpPc4TofyDrteasfiDXVrnehGnRHMB8QGPzE",
  "key41": "dBJEviWqXmVMwu9zZVtUr1G2TqH8kyHk34FhEVqXAcckhR827ng8NjizgC5ewHYc6waymnnjWdT4rzReJdrchMd",
  "key42": "51j9XXzS5puWwFmWcbRJNAtWhPLhX9pcATXE2ZMMeRRQBSPUp8R15wYksLAJtUSNqFS5g9zRmomBmQj7RKiUCCbM",
  "key43": "4mLbMMh3TzZptJqmKYZRD7ohdwLfsrdU6iShsqTmwfX9SsQigR3R4GEi4KctViu1svapQtqfNq7SQZdVTZBrVskN",
  "key44": "5NqCFaHLCPSHsjSgFh7R4BpBpMiBqyaqf8VeuWGmarQh3NF8UEfT1VFBmc5auwxPdBsMsLXVX1eEjuXMLRuXjcwG",
  "key45": "y3shywuHN1jPqnDXakNU5oVf3ZvrGw3zsRyuHx4Lr3haPB6RxbXYcXELEeCCrQnRbphxD6a1CzWdF7NK7yuJDkx"
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
