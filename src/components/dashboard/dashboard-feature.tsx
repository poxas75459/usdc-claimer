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
    "RY7ZYHnfySFUhKfsiJ5HF5GmqphhYxSk4yTNJPSnWvX8pskpHyqiFqDLi4VuMPjraPRPi7ve7qZ2t2pboLW1b7C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31JqxEADVKRUtE4awjs8Vve342UinLkS34qLMyfotwX3aLq1Fsvyr6wqMUJ1QZ7FdvG5T9XVRSAcQ9CinxSxGbsD",
  "key1": "66Fq5Uc9SFNZE4QsEoxaWSMzDH2etqkYoSojVUX3s9UB89NN46HLxYKtVmWcvpRuQrxTwJnXDmMg2eS2rV8DCmck",
  "key2": "66zfeaEqLHkFa57rEDuuTJTWZ8CmoftTJFNdAxmjFdKzGCmLvumqR6MfzSTHHT3y94yhjdB5CgDiAqUnrpceYBpU",
  "key3": "3AzLniwRqKL2x8kVkM9DWr4mNZG88SY33memqRpRywmdbn1nHGWbnbaj3yuiRY6iByuj9HbEpyUrggBvXfoDAtnY",
  "key4": "4wj88MwuAAAcDY6QZj4QxKp47QxkvUMhocriZHBqRKuvumtdVRBdARzJRFB67e8bwkqVBPeMYjioB3NssMhEWdu5",
  "key5": "2HfVvu4SpP5C4MbxdetTxC8HxiFD2sQiSxziGauUQ9o2cV9JHVEu2Vvt52SYJjWAcWPxUCHWXSwDTPrGULt22XNU",
  "key6": "2UnDTPujnCqjGRiT5iMUvKiHC6bMTZ1uHPabGNtfyy3pnHuA4HgUEVxwffPQPDxdEPYZU1w1Wp5neiae2VNm9U2B",
  "key7": "1TwUhfWWCqA6EhnoQVZUk1RcrxmUuByncV2TexCcVW6ZbJgjxJD8ChtKDZorrPo4fVdB84vL5EMZJKUzmbPDBBi",
  "key8": "3XnU4DSwCUYKhgDRVyyALQGgByJ5aqDCQeGc44vS6tcTTW1TCtHrdDCqMzFLK4AKEchCTcGxoQ4MvuuRJvyYo5if",
  "key9": "67keM2jGRhVNDFBwMeaKCFPkSAwQC5UqMFbMcmYGHXdaCQszpqHAbKrhTLoXS7qpRibFXyFa2tLr8scQH8gqToAH",
  "key10": "5zgpfYwrYqmmED6mrkhq2GgpQhKjJ3Q8JE5Hck5c6o1t1zpoijpMVQjkHuXioqai2qj536he97vFAViPyyqiQrAh",
  "key11": "3QtfQh1cJUx9F3snzJqiwUxBfNdpGzQeSSv5WhTfZ2gU3vv7NuNRgyvH9QqNiZz1LtLt8nwPM6XCyng3jkRDCMaF",
  "key12": "5x3fGvU6qnhhucDadHBEcUUmDqJsGMxfP9NeR6uwZriiyp71U88YBzHmnc1E4CfQtEfuzV5D2fyVWacn4Wj6sFxE",
  "key13": "2dk2yW167NnT3XpVxiS9kiyQ2C2hk2RiUfGNCM4JpR2sdqxPV1biuf9HwSdjdmLcXby2rbfSfHkiyoXAhsuofT1P",
  "key14": "4uDB8jDGGySuscHxgmninW4cz4iH6CakrFhybMitK8mnnKdoQ7DzJvqwNTdXRptSGMfoPxherMRHJsq7smDPwqeV",
  "key15": "27wy31oLjkcK78UXZR79xwqKHHJeuSXziMdkjH8qFX4FjjCTrhXK4KeDfL6K52b5BZf2eaNsKUptsXQvv2C9y1kz",
  "key16": "ch92L2qvtQ3YwrtoVksDt9VmEtvSF8Q173tfEiNDKx2EkhzmEdsc6aKBj7fHWd74sLYALaJJTGbseZA4Jw42Prb",
  "key17": "2bgB7xSnTiyEDzg6CHpzjHbt3W4W1W2afZf7KwiDRR5Gt2J1NjD9yo6mz7PXsGU9wjSczBPSNtxLBWsH7du4WEKH",
  "key18": "3y2FMwQ61Uvyz7TS2U4QJEHHthPAaCEBcavwTuv22VC2eGGUjNmGT5MqFZKVtmChhPgcRfdKBUDk6kh3eLNv5QUV",
  "key19": "48zZ8KiZmf7m4dV1LQFVYAq5kXV9cRkyfhX4bvyuyFHdV7x6bnohRo2t4CUJiyp36Tzxn3ycTgTwXHZUBfEUhGFJ",
  "key20": "e8QN9NtAg8jWqLfcUndyMBM35WZuyDJK8iVVvFxzmNGkkJ8ioXLZCMMg4Y3sAXtfsu871A2DHPWByHewuvxuwAQ",
  "key21": "3eazihxp5NbvYLjTs4jKosf4csfvZiumxZBuTZJm9kcFg6pL95h9WsPQFJYqnHY9JWCsMUnU5qN8HMQepjCWz8Ca",
  "key22": "4QQoRuc41wbqDpzXsbtyyiog1Q69xLqFuysWh3FHWyPVWRrCUzUpvG1kfVq9qCr2kaberon7bcqQyLQh9dFxt184",
  "key23": "3DYk3ASsGuNGqwL77NnMnAwCZ7Djgzv382xyBMcrCKbzGACA3katKm6ntuyc6vRSzECwvKxAetp6fSPAHZRkuwnU",
  "key24": "S9FcyKzFZXs8uA7vbtTvbVuaiZ1JB66VXWCfcPMahh2va4vjMCc3xuky2Q4YN48gtjbkKBxANvmDDDsDCcaPRh5",
  "key25": "u8MJydGm68pzYHxokmd18R7gnKriY5PrWbsg38FYvb77vEpwSxALc9HTyvKAnBNxfKyBgSKae3YW3RM7voXgGsN",
  "key26": "2bmo1pQNVcw7wTFr71o69RoV6Qaw9kZq5uggQE2fCwWqJYF1TXmX24dJAwTu6RZKmQ7beptS5rsEmjLXC399hQYE",
  "key27": "5xGGnV6WEjmsf4WWzpBTmZV6ei6sGeoAsPBHceWW3HQ1Qm85adAkzmYHQGdZbb3g89JTmebQFKkSTm4EzAg9gJxC",
  "key28": "4Dwj8waRQ6DceYebaUod7YNGStMLbS5z45zy93ezTdFG8HoRyKf5tVLKuTbRU2kX1wgSKp8w2ffvA9pLCj8jsohN",
  "key29": "4vx3sBNGbsQvj3L3n4qWtwfNu9zwfayXShmo7XvLjg8a4gpwbw4B3FDxng4ji147bdtaV7FQST6Gf7MwTRo6FsZ8",
  "key30": "4KcE33UKFHGXXUBRpLsh3wyHYKWnXKrBYVctkvMZp88tfcvpaDZQtSgCmupZYkXvaygaWwSLS6QxvrVRp7YWhiv8",
  "key31": "46tivU1KJDmnjQCQjmEgeDfMqr4SixqFiH7gCGaoeuoAjY3ycofTiKAZcQB1FFb2Cb7VXr7r2yoR2gwAY65yetmt",
  "key32": "5mDURzTA1axcNQ4Ue9urz24KBqnHiBaxHH5USffxpq9TyLaVp7JgKgcdberhEnG2JKNStbsGX9yjCZaGbiVakRdq",
  "key33": "5HN8QJwLUhdf7foSS1aFPBsbWGDCwtB1umRnUiYr3jLngvbqdJ6pk2GhXeTivnC1DcGbgcFxMQ34D6scuaQ1iP1j",
  "key34": "3ZE96iR5aRKr1dtpTfj7tp1DDs5n2mGZgZuwqKq33vkCxmoWKza5LebEbGRHrWfqohTuo5cBnzq2KaQMgXqdmisz",
  "key35": "2BBBgH4p22YxyWo8BLyvG51bV8dNgFov1bBnVDerVcG6TUptv6UiGQunWd6F166yNad3DxwuZmdyvZkts62dYptd",
  "key36": "vWLvUai8d7krgavhM1P9oM7WAbH8gaWqM764dCu2zzbFy1Ly6ZBueq25umzYJtZpdgmYvxYY27Nc7zKRTSpE7L1",
  "key37": "3RHUQwJuFh9DzrJJ3Wn3mbxdCCanpgKgEA9Njw69XEe6Cpotq4EQPJTFKJLMFCxbrT5f5sZfsLMJ28s2J3q3cFoE",
  "key38": "YyEBwpG2h7SdiCtuugRtt8o8MGcDs8YJGKWpcMDbvk2f7GEqYW7nxnB3dm1cs4yoGMqx7GEa8HVYtcuWdq6w1yy",
  "key39": "67BboyZzugTmQ6neD1xg44nYNKX7gPCYyqSVJhgiCTG28CxHEmFchmcQT8UD8q7veJHDXkyhy4ZkRrkSEDHYuMF1",
  "key40": "4qWmGbibDuiUAgpaeQc2y214F6t3pSNhBTCNvxyCiHErYUif3z22bobHKmhmgFT9pKV7XUpCADKkUVJLTnRefH92",
  "key41": "5BoneMrTKZDemu5LEppJdSBqj1ramyP9DEJNZxna1a3XGMGqcEmXz9eXBZujp8ZYhVzLJbsu4wb4CaCEdS3u3pXz",
  "key42": "3TvMZ6goHPAJJc7jEftGZbkff6VdLTFwwSuvYa1ZnKYS7V1x8dzW3KMFTBWRz9ibu58gCZKBW22kpKdGUUhuAA6b",
  "key43": "4qtVBW6p4Cw7zzAo7Q926GFT69bVTjc5YwuMcdDmX8qrErWBuAbysUvbJJ4pPJ5WP4mBMz4Q6hkP2qBWbt9fWBmW",
  "key44": "5Vn4G9jVSQf6f9HwpctM4MYeuq4Gv3GE5Rs24cMsU6e9hUNiVaaAWs6WEksiJRVQMds2WbuhDfCLoLBcp5Vcwge1",
  "key45": "HgzMttoW35vEoDgLT6K8FFaBaVeXKc1uEof7ZAd8XVLDPsMuTxVjT6SdDW6oAr5Dkfkas46ousXSsrY1q8esDtS",
  "key46": "3V5BtzeAm325MY6cnD6GdJeJLCHMskTa3J9X8A6b24AfCEbjfLF2vSRWzV9bj4rpjcDNGQPdPX8jprVYNGhLSNHc",
  "key47": "63rUjLuw5HPSRLxYQe1BE5xp6vfS3m5zWc3pptHvcfMWPiLRt7B9bfeA6oBhKCNXoJU5X5RrcNBoK68twxwaSe1P"
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
