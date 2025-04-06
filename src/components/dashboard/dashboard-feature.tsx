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
    "y1EAaszpPSGg6epGSqdyCy4K4ZTesovyha7rpHcnNiwD66seJ3wvjZMJ4GKmEs96myp7YZ6e6Nvps1dCneU5A12"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63EUMYcZTYDA8anfyPWCyb2gEnKyN5aqJzR6UoZPmeR4N1YCVC9FVqw7VCYvEMjzCkG5fA9SXR9ngydq6JFue6WE",
  "key1": "2X2LAaXLqmzhVAzx2oqJW8N1AzZGkZqZozmTjGaEBTmrF3o36FL7MNHNrzDCcQKRg32EYDLwWoBTN3F4EzUPggf3",
  "key2": "5LN7RURpiWgYeSau7SQZJqkP1ifgQTZEXVmeGFcXfS1vk8R6PuUygtZs8YHjd2RatvE73v7DC76RVSruN5iZBFBu",
  "key3": "2jZTGu1cp5B3aB6QLuFYqeQVDjS2F1AmVq5YsncwufCq5Ju1QXdbCdunbSgt5iLVJnJDpESe7FZJ2uLGhTdZs1eS",
  "key4": "61byTWe3wsgYTgqvjkUox85nzGGzKdosrRAhb27VNgqDEBcgrcPm8dCkuL5F7vqKNmuMfvNt5s13q3sFYzSjYRCo",
  "key5": "2owAuEG49qPaPUTwe6ku4RP5EEChANmkfEhyhMZ4fyNHHG1JHAKq5hsd9Kb8fxUaor4k9jiWvjwVkSh4Dn3S72QL",
  "key6": "3EVa6qDFoucodPE4TzfXhftu4oEA89S6RL5W8VZbCrJuaXBy8847AKsAWDg5WZMCKrXxKxNZHwzUAUsQWt6PzAHv",
  "key7": "58a7vNjKFMY6abxzVLvvWqDQKhxW6QeEGDz4HBtsuGwttKB3cvtsAVLiVC3zvFmkmwiNik1B5fhCxyXeCMW1ZnZ8",
  "key8": "JF4KRLoEMJtoreHABhg3SKBKWo8FByXUgcW9tPTJ59oZZ1APyMGAzTsCtoGphPuoC9u9gjDjuRkDExj8Cwc2DTa",
  "key9": "3TxTSVfEQbBvLf8LRDearXx3aHgXSRQnLQmqEjgCPaASCqN59kXRuR1K2Wwn1zvs3Y9A5jayRfnr1q84LBgfpSMY",
  "key10": "BYz1yWRtmqBe1HPm2UYxvL1tmgGC8rC2SEvCcNWjcjHodoWBZe5jPV5DniXSNTMdUJQNsZhcgmcS1NT9mtw5ifS",
  "key11": "23qmbUwswuyQyJqQp9zdvMpnLF8z4gSwgDE6Yuk1mGKit2wFjdsXkci8ri7SBEtCmBdDhtXrC19NqpNn9USC63Zy",
  "key12": "a1eQrRdbS2ZTKY5TLb43c3FUwivBvhBLVQtiSoipjs12i61yZiTdfVtSAPA1GSf3tGbxBKKXsG7kMGWhc1N89Nu",
  "key13": "2LD5ReD4MuUA7acJx6NYWxYUfbuSb8fwDh8SMYBYet6Fj1pP1WPM8kqBESiDJqSUVg4utYgSY213xahigDyf9U8o",
  "key14": "2XVWfxVCAHsRoGPWQFzvpn3aYupVFjqwVNJYGFnBzwganaRf4C3F38qtvrPDk6Dn7wnkHcuoBs6JpcXwWBVuFm2A",
  "key15": "3zMd8MSfcKzYMLNsk3EyMDvyQp2AQ9HuFRfsYszmabERgguKhE6b6mYbTYmdcshpTMEvjvsPcbxbTfC5r8HGg7f7",
  "key16": "aAFdk6BLXjbAJk1Z9pymPhKsMLHvVbd1wHzVQD5KqkLtE9XrkCnbnmANpNBWJRZbYNGdEhWXtBH5ftuB5mzfKS9",
  "key17": "4xP5qXezZ2xrZ3sYRBPttHyhSUNqKmiLcxLDbrbbZyvnyD2XACiPgHM98G2azthsNM4R8AuVZtgGxkMvV2npFG9Z",
  "key18": "5pgkxPxyKCqHrspR3SZTkayaYhHJxbDoG73eK6CtmxGy8UPspdSJegLaMEM7ku8bR46Vak5QUzvpyAaAYHNs1PA4",
  "key19": "4vmeudYoF2ws1idYJ9hKRGAqwvFo3Yj4Qz9M8rteTUFAZNLBNr75A8RjfcswK467cFVeqoRXutci7VZf2TZFetLe",
  "key20": "XM5jgp9MZuaM6MCN5j3UfB9AcvP79fFVEcF2mPo2e7n89KBhNWEbWt8hiVW423Gdma1JqQTLr9S2WU9Mb23zDpn",
  "key21": "2L966k9JfMLf1qnwsSpE9UmbyGcTkNyyuBeT51YP649DUgQQqzpHHZ1X7VjpAMyhKiM8CZtujyevMqPN4MPfZhyC",
  "key22": "2wyX8kX7nHQm1FAKunGpxFvan3gUfXiKLi5vAtveKyjCyBaLoTM85zB2R14wUAjiEyXjufb5FZJ2WAZ2suVYkzAc",
  "key23": "3d7uQkG9rbXbp7s74nnZTau5r8iAbpFzFTvM6YkDDoRh8iVq61UH6wzh73BiTbboZXpdRCvxiD6YXtNvzYcnaVNX",
  "key24": "EtAjPiU4expRj7enELuQxZFwxCqGgqWH983QXNkPE8auyoXb3D5bQwVXppR4gLH6eHJeek9xkiehViWWyin9WzQ"
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
