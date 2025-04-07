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
    "4xCuSp5FBufejDd1ycmNk7nxtLZSFjgwCtULKfgnoZSiZvkDqVJXeuvjLYfXPWLhHAWRePx3xrFpB6dMy4xEJQ5p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Z11NbpTxcZuVLwrDCQfsufQsPYEZHF2xH248DP9yHNd7EdF5XGdL4SMM59N9o5rQoheRfY67rk1PM5GiqSKGJi1",
  "key1": "5Fa1XP4HaKxHeRXzhhSzyMv4a27jZ1n7Li2RRbfrvFDAgwWUvEtr5nPM4AoE6zESN1DfM6WXYDaZ87TCjGXpJHaa",
  "key2": "57HJn2BsX9UhdECBkth1Jh1aEhnTonyjUQF2S4mEc2TdRGWjcFep8FaEqKHVxUwnb3diVUjL6K5hw3EGQpMftjUP",
  "key3": "3ZZsrF3psavQEDCYs5QLuiQMUxLW7bsTsrtvLRFUtApX47D6mG9dCKv2di3pL4D3drMShQySFnfyowbW9W32uszx",
  "key4": "56L9W1yHd5aVZ6Em2jiPaSjTgpDv8eRfZxo8LPPXMUYx1tvQVUmF4LAqjaZQuu94Rcm8h5sLd1spkz5ZKCSs8wvF",
  "key5": "qkYr8FTD2wGha3xZ8yckjbAqwQHCgpHgLPvxHNzQEXvMD359hhR6rGAFPM4UnEEsLEPoPju9LdSuSR1JfuEs2T4",
  "key6": "35npf6yBoWKcKrKtPMzY8qQ2hhB7YDRkst4WcE7VFU6VqQ33kAe5y1nsZDCtNs63AM9X1t6spT8DgCnxYHfESvj1",
  "key7": "2g3MFgjJWHbAgskiamV2Kb43YedaK7sBvu9uQvB7FP9j6gf5EgE2P8bqU87u5CWZ5xQkbYM3hGq1jAc1Xmp245of",
  "key8": "2hdZNSebiNPrwq4asTxHjDg1TSrTfkD9EKUTiRKNvZ4Wk3K1xLFB7N3VHBigfz624yX5TZRQUBNSgakAwivaFPaG",
  "key9": "38r1aWiUJpomDAPYhdHP4r6xcYdjsYFYXpFK8CWTJtdk993WLBGhw4dmrhaXbS91BM8F4bksJrvToSbv3JtZZccc",
  "key10": "2yye53ST1xLg1dfNg6svY26WQG5J7zQSDnSPXCTQeTyr4spXyG4XnzjFPTrGintq9dCKck9HRwQC2dho6QE7Tqdx",
  "key11": "4fr1uzcZ4LvMg8Zs8RtYiRxpQ7L6j4up5KPBPhpPuWKbY24TYG12UaoRMXne7BLGfzEYu9ZarepviCD39k2G6TsV",
  "key12": "VWvnDy2zh8c4Fb4zJZJt1rH9DTsVdB96piqDLuiNybsx19enzFEwA72oJXrqNotCB2YrpDNuhCdhAZCubp5QmCJ",
  "key13": "31t2Uzv3s5QnNnioFQFuc71y4ZF1cWxihQzMH3TkAQ9924RfAUo2e1LZy5NTRhvrZvgSpX4ZSShmKLCMvgJcnfP4",
  "key14": "2thJ9EAHRwF2KnDcsRshmrW9VqmWghJ9aNr3BhF9qjKNt1A21vkeYNwT1pjjaveL3j3gpMryRidQfNeGQEasbnUg",
  "key15": "DqBqbuPmJRHH4MYMRMiqrbf6D8zTRa6fcoML2uP59S6jiyQp9jarGWshHieD1GuTT1FGw8BfhmGnrwvVCWbTpXp",
  "key16": "4zSxivVQnejwjW8YwYKxDNECtv2yQe5gGYK76HKaBex6WU9uaG7sRrkpqqEAfaKKeqLyMvfHhnE9NnxKWUG7w7i",
  "key17": "2JKKA14AwZzmfM7bhy85G2At9bZMWG9GFkkRWEpC2UQj2gpitPKAorcK6cgq9DV2L6yU3BHucj4jgkbwyqcHSx9q",
  "key18": "2YaiamejzVGJX7coQ2GM7Y6fhJESPM9JiPBVthknR26k7YvCbVrtYQxFuh9YwFNuo569GunuDRsRBRUteYD15Nak",
  "key19": "4nXj1JDDnhjNuCNh9jDQ2851L5aLQwxkfTBR311YL52BNB52dMTWTqTTXws7QGFsYHNAVaPZUjz3wfoZTVYcpS3y",
  "key20": "5EPVyvaJzW8BGWoyUT88LySD43gZDXFaLsstDs8KsGxfmQoyLRnZUkKUh1JSgRyvgFT2VBBBpwA5MsnnA4TXQ9Jd",
  "key21": "4CsLH23jH65cLY94LeVXB31YJBevjrffsxW3upXMR41E3A9VWx9RNFCm5yJPozzGXRPQUtEp2Nr4TEy9HeNynAQx",
  "key22": "AdEQyhg4kjfs5Zkn2nkmXJsPn9TRhU2EjCYYBmSn96Viausajq5PaNEAPHngekbfq9ZVBY982YfsVdZVsCd33d9",
  "key23": "4CNW8jxNTL8qVRpP9Q6vVQNYRQGbSYfaYsqrRMMgFEdCoWnpzDxQwF9f7PXmZgxLTE8bp8CDQZsTKhf8nNGZcSws",
  "key24": "wtiKTa6TRzESHXZ8kA97GeF5McV1WbNKsMLKDaJtZooNxaC9DRPaHNAGYNG9YgDehZBS2iBEQXSyTuKw4T9id5q"
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
