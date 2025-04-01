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
    "3prcx2d7QiRm2VacAAPADYqX2H1Me6XdcPaAucadhGm6h5gwwwx9C2jBFFVnfzyw7r6LMhucbEGUoXnPGQtFa7VL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RwxHJYWNnJdexNKJpwTvDpzzN5kb1WXgKEYdTdrS78vVUX1eceQBUmpimmGRMY7hrNCQSusFmbcxJAAhTJncSpo",
  "key1": "38k3YPgquthvW4F4jNCy4ijEyEqHCqzHPkjUTdpLW3hpHZNPEu2yEunPxdvc6obwX1r6w7u2E7EnNWizRp1o2sEK",
  "key2": "jA1Ztic98Su3fBejmr1JUSGWQ3HqpNCGJFX442zt34aPrnbw1wL6YeBAaBo5BgWi5mF3Qu8ncfS3Z4vkJXTJf6f",
  "key3": "22eGcwMyV8zMG85n64xUgZWi5G44c8bTmGuted23eFAZFSMx8aNEAESe1ie4sPj3T6Vva8av3cd2bwTBwTNNsKhU",
  "key4": "HEf6HkXEeu1uveR4XytNeiPayEioQT1eJRwsxL48bGD5utJeB7kGy1M5XL3S65VvEAmVDTXU1Ud6Uq52D429Zjv",
  "key5": "3YcKuC3bn5fLVXrQh73eazZJMj9v288Sx5rSS18MW8i8rvqat3Mndbw6uPHbswx3WmuBQPNmYtVhmcWvWtakxNsT",
  "key6": "4gvNXySvtqWFJevtZdZtefrAhuduhKaxemKqF3q9YJkuxXJPndQiQsrCnxdn6eKXznXgQXdRrw53oSS6BMhekdsg",
  "key7": "39rQg32AG5srMVoaSDZ4gssmjy9bbBqT37WP9SNZvyEM3XatQikqfaLHjURSmDvTn64sy6CNHpf6JW8fP7RXBKMZ",
  "key8": "5PJdrS8yWv5hdB644ibY2ZMDUhthTAfM3dNBBFXVhFNSoBNhN5FFMuc8naAgY5AeXDZfF5mBm3NQxfihtvFNH3cu",
  "key9": "Nmfx1MxEsJFfXvjAmcjumcHaH1tPA4FeqJiN45h9HoSmdWMuPuWYRpTyPgQQFCtesbtqZnsFMU15VVHPWNvkZKs",
  "key10": "3UzbzYnDmMZdcSWSvE1PNB5EQQLtATLutD59zZgdRz9uVt9cBbSZSmz7iyb4B7A9TVGqyB7g3J6a2egEGMpsB9rt",
  "key11": "Xbqnvf97Tt2Qrh3QUFgWPRhJMGaXkxyD4mH1uu67K6wJehEgbXRMH4LbXoJVY3eCZWHRjFTyGpSjZB5XDxP4MSe",
  "key12": "5UCMeebpkUkBdJrCGZY2waJ1GwyhyUcZetZHYKgnMbBVFRVgMprKu4BkawvVMAWYFENuUuDkaKTpvfmZu8pcsohv",
  "key13": "2obKNxeUcGfFXrna4x57MKvdRWrf22pCWvdMFSfTubKMESFq2abBc52JbjkoBXcSTEawzjmueZ6Gy1dy47U7mNua",
  "key14": "4KV7mGqpfX93hB3E1xUVnrozFb3U8StCiVBWwbwPcZ2y45KbLk57V2d7ckFHgUBPnoek7w9Whn1oK9W2QV77X8hA",
  "key15": "4GZ5ej2M2SqGVpbKJheJtyHbcz2rmBhPDhuFmXsFt919hwcnFgE8ayFnwMUYVXuQVzvqb4frnYbE2Vv3Juw3sCB9",
  "key16": "62YbtJ7ygK8QvFXQEGwMqo85DdcPhWHLmM5TTCRUQu82wBJUXb9G1Va9ryFsvZVBcJEageVAzbTL4NDxkipuEm7k",
  "key17": "5VtnYZVrH68T6yd9RnQSiYxiWe6WoaCk7DEvHfAeLPqqBoiUsZUwyRiyjobonqkksnepwSTTR3956UqRYdtuWyCM",
  "key18": "5Ty68NQzQCG5S7FYW2d7uBSGA3SPk4NbaBGcaF4HsVR5MGVMtvMuy6b1kRXz4aYAejdyFaUktKLi25UmnspgPy77",
  "key19": "4C9bX1KooYhg1tT4oLAjeNM5u4r69tfgNd1cr8tcDNnxDEznf4ehSwSMaTcRHmSEPpQsFQfDHeS142VhyZpYes93",
  "key20": "aj8QJM5zA2V7mZLcu9ipAeqjZEXYgcK7eVN2Rr936HyDTqy3fvVcpBYXHnY4QLwZE8iU1dKbqCazZwnkZkBqqMu",
  "key21": "3CuVa1eKd7QrDimnpW6Gq7CNDqPJmz14WPc57KJAXT63skVPFixzJcNhEoZBJfa8YeJ79g5yvdtZ6U5MGTgVnWhX",
  "key22": "tA1AGqVqR76EakwqfMGy7aU5J9FDhNBcvZM7XLutqSrG4XWgdQ15P57dGEhqhZ3d5E1Pb6bW5Wof9ZVn8ZvGcZR",
  "key23": "3F7XCgr8Bbi4e1GwRQiEbuVFxtgCzF55786HhtVi9CwGoaECCiWvvj1mzYypmCfd8vCvTAhuLPSGTyCVhbPYy8e5",
  "key24": "57prUNh8ppuSzaPmnjK258DzRzP5XXBx3wWJv6hEQijzs8X1j5QCHJJaDkqmYZCwHzv68ARpe89wNVP6RhNEAYR6",
  "key25": "HwxMSACPCdkaSCQHFZ9Jp7EKkFF71H6DyBViZW9BUQ2FqPvpUe9EJxVuW9cszntf8BKG8ZKo73Nagb4P2msmw9D"
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
