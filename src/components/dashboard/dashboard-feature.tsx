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
    "2n4LqB3Q2QqP5fJr8qj549qBLnzpH7eXHobcR6NuuJ5QLQMbXSuJDWRXoYofprbQbWyTPegqgtLbFKw8eo2b5F6C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LoFBCuiTZ9CuWHtaWp3585qvqaPzY8199zwKAEdsfdBK44Uyutt1LwC1z8TfgRF8moPWRy3GGBzdzhe2wZqkpQF",
  "key1": "4vJv9WcBMUvgq19gyK98udkdTB9e4hJBVkao1FMjeFtcteds8Kau33UN3krTuvYSszXSe41nEjqorykH9wqQFH3i",
  "key2": "wHQYvLNWR6iaVZaLzqfcmYaHrtHqdi8BppPk7Vd5bcMFTgMrQoWTpqKsv3XwSZLvrxkw63gBRLFdnC7FteMa9Zx",
  "key3": "2Muwb6zudi3mRPB6LzTBcbMMxZGP595r3TZCgW6mZhExAkRBfPppBi3vC1x7d6d1n7T3TQtAAzbXWpQQko6uzggn",
  "key4": "83NSsJKSKAbH2YT5h2x4XhTgj5w73Ac11UDfDitCcaJpX1rn8jteJiYc6zio8Z6TWm3NUVv2q2WFji89fqGBZgh",
  "key5": "4eKuL3HEHbpL38Z7maCycMWuxEgDnwyagjF1n8GsoBZsKC3WjrsdynZYRhGupWB7RdR84gAofVCAnJfSHjocGwMz",
  "key6": "497UCRHexPMb6MetiewTFasEmAH7sGEsiSrWKmqnNdM3q21pQndp6KfhqTbLiA68Xx5nHWxcA9prCCaDbwXJJzQd",
  "key7": "2eiNncJ6n4wxBfn56LFtG1sf5LwAtEzUS3e4EUJ9hguhSLkSTFpqDeNqTchQboH9HuMuT8cWJsYCtKhgxB2F4eQH",
  "key8": "2XZqNmV8Qk46bPgDYnk3RKATirV3LHwi9wV7vk3jDXfRv7Mb497VZoVoFxHrfrV4jqvpiebQVYWE4j8cLLiyW1SE",
  "key9": "5nEcxyfxdsYDjfNxppuwSd9ySFQcXr3nfaaCtDWmQhfDnunmby3uo2Ukm2zNG6Rgz6ps371yvjWRQnjkXHbHFtUd",
  "key10": "5pKRiQkAFpieP5jKBTHMypw453UcsmmkRxEB8rgT6yuzMnxBKjXm3Doi19L1BKHVYxdW2DA9oXrpcmo186JQu5eF",
  "key11": "4J5QBMWXeyQMtvNPFvFwyD4RutqALotHncAKWn8nebagZoX1UUJE7NszxqjRxqxqJMggEvF2oiYKDoiuFgF2DUUp",
  "key12": "45LizockTXEetMzTEo5pDYGxcznDn31CpoKxKdTZwHwMfazr9S9Q4DMixMEv8USNt62DoL2FQCLYdbDTFABkdk8F",
  "key13": "Jd8u8PmM6Mt4cHNir4Mvtfjx2toHnYYXR1bAfqXbehpMVwSicHwVHdPb7opdHPnB1p4TkjkcxMVDtgyd7BLhWms",
  "key14": "3vE3Da5irh6sQ2DvFfpRRdFzEzGWpNN6S2Z8VUNBiemr93f9RKjmMifM2jF2j9omXeNZjTURg2wXVtnympvXcJno",
  "key15": "PvtgfYtrJ8CwKjo4hAfUGaLMUFVSnTdhtnmynKajt4haW3F4EFQ1n63YPidayQudRkX7J7KnDYsd53mCUN5bkUi",
  "key16": "4yjkZ77gQBre6MUi5Y6T6UY1YtHnUJEChJPEoY48W4VeAdtwwhfKnRfSCLdCifQM7CD9rBcQ8cNCrvqshQ6uALfW",
  "key17": "5xNJwuqUC8woSkB5xzL622M4Z7t6ZEaeqTrsb5wj7TyAucyvgQGwqZJaa8N5nBDFuLzFgY23u8QhA69cfurZHQ3j",
  "key18": "4327TbXgCQ12i1vToP64NcLGuGwnmQCqBcJ1M8m6D4CDYYBWrnRctmBY65bmzTT6KQJgoiPAa4Qigw7yMwZzjjxG",
  "key19": "4UYf71R47RnT2avCqTSv4HrHEeRpvBE56yD36HMTMz1vz6MWeGLas79mrs7jU8hwMQGh8XfUPPT11Rvdo4CNBNcD",
  "key20": "3LRFkE9D86Bn3do3EbVF7tufpbEbdfsxVqpdknoYU9yFJ73FSf3ean4QAEYtZy1eiC27iMJeG5DkfucVa1yfRAfp",
  "key21": "2aaa2SA74APXrxTjrcCJt6cwEHMMBuT7dYuuZG2tHabKKUGkB8HFwovkz2cLCapA5ry1ozgzaG8ZUeTozdJR4MH3",
  "key22": "42NMkLXS3v5d7kjmyb3JVX6B52ZW6LrCbptw7Qbhu85mn2RVfWKVzA2VfBDxuBb6E5Jy6h4dE9bLqKecaNB89imp",
  "key23": "gx3247AL2SuqVaM112BpaJdfhGzjXRoaCApdso5bV9GKhUByYBP9iDLGbApsi3pnE6CSN4r78mmscRcLMdavLv8",
  "key24": "2wXhj4Lxkz1HCw4koiwT7ciRzMXUtHfHsmk6jA2h5e5G9a7Fhw16UxAe9g8RQGJHQYiKiNtCRrpNg7AzaZyy2zc4"
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
