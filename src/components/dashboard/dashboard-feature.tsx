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
    "ccMNiJ1MjcEL9GoSjUsu7FwZjGvf3hksTKsJd2bYiZEcv8iDJYk4KpJ7uTNm7CZbi5N9MQKAUd9sxYfeMTX1mnW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45JeJtKNwHksbnYVfpGn7bYtB5rjEUJU5UTgdBxcwTKEk5rKr6ERpVAacQtQ6r2z9t5CJ5KP1T4B9AQ51BKkWQhv",
  "key1": "4QuFUu7BZvjcxbALJ14QnKpYWuCrU5UUhbQxDMJt63JiBm33WNPow8LMZy8puZMvgB8P77WGHwJLVbA5AQZLW128",
  "key2": "4rXN8NNHLvJ67KBoxBgDuhZSHqe212MAEA1Af97ogA7ZvFSpLngEEi4PTx44DZCvjBrmXXjAGgPosP3vx7yGYfZQ",
  "key3": "5mB7bQLFRwXo9tcrczCmsLBTgnu7RRqw9wQ1z8d6XzQYq33y6NZjR7WNK11Vho43FeMLtVGYhYmqpEMQJu6T9Vqu",
  "key4": "37nhkkn9DdAZ6aJ63Um2rswGwZKX81Ed6BPfi2pi9Fpn14rzpZPgJrxKxYz9UyQFJUTq2GBGE9EbKaFCwS8GkCtm",
  "key5": "2XSZJ4oXgw4Z7mPQNtpPULJTAyFZxQcS4pY1tuFFY8eZ7h3r38DsLZZw6BLpUSVGW7ZagC5E9oMuAjPSrHcrwB2J",
  "key6": "3d39xMGaiJX42oZxiVKs1UphAFjvayaVZWUBDz3V7SZfLbApB4W6gccoPy3BeBgA6p8rAYbpvKdMsBeXXeX6tjsy",
  "key7": "62HS2VVwNFYRsoSua289gj8bM1LvYtPphE8yQ6ftH1D2R8y1PYwvvyDt7ZeskhKLg1ka6VZ4sTGQt2tVg9V5UqVk",
  "key8": "4A2QjaWAyG1oRH4EqTQPfxgh1meEJqnPL2XZvY96McFNfLQ6x95g2uGK1WKSQK6oy5QBxgUdaWyAikvbs1gQR9hs",
  "key9": "4Bjui3bNpuCucojGiM89e6c2e3Yi9nLVs77nxjndGCm1VvjetXM4rR6AwFRrqgAuTA2AZACezuACew7SFphz3Kyt",
  "key10": "2NdLwoor3rcECeEEbZxgDZpdrL3wK5YmcJzTozqYQSchidfvtb8WjRvyHwCRQHE5RhG4N6MUoRuLqbrk8PRYMxHP",
  "key11": "5Td4r8VxLsVdsmcmMbH4qJFjtYLuJwxFdz9CxdfLe5qPEmg2asprwPiYEQuzMKboJQ1FxCKd7hPNBKpZqmJLd6LT",
  "key12": "3kQy7gn46TURVNsWB3fes4y3MhpDPeEtJ7f7fvVeg2TuwN6L2D5NEZpCCNbm5jYCc48ZRLQMbnsAqqhYVapiLNdC",
  "key13": "2PRSKsJE9QEaZBoH87vJ7TikJK3GD7Y6yEKEMXBsGc2pXMJaSSAejwE1PjTzoNEH2vDtvDX9yBm9PpDKBTEQvLBC",
  "key14": "4Hd1s11EvoxLJoRFzRcJNWfyMc5ekVCuwMEAfkWk4khG2ByLhh7vQGkuSaL7CeixucucHfMGaGRgkKuZv33J3mBq",
  "key15": "3q9BgAHndhw3p2oPNXuedkPCUDqqQ5AVvE3vTQChCwoYhVCSa8foNtD3yTcJqDwGA3zf2Qixoz2Kj5sGoAPU22iz",
  "key16": "4nVTe3rGB6F7vQ5syPVdVgiTzCVK5Mq4dgCXdU95rTqawtN5rqzTf3cU4TYii44crdwmjpG4dAMaoSZNThE3HxV6",
  "key17": "5ExPz9DsoxZi8etDYRYiFt1sKyjTn1er3rT47cenxM6pwaATrZJf8FWS6Dq51ZyUQhF2dp5yhvH5iVeBB7jmk6Vo",
  "key18": "2mvYzENEy84NN433KRM2PrRdK2QS3CJUVXdVR9p8RqfHutkuxtyK7yaHqE6uUbtcUXcx62G4QhqVxaLP2x7E7eEG",
  "key19": "53CpqiP9sHCrQ5tGEbrGQzbBDAR4dRVKaSUbctkzdmVenDxzJCWe2SWUGN6PgtqytbVUiAxkRLW3fTCiUkiKzitY",
  "key20": "2qkE6fqDjK9UBP5egHeGXjxyoiCgFGRodZrXqwstLwn4HnNapcEpxxfEVvEa6ZW9hddfTGr9EX3xvosoaH7zeHBf",
  "key21": "57z3TcLYtD9qGf26SSYDJuLjNTqaJwYBbCe7sc6wnv1Qr1m8zBXsAc1furFgVHZxDxZFF7hH6i31GeKqJmKfExp9",
  "key22": "2BdJiLkZTGaUdbyxUgWQFDCGZchcYEtaj6WWoLmLH2fBwfuvFdpd4UwKqTLxUTibkos7PcSHFtZTcGwpJkerjwt2",
  "key23": "3k3xo5215KriPc8rvrhKeGGcWDUtTXekAK2r9XLSuhgpWQV4vmj3ENqKSPEvWshddAUqSxeV2mUMWk5azZQ511Hf",
  "key24": "JbDXS8c1fo9Ly5xRYXDvzv4xtwf82XwHyLqM89rKx5yyjoyUt2YvLjWKbk3EaPHUwsRsBNYiQbGQ3FALozmN1mE",
  "key25": "5y6XU36cL9ieDDRyZ3HY7gMCGa7WmmSrHrpVS92sNuqXeTTftuwLGHWYhWkkaDjEjXi4oa1viSQj15Vv8XCephBF",
  "key26": "3C6KgtNhT7ttmX6BJyModwQxmsHWdXPHZfU891R5FcH9cTgh1LiSHuGsQxmwpH83msYwTWejJNH5hjTnXtVLdpox",
  "key27": "5fUGPuXhbCRQxPoK6u42Nd8Gpx4jWzM9i7A9udrJryGia4tcT3bQFrY6x92CyjSwX5ncPQRdwwyz9TrNDRchjnQr",
  "key28": "5jK6ZEAhVKSBXrFvfLpANmaP6FgLo36biRb3EMXTCk11EhqMxZciYwnqN7ZQsCrNvAxkTSFUyfRNbjvCNfFh9Hjg",
  "key29": "2zawwy5sauWtJ5YoUqF8SKbx5KohHYUt1z9ghuKnqScfrkTdmcedqLs164Njq94EgYA9H5G6RrNVN5LnrNhjDY1j",
  "key30": "4C2orSu95BswvTjAn2e2mg7LQ2jnj6r2diwHVZt5RECzhXiFqTFhnjS2VkHR4ftPSR7PwGNSXLU1G7Gk3t3tRTep",
  "key31": "2hQ7eJkaGeaYEM1MwczSyQWWZzjis5f6BndUxdu2EmC6kBH41UvYqiRtbwB4gUgjgaxVD919c6RuuDJVHYd2ig8L",
  "key32": "3UBURSbdJzj6RFGawhusavfi78ViZHb1XSvBKr1jZ2JCR29NWB6WyRvMRjPoc1cGL8PxWPxBTJRmgNvHHT3pmR3N",
  "key33": "48mnQsZqccrJWnLYEcPUc2srGXLzoP3tuT366XJzWeVT4oAdM7hriGcAK1ch3zbn5SLh2FWCQPoZPTTfnvxaLPaz",
  "key34": "4w6ZeQBeFW33ozZ7CyF3GMEWhX8wm3rimuAHU1oVff5ypABv8g3TyjA5b7nimF2PVZ1pATasVruohygqFCwWNyPE",
  "key35": "4snB2qYkB8CuXpj44pbnmoQ7ax8pHEGvJoSo5ubiAPgduKD4B6EAgNWiBwZxH599uiZKuwqr1Kjy7n28JJEHM3Gj",
  "key36": "52ykGBH4SenFN8pSiKjZQhWp1XaK8sxqtCJLjScwf4gRJzfMjQxgH6w5KnUfRQC1gPBbF2V3tz4pSxZxvZheaqQ2",
  "key37": "Qx1Q2SXvSGdrb2cU7hZVBBWVsfkgAqDqDujbfmKg82JLs1e8nokWRcrBXGdgXs3FWN3HNEf6xxnnNrbuZaetSwC",
  "key38": "3EeQXJj3351au777midu2uAUjhcNRkAuj497sqLzYdmZtwbsC3GHq1fACTw3TBhuodyCefUbcK6bEghZ19n3RUfu",
  "key39": "3g6xW7VDst2P6G5Bsb4AawbuqVpGMAX1tXuf85JZR5LzUPLAcanL9aPyqifmJREDzauBm8B8StBaAmraHS6uB7D7",
  "key40": "ccjTK3TtmRyHe2C9XC1wQLHHn98X6K3qg2cc7WNms3TYrR7tupeGTAo7Gut1TxWAGZ1guuagZ4Wz5nnS7Lty6vk",
  "key41": "3M37CnahzN37gWsfK9bgevzf1mM6k2xqr1ULfF7MfV7ATbuD66AfVRqchdpRxcuw3GViRR9DWwGMW8NgC94kDJB9",
  "key42": "kvHkc78NwARNjVUNogtaekRRY7dJtX7iQ2X8BQb2wcAFnSYb7xF6zqbawB1VHzdAuQDhu7iRptuvHXhec2Huent",
  "key43": "5pWqcQqgByUkjQupJKguRohXD7aV5SwdZ9sY2ePxt52bstNwFvMCm52ENTySs5Kx4dd4ZGQBVUh2KYcBcdGi1Xbd",
  "key44": "368vTrNP5Pto9DcQGyhM76ge21BBEQWgYxJGSUA4FZwNx7EbaWbqDPGPCpPjS6134BZNLvgH85YqvifJNK1jmCHh",
  "key45": "212ARCxGBxbCHWNM1eXBhPf9Vv1maanzPe8L7vrkfbdBZqYxjAMaymh19qHVP74k4iZVKuWbetkVgaLuH28V5Zp1",
  "key46": "4HycnvvKAy5mMT6VyXyN8JyuMK5CYYmq3aggp1PBGbYiYksfECc6CyjTkUHMovR3WbE3BR15oByegukkhx7xR6hA",
  "key47": "23BkJ9izq4epzmCVr1QUtHx3uAX8FxxGGVraSsWzwzUb16enGcHKjXtF8f8cNyhcqyqb7uHtJ9fvba1j4K3fCtfW"
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
