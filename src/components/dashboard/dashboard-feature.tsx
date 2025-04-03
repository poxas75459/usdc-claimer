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
    "39LVjSK5hDhkgoroomXXUNzAdSLnu1mBMLDM2Gq34Zx7jmfWUVF7bZSLy2URSvME4xj83Ci9EmdqEjqyKRb3NSP2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "P9ZE5NHSLrompQWTzXRzaFZahBgnut27MMrYtrbDMy9f3vSJPwcz5XJTGp7iQTjRGoZGGRNk3RMWD4Ai4ATWjWL",
  "key1": "5A7stMYxr5nw19gUbDvRkBt2qBVtDC4a7YazaX25HubAgsQBM6mhHns35tD1Qbs9K5VLk5KVmhu9Sxi9eVQZocLD",
  "key2": "5qYhQakVWVS8MPjCMP3Lcn9qhzd1LqUYX8u3eGBTSYh18sP9AV7QEgHQXaBNa5huBBeP4iHRoFRTHmVnfBjyZCmK",
  "key3": "4LNTaPpbGyE4vbdX8HBEPZSNTAc5fJZMfgL3HYe97ZKdcB5zvURHtsQ6DSyVutu7fdGoqhLvUJzy11KpiMk72XVJ",
  "key4": "485EVeoqeQnhtMptrjfxU1oRYwGJnKh1EEzMwmu86nDiP7QwGQN7i4EkyDSDaNDDSBHGfFmSFkG6i4QqBPTdxeEf",
  "key5": "16vM3PekR3G4HVCtmeu4eAtmsdsHuSkrdfEnVzM3GSmPH8h7d1X88bSubKKwZhRvQ9JLYpARqUEzRd613pVSpCS",
  "key6": "4y7ymoz2SrZLUKN3C2LdfQtCwkVdaprw1xegdaQzqKwy3U8yMFmo9k8iUArBMvWHGktPPTP43p4HvneCySLbn1Xm",
  "key7": "2xAvZH1CULMK6hzoQSCkJo4SkGzAvqr26tF7bYyXFANo8LdFdzee24hqggYxc44KK15syrVvoiKzwd3JbCvu926n",
  "key8": "3MzSKwVjA4Ci7ajtMq4xyU6fXxZa5KPAZGuk5bbTXsmjNoAtEGbVksmnMDN2uti2qZS9GE4GDw9XGY1uUWLd3CEu",
  "key9": "37M9qGSrueiKAyZyVZikK7n9Je8oradweczCRioZCeJJq8jmVVjCbjDyj5cEEFL1s4ZQ5YYeegfzoYMESQkpgpLs",
  "key10": "2EzusxQKretFzbHEbgNe5dukZxwRWzMrx6Jau8rKam6nCUVeHAz2xPvMGnLdFRmBJkTfTxUUB6Xi6JnWHzg9oRq4",
  "key11": "3cuSNjnCoKk5NFDVKcw1uZrwfrRsVgLSL3NGBA5HbbuFpL6LMAF5dSDzixaGy18iu1gUH4VLnruvEA9r9B5m48b9",
  "key12": "62tz8tacQrTXPEWwAh7E6Mrt478SzQ5SjPH9hJzZ3GLycwCwwarhggcis69XBMo3bCgkPCjTYXRLuUnwmEWWnKuC",
  "key13": "5wK3KxHGcTqgBkKa5fey7K3CVrS3h7NTEBStfD9gGoakoTXTPaZtFtsSLT1M7uKR1uGPvnGDyotpzp4htXUCuJzo",
  "key14": "o6uKPuZ9fb3SMsRyTb9riSvSRpwyuaYxrxHmFSMVZ7ZmP91QsJK8yGGwS4BNwd8EF8gin9uXA581BjKWmEFiP62",
  "key15": "hqaWcngtPNJpL6CmFJ8GSSRV32z6Sw33yqBM2oWd64u17KVZE47fJdx3sH13BRjrUUoq7Z65SYs1HB3ymVSg2td",
  "key16": "4gdzFM6gUbLosf2PRjvxLat9Hi4iisukhwWyJFi3BUeS8EP2Y6sSz8S9YqYvXxcTZaMMX6KpELJvtXR1Q8bg6kSe",
  "key17": "49pQDE4VTC3t7RpHaQu8FYhKhuaf4br1KTcEKkUqV4YuG8K69NwDa66aAf6REWAWUugzc2FCAXQMMhCeH8H3py37",
  "key18": "n8WoR9upXpbdUwh1yNg2UoUwAadbUfP1SvAihXT51yeWf4xkuD6RNusRPKUU18c454fNzwbBdDhGJWRgeYJVZkc",
  "key19": "2VcFwyt3pQ9MH7fUkAqWFzjLUgJLmuiqN9BXGhXFNDh3QYVf5cCZJnWv6fH19KyLkZyJ51EGDRYH6aKzw13ygwP9",
  "key20": "4KCySGxLore8RSLYZuw7D7TcbvmTuZeE4PAS2CcBhBu3Ru8igVZdF9EaiuyHt8P5eTgWpNk8waqCdMZAZ2NCEUVH",
  "key21": "3QAYx9TUsNdfsP2JzN1LQHX1ZDZGK2Nfj6XEKdRrSoAGTQ6dizFpMoYRk7patvqmo51CEvJh2Mfu7HFbsVJDj28G",
  "key22": "2K8RumSp6MX9NaUjFKRRs7PAV7VwjgBWScpNB5UkX7ZZQK57K8VeZgkbH487xY3ceNx4bSLGDtcuwMwBDRmDtFsQ",
  "key23": "2mCRYErQkzXChDBKBjGqGrdkNf7Uzb7FjhRh9ptD2QtaRcEVR74SqGpaRg9zWZrgEAbLLWgxoSbSQBiZHkRC3bPU",
  "key24": "4UMXoLwwk9mL6vfe5PPUCvJBcCNnatA9Bo8Kq5vTCUQaKjCbiWfJsJm91YY6Ya1x64PDY3Qzh1vMqbb9ihYE6wT2",
  "key25": "2NfWH5h83YecZ3ZhCbYDW6kAkqGaBDiXSforkT85D4MGp4bUniyEP25ZkX455Vgu48fd8XzD9N1RAYcmntdzzU6f",
  "key26": "5Y8hGx6ZCiWjp4HZ5jku77p6FBUdQMN2MVTwrC8YNtUwEc8DMYtxvovvBRHVjBwKXKMVkkdNL5se6zvAe2ZtF9VP",
  "key27": "38KhAA35eymgKt5wqsgq58qHc9V23JzYQB1Qkvu5PYKTJVJGGQWygf8Zi8iDRDQVSoHBeZmwvXBLjgQkLcrbWjFY",
  "key28": "28H2sETwJ3H7yCspmPPEDBi8pwy4E7ZRHMmBV8d3tjz8PGFjvRmsc2joHJbW8bncMwWT43oThscEpPAAb95H9NcP"
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
