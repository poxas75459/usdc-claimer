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
    "5C4bMbybT9xuqocYV3gmpLUEY2JFBStbppDd63RpmWShHhAfWvGwtXnHeDu8m1ooN8r4bhMDwM66msj4TBVo2AV4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kjkx9wckwKWch2FCoyuZR5aqsvL7nP8bbqhkCveeiWSdjUWusZUWvCbvSfgMTRhP59NMbTaQo9RCQJLE2B2Rdak",
  "key1": "5yvu54q69K4DLv6SUdNwiKT225ouG5niby5hqKpaeEha1k4D7HpReVaU79ihgWAgdbcS6otg5a4eNVy46hR6Hnyr",
  "key2": "5Gz8HUvQ9ewB851ZTsthimnHZeUkwo7BWW2cSh6XrNczDYtJ82Z3hVUJ3wWBdba9xopKbDYhKc5MK7GBKrQaYxdh",
  "key3": "62AdTpvdgsGquXxmASpiqhqQKGXkQzgiyg2FKVmzMya23QYpVdy2S1y1FF213XVhHSUM3mtnMUC9RgzHxAe3CpF7",
  "key4": "49GhTxqg33Z2JHeGXMApvrSrCuunPJzET6ASKMXgEa9mQw2pv6x8VQsQnJamPRwnrzZ3ogmfnwnXeyWxWEUUgFrr",
  "key5": "3Vi6hvxmqsmQdornFijSxTsSro3LZ2CaCDfbezp5gCGRgJRpwbfPKEhBLoANPXGh2jRirhJj79suKxz7aSDJPWhu",
  "key6": "29bwfNe6Njact9DZe5o7KiNvBgLyoGkaTcVTocfuPRPinupn53B65JNoLsvWRAPKRbjFYqCfkf2LY5mEHH5HXfNQ",
  "key7": "4bkYBjg6q6eDAoVRpgU3RSGivYFbfp4vFP5hF21HBsRJy4ErCHUBBRim8P7GL4DQiHZqv2xQit8JkCXvf6RGD7FU",
  "key8": "AKczctQTzMVvtRRFH8N5DXzyxKTXNVKaSN1yHjCv39tjf1k3YSiy1f9XazNkQG7eUKtNZgS5tUVoKLS6dYkvArc",
  "key9": "4ixhCkbzPgLn5zBQgefBfo1pauVWvMyUwnHRxc48kQ2KpsHKQvdpHrHZuV6hbBBDjkQmuyyQDLfL71vAZT667aR1",
  "key10": "2QYTRznfzNW4iQXzWgtR47aM3qezVxFR7PmBbRXcJAz1vkgsPGFuXaBut9F6jZvJvrEwv7nUt12GsXzk4ezT3KQR",
  "key11": "sPgqyFksBUhGtWTcZfaF1UgeS1n35VBV2z51GPNhHDvQatCiY9AKsiL2bm9guU64bYFNuLnmZqHithAULypKkQX",
  "key12": "3fTw8NK6trVRdQAVfyy9jdTiX1SHwcrfUR9hKSe1VxbZRU3CD9U9yS5kvSxYvNEK5N1QVBAX5nNwhDzJ7xozfo3A",
  "key13": "2fLn3Gk1a1x77FzNsSNcD3Hv3XCZHRHN8ZkA6BDmmwJpTRhVjBFHVjvWrvWgZrTkn1iFBQE1jKTRBwfGEWr9D8Wm",
  "key14": "mSoJsEFEzAogKMm3gunQpyiQ5SrXBNpLhksJeE5PvjGuu1PXrZzv9yrqjHoyXxgxBstGjLzSxiGiSnTnpnMhL1y",
  "key15": "2HH6UVpzDsVcURLV6ZjgwqtvH5QCyUgPu4wCUhhRgXHCRXt6pwExCU3aXRX4g2XVktBZNjBHdDtxWHxMp2C61sWH",
  "key16": "2qoumyLdrNYEVXKfeFt5ETwsbUyrhJdxjYwYTgWqu6G2i8x4W2ph4WNQnciwpuJNGBdNxq1qZosUZ1uDE2yMuXqX",
  "key17": "thBZudrdDCp3mBycg3zovBGKxVuqpB6r43G4SuiDhoAAB8Q4T7HMA5swjpYwJFYMpEbRkLaxwChPEEZ6bZYChcf",
  "key18": "2iPEY1S1ES2iJmpJb51pVM1Geo6R3oKUU15fugqzXpSBu1RRgw8TMiY8e1eBd2unTeKuX3Koj7pKSGqs9Dv5xmLP",
  "key19": "kx7K2Lob5Yj9fE4XziPtH9FUJ48KKRdtESCb9LiVc5dA4aAcdCVTiYpsz4EviXMvXJgC8c3fWaTbb7DyfdHpycV",
  "key20": "bdVZGxQMr7dqxBqkc4bCg1xYzZHdtAhBDT8TtDXKU2Lpbt64hG4PkFAkvCMjLVimU56QeQDGc7k8DNUV8L6sXKA",
  "key21": "5hwywP8ytehgTwztgi7P6kMknqHaepXwt9wGQroSDMRrEcbxg1ugNWnDnm7SvSbrRxH46AuLPGdDv6kUngi7VbJ7",
  "key22": "23erSBJ12b3QAEv2AJHSGi6kpJtorR8dCQcseat5HMzqavhxQczJqEavdcX2xvX8msodcw3Tgvo81jNL8teu4mYJ",
  "key23": "4ASht9n5cgRU3aKBsuWLZFGMq3TDLos1VLkF2CKuba7ZwjudRXZDLUC85ncfbk365uPXFNKPzMC6ah8Rms33R9Zx",
  "key24": "5KJSjjB5CyGrspkkxGmq2uTJsXaa7z4dk9yqpZfykYG9YAQbLjc6VQpXTXXbUNwj9HpQmeVesr5qehzTvtUYuVXs"
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
