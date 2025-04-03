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
    "H3uCfjJ2PMLanM9PNbNBrSrfpaR2YnCht7a6iF6agj3F6pykD4shBjMbihdSmhsdSF5A4nadCAcRYrNaLz4Xk34"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CB7TdKu9qKXA4r2H9HnczsGwAuzgeTcCykAeEG7gg64nJcJZXL3Wwk542b3So8oNkbY9R9CQZeGchc1T6b9dT7Q",
  "key1": "4XMqz8b9fxZqCE3AzMCgRk8YmArXw1SeG9RXqAVPYhcWSdqf5x8MW6oLizud6eJSNfzJn7o3RS3RcVf65j6ixSLS",
  "key2": "3dZEgSYYnEEW8hFdtfjQy2WLX3WBgnRuKhX3ekwt2qSLG5tqniWhKsN1erUsM1RrZw4RFkNrKasSv1XShL8niN8X",
  "key3": "4hdq3dBQQRsoky46i23WdCpwKeRT7WXKr5YLwDuaE2tccmPvW3z3WozwtP9xLZ8VyW3AaeXQnocWmCHDRjHxR13L",
  "key4": "5LWBqCLcFAxCMvWyXwmSrVeLG1UQifxwc1WrvdFXHHFCMvtjJVJacFQNHisSYXJeh8jhjrukEZ3EYUi32y2i7UtM",
  "key5": "3U5VKtrSqiqwVovXpE2u7M36Y8JfZC8pp41uKq74NYa58SdoL2W8pcVsU9bbfkKfqx8173VLBbstTtmoi2W1nWmF",
  "key6": "564zAhHMmTw7iSEY15JWcqafXEJ9nnZCwMo1LXRHn8vFr11xMLVJLLJJoAYHx26Y6wZXVqdGWAbMVgagSZHhN6B2",
  "key7": "4h4t3HyGt9BqoUZdMFdReYX2xoyG6DHaZ8XsFYF468xaMt1vfAmJYNFmaoCbrHD6bxv6rm11nBm8REs5K2852TCF",
  "key8": "5AVpefit1BCCeiJsJueHxrafcT29zhDutNUfhJ1eYdggriykWfDMqw7adw9hw8JcjhJdfXBvo87EaJMjNZ8SuNDe",
  "key9": "485TCsHBGc2ZqihWTyjEEzrWcLm8YEFQeFfcyQ72DHJqv195Q5Eo3JSMcbY5tbcKSBMyWkyaU1ebhCPkY4cPSwjo",
  "key10": "5LuWqW3DNrJCZWZCyJRstpJJya5p9V5iiyTtT3eKGe4YnxnBmLE3CXYZYjPhECz3hFR4XqsdsCLx3f3UVoFwPVAa",
  "key11": "3WWjPt3AFFCWLWpiAneR5sxmJeKXymTe4TfKTyz2Gh8rHKwJYCb45yhPZ8xSC3d6eoPKMEswFB8H9sd3vBGC9gji",
  "key12": "3dZqJmuwKiw9T3zshYMb9W2pLtjLJ3EhZzuhuCkPmoLRTPF1X56cdjhWZZtoaVHaCUqFpSuKS1hMTh2ATKteDNav",
  "key13": "3JrfpMdZSYqqH4KJrrBpKKE7BPk68kdjWLXtw95nKbVdEDFViuuYcdvsHUAe2mpbm54VtNB15RY4Q3sKXDA1Bbgk",
  "key14": "3tZs5gr52tMAHVgLjkDvgvaF63EHk4jTsMxx6t4Eh3DHUmcwKG3UhnFdzLKBP7gv83y9vXL2LHrcJQZKSZrScUtS",
  "key15": "4ZVx4ngeYCCaZM3vc8SpTsRSxR1weYeyQTFqmvUAb2AWjuZRr814X6dp3vANsAdCFFarAEeb9dELCyiGQjRNMgqX",
  "key16": "2znJX2Z9hKWSXMhYBSQaMLrNzRmXZCHELapZAoGbYLQ51W7xwkzJnJwHp4aecDZ59RTL6UvGk1FJjSC6Hz4qCocE",
  "key17": "46TdCq4JsVDyjHSsHr2uuj4YwuScCAXaTnkzuZEXxobHN1qDTMqp9otNveupmaX63YMx3hzViiYYrBBKzepGgUAn",
  "key18": "5RN2eHAH4zz7EACxdijN7YNvKFYLzvKBVBRAAE1b8kycZMJbUs4qoczDp2tjDSrgkHGRo8zHEaSuvJRbuymWFh3C",
  "key19": "5M895dGGK6mkjNtz2gwHV6NZ8W7zuD6yz99g1NgpCtUUGPrSMwEVZkfd8j6F6GXD19c6knTrrEMU5Ac8dbckkzEe",
  "key20": "5k69PMVFRTgzkmwHvtobzuv4AhH7FzfGHhkYDcgZ7sRevd5YQvhP9XYn66GFuDKtfp6woe5KAvfd8K62VszyPDEE",
  "key21": "3i1cRMrF7xBtDf6ttotfCkivj5YjDxWZsKHuUybYBL7FprD7iWNrDRjitqVn8t9kA128rjHnag2GjmmXSzmxk8GV",
  "key22": "MGCvzHENZbhDhXBd75KRi4LmDimPj9BxYihiqbR3RXkfA4SvSwFhPGX8KbtWDCKv6q4wDDwiCF5YbuAhPn4cEPr",
  "key23": "4eLFj8zkTmvTHSfzNNgF2XHUeX78AQm2jeoEmsJvKVfDP5sQqLA6paM16BoDx3dqoEuwMqE7icX6SBKX9srFG9eb",
  "key24": "3GgL8pUjTEgwhLoKKdA2QuHYA5L52ePx3mMq9dSswgf7kqvgkzaDW5G8znngoo2QwLRwHP7aFcMzUG6H7cyeKCNk",
  "key25": "wPe5CLTtk5RoMSPQivBV7so9NZPHxrqbQm2EiTJRG9hVePab6Zth9muhFoE3H5irYBW4kbsbsjxTK9fg4eoiaqM",
  "key26": "5JxXT8g9xyk2CKq9i9bYJPYE7k9uWqJ64eycy4WJSBTWhkuaX71LcNDjU1zmAWfEQofJQVZ6QtMwxPPvnRGVhsQz",
  "key27": "5yPDZZAfh15D2VGoKXtpdUnFQB84AtxWfbTD9b8QxW1BLcdYT9JVpw4DFebUvc6ZdvHxf9NTBjCC1FsioKBt4XwR",
  "key28": "2qZ2KyQqpZC2UojZxEUwoYqhL6iAekRfHNPSwJg8zJJC2W8zYf3DFLiArxBeucb74heEnHGWXhj6N5C61MRD3GJy",
  "key29": "38J8ULfS4aTvF8dCE2AfE5y3PMgLfbWgMzyJnGXxCbMXq3p9Ha6vVsGXEfTvcHTSb4w38SVzmHgVQStrMSdHUwmc",
  "key30": "5gEgnKDR8xwvkiuwtGLZorpkKh2EtZJvWs5fwg3Cb71E97jhBrtZdLuWhxqyqv1w1GHvpm8qDnX3R572cXbSKCgw",
  "key31": "5yyqdTsWZJo9cjhwpqDDqzQhkBafTojooJ14r4APUeui35UHEmLpWrcX7ZGtHPLKDfXUWYuDNvcRG3e8mXtqcyNH",
  "key32": "64HE34VwSYF2HvYAQrbvggmvKXjjjxX5tzb4CtJJHKzU5ogisrUaGFBKnkGGeqdZQBWpp47iNFDySf7Z9X9kk2ae",
  "key33": "61SQaPjq9S7AtGvKQHmaGcFd9yKBpHoq3GSAUd737xyNvp2BbGQkabCgsTThTiRUz7QmgHgabvxsaffc6g2G42YT",
  "key34": "2NVJQa8MYSxVPZ9sL9KX87vSFoGUfSL3MLbzvQqGtaFi8vvZmoKoD3AKp6WY9DC9JokFiVxEa1Y9SSxYAJDum2aF",
  "key35": "2xg7EmfPGJ21DVHHjT7ZzSjBHSDmmiWdcF655Lsn3apsi8TwL5MZRy1njCSDiWMwzTDWBP6KwXBRbVzad9mxAGVC"
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
