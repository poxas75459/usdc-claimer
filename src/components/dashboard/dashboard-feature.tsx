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
    "35pNaZH5mU47zxvnzGiajWpPzhinNn7PVXUb67xFyDh7219va3yLobn5p2AsdvpRt5niMEQ7NiwcV2M4eENzaHmA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36A85jvkJuXG1URB22vsfMfdvqDeWZyE6jWuoBnxGa1xPtmzUUhoJNY1dJsnLaVy9qEMUDDVvTwo9YAhLHfeQnTk",
  "key1": "5DzeuoCqTthG1BhvvY3ABybymifNngqeD12neDxHZAvdM5DLrdLETXdJ45yGk94dhv6H4X5kaNxELLqkn1Gzw3Mk",
  "key2": "4Dvvyjnb9BZNHCWs6AyebqBBGeA8DDar5FMxqd8eNLNBWk4ETKLfdW6PVtS7YLnY23HyKZwugyZm1akdA4xvVb9Q",
  "key3": "2st92khSLknUAkhs8ed9A2ZgwEUQaK7rXqwdZ2eASakhwz8fUfzLiYPKKiCi1XqioMk4iS8yxvkYaw8ofUqcuZ8G",
  "key4": "8BceufxDcJhhYTqFcniuKkv5Hp3GaUMMV4iDxUb2Jj755ReTSNkQVvdZuB17PmfWJqtFGftcCpJs11RWb3mUVwE",
  "key5": "4UJqoDes5uz7Hy2h9LKm3ZJvgnfLTdjLoK2zBxwSj5QXyVTihPx7J6n3y3orpTQ9pvfrLWmy6b87fqGrQSp4e41J",
  "key6": "2JMfQE9fh3bB3HLSFgvuinEQCmvgCMMLa2diuKBqDffmD63XBSU98FB3XN83HfcTLD95AATjHoZTGF4YzzYbozQJ",
  "key7": "46gT38B2N3rBxZJ5WoUgUePCGZgDhrsXbJG9eAvsq41sxxpTqZXLtay9DM4cKwHsnJFUirninvcHUqfkzFWRPh4z",
  "key8": "5p4J9S2ZumwcQ7CYjALpQLS5Ujie3nnf4aHotLx8sYiVZ22814Y3UXXtaLW9NwxJG9HD2jP11iLJSgX3mozE7kmA",
  "key9": "3i1TBarXZHKDLB428jwBSHubEQ3sxmMzCcKNZUdJzG8nVVRumYn5gNe2KC9Wwzvrx9yMsoghrPV9wQvpqbiFGs56",
  "key10": "3wURoVsH3ZwYUgrL2uYs3ZyGgPzHxXB5dUBGpmaQxY9LrdSHXRV75NRFkKn879ApRTvrWcsMFgkttW9dumn4voFq",
  "key11": "33912hKhd6JpogDz5euyGvrmY4BReYSoaTpajKTg2ior3xiwwKbrfuWpr51tGQxsPqsKorEiwnj8jHbsvpHVRtza",
  "key12": "4ipceRnHw8H5Yv4wG8aYd73PpKjqRJtR7WSUod3bbZYQRn2yJGL2RaFnddNL6zUXSKBpcGdCfyDoXJiRjKBdg8ZP",
  "key13": "5phzhCrWB3JrNhGiVvneRN3ajRZyVVg2pJrtEgP9cinnJETqzLQbdUn2D9n9sBfc4Ahb4AJPrqrotHRRkGgWDE8z",
  "key14": "21iSDBtT8uUvujZWTnYDGWfNa8xhKpK1gsJSFcEkA5kVFA4NjRTBD6cZsdMzW37xTyxCvPovsSjZyRAqv7xgm6de",
  "key15": "5TNsGopSwYgKbx49YPJ76UXGXc2njx8kfJorUXkkrrfgeqienqen1HM28fWssHKYAFriuNzYj8oftXhy7WccLHeU",
  "key16": "5rNEjCm3UByiHTx3ZTxcsPmSbF8UJEyVDv6EXJzxNxL9APc922hPcGWZAE8ApycwDeWZqyc9fj4vzmAhSJcbJMbR",
  "key17": "5PvRcRSM9krRVP4TdoXx4TQS3HYSGcq7oSe7N69y7q36moMd63ChAQYVTKC9wS8AXYdoH5c9rh6KTQ1wTyCGzCnV",
  "key18": "4HvknuqTTQ9bUm7gRmqgkp3fyfrPysArEoQ1eCPahoe3CXApQSvJLX4kchW5T7mNE8fm54ZxQHJAAztTLxxtUWi1",
  "key19": "2ynE8zG7zUjnvsLbV9ujLbLAqMPzfUKvNLBqrCod8keDXmbPVuWreKxVn4RfgRdFEzkPYA1NZAnipvkzN2AUdqGn",
  "key20": "5AiwMtoexDkeVTZ1Bd5eLbAsP5bsHEVxLtYnppzc837WAotMMQHGa2qovUDdBkHqaZbPQCGuCgkM54YUAYs6t3GL",
  "key21": "2dWYjwjFD2FgSK7g15j8s3DKxRnmrAqvfAXAcMC8m785x66kZHH9VRCqjRmeZF3jEJi48LZZ3ZNN5isfjREKdh9o",
  "key22": "2iANPu1PLji7x7VGgn1pCEeXJnrVQrVxBZQ5ZJKo11TrA63t7NhZ1KLcBAsw1tY7ZDWEEh36ZCdtkL1B2wxsh7dJ",
  "key23": "3pD1EGFf6tzrZhVCeZAAA1VNTNB4jGGBbbmd8VNNDvkxA9XMwLte4xvwYKgJ1LJXa1jC8A8GFXNUcuY3TxJ3TQLm",
  "key24": "2JUsMBNFPnut1at37u1ckYFCz7kNi8GZQJyX9xSuyTiudQ5yv1Kk3bAb9ch6MQeYh5EGTK83FKrrUo6rU5QcY8n4",
  "key25": "3U6Vi4gzK9vrycHbjiSJ46PKXiWQx7pi5UJWV4X2LUajmABrvAwxnt7EhPfmjmswgoRmQSrM86YbUA1w4xxZrHnQ",
  "key26": "2v6H8tnnLJfooBfo8qPhN7M3zXFFWQurj5gUQosaWTxEN6tHm4QdcBCeGFfmyugMFXREnEpsUwZde2e5Q8tkiEcC",
  "key27": "3q96Hqx5viKcy6AAyHh4wA9cnjS7VduvkV1dJh35xKnzh37ybW1n4dBJ6AYG5zggRtEJ5gdeHYsQRNQrmYwxcQz8",
  "key28": "3THrs9pgZgpeczysccnyxzzviMnE9G47SGnGrr3ewcyniyeSG5EbPKDnnXAHQe56DnTBF1u2LrKuxWbj5u6iapXu",
  "key29": "3BeCCFu3av6TK9kwzh6GxrVgTofG6m3xXJhuJ4dHhPqbj538CJX7Cg92AKn663aV3hU6kPVKCKME2dqQdxK7hbJX",
  "key30": "4vFzpc6w9raAn8svJqjo9Ui6bZcyKgK416LPaiG7joEmJU8bSsq33PZZ65CcHn2kKodPuWtfySpzbgcWjz2dTspA",
  "key31": "5MsMD2aBbZY6a1phj8EY5C6H3YXJV4SRxbq43uW6NhbEcLzRF4LXCjzCtuR2mQ3MmMdCyM4bmkfT5qyesVS948wr",
  "key32": "54kpFovJB6qtPyVGTpd5enBoLozMr1HwZQ4DNMbMy42V1y9Rvd7P3Pg1SWUHiF68ZRjqZvuwoJATJrNP2v1jXkWQ",
  "key33": "p51ymrkbh1duEgGc3nGMKYwbFT6n9sg66ddbYWqwFsJvzgWN8z9YdZFY6qtkHsXG2JxRvScashqz8hVPdaaNLg6",
  "key34": "4FygfQzkMoFWXzjwFEEf8Hg8H5eCXCkPZyLdbJjujwV2c339MLT4o7TrqBRg7Eu5X5uKi4vjr2kVJ3xhaQ132qY6"
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
