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
    "3HSj9wFHp2b7o196aTDM7NjEc7wDiep7YAHCkuzchunfgtnN5ZtDufcQy9sWBHsywYPwfmPEbDeMn7iDveCtMppj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4T4496SUtJrg4eBCHv95AvU4hB5s1BDtapXKR41YsZ8s2TCuqGrN1RbvAMMd1Km7v39BjrPjdC2mqwwyKcj6YzoX",
  "key1": "3r4GeSNtm3SJkwudMMZaampCm2Me6gNmygTsXrTtQRwNfsuq3kZmsPR5yrJKee7B4qqXmMnToF74wnMS2M2Ry92",
  "key2": "2jhafh1NoAfVVBqRk92Dqjzo5RgCwsuqHQ76yfRLLt16EaSu8ud5a1TNftawt81JBDjV2BQCmXPa4o2VZWLZLC7j",
  "key3": "499ErRo7YoCC5tvY3c3BH6QggL1Q1VHY6DqKtFnDLoxbpmYPisJYi9mfWzGFYfHDm3XuZVdL6oCdVDNw8hcC7Wge",
  "key4": "2NkJxKgZ8iDRDZ3PGghZ1DSemnyENx7GWcFCvQ1iFvebbHZZubgDd5dwbaCTFskkWSRJpX9NSoFPehiwLziVFYX1",
  "key5": "3aCZGPKgNH4YiFp6LyxXsu38TmhqPVtNDxR1v9TV83LA5zXMA2gTDanun7wojM4C5QDxtjN6syL6KKqs2sxHZ7yj",
  "key6": "QaZbGwVAuqL678qqBAq9Wts9Wy1x3TZpTngrz1AEhNsoqV9YYoTzoLNYTNME2JRh8D5GHEWdjzD4m4hSjR1ZHQ2",
  "key7": "2Uhpc2BrEzaJPqopByEYcubniohvo9pMNDzjdm9jy5powHaJQfw8JnNAWHF3o4R9H8oGjxTSrr15g2sCvYvHHMQV",
  "key8": "4Gmjf3Db8WyWG1HXi8VLQygLiE6f13LEp6kycou9dLKPKsHckLY5HrcHrTEGB9L1R1a3Eg7vtduGDHaxHbUkkwbB",
  "key9": "3tRsypTw2fbZLzqyowC4zcnqw5kxxgkGqsjNDvvNm1u9webWCs8bKMk8L89nRfmnoE7jxm7diNcxB8S7ikvnkHaj",
  "key10": "xYrUZYMnaZduMeniA3S2mxjopx4DeSDGAcfqg3KXozRD5xATTGJvf7GdiGPwH2JZAawU6bpDj6HCXETkDxcD2of",
  "key11": "4UGBK83iLvK4VuR1NYvbJNxRhaL4YZuYrq3bNaaV64pLwqBRgLstpGwEVbwvcEjVm3TEERy5huBKPLsqD4U3sUkq",
  "key12": "2mLUY6AumYtLaTmXRRkijQcq4gS7snFPigGDygjPXwzqhR27pALFb7ky4EFQ9Pk7rEkhuJuHkPFZjjd3cZpXGVTY",
  "key13": "jBEp33SmeLJ2mWdG7Vtz2h55MRz9vcb2D6G3myZ5VbaxddsnJ7KhetVve7rQQXTwF8NRwN2YtRjHKirTtxAH9cQ",
  "key14": "2YX3u3EJfiqjwbWHnCTjvDkeTYwZpF8trwFmPAaGarNkJFDJW3hLH5JHUzU5cm5UvGUrLsrqxnMVRXfNQPWG18ds",
  "key15": "2fDXtgRygMN2ffMnLUmK7fWJjTEeAvVnhPtitzGZWN8AWBUjrxmxFtQD6k5wuYj2PCoXaFmLvyXJ4BDQA4g8xt5L",
  "key16": "4xzAbBFfUpguzfUuLd4A9m2eEKk3tNBkJcH3jGW1DXHjcWEMBbuP3d9ieK9GPJEuJjkzZdLg5vpZG4T9SXsj2fpz",
  "key17": "45SAgKc6AezyJmFr3bH1VgMWbaZJ5GbgYX3zb2smMd8TLEVXmzR2kT3e1V5DVF6y7kYVapAD6jYW8yhKJLZRYqS1",
  "key18": "2Lzj2LhYCi3BQDZiUoUGMidWRfWycJjkWAJSucy11XCaLZZWqWggiaiUHpa2KEuNcwmTYK4PNTxfwMvsURoYbzkS",
  "key19": "5kH1nqVpEa7hSaEirkBqxzNt3LerFByWvSMvaNSbGcqaQxsgKqXZssbWETviSnUcjwcEUaCbwncC23qdkJ1aryhL",
  "key20": "5AVVaoeJmobJZjFrda1x9RS7PozjxkcPc24CnueCbMmcWC3JBNXNNSDE4WzZrmBdgwAv1qferk24qsWvVVeH2ZZy",
  "key21": "21J6CGn6czyavbDbwsiMg6BSUi1jujT5heMeDPVMHAxHEVWH2YxthiiZPJTA2T49QUVrsHR264DKZ98hjKmYpNR2",
  "key22": "2M139ZUXXSmTM3AaBNTVwGa3JtaxUXA88jzcvtPL4HWmSwBSbJuc952g5gLu9FBHabQ7Whd6E3gMk3sdfmQBtXdT",
  "key23": "2BQtynQZz4nj7y9wgT4kXXDHCiG5Tv3xwx6oV3sJdgvrMxACBNbe1RHaNWVj4GHq3NbdSDddTzpdCJdoub89iE5F",
  "key24": "4F8d2wT46qpi7DYhB5NRCHWzWt46iY24sdNzjLc7DwanaM4McGPahh48t4CkwpgdoGGUsyufH9Su2DYqsY8aVnnD",
  "key25": "2CeTJVt3Bkbi4yBKh1Qd1H6mXBrZ5JM4HJG8f4oegFirQH61vkxab48aJnaotfMUBtiuporkBpxSHEYJJZ131vUx",
  "key26": "3xGwBMdv1LuQ7GJBzS5qd8pdR1g7aKnz2MixyNgGdaBueYbpBoCw6efqhVma7NwjVPsf8GgFh3PBaGLjE57wDey2",
  "key27": "3Y4W5sj1UUPWDwD3ZnoFo1sKT9RGVmdwEBJfkLA6ndyjE6GwZMfEmjtYtQY4XADTfB6r7vsjVXcsz4Dv9bgqgNcR",
  "key28": "5QK3dF6EGTZXh1ZeZ7pfuEqsVgReGcLMGCgJEfZnTQJeNXByfqZUdHFZNT2Z9PN27A6WMac8T4y1jP9nS5mbspJu",
  "key29": "3GbsT3dgHpSE85AdATXVaDNcaPFGNeCVkY3bFmuxUagWKoe4Hsbmwuymd6x6eZtNdjvvuKPNTWfATHRB6MbLb58E",
  "key30": "2ipaZQXv9LAjiGYVHAjjb7LuozgiLo8p9aFq9dVN6ZMjbgW8bn3Zi1B5xwXGVsioiGAvqPpiw49EdSNZQ2b6nqUg",
  "key31": "4kFc7vamj2uWsb6vQn6QHQg2wHKyhvBUGsWSgB7rBxZwAeykCJuPFntBpfcrFM3YTJmbczZCKAsR8bVtCGu9DztL",
  "key32": "X52KxNfnMK93uN1rjxwzNxfKbfUX6KLrmJsSEKXMJiQwQWXjpfcKHSL8r9MxBqBG7A7rv1JxCzrzVhFv4C3Jwci",
  "key33": "C2FqwasHMGeWTWva58TZkPsbvZmKz1S4JKzbzGj9cbUAS8ufdZyVv8VSWBqMKQzu1i6xGbRua5my6jBCvYSY17v"
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
