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
    "2rqjuxcESGK4BssQeK2a58rY3yyJfUxaGfPKEn6L48tW196bGa7vQUr4GCSiSv4xazCCCer55YtLcEz4egxWuscr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UyPNuFdtVCKiwdukXuo3ZeH4DvCJapKe2ZFdgiNhDqmuz88SreZT4Jntf5aoHofLiBni15RTaLcLspDHeu1Gdk9",
  "key1": "4ifbY26h32ra7sSmTAajM8KLyZxshXfzq3us56EbTgSctESharRETS6W8qCM4QvELU9K5j861YToUQE2og4NjvAp",
  "key2": "LYMAoVkoLcwx9RiLZ7L3Y8h6dyTMG9Mx3zEof1nxufwegW5b9MDq7ZDtc1z7tBWBuhYknofVq842nW8WXGJwSQF",
  "key3": "42wCE5UTx55WQsDiR34jBaCxD7AvSLLtxiGkMRgMnW2fuWTuhBZ2FucjDAQapiE6VauRfgmnsr7Nx23ABuf22rf6",
  "key4": "5J9jJTcqgTr2TuBoitmxgBLBFxjsr4hJuWZgZvN1ebYFGHuKFb9R9jBzYVY2LpRzM8Sm3XaQ7c6jgV5ENY7sF5r4",
  "key5": "3uhhijaUVrpwvzJ6zcvW9vU1oLm5mKyqwQrgBHDUi5iHUNs9ZwH2ZULnERgaMtc7X8GL24GoYVMeRMnRdFfuzk1Z",
  "key6": "2KpQyGB3LuzJvwNwPaDSwoYtJqtDJ9LiTvxfppRLfrVjhMWqgJ9SA1K4TtRsMkrU4m7FsAVhCEcpgNYRBh4wBdV8",
  "key7": "5j3vf8z4zndxiQYzNote44bqzdvhnU493FBkJiZwR13ZQmsRTgPXUYNzJNy8bd6ysrA9vJiQZ7y4k4K5s4U5zawM",
  "key8": "3sGWuSwfxCCaw6ADfhs4uhJq2A4YWFFxbFjsBQk4DuG2ysWAFfkfTUSkcRp4UVRN865y1cTqosxkPuA7eRbzVitS",
  "key9": "4jYa9Kms2LQTimpp45pEuak1Uby9BPh4sg36BX6dccgAZPxz3FsWSa1pwfUsFfS5kzaVo2sWB64ygZs2ztBXgwLP",
  "key10": "5qqgHie64ah6rHC6qazMmL2ruExWS9H6T6uVheyb4WSbbbkmUSDDgr3FQ34TqzGk5VVW9tP5o8V1jDTHr3bNTD8v",
  "key11": "4EEjcLfGZz8N7Jap858eeknbverPkqRKJ8iudnr5inNvtwdFqfaAUxXgZXVXg1Yw5QijF7bj1GRittSRsiTFiqJ1",
  "key12": "5dR29ign32RsVibQgjkdNdVcMMKCyj2H2smYwtMQP1gKcRYcbmpiZ12brrW58yFADyewowrB5sHYuabPBqAC8Gxk",
  "key13": "3KaA6PCTdqP8LVDRQmApKMK2fFQkNr6fSCxybLHKWeTG4DTbVhaPCt5Ww8tVbvf7MknDL3qJCKvehTNySjgHRQQh",
  "key14": "5SBqf3Q4JfJJyxRVXXP5D8DpzGzRhh5CPWjRxDijqS4B8SU3BRxd8avoHdcViKzKGw7BVZLYq6uEHM13vLizzJx2",
  "key15": "2UESeAiQcmNmDCULhuS67Yxbf9vEM9c88GZ6ts3aomj43LGb1a1AxpQ8pxjvsZi3MjyiuL3wgB8tjwgwxHmwiZTE",
  "key16": "2Mo6AhmDjhqKoSHxjDAzhKJLTFbpXaNat9576gN4v5NQFZ2CWPhwxLf1LVsETBsUd5GD9SahNb1YwH5241tjHxvx",
  "key17": "4gvjMaLr3xvZh1nM3mGkwnZCU6qqU5N84TwaP1g9cmVqQhVWW2o2zWK7Yg67Si5azhi3mEDMLJfx5ji2L2PwxvUf",
  "key18": "4t1bpyzLcsozi7XAb3K7593G3Tc7HasKkrWYn574rY8wQNc8MPMa9deDMVuiNE2Se77KnAJEhzkzxypvDw4wMzLR",
  "key19": "4X4wvfEs8sn97tSJcKxsYjWQKhMji8SZeV8zkWLp6jyadb2F88nHnBfrCQXK5jnvNTYttLnZ1aVybNAnvudFKj9C",
  "key20": "4vYUDw767qV1aR4fVXCkNMvM3dS29jKHu56SLz9sspEtJA8gJcURkdAGFPe2ND1446jo715UzWG72EkZR7DJpBw1",
  "key21": "3jsWu2fgVWYME2iKAzQ2JyQGFstE3DDJp5HnS4316cDafFcy5K5EYwH3B9VYhuwG2rbw6FeFAKKPLDiHbbtkhVMA",
  "key22": "T7u31jAZ8rZCW6sN5Q9SGFenwZD4Lz2Q17z5Ycog8owGuBd1ttk2k7Tx3QwcuRQZtAMFkzYgN9ffXMo2aHrHbqM",
  "key23": "3PKMP5sJBJG2DfwZQL14gPEsfu99VJ1dsujZfFbnpk2pzAp4vUHcCAYqJF4grsxCkEdbaSJjjrfy2v4yLCp5XPZL",
  "key24": "VKBy3yqvqFS8WHZrH8EXHwmCZPfW3kADtS7beQpoWmKPuXgAFyACLd9G7trxYd5WzpGsmrz6GMxgfBXW2riiSs5",
  "key25": "634BZwSru4rsmDMr8THSBtkMEhDDLd5ndPPoqzkFcDUkgHCMCbqEEzhDaLHGgwLWSWRBoxRxzVhLBZerteeHZmmY",
  "key26": "5WD9YFUD21BeRazK7kAuDX1KSW3kbdXKk3WWhJYCq3uv5MfDw4xcVKQFTm5tbbKVMsqZdgvtJijK5zRgYtyW4Qj1",
  "key27": "3jyiXq8shFxtHMvZ3a3ebdYQtS8NDV78vXTH3sUzW7NHYG9Eg566VtwJC9BjkrTYePEp9LtECU3Tzmh77NmtdzK8",
  "key28": "3fmYpWWWqEkdKXKKhU6TMvGHLzZDAFYD4aDYzRw4W1qBHcheTeNP5RRm6hXYRQFxveE34KXajNh3PDwEyNHFLLTQ",
  "key29": "rvpZf87sJUNB4V2UFUpNEEV4rsmZyBhCNoF8iuAGc5SD3sdQBe22C9pS5Gb2maG3pwuQeWQ6q9PmFgXVzV1WnFW",
  "key30": "3qSLjqE76wnejveTs8jMeifiLtE8KE1mGi4hcKa89LiQ9NCB3RwnwF4FdSGe62PefnZmr4w9sURYZfqscF4oAUpo",
  "key31": "42aENikC1yEx9yPusDrGyXS3d5CixMRzfUJPuE1UqwsK7VbRqaagfoTkojNXg7X1Rhge3m6g4utWHMiAxiqQq5n8",
  "key32": "4bTzstyBpoBAtjYKg7w8cvxXdCDYKWgF45VsbxyzipD4BBNM5sR72dB8zU1Qp4StpCKHs3hX5MKtDp5Zdi4pZia3",
  "key33": "8wMzegvTQnV5Cr6voNSbad8a42qXttNNQMW5docDWR9ScqFU8EwLaFkpEkHKUPm3FsYw2VkTqz78vGXpFCrM1i4",
  "key34": "2wN2o4cBpVLMfkukNo8mBh6RorwVDxVdUPVifmW3MQWncraxMZrHonm7ywswRXFofMkCL4KJ3cVDKUyueaWgzrZC",
  "key35": "4W5xMB2dcTMuauDZEJ7WAVqu8YzT8hbPjsftwcpJj2h1fGQt8a2DfwWD89eitJiCj8JjyRbAaT9hgS9PYTt128xC"
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
