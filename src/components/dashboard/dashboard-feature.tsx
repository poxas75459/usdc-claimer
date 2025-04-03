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
    "3N5dnk2DztEHmncWxTmAAYxZr9UtidBDuGsioetqjigTDKsvESeMz1cCEaCPgQcWs67Z9J64nHA4kdxB6m82c4mt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uKgVaxagmTAzrQouKLjVMUzEiFNjyhZzXHkNbQu8kemxjV5YnZDbtomvdxn6qu1mqz3xgmNPqecgsDonXv2XNqx",
  "key1": "3C8BfBWyj98EgksC4sLZpLcf42RadxE5onHcsWok5qxQLSb9iLUUBGqDTJhW6aX82v2oZuaU1VC3K6ezDZQneZEJ",
  "key2": "3qHoBubD6xwFnKDTTmsUQqVgApKRekq2FK7ncvbTgKDkUtYHANRrnzf9E7QRfR3NVDck29or9FJmUwYoU6YXQFGs",
  "key3": "2Mhw89a6cwedzGGadC2oPFoK3WeYnxyaxVtMK7SMGLfDQE2CVNsRSxwjKhw8j5hykfLT4Mcfkfgyb4v5aJhuz8nE",
  "key4": "5QuhRQudEATUsSv2JHQ2YZy3YY4f1DeJingqvFcCX9sWQ1SxZV6XCLofZqiWwoiYbmXfyeXFpAXjGq2ytKUrUX4h",
  "key5": "4NUEkAM7S14fB9rd6BLHP9mvmsEmfY8mYuJr4rmsiKB39Tf1p5A1vmqkGh6eUJy7bgcxKQueGCz5MEZ8AmS6U3Ym",
  "key6": "jnvGh959T9QWwq4Cqq4JxZUkYc8Gea4QBhCQj1Jk1GPCdjVzfmmhasyXrv47sd3tknDoEEunpC2nEq34toF9yap",
  "key7": "4MiVrZfJNX37jhfE3En5eG2fvLR17cXerwqJa14DgTP1tMzPxPknvp7GN2VL94GZXZ7CYJr7v5NDNxuRe3LRa7TS",
  "key8": "s4uhdT3wzXsY2PpU7tXArjtfqTtxAxnzDAts6uXpv2MQ5s14kRSVnwYTVznHpAqTmas6TzmK8Q5fTuGyr4AZrTL",
  "key9": "3TrdgfbAS8zhLrMwZZ9d1LdphTsWHaV641f6Jst5Hqz3u8iAJBQTWMaYapqym7BH8qMdAuwSMNrLc47MN8cmMYTb",
  "key10": "3ZQmtgZ3z6dNg86G1BZ2PHFLU5s7uWKLRpn4JpxCCyDDqmTNvoWb67gJDnmuAL1MwVMSRGyaW1ttodvsBMhYgMT1",
  "key11": "BaBPf5QsKodRen4eoMfhTjzTPAZLawZQJKBGyeCjizvD5xEiKbVXDtypmXyqLweffTfHmWFzKV2KcTDnc9U95rp",
  "key12": "54fg68bm3jdMFzZJtMQwAmyoM3J7wcYAqt96sP2RjvVdZm4MkjfTrEaeVfKVz45mpjuag85L1DwEv3nay3JYWUH5",
  "key13": "4S7Eo8R9tfkURebq1ZNdPLPDd4R4U6ZisXbqbTLdagQSo2iU8ePtmqR6ZdFezgw6juVC5JLnQ2VPxuC8tSXh52tk",
  "key14": "5TxjieNU8xiTytFHFzcYbBzh3Nknuocg4grKzza4DyycrDbYJcSJrGiZujWE3zqkYAwCuRg5mDQBUNzxfRspotxt",
  "key15": "383KdkXZNT3QvCBLns5ds9V9uXAxwAs3XpVqt6CtHNSCxPX4ZVwYJXknLmrhPJxdZb7zTnejaYcHafmiPDnKyrYh",
  "key16": "UFrArRMzsnY5oPSKXijUmTasYjCU1GHenmBggoMNguK5sNNFL4EyS1wCrdQkDyj6N9EFRzSEiJCBMwVZbsqvebk",
  "key17": "2MWByJC4k8UqsfFKn5yGL7QVRpA7qqT76dKHfdYt6BJGCGhe7BNABpx7bQRUAP6FFdkHtMju51u1raab2pFvcvc2",
  "key18": "5MypPEW8wSLnVATqocHsNw92W171eAcMgAE94fzWFhdzhYKDG7GxZDrW2oPsWxwF1BYijBd8ZuA4i9dhyvhy13k3",
  "key19": "3J4E75MCEQNE5SV8Udknh1cM9eoCAWS4fB7veCdYwv5b2nFKpV7BQjnSbXjRcoFJ8BwnvBT8KXWtouVRVnBTyux5",
  "key20": "2TE7yDG6X9WccGnCRSCsYPLowQgmZEsY1EnGCVJ1Uv5P6Vdh2BqtkL3iNzADV6B2wKaeh4PUA4A7xeRwi3rhKj8g",
  "key21": "4PtraAAvEBn9frSF1SQTepCJ6642rzZFinqDTMkSoiPa3ZkjBgupqiftk9veZKSrXRySshi64BpcAW2auNucP7aY",
  "key22": "4MbnZvwV5JNcr96NUJeqRuighF5DGkjDXJT5zaQmXEH3bhr4spZ7B1w8YcEJXsqQvK1mEy2iG7yScB36gayPFvTw",
  "key23": "5z242owDjRnvgj2LcnjAQBmdLzNrEPnxmweDHvrqGsBdTUH36RLLuyZazjUv8GuPpL35pgKCeoqSsBkXbQRvRELt",
  "key24": "4CEaqmHJz8ifqspdCgRGV5auh5FEtizW57PBveaPkYyKWKhyQXjb58EmGbnwM4sKnHyvF2zf854tgSyuSJuDMdPF",
  "key25": "2r6F4WKQqsvrrWqptvyPV4Vsb2RV26jYrjVtYR5RGbCr1z8yfJYqUKc7z4S4CJXg4spFKedtkfaAxWYs3W71TtYE",
  "key26": "4kC4TwwAbG2mGJgjSibvL5VR8rWyfkHLPXUmndP4YNZiNUtyNit3YVDWCQGQpenzDM3WVneYgEAWxe6ectySEnch",
  "key27": "3Vcoe2DVrDCg6Q2MED9ctoM6WQFLmVMGPx7FngGN3xhM3TxNbyhHWNKtvExUsgMjuChRHUpvaRzXqvgKKGTE73YN",
  "key28": "42fvRiXNHMM8if5JX6x7qRCDoLZVsY2AXuWdiXNPATuSEf9FaMV5Fi7tXwkfTwNknDzDwuoWvVAjX5RQhRFXhQQN",
  "key29": "3iizx79ng7SMzX11FmV4DQxXxYkk7G1p1VNLAYe8B3nmYHuRztkcdBxokv5bgdX1rBtseNK4kJ18uu4aaCaauM2y",
  "key30": "4uZeEU6zfhva1NpqvS4yHnEzvEwMJ6zjNUrJB4N2ySiKiosJi1TcJiAuyNJnnRPb6xdpLG6zQVXXRGcJaYDRXDeP",
  "key31": "4fPo8RVZKBs7yaTYEBGpWMG74n3EJYot5C7no9GLPxzc2TgEuBaxjssqwMBSJ44C4nVhKg3udxahLuCmhnXYwpyM",
  "key32": "51E3Ms37AqQqjP1m9Cjn6FCSra7KSdsJ1EmHcDoohVm226Sog2hQBAQqm9YoDqvGZT1QMw8fS6mCWwWLB5jrPkSL",
  "key33": "5ezVhoDFtFxUX5y1c2r1D68mCq7FCBNWfU5zJDpQ7cRz4zcV2VczV4URCG2pn9Fw4gis2A9A979gN3FiQk4FEkic",
  "key34": "jj4Nbx9nudzeoKrb4oYXp9SVwn1h7rFKNVWbQ5EbYcaq4nPsHqkTFpk8PYHzTjN2v9wSUKVc8Vm35qqkLxmAhuL",
  "key35": "5DLa2Q14FdHjmpoz4d2Dwi4CxnPDAYVaC83XAF8P2Sq26A1wPi8Dn2xncGGKXB9NP58gB7wgfx5mr2w2gnxUxJUK",
  "key36": "JZeHAhf946jz7FK1fZbnnnUNPANPiq2bEemmuTDaakhd71jL3q676SqRA8mAJcx6BMN4qUuQY5rzSGujPrYxbsG",
  "key37": "3GSA3cdTJNhU6nZZL2WEj2WmUmwAeNm6MANbC4XQYvgUCPxh7NyMycxwDn6y3zcmfQ1MoyioRbBy9jzG1Z3AMzzi",
  "key38": "5aTDZj4BaPYvBe97Z8xsA1EYJPDHagpVp2NPtS6AwndaRS1xBbQf6BHsAvVPotGQyDgEGvM94EFwoBM7Hs1yt2D8",
  "key39": "dmx4B7M1qy7KPGiradyWvAoexCMKbk3vLh27G6tQ977nQpipa6CMkkTU4j6qQoD3UzKuSgNUSDcy9ia8bA7cWpU",
  "key40": "2t4rpXkT625ek7f2GYyRjiFyUdreY1C9eqr9bczBSbsAfAszHUmGC77zuQNXdgSr9ooAwA36iTAeMtFhSbNGkat2",
  "key41": "38yVpeTjQnetB2TVy7TEZvvN9aPF1P94UaMrn5dNMwNEoY5sFXZpRwB49SQ5yeFMFbiaqdkei5toAZgmvXHhkHvX"
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
