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
    "X7sB4dPmcwPXgmJDYZNbxV1NMrZKtrnW6oV2H9Y8rFqkCnWGK8V61oyvni7JoDjHDQeheWqeey7PmjFWmmHXDrp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ys3R5HSK2BADiRoRDzE7K3c4dgd6iz2qSoGGCGAckdsyAiaPaGCBDQ42x392SbETzX3vCHXgWvCD547dqLr1XG",
  "key1": "4FvTHGMwFyyhFoyyJ756GCsToyLVutM9w4bRPa8DTXghAUb961SHGUqUTKAqi89iaiMQMSr4Q1xMwJ57tX6GUXex",
  "key2": "vxToF3trzAEJj34eLTE5dJECwthv6HHBhgYENv2FixqAMCHrvAYxSFZWsrKt9X4AUjVF63jvRuDe5rYvmajKqgv",
  "key3": "2vCKM4b9sRWvACAT2Wd9dTxRVBtNoVG8sGgV6hPFEVo4MD1tgpv6mNMuwoE3hTNras64NooqJq7R4Q71DVo6p7Tv",
  "key4": "4u3dfZ6qsnGsivk6SPVevKygWrhcDRkRtvnhpZbNvR7i2fYbASqcjSWNzXFCFQFJ24mX231uiN7vhD2pxENhANhk",
  "key5": "3JVrEfUdCpJ2nACAJUaGEcbkhgAEoPZtzDaSw6Mg5yNPems83EQV9xfiBrRxbg2oM9AJQNbYAxW3Kzkee9p1EJdS",
  "key6": "3bVMD5EdJBBGiucSHREPw8eLLtRgcgWq2GLaPwuJh9QWiQXEeVi3nbWHE94fywVUwvnFjsTVYEnGukHmbTXP9epT",
  "key7": "4nwxSuAuXygSpKVgb8A8rxG8cF8tgF19ACgcSP6LVEzQM4awEXvcVHBWWzSV8HioGAgoBoW1MxFKb165eKQuP8ML",
  "key8": "3UBYrrLR7BTBL9UivyzGhoFWu7Lt5jU7hekBhpq2WrSGJMsEtLFFdqZNR9k3C8TRPbpkfXcaNU3REvj3Ct28rdn9",
  "key9": "4PMSd4ri7WGR9gvMSzwcFZTwXRU435imuq8mhYcHbK1CMHFdWDpAaxaiuCDNrAiXSVn2WwPRYFJuxcDDLUA7pJtG",
  "key10": "3Rph2BRN23EUQLUAZzBt1T6gCfQXX7tNfDjugqcrK4ZLabjVvXLGcuUVLG2fuWUGFooX423wEXutnjqqKwvkcZom",
  "key11": "33ELmbfKU7TvCuXHcapxyG6xTDXMJQTGMtNr7QwxVbRsPdJbLrJUbbwHpB9u5ecsLh5iwjv3gnwZo3ZPpWEVQhHi",
  "key12": "2QzU3GDbCXPn9ZRWKD8faBpYB4tCM6XhxNqfgPzEgPi8y8fcC8uQqJfhenqnqvnC1gpAdJnMxZbQhtMwomTFCWuY",
  "key13": "DLLmv9Pk1h1mze8j7Rt2JakdxbGE28q5zmNDfp6JUHAjnSUJ29FcPrw5K6mrWP8syrk6B85jRrDeNoqJNGY7UUh",
  "key14": "4qJo5oxcNeSc7i8qtJrs8GRKwj5pY4ASvBu5QWJcou5rnH4RUkHwEJcckZLHEscKaRQqWqZaTpvQTW3vm18ExRVx",
  "key15": "4nq9d6G2EF9Z6S4HVPpKLX2KRbYmAG6BR7YEzbCkUwL9AUxga4ioas64ZVCb1gBUeUNRFFwm9F4K6Q8XLptnbTB7",
  "key16": "2HpzWo6PrUM9sNFVzygD6kzirGFVaAyfNqCKM7HLoQekMuRhP4QYhFZCyHiTBrXQBt58nRznWCAAu51UJy6XdGuG",
  "key17": "4jdKp75aSkuZpqDwZSj9kuypcJ3xhn5M35rncArgPBiD22ekZEUgVwDB9CJMBs4sVwWEz5tAWnSvH5McatjARqB1",
  "key18": "5a11FZEgxyL5vuqHKPeAEWAo5WXufJ5NSwTQypeuqPQsTpJr7bmCEK3PFiv4brkbyhDrF3wWjSFc9t7J35ucZVkd",
  "key19": "2ccnuiJnjSFSLS7Ju9J5RZrxxfxyXq3XQSuc8E73rGLh9Kj3X92i3R65wydVvAWZWPwJnNvteCHfwW3ijoaar1Eo",
  "key20": "PGGe4XiVny8gdRdup6xhKs561B19cxtMD8VuQWFxcDQUE2pciNbnBxVwiWdmrVmknAUzm9yedjMibSqsarWuSpy",
  "key21": "2fxsSxEJmcJAkVj84oPvJc4SFjxDFJX5ssmPk4oMrf2urzb9TPcqxK2CuWkLifsga4Jq4QKcaQ2QtSDS9zJLzzgf",
  "key22": "4MPrmEdMV7VGgmbDS4JhmpeGKBo2deghho2Q42Wj5eyERFfzqhqSHn8aED7n1Pmkof24erY9kB3Ge9J7AToiiHFF",
  "key23": "4KHVSqFmWMTSQpaJ8uidq5tSsTmX461Puoc8C8ePQiEFRuGMZHLSQLeBpH9ZMdFESvKBroAVZfQaXh3nRCBcJRdW",
  "key24": "5Tnq19xomqVw1jzJDp9dw6n5zSnYqCPyom4XKfbSNS5KNvQaUtFW3GfTHeaAASGFyEESLjjXHNePBhRi45ASQQc8",
  "key25": "4p4QKdarh8WZnf1GjBmvjqeqxVwcFkPMBTXQw1QpdTmPoaqbKNujgSyPZdLkuoHw3yoPWTYU1h642mNCMWFoMvU1",
  "key26": "2RW3ciEJhApUU8emUfKFqiNarZC7MxJ7Hv8BwgYy5JQYg96VCqwimEQ4irNV9BxMZprnCvpExQvaubgxLm4aG1FV",
  "key27": "44NWpH8QyV6a2AAEjHVFPHKqMZ13nHkYXqFqBJCvgEzToUP7yKtpeumNEt49ZFKv5f99XhEhfoRFUtq8jhvwsUko",
  "key28": "3k2sM9sxChX9oUfx2kHUkqMxMPXGegMNt1vDzNrvemA5nwF8CY73Jamtpn2hLgfKWctCSiSLHruByYVbHbxKU5fu",
  "key29": "41iXCMLWBKLDhtyz8ZPDD2fqT7ESJhzTEiQFTC6BK8muJ2UYLpx2yXaheyspAvTT7odg44Fvwv29ZpafAQLDMb7x",
  "key30": "4LSS8aTTAPkUGXgszqiyQJ6RKgDmKo8NHyh9RXcpPP74UWVWgDF9vBWvjNEieYMFvgZFaJFNY99U1N6HBmouVpYG",
  "key31": "PBVwHNRZJUGoDgHJroKYNfvToVzQSetVqzLf1q6AE1opp824zMNcfhNVvCAxLzRcmDj6AXF1UDdbfpX5zvLVwG2"
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
