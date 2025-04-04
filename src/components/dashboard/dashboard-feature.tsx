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
    "3npfyHYisq4HKgMuYZD6VNZvZwcQRV3NiUNpvHf52MYQtCkszRx7cwPt66LxXb8SwUN16aBqyKk44jsXsBZqzX7c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xABznqUYDt87PttmPUJ3VtDxW2cYFzHJdAWE1uXSzex2LCsDj8jSZbj8JpwndeVxY2k3Xo9Fz94B6UttdHytmvK",
  "key1": "626eNR7hcCsjTZpa5L6nhgGUHAoKvkkhyDNkhPGa11WvRJvm9UnvCDvuN41iNh19VTTY2PJKwC2s7GJhyad5sF29",
  "key2": "5rbvqPobJiLHAouZLwVmpdcE31EpNYJqKfQEttxEwV4ecKn9MDHYReFz3tNpbJDSavAiQTi1bTnBXCa4ggYr65nT",
  "key3": "ZALiNqap1WTLxx3pKNwphSnftAfdtRq4pXwNuebEGfyeGR5CkbGgvajFALhccLmVM642xV9jsKfuhUR8aHB2m9C",
  "key4": "5nXk596jW7XyVL8fTxgNpg8JKbZ3wH3Ctounoc989pSpuWkqCZZLmJSGB15A6pFvvsRBkKDX7FRzNTdF2W6YN9VU",
  "key5": "44q7QtnG9cJHFNMhtrFMiHsYqNQojFEFgxUv5Smw1VMwwUUTTgYXkztoTkgjTp9R78P4ow64W6wGfVMdYhthcfyn",
  "key6": "3KF3t2WKYJERX2t6GdMk6pjJfaZDnpbaj6kuw88tzjTLDYfHtwxx8dzFNGPQ6suxaT3RaCAs9RAu8PPwUJ9C7vZm",
  "key7": "4nJwAw1qmb1pFtJ8ie2j9szekizE6PAvNReLT4TnNcQXGcccNa48LCLd1XoiqP8poVK7ZJMuZfJfPhoQcPb5dqGY",
  "key8": "49EsZMxmBMkyTSAhnS89GiEdQpuycAE8t9HGSzMtqNriQRsdeEqg3BwSxiP6Tg9dNMxWA5dbbev2cJBQKWezSBRV",
  "key9": "42eeXnzgGRvbHTgd8UiezoNJ3E7wKcVCubEuMn4X6mBVLtMwspAS7KvsXPwKAsazDpwt4hAdGYwnQGgq4MdBzKbJ",
  "key10": "4cjoYMgixdBStsZwVbRiXTUPGMdpLwRxq71d9nEKGcCCLGboedrCdyRDczR3QuDN9pgsQdrCn4Fx3zTnx6zjn6Po",
  "key11": "3QFfP8DMJBC5miyZNFoWQN2osKsJBrzimM2pDgD15b6asg3p4mmGs4X2qy4ptK9r55RAddUwqUHt86EyGPPZCpjm",
  "key12": "24rfuus8Qhi9ueDLHuAL2VAuB4faqUut9YTLUKeAnaiZJo3V2feB1WhKydLkkHYbVo8o8Uz3atb83ouAXHbBwQXe",
  "key13": "6397K1ewWBjXmFPf74xFp1TKfPPaLPtrN1Gv9bq1UrtpNKB6TZ3Li7dbTQJnmcfqi8PWVB68k2ehGR12ChXNAZyg",
  "key14": "3Mf7q7jL7Qdi5hkjjtFZhg2H4yfD8jkd6195ZinGDDDSQuXEgphoAaSKzeWVmoVM6bBvEh6ryrKVzX6kbTPnGe4W",
  "key15": "44gG224g34QHC1jwWBGTZiXPpDLmn11Xp1WZ6HvXaqraJmVJvQRBUE8o4psWzEhiyj3UrGSZqJqXYVXKici9e9oU",
  "key16": "2ZjvHeUvYtgtyDvWPKtcXTrTfr6cpArShyzeXiPNW2piVucGSzGqoAysFroTXanRHZg8zG3PnRE91CknsaKFUWFs",
  "key17": "4WPEFRiVc5V9RzDb4zQeawoLB2FaLU4pRW6soeXmpnMi7dTuUjPTv9thUbk5j2JXbdMVFwYFQ2pX7wazvCyHQPwd",
  "key18": "4HosmwBHNuffwaGtur17aBxKDps2xzZmmodoAqgJWPY5PEx65WdbPz44Hbk4EXFTvKQPFA5Q6FB83arm52sZKkTh",
  "key19": "3ctT6uoEEFP7DuVePvD71ahPqGtsH2QFR9VWb8jkmxNjTN6M6D8WAXAbC9XncgznW2N7gbhMH3RQ8nPVfieGLCdM",
  "key20": "4WF8CEjMqP7BiaNDGRB9mcwMVQgytSQQSGt6RPG5pGhyvVKkehVTnzrsayigbS6F2k3DSm33n8YJve6AvVX64cry",
  "key21": "3o7iu9mUCbp4rWGEuEAKLfcjDWCGe5h7BjXJeyfnCQoiixjFXDerdLATbxWePu6v3BdE7f7mkvJyT1cQjoVQJAST",
  "key22": "3FoUSJf7UUsVWgYVeEiP9MsG17s4cRjX72Cq38JusUA96n3vEyezRY3xErQEiA5UxZ3YenBrMU2DpK1dNfFehBmY",
  "key23": "39UEvKjsGcbX4McTKwd3dsVKJLWegBgueaxgiQLWzDNax2FSvN4kFGqDg3KJGkAtBHZMNyFLkcBXghpSnBvKxLmW",
  "key24": "5KhyzGmn15EHomZJhSZfauuvPfgQ5xCrQh8THRo68Gf4WYVFA6GdPSMDcFWeNMcZD7pRt2Vap4QTpp34h7N8BGFn",
  "key25": "3xHY5qmK2DTB1BvgfaH5jduDz4yknnueD9yentoZk9VPMpicqwyYGnE3DuzGmaz3djgcFzhPQCdy9u9KvFq2Y58C",
  "key26": "2A4Q8i59X5DsiQT6U3QtvLNqsqxh3Taa6QyUCZXdqVVYD1WDXhym5BTqYqt1WgdJeiB7oT79p2twmqnx1PWMNQy8",
  "key27": "2RApph9ksAUE2kohn7fBdxxjD8rAi18UnUMx114oeDBDrDm28YqAJMXAvhktaZyWeYEusUMAhPqN9EoLPCF8edby",
  "key28": "3u5WDtStLHhbf6nZeqYExCXgjJKf5gm76JiiAT99xaAdz2rNB7oyesUZSUrP2NBxAUj2rrzfV7SkfdMseSXiH5Vv",
  "key29": "5DpFRtSDaQtXyRBH9apzPhPXFmAT2MwbwVMxvJXy3oqGPFjBXK8RViwJ3iRWrGqacUgASgjqmbXKaEV6VYrKfpWZ",
  "key30": "2Y6kMdMbBx35s87Ymzpx1vTZu6tyXku16xf3N5Nm3LuvuZLtwAwbwA1YqThpKMV4UsHdbyYXq6Zq9WVLEfQcXqwZ",
  "key31": "7Ta2Kquug6W8pF1rYrhEgCHbHjHJXDCUgAdA6sb8fFozU4X1AsYjyz1k7JMV3qDm4rCj15N3MaviGvBN7YB6eAL",
  "key32": "2s7UixtZchrJ8Nfg1N7UPzYXbvDaysNDKoxDdh7QZueVdcBbxfkzbBEct86KngWBPVqP4ZfmHGQDcY8wGHDLSqFS",
  "key33": "4MrQE9jREaJtCMPm6VsA5ZaS3mqRyxRaZKvS811vzpxRZEQzkmgU8JpkVSby6rfauE4PGYsViuMu7MTqwKAoaMdA",
  "key34": "sRRH72V1a2Pcpvo6K4jQpYop2dbAUixgUFx66AH1hKrzgmmFz7qBK3rBaDLZrW8auqVKR6nEAkh7dng5JwGZFFk"
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
