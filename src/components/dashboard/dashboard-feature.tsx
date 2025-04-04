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
    "3Vw7iuabBY1rDipGYDtYgm5dwbh6eSAfpq4zQ6eXCKU2dKx2MBpRKdPnsTb3WZSwCBQarZgYwY6nDCAuQHZdoweH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3otGEWWLeztAGGerqqDiqUUgpkWP1DV13LMRxLuibWpH7wWHZcgQMzbsyixq7vdZrtuZj98x6uw7Z2nsSptNHW1h",
  "key1": "5QoYyXquw2EcbnVz8rLkWAUe2UGZgKHPJtB4VVUSb8gy3ZGBnwqbLCVp2Ues3BXsz1rRwPCsPVMrBsrcSSxKwAB8",
  "key2": "3zM7FtS3joqdj7cQscxRKaW2umQvLPsCpXvZgc8c1eJMJgfRhFJ9ctz5bqgc67hPsDuQ79jUvygqiehsK27kxMCP",
  "key3": "5jjMCfyEW6TBjvwTvHoUK5EjKQd925uRHryCJDxcpkk2kV4ZD4uQSQJKzR2MeqvpKsfGMR46dsQop86oKrYmeYwn",
  "key4": "51T4oijjnafZUBxkLHvLoBHSuPaboG5fTYdP6vCXJPXDEfsffG9L49xHrj7XDP6ekrnKGPdVKqjQpdqaVPxAWF9R",
  "key5": "Ui2MYe47v2x4NAvZJqGEiQGurzj54vRZx41s21uLxtC8PP1aoWFnorvuT1rHx8rhgdLHwtr3VRMkRyDXGNLrcAp",
  "key6": "2eU5gfa2njLDWVnhXJHgBYtcVW4BEdD1opdC6QAdU2qpNzhW8RaiSAB7Bz46nd3ESoiN4K2zcHqCqq18qaReHDUW",
  "key7": "5xcgJp8qHtxvs1RHrYuJ2cAKSs6EziX9ctrjnoyEiXv5SgJRhhAPr13JqWvUFbgbk7e6BJLZ8PSnvKZ1rywdTivu",
  "key8": "eUmkv4PezxcbgeUoYMvXmbSN9pv7CJN1CARhEzhQ76phVrKo2ePEFzSTfR7QZJNDAQiFcCNULeyHNKec5uUsSB5",
  "key9": "38sTc7qxiFx4yn8F5P7jpyZGTzQ2QjJichkhcicuEJS9Sk8Q3QoyuvKhcBTSSE7Sd6UVyTbQH3vUzuNqbjzsdX5h",
  "key10": "2St6AoYK2C9K8V6cH89FpxBXpB7bHPEP76cx46h1Tfwy58ML3E2HQMsqbrgrBrHk27DW8TRqfaf4T3YfzhcPeS4f",
  "key11": "4apk2VbwaojKj47w2cucmV4LgESed9ZTC3qpbpxtihStnnmJnz4azPuYE9rGuiNcg5GtBBoczPpK3iu1jGjmUXRN",
  "key12": "fCKh4xSK4nRhdFivcS5Z2UStbnPvNgtzSbwFAhG4UBX1HD3Qzb67eEccKF7H2g57iKGen9pmUjc63cETYBLSu3A",
  "key13": "yJuhDBmF928vuHxJVLdfXNPtG9qdiqUM8bbZeKFRnhYQ2vPiCp8BoD2vb26wY72pNsmR2ZWNCxanFRbApziW4Nb",
  "key14": "2S1mVvNGPRdyk9xythPQBpxZKRHg3casgSTF98NTBC4UcVUSt7Wy157Hap3tTn8YH1omi92yuwRCaJqxwcCXs49W",
  "key15": "4kdWhu1hsn3xRzk3B4gjhF7pMsrCLozBX7ajGXoczC5A4fGcYbHYQUbtNAf5zHfPdUyXCmshW55VdBLiKrrP2mYL",
  "key16": "4hZF4j8YPoakpQpKMBPRmMayuq9PMEua6tZUFyvXxRbL2j6R2RkSNHWzrBnmaWm65E7XWwyVUqSybuGZokEZqJK5",
  "key17": "3axm3z2Km8344FzJxt2dkjZDYQZwpUDntUVibTWVsuNJ4DQN2Q29hzhc6BLS9TLrXngKeNhorCjVQ8fctie6Lr3F",
  "key18": "3onAy79FvfohxxYJJi9S1a8MUwgZVJ4hr1pCfovMRDEvSeTZyHoQXWmA4TS2w1ytvKSgrZ4QmQ28N7wkYLqYsjg1",
  "key19": "5MGo4G3H32xDnkgU4Cj7rmjbTzWdV9UmGP1qJq3NyTuyX5w85MYrZjDTCAjFQgmr4J8Z2HYx42J1WV2CJ1R2Fz7T",
  "key20": "31Yu2v84YvunkLYBamkEAvJj3qBrMeMkNfbM6MQoNaqzb7CuVumW3nNS848Pi4p8uot6rPBa8bEqYfJuFsJNMu1m",
  "key21": "2js4sEu3ihpWGb8EXCz3zV4vVHPBcnctfXnY3owMjdHPQANQ19QoWm8iFVfyviRYAqaK48Gg7LmCDVkWU15zLTBR",
  "key22": "kHRZm65dpyXq3DC8MuUaqF5kaybvbT1c3zc1yZokP2Lc4j5NB8ij1MdHYeYtq6XKFHyfwQWadPKp9KfL7AEuarj",
  "key23": "4fmEzRNd1X5EwTZM38tMnfEyni9WtCpA31HtbB6iCat56aDhZZNz99RNqNS3M196U6emkqcs3iC5LGhTrXRvG8B8",
  "key24": "fvATLV7RnSf3ZiVyZg2ydxtQfUCMoMvy5sYNMx3y9Mr7XLfzjHhA4Vyx18QZKEWWceyuH6M18aVCSsW8XotPViH",
  "key25": "4aGiXwzxWSmcytQcVnHDS7mSvATqMYiYyBMwSq91Q6BWWYW6KcRjeY4yYDyAy2NKtEKJ6PtiN19vQUNSNt58Zm3T",
  "key26": "42s3perkPWwdvetUiN75HXQJHw6JNKELdyu3Qd6Do6qSZvygA1Gqf8RoJg3rknRQnBGYGFfGo9DDGsn7tGxbEaba",
  "key27": "2Q2V537tof97zHnC28sVAG3wQPuefLsShnAgyToebaJMX2CiZDAD8ZTKHNesdxN5qwgaEDiSRjUM3E1gYp6F5Tm7",
  "key28": "45Rw23g4gE1hkaNNK99p9mybNBoq8kKCw5Xo7o12ggs2J6TkP2koqowmnmmU9iiCbGpKVrMfWDLKwvD2BvP6bgD7",
  "key29": "4JxTk6pVgC9ESStwebHxYza1RosPSCeuSRKKEC9AS6BKvsSEfxYa9g7qyCwiL8VCzNBFwRGLhxr3AfauiuemyDw9",
  "key30": "5N9Fy81yLWLTrJovFV5iYryjCUJvEpjRBaPDZhHN2NXUCzu12bGsJNsQAC2nyfzS55qBucW4tkVVSin8F2XMBC28",
  "key31": "4FfkyQ15bvJuf6MUV2Mdm5UAzNgf1jLTfiKFyNeqptLmmXHQyQvzCURidubHXx7pduTUsGeEq8hCCseV9P3jdQBQ",
  "key32": "3P7HbVjmH9NEgCTeuXECVMKxfLhk4zinFTFuvnUbUhyDPkGuf4RSSJ42gdvWeVjq1aninV6jLLBwUvufNBzpVAvV"
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
