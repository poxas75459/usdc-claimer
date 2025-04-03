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
    "eKCGTgtnWtLmLnajSNeGBvhVWTghpr9iShYnbf21crzckX5nFyjPoAkmZANii2vbd1WCrRQi4cBGWxtqhdLvByn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FF2yFCVHCXsPA781bu25oLhWRPpLFq6ZsXVnDj5CLHFuWCs8xc8tDr5diNjt69AMyKnXvtBCj8kJcoKMtx28Qgx",
  "key1": "3ckjK4pgrWg44te8auPiShB4fx9xT1F2NSBep3stGyaBKznED9nuBexPd923YpQ2mYiAJkzkUKiMGvKhCReHHkmX",
  "key2": "uKRkSJjnp6xjM4U8GAxPvQiDRxj1v5BFfnk1Fxir6grt6hWb1KwfJLKhxbHjbLZWf3yuKa1f1GFU34wty2zVGqh",
  "key3": "4PXxtoXNzvqCW7g4gUwdFD7tpQ1op8RsTE4TijjvefZmEE1HcTtTNsoft4LSC24TdBBVw2vK1Qgvzg73TeJCjZhc",
  "key4": "BYhvva312vBuQccao9PXmyJi1ei2m9NjywdVMm5CH6wo7XbmJDP3t3Wegjeo7AFefL5qLABPgFNZmxfGnGYpBTY",
  "key5": "34yqvXKT2prrLZZiL573ZcBxvfsD7BShjcw66yjE2WoQTzCBL7i6rbntzMHw5pEZfaCfgne9By3fBfkpEYd5MXbM",
  "key6": "5Aznud2GG7VqTnrNYBHLd9rCWCnq5oKbSdfiZxkPTwf7tjm9WhCibHSnN2UdF8HLPNQgXLhEVyyHdDsVoxYzUQCW",
  "key7": "3aE7QpXu4yrraLGLDUVSfvJdKpzd1sTUsrePXuGrf36n6bedwVCiZU1Xdt3kyJkVmrejoADZaG2swVqKLLceEjrv",
  "key8": "Gdbc2P6sRwaXirjHatS8Fo8Lnz6DDaA9eAfEjTgdorBnGvMHXDHRqBLM8Tf1XA7YFmsNbgyi1ZxCNSJdUSZA5PC",
  "key9": "2eTeFsi6PwfduoKWhvqtydTVrGK4WuCZosJHyP1qRbEhEf9wDs9wpXNecni2974wHVaJ15xRPdUGw4Rd7WkqLJrn",
  "key10": "Jak3BZpYayQP9xhPKNborffseRStcpciRSAoWmf9zqQi8Tw9zhCHHoMQ7y5rdonPx6dH4ZN1wtSbw2uyxZRshfg",
  "key11": "2PzgMbzh15DoGwrMsGAJBVJT46Kv3SP25CNLAZ72s54HZRVtryh3iryzsS3x7QWB88Hzym1vm22bxvV2nGHxL75e",
  "key12": "GzoBd8skZkPs5HQXTnR7RcW3P26DWQhxxBBYfCwPiGFfnpcEKCUaHnvZtEAD1zzCpB1PYQoH6VbvBzcJq7Uzkff",
  "key13": "5RfUmZSZKW7nRveZoD14wAmaK2SiqBDMddxKEYn6tXAeMcLGCbSdv7vQXN1yEWubpYLq2pNRrfVDWThfYvCDTW7d",
  "key14": "4RkpBQWc5EL7bZZqUfGYTyzu6XQwqBXPZ2yQ9PCf68g1jPMWnKJrPgJ8NkouQUg7KjLtQQvEFPDgLP7ruW5y6Jn8",
  "key15": "26GgATgANo7WGPjYivT6GZCq7viTymyCgwMo9r7mAyazYeMnEGwzcf2xvL7QMJEd1RP8HEQyzxQhWo7H4mt5wbKP",
  "key16": "b4c4RQtuirfWPa526wVUv1dxpjjpkEA5tpMY7j6LxRjXieWjKgjwhCwHJLWt85PMXiR7bE7QmEEDorpGXYhg13M",
  "key17": "2w6zkrVRe5Um9miEoLMWESZaAXH3measF9V4NYusH6DaxecK8qu9WTQjkWt1MVN2xHjJJXqNcE69r3vnRWwRVe7E",
  "key18": "3MjkM7KKa9m5MVtncrhdhPr4oA8rBSGJXzCcZrzENuD7cHMmGJBChtAbbBUw4YkdtPyoaeraP1uXCnBRyouERHNR",
  "key19": "AZkY79PkNHFVbjd9RPKTmXco5Ho96CcCffsXDBRotCeVwuwmQrXTJhYuW8HuCRtt535aAcV28FokQpgEJA5Un1g",
  "key20": "2siG8enV7gZnNHPBXVAs6YR8ussdnp8MERRGPr3s6TkNiT5QQ57KGyqj2EuGDLy6tyw7Mjys2EkEuYSTfArMdhN4",
  "key21": "43wzEkM1mSpwExF1ZSVbKFkb9gYTqjjwSessWY1Y8LAHSdhk8kBUg32GneZiKE8FVWpaa5QqkRiqyHeRZfhk7nZ7",
  "key22": "392eC9vvXSC76GWALxmkZeLbXnM8z4hgYb5jxJw6qQxNLeZ59wDxnwXWUadLRe7AMkjusY1RP2KzhLxFtgKVJ6XP",
  "key23": "4PyUZaBCYpQpVZ6Q7rnX5BSHPJt4FSZSviiqiHEfYpZyaCgGEHutqGLBrmAzmoVm49pxmtrwXjjUcowokew4nn1M",
  "key24": "qccPa9VtGDGJs38g2QRy5QHFoMrdCefWrFxFmuuK1X3NiaG7TQtMQ3cNqwX3AmGmUAKjy8usHtskEAzSyg4hMxd",
  "key25": "5ZeRhnUV7oCQ6oiXsRqKSiWPzUMtGcDdRA4DNsWbqVTyHap8qXQXGBeHRD9EJ3xCEnWsGRizJW6WW9MG6pXc9gz1",
  "key26": "37zzttnxprr2nziidRixzHf8JJJqF5peAehYZ6nybQSufHJJTHXpwzffHU3XhV6x9gxADXhhaJTXEpESNumxq2CK",
  "key27": "5g9a32uLj5oKtxPwg8LWMGa9u4GY4q8k5SsvCwskVeCyaSM2qvFMjGCeBchZPw57MsaXFPchK7YNS1wx9eSz8zvo"
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
