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
    "5zqdZWRMbNxm17Zqr9LRpPpXuA4RxjHVoC3q5Pvku3R7EyXWCb1UCv8ErdvhkTRehTDN2wHwDtBPu1MKcCHorhsu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bt8ZrAGmbZKHy9FZhoz7jgniTJnPrHDYtRpu2QuPZiMQyMzLn7znGAjczSrehYLFRAyXpnXsJ6qF2dJSucynNDc",
  "key1": "2s7CKFBF1WB6WTnHeJNX177uaywpA9jPefWRddW4LY8xb3thbctFGsugVKEpcsSpe4pwwiAroDJQESUENQ4FLk87",
  "key2": "5caoZmRsNdCQCZq42hudpcRM9GYifKUXrisGWZRvhdkobZQWifzSWy8iZSmxc4FunviJmp2ydtqEpWRcKpiCaWC7",
  "key3": "3vsbcVLoPriBpxW4JEuAzp2LCp2khhPv5TNjUeCzBrVK7DKhQskRAiH291duMXrQHewxZtGihNiQXMaSehn6Fukv",
  "key4": "TBhahZfeZwfq29W3ua2BYsQgNWjLn9w3qfzshqA225JLXYuePJGLCkqNUsaANAFsHAPVemxC9EjWbY9emdkX5Ft",
  "key5": "5EqzcpJGtAm5WLBocGsAr2JG4EcTt1iQjcXRSjGSKeRfp1p9NCPnekd7vnQiSpU3BvhbHuWC3c2mrZ833iFEuWce",
  "key6": "2KPhDjcGhhR9WCEqRPJ7QebFi1oMeNF5sCWr9bQAMFVqzrBBW5TDmbWpE7U7HsGDNiPRgrqBt1K3aV19t8bZyW7X",
  "key7": "59XBJm8rHp5XQgW1THbsJjAGJwnUvaUDjwDTcGusdixdtNe2519afgBdXz5RfpEAUfLdrrd5gxbaACh9HoKJRKQR",
  "key8": "65wqtB2oubSevKyDTGFJwPFKBFSB9hg838NoGYVVG84UoFXXKYs3MowFXaZYNXw5t3mXbiJue6mo1FpfPDk1EBey",
  "key9": "3Kwcg9fteCv5BkTa7eLa53SiQx9vGxSmLEpY2gHJDvdibq2BhDfGZ394LNXAFu8ikjEiaFsGrQQDvdkHrrHRfLTa",
  "key10": "5ngeMZCBbFGu9VUo85BFiDsTK6n7eZ2qSCt88o8NGXonQm85oGLzG4JYDXQykynyzNB8ot2U4CtTC9SUHbRJhksW",
  "key11": "25YX4ughyzC4e6PVWUZhDz4LLx9i8QYtjtRK9c3kcey2LxzLQ1MGXYHxAiS1tYHrRWLxuGb8rGtZa9wkNcgehpaE",
  "key12": "2wiCanaGbZK8dPhsgJKeiJcuWtjgU3YSi5EC4uMbZF9N5febGQGoEFppcAs6nGy9XBcws24dSYinJeSFXbZcEB9L",
  "key13": "2yH8c2GAArKVkfdZxuAvByJ9KPDmNJZFEvhgK1aB8vNjirVJDys5EjkZD1Agw7tT8NBwo7dFDYP3i6qTDD5inpHH",
  "key14": "2KTqtxPykRvTt3xcUyi7L6mabDa7TRQRqyHC3HvWW8VhduVAUv9mdNZc7rc7Ki8poaPjbnsxPuN4a9UcEUgweumy",
  "key15": "4KsLwvMWFP3f15hhfFKo8XYuFYPHW7GM6GQEBVP46JJ5X1zY1Y9gt48XAyGNxDmcRPYvxStNncghPb4e2mFYcstp",
  "key16": "ZEFUQeVK2HEGHrqAncvo41Azs9fMUk9SwSTd1qtXts8QqnDrgj3fLnoiDxVjVGAyx6mw9mbzs1LhiqBH1tr2Axp",
  "key17": "4LeKpWgCxxZ21Td6pEPSkZyH9jyeryWX5M6DuqzyuiRZfYGVRZbtKfLD2sAHrhZHe7MZEMEBGaVhowSad3BkbCTd",
  "key18": "27DXihrC1k27jiowgLbkR8Tg4L745yjfGawGe2dLEiBYuFUDbLBZ1heSsgkn8J5FCwXJGcme1rDyhBvVx8yT4kGc",
  "key19": "3whZxf2qUMCcH8qjZukBuQhogtjq44Lck5qeKEnGGrc3ouxqawExRjUnZ5e15rPbR8cUKyizQasv29DDnm7dhgF8",
  "key20": "4874QsPf6zbdKx2T7swjRZK1jfYJyUQYbbEbTt9ZYC1b7zHTtqQ4K5HAfwhuKEPK7WNp3z88yE1YBdFzNqUuBnrg",
  "key21": "4UusN223jNTQd4Er1ePHbFr8tYNenZvsnfkK9zUn6qaAQ7iEPf5RKSBagAfJzavxs6BY1p1PxoX7usxTTEJCxKAb",
  "key22": "3By7X4Y5AE8Q1im5YTzgRbSjXrmcV7Wk1qrftEPKg8ahSMsyqh97wjXUVTcaDHcTeCM7CRyVmA9DdEGSG85k8YYD",
  "key23": "4pRL9hLWjrBiuWWsBiKyB7JHRq7rRu5BHxPLt9cGMNubmVw6WXKJ3QtFjZXWMRhPTFmMogLztAsr4vkaBMDt9FfV",
  "key24": "24QoZiV3MmvS3Ug6ctE6XJiJD6tAWAwa2syC9aNeNR9EsBp8s5m6bxrBeeDNK9gVyoJ6WkAxrYEHQuu8u3p582nF",
  "key25": "AMstDoG5xvXqjNQXKxs25mvuBHuLzTUyvhTr5D5KyVJ7dcC5FwZ6DtWCJ6w4BdRgusUChKS7qb8Pr7SReHRt13B",
  "key26": "3AKiXK3U3kqGLg3qbuHDwFDAmu5EysvU4gSML5z7hKKywZQN16qhTkSxXRnVWPEcBuGuD99sfDZMBAPAk6CvqsS",
  "key27": "2euUNXRVvJuQsv1Dft1B8KpxUuwAXhTmksSdLFj93AteLnA8sqCzHLhME94TV19qvqFaThZ6hZsh8M9NZo9mC9vE",
  "key28": "4gSc11sJxfyrf4bzNubcBypq8o9oD17twRhXNYado9uSu9xEhh15N1yDJXh7JAD7ELKC4prAFBAVWxuDb8HBpZFv",
  "key29": "5QUJFcysiQpap5d79tTm7ssvZRkGZ13pBiSx4VQdGiUtFrX1XvtcGJ6LovyFx9gNGTvzWjUvqXGhTvwQJJH1SPED",
  "key30": "MGvvXUqBK1Hq4c1CLghTw1dPh9JyGaZ9f6FUuDpAqGSKWAqh3Qa6ou8gyHhca4AGSNUQRpaPfxLSgmmD2VQvPNw",
  "key31": "FchF6E85XK2uZgWTasJ4pg5n3gkNPJu9NE1aTrohf9gXz5TmjZ56ZVNPsTLeEQiozsiwZY2NsDuCdRcyUWfibVq",
  "key32": "4Dvvs1W7pVjedfzVX8jAKupfSYDLq3h3jfdWDdmVFM2zQ6zz4pVUsQoZYJJ9Q2uYymg9mVuhVSgpFqtu5qRxxMgs",
  "key33": "45dVBWR9Xv2HLyuncbHgTJhcT93KNUGL4rfrc3DzuJwscELndap8rS5ee1S9cHMLz2nX7ck2ZW7bec2R1CC9WEXZ",
  "key34": "AfC75KGioE5nhk8h9oBaj1UuFZk5oDYiZMHGQ9fA4HwLzW9ieWdJiLhpXX3JwM1pWhJQpQRamhyiUTL7na9RsQu",
  "key35": "35P4PbizwWv9Bn28RUuqTQkKXsfadKSmo2cr7Kbh1hUGs6tACWyEjcxMfNvkJNQpv5qTruJjeui59YqSh45Ub6oo",
  "key36": "abHZQMeSFn4yF3EBWHz1rSoMqD9cTdCLL2TBM7a6zBmBC4RuMuDJuKzjfcoJziryxp9Y4MS6TGMFoVcKSsTrMeE",
  "key37": "2yFfcj7H7opdzB5LXEf43AmTWqf9PpA5jzbuDtX7X9hsDP89nFBA3hmWwQ98o7dKfYFZT5Fxyc8hQNny6DTfDZ1k",
  "key38": "4Yw6T5dsUYWQzBZuakgSn79vzrL6DDnvBUV2oGevX88s5K26tTFFWNa9tLPtFceDzg6MHitcnJr3VtNKfoRHb7SV",
  "key39": "2s1ZNYBpNrv9vfugiqfjG8huKpuAAkp2XdTeUW7nPvrHKA5HDP9Jae9QadyMg3qUS3mHKCtRwe9Ta8xtfyrERQUF",
  "key40": "2z9FD2YYvM6QqQRaq75oCPp9CpxeHFoSpuWaR3RtAqknq8M2jtr6ckZPxVa15fFhZsKXb7M55bbtGkSo62693wGJ",
  "key41": "22yk9pJSiTzNCgjK3p5oPW8Kt8A5mwVP4Jkio2yztzVv4px8r68G5w3N7zgJywyibqCXQcYjTJrEBVa3DmH1ipZV",
  "key42": "4pV5NpFbjwnFfvRDTneGLYJCeK9YCtTxiH5dRBryrEUSxDS4qExD3vhBynJpCtFNAvDj2Yd94vrGVGeb2qP4KphM"
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
