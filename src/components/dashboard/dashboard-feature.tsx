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
    "CQGtdU9knnR1EULA9iGEM8hHi8ybQPCjLxDrQNyqNiYmkYHbBELFgNPHHvSZj5oFvnX8GLsbcyzTKM35FUDAmoV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1kK4yVNWbWhNzUK6T5BEAo72zzErpDrCmNsLuEZuWAykGDygL7tAr89iRBPFBRtYzMhyPNdXmGbLKtvip9djYQu",
  "key1": "3sMJMGHZsBh4KtSauJMsE9VDpxutcxFnVzWFi9ev1B6FQ4L8LiWCB1A6pj59nYtRF2uBEn8TwpEzyrVCdmCZSU8i",
  "key2": "5Tr6pP82r4NAEwt5FFALKhB8gaUFm677iU3dwwkgd9AN33Xk68n4wCVJmgDvZQ5T6Lcmz9K6WW4ShqygKs3jkx2o",
  "key3": "2xuXegsPnTTusgt3E3LAX3LmSRXWioheyh9iRjzk23AFY8VCer2EnYXrdo2KSihDZxgqpRuam913Qqs4CRiFPVEa",
  "key4": "2oJS8Nk9YXaJPdN4pNSXzMm1CgAxn9HRJFkn3PqSRrB9FoAJe8XeTGz1b51Aw3omBd5YJi3s72rNiNXQJbUCD75s",
  "key5": "2LH28wDVSFUMyYtzJX7KiDaRJHEu26UyCQ2S9BbB4XmK1tpRvMhXfLTmP8aqsbYfixdtJbmJB4iheEYPFL3su2eg",
  "key6": "3dCTf25eWyWGabusmudVr1PkybB69tn4aN7CxiTu2LWLF8XFSTSoFQLg7FZeiQg7Zhsc9s1S9MhTCiVrrJ8AoMeK",
  "key7": "9sTxYyqKAb474A2iHoP5TGrG3btdzfhwVEDeKVuTqFZuPgF32nPpgsdCwuoFMm5XwK8SzUTAeg4itHXAE7yNgsg",
  "key8": "gWGa9JYBCrvqMEJH7ajTd4rtcYd4ECtkTkcrX1R8nCwrYdwT7sBKxK8mVx5oRUU4sr5V1un4KdC4uj1NVfBejnv",
  "key9": "khVNYx1aPoxtksRRziwU3GkonpCkD7Ayq2EMpVRJMgJqCkCBHMPMP2QReUcfa7UtdoDcNkF8Qm73DjcQ6Dta69D",
  "key10": "4Hpq2oik2XGK6hZihe8Jqqg7XSRXaqKNq1jNdikbk1rGwfgZTxzqha6ovoxD7fxuDpPWW4sLvBJBGv1kQngtPnAq",
  "key11": "56irpgPuwgjHgnKLKwLMncu5sphxnBcPiDwvLCvdKX7ASZAD88WQT3qzudi6zsan4eJRZeBm9MaWrqyy7WYpuwFH",
  "key12": "5H1kKPne2hrJsLgzDwHzbWSVBryWVi7aTa4pmmzFkWMX6zG72bYfjSDpVBuDszX1SjCrkTSob5rTkshRnmL8pXk",
  "key13": "3S1fE537jCpjDLiGcrGyw24txm5CRcV7fKXfBQXsEwcJXvRprSbpSsyQ6dSff8xeAFmPnxtK68wn2ibEz8DDMwny",
  "key14": "3F3xVPdC5Ez3UM9owHJ1J13BFxmF47AD7d5TJa8XuZKEEBpT1zBquKCYfExmfEgoa6rETHTWqmC1UMMdabz4bKC3",
  "key15": "3YoHfto7T4gbSrdKyfgKZu62xNWwtw2N6VB9SMrWRYvVo4rYD7NKpRyqUnWSX9ETBmcfqr6qSeRguRe7HNM5HCHv",
  "key16": "628gim9QNHYYgPQVwNoAQbz6o7Z5cYNpRwnb8tiNWcz3MJJU53NWYfodKfEU2QqFDMkWYn8oYCXNyUG7f3Vw8CC8",
  "key17": "56cncNrbXDJ2VLjAKNfFowikKPNdE8J19EsYmDyEEucWtf1tvDdYafsMABTXJTSMsAgowu5gh1NuXR2UVJ2g6D6Z",
  "key18": "4efDaoGyNYupNxe9gsWJkwTaSiA94DRCw4xmgWKqufyXaHm9MpCT2cpJcFX4hByJ7eqmwSQszTxbcGfixjWjxvF6",
  "key19": "3LpwQ5K1rtpjzNMEFGjKZF9fzTvTjHyw6NGXMnboanpZp1BH7na6MbMseF4FMx9nxJd55iWfzE1QLVNejXhKiR3s",
  "key20": "2UJjtCZuYVWxCA9f7acDR47YxosSzEDSEdkyqMu7jmEAhs6xFsNbWJURQF6euKLkcQuoaP98gmt1q8vqtxp1GLwt",
  "key21": "2k7z84m7PKFR2K6YWMWWvjXQeY3gRAXi1Zx8W1yxpe8aA3YPrCWbq2TMnE3s4uvwc51snGSRhDBPwuxh9JrDuxCE",
  "key22": "4W1aXc1LKgLqcX14MvKvBdG7RaTbbpGivf6UoKbm3XVMtkivcFAFoJSKVRRjt11Cm5ejoMRRJNHJmR97KMutzDep",
  "key23": "2yoV37KVW3xAGFEsqeSMdqyNfmPFwrGppwdkrRh5guBF7rGJADEBNQBakR9TfJwU4wuKnKUZFZH4zYA6rgCiKDdo",
  "key24": "26LRDCd8KErPaVyng1Ux1TZUTgnCnpMSF9epqcFfJ1uquomY3do29C6PNNNftmXSVnFa27r71RNoXh7CyZntKKPo",
  "key25": "JVnzVmktqZ958pjVFQfH3oxrNQMy35YkXdKD7bC7ZbqhcVmMCgkURD8TjuXY4zx2AhHfgX82jWXrqRZxsJsZiCV",
  "key26": "31WwTM9kUvLrGVrpxSv9L2X8SU7FzM7Xa7aP1XXATw5xDs8ShS2QafPYxpkoMJxyLSwJ8AGokuyzLy7qzEatggM6",
  "key27": "SL8D2MfVcAoZr2XxXwRV2oDAJ7U43xBLngKAUkvrzhrAutN4wcPerEKr65GfDTQwHCyxPUTWW8VgEFk2Qme4V2R",
  "key28": "1XAuXPbFGnJMqvJ9e1FHnHpgxjH1x7sDqmQqzNtm7z8y1qZUwkmC3jiwDB3JdwvWFvJ7soRdLN5AXyzKtkk2u1L",
  "key29": "2gLFt7Fo5cje1zvFgWxFzQzcRgXBHJRYoTuzXCMeihKnGFijaKKzP4nwZdiFGB4t9TMgMoxMJozXENkfkkCJKams",
  "key30": "3CsmmeVMKx2uiHtjfmeePex8fF453LcCf4UVS4ZbMh8kRyC3VvfyUN4VgiXskTV57kj5zMkvt1CBnj5okXeoj99x",
  "key31": "4sEvzzGKGuqDUrEavfWA5rtoXhe4srqBrdaxWfRAjSGns2pdfGHfEZQxv33S8aR9m42ZJd1pwgAbhfAfg5TPEiWP",
  "key32": "4vJuv8CDn29yE1TsVsaygecUQHANhi3LchqpujyiKSsYzaKRTi95wHnWb7cvqoqRciYmsMMfZy8mTk6ath2dVpf5",
  "key33": "KLnfGsVKaEG28XweVcrLLkYrAVgrJUbTj36C52j2znqF5AJiPgN1zAshjLhiGLafXvnAZ1QZEpphniR2yG9dH7L",
  "key34": "xdvUjE7mteNvzMLbo1Pf8dFzPVKJtyGxHxHnemDqCzJoCr35ZRXaM7igqmuUHv76uB7aXaKaqenfqgF76L1w1F1",
  "key35": "2GoQFpruJdrJrXmBdDPZs3ntLi2urd6ZUc1NH7pqwzUXcQuHhhQurAYtFAszxqRFwD8vfLNnPuqurURyAFqUzazC",
  "key36": "5cR9D3RfV7EA5aqSdbAvPNJaFFu68ba4CkmHwkTsFCvqX1yNL7jUAevXnwopN1R7wR2fCcqVm8BCDAgE25WiKGkM",
  "key37": "dyKXSkXXHQdHPVgE6G1euX5WQw9W9KVdYtmUdc1pGBf7JCYWyb3KJ7pHLCP15r5iV9NQcf2cEfMXrKGmDD1PS4Q"
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
