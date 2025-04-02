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
    "GRkAFwfRFDVv7uGUM695aRbrikq5q9ERzUbRjsF3nbbMY435f9RWWkLP2STWB4FWkPucMkSXhqcUteHELXuDRDA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zLCjbkvG1U4MqWRwxQb4NeZzkztLyVXMfxEMFTFk8quJQSdK1s3s9iRwCC2AxeHS1pBCsVqBcRwhpSZvoiaEuhS",
  "key1": "B5qCL9rfc9Mk6GTTn2z1vHCCv3swZkjpqd7N5b9GfD7tnBC7PYGeotLvW1ab43bExxPgPFGahcAjEkS4fcPF688",
  "key2": "3zxar8jtM411sb9p77tCHTqUGoFCf2uaGb6wsrfVoXz6VEVywWm3CymBTpxMPw2KqRMFNaoo5ivhYTUTKgoobdob",
  "key3": "4b4PDNuPWfjAF5kgSd3VLXZ1rMUy12RZuNK4yaKJL7VU2VDskh519R2Eyw7Njfm8e97ZTL7dUNzRngktxXvZKPWj",
  "key4": "43b3qTuD5YzBjDM3ezv3WxeGSdN4mXcDvzA6kBBPabLm8ceQkyHSg3zCaREKyFbD6pDzhBsxjbFVmmEsc6Cjb7AF",
  "key5": "2P1b2HfaCMWzxub5iYj6bxPdEoP8a7exNFYoASrvMdYpBXFMX7eyzrgYm45jQyWveno18npxfXB6Ee6j1bEWrDwT",
  "key6": "4pC5xV9f8J8CsNkypbAmZyh7GS65znSChGpnzqBkUv7PXXJ3RQT1JPBRWVGpr96fCbQJXAk4DqpHsVABGv9rTYgS",
  "key7": "5iqVD5cHLYQCuEpcNs7wxUZYnPNk58vnyzyXZzGhGLDFBVLekpkopz8KeSGSH6zx95rr8MJKBE5U9rkm2RzF5tFR",
  "key8": "4MHKZD8cqJuuV36udN54iNPzh3KW4wzTDfpz2rBZaqEa9BRVtamUvctAAy5VXBc6CHKXfiZ5MzFdD2i6ErwwEjht",
  "key9": "4YAqqs83XkZJneL9x1n4atjPvyGmsma1UYvXLm1AFqdTsMUsoMjjbx7vXcH4X6FBWWST4vLZ5LmhPdYgnqZMQCdD",
  "key10": "5HwyBHwzEdYe7bBZSFC4y23uhxzEayCaGmajg1GPpwia61PAYhUXCQGByCHvHrpjz9L5xh3kKjDyZ5XFW2V4tymj",
  "key11": "YsavNmKRy1UjNzLmwqLYoWcs62kUC34BmAkzdXBDzYqja8d3Xz7SnUhhb58VZWLzmMFsPSVjGVTtAVFW6a7oWZg",
  "key12": "uhz5t7JTkjH7FcVqg7Z1g6HxjzxassNHCdoefLM3MRfQy9CmV97jh745pcGjMZaLZYXA3qNLqDEvQGoB2UPnybZ",
  "key13": "21ygGsFLD5AnijcBWMXcytSDP5GzpCqNPiW2H8em4h55UD4eaGnvSWe9sSgesbg5KzuyHNjbmZmPWMRwmhSwjNei",
  "key14": "25vUnGGQMokkVTLeUn7k3GYVQgBbMfqPFKLwi6BQacDEP1LNA1n2DXLofuSs66fdCwGX6pTmniF6VogUjef5tzFW",
  "key15": "3dcPyfJD1zqbebnquWqsDBX1cMCwaVL2yN335ahr3iCmZvviQaoEmo1H5qHYLaYCsfn5R6VdGjqes8rP6QgSTk2y",
  "key16": "3KXS75FYcB76eTsUc1cf8zR8QtSJq1CpQg4i6AZPjS2RGHrBchuFi73VhmFJLE5xuMQHqcru59Cdpsngf9UZhjrt",
  "key17": "5SBzqjhVrzVKQneczBHKz9HiyvoNXcGra9hEEsiiFpYRcrr4sbwJtewsoNF18tJD7hvTsgbnx7ygpc1Ur3r6LqAy",
  "key18": "4sXHQSXRAT3SJFRwyR8N9s9RBRno2GADSnkC4TJfhugZ19NN6muQPaBvWVWPqH3jAKszQQJofMUrY3FJW7zahyF2",
  "key19": "32SoECPhwXiB8w3p6AcpuHtafdp31JLTx8CB4bRj26HUSNFu9QbiFVVvmdPQynbgfX1t7N6e21pu3APyo2iSrRWX",
  "key20": "Pu6YorG6GdpkmpAgzweWArL7zc39wyq7Gjz3XENpmm2g2yaXPdWDxYCX1TQTQJ39414Q6Nq13838Ux5mSdJRKrf",
  "key21": "3A4hXAeG9SLmrfXYwuUaKA6ugJG3NqfrJF43P9dzdCGheiS53APdVY1msowkWypRptRDKH7QLarvSB2dQ5mQcha3",
  "key22": "2D2jVeLXuuUwXFGyDq8oagSnTfTKx8chDMxdcKqYMwFR6Ghi1a9rYxWGWhV21RjGYT9anBWZhdam7oCCjaeEwZbz",
  "key23": "5Tu3ug4cjT3mct3vh135C195btDbL6UB36GwXPcHgcQ24D3jCELzXw7je1VnarDKogzaMLMGmW3Gz721Je8pUt7o",
  "key24": "wCusd4JuTrGR3aMnHw5kjQ2yMJ1KM3awhTjL1j7gGu5Fg64wUPoRzKPf69cWbPzzVTefKMDQ1oeszfkPBTHyUDH",
  "key25": "9sBBXqDScP2LNbfwURmNcHAY7zKqmCKvQF3TL1wjFB3Fx7ZPzcQ5BRMEVPrshnJojKaFTokqVMyeZhGiBd7QNBN",
  "key26": "59oxg98DUuoK4wYER6niHjpYAEnghDYEFCQxWf43W2v42adE1mF3MtHQZ7tLvSfkH8RfRF7ekvDEvYdPq4ttnWws"
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
