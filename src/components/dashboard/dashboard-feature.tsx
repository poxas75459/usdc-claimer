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
    "4zihpJa1gzNTbe4d1oeAqYNwjE2HGKb7Y2rnAMHY8s5jnaKvcG5mCS7rSqHPZksT3EEnCHhSp9kkJZnW1JmxBDpo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4k1qpJocbPUWLxefZKMCDVFMrCeBVSmxsHW2u2EfPhBjxcXtfMspqfEkkSD1A5VAZxFeNFhR9wJWvMiwU1a4QynG",
  "key1": "2keUK1PgPb1u8ghAhc2GcpbuGReJ1f5DrwJDwW6TrwhLvN1WUxtw2CjqJ1RejXRtnyVTxmo36Yh6szRoM13fsW1G",
  "key2": "2pah4Q2fvVLT5DyvJirqRqcKtEfpnEDDz17L4yvVT2zzjTimU7WEz6WiCw37pHMEWdsnfK6JjUPbQxUwqvVH6rgR",
  "key3": "2Ln9wzM4pD139wME7e64MhG3Q3k1ECEquJh95k3kAngYCEWnriXyc1oiCdJtJCuJSvfnfnojhcxAn6UBVLsuzCVm",
  "key4": "5F65kwJiqiDs5pT8oGuXzPyjZXa7r4RyJFVTqjjB5LXe9QHyg4nW6CxFMerdpdYCvkHYXvxGPpaEz8xWMuwFWQBJ",
  "key5": "r3Ez5mqBUTemsMkFQM5Vnzkeaqe5L3jjLnzG3Wo2edyKm1itdsyALqXRDDdYgEa2RBU5zMGMh4XkeiUP1jRV9WZ",
  "key6": "kecXKFyZym8dsyRvdwhNEXeGmo3YqrDUiVsoncS1yo6baYM2i4goUTxaVTPTcNah7YvbUbGwMbXiGU7UiZVXCCY",
  "key7": "32Buy1LtP8NxqbinSdqXRWjDj4wRnrkhPEcqN6G62d6pzENxnYgJ3pGe1WQE1fYSGWZ9Lj5FqKRVe3H86qzFFnnw",
  "key8": "3USRM1KaXozZGnkoA1tN12sALQo5roqAmJ7rA476NPjmo49XR2SsSPKNANXQA4MUhPM32PkV5XAdtxNNBJmk8TA5",
  "key9": "fTz7Zmw5FbWjf69p7hEPfmgAFtmyRJBQiqhTKfo7HQR68QGXLfFYcY1AsR8gQ8u154mc8LSPTJLFJ6i7niboL6i",
  "key10": "3ykSkp4TKQE2CyzSL7448qmHGHDXjDT22nV5pfP2MAKgLcQRxnHxBWyd4F4KbosXNsZVn59ghwT1iJwpeKLsijur",
  "key11": "4tniyps2kKFFZ1jNwFp9gMPDkSJtBUjLDwFq9fxjwBovpEpb65k4sxYNmGiRxhjR6BQiT3WPHP8aR5Wh73UcZjd2",
  "key12": "87Sw2Y9KDynKzbaG9hyeCwDnJgoNGyo9BLjnFzkKjtCNCYwKNJQSrCC9TP4YHGYFFvTBgyM2SGy67eRncP8pP7B",
  "key13": "5inrVhG1ErHicSxcacgL9y7c5N8qE5Wc8NRPAt65Vm6iWbPwLkYa8bgscAgdwSC1LJbuhdcPRVfEhzoeSGM1C79",
  "key14": "26aKBN8PSHgCzcxw3V2s4W2hnzt9KrKEMrh6VKGh42fZr8JZnkWPBafLhHbb61qbNgJuGaLQsJ8dzQNmkckvR3bG",
  "key15": "34KteMmx8wHbJqB3XSJGVAnPzdVGzKQsVo4XdWmp41yuQyDD3a4H8Kn66VWSpMnneLu58KwnR5oVioKhUfWuMStQ",
  "key16": "5V3thN4dhEBhpY26CczGiDhmsE4xAUSdvTMLsgWTKpdNMuqDcFYBNhZuCbTVeox1nW5x9puyzqTX8Cobi3Bp7EbL",
  "key17": "3SQDsDaf341Z6usnRTyM6mVCTD5a9n2ChrRCj1Ajkku2brYtj2fCVVhTcLr5fxEdfUhB84NrgogMimyCDM3dWZqj",
  "key18": "3eWpNuXR8B4v5vqKd8iHqAAeHN8p4XnmxhgbACMiej6DhxgpaHSwCSXMGqBDUJsZMa8UW6pohzMmUhpz8iYcG7ef",
  "key19": "gQa46TCeRYasMWrPaRKMts1tSpeE39wfNGSJhfY1sj9TcZscYr2EAEMJ7UUxcM78iFA4Jm7p2HrPRyy8p82Nn9J",
  "key20": "4fMkWzPSpcLjQk1y3aDL58v4kdM7kyHmPXoc9C1pByZTE7iGvYdcRFiHLfJ4Ew4eP2SvVH3vJix86bJZRWvqNYT7",
  "key21": "4qpamqjeEtYeDjvkeyrtM6KUd2JqygCBczCqmFYWm2v3fFYJcwhV4bECJtpiR4C974uy49cxnVWF3y4nkiAHg2Af",
  "key22": "4kJJQN8pAbykywnSiEf5U94CW4FwdCrQZvzW7L598h2cqxpEbxydxyUm5meJSCQa9DEJqJMB4unsoe2GRCS24kfu",
  "key23": "2bejEYvuDqrEDusTVzNYQd5cxxJDYDu15dbj7ULHD68UABL8Un8tKwmQvkWYkakefkGwqhuyTwDNP5VmhYLEQTzX",
  "key24": "Ci49K8SmJd73w1d4KoE1evGJKgk2RWwo8KDnVe2eDhrPLHFRofHcscBDGw8Ent9CwAejRxQ5i6WK5h2An9wYJzV",
  "key25": "txY13nD8dAD2jeW92eBLcqnXAJQHGR78cyb2bZkPL5DN64AHRZ4StijLYF99u8D6vxFEt2wjLFAFkJRHWZfjS5L",
  "key26": "2fshXpzFBU5yTufArLwurPm5R98LQczTQ5vQfrirFCZNwa63iqQDYXJpHNxhvdravgdqZ4Vvh1H2TvJDWyKScyvG",
  "key27": "5i54XMof55qMtLsJkB3D3NBrTDJ1JdQPkj2z4DwEXpUM89UEpvzH2MQSN5c8SxpaT19uQVHWovc5N2PzxmY2fbK1",
  "key28": "38bkz9Uc4n1ZeNPC3ZLdkb7EajiPEEqgErjoHsCBKCGnxvTkKpwUtHst6bsVg3fUCEqDXY7boBMpTtXXVuGbzz3x",
  "key29": "36PJTAfN1SXsSs4HN3ZFpsmWUz8xwZek5jJTf2ENtaqCXGSNQGsQs26Z7DZyjxyZQdBn9jzHAbEeXdAE7oSG3MJ2",
  "key30": "5Wrsah8JLgf2WKgJWcCZNbHVEx8JsLa6zyZB2A3t92dDbTgyVHcvTVoWyQQNx5seR5eSUFAUAHgRFbaiuHAnQUw",
  "key31": "4asjkpEUGN1NfMrrhp2iPBTaRBkKnwYYoNHnM7YkMv1gk2vE2HFF8KLmL2nNQ8g539p9DMgRWUk1bknch7xrB3EU",
  "key32": "54smVxxtXhLNurDZWraRvYzcbZrD7GP9tSYSkqXSPGM94ShJtz7eTGS3T68TdgQrxAGbVBoYUr8GEkxH83P4sFQ3",
  "key33": "2EQQpitG5qCTjBBkbANdjxG3gXDA3ZfBDUbEu3A4adxVLTFNcp2xWpSnZhZJPVsskSZ6VDVuBkWooqu1wZLnEYwk",
  "key34": "4QhqBKQjGf54FCiRpCWngmrhAnXatzZWrcwxfC1wpT5cRxuh5cuH7SxhTj34GWEqzUGrbGsMWBJtc2GtGjGrFJPN",
  "key35": "43a2kMVC9J72a7XLJm7bkJAcyVnBoGfhWr6XgVXv9WCW5cetpxdG7Nh6aU8A4P1w4NqCsgJXZeY7DcdaDZzivF5v",
  "key36": "3cjUP5ZopPYAVyHK4wjkPTL1rRUgcytfiDZLTzxDboXJBSxBjipz8VTyg9te3FubTbn5EqG78UPATBgG1VuyoULd",
  "key37": "51K7TwShhMSYcfyLYn7ypdzEkcXkNc7Wrykw1p4UyZ1Te9PYwhHmNp7w1K6fm3PCujWRvxCrPkWmGzTch6M55v56",
  "key38": "3nAfU6YM9HyPy2c2AiqBxDQBasmSbAeoyHPkJyNKLEddHrshpZipTHBGfxXSUp9LPnRyHk56cgoS4rw5Ng2FkCmo",
  "key39": "4m2iWcNPfUytMeCAZ2fxKosffKJrPNsb63Ry2sgLo5cH1yYH1as1zZgdLysgzsd88BR4AjahnBNb5i7SazbmGBYJ",
  "key40": "3qhBts2PrcN3ZSSNAH8N4Q9Jc8g9836iznJKJwk49aGGcnuoGYsE6wZ6Xk1hVFCdBg6z9AxD7rtnRh5TKsqvHqDm",
  "key41": "5JzJEag9UoYspHTUVYFJtiJwoynXb4SrZ8oLRb3adPfZh7dfdsJVdRsWCJ8iP1TFE6tNH6dpDPeXPDZHxPUYhDsX",
  "key42": "2rd8uGxSaY96jwMia8A2sP1Swa7uzC2s58vw1dsgD9tLQKLhZsnXr21G5Kj6m3ui51Mui7CCiQMPDMqfRB4SWT7s",
  "key43": "3tLwMEY2crKC5mp4KGZqjex4RDx2qc5c1B6kwaYfba1CFtMRC2JkpHHUSNKU46dY3pBKS82onS8296Y9c6ChRciW",
  "key44": "431A4Fy1wVUJ1GbExJDqgnjLrw5ogWyydVhQBoUsWUnqmbJjmKhG7djDvu3fitY9oDjsxTE1cToWYtRVSq6kcS5k",
  "key45": "563PbBcTNPsiBPeHJ3gtjVhHGkE2WtRDyJMzKFdH2be4UDZKSmmBwsiJBf5oTXVy25mpAuj2gWJg3GY3GVcyUi59"
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
