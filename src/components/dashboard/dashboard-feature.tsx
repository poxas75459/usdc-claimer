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
    "2u31sSLGa3E9oKLTfpHM4iuXG36pnKzYXmuk1C1VsRJMErZsh5mxiw5yptQDfLRKWRXWLWjadxiqNL1b3YT5fmGh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kH1Uxtr7ozHGDs4Hdq76UhRu9Yye2DgcHB8UVqUqThuDLxDEQvmyiP5foL71NQi6wuBjmCAkFC6JfJW7YqjZaBz",
  "key1": "3nKn1wwM2Fo6wQDYvTvabPdZw7RQb6GWj6yFgMfCLUpD8jqv4nSVQvh2dqZbKsmYerirw9163NVNtALgDiPg9pM4",
  "key2": "56eBxsaHbTRZAN5YA7gC8fQYKzW9mDHkeKomse2y16UWSBaVEAX32dZRDMMnKgnkWnEC6wU98tDJZjKudr4FKwv6",
  "key3": "242XKQKKTS9LWS4C6Y4v1YwP1BJsgRPRtzAUWNnUaBpNfFNpA436aGbDco3oVmY4Bs3di13xfDAberJzUV2WE82N",
  "key4": "3nUf3bbZrg5JyUgadGcrDJQCHwE4RZBPs3SDvsT2HD6D9TarBHmC9qVhxjiuArqE5NszWVHnfbzG9nap15eBqwb5",
  "key5": "44QrMf1ouvBqTDmvgYQH1TXRZjBmE9aKJCmQN8pSM4537zwpKJpxb7qyoztJLiVKpreK6Y9LLwG1iGP2s732snfR",
  "key6": "3W7emLZBpqq72z58SwiM5rmJ9t4rvB5SmeHUwXkrMGe2RU7Un5eAqpAfyjtF2kiuf3QkEkozd17QJVfsxKwNxst3",
  "key7": "5kMosgMEjKs4T7GKr3XcBnpcAYi27MXUwuzyWWpAgtxcVspxpVUPKZo18UyDZ8nLS4cPgF1hpRvBqG41wz2kPC7c",
  "key8": "VMmV9Uc1hZoAZ151EjccL1R1QdMZPmtP5qc3d7dsabFGBv4DDASpJFoCUWpmGRFRA7iWr6a9bVyPA4RcYkQhXSp",
  "key9": "236kXN83wXyQxHNJfdt1EJ5apheTwa3vRWvQ9gNmLd912bXB4xQuk3btxonaCvuc6SHcmFDK3B4qFGPgaGT4fbWf",
  "key10": "4d6kRkPsABiPAC2B8QZcp7m4sQvaZfdGbCRPBvJctU2KDZpEKVyKtKtBFUKk6P3uMjNATxE9fsLC9KqKKcN4xiYk",
  "key11": "gG51jt2efZCvi7Fw6yoCveDvdnVTYqfZx8SVHRgCfTULMHhhx87Spog4ZfBni2iv4cYg1GtdDap7pFaLHH2vRoK",
  "key12": "RRrwEmQ1BGt7vRni2nc3amZYxBPHhZdMGvJGWeEi1jgFGaMtpJgW5GoDXLpxea99sF55eMBtzeU2U6h8Yv8cJot",
  "key13": "1VnEphd3LXD3xbBJgHTVpyXetZetVjVReUXYLC2bveBuMovXnq2vyxRV1zRWrPogLpYg6EhWKdmA52raLYZHYob",
  "key14": "62xyBQH4AdRCC8aPy9QhstV6L7dBnsQUrMh177SXNkYHpTgtovyJSF5Q7pLTdEwYj4weAKY6SY1kEtVnAj9rBjXr",
  "key15": "4TfMMnbgRqo8irp5XCLVfMQqFjTnGcTC383u8DWUaXcyG7e5JguDsyLEG3KtBrGvmfHbDBMNR9jqDZs6ekbVQV5k",
  "key16": "4By9VzJ7gad6iSwJ9mcUEM2tu7fk6vEGYu97wUSsUm2pyHE1yG2JMZh1YNaxcyBbvVZL2LubXxMn1JuL7exTrYxr",
  "key17": "ZwQHn3XTN7DmAiXpmeKTXotipj5b18UrQLyAUjim5kLdgdorF84ky2qUDhKD3Z3UPJzp8ZDrnxXiZmiduB23Q54",
  "key18": "3okF8MKMirnqQ5aSqtBMuQDQzCLTTiT7SdvUjQzjzCFTSqwA7NvRwsizhwDdCnpvMvgf9gygsjKiENvS2BwViR5J",
  "key19": "46bJr1iirv7RcmBYFynYVnm1gfXrRxrWrAws8PcVfQEdDaB8U7hoEXBqcvSc3pvv14jW6nh66atUvYf12cRnjrYT",
  "key20": "46Ngfowv2WsZ1PwL5hLVB3UXmKgLGa1wb33eAuMEgKcitRpQtUSanVc8FRB3QkPGvAXiV79fadFvpWsdT7XKSbSu",
  "key21": "2oLtfZJvEGDZ2NeuhLQmrkwPB3kAZdsan5q2SxLj98QEoU8npHCYiYUBBgjC1ACF1yX236cM9u687vkjS86oQGwq",
  "key22": "4EkAiqot9vJPP5dKYJGjoHNo5xBSwqGn1KGkoPPnydC2WvhSAqci5aTwoKx1PJib1M8xQJykx1bx8PVWWKAJEAj6",
  "key23": "2B8ZH4iyNe1sEurBxhcVkBoynGykNcEvPqP8DhXNEunGEJeLFw3uHpRhQxTRXa6MHukYXfj5CH9Pr3Vemad7viip",
  "key24": "54J677QfQFSHVegUHuu1VFX63J697ia3UdPhuPF9AQwkMLm8rkSg1vqioPynhLeJ8dRwp2UCKqPYDqtwzCH8zydg",
  "key25": "3yAwGUw3que9J9vN7ZQ2AwJWAKbLdX6xT3AKQu95SZ7yG51TNVaHVqJqgzAWZM8nfqhyzUHh9rFakgD7pYSwUEqb",
  "key26": "2PuzY6i9SP5XS95yB4WcjvUqyiAE89HeBXZge2gzQKNWDfAAULX5j46yd6jeNZNNqCBDzzz7WCpcbYkA8AvBZYUQ",
  "key27": "4A4EECTFnovgVikfyWJ311pESxgdreMZadnddy993y9EeByM9kqRQd8s7CxZBgLd1DRN65KkgZw8aWS55inNaX6V",
  "key28": "5tDrRJiCh2MZvGVBPJAuskyW6pYuK5s9ouMifosvKRooJtJQ7cCJtn8fwg5oWJNJ3rqBLn9oijJRBHNDzbq9W1K2",
  "key29": "3YzE2CBjcBXE8zt8iK5dwJZTzVvhLrSd33oSMyvVFtHmwkgihuZnv2BQanC4Tx8d9Pt9ywSmLp3xq3M9yv89Lcfp",
  "key30": "22YtFiT8PNztZTGSQWhLKXBDjRSw3fqm876xG8phjPjhgwMQY6LJu77RAURg9J5UGGU5Fa3nLMe5krKX8hxkapdp",
  "key31": "8Xv9ZgEvxoh5bag9rUxKHt3zHtbJYHYiPN6eVtBP79NGBZw1g4z8nKJDSZ7q7CwHUfKqLZtvNoN8QQgQhqLc7vJ",
  "key32": "GhzyvGPof1XaKZMZPSNukHfKS7m4QrpMuxMBAa1uYH6cMmBUXkRo7TvdLLbGXcNR8L3mpwzfaSkh7YaHfaxM8s5",
  "key33": "2rKzNWLxAEqooqXCuyDax9CCviZnpZN8QqWLtYbFkQhhj9fcoE1SKxYrWFnT9WPVrS15RVUNxg4iMmaE2JiWqVGH",
  "key34": "2M2oqZ3zyBKnY1N84aNrc9W2kekaHhkn4ipmeo4EC7idULiMN4ybLGR1gP3fjnoJ7maSQRSUAfrJbbDKUU1Tk5K8",
  "key35": "5WK51bmjevUaJSFhnQU1Gkz3vpZF2LEz9eipVk8uBZCVt63cvCM6EHqWybdKXZ5F9tdxMR9JciDoddg9DM6DZrh8",
  "key36": "4tqEpcsbnyekRVkvwKvL9ErQcvde4xvzVUjQVBLpi3JZazt82kLe2W1jy8z18V18oR9e6F5WRMvcrySegKM2YsAf",
  "key37": "SdB6Gn5a2AaQNd2kCE8N3rpxww7Mxnn1sb5Ukcx6M8rWos8RVoZGG4YRoEMcBKo2D9QZVTcwqHH7wABb7ZEGAnv",
  "key38": "3cnETmXc3FtQCdeukZNKBJgNCu8btZKQxee3ceKgHUG2rfoAM2fSzmN8wMpQieVt3FMxdKBKyxCsThZpVGDMMpRZ"
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
