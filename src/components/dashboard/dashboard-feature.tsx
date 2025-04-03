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
    "1C548QTUF7aq33e3Y34yaM1zTC8jJcAt7eKWWKEGp2bCd1qsd4TridJ1ju48MwY9PReZBBfAsJNrsFenJXU1ac5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xWagDUr4qvWcmEa5se46RmCjBRPjDkDPTDhqqLJVoCmXgiDdsr8xpND3EdbNt6Cx9AgVb4sFhsLEgUxahBxEVYa",
  "key1": "AVg7tz68yMLtceMTiWB1veuVTWKsuAbZZsapfspQ6uvBroigiP18SANT6AWipaFhfaPNxjMxgWPgREyDpTz3X6R",
  "key2": "4RZYXZJUNWye8zJqQkHNzEM1jFzQeXwQ3RXhjAMpQtBq7JRvYfVa6uBWsAoa8RGaPELeCAsgsGvHQfBCMHuvZ9HA",
  "key3": "5XkpDY5S7HReZLLcKv6q7QewjnaAtAr1iGDjt6VmWxBUmAKM5nYkbi2xL9oUVzuACbvL7Dm4PJbMA9qC6ZfNm3sR",
  "key4": "4Xg3mXuDBVogdUw5hKHe1LKT9jKMGuMJQsn9VuKeQPi6EaYbjPfFExsAhZ1gNvJSFURGbubcGcSsGgP463Vbi5LZ",
  "key5": "2naQbGXCnUERYQgdqx5mAx9kWzcy9Ex44kWFBPtsF49oVcvJ46qzN9yAeysA52vJNvVz8azDtYWimG7dkfGYmXkU",
  "key6": "5qGrTEBNZ8StZa9GgtfXVtG7s4SVD5uoanb5DVima7PBoEirG5Ab4mdDxvLQKG12S71i2ZXRR53tNDmXdi11vzn1",
  "key7": "PuGFJ7Uu21qkRHHw6Td7bSPeTTgREUNEgoERpFLiVHtut7Sq6HKMXF9x7GKc583JFS46paUZeL6FQg6JCF4xsPY",
  "key8": "u1QS8ZTTpCnsaLYxxVxbYVGw9m2otqBT3Q6v7Vu1AqJJW4Aaj9JGe7sLqbaKW3XQazPVRsNmMVBNftT4xAPizEp",
  "key9": "2dpGyb1R8bdr35zVJNXivr5yFjuLvyQ5TYjDuoPQ8fo5VJYVtiQToTdJyWcjJkE94DRZogiVMqodGVAkZSC34tFe",
  "key10": "hMt8vqSRfwnNc5wNH7WwNkgtMV6DJDaHYJbj1eSjjNu6yS7cxUEPfyRrEG6bEDVqYnaeYTNEz5DqCUaydsdpTtf",
  "key11": "5iTeDKAeDwsxqmhRraczgj3cLaMAbrk4adY5PghbW8rxSqfmvTdAD16mRgxcXxonQnfSM7jtqvGCRnuPCrzx8GCF",
  "key12": "DCEAKwsg9T9SbYiQ6es8h2jtCnhiacR5aEioh2cohR2zpQZgMyrkDuN2r7fdrUc8U8yU6eYjTerWwdecBxM9tvh",
  "key13": "DPjoQgNratEwJ2uqV3PpU5r8pBT7SF51n688RqYf26xZAKZ1c5gW4nikcNYzwRhPJyL46Gai5cjY7N1HuYRSMYL",
  "key14": "AxobWcJtjXfwBjzTNKshcVx5brvRGicVuWJUJfg1WebJckZDjnwzMqAneuo8zWsKzKkaAd4bgBjh6uPFWkMFiHM",
  "key15": "4Ndq5XfEmLrpzD5CQ2Ntvekx6GsG1pRgR9SoDUtu3dSRaYyiCU5VFKujg3xUjs3Frh9rnGnJs1pHJD2ErvdBrzDY",
  "key16": "hpkHaF633A3SQe7NxYQBFVEU74fkLFSjQMT482kUwSbN6ivMFkfaHu9eyAvBytEB5ag62772JnRvu9qKhNQuKqB",
  "key17": "5qP9L4dgc45JFGaxt7fUr1oW8YjJx2T1bCJe6ma9pKXwr5YdQMtZNZbpAFxpSUNvrZ1UrvYyrL28o3PV71PV4TWR",
  "key18": "2kemW1BMvvuZw3jvLB8SLSkP82oFrXgXoUooSFqc6SAetzHDRhKJsA13QKyb3WUjSpQBN58brcVb4WEHLoDcxx74",
  "key19": "2QDoukRvZodiU2PURZYLJpxNTqJATh1DJKEKqUkJLv2ZygWA9b42Unfxc2THJSTAgfRry4epcnBH6wXmLzxVGwNE",
  "key20": "Sv6UfVnmPHZ9oHhf4bPTuhKkfa9xqyCqTqP8enZTogeHwmkzKCu64Wk9ssspnWUJtrp5Lnkh2qVHRtHYiDq1nhW",
  "key21": "2Xva4wqbG3qqtERcBM1yJ6u8gj66t5jRnjXSzZziSVXK4xAeEU23Q4hcBmwryxbG23aJ4SrAv2mKZMU5GW53Xb5t",
  "key22": "2TTznVNAfoc1AiCzQawhVFiBwVrwtPdvWiccLkwoJpzfmJcgwcqgt6eGhydULFEbwM5C7L3RvhcbHuVKMh8cPZue",
  "key23": "3HTtVBxXSNGjP52Xrg7ptHFU25DFfNENuPmVdtgSjaLaZDUiHLwJX1oLYT1CD9Be3YPfGnNeM1Ab2C9BbBhU6SV1",
  "key24": "2cHhsa9656F6Hth9bGEFGqp2hTmoV5rpMzKvEYpoYS13Y9WwVEgDjArskVaM5KNprUcCkXueJm2z1e7PMUScB1Pt",
  "key25": "3ELG4UjvN1x5Tv7L38Qwa1QT9hhFYy1nZg5TGPzxxmqRjQbBxTMLaTS3vbXSVZ4hcMQazcFgWpxKMzMyFFaMXKu4",
  "key26": "3TwajHioUVm2dZj2QFdW93mxtn8jteFeh5GVUfkgXUbPvVHsNEKQ5YjVsbBRVgesAvu9tg3tHqS8eTmV1abtCTGs",
  "key27": "LcL4AUoGfyStoAg5K3FwSBpUuGpnec1TJ5HQG251VHkuHZTgumpwTzQfY46NTdR9s35AKsCkK49rE9pv8s9sC65",
  "key28": "2D6nDmAHdYuGpCoGxvJU7fbZCc9V5PXod6GPhMNadT3x4xAebm7vjY73PB3YkwNgp2yZ72A6M2Sq3LTPzREHZWo6",
  "key29": "2seoqeTYRF7WnuyGHDdV6ZdV1U4dCP4bSfpMzVpxidem8PTHpcrkNGxeoeSSDuq11VpfovhYmZVjBziD9ivT6vnq"
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
