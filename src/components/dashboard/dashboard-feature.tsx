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
    "4VApxwCjvwJBk39XLwAq6bTQVUPMgNHyn9ue5FCULGRPhdV66aY6SMtzx5LRVaqvxXyXgSQJd7BKrwwP2kcof9e2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zSxTSQRDPd75NKxzaQFTowaiYGhuKcqAXSkEucAYdRDjV4XW588qehATbZuYd3RjUecUa9d3ZJDyzMgrxkRoGSd",
  "key1": "S5TZCERvSC4aEHyqYJptNUrbTbUL5g51mQDhrRpDWsoCgSd8Ba7MqEWYkjCq4j94D9m5uJ1K3AasBZ6xgXbGW1a",
  "key2": "2mvkExV6xVwbgjHcLVuKNonUQNFehScvCTuZwZRsgBQLtSGBmjeN8WKYPFhbKTLWcjEUsPa6PQzobadXbvTx4Zvo",
  "key3": "4AiHiCUUU9jpXtuGTpnmQ7qCaEqZubZgntQFGV2XBbwHKJfZ7thuvYrbCoXLqzfEfZfAnuuJGFAzQhGkB6YsthdB",
  "key4": "2vcb6m2LVPSvgPYUfVZjgdCdPuEE2PjTQxsrVLFrsjg2pFwQmCBJMwAhDQk6KZ3ddM3N1w6vaFNgoLYE4TfKXUQD",
  "key5": "3vvJh7VZS2A4Chf95MyWBDm7tqSKg241ndPSSx4yfSmc6MnqrtGKy4TKxJeZRxcXGiy62t4qqxteqrQwRL6jpZxZ",
  "key6": "4zFojq4KB34nLztjSm54ML6WhZowjvF9MiXHEr4bGtCYNhraVCda3hcBVrESPW8d6zs7teadpvz9nPQD5wwtPrUX",
  "key7": "3nhTjfX5jNF12bcayQsBWb8L3m3CsFSpAmi2jJHzwEnXmHUzpdSDF7VzJJq4nhHpuAjC98d2Du8UH4sc9uq7VmVd",
  "key8": "4vuvAQPg7J6fKKwVkEaKg9sarKHh5BsQK9p2yfr4s85wYsy7nmoy1Fp7qzUr2yHhfGMWQ4jSt38xpRz8p5RR395e",
  "key9": "P7EQdyj4bAgAXLjAoVfwrdjrBVVotSkHZbKd7LiyjSgmoTprHSAZjpQuiEYLSfngUuTC7sKPdG9kfi2MnmdyWi8",
  "key10": "zeSKUV7jNTxuZdia9f3xZa2RWT9yb6qdi3FzUcakfm6stYGMcrdeC1Y4k1DUGrJy5UCg6cei8M5edmFMS5V1W1j",
  "key11": "3mxZvMHZQrm4KEShhxnLGXLqxYoBVVnNCZQLdms5qKCEvAXAtxFVXeWjH1XYhu1MYs5Non7Nd7vngGtJeEPWocnU",
  "key12": "5drAm1NwALLZRx7vMjoUtTPEFL2Lvq4J6WEXiPip1KcRGc7YVQ4cz5HvKHfYwFPNboYo5fy44gcJTAH943FcnaAn",
  "key13": "3HZU85haMRnaaNihcMwkkKwyQhnSZRyS1hCvVUUSxQqkXkrhwj2XiT9cEfbE1J3FomAaBXBfbTtY6uttWYEbF6yR",
  "key14": "59vJ9uwCY8gJcXNNjywK1sf2x7GDJ2hXJ2ac87q5x9i7q93F12543rgLqocvMfLrhMwAxGh6thiVyDmjdQLuDxwn",
  "key15": "i5JzmcvNWXBDoZbyDgg6DCCF8RumKrz7yBFKvuwBkrPwfozC2WL16dcBtwpDWztvhxcLAayFXxfag4fkdhr45ch",
  "key16": "2D1KXWov68NAdaMvbvehX1pusmbdWFqD42nHSH17FfETyZ6ksEBpoDrKHZkx22XawdgFGQYd7XYST5FCw4PPsCMG",
  "key17": "3DXBWwQU1voqGKgQ917mfQGF6ncFRM9taWiRN24se1WxJQBCWRvuJBCQuEFbG8ZSyV4ccA4XAizHseZrc2iqN6jF",
  "key18": "Sav2k4f8fjHxihtAs3WgwafXnUGTigJennedbXUaUTKXov1VkCE7JXb2s7YWfAiUL2iVpB9P7eQMdeqw2Qv1R1P",
  "key19": "2murouQtTRNEsYKNogYaMK7F8Do41LZu9xJNBf6RVTQYGPSvarKdBWdMY4Rxxpr4HM3v8SRHYtQ57bhv8J5ZXRge",
  "key20": "4omvkKkZN25cyVGPvSdfj3VRDHJJmPmVTSK79aF3BdRZ42bAdcziFzbuRhsyrHQLaGaPVpdBeqozSjzLB3KJZv9z",
  "key21": "32BW3yQCYLJp8K4wwMFMbCrLJQ9A1yyH6HZ4aMT981oL3YFzL75ZJANVH2hxRNo9uVQ63xFauGEv3GCtV5v7QY3d",
  "key22": "YzpVgAkQ8iTBMRvd7DgMrDNKnPyLBMZwADMrTocv3DM3a46w4zSk7qVuzPxsuj1UWo9F9jjM9Y1SaoFNEXu2pU3",
  "key23": "m9ZPZTm8sy2viscmnyjzv3SrRQZ85Zt9C2Cv8Wn1go4wS2NEoP86Tp7SUdGsE7JM5Rnxa9mo7QCSrBwrupt32hX",
  "key24": "5hXaxRAjg83ZwWZTYayD6dBSpUqVzgrq9qEvbUcKrtmtbr3egS4z4qN5J3N2zUQECkgCaiCa1E41Lo25BXSYomd6",
  "key25": "tvn9jKxkzMje73rrFWaSNsBbDXK1p8i5FRQz6MwciitpkVEMutL1sj999pERCWr6nxpL6xx1eddDAnr7QUcK8a4",
  "key26": "5btNChGaPiCiQy2WsaeRvEwznWBhxa3JcqCHYJgK6SYtVo7MCtfBVqZkDQRSfUob61zsPm9g5ZPWNiCVJT6ypqqn",
  "key27": "464e1MjhB9Jaxs6nTRZRsnuGzUVLWRgwch3UhZFH58hGvZMmai92xtZ6WiXcvMr1zWtqfqGMuZTwey63bEzCm9Ut",
  "key28": "3UC8297XXrUos4N5nqMKjuamHiwm8ZUzXCUMGH1YGTfzewutTinQP5iXn1ikqPE8ywTB9yTsnVQFrLZ1dqhH3LR4",
  "key29": "4p985K5U6jnnAcBxhPtRr8P7H26VkPiWjD1iXtyDy1ApuYrwBW8V4Zm46sbaUa4ZAuakuUU8HdgHLb6tAogpGNz4",
  "key30": "4oDDXwgrrZVheXJzBLN9KoXxRfSLmePVhLA4j5k1zt6yggzQEcc2HMhmfzBczo8y3hbvuiHjBCXL3pFGbtFgD9eT",
  "key31": "653d7YzyKrErS1SPLXMpLH1WDTXtptWLg2xAqUU6d7C9s8xWKvKvAPWK3jtiW1hZSba6TjasVVPRMj951ezDSGsc",
  "key32": "3nRJi61s6PfxgLdyz7u25WHfD8RaUKmxdBg7JwFx97Fx44M9qXH9BPHmsEnhnBbXMzjvTCFgKvhBDwucGNdYc1M3",
  "key33": "2nhx3yQY2f894s9VCPXTzCTGYxyvnovhigtZ8Wi2RAgJfP8JfLmcBENEUtkZtby3XFm9x7asR4vs9tvEHf6bVKU9",
  "key34": "3M5s79ro8KwrC3tgtorxtrrbJKKHtXfxoGyA9AWv2k7or8G2ToUNxXc6xEzyfYyoGBofaoJiDPhWJFkwrgf97n8N",
  "key35": "hYJsK4Tu8WsMq6gKRK6qqrugXWut9BdR2sX3eyE8JGEKW1LApGAjc11NGp3dvw6Xymuz8JEqXe2vvEPG6Fc8yFc",
  "key36": "itjf1fyLf5M6RqNS1rFnNVq9vLLa7TfkgprHqrDDsM6Wpc26ej2YmJDqEdDP37VEYm59chg2J4WcXb4X52vYnDy",
  "key37": "3pexTjSA8YCZxQQQfEq9c7DsMm8Kg4CByio8HZZvtHnG33FTBbf9h8LExU6SM1FMmnNGTcfm226DYjBKJv8CUVZj",
  "key38": "BrhexzSw7NaTpuFAKCxajhCX3FETBXi1354aN1ZJNjGoNyYfFpDeo29J4xVp7DsUmcsmZxVgV38jKsdGpg1YqMQ"
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
