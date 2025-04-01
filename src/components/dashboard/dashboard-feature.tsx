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
    "3o8CrUudoDtxrGzh88qv5Y1ASfqNwaMKPutyAcTs7N3rX8cE9hMMuzK1YECy1URoYV3cmJHFM93mX98GYxCcUJip"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WxnmRVkLTVCN5fruR4tV9CTpp1YYMvcgHBp8Hz8LfgKA8qF2kyYdx2gZEhSyMfz2RveG116bRToNYK5hTdsB961",
  "key1": "4BM7kNJhT4nyP4NxuEvGrkJidYnMYWZdxLCtbaWb4aA4haF4BCXuTDLT1FCLHn4HGh2ZJ5qThcPEzB2jYmpjbRLp",
  "key2": "2ABJPCwrAZX79C1rE8oUN5DkpgwrHKGupSJhh48qWpvgEwofk7Yawd7TutTeTyDGKmW98QY9tLEMGXoL16wFhwN9",
  "key3": "5vMPLUPYRN1deMFyMTSDpFExDgwF2XmA6zJEDo1KRP4ggnHXHx6bHkvtFCHuGjgdMizQzS4XyFE875JGcbq2hZYX",
  "key4": "3tgTtoPgVrMsmaLE5EU3dPcGvjkfqNcsKRcghG1F1xyrtW2KrQ2Hd4TgDXVJyjk14R6URSGVCXMU159JQrnhBa2s",
  "key5": "cXR11r7tKpXWjzFWNhfjQjwL9aiCFFzi8YgnpAQUp1CUVo6BLrPsVyjUBv3bSoHZDYKd892k3LJ6JxeBv6dZt2G",
  "key6": "4HNxPtMWrMBnRj2fQ2PkU4xT2rq3zStKNvxFzo1THJPYXMCbiTAHeYCr7cNPWawFXjpUti6f7djwSLnUiB5phEnR",
  "key7": "2PrPDiAM9zqRuoyEp8yZgHUFx8fhrDPZyzsgVyk7DosBnLu9VE4ekmWi6BD9Htu3vo5jVmhd6vfxHNT7yxDqu6bd",
  "key8": "XSLD24UZiGn1vXbgZHyswbAtitVrxGY4qPtXSN9wEtj484dCtcSoq1J8RLgEpqzcXRPWAKa6SCmT1oJFBSFAfaj",
  "key9": "2rWNGQsqGa49ho5SDp78kwbEbnmBQUzBTdyh9ve8xLKSiXYRRRyccdmLwurEe3S5BqJanuMQdjsbpmvESYRvdnNc",
  "key10": "4kg1CPdKGhB2H4o95KBLT4pWhF1W2EBhU1fGWENLVEEUzGA7HgarnH4muEdTM3twGZ4CkTgjbtKtgw9nQmWFhULy",
  "key11": "2sZYtBc99CeGKiSb4ULXSupmQQHiwN4U4UP5kUVPw7zBqW5zj3ipiVnvrEuhu9vm5pGPjo4RF8SimFbReT9WpWuU",
  "key12": "4hrGSQLWZzUWyM5RKEBr7vP988i7b3YL6jXgXgrJ3WP6oF1wQ1isH2H8vNHLo8fh27X7p93iJEYPPz7mXdLYTBeo",
  "key13": "45jcQbTMDwKQZux1v274oGdoH4uLaQYUtzNJcQy571VmUDDtQEHGD6ZNJW7QXFoH8jgzheB1zK2p1uAzMP62krCV",
  "key14": "51yjDmFYaQf4fgLGt58vhJcp3ooR9Heuhe2BPFjfTd28u2ckdm4kS7uiL6NVy5TomsSxFpJ2S7L8KuAXFBmTV9rs",
  "key15": "4vE658pZgEoqroDMvzFuj657ab4cherniaCk32fQqGg46836D3JTu8tgxRL6bZY1YHPjZpdbCvoozEgbP6Yju5YL",
  "key16": "5eg6ERv41NCzkUQrNtt7ix7LVBfcDHFmqNy5CbnbBc2Y4y6sowPc2zspZuas2gySUvAYAytxuyYqi5QxpSvF9T6a",
  "key17": "2NEoW9APcNBtWGtHWzrsNnhjAKaqxpntqucaiSuM6Pr4sJaSbaG79eZFWkmpdQPJSv5EiE9oy4c9FtaGwMNQvwNm",
  "key18": "5xune7SbT83XipDD7wMakBmrgiA1sMNQoR7wEXrq9Xn3EsLFRp3FJfHrqAWQetRhFdzuUtN2jf7RhyStvPdkjRvt",
  "key19": "2aZREEzGxY2Noqy4Bw8bMfcBAvdKek8xC4Mo2BiJ53MLicKUyxAzngjVPJP7VJEMGUmkJgvyo6cegR1rgmSu4Zny",
  "key20": "4GSw8oZ67Ph1EVEy438kcBewouwPSazzv6ggZRrtKMpmnBzUvqSD3PzjTy8LTDrYkVp5udtWCeeWKSB1FuD7USwf",
  "key21": "4gqA2SUfiPtp3zapmhndcSmRxB8uRuxACs3Q1XsfRfLqC7mA4tBMsT97JibxFRxCGFRUoiGnqmTWEnfTxCJbJnVz",
  "key22": "44EWh8uw6nqqk91xSxNHMaHjzJAUhptcMPX18yKtstX9APciyQ6yp2zr2h8ZVbY6JUb67TUuDy8EGXEbCNT5Gi5d",
  "key23": "4HHuECmNwkkJKMuZn1fwMTrTRrcpfhEAinVQBaa5zgTWNkeFgqssdMgp3CXszNSoFaiwVar61UDZPFSVpm9p4ovR",
  "key24": "2hGm9hZJsKnjsgBZ7oymY9e42mJDG66Wx3unXQ2ks3LjE8gdhBfAUgxVnVNJWJcExv52XHvyt4WxVxWrBWX2K58Z",
  "key25": "617GWbjkt57UdoUbgZjwhWh7o7tUN4TaBn6W8xdVfkJf8umaCjbqb2iNZPaAaoS9hQz6Ny2fCPKaw8cTbCdgPNxV",
  "key26": "pZciE2tmLHRS3srfxZyZwkAFcky7RdLmDt9vPUunGWhmSx4okz2zidSpzfU1n9hv7DX9dQGQAN8BKmMShkVEkSj",
  "key27": "2yyPDMsp9Xho8wtx77uSpFkQv4msF2r9wyDqqLLJe7ToeaCf1ULLf8R9k4RchDZWB9SGKyt5cLznfgbprfutXqnH",
  "key28": "uc8agiZFXA37Gc9tXZiZuo9yAR2ZxChmXJfoW9NwheTVarPFTdE47fDU3H2QNmt6wiPvYaAJVHuCBrrirV1u6Kv",
  "key29": "2AKCDwjPgNsQyuGWZQt5bsiVXoqrAThP9rhfku8aPiv5hvhkWmjpQkwnr3Yb3G1ThyWSEhcWyTfudNwZk3VEHWMK",
  "key30": "55MNqnynw6zN7zdH49Qsg9pxJi3og7CSQYAF3V8HWAanMW4ZezTgUi8GND5P8K4NtkNcvB3ENpz1LFNFDGA544F7",
  "key31": "66xozkbLiHk2iDkVWeyqSWPFMC2duHgdqWfSKftEedFvVHPfobtALCAmm8JdHmsc5ysJX6KLCQEENfaJCNaGLcxx",
  "key32": "3k7fUXvj3Xq3vz8WNovTjxSWr7bcQaZ8hczfgnrxhLQ9JE3WFJFHTLX6khv6S2gvb5HQrd45C15KV3vJw5KBzESw",
  "key33": "2CAE4etEZzMmbRqjBPifjCYEnM9zkb163xy5X1XxTHFkU9CLN47NjjbLGcGLYWjDFWzm8k7ecJcNXRnvMoYUC2WG",
  "key34": "5F5KXVKTaw4MV9kC5JGtwZFNxBtmFgwnirUfVHqEkXssApcDUEEjKjRbQJW673wLubNfnMU9fVGFJruGPdnRv97o",
  "key35": "22rsYqxHvak8zbn5NcLkioxYvu9jsNcH1Xk7CiyebQKSynTz8mji3o9sn5kPapsHrF2RJVxDweQL3koTcWfCuxym",
  "key36": "5uhP6G8qXfaTwdU3YULbKH1LnfLWPbfLPcoNhD9NrW5qSn47B1UeM5nQjimmE5yKDQSQ7pdSCYUMXviGg1LNa7bo",
  "key37": "3nyntTKujyb5NAF52yvwF1yThxRZpzTT6bDBYbMVJqnXsVKyoa5BPb7SUNo6NdwcHDXfUc8kbQoK8QEVf9vGxJw9",
  "key38": "4u5HGvTEeypQV3d6WTM22LMLbSAQAg91RyvkjCTDdftPYuyiR5u44STwEu68YCDQKWwoHZU2PpM6hA8nrSMYD1bc",
  "key39": "2p9mGdL1AsXJqnbkAAAhbmAdjaNBqschR6e71FmPVMB4KMhcdRpYNbeQV7CgqEdUkcHJcFUJZZCVsabhRQbBxmKf",
  "key40": "2pqYFz74cUTPRMgpcHZGaRS8Dg4hGnPVjtVK2qiPjRXdhnQ6crwYJmXcwqjaibhbdUYoHRhTjEHwi4dhWVbD1iJ1",
  "key41": "5RzkpzwY19PQpabfiu9J7iXbURBQRti3u4d9Nw2YszkpNpTEwEhdoyhZXoZ4ATWV7UJz3CY9FDut2x9x3MBkHMaV",
  "key42": "m1wHcqnsV9bYF62gRdQJjkQuKZn7H6mFgCMfXKyGxkL9zuoDUJLAcjM58NhqGkEGLRLFD5nBE47d8BwxTNBNV8K",
  "key43": "2dq8LhHFtrXoRvK6aLE9SkPR83n82DaYc5iHPXVyfYRB7B7KvfJzCHxmKMEgBqikvD7c7mbd2AqMh6auaAmZ98BG",
  "key44": "4xJpCik4ZfPgHRWPkKayZu3kygzz6cyvS1pzfSBfADNcuuD4DBSk839F7ZiRf2cmNibWadk596gMwiZu4yYuC4mZ",
  "key45": "4MrF28nr3DMr5c5ZwhWhFqN42VNAjALouauowRPm917N2GYzRrUm9EbMeu2d2VdZChXARxTFSb5rUdedLMp3jZ6d",
  "key46": "3EzE3WGx8xYGJt4Vmm2RUpySidLxUhr8VrcJ7ptaafPRqbTLQjcksLooRjnTogSMRMRCKx7126vkh9e46ous8Evn"
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
