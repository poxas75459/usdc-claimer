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
    "59SEkdCkgrjNPBVpabGpnHwY4qFpdthd6w3tVy3Z84F84KRsZtYao86wyQXXPwUJdozmHhnY1tPaebR3bf1Wtqoj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45TnnaM5GJ8oGBnCGp8pzxhqyU8SgLJGpgh6QbqUnVVgQehNwwVidkzopyn4w4HqxydzuTDfdLoW6DE8uiX6G42x",
  "key1": "4nS3yAn1YKwDkXzT6BQZvGcsf7xmnVxVY6xVMrkwe1btRJAo6gEVk4sTDZy9kRMVYgbWfMrs6CPodnigboEvkNUr",
  "key2": "3MHuW5Uu8Kpx5hx9X9S1WqAT7RkadFgBFhVShvye9nwriqxRCYi5aURrjJ8x8aLyvKPzkQMtNKx6UhjUqSywtsxx",
  "key3": "4Z6FcHkiWgJD6QiHB2DGrCsVQuJqhpL4kNUoxWCtNzpVVdrdXmnjuDodjbRQUzg4R6eKpnZkjYoU6LnsfuueVPyS",
  "key4": "4uRgZAXJY6tZAH56wgs4ZmroYdZYQ7aX4t2VZq1DQiofHH4rnVa8i21GQfZCieRrWFuAeq8PpqRF4xXib4HAa3Ng",
  "key5": "4xen4mLB3HutQ677NCGkgyGRexYh2LbuE2HL9zqT6yjNJ8hEAi57qfmM9NJido5U7N6AANJFenSQ8Wkmw7JMYWpP",
  "key6": "3P8kRU6JHAe6XNALmoZqa7PASywKmJKujqX3p7Lti7DuaNv5USBnGrJWjxEefBjKFnZoacyReq5pVJSC8W8E7DXv",
  "key7": "5jY8nuFpdcGrBS9zuGLbP6AZHVRpxMCnJts61Sz7vmt2sdMrS6a9wDXwZRd8FYB3NfY5R4oUH1cyooNXQM2Qy8Ti",
  "key8": "4b4SpN8Dch4tnuHrK7ULWBj7qaRfiCGZXe3LW4qCb9Fb3J3ndph2KgEVE6naoxQwnXCbzjKx9XFX4ChAHe4jnxZ4",
  "key9": "ZaoYrCpidjL2jeTUzVmBvLgE9FiKSv5pto6ShUHjUVLGE7p8iA6rd2YtoeYCKYNo8DtPpDuuuL25Gqeii3U1C4y",
  "key10": "q7oVzwJHVyP8cNcALhQgb1S4146S1ZEHrj9h6kNSwHf87C8UsteV4TmhpVpNTmvY2kwbAsFZ4wYRWShQKjS3QaJ",
  "key11": "3PyyyuDgubukLYwJ919wR4qRha3MTBiPLnW9r4mfvsiDK1xwdtA6PoLRhyR3ojiJvUP74sDo972vLr4o3vQjoxxP",
  "key12": "5Y6DneJ8pFFqJQxgLArJMKpDjaXQVMezx21AgGfSyjW2ck1Rt7XXnnZ1rT8hsKV5WMKv89jnUC9T7msL75NtSm7d",
  "key13": "4zYHXuDsfzmTPHd9p5GGzWA2PkCxRWYHkKQ1rdZibim2mwf2sKnNXM7j454FdQNNcFJt5z2GkerKHpEBYL55xvaV",
  "key14": "3WTg13923mKnaK6ku89zXZLoTUbRcJ6PJ4U12mvetA1gEaaetkUFJPSqQFc9VC4yfCgaza8LnUfVSiqdV6y1bZFa",
  "key15": "5e9oTaCd6vyLwQYMQW4VhdJnJQXMZKHseTFwyb7BjsNm2Wc6syzaLhxiG7hCNTBPQQRrKC8C7fpnwAqgzYMyLERH",
  "key16": "5FDVrLYJ21zuu9rCWa9JdZoWyUFsAFnk9JHrvkK6HbfwjXushA3WHnxSzBMHjc3aa3b3p6goP8ZSipZo39Cu6Yvf",
  "key17": "JdwNKFNGguTzvPF9j3u9LoDVRm4Pt4eT7aTNGLN4kxm11RH9BQWUZafT8ZcMbHSo9WLVKZ1pjyZBtGxdb691CLS",
  "key18": "EuoEQqXhZYjvWSdw1U2ofjWwmYF1wfc9YpQqBnNKwcv1NiLcDYMNyVxY1sTuj4ix4zSDH6FxTdrWwbzz9w3dNFU",
  "key19": "shetV1oqGcKucYNUJs2xgcCYoaztd9EDnXhRY93CdiBYVTDRg5ezkbV3RSEwpQrUAXNpTbb8ckcBfFohtXHpPar",
  "key20": "ayvupYcHMbGZ7wGKSi3hupgKmnCf5jG2a9sByUVh7qPzqHo8YzpwssofFhrugv9t5WTR8iFArzREQhydGFKjp2U",
  "key21": "QUAwKJHyLJBG4vkr44Pba2kWqy8LNAXYvPQ351qzBcRmzFXF6pLypVX3kbaiBH5BiZbxYBTKViXdDA2GR5a2RbT",
  "key22": "4UERqpWkDuLCAdLBHZiy99nz3TCRi6FqkRhojs1tXPoBjHUGN9iKmrSHvC1MV4ZHXYfZJ6QSnQwNAkLcozMDCNzB",
  "key23": "4PX3o68eWvVeCEXSh4MpoE4sWMGnHkjaw9QLSh3pXZsvxiW6hPnaZvTyF7zMM9n4ZSVVg6LvGyPmeo6JExofXfXN",
  "key24": "2NtjAj7G3JdVhsvhd37SNaYKwhBM2FYG9GNt8ihthW7AdaLeT6XQ7g8BDUCuWdCNGoJmj2tYYktpLYdRcWTAsApH"
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
