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
    "5q8hHZQaqs7cAvcqQtshSGnB714rsmtGahVggfxhToVJZjmkvjN5zaRfaiLTTJNsELfJhHAU7Ufmdbb8TtYt2vpw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bSQ8t5oZJ1RX7aBbRQG4C5ozQ57VGuKNUEHGCe5AX5kqvDD1CKBsDkR2ZsJtdfjE3HX74x33sCUge4eqGH54cB2",
  "key1": "61oQQu4vHJZe7EoMZGP4TxgYPXNGaw8KyvyubW2pr4718LEQdVMXT8uKJSGCM3Uq1pxA9ShD7J7kqJksz9uyk38V",
  "key2": "2y3qdAnMh6eu6k78eqLYcDBKhJ4q3LAFCby9rRHzBfMNKFVYQfJu2jbsfNPqbHDFqNWuymU87tP3jAy2bBrs7B9s",
  "key3": "5hqrTMnMXw1eUjaEeJLsUcNh5SNLhZyqW3P5oehf8z8Px4WopNFxLp3YZxqJPdW6pk97FMcB6xAaycq7DHMDiGi4",
  "key4": "5tGbAs629nzaiRkJWtM1e6MFAS6acfcg7jPmoCKLghybWq9EiuH2P9oc4Jvm5M9QgDoVD2wdPWZogTeSycB6DWWz",
  "key5": "2ymbsiG2C5ZXVPMhLkkVCG9RUa3aTYurgxpQD189zoEwNDNV6Gw7waCFbVBwuW3rR7g8ETXhQ3WzyGj7LvUj67Za",
  "key6": "xTReKqh6AH6SbYugeBXmsus33hyJicMEL1Ww3E8kUraCy3VfawQRZeStLQnFHjYEpfkzbcaAZtfUhFAToSvWPdH",
  "key7": "5R5gRyER3sLw47Hev2pW73aFdSKWvTpVEKBJPomNJjqwzAKaMVGyQBEnKKydKewo5eEfAdqgFEuS49wsEqrBpX2b",
  "key8": "NdC6HnvdkLWo83wZdb5zLEn3hgBSduqaQ5WSr64CmFcVKouzUmPK4R9B2pJ85uyf5J49A658gY1F7B9SviX3oV5",
  "key9": "37BxXZUiNigA1a2Bkv3n2Vjg29zMxNjdLcDfAaAVYcZHYkc9BggzdSzDUC9Mn8HRyouQk8zyTiRQYkywYf2wLZSd",
  "key10": "4RFrBwVXg3mV5UUM3MWynACMatCMHE4SGWmJro89rcMTDUTWjh3afv6eKkiM6XYRv3JmQfyfN91BPy1GtJBSXMAY",
  "key11": "ayPX5wYMNKEYBKciNxsLjwP78SRy3zuTUJkWgSY7imkNeYWjd8qFJAKaKbKURPzHMCJ21qLbB3dLN3KRyLJoByH",
  "key12": "4YL4arGz5j1Lk6sm5XrB85sj18Zm7eQVDoUAR4YLBjQHvRzi3ehpDzr33WYueFiC8obuaVyx8R9SJMFcxYDhFtME",
  "key13": "5KgFuMqTgF5mLWvmvg2ruSeEqMZ1A393Y9U4oCmjEddEcGovGcMTo4kTrEmc6MCYp95H8CfpY5wAA51KMN7Btwy2",
  "key14": "2rChuC3em4BSFz4KegzfTXwmBkiZset3kQhmjdYYihDEq8NjL7gnsbDicaYMW1SKKZPDADSgbryY4mVhPhSzHPQU",
  "key15": "2qqDXDHgDWRUbTjL7p15j8dSJ6Dr3pP8MmczWbFy6ryx1TMCx7ANEW5ZFdJKZL9JpCmQMMPWwL4AHGm9FduBV2q7",
  "key16": "3Yy4M13urrHrMzyo5GpZiz8KiWu3e17oLrFgWcNQ75Rzi7UJo4vTYogd97Xo1EukNQj9yBB9VvHRZZ4oBrFP66Ce",
  "key17": "NgXdfs2QGHeEhUdsjXVzj4UmGE962bDSxof33FPB2VpSTPWD6wnLucRk1vsTRURofdGqRprcQahgkGYBgJ4jo8W",
  "key18": "5FTt5N1LBKw5311XxaAFVdgvmBtaCx1JzbPshDZ983P7nchkq1TnwQiuqi3XM3CyuvWsEyjePQ97w8Zzep99JiFY",
  "key19": "4mHPMLLMPV9Ku7tW3XiHdjcnVwffpCZeecR5Pm6GZznc5jsDTFUSgkFbn49SAQP3f72h4XL42dnjqLqgQRN2mEGH",
  "key20": "SLWGs6sriGuTfKq9QDrbup65TzDvC8rtycXoJrZgYAbNXSscRL5Bcp9dQmCNWDBAbWtSr7KH2D7ezhG19TLrwWN",
  "key21": "WGTmYhHa5Z3J7StFPoCnBbWn35q8D8bisJJxWrPXQmwanL3XVZZHLAhiScGUMgZCFzttXy8FHcnKZMb8zECYNH8",
  "key22": "2NcHQ49nmpLdquUX2ZLv7g2LqCHiL9vN1hVzw4gBTh2qZf2JrgbusLH1KgfZwZcvf1jYaJtrfZiTay54nCMvJ47T",
  "key23": "3yvocKVqE794kcL28NjH2omugw7SBTXCmtVxU4n5QbkBCKv7mr7Bm3V8wA9nabG6KKHkyLFfEtuhvQzWb9kz6XvA",
  "key24": "62QaRZoSXhuC3kGLzT4aZQn2BMda41DYqbjDgxWwWgWrYJGHrD3nqf1NzYovNXKaC6hAejkGpDnsMKRmLrifdTo1",
  "key25": "2eup3YS7L3WuyWupqNLvyZKVxDTA1WavY2wHXvWT82VTJNVXYef1j44jVLfoR9YkizzDBaCxJzqQ8pANApQv42h9",
  "key26": "5TGjUgGWCC69uEsi2yU1Vrj5Jgy5asLKc3ztgPCkHBz2oxNmU67EwMmaXXnExK98DwkYa7iC5ogSRXNMiSxftii5",
  "key27": "5NjbrLMmpM1HcRSNEKGiW54oYTgHeUWCArfjzSMQgkpVhE8uawA3w6ggeEQdQEVjPhpxMUebbLbfdXJVQuEPtmm3"
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
