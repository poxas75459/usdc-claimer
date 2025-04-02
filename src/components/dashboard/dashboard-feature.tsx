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
    "5dAVYxaWgeHyCZRToHdNgg78rJwz5RDu78Kh7HLzM8fXfNzQkieep355uhKTKYxAhWY1paWDiH7x2tbywh8Qned4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CHD62X639cwKrf26nki4sxKGeoyYZU7As1EzFZnAcWWSQLmnnZuZZAcfKxkn9usitr2GYKobJa52YfWWWxwALzE",
  "key1": "3gAsZTRNdbUkomNDBkHqvuAmKuW5uQqMkvcL9KJR8F2ovHFmPGTP4kw6crM4LjVeGBYE9rVPRJxNFH2hTkZ8M4bW",
  "key2": "3cpEeu4CNw8wu9dzgTkTJafqHRUvPnA16sFAyJqFmKA2a5fVCf98T3AYu1Z3Es1kCxhjWPHTYxQ1qWenH2wR37hy",
  "key3": "AxPEpD94Qzs6bbdasbcBJjcKUAnuK7t9NPsXDw1YmAF9MFaHepG9Thvh59r52ckMS4Fdg1rkbUMEci6QEXc3GPF",
  "key4": "2KkRAgrYyuYL7gFRYdDvfGaGYbEXeUvtGQgqhh4y8HPxnEMzRWikBMoiP3xFccvEsCtgAWAyVeXmPBVJhZoic5Y3",
  "key5": "3vV21AHLCPq3jmPMH5ZLQzERSpkMvtHNtJZfir88hA1e4RcEzhnFsSp1vh4wMKCpEbgroPbPeL1Gh24MWWuwPSQb",
  "key6": "rTB2eoJW1eDk6HYUi4MhV25i47pQ8RqyYAbmVyFFc8Jb8PWXjXPqbuGE5rtqSiX9gJ55pVnRQeQ8nPEuAEgAyDF",
  "key7": "88Dk9Bnyt5rBfRMwE9QQgXCBk2ieheMp51KyHU2UFuKzb86FzFpSxY6M3YmYYQQ7oZ3YPN1nM1RvPw4TVjeCoM9",
  "key8": "EH1tVQxgJPt14WAcS3umWD3MhZ7ae8kDPYUmXEGA2RjY8eYVABSGFRrL2heQKaHupraeHYDE2zTUQGagqv8rsgs",
  "key9": "243p86TsF4PCMwqTSYENgiXzXmVsj1SsVuQBdbJeC8hWCtBe1rP7NtZZZ9E1qJBSFqWwx5Tvwo23wEvLGrtnAro7",
  "key10": "32B26SgU59Z9pX5fpP3hMPnQocNq7uVkHkeCPApe3T4B8TSdEk2Hhsqk9quHZZzeSh58pbpL8cFuYUYJ5GgaBHYd",
  "key11": "49TZ3junPbaAVVWZFomCYWnXggrUUUMWko2XruQfhXemp3X6dYARQba6MZQwGsoQBoqNMVXUN9wEM5YHgdfK4GsN",
  "key12": "4JhkTXmAk5vn3xLJYccvtUFGfLBtHZkiGyuNJfdQpz2smRzv4mhkBdvTe66VtwkthUQsjyFHZVSSj8F1cQJJ4XkG",
  "key13": "3gR5JofArBr49chsFKKUtGe1REGxJavhhAYTPwRV58amZ2vL9FKZ3XcHrBAdiWr7rTEEDS8fj5rQM6sQrTp69Sbd",
  "key14": "4aJUmDzi9pHxFPvMSPsyLzJ5Xy6CJMbzeUDwJgijja99hWaVyTcQoY2CVU2naVA6AQqF18GdZETdNavgkc1fhYPe",
  "key15": "3mnP9nGWKFRJTAWVhMGCus4i9D6VxXB9sjpyr9NbSFVL5jARiSQqpfY7cUCHD7xNzJQrM2RPZbQDiNDtiuLtan9N",
  "key16": "bLokt2GrAJYNyDPeJTb5WouTxyLqzShvfXG5oMTHQWQPnmdyAwtxuw3Qf2YbS98n6PwTLpRui97dNCRS8zzsTXQ",
  "key17": "2fNJBqT7z2YoMf71UR5cygV8CUc17NzxCgXScPahFPynvD85L9dxpL18RFoS6DdMNmjcVe6WUetMi2ArtLP1jnGU",
  "key18": "3Z6oneHPKZrm5ZJFk2EWWpYvE2RJRLzYV8jRxxG2f3F6Mop6ecYTz4Gx2oAE6E7VVwsQEq2cXybPDCt8Cny39kXH",
  "key19": "57rD2fTGYVYnKBRA7M13sa2W2R1VPbM2BCs8ctKPu7BhrF6Te2mA7S8AdAboDusp4nDKd6oCGba8N8co4GFb4swG",
  "key20": "RB6d9e7Y2vpCjcZxw7PAUtC9zoodyZdbMDTfyPFF8Fsy1SziA5EAhHKZuhSi23w2QkrR9K9qhecPwGqjreaYypu",
  "key21": "3ETAkUfQiDuG6Jk8HGceY3EyMbxCfphiTdBr2taK1hc8DxNjuSXDsvEFEDLc1fANCKpmFZophmEe5YvgdZbpubYE",
  "key22": "4GFf75k3YTRttoVaVG87zAz9sztcxxghv9sQNz4jqirUHi355neu94oEextaVUbPezRhdrzzn4RneNytHpBFPkLK",
  "key23": "3cMCBQMd9CaeWmdRTVR97Yv4ABGzhsLPBbqDhKstGVjEtSNRz2gjMDVEZNjRHtzd2bEKtLdP3qKuf3mnXAakQaaX",
  "key24": "2GArfWPiJUjiFSEgnZCH6JPgL4kMgW9fuzDVrNszL29RiSHxJWumbQeMXHZc67VpPPcAKTucHwNyVHNBdPWiJ72P",
  "key25": "5sZrdqKhuhQtg1Cs9VZkFcdbZenQnnn6L4Yz4E8JgUksCzHZ1VerctgvnZyhkBTeFMuc37G2NVCEE9knWhc4g9YA",
  "key26": "fMxxP8PDxuGA5vqiWBpDbTdd1WnVSvFgDJXd6wgRssZoyJsGYpegrGHvtLQqM2KJQGW9E6SkNpDHauQuFuA1Gfq",
  "key27": "3QXq9wieb4oUSu585nsgzWq6wt4dng2W3aPQxMe3xcBv8nexJhj1xnFMC8wUnzUhatwXMzCZAfcqQ9sLbevgEJP7",
  "key28": "5ZPwTmAQJZJyT9FFJj8pvokY7ERGmoitMntvbFtT82GBPy8SeeDHEQXVfR1VjGj7yGgJWAMc5rJrohyVNRXG1rV1",
  "key29": "2BCCXaiTUh8DzHQdfuVAZ5dEBX6wpAFrUErxDwKMAxHvkr7S9a7FM3a9u3Lxg9gs4g7JbjJ63NHGQUof8qwk1VMd",
  "key30": "5shE98ivhxNCxCDvyYc2EFiM7dv8vdBnnChQMV4ahJWMVvKxXyn5DwFJftMKU1Pq59hRSdquBDP9P6LkgDZKfusR",
  "key31": "32nf6iSH7A7tkRMQpGuLS1j1axyCE12njomgU4agzMRMvX5tgpNynqdsw5VjMvtyMBSH46VUpJEJdUmUTMdGCJiV",
  "key32": "5VLn97jGSDQfVkrqfGSKL5e88NzYMb7Psm9s1Jbu5vLzo63KtWeJkNEkioU7uM6i627DXvhwGgLNBAuiwdes6Ty9",
  "key33": "2H5EvJ9NDkeE8ss6PHEEUekjZveZsHtnuUKzHfG96vYBByKCFq1m35WYiZcxGV5uowYJyhxewYhLVwUBgBWrw8Hv",
  "key34": "2xn6tSLAHrH9XYFqKKeikC8VEEuxfDYrM76VmVv5K5zVw1S7RVZ1Ef5Ptkyu18h7efqMirHmcF7RVq5EXk8BsHC5",
  "key35": "4qrxVTgvZKGHP6zZMjp8yADs9ejNJzPrDZ6T4XGFmKQbLKC6Z67W3X3evSwaMNWadDWkrKkqDgEsH6CAgQcd6hbG",
  "key36": "nvocvWzDPESb1wZWpxUvtkERnXcXEvQgZR7W8bPh1UZRNQ2tBEjcshZYTgU2a6D4QtGjV8pBk9Ra6z6B1PKZqR6"
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
