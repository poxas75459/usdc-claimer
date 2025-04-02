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
    "kcvWNVXMdqC7qmxMFG7EagW7NEMTG2LXUmPiC8JFV4SVUriHiUQ4rcxWpcZA8MLzFo42zE1eM8Nc5k5Pow7CUes"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jyJ5QkSYpCZeBEjG3YGFJz6Yf5tbHPXcwrnmic18BkmpuJeUvouX3xj2nj4MywJcvBoWrzoMrMaRHcSEKCrKaBe",
  "key1": "s7pvM5GWh3An8dUuAQ8PVYZVmexoeiarTR8uVvhkVMk7RTLr9PtnihB8mr6qSXtWW2zJodZxhMfiNXMjSSxCkta",
  "key2": "47oTJntbiez5C7rTnSqoBbH57sGPcoiGsFAGmq4Fe4KQrqCButweNNcAkEWMU1HxJPVkpHmGk181WSPWxfQJuvMU",
  "key3": "4Qti42XmSksH6WCGtZ7aSpYVALz7JY1Cm4t4sHDGeCaFM7N8SVzYB3xr4iWbHdHPNXfEE36pK3EXN7zQtGFWYug2",
  "key4": "5ewMyajqAPBEqccYtcP8nR2ZtsBv5c2fxHnoDmGPkVdwGXqsSGDJuBK5y1zNJcM2BxD5YwdvGq12kGxcX6ozVdeo",
  "key5": "5xvTYThrNVnp4wBFmLRU2Tm69y2J5SQ9LWnpjJaFAEMPVgRqzNdVa8XTagGRQ6WSoER7X2TcigLpULngz7Xu69yK",
  "key6": "haKxtz5ScwWsRWX9jfW28Zr6JzbdwAxGL6ektRQARD7E9LMcqdVYDBHKGKi9JyFh1NSc2ffZVr5CkCZ4GG92e3R",
  "key7": "3qXiZTU3vA1ErHMccw5qkXUD5SabxAQqqKa5inxqH3auNrfxHnvHypspk92ywWv2A546b37r8PhRGGPzjBZUq8xs",
  "key8": "vxT7155DVnurPaNTk8jZB6o4wHQEXRxZesmwjjRCqBrb4obB18Hbuk5tcFoSDP3AvDz3Ef4bzTXz8ScgnyZiE35",
  "key9": "2r98sAdNBSqtSfAQwAxMgknLYKvmGdgtp7QNQJTpgXxv85skYEbM4VocWPEUndZCu1AcNoKekzg7k553H8z3v1Eh",
  "key10": "5Z9j1BjM1yyDD6PTL6fz9uHt9zHMKNzFRe9UEgNhEVNEQvfzAnPrXZA5BMtP2cNm3hM68JSzgSTA6tMtqsdLL14J",
  "key11": "2GCXvc2MEE9GDb4Z3ox33zM15GKV1Rea1Gxogq8wKZ7Ft6dbQhntToFNL87CRebAZ1b4uqTkVMVEQukx7rNNtJbJ",
  "key12": "4qZ9nVNhzo6KgyFqsyR3F7jqapCwXp14jwJ8RqVKet3pamfgtjg4capv7dHE5CgiPK9mLGufDEgAb7FW1y7xpx2F",
  "key13": "csURhr9Zx8p4FC7E9GaVfedEf6Fu7MWAP7HPZ3xBJuY4oF9VdPc9oWEiFXS9dr13Dp5hzio32QHyrxCrFcgi25n",
  "key14": "kj2uRbF1vjZFcQfGYsnzGsnYY5dMvWW3rdQUcTa3mTomRW7m5WShSqVvN1c2ThhAsohhRagbhEaini37axcB87w",
  "key15": "4rvPx9H2eGWKhJb16H8i5ngxNpoh85FTH2jLFwvH3uGVmXgvg2uyXPuijSLB1tPoRyBuP28s81fFYcExrg6hWKhx",
  "key16": "4cacnPFrdPiztJZL1MmKaGVv9rziUpYEp7Z7DuVz9WDytcyZ558mVJrM5xWhkHq5LYLPrgxdXtojuBSsgxUG5L7D",
  "key17": "5spmYeyAbr6uyRC4iBM15GLSnu6RwB7rtobhhqSVXZsyUEn9vMngnv8325uorpVVTAzCV1DigYrxh1dcJNXwTHD1",
  "key18": "3RtbYU4WNtgh9BnaTKhv6gpJjrW89eZDCeN2WszeHbYEBx7taxznqR4CNTQPer97njVP6WddwEjCVGZ9RUFATqbP",
  "key19": "s1GkLf48VGjd5jWhaqVbdYQUsA7x9BJcu2LwWruGxtT5aQKdyWQVKrAdKKdRcfcuosWCEzbH5cGTN8hujCoWXPs",
  "key20": "3YJTcHu1UqPpeKME541BzK5vhHfYBhWtpxTDZo1PLU9zM7HPBAu2v5fB3znkP2NwtCF3VCs5g6CGdWeF8RCJoU3s",
  "key21": "3mUwUFNJfWZKRBJLnSDi4WwSfUAuDs3GkCAgGTArCyjbBakLoAXHgad7VfGRrpwRMSbCaQohafg2yi3rZMWdH6GY",
  "key22": "2aYQuTPGbHfN2FcWHwK7XhgBn2m4nd2U1xiH34t1BTWEPvtpNcJkry27mopyiyf8ZRYitnnaMoXHSYtmo3MeQBME",
  "key23": "3v4196gjEmvwmYQDvCAP82LgkqREaycT7tMT9oSCfAMnp12ejh3rcRZzZJH5nG2N7N4864Pso4X6umfiP8t27TCq",
  "key24": "3EzFT1ia8NDzmtDeR5cZzPrNyMwLfQnzU9hyz7n9KYBwzyZyPtEjpbbjJ8pimjHXGsK3kH5Qs6dsgT2EgEnZetRn",
  "key25": "5YsvSeg7coBDd1CzHbMqd3KQhyKgyU2tv1ggMh1YAzDJQUZ99Bb9tF41mU3vnnYxHx2TwjsGyWCZCtcMmFRsoDgo",
  "key26": "dWSEJeb5JXMceFzKcJNRSjqtNBP69sbB5aWz4hcjD1hw6L4e92rwz8Mifvh4uUkRSFdxjxHQBrYvQRpzCiQ1UWV",
  "key27": "5TxPCFfCMrDfZ1rcJ2Jdz7uTbjYzE33EvK8QTJwBWihLPkBfRfe5tPZL1vLVEA3s51bYMhv3A7C8dh16JdzZVpwZ",
  "key28": "4xwpcyZYAa4zYAqipJPxZGq8vKKV7f1mSPFyxMKKhiCEp11eeDc4gfUrP8HNHiX4tpBxE7uDioSnnrXRcGVxy4WZ",
  "key29": "2h5XhNyLjVb3RU5ukrz1PJA7y5pEVFzbpDWr4nB47PjTd4oszQ7gentNhcCrghojUXYYCoox6pXqk9UGq4LbJsqY",
  "key30": "5s1zNgY44V4WknPcpHrTPd1rvZzMM5iN3G9pW43g74gLrGaJtxfdmGhk1GiCDB6ecurKNgyUGRNrpRNtzKXdtbs3",
  "key31": "48V5L6WEDXz9RJvSfqoSXLsT99EyySqPxGqR5azWzjZEEXBdh5AgFAc9eSoQZPiEYTN9B3wLUxWMVkM3Tg6fc9cy",
  "key32": "5PJoxqKtbXgeABsWn3BWrezLqQ6f6tvNPS9m6Fm7W4PVcpHVZUaRzpr1yRxV5epELgmP2deM29EVWpEuD6g4SAur",
  "key33": "3zQemUL4BKs3NXV1r7DgTJa7Pc8Gf8m1u2zZXqxWBM6ejSpdV31YczvnQBt8QiMXkg4xf4JAMvi6dJWLgBL6cbcd",
  "key34": "2EZPFcTzqTmeHSYxUh4MdiRRRHFpG8wXJ2P6CwAEaJZW4GQ1CSKsH8D3SV6ju9SKvb7M3B8wjs216cajng5NDr7B",
  "key35": "FF28ozjeQfur6mBAYRPgauTYESYFdPNYzTZTberxUFdhTSqTNjkoNZ6a5Lm59fimTHLeXGCCDHtaoophEQRErcG",
  "key36": "2mDoCsiaM14MjXFvotPusFDDGmDgnBAiW5KzHiYmu6FsGRBHSD14EoD2giWsMXF9VS2Q2C6nmczK2ZKjLCPX6935",
  "key37": "R9q4FtBYRrjUjX6RNEjJB6wHYFjXabBRwTEFn31nDyajspCCmTTfFbWAgYvppWQfL32N93KVBmCjNRtLwJs6rSQ",
  "key38": "32JdMQjBkkLDrnWQU5cTDjziXk1Gus1VFiGuYoYsUSnG8xxy3YW4FRPoaYCwN58BV3iMaZgKSaYt1MAQxmquhumW",
  "key39": "qNCPsLFwxiTS8a4PeM1Q2kAjzU9pNJkFp1hejPr6rucmcxtdBkZB82oX7vr1NH4QYhfRnRq5BcE9sNHPvLR5JC8",
  "key40": "2i7h1Qbpdry87Y4mvm5eTHDMsQ43xi4rtyDW2SeanUuQwEmL3zqgXvqzJmFa4cJ6aY86y4Gc2ZVxgUiEB8fnUpp1",
  "key41": "4iQvbARRD8Jdgqy7dKDcL51uS3wF9vi9bRFyxTjTvDwfF1Ko5ZDqndwMSALKpK1WuqswjRfZToXuuKQ4PnE2HzfX"
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
