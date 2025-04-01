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
    "59Bn7YFVDYuxxG2VDS9GasjUFRhoAGMK4g4RUMCpeFme3T9KRcK6jyqGgfz5x8hxBXXyaDNfWpQsCLFtWR1jTHVa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21unBPWkW8B8xPKcEuF7pt89H29rRc8wvgXjPikUT6jqKTWgStiMhdejvkpRzuARSVxWNrKKu2ePdDGpeu5ztN4b",
  "key1": "5qqAnkRwme6WW7NZRfao3U5boaQJnqDopbiTvc7wpCt8623CFGrFdLd6M9f2RBXY4rEFjQV8hpZEt7Qwpna7Y3UM",
  "key2": "3ov6Kfeo15asW4uVZX4s9YMLvXEN1K2CHce68s6W4b3Q2TttUQZgi2Lyeb9WxmjYjVnL1caJcjp6fZTnFudTMabv",
  "key3": "41DhEoW1jonEuF4p29vy19mXBmXb9KQjCyZKnXAQh8LsWhRUeTiZ3BhtYf1dmhv3o4kjhQe1qbpQZ5dhbHGfDGTt",
  "key4": "3nQH31GZkSHVbAFdbho5PLeK58ydj72d9h6ZfDiKpS8Wt8tDcE69JtVhzEDYYMi6MD7P5DZwNd8bpVm5hCx6bJso",
  "key5": "ZLf74QARzPFxvuZoJGRHuDVnVX8ruPiDoFBySBWP66Zjo3YUnQsexSbixbRUm9v3PXNDLj1h27W35P3jLwVcacS",
  "key6": "5wyY7sg1ymp1SqviGVb4gstmUzB2CCGGDbgB5re823HnUr442JGW9mbEQqMD2nNsmcaFQcyMKS2f9iooL5w1bH1Y",
  "key7": "4rDTBEUcLWaBT9eiGt3sZPRfF4Ndq3SBVozaJMk5yGHx9cAgkVgVQkcJbgUe3fHwgAADx5zWsqz3St6q6T8ETDJP",
  "key8": "5G28pm4cYfyKUe77ifakYUjjWFekZwysdPGwuznAVZMmRk68kaDHnvvieB9eXdwDr3LphG9QYqMhWUGo3aX4XzRa",
  "key9": "4NWkDJKYNGjqNawRwAcXwDE1ovaTHTRHtgCBNqk7ZtNBziRYPNtVPssebtWjXiT7PR5QiPCR8bV5kjKenLZU923v",
  "key10": "3YdQs7NSJvCHxBTcUT2Uh4EMAs29Vvs9cYPb3zAdh4JyDiHQdwABKanLJtuCw8UEKtQcxyLhrWwSa4HPcPcNvncK",
  "key11": "5hXunDcGj1UWAU9SARuL6nWVRJUS4TNgaShvCrSPZ8985XcCZdZhPcFbm7b9hrK2kKzEEfq6QC4W1T6Ehx4jdCxU",
  "key12": "3XYahQ4tBFn159ppi5kAt3wBpaCKzb26FDuHf3KxqSkyGwQaVkeM4buiGcNn3du6neTPj4DEESVKTZg1NSeSZhug",
  "key13": "3qF7JdrfApztvyhEdQPJwqTqzJpDP9xffRmtAPv6n319vB5fqST4oFUYmQYLDDkAEeFvGAW4kvm5HZMhFJ9FLGZ7",
  "key14": "3duxX1KDJvhhCyY8z7FhmfiHLhSi1xoNoXXxntmokoXUCA2xGMYThtHBb5CxoiQXnDbMKga5ijb6UfN5Z9CkB8Vi",
  "key15": "1gs8ojMHgABkPc2eKgsBtDui14k8A5rjhqtrq55yV2u4SKpgHRWWCq2ENvscJkRH5JXgCbGtVRuX6wLuw7aNSGW",
  "key16": "4HAdvhCeeHAWzcyQHFxpAs1ypkWJkjrqrRASP3gmYm9Dn5wBtrzPWC5qQZp5QTDKRSkEwFVowm5naSsd5XoHSe7w",
  "key17": "jmQVKS16hLuHqKgZ94pzMyGHvf6wmdsecJNTuAJKJ4AwHwNTeyWJBE8NtKVegtNa5JU37ZXdfo2JEPBbaRyWhMp",
  "key18": "5hJUE8tLfNDjepzxFspmGi5wipNVNjVJL7rZMn6MPVSTBm9Ecn7vV4DLTnEvefVuSefj7ivA5KZLWtcFSH14f1X5",
  "key19": "2KahQp22cdAiusMQhzADSN7LP4oQpBn94rpsUgJ4d36hYG3HbFMnGedjzKmy24p9nHvUf9TADCM468ewS6TzsGV7",
  "key20": "5v9vgwZTZtrRKXZDZ8MYdG8fGabWWhtxWW54FhWye36vCvEWGZtgdNVWJiqkfhFKHnVGCkPAJY54EnxKjYqgswUd",
  "key21": "5dK3qJqGYCTXpxCLu1wLvccGmiZ429Jyhq89ttJp2AteCXrhSTtKpNNU1rFpX4Py24cXsyBfjt8EZfPGk6A9Nopa",
  "key22": "52L2TDmZzsuNydka9KMnpXPRrxiPM2ckP1xLxuamMZKw4T8RLJ9CbEVpAjDjqZBUr94CRVDTSbE4qr9emkr4k9cR",
  "key23": "4K8BtpLZMNf1fvxZF4Qe9MUmH86iKQrznG1FkXymw9HoGHqej6L1yheZiYoifhywQC9iLPSqfBoftUxpxteJJDF2",
  "key24": "4a9QT1fM3CwJeiLgJWyyh3qUMncerxRNEmcAdc3fet2Me4dZKg8B5TYnoc9Y6cgsaD9DiUkjiufYTptjWVWGuioT",
  "key25": "2xqV8574e4xLQn9dCZ7w82A2KWmKcwa3WrBxxZm8PjXmo7UriE5nj65TRU4pbxpQ6peisZtaJiqFmjxbABFARoiJ",
  "key26": "4bUquqQdEDvPhCmbSoAJkqknn1PwkiEb3vBxthVicXWSBm9fEi1mwP6Bom6ZVvDgJTWEafN38WEbJiyzg6Bcz2xA"
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
