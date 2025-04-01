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
    "8W6C87xLC3S5pZFJYunN1juYdwAYXgaAfkzYyLNtq6JtYeU5f96uZTAtydWoCzaYXShQ7yNo1vAwcUALUJA5F3j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RBnL7ugCjmffJrDRK3Z8k1phrFRf2cVh3UcMkRB9emFL8ik5omB4URL1of2h1AJ7PQBdLxwBp6MwLhAqKYhgjm4",
  "key1": "3YwPhvdkvsM7f6QRFakGuevY2BSxSegUpqWFnR5PAj2YgNvGxb1vXvbwxr8w55yXtaNpUfgK3iPMzV84qAPGwGNL",
  "key2": "5FeWRCowQiKRbZpftSnAw99CW8pvqBTjNRWoASDKCxVFLY97QDDzi7nCcuPAx9VM5yvi8R2h6Y9vS7Fehmz3xj8",
  "key3": "39hgVWjgJjwCTK1imoi7AWYAFdEdja3LGWfQMjBGgR4SZtLsidwxcviZAt8BvnQGjFQ8V6dhnS8ZAgtSw4ZkVtN2",
  "key4": "7GfZveLSE5QNPrnJnsZYyAq8f8SNsXaVELHM5nN2Py23H6j3DE7tc127Ln3wwm8ARqBx4qDVN6aQupXGKThzN4R",
  "key5": "3cDZFFFJi3iR6AUw8kFsEXbUHD8CLWZkMADqWiYmvJLgDSZNE93UAucUDaqgxwH4p7jAJ2wh5uFN52ATSCVfawY4",
  "key6": "3SE8G2FezE6KJUTiu39cuyvrLteyGm2Biyd54hY18SL5uDjbg534FRoCKGZdViqZMBWwxc2SLQZWjrbfpgoh34jW",
  "key7": "5pxotKMvwrLpzVs9n6zCmkoNgNEmVTPu5WL6QUoWAYywAoDVFRWG2fY7ATCAvxQfHdNJnw9fS7MrA4gvsrH42kZK",
  "key8": "5w8XZaTGzUkLqD1ehfVqz13LzgWyw86JCwKPNjVv4JGD6MyVcXJEwiSyG9EseLPUYZSkokyBKsHfTQ1SntdXnfkn",
  "key9": "2eoWJmwLWSqLCf7XAiYrpyJZcqU3vFD87Pf9JBwrdjJ9iaUXwuf4PebNyrzFFV4ZJp7S62S6ZKn2Eg8TxYXCrUYv",
  "key10": "244Tn9naaRYHiBJhu6mdyLj4APVpFgn9Se425kUsznSqz3skEwYWWFrfZEfnc8JV8TaYHF1eyCvhZycA7REJUf1M",
  "key11": "3BY3JETF4kU5MQECvbBRE6YBUyF5ZnrjHNyjeoVPBfmoTHGJtqtiMwp4amxx7obtC9hyvdTNVCSR7TYANBpMuqb4",
  "key12": "4jPqtJ9FeH67bQxadPbwq5RAa6sjZAE5AYPbufzvbqsS9whSbu8pKb4MfvL35kdZkgu5gBPfdpwbGZ9wJc8k73oj",
  "key13": "3MpeUDLHP3p2CsGtLLyoE6u5e8U4j8MFtSKMsjyVUAeSboVXaawcjuvfYogzxBHL4ftbW3WUvu3WZUgdxSXBecrK",
  "key14": "3xqcwu3cjkRoMGsNKooRHJS86RE1LwhZXtpf5HbAxAiGsknuRrhkoXajreFV8nMaydxKXxmHnHcN21uuucQErgb2",
  "key15": "3jtyxzLw9qFQXhssdKgd1FmDNBqqyykoR62yphAQ1ewhiU1BDr5CoDrujEMwdXb37FcEuLMw8AXXG7hwfjADKZsf",
  "key16": "5xjsdnYBKdYhfsbVxQhcZ9MnY4Swn4Suct4KJ9FVicrTd9PL2X3pdTtyKpFdbPN7waMT2wQVSJ68XDctWRBx9xdm",
  "key17": "27xX484iz8c9Urz7ifQPtR2xSkcAgMdECzPsvUmZQtesrLj7VYv2wyXP4TU5SnyCYkpyM4KF9umn8z1uHmjWAKsN",
  "key18": "biUrU36BeUY8nJSHG5KnWPwfR9umrzGcuQUHeBq9aN6m28ZTNanuMSa7YNAGaLJUCeDPctBR7mGFPHijFLZA4NC",
  "key19": "5HodbVXkT37dUSRmXMgzXhN9eVyLUeiX3jtTaonsgKbwW7TLF2pYoe5uexxYEXWaE48yXYVjWox8qxHqF7PUfDCN",
  "key20": "2VPKgwmsoBTm9Cxcd4UKDkNFvSqeWjqdq2NGoH378WmN98tAmmHXqAUJPFeuCKZu766Zq23N3JiLnVjAzh4XNaKi",
  "key21": "2pf5gt55YAdU7UYxFBqpXJUGffzA8XcLhVoazRParR3r7xYSAqP3um3527UKDej2tYowfNjMXCvQD78Yn8HdHbYY",
  "key22": "4NwvgW2vaf2rjs2AUpF757Y4B5eJdh1RNccTMcz39gSDNmahbyjH9D7MRQm6VzeeFqP2gj48ypddhApdLijCbLDu",
  "key23": "Jii6L3KDcuUqpaggAtN6FCYgGFWV88BMTZhpuoQ5kBB6s8dzJkdmZmokbL9jaNGqweHhPbSLhbaiUUR7UenFbeQ",
  "key24": "5niLW4VXqh555QqUbkC18hwme3xAjq6AbhmtCLrBQFmGaEzhvP6ZAwW3uaGCo2juKU4UsUQ2HBXHT23UZPMYK9MU",
  "key25": "5v8YbYskxoqs9X79ZamVyCjaJtheTPXbmEf8KeojarWswTjvwcDmyvEsk19W5jDyKvqFPTm74ephbXLjB1DeuMGp",
  "key26": "65JEn6YJboM4cGfXpSyEzeysSJJFoZEkY4ujMoNqZca2PvBd9VEEnxkFZUUirFLXsjUiVsng8YBM87kVzX2UDzpL",
  "key27": "4gNDxXqHHyyY7KD7QaqdiJh2NGzsWm9HKSPSRopLUJfTy9XJJMng5GAWqEEVGPHWJqvAtqycNHoefQJGHSY3Ck3d",
  "key28": "4rApJ4PW6JjEyVDKqudQjpoYqm4urwV2Y7qybXjfWAzsCQxeYEpw4d2wrUtnEhWoZckvJwmyMr69cxV63QejhYqM",
  "key29": "3SM8rjWZcWB2qBkiUjCSUFRAkQBmhG2K5ZYQPd5uwbWKPXRv4V1PM45o9t1ExpDZnWwhcJQuVzaoX7Jth9bZixqu",
  "key30": "2NXMYqr3qVEPtXPt7SihyiScFoK1d8i89Tn5H34i8xRwQiXpSnFdm7b2vELbiRPHdZYGgtMHyBk2ZKYnTQRsxiaS",
  "key31": "2Hx21hzoNUn1ZfBany88C7gdQzWiHE3zynyxU2kiJai13VKZDyBVwF12XBcasgcA77aqEASTCSLSNCjijtT11rUq",
  "key32": "4DURiVMSWKNLLYosxU4bC7LMWqNV2saQpNBYC3JL8anyEx6c5WwHZ8qHx4nsi3PEkYRsajxeRSrj5vk9ULWqLm7T",
  "key33": "59WT1WZoE9QADcSaqjPLzoDJb22grhxKWmJoAY2E3rgtNNriKgLVJjscN6etWHSr43jiPUmksRLVQEwD9BrMQPmU",
  "key34": "4FbYUVvWS5mceiRscGZQj4TKF4eCrJXBggCoqjvk3zjtfWtY7RMkPKitcZx2WwR8T4okvbxFZJxY1JR8KPwo7qip",
  "key35": "5BjHUwQsNsZjti8NW8YVshQmxfuWbBnkXtjgpf8xRWMntrUacVJq5P84qLtQskTvWPu1721WACHWpXcFniZFnjHx"
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
