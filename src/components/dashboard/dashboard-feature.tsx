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
    "4SLveqN2rLbPKrx39PvywZ8upLArKBgiikR6EMrGbXFtzPzqGw4hTQUir5RgGgxrmMgVqh76KD5G626Ge9qkYNay"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57R5DKcwmpB98hJqY4e3CPozGGBLk3Lt4L4Fs3UjGqE8YyeZEEBfrcPEEuyg1F6rt67xBneu5gPTi5xE9o4KxLyS",
  "key1": "2QKy4oL8fbNZUN5nBuRr7KVxVAeBjaXMToV2Kf4LoEuZJrPsHfEDm1ZuYaBecraLj1L7xXtwyFvB4ZGH3rbqHLcx",
  "key2": "2HEErqMcP3zBWXFUzptxShLRfpUY6dspcRtEGoVCZBw4BnCMrkb6sfH7MSHkBWZtCxeWeipB9VGnT9iVknEneSpG",
  "key3": "2Te62YNPSVUxDD4YztUt3wgEAgRVtNTejVTM84uYY4vjcswpsa3siozB8XwKMBQkdKZzxfXDh9FMRn4zaopkSVYz",
  "key4": "jA29W36Fk2VBTpiUN5PiEaq1rHEXRXQrnJGdnRfeLPM9FEichKB3Yt6o5naXPu3BWDB1osDHirvyvNt1uQrbovH",
  "key5": "Ju3cthGurwd2XbW9QcCRNovJLqxsG5t5c3s8hMLFpjrZXaUUz6Qk5vXBYmTeqJonfC8H8PMAqf2xfg8nEY7JcjJ",
  "key6": "3jUGpuxKsf9WMGQ4PsCrgHLdVcgX87ZmbdjsfZbE3mKWCwuwXDsq92CewnYZJNyUwxLnjKeAnKuPdDuXR5w3gAg2",
  "key7": "3bqqHfYLeM8J3TFabV1N8VQouSmg7SKSPsAzrNLKjs6rRjAAP7UpmULeXvDiDDa5tQoSXdviDTRg2JPm1fA5FbBJ",
  "key8": "iCgJVEuyHJ7W1AoxcakRFj1TVt72BL9cMK8RxaDGFFmLyQV9uwUwHXbLidTkwkUWwbrMe1B7Eu6NcimK1QANWYr",
  "key9": "JnQGgFXjUWXf7Pvx9Z8s5bxzjDvvqsSiGoUmsAGBK9KTpg6d4yJfCqcUwe5FesGTn6aSLaUHp9aZQ9jaaw661v7",
  "key10": "4TKUDv1LUKLGPjdAFjwM1DHJi7waD5sTDCunLYqrV4fqkw17xX4Vp8JN5xQ48uY6nwjq2BZdEafFvrMW2nu96Ddk",
  "key11": "3AoSu7P5Ferf7Tuyz5WCkjSTxHqYDEa7fXYiwLSP3hFZN1K6n7pwdvE6cYAbsbdyq7bNGAuGz1EE57msdctvLC76",
  "key12": "5s7EEFzvdBxYoevkPtg1WhJgRSG662JDMPRWw61pursoe4AQHc8enEKHciqzcjhWoocFiNpsEVzZjkcS3W9P2c7L",
  "key13": "3sAWvmS7BvEQn5qLBWWNi1MCcaBhEdcZ25M4CHYFFzi2tWnkWanS8mHS8uwXzYAPY57PkLJK82hv6gWJKmGKkfKr",
  "key14": "5q5i5aFKPTdNbsuJkE3z3DfC1hR5Jvqu5zsudSKUhyD6Y45NmaDgihdnvMrE9PNVhY6hFNeTTEaJ3fESRWAqJFHy",
  "key15": "3samgTint4x4sTabnbBoyvGoAJugFQaHyzEdAvHzENfBnRvX6MnhbKUH1rWZ3mX4scEL9xCZmmhfwQ6DtN6Pxxm3",
  "key16": "5DwzaJCagARJJkd635mqNv9jp4MwxGivbyjmFdSopnU9RnACboQcqZ4h4FBKnEsuDQuefoFT5oAU2jUiuAx2dWYp",
  "key17": "3FKb1X8UyEQcK3AajwEcS58Xp3wkVJH6g3pxBWL7q2Yd4ui8XDyxhSywboFeXLERbkmhFwrAgxrsrkh2kRBFoamR",
  "key18": "5veKLvcW3wf1sSdupAft1BvPXWQyAJ9QXCquzP8CmW2NDApUCzDmHGcxoQ1coz51D9G8ebVDkUGSdwi6HzLE1J84",
  "key19": "5rAmQKb66AnJD1Sx2Mby8r1DNZBZo6TrCucYpA6S8GVDXU2HR6Ki1QVdcmXoCwYc4BwjJBToRYE4TehTRNcvNmLd",
  "key20": "4B68ahWGQtX8S7mhV51LfwiqzDhJMkUBJ9zKsmVyk2ZHvNj1MrSk1XKQ61wJuunK6sCoStWtD4wEXy2YZWpgcGbQ",
  "key21": "2YJemGJizvKqo5S1m3vvJhdx7Jt5y8qXJa2o4Bk2x8kDTccnYvrEzXS8CCa3pL9zNXZX3qJ6YXLNDyWp7daHfX9C",
  "key22": "34BLsN4tY1hSMV9Q2KzxazQpn8J5jNgQhAg3FBbYoupZMs735qiQSkJfSSeejGBGrR55sSR3pb4kiRg8fkrjnVg3",
  "key23": "Rw2yXJD6nhG2Nwppgz4XRs1rM1k12dAQ2LKT8cMUrT2MqqzLguxDDPnEk8CEsNHTcmpQNPb6RxTLEnm7cM6tF4d",
  "key24": "3E9kqvrbZ4wpM6cKYNC8an5dKK36BMUg7AApr5E5M5WRkHbgTV5aUtjVAubi11xLVMEXwPNeTAELbVdakH4RT1jC",
  "key25": "3gPbdnZUyb9h5a2b188zRjzQ9KmNLDZ8bHHW7yLJ2nxxYn77weCS2Q21VuERP7JPD6PeESSYXkPsyddDbqTQiknd",
  "key26": "Toz2wsKzyWU5erey5kYQbDvCjHExLxvBVdvfwQBJUsoHkxwBjEp4kzFnfQGizym3pBmQfnNSU45dDPRggijJiFq",
  "key27": "oveKoQGJiCNrjPgRC3oSpeQANP67cnPtdKNBdwGVmpoGzGxYJZaAnMMHbgAWQDcFLffABMaPPbguMkA9cLorkWm",
  "key28": "36ZKpfupqQ3oa1isVCnZq6iMVgs1xRTyzzDtszuHWugBYDFj3MPoWNBaC5M2wsDGwEz3H8mmetFXWqGCWjq3UMnt",
  "key29": "5mxcWySp37bhFe8vwfcnFHXzpacbaKGUnyXZTzdSBpmMBNMRDERpqfngmFmn8mFncQ8UznY8cJDpjDEkiRmAwTgZ",
  "key30": "4NmH2YcCF4AEHnGVzPSgChUMr8XQx5txrgqtVcpRbn83y42kfMz34HxnET3GexpN5DJVnSUjdmPXNP7YTCSjjPav",
  "key31": "2oWBsT552ZKBVZap9JskRzKrvabt2eZKfBejBLi38qBxhXc6G5UheeS86NNLSaKtcJxbdHQ8WTbuXQg7cSNSoWSj",
  "key32": "EbAHKWVnP2Hu9Z9ZqC22EfaUKMXft7rRpWwSeDHB5Pvar5thDLEwKxHcQVhjaoS7ncJJFUmiSRozggnnHfLxB1M"
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
