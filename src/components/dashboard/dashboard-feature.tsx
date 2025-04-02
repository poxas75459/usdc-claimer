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
    "28iMS2foaqTXbGXHPZqrznZienWQ7rnpXfJNX9rkfDJF35m43YCJsvq9JEszzUs4RoKxk8FBGzcJT8PaPntVj5Kq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qYpcRLpe24Wg6TiUzUL12hiu5hVdsamE2yYg8XHuFwmav1J4gwJYQcnGq6a74z9uDvYwuuvvuM31XrqF6ek3sa1",
  "key1": "4ULrvxWknFpDGqeKVgdtj5iBxcfHRZ94u4pTEY3KptySafpFXcEZk6SeeKnGxuD5dbAQrsAR7mvCG2rJ6CCUPuUE",
  "key2": "3stjddcAJo46pYwPtz9UscpkT1xSsjje2zBhdyJveuzNSbJBEMa4pPJXdkaC2DaYiBs52SnEEaPiG4tj1R6GXFjs",
  "key3": "2VGTCdup3mbFumWo1k7VuiXJNkm71ioW4tQDz2f9rU4mqkBeHcsuLJMMGud8L3hssosiwDYUqvF3amiSTjZ18hqQ",
  "key4": "4bqQbEvdMsZtKoBcphe9EGa8WLkvmTakeW7ErPgJVr4j9THLyMijEwAHjhtt5KNjsV3KotN9EdESjW3kLpFcuviq",
  "key5": "S1TLFmDdZTXTnGmAie2ZokXyr5PH3KTbF3uVrAsVuYgsdP5Y3sYk6SPw5ghe7euT6Ar82qJCcaDdL4m6WUL9GZD",
  "key6": "5AQzWPsUrMfGRvBMtwPW6nNWiGxVH2kbepX4BDA9Mi53m4pS7pKcSwChReN2gmjt7aBv3kYWEPzHqmsdyQUUT8jZ",
  "key7": "5pKib4xp7YnoBwLSXAfjzgVAi7RDycueAr8tjmea3EzXtb1rmZFYBdsgxHiGtfWtxmGGiPitptzW2BT2JShjn8je",
  "key8": "Ggj1YXHt5jYogjqwn9vSPw8H1L2PbCjXq6QxoacmxfKrTTEsx3joCYmRLrCbpmiHAVbckWATequNbnMuUsq5yvj",
  "key9": "4gMcJH8SJgRjoxUPhwSBr1Tt2fJsFJZgNtEKYgrmKgjkMqUoeCFoGUUzYfRZCEhjp3QXq1uYuDfC2dDFKzdqNspi",
  "key10": "3nWGtnQXK4iRrSPNcMbC8CuyVLA55Y3pdNnbjEGpMuHVncNVUmTMncBLNuj2DhLXkXpiqRK3VEMz1miaUhMGWvxw",
  "key11": "5a5L5U1L3ANZPYfKS9GMPjRkcZzaKbumuzGgkJ69Sp7TyrUm4GqSG5dEe8sGVam74pGystqb6zW2MHAs3wqKGkmG",
  "key12": "5AGFiJA3LPB9vfkuedMkPnc4DaGfmH4V74eUf5LBu61TDgmQqofnr17ciUACjBSgxdEqyGnHTT7dM38B5JhNHfDW",
  "key13": "5JSsS9yzDNrzdXQ1Zbt4rBegUhR6bXWsPwSbpRwe4whDDazuqeNRLEdiG2djZVU95nkRSW3DeEWZ25y62ig9W9qH",
  "key14": "5ctS183B6ycLHoHMrZg8jntnNXb9PuYuQ8ywJCY9B1v6VEoMp6yPm6AKBT3bB95rfBnEVxUpCGEnovQk6J3aTGeH",
  "key15": "2H14kk5dHRNEv14R7ySyqrYDTdmeJHGQjuCt6Cfi2yppS3Sx6KqeDGPBFwWt7eR2NrXGigoYmAYiZNWNShDv6dtS",
  "key16": "5zzrvqJLDDd9tYCphdrVgKcdQruM5GCpu8vcE6GJ5yKqj2gZ2RLX8w4u98ndztVFbCMYN8ZLN8Wrb6F44UcckCY6",
  "key17": "5Gq6qE5nCPDVbNc2ViikSpqwSmtYVNn75rvge5EP2GxxP5W8aEbFoKYY5etWpYbEuBRzBLcHmQjyQtiwL58PdjiY",
  "key18": "z8QNbYeatbWtsJEGvDwye3gSKqakJu2bZy9Akb94duozbWG4UDoZraBNfkTWY9k7Jm4NFFAeFQSnxK5MvLsNejd",
  "key19": "3ms3ddS155zCWC8refiYDoFDhcMJJ61QqaWeW5u8avRmJxrvDDiKnpUcKWrzUMum6tKKdjkiRJjKigiwWcTbaVsW",
  "key20": "2c8L8fEyJfBahSaJAnp1i8CM8zRRo7vpitwiNskt6ZYEaoPW2137pAoqkVhZYKC3xysVZHfuYrFLo9H86NdLf2ZR",
  "key21": "2j8EGprp8AF7VZubveUeCxdChdxkNnNQJ54Swgn9Bkhm4qLpukK6noHszAp9rPgbsGebXNbioYUMoFUGGTRKSNjR",
  "key22": "fxa1rcxdGHUFAk2rGbixoBNxNMyYuhLbsjB1Cak7cGrDMgSs84evKdTMGDuAjCZWeaJKMt6EajYqLYRZipDhZZb",
  "key23": "2utuigvk9mWKrZsAaPFCWj9Ug6QeoREf6GED9hCaUkVBACsY52avT6b8fjWK2PpfZ39WRRw8GVcnD2xzTszQ3wwo",
  "key24": "4i9J4cQhmouuNPzzFTZmW8DD7KWXNYCw5WrqNKrAmEWziR1jdCnnoX3HnUSYg9kEbSGDd3qejb4hJtfUUyeBGXPY",
  "key25": "4SkaYphP5PfNynbEDf4JZ3SYutsRzUWvLHVhcvBxAHM8gdGLT5STbArEFFoy27uMEmDQw4zaeppwqtLmxVRBRTtp",
  "key26": "5eAdpDfDYo5wePUzSQPG2G5gaQraoYrDLpXTVpfUuGvJvqNJeb1fm3RhoYKRhdNMC9LroeFRonA9cQBxXQDLGYjk",
  "key27": "45J21qfuaB4F4MBQMztnZp5dYVzzPfi3J4ibhzA6NrVpn1Rw6x6qxADvvP37NjQeofZMXZEE1haVxYoTgLBpE4L5",
  "key28": "4q4cpWhPtYiDiDAmVFBKBUFoxAbqqD8t57FYppxZKnS1YvNyGWzZN9CJk1VvFM2vwwvY7DYErvoi7eJQNkUMmM8T",
  "key29": "2oup4fT3sJHcitxioeggWMbrM7EEq44MVLxiAkqCpNh17ees2v9obkezpvTcCcgB2XiFpw9JGpJ1kYwvtLeMMjGU",
  "key30": "jbZgXwQBySdCjtPSCMgX8Y9Nin9R2Tvnq4zief3VCrX8LtJ1HC1cvCRZMiZWaVudEd3je4UgEdHrmxWMePVTvyZ",
  "key31": "ife9mitkiAcjkdQPGx8qHEn9onah3p432A7Z7LeGbso9EV6R6gX5WosWq7g4bSu5rCrucBaLMTCWcoNi98BeKfT",
  "key32": "4ZQ8BqgpxT8yagKVH7qBXZFectRAc7aybcTyKPpeyEwUDYRbEDcsqdJePWvK1iqXpuwhqJiqBQ73z5GZMT8to8LY",
  "key33": "4pewcfjHCGRSXTY339ZoukReaogEtsQeKQLfo7We5AqPStc1BHQ9RPpoBH1cKua3XX3WjuB3nP4b6vXxdYQZGNUR",
  "key34": "f9J1mDcMhVaKRJsrEmKQuvdQaFDHjyVbKQmosQpsrf2duGmhjCrD6kDHtzyjbwLbvvWQJD5TuGzAfS7LSeakRBW",
  "key35": "Pbu6gvk3wFyMaZMQcNpmop9JDnVE5VuKdiU1AYu6WX2gvPc8iRsBL4etbnEoB1pQ8es1KfqmYYcxKx3KShyN6yc",
  "key36": "XX3ZCgVWYaNMraJeUJwXt5bCXMVC5JRtYnLWLZcULfb9vPKXsV1RAHaYWCrbFnwrKcrfLBLVQnsFG1B492vbcUT",
  "key37": "2Fv58f4wcXPERBthkVykioTQrW4kJ55gQwvHH1umFJFpSYP5SBPdy4iEC5cMEEnJHcqS51PeKxqSJ9NPDZpfoBet",
  "key38": "2TG6t3cKaEe7PpviBMQnjT7pyYC7yKAbvHRo5ubRnSP9Y3NYFQzozn1FP3KpzLp4WQCi6jyxdfftyBStdRn8EW5e",
  "key39": "2kVHcXw6LmfVhnk1d5n5NqQiouyD5zKctu7SgjhqHfHBCXjr2CK8q6rHxaPZXVdDfGnvfX4z7uHrrtfUB6ou5868",
  "key40": "6zTSKv6YfCmfnPSEdrjiu9vDP8Xs8P5d15mLFag6frNEoGvPMeUe62C3ZjpFHZ5Qwqe2miNo44udmHf9NycbF9M",
  "key41": "GssGonvxNicVDxcrq583B5BabzKJNpGbKoW2RyFvrkKuuSPoCHrbrkEDAijAoBvxVgRetGhS65sqQpNT4KePGZh",
  "key42": "VTV2AQhbMsLj7Xs1c1KBee8v5TxRNdBFSU1iHb3rPqPTb1Q4J61mRuT6zmUm7BwJGKn53pR8YcmCFCsgpg1EEQc",
  "key43": "5ADKpFQZUxYjkoqEa4exsaiafrBnsNw2sGxBrBGbUrALaAR5NxeQrTzYGxxSnndseYGPzrbxtYhFYPotGT4Vq4vU",
  "key44": "5Pt6AQkCPZGyp4PwXTWZAnXkitHk45q4avmD9UzoaPsT6K7Mzue3wEMeGH4V5puizkAmkggrvNnZMpFszMbdhZBi",
  "key45": "3Y77GoeDGgVV3VMBZUkuMfQedBXGVtNAuNrugFJy7iXpSp31Hdte6DDTsrro94EkW12XKHNVL6PcW9bG5uGmP1PC"
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
