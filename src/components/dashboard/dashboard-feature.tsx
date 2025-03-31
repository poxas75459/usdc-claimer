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
    "2VorogCEyaE4njwRMJsrqX1J5G352gy3wN5j51RUzcUL814GfJyj83JPKaUZjFoikyRAP5GX5NK6mR9MqDofhbMv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xK6xk6qJJ86Gb8DgcHZ9TKft214Xtbu7zrUeiiJaffJbApY1EiX3wDM4nWZpM64FAegZLKJ9XbAgfgSSjeqskEf",
  "key1": "XsgaZUjMHWD8GiUaKcc1YHH7Chx63Ug6FPkjKmswyMzLJ1X5sD7mtt6d1b9Tcf9JcDoYTQ8wVrzruz1cw5w656c",
  "key2": "3bE2gQLnCuaAdrXLmzuR2tF7mAy9zMNbQujZq422JGswkvvQJSxprY5J8M32br31K2tosgJiTsXSthZyuG54GyDE",
  "key3": "2PKTbehJ3o2H6gCNteHyCn19jkFuFN9qcgmvzJBuWb5Z7PkpaH4ZzGDtJb8XwRFKPK9rG4V4RhSfqhGLv79NfGDx",
  "key4": "d2B6ru4bdvaBQ23adWpRkaDDk9c4u3L3KmRpr3VnxXMNdRx5c8xrvQnvMWheqshwLsXYEaZyi3kPBpKV82Vs4Dt",
  "key5": "4fLr8sHRXcUVUdpfLcZ4eDabbogfkU9YrfucqvURW5Wgc5gfdz6ofUdD31hscfcwMGJEaNRruGkF9Rwy4xvPQpb9",
  "key6": "5Uk2RbefYtoGeo9cbxtJmkDFaopGNXVUyubwzWnYWojejP5nLG2JjkpgaZ2j3hBw1zKVyK8xpw58r7UZZ845ydM3",
  "key7": "4y6tbwSEQRL4EZdX8jfdmtz1aMdpWrT8AKDpqMpN3QnNgWREem8VZP5J3ZjKkBdGMMCzdrsy6yxaXYjr64NYot9J",
  "key8": "4CWP9xWqdvK7TZcMbkNM5EE1gUUGHYPEuz8m8tKEY6rG2eL1dUt3Mod3nvWYUZFJD4W7Z3CXqKi5sDA17qy2xjRR",
  "key9": "4oyLWyRHNybQ5ZWSWux8bHxpnPP7eMih9ThZcJM7S7RpcGu7HwL9VqPoCvpxLX16K5FcmSDFwMGTksMrkHvek2PE",
  "key10": "5MHeMxWwczx9HmPcSjB3XB7EZMXNiWXPjSbD5SGorpCv2t6a68RJJgiDNbo1TghyNSWWrmANrZTyZnUtqbdc48yn",
  "key11": "398u7ZXaqQ8mzVeJiWwQ8qJcPTyBNqt95J8D2saLozxV634wFrJJjSivADoa7J1NYsV2hdENGQWSC6o9F2Xv2U44",
  "key12": "7fst52WFdDGveTQ4MukoXcjpNEV2WveXQbUrMV2hVHZKLGUDvfuEhikQL3YkoLwnERpuSPjkNCK5HP7ibvw1sc2",
  "key13": "4beK81eFutNZbSu2Z8BULnwzCkjPWgLVtn1CmiLeiDBJ9kvfEmbzrFFBhpT4FFQk8mi94bBqYxYoAqVgasbGBQkQ",
  "key14": "5g4qedDioV7VUoG4nLa1YD2ENk8UpbN71A9v6Ghp9wUvzTy17qsckMWJXwwKkoD32MAVmyDEoN2S6rwJvF3ma411",
  "key15": "5a64mAA6d2UYP3kUNJsFhV1DCEKnBiNtyucWAPrQmrSmqQ4YQcR1sRS6yomcvw25HDu1Pj69qwiMpRDhjxmPFtSx",
  "key16": "3LLUxKNMHPVP9qUu7futxgwEFbvQ3LHwB6dPtMRxsk5u72o91m7DQ9YvbMTz3rQcUmmeuyo4LF3CWwn7LsnWmSiv",
  "key17": "2u294cxrDZtwncyMJDSjoKBnCucUVzfriMHPqZrdGqEYVGzU56AsBWk6dJmA3mdpLH2WJdEJHxzywnbaKZMexarW",
  "key18": "5cyA9AoyURTtx7SkDfyRBvCYF5P9raem7nNE41hS6tB69GTPTRJuEhJZYaR2CgmNgU7TJMGceKbSgNWLDc4RUcuA",
  "key19": "5eeZMoiMsnvuJyQj4HvHN48QXW3WaXyZn7BX6hhsCgmF2EQ1TmU8iJcRebjXrfnty3ieupwHEPGARgRp1yw31Csv",
  "key20": "4oG6TRJWj5akkq22kK1ruXBG3mxXmRTZZBnR6Xx833X3KyKZrNSyrnZiTmB7RiNzn6keeUUwfbQ9u6w7wDUo9zV3",
  "key21": "3TvT4poZBBAaomSCmH3FB8DUYYWrEqYgzUtu4k9b5fxEoAUtgHWNRRQPh5eJR8dsiTNgpg3nMob18PH28XQAmKJT",
  "key22": "Z83UbbGY2swYzzP383EwjpVesVexEaknLhGjFyzZGTjzKM8f5XuWKZFaZWvnh1LuT8ft5WZhzUyia66RGrY8H4r",
  "key23": "55hkiHYEzQwHCp54aNoCb6xsd4ENG7VN5QLBh5VaiCZpwSJHpFpMUyrFByqGZgQuhuzUDu4VBCqWt36gAd2wioik",
  "key24": "41J6MERM3oeCNRDWo8AuydpS8uhX94DacCTmb6DfhyxUED9nDt3M4YWm4efedVrRpTFkeaVaocRs51SboKZWmP4z",
  "key25": "3uRCLYuFMGQ9bHoT3pEvtJb4AEacUGSiQnZtsPhXyNYsLd7msaeusMDmFpRuU99m2XTW7HfzBzuWW92ncFy8UKWf",
  "key26": "4aBB8QVNzyr6JuMZcRWaa8UiyrsQTBnaMe2vkkeptt3RFyYpoBtvUkia4boouEGYibogWJUWD1JkcSYHuLs4ho2S",
  "key27": "12idrPfWTpnQf9YsqneUHBN1TBsCf8QWNJ1Khaz6dH39kgboSjaD3dthEkeYiSwwNnAJB4DBm8wkiNi45gPay7U",
  "key28": "2RMBbNJ66cbhLyXgjPp6JWyYqAjiaUJ6ZXp3DhGGGXcVywb5CQ4a2KsCWBNDuMah1smgiv1aZg3abSaPbtRZY99R",
  "key29": "zYXPMy3Zc5QxhYn2kJTbhiaMcS2rk3a16B8QqWhYCxpiKF4MjfnRXw81vp82mGgWCdSZt2W6yu6mnMA6eFYnfB5",
  "key30": "2PWRbcJDy8t389ydrWDu1b73Z7N3EioMTDNRcXhgXPVHkGpogDE29Fs9mXE8RLWG8HQrSyTTn69JHeMMsPTbtB12",
  "key31": "53BKHwzgptkBm3KdMXiYCVfav9sftX36X5ZSv79d4LJBBrJGAuDL22cdfuPa6UWSyWPxrzJTEiGAMcZDsXSixtMS",
  "key32": "VZC9gtw4QjyTPEg7wrWBEcj81CLDGcEqCiLo2wtJDT7xLXxXRoD87mk4n5D1ujqiquwHESRRkovymqAW8kqyE8f",
  "key33": "3ZnJRsSpm2VYUYnDGprDWv3yfQe2hHua65s1YB1wbTHVo5qDxR6PWmLkasRFF5PFTM7PBn6jsqTyGY5rj1gynSkh"
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
