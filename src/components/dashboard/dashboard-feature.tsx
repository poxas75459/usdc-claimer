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
    "3EHhMbqyYe5Zv6jEzfkVVevE6xjHPtB2ijDTETB1Cv5DFV3ks699TaqkxqCKFKkrF8i5PSBADZRyUW2QE91b29wS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eg21rMNCnBb7Mu2c2YR3a8LjpVFSjkvePVVCoxJ24imPV8kNNy8AdM3ydgFit25GfvLwm8QgNmbz1XorCLATjSM",
  "key1": "5Q57XZqHz7enMBb4FNfu4hYoMrbBFVE48n57KmPVTHTvC2EZJv1qVGyD59tkizH8TDspUNjvKsHqktEHSxHoi4R6",
  "key2": "p36GqobiMcZzxhYEGEf4vNVHyRCnsLZqqed4ZGNQ7svKTjkvSMvT6iA4GaYegSxXwbhS3YS44AP6S6xTtCT1msr",
  "key3": "3QPozGSk37vqnhdWmH7k2ADfz7NkBgXk6o7XR8Koxk7aEs6jTt37DbbZse3gm4ndtL6MUyxakw5Wr4wKHiDSYv8U",
  "key4": "TBVpsvdvHKHLo6QvtKE5RvYDmxSMFW8c4Pq7PDDuTg7U3SFiRFwN6GT48oFY2kXuAN17oX2mgJgVZU5of3VYGbv",
  "key5": "4PxtQ4Yj3D699YL2Y992SYTHAGZK39QCp1eqMBbveBhFFs4ngwKbSeGydC4tmWpwYoKHYXUHswQsHWo1GaT2m2Sy",
  "key6": "2DyARptY1cnbuQp1Vfd8RfFuU1SUZmon2joy3eEftm9a3HQsDJRxGeLbYtUZFoWFa8u6Ddd1wtWmVRZXKZyc42u7",
  "key7": "4THj1ZHK8dFkSj8AXkhBrqjoesQskxG7Zuxtpgk4oSNkJKaH6EW1tseocULFhLxwwbGpS31z1YCMezCZ419KZEhv",
  "key8": "4UVaDVAWV49kEu5BVaoqut1dCUoaWAAgPZWFmzi2qmdvAWpnY53ZZxmZyZnVbFVPkehYZKGZisuDZygmHMqw1Frv",
  "key9": "zTUCiDpexarpRawAGobRSP5PYgDMfKffuJJUZXXHSbEJeK6RgMRFMqhgUT2iA4qMBzDEEA8abjgZH4AkdYeeXfQ",
  "key10": "KinBUfMEhJ2yD6JaGUQJo8RKjDn97SxF4bBT8toZNdN4aMzAzG4WQz3hmqZvCmtkgbdSUHahewYYebgcv4NeYjP",
  "key11": "2HoTWxZSuCNfiCvAi5epiS9hrHKxu5n46FB6s238bupsGa287TVthvcRTNoJeMAGF59ZhM1FonvxRCqSNfEo2fRm",
  "key12": "23jzcocJVH4JGQsVagMoruW9Sfsd89iL55z6VYy2aow9YTH8L4Tvgj8H9JpefRxibYiBXbVQN1jJyTpR5UachT2b",
  "key13": "21U1CGHKga6N3ondGcSo15AsXvJEYUCBdaK9Up3pUgbGjBk1phYcHPA5rNg6VGi2CitTx9ztuohm54zpi9PW7r3B",
  "key14": "2rQpAYFxB27LeNdcu3iW9u8S5bLt7acJPoVjaizhMY2ZmU3TphDaB2XnSPvnPhpHNmRZbKyj9o7nHnjiTyQGTpfw",
  "key15": "4bTuyEty4ubMn37dT2CcJVcG8GxXV8yVupCiZ32Yx3T229xMHzQ8zTFRV5TDMHC92zXP84NsB8YXXJBXvGLWEj4y",
  "key16": "4WEpSupYjiFasxPpFrwxetFF8nDJxqaBWiT7pjRiKp73LHU4byC52L5Zqz5PaeCboK5vu7pkm8KKPuEdqgCdtsGz",
  "key17": "61LhQGbiMdV6zZDkyGfHq8gjGPxLbMTosYipHTpHXDwYV2WFGYZ6K51tDvWRFKJZetGvk3yeYgAfg7pUqs1wRMxQ",
  "key18": "2Fv9dHcp9NMoVwu7wpwihVpfd1SiPkp1fiTtg6HLgW2bbCzrGDS9ytUQnS7YeCCdCCZddf39odRyLEXJ16UrwxNN",
  "key19": "5dyRWrpsVKpkPG33twumhJUG5Ybq6B79wqWpHw7fFAZhemtSmzQr2ntCfKzWN8aHHM1g4v4mXtXjPHusJ3GT6dV2",
  "key20": "5KgwZ2NaweFQSzC3kvVfupmVsB69N8zr72kfzGkx37WKV2by18Wmg9mqjyUC6x8UNNjdgw8eEXRfhwHacxhChpwj",
  "key21": "5eoG9PqwNz1VGMBLWaT5LKmvF5ehmiVyRERTuBfoKAJHJtUTH6Y9Dbj2sTuJ8Lz3FTy1EZmHgAs2mXVbi5K2Bd3e",
  "key22": "3NS4PKBMFhxDw8PyCrkmVadZadab67fADfV5NyU2fSTFmveuAdx4NBMXVCauC9G11XL4ccDvQqDbGyrSHe46YM3k",
  "key23": "2mSMbaFXBhpwEAkdZmpF8iMcJUqt5EAJ9JuAMhLgQuXPoYknmk36igfgNcjp2JuiFQxDSPA9GbbpWNGQoXq2H2Qh",
  "key24": "44yuNp9imE94aawuX5WgFjbii3nZvYdGfVWg86PELzXBqkGNFCDonLLFkPs1iu7vXqKv8tPafps8P9AH2txLeytg"
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
