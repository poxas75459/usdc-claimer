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
    "VE8j3LMENDmfqm5Y6LjufubJK1Rt39UBqDJK9Xpmt4RWDEMrFtZ9ZDtFFeHVN3XGo6gXkMXT372bRwcRYLE3Sij"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jktFDgmNjz28R8B5BvCWWGmwmh6L7utWpKdUMkunmGXqUw8JYxG9A8HANuNHwa8hY9UxBBoKJDj7Pjz32Lnmb7q",
  "key1": "2t6ZvgXEF3F3cmv4Dw2Srb1SnNgpgxU1EUMzHcM8mnkdhRgdtaV5MD7HGHGD9aarGLsLuLXouHVv2dXDPN9yuRLe",
  "key2": "2iJDomffQPgVbk2oRDF7czPbtRFjo3H1vJxNCqfc9iN1cFkGNDpGsLv4SLmgAQTH8vZX6F7hjRZg5ueTs45bUEK1",
  "key3": "5RWxA8vRm1FeBPNkTzdSz5i7CSSRzRDZ8hEo28YvQMPfyBimVinFEpi7cg5G7ieJxUkTssMh9qyc4B4WdRK9zHef",
  "key4": "5QvE6HNKHn2gKvP5mmVbkZahbzZpSdgwYVE7e7F39wRxhezEpuQhk1A7yLpfik7QRrmptD7D8sQDV8zs2dDt32jB",
  "key5": "2Y8WT5PrfnaBSMutZgxiGSy2txqiyJgxr67Ha6SVCsY8ysApbv7C71SvDgW9UwbKKWKqDjKPaQmEJPVRKT29rQtr",
  "key6": "2g97NdFtgF7ZfUammVuPRJXFzpJMNW66pXX5ETWyFLAbAV1YDE4Asya1dZVUt7WFeqd1U7wcbuaLV5bHtNwvBD25",
  "key7": "5ppv71T9PhBsU89hzPG6SETNf7eMbD4XYjbrhfrMo5Dh3cPcBdsxp66V6sD2nJyTv4tt3VjSGXLwagxbSoezY9iG",
  "key8": "3bSTZZikUQqKNju7JWsCiCZVac3gwEgDsW7EViE9kGyFxi7NDkuDVSeAYUa17FxQznyWLFmUf2KPG28aA4tgMMqa",
  "key9": "4hWgZzLxXrThd8Eqy6W3977Zx7iTsg5yD6SnMoWGEs5CWLP7Go5HNSXqs1RfzYSJi1th6NvKeRnxvDNmJ8SnGmfc",
  "key10": "3yEkFuakcqmV29brTwiWabTgjofQN5hykcpjTpf7md9UVdNepYtF7NpTTAs3Fzx4ht8RkgkWbgnaiQjfFfUZ1cYg",
  "key11": "2hJxYdY7rx8MAop4KLG3mrpVNdGCfus1HfJhCCBsK5rB4Pj8AXxpnHosf3HC74NYtdeVeLsEoXzV7jPrkHxPqafu",
  "key12": "4xzEuqxBtsdvhev7mKQnzXn97cXdW6T1grLZunSjUJU3itv4DQXB1uVkwBVNmcD5uxyi4DX1hbKThRGz9wVZpebm",
  "key13": "2rowPPLoThmHeGMGN7XJubjmjBMz8xVrRsNwNfb5uu4MPGe41sHbQd5VjP7L2ybJqnn4ddLPCw9nwMLjabmpLNzG",
  "key14": "2jMZpnnXiLJoseo6YmaC6N9JcnWs9y6A9xJDZJL9odxMrZxuFcmjn86kQaED1KTkNcSnCbMoY9z9dsyexrSw1VR",
  "key15": "4JgbWKBtZ5YJx7cJXnWEDXbvEr3R6eE9Z4UcBKFq2gNy8Ya8KRH6eo93sUwG7byxry5jv8DjpNSbmU3qJHeUygkB",
  "key16": "5m8hvCHy4de4hs6G2ttzm1ZZmxp4nKq76EUzYwRkveda3qDKARkRZtkiF2cLTh99U4BbW7xCD8hM4VD2juPoVZBV",
  "key17": "47n4jdKqyphULSb2CcPUBPJLSqHu7tXBoUj9oywKyRrUCKivgN5Tjf2dD4LbHqnLFnYyYHpAAR6BzTdCXsHy3NFB",
  "key18": "2ugCkFM2MhVqFFkkX3Qnd42DH7JXSmzpGCt6wshrm3AqEKhURvS66SmuNYfsHKBCyQQmviJ8DzVUk92cThbjvD4H",
  "key19": "2HH8U8jefQaT1qTD7Pnp6WfqjrP76jCA8GAzY1AcMyFUC2eG1r8voFLVfri4yMASwpZj6uiZHdn7WPrbYt5jmUjf",
  "key20": "25wJQDZqJFehgj4kwy62hfeDRt8JKdBWstQi2s7PJohFeB18atjRfQqWTReMbwmUickMPjBUDxoQ3PnHHj7CwgUi",
  "key21": "4i2NWBmkmojsK1wHQMDQwawuGM86quTWnA1SzMW7CWyFst7T9RHqPh2WWBro1NrAmhFgFchLWaRLLuzXnfHkxgHj",
  "key22": "5rao5bqb6x2Jn6mKC72P9h41MiDCcGJ9VCLPz6y8VvUEL78W9qmxUboTnF4Q4bekrkPZkVLN2QaGHmfcLSiSMRD3",
  "key23": "4ZaBAFPdGCMUKbiimazEcuKhL59h8PDjseh6NMY6XeUNt3AxhrZDawtcLdrQ1MDjaeHgRxi6NQ9rEHeYZ6A2KzZb",
  "key24": "3XYo6AzvJGmeVMwYfqLsURKAvNzxe6LNeoVNKLRL3ep9x3acaUR82JpMaHNCtjA3NUSZFZjY91qS5sPA3ojthUDS",
  "key25": "66xzGS2bt9t1VfmeiPvdu3HxCCHaK9dL1wuxpre9HzanXiPLu9oVjWcyXcohGh1gwX4JL3qDpDCB7bK6EMHfWJqo",
  "key26": "51FwrJAJRcXqqWczS4Cq9g7AtJS9i7FUShT3R32ZPhGXLeKxM45iQ2Sv5W5ht9BVrRZqtjFcrPV869ZDuowwvnnp",
  "key27": "3bVGpCcCny5VyH6baRdbdpJ5t5kBJztzGD3C2yP15LYeP7ymUtto6qRzHhWawbj56tJJ5akR8zQvAVCSry2Hujxb",
  "key28": "5h3qMpxM7tr9naPpT2vePJjSYS3v6ZYQthDK7w48vgyReNVimzNDrpyhn5czwiPog3uBMJsrpRHk5tDu3fHaPxKh",
  "key29": "MKCJhMaGUpvPRnj9S8QGbu5K9GpE1v5b1maRAyQZ3BNG6nhT5mi2kSbqhBEgkzKkuNHwzkFW4B3nhoyTBVsjG6m",
  "key30": "2MJRLvVib3QWoPFxKwmjJceMzodsDhSZWsXvPnGCLPrt3ZHTYbhvnfsu9GzkAd37H5RyeMofSrN9cg1o9fWkqMxF",
  "key31": "36Di1t7VsCVzygtKy2nLTiRka1M7DZp2oQLBdxiSMuEuLc9oaGqcziw3d31Yzjrc9sziVzxycAx5cQ1kia6vh6u3",
  "key32": "4MEEF2PagrM5gvt6E518SmwqyvYvo8Q8SUxUUJntn2dA9fWYYdcaFifkcuHfqCMuXWwQuqquMYrU39tbNpXMTMr9",
  "key33": "57Lzgxyy6Hd9aYZkd5fGho7YFruYScDHP9pyD8zquiVP7fG4mWzbmKxYXc3VB7qD6fda7PMaBzdE5UTb2FucqmQE",
  "key34": "56JZDkw4AD1snbBFxWP885gpk25GoDWv5zQfJnbDukGDQSNVZoMfboH3NUYcu9b2PdWXP4r7Dt6kyDdmPBwR5QZS",
  "key35": "bgkdtaTTcVYU6TG5JLK8pPbZgjoMpC8YdwGgQFncgu6R5nH6ATGzVugkmpqyEc1pwYzp1a9vXM58acTfCQSU8AL",
  "key36": "4RfwrsJgnH6BPJVhtZtEJoAsUmgxPJt8u5WgpD9RqXxmpr46BWV6mfRvArW7wJ6i62jbioqE4Tjep4bHh8waWo5g"
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
