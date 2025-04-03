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
    "4DvB2XsvzPkQ85msdqwxMvMNaqFnwuZcRmvfmRmkHxbURE549PgDsfRAtcnkb5BKmGbqwQYU7pMjnuCQPb5yBRr4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Y5oPkVUaCbeWUq2yiwBXaWN3CYmm8m71rFZdWPs6ZrSz81pmKCQoaGSnpdanVRocHQ2aCxdXpyLJPUB1tML5CLw",
  "key1": "5owHENut2QU3ze2kxYsRhnyWbV1gYStwQvHN8UPjWH3qHtxu3Sp1mzKsybuuv4ggyXWFimvm8ajLNaZ6TuJCPdC6",
  "key2": "5DQt5KRAxLp57romZL6Xw9f3AHJmCj9NvKS4Ks63YpgGryT8ghmKK3qBpwm1NUMEGGoaT7azt81SbbhPBqABP8ZR",
  "key3": "3pqonuw7ijSszaPyqaNogcmXe9Fa9w2FULNCtjeY7Keu8UvoosqPyR4grqDXeWWN7ciV8FoJLey9UmnEphzJhjyF",
  "key4": "3As14xu8a6Crjw8hmHonUUVY1vgV1vZEqLcDYAfWCK8KSE16EWhRNrdBfHZ7GSzgEMr3TwNbR136DG7HEtM2fzbm",
  "key5": "4oLKaEVWGmqJ5GAojRZUunvNDHNeqgK8DMpGaoa2139Sqpd5HPjQadZJiYa3nv6mJ1h4QDtU2n5yyvaymH5gaeUj",
  "key6": "5wBkAdB6yBKFJe5quSg2nWpysimdGjn4AAZpSWPQEFhT6NarkUFhjkfPr2XxED7cuE5CyQ2WuhP13ujzCMzGPjQh",
  "key7": "jX5rKakThjG4dE2tWUf44REyXz9L7usSZ4xqdLNoUcKQrG2H1peKcG1RTocBfdiJHZSt8CyW91rBoZbmJBq9e3V",
  "key8": "4Mq5BgRrK8PCZuc78iL5cMbMPBiuthMtJHsJVscxAmZUNKJoLNb6fB7B9XrEsZfdTSenXoeHLk12DMY9tE2CHF2V",
  "key9": "4Yqfb1AJejVebJ9RhLwgA2sCJjvrBkanaVBMc4uwFbS3cazLSrHzx6c8xR5peYBDGAEspQENp23WE2rH6Uq3EowJ",
  "key10": "xbifKJUxwYnos4NUhsrfMnJXNXTbKVA94Ze1FNt8TtVygw1YSGsKtZ9XzZUAkDEDxNT1jy5XF5BduCKErB8NWPu",
  "key11": "2Q4szbWP1NkEiyLq5bT3rBNGqUEwehKqqXD9XdrzjdQXngKWghxzb1rgJ3NpYTZE4oB1RDxF5FBe8sJzjtNcZtWe",
  "key12": "3u7vftQqEAajZi9wYG2yNceNsHAxnTKYpMopzkYj61zQZNFuRESedXiPNNrZj3zvrudFQ9wDG3W2XD1EymQFWq87",
  "key13": "2EhJBJAdSF4ZZFatgjWVkU856gARiWJSzn4DrrsvRr6KkLuSsVc6K8rwzwkjQVnAQZgGB5EQh1EnJQPaEF9zhadg",
  "key14": "3CeTRVPB4znx5JJJ9eHbVs5CxQCiRjcLpJDdxH46sWE1Pko6MWeVZ4wYDqCB1g48qufHJAR6pQUqnHULxoAQUsFs",
  "key15": "PRWFCo4F3KDC387vwwMAxXTQKiHWd9sJUXmYHPQvVjfsCEgdWZQZDAicxJv1VZ6UFPZk7JLj29q4vFs6MYL8Fgx",
  "key16": "4g5PxZyMrhn6YFpY6ucUbY7RfLzhaBmR8d1DvggbkDbDHLN11Qbb84HJEqd2gCzXEUGwxB8qqdhNBxV3D7JUdvA1",
  "key17": "2EWGP4UgtGJUYEtsnxqY9neTCp3FR1VK17zAhDLemg7vkbbEecZFFwxcY2LQ738roD6pFFc82YhUx6MNmLYP114f",
  "key18": "4QCLCtGtVtf2N81t3ssiqWKCrjwCy3biWBShDraLQWZdqgnpoJxrHocxevyhZGaCHu5yFdcH6q6YywaYqU9bKR7c",
  "key19": "3oQQL5mYXd8x6m1zYtvzNMqrnBt4wnKRvWuhypQaEKACbZHf3u6qkgcDKvbmPTyY9cpiN9vnHy7uscRSikRVjzf2",
  "key20": "3dSFFcpQ72kri3Y2J7ecDLKYiJkrAXyFojkpLqbAHDbosaTgxAWgTG49MiQ9LCMvtfdQnRUoS5T9b9dUUDYi3Rn3",
  "key21": "2Sqd3sQFdKpc1NGJAxY9Df3u5cZb5uUpf8U53HdpD53Z1JJooDwzvcHafkdon1iVTwQ2Uzesot3rKZP6YKzjFiBh",
  "key22": "4ZW8bYP8LXETBdH2Ua43mNWEUCaY36vK8frJEJhGQnsYPDmMj5L1Vh74KnN6PGgw8kTKoX37EM5wBB65f3dfyn4j",
  "key23": "3FQNwRYAAth5RcnM7y9TDPvaEvTfefZCqdThcRcrFMsN6Z8Su4V8PMDNVPSr3WQaFZ1mq9zmSPkyq9Pqq1EbXUAK",
  "key24": "5pBsNWigrXfG9nZ6Ps3CeNnQ4bQueLuTWG6Kc8iXRNV8pQKnqCYLvjtQqNMysdHrnwe2fEGJt7tMGhCFQdi9nTDx",
  "key25": "5ZEvAaYQCCPxffSuKA3WKUNtkGEFA6iKdPUh662peoN9rLabhuBMaaocqRZgVaYFdJbTKMm9nWvaaJ4QQ5ZFAS2k",
  "key26": "2tLfQ3S5MLzgpAHmf2kP2awqkGzA3tExGLmCs2H1m6wYxhHUZXmNXwnW4iknDronqUF75Sh92czZpyzw43RxDbvE",
  "key27": "39zEj4oNpgFWJ2dU6Mx9Gig8NWHXXP74z7FboyaxFsgULhT9QBFJNmcCjTkdBhHMKUKKpLCMe9LM8QnmLHEGCBGD",
  "key28": "5tHdShCirCgNuZCt31ybs8RniXcYR3ybs3vyM5NAWbnRFSVzCFo9sPJRfG1XMSzUgYuq1dYSvqpNyVYUaVWQSnLt",
  "key29": "2E1JzoZZCJvsSoHuwPdBVestnS8m3c9k7s7NLaJ2VBxZsvKDBChjkX35vkwm1zuDkymbPuPkJwV3aitrWzrRnHRq",
  "key30": "5SxKMrWmr2GSc66xwVZq6fu5adMpY7NigX5NtaXmRVuVH5UMWUM4mArT1ooHveHBFD8xE1yMiWLMvMdpxUiQJnnW",
  "key31": "62h2Hbh6YZCSF2N7wK8qDMNyGQuPRsicxP2QuaQpYLwXXnMDcfmJV1MYNmTJZKDSmoPiCPb3vy2SqSzGAaMPnbQf",
  "key32": "51CioKC7Vjazppt3A943L5vH1WUHJWtjDnzyNKYxmftmqyHWajxAjJuZNPauEN3hEXsuKy15KwHBTXwDnsBemZip"
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
