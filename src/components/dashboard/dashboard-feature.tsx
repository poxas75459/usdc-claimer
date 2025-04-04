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
    "2PbtwT2exqf4wbLuFGBB2yHLJTac48FrdtmAnwvon83uekHZ47fG671PicpjhB9r75XheacRhQ4X8efFDXE9phJM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZgZZbXYYS21HMG1xaSa9RFKU53rNAERHpxJXAVF1XPCha5EcfAceufBgZW7wb6yNrBDaQHUFrkusdp5hdkunyP6",
  "key1": "21RJK7WT7FTaMdRu2mLPivdWVZ9zii8AeYPsdLPBaqFpjtXiyrRNn4QtDsKwAKPVfV6WxR2jYTHdNfqcNfsAkb9i",
  "key2": "38UdqrCWn1CLCNi1PLHXc4FgQ4LLgEybYjbjGiHCk9aVfpPLZAaiBBuzETFe2kxUYisruwNVFVqxc1wmiUa24Qcw",
  "key3": "mKfbJns3Y6fGcjMivYVwGBJNwbD6mRHrfzggZ6n5Qjo78VgMkoLuXGRuoz9FtTgB8cDLWrQqo3K99uQH1UCiyof",
  "key4": "71nFRczTQaV3gDYGZ7Ec1ZnF83L7dBQZrnmcb6Hg2JDV7DfbvNzqX7kB8yjQNvrvjDdjchG17e43xo82JZqTFgR",
  "key5": "4xJ9EHFCtManjEaTLBS6AGJHQjTxmcw5dB62FYRpn8yytrx8Ez8KFpAVdGdACrFt8wuaeST1oEcrFA6v4Z6v1HC4",
  "key6": "2EPcBT4b99VP68smeR2W4A8w8xoDUUvRLNfJh411XCsBvQMCy3kjcponpp28vFJ6Q5Ac5AMhdEPNvaLaoD11igqD",
  "key7": "Z3655VXh9QyeVLp44EWGW8dC3KNev3G1CTqcxmieNkTTTMAnRZEZgw3CzQDDC5Tn2iqkrgCFbBtFsqCSPiFJ3Bi",
  "key8": "3AvkiiAMoss2XeXKeLJYkdCaAK72aV8Vv3h36EhFAhYjhM2o98noUPEKcZheZmAvrVNYrpvThdgZCcW6jH32FL78",
  "key9": "p6qPZue8HRirjBScqVeqS9bg445RBU8iYfsw67ibYbF9z287QbRdxmSjAvxA9JMekEjULrbzBxEo5fTxM5NtJW9",
  "key10": "2pd7U2K7yt9zdxXpV7zK28nkRHc4pinyKwHRQB5StpTmSzXpmsVDYfPNga3xP4LrNBhbPcQsrmevvEYUNncNRDB7",
  "key11": "5UCUs1u2s6vLyQJqy9zsrnxzBq9tyAhbiiaLoGnu4pkQ6hWZqMhkoH4fES5LGKLBZ1GGBhEcnLNec3eZZo2smt5i",
  "key12": "2kL5KQYPbHBBQUPdzQjHHnHxPtfPV1FcRuUW8feBwSnLhBkDbZSXmy8B1ELr1dgh4oPDnFGK4bHYhwxUzFZudron",
  "key13": "4KNQYpyGW6ny6SzTBoPDcTTHSA5FmALvWjycqEn36FUG3NWAaYzoKTZp7HePwnB3yX9NnWB1XnARzY6DEFEFVDJd",
  "key14": "4sTNX1Y9hPU5mHUbAQo5aYgQ1qfurzgScUfYkipqYqRksFsxas8eoDJZR5dRZKjV6MFPHgM4i2UYFZ2WRJzaNyjX",
  "key15": "4fQfY1ZrBXpnPG96DE1yqNtMk9WNBJTQqeeCLancrciYhUv4wKZ9uk6udN4BVUkFLESPcaRceoEVPQrdXp2Ha8p2",
  "key16": "2xQVtvWYVwSAdmTPSSL4kyvHju2F3o6KQNdFBY8d9DeGAhJXsW8EkDwBcGA6MB99fvhdXxDirzu1sZJTxf2XmDxk",
  "key17": "3vJPM6h4VmiRPTeNstWhRn2kPbRiB9oLTdLEuHUfMBoXenbnQPQGwM8Ntxh2aFNazG7kV1yRqycoTX5mGZkXion7",
  "key18": "2yi5JKMEgFTSt3aCzmRhAQRAvfVGYidCLCahudaKUy2MMaunuZ1WuNMUyBZgvKnB3fHkBLtqTkzx57JGvy1S8zSR",
  "key19": "5CHmJVMux6hKP9ky7DZYKJPTdBZwLvetzZJ6HnKyKA2oP5j4uzxaEaS4pmjkZ4mKKRJA2pUmCwSRMP441Lb8yHzb",
  "key20": "29Q1onM7RLcQpdvheXWL5r4Rue1dWFwoSAxXwpaFSc9LS89JGNXDJApMZeRY3LRbrtBcmtYADMZPMNr1YDCQxcxz",
  "key21": "2FgBvCv1k7sdFxTyMZyQByXK1TVk2cQcEAh1xQzBJa2ygFkZy2g7nNBajCFcMSprSrqF194fpkTFHNG3Y5qJbsgq",
  "key22": "22gsnnWZinjHfCsWWiinkD3DaZDM413BiCoeLpYzA9nG5deV9oJc1yCqN12KyUaBfWbX2bzTXHU5uutT7uP33FdP",
  "key23": "5AQvTGm2N1mLzMn58Xr7JAxkauYRQ1mcxKLn6k1SQ5WLQTANQ73ujTd7xLjVbbcpxkNSzFqNcqx3s4LwomJi6QY3",
  "key24": "5JFcGj6QFot8FdrHRqk3xjuRMrvkSsBnmuphGCfpU99C1GDAzPQAENS5A8eUmqn8Z3wy4CEKb33QUcD9wyPsGn1r",
  "key25": "4Stt7qRiJRpjj8ZGKHCDMGf8CevUTXaCB6xjzJRDEgPLF3G7xd4Ec6GieQ5NGdwemvMxvMq8R9ujAxRm94zK9MSR",
  "key26": "3rxCvKNewjVo8MPK7cb6BF8Hzye5xk9hgdVgbTtQQnEG4CzthVhk9LcVVHmXUbJhc1uYM46v3qCj6hd1wmxj2ebM",
  "key27": "4va1oLbHdYCRxQstUzJoSw9CSR4b51QevURmNSvAFqjCNqFZVtL4TM5Trn91zGQERD2QpYTJ8BZ827qQzAHKrAv2",
  "key28": "5rMHkM9RqWpHF7nSW6XcibXe7YAY14PotSybtgLVfiUMRndqGSfqs2RtCtz82W7y7kuZtw6f8m935E8HePwuUm1L",
  "key29": "2CY4UdviVyteDaX37RtG1gHxfW9YjQbRD7XAgE7cYH89rz4zD29c5W84qQNvpPJ7nPWDGgxgHW3dBhNJ2DCXjgm",
  "key30": "36YE2WiNbWVSjiUWg2xTqXveQ5Eh8zcVebs2HFe2BA7L7CnHCcgcJmyVuT1HnMV5NMPgPgDZ8HHwPMbnSAVetP8N",
  "key31": "22isY4aYmodajx9HZDPJQSJMQChqHov7JJ1vis5NBRJZcQuL83G8b1NkXJ5kfvnv2fb9srSayF3oQo5FdcVyAJLy",
  "key32": "NXujtxyowPS9UzUHZNKJPxX3BuYa9uWnBDrK6wNyBcesT8qqTMUYvK6vH26Yca5rH2LSo2mdVYpzPaqSGA26hrU",
  "key33": "4Xz5z5XaVfT3B4WMAX65hiEBZNMtsozw4w9665ycGD3iBjM6N3rK69jNxqjPh3x9msQRksqhfRZrksDcTN51Q4gj",
  "key34": "3dYMg6aLjQVUuLi7XAx9unQRxgT7kczV7vGrFbo2t17tCtmBA3kMceGALaC3ffSk9Qq44ZyWCZ5Akao6meim6TjX",
  "key35": "5WNnFS58eqVp3SC6hV2b5CEqb4vAyJ7ULRC77zLiUtigBioSTm5cmucj5hnFr2Y5DViByeZ7oXNsyZvdQUQxYmZF",
  "key36": "5ZndmgALVcA2iML7uMjwvLFYz3PVRA3AsvMF5RpGweDnxQDJ8qRA2kxhA4iDq9yKjdHXTw5cCiw4ZijHrmrAdkgR",
  "key37": "7RdexZBWixb9MYJDYcx7NbePLP7wPiXqGiUrXfQwqLZZp8MSrsuPpKxR6zVd3iWvJoxFMrSg8C493afFeb6bR3p",
  "key38": "4uYeme1Hbga7mAzgMGfgeJc3WNYdQLU9r3fu3WVyXvZLtwRCFnFwsGMfTcbwFwD3zscRQy8st6rocMAU8GByxJDC",
  "key39": "3SjWyrtsjCEt94aNzHAwUrzmwsJbwxy4sJyv8yPdu17HLnvt8PkbPwkywVXLm9BqmPgcoddETdzVUSyWNd76z2p8"
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
