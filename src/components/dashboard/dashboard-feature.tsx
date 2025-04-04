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
    "2LrXv2KjM2VtCV9bhXR2zu5PeQYh57LvuGBVUxZXN48Ya55NNmC3DRVzZHzFpFH7jHWHVsybm7fUvAT5xC9uaB37"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38iVtdYER8nXS3qVJYaRTpTNWcgJMqBAJGCgHZTEA3nKccxv6T8N15ujd1FXEzCNhKaQk3gjMku2WeDsZBy5GWNJ",
  "key1": "41HWES9Az8aHUug82LRwNhN4q9RyEybcecHvyyxAkJorEyJ9fVjdjYjrd4GFf27k3VQi7pZrE3EnVTLXfaVV5gEj",
  "key2": "4vk2VawsapM2PCnS1C9Hj4zkNEMbN2BjTCbB8THiisKkbMaMXq6DeZx86RbnLqUUGxoWuHEB4itkBivTmmSyozNu",
  "key3": "2A3Wrcii2su4AZb3WxVqYFWEhfS81nCXzPJqrHhes6SR9pprMowgy2faunYRGxGD96aoUpapKto2w9LPjHxczKkV",
  "key4": "4JmVbiCVNmzTqpkfSmx2HoPWsMyk2fbquH113uonMVFDHrmzpVaKCxEZtfPGNSRVbMnuj2e4dfbmGyka8umMjgtw",
  "key5": "39PHbj6CSfVZr6WFYGkXepum5HWaaSkzu5jYij7GoafnE3BQizVEQM7yQr5jweB9XW3BMdxicVT4HnRPCeCsDpwm",
  "key6": "3aJqY7jXcr8nKgKCyRu8bEFWWsdr1tLLT9DoQh37Nt1UxV3UVsTFDyw9TCS2A6qaFcd7GntA9KbHKWAduSWpdfXW",
  "key7": "54Xahq146iJqE7D759Q5zJD9igcNp9Ba64wFXvW6nXSRxBsR38x6BhnhtjXNjZsfXDeU3HXHTRugK7VRpxmDkgnc",
  "key8": "5gRBatuBZL3pgHPQq42igJhYNs7wbkAC2YcSeEijhb61zPCWmK6Qzkkx7rUbsttKUq4EHx2L7vZM6BuK5xsPFb9q",
  "key9": "3G3cAv6WpZbMPcTrWmU1qfCF7ZLkFK5wUnTrtCYnLQ7nZKAvj7gbuWZmkkSZ6KJfiskVNboRKgsUfx8H5JvXEM6w",
  "key10": "3SPJ7VVSXv6sVh96oac4YFbBNKKQWi2zwCSMe7jws4d81kkvX1tV3Cea4Xpsgk62b3ymU7tyPFJHveXPSVxHpd3R",
  "key11": "3VjmX1skuQ8PR7qijmxYx6cjP9qT26WAFswrW2HS83DU61WPzoDYCDQaGu9udPs1nZ1cc3c3QUTozLA1aarcxZZa",
  "key12": "535HRyvwH7MbXwj9K9DSG8738QrfEhmCrK3sMPLuck5HVcq47crmf3kGTUqUkdyfyQv5mfisrKMum2NKaX8ktfAF",
  "key13": "23kxwvk9TKCfLMg4HNLm2UvStmWsrbg8YLUaqNeNiA9LagH4pahrFBSF3z5AT2yN8vmi5shewUPL2Ue67Wuy1uLf",
  "key14": "4bcG4Gnui6Dfrd5w3km66bDDDyQms5Jx2qFaidU9BNVXGRVJBsofXGk3eYw9uzoqR6zET68RAyPfRXFYjjdeb8Vj",
  "key15": "34PRqczyPcua6hsd7V7Q2ad8bxSUTRnvcRvQD4aRzfKuTCmoWa9TsqneeuKUSESb9j3PXusJ79SVysj6HyRsbdBT",
  "key16": "5TzKYwC29sdQDEiXcFPWtTzRdX9kb5fUazCVn49FGFVjNy3C5ybkLiHBB11CqvSiJKHPNcpL93ECpzyNR4GiRmCG",
  "key17": "zJvR36zh1hAR6nxofrw1TUknd3PwhJNC2dpFGUCPRrvVaSk1G1zibxGJtHLz9YudP6DQGf7X2Lg9d5v1asVY5RU",
  "key18": "3mremhMB8HCoGGKX3Qd9a5vrujmUqzgJPNvqCh7QZXnMqb621Z9M3Mdvm8aZFLZpthyadyeEyXKxnsnG5d5GRbdh",
  "key19": "5xy4dAeqQ3jTtn2NhRgX3fFxAedhuA3zHbxbDHybeEHj3UeiDbnmMWnbCP4aGb4w82JnzVB2GCwRWAscXKVAi6nH",
  "key20": "fyMGDXNJjPJbYX5PAcRivY5XBcNK5jx2hPFim8gH8pkBEUQ1JrBTEUWSvfQxtjNKWZdHXZdUx7ZgiXT8dieA5bC",
  "key21": "4M9oeeR4K8DPiavS4mzopGUagi9VF1WCgp15ywdB7R2DAdvNBFeZ1cY4B7GJPBHFakWMRTswJpajBWDxGYRDf84M",
  "key22": "4DxNYwfm1fVMUQbY32y7RB1i3NibMMhkAw1yhu4kzz6a1MEDhxidBiRYhjaGGhJFvXhZtup1LuHPVA6ZTK9F6egC",
  "key23": "4ox6wNW2xj9EqqoTrtxjxwHoKNG6Q2gK4mdABzcFGzoRphMaJWCQHy3wM4WKki84cbvmFHu4tXTVoUp8xJj5cCme",
  "key24": "5Kn5f9reGrfuVTspiv6zjHvCAuiQ7nXyUxPfTia4HnbVouNJfboyrkYKDbyNZtEcMVsfm3NMS7viFJP3Zw5yeuMJ",
  "key25": "4PgQmMxbacokGig7tmWjsz1pEzGocT3bqFqEgBRHdc4e1g5ue57m15HLG4Uo74Cg3mXH36TaqCHVerNZUuKgEyNq",
  "key26": "iNDbo8hcrRmnBbAxS2yr6T9WPjaXswBWiPr5RXWqY7rpVrnryUdxbUk3yxpWnfvC8MRXb7S1Cydr396iCQprxj9",
  "key27": "5SDhAzJnrwmzGQEC8YUQzjY7m3sm7wtA8dQoHyPrzL7n4sZ7u35y9oTweWi5fNouuQkGobQsXgaAGeSMkotXqDc5",
  "key28": "44w3vt4FpuqRJED21PnwGbzTApKmFEwmw9oiBftAo9hscv2aXejyZnVz1FXSe52DGXMM6cgSZ4E881jWWiRGrEQM",
  "key29": "5FYR7MN7DdDfvA8UE9sWwceAnz3qE728AMiqoTCZuzuRz3sVU8wE7Q1HUtSVLsZD6ShmJ2j55qRtkToqoejDxzQc"
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
