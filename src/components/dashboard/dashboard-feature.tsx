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
    "5NMdysmT4taCVbvEnw8VHsVrUXsri3CWNAUHDc77PBUYEH1sjrkVFCKgmY49Y8mZHwdSSLvo4UdbvTR5WAuqsi9s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28Ru8gbRRVSF8YkViGNABKAAsy3u5fMMbvPuhNjMN1LDjPTaqnZzHQiKvdxvwtuouKJotrZCUbZty9eN5xoSpK5w",
  "key1": "75szzXnQSTQPNiPEa4GPTpEPVG7MudLeZqxvPaWTAgfChsdEYtSrV2zU4Qd7KPUUrxrSTkqxXv7QbdFKwzc3Kcc",
  "key2": "LRN77yhu6c7LcomRNnEWEbaUQnurUGoofZ5QgR1iWVWXKobeYH3v9VTKCGPALTeiLjC3eFX5B4iqeNjtCeTv93q",
  "key3": "2J3bfp7wPpciqBDK9McwJVU7DPzCmGReTUUSuTZ1Rq4eWeCfrhEnrp8XbaaBccaY5CL84jPkfyYuyem6UsrQSwxo",
  "key4": "33FGtK7wi45Tfh4bN4tMLyyGx8oHu5sjHY7Ss4cFamMCbDbGTpayjkM4eViWAGQwUFLNDB9Wo2WLEiboJ7p4e3hA",
  "key5": "34e3b6h5n1aXyUju72LP6oe4y68WzfHnFZ6a5ikrwFc7ppnycN9du7q2h5JKQNmvn2TxDrCfdFyHG1jjqqmREBL5",
  "key6": "4L99dS82w5jJPeaWRNndQ4Q3wBgp2VUnQoCn4iheDbLk7JfgR6uK1F2SovET75276Xvbq5zS7j7CJzmb565orXy6",
  "key7": "VWbVQM9uwfc5pq3gGLUs7SFUDhrg6V31B2KraLCrdrJgTDfYZC41RcawwFjQFZdKKncCrtnt3SePgdVBNCXF21S",
  "key8": "55uf1tTvFfgJRfefEBp25566fuE1ZMzoLV6jbeYKD7KQ8UCM6HVmgjTzVk9meoWeZb1Uca4jaN7EYwqBAdyDTjD5",
  "key9": "2nsh5g3rShCMgEvT4pmJzuAnkDKdgRq3qKxzHdMUcDq9d5jTej98LfbLUPU4g3sqHanbgQY5S89qGzZvFWVbGrLL",
  "key10": "5mSWCa2K9hGGwE766L5dA6LkYPRNPApCvnx7vBHEv1udkoP8PcAeaoUAhKa5FyH8wpLmqSL4WP4bha175nx34Ggz",
  "key11": "5nXQb3AsN13DujQnVDCxAMe8xgh6rLzaMR2guMYtYtjKBvcUr2or97svCKtmXJdoTjuVmyxcaUWAaaKknVZEWxMS",
  "key12": "4QrNLh5GDpRgzEHQVMfKpix2LMunZkYZJiLQsV3eNtiSwL4wkKqY4BNbPjvL1Ha7uFktewvKJo1ctoPBT6R3dxhY",
  "key13": "DED3vwh4KcYHUJV36ZDBw1vCGnzMEmXLoiXmzmmzfFi1JFWniSByU7h9jSUydZJx5Psr6qDVz4xJc1f7ubL469B",
  "key14": "sn5XdetKSy2DFKzgrnRzwzvPxXWvKJHR7Q26opNh7VnFf1aBxKH8ikkn2adCZokug8sAQKEhJWWvJ7LaBehizvB",
  "key15": "4p3HrnygaFQwpj7VbVzL8oqAcQVwD8qYwfzWuTbTkP69PU3ftN86cT2mkxGVNsCBa1kxySVnvvYMr1KrvYVB2cEv",
  "key16": "2cFcd6bgLyyJTttj6XkeTPN9SfpVRdY3ZWDi7pPZRQxXHUt4GSe92eHaDVoLJFe7nyjtYdoUVG6kkBKLfKhbnFx2",
  "key17": "3CYJby7jLwx6hHm9adQYTTqAvbFFqqdafPNYtmCq15Qifi9J6xTm5QiUQZaKbuZPjjzECrUMjuE7HibNqqyi5SU3",
  "key18": "4EmWp1HNQ4vjVPgryHBunMVHFoX6Xyn4M7ujMPNLCmnn8Wg2pUqk5QnNeNJUzYaHp6bBu6jbwPEVgXWqhBi4H4S1",
  "key19": "5zCzr7neT3q3gZjJX83b4G7MmkphbyowYQkBbLFX6FfZy8uYSmNGfctoq8KZWm3kbw2X4KFYK9U2iNfn4SUeF77v",
  "key20": "3pK7br4XtnKzUSd6nPCS5xW1kmFajWx5VTfrJ6fVHF8tSbz6pTTGRHNirChDrbCb5y1vg3GDvbMFyodzSidpTBUZ",
  "key21": "48mHsKmtwaazu2eh5fWB8Znfyi6WRgH9Yaa6uTUg7D37x4zqvGiBmW4pU5tojumFpcWHmJF31v9YEMDJQRiKgDJr",
  "key22": "3YHLcmqCGjKNjQjngx3s9XBwgJusnQqj2Yj5FP24cmt7CehFfga413hLYxzNhXBxM2WN4DAB4VQh1tsoQXz47M4W",
  "key23": "4hb2wSbULxKvAe8ispdKYWcCCqhk4tU2mjgQTGVJv26nLjfcaywv8y54r3pCGyQNJ7NxDN1w7gT5ud1pXhr3NvnT",
  "key24": "661GGFUa2zbUeHL1y2utsxpQ3ZSWsf5eJcSduCugJkwisg2UvVLsaVZbXAbBWGoVnVRmkS5hrq5XcyCYP4Stc6Fq",
  "key25": "5XUsDNHKa2gMwLuvvf5PUZNnTvRm1LxsKkmuHTXzXfwyXvGy4KZLQQyx7A66kcGR2PXPazcE3SUEZMXkhKWu2bEB",
  "key26": "5B1V9dWBqaVapkvjxEmgfhiZVE526MGcdBEDBLLqiQ8zM2BP7sBs4iS3xKbA7eRcVzoJCKTrVDnCfnB9tZJm6UyG",
  "key27": "PJCeH7K1LA8q8XX597XqWX6N4rhZwkxsc4dtCCAtLt9CQ61fhtyQevCuPepgdXDemmXCThyFvGaQ814wNHSjrsL",
  "key28": "yjqobJiSkD2Mrx3q5xUnkqvt7GmNnRscdbUrPjpeveR2SfJrgGnWMJf7oMMogtxEbpEQ4oGCCTP9Rvq1CyPjzQ5",
  "key29": "3di1zUGinUinqPoQkECBatZFqfSMpBhKDWBswMzBJiZ98Y384KH8hyK8JWCevoRP5sbfidiZqEv9k9ycXD1SJnTS",
  "key30": "2ABUHssqweLaTFRUV39pJ9tLRRYK1Tv4WgkJF43v7kbMEMJ2SCuyXwvnL1i9FoT6fjBSZf65ypR8AKuQEVGfsgbq",
  "key31": "3qfpdJTbYGK6RffUMXWLA7a8k7w3yrU9AyYgUyJKzAnwj6cFdC1WwG5A41qYEdL431p8BtJxqUTpqJctnftpAtZ8",
  "key32": "sUT7XJzeh1h7ze75sRhaKhYAKzTwKfetK2gcTNXRMDNMKdss8bwuothqyGScvV7dBeSYwgJdYvPVp7yFByJXxQ4",
  "key33": "3WDHCeQEccXB1oQsB3m5gGFnVbBvY2F9rd85HCg1b6LJ6M8UpbkkAqtbdMD9bkASmLSZYy65EAMJtCL7jDDTjB3o",
  "key34": "4cJpbQD9rKDnuBGJJFGrVAHmRoeoq4ziceMycGLMkyXKVM84JupjBt2qUMcSvnp7Z2zXcq4QUUAFQatNn1asi4dS",
  "key35": "5zqGkRhkVe5UKntTkZ3JLBeZ6kgrkqgmKpHSU4z5Tg7a7prxLCwGvt3PnbewjHbwyLyHiUtcmau83rUe1RHxA4Mk",
  "key36": "3fvB4ksWRgLeBoKdw9ySYUW8ytrPsffNvBQH5UXHHpdu6jaoj1knghyNU4EpF3XxmjZBTnJHo1NqQuufuy2zbPCC",
  "key37": "5whKM2iwuJ65NJbWms6547z7o76wKnPsjiAtdBqpVYMbAdFSxhUv57gkxuXvNxU2PChnK4XskjAGXTfi2FfP5bE6",
  "key38": "5e8x2m8heYmFWYJpMfXdGoQ2PrUqRkh1RD9J3yCNZhFwqEnh5gyph3Ea7zjxqm8Q71tSUdF54arprKM71YwPnZKC",
  "key39": "3b1vU5BfTqN5tNypbVTrJB9AEPgiRD68SUywntTtnC5g8ppJvhramR9cdz1ymP8LK7VXwpgo3aM16MdQpkWP3thn",
  "key40": "274ezSuHqswHVWF7XTxj6jPkk5y3KJehtqcCrC5t71vLYXMuAkPdPomLSzzecSZFWtA8LeJUBp1DHCqBdVEraafM"
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
