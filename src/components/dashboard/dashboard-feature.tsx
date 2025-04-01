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
    "iRtwkQzDgWJfMvC7NgNULKzRy7enRV6Rf6MsYdSKHVJTzjRM3rQH5p3BgrBtbRAUPQiGKZHKwvbWWNz74FhKVXd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PstkgqoTDMfMN1iFtc6T1Nmt2FhW5zWmjGnffVjMLRknz3VXNfDEkpqSYQ22JeQzE4dSHvkBX24o74V28H3haTj",
  "key1": "3esgChTyEasESVCg3hyTmPrVPP6k6V3Q4BNMuMQUaomXcJDmzKGy6fH3pxVxJ6cr9w5B8kF2CVzD66NSe1kmH5DH",
  "key2": "4pYXh2ddAuietRaZzCTEMK5ACpxEHfyjY7sgZGGgD4qGoQpauubSHxDCebx1QbdNa29mMqGQ9AW1mNutNCVpkaWY",
  "key3": "2cAM1Es5stKVqCr7FU7RUYukX7iAadp5ReJ1utvnMwvYxaUetBZGb2MbesUakNDSbgBng7RECfD1drSEUT5G3EG4",
  "key4": "2URuZEMdsq7w1Sib6kD8gqLUKrR11akHHqnXD5CratMtMZYRJHt1ZZN6PPMg5pJFL9AyS3dszZVgKLFi1QbTdiFt",
  "key5": "2VD7hVfhqGrJqQLJnuFmfpykXh954CnrGd1rUVM3L2KzweyNyHbBHNnGS3t86R4PHsxyaozdBeunbWCfmcj5Qgiz",
  "key6": "4sBTUrMRA4pTwuSyvUukkiSsZnBzqJxznhNRmRCnJ9aFtJ2bKjt2BkH3siQBmaQ2jurFT9ta6p61UgkyaFN8kqJv",
  "key7": "4kapZcJyD1NZAJn7SpihJTwDiLoMPKUCyLUZLxppXRWuDfnCGPbpP6hej6YdCkWEhUfb5BEXxLQ7C2jWYF7yKyER",
  "key8": "4gJDnBoJRS8G3ukkCvYtmyBQMMtazC9Yj54cJn4oF3FQRZnz3cKoU2aS7eJNVqcKsvqF93gaLvEKkeaSmTEmYFLg",
  "key9": "4YEyTJYh5mzT2qycH4Q7T4RiRpYeBS5eUEYchnyntVG3YpuDP9pv5vydYGJ9tZ5wRhb375vdsJzpPgpjoDPZkeaa",
  "key10": "4sb6nJxstbCJdezqmkCN77ku34L2shdwM1NTKziuf5FKBmX6thitBH33nPJrixMMaiPwqTNPXdNaT5XFzPoQnouk",
  "key11": "5FLB7GrZMWz7XXeV1kfRT2MF59hFQ1qvaYPoRVbQwCX6RCuNwMWkhGvcgRQ3DYPJd3PGir6Gyxqk3VuDqiigsqhS",
  "key12": "56W4GnGZofgtzRi7o79VkLY93YatU3X8SFDxq1HSrQnuEvS9XGUoR5jpPBYrFtiENxcwPFP2b52va6W7aUX4hWvU",
  "key13": "2UnLAgngmSn66HKZX3Ao4yDyKn3FwCok1dEe948xogJ5KRsAJft4CVMPSzzGprqKnYgsQunqdXzND3e1qH3ZgDEu",
  "key14": "LHnYXBx9kq9jeDDFPM87rFcYYykR7QDnNoBBkEB1EDJ3nJRhyZ6FTNHcEk9ME2ye22ABEZpmmqtjMWyvaxAkkF3",
  "key15": "2sPcoc7oqmJA23PsvaYXtDwaLpSrnNWg7eHkhjJ4pPxjxm3pRpWWKqFXRmnLJuZKoPJ7YFMV4WHGbHDXAcZ8z9Mt",
  "key16": "39aiyuVFEfdaELiLHJbAhLxcmjMXjeZwFW14G4zcZGdMAgn4ed3FC5KUR6PT4EVDEqd4Pk2u8hPdDFan89bWsutF",
  "key17": "2HNdQMnixwBzzPRuJzDs5re52QusQQK6hWYTo5zMMsBuXa4A8aABzWDAQaYsndz5QaDTwByp3zHwMq56aPnBUuNo",
  "key18": "sHrFbj1jzjMo1VJ2wVfDi3hrrGGYq9ZJy76bDhECuJw16SZ9wPUdQNY3ZnjWHzuNT1gwGTTJoUoF8E4tUrzArWZ",
  "key19": "HBfdesKAKxAW9T4GPdEVDgPXFQybCf2u1ZyBiA4dHzvmdNAJghv6KpRePqQes31Q9F9scTJGJVg7hVXixUgYQjP",
  "key20": "qK5RpouQyqzMqKdVBbhxv9MtZ4uPuGr2PBXyR1eRVnNLFTux1ybEHh8tb4fQCRZHih7yCRNaLBcynaaB9NRuPVx",
  "key21": "5ndc4A3eRz6gavY5oFoTokufBymc8mBzji7qoEzqCPYaRUrDNHnKcE6vUKeN4XjSGkU26jzGp5YTfxRoaNRki7Jf",
  "key22": "4MHR2avQ6789dHKCRdgfD7JyhmbYUtv9KeyRTaUPeRi4h7UvxQoKY2VuHRQmZdMKNh83kfhipcp4vknL7HMQ7tfp",
  "key23": "5CqE5jxQQbTN8EBuT7S7aovp6i25AiubYUAdZRdHDxsvth3K2qBufjGce6RuoWAvjyt4qELf4DZemgseVK6BqSLk",
  "key24": "5ibo5MFWHc4KykphxjY5Nz8UKJ6f37tFtSBWn9EMitt414cWs5w8mS5FHqTfVjeQpVtQ8TkKinBZwxLKqfbqHVe2",
  "key25": "42xcUjGrYR6zXUxemWtjUd3mEq3QPmrSQLUkaQT6tjELwYWT9RkwDQd4kJaqoLzfvJWLnWhoMwJNtcaYE84ZNYQY",
  "key26": "4jG7dV74n4kfCmspoy8LvVtUPTC6XaeATwrgQXZjwsAkWzjWVkWLYWKj8v7JGGN4ekP5LUPw1XXt3oEtpGKzeotQ",
  "key27": "KvpNR4x1oipXMd5mQHgZgqCnAo7G3dAHQpm9NULJvhmKWV2mw7vzsondKgY3HrVgohHs69RfdVkNeCFujNV4kHy",
  "key28": "4YgCy3oc1BkZFv7Urm7XMCKBtTkmN6RMsR1peaHU7mVMF2cnR8La6qJEhVoWqxgHn3ER8Z3im4Q9t5YfdsuyGUMY",
  "key29": "7T1teFBnMC4s7evgpgjvqVmDCFcGS9Z6HF5bZSyqfW3gz2XKsqgmM8rBRoM5F62tvEznicyGHK25rLaQCv68QgM",
  "key30": "2fPmXUTCSn31SEQSBtvtKZTX6wMz5cDvTMQLsXq85MVPJAkhdV2PcbwMcUAux9CDCn4iwyfUZvk491Z4TGNV1FPx",
  "key31": "5MfVHiMZqor3HGmjZJVL5B5vZR9pg3meJUdYVtGqUrE6XW8K2DN3YCQYKSupsWCnzYqHVx2iYvuk7TBDKvm4SLhy"
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
