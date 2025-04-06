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
    "5s6kvVp5nCQ3eqqmCBpJTNGScdXRQJ9LxMzjh1eLCfK2xQoBS2bS47TsYT7bpi3J5GsAP6TsywoGpJZqE1c8rdbG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kHKE3kk7fPqYw46Y554hNLTyRZYbDBfM8HTB6DVL3rxkpNSFF127sddLU4PbtDhus3jEdHkS33vF1eLJo8Em4rf",
  "key1": "2WcAouGErvWoXAknqcwgjWz9biSuyxJMzCZsqxFfDyEKeofQ8v9ET2AQnqeCcsYXSWMLKyeVayFBF8v7XMqYhAtf",
  "key2": "5w9JwjdwxZpFvhF8KayAxEpnLh7YVsFrAH1Krv7aYGZt6ETVGN2wk69hQKs1n9zkFozNxV1CRMe7Npvft93fJCU7",
  "key3": "32AGihm3EWW52qHefSX5ZbeyKUHejRzSvLqPPDLBTZfGb84qmhmB2fU92WQX3G3YGqwX9DwYhPg9jY2YF3yVY9z8",
  "key4": "QaTtch5FWTYkFKpJtetiLX1eXHDTZnjwmkLUKFjVNcTMLjS8oZpsGRooLXvAttuEpB28YpJaLGLDryqWePCosa6",
  "key5": "5sPNWZdk55Fa7Vi8PxczYw5TLyymubpdzxoSEt6uiFdTMcH9f1vj1nFTcVyFEJy1dPNuD3UtqjjLoctgXjKymUrN",
  "key6": "3xquvaKPAnPRJoGSuTEk5qA1VS3UdypH3CMrE9pzu3YggGKMzvG4UXEtKQkacFsvgnyz74m5aG8u61GGXGZ55beU",
  "key7": "59iFiJtBpPvwVaAMYeRAbDWSFqsYhJyW7LrkuxCJieq9BhtjAo283AurmfenfqpMLJEgSDZMn9SMSUe4CN5z9bet",
  "key8": "3D8NejnHeYWKDUYYLs4iod6zMQwohXC2rTeCmiYjxbeuDuStWjvfgFCuo6cukLUMjJBzskv8d2EFxhBuzdo1n2c9",
  "key9": "5avsjsYxNhMkZBRRBdBa7THrExkxhxqHBCbrFZKyGceXump8p3rr5WDj2iPkYq74wr2ZpPPVZQpMqfX4dk3KbXsL",
  "key10": "cUdcThm4uS88UrN7eg6tsy9ib743t4EV95jG3ucsYAZG4DQpWsUNkccQoVMsPUJXLMxgSRGvTwf4t2oUiZnsCyz",
  "key11": "2ahJ14SQTsWgDUk6k8ZfsNxwzssVSfvmhrYCoB22MWxmmuXLKx9YDnQghgddLKwG7Ksbq3nxf9FNvHZMpg8BR1WM",
  "key12": "Reb33HW9E3G7PpPmAhmRhKGpgpiaF8TM6nS8hUZTns3U8pTpuYDjMdWWA4ksNzmfFRSdAXDadv7dx1Dshps3A5R",
  "key13": "5i1x8mUm6JcKrRDkhRzYX4NCEXWwZFPrHHCiiJGXCC5vbCzrKjeVMQVogKyKsxaTbXcU9foMP2YVeYMeNs6S34Tk",
  "key14": "GRx9pQBi85n4GVMEZEw7YAFbyqxp4FLumD8f79xwZajtw1UR1VZvmK8nKyaSgq7HETUjbQiBD13HJgn94BBVfX9",
  "key15": "29QoXGHkUR3CvE1rKswXgWtRv5VpEiysaF7iqARd2oNtvJMVVJTtCmj7EwU18dygXSaHtWUbaTkiBMxBez5NjwdL",
  "key16": "5n2XrvaCpti6rNdAYe3xhmhzp2hLLpdQhd5uff8qV4vkJEzxuzS53wJWqkBvJPpCQy5Q8nc9J48zeHNVNbzj1qUH",
  "key17": "o8eW1Lioo1WJLdR6cU3NdCFGXLc6Ybdwp3AW1ZyrytJbtVcy4DJL7PnmRkeZeiiEoujpWnM1bP2As56UUBJfZJB",
  "key18": "5mHSLmkfUejG3nfdWjRZv2waKGTvqvoCHS5L1x64PLpkiyATZrFUvVQxF3wLicAGcZy5UC7iGNBeEWJTCtsSi9b2",
  "key19": "2uc5H2XFMAyFpjBCjhcmQCeZup9cg9pSBh7qVkUhEEoJDss8y9si73wvFzk4pQyzYRqdCTjSbtVxemh3vP2NYVsf",
  "key20": "3PQwVXwYsCjjcupb4TEH3uV1GXsXdVkiX84coy3rY4AmnNPcLteghcR2aosQn6V6TSryX2B2FTrGjGEVtsLYoneV",
  "key21": "4BGRsn4utsjgtWvsXyG83h3j9KRPynLbrHFDnpCe4QhFhihhftUUNCQ5TewFvydLFP9BmiQuUTgxT3gWkR4pSs7G",
  "key22": "4qKdrmWmfTQTEjY3vjNthPk83wE592VquL2Fs6d2vYW8AdMerFVtr8aArwVEGdir8wuTqUjZBP6u2Zr7eg6GQ7qV",
  "key23": "3ykntkybV27zMZZevKWpiLqo2dqJEPWhwpeinNeXJyuEncppePzaGSzAWRRCqepadxRSMhKiZQvxdR7r42rLSyYJ",
  "key24": "3QqXfXmLuWnwwXZ8ziiojU9ETnzGt7hEpBHAxEyL5zMjfZK6keVMuhLojdsE4ZeW9oXLhiyit9NKP6aBWpPTiaaM",
  "key25": "AHjEdu5YN2EofhPTHjbGJdf76WKVtkZcZwWV7f7xy9BZDpuKydwUzQ8diPbT31hwM3kjcnKRcHUVdDVvEFTbnq6",
  "key26": "2tJRkXoRSLRfvnpGvVxE3zY1SnmZuH5KZg7kmkMwGZL6prch7KizcHt1dyNgKmf3XPfabRm4BZeKMBdAhDsrLfAY",
  "key27": "fQUBEaLoLn2HdeCrAokF75rWPQUCnVaUy1jFhboLLWHramjGYhcTd8rLZYT7yjtU3qo8TmbbFYrjocRCxqqSVLP",
  "key28": "5XZsj7fLaML2PVEDEfVZMqFZihL7r7ChuVuhCAvoR33FDHY5U9SdPea6RmYebJpWgEC98R2E6M4iiJAURtqwj3Gp",
  "key29": "2RLb5wNbbKSnyefoxmqgGbxdzBeTKu1L3hfiAVrB2cibeGrVKFQXhyKX1u1pZnGmxSYbu8NaZWBKf2WskNRVAiu8",
  "key30": "3fxBMCqFb7QhDJEYiRBYbgXaqBA99xvjwHee3SQq2Ftf7cT14Rh7ysTSB3gfNhGacAC6fvEkigRnffrukLTTrxT7",
  "key31": "5LMhuiNeWpTonAA35VUoV92xMPZjKhyPniCVBTkM8wGQe13Kx9PezyCdpskq3yzb6FxFe1sv9iyv8PoEjEa4tpmK",
  "key32": "2xkXdjuCdbpDSgewUkXBk8c7QFU2UMjFLN3eWdMMoUYCWD1SwkAmuwkiSVLipKL9ZTVMEQrne1XRiKxgwzn36kus",
  "key33": "2GjZPs23BNRDmXhiX5sEsDcQUb9KVN5sKe3b9bf5HyuyuSPCVPEpsmt83APXf4HJbwL75qTVz53yDLKnC476CLnP",
  "key34": "3EQNahFHSfr6P3PZasLLr1mxpMiuCtW5o58cqGCCNmZaM9muLmKUzKw4pJJYLJNzkdZ52xJ8KfQrgkCGiFBMZMr5",
  "key35": "3osXP1xCGMaqcdikTS5fVaPUBTjB9rkc2K8kW9CcPcNRb2byjS9WnZfDE7xBcyWgn7aGTyop9hVDw1Tv1y3gTGos",
  "key36": "4NBabiyn1eGgWGemWsmJUSqDYvRokMZ79vL7sUpGf5pf3xQwoU2F5gxKmn8ktWq9verSzwEC2YNRZjnU51x4nKW5",
  "key37": "51o6wpcRd2iLsbijWRieLdstXm7862tYvw2qDtg1hgiq1jkGXbmFjV2NXTo5njNMSt2AQi2tf2i7sZ96cDoGTqrv",
  "key38": "5DJdS5PjoyYNxU4uEij3TcrxnajHjVkxE83w7uJFJkc9rLNjshgQ2kVyyGyA3G4So66ncVfSjvMwb8QjEiTy1tQV"
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
