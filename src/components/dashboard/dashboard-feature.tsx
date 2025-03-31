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
    "4xn3oWiNHSxQy7jcV9BUHdpK3XHXQVJ75LCymLbiK3wsvKnrcdy6MMGaNUqHaGiMHFEa5hGLdgAqJt4X29cTbdNk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yfXaumgYiEAMtWt5fStpsHhabrcc55yhVzVsFtkh26fi7aTQ8qga6wirt3kLDnfAbT4qGH8MaSk4vDFsArNvaL7",
  "key1": "5DgmJ3PUARfcmSwyyNLMpQcmEYFZdQ6B3Dij6zB4KAdLpH2EGW4WVAniSsVk1CgDVbdsmrPwsMzaA4WogEbG5Awt",
  "key2": "5aechV7aDwn1RYHgVpmngjzz6XqhRB9RjhRSB8Yk7MB67SNVYWRwpBG8UWZCsCxPSxywsr2wbyBmYj42rrQGAGCA",
  "key3": "2KG5nsabgSeiESe4XGYt6M1bz4d4V4J9UVQKw9PQE41L3Le4QxsteFHdmkNmSEjWPRVXAesRpSJfnvdKKFzXDTxA",
  "key4": "23gCcRQAb4N9PNWdXvJ5NQ8UKUAGJZHMAKzt6h2h1QhrDQqRuT4YNxAWHg6DsAPBBkAmTJ3b9BS55asRM6vgMmYC",
  "key5": "5BC9rQ3QwG9HgNHxqeDKFNt8gqH1eKZBxpvUoxF5MVYfLCTqwYuREJaddLLGv8VYiaYosDPjWG1j18ugohkDHgSu",
  "key6": "2tZiRZjA9trDCU84rphXZ16VRjsnTjejHjR7uj7oNwTG4ewfEc3nxmydtmF5n2zNhhmLzUGaZMrkyn36k9SyvoVV",
  "key7": "3jdqDzSUtfvhkvJQJTjqKeAGn17jyavRoyRvwCoPLUQ334HJvvBjnBqGgPr5XD18BZXWLCvUGTMLW79tTr5dXjJT",
  "key8": "2XZuVhXDGfqbyPCYzg3pnhkkf1wL5euYM2tm8WDByQQgpVdZ2Vs54HNFPB7xiEsVMn3gAJ7u1UmzViVUCBZ3NCYn",
  "key9": "4Ly1UbChbWj2aGEEo74tyAcj77Fb7v24pmsAUBnJqMKaw5K1KpkLvxQqy6HYvPMW15fuARiLFBBvezCdjmddSvkF",
  "key10": "31qFZ6KA6RpDxPAEAmsSeTEtEhqu5mxCi7NAgXBmLKfZfdsxXF2guUkh3DgoHSGDK4PHPkms7ZunPaNFyy3o793G",
  "key11": "2DGN8uV2xDjMMic8p3Qo5PmET5d2XNu9zE4Qg8MMoWMsCQSnquNuifqkWzL81YCd3L27T1tg1G6KgZg9ft4QVFkn",
  "key12": "5HqqJ9JxZwrZY9PBXGe3qrZ1pMefGfAe4w5YpfAgp17sYf1bP54a7vQGHfexDzzpKkFt8K1xYihNJXcZC4ch2GcU",
  "key13": "4dGtvAVxRt6cUtCDvGQM3SVG6LXj7D2ith5kyNxW3vaYiGdsguNhyKNMAfnGGQhp2LuAy8m8HudaZg8tuS7Mg3w",
  "key14": "5XMu8tdjgqAmBXrsMVQSzsXMJYJz6cgHE5MzYHWpHVqTZw9VsyfPsBt6uWP3DfFz8TeBfS58Fygh9zJx2XDPKVA3",
  "key15": "4KkNGfWv9Pyqn9L16TS7yZ9vsQSGoKYKAtpXZ5eT15LfhNxje5ySqBKfTKMtqL3DvW5zt68XxLEoinMSTxmJVzkw",
  "key16": "4tiBxHFtZ6kF5MSUSt3WdRVSJMs6uNG9zcdjh32AsBsnBeuJR2vJJu4WgLnTVsp4HCitxf8y17sDFAwYPEeBygbP",
  "key17": "3sHBZQGaeQrpgJUxh2Gbo4iFqZXLJ35iK3tpvDoJJ5P9XYv12zibcZQTT1XJCRouDbPoGZa5Y31UKt1FRodQBCZc",
  "key18": "4eLLcNCPTjazpfyXUgixwzEoT49vGFynND8o2qL8cLjiWATxBEDSMTvHa439MzQsLBPBW9e18hgSZWUFvwkhrLjL",
  "key19": "renMUpwr7K3zY19sAcKtnRpVxo7qM6sJ5TrmGXujAskGYNuFruXb7yD8dVPGvKSWTz3R38mQd164uegax1kYE4e",
  "key20": "4WLTkoXfqP13SLwVV6L9Am3QGUj2hj6Qh48ZKJtMfduEYeo2XvKhTvVS5ztgs4HnhizzoTuXqAdWgQM9Z7XpKvEf",
  "key21": "49Bwqkr7Duzbf64SEWQrrNJrhVnVSJf6epNNMVnEtX3qyP5GTqhp85DryxqZnvwAhoBWBQrASDz1xws9V6QsSBL",
  "key22": "3GcyCXroPnuQ4Htf2Zj9xKNGdFwnRDeMzQKC2hfcZNSQuwiTXoLEuVoAwhJ8B4qhCWtgqDXaNFu57Bc2zSGZNFpt",
  "key23": "5TBsPnqo5gQ1J2uzaqCsyFS1ReKUQLWg8DEezEZrdi5X4FsqzzCD8AiPa3bBPem1o8hCeKV9h6BjPEXUAmt5LrZR",
  "key24": "4o2YUaiACtLb1q9xwAbHxdZkKj9NhgU47G1PGfUadKq6H1jq8itTtWh6iG8jX395dD5KuM6LQEuZEKCwm2ToPGQb",
  "key25": "4i2ZLzfzDadxVopzDdCScNoT5QW9vZWwdVt7rmFL5rQstZxQDDz8GTQQhnzda4fDVkcfyAPUUSu1zhr2vhdSRubA",
  "key26": "5zHqnwX2viwQ8HJhKaz5L1KruRQXkiGwPkv6J75Afa5HnGJubK6eKogiU5CfrcnHBNkoPN6VmUuuvMXmEWzEArLH",
  "key27": "3k8L6b14gvwETVfoJPrDVLyTr6cdDp1AkZV2ZPmYGNdAkWb1vRKhXCtpMekNEMZEMecwC2GuqtHt8Sx2mt3BmsjD",
  "key28": "4oGxuzSQQ4FeyUwKUUh1RYe15PoTuocP7FKorURHgHzjVv8G8oxZGWhb547TD3TPuR8VSjZdYEf7d24PFH77tuHi",
  "key29": "cRjRtxmYtXe16rcQRAgx1YmewZFx9T32mmt654Jp89M2jWo2UfnDNsUhxRis6LHQtu1mcmUdpcZDH5M7HSeoZQH",
  "key30": "3dvYvn1V9e5ZnHu91oWkKbuanaScqrYwKwGqRhXr5kwy615ADt4QtpagMMQMURY1LTgrjmELLvarixRj29iG8ZHR",
  "key31": "2DtnXHGRPZquzDUMo1eot48mmqanGNdNMfyMDFEPwA7iohyNFyPyBPww9PUnn3VwChQC5KGAze7eVztybvQPhfEi",
  "key32": "4fCDiWj4tuLKVrMGXfLr9BkSSEPJfCXCqqGPuUsyB8SGgJMhRCF3RYfebodChspqMbjXt19pQufyNAS6jiZ4UZ1S",
  "key33": "5URd2QQHf6xUPry3QTHYd3umxxEQNcHUpD3jr1wLGtjX9XWCk3qJrgrhmqKqGpqdw8ZXBJeDjFys8P8LbdukqFhu",
  "key34": "3NCL4PbxKbzcuvmfRBkKt8663JX65wXxYCXYxNLGS7hVUoMYWG3SjReYQzmYGkoG6hvbZkZBbD8rEtctJhoNHD11",
  "key35": "5B1z4bMzeVnZ1b5VQhEGwPwUK3x5Jss4af4P62XesvS4eT9EZUAvGmCFrfGhsnfaZebk5iwRaVP3MC2Kv14ThNt7",
  "key36": "2Nnz9p22wt6xhhm6YE5RVtrssYQcNkrtyf8MiEBiVe3BEgMXDXu2x3YwJPxKdfDhV1vkZbBwPsv2cdUFXGKnLBJa",
  "key37": "tVbfVEzpsE1pgNp1Tr6Et2Zv8uwJpKg8C8xJZaFy5qTaNzUDKNJgK9FYthAMUNZ2ECXJjpfK7aKWNcFrQrApM4N",
  "key38": "5pkofonzc7pQmsEd2ViEaGhVDBdgsBqvvP2mMdZKwd3XTYnfJqtXU283RfKY8KKtpcVqVkXeFhhzzf54X1f8WLw",
  "key39": "4PYZ9cXRukvQhUpUcGPnEtPn1q4N9ovnAGDUwRwkuZSZ3UapS132GJwbeX8mBMfj8koczvzyMaNCGNfTB5opwDih",
  "key40": "2Egdu2Sq8cU2sGD6QstX86gVfUCPiNWoqvg7NKWjU58gf2RwRmPrDjTSwAU6SS59AZe6jsDJScHUyyuDxbA2zZi4",
  "key41": "4WpmniF17Pbzb7JrGGAJPReD9cajuKWMAqhMLQnt3RL9C19FeYzLoGWp1cemxLKZbcyYB6Q3yGdyrzHrBMW7mBt8",
  "key42": "67iaskA8aqRSPonjdvpQ6axfrp1isbABYFzHxRybd6SLjxT2NN2Pyv9fSkvheKhpkycBFXE9hpfFRV4Hi8NR69r4",
  "key43": "4V7jM6G212gBver7N6LAHybXHpJXxpYghgxHFdrRDwCFLJo4XnaBBQ4GdrxJPBqKaBaXVswR5JTe4TSn6APiV9i2",
  "key44": "2RiS7vgRabp4fboNYgkoYypqsSexszFzLhUpPSe7SGYWVPcmC1hsbW77S1rx2te3g5KWaQSq65G2fp3pzetLWUZh",
  "key45": "XXtfpcKXNgK2z8t3GNsUCoMky9Q2jV5jx4eqtxxqvzFmUrpmvHdBnN4qBhnkmixZ5WZVStzWJDPqB5N75UkPeqN",
  "key46": "48aAAU4zKgVuATYj3bsVvfQGCFeQi6NZThyEoCgjYcBaa8nZ221MhTZrjZ3VujNJXzgkrYpUEgJtXQEhjanny1up",
  "key47": "3Va655Wvh94fYtRHa2T8ag3FLpUrxHcgHPn284kfHVEPSGzE3kvFAs9M7VcDrDtuvNfm2918zBYsfygKq6k6gW9p"
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
