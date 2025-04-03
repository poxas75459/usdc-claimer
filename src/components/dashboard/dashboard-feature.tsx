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
    "4PCMg6eD1WrCtzoQBit8LLaKkG4beeeSqgXZZK7xmSiix5NJDtB5TpdGYW9aFABd2zkGxJYXiDu2Wn9Dz5XFRRtz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yBi7MNBd87pwihuFvBGot78AZ2mkcmh3ii6pCYCHSfbu7AHteTHo1TpQJgQdVUzoAaEP6SAaoxbhnusbCMgVWXr",
  "key1": "5bgMtZxuQtJbjHu92ngvfnKc5AhSMMFSio5pvwReZ6VHBAWxfj6YLpoyfrPhgWpBxhtz5rGTqEdyVvvWqQhno8DU",
  "key2": "eDAv7phFUMV3uhLxtFJAuXCVCEXiguftiqxuV7F133Uf55VokdshTsc9rxAvkyX7pXrMn539rB3gA8FhLfgincy",
  "key3": "qQSnomE478r83HqRZwkms4eF1F5aKxysqfPkSp8aExiiQoJxLwaWf35bduLvnvBLDMjVqhSY4XC1Fz5cShB3Bwj",
  "key4": "4PSTGEfGa72xNqVAMidhUjnyEL7SrPNh1doofqdcka5YUcVD69fDPsntVVscE6pvg8QJYTH4VbpTAx29oS9Xisqp",
  "key5": "oZdenAd5wtm3u21bkjz8ihPmjj16ifQsU4rgWMyg9oX3oYKc5wmVNbrGvyk5mzjnVkRQSboQ8fS8V9GQxTBuPnq",
  "key6": "86wXiuuPDgBoiMFp5jmtjTDRqtLoueNV22Zr6XhPEDJLE1DR5DE3GdbL6Rsmug7gv6gw4jRE6Zd6anLrxbaBjs7",
  "key7": "3nesfq3TELh1S3cbAn8yCdSKSiaMGZqdDoDoNfvjf8mnLyJPaS7Nea91hSaBdVEFxiP1P1DKffhXXPDRkukTjCpX",
  "key8": "2JzswQcfn3ySU9EYraytTQCV81qeuwLB2MATz2beyXnJ87irUXqqr1N5sCQwMRC1KRQ3BWUJ4jXrmbdzWEouF4dk",
  "key9": "5aDzRSZdNvfQmqu8trJu71dmGf33qrdYCaHk99wxkzT9KkQf7mcqzatMTJYGSHYGZ53B8gjJT95ug8oWW9iAWRZ2",
  "key10": "3o8fVAu86XHD51pWhV6QzxQvtdanWhszfMRF4d4EvXwWecv43UwfxMMAjoA1pC77dmhoByLzb4xBD3TmMcsuCPYW",
  "key11": "49CUT6zsRpNaJbprrhxxb8p8iKnxSdges1pbSavxVSZSj68JYawhPcgziEGFiBicMAeEMcz4un2SDN2QttjDZgEZ",
  "key12": "3kCFciM87CLkNWNxJqrW6yipsbkznUHjVAqTwpR8ZYZYaWrFDi1piixPH7T2X5HXwCnc4Mok7bB2PA96WjxPaBYs",
  "key13": "2KtdKMTsXRX6HZi6N45Tdw4KKJQTNbW6vZ8V1PBm5dADruWA5tPcXgafxAxbshauV4j2J2hSS2HdfWaakQxBsQLn",
  "key14": "MXiqck6KQoLaLa3E82AHwBNt7VQuJ82dMV8y1X4KLitXFpU6Z3vbN4JLgwDE4S87x17ZK4X2cXCgr2tMBTNZSSn",
  "key15": "5m7aDHRJTCPx8tNKeXmTPNJ59pE7sFGFJGPBFq1mEfVFpihFTEgeKk92ZE4pPQYdUHU4XkTsBK2EyN48yyAdSLMa",
  "key16": "X4YWCxwZpZ5eoVoPqLpGRuHuP44wLMAWfRUyCRH2jjjS6yf3e29s8uNdU9oG7P5L1aUTa4zjw9CmpRUmRRRQfRf",
  "key17": "3fVgUrMxHAi1ppycgcxdkBBrf5WxpZ12pJcxzNCkK3rXXwXv23JrtrEwiwDWjm4ibbPdygSKzW2B3NF9CHRbYDBt",
  "key18": "31inzReiEXiEHfyF3z4rnw9g9m4nCpjmorETh93FoTwMDujh4i3dDb3xG81uHZoBXpXvSTZMkdDx6uQCs9k4Xk2Z",
  "key19": "3niiF1xYCA5ZD8yZVG4tpS7CgwQ6rNCKb6RUgVVWFLX4YtMhU3RyG3y5PDaVHaWsyEUEnfX5bYw9fzusw3fBLL5v",
  "key20": "4LdxkWJs84PjCjbcVyrWoa57a3XnMCSuB5YgrgtR1qxHXjKP6uNegER2z5EB8GM9AZWgXMiXa9b1GRvthQEYvJA3",
  "key21": "3qLxCAw9EZ85uvwSzyH3rkSJGtERPeTwBBdVdDrsugBECyvahtwzNDE9uskvNqAhsg9m4EnH4RRQkfAea8JJwUKy",
  "key22": "2GQszaEg4TN97HAispNvPVtPcNz2hTKnw92nFKMrHSuGxsp1KLD5fYBAWvc8iPGTp3UKNWpdv8Q3GT3oxiWL3c1L",
  "key23": "4zp798P7u3HozWUqRmcUeSAXAxRncmBTMistzjWs6dRPpQbwjXsYmhYk3vTvVFsucgiZvwN1BVu2JwHEX2rFwn5V",
  "key24": "39cpyLaFW5vbWhp5pyTWmwkztfszstNc4nX5jrVe71RFTptDb9VoSuyUcNLpjb4aEYaDQz52z4GXfgKqxhzV4wje",
  "key25": "5qcoGiWvT4217EAAB55DPd5tQZgbGgTiFKvrzsFUv4hEgBrQhK8hNQtzfPzt99tU9kauG9WPgDmLn17J9amaePF4",
  "key26": "3XDawh8ZdcxUoGAHybEVXodbtXu5WTgYDYi6Dx8aJ8ptxCBPaf2yhtWmmMjv7QcddojFV7cBw61Db9z8TPPvELqA",
  "key27": "4xQWFygp3PNsNJSyEQxTTmDfFoieJWwoHYD74pP1jiLZKsgX2xH71J4UzRFFxujnE3HieH9iRYd2ZMofD2wpLoBP",
  "key28": "4LBuV2AkFrtjeaGbduka1FRMNzCpiBKZQnWVGLYd4ez3515pccJ8QedhqNFxWwzRoXHVNNzAChpQ7aJoLDRzdzvN",
  "key29": "nm55a3z4MwsEieHzRpg63JjH7XiqbMLfWmSs32sehTcMJnA6mXqyCsp1bHoxgoVQioC4ZLcAkK33QS7qqtJtrLc",
  "key30": "bpSmXHSHg9Fpb9Wr3mKRnLWp8cjpNjyBjXkj8Wciqhnmc8em3NRY9nRCYYTL6neciUpkXu8A3nvTnMTvEzEggk5"
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
