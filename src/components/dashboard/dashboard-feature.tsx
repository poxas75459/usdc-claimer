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
    "daDMXGx6tYoaWATVQECMx3jqsTia1GZp3beZyvhSC7UzKVMXFw6mW9ztEpA73ZHCX2gT7jQEknXzFv2YCyB2RGJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LEQtDBMU7ux9gQbMUBYxF6YvXXrKhgrpjeS3ZDybfzoNH3U5Qpv7AnXD6ND9G63kbbBWn7ijeUjv2SPCg8RJKqZ",
  "key1": "5AnuyVP92pF6udVE5PRjQSTx5dgb69QQ8W8FwKg6KDrQbTSvbui5PtTnkm6n4EBhxrogVHRbzWLS9nzSnhNna81Q",
  "key2": "4s3qRuBB8Ps2MH1yTqu1P1jJyFb5qur4KUie3USnu9dNa2DKxfEywFSgMBdZCu535ixa4p3EeqL8MH6Yq1XqWxg1",
  "key3": "468b7RBixoZvUCxjr1jr5ZuNmxsBFZRsFZmZ3pv4rp74AQQSjjF3bdAW4cFEKLCU6PcAE4TGf8xchpKpiwQxZNEp",
  "key4": "5DyYfyidZ9cCvE4XDbNgtVXoPXSF965Tu4bH9GzCsvki3zBSQoU6ihxHCi9j1gsfyAu2ay5eaDaHDyRRdXseP9Ct",
  "key5": "4mf3BSn9SYrPQHACfcB5BpmNYHVqveKJL3wRQ7FaEjC4CYF3x3KrUzLiccJRRmc8BiBwk9bWXyiSf5YZtLWQM9CC",
  "key6": "4b48gAqb14SwHHYDLviRNY83fNKRhuTo5pUezq8q3MhHovdhnhsNcGSmhUfepPCD2dMzeH4utmHWkZZqsFi6u1mU",
  "key7": "4YDTgwjPjGePam3xjQ7oF5W6bQQVwfFK852HuQGZow8rKkbPdu1jc8Y4Dt9yd4HSeFAuZw9Ek9tdEZsTjop1Y45L",
  "key8": "woeNM8ptW7qKc37buWHJ4xGx2foZRCquicR69jLMqU7dNLNLpDnRfrhTfq4kXGxtiuGf6K9aWAwD7jZYNCeajWz",
  "key9": "5HjZzACcuudaYeT1qYyvKHpaamPPEjndCx6CnAcZS4dqmtNnfCpSaCN2RKXUtU8GKmfnTmTcVLdm1KA45YMSfYCE",
  "key10": "2Yu6JBn5C78XV3oiiMeLQ8WhkanZDWeRd8YWe4xCfwSTfTFK1UZcRYfurFQzbjVHxwFYn2jMcbhsuJBG68xRth8e",
  "key11": "4SiPND7iTDG4WyKst9f3BSpspSTn9i73gRyGE8E6mQ9VYCQjb62qUFruNxmWrH3dWZwJFwEwJ9xPy3JqfgNwHYSQ",
  "key12": "9CNmnuaAskLdX23Wi2JyNqXDhv5T1vgAmHGs3mq86fnZ7D4985Kb2p1gQjoG2SR2FvYEYU2WYhYwEq948z3rYMN",
  "key13": "3KTe3iFXN3CbyD9P7V85vXwb9exivTtiJSA1GCm79mp72RsgLA8xZA8xuFqrfPiU61WfdKdeCVskvuJobc4cL1Zr",
  "key14": "3okiY8bnDj4qanYddS5W1bmmCxPKRfiD3EkhjmtH3dAAFBb6u7ZqyPbb89nx3mXkr2aG7Zq9av23E7jqdd3NDbiv",
  "key15": "4TjnKXZB4JwuibKD8oBdJTqvC8LLkKoD8Pb5ZpPvcAG7vqsr843U29ieQkqFpjMqUtT57Q59yxM6DPfUEMPhfLid",
  "key16": "g69fSKYf8RJmrekCSL2svdxshUWRXYyCYw2wVCEDC1ovX1r9AQ49En4McTe4CaSzWgjfVBEBcHeqo9eRkjCFCdk",
  "key17": "5UnrAq9rBxvpGynM5GCuCCwhtjfSCAKnjyLN3rBdpLLrReqAgijb9Jq1PuH9fSSV7JEh5mCrpvBouCMnNzQWm775",
  "key18": "3b7tLTSuSaRrhdJST1hsq51UgYngFTkSfnMjVwvABdNQw4Cj1tnhxpGLmMpsi5m4dxNKUY1s4ztcLxAJEXaj64CA",
  "key19": "3ZXD8KoqpH7x7CqLxxcuHkNi2eHzshC5TY1oihvV3tvyUsS2Q4w3tMuUkSx76xcc9ofaMhkATSiL4ZRK8cdNEsPr",
  "key20": "2bxBWPTR3FLfPfF5oTaKyTvwPBN4niQrZdZ6LmAZrE7uXviXTtoxTkpcsQGy5n76vkkjc1TW5yGHDapUS3jdS9fJ",
  "key21": "211K95o3AP22t61JbxvP5DoxPDSiGpDchTseMs46XZVnUKpU2UTnB5pEEjsBJPJefBi294x5Ge69UPHSi1zX2Rnc",
  "key22": "5sMFeKx5bpQKDFm7P9nMSzcpWySkWrauandag9jZhbp96xeVkf8pqqeBKPytwyqBLpD75GyLt8onJeZTZ6ViqGGh",
  "key23": "5ZvGMcaXzkhySqNnBfqcwh7Gkf3mqFCfukEUNji7AweVsf4RcoWJBGWgZsNKyfj2nZEmWGQz2jHtJmyN5ivd7q6g",
  "key24": "36kkCm4BkkYTDgCaB2qujKc1foohtbw3zYhtM7Z8A3u6CXLw7E2XGh8vGLKHU2W5VB8LGtTi4TzXVzSA5Z6rp1hQ",
  "key25": "45W5hZNb3L1VcfDhXQyuYHv5EyaBk3rkUpJcm7YVJMqw31VQq4HwuRqcn8FZ9LphXBj3BZXiMAnYAH7L5jRFudkY",
  "key26": "2G6f58MT2yGw32TwsGRVLWE7XGuBq3B5K9XtUWwgdW59pnF9dYMCzTLYdQ6rmL5tp1YGrjhpxGRp1Cz6Qfn1CWLq",
  "key27": "3YWzN8fyV7Y5Y3UdLNxg3LKCQSqcoLU8oqzQo9odYAXHhjJwyx1QyFsFutJg1dRRn1zNAUuUTcBg7pUCiNpqr81z",
  "key28": "RUhi9HbJdHTGaiiorndqt28ygkzDEq8bsL1RdFu1dUh4hs2a5dAkVAMXRFUQAqFHERyV9rJC5RtiiooQTELcheE",
  "key29": "22z9RaMokrUEJPQQwHSre2tgbxoqyF6QDQiEB9V2T8s9SDitk8Ld85VaMzuU1UjvsPNpQaTXorSUEp95wV5Ef2q3",
  "key30": "uuCxDjCu4wsnvVwXMmya1pCf1h37HegtTpp2aZ4ZuRjMybZ55PAoKTt6YYRUZLQ3diz7JND1Rz14WQMJEPEhiZS",
  "key31": "5L3Q5SR5QoHjdB8ERM8aj96fdn1DHQNcWert1o8pShZs6XVqfv9B6asVeWQH1yPUMYfqfS65Dx9VPdiL9zNNKhs",
  "key32": "WBFJEgzP5W6acre3VftaecmXdusQK74CWfHqauQxdNZPvkq9JLZLYR4NU7qFtVNkBDDKrhFypFAwahhFA93DwJo",
  "key33": "5CnuU5DDHDrpcGT12W7unPVanFATbgSTfarRHg5c9vggJtJkP96cnHsjjcFFX4jMAUEACyvHLWCHBvRwtp5Gpx3t"
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
