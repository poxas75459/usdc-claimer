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
    "ancSL123iDebC1RQXRHNoX2AAGnYmGaz1526PsB9GJP67TLBGc2GEdxMFCYGR6s9XbWKBsLEGG3k16dAsPhM3s9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qdEjNQbrsXDx3ja4iTdGqBNi5DaByW1Gq5opfAEUFeJBSy5NRUGJGYr4xmrf78SXiFkpTFikW5bHv1vxwMo18pN",
  "key1": "4KsMDUXb34pS7uU7EWJQRWWTqh81pqAUtkhrW888sUatrRuj9uvRKL4DAWemZnQCBHySj33Zim4qgVQyUNXBbYxa",
  "key2": "2RhnVcjjGzRi2haKXRguuUJVsLk9WsyLouHjAR5pJuFF2a8d5dAMcc1rMRacqv9wc9VatrU5TQbqKJEZQxFBonaV",
  "key3": "4GteaDLAjY6PRsczRPMQDRwKxHVjRxuP4Qn9Gm8atDK9SzDpBo5b88MvvtsWUcP6rKRU9Ydu3Mr75L6prx1P4jNJ",
  "key4": "5jboJt3fUyPiCFm2GdNbKX4wyeNUpkx6eHNjwZksCnTVbNHRRaSuFYT2kbjwQZcszmMiK2VRF7QwfJTheeroSeHi",
  "key5": "n2s94xz5ZsN7b1L2kFREPLX8T5tfwo13JGgKo5pxzu1vnyvVbWLBSt9gv9UCdVGDqcp5g3N5pfTLZxLcZDGGiyf",
  "key6": "3HzhLLddhHSdef2F5iPQEe1gDWmFFPQuqMDuRp5isURYvcatoeBNESEBXaq3CeGBALgJJuiSR6or5JMz4neXfrMY",
  "key7": "3ff86SUA6oYQ9dpc2H9oy8aDB5DDTkJ9WemSi3p857p23WSPbn2ke31whma7asmVDP5iFeTg7gaPk2okY2cDK34i",
  "key8": "wWhiCwV4YPo9oVUosgaTNuRJAqR2BHEt6TVkvAsPXsMYTA7TwxpweN3C7kyNifLKLQKSax8Kx5tHWdZB4CUgQtW",
  "key9": "2GKe91hEocTWxrD6V5pFFYsqViSyCyR9S8D8cW8DJ4nD7dJNDp8SoDLgxkqRbE1mRmej8XquXx32nRRK5PNDpnRu",
  "key10": "2kwTvfvuhHuFp78sugosGomyBZrUpPjNhwoqBSFbCv6tFXMf8oVkyszvxwbucTzmA3Zv9NLEvEj8RqkgzWpJzSy7",
  "key11": "nsfqtZ5SBDSvZ64TfeHmL6xuGwUFznhjbHnoTdVX1cRZaWG92LTZfLzxo8GD8VvdzHp4L2gzrW1vpFv5VWooC4D",
  "key12": "3TBt1mAW1o1MJS9ni44hXphp21eAct6EUVnYXBuiDSHwguhPEKwubBxtgYHGvCrUfPbUtCmUDaR3fsQpRmWiesLq",
  "key13": "5zBFzK7xyMWPQHE45dxcJ1NH1a8nBCPAvCntPQvuMTvbfVEtegMR9utyrWwCvBmMRAJtuXeMGSpavf15zGq57u3U",
  "key14": "GPaqjeMgFREMU3tdE2PGGHcDZdgeCbHKobmRw2dBpQwpJis5mvEJWZCg6cPHLfWRJ8obxbQ2p85ZoJ4PdALp5eX",
  "key15": "2fvNwQBK8hwNCwBmKXBb1usDw1HqRPMqVeuqPJ38JxgAZC9WLeMzzmR42PjgA9E8FQqFBMf1F1BNkbvKQWuCZFqj",
  "key16": "47xJBounv4rTzLyjdkFWffRtp7WBoHP8o4Knh744bsmRyeju1xUkzsDC8eHkigkQENoKW88jwo2nXhBTJiBpeUBL",
  "key17": "5KHuwgtknemTzB9ngCZRBihSHxaES2HGA2ZctHmBYiRhkhxkcHtRQh1iGpbJT2Sbv3wa5KXAjpSjgKsJChrjjoiv",
  "key18": "5786nZSpYnh8qdnXQi8nhMfLUoEtmn4EZPWPqtLaS1d2VgKMjJXYdXXp6Us4eLm1eArWKZ62gndmxJwFqreE55Hh",
  "key19": "5iN3VUi49AZxkRWeHnDxTKSUgmnRcryWWMmoo1PdNJ831fVmw51z3PVcYqdXxdTrb8u5RFYfNRnEa6n7EpNcGc5f",
  "key20": "65mvV6rQnskheDS5fCFAP23y39yTr8gQaMmvWRPJoNspWiBDSm7mzigUTqbmMWrLVBjZBqUyG3vX9FHDe1xFndSo",
  "key21": "4uBsSwyaCpHeHJa8futavSWqi2vQZg5UGruGuqMq6zarKw4DRR9kGZMkELCSjVe3WNg2xuoWZZgdVg956axjmyjK",
  "key22": "5LAEabujbSDhgwXJZHG2XASDy41AYkMDECG1KsdTPQRppa5swYn9oXLqYan6WRR4NWX7bZ7J7nVSNmYLmLkXYm5h",
  "key23": "4mLedCKHFPjG2HpAZp5gCZU3jUJbckSQXtba9W6zpTaB8XHN8efgGTKk6j6Qtmei4nogMjfZhaBpaVmfUfpFoL9r",
  "key24": "5XuBe7CxbUJG4PQLrr328zHc8F8ScdG9W5V5qVZueiJKZNaSi88rFnJhfEJssoCZeeHNnp3yJ14ABVG9twDmAUBs",
  "key25": "3jujW5FY6xuteLCbU1iVC4HxP23b9eCLyDc1NFxGDa3QiswWyGM6UhQDW3QbVsgkwu67CR9TLvhb2UVJzoLFJMrG",
  "key26": "3CvZZdvBs3Kn1KNbnB1qaLTQcBpeomKtvfq9WyLedyB1ofmxPckiN9ghcDbYknqNHSpJmh17gxH92sot8Z1Y3MPa",
  "key27": "2ayNbW8mm4LgvBqdbNXNYsS7LatPq3DV23DsHoRnc4pM7zg4uBNhBCVSDu9Vg3uJwhMxVFud39i1T9XY834NgZ5T",
  "key28": "45soWmjjzzom9KenpUkjZ8Vq8MsdWY71CEif3SzgaFsxhVAhp67cYumBiJhdob5DVdEr2TpkaoEoHX1HwDBGzY3c",
  "key29": "3V5fEmQUS7ZSHjV77b23r9eYN7e3B357JZXwfHEn35DhM7ueJWSiBNMPbETvFBpg7wFhpL8wPrCVfjG3JmExGWHf",
  "key30": "46Cn246SG1D21dDg74gAiurK4M8vfdnPNiLiuRci73ctCFidQM6ENLEsseETEqdJK4JfSzA5JJFh97FFLKo3zTWf"
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
