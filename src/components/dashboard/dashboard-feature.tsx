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
    "3Dm9rk5U6P3Kh8NgX4kCJjqHhPJdBdSTbAHjbEfXF4CfCfDmfQDXg5LHhsRJdk6LeAWk8kksZbnsRsJR8pP9izLb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2K6n7J95JMsKehhQEaNQpbtdLMhYXxBDVDsj2g14wFNi9xp7bVGA1nn239Txzf7VNM5uQBckgKaXNMpekEBHv3kF",
  "key1": "3qN3bBiE2YnLWpyXohrQvSU9tPLBa4dXnAQwBQeCZ7Zc33B46yaNn1QpnjSHLDovavSVytjwJtL8RHjUcK7MrXzL",
  "key2": "3mdA7g2CayaiY19M5qFDWz5WtcbM4yWD8SQYVUbvt19owAmtnd5Da25Z7uR1mGyNa5pECjtS9b3gkEqJdB4bapTC",
  "key3": "3Sn2xNyYsyGWqGHAJe1MJ3HRNX7yRcRj2uBxdY9CPKtucP5TK8BJpb6LA8TjvAFqkQN9ApPLK2T4ZJuiypnfWgCe",
  "key4": "5ADKpJZLG6QLt48KTP7JEVnV1vbzcQYyDDATi8vXj1NaZ3fHg1hYTvaJhcAJYQotAYtm6Q8m4Wq8MCFFUF8nmd6h",
  "key5": "4S7sjyjNzXUcnX5tTYfcUx9WkYKXR7LZHyE4XJKe5swrbA5SEeWrrWVQjCzgGyYds5jYEv9MebDSg4fKNLdMH7zd",
  "key6": "ZETGjJzVy5oBQuFTesmbqaqJzJQnz81Gv6AbRv55ZyqsSauvxwUZjh6htg35YpjME7TAnbmmD38FDxoAxzN9eWQ",
  "key7": "67UYBtXgVh63ZpPPv1RtKTGwtLtEaRPPQG6q9dBcAdAD9YyaGHYRFJ8J3pRNbQsAjuAqXrYvqN1Uy6sxDXud8vyX",
  "key8": "47p6dAR5aGz97LLdB1hnaT4AzGNNG28wXhoz4L77njQQa3HeHBD7FetVhvidDa9DG9EwQ84viTzmD7c99dExcSNz",
  "key9": "2eWLvQeqBK7ue2LimFAdPxfNaSJdwYWzwDxUrTuKMDGbw1UATgkNLgntVFB8RdbXhcyhzHfVh1unuTAJY3gTWeby",
  "key10": "3pEEw4RS2aEzRnx5fAFkJ3a7ik7RAWcmuCAEquGiQ1ACbQohWC9NXt67UzPdEJaSuapUuuCTrkvov8o1dtpZCrpQ",
  "key11": "2XUampDTZV44TEHsg6ERXByUAi5kCdkfTKofjHxvEi9jWpPu9XBt4b3m7dXWhJTYbbjYSGnYzDUoHvcAqMwFAu1k",
  "key12": "54Xwne1nbrjvb1CZiQuCwwXdPDcvf7FMpftiTibx4BpMTuF3wmKVRD4nYKb5s4MiJ8S8CuXkJxTYur8PLDJRgPf8",
  "key13": "66pBqC5ptCjSToBe6YJzxSyUArtdSsnpn1UwZegMmDJXajcCB7UpN1zSRdQWVMSTUNkjh8rnnz849XDJVT1ox5AZ",
  "key14": "21wUDv6sF8SqhtehEW6UZkBSp5vKaKAJtYML4PrPSoXpB7yM2wjp5q5CjasWTrBAVymr3pA3V7weYPJYf8gYH8xh",
  "key15": "2iTxPxQV5GbLEZYu9hG82Yi8mjyekjioLhB14A4yhK95AfrHTbhJyo7fXaaxV3hZfHoM7MdaSBPV4ArHd7usFvM5",
  "key16": "2Duimr8wXL4zTKpSNs2UwYC7HXWQT2cfgHkiFjbtcQZHhUYXs9dBHMyFFNoQa3XxnLHz2LsgGud7nk1A3scdNtZT",
  "key17": "4F1XhaEeysjHrBtfVuijr2GBPCP9ay8iVQiFoKAP3mVeoLzn3sMC4ea6ziRjJormnW2S5CrdLYUiTeiz11c7gsZq",
  "key18": "5VRv5Mhqzx8qGvpPU1J2nYD8STW6Btn5CdcEWAkXibVWYqQjnvZmk7s5zts5hPTK4JZKtFX2FBBhVvVF3wXocxqu",
  "key19": "658CKggFEkfvgWXdAdNG9mn4GjT38TfXJeSziDEPNTAeTwPukAmsB1jfwxeBrC3jzwdLgwi3Pcc264hBJxGq8S6C",
  "key20": "7w3HYvJVdAAWdABcYAft9LicULunh31TSVhben35mYcakcwYaEgDbfk5FNSxSqNDrewXu6sq8onqUdxrHyv9M8i",
  "key21": "5gGAejtJqknTfZZ4vA2x46smGdNMq1ydVeojkK3ENT3N3rGMutLq6Q1ogu8yGwjJuioQHt3WQfJTYVhjjiv8tPMP",
  "key22": "5MGwmgzwGqEEcqCP3Z5AuXsTZDsX6ntCiE8V7v2tf4dARmniN3fCqhmGkXLhiSMrQpdo7EbF55Y3ocdwTK3nynaT",
  "key23": "2erejqREt5deuSSkmL6ZesnvE2zfL8aiTQKUncsw8ZVtmhgeSELY6a3iQKCieB4rPJ8nYcHWTXWihmxm5buT1tn5",
  "key24": "3UgJM5H7oJHN3AxDbc4nwN7NhboQrpMwEaWG4vVVmF2sGMDYNKdeAqQLEboy1YfPn5AZANirUpdHVjRmUc1dXc8Y",
  "key25": "2XbeWLEUNRFQ8vfaKbZky546ypCV6F2ey9gHtmJ8S4a1CCiFzQaowKQ15CPfUpcqXzN61WtXQ5ZcLs2Y3rXNSEdU",
  "key26": "2D8GWhj7RLeWNtL22VNynVBommpw6u6J8RkAdq6JZTUWcJH4k2FqLkxQ8yYHg3c3fnzz4xZ3yQYqfJe1k6rtYdSN",
  "key27": "5MDpCw8SDU4J7xLu2QM9cn5sYvrfDhESZ4bv9WMWWHhcbJjYyrX9ryFnkxYquaBYrnyVrR6c2UoAoTyMf2mHd3oK"
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
