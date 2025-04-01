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
    "4cbgV4fy6GQPJqaBdrJfHuqqL9L43fMa1VtuJm8biMioPdWPzgAd478fd1p2J33ryXdFDEjjYpbih6NQYcUSiV2c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SKfiQgLmqqxzEtbQAnM3SkM2dPXvP24vLniWfmTAdyCcejrcg3tHfGaa4aLVSqGN4oSjSpbr6swjMgcKMqNaAqL",
  "key1": "2WSMt8ng3DmrDa2ABsV35zuiXqEH3B2js5hpkpAD1izyCDapuUJsHk63gn4ahijEfRyV9HWp9jbxa1bjZqQCQJyz",
  "key2": "2sRD9U2R2SQFHHxz94r4cuB2gofaqMdy56bbUJBZrwathEeDSfEJ5aWMFsNV4mcoC1QzTAbxEtLWkeRM9rviurAZ",
  "key3": "3pY3PaCFB1rjTTzNMFTiAbfZWcjHtrXgfQ1ny51PZaJ9kY9eUkdgMQo1rTkwnTAdLPX5C6ppCCuQttfTheQA9Wsg",
  "key4": "5VrigPm4H2zPYgtmyCwNqwCEWTsYRUMcNoaQeiRwrwYpxeRQSBmrQFkueoSNQSKoHRtnzKnxNhaoeraRAYLumMFn",
  "key5": "5RG7NCLnrR3h4nKszukSAifC1GsYbkDMPQCEaoqik7CSfK41D3PkDpWniMrHoRuae2hycoBAGxMfU4wmKt2cCZ2w",
  "key6": "5EZNn4ySnYDue5xA81JdADZbUpLqgnjFV2Vc2qsbRE1CFCkUkpW7Sf8sFBPbyoQwMZvxvmT7xk888NnwjpKJifur",
  "key7": "utoenvZjYRJVG1Ao72wkHWbLk2DqYuThtQ5iUrvD5UwBpygCBsSn522Z3mxRGUUTaaW9Z6hbE1DMNGQqYqvwPZr",
  "key8": "57LENaLCvibrijouWfnRX5v7qY8qdGbSdVx3967NEgjx5nGDHQNbK9FB54hoBefW2xpQDDjQtKASMzoAQCtfJhkC",
  "key9": "4E4z4zZ31co5qcK2ewFs5MPHEkVqvp65ZCzi9rYg6EjaLTFXmLbnWkzyoXWm5S3Y5W84ZBt4uVXrY1XrCPQWYKpi",
  "key10": "2L5ZioCuzMeYRYTgodzvgvRhCLCtAkQRfQjpzw2XyagPGNZu5uxoFTvKHjrModvtRoNfBmmZ41xgQtjVkiGtgEZM",
  "key11": "4B2L6YnSSGjDb1piG2mXEgMPakGAxYHPRr6YLHaepsqPG6yCZb9g8qXKVLNVuw5tqjaEc2BpfQePGHrfXep1hudU",
  "key12": "5C2LfYjwQZw9FBK1cxeZvYV6pnfKLCgvoouvPxoZ6xfRcMG9j6mp6BVGq15zeqwv9ivHW9Xsm73YcLWPLBWF6njq",
  "key13": "4oLVYrEdX7UUzUzmBgJ7myFxohRp797X4nJGzW8FeaypuuSUps4BqW1eSTyZfcJxHikD9tNxE3yChdo77Py43wLC",
  "key14": "5c38nR9da5pu1YxfS1R5Ypc2KRGR9LJxXfVd23TZEipQGJzipjNpF1RyGvFwjBSBb7FH6VY26YJh4d8KCZbvesVE",
  "key15": "3xauZFkkVHTv438KahAMFUGAejf9j9FALgkjc4dnXmxt8D39hzVBFWuwwkmN3FhQzoUmRLaS4tbhTZcZAMaqTfmY",
  "key16": "51FA5tnxrLXx7ioZ8EYCY1e4y9freokQvuqLqhpXniX2wJdvvLwuG31jrw57BgRFvo2Gb97jmQnUXrQTtGo2jmez",
  "key17": "2xZQkwRq7iJgSCb3tY3J3QFVPMxLbQcT4oynTaZ7fBC2kyyCBtPx7futtC2gQfFet8wSRSjc2MPUteGgSsMRWkAy",
  "key18": "5v7pcMNaku8vyX4LSonphy4EZnWJnrKYKkfXh3KTMAFueNhYC6kKXTjjARHnBiK71v7hdxkPcohW8FaS6c5njFdt",
  "key19": "3NxLjCgmvM2Vkwni6cysToFmqQXYKHzCa4Y1UtXHufUY7kFAvaov7kesv1HPfGsobSMgPmNWGPav3P696KWjNdCg",
  "key20": "3CWhDo2dF9B5CZKg2yQm2TYHReFjvhqFqn1QonX1fsgVhBzChtbyBqnmFNLRdRjGPp3QvsVWHL93BTTGr6Xdpsr2",
  "key21": "3D1HfoZLt8vAekNuT3ddnyKWX9AWzwsC7dPNCUbMq1B29FSbSKWPdG14b5Ab8vXH5pU4wQyfssmqPVyee58x34ni",
  "key22": "sx4WeH1n3rMDHcViiskXhPmy8vjBNmgpL5rFb55mg5WzzdUbdDVt8Jko9oTVsGoQLN2UVD8H8dmyvETUuPYJSCJ",
  "key23": "4eHyUbfr1HDpwGdnJQVVEQs4hhdPKywvypnfgEEfoeYRb2ieYJppKtuP7W8ns9QwdjoT2GT25QU8KtiRoZ1HSKjt",
  "key24": "52emWdAGxTP9oSDQsSyosMJ7esj84CCPwT3FvZapfCVHnkf3a8WMGZmAoxUALvV9HCHcQ4q1hGKA5UzsGYSM43xB",
  "key25": "5Kt9W3jxMSuW6443wGRn3u2GfyXXaghZEC6aeJzgqCTXxbtesDDRLs5raKe15WBYd4tixPsfiJbwy9d6wE3JounU",
  "key26": "3jH8hA2Vnen1UWGPDV2LFMSivKjfMAzi1f5C3gEgH5soJvL53Y1dJ7CFYKD9PMNQtinBgdBFtLg6UBdH5MMa5Y6y",
  "key27": "5VzTRUqxGHhRzkgiMnB551AwYAhxKZEp8dpZrfYrbz8nQ4y1tvfTFmvPWSmK3t6WdiBszszDFXQKuTGQxVPy7QLN",
  "key28": "5XZqjmUDuLWSoht4PpNzjQu2MnrvLaMCmV8kFZewPhZRHwd43x4jrjz4RHv6nXeS7e4UJSnie47vi8jENbEW2XXi",
  "key29": "2toswkYnDmBpA6rTXR5XDSEvgv5jXRY19WAyiGfJiim5fCZAHYzRSvUez3exwuV8EyC7Vk1a2tvF56VAP1k9rFMn",
  "key30": "3JSzg4oY5WPtHiXy9T8kcKoKj24LmJtWDrSHsahDA36SUFgyDzCNyRoHHyJa5NWRvAL3nSmwPx1dgZ2q8r2V9vez",
  "key31": "6442PVbwNrDZBTWtaN97BauQhKsMuFne55CXvMjQmC4S82wkP2WWKcU1ZsqSX4yMEQ8jGgxi2QeTaEUGU3ohuxy1"
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
