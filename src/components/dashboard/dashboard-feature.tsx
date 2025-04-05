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
    "3n7R43QpZR4ep6CZtebA8MCTGZeWSxek71BFezYbA5GBBFaJmJ45p2Ff1qSFUFryz1ZCJvYio3fVxXuD2aVC6AKK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eXcbkiWLUQJkky45nhja8qjT6NGhm5cSqJqB3M1CCdrREcDchkStrYKMjcoLgG14f4KcLZCybgt9WWG37KkWxhn",
  "key1": "3QkgK2LETCwYXR93xDwdFsDisEcmZwPvdapD9GFkEzjDReXFZM18RRfYMPCDaj47gb6RWywgg8HDnbjiWMLNcLNt",
  "key2": "ZQ1bL6BbdSpN8cd8tuaQi1LNjHMK74GSXSKfF2S14pTDJXm4uftsAb1QCGaQgxDK8rnVHRRm6oM8acMFT5eyGcd",
  "key3": "5JwaWGYZ4d3Ydx5dT8rcyrp9f14FWzoZGKKFk1XQSmNZPmQJCrb5VF144HMrss4axWrBwHTzU1yqrpTNjmS8QCrH",
  "key4": "7iJxLjv8GPDPvsdnuzx9B3pFrofgF4S86aHDjcjoHek8y9RgJB4r8EtVdwswK94ryJgyTxQsvNguwfngdMFfX1A",
  "key5": "JykRexx6XgafDqmsQyv51fK1USsyKjfYmj4FHSmRXwfXq2FVTrjpt27p6HXehnLrGg9WqB3kGU1x19E1idhshh9",
  "key6": "5nVGjUQtVZP7i8VyGjYVbAkriBiSw1TMsh1eYpZ5sJYyrHRYgbdRNighYmbZYpnFqCziEoCpyBW3Mmek3wwxdsfP",
  "key7": "4LtveMAT5obG6HRyGiF3N2HAaEeQtqCBjn5tUvTR9czA3MUkLwGH3TY6pCazQfBPp8bt9u1WEkvkb3DGFH2AQe9Z",
  "key8": "3s8QLL2vnACyyemzuVxNaNbftdSGg1A1yArTJcxMQiRUwU2FQGj9wqxpuojkopeUhWxUYsrmHYArwxJzAMHx4gjv",
  "key9": "3S4ehxWvrTMbfpgN7YgtGZgRyyixjhug98aKizsupbZFSgN2MJByBvzzJmUh9m7DZdw3TZ6njCc3JacXu3cXdvkZ",
  "key10": "GKpJEjovrL5GzsdP2qe6X7sCXLk3gCUBfPgZVVeU4MCrhXGYkR76eiweaTjibCwn3F87rDhaF8hXU7wMwEe1eX4",
  "key11": "55kvD9VASSwNuCjJ9ui32jXmxsw1CGy1MZiUveQhQEnrsVHRyWuq8iKLCYJ8Ks5YekWeZrDptje39dXiQQB5qBCW",
  "key12": "4Efuq6qBCzR7M7n2LHxDhNDofVWeGjjcfTX2Tk71ghLFvVSr17HmBiUhUQaGwHtVkBQssz22ECDCzwjjeV1dXBkd",
  "key13": "5d9yPS2cXFZBgZieEKynCd498dLUF69QiUgPXr6bqmWnDRGW5e2a3zLieksXg2cJ6CEkSJuGbDyaUcY1NjdPYDgv",
  "key14": "4toUNF4w5ARZsJUQdePHGAhA8WRfcqYPpCqcS8R3cnapt5r6MyMVDuL5Y57NJz9KNNGsQunHiLAQMqmc3jpy4cyc",
  "key15": "43MoV6KZsn85N2xG5sfkToc3AG1A5pTf8fwGSo28Nnhvu38jTx7Sxgwd4zJZmt4VZTJXZGsgQw7vNgxR6nbgvSvo",
  "key16": "4tjPahuq4PggMwHsA9Frhcs2mJ9CAfXTWZhAycpDgYRgC3d4XFUZ6sf8r6xJG3KNPFZqhYhyLUx8Lcz7aHN3N2aq",
  "key17": "4UZjiGQJc9MNG9zvNToRNtB3YT3rZDWCdEt19DCW82qwccHw3vVjxqaDtZVvaASGPjKHoqH8xJJiAmSaEWEXhXs8",
  "key18": "2Rb8uNuHNwAd2szCwF7TZJFTp4WnPsc1nGcJ8VRr5ubQ5WCpT3Si7e1UyfHM2LUmiFg1Xzy1jnLm5AQK37FcczDK",
  "key19": "wwT6ZxYXbhmFcTkyZrk2QVB8FTTnuyu8Qv2aFSB189zxFTmqYHLchSjaYxP3WT7FMoVhp1Q6gVESrCcYs34HjeP",
  "key20": "47ptL9aXgHpiMGJEF8D4ERNNLghActDSDKVeBV5mfpgFEcnEEr4vLG7wJ7Nf8QuD5FB5urNnJ3LPDZicZUYo85m3",
  "key21": "2fDJRity2VhcxghLHEn2GDFNFVoBuRGwfQj96xKjT8mk24Pyb7Rg2TLsvU2gENskEY1K3FYDJjQ4yP1fvPtReEYn",
  "key22": "5BXqK74hKXSGF92yoAPKi8v85gGrmo9Bufx1cEWEkwNKeLhwHGL7s2uZ6YYwCFQpkMLFFDuyMdwmX6Dv3VhyurN9",
  "key23": "3DgT2bzayT9mhx4ZfcSb9fUCxd6BsSh2YBxjwqjYFN4AANWwUR8ebubySisAoT8wqDpwBxQQMgKqK1F8J3RfCFVp",
  "key24": "2CxEmjMTG8YMc8VQCNdxNfK2UVDz3MhE9QU8bmSBA7BqsmfrQ7F5A9piznJNpsg6PzfFpx6TR6GWJ8K26coTWG3E",
  "key25": "53Tc5Zy17pv8AaMMjDthaYejEUNEJBiXxKoG5TRVLzEMZyZPhqpQFPy7BzA8CCmgdCEGhyr17hz3ePmML7ztRDz3",
  "key26": "2xhkym98PRbCkLZhy5DTmfG29rbnUQcBhVPHgoxwXUJAwvDPvvqFxTwZNmNJsnutQKJxfPeHwCQ3gvZ6B38TF31s",
  "key27": "nyFk7JjEfYhjw4VMuMGj7uKaxGFJBKmDNXfcehq2UCymQfDYe7PRbD35P7XjpLMW283ijrDs8azM79DGN9xpDNF",
  "key28": "5WzNhK9YkAhhcEUqvPCXLghLuCTFKWodJjthFMNHidUnEFhCnqWraHS3RaLgvqqabnZPAdELptMyB3FxBQ6sKPJd",
  "key29": "5fdFyucp1EtTZgq6eGfECyxHibYjuJ54uEb67mHxUnHgUXcyTfoqq6o1tNYgwoivkgheQEvv71ZySwEwiPGperfU",
  "key30": "3bXZeFUUYcmDNuL8zwgWSVG2R3MwJMa7zWaxiv98UxnoUYZJzti6eEJU6BeRd2Gho257wR8yupoFt56AXFQ9dUkJ",
  "key31": "58mqG2ziHVGfM5dsjYnYSxfqjqq9GhHpbbgGbRnL7tj8iRPN59M8CxfnnGR8DGVgFKWQmDk6w6ybZcis3Mic6LP5",
  "key32": "4FBsF3BPwXfLRwg1MW9cY79dyqK6eCZ7oCTzUwPjQQ3nZgQzJXoBvLEZ6dAR8z42AbYVhm3GF1aHHtvAnQewq8MR",
  "key33": "3AqkdckoQ4M5nWofZ6k7Ye6LZgstRf67nLQFiQEevGPJnhRSfSmY5KQwSetMXFJL9zeT6MeEtu7tXZM7qVkpqaWx",
  "key34": "LctFAdkd8B6qooH8GDpr7KHbccuazVARTXWMJDWt8SuUCu47zjvTEdEZ2kd2bUkb3UQGp5uwr3MDT7mYkB8CHbq",
  "key35": "5pZxhnDmiRivqTJbMJwmCe1rp2uMBPvs89kW2sV4Ev6iFRrzRepsAyfteMQYnCyevpxKELCsXxsg8KbsfwtVjaAx",
  "key36": "36QBkpYva4RXpLNcNX5aTkvuAdNPVZLhdTTU1XQDgBEnDGAK1vQtoaAJJXPw9iWg1ZYMcxxGe3pByT2dbUrMhipg",
  "key37": "TnFyzTGubWTvm9PQMnQYHpcyXwtCFSjjAPGZMB5puqV6mEtLXEybWz7tRCHfUaAr5YPbr4y9wQHqRaXWNrbVxne",
  "key38": "59Y76Gk8pF1VQ9YxmuicHbjkQNLYnmu1n5eCAvtmk47hJTrtcfJnpCpqWB1WdYbVuFbZCi89BeHwkfb9Kh1rY3Sx",
  "key39": "Kpt1Po3wRFuoJBZzptkuASUNMAJuRJXd3SeaCUPgPXvHQvYKGA5mzgsYLuKXzhsBjNR6KNHPtBX6HsduW3cZF5b",
  "key40": "3WF9gDQgQnv9affxXdastCJP1W4cpAY4sGpYiy7xXFQoT5aBgLZkWVTUUyFv1JuiodoUrcvVEppMNPaknH5fH9cA",
  "key41": "57yu8MahYZHy6CYK4PsLtShkpZnKHbKGX4CnSVxUcubyDPdd741xwRLiijbG1qiTJXmrHL7cYnbEdc8Kqyjnjqrh",
  "key42": "5fmKcreA1GX1SSgc6gqfirVRNXb7rZmT8h99bEAK55kekAi1bZm894R5XDRwSeFNzCesHFS7hw39R6dXSLKfZ9co",
  "key43": "59Dfvjeq51HCpBmZX5TjvCjeFPX8GVqxNkaUpfqsCkAxFBqEMVxiP1rkFN4y4p263mRezGpeiRNa7ycywuhe7RPE",
  "key44": "5njrzJQ4Hr5yK6BWv7asrSzkR7eFcebh7saojPMmonqhgjbJFkpyrRaxzxshFBGUdd69wCzDfGQ2Db2Fbr5Jy8Ew",
  "key45": "3Z3tzQfoPB5C4eTPeKJuxeBhD5hSzviRQDhVZvZHcNEcRSDkthZ3UZPvyu563rZvCnK6R32nvGNgvMAKsf1Z6Xuv",
  "key46": "47sqBVmg11zd4EbaVuKXFaP3RjbtSX4e5tHHGehxKu2EM1v4bBPUaoYB6RgZxKuXPQNUnX6KYPzjxu4hZvwoKcGS",
  "key47": "59QhKVh1kSoNFNpGFYCC2bfZKnrLug25v7RmTjX8Ezzrd6yjewjuKwKteacjyzDztYvzYoKxNUq3msvapd341ZAo",
  "key48": "2QdnqoqB9e6HruHHBaCnAG7feb8kXcyh7oVX1V3qE3hAKYAy6j2aBV6fLHpxsmeyHdwJmmWJnKERA8tSAbn43X9Z"
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
