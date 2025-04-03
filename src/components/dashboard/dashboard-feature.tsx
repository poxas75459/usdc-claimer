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
    "3rwTH9gTkMivvhkGLmwhR6dgWo2cTDEWUgTddPcCPou4id3WkAm8iPKjVv2a2Srn1bhRhkoCiZgyfTHbJxybMNw1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "poMbdbfb82bemgpv8SsQ1KdwSHx2DjcdajkWY3jb1Xpdy9wiektFxUDB9kbjhwy5szrJtbU8ZgZJFyhxxz9UTty",
  "key1": "2YgK6ePk8ktxFTTR7rYCA4wnfSaSbS6fmXv8xHkQo1oWEkcFUM25PKLrkVEoLt7uamrVXEyvXWHhdTtVevPuDgZ9",
  "key2": "2qL3tG1CjXEvCkwU3eb63rFmw7XqmxaPzcqHESaVpBkPKBrbfjh8wbhfw77ZqM68yWqhP6PocyWU4vMNZWeHwoaq",
  "key3": "VEqSzF4FzjDx6jpyGqUJQZxpv5AVSUXUqZt3ckFjKsLvF5WTnomxDAG8SFZgoTFog4rFu6DQkTJyH4JaJoqe19b",
  "key4": "2TDov7JufGULgCSCgSL5dQuABh7VhQ7P754gDETQ6VCc5YQn6ZkXaaRcbCNVxcgEV5hhRcpMUrp4p8AQqSTMSuQh",
  "key5": "36tARhqr2mgZmkKF8FyEQ6ow1G2zSzc84E1P8v8gmoft2aBqQXB2ZY7vSKntFwW8zqzEX2wsX7bePhuDGvjM2wGg",
  "key6": "39aLR1J9Sv81M4YmxtveAL1vwfRpnREDXp9n8UEsijPTPcWZSBvzKGLaDBXvvRSP1CeNnKnsJAaWfcY2rqNjdpGW",
  "key7": "5dMHXfMowiVUqVKPYTgrrPLAPebQNrCxDY7zNvXYTk1jwrn9NNeSWHDSmJeEGqzjYGvty9ajBvcuVEsMuUHvuLVa",
  "key8": "T9hYqvssfmZW2k2bZqAmG1DGzQZATw2g8EivMzJDG2UXq9v3MC8WYsmRJMXuySbTrCzkCSUt31joT8WtGp75Hd9",
  "key9": "4uCw5pKkzf1xzUmtXdZTK7xVSPLVgL3xTvUDs3HKPM3p974eK5K3H3a4cJMYMqq1hk8uknBBTWJYEvTG48JJ7Ai5",
  "key10": "4dTVGyxKNfghujkN4FeNHTXXp2fmo1SfNs5rk4cbxiDdmNopQfJcZmmRzyNUPq9MACF22WhK9RE3kUBDF7bVM5JJ",
  "key11": "5qM2gdb3GGAhR1BnyyBPNvKRA6BNDHRGoaMj5eGGtnyZAb3dpgeka8LGRuKk9j7WeBtJ59qN2amPBvSLhBgATQSb",
  "key12": "31rH7pvnnn9Cw2FLj4UCnXh22McFHMXT7EPJNYiLqfzS2f6R8tynzcHq2CPZdKTnrgFP3ZXsyhbuA4gZyVyA3abb",
  "key13": "2Dt77uzp3GyRepKJ4p1hGEwmj9yVSsWSbyCpRZ5WiyghyxF68mcvkTsGeNHzKLSmwaRWH42pZ1NnGqBB9YPktW7N",
  "key14": "3ZLN62pmGQpP5pLu1d2cTE1BbSAewJQd9Zkg2o76WhQED938ihwez7mixxzbXWCz3LURxZjmK79cvEeBLaYRqX8b",
  "key15": "nRLEavQ5VACbT8mvNKGHrHgJ9wQk8tUJmtkjd4Z5rUWdWUMoyYLbN3tK1UHoDqsunZN1p6AaZ97qGVE7Cwk3Lrr",
  "key16": "3hqaJHAKZhj2xyBBAL2GqWksSothMtmPS24imX1otvrvEqaFWZbiBv6ankYegBpfGMvmdh7nyEBc9mDGs78Eqd8y",
  "key17": "3pMDt7HqEiEipAVH5W6yc7uwu4YvvX8aJFg9q7uCYGsh7tEndfbeaHtd8U3vgrGhGmgvktEomUsPqgHqgew7PTYS",
  "key18": "3DZhzvkKW3Swqj1tYKgpVbxxCyueGN27mhr7XjiK4EdEUqeJ2Mz6RX3aUHDnhnJGKqcbGYp1eKjnGEwARrCFT111",
  "key19": "47fC2i1MvVtWQnukRsoEmMBAFCgPYRrezSXcbdYY7mH7vfBgSXf8Nwn3p7Hv5S4YgvHMLdM7tjYNwhUyivv8HqzB",
  "key20": "5X28jhmWN9wxnqQBUsSZgm1y1NfXcxJgNFXvSr8VoEKcqsVmwWbjKREokFEKnTwLNecEd66N311t6nWeegoyoe42",
  "key21": "3xmzivd6zC97HgbquYyi8pexVoMqiSTZf7zZ1LSnSRHLqY3GBXVe87uV2QQEpzkif84KyZXBsGanTtAvTsiaxQF",
  "key22": "4WVMdj4UreqWVLPmer8CqcHTDK49NAFjdFcK5FYxBmwVNxSVHgqnZya2dVZmmoeFWpNdjtepLyrnHiEzUzbXvkyZ",
  "key23": "3dt5ePcSkdm4pBdc9tLeBpCsYe79RBVo6CHQBv4FKM3WKa9pH1npgHBvqBs3dEQD5sTm4jgCckufBZnEfg4MMfkt",
  "key24": "C5z9mfnmb2t8psiB1dYDQ4XSnsBrjMuuFJyvMNWA8V5HKKDSZMPZykgZPYks7jsQJJFM7QDt1LmESTZu4dwdABJ",
  "key25": "2iBUFyU8RMBv9KSoPjrFcYoow9Q3wN8LdukLrjsXfJ26V7WminnMjes1pAn8JHqfMhA25Ch34SSBPNqJCvkBU4ZM",
  "key26": "G5wfFTdpXW9YbBQfDhaiZnnwXgu6aDemXvV8JcF556T4o2oYnQMvGPxKKNUBwzJzDniZ1ijXVXgDCZcnJv4L7qo",
  "key27": "2VMiEmcS4n8D97wUrQdSyYWDrwKSZAVk8tRJJ561Dw5mLmQfyBV4isnXAdTGsn3xosUrC9A4hrrgWAMWTZDFv8xD",
  "key28": "3uF1nutb8EiV4ySMj89nw8PTLYerKX8bkWsYvgwoVrUxAsJDDaz1qgE2QMfemPphoDVUmVTq5imS2LPAVPPPRrCt",
  "key29": "sWDBefWngGuMKGCytCSC91Nrg8Mrr5pkwmrJaJedguLaGE9BMhEc1NEFLWkPrWRuJwshHs54dg2Jj8kHm7jT3Qn",
  "key30": "61XFbquq3xNc3yKbmgb4nPycLGFUHJLqH4LcEB33bfKsKrMMZ1FZtrQ5h3FjBBPujZyyopXDzzXu4RogjQJAbVJ4",
  "key31": "53oxbbTvr6Xo6oAS1PYV3irTDBZT3p1cjym2qivWTwhQrXpohqvGoYHJ9pktgG1N4ZwxLhcZweQUWt1z6W8Eogbg",
  "key32": "3SYRKUydEyykR9E7YQPCTYSUuWiGtVjP7bUSPiAJbhKGydKfkiWwmMNWGZ7oEX5fivBWrTucRZFZaogTpAZXNXqx",
  "key33": "5A8bHrC2dKRDoNAr5nPtyNs28um4jmk2EPn6BtJkrChwuvs2xyFaiDD2tEDtquqJgJN3X4B8KcLndNZrqEJt2b26",
  "key34": "3syXfraj6jQoprPx16gJ3MfxryjFRiRgP4JhMxJrqUismRSRa6yEheE2YMzAN8a4BNCnw3EcQ7MNieCeDftSvfBB",
  "key35": "4Xp9NEfH8RRmtRgfGiCJaRV4iCMngbJkzdJsQkEbRmBGPzST43qdJ2JNUVa63B4awZPTT3E8p46EiHthh1TsUwY4",
  "key36": "2p13bZqNmQVHkMn5jBPyGHoPSV5wuzJG7JTDEjzuMdGRDHEqkk6iaf8E57pzUWHwkiPyWweod6vaZW1yqDawJQGS",
  "key37": "5BwPJtcC4yiom6rLeTntqeWd7BAVUi2YFwx5i1UYszHFsRepovNFfVa1ntuxi69uE1ReLA4cTSwFxcNwkiRMXQLK",
  "key38": "2daQWgCYfRvuFK4yEyxArhrvPW3bTCEkgAEF2sTDANRDcVZCZUPyvx8r5DPfmemWCazfHiB2NnMnB1JQU5VDB85y",
  "key39": "4AnJ64AoihiStfPwzobgiwWajePPCHUoqowApZoEQCoBuMkdhgzBP6efAVprUhRiYdDTsnHLkgnAuGZWv7es8Qxk",
  "key40": "5yD1euPbu6oWT3KM93ZPcVs9CBQ9QkVTSFHEnsRNBYEWcu5wFcdkaEgaMY61fuv8vVav4ZwUyz3ydyw2AvhUGNrE",
  "key41": "5VuEzF9n32xgoHBWXagFG4mLTYQTg44aVFZCGEdNGqyAnSbgmEu7a7bRMoCx3ja9kJMurNkbjBbgUjoWK1sYNj19",
  "key42": "3JBNZnPqXshW6e8j6GPL9Q266roT5TqQrvkJ6ALoP3z4A88wsQrv1uaDezyi521jL93qVFcdJ4bx7FZzsAzHK5zh",
  "key43": "4K4Tw6Em2ZTLgXoZbWgeFajr1wEPrW1sfjYenMX795HErHTpYb7Ra7G25s5m5CFSaxFSXU5RLhrSy2Pisybhffvx",
  "key44": "4LCUKPLXKwT9JYbhCF2XwQX8xufwL3dWsKF8F28qzQF9P79v5UwfdKC3mSrEbkTmu86xw5eswxwaGpY4zdsexYNb",
  "key45": "3NhY7jkky6CRW7yBSippmPABo9PywD5YVN1uCLKsGssWbKYHyfpMmrySCQVKFVUcMPj3Vrzwp82eXLA4aHK7WnMR",
  "key46": "4WTuxYSiqp1Jtth3zyPCM92vqbdfBvrpMdJAqJokPudf7FycApAz2nM6N186tgiEQG8dWFZSmmN5YCfRbBFyHDb2",
  "key47": "3FjXMjfniPBEQQTdZN8iS2rh8y93fVbgX6jj6WDzVR7h3yayRqZUkvzXS1z2W82jKtHycNK1pE8SxxVZb8HYHo8p",
  "key48": "3a71hFg1QS5WXMYm1Jo19WyqLJJBCLhbnZf8wSqNL9a3RMaSYMbsMyfXbz5GDNsiKGGA85v4tEa3z8oyjDyCkgsa",
  "key49": "55bQUURqjuh9gVnhApck793y9WVyitj3EAdbd3bZGFiQrN6ynBN9KaCVrs3zzKfmbm4SvDnSdSZtrGHVMrQy8x9B"
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
