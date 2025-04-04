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
    "5C2mQVdmvCDcgE4uDy8HCyRMMjh9dBULCuq5mJdJQpRAkiUWHB12Sk7NVaxc4FB6ehnriJNKChWMPwNgHkFSrv5y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33Q2UbYqFkdSCMYPSF5iYuMDuYGozCuR9JYFcsXG224jCcSXtkzYy8kwKPFgkKQc4uXDhBJ6MZq4bwcUtbn67MmA",
  "key1": "3Ao2ipDAPaYGAHTsa748xtYn389FfE86YhdyAMyjBmEvp337XpiNMp5xGognhEN5WDCpPZijLv3EsCzvoLK1a2aJ",
  "key2": "2RXwwMshdof9kWQ35ih1JWosRm8R1vPiXDWp9hKHo84z2o45GdvaZJoA9TqbxkyR5CdopAU6ht64D5yw5CNCUGM2",
  "key3": "2ze6gkdKh7N5tz7ScZSsXDG58pEsVeLyw7EqrPJBqZp86kFMuYWd5pew1GYAx2GxdhqMnqTtRzJyDDAoU2Zc5e5C",
  "key4": "UhiTyC32sqH1DUvvmMt2YbQJJjDgp4Th5EfUsNY2q91VhLcrPMeFdJRPXgAFFhiwdk3gr3gdf3xi7LUNqUUt538",
  "key5": "2VoVPaAx7bLmgpSXdYUGpZpxZm1rorfv4QDs3Svd3uBkjnAmEoAs1wQW66BEqfMNTyyod3oUjSfSPx1kpLLjXsok",
  "key6": "3jrLphuMtvidsuPwCBC29mQEDJh9NHi9SnazbTiWnY8ANWUVkZGjqwafLuvfq1VESt2Tz85JvswfNKQ8tAP3H5gP",
  "key7": "3rYsFaPc7nvP2DdVndi4QVHd95TM4xpHpGBN7FtWTPXVUg3asAGrkBQYsaad79ruH7oR6CrC6yGex9vEvtzzTfaG",
  "key8": "6rsn8jbjJeTCXQXeuxjkyStus2ik86pEtnuzsW8cye2Y33sHVkaxBeiDF2kNy9NXf9DPKVVyuDwVQvJGPtovLRV",
  "key9": "27JgnWARxTk1GTKToGdWWM57w9HxBi1XfHzr4eQP3XDqZnHppnqk2z5Nc7GmqDrbGETie1KUxAoPeUuLrQTuATst",
  "key10": "2GoZDNsvrdNvjZhfwwvoWUH6xLZrQdgqmUwvWKvTvyYR9RBrvnKvaGMDWgKTKWohLkdCK8q2f4nmLrKYuYouqD6H",
  "key11": "3CaZbsezhe2T7iUvaDzcftBWcVsm96cqUaoH5rEKjjaYbxgRHrDidohSuFxuWLMokmKBj8pAzvLNJb4Cj3jZPcq8",
  "key12": "21SewVCk7h5rGm9PLwByVgJzmKbPZVRjV8vYWMyLqUF1TPKpVbhhzhhczokBZPtjujiNi6LF5WrQCTYhuHSNSPov",
  "key13": "2FEjDiDF2uHCBeL62oFx3GngCoMuLWfUPRC2Vf8L5oHYEj38pspnsgMURepLTsKLMobPgLbkCMggoV5gBtoKEhio",
  "key14": "co8vokGoUfa54uU1QftbQJ2beSb6gRtMCZaLvCSkZyXc7Tg4U87GqGNzvKMdrpMVChpdNAYpSdwtrKrtVkJhB1t",
  "key15": "4qDHTZyTAn1A42SM5NXhJfnu4pjUYnsNJEh8ji1npi7A3pSVyjpFYD8agsQgnSpuDGxp5cYBN5W69fWznxFs3KSQ",
  "key16": "zQ81afffEdFTTT8zoSbLFfLBZbQt288dfyjooP2bLJAExr43ngy7Nm5XEBiJad7JYqz71fth2YY4dqpkajVeexo",
  "key17": "5H4WnkznRbR4M3xfaudh4SP1uG1ENeNUgUS6Ko3mpc8LyZTAKi7bU4fNPBJ5iN6bZ8TxKGmFoN75wbj7a4pMzmji",
  "key18": "2frmsad9dJ8p14AK6NxDzVHtsKZtL99pD38f5K97dCocwRKmchoGLyVnu6LTRXWdqxiPvJuPTeDrBKxZfm73SxCS",
  "key19": "4rQMTca7pRobDZFQG1WoRJEsoEUwyC2uZyb7QLVhAk21VRMaL6wXZZr6TATJ3x4TYwa11mLDHBjzHf42kcMpZoFj",
  "key20": "2scyDcPpYBCwT5qY6oHJz12v23icRWJoHdQXjj47PCvDTHizhwHdCmf86zc2ciB69kofPhzWA1SU1r97C91JSZNT",
  "key21": "54fQKwUj5m37y15SCjWTMfEz4sqG6gpk7NQo2GGoXg2kpQCqTnHHaB2uWwwMswN3fN8qd9rxmuqDWvaXJH6tFAGC",
  "key22": "4mJBJ4iSYopJueBkD3fxEhnFKhakcSWGsojNrhtEYXRMeztjBaYjGg4t3dhDANDGY66jwD5TygGA4NBYExFDSYLm",
  "key23": "9N4WNfAZSUD1X94NykvbKzrda95SmLuQcjufXxEqFPFRcdACckzv4TgqMMLyYmPxfYH68nNjrtJ8WpVYCPztiPs",
  "key24": "QZQ4PYEijNGK7P6PmZBKHC6rX8FdnXQ1385qQbcEiTz5UeiurSm1cGqVkwLxTzPjudPMbRSRGfwBUnPMVZ97s39",
  "key25": "WnKhx189Y6zkLbCSJZzwdfxX6dFGaKLk1jU9aizuxFeemaQRqmyktjnipnJkYsJWwqdqd3Wu1KcRCskHuUYcfwP",
  "key26": "3BKNQCveny1vMQK6xShitGLcVQXqLW4tnu39C6QgZbw992J7asYXFxx8GKeTcXwSHgQYpumcEDWV48baeXzSTMS2",
  "key27": "3BWu7WkAYE1KboT1SAEtijQAXvR8LW9WKKG4RyF9qeQQeVqprd6FVneis8okZi8a6EyGfWgXZFpACqGbaXAU1fkG",
  "key28": "oqBoFmCf7rruReFsTGJKWL2qoEZCY1WFKJkhxE2SaQ36Wbm5dYFHC7YfME4oFgFPrcH8dLaVAkUEYusxYftJhGi",
  "key29": "2un19WxcweiZuMbSDPE7FtVqreK1Ah4Svi33DEnQGEjgwPrkHK46PoqdkdBA2RsdzuJvnLTkP9ScsnqXDD7FnkcL",
  "key30": "25zkQsdcCPy3VxidG9aAHRMGv1M9ojmMfEr2kRJYBYTEADNqnckEBWkgDeG3kPxxxG5FstUZRc8k6XZHvHwx7fac",
  "key31": "3g58Mdw32n2CMZjMnEMsRCxGqhd1g6fxwA6NBUQ3HearfnBPMj7R1bq9svdno9jQdRFB3RCMoZ1Ug1KNzyEA3khK",
  "key32": "35Bofy9TMuQtmdiQ14DCmKvmo77grAaRtPvj3RH1WEbDY8R3gy9zNMppQN26P4vGozkrFjQikDGahrdTohB39z3m"
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
