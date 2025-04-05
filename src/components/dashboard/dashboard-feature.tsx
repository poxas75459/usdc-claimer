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
    "2dfzb1auq6AuGc7czJWqDha9G1d7RdY9F65UtrFRqUxfzHrJ11iHDGi767B5j5jeCghbY84wpq4zTJgcY32zHJiQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AtWmGmGm16mnMJZpX48HcWxqRuS3FJi3iBoghA3XPTm5EZeoKMjkTWxPAoPkJYkXytbB6kvng74AgyT5R7Ruhx8",
  "key1": "4EcrCGVrUy4gfGw9yG2qGSpvTLzchgBKJDBVoGsgZPoXfq9BvgX2x4RUSpoTXvhDvuD5LNCvn6F9nVffUm2beFMg",
  "key2": "2VCNMdHpTeHcoG58Q5HBT6By1r8CwGfBgzrtCNAswrWVXchYFCcFoC6dCZS6BHAx2JtiDHwighku9aUN5aE3YipD",
  "key3": "42YmoNHadjyJnpevSZBEJaEJdMS2fSqQReQGWuhj2RD4ZGfQuiWW3Gjpunyhd9fct67Wefgj4aT6E2xaAdBEKCTT",
  "key4": "3oUuAWTuiE1wsutTsDhVKQpfJH316HMn81c57yoUv5aDcbvn1ati8VAhUQJeFfRk3KgWZEeDPZTdPTGh5oHC5d3y",
  "key5": "5qYEAsixPCUhcuhn6LFWomwSFEn1phiA9oLQyEpm9aWdD4w62PyGrGjkx4RFrGt3upoiTh8PTMFBqdJkiL7fdqrC",
  "key6": "ZQtujHWDW3h1avZ3fmH6Kbcw1rnJ7GGbvPRqUBYgucU1TuyekuCbwE4Zv2XdL1TfKcUmMoNrxhUxcKo4y7gADzE",
  "key7": "3aUwZL1ia7JB7436xDEpT3d4wZoXpL1AAyUDNFm4PebXmNSb2yak681TT9kFFLoqHyGBhRowjmVWyXW4WrtzGae2",
  "key8": "6vtVqGvV8D5SE45SLy4EktLNiNYUCnA7pogK2za8rYY18c6VoxHyWHtv3rDbG5DxpQqmExMYL97qDGLPFTKtvzV",
  "key9": "3s2PpvJ1iAUnEGBo8qbKRgSoZ7osbFeMW4xhiutLT6PKp27wRCByWZN2v4fRq6Xx6gHyFw71FnpVWhD4NoyVtQ4w",
  "key10": "3a5jxVET8D6u1CoDb43v5TY1xTYqFX94xWo9hFv7co4xy3LrArmmskugfdsMitT9eLU4CSeL3cq8WV96Fb3zQaZW",
  "key11": "cSKRdACF1rvyfKCTw2Cg7BqU2SBgQX8uV3erQjuM68XFfMbkHbKb5MpVwd6u64VDUF1ZdGTH4D2Fihw42exjAAj",
  "key12": "5ydi3s3zaeeBWVW2oakp8XSy8FoSe9zL4c3LAgZYP1SiCUTZznjTQ7iAVm1w7exg3Li5ZXEkxkDDxD5PDqJfxE3B",
  "key13": "2oThEgTzPjUQTnTqD3GWKRrxG8Nki8pZ5heW7LopBCPK5DHzdd1Mtv9iSmLep9DRP9W9UkrQxWwxjc2WjgyxaPoZ",
  "key14": "3YM2Zp5ntDdCLpn8iFdfBZGAx6rkgxbT954b5UaQrioXzsZpezHmCEGvsUhpfWKLcAWNG5FEiFVyLEvJXTfdbUkW",
  "key15": "3iva2XeA9r4nH7MCdVxrWjeT9ZTQHURFn2GibkAV5sTxaYFJKskHMzUDX7jx9x7kJjGPrQHozxsKanQ9v5pCDJ2U",
  "key16": "67UjwgW3DjkJu5EK7JPJzKozzA2PEBWNuwS6UoPG776ecBMJEpvPtmrDmQa2DSee6au682pj39BxyD2Nwuj31DjS",
  "key17": "2d1rEzDU9d2aVeAxRsZzmpBW5Nbiyvs37Tz2tT8sXxDbcSHyn4NMgtBCRjaWtG9JBU4cZwQ9hWwK5yALx36pYTcS",
  "key18": "2CBuqy4r5eCkA67Kk91dDmNuvHd6rrfNPtGw5isPhXsU923GQoEvMhZCU2YPnZyTn4wwEqC8yAGNMkUjzV4u6sbY",
  "key19": "4nusxvNdwc2gf6nLtqkzrn4i3GDmPBv7Q2ng9epb69t3uUQkE6v77RxZs9QjWTa9VKUuzCf1E1eBxEULH1x71Su4",
  "key20": "2b4uFYVuw6D4i56zjDiKuPY6AF3xkfNQp8wYLzbezKcfBBHmBt2JXxqfPHvpFraoREZzPtFs5JbggAGLViWSGRMt",
  "key21": "3djWoZJRCriDpC7gfN8cQaXTw6LCHusZjr8QTRFVXE1oLYc6L7B5i33BMMVSphpbxcUt1FvHvLBxHxWbyzbQMeEr",
  "key22": "cC3tpRMCwB2DsNtMuxoig1q1t6YvHE5CWP9heLeuSv4bWfHybWASPPwzcujhWhwJD4dzWRgonHeHBZvXvpEhLmr",
  "key23": "3fqj6yuX44G5xDVveQ7pMSDcEKhQkT9q3TM9Ryt1XroCcd7srqVm7z8snCo1Hfqys8zNGnEinx8bvuV21VEkTVz5",
  "key24": "yJbf3dE63gwvH6CdFuVzfayESS7hfA8BEE89FTpM7FXiK7ZXhYiNRsECgHjy8knutd8FF36SRwa6QKrdBF6HGbY",
  "key25": "51sNQ2RsxUYeGHtjYTRRvSd1MkC5V29tqEMLK355VK3FJS3aXAyZQQAGxWx2JymCrtnRggAg67GQChk6Uz2ExbSx",
  "key26": "4pGYPs7Xd7iL8vJaeKGuAdWRT2oxGbCf4JETDiMdqfENB1X2dBUntYELe6LsKsVRfTCbxDiXMV7mZUrwUBTJ7dc6",
  "key27": "3ngnd6GrL8GcuSX4JS3z3br3gcsJ4fwg9mCENTzuMUXJHpbdeYJb56LBPTQP7bHFTN67WMRo46bmWKq2WYCksSD2",
  "key28": "4ZrfYeuMe7LiacNz7UPTD8Zv2Dt7ooztNxYd87pu7duJmUSbBFnaQrJGSHWyomPBmZUhJwom7TurUpGjYSwio9iE",
  "key29": "5d2XgZ6ZtNsHBZDo7feoDneXd6kw8QMdRhrKbG5rEMv4VB7w3CaRmStFGcSUTTW7RHfc29HwdQBtnQ7yRFWPK4as",
  "key30": "5L59skEbt6hCfzBf6RksVaTfBuqmRQKBeWLRKSnAQRNAfCAeFHELpL14T5wmaPhpKpQCH8zvU8hpTJHGPu9tGWQd",
  "key31": "vbe7sp7kgFPhuGY2Hf8WNmJqGaHoXq31xQaWBUEj2tVAdSFrfCDL4hADPAxjX6GRztr1d1bFZxQQ5iyvkMNER3R",
  "key32": "4yzom1KYHcgLYduYWHp7GKv9ZCzCmFEkhZRwiuVjtNE9THjG36yS7uzhWc3tSKqUqAznjGPJofGX9kaB6TLA3Wyc",
  "key33": "363RAc7mMqyBCBb1TqsPwJB9FnEVP2t93qcb3CyeL47xBG7bsRkeq3vdXwD4Cbpoxxw2C7Z8oAiyasLyPg2wHFJT",
  "key34": "2Uxi7NnXd9XSVYXfbMc7WcstV2LFoub1x3nGnxZLAxgsGV2Hc8SvGMBsP2XMPuRHemaxDM4KZyV12YyYtZzBxDri",
  "key35": "spLhE3tJ7pouxuQGVCRpbJ3uaA1pvutHareATb6Kb1KaPESbJ9JjyYCExmKYCJuGUVaB5af4YwhSmvwQYRGYkqP",
  "key36": "2tmmPpvmLxsohhPVB4duVUJqpFv2EWn1A9bmw2Sc5LtHiZMCnt2jcAVVXhvpg9gS6xzT4D7pUW9uNUQY6MPf3j8B",
  "key37": "3bp9Fwc8SGzXzqWt6avyvkro5mY6h8V6JYp2GENL55y79AcmFakKvdSbacv6TQJKtbHcjgfqqn6FsNu9b3gR3sUP",
  "key38": "3bdHmGwWUbknrPSVpUn7qgGFT6N5TwXy4aDpz89CQJwVQJ9XpFXTwnd6YxKBwQoSM5nwpX6SNFFhyHNem37aJYoE",
  "key39": "3uX8d1HMsiEXok8tVpiRP2nD3QQmZ7uiiUKGyviS8ud16rVq3yrgKQyJDFNjELqnRRRoiGpJYkvTLYBahEckax7a",
  "key40": "3oaPkgHWjxksHFUr114CWNVSehveGaBXapNfKihxwKPPZReumxcuYj5jCi84mBeVfqMgtbX9op7WXecKu3bDKqbY",
  "key41": "623paeCSbiBnc5htThDVc4PUJ7md2s9S8r7HA5WuDDh9VpwQpm179L5Q6jZpREn2UfKxq4trzudWpnbyzRYfoong",
  "key42": "9CC4K6b12DJz1oouQdsRHnUhzecwGyWHceKEbwp7tqiE181kHsnsWkYGzeScmDA1cL6eLmEz1QugQDsCsNqqwma",
  "key43": "5zpfzEJQh2ui5Bp6zkrMa74G3x6gT831FnGy8EWXohBdDSajZ2CaUyMcDEsHWuzQiyXBdoTgQzMQVtLzBqj1mUFA",
  "key44": "5C99StBwkuxjJinAaqKkFW4NxFmyfXSjrzWQgVXrDkqDUhPQzbo9ECTx3UDB6FQxZKbyootG7oWpExZaWjXZkQHd"
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
