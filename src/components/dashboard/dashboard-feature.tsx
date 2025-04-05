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
    "3VtDUwENfxyPrWZw2yZ9UEwfDcRUMzLWYzrdiHzB2FH2N38qo67Ty9Zdqf7djrJSc7gd7x1CKgwqxfWUdGtna8D5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2K3pX5Qdf2WEczQ35U8aQkJoNCffH2VGtay2VwnmALbNkmmo2yJ5kt8FZSnPpRAJGGkAa34yAxLDuwfkWkRsB89W",
  "key1": "2nsPtEJYZc3iwaQsbxwkYXrPBtPsarExCLQLwMJRCqpoXjaRQuAaaKfPz2S2PMZqUwhU2CRDWKRTSXbVrR5pf83Q",
  "key2": "39RbeJeZDKtjgTmjhPsvsGLiHLLFJSgN8N41VAz85MwCwUD1ftyTzZ3bS9Hk1XxgZGpj3edVoMSsAhCfMLAiNoPw",
  "key3": "2rmLHxHDsN1hWwHGJ1eayD9TCdqtE1dxBxgupWmvqK9b6om3w1km6PVUhSXmXgorc8PKPEyr1vyjb833HVtEUxiE",
  "key4": "3czDdCu3AjHjv6aRjVnSrgjRFgfyTEVTSVvgzABvU8yPRPCLrT96JBjtSk9VyM4i2ko23ZTKXnPKvDLGUcztdni7",
  "key5": "N54Mx6vY7B9qRc29DQwipCgteqrVATAvsBFT1T1XeNXhbvmp9augaJUcptGk9FcNHx9Bwng8BECNnR55Sao5g2E",
  "key6": "5woz2EiNQNCZWWDribeqt2TgtZppQYiFvKZajtF3A2HAP4kvRWScBNUKYz8ArRtmxcf2wtcQYKVEqmdLMTRNJcA3",
  "key7": "3C3UWMGYhf18HBnQtcr1CwBCPfSqRWLQ1TCwP2EFoYBYsi6XP2r1f3X9MkWTdBDqRx72ZBoFjjnNGnSUszLXAt4j",
  "key8": "536aVbiHt5diVQumBrQkGBPj4S5gjgXKEa2GE2kvTGxevHn4xrpJpr4DzSgdE6D1vx8BkaTu4RZ9yFUwMxDTm1is",
  "key9": "4ZXVAwb6zPY3RinrshfGCQkknnMDgBngHHVh8aAMueXARFykTiZq6xqyU6F9cDs4E8fr29SmxUZM8RFKTF5wTYXe",
  "key10": "3HVdQsqozZzoPXBWecjYN25AKAExGxS9H5XTNd1iyDpwTGmsMwcqTNhfSPmCNts9vEKdEsR3yx6fENwTkSAupMve",
  "key11": "CDneoimsEZ7rpRj3XqdcNP5uyHMDikxVnzzL5tUAyASaivZYaovh6baLstkaZkkc7E2UsdCyG2fW5mJWy8rfGC6",
  "key12": "21dmkpExcHzBjtsx86xn1DFbyphWVe17mFAZBpop1UnxUdMPf6KHAZsLkAJV7r44kVAFg67UsfvJkvm1Jar4m8o4",
  "key13": "2oxxSvXHvFNQWCNFYDjoZwCgXRWG2GtNyxFdBCjmJoRzhqHeck6wULDkEtfsUMga5aXoCaM85TAaSSxwUxd2gtKh",
  "key14": "5D3qH8XyNeHBChfwAvxR8Sj3pHopYZScM6XLTJ2j3CbbfoDvwCVr9VgMH1KXyqAWtfzhnXvgTAJV3Lr1JgPCGdUJ",
  "key15": "ShvNUFeu4pfrcuRQeASvNyH865zDW4gjDpgEFM5bLC2MVjH7NhDYksvZ4gU34rcCTpdtaPosnZofdPR8jqjKeLs",
  "key16": "39SK68SmXejSB5CQwhzFU2eca7eRQXzW8VzViZivc7Ty6WokVr7b1sB8ofNS6jQUuUnJ7v4CdiZEw3o647ebaHiL",
  "key17": "QJuMBkuWVtaTyWd2tUSmbZvhE4Dcw9ukygMJebdKGsFaCDKFY3ng3UdUNMmb8htZFq6WcEmjnwkuMixn6mYakCD",
  "key18": "5uACMXpyuE6exWRQPZvJbsE8YZTeMbrjnefYYGZPuDf2dKDX2jMQrEqfJNXnYUP2eCmqStQttPuBeQteru4y6mJZ",
  "key19": "4qw9gR196KQppfJ3pMhp8G9qu7fEnd1p6M2JVs16r9vHPummT32EF74oKvJMFrhNuLAAzEgPcBah92SrEipmCyyq",
  "key20": "5yzEUE3Wwbc249TpEKFUHVgM4juEAgbCjVGC7eHoCYhXf3Md2DTmXhhEzxqdgeqosLb6mCzj1qZyrH6Cpm6yJimK",
  "key21": "29JeJVxteSeP6Em7ZuQs3xvWnodL4vipP3c3pZoPf6fsxafKGeAmibQukYjzneuU6GzkG1hH3e2X1896cZvTnJVy",
  "key22": "4RjsDQAfKAumK8Mdo6z23kzR6iYENh4UVMuSZHejzLDvp1XeJpafVKsenVk4NzBv7GpHEbKQ4zUjvhTpxnc2nuw5",
  "key23": "5y97srU4XFyYXcS6sFeZJfDYvEjP6jUJMUF9TvQpWPxFFLGBD3uReqy8yT6uxg6axviYHhk5gmPNi8o6te77fWKo",
  "key24": "2s7n9Nk4uzGTr51bQrcW8gAYHU4rn1NUuPave9m2ZGCj9E59C8RKkmnqyE8HUi3WDiAr3Uek4aXeoduPEwXm8Wo4",
  "key25": "5Md8uE81V45wgZKf6i4M8hsZW6iWLJ2BYEJwZ7vzhPhN2zoWjDhxe9e2cpHzdu9AgudDqBXF7Y1sJeWuPaMmeLQH",
  "key26": "5ZNr3rnyhGAfbtGBTN7gKxpMiSn15ESGhXy3TF4NzaFSrWqtAanAnMG4LDfrGY3fYgnn8Pc1jq4DS7dhtX8d2Nph",
  "key27": "E8MRd2XgMMnHruR9vtZfQhCsbzuTYcqo3hkQYx5bQtYkcQ2mmcq8Uu5DNdgG9AJXfjBYy65sVgBKbUoMWv78f5T",
  "key28": "3vx9FvQXK2wpWwSC8RsvkxBWjUXtXW2yceWmr7G7FwWqRzPwYptEsewpzURqN7bbtGsPAEgghJsm86q1Vkr4txor",
  "key29": "4t2HwihL3zQC14T8AS48msDW488f3zJhhxLL21zEkXPJeGFkuWvMcSR6cs6Uih4GKE3A5JQpvKRwJ1g3bdyeYVmf",
  "key30": "398sBt5AoR2Y9b9NPon9icyy7ZwmXXTviEdZ2vrWW2SbUacgg4LrubTdQnZB3dMmoo8W65ZfRTdQ3UAB2NdjA1f8",
  "key31": "5Js9NoyW5iHvz6DsJqUvmWDM7HqnGAt2gnP7JLviFxeNi2P8rT9rpmR79UP6LRKPn2fMQZ8S8u2r75Wukbn53CWo",
  "key32": "4iifZ3cPTGW5frYJuGKkxyr1NNiQzFa5tHzjynShm96FcoGGMaCr4LNVv3H58U2CkpxEmvkbSQJE5T1FLa8v7D7G",
  "key33": "59qUiL6ec3np5Ui4vPfzkN1rm6LaGJps357aNk63ZvMhiCctGj4GHPhrgTBZyRaUkpY7hY2zBPnct8Ba1fPGyQdJ",
  "key34": "5db7sdXktERRwo5pTLW43L1o9tUs4kRLJPRjaLgaEZTo3QFkCoe51tq5Z34oN2FUFkkom19QAtq1AUpMpEMw2Msi",
  "key35": "3hEh5kgvuzqrpBBjEC95cAGD1AghYRmWi1nPnZcebPuVEHbDkzzbwxgeoEZKL8dEoEBmCPvqhrA9eT2X6Y8xWj63",
  "key36": "4txKyr7JukLQrZjNmAHKH1UZZDharGmzh6t4wUjMFKiZ3NSwEhc8yRCi6YeHfjoaMyeu8vw5tyYVQa4jYGuAzhtA",
  "key37": "553yFfaLaqdsBQYNhEB4yX8AxesvpQEiafxRa33huciK8aZYRThSAAkLwXhqsd46ie6bh5QXdp8Y6xZycpfu6bvc",
  "key38": "5wrxhhuYsSNUWCUceEuZrjZkQnmq5ctyffU3wLxUFoRcxvnDNnMmdXpZgdEZQWiHLLpPSV6kHZCz1ZeSQhMK3iZK",
  "key39": "5uedNjERXwHJp4wTrMuhSgWDgaboGErTW1m4UkvUWvuXxWSNqYR8EWZv2qMkE7KEXVFGwcdGE9m6FyUFPkxBQGLD"
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
