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
    "38YVzvDReyWFVT5zEPAqT5h7ChSmQctSLKgMQSJ5q76v2gM9qa6DjjwS2bF9752Hrm3Ttzi22rnsRHt3HhLH2TCD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44Myv5JozU7YQLd2yXr2km2CBDPiuDarSizm4ynkCY7R9Fe1GPjgNRP4C3dDF7vaij5wh6BwxAPsrpfgYa8vwrYB",
  "key1": "91SFwCxsgSoPwQh2oZvj8npu2648KfLZ9aiiCfohQGFaxH2XL7ZkF5w71R3FVaeJAYH4KoRk1vos8QQCe7D8umo",
  "key2": "48fm4TRheo181Ejy8i6XyuLRggE7p5gHVeDj47TnKJ6DWJKBNTRGDZFyykDB3nyEHTvyQksgzFfjkX3m4pEcKPSg",
  "key3": "2Su7tywztUWgGVWmQqxBVY3mbXjGbx2UVYqQeaTmpzXi1XrFdiKECMASHFKV2WffSd2kd1GeM3tSfcc7AZzXX6ew",
  "key4": "5yrhpRfWDB9JCKVdUigpBW4S3k7DN744NbNw2Sc5Zw9PL89j9K3U2LD9fiTzVbLAekWm8GyFDrBNjnh6jArVqTDZ",
  "key5": "5VESUaRru1XkxG8whjZtdLQjB8BBVk4zhETmPRFJ7SJR3boFZqQJRqWrd8gY8YQK3HSjHX8gUJQTdne5NUYA2jW3",
  "key6": "cGeTL2aWafqmcoBWYjnTfusnfTQcGgknqvok86oqdQyi4oKzpa7VHtjtCHDosE6dogSZUBgmELMKvEXkgcpXoew",
  "key7": "5hYyyanyiiMZdtSmTaMX1cKCFHvpueLyDvQkCeDis3TrdCHh4Tf36krPNYkTi3swB3J5qpi1BTowVeGsLUW2FBbk",
  "key8": "4CmCnGsr4JJYpTv8mAwm6gPy81p4Lywt7ydzqRehGqUCUVvKyEJdsRwMHXq7BJqTgyshYftmNeoki8RMxPMYkaGe",
  "key9": "42ogCK8XyL3RmQRmWoSabEHVuAdFX7eJpFMzc2BtWWCpRMQdo4PPLzrhjMDJXNwhBupTFUV6SYwC65XfHrHtTnou",
  "key10": "62gYXzQzzDo1yd7ptWZ4xeqAzbDy8nSc36QAp3cxarcFLUo5t4TLsBqgV9watSN1T6u4r7U7hnZ5AzXjyufhfMYM",
  "key11": "4XW68THxSUFWppjufh48m7dEMbcm5eTTbZu3xQ7jR8ncrk2wchV7VRBYcLpnf8njMA4NTAkuqY8hnpy8GvqJqAq2",
  "key12": "4Vwbcwqb2dFWqY6vyV2L6veY9c83qAWiGxvCoLa4k3axiaj6LLg1Z3pEMmugDtscLpRjg7ZPaXBo53VSKhiahbN9",
  "key13": "65rCbE86qgNhnehNT64vNYVVesuGC7MTjWj6RiSEyyeE17qQUbUmBi5Hzg1W2qH7dP63FyCsLQotx1nmmBkWDzC5",
  "key14": "3hzmNLPsnVTNJqva1zKghfHUGKpEnQSo5XwgChdeFoKHTtu7RjWiG9zjJtCTWquNe5c9WL8YDWUoZaPJBTtGsf17",
  "key15": "2dY4578jakrio3tay7Uur2CmhX1TFaoEHRazJvRYLHh7WqTCXJNX9ZhyYUZoKgw7vPYXT3gDbGZAbKZmZwdcYcqU",
  "key16": "2PFHJyXYWi68m6xp2TL5WNEyHPF4tqEVtmJpyjpU1fM3E2GekEJSZrvMiT1YDT4LAySvah26TaHmuHLKY7FHwQ4g",
  "key17": "3VjgCWKjW3kKQdHBTdztKGA2QBYJGzZQ7PXoDA2audYtLcEp6taqSFU2UiuWiG1eA1JQomiAmyVAjJWyMnjQUPBP",
  "key18": "PaQQUP1yyovknpdkQvfxmw9njGbvLQ3Tzi8y8jHki8gUa4weNQ6Vpqj95MnX41cpj5HwDBcauRicXUJhjtnTaGg",
  "key19": "5LYXpzDaVQBV8KQgZ7v89up5nSbbuWXgAWs77g7NZ8PrSkac48Nay5e5Xig9UShhN7EA7hbrve5QShKtikUqYHD8",
  "key20": "2eYPErhkes8CrWA2m6eMgZ2oUpeJFyg5SJonY6D9ceYmfS6aXyGQt5N8JnfjBbquTFvmMhbd5DWJ4H8f7HQa4WhV",
  "key21": "Z7QqD7kYZQ8pwGzsfyZgvZ1ADfgDpZpksb33VjxTDaEJvuTVXBKpWhoepMVEtfJ4C4ABXvZE6NmePfC48n6bLjL",
  "key22": "2vZWF5SWo89Zj7qVRMtN99D4k9wVLWKE3amQPAamByxTxXNvCtaAV6XRxjLQGrtu2xoHUj4Gksb2N1aqs8SGFmcA",
  "key23": "PwAMhZH1VyYW9sfiRFzYLrmxMnq7TUuCGNYkCvNZQC6yMUjYRL4d9JhVcgT1dn9cdearupRJFfSiu3hn7DkGJFv",
  "key24": "5dF8U1JeRvuCLsvpNc1ThYazLvFFZR4wyRNo6Zng4bTZQEAVxPL15SdYmdfy7UcXYdZZKcHpsDtf13fe4E2ZChNy",
  "key25": "29pDaXq7zKEB5Wp665AwZ9mNi4xzAxqaH63G2JHRYP3YXVNtSADVXS3VphVvfRDXETayCjxQujhi1ZK1aA8S2iGP",
  "key26": "2KQoxuzvi438ryFb1ey8yK5kCVmXEnnAnozG5yvG2uzLnrHbcEFpQzFHq7maYBAn9SGHNctQJxuzGoxT1nUhrRLf",
  "key27": "2jgNQM4uspmd8Xgz97GLHYqLyRQBrGNGhnJC3tGbK9bL4Qc9w8jAYrNNAUHuT6pQfhfSbht3WrTpMF11Bi73Yc5k",
  "key28": "3mcBKcp1LeYifkU39jo7cbusv51hK2BoKZRrmZchFQmyfF5muU1PMCGBHec2NSDB24bw82jdRNjgCVzJventHmNF",
  "key29": "2ZKviCa1aQPFhYRi3jspHMgfA6XQ9UMZpn121C6xC1YJYa6zg5WHeJ3KN31Jq9ZhRaPUdd6w6f9f4dJwhEmr6Ga6",
  "key30": "3p8MQWheEo4XSPDRAUMEgeUTvu7EDMPebRLmxw7dHuMtAjquWBmwxCZzhEEKuin5EH1GFTAZoJH8MC3vAMAPfu5L",
  "key31": "2A13wronmNpundg8rJC4ERrVGTpqMBmP57JtkwG8t7VFo22YnZQPvMkqo7pL8NAEVbyiAgfiYjYRwMJMEybJaTvJ"
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
