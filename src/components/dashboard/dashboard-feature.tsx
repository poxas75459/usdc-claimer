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
    "5ouc1aRMH3mB9UPgyEHwS17DnNrp91a3cfKx8zTdEmfKNrEbNm5swhc266saVV1UBi5wBVwMzBamUu1yYsFSaevu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VUkPueds6hMor1AgwPQx7iUdxgtMr1hkuJRjJAbQMcMoyFYj3KksrzUZfdVQFKjHUUREFsPAaYWrxy1JEDb18hN",
  "key1": "y9ZqTJjoUE63imhTMxgHZmb7Pu8TXuWAqLXaN49STkijWmA6kLpTfLiqPXCoRXEcZYuxwgX5bt7mLwSRbYXL8GF",
  "key2": "3FPxfcoMa997uMViMtbtKDBEsYWwwrEVZS2VTKVhAgKnWL8itnzPqifvZKq1PrhvgGdeXS9VpsjMcB1Tux7secuP",
  "key3": "42iG8mXE79UTmZYi2qNBVmDu7mswcooDGC9CJmCLk5dHo6JTNL6k8zp2jjTmYqTRS7EjTCZ9CyTDAhKRVDheVFf8",
  "key4": "TwA8Yrj7xgajz7tvq5UHXhKN15TH7wQ9biMkqi1UtH77QhCbisoYXjbF98B6Xpj6tKBKz3yJEBjK7gMuTLsvrFg",
  "key5": "5vFSvKnmN694FRePkUNuCsToahyUYAVXTrFE1X2EQTKTzZwxchsmnbTEQRxtDdDdha3G9nEtBv7gprukCZeMQ2aq",
  "key6": "2BoRNRBhSq5HkoryMPWKHxvHaDrcbJbiDvoEjR55YhiHVHxDvVvaNLFrR3aL74KLzprs8aGud6ck4rvyVG71WkFP",
  "key7": "2H6Yie5533YtJYLDBM1PPmziehb6zKEKUThisccyaSNBbyutL2sioiGjAsjhtnpD4GqcpU6ETcwRK1iFfu3wffUf",
  "key8": "4sFkH9mP6uhSoCpckTNLRBYNY3t7d8FdEYt4HBrHqWb8PuScbS8zFvGFmYnjm3TDEksr3ovY9DFR8BcBQV7sqhSm",
  "key9": "4HL5S6WiRk8xabeuXP8YFaBVrx2Hi7phEGF2Rw9QrseyrLLLmJQeSDoZnPKsderHET4euUx3RE8Y6km9PLFeMLPj",
  "key10": "2Fs1beRbaFxAoVumNX383V1tbFT8auhVY6qHpUa4c9JGW45svxnRPLvPJa6f7giHanTJep9gDh3G27hbxnZVKkEG",
  "key11": "5VEqvNUNuJuafM8z3E8AhYiKbEABHHaB62gZnUAondc9XUintwZP3ZGjSeJsT7D6qx2VtdTbro1YDGsWCNR57xHj",
  "key12": "5QTJaXKsNJv7njZ6uaG5fLhUDi2nerLGR3z11FTXVZZ4Jwcx4sg6MZmL1apDreitPasbmvZQ56u41m2YmQSQQgQn",
  "key13": "3gHBCpn3ioSn8J5uhB7ou2FMXCHxBjwiHKscnuMH5dwZamqmQ7Z2iwSbHKDHxBqFdsL11qozZ5KfmzfuiqmczYSk",
  "key14": "5mrsH1d2Pqk9UWo1NpfTvCUz8di6EKxa1W9EBmLqoNNPdP6UBqm29CVmskx3WMs3J4Lu8GMdRdVsGKTFTdgNvqRp",
  "key15": "2H6qzzcNHs7u7K6xLnuAyXHLkCUFv6g8AZziopemNF2BPD5w6vW24gBDdY7u2mkxx7EcMu5u35MCcPmYQa3hJAHU",
  "key16": "5t8BtYEUoCn1xCEKLTSmRLQ7zRt6LQNT1T2sH1S7Uii9nhTniGyRN4aReFiPS7Y69gt8RHKTFj11wCebTHuQpoVf",
  "key17": "24uXE97phJ7tuHDuJLdLuWa6m9sjyJsgGkjoPFFSSZcQgL9A9Bnm8Xnf7iQevyQNKz7BhVBtityunWEgJjuzPw91",
  "key18": "vW8cZAmUg8KPtHWW8SgAEq9QwjMKCamg9eTXXVakewMtTVkaw9XZgzbUzhh6163vBYBxESyiEsJVKvuyfAF9my4",
  "key19": "48EiCN5BzecLgvvWdNAfgFZU9nYmUJgfVoA8rCttqrBNRpU9AcjxwAjEVbc2yBG2W79B5QLLi37fLLfBo2rWnSps",
  "key20": "2yN7u3mDzBm7x4ohxERAXjTG4kJReatKUexJG9FCnsxcDw7LBtBu4Nd4D7nShj1JUK48W7rouwzxZZWFMs2cd2vY",
  "key21": "2kAy7YRrEZ5YMj4pSSxS7AQuV7vgW96Up1EHDdra7n6bksrgP9dhTz7QeiHqKkWj4GZti9yjirPnand4AppPajEG",
  "key22": "2cw2V4UqeqMTiJg86VFX4hZyh3P4VEV6EgxZw9aLYb6jU7BPagyo7627siX1pRhUSghf772TAV8dzcfbW2QgfEP",
  "key23": "SXu6sMCVydLsHn6yAmubb3wTWEWQTSAHqzwCsU6uF9xZ23VAgSt7fAE9LKdYkn7HfNKoMMyNHwDtFo9URuteAQw",
  "key24": "S5LEUQjPqK2XR5ybqzkrzbV7acGWvrRiWu32GDmbBPbjk2CTD9AmUnpYUjWjakEb3wXDnGEDiQwmjrcFHs7huWq",
  "key25": "3enNSfvy4soLpEZtn7oA1zynkMTWwyvSWWCY1z4v61tgAKv5qvDH3zJF1JAuCkVu9oivSJqMoMYs9Tqego6gv5ui",
  "key26": "3kXevfq4vgdhJc2GymS2iheXDsQH2ChTWdGME3MjwjKXYgar5igs1mWsM9bfntAJSuGdQmVRPEns1v2Lo11LprC2",
  "key27": "33CavhQmXZohvGPZrPyxj8AzGzRqaWkgJ3cgWajes3ktiP3LH1B7JZ1SHV3mWArG4BtBv29dEGky2kTfRkNJFU8T",
  "key28": "4GdztjhqoJptTAtvaua6n8miabnCzXkUR9DoQZJ8GnffnMFN9mLfgbPY5pPZBP8QpKUG5HNZTRot4W8XStXn8nfd",
  "key29": "4AF1nwqkWsBmhFxRRbtbprJpzNzC9hpfKSkZ1eBsT3j7qHSLqoSoEGrgr1tDahnseKy2jb4Z578EDXkbtMHbnSm5",
  "key30": "2Q2toPsFCLKqMcrJkezFpPySBbQ7zfEdtwY1nKWn7Kq4ZfQiqwF3ALeimFYFY7xwXFch1Ebp7h3Y7QnNZaNDbquw",
  "key31": "5mbDjMu3xNZwRLbd9VfC42vtM8owdAsieHpfcZwoc15wkbQjV62iRSZmgKSye2pG2NqaHnjX8D6BBjjDsFKyfVSz",
  "key32": "5E3YSymmZgeiA16jgoe2WkdUPvKTEa6SpGFCbBuQYtdJMba5K5ZhVoxbJ56PgbseHRGYfUd1bBDsbpLhc9xxXwHz",
  "key33": "ffbowuoHPoKwGkRGCMnH5k1BQxFxLBFgBCmjJiodUjLjJA1hDJ4gnb5XQcTvxiWADQArRXup8X9jA1s4Z2BPaUr",
  "key34": "5tQsX79hyh3uB8oreo7tUYtzmHuHm4jNoci69ms9E2Ey741AAxkPRtiKeMzAQHfHABNte8AzxWaJnVLL6ULdXdEr",
  "key35": "3eet9hB5Zk8HJscgZciTKB43kYJS4nHVKPSfdj3FgTPDQJcGpmPaMqDVrQiFSkydZcypm1qvzmJePmCiGbah1kQV",
  "key36": "5LpdjMJhARG9hy1BmZXY86QH55jeZPJPMayrPFetm9X8uEtYvnLg6p5URjX698AbT71Ab17sij7tUMKf9cCdH2ai",
  "key37": "4FqjJ5HEtQW2HAGMCFhMdTLBKqhg6sfXWV2iVmSKYhwq8ZZWrSPAH4tZ4oEJM3wUMFxijou5r7x4Z3vjSn68ZzAz",
  "key38": "3zTNomciHnpLspeufjrFETZ3kUchrpFhrAuAeN8Y2711nyY8qudUB3VcKuRJbyng3zUaWTCJKDyoM5tU1tuZMG1L"
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
