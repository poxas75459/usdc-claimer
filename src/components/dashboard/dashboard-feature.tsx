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
    "5Q26bG9Bm4rDWa3qZ1SxkX1wUdQUeCzjgssEC9nMzKrk5oFEJwSu2iMzUQaNN6Gf9WYYsTxkWPyUZPR2PCm4oeN2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ozZ1YE4WcPoNSWWUgfozZSiCjVj83PSkXZBWwusWBQAnyxfqevzJf8RugNJhJ2STeZfbPBZGbP6wKmMAhhCfmoi",
  "key1": "4FFjT8QPd1YmAgVbzG7kmFLBpWkNBH4K91cZeNtnQphPsguma3TS4SxLuZBbthu1XiwDGhEk2an2pcFyzpeJedKK",
  "key2": "5sVtTLgVbGRwiSQoux1A81HhrGyX3PXpx5Tt8DqWmTqEve9JgPY8iVg2LBzqJQ7LbmsvQ8tfbnyf6H6cNL8VrYuB",
  "key3": "27qN3MRomHpPJRL52Cs3kNupVQTKQTu7Tp4VEmMtn7jcYw93M6uRMi2TkyP6gThjvDa6pu5NFhda4kJK1NbPsnVR",
  "key4": "XZ2nTnhjCWvuwPM8vqx1u4ZRc9EzYEk3CVjT6HPA7341pGJG2hTjtTQqjp2CPMC8r9Zmz9WxGi6rCnGJfGRhRAn",
  "key5": "27qF7BrzLWtCDX9K2TscQyQJzaNWK1kEmz1LZLv2HwJEzJ2GsiLdtNcniv4sXRnSeptpM8a96MRLqTV2g15Pnths",
  "key6": "2K8Y3fCSz4tXUH9dveGp3B5r1SbjzN8bcMaw4iyZXTBeLiSDHvxkFxFW9fzDDCCfARGPoGYuxfhSjX1PnZCrk3oy",
  "key7": "FT7pEACR4jX9zzJ4WdLT162EcMzF69mfKWpBYZRU7aoW9gzQ9WA4o9kZELydkzkJjTjcCqeAyAb8H8HnMNRWpfQ",
  "key8": "P1LmdeLk9fxVAi6k9K2zbpAYWdTPjq8sBBod5yjY3nnrBGAP3qDwDY4WkBuPisQDE6YddRKESP5NqsPar65jWYw",
  "key9": "4UeD72N2dNAj5EWwfhVqvQ9y354ooaxTb5FZFhA3kCuK33y6pAD1tMnWC4gwyvJE75bwAZ5u8vLkyK9eTNcoH1HL",
  "key10": "2Ko5x4VMtLKccXYyCBmCy5o3rbQQ1UrB6qn6wN2rYRAZKFT4fx9zDwwfGjMVZveBFusB4v4NrmCVtcRj4kT7Ztp3",
  "key11": "5GbP3osxpBGSqNGHuEozi4fp9UuxKvQNVYLpqwVRtqF8tFtqnMapVfbcnHHv5GJC4xSLWDRF712Z7K6yX2pSuVys",
  "key12": "Eo7Jbg8rPSfzDMrnwHfkJdJh8XxbQkYdKPwZsFw6cHXJzBpsYYrpcw3DnBe5FkoYx27i2qc2qeaoU5BaMfTtmDF",
  "key13": "363ywPPYh4JbZvTQM4mkVbs1LUieEwHGsVa9vWyu6fkenW5TSA5VY8rZ9JSW3xDPBsRA7qoKXGR7Ccz3eWXYT7eE",
  "key14": "39NXNasF9RxQrisJYXhbyBRuFMJUa3fGQoqtvc2iXL8NSgeErbXKVisq1VhrJgmCmjMbpsfKJArtUJM7twt4TgKC",
  "key15": "29FjwRGkvhNqJarroKjoybBokV83tSnpNkv81Hj4kybvza6yzke18rrw6V6uniWFsNmiiT1Hgr49GCox8CuKC8v1",
  "key16": "EeXaYJmBdNNgKhsMG4hZbvvWrGMPiYNDnfDfk8hH9vmNSvXgmGBpF9pHLSkPBKrf7cgoEWFiriUrJxxR1QgMMTW",
  "key17": "tDY6sAXyGbGteeYdGVaWJz51wSarWTaBgAtcGbJh1x3z71taW9Uusd8ftXixKbgoiPiLtC73rYDui8V75KfQwpQ",
  "key18": "3nLiad1R4sAsr3bBgHKRyknuWyzMtFLJiewqk9NxEUYHu48fT6bkstd5zodPqGomjBMZJ2pCX5yNyoNbRb6Bzsj9",
  "key19": "4ZsjZPyhz4DgL3pKn3HJANz1wjXgmyrAPQqpt521f62tfMH3GJULGPNrwYtBja4MEfBYCcDiGfyJiKpZh89or5KU",
  "key20": "3UTWxE1C6ZC7UzWBS5i5vtKdLeVHH98gQGSvcWhtggZYbSaiQ97bZYB8E4APBkGENEtnB6iL33NiQZF7nEuBsiFi",
  "key21": "52tuxDUHLz9oEJbnW6KmCQs2PSfEodNZKc5wNttajbfuS65rani8BTvWvgBdAhNBWzN2jqoRHPjBuxfhCwVwHXgm",
  "key22": "3p5EnD5sFgFp3HdSE49Nt4f6uESPVUYukCqQeS7yEXiu8vEHYTnf4yokLmXKneME4nURpHbvwXKg3mnKytrf9oCM",
  "key23": "52JddDEMSviCbwMLg1VhAX1BtZNuV34BLUdJbuo4AVUVpfxcFFSBgMyykgxwCZwCvhr2wiFoZBcFUwaRhWksg6dy",
  "key24": "3Uxt1Ptk7HYWiMMKrLYRSXwuCKu2zYyFBsufNb33AsB5Psr96B1UykarLREdJQHjqRCiZ72tuzH9XtakRGRgWHxj"
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
