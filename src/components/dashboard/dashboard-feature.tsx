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
    "3p62r7CGNmxeHLFsUkuFpi7MchFF63YyTy7FGZxVUWBDZdQQbDRtBHN5Z1eMXVbJms1npi3CE326nRq9ykoph9NB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vyH2wVbs4jYYdamnujF3SNF1rG5aELJ9XhYjYtB5pKCuTwqqpT4FcVRn2dKTMjdf7Hc1cbLWpEqefEzUSwTPWNb",
  "key1": "5coDY5c5STEvQaXBuvP6rGqAZHzf1T6y6JFJ3q59g5BozEpAGx3mCi1wRFLMWPrRBvpjGzp15Kniz2JsAuNiKPBk",
  "key2": "6ft8YyapDaxXWU7H3pfaET5dm5xyxarVa2fqnbt8La9o2et6TSsfG5XmmrvtpJxyfGbQrnaaBZYrNsYgctTNejs",
  "key3": "4i3bV2SGWGijJ2A2rA5yVmnAoYEPpgxhjsQVDHdrcPf8isiKWgC3MECCtJYLWP58J4SsrshMpiGHMjwEEmNA7iac",
  "key4": "yAvVEo2xiYDiEoH22FU8kmVpVyPRfEaxbzge8YNd2GxvcUEc1CvxM5PL8Bor1PvfeRxjYw7JLW7UnvMrKMoBS44",
  "key5": "F22UfYihqnDTiQxSzWFkuU24XorDhifoRg9qGppgyFS2AeAUAZiYcdJoykbszyw6sNknWc27UFnC4TZTiP1mC6h",
  "key6": "5jVhpLW4Adrn1ct4W2HfWi7JUSJQAQtf35ZJTyYev8ntdL3nQapyD3QnYHxDx9CaDnhTZ6oixP5viPHVLkng7oSq",
  "key7": "3mfo55NyR1CTcsoNe3MyCESUMyA7bdptdRdKYZAA2QyASLe6ZCiEiQ5ySpEjFw344F9d8uTpBNirim9paLaUcyJb",
  "key8": "2bUuzQ5d48gBJDUswfhkKbdFYy6AcpRgnSYvRACARLzKPC5SE9gu6oev7G1aYVe4rD79bZ7ZtwLjf7zmMqeoTNP1",
  "key9": "2FCt86L7zrgzr5rHdeX7Bp9DwTABRWwJgPwTrQfKi6h4E2X24wxmZB5ApMjzwn8tJXZ4WkbJC21NnEwsRADkyqwf",
  "key10": "2RHnheN6DCCKk6zyDYiRpkN7dbDNc2Zu6b7y27NGAH3U4UWcHTLgA6DDNcdiCVACfur25eSKyD5DquKgZ8Ct5PaQ",
  "key11": "SD2nxwLNmdzdE6RdrqqqzENBPhLQaehv6FSZzVsngRL3LZ9PaNVuP5MQhe23B3fQMsM3APoHLmSy9CDzvmJidkF",
  "key12": "5nx8VWDueuA1Y1p3vHrMLHRg8VDJt8mZzCVn74M8Lw7VYDuR7idiRRv8nq8FXSyE8MtBB9cE9NKiyLRk1AXGtzSc",
  "key13": "3rNUoQEnT1oFCWBySzbJCKYa94tixXj6GsxZAteBHTzDyfej5dHx41WywCazFoyVJWevpw8k2YK358ZsKHxZYbVB",
  "key14": "3ghx6ZVyoAPnUJxZrgJVEF7nrbWYXGBCszzpxMsZs5C3JnJSk2oPcvMNgyjLhwBGNAigWQLneQuJCNUrYFFVbxqe",
  "key15": "9VvLEr33nqW25dtCj1Jn36xrfs1TwiEmuQWzN1n4ZJ4EvHkkJpAtj9uagdx2kzPTFigxRx7nbcJGYU5xQqbcu4z",
  "key16": "5ppzLWspJqnnKpBRHfNJP5d44jMrE4Rm5BQgdt44vqqpbjNppQAHYf59e8pbgXL8wW7MXMswUHpx5B28TPb81xRn",
  "key17": "5EHhnvPUXpMwbEXfiKwdN1e7bJbfTHGQVvHsULTV33P7WJrX4LA3F9BsLL2rvDBGsXcH3ygzVe41XzJxognyYnM",
  "key18": "4hQXPubizeeYciPcQ83bvBiW2g7gP8wGmEzs1mrjMYpysRd9GWyZTZuPDeHaWacLYNtYPYbqR4HQxDGfhyNGobXG",
  "key19": "Zbzos4VoqWyKMxULpSKWNwiKEnqPV7rxGGTauuDwmkjuZvCds7Tcv1Z5jnaSgYuPWXtE7hLBU8rS4jc7xREWbno",
  "key20": "3RwNBALMe5DuUmfQUFhK71xKVAkhrQXfkdBfQhPZE3FZYCrHu4J9iac9gDPRL4NY2NE36H9AqWjsWJLgubhzzaNp",
  "key21": "5fC58VjQdPe6G3tNKmijMFGwqd7FYcVDPpb5WPKUNVSCymV8SbYdB1MWbhBx47m7zzfvEA6oPnbuyBkK9ekztWXg",
  "key22": "5c1SZaEpsoT7LC5U4zUEk1q33LetPNG3Rhd3ESqQ6C8GNtkuP7SepVZWPDitfSRXVqG9Y4q9J4tRjEBvghPqNNRe",
  "key23": "3JGET5sbJB14qxyH6sfzKkCoKaWLeiGAW8saEHkdm8cUQv7LcSBtsXYYc4uMBj1GMBrVFSzCkQG8Zed86w7uH5F8",
  "key24": "7nYMXrkDcKb38Wb68GYVZ6QkzwC6CwRtkJxk9EH3EQy9mp1DG7G1vRbKFeCEgJuTsiXSQsmKCssFh8dSwodHKJR",
  "key25": "3iXp1H3XfWg2LDs6GqFUZrq7FnHf27Hx4nzjdsNGzsrqqXbTK9tKyxgCncWgjHDHkn74gNEJwFGmYdrqo6VSxHNy",
  "key26": "3iDEQ1a7DtcYxXVzAXAKzFh16eK1McJ4qQzsg9nExq5WME6JxaV7LmowRkMKdKiFfTSdZLm33nqyY8nJxGUiB4xd",
  "key27": "3SLqN5DcRpFH2DJb3nigsQQVRPj5cQYLv6aWmiV9DgQGvBgYCsMzL1wreSZg9KVi6iPpNZtFkmi6wdgTKx1ajJRz",
  "key28": "3oaTgpUUuJxuKJKczCoW6U5dtq6J6BrQZXYDBewYnwJSLuaQE39PPf3485q8XMjsaLxC5ZX2QGBwxiFREZyMWDB8",
  "key29": "3XhjE46CCwTXMJExhabVTyTyqGDhpZsY7beWELVSrqWkpjBwWUs6FudRfV5QujxvSga3YRBpVYF2QuvHkAazSmgy",
  "key30": "ZxaPXrduTaCS52iX3s8SxGwDcjfUzB7oAf3eszNp1pGmrnSsGrtAZ1BaifLx7HB4K26VEfg6yzCYsZ9Sj5pkCyU",
  "key31": "JgEw9j2jhYvAbkDQMPc4R877K893hrQ69938fqUkR1Ay6eweQqs5ttVWDrYtQm8zQReBGJdYYSND67xAVaJw4UQ",
  "key32": "9q9a6q8tyeZaHovbLaGtwR429gKJkJB9KtDEdx4PdM3D7d761XasKZzAjxbSJ8ZkENzRkmM2Crxuw6E8FebJFDm",
  "key33": "2MZpNJNdL4nRQMn1yxtesHZT9d52BSzRv2N199ABFuxknqUNJragQn38eFPqhgMdH5vkUvkHvuwE4Y13hiY6dLis",
  "key34": "2WnvKgRCyhqphptWe7VmtjxhWBKMnDo9UwibiyogcG5Bbo4FzvYw9itPo2TKKy7H3xQY1LYSzwibxs9WWouUg4fC",
  "key35": "2LWtFb6XJkgDCtHovA5fwTDn1ZH5rFpJBMCVDawbKZxCJa7FfjCuVXks1Z8kZd7U5rLKizgdb8P5qZLbgmvaAnPf",
  "key36": "CLbe8q6aHDywb5VLJ4Un3aYuu1wbRnvTmBuT7N2GFGm3YdPRnauKvKV1UfGC49uHmB243rf3abxokAcG75zaBwq",
  "key37": "BbVJNqAZYzo3gWfPAPvSi4MoimBQs67DwYzDVVaX1dWEendX1xHxfHi3zJZbSssaMaGpdmjJTqNpwqke4ekc9Wm",
  "key38": "3SM4B7kUVRWgfYDKFGtWegoWDjnDXV4as2Kh1Bd6mQMgnS4yq7V23Rvno5CxbKaLmWMZmT4zXBAVP5HLBUpKJmoj",
  "key39": "2hrqBTntfDMSXfWFDK7Fp2hesT779oEuzguXyBKcUAyE9NbLjfVbQiWMPkt4B3xCMX43hnvdrAQiCidJvXv6M5xm",
  "key40": "oNRv5Crcyg2BSzvmLNcGF6jHnXWxBeCzE9bszck6QuQyjMTueVudF88uRpc6RBiT9CEHcNTtYXWAeosi1EN6pNk",
  "key41": "5n5p1Qkwo9atK7vwi4rzWtEf6Cj9WwDLd418fcc2JHoJaBHH5Zea4CeAsUBjdfqKdxmsxDTxuianP79i3vL9SGGh",
  "key42": "2LnfTC81ngpanxntJBetpghUZMjYcajUTinHTEch7xUbc9oS4x5JsHeFJoMN4i8ESakyXe1w77ev53i8up7oV7uq"
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
