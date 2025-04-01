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
    "2ANWbbjpU5YUk26ZzCerLTgNutmXqUjn17L2jsL6yvutCNvuweR5dw4Y73hcrF7RBz8sNJDHpocpDm3HTSMxoGSS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oszGpCvacW6bnSRsNR7TpMJnQjBZeR2ptAXdBiDThujMkqagUFGZMgvBHNMn6fnR6JA63NBjqyY11DicZaMtTy",
  "key1": "4aQrB8NyF7uWVzV3A1LZZnixgqRtHFSnsiVUecQXKTedHar4WFRZeYmUGtDLoFgLd1NbDJvQQ4HsoZtFktCdisbR",
  "key2": "4SWvuTUbMmqs8VqU93LebKcaVQupSssgkkYF5hkvHWuWRyE7AiH5iPc6Zm7GgAnEigGT3BnCJfPt7XdthsbaNBak",
  "key3": "4AS6zH4uP51gYqSMyW1SsMK3bGYg7kZbpsE556DWKR5NG9Bv8qG6v8fJB6ZuoRmw4Cc6Ji6gH2mGJauQtkR7NHRF",
  "key4": "5DTZ9TnqbLkPBffVYuXGsjMeyfvn2VzawC5zhvWQ8EZwgK78RJCGdPG7bGqx8FJG8RA4JcMmQ9zXpHLS9iKtQaXe",
  "key5": "AYqWViBtMkCSCzYsCcQTJDk919HvC83aRDCYRCVfS2rvdPRfck5YbwkSU76tn4GqCP4k3esLQZ4d3Akg8h3JXQA",
  "key6": "2xuQh8P6YHKHW1KXVF6QKaQa3NHbFCan9fecXjzWLfEWrpVKoaKcjnWqcNX3oqt9Qm2YcotgnGkkgzs4N9JXUnPc",
  "key7": "4pwD7G4GwrkJRfrJZK6adCrSsRQWqsUm1Rdi5Yd7STCnxU1XLdo2SeXmJfLkEPsDCFPx4vbT96GXYjpfb8cSovQG",
  "key8": "2AyFqAkoFUhnc9xzGh7vB9yiq8TvF7brA4fviM2E1G3rjvAXAcJbr528KzD5XMCsmiPrybxBQrsEDQiYN2znzwf8",
  "key9": "223zKLacbXxfxv6pspxiAnQaYtezAFjG4qhfdyjNULMokD76d9rdNi6wPLhdaaKam5dPL88xE1hj25zJKVtfYVB1",
  "key10": "3NvnwRu5Fnroxsmo31Bn5mFPpxciHK31Ck3Aq7rSZ3kx2V59dFtkm7cwbFSRZhTJFfh87qGUUn6gQZz5RERYfSN7",
  "key11": "4gcoqEQLFN2djLD54dB3tCjotQ3dE6iEP6GEL6wg6pz8VsvDNT9F2YiwPvriWwHhcM3FM8xrxmNMJ8zqw2tR2PE2",
  "key12": "5CqUuetVnfQxiT6x8jgujQVyugSaiMPZrSQsDzk2KkAWozeqQebChUoSkrgicYh5MJy3MthmwwMDhP68bx5x59Nj",
  "key13": "3Jn2mA7nGT9fa3Ffz94jg3d2c997yMKh9GZN9P8mS6bjySN6YKCg9mamicLraX1wKdrJLr4HZe2G8qFUy4NzjYpu",
  "key14": "65tYGmwxEJQEmnk4SXV61rGJWwzDjsTk3kHh9UgFTTPAKtw7QrMY7u6fY2GwwVGkDS4LtkoPVVe4R4a4MXgTZfmo",
  "key15": "5bH4Hm3dp7zM6in5JozMErKKJRANc1RKn33XZt88qPgRpYUNcSuFtGcXvzB1aZvD58cDhhCAo6AHZnUWyC8avFxw",
  "key16": "4cVQfqNQeDJHW7jZNsoPTXDRS32PAcGJTnvNBhQ3JMLaiA12gAGDnNUAJEvSNEAfDfEGRncX9efSqGn5BjDaEuUn",
  "key17": "2hFeedBwKfzNxffkgCDusG8jCYSK5QzibGgZKV7r3v55LYPU54vWp76LELH4VYNQh4nZHM3gfrQadKwey2jQGWCH",
  "key18": "4QF3uyQKZP1yEsVR7AdkuvUuxWdaN3ULzZKdi9YY91J2NaSThDEbCfmnSQ8gaazH1vqKg1HcnrsbNNwTFAiS4ter",
  "key19": "46hsvGSSyzayJWZthGXDTDpioJaWo7MujN3KmdcrihG9p5RViqEooUq5CuDy166Z7898SAFsYrfov8bCLMmg6ZhB",
  "key20": "2MDH1HPrbaELvDpcX2DoRqhrZYSDuWRjsqzpYRHgbDK8U8psq8N8S4dmx8cxZixU8fwR2DTG3eRW5KM9zdNGP27A",
  "key21": "54FDeazb22feBcqDyWEherqzP7wS2Hh9aeKbBii3Ufwyo1wv5qw386Yv9Fx9Dx2E6btJUdSJcTtAPCKu8v4mEoUG",
  "key22": "2cUbZuoMF5yTr4kV5x2jmgP8zJWyXbe57DBQwh4b9mTTuZTuu3xB7pRT8Dnsii5V41R1tA8MxfhYoK79cW7b2HcR",
  "key23": "2xRGAdS4xGrF11YGqCLftPuAFnSg8mVuHh3DEgkdpvybJcBgQKXGJ1AXwMRAwKAbyK4ys4NA7fi3qFG2pbtegNHu",
  "key24": "5CusHjB3M6hvAwnwpDTXeJBf6fs9FpQYYv3GTHa2utPhBTBpqPvTr5x7HWrn6Y7KP1VcbGdp2cwYWk6DGWoSbP9C",
  "key25": "3Z2LBfP2XZfeHZYWaaTM2TCz7NKNAHQU6TXdPLjHf9RCvs94bCs456x7wxpMnk42upPEvve54mJnoZUsXm2p6GsD",
  "key26": "2BNsbwyba6roH1MCfHdY8QpQAXuE7xnd6Sjwvy3qCRuF8uBjbebkvMiY9YRXH7v8Fy62CGcv4j5c5WuMMaKpjk7c",
  "key27": "WuAaaGsCtnAJ5xYHJPjjyMGhCtuiciuCrhx3QEzWJSjrQsfpx8RKUXdDmJLmT7CSCuR2CYW7VuoHZg3fr7jPwdC",
  "key28": "piXTPWEvG8fKwRja3DVASauGjnTEB2hSCwgzsxPSzYnK9p6EMsX6bCAtwqjVKTMEm5QzxsTZHukSPoM7T65eZWa",
  "key29": "3BjE5sU2SgXxMuBGbZZNjPhdZevY47DUMaH3sVhhJ7ZMzRBHEEggZCZ1H612HMA4bfW77Tuo5Kn5Peh1ar1edmAK",
  "key30": "gu2bnbFBH2b62eqssB6jwbvBAMDj9Kufvuq9Bomr4ZFz9dn349qboxnCVTmesLQA98oRghRMo4u9tPMdZ7yXsW9",
  "key31": "38unm3qZU1JcUBmvNsUqVPvkS8akKEZ4rNNYTY564bfchwHq1HiPBzefZYmopXtbbWPSp2pdd99y6e7GAQ58aiMM",
  "key32": "5iV2Pt18xZJav5EVEJG17cKx8UFSDNHmhcmSnC9XGiauZiRTZpCNdW1fUabsHGCpvP72TbX258QX8df9L2tjquTq",
  "key33": "xAhLSAviUdLPTEtJ8t2Bo1ZDrhoAd2qNWzU769SPGc5f8kRCrwBMFmJmiDXpvrqGGw57ykR8cKkPRs6c5Nrt4sa",
  "key34": "5PwwW7PSah2MzdP87dr2ahXhDDaMYU519veDwtvd33YTY7D6rufwZtxofX4NRZVrrRwyqkm44p2Gar1pgj1gKTdN",
  "key35": "4JY7EqQyCfKRShpcNi4VvgPZ5DY6pTcSdSZHsxPpebsq62U1nX8YHECLApn2iLiSw7WgiDbWytAS2XmPKSrxsmhD"
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
