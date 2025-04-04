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
    "22BBRdHyLjp39U2zCgeuHX18a5Ru654ssNF87UsgBE5N5i6dag6oBdGqxpvT7kqu619PH33vmoEAMyJZzQEwTaGU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Go11aKsvyAN7a9VeFdYAfsMJy2ciCFhuiysAtezwD32rG2DYC6ySYTZxbZ6jsugTRd34FH4XaGQSatR6mXYAsne",
  "key1": "2EZoSYQiJyW6TF91rKYd5JhrfG8WwbPxo58ohDGtPy1hmDxG57Ae2tLn46y3Vyb46KkDU78Uh9EBrbScSkKLWjvh",
  "key2": "eWkUjMk1yiUanaefZnseFjjcDcjyz6fqY1uTQG4StG5XJc79LmUxopCvEYD88AbFKPuogHEKZJ29Mv6CbZymhYs",
  "key3": "xVaQFgUD8sYvLmFvi2KhSdNjYif4mgTntZT2MF3qATXFFmzTCMbjwUN3Xv4z9fAS77xHxJGn8wFcigGsbNAxCVm",
  "key4": "5w4cVnLDjdE46VNRpV13iqjf8nmvTP8kR7tK9TRHnvztKjwwL2quhq83HucKw5GQfMYDXL9QdRmxxwV6sStFkPCK",
  "key5": "5ZpqR14rr3NM8DD6qb9Xd3Zjz3a9Rs115a4w7NcAyFJRA7qCWqvrf9LbswXzdiZ8iYJxjRV4PZMiVo7u6tUWB8ss",
  "key6": "4sERxVmA5yvzn1Yx1SVeSP45muopCtdrsdiMcmhRLZHETWnDGrmPDk6sWy6u6TdW8WSqZbHDJQNef1t8wu5BKevf",
  "key7": "46m7vxNyxH2YTfUFMxJydgmeqBsr76UmtJ45z6QEYfUccdrR7VwYFP3a7DqBAj6tr8ARFcNBzGP67EJeXewGvPjr",
  "key8": "3VowuYF2sDewtX8oaqFfNFwrvMhw7NZJs8cydWSKNPj1VqsSY2o9QtgwAcNKkejQH21kSAuVWuaPbJ5nJGG9whZB",
  "key9": "5xD45LEf34HpYgT5A64PmrZL8n8PgvFiPmYuDjYgxFELxD3y1cCnbcmEBZMeNeGNFCsXYsnDpaVVVPzrfjHSQbsT",
  "key10": "5zpYQag2e259Ud8hKJZZP4xpvLPGJpToXtnEDuFRHWmEy2BhFQ3Bukwc8q8UmsyLr8fRtPK5fL7nBwZ3HxmzWS3P",
  "key11": "stDro1fbYn1JgsmBZ67BKqa1G2Sko6sySZ49mmBP8rJXF3KEB4M4fWpSvqe75Sb99SkiL7SjqtuhbeY5fy7i6nn",
  "key12": "5joJMUcgrdam6FytrsVmH7ai5XXSDvA6TQ3w9PrR84wXuL2nBq2JnzVCgiXvB5SmGUKo5Wqg57B1pHFfKuBQnbbd",
  "key13": "5szhAQGnWZQ8Zqhb7U771ptvEfgejaH81SMmUbSEtt83eLMYHZq52ommkkZ1yewtjPTXt1ifvQ5ZaW6zqrHKsfuT",
  "key14": "58aTU7yhvPYa9jPoXzvd9psHLVVQeE11uPifiPRac6p9BvVx1BJRkKsD9ZaucV8H2kf3ru7j2rwuR5CVN9bPV2dw",
  "key15": "2sr97QmQ5odD7e3CtQCsUg8pY4yNSxTucabLxbCKNHBbrp8Pv9z8Xu4K2mizu1fcF1XgdgzcWz4ZYMimh8TkHFds",
  "key16": "2ZtYqBmAZgsUqixpaHgriixGGjscChBYthoaDD5pbD6R6i4zX83158roZ5acY259UsZNz4De81q6iidXqbiDT32Z",
  "key17": "ivwKrkkbKPXiBhVvW85jGGMzEw1DnfacRGNDUn75aoYoTTQWvKnuRyUQUQiUV7DiBXFnNbNZbYcczn7BkhA4wVB",
  "key18": "4gESmgrjNkMvCrUaWmtsNsNMmivYdQjnUuka4eNhd5ixnuz9xg4YR1BGjNHBSU64B5oZzV5E36N62gejaviC1gZ2",
  "key19": "2zReby2EECf3fdLgesdCYJHM4V2BiZTjLejXCkxBDEqBp9hLc2boM3JssCJ9GEoezq19doZuo1rSak5JcdpWMSLG",
  "key20": "5wW99Yxyhy5DWhY9nDVbpvHuEiRZxm6K1Dk83HLGEuTUtNiybEwFr3zZXvtJrbQYfzR3noi5ehhNQ9tcWT1SpeKc",
  "key21": "23An2De7ycUjPGAJC5ryMWLYSdPnrc76wQYoLoxnQKVXEHZWu4tq9w6NDSkcFxN4iKfSSCF94F4zNFHDSzfwyTrD",
  "key22": "636Ej92h97BrPaRuQmB2sa9X4FDTqydZbZcyXi4rE6BjiEdy7QoXrUJd2RUAmvNx2UjqzaNYC4mFAUQP6QX9kSNY",
  "key23": "5sT7jE2kiZKXmiw7SC55TGKrfUMhm3Bsi2s5Nq4s8C7e6k2CMKzdF2fStqWRUAdNq59q1Kn3KDJY9yeqYN8rbQEo",
  "key24": "5xjoDk8jrndM8J5fLeE7URhJmAfLBZjuvDQW7222b7ZAd7LNr937MisGgaWveoFJ2FZkQ4s9HSjUFKmNPrbKCJ5S",
  "key25": "4o15gYwHidYbDieKhtv6hGUj82UFjeT18RxAyYAnBhsa9vQ7yJGyZiHMz7kLrJnR2BoDvWPUoK46qbkRUVS4fJwH",
  "key26": "5FRogcafEZ9ycHfs5qS1sGHWj29fMubvSZv2Y33THubUwZHMs1QN7u7rSiW5MY3GQQ3swzx94woB9vh57CYHw9DR",
  "key27": "2d5jP1R6oak3ggBegNEfEWE8TGQHQYmPepRnsd6Kik7MhawWBSU8X64pYanRDjcKfenD3Q7HeU1WCypFXVDwvCZq",
  "key28": "5UQ1NMhXwrtrEHbL9TyBhKn6wFxQY3w6Ae9VSD8DtU7VAAs5MCYgtprRf7phUnTxHUyYuK7EkwA2CvcdaM73kerv",
  "key29": "5w32zqmmGwjGPmP1bun8ryLJfnLECQZu7SBfiuzh3ukAngJdrTbHW8WUs7A4kG4wnPXjJ8ehrqLx6DY8Ai6chPG8",
  "key30": "5VsRbqdtsPywHE2xkYTCSoeGtQezR8ncZhiBWNk5u5ZE3LzqZo5NP4nbKEJbKbkw7incKPdQoiwkKprgAmeNRriQ",
  "key31": "QNoTnMr6Vkik1uDV4iu8VHsWXYKPULNa1e3p91Cxdf3NksgwfZ45qfy7yGLro82YkkEaorCmbVURB6BVaEFzKHX",
  "key32": "4QVq8GyiLtHNqpmBSEdFncdJqJU8EDXtYLVfhxkXzWwyJj1EA6hLMo56qzbrkM3wSCc54p1Nt7J3ty89CTYmvH4R",
  "key33": "4U3yRczhYedyyp91TMeKXs1HKjr1RfMomnUKSHoo91xDp1hMnXJ6UXDPrHFaxCd5wAFfq18FTupDLR6PpBb9fMnN",
  "key34": "49QRTjDNFwdKUsUPPkexewKeQuqXkpFgBRFBrvRDHqJdR3Ew9X8AvJtFb27KWekTU4ANUcz5AwQ8bUV13qQGpGkz",
  "key35": "315Zt6L2irZj3Q5BGLHaDiQMVX5WwvQS4P1t5pPdmLkXeKbkU9jzk8hY9TJMXrd7z2hn4CtBj83cqjVs1LpZJ1WN",
  "key36": "3EznjVCM9Nho3u133rfkTqGsRzcogb9pyXezH3mokDYcdgs62hXLdUs2wvQybMnZYC8wec7rmzEfoRbHyxfcA1NT"
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
