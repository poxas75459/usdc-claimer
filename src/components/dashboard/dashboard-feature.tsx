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
    "4ztTpCqya8Tpwgiz6f4PA94NiF2efqLeKmEYoaPv2YFN9rhrrgDwfSWHHyA8WmieKSgpZgH8RNEW4KWH767NUTWL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PH9xUfi3C6iQVZQxcEspES2jeBUziWgp7sG2F6GsnEXjqSgVE2L4CoDo4drkfjV4ygUq2Gze88kNQaZ7uwx9oSu",
  "key1": "61QdAMRb46sJTxyUb3nkvwq12LvtxVhkBWgwL5aHFCCMaLkvD2LajGmhKiDEakAkfy68v3dDP3VxYh5H62tb2nfr",
  "key2": "5HTpf4NzcQL3jvXEwr18SZkyv8f4r4uHass2TSXCFgAU3DAenrSAASZAztzZKzJ8skL3fcnatKNrGeY3uKTn7f2f",
  "key3": "2QfvdhWYTTGr5esy4Fta8zWfvYLw5HmbT73jkG66dKWG123YKrGjSiQdBhiBNqYsSWLkBFJdq2Pvr4QApBM2Xtp6",
  "key4": "2kxsvGQCa2reXKapzPyARtCF8ZT5pPmfLMuuedxUDu24gRvRhaHDPQCuCzxcVLzPzhENeVLMspiRuzzn11KahJXk",
  "key5": "h1K52typaVrso22QriVAfSb7MxaKisukmSZMi7NHZTEDjLn4GLVTfR7AricNdpedz8aS4SDitRZKoGS9oSQYki1",
  "key6": "4sFmqkCtqM4544b9x4dL8fqBqkUT6DtZDvFeypdM2GcWPvPXfko5HgmaHRbBZckgLZAuSUErs3jCU9fvVmuubwqj",
  "key7": "5i8HrnfahuCL1kqDzxafzoz1P9Cidv4UJWguRnArwVFK36wX1hs6onVdiSUfFmVX812uah1QT2TxZJ8voqKZpGvV",
  "key8": "5ncBn3PC16A9R42xkPpPrLbQ59jdqrRyD6CB4LmLjUQtgs3GMKv9PaaxycKqM8DGQoZNTdpmm6UfnnRJyynduUqK",
  "key9": "yi25m1gjwMAetTgbnwEibHfw6h8H8Qk62BPDT9NeRQ7UjTs4VHJNi54ShQd2FPfMrKiPPSTDaN48v7KF59kvJBF",
  "key10": "4Xy2vc674f4ME76SdmhrxZGsj1YTaC3RpgG7KwkRkPqXMZ46RB2CzbUkyeeYz92BBBzYE1WDdoX7cyQq3V3rt8jn",
  "key11": "3XH3nqdLb7Xib1cNekQT49EqpSsNuE8YK9mMuGFVSBsd2qRTwzRrvXkbQU83jKHHwyJhmc5PvgG3Tgub7WpSN7S1",
  "key12": "CRYtaT3X1uNvedSXHNQUfCdgZ8EvvGveqUVSGX4p2yQ3Ucjrc5vvUBiei7G7QCDMSBRwnj3Y5cEyuKTnk4cp6sj",
  "key13": "4TozB1LgtVTXrFJM99ETTBz4GzKXhbX2LeXKAJ2VtnvmbCHQ6rVvhQt6RNg8ifjXjY7TeenJQDNzBFLQQmnRuL7z",
  "key14": "3rmP1PiCjULv3Sr9igFG74s17h2tkctAzPr4gaiMkrJnCwZWkU7QHampKxHjq4xYaLxgEMevo5kWggJ7StzBqZu4",
  "key15": "3XhUiQm6DucaCC9VBUfGq89LzfB4WNoaz8EUeH3PLC2fQHHCw2ZdWGpBXZX4xvZY7MJA5oKdRiNEU3rzgSQLWoet",
  "key16": "4BT9VYpHvoWz9hiWtBKzvtBBqKLtoeV9bN4ABq7yjeTVqLuNEgL1E8ZtV3m2G9WQfPYEYihS2AsRsNZCtSJ4CtUx",
  "key17": "41Ct574T8o9dVsPDGzv4Mw2b66Psp3GyH1rubRggfzBaSftRoT37tBQ9c9Ji5ZZZzqSKHFBuUkJK1zMSG2DFS9n6",
  "key18": "66bHz7dqF7w2U3Y58UXdE5eS3sBnqZckCiRoruGtuyNPWJug8aansPFosJVKiv7A3uBUyxdzCrQ1Kg4v824pXLy7",
  "key19": "5zraRiTJKDCrD2w1DKX1rD1boQd45ztuNQneXssJhET4wRPrXasSJdb89G3pxigXS3fnwu5SswoUgnMJUK1rM17y",
  "key20": "66iiTF5QadPrEjekFy1rRWJegdV1GV2S9K5BLoNwzbayAgVdw1rDZJgdyYpddpyY3ZLRFUSJvvtbUGgaHFm3mDMB",
  "key21": "212YL9Zn9utQkAkQhabnf3LcFbKMDdno9iBuKU3R3chjSChihaoFpYJE4nhzX7ELieCr7T74MRV8N5EfK6emnVKu",
  "key22": "2Csqcb822NBqbgpNLszbBoHtbTqPUq4SRLGEfdvc9bSc3pzSEsZK2jwMbAAbgbqHPdGWUB8LCQmr1ga3TXmQTvxD",
  "key23": "33fW5PWqy21zp1wjfNWtVoNUVrMkcgNqBRKYZgTwfUxuSUzQEtPSV5wDERpBRsmyteYUXL1Rot2HRQCMQ5mB1XZr",
  "key24": "5e31pp48JRk7AFKboBQKzMxVTi4PvhXhrpZjxXTk5MbYan62XaAs2GjVR8m3E8XbahRNk3GNt3y7wype2w8UqNXQ",
  "key25": "4SWSsmr1Vx5d5rDHxDVJUfQ5eR79YEwnztZMvLmuYvF7hZvAyy22v2QUoQxdxjNm5Zrfz2t145dfxMb69dn9TT5b",
  "key26": "4a5suae6apSnjpTmqfLEAZvrwWKH5k9Lve7r7EEeiyZ1GX6eBvkVJSCqrx5jTKwKZYtwFPcNcrpKHjv69Dau3o2c",
  "key27": "2j1JJojGXSXD4rvrZdznEFQqUPm7cM2xCA9qKDyvndTCh1Lwp7EsQj36mDY8cUa1WsjW5nZLaC9vzivdWHmc53ZV",
  "key28": "3o5gaoiPDru4Es1ba668NFtU6RBdbPKiNuiBPgTJEdXzYLjsYFN2v8CMuUMH21bKs5F5ASnVxocUpKYmEcmkt5Y9",
  "key29": "2Gfmmw85qQwGHTS4rEyqZVy1ej29possWH7Dv419wrjDSH6teQConmCmZd8EjKbRkLhUDJJYnugdpwLAYsNDxmyH",
  "key30": "5xUhDzsFGMcNT9W1QH97RPx4kijdY25byUTVPLQDeUrNAA1i7XEGUSpqJ8uubR6fVVTgL9yb2GecELdduyiqRsVZ",
  "key31": "fVjQ37BxiBfjF7pa2Nqc4WQu91AFSF7YpPhDntdoMVfkiWF7BP7RJNPffaWJExHKx28K1yGgWSz3FbyJq5Fqtyn",
  "key32": "ast5Lk633DnimdQ6245FkwEGitxP62zRXSievEBSMT6FuwNFc4GfLNnjddgezthDokbPB8AyQRqntnpkreSu8c7",
  "key33": "4nck9kMBePEfmqbh2vdK7Yn92bGmXFBxVvYbUpVFAzpLRRgYFu3tQ3ZiBPn2mDy348iAUVhheSFir7sxXQRLasF1",
  "key34": "53gZj79FCRQgkQN435mosgVLf2ZQrKPeoskui7QHG7hztPd5XPTv7xVLii23FUBV5Ld8E6B85V4Q3TZyrkNMETuT",
  "key35": "21exdFJxTJLbAMUeUuSaRuVMFh3BGginjHmLnQmfhaEL9yu771WYF1qnDbRtKLaQ6duWC9mAESCXbvggvXuy6sxa",
  "key36": "3SibFegzssEk6oK6MiiRHenGK2Dae2ZPSMXvMVztJZdyXzf3zH8voeFoqyJLe7UFnqvn5ZJwN28hqdSCNxK6cr1B",
  "key37": "3Soy28jcpDo1nBYtRZSWnMZ928cduvq5HCqj7qGwCVDKAB1a68tvTFefGeeKkwtHqfw7P8FNSkkkNzzRd2PVVDFc",
  "key38": "5j2FvENqkEV9Mw421PTuA5d8osC6gBXjGzh9tBv9SAtew9MziMyPomZctcipvL6r3pGc1gajm9kRwXRsr8eB75Nk",
  "key39": "MuDtcfvk1ivikGbr4SXyvCQhifCYDzPJd6LhsYuFbMsg8VqcJhrpB2c1rnurC8h6xoEaMzwx7N5x8iAGEKLzF7F",
  "key40": "5KoirZUQaPcc6eKwH1WYAmyrS28wzSoMEbbCRFopCSVAFVpP8WqhRq59ZD8ubCyRcA2e7SXSMSQsesEP6RmW45iD",
  "key41": "39eUyiSrmGQRh9GxJ48fP53bh15xHfiWwumjibErypyuuxUecGgafczrxMA9xuBdrshyHtRxZnFmh868SrNTaiPy",
  "key42": "54UZjfj6pPQRXBtEKMuMXLwS4bNBYsJGT6FGnrPNvnfzjauLhhr2pEi8XbN8mZznra556xidnsqTYRJbRrXeMUrX",
  "key43": "qBbk1qJJ17aQKUdzwrnZudazPxdHbjdovRyhmrvSSUs4CJEaiEaKw9PALJzxntfso8oYQsfSWdSofd5iGiw71kv"
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
