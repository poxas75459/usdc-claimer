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
    "5murbNrdnRNiXppaVaS7UwSjfQgGJMr4bffFkYQnRyq2WuoqFBYv7WJHN6CruP5AhE1LxTTzVwUqRvmuJm7FVbv3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DWhsn93r2ZFdgimPhz86WjYUrRUxCvFTv8NTwREp5B7PfQMCDpEc1ESFnzsq9twcZH4PMgQnwkoFKeBWKQBQvUK",
  "key1": "3GxMx5EV7KWtUs7uESvj3sKX8JYQ7PqQvkqXMUaUU9UKjsVF79PMv6ner85m44GiuV4XtzhdwXS3tkRhUL5yvB2C",
  "key2": "sC1atKTXjTMmFoo5DsRo4oxaKcc8v3MoQdUKgxAXp54F4hWGNWjgj52Sp4DGAEu8p27N8nZjVynxkY96tnunfaN",
  "key3": "EtymbdRBK8ZTP5v9i3NEXetRPjEnwA89i6wPAmY55jFZPrLXXZmQf3am93y3mWWN4se45zDCdz6A2seMwEwz728",
  "key4": "5xexzhffnN4ugnoFT7hMtU2fUrqjBDc3NoTCuV6tTeCUoKw7AK7qabBR1gCwm7Dd9TjMc7xoNKa8F5hL9NvSNFxC",
  "key5": "9DFsUB5R1awFc3YceoyR8qisDdjxHkKd3qPsHC5xQ5fBy9AKasGp6k3sr1V8N4B4US1gMpRNKbMGjT7Aeya6UsN",
  "key6": "5Hq4gVw6H9u46tjVvHP7KXMWM64vzt4UHNsEWa4Q9wyybWVbehMCabNcT5T5m7jmS8qzohg3eWFdrh6eXLXJciFh",
  "key7": "nnXwxweA4chzazZruvZRUEKUhLj9B9y49ZQ7xPJ53F5pS9jaJ2mLGqQR9HCjWxD8vpi1TJ5i3t3jxMPV9zE8ybQ",
  "key8": "3fyJttYmT4jJ3d4Dexw1VWxSPBwjJ8VqaddgesiHeHCTaa1hu986UMnrdKsZLhxREMp62JvYBbz7T1XM5K2uBEKT",
  "key9": "4nJG2CXQe6iQsFR5pqCBCo1oshHx1Z1kNSuFwVyHNy1BzHUaErsKxL4MxhmN5Bm4NNoumfTx8mZkVSv4n654Vabk",
  "key10": "Mdn7tmy9DPg9SbHz78iNcJYhnNrdB4yn95P2LQrZfnUwhL6CTfmSNkZv9MbYr7xQwnqYrorwk5evKQsrBWnbENK",
  "key11": "4Q2ZizVF2XCjLAwtQqWvn881jq3somFSbsDRhR2pRqNd2TMr2QQkyF2AoCyRG9hFVp3Q79jDxjTmKNniKCGciSLT",
  "key12": "3hm32cyMPNu4tvTDRU4qUnkzoeAWm8hUZQJgzL9BvfjFNmypgHNhDeyiW6XftpHk2NJ2kvJ4bmBPx2mAvDHo4Z2N",
  "key13": "3wctuyTemJaP9vDp4RTd9NJ4SCL6vD9KKYxCfuz1jt3UbrDdwkMsBYK1FhMe4mTF97e2Ax7WU2s4wPedG4SgHfRM",
  "key14": "4GVyfgguGCRniUU8kFNEmyigLAU7MgnLc4DoWKPDHo2m2aXvUZCndaSctMVKBa9xmHeiJEr8q23XH47ivNHAq31C",
  "key15": "27N2BXZ8PLZFbKr3priAu2CSMHSwXVptXnPjMhzBNbGQRRQe73GPnVLYp7RKYEFQZVheTbFuPwfpGTTtozhmwcKM",
  "key16": "3xKXqN2udaWKCrqtA5yAj42dN5762i3kykawFf2tzq6Y9CCSgBgbsy9LSpnb5Zi43s8GwNr42XZTJvweK6GEnhHk",
  "key17": "4Ym4f3E5m81PKUpwnhqFh8oeRUSuLfUgtvt8azccb8BututjwrqAw5zN2UDw2chEKxk7qSg9yj6jbXwXkAqj9eEK",
  "key18": "2q4xCBMbhcfS2g5YkNgvogTMNZxK88VjQd7jDgyJu4BHNNZMWb2qVYyitZGZc3wWVr1KZ34Ki6UFU4y2FSMP4GKt",
  "key19": "9HiS5kUdN72D3GMax7jp2iM3dBaf3EHiH8goYoBCN9zwwoWdk3uVNuKeKpz7F4p96mvvycJuVKWo4fTgA6Ykv5W",
  "key20": "2hXNZHrSDE9kis6T63EvgdeUHUgeTUw43i9gS7XXYdeFa2sAtV4uXo1RsTu8wgoPe1rsj8KBHyTXTqoLwMBJuSn4",
  "key21": "5hQbRC2Pj7AoHaccgggCArQM6KdhFTrhNQc9k4FsMJEsMkA3gjwdzT6Fvc8JmrRLDvdR4bXVXzncoofqSGNJobQn",
  "key22": "21wT11yiHUYAJfumL4pg7AzZr7zQj85B7vYgjhjCM8RDNahkr8bBLhWrxwAxuwdWF57RNAbTcEcm5Gp5Fyx5xaYU",
  "key23": "2eKcHfW2WoXvi57taXj3gC5xFpJstnpXcdsEkbotCXcgB6JYXf9cAs8QDDTGPmtWUmBcPUtQ8es3YPPo4XfdCmj9",
  "key24": "3hV3VzhSRv9LwnRAn6n57sJrqsk9F9cG69tu5Beemxa4tACwcH9siZWryGe5Son1CTg78ikaHgmVwq1G2qz3rddu",
  "key25": "SWiUX7SNnFpjnQjrkKTf2aXbvJp3FUmM2ouarrhhN9xpkV9s8VSdSFoVceRzzjUXPdbeZW7BuwmsmkhY45wYbLr"
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
