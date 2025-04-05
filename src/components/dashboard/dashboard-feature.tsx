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
    "4UWZQUU8SQsm9BchcyN1Y4cWAZHWpBSkR5Ee8NAsKWHdK4fTJhytgMXzgbNY8jvbCSy2bjjQBtxtEemQrN24g1oa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48SjEFwzVhD985vTHXUVmiwDkonSAHK1Vf7rT1mAD6VxCCGSFdmeMRYhkeuwirWprdZ8rTGTDxXCD9JTdSkCtWod",
  "key1": "3FV9XyrqKpoQtVGz5Zwx4pQAbadvi2ZZZ2XPWxpH5Nqk9aNKndhrpAkookGpiB9c4eN8EJBC37umhkQvFiFoWh8h",
  "key2": "23rTp4cZWLf1Z1h2PGxzhDspKdDL6hZDDpS4xUrjpshTrNRj2R8k7HPPKr9vGr9eAEATBQ7w9LLxRXoWyshuNGAK",
  "key3": "2EdodKTpw8Ex2bMVtocy9ssYABy5bgXHr21UN3bGUuQjjY8ciK4HdXz9HFXUTG3FLBBfNqBy2VD8JSDhypMMsSN7",
  "key4": "4jGNZMM9HjKzgCwebd5sdYRom2BJrNvxnTCQZV39HpBeBf6oRqtFiNqcuX6Q6Y9N3BrKETKMGGFJVQnNoX1u8XVJ",
  "key5": "5hfzWfdWonaF4ThyHeMF8vUpATtYbraKnFBq3U6mi75iqsQjtgDc14cwcDTqsgcxGuwbUDiCaAXW9MTUEbcvaUQE",
  "key6": "T16Z8P3wLdwZjnJ8NqhJR8qPU6N7fyu4PG7Gbr2vYcsd1C7UTwP8gxRV6CgUCTagiMfhw1Kp2qXZhrT2afnbzTi",
  "key7": "5xkB49w2ecjGjm49PBvpYBuk6SYFQiz8vM3kNtbVdxyd8NEowW3bFzVCZL5rXpqhcF4ECjX9KSDj2yuTLWVg7Yw7",
  "key8": "EnmHsDLbAtgzfKWgLMAsBBUbQvBaUw93riAFq6jmZX6oEH4n1XViGZC3LPSeLX2jMG1vbCf8jgb2tBiZdp1W79u",
  "key9": "4QRMvKTnW4y4YYLn5FHajSdLmGkJEYhxb6Cg8zAUc23bdYtun4wuCDwmWmXtdEVcq69hZfoUVxDfWZescrk6YLAp",
  "key10": "3RDCcKWnKu3MnHLAN24Uc5pDZYNy1CQvKBwdpnDLEfo7Qgiffp3BaYdFgCY8vAGytZkJYAoAre2tXxUt3bWb8PDX",
  "key11": "4eXNUeXWtMkLTV19uMVK2Q6fdXkfa5BSW3SPvDsvfSBwWLM2ykMZ8NvgpBNy9kWia4LRBXgu6U1ysCA4eVQxEbx6",
  "key12": "3fpmGJngvcJCQeC4SBxebhwxJuYzJk7RmhqnL75KwP6QraU8mwN8oah64Gx9mYGx74zhD2Kkw9znUyN49swmfVj4",
  "key13": "2HVyMH2DjC3v72ZF16RjK4hjhTgnuNnKvMFNbcyzJTTtHtHXRN2UNvRZbhF95TzeKcnN4hetAP6ftw1ziJrupeQN",
  "key14": "3Rw9vgALoE3GCxYKshF87vCwX8Y7EML5UBKRiV887kLcffeXJZrxJnHneytQskrwY5Fib4G2dP2XMJGri6u2wLfs",
  "key15": "4NebiBAVT2Qe6vRVuFaTheYRDtJuUFLvpQN8T6wHiVnHbKkYXxpbWGewe7vnifn8tz81SJXAxwMfQvkmoFC1DmuZ",
  "key16": "4VapZW1pKMfHBLrp2jP6bbzB3KpxqC1W8UnKU6PrTsXdzM7Htti6ynb48DjhdLZMjBwUhMg6iKt9YnqWuVaXZb9J",
  "key17": "53MJJLPYSccFahdwxxX6nVud4Y8YK5FiFxvef5bMeDqQHYDqFfbP3FmfRjdRpW5uU7JwKefNB8NCeYECkTmbms21",
  "key18": "8N18B2bvG6SJWAnU6h9FJiJb76dq46fLQe2o4jaXcCfbsyGSCjSW6Qvsv2J1uZUnbpmCo1XT9TuAwJtc4v7U2z5",
  "key19": "4rYjuG8NyZVv1vdN4DV3Q7JQS9Ame1Zc1Q7SQxWfJdVqNgHzs2Gk9scAfhamJP1d6UgF8U9ZEr1ifH5vy3fftTp3",
  "key20": "3nMkjmNMrw6GtWwXWJ477ip2AGmy3kho88tYft2FLzKo29eFEe2hNA5ViYDDHnEEEPBdF2H8xi6AM4NZjte7nzkr",
  "key21": "5fKKXpzBuDfF6PtR9gcry2RhMTEapGjXzavQwtjVwLfWoofd6BJNxK94iRxWZLVDm9mtcb2WF1L8tPsquQ9ChqGZ",
  "key22": "VdJAiyLPgFGf3tWKSubMm3yy5mK5tuPmNC8t7P8FNvt2bX347CnGQM8wAhk7Ri78aZq2HW92cs6J61WbbFBth6y",
  "key23": "2LBGBG658ZUVEVfpYVuk65J2mokCvQjin1PCNQx3JERDuS8VUAXtuQEShunZAebXBVPf5YALcEFi7NwZGahV2ebS",
  "key24": "8i9KVgCSexT9p5cCs3bN54RVdgn7Wm8CnDd61HYDDjAPuqFtvSVmy75TjpjzEaNj4VU8gzPXJVFhkk8QH84oN8R",
  "key25": "j1jKEYLf4EGS1o5JJ2Ygrqgcaw9U1w5HoZKnRk4nR88Qspn5D7SFd4xMdUWikXDiJy6b58EaKtE6mG2TUEVhv5V",
  "key26": "3tt5qMejN18j5CNeqFUx92s2sm8Xf3uvDmvou5qHinwrXLkN2Hw6xtiAQkt5xsjw44EGnUDfWCUkHMMjRv86W5Rw",
  "key27": "ofNuaRTv4GDhEwxCFHGzgUTWQN8wQrRrZpM2VBhnPq9isEDq5BX32EYVwR98VYvFZVcHxRbSUigmKXtoVpnAYp9",
  "key28": "32nLqfvNBQv4vFBrfdg5kBwGVETVWz7mY1XrJCD21Z9TcV2iSX8qJTQSiT6MQxVSBjdwDrxhoCbwk2e5CXScvViE",
  "key29": "2bnT6XXXCoKLYAjdT5d2t5CmNjcJtYz4tHGy4JeJSkJf4KVrL2gdj4uh5wPFUnDS6YoAV8xyQzRQQop9ug9w7To1",
  "key30": "63ge1a7bPsUsg4MRcGPDY4YRU5Po1kSmq21AKBCpxqeKzctSpEQEZtmjvduGTV2GuvsDh2fMiBLacoFEW3WY7Sxg",
  "key31": "5CPHQDbzyXYg2XMbmPRDUTzM4Ts7WePV9gG8wn1NFjGSEV4cHreGDQMTW13imVzd1Yq8zuVKFXnri33qzvCQioxQ",
  "key32": "4rvpL6eRSqi2h8ELrrAZGrZLsxL8UfKuVLeSDDxwt1BLxNn1n1afLM8QdcxvucgVD1h7gx1z2c8ug7U7uzR74hSA",
  "key33": "5xptq3kGzPrQRVP7GyQoUXaQLaJko8LdUUwELR5ZmEyHgkbKJga7M8SGZDnfqVdxQAWTapLsHW1Tk96fDwZF1tT",
  "key34": "5gr7xf1ePQB5gsccuCnNiyRCfsGnbCryR3TFXs2BvMSVqs695Kb1vNaMfJxc6k3oe9p4cXdRGirdKFhwMai6Wynw",
  "key35": "2zeUgijwaegJ6yG3YTi8cYfwWEeUDtJYCDKNkcnhruQSY3fH5xPihw6ubJ24acGqnF5KbsQ7ikVxJ5vBZXz8W8bg",
  "key36": "2LgTM6jpbU77xqpQcVDumjRdMvhiZ4GswCvhy7dJp6sysMLj63PWHFt6H545WFFZyvwxcLhu4ER1WKQtSx8tqEkK",
  "key37": "24Tb8A3eAreaRfqYxph4HvmU7L5qBYs4M9khCKoLSqbcZNPJBR5PxxBY4PAxkHcFBdDvKc4ty73dZ6vRCWd371Kp",
  "key38": "5ZFtZ4e9QArqZfx5ackovYyBZAKSRy9yfRtAwU5YobhtqnSKEYjhg4TvyMZ3DKvq9TCxMzh8ZmyUUffuBiwWejir",
  "key39": "abFEBBLNCLvWnaxU5JGLZoMTkk8GXfWnoWoEJoHU9rtvU9up4MH7DdD8NoccYRT1VNxAwVawsT6bsh5w4FjXLZx",
  "key40": "oQSKcotrfqJEH2kxT1SaFJ2z7iRwQgEP8evyK2nriGDUaJwqFBtb33ZSd8MemJs4tUJrk7JksTx2EyjM7QL4Ys1",
  "key41": "5xHrfJJxewVYw7VY6oi53HXaPp9ZKvQ242Fve6AEair2nAiYSk775h5cCYpZoJ85YwPxRQnQgTN9wiqpaVS2ZJAt",
  "key42": "2TxUtsdQCERf8hbUC9hSjrfbxis3L58VBr9Mo6NUZMXW8s2VWssa2rmmpHMpJQch4sDKR2Ty9hCWnzxSZLThAhwD",
  "key43": "2A8FkQn4FzH6japir6xtNyihJDy8tAQmzifrUZbj6arEi7sFQHLktPtChgXgg4x9ea3FBy4bgmYR6i9aohAKaCHH",
  "key44": "4gB5DDvJVz8sEnrRZVQPXEcWuYJku8MQ7WkPtNXdJXp753s7DQGu8997GV6yoCxdNRfA9gujsXxrfTU7LWdq69kh",
  "key45": "4XhnCZyE2me6BkrjDC2AVcUbBg4zs4ovp1v348YXu4MnM5RTaZEm78JNUnWtrhUb9ESkFDnMXTqE4a7zitftu8yR",
  "key46": "4h74cbpxjEjWeSSBpRLo2tY26kokoTsqhyg4c4qzh58B1sCYUPf6v3jMApmdVwqiDP5g3KrQGUZ9ixhVnsyc3mxK"
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
