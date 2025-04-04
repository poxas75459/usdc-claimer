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
    "2nYVcdHCZkH8qkzxAJAvecsShweq6S7MVpt5xXxPS6oBMm8cz2ztrpWf56iJjEDbY2FG46L6Rgs6WjMGAPUdzEq8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vMPht3CZodXEqkLvDemRw46f2siGiaNYJic5sNENawCmFR4rAZxPUogazYxeEpeBxtnTnsV2bp9YrM3MRHMqwvN",
  "key1": "4S37pNywuzjPQMXzgazwCf3cY5vCAqqU36NfSndNaSW6RaYyJfy3ANZDhxsJv7cpZeAc2ucByjzyHfUokSYNL6rw",
  "key2": "3FDswmgdcGKNL5q9opiBkTidMooTe2dR5wZDyEbbPMLSUJ4UHzpVnpBA1HwNMqZ8usH6AmSvAbvg4AXJV5nXJZwP",
  "key3": "5VZzRbhCMovm3XtvA1ASkPUC8F9tyx5sK8h92RamZJUnwvmVHGnyfPwVMnHjaAxJzfJN85tpPNX5SB9FVPxyB6Qb",
  "key4": "r9crYSjg5hsnGa93dq1c8Mt3E2ov4ETYxfdToQ97gk9LC42sVhCQqZwYYfFbzhxCgfXGrXDGxWu4B117Pz5pjJZ",
  "key5": "F475YHhQjg5MmUDgYxi4Q2F26qCp32ajUUkVavg68g4H6uXwzaCT5du88D2jZ6zHuSLGdGLsKjvVeEHu4vXjkAn",
  "key6": "61Yttta3kETiicxXckmhkwCcHW8BYLc6ZyqPuNCz5PV2YTy6Ph82g8iJqM3UTcAEVvQ6BoGsrY1kkbg5K17VLCRG",
  "key7": "64gRuw4ThLjGogQRJA4koWvS84x13U9UG3JGEVJTJcmq8cCssQyo6w11QLSDAwu7iU9c9VM3bpTAwo6Cf7cHsWWj",
  "key8": "5XjZywU5wsfpkRNRHTPriNuUZBei6iKQz5bMtXTuAXqX76ueqTCQVhwEBrjfVet3me5HGyUeXHnytTNwN1hSP75x",
  "key9": "xripoW42VXSTRDnbfP1uZPstV96dbq4Vzaxdp6kJ4AEBJeNc4aXtiTiDz2LPENkU9BeiwxruSPvww7587uP5exg",
  "key10": "3TzBfJoZAk8FfxFmZWb3uduWL6vSe3PMEMDEqWgPZkp6AUgweJ7Q7kSSpTaBRnmERzFxZxRuhy6UySdUbJizokFW",
  "key11": "4LMMZ7qx4fnq1Ywk3LZrxJik7UQPLqSgi8NJ9FgY4zGSyMxo45e2DkZvDJSiYYHHR6jLscbjQrFsgu5jt4EhYtfv",
  "key12": "2E99QNGpbU8vzfByjPayiM7uqf95LM8oCVqt6yWdJK6kGb9FE8XHDbH9k2amrjbvB423HLFwdUogviUtMW9hLqWD",
  "key13": "4sPAd2JhEdrKhxFMkJJ69N7NrxqYujDtbms7T2YrqpPDZ5vSYmKoN2SZrgsJS7jJeEFj815oEdjRJ8kR324ZTjqN",
  "key14": "7kKDSNKhgv2Skz2e2nZdquoFoEGGWXgrTPRa13SKQdoNSumszAcAm2CqaovoWmWWGjLjF2eX6pEKw7ffpPupkkS",
  "key15": "3S8WyZ1ByTam3cPryNheJR6spk7Hm2nAiVR1fey5GTDrGfAKU2gGPZpVRAVgdMhznRqyefmyKu8nkvJ64RpaMmbS",
  "key16": "aZdyqrBvHGvN5gADy5T9dQneYbP7gJH65erCU3jB6hwo9vopWWm1PrJsw3Yqsq7nAe5sjds6Q5UU8WpHVGS7MJM",
  "key17": "LNieCKKMV32V2y2Yd4jiW3JFRqE1dF2L9WjSkLQLu3ueEc1Svbseu8JeKQTMGJUGKdJWExV1eJ4CyzuTpS4yfhh",
  "key18": "p1xWkm4LmqP1hU9XrACYgvj27f744NPx4rzGpo5Q59mb2XLNWUZqAdv7MZnnr6schRZEdcFuRkFj92PL2KSz2rP",
  "key19": "3Vp8SpQfZY4MhzAWiWEF2BwaQLxKGX7hFkzbXoF3qwzRScUR4HzYmDbdK7z5BZnvERTfX4AAcGfn5wzCVtPnhyn5",
  "key20": "5PQS4bPy9B3yWHXky8wZC9dyQEqJuKxmdeHyZcMf1DwiZ8f3TVGxUTR97AxcugVpXUVYaxrTecgcGj12Wp3XhEri",
  "key21": "tseYSsLfeVJX4x41pHBo7jz5GhBXzUgsUMH5LDtuHufCLtHfeUtn76yATtuavBKkXQVHB3bH47YyYZsmTmdW44K",
  "key22": "4mVDQaRh7QTmswDtJjcb3HTSjnUmRMro4bfJrsWLKeaiHcBCs1XWtGkvVj6AMGNYLBiJyYwwmB3fvx9Q5xu6eQKR",
  "key23": "27dPG4U7D7ijzpNzRAuarCoakbd919gi1ff1aibjxAe3xSdJL88SdXBAdRR59bZnPTbZ9Q5GYtoyX6waxrWhFFuE",
  "key24": "4KZmhJAA7nRSWAJGt1WCP4TKBFKf8ZaNEWfxFKS36DPsRDXELzBD2hYAvponrv28iqXHVn88ADT7DnrrEJorgNwZ",
  "key25": "5qPVXGyedfid87X4KTfz6BoKiEZ4PvNDcvmnkxqeBLtGbfZRS7hNXQ4nbmj5jX2ydSekqipc913C8uKBWDqK5DjW",
  "key26": "3Vnd6FU5BENNhdt91bGAGEbiefM3vRYoxtbV8ZeuyWcqUnf2cZrQcygEuW3NwLCkwLrhvFQ4E1ETp2S3XvGbLEXB",
  "key27": "22UGY69pdVtNRezXw2iYTinU31JUWA7cR1pYY5Fx57aPE4o6SzTvaN4VV3khRhpcneD3MwAwAbkWn4a2g9ggCt6H",
  "key28": "2JWMEip4GFogF3tCmFBJ8KKtMSTxYNoaB2FjTPD69h4oRsMCLW2QNGbsU8zFqQrqAhPht629nLi2tLJ1wUfaaEQa",
  "key29": "2u6zRHBb4gTPovyaAmzVzmBF6waKns5EFjpSZDyFREXcFFey1Z7Xp9ohrK72PXedyTDzaRHGQMJUKjG4BkqK5C59",
  "key30": "38LhDd7rbo7MUbAeMPRcH6u7wjPsp6yyuTr4YPbzSNud647yZUwfFYQcjRzvZwvw96KcwyXzU8RLAoFrTYsLH4nv",
  "key31": "3ceMCt23v1XA3sbnw664ePSQTwt3yi8dieUvby3b4oPP1XmyGtjWrbNs8czc5KH5jekE77jkG3Cv9RLLMDbzXKD2"
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
