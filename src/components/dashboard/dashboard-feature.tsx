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
    "2nK3quku46iXgkgYM5SweuQu8eLJsndxTEjTpZ9xpRZqpBoDTt9s9Xo172yypWgMoHSX2NHDDPFP5f1jgZ4VEXXd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25vziVyqV8j9ZsM1fx6ghW6pE3c95PcJYkfpSvENEQ19o8VGhwr2uFhzhXnG6XesA7KVVgjvJRLDNzPniqyNsQST",
  "key1": "4EitKKYp7TDhf2PBJSgnVR7UNqPEg367YcBm7nqWvb44Kh84HFx5UmP74vCJZJMMdiZ6amg7BpKRqnNX2TdaqsHm",
  "key2": "48GQF4WhoWb3oCELiKTPZrFx9TE9wDsUN2n7fMAB5qqxyNacerR4v459r1iPq1FvYuTWMBedCoryx925JeFvSWQN",
  "key3": "5TzsWaEWQvX8yAuGvhhu1wpBETpU2p8d8Z8UN5D3PHiuSGNk5gPiXaK8pxAompcLwjdWjH3jqLDyK3tVPGUkTkSq",
  "key4": "3nELrVMzRWa6HFenN1RvDmeMaeCjydnYZp3BuJ7MjhzGxR7bP3bFQBGTYaFwJ8uG6PyHvEki3Xz8WSgBQDujCq7t",
  "key5": "2V6UwZoGax1QNykvYn1hyDH4aWWMZjEsCkBhErnWV1THa4qNKZkuv3U7Ct7pcKLi8ruRqvNsD3PABcrNnXYU2D4f",
  "key6": "5Ca7X4r2M4kR8fdcQDW3mTsYaXqMW4RGGG5wGQE2hXRruDB4VorGMmskLeAJbUsatseQkm2ywi8wkc36M5sLkrw5",
  "key7": "26g6ZqhhVffBpfqBkpsxZXjsPasfefTyntgjNHJSA2MgsJgYF4XmxpD9VPbTFV7bD4JL6Am3MAjnUF7z1QVgj89V",
  "key8": "3QNv7kzf4riqbD7RGNTPhVzSerPysgn1BfhTY8jf5uQVsk4DtEhcCzvWD2XWcd44s5Z3Qi2sb6pK1QtYKWmpMPpW",
  "key9": "5EqE7tus8idZhANgyQ5FwNkbpSw8usR54TuFVKnHoE9wggxeQYBszN2e4XyLMqFj6vhPbFav9UwBujVYVWgUkxQX",
  "key10": "4hNZJ6HvLB9E1KssYirGUssFpQkp8nEL32JL8rU7QRxf82u6kwavPGf7aJTWQct6wSo2wStbn8nncnAJMw9Rj9TY",
  "key11": "grns2MWrjpEWYt4hQepzVXBfZsH5EwHfie6ybHLrX5ivScVY7N1nr1FZSZzGa9vbw4UpH4JMg226tUJaGSV9DLp",
  "key12": "4FFoJzD4pXY1NaocZxZRVJYfG1v2ER6tSaN6HiR3qdi3CkDYWMieZpsLp1Wrwnd94LzsSSLiUMqm2BBUfq9A7xUT",
  "key13": "3ZLu1pAxtovD8SUZF3Pc9r6NjZKbrqjD9APgUSWqcRCaePi9W7ZrYzmNUUbyXPfsbafPdw7vHVWhVNbRUC1i6Sav",
  "key14": "3KZna4DKgkMLaXtUVBZFdD18mF4Urx3CBhNxqUTgXUaHkxUgDvz8QFsrXAjqybKmVstg1GTcV95ZUDDQDzej7LyA",
  "key15": "jioNwAFmHgvSbWugWbj6qfU66JpJeiaFWqrKc6egHS7mDLzW3q5sf1G2R4myuZUpW557Gx17y2SyhW7i8eT7biD",
  "key16": "JNHPkdinUn4xBnQY78MDw3K2wq9qDNSh7KSRcjUmCiFurc8pFHrDPabBeNgLtFV1exsF5TAGjrpeAv9oufyLzMu",
  "key17": "3D6ULdRf5M4YvaLCALQqupz8LNxVfJQZbfhwVF5mpAsXphrcJaVzy8sfPj7nfQWpzNCEoNQtTJ68f74ZkeJoYb35",
  "key18": "5WCtisuBrQtzHY1ciFusSTDpDBxnss1ZWVhhxrB1oy2cxhYqURQTCLSuM3zayMuL2Umg5LqvFnRUKaWzXYEfZrmX",
  "key19": "5qgRBxf3x6EdyGKxfpEhPEVMAhDZmAPHG7s5NRSTGqA547UAQYAqy1h7XamuNqaLiPNBwpBkbF7Gey8pbXHNvcsX",
  "key20": "4gUAfGcgAkfYEcBxu7wqiK34cG5jNCqrRgFW6bBwxVTcLce83hGr2Kc2xXirApWT39MZzWH9RVwvw1ABGs8bf6To",
  "key21": "5kSo6muC9KMUq5H9qW2eaSQy3mNzuDx5yFh2wRNsgTsVerTcLHANSSLk83fnCJwnHPN5LxkSn8bqASq8tQZwwuyz",
  "key22": "2EPmUv2yc5vFj33NbkgeNpV7m8PHwPNm36rZXWrTj4xyHm8kvZdDGGeWAqy3diz9UKJ2F3V8LhdLzWum16cVchdu",
  "key23": "5Uu3VWycSSqvL14CJNeCEHK4Wk6GKKjYdjCFvuZ1vo3ZQLVi1wSebCsV2ARF9Ejs7LvAdxxXjK6V1xg3CAb7Thcf",
  "key24": "2VRbLJ9nSb18QXQ9PhWcp4zTk93utB1hDHfEwB9kXqhehjJaQMPNq6vkxX1RroXSsKY7tobCTYWYBuw7qDimiY6U",
  "key25": "d4ct3gyoN1Z2KnUoXqCJsXsZdmmtTaGDBZH2cMS9HFmsEPZKZ3WG3nu93bNSkDhCNGuSVVaFGB2jHQLqep3SUQe",
  "key26": "5KuHcjQqYdz53oNaGV1xY2yu6sdFKQ98jLKeauaxAFdLVxxpow76FhNtJoemE6wYmCmipXY6CrRqRo6gUh72UPYh",
  "key27": "2mGa4nKj8NDDfSmpusZbEfzrawKHdwfVpjyDWB4knotFDAjdW9QFKtwVMxPEDFLvK1FaduuaVKNd7Z6xGjGzJoKB",
  "key28": "YQ1EE7E3MDZ3Pp1HU3LzBqQiaxz8C6rwNehsQDUzqw6RSLPNVh8jAJmRSQmga2GEBEG6355U6wDCra6gTdxDooN",
  "key29": "3qfBNUmYaYkAed1vUSeMqMqnDtikU9zjCFwVqtu9mBYizEF3VnC9jUpin5CN1m16pDd6HyR4xEFWqdtQdgbbUZmH",
  "key30": "32D57uin63FjuUy74WQoSntCgR5B9Xe6zLXCXLhtZtJwcZztQdtCCzKgM4ctZsBiRL2pygTZXzd3ANwFfePNPtop",
  "key31": "8mxLcnfY4SQNBBvVxL4M7TQUuns4NwcWtxiDvnij21TKyLUVUApnf5kPuKyQ6Jexi1FCzQMAcu31ETf9rLRBoka",
  "key32": "7JBhsYDxGUMijACDXeMKvwkRMFFetJDLs5XyzohgmghbcBSrCNwoMpBPhQ7D6hXALqiMZ1Ze4H1tpcqU9FPMFTK",
  "key33": "2VgfxfNJY8gN9uByfEuGQxhBytCEQUVrNiwGYgm37d2PqZ5tppLWeNa1uXUENkSg5RgVsELuV5g4eFAqoEcpWPjb",
  "key34": "44FxcFisb4wqHga5eWfz5i9biv6RTPck7qiZBBfwK1gc1FFDMd1LXnB8bSzZRRH8mj2pqFqzNizeSKHYNRmMFZHP",
  "key35": "4x97nF14m3xqaucAgSb5eAKbhtJLczJr2AteBsDErqho12AghCfAMc3zNHebC49mJbTzKcaGgNut6KbmufwnaKuf",
  "key36": "i8U9UngaaQwoxceynCF1Wkv46CABScuyHrJoH7KR9KqvreE61CzFuMuhHb5xjSDb3oRh6tF4Kyg4qR74qqMtU2S",
  "key37": "2g2JAYHDgtR7K7R2sQEY47hGTUBBALWQSmhq11Cg1i2sLYPSYnZZ2jjwcgj3WrbjrNd3fWt1boaxVatVMbpev1Ys"
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
