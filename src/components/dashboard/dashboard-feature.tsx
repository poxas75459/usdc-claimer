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
    "mEsgUYUBWfkz15jx5UeM6pWDKz94mJbSVxkeHSuGLhCH96AaWNrgWSzQmoxWxxxLohkEyt4SvRsv7ja4pWLdtEY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pJkyoNAktZyWLRjyAQKqBQm6PWfGrVTfBhe24ujNPt6pkqFyJzhUwNtu5UU3582rbWqt4HM4E8kgh4TzV6gx3HX",
  "key1": "4fjRMnzxZ9u9TdiUWtYnbL9ciUamje6vMRYfJFsvouNaNh1DugXkw9o6dyScNMZ7514viqELow1VQNzTfGyw2WQB",
  "key2": "5vyfyv89rAysu5ZruS3qFYjjYnDez1PUbgsyw1ioVZxG22y2mU9ha7RtD6szedCMF7yczE3uUTGSNVTCszN5B8Aq",
  "key3": "64ie9RgEMySsCzrihSFtA6PRyRGkwxYGEjnPaYUGL2Ny7AxiwnMxv3bmgu195y5ZoZFcm2qHcZXKtzpUGwPjCoYZ",
  "key4": "X4UZe6C4eMG8z8iUXqKPEYarfTrzfmM7J6y7jxRrJcRxnXCN7UVy85Wj27duwNrtzSPtzYdGyH69P3Qu55pfG3V",
  "key5": "4544rbQKdacHTndNC65To2SKTEi7ZoCHSZm4RYAcuiez5HV9Hkh1P2g1LFmWiqPyoztWU8rUpwoe6WZcJEBv3zKL",
  "key6": "VZ7NDcGaNXZufkvnuMc4xYpvVT8p5QLVUmgMhXJtXrwFQtL8bdNhJm2tpoRkqbq3z7NnABgpgccybvurXHC2zhW",
  "key7": "2WPgAodcj7M6qNvNq8XiBAYHQV6Re6v98DXC4Fmcz1kPt62WcmmqsN3hNi93THJLxmKmRJyDTLaw3pCD4V2vnBDg",
  "key8": "443CXnvfq1DHM8k5EHXvYjNR1ASwDbkRvpoVqyazSXqVJYu4JoQggwSQiPKHiuW1ahDgni9jt85bg6HDgJQ956g9",
  "key9": "5yrnNAx4TdYR1aMTCP2Toc1KKToFeeASZeU1yDSXTSksPTahVinZ9Rg2sd9bjyKuWqhDTdU6S7uVzbRgM5FCF3jY",
  "key10": "4c68MDJByVRjVpXTV41HHZ1KmYWWjiuN18GqSMUTio7HQYt9s2BvzBE77Rz3DExeGVFQGB7HNdg2yKPNvV2CFZiX",
  "key11": "5BPsXogWjgPqxLZu26j5QT2KhWvYW385p9atdFUKMSwRa6iHLu1jFdWQbUwaqvAmCqjvGXADpCRoyjhNQ8iMsHp1",
  "key12": "4AArojKSRpcvZ2ebyC1FKYRZVrZaL22cBqdVCN48SroSWesJbVW3QG1MW2KYi9XGXZ3LiWoNsyB6vFkmVtdmSRLH",
  "key13": "4DugL1TH4yFdSRs4bfBPNwucYFvr9vJhuBZzsfNkXT2BhxPBS7akzsRnDatPZPLwMo4hwYKL86PWjVdpjhBcffA7",
  "key14": "2e1ARtv9SePsG2cNQo9xfhjj8CBZjAa5eSwo5PTGoU7QRRv2FLN17b4evv6FXCXtTndkNSyxnorEK7oDhuFbHfBU",
  "key15": "62WgVbcvtxntPqrW89HHaMTEmZdeatbaCcjJyyts1EYt6HQQ8rNJFaMLfqFz5pz7UVEYGRAVpCCnB8BwYTQ5HWCK",
  "key16": "37U7VC5t2exM6dBvsKeeHFoQJwjGCofTQMxhjnh1EpqzeDFjLMS6976kzFe91ijxrBWr8wfVu3A4BXmDtUfn1MJj",
  "key17": "4CpRxR7zsGZfySpvA7sDXLaXS9TRSFftvmyjfpEqNkHLuFCBeJkVnkFT7VDU3h4DkFYeMoNWoauUbhg8aSFqM2pk",
  "key18": "2MLDw17Cd65jhr2Mzayfr31HdxN83SMYEAUh6v1LZCNbc4ao9wkfJu3YxvU25NhZjrNhqTDkUXbJWvwcq2ECbY9S",
  "key19": "2EYbCMKvEYYk4VmcURGYmypQGYBrvBAoEnhitVy9shFBWPBDs8mLjqVisWSumD39kukNE6wjE3Z5T1CyKJWnPePx",
  "key20": "6p2i9nwFTpRdpjj9QANHezo8JxFQutJeHTM3hkrKSVtTgHAMsNQoriWpHdTgpCoFth4x3B44LPhtFPu5RNNgmaB",
  "key21": "3YCMfjy3LBaAWXWNGv6uErW2JsAKh4SsvLY4eQtzm8M2AuCfSyvbug4DrZiWsPrBFjJGzwmzA5p9dDPLhn3XBbCM",
  "key22": "5Qqrjkoya2d8ALnGP8rnqrMeV5QyQPhcN18kgyrsKjwu9PAsvkKYRGLg56QxRMceTKyQ27iDsVgBu8zLuD5WrHci",
  "key23": "8bT1Dv7bteLwuFckm2iSZuwsBXWzEymY5DJeErWRUxwYmPa2Hbgi1MzPhS3C54fqXdkVx2njoDcqZSkUgxh3T3s",
  "key24": "46WnKVBeQE4ouX2k8PmwzHGXtdcgs1L1E6P6wViCKKyj8f85SZmWr3oQHy4oJ4Wzm1c2A5WxgmQ2Pr4ot2bV3mug",
  "key25": "5WZGDtFdeYWaVpNoBjX52RX5QQcxr3Lgz2rdmXAmULdp6N4SqGYRfXLMYzqG3gUtiaQwTyzRVV9aGuwoG9MCGMZZ",
  "key26": "3axwWcG9Gb2iQbNUPMXGwFdqguhbC86vPX7uepVmbqisDCfKqemkWPnbzw5kTkGauEZQn1Q4i9Ad29H6P6j5FMBm",
  "key27": "4XHT62pLiRDKq37QvsyZB1SJBCgJAtTfBr5yxzjBZjCiKkvF7vQs2LQsprCpUKCD6aRfzDRisyMH7dsfVtpHCkck",
  "key28": "39SH3FiNefmb8xtEeZhWpQpPdxyB8DYZXAB3mdSQAALBGjDWMfx1G9ye1hVpodM2sFJds4yj8kksyB2zZgh63cbt"
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
