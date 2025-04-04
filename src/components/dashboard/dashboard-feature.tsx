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
    "5gsJNXWdnkk2xYcUwdpyPqFSnG5LEEHoHA4T4dcGPUJoB2Sg4QTygEENRpX9HxgBZhgunWfUJ9CMAhHFt9zo9TGg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KPnTSP5e85HoFtqb44gQvVap312KaGWyQqfERpanaVhecCYFpUq99BmTGX9dgHW9EL9Lu8SG3PfaENX1khnPD5i",
  "key1": "V1rKH8GXVg98yvnR5Xw3XPxdmCqxAgLmDX7KigNxtGvWtwaRRy5Hv9u8RSZHgCVxPTU5BzZ3szYP9s5u7gmJ1uE",
  "key2": "56HNzjTxQCzdmj2j57YYZuxHQpbYMnErxULizrA8NBE43PZ97UYjaJ8BmoywmVVC8adAfV9aD8G9CLvw48zKQ6sj",
  "key3": "3gmr7QseagCqYdFdAxCgQhZGVZQDMMV5jcHmJRs6MLznX9nbM3cSSLGWAjfDR6E4DyigMpmWfAkHWLpnJBmaV9Zx",
  "key4": "2UEMFDiaYZK2zQ3pgLVRVkEDjUCFQw8ocjZyR6RDtQbRfHWN5EF1hYZjB9tkYTReAVbJtHuYKXtYkn7pzPghhAeo",
  "key5": "3U4FA3ipyJXEojmtctRH5hqbkUYmvAD2UBfDqdq2sx3LypdQHTpmQU5Hpdu9paCa4pwtLbxkSNkQW3F68sSpZ9jL",
  "key6": "37Gajjug7i3o8vbN3GxFP5A3EKKric38kYkSD63m1bjjUbL9WHewmuKaew32pUbMu7EVmiKDdLVJXzib7E8Vvwhm",
  "key7": "2B1JGzTL5RtfGav6UJEHVvgFwGx5CdxyhKcFzUfC9ceoVatybfgHgziqNps4BVD1q1BYhVNh8bWTt2EdXPToiKCy",
  "key8": "5wWDqUfyBHKiY1iGXYRsmZL21DdF8FxRHt3apdPBXo3ziLExDyLEc2ytiPUfztsXCJipR3ouKoYiWDnz4QT48Qni",
  "key9": "2Nmq4tKzHSxoeztL2AfhfPG7Ld7TMRkAvQw3E7Ahfk8pejTyTzdrmwuGfx9VuiQYwgBbJuoyhFvxng33jVt4hB2e",
  "key10": "3U3sM8iGU1JMkQkSC7acDyLdbgLwQtxMVDYDokS7DSkyK4dfP2V8PVXadfV3M4KBEadhtqBFLtQukq695BEgGkSF",
  "key11": "5TQWAVaKP6Y3tAJYbvk1bzRxbQpiUbUGGrdVQdvtcbsmvzthUypupt3ZMgt9R8dVENKxkkutxuwvgmNXyBkmBUAs",
  "key12": "29Yh9r4Y2mdAo2ZEninDyFv2ji1gfWuTmkhatF6q9A5UjRoHnnSHqivRo5j8FDGAaiiEsY2i7bKpC5TSSunaNuGT",
  "key13": "4fr8376bPGryjtrHFsyYpLdTuW9nB1Vb8CuUoCzsPmXJUP7hv5vuR6KxgTThQfuPoDpsvRaaMk5VJkFv6bcfMat5",
  "key14": "DmRZ3HXBb65U4o8gBZpauqLi91XyDdBNxF4A5sHJkx2F2tvuY7PravMTYxHfgnLoP2myfWVoWLuzVavGMKmeCUf",
  "key15": "2jri7t4MEAnyVaiMJHmUyrN1v14SZy1JeFd1Py8xNC4dPtc7RzYsdWnHpjVa3RRTiJwoqvvfcMXCjm7PByLG9kRy",
  "key16": "5W5gsQjHCkJuzucAWDAyMYDUgEcZzjQXDE5WYhssRYSXUtenfivUK6Vfx1evbmrm7MQgMcPMKBQBJqkKW9Mc3F1t",
  "key17": "4RSo3jo9VNNfmYBUnvXy7kVi7EFjecceCMPcDyiJGwg3VWbWmSs7AaSnFd6dNas3YvWdzwovQzQ82v2SQrERphoz",
  "key18": "3WhvCd6UF7Qq2jTXofWbaSz6MYKjX1nFZHUuCQiAVqm1RLzH6QZj5ZJcZxsrFGpsF1wC4JjEBgpG5M4D6FkTqnik",
  "key19": "3YXAjj82bSJRtr66GSfzmbG9wNRXYerR44hi43DmiLHs1e7M5hAunGVe7EA4fc2k8kfooMDBt5gi6VkecQ3LHL55",
  "key20": "2krtKMsqRUqbTHxmRX6AnXsGhteZMqcMY9wtxmdcJ3T8MiW3CWDxpceSPVczMuHykLBfuFDhQfeCbvwjFz9n3ruq",
  "key21": "59UybXxChMsNyenGKDC94q49nV31SKDtgDW3182SzDCrQTgVLz9qPPPYvm88GtDeTVrb76vM3rohpzstdJTbSFav",
  "key22": "3LjBBvgafo7FQSwiWMRcFQb1f8ic5E52AvHUKTugeSTiP9i1GGpVCdsAnh3wA1wBqHFGXG6c9TRij2oZJ2DhZzDj",
  "key23": "49bfahdpKmESZ1jxM7NoqmKqfo7am7Yo7SNxD6icAJUeuoW5HFTNSce5sZQJUQtdcDwCPeRUtkJ4nKNppGepCw6G",
  "key24": "5Djb9F32bicEcpXbeBA7viwLGHHG3i4h27B3CNLZaMeTS1C5R4hBATNDbiuirTJZ4LjRxEJDELGkWD4YbwXgov6p",
  "key25": "3ZmegHFbQwRAzPz4MzCUzXuJoKkWY2bsDLh3PqhzeQXfpGAFSZrL2Ghw23X8ZjRTqdwkiQrcdUVGCwLpybXzE3yG",
  "key26": "3xbcwY2cFrXqcNU2UZ3mJVBvWt8kSNhU9UhCimbbLiFrcvnakBg6xGLbhTgAHMFDPBkiXPqnqL5sqCYFNse9gTXj",
  "key27": "4fJE6xquanS7abpCcyfiGMva3smWn8mNniXf7LpQG9YHHVcFARZ2Q4YYDycq3jTtPm84YX3YAFc75tJ3XNh1FepK",
  "key28": "5i3p6J4HAyoR8Kk3NxhGqhnN6rEYAscNkKBgwuJmz5BjLDmbyrHk9TYaBZySc44a68G1LtKYGJkCMAho3RqhtQmX",
  "key29": "3VSAUpUhQ7NmHVUNVQxVwNbegcUrtvqgnhzkobXB2DFtttayC2MLKaEjrXD1SwaiLYMhotqezD2CWzWF7foz3qX9",
  "key30": "5E9W3T3Vn7EoFoaAAU6ckXDJUUwjLu2FZzmzELS2ngUmQq3VhzCPiCM11DPocKUqLv9cQMjyR5JAvBSN85vARkXf",
  "key31": "YmurN4Tw8nqMBR2vhMwHbjJvR3XRbKb8U9GCRArbUfZu7ZzFjkCLW3B5YhBS3iahQFXaMJEcsDvyMEzcrNSgjdi",
  "key32": "4iVFRD742LWbsJ5jrZwiVYzEiJK21M7yWXu46J42ZWttn8Zf4oT5r5dVRaXCEFU5XEQowRuAjVBfycqtkqU944aw",
  "key33": "4uTnLVC8Xk9krqpoDXFQV99VpfaCzdzbE8DsJktJxTUyaVCjVpaaZzMKZcH6jd23LPiomtrXtJJuqTTCx2FjKrWT",
  "key34": "5jWVPh4YGj6CPoWtJ5byqfsnAr9fqZMG5oRoSSKMgMnuLWcjFu12AmfA4NnfaUmjzxDt5HGaPLd9YWrCD46yhiSW",
  "key35": "3diyA1qkYuGPYAeNWSxUNRLGcSk54tiFDT5nZitXAuQN4QFC3PiwZXomwesBKHyC6spTeiNCDWpLcUJt9BCyGLTP",
  "key36": "59pXbLKcQbMwPGqaoaZ6H8ByEMTMV7sSPYeheakfsKeb2XDNyRZsPJYoxLZyMemAkTGLLzEUogWk35FRSzPNr5KP",
  "key37": "3tfGPhrxLMBD37R3vCdbecN3o8g4XMXsDnPUHTTdyfoGNSQ2VsaV5R5zwfr55VSn2TTPEK3z4hXNH9pZYi3AP1ny",
  "key38": "3urkPSm91S3PN9xLNdCuRZaBBQ1VyEtSwLgcDmnKnrWstTbXqX2NK1QzmYuKNMsinh292wSfGWdZfNjiWusqL8oC",
  "key39": "2WhX5PjNdu8axuhySYaUBR6mRR2ovDAFZMTZZtMBojGKsHQ61xLnTtRP6xTFeUfztXxcA7XjkgoX8UbMvQJWfH2x",
  "key40": "2ndq2TE9tk6ndF47ztqgdMDQ84xm9MkNkSFidwgrMYqT2L7ViCE4CB26sBJb2KSRf7xhGadTqjvasA9uxo9nSXry",
  "key41": "44xBDQYJDkqLX37yj3BdqtY7EfNzj7NxUe1evSL3Aomvzuyy2Z1YeTCsMxvW4UgQkUMz86mnbD5VqiDkkfZJix7M",
  "key42": "2ZbCXsmTfg4oKRZAin2KU6tugkJbK5cF3BFS6CWmKnGfryuWahkUtzSF8cATi2hnHJDwjpioxZvFtDY1wNN4R5wD",
  "key43": "2bEygPgeYikRhG8WvvqRKWbz3v4266D2xb1dHKdayp2UsPW927AXGGHS1ZhaYHsbyD5VioG3yhdRmf8Kg3AYm9kb",
  "key44": "gCbwEKz8UjS2SKXzLrDiPHPbRrg4bdrrtJDHQjm8yyG4s5kExMCLxrFggdQ1wgeZ6Yog2mEhRHD1m4wwqar1UUN"
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
