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
    "8Y8TaZzxAhxUnwxPgoTFSaggPfkVBd11iHNXAVtRnbp5H1sHSGt2bwnvYJtVSwMSBHiv3H464i5ZqybSdXysvH5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4k2KeQ5KueytVE8y5s2wDm7ZyuW9JemkUV3uduotFd5Hmy1ypHc3sEHHTPtCDbepr7H76mSdFaTPESnmXkuWMBYP",
  "key1": "JxbaTKzXYiE7SMqE6KgodqDvFpnfpmMQ3VrnULUrcFfi8FLUtK1Dc2Lw1ePsruxtGDQjji6dV4Cnp2sD4uufXhR",
  "key2": "5QtpYneJ59mk1rfwhoJ7TCr4BFABdFwHFwJyX2dW6ydb2Bjyru4LD9nfFKUnBbso114FkMuUoxdd5DeBJWvtrtzM",
  "key3": "2aESw9mPPzhk6XJudDa3z6WtDAGpuokeANoJB57Pm41zkPorZZy8JXiSWTJmJvzgpJgj5nfNyQSbimi1yEhKyFHh",
  "key4": "fi9vUdNPncRqLWz7avTjreYN6Cydxyo7QhJdvRA54xDMnnxFdZjAB1N5frTgbvfuoaCGs7bpbzRLZvywRSQ2fFj",
  "key5": "3inrfADr3bTDScdGMbdtAHJdHS5WxsSxcVT7rY532ajkwmEQ5Lq56TPZEd4uVziKjWoGeB55dsELDtapt11VqGMG",
  "key6": "SFgqBYqmLjxqVFKRWtvjH1DTwie6BQ2osV8A2FWTE3Av9Qb8FDfEuYBzqfCagghwS93xPze7hZBjhBzWctT6jAC",
  "key7": "56m5o6t3aTbJfbuV9dbhS34eTWeEPPuCW7PPLQRSxVE2eu4Y761CihY6T3pVZ5tEmDn2heQwv91zuEM6PDsZUF15",
  "key8": "56bWrqw816r17RZXTfiG5ruxy3jTeWfBNDT63RNBJkKjz6VNVAPTDb17t2wnvHyBJxbS7qDVseJArrZBkGUkKFHb",
  "key9": "2A1cBsWJf1iwb9NBRtifb6MkX8mWyk4hautXSgd5az5EuFbFV4Bytvnksd7fog5RRnN8dPP5yQVsSxTJDZG7CxAh",
  "key10": "J6UUjgKXSqR2fe5g6eV8CA6iUxb2VGnbhGTcNLDTswa2LKEbM7u9nawRRMQ6qrstZE1ZHz8VivWi1TwRWpqfVDJ",
  "key11": "2URLsRytX6eVun2ARjUM5282UX9QygGRpy2rCuNfiRD2jYiLHyQU1qVxdgS6Mn3WWsN2MaMT9WdYGMTcmQQ8HHmE",
  "key12": "4AGnENCLVT6Ns96VtDPCSrpzA8BxydzBwy6pKx7QN3sJtGNPwuFmmJQVnBEmJfjRYGX2EnSphVnWQb97VmsF2fow",
  "key13": "3wD4NZfXfJ5b2EfX1zP9mU3ftKkM72jGVqzgHS5AjwyEjevSS4TfzrUeEniz7S7Pob9fSfJqK2FgYS79TdbcXjxh",
  "key14": "Ey7Ty2b4oMNhPtCER1CidVCSe7kk5v8pnRDVGRGfSRVR55LyvTEDwNKYwRBF3PdBaiv4kyS1S7WHaY9EyrPeii1",
  "key15": "2Wi8ryP6yytbyeBf8uomxyWTqRQ72T4aiVpqoAHgzLBhZtSZy6nUK5SLVYJGfRJ6PyniAipipwzdNRffLyqCTMVm",
  "key16": "LKjV3Ri7PTn2odqWb339FKHsRQPTqvahkJ2bsRdmVRQQxjpMFpPcxLys2aJZmSquRLkUfD5RyarphzDxfMdEeNR",
  "key17": "454MPGeM1YUDj7BGbMAffGK4rzHes7KDSgJoE8ANwCuTBYwWu9AGjWASniYVB8WsEBRMTLLuDJHjGHkYTj4rX4qs",
  "key18": "2ERqZ3Cr7KjJSSt1j6ycgq7xb4QAATSFS4ZPNWV2yZxReRDm5stePtN7cLLm3LYEHy31pQnooKEZ6iPqWHbZX3eC",
  "key19": "49z6qThMQ1ZQuRZbT88Mh66bLKGSgGrsPerW5XaLAXvhLWjrSVefwoZWeUGK6AupBYMTYC7pFVgEVJ3U7q9ExVVZ",
  "key20": "4UYfvAoVtkr1QcYUWrFsz6mcQqh66muGckSDhWsAn6vpo4hKkFYajk4frgXmd3R5Lk3cRQbqKWN1dfDnQU23adhr",
  "key21": "3iwqxUaCAFm5aa3BMqgLRQkf9ALTtNExo1ob7dJSjjWmmPG1NeHQ2wYF2PrJAZhGQ7bUnvnB4RdvYiowV3TmY6A3",
  "key22": "jMUaB3eCKQ5r6Axpb6QHJ2JRCQ1fD7WyWK3WwrHPfaf4CV7ajZHRsVipZSScJDc1s7S3RxfJEtPMv3eMbuW6E3A",
  "key23": "2cJMSUsw36Nr6Ean3J9VjvGPcyVccsUS2epQK3KAPLd3zc8cxLZ6WpdoqKcrK84VWZRvFN9MHevxqq5YQnw6WJYu",
  "key24": "4eG4KfG6W6a9aTiskwKfAM4a1HzCCqEpZ73VebJP2AWbm8BemMbg4BxuVbiEqx2FCy7gBHJMEbcmAtVaLsJyZYt",
  "key25": "3jTry63syywGBZ1ajEadsVfYmxCELf6nEZtqXuMfLfT3mRxLnQCE5tV2m7GS8WmFsZPdS2pmVMPXMLMeCE8d4FsE",
  "key26": "NSxjZeNEg9j6P7kmNTgRhWVZkUE11d4gJVCaiiS7fCb7zxxR4W5vV6hPDE2WmXancqmRvZPF7bijzhvP48s1DZB",
  "key27": "3QocRRxnrU3BccNu7WEgJuEioEoKq2UipGLQ7gvBekEdjYWgvGDnWrQf12cuk88xQfZDMTTW4L5CFBmzpbz9PgTT",
  "key28": "4HeDqmVyQimZsnQER6YaRQEKMKsZ6VdtWexT6fmy7WsPDpUXAsLFsMyEPNYGgprGYUrXBtAN8S3gpqMUuXhZnbja",
  "key29": "5KSnrDTJ8LSSzHqY7PEvzdptRLHjyobNDuhhLfnREBiazDExgeB4wzLQwfAWheQfXQUSwo8ms5kHUZ9xunrRN1nf",
  "key30": "khVEv5QvCHcQLCfC2DZh4k1fFbne9t42zqmaprRVe8YGXurqRRSj8EyV6rzNHJkDFGThSDPSDiXDsxau57pvpW2",
  "key31": "2xwPeTK7cWSwnq3daPt5LV7e6YchrCsUYLnTcqXShP2UQpT2qUAKwzmcoygioLWjshpaB3zJ2MXLMGjzEtM69s2u",
  "key32": "4jFPoECCXRvBRpeACMibQFtFH3TG3nhv9a8yhDK7G3e39SrjpaQo8THsXMVznqWAZswkD8KRDhgzpfL3BXTk5RbM",
  "key33": "ABSUsoHx3rpAAsmLtd686mgvH982EpfCSLAYRUQoVxi45CZv4zGhmXuJV5SFjfUQcztv5FbgD1VpM1V53w1Bkwn",
  "key34": "yYo3kUYEygiTyBrSZcf23aHk3ZqmSzj6Ps76siEkdc5qQF3y2ErQETx54cwdVqbd4aWiqprgEaabBqmL7sJfkSH",
  "key35": "yThwK67iCFMaRvENSdexRjv24pPHUYi2e1aVqnuF1K1H5gQbNpswZungGudKZWWdGRNsnvAFWv5BNwgimeyfY3o",
  "key36": "4FgosFsorRwXEw42LjiJ3S2U6wkbARpZocUoKBtEGoyybpfZcoBxPDLBcuLqs1gvjZXyRi1mhBhhwmi5nuiGRdCQ",
  "key37": "2H2FzfitPEU2WjhiRbCHV1qM7b5b8Sv7cjHA4yTWAwFTf78Nt4e71DgjZxTBk7vzb3WRr8dgnqfUz1yo4ibxmTFL",
  "key38": "3Nn3C1w4LiAntwPx3Ak9dxkKfQhE1ZYsSGzpPUKFoW6chNoE9UHGcEjENXGXxKmz4SAsKctw8N6QtjLPxFXUEUZR",
  "key39": "Q1yUkqMQ5w9UFk6xMfY1HVKbr6iZEm4qkKwHJ7cXz8JLtVWoMGEyKKS7tkv52jTYGZB3dn1ka99RuGggMgrj5jZ",
  "key40": "aG3R8MsM8Eh4ZXCicXHZP42tWvRUbvD9xXh1sNDtYY3w2H8xMHhT5nks7BKKza72QyWh4HMzuBJEiZpNbuFUgxf",
  "key41": "3BJ2KtVYbX4mEZRqdLkSwJVPwf8waQLQcQsqNYR1VWwkKPEdrsZKdSPyk5Je57hgCm3zLY7p1o4wJ5AzqsYPooEu",
  "key42": "2qNx2jkWwGc1EHfg8EpYEaBVtBv4TU1oD8eQRtXQDASZT55mF16fmyLwjBBtcQcfRekabKnBtAbWSdbgMxs64SoG",
  "key43": "2KFAzh1mhzkHEuBz1oXCNrGqZSGMrpuR3dh84ANYTDAWnV5g7KPRGoEYyAyK2BnTvmzZjYtjWF6vvxc7aPCk1bjy",
  "key44": "5PdS3ggdq6qLqQqAbZfRqYKphXTeyHdE4pzENaxh8VqsG8xjyYsQKSQBx8TbrgHv9LJuJ9exC6YNpVfaStKH9DwZ",
  "key45": "5iMMJK1Zr6yH3uWSX44GbnCagPPeHmCMXDg8kbzTL58r1cuTwFHTeyE7BT4h5ADQNYDVeNKZpo6bDW9fArmUEyRm"
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
