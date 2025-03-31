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
    "5fjuXBejt4zSNaGKJpKg8mu12LBsnMYZZYtPxktzBgTvXPHFWAUEQwWzGVTeDb378q7jbUAWuD7Jddv8FsfAuyYF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EQerWfjWXGu544JQmc77as6RzzqUZ7SQo9bbCW9JPy3ApX8MmvdoEVFxwQSqoqyasSE1tSWQ64ASrttHFv6Zw95",
  "key1": "122FAuuyanWgcoNrWEZV9PYKKbvyYiKmdRyeNhbxiyUhSPcwgNDXCWTboKRL3ZHyaS48EUa5Dz5CoNsiy4CVQi6S",
  "key2": "5rSBHNJYDiWbg7HwQz5yRXJQNqEncuJ5AEEshmdHUghVUyAY7oyFg6YpX1Cdm3X3M7nao94MjDiN8KCGcEowucNz",
  "key3": "4kfKyFLMHoeWvMTqTFahUPXjmRhSQrkgks8XT51UWKxzKHtZcxz3NNZeMwSqcnVyJvHF2XjZai9cTjPMo1gmH2kM",
  "key4": "3g7KHGonpoiWk4Rv6rAaf8jnLeJcoy9mn2UjaFN21PBq1X1j7xt1oTSoqoRadeANA9HaSt66EmCgSzMtW372mTjS",
  "key5": "2iPu5NFfHVK6bwzky3N4BP8Z27h1rncr4RGaWsxaMAUwtLZdnJi4CuFV5mwRqBT9i9v9srtG2K7Fvjk2Ku2uzRC9",
  "key6": "2PrS7q2zF4CwpBHK5sXAPwNiLpok4VyJc666hLMjs3auQ6qhti5qBzR4nY5uFj6XerJBZj8Pnxuo4r7zbWWyEDMd",
  "key7": "2VBFQLjFLUi5vbLkuTSJEYB3uAoPx1XtJAHScWSRvAs4Hf4szkamEWB6ZgCo6jy4jEneQrajcGiMPP6mrJcSPqAT",
  "key8": "3dtnC2TztbMDVx87bEMRfLZKWAHdnow2PsZti8nf3Cz8BEJmKozwcSqWusbJAaZsz63bfVti2YWakDeXeRLQ6Um8",
  "key9": "2RQdTKvZARQ1utdQQRTUK9MzrnDKrbEUFoFVvchaZmkG14DR24xe9DGRM9YA4piTo3jVTSbisjbvznEb5RXdi9K5",
  "key10": "3vMzYx5gPqXjvq5QrUoGsNFqRsJxHwLgQwo312dvpCkH1cNgH75aRsVFGC1mp6wMQCUT4ksBdNgHx6fCZysztV2k",
  "key11": "2P5PJzxeuwZBB8uV3yZeuEJY1JjGcDnbRgmCnYB4vSUMkprWMvyW6gRaSXfZ1kvQ5y3CQmoXKmaosp7NBvGQaaE8",
  "key12": "6PBji4ZTByqYAgg8CtjFNYfGoDedj4sea9YPEvv93ZsyuemrY1mg56wFvArVjPygjuYdMhwx2wjVrZykxRzXeQe",
  "key13": "474D8jnDrQwxNWKggFgb47VEmYS9MkoFhCU3B4bx9XuqZ9ZHqJUizUURnf2N6KxhJCYMq4rtU1hnLB1Aubkt4apm",
  "key14": "5vDX7hbwzTQj9WGYGBBSHBqQX3hwfSigAETw8yqqubp36tQym6X6QVNKZ2bUATqEkr6xFfehcera45nu73NB1drG",
  "key15": "5pUmxfF7V7RgGKbbbj6jmdqYDhqn5hLmgWvbTjXxRJCS2ETz2EB17tCeJHPqS9KHgPjjctK2UkaTMHjT2a2yAKGM",
  "key16": "5fc1QRo2umahiR5wEo71qN2SQhoGzNA7y4SjDnq69S7zu6fPNFHKbmKsnSj9hK5yjcdqbrbtiEuMRSTNkNKsy2WC",
  "key17": "2QUw8dRMtQZQ7VTXVUXzYwL8snqEEDRyKCgNty25zXFtkrhZxNvvC7CDKRrc3CiazzzTq5oYn9iADTyNJcd4SQSx",
  "key18": "4iD8zUDDb3g1iG6GnVcS6PZgTyjsYXZeX1nstVDuJUCwFV7EGhkQarziLgCjhAPJRTQJBkuucQgBBf9VgstUT1Y2",
  "key19": "3eKMA3HC1SYJq6ScQC8mcvKC5qvFBp7wTQY1JpTyv2ZLQZ6eXRuamkH51xtjDUCkTtaZcqETDNFfcG6np5EbvZNb",
  "key20": "3Vp6ZvfNacBB3zTNaPJaxT5jTwmBhoPEZD9zb1sTXL9LUdwnE6JpgPxLzTrFr9eeNHeFZGFWQb762vUaeGMtn5Sk",
  "key21": "5nqEFY4q3FKduL54ue3XRTZzwe5B3Jz3xop3woyJcGBUqgyk2cVUGGzmjKjtzGtQbjb5FQ7FyVrajo7XLV3FpYBM",
  "key22": "6bmsoVxT3ULxR2NhnzE5VuXiXmERY5Cz9Meoyb8TgMSPNmotfpjmoe8GZc1dXm8Ya8RdcaBw1jhj5FhrDZaqTSK",
  "key23": "4EqBwTMdG2JZvLcxH1uxikFCwQRhG9b2vkYPwfo2Av3prbFy6GKcdFKxxDEdREMHsbX48MMKFvd5vBdi1LNqSm9n",
  "key24": "5ffDejrNkNb6W6gbzXE6zdQG6CreAGkN4UgfGc1rZP2KVgGRa5GZBuyWo8A4C6fn1SsdszrCY6AC5MYKzVw1Hv9x",
  "key25": "4bNoH7hi2MpGN6Ry9TM3eyjCauuXXWqaQFt2mS1PD6dUq2SVN4tCedb4589S5USxrn1odeFMiw4uWbYSbtwCRQ3D",
  "key26": "67TdZakcZKZuxvpgXp9Jx178yMCq2RAiBebHeibm8TqLc3Q6EjuYtzxisR9qhGciQqEwbePxuuPx94kYJDZMh8GE",
  "key27": "4wi44gHGFHTVfjWAi6wr1dYqYq3DZfCrJMitePRA9FfXs391ZoSgsmg6kb9e5v9tYuvKFpjkzcX939EHVLfC83Uj",
  "key28": "2swdM1mSC4Jk4adkSYXgevCe8uPzwy45hfo8cbmZaEDPMosYEjfLvdMz7uxPAtHtft6Hw3esrvZN7QaZQFcuhVZw",
  "key29": "bvv43ckwtKerP2MY6PGR3Te4jdG5QYHZKJ3fQCWpyuh3YWBWQYNCGBj4YAqidZNJRijnsRwgnTUxpNAY4Fuh1VJ",
  "key30": "bUKnVgLkva4pezudZn3t4vaftdCsbeB4izPVjtdyPqUiUira1RgGRQEtwYLevu1XHMGGdQjLkg7GYXPqUhyBjJ9",
  "key31": "2D19q6SehviuzJWkBthUp9FACvqLSHrMdCgoyaj7gQq8PivueHfGc8RjGmKboKidYEMXifajFNfwi6dBQc3GdrL5",
  "key32": "5s8eRdtCt8nRJHzmLKfo2wmwA9NfFu4Lu7dfqcfTipLzR8kt4yCq4L96p9JRNRz2myaBsPjSD5zHjRtMvoGVX97S",
  "key33": "4o8KmNpfmrcy6tzYTjqvKkESTSpH1ou9xJmyg4VfH8qXrQB5wV32kygQZXnxPtNoygdDNpeip4NsGgsxMtxWin1K",
  "key34": "syhhqEpfDecaEAngEkKdNnNJ52kcAnSsodv97T7amm8aFEwUH8WTQ4HcfUVwDadirnZBGMvZADSn7eFXCNoueeX",
  "key35": "HjmtffuaZnfKGkNMLGd5PBFzF9e3B63yRivB1yXHWqjbbzwrxiqT3WSVyUeg1YXjaWPkD1NH2VaWxQYzXXp7fdC",
  "key36": "3v2GNaJ3o8fSdZrumhKw9EH8ZXamrC1eQhP4idxZmaKWGx91crvWCNnEZ3MVk4A7UW1Ab5E2pd7ULooCyBj2X5vh",
  "key37": "oXce54H7knExERLKDKWVwDTABSzzcNhubgd8tuFCTN8kCMmuH7QX1Wi6kVzC5UXffYVgu7VMok36eP3yCLQQDZg",
  "key38": "TcDKqYXD7xvHm5cEuM8d3s45J5cMff289hJ9WXpNbDY5j4ZGBptAyEajkgAhpXg67MCYCS1niZEjuNqnLFtAysu",
  "key39": "43GvZNNznPZuCDPdKVUM53akfkz1neUrNqi6fiufrjF8BzGxKfhqpZjFPLuAo531Xg7qf8QrbfBs1AuLDxRjMAvF",
  "key40": "4ckmTAjA5DVeGYnvLuzjkaEW8wD2nXZTNMY62ZiH8peWYKFfY8PjpGagjSqnsGAdPv6kzV2qcdtCi59cYdTsvh3T",
  "key41": "3iknrM4KuaKpPhS5TPmjRhyFiDWtSi2AJ7dxQnjrWtQZ63kAYXfHgufwNSEiurNGH6XTS6YjMHNgb4bgYs3GniiM",
  "key42": "5KSz9LU15Z6RBpeaueRBnTKxZz8YmwtQ3c6q33rzDBuYQe9QfwhB57N4MhVo5yGnT9p9bKUU45GV5jnt8XGam6UN",
  "key43": "VrHb6EGpqrDa8bkKn5QXYX6hYxAvrwab2oK8eXbfBnwSx2JDGesa1NYfmceUb2hyiyULNdXjgGvyxKZAwmdraUt",
  "key44": "4Hu8B3Tw4FhE5NrKvfxL5HQYDUVytQo3z7tHoSs4L8mLidvLU6qVr9K4rs4cM4Cpi9KcBnxCDSq4pVKbzBVMp7Lz",
  "key45": "3ecg4zoU3F5f8thaPkAxeCajLq7JmutfTigbD5NBmCwtUV3mjLmqG6ubWtseDZw8ZZy3FoJgpc2quv6uzDebycST",
  "key46": "GJ4FkN5j4D1DdXkXRYtFmrhGiWhDJPQnxYKvwd2vVQ3MbcyBkmqAXAEcL3TYDcQ5YPNFKfN1gVZw5cPThyrvT4w"
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
