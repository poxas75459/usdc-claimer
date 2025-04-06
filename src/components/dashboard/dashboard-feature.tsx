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
    "2pPGg5zmBFqB31NTodna7rsgpFaKvuhz2WhTKXx8YUcrrdWhwTFgV4JnjdYmJiR66jSGfYs5SpgW2Gfy8YqdnXqz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tvSHWWoQbqGoTBpbNHfJBZX1M1c6bpGTWpFKWsxM79TD8QLezAezdiE2FXwSoHv4ZPAZQgZ9LHVKU4yBT6R1vpT",
  "key1": "3dTtKE2GdPbGo67TscBqANLY8Jj9BPLAKDmTZqWJJcobNhhN5R3KG8cQHsa7C6PznvvWgj34XQm6TgZYBBdyUirs",
  "key2": "2ZCWd6pK2o8ujQGwLANQMocq6cUbUexbCQWev7y6Zb1H4i7WdwjSnFhMEU9ZTEx45AdSTdHiaxJuZEVYw3AYR6Mq",
  "key3": "5eKhQHmZCvnmGsxjhQ7rEp4yQBr4UqK8HVwMA5X9sSyKEvckPkVj5cvSucUsaDbbHPYJufddXTBPPgj5Hn38m9tj",
  "key4": "3bQR1hC8YiXr9DRGZQ3pyBDjT11XAHhx1wXhbLwxUg7VW1uNg4tAngxiuide5tCUBaCBe92jAaimxG4DNqPbUKa8",
  "key5": "2ig5BeangMsyyFtHRuuqCVhP3FgG1wheyqmFG7nEXKWzdA7QienBNk566yYxYh9XAnVvSFivzXwCJUuSHZoiA1kX",
  "key6": "Fx79DFz3hqNF8Rg1cmmXD7Hw56tCKwuUein6TFSuia5T4kGEePvYxNrKwX6T4ksRnBpLmeqb5TdapnYwuxAJjci",
  "key7": "52cfz4Xou1sQGtGzMWrtXE3GZUVUeWwQKtwZv7jwERWSDYEe8Be7HTqDAUk3fZcfmSSZ7xHHCHoSXji69MEm8UJ7",
  "key8": "bcwVZcXw5NiTkHmJkG192Vvnnb4Y9q6B7PE126YxGYGifGhCWFG9ZWE5j644F7hJDjfFgixEh88NcYfSo6zAAxN",
  "key9": "37Ax3ARFCaMzpWbrmYhmuZ6AbSna4YmxMoq85FbX6AKom7XL9H1xo4vL7FmTgeNSgEYaPuu5wGsBdXsFuYPamFAt",
  "key10": "2VEs3Z4ErUMcaxNxn26XYeBdimGxWiT2vQr4MpgawCxdeGM2t7SZcSco6WnrF3rMwkguxPntwWtU2csyGfawnZbH",
  "key11": "2Ys4xuUY21xqVSai5s96dJ3uuknjWzihphfBGpyVyTuo6GDgGa4GwBwAJvDtotitNqY8cRt2VJS6cSVwVpWhGR1y",
  "key12": "4uM45NnQphPVFpKeNoc2J3JN4W6pTy8XRFNfF5gik4eGGbjW2Kqt3CFLPiMCcpbGiMvQ5S3yJ8n11C3AuDz3ZGCV",
  "key13": "3GXi7PJso7zN2mnXxSxYQg458bZwumeqo5rfQb3bk2r83aMBte1T7y8gx1zHk7G32SNdjhifpfmAJeiCNbkT22fV",
  "key14": "5P8gWuheKF4D1Jzj34W8Gc6bu1c76SqcB2vmPQXQ1Gg5pXyxS9bTKzNB1VfDDnBzg8Dw1oXzhDkEXr7ubVPeNVHy",
  "key15": "5unx5BBtzJadbo3tb5JcoreMX44BRzNTrCXfy2Ppys7DhmPNoxLVREwb5jMfJ6EmupEKW92mTFJQ6z3BWnKECqTX",
  "key16": "4pxbvvVFcWGqk7ZtB6hU4AufQ12CVZvkK7a4TS6z22tc7eFsX1vndzBr54QN8hapg9aigsT9H3MkwzBtoYU5veUQ",
  "key17": "2ptXPBvoV1AMHJ2YqjcYdYEKc8p7hA6NXVJB2yG8Tk1zw1jiGgSs7XhLWQbpMTWkc1UVsemLvj1HAzZVchx5e9aV",
  "key18": "2pY4sgYSgULWtaJyKnowAfBUhVAGYFNH6mpENWeWaxJ2h9RJFraXKZhDpeNrUyAZRdg8sXd2bou4mrKQvghr6eiu",
  "key19": "2BjSvVGTatLK17iNzsmVmiGPKpu99Y9wnWbrwB3kLK6sZJnrVigF9DP3WrC4bHRzd9k5PMis81ip3F1TBJiXGADF",
  "key20": "HWBc7PXYZDfd4nJsvuFs8Vdx7JxqFrgUKCfHGJGdRzDheE1zgLSvtdigM8DtYcK3j1u65aAybwYCL4egiTbMFRz",
  "key21": "63XJdhQ7YqANYKYtS5NHoGn9QfuAh8VQtLQZERXRapZyquSP48zoj3P64AUn6mAHGEx35Ryhf8j8iJT7Fn1aqj4c",
  "key22": "26YvMdNvikvDoof38t5zcby6LdSPAAJw1QiMtR5c8bbyCaXR47vUyjfi4EgTafBnFhH2ECyBNRvUFCBaAMCNT64r",
  "key23": "2GV7jjP2JYT3xDyV5iuZ28KzXdMNgHcyV5bYSx1ZvUQBorK6JD8aGpf2NPZXSHx7iTf9UedAqaqXw4KbgRx2tCZv",
  "key24": "32x3ChkJVdK5tB75uDeyt3tXxiGJiYwQvyzhN3RMEgV3VwvuEsGqYgmWknWGKbMr1ndM2if1igc7J8UtrNgE95nh",
  "key25": "3FhK9uVAWHmX1RSynM4dUKXbvm6WETU123H4cJkjJePC1L6bfwrMRNQXWnYRzwp7RTwQa9dRxNd91PLJqNXaZ8Eq",
  "key26": "5eW31nXNZvrJ7XgCVUQpYzdeuAizwubuGwQhDcxVSmAECbPGNbJer766Mec1RQRE5W4i1rJEXHJnT3nMhf51tHNv"
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
