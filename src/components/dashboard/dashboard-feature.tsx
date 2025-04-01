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
    "aXX6QVbpJihGjjaHvtJm8tiNgx9qbPHD9dkmZmTDjd1aYD1fJLnbA3S4eT5L4mCGB9SRsuGjMvaQfGd87JhsCo2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2baPVYe2wT5LDPy2nyF9yckgzMhuJyg17ZXM3pcDdStUfxtwzwMwUkgDNs1ni5YgZNNCRhBgWRyxw8xczoLgZHrk",
  "key1": "2DXJV9UJDyVDHN9vnbUt9fCJWtNxsWGXyaEiaY8jdFkgDjh7MvYhA9tY6GpisQc6kGQJJ55pa3iLaw3Yy61w2TFJ",
  "key2": "4exe4xWUqW8PAfMQo58zeaBYw5mAALR67xRYfL4HMjyT5gdPH1TnViL8UTwep7cT6rxhpoYtZK8t3NWwceje9tC3",
  "key3": "3XW4CnDHQBUvSkcBuCbJ7AHCA9GtmFMzp8MNsQFRtZ11bvK3qrqUzYWQNisyXXsueUvxUrjB2Nb4DegeiwbBeCXM",
  "key4": "2xF1MyqGTxNu2da7Lc9mHdAPeqEHoSre7fRAS4jPyB1juU75mwKKbreBHkAJR3fxM5kuu5shBPP25hQgtRGibmwE",
  "key5": "MAAx9QLy2kiMmHtC6GWaEFoFmDaShRhupADwWLTeJ5hNPqdbe1kBytSxmx5sgC3APQck5pTSqj4iR1ta5New8hT",
  "key6": "5q4ioQnuDuURDBdf3aaAiKVe9Fi3ubbSRKSpY1X6S9FiNGVQDrt9NEdx8tKkMVqAgBJrr5g3SZjmtVPKWNKsRd2R",
  "key7": "3zVRAMLzj1XEhP9xGetTUdQFAqmWx5q9duMPdURJrW3WbQY6twx8zTrtLUUCgf3kdqQsgt4zPccCpCA32UkNv3qB",
  "key8": "5PmwpCFmp4hMzLRyU7NdVmmGG5AEVnaVhRdx2i71rVXkVVFe6YSeWcW5BMSLMjVbmSst3VvBNHt7ZyG9nbciiFCQ",
  "key9": "4JCsDbxyw5Hf8jiwaKGHxP7Las9SfVEDTbu46wqBX4m5AMWZDV2QBhaTZJQTNmjnCL3SXfswctaSpjLykzKyubpf",
  "key10": "54JVmroCBqEV6CyrRDSRh54jRsvWE3Zr81edqEZ8QhkVNrcdREtiGBFtV25vj3CXbGxuxdWTyZsBvqUG2d1ALE8R",
  "key11": "3auvBcTTxYANnRWyx15tNUnC6LaYp42o6g5CEhF19s8JB2o3LpRxqHFDTjwUi2sCGYAHGVu34Qg6rXg5CKg21Nug",
  "key12": "2pQ2JD4LQmAvHWrmTatXVdQbPcCNCqTid8bTFxQLGoKEsApS9YFLySU5F4oZXqywozhK96wZi6EdkHSpPzud6edP",
  "key13": "5KX5gLPjJJndNVk9DqJEqCPFaHu7RtSKeDJDTHovwgUqLLmrytjoUjvivTQSgmoHHJaD2VaSkPXdVRoR6JgtViFV",
  "key14": "3CgU8Nifxr5ZgkPhBigrLomUhBSBBy4JBb6PcqdHzohhCuDEDzVTuy1xEjah59cCbyppphg6fsKfwUtQh9pDu3Le",
  "key15": "46H2iZMJJ2T8pmSFvYthobnAjB96ZaxicX1Ci8XbbS1gERsih4Mij2BUwL3MRTMiNYQPUtHiQdWqSB48QnCF2Ejb",
  "key16": "4kMKKo6JF6MJ2LQskkG1YXMqu5LccQVgvhGiq8Kj43MjFmjdgnbGJ8ExcaHHRnMLPAWRK58xJqa3r2zoR3B3hnxW",
  "key17": "26QH2rhC25eYX8yb5nJbk2egA7ecfhEspu2tvxSRL2oZKSgSB3psPQhEgQyqerT8BihEWPaBNyJ2W8Gv5C4LUbMZ",
  "key18": "GnvxFx5dQFsRHcSs3BVwHfxQMcQTrHH1kWT9kQ2t5SJ4tS1LeEVPmi5p8uzpmQ9FCc2P4kWtjk9VnBhdkPKovpt",
  "key19": "Vs5PNtm7jn9W3N9dmqQUEySZLf3gkQDnNRoK96RZP23uoPGgbmwXVLiyB6zG4jJiWapgWfUJpVh8VWKf9k54VtN",
  "key20": "58KToCnHuc6FVfLa5gi3qCmuELCGKGM8m2WddVDwuwxygdqvhJB5jivs7pSyff2dtobNFJo1wr92LgvVtp6vLQLR",
  "key21": "2N9H7ABo2q32UEBWK5hfDw9Res3oFxM7ddctNqoUSazDQKBm5acwEFRLtLJ5APiYWjV11BhbftTD1uL7Woetd1Y",
  "key22": "5nkDGMbVfV11pCB6kME7J4p5DU2729GtvnwMhgT7TmeyjWtNnZ1Tet9ubeicrNe8rvKw3d5eZkxzhYbYv7EB68Qb",
  "key23": "4SMRnQ4yydrA7BsspepAQsbSuckL2WtBHVn4RRkXAZVVASJ7jms9GKZzxV8gRfjNTZY1cVN8mRFJgD1xPa6MSi6h",
  "key24": "5wynpvPXypJaQ6KDPujpRsxNGTsZtEsjk2E7jpZgefuWDYxgpm2ph2fZzLWZB44emtZGxAkMyPTm2RSJdFvAwKTJ",
  "key25": "5C68ainfSLRDmgnrKUQJ5rTfczjwi9qBizzGYJtQWhjkDbaL88RZqgrgXuSjNME1XZ3Z7mXLV4nmiNT74EpNuuLW",
  "key26": "2Ac58aBHvQdHHznAEVJJJ4eznRaLxPcH7rgiyutLM46X7R6ywNKiFL5C8Zc4JuTdfThVYKYKmMdAJCFrQg2thMBz",
  "key27": "3AysT8wKMpDSxTc6QTCghDBp4KprMMC9Nezc4xAUvLDu6E7nU5pvJhkXWKLsVQU3ptXVNpZ6howVHE6HCCAbrzbp",
  "key28": "2XBQj7JNNqgvnNxwXvQFeVhrRDRJ52RnGHCd7Ugv2DYuAo6o4kNhxu1SbXrxGyy12zGDfKZh29mNtmdJLN9hAJHy",
  "key29": "2xFfPrABTw4nxL39HWu9BJJDnCPZaA8hk2GK847CeAsHvGQ3tqeLfgA8cRCTfrBXnpD3NhxtSBGwN3CDuPjGxrPv",
  "key30": "2reXB88KjaxjS7PmTCjXwJU18fSWPPm9cYx3GA99pLXcBiK2iwVeFYPKL2ZW67cCWf9iJRJkmm2KNsQuwZTifCyH",
  "key31": "xJhpVQa9nRjomgf8dN19JM21tLhhnXXWZvgX6wPtR4ENh7GF1cPNkgmzvrSCijwJaZDswrPsGxAa3REfEsqdspB",
  "key32": "3PSvDPB2776LCrZCHoch2S2MsEvW97vW7YFzM7YTiD5yTjpQdFr287aqHZ6oWSxFRvePhKNMhUeQN42CtDV2dRAS",
  "key33": "27eqvnujW5HvMu323v8iiuYmVBbsJt54y925PaUr4K5WgkvXfpkPZ1xJsEW65uFL9xVNmaRPevsPadTwZLadnvs6",
  "key34": "57J6iSfL5nevLoSjqVxeKz12LDGjt5BsubzDKe5GciJ6uChZu1yQwq9Q1PFPYkCgzXqQTGfqRxddZbHatFDaiHyq",
  "key35": "2kAC9pgRwME3wJpjVHkkw7Rx2EuWTcj35hRggcYCUhyesf6ucpzrR44ZGEaP1LrWY8k4D2EGYgA21kuNBgp3CTRR",
  "key36": "3SCVM7uGL38Aw4EMyKT5AnDBeUALdHumpLNiTUVh1R3ZZfa6oTXk6Ud9X3p9YJhiisSdVVH7Zzu8nSozwaXXUj4G",
  "key37": "JrpPZt4DV8THpwjjVGfDv4ndJrLMgMT1pGH4SasbnfodME4ZLPyexVDdZxxhrGii2JezkNAMeeJ1qwm9GKnbnEV",
  "key38": "3fwLuQH6T8uwqg3y6hAC4UzTutMgeoqKx6D6xuYdhKmeVQYT8ZorGAS3ES2kH4RkZWknCYLoVgm2NE8iZ3xhE2Ug",
  "key39": "HpLijv9fxGW7TCSRAEWfmVRRnCv4zkG3HKiZAPhcVKKbeT6Wf6fWLZuBPAUtd7pzmB67WwoDKjEfqpWei4Mc5x3",
  "key40": "5EEBhnNTrQWN9tJAedkUj2r6NLGKJxhT4MKb5baJG4eMVH9Eh1WiJAGkix49WbEWG6sSrM3tjM1F1MKJDKTgwcUx",
  "key41": "ZkPxLhBNiMKXFtmzek18Lb3eaQ5NYCw3ihw5Y2kFNBcbfDUAHqWctbhQfsdnYha7zF2cXQoC7RtMz2H2Kz7qaJA",
  "key42": "4UXGwDsVNfAiCe22ZMenVfGCPxP2dXhvemtQbWD5FuW4sxi4h1zJtZRa4ZHTn7LErtx2rikHg3k6TAtuenhWDnNs",
  "key43": "ywvGAHKoxzZSKv7CHQHMApE5Z9r3mpyD1ed6AuuT3ftGv2FB2hznAsLje5KARNtBnP2GCqKKMnPiqk3D6cMyFzp"
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
