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
    "2sPVLEX8SPUS1X1pN6iqiNxQtWFQYdm9LRC7nxFNuKNqzQ2Nszu2zSvFR1xij6mp5UzfS8exwNjK2s2a9oxci7ZY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tr3wsyh7Jeb6cTNEddaWatkLxHrYwXgY7APW7XqK3KeKkHub7M1r8zLGLQ28ac7EjBNpUDCkVuLdNuB9iFAM597",
  "key1": "BU4hV1taNq15C9s2JyCy7ZSjYAbALFGaFE4W25qn9JppuXcniAGweenhvE12kERaGsmP6LAE6K3W8suGwQ3btNw",
  "key2": "2Y3CRip4TcKhnmqTEYF8ipi4TkQD6Yqf54joihKsLARgHqiGYLETEXTaJ3FcJZJxRGDg8p7cCMr4P56c99rbDwxw",
  "key3": "gfgyFkLZ2ywBFVnTPBcKCqFsBBK91cZ5mphXmLqMQEWy8eXrspUbYCiNCTL2hKkcP9KMk8rMeRT8xUfjBWRRC3c",
  "key4": "2GhcLJN8tKXTVhFsVxxT9N25sn4RXRJbG33RAxAmmRQDvtvTT4App37NQPk8FJoe6GqDfNB9HYGUKKxLRso7m6cG",
  "key5": "4ho2jiJB3gTHSsX3G2s61gdYFE7F3HPyfv8geFZ43X7rRHEhThYTh3SrGKjxV6CQTukuTq3hLEbAJY2j9WKvNsDb",
  "key6": "2Jq8Q8TsivnF4LrjvvwjRdRGb4KQnzTXcenSE7GkdYq1Ds4HDptAB5dAEmxcEWaESLDsr8D8npBKXYqCj3RvMaCy",
  "key7": "1Aby4E977GqbgsHZprkLVWcysyPPZEFZVLy5pS6XkCHHAeTq5T3kqrwpMua4cWQ49A5GsFqv8jGN4hGYNbDUEZR",
  "key8": "3MBiM5rfmgrpWKLuAz62FmLguw98bbBe9ry9M9pSh9F6pLKEdC25hnh1d87zuUfyh56dV7L98tPkbNpFrcZ6zseJ",
  "key9": "4dfMRt69vZEBJptDvXnSUCazpn86Pu4A8e8ADKcKiC6fAGUoamPHpfTo6fTMWxrJMPTfZENSXbzPXo2ZjhQTMZpg",
  "key10": "XDMwq9tCi1tziRegMrCNjtUbfrEt5waSmq8QF9jQuSqLE8xbaGEpw27ycNanogVcg9XacRMgs8pNZVMWt5Y46Dp",
  "key11": "3gGboBSxDDEf4yAyBVyvNHcm279ZUNtuMRte3wycsqgCSrNHYyDso8tYiY9QoehvhegBTirzC8HjGcU3uyHbhfvd",
  "key12": "5fzw9roXejM8h1AZkCZq1AQ93poNv9ad1UCPzzHdqLAXGqvG5o9DdSYPtYLNWXzDSGjRyXbfES18x6UDXzj8gpLC",
  "key13": "8e7vr4AaMkzziozkHbBj7pqeo6ZJoX4QgMytWMLcFhAzQ3r9Ju7efkeCtjr8jCFuTJwUYzNkFhhMbSQNQimtn1p",
  "key14": "32tsXco8Ana9QgUmqVsNHQxvo4vUv95Pj968eXj31BDKBf3SHKb8DkZ3vzFHZ8QC5iMbTQ7ZXDLmDP1XMovCqvFo",
  "key15": "5foxhG6SbFKGvZC6VkAjrrZcrBGQnDp9ZGcoTUNnSHxCA6PMiZ2FewnZCzM5arKSBtYEkvbqkHNwFwURHRBmf98D",
  "key16": "5wnWUK1qfFG4T3127fspzfTZDHwaRK4be1CGfFhWeyvVvrnfBttQXNwHpKwj8bZMQ9kWuiyUaZFaoaLHAX3jcrNG",
  "key17": "2rYnp7Noy2nAM7AiiyyZaiwhYYESj39hWZwDNZF9HtKieD3jBcXSXspeMBwEkN2Qb7qzzTHPitSdzsW7UcTUuUvi",
  "key18": "4pqxtNRn4yHeFZRxANNDMJZNeWAwpgLBfYuVoeGeLkLPiv3U79CbBv1MCQHMdnw2yK2EVMEbt4by6ujbX72xGES6",
  "key19": "V8xrXud19jDJhhdbo9oB7x5H26YPdCr7cJfvjy6aLe9PC2SZ94hcNQ6LETYDAVC9iXUGQqjF4mXVsubChTEx81b",
  "key20": "67E8ekBxNoBHME9XHM7JXhLUS5kVS36rtv8kWMMN8JPhWSwj15jd2xPthHUhmr53WcCaKL2g2EctWmPxkJMBVL1d",
  "key21": "3vpGL5r3QjFj9B8xUe3UABAobdQpVizzuttszHAU5HEtFCrpXD7otUzi6Nn4HPpzw9XdKy9nQ4xward43F1qxqRW",
  "key22": "VRqTvDh55Js3f2KfCxYnUrbb76Q3UMojbzYE2j8kepqfQ1Rv23y8u8XZaX4sCiGX2o9Rmjtri2uE7DjVbyvzLYB",
  "key23": "5mGzFoVPZpMxrdy8vVHkf2fgvesD4Pyh7Etp9C4R6g1FA3rxzepTc1LnWdaAgt4vvNuRWsTEVL6aD4ZYb7YmDazN",
  "key24": "3p8D2AbpFTLmjJny2D8FakBNJwzTNLwHT6S6eDT4vCoPv25GQU2PC6vmMGzgyH38CmbPNS3uCVSPzTkFUkxB1bnp",
  "key25": "2bPBZv9aTkStxPfRKRBC1Fgwg15TPe17gbxgKEtaunsnWGYp4rSvcCyuPmhmCtbyQu6Qm7TmUEijqXTsqrNUh9f7",
  "key26": "58jH4MnWPSyAjA1283wasGUw9vQWbdNG2ecKfemrc8aXZFCCdk7s91PmXThRbqEtHMKwM2nN8pvx4CyaGrDDcygR",
  "key27": "5heoLDLj98ZpC1Ne2z8LA2oufMDzEctGq1AfPADQ77i7tUyWCEQQMjtpDh36FS2867fWvJtyFFPc56XfoD4Ttrq9",
  "key28": "C9cprjiz2aeNHn85jx8JP6R3bT68L9rWbbh9TZwfZWRUjhj17thp1GqeEDFk8urFZBAWtyWJ3wwgrjgHBBN7wPm",
  "key29": "2yabtHbxc3aXf1fd3VdFMni1aJP6FmHQHeSZcTDADCKaYzAb6jKzHnrYzHBsJsi2ctstNvrztZgGFgajHkL1gqWk",
  "key30": "5pu77AHMJUtZyPCJbm6RCijpmyC77htnxfj3DnQ8KHrEsyB2EQh7cu3b5ifnZNhxfTktj4t4Hoz2L7TdSVvDzS25",
  "key31": "KnnzwicX6N7KGygzjRmnyJLd5EpC2YFFKL3JhN2knmg7k2Dig3FSst6tibBX9WZj9KqTZwTLGN7WgSTfPVTuxi5",
  "key32": "29f8P25LMbcpcVQ5Gmyzwt3pvUutXvL6KHdgXD5ecVicLLrrkK7aKYgBHcoHCTpiYADemwtVrCupk8XSf8vU6tEo",
  "key33": "3sqMc4SY42L8RbVytzuNdFARFmCo6FsLZrdz4zUBp5vpcp1jGy39mDAKj3gRRocdzHyyfaQ6RSq2coA7eqVg5x94",
  "key34": "26RGuBCDTiatH4dfSYgasyN9CNMXwCj2pzTiQueV5UxicSJbQx7Ub4i5uSoNcuYD5R4GGnQdCLD1jmxmcEMvAHsf",
  "key35": "NPgmoC5TjP1ybf9PYPSL3efQcMgVt2CraURUbEvLr1GYwGpGjMXLVd1HCa4EVCFpw9f9Q8znjEHk2y7gqH2nrJ5"
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
