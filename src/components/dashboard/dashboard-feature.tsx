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
    "5xx6JHZQ8Euhw9ygpRR8Xb22Uu4mE3ZkkeYZjEnDy2h9Mv4JtPqma7wwz7pYukCNnGww1sUJB8WLvVRc2b3W1avZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JDWNMECZFXNfK22Ld3v3RjRWfLdZqNYoUbU52V4cRz2kbxQwmY1pLedNAahDiyTcYLjuzNFA37rosqhrdg9UZVB",
  "key1": "4wVZM4Q4uYTxkV3uhCFpJVi1EftVooCvTEYyBNkm7UatuhYkbpyHzb3SYY71vTF91DDJhCh1jAREkUBA2oyL4jFm",
  "key2": "4tkQytSAKfdB2XDnh7DcsxDmqdKAN93fvu57CzBawHNe7htaN2zYX61sY3PoL6feRZ9FqvGtPNZr795XyvJvxwbe",
  "key3": "2wU9aBfQrXReUjjHVuusTajVxg7nB424TXTmDudoSQx9pyKV7xThSfdb2Lxn9LAZVaSFqiXFkLj2M8HvL7NEcYMR",
  "key4": "5EwwRaSjW5RmzBS8uZTyL7ZGgqG9F6eRgQ4ni3n95VcGkjJt1oSjij3UmSjzt95dvSayuork3tND27KxUi2cwkDP",
  "key5": "mjSp78fkeDHzwib1GsVQLWnGZkHcTzgmQvo16JxfgUeMx4f63mYZGibFZShzNV6WDbNbAPL3uU4WPr5UJZjVHK7",
  "key6": "4fY7QEin4xmvf6knA9w3CC7vNMJbNvoN7QjX3nrJvYk3K3hcyGzNTvsEpWTuQaFJbSWsxQML3yxqNYa5TEnP8eJU",
  "key7": "4gzRboeahtHSPVqignXMeNawP5Tu3gk1Rm4ZoqtLW4f8YLhF1jNbBV5dagosSUByn3QKUQxB8QHKy353XVx4pudc",
  "key8": "4KerPuaiUwuCTYLK4n3mzqr5TC8m3qD15KpYUPiTTbswKd5DNUt6o5tCEEZMDiacwA6dGkbnh4CGT4pDjWDVexeT",
  "key9": "5rqqQQ932f4QfMjwf6CihcpMcCz3mvza3sh54DqHiHQKeKgrrEaKG2XtLpXdm1ShGfq5wzw3eENm8WPAywSLQNsT",
  "key10": "5haYusMGSLz5Dgr2YmHQuTcXwc6SQAFRYu4goumvTowyHdcypy64aeTVt4yLDC63QgMtGBeYRYyYoqtUuX2CUciw",
  "key11": "3DW3EUkJse4BgSRRvpS9f3Zn9WsDxvJ4j9cQkzt6fJ3KB15isiuMr6eSDozLmBJLHdCiZn1f35TzvBjBncCtoW4Z",
  "key12": "aFF2Y9Ua84RYJKbQbENzYvJVbpLTFYr7FMQBAWu4CbfUoyAJ9CvN6pMgnJdKnEgSnE9VehXibXHTQvVsMwMVo7u",
  "key13": "2WBBzuz3RfY41WyGwnrDMP3JB68Fhj1X5fkYs2PjaFQ51kHZRnfQ66d5eyB5G666v4sEvaBu8xcVJe9VX1FREBwW",
  "key14": "MB8xR3Aqq81fY6CHJCyvZt2urvwL7TNJqphGcdftReytp5MATQhwCmnb8TpdCuDov4hrMi8w6yQmZPcmDoPMBFF",
  "key15": "2qZZDutbyk84rpUjrKYf2L6RvHSkbM3kZXG31pN83ASpBqN6pN6o7hMUoonAmR91qArgK1YojpfMwa2rkeq7Toy7",
  "key16": "2D7KvkPdBSqJ5zqab4DFsphjEFatVs5YuT5QeMYQ9fQja1mnkph1XNLub3iRjGRGVZTbCu13yEwijitCUHFzENR3",
  "key17": "ynbzo4boDpuMo42yQfdgkYhhu3Q5o7zw3Gdfvvj2mobL2mZbbPMYsvQKmoy4RHa9FJW8G69CmxkFk8Nn34uc9t9",
  "key18": "4CKZjg6e6GCoh44MxNBbJM8WHxe7aq5j2YVEDno3ciE4gToXjG3PJQm8k1oBSPTHNXPX8W9v3GtrHvvKsQtMhuNk",
  "key19": "5eBn8j54Yz64qE6Z8xccU1Vr4VQQppCiNin63KsPREZeSqK95mhyrMs5cBNbTgCiKw4ZJ64YDUZZqkbUj56B6HHd",
  "key20": "4N6PggAWguGBEUTecKuDDwQ5sJt3L8QkMAoJLy2U5GwmmEUgCe5nadQeCiPmATbqqgRVUL4gYhXy7qt7ybBf8thK",
  "key21": "5G1fUHvA9Htn76aAXpsxoBw3tsry3J5UovKYQLd7SnXLs8zoghfC68aJcKzfPzBCUM7hYeRvLNZE5D2e4DB3mmhT",
  "key22": "BvJ89mzjujxxRAHnquu3hBvkSJY7H9mz7YN5mpgvkxqmd9JNXcP9V1o8E6GseFHCKKbuEPp3fpVxEJzYpYsTufD",
  "key23": "4wSgiwB5oLn78wvuHhXnQ89LWZi9boUEWE9V4yzkNuf6qAfB7PaKNG3DajGmL6dhVaCWCgYAHT1oqpTcBhBJ9WDu",
  "key24": "6e9DshHxkTz8ryHQPWmuw9wkqHXKd59vK2N5SvYQ6Vs1JXfy7719eYWxBFxdrJDWGcZW25FE13j4FGNy9r2FnuH",
  "key25": "4QhdSuL7MrcAZBv7k9GQ1uUt8Tu58GciupDYn97gsX5fJsz4pYCK29jEvFAP5WrurYHMXg1Ljbwxcg9aSfxtbCyi",
  "key26": "5RHRBAFL8mhQZDEUCog62mEFeDNhmqPaJmd3UT2GU5riu6MMuSzJC8eZhFzPRYLn4NrftDyyQQuGhS6wFn1tXPgg",
  "key27": "2Buxh2snTfttEQxqpFBxxn7w1FDt4ATNBahzbWWBSm24RKi77hYZx8KEeSoESb3ty8QWBhrRQsNWzAwNtUKQ54dZ",
  "key28": "4dCJFQFA7KWgYTuZCVzFzNZJtPVCN4NrzzmoaJdKKBw1qYHE3FhE5qZKppAydFka6N36XWLZvJ9tYYZdvdVvQUpo",
  "key29": "3N27KMvcFYv5cSPjgg5u6HdzKPhPUdfadEsE2RN3DFSTWuRyp9QbSRgTub8YvuinRQqTn9BAwn3fgWk4qtwL9wXk",
  "key30": "2mY1rFWv6MaoRi5M7UbRM9wFe1sYWKYP1SZEQCaopE3rgG2gj6a8nyKiupG5QDDWosLUJab7xYrSmqvsrAfvj57m",
  "key31": "8mffoEBJ5NDUMCNjhVAJn5f1ey8ZLJ6zNz8KGmnesr476x1p5XkiPwCpnvrnqYBFPgowDn6EBfvrs8AkAx315ZP",
  "key32": "2MoqxomGrgTsw5ni3pdM8akRSdsfNKM8srBsAmqxshLayZsQFWEWfhY7sddcpdSzX7qTeAePDRAw1pUDJXPFuHUj"
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
