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
    "3bzqnFeqLyXVU51Uxnc1ACg3x9N7rm7C3j7eYsr2CavDVj1STj5MBpvLFzVLXN4oeafBYhmK8z31b7js79aLDeox"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ka6RRd8PnaWsweTABhfXM9p2Xy3t2X8R4a29Du4LaZRWHQRNqGZ9dNY4uLvma1WX8NvoDkUhCGtVyJGpCLQeWmp",
  "key1": "FsgfQfojZmwAeySgqrWtydf7KgwadPeVhGKuxLztKgsBFSxKjRqzZDmuMAxzMZNwwnhnJ7W4ihKFLnTy12wBevm",
  "key2": "2dMeGBfcmqjx5xTZRhnYLL5ezA8SY77vYoKi3SzxRWT4FfBZLufx6DWpcpxNmuHLKFPD6z74r7pFWLgdFYQ5rsNm",
  "key3": "3ijDe3jqvvith217Q5kT88GBnxpGW4LDQjMtRRcHn4oyF2vM9hLBGh9cyrEUGjgfq3ACEp8aSxmezXyhgeAkTz7m",
  "key4": "5JzzrkRTkHbWGFR5MtQvE728NMxMUqXqPmXqcJYdV7eyvtXB8RZTWTJFNZwr5FXDruhUr46y6KPWAYqqgmyYboSc",
  "key5": "cw6c7d6C8eG6Q3iFT1EuhYqvK7ijfbkv5SMfktdUoPnbpJTqKTsy67gumGAKjfCcp9GL3hBWFZxPUnmDeEnHkPJ",
  "key6": "3EyPLKuDc5WeM516Z8LHDdGZ9avNRYXA98YXJoDghotW4KQc66JcU8WgzzpTNc6ceut3JV7DeGRa6aRAyrXMT9JW",
  "key7": "2HsQBWqYiJfiL7eVRJaeUHMq4QBMMbVCu5GhWirv9ApxqBniHixeTBMsLzj85dUHWkmVpmkNyPG2fhwDMGt7whrs",
  "key8": "2Jn43yz7iLeJUHgSrqryBrTsqXf6TouD9jP5gMEmGCz6PESgZgcPdYDbMZXCLMJKtKj4u7Z3ARxksggNTDWjMfdr",
  "key9": "5PRCLT9neASdB25dru4rGt3tamZLPMYw9LVAt5qz4ytBNm1WYDZPwXfofDcjJrtrFhGgrc6vE8LByqJB1DPLDXuX",
  "key10": "2xG2kpZMxXxn38L2N3bCYNdzMtGeXE6DpB9b2sXJRezRjpPnjGbAraXPdi5KySBD5cR7ULP6uHnMsjFEYvXhohVs",
  "key11": "4AihzHWj3x2uco8oGtRZUxMoCXkQfrRWzu8oCxKLGGc9CRgAdnZH8DU5XFPKNZXFD8U1d4rcsC9vzhDfzRpEWjmy",
  "key12": "LE61Lu7MjQjyUK3fUQNPYeS7tXdqp5cs9CJKyynfGFeRuwcvXQ16oL19gbVwUs8SSNqmwXrM55jtnMtL43bU6uH",
  "key13": "4PwwYDu3ArW9EdCbYpHXq3218EWStyd8qvhZ7KLkaMQULa2B4Jwve2CndHGAgvffaca65UfafzGFXt9KvLjzg7T9",
  "key14": "4gY7as2b9rtUJHMFF3RpwXdKCijTay5U61BwLi8DpuENyDumgcwBY8x6yfpdDpYbXMdMHRmxDA8SXgUwzGhYksiV",
  "key15": "438XpWWu6V2x6xd8enHJrfbcdWaU3zZAy9TtNocNhHuYhHcG55rpfN3Nt8h4ZKHrr3jxN3B54A96Rp1v3SpJ88gu",
  "key16": "4uHRcnmmQXghTUvk6JphDPoQ1Xmv5a5c4vYvpR7BCYtLMx4JCK7fK6sXmF5Qnkhoy4bgLdBpVBcEGBGSA8J74XZ1",
  "key17": "23GikRmDRnAGbPiJTR9vbND3i88JHkXAswQ1Ce7sJaQZow3sYi45eB7hGiUSprGazrbGbimE1Bvix75Sm4t3tXDQ",
  "key18": "51BCRPjg17iGz2q9uvLAHSS6qHzv44PXch2nBCdQGELRKzCrB2qQrY7rNWHQCJE6P219WYVw7wrSLggkEX6YV4yB",
  "key19": "3pndTCBNnwUcGVjJqCununev4M1uYYN8Lonx5hhPGEAdeKKsD8p9yNpNZ8rHE5ZZzLfBA6zg8wdcT22oUAdSiUnM",
  "key20": "4MmbX3mDDgH8AxXD4mLYQ4mnt5Z4QLr9jiRq92y6TAjB7ewAL9qBkptMoeZiwo6FzbegqUY2ssvrCMRgp8Vg1J17",
  "key21": "5cXVEcdbVyQZma7CGxVdgrBEQKMHgMtPWMhd8tWZbj5q65ehPMg8ahFe4pNU1nN4JULgyoiSRnBe1wgpkBBsBRPA",
  "key22": "n2ND5iktUEe9Q7njSBQFBHAt1mrYpBWn6k8drLQmg1CN7eVeSPc7h2BnhobrZFJRxQSimAJePMCuQYPPZJsToLD",
  "key23": "5HWkM9Wu5FUqFgc9n4sTzsbPE43kwgGuVWJkG6SSxLCA5gMjT9pdSgsDLtfjjGt8XysNXWujP7QVy4fhakv2Jw3e",
  "key24": "2zAu944mH2YVmcymFgs4EdNnr2cKJathpdg4vWDWK5Wuh32aEEtdVFkjnQSXW84PWJK5A9QYCsyxKstFkvjBfCcY",
  "key25": "4iGebAcGKWi8p6ELRwLcoPqZetMUZyEe2vejj8s4pdcCV4TggCU7gWtjMPPrfuKsvJ7ZY7RD9HL61nmfE5mSeUrM",
  "key26": "5KfzAQndxkrVUf2svhc4STbdZ9c5as1KmQ4Rtn5nHzsGSXxiWSfpnKkF9Ccmfy9mLJd2g1wYqERgFD2s2AYg4pyp",
  "key27": "2ZMyenativ8mZxXZZMq37H7Djy8z3x65iRSzDkx2YA3GuqU3nJB8K1pqXX9FR6WumfWVXaB1CTkheyB6RBhHLm2e",
  "key28": "3CaEjhJoN8jMo6VwmH43nkVDPZa2LUfGekbdMMCMTwJZ9TVa6tprd5qRq6AYNrrUq2a4br9hPfhYijEfvaNLC3kA",
  "key29": "2c2Kr5DcvcLwq2jTJdcrNb87iPAQriDSbBXth9FSU3PCEt6WFaTpYC5iPitf9aaNiDu1oTyEtX3EZcofuKW6qF48",
  "key30": "2G3jhL2dhPQiuB76yT32szpZxwEhkuTTsA7orLGpoykQtQChMhtg5bBDwzRSgrLp6JLWEC7EdPLWqdxCLqh68riR",
  "key31": "3jpB6kERDMhYdcuFZpaEbjuont1natGdAGZzUM4c4mQVNxpAb7ew2t1aEARW8Hs4ZbM1Rf6Di3XdMAJRkJMiYVWh",
  "key32": "53eme4XnZYTzXfgFfvHWj7NfqqHXranWnm9KYG8tPkjDzyNempkCRWxKhXXqAaUSMcAePbYNa2id1VE2QQLwbvqf",
  "key33": "2AgNw593Vwg4k2s7A1XBmkGPAtkYs17iYGxkJm6VwNgpg1hhxS8aLpv6LgrjzK2cPcEQrLP8KyKZdfyiBNYDKNcH",
  "key34": "xvbV6b2bc9nPTeNxwLdnuT1UkSgLP9w93HM8uvnDNBtqd8B76iJdsCrSZYFrJpSB1hNFA9o3WsXJjDb3zzqcg3e",
  "key35": "3xHAXtqkjjv5qDwmxr2oNVY1xaA6h51Bgk3S6P3yJtyLRTckYCXiWFs75VfwFuzSi3RcdfFMYnmWMU3GLWZk7x8R",
  "key36": "3JNHdeGYNwCtiYUCg4L6YWnFwCLgoSS4QZM74ug4Rs7BGCkyTGAcyVdrxaFSoV1kidNWyndkSVNzbL4Qg38XNSV5",
  "key37": "3qhZrww6rUcKdU51tYFFJWsv4SRKTEsLRq9v5rk5uSyyBJZqv1z7SDJWx7jTtfyJDJ4Vuk9pe7z8MX4r8WcdbsFT",
  "key38": "5TecP4NAcNNBzdMDuPTZGEYkcz5RiPSpJBpPbPeeHrn4TrAsKXCEWLnqyjMxvqHWh6MtEXKoUjMPQLBenmNyiFFX",
  "key39": "5TG5cHD2BaE6XXueKfmkcyU3H3XmtJMzHTgihSVXSFpn2NF7jvSJ8ZYjSXJWMHGesAJxP6ekSB6ooKu2i52LRDJ1",
  "key40": "5xHiGdZ3sWZtGf4KYLHF7EY57ZQx8eYcbg5Ld162DWJZdCKm1Asa7mQzJ6rPSRj71aTH8TD32k2cDianNvGUpghu",
  "key41": "4KQXr437tNsQDVztC7q7vNEoW1wNgyDC5ui7eULS75uAZ1Hhzdv8KT7mKvCwrqQcCvFHL52prg4yQ7YWbZwBCoWw",
  "key42": "5gPQ68vU9V3TGGwjneQoYKZbGQ9p226jWyTmTYmk1DZsca88J4fKPiunrkhu4ApjN9tKCEFmJqEh8zRDGoHen6iN",
  "key43": "3fbdJF8fMrySFnR3u42fuhK1RorMWKfmg2NCFYCWHwhrWpMez3HokXysnyiTBFvuT3dTFNNGm8hXNFiZkgj56WGK",
  "key44": "3R7ns97qLzU3EQzpvM5tvja735LFa9yoNoLLYvhUzPkm4iFJUeFsKjLZxiVm9Q2DLWAbMiHo2VZoaaSMi7VaS6W2"
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
