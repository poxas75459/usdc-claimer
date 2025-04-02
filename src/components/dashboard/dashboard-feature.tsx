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
    "4zzA1dqmUiNywWrRkdycyRHGM8NupmFtL7PW8M1JMfXV2Q22eKiCWmiNDn7s7igrxj6YTDeM6ep5befkS5KsUHS7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kfc2SsVHGtqVr9HVLePfhBLbriHKynsC1cCEHC5sFVCkPy4GPgAnCPDV2o4cZA8VcWed7gXkFCLkZL1HpSWty5i",
  "key1": "4r24JUxRmUBfJTjmFPE9mh2stCE4xArnhyzja8QQFjy5XG1pLA7PSNur7kAxZz4HrSScpanKCASqBCAYgKc4d9vH",
  "key2": "5Quo7T4HXieL41cSS2oQbbzsGBJiYDU1pEsFRLnXmjkgjdouPiUqgEiHP5dHBq8HZsvhLqrsej6JtxvPEL6BWye",
  "key3": "4tNufKRTS2u3MdPZZtYNgkvNqiNrdxfiPEx8zAW2tCQzhd7V6yJy4MbegHB3Vn2LuGuSmNGexzUv5vkbfiiJn8DJ",
  "key4": "5GPWQvCXzJXrtHUqNLRwx4UHE4HAqars5Sutu3dnEALJETXsNjLgEDWKQSaGofSUAJDfpbXVXY7wNQUEt8eYKtjL",
  "key5": "5rDL13txgydapcZKhmjjNDzWS58H6bz3ZU8fQJXbpNDe5FHFnse7tsPY1HKfsuK6Z31rtPC64thoGjMp9YspbGJ7",
  "key6": "29PD9qVaD4s8LxMBGfjPRrGxHTgQf91Jd4RBdD8SCrcjRMepPrunnH7XjKz9M7MxGDHvBDRswLsRseaiNiPDn3dn",
  "key7": "2zrztqVT8gJe4nuszjcWNwtu5quaouwvHdpZjzZLaPg7XmGbfrt16oxpNRfDB33fTT8XX2tKQDBLaEmnzrkeEiGe",
  "key8": "3d34vEJMyGURTy3NbVLDN52euKmtUQMhmaDmDhm29wPMaes3UyL1DpLtHMstNdNFDULD7Xnx4pYXzZH3NwzpXHiN",
  "key9": "4sXzPzLUSu5NDnY3muU9m4R5ChqS7SecmQNAgrnghpU8F2yKXxNnRei9HMoU4LUtkZ17axxcLTk7mcfbKhfgTrs6",
  "key10": "GNDQSNHD3KeVaAGsNNzpnWUBgRiZtAguxbhAuGdV3TU9c4C6QaaBZWmb9ieoLBVAk3VxbbSf8WYA9wqRRJzSgBK",
  "key11": "4phjQwuhn7KPtEZyhvUR6srB7JfvAunUYSNrVdibqXUa61GjKqVV6kKrremY3QpHEkg8Huv582MuRvwxLh7e5y44",
  "key12": "4iBcNanEFEDBLXRRcYoDAerdbNR2EEzo4brfq8zKv7ntMKEQ47Rq4WsBSr3ZSuWvVjWBYcvNhTpL668vyeK8JpNq",
  "key13": "CvBUpSRjL6YCKeRshNEpDn95TMs1Br4wC6UJrQmLEmnNRaitWhWrgjD6jEJSb4thWLRifxzt632d4dZM35B8cAt",
  "key14": "4utEbcwmF88c87wrmraUwxYEb5sLYPWDEv5p9R5WzT2WJMfi3pAA3h5HHWVcUJgvXwh7ne3tcfJNXf3oDXwnoL6X",
  "key15": "3pK3KERQJrz9toicbZidPvyB7XjPHQ1ogSxKsioiGbJMDxCX5VSL1K3uNS6VJpBjj8pamDjSj3E7QjjV27AsdL5R",
  "key16": "2rSYMESjwqc5XSn52Avs2TyfqL4vjdK8k3xax5HXKnV4mhiNogqRwJE8VWwQoJe99EL9NsxGBRGUVD5F4FJ8kGjc",
  "key17": "4cT8Ua2Fzo7fgW8xqj1WYUqm4XsUzYsCZVxLPJMXtBkVmLVp3VHp1PecCt6b72E9dTAzNr2D5qbuQKq3BGx7QzaA",
  "key18": "5UoWfaqgst17ssw8pqXPZCR3ELEXrK2QKPDYzcUjqBgtByHSpn1E99VuDrz6L9gfMyAkA74Ge6jLdmygLRGbNp9R",
  "key19": "4XhVVwUEEFbr3UV3yNX6zxeXcpVNt913agS3aa9Jo4maqBZ1jHXJtDmSgfQQgwA8zweBrKXuiEQbupY5Upmx1ZMj",
  "key20": "3Nohzrn3RrXRavCX9neWMzVsFfXEeK9kG7cbgD4hN4JxynUeqSrL54Yi88aZG155fvm7EpacF9Dc9hEdnksD7XX3",
  "key21": "BZrTo8pHmuUS1kN2UMpaHoAFbw1XJoyHgAGYFCNGwZDGerHysXrCm7PiCRQ4TDw8S1M4vRqwVhFNajF4EhNQkan",
  "key22": "5toDbkQ5JFGZKYfcn4djiK8yYBNP4HkA7LKfYYaBWWTsrenTtHGQmZck78g2WgbexE19JbA5m1F17i7xjDugjdHQ",
  "key23": "y3622WXjVou5WAu9u2XRXwieM7EXubbe3WLgvsRLZgmQKmTXH9GKELcezNC6LMGqmBFGryRUcvtges2egQUyYyi",
  "key24": "61Z4kVtmZkuR96Ut9G4tjGyZ4Ag4CrqW8Z7QUxmHCmSjevzXbuwi1GPEK4Byw2wQuLP1irnjpkEpc6NMQfr3ntZr",
  "key25": "3rToWUawfCYqvBqV52tkvGyLdz5KRHFfmF4bhz2WhvENHdyBQrc7xGE9McwGcHAr1HA4uVpfhhQxForvU35C9yLH",
  "key26": "4U7yFunLFiB4HKSicUYB8tHchjDMFXfuCyaLoFGeQqdn9LitcUGQYS9yfFj2KcC5uzcLVurZnqr6godXqWE2Yw3a",
  "key27": "4jVDgroqeCswCPo3u2UXp2HDuJMD8FdjzVNUme1ggvNMepNGLitWVEm4Tn3bTVYxhnSJQzz69fPfTu1dAhXtfRaB",
  "key28": "4AywpUsUPaoHFgjVKgrv5i2NRwYCFxDGmzLQooqsTw7BfTxWL5BnXjkTyXGwTWGVJeYipghWWhMF84cb7E9a9NEm",
  "key29": "mNL3vftgMG4q1UDDYPWdpCUmFM9cquzHsZ2sKkpWMz4ZSkwBcZArCfLev6eVGywHF9iM48dvpT9PG3LQA4SNbUL",
  "key30": "3cGLs4qcf6Z51Bw4SWf8FoekJ39wqHssE33Wn2d6QFLw3k1xWH6KQ6rufFPToKuhPSxyQ5a1dN1TUmKty6U3rxRx",
  "key31": "3bDZRvjxv3fh7CNzFof3vZkpHaZp5FomPMr1waemLz6cjDcsFs7m6C2rt9QWDMagu54mHxKWrrmJKz4Zcud6iWk6",
  "key32": "27iQQHdJUB5f5UMmV5KwWwHSK7dmhMipgw1f1VYyxiZXj6H2vB8bdvoC2BDaWnDsWC4cfUwqYpb3BqJ83snRcQFr",
  "key33": "5V8YPQneEzarV36kBASP1tLBJoby64oAJdrk8boxYrJMpcaaHe1Pneuj6HTwsdUv5oGYdYNAsJYSLr6XUUGCRugg",
  "key34": "4F8GzCNXyevubAaTTmVjyeH1jVeJya2gpzqh2Uw2Vmf1yubBEVxYAvk7ECwoko4px2mbNxEr134KoeJVi9v9pvxF",
  "key35": "5f7YGoBM3gKruysDacq22kqUW2spf9MUdFAqiwfmJmk6vV2eJWWFKNrm3Srf1LbKqYUhzKpXGu8uoiVsdQLMd5uT",
  "key36": "2p1E9KDtRCQWTuYna8DEiPbtHU64WoQLjFpdfBBNgJXbsjQTGeDaCD6a2QXjczBncRBJvFet1NQRqaijfYNngRy2",
  "key37": "dqpmKM4PpdqtxS3zjkL8zt3ZTkPaauXmZZnomFjUCiTXLnQsyjsXmn1Liyesnxa6K31EnredxAxrszDyb2Gxe4h",
  "key38": "L4KvqCheLoiQb5NDGjsDxoKjAJ1qt9jy3ptADGCCtnm7DMkVLNFEavKiH2AvmsaMWqeR7PCiMekVGGqMgsb5a9p",
  "key39": "65jEJEpwqeAdArr4Ugtqct9fbb6mbXAzEKxHqtkc8ZSCR4cqS73T4eQPhCdLRedC8D41AJXr3JUcDuUBsSFHmaH3",
  "key40": "yGyrp1kpdJQWwcd1cD3pgsJ524gMze2aDzSyK3fLvxYJPNzL8ajq22jxmWYB97XHs5M5cFQUoMSMia9EFFBPSRB",
  "key41": "38SyzJkAw1UptZxpBT5cRA8WyuW7M9BLKh8PC6mnCbVQgnVWtseLbpRY6aKZD5NCowEHXHgVfFCwGF8xTTt83Dzv",
  "key42": "4YEWDRxGLoGCankgo5cWVYVN76sSauk2BKmTjSL7aRvrG5TYzkJQZfynGyCi2oxvkc7YAcJFJwyn3THJu1ZG4VgY"
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
