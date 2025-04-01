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
    "5B4xMPmeL1EznMMjbWej8ShkRPxPxdDkrYX3zGSZoEj4nHX9W9szwPaDzQEqYZ1wgjMXQg9E2ubXoE3VAWpyMsNL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wbzGFqar9bnb1ewtC1zuCA5XSnSkLjVXTck9ebUJdxSsvKaMz4t8LJwxtYSHy6MUaXV7dNLk2o2pqtiSZBDfT24",
  "key1": "4En89GkyDLxgE5YJg4CZwf6XA35KSdG3seKaWgAHAZsfwoLRmiyvZ2ph8GjD6GBnoVfVJkJ7eW3rL4Kxu9DP3LrT",
  "key2": "4XNCBFKNsUvETY6w1wMAUn18nTb7pfM1fCzt7Akak99VRzVe7MBHFXka19FLMNJi6DnvF9nFJkvRXP3qAorMBkmv",
  "key3": "23uL166PgVErFfJynoAWZPPNJUVrwM1SqBQkh17VwmHBqhiSMPPsyd879bwmKNrz2RJeaDVeUMp9dRasX1dTPKME",
  "key4": "2ASL8etB573DqSZgPzQey15g4qm6EtdkrzFPTVewZZHpZymneviYELHJroA9wigZ6mcqmpDbzYwi3o5umo2aV5Jx",
  "key5": "26qWjtByfn7hSPknij35gyw2Pifz75MrNEBPzXji4j28Nzk5QnbXJfayHXgjjYbTmztTRE7MG733WTMv3Gd9gSSh",
  "key6": "2x4FnASEwetBJY2idziKycfa2m5REHorUQonXvAiCn8zjUZS82umzHRD8nwgJQq2tHPuRjbrQ4jV6gJLnJ3ckBMH",
  "key7": "5ANibrj9cLDgKUZsPAA3FfH813zpuEKzctsw2snY6Fv76WPu8z5T2K9BHWFNPAE46Kmezs8gfU9nVf8Zq2jkRfA1",
  "key8": "VpV1SmdurHe2m3eueDYvQvwHWpzMGPnYA89zNUXvPt3rQwy3thshjdQDaSSuE9qRxkqTBJXB75uhnxhFNnMnAcr",
  "key9": "2m5Ww9h9MWP3BnrhWNRoGqmK7NYLbxkiLf1em2bNDUqQZTzpfWxzjzFHnQzJ41J1q7vYpWKquwPZ4nL3GKEeufEb",
  "key10": "2hab8Lu5Z6VcXfU2tDMCknSNZbVpXXsV6Cvd4XsoDzPnGUG1KFHJXsNihQerrKLESkRD8PWdfatTv8KDy6zkZPWM",
  "key11": "62V21bJRsEEdGUjYPG8JvZn2ZVNmsseg2VmVQrzDWZh7BJJHJsLbVPAgs43gw1xKcDghTNbo9DG1ZPBnyhxJu5dq",
  "key12": "5cRyD37a38jsecMQcRboDFt2ALt7LFqpcsHBP75WJ7Y1gD5pDqxmyAu4sbJyHRktxsYd8P56xB4Ut2UHEfLhMgzD",
  "key13": "4YtXdgCH6hkMwecTxTGvZR1mi8iMst6h7tkwaEWK1TrVcr6T6sVVMzCtDJiEDQPJNZebEcv4gSNLxvPN6bnEvKLe",
  "key14": "5sSR3rW5rte1nWJx5FCtDh3aj1drP3mLiA2nL8UgkG91b3AvuUKy91qyKUhBvJ1HTy8zbtRCGoK7nTKNkwUJTpDD",
  "key15": "2zWp5Y8nrxxDRHBAck2UsDiTRhFo179F3iDhood8j5xVfxoFdBDUrMCrWFcMPsPLppZqNjSagExUjxn1w7ADH42G",
  "key16": "5mBkawH8ohcu9rsqsktk7B8zdoVkvE9dNGqCuXtZNCNKHabvk8KAi26SgMMwMw8TZVbzrGzAyqRPqzXJYt9maw8g",
  "key17": "2HHJZCoXmDsniLXgU7ENrUkaHDQzezHk4tbx9DXcBBPaQ1dGzaKzN7Yt8LvWQLt6ijt3UonRRyCHc1TofzTv1x74",
  "key18": "5ADGttRAD2eJtwd7hjE1FS7VyC9T16bjE9JkWEdXaBnyDDC1jcwpUfCBWLVPsUdM6E2QrNZUUT6AYNz2GFgoT2oG",
  "key19": "21FKBekRgEcnvrEt3KQuofsrcKT9uQ8XJcqpwJ5Hcuj13myu61DHRGSX4TmYEbyB8UaQw34w7974HHnktviDu4vZ",
  "key20": "55R9Qn8vpnVY4SfypPvYURAyu354exxhJEV1ao41hJcLgsEbVrVZL24H8LDv7EYExARQhWm6H2gLnK3kSZXv7jr1",
  "key21": "5YCZctnFUNesFfrc5F8GZByyfeP6KgjswhpthWnBuBCUH7YSURpcu1qofsuaNiTWdTbm4Hgp6zuzS8BuYSYuK5rW",
  "key22": "3Ev8wG9AdzePC8rGcn8XB4vvv67oo9CaxViXJodfnG87ZXmKarR2UBKPXuTMBE7AAwY7mC44SFoy5S9YGV769wsJ",
  "key23": "2EZtss5ukXMRUUhhyaDdw8JbagQ3CTZuzX5DzFmTkJPmUJFQU8HbyeXWFikUmWwnbcouo7T4wcyxkMStMpZMbH3A",
  "key24": "3jLvjq9zskmxpBvocNuRsTfTre9Za9s8uh94cPvHt3kTRsZ84vcwFu2DQiKs7zeubvuQdDJpmqR2tduKBiNY5Xmh",
  "key25": "TYHuJu7ZFJ8ehZq4UeLXcQ6H1s38TtXmHMrEPYGM8ZrR8VnEzjGWG92xUHrFT5aALQKD3z8qgMMVpjfae4pxcnj",
  "key26": "244vP9AToJ5MxpaQf9EaSBpNSo9f8AvvuTdFZDbJ77kR1qfDaW5VTfydMPGEvD7MjHLn6KiV9rig2My1nudesBF3",
  "key27": "3Z7kdSc16Fr4VtanacqKyLhwFCCmAd3hpDjhPSv4HmvR9dkt1JCPHzkKiiT2J13vEsfB28wcAYdKMWZ6F4s35pyg",
  "key28": "4zNvcToomV3qqARchEZGLdy767xBHB9LZ6CQM8z5eDr1UMVB2NQLpprbdq6oeSiXzAH992bhAY8J2w2P29m3A1Fi"
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
