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
    "4uKqGJUpHDvSp8BGVin8CSbryLeeJErRohjG3VXvJfdzjRPp3ymceDw52gMZZGQRBi2AmRiExUGfoc6NacbLFKfv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oteBNAxG7Wi1GmJimsmw44AQgo6buV8qgJyrBC259f3EiRvti9rfT8pXB168acazvKufu3JHgbJnpidaYFBxzE6",
  "key1": "44fyX8VDaqfYZyXqHQpkc7aue3wVEGZpmWLDXdzVZYc2rhAXUJVKY1nPp1eNZept64ygKfAW33PXoNjZf4bRkrXH",
  "key2": "3XWrwuBgwgv8moF1HGdURAChCDNxpD6NTjR9uUFzUdzWBVL7XsLN5TUoXU4UZPvYp8phBu74hyP51Jzk837mBRGb",
  "key3": "2fD9c83Cocwhgjdy2XM4fhE6c48TrzMH9BFy2VP3A4pprZfyHGqXaKLvzE7AjWE1yXTY5Bf2zF72e9ZGc2hZwHQi",
  "key4": "33ho6aBUJkSBjc2gv2FcNGYz4afNYWHEUPqEcceCuoMu7LmMLTme8u8HmsKJijEYVQUHBJuzh4jTcT4uimMNGJa1",
  "key5": "4PFdFe51K9K5Xw9nbkDQK1WHMuiniNk2kmY35dVj78NrtJ4xiVSeX3VkmXcgmVQJM11neJqxtWLQfVf9XSrQpmVy",
  "key6": "2pV2zDAjMnuexUhMSM9s9yXnwP9Y4o5Euej3a758kD79KZ44MTneQbc16JjEV5NQxqrMHSS3SJFVi6tHDKCtd7DM",
  "key7": "tMwy9GYsdiLzqMKNnZZ4aLAZgWLF11mCeLhhJtWYH6EcgxPqsQ1VNwx4keiVpRz5ftzgs1FXjB834KVYp2qm1xX",
  "key8": "DvJHXBwJ72VSAGbSzEjX7ZLpDV3fG6JJLG3VZ8k2eacpnqWExy8eT57ruDSUDsLRiFcv1kyDFHVQeLqV7P5fh4f",
  "key9": "3P8soaTzpsKWNyiFkCMCVK3nRu77H3WdYBE5C7YN95Fog9JF19bSR2ZKM4EjE5dFrcZf1XLg2b75mUdZJPpP8WRp",
  "key10": "2bcWzWxp8Fs41gvee7YxjdfCvMVW1Lt56MHwgVbexQwbQt9Cair9k3iSk7maNhtzhUJasyMYyE7tK9TPYtrfoKjN",
  "key11": "RdGydvMKRgcigj2G1LxZo1Mnc7E8rx5ZcrytHCGkbSdf9UZBXjJt4H5AsykSiQLYk5vREmPAYXed6HfDmUUH114",
  "key12": "5pQEYwGuD9y7Xgfiuc22QSP8at6bWfAtpteydpb2cesMo4os4ibz3XauHvEThT9s4Nx5CQrb1pk7yuybkickWoL5",
  "key13": "2PLXQdTtyTXnhPuooLafJMGMsAZzoPaCiEdxikkWqyZfn569GWLMEPArzxowTvF9tFvzAuwYa8E5n7pn4kKY9svZ",
  "key14": "3EW7DMNnTL7gSeKNDpzvbfMgwexpgJxnRjWwXdWCkCkwTYipTvncoxr3EVzjsfmAUqUFbvwvuCW7ymGFCJvbPFcr",
  "key15": "3J5azjPFTBAYCxRVxn6QU6gWbhHRrXYjn1rvhxk43dpM61vfLgAwwbtvV1gYjfXCm8UKEm8kBhVUqjHzpYTq6UGT",
  "key16": "4sAWpk7CRU7wjbN3HeCfgRSNsKbWgcYNxrQeNxvQiSqw7afn2mAY9u9AiDfrkMsvcvjhPe3qfXEHXKTfMDd2Km8n",
  "key17": "3vkrdYAgdX4t1ww8hWDcHGszhWwvQqK3EvVNm3uRHN41Ec4yzjt29Z1TABkdTi1hi3bCgCVRqX7PZ8DTVeknWc6b",
  "key18": "311oT8H9RECxpH1nqFdBB65sn2V4TyVmeQnvydKMbLEdWTgs2oKpevAyRanqpNZ4nYHBDLas74mubbStpVgKmfAH",
  "key19": "pifh15SrQwModTY4uoU6zJY2y5uq9qkdNaLGWx3x5peNC267xUzFnd6eHazwiPdcqLTsFTCC44AUQbPB1Q6DPEQ",
  "key20": "32CQAn4EDfH5NkZhJzy9tbwgmaMdhEhCJvZGUUV6PewyeTzXgkzeMubxdwaAVVDSu3LZnVfcEANEVuzviu6EFHd4",
  "key21": "4eSucP6zbRKjHKauSTJs1X6osGx2djDFES8x3uvjBdULWD1P5Zc94XwKzjJXb3KFn3TcvR9QRPkSh5UnCsjDhfmx",
  "key22": "5A18p946yh54LeTKXSjZ3RFzypV2TsKFohp9XWq4pwUEbQqCVPrCNku9UTjce2Yjq4AaoUij4jz6EV25sosgngT9",
  "key23": "9hgiVdVQhEki87hRU6HN5w5p1CMKzdWm9V8zAJJ7g2oBRxRbA9t1xdZok1e5phVAvxRRWykUqXcdozJgRJZsMDf",
  "key24": "BjwCMmjbus8yDhMFzCSfLxQGwkQ9nHMLFMuJe5h5u6heTdqPkJLfH3HyPZC7iQGkFi6FbrC2x7kERdZUqJ7KgJD",
  "key25": "g1shbu6eKyHcbuJPfJPLk4gZL4PaGjQ6vw1umavMziNJQ2fMNg7TEJU7AAeyXKSgbvh1V9cixtM3dkt7ovVunZB",
  "key26": "23tvLpSDgQpNBRkmgq2sVcBrNooMvPdMtEp5n7wfKMYzbJuHEwToWi9rD6g3YVUNTmnoKGNXwzfUvDqrdeTnuQM4",
  "key27": "5jzwCRLjtJLCtD16hmFw9ivNfhZ5Ponjg2JiszrpWYGmYxGnP9cjKjjndBb9bR8fHhSULr7ti2DPqV8PWpScg95S",
  "key28": "4DP1MpZjhfr3VcdWeNtjvVdKQkvMsinURY48Bwt3u1vbsKuh77J5UJsAFoQTcPDRWjJYH3xX83t7YaFyMc9erq9x",
  "key29": "4hEMmZUopSJ7RqX23t6xXCG7KsLquAmZEGSq9xt5ooHz5oF4SXk9izSvzhWhCHjeHgUgAtpW1hWJn2g5YXPWZVmB",
  "key30": "4Gw8j518Q5VDRucTqxXPU78UtfBwjMCiRH77AXSgqinuuLhFpCRhmr6972jvSTKTkbMxinRTEx4u93LzztyMjp7a",
  "key31": "28BaXASohysdfmKd961LuKmXDYWo2zDuAfaqqq1onCtRoPExWudqFPYcFeu82xWtub8aLw8trwJ338XAybkSnnw9",
  "key32": "4pPgsSHHnDJrhhqnQHzzoe3uor2vk5Hh6kc6seAAcRzxPVYbuKd6Mw3dibjacJX54sa9n864Qjzfcg3fFE22V7WJ",
  "key33": "3EXKLqYLHBUMNV8TwFAFG5BNNNYX9qpU8auSoBnfzWPVAC9tg4J4HMTT2Wud2FhpQY41tXSN3gUC6qxxwDkTJ6WL"
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
