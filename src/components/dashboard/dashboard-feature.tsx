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
    "4FZ3YupgpJMakEZXn47ifturAVqvHdop4Qf5mcM9rvZ5d9WnM6H2xxCwpMxfAujMRh6phWMSqVnxoyS3YrWRhTSz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xzC4TJKCNFbgme5LXmcr9W6Muig3sc3h5nRwehdCtuPm3pz3mRAoGPCzDZpPemU5128fydrk7muWv9hPxnJjsgm",
  "key1": "4uubCX9GW8RMNHrDyNDtFJsw6s8gt1nbi4DZUYedsJBg54LPiPexLV4xpSk2BhqJ87Lksu4HWwRFFu9CWbov6xTq",
  "key2": "259H3QUCmXX4xhPE41JV1yNE9DR9bJq1oATthNHrHc38gr6EyRaJFYFJ4DoL5zAAbdAb9QsJQPeVwrVJVdd6MwUk",
  "key3": "29fKenUEbFJoWFYGu4wzZSdyNcRRxQ87PErgcHKuWmf3bGbdtgaWqaFgLY5Qv6MhqkRd5w7XWKaVoA3JscK25VDj",
  "key4": "3uf168GdVZrBKmqxWPCzo5Pvoy7hTQR7QsrnrGRA3nSwgvnnqUH44UDLDE3U6GuytMVKYdMrbUnmdztdWXMZuYCp",
  "key5": "5beE9J2TYJnYTD9X6v3JpDy5moNciEGmC433s2oEmo5B9wAQQC5SaPB7gA2chYmikFHjvUkyULZWCfVLpqgUEkpg",
  "key6": "TC3Sgb8gc42wXVXiJwdtKvHtQcbBgtf28PhjTm2x8zBhoR15HCH3cRLhTHEn9S1oR6owZxbe8VZLxgL711Mo6hy",
  "key7": "3rRF2v6fG9j4iQu3Hd5pW32SyLHrfgeL7WHkDaHsE8FrACGiVGHRC2MtLH6HKrVLxApR3NnuVN8FpMp7eLMfVt6U",
  "key8": "FSDkh2YXcjxU6WJZQSZUo8E99BeN82wEkrNtcTF6eq2VY42y8WcSiyyej297omY3tHvjtptWNVu26mGBSVmNZ5J",
  "key9": "56MqaqCTn1EBh9ASHyzaV3YdZoDN47wAAqHNdq9j8KJfRjwXhaTsrvFiJb2fjENJxVvdzHGh7KSKBkG39B6Wwvrt",
  "key10": "62buPf3o4unBguPptnBchpBsEZYe6AUrox8WdQUTn9SWiABL3sW4Z26iBZ5Ve8vk4XVDuSMNuuZ3P1c1YdMj73TZ",
  "key11": "J1UJM15EDT8rrRaAdD8kfaeX7jY62V1wrvvRH2t1R1UaZHzwbvU1cD79yX9JUnzA2Pkm7QeoQ8puMLvwnKVirMy",
  "key12": "5LYkmuNkQGNwyD99iN7BZawKpp31j28qZn6NXmVXixxVLkGGt8wqQWSQCSSdhrU9oDx8r7KFxs6nNfpVvYe5TLuW",
  "key13": "TxmCL2SfuBFJXgT9rBLJA4Ac57hUL3Z7qyUq3gY72vrkiJNzE4uXS3W81Beee5csMuxJiDk2VQRWcUasW3ZsVWv",
  "key14": "3mypKyGp3xg1m7DmvsKUnpe8GDwiCsEKoEdN2t7T72UT6aA8Dby2Wg1XtWuC2AGwT2kWu3eDYdrZWuvSUSrVAWrS",
  "key15": "578Z9pF4gn34WiRRXpXqtY1WYgVg4u1Mq4v2arMUWg5j8PxXWjTuBHPjAcrLd1EqZp8LnupUrZiKyRy7PZaFQtKU",
  "key16": "5DJhVhEd97VF9ERZFP2Q1wEteCLxMkGCHCnsc2xjuAeG6qyofECHTjtUJp3nhYK6MSrQW6aBg6QK2PFoBuDCoo3a",
  "key17": "4TwvS3K9R2nFu5fCu1Xq8b9tffy8Gi2EQgCNCqjPiro23zTX8U9hrzeqsGrrXXkUgvaBDnekkKc8QDH5iLvQc9yt",
  "key18": "ShuV616kagNeJ7LHpS2csoKS4z3gh6gJUKkPvZzjbMTZR9zLydvghz5dbZE8MaKEFrC6Ytbp8buAhDpnCQxARAK",
  "key19": "C7r7nGKVe925bGQ3aDnpP89EVQhnNkr1gBAijEHWCMH3stAapGjGDmShZsBF7DjQthVdziA99qrWJABHeRpxYvq",
  "key20": "4YyqWfgJcxxDg7csQK3nENVJ86ZuZopVqJzCBbk9sRRzZcSb3zCe1mb1QWs8mEr24NjJEAAyZocsnrnNdHNMH4KX",
  "key21": "UeLFw9ZoW9vYuSRs2La5i83RyKHMuLuRjbYL83Ygxntz4Mh3s5eV7pprU8nbmCDZUYM1YYnTypwxHiMMmRUy1xg",
  "key22": "3PqD8j2cLufbLJBsd6YYZDWkzmhuLTMY666LhZY8kLuSDPPwCbW1z5um5ohGW6nAqFVSRMPyp7X8yUwXt7pcwozm",
  "key23": "2ENy4GGsXuubPuTXJ6QsKzBsyQdQJLUmHQbDYt38ZNRs1jmmyqDcWLsUUUeUGzP8iSsWvEnUPPhdZUSgkaQmjKMn",
  "key24": "4H29zXKhkjnfR9TTY9y4UuY3Z8BM8M5W1kwsLoVw3Cq9LzBwZcKDaY4NWqs7uAF22HDiC4t8EgubpomRT4AKwXVA",
  "key25": "4mQEnUTRLAMUtHTuFqEuSf8wZ918MARMkoowAB6oyWbTs7Nt2jBjp7yq9w3X5sMxNvD4hJ4qGQsB9E7VCukuQ3Jp",
  "key26": "2RumTcZh8nzySeuQJCbUowa69qwjRyAs4tK1ZRCmna17ZzEzz2aA9DYtZdWpgTnPediKWDxPuiQ6Ypant925nctK",
  "key27": "t7GkhPZsTH3BVcbnPB1KdMzTcmEdtnBqzjm6V5fYw1aNqukuLhEGX4dV4TuXHygiz2h11fx69Dkouz9G9ebPRWb",
  "key28": "3TCvsVTcj4QYnpBfQsGtcpadXELQGVsxsuReRLZqxNE2oWEqJqnZ4H4RnGsYN9Sa3BmdczGdAAmVzoX4iTFc2Um4",
  "key29": "NAqHeqFi4x6e8hwWuq742Ho7W385mMTPDrpSyyL8wEoyjwMBoUTV4HUhZy5v5KaTXQS6BwCgMFqaGL6sMap9DT3",
  "key30": "2No3waEKfNbPGFu7sGpZ9idAXrFFXenqF8WQBPZUdg7ERp7of5Hf58hWMF4r8h1r2sdBJGDfAu3NhWVxoAAyxmor",
  "key31": "4ftChPdTWM9WkNxjHjtUehbFmsVXQExRB5su1Z7EcaXns1MsLukBMHDFBoChdfp8LdqnndANNiF1RxxVna95Zg5s",
  "key32": "3REd8koSEvp9bckVVqUcRcrtrKF2WgwpXnBpNKX1QpwiGW6CNNdCGspCoRJ9izWefrTTceDgv12Cr9tZZrv5eo9x"
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
