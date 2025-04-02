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
    "2PBBvyq5FAS31j1cECfxj4hi9SHGNKEoDDum9YVg2m3J5DhLiLND6ZmqE52raPAaeoSL4KdDEQrto1PATGZTr6As"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49r4WBBzSXXrMpsnfaWWsqCPjVkJUuvnu8UiPug6gWbc6Ny32ZMQwavbJziGBBhRyxYzLLWnYJXc6oQT58Ue9H3H",
  "key1": "3hivMCtAAXtmhAoUPYpc4Emo2NsCgdreVq4h6jrEHXkQGwSEyvbSaSY3apVP84dEzkz7bRcPU5UyhNFinVt5zuAs",
  "key2": "5P2SYVNuApRQVmY8HGvDScY9DeHPWyMj7rQzNwjodESqZhBx9Rhwpm7QDGVSaRRT9QU9yjrpX4xNtPDRfkU7otL2",
  "key3": "5AWhdC1TJzhHnJZYtpWrRpXw1sDNxdJu4dSFbaPzTSEE9hXta9Y7coSixZ55yf3tRF4pKkjjBi8EdGdz2Y6MUEeb",
  "key4": "2uvQi3NmLhfpzi6NiGWcnQKP6VrzY1W65CUdNZ8zcteqX73iqfpbJhmuz8QAhaJJowFazmQLBdrRJ7V9VxVFHuy4",
  "key5": "2Fbj4EV5YhnRXovG3i4biKbKUQmnXabnQdfCW5PQdereNkuEVkdykeRkr3JE8TYmuR8Ysr99rMzaMKDDPgBnqvbp",
  "key6": "W1UoeizH8pVuk2NkdZprWxskB19cdP6LnvxDa2gpmqsr5yoqeaeGCjsRRwb19ByQfQcyo7c1oiM8eKUAShh2mn3",
  "key7": "3L2BSiZnDW6HcCR75ZyqqWFpXYW4Kq3pPDaCTViGeGz2rQ4ZRHccoqD8RbBH8ujUqZiG1CA5PZVX77Phbj3vUL5E",
  "key8": "TAtitjN7cvpmcxbuZpQRBCmT6z8t8boQnxYJWYBmfRE4tmVaYsu7ZKiw9V4SEwNw4FNBjRztiigoEkCQSUbbWZk",
  "key9": "4WYfAaDK4zFe8sMSyDhmk6L4UXaXBsoQY1k22JakxQV3q9Xt46jBSnRG9vXc5MSVeQmCYKGvStvXyY6mEkvyNvA1",
  "key10": "2QRWbLACBfsNKCCD6rg1eZFXgLiQv3RFwtLrn7AXBkjDHBufZsuasHRfeh6tVbRTjxNbeoS1Hzxh7HgrUedGRudG",
  "key11": "4cnEr625LefEacmiNaZE7N9jnhvBL1ZdG2671W1gENbJPvQDESZgGg2v7BDxFdEfJoNWjnJmosVzJdFLKrhjeZMR",
  "key12": "3eEeHoZHAN22FDnBi4jGoQwg2anZERacSCcw434NBRNeAtbxcbnWhuFZHGEEjvjxoKGC4UQQDESLv37uCxY82MVm",
  "key13": "5vx6eo51VUdvCnKJA7wytgrjAGNtYQmJwC9KJXnRFdv7nh49iA7DdCUbmQXiNtcpSD9QD6KKfDQtV4uaUc2FGwxK",
  "key14": "4SkCWszVUeFB6GywMzARtsKJjA5YHhrN2RsRcAAuWVvqFHkgNSNJujeE2HNmqqXFWjP9uMhiAsaiebgaQtUxYJb",
  "key15": "3LaZqQMRhRDB5YbFyDhH68EFNNKEoxJnrZjb7igXWmih5B1pwKfpGkSV5C4PQRJHJZccBMC9fX3bEmvmmNVUBfKf",
  "key16": "27GSEDL2m2gzKttAzXtrmLQtis22F93w2b8zzAQjHm9WqQzxnYBfUQZvzk6mvVaoFEfLPW3LynyTuNhQdbf42JmD",
  "key17": "2ea1pGT4BMtgr423rYcAaoKhcjE88ryypvsQJ3EykCeMCKfNziHfARHHNFE4yfXpnrypxJ2hSnqzAibEsi2jgFxx",
  "key18": "2q5jEtvaf6hd2KFhodqedk2Wtv1S3rcxpZ5HQtzUFDon5CDQncuiKhrJvj7A31VhyqBTuVEXwnpnMZMFftqGAjmt",
  "key19": "3GrK9KM5oMAhckU8UYBpy3tkjNAN1u53vjSmeG49dBZZFartNYdRwTE68ZE5GWYiYsiT8jjYYikK2HfLCfzPmwKD",
  "key20": "q2yjPUTBfZ14o4izF6hWWTNUaPL4EQY9EkYSAkDvAWEnwbyAoaiTN2tqx6jAbzaZyM9b8LbGrKZivvZ2fcuvbfT",
  "key21": "5c7EkK9AbUYPgis7L9eD976V5aoYBW7wTP6j43jz9WJjempBiYtbJVB55ssAJHNRYUzKY4Qtc94J5QsK8cjDSZGQ",
  "key22": "4YDH9juaRhBzoM8ZKXHxCEsB1HtjKcad8AtcXwTPbUgeBVP4tKngEjtdxXPP8XxhTmjcE1Nx7KK7zQkBxWVpwS7Y",
  "key23": "3yUHiDz74yVBkBq68EMqbXSUCSU2C5W7ih6g16zwKcDghD4js1DMdaddq1nSVhUMBHPjibcWqtTmK3vxmef7eMTH",
  "key24": "3gXu182rMKBoQQaQQrpWsVW439vvd5uGfUpsy8SyZmNtkcdxEQFpuJrbpPiazLZzqpgEwHbTPKxUnaXKGGWoFYP5",
  "key25": "4mcM291ym9TaeQRZhCDpx68jyM5Cm1jUp8AdZq35ofixNUCj5FeBDcdH727nJN185tHw7p2tRDqeh7zpD9DWvNqT",
  "key26": "k6Ptoh439UaLYNN2Kn6LVAwKsgctJD7ArQvwmf48SCenYUzN9FqLyDufbKR8ywNG7PnPCzwCgqtzBGiiLPRPxag",
  "key27": "GW2CLgLuK7shFe2aS678fqzH264p4TUpnFY8xY4n6jtvsh4BAqJp13kwZmmNeSqjoEMM2pfeQ2Q1ZTrenK53q1E",
  "key28": "6hCiLwxsYQLDacoCVnLYDLkZiWF1mYMzWjBPDhwKdCogrvTsbRkpos3zLPfFGMVUQPuoXKU5YhdHKadEzUhaaUD",
  "key29": "tSqUXw5ujABNnZAwSLqRvwcXCa2fDQyL22XiFSTGCdje1mnXUnQyPekA4d4g8urGtRDgdCQkHbYcpmHQBaozQby",
  "key30": "3rFX6hmEtzL8RRtBGv3cWftRJ8s8SWxF2xdcnushnr1TSKHGeBzszZoKtbSkFUtS6Gk5pPPzQaK71j7cpRULYMPZ",
  "key31": "4Jq7M3J2HRtZ1mNRZmvGKHLM2kMK9MjpPRVXWP3fEXckrGBoWfUoX29YG6syiTtJCzzY6kyouCNGCD5exb1VQkwt",
  "key32": "3oqNTnsF5sPABBzSA7GieXfwWQbQ62Pd66iiBQ9TiC8MozBTMHNBySezbyVRz1jYcLQ1MvKrHPhkgQy5wBngUQsR",
  "key33": "2cAoErzvjD3pJcvs4tnu8MKtZHA8kxddyeKKf7cJf97V5VtBz72hhHZWoaCLGgQXGR4meQTDYQiFk8f5vTGpVyoB",
  "key34": "3eUBW4F1ETAXUhG6zJgNR2q1Atw5AoiGcsRnNnZ6BEkLgWTUmXckJ2iebhA5FNMsvkF1z1Z1sVRRhPYZ948atLxh",
  "key35": "2vHz2iuxxjTjh4DKfHrhuchpLWngFAhqmXrRmhiD8XxVBvsdanhUNJDiv9X2Zx53Pb5ftJwfAS9gvgyTjBfxYYMy",
  "key36": "8xSHSF3qRW4ikVxmwFnSMFTpgYowwpYUFHtMSB4MxeTwESf7us5Kz9KXfRPnY2PrG9LT269jUksaRxfSp7mmNuF",
  "key37": "5XgYbcTPhMLNhvYjSZo3G7Yom5h2quRs85v34feQx3jkyXZfLcUjRW1iRfEnXjCrctdZNq1nTo49ernybiB1UGKC",
  "key38": "FkG96tH3GXtRebCmf1rnJsdmQ8nJ9vSPjJFaBBhTXnf9L9JvrsgQFFBYzsiPmuRSyM2XAmxp5aUkZExDMciZ5Yc",
  "key39": "3ZEbvJAUtHtqBNNuBkUcinF79jEfkqSYbwNKtEjnJo6jcwLdbW3cCXwkMN7gpcq4W7xoQkATrHmfT4c5AReMuVLt",
  "key40": "4stNmCqiJiMtXDykXM5kAcsmz2nfg75XCyxs985A7ojnmrunzWLXFE3iFhX5pmhjpnnAaFJ4pbShJ8YNR4hK32ti"
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
