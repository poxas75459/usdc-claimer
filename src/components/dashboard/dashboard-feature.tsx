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
    "3bi3w48fprox7HspvhAmHxVUYCwEEEfzTvj6GTWPt47VACCfcZGE7Amhg6wkpMjYqKvA6eE46pVUVZ1Em2qwgbFY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FY1tCZZxynYHFtCro97Pv2whNGDPcFJMqzNWLxHbLhZKoaWdzhWWHdELFA7g986bnA9YxgLZ7ygfGzNCAHbTvwY",
  "key1": "2oYeDjDQL7DE3rB49b1mH478LYmiKYzviZnQrsuQv3LNpFJNKnihMNL3VF7dmYdV2o3P36RE9Rd3qWASCCrJvQDi",
  "key2": "4sJ41qv3yvkDEDBXSTgDfQ1bnoGVAzzwCxrepeCzBfzPhutcFKPLW1xoeKrfoBz1nSGL6qNppU9ondRh4hzk4n34",
  "key3": "3FgsP7fghjaZi6dqai9wVEvbPUZgrJCHgb2tXupzHV4Kyg3KWmNj5U2twy1iLA8Euaq2xxm4oxCrqgZ1gVAJyuVr",
  "key4": "3qRPeVuBdfaz97vK29YuKr7c2Fk7JKJCYe4SiKDCFwiVmC2hEcovzu1PLmxJsepxAzirn92asSjbdSihTPkgepx6",
  "key5": "WYTmf1g4WmSQ4UjuywtyHBZJ1XmUWiXASkFkSp6ooVwhGdTT7menKpCHXcYnJFh4982w4jhvzSH7EBYR7m1E6SL",
  "key6": "TiVxMdU8EPsMrE8UARXDareZVSmxtNUtHFm5fmYRyvZpSx6zUStXcdBCKPYQVauTK96SsXM27aZAVF4Rj9Y2ZfL",
  "key7": "4hZ5Be2qrMpECHntD2oZuGSTfg1d1VeEFS6XcBFeCEAAFFqc7WxbANPJt5JpzCsdUTTdgBw8nX4ZQ2qaWs3m8DyP",
  "key8": "5r2GTSpX8TnByTcTnBJzgrCJNaJGjoTRdaid1isHK8RLJKHx1tVNBhfDJPVx65shmnX6NZMUQ97CAtu1F9HS7oSz",
  "key9": "5ZTD2DThnJXC7ecs7nkLKtXPLwfykuK1GcnJj2g3tPa7FPUd9X6PEawYv9rUbeL5vDYdMCoo3Pq1NjinckyHjsUA",
  "key10": "5XdnFnoF6XNVhi1a4xnCnvuCDj6LK9Dsy7H5PfHKoonzW8mLRrNGQraVCeDUr9PDYcLHBW1uDXn1vUupuYDe8eZ2",
  "key11": "w337B1wLPBPtnJTsKHitqx6eMS4fz2hYLSvMf7xufXPVTVPK4T5RUEAnPVoaujT7mQXU8mb4e8MTL7JSKHejPXz",
  "key12": "42L6gdqTgTkDwm5QCamLMBXcsTMoyHprUM7t4CyEXFMdZKXmK6UcwmtSZEyYEv5fjMKdUZw5mnJKyAqWCfwTQRZQ",
  "key13": "56pxrdhw9a9FLzpjky8BvAAfVVbFBaoVJmLdhC6hZUA3pXxWt8AvDipzZ8tb43h7wDJQ1KJ5jrfCbLjdSfZFmKkM",
  "key14": "2cNyKSs5mwMeqN7Q9mYmJ3919wnXuaXCqJBMZQ1CpcMhja4LHd7nusYiwmd1XcJpyM3VydQQHFgPWtGHAMEjHCu5",
  "key15": "3sE1KYNpxg1kLjhoLz6hQv6Df9BC6iMtvhSdpXXjJieD7dzC5XCKis6z3YCjgCt1siN61P1SiriP5g6dZmN42EZA",
  "key16": "3VoPAdcwpghh1JK4w7Uzi8Z4E4ruXcQywDRhprmnZygfSXqcDzkaMeCLKemuBS97GYacYhad2nHnYPLdR7UdaHCC",
  "key17": "ukneDL5bT58NwzeqFAfuGKssybA2DtL5qd1i4n2TrKLuHubHBBdK7XvjSVNjWV9XsGztgd93q57Tcq62jTNLS8Z",
  "key18": "KTtMY1VaESqx3Akd3w79oBsaWhT9MBvRDMitwfz3jxxAC9tU14mWCbkv3oZY9KEJtc9cvpJi2Bo1bEeKMicu2mp",
  "key19": "vGkcszpW5h8T1BAE8mVDCHy8N2nwJojNRFbqwWSnU5mVYLWPduKH7iJFRT74DxhTFcxZuKv2W9Xdp4WZHHue1gP",
  "key20": "2ytnRPkKRJ43mXmNVhuUjPG3wwisBdVkhMv6XwrN3fdEs39PZWyVmngBdkMdULUrMCuHmKFFzXYd3ZhU4pVv9WaP",
  "key21": "5j3GMSA68JzMU3GftqNkhARunarCtRkqJqduzzcLzx31FAwDHUeTn6tYDokV9wE9SyQmmS7sV8WxCHrFn2pAnpV7",
  "key22": "3aP83w4ULZr6n4PMjay86qxGnTBmhnBj8Qps8saVNgdFjW8Cos6PH1pnWKbGpuxMFAa6SE6KiCPR5Gt2HSZSrKB6",
  "key23": "3e6qbgLfCgzovjBvsD5mEsYq1eAJXcjvbR76xhkHd8aHAnCiHiYjjbPD6YM7rGRXv7hPwvVPtgy6JJPvsHsz7X4t",
  "key24": "21mZ5TBe3DUPfjepGCXwR3eXDiCtPyyW9ofx4Yg6rLcisZJ1cU7x6KEcTjLwmsBhZusYxSTfsaMQ7SqucCXQYVxy",
  "key25": "4HCu48BjmoSTCEy58uJUYqatvGepP6inHz22wMdXAseTC5jVzmUqd9YEPgsEyX7pSDzPrUnh4DjsogW6eeKwaoAu"
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
