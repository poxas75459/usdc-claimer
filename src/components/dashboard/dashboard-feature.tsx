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
    "rAfdL1UtZ9ZmahVjMGYSSty5LVk4Pzq1xUsUxrtudCNqbTwLuFGbTjMiVh7p5u1cqdY8hHZCbsSez5Vf7WaSSku"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yoNwJsDadysEoU8cLsChoSC7sZcEBaHPV68bEkB4znp6S5u1ePgHU9gSpvSGPUbC2KiaNZD6xNVcfdiTusjkHuE",
  "key1": "3ZVDxbLfyCwLqDPjAfF9EvbEFD8KzwTKz6GUzqR3WQNV2eRdJSEgoBLdGrSQzdM3tfH3cwGZN3Mq6eTaCSbxi4AG",
  "key2": "3M9nsoLXt1nC3imwME6iuUGyx3HizPzLsY9Fr9KHWRAJDwEBE9cgsEpJ3UVA2jSdTiTgxgLyE2u2seBEs1qdVxT",
  "key3": "3XjuJegpX93Rk5aLJE7xWG3hkKoGyTs1M4XQTbjoxTCGcujcmzYiEeXoHnRGBuX5Qw3nA2ZGxLkVmasTiQ7FbUea",
  "key4": "2Xad6n3jE9agkRkbmTHbYwKMidTDRjcjTVbBmgbMePu9kQAxCVvS4xrtBa2gHSZNcaT8TKTw3dm4EzGwRDpDjHch",
  "key5": "2Ce2bqA7Q9i1gM1DwAGsNXdbVNEDDvrLBHRWJW5dQDzFAyP2vYowSQhjUTxhtxQTBWW26fXud2FHUCf169te5rFz",
  "key6": "fkXn1dWfpaQVXGnPtJKLQkL6Mrfs5yQ7QhC6da7RptihdrKtCZKyxfNxY5Z9wBDXiwogMJWBfHwDuP7huf4wexN",
  "key7": "459yc4Fv5Yuu6wpHCyxxBJbJGAgETL68YCypS2boL5qL57C19ekinQhy72NZTMzWkQdmKWREEkjSdyqcUTkWvWn5",
  "key8": "2GZkhdP65cSrU8TXxmbSjWyEzFQNC9qd1nM3XeGn92BTzgbyLqyu3YxAgB3RX5ptYa1Y3yT6Hmasb4yf9VcDSTFJ",
  "key9": "5Xj5SWgxbaYEHD6iudS4qzDJuoX1bcySJCPEN63HWCGdJf5FobaLe8yz7BZi8RXFMxxeaiyyyXBDqJtmCaoQ6iWF",
  "key10": "53t8ZYK5rHK5WFJeESGYGX9er4sRxSEXcDkyn79MpYqviXSw6xAPgN9DkpNqW3BDb3hwGu4awKVYVgu185Jsfb5e",
  "key11": "rufz2v9GLNJsRG8fytq7WrfaPmU3N2hVWffbY4VMX5dZjumgLdBRJF6JAiiD3QFo4NE63mz1HmSpnRXCxrFMuZD",
  "key12": "1VKAoyUC4VyDkgq768GRx33qZq7n3vjnMJYMxaMEUmSa3byUabXRkR87sWszrEmYUY5ffktvzXdJZ677LKTs2TV",
  "key13": "3MZBqXkoSvrjEMeXk9bttSpGTazZR3AiwJGANEjvFojnza33xeYWr9PBmkHH2ziarVHq9cRtxXXMMB7BRcsUs5rK",
  "key14": "2oN9DfjkuknBMHadkKp32Up4Hs8exf8Noc823EYuwgSR8Dkqu3QuewwZyRfPZbVHmgyCN5piuZWgu6xBNJHFcVZF",
  "key15": "4SpVh67MEGNdtfVSXJoxw5E3iyudULNVnd712SiBGvq5fLshppcUTxp3rc93nFxR1uQTGo4xWoCBXHQDp4HcfFbC",
  "key16": "52UWRAfVkic4Ajuv7z4ZBEhE9ZE5jcXQFwxE95woAZwvPyQrR3fBLeik5JR8TVuxepwSET4Vcz4BBfypogfy9iNF",
  "key17": "2qhLnrcRKMg3fYRkLPxQQeQoc2JSpK5b7h3maLsvJdQxFCzHWPGsebt7SpEbnpefSLT95ciG7EmQogpKR4M3wmG9",
  "key18": "JUQsaJXc3iVCtAV45g7Qw6wYYvzXSHWnm9psih7CbZ6rvT57p2MxP1SxAEGT5vNTx9SJKXUfuDGxzUiaF2NoCx2",
  "key19": "5rtZi4W3ANFtzEYEEMP5LcVqCFhEYV1XDK8JG8GkkVw3Z3Q1VxddhQhbgGeL11h5SxYsyJMJkVWeZ7Ymx9dLBDLS",
  "key20": "atMQuLiGScTamuG9vJMXn5ELck78Uz348bn6SjTc8WcfK5CyFe9mD4bGzJxtpS25rUW1ckmqwy6GUEFQ35ebhDe",
  "key21": "2gxokQPUsMBud87iktsRrzx4BfRAQrQBncqNCDqvBDYNVHDRU424jEN9yusJEDGFmzuydKdwvie3N4FS6Xvpbs4Y",
  "key22": "SersiMj5PuWbynxzoNki9gMqDUCynJ6pSYgBfZew28TMFcv53BbQHQX1Exm4fwPa39PDBwJ3oWaem13SQStYM9w",
  "key23": "4ksJTJk4jeUqrNTbYPEcXGkd3oAGx1vVYNKGCYu8sjdBLTBDP6qhPLyAAV29pdCrPTnrabeXwmd2xtPHPhuK3SHw",
  "key24": "4n7rWmmj2wRidZSaVxZzaivrPbqQyPVYR3Dgz3UMoy2HdLC3zSVgNFpvUzQxHB3VdY6Ugc6q5vw48L27aacdtCkY",
  "key25": "4NwzuCYZoZ7CAQBYnf4yNzhmZwdoNBBk6s51KgLf3c9fC2ygou44B5SEDk7pybZLyA55vsfN9fwvfC2WxtVpSD2N",
  "key26": "4Th6JTTxWi4yZspRsjz1JMLPVTrD9yRiFzwFrksmexWaysnekZTmtouBt8bbjQtPHmv4QBx8pTT3ZvUjo5tLPiZF",
  "key27": "67781MiiKYS1F7BqL6R7G4YprbFd4GRmtaqna3DtcqDnAEUU3nEFd3QTr1uwGuqcFBBtuLTaXJoPpvuQn1AHyTq5",
  "key28": "2ZUeD1QsLKjNyC9t1X6dtLBUR4NXgUWDEDheT8tmVFUwZuSEGS9PRZ7em4d9WZQ7XQ8gZdfucdPSAzE8qWBiFpvZ",
  "key29": "4YJ3j9bxwJ9FdYxJrazZSaPeHwMH4sHPeDRRGN2tKv7fqE7Fh7EpxutQijfGC8zpEGhKHcvA6WNPiTXwWbJZMXCT",
  "key30": "TDzex7UK6fZ2EigSydLE1tsqFzuBD56wvyuFobWC89ESEAYQJNiMCSwUcNP6w9rwNnv5a3CBAWkcFakAdffmDRi",
  "key31": "A57dQrNRPMiAeCzwYU111DGTQ5PwQEgpzigasiCKT1ZcZ7Tn3hxc1QLL7bwHX7sBhJxCgCHmyAjr5FboEv3zSmZ",
  "key32": "5xxTGegohPneshez2u81uNHhWb4sDAUR9pcNnTxWWydQv5XYYReH3F4zRJNcaBsFQvZoCMZ9aN1Vcvkpk6R14bUC",
  "key33": "5By3tn2EFR1iooGbnNcN1H8X5xNg1Xu7vzymYY7goXYTe5AVyM1JaR7Lt76htxbYTDwhyao4kD7VxofdKDJ93XRW",
  "key34": "ib1KvBDobrFjup7tdTn6YiTETHxK3LJcTdxMRiW53jfJu1TvJiSxEbc5DfnMTTwRL3Qcg5hx6FLUQ8MgTt5YV6y",
  "key35": "3rJVdnsPeF5hu64Mwiru4wJ9vv9r7Afei2s8v2kNGLBsSdn6bs3b3BHFwTsuct52iEVwpjg7cW7tCcXk6JKs3u9u",
  "key36": "pFUS34qMvSZesqrnekcEXtLJ4jcTGiuoMMFL593QsSN2rK1y67vhX13UDYbpc6kpcg2dWQDPAAxAfdst6A6HenC",
  "key37": "2apW25RPESfaLdcbdUeni44n31MvgeseSn328rxkaow7tDAR2JbbJoPQWJwtevmmFD7kV6Gm8Lrng46fZswJEh7r",
  "key38": "36gGkbG1p53QBFKoaicGp4vUGwfP8KXDvPkVCmV6sh87nB4DF3DNE38D8GAQcwXCs78TP5CKmcXfpuQMNZZybjuk",
  "key39": "2gKfuYaQibNKuFSkdvKv55RDnYLDE8mB6jYVrZMzACCwM1nT3NjwaiWwriHLWUeYu4WJChXJmvZ6H3VM3rXyuCWF",
  "key40": "5wJ4S1YiK5hxm7PCWBrLvdBfGpcXsWVbrLbp64KZc5Zsr5vfyBMHKMnaz3BrLYL5NZkCfe3b8DYLUYCGggTig3oA",
  "key41": "633UkzUH3KaNQuhUyHjtdmY7ee8mrNpDkHPZHbb2xEStaZSZxLYdQHVkf8d3sedpnSXEGCuiXRXa5JcyikLFCvmg",
  "key42": "4WdZddoDgEeMpGQPiSigmzc6RDDGvrkSdYXW4VjvMZuHk5LkrChLRvU94kktf41DLDC4XsEnfyk71xvjWZPuNkjK"
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
