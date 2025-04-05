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
    "5p6UNMpR21ghFLoQgxY5G18QfLHPWy1QEqxGKreptd9PFkkLzzuheNPfUzrteb4bcPoiGcLefZbgbcHnXwsz5B8Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hTLpdG5Ffk7YbHZTjdFpjfhkiXJpnqC3en4oLtZxZK3qcLYSm64DeQBa3ddADXyScfi9Ci7eUkkvnZb6opXt8xZ",
  "key1": "567LsjCv1b7RgNpMZWHZryPig7exEJoK3RDBiGMFWSm3dsqkNRTLBKgANwkPVLGx8Ah9NYvaNDbWq1Rr59F4XCGS",
  "key2": "4b7GXESd6UPUCBcXrKxrJHTue7qm8PAn4LZc3nwJtb8svYV8vbd3sSeDT9KuxsVFES9ygZyZFRe62urh9FTXuBNQ",
  "key3": "uESikXJyZJGfsWu5Q59hLRRo6DtPX1QZHnWbeeFKU4vVSiSRvQJNBeyA64FGdXKz7Myuea8cMo7LqhNzrfgSYFF",
  "key4": "5zKjxWiLCN4rp9DbjG6ChD86PdnFBP49h2Afm12YBsvnQ3jX2vQC8UkQ9xkJBck2h3vTsXzQUrP8zrEoAPVeRhQY",
  "key5": "5fXhEniTen9LRwcFkU1jCgC8tJ26kXgxZuQRzJwDgsYUKZ8uJSJSY5zHV4y2VfWrXH3ZiBG8v27MMUGCg3SWy1f",
  "key6": "5EdcY98DuNrxuih4FuipX6xnn3yEFcCgYGkd5nRGKYwcXLLrH6KwGqFqx2eAjNUx2vh8UnzsRoSPQ83rcH8kMkRd",
  "key7": "H4aMjKN93rea4xmEmPWzNKznxC4tUx2nwDErW8uUNGDE663pv6xgs6M6ecK98mbivpmN5eemSALEoxeicYLvZCG",
  "key8": "5w9X78Wc4NEZcq9sakbdN3tL9UXhgLu15atQnhhKvXTAVxwWbcBUAS2hHYvMHjXo3RUSxbeZxgNUzGdk1ULpktwC",
  "key9": "66yNhME4s63QDZjThpM9bpQx6vQn1p5c51ihZk7uurDyvVSHPJ3pqh8eKgze9CNwdk2tc9PNmPowWFD2Anrm397x",
  "key10": "bRpNanncjVqYEkneLH9BmGfR4J6N6LXdHj9pBopJjr8XhsTNxwTEb4u6HJtSsmN2cGP4TwcpFGfjEmLb3HZYGr6",
  "key11": "4suRfgvuyQAXLyZWXUNpXLgyMvwaDNSETRyfBi7jf9wDvYWfQBPmfHeCEk23SmfurbNNnXHwNZGQ8NJGRa5QEZKe",
  "key12": "2y7JA6W9YcM9DZ2TwqhuyYbqgAKaYFqD22i31GwZESA9Lg7RfbTdfQahc6bqqXYXqnrFgsyeJ9XsjnqA5t4eUNgz",
  "key13": "5vZsVNNf8jmKSiNx5nDhK6BimSPtLKqv3n4nQnmmHAttYia1fzQiyqZYDguGp6n6maAButayj6qjXST1GHHmtanb",
  "key14": "3Zb5ktWKvCnQrQHpnsRAgZdhFAdHWV8jKpo4GLVTDqUqkhJn2PjsPhB6FFFC66fxrXEppBPeFR7VAJhz1ggJrKbP",
  "key15": "5mtvDoWwC4Ej1FuTyqURLsgYy7wmVqeCNq1P4pr7pcUTBWUhUdxm9hunGPV8LaezQe6rh34mhYRtKqnMRbz7omtZ",
  "key16": "5mZ7UBpcn5th96K58Jf2ujnQdwZUm4HSKa97iiYJvbodqzMu771zD2mfgYXD6tKWKChpz23tjxaYC4LyrALRNhbS",
  "key17": "2WdGXsRKcdDUNPEDJQfsNT7SFWxzuJcj5zu4WmkWSRK3LwqZDfQF7xbvG966z9aK4pGufBBJroQRm1ouELZWdDW6",
  "key18": "MzGueLJLvR5La7WcjQvkTR2ppK4sAa4shLGSHYYsDTM8Uk2EYN8JnvMxmTVSvsnApk8zkDmmVeuR4r529wCWHeB",
  "key19": "5qDQjN1Ceqyb4NvJfewjSbptyaJ1d4mQqx3KvTkMwzKNZwkn5CKYepbEeRCE6caqJqAbHb8hRtoo9SSkkerxHWAS",
  "key20": "3972XPRpMYcQiuJBjGQNBg2B3AdZakDQSVGHLjH4b8jXxjJpmgrsjcbFLb2Y9WCUtRXt7KEuiRqD8c1QD4nkMUQq",
  "key21": "32H1ucT4EXfoyN5ATiiTSTZvoAHARPLkaVSypdjJZPT757oM7oMQcBvSqS8Trrj1Wt2f1b1ZxMqBsMsAe22eeobP",
  "key22": "55GhLrSynf8pExj98U49n4BCDuAWiAPLBtMDuVMzPUBuPgf9LH6QR9ZbWvLEcSdqu6wA7RfMoGiruRP2u6p1n9D9",
  "key23": "3bEEnSWgp6kP69LPtjNn6WZtdd5S49x6EjayA7KkvWNQEPfT4NPqmgQBkRDVMhHr1p4aTkhTNY1k9zYKJ1554juG",
  "key24": "PFoB49sW3HVb5j8Whysu8um1DFEwrB8Zdvotmq82nFpwVnU5xifxEdezkLw9zpJfihWjm9PLB69hTZBg7AdiHyS"
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
