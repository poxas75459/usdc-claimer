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
    "5sf9bc552swbNqBAGiUwBFoo1TiK6wLQQq6dgwB3QLUhUV5xqHFQKjGLc4T7DG6zbKRYsYAzbdU5jZqdxEC5Tc9z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4w8GRtRq69WydN24DEtwjvW2iAwGfWwEJRdgypiakXRQcCz7PBtf5rXjXqVyvKws1qRsJthaXgkDSP37LKQ5Jbsf",
  "key1": "4HUWi8QSVWwNJkCqvLVPwPTfzAtpiiNPbs7yijvGbvB1SFeBTCpwgnsANAv5TotvKsKGwpfuX3ciD2uDGC1ZLzCL",
  "key2": "2wYBb4jaZ3w8dTYqRbtRuArfee4S1NrEZVWimHVDz3xwCukK6tqK212RCJy8eGyA3a7WhnbfaFuE5cuN6R8iBK3p",
  "key3": "dLTWCFragZ1zid1okUfw6mRX21QLRs6noE7q75bF1crPybMoV4FHKjiwqP1xEgvqer5KydHWxuoyCDb1gf9c2on",
  "key4": "2WYJ8LwygT11c57Z8eovFASqNE2o9kiw99AFxJRjoapFDJJnXPdCnWpgfbBnMbxQtfrCVUuSeoAwXKd7jCLQW4Dw",
  "key5": "2MfYR6EHgnDM9zxdJj5953GcVkTTcB9d2E9c3JhoqwSLfuEHWoJ33mFgzD4chdVar3jb4eLp9xnnAApjx4hrppH3",
  "key6": "47iGBAG7fAu4hYdcF4YQC7p4cU7Zx2pxDsi6Xa7m2pphJ1QLvUMNpt44HCDLZr43Skf8EajXEstdWY5ijJ6wyZwd",
  "key7": "gs9PhUMQBjyr36ZiXbDFymqnkEeWBuoECYSiMGQeBaL5RB6i6McLu5otFPfdbzZMY8mRmzNCENMv6VKfqPouYCH",
  "key8": "53sSeLXi66mUhKCgjtDaeYvNA8HfDj24RC7izVSnt2no93KAF6822gfSUtnVpoPKwaVM6LfgPc4ShePFQLb9vcKu",
  "key9": "2fSG8vTbSQm5kp53p8aERfsnKAQ2ZPeSAN5HKMApfW1oCV1MGNdFoL3w6gqyiw61jjcVNMizRBUuPwBShCMUucXg",
  "key10": "7mJWqGk8DLZc5J9QQGXuEsmvsb2pHcnSpKmaxAvriUC7SLtSr2ekgexV4VwqptuAsTu7D4kAmem5UJduCwbWYBY",
  "key11": "4G6RGMfvFLY1hH1hE1hfGq96XBqPkZgQdpRGPpprV916QNEBa64WZPjEM19bRuBbSy9q7VMw5Q44T8s1THtFGza",
  "key12": "5waW1JhNeHHeKPkPnRmttud2UNb2J9GuEZSF1MGnkx2LfLTWdSoUXpNUdXnC6tg6XYtnBUjcPnKF7Tnw5d3g2pio",
  "key13": "5Ao6EPeCdNmuq11G5yDEbPKiSAsZaEQvLqx6J6dXbL6tkGZYBjoJ61J417mbgreeutWFnELda3bDUnES5Zovd7YL",
  "key14": "3sLEk7Aak7kb5TinshCd2pD4sFkPef8UCoGJGNjRKAyoatv216W2tHQFTCDwTs9m2Kxh3yuUaGJ2QhaHJKSJpiWA",
  "key15": "TYLh3Tuhpak7EBhwLrWfeyfTJpwDSof8drDsE8oyMnpzmT2FDPhKL9e6fKWsvzU5znZtLWTh5RZcKmpbZGMMZpB",
  "key16": "5E8fRH3h4gNQnyt9tR5LBiLJHm3GjmSDHtGrTkqcM6JqzyXpKCcRANHcQmy7kWUU1Z2rbtzvQRV3sBeuDs4VErQU",
  "key17": "4ybz2t5xjFurM4CSRVsizY6A6JjDX78sWdzMHQ8kwf2RxHxJGd9WdPLsHsCmvZaoo1Z272J1qFdGwEygsm4oR5ie",
  "key18": "4hmzWmicNxbjp1ecBtYif2Qj6GDZC2SKY2P3qxLC7TPmCuLwkwmMzv81NrefktUKXjFKu1yntWEzGhwteG68kcop",
  "key19": "2nqDHdAWHTKmnTsyzJPjNGRm3Vs9wpAB6vYJWjGd8yLBYd6crvxR5gSxigepTerBWtdSxGLFqA8V6DQ8CFyCty4u",
  "key20": "267WAhypvkXW2z12rzCsxErGMNxne74aePRJ1QCFpfFxvbWMXKYF5PpZJsqxwiB3AANL4dQiPZK8BwdwKYvwomJB",
  "key21": "398NiJwtjGSb6uVjPtTkrgxzMHeHyPmscdiVjYM5MKAcPNKzqALQoyTpeUq21hJ1jor92gFApuqYw2AXKofBbnoy",
  "key22": "8Kwu7tsW1Z4p4rvLLBER1MZBJ7FESLJEVFiQiekcsK7wCmgpBGq1ZGrG1wDj9BUV5w1zmii1xeS8DRYS7oaTPis",
  "key23": "3cJ2bjDDGAp6WuQCVLhEYKj5NLozSv9LEM7Sx7JysfMnBhdqp24SPrCVanNhZJXjvYaPDtaNqqMUWuyoAY5ohqTL",
  "key24": "5pL4Rz2o31auKLQnurPWdYhBq2rcE1753srDnW129LmAKVU7CorRxVHsriiC7YTiVqegAopgr1M7DtizYYhbVP3i",
  "key25": "4RtQ8d4qmQfErFKJbAVXuUQgp6tTfzGtG1sQ8WQN7fXNRMnaVXpzNzaFUbG656v8gaaBigmR3xiLWTVtaN55XbPN",
  "key26": "51cJhdap67Gw8dxZP84uqLp43ZXPgcqkqYMnEpBttoqEGm6DMj5Xmce1mEVbSBvPbrA8amcuxrBj7kaeT6QeMffW",
  "key27": "2L3E2ay3isC9QAE3qrXQWU378aqVDx2EWGjC8NCJFMjpGie2wZFpQAndbxZZUgfXCDiK5JCbzToH1BF8zLo9Rjgy",
  "key28": "2EfGLmJqK1jP5924Fa3LsCZNEQzgYArpkrooraccYUZpVsUs5UPAnKouuQy94CwavWT9HozXDX1RyY2XsnNoQcct",
  "key29": "5hrn7tXPMvYP95Zgqt3HNvN8SqdaRpaTTx8ZvoK6HzLggUbAhf9eu9TzeF7XECUJP7hxGv3K8BmdRTEJJEsrnWxn",
  "key30": "51CDpnbGz7rSrRZ598CxT2CoCsyQ5EoQPmiDB3wXxwHW6VbJXmZwcPRgiJzUnxW3T298Gj7sDSJPcTmBTTaZ9c6U",
  "key31": "4MTA9FZub9gv8Nq2xMtM99m3z9RTBv7FQthuhhd1nW75nsf7eYA9ivgezLNpNHd3yEqsbEq9dvaKHwnjETWpprLE",
  "key32": "EREotCsqP4q5uDyawwKeMkm5z9jxfueViR2QWvuTUdSAs9ngfzJmUvv9XTgD8dKt1x1QHpuQA1uiRhjXSbnJSo6"
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
