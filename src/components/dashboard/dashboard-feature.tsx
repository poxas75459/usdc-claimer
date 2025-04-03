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
    "8x4YLtqjXtDwfcXbh9tHj8kL7G2DE8s3atmwSsGpd13vjz7YZroUhiCe8mercPUgE7Q7Q6LkZgD3ced1dWXEHwi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AiRpwebtJyAGnYiCFHP8hpREkQL7CjPePUi66XdKLf4n7BJc9aJdhPE2eReegvwrjSzCtuZhsQJEoR4ZLMPwtxt",
  "key1": "JrC9zKPJ2mjVDzdEhz6qitcfc35idEGJU1Ga8t7wWH1UejpkWDeE11Tee8Hi2947Gu4mBJPTHtSV5VZY8LzPrVv",
  "key2": "5jFeZyaSLiWU2nx9t1wEHYNTdfJP3P3hs2fGxFVmR3DHdc3k3gKAa8ztve3LnxsBfbheBMBmipPMSdLFio6KudRH",
  "key3": "27vDqkFhM3MGXMonatAsAsEeKYuwkfTm14UWcmLr6HuDZ4xu6WFV9eZsV2CMBqcijtrqaVtuTcrCQg9JZH9Jqa49",
  "key4": "4rqcn73vbkX7EzGuXX4WRYDqNzKTVetD1D3YNYuk8877pzXSK44rAdy81eWkb4hCSYTLLNm1Ndd24QwEoY7YkZdj",
  "key5": "3TfVoKgmP32VF4CVkxiu52Dz1PVYnKcq3eHEpbZLYRmoaY1CWRWG9ApKag8soAofbPjyZh7ZgqQsnarWkzMx6DMb",
  "key6": "3gBMxZSuYmVsFq2KX24LnQ9p7HLjRbkcCSNGq5dfk1WPb3d4PuF842Lz5SpThj7GbebNgnXBAWRZyHRYgkYYKbTR",
  "key7": "5e8vcF5gxHWBNauBmefighVtqkuvELW9BCvH44dzBmm3DppoaNtkFiBfcfenHmMoMUCFB7VuPtSWQsTocKZim8Rk",
  "key8": "47zaxmUBvtFcByBKPqquU36ys69F3JWr9XwcNy7i5QYnbGt8YpqUrbza6qrnz5pkTcPRLRzWhAdcGtRuTPDmFjJ6",
  "key9": "2WXcZnG7yPSdAventSxr34KLteA8zaAFDYiXe86aNyiZzqERLRr694dsq6WvE5ugFxfCYfofrT6VMBaYrHud2cNT",
  "key10": "4B1mTpfhcapaaWP7XcozEbqMSBCv5ULfK7QxGSvEF5YwMWBapjPRd3rJuHB7Ch7pv6dHTvxrNyKWn4sEYBBxmKwP",
  "key11": "2UixgMqNLjug8MmxHURuzxDmXo6L6ehMFHkTjcguDpd9esCN5DubpCLST3XiqVRp6GFAP8W5JSjpgP34DaWCbthc",
  "key12": "3ZTP2ZpZWECvuyrVYyW7YcB1YtNaSZcRwtN2pPA8PGwXeykh8N2FidkPfKnepWWPagN7hUxwZJDuYAarB3DKQzEk",
  "key13": "yoPMt7evNonVSfdVz6PegapHLSsPkfXjff6USziezUBdkg7RUGDxT9Lgx2XN8J2Yz9u2cTbfJFeiTEcUQZKrF6B",
  "key14": "4zPi9pUGpSLgsefjpaKRt5ovuaam7edXKuwYqDXQUvdjopUp6MJuD1ghdEEv36rj3QrfN3Z7X6kgwKPE6rCidQKZ",
  "key15": "56NaTm5xcBkhM6tDjZgKW8tRBJnhYMeJDMiQZ7kaNfzvxFVg7ou28zLjrTWGBHjSGKZ32cJw4jorrR9t6zzUep9A",
  "key16": "4H8zZP3FTn6xhzQSkivY6pnmJ4gLLxpzom3uiHXSREGGRekt1bhMqm1TcoMfjP5m8kHDv3s8tQzP4QbqhVgtmrG3",
  "key17": "3XxfCnjSsU8W9rES6QpvxyzY8Dm2xMmuXn5Jbfd4GzjfMA8pW3GyXrQQeGmi3aodSwNRzCLLnFodC2ZfeDZW8Ase",
  "key18": "3zdjTaZfTptC7Cf3XkbySfYckBPzuRKzmiPCkYQEvErf1ZAyAQauTbMWbdQDqBy6SVRE9fRyGT95xzKytRzbJSpk",
  "key19": "3H2U9nvUgR7yzoQ3wG1uuKw2gs5xEQYA8Vn9cZ8s172myzAYgTEA6QWBaunc38CgHzrEyrAHKDh1SjongQ231xNR",
  "key20": "4jcGhKqmmNfK3mQU1NKoUEwuKVSrdiwEs8jyXvomxjqi5wohV3pXwCjgP2mdHrswiA3upm2KTX9eFyZw3Ajgvx17",
  "key21": "2YR8Fkarvr7PNxmBjZwEcrTmxNURvAmcuMn7haMYJzfq3eZtgvFTgTgXVaURg2nAV8ZN6U2sdUCN7PRZKHQ8po5K",
  "key22": "Vw1mYCNzLPj41ancbQizWRvfDkVY9w33qVJSj1KCQfUWZGJXKAL6rc1RJoYu4Szn5BtTD1LFaJTjHcTyqkk6DkP",
  "key23": "3AHGQyiD8iAQLs19Uj9uA1ugZeHX9Yf4uAPzeXrC5WHm2rSK7D1pezhFgLN9kgaekqEeQ3cDi5oHGrpB5qUnktGe",
  "key24": "62N4uWspVhpMoYS9bamnw2ZM5KfrZ71Lo6B1tcHMSbHU8zN7uLsdtEF6m3kQ4fYuVN2UgtFfT33EGLHLMDANHXuV",
  "key25": "3gQSjnKLFLhguBFA9qR7PnQasemqs3DQgubpEwNWz7DKwfrFHwgEUQMiqBarTS4Z1am97H1WgcY6ybJ4SK3J7Jpg",
  "key26": "3gXKBhn1HfcEcTxTt7EdSsmVrft7jQnmZinprnATi7uURHwzX9mBNRh982GRWZZVsnhLzHhugrbrJokUXvNSFiTW",
  "key27": "5w6YE8grjHJ6hhpJYKPeoudLF2gTV1H4Kitqmas1vmQNTH64GoocJ9rCUGV14zrhuTbC5kT1s9DB9byzTbLYCe7V",
  "key28": "28DAqDd3PDqd9SpGfRNCqJhPENHDmUcpEBGtZZYJDU1yP7uQnN42cEpuFe2td7n8ZZGvgeqEFkVvur96EfrkPr23",
  "key29": "5BW9N1gf9cmq6YCwWb4me6PWtEbjnwUV7m44MMjJBmwJbvrW4fxmwuayf3d645DsFneE1YJQUZPjwaYHWRXh6QQV"
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
