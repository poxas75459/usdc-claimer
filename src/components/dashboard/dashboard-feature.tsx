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
    "2yxk8rzWe2icAsLbUgTLEy1uATcbqgnQgpv4i1p2JYQNZnVR15onvFboAhrtrCvK7uwqVdFZhXs5kAeHMozSqeC2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ueQgWsN8tektSd6f5kdD9dXJEXbL36wQ8dF2Kcc12CQhR2qYUmsCKqCMt7JhpvcK7nTwDJGUAu1mHg4Jqobmg8G",
  "key1": "5VuYcyKCaK2SND434SNbHFC9cgJMw3fqhu9S7iCKbP8J1Je8XqYPZUR5SQRonDENKJsVjGGDa83zgGUJnGbgyU6s",
  "key2": "3Vsk4uPRAKN7at6bdnQ1DhEu6ffjHh2TLqP3yG5McKzK32pS7zxqDwLchFu1uvB18BGn7ipUEQrMgmGT9C9ae42M",
  "key3": "24otALqqtPG64gad2PE1aEzuJSh6J2vZG3gtskVGwmd9U92f1AP5HBMTz97mHLMh1wBcfuJHkzLoRYkFxeTMZUwX",
  "key4": "3SYdQ8GxYdaG6XuEjSG9DYZf14xq7uV6Rv7eHRrDE4ZR7TUM2Dnjyr7a58hUnvjAaZYUeSLADekGrwzooJX7Hhag",
  "key5": "4xBzjBTCrxN4qwddV6rz6jLynAr8xHuH8kEH87qqMS8rpVPugDs9VfctHCZrJgQakTgnjwSTnyHfcFn8V56RLQnV",
  "key6": "2BckkQbMirgZ5o5b6S29Y9SK1oKLNsfszMk7MxKxwUinBkRxCwrP9x2QpSDLJod7rtEgpDufQp4y17DdZ4PoitbM",
  "key7": "3Q5HU2GYFNCMmL3nHKs8E1p4CvQQckPCfocyVKD8B5KQ27sYBDSUNSrHYcTCAmvqyvcqNUHQ2186b7cVsKRpdYEr",
  "key8": "gr8cHPfQHXUFBgR2SYQhziV7YtAGViY5YFX8mDb856nDNArYVG8BYASAMPaa6VpxUTCu8ae83xLkvVcB4qWCBZa",
  "key9": "3owYynhT9GAKT2nj4U8fV9qTmCq3WCWzQFpMwdfYbfxfS6axUrLerKLPgPfVbqN5uyTy4JewvA48kZuZqhfjYHJQ",
  "key10": "rE2J9u5jXySKzoVcay5Sf2k5Vkg9C45Cw98cCXf8x3nJ5fdGLwCAAtxAbC2QGdjju2QW1ZsasjSWhUnsodB32GS",
  "key11": "ysMnh3Bw5Kppmt8pBMrbPmVhBjjce5zryN45tCT464Go9LyaCb4mhLca86G4G7UC4hPpSiaxgfqRoxxdbeu2nao",
  "key12": "4jD1MShphXkHSEHxkemKiT3pHC5HUApVXyrfiF1E96wRUrT69qjoYoBFZufEzYjuhEaGhgoKidnE3Mxf73K943J6",
  "key13": "GrjTk5KASiN6yh83266yzHnf8SVSsvKt3UTSUbAfnWqFvUZRm4P1cCrDXWxrQefyn2KRi3556C4vDePiuJ5MbDa",
  "key14": "iiyqMVxYB65HHUwSB3QJshM6MGXqwm5n7SQbdjHJgveGo7ztZUSuM3qe2mXJVxzCe4RAXzQJQTuNiEGLT4mPu13",
  "key15": "2mz2KEK2nmAzweWmzydBfXFVriy2XwPfC4qJmaVXqwqpL4TbgLPSzWfgvmCDSEU9J682UM29Pysj9J3c7Aec943r",
  "key16": "4732hKc7R9sDJsY7gDEQUrRwgf5NexgGXen4bCUbtadvySxLd8ppRH7hQVPjs7oWjXH94V4TWmLxZiaXAymqbWDt",
  "key17": "3iBrLtfzqmhj7Av4b88skTWAgu4SYeCuFrqeztnQ5F5PYDgy1LdahLdiq51GbhHaL2ARLXaQtKnmUnAh95jHwXLS",
  "key18": "4WTB1UZ3VPUUTmfEvtHLYSiqG3KKvVq5C8TD6YU9u8BnGBznb3oQGhyBgRK9oHvwWfqB9w6xYF5G5eCeure7gAQN",
  "key19": "4h7EyEiC6usCXaQxSZXXshKZ2kHQe8UAaVeMFUo6s4vUKHWR6GRF5QdgkSXL1J6Gy1z419Z1do1yPXY5uTs8M4Sx",
  "key20": "i3qKu71DEHaFLfNk7YvXDY4ZTfUcBrRiRK9bALMqndcM8WVHcRdrqovHmZ7RcZeAHGFqsZdVKBLWV3SvGJu1pK3",
  "key21": "22xpNcY6f36E78KwJot5cx2JfNRA9FKmDMgUH1snMvwnWURL3PgguQPNELYtXVRq6fF8n8Vewkk9o6Ksg2ZW7Edc",
  "key22": "4mfNG1SpPQ2VLDw56nQ9MMXDqQbycKv6SAfZroa1HnWGMyRP47oDTeczmEygJef35bHzLZix12FCDQWeTqweSMxW",
  "key23": "7CpS33X1BBR47dbs88bweokVFXMnZLgfZ7zKndY3sHTcJaMWxaLvos3gNuFX8daFdCtf5wc5LX8LMNXXFXR4cQw",
  "key24": "24wvb3xmbt9US3JRp89hsEGzkWtaBcJUH2k4Reh3KVVemYvUdZENdKEp5Kuf1g4KYfFaRFNKZBntjGoQpKsPQwkY",
  "key25": "22Tfc3UgVMdvs4GvBzyCEP5tZpq7BUZew5QNyw7giNwy926q43w73Q1GBmjP53tFe4zyKNBLrJJVDF1ehkBRUtgK",
  "key26": "3fLQ8eX9DVCa9GjRWAMShdVPhky6tggWMX8zvKY2Yxekv4nVnG3fhUmJyqBaE8ZtgwJ59rARVTGJwCXB1NNZmV6N",
  "key27": "5K7Fuoph2i6XoHbqBHXwEnEcBCfXFPwS1L7QJxQaSB1RR59HJsPs7yBGP22oGJgu8JQYB1icVrHpBxNR55UrcQj2",
  "key28": "3cBKUpx8gDTFSerXF2rnQ7uazUAfzVnjdCHapFqHymLXuCx2L4SKTiuiCL2YcFZxuVeap8cvmYQZwkmn7QYFWbdc",
  "key29": "2fF7j6kxwLjjBBFPnu2AWFcy62NawDnH3EBnEyVX4BBhRmY4duL9nJUdZEpTzFzU3M1aZQMWds9AyqvgPHP4XyFQ",
  "key30": "552Z7gqwEPD6tbDWBZsirfTW2pg4GqMC4RpHRWVxLmAtSC624KfJM1xdipgtBx9DQFWneCuAfMJXQ91Bmx9tH6DJ",
  "key31": "URzt8VVLZ5BRp1UySgaB1e5vk2mGRaZchpeSJVXJatey5Wcjsmg8GvH9fwCey6dd7tUVpULctity6YDp3gisfUU",
  "key32": "4rh4YVLcCu755cJ9bk9TXVEGpcJ6wBnZoGBYrnj9vtPoHiG9zquqrFjd5rxEYNSuACZwnYACaGHbN9zXBT8dFSrH",
  "key33": "3TzeibJxJcwNQFAvCr65RsxYA9pERNEXQCN6cYUNUovYtkLvSHwo4omzsZV37jX2LqrvcQ8WsojqUhzMTCWnRNhW",
  "key34": "QP71p9bXJ7Q6bZ2ray71zR7J4aMVHk1Jw6CdLT4fm1XMKbbqgVFvzATawdh1JbKbd2vmBVYFteTEV59kownrfq9",
  "key35": "5awoArUDawmnmwyHtBBs51LWnMiiZvvRSi6QtczehEBsMpZENXf1iZiWJBKenxNpPVybGQ1mWHTUZzhAgWDZpH63",
  "key36": "3DBv5GQKfYuk74eXmxUFxKyxHa4ztaoBWvsnM9BJ6yeUNB5JkVs3R1kSoW8iuHNTZ3W1zKazDRDJgwH1Rf22Ff45",
  "key37": "YuAu5BGq3fYtZTQAVzkQQoU4AXg6JJzjYSjahK91VsQNz7Y94bjMksi6YktDjYxfvxT8uvpSRvUi4s5GuqSmnLE",
  "key38": "3bBP7wkoMXKBrMM39A43aQhPtRQKMqrq6naxq6UrG4u54QDcBiM1oMuBDFqNpQD5zcsuGZFdhZQNWwErxE4Qg6sq",
  "key39": "51aYaE99HNqiyCNhWYmqrgTRWRcEtfZBsGhBMyXKRJmGQ6Lw4xHAYRjT7EfEHabGevVRbZC8Rmq1PmJwNqKWrXr4"
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
