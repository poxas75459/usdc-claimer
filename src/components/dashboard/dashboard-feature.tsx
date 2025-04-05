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
    "5RQW1mU9xBBsEpVKdUqsUH7Q92iPc4m7pHDzYGNRiyXzHdtSYHgLu9Et2qfahCrgcX9EPabxjKUmPb8yU2FnHpKo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hAPRsoPdmzCPjvmBoNKd4WtzmgTUTyuondMv2n6Q51iEsYLheESUQym8Sfzrc3ZZSBCKxB9FP2AmsFu4c1yPZWR",
  "key1": "2h8XQkCDKNvDKwqJBbbDJjocjRc8dnRLyHrwbeLY2UgNcMaFxmD3dsYBUWxbqVXZEa5P6BEbrYhbwnKKvcjqfL2W",
  "key2": "5bxRMmjAyp29jabX3bbFrhcEGuhNufjmVcHEhp6zkqei9x7pnFVaco5bGdFEcbSDb2gdZjyNyg9iJ3x4VYPbWuND",
  "key3": "67cVtQxkqv6DbsE45ojsxbvof6359qhJJReBZrisfo3hBR722tvJu38TRWL4jU3wrVT7PqH1apPBsLueuG6go6Ye",
  "key4": "4Ko8mgPVDYbPGiEY5sxXZcLY6Tzwd22aDaMeKnRmLjLZo7La2gCPT15iC1A87wXgQGEuU5iL8Jp5oSSTNaFZa41Q",
  "key5": "4PwbJp8uUz3Z91Nr2SaTohaJafEKLPqN6xcFFRTGAEguz9521kNpHdgDh733r7W9en2J8CqSaawno41P1aB1c8pS",
  "key6": "2zh1XgcQzNYX6ysSN4648142btwLy9cfoP9GC5W65AhBoNPiixA1EvF7VbuE3WeG35rqaN9dTZGMuPkRHdFkwEg6",
  "key7": "3un2aYfjx3rSEBEkyZNKPjXszusg9BucTPcQr62ZaxhbG288Aub5DKKvcVXAmiaWnJCv3Qcvn2eZQKDXHF6fDrQR",
  "key8": "5znCyw3b39PfEa3H1ttdar2n95h4FcY2T48LACrMvhcEMDaRFckms9Bq3xg4D3dL3QKDVSGe8mZiXAcZXrMVZTgr",
  "key9": "4CFLQFYdY3VXdFWfQ1eBv9FiwoqgubpzuFb32jn3eaYFwMWsBcTMew6grhbnK9g64zRYu4ueJwFCkJ3Zxr1MhVfC",
  "key10": "4FBy3o32dVifFjh1TCfUyov5fzg469DVjkD9n2P5P814f6ofQA1yvapvtW6TzwdaktLGuHRJs9qHzCUXWtP7YQpL",
  "key11": "2Mw2HfMgwxuai9zwmoihDUyuMHNkCZw7mz9qmQ97GXU88CtyP2pt3wJw84sKEyBjkD7QRN4inTdijG8JfXAWwajQ",
  "key12": "3C9fSWiQmSdLgr7EJpjkCmnrWkAMR9zYGr6W1ofba3wkDB9ZVr5EriRt3wdrLNxzMvArFRov3KHToxVE6QsEAAmF",
  "key13": "4tjeQph3A7ULM9rGMYTAkFcFzLkLPPpXUX8m9Jv9ZbDYcChdkuDqUUq64yuHRCeYEmMgRh9UmzJGTn1QXJn3z7fB",
  "key14": "5C7ydwtj1zNG2TMwicgLeFb64pvRz3zc6zH7hPVAikjg7SywP9Ar1MNHVKD6L2Nn7Q3s2UpL1rBHs8NaX5MpU8AM",
  "key15": "Sp4nCX48Kbb7yBqGVjSTxniJNop5n9F4ukz9h3aynnCs2sALkDQTWUyabL8bzUU6CHBM9EDbDEWUoMpgAoZ1PsB",
  "key16": "4ovLem8Sh79QieSaLc7EwxYTM57DmWmxGpCDyqHRAFL3ku4ajMBoR99JZYZvSwEihuiafkuqvkNzk7oJw4m5dek9",
  "key17": "5PpfWYNp19VE1e3MNGqxeX7qLJz7gAPoYSUdmZxjuNa5h5DC87ZVaUgoSPmNUCwstRy3AFn2QcrAKp9bxzY8VdCT",
  "key18": "bLRxCRbgNgb9dN8wAWmTUKBVARToN2JwaUETw1bEmDUcwR7knA8ep5E5KGeyyS7HWjTiCJ2fhi8FiSqBUYF4Q5V",
  "key19": "3dToi4dc8CwgEoQezbk8uqyfxgao1aLj5XDDQWSnoPhsAueTGrS5djhTxsMnuBtzLP86usF5uKErTCRFKVzj3dEd",
  "key20": "2ygqW9npKFC96XFPZvGzDLecsxaYBqvq7Qh9HcAwK55NUjvy2PzzFgo66dgwXuV4gFEwDFtRYsNMPPjYVhpDa2Bk",
  "key21": "MwwYHAPy15Htxr2eVHHwkXzLjLLYgg5rh1zLwo2iYN5S43BAHj3zn7Xa9nKr915kR5GN2zHxYFkDrCqKCWgiSoo",
  "key22": "53Hown4fksMhFYHVzMXRPWvkjvho9aG6VgGA4MnWMytHgVLVXPb4fwHcG9A8qhq3yH6HfKvG8KDK59aXLHne8XwQ",
  "key23": "kRuHDpWqdZ4vcV2d5A9E7LXJzk61pLrqqTYBVLu9pdx5syA6oR8jZoYxjZdYTHXvBqCHDHQqpdYhMcNCRgGYLXf",
  "key24": "ghfWCfsJUN6RGvZZ1P1ni1ccs3moSY2DLytAjF5CzFTjBSzdmFYVaVekiBHBSEtzdAZdGEPKNspF5cbb9gLj9A1",
  "key25": "3uYxBedTqUcEyc6dEXfvSE3uzy8HccdFuoYECjbsW34C8jXVURNPMJ4YPfeHerTexh6PtXgb8a6KJajYXyZsKLAo"
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
