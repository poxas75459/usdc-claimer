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
    "FpYm5y29M4wWKAbrJaHDixVXVvEFusj5bjZYgDeEgVw6ue34NZ1kMp79XzgXrmJJdCCYiXgt6Xk5EngKK7ekZ1f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZSd5TA8paGfgX8njLJKNhAC9pmfySZPHFU73ZFSqjA7ZmWvSxTov97xy6RsnPkYrP283xcwywTbemS6FZMYNLPB",
  "key1": "5KaQ81kvobMRgkzc68L5c6BMaf2toVEHYzMCBoLaX8mHEnDZhMQgnEN8Gz366x9LVsYVxMod82wgkVS6SLGcNBqg",
  "key2": "FyuGAbyuu4VCT3LSicHdGU5fxZuAyRitPxH3JboWAPUvjuwiLRgifesjyQZnN9bvUjSt7Dfo1gXRdqrvQbhNmZz",
  "key3": "4ZcwdizfGAMa3DLKw4KqaphjKmEesAPCgMfXZhxcMtWEknMp1Kt8D2Kxsr6DvaAaNW9dnnnptt6RzX8kkDXerZPB",
  "key4": "2bna5gnkhwbyiGAsPAupWQb5qA7YVopMNNqZ5pUKK7ygiZdm2tMFfjsVKMFTmgHiGVgNyw4rLjLrgh3V1GdQpXvB",
  "key5": "5ydohmdUiwCqms36dDC77oSM9PhSsfMnyjrZACTMs4fBWvGnMpM39Pxg1RuV8PJj6f1tjEzVnkzPupccgyx6sTAt",
  "key6": "4j4u7LLKP9NZBn5hbThsZimMxpqpRNeXnmgM6udtidDhUVNmnC6ARozzXuJUzyYKecpdLRUNugR1DFEtjfKmXoAw",
  "key7": "4RBM1sW5gncWVpm4n2XPgw8YV7g2dRSGdPcYdqjAYNJJdsBmUM35se2gSeryzHGfw2k5HBkZM3nSwB8jtjdbXep8",
  "key8": "cRWmG4B6XTfgdzwKaXCQ8tk1uqxP3v9GzAtprDZh5uc32p7qBVMAhTCAsd6DXbTYNyrrkCf7LwVNvZp9rYuYGrA",
  "key9": "4gK5KBVtpUCegWc8YUXPfaHxzaw3JYLYtofQCNXBZeWJF2c44AagSWu6gYeQ9Mkcsa16crrowgbMqNtDhQwdcukN",
  "key10": "4JywrT1Twt76uBgTbPB5pGwuAyBgJ9savf7Kw7jdPK5LAcYYBjc2hwj42aPChwvn2qDZDUm4ymHrb1S9fepHBFf5",
  "key11": "4YsdNm4kFe1ZB47U6Ng9QdBbStkBFMNst8Ts3PxqsjNxGMn5GjSWMyksEWKpc97uQYq2K32Bes6FRqs11bws8jre",
  "key12": "2TpyN58s5T9Jhsuv375SxtoBETbGsJAwJJBicFEMz5L1x61e69CSSnvK4bvFDJMHZu6arh2hLynbKwXRb2gfG5Ay",
  "key13": "4Hc9fmnuZhYgX7RDaZ5Qzt6Neyi8hvPsBdfDEU8W6xeShnMJYxt21TRY6Q1VLhmLAbA5h7J1WXknXj1ZKi4yToxG",
  "key14": "cT8WdsQGiEoCxbdesuTNzMsGiiqGotCTavP182KLp8srr3MPkJEDMXJHZ2WgPgzCbHoMXPNZVYxZR5fKRV1HNYc",
  "key15": "5CvASJf5Kpgb5rt1rAyqTPCvcfPkLpyRDdv9gYQMwgc4sSxPhbKXMERSmJnJR5Y7caeT3mTjB9WkmurvLeHa3tsb",
  "key16": "4FfGGSJSWqm7o9hcrKFCn1hpzsiNFCT4Hs3SPMt7NWSFft5K4s3YCM4MtiNop4aaqsPMCWbWAN88yxniCrwteR6C",
  "key17": "42jA26Va9ctHVQUuaRMgv4J4Eg5zDsdpjmtDGxRrkt3TAZfDN2tt52uXidY19a7ExZTyP1PWFmtwiu76s8bZfApX",
  "key18": "67R8XTmDwZJK5YNYDdmh4zkktr4D1cUBqzePZFBJX5qVetmTjE3V8JT5Ke97Sw2tFKH3T7NEdw8h3zSAUzGX3sPP",
  "key19": "3EpRJohYJcKxWbQ9WvGCk6fRVPPHzqA4p7tAUbThZB2r2BC8UtRbE7ybNruMxWAro3FuLgKwNkdhfkzrbFGDLooe",
  "key20": "2FzyiiXQhMmPHoTwd9PAAPE4pqWBHwkq1TYsfrYEz98gGKZic9jhGkL1VUiWJtjtrjjnsYeuuJeYtmwXJhmJyHpm",
  "key21": "28eS2HH5Bn6ERXZNFFmXMRoJxAtVUvFKHdzPUrDsBzSjsqQH5LDtTgicGXz2F5rFEKFrXv8NaRRQFRWKt2iTPF52",
  "key22": "oGCxKh6W7HUw6Cok4g2yr3s3bhBYHPjWHx53yVALQL7r7BUZonXiCi7kmgHfHhMg6LgFdUoNykP3Bm6iRZ2fDEC",
  "key23": "2vrHcDconkzfnHyeSqkYvQHfcaUgZSN8nQcpoentcxEsCay5vcKKd3ePBG4K1mfafJrTnjENLBwA1UtmSj3bsyqw",
  "key24": "5TrwMsqtRzj6PB637CoeqhjWEvra9MYXxDmzBw9tiirmziNzgnzTX22Jgyh7uHmdXyejwCRdQf7t9pgGaqqtGrro",
  "key25": "SN3VTCo1yuocJDheDn7EiJG8mk4B5AMqBEmSwHiHWZPfxuHe9tY1EjpQBbMvU3VSkcUf7ZgqoevYj58d4ECeyph",
  "key26": "2GQkiDBh2LPw5NMwbUtSRz7rKR3bqoLfZjVGNSghYNnRbzrpGLJKv7YeSgHEbPXRBTTVSoHNpyUwusRHZe6tGpyo"
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
