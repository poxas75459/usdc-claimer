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
    "2Pdbfa9FPorGrM5LRPgbWFrmJ9qTYYo2bvuvKp72ZNHBToiHATnN8RMe6TcNwf12TMK8us3LEEYoWuFLxxvC6E4s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ajJh2sqbc71aBNgCfW86yth61vCvqySE6getjNUnK6t7BVtqA5KWagc7aB1ZuJqVbCyS7YCfw1JAsdUYCLnbqtA",
  "key1": "3uRoJgmvj3Q1AoEVH68fN1Muny9h3RZhY7tJbmyfbwCiZWVzyydx8GWqnKtjsdrEsUpScMbznHn73Kq9QswvPk2a",
  "key2": "443FD3GhWhpcKGK98jfamKJDzBBVycStHmapaWUYL6GFaJByCyJfLiqPvaqYtZ4khu49FYr94HF2LT7ZUeHpGz4a",
  "key3": "2EyJgoi7W2StTwJBRftffd4QjfcMfbS3SBpFwwiMSZx5JLVkTt4XQ34JJndQhpYac3xBrV56CH5gzvVSsvHMYvDB",
  "key4": "2AvXLgipxZYs4kMGaRdWQ5oB63seVa7LZSU9KgeNt9n7bgksTkrth2nw8vYrPtteLq9KdxMvAcGymA2EeoY8H5EA",
  "key5": "duEKusxwpZWhKgRUmXov5aVqoeVJ18DApkKi5o2PmDEMdC69jVBqEQR2GfQGdv9VpnZ58atQZdVco65fWXUZeg8",
  "key6": "4yEGxoABsknFZCqXzvLpzrA76EN2wUyB3EQ22tUwk7arXqUgjqSCNSR67dhcaK8ZQDhBd89WdNzpJa869spNwX34",
  "key7": "3hK4J5MrKLBZt5DoaivmGpVTyMifFRVRK4yUpoEsECbH7mEKEJsAkhBtHsgFzXDhEeoap6Zj4b76R6UM8LpdS7uV",
  "key8": "3grDUZ4SoHfui4jA1P34nexcrXVNHcdcCUWdJo2TZfXmhPR2aumMXqBNEBEQdUzLoGw9CF1rNY9bGEWNhvNgUKyt",
  "key9": "5Tg4aPdS28oqPU8iddzzTLPiuGM87vVjtJQiiQVAxJJ9zRRtSMYUgDcCBjtQRfzaiktrHromj4CxmjDoiGL5GETP",
  "key10": "4NQVmVxtYDa5BdLtnaorNbv9UCT2Se4BjMJP8SCjBqGeWMNtcfgJPmQ6tz8DYQA726GUDL4kojGXghL7WvS9hWVx",
  "key11": "3RXSFA8X65jocuioDQChSokwKPoj1D6N81MNtFmse796WqvBqBxPVSyRfK35vceiAig3uAFJyYhCP2hKUXAEgMyz",
  "key12": "Hw3A4AUgz8ZKAJeLKM2dnpfPd6ft4D4T8ALoERgJpTnqQn84R9yh5hYSo19DC2G5g978FaZhLtAzJhnnmXHisTP",
  "key13": "3txN5cJWcsnYiRcJW23d2qD5ortHmN5Wy5nUSgLgZ2WVDxvEVVACn2FJtbNpkNWb1bWQBpiSz6Qvi7hvoB4STYt6",
  "key14": "3aTf1pizWguDVjVTLrLtCrMJjbdmGnepJJwG1aZErF9YqWkiWnb6fEHnHwzhRgxDMN5R8ptrxngDMd6cJU4chPFg",
  "key15": "5xLNECE8qYRQN8Qz4Un3PNZSn4h3MESa738UUt6JfSqxn8ev5CdA7P8HtU1b3HxsHDYjDNEDYVvUjqsF3xko3JoH",
  "key16": "551BH2Dcj7fcgnnrVPDZMd9txXuU2CxA9tsBn4LXMViLTgyUaNBudrTMRJTDNkJ7dR3rLMjR35LUxMRqBfQYopwH",
  "key17": "2enQcgQdF6JnaUkjRE5w7YSygd78XF9GqN3EZhRypV3Rj6rhArQffrDRgcPPws7jXmqyRYGLroqghFk3gQETFVQp",
  "key18": "21gj6rQ6F1p59p24Mgo42EtermtohifeHUtmwFGTwySZ987xr6ugt1Uf14ou52mkTB9H3Nk81WbVWSArgZ8t51R3",
  "key19": "2vE22STeCTd8QLLggjL2p9QUYzgkJCzBMuoAiscJRcoRZeuRVAwPu6FJsUswmNDdTR7cak1f58EcjB4HbiPMNSwK",
  "key20": "pDz5B8u6jBPpdzc83Dey7q4Ab5mQjStGFwVt4yihGNUiQ3Q1yjL6VSHKjHjjr1Jp8c85uwgfeEYASebAsjBWkL8",
  "key21": "676tLLewqKkndjSih6UnBQaN7kFtTbXXquNxctDKeRCYmgHrPQ11dJsoFCyYKGVDJSx8tKxcHGuzGTF34dy1W6CX",
  "key22": "61GYfHsPF1o6tvWeBq2ixrenzCUHyNYvU1aaxh6vwhkDk4SqkGmjMY6fWZ4bwban85mCViZSuZuiPfVtPkki64Pi",
  "key23": "4j1p4YTSQom4wnrrNoE9sxb7chenpWQW1oyrZcfNzQPa6JNdQRH3M8qSJ9w7RNshjP2g5okUYua2inpKPWdCKUx3",
  "key24": "4qTfxgaSnsRHCgNbuABco7RPrtgFbieCnXoqQiLdd3v5usBazHt8ptsiCnWQtqim18w7Xi7EJJPxVgXef6pRcizg",
  "key25": "4e93U9fx64huL8YB8P4WeaRiRGW77fHvrTD5DB4F13bNCTNCGX31rRxyWfdb2vpYqMZEvyjwT9UmdkJeTkaFkK45",
  "key26": "2Qn25nWFLMPFCvhaXjE5VzXQGmH9yNhudYyxt7iMd7WvP7GzjLwEy6TALcJXAqC1vUD2CXFYA1HNxBhNck3z8RzS",
  "key27": "NFW3CidZebdcSBcVE4PvQT43zQM1pUd1X3gDShSpkQipczrnMGtSLqmAHeT5qRVqH46vn9ASjsrNWo9zvrBUwDD",
  "key28": "PxZAnvVmgHGBs3heanv37nzSHUKT83s6rESL3sJ2JF7tMyME4uZTa3W7jCY4v5QzLUcXF3bVsFgQFRFeF2yFeN6",
  "key29": "5XRTLEv8ifpxHYkc611ix8tw7KsqPX7VKn2CXfW2t71j4NddSnJyRWL2KS5PGRYUd78cPcyZQHyd9gTpRhrRi1NN",
  "key30": "2DSj7wkp4E144N2NbAsDGvtSbbTL1TWiz6avtYdDKjFU6C8eqq2SnrqaMjAxHGwCdeeNYcejYDAvkwxbb21Pitxt",
  "key31": "4AiU9RbaUwrPUumVt9ixDKt6ooF9JkymmmtoH7mn4QBznVCnP2VgyYRRfHUZ4L7rjCZ2EX7Q8Lu5qKn2RxrmJSna",
  "key32": "42RQTuT6qcnztQ4ghC3xdMZ2M3GjurJznFARph2PGD3sPxekFaNmv7nVhhveSEL6dNoq17oaTDoksCwx9bUFQxyU",
  "key33": "5uC96dp7iRReRVfnd8khV9j76KVFtSD8vBDjopAmJUKVg4nsPq5XqwXEViEwZ2AVAzo7FK4zrNiDxoc5boVTJhHd",
  "key34": "3ooj5buKvZGUbuUDzJUCzQr777MLDFFPpHRuWCWdgCobVHChRDnXHoD3rU4UJzmaXFaVbT1oAt6ke6xDE6eqGGUu",
  "key35": "H36iCjdt8DoRZ5DX93dV5LRExGA3j29LTqJ7NFRT9g2jv4egm1yQxFzs6ud4CBnm7RyGTaonHF227rXHcLFk9jK",
  "key36": "5fpPJENNtCVouJUHjFkM1VxCXsPCvn5hkS5WwzYPPGgRCPu6VP9DqjmNJB6jersjAvKQ5NZqXs4DcFixsccCohrm",
  "key37": "22RcaToQhDLoHAJCkbHXAuR4rKHcWuFq5fkbKWhKQb7aHSa1AXgtCXocsYBj6SrtxBBXZQPZA54dYf4HD56PtpXF"
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
