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
    "5GcMMG6GwXJvMzwcJTM5rj2WLY6NxsCHmiXDiC4CsLRiKm4FpFwQvE6CwbvVpBJoCiMnmkP57iBw7ug7cxjg2ovN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4T6BhM6pdLP3riBZaxmUAw3Thx5Gb48HKnnd5TyJmuxcn8AXw62gGJBrjgxE5Khv6Tq2ggvaKtXEd13MJ9EMtt8z",
  "key1": "3177CWp85VNZ9DGWi1oUwzTqYwjAFGAVL9X6JLbRaaCeVQiQB9V2FKZvug5fcAgjc6CqhkvnZf3wmQiKAGYBcX5j",
  "key2": "EDJL113ACSJF63wB7L6QEg9gqTmgdnR1sA3Gfb6HcWx239zjbqv351ntCeqcK4rwHhxiAmHKTrbfe1N3nMofH9C",
  "key3": "25jAa9MNtoQDwGKBCAo3KVVU6Y2eeqN2BuzbF3SRM4uj4TNTDtuJGH8YAv4J8QcNVWx1TQcY8EtqsNUwtJs3Kb4F",
  "key4": "2DLXHxoCBegCUU541sQn6XfbtYDZHQYEjpRWCHBCnfTYwAgvjWbm5NCYKaAUpncQP8vz9dQVojVh3nmMKPn6e4M7",
  "key5": "EidrtacgG8TfzjRpVGT87jkS758vgbpwB3DLffVKqjue7d6BzRyPzsakiKHUkbfKdLiob9RvUcnMjLC4VDk3jqw",
  "key6": "spunnsrHySmpcQA7xxuPJk3yQkLncHzHTWGFDJhtY3ipfoHrz5EmQHciAFwZxxAmaSth8hY6hnWm7hmJRmGpsns",
  "key7": "56uczcg2Y5Y1oEFKZxj596wB96LCosPt3BvgDjBUpEBpXCUZVAS2fxcERMxtB9ZiakUJeQq7cFss1RsaY576188V",
  "key8": "5Gg26iMwmYahMSPXN1HD7LD8F79YJkBs6dneFXx6GWpML22XwNKzS9jD3ipQJEHmTGQzQXHcQUSNz4pHmRwAic6b",
  "key9": "4CU71gUCqq4jXBCtRvCusNznkAdyaoh6PizvTZSQGjcZmyDrnMmW2vA1UshrzqanvG1AWW5VD8QhHtjDekW4h4Nn",
  "key10": "5UYbZSkAjD5yQYtnMHo5Bke1tgfx5D6WoTR5Zk1C1kuWzit5E3nMCuUhiYjoqh2gUEzsvNfktR5N8J7c57iSFMNb",
  "key11": "FMUdKmZcZeppHVjfALdnF3VsQF9MpohwispFtCuMVo9sTCCmavmLNJnUfD7Ro9hNCoaYqLym3LKJfeqY2SUebZZ",
  "key12": "5FXMb7wVgradHLUKE7LhWSSNvurbb7z4gnBsoe3rxqJaCzyz46yfr2XLB9euCrNPefNkP8yYCQH1hEk4SEpHBVKa",
  "key13": "5ApCCjC7ZvCmJaVfjBw3cUK3FXupbtEcvqaeVDhzYdNFz7mp7gqauercDQT2MPh47V8xuU7SnqsavMtM9yMsMwqY",
  "key14": "5ChUk66rnjndVeA2xYqXNX5Y7KhbpiQui3zBG3nzic2v5Ua7Ze7PFhAdFprjc9wkn1LuzQDWYyaPoim8jC7nVSXW",
  "key15": "4wYqKzS9rEcPJmuD26xi2A7iK3b1fCMrpuK7TAuKVvs3C3BG9GHuG2yoHQTEj31NoGJh9znWhbomUZE1Jn1it6F",
  "key16": "2ks25tipGuMFC2P4NM7zXQ5aUt1C8PgKCqzpGsKPE1MkCQNNZyTxWLsz8NJ7jDpaUSKJ2sY4XNsXNkawrQ9ABRZw",
  "key17": "473jUstoHHptvuMYTY7Fw9g6ua1kNCkL2zHyiv4KQ8N7PEmqfwfREgXvoAE9G9BBBeeoU6NdRTfb7hGB4tsK1qW",
  "key18": "5Y7xtnpvFpqck4ZErHSpsDHdjG7tmNPYA8vn9E1kFwS8dSoguBbiX81bjrJXPgvUfP2sKwauy5McfBKR8R4BCyiE",
  "key19": "4nJb5ZQQfF3iwTcoEQ4QyLLfmfnFPaF9YsC8arePxK2M8xtrRtVfnTyaqUV75QxSFb5Xjg4pgGgz2yHPMZ1VNE8F",
  "key20": "4n5SZHTx4T1XyXyR7haaknnh5krZS2dZ75yMJ5BL4ATauRLwog7N7aTL87LMWw9huEAfKJFYuM89CbrKw56BXHgu",
  "key21": "5PhhupSJTHhzwSwjrTXpyqkSpsSaEVQbRBofKCcvQF6JZGLdcHYzgaf7McFpALEBfnXrRa1BcCpwd5e4W51eGM7L",
  "key22": "4y17eVEVQ2cEhJk2fPTr768vUETdRaqJbtUZeM8WQmbBRSxNzBmpitoHi7RiHN8rGpXRJBRt4LySyynwhRKjnsJn",
  "key23": "2pYbeuo2m6CXmyKmM4Yoe2949LChoXrA2EWJ6E521QFjT6LunsFZvGMsdXeJffvZMM8iWKHMbYSWbsEtGr1j3CzT",
  "key24": "2CKnnDvSZwi4RFjE9GpUAqWfY4Z4UJUqujmLbUdKL969RTB4FEQAZXkbw42bH7QPox8yt1AntTmQc3A4dbAS94UY",
  "key25": "5sLn9fa9QRNVgnYngiHAWQsfCij76VCN1x4KqGDUMB4KiC1QYwJ3xGtz4g4ueB4F4VABJtNbuJodLkajXV5SMaz8",
  "key26": "5mECQoQyR6Jc4By7e1N2p8bCvbDk3U8ufhgc7rzutoSALCN5fERYnxHM9yk8565sZ8uixDuRuCJjvy6mFR9JBTju",
  "key27": "48aqLfYTrmWrxRXJmknnARHP6Cd72c5cD8TFUt4Z1VahYbVrKCfyZxeQWhsGHqQZe6W6o7fqpFJLy1NrUWsDNtJS",
  "key28": "56Tra8MxRdLk9ZsEBtNraeGGX273q5uzPHKJzdUSmUXimHBcjjdfHR8Fe44YfdNqLFrwiFvMxDe4jzBNoY3n6A6g",
  "key29": "4Ly27V8C47FnsikpT6ypNQSdzkcT11R6rhg96eFkbQyqfkR1yxrwRgdQCUTUrwso7NfPcBZpfBukzkmsRPrHENik"
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
