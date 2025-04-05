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
    "44zNa5t7YYYZKLyTsinupk4DQ6YRJjEsBswJW289WdeXU3enAEbT9b9DjpBW7AiPGycVAQxPidRHUMYZtSE26TNG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44NwiLgFiUQsHgzw2dwDiFkLsgtUNB86Tu97ooB5dUD1oqmsXZGQhejTW7CgMZhEuYcfsbXVTMHfgFUc7nvf1p6X",
  "key1": "5qCfsUJSAwDzhSXX8MB1aKkiftBAjc1Apz6rQ4gSG2dQvSfu7RN7ZjaUC1p781S9gT7Sy2a8hSjhT1xqUa1betrf",
  "key2": "4frZu36auM9jdJmULgWEce5wDvYHETstvsCeZRoRZNVq5phpQim6derFd9ckQuKCRT92eLtGsRdRvWkhL61JHxqC",
  "key3": "Qqa4gDyGLPvmcNGQeZ4t6jiBhXXPGjgrG979oowUegcnhJ3HiTfxV2KgnJPSujYLogVNN4z6auFpieF1qTexNC5",
  "key4": "J5oF3y5xGHjtedjUreotRQazJxVZjTHDEMQRnXNjWXqtJfWC7KJN4YKjY2e12eePPs3dcCSQUMx1ynV3wm2P1fc",
  "key5": "rbwUu2yGZXyBkFRnj1UhhPv7SM3JSJWh7wtsSP9PuXQQot5EBSpFgBK19KpF7JLjRSEVkLgS7k9HZPgb3e86ED4",
  "key6": "3vy6qpZmHr7Wk7FJNGrNR3xvpYBajMdeYVavVfoY7dHxoxmND11rrGJbEYH7NqEHv9h2ncMmMoqosFnvA9GDi6sw",
  "key7": "2QGnQ8vwLt8it4qL7JvUqqRGiGH2fT84aeAv2p9st2AAFxo7Fh45tnP3dqEwGeyknoJU57Z6PDRQBRcFSeipVsDK",
  "key8": "2511eRp5CD58nhgRF8MZPaeNkedyiEN9jtJPhKB1GskVjmNXby5E7dRAo8YDMEcBFy7ozEYKkSj67U59G6ki5xpJ",
  "key9": "vupW6pevJj5MjoJyTuqS8AvR1QSVNYwfVjfTc14J4M4dYeLx24taKLFey8SVm2CNgSwhVfAtf7djHHsuxvm82BL",
  "key10": "2PvYLTpQ69LBvWRJM4NPe6MeTWF5kvHXJyhFCC7kuwFoCqAhCKSa9K4YeaxQDaNhBRmzeEBor89RfaxRuxLiahnj",
  "key11": "2uPnfZL9oSaSQwrgespH4x2pddKpZR87Jo9VWcd8KfpKQrhWhBZRGVLDemrkZyHr46AcqbHjzb5hp6pLbLNZxWGz",
  "key12": "4bmiQa9AmFE4oMJ35PzFX2KMRMhUpYWvjFpcCAPs8FwCPF5D4MHqa13UtnpffCGa8zpMskr5vtN9UxSF4KSgeAdb",
  "key13": "5CUgtubtZpoqXuoh7BYpz6Fn89v4gpXBk9coyzeu4ByWfbpvr43QseDECsBX23fRwMboh9hbd9TFQh8mA2h3hU5b",
  "key14": "3vSuRreFNzP7ti7MTfZzBJyZWeCNVSEs2a8n5qjpzQxz3BA9f4CyBtS73TD6pppV6Kyy3k4gC4RXP5AX9ZSSrxdX",
  "key15": "5c92R5dFvxRRhezBTRShtSC9HBbv9fsMm4aBALwoqkVZFD8SULCGSbyWtF4Xwfa2hyFRNUAUwQf2cBK8hHtX8iFb",
  "key16": "4vqzXDNjhWz4kvKRdrvdtSogEwAYq4E4Z1Pc5oVgdrp62vLdEccy7STfLvbfVwa7cQLr7mGXbErx6jXCgV5VjCz4",
  "key17": "46QbzpSuLQyvtYZyMTLYnHeXMzSqQzzP3ZBZk4pmeb3hR4HamQ3ZQVY58P5ySAQrUuPQErLhAfWkTSwwDoq9o9YD",
  "key18": "21zcLfFGZXTQ2V8LNhHdS3SHe2Dpv44sNiuR3oQXwJg8ta3yzdL4JgdZyzqYk5gc6uQ5eVdRY2fSfGjktWk145Go",
  "key19": "4yv928LEbxASrzPS2SUCXH1cXk1P4FzM3GLxCDCjVvYHpnF39P1Lbqj79PeUQroCxuSdmEukAXvXDEYaTKrgipYn",
  "key20": "n8Ax3b1yBEURLtiDz2NZ7WXmp9gUHDaodPZpSLG8M6y8YNuUgbKzeHd8uZXM4rj2ngYT8vRYEQLFJxrrSYESt8k",
  "key21": "GEw87kvpjYtVGnuUKP2S5w2BxTw5MZSRL23UPVMwHbS3GqHPkTncA1CAHaY3xPV8Nu5CcpSMwyKoxUztBsaXetQ",
  "key22": "4tknMaN2Gt55vMx3G9RrgQpQTcSCCr5CXeFuKGfqhdkaaKd9wWN76t2e5Ky4zzjAerb4wMqNi5HpPCfAgL6R8mWz",
  "key23": "36mvaL5YeaDgsoN9c9xeNoFqjRCTYULXqCmahArEvWWFt11qQWkHCb9d2tmE7zXX7rksKciipBExrhJn7Cdz2LZS",
  "key24": "4HFSSd2SFWzbeRH6wYb9PvbxHbqn3iCqzsVt3EGAHCA28zGQcQaHJ1ZvaQNSosMbY6Y3S9ArneYzMjiW2NHh2rsc",
  "key25": "Lr3JjQdowo5oWAV8SgJTW4Ez91fqcxbqbdQTP7apVi1biD76nUUnwGbJVugSsFiNDLGmXK2nkyN4skat1inCxHg",
  "key26": "4SPsyW7a4gM79jSVUSM55LN4uYfQRyUMPtUbD1HKTbJMMxEKVnQKUwgQAtu1tY19wPL7rx7GvmwcnsZbfzkrujFf",
  "key27": "39jgXz3r8B8zktBmirfHvGEXqGe5Tcu5iuWoEgpdRJ1Y1BqA3tpKDBoUKmEbFwhaQCCmt7aidtF7fRjAhfxMNXpA",
  "key28": "2UsBr1Nbkqs2KonADSxQpxPyzAgY9hVzTKyYYpy8nxHrMgzSWRueD4VkF5g7mSC7xLqzhv1UQsu82dpZEEBRoBwB",
  "key29": "2NLGSLyjDBZyjRAgbDcnHgR2KQcMhQxft5J8aUXgKW2Li1xHHc2JGA8bHXxSzoyrucxCT1mnEdkCgVdAkUnN192n",
  "key30": "48dzyjhg3eX13TJUsqFtsRvuEbz7Ak8zqBphzt12eiAa8x8g9tLq5cCudB6CdeQMg4yazEAU9PT4RpZ3UadJfSAN",
  "key31": "51ERHF5iNDXJDFm98trB6mPvMA3v9q83oXUMN8ju276wFykezrhjDxaCz4nQBDQ257AYhY6zCL564vNnYvc5FenQ",
  "key32": "3MfU9cVoftbW2kV6SZGWnivqtqx6d7XDCiTHWVfnrgPWhiP9v1CWHaWm3EW8JP6wzmcsHG8Mz73ETu1VXVXXHLZV",
  "key33": "3uQHzRSbQHkSiqf1pgfq2mdDqDLWhBucvoQW2ugaAh7Mg2VUg6nq2pxmYe3hSweBHxHFTy9E67R9eswFY9aXkn82",
  "key34": "35aga1bRX5fZ1NC3PwR1PB8LPsKseY9w1zNb88wa6k1nLFyBcQuEuovikaHz966u4ZYQuatn5bUmyUNhf46bBA1R",
  "key35": "5zobMe4cEqnyLqDcZA9KSD1rBjFVCQFBcPBNKP5iHMUFM3e1ipx5edA7AXcBpQsFsvtP5SeRkdQvU6sDYqsUmA5W",
  "key36": "3zGexjRswjYK2KcEpLyw1Qo35PZGmhXHUKitFnsNs16HsudLtTUdbxLm6sa2bW1unGdbmaXnrzERHBCJL4QvGdzp"
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
