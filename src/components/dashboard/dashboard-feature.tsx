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
    "2A8gchHJK6rJiYQxZKqWCqY21zLLauDSgapGp7WBdd7PgbrLN6B9PVzY7nsRFDsLzXBwKPFxuK3yrB3akCGAkrZH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dqHoenJK5B24AtJi1CmF2fnK2fJScGcKqSrgX1MFJK3yh1F2aexxSJ3UAHfqewW7FfxM8DMu1MMQxbd2q2MAtDt",
  "key1": "JNMUivJHrznSjAwwJHrZdCRYveRqvRBTdBB8tnSJFR1mKwUqQEGnkafqKfv8nxkV7JHsRdYyXL7FyUgrHAo4tpH",
  "key2": "2rHbR3VRjQWmJSweZ3TmKx7pzxjbjg8ELku7JTxbC6Bjfz5TxHaqGnB4fgRT11Sd1thD8JSkwhU7LiREeKCX7h62",
  "key3": "2ajeVeCt7rY3tYBYjAihKNpBqLo5vQcoS8sRZ3aqn3AtiUyoSyUHx7TCEwJpYh3YJHSFVLWaoAW79krgVCnCvvEf",
  "key4": "sakr9nyEkBz2RsoYZiggq1Z1Gn6t3pBfQ5bDesgtcVEt9t3kek7kpLZiYU3WbpnsRSrAs4ygpx316bna3uUwWiR",
  "key5": "4qeCjbTaH6KRrfnw17erhAuSVXZJhCiyppeLpxfJeSmPuiLydGAwSxrhNwwPoaecE4ypacRXXEA1gzz7n8NCiLuN",
  "key6": "XUbfGr8wTcEPKxug3fhCMZeA1neiMXzfEc9dWqVE5fJ4QrVPifhX4dbny3rFU5pb8rUR4uc1hDTy4q5uBBdvFqn",
  "key7": "3d1DDpTa8VQXCYn9hwMi2gXN8eciNFdyW97nakgEq1vEjYvfdHdmHRQZpPQ4AeGurRJ6ewzaZt244RR8HQou6FG1",
  "key8": "46VTVrybWbiXtQ3Vn79JuzcoFPX1FGdmozsNKj7hz5YagPCQaCz7BFzoArCt7wTza1WWLmWxJzZKPDw7pdrKKofd",
  "key9": "nHBMzDCRbCttzLeRKCaxS5YTRtTUtmss4uer4bRatCRTV4buHVKJwnnrDzrwkNX5cxSVXAahyhc4mY4G4zP4Yz7",
  "key10": "F86tkx95hL8SML9Pg5QTDhMPhcUry496pE8wnM7ceWZNTtzsx82FST251UQTXCpzbWQX1hjeMBTuihVbgBf4m4X",
  "key11": "4WdEguHnAVqjp4dYA9qufDvf3XmChvGyEKh7MQBoKnoxEHLBxsGV6D8YHijstkeiDewYexNpB32CyujnPjT4mcRA",
  "key12": "2xnJm5dbnpHRGDf2wWmqTfN1gGM9L2XcQfAsZy2pogMj7NRuoheXvjZH5eMwupLWXRVZxybJmd5VpAqWktsCRSBZ",
  "key13": "2abZYrtdkqpbFN9jmU9pY4mXJuQtPQdibymJWKZ6prRgwWvyuv4798qsfGJgxY1dWNyMSwaajW7yHQXUAkh1DNfS",
  "key14": "31K54vJMZqttWm7oK7J11yieN7Z9pj7TNr1mHXAY8sXSbe1EnpoHBpcGgfWH1GCJeCdUMi3wdy5wKqjv7TKTBSqz",
  "key15": "5rErKniTLTuddTd6zgeEQxVBxv8afU52PwAqwA45YQz86CgZHh8BC3yYkyLKHYkuankaVV1qRGTdV3ncCh1YckHe",
  "key16": "2MV6JvCnMwCZ679RYdhFNKRDpoThX6JLPC2duNC5WG96qjyrDqk4wfrYTJiY4uEcQ3m4u6XkqJTj3CUm3nyXigR7",
  "key17": "4hBymxW35m68M9hjrT4fXg4ZWUXgjx7SNZUPh8yZhp6kHxugKtkfZA2JtHXUprzDcr1qB5k1L7W5V74ags7qaRjm",
  "key18": "2mkAyiPwbMQhMvbrf1hpqZnJwTag4J2G6aHnrMcqJdW5z37uVDXrWiyLRZeQ9DWm7KqXrGDUtFTFFkfBBQhc9VUH",
  "key19": "3yJ3XUJ5YfKKhtvK51wBqCFVUijyX9g27isuxL7uh8pUTS1LZjXRbCaYQH2Av3Hk2SGfrD9GUKrcuwB6ZKP1Y9p3",
  "key20": "3eCnRzjk5cZe7apNvtBJmuGBbT4FKaPcgv1Q2tM8CydrjpoqoaiRhWxF6SVYvSUAPJpcgoyZECJvWepHSb9RvqHg",
  "key21": "2Mv7dZnUDqCxC3EtzwjCkpc4kYBDyRjk6pT63jLaRjHpzoCawNXg6fo9URTFQMTK4BLubUvn6B7tMFYzwczcgDsG",
  "key22": "5tQD6fHyynfaHyVCYZE4eqeJErBpgcNRxTDB6ZXGVSvJdEcJEcJxX9osMiKqpwc1oe3jiHF3psHGZnq9iV6vvkzf",
  "key23": "3Wb454YGEHQZs4FmiRYJfpj7j7JGpvRM438ZFMeuBeHiaKha47buLXoqzeopbdd7fhcic9rEy2V7VKE4RiYV8j6T",
  "key24": "55Ds9VQWAsQmvApzk3Tf2vGLYozt1VLkbcMQ3aXdCURUy4rpuzzBYGNRHKzHduhtEFZksunqNC4fuAok76YShijm",
  "key25": "3eWkosq4BhRRJeujzmu8GknAriPcAp99QcUewaN7CLkSi88LbEXPy7r6DoaNvBQ426vFGjiPt42YHdcVo9xR3Wd3",
  "key26": "4CLbVQbG9EL4brsPGD9tagM1v1pgipj5tqTCzJ5De3HxmCAsGrDc5k2DpgrPVTjnU8qjNf6auuLNM1YtFwUmBTcv",
  "key27": "xPV4Xn3i18dSsf5dwrehx9kFnS4xG2UryL6hnQ4ru9SY6b25pKcSGppiz5uwPfJmgiJZxhahwLJ5WWQetUdU6Bt",
  "key28": "t9q8T33SwkNitydAUeTKTKc3BwqTAkGo84KSQvY9QzzWrRxV1Qbzknr1d2JXwCFTFaYrb8CysEGSPZiSmdM6kG4",
  "key29": "5ixWvFgb9vEHQJjysArBZqHm8zmtbHQnRzJTmDaAZLWRe7eye2WZmpMzcWfrBDboXBZR7XRyobVPrTsov9UzBDSw",
  "key30": "3spuzAPmsVc1DBRGfD6sHATnomQwGg96P995UD8c1zaPUMZ72bqWdwBGBRosFUFcVpRJ8FL8Gx3cW73a4Apu67H4",
  "key31": "3qu8daLqsgx9rsXCh479j5zx4dGpZJvFQ16KLQGCr3qwZg3t1iac7KDuCVtc1SZ7ebvZ2DFh4XpWxT2umJPuqiuK",
  "key32": "45ZGwW6z7CLt7UxgK33uNsMxJXxTcoG3ywFGiDnaaakGE4twHDaaocaPrxJppCmrowmTvMGy85mnEUJGQyDhJwUr",
  "key33": "2UfTKd3teyCez94vxUqtgb6Gzdde68KH3JAXrngsWs53KRSt4nfBvguXmVmmASVkLGPrhYNMVbPDnR7PMQDGYvUo",
  "key34": "3386HkujTZmf5d49WzesqNRC32rAbgsCsinbq4rbiKbNYRS4sRjucxSaTCCq7htgAP8fB8JCSMPumfSHBy9opEoL",
  "key35": "382k2tabar6oYTHYTSYKCWqHvgCZ2CDiJnJzM5Mjkej5VMdfCLTXtmJGpEgmo7KR3XsaNzqKygjVzpiuJiMSx18f",
  "key36": "AoA9oAh9moDAz5rgvUcg21YYj2jbRCxbVkyZhtXF8sCqfMzwGmkBS2kzmNyuP5CXfMqoePPy7So5kYNy5zoCV1f",
  "key37": "423SixAnqP7grMjsukbtjGsgLKYdYErKkT8SKRNf4K9s4rwBfkWiju1abyuAjeQH8xrXwMzWfeKhf8gECs8nXWVn",
  "key38": "3xaQBC7jriU9MUvJVetAbDup4r95gQiWddVErw2KJ5UMMFx8cwYVG2vDCcXKRZQJzohoBLLgm88FJSQhqJ9Mg2M2",
  "key39": "aCp2HzebY4barVhw6NYgEW3CtiVPo8X1kZxQCV9xWaRnYVcy1dGteS55dFwfLLdjYtxXfhRrXv8j77uxpfks7qV",
  "key40": "pbmk928bBaEMaPeihEx3RMDo1ZiJsvq3sTkybmCiChbtGao1N6Po9AJb898zKRVLGKY6ui1xYVB5vFBE2exC6EE",
  "key41": "47jGqJvqrAc9jiwsaTy6PDPaKauLcjdLdstSFJRe9zcgpL5K34gkj24e93Xf2xrouCvuqR2suHiuBnBvFekrqnqX",
  "key42": "52kBpW48G8Cx7mvdjhTuq1wuwszzTEpcXNmcGrLrA6WD71Kfsim18c1zxwghVw3DuA9RnKS8QKT8JwwGXfK6DjW",
  "key43": "44DVZdq6f7vvvTtXxAYjmTJZyKEoA7YntERRkPZ1iumyQGj8cq9rmKAk6R5qfZKDNFJDAbE92H2p3aaJBB1bSDXH",
  "key44": "3WDdhUPzfr3PWxpto4nxoNaXTG7y1UvYGxkbExgLCxZUDVb7uSPCTesw9mq3mm7daPLXUtZy6EBph4udJRBaESks",
  "key45": "2jnNGCEfKd9wTynTJZZB2phiZ1fyb5MxzAAZzyMcjbVNWAUvkLREbHfjVNVDVu7zbDrsUNDTexkgKhdo4nEhr4cP",
  "key46": "2gJQmpfjmrX2gDwopovD8WVvGQSrKJDCvwq5bZ6HjoYt9qVB24xc66ZvZ9s24JqXX2vcifA28uuyoAmyKqjee41t",
  "key47": "29jm5qdVKnRkvQCCMGvo5eCHP9rFD4vWaJLsYzXHs19hkSq5GVnJtXx6v1PkUeBRdKCDEfDAQDiA4mC6LU7GQmTU",
  "key48": "2TqsfTxyFSaWDjovxGxPy5J1Z6tAraz6pqYv4xrLycLNTt8UKTKtNDxGxxL1Cp5b6BsQGHL9aNj7SvM3ypfGtcTr"
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
