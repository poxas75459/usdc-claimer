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
    "KseNdm5aF9xAo8YUAN4t38NaHfESzqeYxHYSsbPSyhNDAfvT1Bxxyoqcc8wT9VDACvgWbQhgajHosygkcXMDszF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VLZd8dZTzMp47H9AYkNCHcRvqagy7DMJC1YhQzZTzYGa1yHfKUWmmtae4gna8ZhXdRDxx4tk28bDEi1cN4cLcGG",
  "key1": "T2HDqiSRdDFUKbPqTV8PHK738P6hPKuTAUFtJYu4GfbY3TtU3cujuFwLtEYZxAJKVtJoowYwGtAaPVXjP4EUHX3",
  "key2": "4gJVa3aJqUKjXMZtD1A7nKW72GkRY2UgRaVorqNbEH38r3nRh1gZqXYESyhxCjd2ke4HYdMzThb98BzgYynxAY2M",
  "key3": "47583jcor5ifTyDD2KSNRSoiRxZckp3MLGeH5xPsPWDKW3hKbznCpGA7gUSJzy5bKrU2AZtromQPLpTjE11Av2MC",
  "key4": "4htR81f2RCDzRQGa2J4QFshGAdg4v7bCpEpjTsKxDNMncuq15RSdTTKB3rWhR8T2a7QQ2ecM7vHNnsJcEgTUSQzz",
  "key5": "5nbTn1kCP3gZNb8Efp2711DJLMR8Xa26X7FHFAwB5ubdPQDzN6QF65GL5QR1K9FcTvZiWtnPKCTYEbEjGxTqteHA",
  "key6": "32BgLZTVnKx18tt8v4hFk9PE8REh7ua8eCLZMhJk9PKNxMo8hDq9FVxPwCuacTf5rtnGP8bCTSeRKCbtUS24aGp3",
  "key7": "EAprsRQ21Xjt9aUSnFUbrJMNjF47d16B8AKsyC9hFmhG5GFxDcA9ZUw5KKi1qx8TpZCn2QW5C9Tihh75mE2ygJo",
  "key8": "25z4G3kHKN4AMDKNDhLbEnRNMVLCWwt86meFKaaWP77wMdQLXtnzsR9FMtuL2nJW671xf9anSKaKvkTPoYY4FtRE",
  "key9": "5a7mBq9Q1XQFTg9TUXUrk1gBj6pLBw5NaNrdTVvQ3qa5r26vb1d2ivvbChFVBsnQMd9zAsKa8X7NVYCjjVgCeHHX",
  "key10": "5P3Qju6Mkgkz6c4QETy1f5FWp7a2sDZWFi35Nj6PJ9HNNtJroBNcKdxAewZ5nkxz5jU6qAPMNCBunjHaLJQ3ABr7",
  "key11": "3CyQgD7Bf81ZTRjSZuc3pyTkaZccyiiW3dfv3W4tCshPmwKrxRqjSBZBvxzivHJag3YDTywppfo5dHTJqjMHyEXo",
  "key12": "3tviJ74ukru7XwSf2xnpGNBdNxp4s5RajdHi6YrVLPFBAFoVXqkE12xC1Xmone7s3wUB3eBrfZGL7uAp7CfUEWLr",
  "key13": "5cEFjHiGtWhy7xqAA9v421EBBfshYR2pWcfFgrMRQv7rMeJVDYp8PGkQZxndxqFp9iU9r235frgpMu7N5nqrXtdi",
  "key14": "2bAShoQGg6Nbjgcjp7fCwrbtfUXBsBkUsnWgNUjEChwbKZUqKKYXzJr33Nm3NPDvHTCB68Wpm1nzKo6ak4d5hC7x",
  "key15": "BxGFaPcEEBhpo7oGeDQwELFk884wiebesaNvVDGTgjhwqNkBSQPG6ci4a1dhG1oEyUH19FXg4cRE5X1R8yNZkRW",
  "key16": "phksngBnLQUqqsQAJcQszrKAhSYbsQptLZrebz746Brhjwf3vREMzQPxh9aP5pG6F2syGQKXHHsX55aTkuN7qU5",
  "key17": "5XWeCWwAAY6UGnHCb53k7NieHwbboHHQy34AerNhMKU9MPsmPvrQUU92ogDRycmLh5jJqM8wzZJysSy6ta6v28uY",
  "key18": "4P9CsxTvLn1fNUmtkSo1eoNZSuShkTagW8dTjgYcN9wk4SJNtdLgm7Lri31bTimnQvdLVQMguYbWyiaQ7yDKNWbZ",
  "key19": "vNh44DvbYgnEoyezxD8SzZpzDjTtHksrf57oECoS1bENX45CcvNGDwBNRF8ue2oHadgFBkq28fwzemxyCAsKsaK",
  "key20": "yUh9RzMkTZbHqbY9XBu2THR2Y7eemkpyhowL4VJ8aRd77NbyVukE3Js1Q5h493jn9qshqgyVifx5Djb7UGQXKh7",
  "key21": "4KT6gtRhJThKAUod2TNozwXxKMU29uFn7E324sNpw3uZyiLd3dzPqG6STAPDeDNYmSdY6ZZ1gMJjwAbGwgZcV6Gp",
  "key22": "63rW8QV6HPS8CpF5SDjRkHwSeqzdWGi6tcUBtoUFSmhP9nSYxJiuQaBYixyMHwuHGidDMapczWZPukiAPjeTJbQn",
  "key23": "43EKvfLNReh7QL3ywvcrZmNZBzdYXEHLxSVBW6YgS6cFHuvVEYjQNTZzya6kCuQa3UznCAEecKVn62NYa4psx4NT",
  "key24": "3siR9qwxER5dLS2iS8ukX4UjwBwT7RHXMMbpJrQEM9LjDmPkyt8cUfHCeVWQERersYHyAs5RiE4Aujn4R9bBGjf1",
  "key25": "4MjfRBT7povwDbUeVNDG8h6WT1tBM7dWSc92AEhDVgy3EgBT2P91vf1TodUBKFMzrS7m78vuPFDybTeQrvi1qdtr",
  "key26": "2TYBL6b2bNd4VgKH273xk9wAgSu3euHAUe7ozPCduW3VnZDBHok6LE6jMahqV7FEisF2BFkdsFxbovKTWjjhABSq",
  "key27": "5g1bVFcK22Nfw8c5PYSg25AXRWGE42NecvqSe6cYMhb2Kf86j91zuKTWMsxvQsDQJshFtv1cmM4RDn94uaCcSYyV",
  "key28": "4QTedct9SrZzbrHjFRLEC9u3yzDL6xfg3XRqb1cHz41DAWwJhNoL1ecKEMPk3GgRHNKGB6Vms9tMahHjBouMQua6",
  "key29": "sgUPiUCPaRZVm8Dh6cTJXsFjfP3QcNzyHvEdRBVhfvq6nAv4mnqKdvZPU6zbfAdVcGjbQJLemRrotL7JQzpkjeD"
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
