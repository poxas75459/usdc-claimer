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
    "5DqPBFboKPsQvXCuEYg4zcZJM31nW8d5oqCNdWxmaUBNRqVuMwhDvbXXuMwjj4UTJZQicR9mgmTrAgbK7XjDvk4Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ztg25UEw52QCvBza6RyCJht4NAhnAdR2bLr9Uwrbhfma9G4DbhpXfvgCMbGd7WuUvXWU1vzoN9xN3VSePKPtzzu",
  "key1": "2VhMraDbpNjgsfRgdmNLnXRTcdwmFoxB7FdTSdcRaDo4aGEmkpEwKX9mNxe4v1z6CnrLXtsBRXnTjGedTAhPnJ5u",
  "key2": "27fB2LCKgpcVtBS8gijynuuJ1P2oPYkvfor48LPsb8eu2kakEbkHcWCUmRbpACd2spbE37zSapEtx9DGaNCMaAfH",
  "key3": "25a4BsLXrRyErnvzJpJMC2BE9QDP2jQWqmcqWmzktg2uAvJrB8nNRGt25KNHvdAkBPdmL2fVwdiYLHCeS4jLDVPs",
  "key4": "5XDLRoBdhjehr9PTAn6C74ur8L4bhzR9Bbbs9NG75Xqi6BaU9ng5PunnUApg7K5AUkoiigh22tx8UZqJcjQp21t4",
  "key5": "tpEWeP7ybG1yBv995m9DTfAxfS227zzEmabABj9ZAateG342sRdDFhYD9NjCgb5uifmAcwWoTpmno5Lg6unEay4",
  "key6": "mwUPdKAQuQ9m7Rs9yGa916JUiggeH3aaA6aek3oC7BFLcrWfpXgXU2kHfjJtTop6w9Gc3ESDzBwgnZ2oBLuLdgU",
  "key7": "52YU3hSLeAGBA3xtqsvWKvbgMKWwHzJ9fGPYUAquaZhV4rLauAgzohUgkRyQxg2rXLAvxx95tb8GhWNShotDgZMc",
  "key8": "XC5HgusCNrtqyQHBQSTHV4dJKxcNvUfEhfpgserm3ExqY9iCRiuqeJSvqRyUiTGSfBYWun1kbXLjH4C3aPvBAoF",
  "key9": "62LpuxYsJUPVYN3iVN2zDX8VAtpWFQCdydfC3mo3jMr1PUV6hxd3U17PEfhtkdSpuYiXTZxXFmXeT3zJ3Hr6Ne5b",
  "key10": "4pgkmqdSzbUQBZHVekiGEgzo1gd9wvhGY3d7S1tVbug7dHj17gDkerSHzLVoGyX9XrNDu6un8DJuvTvfcB8S7rWP",
  "key11": "fNoRt6CK7R9RoEdhSCX2EDP7e2zmucUyZ4HX8jK4LX7FY61UW3CEt7zUCwRk7fPc5Ut5eU3NpRiLiebc9ZTXMhV",
  "key12": "5AcMTEFyBFqoMoA6wppGqHX5SMngLYWzJusUCC4XAuYXSDtPtoo7bM5GRi7zVcE1HyCZmhmSdKNmMrDFQw4a45Ao",
  "key13": "3oCFgGa7vAa3z8dK214Lx8F8Ywp8uZj6sRkoy4q9APycSrrmgdSKPjLpbojm3HBAk95PnF9mkgF5mE96KD4bNPBq",
  "key14": "5BPCEvd36JDnhGyCnSGX3yvdyk8cMcN2thJrSjpZw1nof2u7r9Mosde9zUDu3WXoUAHfXFntE4fmUV8GeNZXVk4P",
  "key15": "4DXBiXEh8VhunsFkWprNjidUbNuq44znvXe2ANt4bYRy591MLQfr4Zppsa8eDeYpYr1RoXySPwenqy42ziKBMuyk",
  "key16": "5pV1tqhaDwUPfztHVdEufMpzz5hKpjhj9VNZ2sJgCbHP5ej3PwQSUuRfHwpS4X94vpJ7z5Tp6PJMcvMtbKLEJANt",
  "key17": "4HDrQ2T4LDooe5n6eQAEnoo4N7yPT4cifMEpAnJTsLuo6cRSPSJFcyfx4wX4Ss2e49PFB2g5EWFczkGs7SHw9wqz",
  "key18": "6wM9b1cUKPDNJPMFFVJSRpW6qHdbEQdPEx6mYKYRzdXLWRVVFRAFbUZse2VSbfXiUGxNCSyD6sHwJNqLXD6ho3B",
  "key19": "65RSxkg6rs45udziPVEr4ShKk8GZ8VFdvM6zRdVJNyk67wnGv2aispDKY17onffBAj7zjhe6yq2VFyfbg9Ra8fGQ",
  "key20": "64idE6jkenBxjfqH5Wm8eS7kVzaqkwettJqhTAydXwaW79476nvP3gyKu7QsBRn1zC3yebm6KPePvdjByjmtNa1v",
  "key21": "5CmR9TpfYk9p7V1AHep4B1qy1wnDEFuz2Te6nUFZD84GQS1nKGyar3bkMgrg6rF6g2NZo9y2aYuEhiXxzHUPJZq2",
  "key22": "2BMA4Tjgje2EsmJrm6M5JCogXsXPdapwdqY7HKpATQNGeeP4DJ6PAeHchjcwmhMNA7eyVrGqWhjbYKSomdxs7UuP",
  "key23": "5r195HuvBMDLiVqWbngZc7fVz5FY4i8BxURx8ZyE3ZH716JsTmzNiZ8bdYXTa1EdwWUccCoofGuZCyhear69N6hr",
  "key24": "5oiFwfsX3tSpHJzV7XEoJGmXmz4DoaqykfbUq7ddJvJPQeinBc4akJmcs9YqpyuXJtdeE1SPZwDGeSAsWJ6F7j82"
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
