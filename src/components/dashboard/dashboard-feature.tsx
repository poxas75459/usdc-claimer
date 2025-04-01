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
    "4DpxRCn66fUAWbVeuYxL414iRiuqNVwZjMH4xZpknSaeJLJT1YkFNRgLu6zbp14wG5ggxkwre7WRLUHHtCibrY2z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LmngvsUspwzQjtsTp49WpDsnZrEoxzfiL1zMPhyQjcTQeCKqpQFW3gvnMfmSmpoWZwvFMXrxmyqcsn6qDNSPwFR",
  "key1": "2s3QAaSi829S3TCQz6Pqx1BF39sF2qkCTpAMuiGvSPNXhPEtxVyyfS954JXwKo3y9idLZAUFSmyEbxTNE7fMPvcp",
  "key2": "3uxPbJUHoYGvWjyNA265bu4CPf3cz56uzxJnZNgdCaSbUgCnRHr1iEZzbxAzRHN81jVmAMMALUeXKaxd3oPPffmt",
  "key3": "3EhF8XP1rfNGboV2oA49Dr1bQ5EQiuHDHDEGidkSocTvVpZuz5bPehbkUsrizwVyk6p6EEykDDYWMbUv2faBM15B",
  "key4": "6SBSYPsBjviRW1njWasbLToZ4wxQvi5F27UL2exvdJDfMnWQL3o8ZhEPQQ1f1PwHm6srHE88DrEvEwJR9opUKj3",
  "key5": "4UPkbqBt1WNtgoJgm8z5U2eLBkk1H7UExbrU2ZU5M3sm9MhVpUmoWnfC7qXpHa14FVHvUTBM4BFUx4h1wXJKFM3W",
  "key6": "5xKKRVcSaQzmgASspMQ2GqjyJWh9GTdse4CDNnUxXZCmyvWGc9RDSJ54RKQmcvQPGEVtoNfWiYKQErqHGKmKc86M",
  "key7": "pFFHFVMEgCVLxAhgG69wEPnLQkcfZk32C35vSBjyKW7F1CDF1AdKAuCJmMXHofVx9V1oWmMGNiCNgfKi4d3xAHZ",
  "key8": "mc3JHNwY1PqaSt19vJUs4Upm8ZV4RLPXeWfbzhms1ipaeyezAYbgfbqbVT7z2YPcE7GEsCe6gnxfF3GcSJ5FFwd",
  "key9": "51iQy5Cxra5Jwo7soW83zuAnL6A3F47ZiiCiqe4c3dtvf9LSLszmvzTWjNiuHgXAoFf5hEnxSanYZ3PmGsPnuw5h",
  "key10": "2wEoR2EAwUBL6mMUKCgrenV9Wvvf42DiRbC6BzTeYNPuaHt6uNe8h7yuDAJWZ3FPWm6AbL7WQYu1prGFZfpW5rnc",
  "key11": "311d8Txx9ttYyMdUKaAhxFgryTpjFofKvPttJ1CKZg6nSd32h118ofnd7PNsNVz31qKsMFeT39AzgxDwEELjLEKM",
  "key12": "5iuLnNnGxupYGEDuDQre8ggikKTyGVEwPFUASywgdm3Bu1XCowB5Diccgy8U19Aq8cNdF2PoiaGtZdQ31eE3aKFp",
  "key13": "3uXJtfQrmRS12kTaKzgYjEL2gLASBRLAXTLVnPgfkBKYejgwVSfTfDqu8zHU4DWY1eeW3bUsJ4CzPcA1eP9pW25h",
  "key14": "NiBNnS4teQ3knuo1vHZvWVVGeS6K3tBFsF48EPAcam1n1dRzCDnEBsmjjUSNADHEa5RRJAoG74fcKDp291vu4MA",
  "key15": "3tFX3HaDWmQwDC2vo9kCapGXTY17yknayWRTuwbqW19Dh8rzWyuaYTXm5t8xM4TfVrmKMtQYHMvKykWbQS312Z8v",
  "key16": "56DYr4Z4zmWoexvq1q8WsRKJvbRVemaaeHSPgntB785wS8ZtpnqAMkZUnxJSTq2B68HohxHgNfbb6Tusq4Wjopho",
  "key17": "4EFy2ei6XMBej7JtfZShjtTD1ecGPzm7QRCxBzjC4nVpt3P9cmFX5PuAc8McULe3YHDLtyWyin6Ro9kdo25Q7RJ",
  "key18": "5tZoHfuZXKhxuY7bhRKfUdZQtnJUeKthB8VwXBEJp7hsmf7kis1NxkxX6wXt9jkqoUMzj7JVH9oWq8CfQdbzzMub",
  "key19": "3AyJbL4LELjs2eHZDKr7DhrPautdjWgKBDGNZs1PSdy9Qs7QwMJb6GMiuZvRFR94e8qk7JnvYLUSJAMESXMWSi4e",
  "key20": "4L1MnfmHBVQj4YfYTwq62gyrUycRmF5vrbENUfCt2P355fNxAKZSd7fyhwj9vXkm2HtyrBq83LqtcMordy7YLW1L",
  "key21": "4HUnNCohwNUMY3fvnL1PZng3TPSxkag4Dfj3NQHXG2peBoi7kTyXsV9rYihqsHUFBcWN5UVrB1mx5vNk1Tqmq5Hr",
  "key22": "3E3duGzrH1UHMz7LqTKiDzT53Fq4LzxUGZenfwUaw8RPWVCxPYD1Z6D7u55T3R26E98eZ4mZLZrspccxGfXDaBGZ",
  "key23": "23gnNyyAWGMsTvAjdqtz1pw6v94MMpSKpEDVAWw2vXtRnw44jwb5tug6ZN6LJtwJKnuFzjmS6HKv75wrhA9t46uB",
  "key24": "61GpART9N29gGaZCSs89jE9bNiKX5DYnNuS5saJqYdBeMqRkfkcAGD77jRgWKPFp3xv5xBWiC77KhDQnxdcDu7vV",
  "key25": "3Np5ccMXobnHPzw49oUoNHvmGCgTnSZQ2o1As2RJMG5CbUkd42jc5R3SVu93YruDmTBqc5PoCrUB1DbstFcMpn4W",
  "key26": "3bBFHZE9zfdna8GHukkE8A9yMmEkoZBeje3utjgcGPFp7CtVtd4vrAUNjo6yZ4mMjQLfxi5djGpU8WieV5RPF5Mi",
  "key27": "4gTj3Kzk3dc2BLeVnbr1717DiAGEB3VH7piaD32qsemnxZ9pqHAgGbep2QayYoj6WN323aS8fb2Qbm8mypejQ2sB"
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
