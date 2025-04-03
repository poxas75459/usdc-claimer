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
    "3amoqB41Cguq3bNVh9wuAfSTygL2oX1L55hmoPbGEVS39RDxeqNo4CpDm1uwMNwMzzNfLvmZaxFnbr4sJwGu6Ldy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QzBiA5txWDACuXzKmii51gVxAzBWbzRLGF7ZQCsDpHq1nrcDvDwbRGXoKRs1Mjo3er9mzaufh8U3KUsgCJBAMMD",
  "key1": "4GP15ydRCr23CXRAiu6sH1M2MryBEC4yddTf7yoJ52rCD51rh7PU4AtMaJHa8mnLvRZbPm3dCiTQZZ446WheFK6K",
  "key2": "5oFJy4V9VbnpEPQ1jSjL8ZX7DAgyZ2TXq5ew8u4iMZ28tHYutuRzEHxMfzMb75TG2Uv1CFZwZewYnMD3GKb9WD3v",
  "key3": "2RPjrvEf26GkuGEXcw4BhFkX4GSH6KhQtKtLDbz223w6ULU1zQXKmRjVZaZAPzKaJH11v7MWNY1DcUWtMnvxgKKf",
  "key4": "2CmUNFnZL3Hz9JyNEhc1tbQEV6S9QWHCrCykLMUFVC4akavdiGw1GKTHGR884RLB2BRqrtvCzVCFsdb55ShMFQWb",
  "key5": "5uo7LF7bkWc87tJk1TMKX4DeH5ZGPsuiK24QvTyXsJFzjfxnNWofWNFoRNDgGjcYKDtQVW8gCHzuQNWcoY7dPvqq",
  "key6": "5atjCMqko96EDhctCPxaaPnY81uDwEWEkXd1tCSXKwuTyTfuQNhLBrxbmVFqByatCEJ7hHNgrmr1LfgVcs75DwGi",
  "key7": "4MdAY3A5cL1LoPt4RGmUpV3KQPWCfbvSHBQJUJVujRLwnUEzD8zb5raLvJJZHSc88eLSYoMAFxNhMmYGVk3GCjcP",
  "key8": "46wt6wiCT1StoLUswdZVQbXjyeLvoLaaRoSLEG27VJqwt4pegmPL8Tym4Y5R3NEftPVbuZW5qj8VEsmS8VsyLPSm",
  "key9": "54A91GB4HfztewLE2rTAMxKYDfW8v2iDXYmSw1XcPF9DmMFYVTmpgCkMbxZ8a8NvfPWLDWucjDYGDK4o4vchnfFH",
  "key10": "53pfCS5qXFJM48BE2jAcXnzmsbpJDdGzer6CFKpkSXMh8sCRQhiYfXxQVe8M7UPigpyvdaoQeG7gQrEHFP49XyB9",
  "key11": "3mUJfoe3jMX2cfvhiLj5HpiUP6EAPnD9v67KJWdHJwGcMeLjK9wqqho5nekzH5bVLgZYu7YzccPvETVMX3dU1oPY",
  "key12": "B1dKFqafGwx6sWg9UQ66JKv6VCCquhdTwxTMRsj4bBwSFF13zWHivdZK5GXavZNeqoKaTDyJ44QxhxPmcy24zRL",
  "key13": "2cwX3iZSFx98jwRBsiXrB7ggeiW4fLYSLuBiKQnKtaestwcT5wrqj66PgiAYJC5YZpWfzdky9F1gFtZgeZ8p4RbS",
  "key14": "54nzPb1BhKZyr8sqkpgbam5q9NmGXyiv2LqQKB9KY7rfA4SFhBRPRd3pemaqvFfqS99AqJSjAJGNjorUgoi2do9U",
  "key15": "4dJ8BVYhKN6sArVbxaLBdSRrotGW8fo2QtUh4hLAQwYyh8Z5p5hPABmjKE4UiuzEWoQk2Dw3haAPBALMinPhqAKb",
  "key16": "672hDuoSGNhSGA4eMjmXTVt9nZAa1PPGz3s5esBWAKwosrDMGS2XKfNttCrVBPU7NdtrJMDnQWckQZCB5onLMPNm",
  "key17": "51PeqhSS5E7tFmVFrezhTMhfT6z5QE8RhDgQTSEUFCWCGiJrDtrNGsv1t2QpH1WzPPxTaupYKrnePY9pHzi8azVy",
  "key18": "BkfosCSuJ5i6Uqn7Rs1QJEGKYbTwQfgYknvsHtWJv28tink6kZmGRCuQNiwx4UFiYjTtjvR624WmZwaZEWrfy1Q",
  "key19": "5L6ps1F9ge3mxpy6jYsTTfogNx7cgPDRUY2VqjiESCHGXJWDJxKvEfVkxSJMEn4GbzscwEFXdAwSJgNMr2ScHRCi",
  "key20": "5CfTVstG9Suo5GQ8rNePqA3DMM4Umo4qykqsBzp463ipWLmzHg8Puzqu8rfaG4hRKD477Qbo5pxnAo5hbbKZdj3p",
  "key21": "5as85hEgv1vCi7A8ppT4VZCUVSrhJRcBeqL8B1VdCPcxQKA9eoH1mZuagnfnwgR7JQQQFc6XaDa2MFg7nPFXAZ29",
  "key22": "67oJPUWzvyKTY56feHcFv8B3Ng3Ho8EQiMXeDYv1k7xKXaZmSLq57QQuDeqFrvn7b6uAVhX6RfA6XzSvHz35xz2G",
  "key23": "UWc2vod1p5iMwY5LMvvzsvgsEzL1kR5PABTJYnzjJgex5tnyCw9Y5Ju7bq6MzF77y4KKyFbTDYiuMyqLfGVW4fs",
  "key24": "2k2ofEgEzvW3BaGkGngxnzRgVn4kCTrXAC9eLrjbseSxx2Sw5f4h89wY3Na1xxYYEMyGyg3pqzwvCzRfh98XJxQ4",
  "key25": "5AoKnHzNAtn6p5nMRBvSYu7NRPPjYnE7hqUdTc3nr9GXz1MXL3Wmr2cKhhGjmxQZh3wziXtNaogHNXHSgbyrNHpN",
  "key26": "2WBxwyvCb7EUX5Aqt8yyH8tEb5iPqKgGaddDgqCBJT7864ncyqSVqVNFeNT3t4TnZScpLbwemy8ATq5L5Zia4meG",
  "key27": "2e5j232A7eNt3PH2fGZ9DkdtgVafnZQfui1tzY8b2Szy6A8ZzfqS17J3gCUPfTVt8DdYMeoyATqEkJ5m2mTsM3Fx",
  "key28": "4PL2L4aFmpBnmb5n2ADzpd9Lng7MvwHxQwUGExRFmMFewmWgUAsbvobdhDy7ppeUMTzyHfUs1ZSjKWkN4nxQpLr9",
  "key29": "31ZLAkZTLsT4mdWF3UedxG4jSE5aqAE2RcTRYPykicbkhQS6NKTgSKotAzHEsorZYRrBphwtXP3y3kyT2He7tAKt",
  "key30": "2QxW4JoqSgR4Z2w47Q3AzS18z4a168Co7LTz8ZTpJMY5zeehNHAQUxE5oKG155AfttAS4LsQNWxiCFMHDpB3i5c6",
  "key31": "2JNXijbNBn9Z3Bj4SNHQvrqSeqrASUYnmuR2EW6rRYRszxmWrJBRLSmJcDjTVfiibDqtdZC3Tn6ptfcdFNZg563E"
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
