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
    "4V92uYtQ67sDZbhNsd6jA2XmJpF9hRex5vpvJ7XombazZ2yvsZRffsQwyEV33XwuMmt2wKYidDw14XgtGTbka7e9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5E7XUg7ayYgqpTtNHpTyKRWu6XP8UMJo3YVroar8WzWQo1dggRwjvnH3Qvp8MQNCmNSomaeMkLAHXQ9teCegd96E",
  "key1": "5TnvZwC89mhxAyirNhH1ZQgn9drAeZsinrap7NfbJuQdcZMBjAJybQ8z9dQB2hbeFb83EtTafp5musgE3nB24T6L",
  "key2": "2PB3b9TToYaneGd1rjSDLFvqJ6sGtF98Zahb8E2C9ES3symRNdoXiCe4AqeGRMQs4AxkptSPWRpWNxoCen6a2YcF",
  "key3": "4Be9qNaHW8CqCMTUCUNLu42LURwgNNu8hbDyPnsnjXCGgswiSUuEsEWBsF8WYEvWkUonoHC3JYAPiZ3aEgWBcNrq",
  "key4": "29PCCpeanvpx415yhY4JfgmiJcQfrojTZigy1eGxQSN3bdGLiNuNQCs7mrWcUiZ9vUbgjiXxF1EY1y4j3aPwGRkq",
  "key5": "6Xi8kuRrQr3uXQ5323tjDaSTmML6gG4vtH3d3dWoejngMbMZxjYEM1Xz3whgsmYg2c2D1CSemB3rTuSRdmqKoyU",
  "key6": "4GcDwy5qvekddQyaYSd4JdKcPXbcRAHTC79PYE31wuw67UgkGsFGzQbeavGt64rapZvEQrVGJtCs8TFLLM9he2x9",
  "key7": "JU6iLGcRXb2vMQ7ikEEo31QnZ5VptDCrMJx6qskRJXo3ZkL9DF45hYQpjeRpyfEgjrwDpjcpxovMX1AqxqRRcFj",
  "key8": "66ykKGGLPbJtJrumMdF2QFNZe2drzxfMNsozt3vhrEBDKsmYE9yUqaZnfpN8Nqyuq4nYJBHBn7hB6bDqMS6SFdaX",
  "key9": "5LCunDnysvmHL6AZrNSs4ogT49DiSFnbFEvrfdso1hvtfQ76xXZRWbVcuoGkG8yqJxjW7SrhQSVSXqHUU76qxgye",
  "key10": "2gQbjvcyjW5EE2pGNHiUuBwM4iBT2LeuzWQHaSRi16mzeUxG5RfApUmgqbpZ8kqeaq6LiePbnadNKX34FrNBMHsR",
  "key11": "4okf1ux9ckEGE5zNDKBJih4uCs86hdBgHStUjj4zcGYKaXrpYhhSBFtt93vLtDbdye46k4YphUwLdj7LrmDoAgwF",
  "key12": "NVoVgcrv4iw55M4e4ZJNUN9ciVghvTd5osLDxs8uKFKD82GJMSi7w8aWrmXhLF4ZAHQpiysidQXKcuWtqmVTGQq",
  "key13": "3kLK6Cp3VDTPSGNa2TpjAQvKUb8ysFAavrvpwD89UoCDcaiY6aAitWyuP7dYY5jHsi3q1YpDXxV7w5Bwau7RaLBB",
  "key14": "5MTXxbak5Qi8fV51236hjbF3Prrhb2M8zNeFLgAfUkTsPLaJbJP6BXr9th8ZsC64XJnWdV7kQDKn97yMkuzw8MSi",
  "key15": "4c8uteXEY2VoS6kj3f1ceTvFn8fVtVq2q2Vu7YiRSC6BkH7bvTW3XY26u38ETyba6c447RLvgpX76x4BgsdpZ6hV",
  "key16": "2XpV2zPVfcgMZVAoeiwgNMXpnLVjFFXSEsakYcvCLptVERThsEuMMigvDLvVtjJ4T9yd8hQWFYcxDtPMPDfCdK7N",
  "key17": "sRXpP6BH4LuDQkuLYGbfaL3EY6KYzuENXAwSW21PFqxmaujLaYkUJfU3wQUftUZzPXek3TbFjX7KH2WdoSXhAHo",
  "key18": "brwpHr9LaaFbKWmakBQZh6BAJvSkBpAA4fhoJ4DzTD3XD8gZEiEo6Q9jkpHqgvY79duG4FghFNECmiUtJF1mUEJ",
  "key19": "5pUnQAbeyCU7akT2tJmpWeEc32iDRQ9nTvgtV53pVw4hr26jnx1SS7vyaAZXmKTYLuMDsrQsBFjcQ3yQ3wDntu41",
  "key20": "62J1x2FLV3JwMkMnHWoLpeC7V7jFtpjaKBbeVHUcvcCxjy6k7bSVoroMbetEm1XfjcYpUo1Lx8LxJ26CEbYCsSUQ",
  "key21": "8es36sJvEixt4PPpmjb6NdNeT77ecTErWcyfSyECZ4V3be7gRPt8yRrKr8ebpX4zjwQ9CWct2JSkafwbEbcE6ov",
  "key22": "5RUesLQpxmVmj5oKP3b1L6Y6XyPTvrYSXcLXwyJCaoGyFvgZ9s5nNTwa2SmicWDmXbsjugmvMxgLCWPRahESXHSG",
  "key23": "jZaUF5sjjeBuSebeX7dkckdoTUMbVwQR8B8XN5pEaysswTSKTBjmJFvTrx4zrdriFBu5Db4KXL6XdYTepTc5mNQ",
  "key24": "2e2Va57YiSzTMk3Hb5uDJXCa5X9eESUF6E8vaNoufB2qcDFVFAAmoKDrURN2uqu22fruYHM1s75WduDgyrET9Jab",
  "key25": "2XUUyhzddr5htL1JXzX9syvmC4Xj4mNVrNzcGinpeH6k8pLpV2uZuhPireKoD1oCsR1AbmWeCSoYbYTRzazYAMZD",
  "key26": "3gPCJAqpML7hzmEivinZTGvfKddZgJ84EHShxP3akGVqBr2xAYbJbtBSRr62JBCnFx7uAoa6K8dVee9QF8V47QEZ",
  "key27": "sPgZGy4uxnKbAwK4kx7TeJJP8TCUK3DJKsZi7z8FWEdjfwxcCLuk7EqqMJ2zk3Ltx7FoXxZsCRCvhMJQbweHq9u",
  "key28": "FmDU8yUDpqQVYw5rDXGG68YSrG4pUPFR43VNz1Y9m8Hqmv1QGkgUD6D8h3nmdvQQSTtu7cjQxfHyq93HmgMi3j1",
  "key29": "2gAm9gHS4CaQat8TJjsmBwcyqNiQReuWqyk6Gjj9pKkcJ9Zi21KqHeBnThwF1mPNoRvp1bkF1fZjFJAP5nmDBaB2",
  "key30": "3q8KfM3HUci3DPpTMJdo4HfAZTs5N9fmr5bFucyvD1ESRFcyS15iLaQ1y1wsJnd7GCjxmgxQY9DxABkiJ6FQLkuX",
  "key31": "5a4d58PQpmn433HkprbR9CFGaj35w3wW8FJ1jgVYkrXYHqUTzgNUK6cVZPAnLA3GztMdGZJettCpFj4oX41QaJeH",
  "key32": "2ewTtRFejLHvZ2ffSVvSk86N4bXz4NhJ7F7ib4Sajnz1WsxEAnFc2uTmeXDfBckPpDe9Hs4Srx5nPijETNnqYwLz",
  "key33": "622Hu1Yj1NMN2Cp7CkLgNZayDZxm8PhqQRmCjrBF3jHEyqAVXSER6QN4sptaNCb1FqdtDB7Rj92EFr38jJDq5v3x",
  "key34": "qE8X3AvpwPNYY63ADmyUFqQLNKWcqeFp6AJe1vyk8hEJcK9VxrhHyKjAFeSb1WoKVPZ9TQKPUV2y9US32W4BYC9",
  "key35": "3eqat7V6mr3n1SEFaw9iwyWpSBuTdzEFf127PU5UNmEB9Apfkrk2F3yPwW2X23R6ZS8zApnJpLzBb62Jq9UPppXT",
  "key36": "3sX1grodjYEYwZG1by9iDd41VKd28WPfwvjGEyRyrjXDiqcanXwuovbADP2JDscUdcwt8QE1L1BCSs8iSwsTo52v",
  "key37": "5yLHigPpcrBCDnMFSadetoYrzF4BkyWHhxEhZ9UkxmhMpb2s7NkKv8wUGUDc3y8kKqNN91BsgrY2E49grL8xosKB",
  "key38": "3w9Mr7Sk4Wi3Vgv7J6V7rAnF8Yg428tUpkawQtcMeCSxY1boJgL98NPhDxTRKeb1u5Lq6vk6qkJJnh1TT118aTkR",
  "key39": "3NMTFR3Lpu1eKVZU74HN3NDEeVvvUgNqqunzche3ttqC3hQzcL8G1K5WTjE6pmmb8RdNsZJTfYL4sZR48iKBqwtq",
  "key40": "5etMEKJrhf25FWfamVS4HPjH8hzjMJ87xqNoe8Ny1tKJkHHPWbeDAy96J2rsBbux8WkS4LHdQyNT5DdpUqetSaLa",
  "key41": "8ibsCqUX9eMeqfNh6KirbYjcCp2QUQ57jW5XZx11Wb5XCNpnHU7AZeNRMaKaYhFtLVukHQz2WmVxxdhe2Qbzd5q",
  "key42": "2QZtSnZgFxp2jc2UMoSr1163wkVSL9TCtVDwxBASVM37VRFns4kSPQmU6ngg2XWkjFJtiwWxvqwHmJbGbHgZnqNu",
  "key43": "ArX4NFM25BP81mZgJAqSmCpV6NmY5rPoqWUDqA5JAgvCuUyVUGEcHsPATQm5dYAiRRDWKdyN2ke57kx3Ege62G1",
  "key44": "2LZ8YKbBP9hvoy7GgmE5YtBDi6Q6kG9iVQEesrGivC38YGV9X3zPfzBa1QguWCAqDkSs3kQC6df7jpNfNpT2kek8",
  "key45": "zQS1iXMsewsMNqiugGv6e85MnoW8vDUN1fvCMQnMZ9TuNJ7PH8MY2wv79tWTFMbTby9WxthtdjF1rQHCWgJ1ocP",
  "key46": "2nwKjDuZqQSzswLmSF7JbaU7NAGiexDtWK51Zvh67YCEeY9brhGLizeuui4MpYKahVTgYhMfiC5yReJJAzssD74D",
  "key47": "3uBRaKc7R652ZcjzddbLw88wRicGyyKPzfA1SLnYj8iTZP38YDXfyRB1nbk1p7t54r17Jx1JB18PUk875UhvMCuE",
  "key48": "3TrK4ciSjnturNfETgE9PVn1hicMLJrRsg1bndorFMynRJwRqsMf3JmrEhXv3BZkKQyGzUpTTkzVEtgJUpNBpCMr"
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
