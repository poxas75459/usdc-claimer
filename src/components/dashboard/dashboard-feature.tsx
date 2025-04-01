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
    "4VSJHP7nZF4wohBVCH186gBDyCdzoWxaDwqyDP2zyXibjvY9RCuUFjmeB9UahvGDygaeb8NeGYtdfhNHTsLySe2s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FwA6MiWFJdeUAgfQbDvrSY3iLsb31TFxQKSJPooaexVMUcRmPjmeyrr7WUTofw9PH9hzEDwTAGEaWkAKUmMp3MS",
  "key1": "4984VNQ4CNNQnGmwT1wnKuWnsbajxcgZh7C4C5NjiUnLW3UgnA6GzzZPHsoB95h3pr91NuCgQWgsNWvqJ8QTAx18",
  "key2": "5efukgXBogf5F9JZ7rkSpeMsoEmr686YvpK4xNvR8Tp5hgbd2dzfRQCCWQ6HMqLH1vYz7FspwK68C7Ux1mVN4Sbz",
  "key3": "5AhCHrA2xp5zTWmhFZsHbdfsLBjNAtrXigYiMrq269SwYExMwkJWQyJUmPDu1VKzypYHGdy8boMZ3tXGg9ot9Cok",
  "key4": "3qSBuyjWhyHAnjpfCsbXq6CaLUYXkJyLVq2W8hKqurmxu2KFE74bohpmnxa7iDV5PxqzHGGKVh3jFoGhkURRtYKV",
  "key5": "2bkHX3xqePJHQZJea9K8nhpuPoEhW4hjdhCpXvV68xvbxnSg3Gx6VyawMK5QE76GE9PQXpu5V9PUdJKo3qMLML43",
  "key6": "4dbA9z9CQBQw8XuMBBdkUoHei8pHEWWZuAo6nQTDMnH5F2CycBFDADGkuJDP5rxGbPPJgrvJNNeaQ88A3JBkdhYA",
  "key7": "5ARvcw283PzSZFZHB4Bmo3mU4qWsCCHLikkHPND9XshBi2qCwGEjm96nQADe5DFKB4NLy8wuerLLLFmHCmJCjC79",
  "key8": "41sFv78ZUczEAcTomE9rrL9yKtukgkeDgQ1HDKAJ9XTP7ht8RHHj1DpyB2wZhSgEsvpWa4MpEfMkg9SUxyMT3Dxr",
  "key9": "5XyH1pPdXpa3gnx8TifvbPVZbzr42nrfFRtCYxh3cFLHMfMrwLjoMivr5pAAf9cbrAvCPsMETion1FNcR5vcYVzT",
  "key10": "5s4Khh31de1hqi8BdEDvmHyF1pARc34efaYtxj4CTEGjd8Yp4bmFtUUc4KjhiQWxkTz6LP2NqumwTCBDZYuU7zay",
  "key11": "T517G9WKZmMmKuYnKG2jnAMtgsQWigPN76mu1mc5eqJQmVAeZWvfEzD8awj1hTKhsYnoqNo5HKtV6FhqxDNiWS3",
  "key12": "5vx8DNNPK9o47fViAzNCta19y9r96TFkMzepovHzXgcDeZteLiLZMGL4ftVGBxZiCB3monL1MS7pRBCsXkRFDbeT",
  "key13": "4U4PFeFB67a3GodvRRS1azh869jmXNEGNPbaeMrThT41CnGz2EN6iDLoiTjd5795f314FNkY6wCUvgkwPNVrYCZ1",
  "key14": "2pMTHq3pA8cx6kww2RZZG1HFHEdRCjWciNw4kYqKuMqgB3sTddf862CKMPzsfSAj4PiVjcdPDsMGQFh9A8feNEMY",
  "key15": "3cECdepnJtPSyG9qQNB94ynR6Szq8eJi3J7GjngMHNUXpm37g3csUKoF6DuWkByYqqzumysPvzcB15ZGdRxZgCHM",
  "key16": "661jfw4uUPw1P1RNxodUmKnEWMMis1Bxa1mmk8aYXpu37RBYt5horcLFfqWPM7x4ZBFgckR7axTG2LGpepZpjfgj",
  "key17": "62HhnnXtfzUBkQEtUjsKJ75CuxLuUzNMhod19QaomwUctgkBrQrWjr91869v3QR3jZX919RC9L12vhQGv2pp953i",
  "key18": "4GBYubddrJP49Mkz1cv22X71LSaCZF2NPSxMACVp2TnNCmUMv5cQSEq8DpmiC1C6Xjk5jC2BX4KL7ChfuYQLngaw",
  "key19": "gCfqTShdPRENcvCfqU5ZrFzF3iS4Df8QKqvuhyzKuirgbWCSiduq931FMQ86bq7PyQ8XMi3YJrwgMMLeEhEC39A",
  "key20": "JNykRq4TLio49QDxFy4Byzu3M1Ybk9YTQhzUDWuFHXQs6yw4Pqrme2FpgxrHPMPNdJh8DW9C681uJXgq9Bxb1ZA",
  "key21": "46qoBAoeBsg3xGAWjcbsQPX736qrVwUZ4zWeGKzHX7BSBxrDgiL392ongmoxPXAMSSHSDSfrtq3W26EBHR1q7HAu",
  "key22": "2jdqY3oYdsRkhpmVMG2MLyeRhhA4M7TSE2kxFCtiqLZUbpzUAu4sSSV1mYAijvvPk4xTxvr1aauVcvXcpNUXUQ8U",
  "key23": "3EShESjDMsSC5CdjtEmBFaiWUGRrX1ruVnabK1UAGbHnBuvNAvRAeg3bbJtAUvXApsiBvXaQS1QnwJdy6RyfoNPZ",
  "key24": "3xNvqyFGSFv3zzeJWXTuZK5wdpB87kKgJXxLkxoN7q6pw7X7zEL9n9Gi5Ns9Jss3p8Vb4n1MUdVPsEbyA3W5AfbL",
  "key25": "2ELxZWZkBMKRAKtSrwLu4GSXJ7kZQXjPiHNNgbNX4hD43DZg5dWWJLgN3ntvhWnF98dsh3gDia46jvu7GP9G3Fvk",
  "key26": "3rKzfmZ9zo1qUnujY3yb8i69yhnExs98WbFwEFWevLN8b1Usunpr5LhTCJukZuHGN4jkMBrqyh9Ydkn9Hh5f11Zf",
  "key27": "56yn59VKDPf3pkrg5GeevyonYPFSouhNzThAoqVQZ1A7fzzcdpmf3rhxLK3ghqco5z3j7kxsBcWMF851wHvbotUy",
  "key28": "4nybcceeqzcL8B1EDSVjakeBmi1fFmmSy1xbEbk8Abb9LXLrzFBDT3q9kKqYWPguBGdK11UVEzGRiLhTv8UsS9PA",
  "key29": "4jWSV7RbcNZyyesPAjpvtJTYA8u8aumk42R6NDYGzeGjVFdCeiYAyy9VgHMcdZfxCbhHhqNk8FeoTjaaFNaC5hCr",
  "key30": "3Umxa6Z2PTeyxFjyKoUKjwXWcNgDCriRn3eHNKiYyzARFCJe7BqN2j75RPUWya6MUXABpmZyH7dDfCpfsCCtXzxy",
  "key31": "2wTsPGu8E8xsoinRWFFFiGa73NJowHrsbgDSSipZL8a9GWJQ17VAUR31WtuiepdCSNAqVCKp4atHmqgkCfEHmEQC",
  "key32": "57PAeRLygCeBSn13aLvzrgF7N21QFaxzM2N1RC39t2wWxLpYms4qAjGqZdzEzHFfWfrvXgqrg6Z9ZAnGA4mKHyUq",
  "key33": "3qSY3dyGHnpUsk9rd27JvDa91SbtEP22nAQKy4Dzfe5nLfBdw4MqkdKogjRzoMkV4n6TqWVCPBQjfymGMycmjqVp",
  "key34": "3oNhcFEKX5HVhEwQbUAkRNkUQjXG6CezfsjASbUmig28w876EwUX4U1db4gxt2bTLQQUZLSHVWFKqnaLZkfbhazG",
  "key35": "3QVW7JWVYuoNWQWTvqy3Qn81DrZzHNJyvErXk3d2TQmtgw4eqgrnwXd7MUURPCrzMkzjVXLHd5pfyXd3Ak7N1FH2",
  "key36": "v8hKMhdWUkLPiDYfZra2qFtK9XKgAPP8yGrF9RSB5pHmyKeCXHXfV5V8LM9JmXiMQdJA93DQJJFijkjdD9L7jBx",
  "key37": "XRKamrdfcc74W5qLt7YmRxmTXcDoqsXCvgrbmfWDFmQkQfnhhGpZ1QWc8M5JHvNKPbx7qAAHw1XgQyWZR5TsUa7"
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
