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
    "erCGx9UmZwoVG1paghBdWVZFy8MhvSJodX3fU1eNivenQejNghY51psBHpzn3aKoXrxCKjSPrZX17SNnqKktF5X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rfV4s53oVNy9kwyNsVWo9C2RoQ1NSu4Z2BL2gUBeaeYW1E1twXf4cemjZiNw8xgfjMELcvpqHJAWjDGmDeevHuJ",
  "key1": "MVxSkySRuLCKS8JzvjYhtR7iBaFFScrJygpY1L89jhEhTBQSr5GaYeWBkrPoSK7fw5wr6jEVeWRHtA912DqqL19",
  "key2": "t9MDFG6EQdpsyXuFE5L3Ti65afyztqbDEjM7NX9Mk65Lrgng8Mtzej9mS3hvnVDXFco1QTACahmFck1yz4poDHj",
  "key3": "GFPg1AcJfwumE59ANMsDDdSF7ZPjZR1dDNiDb9XENgTmpvZh2kRybGoyQ6b2kBgaj2Zhbd92eGyWPGtekqgA5JL",
  "key4": "2Vgpd8DvjpZCe7kbomtEhnpNHcgfL7G9S37LmCxU4WwpA5PTscqqquQibPmMwxZkJZh5rLa7qJCDoPSAd7XTuGA2",
  "key5": "VezdwKnWxAXRDBr72S1vX59XxhkWvGZyXn4A9ak3dpw5xtdpfFnrKW2MhcrbYMFG1Q5eKE4b8mPrTGHgVCxFytC",
  "key6": "4J9F9BTW1iWuuD5usnmno2a2gBMFqmBuao51hWJGD9QFbxHpDEqswdvSdn8d9omzfgTGszmq8zgPpH54TF9ZqREn",
  "key7": "r1VRy1WAPEYKYGMx2ZGjdguSYrBVw3iXtgMvXLwRXFjzDSEKzZ5sk5fYafuxmsgUyc8cW1E5zX3UquMr8jdB2T2",
  "key8": "Hjn33CmTPpdW5vFngyb5DxKEpNaZsouVjG4c36PVFZNUXvhpCjAJVv5VRkq3c6Q35iy8c71UsXs4QboHRxYqgcV",
  "key9": "333ZPunawDposd9qvbGAP1cbUV6NRahB1gVPx8ocj355NqgZLigkzTp3jgmuNvbTYEiWc6CZnhso8wN1e4E3rp1k",
  "key10": "4FBhmwwjz4f2SKFAzYw2cRHAX9JEozXiSsphep8SU4JNWdsuhY3dsqCwtVapRem5NjuPGLdxxqUhTXmf9ADu2z2G",
  "key11": "3vPGd54L5rLbhbXbLoH7nN5oH5kHzDtQ5vqmSs6WfTkwGjkjyR1C3DdmC8Pav8rZ36Kj4NhrU6snjpJzNuA9efn7",
  "key12": "4UWZV7qD7fjCcqSDLp2oecegDQkt4WPGotDrpE24SC65wrf2kjKmCG23XEUHrBqxr9H3f4jwS8XeEZhSVbdFUpK1",
  "key13": "eydPTqAnRxphJ6hzoVxVWxqVZfmAHRyfPJ8byo5DMYNKPcWhKAfC8fbdAhQQzzdjFX5Htfgn7iXkbXq7ZshZATC",
  "key14": "Eq2ZHWYfJJuwKMA5mD4DXN92zCvW8moMBxcjkNWtmoPESYoXzvhS9HRnixew64kcWZxELadghucTMtTmPDEeE1d",
  "key15": "4gVLNCHtwV6oWWaYMY9DCVLXfd8UnV3WrXXzUSrveQ2ujNunaroLRUUvmNw8BfTajkyECSjX6rPrCWCjhUVqovzL",
  "key16": "4ys4hxKFM8pmEWNayLBVGXZpYAhefrxjTqcPfFC9mcHRTr8aN9G966iGcxnR7bd4uNwwxrUnUEGaNsh7uqMKXhjj",
  "key17": "2dKU1JTfvzjAHr2d9AqmfFQP4eLPg8S1Fxksdqupr8SbFwDYGayGDtmUsy9LUAzczjQXLxFP7NAY9sWPSMNqEmob",
  "key18": "4SGp5qMha5MdKgUHg5yRqkxeiKJH1y4CysHUjLJMGHGSkqyoX5Ja5yeFb99ErxFu8PZ9jc39sj7uhiuLRxbnCcxU",
  "key19": "5sK5FFS2t92yND7RqSDr7mGW2ELdR4VHBSne78AYyqvVFb5nZPZpCHN8odeAhgxJDPSvtdhzrHTDhh4ECy7baotf",
  "key20": "5K14kdbJuQpDA3TBNAYNPqyz8sNuSQ6huG8hopDTcUtBnB5THKDCwQAYCXRGxRgxVPhzbPSEmmgDssAAyEYSnPZL",
  "key21": "3p6YfBM6j7BwXUD4PaBGprg7PtMi9W9cCvwzAx8rj3KMQZTwFi6CUeWoikgYCzV4eCLHRNXcgnTWUn6eXnAbAQk2",
  "key22": "52WLC2MKiDWgo9eEFca8BVEWg4pFnnwCxPndAcjxsjcjgcGuQS9xk24tbMYWFjFGqNFtqsCVesnQHEM68SVC6o6R",
  "key23": "2MccGD3LdfiRXK4MieuiLz2kYPwfZwZBDgFrupKPm7u5VT6tcFWjLWiLkXdDiFR6Gw4wekhMCcCh8kPeedoG5oi4",
  "key24": "sLYnYLAdN2nKEhJudCR6du7ph3vchpprjC9qx6BGhCPmFoT62gRTSm3v2cE8SURLGH9hD6WPg1YPd1S4zyigxHM",
  "key25": "3MYidSsbfSWBiWcnx8aH63nj9Fms7BKcm8vhQYmVuv2BY8MD9jH6b7wYnLU1VwVXuodVvivkaD7kp7bPXMGGGTLk",
  "key26": "a4Unk6gUHgu4F9oUYa8grKbWL8WkAc2N5RWLoTRLzjPj2mmkZysskTmRD1yxGQebNXoSHDSiT5Kf4KSLtAMYLZC",
  "key27": "56eQe4paAL8syfkwQFUQ4UMgwnrMMLyUW9GerWEpvuyS8ryqMEsWDzCQwuxWYoWu13s411ACWD9nBV1Joa1CpUP3",
  "key28": "55rXx6nE9qLdDarCEsvzsc3zUVx6axjKQrjnt4AzuSMcxvUZjK3EEXfb6MUru6ewHwUz5otoQ8ApKM3N6JWkqCPa",
  "key29": "R8Z4b7cL6MUjBPFpyR4twNzQz9cdskkDz9qU5GLMzmtPPoEMo6PyooBy9ogeymXUCUBEfTeEuzvj8PVhrYGnQxW",
  "key30": "2MDdj2aRMiYnN3CRMuPf7vP6mTnZeKKV7E7UotZSN45mJqhDHXAW63GGbp2kyWn9kvHWyVpnUuPoKUTUTGipjSXK",
  "key31": "4KxTW5Wt2yn5kJfVD4MFgDx2CdW3PiLRmdLdtoiZVLuYEgQajXnDPaQQoKTjzkpqnK1xbbg4EVM75Xjj3oHztZrS",
  "key32": "5vgf4co6fBnGeiXhmTUFjzKPxYRuMTZrhPRY1mdz563oaUMfmaCkTbsB7wK7qg2TxkVzuF7yuq9e26fvowT7a4qi",
  "key33": "3bqVXPa3iMkPB34is7Hy6RacVGceUv2fNJuVqPmTYz94jui3V4hkLt8qck4JuMW9PN8NaiBG1RBdZzSYKobbFLFq",
  "key34": "4BJTS1LzyeprEHAiQgtfuDV5KziBE19n6xSm1WZMht49RD4PdRPCtwvPuMphgC7h7EsDmtreba6uUDHd3tjq17i3",
  "key35": "3kV4ziURq94DsSS6oPNCkr1KtwbSugKuX1bJzBxrYApzEpZC5TpNRg3W48tkSzaKZitwriqFCKQVaVeghQnKkTrh",
  "key36": "5usq9YMcuzUshTxiWqFUw4D6Ezo2axZz93Fjggp7oVbc4HMpJH786okSKX6dcQ5HMeMN88pmrGZDyB8R4Rp6r86H",
  "key37": "3ypo67HYfMZN1PPxN93yTZoU6UWDUYyXKSxWi8N4PFXaVGq3VDjouxZx4W7PHZKe2LgWh9SA4z6R4JhSp1993mXq",
  "key38": "HGJevxCv8Qx3EkA6CS21ZDS9VkkDAPuTTAG9ec4kVt5Dvg9WBhHenBVxZXMuGBBjtVdCSrBbyAXvEhQeRHvqBuy",
  "key39": "mdS3ipNJf7pta6phLurjQkKkTSNbtXAo7nNPu4PeSmmn1DnHzEaL81FkPt2NZQWFpmJ5XM3H9kHcGPYtVcqzTtz",
  "key40": "52ncThPZck8kxAp6UkxMcK8LbWXN4tX9pm4wpz5ub6qbseVWmBjkxqS2mmj23A5WHw8kX5MdEyEJDwdDXvbdiL43",
  "key41": "3U2njBTuXCGiwd5ktZT8PCh7vY2ocW7mFSTzjDmAcBEhDfQjR6Fv1SA385yTBmpFNdgFVLUd8hm4MCaHJcagPj7X",
  "key42": "67Ei8tY3yszvL2H77bBDbD7axSWuxoLEk4vAe3ng6xe94CjbqU6ziKGC7GcrBAGWTcVKFEXuc5sZkJrL7DGjhBsd",
  "key43": "5emE9xW34NaFDXVdPTm3m4KMXULKekQ4fxo3gvQGSRgzkhNSCwPiYiG9B3s2vqy5i6BwjTFfECdQ7m8W1qHXA697",
  "key44": "4hZv1WTqu1w2tM7EzRrra8sARxgZhxnXFARanX5L8jNFPBhLuaHXfhwL5pB8Hzr33oEJqsbjYmY6ZTfhjSjx75VQ",
  "key45": "SAMQC5aW6t9mRzsTobZKebr1SzKW1QcXMtHK69YQ4U6P2N1zwZ2yAtZp1b4gGahgummxw4TPjVzcUY8Dp1Yj59m",
  "key46": "4ugitiXS9uKZFXATHESXqSJAoHvEcA3Cq12yiBAg2WFa8qX2oRAf2sbSkYWydCVBx9zWMbEeEFiY9kBzJTS16aBy",
  "key47": "2LJskhXeYoVRbR5oBHpx717n46MGcNkvnXF2fHgmxSf1WjnZ8ba3moWM5ugvMaZncfkUd4fgiYV2vK3SZsCko5qX",
  "key48": "3DFskgZ5CkoTKMXTFksYAmmvRUCXY9oTgpLmuHCtCGp3NnrwwNCivEfED2WyFtiseeA5SSvXTLas7FrEyvacPs81",
  "key49": "4gwmujhZ8Qv1smiLqaqYKxqKGauztujbKxbcoj7qsrLaUtCZuXoxrPo5KDsU6CDS12KR17BGxw4ms8psLTUymgZc"
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
