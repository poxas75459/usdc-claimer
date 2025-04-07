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
    "4EqLBBoADLij3FaEwF9QjTghMkcA4UBT1d8c9txnnCKxvt3zZxMyL6dsBbCa3JgBHvy52D8kDCtXMcweS6HM9s8C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ai9wa7WY8N5ezpFjapuKtWKcgQYRRXwmseYhChhnp9hAB6hzKbbXAghqbkDgbwykd5uhGkVKuioBNke9HojXkgA",
  "key1": "4EWs1zrteCz3tGRwPbq1zt5DLcD3vuwJwNFCLNY6nNHck7BVxLiAgEB58qDXahS5xQkCgbRKvj6VLr6Ef9gwnBNh",
  "key2": "4rVgHFq5oCNTZshNxEjuMb8sCnSWuSk3TepLQg7ni6awPAD7XFksdvfM5yfKBLumfJx7JiPhchNEKWfAQ5Ua643U",
  "key3": "ypFefBdJqdUCLPJMB5T3CRmY2vTWrPp1Yc97TPcJwzYumVRwUKUrJtPothjPkZy8QNDQFYwiEPZs2zg3UEBCXzi",
  "key4": "5ivDLVbMYQJUTnWcwVvCuxMjkX9PBCj5kWNy6L4uof7Hw1Xhpxu3nTJTa77QhE6WW2Bz3jkFNXjUaTwy8HMZj5wH",
  "key5": "3DzLibnk4ZY6pvbQxH5UFEVfbQrT3hbKKLUT6Vf8UJ5yiS8sZgh65Zp454PneSQf9BsXSV1rYiTAdTUcu1ZeyFkF",
  "key6": "3j1EYx9aeDkwyhVaopRmXL4kX8pQwBkLRi4WSwh7bwwprbkSGkuqdm1pEXuvnpE7X5UwmCFrZYYW4UrWvjMSyNJU",
  "key7": "62h5m5UPMNSundevEGP7BYodXokaSrM11gjqMJQrfQ2xtyyoatsQM8zTLZj5GwKBTWTrVKHJx3Qv1vPV7Avx8XgC",
  "key8": "3NhFipdpP34Mp8NqcM1ySGy5YmtD65KEe89UtGVUGreH1ShBJ5ZGucJXM2DX3zfLnSbG3b2n9Ynkjt7QdY6joABK",
  "key9": "3F79dtrAGUCivTx1k2s9NGCmExbrPvuGWAz3EQmpQTYJkK9JUmmG76c8Zbw9BBH7b5hakEwe9QHpnJxijusSJSZg",
  "key10": "3gznmBg69pjy3tCF9szJG76gt1QN72u14ZZaA7Gwp1n5iWzSbtWcFALzB3ZdM17aCS4vuUaiDdrPjc8FgGhdNtdX",
  "key11": "5gpMXqV7N1SzgfV7gaFr1rPJAhqGu8nTnSsSFavt8WZ94SRfjYFYPUHtARdngWm35KTVAQYmhtUjFqEhjZa8HUPe",
  "key12": "33Qm2LN1L1bNNXKmn8CVQFP4NjsA6D75EYJDLRmhRXiTpE8TtEbcKthYspfYh7gsvEsMopLQLkDEq2yAqjZyGMtX",
  "key13": "61RYtuPN4ei6Ec3fx3qKEZA9FjfozEkCxWHGJHQoJjyCvZA3A12ZMwLAhj2rW5N2LFKsx4pywuLKgYTLaAQw6DdP",
  "key14": "2njFrsoS3k3LBV1cLfidEepJBJeN7S1CNd9rDAcpbrGLVowWpTXJjJ8syiBnnzhtUQ2iaEnKT6LVimxUs5VXPBDT",
  "key15": "3DL8yo7HekorqktNRvBJhQKVAxfVdWguTwvYfHKXVsW4D1rH1pMNTYhj3k1ijzDJw7EmpPwCJ4R9YKHRiNZdVYDc",
  "key16": "2m5roW9HwPnFiAh2pYRfUZYpyUFrkcXmXn7tcm5aC5zfhz65muBt9VLXtLvfVAeWzrTdgNibyRiVqQMyhiCDgAmX",
  "key17": "3MmRRhqTkuhbMARm1VPFmYjQeAnfGgNLU5xAE7bdCNfN6rqPtkjZ4gw5wSzz7oiGNoi67Kdqk3pZcukaK53Z7MVx",
  "key18": "3wGKxoeTigJTvGeC84UdMKCuhDHrkUeczhUwVsQc6qwK4HJP1vTPFUhRRHD5XTmJqLuA4KCD9dr68HK5Cg8eW49w",
  "key19": "2RbkwDip69hJMQke8vCWFcLvspE5FNtc9eHqrubDKNWJqkAhcAUHVJ9UwvGVgjC6UbMaxP8jcw1ckuc54iH5h1FF",
  "key20": "55fW1dy8DuWyu5vCkME7VTmVk3TFxU975JbQG17UZ46sqkaqAnbrHr7bEohowhCe9Hcz2yr3AASkTTtdYc7mT1EA",
  "key21": "5ufv3VzMvKVXCmPLYq391tWDzxNq5eqpgjAL3Sq1THzEbTfyKe8PuG2bVhXcSdA4eQ9dUyHizVkzjeRAhuiBfCyJ",
  "key22": "3V97XMgiFKtEsqVUAJzcynT8kE4LkJrGcUBw4EmUFqwHo9X8DdhG4ro4xWYvcVbZoQU6VKfqTrTmY9R3i76Ft7aJ",
  "key23": "58tZEVQmDNG3rbCumKiGjzJUTGfUBB6tmKCgZdDXTa7rKkGGYvX3vGW9VYXWBx3HjSjbk4UEuXbH2945guZ9UJit",
  "key24": "2NGFHz98UbXL698BiCDY9gnvrjBBJkigAVWyNZGyh2TG9SJTu6DciEGfu5xsNvr5KHbe2a5Pv6WJ4YcJM7vvwaYw",
  "key25": "5QVXWNKz6iP7eFagpYxdaWt6euxXMGex9vqAFE8JgFVZwHpuJyggz4SGi4pnzAaQ66rJD1A6nwfUHAa6ugELmLAY",
  "key26": "3mg4ti3ErivrvgrqC5YKZQKzep3XLJxXFWcGqSP3tZV92HiPbSSnhWwKPEi4fSDRYRKQfqi48Ub9pkp3USEJzgfv",
  "key27": "2JZtn7bnTXT9BgGnU1tUgschGt2WTWju8hdXzjmB1Bynmm9PfFv6PUYUSfXiDRHwkQmvhmbDwkxEDrkQcqvw7nzQ",
  "key28": "4ux3tQ5gkSoaBwwbv6tNYrdmvPxLtRjBf91oKWDGb9peJu1FiN6g8ETZZ9VjYYC89s1MBhB5ap34fHKe2AYEfhVG",
  "key29": "3FpPsmKi4jM8DiFTkHhsybAaiEMmboC7sFPr9gnTkKM5GPVHocS2VQFXjd1ZA2Jrei2BjW9pUiWYNvUJ4L1bEJVA",
  "key30": "5b7PLbQUd9wvaCx1PT4fgBD54vzXAszhmzQLG43ZASrVGck9cgzJfuPC8jn9TDEE9tE2Gtd7P2vXgJueN3MaNUcz"
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
