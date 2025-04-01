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
    "5G61nN9g8YCa3bhWYtjTtDE3iyfzyKDTKs7h9VEfvvVWUAkrmjqMHUmwS8K4zTEoNKYKfxpJTZRfv2vCYeXBWozx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zk2YhXxUBZH9Abd5r9KzpYbdZhbrFeNvMYSxWwk8b57Wi6FT76w5ExriNu3mBXrH4wGjeH6wc8aSepTw33nMcA6",
  "key1": "JFW7JfUyfBxz3BEUSsqMeDoYaaxqCibd78vC49VoFN1ud4j7SXTgQTXHHdgyNaSVaGRVnJzSgQDKZTmnR3LjM3f",
  "key2": "AB2jzgGkHcdiZm51HEHwScrXZup8sn1oTXaQ7bBBbGrDismUvCrGAk6ffRAYKrJeE2np3fJZRkcruHQCYDKs2u2",
  "key3": "3QqTgQxEk5se7NLKoeCwkcX2J8VEnoJ9mr7a8KV53b4AE1XbhVJPFm2uNw4iifGadr1XjuDF7xkhzc8TgNDVmNQW",
  "key4": "2uxr757SL66x9j5GAGUDVd921ZiGiGej5ar8ZBgfetCeNcaqcqDMkG53PcMMDagy3HRiQuBmYdhSESwb5B3ND9i7",
  "key5": "7F69GMhhEWWqoTUx8rotF1Wy3ocmzUTSVEhA8irNw4UXN29kAwppKePk4qFasV92AGZFs8KVDskLU6LcH48GVvZ",
  "key6": "4XMfFAAXZy9FWeZnkWrDudvMvbusbJtszMkmodxyMCMbbGvepoQXENhZLiWsUgUhv1bhkJKBP8dSZ41pdLABqfgP",
  "key7": "3byUzMPHVABDzz44hrcL9SFtz8Yj1EV6vw46E2ugT1o6fATPv6EcfkzNXgpqC16JM1rWE6pJghrJkKNveev9EMNX",
  "key8": "4SeKRxa3oHcvucZUafQuDLcNY1fsuo5quxmS6hfmVkGjSYAwA9a69Jv5KpUhnMSQuS5rUoJSuGKXiZPYP4TTK2LD",
  "key9": "3aWcEix8d4Z5bkwwRS9hT8szquMwSjR8TJfYyZ3yK1vfASs7uacuemtFgz6uM2UdGcP47mbHWaWwV9ZASvuD1Vjh",
  "key10": "4cYkT8jjrjMJG5zrjRrjK8VdQT7Ek1mBUJPWBWLTr5TRxhd2TT6o747Ekx2nWn3j1LDDvH66H9r6LpAEcM7759Tn",
  "key11": "54a5ytDFyc7fuMJzam2uircTK8KZ4zwmbkU4iFZDc1tFQyyFuG1q9rJvWvxybQPJ11EeHdpXunFrkPpspJAaX6dR",
  "key12": "3EEWCMsug5TafpAmeKz4gyiWT2E8nSwLpo9H757EuHehduBEMB9mpCDu5mqxRviKvx25bRa8UfHfUxwTeagEfoa1",
  "key13": "62pHiFmXQHieRaXoAwv2Cd6p2Qfpd6YhGswUyqwR9Kba1RdhoQ1f9boY5MPsDsRoW42zURAcQeVsd6eXANqZGfp3",
  "key14": "pxUz4gDv7jsoycy5iKvFiAjs5u6W6Cia6cqonE5D4ttiXo6ntNMurP8W9ffhrpg2Wwuk5bqqGAPrbXyY3oVznUM",
  "key15": "4AXJtqXN7wMAo4dnT6fPJvEM8PNYQ7X1jRuTG9ceeyRdEqzfrwrjwn1jV2zQ6ZhgEz17sHLzNbV31bjJ3Dmvo8Ee",
  "key16": "2bnxWzPdgjQvfqFCVstb1rWeshVAbfbumoSEqDSrgyYvNRnEkK6f9sFvx3pdUThHjrSmzWoUb24PFc2DaPDjySad",
  "key17": "GQsQHzy2KwUruXBYs5HBxQ3Jf5jBbaWsksu1vLkNwF2XC8eMY7UctTjscBNe1Mt7ThPfg9jR6ycxtyJuHio7rXn",
  "key18": "52YCaE96sCtW7ZwcV2TKcRyRth9oDbJBF8kYQUJ7irN63Whqxh5DVkjtij4dnDHSE7UZfMwWdYYdheRt1zuWcLRe",
  "key19": "4HUX6mZHXcH37mA5Wn9n7WbDCJ1AYjbGH59pSG9TM8CYBaeBirrmKr9gFBTe3e7kuoEJdKRNzF8tfoQzibvnLYqq",
  "key20": "4aZk7eWEsc6edV4eXHb7ZhKBfVJMgA6HowxrEbLWTnSGMxB9JqZrjBk6ttKezM6YDP4K18GCVoff5xPVBsTf4X84",
  "key21": "4iUfCXEvkThAzkNViMCWq2y3PPXsCbaT2jdboaBVYAC8DNSbdeSpTQhuhvUwbTsXQ4oABJ5DHJhigM9qghHbJ9oa",
  "key22": "3rtRBMBeTwpkGEuoEGNgL3JqNnMALaUyGW3tEvpuC7xpfgczjThLoFhAjiTcLPRb268DnKn2XqZygt4pnyAezwAG",
  "key23": "61qCbBK3WnQDbh5Vk4EuGnvuUa521vYoZPjmVMo5F9DaPUz4EyctwxLFiF9TvBmCtSfE4VLhptNxhKwbk3zULuQP",
  "key24": "H8Vf7vkBWMy1DpGPhKS6WPdAMaFovyPKTBqFCtxVhdxkA4KxvZ2BeaytjEfdKmk5xEuYgGihoEJTqEtbA6aFcDN",
  "key25": "5DL5e3eNJvUV1jKYBM44S4ZMeFFZAx49ChhfpuzUh3Vfr1BG843fUjGqf8pmunrpEtu8f4sdTnNFMzKTDzVUJSF6",
  "key26": "CUts8qnuWC334Rs2ULyBWUwnPcBhXvLR87rNP1HxaAXu3ZQtNL2a7sVFVdQ62QRc45p9vb35PEm24e74vQho5ft",
  "key27": "2pW2bmtDYncCpU1gk3z6kzmbDs61kU9MuHCCQHEWPvYEEWVwa5duf29VxR3mPphbe1d6RpQoJAdnPfYeeo7Cop4K",
  "key28": "5X3GexGa59V4XhC4ceC1EPVML26Y5GsTMHRcSQYXWC2TvJ69fK43otpuG4R2mCWStuGW9LER9BSjBVHejhWk2Vkb",
  "key29": "Mbav95E9BDWiY6w4veDMHWq3bShKTgcik4bR4YvtSrTxPMBgJVS7xvxCjKcyc72bbUwaNrE2HANcovCpAsz66P8"
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
