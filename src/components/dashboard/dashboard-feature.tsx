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
    "4QHzRHanFs9iuKAHNan4Z1rLHd2MgsCQvPKN7ykhtEueLnSX4yFqF1FWkn7nhUsrLWp4jHS3VGGBDaskEVxSGBSg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ChiooCNcZkNqWhWpZDFK8KYrXe4YeR5nnivKQZLaNBCtU553eYNhdxYg8Lwk8DCCHuaZr1CM7ASJgkA2nSxPcWe",
  "key1": "67XCT4CGw8n1ipZPDYHQV2JR5Jiaj3HRzJsaJXzmLuzuQpBoSwzuPXAbSFtm7Mv2xA6RFnN7W5UJNZepkmHfthQC",
  "key2": "5gzZmSdifdcppAJzkWwzz8AznxBJZ3WSjCmduiZA5QEPUSa2vbHWL6k1jaq5F94w1kzVw3qNgwEqZ28GkABuZzsj",
  "key3": "8DzbSHMvUiK87HkLJ22pcYUSC3SepKF8hhULU5DYkcXCM1ZNUhy6vKRcaW6m4A2ht9Q8LbRHvV9NwWch4zAvfow",
  "key4": "9ZEKm5xznFb67wFyg47LvXd7UjS9HAo9PYiB6kzQbmEe6pfPqTRYieaa4u93ysYzxH129JqE9kz7oonGWCdP18Z",
  "key5": "3up2KfRyw6Bea6q8wD9BV19etewNeMYzp3V9Srj5XNjefNenkC4WXPZ5ZVe2uQAhP9dgrEf62tyYG9ATxmjdpi3i",
  "key6": "BZsdvFDuxMvzTDM7RYQgeGf88vCqpBttp9rSQ9HPek7baoRakY4aEe5TQZMBakd11XAK5YUddahs9Z5ebeLWwfu",
  "key7": "5qd7C3h7YWBqNRRf4wdezmJc9GtiJuhtjmp74nG9WM4mWarMKxRhJL3YRUcChf3CEUtbq2wnPh9dEevHYUCTcd9t",
  "key8": "2Xm9DTQRKh1Ms7DnBAz6PRCy1i5Eiakf1U7XXoQu8QR8maksCiioWhAEKsmuZg79CYAzcq7RkpXMAn1zYYyPRkbB",
  "key9": "4fPXgoxDbEeefYFLd89N2ReannrN6gC8bXUCzAt7a4agBUUjKfwzXoA4EbRPSwK4E2YfhZhiyMk2iXJTaG4dUWcw",
  "key10": "2tTykM3uoiArScTWYdSvGEuA7Bv86ZcB8GAA8rGJgtSUyuuCN8v3CXAoeB1o8Wp4fz3xcLsTqzoCeuvfrAyJgdD6",
  "key11": "4VQmAJePRXmtZQzkZPDcrr8RKQpkkX92Sb23vhTM2MahXcjQkXm8eppSDcvNmgCjtbbhnmVaZx9cHWF2Zh4aajjf",
  "key12": "3W536HzrCz1eYCDzWfmA8DL5HqCRnJ7fothiQoTuqEYL9oUrJVcMEdD94DdQ51rPvfSVsRUdhQkMJ8KiKAdMyoxD",
  "key13": "3rBSZkArJCumtbTWb6MCCXA4ZzDzL5N9cjgujBnj4RnMDy7nLx5TBaGAU4UVELvUeXAaaMvhh7tcXgUW4o1q3Vxf",
  "key14": "4pJzganE91dAF8yF1HSojC2y7qvDVKpgHsUAMjFdkD3qYsqUdA8HWPPmWNZ16nZzTg3cTKs25Qdj95tXQJpViBsS",
  "key15": "Lhrr5antjGxfodnC486rnqv8xvJRxMVf9TTrPz3WVtMwsXSF4va4L37d6RJtcTp1GGfSVU3Tc5otrAjnFW1Z5eo",
  "key16": "3CxJbLcaaqZsGEZ7TGNwMX5hWwyPEA6tVowTzrzJiza37tHMLYw8STDQ7VkE5UMb1ouN91FHGvNobezHeXCxuzkB",
  "key17": "3G5Xy4rxkUR1DyqWYQ1bKnahCzgyVyZjLKvTZ48ZyK6DXNw8BBxW5jFjDT1kGnVCBmChtxKXNH8Cwv9NZYDN9pjy",
  "key18": "46dnYezmwKKrkt1EhZ9HwVohoDRbUk8p5kr9Hffu4Ci5hdK47WX8XPDF2qZgC6K3GeJxD3Uept2WMkEgt9fpowoD",
  "key19": "3CgQzKmGthbBgVJdEhnwm2mCq3C2DugvgQLxV7Ysdu6tKmUifrNyyMACUeuK7Cbtj35bAFKso79ttpkHFL9uPL2Y",
  "key20": "3RVGLkyx6ZnyPCSMScokkbtzeaa6vT7xjjygtNWtzTZbMPfqa18tmqD2CqXACYwPZz6bfxQFL6DPWuH6ziWVYRXV",
  "key21": "2RyTfRxAMmNptpGFb9J5WMR3pRRAJLhahewgmxhzUdLJrdEYwKgCXcB1e1rNWwR3dRHxhtnFMnaYVs77cJa5wgVn",
  "key22": "2ywNB8QNRps3iKR5cuTTTL4CaKXwUUWmVDdcMt2HVFderAZBVbZS1QonTzfo9mHRw3RoxKASL5GJeZvFDnfx8ekT",
  "key23": "3dkKZcGczrabWPE1TaGLY9PpnrcnHbFHjxwZVkXSJ2MbbQNWAMHVUeHkMor567gbhyV4PwZTX9nVL3GJhiiBzAjA",
  "key24": "S54Pu79PHiqxUqzXMscXPYRhquzv1bCa6dKHuT1WipvMT2otYGPqaSaX32DkooyNKKDfJEeq7QwkGN5T6psxCbb",
  "key25": "4UtU5QLt2axMdBsnqiNNw3MJQN9cgY3LJymvSMYvRJZbd7evsJHALCPJEumdQLENdGJd8NcznUwvbSci5csG9UUp",
  "key26": "5QNe1iFgyzuWQVkbxd5SBUSmzMskMQcpYJfNnfjxoeRdb5dAZSHc77jicQCKXLt1wGBsBpttEwjpregtxctkX5wM",
  "key27": "3xY8CTAaY7ZAm8BjoEzx5L8NfgHAcTyUHBKJNKqptmssKgiSWJ7Z8qAumCjD5fyVs4eiyFaChASGD7NYRTGhZCmS",
  "key28": "2NgdEhQz5CdBUKnHonj5TAyWSH8trappaHHum3PnTWKrhrrWCWQioMWn2kAB1bNHn6AZfNcMihrFXKjEnnKyvbMu"
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
