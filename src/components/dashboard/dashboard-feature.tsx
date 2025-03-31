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
    "4cNerKVkFEvGJiupKLhVcAxHzqdibnHTLeAbHNqn4htpq5hkcQD8hUHgMApnyDLrAhrv1PtmJQn4uwyocJYRf3Be"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qZRzE6vnEUDBqek87qEBid9stdREPcoGhWgw2y6nifqfatXuahfrsyoLD9XtmzmYN8EAcsc86add2zynBh6nxzH",
  "key1": "24v5qpa2mQgDZ5QR6pfHv1aJi1dqV1ahFMVCBe1nUhvtnQavKsPrJkGAavgzh28vspYJ9AKMDXBkxDbYSEDTvBKL",
  "key2": "4w4f6WL92bwtWPY3rSie2vHhjcRUXzXcKYELurJrWjKWuhYubfhak9uftkMmkGBsMoqqr68eLn2pVqHdDqFD7sWA",
  "key3": "2GDcfn6WA4Cg7FrffwzoQnuoFaMCSJCHjPgXzzV3SEi8DYydd8NCjW9u5ANrYh4Bhkx9mc5TUhbMhbWS4SQaxXrv",
  "key4": "pE3GqTUpEJHLp6Jphpss8ith4S6qxTb8E77Uajyu3BjCnjDY6ob4pDgrR6y46vTq8rRky41RBmKPHJDMFWFzuNG",
  "key5": "4YFH5H8o9dXY11nhr6VgXrr1svZxnBKstoBrNGZJyd6gtKFzhJTzPtkmFHnFrQ1JLUjhHi8EKdUKkp6R9UV1xsh6",
  "key6": "3ApJ3RiQvR1RFEsP9UpMWf2kFvwpXz54DDj6EJhsQ6SHb7gK9JwMCWXDCTJYrXUg7vdb6zRYEaSq4GCPgAeEFoD6",
  "key7": "5us3R81WrriBoQ7ixnn8Y5ywpzqhFCBfr57z9WRS9yTygYGyD33b4V3PeqWYhmDtdeHhXuwfwzmE2bJSSpcGKtW3",
  "key8": "39QwQoAiJT9ytTgPTQWJYqRHQTX6K7x82JwYpuJcdiLw5NRYsNvf8Kc6gaux2AT6bQdfzzWpyy6oHRSv1Jf2SUzr",
  "key9": "52XuVnmye2F4tSfp7fiHgW3UV3t43zjVPKLeucA5qC1BtZS2FH4HYLzMz58WvBBKAGWQzRTEKbJNXtXLjFv6MV8Y",
  "key10": "Qob6k8xsxT9Ncd2V3cHtZAnGmmhH4s9AP1NkvfNACqMQSrm8xuQTpHAUmC1wztkU59rqGJoaxQCVTP2SCMe95S7",
  "key11": "5QXLPc4u2Gp2VGAKAkDyzBRUCGjx856rUrkse9DmVqGPZvLRDqzvbUanwKHXbWTTdAEGktr2ojV65Y7Cav7KGPQM",
  "key12": "4Wa9t5SnrRoYad5BYuYPpscdLJhVTG91mDBDdJ31eNCK3UTgBTzFXPJMXx4KznQzzoFbmQJmFXvNLVHYk9WNS3Lk",
  "key13": "UK8sYPf79R6BG2C4FrJ2ownzNADNoJX943fdafycf5qNwegopEtBt8zh5v7UT5xx2yYnTPbJrKfudaf6bsxxFgo",
  "key14": "3wSZ8m8oJtN5wBc2ZgGSnncVdEzyghMXbVMefjCuNNXqWXZeLhRkEoncLMKttPy8Mz733kCHGzR9jFUGuXWCvvzr",
  "key15": "5iNSFfKho6aARkevihQtYovLjvfh1uerNPQeuftWAZQW9ATvNTrCENLYB9R6LpRvbkfeN6GgtVyGzCkazHEMRK4f",
  "key16": "m1PRYVc2VtgSXfDzBFuUBkiQwwsTNy1qUV1s8vvmCKJt4dZZr4KMxTWNsiXXiMo4zDFqMeWT52dGSF1tu8vH8Cf",
  "key17": "5iWvqBqYecxUmMnvFP6uxiCj1xXnyBmrfJauJTyenz7jfKGmjRMDJLxX83AcCKsEg54WrpEB66V4zRSe1GG4sFQK",
  "key18": "JhnWopGtXtfBNS2FqYg4Z6SLixUTHTZfoksyGq3YVHXVERR4VkD1rJrmzUfsf9wciacv5DoeMFzjDonN7M41TY3",
  "key19": "zJzhxHkf8xqXEegHg21WjVV7Xzs4upD1rvHcyi4zUnTiaD2FLDUcGi8C2AePyfztUooGhBXdM9SzErmkMwyZvsi",
  "key20": "44oAJyMDHxJQbf9ij51MxB642zZkY2Ka9nAZ9D7oX8VMRwRrSQf1QwPkwT7eRm5SsqaLoJFS6SmSkLNw6vMjAGKe",
  "key21": "2Agyezq1UvnV1ug9XbSK63XuaRGq6sRohAChqMJcKsWZFJH49CrvVX5JYzeBp92cwKUNq1wQmwz26NjBrpbjPm2Y",
  "key22": "4bjjsx9aSkYSQnByrBj52Go9CVwDKEFCspDcmQpE6LDNzAN7nKTDGK3vPkSEuzHM24iXqFocSTB4Q5iqBXgcbEnZ",
  "key23": "4qyiMPYJJHdiVSgsigcFwGAtS2pvp7PhE9nmQWMeRi9mWgevuyTFhnFTvrSUhTqDHgU6qUVUeZyHFYX5mHpnAkZV",
  "key24": "2VTGtmpjqEoYJin5dqvY2c3j73tpJEAUxGVkuRGR1NAw6HEqq3oDttFu3PxVvqdqSahMpbSKWo8yMhkkJZiryR6V",
  "key25": "KqGt7tQMhBPZuhoKZW6M4wTqpUyJ9ni5UKtu15LGwBfL2GjqVBcUZyufD5NG4hpThVkd7fphD36gj86sFoX2zLw",
  "key26": "4AdyHGzqCZLURh1BeDER7bJJvSmgoaaLQFgF9BfT8jhPCofXpF4TFbW3zjPiFHGVCHtxeCkCE9WNFAfcYScMic7Y",
  "key27": "A48B1QMGbbuc3jBrFHMF9MwLVWWNoJKFxr5uDU5ZShY3Uz2oVaoLmexK8EiLHfoeyoNMHKL9E158cS1s4KtrfRS",
  "key28": "2M6bRY27k7HKaQuzkragZHC2fREohwbPqdviBuK5xEhVuU4jGLDRkkAioenVVu8YwqHjZvwH4CsC9cRcrrHk6frJ",
  "key29": "TtdkAkxuBEaUYUbQzdGXSSWBAMwGGPatmssQu7FmfE5PTWYfLUXEWoW3EYQd84Adotr4uZHPu1F5M69y1Vy8zeg",
  "key30": "35eDpgWzW1BKJcQpYLwBdCFst9xdo1zuuj1QY5VKkiLQJmDExU8zjHg3eVcnvxNWZbVvJqT4HFeK3rYBep2D54Qo",
  "key31": "5TSs5GMfnXAHADV1cfQ3eWtVp69n5pC6wngFEAiuaQwX2M1yDVTr6YeSaFQ9RFvPUHEmM91ejRzpWJCevtuFxHQf",
  "key32": "2ckqALSF9bX5ZGVPxsuauMZDd8BhdkBirs4BM7nzkFNxByWrSmLDmtkHq5VUfbAoHC8fDr7BF9Ax5exBhgSRBkx4",
  "key33": "4QDURYqo9p6AQZ3WMmDnuW1fRDgjSVArFBGFXU6Pcjy8ojTTF1ELULwG4zceE3NturxkuCvX1RBwSCWGRhoc7vhr",
  "key34": "mgNjkbeQHuZY8oPJncrbZ6AZMXoeAA7R3GVPzjaA4FYKDrL5gk7qbwHyHHP5T6YMppdtr5edMTqSEGWww9j1tGm",
  "key35": "45pcXdiqAtctPwo7eGYjTbpmwWhU3Mc8XgoHXoAMw5vT3Ngt6cAN5xEMgGQA3zyD8RymxgNMN82yeAdGkSozwCM4",
  "key36": "4PbzGScxE1bc8X76hsZdnd7yU1Z3ifeVgvLojZkAtsoBdixMjni8SBPtYfcvC7zXkvxBgN2nNSSooqREfmzsC4h7",
  "key37": "2fPduFSWdSPipFc3fqqcKu4wASMpuBV9JkksAY8XAZtQAwY6A5YA84rFv1jeVnkqFKH2afiFj6Xtuqdb5JN3mLqU",
  "key38": "EoZwZwPvo7c8ZCyYuBPVgdNLdf7XHF6B4AUytt9VMnWE7Qdb4atqBzmSjctgQD5KZHihNbKGT1C82XFjzjEUkuW",
  "key39": "4JJjFczhDF3B76mGBXS14CgUSB2GA6XRC4kC9HCN2P5YWKtMZuzCG6cyG8ucvYMaxUcQLp1Myk9BL8gT1uCZYoNQ",
  "key40": "mRRfTkU4R8apTtQPfFCG81E2ei1gPZb1HzWXLcfqXuU3zdrSaB1p1iBR1pzcngLNFm5bzSFYAuCiRE4XvkbkGBo",
  "key41": "pTs6AqnzkekeAHD3PvNt5Wbjb8isbbWwXFf7VoDh9TgyTRJbbKGfX3pbBGe6MboF2i7Tq4bKTS9fSLS25G9WoSd"
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
