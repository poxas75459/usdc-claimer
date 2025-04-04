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
    "48ArVFVhiT8DLu3huDnYNcUcy61PTojWezRVutxcCUxFv7rvGjpBU4RiYPiXHQDLH92GZBsSkvCsdRWRsRYrYeRB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4e5qfBRY6WnRDSZtTn7AKQ4TUkxu8dNCGKW8mMeeZJhuPutgXVPBXcgNgRdq7F7hgmEXn3DasWWmkFkmERWeDHvW",
  "key1": "5DUphZ8HrtHTeqDi4yUE2Pw83KVUjJV2RFg1NFu8jGiYFqvPAsvH11TBKc3PdPGUvGmqbUaFRmFSDceuunCeL7yL",
  "key2": "49Hzc2uG9aovfYmSrnZCcwesHXNaGQqSJbRLbx2sSJ2zDynwxKi2YpMPMgjwd2FvGKy55hDWRoTSPkr9wPgRTYgw",
  "key3": "3WAYREKXTNySQhLn2L5wH9DqXEwgWyzpFDRJfqr1rANC3JrbwmZyvnvw4AoLzFQR25irYfemWUnMPRTamiLHjtFj",
  "key4": "2fCUAHcT61Lc7UkRpdxnLFbmphRNAQxQrj7p1vYv7MjqXMRAbvGveLft8zLNr7i1GydhXzDQ36kkbkmMxF5QAHbx",
  "key5": "2KyDhxWb5AMJ4uJE4wduuWTP3iDRKkz24kY2DVo9YMVAWDh58HCcMDN3mDvMzRJR3FRAeZEARjesQhwv28eroAn5",
  "key6": "2yyx9gbiE81PA7En2dGRyziNd62CEVP33f5GFpY3hgniecUfdc2n5TkJzWA9ttjKmLi48RvHG9XuYffYVLHY1Kde",
  "key7": "5dJwqXLT4VpEW5vjTbtAYQeAPBb87q1GKiQ8nEv6qb3BhFKmjWMgENisf7eWBxqx8gyi5iRJAneD56iyRob8g1rC",
  "key8": "gjMNmj454Pa9YVGRVk9yw8tjGTyyUNCXgiyBwQbAGjd96V2s9eb99tfkkb9gZh8cRpjNrSDER9Zu1M4WzNNeMZg",
  "key9": "2cbxK731cj7ePNYLtyRhWFnBLd53B7vvqmMD1aoZJWJMGRQaTVYZL4KSJXjwV1uBrQaMXV1d7t3NRYwxmB8PVPDi",
  "key10": "5biopLiTzD5k9JyC3k6kthHoGdvFZY3NXDFGiUwCco1e9nPT9q1vTaRTnLu45pjQooCqPD5uRQkUxqTVMBGunwPD",
  "key11": "3PodQvuhbcixNv2benh2WTmZsPVUhk2BGJEcbdmddHHHhjXczEQA7GVFGZRyuXwbLJSN48HB86Qqv37PgjmYprnM",
  "key12": "4XizyE32PNqGyGze3fUpAmdP8GeCVog72dB5s2E3V8vDUfwCYHd8ZDNXpzr7yBKanqmuEbD8zeoyvpBPDhpTx7TC",
  "key13": "3Pc47KHuWziTvZwT6oXC4EM6YrCDupqgH61bt7EwiT4hGDKBusykvS1rCsgGquwPftB9rrS1uQ3pWCYXNrHoDvyq",
  "key14": "crx7a2HmX7U8TjvRqXzh1CFzcq7q1rbnm3inBmvvaLK7VBGwUXgT8Rn5knFYW3x3qXRCK3ivAuv2f6y66E53Fqk",
  "key15": "2r2r9KjjTKjGk1FUw6AvDzd1SBy4ts6zJDRAGbt3yiPX6SitpZroGMxxoRNfSgJaUMQHraUXb6tUEsibq6ptf33V",
  "key16": "2mw1xuLPCg2C2K53aumaTJBMX24MBXGxFsULUaDdQ1jyk4RvqRrfaU3F57TmcaJTCgba4MkJxCpKs5D2XksKeKWG",
  "key17": "2Aw7473AVZv9PwcmyQbfAKEFzQLBXEeoAKhXBay9qcAnJSCupha1P5mks2G6XUSLrpQamUcukrytVHBRUhbxzpSB",
  "key18": "5VPBjyLruJakX6oMXWm7dEKcnRsxpegBrETyaRgYKrJhApAFGqf4guvtjfLWBBxuoWzmZ162pqRr8kUce82xUaYi",
  "key19": "444hFnPo43AKxtAds6Emh22EFHswwmCryg9cwjyX8h566ZbieTVLx6WeeDSZrD2zx3BCmMKXcpV5Mi8jViAguswf",
  "key20": "5nRtGXJnRQevL6TPFf7J3M32omA8zDzPwib8TbNuz9TCvP2AxC1ZY6eVM6xjBF7DCjHn6uf4SAJyQ6ecF2Cm5mHh",
  "key21": "3Anyf3ZtMLN99DPpZiqQGTXyD7yzak5iSHbeB3zTEh4oLimx27EHCFDnUjrTyWmNxRi4APwXgrG3vay6yTF2Fdc7",
  "key22": "38dfJjBs1DfiMbgmxHdh2QwYdCup4CUrLvcL2m1Lw2Ea5cw2T3eXMHR1Sz6ftme7FPoQCCw6M9pnZGQvSxocjcfo",
  "key23": "5rrAvziaWqB9QHnbntTiSXy8RPaLwwijtQiDjJtM1xoZ4R8TLBmUg4E8JWSY31kq3HuTU6tsVyM4ZV1BkHgXi7XK",
  "key24": "3HEGHZZhGkgdH7TXiiW9zKLDMZu3dY3eMfJoBMUavHLpwbGMY2xUrBxA314cp1ytaUUVc1Y5SpnMKrzcam8oacFo",
  "key25": "5RqwWWFS3o18L92TruPbVbr25XA1BAHufjyLRSVEs54U3FpWML4dc5GNY7Q7MTo4Dy8yZgDwoTqRmadJHkaGxLb6",
  "key26": "3zeg47rbio5NNLyJab5kpBuzLZqXBbhvRyzTiJVM1mAvfcgHH9bd7ZX9vVDtTv7pnF4zXJSMNDp7ChhLnm8qa539",
  "key27": "FgSuES5VmgPGiJLKXpQf1TTgacb6VHEwtrczS8sJobgdsfatTaxZFjv4tPBKvfrB62JzVE4aZdtLTTZsszZhfaV",
  "key28": "2No8n5S6MkCoBi1UYM4BHV839xuZ8TLJqGr8jYPrj9mkcNUUVK4AiBALdZM26eZANNB45mQBzmsnNJU3dPRtx4SD",
  "key29": "w5AMeQydHcga95PT6bgkhTPmEuBjoA4wbeJFfCX7orhxpMpZsNw5y6YYfDA1g9S1r4DgwJrP7JBmTvJrUQBJa6f",
  "key30": "6vU7FobqpX2dWYMCfa8iE6hzqNECYV5b3vzoajTDEvd3iTbnmAopRjbJqAHiADXojTk9R4rEBXxxGijAgCZ4UW8",
  "key31": "2Xfvdz8hDkPDrKCVhCcxJAqmzpWBFvqGmiEczVCMX1UEmXpsi8AXd5Xijg9PxNe6KdfdLcRJc8E5L1MVFERfZVb9",
  "key32": "34KiMwBm82YEPdBk3o9XMdeGV3vqi6JPnFjSTq6L1eNxnei8WbyQy4qc7xjaK5pj7eoVwH2FbYSVJ5qfSF6njWYj",
  "key33": "4agzrB4GeEh5HWyszvSYTzZxCBQwNRmrqym2YPqBf3aa6YucBV8Z3UYJxdZdef27GiP8VNQsj2JxPgEZ5oDPX7oT",
  "key34": "5PjX7KqsaeCfDD3hTwPD1igrncGchUusPPdZhknG2nFiAjXxRZQNSEUThU1BTpSrMLScYGiiwwgAhLuFEnwHozsk",
  "key35": "2AKbj1AWEgPWmq7X9A8zKGN7HG4mUKX6RiMLgVpK9qPW7K4ncFj31nKnnSUwpALXtogqK34u9AXb3QqUUhSCJ9DX"
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
