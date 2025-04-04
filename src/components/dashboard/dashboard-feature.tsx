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
    "65Tvmxv4DjT9MvfxREYtWb1c3W45PTV8Q3GJ12AzSQgb7w6agXJPv4BCuu1NEQ25FyXtnDejUBeYEW431kedhMbs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5STe3PrzEfnbw98p477WpK5Pc5CmK87sNTMRApp3atzxm2ATq8nviwoZJoNA3ann6agspmjvjjHqJWrBnD5Zoh9E",
  "key1": "gE1deEimaTjUXdxmLbyA8jTCB9yj8xcYd7X1UoNS3oPgEmbVh56WojHEfNv7yS4U2AuUGhWhJLDf1sPXQh692wR",
  "key2": "5mTiRXZKkdh2TddPzKneJTVSukBKgyjDBMUibwD2TevyPymWKiB9GPiJPa5wV46ZXhAe46yogLLg4vic2pMfq6K1",
  "key3": "5b1Cp6oRs2LaNKfuEA7tNV4B85tADYqGXAhhgPdQM9cSN59mg8UUdZ97Tq7wuWC4E64TagRPswdUi32nHmYyQtGe",
  "key4": "xoYwR9z8Y4T6tSMNqKHteXvBfon9nKFeLmanuMQdLJCG3f62DY9CrVdvgTDnRcUm1Rb226cfwXS5BLnVtDxMC8y",
  "key5": "2UTnfYJFJdZwZHP3p49BuRksa3bs6Ujmgv7E2DdGydTFwsu4d6Q6VafWszPB6dJsMLe8jdxVEbQkNXiRSDqy7oKU",
  "key6": "3WiELPG9CVQPem7hiqFonhznNmxuzrxcXrYhZGFhFYEHCHhwGQS8T5iwBYM2VyHvqrJvLdZmps6YA3opU8h66cmr",
  "key7": "422r8YaJ7im6ap5VXY9rrNiDadtwZToyG3tUGkiCcFSsN3xt6Fhzqk9ib3J8QkaabpW5Gn1jy2Zyrekf1tZc4Sev",
  "key8": "3piCGzg6T3kKtuSrp8MZLKJEXf12vzeKcRXQmoJG3fxbHeyJioAZaRhFLncW6C7Y4udeD8ugqr18irh3xmegPTes",
  "key9": "3DXAapynbXgQ8UcGpZfaFRxWtXhKA9Erzi3hTmWvx1HhTYNXnk5gcKFfYogyrwhQzN8NB2wPVBdvGGSdTDTFxcQe",
  "key10": "5BfgoSaNT2uxHwZV93GsfqRXf2tkZLY5JUAZGikdrC75K2YYHm7Y4J8TYyCuognShwRi84kg2utesvyucRjatqWo",
  "key11": "3ZkXfTyeAhdXMqThJL2J7JehQbTQWYx6gYLpXUSGBawYmeyGzmsHuQTt1pJK5V3JFbD71Qge1riydAGKuQVsfa8a",
  "key12": "5wHd2EHc8DGXKMkKoyTSgs2Fnyy22tRdEm5e4gm4uTvEMHEDPcwuP3ADMmFHZbbR3zeJq3hAQRFj19jWQGZC7o3q",
  "key13": "5GUCQY5e2PpsYDCdXEu9iZ1G7PJ6Kmc6RkEL2SXLLkhEFWeuRfFhAXsbZNRWQVqitGdSF1VVjZnWqXUNEUP2CUAK",
  "key14": "3t2rWpULkHdfbk3Kv1imZG1k3Z6GD4nhvWrtWiverCdRRukH4GJh8YyYqZ7bSrW1QMepdAYmMk7NWPEV6CNvqvJe",
  "key15": "2QkT6Bz2N1gF7e2owu3k6DVNgfNkMRRcqnrnBP2gLTNw3PeG9vgZ7WCbf15RgEPT5WAc2UGiUq3wrA1cnCbDHj9z",
  "key16": "8skjFdhrqZC9omqfBDJhVdTCMr2HQeWZLebsynfX5jyYPjaQrFH6vYXauabhkvJAdSu75vnoceJw5bBdUvPg9v4",
  "key17": "3PifNYnS4625ukTn7rA5rCu4e4xnRZSYz8aDACfepsn5CuRTWDSNNVretj2wgF7btu9TPKGERDHRdePBAKScJsGF",
  "key18": "31o7dfTeKK84hCkbuYxiSUpRZcFKKHHbmCRJMqagonuatDJvmobeKvFKVbSveymhYkVkR6Q4poLCYEQ22hsFxsyr",
  "key19": "47pYaVHAkmacvrn9Fa753ydzt1ptXEnNseZie8opujT2QFj5zeLWSi9r24R98ge4ywwppcgcSJsP2SP7jWGEmRjH",
  "key20": "43JswCG98h8DzH9UYWCcDCydjYsQecquEc1a3di8fhmcbc3W9q4PSDFrYXt4mtGGMdMmHzqAmF3ASAvjKym5JP9w",
  "key21": "3ppp7vCmr7dc5bKCnyFGUntBnGWc91SDN5diMsxeY5smYw43THWePfebMkLo5PwbnAdfRrve9ga4GsXnRrMeJMpp",
  "key22": "5mQuQZLyrRTpvB8CVbEejQ2uzTWaKo8QHmwt7eof1fkhF68zZDCttv5PmNwGt9KjosQYRgYMB7RJfGpgc1zPS6ji",
  "key23": "2CmRkF7sLm4BFQCxtdigyFTokJm9VWTjeEdJ8AuiA6NjLLwRpbcdW6CXJi6a4RE3DqhDepzRohCKJbsx8f4XBcXB",
  "key24": "3zUcjyiDBdTU7JispQ67dhvHSxTZUqgzugYDRCnmACj7GcDfwfZij1ysps9RTi6fsA7C7upH5cm894hhs3QhqpKm",
  "key25": "2JpZ1BFxnBRYyhBMsovSXiNZp4L2V7KH6gRWeHwaRQio4WhQpSPkAQKxveUHbXz6hGc84nf73JPpPo54pHE282Z2",
  "key26": "3ZnSgzEQYp7djjhGx9PgSynW9wPUTpVXVqBkCdZbELfkRhpWHZvhPC6L8DgcsdyPd8CkoVjaGdhmNi6SUHyGhVFv"
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
