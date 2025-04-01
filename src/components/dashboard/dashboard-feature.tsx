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
    "2tENVAuSsX8qR776D9Hn3EKuMz7AnZhkdgrWKCkXc8cBAGWSGbrEb1289M8V6Ar4HckZg6fWucDHhk4fxp6R7x4A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tVCArWbJNKiH9h7U7f6EG8YZMLK6j89GUh2aMPeDiMe7Zc6vyj3M82bnFVpSGCsbT7YQvQShnwLq9hX2EysABpr",
  "key1": "4G5m93ghfmx7uDkryrbXr75MFsK46rvszwn1oxiu4aX1gUrnd2xecg8e6HPBcGEn1XY6eGLvf4UKfCUox9VX6JDS",
  "key2": "59ydhvGXG3QJ4NYKjJez8ckqiF6TtEiYUaWR71ReHgSfBhiPCRMGK8c8udGT5VSDvQJoPyFKLEVtrgtxPVrufJA2",
  "key3": "5rhhcjTcq1KD5HKi8cK21gLij5LrJFupRtB35bV6s3A74uDQP9QyrWDEWPHy42HHWgZFdJpvDf3Sr4wBVxwxJX3s",
  "key4": "5nLYKRwzL8yZJpUYmmZxrxRq6FJKSyUSkaksRCriMe3PPA5CZ4oKsEu6nBrxFcfGGP1HTMRQhUdToFNxqymFBP6c",
  "key5": "5m3t54g5hsi9fsrXfqrvd5AydgtXGKHbyK6a9srkzX7LPgWgXhLEHWP3vDPfrhvb7uEdYcbjHPSYRP7GHXekBk9M",
  "key6": "5Fg183gd3wdkTL9dL5gSixPf95opkFTY2pgeuGFm69EFH8EFKM1avTeQPiamyz3TMD6DiyjGNrikKgy47a6uMFni",
  "key7": "62PTWNvTqnExhjqGebzdCe4ijA46QYRbSri5XxGZo7fKrvk8MTj4BoCNAfDwMXNxewKMtgHttm5x2ii4dc6J8Svc",
  "key8": "4QM5h5spgiPKa8v9ZAA6BBNFosMkrom3ktsuDdrPyHrKRVy76L83jL3HUAnYa2zaJAhSLady8Eqd7T4EHojTTYSi",
  "key9": "248Ae7sUaxn35LhdG7AKzeyzLi6NT4seCwjbg4PnYz6G34QztoHfuz8HoPESAsCYJ714VHnn6PwwA8A5cFSW35Yv",
  "key10": "3z4dGhDt2hbXq6Hui9rzVLLtvyWwK2ks6H8yCixJV4S4iuWqV2wexLJY84rR52cmgBwbnMLsoQLV6RomBoTfRyMB",
  "key11": "5Z8VdrkozrbVQFGdjU72SHcgWuBzPFQfM6ufNa7jdwzUcTjHYyaRm8vjN7cqKCwNQvHTZWbnWAQ63NfcumngSDDw",
  "key12": "3oh8wNyzoXnohW5NLU6w5LYUnQEmXteiER4H1BfGZwXZuXLN9F9dktfDW3FHXFmasDHXNpprnbFrqAji4namec6U",
  "key13": "4CXoJHzP3ub9Ttrw2vC3fCtfdmxNh5WXtimPBtU913je6vZJ7m3VoKrjBxsMH8m9QXRzCfZRFd7rT4ESug5U7378",
  "key14": "2Bvyi7XB6GsWbU3CiKKH9KaxhThHZgGukCNpN3PHBigUTjoUEaQ7j5Z3a3EM3XhMDBXH5eqAxorJH3z1iXqkXKPG",
  "key15": "4iGvY8tRNeSYKACNtu7vQzJEx8qXbk4HtC5P8iAtqYDHL3j6yYUXjxu7FuAagGegoxZc13YtuoB6Fvcvg1NDkg5V",
  "key16": "2JxvbX6N2JWj74C9Ku33iR9K3C9yZ1qUTBrj5yuR8MmejsNqhsc3ThtjPozyf1yEB67FEKjRWTiSAjwVFKCW63oi",
  "key17": "k2bvegQfjtEy5nQyuwytgo8BFfjTiSoEZKt5hdS61cZ4cg8X24V6tG2F5ae8TqfvnfJ7yann1eJbjUMwS7JWRxZ",
  "key18": "3m5QsGqvnFGixN1qnGqyHukxiZSeUKt5varqeJVgthx75s2AJTVURtXYPm1sgzo9j51ci1JSV5GqL5WNvARt1P9D",
  "key19": "3CwPcZ8XipcMyJLkrbjvLCm7yUkyEUijqhTVXeheaJ8EJ4jNe46zY5K4XovZkPfdUXU5MFd83Kb9jJ2kao6oF9Ms",
  "key20": "3xupVyRJbJqVQtt5dGw3B7BroeK8U3BgJXJhR2MbyAC4jfjCF8E17zsDsxV5DDyibyGUQdNAcFPx5LqgUaqiCiiM",
  "key21": "67EoPqUVbxgHMT78SgixyHsJXQNv3hhWb3LpNaGwtViMqKqwYZdfQNRasbbr99SfzfSECFszSuVmdNYNamKQtcTb",
  "key22": "5VF2vkGqD7W3CUw3S9jS84YytcRg9kXTSF4X6YM4rEEtYYERKFxen7DwJsbwz5RyNyiyQMwbKpv4nZxanVcMDJbE",
  "key23": "qRtkdrTB2goK2zyFf5cdW5iTawYWQYah1hLZD9N44Xe9n3xTifF287zA7vxu3JvMv3c627ToeL8BgCydRL81NAq",
  "key24": "2nZdtFjNxM17HMn1SGNeXw7NWwKWjHPmwnPpkg43cRTxS8bZi7DgfooqRGw1B9kTfrtmYzT6ivDtZoV1HQMh9cTm",
  "key25": "4pWJP8gRG2DkCxVu4hkVHt2cFRCDnVHazrrBEcdyzhxr11riNwpS4hBDdtfjqkxgGAYYg4JGvqG81HQhkrYcdUs4",
  "key26": "5Tq6GhsCGEfdDmTymVaUDNygDzzEdsaBtdbAxgF9JBDsXZpb5Ws9nbtuE8uaFmB8q2iL717NqNS3MCekm1mX7qj"
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
