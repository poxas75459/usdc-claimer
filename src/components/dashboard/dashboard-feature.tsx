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
    "rbswsDww5srXpEDG5tx98NX2NQpEZFwzaheqZoy6uqD1A1yChTXquqEEsyBBnMvbnrVCWC5m6wzid3XmFU4VdH9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "335JcfJFSXtndw6VbCmorepoQAZpGPB11DAsnPyTAq1dYmbtFBFKcjnV2HLxiWZUtsaBtvzBDdKAZ6C7nUgTwJBx",
  "key1": "2i28Ch5dSJiSmNRjrTBe9zpgvhi6iqXTn1o9edv2mW71v36yEC9P22VpAQfUEUXaf3cP4cUzUGWGEyNZDBJ6TFFU",
  "key2": "41WRrC3reVSFGCsECw26hkJiXMNtUhkUC6BJx6TCxrgwPPFzjfw2PJGwSrJzL9KDJXefxxN4ZdYUHq39oRUg5zNP",
  "key3": "3uNrwnGvDfG6KfwN2AuqnfhsjR3awyZqY15kXXcbrgtkLrjwzLUvR3sFohFpjDL8Ncr8MXJU2yA4YgHrkYLujJ72",
  "key4": "3mRssJWd59p1fb6VHN3iFzPBWHeceff4QUaPr59WYGLDKaa2gMmj2ncFZW1mHwvn9fhbfdA8t1PFoR93zXVPHLU5",
  "key5": "fGh1pfx3Wd8cghFAxE2sQTkEubdruYfCBsacUXsDsjwLQuNYg73znTun66rF7JDpZy2QSNZtWrJHwxoEqGKt4fG",
  "key6": "2wTLWtNuPE7TNbLMKnYf1oJqZttWJN6KyQHT7gr4pgpumJGikEpmYA3bdRPeckrtFXrJnHuUw8Uxff39JWq1uD5x",
  "key7": "3WmoMicPx3g6aZAkpRbXP3JNdu1hy3J72EjT56Pnz6YFmG7hRr2g2CoAWML7Z1bfQawoJVFNy12NT8iyfbZFr4RC",
  "key8": "4KuS1ffEYUTyMrdSvnpkkPaRx8n5tYYM1iDvb1HHcmM2UgvJ38T7zbJnUpdCwjygpkESE2YjNfmrvnzProQ7pEbi",
  "key9": "3A2nMAxspuNjRd1v8RJf44MyYygQi9YzfKe1DhVWAEkCRfb63uqG54wVCV7HKkfBLc2Z7UheDxJA98ry9vvpkMQV",
  "key10": "jEnYGPi48dDWF3ApqwnAv7VNuF1LXHBvSkEw71RNPhe8UgEQQbyP1d8KuFkM56YZSv7QGhrBCW1pBdK2at8M56P",
  "key11": "4J9upn9qCL7qw8aEk9bUCCN5Hmpcgoi6VxieHizZC12SbgUZdZWH1HT7NYjkHvqxH2xnpuTEE5w1yDBtczTCWDJo",
  "key12": "HFeL7U8oQknJpTDU5chr1b6UrAyuKDZ63Drg9o1cV2rnkAcek76qngg6fW3UEKyBqErqGFJRMGXBZLU66sq3zbx",
  "key13": "2JdcraoZoTZuNCgWpyVHkRSotguEBpnveDzQhnCcP3qVXn5daVuCeG6vbnWv1mdkBnfA5ceUB9c1TaxeNoYV7qoJ",
  "key14": "5M1NfDdg9yvdfLbobdSaKxLjVBHTUjc6Pz39mVjDeRXZsmLxWFwH2y5cB2Wb4T1xY6sDJB26r99HFUzKBHBSfmBe",
  "key15": "2EtqGrZyBvhRakdFJpe3MhBL132uWxfkJHxXF1p46co3jw6y7yHmLmvaqiFLBCMkBY9tFCTDVBdj9g2ivScRatAU",
  "key16": "2GczHpNxnNT4WDdBk4UXdfSdudj57mcLSvtvyoawXkPapsncQS1pFQX8R9Xi8VsGofcvUeCXvRrmg62Mevu7PsdL",
  "key17": "3xPEouC65P7Ts9MGx7nswDuAjuVe2dKRyPWnfSczPijjaDbpQonVn5XdXyLfDTyUBicxH6PqEUaom7mPA9e2UE7V",
  "key18": "Zh5LoGVpzNAYBUXWHmQjTsAovXpdZmz9nqKcf4iKseDnjb9NPSEUWFGNwwKdMGjv4UQiC6BwbXK5KM5wJdxGrs9",
  "key19": "3qvmqSsSrDu5Dck8ssU2tPxYZMS3Js5KqASiZwe5oYKtVTNKAwUdBddjAgZiE3fWN6mWA2QQFgifmQcXHAb98fGB",
  "key20": "329tBvGMMqsBWVtRZ2Yne2tDVzPiyRi4aGjtE5X1ivZYRHdTK4QLhLvuM3VrWQNgBsEiKy4iWDJkdyifcLcwoc2H",
  "key21": "5kmQsEySuMjpSbDmgCiePRNHbMaj3wuGR5oZ9qfcni8myJKr6aqmAKhAFAyAAd8bvvU2v6SU2LaRTzByH9guyAsz",
  "key22": "an6xsmRnw9XqjmUKSKdCrWyCPaAdGpA4tMbvZJx23kTfRTWv5AbM6QZ2NnnAhjAsijKi7fXtEXUm8MPN3LHGWFc",
  "key23": "2ZVzP2KNVd4Qci93U9XHvwqDgYuAgfqAf66GmMzRUu2WgjQrufDXMeoJwqCbZmQ2goPzbJDzYygSczbnuZx93oYV",
  "key24": "3ENJZGwMcQXKmYq9Xp3RskqbdjWmUMpy6CUytNCAZy4zybRF6519fanWZGnqCgxcsavdFwh1VSSm4t7dZ9PQcrrM",
  "key25": "4T6PQ2k9o1dpiW2kqYbzVF89UpnxonoZxvukYNsecoM8uyQEqVqfpq33M7CkL6t1VP2Y1wH1pJcKdyhoUX2gm6fV",
  "key26": "buWS73giMTqmxYcT9rciHMv52e5Gdbw6JPHyX1Naz46gaMQpSo3CE2boSP5qJqZgHbLkozZBaCwu8FhNEKDNyR8",
  "key27": "5GNwBvHKzxXp17TYA58bQxz6tU24CNY5REqpcXNWGcniQ5w2De9ucYzREwGdEuLQkFyC1Kj682BddD6ipQXXW9id",
  "key28": "5kNuNoLeYvFqmeAWXbkp2C649Jut8SUDPtDtwfsJw8TQUiFT2YJVVRHD6Ufh5HzWC84DBnesjZJzvi4kMLbz2hbn",
  "key29": "3PzTFsgUTkg2CpLdJ6Z1REuzUpzajtrJF4CKP8gx6nmiVatBPaSxqre9GSMCgNiHkESnKLJzkTm15YXzmLzCGuxU",
  "key30": "2AJ85Le8kLVxwUqPvEiUVwqQJ1kEyLmDT7doNVypD8Uzy6ZDx627Cn4ey2GK8B6MSQaKZE3pw3VR8e28TuNKhh7",
  "key31": "3ewdTeZ73wMuk5SCkMor6j1QY2fXAHWDXGdA2brgr2xtgzSVox9ruBSXcvBN7c5y8KEpp949bPz8PuYeaHK4XrQw",
  "key32": "fo49d9M4E8qj32181VeQmakFWAANp3voAFkkEdUWPKXSMArFZ8RE1QhX7kW2CDfaYiLMhKYLRquUEYMdfBkwAQh",
  "key33": "BLgrM51GhD4qyCDx8gCauPUSSCd8xd2AMNE5xLfkY45eCuVptWEqLv2Tu19rYhUjFBZYYswVuwPFaLq7GLHRcqi"
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
