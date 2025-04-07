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
    "2cUizNogw9rhJJaBgXHJjHJa2nee5FsXyZxYK2VsuQuCQgdpcuvmmuM4MG5kETTzvUK6yhw6zQhX3if3aWc528SY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mvrgUkN64u2gFP8SWW6wqrbTJMMTVqKWpvT9nsMhxJH9ebcfJiXysxEV99KBSsp8Kwp259jb6tCmT35itSKE4Kz",
  "key1": "3b5CwLcg74tWo1wNo9TCRxyfJfmS7w1BZhbKMchYAVr4D195GPiVVFE1b6QxtHU4PeKaDEYh5F8EjuCePF99U6np",
  "key2": "24Hr8JK8MnSsieJn3oPC6ugwacTySndhfpnfy7XHQSpgx2xoM1NcVTdpk9grT2QycJLMSfBi9BinQMUT87vRKPS7",
  "key3": "4gYC1qLgY3zDk19RiH11xM1Ukhsc5Xeji3KJP31YtDtgSGuGbgH5bdr9TJ4J22vuP1dQS9V7TLiRtsqExZ98JEQf",
  "key4": "28ZDPeEGQViUiJXjJRCbfwSrnLx2jqw41gsaVSPGL1kZvrBy7C7qighpvWKdTPTeNoyfszVeeBkurqPHeEUxFpkK",
  "key5": "2iBc6D8UB6QVTySMXvSquqa2sU2Gq7y38gRVTrbdfdZhMq9rpFnYexrpu8j4qc36yuEfqdP11xkXcm7n2JzBHgxq",
  "key6": "2Twoe8HKGHhFU3TtdQBJH86cyK2TG3Dk2KLquy1ncg33mBXnZohrbVaHNZRUeqgr2AWNE1Csgz8VdYjmj1oKu9pz",
  "key7": "5HrbPYXeFdDUJsodhZHHW6FYHkMMd1F4Qy2ge4zJgvBn1yQpd54DgR4iqr29bgWBHqxcSDrpt56zvreU6KfUN5RE",
  "key8": "66Gdeg1MyTjDdgWUPyhBxXfY6SzjrpAsmGBYoCe8Fh8vKovn9eW9KeykXWx5pmddoECfzyYz5PSn4eFFw91bHVii",
  "key9": "4xCh4ZjGtLfQ5B8USmEKvhKR6argoGVX5hjGAwvy3g2yQ5ZfKsgo9MboSdhyDS5HTHQTEGGFYUPnnF6vJftY6xem",
  "key10": "35EWDYdhTUK9e93qPa8VBchkQwa7qn4kp9cdo3T5kr36kSUXjvExj6E31Z5WiM8wgbwMm7PUQi4kcC8hJMK7iBc8",
  "key11": "5WGT4679mshKFkgmHFmYXbVeqv6SUBA8EpcE9uvhwqysDbbfkDUT14xdCS83nL2UNBxZL7gWhwJVTPmzk2CjiAHH",
  "key12": "5ABxxfcDZTUHxyfRoF5MBngHgtWUejojT2zcgPx7PxBvbMHvR8txsxe1aixWgFC6uMpoBXU93TEaWJcwK5xGybr7",
  "key13": "5bufZLxXC5x5AGaBYJyNz5srZmq7n8JokvPi119yJ67xcdpKVRXf7P8LG14esENTaMNbJ5jbmx77dtHe7pJZmcdR",
  "key14": "5hBP6wEH6CHcKt3HRUN9y6GsrupSnfHkrjhZrNS548YhvEqgwYv8coswKxgyFhZjKrWoquAMFNGLmAozdooWQQHW",
  "key15": "4U3cosiQzzvdCcKARXm6ixm8RWKV3gE53CBACGK3fZcce5mUohwiu4AES8ueREmsbgupbG18rggWkznxXRKL947D",
  "key16": "vN1sMWsLFP1aDWLzJXJkRvisEKbbmi4jvjYnD9eF612CPFXynuutFS22JJYf3kG9jdRJkNnSZiJbmD3S5Uwbfz8",
  "key17": "JQQExWXMCY3Kkf9UXL7H8s75hJMLfFYzgVz3JLhfMbU3c2PoPoWJj2XWYd8QvMBu5ogNYp1zXb2jqeN2YicN2Zd",
  "key18": "JDhCZL24JgUaRAT7w8EqtHru6bLcQJbSWzg3MV11GxorPEKNLk87frzy5fS94GA6cMmY8CMfyR5T3zmEwhXcqRK",
  "key19": "2F4PYaqSKy75xAWBqNsj98MRyQfPdaVeT7FMwHb5EpocaRqFhnFXsSjJaKodELRt59VT8Ht3XynrG3ge8GdnBLGX",
  "key20": "5GvGUDjpGCoH6CNLboW6o6idK4cifEk9e7Xersj8cEfJb82WXBJE46Nv1V6okngx1E5Ed3dx6VB8HQ3V4KswBWio",
  "key21": "39zfj5wGeRPViRNMNP7e36BTcSXPrp5yXQwDxfJarkEvR8FJG8Lr1qfMppF2qQSjDScaTmQPZGJdJkztDzy1SA7R",
  "key22": "4nhg1MZkJ1CEjy5uNSRiqeCMCesuXB9ZyBzojhgAkV1gJaZX15wm9fK67Z7iWEVmshe6MthZFvht4tpg6RYtS5iP",
  "key23": "QfYW4EbzVTZQucMMNpBZovkuLa1RPLL3uimHLL2o5F38n8ZMu4KnFgGX9JqFMJ5faG3h2HGoQzzdsWBVCu5zarF",
  "key24": "4sgh96Mrj9sNwH66fSkYwv1xpSdaAJZQrZaFFP7Q9KXapxLoakzEdBFHD2hZF7QG3v6desNNzPSBgWQewJ6RfQpT",
  "key25": "4abSkCiWkfjkjVcHxwYtgaWGPeWJu1M47F5PbmoZwX2s5C5Jy1jyFXUwQUA7zY9fUBwKL6NCuMA4y6igCoTUmrHG",
  "key26": "2CDP8qKX1ZavRSSnW8D4MP8jWjasGth3RNeYL7kBiNvdKrUUkJ8C5jwJCP74AD6yFnkJuNbgkegAc28wQCX32HBv",
  "key27": "4ZcaDEtafbM1xXXcWtcvaLjYXi9BLfP6S41fhVC2E6QQ5VVfCe5Z5BzhFkjAbT2SQEck6raFLK7aDvuBmGNAkhtc",
  "key28": "2t9TKHuPzWHTGCQ8hi3EoW7FNNEG4a2FBozBT2A2t1HS1R4UySZ83xsveJ1vWshLw4yrvTF3wfB5pQVcgTrEzbqg",
  "key29": "23oeAbsFgmM4n7BAHH3D2X6aA745KrbLAd37deh6FxHAoxfeSkk8tZnHxmAbiG4XtVu2wpLicfZnAgrcKa5q76Sf",
  "key30": "52VcArBvaL9FxxSdKR8n9mhr1kcMwyZsb1WHjnTzmZ474ZZxVo5Cns4N7hD5DJ64tSQxp9BJZjbyUJ8aCZLCBizr",
  "key31": "3rfnJcWLbsg9CGoRicZKhHstNHdMD1PVnBLidqYNmE8JD9FEe2pdKj979sapqFcdtziNeyhD2zd5RrBpka9KWuJ8",
  "key32": "4UgtMm11FZEMzRw8rjDXDW9H3SkAAz1Gvhsg8Xg7jCd243ULtJgYXa8JoiCTvyPVNgM7LmCEeBYTLwNAFmQsR475",
  "key33": "2eUZrFJRgQvvw6eSFGKCLtMmgsC6mJknjYzjKePEP78u1bopgcUTGiXVVqQon5SyZifnrYnh4pWxBkGsBVZbknx2",
  "key34": "33pb4gwmgfz2Qf81NeNJyXcR4X5rvyiQcJS9Dw7VdkgQkeNfuQK4oYXBUvMKBE8suu9xURrVuBRhtHsqNPrgLArw",
  "key35": "5XEZKwCtgStKFwv4yM1cwfK4ikxYBRskc5nbJNiDzR8EbzGdHiEvUBTTDUfU2S5cvLbZsjzLFVbgxU2Fmj1uV7aG",
  "key36": "66TLjPG2sAsg6sE5zMSEKqKkqKQmophdVCKqsCuZbp2LtVk1YYH5LZc97DzqnW4M8XPYHXgHjkPwfA1UsDJ6daCi",
  "key37": "3TqZ5Nz5QnHN9mebraLnsf4G22XdZBM58nv7iCMeKVAy8BwQnaGf2bbHYzxZ29vPhL29UjsgvD2d7p6tk8kdDzh1"
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
