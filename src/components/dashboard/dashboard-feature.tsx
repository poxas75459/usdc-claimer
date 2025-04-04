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
    "5Z5nKjTCdBKvVyG2uuPcqgTG1WHKoyXVQYSjyNHyWt4Cjf67KP2zg1epFds2CyFArfrdqXrJrYL3fiMHEQKY8NG7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gAj9iZgQL8SP6bQUVFmfSRq6W3c6haLeeH2t3nQTGv4fJLeStP9dLCy569KC2oNr1ZFNtswrVvoXTEkdGedEKaL",
  "key1": "2b2RetZ1FVfUqeNvYSVaHyBWNq8heeX84knEe2JLrfG457HyGui47Q7G7iNkbi9yPUkFwTut7s5pJuMUNZdTg7FX",
  "key2": "5r35YAN64YDxz8CK96w9wAm2D4Q5WcXNXrDWtyNnmT7v2TrQZ5ZxD7uN6c9wrLp5nkxJkChWXXwQHFEiuQHYMK7m",
  "key3": "5kpewGWAe3ogkMbpuu98JAGFe4r27HjdqzbBscm39EiQV4BUdcUwti75RKTH8hihdnL8eZdx1aNctgrbTpkMf2kz",
  "key4": "5c7c4dpN61eKxaK7qHeFt54zVsodDirw68MmU4mF5deAjkCnhebCPvAgiQMxfs7gSu4XeGfwkHE3ieERY2SJs6U7",
  "key5": "5Su2HA7n2bjwVJUreGGp9k9KYFF8hGTGyRrKydjRCxjGaLEjCVSPu7EoXK4ey9pqhvqkV1bsvCTG9x6ZahiqySeP",
  "key6": "2HABAWVGoWr21sDGFd5arnL5JQAdBq6CgpHSJ6AaAZiz1eCK7rNhaXpq1A9sCSyfMWpECcLyru3SeQLvX6fJJ217",
  "key7": "4FYmMjU2NEAPK2HRKRMoKrFuu3R3ZoYEe5E7ruUTDUX1m3v2zrtFXaijj9ybneRKFrCrUg9myS1GuSaMJviLhHDn",
  "key8": "64Em5z8eoNZ4SvmBzw4rWCepwu9VKgBefGyfNXPhYHyr2qtp6tYU3sfiBPmdxQy5hPgUQR4FjF53gyXL9EiM9Lx9",
  "key9": "AHsh6wejgMFRvnJZgYQAFjbhRyVZ9F2pRUf43QmbH9kq6xHaVGssuYiMTwLGEoan1BMHVCQK2TwdNpS7kVLcWb8",
  "key10": "46hzWF5x89mZCWejiT3CUCKBj7zMSfn5x3PqWQCEiqZbBe2pUj6pK6wMjunEo9cXfaydarhFwRajg2upi8ScotAJ",
  "key11": "577hV1vzgfffY1Baq4Q7xxMKVbyxVDwHtCvTabcF8fgsmquYh5JfMQrEW6oF9LZB23MYrxDYxS5rfrTJ2MXqStph",
  "key12": "43aVqwHzFjHBJdExWvYuJCG9zXW68CzqpHeoFgoq1dBLBykCEc5cEcBzHoMBkVSDg8fRGJUpxCBg2YTWFt1pfDrx",
  "key13": "21xHJFk5HByqXjWFwhKwrdJk2H1ZGgaj6EQibpfwLki4t9AXTz18CkwE3emyybMKT5v7GSyKS1L9qoK6kKx5U5eX",
  "key14": "4SnsPp9Cr9y8tq3avi1uBX5BJHN9JBc16p2iWiEAgP6qHsF38w1NWhS38wYBrRwEeoGEffxpdmwL5vwv7CLxzU2s",
  "key15": "3HpgaisJN2b9Equ54w5TugKpuxZB8TXaNjTizT5sYZ19youTQZVpV8Kgfsjf8HBVscvkhkXXh2DNaFq1GFoPi6fz",
  "key16": "GSoZnaFokuXqYrgi4eDZKtVKbrJFmpaFbCFJD8N9BgU2p4WHsAUhCYCnyjaNK64bLCrpxzdsmiEvYJ8w5juemfr",
  "key17": "G5nXnAWHw8iZDxNJUfWYFURWgTiitSgqsUtDYRPVCYhwtSRT4T6pQKnLuwuq59UDmdx4JJVFPTkyUe3KMHwXbSy",
  "key18": "2J7r4TTES5nSuAGgmMyaGDscNQN4QP6UFZSzWGphviiBaQQaSb4xP3cweFmYAcvoDbYiYRTH24zMTALofgnhye1y",
  "key19": "3hUG1MqW4ZzToKR1smJirkruXh9LGYBkKT4FnsdUhKZ8goMLZpncDkH5WAx1sJ8XpGzgoFTuBWpUKT43u1bJtrH1",
  "key20": "5TidDTEMCC8or2v6bzSyJjxyg69q1N3XGXgiKGuxaZQ9p5QR92SKHK6SPSBRT17SAxozwNgWS1gsNya911xepfPw",
  "key21": "5zoGTr25H96VPT9VG66NjUx2jkqvkLRkSDZA8596vWAThuPPJvczfy9Ko6BnVyKktKCxG9BVvp5v3nSoKSry9Wdx",
  "key22": "5XrzW4nGTfgKGYXFtsAeFHRAGZZrLZFiBjsA3eExqvPfH2dZCjJdzvn54AkJBZ5soFZuC71KQGFFEYT5RcYGyHog",
  "key23": "4fMQKudYEfo9K7F5RxJcCSBzbHkrfQW8Rh1oK49qQtLQtSVszpohbRNTHuC7NrNc1kvWK9f8XBksHBcABr2jRW2S",
  "key24": "3yjKqNei65JsaM1ESEJE9mvuXocjZetsnYhf1NWqT6wrQgbLgKGMgvN3vZjqqY4njAtYu87WQygSbhpHz8VPfxvd",
  "key25": "3CBwyrhU918TDYV5SEKanQD5tUQhkG4PanPHUBc3jVrm1pvZ2iEWhcXAgKiSuTzamBacchofu3tMQGFJ6Gcm4kAt",
  "key26": "4yWQzUGVEfBEEGpc38v1utJD4uWSQjKwPoXb2J1RdeEPpBE1vHDNfZCSvTRdYkcGLnVZ6VT9gnohhnw3dathQ6GY",
  "key27": "5ppcw1YNT9uSpFakSEMLvNSv3Nk2EFdeoiRRbPioAtCRBEtcodrMxVe54Nnx1BwW1Zcj4HeZaS8Vmz6J52eqHCmq",
  "key28": "5ecW1u6gTbeT5A1Ld5BnPA7m69fqJ3sWFWdebk58FebHrE6TAzKRyHXmaKPdhHGHzy4fL1DQzmsqnNV9tRcjkfVz",
  "key29": "62CC37x8n7ZfHSxrBQAUkLjnocLESwCm2rPtsGbqqhGbNi4DtVwP4qJdiMz7qrq3Q8zP2XMA9rvodbYXSMm8Jwnc",
  "key30": "z8FN4x74EruVxhdXVUXrsM92jSBkJAKKY8CA2s6MfCxB4XrShFpNahdu3rHYS4T9n9pMt2kgEwHUZN1srcHwyJN",
  "key31": "3Nj442NyLAVwrcpnHv4zF12gDQsBJKoBdKCQDiCZTfRSWkA1jtQy4hRCSxJfR29Da46Qq8rTFWZWMs7MYDr2DBVJ",
  "key32": "2cp6WFuTMTjJHZGMfuPzRGk7mzCQtM8L7Am7NZp737HTVJL1iQr3DEQhm6ktnpQbdALkADC3RuTkVSg55uAYGxWJ"
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
