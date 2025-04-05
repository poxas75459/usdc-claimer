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
    "3WsZ2JYpSe2siUuhybBGoySQx81QajU1DUqjiEmj4Pz14pBWAFNCc7QJPjf6s8HrsbQF3jK8wMDPe9xz2o5LTbF7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QXXrwWZzuAZrpvcQK98QG8nbB2BhDuGsk7FsjTN9BmAQ6phpWuuheXnGQ8zsC9KBGkL4MgS2fG2BAQijJw5F85v",
  "key1": "5aJ6Mb1WoPiZSPJ2XZqdiKLaN6iFjHrnGq7khMidvQM22SGtSjVAkBMV22fdWG2SLurCDJpeX7UkeyTRwYAqebDo",
  "key2": "2fYJe7Ee1WUWvZK8CcHu636kiwe47EPjLjWHaa2YQK9qBo1BwvuaSS9ZyKYtwscS2MvWVWYgyg3hmvLL7bQBcAEm",
  "key3": "nBNamZBiWtoCqjL6SCDxMD4hhHjtfiFF8UoxKLfHv5mY7mRXxTXLjaNKHa6ZuYXqY4esWsoS6x6dZ2pSXvpfkUH",
  "key4": "2Dd1TzeZr384K9KpgkDoKY5mbHMEfVi7oPG9LbcNYN5CEGsRyvmQUU73ULc6vjBPpzxR4Y8rU8jfeD4QXiQQovA4",
  "key5": "57E9cJrT6DkBijifCeSwyQpKwLCmuxBc7bAubukXoXMaV5BNWqchdtHtgKR8MrCX9Fwz1XEqf4jjHuLhURGF1iLb",
  "key6": "4RAA8EUw3JMEZ3qnMZ5tMbtgfRZHXnqEqYWUUDQ7cKjm8UuBkggydE8NDZFziKYa8oWPzHnzZWF4aEUVWXk2De4M",
  "key7": "4dnXsPHjAt1tJ2kRizVimSmjZtPLSXhsQ27woWe7GK8KHSfkBcYSVPtB5nkn6kw388aMxFYnhBvKpXy4QxobNuz7",
  "key8": "2jPgP51rEPaSWLmerrn24Q4Rq9XnSWS4nie4bh7iBmL9ptswnsjkQNpzX1Zm1V3vCeRDtX3xJpxcdGN25x8S4xS8",
  "key9": "4Vrp9gheB9G8t2mrDV1SskonKWT5ZJZJyMt5rbMYgszwQXRjPVcTwjmiXkhEktReXVbXqPYf3jb7fNDutPqkZxyY",
  "key10": "hBMMe74xkFeiSuXN6dVVDapHoTFCL42553jqckqFHHu6KteWf3ks4RjE9oRrDiPCeBXFtnGq97BJy98dQ26gbmx",
  "key11": "FqrA1Sf85xbFxRx7zaKS4ZA9mE88fdtK3m9KaLzNnvt87hrpWBjbbNVT7wKKL8Q4jgfpP4t8GLH9G6zn7cpKbXn",
  "key12": "De3bt4BZCWNyhEvzUKRKtsTuSnNkAxpNfqHDKSbKZvGYaJRiqowXiC5BVnaEYPG2xGATTwWx2aECnLZLbh8D3BF",
  "key13": "3YNkwh5AMr282MG4NwM5S1Sy8jFwEQ7SwK1jkKTWaDdk4ywJcgcKPeYuPqLizCkHUtZnoV2JPWJWFZvruEb33QLC",
  "key14": "odNU3M8kz2GHbgsd44sjLLVL6CrUYC9DCeBJTzCAbGYLmgdhi6NrnrEcuikN8tcyEAPPcQvaen9wcyuBAnobNKL",
  "key15": "26dZ9MDu7wQ3vV9GFVWEdpRAQrjaTAqR3uVTcfxYEhFg2US5pNPyK9DPrakAeC45vMDMMHkrqCxWZnnEzND5P2jG",
  "key16": "LsDrT9f6nxdi8fTuagKBzfgeR4LWuEhF5FPvBvVtVfoefpQPkgnaTW8AawfgVc1EHF6k7syQJb36zKfXtmQ9Jyq",
  "key17": "axgN7MV7Mh6a7eB6dSxtwEWEMUTEhCF7KRTru98nx2GgdAHzZ3ZEaS3iX672dP7fSfi2S1unELT9PQNpqrcdYg9",
  "key18": "23mW69PLFE3p4pQNVBrJaEJEyYJFeL84n1MznH4agc7RjQ1P5KcXjdjHQ2fo4oKSDqwLF6MRpAbRMtSAASJg7ows",
  "key19": "241Wj2P65nH65VCwoPfVAjuVhjxeUNM4qFhNtBmpJrLfaow99C2fLbowwHgfxtgm6ADAjzDEmpv7HDtAwTkWVvUr",
  "key20": "4vxvfWaVZuwksBSeRKYXYMD7jrvYP5zV3QBD5yXM6LskMQfq58SQKkYfWqmRuTsegG2e57F4dw1SxDHPuJCRSa4i",
  "key21": "3b4GKCPDcmAvaP1jK9xztr1i5zGC4XCUnx9rmEZbMNVuJ546ryBKGxQrdWmZrkihNJiZB45BAr5NGoRqjyi7a7DB",
  "key22": "Nq1K9gy28ehPJ8WqRjwJUj8s4aMB9FTEwh2fsMoNcHTK3WPSurj3MK7tdxwgAJwvJMHp7mQ2FVqASuwaDEhjK55",
  "key23": "59AJ7fuS3tgyEfSzmBj3mbXsfgrZ3ty4d3HXBySk1WGVWG9wCFDMwb5AzWQnGk8wEcr2eCDBu4sDne5vGE3D9CwH",
  "key24": "63CcbxAAYUbh2fBErbCFWBx8n2YWn7vnQyKwNRS4rPAbQihvBfFnenw4bWJnJm7YmVbN93BMrUk5FZw2GEtJVJiR",
  "key25": "3f7WdCiaGASQPv4U4sny9Xn3iPedHRmnUVuVZXmSKh1NKhcbibURtbDYhqtvHbh9jv9rMYHGy3qy84CdjmMfdmVi",
  "key26": "3QCTM631oiJXw93nMEE4XaGmV9Sn49a5eCAUJR3LL5ppwKTvVDiFeaJ6Jm4mHyJGscAmoFCpMHnb79bwb4FerAr6",
  "key27": "5DweiY1gvZV8qgFNF3LYwEUmWWwV9P4rS4eV6vtPhjZdoiVGff2gZefjxCJfY4y1exG8eti8aKgRQ3kWK6ozqVW8",
  "key28": "T8CBnMpSQPwkSeNZ6ecCVyofNixzt2BKSrTJ74mvET1YvbRfnkiVw5tEH8TUNQMA13auRVCkV9rLacSLHKyzkP1",
  "key29": "5cMs5Vg3tW1KGh7Q8huAiMWvbTvpn2DcpWRrQkn6B2pD3qHWuC7CrLzS6Chf2sUMJ1mfeYpKXF7CVUEVZg3ZavpL",
  "key30": "2MUHcNYphuvgFLiw8EjHAySXJQKaRBTjM4hYsNErFGMP1UuWghR5bpqiXGjCDtoLbWxmBQB6iSC4vrveU56Ja4Kt",
  "key31": "AS55PG55U1FWz6KcfLXpTiU5pmnReeVHtWwwPQdMLHBqU1G4U4AnAxCSfHFV8vU9pEQAzPQUQCUsz2nL8o5SKN6",
  "key32": "2A1BP1QJCyy1EAtY2YY7AaaEPtmzCL58qNrSWmfstCFCKWuhDoXgPyd7x939E2bWUEMi2BbYFEmZPn5B8Se2hBDU",
  "key33": "41qrFpjwJBEhKNRsbaLTmpMLH6WoKh4JDK47wKk5xjUiMBtfN9QvjGYa7nhZaCz3nJfjBFx1si5t83H7PwmqCBHN",
  "key34": "2LS3FNXjKcaG6ZsAf9m1Aj4C1gLqCfo3JWF8ZVQ7SrH6VJqxCFnBV6fCPBWE4B8jNHUNFeWiZrUZynzEzzQ4yrDj",
  "key35": "4jtCXqUA1geLkigX1DUK9EHMxYWr2Pp9xrY9r9Tt8XELYJj1DVLqbqfSV97B1FWdxa33Z8EAk6KJ99k7CvqUaQAK",
  "key36": "dSCFsDGUz7cYXttmcx4aCXoz4JLxtDYomLWorAo2qJAsb6DQchrszxt5F5853dtPMfysKwq4i6jQoRj8oinKuiz",
  "key37": "4EemFsxuEsSceDtDHyAcZnvjZPgkxwvciBEzA9Yf8tzDuJJBogAqnzGcmK318SHthyP7LDx1ybtXZoNugyKYynbF"
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
