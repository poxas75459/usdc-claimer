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
    "2wDH2P7BxhmGU7CEavBzY7SQVFsUXN4j3mfVw4fEfpggJM4VA4AGd7oD4pshHF6GrRyU6BHhphJU3qHtSVLHQNFK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AUN4uhtj543QSqy4wNRBdmRPUVu7bHYDLTdip2dvT8ZAXn6sf79N5f3bX3H2ZWmoZePAgqyZQYW6h4WTP8kxnjb",
  "key1": "3rvKgsq5AE9qc5JF1EMMpzp3se4rob5qQYHJcYKdjeSS32fr3BipR8JvXpGwaf4RAmkRHL2XUi6dN7uw5Vwpdjvo",
  "key2": "3XTGgzUbcNH8FCJVz8owWA3zTBpvXYAg6XCxALek7zW99KPJ42Vmhw8uTEKzbSLjQksuZoheP5oqaoZiD4wUQs5G",
  "key3": "4nTzJtGfXGMaWGFDjXKMtx26fWvPEgKjs4P1F7dHA1ayYLzUbS3BfAzEzFFJvz1k4DooVpTmHyBxU52dai4TqFkA",
  "key4": "4Fi8KrDcxXGjmxbeEseTputrgVt9CN9XoBF921Tg5Muhqs4CA4aA7kGtv8uzeCnbGQ2QYhpV4zUXf4a1b9mri3et",
  "key5": "vNZsTARPgXiCzQ8Fuw84tbzfYestHAZknZd8DK28KFUka9W4NZoyJi146ZwjmnG6Qsjb6gctiGokFhpMmY4htzw",
  "key6": "RQhmsFeicNnyje6WXEkMauX6Ln3uNxTpViBhcF9LbKG3aWx4CzhXJqP8bddcCQx3NFDtZp94xAjHVDL11FEh8qf",
  "key7": "5rYJEnsxvusdjpE8njrKpUmdAHtcjwfyinGtyeqUGNo5ciXWWumxzmwefEfhHRWPivt1KVerRWkUTB7VhyeV7bgA",
  "key8": "4MdHKPeBk4PMYwrfDFN5CbXXNBdy4gEniW16ho9hdyhNzW2RqGtruUJNffdsU6eaypjbYcU5VHMEyE37bGiPzmpb",
  "key9": "4VhDeuBeni696EBPvVKU9Xj5JxtYQtpMgYtFmQiCQ5Mz4JRJVJ5LVbYidJz4dFkFDQD7XJDHVzwtZewJzuCAUPkJ",
  "key10": "5wYZjjKE7ynMwhTXTBPMCDVpnZnEctxN8WrgNKTrnqzZucyQpfwBWRnfx1xCorPf3LQrP3vFzPShfkXaN289Mg3C",
  "key11": "tJYwWDPLaVfs2cfYb7hRtNEbYBt2sikvRXVv6PFhmjXEFSykTS7QDD1jcUuFBwvYWQBX7JtbUrzJfaTbRyK6EBS",
  "key12": "4XRDvALi4rJfcLwU5zt2VWuorYDhPeuUB8GQcsPTRYwLyu3kCHSQUpvQRwE6EvxUdB72fuG4EyK5opFHkr7v7K8x",
  "key13": "3HMLeyJihCeUntk7o3yipuoyUBCTbWAezFCJEiEnzRwesdhQEecovCmGVC6hphCmPgAiVg5dnbgFRWgm2HT1BATe",
  "key14": "3BAzkJGBmPuVykpCucohYYkRqQGWx5KtSdzNZWVLJCEZGzag1P3BUEDUmCL6tHNDUJi3LqamP6cMaxTTUhCojb4w",
  "key15": "3hRAbqZu4ND9mzgLDZ9PgbQw6SkgvHVWxgWa1YY4oRZYXxo8L5fcWwMfaiKDzxQubsj2LEnTdvYDPBMtJaodaiQU",
  "key16": "4btN7xDRAxku1gEEngS52ZqHwwP1T1CPKCX4zxtQzzZ6bMFzowmG7q3GKnkUB2pPow2mmXgVgg7d4XAJQyUYc7W",
  "key17": "5wUM6egfuSMjbNzJvnAKMubTNKMgRfjccV3ecUykv1yvnVZtn4i1RgBAdBFeHkuLq8M3xKwapGPkRpMTpxhpBP47",
  "key18": "29NC7dFyDRB8tCjudg83VwY27QdiJHEs1cZ9kzz4PDvj7CNcHka1dM4NcGcMGMRm6qsTqJHwzNadvUto9dUfJrti",
  "key19": "4N5ewMGpA9GsxLHWDFGfqmdhvhuTGgy7fKp3Ye8uPtW9RgjqopGQX21zFs8XSrc7iVheRFxfA2aeLqKu4xYqk9QB",
  "key20": "awP8HnZwMmbHhspRhXUuKjKtBZAZmC2fDysct4xbjqLsyzD7JCBNvaMW1fw5ngdbcMrtSvzr8t4hGC4EpJFgs6y",
  "key21": "4GGdHkEw4vzkQuyvBcSS9KbSH5AHWCSX14A7Yoq3Sxi7tTUv6JQUuvUMEs2eFeWGTSVTxCiEz5f5XLBZyrMfFdY2",
  "key22": "5HXy89ovAkuY1NWzzw3HcdxT97g9vCPoauZggmxu6RAJVcy9rWuLK7nYNypxN3cJJ86N93wRNpWfbYBU5j9yBTCs",
  "key23": "4wk9vbHjXsUj8ZT8pK9kHewdgNU7oMWvv2Pkx72TmRib6AKp36qoWpXKuvmhjUnBt3go7VjZoTmJgqmg6qNQfxTd",
  "key24": "3Szq3SKmhngxj2Q2rPiG3icnVEy1FXtBk1T2eQEhFwaRufs3LBW4rqhs4qE1nU2txxoXp22AVMLe6PxcnoytSa6q",
  "key25": "3tyvdNqYHR1RJNediPF5wiMLUEEMo6VJ8BdSbKZ1vjkAKoCMmmRFE3ub3yzVP56YFx6ZTdcQpDmHt9SitBgEFaGu",
  "key26": "3RrtDJL5AsJiQA4D7xaQsJuD5DC5FZReuEHok4iTMgvJTBfGL75t8msCKpjQ2iJpx7iwft5GSzcg7cv289zokp4N",
  "key27": "4tgWLvG2Xg2VWde3dEppWLoUctWoqnCTYy38pPXjJvXwkCkQKdZAj1PmxhPFaSz3TusxesjUtBQ8e3k9Rgezq8ME",
  "key28": "ebmwaqo7bmTbNGDU3bM4nYoz8DbtDCNnJAvJbEtuSTMZPkAxBfBUH2itoqHaGtocp4SbwAcPDYg8Zamr6FiSpyx",
  "key29": "4dKaWELrYib3DDBv83PkPbA1sUAnKSj5pbYramRRcs93BHvsMhymmXagQYp34fhKXVxkYciCp1Dy5K9jKFTvxx1k",
  "key30": "3BL8uCGqDJqqhFxGefT8i3Kkq1x4zyD7hR8hrgNXWjxzpUbvhhrqFaXYGAHXdnSXR6Kjryw2tDL2VB3erQ9VeA9",
  "key31": "2f3aqixART2dB9y5kK6KpCU82xUPmVXDg5L6K7vVB7ZBZ7CeyVVxH4doABG3r49Q1oBtq4L3byDFphEtmnJHVQxV",
  "key32": "2senoVDrfUGzuAELZWV6Ze6oL918UXXc6RzoY7VZ3hZLufk91akZnXUtDvzdQ1Ck2dcbUAKmbHFB7uQV7SuLtTHJ",
  "key33": "4pBZATWXTXbNXqqHCt58kZS68Mmjp65wc5AdNRbbrytsS1JhCYo5pGC33Hw1xLsWUAnGPnojugRCq44xRjNrJNqt",
  "key34": "5WXUTBR925VitaD51QeoE5NsZ9N9kcPnfVLRQop1AnfroCYupEEyxmLRXDVr4X27yjN5yBeV1wRQvsQd2LBNwutQ",
  "key35": "3vRcrDLdGL3vS6WmDfpDCWUeCYxX4jpeABNgaLrVcvCDHGVXxj1gH2g3CzP8rv7vsedvXkbmeukHN9S2F2nswyLb",
  "key36": "36G6rDWZnQBWsvFXpmvTnE3Z2U83ACNn66e8XBPFct9yZDeeK3cAGrcfzJTbjP8qr2YMHupzjrbTqhHKY2C3jKCU",
  "key37": "48p4BPrEWYsit7vP1WSackoMPQqbBwp9WEAaqnKt7EFCDNBB1NUsKMuPPnJNxeQuxxuiWA88RGXSDxLwh9Qg57DN",
  "key38": "4dA7yNJf4W9i8EavPcP1PWQtu1uwMWQVVQsLVKdC3aewraGE248MaE42UPcXJxoizTApbQdWbTMCJZrRzbA3RHyw",
  "key39": "tNYovccLc3bHGYUFHmgYqyTZrXDRZDJTeCUm5dgQGMKAYPWyfuKx6pmc6Xc3iVCS8Cb7ALaDZu1aQN1zLPwZbco",
  "key40": "4gBcWbWk1emAv67HobEALLLYCkAbFYemLF1qM3BqnGEXEYHkqjG4DKbu6AeqZgmhV52ubFyRqnmdVZtEKkyxddEN",
  "key41": "3CaN19MkEgSHfJZBMreNJEb9ukWMp2RVQXcPpyLQg5CaBKQo1GZ9fQFSgnrCzffeZC9vngLBHqovV2gYW4kwvQFM",
  "key42": "5tPoe4a4txS5PtcRRdBhri2Nw8V1MDJRuNbSG1ToduDrYN6ZfAfZyukb2stN4Wtif8rovHagyUyN8wMwmSgFDMJV",
  "key43": "4cBb89jsDEkURHvHR5EEiNzJpz1VePPQnYivBTirgQLLN9treZPRSzCAn554hYWmAMMovDACKYtxBgYKNwM5abVo",
  "key44": "3oaQ9GP3tpPtsRWuWs5BFF5i2y8NVqKw2XAgiJH8HqVwg2gS2PBUBrL5Ezq2nijGJqx3TrQaHF8SHXVxSJizBWDC",
  "key45": "3dG5VWFJ7jpQYgKTJvdAzRStTr89EcsRAdikgLpBDkV7FLw5Y42unEwmhRd7UpoUAkijurgaG4w9P4ytjxTrqcTn",
  "key46": "2t6NRCTb1osvU5aT9MUFa17GUTLNNjfrRz4u71urXGbHq4p2WvnqZYvDMDeHiiQMNoAjJno4iVv87ZJzPFxvw9Tp",
  "key47": "2qMsXaPgA1nNZjM12vmGoA2CD1eqyK83yophQ4xJhEFMffqpzp4gPJfqSvvMaQ1VsUfD3r6z4bt7JHpHn2QsVpXF"
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
