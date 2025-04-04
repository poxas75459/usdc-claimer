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
    "3tFsNz9s4tVDA8XBU9a7iXP6rehA3QiHsRDQJ4rmvzvJs7NS3htxu9VD1LuFeoSxs18sGyPstmoi4KH5HwmKerhT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47toEM2UWc5rMTzuLXJz93aZ7cPJwGZ3GrWW1gHSuNPy8JzbNkLy1QBYZQTM8SUPn83qnZ28tXP6jdddbFznKsWa",
  "key1": "F5sWsHKo5hUi6AdpPD9WEga82cv4Q2W8Pq5ahwTFoJWT8xZjXBH9EpVFsG1RPyURe59FAXTbLp2nntiiyr3RiLn",
  "key2": "53aaL1ics4mD8hzcWRw1s85x3ch91ZP41CgfUYTeVnBzzJVEufb32Ea7VzwmmimbbwY2Hdg9WP2DcRuVcysBphmS",
  "key3": "eBNho7raiprqWnhBhgEFBevUjLcMRSCTWApCxm1hvUrJvhtT73AJTX3aRgWCWbrzHGPSgGbBgsrAR9j2eE29df4",
  "key4": "378yJuNe6gj3ho8dcHCnWVCvmVZ8mvRFhpUCzPJqNFz4WAhvsSFMdrCzNQ7QSRR3x4UnKdy1QdD4q7TFedaiRuXM",
  "key5": "45dP2sSigMnKK2qjwZP4FCEbsH2xYZsha5ngC8hQLHuxd3K8uqfZB4PkgMYThkVix2jCqpDW8jc4jvF79LWQfkK6",
  "key6": "3TM7o6jkwqzRZJ1KcnNJhUqwvsDjDKdsD2VZGw5ddatjfZkATzCmUqTf4nFuM1SqbP4DoHC4TW9q48WsoTSwhjyp",
  "key7": "3ySWFfByAp29e75bGZDTugsQdYxJAEptyrKZGof9rVeECzFEQ1d4v7WPGyhjwskVBgdFWZiSoL6MoANvm83towPM",
  "key8": "25RqZN33e1voJ4XKQZdau2tDzuqufbLsmCGdRZLnskSu4wsFR4guMQpgCwSQP3zDDjLE9A2ZCjgyU3piGmKVLbTE",
  "key9": "212FVkUjjRc1uLP56QVN6ax7Ngi3HNwZ5H5DQHtKgWvCoWGJZ18iKFZFPMR3ViWQFVx5sSYitwiLVMiYAg44EVpq",
  "key10": "5UaSA1qDUwcfaDk3aE1dn1dC8jZ7ejdWu1gH5Tf1wAfbrhxNmSHJJUwAaFNgWftUFsa7qwDKdDhTzvj1LhMbVJXt",
  "key11": "5LD1eRezMrNqTN7i7FWY4jRakiFNLbNut1CLDiTWSvWrPj3pDtxHxMgGJ3eQr57X1VsMP9KhJXK3mb2n9ncXpZSN",
  "key12": "2GftBYSFbnsjTrP9K293ocCK1G9YtF4XUQ5qR7ndgzbFDdP4XY5CzDkgABdDMhGcVRmooPKvJhBYUrkocnyZDCZo",
  "key13": "5icLDGaZ6WVs8SzZ6ppYDg2gRSWPHPeJA79NU9qRpFPxHirE3hh8XcW3crvxFYAES88dNgcUPsyMKQ9PWkGtk1p8",
  "key14": "4Dv63KCF5CPxHmaveirPWdZmUakkbp2viV3x5JQiY1RqWTDh1BsRXKJHZXN6EC7PPBeASFswqeCa6Ko9o9JbDvpS",
  "key15": "novHpPDMmDiT2H8euJdsFpTHJbrkFLgCabdY7A8oP7M6w1X2irwYb472CXhTGLcwHQ9tbjjaChCVytGaAJ9n1gW",
  "key16": "Xxts3NKYTq7zAcFfjyZfTJrpQBnsFK9YM1HcvYcJkzw1d3yyiGH1A7mMneQjD5KGCEcZeqtHoX3d18e6naxnVL8",
  "key17": "29jA17fyraXwhPEE3iMqU67LvrJa6zB9ReGRxZJdQK6nVvGjaNPf4UUWu2eTCtEY1MTtcdJb8HFhwFLZpiJMsrN8",
  "key18": "4BJCpyNGJhi53qPmYpA2G8rpQhUBiPga64TQ6D8Rg2MAawX6zWhUh6P2QV81XCdpXaJXCWiUJjPk5DkAvwpWv8BW",
  "key19": "2aCQYzc7emaje3gXmhzwDdkjqG95KcpMvZ2qa2ekmt9K3uVyy4UCYNUj4Gtbzs75KkkaJYZ33peSmtRREizkgseG",
  "key20": "5CN5M4eX7vRY37txssJAbUuMQ4kd1eTYYCH8m7gPog8GKQe3qHgxVdL9MstYdmjsN643PkLbR7Qn4yTJ5xk8WJuz",
  "key21": "3LEaAmKzkWWDJfGZNLtT6vHZTUypWKYe5brfui1DivYcrs1bJZzfMmY6mQj8z2T4b4vuEoCcKSb4crMAfQz3mrpv",
  "key22": "57uaE3cZTX644cF3ESyGeBeLHnvbxv7K6uesxLgfBzJDzRAfbcu5pS1A4a9d6BcKRzYkf1RsyFvAf8gy3vbrMncC",
  "key23": "2u6GNYvaLRFCKSr7KuTQr1wLCtPWx5Q9menG6ZWSS6ZyG7Lam4AbqnVzUhHcRqC2oHkGXoVr66Z2VkeUHK672wYS",
  "key24": "LVqRZze9sHYjdHRZPKJkBG3vQmBeGSnYzZro8SfAHcechUaX1ncFrnqzyr16FBZhaQss7vh5sPrDwa8bzkCJfak",
  "key25": "37XbKLKHbLqbgjYfMCBbnay63cGHUhaJGuMebCVKtPiKYVsCS4Pvj2EKmcY3hLDRCxQ7Ko5jSv96bpqvvkdB8iBw",
  "key26": "58J7jRKQPWK4v6vpfLe5uUjjFKjHjpNiAJSLYAmPFry4LL8UN1zxUvyYvQQ8m6M2CLEVsHEPqe8x3bTPPBLcp6QU",
  "key27": "pGj271ppM5ZQpMFwrjVY7qRkxXwCUBTWFZ8Vbuupgm88BMd1r9jBfDCUJ8ZcS65vViVbzsf9YddnLDMBVASKGgx",
  "key28": "MYxgQRBYrwiERF56QzDUnWwR5p1fE9rVtQPYrkwMFuvtWmnzMUQjANXcJ2DWoDEJxvoA61MaAPic48hbdkn79Lh",
  "key29": "3Lkyw11MycR2jySBrzFakHF7rraYN7LCZiEVRS8T1uTBzey4m9vAkdxxZcqNBCgVMEpFsXQq5C63Zsh6Y9hwd1v4",
  "key30": "2npU22v8PD6HeMn3kXgfoc2DZ6DJrJ9DPhRqAqEPhXb1z1stGdvBN4E8XyiTmWDQTGokra6iM3LZGWzf5SZ3J6Cq",
  "key31": "5Cgv5w8fWfhtvTShEqKosX82uDpv7weXu6Wg1UBviqSBhR5uWASM5QtBzenNCYVpaWkV3k9wicxYWk7Zjpo7F4e5",
  "key32": "TnJqitWbkUgVNuyUo9WkiiWh7bxoEkUYkFPGVC1vWnpHhLNwnEVNPsdhH7VD9VV7PUH5n4hDeBaqDD4Uo13dzUg",
  "key33": "cxdexpy8qqUAS6CwXo5AFzvRbFjMtQh8T8C82xtjps4kYKoTBb89ezcupd6JRS4WVw755Q8Fy798wHFsop2xvEc",
  "key34": "4UsvfcxGrTTfvK4tkZcmr75Tswz3rujjsrwnwyzquce2n6zYmeHgdaWBEbxPFBmiLnyor4xHioas5D5CiaXMG6rh",
  "key35": "4g6yWE2m1ePQvnKsryCYx4vG6JqUM11hrCJr5YA5JphZSpPBnGoEhp8qBpsXyR2xhmnRzRHrkqLsGRmPNZZ8KuXy",
  "key36": "2LWsqdp78Gsx9jLDGV3mAJdiyodp6kiA4e3HZ3NaFHfb4UezH8N6q45mMGuPNC3rM2QcosCy2mTZP5GNvshudgsz",
  "key37": "3mALSFx9YTVPNByhVHR5EAUGgC5MfurCvyZjFSN2WqrY8Eo7RQyESKtitF4wQDuCWVn4oRvGCzthp6TRTyBKFZR2",
  "key38": "494gdA8cV3qNuFkWFRiySyLvtRaAHdhBm64rgXp26qrXNsQSyB8mRszxEryXU8X9nzmHHQBTCBqiU2hSmiQvNHGH",
  "key39": "3w2n4bjNN3rxYViwsaB5B2MJ5DEWSgoADnbDVNjuxocjPnKwforXgQi9UyFySkGUHe5E21HsKCkbexhkyLDGKaL8",
  "key40": "2W4QVXN6Bjq4Lv6RcFwBUog4U8AajbypBAcBBYKmobTb3dLso9Nse8bJH8Maaq1h5BbR1E2ag7Frbhr66q4sKWEZ",
  "key41": "2SH8Wk8BMsVQ6gMTBxFFVfyJ7bNAYT4YA98aUNG3jsn6oFdLBpudY8DFYbjWvR4sY2YHhMRCiHMeFukAQMnSZwPT",
  "key42": "5eR6NNvnzmu6HUFqpS63kZPTubRJWS97tK5xBjARFmKey4x5B9mbt3U5zN9DWmMCAyeNBD3mP72bYMdte6GUq7kZ",
  "key43": "Wbxb7DqoKzZztwYDViF1xr8ovHkChewgsos7nqYqWaBhDccyBSjTJqmsy4NtbcZGuEMP731hVDJeJzAYwFMsNV3",
  "key44": "2zKu2vDUCNMm5veU9RfoZgKkNhDJfrUeAaWxPEMPJDkzyrFbM3uz8hPMM7TndRGtjRDrCSZuE1XoYr84VSF4ciJB",
  "key45": "67oEn4eQn84R5rmbbE253YVsh4agyMA1zuSVYKvL6jJT9d8vVX4Ed3KcrS4wdQpXgKgUGJCnpv4v3mxCTaRysSa8"
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
