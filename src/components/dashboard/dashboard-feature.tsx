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
    "5X8qZhFHmq6pK6ArFSKMDZwNpCx6isf4rEgtFvMbbAunTdv4BGVfPJB5hSbM9Cm9nbbL13ocTZrT66GMUhgoVWG7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3w3minCeFpkQ3QyNdeGrEvihvN59CDgpNBrpEwLEykFP9EwT7729LhLbutNLB3fqeQ2qc9ydL87iukgJ1CpbMayd",
  "key1": "27LvJW2DfPqcepKgzHUtjzTP8bZiBX6Pfn3krMWYRayNNSgVfqBosSxZvDCkuT8ddXE7KknDoUvd3gGPgDpoSwv3",
  "key2": "2qSWwZZYpTLW1K2YxoTUJkCsUP4Rc7ofGoswf9agaUz6Y29qmQmyUz8TRcosH8KgSocucHDBE8fzNLDh9zUw3NWg",
  "key3": "dzfiYPQ7ncEdutgC1M3SMHkXrQj658Kp3X3ce32eHZpYMGDEdzzAzGGnwgWXphSnJ2hMg6RrGvGGqQpJjoNxjqc",
  "key4": "aUEX4vy8dX1sLa3a23vH7tgHCL3cUoqHhFQr9G59aSrU5sPkrdYu9UDbBpRBuRVY1ebc9d8WKehxqeiwJHdnrKd",
  "key5": "3LrRgmfPGjhRzQQy3LgJrSjmb81vwmsiF5yNr3aB6uurVKHqstDYWbcV9pPdXSR1Y2UD4D5nqw49LHbp7J18xfr1",
  "key6": "2M162fKgWi9vjAcPV71GhhgtburkwhHGLuUhcEW8k5xteoPtuc5Jdg2ayNdbhs66NuCgz1Ntyccoe1QvuERT28iY",
  "key7": "29Gee4sV7jvvyRxEjQ1AHirU5M47fCiX56rogiePGZUYhg5q2knHWjkyufyie36Vu61VKadofUggk5LAYFEy47pF",
  "key8": "5PZTYNuj2acwygvXLLdgaRUMs3k5jFagaEt8CZrPe5Q54EQytsDSgjtr4WxnMZorkvzRKhpG2kCHZWhp3HGVshWk",
  "key9": "2znG4TRjwvBq8NoFpWHuajcnCKkCZpouJQQqv8LA2DFmWBEKoq11RmG31Ajq5hruLYmEAmKMepD4gWEyuVYGpuQb",
  "key10": "2rqzd5mzVs8e7tmnozueTLs5G2iLtDfJd5gAoe2RCPgtKjgUVVUWe7BdNKxUe4op2A1BzMdUKJHecG32HUcQBkjy",
  "key11": "5RhCRQ6f91X1kgQ3oxovauYR2WiLebDL3S7sUBRBSQNYM3xaJg4xq6s5BA6VmaHCBnfbUqbk15nmNsjYxjwhM6Nz",
  "key12": "2FYXXLDPdKvdP85kKN9rpbUYXSpWkbSUBVbpCLDEJ1k5ANZrs9KpR71AdFDfKXy4tcFGpfh32gM56WYW8zy79c9y",
  "key13": "4h8wjqyYrzjt9xBdrnAJqkoh7LkXTrXcYXNpPL5NRjyRAsrL8oxcCkTkhCrSoi8FfH6UyZaSGaFD3kUEHyPSHcsA",
  "key14": "4XqgfiKPsBeK28aij4qcsvttKTwicYqU7g59c46D9DqHA2PAy1QLaiZtdTPbF5Rgwy56ouoXMQiRnPZzQDoAX1LK",
  "key15": "2nQoY4JnoyZq1W2fJMyZNEVzmb7s9hawU7DsS3VHLWXXn8kjzhufriTvycTWpdoK2mvY67euyBLi76hBMYLPDQQf",
  "key16": "2SvMrbryb9th4wz7dorcVWJhbA4tKiXjnaYbTwXvba3vry8pf7grpqWuKz3KU6J53EaSFYgER9MKKjSec43Va2oi",
  "key17": "QkZ9J3kmAcFhSsjZtsU5YjsbsLBy1c3QyLYrMRuDWAFkXHtHqrF4cCBUFKWTrW6mCiXVpMpPGn9Udj1VKvB5XpA",
  "key18": "MdzCQ7dr4RkvGgn7yDHSEWzv7ftGQaymLiPWQSC8Wst6j3hh2MNq1qMGgX4eB8s5K2x2GKxf5NeMyxFqDLN3Rzw",
  "key19": "2iLz2j89uqjkZLGkn3cVRqtfMn3LiXouAhmG3zaJudFupHtkRNNzXRtVE7iMWPkSktgqNdpY3NLrqNdS9kjnDpNZ",
  "key20": "2Wmy4QEGukJ5jeXEew4j4rFGuCeVv5ythPrhKUCFh8tfXiGh5WX2ra3zJZReA5da74wxpuMLD94QRZ3R33uQpEu3",
  "key21": "416pDw5f2keW9quLUXzJXDkRgk6NZuNDGEZT4qrqJhScRzVyHSzS7LKNuHFRgXxR9KQ1YYaDFycgkzBUE8mqtxg2",
  "key22": "Bj4FUbnPuGWNXgW8DQw4wWtrVpiqZhsfeJZrRvFxFJXGUkppcrTwGvFXTRy4oJsMUt3ZtTm2MbvQE1RMWu1RMAx",
  "key23": "DVi6HksaM6Vf4D5eTVxcHw3cTGK13qgNS6LtSwR15VVPUorK52aCrBn2uxwrV8Ee1uzuzmJ5pApZd2VwREk8Zr6",
  "key24": "5yqd2Qoq54qXT3UxZRKugM1xCGw1V6jVzAePsGPEsnppxQcYNHkZQkbAf3GT2V4EAbYfuae6w13PVhqoB2vqaah6",
  "key25": "bPR3MwSbWpEcFEapt5zxXmjgH4oDCSCszCxh6LLh79Ggu2He1A4XXvTwwjMxyGtFaF1GMEcdj9xDvKcaWeVTxPH",
  "key26": "5v4JLsbxhH7tuEQgBCYgereRVobFBNrNYrLoXTxhSVCGzKAWYP7DNqRbSrFtV4siZQSgq29hMfr9uLh1yGEAi7hy",
  "key27": "3iWFHLc4kfXC37QyNwFaXrmGrnSTwJx4Tqfj2axtRyJ5yfnN73qfWnnASciNMcWL3h6ih54cYSenpfEcXF7majeB",
  "key28": "2NjuUhKRG2JaSiXJmDJF9nyCd3YV34DQi6VXZ73zuJBGefW3RK3t6mudUQxANLrzhoVvjG1Va4oqo2BETwenyB8o"
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
