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
    "3i4pmwd34pe4ucSBeUnMtFgmojttuB5mTwhnNFRGAKcLvvebJY7N3CuWKuRWNU7JnP7rkbMuZGUkNVLyxqeLLWME"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eaRFp8f5Cf8ahNMABiNLokCZZgmV534smiVWWbngLwM7Jku616eMW9z2pbUZoXDfYyRy9Uou24Lym49kekbGeoU",
  "key1": "22A3ozJtgXAcBx7YxHnYau45vRjGpLA4zZzZjrfpE9XHo9vy2XYs6qaMLrBvx5KtiyJ7Ms68RVD6vuFM4FUdR7mu",
  "key2": "64XsbXFzVQyDkb5CbBqdXcj3DpyP3iCHtDKd4LyY3cndF7DhAYsVGxnao9AEMBUzdkDd5XbJr5u8NHawHw6h7hWH",
  "key3": "54h4cSgPDgcEwWoCyTmiCFQP1VXcQkzF19eYaXDuqdRp4XV73GXiWevEJm2sC7NwLvn9ansNsEHjt8dm539RpW1X",
  "key4": "3PxAgFDi5xjj3At2nkZBrHcoXcJ8PRKpn7yB9TRSzxcnddyF6jeCPiBbwD1e6P2ohdLJYKmPgoc55xBLqGvRiVQb",
  "key5": "29pwCfnjCLCKuZVHAqA52G9N5RdKDLAaKdrsLCTQcP48EZYatUvLDgu5kzTmQ83p6G3knZnVHrVEpUf3gHtHEZP3",
  "key6": "r6Dd4hfVX6rVyatpwBZP1xY5EoTkD1khqHr1zqT9X5Rknxt3VvqbgoNHC9JTLGwD7255PUqAaBnnkJsvwJMRYU8",
  "key7": "3ktAaqYQRz5jgCkLa15yZxiW5DHvzE1fdMGPsuhiBCGJpnZrKLKQzZAtRYpLfkAefCCV6tShJQx2eZTV5m4MSscQ",
  "key8": "2U2fsQJViJmgpW7LT5acaryjMD9X9A15GwM4TqJz3RTFas8SQAUCpdnHtoesSuhreNSf4jn1iD5GgUQzvXJowc9p",
  "key9": "4ARwnxpcxKE9oiwAYF4MewQiEdNTUDjWzTKMB7fZMiJPUuH3NN91q6m31V2tiZuFqwNKLbGpb2wYvphZsTo5eP9c",
  "key10": "3ybXmHqK7AKpyhfLjCBpgZYQTSzVCzsP1HcomrNsVrXxGupAya3CRYEn4JteukA1CEumCXTCV42BHzKM6Yw52wnt",
  "key11": "4hVAz7gupGE2YbSptRPiT6jtW6yApkzzRmu7wgwEfKwixyBxfqssxP8Fbw1S9PZXWvMU5GCFEPKNhXL8UCiWFVM9",
  "key12": "2GnCe138pZ7DQ7rWJETPwPw536PS7dEy8aAUsKEWtTLau7ThZSzm8jMp1PEyffyduKNA7eN6f7xQTrbdM2tyYhsu",
  "key13": "5Fz6x11PHGnpNxCEvNepGkre2DnW5CZCGgLeEido51sbfxwDoxJZLx1swtBKEQrD6YjN3gFgmPfaRvnhVtV7hSMZ",
  "key14": "5nhKvGuoHeEPtu2DNT9mYMJbEzmGbcnj1Zhaf92xEspcQjZMaXk3Bq8bNpHKgGrPm5n4ikrsMYXeerL52KwPbpyY",
  "key15": "3QBHw65SZafQKaqcbzk5yneQCQtMXL5MDFWjR6q7dqt2VtRCKg2kt8734PWpQarBK5P46W3GscxFgEtE7XDHMVvM",
  "key16": "2i98zys8HaWAH91z93LU1pnL7FVTw7QfMXCAUPJCCuJzV21MZGSQ2EFq6Lh7JmNwtx6CutkbAFZimg93u6ftYxzU",
  "key17": "jLYorLoMdS9BeDcMwpnAoTyVuYXT5Tw3pJRNCUYFvM1iK5LSKGGRnGnW8kkW5JcpoaANgboKAL6LSwEApjbq4sY",
  "key18": "3STXqkDhmBmrvnQZfkrM8M2pkP3Cg9W6gXzMK8QQ6BNmmPUa1mwR6Gosa3FtdsWV64tKFQfDsYQEC6DmBMKpNSUN",
  "key19": "zShMTekPuA3n5sNMM4NaF1xgFVjqorHZhTtNnjFKJRtSt8zr9UbGSPngc76fvGDuJb5RqXUV8wCwFeS4jDUHQYt",
  "key20": "2rEm5ZXq3nYhZhjuVRSsdEun5UdDzL83hvm5vN2CWuuE8p8JQSWbyQ3F444sA34m4xYYKMoUUNHyMG3tSXzRoHXA",
  "key21": "52R8kvWZ7wnURqc5hmDZ8jyMz8x7bRLiHMwBHccgi7o7X27L5CbR67c63ry1JCzUSar1MF32vGMhwKC9R2mnrFNp",
  "key22": "3ARHhaBSamqzTvT9AN17dCS2BH6C5iUo97b2RyRoiUJzHfq6zVctQCp1zKsWfvEFK9fExtRnDDFn9rKhMsJoXMCG",
  "key23": "4ftvVtmudAAgrKKX11YbheNjQjeFMrY8kh3TD66p5BiQTrmpPGUArpo2tiRrctrhS1D9xBwnGCbibE2BoSvpy9tN",
  "key24": "3yA1qScriUzpQ7gZN9XZECfqnqieGGChs32G5zt3DCcZYy2nnYSZCyhyXz9LMmVwwgeBzYz1vy6WkzTxQNp7Fjr6"
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
