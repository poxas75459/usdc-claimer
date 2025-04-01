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
    "2g1PVcjAsKKtidxRRmzHw4CRCucjBXf2vhGkaxDrtjWQiLLGHuBzU7RsphnKecnWYCCCwWrr6N7Y6erPBpEjjdxz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59mnS6wyTfvUW8mUBKBoLo7YkgSsd7QDDthcvhUYFC8aMBrYU3rvRLhDqxqhwyVB47hDxdmoWjfLa382DM8P2xWP",
  "key1": "5kGvj3aUGwgstrwoSrRjNTdBxUH7W1RMf4s2ic1nqt6oMee2QWNwP7DC91Vew27BLfHAcj6A4vYYnqH5TCfuFpgz",
  "key2": "33eNScJ2Jz4gSrJn22UEi7VgPiFv9LLepMJY4sEyWJT6ZWxaR1ac5W5nEAzu5tcXhDSngbwCazrrty5dB24bFuSs",
  "key3": "5RYSfAoSzTCq6rptyXa92XFU7VGZykn2ZSS5QPcjB271N4hjcng8TDgRUuquKuyh4c1kAQUqS3D7usDLwGAuq84e",
  "key4": "4evGfRjwiR2V3SRJAkgsHM6rYqdMLgefHLczkKmLJVd8gwqpCfgKahZ46GxEJfGhFcphMre2mCF5xLNGGybShYbT",
  "key5": "4DSfK7iVB21BwLkqRwajcSu83mrHAwTj19pzge4PGGqqDWmuFFpQH9BKzfkJvVANNjs9mMB9uTEYLrnKqN2yotJo",
  "key6": "477rYYrcqNcA4Xdd7aCcSQhM1D4frHmZsYSVfXGN9eCWSiuG3CjARiMZbizoiejbaw2a3CRbWgbQ34ueqjwSTbZN",
  "key7": "5R5Yp7KwBGX4CTJnDsrn2fdaCXp5xsCERbtYFiph7JxR9QeuQu56d3iHDm7Y5KVEqBjhFPYnLU6GSUnHqunVmpD6",
  "key8": "2jMJDmZ74dgX98Q6NAbq6U3YVzN2mveeURrvtVF5KTd4sKokyxKREjYp2Z9udwy5nzQWHZ59V5fAr9BaK7rD9Ph3",
  "key9": "3NQfyZpdPyzBt35B4Dcbf5v7fDZEPXGaRXaZaXyY1wrMucTfgsRrYJib9ZUESAwrKY2s7ChwhXxZA2StrramDcc8",
  "key10": "2WZnryCJc6TXhN6P8LxF2cdHpUSVP9YBjwiGM3Fopn3bTLz8KH54BTZEbz55z8MjWPBmFrbGUkTKdSwou68TJ1N2",
  "key11": "5ydgjQQSJLsqaLdaTSdw62a7ACDM8pt4RWFDTHcHcvAd2s9do2u4CH43NBpJ8EC65v5kBmpa1y7GfwHVjkpcUDYH",
  "key12": "3gDLygPTc7NWzPJyqNUKG7sRCYzSnS4ZBAKt3BMS2yJhzLaVEtuwTaYYC4qASnbZZVxSjzVUjDAjjQVkutHEyjkH",
  "key13": "5fDMrJEcTxr9cAA4pERfjx4Lo1tAcCLVenA7LexwNKwYkyR62dTDVQHcbaZwtjnNoXETjy2KqxxrStbjsyQpro7P",
  "key14": "4fZHCqJwpJZGiG6rMnYaukGwRxFLRZ9EVU657keCwQHpugjBMgdWvGcdmPfo27PrK5t5DqdySQb9meYUeAXZy1B1",
  "key15": "37mkgJC3iDBV5iaHuofMCJNz7jHHhP7Pi5CoR9DwKS9vgMBpCs8SdbR4caDMAHJYmdyiemGDJGfyF4mMG5M7U4AG",
  "key16": "3n52oGsFMMNQ55vAmBTdQTpthabVRmY5CLDZrqtKcwq4KmezDjG4yo8oPRMMb2hciJTnr5w2yvJWAf4s7wt8tJkK",
  "key17": "jh2AVWgKrb8485RwNSndXzKsWD7znrtRyB3dy7g195nefVfKRyyrm8CPymK4KUnXQYqUJwaPaMEJALcuUbRZHrq",
  "key18": "429SYZRrPNQiyDc7mR6BV85EQEKKgknPK2FAfuH5FSHtsXRYwbpEb7cvEeNvVmWWpRhcoT8eT14Kk1NXmeoMmaKP",
  "key19": "32qwgZCHA59G29pT4ASgPUSMyyA9XmGXNWx9cbjTphPPbpfc6AdETFfwK9xiyjWvHN6oaML5eCpDrApYd6hdsLXD",
  "key20": "3AfmGe3my8MGLtqFAxvetiwpHCH4AtSzCoso7fEmfThadH12jVEAdmfb6E4cyE9H2rBVAd3mZ1qHufD5fip7wyYB",
  "key21": "2BkAoTrJQyC1GHFkkS2NZtuaiW6HJZnBmH4gv7FkbVhSxzZCTBvm7HXQ7Wtdr3jXaYy7sS8DVPjnxCdyhzkZcXCm",
  "key22": "36oVZ8SE7Zymr5pSBX4GMqeUPsgoR8R2GfmPe4Vge5iHagDhCGNcQT2LLH4JETH8tbWSTkCM23FeLuUDciTryEdx",
  "key23": "2nCoMXXeYikCkC55uGKtYAf4T4qiKm3pH67uyccU24UXZvdYFWWx4i2miXS4S6kY7bRH9Z7T2SZzR3TErvtvbywD",
  "key24": "4Mtw4VvCvYDjpqRji6mW5tygeRs7hdWomRrU9xKfQzAspsLntdQtAVRsU8Xtxya16iDfE7GZ5toJ8CsbKhthuryM",
  "key25": "666CkcmjPaVyb8435krHbN6foB12geEfEYyWi2Yj8JSuKhrwxpEdseVWksLqg8XSsb7BueMKxZus1iynB3143BNP",
  "key26": "4ByP1TyqETL6vaZGVFJZ34MasjVjHKTkSYKQE5PjVNJVmV5yUiPmeaJeSG9KikX1Us5EqWa9NjbRYD172h6nM7AB",
  "key27": "7792wCnGqNP38jbk5xQN34heeh4kAT8CB7PpNxhVLeU6WHQ9fmwJVK51neMMimvxz44F6n47bm3d3mh8xkC9abJ",
  "key28": "2vBFPBQKh7nPBAvN5bWN3Wspw5HqqjsEJmyDj9GiTLuNcugMfe3WgcrVxj3S9dBkyUFZdaw2bk89y9xcV3jDSfYu"
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
