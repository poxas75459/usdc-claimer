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
    "5xrDZysQdoiw4AA35FkZiSrrPirZVAtjnm4yQgxzCyRTwekv52bRJzwtbkcaLapftKjGF1gZzSCUSio6sAbKYATW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DvJVKrfwqrcXFaZus5MwUHM17JYAfJXXpttWKBsJCeDBw4J6UmqDS3qC7MjCkU6MvwzrNr5Bm13TJ96GACPQwUp",
  "key1": "2GfjtHKdwEJCzQnMKnGbpzFAqfSrZAYxEQgFoZR6VNsiAag4rV2CsnTCSppQjfJdnRRmFCWe7g28pA7WnMiEoaai",
  "key2": "2KKbx5LLZAdHqQ4EGcVLANs4iQhXFCEJqn69cxeZhZSaBe6wqWk5vwC1sWiLKF44rYeYf1rLzSvAniaq6r9Rg34u",
  "key3": "2zXgTHpXiL6gUSaeRpst37SfC1cWbN72jvutNL8BnV5bzFaqvL7w4iiJyizbJ57uCavNhu7YgVDBdp2eMtznW7oe",
  "key4": "568sxiQ6WJxsYzLayEod6vP8azvB29yCYki6bkXnwCqRcKD724jbDAmK8Zr4U2n5S48nLrrYoUxHc94CKS9Qx3hK",
  "key5": "55J3G9xcHqBRzWK4m3ULix25rBB3ziegsjhM6zX97931GEFWr8CTYoF4s3vTfQqKWn8reHFgVnbkpiobDfxWucfM",
  "key6": "5tLCticrXA71MXjCxEox2n2NfruLaUHRTgYNajDmeazQYGQFe1fBDNQYhK7WqCTSxhYafaKLBGAtGMNxJZB5wULH",
  "key7": "hX63uKtjRMv77Agpi4q3nMTXocXjwRzMn9eJNBCbKgvntSV2baEjARWrBaPuMzcNKRgzpQkXBCh8z9UaF12JbJA",
  "key8": "igavdsCZKVE5rMsA7ejNbB99ENb7tnw5gbiZAoxdfdptwgGbdabHrzW3xzEDVrBXX2PoSWb5R7rhbtu3cSQWKX5",
  "key9": "8TFrwcxAehnznw7zfre8JS3vTGJCdbifaz3Vku5PmUbVbNReY7KEgJYqgK8wqWT7XzwCeLNfLKGxEBA8yURfgLZ",
  "key10": "3diuG89NwdeCjryz1gjzQedXywFDjrBTWQziG6GDjX5f5oc5MrQE3mscU7mK5ea1XNaDsvqUzjjKph8R2id3DLDg",
  "key11": "5MASswP2oac12qMX36RQWj9ZBZKHbvZkYH4bUPgmNyC63SATn6LPPG3r1QinnrDMAsJdZx9apkpneD8zq5NzvRdn",
  "key12": "9YVnX336muqpf7j2ifn5kp1NnzFbxdV9YLDrgM1LFsBbRNfw1ArW1v4QwMKfJfaQMVNEg3JGU7kx2XX1tSRD9Xo",
  "key13": "5MfMimwFRemEQCPJjizpu1HmrJNgCFcbpLEhRk8dt1cS9mBrr9Kdx6WPaMm241rXPPdVWe3qy3CBC746uLjJ3rXt",
  "key14": "619scvDQC29FmvdJENCchhWF6hh3PBWh1aJtdHc5PH69a8SqkaPe9pqLXEdg1tn2tmeFDsJ2f8f5rZyUZTY5AMZC",
  "key15": "37LzEZZX7m7hGmYa2ByeBmfJ6haPxc9GJkMxuKc6kyAk5X7PzQx6xsEstNkTi2CLK3Rbd5qouU5XaxL2y2pXBCYG",
  "key16": "4bXDPJcdUVBD7Pg51dJFjsMbAEaBtr8zzT6YXfaMEon489pqSX4xLoeocvRLwgXsFs69ADUe28GJ6kEX772Vyesz",
  "key17": "5kcA5ovSU8TFXgi2hjXXixoGi9Q8aAPWsy45DazfmyVAFgWJRPwcVeS9cYpySozYdvB78SExocuG2mKHGE1KjEUQ",
  "key18": "24h3HquC9RwMDisuqtpSxXVeMEq4xgxhkiksxBjVpEFpaBC9newJTuxKMCxtZ1t5srUSd6jj1RnREkwYzY4Uhvuh",
  "key19": "22DNq3ptoNDmgfKdokZPdAkmpp3EycWy7XcYFy4K9ukXcFd9c3AeP4YXanjzqYvtvSe8BEGHBpBtq5uqUGrDf15n",
  "key20": "cK89TVHXoV4rTxMwMwv8qBWZgnP2nTRu7zewWs7c2b3kPDic9jnbBA3AFvhQbeScaKWTQojBL1rgTmdzkg5uUEa",
  "key21": "27PPZjeUam9jmB2DhfpJW8dBg16arHzT1TmF9P8e9RbzE39nRpMWBA1SVL8xQy6vweypAvTmBLjuDDFYAWEBgd8p",
  "key22": "4BDdpXrnakMcRL2zZDXFwqJp3EzWhNjLQ1c64rR7XwqqHJZdgEkpVQcesApXzt2Y97PrQebGn7ty9NSe9sqaaWeV",
  "key23": "2djpet46y4ANCew2ixxheTq36RmYNtSqBRYefYcYPDkufgPKe968RLUiR75XGSLxBRVfrEE43K1P8JdRouZWBZEo",
  "key24": "2ScCjcmGiJGNaVXCjDLDjzd8BReJrct2LsnZTwt7xFS8mLmsJFtxPZpnstpiKSzdXjtd2R2Wn27Xx5pyEbWCuDDM",
  "key25": "6xu86BrDEbviFk2oX4VYWtYHJtusWLSKNk72eDfvSXYy2ihRaJH2BkzKv48NzaQFuKy2H5wudDDX7Ey5LqhJbaT",
  "key26": "2QrKXh5gZfPbpWCz3YSaPoMvH354mjRUutkwx5BMEWtQivnt6kU1M3bti2kx4s433gMFZTrKSirZMWAgmN3YyfXj",
  "key27": "5msDt8QNurRCLZ65ybN6CrwSspE5KTqPgg14DTVELGRLmTH6wv6Fj6NDTEiVrcRfUyuKzQQp1zyzSorkkkGoPtK6",
  "key28": "57DdjcTzxdeSnXbRfaxrL87zns3eheLqYn6YR5mN58176gsScyRcenxKnmpUcxc48Wv6TSnhJqGSuFnuhxBDhZg9",
  "key29": "3ymzMhanPTgjMDL8ob6Uk4KEdJYLUPMarKtQV3HGQvCaGbDNAtytV8fEZugU18QUrkwzJpzB98vY2t8fwvySSbw1",
  "key30": "38emYLBZaHFYXhRmJvgVKr3SJu4Rq7LHV9wht4HzesvpnBVCq5o5SVRgkykUvDMemKQardqVhZ3ZrEP5zW5RcVBc",
  "key31": "4hsKM6GvLsQTNSED8i15SDsiJVTERT4hrCq3RYstiDmdCytMpyLzDLs5AxjSP82FbuqWEnUgnZJtyo6NMddbryZJ",
  "key32": "5uoNd6ZwwmnazSbziJ7akiX9BWnrjYnfS8ERAgQf8STCuoAXxj5BuSTMseFzHGKrdRe9aGCe4kYH3CGDKmjF1AHA",
  "key33": "4rj5NSGQeveWLLq21vcnr8UPjc7wq8nCvtvsVRHW9bTjUEZuxQ125Muktydb6K55GWuqt34p2a5271u6DynVC8Yo",
  "key34": "37reHVsLiPu2ETxFTGsG9AiUGkYajEQvAGvUGrujt311Q2YeFsnHLr8Z2JX2rzLVQByGNN7eUquh2CL7nBybpo2g",
  "key35": "4USiMVEwDKiU2s8C7RCYvooaSkqQ8F1zN7LWGKQhYwbnKrPC1WkWiwLnpo22wKbJGj2Xb5ynU8rFnnnBbrLK6pMt",
  "key36": "4MRiu2iYAAx1QwqbfZL2mkCiqSc9RumpQkefKFSFvL8R9o8FBWCj2QPVrWSVZcuSC9mMEJFYE2jvzheNUwDc7T4f",
  "key37": "4iFEZZTmHPbL3F7nc5XCtiS1ZoUUY3T1DAHVmh2RqwL9XfGWYgTS77m9KUamKaWo5dvM1D1nQEHq8RbcAfCYorNA"
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
