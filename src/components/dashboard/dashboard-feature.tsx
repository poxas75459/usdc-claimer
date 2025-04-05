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
    "39MP6icErDb5e1DwNfR2MGtDLYUkk4uYHJ4Zd5r15odL1g2kaMTgx1t5PJEvNA3oP6LeSwLa8pCcHzHQD8oqJYjv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HNbG73seZBZAEYU9pn264y15BPnDSKxq1CYPAmQvz91nzBddg46snQtFM3Yhz8EjpmwSbUYA4HqZ4NYeyegsYxC",
  "key1": "2SPjGgexmw1BV47PnsLDf1ewByPLnKx6RB8KTJqJJ3m1BZ7YZpw8nbs3okTr1bc9FMk64t2PmBTJmZpe9N6yzaKx",
  "key2": "3UPuV2hiXUkZxSLH9eWmDUyQbzgf1zppWLQaX9K3YfG4tz5qB5AKSf99mYM1nwULihwjPRixR6ZDPnkxXsmP93WL",
  "key3": "2ZShkStUF2ZTAEBuAXkbGZ9essgVSr2whhHicc6HkcAcaKiVbJYLowRe4qa3GTteLqy58PF4Y16NoDn2ZL2678ct",
  "key4": "4YhJsR8gDUbq8A4kxRDERhMqy4fLV1r76ApXugVssWNmi5VQvwjNFZjHpoCBiuzgADvBKZzHQi5u1vRxs9Ar4tfF",
  "key5": "3NY3SDDBAfo6Gr2iT56cjMavMgqKF5a9CzyRQmfsbpXpJQ4KBPYu1kEN95KPZFrrJsmvwGYndyDNiueFkek65vQL",
  "key6": "2LJuN4f35HYFc5nE2BdQhzxJXQH35LDCuuA6oH7vuPu81NGphFL35nCqTovnyCXv2PTdPpDDHudHtnNgfTkwBfx9",
  "key7": "2kemcr1bAk4rBxWBTtkcQTtB5k5h6MVpCewWi2SCKofPmBLb4LJzVZakjpj2eRaMACCC91PRwjcqokdJvxdctHe2",
  "key8": "5NDoVdJQJSDPjmqzfxUtFnL2pE9xdJP8N3NknX9NesrFQnrAfFtGwitbBnJ5m2sgPYn2xfNafXP6aheUYa427jay",
  "key9": "3syZPP7CfyHqDanFbvs8K4BFhr7M2FyZHYsz2Ei3tjVVpdHwdaVxxVwnDv2UrmFDtBTVXAMwtMbK7ojwLxdvoNVE",
  "key10": "5o1zPUTuQ19qa4sgngGnoA6DXEqB7GsL6wjEP2SZ47cPVdbmoGKtz2PXjvVj4QDhqehVXB94Eg8xa3FNfmGSiZCN",
  "key11": "32kyS99DY5tNgJz4xn95R8FKQ2jCZSi3Tbz9ZSU2pzPWbgJAJbrALMWfP8Fjp8f5QBzeC64PdkobKM9w5HGLrfmR",
  "key12": "cstQfQ4YjsFCW8iBLPDwRm7LmtoGZv5V1k9bkqB8KqxbUtqMZUAg6qJ1J6aMQiCR3oAQA1wpYum7JU56xCKmC3Q",
  "key13": "5zNVhSoFmaPNzgdKoPrHh69qkeRnr43bTT5CDWxLZiomgubRtt65k5JtSJbKSzGNEAd3oe9eqTVRfpfnaN7K8vuj",
  "key14": "5ARVERSFTMJAKJw7qAYuA1aR4YzqNkGLV9nZknoFRqJKAXdiy1nSUv8gP1LTi835YFK7NRTenb9YqzhVzgMWhZss",
  "key15": "3HRWicpZdrwq8kcYULynAugEx5FtmvAY41x4UbpJg3gjPfdgtXqPpoHfzvVDmikSJVRMKDZNoMZmSiQAtPp7Noni",
  "key16": "54zg5indqxMFU5mfT7PTz5JB8Vd2bUMmDxWJf45Yh89zsdRxhoRr4iPHeceUHnQTktfCocK36CmChS4Bq2M85rGx",
  "key17": "55oczrvveNhU7nEd7AM1NvsUwLzvHHpVso6XNL7SvJDYCnUHmrMNfbddEu5Ei7P1P2mZn1wD9VKjWMUYgBj77Z79",
  "key18": "2etZaPZ1gotJsNJR8xYf4h7wrxceAzSwyApuPa1Mq5hQypqgABk5Qg6Aw9AVwoBu3bGxkW54yRNSL8QyfuRSQF9R",
  "key19": "5p5BxPmPHJaUbcrBdoTtQcMBEpDCfpV31paa1kaDp2viSLCHTGjgKKsgdGBcjUaAYeJziL8fL51q5XHrDTjrnMjo",
  "key20": "dvX5jAqs7Y59ArLjXrqPuTJ73royDpTSSSmDYEuUyL53pcxnmwjAwu9dM1NSezj7raMovQkwfENQ3XGzhs1nNJ2",
  "key21": "nwbDY5GYH7e6Jow6NKKpnYsHH2cxMsbDjGwXTpp7PibzrWk9HjYWpRoTkD62pWasnHMSwWSjnRaU3gPbgCX8FWp",
  "key22": "2r1SB92yenMiSnXRWgY5DnWRhN2tcqSJgAYhvVCcJkVupJ2SZJTBB9MBT2h4SUzAoeUeQGYhP7J4DHfZxb6TxiL3",
  "key23": "3RvGtfGWJc4YiAgwYXKDDh5cTGjgqmuVq9kaym24V8BYKwMxVnekkTM1kYVh8qbJJePTsVVE8vEyB5CDQT6DUGcv",
  "key24": "39ng573AgpVXXVyCBB3WBMb21j5Rz3X7SwFTNAjsDRTaU5rLg6HwL74w4jw3agNGpWgM4SVHwSy7kbieG62tZvGk"
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
