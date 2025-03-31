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
    "2fdQM5BxPsRpfpBvi6iSafAHLpB6hAG7hbTM3T3CCeDKHHXCDfwoxXLNqfYfNjrGKb7DKbPeJs6tPiXSCRdeCTZD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5m9NYj2Wv6CiZxK2aeoLZGu8d8XRYVJh3FMH8sfLVhV4j2SFmDR4x8P5H3g7uF8wH9yRyWNhB4kNDY8sEVih4DxK",
  "key1": "3WR2kZoKwMj2MrL5iAkfaNVJ6WDwThh3q74EPny75roPGrPnAxttTjHhNct1prxe22tWYgEaoGFMfAePcb2NrRqw",
  "key2": "HEdz472gmJqcReGhMQA6Z9RgPMqqWRp1vSTHxaA6bLc4c9BsP1AEjUNQEWJhSQVUnMqFcRZhKuwzC9LEYq59cx1",
  "key3": "5xzJBDWedDc9SmXp37vEL62JFWB3k3aX8PyR73PcBrm8pEXXfniWcjzZfc732JXnEsDxMGFb4ktZXajLHqNPLXj7",
  "key4": "5dQV1az3Giqf4NY7UbeudWkhpMkRNrYmZ4K2oBkt87wKti4z5qhLRsxZihW5CFJbXukC8vBgNp85rg3dfifKnNdT",
  "key5": "2pc6y4wrAUgdmwAWaQv7xszRDy38xRDN2PHnQAPGuVHo2HPRdHPUe58CSGQHLjuyr5rheprH5RdVLwnUkoMBSXVf",
  "key6": "5nj93b5zyLYwGPgyU6vCH55YkjYkovxHoLMxSwMWsaHT4sRM2djR3ceZbVzEi3EZ2VhtCH6A2iZhZan24csiuHqY",
  "key7": "3WurbYtGtGqwgdvLmc8d8Wg6YnNJusq5zLARVaUHPCn67b3SmYv38MRGHVUDWS9Dtr1MSEVrJSHLijCmoRNRrJrt",
  "key8": "vhDDLu48LSs2qMd9GMFmLE7s3e714c1qaNTVBgGESvQKCsaKZyS9FbEAUZoCXCy7iT1qmxP42qvjU1TVciNqWA5",
  "key9": "47MndYGFk1Fi6M2RZ6wU4b4Npa1ohArEd2s4JEvwWk669QEiLQp4qY5LwrJCGQmrJypfBmPCzcnSDbzXPRU38XRZ",
  "key10": "3oazWoNohxfwkG77EoYKEB3ien6c5yi5GRhnP8geQGhQT4w2zfcc19APaxZ9gJVjnnMQkJPuLoUqRM2MTS6ED8db",
  "key11": "DuBSggbqj2cxJtu1siFMuRZqSpRcgT1FAsMdoAMkkuYh76b1NjBmCHKkQqtEWZrNdnfNCrJdSqpqax6fQzoKu7Y",
  "key12": "4YkeMP8qY736bNQTJhLhsdHuwDeF9STFfqVoFSLT5itE3QpxehnU2jvhAtSWz6qFmDUWf9wh1NF7H3pjS7AHyXy1",
  "key13": "2YzLQQhTJvRZH7qKfPTKBZj8rDwrQR3cn7cotSu4rvdusZwC4L8vUvZWFnBG5JxU9tsdpztHqRSnmtAGRMipQ8UN",
  "key14": "5JvpTYqgKVXzmNS6LyNk5sfRwe1qWVviE9kT3aanQdHfDHgY2nvkcRhtwzu3CMpEPrXnbvk7Bj5vn7Upq4qtMgx7",
  "key15": "5NVqb7DE3mGGPM1Zv8MFwMg8qpXiav1kxjqNDasyHGzxFrCSNU28ddHxANVMkBfC5Uy9figW7nY49dNbvX7UiN8h",
  "key16": "2CLm69E9xfr5XggaF6hBA7DRqUptEVWQK47Ehp4AbZBxWrS3mj8d6W9G5AEkg47fGqKN9i8C6tuDVdmRyZopdHcY",
  "key17": "2an1cYVM9KF1qnNwPawvHhSeJVH1PM7YV3V4tp4pL6FZ5spbC195obYyYiEkRqhRLrTbW3pp5JAuzqeYikf6Dxmp",
  "key18": "4DJqYMSzgJS6iG249Yd1qvP7quyipQvhF2aQw28d5kMjLYdeLQMWpjUy9gVDZ6noYaYrN8PNmEbZp5nZpEJfSSnJ",
  "key19": "3rmAaEW5hHyyA7QXQKJCe1JbtV55LZkdHVghGwszpBm3LtQsKh9g63QichrdHx76ayiRip2XYF31GLZtfX5auZYi",
  "key20": "5LmFozt5dSvhneRdFKHWnbSvfQk3RhqV812eDjNgksMrF5AmDqUs7Du9DjvPNLtJiZWwMAuPB3nSFeGq5R5ngKDP",
  "key21": "54tkSydykpzj5R7CdPTdzfReVrYajRiWAmVH3N3DjLacEaq1cB4hRPfmJhnFQ4vHaiQfeBktAobp3UECCskTrXMY",
  "key22": "3UFj4rpB31rwX2yJvcPaA3ARYatfWu4WQm2DDJHfCgJc93BQKqwSAhzeejgKoByKPhgwDPfqR6QShGhLtJqjm5kd",
  "key23": "5Gty85oH3iC1eQjCa6z7nCpPz8p36uPbABytfnsjEbA91HYp5LTYC5b3cXFvHTU8kFu17wKE6ZjB8n5Ck5wTYu4B",
  "key24": "3tysGpxmJS7SZ48xSrtDFJXcizTTfZLww6VWLnNkyTwqYWtJKHZkTTyWMhFhcjNsokM5Uo8H5WZppYDntPN6qxTj"
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
