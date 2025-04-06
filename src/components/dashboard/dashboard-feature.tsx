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
    "4WASRYkuEYwqA76MqVnXvQkCvJYJJNgsuE8bz8X8NVZ9fa4768x8XXL7dymyCsNx4jrZugRKeajpAdf6CrBzMVtf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LEq4Ba4QWgipFpYCZUoUdDiwFx6Y6CPotD8yXKmbv4hd7anqFwMavKcRTc4Cm84BwLK91RBAM9Svh6ksUQVnKZS",
  "key1": "7mQ8mmzGTmQGDXdoXDLwtmGX2Bjsn4TjH5PUyY794BpA3tJRrvA2j39f7NNXsG5Y6VjuiHhEnuYV26JXukgqTua",
  "key2": "48hrazvQxABVLiXH5gYUE1J2dyPCPBnwNpqTuh3kNaG9tWYDHkMPrHf3uzKA81pzGMc4NTEp26QmnXfBCAqFciuU",
  "key3": "ELbALCQVvDXpQpaQmxvfYuH3xiWTaihhEQNicjdx9UrTSh77yGqukuiHEDRs47adrEEZgVAD5migF2uYgx5WUM2",
  "key4": "5W4u6KyRB4qqsUjDFJCp3Uyw5BFMEGq49DqGWSn6Pk5UQBpZ4TnJU1uVjsAg5wCgZfK1ndrpYCZnBeptLosHzPf2",
  "key5": "d1Cj5g6rU7HLkALbder2YZDzxH9WLSBhZdJGw2QoYbpkrdGV8pKofGt1LrN9Dn4mMMEPAtkvY2UPRJDJEMtjYrq",
  "key6": "4mkWGHaQpzB3v3YV5oMmAHPKyhhedfS5bZg8CHKBhtdkGgiMT9XPMUjg8s3kdAmLuujcWvfuRrmNWPJkUVRxZJe3",
  "key7": "5mK3GutvCukoEpZ2rEBFDn12q3tPyB3xZ9CD11eBc3gt2FcwHgnVDQtLxnHqQWrHh3ovLqmnmD18M94EEfCYCWs2",
  "key8": "GV77qnBWGYVC85RA9tje7rQuq5EXLguVNGJXGcaPvy9QUjnn6cu9Y55VHifybKxpmGZUBNYULK6ZRmDdVEkYEUr",
  "key9": "4UTJ2J3gxHEZxu1FHggGr1bpeyzjm6QAkXVnARa4EHe6q77zDaE7uuwgBNmKF1a4RDPyGoV7WoMmyTAv6y58Qrnw",
  "key10": "3rQNsZbTc2bSdy7BSAzZMkuvDY7Q9ZmKxDPWvwShytemKZV7ntRZrQxGW7B24nagSdhPiA1q9tzXnznWTVdnP1mx",
  "key11": "5JWMJWNsG9Ay2f3YDuPti36XV2F1Xz1kwBmZQooFGehFK3PkqdGTmKEWjUBQ8sKCrf3Fi2DF5PRHQdve2mwEMAvA",
  "key12": "4CcZ54Vo6Fkw3iTV8gt49ckBGbLGkkYRonqVshpGiB4vWnP2E8qEXsGxHFwT37VnmqVywponeRWasouexxhSvymu",
  "key13": "2xAatEwVFJBeDNKdDebLKqCfodKUwBG8gNPseoEEkcJrFbSqskq4oyJEKMpXDRUzK4ujZHMhE78c4JLh5gRjRjo1",
  "key14": "5zuiQBDVeWAPEFyZ882W8n7Mic3a7Nn2PvL8hxTK6TGVj5NApxuRpTGQxz4YEBGQkc5twwMjQAFTKnCjDLenVQnZ",
  "key15": "3GbHY68FXug4iGsY6tee3qfQEyBAuVZ2yRiw4XTh2Ee27ZisDkP48aiX882pecjyEWguT6JbwB5MoJ3oqYpTrWBz",
  "key16": "2dz1tuohrqVQwG9a59VwX2zPym9dFnqmgZogpRvWSpJZGhmRNfM3kmj4BVzuEhMe1rGqf6ikpumcPjoM2fSMXmdj",
  "key17": "4EUo1Y1rU5Bgbv4nBnPCgeQvv1v5UhAYAs62EbpQheRS2xSYNthSmQYEZsVeLJXRHoHPvSAyFf3GyeeybnUFzcwE",
  "key18": "4wDg3PViBfZrRJj6qsFpoUzUShXjHpoQXmuX4PYr5pR1NpcY1p9on2Tf5u82SZocnfTatmCezgDBNApXPwASerhp",
  "key19": "2vzE9MNoq5eiUWJ7QsRKkQAXodZRLz3LUWgMUaGHY5MxzjhoZ8DQHGRFqFidZg9vLCAq1ei42Tt34r5wQFANLsh9",
  "key20": "4hxBt1t6rs3X6wZLpDTRbJoVn5FdbbhM8Rrzsz8XUd9yJZMntPXhvP7gj5hSujzZyEoBtvihdmYFk9JKt2Jt8yvJ",
  "key21": "63daevYh2Lv18CpvVnyXG6uSVAN3hoLw1wN7pzWCQVwkv6QoYMqd5zh61PwfujsCCD5soLrn6kSSYntCuQesU4bU",
  "key22": "2xCH9UGcwkVEq852c21UGpdz9mUcDTJD73Q8DRYQhH29KfKHoKfu4k9XfYmHWsq9CwrysXCZwi6jwwQm7zcQYmbJ",
  "key23": "xz5nfpY2YvPjUhGn3D4eNQH39v87uzC51YPU3g6U9uHWc4SbyTf7HzU1rew1RYAHribZDFqWVEb7CZjwa4qN8yd",
  "key24": "5w7bUYkUqwnr4gWv5d4QyW2QLT2PT7r3D7pm7sDScaAd9ScexmekvdnBHt8cyaqCWpv2KoZL6yKtpRyYHzbkeJb7",
  "key25": "JrwPG1Co4UhvzNzdq7evXyKzWKrsr4atevHYLHvqSo2EGw4TtVSC3K3jytSqqE25DCaTC29XVnJTkaYbPACgqJB",
  "key26": "4xBx7kf65FDGQJXJb1PdgoNT9aRNSBubeV3it1BeZn15u363W8gxTkJm2Kq1cYXciuAezvxnnWnsmDUecVXx2UPM",
  "key27": "RxfYt3C84pfamjZktcypeeuCgYJFwqGgAfHESoWk2LmsdGEXRJdwrTkJ8bev8mCwLdSbVgSphCHURyqZfpZS1Nh",
  "key28": "3kgE7LNgejGYcPHdzbZkHFR4Lqw1fJdUTsEQihpZ9L1X3REg8kXaroQA9qeiGfN2rBL4C5tbX2bEK7QjTWrMceav",
  "key29": "4taG7BMQm2ETY7DwLS81BPkkwCdLBucpcVFcjvbHQAZHTX6VNFDdmYUK6xhajGS9NWVX6g6mwUjswz3KVzhb7apM",
  "key30": "5MYztdzMaGWMuGFYNkVkvRqkZpbgEW6rGPED6T4bzAjuZj6CTSaGrBRSuY8UFqMsHxfpgZk3Meyg5rYQob3prMBM",
  "key31": "A2sS2tXEdhALYoMdhCBSVREARxfvoy8u979W3EyFQtB1MZ5vMEhVT4PUixHyTLFifNMUyjbPdLNKcYvU2HBpST2",
  "key32": "2e8jJtggLEb26FKSRrkkEqnVp7gSaA6NCtewnSBDSTqHHoDUuUgMCVSt32FBSgq8v9D4729rQbct5jR1F4nNQzCb",
  "key33": "4JxjGQEAxHeMZfD6ZwiRSR5RMdkJ89hRzYkERc6kcyUyF7GC4Pc2Z2nKc4rECsUosyQ7ewG8ZHxDASkRmna6HLZt",
  "key34": "4WKNEsJjMWcCGL1QgCx8jQCAG4q2KW8XiMNPWC9DPyDJ5q6jYKB8oiAsfUZSiRY5CnNG1q3hPUGSgyg9D7ZbFb97",
  "key35": "LF3cZYaEVpJbsQWimrU1FkfkbKv28aepoQdqun6u9zLbsecuyHN3bbMYxYMQWWZVwnVEu7VGYDc9eGrfqo1NrCa",
  "key36": "55BKsVr6Q4D7wKGzPVGDyhXk4DKRhVjHrAfDkKC1XdZWJaDjqpYBwqFZaG52KWxqnSSrgzvU4RotHTSa4voSiySW",
  "key37": "gvsoSWS6Xjc7dRSiwNhtzqoCnzXLxh5ZjiVoGj1EbWXdoMoe2rXZ1TFTc56VpsMqFSgR9KX5ErGJat6WRvEGh7J",
  "key38": "5pYJ57mmLXFpUdN9tY2hy52WeRTAKr1Db61Ui9qKkazi5mXfUSZrF2d4N4Xcyzc6MnG3mysMWFjWHpjFNekSkJSV",
  "key39": "vC2HkSU6RSWqhbWiRen9YSW5mwkiLEozAhKN3ycwrcrt5vb3tJwjqfCKpp8QSp6Ww896yar2fjpgCnDbTkarCYA",
  "key40": "5BqCPq9uWozhWKGaa6VJvTTjAfRBVbtbbABroQp8NwUA7uQcHEsYAUUj2eeLz3jDapos3Vq98VVHMTDR4oiEacXB"
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
