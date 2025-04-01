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
    "2HGzU4BvRkhyK2aEVgvYnP5QHbyFniwsgNbQbqj7QyzzAr2Yxvk9N1VrZ8DrDENwS4fQYzzzMenbURHP1d9J818A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DHH9bzZ1ew55w7NL5tngT4g2pU6or6FGN6Ra4cwsMHNYveKKUZLmajbXnJLQRS96W8QA7X1NeBannonYFYxnBJA",
  "key1": "23jYVUU3iVvpPp2BbrhFYo4vMRtKqrDwkTdoNf5cLREYJ9fqzVtoM4tLisH9Ky4KytE2QTekFKujoEJ3yFvfMFtw",
  "key2": "tXKFivLP155ahqmSQg4QSHUvGwxnZKYMyBqGKSXy9NhPKJe337ASU2Uhnt4VY2sPsdJ1v5mfz4M31KACN12Geyd",
  "key3": "3n9x2E6roSgRGNP3DMyT6gRN7MBncEUrTruL3FW5bFzvbKEiochyN5bHxjxAfx9ZVBb8Rk3hs1gJDYEtkRg7nu8h",
  "key4": "2exhurFaEUH4jBczsWwGSVHtfEhAGsuy2sy23vAYYWsHkN9L33qRG2N1Mg1C9pR8MdrLd7vVv5fTQiWKEZptpdRw",
  "key5": "47V6nqzfb2sBWz8ruooT3DhF2KAseEtKhKojDWih1dxD14Y5qwBLQV1oVffAewVct4CA4kZBjQ6qhbNgxEv9QcqF",
  "key6": "vg7vbeTQkFDu127hUnTfrdGL41N8pZ3WeaVsJxf1uGFUb4hUPdBhmzHTujmeUbhBDdfv8SPuMhZT6ZDKK3QsXvv",
  "key7": "3k1vMpXpkQPsKNHm7vuyynCfLqSv8BeScXxzzaXjcp2kxVHXHbcRnnijMVzaE7bcRSFjLrZf18SkSoVT7a4sjePB",
  "key8": "5AsrMX8nN6yPnbgZA13HuQ4BmJW3S9GhX2QcbrARgm17cLykBBwZSZoAqsgAnsEmVDPR4D442UHSaCikzwv7VefF",
  "key9": "3Py4kv8pHPUfk3SQi4nbNL8fXkpsexTerewar7o3uA69mUrpBnzrX7iX4uS2wfQyFmW4TZJ5hGiFYxPyybq8kqx5",
  "key10": "4b8nWJvVoEeVMVVPjKePeUGiC1hv8ksj2dNyMBNiSTbJyMKjzjHQsDLzPWwKL3cNHrunmekM5wboHZ8Su1tLhkND",
  "key11": "3TBV9upWTcjmPcxm5wV8vEskkmWuCjtojiwtRfhnju6E5ieRUjEybMkSFDMWag6tumpbQ38FsgsgxcJgQyFgmT9K",
  "key12": "3YMovi7Ln2uFTXwp43gBEeZ4TvwkNMwuto58mPtzptVgZgmBkh6diCU5Mw7thTvHDXHymxeEcqEfbKEnvERRYiHK",
  "key13": "95E8GCtuuf2fhghxhQbWngfGVhfhRtfFCmTG9TSPFULN7qymdhVXNsGGrk6e4rZZYNdHEzNwQppobFDnzvvPpc7",
  "key14": "vKeKtoYv3eFjnWKCdymdQW4UgKL1dqxkVoY2UHF2WvkWCaDmLmU17XEaig5V66bvdXH4oqftpGNGLTbnb5z9Vt3",
  "key15": "32ABrbKBkhCEhxSLFhdyRDCdr1ooJJfgCVythU1p4JQhbjpFg62yyvqCtg7rptyUjMXaB3mjWWYDwYqYmE1Br1gd",
  "key16": "5EL2vQCTd2q1wTUiakLwh1iUaS6uEQgJ9bNmD9VpukDmetgiwsMCSUr2kQad4SzGcLnmCAxtmC2x4exbEfVWwoma",
  "key17": "2n3QvZFyF6hPxKeUEGYYNzRBZryyPYZ4jLd3xpQN59guw7VnZfM7NfEU4AK364vEqXoDALG1SScHWiefLWPsorH4",
  "key18": "2EKKapR45M1audHJ2X9Yx1kCU9yYv1oFwxKwuyCDiPXKzQuoELagbRu3u8WwzAJnBiS9XSyVS79YKSvFNU97DWpA",
  "key19": "5PK9qtZwMScUJbiuFHfw5kyV9agEMFQejsaGXqfjmZH2XTdo3yN2ucH22af9XLjghe6uZ1UjZPf8aX9yt6c4UyDo",
  "key20": "4eowiM8QjS5s1RPrjHCT6mKC287rg2VvhwPexL3f8NHk9N2G9gzv3LoBFgPBMMXGXWeELthrGFWdJJvUH6Mcva15",
  "key21": "3TYK3ZY1NNVJN5MKtyVnAKPH9iZCCv64fTVzkeVzA75s23RvYA4gCqY7jnDSvVYmNMXVBfy3n59sZLBWEoAYUrzi",
  "key22": "tkJLniqVMMYWwV4KXB1gYQwLWrHcoh12KW9CsNZVdUqmQhqWwogkdyKj8fudyf4CkniPPcktdzXLiHEokwQ75vY",
  "key23": "2LeQd5fXNs6cukL7JpgqKdrxg9Mo882KsoM8L8wg6B33CUhKa5SD75Dk5PGrTVmbxFEHLqDwByjLM4YVNkPgMKe4",
  "key24": "dbZpZgorDv6LPMFCVQ3SUzoYD2Pm6W5mVkFwDBWaNTbq5tt3gyfoyChxKnL5Gp9xysf8njr1xEBL31jJ28Lh8Fw",
  "key25": "Jupz8aj9FtFc3UkagkzUCgC5fRsyS52i5RCmsLDigmUCpwtui4JWDttzjFVwm2m8vBQUB2XQAVmr6rK1c6MT8AT",
  "key26": "57iCVvDgjgvxcvR25FXNHQ4AfQPMyPHvYZqgAoKocxqz8bGckaP1gMcE1zCuDqnbHJonAe7YEkc4tcH2WAEeWndh",
  "key27": "5jUv8o36PELZewjKhnJ33YohX81f81g9kfLD9kTKMTfmv5m8Egf3kXK9UnS8FHXrZ9U75AJCHd17UXcvq9Sc9scJ",
  "key28": "2WvvQH6kcsfq3sPxF6Spsav7zgsXKixWSeQHexAqDfmnPgKKt9BZeaJWDZDVrqtnTYwJTsHhwoqbsuczozNifem3",
  "key29": "5KtyymCUFm8NvVc1qxFpnq5m9MBuBohzEsHjYQLKJkCFchPzQo9No46ua3DDBeb7UMnHCRMvi8iNhpqQ3xvcGeGy",
  "key30": "5Ev3Uq4RL7YntVQs8vN8tvqEzJALmetcMN4ZBn47raCGDe4CShJhHwzFfNBSN6Gc6e8mc935SVniUmRY1eWAQCn2",
  "key31": "5pQyuLmcUH6y5QeytqydK7D28x3WAFDK4tEkrBrnW4n5Ro1BSvg3HijbPUzbTk3dfjj8YXaE9r7fEH2raHRELqWk",
  "key32": "uXJaLNWEajAzq2fyzCcU7h4jJ5Ehy8zw7svaA3ifyfpEM97FA93vfPbQdMmUoNNdE3jLu5QVeGvUuRmXdWaDhxY"
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
