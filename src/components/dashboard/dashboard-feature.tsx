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
    "5DKVrqEyu5aMDp9WdfaJGSoK87wGi7DTVLUXXfnzQHEQ81JPRZ8ZhnSENJpp1vzjeVDCy2HSQSBzQQXEsqmFrADA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PUB7vKDzdoyKPx2D8G9GpMFRWwwj8LvueZBLkXe1YhpAztEDK71iin2BYm3n1XPKgKhLYTfZDoN8dknoUi94QaR",
  "key1": "66JHUKFX5SFXng9U5BA6MKq9NVc25wWEtQkSR48RFeNuKKgxQLJguKWVgyBBy3wi8khnNmTNWk4w6fkKiAvGPFEC",
  "key2": "5MsTz7bL4JctP3MNnKXJyJ1gM5exoTMFMjchZZMnGDQMSJrsR1NBywsAnu9m9JiUKYM2EL5VAo1xp72M241wKsZh",
  "key3": "66EFo4V1qd4viQyEVSoT9NPR1vCYthjQhGcDhPDhhjRpRJyZvkMVg6sP4hz2gNGCjj1CM37UMg6UYFEeBAEiG8VT",
  "key4": "5ZiGaCpyyzrJ4W2QzbpU5HyR2wLidkarX11Wvn4EyKqzm7bJtm3gwFLMiKrp84zSSnJMFdEANSW9wLnPejFVHx85",
  "key5": "5kKV5ef1iR6YJXqbWvJeCh56ovQppJFp4W8E89D5YmmqMKX1yfzdwipwvqSTdAH6u3XJdcbD6y4wdybGirC5f7o9",
  "key6": "2vL4P6bHdUfwRjkwksYGWHqVD1243698XQkuexmWoKAb1LRFvUkV27HVkSQU6BrQmxugaiW5zkUfN3LUu47tquKr",
  "key7": "5qZefQPMKYZQLYK9aErysaSXC7e9DGFtnqFdPcv8yzqcSom1yVcMZLfdfyDLUpSgSQW7ZnLDpi7jJjnbUrq4VjVQ",
  "key8": "4pXvXsHmuFiH6eALiV9SnNrPpy7eoMteobKoiZCxHDVvcqNwt5Ty5kpre49KPbLChkKnbg5THFrAstwFsrzYN8mF",
  "key9": "41dbeRn1QJ4Hh1hHiusJUr62CGXvGVfMS5jmtvmpKBSX7VDHzMg3rR4nqJrA5HA8wYb8FTC6WdMHGUFNa28TB9i",
  "key10": "5CX3iWKbebApok7VnW5a9a7u57aYunpecmZaetmhUWsvXBzCQAQHjMXgkcBfv7HFWq3DBhh6hKjUQRNJvnAPi1qG",
  "key11": "4Xu7bgJw8MDNFDjaRnM2esVdTRMS2dC4cTsw5in44kDRhkAtFV4Q6fWmix376cenc8p5kyU78a3dsJ3CBnW3JUo1",
  "key12": "5ZuEyj5m6ZVGFJCeu8B8YCDqSyHxGWznTHTEfRGv3FS8FcNTjX3TT6kSWNPyU3J69r2XtaCXPp5t5GVJo9HrdCwc",
  "key13": "xru1ZB1UZuz54iDb8YKxSVPcDzEAwN18nPGXY8Yo3BnHWcxmQ2zygF7VoVcJn7fMP5nyFB4R2XShR29NuVWjMVc",
  "key14": "cARk96sgjdVb2gGT9yz3rv92G4zeeN43PE6PaN8BA87kznMPprHFTpHw8xi4na7wTGagPb5e3McBkareSkV3o3h",
  "key15": "5So2b1bDbDqHZDdf16wV6TW5bvQWFoevUNXANy265qMKe3rXqjvweQJAP3EYsqMKQ9qNFNH6NurxrKvP8ig6FYxP",
  "key16": "5ntYSVbJKkC318KmFYQwAqmou7F5VagKbvgiaErUmzhLMWtd8vqVNaGbV2SVN7AWycktkeJsA5uTLgtc7D8Unfrc",
  "key17": "4qLTEBpYfFiw9PdtZCWTeBiaZowd2wTigz1SspkTg62KPV1NzYY7zFYBq8Lw2YoVP6jQ1tpmJ3zm6zzmonGBhHaf",
  "key18": "3BHjhWzDheSwZoag2gWWJPse9XiGQ5XChoXyUUv3kx15a7Z9agsxoBZmCUpnJ4h36LXyn4t5SHk2iTU6JELojwFi",
  "key19": "29fgEy3MnWPhRo7KrXJaU6C82M7gDeduHviC2MJibjHEmhJ6AemwuMLBn7oM1FVHsgyRf7STT7p3bmfZ81Eo22qg",
  "key20": "2mqkz8QJnpT9YAKerB11S3nEGvUUpARcLkNRN9MSRbbjBkZRM18aw6LtrRQtGnt7eSFbzahyAwtcfNMj3foE3NpF",
  "key21": "5G4s8VQ6UYaxTyPUmk5HQS69ygSjsF8hq5z4f8NPhHTnPyg6U3bdzhaugWdU3xipuWKQ96ENcgH6CdJc9PadLCKY",
  "key22": "2sa2ZuVHpVTx2XPP6aeXVS5DWtUqsacoWaUZFmvHRYg4AyQGNZcwv4KqB2fMvo8XxAjKReJcPkaVDMJQNRhnAU77",
  "key23": "329j2F8tr8A23GJbUZmXnDttGBChq8G9Ctpf5sMuW9tNRiMT4oFDtRtGvjEDDiN6NhJECumgS15HPhYpy9b6KEya",
  "key24": "2yhGbNTSAK1BwKHFDQSV2etPiRTGC8A9kJwUVp83uJ9S9F8mCsEzcJtBXxZKDVuopA6piRRBA5MxzVrkM1pBn9CB",
  "key25": "jLuX3viNPiBSW2cGJWiRet6o9qZKLg8VpynB6gHdLRtB4Hp23fdaJxJwMtEnSzy3B8FQUyoDbtSVBSHtPiFKqPm",
  "key26": "3DYLrTykznWrLRCVrobCuu9hgjmyA3Ax6N6ZArCjbTfLEkHzaEP6fmBVFSofkPcvYejA52gydprr5nZvMnBrUDbQ",
  "key27": "5PuvEpz2AxK6mKVx1piL6X2zSJBCe1tbLUQzMvT6tu7r2DCSmW3FnoSiZbbnQJPHYbvV12NDcfUhwPz4ECP9ixNv",
  "key28": "3aq3q2ov5hWxGgQgpAQ3nuEtWQVkz4TrGseyfMzFrSjDmzoPRAnh9tMigoQQBdJWNHj24RaehXrNfCcGtru9SfeT",
  "key29": "r8HsUSmQL6RAqCgCEFM434LeAyXw3dkikcWNSRdHtTagBWtHLQaBba7DkLAYX9RJNucs7AeXuzEuHxENoczBkEk",
  "key30": "5BxscVCAaXPY7ErJssLk7GA4sgMtYr3xN3NZncLrGGvfs4h3PDrphUiCVcxmHpaRbJ6gP1FjSkhe4YJox4hsjeSC",
  "key31": "kiLN4QX5aeAa6f3Kkov8m4C33HDvmFsGegNmWjXWfe63KGeJa1UBcQzSuRdWpzpRs1WXjZ1YJmxvs7WUBHTYhTi",
  "key32": "PTjVPHrWrgJ5rCDnMycp9LPJzHWUwBNwrCp4v93VGFczcyWAgXva7PCfWkZPLpikkMeGsyD5eckzt1xacxsk6d3",
  "key33": "3YZjjC97DKzqFLzCjEe2bGEkKTUWirCRVbHvpxHRGWwp3A95ztY21YofcdyHWJWKew3cgxXaX9cdXhPtVd3cRHh5",
  "key34": "u9ZQWjbdTjRaZJimuVz6S8zmnzR53Qk6FHm9GSNsG1CWEGp97mEi53vs657gWxBWsJ1cNx3Vz67igyjAMKHNUcU",
  "key35": "5RS1yQzKTAPvaPVb886CVSx4rrrU7GwpCfAfagbfR6hXLkJhgcr3hFPQYmY7CvHqoTPGpjY8YUbfZ1Sx6sGH7JP7",
  "key36": "4FNxDJg36qFWUXn4FxWAiYXsRJsXnditADUQumuxfevPwwboNfnbaAYHypPoywTnVNUCUAFp5YKrEExXvDpgC1M7",
  "key37": "2VWsrEQZGxC735nxB3FuAHt1WM56fn5bnBEPsb4qj5J2Acurc7W9hmcgbDMh1HXVd1QPT4xQgzE5TEybnDGvTVEs",
  "key38": "4b8prBctjLGUCeoR7wPW3YNHY3gXAkHp7g7XKrg7J9dmqwRAJDWd1bq6RKcXrWd4R6oQ5AjwaNbHg9cC2D9QU2mb",
  "key39": "5aogtmMKJs83VmCmTmAzu8y9tFYtwB7yinVkPfvLzW4h3eME2NmaeRVseinsYQMVWDQrZUBwwMGiZvaBmQcRTaMN",
  "key40": "5tSUDWdKJdzPZNQ4HLAi6hLqtMMYKNG95DiQYzScdsSnKxW6CZdnKUqJFSbFbQevo4hgXNS6SKmccoWw6Uw6v6bf",
  "key41": "2bwKNQNpXBoJbB1zw9P1auR7C51uLYHSqGeCYZ9bwXe7dGb3AY8mUWhK8Jxhdu79yMU4jckLNwTKuGcmAqgKs99m",
  "key42": "wgqnwkGbTfmvHjweXxohGfG7aA7oMc7BHNUR7DSmXPPBcWKS88563HJDjkboYYGWbyGWaEsfMEynL4XvQfkpqoT",
  "key43": "4oYmmK9o1pNiTJJHLrsQyEtH8Jbx3grvJ8FWCRLaSLQTtobJJcqQijFKYaU7gzKr6evoN2xux4VB7PGbrEVhZ5f1",
  "key44": "4VpZ9itGDy49cGtjVE5BST1GUeWjyw6WHG2a9rYCedKfX49UbAiU26VGGdZuieXNkL2VSod1BMme1rmpPmSkmAWt"
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
