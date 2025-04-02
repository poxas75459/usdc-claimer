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
    "4nqmFSoMwqEdQK2xEYbM6HxXs6PNP7M1NVqDkSLWyq33kHEbnXkb4bnrd2VAUzAktmtGZFwyG1kbENdKJGUipVK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YgMLMVpGQT2NPJQn6nNQpMfS4DrJbLb9RySdv4TSnD2LoKNvxEW5LXLxnWCVrkm4BbmmrYTofEkpQv9Cm2iRwsx",
  "key1": "5twAyzB56U2eVc86qt3Ee3zxFiQDhcGt85ThRSNakjtyfbupRfTxNT2d7gJ9p9Mu2PrEoeQdoKF3ipLimfRUFkpe",
  "key2": "2hmobhfDQPBDdfaBNbExjkkH1PZs14zmzkvWYKPE83zcKkM58etk1QHe6DQpz5sNhbR6DRz29861KLf8F1FXGLDr",
  "key3": "4izP82WBg8LxVdykuqaEx9NGhyREFNiMGX4zS9EyhF5Vaxq3eVgPQq2y4iPzhV7pjAhWiUdEjxLf8DPSJb5MgVQ7",
  "key4": "2agx9uqGeYxBF6f83sMJL1igmXBRWwPUD35kpV4eFddT17eDSs4viYHa8MGye17w6qmHTahh5y558xmE8Y1dSroE",
  "key5": "26GVhuDETC3qM2WUzLJeopCg8tFKELoFMsYEwcCwUoQWAiYwjGzN8jwuFUt8WMGwxxAN6AgAGCyUnhHB7zD9h2eH",
  "key6": "4E9qxb8bxYHSivSa9tm3Wx748wVxZhxLhAsLJbk9DAgDFXqwa3iNWthZcADRw7XFk7vDQGpv1WPhgHcqqvXgkaMx",
  "key7": "5fEceC5oPddL5Sk6YhbMF8Mi6ui6T84RvoZAK17himgTKbGN6y7LtQS4ZuzUxBzM8SYARUrk5g579RypeLywGeZm",
  "key8": "4sj6VjcW4w2pyebbjPnaqs7q7HDs7Mqw4DH8xZ9bisSezANTmns5x3HjiH6nTzECJYxG1wGxoqQQN4AGkYMBs8XW",
  "key9": "4Yxyhqyk37FLxtk8p58D6kCuvhdmF68AHWoKFfRHS2oJGBzwf1cHBVJs2Lk1j1KUCTSr4E1oZVF4RZNP3TZVQiuB",
  "key10": "m47G3ZhGbwWC9Drij65QbWHVe6sWkBbBRyfVaGEGMmQTh99GfWQ2Gpi8QhkdWiYZAocHUtG5246qErK647Y7Z6o",
  "key11": "2VQ6s1ZKKaZudTZXrvvp938cEwPTnGvf4xFtbmjLsvyxYhC5kpBC87F7pNJoxAXs3sizHeVdRdXMwgJxNsRPi47X",
  "key12": "5ZA58d8vYBnXBZrzTsSBCWGKNLD3NDAekBnBTBkQV9r3vFJhs8TfeLuUUBjMmSp96ZAEUoy5wv3GsRRzZPdyQM5R",
  "key13": "2wZs7Q4iX4DCphdHDJwKE2EwpbQD3ePc9m81MD8CuESbpfu8qR6vXhDVwU6c1stcYFvacz5KQHM7pyaA6bYLg4mv",
  "key14": "3M8dqCeeuj6uVk6K1wk1ZjvmHEQ4YtnPdHi8wtzDY9LVZjEvBiXFcSCzYMELNhPM7DvjRj2jxTHeMGxeDw6Pkv4f",
  "key15": "44joWZQKrYiM7k4QPLT3T2yZ5w8WFaTycUgeLxYKm5VbYeM9M99gEfPXJHEiZHMSFYYeFQ5yqFi4WBiKYWjFUNm1",
  "key16": "4aSeiEGapBGXj4MhMYsKQpeoj8V6c2divnSDhtgDqwHwikMw7qdZse2AfRe2MQpnhg1QmSB881QYEZyEiPmKwSVb",
  "key17": "KBggCkC4NrgDGVgrzHXEF9kWncnnT5xYNCZ946pdv5oKyigstFP8cnPSix838nMZvYc97WmicgDkMdnt4qbcrw2",
  "key18": "4yE9zFPzQVKL2Q8dovfjhs1mqgbbTSBTdRXPCvp4fcphECk2xrraaAc83CGqtFf7J3gFJTooKYHqZKL4YvLF1GMe",
  "key19": "3qP7jsaTvbNeSDY4VW9gkfHXAr8JtSccJkdXtX5APiBnGfPcpMj6KHFgi7GLh1MHidG9G45LueeNiHGaJkYqPhNq",
  "key20": "2ZAruCjDazhmA2X8q5wXLjPPcUthtdCSmwQShNvuBUMuEXS89tbLrcWdogQjejv1PFQ2TK94rZLePSssrs2eYH1M",
  "key21": "5iniXXaTgC2TxmbRKfwZJKQhrAhVSczG5B3fgTtpJR6nbk66tdJ79wAHbESEczQ5JtgSeZ2vEapTEWuCpGVy1FfX",
  "key22": "Hp5qWSGtMJ4UA8ptJfnxTmxephtVAjtRzBg61isoy9f1ZK2ay15D1Mn4UfBfVkLgWJGKTHuSr3Hk7mSixRCABs8",
  "key23": "nEVZPTuVEbTLEbvu2zExT38VeVc5tgNkUvLLmuHmirTJj28y31obEw8THBAKqgUBgpBeBpq5PiLdhBcF9AXWZAp",
  "key24": "54jj6UtcwZjjVw7ekVLLzSi6r6EFvW6sz1CGFHxshNKSnykrUwEShQcFiDJ2S9rPKtb2VhfmpKq23sXk232Ufj8T",
  "key25": "2AD2bEEHaDeyXbLpxghGgdDHcP6HwGNquWyHDwGqBhZRd5dd9tLXwMpeEnVhPGbo9ACLiMTJ54qN1ZT4kpXorFjh",
  "key26": "5d4fsdnz2RvjfZAjNRuLg6NSKUTbx4QEZr6FPU1tZp8BqVpDKR16yPmRzt33xdeRYyRG45bo87pn7TDe3CdCpqcS",
  "key27": "38y6XVx93JWAaavtR73rJKvPCZRG4j8wapaZHDy7sCGuv5tMJ9k8LjtW5Tz3w1nThoVAM9L9yLaKSkQrGH76s3tv",
  "key28": "2xAJrEDU1V1SedZC481R9dR6zrbufVShVjpC2UsmMcGX1tt5PhD7EWPp9HT51YdDKMM72eS121C33ocigZknVpTY",
  "key29": "2frFMAHaMtSfRbir8ba5pDxMct6MGFugEtCdoEBM9c6rG3X9r7u9XYSv7iAZJKM3tCducZh7c2BYFNYPrdD4Wcf5",
  "key30": "3D2NrA6KSLg1tEwkGTk5j4VRD9MMdoNcLPCnJEzUE4wYra2wMdKTaVUmNuq3UAEnA1NrFZzt23z7c8Uj1nstWxBA",
  "key31": "5ZoomSD5LJPDkpKBzdGm4jxF6YpR7ust13aMRWhxZx2bizeQnyqjUofwWj6Cdg6wZhTD4XnWfDo2PiuiQjGSsEdt",
  "key32": "yCCrt3Ag27vA726tkyNe9NwZQ58uhJy74Wdg2a6Xyb1SB1o8RAEM7agxX7Pem9tENLxeyh6g3JHdd32GKBXpkRq",
  "key33": "3NAesQVYCG3SW1SbniYLh4CoQsneCrAYsfbSpQ56Hp6qeGVEpErCHQbsx1isfC5FJZ7TMFh7to5uYE6w2be2jTFq",
  "key34": "2nHBYmCt19xv8gCDsZ3w2MnYhCLH2TQkr8VWP6ygygFQnpfQjeQPoAgkRm4JWsQy7nWXEUsa4j1WgCgzdbxsFo9j",
  "key35": "2m77R1A88wKqviq8mKtbqvKLuqySzxNiEzAwbpuwwfzWHnWEu1vj5G9qDiDamJK7fvXTtogQJGAjbTJ8vohHdNBm",
  "key36": "a6pvZ1pkbYXqSHYrLXadkhp3KfwDNMJxW84SebaJYGwNp4y8Qyqb9tQHeaATUhuf6FEiY4RoUe1Aa641aA83gDR",
  "key37": "5kPuQjE6xoHW4kSnoSyZeBvKHyHoD2Ej35P2mXio3sZSHyyrMVF75VMfWeVpMmTXHASRvYBHtJvNAGzn2Rn1Txob",
  "key38": "3qYew8w5MhRcPcZTbftMmLdd3rwF61gMCpLbCyDRnX9ak8Vfn9npLyQd2KYm3xemEx2zv1hQ2dEsMgmR44rR5iDF",
  "key39": "5ZrPzKiDB4wzWLWWGPesjADVA4KzM4QCgNmfmANDM9pAnQRwPkGLFt5sNSKHM3eECNbqAPw1xu6M9XkMnJsU94qa",
  "key40": "5cQFvFeDCirehMBhZCzC7TWVt8VyUKo98LSQDYfQX2UudQP6KpKNse3svPmMKxhc1KhSERmcPiWneXpxwbyXFQZd",
  "key41": "32W6SY1XnmGTzrjdAYtZjC4cRuyYDGjb2hHS6mFEcg2cxwMXx3C2gZxVQY2oSLCVA4KLxsu5GbV8MmWZYppqSoGf",
  "key42": "5tLsZor8hegQtNYkXVtL4s6vJhv8NTte8xEfhDmXoSiSqTnEbBjo2p4CG3mmjDt7RBUAvDPbUPeLAtoi1X9wvkZu",
  "key43": "3Gi6bKeHPXLFfHV8XRoDbRgShKE6Zrx51gBMquYSW64E7iuei9gpfrLZtY3T6qD2vNLYUjMpn6Gr1dugE8RV4LP2"
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
