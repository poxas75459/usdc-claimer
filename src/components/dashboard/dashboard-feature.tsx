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
    "5fkugbJTnwZpgNC63dwrrWSVETQyJreTKEGvvwuUXKejeZ2bZ5DMoFT4Qrqa2GBdtkpoes5Lg5hmdzrRsS8J3HGx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rHuQ1Vwy9V7rPbBshZMpNov2aEwPFCtgHViUu9v4gqcvtWR469pzeHBaE1QfxBxkXux72BZeKjw4AybhXheaegj",
  "key1": "5ZwajgxQuLMZzDRh2pQqofcyiqQXAbZiiR124ek3bpMmjg7eMrPP5PG6HtwUDy5mEALcLRuCix9Krs2a4LewBAzo",
  "key2": "5CbfvZeNpYpMJSFGPCGwP8QR42dpzLKucw3Bnd94oD4sGkRPWXuDjJXet34qAR1PSiVsrjEjn8Xr3xFg2f8X3pmc",
  "key3": "2GY1LUy7vxA1TopqbCkqweA8koS5ADRZSwcGs7egfUPUkJeYNm4WStPvm3dkMm9scyZzisJmzdozU17ER7E91Dd6",
  "key4": "5iUcxkw73ftzZpfsVuTfFGTENGyahcYNAFt29pvYMeXNZV1Yzo2QbsBpkUJAWPzmNNPQX88VfqAKB9RzousMRpA2",
  "key5": "4WcmxKGDTQm27YDdhiz15NNkMafmYnxCPCu1UfJWvXtGCc9XnNrP5GTGLA9JrBXkmFeKB2aLNKivabaN4penmDYZ",
  "key6": "4znSu3XpZaLcBVur5w22AMiyZUeNaekA3wtSFxNSDXPFFsihYLx3TPmxoKf16wrm1cRbExVXbmWAKXGGKycKzckj",
  "key7": "3HriKse7Sb5rHSVj3mAXUtYP17MqWvtoBk1akvCUZVQuZSvjupqFJwTTWFR3msbUGB6krYjbiecTssJPNaeaFbcZ",
  "key8": "2g8hYdMLNHfvSStMd7h4hgmCwKWH6HvvvQQVx3q4kUBAtzzRGtYWekrHMGp9YjFc1ZJ3fmWqQhoW4vXwXjwVCbGv",
  "key9": "NHs7kwS2dS8qTEJqbuJtNAmsCnb32GYxcXreQanuZeXHcaddrnDnxSraj9MmvjcNHnWQMUrVL8kBYL2M8CS8sid",
  "key10": "3nGraf4A6MPCTaZfdLKW6q8kvwe875d8aZw5sqcVAD7AM7dGFMsfff2dVQFot6QKB8B2t2d4jJoAPMs1ASoxJSqY",
  "key11": "3aDeqJC9YhaxGoGe1oqSW3iMhDfLdFwPSDJHNLrYofBEb4JidyUp6wK78Xc7jPoRTTWXyoXAGH7MWFRCqADbxWqK",
  "key12": "2xf9xdzMGUi7vnmiAsuL9bVxkK7DPGTavK7CDtpNXY9kPZtb8dG5jbmko3PLiQS5Ltz4QFiAPSFfrhdxmhYD7YoH",
  "key13": "288tTHMyuHje3sUkWfy35grNZurmsXsapUcVVoCtU8ua24oX4rxdvyUcP9i2nVPM9PdpoLjmMBkvW77tMwcQw4Ja",
  "key14": "R1oynkj2Fmn755apBhQk2pF8yejFRtNF2zB77p43R69wN72N4VdkGUoyDoniamrABNa1Dd1eAfoPPBv93P8soL6",
  "key15": "4bYnoqEubBMNDe2nH1KPcn9Z6hLKyD9Eig2NJ6kmCFXfvVkWm71xLexAjbZgzxeiykdVJVK2SiHTzVDRbk4AdbZ1",
  "key16": "55DBHVMVMRzQw6nAcgckvouTgcTMYexasz5kMePQh2682kDPJXn39QGGd2DRwqrb3wtFF7qzSsQMgTm3kSzZZNog",
  "key17": "2QfDd3HyGkBGVUuyquwMWp2u7xtF4jNgyTTJB17g2n8iYozHexj2pQw5jz7yDGjNLHuzDePqH3nLcD3KmYRsrZpF",
  "key18": "2nzJukDNj5rXeC5LNA8rWLg4VW6h19adJqDaciS4dRu8yp6c3Q77tGLzy6cLJguDdoHsTp4v5DeUikMiB1XoefqU",
  "key19": "2jLTjjYJPTJUeYjVmnutsd9RAZ1Q4h1iN4q8Hz2VPkZNNQpQcUMnoBhodbjs9bFAC5dGrMfXCoNHnMJyG9wriY6B",
  "key20": "2tNay8bQUDrdFVPWyVq3wvgpXigbAddnM4HnWU1LZFzVgL2AqZDCZq52WXS2mpcc4QAYXrXyUbmaFhHKrQ6DMLvf",
  "key21": "4a34ddziBiiVxZVraSwX24rHVN4tFcis2JfJScX7D9PzpZesZabxC1eR7AYizNkBZCUp5tP7qzsYVDniRGSM9EqM",
  "key22": "3YEbx5TRximvwujUumjRNDdBCZWUJQM9QoyTGBGrbKqybSksRjPcrzMsfFdsqreHoQp8c1KgVg7oxbd3yCrxtsQb",
  "key23": "RqH9YSG8Z38sYPZUVfSPdQkkkN1sSCBu7gtVkRDdcSGSjUqZae9uGqxTTmitfintrFvkWmF3qfMjPi95YtXoyGf",
  "key24": "2NfE9a4WrA6immLTTYxrN7XvMoe2nudvaEicsoY2LZc86LsuHADoZYZ1wWpztihgPnfMcKEjLUCXDTquA6Qo7JN1",
  "key25": "3eYvPmFXJjoxKPo7wajQn65buLNvwyNMeq8YpZnojvqZCFaNrdUze4gUj4tRVANh3wcUcRyWoEYaQv6XELam5HaH",
  "key26": "2iCU8n42Ch6pgyfiMTMKcy43ZiQFALJMq7HKeW2qpHWsuFpFEhWnLuqdPnDpHmtXAXtmx1DgDzUAGem8pEsCH2oC",
  "key27": "51GKaYhsrbUZLQM69YBd2Xd4YrhbDPjoxEJiYcJDYgXXfFtS3paumseyAKapRo3xiXJCs2mVdEin1RY7YRA9fRuS",
  "key28": "3ar1xDGYDpFFn72WknKvU3YiXrDp8K9oRncSdk7GAyNRW8vcfD1K6CFM6DbAXafnkGLSnNwBEzpPzGeTxpfzeVU3",
  "key29": "sjpwHfFU9KYeip684f79gLZPRHwHwtMSWLfpFFtY4ChsR9UpxqwYgnWFTABNBJ52CdpNR1HPipx2zxtFKF2kB5a",
  "key30": "2Hr83YT4auqz67RcmVQYbyK9YL4Vgq3AesrPfsX4WR1aKDSjao8m1BY2vGBvUAjaRt5dJ7CbULZxdXV8djKP1dvr",
  "key31": "4462LSpasLr9DYzc9qoczGHSiwyhuURXmszBZMzwVhz3UdRCexm2G5a7uMSHRH3ztC5w8x411T1tnSXPsKp7Bd3N",
  "key32": "5qZzq44eu7LyAEnMSSPQSvtcMuLT9C87nFpiqfwXmnrpHpMMrKXFmBeHKqwZencq9vxM4SDJhnaC9sBwUK286ge",
  "key33": "4sug4g6vPV67bxMNbepDvKqte9jEFkWb26Xt9vwszxeXxYypcd49aeKWtyGZ6jNuZBnA5UMEAw3PZAcKTWUc1RJS",
  "key34": "4ZAGySWdGdmBRXPemXJhzok4v9ayPG7vBZ8UnvzK8dantsi2KYqwDah7MSo8eRtAeiL1CCo52sZMUBmSNzMLrWNW"
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
