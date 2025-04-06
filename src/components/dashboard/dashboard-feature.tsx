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
    "3zZHb4ngbTy4bUqtEFp59cxeWCkHFKiTki4xR4Mg11hYHxNt8F4hCR5sFtE2zGVS8Ua432CyXHvZ3ACo2GU8VY4g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qWWhHEz7o11gMT2tHhSxzSkkFbSyb2mn6qEJTAvB8i7LfMajUr5WdUgFC1kbp9WbFrNUnYgVezEKntHvJozRN8x",
  "key1": "KXWm3aAUpea14ocmeN35dkfSKbe1MBDJwpLhx7SASsGYo17kH2RCYHxY4KZaVvDcmoxYAu6hebUacvWcJFsjC2t",
  "key2": "uPxZCvnyqJHyN9VxAynDB44XMVD1mjXVTwV7Y7q5Zf3xCiw3ATTeWDL6pAyBZocRoRPuHFSoB9ErPRhxs8D6HGg",
  "key3": "gGz1bK7LPHvR9sruv2wL6Z1tzGdiy9zA5zHW2RbhdDkCTHYtr8aJBFensUTCiHnyzKuHBexUthZUoXMpjM4jpnP",
  "key4": "226kZTRH6S6df9SGfmYqG5CeM44fs9MszhrLx4t6oXC5hj41YtHmRyfgJtpVyyhkKJtr8gS8mas6KQ5cNGBwxsqT",
  "key5": "37zFLLFHeoxzXiHw7PnGmbreE4uFXZw3kVS6S1f8NW8G3HvvwD6H5qy93GBv1h2sjuWEma6yy5w8kYVNGfk269TT",
  "key6": "5qRMBJ64WiTvCwQ3ybuPSZTHqYditL6woCXrkPgwh6K7kwvS9D4S2PfahrKoo8JKdUPYs94r7i3mYzFKi9hMaE2c",
  "key7": "65DVHuNc6CmHpDrbvtKtGYUYyjVvm6sNFY5skx6t5unRmr9D2sJvDX6KZSxWX8TUnrMeNwrbryTcKjyusk5MWDK",
  "key8": "3VCH5zvojzPt1NCsD9zFg9PWQzMbL2k7J95xzn2EWaFnpwzSo2dcZWzHyc634Me6sgVv7WgDU2ZJDMZc6dVBvUbQ",
  "key9": "4SkNKbo54BVnE8yBQzE2M9F9pbR5fAHQhUwEZkd78sR9fKx9T3uWSpYaSbgqWWb3tNvS6sYcBDi16yQ4TDRr8rfB",
  "key10": "X6zTu1RxTppxyJzt2Ca4h1AD241fdCNPNKiJ1BqEHzmh2GjiVrVR2GbKkAJbpNznQCRfYgomQWR8bFoNupHuwcL",
  "key11": "RZnCVTHG3F23tYdXEYtu6hb7RYkLCxHYqsGPZpUY2FYrCJUoSnoMm4DGnLL4HW7qwgFSMyfVSFxdCZKZryZoKwf",
  "key12": "BFdpGhRtAUFVmkYaU7VLtrQAikhddPZWewFjHVaDKLPFUKWjDnAXg3Eu8sgr2fHgxRVHtxgB3BVH2k9CcnkhHUB",
  "key13": "2xzzunoNu5XEybLGtBzsQkR8bmK2YWKfiry8PP8dcF7Zrv4VoUo9vHUJzXFxXEuVVS8z6wGwPMhpSgGHM795rmLB",
  "key14": "3vkfWFerB4esqKTK7ZHbG5Wug8PBL2oNKRcAvtSS5YE2gQJ9rhEuqqrW3Mz9mjg22w8F36f8S2sjFxuMb3x7saWX",
  "key15": "5LLc4EZvRdTfKwQjxxjnNmc2cryquG7ni4wpbCxGjmJyxA1cDBB11DQ48VAHQB8A5WD4W9WQ3yGGnWWkHcvmUyZz",
  "key16": "2ULtCqTmg2p71YbNBbhjGsbQnUctmfPnvTQAq7WBdSmSzFkDC7z1psHufCuvc1Vk2zW7jCyu127ugqGa98PhHtU5",
  "key17": "NkV4BrnMmDs3HcjcQXwih6GxsCrLBrYPwQ7xhn5ke76kaq3tUfZMhmSmFEZ22JnHK6vWgeWYFdCzUZ74zS9wHKm",
  "key18": "3LNSbjHYFMFLjbm3qLj9MZYyJdtp2MQmwNtiYrFdqvcfvBtPhbBfbKuSya4BgiZtd4kjs3rbncVebmfiymwphk5Y",
  "key19": "3kxwLUYAQcqyDXziwYG2XAspGrrXLqouRSJFZkKhHPqhUB8bjCPzsYKuxMVN6MaFLYE73FazaMTUUsH2LiUES4Lp",
  "key20": "2CjLaWCcq4goeNi6fwCNhhbmm2rgJr1FXoXooa5c5izYV1KhQnZaRDeB1gXWCDAaipt13Rmo5iiJvuwpE6wpq2te",
  "key21": "3ALzXsRtV9cV7xfNH9opX4yGr8Q5owbDpmXfxNAiqdxUknrc7sHfNJbngyzjGBEXg4VeupZhWeCrRPMkyxLRYTRu",
  "key22": "3ds3sy6w6YHq9tK54fFtaCBoe31WVWR3t6TriVxgXx6tjDhN2sBKoGkdFcFC8sBN9REnfcjox2jw8n6N1YNRNdsJ",
  "key23": "46TEpovt7P2RkjGYhQCrWHydJ4AhSKj1YnPfqCt59c9QmYirJXGUJkWzUDRDjCT7XQodpVbYuTNFaFTpJU7qihfZ",
  "key24": "3XkehA1tPNh6qZfa4f3eAXFHmbpZtoBmTh4FNgfA9aggLUhtBnNgHwfeaC9K3ExncRJUsrZRGvbv6jdabeajMWJC",
  "key25": "63iFSCHhnohan8dpE1zKtrYukKwo93PJ3daUguefrnJY4dJPGXkpzvUroRjch5hdsFnwxkzsV5QKBRGsDNXFPfNh",
  "key26": "nVjAXVbCh4jjShK5zyh9JNvYUdeP6KghP7LFXJxt3gELZJuHjZHTMChFxDde3e6bZVV95cqF39PyAjaBEFkxDLe",
  "key27": "2SLoGRUAEHhbuqjf43g4XrqGMLVvEz5PF9X3qxgFsXfyV3VTudNrUYaMGPJdXFMiSyc4zJQTBJyj1NryengXDYk6",
  "key28": "5d8aAc28trUgb43iXjyUvcUpr5rsgbvjUingQ8ePciP2PzcCKGYwCQJ8QYARZRMz6GUdUhDf775TsbBUQ1SPG1jP",
  "key29": "KPkFbpfSDgUak3WgCx1jcBkjbU4nq85MLKMk9ZDSTdYHdq6nMaczNBXkhttUJmwfoqq5MUbfozsFHQep3s2RbsY"
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
