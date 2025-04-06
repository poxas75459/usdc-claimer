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
    "52QvpPMrDXJXc2snABQGrCkeLb1NFigdDG22n6p2jNzYw7c9wz7oBC3TWRcVoEFP6MdAzKPFHNHAMyQGV6KFD5kF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46FCymu8toSLUcUBHsiyYVrZSUZYo3mP9LbeyUrGAwh1WcHhfpB2849pbynbRouobyM7kc82TkEziex8wzzNXxFP",
  "key1": "5rd6df2CSWbeLqPELpeoSmLgQY4BjbPTWUsbmdp6aZF1bxBrpn76WjFoZhiisZdbX4gcWuNHdM8631X2t714fCPj",
  "key2": "5sbb4ureNGBppn5Gtp4tKsJEpkyu73nviVmYcq5vJtiWW1BTe1pF9vezbFTb6UAMX6iPCHSS4JvGdqsaaSn5cnWw",
  "key3": "4Mum7supQzc6gyfnEVmCETn4pY2Csndts8px3XE9V59MNwohRb6EZL53TRrceNKfgQk5PtdZvN4YSvhwDhWDQ9ao",
  "key4": "EPVZ5JvMHCnJU5aLbeUzHHPzFQKrKhx6geNwHwcZ8V7HmwEU3wGnu5VQieSQn5dZxnSZ93E9g4XYikaKhUo4Ga1",
  "key5": "2ckowA6Pzt995jDJHzwXEKyghZ7CT6e4twKUnCZvyfmSBAzCAy9UNQCzYCvrw59tbYGTNcMkvzXvjUcZmNLzFMQQ",
  "key6": "4tK1HGkycvW3T7YdLyyM8RZ3kY6hF4A4nPau3VTm7uCkP6DhqBg2kHYjbxbAugkBQ8Bm2pgTDq4nWB1XLpmHAr6Z",
  "key7": "DtubVZrPE7Ewc4jngvRwM3nPY8mSfpf2nRFXdswnfBaKs1GDD6j8DwMunyPdE84ES2ezXXUKMsd3coyvPfUsZbw",
  "key8": "37QBnemEF1ctdDNvAtCQkLwLF9u9u3SEBg8JfmWQPd8LULz8RqSQK2ygCiLAbhed4wo2mf8xvphxWaHvMsHtr96s",
  "key9": "5Di44HpyRhCpskk26RHdUv9ovKPRXoSXqfAyNkiaFcUJAPPhVSjcvv2v1T5LUPTtSHZW8wnE3VHYay8nAg7n4xxU",
  "key10": "59LByhizUyF1XmasmANqobgEWBhEgnsPYFm4nkDjgzMzrWTivprh9uaMvzfEVwdVcu6nY9wEisGJDM2mhECJ2Hqn",
  "key11": "31ns4Po2qA5wRLN2MCD1mcmMXVV5LjFzHtxb9cS1vCoYeoqsVn3nuTyaSsGABfEK8198juP4bkBcsCE5baP9er5f",
  "key12": "4nJ9doZTX8CT7x6RMf8p7FgxphyssP9sRecYkyNCjvLvP2b6EdQJpKCMqkW8EJSjkVxHMtyuKC8Qg1D6zkGqo7PT",
  "key13": "BkDKbz4q925frZHB6BfCyJyPtzMzQPb4fPzDnACYEx2YNFjPBt28ge1W1baarCDUELoEUseKo26gmvUkiMQ3Enj",
  "key14": "2nQtRev6pwXxG7zjvdFdUPFb7KT9gGrAs1YGttRVM9D1fFhKcPgTB8TdjvmWLccHHNpQPxQBpzpT29GA8Rq9AxYB",
  "key15": "4mhzUdb1QVPCJjTC3yagAvCD5cwkzaW6m8gepyYReUd5LBonT6peXVJHxAaEKGeguWvRnfFqPQh2c6vG8xCar343",
  "key16": "36Qbfic3qwE3xeBW96wxzNyGEP2mVde2wBwMtrMTgvdsEhbnvauaZXYoLnNUBxvwmtpvWC3pQNK7MqQgjwqHfUVT",
  "key17": "4ju3swQ7AEPERvnGCqde9SxU25KoVfwZyrYnn2fd3KsTCuWEKKFXnLetSTYwZChf8in9pY9AVT6b4Tbx3MrPPZG7",
  "key18": "4aDZAMn1SbZtRFprKYcF4VhheL7QqsHDDue9iqKgUXs1K7cnMFS6M8jUe7GwzW2y93szkGbNGvNdChqQYN9c8NcP",
  "key19": "5oHMfyRRtj211REMALF7qxNbwB8tCXHC8QyaUNWWJRgmcP6onhg19FdvVLannujnczDKHpBFc25r1GK79jBYTVHw",
  "key20": "3RUiyDYJA4UZdpZQoeuEXPjANMQYmdsJzpgxsmRn3GhbxgApJzZRMpSGucmuXuusJEbWtX6L4YfS5QBBtZcz82Bg",
  "key21": "Au6B2CaX7mPXDmuVKtJKcxDkTpKnVsQdn9oMWRw5Xpa1J8qikLztc85rTRjPB7qUDa3zWQizxzenRNvFZbcoHMH",
  "key22": "4kawobFJTx7WxqEa4SURomYGXQW8iR1oyFiWYwsbrkJV9LaoLNT9MZFuTSt7Ej8nR9BiFvfzdQXj2oFiVqRyYhYR",
  "key23": "4ihe53zrs87ZnYrGTxQrXXpJYEFUinATtCP3zG2SaUC4yA9jf64CyKH1ge5AyjUMiu1t9PzeA3JqvabucEcBAB3X",
  "key24": "4FSHxW2kheyif3DmRWaedBXv7Hqv7NXU4bkX1C1fusqNsWcvh8AgL4mbJeGqoQaqfQxNxsKzBcy4rf8LuUDKArcJ",
  "key25": "5Dg2VsN7fByWnwmmaMMysfsfq45bkFBUas78cRPdgz7n813jgorYSmbmBXRAs8y8N4XXa7ZC7bSevJ2uS5isyUHq",
  "key26": "4KEi8q7iLoCij6awx7DLgDPfiq6qQ984FJatYRxqmBouCawukV8sMFo6iwc6RGSCgbHMMyuzTpGbR7fS29DScfZZ",
  "key27": "5oBJvWriHBErxwnge1ecPFKPEGXwbyv9jsVftuAbfUfGn1YCxjo6Eo125QkJWdbztm4KSdpwfGUFQyYoFDjf2kgD",
  "key28": "3yv6mSK6v4SqY5nJ8uj62fQaVUZfaxU454qCmrAAowx2NmqyexFqJ4VkFTpZB7ZMi1onBM6dkf8NKrzHXzuXoJfg",
  "key29": "511VxXtbTgDVHfXASK5XTTvLBbXNssNyT9LQGK4yfMm2QNZ7terCR7mhenC6VdpEGmQrCVrhYmaLGPZq5BQPr7dv",
  "key30": "42QGwdbQuAgdAZBDzJEqofY9XZW4vmwYRTtsNdZgGE5VWNkM4mKdvEqc5y5JYTXEbpfhKEt8ELeR2S5VBPg4qm8Y",
  "key31": "4PSTVDjca4HnPHVAJvHLHJ6ZmSCTk28NfrSUT4MiFij1jMmND8Xyg7H59DFSnxr2echauuHBgnR4rvmW7MwMaBFp",
  "key32": "2hFB3N2LDUMQei6bCcDdMAhdkLTQ3zYNkQy7qUykxc9gGeVFzDtkipjEVrqtH6TtqURgqz1tdoRvwJztLgoQY56F",
  "key33": "32GjsXo2Rvg3Q81KzwWCmXa8C6A2dJLYX4WSj3a6duQum523ChU3RrfHmcRHPvfKctx2u4KJV3EQKekFEZqGdzGJ",
  "key34": "3H8FqooHQveZCeekmnKjWsaAoPK8Pdz9ZVFNkbL19UFFv9iShRADT7iyUMiYAH8E5U44nfy9kr6Kb5KkT4qfUYLw",
  "key35": "4JJJiR37ucfbTf6B9iRUokUzGNngy5dmDvL5ni7rC9vjaRXR87yrD89kEFeekXMSovE3PnDcD46XbCERLRpTQvM2",
  "key36": "29NGNESxigHwwCRiRozKqwrCNPiG5qb9hdU1MZ51PyB8nf9Q7Z7D7TgPWtntzhiyvAPhURCC61LWr2iamsYfSjAH",
  "key37": "5vBv77d8GLskmbovY7EWoLoU6aMH1k1DrYBu1eiwqr2fKT7VbWWwZ2SLw2rt3grL7N1qEbwGsdDxPrLCX8o4s3x6",
  "key38": "2zdLgmbP6y8p4nKa4AQN6voWhVjtyCyX7zSzBU1KLaCEp1pVYSzXnGhrrsCCPsp9T8DQNCfFAkkizhU3htuHvhHN",
  "key39": "3LGo1s86nd53wGFvw6iiDq7KSxVwxRu1emLpXfiuxXmxbezKzzpnr2ZCspSoaF3rX96V3ad4pMuysyepE943A17r",
  "key40": "67ePzEAYtW7YTepj6SKuhuw1busbpCUQKTZg8GYHQ6dN72T6DHw1T2Lwt6w7bxLu4c61AqNVdHn1d12EykkkiETk",
  "key41": "4qPbfzCvT7jJJEyzszWhNU4X4hG2asV3Jk55RCXoJvdqcjsNWui6wnYHBNZwjhAWiodDXnxF2JajUrCHGGvqax4m",
  "key42": "dD84yu8GmFrKUTRjCw5XG4rZXCPjv2YavAKKXuuPc7p3MUneBZWnVqK4FHwtTBDnu2xnTiDJi2DfzLSA8zwqoxN",
  "key43": "39tHyjsokCF7WXWe5SRYcywWDHrAuKrse5Qa71woioVNEBCjvWwGe29cAAdvsb8pCAeecVw5nm2rS1MT9NmDCzot",
  "key44": "XsDLgRh2xNiQdJ4oudbMUTo4zzUsDYkC3Zg1GjoTUuuHUBLaXA1DXwMMSJirU2zzBSGhLM8FSiq82re1LwKmrD2",
  "key45": "U6Wqt1Zf6SCqnw8jKnvjEWf9KMJ7A5YhexRruSskom5jTRnVEyn6NVD3fHeCVhMoHYqaEZECornVBbVBGsQ9Wst",
  "key46": "KxxF1aZxnxCJYDK2rVErnnyADdyJcS93MmgU3tt6bgK3CQ3EP6H4S3TYa2NMoLMj1zGncJzkvE1Xu1Lv2krWrqV"
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
