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
    "3cghXDYwCjn8drxKJUQhVTifBFejbVcmK47NsJ123xQM1feAvkv3vPNADV7jiqfZXgeL6FgRji3UxzbY3MJPgEe7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "V1Jj7YxJqyuv8yoFGsUptbxwLLSZJ5CnDiivVceJggBKtgVHLGhM7Q6qm7fjB5HqRKNqaMobmAivaSXkbR4RgTg",
  "key1": "2M8NJd8GjUJUMVfVuDPjYsUVEuFLDfJ6xzrJRMUgt9P4xEU3M89gyfzD3tzwNSTNsFSrddmMfq9kpv2tXjXLnLeH",
  "key2": "2CyY1N5SPTDTRcwpkCdUJQrhRp2UePU7ADcMNP23KNBS1RRRyQfpfuTuPD7r4EbeadQT2AZvprTqDeEv14S9UbzX",
  "key3": "5czgvtzq8NMgdgiKYteqncAT9v4ND9xRoQ6oKroHpo6U9FZCckAh8vBctSsVr7huRSv352FukpX5YXXLyMuR7JGu",
  "key4": "2A44E2JfHk1c4JAw9UTKWjwEJAT27tAwM4DZWqgi7VJwztPQcdBTxrMm7H2rhB53NXpt7mUeqaYHzGzRgSukUUUM",
  "key5": "2vMnFXADEcvJfVdEMKGUui6GEbqV4FGsTBB8a2DYPL6EP2S1tMUHa8BAJUDGPxDHsZWecfQkCqHoa6J6vwAfVARo",
  "key6": "4EaVVBRKTmc942fpnr2U681UjB4m1MUM43m2XF6UQUSVEsFMwy7m8SXFGCA3fqJPZCpYgcXFHNeeJFt9Wn2kTjSV",
  "key7": "J8XAykG6BBgvpJhP5qLZzkVbHTE8oDfxL1b9h7MveJeRhePHVimUx58Y869jXxRtac5esoCi6fa2CELw7DrSFBn",
  "key8": "3PEnu623zvMMvk8NxJikJc4MMZuce1UxjZN3Fr56swi4NKiWyHbTX1XKmXsGQaAa768NXy1yxtBfsVkinaDapzAc",
  "key9": "4VpxQTMUzmyaYWgXCpd4qrU3Sh7uxghEZLUn2a1pfytNXLMsXaTxNy6G4gsUkkhe6DqH1PAbEdMthhzp7CyK95sX",
  "key10": "2FECy8RykgVTfPEFqdepXp1NvhDD4E3X7xG7MSeTFi51Fi8oqvNYwFCMPcrJJQEAxHFLXnqMNgGrkWArNWL3admQ",
  "key11": "pddXGS9At7CXkcHvUPVeAAWtcF2oai591xGDEaxoxo1AkWTtiQ7GgEmuik8RqQ4HDvPrvGwVPYbi2oBCvBwgqZJ",
  "key12": "5Vf9euZFgox2bfuAmicxAbmJJBUqPNewdCCQFqqTwhDQb44FMHFrwfeJBbU8cpAzj7CqAkjkHP7bYyAyrfjL8hXX",
  "key13": "32aw4XczXDdxjen23UGN7LiA7yqkrdaqzan7vs2Ddt9YrRz5afiMudJM6boqKXXQJqGPNyg8crHgQKe3GqwpKtmE",
  "key14": "5Yc1jshRnLK2W2qZ8rpMTMRZDVgEDyTByRMxtczRvKyfhmdeQ1hhNxMCKa7d9KBH2JsWPeuMPGHXtxM5fa8iXTRe",
  "key15": "3eaUzv6o5kWMSS8zaPKZLnRQMHFvqXJpm5sbubD7SiXdcVmJDxhTGfbaXsA5goPddpYteTSQ79DFDn3w9iNPVXDj",
  "key16": "wQfBzswtvnGkkPPCvDqgdtdszfRjQoCC71rg2UvS9EenJdFZNVvYKFA31vYRg6VuZkvqBWc5bLQacdCcKaoDuyD",
  "key17": "kStR4J6itabNGmvv2wwKGPsQx4unLF5qnZVv9wSnXZ9Jen2wL4PnFVJK14KFQEn8fMSQW5jkP8ZRh5WEifeSH6G",
  "key18": "4xtmav2dGe2jeuAgxRVXdYwLGNMw14DuLfCh5yhPD9fmNep8tvQ2TTUMSi4nFuJaGCjW5W32CmhwEj9GmUp1uGpR",
  "key19": "5ck5uNyxdjxU7uKfrgUpsUyDX4VtkHNp6PkuA1czkB2u2qroSRQyGfe4ja2DSYXhg6pB7nLZc3YY5iFAWoQ4zZZd",
  "key20": "3eNtyVyrY99W7cdk8vLk2niZWUAFrtof8uCvAVX9gjsDWvjX6e6qnDLiWJpLUCbatebD9wHYgJmxhmarPoa9Kmiv",
  "key21": "taipeJ9A1NXVEZ4c1cBhMoNqXkR2bQDk1X4eKiBAs5pTbHaikHgpCe34sXtRZtWvo7NBi3pUKHd4CK9B28NXa2W",
  "key22": "3KoP7V6N7ZoGuK8aZofM95feCJNivrJKUXB8q3QK1NxAsSw3EqDKVxEPCgcAoMVQrdouef4SBecRwyH9a4cPgRDi",
  "key23": "34a5q8s5kcfyoLomd1AiMvdAQtHj2VBp8geHBgp1XeakGMTYsnXLCJvE5z6xyAqnQg3WJ7Dms8PewNzj9SreMYGo",
  "key24": "2bDrYWY9a3a8S2YQEAiUzCsFdJKjRn3apPFPJhm7vNHQJaNpgeP8W6iuUQG7MRcec2AkiJjumzQZTCieeUzssHtK",
  "key25": "3UwNJjY2pmrkTsNGFeEKjrZALAuPdJuMLH9dFLGvs8ELD1kg2YeuhtZqumxn6UyR7uWKfYxKYoVExBVP572YbL88",
  "key26": "5D1fEMpNfEv8GX8Navvq2GFFYeL83sKqeZoAZ1zqqtMSr7JUVZpQfqGvHAAUoXmZ4AZwGKYq73nuizHgx2niAWqK",
  "key27": "kJBKtEjMr2BA8D542tkvwgHnNp9kcrsmqinTcoVUAxr2hHd3oFG8ZBLTCGw424pGBZHmwrR3u6LBzsHoZ8Dasbi",
  "key28": "2xUpxVFft6SzeifyHxYTHCR7Vo5vx6on6wKyx5ksi3RMke5AHU2Xdk44fZCCNrqKxuPs6tasvxe8prSQfqdJqAyk",
  "key29": "3Y331PDinGh5P5kwks4WEVNofKWh637krcvC5WbLFDCh4YcSZd7jVy6NGDRmVFFPNqPSsH9XE6ucrmMVNnK2iJMQ",
  "key30": "4ktBAv5gYfnHrzqTx8A2NJnXDS21GjehL1yKDgkAmpYGsGth8VH6biUYVxsULG5R8DrkHLCufMvtRnfp3L3JfZfT",
  "key31": "4aVdEszSDW74QMMrNkknndakBpeMGp4SMjK2J3xkEyP287s3H5ighUJnmhxwsdrzWVwkuyfGh9e6EvzYEpTi4BTg",
  "key32": "5thiMv7iWP4EVUy5pfXdt7tb3sqUGHNyyjphUwR6vK4Z9UC9V9yWazQLaGqYgKyqV79MqPCS2dF5xuaZmqUvzx8o",
  "key33": "43dkDTpZV1SEHY6deskDLtGwPSz2Vdxk66LH8HUQPbQMeMgZXX6vdcx3pADRA2xbq513iv4bXJSFdjZDsMPN42HQ",
  "key34": "2YvqEwtCYRLZdTs6LmMB5vpigit9VUpQz3WTYnpRenCt66DGAwCKKwRg6CbhcRjmmMnrbd2YiETbZumnbfp7FmMa",
  "key35": "4cGbCfW7VBqZcU2eJXo8LqYwKCaQnTn5MRPrGvDrARAxT1F4NoddCshQyNnWbaVeRKGzJjXUn1TShkAfXjoJBrdE",
  "key36": "57921HpYa5Ze6d3xGxi2vgsYyv265e36nnrBfYxjbE1GMRkqcUvs5w1HL9JWuX2pT7umftfwHXMMKs4VYY1SypFt",
  "key37": "KXcuuh4FApYDjkm4FBf3F1BkZ39MDns4BZVRAfZ1F4p4D85fFULQQh4kh8TqbBJEVYxwBPVkDRBdhiKmS6TArxL"
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
