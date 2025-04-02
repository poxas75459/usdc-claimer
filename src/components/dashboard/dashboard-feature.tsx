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
    "5Ek6ureXpEQxdVh7VESDDkjheqdn18HaLLz4PLzZ473yaiJtn6HptdVi2ovZH7mdVNdbWc8UjoMG6gVLUzhvKwSS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yoWiDSs7qQsyc4QvbkPutockZWYrq2DauSuJmwFUsqhnyhJdhToVfuUjyofWYg44DUB2kLYg8dTEPgTaDKvBXxu",
  "key1": "3qGmxHFnJnXJrpqDMZa21gLUnzwcE4T6thQeUM3XLZa8awxDjSc3zzsjG8ygnoQdfhmWB8pd4tJZGMjsNMMfXAcD",
  "key2": "2zoXwmFeoyQrNHjjrwzSuZTSJTvMsjJD4tHnS1kLM2gyGyoUp8cqG28sgBqGYau3dTA87qGxnzfr8puZao8bo8iL",
  "key3": "5mmPvBx5SY6FEgYQHuWkurABxxYVVaMbF3Lg5fsqxWUxSDzbC2v6q4KpcHQu23W3RqQCrm4A23jvTSs1txhFcukr",
  "key4": "wjse9SHY899wtDt5yqjrEft7nnZ7NLz76vrYLFVAU3TUa5v7JqS8CzrYssmeLrKiAjxBqvtyGLDVAxKPxu47pRk",
  "key5": "54sERmCzMy7mypEMraCqkiMD3VkWx46uCcHPCuTk88KYBk8XY7bu13Ve5BX2SLMpYLznkif3ZYYPVEyn7e9LskDF",
  "key6": "3GmcJPMB9NorZzSbYbZfPPK8ASNmWLpmGA1t9bKLWrzhKy3nfsjrq484zCPD5Z6MY3yZjSnH2G9FBpxrynfY7FVx",
  "key7": "22D37DoTd4GjFyaogLUePs7kRpN7pPuJWSmNYuLQuRwcS7M72X6tip2rmqKwqHhw6rsoAccPxRJGbcCyhCuthWfM",
  "key8": "PhEQKS4TcJ64VXSv6kLoD9c3vErFL4t7nhtD4tRnH6Tnq4Nx6rAnPbjEZfvE9zrSvpUTV4L6ysg29WpWCLHRJFx",
  "key9": "3XpX9dXnESrnNXLjJKMSbSYRZ9ZCtKf52FdF6h12MQDnnwoTBWzEgaX6WzkFVqgZfitq92Y4w2JKrj4ziBM4ki4a",
  "key10": "3QQUY2D3xMh4KQLXhgvcw4zmjPF1zvbUWodLdERJXpzU3EoKPfbq9Wc2LxHBrrs9uoFWjbxx7VJk8vAiwozXYJcX",
  "key11": "4YYj3NaFCQv6kJ6n2cb9cz6A9PRn3pEhAYBRmfetZUd8BPrTqMG8QeNTrusAWyj5wjrLyyurLreHW3J6BR133xSw",
  "key12": "5RiNPBJfDcEyajdbnvVWGtVh7UtQFr6HYw5MaWBd5vVoMMPzBZX5yin1ErgRTqmDjr1k6hCGgwHUU2vb4ayUc9gt",
  "key13": "zKgUEAjTmeUy968FNvbshUrPhWUYzSJxRmJ3wjMaEX2WXiXt3GYWRC6pXDG6DTK6zKs4wx3V84AwwV5HrZP2AeP",
  "key14": "5G6UxP25ACcZTD6Z9Jx7YXGgv6fEYLe9EZVT1wVY6Nv1rMsnjB4gJz68V4JfL86s44aNLcistHGWhZ9vDzgBm3WC",
  "key15": "5BauJuA5tdwF23ugzEVycGFymErnkTGXgysuPL6fvkS8jy6iJZDEJDFCsN3fM4UKGSAKK9C7U5rMuRmJUHggRW1U",
  "key16": "AeeAaAk21VNmwLeZNKGksyujqTBzkLhpPVVs4SzhV1D7zAJVhUZJvSZwuJKMbhyiVqFvvG384sphQnFvvQDDkWH",
  "key17": "2hT8t5AcGqXvrbyeDSSSivC27deSHvuJuygbFBkTX3CUKYCPZFMZ9uvxPVvzHYBFRMqKDkyodKJVfc3xsM6NDhWV",
  "key18": "2a9w4UaBQkMhkRKo6EnLCMWqZbsRMH75ndf2Pddhg89id88NvHuGu2UzxrpWqmpZ9y65KuchfNjXZqKUhnKGfhku",
  "key19": "4bRmPcRKCaCybxsQ8PEcfhJDHw2CVuADrpE5EyfmN4rr8fj8hEEihpkj7JRhuzNBcyVz8KjW2SrBrpXC9jrWdWHu",
  "key20": "4eqdazZJe6QsNPoQL8TiVWi52nKQFBDZNoHfVbKWsGsao3np3Xxq3BRXGuSTXb7Gg8UtrBqzj8jbhb2Gjx4P4Y8X",
  "key21": "5zcqiaAEKLghm6fJeBALXkRAm2bxyWYBnqdJndHKhsj5AC7Gqtg8P51PML4f1fWSTTfyBnAZv2FDf9dUYp2Q8E1f",
  "key22": "2WZRgm4YfmXCTtEr5qrWFiqeovXCbiyvUjgh8YMDXnjSF9ZQXbiRmb7pLdcreM346ivEiCGt2DfjkLqUf8j8Yj55",
  "key23": "3voca4hxoyfh3oxcNhFWeRSiywdJU3nQmNp6M2qbHw6XDChr5d5ou3CmKZqGGhz6q9JvUK1SxzbecjJ7FWffYEuJ",
  "key24": "2TAuTgS3XHAqgphNG4vkC1RidVrEdZVsA13oPD7HZ9RZVTbVLD36W6TMhm5gsdQZazA7UqMYFd7fB6aSgiK1NNgd",
  "key25": "4798Kptm24e7kWnMFkgY9Z35Ra9L3FfKkTjhbxZAtTa55C4YNGAvcNkjKVhjftcEHTksMxFiRDGUuHVKo4w4Xypm",
  "key26": "5g6k9GXj4JvGsXshgWFMjsiiXHuTQ3vCJQpEfpLPWA56x8E72AWvXRTHeqHAYuJ38TrpJT1LHrCuD6eFAQkWuvc9",
  "key27": "45bcqbgoyySJa7RUcTBnic1itThXTP5Cb48bUkNJegkXyUS4Zsa1p3tjLXaF9D7ERFNAF9yq7BFqpZApR8jGjXmc"
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
