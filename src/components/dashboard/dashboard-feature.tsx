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
    "DKNZrNUbWeMgQVBEQbGrEjYJCFrPKtapm6JBs6GumW4zGhiV4VRzE1Bn6tZHEmHUB7sdHXPCcAtVhe46uFy5cyM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BFLt5X1pVm3aNiwmEfmS39SCririivAGhKGS3HAs6yLcwPwrVMDWkskmbKCBhUTJDYrt5hDpWPWPDrz4kfppTQe",
  "key1": "2Y9xLcVgfPukLFqPEL2arEKf9rjwmt5F24vdvphJBjN1eoazirRTRkSEJ5HjAtTsRYiA6RCkmj7AupwLHH7YAkyj",
  "key2": "2bGffsA2jqBv9QYxY3gH8EPGUZVPPPEQ9gPyudeDipq8GDaBmuX8Ft8iVqmTQtpbwihLHrL4L4hPhnbycE4tQGE8",
  "key3": "3NCSTu65FQe7t3NzpzY5WhmAVz9Y1arkQAg1fAf8eCuXwFuF1nVV9rJxsCkVWhJfZLwvFhNzyf8xcCC1HkEWRLVS",
  "key4": "5tooUn2G5b9m8MzcAMJeeirmSFwT3hJ2nYj5AKpsL9f7pS4qwjX8UmWJxFH2A3THjiPZP5wMZGUSKmuLDASPzQPV",
  "key5": "591MApR7WkpKajCu8rzDahUFdQTxF3FcQ2UnLZ4eGpqF4vNX742G212agvjG4gSGUUX7ErudwW37zLqv25p8ezfm",
  "key6": "4MEi8WA1rPYT9LGzvF3PjUmJVPvEp8EKRJQ7Px2pan5HKMZkUC2xiPisma1ByMRFYTKxCw559oaHYZEjDeNfbxPQ",
  "key7": "hEPj55ZZ6yz2YGtFbG1atZ1LXwDFM4CYyaGKZ1ev7UMLfrnX2ju1K89gewFC1Sif5npBqiNFsGQdtYv8nuSiVoC",
  "key8": "9mE8wX2C9cGyvuXaWuXt6jkLsW7oVttaiQUuPSMvv4kqbAc3AvwCLhCzHiQTJ1asTqp35UpxQnYt8ZXwv8sB35g",
  "key9": "5qmctZeFZVC4L3RehFNdVwRUmfXjTW2SVxmxBcWE1qTZpifxQGuHf1uGYv132YZsqhh7hue4y2SgLtrgCBKRLM6v",
  "key10": "3wGXnNxD95iUVmfbAAveASqjud8VnBcbmwPi29Mh1knDrBhermc6jvPPYnoUeRag6JpE4GKKS2VZmx3WPTdh8PWx",
  "key11": "3jdQy75zJ5H5bAYnKGhmqJHc7Y9bWAnH25v5H9jwoBBNoCjY5qgCTWKCxo3zYqZYVmze54EmByp1pfDHuQba75Ex",
  "key12": "2jALSsw6xPeJyerbFXZ38mQtPqsV1wc8Qz1KWAdGFueU8NS1GMMgPNLja6NkGwL1m7i8121pm6mAiSeD3WFDGWJM",
  "key13": "WxwzRd1jjAKvV7NgbmDi5fXtLHkvwv2ioysj5v5ayXkLKdSi8gTtTPGy1NFGieVPeac6sicBYQ2tw25NRzXu1oS",
  "key14": "2AkSMb5MGV8y2LRbGt3yH1mvQT1hbvzbNztTM3kd32MdA4vPNqXwhz3ivWXbfX6FJFZNs6yNHPAax77wuACqAGwj",
  "key15": "7rahWip3D3CpLKLzYzd2eisHontY4dp74vyZanX21a79b8NbH6WcRsDzFSNCbqZ4fferjvzENySgEa78eydDmGX",
  "key16": "3zYwcYehqSbKrxygDDvTRwbxQ2SZYHaduAzq7SMQvWVFCfsdnFJdopGVNCfa5nt9QRPeZyiA9Sh221NqmaZ7tz9",
  "key17": "4edwq8BXukJKqjoqvc7sdW8uQtjGNdaMMgMMe1MpZ2B51KijQP4JuZQ9bDHZ2Nzi7NLN27kTMvK4z5zdU6f8RH5B",
  "key18": "YrEkEBnCHUSMFE8mmr4H9NNSmVNdmsmNsoVPgfUiEaTLndURJCaKzhiVJmQ2ddde7EamXECn6hwWYcWNmpbTazV",
  "key19": "4EaGyxiL2djtKCSXfTMnQ9dKC1vnrCqGz7S7G6xGX8yFNWwATU3bfgyVaCrDkV1vYs2WTC52uvJXLiP1V4Hug5f3",
  "key20": "55cnLGUeTmfzgbbXBRTXiWQ2bh7EyaXYxHXFHEZejEXyzdCn3uyuJ5UW3ruFg1EBedo2b7SFDZftiVxXtsJjtp9W",
  "key21": "32n8ToBArMBB2LgLEkFFN6oD2SNcfZJf6gC12X9gjjmmsJLcY7Nnkg4Nh7FNZDGVfPaRWxZZBieimg19tUg6DrrJ",
  "key22": "2fNMgN7DFX3VmyGK2hqnp1UhbAMQUCAKPvZ9JamBFBaH9nHLLvqLnkENCvwQnG5SP4RdPNVueecfCVSqkk2eGGgm",
  "key23": "2ohTfadQAzLHCsZenGqnEZENUpyNdkzmkfBsq9Hbokiy5f3KHDuGbD3DAdyFFLXtF5w72fCVEYH4SJ6wkKpgDJZo",
  "key24": "3zXXqCxv8YUTjrT5uAg5kTUnn9iSBJZ7e1UazCLcUK4DL6erGWuGJrezrMMtiB6NMxoBrjpUQMohgKJuW8ZJVEkU",
  "key25": "2BWPpT8FUWLn4bjUwyyRZexz2QeDqHs5F2124Nc1zYej668Y8hUGT5DKEKpyeaz2j5Nuz8TvXd3uKUFsBhod8yvn",
  "key26": "31sbChQkMteC9vHKQ3Sgwoij6LkzrMiecneSPmXtYwRn2bekVcBpAupHGSDZAmMooJmTQYwDwSZ1weY4vom9kZJz",
  "key27": "2F34PKy3h4pURdSKiugVy9vuocw6zMGZYzFS8vV3ZUap9EmQyyx51MogGQzUQMMMXgPkgLpUUcEPSVgrEonRvEdj",
  "key28": "617WhKGTrFXhRPGJEvkRMKX8iYCYwaN2MQEmz6kTVmYfFpaBAuhi4t1iKPrWMHx5fdU2V7zwWVgvDTkgGbfNX3fb",
  "key29": "2NWqzpXvaMhSw2dxuKjDEA7q3jSxDWzDmFG7aS6b2msfCE5nz3etqjCunAf4Zic9R9rZPZxkHHXtQhWAoKim43nn",
  "key30": "4D78UM7ERXuvhLcppL8T7sf7r38b3pStDy2cYWbF23Sy8pat9cusobLjcHvJ511akKE6xsXRXc5Fv6QF4qbRjHqc",
  "key31": "4DkNomRW2TrSYGmG6y8KMWVYX6hh9zjozF153t8PYw546FikTxMuq5FteehLXux8yg78HnwfRtbkNTmHBM6MHjDS"
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
