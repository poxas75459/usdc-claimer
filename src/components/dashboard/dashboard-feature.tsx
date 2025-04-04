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
    "fZtX5eiDsjQDvkkD8sbb3S8eDL9tZfaeHCAJqjBkmPgnbpD4ykunw3tfnJoWrzzUvZ3e5DS1zCEBePLVCVP69UQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eNDYkQyA6X7RnYBDH787YSouSUDMkRszt7qJSUn1ror3ph4P68EdLWEDFzPFxqLDe4LFNYr1FHcNoL1LLJEZfxJ",
  "key1": "4tortv7wBExoJTvA6kZaCkPBNX9hqGH4qKLXvo8t9LdX1tnCq8ta8DBNa1Rou6ST3bL4h4fBmvuxnZiBxGCBKaRD",
  "key2": "5m8hTHYGnUi2HD9KqgcHBEbQ4BgMsyVs36d2Jd9bqWJKLSAkcxi4mWFmJaUQPhDUhgD93qPgzPwLdxDCWYDBLjuS",
  "key3": "5APhPh3pZk8hj3nohCBqEXMd3rAy1wfk8mkkmqTyMz9PzNHTgnwfbSmL9SkztcpDjCipm3JxEUS2UmgUssQkNH9A",
  "key4": "4TZn5J2sgcvZpAMW8V8M8LFjCzwpYooYfD7QBpkwjiv3EXwEgjvvv85t1CFMFG2vdYWrUhnctQawjDuErUHc3N1s",
  "key5": "4dfF8giEwgo4KXsNE4H5yYSqumjWPYUT8UrdMx6BVAR4iHBwkEF33KdVeM9cR2yGFFAER4re1WBHA2VvLYWdk8ur",
  "key6": "5yTHcQVXHhPnntga6aJxhjepTHsixK6VeXi7uKKrvoH7fW53jUVUrELXWY62oAdLFWBKWHjucUe3fz6sT1NNpVB",
  "key7": "3Gdk34hxPGuAZEVcF6NZxXpZMfKYHJDaJJ9yeXskw32B8oPGd4LqLUhekcqYoQTKL3AqjbkGDiCzk5PtZzpKbzDr",
  "key8": "4zCFkGJ2SXa7hVuE7MguhW4cyyuStTeU15nkeS44jUohayucMYJsDtQZe7VxrkUGsMMHNhb23VtkarD3ZghzxC5U",
  "key9": "5FKxYhTw5toTL7jUUKnwrYLgBiKbgN7eBTwia7BpKxGjhAzZMRz5SSH75LyfiTPDkqVyFkmi7XzQnYhJZH5u85di",
  "key10": "57mncFbz6vQihGYpC3Ly5EVs4CVKkKixEEhnTVGGAN5YxJy2fT7zXwkRDCMjmGXQSDgtqGefrJoqtxDPiQ8XieoX",
  "key11": "3bmjtd2bvS1yKwUsZ7ttx99ft1Dpp8wfk58CbMH8bHaYtig2ciSetCTaEmAsvW1WjE42deSLhhYKYRmJj6NkRqj6",
  "key12": "LGm5wnF3QBDSKfQgGvR449AtMrpuhdxVA9PjzuJYmqyuh67Uv1KD8grNZND3ySTdQvjU59XoutuEkK7kAipTNLk",
  "key13": "fo99xAUwNj6X2uQQQDufnAsuyDs5Ktr7274nUhtEjD729ABWzsR86xotxEqn5whx7pLPh6NcL6eCCP6UDXt6PoD",
  "key14": "2fzymfg1QE8dJrNh1h3fS66ZXbzFt5aRPkXDzQFm2jgo6pn6y6rEGWr5AqQJTUuZNg1cA4BiuTgPxzht3ywKydiy",
  "key15": "61XbdFbo12NWVj2bHrx3Kd94XNtbvqdSDsU79FZPSLWy55ra6428osGEUz31iAD9RpMMWSSv5jc25A6FVq5qAuRY",
  "key16": "33WqavjVebgEVHoET6xLJkUmQdJqgFReXi2hiXEN5thdF1qD4766XsonynVErvAxvTw2JF1BvQDJnABtKwVHyA2M",
  "key17": "5ikxad6FRuzRrvsMh66qiaZcAUMuLxCfHCqXh35sCrZN2QEtNWFBftPMgEWXYeaMayvddA6PQxgKmLh9J2YK7sCy",
  "key18": "ATY6MKMS1iEd1QbSaa7E9Jz6Rh3KkopH8VV6hrNfxP2ukBMwbWJbQUTdKVGMm74GHQdbyL2pnhy9sKnoVwbdA3V",
  "key19": "5Lg2FXQBDBYxmmQo7Rn8mWWyNVhHtfNPFdhKNGaeNYHR6U3czsWpJUMH5YmMGNbR8nNCaze5wKZZni5LdKnosPX",
  "key20": "21eJU6DCChx2STLtQQpWs4HNNr379KkeQZEkdMJvBLLEk8fq9TYa6uzPoi9Y7PtcwpbKcnzuqNYNNCD4GD4DBCJ4",
  "key21": "61pyCFSQcWHmt2izsUAneQMKF8ynPU8fHpwnPnTUAgjKPDPYuzsKcQ7P3Km6Jfprfwx1XSmnnU1cVXUJzSppbYeb",
  "key22": "4Q3fVH96YKmwStbtyGJ1BS5NTQnT4xhFkxjUhPkDnw8sXRbjS8wAUH8Zd5mXZrzZEaAzqw2HJ99rsPjLtbwQ7Kiu",
  "key23": "4NBUzSuGXW4DdLCMGyAJH82aY4MmrvaXC1TgsNzps9DHXPUBXSQRd6DhD55CrcpnzzED71WxZo8KBWRHNPyUJM3d",
  "key24": "GRkNyb32r4jfRCZp8QSjwKT4TekTEGzPCNAfmVqN8U1dUfDigcVxQnV5ccs74S7WBe1g2gVCgRLuJKun8zURHj6",
  "key25": "5Zt4szHg49BLB5wNMX7BpwNzEUgPZYLzLLQHar3JHjfGtzAsazCrv42epC8vi8YfMCzshJTP89MqZwwbqu4E6hfT",
  "key26": "3r4PmMEyZRFrtbajqHpi4QVxayfKrZqbewopJSAFHM166LAHw2nQvJiFAkMp5QGbMMwc4hTLxv2fTrjudDStn5KN"
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
