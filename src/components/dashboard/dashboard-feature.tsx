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
    "xDnj6z9ZG6au4Xizy3nWY1rFGPFBh24fihFSwCraPf5Jx73T2EMCNjCfnd6LhomGUEDAbaZP3GswMQnPA7PqDxD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Pb7EpYnLwUSsN6rFDtmodKZ85d2BGXuAaxvJTaQHkGJzG1VLs2inqPtQGeEdLunhrTSDw97bYAE2Kv7G5mfRhMF",
  "key1": "4e6H6GiMffmJAmLV5FoQ6FchZfUVNsVfzUiMLyRRbj8eU5jjfrDwtiF76smMiFgAfXy52cat8Dn5MkYXza241Zwe",
  "key2": "41mEV3ZuUYthKYbji6ZCA4E669s5Qh7uUcYRWJWajn2YSrsBx8kjK6w5StA4qWrbMRNySDtg5H8Bw77GubQtsb7N",
  "key3": "4NbMfamDM8dMTGVSJHSj81uy5iYxJQoTBEdD85oiEMMj1VeXqzLptvweTiNDxtJSTVpMwcEecNwnnXu1FjVvnjTn",
  "key4": "48mKTEtdkiifpcDPLk7jy5W8vcGAKKV9LzZqDK49efdUdBw74dehytS8vz9VS4ShkgEZTSK6eYXTtLi55kkMNA2e",
  "key5": "5KVTgGAsrFZPXDStM4pGtL269egmjBPviVmLNSX2GmNSZ8nhhrxtkBKG3tVdzrJ5Zu1B42czyb29QF7bg1DFekvd",
  "key6": "3XPCBv6nqWjuJyLLxacWJRJMeBbYZUjXx8sdEhnmhgH2y2ouL2CdjdiDsyQgcvSJTYJLiMg1Pqiys5WDr6yG2H1L",
  "key7": "5XQNajtHpbVRcd1tfrzCqQr5iAC7MdBdVhtuLKqpmA2bMxHttqDk99ChTrVpNFSSXdYLUrBvr6SXccbpEf1UH8xR",
  "key8": "5Ufa4xx5FKdZtPHS9vfqFQHKWfn7LyoXUw7XfNskmHtuh7DKCa6z68xcTgBVHQXmJhU5UtVdruvDsBY1LjsSg3FT",
  "key9": "iQU1KCEFoXpkhsLsnQ5szEWjqcwXhM3vLfR4WVfmFmCMT8FzdpbGSPqQk7dVCEDKssFG4rdojTNpn2ckBFSa7Fh",
  "key10": "4hGniDNYNkUBPKiSu9afBYWG8owjtdoxDSDNjF4YasDhqBm7bCpwZMoZkhVE55CMkW1m3EFA2aGpQxpWcaLp989w",
  "key11": "5iKhAGaxEUwoPwZMHsX9kd52yaufAGL8XEB3JyYN2c34gjVVdAzmY8zXSU31Fd5UijN8jBcQkvF9DMeMqv9ZFZqd",
  "key12": "3uGaYmXXaM36hWU3ax7ocHsSAPewQFyHUtoExAPsKonvEsq4yiCbQB8hoxpeRbk2poyGyCxvXynSSwWEEJWHWZ3z",
  "key13": "2gQaCCAMcNVTizxdASRCz9Dn6SqrGMzUmUKvezN5DRphRAo2AW1KxUGpLDHiQ1Vsk9jCZq82NmRjCFeutxfh6tEz",
  "key14": "28LYA7QNM7mN1RvVSYjCQDmbQHp7GxEfnuNATddp4LHfPX3PY9E8ooUXZriNyvD3xGSuqTfPkrN4yhMxboivQYNJ",
  "key15": "5AuAq5x5JuuNNyALGojLenqtnvX9Sub4iLLjWE2CnnzTuLM2Fj5sUE1ojFySU7N9uwwgQ3xudNNFgzkNtxrJ6HmJ",
  "key16": "53q4dMET837KXmWx31oR3HQbKnFaRfGXexMd7MQPMnRM7g74JkBcLkKkUhY1jfoTfcfzqsDutRoPsk1YL67Ad4nR",
  "key17": "3JJ7q7qB3cj8tGt7dCg2HNBjQoX252PiTZsHjay66Q2ASJjyH32bGMmtAcb3JPx4J4FEjx621B1ayB7QXUofCHq5",
  "key18": "2Z6VL4MxEyV6BXNtVCiY9sWuxGyAwKh4UpqLXMbGbcipSqt136V7PhnkYhHb5y535zCSnQR3quEmXNJDcC8VFExq",
  "key19": "3iaFLrqTvSzYuJpM839g9mUvEnMeJHjXLjfCze6JhYraoQGSGF4rSThK2UMasfXRF7Lc8dhCQt8EvaMwTUJZWZ5K",
  "key20": "5kA73CuAvT6zySXavp2ee9FxeeA4RmQqE5DqqVNmbm49rhSMZLv8ZssN81kjremTxcMQCT34WZiTonM9owrMv3kp",
  "key21": "5fdJNCxu3W8VY5egxGgzTDbmVFDE39UV4rkpcQNKxujBtaYyXJWkSuX1rX1kHJXusUAAmEdNGhyPfxpgwAf1Nhb6",
  "key22": "5affoV5EHcZcP7moYjvxtejL5h8EeXRuzdQCGeYzaRupTa8qe1tFLXmGKESHyi54xm9miRZBHx1k8edww46HpdDf",
  "key23": "2g1hUKdSBcpbpA75Qa19RJk884NZkKLBnHkxG3ZUUzNkEGJeEb7B5LhPLEcRbSoYQUccbC7WkawWYrH1Q1p5rqSF",
  "key24": "2C6WvwRVuXTr5B1qg1r5WoJRt4PXrTwGqrJVKpDFbQby8KEbbFpg8CTAuFvq1PmzbR3ABAu8dQGTyy4AWK6gAwma",
  "key25": "4Qb7sAzWdmBJQhjBZqSTvUcmVtjCypRxooFzsFoUctQGmMwBvfofpE3AhAEczTXxsqynSA6VcopXE8VZB5Q9FfPQ",
  "key26": "4X3DTH8bi4XJnfSdo4svrhZifrhrLa9uKSABBbTiW27mNoTSabAHmU1mZgU6DRM3FrmwePm4MaVUcEgSRCrbV1Vj",
  "key27": "5GcZC1ekuchXtymSJXkoSu4xePcvwNZSkQya1xuWePuFbL9Zwumc2CRzcW7tmNGgHuRPXWaJzHu3wR26c7ahY9P1"
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
