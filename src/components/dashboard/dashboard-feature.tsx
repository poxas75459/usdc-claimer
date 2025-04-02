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
    "2NcvG6iwHRCdJfWmnALCwP38ARfR2B3yLWeN8cnhszVUovgaDFRdky9FH199m236W4eznyizFogkzKbNBaRFCoc8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2impLwXmeB3bhqiwihqxLteAvTgJM9a5HXtczrqxyDZGtKuY9g6SEpv65Bc9NvMTnsxwEVUb9jsrsyMYhvMrNPWq",
  "key1": "SkZ23YmQKGoovRrRJpRZJJ7G19FFooNZvbarR8CeTNsm3njQm9Q9qzDdTmRDinmbGFKWifFn9Ti4wzvDF3QpUQi",
  "key2": "3nEmAL36DDnou1NFDoZFjDUTHjWkUTZ1rFRkJJK9eRF2bxgcMXTdCJYLpJC5Ln9XkXVBFvWwgV6qz7FoRZ5EAK9M",
  "key3": "HopQMGczhK48d8o5FEbLo1PpQ9ExmF7PNQhdRa4PFFTqaopUYqdiZpFVPToGwuABw24pTN7y94K4WjUnpT1CX2e",
  "key4": "E1GkdcXHbQVVsqvwTunaxfN2ZGiRbW7ySdxhxkamKURddvuSXWYMBvmm64ZS9sRmvh1ES5qpm3JcAdjY96ckW9f",
  "key5": "28PMTyFZbykgQYCYVjtEibMafMs59mQfucXV9W1zrPZKrEh6Fyvft74WFKF7uUMnowLUD3gkqYmhq4g4fKgdujM4",
  "key6": "3dgqGM5PXRHhWCFEAurhXZd4RRsNqDb2pqJeuqodg33Shbfbygsuqd95sHuLGhy1oCDbLkykntEXyA3eTheHsLdL",
  "key7": "97CCAfkwRBrwHaVsyrrxLdunpqijjC7jzVpbHuhkLquRJ9gYJfREBkaV6gcFY2dkwVJJiGkLVWbNgS72mGWMn4h",
  "key8": "5FV86N9JNLiQc7uaSKGcjPnBvmnvEzt4hEDeFixpLrCpTXdFYpmu4iUe2rmrXtWg3Qvpiif8ie2cYJXRbNHDaUcN",
  "key9": "3DCtDm1SxKZyimh82e3jtFueqzfVKz5TBiQXRuXWoUsq25n2WspAY2oX6kA3L7ZHw254oLZgBuUfT7oqSnYQfDzW",
  "key10": "3B5yqMD3pLGPtkT5hGY422ZwayNzdpJqZAQLA5gkt7mWKZUmCLnr5UBt4xNSyccucuPUHLbLbRd1CwHAWVxLMm4H",
  "key11": "2Ns1nAwUKbiuvYkAL3A17FU3Qq895jfdBpQkm2mmyXewsbNCWpiwEcQ2Qkf9rwyythVezoEToR2mrHDnXSGP7RPc",
  "key12": "2MoaiBE9Xuju15nLD31jKMhqh7AcYZVNKWgnnTJsjYbauDmso5gmBEaAHVitbcihZ8AtZorrvNnJf4c6YxxSF5Vw",
  "key13": "5xc9Hq2LwogLNr1Nta21Pwxp2qphwH5wE3s2Smq8awjt9za8MQoV1LAJCqPqPdQW1mp8bSMvLLXi3VTprc7PUMi6",
  "key14": "2atKk1HuYGbPx2AEWHzydoiDUAcrMgbzkLfXAPAdvjDQYcJYb2PqRnPzJ7jo1beNxLPkrVr5J8sSMovx6WF4HiaJ",
  "key15": "4ji7gZ6wBKZ7FYmWL82jVAkpAb653eekY2evaiBXTSZppoAumLAUrjtivstQyy37GvFSWQ8XBunW9TmcxvxovDP7",
  "key16": "4avZwVrZF4dg8XsAQNAbMSryNsMyyv8DV7EUAFhWHVVVGxfQrhqUGaK9rvy6rfe3sfv5DCmkho4jXFkX5GrFz63N",
  "key17": "5om2phpJungR6UTUQxQPz7CH9z2LsTRaofyATTVinbna4LicWHyWwEKYPtRa9xUmfNp9zfPujpd1NCwaxnDq8X7N",
  "key18": "62tvZAr3p7PGG9eu7jqrg5A4BZKcVSh9JTMyVwfugSV3QZiwC97C1S8VcNyHsZ5LogbmFj7E3etiJ7pKaFbWZB9n",
  "key19": "R5r2UxcJz3iK3xXGajDnRkTFXDHVDWRhW4LrGo7rNcyCcL1mT4o9FPM2wLAzkTAjQ4WRoMfHrX23Uchh3mwp4J1",
  "key20": "62HofWvbvxvB6h4D9EmjZUxdMFrE1Pund4S3Jb3dptH9J51NCyc6CRzkhrDYkq6ihQ6MPSdCWL3Q5X7KVdEiZMAS",
  "key21": "3mv36cHZHYdofWj9EuM3SHZkcN8eWKzZDFRbxEUPZSUh7pi8WxAnAT1n7ax3i38Wdji3NXjPSJEW4SXoQFGEArEP",
  "key22": "m6ubFSWUvhBbCf3Uchq1E95JgoE3ynxfzdH7do3SxgZWp72jaHEvXAyA4wCKNCyQrkZx6WpoHRhFvKjC4GqUcJc",
  "key23": "2bKnNUSPo5mFuY6ERWoBANYKxLggxF7L1BV7qNQmgVd8ScLLac2b2KN6m2ZnvyB3gVpfQMy2uKVdvnZkoSmKQGeD",
  "key24": "3ek6wXf9PjYBGmzgijPvcqWW1snDTf6xjJPuEC6WWDen4huyadhUycosUvbSZHLGYqMG6AUfwchimzsJdopCWsh5",
  "key25": "3EACU1XiBm8evuVoYz4UX4H4m4VRxH5C5h4eV1Z761QHUyXB5THX4cQ1X7TGUe7eZP8QMPwTywdbkVPVtcV6rqvG",
  "key26": "QaMryCFuN5wPxurMFfvV5kb5CFSAjMmYPjT1vwehRMhXWF8UbwBx3TkxAmeKKKXyY42cLMV9XJUK1wBeKd8QVWD",
  "key27": "4ykBM9g8NucfPHTwW3cHscdZeqhnCxEq2QLDBbKgqyVL27K3SvXPCbEtN2dUXzZehXQgYibaXFN5LSqAKiPY7u4B",
  "key28": "3DpxoN7v6dxcNRJvQYejjcqwwG2qo5yiupJyyoHwWHRW2cQ7q1iWCtB4BStcXeeHT1trUNhHXcJz9QwrKsmr2vY2",
  "key29": "5SGMsHN3qGMUGdAHS18pZTP5dvcuwd6g5Bot72DswHDnzpLG5qm3RpkgNnETKBm9NrZKPuLmigtXD3XY2CRHSgPT",
  "key30": "3cdkkFoYpRYwpGcc7FUUBEYkS1So4Xbx57syHmGX7vZRcLoP9A6yqXP6Qm7TkjM1Qv5nR23tzd7nhpbjYtCeZxDr",
  "key31": "4c9e9ABTw1n2JY5v5yK54YgNrumjJRtqygz3BmYLpgL1HTxMZJgnSx9Nazpoj2T5WngUFPQA8sCTyxSTPW7eUtcN",
  "key32": "4h4YQD8CC8eH3yGj6d2PWryCFUbhTVuEZq6mee2DcnDX6pHpTbgZzn17jM3mGUoMFLoSxsWM15oP7N6dtwsEd7Sw",
  "key33": "D34BfP6J4paffaC9MzZt3yqrikmC6MjJ9c6uoa3EnMcjU4NgcZcPgKfBnbttemNqRuE1hFsX9UTDoQ3bMBk9iWr",
  "key34": "dmFe44fdcM7n7owGQGqRLhuRXNhoeMZGSfx6i4zFL6RiARBGMEkxLjotF38eEdeuvMzge3h6i62DqdyQghWkQin",
  "key35": "2h8ZhzyEV3NCpUFD2P7ZP2VB8ZCf2BhoAdNkLDx1r7ZurWk5s9j2Qwwf1i1nU6VRrhjoM4qShrfFGt2DCfAgFRND",
  "key36": "DpP2z4iW4QpLxVhdciWUos18zPGhp7NtncEugVD4XJ2kogPVjQjRSEDLdprNHUQXQVAByCLRd8nayejAPMEq4d8",
  "key37": "5NxaNMcvjyVJrSGxze6af9pM5jhc2dkQfSZTuGGYWRsuxnFgszSswBqUUMQZLcLE4XbSKUZayZBchVykb4ZHgh8g",
  "key38": "33J17qFUmKTPxhhfmQKjEGuoSwUiFYKtwyxaNasDafX8TPZRdgDqz3RHcfkRx9sqKcosWqsJ5uBb61dfzJR5j98k",
  "key39": "3oHffMsLvdFxCZr9GkfkY3ydtQNYWQbSUE3jwo6cqVBzsCgxbvhrFomYnz66gRryvbD8hDMABFkBFaMkAmCufUaH"
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
