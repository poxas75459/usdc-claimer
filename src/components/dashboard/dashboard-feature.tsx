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
    "fw3QVufB4RF46d4ng4o2X2yZHmvSEwaU3VPhAfYv3A4YADtHxfiTywHnhAHEMijpjYQVPx8XHrMSK5RGkEmDtuJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4E2ZFmgnFHRTxj2E4USwiJQUTsPBExiuSHim6ZnVAs1AnTBsnK9WV13YPUNPLj2UtgKwEWxpLjPk3Nf5bmX7cMib",
  "key1": "S6r1AKYwC5ZAGDNEznz9gWBPQwAiz2z4njXSywwJbwA4TTh7NuaptnKWS16LZ54A5mHbY594sM4u7XRNQgCA6HR",
  "key2": "bxXex9U7AGrQBqGzUzfEpXCfJW8kH4xK2UTX5gXgcwLaET47ndzCyAjMCUDVaG5abqnp91HkkMhRr2X7s7iKLfx",
  "key3": "38FmY5rCx4uLSYFBcWjTovuP5v1yk5gic9cuMiDnrFKKUSvA4hELzWNnsZkeYhJezGUud7qrSVSvVroB9VoEA6Kv",
  "key4": "2DvsYKjNm5Z35X4nLDEVw3KjhJWmEcKYXzhDrSZPCFZ8A1HwgnoFqdGgHGz7XuUUqbXimEvTWdKuwuAx8JS4zaUr",
  "key5": "3jKTvqf47aJjBPFz9sFTEm6L1LHgjgpPohAF8bECmWJqRc3VV6JpiuLVvRchNRzFnB4k45n4EQ6s95DGYeGqEMDP",
  "key6": "PR2RnrNmJ45NZM9BiCyQ5oo1y1ruEHBfNPF6zGBJEahxsfBuS7QpA5KF2Pb8AbxRz7xYdM7AuUrui1rY241t3M6",
  "key7": "4thEcd1EENmEfwv9R9WZz1uMZPRX4RGxcR5fjt4pnxQi9EoJurhRkE8h2hPxNWk4XZpqzTsdtH65Wpg26pqzHe6M",
  "key8": "3vVjkheJkLNZWFr4UreVhZUUZEQfnPAqbsgEAKFGDPFeGRsQA7zNMsf9uHcUwk8hyf2s7takK5N94oiaSfku8bL4",
  "key9": "3hAiPrnbnWY1Bjf6zNMnvZiVSoeZ6XNhLCzR6nacBUTXkhDbmtmVAxWeG98qQ48tN5VHTfdQUFZyAq12TWtYJVYh",
  "key10": "WzzCTFwKxekkxWirGDGahVEjtArASEc93RDkCttD6yBMfBFVWx9hT7aix7x3uU2jqRTFFdXKsb9fJJR2scK3WAS",
  "key11": "4vPDUcZ2P8RKSGarNXXLSXuSjPeXYPvAhDv9FQz99UNyagVtArubZgAn35aassYCBxRTEG4MiBM46d5VCcRYH6rz",
  "key12": "255c5JcoMDa2LtiZktbKSaHqUCr8EQdR7epG2Fy5RzUqKK9gaRPecsWkiCtYdyJLjPZrdBgiM2zdCEpyEzED76rU",
  "key13": "4vfQeVMtzTnUiopfXsGiWaj3S43CoArKu8SaF6VJxVqnCXqENirC7SaRswJfSD8aiANkGPiNh5zc5mFPnvphbHZp",
  "key14": "4maGhF84asUSGLuMPpp2sweZWXmdubHTfXRp8ACBCpXXoXoxSAAMFBeezL5XoMJ7idtBJhof95dHmNkvxds7PCk3",
  "key15": "MnDWGNMjdwXSqR9R1nPjJwj7gQtMwQTXkKuE6XoHxicTrhcU3XAsZJjT8wSVmfwQuUWNuEYJrwqFrznji39Qfs1",
  "key16": "4JpcojTxKdFc72TKVdNmPqPQxE9gGEPq4RsKv3ssXddsrHfLpG2hhcG6T3gkVRkrPWuLVie8nPtP32CxiebQnGZ3",
  "key17": "4G2fvQVEPYzg2bdjJtCfwvmPZLwEVQ4jEMfGEBmmmUwWcmtPunjbM5HHuXfqmp3jdTKqHCLfQKECMho6x5WyYWEW",
  "key18": "2ia6L8wkn4rHXda9JvfS1nJ8Ar1msSb9kCQpkXSq6PtzedaGrSgLXwV8KMdLRyXhQ33YvNhNjumSNm9khBCzhBUX",
  "key19": "4c5rsPnx7zq8vfB6UgoybWSVu4V2BpJ4H4wwaSfLm4K8AeDCaaiJgVFKomoRcthzd92zeUkWNCZDQtRjhPfSNCGe",
  "key20": "hNzvdAAzE8d4YNWXKyMeVyHYXhd9qCFoJRmM6PZoALHhpQVfLPmEWvni6aNvNnkm46akBpyGEwGG1xiLk74889H",
  "key21": "4sXEtD8UyaBJy6EjqAWxChgZSnA1gh5ZKDrEtYZ51MERBsdA9gUtuvwDdhsE1wDFZoAefTzMJ2iDaWnEqJFHkPav",
  "key22": "5FrRW6j5axuejk6G8iGzWAA5ZYsJUN2oET8TwcaFgXNsYt7o5nsCoHHuDKEwAQpGRKFgt8UopwNZS8JREMtGbMYD",
  "key23": "3wCMJ7Wx38jE4ksVmjtJRJKo6Ug6TLpuoYPjXJCA7jm7vKM6yDp45T8A1XVjfm7HPxn4Ay1Xc35ihBAEiUQvdPep",
  "key24": "3FnsRxFswEG8J9zPEt4XboFapbybg4PQnaVin5HgdWAATudwE2bZ4dzonPtQYCpPdp73Et25aiR7U5yy1kywqhPk",
  "key25": "5tDWUAqFnExpX9iuUZcARoBmKPCwoSyR2oZNFwoJHjae3RKiEcfa2XEtLHLtbXzpMg5VurjLgiKYsNgA6GuKyqXj",
  "key26": "b4AoUjuo5vFHPviroR3mTM7GbXZjVjft5pwyGy9UjmiQETyLS2nLWTseAXMtF2JC4dscyBER5Ft3scsPDvCMdHT",
  "key27": "3T1bhiYEpsdzTD6uuXp3C1JznNDYc25QPa432yoWFwyeVa7ywpUjc3Y4DSGuK1aej4bRPkHo1oMZZtsdkntkhs4s",
  "key28": "3PLUhR68FwqiTXfgncJiJErtCFDmBM7GpZW6eRj86tpXTUpTFCJ6hDYT1ieB4iSGuNuQS2T1XoMbk5p5RgXFfRXF",
  "key29": "TypKEfwdhSf8QwbpBGcDrfv2xpDoVx2i9eJWYSxyDFMYHLKX6YSTA8ubrSF26LXrZpnG1hpUu7XM7HS69nsSoUj",
  "key30": "4rovf9Jv86khwJ9hjk365MXa5AkUaBgB93pVP9gnoE1ZweKj7XtXNWKeFyWP3WL2VBU5Atmw4Yac5RCGGX7p4z3Z",
  "key31": "5qrsbaGvE2Ar6SoUVq6EDCTjkWHohhSfKTBBdVdsxvV3nmhQNboHiowjjXH99zbGRtYQFQsBiNNR2T1ZQbVg2DYy",
  "key32": "4hugvw95zLwnMJFPeqgz5B9PLbkH5W7Pgp8wSsU1WgFnkfGRfTWVRMiwPPxPAwYdtHTGCNapcr1kNwuPAtqRrv5H",
  "key33": "2RgqBG3YdXsD3fnRJpN3jKb2m4brBxecrLzV2kq1J7ZTn2E68P4NFc4CGxz5r2KZ2nB73htCJtLHWou6rn2moes8",
  "key34": "2uuhWi46WCUjuPCk4Eu6mbGyDo5HsPrqy42ophmZ8bQvMgTWSxfxi3dPzFsTdqn1JW2rrtkBZAsSFCuLdok3kP1h",
  "key35": "5tkRorXAhxx5wUn2Jvm4syeySEeaj2nZiexJJgcqxeYfuRDCoZmw8EgWpmz3NmX6c3LeKjX39MeBhNFwym2nHqW6",
  "key36": "2FevD2zRS5iT36VKBCBq9pQjtgAfzjYCBqY8ixWHGeyJdK7bZPcWQki3A7cK791SwwdPzXbq46afNUVquKk2xqsd"
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
