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
    "2GSgZ7ZdYkBedTsdsYPvqDLN3nq3zhybQ2hgujHojmfjGddzxgLZaeWnPUZqkxyhSd73a973mittNgRGr9qgrR8j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "x1eE6UrwhXky5ieregzqW5tvzAcPqpZu6wJZXPoqAfGLnpin3oDgjtQ6hmw4Y5K8kQCkhu1UEhCLTtS8ZxfVKmK",
  "key1": "2EgmetW6N3e7Z2aJsCTqLd7HAMvCBfrHPZGvPLMqTXCp4nKfhBThH8JjDCMkuNUoLwe54vDD73BJCk95XUJSBK5L",
  "key2": "4jkATTiLCVcaWUuza17CJAKtxKfwpc1MSgYt7ySZYGtxotvyhQVorbooRRFkNq4ivAB5nFSec3DCJLaCTSKGkt4i",
  "key3": "2PwAEoufdWpDyztT95JRmQSKQkX3PJHZEjHuqTU5cqTzoJukEeyUSq2VZZjDwuzE1oz8rXYihgVBQiqsJhCNvoy7",
  "key4": "W4MJiFFuzJmF11mpDQJTSXSEA6W47dYmnRraPLEXyTBu7qEtbzcbBxtyunQTurw1CcdVnXKbtTTm3c4TmDrVGQ2",
  "key5": "VZTtM4tgB3b8X1p2sJV16zYy1x8DChgN7iYEnoppDR1VoJsGz4sysMVdxxe7P8KJEUs7ugBapu2gNWQV8LAaJm1",
  "key6": "sncQoMvAu2eXeFCRTVLzmXQUuCZ4WBhdMaHkmLHT7wofH2CTahvkvjF8QVL7LpYs61ettZK7p2F1vvEC9GWq2Wc",
  "key7": "5Fez8UUovnpYAsLNh8nKpP9eorbkas6RGL9vk4qBbKs6JxEgBKgvQ8n5TSuXmajTbCqm8FfqpYXpkCDzgnn9ghxy",
  "key8": "42uq9G5YnHUVZUi64Fwh1XjKQ1izUE5ASrYYhPD82U1vPh3GKVG3HjMK9qtShFyVRxg3DmM9UGdbbQ9bf5r6PSMM",
  "key9": "641mxgmwk3tAN5gppFAiQgkZ3tgkgMj6Uo7a8EHGXHbCWpyEg5H75i8eKtgPjsnVozSGvPY88vaMmy497v2tTmiQ",
  "key10": "2LkZdY2Bgp7RwvLaJRc7nnurHWVeGdoSacGRHPUi89uvBLH5UnfjnAdLu3pPpk1DEiDgwboEykmNUZStyed6b6Bo",
  "key11": "2PTpQr3XkWHEJLHpovJ9qQW4b5bkdXSSqqpRs6CuFTvyJQThyMVrJbZcDHQuYkx4FimxdzUqchJD2qyWfKN95Fvk",
  "key12": "46sEZrGL7ewsZtAzcEbarjq97wKSeZkmrxX8ZbY8j4K1oL9ZJECWsyXK9ega8LrDp78osCiRuAySgvSrvrodxnab",
  "key13": "32Fcqz3EKsqwsh2B1S2C6GmfG6TQyckuskxtKUuJGN3DTMnnPbhPqBsonCP7g6UzzEkDrcKRoTN56qaKYYWuSHzJ",
  "key14": "5Gbq1TK9t74kuCRvWKkG4ijZzSNFp7bSVM4wzvbNLrKtdwhQH78WZAmpyVpKPvkvkskrfmtfQ7J8BXxd4xCGYwKN",
  "key15": "4F2HxPixgLpc2TW5MLqDKAvbWS1VCfL3nMU5Z4YFGQSMwMNYLGVBKcxfHtcRxq16CRycXqcySU8HTWjoZvuWwUje",
  "key16": "39r6wkKELoD7dssjPhbjPjyqJPf7a6kaN9JDYGEVv13XVU5iwmCkNrHtvdgp2d2upBnQgEGGxqEyvoPvLThoLiNq",
  "key17": "zcnvHagru2AvF3AUfEwSc4RVUgkmrrNzQJmALuwHpxSxMZ7RV33PzZfXZSdTvNWYUqq3DpxiQ69pS6xN3KyyRHv",
  "key18": "5coLxhbdfriFUoYUrvHsS4m3QiKMe1kM3nwD34Z4s2Hik8ewK5BwaqPpJb2Y5B5z3JEnzqquVkbGYzgCmAbRhJfJ",
  "key19": "5APK4YTnr4qk1ywuoYCPGZ2PFWYzuup2sixeTjXxoyCEXZrKHFKiuyg4dJXz35cFGzbgdbboQjNGKciZ5H1SWunx",
  "key20": "4UHDu7sz6ZpRGe6TmL4RhrVx8R8QHeCV3wzqW6noQ3ij5aPbbHRcS2QHUe6XQn1ysEn9VyjqEGaeA3Bb1UaXkr3h",
  "key21": "2KyUtHuptUtk2Vj1vJzaqWUZRbpN616XSiQzdwFzhf2Lb6RoCrdo2tS8ZLQgS1wBbCr2EDHsWgzZPWEDi1oLCDGk",
  "key22": "5EpKRFbuKKVvT2kSfYRqAVeh7FE3rpBbTGbvtnnjRBVqW9mbzQmJCh5dnJ9wYUGHxFPdvLnhhFoVgCgB5omvfTcc",
  "key23": "21ug4KrMWWKtXqYJF2CjeyWju5RUrLfHWvkbQB4SowsdTGfYrEJL7eKvzeKTSqB51aHjtsQi8C9SdTJwiyvqpm4M",
  "key24": "59Sfwn5BYpFi3DQrbwskm5Qarac4armtDMzgB7nRt5ARkFi486UN5zf39BqZUZjUF8sXFPW8ZLbZerpwDppq1TpF",
  "key25": "43mqhXYGDSHpdXEk25VjokmoWB9Z8nErx16vKwJiajdRjujrXFdP283w3F2s36zSMg2Dxyt5wcRiCUa4e3uhFQzm",
  "key26": "4S2YtkEiVv95Uj1PXUvwhNLH64vcbioTkDTSTGB2sevyPRNNdppiQu5EgPfQYzwGnRJbJSqQFpLKD5iEhcERg5uz",
  "key27": "ajG7bsJqCTRbF3dHsXeuXzNDFNvygvGQ3xZpkqPgkaRGUvDqxawBXfxZFxN2Wc1ydQYAivLnf2g5SR7KUnsUFnU",
  "key28": "4ko931vR2VvR7Cx4UR25Nc8PV7245T9VtQAqtsnpVJtoPzgCMvyuM2XTLRNeVegxXv3C4GoGhqpYFtgzVE6LPUK6",
  "key29": "5urFjRtSqsmYqrCyWWc23k8hgEBtuhnNxu7fXe1hkDze5kN8r4PXhFQc2bRRxmDJnZYRDnhBWdESqLTXbQx1TuRF",
  "key30": "3ifR2MZhjKGM2ySRwEaRrK3mZAYSMYDDSsD8t36kNFixcE1J85CDtdoSyPCYyhHQxww4ShuYS6sBzr62UAVxN9iV",
  "key31": "2pWw4gEAg8yMnbUQnDuGZHKHXYHSM28MFUDb4TesmHhhgUusriSvCvgT6vsjJVEDTc6J8uPJUC68Fj1qUQX9W3mM",
  "key32": "2GGSbbPkJtM6YSJ6pJw4Y8sKqYqGjtbRTnSkaDgn24J6E647DjeF5Eprrfwt9KNTaNtYNaD9VMVUBESXE6wFhz9V",
  "key33": "4pF3Vxc9WgEBW6d546o52vP6gpuWoEHNv8PmquHXmfsKAVpwJkLPLzHvrVoVFDKTTMiSTJNEc23zjiwkdPHqp96w",
  "key34": "5ZaFtTKi3N5baD7A3MuTCixJ7XrwefreugLgx1kkCD3ZZZYXXxxwh2gq9kBpFkdGfzb5UV624zzZfPr43pr1LrRs",
  "key35": "4Vsyv7V9NhKT3Y2vSuTQdZmDLLRQLG2Eku948bcgt6c1YAUSJ8SUGuF1CBY3U4RRj5dmgTgC9Zw3oEHeXtepSbhZ",
  "key36": "4EAi6EktJseJDfA84BewBagvvU6WzJ4NvpvTcwhtUmBv3CQSWjAxw5vLdcf9NRz9ZLUMyHh99FzwnhrTh7mZn2YV",
  "key37": "4zFi7uASWYcEA5tokAsFeBnujUkdRSCBSMayZA1WQB1n9guKf6SixXRsgpvYMXqJKzz4BrwtFZLxArvFs16C5Bph",
  "key38": "5QMe93tqzCiUATfivytADWaxKT829zJih4X5or9aG27ePV6uu7RnwmCXxSwwpE7YJdbKSuvL9bze95hH7eEYiyQy",
  "key39": "3ukN9PYyFestqY9T3tW5b5oXHoLd9pJVCVKQnCGa1SfF2ePqwbH6RgRYhjJR8TAXQA7wawUAb8q4KRDdxMgS4mF3",
  "key40": "3PTvxZNNHYeR2XgZqZxxkUZgnhpvU6Uzzpcx2jfFhRWoq8pdwbhvhMmDfjURNtmQQ1XQf6TRzq66EftdHBckBCGP",
  "key41": "5BuXHVQjanbst4pHArxPa45nusRePvQLYshQq38LMWBW3DzV9YfKs8MVHNEbWuCG9ZuCgEMzKHZ5bQNYjaZ8ijaW",
  "key42": "58iL7D56nD6sGhh3LwoVcBQsvSKCeheRS7NgUXEy7DmX9NeGJE7yZpRMSkn4Lp5nQLYXq3QEMhWAtob7N6ys5ED8"
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
