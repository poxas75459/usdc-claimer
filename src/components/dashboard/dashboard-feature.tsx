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
    "WfaWGtwDm7FGbfMAJxLWkZPpFBFEL9gMxAmp8AfYN7w3ESVWUTA2kKpsZ7tcYFRjop4uQz48VAiRRBA5jeR9oN6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26EMpizA3YBoj9DqJDjaCNAf9PhXRNQMxck4UKPgJtJ828gFdkJefBLdBGJkC4V9wHsbs6wd5dvUPXf7ZztSYdTK",
  "key1": "4rTKezx1JWBYrze7fzG7hCnqmCq1jD5x4ASPcFPxUsudcUMmzpooRGmvQpC6W3fJzXTsiQYAGfD3ePkcCTYWiKXu",
  "key2": "2qJCgQrb8mKqKNaGJbpH84a4pR82oiCSJyQWywxXBkPdupbbv6yVNVHhXfphR6acheSnmxiG1cChPreoRkmQHmhe",
  "key3": "3itJnU8oC2R3WSqGiMV2esMpV6AA6Tus3bN56pc61TXr7Lx59jwrE5FfPYEsah7vseFRZDWfKqPh8nArmCFCE5ru",
  "key4": "ovA7CHLLY6Aut36ZZiUHLPDsmiihdMnwWd5FW5gVW8xMtqi6iBjLbWrVR4ZLBWgcwH3hVjkWmRkXgHH9Hqzz5Xb",
  "key5": "4zpC2sjmXoUYtipYzcUZmVR3hTAh3XK6MBmEzRWecJo3zAz5sisSzBhuf2XAcYBXMEwsACmfixoFqbuiiMYecKjr",
  "key6": "4qnosQfzaLhyt7UcmwtvknCdKB7PwwKDFsw7DTmsWsKUJNefkSVRkPLJJjGcQvJiPSWTKigh77oh4Z4Eg2jVUTPQ",
  "key7": "4j9DsZLURiiEFvNWknb7CDvkupsWvbYufE2SCo7dKVKUVN9v5iMJC5j3e9QPTznVNMrmWjwUqwYpJjnZ59eoLicZ",
  "key8": "MpBkbbKhXdUEGWjkdcNaamZiBTzSHSU662rLz8MaJH7Ddwn45cnheHddFJ2X55FEk1VJ8sDRnWz7mgAf5Wtv7Wh",
  "key9": "XEJwAhe5eKH1ovJmXCSWVZr8rBnLgAS3QG3gSiKaaS1QB1NZpfjBEN8v77oVKGYeFQqSkFvb2adtAihyXiUECD7",
  "key10": "3zyYPDmoXaeXztUzCShEfyD85Mzgfh8w6A2zuV8VWjFAKCPnjzABd7gy1dgsE5rzBcJg82hBgGf4SUcwmpKzqXJs",
  "key11": "MjHE1saSdoTTsfNBig4pQkUz7H2ATonXMz45cLf5mb9tNadZgnMmrtGMKvmPSfXFqRNYy7K27EWRVpAxjzirnYJ",
  "key12": "4x5WGyq33TzL9nEVYtMqGZx1nXsMgu9TneWcZ1tXfoSeAamWbrMnCC3e2C8u54WKEJaR3GgykNRYtEk3mFgW2QbM",
  "key13": "5u7REXynBXp88wijiz96zpGxvmFrkkkryE7MxMjddKaaVFKJZv2WnA8tP2PEtDyrPdrjfY4FnGagcTg4P4mEj9J2",
  "key14": "5Zg3xy6SJ4f6wfLxi7eEPjR6kYVmWb8em46oanVbX3EeKFuNYDNiDJr8uA5rDiVbHYR83eArFwCeDiaoYmuKapos",
  "key15": "5WoLVXHy5JwJmCeXMfb63ZVUYYzTRSEvfWND1oJUadnHwLS5xe2BoeJJxrYeCTSsAjtTSPdxXUMkNEyD3YMdgJsX",
  "key16": "hm4Q37YJNqJF7sVsaiXwfhW52VpoXPXqfYqgioHV9G77btXECRK2LqujnXxqdWnnJoJQdDBLDfXi2p11fE2MYdX",
  "key17": "n3Etmfgw323qBth4bmvanSnQW2o7BD8J25jv7eKvcjT33NXe2EbzcBcJanr3Gifgm3HwtBJeuQmKkpbrcN9QBzA",
  "key18": "3hQUQg5VWpuyVV6aEL2yZhpyw8cTjev2GUScEH8cxomkhQsRQoMwVJFD8vbAAT5ZB5KcnPUusirHm5K3wGwqo6wB",
  "key19": "5rFPmDWVY5stwaXtreX8NsS65FTXCCp9WkiRdqfYybx5rq8vX5CUXtMgV4WvdJWnTXDaPakkG4B9HyX4EmwF3tGH",
  "key20": "eFy6xgm1e4TqnrNEb2bLFUZcsA1eeBUee1xyq4EHftNXNJtW8NaGe3wJRvTVkTvHv3M1rS6ZAE4xwzeJ6WFeqVY",
  "key21": "3v5q7RGNKUuFJCUJ3AYpg2krzckEDrMcHsZmPdjuj9SsFiG19xhZup8yftqqm7mtr884gSS1AcywnECMq2A3FfnW",
  "key22": "4t2NNiiMX7wzKZKJoasch3XZah4bJ8WrojLpA7QxU5SxShPZV3AU1e1koyUrCB5NYWJPHYaVgTRu9YA1uYECtrQD",
  "key23": "63ikbAVrdT4LzSXWu44u6MaCVbZrcwgSK3NLDPk9sGFyzkv8gQfjy29vwc9JHYo4ZJ8jHgay9vXBGbQ9JWKhWtHG",
  "key24": "4qA9V3ysUFrik1me8Zek7ZEbhhtPMVXNXjTFW2HssRL9fQt52NsSKyumke1QWRR52XPmn7TdmbcH874Noys71DXh",
  "key25": "2sczAmmpV5wqrANDKTUnnnS3uEW4SBQhTEQ6NbWGJy9Nwdw5ZtfhzXSHY1zQbFrv8sfGvtWYRNB5vG3MBzAVtpE1",
  "key26": "46VYSUMjxw4XujhqgZ7rEj8nZUgYEjLqMeZHYaeTLhn9YEwnCDRs4TvLgYmY9h9uDoEN48Qz72z7AueGSmn1f9ri",
  "key27": "2sGHPwdbZwWNUQNmwK5LAXta9atqcXMdi2DqGmDGTgpRgQQXzo5sdQXpKkWbe3VAAFg96kUBWUcKRZBAmNcihQNC"
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
