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
    "3GRbTgRTnabtnbbZFXgsnSpUUrP6nTmrDBYxVmt9y6ZPNthp9yFArCDJsgvU1UT2SNBEbgCuUgTy5btAJ8QtUC9X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66HY62awGhgDtFAKEa7dFapGmPsQcp4zdHCyqpxn5WN51F7D6REKVYyyQj875RM3rmta9JJdCtx7mHdxAg2zWNfo",
  "key1": "43dmWPyPHZUuCBZkbB974Ftk4swMT7SES5dGG63UHVpieYSmMjBJnpMfKDDhAHxHR2H4YDAMHT7Hg6rg5pPHPXLv",
  "key2": "3MHBvmysiLofw8BSL46iXV9VY9yYTFvhYFJBUdhdBaaHdDuTUCQ8Nsso1bqNGpK6QXPxrjg4QNtCWHzx2HThqxJ4",
  "key3": "226TCFPA6aPnmPdZh2Zy8gDgNJnaLMavZCJUfy2vw5AGrQyCPgUS4tQ8NqCJ5QpnRJALeFr9TiFfmujn3yTvhiEC",
  "key4": "3RkVvXXTJSMjGMUM6WjccTjJotPgXK33BLiVajfwT8CLCj1Bugtbr5Lpi7nLpkemwYC4EDV2MQq2BPmHPWLcjYSW",
  "key5": "24dmK7Un9sN56GywpGQK33pnEHiyYv9jrfEbRxWnmxFMh6JJ89hkCQS13Ci2hgbbmgZhWY61DqhWMtmrPL1J2G23",
  "key6": "UMmR29qRNVTSqqL9PSouHMX5TXqnmvsGHfozGaSpnYX5QMxKLFWKgDFSJP6FcFtfzg8s2jcrxVMP4sAzqHy1p8m",
  "key7": "2z6FNRk3LLFnPxygoN113XLeKoJhdoTpG3JAEZampdUWfpvVAhjiQKmPm5PQQAaecTmRBuPFgCwKWAksokN9s1cA",
  "key8": "3UJfuAvSLo2ggeHa4PsNgoBRJzZM4V5GRvCQAcDqDU6FJr4wYG3s4EUoPUdf2LwJCj8PGoUbH2325CGp3CXwfJd7",
  "key9": "3X8noBn393Vt99d4UBrx3f2DTYRHJzXyPsbAVdRVhb18tKp9CbtkS92mvsJ41nptqFwM8NT4PwZQ3h1KC7gdaozU",
  "key10": "ePumo5FvV4gpG6ixr1Zq2GPpQTQTpjBM38srG1A3hpwwWfsgbByMofEJ5Mmfz3jryqfKkgJqFmPNrvKyyhjvaUh",
  "key11": "3dXNskcCfgUKW8g4Dpyxb2Prc9BZmaw6LzpM9eBLQpm8cFn7w1955qfDu3SzrbuC8dQxhnV4JXxV3yDPFgfexF9K",
  "key12": "5jrfwYXxvfYjuzuBjeLvdMGXLYvgHhS3mG3BtfuP4vFeDjnx9oZZh2VAJv4miAviGaUhR9m7KvDSMkRKK7QqA8fa",
  "key13": "8BJ2tmbeYAgKxMtHc3xcXVBCnBjMb1H93XqaiEvKCzwX9xCN1e9FQ1TVBw8QDwBBUQEDPMHXzXMVj9RQEpjWXpq",
  "key14": "KWuSuMdsmpXr36tTYfxSfzKzA8a9DA7iB2kdAJ55MeqiT1DumJX36yV98vdSxyMbvRLdEvB47bJ6r5cj8B9MyoC",
  "key15": "36dDSHkpxbMV7J84FEefQrqBUi5qNTbH1fd5ydQZxLAXi2uxqBWggeTKx3xY1yPcMRkG3qUXz7KsfPuhrTySXxuQ",
  "key16": "5QiS1wNVKxRnXdP1nEwYfPEbN2NRyq1DSiDaUGqC7XN8BTA34beG824ohZfvY7uG7MbTYcfQTy83fYejaL9dUjDH",
  "key17": "2fF4ju5yoJdKVMPGhEnie5xJu9VWfE6QB7n56eXS4iHgd3wisdmW1jnUBKQUtDJUSp3RufY8skwAHHAPTSfrSfyV",
  "key18": "2vrADaBwqT6JMP2QVC9d6PUoDRozPqZNB4d4EBBCYNvt8UxMw9iXVKkupyWeGADsy46wcUeJwd8DfKjqiGywyxAM",
  "key19": "3ZZhdB5x8oK9VEbyg8L8g5yDzVyhcXtSTmK4LukiQfLz1SXnMKvfJkGKoVGf91RL57yvg1HDxNL6HCGsMHogTCAr",
  "key20": "39sfDQJykNa6ec2MeCZWKGh4xvVofwc4CS8s1WDJMTP74UQ1Jc58NLyGcHmJd33bWibvJB3reBKgrjiV4hkLAXCr",
  "key21": "nbAfkgfzGXYhnygA3uEC5Rrwxt8UbUB176B3KCLWCUUTvemhYSVm5xFH3kjhvBpeatrzjAWHZaZYbirHKB5p7q6",
  "key22": "4AjV85pGRe2eNia2JoRp6yNh3koaH2885LAovqNok5PtoZxpEVqzRmHKpfq3z6oaXA8at5qwUNtboGU9BEXXvsgG",
  "key23": "4SkkYckZR8MfcZBh5jLMFiypkiF5suG87pLJS1qirCJ82fwMyxUF8oznWGfCQ9oNfNnFJN2ktFusVikgnKP6eZBS",
  "key24": "ej1WSwc7yN9E5B6hfWsePCLiMfys78YRK2q2mFXa3dNjDsAYSyNqTCvT9mHwt9g2TFXYfc7fVuxR8Si3G3o8i71"
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
