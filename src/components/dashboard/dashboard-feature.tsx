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
    "CJ2azCiLQogQLVFxXwEiPpSzRPubkFGXWeKJDJxEnNATX2whtLcg4ske2tcQ9MQWy2vS4bFE1LsDbgShLMoYYz4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "knADHsLkKgrdjTw6MV9u5cghtLnBfnXwB722X5uVM8TQWf1NNje8btxFMuUGGCQhJXf6oUAjruDEfG1SmP1wmja",
  "key1": "5peqDcU9asLyS2PCGfaaXiHKJ1qm6BEZXbaKzrCucvkwwdeX52eX8tZa8WvWka9cpy8zJkPWzFuntgshxTdFR4dn",
  "key2": "54Cg6TeHQ5mT3Z17RZ4VMJeNTZTgv7Tq9GfW6gHkja3tUAvjRSdewujDCPRwWPbhFKzPb4My6UajWLhcnfUwZYVM",
  "key3": "423vz2K2zX1gDFpx2Amo8UALH9vo7AdNPenhy3fXRwiZXoT3NwDHSF7uWukFWZFb8dTgbdxR2XvTBUnDcxMnVzkg",
  "key4": "5SYoxwSJhRZwX48TY7buS8HmVdt9coAkNgr5m2GenuCbWkSgZ2GQ1roAznGs7o5pSbNKua28A8JrHh1DgYBWiTrE",
  "key5": "kSNXqe8JQw5s97sXzY33M6TEVn6QzD5BXwbBzUJWkCCeFWFUaBT6uDYS9yoNX48evJKMy37PHT4dcZp6HD3mPU5",
  "key6": "36PYaDserQf6sFbKUpiGzRJLKpAkP7TokUwaKDCKuX3sg9zybvY2qeiiSx55pCT5uzBsVTa13H8zzGy2AW19gcK3",
  "key7": "27FKZ4QjZJKbmcqQREHuQp6FDU8mrU1AazXNFkfottdvVJwywTggoRNwT1vr6VLX7UMvjbnywh5s34hJAeJFV5Uy",
  "key8": "4W11hfRzvKZXTN37VFFhgzrGfK8DSQEzXZBYWuCYVy5uecn3mw5cYFwRGPMK687Sp2PJJyemoTwSyEomCtBYPeC6",
  "key9": "3S3ufdnA8Vi7erUZsSjLBQoSCp3wmJLo8ygQFwv7LLBEV3s7yyVh7PPsyKx4ChA4p24TZ3u5tMvBfT1bfmQGyLwG",
  "key10": "3GoebC2TfEhGvrZZSiDePB8KjwjVVWUjX2VBq9s5VPmw3Kg7Fk72UirVUtxzv1g1geTTgnCLmoQqBxq2geQ2JHJA",
  "key11": "2MvUgSRQd7jMNwznUVUaBrzW3ZoD6XQkaFxfWAtiPy3YVe82vBzex9eC9RjQAd8eKe7D2szuMCeNtVC1BkXta5iE",
  "key12": "P6u4uCuUhkhKZDhMBtpbfYM4fjqTPdMJQY8VcWhCzwWunYKYXJszcBjAchFuxHXgfenRz8venCR5KTGiYWkUJ9K",
  "key13": "awBSHssfPhbfFDL5ArkmqmceioarHwcxsZr5kmPzzJKhiJuhZjV68gX6NdesUUJ8pmxM8UrSzhGWqGp5oF3qTMV",
  "key14": "4igNzyodPh8w9ZGj6cLCmysptjukCobTfbp6tdYUgVf7Ty3VEua37kp2UNZPzg3ZAMRAphhKZhPN1Gs8uPjDPzGY",
  "key15": "3XHYJa66Um1MGLnqDSE8aq4Cysr8WkkHszBxtink44j1qwPoyXKCdaPbaxnYyUxYgDmmx7peibbdxCsBzF8m8HpC",
  "key16": "22A6g3KgBKGYA62ynzLDJ8A7rnkxi1Yzm9PFS8BU5o7mn8ySSY1ZXrSQdpXeXEP5bgd7aKtEj1pU84EJnoFYP8tW",
  "key17": "25hxBjHAx1A5gRewUHqUDsauDwc7g7Pv4cTkwYo7dUBsrZRMNjHF6r1Gw4v96e1zpQEdmKcKkfULS1sameQekgAo",
  "key18": "3zv9vXbxtj7GJE5YmxnnEoDUkYUkNoPxKK94zvBqsepA6PdoTWJPNV8dVtoZEGMxWSDVkmx8JwTL1NYckFiZbqnf",
  "key19": "2xtpKChtxCi1XZMLkUjeJYkYojtoVCrN9zkLyRvFLJwhfe6ybhjy4yqC8sqSrB6x6tYsEa1u3GRip4QMVBwDJHLU",
  "key20": "2qjKgDdTPvmGXYVHxa5HszYwiJDnLzLCsdXEg4iYirT7uDSSZcw5R75G4RVUAkRGMSsiCJWpA2ByquEnJLkQqbHN",
  "key21": "59RraWjakMrdiScsKKPAMMS7kZhzs2XCAnjBniAgjLVK7uvYJYAkn8UzxKt4AmFR42fakcrYURxQ5HXECWRxNP7g",
  "key22": "3ZCgQjn2HFu65f4HWhT4Cj2fQWE5RpttyvVLyBdkqaSkwVUYSALKefGj34gixrbYCvESqWzsdDRoKnJKCHmnvmFb",
  "key23": "2cvs7387PYJPxtJVq1hBegHW93J5apP5kb6TSWrseDHNQWTxLFbh2Rk49PVAKmR8HNWHJjd9soc89FgnvC6AcGCg",
  "key24": "2ENieFGerLtSzBZ84xuR7siy2wxVNNDcgA3otERABrLc9WoCr6jBUGzLPwq9RGfbmfBQR2tDR1NPDYRrYpYHAJXP",
  "key25": "3BBC2Uh6hVtrpRPH2bAvYqrGoSxutuzAFWZHXgfw9pJLFcoyb824hVKUJkaUqp77VzEvhSMcgmK2JjGXnuTzN1LX",
  "key26": "7EDbQGpNvY3x6tP56RqKFc5WtLkKdt1wAQTramjJr3zdx6RsGPhxJ9T8LCTUXHWmh4ZN4gt7di19u3NwoxAta3v",
  "key27": "3m1z6ZZr27jLN89KerWdbhZpQmPmUHdoaVgqq9ToJYLtJRvAN3LNGtbmusjhz1UAcRZWzvrr7hkx1XdAYj4ZA324",
  "key28": "5CkMECpFSEQMqbdse14Mx7AFM7cMequz1xseJkeMmKmsEPTzobNxFLDTToyBfpnWjjqu1Aoew5HwFQxF5jKbHYN5",
  "key29": "3JT5mmboYYCVWQbA4Yn6fs7cWofqtwpS6xkhD5mhwXucyd1JywHvGNwNGEMCXYjNpTAG4r5cttmsWKSeshnqq3qS",
  "key30": "2yvXYSzG3EJgmmV7ndpW7YeNF9bE1dNPgcz1QM63B677QnqtEUoe6XPGMtuJZ5jAVEuXaDKLCQvcfBNZozJmpMnC",
  "key31": "63dTxdHpKnsLWU34iywXqQPU8rK2qs2ePtcuUf5XYmoP7Y59rTUGVHk3VqV7Gs7eQzdBwHds4Hh1obb6Rg3LYRiv",
  "key32": "5PzE8PH3fJn6mMrkbTCHrxRHKnadMkGyxRLqYWrRNvovaPDhd2mX3uEwLgk3EDfxVSaL9SqzRE46HWktjpKki82h",
  "key33": "2DiRtqRLMDzdif3TvxcciiW4YcpyVt7h3aXpDjCZVfAgXxLz4btEzEMSFrqLhNan2gYjeemmE6ER97cGnYU3nQ4s",
  "key34": "4eqP134nczMXBcPasTnPBnwQM4EmNiH5yJSfLU6nihdoh4XC8fRr1UeMn1o1ct9dH4jmoPd5D6UVB7D3nhKBhLvz",
  "key35": "5Ew3FnVVmZQXNa2PviYAgtmF5XUr5WKae1NanFmKWNrH1qdMPrENhzmvqGFHdpJej5uuisqbwBZDPLPfXga25UoE",
  "key36": "2KFYKzGXFtrNSp1Uy2NkzUyFkTcLTYp6VHFwvamL5FYrr52iid86n68BxXYKkf2YDgV7Xss1qkqf4pMXGvuqZur4",
  "key37": "5SP1AocEto5tqyxdCitVdMNsbCpTu4vuhVQ3JJu2vxxtdah7ecedv3Ks7DNDam19x5UQtVx8WHRTZzuczoq9u59u",
  "key38": "5yrbHgnC4vwzWwDZszRc2YNNhLeVj9SNrp3ZvofiARunQAQin2sJzvnZ771CsKMXCEDFjfHiVL5TyqYuLYSB8cv1",
  "key39": "Z8LMPB5KVtBQyV7G8GFB4Ho6ybzeDMyc9eUbAogf6PnybNWPs5SxacJzVY7Vjx9Aiv7HXLG8j3zHY8FdsSCkFnu",
  "key40": "3finHyzuQy32YFo7UhPv2stDBwEMstNGvBiJCKoZruSBSSfB6kFtiXs5tXV3z6XvpAWU1nyaAs5kFeh3zakZ1hkE",
  "key41": "tvk8QXJ5GxJ9NFC982vg1KZY67toE9wv5WrKwkjJAb1bLC23QCNp6m8USo2GYTfZr6ihL3MvTFFkCQZxz5AkjSz",
  "key42": "3M2v9NzAeFtVJvug8PZ9tZEetLQXNB4gQum34SyGYi9cG9cJEfsi7LPNkcjYfw11mZb4M8vEEUyNrBfynR3Rt3os",
  "key43": "63Q9wTzaTWPPLWzZ9TpuAwozamF2F5NmgvSu3rKynJqT4x22bEeAexXQCP2xFPQ78SNt9yRQ6tEqFaEd8CQEK2R5"
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
