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
    "4cyMFw26vhiNrAa5pYTq85A9FbYheLqsNfsKFwBTmp16Za4BeY8nY6vdbroSRXfAy2SutguDBJrpEfU1zLjW2DWf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bmAwXwZpwFoMJUudJfvfHatcS4DwCmJTha29UnQHaNirkkiRQVu4KquhYdvHCAw3rneXGguK9GzhHQbKbN213bC",
  "key1": "2RNSR7sBa37hYPy6xHadNydM39bQkAKDNGRqNFTGWKHTfg456QimkKDDvJxzYRx9R22c1QKpJd2UETKGowNNyLpS",
  "key2": "4hBnDUKx56Qe9mpD5whqnxBSZwgx4k93b8GtNhzFsfJdLQ1JPotN9TdcQbnv8TFcfMgstYGBLcvwxwZkoZk6wauH",
  "key3": "2RhGPMu3S2wnygdK9yV1DaMqyzhHsybiFf6vYCvEHc377wsfJ4DMQTQXbjjuXKAS4rQuWPdQpCQfffgsL6ptmUrD",
  "key4": "5zTQ3G9JNRQwRNMvXve4LwpY3Yn87uaqoGYxRxecRWAGX6Ryso5E44rQkSgTpk1zobkQMisuLE2kcDK65LnVznEq",
  "key5": "3AwkfYQNX7ZWWVvJEpsjwhtXQsUEbBW4V1ByFv8obVB7Ea2BrooWLkehndpgHQYWugRhu9a6NHQC59JfqNeUVKLP",
  "key6": "g2B1q6cecpCQqLKwm9b7iYx2LUrQKyUuuW4rq7nU7BJpNiHo53rD8TSoEEZvo6fQ6Q7dkZ6nhi4zck2jZdNv6uY",
  "key7": "2Fbvias4M5FB3GWG4VB89mLfzYmf3ip496MpDwqmN4EnF5nj2YD7WrydYR6N9oydVJVamGqFWEsNv3qka23NEGUH",
  "key8": "3gbgP1TtTFKMW9qzgSeaFrZRogvdd51xW49XtkPjFexeH8QsE9GomQmRTeaa5Myd7c17wHn7admUyY3VSfFJdHTo",
  "key9": "2CLXjKT84AMvnLoGk5TNNnboh5UkTBD86thCS4Ngf6SnNK4bKuSpgJ4gBhoQMt1pQmMmREsHy2LvsVoSK1dgJs4m",
  "key10": "5EfQTHit3Kfm48JxWiCACtfHXqHNLdEFhxry9qYuNqtn9oYdVHZ5FWDzU4AHmJG7dm5JSe6ns6F9YpMwHHVzw8db",
  "key11": "5ShjmMPHtMvADsnv29Espwgs85DKeAfd13yssL5eGzXFnC5mYYSZVfKMTKMFE3V8ATHyi47rxnphii3pAoBM78HQ",
  "key12": "5zgHXp8j1Pak9sorpp4hngDLgRLumbNoD4KUxFKX9brWQHcHD9ovvNnkcyZ9CN6ZkSBCoUPExxkh3PqHr7eDMWgF",
  "key13": "3UyDyciuEDCubqjZr51dhFCghbv6YMQJxar2PzR2hcc7ZKsVBmy4SoxZCBkrz8AxPKnosAAV8VxRhH4z1tGgktjP",
  "key14": "k9KVeeckoDdhbBNCymidTwdq3ZyhtWkLND1ddjj1n355C63m1dqxh55AvyWB3mD5RYZhdbxWdRx6qrRmvcQtvch",
  "key15": "5DS7bUxYRs6pLVPBhY4gvF218RdvqJinqCRfKor3S6irTgzj25vUYqjf2QrBcieFtvULuLVD4SoWqDTKeFb96A9P",
  "key16": "3ZAQVYDDtAmyDEEG9eWmaniUxLwYtSNgJcKQKkgo7Ue3cJUmGTmMDkTnZkm9dSF2biJf8CoyiHdFUwg9W95C1BjY",
  "key17": "3kmKNpAAb2uEq9FedDBAUjaYa3iMDuGiqKH9Wgwx2qKALbWhvpFNznF6Z9dBfaD8KnEh1rXdswHi8BFwRJAKMVBq",
  "key18": "4njypaqtkq63XxHc9VCJP61QqHErt5kWTPhyYWgaXkSg1PxzRFMSwikYtRbvjUVY6JCvNEwitMVNCHzZLKhYEUDw",
  "key19": "4zTVMCbpc87WYgNnG26KzCZeF5n78kP45HaWoGjNawCHnpnWN6XbFtdqzbx2MsmRfQW96QGoaHPywpjY88SvE4Zj",
  "key20": "5g1GUsikKLiRQoyX4VCSnPuDFLnoQgysKMxVWooT8EYMYg61gr76SsU9hvkqPbw2gQV5UrSKKAxJCYuy64Gh6rTa",
  "key21": "3NURoNEPq9kFBkV9u55rUMUYEJdJ8tQKuBwuPtzYG4PcZSgoQo8ePfNTjDPftr1dvMGNRf87thHUoktc7fgLP9LZ",
  "key22": "4UeR34yTu7qAEStTUZhfMMyrNrK8geMHdZNcynuJPAiz1eG2bUD3qMUAD9NDpg4Bmxyz3kgzceCVXXAKkGYcbwHq",
  "key23": "czcH8oA9ugxAdXMmFJjaTEH9oQs48iTXyoopLsa39kmFAWqUgjm9ejk4ydC97MFToF6VLQw3wCpP3XikzLCuUWk",
  "key24": "5i3pQgdjNEBLz1GtaQQtHcdifrjJkK4cbdGMGPPRe2kSjE75CoKJUBSr3uvtYdwxYVU7pGCRSiQde8fYPfx4Wvha",
  "key25": "2eJ5QHjxhv6zHkMJ3d4izzkGtvVy6AKAnXYMwgNt4SDFrT1mJd6ThHZ3kzZWgua9gBkTmUdzC8t4HY5LW4zSnMGY",
  "key26": "5dKHnXbcJ2bksqXbwM31EN7bq9ZSnREzxTqrUKHqYPLnRSnJz4csAcyyrocDb8ZFGjScrFxKrnD12Dxq1t83aHhs",
  "key27": "5dyAJ5Bc3j1qrjCna5th91NUHKhob75Z14QSeLsRoHYNf92NT26RF24NPotgqvTyqezr355Vg8YqRN2uwMzqSpSb",
  "key28": "5BG2KD7CkRJ3gJxbyMG1uqvRepWiRikwVkKNFPEDGhhiKRYwtz7B9fqCqr7UUPGwQ4P2dRyzhHA3R5eVCmFzG7Yn",
  "key29": "4NzzhVTVsg2viCEgoUjVTG8r1qSLc9LWcAmT2x5ykN4QnG2cw65CLF444q5UXzZXYETHAAzkJW6qNr56vS8RLsx9",
  "key30": "3SER1W28RzZNj96VHA2cTyBEkUbXhfbxWdUfKb8cBoVVKNR614w58rrpX6TwnEGsqe58W2CazcN8t1hUHMZKJM28",
  "key31": "3rvdsKRLaGtvivB8m8AEduex9p1nDKWVd6q34o2jRX7SvS4DhVEyZvScJKH4PYHfXLPsXXV3xvtpsrit2b6G6DyC",
  "key32": "2Y9YYtJKv7kRVMhGLpXgTbwduq3Hgcfqx8Teg38AWGdPF6b9Fg9vGwZD8AJ2p2r1zQETdwoaL4Jz7Y8SoF2kzXNx",
  "key33": "51yUcsx8yEd9E3dG37uKkA1FMsC773S4Pctx1VLo431wPgBEmBgPzA9GreKM13ep6peykY1XQQHEZYP1dK4LLP4H",
  "key34": "2gjSrb4zv8mwz8jEXH1REAcmBtJWsNUaJTo3N2XiN2QshPudENftnQm1bLwYqL1Gb4Uz5jjHgT8gawLkzGQARxYq",
  "key35": "3j265EUYEDn7W6tgEoKtSLMsCpqtuJuSqKWu21HzEeG48BCiMcbAgKaRsk8iiv73WBLPs163R1Dm5TqRuWK8xeVc",
  "key36": "4yQjin32B9X7GTCXwq1NNpXpQEXtFmd8qc5uADxDjNb1nxerLgQbc52KqfFZrk9kjujvfRmFJ6ZuhWEqML1tV9JJ",
  "key37": "4rZuD9oRagRWXTE2maaNAjbtfnDRm9piq2F8NyUAN8LH6ZS5Er516fiu4U6PvHqV7D142ereWkpivUUienRaMSBS"
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
