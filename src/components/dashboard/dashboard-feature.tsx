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
    "3VzyZMsejYC7xAW1HEqesd8xYE26pq9Gttikv3bUSyvidMumpkGpznac4jaGLinPiJGuDLqgzMpNgW8UmhdwBR7r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7SJLNTKFsjdmERWdnvHKCVNR3q4H7JNPUviq5iRuzcWf886kijLbXnM76XBSiSpL7ZLJhzoShSovZ6LcFhuqE7K",
  "key1": "R9UsAojgzE4SfyDhHPzBDeAR7chdpf2bvxRYxhe8WwYPqeDtYmLMhqG8c4YHkeQd9auKQyLoJRMfbduRm7N6W7X",
  "key2": "2vzJ45u6YW9dHWehDoMdX16zEs35fW4sTAdaK9839oFpzeukvo1KBMAwGHcgm5AgmwqPipFu8tDqqdn31rLJhg3j",
  "key3": "tXUTHwod6vMr4hjMw11zrQpigMJJwE6GC2QH5qxHUPUSjHXpCVXDBjwbd4yf3doTTemzA89g9rpTJhQEVucjAYi",
  "key4": "R2FLmhxLvv6d92XB2o2tzckAr3wc1uBbHCY2wxtrsCqPENzt1Pi3skuwaK1S8nRxMA9dxfKKkq7zoe7hzxiQVWC",
  "key5": "5UFGhe3crzcj9QFWDSNhexhE6aa22gM6MnjXiX6cMYv2b9qtPvWbmMFEs4DCHefaAFYfmeZv8cFkjZXhAYd6tJEH",
  "key6": "2i9CJRZkuhido8zjMzYwe17LQDQcu587cBHrtAMMREdhZV1d1F6Fb8yrQc2uEMUXwKPunGbVJGv1FV3bzwB8Xs4L",
  "key7": "hhvHsNjVg1RCKRfrxA72iRrHadfeTEaTaB1U44Pob9A1tPGxX9TB2b78EQeb655SQsdbtbNVojp4KjxdxUo3YWJ",
  "key8": "4vQY9TKuTYFcCnKo7rGpv3SW6XiUp6PkDAWamWwMCAgngQuVF5TDSx61q2tkbQaDDjpHWPCmn7GgZGHZT1XPVFuC",
  "key9": "39pTpaN2yPx3VpNerHoHdub57B1ENFwR74Vj7tuHwaw1FbEzt3Hd8yFpd69bHuuyA4BHLaDWoStsuxRT3cp9QF72",
  "key10": "5XEw9y9zYgm9MDq9QnigPQpefBn7h5vYer9Ecz3X9eBFSMN4opXUJw9XCUPHV9c9tzeRgvm5fq3C7XBvLTMPBhxD",
  "key11": "2PwtZbdKMmGzp6kZYc19bDx2PkbDYYvWt5NvYt8EkojbqYxHmyzyUHgNUWgUbBGcxU8TzDm41QJBJ8SLU2VHVoVe",
  "key12": "WR5ucG5Zkrriyq2FLZuyt9kCsVn9M5oororo4fz1yXvUgYLgCK66yhTuc6WGK4eksEg7dtFkmokhQ42w1q2sKaA",
  "key13": "5n3FHDRQWpfZY4ncB2d5mP5cWpmTEk6n4xnH186SNMW3b1oT841QXkE9sVG6QY6Bie8wBizGgKj5BW3XwkQziBBb",
  "key14": "2dkDfc3CAWWUb45LSk8L1fTo8mdibwTGgyMJYNDiZWrmmqJLFHE33wGNGsUSLFkUhNkfKXSw8jNrEDVybmh7zZdx",
  "key15": "3AP5896hNTkTuMprHL6HNSjJ5M88ycKyK2hFdhJx22CSB8hTNLLGMMunHYGH8rv3UCnUAjZHnMcaS89KNiJCbVEM",
  "key16": "3ZpMa6UbTKmNLCTHrLbqjxKZBjkHC5uyY4wEx9pgYQbWc9Kcze2w6LZBxkStiewd7TmSeV8KhAkLhEJvBHfQMgCh",
  "key17": "4uTxmyS6XxBJf3a6vyLKRgPRCZZ5zNXLeR9phfRa4G6aPZE25fkP8myYDwobA6aQJfkXLk9C6U9QDNgHLiVeuRAv",
  "key18": "4eYGc3EfwZN9eZFnqL8YMmz1MAyapUXHnFgbseqWSTqRdhkJt5R3bxS4UZtjy5EPkE5TC9ks5aN4HkR5tE4XaUBp",
  "key19": "5LxAAwBBTqvD32GBSLgfZ5Eyvzo39VPC73Nj79YoeWKcNgi6ejz892MSK6c6mBWMbRfbE7jbrfhwa9B17VGkdbrE",
  "key20": "3oRMgo66w8wkq7GfDKi4EDgAhNqFYpMHpAzv3nTneprobohJYFYadUgv2QwNDWTEPPJxeWBLKNU5heeNxHHQa2DY",
  "key21": "4VfdENXMhUky3iSNb3bNgE2Dy14jUtVhpGba3xRGSb6M3tv9k2aQgC12C8tyRqz9GSsQ7cdywiJG7LUBp73Lr5Mr",
  "key22": "3EJzf3tHq8wHhqonC3nMgqK4w3MYYfCwSoVv3ufQVY3mMJ6sbg3xW6or2aFpMDRrgWaLv15b7WiGvgJg5kG2FBNC",
  "key23": "4QyyXwmrhrG4nNh3oYSLGks5yha3JMDGLfaR66ie4MJjpznFUAECQto4t6iLPf6ArGMFoxR3tDtujzqduQiLnhsg",
  "key24": "G5B6SHciA2CmX2ydzVNQ48UePy7ACwe297u9yNXhp2FVmxgQUKeAp3bkqYpnQNgAeiLR46EHsWHE5KeYKwmqkW9",
  "key25": "3cZPFv9pA2tw2vKWP8nmimgRd3D1JbyLNJ8VoTUFmKiG8Qrv3JYUBnaxypzdVe1dzrQfYQoqADgwMasXcEusduc7",
  "key26": "DnXMCwLuu3P3ZbxpELJyq8vrAZ8bcNe6RnqFe4Fd5apBG1HRPaLgazc36nVBmi8k9rcadUefL4bZccPcXfZcJSG",
  "key27": "2UhX5SFGPMY9aDRMwAyi4AHLc6sXrDwaKj4BsNUrSYRL8bubUFmKvVgCNJYmyjCG54HdL5hVh8zDmHQ5aYeSVDue",
  "key28": "EbAGQyZve2cWMWayHaHeGBpsodN4SZb3xwde7KjYUn3oEQQHg5RHAgbgwn1keGAbKQTGqCPRtGupgyzy7X8uUrX",
  "key29": "sWkBetPNzzbiPVGM4d8nDwzK1CKG7JwF9EgE2YEXxEfR5sWX561Ax6ngSpRxvwVGFGDFSZcxYqXoCoDjd6q3aLV",
  "key30": "3Rp3FefMyGhZvydYHohBJbM219gENRZjVXiqxidP4oFNukLMji1qLDKi6qFD5EwPaXWpfiw73znFdr4AJXXr3JiL",
  "key31": "4FtcXm2AUZAEq5TYctBcbKmu82EKCqHyErB18W4Qs3cQNPrLga2rETxxZdjAx9pBxk4C7X2BTFuFPKvTrjxDuyux",
  "key32": "3iW4rccUJoNNsmNtASDDTn3jaE5PZcuEtW7QMmYP4dTku6WZ7qmVoMkoJTpPvWub4S46tZ1Wg7iwBSJ5KQ74oTfn",
  "key33": "47eQAP9TScokBRTmsDBno8dVqRtnPZ4n6mbVwozE2bGpnLmjDX72FcyadEiMH5d3TMDXZYFqJ1esXzq3FLnkusSn",
  "key34": "5e9M4kP7sFnmSxUyohdRm3i3en9JK5fcegwAXLAS7yYr85TZ3SLj1Kg3AkMeiFQqwavf6WCTieZsaoYV6YBatnrF",
  "key35": "2332CKmUkD9YxbbymqMexbQ7mqCbkm9ZaN7VEwtzmSfQbHE6BedtnjBBmaNhEDirxXLY69MDQH4gXoqKxtVq6B6T",
  "key36": "67c7zYnNTrs6Um914ga5gxtWA9heY5dFsx6eWGYfgKgHA732zkjj1L61omTPeTTspjpteoKZkkugNCyTcK3bDCgP",
  "key37": "5oxYXtdqJUwzi8UEisifGpApKdvGg1wddELgjQ6F2z6yfQr7KoQ9BJQamemLeeYyTsGym94mRvJDSTuDXnqKTcyK",
  "key38": "5kaWwEn3kjCQ1s7L9twtLkZaKfTQsqSdk2dyaRTSkRPdmHAWQUD8prdXmJsx5SQZjH3rRutqL69DjRAwKW6U1p5E",
  "key39": "3LSj6nGKvkymKN3F982m198cA9zB4cuimtVXribuMX72FixgZ9gCNDjCRFRNnEJEZg4wQgsvPhC8zRjiSbhFzUMn",
  "key40": "2pqoEVJBLZBtJpUpN3FbZ8vgRHkpiLmDue6neS5X1fNQ6m1jLL6hgdXSnJP9x7fnHFQ58qXysFzTifzB15E4hPiE",
  "key41": "qanzpFkj5LrXkxTe3RRex9QwEtkZD3jrAcpkMWPwaCSTudQaka1nnJB5V4wtrhp8CxGioKNgSy4ZckLJEhR8Pmo",
  "key42": "4dVwmh5TM2UkWhf1Atf7wKLY1LSuhhsDhC2RVtyexTtubJcM58to4n55ffRT9W6Y3SMunDfk23iYuskKedamwbBB",
  "key43": "5DRRYMo83XpcgmSNmBSEL2W8YWkuuKnAhpou6CDWm3PS5851WjF4YWvFKX8VUbDT5v63bocYXHT5S56YmTB1Hjb8",
  "key44": "3EcN2q4r9g3HCddc2AHixn9RrZjaBLE1koyp4Ev3tHtEnWjg6NnaAamMuBVtemjL2L1dgNJWMmpkWPZEpPJFXKWM",
  "key45": "5ELn1svywpzC8UpJfETDfGbssTWYgyUEEKFkSwQEe6Fmpk6Vxdq3y5LP96p9ZaZ5zd41pq6KayDzcuhsi5vyrCJA",
  "key46": "HiTXrBjJSkRTptrzzWXryefR4qivDs4E8NB8qgBF5SxohqmRBNQUuH6ptvzfWqTa7CjRNyCLpyZtLUsktog9bh6",
  "key47": "2437Zf3eZAzyaH1GkK8DGdA4HYoNSHM2gib2G82dgjH62EfLMx3eRgdEDPTVHrt6sCtCie2LkCJ4jUFvLA6DMbPG"
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
