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
    "5XrhauAHC62ExwQk8be5ycJb6v2jb71N1VxTgMtsxnPW6Np6UxbiuN7vnkpf9UxpDsL9vdskbuaHkq6duavKydEB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26ec3LkxucScE1SfsQzar1e4y2dfXaQUuqyxy4QoHxwHgGEedfQr7iBfkvouEMcrZht3T7KLEoWaBpnrSBAubuGy",
  "key1": "5To9zTqX89b52FJXBxVoRqZVS5jVYa9gaozWzpTQ6KkFESxDrh1xVk57Z3yR4Ld26KGUF7onGeexGgLU6HZA3d7u",
  "key2": "4gSr25ANRzQpev6HnxYE55XjYRWrT17MWE2JyUjN2FfcwphhyuZrQDfLRdeg67dwfL3Zh5qR8ix3R7n3pFfnj6xn",
  "key3": "5KyE3r9U4zb5xx15qEmASRDS4TbbsGxXckPDMSAntUgzFszXqLCco6tsqED2GwtYqM84MTitKRu4Md94WmRm84UX",
  "key4": "3QoZ2ttsU6hDW1rkhvfrUAZ87ZW4TyEEpRs98jvUA866wuEtLmtJFvp8qu7aSh8byKrgtmDBLu9Ct1nnvYQgacnH",
  "key5": "sezFRpDd1paY9e9KahAZtKuG1ruwx1yfc8HbCnbuS7rqmUrDTGYjTyGRcVNXNZy6SDgoDxpkMzXipnhoZoMvGp1",
  "key6": "3jHWQRDxWPGBxsL8L7AgkCurGZjF2p1Arck4u1TVi1q5DeUWntR5DzYmd5ZT9D8p8RYYgesyeycLFVrnkZqDuu74",
  "key7": "3h2xTDzR2Y6Euf6SDtRcoby9ENXgow6YiZfWNiJb8twANyZhjmbzsfwGgzxrCy1A6aQQi3MWb2gDnrsMTqxDTbp4",
  "key8": "4XSETvcMa7wojjcqZtLk1pRDfoKZwFgtXdDj8nLTp7saoXYAYnHAvvUda6yMry7dY9scQiJ8EmoH47ihDZ1g2MaH",
  "key9": "4m9y21L1NDVecWeQQm56qzpPrGokLeyARBcK4UXVbRHXcVTcPGo9kF1oags7izTmhVD1GhxtVFmqTCaK9pG4yW9c",
  "key10": "3q3eFiJJgY27oFqGeBWmhf6w51KqKoFXcsLjsDQAzPfgSxYBJc3apB4Z9uvwN8dmXtpQTyLXmkVWpnLSsQ4rEN82",
  "key11": "3ZuSZ3SSjqGSerG27z7TnkyFHgBLSZAX9X4XEM25H8Z1kjjAgVupZVHNm4Qxk6eiUznjofL7xrvmYp5tyRi8N1bT",
  "key12": "3Tv2Cg8cAFeZa43ercQnsUiK4eJ7ujz6G4agDSR93VmNZNwfnUpu8NjtGUDVktHc6vbdHZ9sQ6oRLSskfPJBYPHq",
  "key13": "k6BiSSCfLMpYAYUtZ6ky19HgKZHYsQ82fB9XRYV2NbGRnqEZzGZcSyUJ79vY2Fp9XSvxH39b3yeREN5kXspRf2V",
  "key14": "4xQ7tWWyC9bbiRPSTWCpgasn3KsKAqtcsZundN6PmBsAcJpWVPiJBkbEMmChqLDX8AwkdsByF4xVpSPbPVgLZ6Pv",
  "key15": "3TkBCn68mXaviX9EwMdxNTZRujCUN5n7znc3hebYa16eGdqcrpjuGHKfBzmUraYtfe928ZmbkMzY9xwPidETpaLJ",
  "key16": "iu4Rq8RunAwZZTTBju3iaJmKHW1SUpB7pfCfPMfFYPGLsgKeWXgEFdpFmjj9mRCCUXFAe39aYMVG6C8LonnABRK",
  "key17": "2mWFyZ5M2pDd9wR3sZgUSvjxSWA39TAZZvkhAkQu6n4BPc8qUodjLe4BAXRbMFLw2gGVZJYxinqdza6aL6obyKHm",
  "key18": "2AJHnms3CcrXtxgMkTzWFHQ68bFMELwpZ5iBTBNZiC1Drdb4EiNqoo36u8rVLhCr93DQ2c45iLcToEV7yXneou7n",
  "key19": "4CpqNw9T4NX7A9xHxVmn6QF9nNhxoUdfrQrEipbu1BbF8yY3rhMVuY8jWFiBKJsTyCi4DuWQGQLoyQumEcrqBjyv",
  "key20": "iJjaTJwiu6Ghbz8fZKjpbPy55arzyQNz6mMAvexNMnthjN9icEiDqzUFbD78QD37bxVMjKA9f7Y2emqyTnZnQCb",
  "key21": "S7hxDoj3EunovRvFgJtAJWDyazaswZsPnTpuHVLoLCw5oT8NxMsdQs9cCQAzBsNgqw8JWPhwnaGZUEDB2N1YoGH",
  "key22": "3eScJ9bjvgq8gsisV4sTi9eRFZKfTndH8958kbmbwrB3LLVrpt8xuAfYX1P8GDs6pBxCYPMwLRdkMsFKHY3Dy4x9",
  "key23": "56PjszzyV7aDjYfd4GKvbfSc4V3RyPQkouapbDcFhfxKKKYi5xnQQeG1pzvbwUNZZMBCd7QqhPYw1QtTcmQGuNnZ",
  "key24": "2MWEUPf3RiBR3xLUGR9TUxp6mnYtLW1KxLxUnBby99Z9maQ6Qd8mk84v8RmcSMBx95gdff6cMCqLqW8xZfz86R9V",
  "key25": "5K2QXvFoBqUTQzgMoC66xupbGX9hZwW5LSChxNtRv3uLJsYpgKJMGJ8UHT3fT77B57hpx15SgXnupLxKg7dxTqZg",
  "key26": "2wb33ZZsXXgXc5NphtC2yqxEXmTWqqnL9dDEm1jXWHggiLxAxcYvfbu6woWUrVsLMRq79dnLuvZNEJnNypxuPxrD",
  "key27": "6Jz4JK3437i7Ra3DCpLaaZoxKrPE4gAnUmux9wgb463PSPbgMbtP7vejTJaUUzojMRXJPeab8uCD9tyNuGKX6G8",
  "key28": "XDfNy8t74QC2AFyfaNXfV4JTXwWovyh9NwCteFAadn1aZASJTm38i4ALhLsxB51Ae8uSBByJDNcTzhrAui71mkA",
  "key29": "2vvqCnwVqyA63YEHQJxAvL4FxzEsNtu1L3DUKWYPp3eyMB98AEqucfQFYg5pCUBVPaHeVAETxpRfjPeD327nJru3",
  "key30": "3EFhWi7Nih4hShHUVpHdvG2Pn1Jv1qR37nD7bb73R4nHhre4mkuzQWS47iDjgU9hScNJY91HdxFg4DA8BAAepowq",
  "key31": "4E1MAuT27dhMXRQHtWzVNXegvB3AEpKT6Z2gZB5dZApeGeKrLWRVfy3dCJxzNeSMnZyD9AWFLfLnPSJuo2mHo8XE",
  "key32": "p1437dF8mSmTjGahyPZ5y46wHgSS8XQb6AUQKEnPAemYqKrbBHLundanfJi4eM8frW4DL22aK5bADwD1YE6h8j9",
  "key33": "4PzijTpWx5pw8xk1z7ovurhkNx3yAfYgdMFsVZVorqMzVzqgPR8KxTjRFc9D8DTPocdyDoyvZj4ChHJFuLCmNNeL",
  "key34": "6ZSBR37kUssQhhw6AuYwbqeaEFvvyXpJSwMSgr9fD4P38hWnC82mtdarxdNPYjNph8xQscn4Cu9T4YhkEmowcQf",
  "key35": "31ou25o5rahUWQLFWidscUG9SwHNzpvQivz8Vcip4BczTbP5t9TFu9DHx9CFfS2sBDXX1VDexDcLtiTcVJjC4Eqc",
  "key36": "589LmaEtPvbMyBJb1kwop8piCDkGBYCtByGVAb2PXBwfMCxjGEZzQRYPdHdTxCTXcmVbmSR5Mj7A1NzpwXp4yfD9",
  "key37": "zuGMQ6QcTm7svyuNP4BcZaYSEw1JmB2jPv4tBNrXSxtQVnqwbqo27oU6qYmbnLn4aCE23qVvbsFJ5WJ966i1gyj",
  "key38": "55NYGCgcFcF1qUboEZWgp2N4165QrZ8R65E63EWh8CQpxJcLTRLvmj79gMb3jVqpQj7nsQKtdQVYSK7XusDWhK3L",
  "key39": "5ooC5M6ydwyMkNTvhbmGfVTYao6MER87CMYyssU94C8ZiiRxWcvCrypz5Z47TV1LNesiga4SD31swvBQvRzGBYaj",
  "key40": "5auKgv4cToL2t2MJx8mmphMenyZafFxrft7GUP4txKJR6tRU8RGRQByeZhkq4EAt87nF7hsEPBLLNBK23FKbs7CF",
  "key41": "28xL9H7ChMHRM8eHKrxkUqw3jkvtCyCszg8Ha1FNzQCRfwb8qwKqsdJucgSYm9BuZRWfR1pP2Qwk5N26cnMGhPhi",
  "key42": "Gnkg4hQ9LGdkhg3rYbbHXTAz1xid3XnE2832WXxrkWtmEkuBWXiKGdivdyLecRwjeus1JCXBQo3Xu9CRoh6n1vS",
  "key43": "2sfGkFT2EYsMfRByC4TJyr7ZywaCPEkrkFzzNSx3SHfRhbv9VzvfDaPZh4Rjja8RBW4mMKGZpF4zcGuo6SkH5ikd",
  "key44": "9sfuHVCz6SofzZnGPXf26ApSvXW8w2iGMvQrgQxt2yroX1JasrS4KJf8utBz29mUPGvJfWFq1PjopLeQoT1teUf",
  "key45": "4pxdMx39zGzUeehYet9isLEUy377HrNhKJ7cBZw8BH2jmNCyv2Trsafd15DbQGhuCcqK27KceAMfMNdBtzm4a5KF"
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
