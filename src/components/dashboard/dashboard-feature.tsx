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
    "Yhory9o2gQDHsBxFTARPx5pCrMU9PvRqytu5EynVt9kXX7FVoVsT8EAxkXhQ32a6Sgmpwkitv8VkfBfrn3LUt68"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67kn4dXBtnpRt1N81zenBj5LeAPGs64aD2hQwTwv3txUsa65uemxwvZq2EN2BKGDq7FZQgYG48kaP3Ao3f3RiDey",
  "key1": "5cjVpHFnNMoYWk7Jx86VDE1i1oPNFtMoYpNtLPLmyLwmkKDeKp1ja39rLERwyKzsrhgLAhjiBEXewZLb9AZFTKhy",
  "key2": "3LJUfJVdYyKLn6NSyEHynbDaW4zGyAuDQR7Yip4JC1cUd1FrVUz3hjTqSAMxV5p9mvvkB9bHxvGhWskRYjnz2mKG",
  "key3": "3uhuvBoXHMWUv9XG4ZttxHit9WBRyoBPWqvF7KhmzYMegFPMye8J3EPfwGstJ1w7hayVUce2wyfxsYKu4zEoambt",
  "key4": "4pC2uTNbbHLPjfpU7u1d9FYYyqfT9dB67hSeRpb2iQtjBCMxnZRSxMpP5ADnGS8n5tx39okkrtoWoYoaaBNGARra",
  "key5": "4FK2GfBEkagYJ8fCAs8wYGtJfUYR38ucoPvgAMAuch2CcoeK7zhQd9GeURqTrkvRskCXBEcTaUeMU3YRf5CKC8bA",
  "key6": "4jGTaagaczxCyJRXPi3dKA6xttvSg9HLseNo1Qkxr9BakYx1J2PbyBW4tL6BbPs3jLGo27mZ1dS4v6ZTeJKUmZoz",
  "key7": "Y7bTmB3yRAUC46CCAqJtwKQwonFS7MTjYPGR2QhanJjw3NJN7G8fNXvqqYYNaYXw8Z89zFCQ2Q5qDhnifNrmHUE",
  "key8": "55ySYbydkeyT9TcMY4q69i5ingXrfMxDLZqjB2vw2nRy4Wt1SKoWhBgmE5JuVUUA26v5wt4zup8GwFCSUaFyZwgF",
  "key9": "3PBukqxArxcbJu7XrWrWLvj7D9JH2bJUyCi6GniJxjmcg1LezNa2kTYM5R7Eie3nP2QQ2MER8M1WCJTLyPa5gLz",
  "key10": "6256QTSVyNkWTWHVdapdk6R8cJB98BYgJMfErhupuezpwL9qJ4pdWqv123DokrfH21CEPCtRixo5yNeEWqf6bqV1",
  "key11": "4ZYAXEHM8QmvujkizSUVbRyHfUBwXGNQuzRiLLV5nyoi5NCS8TMbvoYqRSmFj72U5EQ8mcr3MmWy2VcerzHHTcwf",
  "key12": "3WPHWqojtUpjAeCfJ6rssAYMTpdVeU3xrVAxGdk1oUD1kX7rztFHvKwiE5ATn1gnEFZqR3MuZkfaGPHzmuUvS4Vq",
  "key13": "3dhRMcGDpenGaNauzsNrNEiuiX28Npdsydv84maARnDUQjSoVRtLjXsRtcWjkA32cokjhNJPXjc56fKr628vmUhP",
  "key14": "4FkWJR4BTWbf4yXTjns8PNVzaxh8uTSjPbhY8cM4xL2q9BGsBAQz9xEmnFDpVAAytNRzbdtKQwjtFTniQsapUE1f",
  "key15": "24TeoCjoY8VZEjJxPgMn5ahsF3m3Agi53xnLLB12yLWTvXZiA12ix5xRg4LkfPAPZeHC5bHnZG6Ff6tmuuixwTZw",
  "key16": "mdbDaTfwXyaVQ2hkembJFJKWTExFc6pWRMAp9LE5DbBGzCR5kbzJj7gwLnMxENhQvbZNEwsReaja29ftXrjchJo",
  "key17": "2CkLVosjEEnuoVQ2JU2qjcW9zSpo9rfArKtzMR597HTBcLsoBoeVgYmmafRLcesaXhYaRdqFUYsc8HUwGSJ3611E",
  "key18": "2Rfu5widg1xMTb4EqMa831DvEdqtiZZA8pLFjXCPinDjigz7kL3FtsHC82uzeDjqAGYsxziPmED8h9gjYFWcRo1a",
  "key19": "3LaJnC9kxuSdwpv76rLuj86PNFcgb2B5MT71rvDsGFBgnUBT6TGop2qznyBBcFMTUAF2FLsgh5WBwX3xDB1GWCjv",
  "key20": "5jkBw8QCAZUvjA1JwfnDdYmgFr6MKR2HHDwho4ft1vpiKAZx8X5p7WdabtThgw6pzxxfJUhfhFQ3vNm36sWta4dh",
  "key21": "5tVXW6GUyXqmDuEf7ZGYYxVqJkFoL7Ad2Vv1MTacdUoi5W7xmo3JQrxGSYxozWw68EsYpB8QGUBjgZvWBvKWZvTE",
  "key22": "52ix7GHKMDnsJj3Ns5EBUHisFeRwGe9HRbxwcmX26W9P3TvR9eNdGjKWtWRV9ZngTdWx9udn3V2F3BRHHqTsDZho",
  "key23": "4p7MjuUiYLfMqJRKrLseuTnDsdyTdnnK7KFvoWV9WQAWLUFF7D71ESwmL7qQV7wzKL2gWEqjN5GLeNuRF832CVdg",
  "key24": "y56SJezHCHwhwhsiNyzVGoo2FXxTCTWaq4SrjDZo9W3acz79RXUAExfyPs3dvPfmbz3gneorTAHT7zbghdQHjoc",
  "key25": "2RgHshm8cmLF5JCGafZeJ9SPtYMSAY1Nxk2hMwBsHawoHzgviPGsoUUVhEqpYpGAnVtcUFgcrrfEecNCk6UXHPfQ",
  "key26": "4J2A7i5WrtzxuNmuma8pDTBWFxjutFgRgBqRWknnAtnSyTHNj4n5aqEkoCo1bAXQdq6u2kMpEA5pmYS4nFn8hmng"
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
