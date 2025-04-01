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
    "ysTQEqGD67Tq7GUhnFE6oxWrneiXivu48J49bcsotwT38khXGF5heQtYMo3QYV823ywge7mLHENYKWeP7uQEmAF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ueMmVm53c92bSq594prf8XKTWqZepJ1LzQiakuGkaaQdPFvZRGepaaQ4NSMVg3sJ8c1Zfmma3R4WxzpHtXzGaqG",
  "key1": "43vNNi3iscoA1LwChR1qaYyUWJSEvvBJBGCseqYhkmWKvMFv6hMVnyamibNyT4EZYgHHNBjJWNy4wy6eyJYFNWUV",
  "key2": "3g3V5Jjj5gPysoq73CQnGPaCDpoTsRyJyQKEiE3kbs3vCc2Nz1AMMt8hSDh2TAZygXYWzYhUQ2xUVsM1Qs2nXPGx",
  "key3": "4LLotftkZoxTNp8mFVH5sPUr14aKsLcACBnPJpPmrEtuJWFPUxiBM1W53fUz1S2hTKPDSfiuGdG5mT7Fd76WH5og",
  "key4": "5mqYgHwV3gDYR8fLJjsG8iSzwsMfadkzS2mWCUHgiwqdSAcdb9KqgQhZMfzeCG913tqs4TJZ53gwS387FfvNYCdu",
  "key5": "3fqaaugCjLPfAeHxRdUphgZ2UkJ319JLp7zywP6H3FNPz961vXUmpvEtwA5EwTKNiASyQ4mF8WkA47KewKc4LHXz",
  "key6": "pead7t9AUorzCWLo77W5RW7PswPH1tkY9zv8XUMYdWBj8CYvkCsjmE3SsjWKE5uuo4Jd8KCPyfXyPYxFUCx4xSm",
  "key7": "5rrKGm3Qj9UKymsvupHBA1LktVqSMEX9QSrCkGFMUY8fgVxHab3jYLesqw2xNJp9oTDHMKinfkQf1XyVDQNZjcxL",
  "key8": "3g1E5me8W7eRDyks6AtAYHjqy5dYxdV7z1cT49hjU7E39qWde2i2bHCNBJ775kmMUr2MBdvS7dtstazzcQHAtK3i",
  "key9": "2E2z9dphqkNXm38zMwULEPxHM91RtMeWiuaBNe8gxhfUbr1ABCnYoeaSV6PHmFQquQsShFE1zxhrbD8fbaun6arM",
  "key10": "5XSHaUSAbyMSTjafpTWA5VeBBYenrEC5czJ7pPbdwqmGKf5U2jdMeCestoA2ZeGqbzLL586U2U3R3nMBT3Lxa8dV",
  "key11": "3uG7wTiCST2SJg6KnBwpU9Y6ud9HUtWd4DXw4QWyRTeRwrGzLBxPRPq4aWDsocL9TkRCJPGxGsH62RoKF6nL5Pyv",
  "key12": "CJypyozT1XQk2ejDW4S1AeQSL9hYbbvP6machhuqTSxm1tKGo7Hrj54fjGvE6gLYopsVUPzCy1mJXAYnCdNzeJF",
  "key13": "bxDX6G5J73Lgzx8efFwXjm7Fsm6RtmDuGzksZZnTZEyaETfioswgzCiEYn9FR4dNrRujNiHA79sg3jv4jBUv9AG",
  "key14": "3DVj7xgV4dXHwXecio23fRd2FchUcWXcw7gx7rUH8gEUHCLwSDkU3svrcibgdbC9C11UJU1dgYC87pmYEp3mMadf",
  "key15": "2natRtabR5J9goC4X5RgPKfKLx7dE2BouyU6xJ5HuzJAJr3zWBu2JHpDUcCLHUQzZs3YHe1UULKTWT47JsL6zp45",
  "key16": "5VDCRzPg1RgVL1QZ7MqAztkDsKANngt2S3U98VUyYMvjWspETYrFiFy3QQoc5n6HFnbh8KryXEzNpUf2ag3nPx8v",
  "key17": "5ww9jWnwgcj54f8PB5kWG7KMqZyi2xZFyumqz63MK5zg9oYr8Cx8D9NUNJTDsRrd6f8EeLh6Srh9ZYycsRZBbdf3",
  "key18": "3prSb9xa398ReQeX36fTggWP9SEPi88Nvy5M2WfJSmjhg8MfP3Gh4tPvhrL3X3sn7oCZsyFHgeStomo6ruAhasGN",
  "key19": "4jqnPN9kxjP6ArSQW9BNTfug5N1uWtpf8F46p3CQsp6LMfW4xaaKuVJ5c1fZpmHgco5mpYHTiwHisVo3341bzXQB",
  "key20": "5hEZQ1pKdsHd7gpkZd76hYm2XpPebhtKqmKxJNhJvhNppSxBZhUY4wGKxaxKdtDoFKzGzB9TqFESF8EKAF7okamC",
  "key21": "tdiVTNrb8mSkQQHf8ABhjtjhWtSRWvTZuqAaEB7pYpWv4tKHSB6QCGRwGkKcBDe9MrJecMKH1j3HMe7MHJmutmi",
  "key22": "5FVfFu3rdzdeC8bXmkSMUUyLZu4rsxqyDraurzr41LC5hLXJzezrQXffjSRknjoiFXsnigZRKgpr6sfXozHo7rYc",
  "key23": "41rL287HTB1stTdJgo4QVZdFfjZw4ugTH6P86VqXJbU4Mwmxqud3ktHT958ve5NMrFB7vCF8KmjresSmQ7smUBkm",
  "key24": "5sovtyeq6qUfkWmYUmUHngJC29xpuVgNZuXz88dLaoLykZMRx4NvD3cXzfMbEtWkYGm2n842gbto1Bd9RaR9AmJE",
  "key25": "4hVtxj8WGCuDdQLWxYPv6hpXRymQub4Xa7YEw1GEsq9au9U8yXGPKGYADTnUS1pRpPXsexMHrAMpzahgREyeumSx",
  "key26": "Bkb8C4UnRhcRcV4vAsUeCCPeFK73qGHFfFWwGjKy4bgZF5tUuzfaMwchQA4erkXBvetRT8rrF64Yh5fwYFbHiAn",
  "key27": "2WXYyzX3wnzU9rGAKAVaWpQsfUazx2Jzzdoy1GYRNewBGDs7Sa9LnzFMVrc12gUV8nLeJiRXdfmFDyHRrmHtn6N3",
  "key28": "5bep5Qsw4aojg9Phe5E5WN5jLbV4m5cUWUY7anZ4N5drQowSf83gF5dGF9gGt7MXQJHfM1Kjf6BXSuh8trV5Nb2d",
  "key29": "83b1NQEftXX7kQwxGC58zdznGaVoWNrNAxr4HKYDfw7QCGa9hB1ZxbRKJz4Gj7y5T8ADQNd9gS5sAMw4j1kh3DA",
  "key30": "yhdhndECTNqLDssajN3vFFNZfAFM398TFNN8jGReTvN5FiERjoiTPP94dYP7MBGuQ6817DQAuz8exJ2qsRMQe1Z"
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
