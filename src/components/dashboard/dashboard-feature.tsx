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
    "M2ovE2ktCuHnCq1vX4KLXgQMJSH3oHra4KUwzSj2e6t6YkrP15jzUi2oPACYNqrqxQtnWNTA9dRxXUrrimLpXMP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bmrzEp7CJ3xhTX7dJjXUeKGudjCBqEMNjtWJDLdUQ53W69TdfqtbNj4k69amWfo8KLbWE3QMQNbeVva3PAogdCg",
  "key1": "4D36gjq5yEKLn3P2PRYbsQ1u7fzmdKGWWXKia9eFfg7xA18DfnJborKmzrHPyw94tQZUxcqxhiss1Byw1ZXaXMky",
  "key2": "4VPx6d1ZtBffBT5yrBL3BrePuLaW4HbFhoaEDUJbLdmzoTeDEaLbi6UZbfeA4pDQyu6egYPdMBBc6utwDBRmX2qN",
  "key3": "4RiCSgYCxvKy6ouPW9vvSM4NgdoJjyao9apsni2mhcPGGQnqNXkgdPpLqsc8VyGBz4p6FNK5Gmi2peneABPN9WNd",
  "key4": "2RDjyHxsLCxfcW2woJVdXnEP69EcskPg7bSRcEiHqcLfH3fGEnzDvLBm5FLpWbigqao5cwkbDnREGT3hXFo7X73c",
  "key5": "66AponGdupx67orwFVKcSj6YTUqCHvRsR8w8rMiMdvkwZyTMiwYHAr21M8933RoiM6dLfMStBvuRyuQA5eNV9BEo",
  "key6": "NFKjwbkUafBP1jTfZXr85RUwS4WzbHypwva4Yg5ga1FAtKNWrRKMqaLUHJKA62LKmdnjggLr47SB5JuN46SQnjh",
  "key7": "61geDjuAoPDpVaiFsVCgdyW5BRZwh7MTMeVQLq5q3svk2dDBphkKGgsvn5y3inuJnwMXN8NBs1gmpgDG3AHhbroW",
  "key8": "6BCJYXw8S6Md35s6hmAt3SjGbsJY82RdfoZcrTyyHNaWtxztSBqq15idAqx6vhTWgJF3mnut7rV5JdvetnzBw71",
  "key9": "5SP4wf7qnFtTHF4iptu75RbDgXUp2rCCq13y5KhmBriYxCRFcJjqCuDDDLHUf8QYLZCVn6weqNh5vD8HNaUHeW5w",
  "key10": "2ezNGKmWwy5JHz1ZZwfDUaSHnCij8YpmJhWWWvtxCmgaJYAbeMHdDrdsEVxrgBuk1kNX8GzZmKtHGAA2fjq4mSGH",
  "key11": "4o5TF72bCPpLxijnJxhq4UEHHbYQvWdVUmFcWaV1aeeZXSMJUiECkkE955KYHanDAizdaft3MuPT6JGRuPfDahEv",
  "key12": "2aL5JW72qZvATtAXB9QHW9qEEFk558Ei37x137m4kNebpbK53oVtGroGtRjjvUtLkGwhcpHqKWPWLWa9WdFuSsjT",
  "key13": "YLgKCiJTdHHgVce989iwmiGToDYC1v3AfEnajoSL5ThCdkZGK8mtTN8keFai3gJXUsYXNCDpkmFogVVuDdj8VQV",
  "key14": "4j6MJgbGtMCgoASRq3pTgwWL9JkjhVYZVkmPJArWtzhaT1uyE57STMna6FgoMj8MadhSxSYVpaRX3ByZMfNGS7eF",
  "key15": "4gHRwFfifcyqAMf7v1DC2owx2w46daKUHki3dTRb74Y35CygQ3CGvwgqsxFc6Kz3YcCj48ioqRRoTZ4qsbjVaC6i",
  "key16": "6z3BwFxMWe8MZnen1fgsHRPEEYYerhpk4MhdFQ6EeNwLu4UpvhXBwvV6LgTArBF73n3qyaexn3g2wLfgbxLiWmw",
  "key17": "2aHPjHmPFux7rDmdV6WhT8bFbV76dDQbByt3ocyCRcH7tayYyvSy9xrjJ6Ro1sqdByycQevQKR6iw1iykPBzvzcJ",
  "key18": "4fthYZcNs3A7qv5pD5T8GPDYC8jncUzbeWwnwcvzMfNrDybAVpDEZ3bATyc3fEDtU7zJH129MSFVaaeLVS9yLLrT",
  "key19": "9pkQLFwBtm5552axioRKbfHRnvBujbd6VN2HrFrQ7EatoeUDHRvwDPrrJoWN42kvrR3R7Wq2MZDbCfa4NrNRhma",
  "key20": "3sKzvgarsgJtSM7RMysjN8fDibPquUiKEdGEUU7dAZLPRrW32xn2CEcDHNQV34o7WBaFAthzWmEYEArhNaHHc1VU",
  "key21": "2XX9KwipnGs8kFvCGcZ4YDRFw9ZEGhHHFdzZ9MNRM9wJgWoRkpovyyp2Gm5qhEyei7cKL8XokMxXRhoSGJbsqmFR",
  "key22": "89zJAtxbpQ1qBVS9tSf2skohx3E5XJJgqS2xrukBbGcsgFvk5isCf83ip9nBzTTcaxWe1mSy1qmdEG7iffebGcx",
  "key23": "tX4ZKVrzBkn4nE67eZp7GgCvGmDVyrWtNp9RJF8Z4ZNygYif1yykot1q6grvgGJMaTLdFbW6ndpyW9roAYBq49L",
  "key24": "iXxLmYryGCGBNSswT9QqKEWMdyZqPw28dotNhKC5yjRrKAYExPfT6Dki6ijC59mcsHnwQKJHzXFBX9UVau2x59t",
  "key25": "2P4nTRu3ymiFGAoATPJjMyetbX6f5X3zKrDtwiwRKFKkHgDHNLEemxk8mbkKq2SgSAzjv8k3Y8K1jA3YyAtyi5Kg",
  "key26": "8fVBZXZcnH5r7JHWSKVm3KG7u9XymRf8zR44ECUjAKQZax2hZ1r4yomqMJBujG92DdDDYA1UeMnxZKpT7EfFhLS",
  "key27": "p3N19ir2Px5dH5ktaS6C8T51VhQszTj5bfatjnQrmJocX3GdfLSGTxfS5CsxsShZsxVVJZtnbrLk5cxv5tRrqDt",
  "key28": "3eKALWvLXyyeZq3WQsYTUFVwyKF5zuTM3gCUWH1ab1aqQAjk8XjtVHZVmPNfwA43hb6jPX55GUgmA86WohaRGaWG",
  "key29": "4q9H8ZrkvSKaM61VCqPpzQeGjLYxYNnfeXtFrj5VNyjMrTPAvSGWp2Axwd79BVojPGRprbs3k74iaDkHVLPALXHM",
  "key30": "xmAbZpkspDGf5EsdjGNbmuEqEy69Aoj9VneGzui9mKMkBnvzAy5gUFrhtQLWcsukzYe36ojdaTL3LdZzh8uTDZ4",
  "key31": "32fM9CeG6AsUtpoV3w6kjG5NTRS75bUFAY6uoFdQqxG9k8rKBo1myUvYGb6EC1BQ2pS7apxeXh2mNvP5XKRpSevW",
  "key32": "5pbJiELcQfUz2YwRCSKRijQhdYiFStunvcB6L9efXDGXXeKBFJ8b5rh4miRRkbyyVfU4TQ6EFVvq1qbZCPRUrDTU",
  "key33": "2iQioD4GVScEJMsMmZf2RnzH6pcQhVX9ajTMRbZUtAGGoGg8Bfe44CTWFiZAMqNbwCvfZrhAVo9tv2VGGKCshEA1",
  "key34": "5aKKvcQcbRHmd38U2LdgWiH6FrrTyULAtgyMCBBVmjXQ6Dj1DXVXKwojpJeYUMksgyJcKo3EusAhwFK31ogqGJwj",
  "key35": "4BSYLFC52cyypkh5SmgFkCQJzKJawP52icYhnv4UaB1XbZBdxGYpWVw7bY59C1Wn9H59GYQ8utoKqUz2FvWQdksv"
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
