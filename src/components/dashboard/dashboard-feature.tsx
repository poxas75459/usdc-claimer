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
    "2nmVPvUBaWi3PmXZbFwsX2BDbjRxSTrzryPhm6uf4NA1qS5X74SYyfs4Zn1QyCc7kLMveHH6xLEPd21RkiBa8XkN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rTqVhuJvos1Sobk2omPTth2PKLu7F1dNNPaf1UiFGDqH584SwzZQtwv5x3ANbKJXV8QWMRQaQMiyu43qcv4J9kq",
  "key1": "6tSMCN9J69qd5p8WxT8YceS1JeqH1ViSLMJaUfL8XhJn6qQnTj92UpLZNFpVysXhHyri4suZd7PU6diWP89tsd9",
  "key2": "58zWqTvzx5TKsaW6yA9w7YW2ABLe4cDHGnr7kE6NzZkQrvPLrfq8oAKekrDMeSyXeX9NzV2KWtasaxCdzStVzELD",
  "key3": "293d1GyXMM7te3vQeCm5mF669HRmstfGDpT6JoToJuxtbTanmbQZY5FhDyFaFm4hHb3HJNwAxSGQXbnjjaQSDdar",
  "key4": "63NVkEKsvbwwPPX38C8Fhkaim1yFdtEah8K4SeEwfnZmqSF9RzennLC7yoBQ2ueG1PKcRXT8kyeqf2QiZnJcLjEs",
  "key5": "5S9ACC6bcsjge4FdYTfUoh9frxLjuzESGKemczEMZX6PspDp42iipmMs5YYbEiZULYafqJZxYCPa8vnjwbgEHei8",
  "key6": "4uMrFETK65NTcBNtDe25g47uJv2aQitYkaR46idEHmPmUNdUUoZ9q8JZix1aRZw1z7HLA3Wen8Cyy6fRfHTuhpAY",
  "key7": "5t89eF8qb6kgrSLccg8dxU13bMjLg65BqAy2omweof8YwPj4m6AZ9A9it3fCmcdVe3HjLR3YcMzxjGTx8Rnk7qem",
  "key8": "4eww8pNeQ6Lvxmh4jLHvoBYP2M4yoVHCrHCGv2VS1FdxkiTS1GRr2peEqquVUQGVQEgPB5Zazf2VNZo5jDZZozx",
  "key9": "2kWr7QR6weRsUduSynGS6R3UhgpXLPrxtCUKWK2cp2CgPcp7KY7YLCa9AiqZtqYBWWNPkP2XcPpBAz5SbNdApc3F",
  "key10": "521Vwmnt2rfnznZX1dnLnDDTVAJyzh8TEpDtGtTmXMDmdEx265F68kivPMeGFKyVGcJAXR94Abjvqqudyg1z6xEz",
  "key11": "4Nq3rVDvp5h6D8NLsEXyuWoTtQ6GzBvmYNBbKA1SRYjngb6xdmqavnUnk4v1dg19F94KocfK9og3jCUfrcNsFFgy",
  "key12": "9RTKfkCssYXak1HfhkXMEgYnnYU1tuBwVXF2hBaigCa3o4yJtc3ki1WABGW2vq2WDsQsy2J4dH1NicWcYWXYmTx",
  "key13": "5PARA9ymrnyhsu767SYhUTGppCNVUW2ZLDHJ2TCqvyBk4V9mwgqdAL7vcXWNeGUSkfhcrwprkk3S6XU6NgzB2rfw",
  "key14": "5PPe1RMkQSJukiGasW8Yhsxdt965AB76HQqoafuaXVMG93mqfG1G3NFCxDiGcSxo5Qhfy4oNFPo7moQVrvQn51yi",
  "key15": "4v97GCToQEjnRdVQvxZMw9VFsjYNdcd1Bta5U5pYW8w1HJobYwF6kF3Q7kAZGjGBjhK5vHXGjCncBkzZxv98wQ9x",
  "key16": "4mqGZFp2YSe2MRHrMvZBKDcTdYJptCyGXnKDUPuMTfRwewGAobFSL85YfAH99HMy5xZwHhKXQCvu3eFKxRdMCpt6",
  "key17": "2i9eEKjGKqaTC1LmCURVcSub3j4vcqgEe4iW5NhzLqA6nJfDkm5ofpkusRzgTHF4N2ntQS3pMu5tJVAUKVMA3hiq",
  "key18": "5dUZX5E3Wzmx4SqKeDQKEXtK2u181MhrfVnz9h5LVWcivPUUjdBYvbVPxdVqvrkJ2tXXdiKDjKXJ25sDu8LZ8jii",
  "key19": "3V5Fm8y3g9zs7ZB4gcHNmNWEdpgymG3KWAhagpKTF3tX1jSiXvzVpU9U4SCXp4vfczd99EzQTQEKMdowUWBM9g43",
  "key20": "4zt3BxcTgncTCLA5sBc5kK32qWXbRFb4KZaKH5UP5p266qUUt96tMG2y3nAacjiaW5Mm89ypzqeDwBKfqYde5bn8",
  "key21": "44bVy4seoz8vP5BDfnSLhynSfDpdoZmdStc4NRhSuk34xdDAmAxk6uS3tS7cnq7o8DDwUSZ3AsbFQ4pYwqXSidbU",
  "key22": "3526xu1YoWeTyKtjPjQsZpLDBXJFGvbdWKa7yQbzQqYWTj8n3F1UyKb1hKGjjSFTGbsMuq9FBDJ414iGha8hQF1p",
  "key23": "5Pt7JKaWFNwPHXtKJKyYnQGSirhfQLQVpC9powAChqoKZVEbrUiHp2xvmYGUZAZ4CHoQAEdoqvdLXmi7rn8XnbvF",
  "key24": "4yEpKG1gkPgwgdtMVC7njytyGHFqW8iWgoQETkyWCd5VTSVwzBRngmUNNjxUKvXVVxAgEmZHRcJdAHqdDWxqQBNN",
  "key25": "24VQ9AJHyYhrAwPZRQQvMNpz4QeWniCtfP4s9W3UmHu4b95JMJnk11hhvgtk633JXThbuCfb3gtX6ARrbcUaTpGh",
  "key26": "3CedTgMnxgDXgabbgjv1UtVTjtxSsD4e9QhtqBtCzJuVwqGWqxc4hNZAbFgcnoYkF4uZGQUraaknrgmarmtLhhn5",
  "key27": "qSJfw4n98Jh3uGSUpsbE7WDMWPFCpgDtpbBppZ1rmJay1pwu4hRZ1keQya9xfSoxb72kfu5Uo3nmroU7EnDs1ob",
  "key28": "2HQJUHaZ7vh57dtqXGsNfpEXiydZNvpQ6GnnNcrzvf8SsF5Y9s9JvoLdrSTHAyBPheYjqm8tX4eqgNH4LoV3fvgT",
  "key29": "4spMWebt1KJ4nFi5pFFqqyQ3xLZBuzt6PmauFR88qfEBv95nBSGYtNLFaX6AiHexczDirBNpgMfiuLmQMonwrqQn",
  "key30": "CkfHnkeAKKiHtWbX6sRNvBXMiNm84WcUWC9vEqPtSioyQp11rAcihvk54fU1bpRY312yX2La3cjEJQAasb4Cuza",
  "key31": "3vjds7zWxncv9v3RazKuBUQi4pp8mBbPFGaVc4fw99crHiVRxvnMuqDQALmeN2ER5NmqdRTMpAQkWiYMFgxs2aTt",
  "key32": "63WjwfKk5qnWTr8dVm9W5TDDTC8ZvzK2s3vjV3SVX1ejyGEcGkucdfdPDRt1srCQvX1mFdFXbebeM6X7gij65JjG",
  "key33": "3ANNASdJnd6Z7ALskErt9hr3YkYymerC4i1jfGYEejnMcSLz5GjJuwTKTv5RVHvGXL4ZR3o3BZsQuVbXyumPhGzz",
  "key34": "34464vFM4oDM64RJMBu1rV3K6vdoKXQLdib4Z3b2kEBYG4Hvk2fWUu2VNTdb3yRnV6DsPzEQYNhjFTKLs1y8M9E7",
  "key35": "5MnR4pw9hkXCbBNzs7Fpbp47TVSKsma3kykpMthcjYEpYj9UF23RVvhAV3pK4BHn8XCrwvhgVnarUapJVqit2Axa"
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
