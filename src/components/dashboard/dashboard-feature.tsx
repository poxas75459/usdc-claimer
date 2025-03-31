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
    "4Go36T4ZCQhYPZKYdDXipW3esMTAu5FVCUrqVz9SA6tHf6r3tR8pNWmSZfrhDMcng8NwU1dagozy8mUHpkjUa3a3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AiuKqZiveeTwvBcHUuSv3RCemUw9xXxuVKcwrkgWxPXypP4wThNWarWYDpt8HLVXbetRqDW49Kuf2H81LVd4t59",
  "key1": "26K4tMBGuPxoEkobK3fr6y1a6u8axQ4um4oxJMksQT2643XVmyqmmG8ecY8aneZsBXN3gqRzfEzUWiXinXfMBSUq",
  "key2": "3BirdkshLq83ytCnNZMcnAhv7aBxqwFvT25kM7zcw2nZMw4LoQjPYFoHiWp47VJV7W8HW2W84TxCcgkhp526AzF9",
  "key3": "3rj3kzJyBck5rwdeCBZTx1eDn3FDjxdLXPJf4xgRDACjH7DKRFLYWtun3MsZTjrJPDvK9o9aLF2EEFm9eArTCkZZ",
  "key4": "3nvZ4HNgTSGDKaSpddm5QzVC8rBv6xVgVARKsa1Mi1P4LEtdsjtNj1iQKFfof54ZRLtRirdg1BeC4ustayyT41sF",
  "key5": "5wnFNqgJmXzkxkdaDwzHrz7xESxhvtLeLpXrFuEXS9QukvBCdfLeuSo9UaTKCwNtKmdbSfFxDhy8MY36kT4piwGu",
  "key6": "2JZNSyPp8aSTtWrZxjCLTS5LtuCUwYCFNshaYNb9cSr7HU2YAszGoMGuid5GqAn7VzGtfhw3L1gnUBN4NBEF9uce",
  "key7": "5yj9Zym8JNBdUanWfobHyCazmEyxbLNVBxnS2NZdYBf3zjvSQsczNdPjzKi3MF8bcgHgzpMNF4aciMaNUTUMq2ED",
  "key8": "3WRjfBGwz5qwvNeUYjaZk8kC9XhL8fXbgEKFnwbcH8Y3DAFHaBEWEHHWabbzKgsg8fsoHiUMEFASByEcGU8hFNKq",
  "key9": "p8wZqe96CUNnspogQwughmUVDsNGmXWxRCaVB8Vdq44V6iDmkhpfEqQnHSep1c2s6qrdoaR5kMweY9mNRCAGe8c",
  "key10": "dQ5jxHJGN4SxamkG3fS5wKQEPnCWCJ7BjFZC1aPsRnXucraf3E3QbzASe6RrL3pfdZYsNL7tpRytwqWZy1xV5kn",
  "key11": "FEpRWyF1Ur8jxDkCu3c2TchfPt1pkGvCHabTDwBhSzmvDbDkuD3vbcYqNXwW1ZqaYQfEDVMxNdRHbN1dp1KweRy",
  "key12": "5H8Wt5ip5HQ4AcLyPx2qF5AorfUYJvAaHqYzeawFxhwTMK2dtt3zx1tdUa883bbJKybeH3oJKd6N4hRdEXAXQBAG",
  "key13": "3cU3UGWCV847EZorPci4HiJd7AR9Rg89jtNfHQcvDSt2T7xY2yPyjMgbJveS6ruNYLnKuZT6rtgiMjsMijyTJztm",
  "key14": "2iqyrVKxdLcDio6YAcQhfu3XjthBV1z2DxYaz29SVit4G525KoBCpXAuidy8aX3F6JqQdzpMaXBNmNaJxvKe2gxz",
  "key15": "456V4AMTEJWbyFJ6NHDWKjJoYGmWZwNUdzTAX7HrsBX6wL4bcCEeu9a8SbNuGU7VupWUyTUR1pYDbwL2bKbXk6tN",
  "key16": "4djfJZsQ1rLFGB9ZJ63DPWi8zpfMmJ1wKyByyFUDipKPBcPmpq9UdQgjrgYZQjUSTSMuvU28DHgn6SZNbu1dUcvx",
  "key17": "NwiuG8jn7TYDN4PWsUpBjED6iFcdQDrJVEQXTjKP1KrhkuzdetDCRdFFsvg1vYzD9sCufWorScPD5NKXHRpaPeM",
  "key18": "5iHkurtNPGbMCVZXwgBx9vKwwfTCkSgsUH2poCotMiCpuLnmB5vVGZhiokZKKrZCfvhtByHBjmgN7M8tWrL8ry9",
  "key19": "4u5tG39UVMjXCqwxmH3MvQahxnTqsbURVJXVYKU1NeWhoVtMCziwCrqEgNzCEAKYXSCKu5CxzZgHMPxHHkj7LHGP",
  "key20": "5jAEwJpfio4BSsK2UoxKs1bRfsYmM1C7zkgU4XwroJnTkr4vammLgmx6z1XowmjLCb93Txn18wfoqP8ejEKB163e",
  "key21": "5USpCSr4uvM4rQfAmMftu8fMceScGwjDAABox8nryfkdmc6pXsX698NNJVQdvoqCxXPnkootTgUbN9GTZMSgcKeg",
  "key22": "26WrNbk5KX7FMcvi7BwoFMTbB1ERUB9BHLUMBTNxDwSJvsVg3v6XdxNW8Z2cxzoLEzWycCzDFWTzqe5tS5uPFePu",
  "key23": "3XZ48SyQRTRRMxdPX4q7hAaX5XGNPTtfe6xi9yRcr7u8DqiXuhpAY5gtNkBmNfU1FLRFZT7Xk6uUJddQ9SH7DdRK",
  "key24": "3NGF8rGUGbFU3Kpz1KbzNNPkBvJejKNhZJCHWcKD6xaU1NoYNUdFBFxgQGGUCVftThXo4mfqNxurADcfwuUWcAKj",
  "key25": "4TovLqc1Z1j2cMsGufprRC8nJiMKpi2BrbN8SEFjGjvBqC1x7XhS1MyFgEqmfGqFsztBsE4y2D9AdSgYW2AQS2wf",
  "key26": "67fKw11YV3NTaZSe65zoVvSTtBAUMXYgYwdaoimjd697QTwf5MYFv1Fiv2TEHJjwcHn4KrtqBYK8exm578ohPPKX",
  "key27": "1DnL9Zxn6BCKcXi2uiqYnUcwTZfmf1K3uZga1U2shJQ6t2rdNJmKbaC4R3ekzcgrfAb7r45gsodJKVt1GC1aAhA",
  "key28": "4CtTZCwgnQ1tA1enuBDEzuGw7Y7efiAiPqY2UpTF9MjHXoPx2tD9PsS1PUB36kJgNSShQMfSiQt3ivuR72Xm3adt",
  "key29": "5yNPwEEmYtVerRMryKqcvLfYgQy1q29f6cpayUwTJfLAC2N7asEyjwVXNxD5u4Cbu6CLQnvf1bECPQ6QUyRp5tVW",
  "key30": "52NHKZst4enbF2nGKSDfRyocQKkY2Kj2uFiJodgNynFUY8foqKiLeGf2Nc7tw2pV4sRDnzrzU8nzahJ3QPmqGbSe",
  "key31": "29VshvsjJbBkPfmudnWbff7y56To9gxgze4rPBhkhbycGQ5QCnYViBwvbiNCYx7D3iupLzPL95Rq7bAWWfyoUw79",
  "key32": "4KmLv1tmYQFNYS4MJRjQSvFemKbRHa5fbJxyqLdNPGejRkLsCnDyCpNRQC3RNRXgkrvMWgNGhD5FK6Ei3csuf7k6",
  "key33": "5sKo1bpG3AzZd6J5CtXDbJwzSXwLVSqS7eoMKc81KccJQA2YgHb8venJUBWw4om4PnAPGJLLYDCgc3LtJER5ZL6z",
  "key34": "RYCVr8t7rgypGMrMYZPtGTrnbF6mNHk7SE7FZVNtr3av29rqXLz3tWX6TQYN5c8JngFzDz9JRQa1vSZgTWNog96",
  "key35": "5E3PE87jPajmmBHNZCszpkg2Y3DAZtGtatAPSmmXrAvUKsxLA1TCxLrGKSwgvu1BKQbRCFL9yJrGZR9tLKdY5RKo",
  "key36": "3apXhvf4MAXDXf94zuszsHYVKpLWxZHeAMQjDTKVCLVuJVDZvzBg18NomerfqKZtspiduhGJiSnDRbJts65LYBMj",
  "key37": "5ZdtETspJULLNxU1DPkGHvtYLX56PDSYsg3aQXVBeh9ZgREuhAt4nXGtqb8CK2iB6FqdY3TvvXWmH26qWJpL63fx",
  "key38": "sPgqC3yp5ziNvEsqzhNe3pBWqGnMMpP9ZZ2BqmEujqaj4FnhRt9s6bUWhN5SDHBX8PpnZRmF3n8ThjUXV6WK97z",
  "key39": "2Eycp4JKtumCLSNzNYUhHPs1thgoAULFqMto4ErG9e6tYvMCPa9u1LNhheV4VEGUMhRgn3ED1banUdFfgucwWdFX",
  "key40": "3gD4NpNmeAjjZcC3Q3etccAuknLC5KBQosVTG4Yez95eMGTfwSTRXtTa8BVBasjdoK6SPVdD8R9uJZYQAMw3HvBj",
  "key41": "4Yj1V1tyxMQfP7vcUmDxZPfVSBCCSdJR6V9Mi6yysWwGdTSghxdA8f62sReQjeDg3E6ZJP3FaLYHvUTm4k6nHayk",
  "key42": "h3bGwe1hmMoYogYoYpvJcVFmFaj3pKdE7aW1yFPi1dnEZ4fjkx7kogjYG7QUc3U4NQvo6pdMTnVtBd2oUw8R4XW"
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
