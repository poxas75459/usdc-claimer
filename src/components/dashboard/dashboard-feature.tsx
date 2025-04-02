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
    "3V5XKiKTnnGxh6ajWiEoQye73eiPcRmQQkbh7c8L7UogUa4EibhRMUVmjF7UfACTwJPuFS4jVNRSMZyy6utb7ycn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iayEWAqRWSPfD1sY1qtcJ4FDTxvY2GZs6howEVnwapMhhJHAzZJc1yPoYwnebhvGW8NXdQnxkE4v2hKRAQi2xXT",
  "key1": "Lf9LM5tbp5JRc4kc6GQjPittwmzmSCT1JLiEbncVs39hFcHLChFN1YXMEccTxyUyvGH46aNiS88WFcQdpWdxKJp",
  "key2": "4y2qBTEdQHUmd6NDS4bQ8mPh3AFxQYDgeLfJjHTshL7rxVKY5wTWRY8j1ZyZgQ68TERKmao1rJNC1aUe6vKbGiCb",
  "key3": "5utqtM17TkRNYX6RhiDS8qLtkDnbueQoY7V96MFhRbpWeL8pUgvPS8XVsqMroznCicb7fQqT2PprjcFNwH3C7sL",
  "key4": "5VXFbno89x5BWRMc2KRtxaKn3y8fzRCcBJJuDw1hfStpvZdT1jujb14QbTXqsKdd2jQNviK4ZujxM8uxrBUkM152",
  "key5": "5B1kBkBRmYWqHVyXzthGkgxpRJzSwRs46vkx1UPdKtqV5im5ucCEwTEH7a8dVf6cgLpGCio1CBbNLtNLBqUNcEpN",
  "key6": "3iPMaaozRdgky7D4TAYL2Ak98rf4uciGfBaDfAmwWALJvZQrxyYT8UJkjh1FBTMGGf3cyauPimXwEcmtCgD4T2St",
  "key7": "4eYLMDoWwZUYmFXpRjnvX8djhhNrbZsuatAMpJj5KcFezKcdcdPmXENXSMp3NZ2PjpSvGJsAYbbSDyzsHvZhqnzo",
  "key8": "3xY3cDthDfTwifg2NUpfpKGqkDUGzwsdqf5RpH7rJb1TRDci333CjrnM19nkzsyuVYXKKFPc7qPg2Bf88LdUr7cc",
  "key9": "wuSFnxyHWEuCv9855qDDsNjq9rxLdFkyydr8P2UWaNUZ29y6M9gdDdSUFbYWm2MivUfsWfYZjrewPV55TqBm46m",
  "key10": "5neKYchkpTRxtFvbzK97yVBLXdnRiM7hM5zZMyqWVwK7YqFoNAvxFN5vRbcFnspBrXKxtzXXKzeGHZDosPvSxQ1J",
  "key11": "XayCNCNbQQTmU1QJNwn7b9dTWPgEMUV5nJrKHAQFEPxxJUY14E146PVfet3NR2e5MUtJUbKiGnnDqUKT73LbT1g",
  "key12": "2VrMcz86LHdS3Th7UQiSQRw8aAx2CoFHk1H1rV9BuEWiwubnNQFAB8NYiRJj48zRcTx65yC1UoZaRCYr7T6vakHn",
  "key13": "4CeV7RWh3CuixWNmuhPrebkUzwShn8kAgEq6ibLVgwKKrBaD2GA5gVVrPc6hGGTRGXYYc5LNkiXW867LMTMjWFSi",
  "key14": "2WhsuyWUVAF4ejSsLSdxcRdLA1YHKB9bt593MQsAdpQQmXaAxqx3bT7HQwfkrw2Tfus9tjWaFoQVHtJ4gRtzR78A",
  "key15": "2k8317GQFPprU6G3FRMp3B5h6tPwesJgp5Gu6bnU5XF9RYkvNZzKFNeXqpy9ZgRvBeiqPLLgS7PeKjqMw3DgZGzt",
  "key16": "2ZqmgUuy3XuJoFz6hjPyfEj4EDAk94dREsRQfuw8uCbX3tjEgh71ZHHtsNrBg4wmr1QKghbgeRadtnzMTKDz6H6P",
  "key17": "31Zun5ZRnReuzvkh4HkkbkNXBgpFaACMRohmCfZYwJ9765vYybrm56u84Hp9WfQouh4QoSqxSYWEmyLtHH4BdKdy",
  "key18": "fbs6j1bKe29PhSRCPwV6kgGm4iKYEeUzZRvUHzDcFziRH75fnQKSS9VaUwWhJRLXnmidjSBk82NuTCExnsYghbd",
  "key19": "2yYsYrScNiMRvrZoznPgWY4CDd5APfzAZrhKNRdBqjVe4th49BecMW2UXKgxc645dJ7a5qYb3R1VJLKB13qb3VT2",
  "key20": "2JZ1gALavTMugHGRgxuopxw9xYEz8s7KibyJzZRrePv53nQaoFecY4ivtLc8HYogAeJYs2ByU6c3H8tGRKHMRg6J",
  "key21": "2ck5CHPw288LBgHwu5LH7kCRakWbhwC8crTSpecPG7fcpP9Pj2eUMMx6tVJvXQeKtWkfx2PEob3bivUMohoHzWmU",
  "key22": "2mwxoAdNrRmW8YGMv2TBTeLk3XFnhGETpjT9E7Aj9tmDjnyKeeSrs6QPb1kTswERb6MMdRPHAUXhzHFTtZ9WFNqG",
  "key23": "5Bi1nkLWQ63TKFkyGvQBGYX7Lmvm5K8ArPhFuVbjux3QvhyKjTWeLuMA18jaSnKmh6WWGQ65VaqAwSFZLQYwHZ1u",
  "key24": "Tbm8YuWDMPEo7UbRrL3RWU3J29uuXD3Y2tppyvSxd8jUXrJDmieFr86re3uMiYSPvdv9K2FkJSWZ3fAkamEXeUN",
  "key25": "2AMksvbK95JBvy7Wcj8mnRk1mmwBf3cecKFaTFMSvWV7AkexC2GQ2sv5jPDW81hcBreeq59nqLboZe4rNf6ucfXD"
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
