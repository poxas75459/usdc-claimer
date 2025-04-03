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
    "54ZHfP795zrDn4aYBt4dhgHexn5EBTBiYiNxPMdqcdEhefjEuLnDWexhd7HeTvM5wXMVYLykLXiMc21ZurxUFLPU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3owZbBLxtCTMwWiEpM88STT8jFAMYUdKXUAdp3uNndihuHfF82ticeftqCfNhhJE5iQx5KzVaVF8hZSpNuwMugZe",
  "key1": "41kW8sDKDDtt5hoaWzcNNgGq6PFEBgZNsH4sXivXt5Si1rzdCXX85j4iAPh4mUCm64D6ReXWiu1DTKPhibSDJA86",
  "key2": "5NSTHcahn8Kok84ra5g5iodAUQA49EYwm6v5EHnjEgBHYCWJeGStLvhkbBLgiVApfUE6xRxmBgYrFMbFuGiFyK8s",
  "key3": "3vZCqKyaUPUJb9ZvfEVq81itrTqMWvcUDWfWzebu6NoRK7RVsVmwueqvdCPtQndU4d8EMcD9D9sMqD6yzAMFERXU",
  "key4": "2reGfHWVkVqJcxSbyCTKKB4cEPqBXeLKbogPt4VHeCfZAEvxV9dgUd5T3v6D76XYgJbDzTKrftbDz9HAx5cMDQVq",
  "key5": "2BZDgqMEhcfeURaWCofk1mF6fjJHZ1s1miHTRB6fZUcjPyXHLUcNGsTx1cy9LA3kPGpj5LrSV7gvGeUp9rTZFdr2",
  "key6": "4ZB7ogYo4oJz1XVkUN8jBbp6E4P1SkZu3VEaHiNnDqCzjPh96CSePCxibCtAo6BnBkKd5qkX2wgrTgDU98hMs9rs",
  "key7": "2hwSYjXrFp8uqDgDNHSYvjETe2DiMtUQWMqRixiTYgG5gCkfyGPDvZBAnxyeyMqgE2xkBcNBCE73o4unqkzwAr8k",
  "key8": "24HbbyzdwBvVkBzNGvV6vBJkyoSHcsf7tSmahhUcVc7TqyV9eANGnqaPVHvEcn5jnewgi9psyJ4CSgH1dX5veQ1C",
  "key9": "2UjpoFoeexnFnAGb3sUDZVyLhyNxJMeA9TXdad6R1dPDfXywd5iqmasEDLC2Kgr9kxmukJKxEnVfZ3mXE75Zq6Wx",
  "key10": "2XSwvtLeY1SvMY4viXw1HCeUkHqUYvhrxHCSFhayn54N4sLWHQtwVHHRD2dybrSRYr1AXtsAiotfofUeDZ8npWFS",
  "key11": "543G12g7dN2LVUwGYrr1wwVW96cDxbQCPKQn87hHj6vQx9YdAkoA6TX2fMeLGvx9jPXnecb1aXwo4iqLqRkK7sEM",
  "key12": "4R8o9WFHb7Akmew3xN9zeBGLocCCUWBfDMciPxJ7aFiwoM51CrmL71FdyNoYQro2EnoPUGPQrGsQrfVQSnfweJja",
  "key13": "tTYY5VBoyyznbfeVHFT7AwueJwAUGxeRVGde9Y7GiDGk23we5ZwWnu8PbhqEfFgkfrBmJpmrWF9Ge3jKR5Bc7PW",
  "key14": "5Sx4HWZiB4q3TopD1qPN9HmCE8LB1idfRiX9dyTjdBopEpHFQ8t87S3jAyjEEHe2zCua8oTn7SbfvkGCp3BRXkaw",
  "key15": "5TNdshZQkn84W1rRkLHmPUhgxhBFxQzDC4BD3Ei6wgB5aYy6mYnaEUfGUfEacCvKppM9zgucC9WBJuGd394Yi2Qc",
  "key16": "3hmUR1tgfEL1yHsSwfqLrWy1Ezzq4r3RWQb8EzDT4BksCrxbvdc4wvhiLv4VRPUnNaE4nUGnu36Ffg53WS1xBJGP",
  "key17": "2xmPayrrV82bJXtdZd82koFADyE1fDjU9BWeNqPfyQMoFXzuDNK6zVDtsCJVymqzn1gRhcvDJrhmSz2iq26xRMha",
  "key18": "JDp4f6X8gMZHcX1wQqYZzWys1JFu84DSBM9LWPhH85oH2DKQRTAwEE2TEw1sH3f9W87Pgvq9pAsJENJjjezd3KY",
  "key19": "5PJtzMmNC8wpHnxUmF2B12HntGYczMynUGGeThaW6zuX47MG7h1VwVTGZUUyHjZZddzqttRcq8hJPd65Gxpjni1V",
  "key20": "4HSuAAZ8RxEXAzVncn4M1DaxxdDB8rUzR62sHVnpzKdARUoNHvYDn1NMEWPpyUwTSjGiTd2HQqNipWo9YoofsuJh",
  "key21": "4AqEVQk2eKSfs1PAi9MWetkSh9pK6JDLvr5p3PfKXYsAR2MmgeNYNEkLSRoV8Gyba26HV7cNeZDv7AhZy9pkqYwu",
  "key22": "4KkUxAw13j7WX5Hq3MHjepMtLtyzvyjmr5WRxEsexTSymNHWWsJHTLkPfd9mHevnDxZ5ty1pr119oZ6vb7G7YYyp",
  "key23": "45kv6DRuAZGCiKgByTHkQLQnxE4rALWG6YjZhscV5zk3jyggLfKNBg55XX6LW1FGDQeebCNfNCi29en24vdocxcm",
  "key24": "4XSmpoRrW55wtfxqTkaeLmhpE8uNnt31zmxAfKf47NNMnHKdb8WHUVWu1dakpAhhQe5VEqjmN4zxHk53dSVxgJ7a",
  "key25": "4TExizd9xy9pzXm1oE4qoKmg3Y36gHvnhHrRhNMYMKVHyrFziPWgwJ8FgNKaR9Xw6qE7zmPscfTycLvrwPn4QtcP",
  "key26": "5qdirgFy94pkcgRn8yDXq9Hg77ahiYGuvFyxCfoFA4B7H6xDeFKg1zMPAsX9f9LndoCrofuiNVw28fysdB7u8UbU",
  "key27": "2X6iVMJSmoQt6BF25ci4ZN3vpSgzBwTbH6NN9wDHrjs45KVLZmoYk3FpPcXCsLW6ZR8uxEJBpmKjTJmKvb5Hc5hq",
  "key28": "4D1WnR1QtVfhfc741aM6EQKZuBbbp1vZjq1ywaXuosGZijC4tY196kEMMKJhaThSq2oTtr14Ci3RJZ9J23AYUwgN",
  "key29": "zP6PgFoEFC7X1LYqVKMzXiggjbRXejXBNqWFjBegHVfhpmwauqm79HaMDoPJBs7prkDbMDCoTLVvkKGDdR8D1N9",
  "key30": "McshdKSMz7CnsLFmqFbkPCBgB7MhA4yvs1uozitcE3prtJMJaFj1bCPNDuyeQZsPrgh7fMc9zfXfyWMa6oSa5c9",
  "key31": "3uj3qNiB3YsHzsoFchgeKBcwqTTpLBZSVSjbeshrSJ7jWAuh1KwYgYmLi9GD8aKamUHwdFuMp6fiMjNJNpKrjBWY",
  "key32": "2BtBh65cb84uZ3rsKuBAZkkVL63NEfEuVrVgCCQXWvmQC9Z5Jq1xwN1dEdEomjaJjekf4fAJ2fznQ5vsTSA99RT3",
  "key33": "3NZ3SAuJfMeYKaukMijXG1W8qhpCJgZsLmvJWS7sSKVL5RqPAdarA2aL1V7FDNE9omasFEP6GoqmqiSG6ymJMz9M"
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
