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
    "4sigwxXkLCz1zMsiBR7PZJQmKHXSFWZ5mLiXgtUGYeiD1K7ZiXMcHJMjCzLxE6ZHd7m2S3rnVNVg5gmq74VB7kvh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DVHLCqYZ5Yhym8JakVdyDhdVqj8HT9ZFMVQHvjkixqf32cW3ZPieiSucWo57hJmiMjg26qHKd5ELpGXDXaw2R2W",
  "key1": "Q2nnjqAxjVQ8ECa2GgNcSBRc6ThXXVNXnamJ9vLJFuAZ5VgtJahapSV11CYnikYD12LuCbpjThbauowsh8H8Uyy",
  "key2": "vyLU9QXUcuxBM4EUyDwwBfQcBPx5CLqSJ7eoj7fUQqqxebcbnoCDYQMhDMV9sAjXQrx2PXtLodQJrmsv7V5Mraa",
  "key3": "pDoE5mpCLgrQtFhdZ83A6v7EfsR9EvVtNdcvduJ6zAUVyoBTobKBBYQvk6AwoyVWnZssGSXxziupqhQWY7Qnuaj",
  "key4": "2VsX8yxJUP7aYL1sVs6CEEnfLXzyochAD1tKNfZ7MiibvaK3tyKWAnQi7CREqW9TDJAj7jj4YPUXBrRbR9Vx1ea7",
  "key5": "5h3gsWS7a45qxFxpNqnduH34BvERfeeMtrwFWTMuMS6Cmsfy7tpqcp8enkFBsk2jZ6xxCbxsY5EJUqpHbVWB6qnZ",
  "key6": "3oYbdeAbotPV5ti5aFXb3g8efqGj9X9mfGAMaofXf8mtakHVHqqECA5tXZ5DgikCWSPJkH9f1JyPzowWkLdu6Vvq",
  "key7": "CUtU775ukTM5FzMsDaU2SPJafXF1UmR1hLqCrAhc5UfPLaaSTZZ54dni6pBMCpVDXCs3qo3HNWyxCFHZYDWXtWy",
  "key8": "4p3xdK9KWzAD7XwSpqSn8QbnR8TYCwRFmogwUJSYfg92JZRaGbS1wKBfiBra4qnBfXULEjroJsi4e39EvQRamHPy",
  "key9": "3MSeMxejZ5JKGk7nCM1ezp5JUDGvBwKx6bb5dF8qKWNQKCsrNJpqsMvTW5B42V2DLAVvSRG88TuhxVh7UeLYdXsj",
  "key10": "5yX49ZM1m34UaLQoP6E2Q8eWvMVf2nJ2z9WNS7mSmQQpDAsBequZQtreJagS5xdkj9UUoALuWWmRDu1Xqbj5u5GU",
  "key11": "42riVb9FYZ7f6W3WRCzMFe4TaE9cVLu4sZ6xYCXNNL1WEbKs6TBZKrrGKwRwZ3MjLZHycJ2vSLTq8rxKxPrLycxz",
  "key12": "4fw2pHoxcoyx6qQBnVRFfacXFb9iCk5igzetfaBMi9nzCGNvC16C17YJaaHYx4TsVfpmcuFCgfrK7LmHWmPDJHWc",
  "key13": "2JfYKFTcFYbuF4MSYP4VXqxvNtqf5kxX9FJHn9Ziz36gGpF6LpDJdvqWNnjru1yqTt7vtHpvnrR3eBDt8FbGLjc6",
  "key14": "3TikWgwtws1S8CrArz9jmVfuiyQncdsZjnN8uHeVwaz6j1yHS4xZEBeCYmCNhDsYWsh34ULKkhgtuWaTFEfX48Bz",
  "key15": "63XiFVuCH62xnBA2Eok5Si7ALrcP2wGyN2udJtTfNvFe8BaN17As6BNZ6Jvw3WwHtfrGFbHTFkiQZduz3KV6o2mW",
  "key16": "evtB3LurxuqBGtwrJg4cpVVUiaXE9XzDPBA2z4UZRoyJNo1ADU5MtDqCcoJKY9T9PUe48tVZGiHgoDxTzDbXTJj",
  "key17": "5FQYxnXeqcdA4kEqGMTp8ecKTpxUPRBtYuKoB3eu5rnZwfUJ1FbEDan3BSELBrBoGpPVXhV9dUiRwh8neGrcfuz4",
  "key18": "3tWsJoQBsGnxuAzs8jWGEFUrRB7SmvBn9397za6uKih23R9dvxjvtvYdMdnvnPnsjUyHqq5ATC67uX7UfPz5EAr3",
  "key19": "4pAKGEMdxizrxWMtz4oqkWRwx1iqpYisnHiEx4Fa5pPeDbc6i77ucmqypVaUaWvpvtE1V2Vmn28KfDWkcW66vtSv",
  "key20": "4NkRHHaCKPMY1ZVoisXD6mLJEUCAo4dkm4xhqdWdtPGK9TzDdUcK6Tskr2GDdtErmvHL9Nt6vqsFZvLoVF9jAzi2",
  "key21": "yuMcJPLckecWSXZYGqKMVHDEB1Er8xCJv33PtbLN6rLFctQNMBYNs9mDqVq65Uq5Q5nf2veWd3DWq97WB8PW1r2",
  "key22": "2X6Ddr8hV1z4ezKkQRgpRfJLXRTSgJCKWxikixddqdCirBBW5E2x8SH94XNJkvF8RXNGVQXEcJTjgWHT58haiASv",
  "key23": "3pCysrSs1SU2eucDW49wpvzgpZsK5C13QonQh9uSD3QEdHtG4UiAgwL4FajcsW3etc73tHBBdvEUZJa3bFSVnxxn",
  "key24": "31HUz5msYvwgMBhgB654fy3LRcBHMAKtoA6uuAxMGR1UNzZtCaEScgK4R9aJBdHbQ5SA5tmMTVZVsFrgzgUmQ1rz",
  "key25": "2gbH6eHNh6ndbaV8Qic161TFqWDrgeSHqKRZwmj82cxHWAJ28FJAn8vTy3pVmcud6j9D6ALEdfHRD9DdBmusrXkT",
  "key26": "2rMBdgcnahAWVbWueXf45nM6bvqrG8sN5Wtifu6Mw3KVKkWJCbzpYfYMpgJiq97D7JwHSRAoBpNcK5iT4zh4NXUa",
  "key27": "5RRdkefKkZSBkjevAbKGESTnbuJjRpFXLfFQCczCpLrPAhA5WzXii9SscEy4tQfnhSmckuXsELaGfAMRWsdYyPHn",
  "key28": "4uGT5SM9C2C56q79UKPot587Fn6N5sr44EHdK9U7E64ysUPqVY5hx3fACxtjLpZn47NKuxPNyzXNK2ybRVyzWpA9",
  "key29": "3RWC63mfxgijDV4Zg4NLSBogW9WRnQkhU6UPviMfX6oX2TYqdfyqC1YJK7YwxTc4UbbtwyBPZnaFi12mjBwJ4HqE",
  "key30": "2hFaWrQZDJmh7WcYyXS745VZPjZPGMkNFHgdQDkjnAUVZZaW2kUrcScnTRBUUbbFBfpihcgT28cyJNCE7mWKriGP",
  "key31": "4bpkEkYY4GS147BNSemwUXD1hoed54D5LrnYhyzkgRXX2DV41VQVP3bYiZmhMLyBAJrmjnattGaxfmuZ2B1tcoe",
  "key32": "36oRPKS5BDA4nmp3JW7Ji5U9xp8prbujttXQVsdUSaj9UAHTvn4xR4VU3qYB1VqBB1s7LJyJKpwC6qYD4766SHRE",
  "key33": "5jyukUp4rdkDXMX8dPrsZudaNtY2iE8BGSmqNYfggNWDBrM5ZyMZcDvMnRKgyu8cXaRLGRQvy4BkivSW5S5pFptB",
  "key34": "4oqGVBn9Q7X4RZA9FV2mT7QE5TXz6DhKeD1a8MjyC7UA7H2EKuG1TorsDHWAFs3k4PjGrdGhTimqJnv2WepMLexT"
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
