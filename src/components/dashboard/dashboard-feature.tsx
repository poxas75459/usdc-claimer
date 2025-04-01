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
    "4ukorkkz5xm5QT67jP5ha5N4YZxKPu3d6gmVN2qWD4C5z74TCz2sSov5inpSCRxyEMfQizdRqe1xYQFKLaAMazfM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GZPey48LBtWBduhYyDFezSLWiq7Jife1ie3e8Vg8ctffHyXP5wzeosLAEzzSs1shtyPSsANfSfq6drhjmgK2miQ",
  "key1": "2hhmHqJ3ieJeMTE1qkeQZA8ntHF4oV3HGZCHPVvHaC6mknhv2HvwpnCj441rWUboMKYeacvWanqH9FDtWRnzcCEb",
  "key2": "3mDcXDYrc7X2ZLtUhJ5X64vZDdntjzZ2PdtUWkt8MVZ6AUU7NmTXuMAWhCQiM9YmA5pKBuaXvYuvfxKSiFKdsinH",
  "key3": "36pEpn5zKgeaVyvwnZYbAatLrs2HzQkSA8UtaTzCZhhDVnK65ANxyPVYTWBUUAE7j9yn4YEavSwXxaWyQ1gTZQQt",
  "key4": "5Rtx8GBsRMLYL81MwNEbCBQWVQXvzELsKpjxKP4KnBFVZEoVacRH7dwJBjKbAryXhupMC9kW5sdoEZFskVfwrWBr",
  "key5": "MHXiJr9kxRf66adYE3ao74XJCNTgRkHnLyUjJyN3NYpKNLfpBDyQGBjyua9TjJpSYZM7qdVofGFNimuCoX765Km",
  "key6": "TQKVnxsLutXcSFwMxjK8SGaxikKxjLUHCyvpStXtvVTwuSpoehUeEk1QnnKhUT1SugGtnwiXs5bkfAnY4okMPDi",
  "key7": "4i6DD7GTJ3GAxNoEdwVsxic94YqrAoDStPqda1gvrtLCPi6QafCrAFjbDdafXVDi2EwibhqKLYfcRiqbBkeHwerf",
  "key8": "4i69r71WRZ2edz4hExLkkqi4g1a9KUZLuFXNbvwcdg6ZHXqQUCEzzmF5jMuMP6sMNPG24sktvN6yvPkqPZA5DGQC",
  "key9": "25spoikxD2pddxxzVWZ8Zes1vJdTa1GrbfC1cht6mSobc8hN7u2iBZM88MD4PehWmSVVJ6hTjCunvcJVN7PiwSwi",
  "key10": "5sKDX9gGpNuWozKjRCY9wTmHMiE1wvhVyHnYzT9ZHVV9VgJi1fCZSAs4vihXNMiGPB6Yc7z2LmqtaGatyBoRXMEH",
  "key11": "MGcMEQY513rcyx5c25fPpBkkrwH8BsqaAd8kvZC8fCnHzz9tg96RQdC2GUi5RjLHriVWwqroFaoW5GtFiujyHiD",
  "key12": "4iDmvxsrPPBdjbxGJrgJNnWHo9pnpi4dHu9XZPQLSgYAhpeWD78T4fGgpG5bx6bZusuUVw4FBPX62SxKAJ685XC1",
  "key13": "kzu7Vif2guzNApqap9Gw2RTm5pLbr8cWAWfwkApjNYhwubiP6gu8Nx2kkQdRf1vHJgakmD5hM4xbuGWh2qHT9tr",
  "key14": "2DY4VXQrNKhbwZL6WWMrzhExBEHAhRdTpzExvU6VzdCREUMcAtWRbe84XpzNEiRx1tzFSptoW6DrzjYUKm8QukAM",
  "key15": "53gJYomVAtp5QCYCxhgXTj9PLqsVwmjM4j8kdKs1uLMpWZ4S9AmQkzhSdtXJ561rJPUjnsw6escQvZrEoJjUxdnM",
  "key16": "3MienTFFJTRonSMec7Nr1pswq3VtFH86zJYwXYpLrdYZNFtJkFAxoedVSNqzXNYjShwrknTf2AcorUSAYpyedsXa",
  "key17": "38FiCEU2WVoJeD93eU1NXtWiNH3xLiTFpee9sjFsarne2Eb6TAeRJjLnCyFz4eeJzAkBuWiSWTQTxu6KGtjaeYRy",
  "key18": "y6hewq8cRYxnQckPeZf5yoedCaDDPmwJE8vsWiKaW61JZbsmnxeKy7VHrakJ4NgZq2HCDrpC5TNdRBFdMASt6L7",
  "key19": "3sCnik2XjiMLmDoR4qgrqZzGEK9zxeELwYmxCMCkXQbfFZS6VXEXZHnKAfZQ7rRo6PoCXH8MX6uHvfsJmqwG2xy9",
  "key20": "4angtLJjm4hFiMhByVH4G5gYCZDURkafM4n5Qm5CibCHxjTSCbtciKhJBNYbsYai87JHgK3kXUnu7RzpB86vGK4i",
  "key21": "3J6EfVfNjem7buM5edKAmFhseGXSyYZngzqqS5Eo6HAjsdmLt3PzP5mRozWj4JtSzkxuePeoNnMqnAJHvzPMqe6H",
  "key22": "4EGzVr9LeZa31s8dgZ1fXuHuFWngVS3EUEUKpeKqZpxSE4qnVa6PnWBDX3LWpYgr39mzb2n5WcutwEYQJ3KEw9p5",
  "key23": "4bTZqib2WUC1ZZdaibXtPEWdLyw4QaLup7AvyyJXXY9qwCVnDvCE9FB7M6Mutw8b4rY6GHHgfMqSmeH3piqUQrUB",
  "key24": "4LDdGjUfAh8t5YWWxHEmC7hZaGn66LtLV7iyrwxCQbUTc8baqgsG2WcNY1No3V661RcPFpJcSPCqY9P2KU6xrB4b",
  "key25": "4vmPEv3DquQsmsLmUuiRbj9PYNqaaSqRPvVhMtdFCjRHWxh7djkNskL3iC8eTaUBReqBQqz7PNgKmMgJn7wMgynv",
  "key26": "PXVm9pfy4nMSyhymeY6jbor5pug3ESaBrMuQkTBHaK8zHuesRwrPctjwAF2qe5UyRu6kaBTWJ9iqSuiKf5fkHZx",
  "key27": "29z5WUQP9YRMfdTRzeyaEjRsmv5vFTKNjFVG8Cx1NzZehXSU2qsDNKd6aQdxtrku9CNHXmn1iERw4EBGjPvh9bf8",
  "key28": "2XWDNra3Ns5GLsZRtAkgYtPzVYzDpkXKFaBMHSz8JF2TrRwjAcsvsNe64nF7GoHroudC9jpsrG8LvKesp15Gp5zR",
  "key29": "5xXLiK7kGAiD5WoqkQScWVBNYazDGFTuY7zsCeNMpd2hAb3cuXJLwJFcMbLnq2Y6zYveHgVEgnaGQNsxqDV2aZrJ",
  "key30": "67DKcLRXZ45fyAaiPWYp7NYW2xz4aKENu9B568pHiRwgnmZ7TRNsQz5rYyQjsHnuF9HqXzxbSVtnKpP6AehME3Ba",
  "key31": "4NCmvVGXa5eamdGCLdEeDXTPKqzqsTSVE4DZ7pm1UTZfRnPYi7aks7vndoDckt7au8TCTpLtvdVEFByLtNC4HQV6",
  "key32": "4qcrLGP7MrtMUmkPRzx2rvfAsLmDhRUaQxsBx2GciYGW2eL86SaYVp4TJ7vY7aekywGnmHHb6GraBENZyEfPrjG9",
  "key33": "47SN5JBcRrGpNiPGncdbxEQUE5yecCseCfw5iZPYesWCvCYkeeqJhbB76YJ4Sp1joyhmoUw32D2tti5riavJxVhx",
  "key34": "uBduUQvUTGFfpgaaFBG7qbL5vGib63d5FdTJeYcvCKFrhrdKPNLZAmnPjZQHWMDBqyeuDWovTuB5AXdoReg3KWh"
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
