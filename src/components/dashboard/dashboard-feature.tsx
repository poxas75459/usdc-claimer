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
    "2F9BQDH35VjucCghCYqh38hbDjzyAbpgmT9tDig2cL4dfeF4GZG3hxvycfq8v8unkfu8qPh6HYeXKHzSRCWjfGL1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5utH8HRxnqDwQFb3xMyDiB7QG3UVHGkEP8wsnTHdjZFu7uiMyEBE5AKyjmtNbYKs15spjFpdNARm4Tef42cKvbNF",
  "key1": "42i1Wwp3QExpFmcPSg2mBuvi7hE1YTyoYGrKjuyAHtXRwtrioUmLTKTsneTRNiL38P7aPerDkagvgM57MSsCYTJ6",
  "key2": "LHDqZ1Xtjpg23TCozJRJyYzc5ruYzoNbziFJWmvRrKWmHAitnF9AZLYLWAC3HhhmiM75DJ4bbgXHxzFnV8pjBVQ",
  "key3": "2AhbqLfeQQAnMqz4xW3rndm9XCNKNyVVhJ23bpuzhsxC1qftDDzRGczkiSK8wiHZ5xHxCxGfLjMo7SvNxSBLzKb4",
  "key4": "5n3xNbH8YmfNBPhbb6WBdSygX4T9wySyTh21emV8gXKrhXieip2rx9xgbSeQgDpndnX7sctt8ghTxW8YDm6RvvGj",
  "key5": "5qCbJ9LKt9jVmnc1JdRvpTAUAMw7o8ZqTip58v4crg1ZBPNxwH7VNCufZXjopSCLBsccKsQNMBjFpuz4bhJ4M8me",
  "key6": "48HAegjMkwU6URCXP8t41a6YBs2KbZy1BTfZusE4FiGm345qUKKQXbDH3CvmkGiJm3s5x4qNW2su8EoKnEPwHjmA",
  "key7": "5fQmeWj3LQNk5CVa57fzvptf6HhZ5QP32ARDikCXyK5334Qxvz699x8M8AEUHfzmVYmn7sPZyLDHCKyNTv4V3jd7",
  "key8": "5hBQ8e3g5ZD4wwVGZ8mT8xq9UHjoSyQFvwohUnbtSd6uYCpb9xK9Xuo9bT5XM84F1mh7gJ3fnum6RXdN6N3qKjc8",
  "key9": "P5p1cGWkEEpmGHeFgBRJ7pKcykuAydYsvErYq9ThtyBrURC1EEEo6xnS2bfSdwv8dKccLTt2i2uxaN1HewMgdRN",
  "key10": "5XYMxLsWxH7pyz9EEqmZsdHpbHcRmiQX2zjSy6BPVPmD2qiKFvA1aHz8dnDBahPVgbYocAFsumsoWu8EFA8x5u8L",
  "key11": "5RgtdNLobmzgLjWWkNGaECp6hUSRoUZyVSmVSDzNzpKHU5tY9daNYGaMSeNiMCythY5oKJsqFRCxx78bdTXDRMh7",
  "key12": "5CvGsPfvVZv98QmqAvxqUz7PtX2V4UKXUK3axGth99VwCtGLE3n6CYxqWwcV3Gnj3UeprVC8VcyvwcFn3DGMCR8J",
  "key13": "5pPnxNBgxVgFrAFUgxmzRqmfsfgUHmmHcyYvDZxPHPfw4LJpneQLTCCftcuWmxFrZ6auSCzEvkEY8cfsKRaA1RWH",
  "key14": "2yU9sCKwgHwXRxrYFd55L3tzb6mSkquJnjn2iNDMchsZ27Yh9fyrcp3aMGFLDKon9oD6DfqMbz1aNY9WowaYZA1H",
  "key15": "M5qxgZW5oLJUpxWBr9rK88mcBwt4B4NEwCVnkrDJuuJGBYag9aVUz5XcwYMWjQie14BEf4oTLgqfeq39PbLbzAY",
  "key16": "HrPC3m1b7zkum1gwiTY4XsoYhoHqYKuzsvSxnAskDse7CSXg52hvEig3mpZj8c3Y3TR6utZTB31jhPbHuFLo2Mt",
  "key17": "3VMcKLvVMT2uXpHt21KEnfxKqHyUrdwzY7am3rN5X465XiR7GzUS8gTH8cuFqAZ15niUUEyxENJmWG4jg9yymCPZ",
  "key18": "4TQVHpnYXvVUHzQsSQ3GFJ17fwGAzPSSDbaTS4dxXXKAs2HkZ2Trgshn9RHxkms5LoKWFv6bXazYRVMMsUzHbYGz",
  "key19": "2w6f1Z5PLUYb7bRpWJW2KzDtRuXoqoVGWMnJ1TuGFgyjifqc72VVeLiE1ZPy5K39zLtcfygKUhierP8hFUri1AjK",
  "key20": "5KzEYtnwGipAKEbepAuH7nMuNxeWWj142wYGhyCfY4kkR9Mt7YX2VRHtisAX7UJBv2tNitzuDdfPuUfBq6MLV92Z",
  "key21": "3JaDjqA7YobTnjwtjXry7Qkt5rdDUx1QkHxaEsPv5YzLvBUp84typ5DvPSCrpWaDzrzKEPjrivknsiztvzNTMH3E",
  "key22": "3n2hy2vTH5kdass6xucjEmGCTG2jitecdQo6AhF2e76SyhQknkbsd7WqbYckaA38VM1HhBrHYxE7hZw3g3StCLgt",
  "key23": "8ryp68RXDGnrqexNWupaFHgbhrxoRAhB6Mw5C6eq9K133tVNoVXJqMpAGuo81ga6d6WHzJXi4mxpo9hUHDA9sEG",
  "key24": "2VdisFoJh4BhJCy1MnbSjagZQRxWvbR97wLQr1f7JXX3D6orPwRy6kMkvcgh1oWW3ECaeaFf3uGw2Wpi2vVwS3t",
  "key25": "2FAFKaWFwzy7FKaBhrb1x4ppie2bvwvbmDYfjXqvnHPmsTm7gZMy2T9gBgzt8FpjnLVT23L1iXygFFz3QZcsobLA",
  "key26": "2GpmhDyAa9SQwVt6sxLng5gjsjYTabEUxMWPNrXvMkFYk4TAZkL86Zgi8t4EeBMjWcpMCGLsFBrvPgmrnCDgmr77",
  "key27": "4m9j5wqBoyK1BDEB5HxQq9EzKEHdsRorKWNUFiSbLxEYGpcQfGB3y75171YGzDVppgkoHCawxuqMSVPVybginfxe",
  "key28": "3hKi9qgCggrdXzfGDXjNnucdwnNtzSdXdyYaBLNWnuDX816Q4fvhFEmS3MW52H7cGsFjQTgC7qrVSeLNE6N6HB37",
  "key29": "3JE1yCDhvgF7pQ8MUV1mUTTJ1ZVf12HXxUiTmzXdd8QeAySV8x2BDruqmBAQ9Az4FWeS6w5JrCs5YghyYNh6XPcn",
  "key30": "5gTo1P1CvyidukQGPm4PAG34Z5xjjP7jgd5TaHs378Vt6Xoq1FaCh1Js9W3Z5v9KDt6FoBaMKEG4PQ4GASz9GdhC"
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
