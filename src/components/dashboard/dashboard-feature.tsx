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
    "inxCu1N8f96LifoNfkwcStx7pGQicN7fLikfxRz3LLS9fJrUyDNZ3czBGKA3N5gu2mJ4LWAWUphjkJUZRkFomgE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45tfJLM1vuMKyTarbHyDy4QHWVyF4TFmjxBRyBwLpXfcSYcqjhRDzRTQeMBHANPqaduT2sqCMAJP88dgxnX52vnG",
  "key1": "3VFnBjVUwMQZqbKZnNK3coTuHVqu12EA8bdbSprk6YFhU7VNaLmUzsKoYWufLrtNvBBPPECdNXAjLkWM2RPFxrKN",
  "key2": "txTaSpi1sMSirN6FyTKWNQYoQ9ctHBLZJTyJXuiCXZqkn45B5BykHbq6vq2UkYjY9oeJa7vZKxpqAuiVTFTKZjj",
  "key3": "5HrizaDQWm3CFnqTmYoX7vTfhHc54pQWFeho86QNjkmMbYGfKbeZY6AkmBktVm28Smq7ZA5J1Sbvkg4Z3JQdxTjH",
  "key4": "DYGwpz4a19dKdJNkT9d1MKUYjqFhYyHrTdJqfuqEnGMBDoA7jsBdoh3MkrRnqbCy12TFKrTy6ENymej28iWeWVN",
  "key5": "3PChswfxEcFvA8kGTHSzA787AiN6e5Dijuro4wTGBAa2LBep4it9L6Tb3gLchCSeVELJzaxyTjeaHsoVT7ebRiRU",
  "key6": "3TP32RaLfT28YJBa9YdZ7jwjDt32g6Z9UFL4AkRP44qTUgEc9V6cbTCdB6PDez8ncSbFbhCLGkhvC8yUokzJqAnM",
  "key7": "3xwCCDSmhgDRTbCm87EnBRM7JeWDdP5kqdsd4Njm1wEnDbgg1hrFwz15qrwK9sVoWwB14UETVCZXyF7HQtzDRPXm",
  "key8": "4ugY11gh7ZpkCniZfqj1skUNtortmvzGas37xhSdtRJSuqTY7J8FjVEeMdghoqKkRVdX6A5yFhzqxoDWyVNA3ftG",
  "key9": "4uWiTRHftaBXpXPbskFi3RJHsridKJDsp2zZjBgUQr4EanmFh3RWXSw7tqZR741eegByGqPzj8E22CPDZ6aYgKRV",
  "key10": "52Bxd1pvogXp3DK1jP9ZxK9QFoskhQAqjh4w2VQozBZ1UbvEEGU1ezk6GaPLcwyAExe9R8Nkf1GRkdSrahePAnPc",
  "key11": "2SR3KDP1AU1ofHNc8c4C2a3cEPSuY3tr1vfhgF8HpHVFgkjk9bzpRTxTsvTVRKv34QZvxCzksJFPfh8eJ3SpaAbB",
  "key12": "4cxBy6xAX5cYQBqFrrCTmm5WkV2UGCVPwrX4SaXUAB98cXwzPsP5z38HkH2xCseKSXeH5hVfZNfVBo65jyqpsJLY",
  "key13": "exPgxfMaCQ6F1zdrHmje2dqh7p5xBfrYJFm6fyS9zcKvarCXGsRGgx5xYWA8BBoriCWd2nWo26pSpJrH2o1wMZ8",
  "key14": "3Sf7qRKB7Xs1dWn63deCMRNJQq5cDUo8gAGoySNQBhHsvhcSLY332j1cRXnKNTqfZaowchDWnpPPPxBNuF8kUawk",
  "key15": "3RXG5Ks2VRgLrFZfD2LyaHCjLuxvKNX8qdG83SwH99f5HhtLwnagocao8gwD1PuoPka2vaUksPU7gE6WAgid9RLx",
  "key16": "dyFLLprxSLgktjF4JFFiNLTum3T1b5TupkEXifTyQ6sKzb1iWaoktSAxrKMBG9xQecJqKGqCB8ft7nToNgkwnKo",
  "key17": "3q1T9PpjbWJSNVXTCctH5Lu9Jz34tno9K21RY8z1VBccbKktcBr2vA8USiutuD8fTMKC9qyYs5hTMCdQD9Xdra9o",
  "key18": "5JNMVse8L8JtmPiZb7Y5MxQ43u4pZz6R6qcG9N2JV1ykp58g18fMaoWk5dW1oyMcidQgb4whaNh8LeotgWqYNHUD",
  "key19": "3tEdbWuvpbseDxaR54xyezQd93AngcFJmUVPJ4KZXBxj8XTgG44CRryv2SBoFRTzmZbRuWkMgmKs5iXikigeGKdj",
  "key20": "AwatVjgGcmq1f8DErXzpUfhnaWq4YSehj6BfK1zZR7Czvhy7Ewhhnix4TD3kp6R6cSU2CFYCmPTV7C4n4KELwaV",
  "key21": "3ypCDA57voQ2BvyD1tJRshPv4ZdeK9X1hvCbDajSvbB2tsMjBv8URcecPADJ9gwTHEuvELExDKN6MscviN9Y8BZG",
  "key22": "3Bdje8bjZR6Hg8ZroyjEUmw6SxgsfFWxDQBffvtTT51QQDkMpYcyEZnsDhJ5fTrCdJ5xgFWhENh6gwCNTiejrVHN",
  "key23": "ur54wcyJf2nCnErvQ1JrBVmVRP1g5Yj84ni2apWkg5R4gg4N3oBiWCDdhfQMubb45BRJ3xjwyNAa3TeTyX71PUp",
  "key24": "41zWuSVjU6HpmpPS8AVzYFrGTrfyyKG94kjxraFggHxU1cehdy6Yxz7GS2K8GKJypKSdqwXEGuVVgDpPhMyQ5Nnd",
  "key25": "269pFQ2CbAjrFh3oNn61H4RBVwKbR3G6qwugojuXDskXqayZraQKSZN95CmoVcqDbhx3kP3tZbtAT4E6r7queJa1",
  "key26": "5ZLpJm3DvqcxmGis8RLYEuBZG7JNaoHkffiuGhZpaGJTGZ9B9P3Xh6H1hgHnys9YaFSrYWCCgB9EmF2uCdMw6QMx",
  "key27": "3oJhVtJLkZA4YBH8AFTK34o7dbLDosiH97qpY45jsrFYkaRkcFAa2ZG56nwSXZgy8msVSpHrWVCbNHwT93yPm4wo",
  "key28": "65u73be6EkFFGzB3xGwtwHtngHAyx2T8Un2j35dpUav1iQk9jhhTVp9jKp4DYsyvSUg9yvhjNyMoceMfnYzhB4LM",
  "key29": "2RWQJB5DNpmxriM3cSwiG5cWxJx87VQjUAKKeKwNespYeH683XxDcCdT64d73nZgWQnbSaRqwiyafxpiz9rd7iKQ",
  "key30": "52ML1beyyCcVqvwmqw9ior9M8RPGDxKsdzGcnJ6J9HyHLCG3qZFBT3HQGrP61PnNDnp8dHdr4gkkaTET4zRkc6Y4",
  "key31": "qDjg1x739Hhh9MGfDreGvVhiQFzhVoSF6sAqQWgWYFcVrHZicPqkDFzeFWHshEb4vtR8Eq8BFX4WJvividxvYZd",
  "key32": "3X9u2wLt7TzCU6NY3wxAoQH1rhH77oKkb38fRzCSBh3TnmhujtnnA25whH46FXFmjGusYcnUUvPqYMdQK4Gcd3si",
  "key33": "EuQnK8L7k6HvKfGpnaNM6AbkeAwzPYzChN2WBfu8trcEpLDGaRJeumWtD6mvyN9wMhZz4VDPMAGEJbh3AXmYgn4",
  "key34": "4pwpifazc2Yf3SXqpNN28KxyD5g4T7wjiZZHkLGcgWde9RgxuF6yvBd3zD1yLSmu9pmj9CpLqBYxj7vQXggTR1wd",
  "key35": "3DSEAgnNatXnguWjJMSnKZN6rz4m5xurRZezscPRpJu3s9KRdXAUxBsUvhJxUJwBwv5sSrZD3nynPiUm5woveUq4",
  "key36": "5QpT36somdhp6wuUvxzsQwe5SctK1AYZ6fCBbuSGEqofFG2zupwJxtT6pdWZ3FVmwcP1ZntciKBG2xobT4L8MBQ6",
  "key37": "5cAjGLWZpdpoBSECAJgmd6htc8gfgVc3zrQCie5tztwBUV3XqmjcwjkAz2QvqjTVCF646BskXYJaycwFnTKkBPyH",
  "key38": "n4KbEcyUMDzNEPVZaELCtHuo3zq1taJUwKJquKXZFYBuz4boeUYkbLY5Xa2KjUdFqUR2prymhiiYjTsEvEsugzd",
  "key39": "3k5UZmKdM3DdLEPCDVVqhavpjtrbMSQaSXVsHNHrXtezW85kqDHHzn4gZ8K3Z7txqg5Z4wfSi32pywdYGdYs6Y6o"
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
