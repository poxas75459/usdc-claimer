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
    "vSigcsK7jtF4C1hdehHwV5tEu6Ah28rdR6x7yd1Y3cPZ94LB4FpXLYmMx4FJUR3R8GoDvkDCZHdQChtSqxiyMqJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "z24fJfX4XMXK8nG5FSxWPGroDpzz44eT9cbZhmntEdNusUciHw5ysB7rXvCxSpUCaQHQEmnfEZbyC9gNuxcw2UQ",
  "key1": "5UP9HE22uBUPjVKTvBhPpBuUU8izU7WYZG4byW2GukmUfbbaTz9YkVMv9yD8cS26TkGJwVDkY8jAgh3bEbWLWfZe",
  "key2": "8JE9ESYfKK8bNmh9uFxAMCJgdzjqAJbSPNaBkN4LK8n34hpPEKMvd2AZipxAatJfEhYiTctep9rFM88Em1CnYrV",
  "key3": "5JBRyxdci17XhCzKrCopAhCfGdHCo1FN8GiaJhVZNNWQZqRBu6KPnJycev5RbdyKhQTZrK6863KBJWK8ooGBvXzL",
  "key4": "2sYYPkk7erfot71imkB1xszrmFxsYRaD4iGN3ihT1DKrtea4vsvBWwFbCqjnXYWRBv2q6HTztZ4459dienF5vDYx",
  "key5": "B3LtMcBLbq9jcivBKi54EkF95cXvoZx14JiVJJCKJ4mhbsBJn1VKwe7HPRdmg66JPFpuxhdQHkC6xdXYbdj7JbB",
  "key6": "2WnAdYZ9x1Ep2xfEJBncc1LCk6afJ4puSfmvmQNrGuEit4m37edMLVUGEDxqMvWHeHEpsrmxw326kfCHvf4HDk4z",
  "key7": "5KieoK1rY3XjZMgYCpceER4BhtwpDAGP9aHemJoBYEUXbck2gKoGXt6jADwmuCQXGVqtYXmXZgMpNSSEjyGM1P6X",
  "key8": "4zBA9VqEwmqcjqZZc65STrHsy373D6cEvfop4AnJ9rxxFVe3owvFCeYqy1N8uZR1FxLGTfVx4qA1rpMQ3G3AyWCT",
  "key9": "4QqQm51wL3JuKxPHBnQj9NmGxdd9oyp2z5BAZz1mDe2fHEqEHTL3n8To34f34ZU274UHhc7hP3gWFM4meF5yQ1rL",
  "key10": "7huBGdh48utgT2i39HSvuHnZx7RjknWXt5TEPY4cfAr7humYR3KwhHkC9kK8DNoGsaJka6ypNgHqSAdqJtM9Evg",
  "key11": "Brs9zmvcKGePK3XmHKvfhZfVJsKfx22KeBnXPxuKcA2ncyjNt37xTrEeYGQm4by1GAMSzAy9t9JoqeM7Dgwd36A",
  "key12": "5Dwz2FrNUmkHjmhV9tMvvVjEXkzcCS1DkxQcRUmKiBngfedT2b7WhwjkwchKgbptUwHBPemfFVr8kguDYULKky2a",
  "key13": "5NeQm4BqakgvjExB1kUmmtPzAmfWjRcRfmWcR2YwKqvCTbJwK2oobCSR4CbQWnNkpyrV6HfT7bj1DkZPtBAb6qTT",
  "key14": "311g2mPizbUyXex7dV5hJz1Cp3fTGFtUasjMDLKy8FU7RWsDSHYvYK3mLGaqmroVhKMWsrXS8FpDQzuQuEoJKuLN",
  "key15": "3taH1xNGEzB14dCwyVTdpXtjWuMzvvF4Rs9kCwqpM4bmaH5y6f5XtLHWMXy1abg4DFmSM8kXeWaNXXKZaJqpzdEo",
  "key16": "4eYfx6kiHwtknBLyKMsut7s5HQxTB5szn3fN811JebsHyfPaGRXYoy3oFJeyQogcTwt1Wa7Wvkq4JPi5XgxMGHGx",
  "key17": "4RWJ8zNtUkay3bSPcW2Aafn9nCxAioNcNUHWZGKKTBVY3qt8csezygbPLbznuR29MXjGJtUYvj59Xmw1n5kLCpTC",
  "key18": "qSrgNY6NoRCoMxNaozQgrHXuaYUaEP5tSmSN1mPruWyioGVWczvuYfxdCtvMnSPqvEaGd8ggTF75D8pBdRrXB2W",
  "key19": "4D13KBgYzDjC237mcXEFTPDbr451EbGcj7L6sJDi3SXuTjnvQwdKiBrBsd3rS8aYR7ZhGCMVsPcMq4sv31nRHhEo",
  "key20": "5yGXBHKHur5iV2iEkj5xmHHXG3sracacgwFB6PhbYno1LbNnXk43AzAbLw41DCXi1fm2SKoxmLid9pBdh9H3rE4s",
  "key21": "2wi8CUMyHz2LN84vwSB2xAZU96r2WaH81LhRhZS9jN3ng6SCjR6yMquASN2N6iQRdR5jggmaMXVUeUfU5jVJy9JL",
  "key22": "3ZV4iz3o8hoU8AthgkFbRAu6DoaePnQHrbkuDK9ZK5nino1ep2dnNFpMmvq7yehHdXW6Sh388xFLBX5fhSaHRoN6",
  "key23": "2fp4zi9oDzG1pxpUDEsK9ZMfGGAwQwWS5j9iW6HrhYjPSP5fQuvxcQWZ4njuWmKsnzQu6QaW4XL9fHhLSFQmrBfp",
  "key24": "4EtxzCXnVAnhDLHk4h39HttDycXf6sGkXkUhc69TJykrhEsqPU2PwenjdT43LUTFg9mP9sQ7KSewRU67FsQ31Tou",
  "key25": "nynhsgMx17cXusoEEM9FPAPqyLy6cck5dwkNw1YLjYAaY5aePoffUuJxqTuJQQESSN7dNhUzNung2sETypBbbCH",
  "key26": "23Yuu2HNWomDbrX3V2szv4bs5NvfKurtM3o6wkPqYgd8LDDvfR4Ex6ZiyLNqkwmN9zyeo3udy8XMbv3dSNkULv37",
  "key27": "2YcJ4yVLU5adwSDgPCu8CACYpv1yPSDW6ieZWDQAL53r3ETU7RQLzZvQjCgndPTbfsPx8CdNHcoWxDNgppKL5SxD",
  "key28": "54ZxXXEePay1E1WEChpC1yStDeVGL5pKvcpxCPLchBdeuKnBxCkDHBejhzRVKVNTYsr4FUtsGcjRtbDtLR8hheF3",
  "key29": "3BeDA8gXdXptSgzfqtcnSPAksVEEyJzx1UAdK7GTu92zNbbDjwFZi18dXThsyzZk59viT2v5M4VoB1nsGMcAmTZe",
  "key30": "aR1rXFRi87Vw739NdGWQefyUmatZi6aCxuARPaqDks3BUPJqobrVgedibJ1DP6H912APsba6md6xAGKtP7ymAu8",
  "key31": "3wNmh5TSuxbyWHdz2cCmTfyX9rz3HEQodzoMUt3Pd2hc7YzoPpWCci5UMRsjDLCtRvc8VS8J3toLHv2gveXhHo4R",
  "key32": "3bYtMPvmtiy2oGxq4hgWgZUiGb1xKsWjfJZM9u6Nv6uSDQRFKmQEyfCA9XMkusGqjCRW6A5HywMDFPfFKvW4U5Tq",
  "key33": "4dYU8sb6PkSzbwx2HodYwpAEvyHtR6Bhwt1yEo5bp6CyfCkyXpJ9bgM5dgHnFvCFD9E1fAGF691i93VjcstFKL22",
  "key34": "5LZCGee188ZzDnJ7d4cKZ7txWuXoVRAmy9uurtnpGUhSt33KFK3JJYtNqhkYQvHfwfkMTqhJ7vEWga1TGXqzQLxe"
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
