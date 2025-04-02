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
    "4n9c6udNAAWCLUXVwvM1VBKkoZpozbQdhWhd1ACWGzigEUpG3coJ6J78oehrfkt2NRVtnoDTBz5jD3UiE6cFedds"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pQYLQ2iZDbjDvhzF9cFbLN3BqYCfmPgKMLMmAVfvXeuKSdDipkzQRm5RAdZHjiynnPk28nQcmenUTVVq5rhSH66",
  "key1": "28yQ1amJJ1Eg1ZABwAkfbATgwysS8Khcn5XeZdJz1shGqFVwMidqgU4FXNc1HMmmw7973aiQE7yet96QjonkZfsJ",
  "key2": "eVRnL12N5zUs9wHUftEhKi5saZgj5bp1Rjpgg64MAPNNpT18m4C6Xf7jRXJr9Mi4Y3ymeSqxd2tExfg5FrkEAwy",
  "key3": "647Px5jRBaV234GWHFY8wU5ofub5GW5jFWxuN4x8TkmFVD1Tr7Q7mzEs3LCQFZNjJ9xcK8YbJHu9cc5FW6cgW1dD",
  "key4": "4dgsApDiLmPBwd1CTnGpvSt8jssz5KjA8NAp5kuk8hsEDaQuoSM13uLEqXoAbLb2yA1UuVGLeqr5V5JPqWLoMChL",
  "key5": "3NuN39vfSJ6untXk617QFaJnDxzaHu5Es3xsnd2pqZY7nD1po6qFGWGWVQFmDu7A1Q5GTEY4WMnZU8G2tQyqhkUk",
  "key6": "4avtw1PSB2tPNQKYnGK1Xct5XHBVTiAhvbXC42dazTwFhQUmgL1yhU4SuEqchSVmsNgCTMBcddd1wGyMBCNBod4a",
  "key7": "33gw5a9dwmfsKcwDQjaLaMmNJcEsFgATrfyoD9HFr8hjtdBgiMaYEGEG4847qE87vKFx4H68SmEMRZMAVZjFD1yo",
  "key8": "57tVfU2PK6CogFNAPPwp8DoScxGpW88qTGVdnwtM7oFWgK4BM9uhEAkcZPAUwqATXh8TMduF7bbqLxhCdFmTApHc",
  "key9": "22pb3n2wHB8w8HXwXSdw5Loh68jSc5KdRM4Xwe4g6Ju4iP1EsgdKqFZHtj5Ds6z1Rdd76CttWgticNjHFW55ji3F",
  "key10": "tQx4TM4gYRgZd28sN33RmjQU1XcPKKERNwQgutK3rhbtM9eo1g6Ys11vbziwTxzFKAZQmdoaEeN63gu4VXn3h8r",
  "key11": "2t3533nRXW6Y2kZRhQRpSeMzLokdJL1AxS8EtBLsBGx9UwHhpQmsw16PzfZcNtGw1pyysoR5N6Hh69t78GPC1a1x",
  "key12": "3D7YrcNaSTN9PHvzPjhBENmR5Jw9nesW4FUJm8nNnQQ7eiTBVgDVxAfKSc5cWhaP1KqSaPhKjh8S6JDDSPn4UCam",
  "key13": "3njWufD7yYGByVrdrXqy675kE16gNGpEkQGC4gGeL2wT9bnJczHn4uyds41XP2GhxLiojz4xxFLtvWTAja3BWuLR",
  "key14": "SvbGuepUw52MGYdXDbvjbCYJzo6WcEP7MBGqEwn3rm5rSmUg6z6RTxmGNN9osAjEgZurhmCjgeB2YwSqoT23hHc",
  "key15": "3uzbCo1xtz4GGD2fxYGwB268VZN684qymbuJyQzdcaxArUyrpzbtsANxgfVdqjqxDaYKt74ytDEUJ31CkeWEDpEX",
  "key16": "4YQBrVxCzixLjVBUDPxfKXZUa5AZgTaHZsmqecbbP3CdyBF7jCcJfcF7mXfTC6EvdCYkPeGX9BSRiqUHUQWsZH12",
  "key17": "58bBqEfo8XQK71Qrug2w7c9re7WVwpMc7TkhbPX2v5MwwrZu986v5Mg85sNtaDnkxQTg8Bdp3nV9KUzEUULJ22Sw",
  "key18": "4hHJFpZyPBTkPRfP4seNi9b98y4qNmVTCTgwCyWAc4PtYuutTUH2JhJM9VJXvJDreaRUhjiuWoEoGT1DCcFgzw1j",
  "key19": "4ZTFgdwVDuVKwnq5QPtSVWNob94tVNJJezZTnMBhSNS8nTbJnsXetFjUvHyqsk5EQdrCMrcx4FexDVfkyuu7ZbmP",
  "key20": "4cT6uKgQ6cxz9tW3sooJmsLB32v2cRt8zqgp9umXCsLMt8F1HcNEUXbwi5rysWRbpQS7WNVkgfHZxVKQvp4Rw3qP",
  "key21": "4Npyf23mCVN7bhnjHjWkwTpstaczkG2Ka9Czjjpm9zieHTj41xchQ5ozyi4md1H9RCasUe4Max8rbxV5UqoiUWy3",
  "key22": "VzbYvqdYY9o61LYjiRwJAe3cXgP3ndpp8qF7CLeMJRtEDZ2CUQydKDp4oqnnJ3nCLwM5yp8YJj3NH9tsEeb8g3A",
  "key23": "23HJ29r9kvLMfKJ177dxooFsFVjuHnMaCNfkCwCFWSpGSbpXCq9PzkqQgcfUJ6gAbxTYgETfseWGuwybyTKir1KZ",
  "key24": "4AuS3Uw29zcR4WBcJ1hHQEv2w5EmyLFkvoxzaBBxhTxLmzFywkFs8tBpcJSqPx8yQZHrgyYsaGwVi5Dr4HKEo3CN",
  "key25": "3Ntf2n68gunhRJvhWfBHK6YjNc1D3g7v374MasJS1fS4NoctXGqJHvuQZi6MbA9yx4nSsAe5d3QNWUHtPZf9HaPC",
  "key26": "45FC4NQZx5a8z3ub91LCsNEZA4qor59VtkRtcH5JeShcpS68PKbytnAjqz317dq7j6wioAnENULaTtrutsnDxm8a",
  "key27": "5dTjSNKtm14Z58UG67cU7Y5GGdS9JAfS2MPtu2biJHWqkDCTyh8Pv5BwFLu5dPhBrKGxBnRMD2AurojLJHwLKeGK",
  "key28": "51ft4XvTLoiUJqVbCRvLuBChAJCMh7w8486erU5N85JGAwehXJhzWbGMCxPDDfTSj6hY3pBpyN8vNjkBYWVjKqsq",
  "key29": "284eWMakLsvm4vYjBGm9defoxztKUXbUMH4m1MrH94akEhoez3Hz39S4d6KUt8XvFBSH9HTM136FQcpq7prdFczk",
  "key30": "3xPFWACZZB7Vg7KuFmZGqeGSiBGpELL4TRqgApVngVqyYuq7VLixXSQwjA9Y1eVnMJ6ZTub6cgocwmjfkRqp3XdF",
  "key31": "3gJN35eXJLt46D4JybKtdfwMrZ7PokHxtUdWyW3qcZMQdbNr7cwfWKd9vJKxqbVbCfmYT5Jq28bTHPyBQBdchMxv",
  "key32": "4Ew3Pi6sksL7RUXP3FVXoJ5kFjiJXty1rRPmeNTmFRQJGbWHMK2p3n44TZoU1FuMeLZc6eZZPUWtSe3UaFKP73jg",
  "key33": "hJmrV9LnDUPi9Af7MoVJAqdXYyWykqNd7d7rQBzkF2LGdiPPzHPB7M6HWxCRErKFgr7pjXAQ3w6FK238R2BxMtU",
  "key34": "5QJNov94e1r7i14N4ufVVfHC5jBc8rvcJRRcs9ZzYyKTukiMc2YHVgZMdDAs5Kvda5tm8fv6fJk23Z6iaF7oVsdZ",
  "key35": "2LYBGKEZW6ifybLpWrNnJ43xZPCjMSsoYEKHhTq7UXdCZWf7Z8TMhABy8VqSjeyJ5CBAmiMQBLbSyKD5a4g3NozZ",
  "key36": "29fnAst8WczqNTDceKwbd774ow2exVXTYjhZm4nBSrh2DuXrkRKDErcZ2ZNkrtvuPX4rjY5Y66pVWUDnafiTzcaC",
  "key37": "31KXTphQVEZta6hRTj1GBWXxmmKMiBTDffkPiDUrAyCWNeLJ58ffTuSxCMGa1avRH1A2JuBs6pP5nMivsKEDMnN1",
  "key38": "4vGskVXz2hTFCWFT67tQ5fpnFnbHSChAQ5qXhXTpFNzwa5ijRDyPr9fKxHuGkMeiksnDG76fZpy1SecfCoWant7U",
  "key39": "3XqgjLif2ZEkNPiLNSdfVikEg9c2wnxXJUwekf2zHzKD31TxQbqFytLSZnMu72LrriTbwYv2Jvd9zmUJRJ3XHvnL",
  "key40": "3ar1j46JSW4aTYyEDN2oej6hfRCdyrTRpWF42hdwiXAxny6KithR2DYE3NkxNqZBBXj2HXA3uAfCkhD3f9L1Kbpj",
  "key41": "3QfFzxithSJBYizsaEMLRsFmajtSvLNawtsR5ritbtjYZtiMqPZ8BFbTYtQwviWeASms6UpkRoAydFkB68wwjJt4",
  "key42": "whrkgV6KpCDpe1vaRb14GzMZ5sp8YRoDYDZjaXegzun8hUNcxtsHzNHmGLAAeH2Rs7nQbQQe9hvowAmtmu6fbQR",
  "key43": "48WCNp6exa7oZpw33xGTW6oos1mp7oqkcsqmBg2X8U3bjqq2fjJih8aKRX5qHSvQMT6gNSPwHSWk8ZTqNtGwL5p",
  "key44": "jAmgsx67y5D6mZz9jn6bDGbbUZoSRxjnfV6PyByoj6uxikfhf64yVxejBZmVisQVcnK77sAoPhod8zc6FDqE14C",
  "key45": "58kNtxL4ayhxZK5pAg8ZwZrUKkxAy2vQGUTfLZx76QGxk1ZdXh1v4gBB9ZBPu2EWjmssDcrwdxBfrYoZPXEnCzrw",
  "key46": "2ijKfzQWqJwLokoZs5RjUPEWaSHdEWdUg2mRCr9CDRQDQTcjUYAq6EjeqqRS56LNcPdKkMiRzzQ7z6hEaBD3uUEC",
  "key47": "3GdZizArNWArTQtknhLb3wxSkqrCmtrdK5MKEhH9bFnxJ8BAsiy8dnQYnYRspuoi6qtPLQHq53p6AVTPQNN52ZAD",
  "key48": "dw3J85kx3zbvEpbvW9mDPcxsoYiz34HxxsUFhZ9LEKJF62h3zZsLbnMgmSDJ3pCyfZ5n2wtNhsYWkEByjRpPF8E"
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
