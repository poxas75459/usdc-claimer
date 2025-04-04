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
    "4BPGPscTM6VG1mtrqygurapFSrHykHNS5f4fcfu3Rwn5fkfbpoN4xXsjpsoJKFTyBPANCq2tbisaHMXC8qHGbiTm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5U3VEjV9mLUfz7QrN4sd9teM7HwJ6LSxisuHNZTcNAHxTV84q1hJZnseHJc6pjzjAWAZ9atMzktnhytf4e8ENaVv",
  "key1": "Go2yV7LRbEXHnn8NA49PTGJRd46hXiiBHKD4LUXJfkfgscNememjt5aQRbwPawuZDRJXMztybYNAe1pJ7xxunXa",
  "key2": "67qRMRBYzzYK1yU8fchGoget3FoRtSKwDb9k8VUTfLhBDXwSmfnNcCHvpYpre24aDzzfzkCrr7bsTQKNGhKDNZpM",
  "key3": "4wHUyP59xXod4MSYaNYTJirR2bLditcUTV9KHZM4tjW8s6Efxy3hzreQ4eKtLx5gZjSUwnoeSoopwSMZ9QRacfK",
  "key4": "2P8avTSuz6E6r5vkWZVNsjyPaMn5WWutwq7ZZxTtkgmdK5oUrrzHhXjCv9aV6Nf2cjo7YHrg4xGoyiNNgPmfDYDp",
  "key5": "Dm2Bb53tgAWXPBVSvi2rFPi94FGNW6aT4BkutAqeLUA7La2HevFCAxc9EKyYqMKq3qbaFu5gt5zTCuK6G8hUARp",
  "key6": "61zzsKHiyW9dT8pXnrcGP6zL3d2ti5XRvVEb1nkG3dxL6E9XCeSYMA2WZMq9ykApZ7EPKcdFG8MK2fTGqcovJgve",
  "key7": "4SrVY4Wj1kRJ7PudYy3h4Cfey5pkUJusjFMfGyi7nu6rccT6rTw6mwCjrDE4hoVy5vhJtc7JzWKXKbk2fb4SBLZ2",
  "key8": "31GFwRrHooXAxu6y79ds5UKikTnMcXSEuMFV4N2CCnRnxzUHydPFFvtrsRTASgcgZmCkk6ufP5cNavXgHywEmK4q",
  "key9": "2oyAjXqn79aKh63hCXNBSPkWWhLvhohMRVJfEML535B27G1yUeoZwgKi86MVFnDHp5hK7C1RX8ynKSdUtVkPKBmh",
  "key10": "46fe17w4o8und1P7zGqrEnKQNpVta9CXKjmyqnkvoTwEqxVhe1zcYvh9ift2mZEXTex4bZ3ozKkXGNRdzC1dGBBW",
  "key11": "2VcoqsLY2ixp3L5GJ7RCQfme1mC5dmcXAKhE2iHuxu84JDFSm6TsaBZdD53p87mf82FLjh6dSEkCrNbgdf3eK1Z3",
  "key12": "5X6SUoNjxKW2k4KCvEHWVH3EP7KD2ueJnHA5fzXNcVg8Ry9WFmYZS9tRziJsT82kUmzrtkrKCCYRGAjLxAP5Twyx",
  "key13": "4QBn7gm5GojG1X73dhtbcEkDHVtKxykHQdAc2zYSKFNPXBYvSoWDWY3Xy8Q7mRQbqTgkDd7iLzFdGSUgpq78hrrJ",
  "key14": "2vSj8f6e8Rb2aCYumYDkexKrK8meYzK8LHakKAFiSu6zsVzH1ho7DVuLAJ2g6mPoziEAPdga4cmXTsU5eqtZ1kwd",
  "key15": "2ZEEr3tVVDXhtHpjL5fT4ZARtSiKmjskWZdc4S6VXkQojgf7wTbagmyc5FTXtx7X6wgpSZ3s1jw2Ev6QEvPLqZGS",
  "key16": "2mVNjxa3TZcQn2Uswvx54CpkcCLn3vemihHbUXgCNgxzeiGRe3Hhatyz88rGVU9p3wV2kAfG421AYXpN1cV1Zt1m",
  "key17": "2ZPhvwKfEk6guMvVFzH4xPghowWVK9ozzaAVGsZXZp4Qp4zRakxZkqw6hYHHp6gR5uda5gG4WQmQz9St7M8xRGz3",
  "key18": "2Hcc6KxUVGYzBaHRgisT1yvQVoZgtnQoutnTE91uYa6o5ibeSTTSa41unCqqmKX2Zkpv9k5eBp9tUppofhnNZozg",
  "key19": "3PqcyFB9XTsiQ8XsS9tDNediLyXCVLArWGN4UVNC4ZNLFn2ehNM3A4WubeUi5sJeyZmcJr6NDqWGGxuCBiW9GvEq",
  "key20": "4LH9JBY65M8SBJnPHsY4irxFcFxKo1vh1ZFwVfZmt99pUyJCtb4z953r9xMy7Ewb9bd5EmrUN8ubHhW2rvWfXn4b",
  "key21": "3QRqztDDs3AGgJGEp7yBEQmrJx1UM7n8ejyoyhkusqziQS7Vz5RB6uTpJFc32Qf9EZavN1ANe1Z6GwiQQ5N6fuYY",
  "key22": "3HVQnV6bUCSGiJapZVvwQd7zDibS99hZfRu9Gp9ZYvkHp8sfEHeN8oGwrXMeBENbEEd1eMcBQndeHHm8JqRWTaah",
  "key23": "3cWCJYxZ3AbepqLKXCZCy7pmrsRh1NtDztDRDpsNGEi4Rh381aKhTHQr5fbvCGmBuM7C9UFSC844Zx9MMb76iymv",
  "key24": "2PaQJA97J6pKtuvGmFbSVUKZgbfxSemDmptcGYRhyLk7QyYhvrE4tw6bKoBb6Xx4yYVnwhSWkL3uCFK9jw7b5XH1",
  "key25": "3wnaTGRfC7gbVrNVBUMf5WJYJHgmL2bh2LK7eZVE2pmfUCqvXHQHRSNPeSMjqedVyc9LAtXSPXocCgXbQCSS41H2",
  "key26": "5hVS4PShWN3R1Lz7CXKhWLmgR7B4yAtLK4Qf6stuvtonzGrBTed4MadeU3gg7TJq21sXhjqj4vn32RjhXVC7UkFP",
  "key27": "upGZHqEy16mNvLVgEsioYD1hAJrT8EPFtkAS9iP71zsHF7F9QMv2Vk5zWd1nkW1xsLmh5iQZcBKJs9jRFf4vGL7",
  "key28": "2PFF4y5BeqsqEfdJP1cLURdjvm9BzUGtfFGM59ujtBhzAmV38NwxUGKj5yWExn44oUEAHudqjnMaGRwZMQFPLbJg",
  "key29": "uBJEUtMc3TSh2VeAKvr2rMh8xW9jZomdwzL1XSgbP6FKPRU2USoL9dZGWhejZagsgWio66q7Vcp6zCp37GoK1re",
  "key30": "2J58e6uNDMQfeugLmiRjWQb7TohAQYd9SJ4pVTVDPXTjttU4TiD92cbKWFfBTXv4zTaZGjLqujmhwp4WH8PUKsFH",
  "key31": "5EConZCJv8uPz2jK7aEq7zAMmAR5pNaywn4ahg1DqkpUovwrKwNfgZwxth4YnpD17QhYLuH5VQbUqhpgKXXaNhdN",
  "key32": "3wvs2hFDAsxiXFpVw5882pAyVqRDAwSA5V8djNf6HZTegTmSVvshchP4GvKw4QQffrwhJ7N5DnSK9ispQnzicrXd",
  "key33": "4xEKAZceViFmdXwWJcm4uz9bmUf6S9QUK6DsvFXiJN5rqMqMdG8VonTtG7vNJcMFSG4wWbFjbnHpQPj3fCf53kDi",
  "key34": "28q3iGaDyEbFFz4dx2C5QX1W1P9iBwQ4nYbJfQDxC2YGxhvJZD3NDSLa7aZKzzcPkuqGwBi57861wjpjx7hzv27A"
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
