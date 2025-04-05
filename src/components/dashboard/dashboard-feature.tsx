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
    "4oWoC6tgsUDDWCkQL1P41WsAJo8vNdv2Tj4LyMqksY5EEiRsb1kK8ZpLH8GYknSiKmRjBD6BVEQhc8LeDAFfiFUK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zGXfcURRjt67CTiZwT9Q7yGoXF21zeX9V5wS5g4M6skFgoi7pfsbAFgXP5rNciKCCmR6ky2Z29ksC2Ae12YXCNK",
  "key1": "2yDTWyzKWwAyVQTHjPAe49RMwF34i7B5QzBHPAMDw6BZceqmzLWujkqVM8im21Xj6vXpeXZzXz6N8LvHtwU5kupx",
  "key2": "4bG1UD6Jaojsm3WWb85Xfqxn5hFFqw2iKxqDdiChYaoL6fnECbMXYZnyfBvY2QzwCsAT93GGSBZhoxjMkrHKmaT",
  "key3": "4Ntcpbq9NUP8MK4TWeW5eUWKz3TwkKkr4jZ54xFNMDh568AqKjBuYaJEEsG81QN8afVdKQy42G3MvDuZ3ARKhhZW",
  "key4": "9ky2FR4Ht6S29taec7Wi2nwaHVTSU81JXx9wuUDMbhZjATEDXzzyQ74P3vEUPmdb2pPeASmxwzpEHux6JBYwjBh",
  "key5": "5u94n9cepUgJF3eAY6qdVXGP5EhudTiZb3Bf5zMVzSmKC5knK3QPyfx8pdqTuT3jS9qFEr7ZnTP3cigN7RDBgfj7",
  "key6": "5GU5atp3ALDuyCwpYL8Ds8dgmPsk9WJzyFFpK7UhsfCduw5Mh6kzob7WScdqPPyhekUQ164T79FHDdBUApbXVmkW",
  "key7": "35yLvc5DUbiAYYd3feYXRFBHjLA19kBxSZXwJTFbAqL8ZhgykTzrRd3hbEenVC1VgkpzsWk7ZrYXKXEKqDEFyjdq",
  "key8": "3R3iNZMLJxV48yRnToo2Z76RziPbyCm4SpNBzzK6wBNRc8hWwPquPhXeceHQ2jJEumLLzDqqmcMqAmL2J3siLF1M",
  "key9": "4zMXpRkRpmDbgwMnhbrDnJEqxv8usycFbKpPHLimbsQ36JHkpEZWEwaRe5f12uKrdVSHjgsBGXMScyBEbmURTMPn",
  "key10": "pb3uDyHL3uSL58Wx4yGfE76bzoZhiEThSXWN8xsDJvUGoKBzTxUz5CoPEq8DsGLi9c9fTL7B8DDcNC64NrAzDtM",
  "key11": "62f67JQ4ERF4bviNPAJYfkUZzEbhuATzPzdMLrxyW5pCB5bUfKUPgRyyNNoiqBp2BmZqkevtSbWyC9CK3qA84FBg",
  "key12": "VPZRjqxTCPJJRsokUgkeEMrLbXcTLUTcJHtFz5wDVkXRvqPf8Sw5Vh7uPn4BGpBYp5E5ECfPu24rPz3hncJZpMc",
  "key13": "2fdYmkKCTa7PvJxPqs8CAswvz3ggn9vWvgT7UKHHfE7bMoyqPB2g47tajrFanrKDyLK8sfQbMZvq4yC7s9SJR5ct",
  "key14": "5Kf57NizQhWGBGBGyRNiPuSsvdCZhHt61c83sMuPbi5tCnWr3KxdKDtibfC7whLTFvxi9Z3EHKnZ2svvkAetkaAV",
  "key15": "2qDVL9NwqHKuJ8BeD7zyf9Lp2vmiCs1WTV1pjsLoNgZcjmFaWt34VJMJzm1mfGKaoKs4WtpXCzpbpLu8kq6ZgzcT",
  "key16": "4rRFJAztrEvKPnNandw9YTsYf6ntH7Ljhxzbhvgiz7DsPSCs8vuYvvCLR3yBpdkvuenmLyDgSP1qwxqZHaMu4ffd",
  "key17": "2yJ6fSqrUHwDsh7ZuKiWEEMQVB5y4URtrRXDbgxLjDBLhaFmTxReRDP1mSeyrvL95xYcQYshQDQXkcWL2UVoLEhZ",
  "key18": "5mipmrdVJD2qqCRCntEDfAu2HMBZJ6HAvV2vCTm7TL61VkX9oZtQdRG8azUMos3T6tCPbQK2jnZKsoM8nUiGKcMV",
  "key19": "3WMGaJjYiSJRxRpE4sd6yiPpmCk8pXc6VZX3Hh4idjD6Ud2UY7YwfPVeU11ZHdg1LcP5DByf29H4aWi77MS2kfSw",
  "key20": "2pNFQzZtMxPaFGEkMCdGKG7wZoLcUix4HJwsFKbtfine1zGdDDxvdQWpUwNvHoXSHxwxqVxCB5WUAzpKbVf36Qz1",
  "key21": "3S1mu7LyNE8PJrEVAuVGLTGiBLHhm3pXfEtwaYPjkvc3KcBu3nbAb9RS19UWCsABrHTV4aUkoWJeZF1JFQvKaLNb",
  "key22": "RsHuaNyHatQktxiBjjCWuffFwjcajNXGS378rtDdVnWUhD9cBknCkGGc445ZWuAKqaSJKpdfPCCgA4j61ztwCgo",
  "key23": "4xNjr1NjZ88QPpmounJ5Ym71F3ErH48dw2npef7f5YtosTsxJM7PEkTDA68J3R8TiKVbCi7xt5XY2S52gMppM6SH",
  "key24": "2jEtvd8p1uY8vLaTPZ8uCvr9t7mFVJetusDazkwUBkpYq5WTdVmmZ7i6a8XNGVTuXS6djzju9TKxe3WMsggotFUY",
  "key25": "3bh76aUTq1mQpibUfsnB94MCMenkNfJvRWCtdpUrduX1fgRqMQKZr7kBMRmxcmqKSjqsJUzX3p6b8cCGNS7hX3QB",
  "key26": "638swfMFcnrsANPxQZR3ASbpuZcZf177qmZKmTevWHChwfSdkRz8Vu7RS75GZMvDMtcDzJjzVVysJUU6dQA2dm5E",
  "key27": "3jnuLze24vKpFVDSHDGmmumxu8TdPM1XAvufdbeDAkbvqGUEYZXHFdwGRcHC1XH9AQEQp4bPT6dFwwYNibqtjyGZ",
  "key28": "51w1Ecfzi6KRtoPBVfioTuXdoGagCyB8pbGJhazViZHngEGgMjmQkeTZJaDR5mz7wweLiSQNCR28GJigQuAu7fer",
  "key29": "2sJ3ZyGUaBGiYtz7DQugJ5LqKkJQUjGBcAcomzfMQFL2NiQYP8bYpNsYMy19TRmp6LByV4barPvy3ddrwfDrwBN8",
  "key30": "vAonB88kN1dzHkBrbhgnzY2g9ZxiZR4q8eM7PdiTv4tUGHyw6pk6iPiREkm2nMgecR5ocauTuqvfrdPFznZ7WGq",
  "key31": "5XUBixiu3sxfH6h7RBdNcyM1r2PDhzzFFJBNowUpbx7W4mBxNShR3PkJoHaaZpCstouyoakpPppJAiKYJFuf37DY",
  "key32": "5H2XbhjP25VYxAAQ18nUWywVjHb6Cvsu3mvQpx4uD225G4ykJ19U8TMmPETMp4RHNk3NSCMEDo5YCS3Mtp2RKuX3",
  "key33": "2DKmQ5nom2Qjq7K2kt9wuzctbVWAen32AhY4jeADjy7fQ5QJdZwp42cTFMa7xQQFPh1CR6uifuguZeVZxWjuzaK9"
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
