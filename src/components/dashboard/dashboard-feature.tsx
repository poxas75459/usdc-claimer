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
    "GWwnqk6AVMyqNankUQFrqFrqP74XynTqgjTGD97pi4WMPc6T2GBAYXWgjZFjqWpUCgUZ3BJP7S2Zx7m6UP3fDrr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DBGBn85A1xj4RwZL7weJzbkP5rFETQ49q2RJV19fH6fcCFXLGu3Z9gUbt53ykEPXZ8eJhGAh5eT4UKELHSCNtqD",
  "key1": "3db1seqSxqpKAF2Atphx6J3hwNebcTkXUSphV7VN8dxsLxQ2nH5ianyGHFZFFo5bKbmJ8QiA8K9cxKsFQSc35uku",
  "key2": "52RieFZA7pPQXQkELHnXkRh69p16aDA9FZR1TvKBSKNh1ZT2yioF2z7yu3E3w69zW6bDxVQiJSbv6diifQjpPymY",
  "key3": "pVvgMdj2r63nKuVZPg7E5uNeBqrcqrqU72psNQEgp7jPk1Ty89ccgEtrSz8mEKezSajwjXZn9WhDBc1JcBw8TBB",
  "key4": "3CYRjJUXu59zzEuwxeDRcg67SipBmabXbB8Sdkqp5Jt9fxW2TF9py78CRuETU3QnLrVy5msihtwkoTZP6nWsgNBW",
  "key5": "5pi3yhbHcce3HFYkuMXJgDFgxrVMa99MRhs1kDn9YwzB4J1sPS1AYNEsA2KuJPzT5s1R6E2yQ35ZnMFSHfHkZ9cw",
  "key6": "VeLV7tACEuMkauUzzCrvLvfVRcpFQ9YUKzNMvkoVrALxGhot2cTqiBehFXFHZkLuSLVkCcDc4xhTggRm6YtToMF",
  "key7": "5LX1z5PuygLZcJuAigrbB93fDdsh9dFgi7cAovq41X8ApiZvACSprceEMYVmkPNZxL6arM1VGZrbzW8JKuuBGszW",
  "key8": "2a4QWYLNWWm2yGEuiq3Z22ZUgQPD99yCv4Z7DnCCKKsCR8RFdJa94HiJeVA7krngxa1a78YWxM2KgTWEyeJXeNQP",
  "key9": "3vHe9waZKqRJgHLrEjUyubWaBpvGdv7gSXeNEXjzknXioKrP3eQ4dQ8kZCRTPSdLHFBnD5gGMpwqzoo3Mm1Ebp2i",
  "key10": "35BYPLXiWJkngCidYUpW9GYNAomRutWeixodjxx7a599Mo6WXyt5cnWoQNVQsrcAXomCkDeGvC1M3B6s6CdZu632",
  "key11": "4msFseKB5dvFfEoBX1fyi5Rwth5tww4xxNhdyCocsSa14NfgoU3N2q3xXmnjQCZJxL4QocfYqXMkHu7pyMdVo4vx",
  "key12": "4oVw1ujSi5M4mVHCg8Wov87rmtfNmM6wokV3nv1qjfpUv6t9vcujSLriK3GaNkHVfqZPHz1mGoD6zDBuXYQFfzMW",
  "key13": "msLpsfRMv1P69JKheCZCVTKDciRjf3WfbWhvffqn8rJrkeXaL6rdVdzdh22X7qhcUWD2rb7FMkCjX5w5D6ddtgy",
  "key14": "5fxkyjDbZ9udu6gsX9ZV6ETLFhi25NZmrYAUEpXaihb8Xu4gg2CGunDZyrWmTCVnnKFULZbzLPRDJ9d6uAqPsxyV",
  "key15": "hT2U1gWDXftwY2D6uYo7iq1Yo2xJNLMgVv7J9CzAn1m2sSCSZtYVA421ksyvQq1jvmqtUuvpWVkAMkK61ZDEsns",
  "key16": "34Lb9DsMa7koWJPS44DpB1ANvunPb9RtSaSWVX7RZzotVuuBGR19T46Pm9DGTJq6TqAbtvaUzszUxqvqKK6T37qX",
  "key17": "2cdEjRZLcqLAa7GNoreHDtd3g4LevWvAwrfkfqTX5DRtRBTkjU3WGkLfzSYnmcMhJ2VKFZbKhAyLxZaevdrwHjiF",
  "key18": "2ZwsUgLNF2wDPRpPFYJGYDWTx1wXGLD61cxkPtXzWQdEfq6o7wz6cwsVEE7akfZk4NQ66DDm1neZDxCmKJTPryLt",
  "key19": "2C4Zfe5wKPQr1exgPSLFPDbPbhvetvawt5xedFdDzh8xh21ZQ4K2HhAo4BYrPisdAgjy8QFiPyekW1TcPEDTscEp",
  "key20": "i8qhf8ibSajybSSFAidpB16aPZDFJbPQpS5YvmxA3ZT4GVr1QrbWbASjUjw1ToHz1efXxgnKxfXaxyyFSbGQCf8",
  "key21": "2iFYgfSd7JQPQqWiSuGAkzwc4SNyCRMteTciPBAjNiB2VeYQkY6DxnULXGTP54mnufTzsSiTbhrxbaTmWVjwuDRS",
  "key22": "3DgxSqqheNxhY1HCSLVwWtM4SKNaD5Y4TgSamp1Gjm3vBAoPEuxhczqdgLbH9Ca3S4fftmHy6FBRsdnnycADh2GG",
  "key23": "3prKSDi5XvpVMekQpUwycrxMXarTys4uD2aTBpB3AZwZYAyELibvyZ3vTdZTNrCWhPi85hMu3Ji2YrZpttSzqTXS",
  "key24": "3SmTt9XgRyBXCw1pN5RxkRoKEaMTXDNc1xsWCop4zqvYQCftS5tuCu9q7j1thtMrjwwsrKpHVTDXRSB2KntA5ssS",
  "key25": "4etuciUUp2Vn556hc1fx4cQTXC3vjG4D5gjnPxAq6WxAqpUciESuSCiueVskyBWKVq9dLFkrPi8czgWfZh8UKWat",
  "key26": "4fTUsPDybKKXo826XWkrBq4fZ89FKfScRYHa8FfrFEA86NG5x62tTDeVJS8Fqc4Ygcu3SKmxs2oj3kQfEvZSeEGv",
  "key27": "66U1JpYckyRzJuLAdtpPxETqdJmU93bZTcdDtDEwZj3qqVzv9JpTZWeqF2L4ipinka8oqYZUeEzLNsz8GJfpvJ29",
  "key28": "5J37nConwk9Hd7oHsbnjqwLUgBftPzWdgva7S3TLqgywxqYoPGzHsim47gnbF5YKTpJydRZ2ZCWBcBgBA6PzY7cG",
  "key29": "3ZZrayTDkE6iiYM45UwVJXSuYcqJxFwHaSjb1aZVT7RY4U4jp56dGjNvb5x8En8mJTP7xCAVLEcjXKEUt961ME2P",
  "key30": "2WQL6yhhsL3bhEQobJ7uUx62rvfC5RxTFgrfp3vVXF4uTp2NcKxHJHZJKaEwfUMqrTqjT71qTmovUacrYKJwKqoP",
  "key31": "4peo9AfKgw2duPMmj43pBtbAtB77rr8Zkdra6pxh29j1TEZKDoBoqPuobJpMT7vTEXQHgrJxURyCWNMu1SV4ZHhT",
  "key32": "3Mmio7TJVJuFph2rz4Ay6fGjNUBmAKfc3LMLnPuifKeqBeXvBC4YTd5dFYVwc6Q5x8dUiUUE4Yi8WCyWzhK6BMXa",
  "key33": "4HsXcVMaF9DdBgTQ3BwSaoBmWd4Q6Jvw3LbTTfz66bj3QMy4g3Qa784bkxQYbRSDRZ6NqrgcZ6xqCNiHzWVDLMTg",
  "key34": "W2d1nshdwrsHaRxXvVJ7Jpiq9edTiNeJctd2Gw39gVpnTVYhLtLGXWN2Nb4u7AhN8akdyyYjRCnzjtJPFFuDwbv",
  "key35": "48Xzz9YGDSfJiyLFKx3g2c49ff74c1gdJBZrEvq7KUaDFQuL8hx3efZ2Y4hHejgsTHmzoyJpGTGwpqxkCsmn3Cc2",
  "key36": "LowF8ZzRA3z6w6rShuzKnPtUUmuxqf28D2qULVocpU9X6dDBGUkFdhcdPKkd6obxxCZ1jcpujuKLYRVYMBvEods",
  "key37": "32BosQRoDanVNBZphxqTnU4md7kNxbxy8taa625mUVyxYrodjwt2uvdy6cgsMjWSR6ekJkLYUkJT885P5UufqoSU",
  "key38": "52tJcdfurzrpMN486PpszPBLqG24AF5VAn2gtCKbVuRZStdpBvubV6r5F7qiVnsbE7iy9P874udcpkkdCw9RgF7v",
  "key39": "4feLZV6AmJwAEBnq3amorzEgkhgzoEumvhujDxQrh7NCgvnRs9x43GjGxcyZkkAPh855DxbPbFLAzY4EsHEzUyav",
  "key40": "5tn3v5poXTP4RnHmrjCgnKJCewu7oF1j1zz5rhBF8Uh3eAdjENhNS5mEEtXPa6HURzR5zz6krBMqbSLn1W7TZLrg",
  "key41": "3rRYmxvXGw1civ7txHd8fFgjUpHaxZ1zbNoBkPcAcXPLxekdD34yKY9ede8aVWk7bBJT6NgBceQ8ywVAeq51WyYP",
  "key42": "4C8VzLccGBYhTa8rbBHi9CD1iQWhZJMmoirJeNyUK2qi5ZwMpEdoBnNJAaioZxZCyCcai8NMZjr8pueT4mfaK6xL"
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
