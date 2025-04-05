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
    "2BivumoV3Qa6ns8p9umUPc729fzKPTNM48ZKtXxjMw9Eu6yHK7dSmv6AZLeED6ysJGx1rxCobyXF2Scx1cKazERJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dgPPFzQYhe5yfabkJmqnLSj2A3eGzEk25iX5F7a3sarF1isFBK7X7WP37ZS6kQdQGQE8CRWD8ktTn24pJ2azx35",
  "key1": "3uWqVaHGBpCdtiVA3g8wNbNZWyKVnty9ns559qaNqMwJbxV7wh3sMRnKgBSZxNwGQ3spjnpeBhaXQcYiqPFuGU76",
  "key2": "4SjUjMtibekJ6hFp7AcKSgYzixmCMuS7ewpowo2mW6v9nbEAmUZo9maexAJZQxBwx2vfcMyqvkXyTsctqkfo2JBi",
  "key3": "59dNd9mZrsgCd6YTby9sdhtFZ9ybympsK268YrTPABe19RafwXfUWEawGn4JTeKWAs1QC8tTiPMaNRiDvFkyQ4Cp",
  "key4": "3Aku91cQnaHxKvqed6FepDRUkAvwbATUFbMvhK1hvJ1RCBQw6L7FGkRgsC3NeX9j3u1ncjoN2Vi3ey1E69cSUdg5",
  "key5": "2GZBpJiW7LtbDEqawTu41bA1mBFp4JP6EgRWmkJtGLLF4ussz7hgcPbASERYZhWpTJ42GvxXH32xhfcjcFcE9TEf",
  "key6": "64UmpkYKKsztJtfXR9hb9UWFNaBEK1p7HzEd8GKpE6t7vEorjgYsG5QeDJ3YSvWjX55yk9jsNc7x8h9poZoL6e9A",
  "key7": "3gWoAhoB24w7HpdVTQfESdiJWU37sDtySHFis1fzvbf7uk9BFxVgGa4pDJ4VK4jeHAFKTqQ7Jit37qRyEoucMcrs",
  "key8": "5EuQGbjdxFR8CzWBqjYm4b86UAom2swvrQugQWW8poZd72E29kM6v1ESGogD2XcUnE5j71uz6XJXgrb4ZquqqohH",
  "key9": "2xhC5ZDn4eh9cj6tYou9RkX15uk9gogBjJL3Yqfn3Y5bnYAHJmAv1SsweYHQ5HRVyU9cxJCDNdK7hHsF368eJ5ph",
  "key10": "5ZUw6ep2HHELRSPmeo26SbnY4ztJUiPWQs9FUeFMfa1E6XErJ1VPqPAV7NUtBH7fGT78WqT66CfdXLaw5ThqHp2b",
  "key11": "56xL5kcRox4CBmVr2KQFeLCaxvKAztZ57DoQYvhQ7b7qwSx56VPuksL5kYEYq8MShuPiv5sd3gZoE6RZBLsEA6eK",
  "key12": "xiabQcw28KdvmTPo9g3Yx7NQFvhq2iR9TLVEe3q2oZuCsAJjR8929tb9E5F7rPdL6HronZ9FjNMHXR2MXkMvym5",
  "key13": "3r3BianHXjXvfU5zZpS3juK2CDtjtbHfEwMmnMvsYMBabfnKiRqqgzE5uFcBGCGwyBf8asdTXFZD17JYumu73zj1",
  "key14": "4WpWyeQsdwrhwKh5RiBaaP7jxMLSnA1WuAzje6GzoWDvFDtfVEJcmyXH4JDNgsUuLBT5vHNm47UKFKnJBjGEE29U",
  "key15": "5bJVqxTnAqpmosVpjRet7RhbAvoqUHP4DZumx5bJyHA143goi8g3x6BJq2FXsFcR5JXZ5eKVw99VEDKZsmH1z9st",
  "key16": "46zm1vapoUat7ZFAe5pomGP38KaDfJHFU2bQpXwKX9iAeF8Ppma992E6SpzJmFFwKc6YC4wFAyWBYLejcDGS5YEp",
  "key17": "2W8kq6NHpwSwZ6mgxSW93Lqj1yMyG7WCtKNR9pUiLcmqCdXQrumy9i9Sh7iFnauaXZdGg4mmHnp3rd4qnvrnzGww",
  "key18": "33JvqFaKvbYakBSPULaKH4AvBSNStWZVSTxUX1P7qPtu14xh577gYnSxzzB68wY4T9cHXx3vvvQrWk3VRoQmCEmx",
  "key19": "3JCUVgCCN1j8WZMYoupXy3iWMHMx6ME3AjDWqZM7pCfkcqwWtPC4oxZpYTZk18iaRyf8gxRWKSqJ7B5KeVg8aEXS",
  "key20": "598sN2dbFRr4PsCaf3ivkRPmWZCyw9AiE2fSzub8d7xjYcq4XzUFgpEHz6kkEAatXPp3MQHjBQyuNxkSMfRe8r2t",
  "key21": "5KfgQK8HKqxMdf47gjhCbG7wUNsCFspA2Zd3WYpTy35SafH8725vPEoCsqspEWQ5ECi64xyxveew1spNmKnwayEs",
  "key22": "6Hm5SM1xUdWci2kSVPuRjWCh372c4HbDZx6o4qjpZsQBEXHKzRu8kmmKYjFnszDNoA1MMGD2W6u5gAJTQG35DrY",
  "key23": "45yDAKaBB4XdVCK9fvXsbydLhnZNHYduPjxHxmaRrydF3qcYfeXaSQZWHqQ8HvLpcBAFZ7hnnUzeaXY498Pu6ssB",
  "key24": "2vjBcuLsG8WnUSqvQfCYHm63t3Q7Q7F8b7Q8UD2g4k1FLrpzH3wZTg8AX2qFuaJSNVoBY3jZiZhD6Chs6LqZ5FpQ",
  "key25": "vNYCYE9td2vMwPMGsa3qzCxUHzwvgBph2faPjntZKy69bGGPseTcgUQk2XJoDLLugHqyRR2bbytnfEE9qTocPBL",
  "key26": "52C7hn3LWTRT512EEeLy8sXHSJ3aYbTEys3mwvVyY7bJs1PJMSKfmTP9wVK9H7BvhUVUKhR7pqQj3PTFchC3M2Rg",
  "key27": "NtgXyEnG7epVZ2qTAjNQ9MbQhEmZQejz8GojbFacfD6AEbrowBWYwEdki11NDHjnKLwQt5JF6XR8ZUykmabeVfa"
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
