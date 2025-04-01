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
    "UB87j8Dp8WtMC9UAocy9hD3a6PYjWM7wmLuSneazUTLfTLnQvnr7HFqLCPxdpbsaJFLobqhMcMzYT1QGtn3pf5H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28LULk9ZDDRVkmH4LRJBTypifrRX91QCZYd4bxr1YGbFUuW6yQ6a6dv4yBWUD2VkYr1ZbFS3tF1pPmwR4pRdx1Un",
  "key1": "5U7BXqGdedQXM5ZNDPpeTWcjdycxUyvbN41yvug65xj6PXaWkV4yHMBtL3vigaHJT1zsR8qv7494B9JfydJcGf9G",
  "key2": "4tKiNnE8rnopNLwn3koNV5XA4uypxz82DUPWtdgBD7rBiSnwhETa91bLgL1GcLgUBZaGzyA4kQM3FBdL4cqtkJHw",
  "key3": "592iesrRiPkFhRwKKXa5d4RHjqMG183Gqy3ynPdKXA1Eh3oZxp8SUV4YRWUXMFBDoDJZVGVCAfLAA9mKnwvi3tBH",
  "key4": "4THckJPYGbrDV23PkAWn9fMmUVmFFUy3A5TgDCfaSfu5GWg8PCgh2cmVcDCkM1BNoKreT8dDqpQEoVcrVNyVCtXS",
  "key5": "iT8zjVWmERnYWPSt5h5CzddtAWiE7pF4ifteoz5ytL1nhgoD31TTniPFMTMGNxjMhckhxTkpNPbinacyAsaczdH",
  "key6": "4Dxy3wfoSkNKvXfrwmFdmsTDkCCPJ58wi7kKju3XrFQ2tKckdC2R7vFbi2HzeF1BbK5XozKbHs3YrLzWCLz9sK5V",
  "key7": "2P79LjZVtsPyiPZoDQ51rGrhgtYk2f2BBfsZEqvzFp3m8LET23vcrjQV4Fp1xWCf4ri5TbxujbeFdZAmd5BkYm3p",
  "key8": "2P1pmVZHsKrd67VG395jMwd7Yv3xDwEnMuQ9umcvUWoAUX21w4w5wA8BxTWUc6BH1fHhWj6ZxXpm7iqQoR7kgLUh",
  "key9": "36vNkkmmVkm6DidPHo2NxdMmFDsFgSwTrY1NLEt47LCQPdtRkZ8hgSDrkZPhXoNWKCVEYaH8s7GbqmayAMtNhKyc",
  "key10": "4QMuAnPcGsuxNtRotzzyCdasfQcDni6yWmZbj9to7FMjQjK6Eh5oEiV8QLvAyYrWCNzTi4886BSPCikG6Q6pUDfp",
  "key11": "2MDYdejfFHYsGAbXCSmVrXdx7rgGmV91DJauU8jAWycCT9FJihDEVqHnPK6vyN4hTKL7LrBAxvykyvp8KYJ1ecnG",
  "key12": "62nwvJfUVGqqhYysEMvaSdK5KguEzockoj3nJJefMvzYYDGDHjhJ9Sm2qWjutfvbTXiW32NwLEwkM8CcnxaxWENn",
  "key13": "3hL5HuvQK85Ggeg23i3MyKZww56a2LP4kcWPrxcZEMUveJGR8uAaDdujygyq2yM14BnLQLR4gdAxMRwjzvRKu1FA",
  "key14": "3CyiHG3t9UN1UrNaPf2NefFs3nJudKinahnuR8Ji9chrNALcGne8eHAjUubJofAKZ5tzsNAQZDRCZaXtFDi7ucfJ",
  "key15": "4fg9WNvmSw3f7jRRozwCSMBr9JDLvZdVj5iktsZgYsh2z2i6gqJSwWauY2xm31kQ5n8SHK99zvPMcyeURtBYJikg",
  "key16": "2g89Wcs1mXN7edKJ5nYmecKoy4TS2zqkVuxZhSFJQpVohhwtmkkPrtWFsQhq5acQ2DJXZnpRaELEycVuUNDN81qg",
  "key17": "3Yf1KHWjvFrPQaF46bVpLyh7PcKDqxdXy6vsxWdcS9cQbyE3PHkzBs73NPLT82LPz1pbpaJBumy9GLoNkyVZ6Y4z",
  "key18": "2Yr384Pbvs8JsLGjaWd2jzcHfS8Ro4sxNnwyyzX2buE3PEg43dFfaDFFFHYBUE9wdLX4D7yZu8guStsQWCgVPQKP",
  "key19": "2zNmSMttPwsvd9DAr1nC4nP5mPJfpKriWhc1Ao9FgQjUgixSmizaSWPpZzxGt6v8rNTJzfoYrWEDctCDqMag1y7L",
  "key20": "3Sz1tCWdk4bHLtMLT8V9SuSdX2wYEwdCa1ama7a6vCGEAdafzyx8HgQm6RHV85A9cSRmuCfUybgACjVZ4qWBMQcX",
  "key21": "3x9LGJA8whEPhgUbARxJhbgAY1D7tSrKMoNheDtqhhP5cr6b9ne5fNaLRZVNYQyCdhu2jSGesmBJ2bL8odFZxWPy",
  "key22": "5K72Ry9XL13F9S7TyGBwwV6RbTtXrAsCUfFgqGQwrEDLzHnihk83QRPFYUmxxk7a89yzqzr1DVGsizg7xgBSo4J9",
  "key23": "5b4oZfqTUYYkz8gBYfgpjgEQM1y6qrtH2PMk7fm33cbtb3HfrKCqqkugVdNvXrU1UvzugaXeCdavPa7xAyQy4SR5",
  "key24": "37bFkLUVDB6st2CHPeksMhBBJX7aocSoHqKKULiUhDaRugb7qcKqv9ZFqNQkkGdBvxA1DgjS6jwAcjFMsSMbWFaF",
  "key25": "5L2cD3ZuDyXUfeSeEV3KXzMUYKW5RP23ZYQ3uMMr4K9UvccHhgJvapN3biP13CPMrDt7gJg4BmfB8D8YbJWkXs4r",
  "key26": "2bFcbAJA9v16AzUn9FfmmrXpxG5W2XZYFW96UBTSBJc8EVDrnNvDUTwncygNj1pHizCgbdcxpPm33r9UK3RpsDA3",
  "key27": "3xck3851UzxCZL4ffzdD73NDEugAwfH4fmRrUCEUjKEWnAYKViBV52gaBkqkq8Xas7jS8GCyWmTdDRmbzY14x2fL",
  "key28": "5fGxmiipmR25QpnPttMu8CjQ4XZ1FQzy1pzzijGhpWfjSfB3xCnN2QmWDa1PHdRGCWs8BChWuDPxhBfbSZ96GYQA",
  "key29": "3RCEyetnvg4osZePPjNwsnXfNHMR2HWXdSBih3an1yNoxaP37dhX6THesUDFCgBGvH4uaYdBdumncPVACT9mwZEc",
  "key30": "5Va4CBEsmiDFK6WeUpqTqB8zei5Nm8uHQSEZxFxHQU1YgkxAPBbtMmdtVKNPqvddo8hbdjSYzMp59b5b8UH8MrTR",
  "key31": "2Et8KNLobvuDkWg7pjcfH7xiqWofs2uX2CRwpMcqSiWfgP79USmbHYvzuSP8tB5XzUbvG5bQT352YVLAbRpS4uXR",
  "key32": "3eiRZrmEcSHfjnzndDS9NrcVzcLkJNeCWR2AWEYAzUpE8LZwSDGpjQxqXzxS4zsPFR2Fm89uBo4sfa1bKFJGxLfB",
  "key33": "dLHC9MynE6cv55Pmnk7bCWFAb6nyit8VXg39owJLJ6SQAd873yCDymGq77xikk9QgbgSFJTDH92yGYbnskyZkQk",
  "key34": "yE2F4jBXQkhgR6rPeNHS8SMsJ8gcLGqhsxWLU1StyMFYnwabHqhJDZKWRaxf9GMF4z49wcackMnezrswf4GUdAz",
  "key35": "2wRCJPEN1tfa7FGBcZ9J2XzQW22vGFCy7BJoMpcBHLPe8v3xYMJxVU8sjiaB1fg26rXmE5LRSpbQtwD95kkYhgFR",
  "key36": "3tXmomL1M5EMhhGFuAVg1eQ6a3CWUW1SFUHQLd4pqRJihDBRPTn6KHveBVuviTqfKCUTyWVaSQUjWij2AhWUiLMi",
  "key37": "du8znaRN7vYb4dRHeyK3Y2QoxBBEoUeNN1p124h91JfCj7SMokB94N7eTjNVRkQ25TjVjok8MtGZUidTMqJkXbC"
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
