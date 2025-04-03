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
    "5CkGah7roZ3gkbGoUjC3diG4wR3XPfQDAGEAhevLqFGVLdD6CfR3C7kshWqoXVUgdYMUWHZDV3yWPw7xy9Jv42LQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44LPgSMBWthmeeF21fx4FuMutcTDKJZapz6xc6Cxab9eHAeUMVNYgFBrFbtAEKCCqkj26w3Z9XkLj9VbS4ZQoyNW",
  "key1": "4Pk7UWBuZr6t9GADqCG8P86wjBKJXP6p2YhUk5EmoEJrFLmJpcPYanG8o35JGkkuuqi54dnQqnnh4qv5QMS9zbwB",
  "key2": "5WaAq3MgSboaCMe1u15mNUmhSuUJAmR1Ry5f7Arkn9phNm1Qgk6TH4fsCmBdMyqabUTr9sEN3dTiDTBzdUSncunk",
  "key3": "2k5GfWWZNHbr3DdvXk5YqdmuEeFQSW1GY8tcLKAYexcUXynBQxqio9dDfkqix79Uj67tzsWwaUvssbWJn5WXQyiG",
  "key4": "JEWBrgHR2Q1pubXRLQSCoiMaN15SFf3hyNv7CzzU4758L2DgquYZ34zRW1Kx6fZCS9HiZx75QDxu9EnbkNdzujc",
  "key5": "SitQAYkU3H5ERqU8nBekqysA2ohqWP6WDxCR22pQ1Cy6KTRCGpK2dgqcfb3xNhPijbvTUhE48eCzML2jNaofByG",
  "key6": "3585iEf9cR3WdDjuGPyEiy9vyLhEemHb3LPneyWGZUjfofacePDGkEGYfNznZF9Xwn8q218bdZr4kvZKNd6GqD76",
  "key7": "3wqhKZFXGtka57xUMbBVQwCantXoUJhGYBDaormbMsKjMqeg1ksxRTao9jKzWG4zezgxy4tiqRZQnKGDtoEevKph",
  "key8": "WwuViaUxEGwxUaVnCV4GVenGuBV5UT7sc5BTDhdkd2uygJvuSgZzTkAmFDfBtrxDtZ8ufTpDGLYQPNoSxapjx7d",
  "key9": "4ckGHSYwvAVwDR83mLx3R3YJu1ZBPuZayiHLKN1DT2FgQiiSscZzoMnJn8DGfC1bhC7kzAQfueTxsckAnr3mwseD",
  "key10": "4gjbbG263HEcLJTTpQmRyKb142nLDuBi6jXejhLWNkbmCfbNSgx21omPJzxAv1E4mHaTZjkfNdNU877mSsKvJsdj",
  "key11": "4Kh2qWf2LzD4m5fKfTcopaswwx4FwEnrP3MPBXyYysw4nVGtzf2EopWcAtGMXunc8pstY3tWy7ofNWkb4fDDgWZV",
  "key12": "3Kn1SLzg6FeHAdQ9CpinbaxSZyybvxt2WCsWTe5TXJG9e47PdY2kc4Raj4xQJLocqxywsgvysbyBGHP1WcRyZd8a",
  "key13": "5W2oGsPuiSV1CW7MbR19QarDPLatsxKwyhvcMXfS1XqsQ573BfruFRpLfiPhdYJBB4PT6NPFzw5MdgDnjS5snGNS",
  "key14": "5o5WagArfQ9Hjveyn3qTJeSaQSF9EFYmusEpY6kiCTHQfjsbXx7wwoRsezWahcLVbQrPj94nPS9HZ8o1fJRyeiTA",
  "key15": "5PHyc3bEcBb7YxWGoZMKwzJ95iu5cN2698yF4PKrrFHJbnkqFGkym811dMHQCzxVJekSEAHiBypcpy3dwBh2jtZD",
  "key16": "52P8qX432EkkJNa8SRac859Wo7f9CURMSBh5bYsFf2TZFUeQgmRYJdNZgL8JKDijkWjfnstETghbbAwgViyScf3v",
  "key17": "9B8Fqd51PjeGh5C22VrTRHaBtVbPTL77GKHSUwJbGrGxpyxGEsZQo8AJ2eH185V6pGkNj1h2KCtR2V7KHkMx9fR",
  "key18": "4dWPmMjCrxinSiyLiah3A31iwQdosuEdvtaRgj288qqCiMWgvJBJLRfnTPMAokd1wSEnagNRjCSAoyQPmoJaxfAr",
  "key19": "2PMj9vmMqNxzWScLUo2fLR2vNziB4q6niAuDy3brdq1WYTpxs6N1HMun2fnJmh6aNvdiH6k12QtePgpnYVQ6f2ef",
  "key20": "kt2fguRRbFXiwmgsTLxRvB22pPQpqA7bVxZnKZxMNBfsypNFpwGtT5chUDjqXjGZ22NKzYLXnjjWfknPCfuAMj6",
  "key21": "3V8wMbNtEXnHKvigB2ai8P646NnXtQdij8dWp98kgXwU4DHru478KcMVU1QAYkYFUUkoRy9jbvtLtyokmsSHtWC7",
  "key22": "2Wbq376smC8Zdc4EfCYSg3PQ48MHpRtjPtnhy5uHT59pVZrJRPdNUndfvMjp3UUobFrq2M1tJdHkfy7rBRMJoeKK",
  "key23": "28PjrYnXpAV6ggKw6sjL8DsgD85AxRossM4c7mRNt2C6Nhtagb84NoC8ezjCwZqe7shciczYS5ASwMYfeM8NUYNb",
  "key24": "3wmhk8uo98AuLSUbBFSLstCsMNP2jxeh4DaK5AuPytubVe4fWJDZdEVFE75jcADWdM8BYZ3Jz1b2iYnMumRV2H9X",
  "key25": "3zsaU22QtHsyQUXfBDNNP9zRvHSeKTsXuUi55aqm164nbc7E5NjFj8SZ6VejaomgdgYeR5HNSzLeBz261YBMcbi7",
  "key26": "gJbQ4kuHDDxSa5dfJSEdv4kRuguJzVcjTHFSQasdz1QcD3hsZ9EpYU8ZpecedPKVWZ3SWHCDxRxJFAdUybw6mET",
  "key27": "3hgJy8ENVXQFVDFPzmMVFMR4DgdbTEAitXDt5DoMyApnW9YBefLnSiuB3EEqXyXhEWwg29JYSt8LFf8ausiGXJUy",
  "key28": "4shd2TV6zzyMmh3uVpVas9ZxguaM1n5JVWs65B8SxqZ6UCHnK7Yh27DZHZVPoMA89k3HHys6kzhGiYTwJpzzMagQ",
  "key29": "5QmuMeHw1VwqwMPfL5umXecTFmKnZcJX5wjE8jw9BDG7cj4NooxKDA8Wj1HXoCTTsqBdsiZs9qfkSBYMa7S6QGsj",
  "key30": "2yTkWQxihY5UDsK4XaUmHRkSZGZ1ax1vME58jawqBmSDPMcH5S1a4DiGgF3qgvsgcQiqvK6PrTRHapZd9ygGwuDQ",
  "key31": "3yD7sNwn7krDsSqALZ7K78W9cxCJAaHUoHNmNSJRxhcrWQ542bpxPmbi8HdntWtnqL79HFi6Ky2QPmBz27SRMkm6",
  "key32": "47kmLkfrkVgfBsfJeUucxP9yMJqkwKjaUxJp9LZLYiBRBkqGyzsLLmz2vg38ZWfV4MKHbvH8nUx35UV6cUkYivj4",
  "key33": "2QoXcUpWPQ9wHapJhSWRt9RpzMqRfKgzMHBywrhu1Tak8Fw5ZEQwagYNh63LwjMauLfLMX4kpfo5DhBBSKvvAUXt",
  "key34": "3Aa3MD84Bsoz2aKzXMQLYUW2w3rX96wiNj1AW1JyM2P6FqnhGvp9XrxHFUGVB2oTEpJcGeWbHZfYhk2gYeEmN1jg",
  "key35": "624uS8XZjaq5o9qnQUMNuM1RuLWhQqtuvJWCmvLUSB1c3rj7UU7amPS2bDpcX6W568dwf4s5dp6fGjd9AV8vPvaT",
  "key36": "xcdtRqtC2Vjh6UqtvHwzbfHMPEJog2P5wM4NHFqJCEnPP1YEE39wTYp6EmBBeiPcj234se6WMdmWrF8nvGEui9e",
  "key37": "5XzY8WYiucjDDGzJZ9BKPMcvGLPdo9D3MnDuNPg3fdMLAKymbmCjo8m7xJHo1tCWWV1XhkwWUhBzkRTurr91S4HQ",
  "key38": "2QFj2kgEuVCP1scndUPxjFsdninpueYsGY7HTWwpC9o9xinytfbBsaST1jmUvoCy1EKFD1PpTnhQ4MhXDvAx2UJW",
  "key39": "2LsqERBam3FsfTmu6882mvuBDvcpbf1udxRr7dU6odZQgvmxdJBWmCaM9RrsAVudMbmFXSzAb2xQkehR2aTe9DnG",
  "key40": "2t9vRTcuyxDJexZg66jh53Kf1upaWg7aRkEYc8kUvhiLhcL9rtvxmCSiCCwe9xyE1RhanJ4sfZAYzLAUm3duBunC"
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
