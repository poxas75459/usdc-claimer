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
    "37vw5Lkx8diqaCi6hmmz2P92dPKD5Tv66sF3MCh9UthnEZp5mTQ1PTisU21npjEXMW94GYScCzpLPUSktvstPUwj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VzrMexZ88u2qCZKLidWkzurQLV6AhHsvLb198QyPFXaHykbTWKQDGoN3KNdFmpchLGWAeYUJ9rsr9bmqazhznr1",
  "key1": "3qVKrmubdftzdsXLyaEhb8TwcqvCPi5un1oPMCN9Rz1fJSbbCYGiVBVbKpLEz6vyhA5aQ1mGqyfA6Qhktm1kE1eb",
  "key2": "2ieMBH7yRiTfqY9p31tNr65bn1MMszorxzcHVbrLPpeZkN96pjhK6KEaN72gLJGmUo6Q7oVNwBdPwYHvzsn8BqNu",
  "key3": "3zRorQjnxqxGjtF47YgYgMMGUzYfA7JeucnXRj183LuzsnvPxy2JT8oURHTwtRcSrg9EUAAnAcEuez2kug7yN8yp",
  "key4": "4feznzwdQMYBDuABRnMonNJGJSLc5vNKEkSior2X2FG2nMn4cJCRwKoxT6DUdEJmyvy59iMqJZTC1Wa5WvWxz1vB",
  "key5": "1cTHyZxtbwDVBMbFG29wgrCDU6Wme6ZoLe8qjSAgQM9Q22WuNAn4hrgE9mNjMkTHG4e2aK1fKnX5sFWbTJGuVr4",
  "key6": "3uBtYmN3x84HgnCDD7o9DRPMY2Vra5f8ZPkBisJEdoXZdznPT6LXiNnuAy6DtZZ8XqKNA9eBtQ9YwH3mMXbSnPKR",
  "key7": "RzugBLmGu1HeC3YVZhRXiCBooNCoxKK1JbyD26tdjLrnou9b7GtziRNTJKAXJHyJKsqbHVixLE2inaVg5G5ia2j",
  "key8": "22vDAkwwWBWQap1vBeTwTCnFDSf1wb5ziAesAFXRBidn8QRRB1ckFhcsPM2bE2sbWZKXwdB3whPuJNUnvdxrzdty",
  "key9": "33A3cQFMDwG4Ls4ZPLAxt6EirbC8ChBTH3L2jEB4w1KDaUoiYgWq7ThtnJHrd8iZvmhiArAo1bXbB74ofUWQs8jX",
  "key10": "3vPicAGp6hmCudWWeYxtURMc4YoFTwK2CRvmQr5ZLSGFPp2BLGRQuXonLQaKYNd9wq57cTLmUVYk32bNVCssazbQ",
  "key11": "5R78rzXU7RdCwwEcyEbSu3cJQVbv73gW4ce124kUshLdzUEUTd4XVrV7dUBvjxXfEwXLdfDRKKS5tWqv56a3L73z",
  "key12": "5nBfJsBF5QrimeMjTyr4M6uMpSWUSWQ8UaTV11XjHz1UtkAT243cMFSZqJoQtJ6mPZqgFCPcVgn8zUUfjJaX9FRJ",
  "key13": "5wXEc8dAr3eVuoxP4c4bbiwKRN5QHaK2xyebZfiUBYZp2hazCtfXjjUBqP5Bk11GSriN9EZSYakqmhFvriU1ngxb",
  "key14": "5DeYqc6ye4UXxff9mRAqEqGmeDK6zyTeVX2V3HP7j35FBSmHyLn9fhjDc4CHxVUXmu9DLEG5MHhbS5YM7cRi2PHb",
  "key15": "128eY4AdSaowQ3Zy27rKMfruAaThDLndWqMXmYHzjaZVM33rP2kzDAFTYw1UWRzBG4zNRjEudAweqH84TDHSs34N",
  "key16": "4eVQwB4FGNnSJAYufL4RY5DdtJxmGjRJpoWyaUfWRqh9PidtDkBYskQFQGWxvagXoVhgnGuvDRZpzCmweACM4G6t",
  "key17": "2gtCNF8Xp3RiZv6Pwty6DgoRzioWQzUw6XEMBPsAMienQ85sL3EJvzyJnSDS4MvosvgCZCFqGVZ6eWtt31EKEuAd",
  "key18": "3zMS3L9sWYhfr9MuqRpQAfN1YFrYRcEBzxdL4jdSYyUAm4i3RGjwms2amzTF1r7ePgVspoXYh5VZnxb3GbMQnXmh",
  "key19": "5SAZobhB5hVgxQxS3NCpQJRZsDHcyuoZnaFDw5XyF8N1QbkPH9MQWngJ3eCcDPkN6zKmE3Mi88rv52UmQapbPoSe",
  "key20": "5ShB434GNb1AaR1JPnGMoWETvkrrsChLmSVck4q8ikKJrxyx1ueQoDZ1D6qLhUzLu8Rs8JbEZ7GzYtsAnZZrarqH",
  "key21": "2n1p2nQfQLcjkpYAAe3yDant1fNNhsJWX8cswE4wFLNQdnKCJjxAVxAA7CubyDcyPQztznXXWLcftX7NAjfrmTfb",
  "key22": "yuzgABwfikbVxvAimw991d5yDFKfPuZh9rbPhdeUviHAK1dMHWGd9JbmBFCY73J5Gk1Yuz6ANrsj4xQBzJcUtYU",
  "key23": "4JshiRSfKY9rcf4MGkazgT45S8CUscqUHpx5hoxpyuQzKubVnV9x2KzwaGmfM4H2h4Si7VNoQ29UW5oj6pQME2wT",
  "key24": "2tWgcVZEjJUBqaApB1CF8mTnHtrw3s9rSCd3b3MLtCzizy6K2qAwyXRjovM3NTSMKKQPhzqBKUXR7VvufLrcVSWp",
  "key25": "pkz4aHSDYt1jHHgmzpNxESCYgZ7UGaLVcpjQPGGhTeR3v8gGWZx6MRPH7GaKk3yRQygde6cib6rLiiuqknMAYRV",
  "key26": "4RuKLCRZHj5oYE36PkiE83ZPBVGBeSwy6XZCNrdw4iNfjqfTxf6NZ8cxkHV3qJ1fv3uaS7JxF332h24jyRfQ44P1",
  "key27": "61xvcgZpURQVm6nnJNDysibTSkfDYb7KDtpLfnc5xsa4DtXNmesc7op4Hd7yByQ737sDbFGYMTpr5PR8itRZjECF",
  "key28": "2ky4n7oLdhcwCC6cy3WD3cQGq19UKAkQHtxLYFGfygNpvFUjb3aymhQWNexhWGAy5NvtcsnwuapdU8ZtfyaviTB5",
  "key29": "4XfkaSTJuu4GmMyYfMW766h7yMnrfRV4yzwNe6twAh6VG6p9Scs82yyC1jD8db2Wxphnd1ArEHPXd2qtCXTGdN6M"
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
