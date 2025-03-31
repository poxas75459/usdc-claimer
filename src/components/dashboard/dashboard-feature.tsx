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
    "hA6t9ATk6NXevLcWCeKUsKKsiwaxn3HzsPVvr8gsv3tZnjfjEEbbfCDXg5Ef4xtoRRt9mmCHoytDFUVHWGCeYam"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3X2UyAGHkXs6tM8Pp4MNy8ZWTcQPgdR8xvjtJZx46erfe3ootVcp2qC9EtyM39vxFEcgYbjsKmaKVKnuSXncBNZa",
  "key1": "5eYM14geo96AKuVGP9tdw6RorZ6qriEf4pcigePNQdierATmF92cMn5LUvM3La7gYjd6XzwANCVRcq3926dcbkSe",
  "key2": "2prPUad2ARc69mjr9WKvrNjtVAXqXHKp1cQxjMaG2FZf4cGptihGER51hCHrND6GsMzicozpnoqUHFFftbDvwiaM",
  "key3": "4XxjA8xQ89JrKbfzQ3ZFu5xCs5Qoqw5KzeyK8mmPd3M2YNLM23WBg7ZJEf9gHUrqAC66UKNmKGijf7EQMYuLx4F6",
  "key4": "41p1egfssoqbFP37LgbHrUYnzcBXz4byD5Dpis3Hi6s7U7TRUYQMMYMLBDWr4snM2QMAqv62Wo24fHrEzfyLruze",
  "key5": "5R8nEriQaitNJxCAMuL7AchYYspHyAY8mgBWVuWxjXcYbPX7MUfJWTxwrqyHUYRrWuYezfgD4jMGEApEWFzJbXes",
  "key6": "2HYyfBF2fNVEeNvZaFWfM92QaCLoGktkRcPrdRKfHxZFHjYKrSy6qQtn5HHVza6R1tHexkdWHdQBYCEsTLoRNchU",
  "key7": "29Zr8U9EcuUdLpzcWyYwgzmv2tH6NCa4A3Q2CABQVcF4Qw8oxHEmV5D6AyQJg5x2zLtwYP6AaXimawN2meXfDvP3",
  "key8": "27mGpJLDs85K1XtRkNoWznLCCT3MD4uuT68kTCJZw9NENx2FrZibvME4WRwWuXLB9LFTR4bbTAGuGAxTXfVkzAMh",
  "key9": "326KWqz9PofkHyKoyvd34eJMekobvmRKw1XLXb9y7Ptrq2gZ9yMoTPDBMvGRRVij8UfvD2PdzPwPqogZuRxZMFcd",
  "key10": "3zifcrG4Z2d8nyJSqxdJyEDUxGXoaGSv93TPPoGf1DZg87qGCkhYsoLiN2LQQd8aF8odrPDzfYUJeyDWajkxGEqN",
  "key11": "25RN2MCKBToybaQ3CKATbVziQS5MHcbDsjs6GcjnoA9J5r9aiDruxVxj6hZnvBtSJg2My4P6cJUq26QVkXcFYwPK",
  "key12": "2P958iXzYAbLWf83TGjq4TYukVRsz56ny2Qw9S2mGsEJvAV8im3KgsGPZiZQUyVdS8nccxzzLRJjzQ2McHxqsCq",
  "key13": "4Q3AGi8xZyBw73MPGJ24qTcow1X1PGfunvHJJ5723ppE4vQAphPJtSU927ySWaCx6yx91PM6FPXC44suwQdStm5g",
  "key14": "2yqzWgYK5P8Sn1U5gxnMeZJuyzUqzRrYzDhSQEn22iKCDWzKGQDo45keivHinSmmwMy8WwcdQs1198RUGVLxBbpW",
  "key15": "5cNVpoPfeEDKU1ouf8oktXz9vTLkawHmRcdiN4ajnMCTD9kMRxStzNVsE5KS3NcBN3MP4fHqSRZ3TEfQ5Z7bfiG5",
  "key16": "2QdDPKyqA53SDbRHMxSoJ2tFtnxTaNjNKn1sYfDgbxS7wYNpT5Co7zkYTzjVzBWd3pkWTgqfTzboAewUsGAwy5ro",
  "key17": "31r4a2CvvDDzTDzsR7p64dqmXUnyqN6Zq7oHq4kgm8cEqLDjttxFaW7YwLd3UXA3s5nRTh4LFXJrac5Ty4o3aoGW",
  "key18": "5GAdjjoMvSBKF1nK3EGwijhPWtH18RCxct9s6Dp4zn2M915UZnttY3xfc8ijPhAf2XVpGUR9gZMrPwuXo9dt38jC",
  "key19": "3HWGZBnXxubGeLRyqcxNZZaJzPP1ZpRrJQykN9odPr85uKLcZ2i4WsPjmPXonxFaUcMaqMyRHKqLXzEbiZ3t51Ez",
  "key20": "3PsK7QdFwHrEzasSgo4YXKXUFbfLop8Q3XSXMJf4L7FmXpDU6tLqwGu2nkyS7xHjTKJJYgVnMVTeAaaszz8192b1",
  "key21": "5NzSDP3jHdWsdXiKiVkFv5Uc8ZqcKZSPLrgoAjNBi7keDWUrYYxoegKuTrRr4N6RdSUy5QNy3gHhQwYoXrBs4VA8",
  "key22": "4AHesYVHyKbboPFbTXcri8faUJJRMwjAB8YEK1QVgiYdeU1zSwdfoZFXFF8EQfgRZKHGC9ZjwTF65zAywgkqUqp6",
  "key23": "5SprYhk3jyTF7d9x7ytnauJs7iSKrztkxcZSwQH9LJNzoRzfCSKp3HJAb39M8amYWzXdbcqvjfjhXm7Le5V2dZr2",
  "key24": "5k6k7Yiz5nsvXPhm9rM61kZuxREFmTVLrBLpg3XkH1LUvTc1HG2bW26EgGLCXesJdmYU9FJsyWTorto5y2FusjpA",
  "key25": "mWPfASaGMFTaVzTkvwy94nkcRwirr4mdfCJX4Lk8R5Fkde9DjXSe9LzpuFdjbBHKPkXDdemPovdGw8N7JZmRd4J",
  "key26": "4EM5ksTyoWrVjckN5yvDqeXaxvEBzuqe7rvDM9pqynMTkuCR8e4YtTY7M66qnJNen3DqKWaWzDB54EuxMW6HffA2",
  "key27": "5auzb72cH1Hfty19McqZys11uKQv8CRbYjt6X9iHVJNrCTQ6BN6HuAuRujezqusZ3b6brJBqMNzJXfSgEKRVF77T",
  "key28": "qwA6gqrM1eHsvZqiYZXeYKETuga16oZjcSS3cYbkmBAPKg74X995rAV4aerX2quWVocppkw8h3Vy76cCZ6P8BRE",
  "key29": "4WXwRQoN83VEaFWFN5PBVUbMv5VpJrVwLgiKcPhuJVd1ucbZzM1WW2SAeGEmVccPKbkGHvHvHfWcPkTRvQ6fxiuR",
  "key30": "656m1hSFrMDPCLuUPusffH1UddYuLsCrvLtEkNgjsHSUeEVmsmCcpLNT7ZxTipdQWK13838BERAX3cJvYKo4YZya",
  "key31": "4RoJSvxBYrLdwFdLimHmx86UGYDshYw7peYxGuaU2aooVALprhXH2CnJnDrMLyHbioy5BQ3wNMEH9iK8CRNSHa6m",
  "key32": "3ogmhCx3ndnhfMapDViUjiyCoiRgoVT2sbwYXohyMw68dyN8d3tSHLt1uXY5LheZhnSbyA1WfR64YVxWkwRnjXL5"
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
