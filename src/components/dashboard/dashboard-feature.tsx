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
    "5UHuZSSuqPtya425H8SKKMAh7iyEN7NJwBjBzbwcmAQRMjWb6y7Psd2cVzmg46CKepX8aiPUBxRwRd5a7VTWTWRN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3snGVeAL2ZwGkec8vLqnR9WU6vNDFzAPLqNzsVFuuzZdBWdM9BCfxvDnVq6YXULv3RWQfFz248Gydg5pHymnRCZN",
  "key1": "ADMceDfhnLVboGNjb2PcPzoi9aAmPg2b8ZZKbD3WQ8XGFwuLMjBG19GXxqHBTJ4n4Kcedb5ETWTpxBg3NqT4N3L",
  "key2": "4yGeNNPzPbQCnGsERHaKRQoGGYNAzQ1NVSJTyhX1UwTvcdcm6UrzycnGSRcQH3VBEf3GTNBuw588ZvGdYS5ijDPr",
  "key3": "4ZssSYwxV4BU7vhDTAuNCRP81zeZiDqPCWcAoDwihghchj8n1EMobPCcRGEU5w7c3KNStxrdd1s9xKcCN9P2vyTn",
  "key4": "4pwBvnaXYpxCLTz8CqUuF6LDBsupjGk4eqhqpotVEYFpQrnFDu3u5AZ9XZKLB2NaGYoWJDaN5EBCaSbxFnyVvqDN",
  "key5": "4wrztE4Fhpn3igXfFrvCoXxgtJUAJnTexyJQHfDNzoNZDTwzYpKM1GP2jQH5SvsemSpLqsKRqCyLQagR2NNhBmm3",
  "key6": "2u8UhT6V3szaXYGxexPfP7VpLbcy1tsHZNd9K3pY4gNv1UMxA7g326VeVntDEmxasjpjLRPe3BVLccqzg5hjrjMS",
  "key7": "4VjfJ1vE1nqzLnJco1SJTBy7nGCWN1Quy7yeBVnzze9p4PAKSr5qCpfGHzii4M8KuCnAND6BcVhbMbLQR6Q53bbd",
  "key8": "3PMezwJTsC4XaQSMaPYPvZpAcVmHasPQUTTvaLysqMctf5FnaGMBb2E1B2LgM5rz33d2Cqk7dWFyXLnmBHKeF484",
  "key9": "5Xj259gYH2tuASCXtXN92iaVdHR6YxKN5f5u5yy6G8rCgiDzHH7nu13rYnsaovvs6UevmLhVGSPy7Dnt841DmAUN",
  "key10": "4s16dwktLwXjp5Y1RAJ6SCNTPWHMdZbEg97TVCyLkekgaRGbv6duejihNezeReW5ArHQ1E3rU8tNsYcx8mF5iSCr",
  "key11": "4wTA4ekQmEhqdchx2kVstFMCtSJNTR4W28VhUMsRSP5JTDtUWsyDjGRvwpFxA5GHxTtRkuj8LkgNM1WybavxgPue",
  "key12": "2aLFNbDxBFXJaVuCZm1jpMPYmuB43bMmXf4kPy8eiriB9Qs6E8B8PN1tvijFhJ3oNm2Vo5Hwp3sJTnY4a1pqAZzR",
  "key13": "2YpUcxH6FDbBS9zZoi4JeKXshCddVQNdxRxWBDzNqs7HtEaFYkZP81ViAbskoZypwWmf2sWzVrAyav7yUrY4S89j",
  "key14": "46QXwYSJ6PhNNrg9K512f7eE2oJvx8gi6gJbwc76oC4yTKThFF1qh39hCWLNbogHmVnVwg5DAiYSX5mBdzodnfmz",
  "key15": "5TKjdnvG2GBegsHmkobtBgNUYuh48VqbFuCJurwBJ7ie79diR9eJo6Nzp4drE8t6tNNubR26PqZJU9CggqVqhWAZ",
  "key16": "4vjvw3FtbJNQ3ZvTRTrDezAptDBc3N2ibVxAq1Qawk2j9ucZpdnsBE3gaYKpyftN9uRqCDne463CZgec6rBFAfLc",
  "key17": "3vBQymBUW4b12yh3wEJJdKwq9tUzwUKDDkeaMjb6b68xJ1jueVPHiPjPe2VwTJtob4uPHPRAinjMSkmpPYv4nn9m",
  "key18": "54upLzygVqW6RiipfsFvgGABR485gc2okiPtygP8qwzSK9mcWJiHEKpEqSjYwoSAtBntJyUpvEzJxspmcgeZxS2B",
  "key19": "3WKSMwfJXgHKv2RDWAmfSUZ9nburga7JkwMC4E27LS7wkNsNybwJguqQzbyHT8PzMEMXqSngZmvXTL38moJRiPai",
  "key20": "3mUPgpwm3PxLQhh54W15Myj2wRwrERF2ek1HY6ZK2PFgiuHLJHBqd55cPDL2GoS2jUQG3D2Z6FWpvt2hEVG1K97G",
  "key21": "3rQmsBMQbAzE61gC23nZwr4Q6evEKtAzHbV2YV5Gf5gAeAGSDvAsjTSUEcykNBJgzfRMYnktUUj8LkuzKAVdkDaZ",
  "key22": "58Qs4su3ucGxw5h3WyHonP2D7DtNo6sTHJgVzPfnTzTdgSZEPavKr3Y7cNDFaBBQ6FYn5mXp74byzpHshzfzbES4",
  "key23": "2pB1i1f2XQcxduJqMZPDCmw3ETgFPgzwp3wGmFVRxrHPFaovsFNvSVLdUdqkmcjPETyjcrPodmCJGwp2xCebTNXk",
  "key24": "moKuABRqGA6MYFufnY5b9WL99ejN22JjvmTde8tHKsv4QcDWqwFywGXBwMwr6KS2AfQdbYRWwgEyv1Cr78wAne4",
  "key25": "2NbsNjTdnGjoFcb7sJUNPpdcdjyEYBRHEtr97FPjrA6X4R6t4xiZSueCQCq2SZaXqsUruDrftxYjBq8HqKUGG2A",
  "key26": "4HwS2LGV2zJHm7g6aUmKjNcqTMe95aNUg7yQJastGtDwTRhCjbPR1zeqLPisqT1bwb8rSKsreGfHibZVdLXrZLNt",
  "key27": "5AdhwHzdHfvJZSXJ2hhNTDzvUcmxPFZabH47rTxSAonWstpVCRhqJbzQwtd77KiziGbEJPiHFdcvw3m5vRJ6Ek9v",
  "key28": "2PDT11QVX7gNDAiwEHcJXxcceyfurgc4b9mpgogHhFPpnjs2JpVmQZLrWJFmPWgwud5amqeCiKGHHyunwyiwKZ4f",
  "key29": "cXc1jjbZ5zPYx2JaUcjU3o2m9aB4SKFa16XZ1AEdpWKYkMGAQqipBpYf5VGoERcgKJRYRaCRw8XribQeaWu4Mj5",
  "key30": "VnT7ht7Bvu6Yb6XACzKjWhcz8A5T1yjEWeNkZPg4zDDHemuN9SL9zGsem2PhyHAN8QF7KmdMu3R8ybHKdt6mA8c",
  "key31": "52ev621n3WQdZ1W4PLLaVek7YoSenGo4rfWU7VJgp7DsBvjkFpXy9VHBVrs1fAFD8AvrF8WXqQk4ujHLgX7PxzQd",
  "key32": "2xgHmxyB4zYH7MqqajoX2MLeboXQ2cXCfHPU5dvzbiJ1jM2i1XokGMkPXgASmV9XppPX13eSz57SjMsrQVrgK6Ft",
  "key33": "5uoP8TQRWuVgtEUTrwRqFhkQaYdkJsf1ZJn5A4KBFUeSntjP1wophihgpmkJjtnZyS4n6xgccfYLed1aDTN3SoSv",
  "key34": "imD1ECfiCaMWy1XciMhRzRW1uY4ydxuxigJMk2bHb6aTX5xKCnEdouLWBzmmnbHVg3Y7khrjxJa9gXRxnv1SJaB",
  "key35": "67TfwJHf6qhA4jZMhtUiiFv5JkYJGz3JY2LLY236chsuzR9DMGtQXzxW6FpGtg5x6SMfnkDupsYMe8ixhaV1ZZQP",
  "key36": "2pZNifZ2ZEAMMcXUECynnQegoiiXvb8Rx4iGsWG8pBvshBDdTQKxBj1rPCDERmNsCHwXjHHbPkortJNRcQEXHvtV",
  "key37": "64g1V8qn7r8nXD4yvBJY4b4Vd2ib1WiT4SWyvEajKzGvutMYLmsvqEhknyLLPYFXdBzNZh8Xy1umu2BbaRZP9cHe",
  "key38": "3JjWgNJsidsXdLTn3iN8a9yfbwypmpkeTG6iaXRWLi5ytfPpp5CcLyEErY8iEge3iQs4BGUn3kQJND27RZLiwPBw",
  "key39": "99NAxymYiJkLDejLu7eDHx64TwcazRMFywJ8EvNNS77f9b5WdzG2PLCcAtMwXmao9L9y2NR7E5S3QMhuxYRnAab",
  "key40": "331iz1cEJwaVFLQUzX7mv1smAvvEgDLg6R3k5maitqNNbWiLccCzVfx8qdHjrrS7PAi63CxETbK7g44Njb4xFQqi",
  "key41": "2Wyy2fBZqg6nK1pqqyUcUVAftaxcA48UWzegaoZByM5sRAT364Z4ECVmhvvfCkTWekczHwphkm76LNKCn766PYD1",
  "key42": "3utX1rMC1Xti2f2XE8tEf4xTQ5CuGaVLsyEWR8iCYgCy27Kp2TBEaCoRtLiM6qz75ciWtLaTTsxeHrLvn6DzYES8",
  "key43": "3Y6ep8q9NjMkGFy1HdQBKBreBfshPd1w3a6DFrgbYaAEPpBofjBSWR54tRWK3t5oBeTLLU61STS5QMXEtPMhRtcN",
  "key44": "5jBm4DCJizFmUV1xXSVUbm9H265tKiCB1b7nnkfr3VubCVnWFWw166BSdJoZtWpbr7VTSq2DQSsnU2WAEL887gzt",
  "key45": "knjf8NKduzkyA3KfTfHMztd9ESxWdgXBH8TFiwka4MQPW7uGPGEJCt6NCmpFAEur6GRi4KW11TfcUxg8a8ez8ZT",
  "key46": "2teLfbLLrhs8A5388aWx9naienY4aWK4SPdEAP8DL3Rub2Wa4YZbHUghY2MjQ7CBTNiJNSZk6XPWCHiaMndGnKJu",
  "key47": "2dHvQ1jmAr27trc1chMZ3UcvyrQ5GdGwnndtjYBmiWAoJPkw74sqDvwsMUMf7jNF2GeKvD838xfkSDy8i7ZWv4L9",
  "key48": "5Tu1Appqi6tVFsTvGC7tqLGXSmQcAm1vgjVC1Q7CMVarwDKQbjRa4p6obGxy9EhAiJhmJTLE4Ao91N6StCkRED6L",
  "key49": "4dUBPMQCPUhYJxsXFL1pX6DgjNbMcPLLiyRTHcvmscGV7Ne6W1jqmRTw4s27BWecZGDjKFhrRYwp4Rd7xqkoC6of"
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
