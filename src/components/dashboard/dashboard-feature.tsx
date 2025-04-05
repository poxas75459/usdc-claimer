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
    "4uE7Eu32Mc5pe56YheDPtYFFmFQfz8Bjnj6haspEpPTFjU7BkwM7KmCcZuiayqKhiNNcAxYiW38hEsHVK9546RQX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wVMfz4xkrZhA1jo2TGRUhysXntYCb7iZWXRtrvehyq4sehRPS3yquqZB5pSnP2wYNbuiXj9chfMnYDMy7Hii7Rm",
  "key1": "62LC1cHrXqyqKtRMZjoLrRqtV596RheHK8diRtQ6hX8XVwavN4gdbvaG13w43mBGwLatFJJUZCV4pL6E3asm9FzY",
  "key2": "3by3DHhJMrhdDiLF9S5ckRbF4rRUpFch63KTwJgVC68eVxZLjwaU2H2UCpMCxez8129VFSJY5SbzUFhukPj672KC",
  "key3": "5VfLzHapKo1X1WbgpARfpMr4EY114DULjJnJHRYfqkmXzMP3RyGuZMJxFDFQDQN1KT1g41bVpJvHB4UAnCRhSMLS",
  "key4": "4g8HZKxgve3fHQVyuKQuaeQd51nZEJfGNbHWNL7XTEdfM2jhcPFibvp9AoXTNRnA31zkw81zExdytYLSxiXnW1mC",
  "key5": "4KbaENmmZ4evaqHY7Q5YwUj7mzsAsVDTYT9Lj8QET8p4KTnvwduKP7eTZPaS3fbwjAHoQN65So1mBAAhnsTuSe9B",
  "key6": "269ypZ19gx22NceeanMZpcVXVJJpaq5JFcDdQ5aMk6zPn6GBNdHFaGqZFqokyyXaNehgc5z61voe8uEfRgUtuvMN",
  "key7": "4t1iYmTwBf6qzqYJDKEJdaUGsrJcZS45UTHcASLrGMvvJQ2ddCaj6NyzASGNfGL26mgnPEZ7uXGfKdNKrF2ZsJ2V",
  "key8": "3izQMTncZo3NMv2PzBhFc9Ry1NqTE97Nk8B6xCdTE1aT1b1sdqz9Merkj2wycd5M9n8FB5dYdx8Xs1JX5D6Gx1iU",
  "key9": "3r8rbKSGhrFxxCN77kX1Z4wL5yqiDVBF1AG7crAYypiZR2KfDzuE3pTzfZXZMvDbpAZaGcYRR3A67naa2bz9Vzah",
  "key10": "2s6xRZQTqBCHVg1hXFtqNsX48B2jJUVLGi8zzLHZ3fsFQkK11dGqDZEeLwCXUBXq814JENMPJBFYNAZCmtAJADby",
  "key11": "2WAtnaNGR1UcZHQfK9PYN1qcba4W6Fbz6dgq9aSA2hhAsUZXGdX8ikcnftWd11NKGsKsAL3GRU2z5GngsZvdUnKa",
  "key12": "3YDe8kCbrB3sCoAna2zKXyctfaGhLeYSvvqHrsb9h7FLsKe4UrN7XYiJQobyecMYwB5QxYVMAkfdHCRWuhBFBMFJ",
  "key13": "559XCLFABBb8UfNvuZbwy72AcLQHQtfXsZ3bbALBgRBHX2hpgLajAQxbNAvr58mYUE5XZ87ons26hoM79VBpCRky",
  "key14": "4EtuGjVXXYJ9ELB61gie7aWEJsmdWyHDKroC9AFH6mUaTqA5gasXfSAJPeyRWteoZTt41itN2yj39WWPbMFfghvq",
  "key15": "2bk67qhMDRve5ChpgRug3WWPRpwywaLA5URdiBhS3gpvtKnuBhJd7EFqcUsfoE5upx4Fz1kud61bzEd53UsKX5vv",
  "key16": "3F7yjsPmzkazi6qhcZg9bEg4muRsfAmMivZ5Fna9c7CJ2QGEN3ncXLotEke7nYNLR8gRUc4yGppBvBXibxmPzhXm",
  "key17": "4YzkYYRLNFbPk2pkt7ni1tjLaf798Qg21Eatr9xR3zptG9Xy96rb8V1qDYDRCaR3fRLfXd3vuJBnUVYswGjz7GBq",
  "key18": "3ytFyYN2yGF7suSaMw21xdjFJ9vMwwRtW7WsYgwbvL6xHSY3wAGZtNkdARhZUCk1Qif8bNuztdmRon6bvrX1sXMB",
  "key19": "3VFbvgNb7gyU3AGwZZoVo8cFvTCHegey2N5e4He9TxhDARqNVXMB9uU6AQLDVAvfQb9zigfKH9VqQRSuwwhR4fvD",
  "key20": "4vgCbiw7bmVoLoL8JiXv6qts7dZ1SmmbMYxm2vpzwumRMUvgsW9T13vmi5zaQc5Yf4v1GVWRvCy38RuUuE14n7tn",
  "key21": "4F2wCCN49hm8mNuSaj4qubRbakGTu5TKoLqWP7wydFjRPmXNKbKz7EzFjYpdHPAx34dR8q4PgjFVVf7QdhMHrvNv",
  "key22": "3eujnSyovQqsZQCpqnLohWhqs7Azpd9MXoJDnmJ33jx8NU8rfC15Gi5PaGkyNDeFfnhoPDPZwNxtuLoNuN6pF4gk",
  "key23": "276Ssr4z7zheg5mon6ZtyvtGjkr2k9cxFYw64MTERr87oXQrMWM68DRrYAxR3Lan9M5EFCRi48Hj4uftzqJzoyNV",
  "key24": "4psF59XcG4E7UFXz8fauCfC28MVa96pJCk1QEzFXshrrwMgNrcQ831NYMPCyF8a5mcxVpdugxnhkAJ8Jym3qxJEY",
  "key25": "65rWaReGP4ryUqZ8X3ndus9QTKYYEDVuvvzjR9uz3zqVEDqp9umd5JVhPK4T4A4scsxfs1Mi2MdkXuWXcTFowE9T",
  "key26": "4ppHqmbfg7MDFttCdoxYAZTwU8BVCgjTmLQN5eQCpxxKt8dce6SoVJFa6neuv6yZXNQBKQRWZX9WWoXy4yiqPSuU",
  "key27": "4pas5UQwsdducgkDd4AqCYnsZenGGjZgh4gzVRvKRV5uT8QTfCmEi799GPryjdWHoFH4xRXftfgRbrs3u9uwcNMw"
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
