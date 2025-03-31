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
    "36iK1gdL3LK2khw7MbN8wNSvpGTX5MCjfW1UhxxdDd6XL94Nz1LJWKp7gqfSZBxoURy6aViXiJ4pxrJxEfwJGXw9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jLaR248mqyEeTKWer69u5PZ5xXAebG9Hdbji3RYhW1i8QZYt1riinkrPgpp6gLfnZFFtAZFfoe1UEzM2xarZWdu",
  "key1": "KonBP6xwnrJyzD18s9gBmvPTUcfFkxaP664Vqp7P5nNRCwr5dXTY1mttTGVWREFWCQzZRPZKHJxWCR88tA3TFs1",
  "key2": "4ujA2vza31FCb6zjt4QuGJYwAMy5V6cnijciBtdxi1y1x9BdL8aFQ48ZCb13gd2Y8N87SQE9u5LP7Y1b57PD8SMT",
  "key3": "3Lggx3Z1b6xNUH2jG3hGPcPtid3YQD7nfY1cnUKSjyEsdSCZHFmoSL4gKePxRS8iuqBfcKxpuvznpNuFKsECHGog",
  "key4": "2K39jCJzVYU7GEDrRPxhymF3vfrwXdCMgqDtuuUTchghHRoFXRAGDVgE1Kkmz5vxqCTdBQjDsZPf4CUqbtz2yN76",
  "key5": "26zWMfmqVpqSaRMcJncbj96EUQPyXq4Sru78DNPYPUGKcopUdW9H7joPDPkg8JK9eg5qmLPrFPENnLJ3mvG6P6Hr",
  "key6": "P6YLQbywsCPYHVeL2VoUs2ovhJFQLFgDnSgVCamK3gu7CDXqAcGFjh4i6yagYvRDx2Fuc46BKPViLpowQ3haDvy",
  "key7": "5VSPKHm1ank9MFArdfvfrJYcNTtin1SRJ1MX1387JypqXP5G3R5kFdMCm9XoKMnD4pb4QgvRGFSCQuPfzsLSnGX2",
  "key8": "2nq5aridoSXoX1gVXDK7ijrVZhoUyRQwVVwJNsDWVzL3pcYyPHGdt1Tmt1kKWEAGon2U4z8rdqtvps51CQRLiy2x",
  "key9": "2HabG3JffUL3BjsGXArGcUmqJY5Sx7iXDRsi2ZE3ED1gLxdiUgapoL2wA8EqFfD9FkJLensgfSpvHxgCx8ga9STa",
  "key10": "LKXWdS1E2eiQZsEBtSTFvKTVu7hrdVJvFrMnD8ji3FtuGggg1AmSah6BuSYasPjhUkzjXnDSUnUZiVBS8jNPf9z",
  "key11": "3PPHKbd5kMnQSyGe4d9MGkXPXGdSnGwf8jXYjRgnXdkM3iN2gp6akgF1vbAtbaYdA5fHHCytjd2SrCCMw7wp3a8o",
  "key12": "4bvenVZRZG6rPHLeSm4XssbmNKFgoUWfG3ms2iGutnSCdLd5mxscBx9VjV2mrpXcwHzS6S3mjTjgWmGPmfxupgwT",
  "key13": "2kpcLiXjrcQby82PxN4PAzXJyfvmjWizziqa5uMz23LFVz3JNDEWq1G2JQzgPt3PKG3wUTrvdXbYu7rp7Zgy4oj2",
  "key14": "5fgffkUwrnDgTgZ2JpSrrZMbYfumxw3QttYJpvq1iAjCq1j6ThFnU1jmYE2gYVqJDSeg4KwAnxMLvGsiCe1ZJwb9",
  "key15": "2qPrX8g454pMXace2pKPgNFWLuanFoeaGgheJv1R3d67R16xssQy1DCpvSVBgTjhQw6ovCf1LWAUaBnBELxGLwCj",
  "key16": "4YgHm9BvjCFvP1hryMZi5Wu6tFGx9CivnoHWwDccFAknDUoU82MW7KKayDKi3bV1Sy5AD1iJJvetJv6hAEBJRVbE",
  "key17": "4eEJ68xsubh2ys5DSvXCE3YtiF1xuRjQUcQJiCR8rMPenGTw87pLE1kGtcLxDyT2Swpt4BaWCaFCxEe44pSQd5tw",
  "key18": "2HpVEkBFRTV9UfER2QZfSTxXjeMLT9mUisVC3DXnuM4AMKbJHJQ9p71TzGEs8jij38ZnKotD84JVdH3qk6ntXDKu",
  "key19": "Dy34nBbVDp2wZc9tHcEU9rQGU4ViCoqq9QjasJQk9ArkKnjAjc9kTR7bPj1Ms1qr1RL4ifbstZCbetSrm4mhQEu",
  "key20": "SLgftfxa35mNpJYNAmN9rSH1cYywu58gw23stoHQwx3g3JN6q548rNacCFRZRwBidnxMXUnuw41txkVsmpDUZ1d",
  "key21": "jWgRTtQgvY2dMJEsvyNS44ud97WFgGB8LnM9tmEkn6hZuYpCdtvNurhcx6aJ2cgAsyeiY3gRBMqhdiDU1sAqw1j",
  "key22": "T7Xm8FCjQocufEdR53ZVBPNfKXrgeZAdpLgFrekXYgenXGEsRok4fu69Q3jW78pXf6SDPQm5PgR3iUXYo1KEhY8",
  "key23": "2odBbT9vfUmVHM1ECCpS61A3qLw2uAaof1MC5KJGg8ggWn4Miv3shXDbmpLV4MBMWKXusMYTFs7JREDUvHyLxvnV",
  "key24": "vnENFV3a7ifBoMwj4GhLMHY4L4htMvXYcgjRpWgzsFcqwcqC1jk7wZ2wwGbHHjTqbquqHFcWo7jrUQEb9rSMvCD",
  "key25": "48wqDLAub5nuoKdfM4gvNc8t4vVnEmrLdbHzXwq4ggeYnmd8osfRQvLtyUCHQDXSXKs1UZZfQHtBnUseofzEkVrH",
  "key26": "4wbVZ7pBZHV5WyHr7nPnakpzkdGvzmGn84PRjs7q9FnRnr5Tj1aBxXeGj1snspsdWFWFuNtL6qvzUneyKXcmEjdk",
  "key27": "4dFmhoUKtqF4TqeKNNBSCRQdA79HD1d5vXRT5t21pjdkx7xgfjUYFqTotRyaCi2TcDnrFL3MpKaVQRxsANzFro6P",
  "key28": "4zraykbutE9f6ewf6xAKjbs2WGTH769zStW6Zbnt3w7ms86KbYLCf3kW4TXQK5xYnLYzmj3GA772arvjsLSZHRG6",
  "key29": "5VRSpCjPhy2gazmBuTND6FVP9Kn85Kpdbvz7LFC7Ux6WbAXBWtNSe42AyFeUNPGziyX4NnRP8sRuyXgN1QVngV2R",
  "key30": "63xijDZxnWJsvBiRNvMMRQ9uRw5sLjPehF2H5ig6Mk8vsffJiuPymhvD7rTxFSTn9pPbt8VfoT8X7iThT6h73XY5",
  "key31": "5xDgiDLS6Z97oWaozG5EeMDuXJtxUCDk8cHM3qxg35nFZViXk3ZY98gRwNurkLeC1SPYkxs2uHN5GynwfQ7YTFAo",
  "key32": "2hYmahFiQsJrohMopVyJpTq7rkNkcPoDaWrLyM4Z7JdnFyEptTYGbbMev3tn7wezaV2SjLBzZ4JeZkCUY3F7FuFf"
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
