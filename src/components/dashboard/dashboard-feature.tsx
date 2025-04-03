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
    "XRyqreDRZ6X8gty9Jm9PRR4Y4p1HcU4MmigmAaCeUHKHnkadRd6hXQ52LFaam9zmEYcBC4yuey2F3DHk21Ks15Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SngMw2EMG1UhJb6uSpXDzr3yr62FpkJYYW2UvSqEDqDreoTVqPdVcWjHHtzya2SPr2UCx2zbUiZNSLKdxRfGFDi",
  "key1": "2M1UfV1P9oZHb9dThVJWYgpL2ptf6PhhL35fvBzPhSiXW2j52KgGrW3URzPSM1q33r2o5yR1HAGN1FX9DXtoyNFu",
  "key2": "3WUydMC2Mxh78YrsQWt93sEpHVWa2fgWYLzRJTnDu3hYEBsdv6N5C1M8EvLeHfBq69CJ1BL2o5ErgYKm3MYDsb2F",
  "key3": "4FVs6BicsJr8PRFCk9mCGWypwUX6jGS89meAw2zPFT4Z1tkgbeRzSCQvdotYcq8X2M4nfLiVBphgAcUqvaWX4FaM",
  "key4": "5gd7py9MaMHYFjMXcEJfXN2gvqyJZGpY7dwzEKARqnoebytEe1gHCTZoAmr1wMwPyvv9WZmvskdtZk2pdDeEwgEq",
  "key5": "57tBir2F4xSUKarfdrB3v1boXb3vusuXUF59iE9fHKRLAZNmg5zmQDmMcFGEg64UMcaj9McGfaKgdegTf5kniuGC",
  "key6": "4KEHVSEzGNHw6VfAfw4r671UYWoXcCFWeJKjgNiixRbzPa65E9p4efBtrQT5W8M922b6e8spz3gwQQyqBY5rhJ4c",
  "key7": "2a7XYZELrhmfh8WnfcdHnhL374XXfMT1WgVJVqrHKtpXxz2ZrryRP8nQrCQEBnw3WgBhHCmrkWvbdc4hHPEoHNNM",
  "key8": "5vSLrMYBpzTphhcdcp6kCK1GVv8bGyZW5vW81vo5hkui1D1BGvyXrs1vRSifdKspUU3MWKynMd3G6kCa66Q6zf59",
  "key9": "4c37gaN7HTEiwT2ghTbK99GXyKmQj1CUX1bo3NxJd1b44Gc1gASp4GMqhifTvYzurjMozpwMcYTXs8JnQxsHbh4d",
  "key10": "3FiZ5rfboZ72VGS6t4ahUFox7igg7pN7Ynnv4v4S8hqLCz1ayLrPwRncDkzXn2r84QhsbLfnQJdCd8g3NevtsCGq",
  "key11": "4D8N5ePbB16vHt6EBNMEqBYxA8TUpLjQvufaXg6ajvsnHUScw6PrMy4gdHfjEN9peBH4UxTEnpfjSX7VpFT5hEgK",
  "key12": "59Uidz7a8GUeUXyWoQW6uxUNGL2TRcR951Yc6fmKFxZ6AZZs2ZFev7XPbedXCimMX5JCvPf38wqtBbygNeoGHg7U",
  "key13": "4gc1psxx7tmSJxYgpPt196txusfRskV2A7Xa6dtZyRg1WxQFh7pQWHxnLdjxmV7og4q8xoth3DxgpnGGPFfpHbB4",
  "key14": "eRShDQCetKD8Gw1gvcY1EoDVioHcY6GYZZCzFsS2ofHP4EZc37K5oT9QPnqDbhRWn6SRfC5aMGxNKWzrZJyCmRk",
  "key15": "64RB1vF2CQig3V3VXXPU7RsTcimDvQuST3Fb5T8y1SEjxR6YjcPCHJouTcn6Xo8EFQkt8rZUCxCurr7iqo7wqnSA",
  "key16": "65sKiozWQ1EsGnoaZLJ2JKZTCErc4seJiAgN7o2EhifvsXabzjFX45uo4cscejK3XsrJybvsAMpFq2jid7KYUdyC",
  "key17": "5gnt22UC4s7qwLBjqQXnr1H3j7ji1o7S6UjJDQnFjroUac7bCudQpMyVWG8svGbW5brudd8SsUtAALGRjKsvb4rd",
  "key18": "41G3RcQ3XL1KAR19H8B7uCQ2CmNZRTQFvnoJzMZ3BE1HvXFHyGBSWz3xfqgfwtm7CX6o3qpHGcUCACSsZHEzZsr9",
  "key19": "4yUaxkMmJjXn3GcMvEDrPVAP9116ERpJ2cLm2RzaNewpjSL5nPbQeZkqgAJ4Hs8kTuM5mzNaojYaJym6z2DMDMDX",
  "key20": "3W4CipZk6WQrtCSpBXrXRQ3e1H68gnoF1yyYHs4Vib4UF3iUwrh6HVpzzP6awq9nLptsAmw7q2CeLz1G9tXiNCBe",
  "key21": "2Ty25ecyaxCPbf6uGUiUTdfXUx8SNNvR61Ap8GoKaUUEUEY6UEnHh2DjK5XyGEP43uBGJW5gSojhdqxogHhxbHGB",
  "key22": "3JNRx1pDwBCQPeyt3tP4EH1MjMkGqccAiWg5fpMfauzs9R4f3A1xMJmM5rAC2hKr24g1MaNNV9FRxLQdwgTwAFeN",
  "key23": "5hVx6QvDnfqAq1rWKAGpLwNdN2Pavvkt3cxMW3UHDNW8LgtrsnaNBR7v8qNvnUMxj6RHcjRhmErfyNgimMBLoooG",
  "key24": "4Xc9H3aLRKBHyfrUqqSgosVYTYUZZtQpmCfvQrMQZcHTv2texoMYLpK9PuCnjKFJxud69A2okLS8NC7gMiVU8gAJ",
  "key25": "5iX6ggNeG8qSTJ9gUYxG6DQMbXqJ9DuFY3xxXAVgLhCWf9zS67CG5FckD4U7ePQ3nCviBPbQd5dkwQc4rPzMqrjN",
  "key26": "3YdFn5hN4p6UdBts6GA2FeQobEGk4SGjmC1HQH73hqvAX3gxcpcQGadTWTiFw1V7Ui7kJNNghdPCp8TotovBXdyR",
  "key27": "2hzALexLnLTM7LCKGzF93iQaK1kASA3No2TAekfHka5TAUWGkPA4ACAjbB3rPRxCmeB1i95FXBfVSjSzFQEKnt2U",
  "key28": "5d7j9KokhqsSQ3P6yoGsCz1RZajkFAFB5inFtthA5Zc7bw9nLjwUCpjPGf7SXpA1bwP6fMDk6Qv4r1A768gsYaQL",
  "key29": "zbVshhhEAFCWwyTTP6fSBckXiV26twVdVjpni6ph6xZEgmvAro86yML3G6b7D4aEJpSaeFWrfauwEN42ctZLjJd",
  "key30": "5mf16VUdnK2cJ3vdrZyKu9s3P68b79UgKhwmLXAf8tKsHTM4p1drqUxkhbR7yY3KLPyAez6BBiSGJ5ZnnAox3db7",
  "key31": "uCuwNBbQPcrcFNdxy5CEBDvnWiP8LnSSMnTSmK1S3MF6r7GUkSuANZjmuGXHX7dNr9hzo6y2kagiiNampd5GAPF"
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
