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
    "3qm29uFgv6Trs7xeJKvbi9tePRpvqjtQCD5saLx9qgaHt5ZgPDAYBNoVASvLVkvUbqSy1yYiBbGYebo72munHRq4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "213QN3issKaRcEsKpXRiPD2BnRPBaGNSzsGRarLFhr6N1TjS9hu4i6BZrSsghiu5VZENn2ezDprAAib44EingVuV",
  "key1": "41UjTNky4cDj4yT4KHdDotWS9nMe1pcgnM693KYon1xS4Rf6RnUXYwDviB7zm2vfaKYRX6K64CfimVy2rFCt5FeL",
  "key2": "kTPohvEEfWzheNS3M72xUTHaMFwmwrPbiMQoVFkedQckcVxoQ1jN7ehLnA2Bu5ZPsUHVNuvVWdRQDHfxSC3epyT",
  "key3": "3YSWVKzAkKDrCPUqrERrTC1X2Bt6uNKoN82Ltx2EXhXu9qzfeQMB7xo5HzNbP9ZGv6UQLxuVyfzsJ3mKsG9as3nm",
  "key4": "ZRTxswV5KyzXCFXLUFnn4nWgti8ZuV73eQtgPirupK5CDRAedZrKYjuxoFb2MFFYBCAw4mW1wP23yDEkfKhQrLo",
  "key5": "3svxXuSMopEnWvLojc4f66Xshi9ZZuLukyc1cEUgacsRcKEymNrsjWenK2NK7KKogJMHQ2UVWcogYsVboDA2Zak5",
  "key6": "47iiCNhBvSAVGmYcwi9wX1FRnBgNAKEopv37xaxrcLhcEd8dTVnny4KYCCaB3mFE4wFnKAQgG4zkXNGMKetYZwEp",
  "key7": "2diwXVGVbhyZiDMCezjN3KS7sdnwYYNCQ83efk5m8t5NeXRMbe6mFCJnqSYebfikZRCAPGx3D1e1Ve3NGB62ofrU",
  "key8": "4DNhgd41LNCQYfEbdoajhjRC5XLBWewyfUE5DBjkYG7xsNN24JqjNboeUVQPyP1PgqYceA5eusksT5JXgFLfQrP2",
  "key9": "3afVfCUenCxFPM9hjSDQCAHMhmy4W12GLcf1Z92w9eTxRrBPwBGcc5meP5viMfz1APXRCrMAjg9NokVqNn1u284R",
  "key10": "35mMWjFXfPJWzoRdzAAgayP4g2Tqow4EeDDxufkhh6V2ZJJNLopWuEYrAftApaWpNWH1ESGfxiUShisX5ab8kC4o",
  "key11": "2t4SKX5hLFyT6dbD6BcQYp1RQkw2p3Guf7oaBwYDNeWoouvWjRAHnmM5FJonVSyVSDttJiu8733EtwC4WmV9wNDU",
  "key12": "4nvBVmSatHShy7ykR8dy87y6pYhxVyD4L7yuptEGKH4mjcuxFsb6YWeiJdtPFfwHzTpXZpViko6s2BPQJAcwNvC",
  "key13": "5BU6qqUqKFaa3B6jVuUALPMhHjb73VmRb6RtWR5r14NQNz8wBBuDMWEZzDgAhErZBQhLreeTJPY1s9L2DSV4Hyvo",
  "key14": "4tjpXZQSRk72ger2MvGvJAkRREmKHrzY1pnaWhdLpvkRBTgWQFiUcHUYuXAqti8TwcqQHoFARuq4RLLpx7gpr4kL",
  "key15": "3knk3CzaULUkNzvXr8J4FEWVqSWtpwBKqRCwk6XcQZK3L1MfaLCybanmRUiK2kA2ArEVSnEnQBUbZVSbnNGyurBH",
  "key16": "5m1gwb23mwPfBwuCD2i95v4mdFmg96wZuzXEqYkrF1vRDcrFwfPkxqB6Fvn6K1AUKeSkrcSuRCpDQgu5cNVeu3ai",
  "key17": "66FxZLhMXx3soc5vAoA4mMCwCbTb3adov1GTCFiXmcXxWL9ySyXJTRqLpXjX5HpBXTdups6exxN8tHHLmQ75NDJm",
  "key18": "4KNVpLEKKQEtcFPb6E7MPhHz1iQgnufYjRNKHamTC2MQsjzBoWdmYhfNVVmnKrQzcpcVGLrbUDurFDw1tw2cMMbm",
  "key19": "2Nect4vKxDfsw8hQSvVVctzMnTME74GNuBSR7CuknxPgKeFgLsJNHMGBkZSnKqjLcqJcYXnJ15DXPH6EUozmAMoq",
  "key20": "2X4ctNbu61EebUn399KYiye6kKuKzRhYdLdvRASZsrvtKnBUrnTZikxMFzyHitT93w7eLk4yw1vuk11f4hkDEobP",
  "key21": "4Zf3ddnjJTDcmhjQQrK7Mf2PfEQwBKTTFbuFUoHe5VQsGN3EEM21bGqEoSxpJL71tDowzuAfxsYnGzuKR2uMTFr5",
  "key22": "2yRsU7BonsG1TAFpG2vKC6i5bvEBjqcXTnhh2g4BATGCQPDXwiDSpbjXTMdKzDSYHPYzd5kzdNzgpFPdgt6SkHxT",
  "key23": "5nAx8zGMN6j82PrQV8McEMoCCr8YnWtLSsn5SQe51Wg5LUwdKMVUMmodXgDbaenVXgTX8DWdnmpenneaVB5HrjHj",
  "key24": "sASp181k8Rf4aWLoQw6CGckqkKZh1xt6ELdvxTUQpDvuUYcq3UvKMFH5CaYgyAxn5JLXiMCr2c8r8xT9vuq2kw9",
  "key25": "2sWtqJFkp6WvtPLcgdPv1JhWqmM1CsoyeqvJHF72TkdRMzE53WL6CvfwTeWwxQMzQSr6SwLNnfZkEyJbQDVhU6pc",
  "key26": "2GEmY8RU5foZXKYHMMMU7NQJBap5thyXd1W1s95yD487jf2ZDaDfPrx4mLCgKDkQEMpWp2sbZpE6k8SQvW7ppsFs",
  "key27": "QxLB7RbNKGAAvEYhFYjuPvqHKfXfGGRYnchopap4M2bSoancuRnTh6LB3rAtCDkJBRRLWvdNVUhujVABT4qteAm",
  "key28": "JFSVukCWAbdbE3ZFqbBRQmqdR1FT2FSs9TosYBxYTFYHDn1eArD28QnvLhoZ7SYSpfB3vDg3qmdYoJtjpskq4qQ",
  "key29": "31VrmXD51PBEQ2541JHFfpagZ5uoRK849Vdo9tAa7zFigwVq673GVvJLAjZjxgVZMRWudAwueAEQ76AmKhkvLMDH",
  "key30": "4e533gEanyDqVhhn4HCACD3ycDypmMGueQfb7UYxaWPXxv78frii7V2RdFETvsBBZsWxJr3xMFqFXDNs6NG6mM6a",
  "key31": "5Y1gjeddZCAXHDgNPtfRnweBLAZn6pqPZXcaFtoe9MVZiR2UrN6c7HAvgkWmKZbGpqhPKikpySFFX4qqRJ828fn1",
  "key32": "2w49esYNzfQ2iqsapUtZPhyPz2iMCzU6ziYeaYf1ViMcvK7WiqnnLQvrtu1ZbNdg7riJ9eS1kLHBT2jtKMUdgxEN",
  "key33": "5ntSXi77FDpszqk6uqEUHuo9m3B4zMZJK2B7km1scLWHtw1rPf37DdJtdLt7Ui2E7mDxsgnSJZ4LW39YVxRVmir6",
  "key34": "2XmkEUecFkUS91HV9wAwvrA6jDeicuer5HnBZeHKjar3exJnrJTSDaBruELRBmz5i6v49ttaj7qZL9sWMjxWkP6y",
  "key35": "5tqdpxkiBZP63vi1bnxNkXGCtZ33zwg5AHTUvQCcEBVYcoWXwVxnMtXB1h96X9GHeTFTjLJaG2UdJVLvoNji3ax4",
  "key36": "kR9NQrYiCTcu7Z6WhxzwSvbXjUdog7NRPAHxMBCSmT16hrpboALLk67e73GSkaotCYi7RiTQCGaFqDRHPfnhURG",
  "key37": "4Gi7KVoe3NYLWXxvGqXL9Je1VYdrz6zaW1vFKw6bWyCKzxajd66BNTsJE6GpQvqmThNR4XxteaAxniHgo71Epnib"
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
