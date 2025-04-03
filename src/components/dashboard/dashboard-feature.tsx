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
    "2YNtAdYgnHe7z5VRXbNWvbHiGHAmcPpZpV2wKXAqicDX8nLqtjWDxGJEbtwHeZ35kwKrp2BAwfBZfDbMJu6p8zY2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5beF6zDjDea2DSShky3waLNpspjxpJARxUhtrB7kxeSpGPvToJQczkz28BewT2nwEzBSVJQ446ZxCWgjq9WN4akW",
  "key1": "55QrdER8nKJ2evv2rGasV3DdDM4SbCJRVovzvXfVWNWsN3Ad5595QeeF23qW4G3uS1XKkWsSs4awMUM19VVTFvtK",
  "key2": "z47GESAqezWmic4py1C6sW3r9ncpLCuqZMQQ4ynhdV5CorKo21MPo3mVWCMUW2TYt3T66d4Gf3HMqjq9CuVdj8z",
  "key3": "4AnkY5S3XhQQiLjKgJyt8DBBbf3zF1v4DZUgFe82SQXfY9zAwCDM8mUh3PWeMH5N1myhRvJje8yrbQu6q4c1V1Eq",
  "key4": "2A6bs6vVGqAZUDxRZTsu8ApdosVtXCwshypyTjrb29wQajfVfNCinZkWKPFbid6Hz3SwjnNDK8cW2QoG8D6b9hcc",
  "key5": "3snzLmdAUH3PsFn89x2CpVChwLjkvoaqHAHws2BwinE9FvtyP8oK7rpwMNhqRCoWfKPLYyX5MgeYEffvyrKc4L7X",
  "key6": "28gGmbd57yEqTXKWSJ8FbV5JFLC2EwDWRgdsKoXGHG5F7LNrRtT1ToNR2SfqDQPPRcbKSZPA8g342SDR2GExF8Ah",
  "key7": "42Yjd1bB176QYrQyYcRvAgX67UgDiFUT3BECujiKteLxPQL8EU7MWwEuu2Fs8x8MD3rZUzpqBnr5yPwfiGxYfXP6",
  "key8": "3cJ3gHPqw3Rkx8LXM4pMHz77L1nZEJSPYH6jQ9Tfmy26q4uhB58BjDUBLi3A12QLbUwKc7ZjVb95KmnAQCy6DVgn",
  "key9": "3YmNWENy4K4qHpy3wshcoD7JcecADHuFVa3vLdVb1KpAbeCUYEE2rPFaaHgjiWRNHBNFLggKkD24xCxnuj1WNmEF",
  "key10": "5nYbNV5Z9cCXGTtTDNqz6VrSZPxDJTDq5GX4FpuCcvJLcexhbrsqD77Kqf5mPNCqDHxwxdgivZa1XWDufu6bGqn",
  "key11": "2aNJQHbgS8GfjcSoCuhHrojBg1TVp4nVHjmYkFSUFuesZ4xetfvtfPGzZYPSHWj56PKDVQZRdVukMHCPAPk1K38C",
  "key12": "5xbuk59kK58eQHXWkpr2wqCf8SLJsh57ALHpmiCK9QkrKQ8evYpbPrmkxiMpnwjoKecrdwbthd1wGMc5bGmTX4Sd",
  "key13": "5J5tMSt15jQan6HSgjqk2uUg2JXHJJMf2x5GdCosRMr23HFkodDzAiSB8gPRPetxhoYzb5Ph2x81KpybHNSLR82v",
  "key14": "41AwSB81nYfbxdd5yyChPKKBHDJNhfRsSqi8ZjfpKKssQZozvRUjnmNp4HSeYxuWbZrQJeq7CgXFd5eG4eZv4E8P",
  "key15": "Xj1Z5jf8Q17UtS9ie1DUQqTDjebJn6ARVCXjEYX4JAskfYGS9UVPSNWJ5gvXiZVBwyMKuNN14eBEUKgui2fkKsx",
  "key16": "3uY9d9sM9puAJAscNc1wQW2RL7TKBjLEa1E1tXws2SHgBY96ydwBnaXg34ocrVmfv4xrPYouDXd56JYM3nEXR7qq",
  "key17": "4YX4pEvKjonp5T6BSUBAKoHaRR9SgXBeWLtb6N2smNFQ176stNHnXFM5FBBqD1mt3qVd89TWQwEAJ2cpjoUzSLMg",
  "key18": "3Zxc4q53G6VWME8ZmHovAskQe9Ux1K5hRoiygDd6BE72fT9pnFfAnkuqVQjXrgf4nRMe1TV83c2uMs9KGzARpuW7",
  "key19": "3FnysEhUfpfr4MEHm1fSUFaUvnN7WrNAJS4oxxnwmtmG7rPUhBvnwniBe6eGkfNmH8dxuxt7imgQQNtrCfnYrGZA",
  "key20": "2VTte4CwRrkYhJwrdo3kaJ9u52F46JvTsUvsDLCPCYm8MtCSkFbKgNm1tyzsBxATL6KvVBFPns1Y4eXX4av7d13u",
  "key21": "5cuUNEPk5PUxXrqX76C4W1Q5sn5vYyH3aqya71yi7tQYQ7JjSGhWqXtPmjfBDBV4Eoojf1MxrKTq8tSuTsxZBnAG",
  "key22": "54KgwD4bcYNppGBksMcrc3HRaUoWQBbyPr5SVFxTArWQh2EgVHhCxY9gt2GQBAWuCdfgf8WFS5Lc1s2FKSQP2Fqh",
  "key23": "2VamZcfsk3WrR8a1JkKmJtQTB4EaxpjwwTxCNEy9bEn1TmM6bJc9AaksaCTzWxV6gwXYD68zEcN1fHD6ewbarqgq",
  "key24": "29KPRG1iRhYvwJLbGdr54ux2kQEFitkmAbDLSo3uxvD9s6QWMnZRHcgGRWTq8D6jFuWKcESheBRHXc7kvuYinT13",
  "key25": "4hBSsG3uRqnqq8JvQiSouEGbfaQKfZAzonPL8kLzU8NHizkqX9snuWCQ4URo2mgNLi4qZX1vbTFYbLbG32DCL5SF",
  "key26": "4xPPWJAWbr3LJ4ywAEBfwzSH3rzvW9wqzmyg8GHq6sXPGLTSwhCMRoG8bmf992Yekq6WpeZumduaSmJyzhVHjQpC",
  "key27": "Xd8HGPkN99DvWBbVQeKkcbnGbmgVFgmVee4Ln2TtiKC94rKJXNCtuKgchXXKw5yDAFvLnhjTKrXRVCbX3cG87bP",
  "key28": "4KDGD2HMGDjYByfi1dL4pmHvX87iFxA4Vg3wxLnc2kSPdJYTaUD4Benu1eJvJFecEZr1iWj3JNCcgaUBx3WKfCEX",
  "key29": "wSzAyQ4LXafPqjZnVoAJFqG8e6DqekAQLy2SKTDXTW5YYmvQte8jL7e3TTirt5vmqxnvE4b6TCw3wK6DKAja1vh",
  "key30": "515dbEtyeZCZj4rnLy9ASauxkjJue2WBfgTZ6mJEEpQVM97fSy4R4UL7SVYRv16hdZjeAHjmYK5CyBbPHVXKswQG",
  "key31": "65cNx3TUZ67h2aE8KP2n2tr9PKmcfmD6X5kzRpTDRsgmXd9ctnADSQPi7yzZM6GY3KNy5zG4q7uPattDndACNqLn",
  "key32": "mCfAuxepzVFPwihoiqgL8EDDVz9M27pERWVfbw3i8bWfCevJFKz7Zt49A5LpvcsU6BtiLf9imdiDaJJpAD4eqe8",
  "key33": "2BKpZijbQ46ZoJ2ipd3T28UMLGS33sapgkCk5W1qtmM71Ld2Sahv83erkMpDSYpN2koeCB3DKTvssTXBwo5Kj6yJ",
  "key34": "3QU6tAn7UPASBfyzhGdyGtbwjuTsUvqXQa4aDzsN8xz2oGhTmgjQHnDSWjKNRwXjibDobCpjnhbdfmHq8Q8pXeF9",
  "key35": "3hKC9dgN9RStytHkngqB2z3FYkPg5rurMciCjDxbFK1wvH4TpqaAeB991VZF4D14M9YbUH5J5EkqfQZKzWY46RnG",
  "key36": "V4QcxBTPY9fpEMXFTMWiVNAJ1DXoMFgdcWD8fJssHqEDUPHk5cf36DJHKw7TXhXQuW27d1TeTyAne2Gc4sVnXzX",
  "key37": "3DeSAPsETKSRVKykimsCJo9qLGDc4aXvLmdzZ8tTk3xQmBpakxwHDiVgTo7TcNsZEpjt2ZFvXXT6BeWNRtkgNVUF",
  "key38": "3uBLpp57Ewg9phZ9xW7eJGE58gq6LWxTTVKNZmpWSNCaYowo9L77DCbc7k8kMmxt9M5Jmk2Yj4iAz7TWx4ECAnxP",
  "key39": "3K7ZvQRfazz6qdY7auWEhvgrMmdC8dd8j2RWHrxQqUVuW6si3L2xNf5E6DML1GzhMA4ePaFpkbyw6Lr5Mxz2Zxi1",
  "key40": "3qyUPHhxERawvTQf7Ejcz4CnpR3P7vTKoS9xMbo2G7mjRgAsYgDrkKkfHvASPErBAqTTJ8ZDA5v1J8HJEWAnXzeK",
  "key41": "1kGFp2L2Jgr6f5Pqdg5VVKQVsx9jf913iBnXhox4KTxFB7rD8BUZaXQGSMgAYZ7AhUCs7BVYYsTd3QzKmatKP5y",
  "key42": "2mgNr9kogFWUjByT6kSSeXFYEFbWtEr2f1cUZuV6B3ZG3ukgVRPJ3tK6963JkroTwi4M1iRHZxqC54UGEbNaY6kZ",
  "key43": "27pCK73rzVVzHYSjUp2LUKMJweUWmENoMSQxfwrehNdMBY3p8zL5a5tQF283E8HWJ3WPMURgUW4hp8KqDjYpG5SA",
  "key44": "9W4vrHiZsCPewW6HPfTY1rZhP5sRMgMFjSXVCp4qVw28kPMcEYkUouB7AQwwjdppSy6Py1XJN2n4KMfnedxt87T",
  "key45": "3faSTCba3ekrpbNcwu94QAQLW8JFBD75AYedyPjusVEDFDYaS5y8Rbz3CnU5GR1Xot5r3z1zyaf3hg89RYiR84Qr",
  "key46": "5nYoNuvLNmmvG55WrE5YZHZCBvu2MKabx4A3vB39nXwmRd87CfRbehQ46yKeDWUKKN91kdoQswDqWtgMmrd99x4n",
  "key47": "5oSRWsBjuvGtc9p5QZCNJGMbr3RFPobZQUvg4nnPUYExQ4n9ChSbzxtrabc5AfkJ6evTsWxGNrfM2Z8nPZK3VAFn"
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
