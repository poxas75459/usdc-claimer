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
    "4cUMxHpb3ouJ7n5umyE7HRHCsdnzfAdqKaQiZqwH2UhFFzNgfiNrpoD8ULY36CvxSek2nHmGuHDAAwKbGJuShWt3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uo2bvBMPUieVhzuWfU7LyxygAGJg5SjSsD9mKVyVxVaycea5Jq52vJWSRoB4MFHopY6iNWSRvd9fijnMrWxsMw9",
  "key1": "1GJGpzAx86SZrRRPAcLBku3SEXi3noKod18zASc4dNBgxXPnxmVesDvYC61jVRWm8YnWqiFXW87BX7RHdsM2Q7s",
  "key2": "5mrcTcVnzTxCjrwPJf727eTySH6b8ZHoWnHtwqGLFbSJgnYPZD13FBEvAViK8hMCSYzRpf4XBLKUcr7mrRr8upEb",
  "key3": "5ngxCjQLWbsosWau9Cc6EDaXt4sBseBw1A1ct4uAEeXMfJiVeHEh4vF2TNWwTx9KfC7KRrYUeq1wAnNRtEFUKeQo",
  "key4": "5zJEPYQcYmxUf6fRt9eE7xVhdR23BJmuBbq8BqJRzmJnbjKzxfbsdjdD2C3Ka4foUS2Q9RqCotiC9kixChy2QhJo",
  "key5": "4xWSUwh28chYWCSxFf8BM4PcTQN5JkqsM3XasZYSYsF4qh6nKdXjXct46eRGMD1ZRN2kpcWjAduRPQgPDxc5sGPm",
  "key6": "4ivvsGVxsWn5ymqQKqMauJzFLowzggK6S2B53xMzgumutaBJZ8gAEsgJucMibxz7esQpJY85NkDrjPrSPAmu7VbH",
  "key7": "3XaqtQH7C1USB4GkU46Hk63jWGirEyCpWs4RjACHQ85XTyGWpjgNK6KJWV7j9XHZhVBYrVxyRS7zishmxvx5oDV6",
  "key8": "4APkZZf5UdGShetmzCwpsKjeMb2Ffgsr7ApbZTqHiE6bvn144EGU49J3c8RingG5TVZkwa1m43KuHCbgJ8i9Bmj8",
  "key9": "59crwbMAYUi8HryQjsNsVV5JVRYNbfgPXFQq5MCeJDiXZvNFjqVKU5NKdDTsV6trkv2Jixkf5LytTjfK9HMcjTTA",
  "key10": "5Y8neEkfkcrtyiko4EwqyhGZAU7MNpuhUmSUhWuHwejFKPGPM3zF7oDeCjWfHKektZiwMhuJ23HFRWZBS2JNcPef",
  "key11": "5djrEunCPJrp4jxjtM51XvkuCEiXXHD5kwfg2ph2TCWyuFdxQezLwnX7jB5YtDugVsCBV5hinp9mTeLcxducQpNf",
  "key12": "4JfKxYFtJTJgLwejmQ8zW2864ZYiw4HoDusSADxXCtHXsUFkBRjoTiSECuxX8wf9ZEkLQ3AW5t4uQYU9AHh8pJYf",
  "key13": "5mzD1v9otLauLokiXge2ois4oXeGWB1sKabPkCbQJBrDMEzyY1nbowvXwJjupMxLCdNGjezgJHqb3W4HdjWvBKh4",
  "key14": "3SDgfU9Z2js3Ue7wHSwDNAbnya6ou4GHJsNxDczAzrtzRP8qV9MTTgbLGUtk5Sa3DxGH5dKypB3gBbmrnHmayDdM",
  "key15": "4QyjgWXMH3GgWJYRB9Hus3Ygq88azzCKXfvksToQAVuUt8rZY998HNqGgre4h2JPjVZSarLGxKxAeq1m45rNQSqz",
  "key16": "3WiUHSLpUTKq1gPFAzxMzmYS3Su2XXzfMeSE6dEqtHddEC94Y8wNCwvGS8r9j8866c1t194Q1JECPnbPmgHuADH6",
  "key17": "2q8RHESu8xfkhijRxjPRxo4XhFyymQRTwyRH3x2NDhP95mc7VqzrfEwyG4dbL8Dmejd3C3cT8b9pXWV7dAsXmAap",
  "key18": "CUpyZWcd28PkXGsJQRKjwjwNXVSnhB6QLmbhzrHdgzj1Y3zXJ795ooai6ktvJeaRZBzJT9PHbVAdxbtnNQnenrd",
  "key19": "3yoU49ALr2PRWtFSNbizEyLnJXB3fayqKPoZSNhTY3dommav9f2ghD5VXsRQTXMpDSXJHvHGxwVM9g8FsXU3sD6p",
  "key20": "26Vb3cqkzhTayTCbLN7CvXEusvE1U5tKtrnW6qvauMnXhDrt8iNUKGpgk5TRRgnr969frprCt1kvMWmxLcuexd7h",
  "key21": "3WzPkAnY8ivm3RKgEWQyciK8yW4soSbCzz5XPmAvLDaCQey4KpaJ81JNSSkYKFdShNUS1kgGpbZT1qdcQcjMWt3K",
  "key22": "5dUSrN137adWqxNNjV7zymUHgoWh7SWc2bQhuMzoDJ44RUEvD2HBh6dQBuqPqUA4VvHzroX2t9wnuNacRmrRRjNG",
  "key23": "JJNQwADF32HfUwhK2AD3WKQMR2gD3HLN4Yv4xTyTRF1ytDovdAUyb16Wr83WczhDqGJ4bB2DRvmCzEyKLgEVGiE",
  "key24": "3gHKeSj9UtmdEdCCexr1R2bsyq4VrdFQDKTQvRPoMVxVX7zxtfw2sd2UBQLHxeBeszMBANzb3hnZUFEqW15NtARt",
  "key25": "5xfUmisD6EMFDuZnujRFzskEvbjw7fdZqGVFerK7iHQxy1nTgJ7jEiFmcsZh5jSxK9uzdpPKuN2X2zaWsb8zypV",
  "key26": "svtwuDq4G2g8koVoivjqPAu72tHQxwgVSSjU6q323PWhEDpR1PCj7Bh3hrJ7U51z78aR1TMnCUue6jZ1WzqxZBA",
  "key27": "5JGCkCiRfpzYA3TtHX7SjX4w3yKwwxBnPDfAD5QHT62kbrMPspa7Vp3XLQJJTHhjgMU6uAjYuUZyE1DZmb7utS1y",
  "key28": "3aQWMjtqUwfxkruYW8WDYiQkcMRL5LbbnV7m6ur9UMzRPE3hJQGRrikkSF6F6eDbjzRkqUc5t1pCxgLWR4iViQW9",
  "key29": "LtySC1jRkS5k8JLgciHYrcNoEXhyDk5EsCbT7411BcnaKzvN8PES56h9MgG2w3BpUe47eeP1EC5iph3qKtNKyE6",
  "key30": "3QKXBiWeYA2nSDmNVFCnTei58554g7YmAWapCAaqDG8xU9YnsfwowgE67hsX1s72qwLTcsKnbtAHKMBb7enNHfQw",
  "key31": "31pykSw9XkhkTgKBnN8wxnyhLHUDvHp71tznDXLig5uaaeSEzzuCTP76qJADywGHVvs8i4FAiuFpdHRxPXtcW41t",
  "key32": "3rD1aLLDPHEJD57JUwism6VUtyz7GPm2xy7CCJjpqq6TaR2x8z3bQt9gxFnDXvrjes9M32ikToskZvDJnbbhWQVf",
  "key33": "4QqPDjQxCMo9hLDTGQTLqkr87VfEXqrjQmeBUHpqTs7dQtrj3Bytkg47yPXXgnGT9rMFZQyBKBF8PQ8ByBseTTJn",
  "key34": "5tTHZpPXcA13mxfCHNB3ZNyLFJfFPvWJW65D5imkkmGkrGsRXqFwpAP9E7i8MiiZDYHTr32dEue7gtqDPjqsmC39",
  "key35": "koUHD9y2Rd2GfUrtswN6cCHadDygRHTN1Nen6B3Marqeah4yjLRbvB7xf4fg26ExHjXnpYt7zERVLnnd5ZShvCc",
  "key36": "4DY21cnF9McScrTzXJsXGMhpEyft3ZF9yqTcr5f4VSRyNTeaWjBR7SDYSfLW64mGUthY3WBDHm6dsW1qZ4KTbtep",
  "key37": "z2C6PzEDAM5GCS181nrpgn4kRhfojyz8abJcTTUr9Co2hEo9kk5rmHmhSLwxRHpemqsqMP4XyJ5Y2TCo4rf3NHY",
  "key38": "4Fj4qCWYvhFNkYA2xvYfEJzGoW8Vm3uHCCrEUfv2Us1SrMx89fyTBYXRVgZoSRitms1Mc8p5vUW7f38B17ZWuW7A",
  "key39": "2cBA7uqzDuVUATujwSNf522j33niTVY5iSxfJFsCr3gnwHBqVDuAqBRAEzuZcD6WMFQ7jiKNYu3B5TRzC1h18Xha"
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
