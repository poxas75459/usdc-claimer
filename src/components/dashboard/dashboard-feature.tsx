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
    "2knPtBG4xz3HZFmBiL2t3Aiydi2dD9zMhhnGNkFn5tkZDWSuXyUM69bSGswwY6mwsJMyUdQZuST5ydCLpj8EHbfM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VHhs8tWCqG1KR4xDoMtYU4xfpLvHJVyoHzKx1d5qrhn8YAK9QrfGYciNrMTPJALq96gUgoh4ZGR2qa1btDaeXoj",
  "key1": "2d99AQ3J4BaC49ZyQ6KJcxSgRCgXfJNoLsR4KegwQjbpnvwC8y4jrxZZjWzDkPCsrM9QMFMYJwmkyfQMzC6WUD7d",
  "key2": "4KifbUd3paZcSEqVEPqYcuEzM4CgAUs9jkJwcdMWZzufn8nVRxAb9t8mQTkEor39ZvmgMod1S6myYwZKUb9ShZLS",
  "key3": "5E7Nazsv9jgqjAEzZDTssZVY5HyEH52S92NYCjh3s4UwbqemT9k7sevstspT2h99wJarhsQ1Q5aK1AohLU2sjUxS",
  "key4": "5niGWdzrpukAg6vtgX35L9cLAwweo4j4RQLKRAKaqfnyB7R9qWUJJWoPEwyYBtfNYBESzUej8pFAjECSUbo3XruR",
  "key5": "3AoiJxcK5XEuFkXNmEdCAbPfcf6PZZ4cGFK2V2wqBEvpP7H4hWf1PwuV2egXiirE6nj9k1BSPH2aTMen9WRu6uYQ",
  "key6": "kvqiArSYnMVbAVzTgJ1gV2WyKPy6igbiUEoBHD4Qts34qtiU7nkUVhZ6qprkVd1kVDek8yhJqvWoSfhFxj1Cxcj",
  "key7": "k6Y9xZ8nCYFzdzsHoZmFkZKyQiPqZKpwU6Y26mM2y2D7VJz9UqR8svz8hDFwMD4RsdwPrtPyz7h9KG1qjGFE4BP",
  "key8": "5gYnKoJuQ1QCVJHB7sMcTdEduZ9nNxJ8rsVxkw9k4yiiJZYEu9bFxWG6391BCS2yixkvBg8WKXQo75j2VS5UixWu",
  "key9": "s95eHDRMrnm1PQBJdNfMFCpP8o7P5rnrnL5dNUNp1uBZ6y9J1DdhGqBrsHoFprzw6hkCneMCJnT7DphJmpo5GVR",
  "key10": "3PaUzPgcSSZ6Z1u6S6gsmbkuQHyuGkxnvQAgpi4z7oaJPtvHAeXbAcmCLWXufjMkgE9djDqbbid9erwBqrK2DuUa",
  "key11": "437XuLeFWoFBBXMgWxjYTjqACdxPtJH1DZ3MVNuz94mWv8SQtMZ46zdvaqC449RrxmxMwRXqiErB1HJ5yWTZPU95",
  "key12": "3iSGfnUiPRD9MFnUaURRPLNb4Fzyn2ZYvLEdVnpz1wBWansZCKxd1GRHoQc2v9DUWJEEcFY3Uv8TVLemP3uUEhn4",
  "key13": "3mY5ZQamMx8XZ2oA65XLESaPBFFEMr2xKpLMccqYrH8pP27dpT5hBb17K4YTAEV1pJZgiAMgL3w1MMZ2QC7B2iYN",
  "key14": "3G4GD4Etax8rfFq6WbypSEJHi16m1kuVeTUSoG2NPRD3TYfEpCE4K4SttHMXSquEvRuv96H9hqUEsrNWMsziTygs",
  "key15": "A2WAyBW4FZahhhLzKe4Vj4Q6ujjDYygoNJZDpK7pMbQeg6yk6Qyzdkx6tqdwhzbJxwXv77aYxv8ETb2iXReZzBc",
  "key16": "65y2CWxKVGKFjZFrfPu7hAbbLwQVireUN7k6LJ9aZCR3pkqGAT5HbARBGg8D8VRnfbdNq6Lv5YVzmDe7czvWFACQ",
  "key17": "3D7jGiSJFVxaDJyG8BDiniaSisfNTcDwepbTcZtgTXkecEuNYTYjJcpZKz9GtAKeCYvTCdxdz83JpiP5Jj4YAuud",
  "key18": "gmuWAUagmgKpuATJVvgWbt5H9x4NuieBbTXtcTgNDGV8nibnGTxoAzmcnaLugmzZvcGq5Gsq65RdCiNkuuZLpcK",
  "key19": "3WSjtcLbRaNnYBrF3Jiq38iNuHWVAfYXqxRs1cgFmBefXtpNfLzewUEppkxxUtHQ96sKcRjtFnwFqJjHzf4fAun3",
  "key20": "3x2b9GzqeR9Yqvo7A9oDxMv5BQzEwNEQxg8ENMSQEisofrrwfn3DFn4pZzE3BJvE2MPv8FBnjiqWBaJpyEk5xtjL",
  "key21": "2w8m6HFZdcoh8A2mF2jrSiGorg7xA53AQW15w6rrULkNAe4dd8RVxaS8YVpQVEHzWB3ezF9yybXhaMVPdf8XGcvZ",
  "key22": "245aMnJz4GGNUGFsfck85y5nzrvSnMCiHoXfjffyUF3qKnimQmpHYCB7t8cNQFLzjUJNVuAdL2AGzFZh8eTrpiK3",
  "key23": "5zUCp9BadRhwCAzvBf8EeAQiTpoPk4VGXkUZa3kGEWEXN6CZctuQMU2VZAwRTeHvSoUJvVnSz2CbD2o3Crhtk12e",
  "key24": "YEEz5tk2Zotqbi87SAXmvzsBAatRPY3bu5FhGUNcHZ2jvyAim7TAN34h3uDniVptFKhnMwVbvcESxDnYFkG3fwr",
  "key25": "32Tmh8mVNNt1HJcC4YT67VSW8Z372TgqNNH56vwVsSWbZw4jsSdiynE9kwCRTE8fcg4P32tWD3yZkPWL3pyYjsYA",
  "key26": "5ukra5Lb5tAZTLMD6Nopxd9dCbymf7fv11itpJLidcXVR7dNxaFL258XUGBAKEGohyYyR5D4GJuG59L2ef5Bv4hc",
  "key27": "4iz75VdVqHLeGwj8oRQQFU3VHk8TqNckEQEimUsaGYyWcD8CeDrxbeP85cH34kqUtCTbydkaZiksGFyBN2YBb2uT",
  "key28": "oHo3tTEWLM6Kc4RBznTWbnDiWnauoC6Bh51sZqLN78SzxcAcZR8nQdj5iNzrqQU5Rw2z1jAvcHheb842D9Htm6X",
  "key29": "63jwPTyc7PrfAaymW1oQKvMmPLLzfdhSSotGH4UfNeMuNPdk7shPMfBPCX8oybfddPCfbjHw6b59LHS6fGCQtxDE",
  "key30": "5f6ZtWrDC45zaUX9Aj2x18ZcX1yUYcSKDiSgxYJfV5KvJecZoiSEWmAJH7TtnVJXrVU11T3PU8noEmnpeQH9r5os",
  "key31": "2QF5Toj148zjZwLhyHNLYgd93iL9FiDDhjaTMGGzWSnrBVpKS1bxnCHe3t7ef5n6V1XdKCUatQ6Bu1Nsu9F29kc2",
  "key32": "3XSbzZ6a8ZdWanvd2vqjeshZMjDLYxec7ouuyj66k1gFy6eTCKwtoKWRNMA5mSn84ZRjcwTyV4cCbHywLLETV4mf",
  "key33": "5fvzLUo12UedqswLRayxt8BCbY9KGfN7qb4tuCMpwjg2Fi9ukcf1SGjm2GJK6Ka16StgbzSW3udGad3fauD5q8G7",
  "key34": "2RV2hN8tAmHHx3W665uee2iuyvw9c8FyLxEkTRhyMwxS6GiuPBCffpgGyA7BRe13ZyXGpewj63u5Q8RCAHr3SAfZ",
  "key35": "2P2oxS6SQcrN5HppWtDKEvptZhAXZSYD6VXc3GNXuLS9fJ4sWYC5tiqGvrDBdiD17jWK2x1asadVpkgSdQDpFjSM",
  "key36": "3mE6bqKyRTDDSdAvTXq849Dd8HLoN7WjAwrZo9uC9TxJJVDR4ee86wmafJJg9Ss41L8WrzZGzMz3apCTB5uGzACF",
  "key37": "63GKNABy1ZA9HTLgVZcg1tFkXUN35s4rouUYCZxJSrcHuiy3DXSQkTgv9YHv2823vCX9UVdzvfRoRe4b26DPLx1w",
  "key38": "5PSHzUD6XSV1MDcxaDLBStdpNrFwmjYiFvoXPkJt2MPq7rSKNczWN8eFoppnrd8usSUngyNqkFqq9B2h3T2VpdpX",
  "key39": "4g5qNgLoQvMgKwfTsuhoFwxBkuga9UBsmNTGZqcfMM4cmFPKokaHLGCHPSEfXWNJKaxjbCYyv9yiED1hfA18VBTb",
  "key40": "2Pm7rwNV29aT2P81jXNKD1TwV4NeLxPC6DCBpQn8wTEW1MPD4DHfdcnjcTDao6hS6C5cwNaa9iD6aEwXAvtHEag4",
  "key41": "4jawu78z8ZXQQ6RApmkNzdPfnFXE65zhEJE5Cmqvsnhs1HJvUd2doFnP5jD43djifCDfMLeVPuQc5gPS7XDGJk7G",
  "key42": "5ACk3zqKT2f34oLS8pGh3zRW1yYSiK3o2q9zDRXqgaB8Dz5Cf4Ur5qzFKX9SLN3K8V5YaBmYHymT9kdSjuu5zDZn",
  "key43": "3tp3qsFTPXXEgHXN5YtL2Kp8HaFMozpcVcgfDnyMNA26SxT4yHaqhatW5Q2uZPT9BDqNCou21woRpVd4ANmhG4o3"
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
