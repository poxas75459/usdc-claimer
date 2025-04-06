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
    "4piWAkarAzTSpSNLLDHY1CnKnJMc4McjVGttmCqg6re66sUmzuWujSbcFGz3MaCuzrGX1kAy682E9REbwraZYA2U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kgoLcaxqY9RnHG7rXByryvQ36q1cYbaUuVfYuf36kEf99hudfMwV5aSrjLmDSv3BxroMLmh7Vsty3k1tATXVZ8K",
  "key1": "P1Ndsv6TMu44PKs8uVhxv9oXBR1saYDpWpmZvhFLXfRqCAr39rGtmu6WPcYKKVJtXXUCk1TY5LBiLEdCgor9Gmd",
  "key2": "34hup7kWPEGH4UWTfRqVj5HDvgK5iqTFGR3BVxTDLa5PoiryEW6tU1jjCkbr4bcrWSDtQ23LEVtwQPDyuZeKvCpA",
  "key3": "4uS2hYaiM9QRAvwTXajG7vVP6x1TSxLwRX3wY4XQT8nxkqihJDHFMoeHTQNEKyrib8s66tN6Suef8iTUcH9eHy1W",
  "key4": "58wMX7R5VfYMndGmvphVaa64shQuJaM4GaeQucdjGF7uywiKayQdpUnnsL8i1iPU71VkFuxdYfRyVFHSxUmvstgd",
  "key5": "5p4zsP7YoFuB4FEdbYcAKJ4XGvTSM3RAymXUHuQKY93wteZHEsHGXfRUFDV3Jn76oBdNwucdbMiE17VLFfunbBWQ",
  "key6": "3uQb4aQfiJ5qnYJQ53Fzvs6Uff8qBwYcM1f7A6riMi8EjSGcRLcAtx23AnHu7Px5HuDVnF6hopND98ePkJnZADWv",
  "key7": "Er5aQGQRKksrc87owVxiX3E4fuEwzhHrWXzoBwam9ciS1zxBC74Pw8C3HG7UrBMnJ6gKtsR2THaFK9aZwqmUZgA",
  "key8": "5iCiELGYYh2hBKP9t4yRFb6sAGEUbmRwmWaUzwT4BQWWcjMz5Y1LhBepeXKqa3bL6Mq4gyV3vKJTri8G1gkGpkoM",
  "key9": "3BqvKaorW2KxsSn8FQnJaZ58h2i4Z5hcQGqozYiVSKHKVVzEgH1zmZuT3MxQvc3fkDgQKSkKnX7SgY4DDQNc1Pps",
  "key10": "42YTVDH8Kku1X7ufmjEM4xRSaC1KywPHKNoHHXUY26beQ8v215DYmwrcAKK7zWxJY24LaJNcJZu14aFGGuvSpabS",
  "key11": "4Rxf3xDr1CEMQ8p1EpbZ5ePpQTuMN3J5h1X5S1cFiHZFK6zgeXW2q5Rt3p6G3EnubFLdcXXDDd75ZpLxPyN1jLE3",
  "key12": "4Y4Kur4C2ojV4ZebNfQn2EL1ieDyVTaSHsz8eGmd8UYRMcWiGaJTFARiJJkCN7Jy1gXu1EdDRL8JXLxPgjD6d5HT",
  "key13": "5Aa5CztUhR3odAvT6TrC96p8PucT5ZuHXnPRAFu37M4hnui6dDhPT4AmWprZsmBVuSLXHyN7Q1YhqaYEbqCzCAbh",
  "key14": "4ZFkirq6DaG7CTNmgJVH7ycxXLtvqZXpHv8bMFcBBFPhZzz26zJgy3fVUWNDFRtJgsQ1PbeNivGN5wBWAZVN3D4A",
  "key15": "5MnJSjyWemUuVNJbe16ivzs5H6RdujWVcGgR8yBB7J7JMr8zd9UmF8GQbFbf1AB1tqAerbF868fezwMm1X5yBke4",
  "key16": "PKWVfBKSAp4v9Qyqda4WNKC4DCmz8QXWTYmJ5LE78RsKjNX9AC1aXwowKT9Bz6VtFcfLp2ymt9hR4kos4FrX7uW",
  "key17": "3b6xBvDFJBuDnwLpqeCM788gsin8WWQRx7sZRhrQWEYpb5xiTawg8mQQH8RsRKCPsdDt5RjNv8H3tEJm5a2T1hFP",
  "key18": "5fYPsSzFhHgitSLej2yusUTyS6RXhMZ5g2sefB4Pxv4DCTX812GZ9gXF9GfpTLgZvNPgmKmj1JJnQvPw9tLLija3",
  "key19": "24bGBYDFDe684XkbCKHPD2XhZHLuBqAMLDnYXQix6igouWUzqAJNY3x6pk5FJQC7aeyfC4iFrX5SmwSSheCJCbFr",
  "key20": "5tjxctsYAfjMC3n3QfWDVyn68U8DesCvoFGqjKyB5bJ3ZduR8XmH4V9YRpUf2TUihJhdaiBRA8fGimKt3bmv7V5q",
  "key21": "SLv4hGuDZ1dijrZyTFg4fYsu1ZVGugFXYCWXbzyHL3XkBqnzx9prqcf1tYxuu4MuGnUwYh7kic5Y4sBq1igxDYc",
  "key22": "33WH7UPzpkpfmsYqAmYentQmhC8eKXCXcSyR4AhJvfs1sP4A82c1uuyfZXj2dkUtZXijJuxbM27vMbRujFAyNmkX",
  "key23": "3xFHMJVjRruBopyySdFts8TC2RGarstVMe5daS6qgv7HaF7ahrfk2u1UnSBozzZimhHcKbjr6oBPVemk3fzsutzT",
  "key24": "2saMHs1sxMBD2PrL7VHVrCp7t7weYnvv4foza38HYRrKjHZK5ZBPxDFPcPDaKkk4S629XT8NeLLCCX6hF5wDWkaR",
  "key25": "486sdKsCiNy5itmMUwzQKbsqeW2AXtPtnvozqVs5goYyJZrzq1kDfyrvZiNuZhfe3GN7xHwkAJMB5KCBPvR7nVUW",
  "key26": "G7fDZgjPD4wmYb4XWQk2vxiGJaycNiYCqxBeVf2fPWneZNv8cNdnZiGW7o3dBRzTBkDtJqB2akE6HRpBkGBjAoR",
  "key27": "2EAaotpzRwvA3b1AWuNf2gbKokXUQStXB8iwQmMGBb8trEN5Q7B384AwbnxdkKumEXLLZeQ9op3cDJm3BcZ8zxGz",
  "key28": "2vHVBgJFYd4uGQs84rj3g7zoCVTQWMXzHLiNGLugCjJp8RkEDo8z5XpZLwuy6mvoG3XriKCM9YBgK5cRBJjxkZh",
  "key29": "2G5YjCYFjhZkrgg4F1mCn7sSe7pNQ1q1WDpCQucxuWyZ5sdLRYM7DcpTSNUgxkdRaUWZ3NTTQKUHV3CVtfJPQRiC",
  "key30": "24qs7j5szCK1MvL9Pfjmd6FLCNdDi73RWhf6zGdEZoJJ9uKQCz4pEvFGtiU8AmKQoUzwq1RMGAVBPQAq4k2rJnr5",
  "key31": "zg36c1XwfTTG7ZC8d8HUFbKCQHz313cm9v3wv9YYu8fgjSx91CKYMNdZavwSEjTycv39NGkKuPeD2Rru1jXMYwv",
  "key32": "3GdHBiJph39xgJS1pfik4rTsfRA5oH34P865kGs419tfxrgcRmPKNSzxXZ7335c9K1JfbmgJyfNhhx1GazwXcwtv"
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
