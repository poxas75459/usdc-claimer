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
    "3VqU4xQKdaRUGWc9vCi9d93fBkewkoeXdoNzdKfNSvaAuPqxCoFRGg4NFAeL4AfQxpP7MXf4xZ5g1XaG3wxY7Cih"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xt994EjDyQbJUvoXdk2Rxm3x4yxJZxoWgfVRTJTFa3C5rTqySaYSSiSaARjLfHJwTiRAzMUyxN3acizK41GC7B2",
  "key1": "1m2PJKsDWqPEaqscZvHWm6GPobXoGyDoRoVqvN7x2ixYBx7xbWz761egKNUH32RbBTGK8ognetBGmwg1AhG6fkd",
  "key2": "kErRMEumQXiwWMaEndynN8TZkN9Lzmiieq1oKpDtsXJQczua9FoJSkBpQWsmDgsanfSSspY5EQKbbVXEYitZDca",
  "key3": "2HQpWXr8ek3pg1ePxgAc1oNohMF9iPHpNCyH51yoEFf98URPqZi14yTp25zUZNyrgyEgaMAJp2QwZnRwzF6wMJTh",
  "key4": "46qUvFkupeLomAuYjzXqZy5grZ7qicMLCeVdGPp498aLU1Rz9fTMxuCNJLJuH41Eu9DQrbuUdCqfQQSiU91WJKSW",
  "key5": "2tnkgHx2QxhQzP9157Dyvxsaar41Gr2XyGwSFQw9X3NF85Lo1EoXuztHSjFUHxGacKWVwDGfQjtRWotWHS1VLmMM",
  "key6": "NGb7vXJnSJZKcXCTSSd37bzQPiD7XRDGXyUsXUGPi2tzJ9MJ5YAFq66DM5V4ArrMrYPdvR5jZbAkf2eCmLYhMMe",
  "key7": "32mJTCZMme5awqg79nUdDhgPo9e5hfK7vAeciPaJZJXR8zwgrGjaVcXsCBfNy9XD2bUP11S4VDp6yoC2YxgmzPbH",
  "key8": "4Z2XuVRPDqBwNupNpaCVddcT1iey6nxQHdnk2rjaNqiGpAXmR3w7CrmMN6wWyXwSvDEmGKTt52HDrkc4MivBYa9f",
  "key9": "2zLcHWUNDXXNVe3zyrPkyJ8mVo9auYwCmZNFgfuS9Sr8zTBTAYV2eMqKvivH3aYdekHceR2r8CyvGWyM8w75MZQd",
  "key10": "4dzFAYU2f7YZtfRjKGfmrnHLeUGqYmfa1JtPJ6w7Q2BoCw7LiSdWtv5UDSLTaR9J8wxXBVmUrvPwnyqDu4cYMEjH",
  "key11": "5QxichLLH4PYwKWApYZkBRts1SbZero87moCSVBhrrvuwWPGmnwvPaqqBYSRLDdp6DbeXaTZD7adtGpuNQyzBGzU",
  "key12": "2VeUS4BZ9Jfvgtwv7SHfSraRCmT16KVhf1oEPGBk4SxmeqNorwhgjJdrGqh5qMFhoQqN1Eo9R3WH2wtysbNe5QUn",
  "key13": "643pNzXEXzPucxGhm1WULAt2UVgVUvrag5LtQpDmsMxg7hskrfAPSA1X9S6wPLDRJMYNwhoKWuXucREwqpEQVhNq",
  "key14": "5xuFEoYREy3b99cJHrAPimY5MuYvdTcHoRm7G1xuiEbJya95a7y9g11qDCUJWVuUHZVsk9NA7S5LFVFrirfCcN6f",
  "key15": "34hn3ZNPB8HFWYCCkQHvipwLK6D5dxUnJmq6ZqYx9cCxTiHwL3JtUfvn3S33pZbD217boYA2xWGurCy4HvY11Hie",
  "key16": "4XZT8eYwLNBAGnqAHT3DyrYRSa6P2XWQUA5fg3vBHZfD8Vig37Avfk3EY9v44RT5ui3iNCd1qw6rTnUuFPeCNviG",
  "key17": "5m1KUaYgiYogcme69B7G57WEGauuwVDPSsBdr4pBRgu7CptP9F6U8d4cHWBXMVPG7ZqBpx5MPSgtGrx8EeYr8XXJ",
  "key18": "4bAp5Y1TurWvRatnmZ3KDPVNVt6WYmFGb3ow1vACRYkQ7jMpLoRv95e4NKC2XFdaYwcJVRev8PLLno6saymMCV39",
  "key19": "ueZLyzxspMG7jqHTRtPLQzeSzeNqGy8wFYj7NvTedeLEMzRMmMT1JbNPjvY6RY3xXYmPseaSDMxW9EvJ5fvqtxm",
  "key20": "2VjPZUSKpyrxviucSouuvh3f5Uyf4f9JbVqTRWm5ZwstPXQp1ZDkcikBWyL5d4Ced62SE67WYsjCq6D8sSRj2hvX",
  "key21": "4arZ86QEFtcmHHPi9ti4AKt7UPnsbNitag9wjR8tdZx8mBTYqbAJzMuiysamWTWJvD7DRJrp2a2bgr3f7xiw4jnT",
  "key22": "538z7LjvFp3EGwuQindTcLT5qUNLX1DKirZWkXtGit6Z9ZxfBJ1MvsWLQFzhs3wYpAv7yLVKG88ExbqMf2Dit11v",
  "key23": "25vERUoomAxRkG2RgRMXj8HwJ9iZdqpPhBMeJNRWrt5iBTpW2hN4YfzqGqNjY5Pepfe1oLJ6R7mX4ZdpGJqm9mRc",
  "key24": "5AS1ndZGwgxWuZo8gxNPcEYmJcNx9RhhGyAjTGseHFeg3cE4U8Ty7UtRRq4hGnFcyDe5YUoLNn2v749YeMrzRgeU",
  "key25": "3ZnZskTNJ7DKAjqxnVmURg6J2u387daejZMZqpvGA4KvRK7bDBeZvu13KMPnJPNz9grNhpKbXL6gcUvKoHdf71vz",
  "key26": "3RwTEH6vpHWi5gNV38841bEdMg2g4nRAnMSw4iYbfPb2PnwhuuAXo28dunAhqbm9gWeSEgSS7LgshMnsaW5mA47W",
  "key27": "3PJ6ZDx3LdQRYpU5GrWthfHwAvDEAy9VHC7o9ufrYQTQutvpeY2NfkJeXuHeVHfKqzbeoozowMLVBXHwCt2sivni",
  "key28": "JCGnV2oxEJcAr1X96WjG1zvrYqgrWBhTEeFQwvAoetP3kqUhFityPyqTMGyztd3a4f5XjUDr8eKvvyJLSmEMys9",
  "key29": "4Jim1vTwsfVzdEwxwV4mNR9iHTSv9cQdNPrfJfzpyzzAGRLRZmKZn2ZKdxM9R2os9v3L6634upxGVxWSSuEPw2BQ",
  "key30": "1J4cx6cbD2wREU8Qc6XZUNEKyYLo8SxZMYYEzkasPfBMjSfUWGBdWo8tLgzk8LYa2ZXv4sg6Y4q2pEBKtZXgQH6",
  "key31": "3DBCQ8SH6Bvb7TpEvbH7u9JMYHomv8w2GsHGsQiaFkJVkq9BeDYJGkG9LsPMEjWt5HbDjbH6DHhwqbyBLAjsePZQ",
  "key32": "38PwgQgWFEN4XiBz2bqDbUxHa6pPwZSRkHDQdNn8ds699QuJYErandSkA6XHag161r5sXXoGeJqULWriC9PJqxxE",
  "key33": "5DkrTDa7kzofxH21HQGQvb7KFxznfR3pBxm17PBHjE1EmiWva93Xp6vdJcJcZzLbem4TRfqaSAaeyJWyqwi22azf",
  "key34": "5j7BiqB9HydZpxrPDSYRiUP2VQMdJ25TjBTbbNsqsgq7fxRBW2UeyaNFwqJT4v9t8ng3sNDarA8RpqJ2zJrMmcsH"
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
