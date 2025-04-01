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
    "2nPf7RoQY4envYn1YF2UBkgb1siPbLUxLs6mhkEfYxrh13NLUPihfGvbd3Zvq9iJouAJ56Tpw8krAr4tbzzTtw6F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "D4KBDj5upmvNrEyf4YAJB5AJrNhRJZXfkt5oaudPTN1RccSweWzVkaM26mYVWEFqaBDCuum3TLKHTSxHs4T1cuD",
  "key1": "47tykxKkEAVbjzKWuVRvdemXBFsDFKy1kZdbpjB76tZvpRuTs2W5FXZJHS3TjbB4MaCHM3GieEP7kMX6rTx6FcYu",
  "key2": "b5BKSoXsFMwQ7e26ahKWsMgq1aBqJPu9zZ8Vbf1AmTdhVPVjxiLmXyndNCi3CFS3L92ZherixccNv5hmrp1nBsd",
  "key3": "kYvvnoLDVtjEJMtfGqKYyZcSMTJsTQcMPoMVYFa93n3CB6Km3N7jgRA2jPs6mdha6NvzSPvepK5hHxZiCm9migi",
  "key4": "4Jdd66tPADrCLYYeK9omsRUaarYzLseUea9U8U8fsQsAtFymYtKi5DMBKbbTuYDMEVFXEaFpPGSHHzBrtsSzyz5k",
  "key5": "4hoGh5oc5zFtQgAXkUKQFDbc3HimjMauNbzFTA9PpkS3DtUZMSJpXKeRitqKFSA7E95FAvqV2QFroW5cjkCow8bb",
  "key6": "2hDhqz5F4VxrYJcoX3RLwxfPddrkuKhUpNWYAHU9dn8XYoiZeHS7z4JxpKS15YSimdjMMtVAZhhacYCxYD9zqBh6",
  "key7": "2UEcggci3ebUq1NsxNNNfN5ocGBbzAAz8Q1fBo9K156Y2oCMkBjPwENzBkm1yF4SpUUVXgVmDDum6AgGQ98Vg2s5",
  "key8": "67X4sHYPhstmsAgmrRyYBuwT9U5keH6BeRGjLhyZ6omyTZ5vE5WhZbRby62LoDyyAdJ4ctDcFtmza6Lpp6ezLnkv",
  "key9": "4zhsM3rQc4ZZXL7C8mzARcXXVrfy9bQk9FpjVM7i38v8DvjSF4q43SKh94tvArp4GY5E45CHRb7cM9Zd7jSWtw2j",
  "key10": "49VvWiLxGeUtHvmKK39UTe4hpQez1y2eBDrn3abVP1woyNZjv5xrKVT2aokQHcLMVmSNzmuQSQbMay8NRVmPZXpY",
  "key11": "QkzrPWASbisi9FW4XhSkxsNh3o634HzqQ4TDRTjU9CMmAQFNa9be26AHpmAubqJhjzNHUxzpKA2sqRk3s36S4w1",
  "key12": "eFetZjsviAAd4pyb7L91o32XA24WRbumCnwSXAztHYQupYiDgjc9WsGQR4diesXVSAPU7hvv7XLD4UHqihMd7H5",
  "key13": "3nV6c5J9MaGBuhtHmPf1qYUvgW16AkWEBDG6EBSR4iUygKmJyvAJTmHWodhhkoCoDX4f9Pa8TXq6WY61Kf2PEtxj",
  "key14": "2QHUT8JXmpD7SiXScYSrJBjcGoHuaySUkCEzVcE8VkuuHHKAPoFy2PuMPGNMgRPn45XpXz78e3CYKsNTEXn1khsm",
  "key15": "3iDtZsF8tte3TWvDLXPukz96HwmF9xgp4jYQSYQvy42rrFEUMQHCXKtbq8ty6xXRVicqfvWVTLDp27ujCa71QhMW",
  "key16": "GQ9QgoJ3Bx7LQqSpV96adnNx9oLtGgLRV6pyZ83ETj7YZsRa8B3eXziPG1bZ6ziifU6xfqscy5WyaLZJEkJVWuk",
  "key17": "2L6SbJ7yetS5rK1bt1otojuFRQ4dXFBod6pUbhHkwGHzk9DkEVpzH8WrRgWUwF7sS6HPzaaGYK5cFzfM5GXx3VDx",
  "key18": "4jJHWAxrTwTRLAgSMp5vkmCtT3aSZu8FB5tiQdzJdicawRNypN6nL6BdRAqCC4J9k5EKgZKsEgWvjG6aJFjy151F",
  "key19": "2enjvj9Uhs6vZDaJq2pWSvDE6hhrCwKjAB3K56uBPFCS5ep6czbtZ78XwHu74hwQzdrRUYvppPi24jAt7mSmQG5a",
  "key20": "3DWyE3JM1DomwQxnC3LPBdNAPy8uGDGogxMVakbxiqPGjvbcF1EARPSqNgghHYqWrYnHN3kQEahsuxQpJ4Kqq5iY",
  "key21": "47kjj5GLK6HW6DZXN5kWL2BdT3jRYvDpQPYhu9RihQkKzzHbrrW6r1fYMMaf7j3KBWMNjQjVFCXoDihk7DbeVsnG",
  "key22": "2mt1XrBdn1k2cm4j3b7cJQJhepmqLZaiM7c32pETxV2o5monHL6D1LPFdA2EVXixVVMXcAYPJf23MMn8232BCbuw",
  "key23": "4wpNfWUWpEW1juaBDttnPi97RFQF9QRKJjwp2mXRCFADQ5gsJxLeTHGxJrtPfPLo2Hpz67wEYS1yJ74JPAZnZazX",
  "key24": "2o94CgwH9LXKKqDYLLgK2n914RU2yhLoE4TFgtnnQ1YgdUKeVb6kGo4mjLtVWo1rQ5quDuC736pLpB3Lyokbu5sA",
  "key25": "2u5sRXAyNhWPBDEKbUiA43TUXQvyogpFdhhHqxnRMAEh4Ln7w3hxYKbBzNRB45JPf438np4duiRVY88ntpWvSSWz",
  "key26": "3WQotYvrWugagvtoA1kY25gtBb5uecEwQ2ft2GQFWtW9CkVKdLtpNRBsY892RhJJF2gowiZH1fsUxbQdHRpEtGBp",
  "key27": "dJVKRLr3LrRrR1sguFciPU7k1YTPKtLQFWBB6J3PNQq41iPvJrdB5rgpzZwaWeNY2dwZ5Cvb5geifCk3G5KDAYV",
  "key28": "5hNxcNu4siQBsjAb2kqqgY3ZWC2J7tAMQixtBTu9iBxXT6D3eBostCtfmZaQT6sMZa3rAR91S9nDSWUCv96mUEER",
  "key29": "3LkzBY2spaaFTmjA6DxT6FsZQMpLTYrZHemR2xjAnVTRioNSNFybprzpM1HZgNrHM4twnHqiGDZwbErrpZ4Fmd2g",
  "key30": "25TDvVRJAC1jPp9tZano5HbRyyZj92H4CnpnsfTFULj4LLF5Vwb1wcqC2Z7iwWcZAP5gY86F7PPNxCt51BFuxbk5",
  "key31": "5iWSMUz5EkknSHFfft4rKGxqYuvsRmcBM2DA4MvAyjDoaV4BzhWBqKuzS8T9Vwa2LfAJrCV8XM84x61y9dJGm3cg",
  "key32": "3gzWeVdWFwBhDo5X5KLJPeGPAcDy6dN66zkee4DUUEe8GiEDSqhFdXUYoionpUFKJMzCC5BujWcAnhT7LfrMAJSw",
  "key33": "3ByjL39Yx8nrjXmpEdKEdQWZqvBHbAFtVuhTm8HGDn16zPtuaUdsFdeamP4sW4qRP6AXw4AJjXMbdA6JfUdSBfCM",
  "key34": "59UCC88rQ97tW6NSu3MpUCWmYccQm9dh3WVJGkyikFFESisej8aVTcksakrNohYp7vMKnKD1T9zwe1MBaCtxoSh5",
  "key35": "5SjJS56LP5AfTUYvYGHudam2PKdK9eQEMwmgiLhqwTU6vFqXDz3V9SAcu8UQGb6xwsRhqF9r5A8HM7etJmx1KHuG",
  "key36": "2PhGnXk95WnGj6kbNzsbqbxmJWgVttD1hT6eimAHNcbh6azb6kuYX7EB86V2YeFCH2YcpZxoepppv7oZEumaTKk8",
  "key37": "2NryojobkkUxVotX2ND6v4q8XxEwLySwbeTQ1Fuk2zfP1n2VonjtDPxtGwGUFEMWmMGuMBsaTAznV55G8t7HCGMi",
  "key38": "4EJSCCbUtJVLVP6XDBoUv3ysidThbjgkNzw8rmtKrKgfywzADHkhZWyAnVT7NhyzcYnakyjXuFyV9AU7Ki3G7Qqz"
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
