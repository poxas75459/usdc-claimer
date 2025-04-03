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
    "SA9oFqsF4SsTaMWBphUv449PM7Um5R9QDKumTTBvCfwJadm3Bh6CMuR5uG1XQicLSzJCtZpWGkucLeDBN3cySSY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Q2dwFR3TPB6qcx8XqHBPvw9b4SQPaxHBVxz4Y2Wb6LPzuNDmxpTWmW8fdR5p141aTQ1kJ9491kScVDn3tda3SHh",
  "key1": "58rXpzx7Bvaz1LBq27m7fT8owMZmyYahkY6hJfCyFf67vXhE6E4JYLA3HNFfL8TUjqeUmEsUa55Xxm9s9SCnTPbp",
  "key2": "65FQtbF4NRGko4i4NG6VXs28T3pp7oH6RFzcRyeUpDzm4zsu96fpzT9dDLNyfw6sqWnMwKpq6JuCpxSTWBoKWP23",
  "key3": "4EVGasuSVw8XvCWDL7orMWzVK85BcScYgV12PZ9VBuiej9ckUX6SuuyntTN15dz6qvLx8YErbw7v9p7Nkonp1Bcp",
  "key4": "3XLFKbN3A8YgaJ8jVJG6zdyDsXYdmFtktWzR6WTnFi1ttVNigytdW1zizVqsnaSBoZn33b2djrpwTYqM9PSUtCNL",
  "key5": "3FxByjEG3ct5Bk6Ew2wfKnpcS4pvo7BNKzFS5RzSKYJLvRuiHYsQVMCYuiZGw9hyf55qBihcGfgMZsBcxAxBU4mZ",
  "key6": "4NKGUfgZkKgN7Fq4KWphmxY7Gcg7qF35L1HETSDjLPPvWULEJjyDrkpk47cHwhAWTw26VYGPnhzhH2cUtxBMcPwk",
  "key7": "4UazdNjxpbjGP6y7rhVMdPaqaZpzkUhv9NoLzXRW8D4g6J9NQyEz8K6s13qTLJgYMG26BMNnG4YV7oKyB9Mar4r3",
  "key8": "3b8MiWnrog6yb6wjEEaw67iNUV5EeXkT8dyZZgC1oQRDr6bbCGG27mPugx19MyrWPoDgdmtVFJXbhXpQppyLiBHh",
  "key9": "3jRgPqMMUySp7MmfTfk6eqBgh5g4EUycWrVM2RMRLJUHGZrSHg8G14Fcn6e5z6EmVz7heRUQ3shWv4oREL8BEmmA",
  "key10": "3m84HmjJqzViHW9o4uZfGCRfDZckKe7bdAy3qvKUuRC5GqiKX35wg7pqrDugdjy9rxEsoi5KUzXt9hudcph9GUat",
  "key11": "5QhDm3QNmgnKrDP5Ksy2CUFZ88Vr8qTkb1BjwXKL9w8CCTyrgGNYT6NvEydy6WTuuHYXrNkwcW694DrMT9z1t43U",
  "key12": "2bgxunpBoTbCMxXLA9SsYmqPF9zGz4TMh6zY6Gp1Q66rjMUu5NPaRrEGNUnCiLw1YfK6ixkmnvkZubk5q4QJnQA3",
  "key13": "3qjWHVsmkBQ4WnBRhECBBEGta9bBF5saYtWpyMmiyU1mzq6fdpxA6DfkWTo1iF8AyxZqBcdgA1GX3zKvo8arGjgH",
  "key14": "4xhVyZ7fFVQoiBtTKyzyKX5kzvy3k8vDaXcXn2D8ES76PLUQnC5Jpu6EAtkFXezz2LbRFJttQEfRJZnzkDm2t9WS",
  "key15": "2sGpUqMUssmR333q1LrwLVhiWpj8MMHA9yQW9gcfGNC5pUGBNtmrbGxkSsjyNYrw8b8oJuLYmSeqBXyAUp9oZyxG",
  "key16": "4W3jC83SjzAGt95pPaGaYngo2EZjVMHLYpBPHeDcxMsUw3QHX6FN4on8BuCqr9bc1BkTTV6qLeLWWZWUsSRCsPrq",
  "key17": "5WURy9vYCGyPP9qB51mx1eCkTj9yMpK8rZT355hwR6G2xNpjZmt8h4mQ8LR9iwmPe2jBbB7gxzJu55HaGzr6d3qh",
  "key18": "4dWFrb8tohERg6grJ5nCPy3Xne8oVDZjaT8UnmMHy1qpahcHGeDM577j7FrTYqS2NQCiBnd9myRRRt8EnYjpbKeb",
  "key19": "4eDh31NC8xfomAXhjcKAUqR5sVD5nn4XJNmyQ7D2BnMkawPxZrxmoskiFpkn28TCzaKqFdU5Q7psNvS2e89dVvSs",
  "key20": "4jHpHC5hRN52XdrZiNdfoZXhHvLBYWvDfXLExk4ZftM7utbuJH2VET8R2bdAz9YDK1YfKBYjYwmPvBZbykKDMLV",
  "key21": "FWkfsZoPwL2c3HD2dpPCAAvGEBhy9QuB34e7PTTVBceY1PDt92KTpBeZtfP4uRUf1RMTjMbGfUZ5EoAkTJgGiyf",
  "key22": "3nxYqJwHppo8x456J6LVwzUdpm4ySsbLvgxbpSRf55EnrvotzvYL8mD36tVkWeMDbLbU1eXaDUXFb3mCkndy9zaZ",
  "key23": "otWAWZ9PAHZxT7j3DMPnaerAfwPmW8jUbecCVYs8Bt56gSr3HkpSqDX4NzeuGGCwhxsVVCeFamjR179T5sgf6WG",
  "key24": "5rzymjnqSZSzzX9avYuYvRGkeEvyypeUrMbRBjoqe8hFPtonBKjcYTbxXPtUmpbmyhP15j45VZp6YYhefEvhn8vt",
  "key25": "x1bE8MWS2gUgDBtRWNLjwBMm6hJfH1B1LNTDj4qs1LBvm5zwk3Q3JtvP99r3AoUgPUWVQCYQeTMcqnK2jBgCn6F",
  "key26": "3V286HfiH3tadQuosiekQeAhhHiYmz1DtZh9rVv26pp3Zwvyf1JypV6fKhcJb8QWa23JtRddYhDioJ5q6PXzkrgg"
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
