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
    "2TdB1ppKRuc1LPcDJHHRmaDwtm89hh3M7NinghUCdBTcDvLN5CETob4kX48fPkqX87QvVQ9sdtXSAFEx8iA31fNW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36VUTgATBtHpDtUF5JAyBrkxvs131CvW45XoHRFVMFRNgdowAsaJyQ4dzMXX6PPag7Skaj2ruq5cZvbXqJJW3x5x",
  "key1": "4tUYHFfZ9Pj1oG8SpSysUaUvTLYHLzXf513uV6V98qi8H5ec4G6t5Ku3pytKn4jP1ZDnaNCs6ksjex9utLGyh8xj",
  "key2": "2KFWocoHLfo7962EnXNybUBdxcMMbCEXX8jSNrKvSvSn8fvPjVaxK4tuA8vfCPKCvkon1AjkWQzBXpwkVxh9KdV5",
  "key3": "27jtVd7N8ijnMaPuTeTFjDHfiT6kdTkLgFDEKY1AQAJadnQ2rUvfrjLD7qgQ6JNGkCkFN14YuSpDN42xJ2SQsq89",
  "key4": "5HX5CLBWvS1PeZJWUa7cAFmfmmgykJLFNFawm7DAXG39ifC6yn1wawC6U3Gs94FDz6nfpdSu7F4bNPRnABCGLYnt",
  "key5": "3iGzm5npmxGRbydKL6zn1h1bpHsFfcxvHsmVW5vpxDnKdpskFkZWsyxJf5ZcjfrVS9Fssu5dENtEeGCFgfY4MoTY",
  "key6": "26ETr4pVeMKfUGUaLJbtzHPFXwB9EDQqUNDA3qnZd4ZUEajsjE4vEjYo4Q8SpVxZwhufaJhod1dAvEBZePynJvXz",
  "key7": "4RSTsWd6Hfy3BBx3AwKuCP4J9qJEyAN5uUWfkhjTK7347YRZ3Szt3FDyRXJbYajy8WVBbsKbxg8gwKTGGKXfz47z",
  "key8": "2tiT5vUFNRnENdLhGGBsd1xQo5TNAkpzVNahFUCUvkwrzmwiwNzFo8pVvpaNuZL3kdXA7YMzXJHuMBdbvpAGBTDz",
  "key9": "3dAyvDfVovJ1oVcTNGFGpLPFYnChwrRKnTtNBesy9EeGkHMXckyuSuwVuo4qJEJzUthmE3DiXLkM5HCiweWH9Q2D",
  "key10": "4jHEb4hB5YzK6X5PS3PqaZc5sQ48wAPhZs4yWhHa4TQqKdbzS5oGN6sCsVSej1NAWLqb6C5i1FGiZyFG6EXeZaAD",
  "key11": "3biywe5eeb6uQSxkYjjdKvYhF8SMDPe6BtC89AYaZj1zgATkRBd6YSm4jDo9985PjHYymvpo2ZPHrEBtkpnv7oww",
  "key12": "4A6iDCqYbQMrNDhfMSjcpaYWMxURaKBp45AVryWc2sfDJY3TH32JRRWct8Km87r5bN5MGcG2p78rdYJADgUfpNEv",
  "key13": "zr7iY6uFkkZ9LWTFP2BZv8XWyQ5YsF9Q1jis9QJtrnB8NRCrSG6DvNp6sfmwByAsANAMhkp5jx2qZ39SZtvi6nL",
  "key14": "5PvCwJw17GHbYC7XxR4pG6wUrjkykTdVGbQDhMKSgw765HWM4hyQrhiimFQzwmWrTV88b1bFARVtjGxp9LxwMQbv",
  "key15": "Wqms4wHEg2woYnXZ27jhd3Zpj8uXRDhbes62SAgGKPxsqcKjzckCxhfiRjejWbUPx9FYwbWpbsWjZuWuCjEm9Xq",
  "key16": "3K7nHYRjVGA3pgA761QRQPiVm8MqSakZAwSR9oDmSr7Ez9m9FEH2UhYY4TnVxpQKfbnovKUB5ueiZfG5gvZQyQit",
  "key17": "393pQoAvDKPunuzvUSPqC91z4JN83gXehJGsfCKmkCJq9Q2ohGPTre84bVsbX9ens69WaRrxUn9RupxeTPv7oSmo",
  "key18": "3pw1CbSHNPAgtyzcG2Kv1wTFXeXMXwCkzkwGnuvEnJnFq5N1oDApEjb3ZCz5gtPqAFfe76QjyR9pwogN57GFHNf5",
  "key19": "5jPZRsuXHorojp5pLyn8kpb1zPTyMjY8DDTxgaSqQAQH8h9GVWt1UmjrTZP7qyx13i5oDaQpVLbq7JB6APxA7XBf",
  "key20": "5m5g1WUvsttBi6sKhPmVN4KDV95nnjn8An2oWkrJ7fPEyWn8HWa7rPAteY9Lm5LKvZR53whVYHG7cXQjB1YYScoz",
  "key21": "3vN1ep9pfCYTVaLZvT1zUmqHCMF1QQBirkzcwKS7qFPoN65HkCZu22rMFd5syoExxvkFXrDdteD9RxuUmdBedQHT",
  "key22": "32M9cyxw64QX24JU8UFZpbuWpqFguC1dzgC5MyLobbPB5y1zfq28CMLGfiTFBrha9QqW2QDbTP5X2nGegaMkTfcW",
  "key23": "4KuFr9S8Lh7VFsBPvKLpCVMHhSfjqRpArkYLTMLmYfx8tJ6enhNQu87JXTAJKzWNzsaHnq9hKjfYckW9APt5NQSX",
  "key24": "5q6ZDFPRe9gWiVsyDFyy2FG2MznneRgMDhZyTVxb3Mknhc5JZEKSDGHrCFMcqiR3DpL1994aSRVuUhauh8HgxUdP"
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
