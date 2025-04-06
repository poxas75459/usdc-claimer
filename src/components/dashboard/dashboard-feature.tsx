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
    "Q1QrX2Y5vwgDDtAwixA4pD7kB8mGL1WY2ePd7azvQxSYJ8vXJtRJTiCNMmQLco2gkCvYWPw7hJgjGxGzGPMjrB6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uTMqogZijcpHWpaTL9za79sbyZg32P75nGefmQ2Aq1gJu85LHQXoXYrQrM7W7NW7cfDHKG7H3RFhYXZUM9sbNXo",
  "key1": "22xSRHmRM7QKBHRd6ygivPuhz73meUQ1aC2zLmY8G3CK1P6JHxYF3HE12Yvo3LxpUYqRdRRpAurJBp1TE9vJ1imP",
  "key2": "rubWyxGXyzaK9xsLv8Gn2bMbSMUUyWsEoWEUxURDU4YuGb6C8zp36NvQF5JTNTKcH2u4VkD8cedf9eXhKXXeYa3",
  "key3": "5VpNxAVViYT4LZnSfRMuzMpgjmZhs8HPX9W669RFsQpsGscaqwjomvsw1kvJxdmVqWyEDeUHg7nyNYBwBZErY6kN",
  "key4": "4E1zwSACPdiNYCPoXXPxidEpu5RRKxsZ5czEZLzYhVeRpxHfadou9VKMxXCjb6rJT9rWaxKwSqHwtCYaDemHv6x3",
  "key5": "2XVsueLsM2nCZ3JipVFY1kNvvkcibDcXeXChmgcN4EPNEsFxXLWmX3XsShQ6eM5idUbLwBNWpe1E8Y6RTovxK1w6",
  "key6": "4PHyQ5Lma9hkra28sUtiVsMeS4xRkfd5YM1iBzrMgpHm1PpDeqcwj2HkQR4TByHQBzbExpF9viex6yzV1DRnGxGT",
  "key7": "2T8zVNBd3izbnsvBYNEedMjtTBH1jQikmcNt4cv5YHhnW82m46UZ5YhtYVvBrCLLTUtbLta8w9KBwqfu79D4tvsh",
  "key8": "5sjyYu88xNUuChhTpTfwCsy8DtNa4Ez5L5fZBLFPyNBH4RTPq9BQ5WrKeN9s2sg67uDw4Po2Gq6HYNam6dSwL4xD",
  "key9": "21tUn3LiBJD5CoWM3vjzsDrzA4hkP5kMbpm5pYZuhKd9U6uzH2G1WF5WkfiXSxyEWTt26UvgmAGnn2YCmacm5aLG",
  "key10": "27N9iBn2exVUpSvpRNARAjLfxCtczwR2VgSLC2aUPS6w19CqCDhWvmZwM7Z98eR7aogwNMnZFua7JH3iVjpS8rCX",
  "key11": "4z4cJzNRNVLA8LbNTUiu2ErRaeR6rZuc9w97tdMuNXW5XZAMem4z2D7zo7N9abMrn68pkYyTNK8NxWhDMy9Yjof4",
  "key12": "4eQgFhwmMbukaNUcRVe8ixrJ2MmmKK8kgzZCESDW24TFdVbGQZmyvAsSWr9dvsJFRdyBn6YvkRXCkrSdFfmagrqy",
  "key13": "WZqBh8tKWKqPrT3h6vRmSFWbAWQenrszLAcmNukW9wWAxpoctPhxdAE3ZijBi7ouMv7CfEPwqEz1cSG9EPGXp1G",
  "key14": "2Svxe5zN4NbPZ5St34xoT4LqsNxauvtEJNpAwNm4a5rqwxeySBWeHwRLidhTWcafBRohcyye9QYuckXG58JuaVoQ",
  "key15": "8dDQoNHxTrCTTv8x2oJs9qoMJwmhPfs4YedpnL7AiinbsJriwnHs3gyJcWRmzT8wzFGVGdAdRqX9AEivi1V6B5D",
  "key16": "2mSQegdP6VhhafSznUgk6xeXRbmUbosTL2qJPyxBEHwwBBZEW1S3KVC3z1mwPjDotJKy81eQWscMYhSXccxTcyuF",
  "key17": "kh9Xma8qy6t8dfwxcoP6NbzDA1GCpovHGNAHpe1vVjQVqGfYsDMvqsSmSgxs4xZqv6gKXgd8t7N2VXH7AHiMEag",
  "key18": "5p9Y9jxHkAmhAZwNgPYEJQSyUWvK8P46DFW67H9x8vywvXYttJzrCtAn9EXLAFuJCTFXxiphsgm2CueaXQVnWWRw",
  "key19": "3LfP1WY28kzXcYiJzs16NoetoTWyAhfTiK7wchC8UngMMomsQWNnk2EDUqPgm3mg5fxWAq4hNVZjkLeWXJiMaPTt",
  "key20": "4YSxtMAQoWtA8UfFCpDq6biZYdXKz4jHNofcwaYhob3yaU92XG4su9DFZd9LaK3y85K3gAq6E57edToeKU18WR18",
  "key21": "4SgaYWbtMt5jyxS2boeGZKgNsZyTW8TbE6Pycuo122x3tMPe4eQ5Rct68WNhXaeZWXpRmZqE9nRBshMTKzC6ogt5",
  "key22": "4L55LjRPS8syVUdZEA3fuXn4ALiHdcGksQsSkcVFDT7Nr54Yn2q8TuPBfYrH6DmTjAmjYoCzRFAFtEqvFddk81Fj",
  "key23": "egWdNFEhkz9oe8NRn7pgnpabG6uAxss78ZqgwB7qvrxAVGAmbHKTptDs9ob6FriXDA4hr7hXU3TVfWG4L8LZM11",
  "key24": "bGL7cb6TCxhowEw5Gc1CmS2tiSxo7aTJYgTo7DexjnpLWgzVtS6pYeD7uKU7ZeqGnEq9UhfdHcpzfggg7KVeZer",
  "key25": "3trWypxBNL7cAJSSpXyF3MecpDbsBTANjddaZiXC3rg4PPT4qW5k75aB9uGgYjPpJreqJKNYGAMEKJGMuSxtaeFD"
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
