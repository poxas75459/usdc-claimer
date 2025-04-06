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
    "3rRzgvkdTf2PG5DubvxCw15GhJPJrekdoWg96n5YmLwkaQNkLukRivQVMKJUg47D3DKz1uy9bJAoEBmpNDzdTcQV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vqZskH9tevp3KWAeEtmfQLz6oZqreDUynaU3CYCQiuV1vYhFiWUajMtUEhwxpZejcctHgrBokMYC1y6fEGd1yXn",
  "key1": "3Mh5T1n2JDWX4j4zHcmhhx5T2m2fqrJojeJPLqWL5m2TGaQUhpLq6whNDH1GEbCs1pVFDQSta19qtkPbYWRdgEHi",
  "key2": "d2KqremHkP5nV1z99YEUp7QRVfU35vnVVS85fyMig1TVXK3tvezhjJXeNTEG29ktChbVq3pai5wyp4mjz9UajSU",
  "key3": "hqejWwtAxLS8yYQahvHdBEgttWE1pmqzo5PExFKuj1Xb92jWD5tGsHzxhJpCjvhzPBgSD2hT1hjFgB2cP9UXw53",
  "key4": "ymSn3VKAMq1tL25W9nqW4pkgzkhd3Rhks2d4opEaB5TfZ1thNzH3PYohr8WXzAqqxCn4wy2s7As7JZRFpRGyLiw",
  "key5": "2DoGFPURV1tijf32MYZAPo4bQ1yrvNYSCjk7ujxTqyLJYHAoPieKDFuBhpFUfGQoSD1UFvcKMSSxu9eLJxvYTHa9",
  "key6": "2Uwn7zjkohq44UUiGy24p3cBCeTCD2MtMxo9HUeQNU7rogUz8TMgnzoGFoFWEDwumehP5M8ZFrSHyWkiomuUE3Mr",
  "key7": "4s95pGKdBdL9eCpsapi5sidFRXXhUWcbJmytUBtW3hkt5jvMShHP6TW1BJk9FZSdHV4chuHsC2JQqiyTc8mLvA1h",
  "key8": "3aQ94kRP7j5wQn1oK531VnDmTEyFfSfRL5bTH17jannGmjXUxMrGY7BcjRb8XbXDACkQBw5agz26f7yJ61qrCzMd",
  "key9": "4znsVx7RnYBq4uZjUcSoMN41HnxBZXeS4VMpDxneD7CiZzvCmvnCnW8fG3oXERHh2dEPoaTLgj974epPbzSy36pE",
  "key10": "2xNAwSo8S6GHVGVF7mvTsMvMehQtRaZz1pPtZcM28fhAFuJX5doxfEFfvRLGJuAchXxyQAxESb4s3j8PqRoUdWfi",
  "key11": "25axjZ2GDfvR6V6ACgMYMhZ3AgTUSdwdGmGeLMJC83A35q4bLYyP1PAYkGye7Joubx3bjhNFf8Jikf5u3TbPNV8G",
  "key12": "3uWhKZECJmqX7TLkvJ54Gy9g9uTTBrw1zxDctPQwtuobzdxX5AVzBiJhSmjkeau5iEweQMZcB3okCB8n7dU8XD6S",
  "key13": "d2o1pxvrsJshFxvfgqNzjVJWWWaYw4WxQktpgyN6XQnUzPMph7Hg7qYAxWXghVY15hjUWHPP5tSxPehPctH1WKJ",
  "key14": "4MVfzKqAAdLAJgn89gsMf9vPPK8dCnpDF24FaZ4oVVkdGzYaMtKwocFju1qeKPpxCHLzBHtGuu71p8RuMF95gPHc",
  "key15": "5tFSuu75NdeaH8tN1DKSZkagTTihLPPqFjBwGTtD6CV3sjvjMz46cMztb343vXD36o5YwHM5p2FwSS19yJ1GVpr8",
  "key16": "XhhenheppTatU1dqKDCh4wgtZaCLpRb2wq25U53QQY6tJtF9v456CarbEyUF9EBejoGu9BsWxuucKU2WMYk74yb",
  "key17": "qThw9gw5miNWmiu98rctQ91TMbV1UbkXro4nE4LwcFRDnnqRqiMRsYjVjBCCivWM9J54kKWTP8ktdSiUW67bgxS",
  "key18": "oYCtvJBku3QFtXs8dCCRYJAkqKtZNEDQKFmseJigVYqSFXVPwNa9QH4u9Ccjno8z8jcDn133A2hwSypiBufWhhk",
  "key19": "5rrFjBHbqTSZzMKjBbb3T8M4Vn8fiDxT9HADSUvGvSSq1wK2RSfiwaYempcZVNZjKUfDJXU61vPSXtyq7pDYDouf",
  "key20": "ULUZPNUfHHPzKkq8yycxP2HKPWBY7N1hsTg3zN1xzqr6HeEuwCHnzCeT6u1QVHv87xL7evNSMiehMXgzN2cE7iw",
  "key21": "Ydt2bw3a4JjEnMktetuLmz1z8RNunyczywKWXs9EtK1HGgmhbpx7itLMt25H5HYDJgVXHWDYGC6CwgRDdyd1htW",
  "key22": "3Xgr3NsbP1h34GKatMmqXoujKnErXGs2GvXeX3fb2M9rcpwopDGoE43ZEXTvh6sUCTQoJpJ6f8DamYRRmiebLKNX",
  "key23": "3AzDVeUd5PUKURJZt3SWRfJN9HVairmPeu5kcq7fJJxw1yURieaV1rxNwM3e89LvWYNeqppAuhTAWNyTYRB19DSU",
  "key24": "33MU5mR5WvriNfus2U1kKDmXWwinF6ZBeuj2474BT9j3JavwR2q5nB3L7QxjfFUjPQ2AARt9TPtxrz6owYGtR6DV"
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
