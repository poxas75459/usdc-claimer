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
    "2KQN2fraGoHWWadAg2RQvFMZb96TWR3tVoTF4PgkJTnMeo9ZJGznN1PRzNAqMAdsqBKEieXxVmPPnyrRvcU2jBVV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46Re9Pa2S9hqqh1s3SJxeKXEmDPBzaidN92vJjR6fVUZ18GTgtnDYqajSqJxwjnTDAB8rjzcGSjcKtfeasaNXxdz",
  "key1": "5tQzhJUYtdEjLoA6vfp7GkEUiyiBc6pAtUQurCYCPq6HvDmMEKchXAE1VVz4Kr8WM1zFpURc3DjGVBQzqwuEWX4",
  "key2": "33kqzz6KemP72XEJEcnQ4EuXbbiwYHFZ84zTv4hyUU7tkshFKro2gwvDp8VkCLTiQaWW4qWi89Lm989QsaG6H8zy",
  "key3": "2FgkNCbeL79jwissF81wxCvmEgSC2rKfrJShvsC5y2iT8gzMSEfSY9JxXhQuGbpQoyaWiWTmjcNgVYtbxRpR7gVJ",
  "key4": "4iU7k75g5re2mMZpLqW3bnVkf36SkmwfY2y287cCphNY9jq7kcoAHpuv7UgRG11qwgXkLvrgVmjsLKnvdwAbBzvf",
  "key5": "2ebf6eFi5Ffnn4yPPcc4WTHmGviwRVcPwYd7c5NiM2hTQTss5xHAyaDGJD69BHrZtM7zXbMfxuN1uEB4K45mmtts",
  "key6": "5eBMEQn4XTujpkVDwG5411pvSeUs2sQndzHQuVS82usPkHRo5CEWmxVJVfSh49qhqBb5tj5Y5ZZXbVrw9kN8jGsK",
  "key7": "4vCeCcFvy1zDTNUbp3G5CoGcShxA3AeUEampBFNNx7vMU9bLxKbF61WYDz97kKH3y67YSoo6tzk4f8YAN8pcyfwG",
  "key8": "3trxnzUMX92V1w3Djyc14q8JBhZnWzkFsTCoUign3AbqE8wuEnji3AdbzKx1BRSj3LBACq9DXqPvT5SiFwhWEC51",
  "key9": "gkFHh2o3UfXFbGQZMRWMadvhD2Q5CyABpEmMs7g4W41B9Kjo6vo6REHCgZcdG2tTq4fd6WneMenkLFiZFkmLNzp",
  "key10": "5KBtwVvuamQnjyaZYaqJnJjQtpZHTJUGS3QmNp5XUnGs2JrmoP6UZcGsqyopcNAV2TFEJtfvQC4BkPP9C37mUwDV",
  "key11": "25YUMpz2693EToCdkdHsaV7VE5AXZzp1zwhWmqeBjyvpJZ5qAcaDm2P92GaG3BuoiiSDwzckGEuvmNZpzFHoiBdz",
  "key12": "5DceJWFFJUpLXrFfD1FkTsmKpdqznFS7PhAGUMe5dQrnUi3R9BT9MXERCdmYBdaMSjqAZaUHm9fg6FWpwdgPEhX6",
  "key13": "3LqEXZA9bK19zs7hLipaknrCayYufvT35iZBXy3BFiQ6yEs4zWdp723a24ESdza7Uu4E8KyjoExQUeWW7i9XfpZQ",
  "key14": "5Dqw8p1q8N65gzRWSicWDgxpM6oHEfYtjcgTgXfd521ujW6JEMvNUWSdkWWtnf6tCoTc2CHYFtaYGsh1xyXrmfEv",
  "key15": "5KSKY3vPMx3zvUacrtprMpA5dpiUdjhva4Bsy3TyDbGyK79hQQHzPQMrywRZ593RkLoeXVbX8HnLVPhkJem2U1j",
  "key16": "23q1DCYmL7faJMB4RpK4fjEZ6Cb62VZqopNaPrSg4JpBDv2ZfgjnxeMbUuUkmt1TX1MzyZQDB3KXPzUHsyvDGXCM",
  "key17": "3QkFh2WcTJ3pHNAsk7MaWZ1Q3gVAmFBhrex6bpKifL5xD3ec6g3x8iV8BLpfwc9pTLePKs1TTETcAvroKLJxLnJf",
  "key18": "37TYaTuthXDMpqacVJ3oU7C247pWdxofHGE7JUc4pzwvEDi3bQSUeFbHbB2BAZRGjniBmFCcJs7NnH6bjyVuf2Lx",
  "key19": "3njobjVvSEZzS8FCJQPs5BDS5Bq2EERAGSw2vqBFEa6F6XP8vd8V3utTy1xMvaBwuH4eLDHZbdgxmNVYo2R9zQZj",
  "key20": "32BjaNYmWU7vFWZsFTjpoau4rFAsoMSJTRmA4XiWqMfnDig4FzHtbHxNqLFMgQ1ENtWooYahve6WUVKW7gzHUk1Z",
  "key21": "3sTWiTD5FeznJ3zbDqW9knGog1Zhsjo6mPZNsL3v4mByY8MWeh9ok45aH2ETCkMTGdYnLYuAeYwYUcFPY4fBZLeZ",
  "key22": "2ksrSfUeYzFnTSs8GewDKm1fNV1TyeibTgnQDEGxS2xqe76SZzcFpUvE3u5t1PemJKJneyThqHAB1QpNBxkeTmHu",
  "key23": "5hFdfBkYDaVwQMpThNG67F3d8pfwfULz98QCEB4V9rfU99D9h5yZbxmkbP5K9g2j9W8no7DAeSPSiJNhx7178Fhm",
  "key24": "4vFS9gSmPBSNxEnMvw3Ltmz3RWZEbL9zVZcG5AUQGufKPuPcYKjCSr5qWZgKwUx1yo38RacT9DxqDsosg7mKUEYj",
  "key25": "5inMuZ9MkugsS9yPEet1XppH7DhMmpcjThng3iSxi7pFWJf3Qb6byPGNKuRZQqZeeY9X5a73Vc5QwPHjLBfbDZrF",
  "key26": "5YMap8MKk5CD95xkNdRCBgurvLr6bT36vfcxtnxo3Zwtnr8nv896VxeZBJsSP7S6ek9bYtZ1dzWx5RPd7ELtdAqw",
  "key27": "5nLSLyTtaGdtwGiA7VCDMndHaqHEymvSAXj3P9nyQJeSqL3yBZfFjNBQQGftAvNj6Anz9PNcNJNyrG2FUCGHeUy4",
  "key28": "63z9zVn88ht5pJ4pPEUJsJwQTuHM3M2ECBeSttHQfbiU9sKM8EtHipMkQA89U6VZB3vkAyFf28Kj5cSCxxWPeHs7",
  "key29": "4YWtrCXuBLoPRuZ7q5ow5uWwQv6nKM6qtexnQ7fUYysS8WNsXNpjEb76qBRxSWkV6VsH4riHBn75mfnKL2qhQJuq",
  "key30": "2iaBXpKnh8dGJrXA7kGbjxXEwLimc5BaxEQMNFFWF7uorQ4zo6gm6K7un73a6m6NdTrSe5YTLsEQ6UD22WgqJvWc",
  "key31": "3evywVE81uqP4T3qqTb1yDh2ZxUDCV1M79h1fMD827K9HiAsQSg3nbTpuKtnD9kM1tFc878g2HgtrLiYLB8q8UHY",
  "key32": "2hCN3KmuKLbDD6tzVixg2CnuDFsaSrd942vpa23SdwxVHyj96JhPwNBSky9ShaznRSnmRt7KC6FUEBpYhNgGD6yD",
  "key33": "3BiQQtTRSQPHLmEJqPCajZmuSsbdxMwD7P9e4QP4F3MaNniDrhjmJ6pABwYHVasJmoR5GCL8daU94DqsS2ec8ckY",
  "key34": "4GevWRSavGmf4pC854yTTvRsEUZazakwyHNJUyCRm2QFrYGX4kLFLn7gpgf8iebSo1wveL9Etw7x59MVbmRTiGMc",
  "key35": "3n7ptsUuHecPBbfenx8X6FHMsJd1ZqtCQAUFcVD2o3Sruti3MCXUZVuj8AzENLxFEDpkJUwszQVZmZztqgdqQGpC",
  "key36": "2qGRc65ANFTSSE5Pkuh6ZEJqiGjBKCL69ArN2bESVHYrCcjYadVFBJFNcLfPzop94wcMdMMv2RuXrSo6UcfCgKC3",
  "key37": "4LtNFXA6R2jmPN7vnHc3emdX6b8rWttaDXn468UrforZ37d92wmCgUUyre5w7VJKJAeB9Xww178xR8PQqNmivHFy",
  "key38": "M612hchVuXM5XvKuwR5KJCZTcjzwcZweQjXnCuyxUFVfT2Vi6ESKy45J153qkKr3jffEdjma2hM2yciqprhw1NV"
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
