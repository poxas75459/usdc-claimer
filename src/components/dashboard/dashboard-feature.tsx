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
    "2vcJvNkwgXYLuEG1ET2Yi5JzMfEp2BY8jE7D6kCEDMwiwa4bMX7GyBcb7FR1WLveAzybQwYLbvjJHxrAPRJBLgnv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ky7n4hgT5UUZTUk1o8BKK448T2A4StnSwFVD8ULsyv7ZydVyRifToFYpMERLhem9eZgg7ZhB1V6DwqapHwyTufV",
  "key1": "5CMpGC1SxLvoRnYBUfQjwrU7YkWqE741WN62BM1sVDh7M39eZiatePV67PCmgzaTf3roAPsfsK8h8m4NED1xikVj",
  "key2": "GrHxQupmFpFhWd5x5KSfHWkpSkCPh9AaN9EJEb7NKZhJdoGmjSonjCN5363pLemcvW38C2KUotjWXxrYqbyaqSf",
  "key3": "2AMCzV9f8NUGx59pvCttGuHjS8pThsLSJypMoaoWnFYBNLSMYLgWbx6xmKmvQpd3etwHQhJymSS3kR3NSg8q2mra",
  "key4": "4fXtXpqEUiVqug5nLiPDCL2cA4YFkc7QTZJKpqoTAh5BhBaEq3z8zAmR8RFXw6hZKVNAoWwsC2DCoT1EbrnK3atu",
  "key5": "5dwQhnVkbzpqUXRKyQ9LkD2aBizorH6wEKzVkoN1gBXWCviD72gbpy8XdEKd4shB7VyMq3d3e4mEA3T2w2h9wzju",
  "key6": "5rzFLsKmGnJufxgZ9CzHdSmWGx5ySQcTR7EVpx8dzGho1yu2gPGLvEnZGVaKXNfggfBYkUnrDCWjcdK633nGrsZp",
  "key7": "3fnLDxewoxVUUBg5a4i7P3tt6jPv2D2q5F1AUuo6WGvkTinBfkC5vRmNgmFpUVQikoeRaYhPQEQRiAVKg7nw4GGp",
  "key8": "3EBRirNctsw3fD9ywuWKjshoXhv8iKX5FshbZXyYvANGKDHBT2EvyZv8JzQ5efr4e4PDtYV5pAMPhWGQUh4Cfr1J",
  "key9": "4qPpk7Dgrx8ZjthQna76mE4Y9Vac9D3EUcJb1UHYNBN2icJLTMUYCrKQme6YfNGP2v5BQQUnFVzYLSQF7TAN4N4z",
  "key10": "AUKemncuTHvbCzSbVScmfuXHS9NVnYoZUs1X7eXoijZytUXRUPC5TS6sri96Bb8vTfewVKULAmk27fhrTaHvea1",
  "key11": "4reePGd3pBykGvYFtJnCwKsS9prwxZziFTY7cdJWoqidqasYQniUXrnjj85sv4ar2cXJpWu1vcDnhpUKFNcS74oh",
  "key12": "3bfrbkhiGAJxRdPLC8i54622LMmZGgpK76MQN2Ru2rwPHqsTyA5Jab5orCMK7ynfb2xBKwws8YGMguFgjaswZ4CJ",
  "key13": "3DTWGAucvytnRJ8Ny2o8whoNh3eKGSa7RYGMAkpYyavnbxkbwdeCe3pmKgwFgdX7XpuZShY9eLZ7WwgxSCP5otdU",
  "key14": "GfeHG2HgFcS1ZW1MjC32CfBY1SaqVmYiUEvxYybceRDexXoAQksk3F5ULB6ZJSvXJZKNgJuosagNzAtcTysx6Mh",
  "key15": "YCijMmiDPsKhuUXbUnehPUHXWKpA4Y6iD9TSE9sE5DYyLb5PWxZFcL9DhFPiyJqsJVAPkvmmwnjz2GvZevmYDhP",
  "key16": "2SB9LSebdW4ZnKrpgZpHME11WvW8o7uRAyw691KbiE9kH751V8PQaAPFTGHfY8pDmvnyMMYcCs7qKQuaqGAVqopP",
  "key17": "4wv8PU2Aomp2uqN3iJ6yu5wU9nbEztCsoByyJG7wD4nWhLoGe8XWNggwypAU5N3gWPgY833NMeQRPqJTrjXbHu46",
  "key18": "2zTA74DrMnKshGJcV3bUw7GEdiDRrgw5vxcg6gaagNSzMdq126csF9VEhTZXvXyAMwnAybYs537asXGG12buvHZj",
  "key19": "3DWbsGgdkYfGvjaG5Jd9C76hCnfVRzqGNfmSjumLgxSi7MeLXobXX1xRsLVrJfFDE861fF8j1jNf943zE23hdyVJ",
  "key20": "2kRzQK8azDCVMDD1PfngLzXUJ16uudxgDuBVWRHm1geVxwXVDDuJsHv5HzuceSaEP516WTRQt5J2uG4ydAP448eB",
  "key21": "2WRAvwoK6nYpRLDyiDaumuAQPLLpMkqrJMmLanDb2KBdrfEnQPHUoJpzzQNApXBA4btm9VWZ4KsbMw1RzkZ4FbEa",
  "key22": "2aJ8S1PExJZi29HRRdCtPVMZvpxWW1XSbjTfMyVaQHc4ZtFTwHdbJw8HPHwVxtBMJZ15rpmXQu77PzEhyHUzMaKh",
  "key23": "4Qv9bhdLMoFPjQfaq3EDCWfv3WCv5jr4PCNdG5oRNrxxNmbmjidCu1qzyK3KiuXLj5QLvNfq6adWhJKAB6MMi6EM",
  "key24": "2hVstNo5SvWzDus5N7sA774qJvLZKoVAjUvWo31PMDwbkHaDcu1HunGwfn3JEJEnP144C4Mwq7DvMcj5jLWgGgdr",
  "key25": "3ZwGkjqWUcGXyEWFtj4Jx9Rv1KzzsBUireijUn7Ko6wQf2pL8rSBYxNf6s5X4GiZkdUVutwgb62XpoVZYL1u6VJh",
  "key26": "2meJ5bPon2HDyXnWAGEnYxakP6VebiKmgPhfd7giReBm8RYVQeSqcYz3DsZHkeFiVc22ToAokmmGp6n48EVF7JAv",
  "key27": "5Spd9efFAkugWix2biwycyBVwzEWtHXxwgubRTnk3NzKWVZfRvW4HcmtpEfWifiX1AhMxnZm6ZE3nZCW16HMPySv",
  "key28": "2Lw3FV2zagwkM2PtsFoaqA7syC54QxJAiJMTpeb1DEViN7npgerBQmhgsgLzp62tJwcRxTWbmdMJuLhEsnw1qKbB",
  "key29": "4Sm9RzvA8FBfgB9qe3LcXjahjdAMAw5qt926HJoeQbwTDPUUEft7YeSUPRcK4HCbDutzx3ACVDd16xUCkSsVDuDu",
  "key30": "4SBuoEbZabwN3XzESQRBSVB6G4NWMnsdcW4nijPzUVqyvVqCHZo5VfwzC2215zJRA88vDSAg6ZZEHuB6BVC8LmNh",
  "key31": "3UgxB13bcEJ4zXRC9ADpRHZtB4SPgkWbBArzeGRYV4TrTn2KpsvvYwcdhJK5LvHbkomQYDhw7SqraU6JxDuSKnTB",
  "key32": "5sefrpbR9sdGVuaU5bZmMeFA2f4GqAdSyhiax3Cet3bKtfoU1dksZrpciobJrbBUmnGtjTHU3AExaTWPC4FA2xe",
  "key33": "529AEyUStiENJJhcG65PHtpcTbL2mTdXMXxqJ75GAybsDvTrRESXgBYXhVqQbUH4kYyhmFzqt3nbeY4kHMTstMaw",
  "key34": "2AP6zfEfwbNm3kxS8xo5wKg66NTTqn6Kq84ij2mqSXRtVsneQeyGr6U4ADMPPy8gAEMfsn7gs8ePgTFvm1kpmsg6",
  "key35": "3C2hnUSWpyd8BZaWYfW5uJXYEYAk1LwicLRLYgoZPTCg6DeWgxxPFrS1v48o2CMhUBuv1xM7T2DmH5SzyCqVdhp3",
  "key36": "2BiQDM4n2AhwjgbmE1MmSGzn75BmNP7ajqjVG8ZyVNobG8qreNijfhXaugJCeDUiRbCPVfYt72LUA7rkahZZnCHh",
  "key37": "4MHGDjHVEmaBSFrukDZqwJVuctfCD24idkBsm1EwchLJGxUQwrNEF29uNqHvDXqLEPz6b3QmeZwWGWd3ycdhE3CY",
  "key38": "bEfRk39hkH3W5vBoSjgXAuL27gsS9xkFY1k2cRP5CdExE5G7YGRG9i1qh1Vz3Ks8TE8N5GzaHaiew1mRoT92pA8",
  "key39": "4dg1P1kXexZtrLu4jjFAfAp5By2MnegWiJz9QmJ8z4PhRkYkQBVXfVFywGsx9Tv8SPcwSMFhUHBciTYoSTCRbc2v",
  "key40": "3vEU1vjTkCJ2KaZTuk3KtQkNv86eEJJZai8jtrpQtjNKv8VqaR75VLyXBnL7EJLVVPkRkb4h4PgZcPaQQybG9wqv",
  "key41": "2559cKXp1nzQbnWKeVHFgkwKtRaWcTy6LDWxFF5iff48QiGJ5bBFoaJarhFQynHnTWRxGRUjTJkejM9hBMf55JpU",
  "key42": "e2k3NV79EHY21U9dWorUE1FzHjCb3UqqTvj9FEUSSaosgtFcCZHprNi1jorqKYMRVPjbdSDVrYxrKmqm5Ah7Meh",
  "key43": "U1z3NsJbc6UPPVqCM3MNEXb84zicgH9X5xjFvG9n9w5bAgFJ8GwKGemxcuLVmTgm9vsZU1nqxnzBhnVrYnu5NXg",
  "key44": "zcVTV5BpJgzZTopMYzRpEYJQDUnkSbebHXtVjCiHWpkvvRD6phHVdvoTZLfT6bJVr3goruu4x6e3eQUnNKRZYTD",
  "key45": "2rH9tdNNnPc9RyrMse93MXe7oPXSVbW79YPrSfJYNrkRCMnZF9dEBbqzK41Z4WfnGyRjA9R6f8kZDDEWkJcPH2iZ",
  "key46": "zgWRbB3o79SeYE8oFvHwUtRj2BMapm3gaU5DCcS6PajssUUZj19uqDaCvvWUYofMni3hWVWeNBErvATwqkdZbFt"
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
