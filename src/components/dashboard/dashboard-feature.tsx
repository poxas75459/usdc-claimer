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
    "21WQwF8qyDeQTxAaPNuJt5YoNhFWkkLqfMPMuvJcTGpgudp6q88zdXazfB9qvrZBuACMMSt5KTnDBd4tqvtXnydP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rMupUQ2DvvjNjGNcaoJgy6AkEcKGva4wp79vXtan9nRwhAVM3bW7ZgjzaoAxxwTWL7b5Epd2behKXxwwx6AXd8L",
  "key1": "5iUjyntfhYpYSbMwoSgfSxMc2uUtmMXqS42odV45bgxgKrwputLUgztBnkweuqHKGwmPFYQd3EferuouqK7kTKS7",
  "key2": "65pfxZGvxrGo6Y2qXXeiczS7vLnzKBJFXz6p9kX33nKCtRQv4VDUVUL3ASPLEVab2kUnLoHGTKLcNo2qBn2evb8j",
  "key3": "5KpXa2BacjEzHsuD8K6qAVhFGApnCjs7jcS9MJgEFWjTpryREDTswE4S25oBfSScnzUzkSEp5xJzHdmUtC2ZS8Dh",
  "key4": "3mbSbQXUitvtk5vqhtHMwCFqsY3A6j9iVtk9cQG5zhtTLT22vAK38h5dJJ2bjJeUbD1mHwvVvwpjttz9E1irMaNk",
  "key5": "3WezDCFBkZ6SdHtG9TZxJyJV3CZaKyF4gCcRmxJmY8efwqnUmzp33GUKRkgffmR47kYoyTreknWnexBXLYiytvb2",
  "key6": "5WjSBrwEQYP8tcGYPvVjoCbsBdJYeFVXqhMEDaJ97yx5owdm553iHFDx2L5b7qmkKuc5RLtbCN6NovDjydGYYXrV",
  "key7": "2s3E9HZ8C3cA23PEAHCgTpBvoY1HyxPaJ3RyMrRcYQAmVgSRpzd2xASKsYgDXEP5VXBj4dzx1XBsXQ3226Cfidyj",
  "key8": "3Z2jRFvBLSPK12xHGz6e44QVZK1RfjvPJZRBDEC7PXrNGcpAuNXA5sNjKCdF8b9c5Xta7Yx97kxfSTAoJajyEQfJ",
  "key9": "5K5pAzK43YrM1Ev7ZjyUFDRntKvMGcHAxfXF7DNS7RRnZAn7e2PbvSqHZjxFa1ndfFh7NFKiBMjohi2QycK8ArtC",
  "key10": "66XtXdWS5PBnKFNN6BGUg8VF5xrmW5TswbgMMAKbxbgCDN46m465XDvh9Nvru39836ju3mVhNhsZyy7vMwR57xEX",
  "key11": "271k3RH67hHRZb1rgSEXCabAMx2aEX1TtUXhuWfo3Vw9A4sKv6A5BAj56RQhWQq21uxQYWzPnTo7sJ4BS4aYXoBt",
  "key12": "4tFtAe1iaoE9LaCgbeiXFwzFztaTsW5wcTcxRh3mw3kUbMaQsRS3wzbVk8Lp9qvPRCXqM3QE1Noq4mWWyyc3nUws",
  "key13": "5PbGFwtbMXtWWhUCxcbpR3tV7MchrQyFSBoF6VY8fZrwcyGaVABGfa7qkWSguwbW6eDQark4Pe6C9QwW2gTp5FvD",
  "key14": "2TKDB4zb532Gw4iChtGzW1bt7KAhQCAfcD1G7f77G8AWRcgJtnXC1pz56LMob4BBdj9N4eB5zsJoPdXaC9fPD88j",
  "key15": "63LTpAsFDLenAhSMqBzyUWuyqHaapmkdvmUtwa7kWgxZL5voQ9z5XpuSGYWfPca7yPM1DAurK9JbmyCLucgKypBa",
  "key16": "zrGTdPMfeSg199hTN4CAefTkdhdziXQGc2Vio9MGnFBrQSx4fD48PCVFAvxb12oUXSRJHHH1MP6FEZuV1gGRKDM",
  "key17": "2E7a1EUn6FSNQ53Ra9vKUFwyw2zwvkrnS5ZFATvisjHryL9pcDJrsURTrA8GJAYopubuiznwxQ5NTXfM7R4iwSHa",
  "key18": "5etafcEY3oPhKrihNyCKFHa892oyFTUyxFFSt8W3c6ZzQkZcEV9TqF1GNRGhBdtTGqPhc7PUcx5yaSSZ5MTpy5KB",
  "key19": "3H6sEkkxyD6fq3sWMJWPiYngBPouQkCwGXaiE7Hu1tnYzZY1J3WFKL499EGcqWJK3fBmXSmyVP97twBtQ1Qwr28v",
  "key20": "3qBBUbM3D1imrKjsjXqCZM19jrAVtvzSXNhgCoimJ1Twisut2MyNXva4D7Y4AU9QX3qr1efL9836jpF8odKrQRp3",
  "key21": "5a25vsm6dBYdcJ3GwrzEKpP4jmUtot6hrAtWTmub7eMajeGQrR1HqFw5xLjxKJxFCeW3SZ6m4uRu7RMdQynP28NX",
  "key22": "47exBYvPJy2LMQBLowUDEFn9LCp6KxqWVyVNCvha3MhLHV9Am81owsnwXnLhDxnBJjgez1d8No6QPJA591tBPHEF",
  "key23": "zntiZfJfLxSpK68wST7aXRnKh3jmFsHdo6WJrDzQPq82EKznS4hsKCJURL8B9rtKMk5qSc6MGEsNeBws3nXt6De",
  "key24": "3teD699BQ27igXZU1r5DiaApSkbaL3pfBqesVoD5zjwpoFmfgico414n1y3BmoWFkX3Cvd2UWyCXC5yvXZmACDSR",
  "key25": "5L4PkPZbKjYP9GYkvtiUfS19fsssqssnULUKq3JEyhCuvK1UeeTSfmDeh3VQdWs8UrPTrQcSJkdi8WscCfznWfRH",
  "key26": "57W2XTYGipEr4vbiLKpZPcneTDQ6k9qK4ztw1iqcgLZqBQh8c3nPbUZoqhfqnrFAaeUyxhTms6494KXcfQhjjXE7",
  "key27": "5pDFGyNLtHt3ANgqznjET4RzxvhXkWDJsTXsJCF5PUe27nHqyyZcw5V8fDm2x442YSmAFsm7b3VzrmdVHJvko7c2",
  "key28": "5MAiUdXNuYftAEzw7616mTW4JRtb5u1wpQe1M3a21x336EqWae57EKM5VXWVg38sPGKnUqEDDpZ3NARnjDjuh6Gy",
  "key29": "5bS3RV1CxQhB68bzeLJ9LJRjML88yTWYrTfQhLDt8GZqsaxVERyyB4Y6wk7mZgcjPM3CHhd7S2gm4QpeRKtRWi4o",
  "key30": "mpi5nsXP661W3Yop4gAHLbzKCxAVoMb6d4XSisgDef2a9etKyVB6oZGs3Sm5W6MmoLYq6BNDzdc8ienzHcvfd7W",
  "key31": "4UDGyQ8ZQbVpBFVSeFG2fVvNJDgXWofcsztUGBGgFWGNomukoiNm81APpt4URjJyUfMFBBP2eWnJhN5YfqBdUKv9",
  "key32": "D1by3mP8XDXchAgMA3LFw6qc93taCBYMQo4cFroVxKxrRJvcFhwWGueCVxDbPCnJtMrQshbTec1eVND71yXvWz5",
  "key33": "4agtFqkX3jP4V1BcXk9vwzEVvZ9XKUACy8y2KUuKZ5wbU5JvyQJxp5KT7vCzPUvLpP4wUz16NMqDHCzohpC91aen"
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
