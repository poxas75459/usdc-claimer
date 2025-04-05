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
    "4VHNVAVcMmnk9p6opqn2B166ijV4hkKABgZynUVnCt2W3GcNnJBprZcixZziUagnuPr3YG9XuS4Y2tTgJ6wq6vzw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cUvqJP4ed2sJGtkVjxu24PcQrF1Yiw4fu2rBQsXQ6pAUv3rn97RfuvDy3Qz42vMziyYpzLY1px6csKku1iCheJM",
  "key1": "4QieU9DKmzSxnnSM471TDhhEYeF5cLob6u7Mhi4TJa4bP8f4HFMDBbpiRVwW9qfXtuczo3ZW1np7jBMAi6Tp4dZZ",
  "key2": "52jcxQyQnWif6RyhbgaHcvX5gXhXWcKN1ofSz65TauVPd7ZLXvV73wrqZpL1FNn87nMfPMiNZc12UqwjbtZsJrBA",
  "key3": "PQzkXe3kpLzoWaGnBiunkPBLCktqTz2mNvfEQtg7rNMgUUCsRMU98RGDbYEDeG2z7jjXbpjK8FhR4puXkGnQbe5",
  "key4": "4cpQe2AoRT2f9LTM4vbtn5BYEMPRH61rvqTMS4waZDkgz43E3Vhk1eZbYhWbxXAyFN4ZhRnrujELR9cdECBfqY7k",
  "key5": "4ovZzPKwdbym32LFDYfK58YPZpVS4LRnKHQBS693wDsvUjfarbRu983GxEzSBy33zdFNVLJrKLLxwHidmecGU4yT",
  "key6": "3r4psT1pdTyWfPNHCP5E8s6EyRqw4bN2CtGkRBKb4RcL8DSQHBHetAtsjv1Pr8AG3CvCnbwSftYPnwhJtCUkMLny",
  "key7": "4rCgpFfabNxrwREJTrQHzHHnMVvw3qfuEmSGhjGhSx1k8CKe1RXfopemxkJX3epWtdeWcd8bgGDvKkpZwgSC8szQ",
  "key8": "3ndwY9W2UZkxuERQpS9dv66zJMwsib972HKmGLq5wWqw9zxVKqpN5ndrrjdUU5BCLxiPQFQFbYxZqErxYU5RVHCg",
  "key9": "MHXXwgQsar5iksHQg7EhTKDsgYaWk2h2K7tJfHqULV3f1k17CbVK9J54k3LZt472kokzBa8RXQGutjY3jVgtZro",
  "key10": "3h7YqmPsqjdmR2bxKcNSczBK34Qb9qppgSB8XbnVx4DAfpf9EkNsa4ZCW6sbyX7vXXWWfQ9kokUimHKXrjDvxP8V",
  "key11": "4qWCseCC9GN86xXNpcBL1zSPeXy21NCbJpW4reDRhwHfWLfH7ijV8vdKB6qb5xLeGzCP2tQhpKvMVPQL8ujpzhXU",
  "key12": "5PKQ8cfGbiRV389dsF4vEwhChHonBMM9mjophkfDJXrqU6chH35YrW7hFZaFCACtVU26pB1NrcRYMDzqLdzajNqU",
  "key13": "TFLBfdRBJ5DDHuerb1mSfZGKw8fqXi5cNzUKUbAKzBkstqaZ446u1NFfKUJmXLy8Y2WqwxemCVkx9oUyHmsULps",
  "key14": "29ppJoDb42nfnK6CHadqwqG5NYJXviUbjNzGTZeirPw6N2aiSsgpkXDuqxLn7cZUQD5QY4d5bafrS8jcpzf9pfvJ",
  "key15": "2yjKaJUjmjBY4LqfxtBBKymr19ZzqRR9sMXMpobsH2cXz3hgXBZ2bVBcfPYhXzG4TU5JsqB1ay88xf1D3pRoe3Tf",
  "key16": "4GKN8JjiPZPBALGdU6HLvyH7uHcs8ErAVTP4wErPm7rWdvrftnvnPP1oiE92oYGSwSxN6C8yPF6u2xq13hcEUU34",
  "key17": "2cqiNymAsa86Qt5i3sQGtSm77soGgjh3apbZ7Ro5RpwaK9JwKRPbX5kz1tDcey9E71mqt3mNmtjmiC6Ez4JHxjoj",
  "key18": "62VRaNK9n2QwstDKJqU12N3ycUk1CuEdckt47bTjgmW1uV7cnExNHJBZaPuLrmdvTUFJe7qU8S5BBDi3JPmgzCnv",
  "key19": "2g3VK7odFevp4UCS9dompMwobb1wgSfKudyX5UK9L8xyq3Lz3biKTu26CoetnB7rFQWyuzFmFDnoXzS9oS424EJK",
  "key20": "4ciMwdfi3KetqgEHVJqz7L3NR9cVud2XppG8MqwCbhdCUyYjijuHduJvDxMjEAawEmK2S98suxCdpbtiqwScBWfu",
  "key21": "3t9g9NWcDZBKFRuzg1jgr8fM3vVxRE2LGb198o6GZZRNcqwVbBW73xjYzMPTLhgMukuRrYov2nU4X1KQhiqFwK2Z",
  "key22": "ePJ3zN6eJrEobsdcmKUyLcLucu3QwTm61gDi5oJcHR4yKBN4HbNCfAZFdnx7VhDpHFHfvVKmFSnku1SUubnP3Nn",
  "key23": "3W5RMwVg7XGh2ddn9vBjaRxDibeb2ce7jcf6jvvASoeQQiMJLbXy48M41VC5LEk6AKsFsXDxQdLMbRhKnBFvxC7P",
  "key24": "61SF2hN3sw5JYc2KrzUXpwDLRzgsXwszJZPC2KrFX6MQDbDnxVttVADr69VwFvEMB9497Jt9HkRYgCnd9RnDVxq4",
  "key25": "5cmSrUrRbTKYeMfwrH66LTQXW9RbHHKwTQCK3tBCzeZwCX1Pt7KwqveDaP1STbfbdA8B3AHbqbZhtLCZtah6NA3i",
  "key26": "o7vQXekXrVWq3De7q4VUPNQdMaxVjTPor2ynZc572c6t3JGnGguo8xkqjt8Lt7d9jj5MkSZYjzrBVrx6q4VoTFg",
  "key27": "1Rku6gnvCQQ2gjc5prHczmFX51KgGuMshdSGgedZHR9ZYhaNc7zpQaKUX3wHfwtTdKYXkiaJSQZCziQCc9yu5rq",
  "key28": "2Q289nsnsEjenTASjkJ5GRtQNUfAMwovqjTD4f6ogZqFPzWtatVqySgKHyXviPbUuJEnTqSHMBRdbfHZpJTjJcue",
  "key29": "4crv3MYEcHEAPuKpucXmYtaH8y76VRW6vK7AGLv6AHPfeXgbCa5ue2sRPVa4VTq9saEuYGTh6TSt6hMVW6GqaUEZ",
  "key30": "274aPEMuwuHGnhMnZMWrWFRZo32LgTjEjhA6Y6dj4gxB6WD5CwLgQMFbzmdUehhjaQCBzSjzTfrPrG3WBMoQMfgW",
  "key31": "4icWCaFG2YymmHJ23gtC1U1Nzw9Wt3kqpH5BmuZwZifKPnLqH96MN2v7F8kuWwrCTtRzjgiwSohvr2RZ9rWZ9uqs",
  "key32": "5uhw6FS9ce14uFKZL8Myppapnc46hrXVUUtVQNHVQEDauHVtaEdX7Qn1ni4yWtCgjD4jCrbvsP8zkQghSjNTgwGT"
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
