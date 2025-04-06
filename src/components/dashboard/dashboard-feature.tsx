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
    "126E1i8keizY3gGLysuZVWJxLbbUczFqMU3gZ2vDQY9xneoiaiVtyKMtarZGN6i3s6cXonfuegW5yCT9XQ6jENX9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ugG7jxehcHh1hx3xiKHYhFzKBzkunjF5RL4ETdUgZxQissTPJujUyu3Ne16JEocELEJs12JSFfFDgQYFbN36VY",
  "key1": "45dvDUkcp1GVi9gkeNFcEUMpGgUAkMa94mkXtT7uETEM5uBVkd5b1T58TuND1f5vbiGGu5r3u8JvRHaPmXThsMhr",
  "key2": "4bEvcXNMz4cnrQzmD6Eu9snoYZ7RSBDMJixvD1UJpto9EroPwPRjZw3UQ3Up1FjJDQsDcB8uetZnARfwojGd42R",
  "key3": "4EZiyxgDNTR4GkXcA2jHerYXGyeFkmtLpMRiH92cu4mzjha6Uw4j5wCyw6p8NFGLdG6yxhBYjeA1nE7ms75om3co",
  "key4": "2Q2rxMZc8ALFJZGjXdgwzJ722TdBAvsfdFVsqXYPc6inEH1ZYLLzwHdbEMTcQenKbrwadGKvwYHe4ebzxVAMBnwm",
  "key5": "QLobpf7643mrw1gdCy2AGN38cqSN4gnGKDvFNdqE2gc7t2uYiSY1Q4gethbuewA4atSKS1u3CDmYejJDGKKicQT",
  "key6": "4taJfNNSiA1TLsfkBeDavwJBRZS8onjFSsvhGHYDnKC8BuQXW4vNJr1He7buEZJ4Wk6JYu13Y7ZSXaP7mm9fQkun",
  "key7": "3rj8VXoSwRncZQBJfA99chBkPJfLnvdiLPPWTsGgszhKCK1kVLVGYUnL5V8pK4mLCUTous9w67AfPJC3pxNSNy5i",
  "key8": "2FtZez1KafZ7dVQW2wiiviDaoQ84VThzHHXUDHcrU4B9ftvmmTADWNvMmhqkUTSbpjq8vqX8DmHKZASBRcyp3VNQ",
  "key9": "55B79fgMgg38An4fDC3tK7b8HHH3pmCiiq5kyEwDWV9aABsyEgjdnMA6JcwTiGKvmWA6tGa9RHLY26oAdVuhwyGj",
  "key10": "3LucWrX8kUDyJeYoXsuxV18xLYb1kaoUf6bXFmd4h28CwxzY3bTwvA1zartXcm9P4gMcotRiW29HHhhP6Mp5M2bG",
  "key11": "67YBZQ5j6pRTxg9ZsQtTFqYDYNxqfPmNPRS11k6mYzfhVg22rH9frAUPqsyWSTPDaSdpaCsqBxZeqAHxgDobQeSa",
  "key12": "5ysK6jYCGgw9o8U5xNTsgqDbxpcysJYNz1JWeBhtKDXk8zLz88cUvTf1AfWB8QSJzym6UnK3KCn6QzmEggr3hMAL",
  "key13": "38JinJVBqd248dnNGNRQfzDg4LVBdnXdbYCaASqE5MykHdfm5HjMvX7zaaHwtBtCsLJqRLYwyv6gYBVEN7wkzvUY",
  "key14": "2vKWvwYaRnyUxQ6dmQ1TeryWtyZYJ3otqroEMYUT4ybobhDRUsVG2XuBJxE5okMozdh4Fn9JsrjsLo72Y1pQiaH6",
  "key15": "NZZ9yciUmgGwmhE4Kh7B2xPoZpFp6VphtaG1H1zE8Br27rGJ3VNVJatVJ1yZY7xCpyHpWZR3uTpHnEam2z2A88Y",
  "key16": "xiN9Rop6HEP2fesX46JdFF63urgmodrvcUnhfvmKfCGoBzYjfwtjXEiAGPEFcVZnwBQvuP1gmt7FHVdQsp7KB9B",
  "key17": "6majcUhit26MwCKysrdzsTWH3cXKDWcWFcbeYKaWTV4eNJnwUVW96xScNcQ26AaU9daNfLcaRS4wjZkyEorxTgM",
  "key18": "4PdmTCdu7aUZvSaBpYQDkWfxSpLxqh2eYoHgXCP6a2FT8r5Voggh8MAAPZ9tg6ZyG8FJG4h8TRmzQjqrXELeKyyN",
  "key19": "7qCWEfXGd4BmoqLLSULB3MmwsFkootmsBzP48rpjEsAwxK1VR5TBeJJojGRMUECEcNCJJUD4JuQ6tCfMnPeV5R3",
  "key20": "4fofGXQzVXV2rCkvF8sNGqvSbiDUG7iD2zZ332o5Rkm3vpm5NHAugtpjDsGjEB46hbLpnPzdnE28FMxTiKKbUe2T",
  "key21": "fwxaCXk79gVCyepFWVVSH8eCtx5tcyh2nCEKXinvB8wEfzrX4oanrGMDsUuuuBaZYWopZbuf2PkCDdsJ6Xmnowu",
  "key22": "4CvmnL7Y9CWV37654XsxLyzPxZjBdMWzb5Djg98QTSa2PQ47Ke7JGwou7PJAtUQXq2ocRm9HzpF3P3B2TGkxXrwu",
  "key23": "3xfXHbmKG9k21Au6GnSctkWSruJgAzDLJdgehLLZM4MBcSmGRfo5aEYmpLs8fjBQts6hSVz122aTGNVsZsLtRmms",
  "key24": "5Gn2RcnW7HMff8fxepzrPZJD3xmu16YovrekL15C2Sw32j1LvDfc8wpL9qJxWYrEnMqNKvV2K2rorGTYWSEMy6Es",
  "key25": "3WjwTzqNDsy9nqdeurT96s1Jz9NbvutRZKqVC9tB6VTHRLmxAQ5krDcGKmyvjqJrYpLybt2NkQ3infUiTKVxS2vF",
  "key26": "4xFmJkZbrJHEF4CQhgeY9UAbTZmYJPpKn18YnXvt6Egyk4eDr7k9iETYGyARot8DbdtrCJAtKSfsryoL5rUi9YMj",
  "key27": "4JQkR3wgrMyUBpvphK1SacaTSbreiS64gm4xMu7aRBYWFw8HkVuf16b4UdQyotaVADk2RQDjibcy5VCwBKTDt26c",
  "key28": "4eYnK5kB9MR4MK94NpNp48jgXJBX1auC3JYn6dyQ6ZNsj2R4HmKNzS6FhKupDRhCQyNRfHwrGKenbu2puUXWu7cD",
  "key29": "Lnkq5f97c4wnSSR6hPXFRXvZ8YtoePYn2SVZC6itSdRr8BcgXazheAbz1bZ3uoUQC4zxR6F7jpuWWRgzg3eVkRF",
  "key30": "3ZDVYzzu78gEvtFo8kaMxeQiVs3mNqPJz1WjQPhPGNJQYEEtfyUuEqCiid5mcAhVqkWDoLGL4vY8mEbaWzZyyV8Q",
  "key31": "5ZR6WXtCvE9WFLk7saTN9j7VVwaGFAY9iyAKq3PnwZUuiyXLMQEFKrg5PLbThngsKEmXZQCxZG77qtzkyqaJkp1P",
  "key32": "2x8qhccrUY25Q6zLGoqQiB4CY5NaBTz2yRKT1L9HH4bjUm9VyAhj93qpt7k8fmpUKqcnDyR1wbg88wPR6dPvBkuT"
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
