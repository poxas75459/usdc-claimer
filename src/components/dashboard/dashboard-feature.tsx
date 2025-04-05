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
    "2EBCUEGdMApuT7WYTpjeFhK9acoQ4FqTCy6LQqTJdhyexibeTGurFCqFxEze8DLnaNY9GAxLxVVEbhXfWiuPS8mM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JgN9X5V96APACYw7uPJjFVZKgKiFG16qhu5uPnA2DSRJ2M1VSvRGTqUxsuhFpbkVDykVAA7Xo5t4YV7AnCFDXDp",
  "key1": "G6thfk26UWnqbuFgC5jjdxrjdb4syAneXBb331ot5kd47m7rPxXmuXyVKwaXwR5BETQ1bz1fREGD8FgKLUH4ksW",
  "key2": "3Y849m8tLTh9a83UmqsrBuGmSHPir7VuPTd9M3cH2raL8M7orFdD6KKkWymx7njba2rFbbVp1NpgPJw2VPUC9UDS",
  "key3": "Kj71jn1pF56acf3LZYNgq2EiEGmeJSNzeiDCFUL7NFYpLC5BazKBd2bTGBBqauTzxMirkoxWiXhLHYoUhYvkUPt",
  "key4": "4WrjSZqnthcah7vtMooESeCa4oPvD5DVkS2yrQAhEn76YXoiWqidDimAfmDyvkqJ1W6fLHEBMSxMZfTnZJnRGXXC",
  "key5": "3X9y2Cp7CXt2hSf9bcfoDPHP6Vam9uWb5jMaVs7L5FFtcHiHh9BFtdc4hj5cTh5yFu6RZdsJCox2WJkShizBvNHW",
  "key6": "4SBPNKvWsDYgKALK1CFp6D3BVpNRs1ZK27NuV18YSAYHkvb3CQ9zuHcpUnC18fUQYmbBCxrDvfGSAeaaX4PxP5i4",
  "key7": "5RpYuUxny92TTCbSQcvkXxxtM8TGmsShRT9dAcAtC51GQT3Xbv7HY3a5pgTm9xpSDjhGzEPFyrprxs6Q6S6TfxUb",
  "key8": "3vPZFfZo3kWhQzNPYWdGxRybpSL5DWcf8oFC5dizcSPZhYn8vHejL6cLv8rMSA8sAnWJxaG6DLLEvvUxGZMSaRGm",
  "key9": "5iiR5KLMbA6k3uFCazMhR6cWRJC4sMgQuZ5Rq1Aw2JEad3rZ1sjmG76hg4bzcjqHg33RekajU1vKEurbSDCsestz",
  "key10": "5Q4Jk1mWiZ6k4NdvKc29PoZaA2iQcLzYmNYbmXuL6eFP7r5jZg8J17ZCrCP6LXUWq85MuoE7ovpJeYi9BwmauSrZ",
  "key11": "4jtE4jBzvzHfQF8tArdgeyXm4z4zQhohj1yDDquTWgy1BoPJU7SgHxuk3e6ijQbxoryu2SCeBxQxj4aUm5n6BngD",
  "key12": "2P4nMT3Y8hAwXQJ3R23xqKQbuEDTA9nSk6nRps6SeGHBuWA6eEgoVgHWV9cxeugJrrEnh1wH4Fv6zmyyGt38qMaw",
  "key13": "4zY1Mb8tG7QYRyNHZQtUihyHqKwL45ivNZCx9fWmKP5uKwVMcS9KSbmH1dCtp8LsrgaDDfaAh48pPjZ2UwsodqbY",
  "key14": "21s2vmVB2TbdAQfqdUVHeM54yRPFgrUjRMtN7etjwAKCNMEWEsWTGhmxYRnsea8ajQXRi3S5QXhYQ9aD2FfgbQjA",
  "key15": "3s2X49vi9bSzbZsBj6rVdrm3Kknfta1ogD5mRFgsMAjjuyXweKYCCz1WHiEm9ixT1renTP9o1JbEwF5MwZ8txgWN",
  "key16": "5bfMzJ8gyNvBaSUgXXCS8kMdzGEqk4P9wdfzL5ujET4y6GU4jdbA3DZ3HoAXGnG6k1P66FJD2KsJqBEsiQcW72Uz",
  "key17": "b5LsZ6s4h34PVBTjqEb9A51Ku6YvHo569JmrHVKaQGUoqaWuDGRNDJRj5Hc9KYN3HZ1X2b2StJ9VeEfSdSGrxv5",
  "key18": "4UqLG1iP47LvHtuxMZ3ZNSbejfbqtzoET6h2zvMJKsNwUSMfmDEnNVJDMBuKfu43RZDSratn5AaxTKPHMGB1iWim",
  "key19": "wdt5fY4nB5qiHEiZV184xcMZsqPxuFF8gKAEnUkwan7nHsUYgytNEhJzs2P2JCJFevLtuTLEwjKfbXpj8h1BXjt",
  "key20": "4xNCfS4jQL7GnqDjA8C3ZGjqxwxvoxcaQATMrhoV9LSbj5yb2Rhp25zfB7raz7q7Z97kitSovdhptX43Jj36qZK7",
  "key21": "23vZJK4fdpY1N7dh5H3nkFmgscTqWXWBUUvRXutwsCp27SkNurqewuA9FndMCHSzKM3gMQjsZkKn5gn87xDCZvdv",
  "key22": "5KqMVZuYbqUFiMX7NaGpQ614WsuUfwatjE8XmLvaH51aszabWykVxQAdGtPTX4SEM4T4kPf4yxtn7KDQSK9rcpw9",
  "key23": "3KMcSJDJVAaBDh3wxfQqA58vEzxQDGkhPhA8dxV69oeVYobQy9KprsCUsYsPM59kkezR3VHCcRmrZBRk2U1cLETW",
  "key24": "2vFXj9v1Npi5HMvSBZryYxgx5GKwutjw2Tdgryfrq1hPzyJSdjuiNfhvTvCkunX1p9rdP3311YbjLyHdrNMFM595",
  "key25": "5tVVvxDzifxt8MwsKLLewemyaKuXi7jTpfNcPJV4mS76AEssyx25yVrKReaZgEaHGHK7YGXkSmiX8YSwRtVgemMj",
  "key26": "4N1zVaysihz4ueZkb83b87QWPfod9jGpuo4x8dkc8p1yFSHLGesyM9oKoWXn9hYSc4XGb9F9M9KcQdhTZcRv8XuK",
  "key27": "2NbwNjKfsankdG4wVKfTeGuivAYse6iJo6P4rUTKeVd8txnHkjBwB61cQUw9djWp5H1sbkuA6eMgKPrjNUwGLwTC",
  "key28": "4j1cA5tVC5ihaeU9WwhF5AysXrGE7Wc2tYFKnuEEhaBBDUUChVYEZKSNaaLCePX1u8hMuNGLBsX4w2tthK7vXQkv",
  "key29": "2dkXAoQeKSXUiq4JpHmih43aAXsjdfuGhhYVtEDXx45gkuagZpEWJ7pkwrthSZHYhinoJGrSGFGLAqi2ge88HPDq"
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
