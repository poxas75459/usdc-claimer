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
    "EG9mJvoL4QA2gapvNNoj1N5eoMLYCzF9xUahd9t2SxujMhZQhCPFsxQhxHpCiPKCw4i7GExrFDbLPQdd2kWKGTt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WBhk8dJ64kbrECCrTbW9ZpwVKGHWN72Bkw8LDwjchTf6xWqEeXpyRREkhkcUX65pCv8nVHJqATJusBJKVLatAQz",
  "key1": "5rM1Twjn5jfcKUtynsJzdJyLLzgVLwihtet3eio2JEL1znhmunCXsUFqyCXzsQUDuCgwVmxZCigiM6tmMXpQ8uT5",
  "key2": "5iEXCXekYbuoJhU9fvPKvczbH9r4Y2SFpTxhQeZsbwTkQzbkXUWRMrksK1ENowe5EjDyb8Z6tcDKvudiztmhmRrE",
  "key3": "5M3dviHT7DTyQ6ogf6og9VvyMNSUqVRPomW1n3fpGcZnZNNVp6zmUeZoHJtu1sfBcjsb2KnVvS3pZ6z6iNJjM7Fe",
  "key4": "5p9FQkVoBhJuhMcYGwLUcxZtVBNSDHdNYwJtmYj2ipRLBsA8adQFLSTrgrNq9GKmSwF7CiR9j8ZySD5KqCUvev8k",
  "key5": "2LWEJ7q5am6dSnrMm7judJeifr4KqZ6AMg4bQ6ZgTJr7PkqMA74HM1ufMPvZF827kngrjLNj8XCnZqSwQNYy1WXs",
  "key6": "bi1TSBK3aFjqfJ7QWaq86t1t9uA1MHdWkXpuDFMxV2PsH7qGTVm8VzHN2wtP8wA4pUKrA7ys1tBHqjxLdcApgUy",
  "key7": "21rUGUp8c7QmrJozJbLus1KzoFLY2qqPuAhsWhK4TnegnZqcvhAJ31sQyQdZscRuorxbNMxXfJytG8Bd23KcdVcv",
  "key8": "3PPsfQbVSNCvRsEt5aMAhZiUFPotyLQSHgKxGtqDSimMPyY1C6CfL1XKnEBDyda6r9CanjqDkAZMJ1iMKtjpSnZk",
  "key9": "4EmNxET9BTwdxD4yNaoT4HH4HWkvLXC6PgyvAL9wpw3BCV5AzBNGzRbG4AoqA7rr9W2EuFyeo369hNbCvxU52F2Q",
  "key10": "3ASnNXoLtgHu67v3EMZJ9v7keWZevEPcBvpAd9kptcy6Zns724Rs8qa5c9CVU8X7gjaFBgxFvSxgaYRN8b3PUM44",
  "key11": "5L81ZFUx6L4cCZzv1Q6MsxHvLxuTbNxufNdLCSYUCMhbH8E79gujrqRTKGY8mzfTYnxiuMTAqf2xrV3bHJoH1RBA",
  "key12": "5Zi8d8j1b3FYHhqJyFTQWvkgzTpBPGfU9WnoWhGP26f8AHdGtPFMixgNtXHyFhwPhU2che7ZKa82sGvwGdpyBnmr",
  "key13": "5w9EkX7wcS3hxN6tcqghG7hembdQ3VCyaHQ1SjH89847vqDPz6NGrswDSCS12bB44utduoGUGg2qcb4CeH7Z4ttL",
  "key14": "2ohquQ2yNGoyeGA1QHfomQSs2mcxYawKyKW3437VG8TwuYKyeBtmmxysf1wmBWS1gdY2ziBQk6dd2JHfgH14cNpG",
  "key15": "5VfmbobS8tbWY9XFKAxXgj4qJQ8qdDCHrjcWCiDhf7tL2y4N8RoaxQbpZNRAYnUhEdfYm9xKJm9556Esu9j1nEHZ",
  "key16": "3UsagHfEamCEwW7wEVJ4zySSjCZw1SuTtvte7yJi3sRShGT6JboPg56cQ7vh4R5nAUFHnJEkFExiWDdFc7viy4Ak",
  "key17": "2HA5Wx6tN4WkKgUhmqkpUxNsAS7Ljm9f94vXiRrwCiP3arWRthpayit93c7zxseggFkuwzzGJvzCzERnk3cuhmwV",
  "key18": "xttr7CMnYkThbTXtnTBssUdt38Vx4Eyaa4j6em8g8R44yVGv4ZdtsP2pSM7CwwhV485qccHvrPfaqnYpdAZq4HU",
  "key19": "5LVrux27sUA9cic5xF8KA7LgWxBNhfrzxW98z9926ReFZcqPyv46iCHP41c8nVEHUyfUGRsoHHMs7dNyZa3EARnz",
  "key20": "5ALteucNmvHZ87HgJxoSWvZGm7GVcsYHDRWZjBDbzmTURBFca2yPCpbaUobNZhkCYDwuCMAEMEdSo1kbua8vsKuk",
  "key21": "27Cv8fH4TLcTWftwd6G2o9BtqaXJmeF3hF3MBFxjwLVVj9hqKA6yRTcKU142EkfYymAGCz6ZerMh9mrLgEYYXHp6",
  "key22": "3Hbh4ysVevwKP8vfXG2TEoUufzVWVY81Sz1qs1hQoKrF2bgz7a6UUpLsxpzenaZze4cscaMgXKT8yMkgonAaJ13R",
  "key23": "fUd5f9Lc9jW7u3kUyno911fgra8awipnfZF4mNqyQpXofE7hKnhbEpeNv8gqzKEhPhq4af4KifV1axUtP5u5cNG",
  "key24": "4wuv2jJm8ozK1VJH17S96mZuDHGq62w6KfRE5ovEAARU7PwSh45tHEEqZ7adUczmjx6T4zX4kusvdiRqiPx48iP2",
  "key25": "FNWtZxpxP6Bf5cEuKrW9z8twuCVxNJCyjjqhfuwxzHRHEFGkYWjtKvhirXnMuHhq5CPcMc88sUjP6Tdh8r695G9",
  "key26": "65cDWyCcmUvJRcFEbcTHAUrEpmq8SLYKp7xgo3fq9KMJ7JDzR9bZ3jg8FRCk5vYTGDMKQAdD3efhAvefeBWL2tns"
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
