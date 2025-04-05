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
    "gJ33tRGSXiMBpty8JnpQSkZy2dMecmm5d93YPoeMwpJHFRoanVZWanicQK2MQ214g1n9YmojEfNLC21Q5eAwfPd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63G9SDsj8aNNib6K9dAb1yxbsyajruAfAwXLDoM2mF2oBupREDVcago29fjGZqmWexFoTvErZ5m1pbdLpXm6cjU6",
  "key1": "5oWc77pF2cDD7QphW8QWfkwLtae8PZ7ieURKKnafxDrdRfXQebhv9XDXPJXUMuTubhgQ28H2bGFLmEMm7JC8YXgT",
  "key2": "5vZEgYLFxPHGvdFreEDq9C2JsWZoLhQm5W43cQwXF6a5TxTC6zuCjknHjNCna4TqAx1sYH9LyZgysUmS3BvV8BuR",
  "key3": "QT7MkhD14CD3WP3mDYWPkZUPCVyhy3VHAomU5UsxeZBUc5koSQJpyjiR8PEU9Mr3JgRT2xwGzcaC2bW3Lf8xQqP",
  "key4": "iJYmofaEBZggEZgDGfqUHc14BrLSNFksy6aHVPoSEay9hexmX3ieQ6nFygbNSFNyEcmsdMZT2egtFnFWzhSKDBg",
  "key5": "2YZPsyhdoCvZppTzPF9poNzqLfXJwp619uuscspJW9KdLyhF6oyFMfHmTowsQ33EuBHhG4KBA9pRAvBa3LnYhsej",
  "key6": "42E1zznpiDNxy7ipwPjeFui5HC5NUfM8FFuxnVJorKYmqkX5KYRTL87At3aq1jzEevTstw1u5dADbWyZXxruvQxE",
  "key7": "5oLtGsrVFWyVNm2NCHvsh9qEtN5NKbHvGMwJnSpMAtzNwJtAdXivSw5cdevqmaiHQAxWZiimsy3PN8qspkdSFpdP",
  "key8": "3hJYQRDB5yqRx26uHNKXVnGPd2xyxBJZjSaBEvoXFJ1MY4JtJ7QCLyT4EELtVyRvVVTDppFxckHX8Kr73yPjqs8y",
  "key9": "jxzLbR5Y1J73QSHZhsx8tG9FLLLsag6BN5LwSC2bCQXE5BeHkqBD8Zc2owcYiToz5eCZFyJU8XeaQiQvt2Sqq68",
  "key10": "329yVL63jZaqWMTACZYJyQUbH5MuBh1scG8ii2zUuCMYHL7rkNByBaujQwZKtpTAndSBZcAoy1eDpG53vvdz3aWk",
  "key11": "NpDvw2DgjUtHRsND5HX1WAgy3KFtbaRSqZfXsLvjgsA64yt9kJ5ryGuhkEfrJqmUXiKp86psVzwDR6W7PszRmCv",
  "key12": "RJE4FCfQUxo8cy2TkceemXxoTT9fgo8qQJRfWYAiJkVSBVHNdPJ8tMUYxCJv91vHvUfknmEBE1eEpiUDAeNKmJf",
  "key13": "5w2RxGsKzFrZSGhMzvGh32pppHiMfqMMR8p4HUMtAyTHrwCdLWaCCCX3JSzZ3aiyiqRbp5ixUXRRYLXS9gEGExEy",
  "key14": "5WymbipnCaNb6FEpNiRgqgZcamfjEq5PRbX2XeqNgCuvUgRBWoWg6NKoZQDY9FvowAwU9G96QZ9da3nT36Ue2Bpk",
  "key15": "8NF7DTZ9kZw5WLGRWjr5uRnmZS7osTewESfTLBV2EWCAtRopAYGXSZ286XfoefioPf1uFT37b1JaVuYCsAsjqvH",
  "key16": "2UW4SQJToTDDjWqFvXuNY26o2XM1KL7Wufs3ix6p4AntsYW6HCWbpTXCwrvyPLLc9jZjSB3yBZNfXnRd29j9wjVq",
  "key17": "4FrkGMyxcx3NCq5oUVYVb3BGJZgGwJwPryRao1zXY77Psk4FaiH2pyPLEa5aFDcAqKb2bTjCDZscxu35W16BdWfB",
  "key18": "XirHzbDvb7iQxJTcGLmWHjGf8rbUphtw2Bi3b21EALbLwWKxcAVH3Er23cVx5TV1y1tQzV2tnrXPxZBynFUSusq",
  "key19": "5BNMQi8BKPzJemZqL5GbZ5b46t3h8dbNaEWxSPB6UXfMABHeLfxMm3xw4VtdgKji5hBFePRnKhtSvpYJm4vAbbcM",
  "key20": "4eFt9aPC4c5gK7AZ9vk8DLgLWaEiKQpBWfaAPVxHqnUdV79Y6HHXyNxWZWwcs2HXPeknH1DsXScTLVoVeyYKbZua",
  "key21": "2oEjTp4zAzphoLsppgUYVT49vT4C7s4qr7mkT527SWeeT4xVVg1dPBe9878cBEQQJcThMmYb2MQ2KAMvMmQuq1kW",
  "key22": "5wCKMm13VNueBjTMgkAnn11f3uw5vShnLXrzqv14EuoXSZbiZEzF89G1ZH6wXToqRfwfeZuGWrdb7wKB2t25omKR",
  "key23": "e32uDtQjjjJ7NFzhZm1Fhi6beMZ2iGZrvTHavxkTpX7vaWQujVwi3eDCZJr4NoAB7EDqFALwVo3ebeLn13ZPQhT",
  "key24": "2TGNHYt7zSbiQUnbh1o5PCFX8JWV3JbghT4t9jdsxaqCi6iNSu2f2Az5emk2ZzCrj4bHf5s4dYu7AiYMcMfWjgnt",
  "key25": "5aJDAnyWM35uA2g2LtAnrUVq5K8avTJAczpqXQjFqZvRqv7gGChoysZqKwL6i61FALijKBnDvHjKMKUN5jkLf6jS",
  "key26": "58kZup5UhmAZNUm217gfiZEEApDt7oebGTBFPn2fXBQpPCeMHKi29sDN44bG3WdBbubTRrThrmijFboLkJaSsji2",
  "key27": "48auum7Pd1KarRKkXZf1NGHniwsTzFQPhjaieVkaT7zQyrpWvab5jQS6rgGZZjWL7TTfL3St8nW9VMssBTtoAuQR",
  "key28": "3Hg3ygK59MRVYAetfwFcUymRjJkwSENzuZg6rg5ExLDMHhqx5yLttY8Dha8tgMUVdKHP2pHgdT4uYrsw6Edoe7ZE",
  "key29": "23PQNpYbWhwatsHb7sk4k3ybc2xXgSRwRnfKniFN1EAZ5EYrU5sLLDn5mfYL4H9V7FMzt6tTACyXNhkET32Q3gP4",
  "key30": "56KtSaUu5rtcy6EJQ8hr67cRtLAAhPrgMvVRegr8ewjxZxBEsZehBoDzz4d3LgJL4hiCwmkzmmTGQNqifM4sGzZL",
  "key31": "2t6caCXtKwC53r1E3LpEbWrnYppw664DvLntfKHW3vegu4Kopjp6Et88MqwKeTwzvmbNWmhBBURsTfeBroBdEPcK",
  "key32": "4t5A91UuVVVf7B6LRL7ifZtaXJdjEoLSrFQb5RKzzZnFtrJMRaBMnR6WwBDStFyjFgzGijgksQqenayENAQDPTJd",
  "key33": "5JYBk598LEPkczitzDKRP6JK2K91N5ZEuBgoetPHiqAwwbf5snkKWGNjUv5Vx8K1DM7wce5ghVHHSZoXgsrDwwtU",
  "key34": "noKNRv7sK9umwBgM9sg9RVz9mQpjMYqCV68dW13YgHmukwf2UsDbgwGWfn6bacw8kSt6WCK3ofKdNeKfeGQm9sc",
  "key35": "48xgXjt9HQst7C7rPKdZjXjgZ9848eqAyLXdMMZoyR7wAQKhu78yuhuEtkwJ3nGmFpqnJjrHT6qvQwkMAgk2TRmo",
  "key36": "3TPBFCaQeA8qfGjrcdqhj9RgMnzu85bfK7NE43LnCWn8daQVYSM3nXThjRHyLkUurVtpuyFXF3RpLy7nLdLysTKA",
  "key37": "5c8h6aMesj9ewELW9rXFeiSR7wBwikKq49ji3pqCmUCvgs9QrMtsaAwLqR8Nq94W1CbVpkVJAd52dnHm6fKrRrtk",
  "key38": "2Q66i4TuBRn73S3NC8GKRBREqJXNWc1RkVhFdUACHqJn4v8meqeEvM2etf5aoGPD8VUssxiDqKmDNYQKXmXbVWYD",
  "key39": "FeUVuKK7vkZEKeRAcbDkScSMPNkLNoVbvroNafWf9ktUN7JnrNQK7kscjkuzqnzLXqbbqYFpjfoBHg4YmKnGVrp",
  "key40": "4J9HgdQvViFavbi9oF2kHS9m3yWFQok1T3a2BKaoCqrJkfoEVPBwcNS28td7KAF8gdsdsURfQpGcCgQ7dkwWkMSs",
  "key41": "3Xjgnh64ztZSSfT6kAZiFFHUBPyGKVg3qKNAXEJTRhB421bGpnaUzQGRDVZDpNEwtvAXEDhMYpGzGBQrqBm4bVYP",
  "key42": "3nz6MMbgK8RBN54F7GsLFSDSKBnaSrtFn4v6Tt8rB2mg9kPhXjxGJtS6Zo3Gi9GPu8BnM3rRBwZV4fkEUsgQDhnt",
  "key43": "4HwUY1tzBRKgdxewGaoMmrojbtrd32SmnzTmZvnB9FDaaognHHwxo6K5K6ECb55xbosc6exKqTPr4adqfsYFHifc",
  "key44": "Lf8kdpw6ge9eJ7Q7ZoP5kf9xm7uH2aaPGbcGPJLaoLL8BJoiCJfo3sC3EMrtpeaTU9MoFPi49gK8uEkL8dngK8F",
  "key45": "47p1p9vEvhrDq2Waywr8WzHWehBg6jLyq1T9He23XwqEKvhaDLpTxRDMaxciAY3cL2Loc791Mh2sL3CKyiakLCvS"
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
