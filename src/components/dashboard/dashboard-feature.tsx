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
    "hogsoJC5rY4DbdorECg34pfC8RsDhkQ5czhLrVLqREAmAECy7YJcRCtJbZLHdetZ4nDrzg938Trzkb5sr2dgozu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mn2Ce2PQ2xzGzoizK7yGsmJSW6uk3D8oXP4PNugxEQeECa9NYXMpfHjZpNRmqHE3mfNoV9vnWPs2VuNiHF9kxM2",
  "key1": "5ct3ErEmCTK9M6sQ2qU9SxV17t5yo61HLrSuUCqHpQxaNchaQHLHj9aJ8AcByQwn2RWuKRWrEV6HzPBzFB7Fy7Hi",
  "key2": "59WHabKkTELGopBzZEvmz5aDekBppzSw71WNKZ3wNmkaEGA1sTtgyFe47tK4rzUb5oi5599eyeXT8DRTGyejF4b",
  "key3": "QayzT7qmgZayqxmNEJee3RhCjmYt26fejkqFAonupJETni8iuBb3FK8A7uzUbj5CqEDqn45MF4bq7qMJdYXtaLZ",
  "key4": "4VTA64Xsx5bU1E5d55NR76RNRejBU5EKxPywdgRgjxv2y5jhHS8Ztn1WGtePCfcmn6ZHGnSpLSxYNRynWU8wp9GZ",
  "key5": "yKXVcDVfi5Kwfd7zRC3TdDd585rz2sQdFukjHdB7ENKeVXUZqoApucJkEL5W2LZHHbgodSq6tGwPfrtJui8Km4k",
  "key6": "3u9RrpHAH5JSiF9cWW1oAamo3MUm4Jz3EcHoZLiNWCNm2Vm6eEi8hAwdZVEUkkn6eWvN96Y433f8Gu9oP2387MG8",
  "key7": "5n7k9ieSUi2rTsPsJ58s3pTQhm3B6AUzpoTnKEuFiyBjMMXawhcEcCKPJJyhFBF1NvhR4bCMR9XfT3FuaDDuxKQm",
  "key8": "f1mWYse3HMSGeiqTe9K2su4ejjWErQgPUJFjPyzvu8kmBynSfCk56oRcqKirahvRiRfa8sy1JVBzVqHCdsm332n",
  "key9": "2xbNxiGda2NR8b2tXovoK6QCSPqwdts5RsFUxX1Dqa9d5qidnXGtXBf5cJP5hYJrpNvPRg7grtjVs2jBHFnfqMHj",
  "key10": "553Peo1SfHWGocm9fpz2oZahhftnDU1AT46uX1Vz9rLJYQkc6GE69JQAVzrFSFrGgJjAuxgyosxHkxj855sb47cX",
  "key11": "5bxyh3NmL7VzEQaRZw1xETQfHdVzhHcKFJqLkVvqKxfuDgcdNQ8pNENbbGJEAp3joDeNZgVMp4xxMSwhFoKyxTtH",
  "key12": "5Gur2ev8oWKmZDoEYWgDkUPRkQvX4d2EfoR2yFpPRpCHhKWCh4NUPtStMQoYgWbZ5ww946zJRssgaiqQCGSKEYcv",
  "key13": "2aFtwF9t2FP1osTK2VQrJ4Z5bBC2HQ9CTp7bEsk7c8u7NvUH3t8MNtmXdHy51H6SCGBN8ZqHXtcuBViXfVrR42iH",
  "key14": "3UkcuxASHfzhBiCKyVSGAjKpRgPQ3LYR3d4cSj7u9zGwhq6kLbHzpgoaTwS3J79P27ddPzuNN7xrsF1xv5gmXSnK",
  "key15": "4vUBGTgZZRz7VUzvpTMsW54ZSiP9DArDmWubGJ7cWJsK7huo4N4UfkKQCjc548uzqePt2tEjM3ne65hyh6v7EcUz",
  "key16": "34SkUyBHr2oUTXhg5f8t3sAAn9WYzEFHjW5PAfHLxYbzAzaRwv8SnreV8Kw1nKyKahkrZg9VxYtRe2r7HfupWE95",
  "key17": "2Z2cAotzYvZi83hooT6SL8EYAckDP4CT4A6QUS4XwwwF5TnV7jzEMnszNBmZxV1DpyFwDESdsj27baHSCA3jDXwJ",
  "key18": "4YSqsXNPQXcf4W9SwvH7mLkGRW472fY5gZyGanFGMRhiXhe2cRYChMerye9Zfsyve4LuvMuFQ5YKEig3FZwM57xo",
  "key19": "Zw5wQXqrtE2yxn6qBzR5xsBPKtGzA6ATxBnAcaCYEKrYHRRyQh29RiGam398yyZt4tutLvqFWDx9s6kJGEHowx9",
  "key20": "4Yqe8TBK3Fr1d2tAexysPG9aKTz1N413F7G3BD7xThcBaCDkQkGGgGHMGBWMesAALZBdsmPQzdUA5ZoNLw2CGQ3W",
  "key21": "2K4HYLNGpU7aaBE1ZrjuDHmtXMPvXXAsHDvtQS2c8GM2aKEbBgWL8SseaG1hP2HvJGPysbQwQnjUiAeuPVR8LvHs",
  "key22": "2dF7QVFG5m7TGP8Lup1HLfo6fV5DniG5FnytB4RpgZSuxWujAdd8LivcFntPSGgkLuJxT8R9ozCLSWtWiGPGJedW",
  "key23": "4bTjZK4TQ6nDn3BFY3UiqEPZsiZPcnMuzyibJ4xcXzmnyYfB8y2TSdFmqE4D1J1jS9ZhNBXgTtMRTYGV7FpZAyFK",
  "key24": "2mARanv5vkeVQ5Z2LRw7rTjncx2mVhEvGatg21GgqBEB2zQtiAp2Jp3C6kSJYT6WaMW9JxX5KY2Uzubz4aXZqdVj",
  "key25": "52LpcMe1gstvJuFNeSTzgsTuuFQoVJxHy4dcxoHXTUmecjCEtB7tr3nhot2VPtA1WrpFGyaxmqTTiDUuDZ2H2pg8",
  "key26": "4rQsVH2Wp8GCK1HjFsySexwB5yboRBHUejsoNbx59XSmZE3HLUCqgVHDTNxSCtR26vv5nF5hUeyGm8JiDKTiZuT4",
  "key27": "4GULRBgffymUE3RFxeajU2yTC7BdCZRDVRhH28PVinQkpYhg7NQvfSUfQLzxpAYX2ESqgGk81pm1b8LLp71BeMSc",
  "key28": "Kn8imgZrgkNL2mgywiKJmYYJUmdNbwPPQk2pYxdSf9tDiNr5bY6BuR7Ahs2Rhp7v5xPvv57a4tALJkQWM8P64ec",
  "key29": "cgRYpYzQWDuxP4vLojVaMYC2hRuim7Mtbu3y966w1JadoWWfrLLutcKC2kYY6VjDcx4itdJMPDz4bwt5HH6DCPC",
  "key30": "2u4C7SsWkpXGRy3gSb4zcZVu27XCCzN65fTYEjnND8iiBbFfjKGbT1NN6J6fAWVrMopR9CysqKRCjMv89uctCnPZ",
  "key31": "5C8f27rFR8oz8PkyUCFbHoJNfHWtrBSCtoFhba1ioUDTjJCUydc2Eqk3GNszkkjyxyNFm3qA8J1582L354npKdfu",
  "key32": "5eAJYNhRvbggKCNxY2NziQVUzUTTY9pU1uRbwwnvS2i8BCLAttNiJHgSfuVozgHSZB54Uxvc7YKzU89WEkx3zHYx",
  "key33": "59EEws1c9SRQmFU6e65tDfmxUXJ5XdHhLPLJe9sLAD64KaAyXLtjnw3VBFpoc9rUa4QXTVyXthjXCLMJnLbb8JPs",
  "key34": "5qvZb6bdK5xTK6sdXxQKAa8qiGc7enSK5gvDJsgcHoswKuhjYu11Euaj7eKDHxzPckRXRYbdkcaqKQB3Jd37FXcV",
  "key35": "6qrdd4UrtFEtsKpjtKfMGzNmbzcSfn8ze4JD8dC7QvHdQ3NjUV48opMXqSxiSsVDeVX2q2YtxXdJfsdVgsXbmNa",
  "key36": "pE4mvzoPgn4S8wzzSRP2LXK4dW1P1KCp7WtedkXhUMZHDES7iE3U9qgKbQDYZ7JvtshzQSkunzvRXcaZQw1oEGX",
  "key37": "5rmzd55HgiMwDEj7Vjf5ikbUQm6xKj1hGwaNsQo3bXCcYnX53c1WNW9fxZNwMVhFqCHPSWEJDc4oPk7kPXv3KkEU",
  "key38": "5EPA8cGfTiUkP7wFAMtYqrc4BmTwfimz2t5JvAnbWpD9fD7gsy4n1DBj3MjuL93DYhKWgVxMEak13D7i85upL5zb",
  "key39": "319pjyhU6HtwKk8ZuCfXJ7HyJKagL7nppCvsTDcxsceFUZ8BoYg8WPGGhwh7QZaUMamptpYgVs8cUem9aYoYvsG6",
  "key40": "674F5yU2qg9NtjuT98Zeb4sJzz8RYGymgUPyvmFgp6iFharFKn62CKtvcuik6JKEmJYHjPEwFjGpuNPGR4Q9jZna",
  "key41": "2d4iYnLSVTd1K1ygHuFanmLAU73B4j7wL92krFXmpC2VWwqFVjuq4jsaJpXgxLJyd1g2ZbG4HJGxQsPtYvbTpJDX",
  "key42": "34nmUVxuzYXqmn9nE5a7HvBUhhiyY2ARkbqSGgrpUeJJw7zjWuEzxquBy6GAsGmebPfyD5PhYK1LdKwVD4bD5Z9h",
  "key43": "4T71pDHzWriJDNe12SCoXWM7ui3MymakHLmuZ75trzaUxoDL25Gi3bft3P4T8LiAGzh1pJMQRXSm1xH7b5J2PfCW",
  "key44": "BHkj6N9HZ2CmQz9iwYQTcGT87xsuFy5e54EH1XGLkDZEjDMRMbCqAZQ2E4azhnU5QopVFW22HAhRHAQ5wSsJhZy",
  "key45": "2pWk2DzqvNdjo8smvAHvrEBMozgPtpDtWHDj9qzcNrutBqY9rFcLpnT4p9hFYmUDrEn1wPwSiCNCUZ2tM19m4bK2",
  "key46": "62cBgLTcFgphHEyhX8D4QfMkU8UJprHJf8bJsTUyisXn4ATJK4yeMrZihdLGc75ax92RmjV1k81AL28673Zzcnht",
  "key47": "2ZBgoJzwBsjaXkJr62dEPxeyfgwaox2jrto3Dc4gGFfiWwKymgPWTyvxN6h5uk3bvtQcg42SmeSEYY9xiH7XhDjd"
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
