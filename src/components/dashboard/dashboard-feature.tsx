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
    "3Ddqpo6bDx37hrTjLZFkMZMNKwsCmNoYZK85ZtYdMPgX5m2DqdAYYoqzKeW5urHzWX83zR4fYyHU6d2u5L3NDx4i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5m2Q5KiKVTnxEUd7FhW2DmwHvEAaJ3RPaMnibK4tg6Uqs3ejmc37Ng7ctc6kUjkTWA2yQvMJ6QhfvzuLqATCJc8P",
  "key1": "3YYgcfvg52iEPmxrdcPRGNrBESAJnSbEx31EDAbnHDpVxsDxSbtjtEo7k5AG27DdRTa8z9PdM47nwxAxxFaBe8V4",
  "key2": "3dKi2WzE7xKniTZDqWqW7dzjjYJ1Nk9PD7VYDFdfr2quQff4DkmregkffyduH2bK1cnaE68zVMVcSYBSNFVdw628",
  "key3": "8bRqRL57wrg22x1soX7hL2iicM62YGLwB3GdnHvc1RYp83jdYxkQP1jJDEpAW4EK8aKcf4xrErm6SssPLB9mu7Y",
  "key4": "3Sv5ZEUPccEgAb39BeKxpRzYh4z9NeajVwJFAm1yiYcwpqnTWEvfmkqMLEMPRX8dCe9R67ghtgitJVefhPhDQMoK",
  "key5": "5VFgQXA1qx6jxWcHwtfjKu6ynfFGbua18nmE1ofvyd41H4nwheYpT8vuaC231WRFieWU6k7Uh2jSUG5Z9dpk9gWc",
  "key6": "2WXPpDsNxhwBAXETtfSxCk2jAiAXm99dyQ6z4GykjX74SGZE7sLvfztpByiACxW5QEMBRHgNkgCDkiNuepArVijo",
  "key7": "fxZDymD83N3VN9KZpF4BYZmEszc1D4VRACYBMC8DLpmddCxKGT1V85bj4DweqK35TKvBvaSNEZrMAq8PVQGifyP",
  "key8": "5cVnz5GA1VbpkkXJ9eQhZc6N8SPJTeDkeAXJ8iiBhWaGedfkRJ5QUwLwfE6RKdYUyxKHi3xK5jSt1BPA71C5m524",
  "key9": "51bSAFmmroSZknZLePptSoykHnLTbxSWNU6aiV2avsR1GGehXtvuMNThCdGUvdZ3UormQ2L55QqtVqbrmmnpevVU",
  "key10": "sqSsDTQU4TSnGokuNiDUz36YmnjaLjJitcgwcf5mqF23ZTSA3N5eETZF4iaqKMqyGV31vV3ZnSKbMWqZdH1L8rn",
  "key11": "5HTLCreDVWeFtT8FzqSdD1crEN7F5FSqDXTwUKr35kxqe7ZrfYPY5bU37rxf8hwY4m6vdXhM7eBKDbBPL2Qse2tn",
  "key12": "4ePhB2KdVS6ktncSbMtL9DqbUGWYBx3LQvEXrhHLtAC7Y67gUfCLQ812chBt7PwpmhmvYNKYYjY4FgeSqh86smiL",
  "key13": "S6mpujXH5Mi8mj8Gpy4HoFbVnfc719t6Jq8GsKQ9xM8c8oK2ccRPyM5Jg2GabYTXWeZddvNv2UGmw8W8d4tizSv",
  "key14": "2cbnB8xDGzNgUQ4HDwHTqN8UYs9An3LW26ap9hfmUPb3x6DZS8Cepq5ajVyGdJGqWzg3BjQpsFKPKVPNjch9inu4",
  "key15": "2XHrFHJSSYJLvBg15TWy9GqW3igY6Ygw4A4YpPFfDhPdqfYg33ddTLjvw6uyUyQgW1nx7hho3WpNX4syQRD6jRrP",
  "key16": "4sjKtB8F4nYceQfEyczJNLrH7513rA4LM9GyRrHQ7d6KzhJPj4s3d3ZEJWAGv9VEB8X8W6gxaLUBULWhFivofLUM",
  "key17": "2gyG1possC55SHom2iF3TwrsTFzSC1bxGzTSSATeBTLbY3zLvpB6kHAeZUU8ZxrEoTRw4nS9SWBzhu3dRE4ktrXg",
  "key18": "5X3pywxttFCMNqoq993vCkafzfkHgkzNKQNsUv31B2uuSYUJrtUtrsGDuDruHrEXVRFnhxgbbg2QMAAsagCik2UY",
  "key19": "6VPa3FypWP7wg6XqtKtd7WSEejMn3FXvtSg4p8GzJqMCNZUtVXwTZnwtc2od9uv8pA1ZiFN14LyyGRDSNm9mFhx",
  "key20": "56pMxzSQDvg3wVEWNNTS3hx8rqduB3beXh387XeFL5WwF2QAqiBiyEk1gcg9sekR6HRwg98QXSz8YVhBRWFTCmp2",
  "key21": "3oF4MFEGEfdWP8RDqoHsAmKJ4veP46A4Ei8bZog66P5nZs8tnmRdhGuFKvXn6vFJqrycy124xoBjZeTLzqGqbAAY",
  "key22": "XcGVauVmoJeWPvcprpTt7NwC8RGu2BvENyxCUNvAqZRt9q5ayqM5Aspz9dMgeq6gDHhRUTrhtsPzLRiRggUVedc",
  "key23": "4CJcdQSMjkbt9BfVZJMy2hpjDwtRBHMEfBeFjAMFVqmw4BBBLBMvQDfSBZzbKW2foREpoHYSRwxtx3FDNs5tvajv",
  "key24": "2yBiCAxZkX2sUovtDZ3zh5CzGfd7QcWoeTjTdRUJXgnZZpbfoJmN7u7zfxeZgibp4TWyXra5eJkq2PRrL1midie8",
  "key25": "tZdiZ4gyAMdXrZgZWWJQPaihc9M4MyJqsKrw9AieC6NpbBUPy2TPEE3LvFEog7X9M7kGNEUA4JNHJxwD3RkZTS6",
  "key26": "2JWhtHtq7fWhZEBHcaY1i7rg8s2bkmcMrYygheVKDSWhjZ224QpenUudmSyJP9sENYQGjEoxLzZCLKnuFixq27kG",
  "key27": "4B1dxQfxSMYQUYNDd4o7UnECdZT4FuEqT9cH7n29knEkXUZAHaKmjumAAZMHDdrs337emg31KQTAeFFNdbL1hzmD",
  "key28": "3MWRVNdWfzZ7opfSAeWacMPLf6oT8HcyCHTxfiKiKVQDrEbdDGXFjo25nm7Nvb3GL4CH4F2GcrPXMpNisdKgo1hd",
  "key29": "2vCyzYWg37pn1ZCjRumdetBbgkhz1KbiRTUvNnTRqqZ2QN5VyysCZXXhyQ9tbpdnVx6NH3LAjCWNBQz7Byu8mvy",
  "key30": "4f2PmiyFSRPGG5YzL67mUDkUQYPpo5RQiK4f95TsJwNZcDk2sy1rK3jn1seEoYWNKSnAKgz9EqYsQf73skFEUUo7",
  "key31": "4VsmCpYGEhrbdE4LBAkwHPwzEeGhze2pEWknRkP8ear3qjodzq42uhb2MJyMBRSSkyVB7fcddxwCK3Tp8RfBoqNa",
  "key32": "22fcwpFuoNFsnUvkuoat1cFSh9VFqVoaDeXbbHzh7TNMCKQBxJ7NPAhxfEXsaHBxu1wsfYtmFjJcQKdHmaRRN3cB",
  "key33": "2v8GZBwd6xW1isHsoh1EC2DzktryVMcMG1RT8ddwuTpm8FzFqW3GGqsP81WzmBGY7z4NJKtEwtA47qq8H7FvKXan",
  "key34": "2B73WASDPsGmaCZsiPaBxyDFbcG67GEiPsWCGmyTDFjpinXBh4JCVqWqUjPqJWptqekZLpcg4s7FbxcQach8Qu1F",
  "key35": "41jdxQZsuygQ1HVyZfMxMS4V7DPfoSc86hbyTS5TJZy7cCkeD1cQMeZaWDLPn9yRRTw4vpRQwa9nMAar2qaCeCYR",
  "key36": "toF9LjD5ZxauM63yBHq6c2xx1gqDMf4m5X9BARxV5A9nu3c2X25Ckd64nAEJMfQmVAEyk246Psg324ZBr2QeMJT",
  "key37": "39vjTqT6SR8NNpEuZkZBzskbQcx6TG1MKkV8tPyAqztrTw8oo6gTV7s8nTYDqNir1E5aMUTJmJzo7xjKEMFN2UQ2",
  "key38": "3YNmkSYEavy213yggWcRsSMfShmc1YsheG1auzcC1befrpRbPGfJpw6M1K9ZbHv8i6ejpJAYezFGCreTTeSRPbg4",
  "key39": "3iVQXaEbxSJ4YTGWXUZdafTb8jhJe1w24DFyfLKt5RCdCVGfSyqb2p9zrBB1fEnGK4uZ31fcAMdp5ctJtKCHgdVB",
  "key40": "55iSG9hjTzDpU9uiKuZt5ZU3r95rnDPvnpDxfa9a1Vr3A2W2x3eh6pXDFyDdiFkrwQXWV5G73DF7UxMDFNqYeYA6",
  "key41": "49anF2u9a7TCaZR653vCRJypacDcLrBijaPE2gZVrLHLr1Zm35fHm6qEF4HZffbfcHxMqjYixDSnzsZPozNztYJJ",
  "key42": "5b2krwA19P8YNMH8ZrojfMiQdGQj954ZhvoFY16CPgZAPWQTXo3bTMiYCn2nhdNFaULLLJSMc2DeFtgpXJFDaTvx",
  "key43": "2gaq1dNscF33WfkFoDdUABmSo5F9qV2AzpfFGE1QYQYHnL5VzV6hgvHC88ZGsBZ9rttNkK2uUnJvQZMKfdZshRoP",
  "key44": "QuAp1BuzR34WJH6g6rHYuhY7xF4NNrc7FG6w1Te8dkdCHdVoHdAUy3P6SsTJ35ppzjXUpnGPVffjkofL7RpW9NE",
  "key45": "45KNZRT6zmGes5RuHUAsAMi76RdQrPrj7JsmVHgPMdDu5pKmnuxJotGTbkV9AckM5UmBXmQEPW6gkrBEm3X7kByh",
  "key46": "5Chkc9X5gLhj8W64efQ76LGfx5fnS3TGxR7NRYE6SN5YcwEbqZHfgkYm93KTtWA493jgoNHg3NRBA4HBBzwt7QXo",
  "key47": "3QEUPQYQU9o49kXXmTdnks62RRuYqLAdeVDBUUo5cgSFUuHLAx3ux8ZCTbXwuaBcE6fugjh5ntzUDqjx5DtdBHie",
  "key48": "67PY4PB9qTNWjGze26uws11L1UNir7qhZG33ddU1rW6U6And4zsaXaQPGRypqYQSajkhLNoW2xJukyK5hiJma4G2",
  "key49": "THWDf3aed3xKGR55B9eoM8DApkUptoG8LjnWHqnum4WCuHf3GCSrZB7wQTbcLKrtYcD1pKqmW2VJbuRH2ax33Qo"
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
