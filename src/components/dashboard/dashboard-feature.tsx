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
    "ow9s9bDMygdrwuh2ChfEDc3zsU1rdyGta1d98k4pt7Yh9L7MRTpPs7EEHWrfv3Tuo2RwaoFAjLEs1oQw6pAa6aa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uB5wWbu5TX1XfwRcCxjsPpv6J2Ab5Q2yphfz5Ge7Qc8RHwXbdsUtbL3PBeqjKwrnrisRxKCsCRGgyvspB5jkaQX",
  "key1": "3HaB1517MuhJNf48QJJFvdLJbWCBAXwwjNccxPayh6aA9A6adCGe9obdeYSjhYwdv6xQu6aJyhNA5AvjJwy6tTPn",
  "key2": "5MMxdcKfEmdZKLu3X3tcaJLE5XJhqVgz8bCARQpWYhRUSjX3C8AvoeVSzoH8Q1QrBJB5J39vrnfRDKKidT9ib1Zm",
  "key3": "45ygwBdhuC2VsKBZK6KyNE85U22T5nSgaDTGPaFjfDfJKiDUHyDpgSfoxZptr32voobL3X2op5c3ZxP9WoeyXYrc",
  "key4": "3aqgDLtFhoTac7JXCWFp31q9gpvF2JuxxiJfvK3N95RN9mWdVHPAXRLuGfb4ymdBYP4QZzjoN15FEntwyrFEsH5N",
  "key5": "58s38Pyik5FqNWkw6oBT4oAQMQB78JR7aMipN25yLcwNDtNPWUJrTMz4pCYkGFtJj5wsneSFTxEyNj6vUyx2EGDC",
  "key6": "2CtPxnZ8yxRvqwZMWoY8p4ez2rhiUsVuDAU3HTxRCkWF6nz25dLXurA2t4DTNvAyjYi8Q9b2Mu7SBfNVKtu3spEH",
  "key7": "237kheE73yTozoCSkmQvVKrZvQXBPgcMX6WZQg7CbgDhFsxjViRiehTjqN8vsSyY7NrqVWnwLrg7TeHnQLosLGkJ",
  "key8": "4h2FpKECuvMEQb26oZ3aKh2zXxNyiVHkoqGnV1mwKpEDbqgAHmWsajZ4eRkrNLjStjT7WvM94XcqxL3MdkMQve8s",
  "key9": "5qowPHj37zYE6d4SD4guTKnmTec3Dfcx8kH2nmcPYRuXzTSK4TL3WRDevqKn2Hpezm9uoZqkdMBgD4eH5d3GUu5R",
  "key10": "3AXjQUbCCLcTFrF8u19gzaFmiFEU578hM2aHnhkzR1oZozc2Tyf5zo47YcV5rvLN44jU5ewr71PbaToUNSTr8iqv",
  "key11": "3tUFSRnqmsAkRGXQ5ZgVjQV81Jx957EXF1prQxwR47phRaGustLt2BR6D8wDhMaTevT3w6Ujp9FwoyEf7KJNoqfr",
  "key12": "55DsTgwKznvBctfCqRCE9TfGVAfMhUZSda8o9WyVAtsvMsy6T98JswSikcawdBuqrej2bDvCHR6ZFtz9HUyxTZ3G",
  "key13": "2fHGL2ajG7FxD54c28KeZtyzsfoX6N5p2php2ZnCcPtLRrn5dwhh23AxDTwXv79Sr9qJ9GhSSFJaVdKa2PseBc3A",
  "key14": "5AWuKaM4FGcRomNonzPyYwsuG8mx4uxdR4QvY11geU3qtohCiZBiSq1UAsMt8zz5mWp4XQAMtWAapyaqzD3y2vzx",
  "key15": "3w4ER8iWqZYeCKAN2AhZLgYdmxbfDCA7d1Y8AXqDYHxcs3SNwjrDte2kJx3gMTrSk3reDU5GxKHMnS4n7FEURhwW",
  "key16": "2J3RkN4bjhvy24qL3ie53Z2aknkLtrNqUU7zsz7rUmreyzUVV6mvtXW63HgqLXNPiq4tFMALgVnp2XJeQucgZCRk",
  "key17": "4FwkBfSz7KHZ6458FR79g13Yr8n9S6mUKzPbuxVVM5e9ptRPhitL4Fof7oHuz5DFTnL4hhWdC5vQCBjoHwofQFuG",
  "key18": "5xQvorLzVrXr1CRXLZuJkHi5SczYNFWtWZpEi9EvTnT1sgvbg3HxUyeLtk1snToDPuA1xsCcHSjwqz6EmHyLS65a",
  "key19": "5WRW8sWZjpy7WfwExY9AwvKJYodxBnyFyAD6Bio6kP2PSgH51SbCDpqA6HuubEPPpG3SepMBZoUeHKiesDJpuEoy",
  "key20": "3ZYrU3Y9RuGYUARGa5aEiSndzuDp8iapezpbhuEHh19fCryeiiejygxcMPG2HPSFVjrT8ThGHUFuBofrEg1VPcje",
  "key21": "2NBJ6vTkt9fZVuG1yuCt5b36xwcjKffDFQQereUg2YXkNEh9gcuk3JGaC4qHgMnquCdfzKzhqsRijHKAhWqt56yU",
  "key22": "3TUC1qkVWBFCNcYnWt31nmDdgivJXpELqfZDbWQ9v53nr3FuSMbaP2mr5Ejg1eaDAcko6fCNMuuJKhwewM3Wx8Qs",
  "key23": "2cjyKvBirLJmKkgbrNEM1Nx9sChSfN1meU8yf9NKYBzgMgpmqk9cxoLRcPcYNWUakmf9skYLKDh8qRQDCjCzSvDV",
  "key24": "2TSfG7t1e6oe3vkuzQ1b5w5wEuGX1rEEweDnnpSteigBm4dBg2hxXEzAR95G6TPfz15B51vLFpsC1d5RmLcRkuib",
  "key25": "2YYDksCq19tnG9xQLn6StkJKqQzCZ7Pao36s6MHZkMCpi4Q78BbdbgEF94DXVTKLSpM7HqRYNTPXBKY2LaUPmr8u",
  "key26": "64m813zq8mnraaW2ekYcaNhAqLamLt4eqivVi2coerFXsDXfEWEs8SNz6ZuxoNaQ7ADmR3Tr3QUhCYxp5orpK5GZ",
  "key27": "4aUvytEHskA1RZdEXiPboQvUPePYQRLa4h2MmLmMiVspDUZjgA7YCn4GWvbzuwvPPYCGfDfp5BVVwQMs19spJ1m6",
  "key28": "4X3f5kcpnheaDfKLEhYTgnnC8DFp6dFcaqXYCnaU8o4vgof1umoyQmN8EVC5wdufDHfZ21TanFu13j4t9kBphFST",
  "key29": "22pRjgHzTexBcVZjQaNJ8cd3rnXDPefjFmQFAR1KsZb7TKZGMgQL3WQWsvK9KRFwsb7rQNAa9engvk2pfvAs2c5R",
  "key30": "3emze7rHHGHn9UYUE8UCtunXfnnHuN9q5At5CPAavqFE7iXwDTgPjE5iEc5PsGtafeeLbBTJVpM2oDcsdDcwVwzu",
  "key31": "4UW28wyWTTv3Yd5D3Xg9QnH2mHj6z7NzUD7k6FvE9cSmxTe5M7s7Y6atWz9FhahK4B54UfZxx6imnz7XmpN5oLqX",
  "key32": "f9jdYcHBWW14RPB9x8oP4YFYVHrsJWeUKWbci6BBru4EkJqbnmK6M9zQoSo2qqd1pSX1yQjFwSmbKBVFftEz8jZ",
  "key33": "4MtDKraPxKJL3YRrhDBqk8dBGFgoTAB1wuExyfRxzq1ZJcRYSbRnv6MspN2mkZt6SZc12R8bwFozxSTMRupLQWBe",
  "key34": "2Ja7rqCC7HYdNEvLEtUqibyDfsUc71QzbUZpseDd9dwr193bqFidQroUGkPhYasFLKwUejHGCo5S2MPDYXW1ocdn",
  "key35": "2R3wA6gYycAZzsB3LqjxpKpFLt1GAE8fa9NyQquMG4zBQL9ZL8xDiRsuXUoxXSSZWf63reJWgnFPETgCV8zrRftk",
  "key36": "3kH1b9nJgEJFDRb9wZo3C5qj3V2UqKknovLhaiykas6p1BfR3frrtAPuDYhKRMbcyHiXwH4znzv4yQopuJENHvDB",
  "key37": "3WrW6yWXcmVyoKPT6PwZ8SKEXpJQNWuQUqJtrsqx15NeBtwigAj8YT5paGi1sciVRxXFfGS8Fgt8BtPM29jkTu2r",
  "key38": "3d7LseSeRsLShnLdt2n1FxD7xyH5FVrYfivVyzkkC2zyfDPSfZAJ5U1YqNYnzaqeLQSAB5mQXY4o4WaaZ1L3ADiB",
  "key39": "5n2LYPiLczkKWh8rd6Yf5WqLyA6AJfxkr3zXiifrenP8rgJ6sADK5m5zTTLoyHhLVB7fYMET7R9hShJRQeSdfKtc"
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
