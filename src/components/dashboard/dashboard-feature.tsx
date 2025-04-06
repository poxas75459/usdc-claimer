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
    "fCjXi9F2yDE6NLcG45Wbjm31UBNoh6RK6VbbAXFno1jdz9pPMhBF7ncHyoDY5AnARYpRvAqhhdZefZDc3ewSSpL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jfMXonMpFnnd82TguFnSni2zxqi85387vsqjrcPFdEd591YkVQqXH29CswmwYyccNLGEqy1HMERA3BX2qdRCHv5",
  "key1": "56B5T74QabMY2EjfXvY55jJbMTGPYynZwVyYZ9oCSAyDXqaPTqV68d4nU4Ng3XD9GJgactuyTZd5zNJvTMmBcc2a",
  "key2": "5bUscgoKzpF3vQ9DHofBbxHcrxFcThYuX6YQcZWcrHdkNfySRXEGonY4Pk7b1d6nneuyijV21mKbJWzMZtsWk3rU",
  "key3": "2sXihfJydZqEBe2A5gddvjN3CPGCMkZ49bQbARkCCfnjKt1zgWzV4jivwR1MmXagPcxrMTrp3GNwVw8Sv8EQTgwo",
  "key4": "2jq66T75LpuqgJWPGMMcyGJYdNe24RqQGV2wdcAtGDbKM9FPgscpmWBySUAUZu9sGMUujdmTcz1EdUct3srnbWnC",
  "key5": "2cvNqCVfqeUxzv3Zhco5qSa7PD25NNv7fkPP2aEjzThMmQZ9DntEzNDTKhRxhbJpvYmVarxJEFfB8phuDqmJm5ar",
  "key6": "2mkYQaqkEyu2dQnEGEchabpBHsggiFk48fsuYZn9h4n1mTUBRHaRQSTnZTxfvUrkRRQHYiBLVgym3B8VbHRu8ABa",
  "key7": "41SkYZnUxYisZ4Nb76WPs4XdcXKifm4P6vyrQ69Xv3eR2YBreEqKzcqWybLQNq1TW9wSyhgHe64GNpnGkDz94BJy",
  "key8": "44wf2dhnAZbMyc3BTkS5uBNN9DeAWWCAepPPs277kn4ucwcHwYFXmMiXQLptzfePbH2zoicjJb4ofU42iJcyZ7Eu",
  "key9": "53HJRZmFktmmLV1p7mGPoYyty8pE2tfmGvMDRq7EVcQgBy8miPZduvSuSvM5Wam14tkrjwNxrSwHknJEySxYzdjK",
  "key10": "2XSAMawtVoxhF6H1d8miTJuJbBLpbo3vhwMKEaT44vJBkVVam9Ef1CEq91kqgAwaPXtkgGKR1caJnz2XiGEYoaNc",
  "key11": "2q2hXEipVmNhkgdaKZvt3fqsBnCoMho4BHc8WiXFh39kgx128LfhuprSAUedkx49CbxsLKApnrjjRTdDVLxbrosq",
  "key12": "4ognqEEk7FYzjFJthkoUuzoHLD8xe8o2vpQaFL269zjoRiLMf2vbmhtVFaTtGEVCCS1s2xkrzpJahF9MYzCdwUQ2",
  "key13": "2Cj1nptNUBWHJaqD9qPchdygkJMP8pcgDUWxHse3gsy8b24hFZV5VJxAXr7SrKiMjifEE1AWsMGyC3DtbG5PthJz",
  "key14": "2tCooJWR5FaN1eAxTGKXGbNgCCCF8tpkTaTiUpKCvH3Kj9QGa4gcc383nHeAaccRqBEbESZs9rvphpvGkGGQJoUW",
  "key15": "63GAdGvfdLMavBdWjh26aeBijpPt8ejq66ugM5dfC1j5YiNkzsKzDcxxjovh587pJ2G9zcajqbpYGRNQhM4uiCjh",
  "key16": "2n8Cojf89yprsRGzKY2YjgJbbQGCZQGUFe1jTQpS35NCosPfmvGXJfz6AcNivyAETDd7Wo7NTT9sucFWzwSivZxt",
  "key17": "66bpPad9oQkN6J8LmEqDZRc6ke6GqR6wbyYXwVWz4tZvGG8FveTLCgnRdiki2MQBkVcn7o4RahTJxFzD64fwLF1d",
  "key18": "3dHtcSaYNFJvR31BcTxnb8TPyQHpq4t8b7wrsXkJxdeWRduUGqyZPLHwsMiaPeMexy8V7BNruGLhJKi1ZQyPBRet",
  "key19": "2poRJntMuw1NN6nRRsrZZnXg51WH9J6Vp91W3mbGcFDZhuXxiVHq3asFe7BUDh2ve1LKQ3QRsLjZrNpenGz9uzCH",
  "key20": "3EJYP2sVsEZM4zMds14JD8PeExHs4WZh4F12J5pEnSimEL685vS4LbJePPE34a9ptH6GPoroSV6f7p6EjJF4nC2y",
  "key21": "4tKegW2g3Pat7ZoGX4jqTQTuBDggVgFeKZ2ntu1MUvnoC9FFJko7hkh41ojRozWnTXB43muCrroSQzLSRaduL7wM",
  "key22": "ddExY7aX6NMGAkxGRDRQFdDEKBjqgvkePL5u7cNt9XitD6M18DbafLRtNUZCMX28Bc9a5KyotvNWwiMS9B1Ndp5",
  "key23": "Gu46epPEiwnN2KWnhkL5P3gkpfw1zaudz429t1aw4VJnWRFU9nChjarif582t6nWGazDWrBx2DQ2TV94qpXJqpf",
  "key24": "4npjn3HxdB9dAGw9kTMx7hJT3333NFVJMpKtsdDXuS7oPRstK95zqjp8nPXNhXBBMWbJYK583BKKqRM3zQDwYoXx",
  "key25": "2nYbMSrdH4rwor4pJ4y3bUGyts7CKTdxidhcQpM1TUqvv8Cq9vjirmkTfnvRdKSq369YfdrS71i7uJsr7dGRarkQ",
  "key26": "27FPfGsYKZEwU3HhgcuWn7yKFNDFzm6wa3a1uAQnHYFaCdWe3CMsfEUdR7i1CUwkaHpsgRb11PJPw93FK9LN5PeD",
  "key27": "2FrFUQYKRRGRgTBkFZYkhNSYmH2H42gCGpRKDxtvS3yfGzNa4gNUvwEEZwHgZVhqnA5cCkdDRMEscmyza16jjHvD",
  "key28": "ohqnTSSET8mLM1znDjWpDwhSxPxSwpJ16xyfWm4tAPYbg7WBknQ5g8LNz5hHGRHj8L9z8idg9cHUmnP3afaWqqg",
  "key29": "3SLkYLjLyjH7PSkJs3mdGqJsgmvLWuKngMZbmnV9kw7coW6Wg68SHE8jNMkD38UMgczPnqV23BfC1nHFb4NokTCa",
  "key30": "cbSNznyjgy8oroQsErBZmX4FQvVZVLDVV38NjSFVckxgxvWYX4venKPUPu6YWTbdCLShyVUFr8Yo4TcJHuxrUoQ",
  "key31": "4oAufpmttHiV6eWio7SJTrq6iDp6rm5MJKEnEQXQhDkYaEhwXxLgBJp1sqmyr4zezRh8ynd1hidvoPrRUZWErQUW",
  "key32": "xBXcD2A2UiD1wwFVG3GRRrrrUmGrTCTaffF3yZ9ynLjUzM1j1pRSoFy8a9Ar7yMnTSyKUFUGg6VsEeWkcURAKQV",
  "key33": "3x6wceVX1rSYDqR4VRyH8x4rECw83mekgLAS6AWGXWoX3uXwvZhZQfkwZD5WNG5RsN31kbvWMcNeRunFzUuLGSUF",
  "key34": "4kR87haVKN2tRnPM8RPvfN72qC9r1GGb8oBSwLbdLC1U3CJ8UyCvY8CrypjytcdkyEnsYtoj2dAK5XKmvWzHM77A",
  "key35": "3eAwkGFjiERSEzcrrsBUnxXEfpkJBpJpm5QtLVhsrexYVAvod5sgorp5WxmkH21SAT4QqjXSBGLu8N6m2jVRPGWH"
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
