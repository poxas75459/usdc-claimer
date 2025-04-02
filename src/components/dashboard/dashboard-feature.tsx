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
    "AWomaCmnCGqiCX18fwQeGe4JJ7S9cejsrzSv5iS2cDdkSCyjWHoZ78KeCVvRdj6KjyipcxfjkKhnnqSiZq8vP6c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NVbJYFNcdgQ4KZ4yqgv6bZy9hKmmhZTbuYjLV5tUNgE3TYnnMnQYQwaqxfiK159TXaJ7hzJdGMPZe9PbN5SMRNa",
  "key1": "4PggT6b7CwuPqJYJL5GcPpinYH8keQBmvaLaKZBYjvMp56MzTbSxZgGFXSPB4dTeLq7tBVMP24gYd9QiYkFVXv38",
  "key2": "J1PiCyScY2tQ8jFEHZLUEEsso4TyghzdZqdotchX5kagGmXft9HQTxi6WJLB8ZUq2w2bVMuzfEmHXL1FAgnau9s",
  "key3": "3wmiYf1RZMkhkiYtr8yo8uQ8GyZAmQfSCjasAZVLbRpcv9dtXPcpjsH8N1d2pRG94oim265RhRGvTM9dvQdHEHpb",
  "key4": "4A6SrrfCcb9dS4yYQ8MfdU6JdGtzVss9tMaf6LuzzBAGF91w2J2tHN48iiyVM6WAEiUSpw6DHgxw31PRJ5wppXV3",
  "key5": "4yCVNB1RL9rmeYjQrRT43GPEhaR8TDvqtMQ6r2bHCx1QyRmGGmaSchYKvJMm43VV3Xcm7v8iuy5b9VPiA24sZKtv",
  "key6": "2quaNSb44bZtmjs2BB32fumoB6Dkr3fcBnaDF5cD3uxqQQFpk5BmRtYdRoxS2SSZpW1i9ZaCxAKDpFFtwz5EBrh",
  "key7": "2EMUS8UhpEjWqSzqAjrBrnVAtrYPNj1jSxASQXoGjWD7RgbzGWcRx8hir4oa2DuER8zCDukHndjdcq6n1EQnirB5",
  "key8": "3WBe2fxpZKLpnVpYzwmVF228k6LNXcwQvtkm7JF9LWKHP6spysdbZgXTY9m8EY5KKgXeMGhVF85CYMwoE8H8ni8Z",
  "key9": "63GPFXwChUzUqz3j7w2HRXw2GyzrcSv21Rm2zv2kp1FkC1NpdhmoJLwf7uL7vQfgFaZigYg5YFKuxgE26zzXxFbe",
  "key10": "2Hxim9SuzD6K6X9KnxtFJmv8XkZYNu2aAQA2rW6LcfpR7x5pyqmsoa7649qs7WnxLVABeM88A4JqhCHzTdnNg8JJ",
  "key11": "skjHVnRiaMX2x6KDCbNVwSEjVX5vm3p6EGg5PC1z1LpqJCLKbYnkdHFhvRRwyuiwDNP3bDt4CCSfxx5EKyB5353",
  "key12": "4DBXiogwfZ4LUKf2dZgSnnPjEaissGyb6wLauEvutJ4P7ZqUb7NFmN5jHNX7ajQRTCTxB54U42Fug4CQwxvKP4WM",
  "key13": "2otyprKZL6SNYXYGZ5hRG3Fd9iGQeq8VDaQHRNtwdhHAxgWxg9p6DaiwFuCRXJ16hpc8UT3YByGzhUrhzAtJzjJ6",
  "key14": "qMSR9LpJ3SXtZHzBqTwm8YHRC5dipgamo6NzMr6cMeij9fchNEjyJMkCdvpngRYcHpYzExsUkc6zNCvpzuz95u2",
  "key15": "Vve4L1qSs4Rj6juPQCfMeT449iUfyHJU492hH6E2XsVUmpNPDA3YzSmByARNTUfntUY3UbCcVBBhgzYhdKYpyfz",
  "key16": "XSSKVuFQpKg67KM7P8KRRQ4xsKpZ3S6WuYkYABPx8gtahW7LjiAWGuzaS2cUJWquULFCYFsGNEDRhjW1QpydqPG",
  "key17": "22YFkPBokWs9pt2ijb6ZzUoZPSAXTCrQzbXY4tX427gtQVe7sBSTETQU1jc5x8vDBqHL81QtEnkpMAaT97Zckw2h",
  "key18": "226cho2LotXLzV7Sr6cK1sSAWfYM74FCFrbCPkjfEBuyuXXXaXNbNB2JeWbhn96Ntb2472n2iCLDrapKLEk6j73q",
  "key19": "Ptrnk89fKFktsX4MkAM9K9YD59d6dxeZmWnoshtN7vpFRVQSsZWDDuncGfKr7SwB7tJEPnzuQdooxJnU1k9PjG5",
  "key20": "63kTDfJ57rY9yzpGmcj73RsovuqvLQqR1Eg9FuuUELiM4E9aoeLEMfp5RydRFvXYUqVyBnS3ZT2YE397MpH6kro8",
  "key21": "4sn6r6hG6SGh7RsJ6vwTanAPZpsQrQX95RvU4KvEgvebmpiEVSCL2mcrPcJ24iAib2VZ9cehUnjXon1iMADi9g8v",
  "key22": "48XdqWSTLhF9wwWYsfQ8vJBbjPaBYL35nN356V8Zywc8PASivC2x6bzSK7MefsJdg1sfYvae6Kae3gCvDqjy5D4c",
  "key23": "4Rv9V1n6RgbQXGEQE8kXiHh7fQeCXjbz4wTspZohvGtj8UwWjbNsRxMrybA7Dr1exspYciT4DhvDAqWrSwDaagqc",
  "key24": "5Xr1irHXTtbEerDkjEEuHS6hzNN9TKYidfygS7sLNtedvBARNkLPTDjr9Z1sr1v5UdtzZGLSMBJD6erB8B4gN5WU",
  "key25": "4u2PXG7BSYqY2rYruCeU51SvGaYfuhwfBcPjL6FNm1KpizWuj8BHTvm7KUhg2dWA2YdaRQWuj4WhjUaneQdabxgR",
  "key26": "5VkKeLkH8FeG7vaU5n6rzxuncLSCqix941mGM62gCb7pEvtWMomeqd87A6MZ1PL5DeqyKEHo47Mh2zasZAHZ9Lt",
  "key27": "21SM9MYFtyRUnNc3JG5F1BswvHyfumiK1ozyJGD8USeMLKb1MeNLmveMqhAoVSx1kr3HX1rRx4HTqqtrryZQAwZy",
  "key28": "4cwvaHMMiMZV7DfjDPT1G7PyDkGD8V7ghHvdtwhf8mkVcnnWAWuQwCLVPRuSVuLiRbEbvFzNZt9v8odsfivxb9zj",
  "key29": "xdZAote1Cv7htdPgNEvtT1TMUa6dtYc7WaWLWNgKNtUPm7EmNwTWP4PZNxBk3oo4McofU2T63sQtUPE4Qq9Bdkg",
  "key30": "24p1Tzoe1LTAr7ihPwvaaA1BdFT4DKvYBynisba1qn6BdNuuMgCR8zbhjfAmEMUq76VeZQB6VC8VfovENpB94Tie",
  "key31": "geDopJtpyHYEN2r5QTrJ3EwdEgNjNd59q6BKRX3btPXWqJVCsQ9hsSAnCuJYK5oDk6bRDwJumzD7Y78TrLGiiyL",
  "key32": "U6NJ2jqCFGyUDgNc8LkWEtCfSNDLThbXzDCAiktmoahk48o28FY1HVfrUVmhdKWqFq8zn4L3xTgZ9JgSW3AoeBH",
  "key33": "32Eyib2u9un7qhJftribt4EntVXgWZ59pPaRPzXv7fFdUrAENN4gyVdLALkmW4rw9DEBPzE5cC2L4qQYv7Dws8QH",
  "key34": "4NKsgVUfrdBgetMB25R7s62TrkywDAUdJrLsn6rdJkTTpGTKdb6zMTpYZAXtXNFj6HtwUC8Qg7mYzFCV33GwCWu4",
  "key35": "oaHNzQwRVfXhFfZGptUKLkLU79jiPvrRShTE9fdNPQFtquLmn6AeV51zasj48igYPjXJ2CPbB5ZmBdrSjh4ZLLH",
  "key36": "3dmy8udW5wNLJwLWX4QZnmSbRUsQehpeGBuKEvHJHguev2G9HmcQBCD1GShRRDvc432doGP4JKXqwbiiE6uEUan6",
  "key37": "4ZN9Ds4VWhTmtpC7kWfZiFnJBPFHdZrLtej7XBgC2GEmFbVBjQYUZDUYGnRVpBRb6xBhc8JKs6d9U2Npu5ssiu8T",
  "key38": "3uRrL7W4AVFGQZHPRJkVPjV4eSFRGm4v2KzBb4EfSKNFgebXbMDDfd4u8AHcdh28cQ5MQweHU2UNojrBS3VW5RBs",
  "key39": "3UKNYGscvgzUsF8Xu19jxAcHWbpKMXuJ8wG2XkBL73NCBLa68wy3GdFDa2dKDqvKBGURZUbNXjjaZ2onNKc66wGe",
  "key40": "3mnyEeXMcwmB5tv3Y5hiDGGMBTUWtudLrKNRXrbA6W3g6qjNBTHu6RdkBufshW9enauwTtfnRNzwSrTwUwCyuUwe"
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
