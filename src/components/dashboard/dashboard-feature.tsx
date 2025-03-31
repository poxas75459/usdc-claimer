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
    "5PvHNbKTmzbxRdt22aU13nSywnzyJ3ye1cs768iPRRm6J3PHrC2S4oHaNiqHUvktnRLrdP5a1TtHduzq5KsLHkxe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sJuCBXFY91v8YvWeNJryKxZteR5jEwDyGao9BHHML5h1Ho4ofTRzb7zE7R8AyxmJpcvoWAF7RQAhVeFkzCLMmpJ",
  "key1": "4xMCNu1YXQjNXVYmh8DSqF5wzfeTUfooEcEThY8MsHQHtJCx6P8DrN44owRSrBqz2WukeA2wzquwNPiXKGBDWxPn",
  "key2": "KyveDy8SBbsM2XBUqpPMjVMFG58tnyp6VW8pWP3Wyu5eRUPTmKXK6V73aAfLYLVuFbSykQaCkT1P6WKb6Hiz8zp",
  "key3": "4VnLzvtE9k5mCfo6Aar83YZzyPGTiN1DwaERKVWVSYjksdfLzFRWhTYJxExrn1g4XcHZkybhH7XTiDjTSmSV9scq",
  "key4": "3pyBC6vpnc57wt48oZ85SKrefJNBqCT9Agt7611P32JZE6uQTuLsaw34uZoBdN8aURkHbuVMZna4c4ifYjww5kHg",
  "key5": "3JQwUSgutL5QV6iK9tAes8LziexAWmbCRfhwCVNg3wS8dQ9kMMnfQnbPCv45c7Ua5rRbkBquJqPpYNhxJi12sNLP",
  "key6": "3mhFrwWdhVRheU2ERuvj2TfntttMhugTg45DNweEXmpN9hjrG8eFpqUgNE73uNzHqYiUR1W7tV4jxM5XSHUyNGYx",
  "key7": "5xajNAFDNqDysNic3Z8MPtvVqXiyQxsHDNqAcgaxXTfQdjECf3bMGW7ASp6ujK2CkpjN6tWMVw6GZNFDG4r5fvrc",
  "key8": "4ebADuMFiaue96yEXDPY5aH92a9tXnFgXoXXUJexM5hSgqvjKS8TfY7amuECojNWLxjZDHF7uY6ChBmaNLtLKadi",
  "key9": "qphY2aBLaPih7p3RKtycPCLFWeWSdo6ytEh1jWJnf1xaFdcpC8BHT6C588KEUTN75Sk6hAj5vNke8rf5Q38poAr",
  "key10": "JjHkozMQfzEcak3ypbpdk9CxkFB3A9XN2fFyxphvEtnCXYTeQy9cJz15DfZZZcn3nL69djv1v7wUxMTykAAeS3M",
  "key11": "3k6mbeHFUVXhLWA1PFEarHsVqXs7bWyhK9erv9QUd3B3w4kRZrbND39gMcsZov36hSitqAyuzcst6keVQ2Z2LmEK",
  "key12": "3JXg757bQeQEdLcpQy7US3W6tHHtkTKD3b9VjpLWdKMgV2AF9q37jJ3nH8bpUhKZY9TepRrTHvgogjZ6Hrf2sZH8",
  "key13": "616cg6WAJd92r6LW531MP3zzJnvcvvkMMEP3zzi4zDdynn19KRemMXAwJrsJ5vnZ6gL5C4HwRv6SBpYRv6yCpmL4",
  "key14": "2rkZHjxgKfLhoEvQqc6GbqhEogBDkJBTovsPBbxujoHKJEbpcjyqv1gEkVCu746cPYvtDWLc7xnLCzUskj2osWGW",
  "key15": "ggVhmaEiNfxyD7V7orne4sqGgH7WRCZnaBsMNmN3mdif6FhB2cA5nuL7GjFres4d7xg9mEJp64jhiHAVoyC9rhN",
  "key16": "4BtfEhYEcWJUaatjgVokRxSkhyFGzTebDYSF2myKTfdL8gu928rztcWG77CdPyfEQNoo5eeQmNmHrSVEbuAoU6cC",
  "key17": "4TVUiXKKZQzEqwdpvXjgCJehp7ca81Vh17KY9qt3Su9khhAxwSRAYiYZXCyRWKCaDZzs1Y59JxQ8xGA1tiHgvWT6",
  "key18": "2N9E3tAHbPevzpzMtUHUFUXBvym2JfTcwdtsTDW7zm4n3V4YfWAriKGDDjJDUxYr8tn5yqyykuL1kFTf8ZqfJXuA",
  "key19": "5DFLMzkZonpKW6zLWTCHsi4kLZq6FCcpNcWVMceKqHbcWC5DYVUDJidnyLfw3WXRFbaowe4yexCN8vpSt8o4UaMA",
  "key20": "dwWUDJaa46BnM1q7YZUxTt1hxUZvV8w3rjV34ELQxdPDwEk6iYGEgBv3sZnJnZTcNNhZSDd2bZpJULRSjf7CTgW",
  "key21": "26ARRwCZ4izkABk3eow89MnXHUYQsrVQ6L5CN9dp2nXxnPCoWu7KLZK9KmL1ReAKbV4W8Tryv5xuQZuxAnhtbboU",
  "key22": "ckwde5fkwpLGDXorSf6mKuAGcBXo9irH6qb9KZPd61n4veuxPTHdrZFupwjQEj627SGjokscRM5h4hcBniTrHqz",
  "key23": "3t7K9xXoxN7x1TpazE3jgmwqLQ2PYqq5fFBktwm5hPF3jsxUUP6H81BLBP1wintoF7FreN1QwDmD8oAX6yzwwXfA",
  "key24": "4RuiMPA4173hjUSsH1uBh5He5755pFr97VNM3YfCvPay2mZ5po7rPE41qDpBSffj4zrB3qXkCkLtCrZpQwauiqTp",
  "key25": "2rkVn2mLNDuzoGyYUxQ9FdLTFj4meXFc22unBoiwXQoX8RsRUxG2FE8JSWSb4uru6zoboVS1Qw5J8ZJpy29nZfJ9",
  "key26": "5qxd5Tw7SiRYBirEtapYjKy2wePqVteg4uWYzxNfWZdYhnA9meSJ1dyuB4z2mL3V5nJo7vpNqRhYiAMvRjNMsz73",
  "key27": "56KfN3zbzzAu6fTDDF6Dy7neqfWrEv6qKy9zQWFHMzDhb6qGQUfZAyyceEtj8bpQo4Zc3HEXCzLSbmqcZZWgn911",
  "key28": "4Tf8aZ4gShD4uRMq74XjMHvzfa3irXmtndneUDTC8HZXySEEFuqWD1UHWeSP9Xgfb9s9eJ8Loh3NpXFwqbQW2wag",
  "key29": "2QWvi4C3hxkd3hD9QPrT2orRTUnsFJioPGGG7UvmJDBx4482Xzkaq6W7fwRZZkUrSPfENHjUzkGNRYTmrrdRB2F",
  "key30": "2DdBe3qzsjYgGZtUVPYNSC8oDsH95AZkqPSXyMAv3tLhucNKp52fKkmsTqgf9BUxS1GFSmzjyJaNShkXhtWutcGH",
  "key31": "4Ex11YJjuswJHxxRYpFWgkpSxwCDi2LkiWzLPnJTK6HiaedKYSitCFD6Y6yMPQDYKLb2ghYbBhMCC82GzAUjf989",
  "key32": "54cF4PhqMEdfUuCA7FFT3Fb7HdikrdVovRtpaYG9r6oVLiF4KE7JZ1DzGUVwJTHnckAYH4dbBznAPaQ3WW2U39ru",
  "key33": "5ASkbkZbNDBy8hJrDPdFAscRSsrLuPWjJ6HfqS7c5SCsraifxCnDrE3gfqFBMhaLUcRqonjUesbxKmkvd5kPHgBk"
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
