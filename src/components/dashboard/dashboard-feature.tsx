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
    "2fuZPBGQHdS1Pi2nRJS3grg91LPVw43QzNgPDCNWus99kSnzCSEUFxaTovyoxg8BYuTjC8fLsr7Xit6EAh4nM3Tj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1x8iVGZRdH6DgKQkKDVJPQeHD6ssJjtkvcW3b3erpX7JeNEK6zai7tC1vs8sMhuy1CdN3hVWzDzFYH4r44A1u1",
  "key1": "3qPEPPqr2GTkr6JM69S5U6MaRyS4hNZD3rWoXZbmY6heXMBTbrEZ5sa1wPVv9HZZoPu7VRXbCQ763d84rWUL8s9n",
  "key2": "3aFxXYbm4Aq38wFR22mb3Axe2v2zycjDFAkBMXqKGhjA6NMno1uTMbAEf1QcHjnnZ7XQy2z4nwogoKdesqZb6qEu",
  "key3": "2kB6Y7H7prka2z3aReMikGWVrgU5J9vUvB34iQQk4yW83o2MwU197C8sRvwxFsia9jYXo4kx8xkkxiFW3ZMT44jj",
  "key4": "64Dm1QvDnvdnGc3Jufv6oJSvc2pzwQLRr6xESkt7ZDxh2xZDueDJcyCvCR8KpiaAWNVcYFGxtYdmUBB5tjFWUHDU",
  "key5": "32UyJKnCN912wXybDjmFMNPLcrN8a3u8G7PAwJ5nAirxVYWsowpcxZtFXKf4etrZou4wDgVD1VePi4x1nTANZxLP",
  "key6": "4qGrof2MCmSTWGB3HT12vqA8ydyFEWfTvdoRJh2mLho8YDQ1jTq3PkM32rGw4MrMSNe9ySuBixTewPWhXK6SZzat",
  "key7": "5twhTyTaqbzVVKiXjhDP38A6VKogKMyhhSD9cZ9nzxNA6PdrtrAJNfJLUiuAFXAqB7K9BLaVTGz5eey6s4oBmEMF",
  "key8": "4MKgnPVh9kkedrr9HSL6mXk7Gh9GYUuL5b9TvifRtc4wGBHSQ3wny1W7gPQBhzfexptPt4m3wSdNoF1ThQW6MikQ",
  "key9": "2uySQDEUxRCCBVBwA5RypesEa8oqFBLYuuNsLqQ8Z8LMuqsV6vKmxyLxCkZd8M9kj4G6WzgJB4WbxQ1nrDJVVQRR",
  "key10": "3kAWpnYiDNvs6VcHvFoP7mHcWotDTdxkhzmyasJfXb1bTgg53HtvhekjRUgTdLfwsf2CeG8281tpnLUcSfD3fQ5C",
  "key11": "UsjUprMmGrvLmxQgHnzRJ9s3v7t1uf5Vce1rK1qLuVSF6EQtPEdGvCR8Jn6mwc5RWtUYShDswk25z51pECDwbue",
  "key12": "2qD7BnY7nkYrE8ivbDh2hL8GgDoQU2AR24u1VHD4bpQ9VLk7Jgxcsv9FQQFtS6X8QhYSZRYqf3dT1CbRHsnLe8eN",
  "key13": "4ezngqoQbghxUpDDTL5SjCwu5774C1xg8ieQNMMujAPpVs9RShyQDdnVWZUzZJNTKDMrBueKZ1pgftHnXrexG4Fa",
  "key14": "29XgHHcCVLNZowB9MDz2KUoU4m2Q3Ti9tUKEw4UdSqVWu7RTwBSTNBMJ5VwYjhnkBwSa1FaiaWQoCqThM8ZsTjgP",
  "key15": "4JL9kNrfQugB13G4G5wA6sgvxE4r2rrWCRyoZSRkiwa2UAWsZfTjPfEEFD2PRDy3dRRtAXTKqvFrLVtVbVeYHU7f",
  "key16": "5DiEqCkxdG8Z9GbDvtXejPbjCQendHeSeVXgQC4Q9AMcevXeXhScpkMVN97FfVQguJsPU3jJsZkLWA3jPSJDS65Z",
  "key17": "53Xa9LUKm1yNkGARvA6SMEKuSFui9vg4oPz1tTkdUV3vCJBcEdP1qReutvVkoUHpDEvagNdYf89nTMNL81mJXEnE",
  "key18": "4ikNPijUQ1Mw6sYeMgtMjiSwCzaiDvms43tapjgynPT5y7wZ8cjG5s97pCTw4V1xYfiC7vSM7Yt8fcsoTULjiFdK",
  "key19": "5RTrfYLinfhY5fTf6ESvKvhpyNQnB9mBnw5dNAho9JMK1k7CvDYi2Bz4tJu5iqYSvWQ4QupzZpr6Hd7F81in4Egd",
  "key20": "57T1ftmpQ6CYWpb2fWTz1YfbwhpHCQqCGKaE1E3tgGyq1P5W1PPCmdRSF9CbmfnA9BZeFLnvF99rCVZzqzzL3VpR",
  "key21": "3yqnTVhdtvADxoUfJWxszntsj3vngoyNbeQJzgTvbwLdVDnTkdneLJBVpZ93fMwztGKcSSWZjs9WYm1z7us22Lge",
  "key22": "5RQemeKgx1vWsUAPzssQhtG3AZpq7A71dR7uh9VUif7Zj9SkKsS1oRSUdp85utSPJxFMaM1w878TeBHb5XgVKnrK",
  "key23": "4pjfRU7PhJLECoVT1oqMyeGmAKAfFMTFR34iwA5xb1uwYZkVxrT1oPofuUzqxYjB6Nsa73B6xs1LVMzrXnhSZtZu",
  "key24": "3cw4CLRK8ypfKCbfEnt1hoAziwrVLnFAwUdQRe1CSK6Ko2rt4P8e7NvBzMbcPFGqgYCxJdk1D5bCr5qMx2P4XTiA",
  "key25": "UwqooD1T4PvHR35ybeppQ6w4Fnru5LtK6rhP3rzyAz3keqHSWsLvqSLe6F4h7J8pHn5SruDk6ZyRkEMimizbSFY",
  "key26": "5u7BzuULGUJ8a5vPpEPeRbGKCYGWxyXZZfwpgvbPrAEEG6sBDtuni1LF9MAxkeAjayRptuRGY1w2yQGE67JP1WT7",
  "key27": "3hKivfQgTcDYizECAV3jyacmB4HL9meC4YXsFTgc45ZkFaNSQnorYn9LnVNFQE8EHRouGHGFYoL9sbUHS7Je9xrA",
  "key28": "3NsiTirZA4LoEQxcBJ4EnQVeEqA6gYzPEStUniThX1a51vK1gUnXtBSG78apehsGpQ7Kn6REABLwQc1UN4GK9FWB",
  "key29": "3kkM3rP4ebfyBi9nvnkSfV1vYMHFWKvB55huqVSnatfncpNaHBmLwBnmRgwTqHVuwWXgdtoYJLLcPprkiS9mSLJq",
  "key30": "gNituHo5Tfk4NEgzGZnYR4HxeJd2kRrujd2tFNDHG3Aon7hhnsJXb8NvoBpjRw8Ewn1Mfn1yzbEHmB6UzrutzuD",
  "key31": "5D2UuNLo7Mm7evm3ReEDLUCgvWVPtQabnWMhKNLX7Ad4TrVdqZNpT5CadE6wNZp7EqoarTZYEZ1EXezc3P5b7zaX",
  "key32": "3wUAdaU8G8dDGECf8kXgfe3dAV4oPcZpCK2wdHnSKQsrRF8xnsE1xjrAnpovb7ca1oeQa9Y9mhm2w49MCEoRt7M3",
  "key33": "3dj43jJVX4L8j6Pp2GqsqissCCKF3g4U2dAUAwwcyEtzDkPrHER2etLyHSbCFuotZc6oPvaAWhjiRwQVKvfviBFa",
  "key34": "3RKDy3q2qRLdYY5XXDGC6RufbyCmGpVYWvkABo1XKMAGAjXqu96kTQUsiQcTG1y4sBnsmFBsqbpBPQzBUofW2cuz",
  "key35": "4RkhFD6b9VxKDMyf5zFgrWdyrFB8sShzuYMrwHav2jyVcYHjZfjrS3XcwUjLTDV3gMHgjkUmYZFaAXbQFoyPosm6"
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
