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
    "36hBax6kfgi1KtCdLFnQZDfTbsn7mBQs9DWxBhiNMzRBKCQmEDH1GyJeCZmaptNFxcdUfh9iV139ESt4vjok4udk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WXmNHuJuGhK7HGpPjMxUBGuTRwdBsMEWNqfuVs2Cp1ydos9PfawGhWVL7ChX8ybFfDbvGtYoVRU7vrrhPsTdrch",
  "key1": "5KhEQ4hHEEi7eQUWQJfnKxgeMjCRk4XpT5W8NFscC3Tqf9Ubs8aHjvfcon7S2qyJn4yJZJU3gvzQRr9zWs3gCmQ6",
  "key2": "37yHmaJBo3PQPDbsisX8YaM2tdFWfPteVBPZsBDjcjKJXLQz4asyXnSGHMuFvFXawiu3ZHbsUWiUYxFYdtRTbpCV",
  "key3": "5ZcxZc5YRiRB2BnDayQ59nvjkfCwsuSFX4UPx3Z9kM2XJybH4fMTUrPU8MjWj8YZJXbbnogE23CBTstZRU9XqBk9",
  "key4": "5ghDFevCd2pg1a7dzqFDSYSHGgRW4tq2hXu86dUWaRs7WGQ21fPp9dQMA2AyQciKNxmBpLCfbpff8YyuCG8V6mxP",
  "key5": "K13yBTRo4nVnMtdE2LZYhyKqviZR9cw5mbTgttdz38uqukumSFve8Dxkv2KxTVEkJqM2WFfPswQPiFH6ZNFrqSQ",
  "key6": "5YdNtqMMDo4b7WjbMoq5zEiXbWDQT1jnAHBGJn84zrvnZyDu9RG3BfpHb9vBPB1daxoUELhDuEzw5QAr4F7cswmL",
  "key7": "3EKfAwAnqpkD2WEsEMmhM72dTU7LcKZi3b5cBiUbHbqVVaCGwC2ubjgsJekLDQZG9MeWigtuHLQEtZi8wUp7kKp4",
  "key8": "5oQEEdhk6tkHUxSMCY7E1mkVibAMdccKNRo4vK85haqayjQrFBu5Rj7czJ5HqtiTeXXa4o85pPM7RjJ6MbKiwaYV",
  "key9": "3Q63aFKGr3yRo9iwQWotWUJqzwe78sKJPU1CSGGSbyQbwRSDtQwLVUdnWDbWMEXxAEdXaHGX1Tf9yQc9vtTWkKLT",
  "key10": "5kHWZCkCz7jda1MC6rkWsnqsAutJbuG6Uok8C1ugFQw8YfGhjo8uj6YC1t2twGmNgaJUFnBHNZNTQcb3evoVr3su",
  "key11": "58ja3KJYjeUiQkDgr3s7tUuyxunXmd91nghwfiXWSFAx2Yv9KJp6UgWA1Bx2KMymERVPyzfrq2gzwiFvs3aqDTrZ",
  "key12": "5876dzDrQoc9LEQYmgLknH2EX8zA3AfhBzBiHuPRg8q95C58TuRz3a6wJosMuwAEcd5dSQS4js1sNDaSwoKr2ZCK",
  "key13": "5skHMT6MH5mJraospHmcGdQFkuAvmXjRDzUwCD8diUP9tVrLoggxVuWJui4nSFXAH24FxGiSrk51qx1GZ8MHE74q",
  "key14": "4N5Ltoq46MrrNjPjtdAo1VUNSArupYXLfHsQkLC2ACxg1vuSLYdDPJ8maAZooRUhoWrpp96iPu8YDNoKfqBPc1vs",
  "key15": "2TMnohvqeS31sPd2EYvpSALguYyBg1U1bAGDYy9Knw5orZ5y87gvnecWWb5pJHBsbdZDV4ahLULSBsgUTCnrsfgE",
  "key16": "2wyQmUnkCuWh9SNZLwAsGCvZ47P3qJahoCrvkwESG7mSkEoATCi5AVJcouYYnfsBEQdjxx2Bf6wYMkze1XLEqg2r",
  "key17": "4iNLJMjDBTSKrNdqNrXF8M4tSzmfsGCdpgbZdNqmHMz2MxJ94M8687WFuGP2b4FxBK5TE5TPxp7jpyUpRgEYq8KV",
  "key18": "2Pr4qaSVWP2tr19UffvjoJ6sGF5x89FeMbxzsBzPt7RuR5JVdrNuwCjK9A9FUE7U7DkPcN2Rayw5ZhUsCd8qQAvq",
  "key19": "3BwQytmWsUnTSEW2FBYNX1bYZxAzV5yZtGZBjcLFjBiyUunCGDyZ325wLMLibWYVfPwoTq5xgRvY48TMFhDM9b5Y",
  "key20": "5ZTV4WNQQp6NmxipGFy7cYtYWshcj3cfZ8X2vQXPDpjmsdnSYAtGjGCcSXK4J9s2uuiR3gRLN9xdiEucMyBJccCv",
  "key21": "2GnBfkqzcEFDfh8P5ssZ7FFHDw1gTHsJYjeUTsWPzjP8vtNMAwEt2nt5t793KWFMzr8qNhGRayJ37z5FevYtJN2N",
  "key22": "4ProhDbnnuEy89AshQ9P8VwJdXNbvxjuWxZ2KrYfTc39U1hxsYPPWjq6BYoX6UYW7gScii9PXzgD5Z7BJHhmdkWc",
  "key23": "ZGMNMs45t6FHAZGHLjBaQF3BiftEo9jx4VkG94qg5TNACU7nGwHxDPi82o2wG6KKi1Ckugexkmf1zNNreZMtEjz",
  "key24": "4xC3ZzHkE6yjU181wnriN56D5S2kR8xaYAzL1rD7ThyjmKRwZBTc7Xq1A13WDmBzqAK4wb8TtPyByWG4B37rAA1F",
  "key25": "42XutpouuaNiZsZY2ibozF8QDBurunRLKN2S75BRmDhLaiu6cz763XEdev9ofqrmV4w4iCLbpR1MLQffnKAmtjLE"
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
