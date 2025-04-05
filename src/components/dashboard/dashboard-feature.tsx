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
    "3ZPJ4ZW6icJ9pNrqkc1zBwgs5Y2gye4MjFJaQxztAErgEjLsqGZ8uu2gxkbm2dU5Pp2o1mqKkCCMrd9J7drAJScg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57rHc7zbkSQ8HDMoAxpFefisoYHu7HZeDwJWfzhZwUG9Bwa4ccPuUZjhmv6TamxVvLSHgboxD1wyPuMsPrt1CtTN",
  "key1": "5eEdbNSYuSK3nAnjvTTAEFuvWBbtmb6A6bS2BTGzS5meuMwubLS9z6CQPehj6UvWqs9NHJdtGJbffZcr31rLrQdk",
  "key2": "2RniVMsSLjBnefu5ekVaJVLcesYnzJK3NdS9hmf7oVRPb6k7X2eCWfaLMgRSJb4W1CbpFsHhZXYDk4SMz1dFWVwe",
  "key3": "da9or9kPF8Pb5kCznfiEdECsEMqApwequUgzABR3DppWHqtwbSJoq7YWHU4y7eEDoqVnUJvNeAKq18DddY67AbS",
  "key4": "35cLXT8Rr8LwVK5vesJa7vGiBSyBe8p6Qfxhi7W9qV2ZWtQVUBzhLEzC3xSoMhueCFB3JR4U3sfVmaMbsQhcJzvp",
  "key5": "Dj9BENqHUkrnZybFZvnW4NgshTYZWYJXs3MDnhKjhAmF4cELnAdnydosL3q8pf8rxW1HmXJeQfZyTCPFainAQig",
  "key6": "2JjocnGBjnXh5aJhfxQacqKq2c11qvDthSCwPrNPcHP3Ea1x6RNC1rcm4zP1SMegsdCkdCQQWpXiJmQvwnXTicPW",
  "key7": "3bZejaZUu6YXxbpoLrFnDQXsarfzo55jsnxMTtGAkD9n4rJ2DagVDi15yP5yoX1dakdP8g2yp2Uk7dFSwJAwdJiW",
  "key8": "4v2VveFiGqbcJubHQV7wXmmeLuCd2WZxXX7E4ra6UuHcFNMPUMDPRqGtiupqwo5vJa5NfS4Rf8m6pSFCFpTJgfFL",
  "key9": "4Xni8guf7XqvHcTwBfPE6jHo1iPZDYZeEzzQ92M1RnZxUunXYQGVXUAT1wnDjmTPiy5o8kKkr3rWKwVYg1CySqFC",
  "key10": "45XmYtd1JACnuSBMDJGs4Zx9f3ZM15ut7PNXLz9B579YuzbwacpQNd5LuFoGyRcmLHXvUFqXWH5YJnoXDY4oJQcf",
  "key11": "2dULoj1mpMu6rgaX3oyWTR4TEfn7u6LkXBKqGaiMY4ZiFTQzxZ6ojivtXaNJRYRFPHimt3MJMxA73ioViLv1VcMX",
  "key12": "2t8YoqA8CrWo2Uf2pSqGo8R369UihUvRoDrrs6oviMY4GRe6uHBZkxqbn2R3BnRbNeRcQ6xYoTgCBCXLpUficT15",
  "key13": "3m24sooivuHibJ5gTmK839DnBbiZ5FsaJQiHj4Np2jge6xzZ6fRgjJMwd12wWaJSDQARerJatoCTbREYYLMrgF11",
  "key14": "5cNbC1coMu4AyPFvHQDDJmeJMJg6w6bGzUuYehf6xnahS8Ct8VPwk81212UJBwFvsVXsxwo7neaji1m9adtQ51ce",
  "key15": "89fgPfrfV24r2c3Yk5GGYfGJMChfSrFznZxdJGXHokXYAmpuUiaQuZTbC9ZLp1SEX4dBYyoi4FmK2CKcsbUvAeQ",
  "key16": "sCCNHsKCJy1XeQkCPvUBzc5rPYN4ZtoGNLLnbasE5LYvpVAY5T6WzuWY5b6mwSmdAE4mSWytNniZ8zqze1JX6oe",
  "key17": "4ahLyxUCGSQMsVZKwuk6yPTDsQgFYGB267DiH9DCQPyHtG9TdF4asg1X9deB5kQErPiKLGzwoxs5NjpGBfmK2nJ3",
  "key18": "4aVwTeJ34hEa62oFX7NzxRZZZBFNZHDZb4QtdJfxmPHk1LpMyLtCyhXUt2afhizSatketn9YsPnh43PoL2eE7nrS",
  "key19": "65DU22KekRamCkMWESi4BuvveXhsVrGYqjNuihBb7Mx3RZ33VvpABsQdJa9vysgBh2cBKBCuDTrXCewSfEVyKtV9",
  "key20": "4bvNh94ccgWRXrRDEHXkF1VZEa2UQKvLar8E2oFZH8iHuxx9ZgaeVJeScbgexvutpLCR7wvRfPQjcaSrc7jGnauu",
  "key21": "4exLgVyPUxnrT2ux84ZgifiDYDHqDy7BavJqTALAHXZzdrNgpxWuum5eXRGK95UVGjMRQs7PTh9L4hekjFTVtAHy",
  "key22": "5TmAUngeBp2m14HHKWzgsCfi1KQv849WwKyvQDQx2N4UEW9o3QkHhdzZyzrq3x96vPoDbWZqiT7CyHTuggfg5ZtS",
  "key23": "2SsFBnnDbfi6Lkc2aXTdpe8paRtjeXUgYZqyMPmz6XQb5YQBJQYYSa7eBFD37D744q4tDdaW4efjjzmJdFXgzgSQ",
  "key24": "3mNmMpm9JeFTRvXos2xrknKrUQAS9hvcoAmDyg2Ting4XHtfhPXRpEziYo2keNJSWMbcSeC3ER6yKkxYJnFdMzpP",
  "key25": "5xJQdZsTfQCcEJfVPXZjQNFwnTVch5QsA4eb9Qid4QQaq4DwPU6HPLmK57KhdKK69GJkioeUio3qzNP68VF7ENVE",
  "key26": "5ZfLavNWcmGpcyBRiTMtdcwqsbZVTC6knNBe2Go2Ks8bCoY1C4yxB5ioUbCpsTbMTHLSGyn2RUQpXuWKNPEWD58i"
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
