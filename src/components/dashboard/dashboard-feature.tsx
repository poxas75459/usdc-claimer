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
    "3aXergeMrcZjVx15gwwqoYkD6a8ob3256DT9oiR1AUXQ6tQ17FrJkMUAt59gbJFbpb7ks5BzK32Hg5AnaGxm4kK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UHP9V35FcsMyiKW924sfNXnC9YfmPNNxx7aVw3JmtdKELHvyxkCc4gJ8xQA9f41JhL7WJ1fNmYDiE9DD6h5jqQ1",
  "key1": "hTvJajM235JufCojHxVUKDcd3bE3RjR5TvPH2vXXtQHA57nevArgf5fZ9VywPDsJcheQEnJN96uZyio3Evc9xzW",
  "key2": "3Y1GN2EaWSFBSvtrHxnk1x3t2Vy9y4oFcSqTHgYDtgv3DxzEdzjsFfiGShbbtM7MFdhT4WffPTLG7hroXcyFi5R4",
  "key3": "5sTXQkX6NzdPSMn6KdvDoEuon1NVQDYpG5K8zfdAc7yXJTayPthFC49iPoYE7SbwcWTAqVjc1ztFHgvNyTPdqFeU",
  "key4": "2ygpgsinSiXJnkH6az6zZWirZQCyjy3GeKN2ZN8PAnPX9kxcnT5UHdAMs2EaocTos2PUyw3x3VeivoMvvUc89cBL",
  "key5": "3syDoBnmuCvyKK9sxWPPP7EP9XJDtfNzWSxAPF7F5zEYX3JMzU3LEYeJDbRHoZxQh1rZryfxnvuMdiR5x4o76zLq",
  "key6": "64dhjSB2EbnYW5jco2NSuTh3SDVDXwxneQkLeYPFiCdevcAn3bKJmPX9ZjLMU8DdpfXGAf8pdMZKrYwvnNdFhctF",
  "key7": "3kuWqFdexi8tHUvc5JdG8YMWRKm38rfaXP8SxzaufBAdujupjvgxFD3hYQ23c81mVKKFSeiGeByEgiNy6PPaKT7j",
  "key8": "2CNSsrJsTMkSCLWDGwgv8FfBkJA8FbBywRaz4U6rteGyLivN6CtxHeGkvUdx4NH6wqdbuj6AsBCsDGHQxwA6Lr1a",
  "key9": "umat69XEHwQZTxSFznuNQ3rSuapKorYaAfZzsgmSg1TgEi3vXEULVyqVH8KkGc2tJj3CrLGjTV9KPfwGDK3U7v6",
  "key10": "47RRtBfJjz5wTUPJscLTkyNNs5EnWvn9cdCdkpf7XwABovZZoBHes2JhGe3nEPRk8qfBWcvA8w5b7soVi5eGMLjc",
  "key11": "51qfmMNSJpdKdQ8HrXZkwhVv3fz85sDwmFoMJ1FwBMuuxzuuv6cLSUixJeicbXQif4S46SjkmGRqM3iueLYDUSj6",
  "key12": "4XYL3Yrr8uqVDtZZbFHYiSuU4dNdeWuqpUNJNKuxAT2C9bQRN97upnBUuhbr8G7wS6cbR2Q2g9oUNwQhXg5rwqBD",
  "key13": "4fz4TDawzPKi5YuJu8KRyws7BqSmu8WAmFTJ4dac7A3mTbpsvhZCuwX6AbXiaBDcKHqQRotp8igMRQLBojuDUmoG",
  "key14": "2ZphSzHpfhZkzY9RCEXAnTpVkDjWnpX2nuQS217RcstPpaUBU8wKpv6L6YRsabaWkh9xohsBjFGqnbhP71ZCx8SH",
  "key15": "5EF5W46cWNvbGJB36RTxjusBga9CnnoUQaT2VSPJyhVP3utJMRqetDMsrTySfyMcssnqJ2ZDrwJ6DHfErXuL1Ggh",
  "key16": "46Q6tDwMPgiTFZTw44XUsuhqgCzNcLpZFDBDzwhARTwnHAPCwgqwdUS1LDseECmCFXP3oTaixJR6oRQV4HpXvry3",
  "key17": "n7mjbXHhcPKnAJjSsmAabpgHFHFgQpfmv5UsiDniuq8pKNn6MmcRQohj8mYgH9oVwSFhBTw82kUspXa6B12LH4U",
  "key18": "3BNXMJiWt4zFc16NRyfX3dtHgBV6PRPAnLAFbRP2szzbmpLNVGNcnjCu9PCi8JcDvveBajkQb2PnZLakKMkHz62y",
  "key19": "mKC3VLtojHezbVaFrqRiwMpDozhQFaLDunKkz5Eco1Jb6HAa2ntTetV7mSiQVuecWaVF18vkounTHPip8zqvBVg",
  "key20": "3VcuzQNSZ376dbeLnqTiWK6HVHcZrr3q2Drqp18fxsrbFXpVsx6jjLcsvx3ws5v3Gua68F8gf9xmUMNzaMrABwhy",
  "key21": "33MpZTqLufhMTUp2xPjF1jxWDdvdzEYxkjKgUzhJmYVxs5q2F142a8HheG6K2q5nctrhQvtbncPArK2NNLMSVrhf",
  "key22": "4WXqEBGf6ry3baTJcLawRhJQHiTH9y8NUcLFReLHSExzBfcqKjWCcnr9RXgRzwJ6BMXe6NAJwkzfaX5ApJH457q4",
  "key23": "3XVJfD5HLS6ehzDCjJ4ceWhKMEKw8PSDnXdUPs6AKw5fSFyB2iuyewnwBRw2sX5WgipxFRPTnAZHEiqbw1gVGJqp",
  "key24": "6vg7aNXsByrKuBX6p47J57GxeXSigpmRMVUSFnc2ReDRfQWbCaN2WGfMm7MLKC3nfEmpk7icKr1uTBHRFXmkzMG",
  "key25": "21C2XcjicE54Dubogj68DUvcXz6Jfa96i7YhGDsP6eJVKQYJHzUZTk1r7cNDS1vy7gsm5LNjiw4YRFpWcrARNJjw",
  "key26": "4q26fprP1oj7oeWcsk9SLqL5tFh1cZj3QR3EhJ4v1wHntk6vZMPp4MkU6gKxDp646iktJ33MTHb5Pv8RnDZpAM4W",
  "key27": "28BPoqgJxgSmbWPJrdcSX7yxQYWNigFsza3DvxsrLDZZsNQoxCKSPAUEqR8oXybDxwGDzcjF4Vo8vq8c2LYyjkGg",
  "key28": "5Ayy3ohKckhgN7EUAeZNSM12Y7ykfcQrN4PcP2LAAbrk2HHSeis3pdxfasbLFDz3NniiiCYkFNzVhQ4vkSb31Zeo",
  "key29": "5QwXYVbypczwChALe4ytXpTHDfYUsCkEGPnxt4A9Jqb6QxDbmcu8BtaBhi4oJtasgwxMJbEMNa7iBB4SWe8RWHMT",
  "key30": "4kVGAbF2EievmuLD5moaWJfzPznKhHGZ5tMYWGaeojkAKeixb3eLFRsVLhk1ctuu4KZZ9UKRcNHW4zVpUnJtZK7y",
  "key31": "39yhQQgJgsZwJuZuRhE41GMGRtjHBV5JLVGA2BgoajxMQ9pqWsfASrgYJ1HCKVas2hLyujpRzHPgmDwmoSjakEYo",
  "key32": "3hSf2vKY6BDuRdhs18u2BeDmoLxPhYmPNZNwGhfnwFfiM7pjvTXaH8kM8yZMbU2K5heSGPrJm9gFkS1oAvePibBG",
  "key33": "3v5qe2Rs6rKWVVK3mFV3bAtfEokdj8ETgXUqpN4dfAjpvvocmnU513CSpYntjavFKogQ4zpBkt9QGtajfcjFZhH8",
  "key34": "5ahNdRj8uemPsQgHQAteKhCym5Mx2F3iovgjq1FR9e6r64UDBtGf6maAS7Njtv1kY5YqekcLjuaGu9P7WPx3zef7",
  "key35": "63hmrVemUsXXcoyuZezFNzFQVCLB64tXUYSbLFBGYgPZw4tikoJYeVKvRhCbq8qFhN4UxjngbNsmnhcRRsqGaa13",
  "key36": "5jdDNa1KXnjp9AHgYa8Dk3jHJUdxVwq4i1cVskjPDcav3TjbbhtH8CNpVoZrrk7ZYff4kDBwKcgzyr2EWFXDKX2r",
  "key37": "4wBvaYpKXMSjCttqsdW9d86MCs4bs95qah2gfqFn4LkQu9JsEgtzW1pF31uvAnSiyUpKPBZQvtqNsn25ZeZWvxgR",
  "key38": "2byhQcggqH6EwxYff9t9EQx4b2SNwcH5ePg6vB9Kde5s2eLhDXDLoJjujWb3jxaQJNknQuSwXngb8NT7n3Yr7gvH"
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
