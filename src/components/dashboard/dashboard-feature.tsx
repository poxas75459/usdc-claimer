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
    "dDwCCnugKRhqGtnxKKzXmKi3tRRax5t4UUCda1gasQUWxViyUA2dnMTwRPNFYLKP5Pskt8CndSiNVdijEgxsFzi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jtLA94irTc5taj8H3Vnd5MtYZtySRhURze5WUsTjxKNS9kd7tWuJmUQztqyLpZDVZfDk3qj4DXVsoDLFP8ZAfH5",
  "key1": "Qud7CUWvfEycPZz3pvPM9mQekjZyXdT2AoL55nuwSYn7TjgxZ7BMUTnDJVwk96H1b48QsUJxzxdoAGpDqktjFye",
  "key2": "PQjZ2cGbCZgjwVfbonmyhVVdZuC4CPRLXjSXZizW3xXn71YXPArWpaRtA7wHqc73YeiSvecLiZGBjsCZhvD6RXH",
  "key3": "3PAVZDihuACJmf2FXXvrqJH2NoNqHkgYea4h7rns2M4cjwWZiMmUxThNHJDY7J83BttBRAG8eRww5w9Q5Nk1R7Cd",
  "key4": "5csAEEY9y7MsbKoHewpKQSw8Xo9HZoZqVwf84EpWVPW5paUbjCGDjY5Luh4tKixyBdHkPz72CHPs6UCykyTo4prA",
  "key5": "2GsF8LX4QsNHveiq3mZiENB6LFo22is4STekxFfqx73Y5TotFezumqLXWGAQuHnxZeHYGCdpbG4JdPSvWUwGHgxK",
  "key6": "3YPNWYUwHeSExiccCWdLjW8S9DjmdSsKESUb3kJPEZTusdUobaDstWwjTm7s3KEUgRiDndMqrw5c2HaAPMdWHjbe",
  "key7": "3Cwnb7uWcqFkHh4DFmTtRCyRgZbdoVoDA8VSc6RVxFDNtPCmfHght67mpJfn1RKxsKgj3tGFin6KCtxMpp7SPzzZ",
  "key8": "2a1jczJ9mikMAb3PCKSjeuoMazWiVMpVUCxVswfsRUQbJhRWmXkkjS8FEdPq8K2U3AmB4UHxPcj7UmjJuLANd2nx",
  "key9": "37NLqcAKPc4qCsJ4MFWm61jzTctmVDfgRp84fLjz9m4K8CGwT9hphPJTrVM3njE2WyL93foMfm8gcWT5f784HRTc",
  "key10": "51BM5WffB6HfjTfMZT9faWYrMbowttfcPNwdZQZkf4CDzGWfKngTmhaJmKpDFY3mPsH5AwzDXRccEd5pS7jcDzMq",
  "key11": "4xmZNePbSDnLDcwP9vd9ykYYLioZrDrcUUkJNG5TtR8Wsv1J8iPLegVg62fkYfBFezSBgonZe7J23uNQuGjRBwwB",
  "key12": "iycmDSnnRAN5mQ22DoSM75UZpoKphiUazgPnJrNi2Gv8YgRBy3HEAsAqM5sJUSjYzWdcaqynfMEfivrXYhxNNjD",
  "key13": "3CD5zooKcopMZfyJ437WKxAYUzFPE4RmDMEH5YRRUBaDDbmcQFygiDYTEQmhyGpBtQznYMeDfoC664FKcc3R38jW",
  "key14": "4yNVSMoAWCepnwNhoN7WxApvdFaPUsAhHxacMjk98DqJG89EqX7YHeKxedncghe4V6RAp8yrbpMNNdXdtRkiWs9j",
  "key15": "2Gub8KPT1ExMkFriL8SLJCRMrvVgDZTu1LkohEQaVnsTBgPCcXuGQgcJbKGbftLvGFTSjGxR1rnvK8kSa9crFoqL",
  "key16": "5QEQFRNDAKq7VzSDWioZNqf798AhBBFQ3SykSYTuXnJbDxGZ8fqnrVyLE4pSifv17LDNYgmkFdUL2WkSo8Yaz4M5",
  "key17": "2DdJdc79BV5j2x1jc2ePz5QgDCqWebwHWm8UqUuJ4isVbqR8bF65YhxSDtbxCAk5hq25NvPojxfwGQVWsQoueiJY",
  "key18": "H8YXP4kVTakyfTvmjfhWzs18xFsSzsRHThhgyr1BAGF5WyE2PTpd8P3RDD58CsxWWnZ2B6quSojCpLYjxPif9CR",
  "key19": "46P6J8sVh3ZWJXCzJMqoNDwfa8qRsGfcVPb8L5QsKmHQeYhzKqAABvYuxqeAw8cc1jkhFQ1L5bUbRPv1yQYYwiHR",
  "key20": "4NobppHmLTPVi4m6DbNaqqbhHTanzfTbNXikQPAoU1KRdZX7AjzFtD3tTKZ9yEY6xAAbNiEHq4JmHfySvFACcH9d",
  "key21": "671jRSpzaxW9ZMwb5uXg3TR3FWaWyvoUMFGrwK2A55X2kbsB6uCCqj9Pi893YuaaWZ9VsBsraQCpUzSyZcceSFL3",
  "key22": "4g1th3zZ6cuPE43HpoEMghoBHVDPdixAwUaB2XUVn33hKVsimrgpwNEk3r1XXhakFW1Y13H9Nb6R596jeKYMX127",
  "key23": "4E56VRAayTw2A5fATgPAyAyqiAk2fsPydreYC5NdaXXTwv7mDsJ68ohoxVdnLQbYDyKBcG4aY7E5xVrWbDcxq77d",
  "key24": "2C8g8u23NV6DwuhT1MunwYcvDg23J7SuXfFSZpXu9aMDsVLLYbkSyDDtqiTYTyAzR9v12ZLfATBrHWiFaVu4X68Q",
  "key25": "5GD5boyYUfdovqG8coCngrZjD3oF3LZXRdgc7vE9MeG2FC7gve1GsDSmro2CmNS8S1EvKnnL2KbF7rrJPBX4999j",
  "key26": "2PjFxYfBBN7NWyL8evbBKZ44E1qnfjFfvbS9AMuVoj9CzfVPuEnnKERhywchrZTggkN8PnVX7kv8NcowXseTRdaB",
  "key27": "4BcrDnkZj8DNyJcZjvZfDEqQPZzZsstPeTa5gxXVmUhFfNmmnT9SUebCQ9BJpJxGsDQ2aLayxUspZYPq4GeBTeTx",
  "key28": "31CosY4hR9U6YDA9mAufx1jm6GJTAgHCgPmHuxZ55U6tEF77X3EPQPMNsAse9j8GAV9FP8DrqdApAxE7zhDZMyz",
  "key29": "2g3J6djGxKN8jad5xW9XuUF4rn9ck1QyFRFH3ghoMA5fzCfH4xyd8x5TwnHcywuzzMYJ175jFabSdeATyTMVUfjG",
  "key30": "4vqqMEa3pzFXx7Pn4owU9V6LTwat2p6kmEUkHw6iDmGnD4TeERw7quW2nhWsU8LH7WaKQpqAb4ET7cUigJgoZUuG"
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
