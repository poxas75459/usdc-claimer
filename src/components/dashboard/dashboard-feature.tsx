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
    "5ty35hC9Sdv4yCZUYNs7GyiYsuaHy5zYNHf2GLHRrongzZvFWafn9KySv4JXBPQUhoQpxYGdu8ovs6SkB6tPLnaz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "623E67LTseKKTKsmCSUNaCEFZMhiziKwZwBHArvtX6eN1BsG9P8ECqH3xd5KRoNirsAs5ZGCt7yEUQfoijbuP7Z7",
  "key1": "2GrvVpkTpSm5U47bqi8jjjgg8VRLqyQo698kVWZZf4qRQm8mWfidYvX5eEgsz3K811ZiwWuwp3H1eTGy83swTJB2",
  "key2": "2AfFr7KCCvDKnbCmTajxh2qydWZzxd9BA7NumKh4mdx6EfSzWXBNaQxRLMzPnaTGZjjsSHozZjja7hYCA67ziErp",
  "key3": "4tCvMageGkRphpdxYCAfmFBeFH1abhaN9ajhaRNTUrmUnSv4mp2fYeEwagAPV7Bh1wyijVZcMYcqArBPhKSqGn34",
  "key4": "5mVn5ezLNFxsCPnyugZxZr5KHUJixQuyTuPBtRmhh9LVtHUjPwx2yiQeb8FBUg5pw3byMw6dNLHjqVonAjgBE3J9",
  "key5": "4MGrp5zvfNrQBLa68ivtpvKuoJXCainzLjfhFLvJBNuTw17UP8GsFD3DczSskJhNDwKxwdPH4dDEYcuXnt1h6yqw",
  "key6": "3EiyFJ9xB3mKSBcTtyMdmf4qzNVvcdMnRbEsvsowkdNrReXxgVF52XK42FhcKWfA6toJk7SwQ4St71yCTZNYMqMe",
  "key7": "RxfmsU1hz8xHapz74vPHSTjPVg3J9XLH8dP3tnBMaTi4notS1ueMvspafxSQvGtq4A9tdNdGfHPtSXT8E7zes7h",
  "key8": "4AwXzvcF9Ragi8uA1G1n8FZH6Tuvm3NZ3dN6VmQPcL7J1dxsFXqV9LaEwrQQvf31FffGc8g2hxwgsXN5qMyhhrHn",
  "key9": "5KiWa9vJuQpQMZi9zynWLoNxKsGMnNVpt62ePaLmR1x8BMWn5jjRUqY4bcBjRcd3Xcmuvm4HUvBDzDfdzK4G5LWF",
  "key10": "JZA4m1p79YvaDyYxFsYpiEqHivx1RiQpqNNy2Aj7voNS7ZysUnKFuyPsxyjbHquSrYytW2APQjCPAMkeBtzaH6Q",
  "key11": "2sX8gywspYdLxK7kxiXsCa6e84nKBFY97zgEB1F2KWpXY1LNqLEUtRhu8URaLNGBWMarAMosKuYJUDy1YtdSS4uA",
  "key12": "y7qyYBiziKBP5a4ikGDZfwCp2bvFhQJkN3ZX54qskURREW2zifYTy2pGhsXpNq5nLpViPVgwchdbSDHACWa2C2n",
  "key13": "eAz88jZ72aDbLhuQJyMU42NgYJYD4Y6vxgfGJkAr6KFqLaDhPfvzgprGGtLz4ZZLCYSZTHaBhs8SpqfGYdx23pm",
  "key14": "4pLRuC4P5EGzJuKgZtrp85z1WHyYd4aVK8DciTgTmcp4Bjuc5xWQKBe22JBYscVx4TcvHd5MXPUZeMYj2PJzycBH",
  "key15": "x9sTmmCN8nT6DYPKi5DNn8wW66jGwEKCJKyqFjUjXuD1Z3MdMD7AbmaNMTb865daozRBAKy89ii6NNrC9xPUhC4",
  "key16": "gpxJFC3PeewSTssCAYFNR9pt7dwtSixa17gUq6NADgZ3kkzzniUe5HVv9gG7kxrj6nAgoVPhHjocBRCXsAb51AB",
  "key17": "4511yeZa8ffjUCPeEVqxc2MJKuo4GkwoZLDWCq6FypeEgN5W7JhPdsiuaDbFydN8cpkw2zrZVbjjB1xnr5bjYVeH",
  "key18": "2jgytYsCBthsGd7XSftZAuifTgE1w5mEopuwF4mAoRzWdt2MEF9ockuWP3sSamVDDRAdEU833vNnVLgX1RX5kyCH",
  "key19": "3M7FgxqwE6im77yrm9c7jprHnkNY7goTs4fbqWFuNoAL6hG9Xcnnf33jiYkSmx3UgU7m8ik6oEpn5RGWPic2RQ5m",
  "key20": "3HztRf8Wqj2QRsSKY3h53dV9LHVLziPmNAMdhXwnp1kXC8317xLhnrTdM5vrvbnFLbnptNRQcgMdQNPPg7bY8MPN",
  "key21": "5FpudR2xMgmUvVYvno5p5wfUSzgh2W5SaxmBLX99GoH6kMFswLPcv5yqjo9mi1qM9KFE9PihqHKays5rpcFw5Nxp",
  "key22": "3BK4XYaZq1GsNbZ8eavcMtoBA3V8tBUkRWkt4f2M1Wv8HvgeSHtpySVmmH1pBwgWxeKtFixbtA36fqLHisrDciJd",
  "key23": "4iz6tfQm12zic6bvP9NP1268eqKytjPTG1BiipHZZwgTXnotGC8kJcXwJdubbVWjLWEDXaKGprDniatJkGt1q5fV",
  "key24": "5w4axC96EnoKJ8xNCz998rNJkvUCCyp4rBcTFmzVAnt4PYj2EFJwzSeTUhe35AumrqXQxNJsUt8Tf8Zx2y6BFC6K",
  "key25": "27GuzruyGhkLE846zDamE8JwWBMc5H9qtQjVBSXCmvAWvQxDP9ERTrj4dopqesawpiwzqn8Mtq21DNVegVXAFVjG",
  "key26": "AeVesQBu64hmzfHRscVH5dtCGyc91unDXZUrqCQEZjPfRzNqPgH831HHqAA2QwCcEaXPpAU8NUmxgVUCHagXxqc",
  "key27": "5EJpRpZHyvPDPQswXJAxQMkbW1oo4b1oNFhdm7DudNNzqiHr9cMk8q2DFsqxYXFz8tBTnBqi3JHfYghGZLS1R4xg",
  "key28": "5wARMsW9XkHiVccH71Z43uvv9j5N5h2ySDFc4yyvkm724pZVj9YjATDb6TxREdrSq5eG3yD4i2wBNEspBGPjWvdR",
  "key29": "23igpkWbtmGEr7ZHpPr9hnCmJKwJKoforasSHi5FKAtz3Q9WhrPNufkKEYveJZVbvTWwcnm4wMqWc4sNuc9FHYhD",
  "key30": "vL8QhmXY17K47jQvd1U8ZDf4ZBinZfnYKNEtFnrcoU4RQ5L6hfoxchmr4kWrZubhE4FBcUMJhVmAmPik3pN82DJ",
  "key31": "2HwRSGb27CoUnhw73yjHW9ED9TJspFV4NtkPrSKqoSJT3E3dpr3uGdVbaZgDr7iQZaim3sRNHzep6aFFApmANNWi",
  "key32": "51o5cWEkRMQDNLDHNPDUMoUEKf6C18euhriwAjswYvP7UCKKhBTP19qsxQaNHT59XfMUYvCb6RKRMMUvzdx9yVdk",
  "key33": "2dugr1EUj7ZiSimCSbPo7mUzFAugnt8FSKUsCZrszPn2jnPMYrH7Sn1onnaL8SiBiqsA4MBAazmM4VXLBQ6rhUmk",
  "key34": "43d6oFnjTq1d6MrH4YHPMWbYtLxuTJpXP3HPkUeBu7jPm3TdfcAYC7HV6kJMftYUFS2MvoakPW4s6JobDDubnwtq",
  "key35": "2DtMsQgzcYHGmUAVVv3RZmffqZASNRNsmwepYEk4g8hTuULAFGr7LAW1DiQTtuNG5LW1YTSccFHZV9Hv38si9zQU",
  "key36": "3vzh5WYKdwrQBufKaNuSibUVd7vX3ixJNdTE8Pr3duk81A5ovjtmCMubNBgowwEFM4io878KSXPhowQZd6ruSXzt",
  "key37": "2HnMERKNnKfANB5sT4FUxQndDidvD3bwqMevRcub7cxS9sKvjtgUTqp45iPzxa5STYq3DUUwpi9iMXdBwN5gGJKp",
  "key38": "rXhRxVahWNKag3Tf8USRsLMexxhjpy9Q3cVcU7Vov5wtYZikgmS4jUJq2NxY6yRG4r9hiYtvdGyT8ueADbsVUDW",
  "key39": "49cRAbpxCfd6EZpfRukbB8hUGWGKRm7o1MUDvw5ohs8V9ec7G5yXjFiu37qSddsKcg3v8TCEaf9gjbXQyQ7r6ZyP",
  "key40": "4QVGAdcmaqGBVXkoSAYdT5tapRc1M8CLKPveKE1bVhiVY4xei2QBuY7GZTo1dXpBF6QKiVmgnZp8YLyuJ3SBRJcv"
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
