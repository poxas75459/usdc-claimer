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
    "51i7v5zJsMTAkFDQx8hQubi7uLdQp7B3QeWi8EAeFvGdMUCFSAsWqwD5Q3o4P3QEtg7sFQ6KHDrkCpiEqgUVjZUR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uunhMheemBZ8NRTPWJjcN5b8RqySacwQRKGkoMKyF7sBzLEbKiAqPXnzBT3Y9XkPXCSitA9rYMecLQU7sv2xQ6i",
  "key1": "4L89bhumrp4kkfvAhN52ZtFJ7ajHTwePRqBeyovdaviRrmoNtw1NiWUwPBdEiNacazAdYGfgK53PPcN1fp33K19i",
  "key2": "3KWHoAN21AKgnN5ayFiLFasQ1SJpZLZg3V78yNsfHAooGQZcpDmdSwiz3K1BUrD9ae6prdDYzG5vYPVX3RWF1v1T",
  "key3": "25KPEGi6ppRvmDpinsRJDQg4QgxS91eAF7VedSmPHBmofmHx8tWD6RZtJN3T7DEgH6RviUjwd1kbr1hcihPJbyuB",
  "key4": "53aD8c8SX8ngZVbYEFLEzQm5drp92z8QXbLYvJfRtQd2j4Ru51QLjLveqwKrzYoRydbZrCmTdEAZxv5vXChFJd63",
  "key5": "45bhdU1U6eSKuEbsnKKyxp6nfvKJQ6bwCGuvdsDVdLAnn7h6vvAnLyjp3nABer6niF7w5yW429pmpnjuWp22CNrJ",
  "key6": "56UgWKQZ17kZTGtNtm3bp77iDgts5CfKdSEtVUriWwAe98GxregmnaXiLRwvk11jrnAVyTGbKtWY574ajknJMHKJ",
  "key7": "67UujaVcmSi6oT3rtc45wtdHhHs7Zh3Vkk6D1BmPpaLUSuaJycATcSdxPaZnzQeusQgoviquifkJNfTgQL5K4qH6",
  "key8": "o8yczGTpXtXPaXzxw6d6W9GPyWx27YA1XpD36NS6iS3rhar5HGvkH74N2FURJMJ2XAbSbkYq7bmfERZgsyxCUBn",
  "key9": "4sdRFX1Zny7Zt2ApN7atGC2nuG9YWeboc7qp2bgmjccxEYsxmDPTSepwWehAmqEFSva8MddxtFrhTAYCrYgwVBV1",
  "key10": "58ZNxWu5kep2ACcFhmPBeoQ1pP8Stj9YQf3MKX48RugTi1ehSgtUjX7KWMmDbSKDLzLPbqedQ5Qq3pSLZ6ZqmxvM",
  "key11": "3ioXGtNtvije1bA1WizADHY1ru1AmwKdEVGjQtZtQqRFzgNd89PwdgnG56f2NKWvMcvByirkKELabmfqSH32M5wc",
  "key12": "4L7ePeAZqPv6puYZR9FFfCRyezxDGGA2aDZ3nyWkGRRc3CLE84QU8NaEZX7YyManNogRdJjtSP6G5GBFWtbXiBMR",
  "key13": "4LUppNxddNJtMbkDgsSauM2rSN9YW6D1ntRWbZCSQTPVyYVbCz5KVNPkLBNz876hTzg3NRiRvKvEQajBmo6EUjJN",
  "key14": "5usZucUFGKPSTVoe8Vn4fSzg2bBDq68nGJgD2X9Y8KWfE9QNa3rrrzWYyxLihizv55jvq2vscJgz56mQMRhx8xig",
  "key15": "2u4PVbJt315BPiiPB8jVVeEFA7M2GsTd1M4GyNK8nStoNtiu8kMr4kaSgbVzZWZZqViudboQTSpV467LL3A6oWxF",
  "key16": "2xdpxawU6YTyKzgxYLv7DjZJYtQLKgDM59rN3JuMdEGLEZt9GcJ6HzJSEr1YVUKpt6mYAMhVG1CPjGadnb88i9CZ",
  "key17": "3uqA1EknqxrYs9JbA9GsznDvruAzNccTntV1agnEwhNHwyKLDR7BtqCdLcxf7fbAxugqxa5uKqWoW3vGPzH2dBeV",
  "key18": "ersuwx9H4SMpXTBqCVfmHdq2MKiyWr5d5rUNYdgegi89wDgzyBSVXTxvqCeLLvXBRowqJjXPPpWeM5ao67ygAgu",
  "key19": "4TAUUhz2uixsuUnD5f1G2SNVH5Yeuh5fUwK9tosg6mqjxfLAh4MrwhcBadXGDMpuV8uotderM9zW4bFXrPnnNw8E",
  "key20": "3XA7KR7CNSNHknM9aJTnTYERLKihocym9sHETAsLUQi4DfAtUZ18Q6ttgCzXPcq9S2hcdeep74uTKSVEMWesAjK",
  "key21": "24FPMQtsQpnAYrNc9gLDAsm28zmyCjDHjFEv3AcpXPV7MvWU46Zv4GrXoJV4xtuDf6VsCxhZ2L3gjmxX3NBrd6ZG",
  "key22": "kurfGirH4Pzm5NFrAN8JG5PwRA8jAGYFpGoAnsVPUu8AupiY8zUrUGHt7wpPniZaXyvCivFHramJM3hY1fjMraV",
  "key23": "cBu6iXoVCQ7DoNVNwKZ5yLChacYkNotxQHGtme3nZ2YFbeLiTJdoaMUeBRpwTCDhkiQZ6bFydD5K7eU7KogRgXB",
  "key24": "t2wRp2RKhz5tt9aSF5SDJicGvL2xEWF9r42pqvSiqsrRu75xnX82YdjBT9RxN6btBz7BhPTJYqg8kzdmTSvpHvt",
  "key25": "36ViSYQ7SDuaYwq6ycWXQm5ZSa7JQy1VKnopWY4yDoDrz4ediRQEkPhWZEXpyzb5Wy9zpMHNDRmvTsAyRNVaN4sP",
  "key26": "5bhc7gtfuyYMVBF95N3tYWiXUqphgagAXhGqkjgUfKLg3gmuWjVV7DfPCa4MJAZojq5gSzZEe2cb4anG8fXzPZrs",
  "key27": "3kBURqqKrZMKhg4rRe4iJERNS7UR2RRuHNwbhDbnhSqo9MdCQCjZvxjhmZrMY4eeRxvv3UP9sH6Xu5KXLhJj36za",
  "key28": "5fDTZBs7JsjTpAQkxAVznL6MVrikWqTDbbf1fH959Sjmtf5YSz2aboBaHY4om5D9jGY6wn9mKJAWirrEWJurGnSU",
  "key29": "4hMzsbMKCAm334XZK4oZnGa77Un3kqCXtSbakTdmBX47VzfXtzcjuWJeFg8qe6XkhRyT8n3cMXEd1eZZeYYDujqP",
  "key30": "67egexjVxUQ4TsPxGykvX6akWZBVWN1htiXrWCJjrxenT7i2UNhyFZnHR2FyZpuaBQzKv2Np1oqE5sEtmcNJK8oQ",
  "key31": "5bYwrU3eUcUH6uoHSrNWBHqdfYvGeCtko2LSkwann4tSKLfgHvuAGUzWqeHymySLDpcVNczcxD8Q41Tdmg7QdwKs",
  "key32": "kgPU8iPtJG7c81y814rBKgj55fY5WbL6kEcHnAhyQUHtjoZQDieikEQvaNyUgwL4sHH6LqVdyPwfW6hUMEyuUUZ",
  "key33": "4YC7MfapzjJqEa2W8sgoC2oCGH8ckPo1D1U278Qm4tNmJCznE2wKNUmiYrSFgdR2waAxV9dd6ofoxSUBBMu8eLA3",
  "key34": "27S77wE8WETjT3AVx2uDF7myF6i3ZvMjVSAQrf69KRESomZLQKERBBxcEwXzWXbY9A74MhH8EWd1eBYodw9zqXkv",
  "key35": "3SA9VdaZzSL8QKqzCu9dXjkuopVizi828ArxJwsUgRgY7r9Ab9utV47ZEzFhKMatTqX9aNPmarZryuFJ7A8CJYNc",
  "key36": "3DUqW5apTn9vCm9KG8xXDEKqu3nxs8MQtsSjGHS2Lqp5CgppJALQ4z7e4yxPxes3m1Cy981s6aQZbpLJphrhywhH",
  "key37": "XJ9KzjDA3vkCFTV3Ht2EUJ17xeVHHPjM4UExtnjrQHM8HB1AB7EiTVzENKNeBaRXM4vNbEEGreW9zTntmZLpcMD"
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
