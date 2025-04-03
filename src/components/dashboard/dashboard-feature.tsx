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
    "2SvB98NcVjrwTj5TnZy3m8vrjxL8GstedBmzcETZNRbuEJro79KZAi9HM5cn8X4rPqtYd75v1Vcsrs1XoB5g2iWR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JHTZzNLRQDqRNUD3CThmFs6U7R5WnDqXwM1WDq2KVrziJa8zxGk9tDZdoYB2fQPLLWK7HQUBiPtfWcaxECEksYs",
  "key1": "61BAqX4uvG8LVbuy8kdbDra1gSNnFY17QoS57MYmvot9qqRG9j4ZhMGHU76hjyJYnXs6AMg3azmRthRkQrydwBop",
  "key2": "2VKDvuHooiMLAt2KwokCcEX5Pf3itLL4wNGKxFwkskXQDvMNUEhuuefkwQZ6FWZuc9bN4Y5icayqfmppEwd71BFW",
  "key3": "2sHYCMn2TamTgyJiMrb2R4gosqyXxLYovvDuHXMHBiwzV8AbvUc11hS34fCjd62msVkHuRbBegtPkQDdp8imDSZZ",
  "key4": "ym4ZRuHc9hygw2rBq6kBHkJqmjmr5htWbj4gF3bZjbmDTmgfy9789dTaCQHXFj1SuMQwNwyiaA5mQahPdEdDfkc",
  "key5": "4HhRjd6RKEBxC8ZK2cckJdJ6QpTdNSpgVDDWEh1i3eeU8JoHp6jqAhJvhFzcyZtnEVCqxD4idr89iDkUKcvoEbue",
  "key6": "4DWTrDgkX9kLZCYMRWSvHDp4m7DYJmVKX19c5W3BbGPdHPrAPeLFEk6ZhFLoyyjmPNDeP1Q93Uu37ByMeS2er99n",
  "key7": "q2b1kxEd1MboDrahu1xaa5uBvjSaJjsroF6y8LqFHh41NRAPxVfH9J5L48RcUYc7E3RrrsDAqY5Nq5E7qqh2RY2",
  "key8": "4Aa5n6Btv2xHWnXK1YoKnVJ2FrkVBD3yjiHbNVGGTY95ohyvHFmSdtSKW7RWbga8vrdSrVcC4HdDa9iKFEWtUHyz",
  "key9": "5vXxGMRLo7NUHMbx8tSqe4kpi2Jpyn1hHkHPNfjawdLq8ijUFdThBd36KqhM56jMsz6tqHhci977U7bLYLsaGDjQ",
  "key10": "3ZAofirv6FvPWB9z1bPuV7gtHX4hpXbc5kzWoqZCms97iQ7dWVUhXeqeMVigCgLdk7hkoWUpXffR3nDM29b1hLwt",
  "key11": "WT6brGwKRVce8icx1doyfNBLyzr3vGZiArecUsRMNBHS38iQALKeVbCJthjFoYpZNTAv1vzMjhBAmecnfGDXwda",
  "key12": "3reNAbvYfe3qHz3upBNWSMSXo2HEH39UBzLCENaZSKsfFE5DrFyx6GGGJb1YsDMLiT5DG3PVLvZZeLy4X3jT5Ub3",
  "key13": "2MTGXP7Bd8h6KsWov7E5MoXFjH6gxzuyTc7ZupajoDXhhB4V938yXBpr3QcG72HnutPR2PbcJiAcHQQvrCS1zgEN",
  "key14": "3haBUTgyFCjABdVfMS2VfPdCKmNRmD3akyMWi3NRG7oc8d43eo5b1Dy6qs7Z6d7CsydZ8sWCP6SAshVwEmjrULas",
  "key15": "62GTn7BaMxDPfRRQRADePGEQyPyi7s7wAahGj4KMuEKUqV6LSmenEDWJwXinCBBvNxTscZ19PFVT9xtN62LR7vf3",
  "key16": "5XneNAjXMoGUfLam6DaxGxxu5F96tWU7D52ZsZ38KtwE4WWzCTdQEqKH3Vv3iHhpLTjbHDLXpwoG1LEaxMB6vEPV",
  "key17": "2F2kL441qt985rgjPfqsM3Tcf5hZerCmw6cKz6AASdEqJUFX3DfRiR5r1e8p7cYZnyTeRPLTuRPeoJbTT6FnNn4Y",
  "key18": "YBdFQuo8hD8oc5dNhDqxAnF4pWUj8KG9yeczGtPYLiu8hKyf8iuhU38E1hsQbDS7xgSfwRCrmUkUb4LA6tGoVXC",
  "key19": "3sDdBs7wT3TJyb6Aog4271FZuXKG2qsfFwCfmyHfrLw85pcCExev5rCfMonBjBhBDyhiUrBEq41dwDobgaPDWwhp",
  "key20": "4GHmY8YXWgZ5QhQQ1hV5S5s5wkAcfALDBctkFRYe3ykeZ7JhvhJUkjAdZqtZ7T8XRvR9iccNj4cN5bUP7z8RqZmu",
  "key21": "2T1wejT3Aoz9CAzFfYPzvaLvBggvdHUwxz6bG7TH29SdBUqqFJ4XWhkWKKfBRLwfHNtM7MMsh8cBdCgLNFXFPyXU",
  "key22": "4s6VuFhNJp5dYa7yGRXKVyP6jaBRE7kvM2JGcLH8wmY6BrrUjEJKZwbTP4nBo3rJJhbq4CgBBLaSX9z7nmkUkRb9",
  "key23": "4vBf7cnty8iAMNztMHUGkDKKj9TXHx3tBZdmoWdfem68UvGACrbMh9WNn2bT8Q8can1ZPGrjhkwmB3rnf84mpfMo",
  "key24": "4Zwfo3sMPE9GmnFX1eUA6FePEqZnEXFKBZSuBtEHXu5P4LVNzkF1mnF7wFuRZSu5PqpkYA4q16adCqgwR8wpnSi2",
  "key25": "5Z5gaT6yZHFx9HmKLD64xMrKK4mgnTHpVhL9LbGwvoKXEpT2VnJqVrw9HGctbQcNK4EVZqxn8Rq9vsmGWAuv9HK8"
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
