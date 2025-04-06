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
    "3WBK3yyJuWPHi6Sa8B9v61hBpb2izqeGfTB8rQKUhVamPtdkNC5cLJnEoc2E1CR2bKS1jCh29MnVLRnk2vowA7Bh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qiBaseiM8RhGsSWHCqsXUW1fQ9WTYd4Qyc52XkPM4ifsCSSEwVtdtAxsdFjegMmawysVXWTiXVt49inbN2N81UC",
  "key1": "3xfuSz3nQXVZwTQHrRWDy7SVXfbARSZKavTumniiuNoCVBL6GZCfMTURJrxgwhf62XTeVhTbjBqN58vzJ3CYfSZX",
  "key2": "uLRm5GJt8Tcc2Rr88ma4RRXL7Go66hgcBU9MerFUyYmVZZMeMa88BZ2AMPKgtFQtSMRh9t4rmKYq3PRiRPcEyAF",
  "key3": "24me2sjU8smpbJXr4CU6uQRM98oL9dYnTNX9iQn3R9hmZ8WtwhbsirSNRraAjF4B6T7832aSN3k97r2qSPnmEqM5",
  "key4": "5e1f4k85ETZrSy5PUZo3ruCDh8CaZUireXHMBC48B6RDi7hSnbtHLFCp4yEZZfzaZEaAg1e2fkA9MHV4VLiV4hUr",
  "key5": "e6oRkLVf2oiAGWz7gUiRjy4PJxuEM88D2VwEB9hi9g26ihe6MsJiRBHUwaQft9DdWPJxBw2NV4csoHdgJmdmt3R",
  "key6": "4Ho4W6F5PyP79bm8ZGP2zrVnFNCFHegwmwQAPoiqbf5vjhKnsy6QX7V1xAHqWJHoMXaxSeXyq9hcQ1WG3NLCva1D",
  "key7": "31buhsYLkTgcEpR7CUrnCVB4v4fqZfYRyLAn45We8RNjZmZqBe698mvsNNwS2XuiWP8Du55hrzGzx9bz1XmeebXk",
  "key8": "4qeDppHsLBJm6yJo9XLmde5CPZCJGTGaoph7Vfa2YW3hxaxdgZF4VepCysK96MraxkHHsTzXeyDkWBJgWXWKRm9M",
  "key9": "Ln46aNxppaJf5vNju6bZZzSShWag829WUGaon7LQJhf9J434uWKc45NxsEBLLQCfv36LFrv3ggTdDjBtqQGfYpw",
  "key10": "cFf4ctf1izxx4gryUxEsU7wyodPNRomZZ4C9HLHKRtUSJPYcoVSMuBxD2ybUtJm6ba4NCRR2dUAqno11U3HGPnm",
  "key11": "3t1at2LwR9m7t97qKuNqxcewafFefLUZax9aktgc5DypgRV2R3nf51dLgH7JQ1Hq24P2Mojs1xq7b4XcydLX1ixB",
  "key12": "2nZeNWmw3GL5LfwdphHVrvMnxsPkE9a8NytcpjwZYpzhPNjNH8oGktGTcAVEYfq2L1mkm82ZU4YF66evXNuwc3r5",
  "key13": "3CE6DbhLbiMWv31HNpi3wApuLigek7U8WXKAxxygttaCpPCDbAYYTAkVFPnJaipu1X9eRaXx5qDcF7MABM3E86z3",
  "key14": "DzoH4f5wUxxywJ6nPj4QswKsCjpTZJdzMESk6oigB1j6HDPyXc8ovhTWnE4txTtHTn2x6ggjZbiNCPFQLxu7NRw",
  "key15": "2khjnWPxTDbWMxFjVdgUTLVTtzTBSQDQykDhRJFfEYHP89vcWKx8Kqxc1Dhke6sXkDDqgQdDcgqMqddcGbNgBJXa",
  "key16": "3TzFGY4Vry76zEx1mhuMxKKksVB5toAEqmrbejphR2Q1kLqfi5RvMMFwW6hVoRZrsmAwzVhHQK7T2o95kHjPW5DA",
  "key17": "3RB9fXYkSpa91JHVCq3ZHZviWdfYxsvr9Zm1Hzt4s4HhvtZAtytTvT5Eb3eWZrvhCSWxnxvF8eLqhXtjH6feNqBH",
  "key18": "y2CJj5dfEp5wx8gcrDMdmRAHCv59g1NvNCcA39fQgt3PN5wCUCYBcWpasQnn3dUGXWmcx2UrotTMUsDHH2b3KFS",
  "key19": "3iT3f477dhnjZyDo6o9pittnqRp5rN26BSPMwEE1stWBbimutyihtao8BJBXAYKUYf2NRxrwfDA7YWcdgS5E142W",
  "key20": "2sD3wrQeoVYYMSbCxXLYZeHBVPozsggqF9US4ujTnEwVsffgZab7GLsSZYNdywVDfiir91yDWy9eHJNqcxuaD44o",
  "key21": "4hiasmLsPSa5k3CFxxjeGNAokWLWcnRcvRFdpiAxTsFRtz9EwYbCqCm4NSRCo9qewCZ3zLoMTMSVMe3Wyz7MyazD",
  "key22": "xNx194LFaEKPBm3VGwS1K1DkKYHWA4A4GP8YU3sTjuezHKBTxEQDm1yKoLEhpCmBoD1s2Wbbg3NLkzKB91KgmQF",
  "key23": "3N3sFoD3Z7t67tSgR2hNGrzfNjS5YtjBaHCSJzrUunCVooh8ZraE6t4VMktE4V7NmNN7KTK3sWmFAKVNsrHXh2re",
  "key24": "4Vv1WSDht7q3skYnXN5WyHbuRzgCLmyzW4KTrhDYyz9Z4CDoL47ATiCq4LPDXkmtsyVWXTzkULX19DJZHEy6KXqX",
  "key25": "5RMt5ZeENpP7doP6G98ZPcJnQtccTznGLnyEExsk4RfW2Aq9tuePWqkizXho2okLQmi44S6B3rQrnrSjRukUYDZ8",
  "key26": "5xNum6Czpjsmw2nmUz8QvuSA8S9Ed2hpEecdCBrCss5MXWNJ1SeHYR4MNLPXCYjxjV5FH8G6hvAfKjYguL715AFj",
  "key27": "4VWrSazZmoNbo8JBMahb2iapxaCXHyC1ucid2KT2DK2eBKMWscBeRtG775cHmPxnFtYKPBvcX2usYvFyfg6mM9q8",
  "key28": "1cstUVftpLEL8WdmuZfY7m8g5zu3TNpTJZYq1xGkBwvTgjDWcrGkLGeTUurxqD3d88Sg6bzAXhsF4JyaNZSZmpK",
  "key29": "HpAFoJDYvWb2xoyDi8EaTHY8ALAy7No36nXX8CL4wfsg8LzkqsjBXAbJvBh1fKUdVNurZzAG3gPaxz7mZdLfpei",
  "key30": "4JwweikfNsvuMcYrvNdBDZyP2xdvT94f4vx2xRwBKeCC8iQAePTqj6vWNbMzZscFY7mzeJYzi2Zy83PvfAJhVG8w",
  "key31": "54oVEagz5NeX2r2o9GY2X8gWvSFsRBbZ8STEsAwUhqYycygCD4yj6VgLFxiR3TdPxyqRde3Uc95mm8Xr67kcxZjm",
  "key32": "4xKwYQvcCKaafiVsFiAS58xfxf5JZaYdEqRg2UPFSLU1Rc9WRM5HUaa8VoDvK5yKrTT26UgLBHCYy2YBmNF7uNDU"
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
