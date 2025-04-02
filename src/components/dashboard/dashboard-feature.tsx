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
    "URTvzUNTeHWZK8JSE9qyKxP1erW6Urtihod2XMeXZmJvYUPcwHpR14zaHc1XQtV1okeC1ovTacDTEniNmvCR1VB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yTcUFUH5sTcDcoKZvGiELPLnFC4yEuQWvCom6Qig24fdeeY1wkBXusiWe1tsEik8Hh2BBACSQjehDt3yBcvqbkA",
  "key1": "2A8yvfUXG3KYdNYZ6v1JjzYuHhBbi7PmabBtcAbJ1MiV5aTDmxGNm1HTnmB5kaXJhmra8t5qaaNtA4Zk8ceAuK8Y",
  "key2": "2M1vtcoFnUZH8SVBbkZ7Hwebi91TGkQ2YttKJdfSuKMb9cSMPnmQEHQuTcuKknTDE11GRy1Hc1G4z8DyBYw7AxvV",
  "key3": "rJvrHFQ9ZGJeZ1KitGnWCWWr5rBn9XAhYXXELLGSzpAfdJYdG1BN6i7tJuExNPdyNBnq9mtxA7ht4id1Jw9XJcG",
  "key4": "5Tk81omeP2VVc21Jnsar3oQX2MmiFNgGRoUJz1WX6mVppuRSKCL1xpTm4fVeKDB1eVos65P6gzV3Tm81kKhyyaSQ",
  "key5": "3GjPh3c8agfiaAw6h1EpdschXWdeZdQ3jnaBvdbNqFazjKjRmykpuQZjuV8QRqV3bcmn4Tneyo89w7Mxi5sR7UoY",
  "key6": "VuZFmS6f8GcKgnVP1jAg2JmZ2ePsEdtdcEjyjZTgyWDWmnWjWu6CGZVpRGiYqmwNV4AvuNenP3SABToAkRPW6Bb",
  "key7": "5q3w2PWT3AvGzTyNtRYcT3USyfY6BftCziK4qHiS3RH3cWM2rUqGQDuLz3t3KdeY51USbPHUiV1s9xoa57w1utNv",
  "key8": "57uvxKwz3QBMv5C497NFfBYhdQrSGgZsdzmHkN38bWTF2iPDTeR7ozLm6MXZ3pJZNs6kPQAVj34F5a3Hw4mVKoH1",
  "key9": "2BNwvv4skqqdh7Nkye8r26TthzbqdRxM2zjuFmBrTcZ7WJXnDaMq2bi6mHRDnyLE4KjHFFwPD78wuvkhhKLnvJx9",
  "key10": "5MS6RPb2A1FJhxUkHe2Casiy88QBYw68iYjm2xtQo35WQEHbEhWgrHyzWWV2KLjMep337c5Sxhcqa3PF3pkVEbDo",
  "key11": "3aER1fMkqKV3akbvfrzjUhNKfi9oJ2nRwS4Exba3Lt6fQyE9BC5Dh787YFQfCMZBcwJc4Ha3eohthhRbyCUc4qPN",
  "key12": "RF7RC8zoWC3XCyVQriKPw3LTbXEKnrcKkvEmri4NGcukfgQjsVnxaee1PpGRUTSKmQ1553TN6fgQS9WMTWJhXCL",
  "key13": "49buXjT91Qd6xy5c6GxXA61hBoj17egHwVCwJii5HU4gR1kYBM5mjjzFXfABCeeqdH5c9P6dJvHNGnuQHVi8QDiK",
  "key14": "36PDkYYKR66bctGtbV8j2TA7AdYT8PgwtfVyLgBDwACi2TBBrQT9vP2BjN1FK6dLWzqvuyNe7V35pD25SGxQdY58",
  "key15": "4GS2HqvKCJskEKRdujjqNgaJqtdz5gEwwZrK9StRCq12thwvX8S668PadSqWBSWBYG3k7TYacWL1FaoGoQFLyCKB",
  "key16": "4Y24SNbzsQwgcYoJfSWo8ZQ8CZBCakNfFQPtwr46KbQ5MNxTunGfsEh4XtNQJQkfFTQgLe62YDE4aDAizZsAiMNf",
  "key17": "5hbriDMYKM7nzpyyaAC7Kfso49dvEf35NFC1Gk1L5efgd325gBu5Sz1wcsKq12w4pMkKzz9YwG3bB79QDB7ySQFD",
  "key18": "4fHoZjXxg2jdkdwcHJwpNuvC1MwBMsLNAu7o3LPNF7QXm7mjgETReEGgrXmcqDqPc2WiHx4zCDPf6sEZ1HgLj2ia",
  "key19": "65s1hJsAe44VmxvFHb459vdPygykogqpFLPe4Sj5ZXLQfgGBGqYVuQRkrgheDv1oFuj72e83B2TGb69F4KcdpKxn",
  "key20": "2VVgVvhKc81wDkLrCWzv1vmKRYvvwR1XQeB9ZaaTHQQqqoqj8ndaRquX9gxSuDwv6dwjv5Wi5JFPBAPXdhjHRF2Z",
  "key21": "5Zq5iahdBpME42hSm2Xq785sMA3SPE9V2mX5nuq8ikdztVKE6nXWY5vhG6wo6bQK93TfYKpqrXD7EbjMmz5GLezr",
  "key22": "4BhYBL3UTYZFxCJeGpEZFTkm2rK8xmsShi7NEKrsfuCXtHe6FQPPZjQHztqTN5UEuNv27BYhC6UvSaiP8qtPqPbH",
  "key23": "2Jukv7BYuDWwSaB24UxEeXj7GNGaHCTfM6nW1X2vvAZD3Wv3YgmiJ3jpX9yw2ZEC6XzYs4a16F92v2udwnX2pMz6",
  "key24": "26goT9cyJJJuMz2ABqzha9FhpJnmDikqQeRnJs1pB6ofsGt9baqZ28SWE6LRDy3cyNUG8533RdMkw9SNVVSRnB2R",
  "key25": "2RAA1hGGy3J8FrGcx3dbdC46HAi5ndX3ujLYxoideET6eC94faDGdavncq1nvQy3SENGvUFSABazERBobuoddDuV",
  "key26": "5YK7gd8atSEsThyERU5oQ2wFNz2dMzcvPCjg5gszKPoeVpv2efKvjkB7s8BHLkBfuhtVskg3LsdFDiZPm2A8roK2",
  "key27": "4ArVY3PoqpEt2wMGGsYw5rQLdTyZyKFpJRPQ9Qb5KFyuy7WqgjHgnRVSKb4Pk5yCoKwkRQ3xpZibJCDxHJmBtdn3",
  "key28": "YkFMEydyvKhmjNCyhaB5AbBJQpCqBjuiZ7KFjRHUrzfSKLu76urbb5LZ6M7gu2FFn1Gw7vEtpayyZzozdMmJoTm",
  "key29": "3gwckcSKbRq7WkPeu8oVgPUKs6UHVycW6rjyMJgRhEh2JgTXZJxiS1nCFGqxgdVvo6tV8UCST5hwQi1BcpgmPu2H",
  "key30": "4MrNNnCU8V4ZnkrKx5ndbgGpPhbnghHZRBDPTVf32qJdTVFWe1YaJLPLXnBJYJe4uHJD5VPCFakxsVhocZNV6j6o",
  "key31": "4qKXSTnZuLVzHEaBNEXiL8J9yY1SGa8fqwHtkWuYsN9aeH42KfSiM1fhM3HxP9K52E9pmxEXRaP5Ga4AeXiJPkt7",
  "key32": "2Ek1z4FnneWJmrD24RFxp5GtcGYZxoyhkDkNEsNVs4SuA1ziswLfjQ3wvHPA1KpwKjSBMaatkeckdChS28pSXENb",
  "key33": "5vgwhNpsPEAAUwcYdCKSzjQb4xrDXuyRQFLphCAhGV8Ccecy9qs4YEGHBv7jSY64h59BnJoucHzX1EpJmEt8yYV2",
  "key34": "5hvvqrP4Yh7YGBXsDYSmjYiffMCaaAvdKZLCc77F9KYvT4BGFCF7eEnfKPvzDs7sKMcpMef5x7MknSXwS6ECpbnv",
  "key35": "4BPUR82WtpH32HrWqNBn9TrKeDRcHeeEn81UpMbcny9286AEQcgRgqQhwRmgzycwTkjc3v7dvJYocv2XMVyipaa2",
  "key36": "4an7E5zjBx43RjkwpNWQWFf45PeZFDLe3iFY14xukaq5rD5ncWmCJsYjH3sQeXFvNTo5txBuDtcVXyN4NPXQmR3v",
  "key37": "3cDHjbKTAKNrkLUr1VXg39Ma9d97hYiWk5QGUJPiMfXRTbdj2V6pJo7JyPeNXuWRJySfwKCtHJ8WNznjravbDMy6",
  "key38": "2oJS1bc43cY4EQrNBdJc4x2CABrpNZi86Ji8c2itYrEW6cKHXgC8kwhULnYQ7KChN4eEM7jeeMNPCQNmM213dgbT",
  "key39": "2Bdi8VW6z7tYtRMBdWviMBWen2DsR8N9fvFRXCqzRHXwgUyTN59D3xyYjXW1bEczA8j8AAnag34u5ZwuNSgx8dfW",
  "key40": "5HrhqJFHfd46zdiZHxrGpMYfcLYKALwfugCBXKB3JiirFTMWjMxof2MhKupM3Gw4v8ecs83EmBiARybw5QqqP14p",
  "key41": "5hxeudDyPR6LYYaNXyWxQwW6AuYWsrbizDqpp6ZU4CCGR6xko48pqfVABVrkmWPRMh5GBK8xdwsCfXGJc4qGo8g9",
  "key42": "3ZaRpJULhZqM9QsZvt2rmufkk8bdytY1Uj28kKuxwvqua7jaKsoDpvFGuovT6VreMV5hEMnqKBKRRzaFTV1aAQzc",
  "key43": "5h9cddP9F9YeA1byFBaM6TGyevT1zAQzZnr2jfNU8FMQEvsU4DXwGGFjgRygGx1XgdTYM2fqp5URj8YeidawhTYb"
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
