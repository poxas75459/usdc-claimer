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
    "3CjB8bwHgpEmcHYm1PNeB43L27tVXJC3YwTvHpwkqCLgQy77oCqJzA9ct146YBpBw9wwUn7W48TCwHWhJhaojZYa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qkjveMN7n1rfBf8oSxdXSgopA8g7GNqFk2WGC6mAwjfkogu3VeHkuCuWkwuq3JypL7eUGQ6wTteaMEN7xQtNPoS",
  "key1": "3nyLRRoaaEWQfJqnkGWLdAmVGUTACoBhgQjThmFd5TdKwtxTrid9LEgDbJAX7RP1VJibV4QPcBMAVvnGE7SCNBw",
  "key2": "5yaEEbde9F9p4ktvtsESaEdUVYGuDUHytHU2EAoVTo5gAYiRdJNGWCy9R1MunLHwJhpo56jfzsZWYN7txX2BGLpC",
  "key3": "4AwD8xFjbXoj9W8N2qjwprsdHcSXAdZUMgB3shAgmE4ZCsXo84Jbs5vnhCJePo2MXLvWfLjuarsmxsdLFkv78PVd",
  "key4": "eUBLuNmoVQoq9PMP6fXgAXqXkEsNr7WQmr9AqWJ3SqWUzqPS24E1boeJJcYP7bdo9nB5enFCdWrZDWqtyP4QSgd",
  "key5": "2D3XyToHNNj2pATSVSBQUU9yLVMCCK3ZRnwyS71ojQBoq7TD5uUhrV3uqsTS7XD1MH1tTYqza58GQQhFsj2HFQUV",
  "key6": "3ZtYVjqEN3XXqTqwYx6YRNm8rPsuGPjKxYzhUGFwABTEyZ6Bg63SordFdPvEF3NTnhr6BnDRNBf8utpiSgaLEu9s",
  "key7": "3csXngVq8MwMBpfZwSe5x5zXb7ant6eiRAJEGaRr7dd3LTGcFs2mYpMgGUdKf4QEEHrCtNXk2gRm5j8YwbKRwbsV",
  "key8": "MxvMZNZfUHV6b9ENcePV3m5y7P7zYCJyHLvhL6ajM4vHrsGBtMgchdxJKmXLNrbcSe3YtLmUdBV2vBGeFt6xYQQ",
  "key9": "4xCKgavHj6YsvFaXoQSKL2pSxgRDHQcJFpwcjX1MKxQx6ZyP3Vnkg8GAYwRoMK4fNJ4Quvfy31Vxhs6aQr3JFCnx",
  "key10": "4MCPfUEs1bGfjho4yCYFiyURpy2o5ysbZoYYMMTaN8kfcp99A7i1vUCwfRdz1bSmA2Uo6frS2eoYUGteEkXcmSB9",
  "key11": "2APMpduD5TJpSS5fveqqetD5DU6KFXqFUFfhuF7pkCHy6nf5DtJ4wirXTFBwQDNZcKJpFJKzD3meGSfyyHTAJeCQ",
  "key12": "3txa4s8H2kTrBXnpaqMbnMnjM355uaEi2roeq5MuoaorxsW9kpF34R6hpMVijx8cQSaVkiRahSkZ8F1Deny8j38V",
  "key13": "4xHePRjdKjidpE1XYMuEMuaCcutyMiKpXvTQn8ZLW1woeTG7ZWjq9BaAXdiEvPHEaZ6gKE6ngcNkKXVGrHN71RTP",
  "key14": "RHHjHjAoVbMUbePEXrmfMEThmmi8qBXsLndqKNPbA8efP8PBB1tQMkXLMHVPVG7VM4eJaguvHyRiwhu7syr82ok",
  "key15": "4XKz81kJGsNTVaQiYR9Ejdri8M8W24ECGsvDaSXW7nHaLijUmxPv6LQca8JKYCEnPHMMgHTASSw1QY4AWs55fUo9",
  "key16": "3yh7WnuiX5MVt7pZeGGw9ok6gSFHbezVGcpF6yxQyeMTrnGZwU6xJvG9hdLxGmDAGNczaoYtmXYc4KCuxrqpTECA",
  "key17": "SQj32vqhcXVP5PTN5Tks9y7mDrJGwUkX1mpmt5P3bzWXhJJAUN87oAZzn6cmw3FnhozFGHQtggnHKsmzwZQDPZC",
  "key18": "291vbYrKykEPVRrpT2EpBEd11C1ThvW6Zxwudz5kccvv1zCmLA23QGpp31sjCSRMz32Q6EWLiPZkcTvRXRd3d6Ez",
  "key19": "DWwVsWw6qPHxJ4ffzkMiPi3QLUKMbYpsPEYThL7zreGxQNJv5ceHT83JwdsL5sVJmq6JPuSLBvDqCK8CAQzEn35",
  "key20": "4zvxaD42CSBZ4HjM5gkQuCrYxcdiZXivag1AFSLJEpMfx5ZGvs6J7JrKT59xSTp1Kg8gpy4LJnLgcWc1kfeHoLgu",
  "key21": "4oophCEs5yyjJ3RBu5LHHta2cLntpzKkBXLCrLgBC7bCTpedoXzGXvz2qHopJaP54s4KCSdJLT5Gpy1gK5YstvBj",
  "key22": "3HGW6yZQJYU9oCuL5HHZRARvCFy9Eetn4CZPG7DahtKiZNgvbwswfL1ML79M2t7G6SuhumXrXacMyEiUN8R398qD",
  "key23": "2ANVqLbZFM6U6XDeZgBue4kfXrjKHPhw2NLVdNF5bKFW7pcZLgnaJvDB6GiJBwTqWjJ9fpTTVCUY7Jd6kNMx3yJf",
  "key24": "CehL8NXtCMiNejYoWgHWHCbu8DYDNALyXLxAihixqryYQLY4eX4TCWD7bAcVnfTVYUjep4mbNtxfjvrVPYAKRVj",
  "key25": "3qppJCkAJVYPKBFRnvGpVgbSvxHE35WkTTFtEAoQU1sUMwdj2seBArrFvCg8foKBhVLzF7X2mWy9Mfov3fhTFP7o",
  "key26": "5n6xuEaAn8fkT62xbQ69sMRqJpbb6FAQwaxzR8CDyMTjLZqp3MgiJybfRGCnafGDQXantvDCmYEht2erusSVsLXu",
  "key27": "2wo3cEWxUWKyE62YuQRhRVEW8wcEk9mcyM7CSHibvuXFWApbEANDsT8KwpgXVuoNxqCTj6DCMSLC8LvpB3h6Amnp",
  "key28": "2Quddx53mJgXioXFgZ2o8BuB3uBFUFMSwyR7aTPsiaqKDzFM7FG14zMZocmpE4M4Q258BbJkAQh8uovM2F3RTkQs",
  "key29": "5n3xzDMDVF8a7H4iZrub1EQNPh1JtxwMBLHyFg3mmoXcGQd93fgntzLuVbBe9dZifSRLuKdGe9VwNT7oS9AqDKLS",
  "key30": "2MsmUGEcZDztJpshjFcmmBJqDCJCx75PnKpDdzo1JjMFbEHUiUSEaWhQxg26upcsNfFcgN2ELYUkER2UgDG6Nr5g",
  "key31": "3nHhfxNmcroTBHFnt4SwKN6yo9AT1wGfgJE7KxKjNyr2JNR351Zq6vKJk4zh3Zr8EH7h3qzyoVB81xiT2tqC1LUV"
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
