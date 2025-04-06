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
    "5KDUxKQqvHif2W4DTZTFbVMsn7UiTCXjuuxvfNtN3sNTaziFX1S1tQiZJSanXDXkks9N8ZUUiokzzWnqNCKBTb9F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SkExewo7x6ocvCVSmZJ1gxikD6B8xmn2m9eMAApwcX7w7kRmdph9h3hjqbvPJunkyXMsqMG6KxMHueEC5YiUSFF",
  "key1": "2wF4ewvS5kUr8ycbk1RUD9ZLnUfFRxX9nidiap7AasuwbEnYr2gCX1V77SPxUbCG4PFW2FtcT1wA9NwPL764p7iT",
  "key2": "37nVxHXJFnS4nT9SAqgHz2TpnrgfkUfvPZYo9mqSayTo1ifxYSLfpHGKgF7JQqi3LjV9tPAFvV1UWazD9yiBSucA",
  "key3": "63Ustz3hpN9BVtH93NEixG5zGC32aMCma5s8YyB2Dkm1hTHxtVmzoPGWUFYhxJtbLMSU7nxxrU3QNXYsL2ztPtK2",
  "key4": "3SQkSapK2UsUorRsRV7Sq17JMASqX2x3uRV4QBZmDBrEa6QmruZzFXUzbueozwFG4HZxp6H4C9TzyeKj7uEf7DTK",
  "key5": "5U9hAwN3rz8yLWiUD7qU4EDeRiZC1XwNsd6PC1THCbJsuj5cwdJbrzambepSY3RSafjT9Y8tNAzxgBMKi5jMarD8",
  "key6": "4WKuCWdqoUan6XkL3ykwroN6WkjB1W7VAPJ8ytthhR6TxpkQG2w1CESyMMuEzKjuCTjizxpWwZGgXAYQ8goWGExT",
  "key7": "3LZPjr9xKuPiRTxTCpx3dopDEpTfQ3ZQPG11SYFcimvdjworofdyiEKNvu4DvaueYkqqGL5wRLWLNcihQaEiddL5",
  "key8": "4yxFPXbhniWLs2Lqg7TZExGyCSFsVKsNWJENFonetbdLvFrQF1JV3DgBQozarP5JYHP71Q2MPuXHh3JAWEwb3rR4",
  "key9": "7vWzHGPvMm7zR85GfTachaFrZ5VLvWmHzHLh2iQkFTcid12AQ16fX6rWzqVFSxoiktyK22W2ELHEJGLZxSjnHGi",
  "key10": "2Ycz549V4jDsbmyp3jVq6sdoJnxzDfmVJnPKUBeoDahnjGT3MydH4VeWqxsvKJ2LjjnupMCwBLAoPwGfi6yYGVFr",
  "key11": "4CEJ2jAMfJWNoBgkzoNUf8CAQ8BQjJxJYvpARqmgHubW2XUouov9BTZ4iY7GxdA8PnTVtsPDF4Ed5EUKEneJjzfN",
  "key12": "5YZWNcQLF6nzVsGCKNZqBrbbY2qDE9DqQoD6Yi91JvWzkeQMURmVJbVmJszwFHYZ4zLSMAwHe6UFfrjQiQYJYSTx",
  "key13": "kWHHHoh7iqFEGCTGxU9SjbRSvSGb4jUY1gM3RjAxnPAMjpbSR7zU3ZACjF3ABWkZdcRuKvEYpfK4V55UHwWXqUK",
  "key14": "5QY7RWZh2DvDPK6sohm7KvZjRYMtK6FH58ZZaeVwFeddypv6HHcCf7LgxRwjvfHXVmCE4N2t55Q5PHPD4CQev9PS",
  "key15": "5Nt7qMeZkw1M1hNHMBDy1WdpYeEdMcu3rr746bQms5boYitzoV5qaztDJFjiXbgriHGRMWV6PyXh3bw3f7ad8sWp",
  "key16": "daLugteu9hNXreXccR2LbWEu9fkjq9UoA3UcVdZhMiV6ZTwFSRdZpjWiSYQhVm27dc6e8YnBgM5VhU14rC7nvcj",
  "key17": "2rfsjrnEVyn5w7o1gWgF1ELGRZ3AtdE1LDMwJ3i5NpHDwho9UYoFjTyYDR9ywCQuGVDrV8gD3PmgHpap4cLHjkSF",
  "key18": "5ZFYhC6LEsZRTkuRuB8mUBEJ2dARz1j1THFAZ2FefdKEMnTjytWieQPj6TyxuVDaghuTuEncN5N9BUz3PP6aSTRD",
  "key19": "5k1DGJKScfnFpgjqXppvdKQpUuHAGsBWtCg9XpgVFxiHWezZCKgNcoxDFaLCZ34JuesyTQhiTEBUhPpmLDD61S4V",
  "key20": "3RPUABi5YgpmkHnVbhWnZgVkCa1R921AujAk11L7PREvc73DdrVBaEcoCbJDhZeheyZjcpKQ73EFp2CRueonkAJk",
  "key21": "4HZM3ALTZGcfJztRyhC9CtXwaWGzUCwbJ8tEFLZUu1oyJFxunBiFVqebPiSKSgjVtjQn8S3MNLjuidNgsKNqVpAx",
  "key22": "4GoVEdw3YQpWTEU7HRmW8PnKRuMuaEgMPX7bDYTDW1ddcEg34mowPVF7XhLgCq4wTT4WU7QTxmJVnBUmR9Na9Lbg",
  "key23": "5tWoTG2uzDTvgpTa4HYax5C3uSpv7e3fCKPVyn2RpHmRspSrJ84SAYnr8mFJ3zkPqPqMBbfZNfjuM287BwrUbQPY",
  "key24": "3f6u3YBdc6e23HVYpk5UY8PeEs5EUazRR5EdDkxzSqEBAH5NwQeqqgdmiRcV9qHnRobKbXYynkALQqYsZVnWgd94",
  "key25": "2FfHGwL2u1evQyP9CrEzw4v7tE2nQ9T5R5JXYARcF2KKn9cXYHtcQe4jUxgcNqPdRbQ85etDfw48eakUSntQeiXs"
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
