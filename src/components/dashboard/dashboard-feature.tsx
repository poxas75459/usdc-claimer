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
    "pGLqT6rxD8ivEasXdc6a1WqkvSPVdt3a4UJouuJ4KR4CpBCGJneezv6dRTjJYuxD8CguMK392VuwqZvhtsZDrVa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mPGp4PtWcc45g6JxM4mV6FX5h8yV8YuQ2NuPVSa42qi4b7i8YHUCqHHmT4R1CmBxwWgSfb1KW1shVeMBFqom48s",
  "key1": "8ge6Xz786gTUZuueRZuyJrGaG2MFX9YSSAS14xom2VP1A8i2PSi1FNXeDuD9Vpd4LCAfcSKSRN5xCaV2izEDs1S",
  "key2": "4Dop6Yhtdj8teUGqKAGqV2m5w7EcLtTJtAK6c3Syqy475Do2yjDBkbENUfzfcYS1o6fugXvSeNdrLfYg6qxrP9ds",
  "key3": "3mWB4kH1QEBU8ee9hHSw2p3mWNf4JJvqGx6kwfCSCT1KgLDFTGJ2px3ntngx6S8Epxki9DLLRrmjccQrVmgNSzPH",
  "key4": "2wJQRp6xtt6KLyLFTzzcJ2GGhRcCAU1V2GHZQzEwrhjhSL64b1Jyxf5KnbVuk1y9FyufEiygcwEcmLkN82fU7mfY",
  "key5": "FQZn62FCuLpnXkd6sf99bbqGmdkyX6FmVpbK3j6yQzxZQMvwUUpY8NFQrkwAsneTfTAdh8BZkZj1hpQJNNSWBRZ",
  "key6": "4eQJ9PvBN3FUyKX7ELw5dcWQ2zZChg5GCNZNk6eD4xq6A3WAnGuYfJWf49FtEhJxGmAdRbdoR3ohSAxoktoi4NoE",
  "key7": "2GDt5qvPqNn6BRqNArTfF2VirSMcG4ZxmPjEUrLNascmZzdxqHxgGCtV3Z2dcy3nq3phhLt6f2uBTu7c13YQGkR2",
  "key8": "oBbEndc5xsdY6k1HT43Boz3LFeFhomJh2anuiU1nme17mJGnckoJ8jg62GZv1gZ5nZwX3pPoPUbXj8hbRdc8ajm",
  "key9": "ZLFHrCjBiRu7imZqBTAuniXrZUwf8Ss4RyqaurgPrTfsizMeGgDaqAV5wY75ZYUmrr6UUwCCBmQsGp9WQw2a561",
  "key10": "39vk4mNAmnzrx8UC3vdmyYM1PULo7KC9v9LmsSUWjNLphSfpWbST3G1uFsuANKsd3QthzdXrxaNvmpjAo95oyWXS",
  "key11": "2tqpmyS63tZTH2CwLBguUYQFx44fP7vzXrE4TuiXPC1CiwkbS1zNqMya8XhCsvTU8VUyW7bwh6kKuTdd9jMRKMDk",
  "key12": "3B2c7otuMWwnfSgvAdJHWsRVDzQ9H5WVPwfkgd3yEQwwhkFGVyicfg4iGNSo69SQmr7pZpQyUyGjGUf6R1JApW9L",
  "key13": "4Y2HKmxdVFzKGaaTpaJyX7ev1gMm5XHypdNu4uss6qD528iW65GDZw4okz5yUZCa8rDo42BXf3T9YXUBQVZKkaFo",
  "key14": "3xDMNXBhHiK2wCkD45pHZWTWdzxh7mCYUCxVTuRW8ii9Dit8QvfNdcEAZBg8XhegFdztnkUQNnGGnsEud2843XT3",
  "key15": "9dxTGmV8ysmLV4rrnDGgWc2jsjc7gid47uqLqtX8MEKQqgqmCFGdioRwnDAGnsJzMwsnSFtV3xymbANiwYcVfMU",
  "key16": "ZPSSDkM9sybdoj4zyEs7YHiA3gxECi2mqX2ivg8hYBdwvsDqHGFAHGiDYGEFXpNpZSW7YQfQ6APEAePq9ayE1XE",
  "key17": "23b8kzY4fuXady83ULwJpiCAZJoBcixojPHEEKfBKFtuQoBxXaHuEqcFLu7VUcikcLXJvqJbD4PXTWEpC1UwyJvu",
  "key18": "V8C5xnqNQ8dqRAJ6jspgrFwUg4zipmFhrVq8XDctXhjoMAMA2k1gM4ua9raSWNS7MiRJoUCTc2iCZwcs2jeKsy8",
  "key19": "5sQH6sQ6Kk2FuwFnLVnJ5kbFwY8sAjLNeiMxhbq5oH2dayEQbdHcZRjAud7Z6CPFaWQxeao3xZbK42kkcRAMqxnh",
  "key20": "4ysrfVkqbYceEvoLBoBatnNfSAvM47aNhUi19ceumRwkW2oDL4hdfzFX2YBvsgNf6xLZBJ6SyN1KUWrbxC9HTBzu",
  "key21": "sXZNZKfC4tPP6Poco1NCht25FpMQt7dJA8ri6rNHUAq3bEzvBiSmZyySBsjGXNfoi3gi6dKiCCK8YmBhNXwgLer",
  "key22": "Gcqs3gE8XYpuVTBLeFS6473cEMQHWDtC9WJzmCkmuwCWNfciQmX4ff3oNHKVmk6fJqJv73Xb42p9jsxuKe8gTpS",
  "key23": "368rsj9L22367sDYPDN3RsayD7JfxLJNd4cSYQ1jN54qc8PSW5qqfQaA7EtoDemgYdKZTxERzvhmRAcrP6dLJZfA",
  "key24": "4JzFtCTnT1YgJAuuHsn2BaBeJ1VzGdqDK3VQTu27g6561RBCPEkLwS1W4xPnfKHBamvw7xp94BCd6qa4u4m1UzW"
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
