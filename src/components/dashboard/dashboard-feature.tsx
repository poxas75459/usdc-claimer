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
    "4wQ1718THno9gHndzgouEs7a2FAB7YsXFnmkLeRFsKNiDp7mWraKqNfWe7ALNVKA4JJjPwX7sVHYFdBJKCNhMEUQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DCGWTqseF8vbW3iFnSejrN4SPeTC49maAueY2HZWKPPn9TJbykeT2jU4jK6n5fKjv2RVq4MU7q7VepcRM4yxD1K",
  "key1": "2bJAArpnrmap8fDGy3qjjGuVfGMtCztibZ5DQ7rmUAFzYagVCKQYbkxCGR3iijWABNCQkfsA9j4YeY9Xo2qpQqNM",
  "key2": "4y7ohRFNfYuFCxBARsCjxkAH3s46AaBfU3ZkS2284UbfbNsyr8hRRd3cUuSm8AtnE3ZtgsA3tEdt2Lb63avjw8QJ",
  "key3": "ZCURZrTG9PRhgMDDPkTJSDGJgLbXkdpkDupRy7Yc2wJvBd8mHZXwWCL5msJuoPRufL3qm7rasdKWc2DLc1a3EfX",
  "key4": "4ULy6BDBfv59b7rZr632ZgbPPJEL1EQ4J3u2XKTqdfnXRRKkEG7Tam8cK9rigER1Y9WDKsvn6GZxPKYu53bwx14",
  "key5": "2GT6yUZZyPV1M3cRpQdTfGCh9rVTCtgA26xBjVx33dkcooY3QaXGmBDZTZLboS9SUPRMtv3K4JyUvxA5Gh5i9ifn",
  "key6": "2tE63RmCVqseLeXWRDvkJTtwCV9RHUMva4Nh2utphos1zHLhbuKokwdbSDraQQ3CHYjrubKDapEMyAi1vBZNsW5",
  "key7": "3HmcQbWrLx7HN64BYVfULKssmKBA5XX9zgwEFMLgLmc4ozvdqJKWDbrxLHTB9Jfo5MortNTNKGJREKToJgv1bwE2",
  "key8": "5sZt5cmvmuHFMTjHpN7i2PwZof29XjyN4E6c21TABppQTw3fgdcMLYtp4AfdYqGUf2Zpz2QRs5TDxJgd9DavFtec",
  "key9": "2HuU381TyE2T3HVzgwDuTK7uKJHrvByr429Q5Pz9WsTTWuRLx8tECG1VnPHzHKhBovDBhKXhj1FdEHokPFPdyBZX",
  "key10": "5uL3Do6okTvajqxHTy18Rszqvm23qgDNNUCL88ERxSHXkcXq3WZdSaUWiszqHUDWN3vR2QRA2ZguaL8peLAFcvZ1",
  "key11": "369dsTr7qRW5AR8trWg6yVhbexKZ31NpGxbxg6brBDvpBiWKQ4n4rD7EpGteAqeVjLmDBvrcoeePsX9qpF3RqdtM",
  "key12": "2noQRHpHBZaFARpNo8YUVp8roYqjGZ2f3c7hpRHh6J6soixpd2dkg7jw2gntGr2GepVPT3654JEQoFvShAVip4Ka",
  "key13": "4dRhPusGFMoMxSZ9eWopofa3Y7PnbCWWPTABKHsGBfL5Tcze6qnG8THNquB2CttbzTx1H5z6HzZBUdtkL873hRx",
  "key14": "5xZqM1w4WYsGzSztkksMyDzd17o33U1BahvquuAYpJZXwVbdheemMLK7RFah1XfYTZXYNjYSUPR8SgUwAzzncagz",
  "key15": "9o5Je91X3zquWcG8JutnMKRvw1Wc5LUhWPoMZqkRgQEPbTfVk7LvFRg5EhX7NKhQVTymjgPmBULBbhcqFDKrqks",
  "key16": "24PBya4J7M7cTq11zrMHhgxHkjDZQmL68SL6NvV3pYyCfpZ2ySfLA62mCPaS7Kj3c8y4YVQEKejsM28dA1k6ykHv",
  "key17": "5c4p94F2gBRu3Js8kZjtc9XVUbhryGGFHQEWfoXhVcfcd7c5wc8uLuCzoYDYTh6vi3rgpPVeCMGz3ARcoNXK16hK",
  "key18": "5q9iJ8EYmzmTENrKj5C6sb5zzRRMnRmv2fZ395gAmz6CWQbzms6PooHhdaYapF6Xeii3iQiMothLX3xkBU47rwqS",
  "key19": "3XnCRp2jA1nXji8zNjDjipRuhgutfkieU9qUQXSZCdgAAUhQmMvgvo8DYqEUGMKKVrA7iFtHmbVUADP24Wki53EF",
  "key20": "5tv5Ttue3wtG5dgxfquGqyPBL3EFkpXkTJs3BqszfeuLfpYZXuzZ2mp39QsUyFYetoQ5NyUS4nCPKVG9pZ8ZeQQJ",
  "key21": "2uM7VMFTs2HsbaK8uMJLAfgazaMpeZJnjQ6ziLst6gQZokMrvCkJJrA5HfgNae8t92AAm19nVU5nTYSaeprfg8VU",
  "key22": "3NfeKZRi52CA63MxnDy9SBZBoWRqXHLW9JbQX7DyHTnL5JxiFRVP2mfmHzohmejA9miMdgPVeyjafxX3Czdxv3f2",
  "key23": "3UQZ4qdLRtak7scN3i9CHAyohEXKZgpuCMV4Ug7qhSw9DRaxUqqYCvHLJNVXpVgr7HkRZ27nNkdHExKmnoJXWcye",
  "key24": "5QND4MzvuHdH8LYZPd1E36wpTDUhd4R2RyiqB5u6HpcLdq4c6nwKjYugUj1RpYTcNnJJVnkB1og7mcWmyE8FKTmp",
  "key25": "2HpLFQUQo5vbkPLpsUdp63Smy8JBfT57bqPEZgpVEB6jWZ22moqjpsN3kw46H3emKvh1fZndgtCpMGM9AmjMxs5B",
  "key26": "32LV2ZgP61EzRXTCp89BNVwJZeENsmdxuWoxAkhScwSuwKSLkV7GNU3y56jpstHHu2KneXB2NEN2hW5H3QcBGL38",
  "key27": "1MTr4FstoT33dxNDUbbTYS3rkgzhwZRfg7T97fpU5gKKSYaAPjKxMqNYKwgka3dY6sv1Da38ztrrSPd5rReXzZu",
  "key28": "Hyi397fmitc7LW8CeTYvLEnWSHVGGHK4ZEvvEk3SJkBp82wEKyEPDtSwNNm45fkFTenJXLdHgxDMLyWeGQAFtR8",
  "key29": "4SomMVJtFwBEuZyMcZAzTDpy6KM3KudBmjCSKbfB2Sh673SLBvL9XDLox4PtD92yBS89nhXgTsFdzY4tint2mddJ",
  "key30": "2nQA2rS1RAWj5Z5YTM1keBC2D3x2XUhpgC2zk4vb43YG5uC3A8RxhN8bZiMBBiZSkruK8k3rpVFYiL1AJ5k94LqX",
  "key31": "3o4GwYTiYUjHKKwy3TMuKqS3mW1epHRiAQC8XAyNHZ2YB33PvZ59sQQxvdNNhUTmzQ8WGCCSiasdFuwhYpy9LKGx",
  "key32": "2pzxMZfEpEkQ1CeBmiQgPvpZAqDwaZC8JcEtVEqtqBApTjH476cmFS6wVxqTzvo1zEV9fXuDVqA1BEqkerphaCFk",
  "key33": "4zUinDDtmL3oFePQPUZcBgNRuELWJiENs6eTrg6B6N2zt8HLCMVCr56eLAiAnFztDak692neLseaJ1LwjnyZZEvB",
  "key34": "23fSeMqDt4kzwfi1RFuvjpmbTHM4y1Gcaekb6SaV4KWniGfX8fKAD9MFwc1xbpZU3GfD9joY34ZwzyyKK8Ae4Aqf",
  "key35": "5sVDSwtSqn5vHdVCDMgZWH1ryKAk3FnUyfnKNVukcwCwKnCSxuoMjxSmDRDwkAptEA2Fhte1JeiHZhX91JGesipP"
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
