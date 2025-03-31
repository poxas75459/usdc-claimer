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
    "5LSDDQhb5jNTyVdAREkxQBfvqZ2a9LPr1bB936BkB7hQt1dGz4qY6xE6FwDheFMcdvBFe7hhqXbmJ9UNCEMvudaQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kPY9X3iFdx4bGhYWZYUh6xS11AKzKa8axUGHAYzukojAce8EyK5Xs2SZYk6VjjCNWMVdQD5cA1YDq4nxLWZhJiP",
  "key1": "2CLy5kZvd33EiujrAi2MyqsWBmK9H6h2H2NyXycNdTzaM9BUTp58ut9vHcANtRfJqahRHzHzybmkjFCfiApo9rM2",
  "key2": "3y8Dem4SGrcLN4anDBk5b9VBwBm5gd4z4eYcvV45EAEyCGXy1i5NyRxaXDBwQWtGuuzXm47bTsDGv85aJZz97cMt",
  "key3": "5tWP1jGEqZtvVkYi94LJ6nXdTpq2vLYKhjw7Xb2EPaRYr1pnubXNNkxfQK8LNmLqjWJne2x1C1DM4b21q9cnSUze",
  "key4": "2dQ4XTDZ2FhSjTjNn1munXQFsaXFsnMow3uMB42vBshkNPtHgKPcrymLEpwXYnVbttHKHP6bwyN4A6VjyzpK2nNu",
  "key5": "zZFrZYmMGajWbZgVBq9G33uQNDkQZWatEtBzjYSETwtHTQoHraKs2Ndt4dZweEYJJ9siZ185zFAKEPUoj11UkR9",
  "key6": "4m6B8YCmQCJAkHre9qpGJL3C45jaDcVdSPDdoWaU2iGGJosVEDFjDRCW6FHfbbEkpgMM8LiYkoBNPMrnKTbstPpJ",
  "key7": "LUVyPDP7Vh17QGq9udUdDYvzfs4Hz7EpAJzYyfM62aKceAragxtbmwNDjGExB5ytv3tSvXftUqdKT1dqB4pCSrv",
  "key8": "yGJaZrz9K8AujzWqrnHywEdTWwXQb5q8JKYyBQrSREHW7gJtjbcy7ScEJpQNkmPSEV4PLfWdzY82iQHxMEYYy9Z",
  "key9": "2b1UbwMRfnFtT8SJrNJpY9dEz6FFeSGUwT4Drmo9hTobDz67phKoqAYYgDfmfPjn36BbfzYbDSVmQDjUovtEzgw2",
  "key10": "5xyJQT85EbCrVHF8Uoxqtb1Rr2sPLr3XQ4s9UmgVTpg7Uh3jSKDiXvAnPQLNbVgPHwKiHx4Qx9PQNmGVGKEDeQDG",
  "key11": "2w7uJHt2uwDtcveNpu2vK5r3HDT5SNnDmLHZmrA4HPtHY6wicFPSZ49uc84wUD3ECxyDAMwVrsUxL1gmeTbPdFrR",
  "key12": "5k56MKpwhZ9sTjAtk8FWmnhnhNK32q2eCqAM7WwbJbBysxcqBv4YYr9DNxU7zHETh623qcNQitriPFbfY9mf1cz4",
  "key13": "2mXhSSxKoJYv2K52mvLYaKoQRe15rkuNpMBVV6FBaqUnZbcc1HftJQ7HAt3opCQQaiqySu9UVsjKoVQSxxptidQA",
  "key14": "4Ce4nD8fhC3oh8tJ148ENU5bJVveePrQ3QBGj84xAbcwgRiprS3oVXYNQyk7AEeMFmPvLpaxSSqDFW6odLe4W9Sk",
  "key15": "xgS6cwDJsedWabCRepvKxVY3NQx7hni9VXe4hbeRD3uSfH25Fmk59VLuRCnTroxZxTxjtGAVNDHWVHhoyUbQQas",
  "key16": "3acQq6xU65g3f8TKDpB1YkH85fTbHHiVYWcoL7c4Kenv9jes7RuoQ4TnjJfbJgxFTmZPFzPkra6u3B7JXCLAbz6A",
  "key17": "5gvQEnMei6vrubdF1WidmBZcy7okJJNJzHuJaNEK8AYrPAHCRML5qqEaY7bERuSLzmKWx5Y5Df8A1oaUmAy1cM5g",
  "key18": "4Zx1igsTch6GFmuCDmVgW41vZyJky1TFyqBDhaVMfggaLNnYrZK6n33MTFKhESbniAhFGEBnvENZWkX41dvimvod",
  "key19": "4KbKsUpJKu5gSxcNT1ExVhoUzwZ6k7BzWp47jQqH54ukYaCUbP3TDqBsr34mvmv7hruFyp84TnWXhX9ePckirTxp",
  "key20": "4nwmMMd5R46Ag91YZ3Tw8iuwZ7zk2TebgbNr2LWk5PkLqRYgzMfKDEfVKMqQBXc8ubgUoNu2sVpmXnHaevDn3NMM",
  "key21": "41oamHKEDMGH1df8opzTDo5ger9eqXD2TxL9J9Ysam1hskEW4oLuUEqrar2eyzE3bQpE1di55V25jYCXPaKg2fGr",
  "key22": "3YxJNa2PZUst1eXh6BqsoMRu1ibM63wcQ89rf4r42WYMCMRnKXDhmvzsdcEBFHXfmaPJCGCxxYPJmHyaSDBe3ZHA",
  "key23": "4WB7GJsN4aJAMKEp5Mj8ShvukutVbNYhZvKTN7cRbRbtLmcHJiMSPoRbqRuFSQ3hco8shUhr9PsxhjVxBZjpZTbL",
  "key24": "4BQpWqSvgqaxYnGBN81R5zSKznaxQx5TueAqFJYwaUpBaPJN4dGEGWBgV4CZsPzB4aajx2vP3398WskWMzVoab4",
  "key25": "JiHK5RFvH15UDydgasbTi252Lf2yrzKTbdjg3QvDni8vywpmLJNYx6zk9WzELR1quP1S5PryUkzkpcsfPe3LgtM",
  "key26": "5JgNeWMyte36Lfdg1jPP18q3MimzJWwoYUmfdhfWcPycrmi6fd8gfhK4e1WKdTUVeSUmxxA3G8PCpAzaucTLrR1i",
  "key27": "2grL8LMNRju2PyrSdPiKXPSpbY3HcwHPQtMVZS79eLweSVkSqjwv1sJ9CQwafLsp4vyyb771ZcgeU9C6vpWmBYyX",
  "key28": "KMxZqQnq7Jibp1ohjrXJLEdhQ7gFgUFDuyUGncRwRSsoopFPijVug24rYfSVP5C6QN45GBKwCnRezyaG9UzEFfs",
  "key29": "4p9tQdi4HKnrgrFGEUxDAeMa4pPL3tMbBqeXunWVUnwHY54QJ5TvRrh713kUvaybBpzZCDwsZyvFBsRGC1pZhEP8",
  "key30": "aj5bBBdZ4gLqdLALWp95w64Z871LoYnpYzYAcvN5igT7WMqtCKPmGPocgYRyHsEmZrVzVyBqdfURefKA8DGPVc8",
  "key31": "4sKqTwuAwiVHhDcmHRbRk44EKLaryzbrpyy4VcG8gKXwvYqbvcdhTR1rojAPFQtBt1L2JGfhU4HFQJcVsbZVsctX",
  "key32": "3GnuLvxq2YygD9BSfamuFCxA9JBUdF7E2WdrpApBjGHysNrpGY4aatYLMxkQdD2HHhodKjbmwZBd1P5a1k8KysMy",
  "key33": "5nydeQwsEmUEf8WhysDCEkxfk93NqSXod8HWu925Bw9tcQz26e4YLVtdoTp6WjwAUDuXCXWrkt2JrYhs4UWXpPZn",
  "key34": "B1iJb9THZ1qKrrF5fQq3SEVgaHWx7UDr753V21EFgBZqERBmzLma75kegTEN1h3V2zU7Zxs3y62tNNaQpqmTJZb",
  "key35": "4TdRixVTaUk9DMRZzttJ3WWmhgeadyaYhF2NV18JZmr3FCC69jrPPLVrTKdJgXN5RCRXVxDuPWGqe1yUSYcDvcb9",
  "key36": "31xUSYTEybvPqxQrJvWKzcaeZviLwZFj7XgE9iws5oUa6SWdWBEJNJp4PsmHXyPG1HirEtKgGULA9qNrUQ22wkM3",
  "key37": "WvDZYrMfBLeo7f1rEMwbCNQn5i2xbJTBn4gfJosph4MC4FnUCyWvTdmfmA8a8msTgciRHB6vxgKyu5eeD1A3jPf",
  "key38": "3qasd4LJhbYuar2XXu7K1mukApSzSh8uzPjWcxZ7ddQcQiEY9E7KBCvZG4aJx6x5diGt1sQRJXc9vmSFVNiDDM5t",
  "key39": "4eoNoD4LfJm584SS1oupkR8wJtyggcZWLA8dVT9Khp2Qt9XaySJAAbx9jkHVs7udb13ifki9qXc3gSsQzxaK4xHN",
  "key40": "dTD5M3uAaTfR6NpMg3L9KW3sTHkZoWXhBAAdAkvcZVPkwRjRRvuGkBa8YwVVtDDYGg3TzboqdRKoRkdCWKCiMiD",
  "key41": "3juyaEthCbbZExfTsbFQxY7wwfiH3GmRaBRXhdxGV8YKN1Zv22j13PdoupvzZBw6drfPvuhAC1yx1A8RG4XA32mN",
  "key42": "5h4fS4HwbQaYxY9tasUaDDfVFs6kH6ybhMaYWEGeHxHnvSKAqZY3pTUgEDguGMZCAmMuLvkqzHN95CQNziqTufNK",
  "key43": "5kLGJYu6PLwvzJLFYPxgGwi6R3Kcphfrvj511Tin3i4THq3pBWhsPimxnwV7iii7DTRZJLbmE3FNPgzY1Qq9ubYh"
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
