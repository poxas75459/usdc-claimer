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
    "MpxiMZdrB5cogX6B76tMeGhTQoGk37hXFV9mdVqCVwahFv3EfwxoEM9HqsEm126obGfQ62pHACcpiuLZEmDekR9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47CdBuFok7h9vzNcDoUyNTkmsuCoa1u6ma6UzoXjk56191CjVn1HhHzdMaNWEZ9tpu6S8tPmkSnuDg6TfpC1CMxa",
  "key1": "3ZJTJDNpc95jU98Z3jP86tUCAYpy1V6GsuFka1BjTbmSFjM5gmwqtAGY8XWLXpVADPJotY64Brfmp4VcCfRQrEfw",
  "key2": "5eZLAS9MPaeJYUbAUQCHsLd83oSi2wfVuxbotVHosjApcDq5nfMdzk6AyB8hRme2uwkhkrYGhtbw5zZTYm7tJRaM",
  "key3": "Nmvg16CopPSdi1d7srCD6EwKsymXGiMaMD5GuiGGioVUJMC8rBhewt14NJrPScSKiHk6tMw9bijWUjQhFjvzr9o",
  "key4": "5deHvcZqSFCr9qP3druVHMnGDM1KiCS9xpWCHcMvHbtevV8TJhefqU5uFsY7eUpPdJitVBkraEFwDtZdtSekj1r5",
  "key5": "4jQff3cd6AvcWg68xWDJsLyFkGWBkT3CECw7uSSZD8msQC32ZpBytgW5TMvsvbu84nXEvdPt2Sw5ThQbU98Ub3xk",
  "key6": "41VbmMtnLW4GGT2Tq2j4jojemBBciT44rubGB1SZsvsMXHN7X2xsEp9vgDrCaAkNEhxiCP1Jak22PMaFC6dzbsej",
  "key7": "2u8udRKencxceK75Jtdz6cY3iQBceRWDmfLGgPLNDLD5skr6erDgxtaWGpPfkWKDXa5WAy9cDNx3Xtyp8z6pf6yp",
  "key8": "2TXwctPwmM7tWt2ULK9ZTiMqPTsacH8gHP29UbqY4Ak54QogvPuG1g4PfYHp8bvBsHKrp2LZjctCmUMXKU7xfwiN",
  "key9": "59eZLEwotsgdsAiyABsPHQbEj4sgkEAeUWVRypkKnrLd4JjVTpJZNPtVVtmqGQNmAok8a5TPsL7D8eqPSeunXnHY",
  "key10": "44nwQ978HWwbRpTUptw2q14h5Kit9TJh6kRj5BimRFm5hqTpRiTqrGN6Jc2WDGdoxJ8iQvLZTccdUB5yraKQAG53",
  "key11": "2LD16Y2jHrL9scoYNRfEE78etPCs8fT7knFTKxK9TgtPN6UMJJh2SixGBFNErC8wuqzu46bsZjTcs66oeRL7fT59",
  "key12": "5pW8fUqgyo42j7LpYV1SUd8GADDB3MDRmkkU5vKVrh1jGiZ5iYtUEdL6qHr3VjYswkS3X5eccHXoqZrNJhUr7chm",
  "key13": "4VKhoBHAJ1pTPZsR8xngn7KZ6E3Jq3THCs9pLFvpp8uF5wkf2HufG2hJSsYWEL7NBRozaZiPY11GebKrBTUGwAvp",
  "key14": "5pR3c5VVrnjtaK3b6rWxcwLGjo9mS6ZnXbNBqDRpp3VVY6PzLpk7yjDzNM2EhxQioJYbjPfPQ1FcKbGvmvLv89YD",
  "key15": "5yWfNVXknmtXHiF5xMdL9Zb7eSt9goZy8yhTQbiJAFE2S7ywu81A6sHbuBRxGwNSWQ4ZJRBkZs2uoLJ1b2Yc74yM",
  "key16": "5nvj4jp6iDLZkbBmWpFKpzo7kk6xKc7d16fZZRAA1BvTzuTGmR8wrjmpuuGmi9YjzScNRcjTyJRU1LsxA2dt79t4",
  "key17": "k87d3hrJuYsramX9PQ71L3pt5KG3bLCm28oTB88okU5vvBTf25eo7Gx3n935pUetw9cFzMoiWtDbHDF4TBQ3uP4",
  "key18": "4TYPJVT9FHH6hvTvPbRP98VynwRgknGMRHPTimrtie4aKJt6r7nhBSvCmN4qZ6ZS6eWEw3V1JAsSaL6twiuisyxi",
  "key19": "3UeDxJ5FTBPtKvnWPSsne3REZbEAcm1x4AKYG94mWYnv2Arz6FqETxQNtRGLYC19ArPRq3KL1ndv96R2boiEcdcW",
  "key20": "3bDm9FRkRcECEUeRhKNx2MVem3PYpcMjgxE3iyGipwp7yK2sAoyujy1iXJw87fogCZTADrcTe8ya9Y6ZFDjNRZG6",
  "key21": "3vgDnA6nMGgGu4U4PPtvy9wwMTkvgbihdXnv1R1hkSR2Vyq6VUgi9vbTafjUGCaMHq6vvj632buFcVXrQL2bfwF3",
  "key22": "38x5whWAdi8MxEDkAdTenLkpdeDV186ecayKpcHzPqxps6kuAam7rmRasjw5u2VQ8z5LPbeJxvzKSH4YJTcCvsYJ",
  "key23": "2ARS6MtHhFy2rbdGKrtktYVrU5xZquPo3ixaBX4pGp1SVPHrH6a63cAwszgCd3YDeQNfCaazhCpW7qqwaxsmcg5A",
  "key24": "2w9XfchK3STFAnFRgwYy4GAtKZWKSKLWYT2wvxPpYXyjZY9pucJYCo2N4jFKi2Fo6zkJiFyYjyB2UELSmc6xXLrJ",
  "key25": "4922EHPk9QLmSk8jELB3xepMEguxRKrMkURUVFw9Jv54WaKGqqV351dqUAPLsN2W2uFQKvCypGcx8RijJ9ztHEhY",
  "key26": "4Vz34rAQAiYB8kJ9UMrmZALksCKhLFoyZoucHR2WCRJvc4sTyfsH4WB36n4hxKRysST67An2kFjg56o89S9enJCp"
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
