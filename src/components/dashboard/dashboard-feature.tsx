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
    "5cASSepbmoCJaQ4BnhBGXMkipNCGKBbKm1cGsAMrsMj1M85EFfXg94eCruV5v6VEKVFChnwEdTARcmX4ekL2pJBF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oiZfH8FqNnZRnocHPRALzbzdqAiaGGtzZazieS25ziUTTiYBD4tK9jqpVNUZsCtXqJhZ7TkzzpX9CcKkMcnLh7h",
  "key1": "2jzChRV29t65x2bpsM1f8NjUkcFXW7rcnsdiu97HiLJNctVBHX49cJRR6sKADJ6U4CXermji1peg2sLY3Pc2wuHd",
  "key2": "4khqevLD7R5bUFFPn3aGM2sLZfUXFyEBsD7sazxrF9ucXhaHQF6gfbBbj4E2aADQXBZiYKaSXmhkwd1HdNPrJXPs",
  "key3": "45JQWz7spdHf3DCsQmqzqzJbVkqE8MtCJpUj7kbhNWR98TSoKnmTrhiJgN7hcvHzZfwY3XBrurogNhLYFdPupTSz",
  "key4": "49Hz72erfGRtseeBYfRuEUFABZDfs1gLkAmLLHm9Evk4LUtU7qaFBg6sNRgNMrBwnXdkUpDyTkwwNoBBTwRWXs4w",
  "key5": "43snQd2a3xpjajwArQdbiyvWAt2RrG3n8pnxJ5G8Fv8USspSKCTxNZFMJqE1CBTKpQ5ndqADZch4k4N5j3DPfVyb",
  "key6": "3CfNFqQiKzVb9qgohxwqiamWQ6JsurstyWjV8KKzTwAJRwnXr3sTZCuGYsX8grfw93HtpGKdKfSt4BhRTLW7FK6A",
  "key7": "49YvjNaFWAbCM1Yz3aVKZHTgqDREhZGhmc8n8utKuLwyg2seZ2nJwxfVZmZ84hXX7s6MsWbfZdbNrYHHJUHmqgDz",
  "key8": "64e7H3HQpRigbksbaUFJhEnE6Er6YPUH9wWW5BKsgV11tmtCYRzBXECUUny2fDMGdvGEvL4tcAqyicakjevTbMYK",
  "key9": "5aJcMWUaThy7GD1uu13sB92PtWv8xvmndcQbodqgXFDfxKnGzwehXpFA4qgTnwmrzDFgK2GDE39qvghCF6EeyZpg",
  "key10": "4JsJUhSbFWnjmEcfXSPnPKYNKnKbenYJdJibkacxkPfQe2Ke5avfTP7RWQ6arX7Ph4QKF55zr2KZPVMGrhemQdNG",
  "key11": "5PJGS9wHWYkvcpm2ySa2hyE3ah5GAJz4pzNYF4TrVrJLtPNaZR7hVwbzUTt6SWzTaDqCeQYn68ZVzD9gfLPVZWEk",
  "key12": "4ngx2YxYpd19M3sCxu7jLQXzm7A2mptmFk1hji8kEL6khtkEPX6BxVHtVoRYCYanHWyXjbcwwqbKQ6wGdGB6N7Rk",
  "key13": "5BX8q2pzpeV4i24or7q5J95sCQAWPq3LgqmFQVFxSEGFmrYFpxUTSMb1KgJ8WsoeQz1rs4NHq2Cyend1fgA7AeYE",
  "key14": "63ZwoNjMZyZch7LYbWZX7UXjrTJf6vKLVFBUG27ZVwGTVLadfQkYUrx2PE36ZVCSAxWgwDbkTfVGMi8dmwuGSxFc",
  "key15": "36c9dPm9JZXNyHUVjmHbyZHwZdhnnQUTdvhGQJBN5oMLerQKf4qes4AMtL2eDHaDqGPcq31XixRRwVKNGc8myfNa",
  "key16": "uaz8s2Ziyr1ZYxsysZ8knJ4pquAdhSKyWfKgGB7CpziPTEkauzncUgktnuAzbn8Er3j7Gruv4TCvYu8Qq7XQbLn",
  "key17": "5VMqx65BeNBtKXxNER84TEaKM9sQS8U9xVsEkVKatpQaC4pPtBCv1o52zcRFd4rjAqtotQybBGcXUZdmrdpVPwLf",
  "key18": "3qABJYQjtqFGQzD7CmtCgSRbzM6DiaHUASFr63xFYiRhj3tfy5YY6ZZHXJd5LrL1Dq8nZ4LLFymRkgaSVASTwvFB",
  "key19": "2RCG3mL64DXjPxwN59qUBoJCyixks9v7BMZ1FWHiXiVKTukKwfRK1tPdattCuc5Es57orng9SuvyZG9KsiC2JpgP",
  "key20": "3Y6tHJ4gF9WYaANxVdGqgJu5kQMMXQyFXAdyBfBcJyeZohUKCo8FtMpbAQV7thnxaTs7jnz7L8Qh8QuYDdQ7K9Wn",
  "key21": "3a2GbUaiuyKZJDSnhjsUeU39LHNfEtKrsYU5FfUgxd5CmvTv1RbJFhGBzqUUsvTD3RLu1FEoesJhMXcFMQbPWQna",
  "key22": "3zXcsgmixZjJkAEEmqKnzpnzSTkyLiFNPJCCcf3nFnZsL8vBHkDuLwGmtWvUnWiTgMJjYEQGhe19M9tqz2LiExJc",
  "key23": "4crRxdY5xHBebiC8YjVjFQJemfq1heX9oZgwMW7WYS3dPweimqumHDGoZdjZ7QM8cLvyLktTyRv7M7kriT26UVCK",
  "key24": "3wMND8KWbBggffNU4hUATb8Rj3QDmvnoSPZ3n24DdYx2S3Cgq9KGAksZceK6HzKGvs8vvpUdA4FypQWY1LXaFua2",
  "key25": "3BR5FZxFaVAUgGnrq5HKUauyTMfGczfjwE951jjM1MV4FFwHi6e3eRjgEkaXVwMVPZgYMwueuDcJZSC1oUtm9b2G",
  "key26": "2kunY4EEvmwccmqzBaVGbECaNMz4m6HtHoMFLrmGk4pj5xyUYURpMJjdFJpyf7JN1HiNHkGTwjnMYCShv4jLQMFG",
  "key27": "2xb75AMETWWyfyBKwU3gTRknvrt36ZGNS33Xohscz7RZsmXj6DDjBMQYmAthpm2HgvV9rHVDR5Ya9qVZ4Guk6zVJ",
  "key28": "3Vy6AQcV6S7wpWYf6UKERw6UoYouBoLgcxxxFwoUEaQ7c2VC9YUqhvAwKkTv3Vw7SzG2M3P9kqF3917Agxyo1Tbd",
  "key29": "5UBHCuQKmxtMvEbZusTRZNkXwZgL3ddpdAdLXZhxNTGEVp25zfSG5eCsTqYjrzm2k1mFtN2mvihZWAASbrtqbtDd",
  "key30": "5YpatWtBocr3fEdfjQqqHoHqEMsvKGiRNz6LYDjufUgHHi6ZZMf3rtR7otxEp7MZNmAQhYHJsZQixuqJ6L4ZJij6",
  "key31": "Yb352hUx1k3SEkzciYnBBLCgtJjUaxgmDPUy7xghH8PzHz1wZXoyrxbG8cbfynXoy9LUrnq2zJvW2jrs7cS392m",
  "key32": "2mLASyvt9WZVfoSDuwYH2HCsGaijWux83YjEn1p3Los41XRRUCtL1YbNZYrBTi5NDr6okQ7AwP31UtGCKdQsS7JB",
  "key33": "3wGXjt5kKmPV3ksUsYTcFKuXNbAF1UGWTwpdDRPaSB6vzL6oppemuVehxd1uFMkjkYm6eMRwdSFVabK89PL6W9Sd",
  "key34": "5z3B6mzQLw9nqhkbyL7NMf6Nxhv9CbndkWdyAjUtn6NLPBYvMNH4NRq6Pufqb2L2YXX5yNbZv4i1saN5LUfJkHLa",
  "key35": "3zmi19UevsvygU1gXQqKBVuCBA7PPgn4w5a1fRsjGPh9873L6E6K3offv8ona1Dx2pFCr5PnMcWsRXwuC72TVomK",
  "key36": "615AbS8FjDBZbCAueZV27UbyfUXWDe6pu3nuAJ6x29eWV8cPATDf64os7n1yr3bfkzDmPBbqCcits6Yw7HN7bGXE",
  "key37": "64FTJuUpt1HvgSFETKSB2BgcamALqGGTLHSjvRXDcemAPCw1s2ff7hYQRye6mjBw16rDdhQgpACBeTCg97gCwTtt",
  "key38": "3W2XkjMG4xHudGsguCneWRASjvYoCGudamcEvD8hCM4U9TRfF9c5RWUwWzoFhJ5MDzyW5hzn56JSERM7dkJHFQhz",
  "key39": "4iN4B5fWcm1hmpJAoyxS6zgiZnis8oyPBs1thaF3jW9PhXKmCLfzCkt9yynh44TQoTNoyqDao5VjZCYDwkukuKu9",
  "key40": "4Ljgd6JVxRv5pGfaDpo2siaB5EoAGBUymgDAEf59UUQUgu7xZimFLomf2uEk922MB8MAfXmRmcXDfc6c8VMrMUa2",
  "key41": "63y9PFGCcLM2BFGRteedSAx9eSM7sFD2bawWKKLAjVmFW1Zhf4CRkX7qoaBEA5NVgdV7LcrFZtUZR1NCbUTihQsv",
  "key42": "3fW2XAJ7vEhHhPZ7bsSaEccYxhYJD21bUwJp3QoYtWafF9CMmZfUT1TnHJE12zeemQVr8ZShR3T1ExCa9HeY3z3E",
  "key43": "2KmXxvbJ4MUHfBUagC3nAVbXrnenEgsomuVi3wHbF5Fn2BCff9tXPC4v8Df68PHm1nnpfGido19z6zcqU3mvMBnQ",
  "key44": "WTNTw7VZw72kJUv2ThWxwey2wTxpQjEaxQ7MDwDGASwqUim76hUdsA6X32rbEz8mKKvrZSCEz5ypGh4dQcyn1LW",
  "key45": "2NqTEqyPgAr72ihK3eTo3yM2kJe3NxvHRyJPkiaxtgbWmi6zQSPWYYWrmL4DkA46tA5jiVx5PpkU4U9wq2S1hSLy",
  "key46": "3ntWEYanntszK7r9ezUsRCZE6gFjyv5R2b8vjTzgD4FMeyYF2xhxPHuthiSydowpzwsYwpg6vgVrDk3Cnn52Dz3a",
  "key47": "3i3m3zTfSFJqXf39dsHvTUxcUwQVMV6k5BY3jwca8f9U9oUM6rh2jHwWGudLEUD48FK2R9tcHdQFdjfZS5uhrPG6",
  "key48": "3xgDvLd7qLysior82XZZ7KTz6NLEbddjLYX9T87M3rYCz2yeshbL2waSVpuTwTx5sQWoox5VQxhWyiLwvSPkTNAe",
  "key49": "656wgLHt6L7G1Cve2Fi8pN9UYiuVw79Fky1Ew1nYop1fr8vmQr31mf6NGW8MoifBdaYPfVyNUMouhyf8TSZokgxS"
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
