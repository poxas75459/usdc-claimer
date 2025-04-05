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
    "5vJRJMfUFq6fNhAfcsF5qWZ9kuVXiudySwMYeDf1S5KusaeG5YusHe8ugxhiW3yQXWjNdVT1z6XHTy4pXUs3Bu3x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jUttDmBwhyfSnXcxUc3BbgkrVjV74qChRj2F5ZTV7SoFwSBBm8ktKrBu2LJzuZS18aptCxmDhy41EiGEJoUozci",
  "key1": "3is4eZtcRYXzLxpgUqAa7XvHhECaz9Vgz9yVrAUMhST9sjMQx2ivFLqmjcPjwukUYx7pdJ9tF8w9DoPibjbBpVMr",
  "key2": "2rQyzgM52X9dQ9tFoW6viRZT3RUFV65jgBUMm1H67QeSPRcPjcJDwWhMpxvSMFK9X6PgtucDCLAHSXEefAqJMsdM",
  "key3": "5K5Wtu2WqXqQEsjsgbXhxmDHD3xuuZ3ALoakCujR8tJLArujuJmk21rGE1jTeHpm8LHGc1ZwndbRjWGLRWSEw6qc",
  "key4": "225NfWMSRYQQqkKBxKGVVuWkCu7jfGapvm3ADP1uAKsh9GenrhCzkYiWMkLVX6GxFrzjrSR239zhktDqPvzQg9iz",
  "key5": "ZxASYWFDffvvKHiMEtbnx5BFyf1LqQW9QpB4vYeR9NsuUV9igeeV5tUY9h8pzqMX7aZZnZcAULYHQWEtAnejSDe",
  "key6": "2a9KoZh9TR7F4WNLZuekoBkEcia3t9bTtWfLpqnq9e6zrkpco9qVWugudk6CJpVfg3jvZpvsCXzWZCGkESvf7neM",
  "key7": "3v5NMXguGRxsM7mcd9x7HVw69GrnNSsb9wtHUQ3pgUz1oCSuSSB4K9sPrjz3ZayPwYVehDB5cczokrCq8g7YjVfW",
  "key8": "38ECFAwZCp9xtUfn72Q7o4pCYtizeYD3QxEMMERcCuKSYwYTrTWjN6GKBSgr4URxpyrMrzp9k1YvFRM43vanoKqS",
  "key9": "5bejHtqeW4fQcahZwkuWPGJMyDVSwqxg35uHY11KM2FzoMTdeHtM2e5HGX7TSdnzRjihoVPZbhewDcuDr8jcbq3x",
  "key10": "X2S37J2FGMtd26QaquwSSrUKWQur9LvzTTE1r2cvh8ZR32uQciJWY1E1GBwNvJVP9J7rSjh3BGBehYBnncU7DDZ",
  "key11": "5CSrLzg8hd74RLZctLuP9WEUBzNCqccSn1G3yuAUsGfkmqSh6Em31mh8YZxRZirthiyXdUQrpSHJu1JbzSqcSz9Y",
  "key12": "5joV6CS9ZNNbTPBXYei6FBcX6VNbZEHoZwqmPt7FS8MrorHRhaqMnGgyqYbeCZrEHpwf7ikd2yWRNrQVmsnCLDzb",
  "key13": "DEeEpBB9sPjMf1ZEy2co3LsFr4erAMN471PNX4ZTJZYW8SLWaRTncdkp1NR1bpNaT61pqS5UzXDXYgESPvgDSC8",
  "key14": "2q2syRsnu7jmBPWn7uPuWwSFp21HwPCzGbfLuEuvgDkWj3tDypGECBChSkYQXHPzK2661uk81ntvEyjcLggxxbmE",
  "key15": "4Dqvcc2vRxW5H5gYVFAtq8qpiaWp1VeRe4sh2LrJsXsMKyu6HqdQDhvDQx5EBT69kdJDc5pqNdqBoSmMzHgFM9up",
  "key16": "4JHqk9a87u4ez7epGWQ2qcgov4RfCpXLdRjcDZqQUva2SVZy7NjGVtSxFco8fejzf2EGsm1fTB2dzbinYy3nQ7tB",
  "key17": "5PLzedNvn6goyxY67cwm8Kina6DLsKnqV5sprf1TPJ1TKpsemJ2rBEdwn8qZ3VEaMDYo65F5asJJBvBqMfCC6wgm",
  "key18": "3zx2jqAdaWLAhPzhpMppLVaENWSHK44Wg1Y79d8kYo6WWxHLpqroXgkSqoB262Jujqu44Wu3XHVmgrWP6j5uDoWQ",
  "key19": "5Rma55P53CW4j5yAi7x2bDq5rws3HWdrtPJGo77fKSQbERxP1ND7kANYLc1iucuTuoPatNRbzf8g1XC52sRxwtRR",
  "key20": "2aQL1omDaaf2rWyM36oFReSvLVcbLgqQ7uj6kaDP1kB2ET6didAK6RKrtQ51DAPa3j2cnPEedzKiEYRBW34qEpyU",
  "key21": "41azCdkRbkQwJNBxrrGAz8AwagzNTopipAZekuXxMWbC3zUDZZRgLbiej5VDF8CrCXjCXd4CWWvXz81bpTzpK5gx",
  "key22": "LUM6Yz3AqpcXcP1XTUTYVVtaEnw8TGctRL4iLW1HccBAsoe6CaDPC8FCJDUjfkD4dkmNNnNyDqpuuyxei8pCUUj",
  "key23": "4VKQr6AsPCrrnmSFAHQXXwTek12X9SJQT6jtoEmWGhT8izAtyEfgGQknZQBSZvxUbtrhrXN58h1ZMyVgituTZdtr",
  "key24": "6dKjC32FwVxn5kxvX6R5G2fbsv2RWJv3eHdu66t3Xmu7QU7y2AhsRsJVhR6FB2ef3tU3g1eScbbseV1CLwWDDfY",
  "key25": "4qRGiM61icfa1hMjirESsuHcnAGhH6GWPff72Xwp9zHXwahDrwUv3pvUJTD14ja7fmeBacbcF4vu6iWL5MhtfJ6V",
  "key26": "3DZ3qf4RXg71xgqTJ4MtCWzxqNhFDxNMAYKr1iqiMU9f1grxtccn58m6vDVxmgtAL7Y4iPEqRytAyxfa9nitHLQg"
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
