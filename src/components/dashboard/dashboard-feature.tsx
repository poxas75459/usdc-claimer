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
    "2HHGoqGBKEQ7i2Jv7WcAnidRsiAba2punM2bTYP9tc9n366MNWnko6JVtkPkPq4zFSbew85E7AvJbQehdLZW2eu5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BCG1QyUGSYohHV9B3x2qY7NSEWHe7r1vDgdavTZhLgKGDsb5haVhtBt5zKjJj7ZBDwbPQExTb7eVSHLXw6JAn5i",
  "key1": "43YvL2JWFwwL4xxC6xKsQpWvNBguHbB7MxT7hyfR7RRb1DTRVHwuzQP72S2z9JNB2wHLovgPJdTUQcXvzHJzM9sv",
  "key2": "2WypAZ5APuixearAmwd1D3xGyhjG1RMrfPqdBsGaBriUqzLW8bL6LD3Exmj4hD9bpBDfvUbnqxQXqpRbYfiDH22f",
  "key3": "61KEQE5QALneFV5ppvmRJUcN7Fm7sW6Ah2GctpLcAJo93FDUU9z2dThWV91B5rmjwgU1bZ1bZfUCkJYCeCooyFpq",
  "key4": "5Yvn6Hn7u38rnRKUsnp4tL1TyRgAq9qyQQ1G1W4pPVrMoGRw6V6qk4hEdLoYAcJTFSqxgqfyuVj8LbjbRJcCWibZ",
  "key5": "4RPYNX6eWoNbP1LGaNhpwXTLxiSgGXzknsDsrf2Lnr6QDQFA4bLTaDJqvi1ofJ2m1LjUqavsqyYmLSNth9p7neKr",
  "key6": "5kDTAQmeKRfqfjPWPsGfZVUgUvQRq89z2MwfVJPqRSjCy6pChaY27WjDcqRa9p3oomSZeETYy9mgpEMTC2AgP8VB",
  "key7": "2URqWz7r4Uz64MRt1yugMAYSHiKK89vAmgqc4CdfPFdPd492xnwzE8chpiaRCD1nMTeG6awXX4pB1xvhBdchu8XV",
  "key8": "2zPrhicP7aUQN1r4inZ8eQopRZua7pmWC6Ekir6Z8jEAuKyihA6NM9c9NmTHWmEtt1NdB8BDjCELw74SPABibq7o",
  "key9": "5DKKqZHs77fokTc51ywwWy3mECcB6dqPJ6yJxTzXVmZxR24d9bxTq6hRWQE42iw78yRk2kCiwhwvb9Av4YXKvVrX",
  "key10": "4htppQj75dgnrVKSXdSRFpMh699j6WpsZ2P3AJRTrp41beJfFiMY6S1CJwigwzv5cL7RADZpRgzRvPGA8V7xZtz4",
  "key11": "2FHjJfaTZeGn6QQXVAqqKLh3sdz6YinnNiiwqVyupzUdNo97Z6RqYqjSGqQF6yJGZVzvf1CCwHbCCP5bRwAmQTZr",
  "key12": "Xh2fGrx5R8GaxcC1fZWgLEUDQ8cQ6LBVPmXwsKeB9eXQCBopvjQQvjL5iucbT5ANNfwiSiAtSYmeCanDvmSta42",
  "key13": "2FWWePEEUtXuLepaLLz6hdDVwQHu1F4w11UBvwfSU2KoaLZ1hwV8kbFnRd1h3TebbGyhnp7XGWAvKdE5g981EFPR",
  "key14": "4U91L7Fc7XTzCxh8ZZBeRtP3FFtjkcQ2SZGD1yi4gANHVwWhbnmM4LQJcQpXcq8TkFHmneNPXuqRBekoxVvJzrSC",
  "key15": "4gxsgpropet5Be36UstiYkRkDw59FuQcWJLkqbBUJiq1H4zUMPeaNm4V6wF3ni9Jq9KuD2Xq7zwax3C7WskMykcb",
  "key16": "4ismhCsTusxMjavZq5QxNktKhGd5etD3Qfosaqo59VL3qu4Tn14pK554sY2sZRxrLp2ZBtRxozkJP5DNXNevVdm8",
  "key17": "pRk1jpNVN9BHsKZVt5QndA1j4ipjsHy2YARCmAvwURYmxgnaFKx3FY97znf722MPKzAi5rZ1EhTmtULy3xyJsCW",
  "key18": "4Ladbs453qMKVJbZwEGLRT5brBSK7ZT9tbPXjHrv9Gxtizw4vAGDHDHGmBPjSvDUs3LNpxLADGewaY1BaShJZPgd",
  "key19": "4fusVDKxzDVBYyWvdR25LTWeeR5yNWx3en7VwZ5Yo9GXLsanPfyTe2V6Rb4brXFpQ19qA4Fgh1qkVZ9pViyrn5hF",
  "key20": "2nc9yT8xdQpVctKUEjaSLa6GP8NkMxAqecz811ZVM6s8qeWyJxLtP12NHekcMfNVVRaDZkUP2XdAr8e5Zwwjr1Qo",
  "key21": "2nxWgxRPRdzoRxvEBK1iinnWKuRzm11YT7xPvWhLb4Q7ARGUaJLcFoZVT1KUE1ooAqkxciBF7DLzSAuBMpWiaZyC",
  "key22": "daHkdLeeccHT93FiQYzRiNYt7vTZe9bdyJLidR2fyx4suz3Ft5XxhGK4J5SR8MFssead3Yfewoo8wPLYwnQKtLE",
  "key23": "njWYZSL3prbHYbFWEb8wDNEhY9MY4wyRaZ1PZbLx6mXdfgo5Ets2tHJ3nJxtS15cVu8fPGWgsaSQ7SMXNXfwB9k",
  "key24": "5XjWALUnjwmVsjC2iaLHxFYLM4QU3kPNNcpEZB9Vs2wzi1f4c9bjaEu2s93NzjkbvUwUohH92Xtn5NhZL4qPMKi7",
  "key25": "55NPcTny76cAaBbSJUnt5ncX3sCcjbxCfac8WmPvHTCSFT2Za7KMtGxyGi4AZX7NcfybHJVtdaXVkYnt8NZANP7P",
  "key26": "3bY9bvA2b1DPBKhRYAm4sSvV1UNa8hsHDjDVf2zXpj9BYnX27bP4HAacu3VWQMzdJdgQam2uAd8r4jWogMpdwNgm",
  "key27": "5atQTjA7wwvqpp5PRwnezv3qnFvB3jusbndfXU4QTc4FPeDHJp4sEAQJGZkf8QK5YGNeYEzhoPn2zraY1hyLDnFH",
  "key28": "5FrErEGbUUQU5fPtynbw3rnjaz3Z7zKgtnTzsgjWnZh4phDHe3gyMxahihiBomsP6o9WdpKsUKkr9U6zvFMZvRbN",
  "key29": "447ZYfVkdPgqfgtK3DMZeeE1VY8gLi3r8YZkxg2QEm9Z1fxavXmnzQRtEzXyrFC8w5mpPFBxmUXo32Po4TieqWzN",
  "key30": "3CG9FCC9ASFtrKZVKDtBP2HizFibXbKDk9zMWhZCFmyNyafe7iWN2rU7zGw9kxBzErR9qUMNFfgjmmijrHZHjrQ",
  "key31": "HGkRdaM6t3G3YAHvb8TCDzZS1BKgneyT8fJARxYw1kSZA2sbBaCzG8QeCLBTwbBmsWJAQw3TiSE3aHgGdPoM8wA",
  "key32": "4CPqNjbYNrLAtqWWJcV9iUYCwoS8AYj1NwdBW98SDmqcfeWjJNvcxW8NkcUSJPpwBHcDUaixP2xR8yToXgFH9qmH",
  "key33": "4CU7jvbwoWKbF93pXk6Bf3Mv3C1kVEPw25oGtsZiYN49G5Dogg8sXRiDhkwXpdJQ3k3TgFck3dYMSBzAmezCaPDc",
  "key34": "qMCHXAWszmCgHVH9RahLRSgGzD4grRszjjScT8yMKgKYYPu5hVMMk5CGu6GbnaY5Pxhj3oHZoCzWoTxstLG6LnL",
  "key35": "3DyCcwJgMwokN2Qj9tHBiC2GUVfVQi2V8q7jhs7GkGsMbeuPCMCigJQaK6v2KTwQ5FgJTpN5ZjhgRX81gEXKYi6Z",
  "key36": "46ko78vKwCrxjv675J6epugzhShwVjKDWUasNjrJqJLwdFyry1detSKs3jsFy4StHD7xoeWyJMjD5AMtwpmLafm",
  "key37": "5qBo31rSFojPsWZzCPaUMjKcp8KqRAKxnbcDgrsoumT9NJasHn24RrzrHXZE7y7fZHPNey4UX2XeGvHzEdcYiJz8",
  "key38": "2qcTpkFB8ZrqFEdevyCmbqEGdw8RP2xYJzNweDM3tDMjtEVXU9vtGmfb6rf9uf47MZUoLhuhC948yRM9HbFkRtmo",
  "key39": "jg4e4AZxfnyz3UXfSvxaSpaDWnKLomSL46WLK9JXbS4jKz7cSGotvRAb5RNY5zVMyV6P42UNXCWwZT8Lo3V8YbY",
  "key40": "4VEpqUab8fETRZiiLBVrkHvL2ycEpjvrwuBaMirAFdLXLfenUepLhsLZ7Ff5MHxq6fzakfszpazQ4QdXSsLmaU6V",
  "key41": "2A4Umb52hFew7uHjmBxkzvyaJ73Vny6zwUUQddATT8ainVsKiVGvBiti47pgazBSC3tcHm3A8qLUePhPYMHjnjdb",
  "key42": "25yaokuK2qcbitxeJCjCojC2Xrp2y9dWZZWQ1qMCoLCp26XoY3JuxHLi9Td3zsjGTazTUt8Vxxdi26KaX5yz4kFx",
  "key43": "4gSkHnA1c7ChEdMGEGP35q3LFAdv8Wxuu5osyKNZX96DnQgSoGgx9ZzHQy4QxsxPPxiU1NYiobeHCsGkgSpVdpm1",
  "key44": "WizmTtNp53Rg7J4hoAgBawCaUhRis1XKosi7rZ3dkry9cSUWhR334pdc4Jeh2HSvdFW4Yng1Xqw4Zsb1hZTsVtP",
  "key45": "3NTZh4bMQKPuwoNptsmH2rYUEJ7EUL4gnju2JsL3N4FQFjcduzdCjhCzaJFAqbUTYEQgEEUqPm9dKzti3YRZ7nvn",
  "key46": "3RtNCsMGfXPgZUrzdLPJtesKrcdHxhAtavKqQyJftQBAQWNuKFkM1vf1mK23MF75nCHjq79bQyqtALo48wHgzy7H",
  "key47": "2qEFT1ji2b9STu3ZYWyqkwUN1Y3p6njXdoQZDVZWKqgpEKxy8tRjAKo9oMf2s5waLUUrB3gDMr94g1SRcokckirZ",
  "key48": "5Cdqq39AmtgsYrzbfYzxZs9kmiJYcdfyNrXSJkz7Ea9GrJHgaafdK25rKCoLgLy7oENJMdQkpDhg1zbSiuHQWtJk",
  "key49": "2iPk8w1VAVvhVwVXtVTiTsV9YmwJYL7VTHMUYQK5GGeNaTr837AcBbN41CmK8z9eTWqSMn2GMRo3uh49Qnarvsze"
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
