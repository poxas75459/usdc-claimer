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
    "3jWa8C7wWn8KHcHECaUdLEkfj4YkWYKwwRCQfaxJzuSRFnaMU8YboobRybmtUjNheBUWyi7m9YMSCDhBii6W64eT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MwrfYiR13guNsZGEbeGfHzJiDoTG6DxQ6FpA2L6Ae1XXh5xNwMWwUoPQ4yDzBoHQ75kC15r6fwczPMZzMMmDnez",
  "key1": "6euMzhgPijxPGeRRX7oB1FEAH8bnAW3V1FzwmQNQXF9jnpxekJ5QnR9LLqASfVWyTg7b8G5PiyzDP4KfvrNzDg2",
  "key2": "4futbLUJkZUx1ije669NRJb9ndE8EuNoDPZZaQCoKsmreD8v1DXMncXSNUpiL7Fz18NuKuDHBsmkBQACJ2AF9kQd",
  "key3": "4oPSkpZhqR59VjsPgWKrfuWF5bQowVwS5whAwXZkJEwo5kUDc4YWnRBiQ8eTGny3LuN1fVt2ozhQbkhS4HWZpERg",
  "key4": "6aq6CmXyP59xX5VaSrqypEZsmnzLQ1tShBA9aDwWZuruuK89Y3rvtBNp3vVC9eBXZJfHnqFFaD8BgTdev9ee3Ac",
  "key5": "67JZcDBuTaSkY4VhVMBN4NxXzWvQJ9Rjj2SnvPhhN8CnV7v9xzWHJjMSqpMmh59w4ZMXHZw7JSHjAr5WCNR2aEbh",
  "key6": "3uYEcxyRG9ZYm8sE4rV2VZz6Fq1MgePn7K84JSVcoLVsKVUxRWqcN2DYepcN1Zv6AhyR4fqFPYSf7kgpZWm7yuvS",
  "key7": "3YoSrTEePUTsaj1a4h1DCAFexW4Lj6mz6QD1caucSuuvB1aPmcSx3o5kLWHUMhDVfAxAC3388ozC4WkRQe1i91Dm",
  "key8": "4AZzRP7x2UsUnZkeeACqBJdZgUS4afW9y3p15FzKwUQL3dggtHJM5aKn3Hdh2ihdHMCxkVsnCz6XYwwLUoUegj18",
  "key9": "3dcj1pGFCErNkMDYTxNW6vdwH6CRX5xBRjy5syJTgBCvB9DYEhrc3aTQSDt4jnxPBSsrakpvrd8D8fca2Q4NHfor",
  "key10": "4BnF3UoNstSaj6XTQStbL3fCK7xrAJJbdAsWc1tJuyd2odkDenJTvwpZh8RtLydcRiMQ7GJsPbhLmRbNaqXkowPK",
  "key11": "2bm2KLYJ3VvgEnWAvEbEn3otNkP1mUkQpGabSTvPzPT8crfK8RGJNypLDDKFTKM6ExLZNb8wWxMTX43GcmUvd6PT",
  "key12": "2VQjMBPKhEAd3zKn1djNWR7EaqEXt13U455DbRNw2Wc74858Eqv58Z6CaLKPB6LahGmFHhsiRt37QzHt1Ubku9SB",
  "key13": "2XszoykLnkYodDJfj3DArpq1bCTsGkhoPUUt1NsSwMDfueaTmAuVNuAsocfXuLSuYuWLFwmTTKBfuXi81QbRcVSV",
  "key14": "9S3aV2P3VQuLT8CxfrvvZ6dEszcWdYnrHs9A9sJX6euvqTQRRwQMdG88PQwFg6hNYv7m1tYjktu4JsC87kjCvVS",
  "key15": "4u5f4czXZKAGxog2oz9kzrNPAuN84VKP9A1r8zYcKbJUBoqKzug87znBejzBHjGwrNmgGiYdWrnH6HGDjAgjrg2y",
  "key16": "PtueuTv4Y1uhX8Mbuv9vH3MHZZZgExxXMradtwRFUscKmRsj7pHJ8girXxUJeA3vPevjrPhkuWXJ8vqspXgQDhz",
  "key17": "nKBn9q5dYH5nn1y8KULiACusLPVEWoEAskQnkbdMzgokh8GD4UgYAhyz4BfyokJekKdQftCwFpyaioBtBG9WXev",
  "key18": "38ujyYf7CA61QGhwTC8brUxhZdPWfPDQwjDxPCCWsriBcTx2EVxzpc5vUabAwbGFGU585Q6GcJuK58WykE7rHQnC",
  "key19": "P2DmLHubjRwa5kjXhPfKHYMVdqvtfZ9GGWxcxCDLFZGhhWjsutpMXBkx6NwhubqrJt4NoZeW1L4Y2ZwQgoyU2fZ",
  "key20": "3C9r6rcdTDpXNWzgo12bwrF6NXHiMbr2oqg1p7NyoW2r3Gy3ndLHXFe6d2r3Nx5LZ1Y3MRSjFRuyv5sssDwAWCMq",
  "key21": "4wkn8MH8HBwdrXmZ1GnwfHVuCzFyKCoRS6hH4A11iyYm4R9QJtKKikSDRvAb6jbErmdoXxrpUXwXe48yK6NDwTDx",
  "key22": "3FjeSo2fRntLDzxa5mWqrgwicvRtef4vcdUJue92wGRWuMMNUGCCe3epPR5VJ7yAx5ueoZK7KYLofXMXwUGTy299",
  "key23": "5QweJonFZkxXpeoyuJP81LJm6NWWd4WfMChNdDgsYDyK4mf4HJ77FKWcXsd3F6H3kpjSyeaj3XQNF4vHbjr4eAvj",
  "key24": "5rtkcd5AxrPqwzBhZYFPdezpMT6JYNtqvaAnf12Wsh26abt7WoW7LuL8wiXdR4ujqxTgYdKputzoz7tcjzBby8KA",
  "key25": "26a8JExgFSgkFfSVHG3hHjz3k8NvW47eF5ssirdoRMWVSRDFpMV7rbUUTYoxnnTX2iCqnrUtKyHzCKf3AwiRqRUM",
  "key26": "4EG4y1LEhjhHtzH1YTmn6Bey5fmVs4StmhFWebCFNCQtcyWd7DrvBWn4iEAT4LG93rnvFSmHzFNUSX6RH8nS2Gz9",
  "key27": "3QDzwQzEHqQt4NP8JdLRJGfeiuJvM64bcUhdfhPRACxdJFYjWwzaF6ed2AhEyo5wGpXaubFwarP8LZG8PYB5WXzu",
  "key28": "2QxemtYs2erZhu2QbTtWex67hCFeNRtgwnREnJ3x7MAHYXtkm4uKFAnPYsvZMPqxSza1ZJCDu1g8UVWCW3HPAkFv",
  "key29": "32uyxUUZtG44yHe4Wfqv8GY5beg68wSDYM6y5GFifJRNJpQeArmSY5PVAQek5SB5jXuLgW21ZhUxEa4nZBiRJfn9",
  "key30": "5qcs3w6iu9HY44y7WkiARv5k4TCm35wLF9EAyZXoBn1XdoFi69isYvFbDfQXPD4cbKyFVRjGNc1uN1eARzM76Xpx",
  "key31": "2v3wWJTKceC3EidYujWKkbYKJurXvaVYa4aNXWaSFvY6ntWwp5VxTQQzQMQMrPHA5ofLUxuymQWQkLd4DStjjxsy"
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
