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
    "4xNDHHQK7XcK5Cd6FBZduwm4bn7zfJsSaxoTEg883pAKb78nucvYFzppG3bbhLz2m6tGp44w8vu1KJsYzoWogNvm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59TwbUVb6itqL3aD7RLSvm8j6wpc4xVzfkruoNSgP1uFZJ1549V5ePGQQQXRijKk5Jnd3GbpJx176sMqw7HD4DBf",
  "key1": "2RYx5RBYUV9kXqJi2vBDoyLwYSRpufB2ta4VTkecWZEnMsou9BQJP4DBG6PfsaA2efLz3EC3TunZmGAqAhgB6c2v",
  "key2": "5GouCnnaRjSub62hNnG1NT7XvepygxKH3uaSA79e7XphyMQcsAiEYtCkVWNHo5U2nCN7s9kyErB5thfZgC52R5kC",
  "key3": "4UHty9JXVbwt5nZ1T8QjCr5kkKCNUpez4rJ79b85UbFgdJdfgMJa7XojV2uLE89gTN5Ni9xaEm7V4M72Y1Wd9ahJ",
  "key4": "3Xpt8M12EnPo7xCE3JNfVoYVvJHzzk7N8eDGveAqgQNv9CspK8v5a5kpwTkk6TuoELDnHF3kDUtJmzY8r2pb399E",
  "key5": "44WHigtxksjbLP9F1GMf814aVY6vKUiNWK7HXzsgPhYkgmt9bw9a7QHahdumJ1HhNPjCppuuFCeeSUE1NYBTgGk3",
  "key6": "3EjWdHV8WM2yuuJGF2dPMnMWLxBfNQG2B5coB8FSABE6hUeD8x4zooMh6BgtbPJDYxSxh3gdStmFqmvXVMQtBaqX",
  "key7": "2gqLDSfWd16VQJn76XoYXetgayPZUhziWwKnsNFSEzFDH6QFAdrEFHMbC1xh5zx5jKt8GpcNYSpuc3wJpiKzRPyK",
  "key8": "5wnAp76s6FGXPsxtCiL6c8hkZAKgMeMRxrH83GUAbtGuJo2a6S91n9xMrC14kDb1Cv6rqdin4PtMs8ki2ZjY7ANT",
  "key9": "2o8bNcHRrhNitqkBEJKRoyv72hiw1ZK1FqohtNwBmWD7XYia6FiBsvT3jiFsW1KoG2ACyTdsiwFmG2RSutYzP76g",
  "key10": "67KfM9ZfBhndRxtPDY3yvy6yDfGeqE3AB9WUTNrvtMDeM1vWdiUtNRjxV1kEhkwSPXVcxM67Gr5TqCZVwui3q4kF",
  "key11": "3SABoZew5J1PMNb5q8v7vcsMmJAdjkADyM4cZdXCRcGmowu7mrWp8gwCppbXJBU7BMh7J6f2osyyrkh6xYK7jaJB",
  "key12": "3KTjmnx8K9VwZS7hzzwemJ4wHj4JmZEr4TNca4dbSzvHfmYKxmjSCH5BqPQ6rNM7eHDUy7rixRRDVaDgUr1J8F2W",
  "key13": "A9esPY1K1gXuMAnzyUUw47XRV8Tu9sbDUx6LFB8TtLnVS1yNBi5FGFgG9j9x2UUV78DnwG2GGJ5kP2t2FgB81CE",
  "key14": "3Hi17PSSELUSpymgHqM2h9CiL1UvbXzynnGveHvyKMMLvpp2m9tH3Lt3a1Fus5Ew1SHL5EUzA9cvfEuQVHWSH2Ad",
  "key15": "35gFj1zer382ANG8bJCzAkuArqgg6ti7smobUQNUt84gGSDj9GhybbEQy531baqKaQkXaTv9KdLHx1ThsSq7xPu6",
  "key16": "4XcXyQzJ1AUMDri3uEYNoevV3JTqNUf6mAvZzioNmZZt7YHKoppMAdfxn2TiTFygeW6z7jzJ6XAipNG42LAQ7L8G",
  "key17": "3vkNvsJe6x5zGgxK9ayB5TAnLZ8N8aqhzmmfRiBggLNFzMipDZtkrpQFmo6n9Xd9ajLNdfHkAHuesXav9CWdZq6U",
  "key18": "nxLbN7L2fdg6qu1Ymj8PJkqMy3SYmqEd7FeNFxjJn4mXhp6S5UfHJc4jeHUFdVf2RWimKUYCwBPDHy5FB7QVu3A",
  "key19": "4n5qpJWQHb7F4udFTjTPW8feMqFzdEZdSGuwgDsMrtCVk2oQ65dVWm1BMqGWNBbypi6V571KxCqzsCuBvMGzrU9g",
  "key20": "5EVguVbFQjxp8S5VycPNJeoYDPh36nhpJ3RgvGtT7XVbp89MQzSdjGx3p2peBWMuxPU6qHRnfBS6tLVy5yb7S9FX",
  "key21": "2vAedFSXGN7L3MvagoBzcCfCJr2E1LkSqy7poTcvGfHzRW5xg3L9E3b6bKKya1Ns66DvfRko3nkNzE6DYzrqAWk9",
  "key22": "5NLD7AFtrSz1r3SResVYSMAb9SNudLWY7eJcXQGfJE4sm9xKrGSYMBixVd1YoHvsTmrtBKjizCBm91XjYiECKWPr",
  "key23": "bZ2h9jJyiQ2yLyVY7afwu2KsSKg79Rz8Hzv4huBgcMiLjfFLi5phugZUzmTrwJQjqxLrTYMz5pRmjc6xyR35Ssy",
  "key24": "4kkt1iWZn8xAfz7iLCnJyqwYNQefhd5SDH1fCPKNdZCivCd4n1ZgUSZsywW7AqZvjqLKMQKkPGQ1bJMtwZdEjABP",
  "key25": "4q9iYT3ZS765ngS4z4pCmk4YnPMib9ztSAL7seN89LYTPocZ8ZFpxSRZWUXsEgUKojyusLFimoBaNyg6Gdwckdw1",
  "key26": "kPdof9vn7T5bdFUtmp3NK6HEqpJoWNsr4ZitF4rvUDAuhnePPJoouHRVgtdVk5nDrtvGQZ5BwGqfgYZi9u1udc5",
  "key27": "2B5WP3Ur1GVCf8TheuHgtTuRf8ychxfXo3wwpTcqyfGxzWE9AzLkqsUn68t9QWoF3juHD5UC9K5haQCJpS6Qr198",
  "key28": "3UbDTM7hKHEZWU8vRZa5egoZSs1eHk39gadHpJPKRW1ypijtdLnwoMeCSTBgXkFX42DyoapbUEW9AaEpiYawFqDq"
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
