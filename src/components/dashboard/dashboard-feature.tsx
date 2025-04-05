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
    "27wtvuQwqfSgmQSx1sdTsMLcWqmARLumTHhKdo5qhwtuhxUdSesBH2rvuQBSpr3vN2y3sbYs8hSpGZt62yCnzbpA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BgCJxVQEiSGT44ga6MLMEyGpYu3Ak1Xphp5EL3C8KtVXcNndEtTHy2xehGaeKtFQ8SJuVtxVUfmMbyuqrUJcB76",
  "key1": "PehQ5qudWZs8YrWUqrLDebeC54PcDE8LqVNVTDHKFfczPo9EnmmwSMG5eMbQeVn6AomV1QghZpzkJTHnD8uUcBo",
  "key2": "5XQoTNoedMrJGg3cQCC1vqBoQFCXPJvUB4Wod3evjL1gKdrVaFLepcXvJjkZwPwoRcy92bf4Qxqa8UyiVMRrncsN",
  "key3": "4tc7Sau7cRRzeLRj1J4drqwfMKwTiGNLex4gknYANsBUwDAVWtE2dMUYPf4pT33MrN8AiLTAwQACcw3h8yqyJTqQ",
  "key4": "2ebCqZgdnrmbo19A8fKBBPT2Ng8T7TZgwTCbrgTvXD1KXfvW47RFKsbkoD6NBN6MShWRpwHyR2FXTsKLzkftuWQY",
  "key5": "3YmLtXnrpuXhTCE8sexCJKburM6sJHPAhUNiKjBfWoxNuLXVS2XRCPdBvXTB8v5FazTB8mFR3rQ4kNySyyjfNtLt",
  "key6": "VR325Q1RVbygoS8nDk5aC6uwhY1khwBqpjcj9tyP7Mpt3NjXCkYy6y9gzH4uoiYymDbYJ2V12S7TLkihZgAxEXD",
  "key7": "5gdCddhgGarbtQHqS1pdJdZJ9yE5A1DQi976qW2VfAQQNNhznjDVtVunkxNpuYvs4btC2m95aZGT4xuFwZ1N6Kp8",
  "key8": "34NTYmsJLh76jUJhkTeQFjKsmwp8haCy7RQVD89nsrveXktnpxPjPJHjmoX6fdF7V5bKU8ncEAYkkaWN32DnDBW4",
  "key9": "5aBGySUtBqbVqXBqu9hZXUX2QrZjz1n3dvjSQf8D2TDrcb4VEa2dWX7ZxuHFmqXXrMFx1ekSCskSHaDfgbb5khXz",
  "key10": "3ipz53adauAE3es9U7JyHbx7xfhsmD78XwHcpKsofXPUrcVLoaqgzqixKvvnn4HW7nEs8kdtQx29cYEikdu2Np3P",
  "key11": "32mAznS633ozKNegUiPELrcmHebpVFqU48pch3r332mbeqLQ1eVRPwqhKiCZAmDULLqNiXd5ZMZK8BAeMeWfgB46",
  "key12": "B5FzYnrjxfiApKFwtisyArp9tV8a8VqyrduxEf5Q8JkYCw7kdZkJEmZRoCXXYfA9BmQ8QSHjsNBZvqU7R2WVKU5",
  "key13": "5rWU3Cr83xQQ4vaArDGK5GhKi7C6N55daH57DrWoeNa6Q5KgtifTmMqnfd9uhVStvtNHLemk7a6xm45Q789rdMBL",
  "key14": "5ajy9nujn6PKcRVZoQM14cs3jxFSUgxjVd4Y4eR9S4NDxX1p2nnPZyqDcaEQykpxgkqRrivqDcd9wmrrEEKgw99M",
  "key15": "345tytwTxGJPQrB7GdGJNUr56KUPCgDb5hkAER1zDYZWbnAL6FfVPH6xyqQRcinFceknFY9TDWtcSiqxtgqhALpw",
  "key16": "KfqG3Cvs4WFBJ2ArtT9BaHFAbUycqJ6qmCzVEqiwiyAnz7U6w4MSeUpBaUN3CeX6ZCiKVRLNiwfsisEQ6TW515q",
  "key17": "NFn6vynDakfAycdPefA9bCRbhMr7SQ1o5mgQrsjToZCPocW5uPCrrz4s3gCb77dsMfEp1Ygjon4AXxE7QLoQM38",
  "key18": "2HybUiUkqFvi9bvjGJRqNS6WuKMM9FvbjvyZtHyEPgr4ZDaSbYVgsURZfVdbAr3Nr2j1xGmBxRU2Lj1Px8kBpmmU",
  "key19": "5vSm5yEnFjbCAXmfsAi1nqfnnSnjqtu7pCxaewXaGUatPPdWuQxyzSpqhj3KWDg8hgmd2FahP3beZkmuCEgCQdji",
  "key20": "3qLH3Y3hjZqWZrWyQLAuD1zvY75GhK9WbNDTMRqwU1WHPuG2cDoTNxzwKSPwFhNtntQQzMtAEdmJej2dCVALkYnf",
  "key21": "3BjWXnmdJWQsoJmKz6QxJvxpHZ9J8nVoERDpDvUGhawKmivgzcdUmZUP1JerRykE9F4Ap69veEKKJtnDYJhs5xDd",
  "key22": "4TpMpUiZ91PMZN6yebNzcgSkeEyjvW1yCCjoX261uufBkJbyMgRzu7h7WSmUdThZjChfwdgX2u9uMh7fKt9NsuFb",
  "key23": "2HtwCVxRnQNFex7Mcb7FXsSSWLbj39AH1StmkdXLbASkpq5YdF64XU93L9VbojbvuYWxM1bCa9osLmij5TtcwNVj",
  "key24": "3kGvHaTLDFFzrqNhSmVtG5BKojPkAQQou24KJztf25bRG5ZW92qxQH3YTLNW4KxkGXZGYXifUAd6CBiMwkfDUaNV",
  "key25": "4zhhYVf6hGp9FJWs369jaXveJbwJnkjRaTe5ehibXYQZw4ERRgtEQu4zKBYscLtYGbUyUErx9fHfugcMqVdY5uQQ",
  "key26": "3UXsvhb5TGbxogPwqTEekskQ6WMcgm8KdhcQtSLg47gezAVrXXBmRGP3rSn2FSWs6TsuYobkKF33zgfZ28ejAkMA"
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
