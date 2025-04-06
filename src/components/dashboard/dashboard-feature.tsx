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
    "27ZzrPiWfLiE1BSTcu5PXXXZMpYngnQcoao7AESyP3TQCFrPH2j4MEZ1HR7PfgYEqJTHUQ85tgauHumxpN3nvjaZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4se6hZGutZpmtXKm9Re975v2gEhQSPaqyF7ms1jx2KKiuYbWBQNHk3vdcr9msp7SoN7y74s9bz1XA9y287ujopeS",
  "key1": "3DnkeWkDSR37SFni9bV9WwkNaVGZxts9xwBUkoaHwpPJ7QjkQYG5KuC5zga2uXYu1FStkCSx1utBt2W9gwf8QdTb",
  "key2": "24sKoPAq3Z6pD4ia8W2fEMjzaqcS8YsrX91L2Bh4qZvCJrcRmpR2Z1Pojep8ti5o3A3taxaBDPnp9NY16WMQdfD6",
  "key3": "2jrTvuDWejQ5AUzyFQCmYVF8JT3ty4bN39dH3ziF5hKHthTte4jNfFMoSsXrY53UNxwjKSXmgKq5b6bDdc2rFYVy",
  "key4": "TsxroFK9Qq2Ln23qgDd5TE1PK12mWXBSpuX6AXyiCrQpJwx6FZjxagwZXyjf4fiMdbrC6pgn95gU3LWYqWm9ssB",
  "key5": "5fcZ2kgLxR5ZWATP349P3UKQxAYqPudJkcTNNYFZsZRtoW3zLoPuqpG6nrgm3sMkkZ2iZpqaGxHRF3KdpoVGPhei",
  "key6": "Y8TanGZuguybeNbWNhQxgNDnECbW4Twr2G3q1kd43gEoMehGwmCDFKGGB23oRWHC6ifwYnHjh7Gb1xa3NPqY1PV",
  "key7": "CRiaW2yc4z1p6nn68x5vuq6QSEqypRefkqABXHoU9ncv3SwFY2amSGLJr9BfiJtAExXESyq99cLUtVQhN7ukkUs",
  "key8": "pG3C3zKvsJ217nwXwMmjEvHuYgKYNudGykM2nmsY3Rn7ytsWysBaARzXXBmTKavSMBAiYZZMo8khKAGGrSxBUNr",
  "key9": "67BHMx9kuUioPyWEFwYyArqsXo3dhKqXBYcMKsaQtyLmVUe1QFD4yoNqwYD6eLMxLcZd6eYeSGSw6AzCWT1vxus9",
  "key10": "3GrtZ5PaSVSwg3hC2J8gG9pYFYzRq1HGw6fc5FLRSXLkvYWoYrQK5UVu4mDbCfb2pvMSRj5idK9CjxfVcNs8BUqU",
  "key11": "3U6v4oxPbC4NcQj7vQbq4FuMb1sY3wFuztw4QYfTUJYaAkrqLhRmTayWzVtK9a7YCLKAmxw5FUgFipAmPRyMC7Z5",
  "key12": "2HPcjRdWNm1rAYUQdtX6Nq2e724mJQD4unvtJ16pyHjxBVUsGtvdQJnnQCdEw2ipEWXMxuKdywC8M7TPeir8b4d6",
  "key13": "3N3hP5yCDztxnnGuP3nV2KBJPz7qNiiiM4zndNWds71inJ2vWRVFQa7RWxZCLkKYhNLRkeDmRo6hQQyFkntQtozW",
  "key14": "C6C71w73iyDMFyXGMt1rbzTFdCagixSYGRxusb1iE2RtBim3hap7iaPoaoHWDppFKg8GM6yMQ6nPwb15j6C9UYd",
  "key15": "KFg8ast1WsYiz68W9ScQ8jzdg7AaKAYSZ8AsUmDi3bZatB8DL5kAmtgsFiKwWyGE6UBW9zJJAmaSW65XPH5MZmS",
  "key16": "4QC2vn51DKUy75Q6ANvecqNegFuLNJ7R1ZM7nm7qS8QGWAYcU1PfnYr9FxMrqcPqZcwqQxdpKMNbegBMm9FWQZ1a",
  "key17": "5Yi66e9PX49m3c6DYekysuaWXcyaye7gwZbeKwF7nXEs8db372fXTcx5MsjRqJxDppkGaHGjjVnyryQfL1ZJFHbS",
  "key18": "4m3S4ksAeGmBarhVpNXCJg15FmuVycHozsCVEZQD9beMbFFAnmu7e5DPGrZeFTLhSM4nT9Jef3STbKL4qKGF6t6e",
  "key19": "2hd1rqn6dyNFE5R1KfD28aFsungT2LT1LGL4nYSY7YwkgwkHQKm9cSxGtWwifKXc4kvXQzc7PtmVziQyqEuXys3w",
  "key20": "5RH7bxUtEoD6MfNzD4UMpuri1maHVQizLVXCM1jEKD9KQ5eJ7ZKnRbFQbDTPwJRmoKyRevXWzRknZnT3vyYMqVp3",
  "key21": "4zrxJoc4rFmASdapPFBN12QLKw8BxMxaVBwzNVTiSLuLQm1X8DX5XJA4ynj8dz6CPCoSATYsSof6FW48yMFGs1Kt",
  "key22": "3S62sJnYymTqxZ127AAwxWf5G43QGpwkLKMoiQx4dBANAG5nwNpHUc8y7zaPESoFZJmteds9PomixZCA15WJkS4a",
  "key23": "45acddanSxKWhWmwSgiphLr367mWQTkFEFkc3NfPXXKYyYoA2PrUkWkc21iYGSy7T496aoUowgb1u7k28yucg97L",
  "key24": "642A8cBYdRapppGGCQDVEKV9wijdUG357zFanP6MqcpyWikw4rvJu3tmnNQ96r9FqPgapdxjpLHpqzRBEn3rGPVJ",
  "key25": "23kmh3yCmL45EkFDzpXCYLkvkDgAw5iXn72KSrZXxQxcXJUVogwkq5ER2DTCCWtrT69Xo8LcEUqwmuepAZMzXnNT",
  "key26": "SGfR6xxxtjezdP333KXVsem4jQmUsE7PWF6b9RNGm9wDZVCirVaeuRATEBXQSxMLuw2VnocMvcqothph7YH11SB",
  "key27": "39mLXqHNWz7hTiGjnG9ohWuxKBuanPJJCLox1JH4vPTB7KReB18WSeZZZ9i5yqTsFuegUyx7BksA4eLJ9DS8Rjai",
  "key28": "4okJ3tTLhPKRE2zdQ9K1fW1qhuRH53W3TmwSjtGPJzMY9ZUnZrEYwCi9egETpz5ngtJC76grA9qQRybCTPuGNjHy",
  "key29": "3vSgkTHk6VJp6FLB2FkGXn4y7t25UjrZmPWYchqDdfciQcEAgsvyWpAJF56z9fn5fCcmVM3dDbu4YufDJs7RnjJ8",
  "key30": "4jFc2qCeaK4iu3CdUh2uWd76C6iem5iYj27xXGkVUbzHksw488Nv8EfhY74FehgB7c4gWGKR9SC5Qymbrn29e7rD"
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
