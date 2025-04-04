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
    "5VK6xm7xZX7MGkgzzb4b9SSeZfu3j1hLnfZHRfgbJCfaQS34R7Ffke1QAqW9DA8Hx3RZ7Vh47tN44vq3E7Liw2QS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49bWywxhGs8N9UVbXL7ka1pHdtrYqn2h9eGpo1AtovRqiAR5jGhX92UcdjwQ6NAYtiSALdbxWBMvrF7G8xRMQy2m",
  "key1": "2jn48CCK33Wxf9oHQY3DUCfgUeX7umTit6nhQnB7NMXcpw3XED9h4fEEkbAbRUMfEzxRNZyyyXHWSzR7NkiArKNg",
  "key2": "226soRktYQpCgP8CpftLsKaRuRTWFEU5DyCG4Wjf7fBhafbjM7E8A6SZhvZ6T5qjCcF8fCQS7Hn5UKdCdQ1qwcSj",
  "key3": "128zz5qr1wnwJcFEhjyEsrdtQYf2TgFwhi1BppwdaM3SrvpzxhVettCd7YBzpygAsJc5VyRmq7w52SvJ1km2pAXu",
  "key4": "4WLQfDrUH1g1AiVZbUb1smH8XSVQhCvoysKRgXB7EDwn2nMqcDpFpWoaPTh8bbUYqcYPdYsvwsFsozHg7mJu9A4C",
  "key5": "2g9C9sKPupNwywhCTHcK2D8EwQ9JTD86eQZzssjVZ35hcZUTmfsmui2d6tRy2ooi4Q715rofsCHqo325zf2DGEe8",
  "key6": "2HeYUFPRCxjTpFt8UAXRh6AV8BtJnmDXNzptRUjYZZYn3yoqrBQaTZd3qoRW5vkeSXjJffbkovEVszu7vMbFg1q6",
  "key7": "3WJYzgASX3nUjXg8DwMkmtUd6WW3yvyq5bGgc2C8KGJa2GxuLHRE1DdNbM3A6zjjQ5kF556T6w4osBjvvz3fM8mF",
  "key8": "3BWfPqMX4rZBEdfC4xxByHe2eQQGh2Cy2e1xSsm6UC3RWMQKGu5QQGoG7TTmoWVDsCTT3bMbHZgPnqLQP1V1D5CS",
  "key9": "2KnL6Nuu6x4gmgPX1po8q6bh9Z89CxVizgTABp6phMBAjTWhTddVbZAb1YTU5TSGVpmYYHKe2z5QMhdccAM6cA3S",
  "key10": "3sQ75KsdETxS47iKBm2wFzcbe9dU5EbrQTPZtCRFP5V6fZpfSQ1NpYEzzkmvvcVhuV6SKABxyZivri3UmgT9Bkts",
  "key11": "4PeVkTUZ3JqT1Gczi5q6h4ikuVCWnBXGk9CL4pNF5p5noKCefcYQZnHmSf7TsKMubKysxAyCC3HJSGWPag8pnAa3",
  "key12": "2vceoDpCtehBLcGbC7dgAZ9fmq2A5TatB815QpgniTt12YycjyFWkWYLMqScxqkKkpie8dMMa1BDCQTSkBpFuTzc",
  "key13": "2TdBK63kw559fhPhccmL2UHHQxMbmdwkooAgeGjWcLbt6Edfgarq2BBvK2tKRZoi6QwWTY2YocmWiKKMAmvSfbEv",
  "key14": "24PSpm8XhH3pMorWLZcanvEvPywyPszzbtj72DkhYx9ZDck76UFWx7i2nbqYMPBerj7p4TbqjRFxP8VM9kq9wUe2",
  "key15": "2AapCEHCDHniDKcuNueGmR8o31vqNnBsQSoAomr93wKA93fcT9XwZ7jnzbtrY9hMAhCX6ditMqhYD9Af1JSKowzT",
  "key16": "44TpjEDuVZPuuzPQycHTh63nMSvmvE3XjB7SQJvVUHh33PbkKJvjPKNZU2rD51hxwrLk7wgHnHk38EM43ujii5fN",
  "key17": "2J3APomgkhboYiVnPpp9ksYSSPARPCwVBJCKbqeTqHG77hW4ozpwL4iDUv3CqUnqNbWbDMMxA6sXJ5zBNxsf6Z8c",
  "key18": "9qUjtCSYJKQTBKNZMEEfsf3E3qqf5rWmfRshfmN2BcfguG9bumx49xHzGYMebSAxyDWufeRw3kkKqPdCPxhXbWt",
  "key19": "3NUEqkDmeKYZZjK9s5CCzBt7mkir95QSoskBuignU9BdcoJmE5Nb5UetY3LGUUMjQjHnfocsmgHy82poNKEBXVft",
  "key20": "5pzDkSHyGuFckQaLDk5LVnLYwSQd4qvfCt6HcDSU37XV3XZNzUoivGFrNnJdZwYMuuD5Dh4iaJKhNpC6qyCsdQkR",
  "key21": "5LJMnZcSLuJnqLE2aJ2RXSh1Rm3zc6japg6uA1Q7A8bt1ntc2o4Skj7XvdmoQAe1K9cwTnpvTP2Phj2W4FUc536p",
  "key22": "4DMcyeAtjsmkrYvSKL4nYHrR94n3dYvVLPNiCnoZp4ggxjF416y8v6WKEbf1kYDwArqNWND8yXJ2n9B3Kmkn4DQe",
  "key23": "3NgMqFeA5eVpEwc18UxggqNHpf94A8fa3YSYY7wda1SxnXfBQEfCyTf5Ne1PKdh4kpzpBJ9FYX1EUXJmouGg4MnQ",
  "key24": "3W98nKX7V1vCqRftdBbRzaixpjBaLE9mXExfFqAs8M14cJBYVKeJoHbaLqxn58r1Zhgk4RWSwhvnzV7yomqCnwng",
  "key25": "2NSMVQECjb8AzXuF4PXr9MJGth3JAHbYTmJLdMppxPRRZFragfEoz2SUFQaNw8jTRSxfTzdqXhbesieZ6jGvQKxF",
  "key26": "EZDMvdrEnjnxUiJGViwguMAMdHwa5TzCNzvafdWBZ8JW7t3GUM2hxHfh2QXEngBegcvKmc73dxyVLmQZ9ZtD3Rp",
  "key27": "5nVxqsbXvjAno4c9qV1nc81rKBkfG42sJzgMccpJ52BQffoXDWzAv7tci6hZreTPx3CrTXjjc1Ua4jum6xncakUd",
  "key28": "2Kv4WfzmFGc4snt6W8qxLypgkyXBWoE6zvjFh3PL3c16zpnjYHgZvAEzp9pn77XX7cd3gsWGd3raN652er6LZZwu",
  "key29": "KnsCVZKirk1AYo4zRaEVCR26wKDQ7tD93gkFCazD6cH2mmN6UFFty1fin2FmBq9pkXMjsXDKy8RL9ssmWJib7g6",
  "key30": "5rkqWqeoniZFoKNCMzckyMWrUeRc8BECnfsvnKqYXtC4LcPJpJFy8H81HggVv9ARUTgu559mco3oaH7X7hY6qwNc",
  "key31": "3k9UNaVBDNUijQC6XcnJsawDe3QukhAHChzZj328Mm7AWpTCkHWhvAy5rK8b6XFvSFhfgF9bzQCdDtGuFoKGi91g",
  "key32": "4dotfNaq13Uj1Z6oedkLUMCTtkrSPKgxbXWud1iu9V52QHvmi7CMaXzTKqLbypHi6A5AjLRZBCsJPsoNxBfiWcbt"
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
