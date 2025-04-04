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
    "5jhv1WFpYhb9M4Rt9qCc3YzFSjWeGtzT1kyiMYY7D5JJpsKYT5BfQXZtzoy8Njn6KWwop5Q7QKkeBpsnbcKiXRX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZBzLGi3sSL4Y7GunGEFaTCioPyNEBetLbPTbMg3kLbcdV1j6jGFL5Y6HvvRFjNBSSxnxcYPN9ZwBFX5BuLTwykQ",
  "key1": "4F5WmguxzJdv1AqU8Nmw8Z5JBm2kCosodVyDjxnXV8NwvUd14BRn1m4vTSVc3B9jv3E2dgHZaKpSfd657mQw2BK8",
  "key2": "1s7ZQrKLHRYFiL4oCbEhAN5Zwv3CGNab9WvjjKnqdjTGbnQxGYWTRtzSeS5p9rDq6Buy7nvzJ5Lms2GUi827UFi",
  "key3": "2fv7SkkcXD25vEfEKkPzK7Pqpvsmbh723BKmggAodVqdnU4RqdsfM26coHxptVh9H75Mg9fjdiGug7aQZeNXW7hP",
  "key4": "3Z2VEa8Q4KD9ueLkpFkjGHVsXcfvRFR7bMTuBqpHhtDswgbT5LCfxJbP138vDjgWL9hENw5Nk3sQ7ajAcSdz7XmR",
  "key5": "4hxKbSAv9Eg5z8inua72mMj8A97n6D3GMjNqT1PHJfHxxrZfLw7zVPnb4JCUq2KjpLk59ZNXhCWmc7xR2qQE1Kkm",
  "key6": "2gdnBREDg6xRjWPobXiJD2YFoN5JCtPm2vw3zNuKDqcRqeShrb1eSzcfJFyZkJSWM5KiwLo2TePEK1bb2e4JSrqg",
  "key7": "5pckC3pR8f6yVXJCb8gRjhdsvZ5fonLoc6xek5FLBdQXmqUioD44pxuSoppE6HXHzPDBw4bMcQR5epyvhT7M7qqE",
  "key8": "3EuX3Xd3rHLNadKSJevo5ddSwSLEJQnmdxiNdWfCqatp9qcQsfzRu1dcA5kvKq2gr3xuTPrsvEpoBne7W53UWqw3",
  "key9": "4soY6joV8cnwdYHqNMisQpbdycCWWNBbSvEpkvaxJm7eaxtDBg9uKBrtf2w3u7mrveqdFXf6UAoLqYYzE3d9DFsE",
  "key10": "56x3HFvGxjBSyyBjBuCS6yoxFEPAKjSd89TY8SQoCgA4nwBB6wPdUp7rPbnSHDniMH5VSCQxhk3QVDT32ZoqUPaj",
  "key11": "2Yoy1EztFdEpehRmvcz9mKHiFvKKpt36GLwNbUGiJrMybavLHxQ5CFybERMs5MiqWXxo5QDg6L9FKt8Zpk9RHYLJ",
  "key12": "42HQc8a6c5nDidUKWSMQtUgJDUa8w65nzyP2HzgzMHCg2XUcxGdTVK4TPq7xsJ6ewkb4om9JwFz1Hcf2NXmDXEf7",
  "key13": "nTzPNRW5Czwb9513J34zEFrt4z6Q7i9PKNnFUiAeZrgeuRbjG1N56TSRydEejxjuis1V6armVZhqJeJHD27EFgy",
  "key14": "2ZSjh7Jv2wk13H3c4mgzvrZCsMaVucow4FWc5zUs6RvGpSQj1HjcCpaxnt8vqPMxtZP6Ly1eU1TZwt9iD3XnGbR9",
  "key15": "2nxdhDxhNBsL7ZqVrQgziFRvCKZcXweaLMFf9F2SPeaesFz2aq5WyDfHRF7pJjibyMayjpSqSyBBPEeebcbLg9xN",
  "key16": "WoRTojcNb1ZTyBrwQbW1pkQbswsLxXSjkrWukDarrDJwbnLzd877AmrqYe6aA3M7jMWk3LmxK3BQf9jS4W7mK9a",
  "key17": "5WqAd5Gs7kt2FDnYfopoe6nVHFY9koSC2nZTLALeL3mAjbwyALaivqj4rjbkiKPZUP9dpSSDTJ4yrSEaxveyucF7",
  "key18": "2q1Yi5dRJ64dJy6NfXrndCc5yRko1wT9GAfi1PZYejrKnC8i9sCVgZKCm5DqahL7RQuy1Y48ArD7f7XcVKFPSGsg",
  "key19": "5CqAMg6CGr9owQqdavXQN8FBoqYLSYWVipEAss4xYhGzxQVQ7RWftF6Wzao1mEgKjXxfwmmY3GBDRHxnpK5DW91e",
  "key20": "5UMRYkfVEZdE93ozGeyRGae8f9x6PpkGTcms5kVm2if1b8nfoXitmDsH9wmtzQPnUhTGp8EtMpjhN3GxZwazce9t",
  "key21": "2q3d2RVCtizLeH1xbzyj1nbRJshiXzBerVCsqwFEdhA21RYWfjUXhZXXYD15bL2N9QFs1SVYAR4HBqg2MBsnBCHi",
  "key22": "4tqcSq6Rzct5FEK7c2iJHu2RFV1JSr5wArnE6w4Gid93zmtMTpVMudA8UXkcragsRLRCCpCfPc4s7ZvdhABBmGn6",
  "key23": "3yX9tQkEu6NqXuFfpUKreDp2nks8XBsEuxsVu46NUjdbQHQ3RVGKoMv9mtHKtwL1VX3PMBy1jogJ5PSjqhA5b1sM",
  "key24": "4c4F8VNJdRzzSiCtydJ6eCXmx3Z9Kh18V2o4eY9u6Z7guYL7mJzmRMhjmJHH5tTyYzYVd5LP7PXoZnH7EhzDbXro",
  "key25": "DQ8s6h2FyBZuLe8iHyuRETmX35TjYLPCbwmoWwH7xmg33Zuv67qy6LyM8p5vXmSBJb1F8NG14bf5R3KNo7X9GG2",
  "key26": "27e53p1aVByLehNPcPKJuBz3bEZYPshEMw6wtvxb2k9dkdiF7Fvj624ccynZxeG3HbuV6yfDA3K3mZ3hwA6GY5Af",
  "key27": "5xyqacU4PAGz28zdmiAQWqUvA5ocgYEsB4wF9qNYRbxU7RefbmzwTtWTn8DYN6U55D9QJ3M5aw973Fk5F8zjrnRY",
  "key28": "5YhXa2c9j37tqfEExyDDRpJbkmbhgPfmzJCi9F1fBdhpUBht2Vwhn7qhD8Cj1tdkK3uMNyQrznVb4w69VTtV7THV",
  "key29": "61Y2AwYyyV7USfWXa3PTafYkNFtoCU1JK3RxegeEwJdUHHVFgKWJ3yYAJiLuaNRzUqEYWxqmMUckBV8xDfyh9Gzk",
  "key30": "343R2T1a1F45qp8vbRwrrCdp2JymexrFsZxk8foB5jfsYs5V1NJLRpfvYQ2gpUNtgCJjnnDwczQUZLYAEVgzPkca",
  "key31": "5yCAYcQQtZeyHsSDQBextBqv7cxe5nKDryzQKMuDys23X7dnBsf15dsMy29QsfQRgv9ykYxsctc7K6kyKLNLuXYg",
  "key32": "2Uq2MpD7psVDRrntaiwvpsap8KgpfZGqqLVqhWrpBnSw4oM1TfFhdd3hvdEkkhjxUDTYGPoiZPyp7Yvk7bcQfCGs",
  "key33": "2noMrz5q9d8hUQTWXKnEpTzwFLxQzXFksf5n4qtQ6o7DYGhebAHPUcLKGw8KacRNSSZ2SBiBoqpTdkhpbGzdxQje",
  "key34": "59PvnYezazJXodbRyX9Rg6pjUB8QoCXsVnTJTd2RJwgRxdvN9tmC5zP4ZDs8BsHMtxEc9DotPPrVjD1PSFofyFGs",
  "key35": "4yvTxV43t32gQu44JF18ZCKVgLpndeTi1nkXzgbcW2itfTFhasf8ptxo7DqJVz2b3LJwdu53cMHwPCCzqp6TnLRj",
  "key36": "h5HMxWXFeVqC157mka9MkGGFj6FYJCGgV2iZDAr3EsE2peiyPeoWKnmieKbqpA3G2k9vZyhhxNir7zSrwEyXExG",
  "key37": "38uiHUGCPUCjp67dMeyMig1dT4e7LXxHAVKRtqj8JNsVkxrriEn8bx3u2CZWCzn4Ds4oWDFmLAocZ5MLKw7APPDi"
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
