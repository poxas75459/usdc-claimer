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
    "4nJS2mzDS183LEeq4EvKvrhhJRnJUZrXLtv545bEbYq6E8xctPTYyWUQ9GtL6kak4FnYDHfnKhNzjzaFJKW2gMt5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Zju7pXVxuhZaKHqh9Mxjpcxg32suZdnf2x5W8g6udCqLdh8D1Q5RHh9zXD5USb8VJrnHpLpR23GAn7i4AzuaSYX",
  "key1": "4dtTNwXUWG55zwuX4Jhq35GMSdbTwpdxf3fpsG6T6fUJnxzecM7QvYCkrhWiQx62n5zfZr2FUEGs8y72wuCh5JJ9",
  "key2": "5HbRA3Ly6beg2KmKsEKYS3gVZv2hHFLT2kL4ysSZcyPjsc561mzktJwj6jrSbo8efaQdw42zWxsERNgF5ucuRdsu",
  "key3": "jN7NAk49xcKdCvhP14uqj7cpArCsmKCbhJab58dridEnksYHrnCeJmcxEKCkdgYH9PzPzyNvQHPhCUSU6oe2ny9",
  "key4": "2qGGfhKe3Sm54nfKbgfusCw3CERpj3PjttE83CKBttFppXoCKcHr1aUzPxbSHq1Q7NxveWmVdzXNC1hetWHcUWkM",
  "key5": "sHjjC1rQBmy1LP8v4G3u4L1TZyR9EmK7zQsGyuAGvmvDBpH3jrG2ZZZi9vZGTtL2s3KKn6ERqFir4DQ4wNpP4yA",
  "key6": "5RUvpjWEQkvtsJtsZvvJzHiyMNdw1dBJ3W5TJDAhYy1KfvuvxmucLsE3isCRxH2tiVnyZfj3GYfJFzUhtAxUHD1",
  "key7": "3qVtT19nXow1h2sNfaRGrtFmTyKd1f76DQYMo5RHMapNdLyrw7KaWsc68StncbABWj4wPb3rciHHtH7eZ385Fwvj",
  "key8": "3xDqnhMeCgzRvxAirZoMaBo6jaCJ16hg6BfJyXg7mBqEm1ahXpg6ivJdmfZKqRWuKchHVmgvnMmGypQaxv5Q2dKk",
  "key9": "HriaLEm6o6taPZbGa6r3RokXACTwJ2Q14TawLBUWCcAM4jU8PDM4wGVtiLaEVp2fVGA5v3FXcnA2tKAMykE4QAT",
  "key10": "2AycYisvBunG1cCKgZCPRDmpG24hYuBcr4CyiqGevZPSrnkNSeU52fXAhvvmoFuyoQaskECDDCt1YC2Appoht2fZ",
  "key11": "5Nu4XroZzCRXFmeEAcjCXhpDpHcBhows3KmfV2Mcdmik6hTaue3pTMjwD7FwJuwSFPv6DkJG52GtfbRZEsjtr8bA",
  "key12": "5g9ejA9TLrRhZexFzmqGEoCwYPAMfX6CLmHxCL4Cyr4ENZVPCTyrctdz9rRX4fmzy82hosoe47Wz4LBVB6vLey5x",
  "key13": "2UNQcPL7dRXS8JoWTCxPYccGQD32F8ussn5Z9B2gNgYgpBFWdnwQRyp8gZS2TfqwLuC6iX3Bp3dacJhMzYeub3Fr",
  "key14": "5th8EKjerXzm24RxBaU9r1yWtP1vrxSfx8M9rQH2XtbqgyBgmUj1kbaL71XQhGGxn5ywvmuzDvxzJS3WG7PFc3Xs",
  "key15": "4MsjUL2sCJNCbT517kv1He3tXiEtpwrEgUkXBjXVAYAujFrytxWNTd3nQJiLJLCUR23aVVQBtmjdpShPnSRV8oKy",
  "key16": "5HzjxhhioUoxU7skVHA821oCg9JFB8TpvqZP9yR3DmWxyhyx5D6vyJg6cVFyzFGFjHJqUNykwcA5yMwCteZNZFmY",
  "key17": "4WTBq18aeEKNNh6iRYgPwunxSj8dAmXFHkNjxJ7BEJZr5pmiRKtfp8oEXm83KbM124QqvWf1tk1hPDDShvtH7nj",
  "key18": "5xZLstC5oY1fo36UAcFAbUNTGJVFoH4ejAUe73PEPHTZEdbhZbUvP9FbeXvHWpMcQx5YU6F18224yoZSPk5yQYH4",
  "key19": "3pRPd6TPz32eRgDc6EtEeVK6hcFAxSXBhoCQvE8PCewN9yUoM3j52rAxtdBWTWfUCvwyVuMtkCnDgLNb3EAjtMkH",
  "key20": "2wwTJR2nTFLxrfMACzh1Pjrhsdck2ndA4E8v3eYJHd7M262pCCfsKaNS5dx36csxg7GN7kAfpD58cA2id7MF6Lhv",
  "key21": "3cA8KZtvJsyWWjop6GJBZXh378Bc7gGDF9FXxV3svncgiCe6ibMsLL6n5xM1CTVQYtphgXw99trAQmu9To5ZY7V4",
  "key22": "3Ef24cSQxvRTpdALCUJfgoQKkcqUYjJ5gRs6c7ZztHdD3BngcYMxk7AoYWQCcMN77qjfntLf4EAgiZWAArWSNYHN",
  "key23": "46uij8qucXXwwyQKd55i2aEmsMJkuwq4tygDWghaJQgtVGhdCH5LicnVaCytqL6LR4ujhcHCyKUvPSqLGUbAv165",
  "key24": "2VaB7JJMzavnZwtVxQAuAwcgCAViqamS3ybcFYzfs2phHm8HLpbbQsuvypWMQEfK7wATYs6txJLEAmna6nba6tDV",
  "key25": "3TCK6D9x3f71XFXBJjYAU3eaX8ZcesDotR33gHtaTyeMBKMpsSrhfLehksJjAQGbxFz8mWJeEU8poBc9Jrjoxyrw",
  "key26": "64ppuvyK3tf9viBxwUKq7fixjKQuxKf2vVTjPDper3wWbxUYPTwVv2wYoQpaVepV6Jwn3A2VJvH3PN1iAyTKd7LM",
  "key27": "pnTo7z7JFFgjtWEP3fksiVv2W6udTE55wKgC2HEZLguyDzcL6nyikU7t4LmSck7vLt3UU7PKjpvapMuMBt7DYjq",
  "key28": "3i5erLBNLRC8bCvhgxf2L8PL3ixAovyzpe9tBQKC4SnZLTJcD4PZorbT9kK81rjiMKxfLKm2DxJrh15uo4AMGH2k",
  "key29": "4qKpgmQ8S2xZcWwvK1RAsxTFQDRK6296X1w8FCoBUS9rttNx1fYrZR8GEzpD6YSasdVQquUZhyqEeWZGBE7b9aoy"
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
