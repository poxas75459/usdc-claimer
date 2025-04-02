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
    "3NVTNwh57uM5DhrkHS1Qh2844ADUnaNSFppG4guJ4qaG2Su8drA6bpmQtbs95dPX2EgYer9QLJNWm4rvLt1P5fJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4k251LQivjrQWxf8xbgyfK4jkt9hf35EbAMzJ2JZ5c5WF1jyNvRNvwmfbx3oCSNjA7wFgTp3obZGuJDYtfezE8fC",
  "key1": "3JydKJjnsVKzrPaenC3dP5zWB3xQkaqP9gAfWHAeTbx1to31ocYbtNM2NEzLRRACVwsvjnzRbC2TehWHJxnkngnW",
  "key2": "2gwuyL9tJ12jy4n7WbutBsB3VuVx3LP95CvP4qozoWkDKNZBpkV55ezt8qppNT2B8k8CM9QkDja1BTD5BVeYPdHZ",
  "key3": "64NKQeDn1Zbf3iCowMZVyX6PN4LwPCd8pSB25HZAR9spJNZ6fL35B2DSjEMK5cYpnUySNmJjtQdmUyNeF4NpbKtx",
  "key4": "5Viv5ZCmQ4awvqt31FoazL5pzqo3w9vkqZdrX2ecQWdq6CTRxUfgEAhLrGXwDUcD1prn259hLbgb14Fdqhx6TKug",
  "key5": "Z8UcYxhwaYpfsccadHnrAsYdjyi6FKG5KxApzwep6PHWwaSZhp4e1oMM7WceoxEBhnUfQXuQt16CzBn8bwsKcHe",
  "key6": "5C3xjMHSZEy4JZ8SxEUmqxKC3iYddSQmQy6TnHGDHGbbu9QMSV3R4pX94vNYTChbbLmoRNTPWW9VLDvJn3snJJ1U",
  "key7": "3WCKmYGrkd7s6mAghBvbdsEtUVtzRDyn7Ug7MTst3Q8dLodQHRekfrYDu968r3CQBdZXdmDoenohfrKn2yatrkEf",
  "key8": "3iwfnkssVhzkcWEPsMaNgCFo2b6q93rKNhbZwNTqAxxXfhfZXE7TD7SkoStUzN3X36GBt37QqNbw4Nj7TmmKaE9h",
  "key9": "3Jtf2PjEHjE3SMh9SUjqYxw6mTpQgdkp6XnHPuedP3C5GB7f8bHc1L9JtBb7G6SrkKwtqcLnYsVWCqm8wDHZ3AMo",
  "key10": "4ThupispANrbHuYeJofSei7U2GABT6gs2sB5matXGoFmKJRiUWpDqsWe8STrVVkQzEkxh5j4TEw9SwwHJzSLDhe3",
  "key11": "4a3SxpHnTp7KQERnTm3gz2v4pV9cgyiTNc9AJ2mfP872sRwpWv8XHBzhzg72MMWKEhXTdHgtvw4R3NQ8MFCHRGi2",
  "key12": "2VEdqxsZ3Ls5z3Un336pUceTqap8mAi1M4JK7GSmUXH8bXGQNt7UWibgSy26gqqoP8EwJNmWidvqtFEVWWv8H8wi",
  "key13": "2W3hErCRG1ianPZMBuoztpeVFasstMRuVggj4dhPKvEpHQy95ks5XsHHd9dXAKTv1hc8G9LgyQy6FywLvaFrhszu",
  "key14": "2q7iNTyd4rUyn83b18iEPxHdWkPVWYD3T2X2YJGZLLAQoZdNhQbkfr9jRfv19AQMgpJqquBEQSedA53uSiqUuef2",
  "key15": "4wbGVEvZ4dW2McegpNFZfWn912ez5LG2RiQ4V5uEByGsujbxChvb1QEWFEYTvu4Mdu7fHEKamX76oMf7u1Wz7Rus",
  "key16": "4x78G6488tCnfRUgZbeyGuPaHckzKvizRWH4tGmmAi1y5p49dQiXH84ahcptuGVDNNwyTh82KogmzJMMNdWw4bLU",
  "key17": "2fx4196bMZuTxMHFLd1MjFWeJnmcwapSyLeRkggdKMqBF64doZDJCtnihqyM8yPN95bQvdf2BJPX3XQR9ovkMyYf",
  "key18": "36V7r5LqPyWigehYBxN5XdrwbivUee83jcmJfQjjxJwREkhUUoYLMjSpQqBQAPSZePS9NxUGwCSUBmRJ6uwMGDAX",
  "key19": "5vwkqeJjdCe16EhEG2r9UUGrfARZGbxcGhoZwGfzx8unVf3kyF9BgfkaCChSHhdcA6d6ZWvL2YbXDxMu3tvJ2jkz",
  "key20": "3tsoRS5PKPuLCuYzEBrLLjpL3FLoFWUHFwqPSNWujAd2k77nqP2HfJUMgo4kZvkUietsbdHCRDnB1T9pdJKMSvEj",
  "key21": "2ckbXMh2PBZLn55esUk3ZeKCcHUkHGqgjksVxcS16vxSbbTBMiVCdyeRAbUYgVDNxsMqwP9Me1sVnc71xZ4Va2gN",
  "key22": "4QtEehMuyW2AQdXKXX85rMPcnnDiV3TFSSg2rrJbCvqKcUpunjRKWrwfh7CuruQ1rdVxZdpLXpB2RXMmHHt3iZbT",
  "key23": "bjEZn8pNxTGpZAKfHbJ3fL3v5Cdnf1cUANAfZfxLZAThGrYyQ4XRf4MTsgJzFs3GiSoXR42FgPZ2bQUFrXGpeZB",
  "key24": "4Y7HDgPZiDv5Rwqnrp1QnpSu4qRc3EV5kLFZeHNigy3VEBAwtUXByAGSEuVSqyqkDAzV1BURyKhSq1dZ58CCdjM7",
  "key25": "s5wnqjR7LjgYez9Hksb5pHqS9WRBJLNTeq5ufBhH9HPnzRDtvW4Yx6Te7jkJzXvpiJJZv9rDJp8VmKhCFnka9op",
  "key26": "78cCuTgkbZSCvC5u4UH2hrC4WJhmNHaiuKvNeNdYDTuo292y1dVzALJgCsMqoxirh9KkFD6q4k2imkGXTtLQa8T",
  "key27": "2gBe6t49zrwFLgxtwkfUFsjMW17whJpzi2cdf6gfdJBHiy3UMSrQATryToz7N8QMgYTHHAvc76j8EbhUFurSCUsC",
  "key28": "FT7S5qfN1jP9muVUM1d7S3AjKfC549NsP92qy4j52bEEZ9uqt8BwFodNJ9dA5vK7Q2edTsxdSWoqDry6wXRbsFB",
  "key29": "2uEybNBLsQfY3HypWEJeNkTZeZMM1VoE9w8NENbATjyWEHYJ6CXsGWs2mFXCXG3szm9FGsRJgkNEQ3LjAG2esDFK",
  "key30": "h2v23qsg545KRfECasuGVBqS8fAugTi2wxnggue7bCWAs54NeDwZbrv5NCnCJnCbiVfbyyEwEu9dqSETdN1bChy",
  "key31": "3MiSopt8bJvorZZn6yXAoX32XbcfezEyWZ5SW6SSs8ZsKSqK3GuSzZszMWa8ZiUu3K4ajPtEMhzeEb4htEYHVXHL",
  "key32": "454H5YGddBvXTiEdBohvWRf79KpR2KkwcAW6rsiTk2hRkvCUPTaTCtw28eqF9nh3tgRS6L7u7TxNa2gaX7VQKFcv",
  "key33": "iqPKX91ZNjXSCCe5dd8rAnLcPuXXyvU4T49e75oAR5RmP767pqf8K4Yu5sMEGb4552drWay4F6YkXHULZrQGJjc",
  "key34": "tr2e9jWB3XkPsBggNrLkSWfzJhScHRYwAa1dcLZffECSkWJZG5zDyMoKojrqg42yMMnAWww1uBdtCg5h5EQdsZM",
  "key35": "2YyrXs1Ag8er5HxRrN1H88FXVWkCqm9arzAriQB2JHomhiJ3vDvhnjrVmuj1geMkCUqLCoLrDKYoNqNjhWUbkrpY",
  "key36": "2dmjFpA8jZt4HFNC9sEjWzhTYRyGFU4XggdzmTc7hhjS8acbJKk3AtfwXfrfHGNejd8aCxrzv6JuiAHS2hXnn2mm",
  "key37": "2jutUAizyyK8RskjYmavzRyAUYHpVH3u7JdY9vpwGAmWSjwHyBxXhXpFTuQV1jFYiT2fx7XXwh7D98T61ZR7ZEGG",
  "key38": "5qWXYXTHszUkrRUDptB8icSzuCkEKYJW98M3BYVYxR29BwYZe3JRHqXAeASuLijc4t9JL8TvRN7UDaaUaviq2BEs",
  "key39": "5tQbAydQppU739y4SAzKyHDZPW9sD1eZsUcnqJWSj2bhsCTk7S1nacu79rJ2p7hb2gpuLTAA6MiMnc3deTuu1CrL",
  "key40": "3pvEe2Wr6cTTLKodmyTAVAxSFbYP2rYdzt61nXuiNbwBiy4udTfzmS9TuKhoDbDMvXvbYbhSRycG24dbgeoGi57w",
  "key41": "2rRuPfpjZYNQRxFnm7wwFjjc2oLSz9Wi8ax1U3AtiuPoQ6rHUdZbUFwFhbh5RWK4BkPLNH2iHfHHAkATp7AA6SUL",
  "key42": "44SXUXbNLYgmGGQwLJcwWr3PHFimAdFhWxjoZHQ3zKCSQtEUF3gzKtxzsnVJJegCVLmS4PndvXMX2d1qQvKsV7a4",
  "key43": "3nWMR1Prst9EYaPuNcwDKMvQexw3y4AR7ezF7Ep8GKSTCAPAfdYEE7uMtcDX2QusYhg8pG8bUNqDg9M9fp5H42N2",
  "key44": "5oA4XDTSbSCgdd8NPBEW8w7s87uFV2q6vbYxHbXLBiVUKHuRsEjgZY7SZBbmceV5k3HVhx99T6xx1DqwEhKv4oYw"
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
