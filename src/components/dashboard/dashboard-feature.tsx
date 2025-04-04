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
    "2Xbg6Rxa6fmtQvsu2ZQVXweAUakNJG5zgNNzy9N6gJrkemiCuB9njSeQTNivbZix4HoBzfT6y32MKq5tXjsM9z3n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FH3FgjJny8YTAwykTnhvJGfHfvDPUpF5BgJ5CoQ4cvAqiaaWKJgxg8fiuJ1NGjbo4Si1JDMFrUvGURUcdLXqCjS",
  "key1": "4RhvcVUKomfxBUkuJ3xz7TauXfpKzYu9VoLqG46ZxHX5p5Ye5pvDyzCC9hfagWEnxJH1jJRvSk5dXvpjgGP2mrgQ",
  "key2": "LMdCPRsM6Vgj8QgYcCL4XYzbZvpawi5Y8yLEFYi1BpzrYqBfq7Lb81YX9E8XksYbWQoo1sAqUQ7zieVAw6SrD5D",
  "key3": "3XXw7fKhmbFFEECRnLKhzVWrJodmStaC45pU4RphVNChD69wDY24L9g8pEk9UCdngUU5rXQpgXQKB78qKTnj6AgK",
  "key4": "3V4jay14wqVpb7zZSGGu1mucn6dFe7aR6wwVEkUn2BBxYPGa6sCKB2ihKDkgLn1pSxHpdG55mAndb8q5ZUrfwCHa",
  "key5": "3PCZb15XRhD5o19XRbRmMVsxD5ZTWn9auhnxBm4oFEfoUyMTtEzbu4U5R3YWwbKHGCs5imMpXowssV9J4N5bzCm8",
  "key6": "4YrjuGeFmNKW7N4ouQnc3PCWRYp9yMZnDd29WX5TGMoGugVCfd7UTHvd4iaUMAqSQHjgNwmJK9LphwWFwhA9nZ3F",
  "key7": "45o9dCf55DJf7cx1YoeanAPyDFRe7w7SS3K5zdjScYYj1KFi8DaJaKvfVkyKaNKvaDLCavxtrDYEJBboqWJuCL87",
  "key8": "2kc8F6Ew6WvzkNCSVY6pJL1UEKweogsnExWvpEkyi3hKBWX9fyN76wqjG6pyDCzwkxzEQecpFq1ubQX3vAMU9Egm",
  "key9": "33RUUca5UV9U3LeRJnmYQwcwNpp1mNBSKaz81cHXRY5w3bYHzEhsRamy33WJa4f7DyjjBkaC2jxUYZd3BJSRdAFc",
  "key10": "4eM5izoJwb545QYHv8SFbxTTANnTG1yBfyyXo8LoqhWeQfMLkATgcR9ixnYNqx697fNfRvpJCuPrbVsScRME35D5",
  "key11": "4bYb6r3E5a7S4jdDN6G5aSrcGCcNU72Wq9zwS3ghb2CUkVvhxsj82Pvr6J64mE7uVD2oheJ5uPh78umkSoihKqJH",
  "key12": "5n5mfYjEBMKewKdbtw96v9iwRQQCzbtjZjXrK7Hn7FELwGM3kinFHmn6ocD2BtSqiBegMxVXeJT3KjLrBRxgZ1Hd",
  "key13": "46AuzRFN5TPMZAsmLaMZXvhcHrHSzYoUxCHweqGHbfdf1N8BTkUT5WUQwekzsCbWx7bP7sByVhzvRrRUYJCwrhYk",
  "key14": "2KgZET33W2i43pfPAcAjSFgWN5dNbxv5DmQJi7kWicZnHn17DZquAmJDRQvQNCu88DheZkHaZLX49hnXnvz2yQ9",
  "key15": "3VE3X2DZCBz6256EDzqap3aTDgR71kB4n5cgU4VCkyZrz8nrKcXKvhDLqCQeHnybgbS6N49YDRkdVPej1h97CFV3",
  "key16": "5159sGmmSgJZjAL2EPybPX9A1NiyFf6bwZEw8CaamnnquBxm5qnzU1zVJvg2yWH1zQQjRNe8Ecjb7JDVLywogfxd",
  "key17": "4MojicEos66BsmPG65ccvn6TR4MU865KSfXk7wMv2u3n8kTRPqsNbSfgLk7EkiUG7NLNXrJmBjx5zPubuX6jvaou",
  "key18": "4WFh5M7yh5kznvfnBodzhUXVc86jKnn1Jz8XNbfpuZb5jBg12XE7snCy1KtiQCuh9PDW65pkzhubXuujPafN9naS",
  "key19": "iXcxJ5YThBthti2Sb59hTp2uTLnkX58ngMhX3gCotunXEME57bs6BfSLfUfWSvj4PfQhQRwpfmKcyq98LxipFv8",
  "key20": "2mMX1sgdv114fug3qsabwqoXhhWufG5mLNYNyYWt3pZThu5gtBvKzkBZ5gHdrKcBf7Xe7Pd9rMoUzcUFjknJ6NYN",
  "key21": "QPta6CF21RYmUf6U9bvkUBjqi5inPBbJxcGbSpNwqeEuPU7zg9fz5WUZuUa9SqXQJXpYKs2F3WQQuvUSr19U34M",
  "key22": "5QmWJYvsdbiUQAQnfbU95ekWERFsCbUUpDJBcJh37edMJvb6aJ3Ep1wWaT7Dbk7jV9QocZnCZEr5jf9vUTfYVq6Z",
  "key23": "67VcAVqrY2PyeUJqfVgAQ4kXrRJKHNgSarXPf4dYQLmiHat5f8LuACeq9YgzVZv5e4kPorkLau7Xg243jqKX3MF9",
  "key24": "9rRmxscMT6PdNjypape96wUJ8pbk3wveDcxdS2TPkzfKDe9Aomu7hBYto3Djggq6oC67ryEa8AVQmcVNvd8msoU",
  "key25": "2z7xrNK2Xrm2agxzFyynYLNnoMdHhrvdx7yeE1iGoatZHS8L6PPuPnm8U7B2X79Xaykyr8VRkeWgya1wxZxFtkKE",
  "key26": "N9G3hLNqrzwSPnRovzCqkG1Gb9g7pWKDZ4KsaNdCiwt8y5UiaGLVuVguHn6UPDzMjcGv2vhtksmqfWngK4t54xk",
  "key27": "5WoapPPtQ8fTRWCbKoEXYL3vp9X2vrQs9JyiEw47xeJuQ6D2E6FXQr5xp2WZMuH4hBUDfwTUpkk6y1ay4KhUadEi",
  "key28": "ZtwgogySB1jT4T1uz5vUy2NsQM3rDjqU29J8yCUQKjdcE3KdggVyqWKudg8ka9NJUhaQKsbPh4cjKyWwY2ZNUf7",
  "key29": "36eCXTdpgdDkvcgAtvNr3YVFpHkcx8neRv5zJpus9uaTGYehxKKxaiYfGfy1k2EjL5sDaGkHEj4PkagX4kBNM3DR"
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
