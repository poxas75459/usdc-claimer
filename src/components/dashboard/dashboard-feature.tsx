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
    "39wWxothPfV6VaQdyBq3KrZz69JMmcDZyB4zN2WFPMUZsQFjkzcbESRvTyypfzMyhoicpnbNJ2vcEggEdTTzX54h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kyhnY3ptheprQe8eEwjBbV24V9MJmFZTfMagKdkTQ1L9cfhSqKia1t76Hc7AdA5XqkSNeqSmribtuHGC6W5rMvz",
  "key1": "32wdNBhozQZqUx58XaT2b21ZXTC2txJPiU7nRYu3APJDKpUchbZTpX5pgFrDJEgLAFBCyYYuxwPSgQqiG2XTgAdg",
  "key2": "1KwzodDkR5DihXUYeS7qpex5CQzbtMvs8tm4LokZgYjMs7psEGhyUoMUSXtdVTebp4Vfw7W7y7dzdwu7ZqyYB4b",
  "key3": "3TFUFQmEWxuUJS44a4kkparYQNGtZC1j3G7SahiZDZ6hiM6v7ojCPuEWaXdPj4ppqkHQj29k8WCC1RZu9CmSaTvg",
  "key4": "3PSD2Nu2iukPyxF8bkMj3k1sBBtqpJVPJ7k8Tn81uPR3PN1SCWdguZhQbPPYteKiz7YKb7SMgL437nfP5BzGFBFo",
  "key5": "59xhG3EudWHwdbZ1rxxXoqFgD4WUQXYbrNZRL3KN4i8KXQxcpTjwf7pr2y3Mk4AV4LG22nuqKPyihf7YQDUpJgUe",
  "key6": "4XfJNwvSkgGERfEdpVG7WK87z9rgSoeKoaXonVbcfwfmQyBAKPqBiDo3Dshf38xJUE4ZXVRH2JD7gJZ5BDeg15B7",
  "key7": "661ppq8rXX6ev5mHvmBUmp9A5QZvBCuUSz1nLsg7dyPcBdR2GVzGtc38g71bZEQZ8Jidfm88Vwg5krJmhUee1Nvy",
  "key8": "5wFpu4cqTr6zPRbWYCWz8wusAbweebW5ymaai9N8GheUsKztU3ee2ws4ZfeVxujzkRVKfq6HBHpud8Zx58vScbb9",
  "key9": "2xi6VqkyoKMRBC6q9XjWgfrwnXEbqwKVU9iRz9BF5MCQfwApCyHkCB1PqQzoecyLpMmGAYxKwo1pYGq3aX6QbPkw",
  "key10": "2fN9xerfZA7JbM3sccgCXzxqt3bKidfHJj5877tKJZ711zfV5tuYfvZRf998SBpinsPbT7J7TtojSEuzTXCFQR8b",
  "key11": "6WwZaTQGteVsUN3tQaAqfU1nFBfTLBbRS3FPrUsrFrv88PDxTNUmWDuKWeMACGmeoCUo521EBZpThvQb4nDrMXy",
  "key12": "3kXZxyurJqvVe3YF2DmTrtJnwyW3cxvHVxSLs4YAWmTmuN41LNFjiigzSeHfstdqA9hi2BhS9qkfiTX9WKy3idQK",
  "key13": "54kordtoxhXWWKuXYmEwLEaZFtLn7BckTtuor7oEewmmRRBE75AsL365FCeAgBLmnjTJNyuywyCe4M58QvszkJ4y",
  "key14": "49SSiuGUMBxG4ZobDRmW8eiiJ5pvjmqAmNhxYsg7iyzJUNdcxmzxsGc1vttWCanxwoanu45J326KA3u2GAB683Ue",
  "key15": "46sjbpEYu1APknKmHB8oaBQ9SJSZFfVH1MELUZPhtZTPScfE3JPTS6piZSkc4c8XXnwNBe8AkzcYUbuMdV7KgFSq",
  "key16": "3jGvRDQ6Lyj5f53KZpQNxcQ2BvFC6iHf5vq4JSGcnbtCcvKWTeyHYVoGWvgURHmyp8YmFr9r8CWfEpSV8CMpfCiu",
  "key17": "2sYuVJkPUjEzrN98Qoc2PxXyUVtqR5o39jUDyRbxAE1rm8JUgm6oGmzt6K1cAcfL95VtQnMQwyodZ211e6YAMvn3",
  "key18": "41reP3KnaWGHVNtSm3ENpHrtXxtr1KGF3SjMMSTehUHdyXU5K4nsoK62uToaaSgSGYTBXZTzr4G7P63SWf43t6Vj",
  "key19": "48c1s1EkuqyxJJdXbe67pkooPdKne6LSc4WkNdS88m1WJBFzXBkUSJJ8oE5TG6UH2ShXcPwzAxNweDK1aqJYdKRy",
  "key20": "2y6ju5EraoyDmCs4RESBgNMvaNF5ZyR277QBQAgLTo2npvM9p6c23JBfYadFH7ZhPWXZqURsjALPdpycT2kbCUYJ",
  "key21": "4VQAwxZAswCSSqF7UzuRoF5gfrfL46MoBLSmrF8EJeFTCqpVHAaHmX4C4QFoouiV83q42RQh1i7RqBAkg8APBLwq",
  "key22": "2NXarwV3mMnbayjyH2MUGVuMLYkTmB5YBkkSarou25sUP4ag6N4e1tnkiAm6Fvme92HS4oK3CXcgkQdpsfbhyrSs",
  "key23": "2xw54oBAHNxPuAr4QGJ4eq76g5UqFpLVxyEsp63ioJcxJGMBZjMrgxEEYSVqcSi932CkJEVgUn1bFc1vQxhnhCQi",
  "key24": "5Do5bmDWPRF6rR3LCPKWE146N93wuoVFwKYMArqMJPAb5w7oByn8ZHwMe3W1ajfQKvm9zT8CRa3GJhZ4dFatrW9B",
  "key25": "4AH48nteYEtehbfzKTLjtWBr2drTD5YdRtDyFBpWneGAGWoM8yTXpW6uP612eN5W58FRnq7kMiY3DfgWA2bAXdqm",
  "key26": "58uPofbRX9kcHaXUC3236BJEoP22kMcMSHDpwwte7ejJFYEfVJrkgjANnAZEmundLuF59ZuM9xAdZf9gn4em65UE",
  "key27": "5d8TqGHvesETzbBSXgvKeRY2ZypT4FupMb2fn8YuEoFYuYawBWD5nyqjjqG6caTF9q3oe8eKtLHjiT8oyrC6dbPT",
  "key28": "63APRkSk6ZJELkHD8FpRGHxQwXyXxEsHPGp8pzUeSwwgmxH7kknDQ2u6UGBSvZRYch8ZcR5gyEPMuSqug21dL9EA",
  "key29": "2T7uphv8kWPXkFm87k2BrNEHy7ALp1RqCb4TXyMuHchqZwn7PAjqHWpEwasbBgCfrKajNAktigGp853G6BMHiS1A",
  "key30": "sUKPWNFhwGtD6X7KaW7hGzwWAmHQh4AHFHc8hwikT54xsswrD3sjLYALsXZ1iLSdxsDbbh1dqWpftatqv7nrMM9",
  "key31": "4JicuQZpeb8epSZWtZ8tHHU6Kq2UTM9CSrzX8JWdiY1XmfS1xP21YaHUKvZcWMkAbTuEZBCXpbewHns5gjA3VmHg",
  "key32": "vxGRY4xFqbp9KX69xpy5ALKmP1KE62VA3RT4MCPZ6QWsBUXkwBXdxqkxR3jVTDbUkMbYxLBURpmndR3iLvmwrok",
  "key33": "2P7P1dv8an2fZNophbBUB5GbttSKu1Y2oJWs1JvcrCBGQwi3V7AmzEsRAFyKb8GHtgJKGJZLTLKPwvXLFJnT6GU9"
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
