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
    "2b6Ux1XoQJzVWmXsnY4KPng9eWRFa641XgCPKP6yqmYtCwTFgE9vNLS5o3BfkrFMWLyW3eSqZ4pJN88Bg4f9krsR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hFEqC4a5Jmv7HxicGyE7sY6REzok6PgKuvMChYsmexBKkyyaa1qaFAxthog7wXacWtdjSn3smzEpxX11C1pi4mL",
  "key1": "E2jkve2S5qNiuDXgzV4xhyJtrb3DnassLorAgXF57X6CEWhuwkP1P53axBgKkUbkURjkrFYCyd9SSFSeQbTYgTM",
  "key2": "UJyYDgshfi1WqnDTbx62uVUJrz591vrnt4rExpxnxf5HhVVFYREZdGEvAVdZeBB8afLBhJM3tA4hNKozoAkXBwk",
  "key3": "4GGHHzNFGLSUzReybpLXpfRNgnZg71TVERMTWRPjukV3A9ztBGn2jsz4NKgChTKBoQ1RoyCfuKA3voiBRUWseYmH",
  "key4": "35pJZZFgCxxfetMatcTcJGcw4fkpMSb7zEuaEChQMBXxSYcvcuUEVMQmNokBiqDmf5DiGLyPSvyd7wv3UAknFrLX",
  "key5": "cEm3VUhuaSRFrgrw8X8kSxALQrQiSQfG5fGUou2Vna8bSuGNhJBvVckWWXwomabKs4d1hB7qNhEA7umpcNAfFwG",
  "key6": "4NRdutpDfVHSPCzPtyzzSQ5vK51Hbx2DwrvtJ21ibCNArVsMMo2jFPerskMBRJbyqST9hVzNecaBKWHAqLSsTC32",
  "key7": "3pHZwQBXkZAyhm8CemBsNo5tz6eeEujiTvwdcMmnWQQQCvhWgaJXUovD1XW3VUbDgfdNduJZ9hN3HiNADoHfsvmJ",
  "key8": "26DAvMhV2sb2ta9JGyPfY2DBNUpswtGTDbXv1u8KbrFRMdqDBN2GzRuzMZUed5HW5pYwRNmfdCau6TyhNPJK4ZfB",
  "key9": "o7yEJH924teCPaWMtdPpSM9baaEk1x4NBqD4pHzw5yF5QiFaKN8U5LUspjC6TD5JXipsVgqYJLdCtrm4ThZrpTm",
  "key10": "3fkDrSE7zTfZyAmh81tcSCg61BhWiZc4CixBWQYRNaVV5GKg2vbFPuAWXeSvBvkU83YWJ4pvczdEgvyDEWXmRZWP",
  "key11": "4aqDVKK65NxRHxB5N3GqChqP5NgzEPzX95rnGGgWPTqEW3YroRkzZK5BjNaQ4mtC1jDZyHA2Cfy7YT84vdZEGmpg",
  "key12": "4mqvgVYQieaAv4VP2Fz4DTX5og2Cg7YojX5JPeMfbtxHt6QJYdmqV9ga5TpTQ7QWgCKsdVgs48ni1AMAjLhXiFUB",
  "key13": "4AfSwZYTjMN2bj8gLbH4HpudQ869QGGYMKMJzyuAnAuBKBz6wiREBqHG1B1CdeaTxM9ZDWdt4YxHNRhzkWYUWE9K",
  "key14": "5LsChTxP754dkC687pC71T1LhqBhYnV43AbRndvGAD4GBvrxws8btYBrwv2pMxzfyUT5hzhfiCxZH7UHiop4sWdu",
  "key15": "63ryjV4e18EaXAU63CG3249Pag7eBVf5o23Doy6zwLmDkTpvw8cRHb2hnrKGvSUZUjFYsey9KcdzPWN3uzWoo1pv",
  "key16": "2KqthFaU8h9eRCnCTLRra2G93Ncb6UMpXgbTRpP89SzMYr3vRwukkGKaktAyh84PixPZEuRb1mSQvwgbgGbPdNma",
  "key17": "3QPWfdGocLmpcqdz9iRhng22U7MxPuy8VGjz7kVz2XS5cxdhvsGuHymdtgHB4RCK31UBTPzR8uQsSgg5qhr1d86Z",
  "key18": "4o92A4QR3icmvbcKZdUpcbqYAAdWPWxB7QBgJahEr9LG2QG6M7UTyoxrp3R4Rc9hnG8rEkXhERXdmxYD1t7GyiSh",
  "key19": "5HTwgbqDdN3AEzUE4TjTwbepzStT3i6hwaV1cmSueDMqM9W3hmfny9jWmKs6N1zoqL84tNLqvaSUMbaTDqo932xF",
  "key20": "tqpsuP9iJoBBYDJ7maGCLSbtSPB4XVNB6aKqKKmuBXvSxLJvQfSWVKx4uwz5jPLxwYkggGLZgVN7Dg1xL1DnjRC",
  "key21": "3f7GyFPsE22DSxgWfKPeFu9qGewGaFTNf3qYVkL4vHxTnXeV1tP3yE7i5SJesrgmDRyS3TL1pgb6XtUWWga3hrog",
  "key22": "4w7UfXtswjwrAkYvYf52SUMnXfSrAB7bDSRp1vy7q1k743XDxjk7WFmizYTuvZRuKBYYMa9ZzhmndxkzabpzJaZH",
  "key23": "495aUxWxADaGfsG1BNMWapExZn3g2LoFVyANKyLQFdujz45fj7hLkkbcR738VE89c7Bt2ANgNjVV2bhevunEXeBf",
  "key24": "5YzF2AyhWxHHW5VxFq2p86YQPrugBVaC5B7iUfxhq7YgHeJY5DLXQCoprooSWQxTAQaMzAPNkXXvGro58proeqNo",
  "key25": "5pyDT7r7gs3QDC5qm27tH8XvXQo2qcuiepuZhoZvLUQq6pchSRF4UFSQ3VECrkXprjkccUi9ygcCuswC6qFzboxA",
  "key26": "2K7TzT9NfgXFt5fLqQAskBkjJeDrAcJDrpUCx6CkMn5Mx1BP5uqySkKiKH9XEAj486rMqHNgKcidBTRdnsKxGHbv",
  "key27": "31eZGr8mXJ6psgFSbf9svCPJJLiq8uGPz2pBL2MN3nmoLm2Pbtr5f2RhzbfaARrvgGGQid7AshaCfr2PUbQyR6TZ",
  "key28": "3zPXkMRtpvxJE3x5WygXSmMJhm8b2B52g8EDTKkLpHBmBJRaCGnTrvrU2W5LSmANPsHi4op74nBUDb2eLSWotbzx",
  "key29": "4QQVcbY9Zqb42Qx6BSuyLTJMoHo2wxQv1sJjjcUiw5NLjB8B22ZY8FZ8gcKanKeLEMThdgc94TX87uAUUAWVFTWy",
  "key30": "5mEbHga1KFjJfpj52JMzzxpVaEnV6AtmxXo6eaZPbrH67Uua2Y9aB5gTumWaKbo8GtEynXK9UfVTZsnD9LbfyaM7",
  "key31": "3mRM17fYmFh328MFsVcQNkUmT3WbAW6fNjcZH4TZVNTjYm479osyGHrdHJLfQx9sm624m83NjLK6ED6PhjJQ3rKm",
  "key32": "5HvcYMYVcoaFhZmP753sfCMgV8KRX5c9B7LHCkmNK4qJKmU7wmjagqqpsQU5B1QeBGzm5ZRWgRS2gqobA4dWTetZ",
  "key33": "5VgqoVhpNeb2hYwdqazEiMGdM38LU5oYAcRzB1WMNiHmFas52tgwQH5yLHKXG4RuXYSBmgugoGgLpuuon1uXZAHR",
  "key34": "4CNcygPdboefAmeXqWY5rL6mkf16Samt9tGk4W24iFT9U8pRGV5QURJLGiAeMwgr3uUaABZhTkQNYPub8FwTYQr6",
  "key35": "41NvYeaQ65joyV7ysL9FPpaa9hYJ7DZsPq7en8kVddZQdUVZL7SWtZuZqfRkF47sK928zyH4rMPycDUQra3mEuCA",
  "key36": "KUVFWBs7QLTQwpwWdRFkjf3hExAgyRDH3Jjd8bF8UyNvkwsLx1e2gAPZDZhAJKEnjNddgZ9r5Asb29LeUemrjq5",
  "key37": "4z6D8GoP5ww8rFwdJ7WUNHAN9UyHaPURMg9Ky6vzgyWErSXE5C1sHFHRrUMWrJwV7C4cQGQHc7zPUp41PbWVxwY5",
  "key38": "D4qdmj3c1hqjxrWTvhKo8rKrMuSTzSU5LbRSLFL4wtsZXJQNGAGemiwwzYwv1F461zv2N4t5wvbz2Xnnp1dniKU",
  "key39": "4JYimBm7dbUNtSgnXmA8QV7XHXKNcarn3ngEKzRjnfthB3HX3kr5K9XgkDayvo7sfXmZ8Y4g5EhfU58i31K94Pbz",
  "key40": "2LmA1zTMsTgbwcd59Ds949CQsLdKJEMkifaZvZunPfS6Z7kCfpnFSLpaT1J9afwj765eeFQjAddwHfLUZP5HpyHW",
  "key41": "2mX1nDVV6YM3ynKbZENdvYS9uFTPqrSH9vzRRQvbNj6Ve2JKFrwzft2KawisiGegpuQmT53LQ5ju9JTyKUH4uWC5",
  "key42": "4NNHDmNTY86KHQXgjL5EZVzNS3t9WwfaESpqp4uKESZzaL7ULia6f6gaWd223Ciw2vzMAQxAzRzdz6K2E7zTDBsc",
  "key43": "3NwBan2MmcyyjkNvTMnt12NKWX33o8CS5yUVZLwPc7uPfsVxB6tYo5M9uBaA7Y9QXzG8QSmtUVsLFMn6zmAxBovT"
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
