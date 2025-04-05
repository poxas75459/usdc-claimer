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
    "3D4MMXXMNsbxc2HVwxZmkuKyWAos8mmsEcrGTGLaL6otqEJdY2K9ahLJW9ZGqRFwJtzUpoDF2VQiQVPHfYjg6VG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5n4bGvuBJ6WFf9mnQkwKjd6cLoZuGtFGqkbsmgeBR5yKwvNcnRQE6qeCR44wKkxGen2ZoPG7dbHXL544nEaizoK6",
  "key1": "47xhxq5MH5txdoiNrXJ3dhhnCBdn7sYXKKsgf8vePpBzWDAmnyGBee8ddURrorQh5M4v7Ww4rCrW1p1KGVAj8EZU",
  "key2": "2NEx7yiWCYZNywS2DxCaGrBCtbkU3fqwD1gi37reVbNgNebEJsai4qcMhADSFAPufYMggU9xJCBgMdcTSjck6y7K",
  "key3": "2yj7KsYhCxmuueF1gLVpxwryxRB7Ma4PLYAGNHg6btg1aaV4613y5XmVENSBChB13nkpA1CnoBiLuwvPKRumRJoK",
  "key4": "VgMnBQY16YzPo1smPDzhudC6yA1q5AsPAuvoXUJUAo19tdbGtJZXnQjyBLXyMRQPZ6kQDk5xf9JQjpcjj43Ved6",
  "key5": "5zeVfY253BPxE1EN7gGdMCmRjoaJQUwkksNNE6TcjCFDEoiKqBGkRd88w5ZSgeo4nwwf9ivtAG5HLG3JLnsob4YM",
  "key6": "5UZ6unSCu9tg5SuucLdYAAsb6nH9wgWVHnUPeg2p7VFWAknMuhCTY9Egg9zoK4ccDQfVJnfqTVkbYDLfuHk18QEM",
  "key7": "2KcbPEoYQG8oYFKZQGuTr8bjDNPcovWJwnBEZ8qTeHrzHve4Tssh6Sd9vJDBwXGDTP75vnDiMk6qMWWS6Suh5gNC",
  "key8": "3kn6K2HikDE3VykGE2L5m4HpXwaQwKMM9fGjvqMvptua78eMmvjwfTPTuM2w53SLbknZDnzXRuqp834SpnVfX1TS",
  "key9": "4AtM2DF3p3HLc6U5tzVNwc18ULGiDwbsAnEP9NqqxTaGJr1yUJiHUQrVweH4oZZFXhgm5yGDNY8y9i5vj3XBoyTV",
  "key10": "r2asJdmP1dzHNJ1THms9Nq38X5Vt8xrgfWK1nYNQCLYWzkSyTLeZB1FUak1mB3XqosBkAkZJV21JzYdGSD7AftP",
  "key11": "38RBSsmCDvAoBQqp7i1WbPYTo3dHe6n5eMZRrRK5mysYZaeaP6LonupKLU1mGnFhvjnYm2J8BqxcvFkkKGSoZzyd",
  "key12": "2yUZQYaLERowJU5mY1LRHgr5toVQin58ohuVAd61GKfuFxk4e8NXhJu8E6arcSWqZTXVoBNgqvvWbKPmUArEDAPu",
  "key13": "5J53Ly968zx5z5sZQ5hzmuwikd5pGBu8racDAVQDikgs5gGTwqGaE8YRM4D1UVLiSC9Ehq3ZrES3Egrrq6ax7tzx",
  "key14": "2W7vsa2WMgZ8cLNWeX3ABuBLvPmfyXgmH2SB2raRTL6Lr6fdo22MnjmmHJq2byoHm1vh7LRiPnMjGBvsTZwpk9dA",
  "key15": "51EioPxmD2VwgaM7XLPNB8JACSEWP5Tv4MuDBzcjR51DvnDKfZfaWYRYG2t2YZz14CY5zyEG8tAC9epuMtZbWgNB",
  "key16": "2mF6Kp7cGWu3kcRkZkj55wWCtcdKmsY4PRfaa67W1EKGQ4Xpw93sZogwbGkyMkbnDxAg5ibMQheobZfLxsFHLdX",
  "key17": "ECQmP2oAeGM3MrudjqR78R6cAsLNkunT3yAWRicdaMyntxZ4ahiDcjqmXiCaniD6bW1fsY7piHho8wwQU4GWBW5",
  "key18": "3LfBs7TxePLqPBcs9q2mz6HbhnDxDtcPjMnKNHBd5mZVbjq9HsjmctHAE4ofKH4uQCySCYYQhxsWZ8pm4HY9ZUdv",
  "key19": "NtUv7okqAeSH5dPHXnj2sYtietXMfdQWXDkUBibbyZNffr5zn3ghyrmKernopLNZomTWTt7Si43qJhU2Z956C39",
  "key20": "52nJjqYRRrw685NXcHEkCXm567s3is5BFVVcsAfVrkU3uKL3rhgQjMpcsQsjbSjaqjzjwB4obZTsRd93cV8KvCWi",
  "key21": "5rkba63aRd6ogMB2hGpCNvbNA7p3deoEPPX9LU9xgjn6UCLgFbJgKK1nHeqvidS1jrqbqDLsLmFCfYsKcEx5UhAS",
  "key22": "2tkUiudiRqLJBN5m8sQT4GyPDokvVhLhxQuHZ57FZ5nyKAWQA7rtw3NMbFK7jNttudo5er4vVY3Yzgth2L51tPWr",
  "key23": "3dHMpDgi8M9n1p9eP1zwEX3qUFDChuvSrY9XR9HjqR4mJUGLAZof3T5BY6bBhkf6NBuNudUqwuRWuoPtvbgjTzUd",
  "key24": "5iuPQWaLrBiBUBrcCEvb3xQVqtmHyEpkVyd76xvz7ExZdYCLcVGt1U51KC77sKiGX3CZTLVCUCn9ZBaF3GB7w5me",
  "key25": "2ngZp1gZDLgFN7cbRHwxj8KBwd7B1JWSgHAwD59DqXyiBu2Hm7YPzVcYzDNc6jGp7UtMkEdfy3JqVi7sfh5r3FAj",
  "key26": "3qpmjWe3AmfHXA4TfLWvYTDprZw4hNTPToE65sTE8SDERsiegBxqunWZ3bC3hmoNWCCd46qfSQsNLm2c7FmxDSST",
  "key27": "4QVHZV4VcLsUkkC9XUQCmBjbRLWnhowFKeM9b8LigPVX9DJHNZpSsD99CjT5xFLsvVyjAqGkZKx1SDFjaVZaTFA9",
  "key28": "56sovrw28pracNxNWCj45wQxpa75ybM91JTx4QRAkMdqjcuj7ewzrHaDntg8nApMhRzQLYcvDuQLesG7qnxsLKqw",
  "key29": "wfqiJaRPVL9VE3HPK2BkvHwjFz8tnBiUv4XUep1Pq4mNZqwskQWMA8ZFktzNBA7BG9QSgQe2MnkJF4anzuDrBq2",
  "key30": "rCmkNZqR1pJUpWUbZ82zuGBNhaZCRkkFdZWoRp1tgUWEBCL4y4YaQkKmcgU1QUTzracTyfbaaMF91hUARgXYWjg",
  "key31": "qYmhHALtCHeWkQYr2Tst7ev2dgE4DqYAG8aUW9MTuMswwjoD74hw8R9WeBNYVmLx6Lbv21UfQjmi7L3PcePvB3g",
  "key32": "2vAaDMagFAp7ukc2sVrJn52JK9WjhxcTW88VLdWQApk9Z5dJVGhNcirV6skiW4KGbXPMwSEc4aXSFbWmmnMTEKdR",
  "key33": "Gf1eU5BGzXygXxE2PYHohPMR4sh78DsF7PyuenH9UMZpV4SBE3dGh4Sjf6kDfXWTRyVW9dcmz3R75utbTAc5aKH",
  "key34": "5DqNx9YwyKH4UwxyuELmRagvF1y91gt58ewN99jU1g1tjfpwSDZr5X139xyMXB2UQW8uKY8HsPouTzBXBFoQaCiL",
  "key35": "5RqMTJS57LhKkBTitii3NpP9e59ZAQxVZ7sPrZZRZQKEgfUxLnrmPFwGUVZSzofDEid1pstGHucft2juoZSGAirp",
  "key36": "3yMXyW7oAMTWzCsvCyx6cbWTUEPN7dmZUXjxFdiDa3t3Kv13cPjNBCzMgs6Nz3bNycTHMre6EraEvBkmh7kSSYnB",
  "key37": "35gvdtUpLAX2Yxqv3CiyXc4X895PqdQnJ3zHB3vu9VDqpxjatp2s3HuREERStFUrYa5LubnbsNrBUkBbLwRJs5q9",
  "key38": "2vN2ZWEBzyVAunmrcsXbE3EhvucdHgFEgwJQCs1tKGhMFTjEB8KhPPDK6Ft55Xy9ngNnTgV3iAR26XGHcRUX38rm",
  "key39": "36Up3NYTnpH731GKp1X9W6nLqX6vr36ekc6nBRRfpP7J2boBox3fguSrZEJpSA783cPbaXcr4WicJgbpumbnEx2i",
  "key40": "5aHaus9n4QMtsLioEZGJcEYx9TDEnryweWvJHvLkw78fkjVLMnZz1MeqndjUCD74dbkJoBCjZXsmezLe3Hm3AFsX",
  "key41": "2iEP5CZRxZk2NLD4TSZbPo52EeEWVSQFpixs8soi57VpF1Jq5EF4EWYusQqjGYey9bEMN4W1FBaYxzwvbFamsHfB",
  "key42": "ttCp9Y45pK6DJMigfbqfqcvwy6274H1TFs9FBWbbiuQYCqMcwi1yRnZk6N9ezCTdCCWUEcnVZCvbfydQ1m5kRGg",
  "key43": "4gUA2QDKKRc2UsmS8ryWFytVQJoProB9bQk5xQEBQ518KUc6WKFPxEP7fk6AqhWXxoebFy9zAqtpdLg3DoHnRmeq",
  "key44": "4EX9ydt1ewAPAcoeJCG2ecZoa8S4VgsqBEDHBneTTySUyEgfFyXQUa4ZUomUFdMb6THwtDX6ekqzucjwnZSoRvMo",
  "key45": "4jhmxf8NFaKCRXVDcfe92ARZWgVmUyyvu3XNJ1fSQBjjGeZWDeqh4EtxQs8sgrDnLdN9ZxADQs4YpRRVJ8NPDu9u",
  "key46": "2QGsLQLxxeuUycXLi8qRB24hor2iKXiP2hTGdhuTSQLrVB9vVasXQZDMQUTUB4RLd3CreZp6Ve91KJbyw6ztUvDY",
  "key47": "3f2EvPk5BbF9WQMVz2aV3LZQaFP386PaELP8g5gu7DagU7EP9huuLM2gS42FYxQ6dJedxpvQH23MRyYcRzRBAWMN",
  "key48": "3Puiaxyamj7cVGeopJ9gn3nV4fsTPXwHwA2WuDB5BUp6yPUZ4zeMyJ6TMu72SSFQv87nnFszhHjZhmJs5xmMNPdd",
  "key49": "3jf7u4Mn6Tn6aS2mMda9XJpr3ufg331zSn4A9T1iTGzGjcFBwdKhkGhU9XwCu1uVyp21tBLFZEA1q1a9FfvSFmwf"
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
