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
    "24Qh1CTvgZGGoYsZcaN6C7K2PkhzW8WuZgBJ437UBztBT6goHuwrGPTvmWonFkDfLYsbjsWu2QH8o3QzHYGsBStV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2T9PK1mqQg3xYUzvKaq1mpWo1RMXFBBcbNTnM5wGuKzG3ZAxxskh5kUajHPXm98LyxapdRewtRHK63XaHiApZQXX",
  "key1": "L6JHfPR2XDNeNZGrWEGgBB38JmiBaKmr7dnRZKhggYdLMxhzti9qdmAZQ1R7PX4NFyoWGLZzpfXotYoaPMdvCNY",
  "key2": "3Re2J6VEw2X1z93CdNUcTvqH3yCwtpKHQbnsQMWLEBjqMiHvPWDN2eng9vas6nX13LG5VQ6BP21K7HfAB6zWn78U",
  "key3": "fyYdzoTYk6uojhdtmycBeDgLLeRALDgZ1R2tDejNWKiKKdPiyxiCVs4G42gD1UCndGJFwNaGzErSZLAqpws2cfh",
  "key4": "zetcLRzNXwYzuwb7aEWtfuvf3A85DmxTjmDJWHHG3KVnkM9tc4rfqhwGsLaZvQob7HsHuoe9watt4cotbyjaruC",
  "key5": "5WjHUCkvkE4M6SYK1jrJDzCzWG1weqVx48iTS2u5uqCS8pnai7uBgoca63Sv7dGeUcwoyMipnsexsb2xbpkFP9rr",
  "key6": "4gx1VbTVa2A2P1tJGxdU1D7mfoPqpbvG75ry1v3pDX2rbhdFiAYPodnreu6JVmzH4La9LGXZ9ZNw22Pd6hXRv173",
  "key7": "2tAeQvT1zwfEUVewP1mJCB3xhx2w2f7zEXDPetEqY98uVAuwdnAF3rnXQ71YPfagq1PeEQmFeD28G2Zn6mACFgSG",
  "key8": "5i6t8VogMnrXdpEr9NxcaHpFNZRVApHPiHiaKZpBX3vy5KxPmacYsK5mtiw5uXSjthKCSp6g4X8UmZpSCZHrSoWK",
  "key9": "5K2dTaL84BbNY3RPKU4N2tmb97TMhKP1cGkv6jkSQ9TkbXf3LP9SoK4JFpNbPtLyNxM7zJtsGPZWUn8ZBotCV4Pi",
  "key10": "32aSfgc3NjkWN8HVBBzCgxhv1NsMSje5P8YnEW3fZtt9DjMd7yxcyPSiNaFCorTrbj16EnMUwcaYRcWd6fmBeLV3",
  "key11": "5UZpgVxe2VKXTnz1o7Zs7okf3FjtDYMBHnQEdY2uL2sYVRVa7UMB617pxedhtxRUxJTGkTNPLMAYEjVbFbcPEVBD",
  "key12": "3Q7EZYRc9ZBpNhS66cWafLdSjcbakU41hV16i4mppL42mE9R5tKvECUAWGuMmJ4KXpK87yyvZdfgYQuSwDmTgKw7",
  "key13": "474AEzpHND5oj35KHXq2bVQQd7agJ97woWukEmgFYZzNfBeQyJLh1ZRpALdg2zLBGdAhGnz3oF5oWoUnesrLKz8o",
  "key14": "3526gKxF9aQhbhH39to5V2CfcwwA94rhD6p6C6p5wKjdXYhUCFm4rYceB76KyTeM9ZJ42vG27SzWqazDDc3DpHC3",
  "key15": "kgxWobRNdftE6GornFdSMadE4Sz57dYxiSoxMnLXgrtsmCxeTrcYxuWUUEAjq3itQTyWFTXeSjHwsKQS4mPZYNf",
  "key16": "3AyBVrWSxNFbbHHjALTKtAzB8ctBKTVhDPSB8EGkCThatN6FerQ4Mxwb8R51UDCTgQAAjZuy2VPBcSMGVpieF8av",
  "key17": "5r5yxS3JadLFY8CTEzzdeyLSe3XNVtGu7mWsqA7XHRbgFjX6wtuUL6JA7ut7Cs77gWCnUQnW2h72ZAqqVX41bRTd",
  "key18": "48TRNtQ94KvbXWpQ3qGNyTtnUC5ygYEAron6F6gtYKvLC3kMqHpR3KkXPSMDBmLeftSXqJMq53Tbf5eb1Wxq4V8v",
  "key19": "bA1CvkmcTe1To7qa1Bueexhg6nyaxFJiLptbNdQDbomanVBkbM1Tcpnwghkwzz4ZLz2x5w116Bxmc2SmyoyuDcd",
  "key20": "YjyAb7w4CfcNZKMasqaDSjznBqe5MCG2D3U9oydUxmpwBPr5z6cJAy154xVuBiW1BNz94obm2y4iS6fGsNur3He",
  "key21": "66qeP7te3EaFhNtXDBk3cQTzqKxBf1Z4dAAthTcHqr1cp3T4xJrAodKNNKGmYcgFCpTHvrTxHae7J46TJaEYhx8c",
  "key22": "3mgkk8nUtNnHhXjGfqysF2fsFQAxE1syo6UAq3XxUhRqLipmnza779LDtfjwuNaz1p7dcFB7h7HNiCHQPBJWCres",
  "key23": "guBdtcUzSHe3qYnSLTctUMQ7jQQutfB4iXKDo6HYCDp8QALFvmR6yx3KochhMfuWZZi1dRVFqpbwykvZPyHYzih",
  "key24": "3v6c2dbY31vuigSUt5AsrdJcoWUzsojKeLjrWXUc3nGhnVyHMtN5o7fTazd3jYkWhSVDdr2BYSZMba6FqDWU5Bk4",
  "key25": "5XWSDxBB2FmsBxX3u6EkVkiZ88EitDtzX8nta7CXCB7carzSnYrpjfSfqMUXEivCE4drQsLYkCmKt1cq2iRteVab",
  "key26": "2UCWbwA4zaxQWGUMZm4vojWUre24bFYSNnbNedK8jTDCHwzFN8JmzpB9KNHic3DK5FzSgDHNuWEjfhmpyMP3jwP2",
  "key27": "24K2CeQU89Xt3QBGpDGNkh83Y6psS25jyRLnWGBR4pE5tZUiXDxyZQiUzDXDKWgsxjT4QYXNnp9xcKszn1KRwvHr",
  "key28": "53utBiGmQ3HLsNvun4KqrmLyEwttyc9qq9uYyejjp89DTga8xWkUZrUxQ8QAwbG8F2Ni5UwKVz8fe7hQC5gYU8kj",
  "key29": "4JMkyUr2r83b1QdGcJwVRasG2nySUtwmenUnN4JkNDi2E8z8cKNNu9vXwZ6i83dXMZv4f7k1Dp4MnYDyUYmHzuem",
  "key30": "2oWBpFHStJEqEFJWcEtmwyJXMSk1g67d9D7KGj2LffZbs2nZJubJmRfwDaj5EwAzSHKx6sxthy65428aNAbq2wVq"
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
