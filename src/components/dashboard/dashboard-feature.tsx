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
    "34chKPmJobE9nriyEyjNBtJN8fF22S1ZrdGPCHoQ11YEUYMERcDaqm3cZgPUajiaEkRRamhJq9X9UC9wCwaGAPBN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MHZgX7Lzx9FP8ycrFwmdchoyw6DLoD1d7fpDyomZLJVTUCrrxuMPTgHyYKcs7gxzpqUgTUddkrLvBMmMLnEdhP9",
  "key1": "584HcbDqTvhDxd3NcSgcMwfAq9N66PZthGbvYq39Zp5LkfneSFwi7Ww5U6yHZUxZnmm9C1Ax6pe3Q5a1qVjJZK8j",
  "key2": "57fW7moWEgHwqpq15SLWFH271fgUYUNBhoW7LLDZFBQ9Rc6HXAi44Uy6BFNYaKhGdzCJUtjJTUsznW74RGpUrsrS",
  "key3": "2R4kPATZQMQJDaAoZt9vSzpPtmfuwcp57GM9VFG9j4iny2XoDJJXj2iKhnpm4NiPAeedP8KTUVuUUsvbqJzCGKNG",
  "key4": "3W7bQheA9NpVCghL6PijnHVLzL8ZiavXoYx1wFxmKgsSaM2o8FG92tGmKWSmNTmdFfyi3fAhE7xHcg7LPHtG4Njn",
  "key5": "5nbFsyFFskwcYXHML2JWcGhiopWfsYXXsfYV5JZYhGQv4ahRdgQSecGQP5TDhcVjkZu88pgQag8rWeBZ6fTqRYu5",
  "key6": "3yiKwgENUJEFsG6f3gZfERu5KMZgskMVPgwxebKoS1HY96zDWpqR4Wf1rUKsA1EBg3bMun7FBSqjUfsLAYM4JtnD",
  "key7": "4XYXF4iM7sUTnuDM6pKy7JkDz6McLkrw962xCudR5EscDbffgiuLMV6UJazB7KZbo7XBjPQ4sd3G5YXvhcpppDKU",
  "key8": "43V3qNB76uqrtoJYk6xZVe9i6jYwz3wrFK56Pi1C8L6qUbMepZveZHZRtFCCS8NzWuFFiWS4CNudzRVQUUS5h8Qa",
  "key9": "623M7QuDMpHpqieRKahXpC1GvAWyh4tTmFoixdKfkUJFYXpjnXq5nHciuJH7JF8HfauZ48TaeS1CHxDd8BYm5yfX",
  "key10": "2FVVZmEVpDisVCaZD6FCba24pK4rbipu5TBUZDNDwRjnF6EZGiyYbVUp1qfcJ82c1pqNDWE2GhfsPpBzhUWLzZzm",
  "key11": "vyo8JX79HSrXJSo5MUKzz6eZ6APeSzrtbXvCtsCmBwXdgh8fVL3GESAhcMddfWg6KfEgpbPEbWLZKj3bYsbScGk",
  "key12": "4K4DFePgcqoDrH8KZ2daaKHTuxFLH94KgzDJw4GcVxmdDpNHu4jPo5Gqdrh2C5USxo5PwdzzBs9BVeCyqCe3rVJT",
  "key13": "5rZ9JA7TxYa7sJxizqy4r4tAaSsskK5MF5KpVPeDT7u62wwDDD7bowo3nSwRHoAzAabN9MupEbNPJkQjYcAX91xS",
  "key14": "2ZvcKtDyLvNZrSQ8yWDEXJP2WCEDG2ecyz8hqNrQ6L7TZrMxrhcvek6TFTCnu35iefzZUXgEAtKvfeNEsskNef69",
  "key15": "3fNUAB9GogdGuNCE53uZ3rmxmxw9S9t5gJzyfqwvF2WybnCtfwXD4W9vZYzTfRcTwP2N5uu65W9tHFZeADNJAXkY",
  "key16": "4TULtEpTcau15bRj88yWK6Ua2StHqFHaLgYW4zTNh4hRJCrsS8rDb2jh723piyHvdcrJh2ybXKpWfN4UWPnJ9xBJ",
  "key17": "4dZDsM5iX24sLfk3gSQGR7RhQPqLyx5fFJHnK12VP4zUXUtS4Z4rcCfCNyCWgXEBNNDrvBxySqCicySDTxYwLTGu",
  "key18": "5bUNFQrbpi2BYrxiJEF1RqrmLjehcaTXsTWHQFRajzAK2St4BArb69VA6mSp1JnV1g92JjSHF7VoHSUr6dFiSqsU",
  "key19": "67CZzj8C5SpnuQxUHktL7wecd3q96j3mfKsaM8nD3eH5LjzrzfS7ifiCknH4aR44HCucVHSvH7S6J2DPGV3XTnCg",
  "key20": "nymGy7xtfktykLHkriFLKGQyUUvScBhqM2H1NiTJZT5Diy9aEytuasmP6T3vFD9Gmc55PFWTBqTBW3MHvNxyTeU",
  "key21": "2VEZSo73M393MWkNwRZYFhuKAunEnujUD8M9njQk8eg56f5pARaY2WuCQe7DQrPNsbZ9g8yrWSnfU4V32k65dFQB",
  "key22": "2yuQhAizhgdMnE66MvAqyweXh2JBxdU9MuQL3whFvpnfaCDeMwvyqL16YSt72Vva6ZDwHRc7bKU8QNCsHKKxZ8bo",
  "key23": "3a45Lo1Jgoo4zoryng3Uf3XKe1Z4gtTYvygaDQzqRdqRPF39BRhym3M4KAFaDQo1GwtE25VJqHKdtggPTj1WXKvY",
  "key24": "2cQLrxZ4foYTAitwuH6N9b4koZKJL17uCztCzSNc2JpF54HtqzNZAnh3TAucy3VkDkYrmniep8G9WtbB9KK24LR",
  "key25": "4Mb4UFWb5PMuSE8PUSJ3seZANdfYLzyhwkhT98iU18Qgfyq8oSj9wwX2CqGRBoHLz8zsZBCJVVs9YJF14dzRH3ju",
  "key26": "4PAxoftcTaZMhkLYZLPC1pBHqhv15f16ZurMSUHjMyW9son4KunMAbcWBK5cnhffzKXHJJ8VFw2gmyN4cCEB7hem"
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
