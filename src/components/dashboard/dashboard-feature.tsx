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
    "3Mendyg4tNKvdz6VWMW838iRBJC2HLaXPUAhJMyvBYwFxC8j3BYp2ndn7FwPsau41axEQrwhnAuRQKu5VLWJCDwS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bvEAMiHpnhEfY6q6FQKCPAHZYB5ztJmcUByyAAAmMU1g6MpEMCSN95CjeaHSk4BCAQZE5Hwcr2x95MjVTzE5P5q",
  "key1": "3dxw149WnBSRdtNuKPXbGoMUcEgrhECZ147k4yCBBoMNjqLxgk9KPYjYULSNu9QNSzUy54Qa5jAYau938hKmWb83",
  "key2": "4M4SDrP4NCnQv4KiZzpGj76cMM3ctZQYwCyDX8g8E2Jw1QsJnjsEoDmP8Cc5xWba7zaiLJ6iqB9L5XEiCACCGv3C",
  "key3": "241PFAN3pxdFYQQfscnRwx8caoQgzYCLeRSM222MrzJWWmLcfkfiXq7JHX5WdxornRRTJ8bcH8MhrTTkxp1jhtg8",
  "key4": "3EoNRtDAF1T2jPWVf2yd2xbBjcBZLLoHKs1RfGDequGRRxjMS6m4AnZD2WoBMeMdZEJPUsGCydjsvaN88WakS5xQ",
  "key5": "9Bq4pF69JBrfVezErrfAGVjKT2uRwgtMkNHkzzCpvWYPyWGBECN3nu1myH89kaWcwgqsPmeXpCwTSbJcngBH6iQ",
  "key6": "3NJoYQksHSq2MPT3MVtKeVTfXgTZkukKT1NsBKNJDeeoacvJyUbHw7LGteyg6dxunCbE8TrvWbLitjUEXejQegsz",
  "key7": "5KRqXvU1rfkrPiMhrEcQh1Q2dtcXkZLxibSRaNstYw7czdRbURXGzgmsMXUw52MGTkdFSWhDMFa1L3xPQWA2VTQw",
  "key8": "DQVoKPHf2ta91R8vGCREyiK3sRdkivWUdwngmXCpWPiAK8BTJBHFi5s3WREF2p1p2btc14YTim3wu1gihLC1JUZ",
  "key9": "5uvf1t8AF2Ku6VAHNgiyxm4id3Xydd6qj4drj73HjrsYHcFzCNjFH9RQanMvX6BAcFmuY35oNt5gr6nCnD2yUSEq",
  "key10": "4A8r2qNbADWgcxyvDAc8vPB4EBYiTg1jguxSjPDfp66ZjV4DzeYto7mK5WhMYMncCyUTe1ML43oCxeuAo3Qb2aoV",
  "key11": "2LPFhMHR7HeAYZy9pGBbfATnSY2fVRL7YEtGMRdw2XTEkENkUxUaSKJpSxuZ57ep5ZW2eMVqhuVtmf9mdUuHbS2x",
  "key12": "2Hz2nZFPVRxnEB6UmFLFKh5mkKMqkkXvyXgrWaxdwGFXLRcaK5ybGUjdmUMY6XPWVjAZMCBsh5YvqY3BGUspSjjz",
  "key13": "42Pvu1nQEVAurg3omCUsMcuJ6NHwAXrv3XpHQbdwUZZsJBMkmN18Wg2KjEv19jd1GZeZBYrmoVyBAUcety78vzbh",
  "key14": "5TvsYFqDrVSQWzMQJdt8gkqt4vY1YgB3fFNV1zRHncfg8Qswm9UkW55WtgGCsgtc6pStJPFKQyDyp8yMS8TnwGU8",
  "key15": "2HC4oCu7LHacRcVeH5FNXJUxqJTq9aTMWfQ2SG5FvGfES1DFPfVVxBDPK4WcPaQBcXrCLG53xo98m8nzVYnrciuN",
  "key16": "2beHo3TcjfhyK1pCzQj4XbM8GpkNWNWGMXB3LzkJrekz9sua8jpuEgq9Wgk7kGx8HzvrzJek5ts7m9ciN9m8b8mW",
  "key17": "4yDQLY2in4hnSJoivipaq64s2UyazEGKSJQ26qn2zuHvSdTT71hvbDhs4apnUCAQ7AuS8dNyj7hPNxLz29ZQBfFJ",
  "key18": "5xJp4bL69e8Uwpc2tZ4bueQAE3uRyj3YD9ctU2bT514zr4RH8c7qtfniFNDTRoH6UzdpMcd84Gtw1dtbtFGLDbqw",
  "key19": "5xBM5qpkEDx3VrQkNvk4D2Nw1CpfYM9GwVqam2A3FRJRb8pzV9wj7ZCK4iHkgqJ9DCnjuC5qGJXFpdNBvXH9dAVs",
  "key20": "3s1HxrmXSRnMM8GwYJ9Cj6A8LFdBHUgnhAgv1eR8hmYnFkpDeXQmgNjjKjsNEnf7yEwceGX8PqkHQBDcBq3niphr",
  "key21": "3wApV7eCXZCHNs8vEUvAzXedsBQAsChhXYrUrTKvvenQCuhXbsVcuYAWL9f4Jgk9uSUpkrXBAvs2DsW7wR4hiLkd",
  "key22": "tgC5tuSheWPF9gANbuzkapMcoxdXyoqi8p7JHDT29YQmdVxWEfszFDFLvXW7T9Db25PwswJBLLhyZ7pzXdsFsvw",
  "key23": "4UQ4MKR9Nv4ge124HxxqrDzTwDtUTmjZcnkL5Jr9FEouEhBqsskEgE4DM5jRouGeGMWrSBpVpuLmfcaWXTh7eTKk",
  "key24": "vxrqMXhkufjhGu9Zn9DEUUyv46b32cDWcZLoK8aoMmXUMwCQ9pu86yNGNFpm6xGbKDLKw3C3YW75HB8kDhRL8Bx",
  "key25": "hfEVzWqhfxLsUjH58o7qvJyrhBiKmHcWdsGNC654cxLKw2n2URCLYmKJJQt3V73GuexGbTb4XCkPkwrcNzQYQ3z",
  "key26": "5LvpFZRyawadcMXVo2goyihzuYeqJGp7Q75k73E8L81fMpUJYfvGqZzhYxb9c9YUoVwAwcmcWQPpYyGSAkpsLe4S",
  "key27": "6o9qAmafz3XDNUiCcLpTxNKPf5rThtwhGDnp3tY7dDFUBgzKukVLYM9Rv5NFDj7jcD9Tgq8c5GuHftDfFvcAF2F",
  "key28": "3sGUqThJyPy4VSQfWyESVtdc5BtwYunPZLYSqQdkQYEHTUfdmoTkAgWSABfSwxKbAx1ERuu2FmDBUFmXuG2pMHsg",
  "key29": "2tzBjYqJgjh4jinTrLT6ZhvnBtHrkFWrdxrm9xah72acPd29hUQbCDk8PgB9wzAtCZBnstZKXbSfUMNuPN9h1p3L",
  "key30": "4CaZm1YVFa187GveAccigE3CWS47HWHhz11iwWmBEAXZ5eX828NH76BTk31A5CZFupy2mj52FwrcMkYYfpuBi6Kp",
  "key31": "CYfJ8HpfZSwAdwjB55WdaVrLUdytqGYZmVarybMadui4vwBACwNtFG1hew6RhciiC6DG16xNDCC3PwRDRwFVPn4",
  "key32": "BBqJUPXrVCUDoFyzy2DsqMv5kB4Ug6JBVVH3xdcL5jgBYQTGnHxvg2bSvewQNmwjRgdQ6pa1gDAdnyU6zDk4EaZ",
  "key33": "5Bdzdx2FMVDHBBYeY21HDo52RkVUVJXe1LDm2qiz1G4eHVWEfvCL2wAmxENZKGKnTS9puag2GSujktVcP9Jm9Y4M",
  "key34": "2enukuXAe1Dg2mLHvuUN5aM7VzVDKZ4wuXCHNj2ZYLbsuMmtE3PKZpnJAY97MAy1MC7f6EX8vRrDfN1uJ3nLAGzv",
  "key35": "51waFPhBkzKAjnr1frE8icLmQwMKT4gerauvU3hYdypTNnASWL5HPgcgVro36N3rdZ7bUWpJChGkZwp9fnvgo7fr",
  "key36": "5CPGCB9T3fHEgbLt7NERrHkvC4GMxMdJ3ZpUPtx1gbBXVF1EJhRVTsuY7oHxSFVexjj4D1nAy4wJwQ4sUNfLT1wp",
  "key37": "57DjsmcPz3arMHtuoBV8KQfBRkp68M2hMPqpQJ2Hdxhzgjcbxyn4cpNvPPHceV4xVq19rSFTx8EsoEy6dS8D9SGL",
  "key38": "4A6UmzqgJXhJCdQ3KDiKRLp9sPXRS9MFuRJ36z98SACxCGfhvRjcquDkyH7h32hh957sBQU2sVTKGKp5pVaZqAtk",
  "key39": "3Qav9NGH2YHmSGrqzGu4ua39Z4TENGJdPyV8z658zsNVUN7Qd8q1k4h2Q37RoJRFbZkCcZgXH8Y9vLBRVDrB7N5d",
  "key40": "3nX8ZXfnHkFKtmpNQkdyTAcXCzwWJ9RptMPUsJeFwMe6MFKpFmwfH6RdEThPJGew9zXK2oggpVADm3HCqsLVeAdj",
  "key41": "5EdaJHSHAunjbzSwMn8Vw19g4jPfYVvwyUWP9zqGAbR5ZQKswGT26EfSg4FhbBMt9aJinZzoNGjkd8FhbCdfRZtr",
  "key42": "5JXknPYktDDUyTiRm8R5q7RhRR2XmBCLz5r9eUQLgHvmDWiZpjfD4wNqCXrAViG7CGTXm8iGkPC1aXphPMegrN3K",
  "key43": "251G6YhRfSaAxyxUeP8Rp6m2yAQyYd4KYwATzTe1W1qNuvdubBgt13tprL9zYMZasMjv7sSBANmATvz6DUZu6XQy",
  "key44": "2Tp6YdEpkCxm4G23KpTma8n9ipTHwtdK4SiSWqbnMmh6Pqdt7QQBhH6fUGKfm46G7sZPW5mDWPJGfh92X9ptVuY7",
  "key45": "56E7tfBgV8NZvuXWCLQ8eYPC2eeykENp8W8BrmTWzZBJe7WjeUGJucCFJLnAUYPjt9wbRNrGqFgAtac6DCqco4ai",
  "key46": "2fPpzM8WedsXE3Vf2EqUybcdnxxFXRa8q6nyWT7iCyhGBLZQCbSCqRmQHgEgym68RnE3nmBK9X6yzQf2MMho3iUn",
  "key47": "rtu9KfyW6RqSrcKS23E7rb3viWtRHVMUNStEfsJV5DmdN8nV7gMSbMTHu5qe7gWHZcyqWwcD8C8bAVbEU9nxq9U",
  "key48": "3tBSHygMJL1dgcmKKU9inYTiJdSwqYDNqVPYzcGmoZbPNaqFTVSzjdrKi9dhYdzSkfq747v4SYVeJYBYFX6gjuij"
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
