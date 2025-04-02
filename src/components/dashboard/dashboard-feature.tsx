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
    "TAXbHRznq5VxqXFb8t7qnK3QF148AhDdQ2whizX9Jdf9YVUHAm8HkNjVKRP9NLQpKJC2bN7EPqWXPJajG6SXDvB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mR64FL5hcuHisSYKbm24S8wW9R1a5XGhC73G9JcXnWsxr1zZc7hdY8v2QLpvvEFeohmj7QruicBC6rhxqGsgqX1",
  "key1": "4wToUbYfgyBmtZvB2vsp6ZfJK6ADDqpUtSdr5i8p5NcFZmeXdH2JkQrHuycnLsxnHsHNZ7brkbozvu1jG8sdcsUp",
  "key2": "2inUD65ahTKeJSgEpBueX7kfo4vjjdMc3e2pdhQcJ9GyRAU2yyZ7rwoH5g6bXs5eznLjqLwpKx9bwza42HKPaddw",
  "key3": "pzAEkSt9YDiGrEYgmoW9hY13T7S7yQuauLA262ikbowLsHwFpMQCAB7gwdE2fzbQFxh9FgaFU6FqMLoejdcjvq3",
  "key4": "1C9PJQZQEmJTc31zgGw9RtCCaPqZbnDgfALJoaCqXSWR1ayyzQExboWjWd7VsAxEXyAgcBhrgEDV8LMhkXsX3UT",
  "key5": "Abah2zymdXzErxXfcmLTFCzbMje9oJTWFK5wDc9uAnzmNqFoXNWUDZUHKa64v3XDUVDt1raGTnHGd3VcLTC9Aab",
  "key6": "FZpfZMEmeXf2Xc5v7wEJux7jKDgtBGrNdRK3A4HhJw6jDYasoyE1CwXjn5vwLuUwgcUhXsH3mxQDBrZkmFi6nkq",
  "key7": "625BNkD4EoxW4nmym7oz2hRgAop9uetFxuHwVFEzrjjScWdDGY7LHr9skrwDRRYvLeViwoekA2oDgwjFUwJ5YLUJ",
  "key8": "31ysvi3wRgLNonjnD56fu7rautT2ptdgdVF5GtE4vBKZCWjA3pcVXk9YGE2NukccyfY53DNs27WrgAYEBzicseRo",
  "key9": "qkjjsdTvVXPaUFqJAtCFfN13c1nn1eyfDtLkn8fhzMAMNYjuDntxKUEYj89XuGQtR4pWjpHcmHPX5K4xSLhcBzq",
  "key10": "67GxpPCLdkiqfhgSCPQM8TcLKxpC9gmDjncgeabfogjYrBQsL2uyhGeoGCPvg2gZPcSF8RyRWio9qAU7b6YnXq4V",
  "key11": "6gKdmpTwfY3YqdnKmM5Vr5ERapQCH5HyqBQ6Esj5JMvGwJt3PrAHCPZwnA9ZSK3Yrcpc6EktLWTkbSh7kqDCTSw",
  "key12": "2ZnaKjMC1Mrgg6rgAVa3B42wvjg45EG6Yaq4TNQRCqMJTXw64AfyFbk7PDPSFhumvxbqwrAGLTw2VdLmca2yn75e",
  "key13": "2QguXSiKKhe9RxWfvvYCvy5MwnVvYydsx8z2u9Y4Ex1TqTHDNYvBk4th2oQTXuRwTdPzEfeq2WaoTFtb7npQMTNJ",
  "key14": "32grAQkbBM7GyRzYou8BQoJKWW6J1H3G1wjCNaAHL8WGeCGLXwma7GBKQunpRtKhwFQ79Pz15feKvBeVAQrWcfds",
  "key15": "2DKa1WpHr4nLHhjcXmKjzjMXiBaWs1FKM7jLiDSnnH2Xv8gcNiqpCdYDBKMaiAGrFSiYL1XuZzvoyp1Xb8JFAViG",
  "key16": "5G5JePa6F34atfv4ySMDDE32hHewEJo9UxocAQPyT76ZuoRqkgbLsy8XRtsQartcxFf27jnFAwWgvMqvU83sSsnW",
  "key17": "zT93v2FmGgufHqmL6A6cAG4vYv5uNuXWt1CZKJoWz4A9h8nLanxAyvWp3p64tjLkZ6gmeHicBec4QeU4itLwZAt",
  "key18": "Kv7Nvt6tncFh2nEHvuLoN6QzCPnHmbZaMX2KqiDsaAwYKkqNR3ypzVNXiQVBz3CkNC6z7buwykMBDHPm1oLQTVQ",
  "key19": "4CW2oTBfzoek12iq3XVDWGVDCFHSQTaYr6HG2Up2qbvx1kHSqy5yqeqTer7vebM5ywc79DqdX2L54yJdW1jHSC3z",
  "key20": "2qjnDkqyAm5Qs7F9zqa46jPMssxMjZ3h3YN3nxh3P7bHsZhARzi78XTGiKs3EA7JKDcjJdYAt4VABjMgLjp3QydW",
  "key21": "K3CqLNXrfoKbmQo8F5EsosEfXm1zme4c95AQhmCcYtZzdqmj58BiengJDPQu1uwGNL9fcryj4SWaELkmd6NXVBf",
  "key22": "5vq4KUCkryvirB94yd5wEsrd61NjjHX7F9mkEudBT1ZtcipwWdE9TvidtWdmTua4xnBdjfxSS4J7JCGMpPeFAJbf",
  "key23": "3gwmnGKayXHrEexjrCtVcZ7gRkNjDdx3Qq5HoAKP8mfcPvyrwuKDx8rmCrF8Kow5cYfCrxmDgih5PXpmT9oQBL7u",
  "key24": "3m91juEUZ4C7G83wZnCSGg51LQqb5awbz8D8xYKpi7WxBuWXofpBvMCFiyniCtt7YHcxdvDWYqFhEo8n7zhmQsVT",
  "key25": "BsN4MSszZ9wzUQajjo51Tf2dY51SbyNU4tjs5e5WWttp9xCazhacsie94ENACZhUA4Aa7mRzbrgLEVwxHKDjUQF",
  "key26": "5qZR165T4uwHw6Cd2HqEajQQPW2qGpyiQWyhg4oKGgQs33bxMqYCpc6p6txtTwwvYH667yKcHLt6DxR8nvvYRLT8",
  "key27": "2osiBsqtsrb83TXFSobuusZXApWLFsLvuZavtTf5xWBipxX5Gssmttaj1z1mai5KiJyYHdM2zkVZcacFyd1trcC8",
  "key28": "5aBSkE631c1JdDzkbtizA6Hm5TyCNaHJ73S3fqzeKRNKVaJm5ETqrJSPznVaSCRmRUnRNcTcgZbnjCVePwa1iAEr",
  "key29": "3wQLJdaWU93VBPAjgYXMJo9kG1eece35SMvk6kqts5DE2MvaHKpxU3qC2qu3AyH5NBwUJ85Upa7XVzUiQTBgEt2E",
  "key30": "5A6yDVAjjWwfA1frHCn7eGkWZHiLmQExZ2mhH5cK9b1pLjYMuPVJ5pTSGJzwwQgqHKL3iBX9ozCnNyN8Rigc9Xes",
  "key31": "2PTFiNTJk44ptNEUkrjvUZz46yATQaXMzrUFfm4GRsrRTettD1HJgbFXB569QxmGT7zXGAALVAcUvByXfmi2dLDR",
  "key32": "2dvowL2akJtD9ELkyKS1aBtM6zAXiPMxaLrGujVU5N5Zivcc7b2msZDUHnUzRmwr3UcsjmZrs3Y1k7MgX5meSFGC"
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
