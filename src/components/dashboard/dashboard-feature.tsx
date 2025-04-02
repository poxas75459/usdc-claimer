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
    "2UhiuzMBm3UWfJEEKa9JuahiBUgqMiATDfx5y45rjVLkBsR7aEtDUGKU1yxWkJNnTWvKcA1GRrHYVnd9gkgkLWRk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YMwG39fSTMQ4BDSMtE4iRW7N1LdP5AKEvvSEgXso9xdyt4fkW1UFSrVUnEZSWPngZZyjefuy6zokmJPyVGbA9mi",
  "key1": "HUEJCrR5GuUT5XwkpGH4T46B6haABvVPA2RwjUPJu7mCSCs37zR1SD1XWmfTigYS6L29VwJQpyGkk2ESJHPbtP2",
  "key2": "5pPfkMJW8iWgy85nAexHt1x7dhVFVfyWXn1rggfKAC8TgbjXM2372LM5XPkybJ3RUSxSKfFKuc6UCXdt3PSrnZT8",
  "key3": "4zxwYwWgBsiAhcohcWy2w36nauvRFBTiHzjUoS59h748m65VAdxxz4dVv55EFVN6m3Cj4KWBkcbyRLVmzah77EqF",
  "key4": "3TBAX4jmz7kMS4YzTJ4oAz5PuP85qwDRPwAf4b6PUKFYqYAShVNYA2S9EeSf5CTYXjkdmGdhXVQoSbhf5XTbbvFT",
  "key5": "5T8RcxjH8i8BBoDRLCbxUFHh8uyDceJ5u7EMDiVnG9yteBcYzkVBabwgPTo8CkdxoYBV7TsUDMDvhpqWQ1pkdhm8",
  "key6": "3SSwPeSHqgowREr5M5YpdFXWjiftNse8V8MZAVy9QFUK8ANMNdtE1sV92WK9gESVCSq4AisjSUGaZekM1Fajw6pc",
  "key7": "4jQG42kkZK9wSYibEtYSGTqBFtTTXsVeFftUd4oirkUTNda7AWTGpCKk6ygYmzrtA2eb5DPpRBirkE8zwzCgPHPa",
  "key8": "2kC9ksB3qJmB8AB8wfCCXCgZ84H9U8MDPovRZRAhrcA3424sWyLdZY96uJfKa2Fz7N3CFgxGXQ1D5R1GBFBYAFt4",
  "key9": "5nAea23unDYsR2AdigcTZKgCupdvLV4L9f4WM1Z7jjqU6RdiBVfAX7wfUhJnJaiFMFbPC9vRiT3ACBbgDGVSMG57",
  "key10": "n18G9ijbccPqfFL9VNFdLKoMsyoJJhCHibPka8im95yMahfZXcTUTpDizegRg8zxCSV6H21KmeCAVkYzDj6tEkB",
  "key11": "3vLzCqRCgzQyYdHiHMsPkxgC9D6pB14AqJthiEoieWDEJgDSW5NQhZM5wnK7oL6d2xMPGNA3BEPnLaTMrZTbGmSb",
  "key12": "4r1zXn67ky1WLx8Ms5mXCgXgiEdtmAwyiQNCnCGAgFQUHH5t7Tea14Y2pRhsvrnoS3QaPtbZmDE9k6mMF2bEAx9c",
  "key13": "7VMorGcsMeET5cwpKLH9HdYVav3c9bQRjPfbXMzRczSHjSpBkVdqpxpwPsyDo3DYcWSGXEj46mNqqNLLyRuoD38",
  "key14": "5DHon2aowPbGf2w3z5UP1sWUFZAoBzoPr9Vvh28LHtv8KiE32MZBd5BFfPrv7kPP4UksNTHu8j9Zi1mjZQjGjGdM",
  "key15": "5UTYHt7u2P9ZvuvAaqiDtRYPSj28ormtEJoN4U5XbChmdX2ZGemuQcp7385bJCd7ULe3JwA7rCd4SxaSTCUmM7JU",
  "key16": "4axk7aWEqGxkKb2V9WpMDtcDxPTccAZmWPA9enjg2S2Pt68f2b9QyAVUTic4oS2HXKveMJexVVacXdgF4tqm8Xyu",
  "key17": "4deAncBviXzxf6LQzgDdckzzuashydSm4LECBmAKbGZBLc9uS1dmEgeGZkQaafQpZVtsbHLiqarKUupL3h6w5w3g",
  "key18": "65m9oXvJMfYrEMWvoaCcPnP7KMR1D6bKpk9Pi58YR4fQbjDLkUxjcneS7mr78DBfTWK5fgB1WJiMfY5Y9fRDHSSN",
  "key19": "24rvuAB2BVAVasreKyUcKvJbpLhxraA8Qgafa1EWNFy9eXpzLo34gwTib7cMXkZR5uBpdqTwmh1ZBQ7HbEokrvnA",
  "key20": "3jQs6gk9CB3mDV4wPwZ1o5v7a3mA3MDtgq7fRFZ3joNVpgE2yohiturHsLxJCHTDo4TaCySKFFs6TPzTU4jAXSVJ",
  "key21": "229mUeJg9urf7e4Hxo52aNnm7bZsRH7xtMgGCBRrA2fjzt58WJ3qnZW5cyBkogomZPTyQTixWeQ2GQ6vm4dRPRYN",
  "key22": "5f3WF8PyjdCKSBPfU42vCzJDUPgCNR7FmQbGxSeecJ5HQGQoLJNJw7f3f6S5j5mqYNTF3cV8R8zrkqVeT228RjCZ",
  "key23": "5pFYkq5k2E3Hbh9H9938RMw5zmEpNad4LqR8spYDqQcoUQTy96yX8tXeUq3vjcXUgA5m1Lc3tN92wYGDamRFgfmT",
  "key24": "62oRHsU3Uccos9X6s7oJ54ZDXF4fMyRJ49hZMT95Twiw4wDgRv5mXZMosmWURYrg7vk4bFkKbDuBARwmHZT2srvd",
  "key25": "5d9Fe28m5ut4q6cQ9cmSPTZZikEhjBrZAvBGfSvufERMpMbDEiP4jKPqB5t1UKSfaDQkqxigLi2BBKQ8NvXP51Vk",
  "key26": "3ZoNMJwjX3yp9yuMxyF1m9yY3bhkcdPz41aUghjSwcUMK1Tevt5PtzAmv5njwj8sH5knKUaPujrfmDiBdbZcmuf8",
  "key27": "4vvtySC3yrAEQmDAncru8RyF14xWYtojTahMmZczs1Csd3UQKKAg2DM3CdrK3CLK7hQDn5vMEKXkrW3KxfeFKUHL"
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
