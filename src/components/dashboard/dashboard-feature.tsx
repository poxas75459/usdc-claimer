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
    "25A4TbvXT2SLMvRwe7SnUHW2nztGCGPsn4oxJnXb6qAkSTr56eeaWVo3ZVmY4QkKNKCxutQDUCDNxtYZModWhgsn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51eCg711zaqn6VhnueaDjxFbnX9rxpi1cbqB3C7QXbFE8Qn2n8wG6NGGjon11srjehng5DaaHDV9bHPKnRraUCxj",
  "key1": "2RnTnULmE26hs89wmvzvy9UWHKfe7Ef9ojZSJfqTaE5bjq9GhQ6bFZ731ce2Rojk8oik4xExgwTESpzPm7HXg9VV",
  "key2": "2nUHNDxkM4WJUejWbEAhRYrKZY6Xwohss7W2py9kFFejciwu1SgwNq7ssijxqyGvgS3PCtWrxFDNvkr3SGk8zmRe",
  "key3": "2CaiuDwcY26PdFhfntJYVXcPqY24YVX7tVNAVcdkHtbYjfK7hcrjH27c3RL569TisVzwpKbvkUd6g6jeVPWu5NQ3",
  "key4": "5VgvcQB5dMNn7NRkUERBZRUmHvADVX6EL6cyZaxdpkLm8dd677sEEPyVYxdXgZrg2DSwLiBaiTaxMX38CzgrEbDW",
  "key5": "5uxmSsmYonoJeTkZ3rp8eS7YthFHd6LdW9FjAbCiHr5pP9zQkZQhNxe6UCygNyvVYDdwCZVrnEym6gJ6hj1MFdtS",
  "key6": "3tS9hQMESjseGS7QDftnF76hs3zuvrU7NC7SvThXPbHeNWyyAJjWd8aBy7HiQXTvbByGvHchgQYuiP92y14YnZG6",
  "key7": "5GwkxcPitJ5sQoxgfUavdaTHw8e36rQ8qp2F4is2BvwqdCWbXjAoKjUurv51zbVv2YzLszvdSiCZTvoPkcw7PpQM",
  "key8": "3eVV1KwSsJ2TPAUoQaNYn4wgV6tuZBJrQGy8tgNenSTzVQkoaGa11Ep15mK4ZrigvFU1CBeeF451vfiUNusT7m9e",
  "key9": "4QtCSWThRM7P9KxiBou5PwJBMuRQTfdrknzh5fENjLHop27mAp4ypoSRyyvcJzMSWQwUQ6gByr7eEFvQhMNpqPBS",
  "key10": "2w95J3782cc17Xt1NNeqe9E1nEgEib1qcsd84eTvXW6pxhW2216jJ6M9CcL3f8Dz8rfetBDqsMBTYSxefAFcsWbn",
  "key11": "65ifJqx612MUTkoZPWeZRvC2NLigTg2EYXazXFgHCxyN2CkmftRES8VyjkUxGRGpnEayTFDMijeQwtJEDLn9CuWb",
  "key12": "5burR5tcSit5keeQMLsoAtJj4HW8HwcG5rDWGLzqhuYLtkjbbux8DzTJCSd9JRKHr9fEaN4gCHeRgEXysAN9CKDM",
  "key13": "4xfjzfybt5x9YzeLj1AgJrB3Ey3hT59g6sg2YjjchxDHTEf6PQZW4dk2zogX3XUTixD7MoUN56HzkveMZfCrKgSi",
  "key14": "3KKEDnMMok26fWYBFAY9sVJmBcrzyhefMYDgXWerzKT1LAjL88LHpa6jrmg8ze7ZUZPwkFAG7ReoxnrCb1cxVGak",
  "key15": "5fw7bHJYBCsy19xfxPjqWy3y27XrfELMuhHXiYppCcGqErTtuTiind2PgDwiGPNbLtnBBww7wSwG9Q7VSkr5KG58",
  "key16": "RuSukgG8UDwKFjKigtuoLUNQSSAiN8fiBAmeLUo9oqt9iLwcJSsUsm4DeRgwqTVzGJycfw6fBMnXCPJNQjYj6LW",
  "key17": "3XLn6F9QutRWyZZ3qoiuTBawwQGRNappAGRRd5BxXdVuatHCjoV7S3N91MsKQFy9ZJMPpDWJ4Ti2XNBVF8MqeuZa",
  "key18": "2MbQHVsFerNuWC7LvwMNuLkQ1xaRAGXVbCK9sb378Qw4hzUk4weZztbKDQarNEd8yGJ3u4KAnd729gtUeyZ2YAoX",
  "key19": "3hWow6XUjPiXHjdNipwLyNNt3y3Y4uwFW2tDWypNVuxnsHMWSsuyu2xqcyjt4JQxivgtyjzNjTVnFCQJHeZGF6gr",
  "key20": "2FfsKm4uMrEC5y6kEPtxMUhpnx6qydnnAWnHEn1bezBLx4ca7wc2cz91h6nS1y8F4Db9AWP1pLQ3gqJ8eV1PdLLH",
  "key21": "59Ei1XD3YZVSLPPuBmZ3nuLjQpa3E7FCy7Sj1v68WThzyUA26BFkPS7VvXfyAw4Xet5oMKCQV6zdKBr21ftXVqgt",
  "key22": "59GeBmYKacctKH91RtV794A1xAmwvLTQT8F42DDkdwcdxsbUtNPrya9EDgAw4GJ4XMFb9sZL7pV1jaCnm74W4JqS",
  "key23": "2y6TrNhhZUYuoDGiUy5p8b1WSD6JAoXxb7fhNUv6PgTg2J9tAPM5EsYMjMQbLJ3QtdoLvdmQU5aeJqqGwnPRvjAV",
  "key24": "2pArp6qZ52snwhRFYe9SAh4SWrghXFhKAE73F7fvoC1Lv9T2tk7oDbmypBGZWh2imPvmiZ4aog2aTcmDLAGwGuPo",
  "key25": "4efWfyHgDBcwmg85v4QsNb5t1Kqqv7HXVJnbbUSEu3vkiMpuuDcycUK2U9wNitm9be4FakX7Z4Ma12HTkPTg4eyv",
  "key26": "5StQCKYNZxbkvNF6gcBxPncD88urRMp9eCj1TGbVD9Qk3Z11SCmSYznS7RLMDV1ZREx1dAerqRWx9FP7PXySDa84",
  "key27": "4xovRGnuhdmtjifkn7F39ZmGZKsk9Wrhsrpup2nXuhUNjKSi6LWPAxnTXuySFDiXgQJYkyLZ9X8SxShiRrXACu8n",
  "key28": "3XGqDguyjGYaRXhqM58yUF2qWSV9a18NNHJwpWmWjp8DqVwBU7eyQui4QrHugF73kMJ7kTzE5XHmTAptKkZKr4Cu",
  "key29": "2XyAqKA9X3rkhTC8PtwXL5S8VMKTJ3e721RSmQr2Tn4spcd9XQE9cucxDFH9hBNfJS1QdqmoS9fvwqoyBfzr5r2D",
  "key30": "5saJt4Lp7Rbx9KJXqPcucyKQhA6q11ZiFUtWn6FwCNMLKAudMNY4bvQgiP9dBA4dY6gftqapmmP2YGF3mstHtjdV",
  "key31": "5Q6iJdNzVvfG2GfbRnS1hVKKYSDfyzUtpqPivj2GY8DfMrdSB5Xqvrv13kBq5RiT8fKLtetEBXgpKUU6bphui25T",
  "key32": "3wgrcdiGVVrcKp9e5METtcYn1n55fDSvxB4o58nX7cLR4X4TBSvaLz3teTG67DeHeZDteoPxHLpAv7ACzaf37ByD",
  "key33": "dovgKw9P1S6hQfU6xt7yL1gYQnPZULDJ8ZViQricTyDDAjMyUmmHv3hCCcs8nMd1CgTewSgpMjzudxAmzmAJBAk",
  "key34": "4yQpyg9Z5GJpFed5qTH5SAJErG6egKi2WnaWK5EqsroXC9D1Z7RMo3XP8dzJuMyj9ytqekMsxPmpvJBNGsTFHCZZ",
  "key35": "HMURKdZyGWxx5AWdF13Tc1V6BBpiAxyB4V3tpe549wRL7Konmvxm8mSnVcQfbDaUusp85DyxVQ9Ugm2vhmLBHX7",
  "key36": "uPs6jupP5LWLysQcq8LeSBufgjHEuw5Cy3TWZwpa9K3KUTVRfu3ADcGmDhpZzo9qFas5Nj72FPxQU2cn8F2Jmxk",
  "key37": "2qmmbVJATbo6HFwKeumTzBnV8cXRmYBwUpza8ebfxatvgoKrFP5z1HjkGyyRtZg2y1RaBzRgxDjyVygzRZD6HoA8",
  "key38": "5CUjvvvpQ8Css1Ap2VziGxQ8NioD73FQw4pwM5CsSF9a6YBEUWuQUt62iMHgrfFaWRgNympUURdoJvsoDhNXwDQz",
  "key39": "3hweqFPxqwnfg1DsJoKcTk4n2uov1GWodPi8hhifA21tmLGjZYgDyaJdoMLSTP45XxxmqRADkF3vYegqKfkuTdw",
  "key40": "43QMfsS7ofYkEFftJmXNjArfBfUJtSjQGZkncfQGLgRURW2WpFmucWGSo7m9NZwL6hdnSL28QHT7rLieykPinBUX",
  "key41": "5Wd5dHiuUevNSQ9HGkqNduFqBomYUKs8qw8ES1zaur93ssPMcfMceFMqCyo2Ca41NPo78rCqXWRJCshMPsyKASAd",
  "key42": "3MKEqDTvCk3eeRz3bGJBWhWMuBYQBX2yySCKS9476wpB1SVemxMgDKQhsCi2oYk6tq22Ajwa1QJcHXYRH9ishi7s"
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
