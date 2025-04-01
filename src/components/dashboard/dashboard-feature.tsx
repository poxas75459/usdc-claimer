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
    "22JPArrfLEyvJgBjsXwVKYwonKxgTZc7ZiNoNHNcvvJPAhKL43casueuLAooxQDhp5dQdVxcsP8LpWZSouByPHm4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mQ11ueKdh8GEUQBJdBHTLVDvhLEv7ioPKdinfRD4TaGCujVHPSDEQX7ieTy2Bg3gqZtbpBCsteq35rK2hPFb9TJ",
  "key1": "4gMjNiHg1dxfvqXVUmK9E73pmZEZ33Sedw9HGa4Ca286ry5npphug9C6dcDoFq14ggsg2p9xzd2N2nfQidgmg2fk",
  "key2": "7wGbkEPK8RnbffgfbAdeerH3ervFfduWGmQCpoaPmjbxrGfjVXDKSTwY1TVNGGf7Ti8XPAgUEhxvHMGTKBD1vY4",
  "key3": "3Bx5umwnqr2Hsda2Go6dcySWKuiwP3R8grWVA1Zcf7mEyDR2muf81v77gLsWiVW7GyhSQ52xfaDJrHmNh379kWTF",
  "key4": "2AiaefRVRdQcGJybZ9v8jqPbEezLVzNB4SfP9fhfQixb3Y4RJFApHcRVH9ssBUYHEUh3jEuw1QqCcWtLxWNSe26N",
  "key5": "4sL7zMC9x6QnQ8eWYeewzwQKFra4cHaSxhhzDrKrnoSgbE2CoZyN4LAM3Jypis85LA1uviDYHMgXvaoAxXRGvRWr",
  "key6": "L6rCbPjSMkzH2YcyFGiTxi2ww1AqXqZbi3Nt3LHYaQrumJq2UMdETDJkydkjr1CknwxSdMKQmGK9FWW7NSRgrhf",
  "key7": "5r2CAE4UNQEC5ewNe9i52g3EYSD1udtZb4MnqsnZau9mXYWkiL994pyQCPWJVdC3qimLKZSEzj5QKePNsNxZYg5g",
  "key8": "3RRgHKrE77E6E9Mm9dvZZjdHR6PuU8MemwCtkAY4GPfteWFUs677qkutz3bP5yzTgRX3dDCkKhW3pT8FRaew5ANG",
  "key9": "kymNA4Hic5rgPqtYH1jz7WLxabpttrzmNksmgzqp8j4k2NfjNKeaKxEF33bhTnHQJPFFut9o3isVsbrUj7xmPPS",
  "key10": "448PemzpLKuvpeoVQWreeMP1kL7TNJJnaxsb3R4fBpXNhV3HSy4xXeWSVNoWX1i52q9Bq6UuYm4vManFfV2557hi",
  "key11": "5YbdwnobKrWdQWv24daKb2ovRCxbLeK4gy21RUDJwctS9baRSbadLoUQcTmCtU6cvxbavsBMxtpE3wRn9p65p2YK",
  "key12": "2VKVU4NUSQFo3NKJKaF18n9K3V1VcnaNthhAye6G3agmA2Yoyju66iAKdadyG463b1ALfkvR7FrKERwfYtRJFruS",
  "key13": "31jFWJnL5zFJ1dA1WME13QMvo7ebuTRCU3j1hGoR9eo7NnC44HXmSvWPqRt4ff7hnuKCrWYCuRf2qaXvuNnReBD3",
  "key14": "231wLgByQ4XiZDPUpET7NJSBbR3EeAzve7txwYF3178xPvKPqjAtbR2jbBd4b9MM7uL2XMMgkNYNdbp5qKPQj35Y",
  "key15": "28c6Lmb8QWRXE4p2JLyMZ2fHQgxhMzXiEv9TdJiBCtqAzhNiAqGQYrkr9KfN7ciXH36LkGRbiUBzhVfMD3f143yK",
  "key16": "43ebV4ex4kg87Ucu2HB39SgP6E6MpXnPptdJLQ4pwQB5oxW1FB98FN3pYBmHy4m67btgszwEk8PcNYJ3qJNQ22mP",
  "key17": "2d2ixeM4hd6kvdkjEVhNixg2WX2d6ywzFte9HiztvC8oEdeqCPGnEi2oXecj6B2xYkXp2nFRE3QznWy45QLDBRNT",
  "key18": "392Sq1LAJdsJxaso3rRAuG9TeegRxwMzaizYNSN3hM5PcPzDcipTopCsgRNxCxewCyci44wdNXt43u6qQsGyUBEK",
  "key19": "5Hz8RjdPRvWc2qYaxBDcGHSCTous3LcMsYievEp4vTnH9xtzKKKkUFWqFACwU2czErnRF2giXKsRjTFnfWHPHhdZ",
  "key20": "2VTacZ2haM1JBF8LXhuiHY5y36ecV2AL2jR5TyRAKT5E4s1kkpVnYkzvHoCcNTsJdtXcb2Wg2NdcNK6mna6aTQAA",
  "key21": "65jFMhTkXwX4b2SWNhDbVe3fSCwrZxFRrEkwKpLHk261jNL2eEopM4SmJ7BjfzJpr1KnpNn5XQaHFeD7i8CiSKh",
  "key22": "3QkFAewq75Rg8evQEankD9ADUAPfm7h2hYoLhbmjEDbxgccdtcF6fyU6qGxVe2pARYuUQGp8jXkhQtotRKoVahq",
  "key23": "2cqB5CWgVNtTxiRNRDv84VXSuZMFqUAkdG4SJNjDTxHDSXhiA3DUSXtn6ctcVuXj1AGZLYhCJfL82jyp66CJyrDW",
  "key24": "49nK3BpgGMAEsWhUL1kKbyc6SNthRviYxSTtTMEtg41LTwXfeGmP78LjQSMMRii8taXWcuQLQ6BPFRypyTPEBRQG",
  "key25": "5dgHntWYzVf37r4A8rNZKLUqj8tAcFuLxHJYnGzKAjcRpmiESjWeDiCpqay6dijvH4EaUwkYbb5pHiKWF7oa8y3s",
  "key26": "57EzAXeiJu5tdBRRMKpmriJKj8R5iLSZmuaD7VmuuDKT4GRLZnPZ5JsDywCp8gpTA2PTdTXVAZ6G8Vdt7m9NPLfX",
  "key27": "3Uzq5N9zC6AQo1Tzbkq6obwhr8R7hUbJama9QCvTGgNVqWYZowhMATJhrtaShe3ph713outw8Awkxif87Z4TQLNw",
  "key28": "2ZMUjZth7gHpRENvj6PswibJqxu63aq74ALEoAtEP79upoNMq3wNxMUZzJVzLJ9TCSeM7NcmU2egyh8FnjJQEjXQ",
  "key29": "32TNwGjZX2uXnm4V7JAo9tKxusELtcLYnsXKkGbKs1tFV7Pv9TPm4sBtTzbxVkDXDnFNNkgtQVESDrnhoGdrm3D4",
  "key30": "2ecsjpmwEQ1nYFxAyUecyRjM4VE9NiqFY1Bz3DWMqHAeEcSG1F97rvQp5Mj8p8jPp9avfaiZPHLabVsknfCSG9SB",
  "key31": "4hmQ85917Ltpd1sK9UyoejUZZpdTR3sh9NBSr8bKDF69hZdkJHDPd3ekdJHTe6KK81Az883xDyzWhXwBfh3rs4Vr",
  "key32": "rGQ6YoP7wjaovXv6LCD8EZsKyJvQMTC2JLje8f47RooRgb2CXMMsuVDCVFUQNxUGkVBefpTajxAfzGwFxttKJNj",
  "key33": "65CfXgGroN8aEdjBUVaP9eomx9G2ndzNM9SY9jKBFuAUEjJTadHeGXzizwKu42HnXfxYxNf4MLTfwNi6PtEQr3tA",
  "key34": "5j23hpLA7bbxeHCdA4SRnixeZQ9rCpvH94DBwGUMZ8CvxD9wQbiRkKUcsuHzvcCpPPUABvGgsm1FKHxFFym8sKTz",
  "key35": "aoAtikyVGK5PQf2vodEonbujgRtc818YDgEzd9ehsxwdYZqx1yiNRpM381fh4ufcGBdMUdgPekMqgXePt7np9S1",
  "key36": "3m9Bdi1KXUjkULZCBEQMZfD3cp4XCn1j1jRg41QJYtTWf3yqXDQMQLbHbsEActYP78PPpWV75qPuFDFoeP75TJ7M",
  "key37": "4BxNG5ck2hiHS7THWAtLWcyXbF9sMUaX8q4BusZaA6CLvo2sy8v2HAq7SneGAjP8Xr86MNa7nk4jHosVpwNDXYoE",
  "key38": "2dtuRFofbeUs4LE5FZkTbUcYFkXHYAxwFbHLQefcs4JFfaVSavR8X61S3zMo9Cc4kd185SRQ5sxUg2FrtSHfYRM3",
  "key39": "XzDZCTsXqSFTr2fus7DPpovo2PkjYLwobjJ8VqvhfAAkbcPKLSVv79Qk9RuMwPwa5TJYYxjdmHHR1phAWmVycsJ"
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
