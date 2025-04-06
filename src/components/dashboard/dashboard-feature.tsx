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
    "4eaPK1motJohRkDpZGNnedfsyMhuagwptTSqzeT1nfn7qrGGtMnVDjbQiZNy5e1NFnvMgRkwLp1ndLugnxpZixrB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uQxsDketCJPCq1ZAaqN1HqEFSvMxM4G9MfYS3JYZuLpf7QU58yhP5fcuwhhv78LDttEALQGQsLkCYCDHrY2pvMb",
  "key1": "HH6Bd3PPA2zZ4DSPMTVWv9E2wzcEvz9YsTS5bKuECbmSNiNSd9WxVscKF3Nmh56HDApjwdqMwtGMrFDGBqD5meB",
  "key2": "3NFnRcBPVL7hb6srFQsYEdZTtJmcnSz16T3rAGoJgXjsCiXZwC9CFDjYbLys3yibnpmC5N5iBZNHanGcnK2sqGDF",
  "key3": "3yT22atsnfgDQyFuFr2ZSEkn3KrsmYMv6N1XXTvKKgLgSCTfkRmK4S7RBi1QkU96JN9oE8BNBjEPooAZ7JQErYcS",
  "key4": "27TDeQDVaeDoWvsdyQoqNyKAJCpC46kZY338WrD891Y5gnTZmx5Dux9j3MVexNAb9YjBEpkddDZAgYtLuAr8uiML",
  "key5": "64C2u9FwsUfLSuDEGVoGR6EA8SLwAebiTu43dgsd44DnEh88EzXgXi1AKG8cHZuJK12dGLvcr23c73uX64ABtrfe",
  "key6": "53v1JkVn34cs6JoN3y7jk1hGjFwE1PK8ZnEX6UrjpMzddfgXrTYdEu3Uqh9bQNTP58HAPqGN5BvVNmgWgT5vtHMm",
  "key7": "5mWkWDsbzteZFtDT4GFqQkRwwons43ZatXzQePR2sPBiNiqWzEAAbcBi6utX9SMVBTDwMNBhKGks4uZJvL6xVy2d",
  "key8": "2VK9GkUChcKpAm8dubRmsTZ7J3QPVZaWPpavhqk3qSqY5G2abV9ek3c5auaTFUfPDXQLX7eHiX5FDC9bDBthokgV",
  "key9": "4dfmUVWggKKkfnyecz6hzLmEj2a1RCe3c7XSFaz1tMygukRZdg16NGoVtP6qGqyH8qhhU49Jue2qyYEJMTp2tEq2",
  "key10": "3Mp2fMtqi4zKKZLjV9zDLvvThYeJewk26fRQAfvoY2wULn5AMk8x5NJM9Lk3FzZuyG5zZY4RbtheoNzz9CzhBa1r",
  "key11": "5H7QH3XqidCJuTfZVrEfaVe1upD4qEUCAiVgAC8H4Th2JCHeateAZBMYKoNJCCuWDPLnwnDGwL4cXu48fXi1MUcs",
  "key12": "hGXM4bFZgfojFYwG77AoziGZir11Lzj1uw8d7LDMuNczNW2tvCfp1WbaXb5VHAaJKeGMpLfn9xVNQg6AhBUtz8d",
  "key13": "3ANCAzFF52b3HmMhx3JWsuLm7ZkFornwAPmJG2N3oU1YW3YSi86ST7PU3MCLgS3KQtUvyFbY6WVFfTdzJfFYVBtw",
  "key14": "2qjReRq1UgicNzbHinE5F5euVYvfKttiXXJX5sVZyprMxbnczddQoZe4g2pqf8qEA85gqQn9JsR4foiS4nqX7Dr3",
  "key15": "3Yd4VdGihiXj5GnW6uhy3FTfwLik9QKRckhwHpCPQBZ3fVMni6ULUe5mp4jdsmPqz4yYb3BR8awhAdHyAyX4wcvV",
  "key16": "22UZzkKyAcgEeaRD1eekPUXG6JanPpAJ76Yv25s23Hcnu1ZFshcWJQqBwBLcE2PuSAJcrbFuxSBHWNxgkdWBMDi8",
  "key17": "3mVrrRTv832gayKTSSBibcSCPdNUNSnCMtcP6nyugQTKYUkF6zbMRjp2XpCbU1XSWod8ybHGcNbEomZY4ymUEh6w",
  "key18": "4sDvLx2WR1ah6PYUWMYYL82zv3a2H6Rk4t9sTCtztbB6XVEk54yScG8jxJCuij6GuRwnuAqaSEpwyDNyWMuvpV3H",
  "key19": "5ic6oUQdhunfNSRPt7S2tQ9eoD7wYmMmXoDkbbarP6Vso2NWpa5rVewVJwTrZJB5DB4SHjBBF3Z3xJJ4XeKy9CiT",
  "key20": "xNk1KGqJsjW2xpMF92kn27USzzn41uVBEewSdty7B6CHncEokezTCGyK2YHpysCgd3qnXpdYnmQmqPusHJ9SpAV",
  "key21": "4YJkVzw15oWVucRyikxCManj5oRwxhg1FGu5i5wNr28Zxuvrft7JuhkpK3VtqoCrmLt9jVaKukMmn5kMc6TCQYM7",
  "key22": "4SB5JYmT296r7TSdgmtBjLr5hFNdzkHC517N6n3TwqxZLfAkvNMZCoCK3BsKWKZCYvatSyeY3smtQhLk2XBs6Tsu",
  "key23": "2AVsAsibH5ZwVaXwLrXYKPuNNJ6MkvRpemAdehwdQLJ2Y2nzGs5uGj8aVnipodYGVxepz546EicaQYfYKKEfQ7T5",
  "key24": "Z1z5VRW8ZHDezt96FmaJhEzoY43DaVuRcAfopgsN9YeSKFRpakFg5p2BxrWNDXkEkCci4isCrpy8SqkhUd4DqfW",
  "key25": "5mSTnkGz1S5P51nhPHLERj5PKeAvRY9U5ArNhhqMzWJcAQnzUBzF6v6amX7amrpLb1M7DHaboXURmZ14adjfAMR1",
  "key26": "4o9p5dHRk6FGHCqaTMGyP1kUEcDDLCx9w8AqUrQMMPGjLXMeBvfMBkpCPGBRKuFuM1SKumLWeepGZHv6GQ4Mg92p",
  "key27": "4LPas5EqAnLUkuDHuFZEgwLa3dyV53tSRVynqVa7mkfPDKppTepM1QwRfJHH1BL4nKEUvwmEXfmMoLU8HQWnpq7V",
  "key28": "2wpKPzNbmJtuEsq7KJ6v14wefA8Lokx8M5726z3qAJv6CueK2xginmMxpUf392j92fnhw3WVm1QGTufVxHjeQNxV",
  "key29": "5q4A9PaHr54yzJTuZutmhH5rP94SFVwdhD2hypMdcvu8aTzm53tKMwL6Wbf2Nk5HtkuUZsWYYVwF3Qk6U7zq3R6F",
  "key30": "4qaLzgqSK7FmGJKrCb3MorsgSEHQQA19nxkvCMVYPUyf9t5b7GuG4j3w2iRvJmu8u5NeNFeJXSvquDHs1Kczz1MF",
  "key31": "5a2ZQ5HDpkMse3YKvbBrHU1u4d1U95mjGUUVQe3kYUoQo3vBKVDUgD5G62AE9GjhwtudfptoGx2Bqb8qVUrLkaWx",
  "key32": "3oZuWjZv7daHk5wezGZ9FLxXCdCqfeVFLTRYmFwUXsT6egB8AyWZL5gWzTexnd4NVDEkExo4u1ovZwqgYKX5qMwc",
  "key33": "2LsuEJEAqDBmeaCK6DnDDNetSfiJEvcgWJjdxCM4TBQGM3FyAbb5VJkECkf2xqQY9FSixGYHSnN5Jm5sjamQ2JPj",
  "key34": "4vfYVJnK4sMtEFR16WcN4Ab3o2N1NinzaS4mQyqAvBwdCNuf4x5NNdC7dXqirVC8BCtFR6iZdYwkvNRbAeRNQ43W",
  "key35": "21tGPi2fex6pSFoBzJEdNNjZaHnKgxCkNqETmrxsKKQzGioMsVgmyNKs9xzJFyA2yyz2urEfQRWXY6DqCCM3Wnkn",
  "key36": "2hCu2mkMFQcxo3Hiuv3DVGRnFdnBtnF6LSMhHnjWCUkiruyivWtze4MBaih9LfFVmh5zRAGKkh1M1DrtV2sL9BLR",
  "key37": "2DZjSeq1S6mkybU46cMuxSJdKWRYUbEKDeCtFDiCe9NxCVHMeHRFZNba8Pu3BX2onPSdGSApdZRBfqbMMJQi3AGw",
  "key38": "3tY6bwCdXy5NNXSwa5wHwZZyh1CC82w2FpU1N54eyeZe9mSzAEg8mG3RSVjSKxmPRe2g8BX4V52qvY5eG7o3oRrR"
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
