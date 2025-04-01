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
    "mpFSo38STEUSzeBwVLXEkqJXSMGqdPGz8bCfRUBhohFcHh4j41h74dxeUGyuFxAS26oz6TnTfYSdddJd9ydCgeB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ackd8iENgBcnskGVogAAJQXv4FcYKZ3ymMsRcrR7dUnEaLpzccJ1GoPwpwvJ3EsAxYY694nWZR7mtdNkGopuvoU",
  "key1": "5jKGqwQdgvttko3AaMiH9kWcLfAJeDaTp5BXP3FKPquRGxhy2vrX8a3iCsEKHwrEGhQDh29fivs5BxXyzpEfTGTz",
  "key2": "61bRMYf5YJJqfmtRPe2bC3fuHBW6bYTNyVdGcscNLoNfuHjieRw1hswhjen89it5ea8kh7FZsXCM8gXFBPqPzqLL",
  "key3": "4yPY27M8uYJrMMFwrG3KHD4A5Cw4aBAFC5DbY2X5tPDPs3xBEoAF9XzccnYSHgRnvtcbVC1EvCf6A4BzUGWkBc4",
  "key4": "RHZqjxjyGWEDzXNr5iCzmkB5YPnNM7rGddJKF7EeBJNgDcHtLuxffRhA9yBCVwr5FUbLuuw8WyHRe1ECFkktfSb",
  "key5": "4vkZFT4qqpJS6wTJ3ySA3SJsE2GLA8hKG5r7GtAcZd5xv3rMxghvKtCdbefupr4wrCfdkd3ojwhwW6fWLwmSkJx6",
  "key6": "66Vn1qMGzE6JkYkLfn4sF1Tg6bu9bWRKjzZ7rH6UUhyALnjX113UXKd2rdPLRxWawr14cdbRHXRTCPawjCfeuor6",
  "key7": "WyBu3bfeTKqW5CVyVEuXd31TEVGj9MonmkH2W9eVXDCvyfW5smj5JpsM6NAyw4ZyxBR6rM2EDZcHc9bf9zAbmAj",
  "key8": "5rJGKZ959ZjEsRpkVyYzS7xoKPVz3iUkeGFDTXQ3RLUCx8rEgRgquGzALyQvF4tzBcp8pxGbjRkdhxLnGpc5NMPt",
  "key9": "43WLvcYxQDkFVY2bY1JEx61EXHXzfok3RzQvyF2JQx8T913cmfr1S7SdFpkmtdNQW77LDjcUaFXKQzVNM6ermpwo",
  "key10": "5c3spsThGSFHtbNssKq5GLyLRnHquSX8qPimkQWujsMirkA4jo4TwdjzPtv6AFs3YcYbfKV4Ra2wx1rZUWw6DYBq",
  "key11": "4j2eVVmZgWvDgFEXQ8dBcZP36TACtEGL69dW6UDwM3JD9UoezHaFGhdkogGgPvd25ZfqjGFsZ7UU3qk7GiDNjEVo",
  "key12": "2ipsA1x2cTYKcL3x939VJYEK75SoMU9dgRww5W5pxfxRa89ma5Fo4Cuk61wpgFEMqzc1DZj5eFGvJumhr2ERdtEZ",
  "key13": "2BRL4ZNLqXhKVuYqSH9R4yaA769A6g5SNCLwmzLKKpQceh4RqQqKRQXbw6JC4aL5AxcF52i1YuNZ41HKUBkp5G2t",
  "key14": "3J4CMKY4GneSsr8mgwpRnzjHFWbzYBwPW2j1EjNmZZg4iPjHroBUurti6EJD9xUcoztRpBuUePwKvpFsaDPpxhhy",
  "key15": "5ZJoXiHunANbgarhCvjbYJCADDWFo2vXeMLeGMqrS9cHyeXyZqf6tmBhbVgaXae4DFFo2Vn3RTUZcnecv6Scg8qv",
  "key16": "wpMnfa94tjBc2ddAAji5isavGBR4vJ4ARgQsLMVWgaZX7YVavjDh5JrJTYJYRCRzkxSJDDCHTG4pCWTv1DdbpA6",
  "key17": "5rjt8TKT4HGQT1vtZ81wYkQiDkrHGVFvAM5fzzGEDjmnqsr2ZmG98Jjp6EC6bhBa85VUEE1hhMtTVUQsw7BissCo",
  "key18": "5twsMv7tQhyiHK3n53Lsw6qFVELq89b1Lm22jvTMQkDt6Pa6WAkth9iJ8pd7TEvXS6ooUtgtS1vBREyfsvCeLfce",
  "key19": "5NRy4ntwFtuFnZ9ZoHEgNFe32eJPjvMJLsSPJoNxNPyAvXLmU8fu2evZEEaMrtXNxpbdU3Y5bbjSCkTdK49NGWBw",
  "key20": "3275ob7xqTW95A7svS5ar7FP3MxgXEUzkcrPfZARW92439J5qwVnAd3Rsors6xNoayQG4PVKgxUf5TCxhANxySBi",
  "key21": "3pwj8GPZV8we6sVEineGDVvudQR9bNZMNZp99m3EF26VV3rs99u4faNwih143YYBjw7dNXo6sueUj4k42rdss36j",
  "key22": "4F2TZjXLHDqsQT1NRwFnJubEN7ySV2fTjLn93UQS7cXF87mLYYwqdBzJoo91WfX1jDL7gjsZxSde6L5rZXWTjDQA",
  "key23": "2G6pws2dkP2gcPxdKQS6xqdPiEK8mrYXyzzNDeYYVeUCRhNW8XqMMikwUSFyFWyAiSYNnChAVGeVJvwm5ki388Z8",
  "key24": "5Ncjceo1QYPFSjGGo2UQpp19cA1UyvPu9pSzMK5yDaXRVu11hwN63G4JYpwKBWgxJr8Xwf6CHAVZcKs8HsDZAwxC",
  "key25": "4zfCKhWismmQuBRErH8vJY7SzvGVGX7v6QbJC3sfES7ZCsL35XvzfTUMziM4j8K4ytcP1iY9ceysniEi4YZsBau6",
  "key26": "3zzZzdvEDM8Q42CGFKZsmLnT7UBxQepxtU8jPvGcBj4kLMy5qFT1ydGxcUQ4ya2w7CxrH7w13BFcFa7vX1vnBRPn",
  "key27": "3YmUkLCUbfd9myY5Nk5LBVA8LmKcc745E8ibFARctoGtZbEC7mVpsLkijH547rrd48TaquZrzMMASVCWXpBBCk2g",
  "key28": "JVLiLMRECXRPLAM2fmiq1ZyKJVx9MUiBcMCVy8G3kwiBG6rMnAAkq9rFp9MxyLdfxKaGHN8YeounaPztW4KGKBa",
  "key29": "LPqPACWjXFGVPrDmB3G7vWh1hH7wtUUyKLoz1h82j1UHwCs4GtMaAAFvare2oqHEt3TbNmVhfy88CnVrafENcQG",
  "key30": "ZAvmrVv3MSEziLgnmD29h3d7AXCCMk25K9hjq3j1RL7GhgrzaAac3q146adDvC6nfGjqpC5JLcTLmNx6Upw78Yq",
  "key31": "4j5mB8NDN8eRKM1FHHDWc8VmHpBFkH5Wh5zXfEBk1cnXJak5hqw6VeRu5LHGTMcvEoH7dSWeGGKohFfGn32knxVw"
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
