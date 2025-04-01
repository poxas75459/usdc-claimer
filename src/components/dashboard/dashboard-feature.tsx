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
    "2Uj6Mmefp13SwjpeYAxPg5RWR6xws9PM7ojecnkism2qfJZ52cwhS6przU382LhNkbfJmEixxFLp1FsvuAofKZ51"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SkziPgKzA8kVFHQ9QQALzhFyWNa8ku8ZmQRmCukmZgG4g22C3riyQqgFFi5nuqtuuTwjJERw7UBfmRhAxouLw4V",
  "key1": "YnzwuQwH9H6kq5eWwLaz9PZmdxVCfgoQHVXFxrQ5Xdy98nzW7nK1zaDJbPis721VHLwFMgdTPgw9N5hMM4Rr3AZ",
  "key2": "5hRPa6fHUrbQujJWompJmjRuYVLoDQAFPBYkeqThFXBWwsPTjK8RJnAXYmwkWMbxMHNwsvnSt5FEVszhENkuBtE8",
  "key3": "Hj3kNmCMutFRTrobaLU5sG5bBT3Pzp3yxDCYKQ6NFpYYtR8z39GxHe9sUQaPeggGXkUueYEwEhHPcEYk2n8f3X1",
  "key4": "4smhdREWtAZ7qXWSHWa1BaG8ev5LvHX69airTeEK7rAxDUj6A71qXroXYXwo5WveGQHP3nodFW7JSGs1s7R1d6t1",
  "key5": "4WCRySHndMbcMAYUJYkKSkZAS876t85ivxdbTkfpZeaUjis97dnie9JraS6dUbDodByJb8ChZKmxXcrXffthdwF3",
  "key6": "PXVFmeiTskYF3uyArtLTiJQezWdV82EFPJ5LA84nrQmbA6xjB5ZZ9QQxF9qkScNJ781VeKC38ZFZy3bXJnhc4oT",
  "key7": "3G64w99GWCBFxY2WpScCEEsnK4wtaZrXHm4LWT9y6JWh5zie62o3dGER5vz7MUHyZaLK25epGHNZqUAyADd8k7r7",
  "key8": "2FbLPi4W6pYFE8fpHyy1SeiCUhEyZXTG5h3i42uurFx6ot7H9p8CgmUNiTMTXK4G4E3NrBgwDEnoELhFJY4w5aVq",
  "key9": "4giw7gHSo3zPsfhGEP7RWwuRtb3z6yDrahgwwKmVhFRdQqJjsEpQZ1JNaU3PpenBuWCWJcDcPyx8TUmJTK3z32d1",
  "key10": "63fKWrjcoPyLomuhEKfHgTL5LMLqMRRVcRFx51kdga5HWqNHLY2pPfsxzcX7tcc1mRxah7aZJMrX2P3Xqk3WaXtb",
  "key11": "WmNJjvwD4F9TAAuVYi9bBUdWhb2FSTprE71UQwWmSwwptFbZNqpDnWfiVDkidPq1BL28EPMnaaqmtiKSciwWWzP",
  "key12": "3sxdXWALQBsWdYgg4nnSYWwdqydh1Kp8Ho6ZjGNzdbE5xsvK68z6JXUjfGXSoLRGLnfKTs1wCz2JAFJL797jfft",
  "key13": "UP5n3HtNt1Zzxvi29zY7Ru3CYW2CrTqkrogKwm28dgWxeFjLecwxdcrg1PErik4mzwRFn4YTuDFJ17eHa8ZHgaH",
  "key14": "6r3kNiXCWV6pRQapLZwgZoPMH7mjhtT7Usv9PmdxwJ65obJMkfsBNgSHsBSZXovXFhnHReSjSBCJMaiiTkvaLVi",
  "key15": "3ZPfT8G2bGhVyHbUAxT8YTaPcyfFAATKTge6voMxykJLdwoULCiD5kQqC5P1h3XTVEm65J3QeWRN1kfsYUxoApXo",
  "key16": "3ebxZSDxQogGbM4y7GoxAW5jMqKzzqPZx4YRThFGrGZfbh8nuPdYotY65pV7NkLaFUA9a2wQvpexaACugTRGea1r",
  "key17": "4SkwBq24avv3iC3VyzGTxP5kykxxjGNpWbm4qEpPJotNBKJYHC6wfRk3sHgqGxs2xpsLF5dj7jy8s19aXqVj3X5e",
  "key18": "M64aZiZDqQsNvSxxtcQ3wRrmFTX7TBVB8powdxQRrwr9ydtSDMSpUPd5RFaiuXebeqmRhHBMbDH2Xguxu9hmZRN",
  "key19": "42DFDXyu6Xk93YjVuEPrTSGZx1y9CTJaYy9mxr7Z1Un7TZrhYiMfesRPFMc5XMoDGk975ijcfNvrxUTfMKVV4jsD",
  "key20": "2zXgim43aWEqNk6JYb7vTBT7AewozqLMap2jT7qYHrT8nxmoWKWj6H6up82jtNwrdJbAqJt2VsiTBVVkjJPYiaZB",
  "key21": "5FnezQCK7DdL8BhRKujtxzvQu9w2zeq1NZwsJRVCvsR9CpsGgsQ4GoPhXy2AL7LPs9fcpAzBi35r6Hch1kq7qfzw",
  "key22": "3i8yEuHP7fiW5WNd97GAUcu7yEjATBnFQrFXTRALy4PSUqUoTnxJA34nF2UciGCyRPo1Y9LzNnXyUBTZawMeAGTG",
  "key23": "48jMZiAqwh2Np77NZfpvdnp7ioAmTWtRNLhge5ZpLWFmwfwHyBaezQnaUxgQ4P3c1NJQ1bHHBvghnMiM436W1E44",
  "key24": "5M2YznRpysgTyiHGEa1ZVp2QSGJaM7AD75K5PVJTG8vd7ZTYLNZYo1yrLVUSyajbN8XfEtQQtWfF7p1QPVSV34aJ",
  "key25": "5WqBd4BYhfs84mzT6fXn16ewuWy7xSykLK71XRQ4ETsQixUTCc5zXiAhXCwhvvcKgaPYKugWBTKGohmTzWzQeP3T",
  "key26": "AWUcjiHm2YM7tWCcBDq1nzyN2EgYBFnVczuCDDzNZjh1R2oZkUmY7pf9u3VVfczPfSj4gmV8kseX8DyarPX5pBM",
  "key27": "4vJvUmCpKUhHWd6FGWgHkoSW7tKKU1KUNN3BrNEG55YoEtnk7qs6kWj65MRJQFq5bJSxMUn8hez433Kv9gynSqsv",
  "key28": "2odppCHwS456fvmRp6mCT8irzQfD9MV1WEyMHB3AMd5DyYad1memb3EEmgsaVtnTMV4wYuGeuJGwPHmCkQWWFCUC",
  "key29": "oT8o4Ac3y6i5WrhEuHGTd5T9fRzw8SZ6u6Dg8o95R3Co4c374QJkGFi3vQzFLaQjYf5cN3iTKfYWS3dmsSxy5Ck",
  "key30": "2Hy3msx2vn43S1mPM3oAhveFqq1mFgfmUrPzfDwu9qPjWyJzwmvssAzbrKD1PaM2sAhZbEsdW9eRDiWPJJVf32pj",
  "key31": "4qYPFaEj9qNwCGp1HJh1FFi6WoShSEDhHhDdU9Q2NnPkehDTra1VTv2drNtwXZdmyADRazmy1Xv8Ume8uNv6gMZ2",
  "key32": "4itF2ff2hjk3nCp689aceJtfJrckYHhxtqZpPPMZxpU7uTnxBwsN84NRbqGNxfLZ7pc6xdPxH9tAQz4wGqehdoEQ",
  "key33": "GxFYQEcM2M3XN71wDKRY6swG3h1hYNnxcfoR6QGL3vnpmsu2rc6X4bbePEi3coUxwj3iW81VkdkKw5ZPvf8shuu",
  "key34": "4uoZPtuY7m5TdArQVwao1gS2UtGCcLvf8AzkutUYGUwfb2qg9M5ECPk8N7Vks542DeNFLNpyHchfeoqQU7FoPoS8",
  "key35": "4JfjRsQRy3wsGu52pDNi3fqxtYu8bYxmTrhQZFvwTLPu2wozeKqAz2q5XF9mbb1ascYNhHuXw5Vivavrui9Vnaw1",
  "key36": "uHuwMvgBp4mhn7tL8gE1GV7Q52tNgTgfLc35V6NkqErq9d7dYZN9VcWB3emUzuKkEnAn8uDs6Rus9EQiF46kU8W",
  "key37": "2VJH3n8FVbXGjZwnzxkEURcr3N9kCxQJJgeXgTF8gygdmdxVGfrRru2z21SxCsmv5413AR9rkpGS3t8RP7SCKyPP",
  "key38": "5HGC7fDsvcig4aK8dn3xhUeU47dZdqjGrJsR7YgFFGN8Mrs32UVbJ9q2t27SxnH3HFNVH2NKhYFzQEi9xFoXRTrp"
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
