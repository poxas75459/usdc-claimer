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
    "3WhLqeP1qdVZ5toR87QYZ2jD35T1c9wzw5myjbt5r1i29hAmHZ5Xxx711L2TMPdwU8Y6X7YMfFUZFtsFUPgwc1bs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22HzC19Zm2AX9NsoefmRojgCVd1qXBQfZjTSTbRkMsAjjv82PhGUJtLkRGFg64oEujfQbbGtKtQLr2B6ReeC3BbU",
  "key1": "48FJotVm8QK117L8pAFjwb6YcuS1iABkGtKXupTsF2Qj6THMqKtyT4VnZj65iVCW75mm1Wvqz8CGzQBmTzoBm4yJ",
  "key2": "5mLyaTEy1Wvu4cFPihQ7y7CHonipMGhCVLmAZYpzG64DuygASwFwFzGP1b4g7VMw9FLP8FjXq2aJbmWzLNUc3oHm",
  "key3": "5kkv4TSip9WXn9zeVr6RitoeMxxa5KVjACZRGqZ2PA3aHD9tn79smSxLCRoB9ASwK8mQ5axVQCw8Y1JoqWiZmjuz",
  "key4": "aaoy8GctDyUNNBRNq4VCQkjduF6kUyqa8wuZCK3kmBAAtYfLyPCTq9bNENMM8d91pwp8K1jyR4RwfNnnqd6AoLG",
  "key5": "123W3H4EmEBjLifdjkPiTY9MasRFJcL7Kxdbc8VWdx67wmHmruU4ePCD7AJiJyirCo3Pd7DTWEegzwRwcvyhDdpG",
  "key6": "4gpCumFW1wf5GMwLud5vanLwLq1xEjfmyaa92qBoadP3VGBzjrZ4wFGEvDfgA4tNyBFYy6TKZAnLZ39E9hXhuUiR",
  "key7": "z8msb5uz64wrQujTTzfbnrQG5kAZ9KPjcf4pJBpfewDzQGdGUzrCmsnxjmuv6Jg6vcPHXSwvKMevCaWGJNq7tA2",
  "key8": "4iDDMqwfjQyqFxTsDzQTtMXAfJoC3xt5ViViV2dzfvfgQ5MJ2GVb1H2Jq5VFBPKdtUwnz5jwGZcSGz7JRQfgQLS2",
  "key9": "31tzzc5J7F1QH2h54aTzECoVW1WqSmukN7X72iU1Lq5fqPpY1W3CdAuhLzbN2zt1xwEQ8KywLZi3rfA3P9RG1exb",
  "key10": "3sqzXnDrVHn9PKZajzsgzidiuJD6eURRKk6GawF8hKnAM4N1Jo8rGGXXmz5FUJtHnUZzvKqGWVpU54mzsRFtaSUK",
  "key11": "5d1VotKwGjsxvStttE1tdTCMc1t9VZnAnjpuLmPVJKnd1CEWXwJwPLfLbYAjukbasQ7rBa49McHxdFpLXYc563Xg",
  "key12": "2ysuoBRnwksuhHLsArXHqA6DMEvtmp7Qxd1RWQQYqi3h5biBY4VFsn3xFcaaS8vwweUiGtRhcAGuqLVN6QLMQLwK",
  "key13": "5Pg1pgtF9wU6VgMN45Sdc7816ixqgeiF2WnxpTjWGosu8dUgPPsrDg6bWExKBW5PS8pNWPtchdihSGHr1ND8rosN",
  "key14": "4QSZmnqYM9qWV5Wnjw7fFvB7yAVpqDAc7oU3RMoBmov2nkS1Rmow8A4AKLQziXW18S6HNw6r4gZtt6Lw7r4tuN18",
  "key15": "3m5JQRnpawFXupyPXNHgoAi6XgU6cNvivSPwKoscboMCDEzXaGBPswYhQto8a5ZrFQwdT21KQvkZDFRaBr11PqCF",
  "key16": "jM1PG3Zu2R3qvDCkf3VToBCUjrCvQ8D9qw8bxqWUaeibgh8iamJUpG1n5VTdVHSTpqzUvwXZ2HWmjhrowH2j5JT",
  "key17": "GWcoEkkSPAPRj8wog9Q1MD7yt5wqpeThpdkpqQKj3DYMPLXcqFSedibrLj9kGydF11oqFVywHzm8Xt8ZVsr17ny",
  "key18": "4262uKKR2tpZqj6NnkwGtjJAy2UknJtFbHpctDouL6fVSuZ149LKohWD6szZaBV32jjr2KofwafpWBf3oJ4joBdS",
  "key19": "5dHyM7xUHRST6rkQfeHNMWKit66BgtvJC2vUoxrS5j6TjaPkvai2dTj7swyCVQZi3bQKuxSykKauvSyCvkTK4h4k",
  "key20": "5EL1b8hpmeUcgpdnvkqELhVEfEzgG6eAzLkaTD8SgPFWEzUHNEdpte87tUWbzZyuybtf4p24eeix4xKojyVvYxzE",
  "key21": "CED2JXm4ywcrqjvTUCxoHKASZqRNSPAnVizcDQJJfwpaKZ9gbgVthfdUKSS3MkuXokBJ1BHFx1RQWgLtftPmBVo",
  "key22": "3jbi8Adkz3skJLxPTfGas8khjWmpsou7KhfqoRhvA8SkVxuZ3J3Xz8pqyyginZnFgWP46pxnnZEbZzXwwzuSz7GD",
  "key23": "61UYGtgHjsFwJumxuM37JbzgE8PVGXRCEsJPuXG6oLS4UH14yn5PwvJKYdnSBkxGkAhmKYUZmKcrx2nAq9crKFTY",
  "key24": "2dXR4kJ7oTdm1yviEgJMYnsvxjng4tMXHx9MUuVgLMWEwkzunocZ1BcQNCfAVsqrvApssuYCedbMoRC2TRRkV6ob",
  "key25": "2AEb71G9UHbPCm879jEzta8NXEMhcrpffCAdgKRCdbrMixi3YjDN9nXocfog8zKYVGUbtQDjFjXpiuFDMA6PNqrj",
  "key26": "5aFXkWjhp6qDVufpwKHfow94yeLr9bW4HtoZjuY4g1ugHz7XKsj1Mvev85GXftWAqTMozo2rXDUN5uMAJjqQH81H",
  "key27": "5UTvE4h7E8SPwfEoSnBARV9p7qVBhVHUHwPUzxYj3f2HWeacHWxP8hB1878ySPX4Y4hWyyvTP6hcz4iC7bzh4NQw",
  "key28": "3Fwo6m5yVfKU1bAHqpYPw3LUSQyqVRz8BVDUiTNzj2xF1W8MxqdDf9WW1Z9Ku6BCFHJwwsLLp4NnmNLTM8HFo3Zm",
  "key29": "3WY6fErdA7uJJDu9htwCH8dzYcgqqMpCNwdBcJtz9j6fBiP5XTRubfrar9DQMD86iBge8ZKEHv7gcbC7AYT5cVoL"
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
