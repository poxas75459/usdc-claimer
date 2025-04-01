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
    "3c8XDGyNV8dXcYVzmjmAWgSyvfmoorqFHodG2WJSTRkaUUUNwcPam47YE7KubvFSCBvXsH9mNuibQHkWkuTMETgq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uDXexKvSxHdKQsezg34TEnWVYRSfCcBMcPBMm2vVh7pMbxCX4GnSTUABMb71HYmddagDWjjuNUYs5ZyVvYHcKvf",
  "key1": "5DfMGodr5L5HLnW4TgNTr6VwKRiRfmsyg526yrdnDYnjBckwTaPVC7mNbYHMzimUt8bTahQe1peohHQAfcNGpr6R",
  "key2": "3Jj2uHj3WeixmSe6xbKLgtDRnfZtuhLR7YuhJTzeo727A4a3EoPgAnvY2PDQKKYYaBANpSNYeVwCCa8RohRs5neq",
  "key3": "5ZBb1Grjo8i5aPYcymiifoeaAKkntUB9S42wEP7weNyGe5LrzawGP8TE8iyCDuX8AUq4uLdyzgazrvG3uqzNjecA",
  "key4": "2gz5tR4Hca7xQjhmc2UXUJhdWqt8M3NUzbrVrmcUJreuBjoR7c9kR6TRqq7mFFGerHzqoqvMGDjRJo6HvgDtU74c",
  "key5": "3n26c8fwRArzSYWGsjqeMuQ5RPSArcTSWmoZEfMdB9TzJYd8ydJudPdnFMTiobC2yjDHYCcQCe7NPQEDHCPAUeqa",
  "key6": "2ErBTe3RBPLCfDB7VXPjLrqhb4TyKbSr89GNugX6Qqgz1ruDg3rDRkRbiSSUsCm67NZitydAb6LQ2FWrvzy48r2Y",
  "key7": "5iqHZVSu17wS8zsfC7JnHB5eiQtL6jdp2sPjsu6wxAhy3jEcPHDiK14CK6gd7QtHenoMk3SxPCHQf8givXp6msbn",
  "key8": "2gbGmQxawu68A3Gum8eEHwJWmWcPZr2EpmZvHmM22UHYJr4SaBWXRdab7g6TJcsMXoGV6eLaiRr9awTutgKKnU4G",
  "key9": "3RQUTssodv93LbixT9AZG4fyhMU9TPsCsBCEbznGuqiy9ZBuFnjryTFa9ETRe5kJjtjZ7hbafySsMwgVUjbsX4A4",
  "key10": "5Bd2UNNAMAesSEHsyiGmd3TtpehnFopn3XgE2V5dGKUW3sbiPvKyXRCVWW2e3xHwgbou5UwftdBMskUpdBrNf3hQ",
  "key11": "4MdhrDPHJ8VxYDKTY6BaaqQyWX8mJTm8t58DWTAeTJPexUJEZ15RZUYwqhrS7YjpaN9W4riuQr6ZaNzFjtfhaHvR",
  "key12": "5cyRXrWLaQq7gbvZVaQ7tvgiDjPPaxtqhGNRFEkSZd35L7wNSZjfLVrheCAucw8vk7zQtKEvy8JRPgUbFf87zk7",
  "key13": "3gL4b8cGxjEHFELfXtx2xb9PbtHcFtkMfYQrGqgCFs2DtaHo2tSsQNNoUYF1JY89HtZuXmoCq1CmTgJsWhDBXU3p",
  "key14": "4ohXc4bbcbgVJmfepsf1EHVMR3ZoLsd43mM1WKieBGD6aUYBmSUZh8FkBQpkxiGC6m4r5Q3xP4BmtmQYZNRaBxnY",
  "key15": "923CQ4kCtTNeN16dKn3T7yu1AQ7i91hEwejX56qLcY6CcvYZF7XFswKRB7sKpp5ujGdgPGeXSFNk9jbS7rHdTpi",
  "key16": "3zUypG1gKaoyJqZzSgWCuq98xgP5X7GGDJmdMciuxnoJuukKjJkVwoFWbb4wvCksEfH7VqZ6cXMgtTqMtv19RBNv",
  "key17": "3Nmgixf1UxCWvaSMQzE5BQchKak7Xw4BhvXMfeUqztQFFsefHDY37eCMEVFYMcypPTYn6G6W52vSSZKYPKSSNA9v",
  "key18": "5UzZmGBkkrf2J3QhuN93DmWor5LYsQZTUYvPNmdDLQSCRK6ExsPPGeXsTkan9nnFnHoxFGV7J9V8xoNFapf3hNQn",
  "key19": "4VJi2mvk6jvMutQVMhsxD44FjNQAxkgUBX6xe2MxfGq2wSvaLCno65Xd8gFAyWejVHxniBVVtjCxkbYFMk56zr5L",
  "key20": "4w7VyX6KkWb6rjRVHqhsvJXmnaXNKkLMq3gsKshqWoBpYAeWuLi8erJzwQMCjnTjYSTApw6d3K7AmDq71Gvv634Y",
  "key21": "2Y6CGspE71DbLR2Cejzegec4WwoweHt4yCCQ5aeaVgMawYCd6nxNedsLsREnJPXjExDpdi44t2XrH17LxCYQNjBm",
  "key22": "2vWUTt2mfcUPMT4X8hM9dvBKBdvBiTwgWeFER6azhFQ4ztzD95caVYnpk2mVmEDUjgk5thCyDcWVBjzvhmsd2RiL",
  "key23": "2weXsczGijUSjz1uTa35N66KC7PFFwqiv2uBthGVUF1wcouxm89jVHuLushEauK9kedCKiLPq1RuKTyd6Zu8Z3ts",
  "key24": "5Bi4281AM9d7rF73taBG8DEK73gsrtWEhUtYE1xzn5uufo6UrjNj84DZrwLScUtgkVrN9qd3ZbyGW5M2K1eV9Fq",
  "key25": "5rpZEek71CZNWpagVQtATSKK3wAyGfAMq18TFfivos3f7m1WojhuTn1k6s1msYos3ADmzy6fQuhiZrgofCFHo2Xm",
  "key26": "4VGSC7HmVWw1JCuVk2utDB65dyiUPG3nQ7P4CTYsN3sieW9xgMcVapsdgd4bxrZMHtEwX7dtG2N5Ua4CmF2HNV5m",
  "key27": "2ZwLST3JKraHdHsrTcXkRRYFv61LuQr9Qzmx9RVwxhqeAkBJ5HjQS72XgnTpuVtRoo1vYubjnntV952kZXTEEen7",
  "key28": "sb32AqvrexQoaq8FBkWT9maj85SvgNwNqT4iPsTJfpH4qRYFJ6mvT4kBR2C736bzk32LxayUse4KW7SW9DHtS5a",
  "key29": "4gZdWuUWsqDXt9HN1SnqjRBbEpweKR34MsKX6ug4bw8AyKHATi82ehsCjtveeqYFGUSdLox7exTFjWx2e5SxgtCE",
  "key30": "24H66GBNwei2ptAfV5MnzKZu6JtQwtnpTGndBUXHpLwxg5XPos4Ug6P668J4enHww2wPPU2DeKkdJnpVmxFLKxPP",
  "key31": "5J3JrvgEXCEoxVJzrRCa659AM1wNHbmVVWJ83YgujZHc8arosvyWU1jRyBNaEMYN37Nwe21J3F8qJkk31uGVdUjC",
  "key32": "4J9z3nKf5PicBWjrc1aRUmTpnA1YjNBjXQ36gDGGJoxgSL8bqmZGPiaJWSDiL6dS5Mq8tLaLczeAMqw2V8yaC4rV"
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
