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
    "5iVDv7pb97ZZT6144wEykcqapjPCckdRaeHpZCBPNsETT6yTHBr8DAvntAbQKwjR1qKo1QbdwDFSo47ZHHknHy8v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3d1Xcfw1if5wrJWo8jZ7LRK24tUrsXqbdHnT5mYn1BWq4rtxxzFdYS7M4jUi8meNdUPUyP4fsFSRcXZ8VEd9Wvis",
  "key1": "2z2yfcL1LbsZjpvV5ryCnqf3we9wDLj6T49hMXeto4sHcB6hPB2Ai8PoYwX2YbDxrg3zWRkceWs9sjoV8okfzXc5",
  "key2": "DVM2pfHf9YJFAsX28e2EPbaadw8jc5EMCaHbCtqCva12s1hrfmmqy3gEgaYPBjs6CuW8fvRAcUwa6HBYUCuQsQe",
  "key3": "2Mbae2tHmaMNCZmrZQ69kT3EmoB3kQbunRTBYZ8zpFMATY7CRP8eTuNLj72NKnF8kcDod5Dqq5ZmD9VEj4hbSVgR",
  "key4": "3mqkcDEMZdQ4TeADDAUuy3wQmLShEoCAGuqG21S8XgGTSdHLoKPasfkNfgoTBhihVYy1zYthDVZ9WGNxB4pYxKCV",
  "key5": "3jLmKropyspGg458eG6a8nAamTz2q99fmqNYGEvh2K6UwYVRef2PQcq3PpPPCjSLG53PTagaPkSJYTYtcPAiBiDD",
  "key6": "2xbET6nUNrwerKn5XjbY1Skitkow2h6sExEqEHkJVJ3GiLRsp8Ru6KzR3x4knozq8E57f45qbELCED1jo7AMxSQG",
  "key7": "25FFbZFTxJN3NviqKRVeFAz19fv54Xp4F1xmtXjmbmm15yaXYqJQCJ2FV4zb5JK3Jy13W9CJZRG36cCptwoYzw5N",
  "key8": "5HAZuonZbUNZYQxk1bJYhxLvieMTQnNeKnp272xqFCPdxhemX1mELWQeEH9PLLpFriNG519SZg2SrYR6TJeQuZ4R",
  "key9": "XiHw9FFQxFSvkwMZKk1SYtX4eLGFRRfRsAPhK3MUcz2KKfgiX8n7s73aUv29wQFUS3Z1BFJZdumDSeYc3RjtyfA",
  "key10": "3V6u7viMTaLLJuvJccGX8XuW5v1MPrFzQeBGXS4MHsmDaSb7FmA3oXYUPZFpj8FVfbNhu5Q5goKE6pcRFV14sFCW",
  "key11": "oJAzsK1bzHMd1gqXbk9y9HKBT6WcqXq8kwSGBrd8oEF3Ct74tcBWAUaoVD6U6YUqs7twwehxXgAVTzP8JrS7mFj",
  "key12": "4inYeRJg2kkxvuhEdZiyzTzE6q3v9jh28zXMyiRzDWfECivC89nC4gnvFdPtSgvqXwJY2Du8p4Li4jtAAr6dB8pT",
  "key13": "4DVQ49KfezpF5f9oC8ZWk4dkQGPt2gSuG9w25s8Ap4vn8wwmAgzgrMVNUpQo4YXbDRLr4GHPMvNGfpfXDRrtHxB4",
  "key14": "3ni5fTrFzvh6ydPTumvVJaxV9Bpz3w3fiwuHDXNgjCp3rmi1CXUWPYQYasg8kBhBd6goK9KmmpjVNYUAbo9gQYrT",
  "key15": "2eQQXaWBbxf4h7d7HwzJ9xLh6ieprWGsd9ncsCJ2YB4s2zLQakraotWyEPygKL64qtsUrKrjr2HQqNz3mbkc96No",
  "key16": "GHsaq8QvsXLhBmrt7v2KcX5zUnTwwKJhmrFHpbrf9FsU5GZSZC7dZWpE6tHfQQYxUJyyT8DrYYF2Y8GHyBiSUwX",
  "key17": "5eXpAQW54L3FEaDEStRLFm2YVKrennXL8VjHQHBmT6VzzvDzUUSDF7BhBUQLAouzdw6oVVQrh2GBzCYDo77MaC1",
  "key18": "51u3xgDKbDUXgbiNSKeAGK9x1nc1fSzF2gNWhcQSAjDA4LN5eobnPJRBYUb7dBUVWGoagvxLiuVWGr67r1J2qbBe",
  "key19": "5VTA37vDYdMo25Qx1jV3vwjoWXUyJu7LNapeenraKYj95gHkRYFmXyu7tj4dwRWF1c347joNHPghpHsAXVakQrzi",
  "key20": "2H4vggWXDo69S5VUrV6Ktd8mfypNQaZfD3gQmbZnfj8pGqV1jkqCgDvai1jvJj73RttKdGYupTBUk9c97qTjZYjH",
  "key21": "5bUjYuzL47dWG9ZdmGVEG8i8ahwHsb8H6K8BvE5ArXRjSeC196oVwrfhKq7aPTc1XNWQhmdqYtrTi3fQqBaSDVYS",
  "key22": "3hgw1zwsmgsA2xjm944cJwH5XdXPSJFZgV7J9fecGCBPLEw96bPSdxsAWn5XWLHg6ZuZaMYZsNGWmMhepjYaH85x",
  "key23": "2F2y33fKiJeQntaGgb55P4vtHDqYeQXkYbnLkomhfiqM4NiuD69T6A1nTVQPKcXNu6wcU1hKpWMZvaa1AAZeYxBw",
  "key24": "2AdFcqPajPMjZ5BK7FsjmxXD6CazjhjEu6vCCtvJQUx2sAobPGggfa7Dd5YZAe2nhSa27NQvyV1TPqJrgQXvgALn",
  "key25": "5gbYKGLXNZENjT4pJuEiR9Q3kvqCjLmK5A1PrYZBFNB4LEpRQbQ2iBuuZiuYmBCTHhY6ff1tCeJd2rHQ4APRsKhQ",
  "key26": "5LnoKi9dCeEwjsyD1ZmkYq9pTfC7zARRmYC9YgGaq9wxiVGhJeDhHLCsfkske8KNTDtVXXK1LHLnGp6xDeSDbcXA",
  "key27": "4xaA4pqQPh9GL1KAoFeJg3yM3xkJHxrR8sZN7Qi48EKgJJZUj7JBu2Z61AdSKoqLHNfX9C6NQSBq3fuFRVtTT77W"
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
