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
    "28SQAH9zoxSFCmJmai1NowCZfT2Ss5aUwYUnvVttwvK7A7iMFy76vCaN8f4D4UpS69tsUUbzfjzquKuddJG8Tge9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31cd6VeaxwpTvYpr7SmqgFiMgGwfrQKzgPdvp4799ubPJowJ8dmcnRYL2uVvt7Echfkem3ebpqSpS8sVLZWYpiAQ",
  "key1": "352bzgcdMcAZ4goE9G1FyhicGXNr6YEfnHETcyosetVUGiWnQwv2zPe1gjmNYGtXFA7ZXz849HHbnjkDtZ4NxWA8",
  "key2": "2e2d6RUg3kKL72sqXxcGUZvL8SetKrf1CVfnaax4GsqpYGKiLnudeP9qvBwByhotEdacRsAwQQzdp2Qbq7FuPvfn",
  "key3": "5gJRJkfLYuaWvWtNshzKF4DF1Sf1YhTkyA3aL2iwZP9kNotHjbWr4mMYFbcEcqTqmFReD9iASCKc683yJUMvVNqH",
  "key4": "3WX1MtLoRKd9yVkWwpPkw8C1LcV4Wv2K7ua1FJ8zNoM65X6vbMjdiEwHeBQAte6hkSW8kNxZ8BT6GUv8K78scZHP",
  "key5": "3ZgPTJQs79axr9w6Rpb8byCreen1eUYzBi4YWX2nvF9sMPHytor5rreVj6ztEYQe96ScFJAfz97BjrX85CqjDPAo",
  "key6": "2nxhuutAiKkDJHLtaR21J8nN8PxMZkyLrpfiGr42fTRe8eJcodMycB7eeyn7BQfuSPbbs8iaCQaKucgg1oFi1nvA",
  "key7": "5W3Vcj8aZFP4BmJ5qjSQofX2TDJd7SddBN4MhYys9AP8xBiVEQKA48eq6riRYKnDUeZ8A8Qb961DHzBPn6NYzErW",
  "key8": "56s7BsKnxVcSUv7H8b4iXXT1dkxfrkwso9edDcEav9J3nqB3BmZof2SsPdTVVEYJ4Cxy521BLPx7z9NbaWcuD3u1",
  "key9": "2dse9R5yffpLSDguYGWyKiNeTfbv6c8NDTVR1kP8YwSVcUYNvB48SEEKAJRjNNDzCsbhwcBpbfc1ppynHk69B3Rb",
  "key10": "4RAW9ejepywgftnw6MkD9EyohJUMp6fxVN62F1y1WUr5ZV5DUTb4n58uLNGFMXWdEEw8bni91JmXkco7ViE8U5FY",
  "key11": "4aKgEHxRXugTnc6fkrV5ASRrdn75kN4NYPg6Cs79WDt6aev9hW11YVVVMZ2TasT4K7B2eEC6rehF74EcGP7W78DX",
  "key12": "fEiQC6dLX6Mutsg7GxVnPSXKKvNDiN7xdiYGwRT2LNkAwUF8J5ygWctZudP1nvUstSHidjWsfMJgpiMb47vSA4k",
  "key13": "66fP45VbicwNy8GYbxdYaXVH43zxNXnM1SJqtwiTWTsv4QXMPeW4EouvVBgGYmvJN2nP2iVbabGrc2BUxHbVS4YX",
  "key14": "2obCj6M6V46mn7jcH8PWxjTqxUXoRpB2RRNgNZbqjcifpuRbd4wTyPcxVExFAWPTXaW9HuUzeUw63zERR8jgQAz1",
  "key15": "5N4iwUzpJbbGX9jrsHKzsChYFXzJ6CPSB1YpzZJVGdTrynnWcDsGjTEp8McQcFD9U1UgBdgDQsHSnoCXnmMuqERv",
  "key16": "3bdFPhQuV8tZqQJPSfjJ5p5zdWe3jkvxPNesaLaaMQwSiossgvvibkdXLccVMV9ZHVq3MmbxVQHUU7gWAnb14Fry",
  "key17": "3S9WsJfdYyeDFTgg1tYhgzqzQnqxw2n6y2uuWww9PiVHPHUXanhkLcVBduJhX7zLDCkQZ98Ycyi6pBZLiLsNAoMn",
  "key18": "64WVBTZSrEhRfZvAx3oESM8JJca447sNBo2p8hV16jC8ti8bxEjeqseZRdZoicQJfiTWYjXKj2tshDPxZS5fmkeL",
  "key19": "3nZgmJ2TEMdC1BW8Rr6gH37ZFvX56kaGULabsy1K3B5WHdzYXQngedF1KodcDmtRQy1B19Tto1JqBqFF1uHJz85j",
  "key20": "3eRmqm6UM4dqDdqQgeuajFLYzgjXVpbZFm7BrCjxqLarTdByHGRZLchcyDgimKQQGw5CKzwBHkGmixTomf986fdK",
  "key21": "d2Cm2KYRoj3nXDW2Wgw5cT5wrCi7zBAsaUcsqhW5QhDGhLrHt8StD4H2vg3aiNwtiN1FzHHwpCUQnG1NdEKDbmA",
  "key22": "5PVjfgdUEMvxGyu546wYgoD8uAurSdrmdK7mEtULuupB1mVVHx4siA9mBYRWNpCTnMSCkKQmuqoaq3hL2XixowM9",
  "key23": "5V9pJzbbf3iYocD8nvrEtYXNda5r149nJd9ShPFmKrCRqSpqs5yz8neBDnUaR4upGHZK547cFFumbaTvBNCgLLdp",
  "key24": "31FRhdo5EfnhavKAGMFB9tfsEHP8x6rrLM355WLS9wBS9tYvnEX1Vyc3C79QXimjBcan2j8eLFmQQiRct1KTBeV2",
  "key25": "38C9eKdkZ87Qmn731mgkGUp1dznnv4PAGjLEZqPUsFytfFBTNgRAa9vRNiTmHXUHZXkADLvN1zksmbPHJhyegJM7",
  "key26": "5DNtBjV76rsVoMngX1xwmk4Lq8JEad264Tgp9Yirka8fHrmX31vjsh5wq5dTWu1Eo2DDeravEDLytJ3cdZ7bJ8hU",
  "key27": "3ToULQhvFZrEcTqHNZaJYWwzvAWP4gK9Y1KNdK1YkQFmvtCikN9txkzDHiLeftkcWM1WmMavUCq2fG1V247owT8V",
  "key28": "3ibr7EHiaoedvRSsw9DqT1vXm1G3fV6hQRepzP95GnTpTDduBesyoBfcpxmncZv3ZURp4duyrTt3SR8aDWBrs9xi",
  "key29": "2VbDGCaCRM79RACoATfY34pnWLL1URekYTvuL7oQhLVtw2L83c7ty3iiGGK6rtWkiEMxSWNFfYiT91Fr33J2Tnwm",
  "key30": "27jP2NcjJXKk1raiiQ9DFmXXqYZpnnVNxdmniWwi4U5wVqPJddAyuzLi6thdCQqo51KEpBSpGoKmuMU7THcjJnSG",
  "key31": "dxcqesfZeDJRLg1Tobzm1LD1S7r3i3TVF28j7cuEbSgecjELTTwTJFDzTLUEvCF4euyL2cVCdg6eWLmV13ffTN1",
  "key32": "5u8WUDez6g3aJjkv3PbHKuZTQq82oD4sjFXvUkyCfJvqYLe22rtKSbZqPdWQTVAsPiHB9Q7Umr3yeXqLM97Uepr9",
  "key33": "uGfhda3P5DT6CxWBLLwUo7SMqwQMmd9wkbHWBZ34nPvHZi87RTpvoc4rpML66apGvnkz9KHsUg2z5fRdpkFLyxF",
  "key34": "FpN4YYSgWNuyhXLdYaqko3khAVMCrwWWoSWP6B58RXtFHsfSn8zPGvDfD3wQYPp2fLb74fepJgU2zfxKwe5F7dy",
  "key35": "3K1QHD4NzU1wT5WqSSYpztRiykVVER4Q5MpBx44LEodvRsLwh29bfZpW3MSLmM3QjexNdQCUsEYbcNHAbnfcB6E8",
  "key36": "4LJQ3PBExjx1zc2J8ZfDWqAZp44XyATgjRKkoJki6wCv8gzfaB1agqaNDZ8MQe21jSA8FeLf8cXsJVZfMiwGZxxW",
  "key37": "5vY74ReePznkbBciCHveycyGzsTJbQU2AsGB53rFV7iZnBHXYsvnd1rUy2STDAUpXKP1SbXBFwL5yhTQSkUKna7j",
  "key38": "5Ku4178RDazhTdSNoTbp8RKGyiPCDZh6Xs2HtBqqVHUG9VJG82tfSQguhLwGBiqGd4eh3j2JHNj6zGkEdns51Mq4",
  "key39": "36n3N3ssWXbQRoNFeugJ9LX2ZznSKnea2UCiq1eaKi7fYFDmuPsiq1iMbLT1w2m4wZhEabXwXmbTKeYefT2Y9Dnk",
  "key40": "2RZKbMzP4CKue9CdbqWN75uwSfDMGiwSyCWsjw5U2FVWCRAQsd3Sypux9KEPiQCVXvLoJT11fEE3FZmZKerYGecD",
  "key41": "k4XXdDD7ofXT4ZDzM9pNV6UrmwNb1mwRwnd62w86ZtTHJmCw2Fk2FAyizXSY7QEinkaBV7egWVeG2QrNnDMZ2VD",
  "key42": "4hMuk3puduNXR24X6LaK1Nt8TwSJhsTenaTLRcx1zeRzFVqbdC7QuAHDiGFEpjChkqmMSDxwmJPi1Jm9r3SycKhA",
  "key43": "25gHNUtiJKyoWACExbgFGUu3URvYbiFosywgQ1K9fg4T7hwHiuLQA7Qu2fyykHeMiu4x226kJV5CkRRtf2tHqJub",
  "key44": "mHgwMD6n1KfqY8HgaZBVw41HtsqeXnGVBo7HNteLXwGPqWyM8wrFSD4SYmGrBUC2PLXQBiuughSTrR7FKsW8LzX",
  "key45": "5oJVziW4g8tKLsAwLPqpsFArMrdDk3jjEb9W3juTsZrH691gpXLbPFPjQG1LzWWXdZmFFeThSvWsMgmQRzXykSYg",
  "key46": "3ncvBYshReEgJmHGWCTm4bdMzUnSV3hgx9UMU73Cr2buecmNx7jH3iVifJEUK8c8fhppKAiJRiMFmvbwVBepTjGE",
  "key47": "3YeakJmdmixud5ib9JwX2bbJaAjo2FhiweJdtJY2ZUVHRYYJafQsRmGMYGPatshvndgpdd6YroNcZruRY6QVGdBk"
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
