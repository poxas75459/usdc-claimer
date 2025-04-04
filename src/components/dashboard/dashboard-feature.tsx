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
    "63gCCPYHcN6Z6ZqJE1JCUUC8GKGeCvGtXUst1Jn2u3ZmGLsp27SFEjycpwtb3AvLANEmgsXzw55pRhM17KJ9w2VW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fcbpZXh4S7ThMJzoLYtwAEAmBP9MPKXauTNEvLLpg1mKcufoYYp8VRy6AumXfzjAp8bMrrywPiqfinDURWMgde3",
  "key1": "2Yg2vYgtkaVsw5Awf2RY2V6gCSraG9FEVvNNKzeZ39cD9WBCtnwaZc6UymUUsLTmWGpNMiq5NwrMVgosUrnny1JU",
  "key2": "2NCXJ2Y88rBP1WgNJNRm2XkA1yy7sdcFsfqgSLZVueVfKUWzcDL5kFNmK393sXPFWaDFyqTs3oLycJXN3gsh2wRK",
  "key3": "3RG92KuyiPLTncgT8JUcPdP53dgJE9CFNBu1DcrZJFFGipnbhPwgVXtJ8beWjmbAG7nNSfePRTpwRrGhS6NZzC6v",
  "key4": "m22aynd4bxJvTNCuXSpwAyTJ1xG9ja5TjLitbu8RtqPvcNcMpZyjsiubcXsqmgpHJFvrcptDoN3kyZMYf4Qdtwf",
  "key5": "4g3m1rKb5msLzNtZXqHJt97SfXhhhforuHpvJntWcS6tZwWESdSmuBb1FaeK7qSCboL9b57tVeDcVizBXiXcSHur",
  "key6": "2w2fNdiYYzRJKjXYSrnd2yfhTQJDJvWqK6k5vqnK8f9J62uy439m2nPraoQWhZqGhLBipBGKKGm7teF8E6k1NVUL",
  "key7": "37xKhQZ5HWhVGuYwuEp8CkdEuN4CQS7UJJi2unTF2XR8msLkMTPE6c61iVW8DC7FEXoU8wfU75GdM9N2YUJVXR6X",
  "key8": "4QNW9Q5Vpir3qU5j5PjE6PfVrXdfHeaUNmQ4ivdM9DLfR34aW2xmvRdVxdRo7hDqYzhAT5cVcYGfdioUpAbdDpry",
  "key9": "62YkFXaKsAYeWiagMdoN5eQUMBoP3kyxPR6p8DJvsupUFQ1ReTyLnMKoH3NjW4kuBujeuZG7aNNYn5WqeShwonX1",
  "key10": "52XDcu6ThVedCxS99U6w4SuED7JaSQNs289av8cDjUnVLW4cANueksetuGZLpWBxi398D9oBK1CJ3QYc2EYHVUiL",
  "key11": "HfZRSbdqdYHxiut2MYgJs2L7bVZuEoevJJN3VmRuNAS599hQwW2HtQjARoUvyYjKB5TpppnmK8TbJ7SY519rzW4",
  "key12": "5BmKqkFa25MjRrbxdJcXdjtEasTvLRRrekqFijwbfkjH1BhArKQ2JyVDKboAHddtjfqB23fMCgNwtQnqQaubjZTx",
  "key13": "BSTycVpJKERaDV5rgLWySKKKDg6pWoLFhiKRKkRgduQgtqJ2JdTvwPXGsfzwX84ZHcJdtrCh3Je88SFLBhZimCd",
  "key14": "28hf9usxEmRsTpNBAsgJJttqHWRvGAjEWgtTY7YvjfV6XddD1KPHcNNS7qQFNV5SeXjFA3hWZQTxRRJMU4NQcSdi",
  "key15": "5oyKMo6H6fK89V86jH9bryaDYKPzpcwiop5ZDLg5hyKqw67y5ueXESBpiegcswv1Uz2bDT7CA8xcRNPfocGvJuDR",
  "key16": "5qtN85KF8Jzmav2CPfMM65SFwTcHVHaR1m1C2BLgYfke59Yzg1bDLAHq48Js8pjrF4DKijyy4rY81ocpbXMWuj1y",
  "key17": "4nYH424iEi84DA4uEb8KBCoDt1EJoyvtZFsSQfyrapVVg3zTiRveGH352DU1QwntSHvwF4YUmrm92VvUtPd7eKbj",
  "key18": "sdH9aGVK6dLJeYDyMeqNMJ9PixJdgw11KqyfoucKNDk7gztyPozu6pLefA3bgACwy5C5PN1WhaGi414kiZNJQbb",
  "key19": "5xsJSEgFi6v9xDwVQGBV5o7JeJApU6vHCS7d5nhjuuFHnuw29EwkoRARrzSsA1mdmTCxgYrMGN8BzgdWeacTaxL4",
  "key20": "4dvuSuqsvwegofwSCe1upSLADcmXdufqK92KRQuro2Sfzap4Cq9fXL3gud5GhqtzdWwgGx1xgZN3vM8NHPNzphjZ",
  "key21": "AjR1u7tMWTMAYa46YBH1HGgcQovdbmCqT6cQh4qabByKddJ8aKFtZZ9WQJeB8FD2qGbon5c8CVL8iyJwDQBua6Z",
  "key22": "4ruY9ijNKUy1QQcJDxWyKzvffWHihW9pWdVKw45M75jx3HgkxeAQ3aS74Rgx22CLZkrUGythuJxU8bnmgcQihf92",
  "key23": "3dG4LaaigWZUDzk8Atp3BUPRsayUyY4GQndN9hj3xoaEE5R2eNsit6KvEYoSsc9MRPkCoWT59M9Eikp7VSkzq9UE",
  "key24": "47vmV97Ts8M9UvkKVTPQdT6UUncghZCY7X7Mqe8zwQNj8Z51AJfn1NDKCkN9a53DYqPkroiuC2f1JAJmG4LciNyq",
  "key25": "3KCsL7ojDGv482ynk7XJwzBB2e4obRRgN8A7oHNnEecoqoHv7zt9gkJKhy7r6qUCBqaDA2BSZQX9k9Dz8NEcZT7p",
  "key26": "ozqRYCqEFURiHs8ui3UbPZ2o6obUdeyosaCEn86m2AAZbKyPCwdddzVFQHDq349tuUSE8VEuKiLV78SUDagT735",
  "key27": "4bgHJrsriBAUfYutfKzYkhubHroM3xa47MhqjbGFMDrQj1nBgcUxEZ5ZxjCxM1hwfr8176cUnPBHxVZp44q9hfus",
  "key28": "5MjFjNb5MhGJHtCk3b2kKa8EYRnMk7VD1kgk2MYqgppvU7yTAED8FpD1axQo1Ku577qdJaK2w5rYm7ML7UsFaJNN",
  "key29": "3ALTcDcZhnNEwBfHKdL55RCh2KesjRRAf89weMhgq3ALzHLdQ1mmtArtw3F7WbumharfhMqQTv2KixFdxWLtB5CA",
  "key30": "5z9oWgcD6KSzfvUELSbNELYsHiyKeZrVRDW6jK3xcvhVKgUB12ovX4neQdX7Hj6gUhRij44R8f6itoSwxWo9RSsQ"
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
