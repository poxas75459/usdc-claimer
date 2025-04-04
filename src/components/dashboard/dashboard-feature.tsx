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
    "5G3ba6Zz1TXv5MF8Eo5Y67GU6ecuCuhCgnJ7pntfu2eTdWah3UXABURF7jvUeTX6GLWqKPYDBPELKmbD1vye7wf7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Qwfoxay34LgJMZWJqkPcVqAx4Go6fcLKqatT6HtzSebFJBbSVtuLffftEahTHQLsUubsv8wxeFeZgYq4dHiuKLd",
  "key1": "38XvV9C6VSLPVE6aXwqEzC5Jcg89GddgUjukQfAFY24JyWD9Sqx3BUH71i6NxLx9Dor8EDVoabjJVaSvwS8vbkum",
  "key2": "4RawVdgCpzQHxRUMryPGxXpAvWHjtrHB4ixW4YfRgbEx463Gv6Zv5yELsDXv5tHCQ9yhTK877D6fCwfCkFivgfy",
  "key3": "3zUt93Jae19xDzsNymHWDSzwy3vWEjvGMyjdb28Pou1E94D6kFvWCudMUFGchHPenWdvjrhn4xQTygVhWGAYPhLJ",
  "key4": "3nYmyR1MpbhtfJahBKztqgyGZyRp3ZswePqpqLLVRkaU1kSYM2LZjFTHJSzjzpozL3WH7LQFHkporXCie3KcqBta",
  "key5": "3tZyoHiEfMxUj7ZURzQKpZBdY29oi9W5RTnG1BMDsdHdkhys2ZMmvUfXK11Np8s32Z7gtkqoyvZfW4WvgXCjLaPb",
  "key6": "zEQTkXyQNfVuEmWtPFJX6jfMM8Kj26kakhvfE1cZ81bAgsuirWfpmdQBC93iTyKKHj6LRt6kCG2rT1gRvUqpXoF",
  "key7": "4XyMdd4pZt47LjFZAGo3L94n38EMiaj91Rj7EeabiWCy5kvj9BrC53wGEW4kyU2ZoT2PYfynS3KinZyMmZr33WRF",
  "key8": "4GXCfLDYrdKa7dWp5o1Cxx9W6H2T4mFo1Vj2fcm5dWRNZux6zXZk5ftpmrHDSC7hxDC96YMyKGJ2xkhJJ8Emkg15",
  "key9": "35Ten4gSfCEVPgAjUGQJGGhYr1QQnU1ya865pzpwzmGHZvGRQCpn73ENSpDGc8FnCCjCDWLMjgmAFoUm2VJjz7qV",
  "key10": "2osQyAuiB4HNdxGUiEWvsuNBz1d6yy9wkGStbYHkXFyRWyojiVUcKfrcUANHu1CUVaB3zMVPtiqRUoqreZLUcmPJ",
  "key11": "2YJ1A6nb1eM1psGvY9ezxRVFPHqtHCMKuXruu2mhMvrb98JPvWR9XakmWhp89NLDZWDXSd23QkYNYXWqj1vJjy7h",
  "key12": "YNh7fVh5yDHQd77ELsJS9SDjerUpyAiPsAex91x5rirV3HWwiiZCzU9dACGEySsJPaEeRvkvTJkdCChNd6M7Sxc",
  "key13": "4KsoLK9tMZeNccVzgWQLK33B2JRve383ReCweEVGAfnTbEQGZwV7RkYLizFXswY2xr7yZxH4qaoN6zKGJ5ia4pqT",
  "key14": "4hoi8TBTWPnKJ2oyfifywXJFCy2r1yA7fb54Bv2jEbWZBRySB36fahrq4t4GaZ26fxwto2aJgfKCUzL9SuZNX37h",
  "key15": "4GJvZKdL4E8zgQo13RtKUp6BHZ3uur1BgUdh2DQgaceF38pJGLTR35KnUaRjdZo3hBHuZoCj7dujFkKz1cAzsXp6",
  "key16": "3bGv4i9uLxho4F8qHAhWUtAUakUhEpk7jiEPbuBzu1YiL3L9BwZMH4EahxxTzLrMKzk3V2kNKgTfobXek5x1A87X",
  "key17": "4zNut9FZnSFKKQwsuFk6PREdnka1F1dUuX9tySfNtZUPt2qpvicRp1pCPEUVWUYWUXomW4L2MvVwmkBXTBjy8aUn",
  "key18": "5q6tAmHydxadSe5brLYdgt9fJzh3PxVA5auWSAPZRZjmLrjUxMNskc53NthtC7uazFDkbQAEpxt95gJCTa1t8SN6",
  "key19": "2Wp48YY5qGixy5ZmR4VAoY9kqdXeYUsjkEkLCkcnrnhn2tQrgkSyQjkcSeSAxHGAQyxDL1RnvWBKsSSVfAbV5fLV",
  "key20": "aodT6vXiTi25jBHzeoq3LBJSTmejHQFDgR2XnYKEWKNySfZ1Y69fQWwM4U53f6nZZNaQi5nCm7SSvZXYh77rZJC",
  "key21": "E92w2zGjVoZyLmU1GRMBcjKfysi2EmmVcMHMBCFizZnmWRCK7e7SjuD4nP1jS22bvX1QtoGfVLLEHQEm5uCZ1pg",
  "key22": "2JgQ38efJvyZW2BQiMDRYz6c9Pre1NLYup2kjkjm4DrGVFcQr5JW5Pa6BfHtg4xJdLkqnZ7p6hE4w8BqdpDPhttd",
  "key23": "2uLvhD7t4NA4RUoUJ2zJZkp92VKMVqfy6W8nYW9qWpcCq1UBESaR4c95m4SNU5PQaoHM5upVsKwBy8SG7yEFYtCS",
  "key24": "3S1s5coffyunhKNhxnoKTQXzPZmKaR3vH15Q5fSC7qD8KyEW67u7Nj9hXmF7ckNJPSxczjKhisWvW6mDotheLWgC",
  "key25": "37bkQw2ZKRaaR5CBa8MCpBhCA772xDnx6fp9MZhLey5n4Dcyx1AENjjYAAuH4W1q1d3BSGTpF42YCVYf9QU5FJNA",
  "key26": "3dBCudgJo72KNryoP2hbpkRGA7X2zVi5oj8iQbceG4hvf4ayQzx1xy9egnrBhAjgiwJDEVNnqSwJHwqpPebEZfNp",
  "key27": "5RXod3vnU8byNupmqU54ECeQemNUKsHohgeyz4gZXmCNC85wbwx8Npu31q2vsMmsTpj9AqXCRW4uH4st7tuPjB9E",
  "key28": "3FXHBf963c6hYbU44RQC8KeZn8F9MrKwUJSnMieDQVpmmwD3KR7LjJunW7cP9Qyg4B7BwbryD1CY7B8Diy2GiV3p",
  "key29": "5dG9D1J6XRGsVAXEXUHukXUmcDmth2vNcDtaFeH9H3kGtku6bGCteNkJgMCNfWBHZyCm8HMRqgGXc9rCQqx6Ed7z",
  "key30": "4uFhQEEWV3F9kfRtLquZgMN2HX36PviszjYw3B8pED7S4Gs3k5JLcoYrK55xMmRyJKujpSjjuzVdF5CUwxrkwKHf",
  "key31": "4iSyY8BtRQLkScszKxsYFqNCsJieRDkymoMooVXSQzkJ6Mw4JRCnwJaMUrPJszHVXHEYfbfYWCeMw3PpxYWiJmug",
  "key32": "5tnCaQWDiLbpgkxJWQS4EnWYFDGg5GanHfZmKubo5KmBcQqc5R7b99SDtTFLJrcPurxemjChof1s1botGn1xbsre"
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
