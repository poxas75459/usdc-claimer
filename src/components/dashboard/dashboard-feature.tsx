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
    "3Suu9i2tiuKNnsm66ybLh3Ja77pp6EYHr4wHHJqEnXzAbM58WxtkJY6xupptT96rtJHQdL5cfLpK698i9SinmD9i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3r5uq32ne7YW2VpWd8NhwbhkZEZTFALGdrUCtMVBETx9x6qUUYLFo2oLNrGxLRjZQ9fk92n1gz7rK7qBRRMgaA7u",
  "key1": "4KxR19aYJ13XfHoSoRWhUStis3265ySYEwG7SE6FHADrV5KJD1ZfNfgksLuZtmuxB4Zmh4sMpD5dSk7HwK5MKhCx",
  "key2": "4WAhNHtLwEmmoZio48riJJUTVbPmXXwM5KpuxfBzubV7KTdfdcpmPXP8FuTxPwSoocWpBPPF6754VFH3UddeizZS",
  "key3": "SYAdXSnDsQAXsmXgzextifB7NhBjQn7Sbb9gpimiWdCyLGiqVZe1vovwEqbivbX3xzVYJM9zLU68tMha2sBDjyy",
  "key4": "5u4n8agC4cmbPEYRi8x6nZEy9cgpmTNqpJ66MhjwTQNBHn97i8A1q3ZokHySkULg59oHX9ZiSaZD2eukeXrtxwha",
  "key5": "jTA9DuR4nvJsfEPfn4VkH7iPErLmsnsf9Ami1YeQoxo4JwD3DE7GV8P2seYeWR5ey8GhxQ4pYeRFz4kUQeCdWgb",
  "key6": "3wk12vVjLTTNidjUgfwHyfmM6sd98JfeGhxurbhPcxesdhjjMRUhk6bfb3YgT4ARRpcvgDYjzZv6wMP6hrje9wDd",
  "key7": "5RnBU58W8FzpVXbrVFx7suVREHodwiosZq8tRq38kv7U1k6YU8bJweHSnpboyn54itxPGuHRVgyZtwx5nBqfDsAy",
  "key8": "2Y5VEMAAE59vJr6YmC2RERJp7Ve9LQDxEV8CqgrFvPzD83qamhyjfLMkyLPVeU1n81Ro5X5L86zvqDJutimojCTY",
  "key9": "EKbh9cx5UaRAUfM2PRBz4ucwScx55So6Q7HQbnqUzSF5HDshbKh6m98diahEYJ7MYd5CtUKE9hm7chnCpMzqTQZ",
  "key10": "388qpNSw5ohbvFmXcu2QgpNnSMF6JVC2QRFrF9zGBjkpTuHSXuAqQL2dqxTRCmrjAixgVQ5HQQVwiDuwoxFLry1w",
  "key11": "hPRXWRqUXp75vGMavz4UBzpLNwxgmbSiJGrxWR2z5RNGHU92BVPVCZ2vf6Qo8rQbra6e9n3PeATbDnV4FS5G9Fa",
  "key12": "3cUzEFTerUDnLYPCzuPziKotredWokuFmDH2m85wyxzvNMfb3DKYhimH6xfkuvWoTCUexZoa3qCXXiSqEuf2iop5",
  "key13": "2MoZCFBo4d9Jzxsn8GYTy1CnPc65YsWVgsUUcAcmYdvFYZ7eGsQfemBN4ocgXCN594QRuDoZovErx7sXZKFuTpCr",
  "key14": "tF5UXLVeedxYUQG4a8EEj937GspXVZQpGMZj6VwigfZ7ZsL6nV2hxUUTMQeHchbbaQfSDv36DG2e2kbJmKNzh5D",
  "key15": "27oGhte31JUF941ZrGXzJzHVfodgPENVSDFLdDv2BZ5KvdqhQQ1KAS5fXtbAP6eV9S3Aeq1LFaRDDXmEzudgKu6w",
  "key16": "5DawdX7jnNMpbi7BWra5Uz5VBiy1fRxNjgh9CZr2vYECY5Mzozyi3nwfV5bjAMQ39Em9zaWcNRGEN4dfjf9da8Pq",
  "key17": "3AmAh5p6fBEQNgr7DqzSvg8W98ghK56RQmamQyW33j3AjTwQCMU2mpvYsjc3kzx6g4ZMp6SGwnzs6JMKt3oa7UyG",
  "key18": "2YRmbQ7on4Lzv2Lc83YV8JDUFEpCJE3j8o4VCSjA7gQmnp9gXkuSFqxq2zNrBBraBjXwG2ZS2ZaB8JigA72FqYXP",
  "key19": "ct8uFvxwMG4zZXgE2ZBk21USfi4AvAXojV3VmwvJYmaLwLyHamPoUKFA1Zq7m9L9t5wiTHpjYqVM7WciazryfsA",
  "key20": "4vgNeXjs68VdRcGVBXEJ2Bn7hAse5hu2Z4CTs5dvBQ7Ukng2kiWEeHBE9qAaQUd6R94C7pPtVBMHfjNPATn484Un",
  "key21": "5XU5sQtcLvXCFxDhevmJ2ExgLYmpA3KZ7WfP5MCJk7s94v61nWFWJ6oeJMXdcc4n8YBANbR2e26nPWnuP5F3HuDG",
  "key22": "5vgV38EjoeW9DGAmyBgcsDy7v6Gym3BwdwQFW1EFpSsEghtTAK9J8cWFKgmpj7UCHbjuhdMbFFRd84Ms2pKfxvHg",
  "key23": "2gRx5B4xty3ASMEFhRaFFRjjzum7oedXSYzLriPX8TkaarUESG2BLg3kvgZoy2WnK7XMU77DNnWCqtfXqv9BUE87",
  "key24": "62X5zyyMKL7DVWryzvz7925rUjitw62KX23RnuPK3QtCWeqDtwj7zB4AU5MZMbZpYqxM7CsZLQPFYnt8p4pFnSSd",
  "key25": "2UCpxZ3WAr6MAo3Bkvdph9AfDYygDN8EJ6n9jD81zGkyXavC9LSiXceLDwdhS2p2zheTfXoesFWeUkSYnoo7LnoV",
  "key26": "2atnXjHgb3sHD87jMs6BkA2pTgBxH2MFzQbEXVADHRUNZo3QLRSwbyMp59Rs63BiLpQAZCck7Ad8RP5bjSprFdVy",
  "key27": "4yTknCH96nsVcAAtzjuSkFUR7DE4WT2ma3Pgaqc5DwYhEhSEsTSo5tPAQYAxjPq86PHQXvr4uaTSV5jLiyV3ZCYU",
  "key28": "5uLLjh2aLwq1f871UooS6BBjfiRkCgWuzmUqfjWD4bJEGkgmjhegLpGxLgYMyLnJsrZfVSCqot3M8w171b3DUqbD",
  "key29": "4iWg2Cp1StmfVtWSyexmdpr1uJxU5udZKZ2JKi9z3rShzyQmt48JhdpMrb8ajz3Z4Ena6T7HF1x4PCn9cT3Ti8Db",
  "key30": "4fxpcmXMQNSMLvoRjsUpVzBmrfCgDf6McdfJvcRdaThD66FknUdCa4MGbYS8EK9TVJXR7GqLKaKZStrgHkojn4xu",
  "key31": "54LTettvHCS5SaN6Xy6BReD7FnZL1LPxrYbHM5zZTM6nK7eT2APYCqih5RdsUbxgncoSTbB7cyjyTvBbU6WnBULH",
  "key32": "51pnEaYchaZJWy5ZdTVpLpUSNYx3kNvfipK43adPDcHxNGRwFxV7eHWBbjc4vrSUkhBnvgZ5sY1QarvikT4DpDKT",
  "key33": "5KxveYmzbeMnX1fk6n3GRom29PjH1ZVk4TXCk169PgJcnhhKYjmqrs6mHhh65bv1F1LojUKM17E52ScJ5VgXcFW",
  "key34": "5SPLVCVPAqdHJbdvJKYwa3o5xrBcUVTX6s8VpinDViHS4JY6rFBk3dw91qKPoDUU8i7gL2dj3FyuR5rFABgCSGdt",
  "key35": "5FhbyaKD9JcAfmPG6vY9coXeckAkWYddwrwBCtuwhTeb6az288cQZFHD4qpscW11iPp1nMc769uxhSS3XTcxD6mE",
  "key36": "3F3pvT7koG5eFGBgVukvNdr7kxkg56jEMne4EEwA5VTAsuA59y4KAAxbLqEdikH5Yt562EnioZQTqSFjW6GspniF",
  "key37": "4yCqeCccgnPRMVczZkTbp1o8TfyK2LkjZAWqUccetiWfGjzH9f2nvHM1tUdj5eP95w9YpmBwDZzHG4VFeCmPEUsG",
  "key38": "4Ta5ZBkkzv2aJ9KQUZwjzELUDp3KShnGb2feSCbQUYJsrXwW6umDBWN3TRWsQhths4AghkRFYc4Bii7zaqVo4cVL",
  "key39": "woqEg6pC7x3i26JkUEg9AoVnSfxKSeKVb9yaSG5pYxLJJCPgQ1EHzH5eo9seFzBzBThcotJcxVAFrkw8VmyeRq4",
  "key40": "5rzUQ5uAjsB7druDFWy3RfZxLrmfLBMNucZ9QTaUmS1UQ8ikBhYtzNa8heFMtfwNrUqzHJhKf76BTSvsxzuLJMv1",
  "key41": "4hSGTj4YB6RYy9rFP3cyosfZGjMmCu4NSCDtxzfeH9EPQzgDeZGJiGJJTZUpMPT5emu8pSLcjNdBUAEuLHn8eti2",
  "key42": "aKsSFkztBRpVxdaXkiifSQjnshXGnXJnGCq3e7okvagZnzejs9kHyTwxSCoSUxXbtnfGmECp85AuwoWETYEH88F",
  "key43": "5N3m3vzXwKcs1W4HCLfGh2TUWE7Vr87nC9mKD27mX5riC21d8yQdCQ9qwTtdkZdBEZE97BxgXzkbEpQLCKx7WWdZ",
  "key44": "47AaxWWbCcS3fmckk1ZByKxr3HBW8TFynzs8m4siAYowUMQoPpivpBNaJ5dmz2asNUoHVaFzYXFhEjzM5qkJHvL4",
  "key45": "3dGaX8Cyp7oQySniAGGHoMrQT1m9K9b6qh75Ht4WPYSzSnsJYPkUCLu7EX3rGD3fsW8UXhyB6zqZ4qQChJcEZpok",
  "key46": "D3THYU9HmqKuSya6BaxqLsCN7nBQTcdiKCaJPwGrXXoeRG3wkpRPDMvMbQPJzHZGJysHLW8qN49pUVB6oGAmggS",
  "key47": "gyUAiiLiweHSByPMmxCTJM1Jbke6cQhg5rByhsXFxF5hakN7d2Fre9y5c9w9rurGcBtQbkrZBnSTKFMQQUE9cQ8",
  "key48": "5Sr3QEcXFfpF7UeyvSbGwNCjgkjAc7rL7r8PYYeUYeNb1b3mvfJTWqP4ZbAo9DyQqG9QqyyRxoCmtxLu16p9cgTW"
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
