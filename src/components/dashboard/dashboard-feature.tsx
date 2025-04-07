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
    "3FRMdRVAq9HzUXuNxvoHBHByoFvyepMx81tRmQUgQGPXh7Tt5FVNr6GdgPZkDAH9m4ZG3tSFF2KNYewVQvMCLFPU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "341R4o6uukjBbTqG4CxCxYPcSgPN9eHmiTjgZX643Wy5UvvPDz2bobfCnm7CKBipQ7xM8g92QQrftmAAJoZtRpdC",
  "key1": "2DQZBkNmQvMjZvpjrPXaAJAw8DkEcc9Xw2LU5113KC7t2BoTdz7yrEdSmq6tWpxzB2Nm59pebjPMoug6ggSSWKp8",
  "key2": "5ysRjYtNXJ3sWmTiNWBMatdawEjPC47ZdqRoo7xZ5i585Q2BU2A2dJMu99sPhgTWMgizxhTuGVdDhY5tGBLvJz9W",
  "key3": "gTumcBDLgWtTRiF5BgcFRgEDWFttVEtz75aNDjfJmzpM3yHxZSqMgEGgeHiWpVypD5BxSwitANqdMG6v3KfW3o3",
  "key4": "3HcbBDEBDXY93tojBJ6WUdtrwRKKtr93Et4TLMzNkeioCFXUXtznVwYfuwdfyPw8Axav47HMSTvqhYZiREqttfL7",
  "key5": "5fXQM5jkXQKQfvwbycAMN5eyYcmHrQ3ERx455VcmcEHGpH97WXEy5xgxEsXwiTDTMFgZSaFddF1x1qECVtfQR8Gf",
  "key6": "4WvKosbZfa7PUa3WdJ4qZHHw4GwTvB2iewnhwh6MNF9AtGT115r8TeyoE44eYMPyyLJcthZshCnr71aM2uiCVCGG",
  "key7": "2fznoFMnMkBkKcXgGXvaBZit2rsACDJQdVPq39NBrE9zBHNRefq7UuapNpy193bujp95Q9No2bgfHxh86JpTeyss",
  "key8": "4ezfc25SHyStWhLXZ8FV6APUaR1Tmb3qwm996p4oPFLXVfVuAjjDqdafcvU8sVF8QfxASNqDqSNov6kV7eMMYRiE",
  "key9": "4g4Fvsz5C96LhrCttNsjtpTqSpZKtaFgFQ6tpWvTEaA2X6Bb8PgPPE5kgbjH7iQBYSavLwLJtg2GGiJ8KeWWW9pE",
  "key10": "5ciiLWYBE9QbS4QTv5eMi5dsSGeMYvafS8Z7HTiH61kBbDCYPeiauR8361EAMXkdApWAETPUNHWyrxhpNLuVcqnp",
  "key11": "37PfgWaU3eFpEDqJuDHRS13CLTFTtEH5UMuRkg2ff7KXkqEkBEfKgdtq7oMA3kmBB1sk1FGhpkcRX9VwGfXBHb9s",
  "key12": "47VBVS3t615JpxKwp1mHJfx6XwZ9NbeeodGNYtYiXuxobkxTJ5kecf52JL3gmLRkZsuZKkXo25ktbv1UA3bbJUbN",
  "key13": "4TvRRPyjd1FG3M5KAd3FWRiXXFXFKfzY4g3r45c25eok5Ufabkh4uMAa5Li9ZY1mcY14q9WDfo4wskXP2YGc2exv",
  "key14": "5qyDHMSfTsEDWDVUvidkotp4uRbsUifD6UWX8zabfczjRBw4sgNJQsLjsTMBVh8LzatR9cYCrLMpNqwPJfpPvHvJ",
  "key15": "4cak8XQj2jDbLPHF4mZWzs1aqX5fzPwUR8ird1i98RyzhnfqJs31CS6hPhZeYHL9aUgqENW41EATSUZH2oDSEBJo",
  "key16": "4E26MutFdz8q7HtbZXM6wY9qR7dtcUJHc6rickTVASW1DaLV9QYeZYKBg1iSHP5k9PzThbofZedUNAm27APXbzca",
  "key17": "1a8UsQtR1uJFe8vZ2ef4CDb4kUnRz9bJhBTmaeSVr1bzAGDCrmHxU1cTHEkdV7hRYsw932AW44WfYvXt9jToUoz",
  "key18": "WwY88azUaLL39pAD89byv2fbxk4fH23uk8NNEqt5NMRjzoDWhVJfY1PKePmkxS4G3aeHsT4JffqbYcDUr794t74",
  "key19": "3TSrqN4VyCmFHGdWcE3PK4Jy9odH2cKtWP1ZQ6FVuFjHZh3VPzJXs8AGsQU2f4tWQacqYegJi1MecNdQhXrceRoe",
  "key20": "VRXLXetskGGBUacA3hNLVoDrWTUd8H2DPtnAgQd5ju9HDrNnG2bFSZcfAVUwQLotKCAvF5GVKW9mTqB9Y9b78Fc",
  "key21": "34AEaFLaDsYwoL1yHBtL1cVATdKzLQ5Fx6tH9YWnd9ZerVZECHJVEcVx9Nmvd3t37EmoTMy3cskV2Lp5x9oSr2ge",
  "key22": "2uSYhmcX86kBhAdbyYqK94nS5tBmsJVYs4L5C8STiTGMwpCnzPNkA1kk6EKM7jWw6mVTXRAPScxp5HpEJpS9rGXF",
  "key23": "3Tyy1UfCzTepdAWVBeAaQ2wanGhjoaLw59dnGS2qgYh69L1Mnw9pYPmgMWPVQ3LPTmdFXwHPNiXXXK2bNyUFp2C3",
  "key24": "4k9uEuUm2wF2cDJTTBc2tuf5kcymBdJmTJ3ibZAUKMxnAq96vMmwAAm2LS8UEJBQhtSgoB1fYRrfiRtzNjf5ssfC",
  "key25": "2iF2XKm4Gp7qnYVnFnVLwVxY1Unpbzkbe7AZdc5kLKA8kAy9fnrjGvRhs8pt6Ff6noWR73hB65Nm1HXtfTfymPY5",
  "key26": "54jzfdei8cm2PkthtMX5GAi8e4FqgXk5ptAmYBBgsWrpN2ZQbtgDvo8w3j3a42vVagXpygYyCenLtBGia3Tb2mCp",
  "key27": "5BF1xaXBBh3fGhaqaVU6HhvWNM8aCCUL2BPtqtPshuNgvs6wtfnC8fvj7MVcrmyZw7BiLubJSHEWrREiQMn3zL24",
  "key28": "TqDPdztdsrZ8MkzbjZCmg4Kqvv3gxnAH8jKYRghTTbimECjWbDWzr5WoUhVz1onn8YRtKkW5bjLoydi2ixiqgtd",
  "key29": "HBi8JjEDrr5boACdGaAEHkdvT1TF3LC8eVx4vmZDUwbnwKx9Pfz9bWvbNtvQSTXgjHKSVizUoJM2oSefXNHABYL",
  "key30": "4ZTBAQZ5yfAELB9bokLkDunrfbMEThAEv3fHv78C7ugNP5x3G7uoV5NWASauFY6vLJkkshNu7FQ7Dj7xafT3Muie",
  "key31": "2BPFwqaUZZoZ3bXsgE1pvhNgJTsx8K9tEeq5Hvr8LAMJ3f37ctPtXcyLou4w5BxjwWSpSg9VETrXAcVjyqzvBg2H"
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
