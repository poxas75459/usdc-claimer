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
    "2mhqRNw7UwfNmQKC1JS9Ke67kyVd4X2LRH7cHsE7nuHketpsYxQcCZwQtKvWCcyxNvKNAoAuEXWSFLVq4GfTMrgy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3598ogr9cFjnanbxDWfVjcYxJAzbeFE9cZgwYYKy2oT3PN5WvMLN6oZcbBfCbvpgQkP7gwBCUMabW9gA7QoCcATA",
  "key1": "4jdC7vUveJBJ8Z5RLAsomFfSbp9hUHuBDCwTBSimWNycLNAJbqizdfSEJu9QxUiErrXUYLS5WpAwUL29h4bBgoLL",
  "key2": "KXypJ638EsPnfjk2b92683vbjuiS9PLwUXzaar17dMr66UDDPghmk7KnDoVVTqWyb3pqan5b7bCdVJY3babgkDa",
  "key3": "2nXMrfAQWsjActNn1AqYfKdXmEvpKZcHWF6NYREhZgVew4zXWdbM9gWUsHeiKaHgBS45Yn3DxZeJwVFYmawtNHvJ",
  "key4": "gV6LnA3JuaywdBx2YPjVV6gpGkrELUzVkzCATsNmA23HtiGwdCzMmPw4PgHAskzNsZCAyzF4wVhy2DBp5JwoJ65",
  "key5": "3DhdVZBju15Gy5w3Q8ZE5sHnRm2E7yVr7J9c5RDTDLN31KS3YsPtMHywaFpeLiuaRrZ4CKYM9Ge1rKtaZaX8xC3a",
  "key6": "4HTPjcWmZZPLw3hehXJjChkwsAkXFQbcgXwntC6SB6Ey1UKMTuYDLBSaKbAvCE1tSH9PW43MpG8VfDvQkWuj6cUV",
  "key7": "2hXzxWKahnLChx5oH4o5gB9nZmRAS9yKAtPTdgTYUCcH2295LWgLxAEVwiMukmWeFaaSckkZ7zPqGFmqZfeHQ7ap",
  "key8": "4seSfHWHntim2KqiUVMCj6RyT4HqocPmXUXp7LjFPsjy1KWjZFnoUvaZBjsE8U6pEikfiwFVriVJyiDZkm148Cod",
  "key9": "3cT7EsS2mSCqMyBGa8Sy2zcAzKcrH6YqbHB7zxnG115yPFtAZchkNLxFerEpKo7DLgdKtU6m3dWe2Jjb3szuoWuQ",
  "key10": "Wd5CCMAPMPJXtmF9VwBwcRibHu9GzYiC1g7PxbzoE6WaR8VXerAboBnkrXvwg31rAPLTBEcphjVf2wVrRMzZiRd",
  "key11": "3DM62fXs4VYFXcg3R9jFU142DnU7FgptLR8wVDeriZbz4y8QdLosLxZxiMDygTYsUPLGX3D97T5Ty6ejUXDWMrvA",
  "key12": "3toyNrNAzATpQP9mNTkTpfq3E88D7Q5ucZy9hC9BvHh97xB7FcR2ivGQdv9DArmmGWci1TAqNTSm7KSZZuBYmdXe",
  "key13": "65XDXt8ozUMRTvDgRjTKkLqNq8g3hAFtw15MGu4RNthT2yGbKcSfhPs4meR1Y2zAqTptiRUPbjreft3yisMPVKht",
  "key14": "ZJDNFAnaH29Hi8uYwPrBx94kXFNKVRbn7P7WVfF3he2feSUhT5JFnKcCkzwUzKsyNtpRCGNrg24zN7iMfyK6EQh",
  "key15": "2xxAz3PTuL2f9x5XYAyJRik3RMza2ckfnYLze8uZxRkPYvEmdH8bTNwy4s6nR5PNTgp3mmzermGM7cfGxf8qAmRD",
  "key16": "YqCx1EySDxDg5T5PjXRRkUHZJKBdjAxx8RgEsocpkncdgNNN2phgALKyLH49qjJtpJsQeekzvujhdMaWoxCreM3",
  "key17": "5kcgYGic81QpMWF7kXMgAGABjzGmASpBDS9RV4iAZwuimA337yujjaiCsxuj7RMKbfF4k2SBZmKZoaB8koi5WVP7",
  "key18": "4X1cu9itAPsXKWLhUoPyT2UbS8FWw2Nqc8Qg4cM7GukuR1gEueJssWHz8hJHx8tk8XoBGnHuaGGGrSsP4LjanAJw",
  "key19": "2CGhKK5BSk77c9enVv3krRozLxQnRAKHSBzWG7uCBTsnw4YDoMiLjbAUbELK5wDnogMU5A7v3TT6aXtadGo8cX4L",
  "key20": "2afEfnUUY5isjomB7An1HJDNpV1UJ7RB1kpqc4FvgyHa76MGA91bsL8rxkNcGqEj5dKNH1J3USc6ZcAEkUZbsqic",
  "key21": "5A8HonDjb3frQXLAvPFF4NkH5KMPBVoX66Ltbf62Ms39MHi59XW6m3Gbuw2t8C7pafpQSbTGmh8aTCGQpxVCG3gm",
  "key22": "5ZiaAE9TjZb9MoqL5baAhWoqqgSX83Z4GgonYuPPzSAtQMBTXPGYySzxzyMGtrQDQKY7ksAmtuWeF4ajUg72NQ9o",
  "key23": "3qTnFbT1upNLMcXVN65Tgheuyiz5F7QrqHcYS6bzq6jautZkYibrdbUZMxSw177xbTrVc73SoxySyBxVaiUZi6m1",
  "key24": "2761NLoB3AyAz4YGFWNda1BKFozzBoUawmoZwg2JJokfuRtsrjQeDq5UXbjpxyBswvA8zKH24wyqKJgF2D76vqQZ",
  "key25": "grbMhUjLg21YTp5Xxc7Despukg8c5qr9Hpfm2cDDRFkdCZ6wRscyj2NGkBhxvWRxXQGSJZiSrCDtT5Tpw3qLREx",
  "key26": "6sB7xbqsCuS9rbjNMF1oBszCRPxi84MbRqrVX2z9rur8z72bfTsBCGTMVjiR1rXg8vtyfw2e4o1AubcJBydeQEA",
  "key27": "24qSmP6n56dJspLEY74nPpqswK2ny1njbmo1nnaspZ8cnAAyvxSNVWtCCrbxzUUegD4JHUBymEjoqCqBU8qm3k8G",
  "key28": "5Pp6m856vyLwiES2tM5vaMxQCcmsvtpqejPEkAFph9TyFVKn3JYU9Wbk6hLQStVmecQwLBZnYFWgxD1CLKV1QqHd",
  "key29": "2e4sXCr9hxKxm2ZG1s1tS96Mty2XgDiACAMkYXgKTBdfQZhJjSrYx9Sz8sQVtosFpiTUypFvVrfB6cw7ko1wiX3s",
  "key30": "5EQ8cKLqRQkbVdTgDGKQ5crPBqFm8t2XTugLU9Nc4kJ5TVM3WdTAvvDRviL5hFs7GRpSRvuBaSCsoyginjQ5G6VA",
  "key31": "5Vppf4swMroDa11ZZ4xfg2uBjY3SJa5qMcv8zHCHqemAduDPU3mncJqDhPQ4YG3eYFK5UrVrY68WmyqMJMvNJ7Sn",
  "key32": "4xopXpLh7rhxu1MKT1eW8mKVWvMUBMkaiqu94Nv3r7Ctk8rV9NhT94XQnoTPHSouSsiYBTdHWuUmpjBdHixG8LHz",
  "key33": "5YuZNYn3NZ3Pj7Y3mrzrR8rCXRDSzSMkGxgvg7bUoxUivaeLUg94mU1EehvxyenP8UmChF2vYgqYYpHz9paLUigg",
  "key34": "5by7YpTdt4wLQUM5j1WgoRa4NVv16uPmxMhXVdN3HMbtys2CfNvreApm8kHYF3dBAsZ4NzMRvyrU9TKaCjq8ixc5",
  "key35": "2L65BjbVE6BzoYMLQH2DyYCtKeUajQCcAybQRY1wJV1nyPxZLmo2jbQ129RK3swEyePPzFfZhbDMMtFztR5jNEtf"
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
