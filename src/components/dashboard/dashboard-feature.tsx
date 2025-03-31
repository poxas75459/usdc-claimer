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
    "278r88Rzsu1JUKUPwjhk243m8CfaRHwAwVWdmCXFSfGKD2MwvcZCexrYMCge77a5CeagMQCmi363aPCDXTdSk2vh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AfJaM6WAQiR5pb2HN7c9igSQKE4RpgGacWdfeAQiuMnhLVXQRvG2N9Gq4bd33RjyYxKNCAedUaBmGXsDRdx514n",
  "key1": "c2evL61pegF5b7G7XZccrFKPQKPTZXoA2zwoXaRyEWj1zTyJ3DAFLSB5AJd1RajLqcrA9a2tuLDjja8qesgkFeK",
  "key2": "2CkejYqJDRAecbZuSL7kZKxtG9FFcZJYqbu3V4WGAMAGRfe3y4vZ2mWriNW2ccLVkSNRxnjbSot4SEXQ3K8DJCTM",
  "key3": "3U5HUqP8upMnkx7d9N6rnzxSDuTUps5hTpaMjuRsyS1RryKUCqhbSBu25f7DpenQoDM6Kw6fjiQ6gaqJ9LtLwsMo",
  "key4": "2SHLjCsQt2w2r4SpajXas4hXWaugS2PH8Mx1coK13CUiY8fpq6H4WWYZtTunYA5HhhjajWSgJsKGBaqaA7t7Ri3G",
  "key5": "589MLbNbCWXQt1hb5C6Km8E73wd71EW8JwKsQQd5whadJVVPfkHd5xMLuZ1mWWBivExdGdDMVJzTRbpxJ3E8jtBf",
  "key6": "2LgqeXwVpYdeWWqpaEmtNpKC3LUjwEH9xKDbkARopiZEZtSc7x2RgJSAsBNP4zKg5Jm7hqkwBzucMZUTYQPtj9h3",
  "key7": "Rm4bze5UB4vUNiM1oJwtMrezxaGLkn6D7kggnRrF1xLRtetALecf7JguePTmf2UPfhVcvZaC5AGWTcSk3DT8eXG",
  "key8": "57RxeNKbH5z8HWVrZG4yXhQxPiNJvsJXgxEs4ZfQ9nPkyve7JDrtbKCC9m8v82pShMRiRC2zc6f698rY4v8p9udM",
  "key9": "3GGyHzrTRGceGAgGBwooBxgW4S56xVf9Tu1R7h3QP2PyvbjCBqiUgebN4JvEYk5QJef5bVcCjs6G8FhgPUatA8yr",
  "key10": "2vnz2LZGPFjJf8DL5FB9gySAyu9nS8Lhx3DGMMoLbswPVAfhtw5RSiEXQYM2YFjxdgKFgY1KrdwBPgQaob28gwE5",
  "key11": "57tc4NLQuzEJuzaJhFgoB1T5okUeqvpByktW123WUrcgf8Ux22PFo7iLpM3iaxPEoZcML9hFUAuLq17gcDSxcY3T",
  "key12": "5LNRBYV7zxJohRJeCS1NF4JmGcKrFrr53MqBz7jKSZKFhuVLWmYtLncm4C36w7RMZMm3zBu6duX4kRYss3hWCnbx",
  "key13": "33YgwybhgJA1cAGzEnhsxmrAeWJEeXx9GWLfZpoVRN8RU3noEUpf9xBndb19RUETN8DZuZVv9Df59Y3Ft8pnRR6g",
  "key14": "4QaiEvZ9GAGcQzJ4uoMRnncwp4RcXXrCCpDAYhyNH6tLEU5yyQpbg2WkZYfTrWGAhMpNMsG69KWqCS1iSmqhxVPy",
  "key15": "3Cg8ixQhoW3z4nyVQScHxg7qE5opMorsWY8A7BhFyY1bL3vEDbHBBf1231P6tAhprqBszHukqYa8BbrcVGH7KUUR",
  "key16": "DseY7PCvu5kiUnKPWqzYCasgXvUVsZeeNh6yRzsdQP8GhuMjQ3g8mNidEhDAcFYTLdPTX3ji8i43guCX6PG6eZ2",
  "key17": "3hJ2r7SJNG9fR8HbXFbQkXTqNdUUzorY6KjvpDFR7sXQp95KnkBZAtWfPGstw8PrPgW4qkMzjBmzu4yPAhEoU7BZ",
  "key18": "5bVseJjnZpuF1GyhFt2BmtYbApdX3WV2y8nXaEK3vv3YxBzdBh56EwwuEBTeFrg3kSz4HoMggfB1eiyuqQhvH2tg",
  "key19": "4jscuWgpysXJPdwL8cEn1pGhw8QRYEy16ezwz85MRhqqt5G8bGoYZQm31ZYdvL1FmCjkbjTNvFpwiRosehuPVsmu",
  "key20": "7iS77mhCWCFa2m2uj2E1PuPN2BRFc73XKHER8QVnbzq1mCRD8TKw69fQYg87hvbj64sbKNDmAe4GLQgUcTza9bk",
  "key21": "2AakkvmRb3ZLn5aqGVMnCLZGW6M4dDz5XDMeTxwvywKDpKy2oxxxXwULT4QXqYARxfuKcKX7z3c5F5hGVAcW5KJ9",
  "key22": "4s2LKLaUR1LnGTDec2vvre9ArR69TVsA73QnUmrZtAdnrNioqQzbGkh9nkrfMcXXerCY6wn8ZQXYQn5on2He1hie",
  "key23": "2etSZbwPnaF1NDVRK5Sfx4AdTNbuYkc7maoFdNqtcbNB9QAwSWn6dTkRYgBFYriFFLvHexnJAMp75R88HLk1cL5i",
  "key24": "27LgQJKposjfna3WwhFeCRA9mUPdTeM77SiuPDGJ5VkkzCE2LPPWhtAW35AoK5bcNV3yJmfqSxNHSpr6WsARrB1U",
  "key25": "4Rayr7qp4F6Bexxjy7wT5CQhL5LchxvzK1gBTNXKHPu8csvQuS1VyajcHdmydJgHrtK7G5cT6gpBZYhn94uuBXfm",
  "key26": "4GwstqrXPT3eyYQCPhJGzDW31ASVYeAxTqLMEVrop2totBYvbxdzRMfaJrJFCRUaPq6gC1Cr5XjoWL2ZWtGDDJ5r",
  "key27": "p9bTNkapuPVCZ6gWv6ZSG8Kp9TksCtZbNNgip4SLFCzdWPbQsu6HwgFMu77JNUg4Wsj3NYBLcQTap93t3XDsXQ3",
  "key28": "hEkW334RBETfCr4grctF9YYUtAAfYYXoBE4JxoWsPZBhzvK316dsWYgenAjHAyohubme7x6zpQaK8CJpGFokXnC",
  "key29": "4nKWMVEvJYyUgXjHLRtxYXp1VWhpUdUjeSsLtvCGzcf9XvbDcX81mjiNKGA7umPGbKK6phnjTMLoDpxrQYLdDWuR"
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
