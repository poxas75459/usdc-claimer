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
    "5GxjmqLM2oAxAQ8dtSywHBsEqG9mJv4UWrWmuw37wGAwzLbApwiUsNJUCiZ1jMMzND5iQJmgLEdcA4KyxyiTdv8F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fk5MF9cJ2AhJ63xdPPFErPpbvG3ceedKhEDfJruvaMeYB48N6aEjNsETi2SQMFZ4BGVpN6tLqvdYbgnpCnSiFpG",
  "key1": "5eLuA8nBRKXn555bmXXq7KFhpKZo8rMQZCYdRGWQRnH7ipv8RJhxzS1AcsyMNXCdjXhSTZuLj4SgzZUwL5SvbfJ9",
  "key2": "4meMArbPBTpewmy1AiWz1URdpVKDbM1HrBeAyvAS9izZXfNq6N4pnZkaCvo71i8UW7KwM4j3BB82JqdjzJ2XPf6n",
  "key3": "x9JA18DfX31BjrhwnN6hE6m92xnvEETLUeGnPZmELn8oDsrHUAoREhTPN6wnEnzxtNs3QNAZeJGuQmLovAfX4Sn",
  "key4": "65iJk38YkLR46miHKKkeniER9xnTGQ3fcmWphQHJyg9ewHmdtnZgfDuV31FuwuCGSpEaRn6xBdAEa8E4q1uBXWbB",
  "key5": "3rH6LCNg4nMTCTuFpHgUS5wdQWP2GeJyY4GECK7CQji3PvM4YpLQ4MYbMMbwmb11tXkwDjLqu9jq4apBPTHHBJqb",
  "key6": "4fBdkHxXXthsrSDyDRYCqptGh4o7QEJrUYaxgYMjtR94FeE2tuE5KnAyxCDCX5ZTNgMguKCawpxGLq6pqcBKWotQ",
  "key7": "4RCMY2EQorFULMaCZ4y56jmwESczg7L8s4ZCiQmanSBgpn2Q1M6c3nY8nsbkxrkVadJyrKxgE8npW3bS8aj3jUHr",
  "key8": "5weJeWuGPLQeze98NU9V8T2wpknigPzCf637uQ5LvLgudy5oarQS3Rn1YyRi4QPc5jarLYkHE7PJWiZioCLoH5Yr",
  "key9": "3y3n4VqMFqmvN6ifMU8D9UiRRMYCyaTTjDCAcXH6EkSV891qiGFQEsnVXVoQ7RRaykqCXLsJxKotLrJ3rMcMB9fF",
  "key10": "3gzfRLfrNMJouqzdWLes65a3PZY7t8cVaz73dEfSqzZUc8SrGDx6rCWJ3ksBxVAbsGioanCq1fmNarBGxBnTQtVm",
  "key11": "3XoW4RcdBmgNiUexpVF2c4qqhZjs5o1ikzbF6EoBmx6vmX3u28PWXcykjiBzS2uj8D4cCqsfS4QNfd9TZzeFsWFb",
  "key12": "2EytZfuHGGRT51mJnpEwPRgNbvqTKhGLNWCBBrvYQmmqnG1M4NjUZnH5M5UgygMLm5RZMvzimiykpFQLQzP4RsKw",
  "key13": "3BuMztfZz5gAh2RgarFmNx1NLPeJoaqGLm9q5wFDtFs1eH8hLu2K3CeHvndxDh7rmU3Lg7hKnvsMGmxeNHweZWDC",
  "key14": "4SMBRf7wG7fvVv485B6kmZ2uZgrfMWvu5479mW1dcoxL52FtiDdjLcSrYzWqnHJzPXL99DiEcvweiGdqXGSHFf1W",
  "key15": "z4g1M1aDeBuBPEjZg9vDbebcaUAn4eVh2qgpZorA74SV3bKP1EHY6hHLC45Cr3V8PeaFNuEwzcGAoG7NpLS1yMQ",
  "key16": "4CNwsgE96ic3BfNWjJDAMguzDRQzmeY4h37oaJdoXWVxTYAA6jZdsubt9SiQALycUruJPKAA8EiqbVtuqMfZ8pea",
  "key17": "3bFrkqZJr1N9YYTdNUzSsa8AjC81dqUBK9mwVQ6gtcJanbPueoSLQXGRrYTEAcaTxiJKn4WU3Ry8X3Qx8wZrCJDP",
  "key18": "2Aa1eUjJLdUZw5cGSMT7UKhoJ2FgaLi59SkMNLr6x5Tw4bW2dpiJGGU2SupiypUpZCZZFuSGY1iRNQhhcgwP94fg",
  "key19": "54NnFbwPUWzLFeXLkTxv1iBFmgPqiFuXFadm2RULczTB176GboroaKDpyb5HPmvo1dgaGhh7xccBCGDPMnSgrMky",
  "key20": "3vGvDZhPYzxUvfsND1D8mkPwZg8Vib85UCYUhWWDFXVYj65ksWY1DBh3hT4ThgvdzYLz5aZTjcaFqEc3UzMdPFUz",
  "key21": "9pAq9LuJPDpX6w7jLpAnoWnXSWS2SmendixBTot4kD6qRxXMVgWxcP7872oj6eWgF5d8CoZcQyjeumxQBMoqr2u",
  "key22": "2zsLkFA6k4xt5cMv9C5eVkepiMU8SfqcKrDtU7gVof8QZkjCykAExYuJeTgQNgZuW3XqVnGPW717TYU9XmmqEiP2",
  "key23": "268XW5vLrovxhmG9U9GwsDAW5AhaWPnz3Et7ya47GEKHrP7VVkN7PxSuWMeTvsE9kv8Rf5Ymw5iE39dXLzRdSBSc",
  "key24": "44sLcNS2RYAqKfQZKV4yceGtccLBUwhrZNsoRnnZ3DZXYAtbKwppf8vdLhzJig2tZCYLooTtXbeiS6XSxCZeRZdx",
  "key25": "4zhLmJhBBwZd9aavGcTBbe5CMRCfVBdirrWDRom1Qv51vvLTLDZ5R5By4fkY4GhuWKagpcycsGj9rWJWkYWrRwna",
  "key26": "3fVfv4XPhoQsGXTfHfNvezMo9TvHiP4YbryZhnTqDRpTgMccepjG3AiKr5WJ6wrEhgx93yKe6Yssh5Jb86rf8t8k",
  "key27": "3DTJoS81ZBrAkQQW2BkjeLS7KfLZXRhzy3xBCTPWeZhwGoohzsZ5h7oU9NDU6ccs5hkkVo3feWGwY8kN6TrX3T2S",
  "key28": "CZEKcWoM2AvU71VGh67WseTr45TbGuBuqYkM9BF3JUq3MrSp9moUuJAa39kwffXAT1TrVutL2pBGfrozcZ3YRj8",
  "key29": "4gxemz4thsFbH5AkqRmyPj7pPP3BtgffpcfFVjHWNfhnF3zS2oDD5H5a2Mcud5HdjRgFDNr2yazqMgQr15S8DKJt",
  "key30": "4JQtzQDf47jyqwtbSjrMbYzo43xMeJR4eeARmAXjDxTVCWqpttbVAZS5gj3hpXYzxtUNaUWPnqbKhZdLTZsfThHv",
  "key31": "4uUzfwHRqpBaYGT1QpjCrFv7dohNWjjYNG7KdJaEBvkv47uM4B3uzj9B8xrWicApYZw9V8muFFASmNbHRMkquAzu",
  "key32": "2NrgsKQcSApSWBBwkK4C6NnZG5C4zp8vCv3hQ48u8XQhCGSjJmuWcKeHBBcnoSuWXzRugKLVduqHUUYAhnQBcfTe",
  "key33": "3pgd2aqoysAqPtE6uzwC8hRzNnVN6t6syJmCXuvLBDcJpnRyoZ1gC3B1UkStn7THqxUku9KNnQZawknRFGGifare",
  "key34": "2hcbU8GLLQTtbjcbo3Pas9jVna9tRg736y4uR5DEt8Dn69NCgCb451RBMV6mzBkgHFDLAZQk9VfqPemokfHKMoDV",
  "key35": "5RRwQD5heZRtTYp6SYswYABrxMdnMXZjLZiNgAQPdZQwE37cekQNnp5MNEKRfZvYZUWeemMDAXe3DBAAmMPtF5C5"
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
