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
    "63DhbSL4Bo1VM1AkaYKVjPDeYkd6LDEdncTWUWciKKGysq67KABCvn9q88yf3sCgPF1kLNgGYBrjj4npTacJiJhR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5d32TNzuGEiJEDdQfVvWbeTRbdfSVwpdrU3hnKddCyftt27VA9qE2GKhpg3tLXGhPy7sRdfd5FiEFPUWeR35mkG8",
  "key1": "mfNaTGMzh4haGdySJowRQm7sqZxH9UUGoZwaVDFfhxrEunUFkxMC2Faod3cviKekDQYDrQdd7VoCc95jz5haGCe",
  "key2": "5NGwbrTRP5BETu1i5pCSmkTZ8jdqaEYzxMhQKDPbqNMj2d46GTDwn5ywhedvrN1UbS2rKjLaz5ofRP4cfXETPUew",
  "key3": "4PwbMA8RRp6Q7xBffV8Ry9WvtqhSy9NhZH3FNooX1XU9sYa119FHRprttP38CwQHG1ZsHrAvHxapwwqMNYqL7STR",
  "key4": "4FhugmNnsp7AsaUxenYVsvqJ9TYsHkCydPbRjBkd4dSm5ix1G7zgaLBiY1oyT1MzHc9zHQLHHWmQYHqbBcEG2ScJ",
  "key5": "5FmFSCGnMCEN6XQxndgLnBt5azMhDETq7ZYR2qn9YrnC75AMkYxapR2QyGkAm8ZEbYzE7CKMRGbk1gqWJp1EtMGH",
  "key6": "KHUKx2nuqbHrmowWJpEjDHhQfQoztD5sBBzRj6rr3swviHZFMATXkmhgRZYGbonTiLU8pSy1dGuoLAQLaLJLYyZ",
  "key7": "53UN4smXANr7f3TPyUBH3JPJZhtefrGasZQvximin5DptVST5BqHaUSe4w1t3SsL2qSQZtHtPJYcMy8A4YhMzaZu",
  "key8": "5aguaAqmVe3rjp33pqcXm479f9jZLroGhQLdvRXWSEKBUNACYZh2mPjVR23M5igwHB2uTUQvKWNR94spNejRsNWs",
  "key9": "24JHYxMQhmKtXP1NX37ZpQXA2eLPr72RTiv2ypmZMS7Dmm41Uq74xJRkc5CNcRpNm4geX9D67eFRtQbhqba4uxUV",
  "key10": "kXQHPF6CXjHSetJw4vwfwkT1Wd6BMtErN1UceqziAxKhSSxY76i2CH8ZA2puFtawje7DGxBmgqw7QnskZc7nySG",
  "key11": "4eNt77N4c4Sb972vay8biFWR4KfBvv5atyeiYP6Kqr14xGtD1JPZmX3NAsMtm6G9ffCTdi6hrEfawSkymJKG1t1p",
  "key12": "rxoRLGETSuGWUPkW2yUnudQRTaqCyCE1c53b9r5zV54u3JxVKUkJo2PPd9z5ggJWDFNuvkZijEWz3vaD7V1rWxi",
  "key13": "o7tKY4hXxNtLJpVWCLRzXvUKxsk1Ub2kq5VnA7wm96tHHBxjzjAS1GhAP2fLHnnSgbxDsHTUTeQUKDArZRQjpJL",
  "key14": "3hH8VisV4eQoaNDNgZD6AZyw9aEfDaUDq5fcPxuP8LaaH7gPteSsxDch2q8XBUqpQZotbjQvrC7vs7YX47YEQfX",
  "key15": "36Jt1BX8BvpWYqTvpGySydHs42aQB8KQuqtVwrMa3GBNVP1UYF5KUKSrTUH9xNqggYBp3YHbfUSECx3GVy5wcQVu",
  "key16": "5vJd2RJMY5rgfGsDmyJDg7r1y7GY7RV1qM6V7HYMFReAZLJuQ3vroFMZz4kTsq9oJdhFWjU1mj3ifshm8Toc4p6L",
  "key17": "5rVao9Tw9Nzb9DYZQDQNMvoyfZghntvoBS4YgNQMimKeJm81F3Zncm1XPa8UciB8WFKRoTtzEhNnUADLL4GcoAtq",
  "key18": "9wxbvtgeEiNBjqPGF62EWmcr9Jw3WnJpZzXfEY7JzvAnBiEMvFUtFc8xz2qZoCFTWDaLtCtGpxrHf8NqcF18HRx",
  "key19": "ARysqkNoRe2PkWvntxdWZooNFqtJerd4TEb8M3tzaiWhRQbbCqjNHA7Cciwoz8JZMYTqAQpw5KtaRs3afirY6Pc",
  "key20": "ZhdHv1QwQWC7FVpA4Tpkag8d5nzYWSk98Qy4M5DMLEFvQzfmf3pym8kU7syapYS5wNRvVpsHwd6yJg3degnjgwh",
  "key21": "4YsSgPNKrr94gAhNhNWpc7XT71Kzcn6C8nAj16E3d22Kj1To6R8DXf5xHFV8HNq2wJggQhskUL3VcyiNHDF3h5eg",
  "key22": "2UNNfEXqftQTJWT9qKvL7SRJMBvVQWAh1hbr2T7b4CHW6QoP81i5KBtuWiATiFvFidtjs8vaXLwnybTo5RTBvZsK",
  "key23": "3GWUq51iBLnmijfuAQuBuAvs2niiQVvnQC2aP7iUjYHwxKBZy9kF98gExgMxmYhQ3YtspPvagn62pSWgB1ruuTiW",
  "key24": "PUEbPiw4AWT8kqsLdTsbuBJEoJFgcobGbYqYdtPWCg9Hzwva1qygaXCoNJuyymPGt6xJjEoZpjyJmnSci8kiE8N"
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
