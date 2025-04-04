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
    "52rbED9i5n6nwLVSp3W3hhSne2V9fwKxGnLnXBxXZtjwWzf45KPXaHWnXBUj97eheXxGv1aqaUQD7TC2YWaVB1bB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XYPvmBzsVH93Xk18xxH6keZfr2aTLG4XR2WtBcjxn3HyoZz4C6s5GRA1K6hW945Pn1JiLdTa3hnR4P1fM8PpiH1",
  "key1": "4o6nDGAw33YzWdvTTB6jBCD5RitRL3Ae2SofAhJygNmeBJDnAnKoqw32ACzH4RhieDowwonEsbTJ2JZG8MvNLiXX",
  "key2": "3FF1u13a3cZvxrPsL2S2BeCgKd5HkRTfmNktE6rJztJ99GzAJuWM4PXhEDLwWoSJnFM3Q8yUXwqwLcydvxGeYYoD",
  "key3": "tHQfG7rpfyuXF1U9mu8NJ73xTBusFcYLh2e5z4saWGgZxdJhFv2J5mfjZNzVvEbcDH2VpiZEDAL6w7DaFn94pUm",
  "key4": "F18TUHRbnpyxPKRaR1rEaJFWSEqYX4wK7Apo3bWMJnQMXk5eoFsLWPS8H61i7gNGiAxaFLbqxQnHo7cHwLpeMZR",
  "key5": "2D4skdNUa4ZXjBie5dzaHFY9chG1C9QVe3WWwc1YpDkcmFWqei3eR4Ffdenf6zDVJzXG3oLAmzpwqhesFAzQAhaf",
  "key6": "3TUYLrtSWKcYemnA5ESUE42Yc29cgmPTrP2FxJVtDCouY1NffHx2WsriFPk82srrCgu4xAac4xWfDXVKi1nefqrV",
  "key7": "5dB7awUd25zcFNBfEhicd4SEbrmt8WrWhWYkTkSABv8JBraffWfTaP4aJqzxCWAJQ3HiPBYAM7EwuGwLjcC8cCXY",
  "key8": "4TACuiCGAtZDtELR68c2hp3BFiZBpzonYUDej5ihroDjn42DGqb9NEn5zCHnFbeYrwy1Npyn3JpxmyzEtTEGTSsV",
  "key9": "51TVSwbFVptWDUoNzcqkSC7fCQJhfeMZdk2RGrvejwKbUpxFtfr2wcRYrTypp75hJSFsiBLF7nF3Cy8HwrMWmJLG",
  "key10": "2aw5xDaQP1qiawZqbsD5MFgnKPpX31guspdJwodeWgH9MjWPFRVNhwrqzqErZtkEWHYym4WvnyiHW7WaMvbyvN9C",
  "key11": "4La6RXnQC9Run3dD4ePY6wEYrmWUBMzJyYNPVXEhBKaxp4fwuVcSRZmg5dDbS8a3ZwgessqMd9zf2FwAhGsocrrK",
  "key12": "3EP6v1bAu32AkE8KPuruqmdngVVi1w2NUzvQjVzRhFmGZiHC1TUykvLDagjuH7feqJraExeiuhHuCBSH6PCdva9Y",
  "key13": "2BKxn4wr8f5kaeg6BMtswgH7VdoBRnUc5NF324ZgZNRLJWXcS9sUfcKYWs7uyNT5RaqNeM7n3f1Cp1mGfRPZ6eqy",
  "key14": "5gEDssom6ReZBLCYEKaCNdBd7Z4WpoyvRYt1p3d8sqvU8Q8bekWPLqkCghQDxK4ZLmbrF6VaCUB45cZYP89vvLK5",
  "key15": "4TQiWkuqmGTuPaHRibHJRh1NrRCtwWCsXiGhtRJ3KYCCA1NwuiGNB6KeLUWip8Prt8Zydy1Djf5imLQcmhd5Btt7",
  "key16": "eFQWN18b9USvKaitG6qdDWieXxJMbBS3Mmm17P7VDPnNXf8Le1TVTNN5GTnXmffNgqYr9pfSmS2shDQBQrWWZEZ",
  "key17": "GatzhvVfGTcEJLMU8mw1AxxrKNuj8P3H1NNBFDNLx7APKn5FdyVGUCf6oDDHZzjHwThN3cQZoQPpPcP4Wjq4GbA",
  "key18": "43wqkDPzbZ64eWdUx4VXrNYAcxX8tK3WcdXUCwUuBv9aDpNkEm7wJjaknVDbiFx6hFNKB2xgLm5J7q37FEsMwm5w",
  "key19": "39f8in6sVVhiyqnEd4GWqJMZ193vctHmdU4FYZpTN1HthS5PV2QuRdchGgghGrq7tDLwZ8hnfU5ZJrPJuqPXojPp",
  "key20": "45JJJiiL6yCxN6ei9a5LYpR5JLLTj8Pg7A3PVow1BvR7XGr5m4ZGqxVQM8WFRGVFBYeasv44jVi7Uk1qagax7ns7",
  "key21": "2jmEZ1ayJ6vv9Lc1ZZMXvvR87b1HBJDzRPrUJ8gHNPTGYt9XGArKj51xx21Eqhw5Z6FawYaHB8y6rGNY6XbwMrfB",
  "key22": "VkstwbT5pE6L7hp2N9oxwwU36wHeeR6xJTCdFJ1UKPb3rHx5bsCsHJF3auN8UaA5iJaTXyoP22BDYxh9DhHseAr",
  "key23": "3Gbd2RUd8LWjcGN3jZTAptkZNsUa17bqnJeJKp38YE14oC7Zby1BwfP6LBcv8ZXw9UTYzdtuQwv9rtRJVh8NKNVA",
  "key24": "4iaRSCTDZVMxUhYnfjpSpQXizpeA3snAeKYMza1PJU9AssecUa3UBNc4EKrkyrGyNnWcVWZmHHmS9oTrmDggERWm",
  "key25": "5ghcsGUJchvYiz2k1YrBfKKo4K4a5eshSJFDi5m5ReSyNGTnWQRZKa9dmMPvULh2eJjsnZzaociSHJkog83BaAmj",
  "key26": "MQNFnF26VGg9TDTa4xtQUiYEs9TG4ei1hByyqJUnZ1xQucMga6kLYaDK1HczomRp9DCdtwwhtaMaBvXxwpCMag9",
  "key27": "5mEoFjU4vwjLFp3jzWfaCk6w8V24v6fg59uCceXxyV8nGhTLgeXhjWRgmjHHhw5eBqaZ8h7DXRaccMtgv7om2eL4",
  "key28": "K5F1u1hAQszMrSLrpmP6u5pAFApCTRRg8sCHBWnkYC2H5fwgnxAz8avYZk1hbsuWYQXaJeExyYeMDzndv4bLDZM",
  "key29": "5dLsE2wWNshvg2G5aarkNom9KW8nbiQyHhS4Nehf8rN8Cx4U8A88btRK6wmr6Xg8bSgg5MqoWgSCVCuzPqqDxvrC",
  "key30": "5yHbT4udjnefcTAZF561ZTYLZcv9kkxS7tpS5nxU2hKci8drSi2Rp27ejr1iDMjk6KNH1k5UeM1B4YkKRzCJrX2e",
  "key31": "qoCJAGRrzwtHubLxzoM24CVqcEkijBJ4GNNtatATWWTt7z5K4oWVMboGspYzpu64avNk5AiadpW5ub8YJQTu5ss"
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
