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
    "v1gMAa1JoNVVpJ8iuRqqEgHys1weybV8R1Nhq4zxzS4uYG7NDnf8reXxTsJGKmf4sd5V4CyVUp3pz4FBYzGkBSX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YtKSMvpEGa2oQgRYwCvFuKxHCCerxGrkNZCJ24wrEwVY8aMUQUwUJq1uxp4KHTdG859PvbFi59cBG6v2K7C9LBD",
  "key1": "CsctpcWEqtqtC1pf93GYk6vL2iU4aeZxKGSqsgSXugZoBPZ9tjKQfsYdeNC3jesdjqQgRUdbKoRjjm54j9hsVQR",
  "key2": "3aUjVgJ4Zwc4B2XvysAkeX4Za5zCqg5jLYK3yEVtmkTkjZB9cV7a8AkTvFUomNQe2nSnp3ExcHY7DKaCnjDjA7Xr",
  "key3": "3164QjaCc9pRixdS9hCBHqoJrFDdxN9N25j3xorKFXDLZFqj9CLn4LY5qF5hdMeSz6J7QDh3caeVVHBHYTPTz8va",
  "key4": "aDuKfZ6r6VnTJ7yAMiU8hKnTWtyQ6LmYdQeFuah4h1cMnevtVKqMJp9caTyBHzJ2zA5gKGiWfsUqMUTZJKR2xZk",
  "key5": "ukTkGhvcfuib4yKJQEvfhK9X3Kcwm6ZjU2Qc8FLunbGHNyEG45iWf5ing4AhKF9By1BA1vBBB5QmEy9ATSm18VQ",
  "key6": "bHzZgyg9TN4RrkM9qp7FhKaQriwjtDBrNEK6eTyWGAeWygXtDxpjMNNz64DGDCECJNCFt8KJ4FyLYJ3xBk7u2h7",
  "key7": "4ieDTexXDEUfmuZH9GqnSF6CqhpyLsE9s75oZkBVZsS4ZhVYf9zFTDPNLiYvxmnTUmDghwg31t3btHMyBnudrgWJ",
  "key8": "3x186UftwaNTQQm4pcPdbLqeefbN17SGZJNQBHy5ZVngAL4rihdkWDRM9LzAQyrkruDttJ6qvcJqgnbXF6zH8ccD",
  "key9": "5i4epDgXaUYquo7cG87LTKzT46PcdTMog2AoLAfnEKR5aYNy4ZisbWcDUrS3te8MxjV5EPd5NbbSouKD1P2vJM7M",
  "key10": "4j3n9SNS3idcSYB34MyjNnVpFrhTejSpL4vuApvUYcgM5usMNDRRcJFNGU8coY6Mwnt9ZpYLB3V88xEhTKScw74K",
  "key11": "3Cj5aDm5KWHMAUa5G7dtskD3Z4p4ja1YvxoETYNTF11dQW8dntH8t26kyvWeMeX2PjAZeQngq2io2rcyBb65NshS",
  "key12": "T1rHftfZwvYZ9DTPfxaDSdPggJ6cGXJMtoSPifceAeKALrUrvWdH7udzv9tdBaoEUjfMwZGnAWTrdKzftAvhSbt",
  "key13": "76DU3ZwACXMvoy4CfwFgjgJf2kziRTUWuMZTQk34fPdRFcRWsKpvCKm6EVduQ487rBbQC3yEDa7F3JiGcc9gkex",
  "key14": "5ARPtGirJeFqsTztD16MS7NjGFGZeencMZJKUecLnpnWg3a5qRm3uSdbVcWb2qh3zKWboQFJtg86cAqQyj1zcnvG",
  "key15": "2Sk43fVPyEDNFAJGmHFPBxCzywNuysGFyjLf8duXhMkBNvYLYQidd9tjb71j9PRrie5ipsG1FZA9PVyi1TeMEMv7",
  "key16": "3AJMkUK72VZcX3HcyKb95cneJARGqJYSzYs3dr1dr6x8apMfvQtqmGYcZmwkj3hFVYsBv2jvihBhqRjpMsvTN5Aq",
  "key17": "5pkTvf5LCjWoFY7FCwD7qfD5PujNuVrB766GkkTP1vYea8aN7ru5gGvfKkDZdXPgHL6Q2vQfSQrKAViEThGJZrAw",
  "key18": "24cW7frcoMzZyxjmJ97q2C8VP3TG9eZegFaUKCoh7mgXQUwcaZbkpdFC1TStjFe7bL7hi75WL5brhDFyQgaayses",
  "key19": "5M1otuw6ewsJf5fexd7tNi4RsMwgxYcEx6MqhhJSXWv1KozTuDP4W9SMQmE1wonSvEKJo288hk3Fmtpk8ERuxcMe",
  "key20": "cxe8jN1vimov2maD7LbPZdR29u67AmWjSfVEg5Ubpo7uywT445W8UZveLUdDEa2CKPEpmd9Fb4qTSmKmMpuZ5KJ",
  "key21": "4hAiaKJVkKyj3gBJwoGevQaKurzHgaw5xyPuW45U116VGF8NTXyLXhopzZ5oVA7gasmZxQ9spxpb12VqLtbz9W5G",
  "key22": "39A8htKc99tCAHWXW3uzYsiLuqkjzww8P2LMVXq6jVcZtTSxByXRph5ut5KzLKSXcuy8c5qksXEG1n4F75cZp61d",
  "key23": "2YecykxHBjxFD9KXCTMD3rxdfU5eZzacQCk9Yo7Z9UV5vaBB2oPMMjNNWoQ8mF1rWUaLSBe3MDfmDUEb9QMhdC3p",
  "key24": "4MjsxrjFa8nz5JJbRZBSbRNEmoPi7z1LHqwsfaBziDxPooEU7cmRRQ5ntGnc7hzqdwW9tEAf7SN8iNU71MTECATN",
  "key25": "4SmFys4BbC2grz6V2Mzw6GMHUQLxpqTE9ER1XiQbpYkj2Pk48YL9HyX1NfEdA2PAfCn2GbkG3uTxkQGBxuHYoBwY",
  "key26": "23dwXrQTjspB32r1LPN41pcBSkERyiiadRNCRX3ku9zRY2ySoYg9twv6fsxNDfSFViD5Dgs5VVCDUmHTKzgtrmuL",
  "key27": "31AkyCCG2c1HqeszVny3mHBr7dNgZgkYwkmeiNFM1emuodCrVYH7ogvqNtyjYX2ayYR973iXaFhYgR4Waz6XMiBZ",
  "key28": "3yDdsgQQt6V1rVzG9BHYu2LF2BhuQDmZgpr8a91jf8CdtLXr6Vw73N8gHHPBAemaw39kBjTP783s2NLEW7qQvVyD",
  "key29": "2RK2bxPN3obwJHBz4vNsY3SDqVGcoKCt8Wvxttb4p4LgxRsLiZJcJ47n5W75JaknTqFMUBGxxzGJ717xT5Mn2h2Z",
  "key30": "2eTdrVNmS5z9mbppDiiqCCpruLCVrm3dTwMZNmko5CvP1hVvThPXmrqKLxQNQ3BQ2byDZWDGAigBBkjAuJnpLjTB",
  "key31": "4RqjqYfZTiGV7YkzuoxgHrcy7av4KGwZd4933hZR8VsdfTUTMa2vtJfUEtgNRotsEQPEn8ejrTvohxKGduo2oXft",
  "key32": "3UtbSrw9MMsTmb8oxdakRVJtiqWZqUzZ5MLykPSmh8fQs8842J9zMjqCtqZhYA8KZAQMQmLW3132f3LTovETAGDL",
  "key33": "4cngHUnifbZoWF74qL7c4yaqpwSWBwgvrLvUsC51ifJyczPhhT3Big5fWJq6g5zkrvWQeWCRcab8TREkgfTUvWEP"
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
