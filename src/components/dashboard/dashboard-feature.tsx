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
    "8iQBQkj8fLTLJ6wFFyyMePqvdq5wfjHTNBD9hQXLc4KJKJjyBjVGD3JsYAfgegJoD1oFiGfmhbsar4z2o1BViyo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wRh1CzuZyQfxgv6YD4N7Sxeums56AKnCk1KcADXueaA4SeNfDkmtXD51jHPTmTcmCGoWjZvq2YhH836FLrfAJ67",
  "key1": "WXkaWTDpAt469MgvkhSdNx941ksZ4MGcjH9WRvzVfZgjVjLPtKkkB6arVuJaQ9KEC9Pb1uxmjrnP1LXcJLca6eK",
  "key2": "59msMRwRiaRuEAGHh6WJDafsQQzhDDkMAz9EdpLtmCVkY3jXEucjV8qQG1VG8nw4SHksdfNbq3Yto8KdUfj3Uqj1",
  "key3": "5vUG7rZCE2NbLj31pkiqGhy9SehS3gMd6R5n8FdMCs5RqL7F55ML3K3Jy2kMK9qPS13ZU7DC481vGp7gkRCVnSkg",
  "key4": "2YUnZQRH2d39ohapjC1ATuyx1WtoHviBGRQDUghtL7icu2HU2Ct1YaGWMKGY6i6HhrABNmgC5qEDuY415TUQ9nhf",
  "key5": "WE5BNf3WsrDF9JDTmo96AgkWqTqM4fAu44RJpiPqvGh5q5H7nxFC1G4FfekdXJ4WvwX7UVyLdD62vjja5jZBTGT",
  "key6": "4NymsyZ9evM3d2Nph25dKjCsNcNJq3BmMxXWocRRZD8kwA9wE9X6a6nGeg8BfApfFa8TURRGjvRH8EJhvwVU73xE",
  "key7": "2UouQ5xEayBZDLbfgqjitTjPTrWLc92cxPnNwZJCCdGdbd3t7NWfjYQiUXEoGtVGpLSTedtfzm2q9NFSYPioQdhR",
  "key8": "WPAb53JLkaAyDvdGLk5b7oBrFJvG4xVdMqxjqSo48tK6tL3Md5XSpo8FuvagZUvzB54QFKZzN7X7fhBDM2RKUv2",
  "key9": "37114NQFkmx8hL6hfNfZrdtvsu83akyk63PbyFts4vtAUo2gxvXhzi1EwaBBxmeLsctAKPfAdxT7pjh1zhqvu9X3",
  "key10": "8BYrSh1cUnUe3vuM44JT6mJ119TDzA5eks1XJZhP4orJC84VuUAXcan46BhHujUqsrqXVWG7sgeAhPBmWmDh9LZ",
  "key11": "26P2x6zbCUr6dAWs9m4fSn9qyaXAUCELgNPYCTvpFijQ43JiZBP3T4f3UcBrSsTcTuKhZTPeB2ZCrYQnBgcyUtWc",
  "key12": "4ZcS1ac66N83Kdgnnq6ZRa2QxMHTCPE3t2fz8KmyRMGyLybkap4Eb2t4gDfYCfCrgv2dfXHJduBQiHYntp7WRYVQ",
  "key13": "5Mw8dn2ZEPuMUeExCgdAc7VKAwfUZbMPZTaFdhtz2B4FQsnNPkqZt6jy4gqHckFLnSHV11Lr4kmrM5DTo5dDwUh4",
  "key14": "3m4tG4C1HdeeQjj8Czm6fxEnM4ZYJsq3475z8YuyguBAG1qHtSYPfk4q7ieCYg9pKq2eaxB6rsG7Uga3hYXt2ykx",
  "key15": "3TrxBPJevmrus5keqE8CruKem4KaDbW6xtaMm1qvLRvt4HKhjrymwythZ5t9sYEzaNeF1upvoByuwX1nyfUByhyK",
  "key16": "bt5kZFQzMCFKn4rrsfgNGpxk7smejjD4D3T3t5ifgrhfqHJr5jefDn7EPSd1RSYQnk5j3rVy6obVQ7dEXCe2aEk",
  "key17": "439kBwr3sDCb5ejzo1zLncYxgN5YxRPSvsRfUJikRknwBDGDAhepr2UTZKDJr1PE9CahusKxzRDzCv7vhFsJGPjJ",
  "key18": "66HRdY6dLz3anhChkUCckgPyexPmq21Y3Zmowr3k4KAVDomGA2p4mjXk58Tr9FnbRwzP8XramU9PsVcUguMkQ4mM",
  "key19": "3XCKD6ozt4cMpA9dPGXBaUQLrD1U44peZgq6PJWFoqSiuG5gt1F9jXdSfKin7w2dyYVrWe5JEL3ssgzwY45KqXpC",
  "key20": "4no2p2fkp3DgxjFccHkqHp9EoDPRYz3rzdb1VgwNwWVmuQJKgnHpr1GgUDQT8XmFnkt99SugiShdywVCwScVnHBA",
  "key21": "4dogwiDTViNBTnob2jEs8Jr64v5cgeTjSUpd1vZiVihWmc9AorRnMGR9xS1fssgMRGofgdB92D8wNXLXvBtXbBd5",
  "key22": "5cNftAoZCumuxDZMKRgwvKtvcoS2YYkZ1sjD7xH1uSjjMWyQjJBQr6E5eJo7LZKyzuMTubP13Ne6U52Z9bFEdcEn",
  "key23": "2eNkjgYg77pxBsH3y977BLvVL2uQ7Gg27HF7FvvogHqSzLZeTJi4NpG5r7D27KcMErAxWRDYizA9tSyNWLKb4eBQ",
  "key24": "3A4JPu8RSBMxVUs5ZZnPpp9LS7gT16pjkBeLv2ZdLTrkjdMY2ZuSBSBNnhkMdA16qDS8tgQhGBinDcFwV8d9StRZ",
  "key25": "V3qAv5eT9dhT8GZgS2o8FXQDUCNyDZ12W6Uk133MnV9vraQfoHu652qUf5neSeRBD2c5197Q63nbvjhS79k3bsn",
  "key26": "4RWfUHLB3eZU4eDTre7o5hPPbrufqxQfoAi94sx1j6TLhDDfHozxR4wBq3Kf3VxFwiTJf1w687Lv7vXtpctFWRYS",
  "key27": "i86Nzgv2d12hBTNwKn79yNiV99cRKedwq9gLhQLYDUqsCzJ5s2EoqJj2c8DNifHmpz5s9RnVr8X3zYpX7dGAFX4",
  "key28": "2UEfYBpoJ4q5RDNUnJzbDvHxCnUzBqofCpotX1myuUzezcQfnZkse8zqwB3u2FAVdnFtECE7yCs8WHeqXh5Mmz8K",
  "key29": "5igCXM4JXQjWvKtuePxA9BL2qKY5kGDxiQvxj6SKwAG41tZhveQKVR3RftParpSMANEk5HVEX7qqQ41iTwyWoMRf",
  "key30": "3NxBwnSMguFRBvCWFUUrFw3DWtwaS5wSYatRoeEpHbVsJ4UWJb8R7MhLURtdhzmzXP4Ferb8wNuyygeXoeBMpo1f",
  "key31": "5hjyHVayCdYBQavvs4hpiLJPa3oqm5zKKF6AHtCZbESTLniUBm1wbSkLPb3r1JiVvRSe3Cb7RPVNx1JptREmu3Bw",
  "key32": "UXLs7ZZmetqg6mRLQGASLm5mFTACmSmzUAHgwEubcbAGrYWbVCcMJcSEpFE2a5VYwNie9pfGdYZubfsKeTRtPwo",
  "key33": "3Jev4mrXywC8CxiXxJoQ3BHt3xrhFEaVBLu2noityufXUGUN62maGeEDs477zRmw6kM8U1y1LUazeK9z1xL95tUc",
  "key34": "4y7MRAKs6ahceJqoqr7jXs9FQnUM22SRHJ3tvXiLtGifSgGnR5p7pSfmbenX1UBmyGFb1iACA62rtoSeAEQey5ZX",
  "key35": "JmZmgTyqZeBTadGjjYSZteMfxQE86XxZosTFy8rtFnxKNyPS56dSVpjiWBRVSonXWji4Bv1ZJQBvAsSdAvyCEAH",
  "key36": "4KVHtMMtduEALC3LAaoCPuNdhUFh2WNEP62CpGQdN98m9fJVjZ6rbS35DuN56cRSi7bHCCdKDQ2S6DJToEUV1Vnv",
  "key37": "3sybgE65hWtK5D6YohaSqCnd5XQqqKDuj1GVnPYcBXQrZ3Hqio4u85HfF4fG7c8K1dopLdd5oLYur5xA2CEuaih1",
  "key38": "2cenD8wAD88sg4J5Q1Z4pjvBTsXENYebBagfsrJbUD72zKCn7ZwFJvTQWVjvsSo4gkAa4YoRG1c53F5yxdPBHSoo",
  "key39": "eCavDFVRDSVpo58meoua4zaBEuVg4DVLaNYGkiWxtX8yrdrx4o7dzV2hCgJWP22c4U9ELcQZjenHoK74adPeA9i",
  "key40": "5Zhu861amzsDyKUP1yWV3KuGUJxZMU933SYiidZ4RpwSxShCmGkevUq44yhiNNn2MzD2zTScioHjuSuD7NcoH3An",
  "key41": "3MHsRv4TcJbzD58kgj9sW3uXrCN8K5hpm7Vd7LpNMfWjTaNTWPZ4NLgnw5YafCia2vXsUXLw7pmTrmfvDzfV4AdQ",
  "key42": "4AGKrrTbXNYw5R3ny9MZ3jPnWh4B3Za6gachMdJhM8uqD41bmBSS2oGVRDr3WZJZVPFYB5Rf9XZpa5JmnUiiAkLj",
  "key43": "2XQnJ4cueBwcuZUcKMRGR6D5U17cSYrGa3djUuDgyf73J5nB4Zyqr5pPfE5DjSjDNuB8QjXekoyTqoR1zpFmUiHw",
  "key44": "618KDcwgL5zJdf25chW1xH9XWE9Kt51F2KUHSgG7X7Z18tk4wm72YSphNCoemKoRddrNkWMdZ2UAoighFspKqmkw",
  "key45": "5YoUmnhKWdqaw3bMDzXXcQ1HV36hhbxJGZk93r5Qn1UrAAj2yz9mtcJSsCXyNMsxADbk2rsygMPyHzyRvdTALWUy"
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
