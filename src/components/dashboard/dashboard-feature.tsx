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
    "3MJ747Sbuo8rrdvaDS3segmUwU6DX2X3BgLn1n35v16FHK7EhuPaqLddP6kZhLJufpL9HxYXYPe5S1cLGUUq6z4T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FUBVYuRJnRDciDZKMMGCBJHrNNoLYkDzoPWDZAeHia1bj2PcPbPsX3UtzWcqc5ouZCz4UZd2ZQEuwpbHz3Ded9r",
  "key1": "53N6j6h5vFXRuE8SJCyj2KoCWsfCT3C2nvjimXxYDHLXsjPH9CDgAnqFZySeChNp6CDVE2N52uFtukAMsaTcqYTC",
  "key2": "34NVzEEwrdxn2TwzP1meEJQTDqQxuQSc94c4WDnENMMeF38JvFPojbABA2CGuksNvxLHcfLYo6iem5KhzhzXwC3b",
  "key3": "34jrXBM4N3zgYbiRnj1uhTBVZU62AanUaujDmj8BwBTdGvGxphJKpkGEATtNVGW6XkwthfbEDb9i297trK2emdNV",
  "key4": "3he7LQy2mTeCTybYNmDVVh9F7tDWVdxcV8oUr1twprY6AbKatCq1yrK764CoG32HQLrKUnSdigbqhzz8auys5axy",
  "key5": "3FFR66R68ApQQSoQ327YMmmT9G5sG35krcsFQirF4FafQouqtw22SeeEvRaBSyN443ZqHxbXddc8pgj63LKQVwDP",
  "key6": "2166P8RGcmTPFi7Kdp85uovnHd4HBdh5A8WnTX4tojTPCeYiTWf6oZGgHZMeB8Jq1VjSoA2YZ8eadg1vZ1kQn6RW",
  "key7": "2VUtKjnbwsVareiu7S9d7WSveLzYrimZjweFZTuuJHujaax3uHv2myap8xMNBkXyqX4zYwKjzZkT242exVmjWt78",
  "key8": "5oNtdYj7MgE6FmJfdQfK8q9cNcvwd6RrtkLo5WT1UPpMUQGJMcgacpBgh5Trzdg1G9gqSG24MNPCdZH8MMvFPj9s",
  "key9": "26t8QPM5trqkEx1sLhqE18ujkwUMpjMTtVJpJ9rn7swUkY34GUHTs4WaTWSJVCksCyHVTzabdDwwLhkBo1vAKPqw",
  "key10": "2uWCReMFG36McSY96kPhVRVNjKnAatu9dbnmcTAMwmB9ouCNA6F5ZAmoeBKFLJZMCJW8WZD7m9KBtpiZseW1MQb3",
  "key11": "3GLT6AaGwN173pqTtBX85qtrBvX7wuhWihzd19AdG1cWLLmmkGijQ67knja1jPvZfSEzXvbPoL43CA2ersWkvkLH",
  "key12": "7PmuArUYimSBSKJS3bHNkSvTLR16GZmWq6argJxTiRh6Y7gHkfkcL4QyQ15XWN5uKJP1o5HNLtakqkC97ohPPB9",
  "key13": "5ZitVomCHAJbWSohUmnHWSh4RACXiqUJgD3NVWYU6utqWE1c8hvbudik6xhCcvDWGGwd13FRmEbqBfHi1frYyTu3",
  "key14": "411y2GFF3nyGRMEMWYkwk8D11ZW6bHBRcSZPz2RR8Wi4y2S8Py5PNViQ2tp5Ju1Q4ih7xeXKjqJHQZVt5gSnMXp3",
  "key15": "VSKmdMego3YPVxAGjr8S4fJdjJgq92Ni5yLpynvGxTmk8r8gvTda4VLfG5rKUKf5hhKepG1f9Rg4Pm9ihqhot8s",
  "key16": "3MrPbK949btBUwhLUNR8BkyLm3dRNAQ6fjxAdRgNDxJWQyv1LGAd6HaNpJAHWkPSfEL37bp72kq7YU2oZnKBMf4C",
  "key17": "2WeHFk1nGHwukc3bv4ph49RZNfJB6EAZnRXK2WntoRitYq23QCZ31CXbaLsDmcXrLuYzkZTPSCJxmeU7jobhq2hi",
  "key18": "5UkZXdbL6MzLKLeLRpdVkennrL8UyPwwAvxLaaFqhKSWzyLKVq6f9eapW7miESmqm64ysiL3RjXsNQao1ytbsVt8",
  "key19": "61gkhHyyZ9Rue2VLGK5RVysViZCvLKZG2abPc5JJPZyyjgnjoxRXdMeU76JUg3rUfwqqieRvDATkqQqWidvxz7N9",
  "key20": "3vsbqX3DungdKMAkBaxVHNMm54wswLU9QLuAdDFLG5pnCCzya7JdCFPKkNveLNLfhfToPKn22rkvwovZYZGYpUfS",
  "key21": "5Sg4iqNYX8iiTokWQee1KziKJj1XxSxPDaS8LX7GUcqdjpp3cBPFC8DwUHerVkXDLebDqXwNm9gQJZaqtVcan4MZ",
  "key22": "5gRiPBNKT9wsb1a74oUCCCPWJc3gTB187Fj7bTyyi2Xesizha7tJ1SJo8ZMuXZauShButHwanS2fGsRdGjotkGqq",
  "key23": "poQjfqmxXcqm3GfCAJTijmSiSssG7NfzFDHuumxvQ2sHdQJcc6r3cy1EpuF9bZ5Fa7xncduQnWBZtwsHgCSyxiu",
  "key24": "3vbgmmXRhn5BTcjrYhGrv7Jd8mQyqzi1EVY7iFeREtJbwoRkaMvVpaZ4ftkARgt8frgMrRb9A9e7gxfwHuWStf2L",
  "key25": "63w7wx2PVnseX691PssvHSdygxpsG3KbaG4sJeFrW1zNZb8E9MdHqSvkjDemgmzyerbBxbJSLzF3LLbf7jmJJCP4",
  "key26": "5jf7XUso7ubg91VQuT62VaKCEUwGztUuE74c6sGp6rqS8i7VSWA2YreeVuKXXLM4gTru39mc9bTLjjKzqwcLkiqh",
  "key27": "3JYRG12FyrmmQTAUN1H4Vn78yYKrqnfwCgRrCiKLBrqnSLqvWCF8jFndLt2HD6KmY966bKwMjUHHd9PxeKW92PCd",
  "key28": "2KyvwDtWo4xNg6A4SsbxP5MxRQSrPbpGMN5L1MVkXvvn6oZtYkN9V8RNieL3SikM4kHDDGUwpKWBuy3MXM5MxNgK",
  "key29": "58Fxv1evPYRdvufzyadVYUWMbgqENVE6NUHmnhaQ7mPwF1DQ4KrmwRMeEa1m9zKiEshn975cjrzDLQSP5ee22q46",
  "key30": "5VBDafmmS4Hf3Nh4k2EJyvcwE1x3G97CtSkxhniKyrRVNohJnecfB1juybCZKgvR8Vc7QwcWpby7i7VsPGdbMK8a",
  "key31": "2HTZRCyYnMrnWicuVXeS3QcHsGLjYLdLrboK6MAodFtsqc2awdWgRmh6gQwkYFqmZJCxBmLYHmP66jgEmuQadLd2",
  "key32": "4VrVyyYcoCtCw11TRT5CXzNV9uBwFY6Jqys9UGoqrwHi4pTNJVMk7N8DLQUQkNBBZ2tABHq5fxvKkt6KXAkW2g93",
  "key33": "R5L6amPdx3wYrDoTzR2mH1uSfAtwnCRSzotmEfbTN2v9BjMUunBmoCRjS2jiCDJVuUK8WWe9gxcCrtLrjuGnzMT",
  "key34": "2A1fcU2j49FdLYhjvTb8aYcHzx8NA7CRZTKLE32gXgXWz9qrwwBe5yiCV7o1Bffmi2JduMYUhrM5Vn8sPDV2Nggd",
  "key35": "5GT57TpvGvJ8zrYagzthq8q5bVLC5a5Frx8NhLrQYpQsuiVjFepvJVN71y9sWDQHCzFKVjdPLyoXAzheS1e1Jhq9",
  "key36": "2RXyXAm7QFBdonTz8SW4gcDeFjwASHs2qoaQ1mW6LEw1MhjRdVTjqKm4QHDHG734NjtTUqjjMSF884kMG924K2Df",
  "key37": "5vLXS4r7okJqq82ySZmKRZuzkXAyjKfzEwQnSNb9MDDNijZYr9NTnNyR5hC2kYoozpxJKorg9kpcGBjw8RokHnBt",
  "key38": "5B5YKAEDkXmkgJuVnf5wb6qgJUr5ctmuAz6sJphWKcGwWoYzjFyxCe9Jus84R8iEaKPDVT7VpyetaYn3kcERxsyQ",
  "key39": "559XVGSwz9ZDGgC1gBaNBmTKhFTH28u1LMYoztGwVWCrs6Hj5dkygiFR6HEes6fDghneD4wVhSJQJGL7m7JU2DCt"
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
