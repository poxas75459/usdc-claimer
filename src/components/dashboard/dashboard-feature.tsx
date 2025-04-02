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
    "4cya3zGUB7Wuz5eFBGvUjqJELmGNRLppbmEnt833bvXWv2hzC5qEx2n5gPBsPvfDjp2DMJvBNZgfcZ4mmp6vfzLo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2axQ8GaDT1aiQjU73rzM3tkZXGSRcQnHeMpT4riAwPEQjn6Fde66vVZyJ2NmNmURTjvvcoUcJLYApxys5nBdcQPH",
  "key1": "3Z5fQa8xiGG4o4WbQUBqSK767XUFDpkR99BsgVXSs6pFk37EhN1LPijBV2C7EzewnJif4UmijQJGx6mmTMMpP9QG",
  "key2": "2EpyCotxYwYb8yZyDVJ1b4dRgsQmBHLkZcJnNbPRvhSDVKzqyjFqeBknaiV1aVYft47J3u75y1sDn61LxoMAcRuE",
  "key3": "fu3gHLdmV6rgSq5znVUL5auQKwPQorGtd1SxJUe3wKT9uF1xPxTLA8doLm7z1kiFnCNGnPN3SVi3uprJcZm3EmR",
  "key4": "2ADRPbAisUKxve5egx21PobRQ1a9qbLQ1f8Z6U4q4LUfhLCXrQXCuGBf7q2rErNDpDxE4RSPxJmiQGck6Efb5KCr",
  "key5": "4TjEaCpjSNZpQ1A5oKUoqhhHtCK8jV2P1RGLN3enWiYzZdgq5wtj7WNRg8Urnjta9k6zMzegm1tgdVBea5au6aGr",
  "key6": "4xNFqFoarR2aq7usTgibonBuJmZsH1zswpJ9hkJ5gzZ9DmcQgWEuQAKRcMYVDfjVYuW7mTpMaEAXaruJsywNbyHN",
  "key7": "U36VkqZQNn8xptBTedTxYsX2C5oDcT5pMECU3vZH4ckXAuj1NSBXLWnNDWShCkox1SzURkovnx1yC2uaAzqspjn",
  "key8": "37eqoS7nKWXFb86Ut5TDKcuBTp1UtF4PWgbB3T5ZUfomrcvxDA6AtrKothWeUg1hdmQR1EPDnn7s3DdWAeoR2fDd",
  "key9": "2nDVsbWGcUyNNCAr7gUCYStpY438C65X8jRQwMkQ95y6Lbpo9KiCSf5HfPxAvi7PK3NZvMgvKZGeHAJmrHezwafw",
  "key10": "31N9uCBQyBDMp4s6J7HiAjWzddaYcPPwf5SMXRe7MB3931Mi8UqfsZ3D7pPcwreZur5SWzqDGfS2rYPELAratLGK",
  "key11": "3oGmAnUJJDoPB5dvfAdjpYbttPtduXJgtUcVFjj5uabKnYhZXHVfR7L8G8Gr6wvvPZGpwedsbqWnw7x2kFJtCytQ",
  "key12": "2imif9ijjdfLGdj1LZRUJTtZ4qsmxnnHWWo1e1ohXCXThT39cJGn256uKoMAdfW4BVeYafZ15VfV6JLmEdceTnXv",
  "key13": "3QTFhrA2cKmb5oLzocjy9S5HkVqPqsgPJXLjAf7Da4MphXwKWU5DWjV4jYQv8t2RzFUS8mjiBrAWMKnvFQbuGk1N",
  "key14": "6rjUqgSwJeJvCYLFHwGoXXU1B5DLy3LT7XCjXWm3ARCWnAEZenoK8gHhHJopP63ieiuDuUs3LxVFug85AjWnPnP",
  "key15": "3wFXNWLSjBY3Q4KDxpHV8gz8mpj5nFVpUN3ken9fKrRs124BHQzrBJ7HHGEGvZhqhF8TtDpW3bmvvsL3DkAVRxud",
  "key16": "FufUcLNg2W2jo196qmzCvUxhSvcwHvAoH1AKoEZcog4i5KkjDzhQE3RqnDSiboHSQzwzRN8FDMZ9mbPdRH9BpiD",
  "key17": "9mT9RTfGcCYr81Q8fiebEPzKMiU6ekuAuR2VWE7kTaRgh6TvgX8KvkvpkCYQXR9EWozQrvXzirDxWRiK6EdmJwG",
  "key18": "bPogUzgrUtBEScCveQwJ8KbK9kqQ4Xqewgh3yAg7YVm1L1fktKLPa95jrRw6EQ7JfY3rHaLb8xmkXuajG78uGrR",
  "key19": "2eNJVhf9GDDmg5FF1QyYtoyD13tRL3aoVYyfMrqxAZwuxSwwbWkADiMqkyYsAsPDEPBLDeSmAKcTWQ8SeEfG1EfK",
  "key20": "3S55NNSSUTXaUuMXtSmWfHEb1RJ4U94swWvd48LTTmY5j8uKE2ShiEYGcbcMvmFQHGbiVS1VgXrD6psJGLBLK3sY",
  "key21": "HQgN95fEkVmuMjWDPBRxvHLQa96dt3nhpCAHN61qNuQv35Pcs3H9KX5RRJftwFLLwZPac9cBL9fR3ChwgAZRT3Q",
  "key22": "3EZtHC8tMvRV6s4CMciF5EbJeu5Fy1sfRFN1QadodjVQ3KnxV4DRyu7gtfBsJfccSguBCYMhE2f7kLK1JaeCfuN1",
  "key23": "VaVTndmq1AGj2zQxnHZojiJnNvrDkGBtirokYtHSWprgfBXBekB3LDw682tN15sRbuvgaCCznH1H63m8GJuxBAz",
  "key24": "58h8AYLdeSXFcoT6tH8BzVCRzTfJEUTqvp46h4jRRZsCY7bKYbJB66L1eL4aiP1oV3GxTM3sMXi4CyKCgZpcPz5D",
  "key25": "3wB6612rjfEH3boedGCbToVpHGxYk49BQzTLQF1h4kbFScdbFirhLNUs2X6CzWYMTkUNUg67GFjMYquZZdEYhesP"
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
