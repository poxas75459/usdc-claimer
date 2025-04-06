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
    "VbGQYPE9G8dCuN5dmsi2XYWvHXhSNUhDgWy2EHUBVc1BCyFeQAePekEutxLLcLdcvELJJpZ4yyJwTSWudmC9sXq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CWDn1GRfA2qQLx3sEN5EfiHJzDkzCMy1aKkDt6Kow9XSMvLMkcmY5ZHaFVc6qpYxhEDiy1LeyozirbHF2sBnVeD",
  "key1": "2XUYpFqGeMUiZ4kfcXjE1Vbpr8v3C6insW5sNVs6QeQjk1tEA3UTQ8Wd3PUHxU1ZgQ988L8BAP3iqyTDJNZaUAz",
  "key2": "4otv51DDGst3XNpmeVA9uZrPT4oySoQ1e89TqPuiTX5HxtWiQdGcBwi4wX85sZPXPEYaByxYrjVdAFLVNtYgCf9F",
  "key3": "2NZM2ENLK2bmDj3ibVP6BWAgp6VyUA3NaFyMZpQHZRv6wRCMTkG2LmnvSwkUD4nVAXXe6ZuemxH9e4qYSjeTUN83",
  "key4": "4UdwqxYZje3Q3x2zZSJagS7GtUm5F9WpEytJimb2S3VTnTEesmMqfcFiMftT5t1A65Gs13M5MzqwSkkyRb3LpieA",
  "key5": "2kRyU2HvYLQqQQ19Fk21igvg9DCfTGBozA3qgzH2vmYag35aXKGeXEa6rCSiQ7y8VyGXtSFdhGa9z2qqhXdJoEff",
  "key6": "2fUfPuZFMiwNGR5RLnqmNxbmTQbbzRdZwt2FDfqhpByW8VegZx4ne4oUfzyim5SH2yY2PvCeEFviQLhwnAv2uKhw",
  "key7": "VdkU6DUrGw84H5pzRiRALqJ15jAsR6YDdYuArGFgLe2BxtbWPGoREiTMfAoUz9d6FMSGe6umPy4yj8D1T68GW5c",
  "key8": "qxitJGMf5WDv51rFicZY1t5rq2kjdssjaPhpaambhkDm2kTrwvpuqEFGogLqsrUdL29H7pUPS1CMzqjcVLRA6E3",
  "key9": "YSXKmxJVeX62aHfbpVDPAEjc5v2FpDDFPgzyvN7QGh2nNPUGi4KZoAQ5CvWYdExstWEZuoHPsAXETEJxmZnV7SX",
  "key10": "4PDAn2sULn9afvXRuSyCAd8UFQk9sMbNWVFcegXKnSz27Kz3ij2dU62G687yUQnm1YSFxy4absVnvmWKKCxzmzgT",
  "key11": "3hmiM8G8ZMrneuPvNoe7FQeXpLVnMV9QDSwbsLouAHUM8J7qLPzdJZXcwjx7841si1ZkeP8bGRyxRUQtxfLiij9u",
  "key12": "393RhBwH9FPJz4DC5EsG9HFLUtb1skvbmexFhJr9KbSt6oGyjfkECGYosAm1dCrxDN49yDXThQLQkFgvFzzfoerk",
  "key13": "4kJF3V4X9ZePfxmk8dA1ifrDYtjWWvL9e2u7aXDEM4RPmewf7eFMoxE1L9YMp9o38PnUKojN9oi9jM9GgqVVeWkH",
  "key14": "5j6YPutPJtV38P4CefCYppJpiX4sxXbUpcMAz9sVbCQxMyDLgJQdrTt8ePJdyXjYL4pU7HY5rJ3wsquAJ3Xchx5g",
  "key15": "3AvZscgyJHhxf69zi6hDj6s9bWdBbYKYmd8KRxeJpnSLBsEadKtmLPW16ZqF1DWF97a3PcZYAtXnDqkYKrHzhK8H",
  "key16": "64SPbYaCoe6MKoKgVRvLZn7YNbbTgXByWW2AQaswHeNS4z9AV7U75y2PRQcZhcpa45TZzooo5GCKzFFSDwXUs7nK",
  "key17": "5rsWUwGJwuSKR8bBNCbrgAxUs7AskX2zkgGWVLbaQMZMaVRvD52HuaPLPp7cmftihc99jHHmGB6sDjMMVzVyKocA",
  "key18": "Ke4Yu1YxQ6pcbwN8Y3dE2xYkptGAgfpxvg3hcNDefA8iEv3ZFicDUrqQU2dj2i7yWnjjoubLsrqCcPxk5vtobPb",
  "key19": "3w92akQMVtaHK9C3LufVK4LsPJ5GSoZF1e2gNbLWFawkdjHjLYHvANgyCeXeXsFe2qohMMmcXCbrF416AGwbQBhP",
  "key20": "5n7rPqHpJpNhx2ZVLWz5HiVQ5PZKcddkJmW9HD6yEmCVQsAHdNvirtrAs61SixE4dUgQ36PoeCwmufwiMxjXQuxH",
  "key21": "1SdRz3o1fKbvnKZk68hCtRK2zhpnkdpNBAKuyS1UxCfUvP3HqFpkK1qEGSF4G1EGh1sok7zfGTTcgnA9UdZb85b",
  "key22": "49TGyQwE7LDGXohpRvdUv8ianPjwFYNPbbKSUX9DvREvHw2mc8x13XhDBcp6WWtmGBZ4nqqp9am6SXgC3vMsRmhR",
  "key23": "5uWGG3bHXFVwVD4WVMBuNQ7V5xJdH5RHFcLuJQ2P5QmKKXcbycTDPHp7CXXEbyj4gf3wQgzSiaAL3zVCDWUxkQm4",
  "key24": "3vEg3c5ZF11ZFN7EKKTZmKXhSPo1Lbb1qhTsSwXtAFyN6aVy4VvpSouxU3F4BFhcVzMKxdu1mgn7iL8MWrJfERvA",
  "key25": "3ivbvD3yasGFUACqa7uVcFka9YcXdt3JhxzUcnxVdKBcJ1qHFhCFSryrRCWtWjUomKL6xHHUqLJJkuDmFs2nMSrj",
  "key26": "5H2bHAaQHAnahYDYXsQ8QYMehKQynipaqJVQxguT6LdyzgJEQzuzizGNBKZMaRMSFns8fGKjYXj954uDHLmzT92A",
  "key27": "X4Y6zxAB9NM6JDZeEgFJRN7dfD8R2LYYSjTyG89Yx95FCqKuGeUiL3AbKDPBw4DWL3pQcCyvxiRx8y7YEH5bJJQ"
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
