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
    "4RjKb4CqzhPJvxTdcrC8HwtNQbpiKfaQ52KaHUfRcJqaMKu4PG5EXDKWdUPXDC4jeLAqs9o7mnMAiYYgctzBKpCb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WQxMqfbQNLaniNnePU8acdKiPQAnp6dsETQFeCNBjoBsoqtVmfMwV1Rh31TBGangKezPCALYPJE7iuy5y7CDdGL",
  "key1": "3hmuAXJ8L9PgSB2vtRVkdVnn4dPXRGr48ncaNDo8i1y3cagYzsNp7j7i7TUFW8StWsHUva622KaUjJsN8GeHAHQb",
  "key2": "zH88XdQuVqfxGF5dPZuRTAG4BnGj6xd9SkksWnAb1jWXLKcxXxLqLbZ8rFiLKxTQD9rxnuWJjBiRuaZRKwVXbfn",
  "key3": "2njcXvNuUhF6hPw7G1H5kRbKcfrGdffRT1yBZxftJtHkrBgkeg2f813xy2qEsfY9nmdgBaTm3Gf1uo6fmShx7SYH",
  "key4": "5yeeZ8sbb7DQenA38MEhsUbHqcnAzVEg7w3D7Dkd1zW18cvUL5qV2ihRc1T2xZSoGuA4zCPYf36jrafKWrTx5hcb",
  "key5": "56oCCgwa5wvhCQ8UHyniKu9ehodaj23mGjft6keVzoNbdZLLdEp185XbNYxBq3dJJfuytdaBveF68ohkBPFUeDo5",
  "key6": "5VhcqofGP4f8SdTgCsDYMcTCfWQNmDFRcdBLbd3b3mX6jyFso43EK8msY4vdsPU1o3M4TuWWWNA18T3czGaoMMNt",
  "key7": "NRuqsvVadBwyGjGnPtNWxMoV3hgtkd1JQk5NVEMjwheQmDf1oipcu5DrpqAKsEiPV2bf6T4jy9rw51vbAJYdSaa",
  "key8": "5mKceSzuj6beNLRDKN8AGWekffH5vhLioAyTJ1aReWEwcr22EFrzXN8m42bD59jMmnr35by5V1a3SQP8VvrC6Uec",
  "key9": "MHELziZPqLt8mKFFLqnzuSPDnvgaGWymHWjxpLkrWf7KesNXfX7WW34D49gQEkx5aUKJ3vaewAB6nMwm2uKecgP",
  "key10": "nEa2Xv3nJMqouoBcY2XUae8G3editT7UUPEJ4iZKuNmHgD95wy2QdwBVYPLCRbSotaXzrwvvmgwyytdpaqyKf3e",
  "key11": "22FgHcTMyeg4BR3egFz3qwJSxmHHYcCoDsyPB1JWkDb4o5AxfqN5pymFSdfzgXkTFm6V1uEZjKvuYQrvNQ4b4FN4",
  "key12": "57xegbrUDECcQnxc4QFdegwHrZCQxMQaD4i4ddJrzdK3sRdnxgUr8VAZaCv4ZqtiS7Wi732z8HY5PpQQcr7auays",
  "key13": "2yw7BQBXho7jQbKEFz5K9WCyW38sFQqq3dNv1YxXYzd6HAo81LpVfpxYE4E8wAj9Xvs6meMh39qtNvpmjpJ8hStt",
  "key14": "3Ri68pJmKwt8bpTRp4izQphwBT6eN9VLn4o3V5tNSUGY5sY7fAwarqUXtb4ubhw9aovXsCXKP6dg9k9bRXaZsdMv",
  "key15": "EupMr4DRtcapzAHodZSmZ91xL2gD4Q2bVfyVksA4CuobwStnJM7nxvTELzQY3jZSJ6rxsm7jGChcrMHNQTZvfnC",
  "key16": "Yuo8YUhdEJWvLn7D1ige7y2BM3RXxc6vk8gRXF99FhCXnreXiUVQVitYC1ZUj8WN9GiU65Sh147XjoN4Jh45mcq",
  "key17": "5vW61hCJUHoL7uE6QRM91BxqAXN6oQAZXCq6Eut5M4Bi9VUmAsuHjQXk8GgcQzMTFvo7LgtqmRcpkv311zKQ9E9g",
  "key18": "3YfJEmsLbrPnjE2ZHhvUCMHAivjWDCq57PHYsPKigU9jDksmG4xKiELgP8znpvNJhmnBNwY5aFp758pg17kTXCZn",
  "key19": "2M7j6DqYSaUUG6mM5qYuxrWZgRBsF7qDf4JYb48wDnaXnJ5ZSQSZ4NdWU4rKbzoMPzCD199PN4NBK5dQVBbouSeh",
  "key20": "28mTX5ZemzcCmHTfABnxGCfNkyvTB51cS6VXeGbgcwqunyshjNsmbvv7ThFQdZa1KqYoFit9F5SwSgvJd4XsE9uu",
  "key21": "5shQDhZ4D1HZLZyPUwi96YQMKyk9McJ9BYSGLXu33shLsQLrEXSQKeUCfZ1j33KtqmNcteYa7pEQeE6DEPr9NXcU",
  "key22": "4o66TFwGa3ujosK1Y3eQWtpWm36wfHKSpSM36KTUaG6EBWXYjgUNDP96xRt3ot1WQb6EqaFWKqRxzWmss1hw1C3r",
  "key23": "4NfkZUPKVa9w4tu5BwWMY99MKHx76ekKr5DdnGRtUCvU35TVTvfn1oe2aS2H83nFnvuDZnspn9YocAwZUns6RJYk",
  "key24": "5tS1nYcVTXaAoUibEbHYVaeohvKgMaKHRmGSqSkmGbyarxVkveqe56epWYj66CJNUAfSkZcoqYvQmF6yPGLJmHsM",
  "key25": "5wv8Bos3cVwdq7bnjjKLvweAEtqtFwmC2aUoWGgwgxtTmifc74vAa9xsPWeRbhoYmMz4M9kYyb99sozrAgXxb3ts",
  "key26": "4f4nFzNYv5EdhcCkanqe9fnCme47SDxMnQbXK4PXuR9gWHZK72Sx4LmDCV5e4Qe2J1NFyYCCRJog67u9mptk1KYq",
  "key27": "7we7xB2hwjQpdnqWHgX6dnYMiLDFzSqJAApwu6Nw7YhJg3Usw2CCnAexrpHfNjoUjfMnkfTwZ39gYVHFvVB6UHp"
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
