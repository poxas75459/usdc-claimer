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
    "4GNKjMKsYeFf58htgP5xNxk23NDbVpUHgv8RfZYjMeiRocfpC6N18YD8SfNR63PQNktii11qgFwhECuEdYExnYJ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aQ6paPRce4iSje8Br87vkEedZL53qx3LSTzwW7zEMhwmxP7JXaa6FSfF5w5rzzazxmdXi3GeVaGdcRrSPiuffmL",
  "key1": "3ro7u2p3HRbCLFWT2x9gsvRg4DB3UovfsJXPw6xdGaBiEXcQZ9oGKHd6WvB3Fn8sZyRZ6fQ2awBvqKePwWd2sidf",
  "key2": "VtFsJLKEmBWjLNvGmtmca9bxKG9CK5KJhfH6HgDjhwB5yfo2cDj4L6eMHiYxp1sxGG31dytHDzFsxmLsUSMXTGk",
  "key3": "WJJGB3NvbwvkxCGHpCbr35zdjPSYCJGpaXZQWSZGNvGVUxTfLYB339AgaNoJGcY4PfwzhEfx5Dx4dy85H9EWodj",
  "key4": "5V5FB7XhuwsPCjvGK2LsAxLYuQMQA1Rpe43h57W55kcseZy9q9T3tHaV59LQW7Zsg2k5HxLwdTrgSWkQDXS9iCMp",
  "key5": "5MvqkTu269Zmyk255nXeUs22bevCRmd2SmL2peGXHA4dAqyvessYCKCnhXoJQRJ5NauMsb71iasVKBWZesVj2BSz",
  "key6": "XqE7mQobixSPadi7bfYcYm9SpJrYWLphQNFvKuBTrCiVL3u4ouP6GSedH8xpZsuPKoitf3DsnapMcZ2CDwoJ857",
  "key7": "4E8wbeAiYsyG5ee6VoFuLdDsp3xN5rPaW17p9k4SbdgFD98KF3t35LmoQFzyR4ppzZEDdeNN9vuD12L7LuexQ6z8",
  "key8": "5CunmwUFiVZ55mtptVKhGFGuuUNgNQbcaSx6yqUReCGZpjc4tVACtBcvyzPKJFSkZF8E4WgzKeNQfUcEUYJVjerz",
  "key9": "5J5Cz3JJAsQpZzDuE1yf6U8TajYcHQQnmdQfTR5xUAG36pfxH7L9f8TGsV8hFBi1Zi8vhBay8Whu8La6kmhkQBZL",
  "key10": "5MHvjbncdCi9tMK4HVTfxFHmJZZo49p7r5BLCxuVaj1pWqvMKc57iz6QKbVeTuKthWqUswYwt9iabWbkwW7wVyTh",
  "key11": "3GBVyLrV8bauGhV8RcJU7dhht4i1rDLsDZAk1SNUUtiwMoZpQoBQNrYtML3gB9jTsr8cteJ6JJ8fUxmCDToUmWjw",
  "key12": "676Nwj9sxKdRwrsDMsXXzC23mdngTaL4UCS1L27rEFUHptMpy8qdr8DkVfoqLy5G6rb9koU2rGxKM9jwJZ4dyTRS",
  "key13": "59tUcFNCAXMEBsu22hJmj8RC7oExqjq6Zdxn5vyqkqXLTaxYneTELDtzK6z9BRD1njvWWvudxdmY5ntyGgQ7w2cj",
  "key14": "4CSg3Ebkis5gkz9NbkCvEPHVrFM9XUvwCCgiSB5hQQchRV1YX4rC3Zbd4bqshGSToEw9M56dSvpFdfpefZLV856Y",
  "key15": "5UrBicoi98pEn21AXwdpW8M66haSC3zmBgwgA17AXBsGSsL5adD63SNARV4bhtFcZT6Ai9t3w3Xk4tFoHZ83Ufi2",
  "key16": "38JfQwf8MmcP6L43TkfmHKqHBxtg5ZCPA529EVsGUM9oe5UrMQCQ3TtdJnnmai6SNJNxdBbkNfWZ9srCd217b5zg",
  "key17": "J4uNEyqbCaPHWEMSWeF1hJJDabmfzJ54Qts41DnCNQ33cdPiV6TGCPSC9ZKss9LsuUYHW8yw4TypiXw37CqYRbk",
  "key18": "4rQ67e59UBWNCYRaU6n3rk3zWDiBvhvTchMx4zCqHdFqXvfcV9VazEz6oKurfcHmeDoX6ebYp9Fxz7WQK92RXKxJ",
  "key19": "33n2qW1pwjB24pZR2BbFKm4AwVrZPe8pD9GDPMnTroz9P8cVGfGiG9qSThtV2XBre9aMNkiU5rHbfdeFpVBRPv6t",
  "key20": "3TwM15DRGkL2XezbjhGYb91xcz88aR56VVaWK9F27hrkdS1G74CT4nopbA96epCJjtEvtUVTKEb88quMns29xWsv",
  "key21": "2P4sbK4gT7hEnkf7jnXRJDA29hFBFm35tGEpvREyf2cmmABiN28LzqjiS7WB397VB8Lois1X2zA1reR2kUH4vDM",
  "key22": "2r2LyN7sSUqMxMDkvFPhR9jw57W3pgvkPyBg2PACCAn3xu4Z32DJEfjWbLz3uU9NVbuZN2JNi3JnxWWtCDBtEag1",
  "key23": "4PHxbghuNHSBY237DkDfqVPU9NWrovVfMBUqUamdHjqqUbh2hpQXLNNnhZPA1kbAVayth43aFaccmKmAjUuhXUxy",
  "key24": "vmJH196CcwyTCmm8juqPJ2dLKbW5ayBaUg6XDSwC1Vj2AHrQ5C9rk4W7t95AT2gvT53mLvcgXK7c9pmvtAuMK6j",
  "key25": "WLMdgkAxXtZtfd9fYbMRoecnvsNWRS6ipCas6RzKYPPsHF7pUHbPM11cnGVN5iEX2A6drA3Nbgrfar5pFhCivGo",
  "key26": "2mkq49AQmzMbS63F23Qb6KutfKC4wBSrJcgkGU55KpN6YnCV9QpPUDeS2hPparvhcPi9aTeSBT9WntWQiXb911U9",
  "key27": "2wd7NmoveafJtdYmixy71KVjuTxJGEQLL8rcqKniA6LC7pkgD5eJms4stueKRCTXQEdHJpK5cLDvb5EBxgGtSj4d",
  "key28": "21zZWtPPNosuSPBnWohpDgAdRT7CGmArdiJLhabXpifhok9t6oV5ouLLUovCqrLGNeCcRsauHiELeFmYADxo7t3P"
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
