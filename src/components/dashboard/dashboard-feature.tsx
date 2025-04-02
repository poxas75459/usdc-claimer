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
    "RaV9pFXzuvFB2ytA3T8pBLHCiZ8nVt4TKbFoszR2ZqLNG88HEW9MPnmS9b2eipYuSQaKESBpV7wvqXcsepqpAER"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QNKY6MoJQUEwXGmj8KcPEn7ymThtt9Tk6sghFtbbGg47gArc3nihPdGR8iwty96LN7oax1wGysZMqZEPZFczJGG",
  "key1": "2qbBZiK2YAZsGFEhH4Z92D6VXPbVRfiYCd4cvgEqaNfDdRyAzk2fe2RfVGwN6YnnGS2s5HqFyxrhN4QHA8aS7yK2",
  "key2": "5YZwCPTKyhMvZPB5mEozy9LTcF4sfgroPEC9yLb35GgorStBe7ySiJGwY4Vua96PQ1EyaSueHb21QLDeK6T3sJL7",
  "key3": "4f4jCCGEfmSK7HHkN3vtzPJZ6cmAjNHU7wqtMiB6hW3s7voweGrufRgdrLoU4Ve7W1tk8N3DG86r3bLu99o4CCjG",
  "key4": "sEPpUMXX25DnTNxhmYcnFoNcc61HEozUiFKQJtp42Rpf7dUnPLjD3b3NA6r5TGdCqjkvPaCcSFm5MmLAinwjY7V",
  "key5": "4ybxoExe4ixjRHfm5wdctbdnkPMN8XvfvjNStxC4QKZyriYe1spGvtoTNYP6c9hD4PFu8NV7x1fe4azhwKgv1KgK",
  "key6": "42MgKx3XHhy9vdkLvu8PG6gLjCTKtDnYEcuq6CMejS5XBSEp52136SCJQbY1PVrx279mBXHTFjiYB2jYFEBnGc9y",
  "key7": "2EZtn2eirZeqBPg9EJxiV3PkGTwz3yjRr1TuLxrQZmTWycCQUXJMvVKALYw9syki1NQ1mqYkzfZ2HEuKYHhQHHBu",
  "key8": "3GY98LKgWtqQFGxoSVzZLzVqhTAxk8cnRPNE26mdcrqY7hBk4UqTEjNviZRmcSajLkrtEso2YYXjiJMWR42jUJA3",
  "key9": "59ahMK4FaU2kyh1vn7D8B2VH3jSUQDfRn8tgNpY6PmLkQbY8zeQoQCy7aqG7XQ4Cxjd9yXfk1mBhgBcqovGYcbEA",
  "key10": "4Ej24aycbBQ5SxccfrkobHwVK7jwZokvPjMfNC82A6k8LNtGohLwhEz31a8QYz5risU8GCLgvRLcEaanAKPU9zac",
  "key11": "3EUUYKFAnAK82gjHqNFfZ4hnGa7hcxWKA3PFGcXyBAkBhjY1NEQrQNGWzARNwqmwcKe1xyJ3DVMWBssHzayskHwz",
  "key12": "2QhMtL8T9RHH9qBExzkkvamyhQUpLYVWxhoCS7kNhwpirBq4hwn3vYzxdSJu1ZnJmSszEBgUkXbyto7dsbku9rMQ",
  "key13": "mZSEVwG8metAhwjX1VPRjj5yDi219aGmm1hoezkbgrTFb7niHGaMJqGMWc1x2rU2Xh21uWZAMSVw4KVxV85LVQ4",
  "key14": "5nQewJigwd6QMMW4aCZVVSvZZtUCJ2Kai1TwKUM9W95LTWVNVXXTEvkMa6vurkf9W4MBXjVkthvAz8ar1nrwAoWu",
  "key15": "4B5SgfwzQxXQiaRJVaBQu1nTFz7SPjyzHpzfECk8NUy8ixnknjq8dTXacZUiEHokGnEwqsAhYZM1U2LtiYRgki29",
  "key16": "3xazGE56wng1iv6VBKmF1RWoiRSY9Krh2Hr1RecFui6YM27ACFiKKuxKGMi7YzcJnCFMS6j6jKn5GgpusDojaEMF",
  "key17": "3XFKWn7pFo68hYEWqW1uSmP4sxbqBjjEVPMjUNxAvhVTTVPHPcs7FRxaxMrsLrpxfw1Qr1cUGfcUcgthSB8r4V2S",
  "key18": "4y7hNT4nNgzgP7JJ7rbfRyCPjtgHP3nWjdWnZKxZAQPJfDYjw9pvgBuowUGP6FLbEwYP6wdi7PZfpQgeydFP3WpG",
  "key19": "3E9Jwj2UyQjU6S9stKNU1TipjYbApE449SCjVD7uYUvW8rTPHvdMQinyXL6EjzEU796Y5hriv7f2LvKz955esVSF",
  "key20": "5rAJaetBRvrmh8hCZTViSfck39rnRrdkbgNwsn7QUyhH7vYbB6xGGn5HQd6DR7WcsMa6V7dgTTpuHTSx7RK59NYF",
  "key21": "3YQC6jsnZb85F1x1VsHqbBs3PXgBnwhMtcJKeJQXjVi1P9QM85sT36MT4RoH4hq2dPGQnmYPMMC6mYkaPg7XoiMV",
  "key22": "4zri9N6eQiuvYq6MLJwubzMUEGtAZQrqpxhpNLmzAy6u2BoAnmf5m83mrX16GWtA6c45GqvwFFRhg49FnsTqCt8C",
  "key23": "4J9FX26so3zsLAagVj2zuhk8rQCByCz1RgWQQWTtqSRrgzjmDRqa9DqmyoeRBdPqY71USHebdyVmJGmARTSZAinf",
  "key24": "4pf1LGYL9WsuKHyqHBp893MFzWbKpPX1jRBjjdKaAEWvPXTmywyvhg4mXeVcNR6Qt5VoFUPRXnFYCPDK1kWk6pDH",
  "key25": "2GsvhUpqnNzt57QkngEF9SqdtjepHcykrryxNYxZsdDDEgVc9LSdVUThNrBnxGyebSnXbdf43PtgC8cBgQLyN6tk"
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
