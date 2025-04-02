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
    "57Y9ph7CLdPYz7KJm9VuCFQYicCJK5Qa6QXzLjbjF9uqsXwPsNhuqTtyimFB5BZTjG27AvTDAUsqsWtEW3ophw3t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YsqZnebNndjUutUk44Q8LtFXohrdB9yvtkeFBg2AUzSG7VTv8sWUm2zV6HUNZWVfCiZ2Tei6vmZp5rMZTfE2TY7",
  "key1": "2zEqaNzw7nQov7Emv7GDcLGNqLsbhxLJCPdwZtcboRtWN1PDnEN8Gd3EPURkKfMJmMcZYM2NygsGqYDFNg95Sjfm",
  "key2": "4Mpeq8MT4RQGYG3472kK4gaML3AY8pG8dryUyS7QhEJPqcnWhNY6nC2xJARUvNd95daib8ykZptYAQaJiRUfZ8qk",
  "key3": "499ZBRxfrxemJXuCWEzqApi5wQt7mx73UDtzZoADZppBqQkxn3BeNRYbCS8k7SSxkMCQHPBzrRHiuErQXmayobPt",
  "key4": "3E4qQEz9DmGiboDVJTkbFCDeUSxBrUqq1nGLECHzjnVyBMs79PmELWodUhtgmX9iBQmd5VtzZ64sSgtpyv6nCBYS",
  "key5": "2AUpgUVENsYjKSuouSci6Ufk1V2RU7TvsmQi5SGMSexttLc75ZbEWrCbJvSnABfTZzHBLXAT9iTMYTFw5QV8vWmv",
  "key6": "5M9coG6huCd8VggbVkv1WCLdYrr77tVQPmhp3hMym4vNtDnBhgVidTAxQUzp4X3q8EyjtL6z86bUUmdbnZFXhMLB",
  "key7": "4ddCGpxNjGj65FJt7LHTMA5Vz4HpKbBkTwpxJT721bh1YUvwDT3rwBjbP4VFyEYzmgjUxtQG7XoDKWbCUgyvUAAx",
  "key8": "3FF9tPNRYedBvUVtTxuZnLtP5CgRpW1YPBMJrtmURCstnxBxYeAqnTTMQQTTvXNcomGTRZGvwkgUXGuSQfLXSirx",
  "key9": "eDCeKPSM9ohidNuiDdRwFsxjdE9nczqEhXkyv2oWALaDhnbvGu2YAMuCPWVLqGRveeV9KoMJER6Xp8h6HCM3jwk",
  "key10": "2MbzinmhEVSvE2MDNUioC3qV7A3Gn2w3RCBFSfF8mBGhmmpVDHL54Vg6rXWzMtKSUkCKnUuSH4MzwEQJn5fB7gAL",
  "key11": "ssoowKNuNW3tpZZ6nGYUoQwB5M34sjc8HJ7hyqsNfNjoisttfiVrNRth58DAAv852MvTQNNfy5enjX9r74fgouZ",
  "key12": "2ZwC74HFp4rvEQS5KvrBMG7VSXwFHzo1zt3c71nBzoZAxq884Te7PN8pfkmqEYrpf2mTRMG5rfx57nggX4s3YTN4",
  "key13": "4MrRzzVPuYx28DHU43NHyABo9r8v39SfBb9FyAQTv4jGiG8EyGWQZok2zRy7JG7JHGGeacpcr3upLnKZUCSstf63",
  "key14": "KvkTz23Wi34zb3RdzakxznhjWTsdUtsDGUJurem9JT7LuG8mkC35wGPPoZoxmASuA2zcq12jbmYmTSDssLAakmj",
  "key15": "4tgQbm3fBd5CEzWAQQAAnKUKJk4GET7pFc8kSMCNMZanFWd1w5hM4aJZXwQQxc9GScxxZWcUxr9JAP6ftNsnP658",
  "key16": "3r75Lzu3PcPssW4YiyAs86PvgUPwkckzCCpZRLNP4fg5V36xW9gLSmWAjCsCEE9UR5t8QpJKQL9MwUVkQkU7dRH9",
  "key17": "PE4WbvKGE5otrFFwcnnf2wFXxYghYadprQfcBRQKVU384kFQ1ayFivmwV3GuCTYrNRXfRdkG96LYnu8GH5hgfpf",
  "key18": "B7qXA3v3yw5hmDkmxbPNqnjaVtnYYtMXg5SXPGARDsLBoQb7FRzJGFk3LrKrY5hf23JLwMvjcH3fVUYRf8pXXYA",
  "key19": "3n6K1929kpRZWkgHY2b5KFhwg74dSQhGZ5jzve9YojFJugL3CNFQDQ2zimis7NbyAyCGPDUCQKhKwMTgbSEHgiTj",
  "key20": "hFnvuoMknDM6nh2tJED78thYv4wTH8ze3pqe4qEQPCrB3FNePyNA75NX3k2eox7cyR88hFscWif5FGb9jyXMaev",
  "key21": "4YWnAeUhAbK1huoWvrrGELsJqCzyUmpMrZJGej7haH9mB7M1Wj8nuweWzsqtq3CKYPAkMaPCNQLemuxQu891cbJR",
  "key22": "2hrzRFbu7KMEwiFZrWWA7PzEeoWRBEG5VNfvu9bviPgKx2L5ia8oLmAKF4p7KJts4bwgBqNQ9rs63ciyn3jy3ZKb",
  "key23": "ZQGZHkv7d2JgVLKbYETV6oXcBKrfnFM3FftGnTCLDUbqqAHGeFA9oM5vQQZ3aBb9UtPr8MGAzEX4YELaK4PYSHS",
  "key24": "5QN95KymQn4VRVE5RWiABgc1uwzuSuXK8hUJYN5iUb6rjPLvnkQDCvJQ1dYfz8AUnCid14zWxVbernfsjT1PvG61",
  "key25": "tyb8QGWy2sgscYDNm4aRAm2upZi5voB972Lu3PK6XkAd2eQxECPA77SRxfJSEPxQkshSXqFDqyQpsqAdX6sd84U",
  "key26": "FU3dUARoENdRjbTmxcRNcayCHQ1kN88spFbok63wAsEwJrAcTejKjaSeybbUFD55oXHqDGNb2DUvwEkC8LpRY1M",
  "key27": "4h5VzYwRjUMH8hPQBymosTznutx2553K8ziuFcAMTMzMSKhFPZNXqtEUDR3EL7VawRKtsopmYqKVMSGhvwqPSQoZ",
  "key28": "4rha5mF1v6t8vgWb55MDU2MwLMNVaeDkd3qWUVQd5QfYj8RBgBCHVNyQ9k24YxjrFTd3CqGYyMhYDassFRdSBCAN",
  "key29": "4q3zsSEorjcTqYghNwnx1NkvdFFC3mQjqjTUBuckd2LvuC4xbRd6ra4xcwHPTgu8gXV1xZudfNwQKMNJucG43sFi",
  "key30": "64E4iVmFMEeKCyQ6rGrDdRGV9QcMTH5kq6KScWoqdP5kSkdnxACtkVHEA5ygHjNt4nzvBnQCrkfwW5DybV7i54SN"
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
