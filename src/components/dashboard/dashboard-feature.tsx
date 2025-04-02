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
    "64QWTj4ktZPxCCWVJGAvCk1qRCtoBjLzobPxQ2r5sowCYRnxGaM1FcijgADBmb7rWPG74cRTjZ8RmvjdiU7bHYoS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64eEpFq3nWYnEGNir9MAnz1MBQiZj3WH9kY9WyA1tDH5yjSxtXw94Pc38apR6cSNZZ8c98mx155fHm9nPmatj87",
  "key1": "iNiYk8wPd1qDzF4yvP3dactDndKdo9DfT6AsvN2aH5Db7HoZTiEyrWRcaKdNaPoLstuoXn9AR24bGPDoK9Bdf5e",
  "key2": "2M5MU7KPzAtk6qHCp74w1qTDzFqdrAT8taSwNLnZBEqxJyoCD2n42ddfNs9bu9i9codzcAfvS8gQ95sCVcBtWcMR",
  "key3": "4voJP92kJ7VSYSn7TnPajjog5cttkB2xUFPMHWPdZ6mUKNyuCiGbKoacFqWB15itngsms46YUWKx4NKW5wni14sz",
  "key4": "5CSKnNCxpRiXDqtLmKhyXn8e5d5WgqsGGFKeVtHuMMm9BaW3GpY9TQDMFnZJ734ik1WzvVFT2rgrPFHeeVi8Thcr",
  "key5": "5bSALTq7uXTTk6ECsmMty6qKXtijh2jKmaAE3cBpGo9iWMLZ3pfxvHkz6ZsRfQbyT5UdgCQ4CLYXYGGcS6cBNfoE",
  "key6": "2PLoh5YGLVwemnSwH3te1dPokumzppBwGhWh1GL5az1E3qRHPRRy1rH8ieqAgo5bZLMU2EyiXTbuhnLmQBaKEAXm",
  "key7": "5aknK42SQ7aBUJasBptsPupcpYhTKX7AWquKiPvApGQqrFgqWVFE1HJ6kvYXZQYgPndYtKV3M42qtaoDUTHfVCoV",
  "key8": "2t3tnHTH7eQ9euHXS5vUEV1A8Qd1HvTsvufpdq943WwEv1gNH44J7b2ZVLqGTexVqECtgViwyvzsaD6S7yoU39Qp",
  "key9": "5pxAVL3CUqzGMyk4dLLs2VUmf6izpYSmHScrkCdBoTsND7GSmuzuuuXxpJ21waLeHWgvk9ZNxh4pGXSKd5UcEZC8",
  "key10": "3S8crSFL3jE4ZWDavsES2NbfSmtMaCtevgHJy9cHfpwbYJvjVmUs37735LQZDrkonU95gXukzHYoY6SpveVQasJ1",
  "key11": "PTPJ87Ji6i9bFMh7WE3HvHSrtJCUv7T7vSjmFWceZtYWw8bPxdRawt4nRjFCeQ2z9nv2q1WCSTZcjS68r7CnnME",
  "key12": "5iJCyZ2F6JtaP3j84bqUUKg1hQcXDg2aGVX8JyUkowuSxHuaJtq3ENMPw7pFhFB2dYc8tKq4VxgwonE7Xkd88Yyu",
  "key13": "2PVCEjv52RCutLFaztCD7aAbnQPoHZUcVmR2p6yBgZGmyf8Jkd8bfmBqsC2YMwz7Ct7mDbF3DF6nk5UfwgVc1Cb8",
  "key14": "5aVfGCUZiSrojoAUTNH32AiGZUJintbPtxJfAcTQHSkv3XEMxhqqH9gZPdQFbV2GFdwh4GFiCF6QnmYoniuNVYyw",
  "key15": "wjfHXYov9kWAQy5ruCfJcwJn2z7S89JPhdXL5XkmSAqXMVDiMcTiaFxM8GLuhYbYCg9HKbva3vTkzyFj7tDmnNJ",
  "key16": "2MPNEWy9fpXd1sUhdMbEMm1bazbKzwuQBnpEg6iCADe6VFu3vTHstrxogVFMZDzg6Wj2463xU4PndikkQrpEWyre",
  "key17": "4TRX8g8RqAqvAkaku41hLrMJsUSAXGgjeAdfZCi6ikbyqHtd627Biuyw46RCze24WpVAMc1hQPwQJndLkb1dahGu",
  "key18": "3FedhmVF1mCaeXdmVmYXJwoJjdvEtfMDbwATMkdYhsWhjVQEgPzkKy5WXRmjCNRKzcm4NuY2GkxvURytSs2TzxjS",
  "key19": "3AJoqrAKHD6PwJGFU7dAAwSRXFLv9gmRXNLAALmVvwJPZAsiuJ84A5QrCe4cU6moeephKrSDpdYX3tES4rAE1mVt",
  "key20": "3AMm7vzE84fHaC1b9HVamHuWRgbWgXLZ1zJ33XHiVSija26VSfsK7e5sf5ohMucYCmYjnp74qoCrfXQGTCSN3Mmy",
  "key21": "2dppUrBzrFwgjRdNdW8pG7UCX4oEaU37jbNNK7kzd5PzoGG4dY5MMVwwhDEX4MiRaBa8NjvZgwLBeWkNC5cMZfJf",
  "key22": "KoULnh3DzVbe397bd3DsTW99foSy8YMQwUXXyKqpooURU9zKe79uv3Us1LfyaTgwSWabR2kVS6nmraCgHPDps6c",
  "key23": "2zA6GDUVn5JwihEgCP2ffQnkJCH8viueZNUeriZviu7YXfCeRL62MjdbmBj3gyayTSy2xTicrPH38iJbBQM5gmTm",
  "key24": "3uJzcdKpLbpFQYxgaaDTGJGY4ZD1MheAu34gqBY2cME8BgtrK6TZbab1QVSLi3nff86PHnBihQAi1kMExJy9CAQ1",
  "key25": "5Q4Fn8278z8cLr91e8o3S8ssyX7UCpn8sPBdXT3RK835ZSPBf8xMNrV6wJBNCNh6Zz9ye8KG2irjXzGnkVskhMtD",
  "key26": "4Q6s75yb4LBP78iCfN1gVLePfQ4gmCETJbPM8v4btTkrfkBw2Pg9e94ru3chfFyqXX2MP7katkwkZyiMXdUwY6ZW",
  "key27": "2tn3qrDF3y2zpVF8XMNyi8twmfmc1mUx62a2Dayse8M4VMWbWPTQDxR2SmMU2hCBSJDJGm1VhnQki7UpL8nyvEUk"
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
