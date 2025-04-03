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
    "5aNV8FBi9DuNhWz8vbctDFbMPiQ6S3GFdPfVVCxmru8fZAUHH9kpAXQjpB5zFAGY1oEpSY8GVs1W58Vg7rgcDYGr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yp2LtXxyEEN8yQRUEYhQhM7HSKbyWAYixbzLaBftHGSEezxfaTVALacoWV66f9WYfvNU7qApshfQQSH6GwHYhTd",
  "key1": "aWzvX6LmGsRBRPh7VQNKgK12ZeErAivbmE24Hy9adgQm497NJcCCCPao6pX1QsQ2FTbRtj1y25PHpunEX4aTQTN",
  "key2": "2uqEngY1BYR6S1C35EGVe88kECM8EcQMjq5whHAtveLYDeG4NFKFzV5pKcpXGKUSFgZUDRwnV8PLF6gaNb9WkBfa",
  "key3": "5CUzg2mAER685TzGNMAT1njXQS5nbCdpZXtcxu4X2NoRt3kwnJr9zFuCukbcDPMbBeW8sX2e38Mqrux8GRHhSvk4",
  "key4": "GkQDgZJnhXGtrcvQtGyfERERzSCw95QAnRRkj9qtNhzLJPg7PRDKY9jxXX7WPVvXzmXqjZBcLFXzDoeao4CzvUg",
  "key5": "44Fs3475b9bCLbbatPApxhJmtaceQt11iEJji5wKCo3J5qr9mdQwLmuSoJXTQaYjC1BuxSM5rdvCxJ8aQWfdUeAd",
  "key6": "3Mb11iKmHfdCK18J7kBrmZpeY41gytatPVZZFPb9iJLcTM3UQW4TNqzoPDE6zEHRaKqqgeVEVWR5crNvmTpeFf4Q",
  "key7": "geVvVhvqHc2h9FxXdhoUjozejTtHmMPnUL4JDHFPdf1tnbAbr1ycGuN884nSm2faVQ5pVTp8xj37renb9hm32Wu",
  "key8": "3kgBxKWewVLFb3W2zRro1mbgDpoBwcYwspWEZfbxJCHNaAUcDiKdoenpaM4N7Bo4NN1wUosHnUuFVDEvHs8MwU71",
  "key9": "4LzNmuHbMx77jyFc75HuPvpuq4Lte7FB23yCNxDEhBw5v5thMXJwr3WbWEhJ8DELhgiRj8wFPT8rLh8ypHgruLPk",
  "key10": "XjDTtUatK7ytn5xJUYX1bHjXF8ASXCiMEqMxyyD6Wg5trbiE9QPa3gbhYtyLT5RxoYL1yFWFSBUhJYekrDKF1od",
  "key11": "H2j9vRJ7izm4C7jJUAXU7rXiT2B5CoDd8sr1qK8RA9vx5T9h8L78RxWCtYz9hkXaC5TyP5oXyuxTtWuSvk29kHB",
  "key12": "2SfUuDFcPhwsXpmCuC36TGuu2nahgqnGmWXkbphy2egYmNwwwnJ59kB367AZqdA8wFiafg7nTEr84h4Fckvfcpyk",
  "key13": "24pQCsRALViFprxRxstpSLBPPHVXsQBv7kE2hXakY6vT76yW9vT7vpHwnEbp3iShAsGDCy8Abo6Fvm9L1zrPVCRr",
  "key14": "3RTttUrQ9DBMHm7fjXQEcr798zwnj3R9R1raq3zM7snchkV7sLmzJLQ2MPNWHNLAQppodUokDXAX3TdioDTnWqx9",
  "key15": "3S7mqPUi5gTaUpXYk5vgJdrnXYCjABMtYXtxKPr1vUES7KNHsjvc8vDNvP7W5CWWJgsQunCqaBpufU1NRZwiziXy",
  "key16": "QgfAVaW7PUYVUaWCdPQkt1t51SLxHVYRktBquR6F9SRXJ5FTwi3TiPQwrpLyEWdqgm6ZGnKv9xxyMXjLTWgckkb",
  "key17": "4PeRBgcE6fVPprfTEqKCkcyLqmnARvQiu1c3v59uwp93m2Hgm2KZZrB3AwhjZB5cXw54zq9kCcFfY8LJvbnKmxsX",
  "key18": "4XKDohAXc5AJRBqwPkGo1rgpUaxcfNPGBNzs3dGS8QSxubFevGqbDFWNfgWCmELinJMUE3uzcL7RLLeJchezCATd",
  "key19": "4jq1D999LK12ZE3Yw9cy9kSJTFJG2e4q39ubxWpx5357raP6Rs8swQXcyXeAW9VMV5tXtFRTwQGmTnJ3rcXnxitk",
  "key20": "2t1z5uhrE3VoGMXCRLHFL8PPCFmxd7Skjmp5qxGY7CkzvzEAjxYARNmqgXcZsGuW9TvJf3ZxYXSfmkzfTT8PtZd2",
  "key21": "SsyFWHrRMYtsHtaShbXz946mWxccsXBuSSSi78sfaAU61Hbpq4A8Dx7LTE37krgZiPmVqqTdbzwCSwpn9XGfx4D",
  "key22": "3cpJGQh62fyg4u3XLEKui1QYTYKekRAZLhZmkJW5ciwmRLXRTWmKdkXrHNfq7GaEe7Fx1TZ5R5o7erj83c1N5Tww",
  "key23": "5XJQuQeqhunGSdqiBKWsVWH3fesgdE6RMt83hVfHpKiNWnLXWu2vt3StE2hvCT7zZx2BiuMJSb7vMeXYRGLSuCa2",
  "key24": "5oG5WW3qUhU2t1VRWvaa3d6m2ZrXQhZToPctfVkShtrtn47azfRQwKWkf1Mh5HgqktzzV8fwTFczpNygHbUpoLxR",
  "key25": "44isnwEGCdb7YjkheR3EwpVzvXvuy7cbpr3DfRypNYhhb2jdvvaNJc4QZ31iTccN1bS33psmWf4hjubG1z7gkizE",
  "key26": "5R316GRiS5UqSDm6z8Wfw1fzB5rXMTtFLoDSdLcnwUPrBLJZFtYfPF5vjw2Ds5VHbppfPDTb2CNowwwQrhPMYnce",
  "key27": "2fqNgGGqoz8XUq6rWhCXk4tYsQZoyDva3YXbrjVsYLx2yoA96xXAqk1UN1hFaReHohq5fQYna9he4pQjbCCtNy7t",
  "key28": "5paNePhQEZAriQp46LeAMi5ovhAA1ABoN66m9DUkFhE21tdH64JBSMvNXbBdLhBGByfzAR6nFKaKncXgJDAJRrku",
  "key29": "SSAJRBjMQvVdY3HctmyEU3VCFJB67PVW5XSmFVVqDSBUHLb8bBdHDPyU8MV5ZbMBh2bpeYe1YWEcaR1bNQ4drGm",
  "key30": "55KAaBqBMupxSvppcvMvxEjAgYcSSxz747VFBxmUArgKeaNX2g7MYJGTsSyQvCFWEFMMizTB3AFrrAzaMKZP7FSX",
  "key31": "43MDNKQ6NGVRdUSaTUVqpaCeKQ4SNR3Hd8dFghesGMip1tX8KB8xkvj522iNf7Ee9RDhZ8vsvCn1og6ZE2mLrdkJ",
  "key32": "3XUnzk17YPCy7bSyiqr8LyBHgrhpv5pdWWsRzfaqKmCc3zGUcdJGRm2GzwAHgC8LtPmXpBvaNhwidzmukpf8PwB3",
  "key33": "5GVu1Kpxy2QNYNTakMDo3buG8kALyQMTuEo16GLvQKSjCav1zn4UGE2fBFgMVxF7779u817dGvSiBV2LqYfy34u4",
  "key34": "2WP9re4KQixqTBszNDRmFS948M3RBiscmEWnujWCrjXazkYJ52MnPTnCZ7axNMxpcuEwhmqLNKvUKCrQP4PLgGWz",
  "key35": "63akccsAnrbMRgEfSzEFEs7P1PJSMigDouFETaKB1nhsxYynvsp7Fe6m35QU9mbmgjQAtwNyaFjYWVVVrKDtDtYS",
  "key36": "5yoveA2Lx2C724QnuJGE8fVVth51RpeW38Gt5tBPtd2Ws8XfAJPriNSnwLugFcMCsxhCjMPhZmoaZep3jeP6nHE3",
  "key37": "4BrHG2wfbQEzU9EBtgyvW5pWxUYmoUZTxKTFxKg9v3LoPHd6mHJvjorHa1AiJfVKHH3Ee7amhfTc38PpwUqkRKGS",
  "key38": "3qksrfxwQHCqLv8fE5n3q3o9PSQjP1xyr1S3vBEMso6rXyoMJsuWGQRqryQC9Nj3HhoBcmeHkpkurTTGWNuwtZi6",
  "key39": "Mc66rYfTb9pVjztQwEi4DdA94GqW1wBRzkFQgqk4teMgK3Qjk1AGFZC2KGBpEkZrCfNgTUgRUTMBtqw4XvUuSXv",
  "key40": "56a8dPP8ZuzK6a7ZrKccTtBRx1iNXCAR85tn9BG2dp5cbq9YpyTQYAfvyEABFuK4nZyrMspzNksZyZfzZhxVdvoA",
  "key41": "AkAUdYpT2ng9LNNNS1DXEs9DGeVFmxArhZjyNnU48JHuTwCGXNR5xay5hF7Z9KGjYj1zyqF32RXYU1Mtp8whBEw",
  "key42": "4es4vTYiSsUgnrzpTanFRBj4A1uGsSar9tuA5Dj5qW4raVfKLA46ABn2Yqz4LVP6iCPDyZwA8E7WPV63qXTpF3y",
  "key43": "4v8UiKhk4ydgt2GdqT24ddBmiXVDbzzVavfUAwxJ95LEQ6Wb5832DixVeJ8WaCiCtE9YMb7uZewrAMv4iiQuEzeV",
  "key44": "45vUmrxrmxCmDTNoqZr1SeuvNwvN9Y8vpviwJv3vsMhzpHVtSofkzyrXXYZyDsHABvh6LFzr2RZM8UxZLhLyHK44",
  "key45": "Vg5y598jz2CVYQZsdT6xTVsMUzj2F5ERFRwqFN18Z3yhaBBEWPrcxQ9zSxEZzGsCexLT5YQSJPEMDdVBPno4dVk",
  "key46": "3Ca7aTkSHZct6cpZLT9AzGqimvnnaaMe22oR32o4cjPpepbd7xCzPGoBk8xFNDTpMtbdct6uYDGbpBbkpVFhdcUx",
  "key47": "23dw6GQdv2NX5Xw3JD7AudofHskzq5qa8tHc3L3JxgKiRQX9mRj4FhfLS4UYwjoPHm4xCemVLatofDFMzRN3gA43",
  "key48": "3KjQp32thpm7BH42VoAWFiB3cSVg8W64oHce5NZ7fJZm5ncbxZ7PakNgNZbrFfZX2Kib8Zwn98ZQjNZFabFrDQRs"
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
