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
    "m37AprJodZrzKcB4h6yeMNVcyAWics6mCdDkwrwL2CPSo1zEPXEH68wGef2WqvAYfy56QnHk4tkLCbMpptqu3q3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fRg2eJbsPMkmptggH66XCMars6t911m2c9feGF8Gns8fL5pMGbYFmybbunkoLYWae9LeDzBTLqnwUzbziTeTpyo",
  "key1": "1q6TFB5i9QBiqHEn21rVLAFBaLtytXLCP1MNqJWY6vjtaXyQ5jtVLayNPHNHBRMhg1DF9Djr7ak2yGgi1HzS42G",
  "key2": "DF3E67niSeMCoKAjLorJnn6jutAfDDEyDCApk2nnxUxYDhw4Y9uXV2VzS73J2XareTGLeHqW9a5a2QwFvse3hFC",
  "key3": "5YbdosKcfWnkX2aWM5nH3gHpSfXKoZ6gWRzWeoZTbq86oRkXFmqKZuajJdCrSNj45PapBifM16CU9X8PTmUBL7AR",
  "key4": "45RrrB7T6Pywq4YKytBRrttzAaYRmHD6LT7uv5fRpaE7XrLmNEg3zfrnUEmzpFPeh4D9h7BVfkgp1an8YmSN3DGL",
  "key5": "4XM2e6RdB5pP5ums7g4a9hWV2TR8LFn69dsX5Xv9t4zyLEw2bsUBWTkJjyEvKYf7nxJ7BrFgbxnaopUbrgN9vwV7",
  "key6": "5TK7K1cC6fvqkNtbsrcY2cuWoh6Wy2xNytHs5rsQRG3FQ7ZBpMkTDzTpZDZgpA7XkicpmYKRrM73JQX6X1xiij3H",
  "key7": "pEm4LxmrNDQ8GVzz4fKoE7djeCKcCBtWW4iwWUNtEkKa4LZA3H1DDAEgZV2U4wQkFkPcTYf2oRK1SuxN3mJfLsE",
  "key8": "3CW4VdfP59AE5NKojQufQMWYmPfC31YvLP8ESXH49ASXq1bJUwzXgZjm8Eu9wudhH9pFrhUvjFLWpCeKUN2HtZF8",
  "key9": "4sBqYjMAcEPfQmV5Ls4CqATKci1AYXYQF3FoGEUN7gAet7ern5Zz5b37q9J5YJXKdhB2pVrG7w2fa18smG2WcNi2",
  "key10": "3JXvkvFr9G3SKf7JskJJtsqm1FuDtwJc5u6Sxyv667BrMtv9wBY1ThSkAjNGtHQ8cP6QFQX1d3BjwGbZe4xDPzvJ",
  "key11": "4ja7EQhLyNARXLTTU9aaK6xHQEfwNpS6bMT3rqDfgodpY5uktJkGbgAHztZ9BdBxMAsa3Wo3EuYeLvDgEbQft8Qp",
  "key12": "5ai9BtZkafCyv4irisnWEDkbXZTSPcsZqZ5dxKSYg8SnX6FsPRabQgsDMFJghtM8gMC9EE831MvJ5NNdEDcXjmi2",
  "key13": "5muJi8Nr4aai39A45F5dKFvRSM3H6sEhV4DydmyFyHnFEFdYLb5gunef9WRyLJJRQWejq2xK4YFYuxW2ijzve8Ha",
  "key14": "2QKDGkjSBKAiZk4V7f1tTdHeDejEkpVcuE7iZJFP9B8Uctey6JywoP2ghmRqZSBRxVpGoYm3cVN4A3PTR5ktXAGr",
  "key15": "65meC1eS43164ju1Bq3FjrnaCS4yha6cquUCcgtHE8hD6VEDxtBBk2wLojFHbK9yg39fdtgGRaqZNbMApMsPML4K",
  "key16": "3kU628Aoy8vLNzWXCPJ9iPvE2kEHpwYkCMWPBVR81L4QaVZYoFYMX1xHh5RywJKR2gG5ywrG2eBajRQg2pt5BgmJ",
  "key17": "2Zs8LPVYkt2LPXs474Zi9DYNWanQ5UWqwXtonMaWhgDj3bNVx88pE7yUcWtABW4yS6RqoPLUohTdstRgSGSKGBvN",
  "key18": "5wY3qNTJYQwEUhodYrv7zMUBxmB45PTi9axxhgk242jwk3DXdpYoozCPBRP4KxUC5GHP7r4Xe7k6pnkvf2GhHJDU",
  "key19": "43oAV7wJEQx6s8QNXQUV7dztoH7EdNAw2uRsMYvhYV7p1SDZ4vDKCWLEjk8Lip62iyYRWdYbSxdVF5yUBR9sRKdy",
  "key20": "3znnfgkE1ZS12YbUcykN6NkwHNPqTQQH243MEZiRJJ4UwYxMYWuvVMEMaheZgkhngtkxfTtDzvX8tCK5yRXBDDKM",
  "key21": "3HtopwEiHUyz2yWLmnXWVgx9FCKUTGfsL8WqE914r2uB6haHBQf8fP5HJ3MC8C6uLiPim1Dn45r9uY5Fzqzb4SMM",
  "key22": "4g34VCbjsqhqrS2zNRPSLJPHgDceruKgFqsRB4T4FRK1teiKaYxD4DMxEfLk5tvnXZbB4d1Pbw3PVowDxNH7J8nx",
  "key23": "22cWNWbRR7tust4FUVATf5zfRJGkpuPUM6QeKTvSAFrk8Qha9CkKFzNSfnCEpK6LkqkmgvDJseigVDCn74QqdgrV",
  "key24": "2y9N7HgLgvS428q2Ukk1LCrrw4WEbYW3Kmyv5QdcUvQoCjLVotEjScwzhcYeFMNsB96dQNJGw8SHLufrySKQFiT4",
  "key25": "2jYAbhAuNzD3fGHe4ox12ZnWLpXEdrEjA1rz6uqanByR8PzeFd3xN8mBzhrbXT8MY8Cq1hRdWJhL1onkJjp5g3jk",
  "key26": "4iXnBQYGGG9pvjE29kVQRnEyj6Tu7J5mBBHTgDoe43jgMsEveKP3LX5maNj5mab83H4zFRJBfghKTpe6hKVwjeCy",
  "key27": "m5DZb8SvxB8CdMH1HoQ5tQG2aaf2ut71X9zruJxNo8QKKxMxRmCJdgJnPrF4Ubw5WdpTxpFmfk3ubNczDUaNGvX",
  "key28": "3FevGUPxiLMv2wtteYFbFCxSR6MstXBq7WAmGvGgSiGssC69sevP7QeYQHytFHhYuL1E9v8Afu36Roh2dS61SE1L",
  "key29": "5piec6X5HncDmbkXgJdCzYApWrRojiMJLcSa9pLBLmMsNAkGJT4GxdeKFtvWTW6soWz5S8TVkqzTBwHUYM79Uycb",
  "key30": "nntuLVTedFGpLKLvWnjJHCpSBato7aaqproP8j83XXBUmJeaAUsTnqRfEMvZUbAsmnZ2PQbeyJA2bcYhkJQ4siL",
  "key31": "64m2buu7b8dbmNV1AtwrexmWYWrLgnJpgq7iD2St4yosxRqRuUy54LEXUgWjGrKGAsa8ptUWcinymibCWwBhKH5V",
  "key32": "9xrLZBRqWdZhR3n65sKor4jhD2R7Sa7jgPccMdUzGxBvuyMNjk9UvxsCVrAbbfTJWAHC3JWSNs668Ts7tjfnKs5",
  "key33": "4ycotBZT4Ckc2FDw1mnjqDNis5XkxhxdNKH2art5MErLCpGfVZ29vfDj6jzsbbiqduJfxXCG9VHcKKQdGwDwx6ZV",
  "key34": "4yibYj1fFzUUKNNVsMFXBWYcLGmEyYHwcPNo6KWQcq8s7bP4AGU7hvJ7uFNZNGCS8qSX5LTY8hgQLd3Z1VNXHZ8H",
  "key35": "2ZyDSknsr3zTeFTEtT8UP3hfHyUDzpx2sJigtFuBHGqQd1YTSAdRCPSyVcUxwHSkDZQi5oPJbCnCdkvToWymDaKv",
  "key36": "49byAhfrJayiies4G55gRmMQs4hR6RJrD4opWurxCPS2p8oktdyKME9r2JDsFMJtJvPuBpLt6f6YpAw3j9YiARwW",
  "key37": "xxxfaxTZNoBSyuKRZjsJeeFzSGP5NEdvBHd4orSJfH4w3Vvbsnb9tvjZakfhktYwz7g3YZGgb6kGMdRs9pL7k6U"
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
