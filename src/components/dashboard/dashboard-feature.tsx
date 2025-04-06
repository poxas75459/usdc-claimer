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
    "2k55NQLGFY3x9CMccCAF8x5kN8frngQLQJo97JBeRE5CvfpSCJPniobCUJzbXmZHzrSAbfY1TnUAH3K8xFBTohkm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iakUod5CwXEgoPyFcgXUvweYJSDeZYXr3rqXKCiqRQqonj5aonR49BZNuNnK8kJbuwJJBhDTQiNDsbQ7R7aZUAZ",
  "key1": "5LRkdjn6Z2ZcRepAVmN7aswh5srEq76xKcwWCAkwJnA9KiS1kbKY23Spzsd4f5KDbTdZyShCYWeJ4TY3w6DiZWDn",
  "key2": "3vb2fcTxMR8ijW9EqV2obubESwNBaRuMTpLTKg9WEey5ESYaFu7L11w34moBvfrNKzLXdzCg1dx9r5Bpb8Txaynd",
  "key3": "3TtrPdcedQM8dvncKTUtxbLBBpYTmJnMXVw6sEpJrY9mmDj2PP1WwUdWfm4VhrNH5u83pXv1yQ4TDnsimqws4b4d",
  "key4": "5esSj9jzFx3Ej5wVbT2pMHFwuAiT4kv3FRkn7eaPrYVsphz2PUCE1qioNbjZzz4fxxKbwxcQNnRTSSTkGtxsXwwE",
  "key5": "2kb75uwotGigip9dwDRfwvREANeX42vat6ug5RzAeTVHogiLFpdHrSxpKJd9UHiWMTYf1dQvvKS6BQtRCDHwKnqB",
  "key6": "5zRuKQoYXSqGy4zp9VjcMDqXmvvUQuUZjj1nypC1y8aj2MeMTPEZhU7xgQTuD1TqPgH6BNqtZ1LAxmjLxPs8UAtE",
  "key7": "67g7NFxpFXDA42bVCVkBqDd7NcntYvuExNBC7WP3Vk7KPvfyPRGHBHrrHqeRBDrLFpP3cjvawwkrLmJb2HgYpY2c",
  "key8": "gcXBECushn5uwbMJGfPZcMeWuLk9QNzxx3DnwTdMGmAsrPffSwj6tj75hGdfCUMh1XaEaJPBo6RCSiNVyB6eGdj",
  "key9": "27E66sZgBS67ttovcFrHRju6jZ2nL4VqPedVhMTEv5dqrqgmVPsMYLWNBZ26S4FiEZkdhmhsbYLtP6bTvw8eQmHE",
  "key10": "tjEVjD8aFKP7b2edzu91hMm5ZLg6GcWoYiLpU545RLzUBkYJ4CqKFZSn5M5XGZwrWMVWRcbo4g46gC4EmE1KU57",
  "key11": "27tUUniuBATrn9rKTEPwEbutTySi2S6JTpjkmxEqVnbL1xu1PjfLmUvaKM6eqYPbAgegnHgvnZKTLpsgB2Qzj7RS",
  "key12": "4wyDSJ8qAkrPt8KqxkEQfhBjnc4U6gzzCaAGCDAH1h5UhbwwYwAEYWvf45FfFz2L9UvfoGhxSQ7FKQ2fJfJJLHm5",
  "key13": "4PNLvSV7NSEQ99BdPt32CQ3eswS9uiWjRXuzF61gjW8ZNE4BSxamwZnLU6a6H8gUaedMnsXvBnp6bA2sd51eG2M7",
  "key14": "4B1pytDNBn4QadaEPEzfkLW18mNZLUECxQybYSbLWdzyfeoGJbCntk93CBxeaPCRALX2BxwPuLARUuAZAZDeQWvr",
  "key15": "Cq9LdpswQnbQGZmsAA5LVvkWEHYvR9ehLWsexMM6nh1fTd1qVoL61mXxmDXqnPzWMySbtm4dbjt38gCqCQQu73X",
  "key16": "273aYnDo1j6FvhCaZ3DCRgSnAUFMr5Jahc4xaXH18EAhNXsVt278Lz2BVxBxjcocgy4RhWWoRzcAh824pVbCM3to",
  "key17": "4P3M1f2QURTXpxBLtQtEgngbQ8iLTk9nQVm7qkw9qUtLihxQPzkMaZop6BGEbg5MjfVnbZ3E1v71EHzcPbjwYQ6F",
  "key18": "5sHEHbTcWpLAiyXNvcy8XwBXpA8RysxzV7nzdAx93FMg9pwYudzLvSthmhwRtFwW7ZMeh99DHRXFLxt6x8g9KKBv",
  "key19": "2337hYkZkdoSp7teMRwWqEr5adxt9u6ufUe8xmw6RRvCbMaNtYYmdUfqRdqis1LrJRYnJJBUh8v4zV44RDdNsnGD",
  "key20": "35wAYGkEXRjiayS21eADQYFv4rBmMSi5u1K144FW1WcHujTCZW6zSsCwMEsabCcbiXJU2ZEiKer38jGWpxiGSS67",
  "key21": "5p2EYJW11yybef7ULSGta7u6F9W6YA2NRW3wB9gKDqctwew4Za41vnU3a8aRAcbKPtFeQoRCJYf7GnxvM2qRSnnz",
  "key22": "65xZkW6y8UBRYWGvUEYD5FwTrxJk7QAw75yq5QQFSmsLybSJnobtazhTMkndKkdagqHkZHLwWs4pffUX3553Tpfr",
  "key23": "5ughVxWTVBYUTsP8T9F33Wkfa69FSXfEayrQunZ3mVjLdb1xHe9yRi71N3Z6sfZWy57WVUSFS7Yu1hSM9oCoJoeq",
  "key24": "CWEBQfqRj9KweMsaGfaj2dVwa2VaAaKn3xqoaf4GEkktWodiZ1aTKbVadMX7tXfU2yqjFDYP8buLYk3ic1zzqe3",
  "key25": "38NyVgsYsdcSXYJGSoJx2s3pZJFSbruyW2G3SWXzmmAaSQaaw37EskrSkCfh4wLkeQWrdVnaFBoDEUNQtvCNnThc",
  "key26": "3gmBUqPquci1JvNQezqSbqdT2UWqU9wTgUkhNd5xfLP4qCVBjaT4LkDy1hFCVog3F8b8U48RCyPiyM8L8DoyEwVi",
  "key27": "2sTVaQnWPnLSdaaNp9F8k3DsPu3nKTzMZ2JvcPG1DEM48bwFhNaGzJCHsQ2iNguQfS3ynSdQejRgSM5DpAf8AdVF",
  "key28": "3bhCK7xTBuNHo1pWKJGM2YRLALGFScFWititGWuHX35LdtRprUgREiyUjmVBihGzR5NCEpo94tcBdKh3uZAWhDUA",
  "key29": "2j3WKQS8Asyfrsav9VroUYdULvF32qGuNu29Pbx5tjx57krY47ZMzSwzMeoPJzaXyeZYtprMYLeW2kxoX8KShHAK",
  "key30": "3Fjgd7f2hq8AR2dfU5tLDQZo6mJ6wjjdx4HkCfLBV4udvFYHXKY8Sm9beJbzVpGrT2Yg6ssLuVJZTL3h2qPJZoia",
  "key31": "4dvJm5ZKcdvMrBAuWt7kjoKpqdZQLnJ1ZmWEhtfuZDsv2yPJpN8kNHZTPbfYzbQ4NFrAQkXrchCoEsxkRmCXNH2s",
  "key32": "8jyNVvEDsQ3ucvDA9BWSQE66ZfLLFKuijHmJ7J6MouXFrnbxcputmfYsvN3MVGZXDBDhMt3RF8iLv6XhaTyf1dr",
  "key33": "iJFySQSiwirvQmL8cewgJuGE1NPNzkKnRcpizVVpwNVibcQhxRNwX5hTHDXHJh41wZgnYFvtmrapyt5HcgpNkSL",
  "key34": "5QA8Se67JobXvq9GtzUzuc8GiXaaQGT3HoyMPHaC3BEQ6Vsynz16yvMkAKiDhj6sQHD3jHqBj4a5pPPBffe6kA3d",
  "key35": "6oGZ8KWj8ZrETMnboC2KXJbW5AiMm2bYFpdCpzMtZZh5qigv4YimpEiNUAgUjAgsc2DjsfdL1GM8qGdrXXHtHxk"
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
