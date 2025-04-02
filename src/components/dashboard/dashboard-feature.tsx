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
    "3P71giQ9JxQ1iNtpb8kRPG96mTW6rrBBJj3ns495Km1j1vRZgsAZBT9rv6YJ5SWfJBkDM6hbxVgdqoswYtsBX2JC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BXKERUNu3TraeAZctSTnGxVeKRDHBaZeJggNPTyhuatUkynSFoiz4D7jeFjNJ7HQJ4HLxcUXs4zpAEuwzMUvysf",
  "key1": "9zKAuRaT1T48DudR26FJrENHAAi3AX5jAhpbZEbSqR6AgawiHLP5Dbpc87K2JLRZdSvV8Ut99MKFRxL4NRL1Znq",
  "key2": "3CRcfQ1fnewyTssSYLVTat9nSMW96WLcvMvtWWgmB4m7ZAT5v9yKDyZfp5Y64828AFkZipYMECvSAPN6keXzkEFM",
  "key3": "3mJzQ77SAu8Yffgo73F3o5mssCmRt9knMXTa2eh1ywiXPvSSiiaQyM73qmcwNEtD3NC91nE9mKYvWMQDjbHPPxrr",
  "key4": "2mqKKYSkpP93FVxsFZwTxbCrGQiq8Y1y8hPzk3UZ7csdE3kMbk7DXzJPzf7MLZeXdsWjjaaVa6nn9kRQb4ZMQfPk",
  "key5": "5sZk2ReTkMhojsKeRBFPqH7mC1mUYYgreEGg43d6k9Q93pBb3oujVAJ6QFQteCQkVQAc1bCLxUuB5oin9pt3ayX9",
  "key6": "kd2aFSm5SX4xSLM3VQ7cC9cSeiFBq7JQ1NAE8z7ViDMcSbDJTg1maNavu9vEK2hE2eNPxPCtRSxg2hERubszMgK",
  "key7": "46Rmf1YDYEJdAQ2WhytPyNw3hsx28rvrfaGrJGr9FvNXWxwKFwR9sVprH6HKJCoAqGZzJhmJBEZvUdvrxJAPiiJ1",
  "key8": "39LwuhndqtKttqPhfxiW5jQXDb2ocXAT5we5KkiykntL1ZQi3t8GqzMuZZcPRLCCNQj3W2oSGwcbntHmKJM8e9NG",
  "key9": "2dWvmTevDnZrHDQSYaMDcrG47t5PtAAt9i54hyF6aJbG9Yz43dzqGVVyELA16jSkZLDJdC9L6q8ngMUoGnS1Wtck",
  "key10": "3z2Am5Vc41d5TtwM4piyNBjzroXy9iesZ2gVM1b2j4uRgkLwXe7s1Ege16R3Lzzy6N24wzTxX48T53Rwh3ecxPWs",
  "key11": "VAaqCML4sfbWZ9aoc4NVfgYvaqkNAM133nniEQBpmoux3W84hgtNLwUqTVdWmwPN5LW75pZMzsJNddtrt51Me9U",
  "key12": "4VEKcWSJsSADq7ZRoC4GGQUHtpY7uVU5rHwiCGM5R1pmSnBnqhmLggiqpXTMhAcVRBhqtbaSm8KeP2JkGWNEcn84",
  "key13": "cW3kA1oYuLPSAz1McnyrBpSuyJU3vAXGoVAntZmUEeLkwBYn74sXXEujyqRSEvgcuGgVLZKcNwG58KRzBXZrVXv",
  "key14": "3QySKjCwNx9s8nQ3mivvXZYZ4ud3yR3KLbwdYqcLsQDQyDnxiCmgY9p8ts2Ghwap9oWGtev3CfCD4WzpxZVkdZhy",
  "key15": "VEAuAZatPiZEdDVmPRC8sifvfyE3mXZcygCnCAX1mXNpeyzKJA3T5B6AapVfyEJQwjUVFZEgyvddn59TehNGoE4",
  "key16": "2vac4LYNX2ZtFkfmzbMtiWwNCjMeJPsQkqHTa26oLpxGQj9PzBU5X98wZ1xvrWRy3KQPdMCYi8DJ1pdrH72cDjhF",
  "key17": "5GyVY51dwank7tyFpeqPEB9DibSBxxL7fpGr8TN8QyXgPwJGmffsMb8iYX9fTMweadEBqE53vP27zN23ztCFkzN6",
  "key18": "64Qg5gRnoiJgbujyazwY4FVfJvHBdvDaVjjmsDQjAqHuFKTzAjh6pfKeEPgdinpdbpqZ6p8DU2CkDMoqKFNe4UZZ",
  "key19": "1AHLffbi2KxkrDZ5f7UtwCnh5nEz6AFyVcvqMeBkaCdwsLji9zRyYcA9AWhFM2up8M14XQFCWwB752CSzXdxhB2",
  "key20": "2pqrfuJqenwdMBQiBcXLpAoauL9P3gSAgLnNR9WzATJ81K2hdmzcL9c9N3XbpinDt3e2hTrvDG1gMdKTKMuQh2Lb",
  "key21": "4XXXhoGANuxdhLa4obTSEBG6Jf1twEPb7MDjc2sWcLR78uQnMWtZMm6NTdhbJ95fSdeeH7SHeRSuTxXiRmGinSmA",
  "key22": "5uLQwAKLuakFK6czsXQVbpnVA2N5AXGkqbGQ3qzbDk4hjTaedhPUHosmADejWcaB5U7eq6HvEvWbvd2HnuLwehxL",
  "key23": "3VsmnRKM17uEniWRiZ7KD9rfr3EPfrj6Rz42U3Tm6BPuGBuipbD3kKctTajdnGkVGQ1GvSER9kKexu4Qi1BViHor",
  "key24": "3FpXnbJQ6oJjCNB7va8A9rM67oshUBovX4QNR1C5htsFcRjuRn6zNf2dCwWgjSXiYkQgSFphFQ2itcwvtFA1RMPc",
  "key25": "3U5DBUg9Y3shb1HehsA8KRRDD3rnM3KHMfW4spTXX1zMdhiJz3B7M3fFMLewUXFtnDnWRXVCHopdnx31JQFmKFoo",
  "key26": "5fGQMkAEP1uJNQ3ME7c9B9ZA3HNHL9pvLhRwuJsLJKfKVMEcKwjXDBLXmWVYqrJWZnaFfP6xNW2XfdYN85vECPsZ",
  "key27": "4hjhiJYMBFQSskdCTRWtuMVqR4QfyQ2uS2W58PTnJVNGSHptWawULyfZtSaeYEtQgnJ1PgTfjhXCM3ETdhLoQZCd",
  "key28": "5E36RcBzFnDE4JxbY5MB2FhXGXREAMPeptj716CZwquuLXY8cFVKHNs55jRVKJKsqP1Tp4bfSNfxHqatPrXms7A2",
  "key29": "57USjU16PP73V4vtuHWWAdCi8J35sM2m6Gddg6FS9Tm1748VarPN4dEimsrhX1sDAmN8EMMhdAdD3XHx19N5scR5",
  "key30": "4AKesL8afUKqeJ6iM1nf65fyJzmRsNYyBFXCB4kahosTxfgWtr4ocWn6yD9gr8JQZ5UDZMcDuMeJLFTNXYPS85pf",
  "key31": "3fT1TM9fj1JKnXzcsTMC1VFxyNK8QRF1TqFo1cXWB8EnQEQgRQ5YCQwtuPsT1j4EfLrwSkd8kYoYEKr8R78F361f",
  "key32": "4KijMNKYf2g3trBTJAuvZk2jpLNH8e6GniTzS2tkWumDo7tJQWcZX9xwby4MFvD1tvEUrFGoSforkohvo97feJQ1",
  "key33": "5JTLp535KsGNMwGVQnUNs6z9w4sDSwpDMVQvWgmUUMJDUH6ydptVZpQmnvMjNy9nX6AYyDma533C2x1te9UX2pEX",
  "key34": "32YDZ6ZjXjJwhuLUjFMsaGhKex4d39sJTsvjVa9F6vsGR317YMsC8M23fZdMv6vYTa4wvxV2bVwEouwfnVGiF4zQ",
  "key35": "2cpynHyVo3SLEU1jQXdjeZ7XTEMr3oQkpFe4Dy7fM1x1vnjjYBESMWHFeD8gBVTuU83TXCe8gmacyPbGWehQkcfh",
  "key36": "4MZVyQc6w3LKSGPZWxYj6nPUNnLLYBhx8e68kqK9NsJyRphdtp268zj7MstYYtvnUWPQzgBTHgCemERLsFJZiSJx",
  "key37": "3Qf8eNHo47xahDJsUMyifXnpzb3NyiYweDnZ6HdECGcoYtgmKpZTthFRtWL6CsLDRyDWG7byHkvcJQ3NFQBFAjY6",
  "key38": "2rQbN2WFRkduf3KniYFzU9fBmcQvfnJQmVFBEWaPwpaS21TPVSZQZVW9PpZKB5Zdf2Aax9CvnqiEeQoknQxSVCNd",
  "key39": "29abADLqQYT71hLSKi7XjtKuM6PTWyQ2nnzxHF98uoGdpfU9xXDmahvkGhKULSuETxW21gUQGnixuWCerVnUcXAR",
  "key40": "5HxtJymqtLFyxs5wt87V9N8VBYAoaXFAe3iJeSXdCV31GcRbYYXdZA2sHc4fbLkdrF3d9Ken7MDPxkyCHki7Rq8Y",
  "key41": "EFBwKbc1W1wMAZRA96WD4Z4B42pjZU1N4FZhUoaafx4cLx6CMpNcU4obFbaKKJuK8nBtTJ1F7QdeT2oAaJotw8g",
  "key42": "2mFsRvj1RQBHL3tQqxuL1bdAwsuKe1n676vR7ykMzcEjGiuzFmt66jeR6Rt4VVKTEcb8GJXtmpsmK53zy1ZAyTi7",
  "key43": "5PLmfphdmWyBNLG1HsZTYumpq8VcHsm9TtPynU6Sf2Yv8oHZL1jtQcLzYECuCcHEpd4a5zSe328NRwoz6Cx5AY6f",
  "key44": "UuLVgUBfhMYLCCw3gzSX3TqiKbeCcu8pJJYVPg2kpVeJXuoqsNSkJyEvnofHgbJWRfcRf9jtk73GugxhYnRXMSm",
  "key45": "3vJ7PxTUDpYj56ZTD9Fvjz4gDTPqUrxc4nQ4MxcEwVrCowuYj6jEcMU5XNtxTuPdJe2GzTwVvTjnroL7ACDSKA6a",
  "key46": "5s2jLePyKs52NpfDFJkBXQyYbSqzDWF2fBvb1H8F1PjxVsrDLuUmXDyUkGvTx8PUqQZqokAuogoSVLTg4R8nqSf8",
  "key47": "2MY6hwSxFzVnCZYYJwnNVUbZ5NzKUDDqyZYx86mQ7RzG4PGnnh2G1sTERKGm3u75gcGiKSN4QuD3iEE66vztS8CB",
  "key48": "3fyx2xagUtNSXvZft51AqMbzbK9JGQgaA3CiArfUo3qqkuphBCvgjuMAPV3MqAAWeSYMdYM6RsANiKdeWY1t1uAF",
  "key49": "424ST4NLcjvZXpkPFzKqJ7tNYpDgv2Nb6WWb1j1uUogUNCqWdDBxZFmB9LqhsPwGz7oMiQkpPz51kcVjGaWCaYaW"
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
