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
    "2c1jNZPt9i9JPZKcayrLdtrrkosqqngZcJwQV53KKQmNLz1rYSKWxTJ7twhRedPiBR9MLoFCnCEGV23cDhjc9mpp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24mmQ1LTmgPG7v3kwPuMahpC1DPbSoCYhZ5SiUMtfCYQDce13rYJaSX48LAZ3Z6pRWQ7KBn9EMS3drSnkmDfUc6W",
  "key1": "YM8NVBRkMExvfLFKcJJvrYkX5FVNFVhQz9iCAKmLJwfCwHeyRuQ9Hx85HTWx8SDHF8L5hXm36iHdA4Mw7BRpToX",
  "key2": "9UyppVanep57KJP3G4A5yPcEckE7Sm6GdpZqjfqtwmjmDARkJmkWxUCNnfmVG8idrJsSEjFLnhQQrn3J63C2RiP",
  "key3": "2Xf6i24k3wAAKfY2HHAaMj9Lq93oRqSpntLNNtgHBk3S7PdUK6mxKwTRvdzJZyBJo1YDZx1Jhj9FgDBz5PetyVXZ",
  "key4": "5XNSgc3SNyPHjT9cqySKbjcMd9LUdF16E7ZKJ7XwrNNvjfq2g1opqnZRSCJAU4K6ZnvUCqJ8svNC5yEtj2P3Crgx",
  "key5": "4EhhUDyzrj6gbbLdE28sommZTyKyq5dXwXF3Vr8zKoJfHbkBpfgT3E3v3rxC9mi7xDLZdECNio9awvVMDeBMrpaX",
  "key6": "2xjFLYqZVe5yZ8i7A5r71Q9NnR9chisi4VUVmZoin5cqfUiYmYy5ZrYbGGUQr9yWa9XvG9C79Y91id2kGc6MTgGy",
  "key7": "25Vkc8SidnCbd32Fb1jCPKgKd9QPbthpfs2F5yiH4fXzEEv8JZgptF5HtCqdouPomnMU8EYHrD1LXLhehbVZgNGF",
  "key8": "4XMM4YRHYScL7gdcfvhLu1sYnzFpyEFDMbh9cf7VtYmSAdyNr53VrUtjFDGe6WJUvZaDnNbFY2gr2MNviywtqbT7",
  "key9": "52vau1KFe8cNBymupG5Xjnft6sKzJwR3eGGajgq8fcxHWGxrUtYaL8mjma9wqnQKcTC3xEysqdBNzMMdtc6biGaP",
  "key10": "BeAqugeiPE82PLp7XrAJidcUHu1BybVaUbkeZ91WkjN7aD1XxkMnBE3cXrsLM4T4YdjD134sey5yHxxLaq73YBT",
  "key11": "5Tb5LXDZrCUzodz9VR6rZKwLUmpa8Py3o3587oevRRsGmz2d5EQcP7cJMeMLAvKiMoLqvw8kfT5V4mXMaUYs9HgW",
  "key12": "2YaJ9fDT1nfEo3yXL8zocynrdLrcP5qA8KhfJkzyWnHEygjUtCURJD8xEdAdwChEBUPVBfNPQPrhKKnAvBowafPe",
  "key13": "3vz3UtjSt2sWAyhk3rf7EeEEJFunu1zsNwvJogMqcbPcykZ7fTNBUnA4thrLDuQ8mdEnPnbok2YNec1itzEwT6tt",
  "key14": "3tyuxsizitzDoRP1kGYGXxPMVfWaY4k5MVY9CwNf3AB3xUL6tNQ4Z1Jj5Gyw1Z1PuUzM1YD36tYQTAgHEZtWv839",
  "key15": "39vUXhG37FGFubBA2BooeMPsBMWxFVzoDYtvyTqPSx3wfWBLtpLTyZ3F46adknComPiEk8tykMDSFNiw6tuJPZwz",
  "key16": "2W79WnZPNfvmPSK7eY9Z11p21zfJ3rniiGjTbC1RowZEUKDg9kd8nPgD6SssyS6nfjeShjGjCbfhJEKZBkkhGjLS",
  "key17": "KzwZhtDV2a6CqS56kCbYeA5nWnXdk7pAHbwuwLjGRp22MVRVdRQo4o4a8XRGegGVgBn7TNgWV62KiDqCnap7Ri3",
  "key18": "2XBWhzeUqEGUfnXh3F5bq9a6XeqRREmYPsjfJYgBCkhn2xbYxY28HcvXb9KmjaEB6C5e5y2h6HASoZSJ991fv91q",
  "key19": "5HaaXwMhuQxo4i3hTBGTnK3GiFZajP4kYsaC9e1rqyqW7DzS5NX75Zb3UtUQ83owfptwQY29iZakwwBMs83z3MWJ",
  "key20": "26dT2zoFZPHCwtxyVDu3QqVYMP1pf7z8hEFh1pwM5KjRJLuWLnzunxyMmjimzCVFGivq7r1yruv2zpznFyBFHhoB",
  "key21": "RtDJRzeGQv3axskHF6HCqkJNgRW33dKveAze7WcyQ7LAHRKaSBq3FtxcJSQz7E6ooYU63pPkKzadiFmJosM7UZm",
  "key22": "2Yu3haKyK36c9rb7ALoe2iaiwYzhvs8TjT9krva7KGeJfMUfCB87QFzKViMYHTD9eDhU5Ug9QmMsGTY62UtwTPYz",
  "key23": "xypNAEve3jX6vvoqCCaMFrZgQzx5XzsgUh8frVxzNf4XzsyNsHnr3Ch5PJcHJrpHozU7ADv4LZ4gi7MvvDh9J1M",
  "key24": "4PYVDhJwfBYPxtTdeYzHGoKNXrLWg7B2ANCp6RMr7KQahf1uRA4QG7nrzwGfvMZGy6t6J1qwYyYbg37rKQnBkvWP",
  "key25": "P9dJrHeEMM7oo3XzK7ZXMc2waY5L4cJKCco9gg2Up2q4ucrGh3yn6u2fkjBoPWfFG6g841S2WZLEuUgvZCR7zyz"
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
