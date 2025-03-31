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
    "31SwkUektR36DwEV7CM6WZKdRM1tgT4jaZM28KiYoaK28yKJgpCeHVW6jPgj1BiDHPm6s6VAtwwq61L2SzFEsbb3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2K2VMyBxCChEn6DB3PpPoZWTY6B2YbaU7jWHKQB2DQY6zDuj2abkCKRye3huF6sXZU9YcZvR2Q7GdFeJKPiLkNfd",
  "key1": "3JVAfz8xpJuwFu8f8KCgD4vs6Sn2qYTA78bYLVMvGG5ppPvaheEGrBm2ww4CGvyv5Y62oo1YuGdZJgdd7zQqqq9r",
  "key2": "2qG2rodTr2Ti9qmcJma9ZrRGHVwr8VqvqeBZYUbQCRDW97BVTKJA48xmkbN27oHuJmqNKQTGEz9UeAMeLesYogxV",
  "key3": "3cZL4MDQN4qoiPEUQvDfEtP6jcAdxstuEZNCChMHw88mN4ULkhzRekiYBb4kCu4ERo6dc8k33W57D6j9v7A58odW",
  "key4": "2z5FQPdQVr5FCUVGwn6ZaSycJ8w135HyC9AAH8idHiJUVbi7w5tDpKSAuNv8rtLSAuE9W8b18TagooxmfWwizQKT",
  "key5": "wR1XRmQ5X41V7gLXgQc2cj7XLx3fdReQ6UM3zhzMMCkHhbR8Ho3fGcNQqo442P6hmsU91TWu5KPBv7K62GXrFok",
  "key6": "3PNaKr6cUNXtoJ5VZ1ypSgvKxHFJUCfU8CyESSYLeB5iUbCKKTUQKRMJAcW7SWveSv34WasLZ54J7kNMWRAvSsKQ",
  "key7": "43FVzMJe62kggquvKGzfyh4YafdE27gqJ5TNro2XxjeijTWMYhRnKL92NsanfWbVAtjeqmFDKn1VadzUc7crBpoi",
  "key8": "4mo3uhGLabMTvmCCxEEmFkuhvBpJcayLCcMkoZqVCvGQ2nwt8Dq1uMWLoNJW1DTS7XQWHMomGDWfZtGdK2kMTvq2",
  "key9": "62bZE3qHLhRM83j4Rsnk3hck2L19G7iCybqpFkZaoffmvWRVPwTLfZC4qpQVrMQgWwoLr9rxR4oHvWhY6LWMMfe9",
  "key10": "3WuCycucDjcSFTgmaVwm5DACcnTF5YsFnqNwRCrkJPpGapz8y645StRcHGQxZhi5GKDHJUqDNb1WWG8kQDAR1GNW",
  "key11": "WaJF9SBqbQZnnnhHjHe14hfGZRi96fC5tYoSFPgrDcSEYkDu4ah3WGSMGicSvLvrnWG9h2g2wJeKhsfixwrhe8V",
  "key12": "67cRjsCByfre6rtbTZ8iSPB4tgHEePTxdoP3ATic6GepiwTFMaPaHuXrQXja75fNHKUWun4TLMqVBFyfcWMhTxwF",
  "key13": "38swy4P82dJC3YdMxnFHm8SAXci1Tsv9uED4FYTjK74DwUn6Xk7UQyS7tvK8P8EzTvqajXsm8XGZoShFFcQn7kat",
  "key14": "3RhthhGY5esLtE1XANNRSfS57c86w4ZB2e49zgExdGejVeA29x5TLK3ZyNMAu3cn1nKhdHt5GNnVjsqW5yTNBED6",
  "key15": "Zu7t92Gugeg6pAace7P3p9NaripGwyp2CJbvEnUATbFz7S1pQsD4y7MqXEZ4yoM8dnMNUAqNVwHfL7cCmKqHk8A",
  "key16": "3jijqu6NbSYoBhWqZ7CtaWccRXupTczZHWLmboumJHii6bSoL7sooyS64ZKkRot7jKRaG5TbmHpTDwnvEhEJ7xrm",
  "key17": "4bAmt8Pq5nZk3ewy79TcFtkpiPRvX5Q3Yc3TZRYewkWvV4hs5xQo7LLkiKdrqPoKvtZY4mj2oYFuzicdYqvHPr6y",
  "key18": "5DrwwsQ5tsYv8QAfRt2K6YrQKKkjuo7wDUjs5R86R1sHB6jbC5NEVjuDLjHDaBg8TzCeQCMSgbwk6ffjwrs1fDoJ",
  "key19": "2du7adGpGR1HHYYQymPnDYoPczjMapTgV5Jrn8nEeQEYX7r7fVmAvp9wAbWLrKyQckz3koy8XkcVrmQZSCoAVj7k",
  "key20": "5f84pzepJ5HWQpw37gsWCFZGdsHGgmDSkkYqX1oAkFQY4ppVLbZjCK6QvhWiuYkoUnEWhKR1fMEoJWurmac2qRfH",
  "key21": "47QSrjFwBkwpdJLAE41gwqtFDXjUUmBMkoGxQ7Dhn5eGpPUt5JnsCgsLL2FbqcjtjLY8cH6PGtc8xfB9Bz8dScub",
  "key22": "3nTfgQD2TVau1QNn1DUxo5noikFd81QURxufAhyGN5jpXu3aeLWnpqVAWz1Kk4Fe4azuuxi25kRFQZycUpGR78W6",
  "key23": "PsQVK3zzKnxnFP8Jweoou2rFbKgPvYVd69fjNbkdPh8Cv2G8C4LTbVpmNTjjZZxKiQi6o9xEH6KkRsWxKaNCnPa",
  "key24": "2AgzsncxXQytmGFBWxPbvdzdjCUSWncxf91hYAygLDtd3idZirsEAcd6p2E6oMh8BnghLPP1LDyC63Xq3Q7MMJzn",
  "key25": "EU9UWKiWku4ZJNSgS57HdNdy8Dwsg8r4jwWutqxaiatKrjYAYvsYysTsRFNycsckpvvjvqHP5SP4Dy7JcQdj4p8",
  "key26": "2KWoeDmQpcWe1fvdsesZ9yAzv4CfrmcdJJhDmDyDAEVoUb9BDnrPCThZ13xZSaK23NMgniSwye6xQdYfx8VxG1WP",
  "key27": "4MKcqn5Y4npGKzzHo634YM1eSXoJHRY6mdak7iQPqiGYJxJPhrvMECpPDAvQSEHNWX3wyZom8vHsY8kB76628sC3",
  "key28": "26cThZXCehfKB5bWc9FMnnbbRpyBoqnhmSir1tQihUh7nLFY1Y85rHnD9mEgT4nRekM63rtZA3pd1Ca3ck9tX8JA",
  "key29": "2KYaEy2ukSKi6eGajM1zPSjv3SQPfX3x82h65meTTgfNy557hUq3SyJuWU1ttPweCkc1k64rNMZwVrYJQusLkZu3",
  "key30": "4wEhjgALMuAne5JeTkQr1Yzvvv1bMDZoKne9qDYs1VWonhCUWtwTzQUoDFhEnRBakCsAGtBtFfYz25sge5fhimWh",
  "key31": "4GePq56MZd8VGF3ZAz3v4Lfkxj8Lou9mpTg8FgKcUrjP1QdrVgpUQej9vmDBU6H2XVW9m9AP7ded9V5PyTeoe7NZ",
  "key32": "4bgU8xP1SSL62MRF3eGkXXmDrjFEybYCeDfRo4DGWjubkmco4w3d1gEVGawBPjE7uaVP69v6sfcxhQh6bqDU7eb8"
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
