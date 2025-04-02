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
    "3Yy27vvUv8Ht7Qw1ngdpFp79kLmjN5kzDnn927E3gkUeP5n85GAoGHQE8Y36jSs4Wt7MibkoBoBg3v6jCZQmrktf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NVvPimEEyxrW2DZA4QHkDuHKhWiC3wLpGAxaR8HyRFboRMC1sfJ9JVoi2bbiXBadpFt5uQ4n2266sf5nXCs3gD3",
  "key1": "32pdCxpqUZgUZeAkGpUkfJGjBRmw93Y4hwVyHEMiwW9aFWtLo9jfbGyy97JjKyPWpKbksnCKxXhCaJQMCWy5asQt",
  "key2": "4w68tzrfms6iY3KpHw2VY2es96cqAYFgnXukxy8nZvrFQ9viTHBQmD9mksNH6kEL5i7PhysUCfPhrf8jictKVJGX",
  "key3": "4AR5YcN7GWdBQJq4VSGCTqCAqUdUbgdHjJeAS9Z7SBpxm1WtuPtmgRgEddQczUTuwfy95WfDbuPEHztkbanefu6s",
  "key4": "2D66RnXc98yqF97KYLxYs4E4Tvsmeo7zjYz7mivtspoEgrkb3xsiBodUjTdEm5UnBv2ztXoZ2jyPZgUDwqaQMFfm",
  "key5": "4eQvGEDckFMXG35oWHG1g84QkjeESzvFjDt6ZVBumrH5TVcLJ2edbGC1HnQfwDiNnfAUZ9y4NQxW8Vuzf17gbALn",
  "key6": "5ENKJx2GLySbJ1zQzwRuJPwMNNU1WZJDTqj9CWzwYz3djp9LQnuva7p1KzUdYBLd3wyGU6R2QHeapG3bJzjKmCxd",
  "key7": "VkZQ3Rc5mHN7xSYraMofy8geAta1p1hBaFpVn1QwPTW5b3dKbT9HqoEHkJKLDHyLCrXtyaAV6M7sPSnfSSjKkHw",
  "key8": "4uPjRHDF693kMiAokMBTFcfz1BjG72UixZYcps3tFi8ZQQufQC9XBFMm5MdtuPaCfumzpEKvafbQNEc3WtX3Jvjn",
  "key9": "4fEzgb18WZQpowKkfRqw5zEuhdtgYUGnJa2nqoUzuk9rGFpckABSbi7bhP5WcSyh5vpSr86GwxiLz6GLt7iPTHMu",
  "key10": "Qk77rzU5J2i1wo5p5iK9XK32rM7EbridYXHajsNShKP1zJB1nWVRcSveyu4FBT4ZfpYh36B1VxizPwPrARbaH94",
  "key11": "3FD3RY32Ew4xTepRGqfJWufUTYxdTqLsNRUU6kGm3hhFpdKt9e1naDPVdLxZXJ3L1Y3qkbKu86RoSy6pWY7Jkxt2",
  "key12": "5q3rAtbHsgXaqqvxw5gq724BiCexkFzFBxx5oTF35FjhNtsbXjEUw2QmS5PNHcByhRX42Eys4kRp69N7k14tiT4i",
  "key13": "2t1ncqWCTfcQtNKkfJ2MphEvGMYwnxFczGCmBPqgj4FjWnx5Nux5B2ZuW7EGLbPRFfG1PFCgVAheoUQHSyNxMa4b",
  "key14": "3Dgtmwkh9WUip4X3hWenGWhAEDMe5PK8P7DrjZzGQvBYcWtbZYpSWtswka5eRNMNau9ZM2g7b8qo8M5NXUyWV5p9",
  "key15": "384JHsdmmc1TDSoCogE2WXsd39kH1echS7aLh3jTnk91DMyP7whdK4hfG1b57Yjwkh4RtcDrdEWUnHnBgEqnqUur",
  "key16": "4deRYGCiXFGRUvSzFhmiNXK5B2seLc8eYtB5LkVecXaeCc3LvsTcoPtkjJZy5DL8KUrWMP7zH773nf2ksa4TQS7a",
  "key17": "5RagXkxymsi92WahrkZ6CteJrS4F9Ukd7dspYC8V6aAg6PF3faoS9JXr1U8qEE3b258Lx71jbGgsiY6ks147u6eF",
  "key18": "5LK7AekfaoCvedcr4PxAdL7prTgWndzdt4v54Ljpm7PPFDikQ2hqRSg9dnxht4Fw5XVYTWFvUxitteLCFywBheXB",
  "key19": "25oBpqCvtYc3o5HhsMqB2ZNaKaSiGHQYGt6xm4xTFh9oFWzRtBA8W9zfEvDmNHcJGLz4WpsyYAPveg6JM2hwRbTJ",
  "key20": "3PBGSXPXocsv4N8a5JqZU6kQCkmxw8zwiZ7QuHB8UQ8YUYf5FtqRwqyt6Bw4WD9tX2d9S3CHvR4ZNhrSbuJdgfwn",
  "key21": "47ebqpAbKJ9euy4RFWs9SAgFAM1sdBjJDcmMdRvCrqyTy2xTLMn1UjTXoH1XjdtuLwm18iuLLTBYTo8LgLaapbLZ",
  "key22": "3M9eExpoJri187WDrumtDveTTfy3RiMw66hHKeiuSC3wnQNWLtN7z6UT5xdRD1dfyXx8LsqwPnStKTuLCcfXYBhE",
  "key23": "4HUcChrSK1UotGkMjVm5yzMLqaRLqK4CNSQrnhd8a5hDXj2WJDgXTM7TXuVzfdqPDgCvDEBSbJ7uPkRDcahXiY7d",
  "key24": "5iEqKXnW9aHNjtWQqqW72nP4nufJRNTZUNr2WK9v3ThNuw2Shjxi6EPibvwzS3wnY2fH4DtJtSXZo7hUbMt9rFh2",
  "key25": "38dT4mfaxcr8HxiGwiBB5wxH5YuZgcpdBX9goxsRQSDiHipech5J8Drs8cWBhqp4BniwJZWH2kc24btcQX8V8tHZ",
  "key26": "ZCdmTWw5XZ3Wc4hfStCzyFoESHJGXGXtCj7P6LUkUZb8wPDaD72nMbH5m961KhvCwz3SFSa1wbjT3H862raaDxg",
  "key27": "2TCSib8SdCDVoi6SRzPhbmymsbMHa7iCNpQ2eH2beUsg8MbkeExuEU1LDgJEjpHJaTPXZ9hnnjGDEJkAGf6R8Xbh",
  "key28": "8jvmeooaKXspN2r396cQBqssrLa8kY89hYqSeErUDXvcxmMPNNibnoMkBHqLRuy4TkUFof6ZmQX2RCzeCzk79kB",
  "key29": "4sAas55V5zEkZ1edYS3yhhmjtcKEzKB5D8JTgEmKprWQPp6BymmAKnmSbg9EmLbLR42PvgELuSeQ93PgK6KDR4is",
  "key30": "CREym1uz5RrYshrZw2iX8rn93GdXWhAKjrZdY7BsYgDTZ9MKKDs3B5qe8uwy9NTyCvTz9YtLkmZmqBB5pKmAxdf",
  "key31": "63uHFoQm8F6BnCASHbQorTvpVzxZMSbZqz6raoPZu7GsA24P2aBWhqpaU6b5GXouYiz152dtzY1sdkkoVosdMiFi",
  "key32": "3nuCvgdYGdiRDH5u5BbFuZx85bghGsCCwxUXUVdAP9nmq1KNtoYrgupGAdA4Ud54NsiUS2mvn3Eev2jmUEEjYKhC",
  "key33": "5XpPb5XJujrouietfEbVvsP4mmQ5kTDR9ZCq6gzjFHWvz5viqvTQ2K8EUr7S9GPsrkmVtyqwKm8MZJBBxxGg62Ci",
  "key34": "3hb4VP8UMYKg2J1iA8d67oMh59LYUTAs6hzsXYP6XJsHzPRcNA7kK2jng5xSqXjFYECz1bWMET11pTyuubaHVPDC",
  "key35": "3cvrM8nDtRknqMA4dFWrve95N9Z1ENnpsuKepkbkyWefnXBorgAGNkZwuf9g19yUYjZ7zbmPsDJ8U3y2oWhYzQGC",
  "key36": "5u1Hk4zWWa9GwpehWKU5kUkN7C1HE2ttTLG5GsrS45M9j83DAiJkMr51YtRrcgn7jqLD8ReAqXHFdCkUnnFaRWSa",
  "key37": "57tsPq1PfMGUUidX32yM1ffF9Q89PQEK6c6dZy2MyYWPyva3X9LmCGcvDXu1nCvoTWgpAhe4nASEoowPQM1wfNz9",
  "key38": "2Tbs2mQ5a4w5XcTs1KeD64Hfm2ogApYhUvqdnjGUJxeAt75grfEnzv7SLPPN5YaHPCsNQL4rUruSC8kAajouixca",
  "key39": "2NHYm8VT3Q7gUUjriz9MEZxZx9VCFnwdFKbiBJ9aFpGEJzYYpjQDNQJb75cspfsToSHQX9G6MpeMhzp4HwYsbS82"
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
