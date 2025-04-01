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
    "2JfKyTCi9xVPbG7vHucmXtYhAyfFGhvjHRA9eaavub85CJDMpfF2GNVKsMiUaWqSAoew2R5t59aALu3hAKvVR3Km"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2P8RhfPHUVHtrVcMmWHTcnPfhf1bMb4tMvvcKw6uv3p8nS7bW72RY3dVWkYMWUA2YDhPqgr4P4TCgRtjuxo39eWQ",
  "key1": "2gsaoDyhY6so9peR2nUXMKRnUjqBvKoC3akWXvmKTScRKCXLgbwzWpwsjmgW5VzBNfrYpsFu2ouYYcqyvpj8W72N",
  "key2": "2Na5DzCnA6BYtdcTAHSnAhYjRv3vrkagi78ojPmiEKs3GhWPu4dJMGxUoPiu6DJk3r89wWW6JMo1HdBwAEyGKT7b",
  "key3": "5GvwYwS1v2zNc3TpHmiEyzNU2pvyg9qZxNhst7ng1DecWwow9BKv5jtpbMwhLBtnrCNgm1tSg8XELoDpvYSwZDpE",
  "key4": "4nrWwyx2YmwVLtbfWeeggocwTuoZuYFupXsp8g3SU273SY4uUiaVFn9DoPuyXesXUzoBxHaqLn4Eh4mG4g9GkxHs",
  "key5": "3dzb7Y2FhEMYNh8WqXbPoa6x1JXyrTsBrKu9XTFF66Zo7ZNEVnhnJD8qGsBsqaCEr2zFs1y1cqZcdRQDuv2CifN1",
  "key6": "48CWfMQv8DtfhmaHWc8Jo6hXchbqtfpzqbJ7v7FA7TknSwVjnesTCRjJjw9B49Djwfmcz96tdkv3H1V9KUoVXAE9",
  "key7": "291uiuucfGzAFH3v2pKs1iiXz9iUdRXU2puuetttocEEFAHMxF2uU4QL7ZHGhLPYKYbcpk4bjyEntUu38vsCoR9R",
  "key8": "2XrSC4VQsBVwVcSs7ZTRXYThT9txPRgnAvy5gjAcBFNcGMrgLfEaXCJnwm9j2BxN9EqDwY8iT5pLo6FSs9Q6qFQp",
  "key9": "4TVPHn4t68Z8hFLZAdTfSaY4rBWnC4w9mij1V1NG5ZHzoGro4Tauo3ZdwAFYJBdJRQriCk1nMnEFn1STAJPtQ9XD",
  "key10": "6RviqXxKczpQkaY8j2gtpdcVcc4cRgqgAdk9LHUkzjHNDtGSGRSCtfedJc7VjKFVXKogGVaubpajpY6Qwnh5Qzi",
  "key11": "2KaS4KWsiL3PpqvpCcwYyayFe3vWPqzWMzuwMtcVYKiFpyCJD4kC3oxerTsw2yEmtmYyKccu4Cp3SzNsSRuUTeX5",
  "key12": "YpdFmUH496WB6ne8S11BKicbkuzPgup2jb8rQM2Hu27tMMvg9kv1E3j1pvig7gruxk1WSno3GvM9HDV8DbsAmZC",
  "key13": "2XgT7kmjtxCyMNEZcaqe2zcMd1nrmWsFvAC3cc4DKr1Mjvv1MULgHe2ud6iHDk7PYJ2UtnZ83iAyx1x5ZkenTCFT",
  "key14": "58aYoFVD7eJTFA85DfofMYBfZK7wyZZDAeH9RHTTGHptF2uLWWjff5qd5HxfMGgrwvRB5cwyssrisL2XKTyTPXSp",
  "key15": "46ffGh6CFy8exi3r2aHhhPkETUBifZt6YgKyj8Mz6w5aPJvz9FJQAsGBgLVh4xLMcGCZ4M6eCRwCsAw86v8MrNck",
  "key16": "4nRpedGjTN4kZou9PC9o8i97pYyUsQiC5cLfEkKrtmiWTZE1Q94tuezJiCG8dp2PrfKhXkWgM7Mo39LYVxUQH7KH",
  "key17": "EmUdGCB1SsUuXtwb6PJFmz642ewHr9R33uTtgYsCnPNqw1M6qc78PYz81nNZECDfSa5Rn6PafvjjK5gTjs1Kw5z",
  "key18": "4at2GigixN7PwUxThKzKPah9SYukJPd3ZH3Mn3wLkuhTTWgeDBn2hZpy8negYKjvfEUgCcByMz7D5U4Zk51JBeQK",
  "key19": "4AT7pE5QcZ5HqbZ2AviL5WbPKBV2S4zP5a98rwozFAk8NrGmF5ojuh3wabhFvo3MewfGwq9xUvwCheGPNzLKGt2Q",
  "key20": "2WV6UFxF3P6SzaL1N9tadES95e8z5XJ7gAGHqefZv1LrPcQPzw142ZMPHpNbhRu33WhCi3EMhNmLNzVssK4ZmyhP",
  "key21": "4wRccXM7YHNRcfTNQEJLnybCwFeQP2d3zDnd2qdN7sQhKLELUSnnKM328CFJ5Ziob65wKucsGEcGiHpFSEdd9Zj7",
  "key22": "47ABEweAGtP6HgHmfr9K3Zy15rUrK1zZgtwnGpfPGfNiMsxae4Nj5YXJi4qBVYPzFkVjw1fKt5JwAiX2uFv8k325",
  "key23": "4MffXeqQDiRzFEN31QsBSoBNC7EJj7y9y38ZjDj22gQ4YxqFKDWYJLpfdRkDPqkemNDupTBzwPEX7N52TvqHnYFo",
  "key24": "4mgVJDX5uGn3SbLT7EYKmFNb2Lhr986RZG2iX4Y2H23REfyLtuTDyZaDjC1NAU7T1WE3nCKTcTmb1WU92uBucziJ",
  "key25": "2zSVqjZeyBKBYkNEgscR3rsRb6jowhy97MusbBPJKh64aAEkkhunQe5P5JrgWfMHNYBYWmgmMYUKZp3LtiUg7F6H",
  "key26": "2GYxF6ARHfy9zcBRzh2pRjE7xyDBCeYVxuxGeeM3mytBJEsKg2qQa2CHF7RovbB7a5DXnHSZFe85CkURNVKziQj2",
  "key27": "2LvcQGc84jPHi4hrEbzsumheLMijeYwoFGGF5QWfuqA632T34HiBMoVaYWqNd3waHvCVvY2nTDYof9McPSZ2unmY",
  "key28": "4DBxfTgfmfkGTzHUMQ7f3gxpCedapFc4SXac2dJvErLkhsyu6NDDnRpQZJP8uAWX6mLbWSZDy7VACf8z875MfNv7",
  "key29": "pHo1RLJE6TEJpUxpGP14w1EFJdsz82ACNeJRtkLrKSsvvLbVTd4zSC7ayU8uGfsJp5JmQzUCy7np6LtGK2F2Zzc",
  "key30": "4ALJtMNDDBXFxNsRfkz6ckpHsGj7Ywqg8jVtzxiXtz8Dy2hvi57KVW6DQGwSBc3qaCapwyS4KTcCJofEqttYUPRN",
  "key31": "3prF4UFnj9adsStcKGKzHKMfjuSU8CyNweZMVLMtuk4VYBSfBBEp4FF2SBh8VSxZ5WTagVd8AggwqSykKDEEEgkp",
  "key32": "VPu382JoE4xSFiA9odcEh588BJdnsfbBDe23SmTabhH3XxabuwSRB37Wmc4vnVDbQRgdpD6eVMeZB7kcuGckeCk",
  "key33": "FD4P6ATc6865TXtthTVTz8bzmf9UKHja2WSWNGrxRwhaa1AeHZGMzxuqWFBee8J7gakCeJtxtmwczVhXoSrBHAh"
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
