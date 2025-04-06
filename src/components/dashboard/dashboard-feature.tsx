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
    "3bjay3QeUp7jkRj9CsWTtpK1TFkUN9ZFeeZjVXhR3CkQCEXavt5imQHFoQ8UYUmLGCUpvJkHDYqt2es1vXk8CxAk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FtnXZaP3HK87ArqQ1rGrMiXywogXCg7PTxDUmfCWqjsUkygUxawK2VCUbzLeFjQc7PMk6cJKxDGvaNy91ywG3QW",
  "key1": "2Ycbo5RNzd55DRQppwF8xLf9EvXrX822T6hd7iysVLxZzKrYGmvfZrgWZzeEn4KPi4fc3KNsTMReTvHgQJAaM1Am",
  "key2": "4gv36QYsdqX9YjnPXyL6FKWuL6UXDKaezmb52wXty5nFGfxUMToSgvQjdDqPYUKhbDrjhsx5WjKqk43kbJKpgYUa",
  "key3": "116DUKQmzEXDy6cjZ38ExCCLHNwP8JSz5caHyfCfqPY4HxnHwbbW7PpX7AzGAvJasHBSAYji2noupLBoZvdyPaU",
  "key4": "431uUE3myhsg9XejgyLKU1mVGTBDNbvhuyZBxxAiPNaQeS8aMqih2ApU2u6AZG33BhZJg6AEqi8UQkHRK6GmL2mx",
  "key5": "3ByacY6GG2YX59WwjRGrZfjJ5oBXCEr852MqgmEN8KG5TWHeF6RLx4CaYZ1wbgA3Vh9do46FuE1zhYpREAAN6SAD",
  "key6": "AUBpVinxghm3kkeKKaF1JTahV7a4Nd2Q6QTfThrABdtY491kv4QEhj1dYdBW71sNXZWH5CYFcSDR5eWqwqqdpVS",
  "key7": "3Abi2bgTXKpkdiFdUFg1gqeeyobaFdvhHCS1EAZXpnSebjGfa6FdJi6EVQ3WShdq7126vDz3FP7mDTGSVcViRqBG",
  "key8": "4q37m2BodHo6aquTwgD1QGZRH1psJyRX1U2a5b1NMLyCsWKCLv3hZDC54kFQMdV179nyV3brCsM4FpYnxBLF1cVF",
  "key9": "3wnAEtj9LkCjnEH41P8JgEbgmGPrs1w2k3Rea4qgfQ41DzqEftt4YeHncfiZDFtyBitVequ8A9akubJjX7PRHchx",
  "key10": "57g1FhKCmmhJim8AcMtHT9WzoesppKfigrMh3jksvPeJscVpkW7WTFCCi9pbJbp6GG8wm1mpcF2Nts2NxonXB41U",
  "key11": "eqdM15TyRL4kCrVzL5Ki7r2v5GeXayiz6h2kFBnwyU7N2RUjTmyVixxmsQyuLzw8XkUd2Cs4G6R7WK3BUWP1PFi",
  "key12": "jW9e4WzNguSeQ9fJPLREZzqgL4bUh6bPnHX6ycQZmMJKTP78PXgfYuvAYtCBNdZzTjCYhUVt72j1YMkUikQSzTo",
  "key13": "2iH8XftvK2kftSmNn1w1DR68fJ8DZJgG9dwpuEu6rntC8ZJLXkGKHeBimspvdwj8ZAvmzbXohpDxfnmE3mQZcZ7A",
  "key14": "2AkX9PiwGAz2R37CuMgGxyJ6X9cU3rtbwGfDgVT8dGty7uKNvcfsTe8otkd5tYjYJ7gm4kRx7f5C3tutdx9Bnxd3",
  "key15": "4HxKczfpz25JpoaQZX9tTVTtm2GF3bQEW4re8MXxBtgqXwf9Zd9XmPoU26PPZ1vY51HDzEqdhDajEQnpyuURLfAp",
  "key16": "5YYLFmqkMyV6Wmsdtv3V2TmbktWqR61qc8ohSWM6XoSB7QbnaEivbn9UQZkZQ4E3sniS4gZXGsmvMCUohT6ZmUvC",
  "key17": "5mQv1HHym48a1o8X7TbdwJ8woaov3dgUq47XXB3G9PnWfQhouH2hm3183F3fT6oQv4sVk3BY9H5vR5xyc1bN1zTD",
  "key18": "4hdTjK1rq5jKu6e5uDEPUfmTLAVMbvT7YHeLXQYdxchast9JbPuYWZw6Fdzk9WqL8AoW3EETtkrdj1wHPCPo2rr5",
  "key19": "4uABkq6SKxGwo8raVtAb1uux22fiVAa3B8JapX7NbxPdZkrHHKSh3mukh5EmtXQcmNeujVBfjB3WxSmoYjTFepwW",
  "key20": "yx8iVKUakEJbYVhQS3UDM2UG4RTQmmWqRo3Rgk1oxsd1fZPq3WqvDh3cgiZseHxKCxVNSifh2x5Essj53U9GA7c",
  "key21": "5XpEHL7phcWWNHnbAVXZktkTQDQGWKf6Qys85w3z8wVPssfdJcYGXYjQnJ9mzkGNXq6jZqDLhys2TRr9UVLrfuBi",
  "key22": "3a4unbpS34RcaFASwbpJWAuinPVqXHaDkH1nLY3sfjaqssQfGGLRfMJiaXiTU6rzHQ9bnSVyCTFrm3LgjVtphQtb",
  "key23": "2WcHqxRZbAnxpVisms7R3vQ8FRHjhi36YjKaKxmoAAh6JRh59gfGkX3YMnUQwD8aA5NKdngDCjtUQqwDKtLfXfqk",
  "key24": "1CWZbq8NNyz3WW6m3V8ka31TdP9jM6LQoNvy3657Hw1tTgbhS7Sg77emwf21GCoDi1mUntQ1Ci7ciH5wdeoEqg9",
  "key25": "KZV5Y7r39wuSPWQQRYsoyqJp5HSyPiTjUcbMgE9mFqWGnHkyNvvebGjLgMiUURJN8XDfv8vju3NFoswwYX3ttv6",
  "key26": "3GqKZ4Lx9CWKu7iZQsgWfqjsjzdJbDNX3QGt3DxX38Kry1NWoZaz29gFvrVEHsxU4vgaqwoJfTjTMipsTX2m9oXm",
  "key27": "33uakGaJoMfJS8qn19gRubpTMTDyR8Q8mgbVLPGY4gqydbJ1uN8XovGF6jQufBJhEUfgyCJGN3AdkSbvTyPmSM2S",
  "key28": "8Qe5xANEGAcFqFjCJVCb7CimKGb2vGX4w7NdLe4W1Fk7tbedCS64wuzbB7LMWdaE5QLw1t31xGH94RZvojLWNBR",
  "key29": "Avb5UBw6EEWGsuHpLpnELX32RvUo7L1GavQi6txRfovTEK9NANK9NRjj4dXopeXEJWuCafJ2nE71EWreXrxtfAG",
  "key30": "AuCjdYuXwoV8VJvFnHZgoFntaL6wrCDy4P7ZGaCE9TncPbvY4tSkgf7UBix2iCzPYcSsuBRPyp8sP7XqCCTzUqs",
  "key31": "CRhESThAPFgbc1YPsBfkm5Nu17XcMnt9CJUxZkLydvmKKr1N1UCrvDE3dudozqV1FhLjmXCyCmvKoxESepe99oc",
  "key32": "5xgxNbAYj8ATZxQU1E2ieQXXyii96TghgEhqUtmbzyGJeXuT3SQLYtUEFi9B4x4wtRrXgWGEMTv2heJJP3kw6bFC",
  "key33": "4KPXaj335tPEMR2DUT4vi1FUSfx4iayL9XGNmB3fhrjrFQbxt8ceWhHji4mVvgv6GcvVBzrjLxhg3birLutikFZw",
  "key34": "3DXr2BwmtVi5FSTbkzVC71uqKDYKw1fRC4EN5HRiTgC2iL6gjDEr2bjvMWEbxHp9b7xqRN7Q91fzGCngG4p1SHZr",
  "key35": "3wp4Xeu4XLdpYgHNBJjHWdqDzici8TijbtGtNtUFxKuxL52i5E1fdFoXL2xhkMWmEszWJyuXVYS3VC83CLiT28Q6",
  "key36": "5TH2jZfn7VD3TeoXYQ9dyH1Y5LySEqL6ePSnBuWp5j6yeg7dt3HmYf6kAptRtNLr5w5pHZkxxaiLqEuTJqpfPXEe",
  "key37": "uR7uSb31qdkvQQT4BX1kDKpLNtDy4PXhFhqc8HneYHCheT17nyk5VefZ1bezhBBDFpqqfAYuZagMS2Lg5xt6Xee",
  "key38": "4ECFNCKCZ5UjvCbzMuH9o1xwCDCV2DAqU1BfZxPNq8ezTsTj9g7Sg7AWN6Khe22mn9uaNc9uAK8YH8yfBuBQbX2Y",
  "key39": "3oWETT6QaLfN9XCa8ngrx2xHJCoKWVGskMs8fgUT5Fztw5mDKGrXeLYbxY5r2FcrdftJiAGUh7KBCQ78N4gCj2tJ",
  "key40": "61oHeeb7dRoPW6bGyE9eytaVqerduhvigirKXCGxZNfNTeZi17ZjEap6BnjNirVA1xqzynWYfSDFMgTtqAxUS759"
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
