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
    "3oVfgf4KUoauRJ3g6CgkkXjcL8hnKLoK3L2XZkeaL8zoZuA2kD8qGpZSavvG9cSKA5GW6CdzoLFgSFPra2XvGB9z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Xt8wCExTvywWZG5jsyVAMZfh6mdk1RCCBAgHLwXkFvZHM8nn63yxA3QhXaGhB7vXqPnVycjsSEjJVnkMAy7qvrp",
  "key1": "5FuvCCzysorWHVABoqoxb1qxwjngFNqh1yn4BS1PcJy793sDPanXParnKd7zCriyJzrd8qmeB2e4FNeoVHCuLjn2",
  "key2": "1z86AdgcFpAuUTrJNG82cdhsUZPsfDWdijzpGRTETMVZBTzESaFxLghrfRnpL1oXWSLvDRfHMCmfsBaptVcpCcu",
  "key3": "XeckexzTWDyCaZoap88Jqg9BWsfafsUxsLAnNadgHgxun4wb46ZyQeTkwuKa4TRM7rWM3saxN5VxDLCKUk4so4B",
  "key4": "2KH7H7GmRbaC3PRC7MCHDT32fTPeJCk1JAxgKoL2cvYcqwNLpgs5S5gvmRKPiM7JUWjHXBLusSHSiw6Z1aEukLKw",
  "key5": "ac3VSWpPXTV5uDdfyVnPtB9fpE7n8dAURX5yz7TRLRLeMSdy2PEdXczd8UvjsrUQ7gQqKez94gnvgZyafLDpApZ",
  "key6": "2KEfVhERP57sy4mZvWynGj6q7pEgPq8GxtBADfeWq6KG5TzDd4T1Qve8fRd5uxtS3gTnqQQJBuskmPMsoogQvK8H",
  "key7": "5FLWkYmR5iLvnpujg1zDbzwbDcKzPqsmLgbxy4rGSNX7a2TN7XbgGE3PcvytsFcWjMFRa8RaQsx3BK6zq9bRRTuR",
  "key8": "4LAG7VY742P7dphohEEqLAm2gUjp1rmrqNAdZ4AseY75q8fbKPrzj1MXK8wuJbAHVkoFeQL2AWt9PNVenNKYuVih",
  "key9": "2muEM9BXYsA5aqDMtjdgv4M5ZRhTAUVLUKrNJsYgzfNo7mNytxxk4hityhhao2nNUqsWhWtb3DBniLVQq49Abzcc",
  "key10": "5dQQ4TpaAuxyWKaqpuxrXM37pMCZcnZTL7iVsazcY5pyFt4NT2Sr2epJxF2ywmHrTJe1snTxkJapNimAFVsK7NwT",
  "key11": "4LC4f5UobKfmQzVj5NbkqKiW8rbWAg2rZWJA5JqEVJQ9ibxfXC2DxPFFqr6EwHAr8rdjygHUEkCoVE3BkV2W4gnY",
  "key12": "5kUtJjdX4bkLP6VR5x7Ydt5uQ2MpxqK3pK55hDYghZ7iyjZs2MVQnuMoDK9DWzxDEUWv3sKWEz9GowpZxkN1gsm6",
  "key13": "4vLiCgSBwGS8x7nAkAYUvSq1L6jU7zC5XkTWSwWACJ277S8sSoPLTkgTShZWNoa5CAoH7Xa3LMGmv8qAUpR4DcNu",
  "key14": "2AsgZrRw6buqGfCigTP5LTCN4LS6YhPmsdyh9Fw3TFShoVKc2fRScYkNc21nFEKAm254GD1sev9vPheHGBjDwRX3",
  "key15": "5GPx2MeePuytZByEeHLbcaG95SXP9b232FP64VihbcoDqrcrC6XXumxgCShYUsKerGSfBPYWmGMW5TFdPETudKAh",
  "key16": "x1HiKJceYV1AZQdwucJo4RvHwYwZkN5z2eGqdid9x79AzuTiLyMyqYPFZHepufZUJiYTQsggt8ca4ptDezuWMVg",
  "key17": "3712p3awmFUMPGDyFcoWR8hHs9drtvM2wGWrWRaVD5wdv5A3sqRRPzXWt5hE5ErqxnvwtUCY8m3geABXDQhcbePS",
  "key18": "4BRm9fei8Jzb1C8Y9r8FXph36WxjgKQ3zH9SE7EgXDD55RxNhGZEGtKw2t2QFVDN917jtjPPr7zxs8Jre3CSa5vY",
  "key19": "2NPgh4B732AfNQroCXbevL2JRPjAESN46RhspJHCtR1VmeeoqFcGeowpfVw8DEUb26dtrk5x2EnS7pZHAKC9gPnP",
  "key20": "34S2DgvjaN1SGGsNGZ15RaTrPn5nqtWy91yKHzAHtNsoikhJFZcsmV9vtEygeLYBR1UHxEH7V4fb2z5v9KQ4S1bJ",
  "key21": "3mrrhgCdRBbHpuZnHkcd8Wa8h5Tiwt2Jmm6ozACWdbuKMTLzqpQhSTcYkDM7qXLR51UuZkFKoXhuR7zmzNDgE9D",
  "key22": "2EcziEoDgrX3VyTsqRaziMtsCy1xt9iaVv9Lw9uJGJQ1BTQXPzjK51fe1qfNQf7gpNtoeyTDFwq1Ebv1rrScLyLW",
  "key23": "2zU4Pc9CGQXgyxWT689F5V9tjpYc5tw71jA5kxrs3K2atErxbASfjCs3pHTp66JpqeaanpnA3UH4zNBtLiKcTvRW",
  "key24": "3HBFR5gjccZqfAvszcLT3jGsxMUwheRhrUGrWWkDaax98faBkpEqY24oMm7H9JAeN3ZjEZoZKXnv1wC98bLis3w3",
  "key25": "3wMEaovYiCnfHsq7MzgwGP2mCrFXsYGDC49KzM2ZNdYA5h53pCMKXXiER5bnVYz2oFN54CYUZCzKxptXKpd7TLAD",
  "key26": "3j8fHwk3kLpqLQM3SZhUUPWz9ZCmTGFXhs6TmdZHwwZdwiakJSX8Lercw3rq4w6VRrztLoTqWhi6Bxdf3eQ4GkT2",
  "key27": "49EX5GSKRFQoRogbey7FoXW7tnVCBrwUNRrAbgGXtGXS1f9z1nzU76mX2917ysa2VmDcHh71KSUpEi6CKZ7Vp8fF",
  "key28": "5HZB1Bdz9NscPFyt27fU4A1ARNU4ExJMCV3Wx4C3z7TM4kQCNefxHdYwYna5tQqfSN41bARSxZbXr1C6CbAMVogg",
  "key29": "43a15oZmoCEAMELXmre8fCnrz2UXk2HvNmXf6tDAyZZdX2SsRzfV6DJYUthCpZCWGJoopA7uY3Und18qWvTZZQGA",
  "key30": "4DX7GCPjvEp87ToGabHsTddQ1Ez6RMWvKUyepPKPR92iY7tU5ncAuKpbAZFGWanhwK32LLnMSEhq6LHFfMLGNPVj",
  "key31": "249sPU7w5f3bUGnGWLbcd96Ga6scY8pSyZ4H2Nk28JejQ1DtwYdfjDYJKe2e4uyze1SMmwJ8CUKYzCDzLzjeFiYa",
  "key32": "4U2c3RHq1jtnJ5i2ksSaK1zxHAN6CnqGSGz5TorC91jbmu9ZACcaeQCwQF7UiCP8vHr3eQwVZTadJqyys85ksKbK",
  "key33": "4EDHmo4JBvzNhuHaj7tVdV5mtCaTWdQmPdWPM7J7RVUBzoPecAWTkb92kNJdHiew86LbVXYogQuy8g8KdJ2cPxUw",
  "key34": "5Tde5P3pnRKgREkd7oV58mRBjNCPrFcWC2A95E7aFzx41cQ3KTW1HGFdgpATxEpT6jA6hV6cznYTHV6gJeCud8tS",
  "key35": "5GASaMqaxcyBZCxMeEayyHjqQvv34YvPEnZBbdoPMBkgqLvwac2A6FYLs32g2Q45JiKv6zcXjDvMXtMbKMvA1ecn",
  "key36": "3QsQR4xjXCwH4FMPLNmDNZYcx2rdAwz7PJba9kQzsTbRjF5vLEk3kQo9phukKCzne41UGnqPFtKV35dK4VN1k4YP",
  "key37": "4qotgk7DjB5Wbs8prxjx7Gp34ANfMn8sFGCSTs1CamkyRYwUjmuRf2aUo4NCSi44zQRZiQ5xAmpYKJEmbmuSEe4h",
  "key38": "2suaM4bTsTn9aCmZLKg1ETKVLRGjQrfRvDDsLKn5o4s5v2DdiE6xRdhBfXZe6ivsznHZtms8L9teT5PULPSHbVkg",
  "key39": "LJzEoKTv5W6uXmL5V4nSR9x68VEr4ACXUwaFbLDu54sbGcSqk7rSs3moXedtGc5W7D7fpit6rS2WSLAueS6Q4ee",
  "key40": "E756hHBXtqiphofwMqgx1UP9MSGFtmaXXeKWHDiqHXB98Px38rXR4Wr9XqzYaFeCWTXBE3VMSgqHuqcfrezb9ag",
  "key41": "XYuYnj3hz6UuXdfLN9bvPF6RK2U7VAaxtKksgj3kYbHBGHTq1pBCevG16tWpdcxLSnAcWMEMWoAMpdNEPBRs4WJ",
  "key42": "2uYfS6r4JQU3fLZp4eoxRNsTooNzPvfi3WFtCHMRJ8mfiuuQ1QRhZethsaN8zBdz5a4zMbtNxR9WUDhedc4BY8rD",
  "key43": "3zWpjUr4z9vMM5UH5x4B32SbnjqeYwaznYU8vovFzm1Re1ZW6qXx9NNE2hynn1WJsHoC1wwWwVDmGoMTqtKUdGBq",
  "key44": "4G3dbwzr4Lxh75MLS65gKwgGwrNC1YZ4Wt6bnUQ61oiSJTHiZsLMHdBh6DqWghvYUYJD29edzc2Qz2nqo1miM8fA",
  "key45": "62V2cPAe2X5SXGxn198TwnJbzDo7qDms7oD9jqMq6DCS3igKGvyZZ4wu47KJbKRdk7AHjNHrd4mrh1hBnDNWnYD8",
  "key46": "4KkkU6HWAmyzegrCWQa4PDhPBTn4gaqfVqdzwqxh8kofSweAUSD8ZsXcJBDzTN9VtPjQrjDs7nY1erWwfZTymDm7",
  "key47": "3iXFf9fcjuYg2ZL2u4TBinR2h2SqwymxDYQobntSUjbUGVjJNF8mBvEFuyGj2Aehp3ZuLv4rBT5n6CXGuWHRLCMS",
  "key48": "roBoJwq6VA9wAaoQukswNaAzMQ98icpmfz87r63kmH2JhPqUi9R9rYS7DFx6zyp7HRivxnN43VTkGiM7nmtv97U",
  "key49": "5MMwnQ1ARLYmJqFoQwZrYe55Zp3EwZLXuuVuX3ubi8dQMrXXoRZKuxpRYxRhz88u2Pzge2HEokHGVKe5KR6QMmnA"
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
