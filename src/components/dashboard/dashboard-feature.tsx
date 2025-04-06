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
    "bzgT7V8WRyDt1KLWp5PP8NhPbmtxgkSSQy7FDbBeSq1HakwBWMevcbKyYkHRKpHxTBTpegjQuHdYK6cvoAFqbNE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YYyDaEyadaftGQqVPfXmMvy4WSmG2YSJ3F92329vaDAeBkL7kKRCZkP5pWe4t8n6kDXiWjikiyNuMJfJHpt1uhz",
  "key1": "37zaeXekxF7e5QYgPWBKNxhFFBw8t8DdMUJvCfe44jDkwmkxBV3yNRrnpZPy2JHUtGBbJ3LYYu2gGFWcX2Haw9oP",
  "key2": "wfew2qF516hTo1fKRt28fAY6U4q7TdzEqD13NMAa9rvnRjcfYFmxdrDJuTwrJNK3hFhCbj5kEahwSBS1mVHFNXC",
  "key3": "4gSxe9L7gfx26aXCqE9q4uMna3ouR5PueL3H8yhGJv9iBvwY5Xpugxt5pd3f2RRpZnymsKDVsCXgsyLg4P4cy36k",
  "key4": "454FekEt5VZoT9ZkV4mkyAD3hL28k2nbupYp18HZEoWBCtiKV5Q4TK4hZNZWPj8TSYvVmqssQRPfcKSBC1aTLwd3",
  "key5": "35VC2bcXdn147UsULnJVSUhi8ymPVCPijUBPose3LLP3C3koD2NNo1pE1THu6qSZpZnSMe7pYH4W4uoEDGNxNJq4",
  "key6": "5J7hojce9azHAxPKy8UcAHfj1D1mDvKbSCQELy79FHX4KQHpCvajnPZDLaxFDcrjGRTPS4q5HA1MuDgRbxCdW9kt",
  "key7": "4akiC9u3YyaWrsqjig9jXPcGsv6wcoeTijhKJksrW5GHfXdarbnJtA5a9H2Hfn8ombeWt9J6aAzQfZ5ri4A7huU4",
  "key8": "5TQNTQbTfE7VTMzm1UT88pvG6nef5Z7KNvnmTsNUL4LbCpJLCr7Z6aaTkspFraSTp4jgJyjAJjiFv5d2sQAnzben",
  "key9": "3jSxK1ii11HNe8rYH5EuHokvypbahMGVNW4rd9hnMetTF2cATRAzrJvrnN8KSSrrq5zyw5Tj4Am1fP7q7e7gTKgm",
  "key10": "3tFa8ncQ4fxRFES5ZtY1vqiYhn4UfBCAiXh6bdXL5Qh8WKyyPRc1dWXwcZRJqM3zn8fU69PXR6VTq8LpCvcPX2Vf",
  "key11": "5RrnjDgDFb6gN9mUYB9Mjouk5KwKLE66w2jn2Moh8wtuDStcy3N3TET5Y9GLJqxf4Jzssk5LbWEP6fcNfUaL2c7Z",
  "key12": "MFRwKTMV9t4orc4Ua7fiEMUBjk2ouPQvCBgufJpZ22qHs36gsdJoqy1S238yt8C1pBM7yQvgJFv75SPF2jSpk5b",
  "key13": "4EJXEGDiB7dBVTJdnH76dZcxkhbVSdf62E3oGBYFFj3uHcy9DQnfjddjCJx4b521nn234pQGiSUDhexuJAmntEqV",
  "key14": "5gnnUGJLHBzN3owzAVcxSR7YKaxrC35XFRPtrgVjqDb5ANpN8MRGxifNXEkqvsQ1RNnSEEraGPiYd2rWhgz1EMz5",
  "key15": "3YczheeyQLrUYz2kvBxVXV1za4u8gCZutGth2bW1aYEWmxZmxbrgTX3LvdqhuwsCqjsLbbLn7op8dRhkth2Qu8SY",
  "key16": "2e95DiwDjmS9LmUu5gueBBL7LFWY6ScVPMWba2eywjhhP5Ks4uxegctEd4vKXfcx42ZsUY1PqF4shU7Y8gtLUKR9",
  "key17": "4vt5ZbQkMJayc4TDgJE4kgZzRyQvDQQLgEcX9rz3joCF6E8ymJvsnSmwJfKi9FVze1ozEUAxbvKEck97yY882Bes",
  "key18": "4VJbvUszNJqwC1ZD5mub4uqS2FopN3BTBp726eBX6t5MNybhLsHKnj2fGRA4niKngiyU4N4H6tE2vrZiJCL5aqoz",
  "key19": "4DwDs98DxvQtZLt71HJ793mptf47AvW7wPyzrk18fcL188JFyX5ifiVti8WVthfu6SdVrRbuUk8CAzeyMBG7S99i",
  "key20": "3EmaP1xZmFfm9otQFnRY6DBt9WeNu19QDgJFzR2UrV4p9TLhf9eQPT19xmD9yp4ipY8gJHQMTgS6cMGeH3k2sm21",
  "key21": "iFwr2ztKNrRvUHHj6Cj2qcW6d8w3qB4SND9zMMe5xSud3RiDmc4yQKJvCJUMZ2Kr2P8X7ZYjVAWgy7tFmiXF8EG",
  "key22": "3WNefCtY7XEMsCQQdMomCGyAcWQiX1VMZkLNBhZSXkRbrXsFBMg1NPxnDiMYPKZA9xQt3xkpjZVLQz3bureRuEKd",
  "key23": "3RnTCtMkyNr12oU76mDjFBXYkHzTXYPa7T1EGgKFE6gCcLu692HRYBcpkuZfEtAXmj6mAXgmGKwYuorW6brDkL7x",
  "key24": "4rHzF7UvwQyz28oudWCPRjPx7zrY8e4GuCAgYEPW6kMSLtqdyzxEXehrMihaT8CyAMigCfSJSoBV5T69HrBi6noC",
  "key25": "4QMtn4KtnujygiWUNTxYi5yncVKiXrxfrrhCCtzY33pmPTBN928KW8VFTE3cAnJ2V6srabPbW1Qv8oKZbGMZBtTv",
  "key26": "2PNbLNspqn5QU8tEtdjYbd5Q3jSyWcQThHAMLHm1DaEcX12kYyaZ2cJfBXuJivzVJ8oruJ1XUea5VzLd59Nutn2r",
  "key27": "4pnvd7PXrhGLEcpdnZZQu2wULd9BZwRrHEg3umAEGq8BJeSNxrevw6CZiqd5n4iey99ELxT3sDXXLwQAbStCrZr9",
  "key28": "2eWGGNzR8SkBBr3CJgCxbyHkrYo2MoULGEeJyL9zefQSZEvvsQKtsqbiGxqjX6Kfq3nj5UFKtYneWTbFS22MTFen",
  "key29": "3CEKXLr3Dc3Zk6zr9xWQk9NT84u4qkyJCCxYiXx7RUjU3yRSYnDGDFqkZPnskKBqeVDHFT7nDqDtfCMuajSdatcW"
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
