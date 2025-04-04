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
    "5Tub7P9JiAByPLVgVXgawYPwtm8MmkHSGB1wvcE1RyAXNERkbNDARL9QjNbbG5HZmM2s6xM2NDGRVzjSP5eMWuNA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KXgkowxLkVxKCfU3Vg2A46vErtVSB9jnjV8ArjojmVCSH4ZaU8p7N74M7cfa2MFVEAyMJ2UaMzSaJZrDSTTkTBc",
  "key1": "4tZW31n2oR7jdY3hTNC9b3YiRJX6fi6F76Cx2GKoqh3bup2yAA8bzcyeo59SJbydKRozJFJLBmvDLjqjZjvrQror",
  "key2": "XKznAFWpeoJzbK9pWRW8vUQfTJYKkCgEgDzNZdWiGp7ZyL2jZ3sXMAud2gkDhES7Zq77NcExYA6sDEkJLbsBC4T",
  "key3": "45aVuW9dzLHYESPPKaBaGehN5f6TgVKkSrMdCfZdFvDzGSGEKaiJsmMYTki7NRfGMq6Duk3vuNSC7ERFUmrwoPpY",
  "key4": "34ScjvEn8zREz3ViuF7z2ZM5rGGaanDQRraaVWXPaSfLkkuW5kYLu7ofABfnvXVqSKw7pwYvz9QHsZf8TRTUzncS",
  "key5": "3K2AgJ8rWf3HAwy2wkQoLqojdGuxKhZjYEktmfxvfwBe1ocJFXpG1FVKqTgwrZbaRzedKcik45h8EXkkr8iyWgwf",
  "key6": "5uNmdiqsJUGbfXYuF6H9pHmxg1Lef9vR4KgDKtWtBWxhNRJLQN945GNaoGXrngz8XA9aaxuayB6QSpb19Y1KQgZj",
  "key7": "3eEsxLxL75cmgoGcwJceGxbeRcSGYSvABVzW9zE5aTqHzDkxd7QzKkd2poT2P7nbsLtkJvKs41inrPn5tkJaiARG",
  "key8": "2718NnJZumGJ7FWhHQmyuL7jATpc3XXjCbbnMXJQ9BfjVn8fERrYdhq34P7ZzkKaKTW7e9SqftPUL4wwz9eQTobK",
  "key9": "4DG86Q71Xi5Pjj3omnaWvhYagpuusjGa7oLewAZmFhTWCRGzEUctgdpFHhnqVXqQC5azuT1FKHEj6zQEKwms3H2u",
  "key10": "5k11Z9nVVxQJBLG9Laozu1qgfaUSJ6moR9tDRcyQjtocPEiDkPk42chZ2BNyWijM9jGvgLxaM2gckxxS1vS9pxM7",
  "key11": "5ubrRnooHRSGF2X7k64XkTC4L93WEtWFbuFRA3EFkS9tm5gid3eCnYbsSdubBd3WPwVtZd58fTkcms2x3GJg7Y7K",
  "key12": "2AvdWf1sCq9dDhYoMpnMtVZ5JvvJK7bRpXdQAVY1vQLgbQe9LABrQMxHoNKdf2XXgehivSV365LdpGMquXih8qKv",
  "key13": "fYFjsaU9TMrWQgDEaZsAA4hxMedvMxZLyX5dSU4bxh19EcvDTsuwZ17dm3LSWebCubTj3D4cRMsbKraGRSW4SJ2",
  "key14": "2sRWkUGnFYbkH9J1db5qeRYw1JQ3uGop292i2XggEESsmS8arK48dhuLiweZejahDParJKF1vNQn3cJeNzYJZzJs",
  "key15": "22FKzsZVQ6RUtfNqaNjphemeJLnvWfHHUoxAWEkEqoJoLDJWyWwZTZkz6tcFGiKB1WbyQ8gFkS4d9MREAiSzNNrW",
  "key16": "dUjKYoxLmsmHmKNR8JGwM7r5nt3HhfyhP9rxzazzLFMTR3JrNxPaVGg9JbRAEzeLKRLmF4acfq1rjqBeMhycuZK",
  "key17": "2h6rigQmwLeWr2MuACcQQh5KNUbbQyfj9yMdq7G5k9UXmHcwxFwuNBB6WEvPDkox2D98QwGAxeeeA1Poq9QS7Ufu",
  "key18": "2Xrrjd93wiiZCVTWvRLeT9m3vHrHkwvpt9rVhXNyYJJL7JmHZqdL5XuSJkWCHWnjV5H6zzW4w3MXMZEGFht5fiUm",
  "key19": "5wfMP7sPxxexSeNTG7VU5GFWjwf4J1TSt33BnVXW4tUrVWJkYnnpqST23Af4fjZaf4j1aDjPxD8uwaF6X6okBxhg",
  "key20": "3Qq8SoEGmVvwtbd6Bt3tzW3qTKTqSXgNLwtZnvA5tmXsbonjnc4DLm7DGo6zwhwCtfLGLPnJWtA8TKni5u1BrBX",
  "key21": "tBYgZyfa4cbMJTGT9L4wZyWwQAi5f9WBRAT8WY92Hchjt4VR7khNkGWsKTkQhUPQNNt6xEMhkrSewY1aWg1hcks",
  "key22": "4NXknvFy77dM4F4aZoyeY8qh9ZoZdxG88C94jA5y6RBD5qZSn7avX2CyQse5q6jeYjskgtsgRMXsdQLE5cQWs4gv",
  "key23": "4iaDVMao5PNWHEMtU4vMpfMpC871VsDYWnat7c3RyFWdY7ens87LdPMfahVa63qhz2fz63QY7nBGTsiGz28bVduA",
  "key24": "4MeDQHUaFuTTUtEdydp7WTeJocpnHF1bzS8P9nBcQyrd6wjQGu7nbv7xCyNDYvKcX2AoXBwdbEaixU7Vr36omHnz",
  "key25": "3Vy4kKKsRyNj4ozpoNyVL2tgwUxq1SD4deLX3ajDRxcUEZAajMvZhPyyoBiTq8ETWgMDSKvbN1ESuc1brELo66Lz",
  "key26": "3zRhnPSwwQweSpjLuQF5aw2toVZA1dMkeXkFiGdjD18U4PgPFWBDgwP42uKLMwcM8wd4PU8gfAgLNwbz4AUKEVf1",
  "key27": "5kMJq3KjDrsdxLqvUb3BmMRtYzXuLggDqynmGraPFTJspy5SzDvqsiq4S1QxGd6AM2r8L6J1iN8fATBKn1WU9T3a",
  "key28": "5vyHPa1cQjPXPuPh3FcLGEg1vP4iEyXacpmDY2gtYN6zMUM1WbNyuis5hSUh3UbSa9FySaGUUMoS5DKU1YgdmY9L",
  "key29": "58UWdiVFenRoMBkofwBFZYyfe1Aqx6hV1kPXxFm97RSFpDHYfGftEiLy4GmcQnddRgUD3ofW76i1vgPBs8f1W1qV",
  "key30": "5QDNKp7eZ9VLiXPEznYVgXWoatFHnnNweo8kDaoN4FFtJe5m9E2JaagQuEYsYo8C3Wv78NbNrDMdWkFz9KWqvDfh",
  "key31": "4EWdpTH2XTuxwNAETdFvRvKfVonsxrkobwQcp36VYyP9vVNaVJMDzJ6Hg2wpAdCsHLT1z9QzLfnQjR7z1Ze9VGQT",
  "key32": "2ogP147DeDnkEGJqGxCJbkMkHJhvyqMDQv4NpibTbTNnoyNhmJVdDr2GW2afjfa1DanVzruVbPZDD9Ltayx34UE",
  "key33": "52omgpkgmNzNnBSkxtajP2tt1G7awnCGE7vKZ4YP8Pv6WnwL44miep5KCGuEUpxym8pmb5MVELWAwf9Zey36XPmS",
  "key34": "25dJS2o9x6pu4qw7CS8Aoj4xokrx8iQb2hVfxhAeW6bVp8KV23JBknDgHVfKbmvHoErXw1wUVJyEfAafGTAC5eHb",
  "key35": "2CH8GqVZRmSVCFCcjbVrtYtG22t1LbRSBpbdw1MA7q5yboCqhvVEuSNsduAGpnF7AvFQ7KWYPrNzGZyZSz8M7pcF",
  "key36": "HKdKjcG6V3qPsX3UsRyAd4fUQo8xaBH8jECcef3AEhyzEo429V6uAp9XHrdtCmWyFWXQKVZN6HQV13CaKHtHiFX",
  "key37": "5GcNxaRv37KTdKsdRinqFC5bNwH8j7VR8N5vSJ4XwbV2Arn9JQk32QHV8x2XofQLdYrWzmYVACV34Q9w1umKrmen",
  "key38": "5n9S6UvdwMJiHtaA4SSqtcoHWwEbXJ5PA5vDRZzq9bSvdTrXiU9xXd6e9suZAx2VvDzQsAxuau1iCsF9BBujmgYY",
  "key39": "4BGQrfFGxiJgTHg9nb21avt1hgfKHua6RUeWjksNhZYpVNzRrUqs518nZsZaePdRDd37zCfv1BCxJ43MnTofuB5q"
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
