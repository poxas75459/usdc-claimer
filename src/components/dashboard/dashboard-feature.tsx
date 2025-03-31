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
    "ZsRrWoEf4Fx1UCvnwwAzEd2W5WiEiVCfS5x313bAc3b1ouAjHYjb6mXqAt799Kf4VEWSAvC9rh6SRYWf7qU7235"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XCmo7fuEtCnd1VVcaGiKHSsvyfaW6VnK7RE6zaUsaD7kwi7RPBXdi1RcA63NEbPvpfi2B2Cfro4n4SQ4xXnRbgx",
  "key1": "DHqBT45zY6q43VBhGmddVxiseKwuToYPMfBtvsDEyZwidtWpG4sr8ynVAg4KUv3khunokrtym41SdX6VHjqiUn4",
  "key2": "4Kb5jeBZVYiLFd9JirFC4U2KpAjACT2KcDFb1VkuMnMPUe1Zof5c1jaCo7biGjmAef7oSgh62fN6jqXNLEctzxf5",
  "key3": "5jYTnyNr3wXALW1YTHeph85FM65jsUcGcrodm6tBFCw3MiroxuyCUrqP4BGmQ1P3mTEYQk1WrSKmEP9obECP5o86",
  "key4": "21pkK8Sor2niA1Ykee5SQjLVSgQ1n4oATW4vJz9Tr5TkXUcAX6cj3i56JCHshzAhjAH5bE7ZfqbMgSEqgNA7Mepz",
  "key5": "n7HbvF8rRWc1thzKdjCSktQdVpy86rjFoHETCL8QzNdcwKAJod34EGKofEJm1TUjX3BxEWbKY5JSjiXUG9LZesu",
  "key6": "4HA5NS7oYEhEnymD49JyCcxAeZSbHEeSED3WqcxfUZXhG4f21FBGb9yckwGeZRGrtnNF8hVpaTFWUU62PapPWrmh",
  "key7": "4biBcsDngc8PYkKPp9ZS28gFJ7ecRHC5FwkaWXCXFKzdL7Pe6DPP7zTEnwFs7Dv1kk92h89Rzmku44Fi9M2smE6w",
  "key8": "2sUB7YEnKLHYLfBDPmjoQX53oAyTd5VFLJVEAxc9EBjnYhgD5ThmQ9PEvQcNtk3VdTPCHi687uB8s6edbgtVFtYq",
  "key9": "5HM1nMkM96ddRaghzuXyLfnkQXqsyF2YBEH1JN4CYBANHYYHkDxwhkSYFi2EHWPYK75kLAPtwCyPJN7L7vBmTVVT",
  "key10": "3R4vfZ7qRbHF3Ki7YW3nBEhWpUuRzvwt8qwgBd5hf27rU5V1nruM5u7HCGjEotKFUVx99JVn2bquoJZyC6J52mPg",
  "key11": "2UW7MWvpnLqJXfx49ZoPfFP7LojhcDMH7vJpdwGF7b9wdJ57dEUDe3KvVQVyHE5CYz72vhkin7DmKGsayfN9XLbp",
  "key12": "4We2G5VqrMMTRsUY9gvQoUtnxkRhnyoJhGASkAtkmrn8fY7BtigSjoqGgpbEVwGz377htR4ADV4BRhTcoEr945dt",
  "key13": "3ySPKuVx59XKQDscwGDa6fJzFRUMVCVJ79cuDhSqNuNjAwSQYWHgaNoP3Lsc3ChJwEeCcWDSUU3xQMoM63gGavq",
  "key14": "5Vir9bNNj5hFup5gTLXQDuv1pFdg3F6VT7Y5mei3aGfAF14PqXSaWEdWBZEaWhMB12prYWe9RLe1hW7FSi7tnp2n",
  "key15": "2HknAdXH14YPVq62Nmpdf9hMXg5GBc2yReMRHvawCmjZkRcT4by86ndAjYRe8S19c4op5aMCgsjJznagcQVGAti8",
  "key16": "4VEDp1N2fJfdepJMQXZLGJKxe8vmR6u3wJYUB9UYHTLK3tPdZENN3b5ANgCcPyZYXmpsWYEFizSXpRboUfX8U9Ph",
  "key17": "JihUBfbYWjUKRwEmnRVBqrtPjHHxMUyGyMdtrufgp8BZDN9cAhnU5K7VGGCFbpPU8a7r3GWEzmUNKd9eAdzYvYi",
  "key18": "253Yb7j5HjaJBCDn26aGEAQUX9D6xk5mrKLNXdRACks5qr9T1UbpqA8VGxZFciXSuXrLNjNHriixLZTsQjBs2hz5",
  "key19": "2z2ML8JDxntgfBswuZwvyw1oaG2ri5rV9xzqrxuHbKS7VBiWDVVdVtTn6u6jQzzZfqxv2rnbKjiXQ9GuFLGHQb3D",
  "key20": "4QAau7cmiMC8TyQzA1AssiqW1HVsgtxpGaBBLBXHFoqbKKM9KHaj2cquyimBZy3k4Myix4mhyWisyDtWNRS9H9JC",
  "key21": "5GkUGu1e1bWdhnZ82V5jvDM193Rfz7EQrYgTLy1gACbatbWore8QdRvdTGZQt53nUtnJcJrPDTHgr5GnKkhACQKk",
  "key22": "5N5fW5RvDvEW5AzUSTXMXbqrAyJvhGAjdYXBqupwmTmRaxU1oxDbu5kTkwHosxKzdzGX9kYDnamcpzvXJXehu5uC",
  "key23": "61shy2JRcQSd7vKK77g7xJLf2DqAEiM1BFrqQezfi96tEmfzQdxnE4ShmzLbhqPfwBcNf3htyYJ43g2fKgUcbGFL",
  "key24": "5z4QmiFa2srT5qR1LXZYUQTjaZmtrd6TUhXpYhaGwsrBXsFou3TCMoFRz3ctQu43atzY4U1vgZcN4J68pHP11EEe",
  "key25": "3AMvLLiFyxqUjwX347UUXDsZdjsj1fR5DPk4yY6Uvez1bCLd42ahczvYPzD3daPqfPJnxJEkDhV5C4kv8cjkJ5Tq",
  "key26": "3hk9SouG224KULRDjhCCkkuZ2NBy7ZKN5mtNcMgXnu29CZc1AUNwcuvzy8aAiF2FDN6r9mRTywEV9MQ4vPnwoJ3A",
  "key27": "pn9hibKYvaDeAj6pK1uREpmaszMbMCq2Z9TcVnKrNUmNQZP2LnUwMxiTyurxsYpRDA7YG6jV8tH6JVsGKS23CLC",
  "key28": "66feY82UWEmWXVRnxqFdyv9NatbE9ptYzBihos98c5QAhWebTXBpahBB2EmgYpNn3DMF6iJ1TpgfRChmX1hKycVF",
  "key29": "5dEwjAHX8Rtudiw8S6e3NcLDmVzK2H9iB9VbZVnW7MQ2ifFrtRCAY6saAtMSZENqjVKvSyuDom5XpbFG2B1ZBAHk",
  "key30": "58h8Z2UQNekFKMXBAbjUto9c9jsF36BfFaZLZVMdPH9qNAv7qszLCgaQyAk7jx7mcV3XyvgjP348PepbtewCQmqN"
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
