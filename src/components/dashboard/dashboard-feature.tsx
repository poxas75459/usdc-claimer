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
    "5Ws9CmUCLELV7kgXr9hbWTKpSLFgkHUrq3PME9EtxHSnNfmYzauWzeLBMx3iWA1tvr8RDSxazKDPkWo8tJWqZZD7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6PyB3VP3km8JeJssUBNAQx8M7PZmamvtnoMFUqTiaTqxxdRLJhBBFzxE32u6EBgkg7REuMwaxSHhRZgch4oHG8K",
  "key1": "bxHHLxTzzfoVchkjwnwpkEdoEZdkJFS3tf4VEMyxpb21QQLT4bPSSjXkmt6Mc5Q4Gut4tkDPDT87TG2a2MtiFzo",
  "key2": "3wkFVyFWJpCsu7BYpoNuARpceX8ZYqJRJCp9DE8azmfdCFESZemW4n64mjPfxxHjTvicZckyQDZYcxFBGfUVvjnW",
  "key3": "2iL98o8wxQ3bw4mti449ZUYhkQ79fndwaPXXKrUiZexNPqkgXGdpEc9Wkar5N51TcixeoGojPyXhohWNsWcdB1g5",
  "key4": "2bw8nWLEbN4A9BL92wVfLxVHptgyertb6psqh3qXh8yc2hpQ55Hpek6B2AcCiAKhJT9tk3zXcjSztRutmsBrNTWY",
  "key5": "4rUv1MQuXhjdyz9Mc81Jv78gcUVy1duu96LJTnCfyctH6nc6j6EhAhymNgRVBHxf1vEeTiAPJo1g1fWTTK1MZUnM",
  "key6": "aE58wKjB55GVnjGUmy31969tfqFbZfnZniyw74CrrKsPUWYsqzVdtM3gtFHVixyDNr1qj7ZyJQ9nRhuWx89UXib",
  "key7": "3TYtW8v7JWXLF4bECSoXj4vwB9VZMnLtE1obM5DtS7wwscXzcj87jtXn6ed1S7nBAm3wJNtqxDxDGB5th9QoHvvi",
  "key8": "4N3DX88rQMANcL5sd5ps31hm1s7tZft7NAhpDPatTT2USAuqXZJ5sbeMghHAj7bULGSXbPL5wisZ3rFVzKYVFgMA",
  "key9": "5fy3eGQcrxvq1WWBnCS1pDDsmFedinvUzVi16GkBvmDxzR9CjxzNeajKyYUXJksP88HqxDA3T2mYd2SeYaTVGPkv",
  "key10": "649c5A6UyEeYMDZYk64PFeBt9j4myEmFnAbdMyXP2wHQTBnQSPbMqA2uX9Akvc3qGNQtT5ppZ1JzQ5G3qntY56h8",
  "key11": "2StJ276ghTxMP5iytpAgPrBkBgmUpJt8CJvPzZMGd3D6moxnbG9TxenLiRKwcy3zyUmSL1Gg5R8exv8y7CZUPQMJ",
  "key12": "48bAgr87bFwfB3DqjX9ikwoU2PfPDax6gxED3QupbTmnwWVXA4EQUcPs35VKCUE1v6PwmiUZxxmCbFdup7AE3Yc",
  "key13": "58JWwS3Yy5ygRfTRwUTT5GL1d2npVnuuXMrxBXeoaYVgDZz8mDx7THcwu1CLbu1U7ZCoJGqvyW2S9NEsFtFfjmQB",
  "key14": "3ady41iX3WA96oJTkp4JpheVN2EuMDe2rtCNcf79qVfdo6Mj5HKSWwjPYuM5wcdT1ySm4K6UcURG4xQR1CFht8s8",
  "key15": "2g6BydiDjpMVN6d1Q88QeG676jXdP9jP1BWVcco4YMFGdTGBGS2T8LY8gdmwxYmZAB8i2yGB3Mirja1EHK3AhWbR",
  "key16": "592octibGTdy9KVexFh2jYxJCWMArCgm33RGgrG3CRkF1y86FRXmCtQRytdfmcJmv6gF2yiBvB9kFeQP9zYwgC5q",
  "key17": "CFhJZnJWibsbCh31cSWdV8BvWviQperoAYybw84DZvMCoNxsBJycvdCDmekhdwkBYUyzFNwzYMhayHGhwLQe333",
  "key18": "4qothV495b4ziHz2WMZEqFCXGHEL42jibA3xGuQzrZSa8YbEfhwMi9VfkLdkqsxxRzCnrMHd59zAXSsrdtyVpBGx",
  "key19": "4ABTpYAdXHccaD1TjpP5ZdAs5HAx9o8AnCS91Y3V4ggh14jivVeAigz6vqfmTou5rVxW3mwChYuKQkN1hU83EVGX",
  "key20": "4w4No56yLEwCqnbRUqFvK3S6APBVLW7EFXye1u4QjqXyAs8KyiC4RFZyHCeivaDDSxg1rPRC3cWrd1Wj4Y4LucE9",
  "key21": "2JLggHKzo6WN7a5dEeq9AJCiUE8Sbqs2cRA9VBJZ3KELnHftK8cyr7oyDha2EerGDUQN826bCmgcQfWrKPDY7AUE",
  "key22": "RkqLEU9CBkJ34Q9JtXyGu6ZkMVWmHmQTUeL85Sf8PD5XtVq8bL6MpCXcJVMbzwiSL3zVkzi4aR15DjNERSVWt9f",
  "key23": "2TSBzQo1ZpxQsz5yfGgVwqe3eJdbsWG4sM6kGkM4DoE5CzSaN3nJet5RWBXrdLNUqPN8u6oSRCeyRgaUgCA9xipr",
  "key24": "5S2XrsN9iMYPT8D3CKkKidQdsivDbfDHvsughDAj63LiVJ8jrs7JZFcUcGnuSfTZEoyiXxWcC4huc3U3fboqrqyv",
  "key25": "5dzbV6CUkDr8YqiK67TsL8DKULL98SXvuJtEdJUqBjh3HcFxf1r1LG3hRFQK2ko95Pqshqd9FqHzWSRxXM8px8dd",
  "key26": "2PVgPEav4rwAN2nWNMGRHrUFctvtXsGzKBCNCoBcahKQ1N5cW6xuvxjucoFAobSTrWYGJW6WtQmCT3snDsyyqX1w",
  "key27": "yS3eKg3Q5juXMK5tV8acUYx6rrE2YC2firHrXxrU51JsbhExGqRU9CCQzhRLRfBy9tEZ4S4vv9KZUdrqEBMfPfq",
  "key28": "4ELMqMPGpZMEs9C5wYUTkqAKkosoqPvX9HSW2W3HH625ximoAhbtbK7B3fqpwco4tuVBWmSNF5mY6ijFGNZNWtAc",
  "key29": "61CEadbXFDBZS7H3ZQqsvKmcT31JbnS5DEX1xTxTPkhL7pDh8cMfcHCW98B4kGabR9GahSZmZtB7Gkp89kkfFU1P",
  "key30": "5b9mpzxzN4magFUS7zJPi3T9WAFVDsho2pLDNtJu3h3T5A7V1MqbtEPpb7xuphpDATkxBmFMrXfkZyD7queoLtnR",
  "key31": "bYVNDTtdHmeb1jUAcWqSgP6mxRE2qVeJ9fjWwn1dvcNbusT6rwFJ6k6jbC5ofnoxFhJirbcYQVpsp1Z8y5JHVbq",
  "key32": "5JuuDtNkoG1BFSJximqi8kLMiWSFYpwssWQXVuATjgv3zsw1z4RL58sE2iH1eGaRJxBnD7cNqCiUNE2dp6YW3wTM",
  "key33": "2w5uNpsBcyRBf3jtYbXGMJQwkE8SQtdBNSywLErLrhKoQUGrkfhqrvoL2SBwiZcYnnHFSoPEkCGvGUYk6HfPmv7j",
  "key34": "38iFbE4YE36UHRFBcj12WYJPva27P28yikiMgmcwDu4mQRLP7sMbtqyAJZYtdqiWv7WUDq7TMEqDCJmL66GRSHpy",
  "key35": "674PcYLJokXvCqLpepuEWDnPKdCU44YqpnnBM6G7U3Fm2zq636uQJPcxXMBvd729kAzCs8gBQoQMq8WQKyMMwCzc",
  "key36": "LmMEMRhP9Qm43NBLSCxKPUGeTVphUrfn2XyRydLXHwX3ZX1D11S4D2oLeumnJLsU94wHV7vqvTJu51jHExacs4c",
  "key37": "5mjSsVzrNRpG3FjY3QzxDDbVzFgTTwStjNhjPWyhQVLSY59MBTdspupL2dNGa8f57VamRDaCzfjshQpsWtqUYN8b"
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
