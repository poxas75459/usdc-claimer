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
    "5YhiEkiX8VR4DQfpSeyTKuA7a3GpnvCFTuGxpqZae6fwZFU4qiu9BfcAqXW1GiJjxY7v8upJNxKPGvuSdTG2dYDU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mpuZbjU5Ev3vmjCn4TuPSjrZt16bW1YnSjhzQxei6hWdaStSnXi2DKvAWN1mEtHnbHCM4J4ootoKHv5iYH5yKae",
  "key1": "23jc39dvgZn1yxHfnZUkbNCoBfv35VTws78AxwHoHJFajx8mv1SBV31cfXvo7wV2nNvrpVCHheNQYUxLPqT1ZLzQ",
  "key2": "kpj6mproSZ1nEi4RbchFRNsmCYRkpBAXN953FY4G23zgqh66tYaczF1ewNgKckrwNfbcRFpUi3fNYryXyZgo6No",
  "key3": "45JwTnSvdarfFcZKHhpgTDATjyihfXJ5S9re2PJ8honxtZVsjY5DgTEaHQoXTSJFF4xWaExj8xnp6MnfiS5kfuF",
  "key4": "oU1P5yP5YPcC77K4KuDNYydNvtZDRdfrpddCXyao5eChv7iV2LDbLm9ADeobFeD5teVuuWqA4iMcou8Ba74XsF9",
  "key5": "2m6q6jhD5rJP4a3WCsyWYbi5teyP4Brvd45iRxw2amzkCqmsmaiz5urcXLfpemSF7X9jRo3i91ywrTfGMaszd54Q",
  "key6": "5mEhMFksXtXtHYKnbdHiEyvwxr8s44YTNeDi5w1ERvT5rgUJkH8h6VpYQbJsvYauWqAexzxq2BT4kRNCDoCESvam",
  "key7": "2ZavsFMoQ8xjZLzQvyHVgwfx5LE9erogwZw1vq9cKG8nUAojtjHjqk3EkbCL5hGoVcFsEsV5NX13Fvgtf5GKnggQ",
  "key8": "34SaFtMP91SFvfiWRycTtzGxn2sG2gMZgzYFXZSEdV7vkSA694QyZqsDp556PZ5ehkeZYGfJwcemgSbomdd8fxdW",
  "key9": "5KYpWsubUhdKLxz2tQYtS5EGQeQ9GrmN7n5ZuRPUG4wpaHGCnyHpCmSYsq3n8aVJEvhY3efqumtFzKGKCeCGy2Ax",
  "key10": "3KivMKAfezn8AFq3aNP8NtNNAk13knUxwMYghYRA7VBFTavnz65CXx9s1oLJswczDVGa4ADWPgi9DLCuRNgqbgrs",
  "key11": "5UPUoyDF3PtvnLw4tDe4xwHgyUy7Rcfsu9MvbJafeDBtCsnfG98mfu4yVx4Jh1BSFCXc348RghDvx4NQgchcvegv",
  "key12": "2o7ZcGpUgWGS9dQyqhiDG5D68BaVGkHgkeReHw3FJgn7MUTJUsNvRmcya8FpLFtZUtsa4ehzNV5oAP35Uq4BpYwL",
  "key13": "82QuDfVjV96639H8dcqsVhcjPaGX7LfTqD679BL3MXH7TA2icdSUog2gbbProXBYrX1UmEYrMJqh8sm71EZ9HqT",
  "key14": "ZWvJoboavV9RyctEXayTRfXSBJsgvZPpTgSnt3CY4F2WgYEEx6LGgSPiPhRcC59E19PJ4HwCyWPZJ481tKg1UQy",
  "key15": "3sgymhVh1D2dsNyWHrCjz9KXeSyQrUa1qmjfvAdaQ1NDW3bJqUxWXssWkaLVki6wyfqTqz6GmaTkW8eQbStcbMe",
  "key16": "7zCgh4sqxF7iYxnnuPuwLE3snNqrE3sK4VsmUyz6fckPYgTj3Ktr3ipU4Cqg4repN757T9uZYJwkmKhBkXshxZ1",
  "key17": "49fzGZTMaipNCjsCgbZ5roL3pZHdVGFxphvHy9x5L9sGREmzdTrxjMrrwGrNaQY2Yx2McWXQyT2auXW3XS5HuHzy",
  "key18": "56oCfTxEU7TVgLRHV2RQ75mxt5faJG9j7qd79Zg7fAbiW77N6S36CVdovqDfKBCJ2yynhfKM58DBSSYJMSJqhcs8",
  "key19": "5benEFNi8311fjQokMc6R5ArG2KpxGXY73mjnbkpiWGu6MmQroTzPH1zfR4P2fcoEg5RKD2vM4zdTSz5jeVJ4Q8G",
  "key20": "wQc6H7xqesdkc58WzcPANVT3jkc9sr2aYerSFT5WBS7PjxAvNHiJZdEnLUNn1hGYk3A1C6W9p52qzPen9i8Ny3s",
  "key21": "5JkqBQg6FzMMW5KWpPxKngBpf5s3k3ovyHLFYBdmVD8s9hVHa7CxgFyraQMGWAacxccmXS9niq4SK1JTsJCEjVk",
  "key22": "2tYipwCmyQA7GsyZN6bqPMwMyGaV5s6H6JypoiNazoj59hapfb6GY5tRgHAEzVymri1CAPFYXScFgYWkUrumHC1H",
  "key23": "4Nc5RjXED5zkUgNY5HAF9VVgntaiBPxZVKqQLDP1BSYuZPC5W5HwuPxb9PvYfDvysw8aUU3r8pqM4RiBxqBQuUcp",
  "key24": "5xYgK3ErxA5CP6BgJmg6PwZhvHFHUrwkPMXZdgVjbwXUrNp6ep8VE3cn57TszFxUnUzwaBefvxcC8RobY67a4TET",
  "key25": "3LK46jPHVeivgg2NbVmEXFjCf5kJWZyZopSJwxbCnvCguwS1CYmYT4W8wvYH79kDCnXmSBeaaUY4jaxWVd4dqTC4",
  "key26": "2DW72PsPPhL296GKVPqQszxqn9ecWjL4TvKigDYu7rQpThTFM8i123fwbSZz7Cta5PZvswd2Xukzq77LhoV4W42p",
  "key27": "5zW7anXkdZETMhufz729DxdCxFSMZ2FkeYzdz7jJeTbUFk8pA3p1ANYNUj7WZxCpKugan8QfdFirwJNA5hHPXEGn",
  "key28": "2wNSc9v67J1oNviCGWrN9xLhZSK8cYmTvP3GqGC6EqdAzgZtyakdiZszDAeWs4rPXrbHQum9Bgh9ggbiSjjZf2wc",
  "key29": "mGT7TG2QVYMMcBppVw1YkCtTohNdXKQ2bX7mCs8kQXzMVKgAUvdk9jPVNEThWDEK3xbvjbAQJwP17QhBBWFUyvR",
  "key30": "2tiEU3Mr53V8u97vWwbWXRFTAkUB5YKAhYpB1XGZU9F1c3M2YkqbiFqRk6W12NZUK8b5aqT6hmvivhgLdNsV7FSG",
  "key31": "UAvXwwz92DSFNo92U9fprYfNRPHBxE72fyTpLN3pFz3M45aYdigJZorNsoF1myLRV2zy9JnCtoBGZQZV1b5o2Dq",
  "key32": "4knZN35tLips5CvLGyF3u9LiHECS5aquscLcMTR5vKVJUUFqJ55bZUjwsjP9ECE5wHSmq64xHQHhJocva7NzjBAz",
  "key33": "4xc4NkUm5XxWokWQKyFs4auuXRSVnqGMJHU8S8ZmnV9kUCoKmE3dcVPrVjTiRtQF7BnQJKTwnGnCPADFCiiwGVag",
  "key34": "33g8iMSQip7AbEtjCvoEG7TLfshAwfuhTJSkxj925fWCyA6JLfYiP9inuQtp1oKt9oyPK3i8RxPPPbAtdxKmh1xK",
  "key35": "DHSgRGF9axgAKsYXj463cWc6pwXKiQxK6jHeLpVKC9W8XHYWnvoHavvLWSdrLfnKwFefNh6Wt2YHuqTRohR5nTf",
  "key36": "3yV6Mk35VDdyuBDvb9RyYaQmuBUeDq3qEgrQxBeNxtXmRoxzfkRyKh2w4LPXmHt42X3QZENdeo5SgKP6LfbKdzoY",
  "key37": "2CQyfSGrXH8fKrvGRiMU3BC1TnpJbnyKwiAYKcp2PEr83sstqrMa1PZH52vJwzUH4Nkw7e5M6DPKwyxDsDtQrJdM",
  "key38": "E8RbbDZD2dvALWccw76xcyUJNsBHP5GFnZm4ouMwSuhwUqsah7mQsukJDWMw2ALAvcSMGVo7Wx1jStPgJggmzAB",
  "key39": "55vbKsfVuhSxzoXcg2FoTow9BxKkdw97v4itNBLNTT5ViT1KKpWGMkVwuVeRmrEdYmhAbxwh6za9f7RLaP3gBhe6",
  "key40": "5hT3KBHEArh32uTPxKf1pmXDyKsoGNm6GW8HWd8XFce8tYSkV4jnXznyfgA3DpVMRo6z8ZmPGAuY8wHsbxuV7hWH",
  "key41": "A6TzRbKPywhJoRNNPNACEwiDgiamphDBmCUEzac5abXJDxQNTxrV7YvceBQsPZ6HiwZF8Tw7GRuGTGZ4uo3RaTv"
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
