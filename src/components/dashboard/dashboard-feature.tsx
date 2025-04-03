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
    "4kgvTxbDbu6jD8eDCB9fVnzJjyT8qk1RA1p2vkAkUBwGiikfB5VGBBWwGHLAAWgoJgBMSn5u6kw8joQZ2fjLEeWm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38nyUrwMcSDbyeAts2AA8w5ba9qpLyNovSXVMdkHg58xNKTbGkDBWpvqGBmGCgmNuaaZaPd2xVA9a72BrgLSFSXu",
  "key1": "2QpoJtCUT5EJLSRWSr4d6fbWeNoQWJDrhqzSqrnpZVYQTQEuBLudc6DaHzqw7vnyNNjWzmXBWuuj1hJ7hsM5H2Wh",
  "key2": "yjYL5GAHR6BLBShTGKHfsJ74k1r5o4YLGfGYMyUcs3umV1aiAVaLPXgCvEbJqNVhqJXco8uh3a53dvnLCFCasCh",
  "key3": "5xM5YkXvpbhn8YwELAo3SMG3VczcnHVqV4EW5sLshBLDiJMYThkPYQVeVFbGMJ7cF3NoQRq7NzVjqwvxz8tYYTQM",
  "key4": "2yiZrW5zndG5RBpVSuKa6v37QGCqaopsJcpT1qcfciCE1217dEPtgX5YZvrFHJtu4mbKzyjrZ2xLAAbYskYTH9NL",
  "key5": "34ErfAoY66Dz91DjyGYdPF2rQdyRGykkpcp35uj9gZz3LpRyLeMThyfRkAB9u9W2UBPdvVUsWPRhbNYYa6bmq2z3",
  "key6": "MgKYVkKpoEpepVvra6HCa5B6YMUSDpt1K5ucCSSLdqqESqkrWjy9iXT6LY3oj4RwpX8zqQCW7uTsT6bLM12qoQv",
  "key7": "5Qjn7wDHoqfzYmX5JoSAFQFzbBWrDyBL9nrja5DK7sL3H7fnVAf6d3TN9snfPr5wbBo4F2NtTTc1Vn5ySa361LL1",
  "key8": "YGqEUofUYjWDG8QQW552aUyAY1Gr5KxLzmcqrdZZxXXtWkTH7j21TtPff7gDeJPazmdB5rD9PpXzKnDaNEaGSKB",
  "key9": "4hEJWa5pHexM1RyFVEUyUU4Yk7Tsw4UgvQshCJVmfkRnu4YFvsS82c7NETy9DAHYM3QATtaD9QcKjcg6yVGcoWWP",
  "key10": "3GT3HrbSbktNkYw1i4xhjJTfk36HUyh3Ko8Wm9CMYeurMDGjCBLJfY6ZPtKdjuUbYVsyRqNCzkXbZE5gMNMMUU68",
  "key11": "5gD6cEiB3wHpVCRMPdVXJDj3mj99eJABLr6AKWczaryffm6eJJuDnwwcAjhd8RA8SEwgTfJnj7MXtMYimGfMYZuc",
  "key12": "62i4xLhoTJAcUwWYg1ELR5m6Dx8Q7k3k9LCPMVAkB5yziRWvYj3sCwRWcrfVmwM1pC3JmiF4MYgYX1QNy5xzRwyu",
  "key13": "5nnFvSiziHMNfkAQJHqXbKDtUsCfMn4m9RKczhwBecVtRnUB7nTCTGo2vgcLHtdk149bfmme6jZ23iY5jBkUXzXf",
  "key14": "2Mugw8qxnuV8W8mUR26HBYdAgrFvHSVbZUESB9k5nYqJzkzxrmoKbvXGhWqmeHTGWFfhBw2vC8gFQYDnZAz83gq3",
  "key15": "3GRFD3TrnUizYt13uVeSsAaWrPxFm6xm8RQt1W5ouGC21Kgp1a1xPYPKREtvC6hEguFQhYHQU66EbgTmyoViJWYM",
  "key16": "2tmMgk3TRgVZWfSCmF2miSi6rDhsugWtGJBwozsWz68hmKWcske6jNUW7fadZecVA7eaYRPjhGYFrXkBuhvKC1si",
  "key17": "3K4qMPeA5Tquvc4prj4DSnFme2ret2muCF5QD7dhZTU2S6uAefKiMPvsE15Lqjn16YuvP6v7GCzouZKpPrtUcsY",
  "key18": "51V84nFtBQWT8vYbUCxEcfzYGGixDYMP1AZbWZCXm3T5PTnu3jqfY9NvCp4vXNkAQVzu3941aXBArhTsPcnKAfQk",
  "key19": "5v3PSmGK9RjoBEmyoDLSPVpnMAZxCa63nWeddaRErcQvYokje4ZsSA46rN3RCtx25TAxwgAAT8QnErezHWR3DJ9r",
  "key20": "4Bcx432mKACgrWRTcqW2WqRugrx9m88rhRn8cCnA9Xd1UpoaqGfePzY48NVpJxGNRndFhAMVgLh7bC1q3EUw99Dk",
  "key21": "2RiDGHCezFVZxN6o8fmAvmKkcTx3TfkZP7QucXFKohUQ4jXPgjdk6HiZCeoszCxkmzF8V6jzP33EEswcr1agc5tE",
  "key22": "rhDgrmfMzDZGVvVGnP1tuoSFhCfZPs7ACTChUpxw9KBeWo5X2YVoZM657fXrn52zSd25VZNfa7o2uYRv2kaKxg6",
  "key23": "4qSRLKuiC1auctKdcJs58uEY8sgk4U9fNDAs3FZGT3G1siuuSBEpfZYuo98ZTcPw3NzrBggHArZBVbDCsC7jvaMU",
  "key24": "Lvwow9kSifPCSo2XxL6NzUMeUKuLPgbBDVcx52chhguGC1bGY6Wu1yP1BUKHpHhxCx8KiyJGVxjxTsKppT2LmEj",
  "key25": "4cK19R4zCjMMUPy1mxk8cNi51WnyKALC5zqSiJXSoePbJr4uNRppfCE6difgFMCEuehz2tssivFJ6WL258xGRfN2"
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
