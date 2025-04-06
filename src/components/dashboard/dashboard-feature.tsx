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
    "5xJHo9anXfLgove7kT7pTuD1rqzmxKU5PacypKVMCUzhwHcNxG4EyLGP2sdmgjQKtVrqELhNPY8bPZDfcUdnU8m2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "341BELhHVGgEkRiXBFoiZPjaGqF9SFWE4duYDWHN6qRwXSsHoDED5jLwEihUUoGYXNvjjb2fA4g74QUt7QHX8b9n",
  "key1": "3wyvYa45DqahEDC7eQmsCanCEgwMDEzQhizt9ngSrTy4y1WTun8ADaHtRFFJJc4auUu5oWy3AhY9MBvFKzTVco55",
  "key2": "2buzyEXapabKyQ94btUMB3ki8DuA9sBT3WvD1UEkPHuXdq4Kh6yTPu3QiYRtivNLM9LsTLXz8hSSLhvj9BpZCmX5",
  "key3": "446Lxcjsk5KdiDhJonizXiqFYo8MLzq3rfsWn7bnYShRg5npWaFTeBvKE6dEHrMGDoqqkTts3L3rq8FrBd7FAFTj",
  "key4": "ze3Z6Mg5QzAsWWawmd4ZiN6MmNVn6LKLop3U2pMgc7eok7JmNNHjo6t5vu7CX93Pq6rj1ZfY6AXxG3R5KqgHim4",
  "key5": "2xuVGcVwEiAV7VeHvpBcXMj6BZppRRxnHnJGyh1nuHygtQu5xh49nE8bjYXFUkiDb4xYZxZLJKaRQJ78PR7mtXzY",
  "key6": "5sQ6MNEG8NsJxrzQHZ22S7j7FZCmHEVmjxfRNEHx2w7uPuFU6p591bh3fFpQeVgvqjFmCvUwsdjojWKgsVWkqCZP",
  "key7": "5ZETPHqwgLHrGXjVuY1e8aiRdtp5ysonMzrKHLxiPvonb8QMRfsDd8wJWmZJHFwc1CtaBkVGKRqvusq8wegwfbas",
  "key8": "3oo4AUF6VA4FicQbPrzMbQDiDw67SrQuPSPLzt1SQRpYuu1iqyoSAiRo3DePfHVU4fYE32RHy6n2guVkdw5b4Vmb",
  "key9": "5NnCxaAzs8nMsbYwfRZ5JDisQTppTrBpphcF7UpDXMpfJnjDQ2rifDpgyGDshwqMPRm7NWpDbGGnYbGbd7qyJzcj",
  "key10": "5tGQpvbor3HBqpi6LcTYiaTH26T6U79SjuWs17EWErDPw2zYJAKJsDCWFYGjrwxTzTvrEkP74w5ND1YvcpGiJbKH",
  "key11": "5omE9nR5pukon5Mm4zognYfwz2Pg8PFfxywcWwGBRHLc9Rz7xKzTjNJ9iPwkumxM42DBjLTnDETn4uPsNjiMrnx",
  "key12": "2AHg9PQDXHUbuVmDSY9EMW4dEHmZpXcyotQpQZ6WA95RbxwzAAvUMmuQrUEZaMw4jeaURKknnEFZnAVBgGz5Fzxj",
  "key13": "CAnq6z1WDXzKzJCmWvQ3PzYJ9S14SasEG8wpQ2PvE9Bxt9uJFGuMvRGC3DUETaaAuppawbNyHJt5A1ZMWPNsGvX",
  "key14": "41SSgFwB8KFfTs7hu9iKk7Rbi9JZeK3WtaufPzrwwekWL43xShJUpaDNxJoY3MqDVi3u9pw33ozz6hGhL63kktmQ",
  "key15": "5TevyKXRMHikHAervm2h73j4LyB5rcDFSxm3C2pkyTuAWHLLbGM4dw17yPKT1y5ZgvCjqBRVHY2CpPoenPdQq8jJ",
  "key16": "4wSLX5cZmAznBhxRuJezrnMgwaqYZ5Nx4m7fhEEgWnBgXNZtWswUNRrdKx8AptXFjZBXUzUQyiPf9Dp4yQGXRChM",
  "key17": "w8wNL65WtNqcH8TLueSP4dA5MpPDiMwyzLMqsdiHuGAfebzAtEqAaXQLpxeTMKSwCHQdht5oS3vA65mbrhAC25j",
  "key18": "3MwMeSJd3Y2pnaL9w5ZY793ZywpVtjEbiMr2qWfdQqsAsQjDmxTUuGKpMSqTwZF8fzvU9uXwJMh5FqM7RVSKbDia",
  "key19": "4PBbyoKyovXduiX8ZCmniate4rZTe2rTQquxCGWSUidsBKwupNyiRDTTHorGN2TY39GCc65aHxJE5zz6tqGE3CAK",
  "key20": "ydmviNYz8WacBzuPVxELPAphKLDjPk4XLn5pypuhbkiY21Ypi98kj2xS8DzroFRTDykonXf1gnb2ZCNTntMi3ft",
  "key21": "2kVtYTSnt4BdWhiikf8Q3pkJcwn3mbmfSxxmo5FXQYwDq1KY2Rgacn5ewSHwyB8LwZxWKZPs98RaRyAHtWgUjovu",
  "key22": "5iqbwXR5iaK4VV2FHM7jQJhKkoEDKav4X78mXqpHhu828RTmneUR5rhU8FJCeS2KypP4VFh8Dpvtw5omRMWWDU5x",
  "key23": "51zpvVBLoGafa2ZVEsGr15ckYPGbQ7EWMnRJS7LEVwjCLgw8sd7VromvhCuLQPdw6zz73KXfg94Z45odvAPvQth3",
  "key24": "2X5eqbCSeiBPYVWerFiSHm2VZwjkczZhgguBThKLa8iTum5HpaszMz63EisiBfm2sBMkAUcLibFissp1jCrq4jd8",
  "key25": "uG3n33FeRWTTtJEhyru15bxXwcTLctnZCCxLGLtkK4ux9WUBk6VqrbJotK5vCdJgGba5ejZTepmKytaTqJXAe52",
  "key26": "4JTSTLqyMuTFc6fjsNG57pdzKRheKNc8Dq9seQVo3YqqDNJsdHqsf2qYrYGc6XjnWwwdtxtbLsssPFtVFxFb2pZq",
  "key27": "7Gk26uQsJXDHj9B4mGueqquM6BkE9JypduqUi2axgtQ2g5FiJse8H7fZhuDZvxEmKDNCyJCQuEUUT1MMPLMZQvj",
  "key28": "4c5f9JmhPyuonVqLcMfFSjknYJkkmm6MJRE2JjRBw5KLDFNYhDp7UMQfYmMhiCiX7d5qAEnynCd6kBczap1PvwUC",
  "key29": "a3MV8BdyJh1vJMjnEWrLBndLerhq2gQVf41hvoE9RdKQfyHZrapKWyNjkb8qsGBiXUznvvL5iq4keVqFbMJhyNP",
  "key30": "3xomiQkarD9ENxCjjGqNFU26gsPYxtKsi2qo9a5TRRgRxAi7hYELVPmDnmG4uDuUA21YHq3F6Z2RJAQENyCRbkF6",
  "key31": "3T4EbDAj8tf5afY3H7ozZo8fXkYRs1AgwtHeZ6UkDo6bDH3Gax5dkBdi9snGoTbmDMTNg7KPgQyUYX1JQUkh9mie",
  "key32": "5f6ytoVPf9nrqjVjknL11bnzogtD1MhQVApa9RTbvmX3jsNFVztFm74S6q8yWSUjftUGwndnFPgfbTqeh36PJq54",
  "key33": "SGgAA4Q8qdzf269uraGU9wm7tjx9tcrxy7XVVwKPuse4nFyJSAhpStHe7wUuKxV2xZiemcTweYFe7eBczHPpkpP"
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
