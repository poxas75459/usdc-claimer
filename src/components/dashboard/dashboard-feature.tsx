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
    "5cyCNrB6Frq48KaZn7Vuc5upPKByfJfa26d7yeE4nrModWwxDZZzKFCv2ckd1sjQ3HsnvAYpz7dEoAk9S4nwyMVZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41jyqvnmypqzxdwfH11CbE6qLFvaHdi45vsCiMS2VL9M3N7caNGoVivtryD2PJD3rjTKwoWrAAcMHwAtZA6a6qXs",
  "key1": "46ghWHam1tZtZaMSty8h5ojRXnp6j4BM5H6KpVkddG1nJTR5n6ZV15LfB2wSuZJbMf7Pvd49fYyqrt3YWUBqXuPR",
  "key2": "3m6acmbgTte8BsrDD3R9p2HXSqimY9NSNw7dxDfxPCAzDchAPCCzo2VeayHaRMcPx4TjP3mXAbAg51BFSaHPFkNf",
  "key3": "5YBgJu12fVcSU8SVtmurfDRxZyCc3G9s3ym7dyweBGDr8jP4F216xVCGjKvDY8Jy3qW12f4QQdGzgJD1JxgPzeAx",
  "key4": "4muc91SqwX56QbACz9YHwEnxTDeb3DdZyWbVFgBbnPB4KczLHhiwsV2K5aGDZD7rsxLRG6ruxevwRtsaMtJE73mR",
  "key5": "4pFii68Qwa6bb94Q2g3frDwcpt1kSpbdhctcioYSCkUn1BX3zG2aK5UaSF1MUCwZguccnYnJAcdyqg8EnruT78tU",
  "key6": "4bEKSy1NAhW3P1fpFSKxHkPe1diVzaTvGfcWLBCgd525sznkjziHnzFW8TGz3Bg17os4f6TBsZrdVXuhG5myyqT7",
  "key7": "4BaG34YFCWLTzvzVxbm5k4wy4WhZYcFje6GrSr7iwcQ3ChY6cMupGHZX2m8qQVGZm5CcVbMhSevB5jEUuuV5UgHV",
  "key8": "5aF22bY3A3tPQb3rkJrNmfZ9AQJAajdXniTdrVjdbBMuRJms963CberkM2mH3HUheNrGxE8WHHawhwvRzMJJNhnn",
  "key9": "53MNbfQYEEafYvno5tScLnDr5A5Mw6EEAyuGZQb6tCmDxyxhA4z5RaxS33y21bUhXiRPPKw1uX8jQoNbaKeaTi4S",
  "key10": "2urZL5j4S5EJ5e1WFDhRDvpvPQ9Jo8e5jp1SBUFYmE37iWseCJzSaUBUD8eKKYPHbRBSVzwnv8pa9symh2J1TNEa",
  "key11": "5REDLkheYtS8NANQ944QcJ1dMQKV6g8LfhNmaB4i55fdDwu7S6nSsrXdZUPSpzuqqHWMNtdJX7PjbqF3erdupvR7",
  "key12": "3M148BAkxeFxVyGbKpXyJ9KFB4uUUUXZF3mAT5EpwYGpj3dKZ4YEdahpXwg2yKuMiwBuiuPQpPJJv7Xn2W73bB5m",
  "key13": "3T59WRmNLwQwx1NqffM5QkAMJHnbqLhv1xXfebTNati3VGDMxRnHFpZJpu4kXBbEC2PgcrWEttgKSFyyH3mmJN7W",
  "key14": "5As9hK18bFfgesyC1zW7rGssPnncohhD5a4BpVLEmZkjNqVG3hm15Bvi7ZY1mmi96RgXuiJxKfGobVZU7Kfwd3WF",
  "key15": "LRcWSTG7kSPdnNJMPhbhYs6LD3QDGFktDF94XQU2MFgrXvCa2qdPirjrzPZo8uLZ1CdWDczJ8YsUtKYhE5VbAgP",
  "key16": "3Pkm6AHTJbEdagFCm7LxhLWrqqd4CESPK3guTGLR7HhSDY6xo92WVqkY6QinL2YPihGPtK3mp3HEVZRiGxs8cU8V",
  "key17": "5prNSDfxgW5Akmeirc23xvBvrbwsXoRgKTPQ64nTJNnyidCkW2WRioeYKZHiEKWo3KvTCv2U6yBV6AEHd7tvN8rC",
  "key18": "4qUkgsjoprhHC6FKzV8dEdYzi3tZ7WA3s3nrZ6BT28vooZMbpEwUrHhBSeKEPTfuQNPEA5Zg6Fw4TMafbLa6egQv",
  "key19": "3kDMVu4tYUZNpuPqgT4FgZPs2kouiKQmspUXPRT59zo1XT6Ywy5RucWdyDrFoi8i3xnvtyHhj3MmWNsvPh6XJ7eZ",
  "key20": "34URFHJgpMGie8QBBPQwNAiWzLtTWp4c46JZiP2rx1ebbJ16GoPFw3Kp2Ku3MbD41BWkTbYPpucca8VbLsuE4MY2",
  "key21": "5scwpcHj7eCAfnW63aAzhSCxbJR38FN3Cb9DeUV1LnoAmvowsB8TiwdwCaQ8AbTT3EZEk6zD2zbQmSX6SKv5G7ft",
  "key22": "63YnRpNEqLywkihHGRByHoDtQ3pXgFVE6bQCocjSYF7BS7TKrfxPR5d2hyrbvmk1AUkahNpJUxXyrUEudR38agCT",
  "key23": "c8bU4Qp8EYaxx9F6yeR8VVFtFYejKLxy41EbUesTrfTA8sF2hAJgofW5xki6Gvx7VGkeXkzxhYtKG2QRBaALCUC",
  "key24": "NFL1hfTdY16TE2NoQvoRRQiV4UHHF8xZtvBTz3UHS6wy76TDBv9MfgNzFmMEmLkQVGC8ZJem8DwUavUa7p8yhYn",
  "key25": "4DSu8jJY4KXBUykPSZyjyGCxdu2WrZY9m1RETChdSTncpkzMYQZNXsnoaxC8KyhJ5muLJfUQaMLQTRHJhjg2iUuC",
  "key26": "3TcXpguAC5mynUyMKUha4CxJdmRzLzHjRRP16RpZFo3P1767ZgEJfAAQTYXdkbVkBUEhourv1eQHY6NQhNPtNt8s",
  "key27": "3Px1KzP2DuqGxJF797nDufx59SYBfYxggYLNvvkVo98hh86ZqgsjZ5o95JEMpnEd74XxdmR5tij3iM1jtpNAhUkV"
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
