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
    "3qqnVGebfovnmauCpSdawWa4qiTComzECejH34BFne2C67uGPGiTGh2b1BFPBtoacaErkx7Ed7LfFMcCCC1aHYJg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qjNKZZpk2iZPpyRyNHJ6fiPB4X86ULe4iDsgePMXu7S3vuC6zDEZca5q3jDQq8drnu5MxEWrJnFqBzqvHu2JySD",
  "key1": "22UkrSE4XkVcLMenuHP7q5C4ahsqzwa2a9YJNRsSa6B6mQhsjnZkSAavvQRNP3uXaEEDcrL6Q1knEjhqxWSFoDBy",
  "key2": "4TZrS6mo3okA4UZ9qApS63u6mka9ZGLpPwpqxzmLpGYoiqVMSXRBAioq1GovD2Fme9kx4Y6hbBisaCUC5UaWm5Bi",
  "key3": "3G74DLD6CLrpYRrQ5UewFusRwi7TxZcB7GguBZFmAFQz7SXTZ3LSC6jAGxTY9AtByzQpEqGFGNZgUe32RssCT5mJ",
  "key4": "5PpB2TJVbfw2oMyTUs449Y3qFELwK5GgFuVW9W8bBXFswqRfjUXJwkeRkfPXJdTzaqvBDhwx4iaaPSSm5fitqi9R",
  "key5": "827H1wBpxCRuU6uEv4GRdCqZF5yrkkzaizGSqY6QDbXXLKXC2XxuCNUEN3L5hQYn1Ba82Y5SA2Boa2AS5h5Crde",
  "key6": "22CySfdJbyRW3eVo94HF8o8xxRW4J1kjwvRdtBtkrgwPbGJaPYyq6ZVUzCh7BA8iBbNVkhox471PzbC9LoCccSHq",
  "key7": "HENUBidUSYHg6a7WUcHJMw5wUE5DPgq3ha823MnP4veeJLvLjxbxHikwFDPz7qbdTvUo5jQFx7ysJ5NVczyU1UE",
  "key8": "3kD93t4tVf1kKSskZZ4uWGRchpZa2VVKyFPkUZV7d85HCUmvzNJWTTj992M6coPgTsnM9Pp5bcBXzwv7EcPQJASF",
  "key9": "sV5KCzHArB4XjeidwrXXhujX4nyeSKiovD4YcTgYyfWkyN9GReCrfT2jYPDqez5umfcwErSqussdSigjq6Vi6Jp",
  "key10": "2zNsahYREpomBWDxpr9sGPB8asRNgd9uKTjXkuUfAs9J3GgztjSXjzPpc38HpXUutope1e84zrYoAF9mp27jyo18",
  "key11": "5nXDQ1Q4Hod5MZkg5CcSAKrNrUZAcTnA1MufVzmP5wjM9nQQKKTfnLrkcup9Yek44YzRsuo1bXrNuMJzGPYLwLPT",
  "key12": "wV2acrnJxLYnCrW3JBkanfRCrBVwNHWkJJZpg4JW48mDc9r53Hw8nvUrB4hGmNwb8ioUDA4kgpv5K92aGnqYf1H",
  "key13": "3xifXx6yLaef2Y1TLwov8zfifrf2xi7JJRNYZVSmqUW1FZb7LXuAN6bD2TZR9H7YXcdRLeBh86YEdEkU6QBcpGx5",
  "key14": "2gngWixqivtzUhN8LebpLK4YNN6CuF2QfLYrxuxqDEQdXwog3FJB5r1fMXU5EhLq3vpsrrkEXNYoREPK6DCCE1Ke",
  "key15": "2gB7EvThMTKfVAcUQvKvMcXjLGSrjbcwbGiatsYmp6mfVYCJHCYJyVb4KyehCZFgEdYMj1rPkta4x8phj8nfKZy5",
  "key16": "eSLhPJeKJkSMW2KVpCbSZH3sTXpayg1iFxw7fTqpqiXk3toMr5bbPQwRKp8Nn8NQN6rr2Yoav38jS1fWBNX8mqe",
  "key17": "339rKYF2aNZeyCDNkJ1VMce69ds4z5niQrYDKcwG4dPaXDjovatZ7ozs3qNTJ7QY8jTdcS8rwhTVV3JJnrmdiwab",
  "key18": "4sT96S5T8vkQPsndboJHD2CaRFSmsDiowfYcU4Zp9K66Pd5eyRJq4R3tftVyEmL2f6zbhm5HL2Kp6tsFHKb5uqGv",
  "key19": "3Q7kCZ7B1TWXgJkwyXwoas8QFxDPKggTK2mNn7krEDw9Ektra4gPd7bViHZYzuiSawRWRLK8CFwoeGTTdNNc89FS",
  "key20": "4rRqB6JxqLM3XuyDA89zWtFdyizkpaNM7XtPGFMPK66jjpUVJZXqEF2rnvAbo8FA9bEpxprHQ9YdTQU1hCyX2qT6",
  "key21": "2imdVRD49d644QDuiq62z9Xj1SSKgJfRNziuXA74oaPnumbf9CUY1xFQn8sSVt5arTbuQWvZbAfX5AwSZURPYvWX",
  "key22": "K98NVRQmioshXB4iT11dtNtLGiXvuoYcAX1HVabKXANswFX6iCdWMmUf8jWorRC4V3gewQBmdG75Da4vnZuBEkZ",
  "key23": "5rb3kEP3BJVMCWHhbguCSbK61pLT35Nzt3zm7a41vcDdnYzJcaS3gX9Cww3XP591E7Fvo8i57hHwSCxoMvPCq6Gd",
  "key24": "XE6b9C5cAyvTpGVvRhaW7ucxZxKFDenrqYAP5X64bkknwJ4FaTSKuSR9nYvDfB79c3UW7H5tEhzBxqGrK3apcQ9",
  "key25": "wPCBN3pAYSoxYGagZ5oGettZtp1Zr8gQB4tXW5rZ9RSwxcqoBhQw6uPLJSfHv7CkfUqJSFwnZFH2EcNnQ5gLe3r",
  "key26": "4Jh6e5pZkwVwjG61eq2Mppa5WsdXaBUJu3aVdyjjkoJ63t5ZStFeoCX6CEcVhg71LWinUcRbXMG76rGkgovWhmUU",
  "key27": "5XKrSXPFrbrgGjpeU54818PssfWvc5hqZ6cYrHZKa1Goh6YafuiVQTaY6rWJVEgNRTws8CJa5rYwQgmWg47fedBX",
  "key28": "3K4gurEfPRyzkFUPHBKcX3hToGKUMJjW98zB3biMkgr3Lvte4oQU8FAeGsooeZLegSLZ39qZdwegiUWS865NaVWB",
  "key29": "scxoeqhid4jRzB4UF63y26R1g4fWzYpTq8FxFm3S7rQ8dc5HnTCdHa4XMpMEvpq2HUKsc61V8eP3A9moC1DpD1T",
  "key30": "26ELSewu2m8GUcDWonQxuQtq5FwArg7QtF39eMBB2DM3cpVY1MAKfcz9taWYXXC1VtstLz2vVc9HkKariMQW94Gs"
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
