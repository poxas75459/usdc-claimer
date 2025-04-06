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
    "3nHBqCdEzZ6459Q9N1TH2oYuvSQZWPP2jpRgxVgJZQAYZvJR9f5ZWRqzUNkeAfwHgh3NXNXX7PfRSbMr3PTkf8Kr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GKg3MxwdaNxCCFidt6Np167xFH7L7635s8KnvMqavLV2KmniGLiXsnKntoTyFK6MAMzZy52RTpWKrjW6vRvcxKT",
  "key1": "8u54FLkesihFFr7zLtknZp396j8hj14zRrUFb3vwh3pM7ay1SNFiNChh7d1VA7AxRLapXqKHfGfJr9Ku3LZnyGH",
  "key2": "PvmGq7fxQuoQTHMBygA7dCfyq7vpJA4R4dvsc27UCyWRzA1qxirzoHDzFECVnU98T87DH6H39ehbWvxE4kkpx3L",
  "key3": "H6661n2W4WTEY7D1bFeFRq2DaaHdSvKxcb3QkAsSYWFyz9Y8bdzb7WPiPDZvw67P44gacnp1hiQasy5w6K8td2A",
  "key4": "3cAFHkSB93Q4mdM7Bfbz4FJ3CRqCfadsqt9jwhBwGBcsVkcTux4x3qhMoadKHh6BD7TTFfN7ZpCwz8sMP2HsdSKm",
  "key5": "3qLpvs6PGNM5F6XCugbUJtxJ2TX2MjFw2cM2aBdXa88zxicfUHAoBud3iPNsey6wz2dqWsLvtP7uFCHFTAgXjGJy",
  "key6": "5mNr6Ev1eyFwNE1UMNGBdtmFSyyWWoJjWv8MWryQzi8axax8hByeQPSzr3uyvcHCcQ9C3WJ8JLV9s2Gsnzyh7HBb",
  "key7": "b5f4bHr3ANak3M61z9A3qPK5diado3SAr1QJfRcdp9FPYtGSBkWUKzt67ds3QV6Zpx2aPhowQcqw6cXcDSGPMBH",
  "key8": "3T1XM82YcemHBnJeMipEAMuzSpZGw3KZ5b27DmWwCYBTzWC284uUq6hcDDDr8GRy2vNCyDk8shJ56vPgAA8Fw1GS",
  "key9": "3gaW7y1g8MrRfvHAe1tmJrGvGKuhXq768m1PVRnVeURecVrFV2vSHiJUYn3VawjkeHWnnHmwtiigT1gWwXF7wdF2",
  "key10": "3Afg2gBdGNTs8ZMrwr9AGzTpP3tK9PeK3rDjEHdnm4rM3ggw2nz4UUpwmdxmMggNK6tKKdSD49gdysDaFaBfNNe4",
  "key11": "2pxFyErXixEhGgp12Hsmiq7dfkxyauHF5BVXdaRWnFt2UxWMWxnv7g1zsXfHkKAptYrC1fcDiFFy64huyavMXJ6Q",
  "key12": "434NuS3oLT5PwUxNJyw3UPbWtfrGqNBKxQT1G6FcDmwJGUjuNirGQv93eLxGEnnwrSTC6EtzGtyJwUyqTFZRsu6H",
  "key13": "4SVuUS9xV5f6H67Kdic2xuiV1sxVyDoG5msMiDZF89M3J4uBik6xV92Luvso2Ddom5fTZThniF4X4mEUPz7vNQFH",
  "key14": "cw3xt9on5L2c31kDYVwW47LrBfhXA4gdThXK1wXjy3iZFm21xmMTh7KCvzQs7Ev3LhN61qjbJzbEPQUUgdwRytr",
  "key15": "grq7RZiVYZJTbQthJnca5WESjqK9a1nzpDToweLe1bAUPCu9TwMZkz5ZNDa6QXQR4Qzb15UZiRF199jPe7GpUH2",
  "key16": "3DQ4UFzUwunRk974R58aGbSqSGtX2d2gEVEKrAAViDi1D5CGQN9rCfZcg81o5hGxZzNrzurzHxuFnqNpSAGS2eWc",
  "key17": "438fa3jgjY7G49ngdVD8XW9MX6p7g5q2VYYhibGqgr7uTCzrMpDjRYSgAWFg4SLwrhAoQGJh8w9mXJmUcBTeSPSu",
  "key18": "2D2ozW1rvHEsXKT8Zaug6A2n2TSTXYxDQD5LbVQKABEaxsXWGLm4He1J2n4SaaS2xc8uqTYDAmbGK4gzUUZcQbCs",
  "key19": "4yWKV8UJ6HRSTj1QwpUGUHZ6xHJmvot6SJDVaxzHHB1dHLbaks5FcTrbCvtYTjAcSZL2zS5uY3egGPy3osxfqNfh",
  "key20": "5dRQQ5g44gJDhXm2XnSRJywyexbygrnGXmrkaoQR65DZnwHxLWyGyRCHon5d4cXQNCt9edSFAuUv8CQCKjmPoBW2",
  "key21": "66D7vWkQn3sfR85M6F24p1KYv4KLcGKBwCCy9LdpzzFB6FNgxFF8wZU5TChW2Gv1kPMXWzgngoViAPJfVBYCZoA8",
  "key22": "pAiZwYZD43vvXh7F3dgQigwm2t73eEKxzds5tNk2c9afBVwJGqCGzKVgSW3qF4rkpv2mbj5ccc6Dx1JgFDnVZxR",
  "key23": "4D5Mh45yHzHwfw1ak8f58bgN2AGqYA8sm8MSdDwrSPe18rCZF2ejaY76PJiHr5zhzn3sCwPi4Dn12SiniYYYua52",
  "key24": "3T4TSuqp6eZaT3w1WEV6EMPqPUpgRCcaqHwkzS5Kmme2pfNxcn2mjSKdaZsYmUPkWmwud7LWdLty7CGhn4p4gMLK",
  "key25": "26JGxeJwenhi7NJrtU2dy6LUMJDcHJ2k9c8fj8nr2xfDg83Wqmu9NQ4MDA6SXTiWFrEGz1bZQXCT8VQmeVPeEZur",
  "key26": "5BmuiBgDrmz162EvtoCh1X3XdxiP94RcNCyoMvzFYAXT7pNGykvo4LWiWpKNY4jQGmhviKcp1wiayAFcKNEnxotS",
  "key27": "22qk7K9UfHt2jzC1DdbAEZBe88GHfN685Q3Qck71hvdsYuMvNdfTZjMy8J7PtfwbJVxiwrqDA6SAs8746sXbksbZ",
  "key28": "56Xnq3gkG7hN6nTFZFG5m8p6ZvAyo5EnTx9J3gtabcsCK8dKej9T8jSgad7pQ3sfeRqtKsZPauiC9iXC9jYVzStG",
  "key29": "abgMQPhAaaiVz4hyQaWHmpXHqeBqtj6S2GTqwVzcRpmsBFKWJfqzWp2PsHA5QJQ8BVR5USQqUNdbVDEoqtGUaWF",
  "key30": "3JHsAP9BgKhfeAJ8bLWFvbzUrGPnMYPeMvpJvoQ4PLMyMv9rKzQg442MLzdWtesSoQTsV7iE5g1D3Tz91e3co2Vi",
  "key31": "JeZDic5k7B7pjYK8W5mJ6LB5kLfm4XBtP6wYcwAfSDJLQGvx74SvAvriSxV5XQSLVHQj9jX65jK8Z3KHJ8u7uGx",
  "key32": "H8jfnvSrbZ6pTCxChxzFea8qFRVEeUqTy3z4JzCMMYxTTrGWkG3zFmCA5ZccuuNknjwww83pvTkcavBqB23NjsP",
  "key33": "3rdwnqgUK4cuBnR4NTTjx2xD6peSYaPQeJ4z81pyHsivz4rPe83uRwvvjAMUBTYB8VPTmEjDRW1dE2YFca67XjA3",
  "key34": "58GthyvvceqwCaqFp4gjG13rp8JZV2u6NxMpKoJiF5f4L2Xo62WK7cGPrQ32Pfbd78w26vPJggDUzD8uqyF1p61j",
  "key35": "4vhgbNCA4N42kMjLHe1MsoFFUyU5rNZ32gG2tgqrEp6cd52ec31rALhVhLLLvHxbrcDPhi9Xhv7JgkDoF7ExQ2bq",
  "key36": "5Vat5GEK7RfENNhBN6PdBbaoPMdhPKAnKPDbeUpM5gUWUn2JzJVeSDBmqaT8DEM8y8Z5FxYinUQMxraWcbCc8k7r",
  "key37": "3reyWEP9vjbbQ92KTApoGhBsihJWNP5SkNVSu3cBfnkzVmLNjkNrQ4nQZfzzquwJDyfoAyHrcc5Af4HHkumUZcsm",
  "key38": "QqzUJuSU1QweJXmG6GN9ccq4QW6MiVphzk8wUjt3CbdpgBrf6zA2T118iZ263VSQCRZ74wuLePdJWeeEoLLLdb9",
  "key39": "htyjnmrbYAshYHdHuog1C3tjzRZUWjUm3XxBfBFkWtzenE3gFbxRmG9qoVuWr7spiTpdHCfpfB4VhesyWJpVaj3",
  "key40": "34DL8FrHwrG2PsgJWtPSWzWe6mzcPvF13YoEAuMH8ejvvN5SfCJ9UkZxy1kVRVksCPGcenZEy9VhVQQqZEthz3jp",
  "key41": "5DNscv4YxRLqdkLDyghKREVugbQCHo8hx1FbkQTZXNtXw7XDtctsLR3s8t1tBu2gcZjqFSsWFK9FqbhXtVsfv9PU",
  "key42": "3JqzawBtJKN8JuRb5penKGBBiZ8XeNpMKKn6NPeSxs3WafFTgUuFqjiFUVG6MnxnatBeB2zeHiDiCKCWyGRQy3ZX",
  "key43": "42hwn9nK6nY3544BAkVQREZs25xvJwihj8216MsfMNT1xoWQpDxpnoHmyUDzJU2igLb4EhziFPubbtBwaSiTr9S3",
  "key44": "2HdHbJic1wzXoAA8zW9iDZFjPUrCGUePgjg8Twk2zN9YmRz1NMMtdKZoDoxMr5jqa7mNJMFj3hdvLKwFm225zD6C",
  "key45": "2GsKbs85H6pJo1QsLu1uEvCq6a69AzgfPDFfFSyAyB2ApFN5aaNnMfYYsueRqg8Upp8io8TkAWTFBG73oiSwADJr",
  "key46": "Ue6yVZNFLRtB46f785i7zcvdcGYq5YyqAVQmMWLNZPTY3azvJHU3UjWewGLMcUds5FwZrXGc26UK3uoUvJ16RFU"
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
