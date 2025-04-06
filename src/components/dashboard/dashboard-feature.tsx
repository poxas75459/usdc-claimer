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
    "4kFF42J73yhiF4HpJKSWrYtkYHa2oY5rU635HT7hqn9rM5kicwCmAQdzjFgT5zSsUDKGDocSrk4gWPchPbMkPVDZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KnNc14viaL9UnfbU6wzfxxyw9z5Ze27EcysxSBFAJbFQAr3FCTuM2jQSCWRWM1hhF4aEEMV1FxDxmdjwgy5cMaA",
  "key1": "qUzMncatjJtJGiHkk1JTvPd8AX4UWRXRM6dL7mAP2EQHJjfm1VAifxW7VKjAFjVXW96kLKC5w3ih2reTXNd1ZTc",
  "key2": "PqhHNcZP9UQVDzjVWCrSS4WuSSyQ441xVvTJwzcQYJSMdgeWJ6VpQXaH8oxL2j4wYpUkzdQyoh7uyv7B9pBKQQo",
  "key3": "yivZMpvMbEuectEcJA51AUH9P6TnxNthJQBobwW3e44LsPpnCMqrLQjs3cMAjVsXKoyJFBaFYRkATocPBvs17jb",
  "key4": "2BgZjkhXnQQTUVAxVTujMBVFNqjfJDbUMrtuikn8KuFzmEVhEEr4ZnQfiQD6Y97pVTeqWMqjsz7QyVQvC5yAH7rr",
  "key5": "ijNnrfcdxXVDRbWLaDuYu8WvRgfQ8tC6AcioARqc8VFWuo2r3A6M4pCs1gddx7YgxYLyTdtk25PemeWHm9FYhxa",
  "key6": "5ntimLWfLep7zncApojNbqqztAQopacSr58eEYyrVqoo79BXJx9USSDB9Mv6T5UXZEMVTGp1n37Q98WqYHnxpxwY",
  "key7": "4fVuGk6gajNTLzNfo14rfGMVUg3HcyHoZ5HPcTAo9xYXaRftH9GodUBwQC1kMZQcVt1oAoiqqDMVBXCB4pTvwo6c",
  "key8": "5HCX8Szmm2piajquudghaUssrNnCFh65Ddk2WgbCS3i1vD52qBNjSZHeqf2RP8sVVwqFHxwrv48SGB5GRPy68pPk",
  "key9": "3YHdxW1x2FovLdvMArDiZmwMb8ZdBSXeu5Cjn9patmQQ3z2HpApqArY9FTFnbRMotKCPKrjcPaaNvuoiZaXHyfA3",
  "key10": "5hwbge3TqCYWQ2okvTaxnNbohF5ofTyJRbfwL8h6Z5Lc2GmFmSYEex7NgmSTBGCztSErNLask29e3F7bqd5DZMPV",
  "key11": "5L1PJAPqJS73envBfusLbXL5o6r2GKQT5h36NLA3hKPR3u1W3gm8ZaEwCXaTby3BgrVXLhCw5zdsmWow3RjvE8jH",
  "key12": "2dS4twVKatZRrGSUVkhAVcWAQP95CEVtLK7DSW3f1oB8oWDprBg1FR653hk45VF3VCqv92o9e4GphaFes6MapTCH",
  "key13": "3qmnwmKRZWxDQ53Ciw7GVUXjPCdQMAJXBGt572iDzMvD9xxzcH4iQjyCpguw9BphkMDr2mPtm3Mph9LjWY6RUVJ7",
  "key14": "3bdjaKvjeCjcmSvShP6wybfAaokNiru3hYcEFCyjwBVnKBBdkrUCUXxNKPRvSK28rMxAUM5hP8JiX78MzmGUzMkf",
  "key15": "5zvkC73bN8Uba7gvc5b8YzTz9SfXQPmGHmByHCmkywLMMpAf5DxRMzn4YUdFdDEAuJWcFuGPWxuU4ag2jctsz4kW",
  "key16": "5YKHYbR7CE4Grcki2u3aE3bd2gd4rbPdHb3XDNx9biHg2jZmHpiyX2zK38mw5BKfsZjYTVdv9MREaLffxh91W1Ka",
  "key17": "4JDBP4PpTMARDXidS53jMaMH2Wb2pTvzrcYBFWanKcwirtE5ecpmk7SfjoFB8MSaRkQzkTcc9WtH4joAYoyoLQ8w",
  "key18": "4h1C4vyMZmUDGcWvgbWNCyu2JL7xcuYyQnvBh8KVg6kaguDUEYGHZz4ZVmsbBY1Z9HuLdrJqm7zoNWcayMKkqnrZ",
  "key19": "2sWThQPRWkPuDJGzT1B2bugMVDYtWqzx3r1AononZUPNw82e3JMfThYZf39FtrCejr16nYaQnoeU21qpYgkUx7cW",
  "key20": "66rngb3CQzvyNsjYV2hyHydWK5U5KC8kw4jehmistMuQLUXuM4DViFCRGc3Nk17mJZ44utS9yW5xsQkRLo9shPaJ",
  "key21": "4hGH2TxqVZpXu79nYXw8ePQT5G1XKzGid9ZxittGjj2eF1VzHKwujsQY1z6VH5MFRgyHBwuJoiPDqqXfSzZtAsko",
  "key22": "4MqV2mKU16BdK9nbrWn69HZFFsFnpsszJTv3BFFpZSmHeodCYxLnjDMCF6vTZhxZZQ4AmNWdPtTo1J3xVCu5BHG8",
  "key23": "2voSRjHic5rMve41njV1194AnN6SnyFxoFEdyEBvVbsX92TM6exkMuxsQ73FjrdJnNQ32BNHKbHmikvrTbN6zDDe",
  "key24": "3rn3QZA4L8vJvpHSiD6C14Rf9vFAcm8qafQGtHGJuWj8g2QNhBpAfu7XCPXsywLEWXnoNo9kCEbxrEkRXRnwuwve",
  "key25": "4KPYyCfhRBiXKEFgwNHCR4jupBVs3kFA1XGtM7TXcySSRJDVCBeYNUzPrmVNFVhZHoUgq3xrhZHA5eiB6hZS8UDB",
  "key26": "jTjUCEB21iCpivt9p26CwV29k92GoJPzCe9vrTD479FNRkNmhwrQnZJVe34v2RkzBXUojhc6EHzcfg2pksxC1jA",
  "key27": "67XLkAukabRoxievwbrjxeXJLGpqnaTATwTUkTcjprbbZStTkBehpPJmiFfodFTbuBEmgcvWaMGF7iWf4MppGFK9",
  "key28": "2APH41Sec5qseKz1L7g2yXYqXMH7E4ZkfXasUwWPx9BMmCqpQ4yJaneUZHwzu3oZCJtekZW3JE8LNVys6JSu5Jdw",
  "key29": "A5FzR7KrQvSM2DHRdbZ3WH3ZUgeVv3awoo7FwhZ5PqTUHvDmzm6VTMX3KeQ4rpeiUZdLP5GBjUgFUiVt2AGMmi4",
  "key30": "MUaWLssAqV4AB4QzK5voUV633jbDgsuYR3TAK5xFYPFMJt9ANgME5ubuooyHiDdMpREHvU9RFRB9qkA1NEkQ3Rn",
  "key31": "3Y5suzJ5gTMni7tcvhHM3w89Up4zknDuKYauGV2wtZqFk2mh1oviLzsgUNjQAXaL6bPsD4VkopQ3JFLf8exmfGi4",
  "key32": "ZECxcqKp6K2witfuAgqLnUHrYQXdD5GwThFQMJ67bsUweCHkHyZCpXhenEJr56JUVT4ACAZjFo2ydx441H3X7dL",
  "key33": "3CyBvVncVngRw41ypktgERttqcBddoaBoP7aMEoRik3rBjmbcNcfNE1m293dfSsckze8rN2CdiqJzWkyfam3vAm3",
  "key34": "3VbKJG7u2WNCPRVyYVEeV6eQG1tDH3iG5LYYapqHKY4qTYzYrsrJpH5bcmCK3wRyZqfePQfiABfZo6vca81kL7FC",
  "key35": "2FPHmPsduYugny6rWFFmMfXux7jXkHVHQvXPzRpkTCWd2NZ3qcHbNfhkqaKgy4NAUgrND5g85F2UhxbV3Qh3HFVR",
  "key36": "4FQkYqzeSe93Ft8zwvPdRVNuG7mMGGMquSPhJ2TKPmyTvQLN3paRjTEN1x7kcKYfcQ8WGWJNPYDJCdQz5TyezTz7",
  "key37": "3jrCoHouYPdjPzkQhvkBTz8DvJrZGW47CyvfhpnJs45ZvnuzHfHKJAXbTMXHLYpJ6wSAZR17A2bKdJ3FKVsHbde3",
  "key38": "5yMFJF38To8ymf2nuG3iu1rD9M4qCew5Sbh7fGwWinVzhqAjNLNSMfMtdSxh7FkhAHTEiVeV2MTgixhGo5HT2oP7",
  "key39": "3xSQZs2sP8aqqsyj6wdxHCKmr3HyFupBg3GZpBbm2VszTPa4V3wjCoLybSX4BR6SLd1PffM7LAbJZqVF8XqNeTud",
  "key40": "5DkqrQuFGNgmvrmmVzE5GDuEQYunVgmgAttMUWwYizDx9mrmiB81MhbKbem6yG14LDyj2vPJGccyTeeUsx4zF1ZB",
  "key41": "YruxfkATB1ge4xdhRffeE7YmyJLZ9fUAuR1EUmuJgPtaK8M3bpVZijVQQivQgx3A83u42YM929fbDJzkq3XL2Fa",
  "key42": "5QfS2dgTztqp6ZjDZheLXNU5ULeA2qhSqNBFkfJhXRsFnFmjsGNRi1G28i3CjgQdsvrrmrU632pgkcRDidg1tFjD"
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
