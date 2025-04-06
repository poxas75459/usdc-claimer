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
    "5mT8KQ1pKEaZzfYnCF4ogbeGKsCWMbwbkKH8qN9TsesKYB5NFQ2GPtdcqpnZHnfYRCDwSH42arBhDASA7yVn1R2G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2e6oj5oiaZwfyTtSUEcbiThfE31cFMMNeWQBberLYWvKQ5KnNXtpaDy6JrkDbgQgdydCD9zKsB4MVSYf8XPnGYNN",
  "key1": "62JgYkvr2FhmnTx5hWzD7GydT32E1ZXLSSRR7zsTAJVHY3tqdYLz5k72bt9TWPtjia6wNDF3HuCUt7kj92apmKVF",
  "key2": "3wMvC7BknygVg8iLub9918UVsV4PqV5MACnZ34f7gUGdwudmHSCsLDWX53Qk54t1KoVwxAV1uLGBdseToNpQwqtG",
  "key3": "627sSiZN6PShXo587e6BBSaqZwQtdMXx5KvVgA4ZsWmDPu88T55RhaLKg89c9NgneD2XWRcHwnNCoPV2NJHpXnmg",
  "key4": "5KuUz5x5FjTWSxxRZLGhdoGnJsJpJTF7zhWNjH4TzpGgA8VeLVwzDPDobkSuV6wymgGjV2a92VPHQRdvnScwCNTn",
  "key5": "3eBrv31fKVcQt3g5EcVK6TQT4LRjbUSfpqqCdpAMUhAPdF6keBLFpc6rWmt8SpTpiMQYcuZseinb4VEgNVaCmGqE",
  "key6": "cabHkgZRpiBsxGU1ktm814kukS1NiHdYGJy7kKKzgPXVLPCeeahwPpeozBSkudBdntYZ7hxRtgKtTVerochnUma",
  "key7": "49a78qg1yfutPjFQd4853wpFDaD9DKoY9aGgqPyKjucev1fDtfKFKG24PcvVHBp7UsBi8MFCeyyzMcfEzWbfw8J8",
  "key8": "21cNcyxDCdmdatbjxZciUK7LWkFoDqdkui6QyJmRpfS1cPW2YuVK2rkb457u2xwNavwHYPPuzg4d7YVHYazrUtHJ",
  "key9": "P7DYijFkecki3rZesF4QH7eZZXXEZWZkoHd69Prj83TS32SqkZHaUxxu12vhwetUBR23aNC8mh7TQRRmX3dGWeg",
  "key10": "3eCeCmxZNKrCXpLvujqSV6BWCpnqfYyof5uxXrcsruxa4YBCEam39kh7u8Kp9EiMBE7nxoA5CqvmcvTYUaMjTMZa",
  "key11": "3LAfPC7BpYrxjxGncM2HnopmJiZ81XMtMLg4aVkpbThmQ9GGutEvw8eqQFPLsNg1MKJX6bHYkA8U34ZMYKbkWVBQ",
  "key12": "58HkBfpz6nTjJHBLAYZtPzrzKRr8CXF88AeeqsEtCb8ZftUgM7R3WwRnuyGSFekDJvpJnRX86JCJKaLJPbfRC4ns",
  "key13": "4Gpr5DBnV8NNeVSpGDjqrvJjFSYf3pjBwd4qLWr9ddgqy7WSJE9LjswXoFrqULx4rWMZGBCuDuUiw7TY788c8MWj",
  "key14": "4mBsjSHLNzpQZ8jrVJ6Nqn7STbA3jAWuhMvT6bLcYRZEiuLfgVDb8k1rUCoNoqP4uBjeUPt6YrehZfN7kPayP2h9",
  "key15": "VWGpXganonHhd9GiWDsVahhgtJu6SSTFWLosCNkxooZTHkeHnwvH4YvARcmDVsjWUP3f5qPgSHswdHdyV7Awzdp",
  "key16": "2bbMgc9B1UjMtmgx7ikEAhWDPLGcK2KLte86N9Z7DoJGbS9Ps3VzJ3R6bPyuQkBAozKPkdwyhcf24pYKV9zAvt4J",
  "key17": "3AT2kzKkmbv3WoxuyQEjFz6KPkyPKHAeY8kAGTqy17B1xb5s51PiX4JQbxtKRWZCfoU875zixvqho2QbkWkoGQD9",
  "key18": "2tdiCbKk8fV7qyov225AW9185KQksrw12yjwV9iABwPtY3jUq3ARMpe5TzX11mTiLvy9K9X6WRwcomCkyKEvVVZs",
  "key19": "3ud5ZYRRy698tSy5p2M8EEtvn2eq9iycJ45bKzsFK5kSsde5aZ3rfQnqQetTcL7WyMeD8esK8BhSj4ZsGp2SSB7H",
  "key20": "2GcTvvxXW3ukxJtvc1iuZ8uEz7hSsZwci9rdiKcXwrEjtSn1LeoLsHjdxwi5L6gy2yoA9gg33Pb3XAnD1Qbkv6s2",
  "key21": "5n5ntpj4HZKbEbP72XFXNxX4kgeAuTY44AvUDZpza8asHVAY77oz39nnkueAd1gnE3vmNwjQRWjNtf5B7cMJM6pU",
  "key22": "572DxoZbvXHnXW7gbYtT5zDJpHGL7cbuJFrSnZGwyEku9xBaX16zVG9iH4obFZDyd6nA3J2CTfifNvE3SFdwWpog",
  "key23": "oHckg6RdpELAUaabhisA9gE5jyCsj42ZGWWZnEb2br31eMGVEcavEW6jgRSSjorX6vxXuNFfayuLELsuEipqMWG",
  "key24": "TuYq2YvdVBxvrZHZDjW2xDcVo7oYrsx2SDVTg6bouijfu6JHpYaFYUyrgkmmoyNjFpBkNrnSBvAbKrHSwt8YDZb",
  "key25": "cdp6YD9Zi7baFv3V7cy1jbBhrsghjLiaZmys3D1qBbLxYUnYPkgcrcH5X3Px7eKRqQqTPBBgbpimodQCncaPXkM",
  "key26": "mgvXDbBwsbjGcGSrknMsGQKASKBSp2MV67Q3oSTwAPp22uCsRZi8Sj5mUcpAJ3ihiK4n3VQWE9nte369F7b6K8s",
  "key27": "31uw3iF3YYHeCoh5BTTyf3mBvimZ2wQCv8AY69JE21V8WwRWeSipGrEL8dUGZmG98STEJmVUb4AFm4L5As8ukRHt",
  "key28": "61XcWuJZpvAcdCTEZ7S1As5VTr9ZCuWqFviM5Lt9Kkxs2rwXkrJQyAgd7f5BRbt9rMFfDR8xtQxqRzMnhdoWEYuQ",
  "key29": "4JNg2io1H5XbrVvKEehWM8XFPXzyibbJK2ZwX7TDhfMsxxuY4xREuKjxMnpiBpja2MujZXmgyQ7NnJPgaHGEuMkD",
  "key30": "3wZKJfnDCYZywkncTZaPJaV6Ps2iiYfKouvexzj3N229eArY94XPGm96RPKGQFzmBzpUD8JZyn1wN5HVm4g6ZsiH",
  "key31": "4Wfyak4Msk4REPUAuGoxNB2gNKYWwNEE9EU7sEABX4jedSKp17oDtWqL5GZuJwgpjoCVT9KPNfqdhSKCYSexBj1U",
  "key32": "fW8x1siwqDnc8ot6vaufJpryoRe3BJpkPoK52QZKrfhRiyJRbrkANEGiNuHrCueZS7jU9juF5Fd7wwtR3y7hPCB",
  "key33": "2WQAbvQUjV9xFEaYWUA85KmGQGtV2VBQcxaMHbSLQTY5S6ejJMZsy87ELD42Zz9dvqE6B9CFLDYyqjjAWgV3Y8aq",
  "key34": "2ikSmCD9mLLhcW8Zu5rWkqzoW43QF1NT6vayPynGJiyH9Y2RaJxf4KKrsJnKrnCxey4SBs1J6S6uJZ9p9jNfg9LT",
  "key35": "5pAGuk52argrT1VQebQWe8NX1UhyPzpBkJ4oaLz3o5yhK8cMLdJJwKBMiSqG9bCrepnPhshshW6DKrrXa1BqgyzB",
  "key36": "3KdrUJJ1sk6bcsNAJdWxaZoFx4bFErR5RTsLSDPzsJbJfTDuVWV9XVb1RqNFQX8ffpuHFjYgWESiapQG5Nqt2owc",
  "key37": "Ety4LUWVPQgdwWuKfqoyCNJsu96HMvxTD8MdHXKgcqopWxHnEcv3L9NyVHvoD41xLSS3HPUypFBvMzF9FSEHYqw",
  "key38": "56Qf6BgVPtQnEPjHbMHYd3PxBsWLaoTdz1ocfQCGnCwbm5QAccYqnF65xwtV7QWevevW6YA4Xrtnkp3SGmm7kcg1",
  "key39": "RWDzrPThsoTAiEG7NVchRqFNd3XvrgHKyHsdkbBXSr7zRYcXhGrW7n1GuiG9PMZvKgP4ZbkPRyCrv5o1kYzinwd",
  "key40": "2kLBKqspDRZyQ1FaXAuvckfAEi1AjGPoq1bhZg9crT2LkPAxExfRbx6iVgKxheYxK67hLH68k5BkXfo4NAz35Cds",
  "key41": "5HpxWmEhBTYPfbN2es5ByTfAgxzKFtxaV41c5DDoNLKPffoEb8neuXkz2hDqSjAL4Bot7osPaTmZsK3Y4z3iRESr",
  "key42": "57zRuypPWkmT5tT4GrFnFg7jRoxwea3k2niftyahtAXzrcvoi38qfD7w4bM7hGfRXdyEejwnFD72t3ohGaYpzjK3"
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
