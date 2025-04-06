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
    "4mzyzyuWjjmW9t27EVUGDhA5rXHjsXNrBwP7pZQeZJvZ2fdGrp5A2hiELFERgtbPhjUToA9qNYNCa8LAu3HFDb3R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NsB4yzn89fmuzMkhnUt2JiAGDxD3NwTw3aKABszoutPFPoNvz1kE1YhjR7wcjrifV4vitd2kyFvSZTzUjVpfLfr",
  "key1": "3SEeHJnPwixkfhTsJJs1nto2ouCLv7BPGf9N7bG1FyTz4XRQahZ8HM5XHqCHM6zFN8k74t8ySE1619sNzUL4oEuo",
  "key2": "2qtjDZRJCZh7ryAhhoFMgiBZojqRPBztjh8SZe2GchjFuS1hY5RVNJCVs3sqt9CoEjTUKSeGxPJKUnZwdJMN4eYc",
  "key3": "3MvPevXHLbtHnPmDyLYosgWSdWgGzRTqQyDBjZxqhKtGjsqiYK8GcawDpbeaLinmdVWUoMShUD5kjGagBsqSsRpM",
  "key4": "3g32emnVKRPtqLw5UDRAxMVBKpshVS5WWG7brJeQbvrH52kvPJy5ZNgctiPcLfuwPMuiExeXfGHVCbk8PTbEJASu",
  "key5": "UL2pYgMtZTLvSkbuEuxYPciCoyRgyokWKdnV4Zsx5t4iJbgiBYPqV7LGex4gxY12D6PX5PuXHDaZtpXqhGx6yLv",
  "key6": "CkKG6wVYFVkNQkgQ1CZiFaNKizWRAQNMiQe3nf1kvXBk9F4LEe3sajVM6XQajw5AmozSFNCrSf7sm3wuqjhWhe7",
  "key7": "3PkePaSdxceFKfJAVHYTqPNJe5pAy7v3QREasczXPYoe84x674nYb8zitb2ho8dh5ugzMw9CeJoDHf5B86GSd1Zc",
  "key8": "FdLjk2JubhFqd6CgecqHDSo98uWtWPKnfdYLQVzkMURsktcd1smdUBVGFMCFCUsAK7jyXqTfqasKutUqzmayfiq",
  "key9": "2xHMx4JWqCRSViZh2CfdgQkWMgTHfBjacpChGmvuJ2ty8THzrpm88svZjPqzG1fTKvzLeRPYR4vvdb9ZmbbN9J19",
  "key10": "5VfgYmRt8NnmnUeLv1nyy1yHYtcanFABChUBgckYWj9ncyashAYZD5YRjUtXnavht16R7bhAJTQJsvQx3FopWimo",
  "key11": "2ZjWLp9Samx42Cq3k1n8LEuYNWa9eSxjD61zmMr5UPQ8ZgeBiQ8kFUFY9tusTnzGbqVmt9yGVWoWMocywLmAisKn",
  "key12": "49fG7Tv2tAcxG91eJ6payJH67xCEKXHwZaG63Ghw5e6CeNB1awZMt6BXNHR88BzKDPX12JQtWpF819o7nPq7CNx1",
  "key13": "4mmNKJVo1aRnG9CJmbkeBH9qQ72JrQiq1BN5TfDrBwJfA1qoJCgowXcCaRT47eUr1pGAE7XbPDQz6ces9bVd1i8Q",
  "key14": "37zEjg1z1H6oHmW7EhabQzF5UTViL9E3uCmXcVsf6BG4ogd1prVLcZ9kjrLd8B97iTbSRu1PLJ3JkVyHcWKk1Ppe",
  "key15": "Vi1hPYPNcSTLf8MtDBvtrrzHqEf5WjiZzxa9Q6nFTPjrKC9zdQS46h2mWuk3PBENGXPxUvG3pBZnZcZtuptrfx8",
  "key16": "2jCAzZAmVqGwfEdbDiRMwonhcfZGPXNwgAoMfB8kH6atGG9imVp4czvbe9pen9QzNg2ysK1FcWb6LBLpGXoCV5G8",
  "key17": "4GCjASZuhw3QtYyojkymrYqAsHHRyYQ9NWWGgQBxJ1dwkXVJ1eXpDjrAydsHtyE8PEyT14FN9XWvBqhHBKJ2sGLU",
  "key18": "494J3N8N567FX5krBVFK7ybgcTxPihKJi5riMJxL8naDnBDLk8DwW14gmYRLj2KxixyRs2i8qyA5s3AJXxRXtmiT",
  "key19": "4AQ6FQtMifQXWioZSATEz5rhPJJFDeAoLnGxd9g4HmTuYArKaa5PB1vbwskuLEHpwarreAqntDcVenkfDFpws8ag",
  "key20": "9i2YPmHoCN9xV47nYdwa24XZ4CSJdQxQnphq2DCGWZM6G5BeoutHR6TNUrRuxMsWkMJqXVEpxR6onKyv2me73Yw",
  "key21": "42j5RJyoceRYu63LvNJ1pc4k5R1Ep3FJ8c53dXWnhALU6WNrKPXSYUgACFPN1uiXKvdMb5Pv3DvMnjrHCByRbcCT",
  "key22": "3j9wP49NKLgZWsC8RgqHu1kpMq4qwV7yaAxiPsxrXeJKtGHbPcPBAybrsYxgDnCggMMdnTmucNXa8aFjZQB9Crmk",
  "key23": "TKNm48cMF4AkAzdG8BDvavTuMMvB9SE6ehCXbDgfSm88dz4K829jUqu1ZZb4WCPA384GpkShx4RGBbjYD8UtxMc",
  "key24": "3KWWe9vajxqceREUDcsgVwGg2kTESjhjVrFVW2AxZyotu155ZZUtPjzrDH3wZtkkjNXZgFPbDxck6tBVM3sxAQh",
  "key25": "5oWV5ECS7B5knJm15TprHgzzjnhtvAhRbSvVhVyiPhY4zrjZUVJh1qukr2L5dNsVnrDiyFVXH1LzEFjQspZzHi5Z",
  "key26": "2cV8bErfWeTVg1R2C6WLKRv6SW9mZ5ooiesFT6suKYSMgBAbVHQWBdz5jTjCnv7NpaKDNT3iNrWUbQjg2BqFMsv5",
  "key27": "5bvQv5X19vabLVbNftNtv867vZVx2DxPJP6RwjFzXmiur3GEV63e8RmfcXdbm1tyemt4vgn2zdFYxsVShRK1b8GX",
  "key28": "4bxyjcQUXomK4gG65eSGhQuq3uNQkhYu23LJcAsu6mi4UgC4JRmRGiiWwTbGWnXb2MpBqtt17qeJYJa37dUUNUB3",
  "key29": "4DHdkgkeppyM46MdzoDKkfX29NbssRxRkqrEV2ez1P3uBNmSikTNpHZG9tHQH1Ms9A4NdiiLj4tVcetoF652wo32",
  "key30": "39C1aE7mjGhBxbzrqK3chEARnooHZ8Y5AMLY57cGyT1ckJJVfmRSSYMCg2fG4G8DqhaRVNpydBjpaR6VN8QWJNRC",
  "key31": "iZk5yXWawgWKV6Wno3HTY58YKrK8abhSyUbshEN3v8FH41bcpNasBe4vtsFTa2rzd1v3k7v8GEDPA34gz7kAr18",
  "key32": "5nD7ioawEgQUKHor3U6DmVkAHyvnDeAVozdJ3NabndDAiDiq1sXsvWoihnUXUd1f9VP5yFDWzKiDJaj9hsUgfUPM",
  "key33": "2invhL9u6SRYcDkNCLZdi7eut92iSn5SxTmZCL3YYbc24vEQVFc9xG8FgyGXuPDJaehKPgAnzd1to8rEQgpMXDq7",
  "key34": "3P5LYsqyuPPachWgC6nvpyiaDm2uqq8YjuDymdihXueSVrGfDmrX5zC4oA4BMP1ohGoFLCjLJDXq2hCzbk1JVjP1",
  "key35": "4p5Be7whmrCjvpmyCjodSLavs1iE516yVpAPtGqvGxcDEZCEGKgctD9AZXZijPz7Vdnm6Y9FikbtZweDzbk27eVF",
  "key36": "2pvJKyJop4mBGeNgxNCmkjiHPt8DSgjQtnuxPq8kHXYQt8xiTixUfnpoDYvBJoiKYvJGfmKHMz9CgmUMijeeMTgv",
  "key37": "2FV2MTNwQ5NXqwCGd7ZNKw8RpEsPoC1yCwTTbrGRqGTrpJ3dr2xjYDJNgZixVgNDMBUY33gJq7yiFNabdbZhgiXL",
  "key38": "5qPDpEgz8eMh6N7u2PVDdbxkRXutetB8vxfC2J4EfKxaUo6QgL1PKjvABxLxWbNo6FQf4huJZ3PvCka2iT9a4rNx",
  "key39": "P6D4xTxMtw2TFFbmCws3M55apHmnRV1mW8HNX7Hk3ETQszKWZtZNHvscVx3yfGAFvpoBDi19Drbi1Ty3cEe7zhE",
  "key40": "ujmcAuoVwppWzvXPR4yLfzMWdTNKkpVzsxLW3prz8VYoWVaMBPi339MN4dqgwrPhSf1QYpiS11PMSzm4S7nwhJz",
  "key41": "2vFBZU5QBuaoHrsodZdREQA5UJ7fTUvX56WFGjgpDWU2TC7ktSgxEUwVmxom6UcLjAnYPxWr89DKShSZQ79GwcQT",
  "key42": "2eHUb6su7soYr1T4CSA6x13ojoZoNoNEZYRbNBTbdXueFFekrGagwZEtzCihHBoVELq5AZoJ86Q4iTVZf52S91z2",
  "key43": "3mPYRCBxJgzxpPrAe6svy62mEyFAwjTn8cu5eRLUSaV8MWPY3AjpgeKQXvQfrvufmy47oC847AbqgLpezUqipWt1",
  "key44": "3Wt2WhNBwrc1DQRAhiG1aFkPztNiUCPRvtfsd5i4EY3LuuZWKfvsBCLoWcoahsm1PRREdLptWTVEUTKdUiBZZRfV",
  "key45": "3dJrwCCf26FjzA1eTVnFCHifVjAWBYcEeEd6PeSt7w4ubyUd1PcmeSpZfm8ozLvqFiQKGQyZtkMrECLB6Xt96FTi",
  "key46": "3Ju838Gm5oBYPoEtxd7F1bHXNuVySgkUBHJstyRnJLXSG5BBb4uU8GePqXipT9Xhcy2ed6KvXp81dDWZYwampgrD",
  "key47": "L6D2vcxmp55sTrtMkJD1a9GRiHmdhk3J9gxdiEmZKxorZdLgNG83SA9icqXe5UczKZ3ZPkJikiDHv8dkvX6togL",
  "key48": "5X15asHZHvNF5PZBrGwPiXpMJrbgtYqNdXT15dCtpBtUmsFsx4jPrDPeDFbYAtjefS36Pa4chc6xXbF8jvtRjUCt"
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
