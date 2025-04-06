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
    "KpN9auHLFZVn1hsh6ycHMVDpbKUJRrzuqp2fE4oD2QydTJ8LB38KwczNrbXupR62VN7DVHqzoS4MovLryiBuNGG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62jnvpeSrmroXNGPGwppazZ7VzUMfcFa1oMx7pseJy1XfrUhrTxzq1j9wdaySF4ZGaizMmyc5FeJqdrNLm5SSCnd",
  "key1": "5FaR7VWQpD4QSGdgayaxGvE5wFTZ7VpLAyP5bvu9qQWYf7fjSomhjua9SKvRx1DpMRucVzr4CoiegCC9FUD8sv66",
  "key2": "2njxVSmMBGnjwFBERUHbf6DaofkSAQEBw9N2Sbuny8tfXfj1Zw2RkPmuBkKAmvWi27RXgU1sEJoexPBCCxK9CqKo",
  "key3": "JCkVboXav6omiqgLKAhYbgk7NhMmyu1t1u2g9T4PxALWGsPcv3Sf4Cb4ddpdk9YYnTQVPTUzMM8qu7fxEiamrfb",
  "key4": "piUjeFQjSwj3oszDZYiFqWvyBpfg3DvpLC3CPbb2YQUVLA2qpTLFtekTaHoxNukjtSFeBDZgKXyP1gS2TR3KYbX",
  "key5": "hkc4BGqopn15191t3ebACvUPfKafnVvsJnvBN1yCXj9Tw7115oytvGYaGV7ejNJttJzotepfHJ8BSXh1fhC5SBW",
  "key6": "2ew7pGHtWb8PkHPqz9kxa8A6f9LWZroqxLQromKh841kSqxDUVEGkWEbHwPfvv3AJQHTj8i6uD8v91NVW7h7Hkb2",
  "key7": "2RceZau4Cj9bWECtRZeVMGDZH5nhFdZ89H499btkfuxRPbdzZNnMnfQZq3PQPPuGuq8wSk5ue7aTRFiMBgVjEDVb",
  "key8": "bUAJEg2bhmQgtYYgkLbSbWwyhmS65JWuerXeixQMi2yXY7Mw6mPkoHGbHUokRw6WRejC5Rr6xA1QgJ4K2sU3Mu5",
  "key9": "4Yp9EGbdFjCyKhEQQURTX6JVkbutvhtBcgHVCVtLwK51DntHsv8F1hxdLKn759wajThu5eseRHfmxedkVywKcufD",
  "key10": "EEJH3qgKMsz2eZQDZApjaMr3RQHVUApkMtCpyCiSrCDMstLTXjf7Lf3UNq6CRQHwST1doNLDgSVwtaPdPKu2F2x",
  "key11": "3Sn2ZfrZRtBQH43FfPvzUSNcitfhSvQAqsrTjaqT3Nhk5Lkyovbjo2BniS6zdneFekQMMZUDGXrhX3k2dK7yP46Q",
  "key12": "51zNNWnRJQS2nQndr5CbaRFo65PekUDhR6u1EdyW2QJpV67NsFP2VJ3z32GdMBHryhsi8dGeEZHwKwF7xKU5KX8R",
  "key13": "XPZjx9FKaYbyefPG64m6VddNzAdU8LapeGTUQ5czQ6V8jH26WbGroqHaZKdcynssymfmTHfhUq3BaKGzqWV8vW3",
  "key14": "6ZYXXVNNX2sUKi7jC5EEHmAnJrSR9UzkeP7v4UyrLB7evdi8vQqURJBjQFNUuF5Qv2HtaBcitj68jGNEiofcofs",
  "key15": "4FDV299ZNMK8EtqKsphE13CuQwKBQaEFUDg4XzRuqzw7R7oKEibdbaBfZWXheebgE6NTtoQP5BiK44xwiFjkMLen",
  "key16": "VLHgPxTrjBbGm6r4f1dZTivgPEKAZssy7zXTsmQTNwJs6wH8354cDWrz1psihsHyaPyfAghvcdNdNV34gJYcEMt",
  "key17": "5FDQmhrmK7fWA6XMGD9LXh1BeGzsrxUq2u27AfKh2x9mZFtmrNq4tjsj7Zx1obKZR8PZpZfpQeMHDermUCqmDxZ3",
  "key18": "3mhasVK5eC6WBiwSU87FoSe54uv3U2syJvqyoPyKMCrxQVShyJR1M8nnEEsgU4PkqADNFHCU7BDtBzrQvbuSjYN3",
  "key19": "3nDYAHRWAGfqWw5GSm1ZR6wbMaXXyW9sAmwaXRoHCrSJtXTJaNHenqirEm4oQyiC5arpq88mpddWdGsJ9XvNEUBx",
  "key20": "2X7cEzLtni2FuQ5vUFNpQTHCLpGeAg3xCpPvhbswiBj43P3vhZMo57RnuGsnqD2ErHFx3kb62n8NT9sXDWyxKvuh",
  "key21": "5knLpM2UhqPzcnuqPXNEUTaVzToMkcYFK4DyViKbdonnMJH8ryYGHjKUjTqKaBtgWc7KmyTf91DfViUNCckU86ye",
  "key22": "3dvgC5xxKiYVsE5kmd9Cp7WJhawz8kt8fQk7wY1dfRx2ZBSszT97CK8Kh6qS7XTHHzf3dDoP7sWxdtsFNbLWucKw",
  "key23": "4fkUgquY6wSuE3Gqcbx8hvEESYeRtUQ16tjrUwDyyLi9b3Po9KcDfo9JruqHFWjq9ts6VCXGyAip9ufctBgde3sh",
  "key24": "5in43gvcQJMWm6Fxk16cUvtmREtyHUyCrtedotGhvkiTTEBazhaKnGCRJE3fhofvAKVNVDs9Nr5vqiGtcDpUHtGL",
  "key25": "w85kV6sUML4vHhuCxjeSiAfmHpnb4zif39hYxWSFu7PPFturftRcBy3AfmJfAfG9VJ2jnDsFdY9XSnq4SRkt1eP"
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
