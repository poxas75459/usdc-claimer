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
    "4xy8682Xh25dk4Bdd79ggZp8pm2xjF1GEMgZgbA4zmAaBK9jWy2t1kpZ9ixWfqvcFyjvrWMAqGTjMpV8tEsxvsN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26HTCz2ccEG5pnRCUpoVSWGEyzRZwrYJ2TDLCiromgg1pvct9gTvHNDNimrnFFWNEeFf2H9np4zB8LgBqv4sZxEj",
  "key1": "2ALFucXmLegkmA7LSBtHAG2qcrgLpopTE2nAPQ4ZEhGB4ZeiEfv7nLxppTpiGYVQTLRvCjLfv1z6CBXxCNkpznGC",
  "key2": "3xD7fq5pvoYUZDurs5PSaXv7FXs2z1iHWevHpXr93YpwyZy78NE96AELZb53U7VyUovs6vmLbbmAw7h4dAC8jS8f",
  "key3": "3Q4p8YPj5HNjJZ5JYC4LYTVzQqKtp4hwRG5Zc2v41tgsRayUZUZ7o3qQaqpp2mkWh1YYRycC2MygzBgYWr6ANmuU",
  "key4": "MMWhRZc1iwfeKJJxu3RQv4nLUdnunrGJ74NMAiK5hDV1bxhDodKNP5xWRQofCbwz9CLYDxhqxTgL235dtBbUM9o",
  "key5": "Kvm1VXFYyRA1WU2p4HjGvMYUAoCUG1tUn1oZBQjRhhEUo1CN5ukfjXSYnApat7JtuH4J8fQJgH97VNqLbFMG12p",
  "key6": "oeMF966UpRWqwNn6h1gSeL7nmwNSdLMDZ41Ns8tTRenbr9NF89aZHAeXt6cGTaNeSGwBjUhLxnJrJw7bYRj5Sbp",
  "key7": "4FUmBWms5wetoF7DN9sf3PcKGKVDApw6U2Aehgaw37k7z114JjAezBvAHbuvcYH4XqnDvpGAZfh8NEqJhjubcRZr",
  "key8": "hDfbpSzZtX12HeuvLHwVrBQF9pT9yaU7CA4g6NMMv4Ko9SorgkgxBrQwerG67FUZjaZ6raW2QkqzknhevFmQh76",
  "key9": "3SnHcMeQfdDmRUWsFtFsAM2JiQTS8XhDx9vDFFu4nA4k42csDRCCQJX3BTVgcMP8cXsduHLgwoJCyq21LCwPdzKw",
  "key10": "2LxRqhgVLrFi1bkG7dNLqyRTz4Zi4AJYM7W3foGx6XjSre9yhkvCWo1cN6Nt73XQ1uK2Zbjab3ygdwfxZyS6QsMz",
  "key11": "5cLsCjxSnZVUJJka5PamaaL5d4U8MAazhEDMFt77g574QN9xLsrUdxeyVeUDeYZAmJ9T7aW4mzS8x54YYCXfBAz2",
  "key12": "3WgwPAihzyeuhspLY5zHGcanm4CmYNfLmCEqZT6hTKaGnmuhZYJQNjLRBd4eZcFr4E5oigRWXenNn2y7DD8CsR7f",
  "key13": "31bkZZTK3ynRpHj7Tv13XNDS2nxW6Wu13nbyNJ7hSXURhuA32S2xyCBeZQe42gXBddAggfPbURSfhM8jC1xfHZgQ",
  "key14": "5mnK2tJyHKu4ix1XquoySHneRAp5dsomNLrnvmYvcrxgpN39rDc1Nw51HNXHufTYjjcBD7EPZW7XNoVkuPFEaUcR",
  "key15": "43hdbLRTBFqH6AK8VXXn4tN7CQ66BQELd2CjPfyESusESPcz4JYMxaF9mY8TA9by29KCDnbpcRULhJ62ma58oLYq",
  "key16": "3zRCxn3JBvgaTrTQ3iUBboJsM7fYDZF9YF793Pc8b9V9jeF48hgMKB5sxSyHXrDVFqknRpbtJ44rGVSMME5q86UZ",
  "key17": "2d96aaVAhsDNpsDUd19pQoT96dzFvZ7PReuV23HhRTVAENCAk5LDaWsYkwx3twgcZmZpRwipihqtgoUz9CizPNat",
  "key18": "Fz4WD6TAaniPaZMZ4yLBFcWhMDTTqqYDcaW7J3LPiLc3gd9MeStz7pezSCxxFr1r5sU3CjpfVW6aYdKSZeYV9K5",
  "key19": "481LmAQjXddpp15RgU1JAQeRgfmagnEfRzyZHN1SYD81HuUFCxZRZBTveRgDo6RdN2Z4nz2c7p5XCEN5RjUdTen9",
  "key20": "4x9tJbPCCff7DDoCXyWFxTqY63z9pxQjNLC9cxwez3WVkGTo2nPK5Y7wsuRrCB8KuaEFdFWFvwpKYtTcpLUDZgWA",
  "key21": "4EqWPDPZjxUtZJsSpwMt3zdF8G9XGSynctxz4UirM1ZzNGL4Ns9vFEqPYmxzx9eoDEAr8U8S5RyjG6RwEyiA5cTR",
  "key22": "oku7dzGavCBWyyY8WnQvFi3Q4t9WPJWtn8mBGRqxHCM5Jy9erRXkgHGhsNVXQyn5ozWPZvBHdrC9bPYJTy6fn4T",
  "key23": "3mopQyW3Dn5U7Q6yJtZ6L3ZzHdL5dFcbv94SC9b7VADUrh9EqrEDK4iDv5je5wQs97o3Bczhci71rAR63nDHkfpx",
  "key24": "2xLA7aLrrWxj153FAg7kZUz62Z7VAmbzgMKGkw9ttE8XC56q7tMxdMi9HsrPyQJjyBp7Wdb8YvGgNwETXKePL7FR",
  "key25": "5gfC9pvg6mqScAa3yCoBKWb8q6zZYA4JyD1ogkcnKv83r9CQWq9X7hiVcHjUwLENtBmCRCL4Ju8p1VPD5UoQZHwF",
  "key26": "54zLATaWuwFKULCQPbMcDmAGPonRp82B8iHe8LH8cgK3Y4VRBVkFDXNFNxSQmMtHzZqJ88CyBDyzZrFSka4jvums",
  "key27": "5myAVvkpWRwYF9WcaoEtPoRLT6gAobT8QwDXF3tpfaqHKgR6zWsX8NbjoJD4BX3AG39PxBb2D9Aqzf3cVqQmrgW3",
  "key28": "3rnGjFAUeiqFqL1Y4vguwhE4QPAz3pAJUxtV3tyJ7UqjFCH4o5Y1ac3kuEicGbEFZT8GrwXpmYzDe2g4rUPGcwHv",
  "key29": "5J1DLDRV4Z9kSkwyziJdD3nJpDiVYvfdNtU1qBgFQkR13mnvGdKHL8UAmNqFha8a71FZMcEBoJ3vnWxqER83hoVp",
  "key30": "4AdxPSakHcD2ie1bi3XLXdcwp5qUNrsL7nEMadGM66B4NBEfY9jvSdhUgTWZePk7Jx13kZF4nAEWvYUdVBnTFk6Y",
  "key31": "3Meg3PF7dr9pABZ4qEHZS2WZYtemY4M6S9mhyhUKeWGqKqXnk9rzxzmKdtuaad4dvPJreR6ok93QkSKLran1FQT4",
  "key32": "39Y5XX9PVF74cAVCkYch5wVprxZBS2L2T5Jj2Vp7Aq4NhseRo6oQ3NGzY8KoEDhkDwxsfXUeLCngpKek7Zkf7KaG",
  "key33": "fQ5eysSYkoocJ5xL6VLLUArVpDwUCDEatfFCPnCioLiZkAu7jonaUJQZnH2d1ZazYHcwt91PfX7FMipjNdFxhic",
  "key34": "epHNXZYNzAxhJYbmZ8PKwQUsKeHkA2bdrSu2R4jzfdWiFqtBdgCq4P5z61b1EdtF17FawMyRPdJ6KK5RMviGe5W",
  "key35": "mhdFw1pVbR6sbHD7XKVHdLHgCxSrvQmLBBjCXETqNkVQpeDvo3iJuwggfLEiy4ZYTmvGUrE7bSkiGU3jHjLUBN7",
  "key36": "2iMwCFQW7W7vjY7PrcpaHqSTzLiAFgav2qbJTrorhpUdNw7XrtUUc2nKz9foKCqTbFDeGgvKQmGcieag5S99CieG",
  "key37": "5DMKBrSPWUPHtDcAaHxN9soNvqgfrkKk2qj6s985FUp8CLmto1xbAcYgEpFQnVQ4HRZZmEp76hwK3mm9uDDc7AFx",
  "key38": "42jkRF9b5cZGJ9etB3vd3jpL9booPJf3xSKtcCyTtNTwi89nBZg7eRtrAVHCtwUH9pVw2tQ4Nv7826vdn51DtCPB",
  "key39": "2gSBhV5UNSAnDTxoRnxZGdgoLQbbVr3zsnNu4vNBoZtLjrW9c7pGR9jkQ557KgXDPC6q6bNLqgcttxsnEwhcDDNo",
  "key40": "4HPqvZKYiEwbk8nmvaKzCv9BQkXCCYKaBtn4CwfVNhXUhYjFky4eqve7V86oxY21QMzry7pbG86G8FgHwhCnyNGS"
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
