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
    "WhUgnv9uSnieYtwPLTb4oKqdAwaKkWmgfzGnRMW6x1YKV5VxZpug7sSD4XZCoteP7tcR7EJTGS3tAQNVmZPFsTD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wbXqsQ6oxXpu5oNegBZQBsehtNnFJzmZc9QMYuUeaMVUE2vF15q1DMZuNYgDTLF2JNycrMrpWpfejTSuKox157w",
  "key1": "892yfkHFP9Fb3ToJnddjErnmX3GymzpS41ZGhLYeZvQsRAgUZJHuZ8UQSYK9R49wYqv6WxHVBM288XNpT1geu57",
  "key2": "5LDVmjd7EDijEP5gn8iTpNmX9rfRsP2JWK7kVh1Upu4JFkfQZPv72rLHdWWDoYTVNPe81zFgxCvSbcoUijinaB9j",
  "key3": "3se3J7BVLq3p5m64hgM9jAenxyUux6tE4xfr5xavYFe4qDjk5hnCR6bZcMBSrjp3LewUGY3V2auf4BYpLH9ZUWGR",
  "key4": "3n4vvzth5PNWqp8j6v3LwqCoTc329ftZEXWxNNB6khDAMNt85KuJzv42v9xV7SddcoUg93bTe4wDAH2oziRgzGdU",
  "key5": "ajG7cWNNAP5KZS74iNwLHGrREUzX8qVrUmboDuX75KPbAskf1Xhtet7w4BmGKZRs3r6hjttD8aE4CvyQQkBbtcK",
  "key6": "5Kgto9iTLZCeMAhaNWu9hH3arEbEL3Nj5vNEn3nzbYZNWKFuNyXqNmBWT9e6f5B59cVRhEoMHFCAsrN27gbZkKy6",
  "key7": "5z3EhBTSkiVJP1ASVmrwdrWzdB13me5E3JS3mQUjSobgGEiW4KYwdxW5w8WNMNMdnchKsxPi8QXh8q6LMK3WJqka",
  "key8": "4NaA4xuDnJaw6cGLRK9G7wcnkrvhU5tsD5rrEWVLk5hqS2P2zCTcAiN6HRKwwV4a5PwMZF8aWgpQhP1iYnm6hBGa",
  "key9": "5ixsT2MUMLu5UQGZRnd5sF2PvYdFBhhnMpAmEgUWwKnfjCyjvguTtSMitqDdNrAA5oQiWuKdNKbQnjoBZs5VXYoa",
  "key10": "iZMiWXTRZQ7gzF5UswfvpDqoPm6guE6mNKE84jSwsywe55T7a4Q5x9XGMWanEdbUDx1kDrDtqbqMcy1NikqnBXY",
  "key11": "SuwumM73o8RM1r2ecnv4bKUrQoUVCWfAd4WujrYs6sMtPMBx8bgDiiuTpgM2LrkmGasaAtehSZe5E3w4gnpG8PU",
  "key12": "4JAkacw659o2wdyusM2RR9zNj7HHatwke6BzuSng5XRi5r32FCydYzwG8qfb4ZEMbTdQNh8DtWVuHDBfCb33o1FE",
  "key13": "5F38KR9omkQtLaRKkwUpnbqRBWZQc2rqnUmg7zajzgmsXRQ8YRRDXn8SSMk85L6EM37o798mfKE9MxqbeSLKBamc",
  "key14": "5ZiW1pngLxPEivdQ1gToMGyVvBKcf7gSowkU228jPMM5TChAZqnMpVTkK3tdpLubg7Ap7UH56DjfWrgbcA21RbUN",
  "key15": "4bAUPxRn9BhppR6tDgve4Skjf4ayy7Zc1JeL6H7ddfNoqKgC7Gv2RTwmUMdBPtbivMfdHaFu2ScibiLR6J3hw19Z",
  "key16": "33RZaaVWNiogPTBFowu53aBA8H4beLUUCto9bnm5S22EXqxdFD2JExRntrUtApKVTApteSXVtuPGWQmxKebBtDtU",
  "key17": "3PGd3suyNotkF6qJPWV38eFo9YuKTT58F2TWZcB68U3VLxpuFMDfdGu32LKhZ6kfZYqXD569xHMsUwf1q5gxUeWS",
  "key18": "2Ds6uNqGau5jiAmWWspdpbQZkyYmjT9rG116XdiUHMvt4vMbxV6KhwUyiWYDh8Dwhi4mw3AtHq4bs2PC1BkNwaC7",
  "key19": "49zmVeqGvgXsJ6iQTBNUwSJ2B3qu8R4aZP1wVijphYSAJKMuZ9LdkL8rm2oBrzJbeGi5F6ZMKDsNanEfVu9hcbvV",
  "key20": "2SzHzZ6S8b6Em3VKD3cAUjRzzuwcyXfCPE1RBVdsKVdkndaUyMqkgA8tinPrz2bMwMEid9J9W1AU1RzrKUU6MNeP",
  "key21": "4NeenHR9q4kXHfrEv4Ur1DHeF6gjGb1rEiMdAj6dDLFBbzStHD48ELV49ukmARP5gtjB3G2zRrDh5ZpUtF2t5euy",
  "key22": "4wBcNUebB2h5ErMTSCm3nCtXtVhRWbwktMCdnpcVrGakVr4pjyEpwAgTpZ7KgUBV1CZQavzFEsLeKSqkkbTnrAvm",
  "key23": "cReQ7ACerzBMXgfv6Q5vfruKui5FAzzJc2yoBizkJ2eajQSL8EExDjx7o32zCxfh8HDNyLucpV1mDPJZJrAyx6g",
  "key24": "5r4gdQdwQJJo6zj9BiNrh9kLpZxMT1WBdEMPSvRauUb692fsnt9uawM3VyQ7jDwGhhoVcmYZpPQ2zpEaMh3QpZy8",
  "key25": "jCUsjM7MxMnfZr4Jz6SX2RyfesDad9Tf7iN6F9sdgfQRxmxQY1rTvf8igGfvr2xCEXafYzGf2yhU8BrG4EQqgvK",
  "key26": "63tFtcqZ53g75e3jn7CoUM6QpvUCag9cfoUCDnM2HcRwQyy2LdMneMgjtzvqECdKVPzjPAitPV1Sq2NPTc8nxAD9",
  "key27": "2f1KuM4WxGPYRgEdUhJwUytMrcC2SAUQcNfVYWEWnUFsQQAwcGfq9QnSZzBKYgZaBETdYy7mJVcR5Wn73r7vUBH1",
  "key28": "61Bn1EcP6vdewbvMi4cFaVWB1PwUQvjVSUYFDCWnfb2RyDM3xfmrg19WNmCzfnMp2Qv64A7VcE4bMnzAATKUAFY8",
  "key29": "2WmP2wvaEBix4xY33DQkx7VdZK1EzAn7RrwCEJjtcH5LmRGtF4vnVesvVYea7ZKet7LJJ91HyXr5LSkgXuoyDx1h",
  "key30": "3pSQpFjDquXSffLoRqmwDNoXpzSv6drGXMd8TzJKowbF2FC4yanWNmiwumiTy2DQyBGus8rv3qpmpbC9kAZpvKmZ",
  "key31": "3DQPQpMt4MzwrrK3GEMGFqS3vgksMof6rdH5GozZZD4GZNV5jKMGk78284PrTnggXDiQbUCXj3vzSK2xf4gaCJm8",
  "key32": "32TFCKMW87UdGxEqeG66M49uxfViKDVqDhMuqjRxznBfx28RdhgqNqU6MTtgkLnKUxaJFgkvsMcfptP5gaDHjeff",
  "key33": "3vHKHoepzhezcQg6FJhjnYJYM8RBo7sx8XVtbZh75tAYVaST5gT49JhTMSbx3MBNNYv8oJyRrcYJj32LubgGbgz8",
  "key34": "4GYLmpw3Hfz7dvSgoEv41vbnjUZ7Zp17jZDbPWHzyex9cKsrYKSsATvNzCjUxMRotBNJy8CxbHSDLENb5YvfG5i3",
  "key35": "27vV22JVyzNvdgfvG5HmaDou3WRLpuCMZxzRCQ4EfbyCkvZu8eWkfrocaywuDXjK8SLzm9LSuDAQaALtEFAjtsdG",
  "key36": "2j6Y9H56dRvqAKREtb1euUkUmFJP86iXhjTxVW8zkqxTR3ZmyMaj9uELLC3bKDvaExRRHbcYuvR4p9oXcPKs5HVA"
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
