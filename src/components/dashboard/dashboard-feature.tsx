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
    "2UQcxcuh4rvqqSiAU2nSsneYnuGdLUDyq1Qq4kyYzonLK14c5upQDPm5gHhQjtC43tsSU564nFGFgF9FvsJ5YRMy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZZrjWcCQV9qkfasLH9EadjJbqV41uiwNee64Zt5vsvmusF2FEuG5TycHcfwTnQ3iYVgxRTg6CvvckJeZwnWHkLx",
  "key1": "3iVkcTZsRYHYQdhiuyCBsPeGr13XQvF4LrbCTgEa8uQfMnhcfvzgNqLQA97qUHASC9UiXLtTfwu271EDANm1hscs",
  "key2": "5jCTRixmtZPRjtwaHPfQtkj4wpoNGAx4oqUMjBNsBDZtXbYAL6bpTQEJHtyfwc3SQZ26g3AEQdRioivLct8BVqLt",
  "key3": "27R5xAi4QPC6g6eAAbNMA38xDRQkoxD9d4piPp88Kq7QpCJV3ioErydA5vzxfGjb9giLhjj3jbvR6aRLh1d29jCn",
  "key4": "2wnt3qs1JVvKfzYK2oszuwNRxXxnTd1hLxdgy7yYCHHWzRtQFowZMjzFYNiKazx7BksP99e5rsFDR1XopktTbDwe",
  "key5": "32fcoqyjZ4q76bqcuaSk6LGUqkk4ae9rCMJdCR5trjt6RE4oJ9ftihu8CjUdYsCmJWndsyAW1t8Q9nVaA4BXJ9jk",
  "key6": "3pDVDhUTspBqur3nK1CVGjkrKyYTBDy54Y9MFKk6yrrorB2D9gh53UJz4vmXotVn6LiN38mHyWkJgvRcFKDbdFBB",
  "key7": "34cTWkFRNgvJchyUGSbzM8MvVNhZUhpDNvT1UHkjYJjBN8MszycCC6UNhK7KH3m5v7SkLYsFExDLeEy7p8Aeqfmi",
  "key8": "4BCrdHPn31D1G1RThXJtRxE867c7HwvLdkbyUjxmihqEsNFa4TUsTx3YPJeZ5UG6g95Mc6kYKCSrGpd9CB6UEWxs",
  "key9": "3fk5S4xtqfFNHLUYkoksbov2vXjP5oSewzwFsMzDqB5PgaBXqP1GGbpJep2FjvL8p55FoZ9p531EzYkhSXU6VWrM",
  "key10": "3HK6J8qV6yo37qbxvLXanzVMTQ7Ta8M9t8PVBBbZfH8H9A5ahwRP3gEAdkyqraYLD64RaJvssXsA2sgddpkGhBRj",
  "key11": "39s5QxNHyg4u9oNsN6QbFyiHN825Q93Qps7mXtn7UHB9JaJL26ofZQQC8uPEK4Fg3dzMS73vx5apWeRFq1n41z3f",
  "key12": "5bURq1pGiqZAB1qfVGYDjNT8V1JLDUT8kUpRwqh9GMnGEGCKJSsvm2mmCRJZxtpqmuuuQo1H53kBMvGiPbkvcWfA",
  "key13": "aR1JvsigG3FdkCoy93dRoWnf6WqT82ke7EaKBZstDEQU3N6KKKiCn1ATbfGB2R5RegujpKYSJAsHZFuWyhWkags",
  "key14": "3ntJWQX2TVhAABiKXMnoPtqkqkpDmwx9EmhD9MC5ZBk1HwSGMyP5XBAkcHXDNSKmeg4jVUPDrXD2CC4GXmKNfJei",
  "key15": "1GdnqkbDnAvvKEio22FfuXSET4tBDRVVDUZ4ge6J5z2YGHX5PxEVGuAuGX7TKbpBaFxMifthUajm8EtsgB5YJht",
  "key16": "5QrrosskvdPDTg6LPeEmxJs3rPS8tPrDu7ABVQizhuXNbDiTHAWJhJo4JFjaMaB2gPXhCftcDf1R41oGUyMMxaZ5",
  "key17": "3a1u7e7inocuuBfAhZ12BUexCw3XoFtG6YMRZDskZvPPcjxMt1BN8piQDU8GGmZNNDTC33gB6QHkPoJwHLhWN2xX",
  "key18": "48Uf3Ae5Uq5iBVSnaaLjTZ7ZxUf4Eg4CN5rvEwCBKLdbmfUhTkjBPJKfoHTCN6ffgYpj4iUdSzGEBvsaGNxmu7sf",
  "key19": "4efPfzy7KKpjRX3Pvkb5ZW2mG7Ws8F67cPMGh9bboMPrTz8E6w5ePoqxbyaJifYzg91vPRh82eX94GmXZw37Th3J",
  "key20": "4k9zJokwa8km7TwXMcyJ9w245Wyw1WzQqy9cJFsPHLNn8tSfxAuC3fVBHNzhsPZkcg44U9niB2UAwmph7s6hpSM6",
  "key21": "WxegZUWYmjnKtio4zvZr91g4HGgs6UDdAGsTTawXugPoRhPW3oA8zLYKMMj9CvdZrxAKT3Xx7sbrejDJcvBL18f",
  "key22": "5HEuBRYrnKNoEMaTELWQiQPhra4tVXfuvg1ydirQ8cfDMV8MutpWpPzQbGUKx5ifetMNCFL7srSbwxHQKciWMCss",
  "key23": "cpAudqWEyV1x2AArXFkQNjs9JWEq9KfxkEZzYuxYYD4pfDHVz1eWbXpXvmXCAUg89a7qbN6rMt8ZPuc77xtSmHA",
  "key24": "3UwFYFPGGRhecb7gJWmCRSuJowxPwVia9rt4EeNPGKrQogmpHhVr9DxbWF7aP2rL38wAf24e6nLMQQzsobtaNUVw",
  "key25": "3i19q7bvBHQKTTLSBTo7NBRqgGzAGYfvB1Rd9pJBo3vAekPAGDMRw5xdeVZcXz88EAEkVq3fp3zcjQb4pfsLTJjN",
  "key26": "4HU34Kf6s3MC4DCBD6em1XWWE8sWTMH8AWTVnrBLTtnAg8E7YebibzrQGRX9EUWp6ER6UYfRV1y9KqvtxgcbX4B5",
  "key27": "5NmLcVj9ipktH1aTKzyEytPGvasvCGG5KxngJEyWW7nnMXoBNfg6Dbn3U8N5d4Ldk7vBcsbhjHG7A4GbQbeLzeHR",
  "key28": "yt8S49c547gdBzVhZ8X289QsHBSX8x2mmk7ZoA8PV4jtHaahycuvNuay7hLtiRXWvZbXnUdLMk8bZaUgjrgC5yw",
  "key29": "4JAUmJWj9xt3kohhg3Zb2cwwpdEqtNTdDcFtaqKct5iEiVLw3WqrdoUdoGie4JEogwvdx7L8grj1J1ia9g2An8Zn",
  "key30": "3M58T1Ta767Pvfy8yexFuSmfNLaaedVNk1PUweo1315368HorsmSWBLMEyNyWGzC1wo1A2bBRgRFysNtFebW7gwR",
  "key31": "2KAGXLLdrEeXPa4p3XQrGddc5upK3faAWDti9zPbqWHXYh7P6DKn3Q8pNemCigFR17wGMyP4anLw6gnYQWjkWPoh",
  "key32": "4MJHP9mgZdMpULmE83iinQ4cJ1SSSS1zKWubdzUuHF4AxdNU7RzYXbdzeYhHJBugwrqZNmKUugeQxSjt19oLHYQ1",
  "key33": "4kaZS1dKcmgL3f4vutKnPCy5R9E1eXeWZx1fAkx2QdH6SF4ScXTafn1nu3uqin2nFagUPwYYfHHDwvk6miyGSAiV",
  "key34": "ugbJPU1gMseHiqYSNq1CLodVGpqB9Trxre8FuHAcGSge4rp4SScxjUQwk9UbVoKH2dusHWtKeKwo4edfqDnCqZ5",
  "key35": "357SSXszyrdS7cr5dTuDxNDw8Cs4miH8VBnpVR2VPpaF99U4J9aBxWvKDmuTW3SQrZQxfJKZuZKcNDhTiQrH1USz",
  "key36": "3PttDSQp61funSvTBVagwEYjEM8AZWSYhokPHdg9Pa2H2wdd5Yp6HMHSGaMb24AknqKCH5QofCuEsTWsNn1zWonB",
  "key37": "3hzxaAaHPB14dMDmWphzuzm2RRJsWgdBN3T2m9a62xKjTiDtywSCtaLtthZws7nAjjPjiPuHopQfhJedtM7of2jU",
  "key38": "32Xp6KwQsZFhGSL6bDKJsbu1R7z9qP2dadSDAMBUxtKEx85zm8HvudS22Zk6mjMjWofMjh2dNHbg77TKCd5nhz8y",
  "key39": "V1xmL58QWfRiwQEcc6gPPvJbqUysoF5FwQYxYjEJgW23E9xjNW6W4i75iL6sFWxJB9MVgo7m3CjJ5NeqJ8ZkYMJ",
  "key40": "2Q4LWgSQWMvjB9KtzzetMmipiZjdBi8z4pDrBm31tQPeAVsCxJHyxLkdzkY92KERmAu4C2zbR4aVyrGJvvFuDYs7",
  "key41": "64uwEz7q7bRpDgFAja7gMcPhmiCQEd9SNrnDVcE2Ma9kuF5S9tYEs8Y3LLUpbxY3mq4Mm9LTPA5PnAqp4B8JeHWV",
  "key42": "2WEz4N7zXibn8vJH3gKQdGHGPZZFNsDFVXS8uPvVrYUsZgEGwh97S44to19tsNaPzF57q9GKu5Czh9VMT67g4wvp",
  "key43": "2uf1TkCYnwiaFne5bSSjpkLTNgvPT6K7f5mPFKuboEdUEP6acGoprSx2oNpU8AFJvZhkznkyozGgK3EMm5ZDCnzV",
  "key44": "5fVDYfaPFikBrx4htF7i89H9rfo7A6VtgJ4Fe1butj1RGibNMonrPx2ktSjezLnQDMQ3V4ekMPVvcQmj26J3T4zW",
  "key45": "8ecnJxwEo1pRhraaGNth3NcUTKWR5hwJ8CURVVcwzrCnbc6CjTT8FqDw1tw7fZX3UsdQUA95vFu3NMtpP7Cx3nL",
  "key46": "GoBv7aUsdGPqYteHvneJhBoziReTSusWyAGB1TY69AwRX8zfjDxRSi7Cx4UEp6PNqdMF7WDox5ERf1oiWDovoPK",
  "key47": "3ChUbeZ6ak9omUH2mXW3BGdJzJrxaJvNpkqxQkT7eVw4D1vv2gqTMohhhH88Qkr75Xej3JMbVR9vMN3M4xa3AKkb",
  "key48": "349iSUHgBy8eLWGXZLYAiKVe2J2ENDyinmE7uE6UXqHJrRWT6uLSVLEswcyY7bSJqpC1PiFvosVWtjPtzuixk6Ut"
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
