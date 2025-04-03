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
    "2WckBAetDNttg5CyAHWQiLrPnQTQZhaGvntF61wQgu1fdAabekotW77Veh827ffGYH6T9FVeUHGnKWEKQce7UjHj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Nff1gHkjFjaAKT69ooz7pQ4iJcv4fChK1gt7eHnjroBCgkuAAncKuRkgjo9fHmryG1MrSS8Dk8wWaNWyXZmtSET",
  "key1": "2yzDpW3KyZ8b1BiEHuhhL2fmJJegmoDP9qXSJ32oDza4Hx8Jrb7F1Y5VPKpqm6SwioPib6tCsE8rQpgpkQ2bPZE7",
  "key2": "3nrzfwABN73WCbzb8Kr2tUDDJqEXGc26rPBEGD7d8FZFo8qtUScb8A9Miu8bf3EawfPH8EepsdrFVkfLrqYCw5Z",
  "key3": "3U58QKbdTrTxTi11MYXZ8FRqzPCb959XePvgkePn8qZtzMgMQMK2vCLGrzv5B5CLsxZv9TkptcR4Dj1jSCiPt8Qg",
  "key4": "4xrJfJ5L6AUYHY717fY1WHbQLAEQsX7tYbZCSK4cLriDsD2WSt8mKz6Qf4BzM9ebmU2A749ucRci68L96mSnh4C7",
  "key5": "DwRBfZ8pK5GsTDaeQsrbudz7TRD7nGQG6qoMvsXy9w2Yi9VQVX6oMxLerB92qs9mmztWgBzySTjEWcEEg7byWz3",
  "key6": "5gsmj5BXtpXFikkcUJjjaRxoZTsePyktnfMLPUjDLj6zUUU6tbn26JehtbgZfh4hXhm8sYUkLzbX3UDHXYyfSC1W",
  "key7": "4vY5NHPiTEq5ZyaKk83MQqqRMqvPrzckba9MJP42e3GRXF5F6BdsJpD5A9cJ2uCK318eyJaf3Jh9SwoCDvRxCEW2",
  "key8": "SJcL161uNnXr8jSSCTW2TCNJPMSzbafRnmUVc483dDAxyC97xGk2Bh9sLSRkZ8PYYixM8BE9a5hmbSoUixeBNKF",
  "key9": "5A4icmC39wDdg9QVF3L2fFn1xeTeprCqbBdd7phmudjXZZ3qaMMGjv5m3Zttfw3efbyQMQwpDGj2vikdW1LpFXQ5",
  "key10": "3DUcn5gft6xLEWHsMeX1PYAVRa1a39LrmRpoYcVBwjWkArqNt17gjWd6u9bJXaAuuqUiiLpe8zmzvwbbiqYpZoPa",
  "key11": "2yc5fwRfy9AFwcWyKRUj7dkQoyJ9ryLWQgxD7YDifFW97iWMAc4n8ie3zGxZCUk1ndDFTbQX2treLvocmLeAJ8uw",
  "key12": "PaFUoCadjxE3xBv4FFibFsiL6GCYcJbUcBSumsjDd7SQWir8561UFZGzYezykV9jqgzjiXko3evwfBb9fLyeMv6",
  "key13": "3s5EfHkR78UstKuZgw86LmMDnQXFrrTZx3HdK98Uq1rU8AyLRSieSwe4qFLNH1zrVbVSBj2Eh9cEge6Bq35g2KGy",
  "key14": "5VJz5DVNiV94e6o6GGLiPjYnE34RmjXhgAMrwumR48xU4Mj5A5dz5iofV5QmEsxrQAeFsZrkvBnnw5JZ4sFFLfB3",
  "key15": "2GgyeH9dacwfSgznQTBbYJWDNyPxoGZMeqZAmeskuf86zuZCHGWQho3YuPjrTeQtP3xk7AaAJAoKoSCwGX4gKiSp",
  "key16": "2dWKbFUPvuVU9Y6vQompotfjJVCcyX92E3AFFPHwHxLQ3p6XLsUGMQXj8JjaWpSJ6Hikk8pYcBweoNYhBFEyWwnv",
  "key17": "4mjskAtDvbSBZHU8QAPirGw1wXBKFmVuRi5Z6ARKvBUcMWsSXvyBntYuU4tzYXCgyQ46zJiBjzGFHm3cmV5QXvak",
  "key18": "q7dyhvYBXF8bRqg6SCHTPH2yQRtqpVxiJiNiUDFqA7bCkPm78FZ2N5v71DnAzmXM5xJW5CNX9rkSyvHfMgijhwR",
  "key19": "2betV34depJzjcqYhjQUqJMjcqrGfX3BYSVqTiAr6M82PvFbpfxLcK5ABSVy9Mt62kZsXNP3p7pHg96bsCQhYD9y",
  "key20": "5qNyacxPMrtewfPjrnhr4fc35UueqdxnzUv5YRpLDWRuFpt5UBRiWPFch28x1hyrKVdMLYtzN3S2CU6JL5LDMUSS",
  "key21": "59CDp1pTnvJ8bCoqGSKt7FFZMhsTjT5K11MQgW6rtr7NuKEtAH2SSQW9vtJaFgdPqJvZvCRyvdLK2VmxtF1fW9gv",
  "key22": "5NkTVhNBnivGFdozrQ9U7GRrdLZeYaoHaY4KFMHesDBmSgWTvviTpYB9k9aV17kygJVaiUGEm7jGbYtYLfUgYn4L",
  "key23": "4b9qrvtuibzavCdWNbhP7kzTMEgWHsewUjKPdV2eNU349BcWrAssGVxFAPq2vejtTtDJy8qUSLBqiHHJve8YZQvY",
  "key24": "2cSG8XB3RzonKq9QkRDexWAA8PHkNJb5Y6b78qmaip5zzgU7VNZMFPfLfnai5KzA7xp1rA3vCELgahqBivjynHvz",
  "key25": "4a1GaNW83W4VCNQWCdLr9JKKJVpUcUwTPFk7GH6yZ5BNCiojmMWhHvZachij8rGjoGzH1m9gkB1CDCCARYqMpxv9",
  "key26": "3vsEi6qZVG86Z7qdyT6kS4jJ2ydBWUoyiu4Ga3EmNe7TQkL3SpHSRdTcf48ttSd5mLVJZPRK27EkKmpsqcAGSYQq",
  "key27": "28S7EmCRPWkjjt6WWgDzbGDug6oKcqX76nxVcaYmoZb4y3mPf6u3pvDTeYDvXHTEisdJTyis4XESYG3D9SZKgjq1",
  "key28": "oFTnqV8xh9GQH8uxNk5tMtFpMvyTvkXYdABzxM7kjjKAgAXwinTTT7osoL6ehYu4nV5MxiDJ5U7ZLUzW4tnuvht",
  "key29": "f5GTT1cBJGVhFahWXBYUf8qpyJNEwwtehdQF8n9frYN4D5Pi7CecMVZXpDXFzk9j9jSuFknYUvhBHizbTW9pPVx"
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
