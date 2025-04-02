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
    "4iHfbRwY7Vu7BV4mdiv49Q686NPSyqEty4FEEm2pAfdEEWfHb9U5karZATSBrDezAs2YfASMMgbwmqxfJpr5T4kL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "txRfDeGRB6pcLjZM1jkSACLT34F6jrb1juFG6NMGX2qB7hktacsRXu6FrxL7Jbo4Az1iyKurGjSPXoCkftvrSuE",
  "key1": "vuxnqP2uFFmTagyuipEYpygFaMC7A7jucVzGuCDHfwVWa9Re5NSmsC2mcBQxeCRyK6RL9e8xa4tmUAS7DUJpQoN",
  "key2": "JqayfPncCnZTicipKyEdbFJrx4HM2KE9m1LvgbHL5qt674LYTg74RcWzNF7qFJXbeq3iwdAvJvYSQiFfRjaLCFu",
  "key3": "47r1w7Jv6dLnNb5g9rJSUVoUY9qAzty5MwCoXkN1aLKb3p2cXcdkX95wfYKkbfQrPJyS5txNp8Gj2Nmj6SFtPeWR",
  "key4": "285dgJhm8gBk9FzXZoaai1a9BWxaLjEYgdAbMR2ieUGNTepvVq8pTnQqVHSZqpeu3ywRv7WA2yrnWsZ3fUX6UNP6",
  "key5": "Lgk6RuEPj8wiSthWXtuU4sb6R3iA22rN7SAyUhdKR3ZMmNzNuSUvvbQcPEXj3pMjtvYdfNauxAJ4kzyr7AQUBnq",
  "key6": "5k7JCMRudaGKU4MUMA1QBkHJFA2C7sQm1a6mRXMLr6jMTFEtd3nrs4yT8LXZLhEgBJRcrFoH8U8bgqsY8dK6gCkk",
  "key7": "5TXi6fKf8Q1HpogLhMmQcRTsJzUwHcuwZKTQ6shFQzstoo3R8gmmoPJXnBZdFCT6uCsAcxiDkMGobNFwHT8eckXn",
  "key8": "3BPH9ca7jReW5RX8629Mh6DPqNGmyATW5jAHW2qA1TN7fxD6b6VP8bzwdWb6c8b5hWgpKVcE5BeXCff3pySK1JV",
  "key9": "ytVzkHRWyThcEwR8pA7CZUUCnpATshyF7Cb4JHEExwJeNzAPUNhzLJLB3DKpAQ6ZkhHfEDHc75thLPz4Vo3tc7B",
  "key10": "4ZYtpVnBtW9P2wHY2jemBKQKqa43VG7eE2Vq25FGUbECsoaY5Mn8a3uxGiABdvDkCtii13GrwGC8VsT5Dvs8oHj5",
  "key11": "2apSxCTtHbVMzFKALJaKe14nwHG8xUMFktkDfZPtYm8Z9u8N32eiqZDge3hRKAD77MaWFwTymeN27AjGDafrYkdE",
  "key12": "4vjCaR6BQjGYkwmycLm23JLD8xyE7UQzSBxMj3bV4jcNN25RScRKjcbdxiSAC1T1STyRVXW18ioeJaD7XsRukYmK",
  "key13": "2bYvDkCNH9tF7nP25jmU6s6JtwpAT13psGJQ5mC2W8hmuhLrDvPqbNyWe7YFNPpvtDGb2bMmoQharPSSfHsS1QcE",
  "key14": "5bBdASBLB3rwzx2U2mqpRtUbcBQ1tpGDnrFPWtTUxenANBber67kzn13fay9NbvQbvYtZvTEMBp5u3nKpgBdF6dR",
  "key15": "2r71mzbvQfp3dzZaeqUJKyM7PZLxwdnyTn4RnVfPY7kmLeAPTYRibWhreWhFquYykUQ1m7GVK7SUPGZQ8HdbUFj6",
  "key16": "3hMs8oqc6FhhggyqEDMh5176TaLFeMu23BjeULWZAgZZkUg7PL8bWsU6UNdGd58tdPcfGapeTLV4ToC2n5ZHY3Vh",
  "key17": "3k8csWAuRhv6rEaLrjZ87us7G7UNL7Nbzao9Lfwee6GbNZFqnuVNTgTPX1tSQRBvHCpwuXS33VzhUzVATmd6B1em",
  "key18": "3hVx537hRxBwtercgbbbz2YgA2LBWiRyaQofZrWGGToGDLQD2VfCL36BhVReY6mKPY7vJRBBFtbqjhDuwadsVBnt",
  "key19": "3uKPuS5PrkReyUR2o3j1ZyfSe2jYtXuUgjB1s5ws2zK8ZiANijcFEkfLW7sF4itudSCW8yQDLRh9RbbgrWSeFNkv",
  "key20": "AvD6ZJ1Zsb6FbNbXp1gNhVGfTQ8RzPwpygtivdK8bkAehbX7VM3o8fh3xgTL2Po7KmfmctQSjQgDFK9QnBPJdoM",
  "key21": "3vj6mdZbbzf8Cv7tdk2enRKoMfeAt37hxWRBNg56EYxFRhpDL8hYDHVv4NSsboahjQr9B5Nwzi5ibnPnBYd8Z7JM",
  "key22": "5pBKuffVUZdkGAozo3bEZcrVnEgvTuxBUEvy6TbhsngcW1w1sNGcEf3qRFH4agbiNex2Br46kkzjx5X6gVseH8Y7",
  "key23": "m8czngxsM4YxeeeEo8mLynZUYiqijLWH9GJcodg7ULZAtAEjJrYLVSJ5Hm5AhhgLS1b8gHRkSMpqNuViwnrnJ5w",
  "key24": "3oTgn5kZoQrSCSpp5AwrGorNfrz59hxL9TUUiFtC1bwpzQVYuvLcodSErp4piNrpKJZXrVywWJN4raEdU1tTYofU",
  "key25": "ZurXpH5NRCrHPVtmdzx8w2FDw9hRFW6HHBnbc7Wr7eYX71PdVAhNbzcdRotwdMUw8jnXjvxpYWU4JF462KFhhGv",
  "key26": "2QVcjoBpmAPnBxtRaorfFPi7BnL1N2W3RSfWBSBr4wsvNufsYs2eN7Jibgicf3RzyHEECZyfc8hR5ceLrMLqrqUp",
  "key27": "j3Snrz6Ei1uTbvBxpPKxqybYaV3ghUC5WpQmhphq6RhSXY6c26qPxsfDS4NJiTkxhiR3xjJ3eNMTgv94RQeJ4yN",
  "key28": "4Rs7QeWBhjakiJfpnMy127YXjmPhaKhLWX7CJV4eJdY8D9spugQZkGiCGJjvC8QvLLoLqdfhpZpaKWtmDVfFUjeC",
  "key29": "2zUShsrJdXukmmRgDBQyDVWZ4PPZKp7wHuDGN8NkkLKXmC46mVyBw8kgtZEK27oCsDTEG8VpuCtUW21XEgeKVyPh"
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
