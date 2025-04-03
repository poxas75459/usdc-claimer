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
    "4L1uoDwY1vPkV5zodzgbkUosZxeAFCtS42cy39ZSJtMJwkPfx4kLpEJEeYyNhVBAsougT2FHgMBxooJ528ciZJGR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CCJ9b1znEebsz8eFvmBCAUs1JACMH5HNnR65kmKHnDgCF8nuoj1zwtQ2DeJiPmTSVBXSaV4woi6UL35UAqAHNTH",
  "key1": "4T2RdVaNRXp4jLXrAdf22ScgvAnrxce8r5BvQQ55zVP3uZZyjgufbHjKgHQMeo2XdpViUnxh67w9AXGfwxhTY7mj",
  "key2": "4v8GnRBkmYZS8xYz6QSdrkeGkHfRyqs9QYyoKE1SHvL3DeN1bAfe1emsQkjtLc4fBHNvtc39Wcaw3N9jCe3Y3pQo",
  "key3": "54BoL8gdesQoe9fAYjJ3V1mSupnvL5Sch9hFM2zTsG1SC712quBSfekxuWNPjC9ZuFBxYtpdpK1zPogcqtDF8SL1",
  "key4": "5amc4e7JQgiLdzzsuXTK1bYsD1VGYtwFVSvcvgBW39qnTsfYQv2814evi6koXSBA4CDqne1KWykgG1J6MfJCvrBW",
  "key5": "3yegrzAxyvjcs1nqAeVmGyLt7HSGH57Y7bETwYhPQeagRptRKP8jbsWbRxfJnU64R4oivEJqHtTojVfCbRiHiwHA",
  "key6": "5YNYV2yGqMHJqo2aymisYM6y6x6XBzN3uMP43ZFtWdfYCBe83KArJDY7F7sN6EDByhEz6zLa3RzyPf78zBHpjDqd",
  "key7": "57WpGiKBRfC4UQiXFHaijnzVCAtUGqHbavcAi5w7KgZsS7w5BgVJoLSHPMPQAzAy5B4NoTktfhZFvuGQZUXvnsLG",
  "key8": "RahDsbo7aTSigd7hKLTLrHuxECubjKi5f5hEDQE6uBmN1J19DEahiradko8Dhk5vkcPgjLinds8gasdPscHqpDP",
  "key9": "4P2ccki7dR6zTmAgFah5nRQr6qNjKDdijcQWYs53zsvzHyU3pW6uKyPC9oPsrYYUseG4YMf9LYRCvGCQaGGqBybA",
  "key10": "5JS788mUZVeYRzaSVtmudyAJ6XoTccADL2NG69gycwfTww7FSspFAcEYoe3QYkGMyz12joVSNGyofkpXgwSiRyAy",
  "key11": "3AVBPe1saphvpgao4owgUFUAGuVcQAmQ8LGYRyJWXtxCpAVPecuedj9gwZWjQhFJaZ7wrZE2iTMAHBJ2e9ytstXU",
  "key12": "5Tc4tzfzGDzCVPpJsbAgQNFwiFCc5BhRv3w6nuqPDuR6oXWkH8kc3D3mVKe3yELb2z5tfM4wC7JeBtWhVrP2iJ8h",
  "key13": "4YXoEPBMXL4gJ9GoEMsXh4YdLp2FcgccojRk6P1BG8pEkjqRgtr8gFRQqE4UAXLXVcvntXkVqkw2Qnvukp5UiLu2",
  "key14": "4a8ATSxbJHy7rw6h3rrJWcGcNabSebHZ8P41dAD7BgPyVGFhVdqutpkFXp84ZLMX3m9CMeoCcCZK7ppyB2DcC6YP",
  "key15": "3cMSqHRhzXAwMes8Ti3g5ocgTXvfs77jQsLL9U23WpeCngiVbGpMtju8wykaH9eJ6R7eG7jfNXbCvdvMMdG4pM45",
  "key16": "57ERPq75VdrqtZbVWeeXQgjTR29uLprbRQUFMVsdQ84fFrKrukiFEFxN8rFkvwdL39CRMm4CGRL8KH7WyW7rag8E",
  "key17": "3KSgiaQUTC8hoyJZBVMPZ1z9aNyR52v8rhyVAGqrc9zco7zi8s1HmrByZqXASoVnUUVErrxocEKfpfaH72a8su8t",
  "key18": "ka1RWacUVmd7mMUjbZSyRQTUrEQmQ6Gc4AxHqaT4qYtHPfnBvVBg7heisBEBNb49ndhTHKAsTRwfH3AdDsLrUtu",
  "key19": "Q99d3xqa6oA8ZFdtghCodJG1eFPxoGTRZkijZo3XD17wLk4GBfLyCbvJCqqhqgbrwHxnf9nfaRV2usd3bhjjSbj",
  "key20": "4tf485L33YFmSpkpRKab1TMndokPSrBatVoGcrszu1ee4qmSaPqPiZGgdmzT4frUPRHckfbC12GMQf8qpVMmf2qm",
  "key21": "3UCxBCNsJqFPDsKVUYUwEbk7ehAdw2kGeFvgvUe1E7okQ3Hg3sVGo96NDREynTxeTJSnwJ2LsVsyC9b9RbosFp5i",
  "key22": "5Z5JLySDKFhgrWxpKLhcMLencVfQc5VbUdWUCMF4czNd5fwhMggZSWnWV5XxQac2SoNuDWLof4Gp4dkRjvsrD9eh",
  "key23": "5utHRUvYNNgiveNx2Ds61ETtrV9wA4hMMY5Fzco1SLNXeCzMFHU53FrwWYmHmpZPH5h75kTe2bdKD5YhmcNF3cps",
  "key24": "37v7Ddyet3eze3AGTFdzgRqdax9X5nnqNJvG17h7fC3Hsup1oVgFTrhrds8u6JrddAfMLm2Sk4dyUTKngCmFEcan",
  "key25": "67coDHP7hLiRukj5hn3f15EStNYcJc2nYKKaWrCShP2hYrBaaveDnHH4WNf38u5BkrMJ59cfrYSsvHiVN7ektpUx",
  "key26": "4g4ykypwTW6pDDQV4c8VY6cDh2Rcb9pDw8UT3nRAocJNupwHda5pHuvZ3uvKSSLfCycURi52N8o28mowKdXgG4sM",
  "key27": "44AEciB9gUpDKSYc8SQfepKXsix8TqD3FZp2so93pzwnew8nyma6mgDyj5EsuwibYxrG6kwH3q8PhWApU63KJGBa",
  "key28": "4HQFe63r6rppAZa2ZU7bW6Rc2ejucB1tQqKPCjfnr4oTinLyLm7NKmTWvTUVCBGqjxRNWy6iHJffyX8xVSiZV4FN",
  "key29": "9rGnabksK5dJuCfxvbvDcKmFHvWrFrDet19XGpvg41LqBY3q7zpV4RGmoLYJYD17iDTRnCH9nMdgVa6EeMUUAXE",
  "key30": "4L89czQY282fg2DbmQzt74xu68yhKSv6Mv64r6jqzehrsA4RAgmKV616u2NjsC2Ye4a7AXMnVayBrt8MEeZG4gm2",
  "key31": "aipRN4qLiSjMVnjFUTAmBEwdQGG9T9GksZrfjXppF86KghMdceWW3L4excBJanpxv1YuSV51JJN8oca1bTfNQNp",
  "key32": "45MFnwmUCf5UsWkyofaJYtRtjxjyWwxZh1bkx2JVYn6LTEfE7YG75SYKfwNS117YYmiLX1i5jcDBYVfHfgQs5m97",
  "key33": "5vvf41MUA7pfENk4CxEByx4uh43cyppfFt2G1cHokopMUQjCYm8ep9915igvuo2nzfX1wqQpMcSCwnd2kEnWP2wz",
  "key34": "3y5PycwpgdyugZcj35aVCgvMGw237EPefQgdSLEvKMTyvoaiwiiNpjjhi8E5XyWwAD2aK5Q1zWFdoCvJ5JESPERU",
  "key35": "gmeFzuMn7f7hW2bRfLHdzRWmJpLGPrcXuGNQzThsgCPENACtzx1YgxPv7oNto6b9DvN1EJjy8dSpdztRBmtP6gP",
  "key36": "gUBZAy8X2QkTZH2UbhSPwXHW2c6dN3xo26yAW1dibAUJMpxVq2kT3wSezrGCBXqC9QH6QdDKPbMpKo2u7GEGwx4",
  "key37": "3GEPi4ej9YEJLk1q4jTn8UVSLTytU77LHCQo1n2tZ17ykzBeScmTAavNDzzpCJqPXEKBKhpHh8jNyyoLsqvU9LnM",
  "key38": "4y6GMYzsJBhCU5De76hdL9wQdQfNPA39WDUXDqA5Frwe2UpxnfEmjZzhhncw7NPt7DtA9Gy5swKRzUKZeQwMTTyH",
  "key39": "2H72rjQbm6JmL4wfKimLkydHA8GMCxi7YtrWNkpdViTdqLSCPwCC8BoAKqkaorXoeTz7uBeCJxgRMKN8gYAgCmey",
  "key40": "3md3VxY2691irQD5krteeL9TfJYNa1aXAoPrDnwWu1PScXSURxyykTBVU9QuXfHkRZzZ4nFyXypEgKxgWj24BUVU",
  "key41": "3PksGgAZn4CVTzDNwY4ZdJ3Netv4TCvnmcJZ1QnfRL7s6AiE4ftqy6HiwAUGL2SPX3HhFpkhBZnmEAmg71vhY2cb"
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
