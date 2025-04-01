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
    "LnQw37X2t44nD2w9u2fZDwbuQeUxb8M6WN3hrrum9v78YonhphxTaULL5wtGnmP4ZjP913b4PhQUPay9gEmZENu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "296VpjYbcpYQfQcy4bG3j1wNBemhUBhs4Kh6WpPWKE35Q4ZE28eGYe7KwS6z7i8dneb9GL8Auo4CvVTPWYXqRcK2",
  "key1": "258mfVMSfAffkAn2o69eqrFChwi7oNFMnoegKK1d2MNZ2iphYqoCRHyDAZbrZ87dcg5CNGA7kJZ88Jq3oB4KsBq3",
  "key2": "5M3peqS18vbUFU3ip6o1f62kCd6DTHYQUZLDj6ngjqNs2E5nVyk7sD6mmAkP9CTMWz8FUaQB7cmZw6KWKXd1nFzN",
  "key3": "2NotadfgnPU9WutBxiWoUPCCjnrq6pRdxi3ZKqneHSW8bbgWuV5bVsMwyGyW8rQ6qVm13Kho3YyRuepoPi143eEL",
  "key4": "5wvuHyDgfA6TYq8rL7K6XHPPuJQV6N8urNxTEa8F1aUU7XzrwQvdrb9LSqZFY47ZnAwFJerEo3dnne4UpS3MxWGq",
  "key5": "5pcqL9xM94etzW6SdeHxxaLmMt3jzwVsJuUPMhhAsRjHm2JbGwiEY3A4z1sqWPaPgMJJmcyxDZgFiA5wU248QQk5",
  "key6": "4iZmVK44aAvPNHZP2vbKiC1hxiJGvbyartr81zFpT8H5mMX7iSDDNTYKrCaMfyiK8gmhbDmkxQ2chwgEcpbUzRbR",
  "key7": "nvPjVw5XvinUaWDKbPMT23oC3LENVQdxy3zoyoTfdHHGZ44dq2C8Adfw4er4ARD9rqKXyRAYx1kGePnJzUdfZ8Y",
  "key8": "2iFbassqQSRmmTgarjFxQpViQaL6cZFAkGkWJRJq5fdVPTVeahVUmnc6L5RJDfe8jRMVTUv3PwDnxoBq4WgDegwP",
  "key9": "Z7JJPJGJYhGWyHVpd4UA4JX8ViUxFRVPjJ7KDk7AKtRCGFcr1AgZGrCsvSUUBoWcgvz6mzDkVzupWpuHoTbkyit",
  "key10": "3CmXTUcYL9VE8voHWb21iH1F1B6kj1sdUXcrPB81uGniacVti2DRGBV8urzfgiam22Tuw4QVdKTPVwrBL1VdTMXa",
  "key11": "2tBf1exeunoEt5sifAfhd51iuXsWkRHRTiHmYWbRrxJrLG4FJUAo9npLVuPCYRm5p2FSY9oZqtZ8GSoAZJ2zEwFo",
  "key12": "4ZrCycbYpBnBQa8UUy747FQkymwDoDfd8yo9mV7f6PPDbNjpDe42x5Jo7R1AbhdcVcUvHd1o2QQ4WExnGDs29Uxd",
  "key13": "2tiwA8Z9KHLV75fFvMo7yyY7Svt3ffQaGkuostRQz5GKjPv53QwXF6HQNNzqf49U8tXv6tizYtTuDehbtVnGA1Vq",
  "key14": "3MtSk8tTsZpXRKWiCyXnqHLvHkaC927njAARxvcKBrcnmuj16TqbFf6TQFvFa7PG7t9xxB8Yjy2as2uq1RPxi7K1",
  "key15": "3QQC3HHUEZvA1oiZXJa3UfK92xsfJb3uUzhvT9Z76NA1b18tj3TA8ku4jLEvVNdV7vpLRNWjPeLVW7PqPQqPxr1B",
  "key16": "65tjVM1D1pLB5Gy9VFsUxmL659uC5xeTnw7RwL3dMQPysViXF2T8wBMqGTr6DmUk26WAnF1PJmQ2PhG152vbhdG2",
  "key17": "58ATjXtLxwhUMUHQ42syAgkSVUswTGKWpCudNFf1UXSgjrbj5y4EsUNRjeFQ8i8TRjqKbFghXXYkg6CbTLcnZi7R",
  "key18": "64po9FGtyQv6MuyUjsJZNCoKigKrtU79XSTvDT9QDchMYVUhogiaYzr64Mpa9xhArEGedzJH94rkkmuxkWxCKLxe",
  "key19": "4XZ4rH6iCW6xEHpsYAYtacrJx48fqNaU6ekGubTKnB8PpPwvCHNny1iFeCodtXKpBRTHmLJX9oznGx3PYYsjhYiC",
  "key20": "5y8jyttNpVw3UrD8P7NgtmR5WufBAV6KWGwZta8Df14jeSN2ZCSqfhbnQvapLNCN5xmWEMPNVkgYjD7vY4C6fhzz",
  "key21": "23bByewXZ9mLx31fULRyGnFYMrCX1TDHruPV29EwrGmQWFWJ4EqPt83vUBc4XU2Ad582b8FzRQsQ7VYfY9CdB5bj",
  "key22": "2gbyszMeVhjVoGhf33kkNZP9ioqLYz4UYghE5F4EcC6nduU3BDuUnGNrVrhQVqKzjTTyPRyfA7egGLwccwaUL5aM",
  "key23": "GT1heGDo6FjK1rGo9Ga45WrXrXtTMHFLNTDA6bfM2iduMPkS39L8Mn4Q6WZfGAwnoCBqraUVGryVEjiFLLpUt3s",
  "key24": "2xZe1kPT5BYStmU96Tkz7Wmm5xav9pg5bz8F5UabqMJ1wN2bsaL1ovBwcUiZxwn17qwLULbMQvba7kY91aRBcvuR",
  "key25": "3J7ijGghjtYJxRcfovbzan3Wv59qcr1Y4hF4rQ7JyeAUf1PEHMhpTPkskQ2eDdoKQDckwP4UczNeQDpGkncojbUP",
  "key26": "4F3DDnHhmZQmyowqpz1CuBnHaCCS9Cy2iCJys3au287bcQe7TgPChkWedaB356KoKKLS8hESE6BHJxZ2jfSWX3em",
  "key27": "4uJ6yxj4TsdjQPU3khyw3VNcGagCEB15J2rVerYcmvV5r26y9tnDYggzTK1TM4HBwsL53KYzVMkrN1CLJrTkaccx",
  "key28": "5BxSRd555gAKuxDchhsctoLhvU73koogwrThttCAnGRqqarDgU2P7soFpWix9f872CNqDWTJhngVTYaLvgs8BBND",
  "key29": "4YfGFhsCM3WkwUCR4uaqEPunBnciy9EyEwswAqXtMGhRKE3GdnjWKDQFyqWHDfjMLHWN9eJmApNhknwjPFRafx9b",
  "key30": "28gpv7STLLUWeeW5yffdDpYDQSv2crSzjp1ycsTcFQasH3WKzPasKQJYj2o4QWdoWukKjrZ89wCGCGPKp6vZVGJb",
  "key31": "67b2sZto8LtntiHWpnHrXwriQdaBmJvaksb7AC578SKuZgHuaxiLFft3MgmBMqBXMyzr6Qh2M8T2FoinG7yVA7Jq",
  "key32": "3kfrWtbJbGDYYV9Kv55nUAF3gfntJjHPEy8gm7V9DmV1k7qHWFp9XHrBX3oM56Q8bruUcr2VSyCYGX7fGpG72PMV",
  "key33": "2z4XSXSRM27yrufg1xLcd1Tug1EipmhyJMtvwf1U5wWoReRjZH1reVBWyez5wLHWv9qdrFxJLpBRhrr4wR7GnzTk",
  "key34": "5LEhiQdz8Mk86mogXohtcn4EoR1xz52WUBvwmhG1CKkMfyXGroGUzEKAQsP322ChtJ86CeMkb6iSgtDY5ysaoFda",
  "key35": "2fQTehRpYnpP3zR33Kk53cEp7Smz6dY7sJzaCa4SVDcCcnrtzYycPND74y11ZmuaCt7Yt5tpHtMrkQijLb4rGtsX",
  "key36": "3XzKQbwH3uZfNApmWepThHpjU41LrukQamZ5VQ223mCgPe7bTHkstfWN1bso9eYwwYhYC3ht4fDqnvPVnXzx1Sb1",
  "key37": "2xMWjKnzZkzzA8TS7imN7eGyrwCVTViT5rFXLhP2acRB3iQyv9BVSE79ZF3pN4rnx6oZULc9a8xakbpnBHu5G8pS"
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
