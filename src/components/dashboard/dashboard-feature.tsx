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
    "3gGN9qkAypmfUiutFYnpvRKEWLTUxNGKuVNRGEyP3W8KAZLeFUQiUL9AYb2YpMBkppXQULQbA865UofHfK4abDdg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Fi46TiLoMQETHqM2gWJ6GBXAA8FRYXhuYaz9qre4PkQXnHzw7AvpCyF8CSQGmfnjZt4QtXEMA4W5HahVSHyV3H4",
  "key1": "4E3QZsuFkrq3FmxvZ62vfFgBRL9m4depNJ2Y5oFaUZcNxw3YZsoavvAMYj1nPJxKbrB9dS5WtbBEatH1s4J8BMCr",
  "key2": "2K9RzwFq9iu1RvXnJf4FuAS5WzhMcdGeQsREFWijWcPXkyaAqUoszgrtHkBTcDqsLDP522vpVk5Ctzu4yyBAfkpj",
  "key3": "5LuXR9cAxWND5skM34pjCZYA42eRxTgUSZ828wHChSAuUgFb1xc1kH7Tj8Y6vdXHnYbhH5pyWDQGMYCgaeJRxM24",
  "key4": "7hP7s57AVP8hjzMpzaBNQtZyUiogbscBEpDmhy9D7JUTvLXf2xXnhHL4xULQVX8Jawdv22nhRXRix7qWDD18YKF",
  "key5": "5fsBSnA6nn7K28aFKPnBV3LmXELWxwkWU127jixPpthwNWM6byTSEKBUHUU7NFG6oodE1RYMVpAKY3nsa1L1hEAA",
  "key6": "p8kNzTY1SfnSQGuiy5vDiiCQUqrpx1ZPUAAomyL2zCCBEZ183kDgZKwfCn6RfckHKgXbssRPjueMM6i2frSSS5f",
  "key7": "49DNVGya6HBZf1V954Xs29yZQt7Qn4UBxA4Ufa1jxd7LfnPdYCW33pJbPMqPBigJRP9VQsKmprgF4y7ftgRt72os",
  "key8": "48goH5QqUkSwjppZHByfk3zLPD4BC5K2pnWbovAsuJQEyRjGVFXUq3MyWpg2wC49stHkQwKB7QpjmY1UkSUTH217",
  "key9": "61Zb6zmDsZ6fKBzX5zBkP25BfuEbuVDhDqoKoqumBMMAnKxexizmdQh43xPAFJpHgg4hRSwu6c1rZg5WDb16Gt3m",
  "key10": "4MsPBJvfvprVEheF33J8n8xtUXaqszrh8K9EDZSjWiShzimM36oy7xEoAGW5z89wqEKswEM1ApyMpN3ko7c3eJFp",
  "key11": "4mBQ5sredVza4JJCy5uFPTh6cSBu9zZQeNqvFWygGQc27wUejZ1zcTQhnTJLmFqp8GZ2PJpw8GJiP4vSD5Jvi3be",
  "key12": "25PkZ2B76HGJSHpg8Xp8Utm4r1e2bEms4UQJ9waf2LGUozyivkRbvumXnpmfGJ6xWEDdDM4iySKszv2Aud5Wwqs8",
  "key13": "2eqzc7pm6RpR3oztG2XwvBDkBj1czNya5WatqeTUcrXNKc4NM5aBUko69kgyeKzNfbmS3EKcN4SFWNd8frarwLNU",
  "key14": "2iQsn6rUzuqhFXygwy5NWDXQzLDLJErj7vXvcf2sKJgMk3E9CrVFB6cTDTMMDtDzySU8nonSd95stW8vSDbvwPLq",
  "key15": "4oZrKAiViENYCvpAVvY2cxbTMqVPntTKVrsoFVPr6UoksLHa4kHWCM9ekXVQyC9itDjdqaFwAHLgA9gXCrxfqWSv",
  "key16": "4G4AXws7Me4roM3DZmFwD2KUCmco1SUcJXNKNCv7kUFwB2TU6zxpdofKZhGSL6bipYzuqsThbn3Co4GLgbH9T4DT",
  "key17": "pH2BsPYFXrChiSjqsbSPSGU4KghNU9hEqSkB5fDswXRvvnjpnXV2v6gec2DDGutKw6RLpxfqwg1fRjBoxr5YDhR",
  "key18": "47WbFDKad8HQnFYw7jwZERaKoR9NbzygWAhG1qv7z6vT2bvd7VLnxrs6zMdoZwd8swcmdjkEmWs6y6MLAcSznueZ",
  "key19": "4KXRq8ShdXV8xj4UiCPCCDKGAmtem4E8tduMVBjFUxBSJhrnkBUcDdpvGrBuEYKTXWkhREzmz7B7JuN4L3V6HV4Y",
  "key20": "2TMP9Qx1VYMnMyBsH5yFj6vkxWUu4bSLCjjA4cFJ8ybntbhuDn2auCFPZ6aNbL4dTumt6nWiZoTsHSUkWKJMeHU8",
  "key21": "2sC3La4oZnQq1JoJ8tBPWhK1NRbKkTZUpVJG3Pjwnf3pZ173iJ1bucSYsmM8TdgyuF5xDjUDMfUcnE6vb3NKM8ec",
  "key22": "2hA8wGjiCmGaYAZjU6bbKBhtTutcTBsYpWGCdHjuckzoda7LMDQXNLnCTiKbij56q4c1cQEYsrW8sfjeMe7LN7sK",
  "key23": "46YuFeHo4HDVP7pKRxbZ6F8tXj4CRm1aBApzvUMq9NoaPTKQXH1TexVsJePNLPkZGc3tAZ7JJDGsaQsuH5xotwFM",
  "key24": "3JpAkCgcwHCSexE8PwpL9TQEdkTSRnhSHUDLJysrrr5QL9PqrHAYTPvxqrEsj9kcNWCAApKJtP4wENGecYrCCbyQ"
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
