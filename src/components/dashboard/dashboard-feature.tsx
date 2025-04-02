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
    "2NRV2srUaboumpsr1yKaGaJgGbLT2ddjxb2FWPcAv657SY4chMmCxUvjW7wWghmfxLbbydPNSUdGhd2mwPibZ7yN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4C6peNqD7SiQ3Pd74NuDwmjWBCuRK7nRqQcUkqEbougudbhZ8jqQjfVgyzeTdmjppkBxBre61xfr9qNKE6ZSCB3v",
  "key1": "25Ms1dfmRkAWz9Fv8Yj9jYonPs45Dkg7ERyPUd7S7WJccZuLLXtaojHwXwFjdK8P1jbLXLUh74wn1k89Tu6L2Dt3",
  "key2": "vG5aMmGX4e2uYsbPYhAmF7C2U8LH1UAKzwjs8i2d2snd1k5FPhFjKwhCG13DhYNjGwGRxPQKXsKNProQvymHDk4",
  "key3": "gjXNBdL2HdRJS4vXTUWyBsvqmgL45t7KWkWD81S3cccpi422AefyJHR7p8Kj578yhw4bEdXQUNPgsvPhgLFGCMC",
  "key4": "5izqRo88fibjSiV4om6CiRoCTReoW3DugKUjwstuxPSN7SvAy4dRRpChxi4ZkLhz2b12DH5qL2ZR5TFv6VVKFSgQ",
  "key5": "5gFh4EHjLBwvfELnbDbs2kpYH2CeygNWkPdxdWuXRjCVyrXRcqcJRHzidn7JzVrWNAAr5HnfvhLSws29KhiLx8rX",
  "key6": "5H5grhHvvawKer1GGQ3iFoRzhS86SFTB399y95ZzSTjEiXazQj994Rg4p3kiEtedB1zoBWmGTcZmLfzNrCLWmb9q",
  "key7": "5Zm5UfwDYwuGYozypTFvbKj1ib8WH1ysGwNkkpvWnGxzLVAjWvoAzMPp9KNBJXxy4L8yg2GVqTrGAS2NkfHbVdTB",
  "key8": "27nYx1sjemSsVb6YHEypRLREFVCMistz4joLSoTQ3kF9xFJTtZQ1wcjJV7F8ykktEzhpAS3AC3NC1F6NXGT7bMwF",
  "key9": "3TfcHFDQFevezrAvWsDqnSv4XN37hawJyuc3fCb6iBWL3UeR3HUpNcBmpbVXKC56iujzoYGkrev8V9oiRKjevHyv",
  "key10": "34Lzs16sAKGjnzs5P8TZCggmwz8FXNdh6iBD3XMi19PRdNncmmkgvqzEjGCPy6tFC2XfK9fLU5NdaUS6ET7axXtU",
  "key11": "8ugTANM9gWyYrp4YfDKaG9Bj3oMNtAd7BdbqjzAiUyLZkJkQBpRkZbAjYuFqNAxcLLSJtGJxXaap3umwxGYdRPm",
  "key12": "5LuS2i2EfsrnHD57iXdyQ3kxmKs1jfip4VEhpNTWMJJn38UkMkPqLD7qXeBEfjskV8RHopgYeW86kTsNKgud6T48",
  "key13": "oGzCrwTxnZNqP3VsWQvJHiHNbWLRF4yqXUUUNm1yfwVamo5jWLbZU7wNzQiVF1qg6PGWrhzNfK6Cd41X8cbbuek",
  "key14": "35u9acTzVwCgoWPKT9ixtdnm2zn8CBuChqCkkvq1YgG41MUnRkB1YbCSA8VGyWHgLV3d5fVmAHa54h8CkvbaogPu",
  "key15": "4dQUCWkM5x2eP1wWupSTku8yuAQSPdPyFyLvviPiPQRxLbWEC9KBFQT6EgfbZXeQSWkzF8w94oYhL8k7io9FRotZ",
  "key16": "3vWbpRinbqHnPxLky4eEZDVhvqzpR2Q3A2jA2rQJYZSdb6JcNfUEm4EeKTMG8i5M3pEYuYLM1bM2FZM6apZLPJcj",
  "key17": "4jv3fmWJy5f1f9AEbSrEXui3WD4a6RQPjVuyiHoedkGRtxQXodoBN8fKvRUpprSA3ksXDfYW4b4XfPGrABeQpf9v",
  "key18": "55UMGqX8LJ9PFyhb8eqn3qTBDemeRU8oAWKycm89RZUrukkTkpt8sEYhxwdg2g4Q6wq23uHx4EB5DBwg5qvpSZum",
  "key19": "2aB7ze7wZ75vvmxv6fgCHynwY2zcdo5vuJx4wVsgpcjDFGpk5zjnPLTzBqYp2WjhRvKvt7irbhrKGcTpDPJk5ShJ",
  "key20": "BXJcLrHVFS5H1d4KUtLYpPfg2PatYnmcUjF3CWfeucRGrHoVbABr3cKYTNSCoNCfD4UsjgF3seAS2VgV99GXp6e",
  "key21": "2STuLRg6nx9eQgAXCzSUijzt8efurndqfzHDNLxU5XjbYcUf33TUcx5mfSQEVZLiDZe3SyzGw8ASRey3WiGiqFiw",
  "key22": "3LoxANp4bYeRRqz1m8Qc4JJssRHh8yR8NNzPb88ayh2MogEk1JfSpWXNKx7aw1MVj1DJVj3b4bUoDhtrLVu26yEQ",
  "key23": "3Hsnq4sN6SiwtbGrZAeG56wcYbHuPZF2esFdypBxnpQMkWJJohDd8hKf3L5JiBy948Vm3YmJ7srb4ifa2iKCtpy1",
  "key24": "31behffaPwRfboBZtNQt5M72SFL6pouxt47kZCz5DJmQgDb8LLuqvA74rfkZ5bKLrajbboZy5ftnveim2oGUBoeX",
  "key25": "3cKcqZArgNPY8qJyuRh1kXrvjKwgjzCAD8ww8RxT7vwEickRTqDEvv3cKSBAayXRNvQGwZctuZCXB3MnrewPJWiq"
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
