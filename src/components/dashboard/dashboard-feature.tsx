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
    "5Qpyqzx8TarXtM4f7zhDkDxrqMtZQxZaMiHwy3EoBWzfXhmw4yJ1EkEFZebKiuCsqrSSBwvRCM7WZRmQjmxMst6U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Hm6FcNGmcYbYVEWfY9eojt1hT6bujk5Pq7JjeFmVSQLsRFdwP4vL6T3N8g3CmhagR7tRjhJDGxRXAansptSwhxh",
  "key1": "5zFazdLEq8X4xC9cMuLDpw28xKdZDYEos7BU7A3Hp49KB3CkZJrMYiSHcbkFFTU9GABbWSngvxVyTq19kuMRjwf8",
  "key2": "2oLrSfmeVVyzEVaBZ3b6pjPUdd55DAtZndCUvz4bEjbdC2N2KZeJZCXNq1rPoyvwdDSNYtoZKC8mSiaPft8kx6Xq",
  "key3": "3KpqAkhHtXT7AVAMaijAf8KsvWDZyHxvUE169RYW1rpHDnhohcibmsUv4pQ1iMGwEL3mqmVdbn8fGAzoHJpbMfVr",
  "key4": "3v6iDHh8NdGhzDT4J1xewPpBi5zFxQ7rQwKPf163Zq9tEQnVVRoed3qDX9Jig9bcCwgNuQcz6EzUxkqqTEYTCGPg",
  "key5": "5AqADRjsC23jkC4ZWyB9WqTS2uqTE49x5NSqWCjaFQ9jEC8V5EZNqNHJfp3VAXtpUAFreBwxBFrJJsoki67PEDs4",
  "key6": "61FpyzEM4FNy2Yo4UgW5dfpgkfCDQF98hr8o5dMmHaq4JRXiAkeooV6iv2r38hrsLDm9U15VyEMy8436JybsRaN",
  "key7": "43AQCEnejVSoYNVGrgaK5bn2h59QR5VrRhUpazg8yYU77PDc7UTWB1UrXPmWp91RR9drhynWeLWvVMK2PArZ3ZeP",
  "key8": "4ykDjPxX8D8xaxWh2MgrCfi6Rya83C65NkupYEHX4LAMqT2erRGuHgc7u89z8abLxX7dct6PJfNQa1xbZDvoC29M",
  "key9": "MFb4UN9oUH4z1w71kgSwtKUM9wcgX2H93ndGzwXfej9e3RK54ssprsFpkVzossnhQJmXRzUs1JqYrduXfpPgLTS",
  "key10": "4w9duyyaiWfn2avp5WNBwNgvbnzq9gwsEE3USqBofgF4VQpnxWA6i2SsqnjphYvnuu8ZYf51HZiZ36BX7DkcWgT8",
  "key11": "3GwC3GW1tkpCq1AZCG68LkgQGRYG9ihkHJgWNj8Uwkhb74YSHK1dojzoQ1x72YKYdZgbEAzw2KnCUYCeeqaWDoSQ",
  "key12": "3VjZPG6mc99Kb54b4fhd1SkNaEcaGLhmGzToJAzz9K9G71nfw79N2UCRgRoe9My1MDRwam3HXYR5tLvxjBAXvR53",
  "key13": "3BGSFueYcryZr1FJNDjVphUTb242wUtZhuuDzbbadu9TMQJEhwnmSy92XsRMbDwFMCbiUfKnFthaTpUhAJMammzv",
  "key14": "5mCRJzPjdQMU31acEzauVEivsryrCKy8tYXYpNeif6JSJUKDAoWsGcaoGocHYtSNgBCm9kDH77DvJEtx9XgxJ3jf",
  "key15": "3Lshj8iAx4JaweCLM8Kzyd1AEp8CMhVpEnScz9hQNXHjqGBTD2npkwGbxc2UFAU9HpMRMNm5oh4v2MTeWB8K4USY",
  "key16": "hLPoKZu642K4FUSa8fRGmxnCqdAYGyxqDEednQLWojz7wgDxQqWWLJMbTYHx5YvDkWMPWHKKjaMKkt3n2dJuHty",
  "key17": "3EDE3pz9HpjLADBUrQyQxavyQqjFvE1XS5H9zwMdmcvy2wPc9WqVembEfE7QEabgA9sUmCNE1bpafioCE6ZJrfof",
  "key18": "56hDX14ubELxRo2K5NHUKY6eM1ZUtYL84jCQx1UVZmYkAVhuKNEpn27d2CGJWu4b9cHiGDFpSGNhNF2WibKvj9vN",
  "key19": "65Wg5aE9HuZ5mbNM1H7Hbf4YiKg3aPbTo5MrUrLH6Ao8eEKobfHENZyGpVQcBb7thRe4r8KFWGvH9APVDnMeE6fk",
  "key20": "xDrUJsAGTQiD8eLBD4J66uHVmcRukUS5QoxEyjkQsgXjTmFwSBNYzh9fGZMyi2YKjvKuxVYcKkCdPChXV4X7D7G",
  "key21": "3yJWhEYoh17kZ3GhJqPVuiyVPr2XTTYtuGbQZtu6rpaGMN1YZv7LjPBbD3hoB8HUd2m5YA17CpUaic1mEjG26czv",
  "key22": "hMjU73bMvJQZStTKLfG4iU6ttCQg746EgksXR7t3X5L6Y8PfsdJNFuA1AWpevBL3e1dzQtPfMg1nXCTYAZpYrY5",
  "key23": "4ouribnikXpBmqzt5i1Up2Yvu3Axk1WADHAWqgHjKvQwnzypfZhxjA8XTC1P2TKPFdm3Vj1St5FVXYDspJJueJ1D",
  "key24": "5jg1ACTK8KRMbCtXXfu3yrncaWsUFmVXvHpGWMnUpxY1vQUFcLsvnKzxaPHoaisDaEAHfVJd397oopyoDWMKLASj",
  "key25": "2Pwf1SPjHZeF9Cy3QjyN7SYEq4onRs15pzdLWRuoGmRgSWPT1LmTg86bhRJVHaTbpeLcKxeMshakyYtN6JaJ3p7",
  "key26": "4cCcnN3QNRsEajZtia3e5H2Ve5UavPdwJEcigVhjhdt55u3StAKHkhJpP4i9Rpkz7yhfhjCX977kwL8FPDgM9VPz",
  "key27": "3Z3d5ogE5i7YDq2nSSoPTDmRvfysneeL4AV76wmf4ezjUuQPhtuo2eTu7D4RnLU9uAjriS5JstZvrJydmyXkPaqU",
  "key28": "Q7BN3aJVPo52EESyX6YJ7PuvEg3PHgv7P5L8dquLTLZw3Egj7iXHEbAn6DJNxAmZsf1B6dLBY532ycCWB4mZT2D",
  "key29": "5dXWnJN8FNUpDSduunLPtzgqmBLPz2r7f3bC4Ho7Z1Zw77nLrVKH5ZhTCRYUcZKCSbuiQrygL46aA5fcXXYNnLuL",
  "key30": "55dNM1gnZxmZ4r4gGJWz9nAAMPcaFUZzDEikTrYPWw1NtJswwiLpGVbTwE3VcYiz4obRGhsefxFhRRRusewQiSV4",
  "key31": "27TwBdtobdHPHXBcpe2TNT1V83cjPXbhT8MmQtwCatLpQPN5WSYsYmtMQRSVkjZVHWBNzAcAP31UVDqkbNYKHaSE",
  "key32": "3y8QjHBmCvWm5LZG7G9cQfR6gJucn9bvYyHqAhiRkBGH948zc93NCb5JmxunZALdbdZDusXatMBH6fS24eCVSLPz",
  "key33": "4H8M4FZn4QD4XJHJTkkHgzmXrMWMdYH9VD2gtBHqriKgtXCJdiLB34FL7EVc9HYXcp7Sd4tnehSu4xinUFzhqyv9",
  "key34": "43rkEqvZ4mGjb2Z3Sj9AsDosUfRp5LT6eR1k9WxF5zuZ2n5X1NDwzvSXQuxRNHSybibQzeQfvQpzsWxyfBSJ2qGg",
  "key35": "4aNSEk7BcwLHv65t8Wx1omXat7qdmhNNY27xYYNU5MZ2M4sHFVFgYzwEJVKfHN5QgdDSPMegdjWDs5VPfdzz5nCK",
  "key36": "3zgjPP4iLowapWnFE4Cd7tMegX6NdFMnHqh9oUehtuPwGYKQEZQDBAfXRxnjEFk1BnaHt5ii236hQSEhECTzJpck",
  "key37": "3ZgLdSXfFb1Vcd9aLWqvY2qmFmSMVSZPrpkNtP9RMh1tdMhVwH8XW4R1gym4XerwisT9mLhznCDDh3xhgrboynbh"
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
