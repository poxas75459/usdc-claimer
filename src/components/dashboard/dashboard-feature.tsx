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
    "4C4F4zQ2XBL89ZC2KYVrRmCGdp2fKNpxW69K99VnYbTFxTUUGrE5d9N3PTok7W285y8nLbSw5DAKCX6bGXS4uU8F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VDLmfyUBEGneFPAzsx5Ebwi6s6rGKK6zFGjQjk8UnmknyyaYMnhRPbWNnC7WwxQPGXKAvYbPcdTnWEouWVEH8G1",
  "key1": "TbVRRpfjxftY65kazVMgnoGJ4ovkJLUcLPyouoMByhE8b7m9TGBE5v7QZsQzmkBEjQMRL1KpCvXheCSnEFA8YM3",
  "key2": "3fhhWDuYeXM8Xjro9uHgVVEnvd6m1QEDCePqP1cpFaRGA6EzU2MAxJxszPQkYwLJAMcqacM6iSgsFxPLECe62LYZ",
  "key3": "52gCsmiyWRa2PMvJuENedSh4kc4kondYVkXpxqr8aawV8TcwcwvMdSs8V2qgGASWr6D4zTicrXCT8ffjrLWxUg7w",
  "key4": "36zssnBfEk1UtVHePj54GBPtSdE37HMbzeT7J8mAefwmNwcLeSBWiHdWAhE2uScUur4xiCXw8NCaFhzJkGiVz1Jn",
  "key5": "4jxpn4crsisdpfn4Fq581qLxMiJ8ZXS6RCCzZC8vvue3Tx5FmQyRYhep9ufKv4oaBKabxcmqiejTxxseu6fNbmHG",
  "key6": "BDYG3q3Lmfigs1gYaBBcy8JUvoN8oCpxdzELx3MERUhA3sFV6Jq7DWf5URNAsGkSZEmCecuaFC9jmgmLQ33AMZq",
  "key7": "METYzBHTAnDHdQJPw9EzfJ1QKqJrTLSQ84j91f3Hw9VCV2R1hcXjafqhXUmjQ9sMKqHE2eXoCXRyHwWvPFHYFDS",
  "key8": "3BcVAUXCHrLXTJ5VN9uHwcGAPfz53cVUBpNgXwfFG6LZp5FLs3HSeYLEwyCwDajw56NQVm3C1SLV2EPUtsuUyQwG",
  "key9": "u6AUxo9gTjytKEKqsMdmTDnNgerUeQ8Gsd15KRieNK6BaU6u9PXEkiJ2ytDnN1iRBVjAKfzd7PSGxxa4uLDQP9A",
  "key10": "4u6irLx9znMTGyp621Hj4VJYVa4XLS7FQAdSeoq3yUMQayjyEHgc7W1RgqUvy5HGkCzTmaUbnrojdmwo72LQZkBH",
  "key11": "3vawBQbdjpxcQLTwuDyF4kRY6B7kLhv7W1syVsNKzCA6hgjC9Ea5tFgeyYoEPU8gZioBfNFsrbrVUAq4yNwAyQvz",
  "key12": "Zy3vR6DAANB4c8gUUV3cVLwsjrkTbZ631VfhGTakaiBHm5ahVJPbQGvvHDKwMMhhHMMyjbwkjQULdPGY12Lz6Eh",
  "key13": "29c2tZoiKS6KgXG7J4tW7CBjrjMy9TNj6qQkGbrVJvPFUwWzWtqUW4r9xLFUHNpWo1nYkzDZhYF1eLLAUXEFZNQw",
  "key14": "2ijV4f9f2PsjJ3jLBf3bzhfkPrXeCyYCyf1iyASPVsfm4gJVzFFi5hWwfBpunPPfCBhUpSH6Sw55geDU2jBQZ3bu",
  "key15": "3W4PCexvUwa9kPqR4UgVki1pKBdMiUp3hbRVgL75PPRrju11zr4Jf6V3Az4TsXfwKWCpZmegn6AaqgM6DEq9FAXh",
  "key16": "5cJ41LtN32x9Vzyxh81EfXmEchjMBf9wT3yndKcGLMLcDCLJX7sXn7D2GvwWaTwUmCnoRknoAC7M122YtVWCdmUK",
  "key17": "ZcC1tHn6y7HXKFwBVwF3ujdqrWUotYcYKAiMtBtRzZGevHuNcw6kqy66Q7XmYqJAK7L3Kg4jF691o6PseyVshQE",
  "key18": "4AMx4dUGnZi43QW138F8NEprpbmhggVJZLZLTVx4poEPtkTBKvdVKrcckK1jWxiUxH3Vt2MDo72HQ1gpD355LizD",
  "key19": "596gn37bvwR6yWWhHiqTwv9a3YEnhZKP3y5J2Sx5BVgbWx6LEc7saoqMZgQXxJQ2PWf6hqrRH6qrGqbErwdibgku",
  "key20": "3wnRXj1ZGB2pUrs3tDF9aJoLKD5m2gA74J7vwEPdLf9etECdE1ox15QzChZqSpiPpnXGKTj4xYEGWop8PDow3A74",
  "key21": "2dsf76GG3PPeyB8RWgFA5DBdLaVyDvoNrr5cNXvpAsdNUfxBiPtFYnnCCVL7GG7vEXfG4BErZWhNY8qdP1QwR1sm",
  "key22": "2W4ndBdL2QCzsjqQYzQK1kem8VfNCzW2X7QSZQbmzzDyLE8tELSR1CrZ3dF8vLLfLumnJJWMGLYkRSdx2aYYqtEk",
  "key23": "4s49uDyNehWp8p47PU7hFgrz5pdBAUxzCiFgUFVDVRoNe2USzHmPBzKnGTWQmK2L8Rm5GksmmJqmPa2dHjp6Xv76",
  "key24": "mbRsEDC46YrCVhXcDci2Hwnn9pGW8qPkjPiS7Je3M9sXSJ49q1BTYTyuq3BJV3FEs8Ggta5Mbve3Vfvj4dHRmjs",
  "key25": "4XR9KSUzd2hzZnav78heKgpXrAhPrKENedV4u6Hy1DZPcpbYfAr5m7mEs6qHm4EWo7rcdtx5bHDAsyVGTFfVuo6g",
  "key26": "4TLjPrwz7gFd3MuJsHfui5CMH1xN4SY4MBeJpxjrqVKqCTSpdr1A1RdhiaCd2qUDxb8pqZzVs6nm58gZ6Ag74KLy",
  "key27": "5Lhji3eDbThZDtAx5LDo4TkXZeRNzfFmqaXAdV8DLgxs9Jw3bDdKJTF49mZ9DBngcTk5RWjEakM7K3MsVMzenRYY",
  "key28": "3wGTkZx5f9uK8RJWf1CYbvQFKhSKHxUYucyxtgLhs4MtJtmAmFg8qk7jPeNj4LazepXNJgTwkSh1Qon4vTzXtJV1",
  "key29": "aNLFNqC6qgCX3sC1R9hNPpmao8S3DhBJNAY2iKDMJX8gxFYWtH4X2bvESnMGGuVf4BVY4isJgxm3zke27aNUqva",
  "key30": "bGqmcNp9JkkcqGGM7JySMXJEHnZtADfeZutv25EN4rKmZHb5kfazbS2CVy2GnJ1m68TmWqu3HUvFPxtySKySrp4"
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
