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
    "4PVeoLBqHCeNzyaoftLuYVWuFDdAii5sZfAmBQuNC68D34p3FfnM1umWsF7rShqauqXENCchUwLHCC7aDVm2gn3F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LAp8cPpMvwHrmtuSH6LV7bSWhcTL8TDm4zp65z5tAhaAZLp4VfvtiHPTRC1bFPNV5wszvu5MQ3QqF8JZtv2DXCy",
  "key1": "5D8XMCdVhmZpxaMe2Sv5Q3ZS4UVtQPNWrSTek5f16jKqxim1uQuKF9PVvkrbWRuKRcFTEMe1VRcVoqVC4iY8SAJP",
  "key2": "2dsL7FoJ5DAXX552cLTh9aQqPYTGXnHTYqohu5vG3WP3Zfm6hN2JiLooqcjWwEo4u37eDJqe3ALKmEzVYaonQqu6",
  "key3": "mrK8Dht3pD4D8NwpBwYzB1GEKtpnSG5hVB2xZ1ooVTdWiYnDZbtM1Swe8GZe1vAcgBkgSXvYn4kESoceL1Fb7kz",
  "key4": "2tKows5Ut4YS9FdhV9xSB8gC1Ehoav7G5BcTbv2RqRtEb92p9eY1H6yRevLiZ6EQjZv9XAnhGAqQKEfFwfm3smFD",
  "key5": "5WSq6mGZ2E6YpQG93Ht2agg47asKPD2sVS8rzfFAamYQpKA48n3EjUTgCD6zGQ6QLWkdzMDCUhih9ZTDg9m4L8kL",
  "key6": "2aaw5Sb6GtqWrsYZHPuwnLTzv843LRtwNPe5EpyKQqqG9BmSu3kQXrgvzLpMg6uKJ4fmxE9bHxtCX7yURPNWCJzh",
  "key7": "2PT3Yj5fJUp6TYHKUktDbwFn54dzrTHbG8shnDJhrZUVa18YBsFsJcgbR5PDeDHEmaEMe65ftKBJJHNmJ8psAfMz",
  "key8": "5u1pURY4QqMMfDfM6X1244LKi1LmXyErYFCjoEsdoNzPLyhXfq6Nar25Y3QburGeTuf71BvrAs5QP8kq1zaZA5kw",
  "key9": "4Xsp28q8pWMzrcccqoQfymvVXdD3feGEeTXWBmMHJA8SvLnLd3X6sLG8YT2R7g4m5qPffhHQqzmtXNVDbvLUxerw",
  "key10": "yx2BzKb7Uxs43yQShfBzN6rgfM1kh559PYkFU4uZV2HFDSVq9PUDkKvFEz2YcUTorrWbjA75F2MEYtfYFRDfum7",
  "key11": "3fpBy5Z9VUjk4N6yfXQFvcVshWzVWc7nfgKPkfo4chiCftpUqypvgqpPimbb2nMavHUWjLc3Hyfp1rJYqvEdDx2K",
  "key12": "2SJra2e1pNfn9Q7uzGSAKY92xBYEWkLUyjQLutkNN7T36NNHr9hNr97PNmYLj4CTjGK8x9PhMcKFKep9aUZqgdkm",
  "key13": "5mZPts9ZCWuF9oHadkL16j3PaSeT6W2qx1Tym3eida3ieX5SV2DfrsdzLndyWdGZkUDQjhDE2UsXyTFsDNd2WYRD",
  "key14": "2XpmoT3BYp4HtR5NpUe63JXVS5ngKgZdYmfqrvVBf9LVHnpuEJsB7SCGpdh4yrDbH19BceEW13qF2g8ms75khaf5",
  "key15": "5LxH1ztCNF3VcR4XTt8ULXgsBcgmRWiqPXmu7Eb3SxPekLSpCwosw9dkp62VH6fZDKAj4SduWEd1FWn8udTcYEFK",
  "key16": "3gVV3kswX3ksU2Y4MFXiB2Yg2mvSVTsQLFFQVXzjFec5sJkSvevZRmKYV6AJ5Lor1TrpZVobtmqwzLAwfKcxS4St",
  "key17": "48deKzYaJi322RF7ZuiuxPfR7epDfbjUaDznPyUBWzsiK3EMMPVU7j3n27rv4DEPA77BwhufxZtLFe3XT7fGSHfg",
  "key18": "3bk1cufuEDRowf7dGpQB8pqQExb5GwdM1tm9n39wCWkpDuxFTWaBg46nQ3EswdiJrqGHo5E5A6XCMYZcjSS5S4Mb",
  "key19": "SjkdnrMr8HRC9DHgaFxFfMpMfK4vghHZKwuHDnHciKDs91aLUgmhCBw5JD6SUpJxrNws1PhauJHw7xaqeR4mrhL",
  "key20": "5ir8TgHTkLmEpn3QUmTaeGG5yyGre375xcqqWAfeSe9xAMXxrhrUFL6V9Fec4Fk6LBtADhJchrAvXWWTeUtDyg7e",
  "key21": "MUjrPaJmuDfeAHaWATWoJWmBMH2LYTtQ235YLw4Dp3ZRAqKnWHHxdExavVoTZBLEZQHNToLZboZ4oxHY5yak35Q",
  "key22": "5x5kb9rzUfJXYLDgbu4wsJ6o9wCtxbwf7sKXyV9APD9shbpLJczvMa3wa8FYrv6ochDLf9xDht7j3dhEEhjKKPgn",
  "key23": "uYCnjrTcjSp8i5EHKvz1dQhqPJZbiVL23hzomSehwn2VPsKShpitmYoibEi4TiR7Aovh9ifVkmoxv9v11P3A7jK",
  "key24": "3j6mQFFijoHQRpxnKFzT2oEXK71FPgozYG1AZbLLkjviKQRUmN31b2nnnzveoTHrw8tPKmj6aQWAN8U56yjizfTU",
  "key25": "3u52CdYU7JM3Fesx2WEgVVKniWT2RM2g4L5EYf4SFqq3tEuteDuQ1TU82tYytwg1MjSpS6ztSJG8hA8psEziLq5i",
  "key26": "4ci5ievKPvJWjYqRB2GRwHaLmar8EZFLZJ7gQb5eVFyTY3ypNFsRXPppeejuv27RagDmFioHRqqUo2UUuSC9v9si",
  "key27": "cg8rFzmDjevaiH5RPQhpMCLrAdgPmXmaXhvunpBN2T6QzeZDHLwuVJyNriJvjWcFERPeHj2qR7n27VADcqMPfvt",
  "key28": "2p5crsRt4TSyFVRKoB5LrtgfFfR2X8hh9vqQQtmuD69sdPsebUXN1w6ujPrxvXjKTpP5GEW5BAEaEfpFW7a2Pzud",
  "key29": "zdp1aRusWfxiUVNtUdp2bBitHmKAYyRytkUMr66AhXhZsTNi6UjjA26CMCB3C5B3CHZzjFnAZSg6gXoPHKxJx7U",
  "key30": "4sjxApvKjGDxP8qTBkSGBTjZd2nGTgB27uJbLJES4m95Bi1gPh9GmNXDJAAYdcjHBwXR3Z1Z5WcuLVaho2363Uvg",
  "key31": "46dqA6MkjShKQXqHkpbJQMZwAPMuBB8MtrU5MiCexPiQU7i1jJD6ErKqQtXHT9dt2gGyBnAxCuNRkGNhV1RjvsT7",
  "key32": "3k4LVfkMSx8ZocYePYvRCBz1i9U6UFTEy8mHeUHKns1dWNKrf7Gq6SbWSQA3WtyRC1qRwWxLrGHi9CdQrMPQuJBk",
  "key33": "35noYPcZQfCRUV3BmwTGTeKa5fdZ1nuUSjYZJWZTYGswySPvKUAeqdwpJADwG48x6jr2yrBvgfE8xkk9pzerEdpN",
  "key34": "4DaRrjzWA9hDS4kZMuSzdynQFvXFDcJe8mrUwQsdwfxxhniwjiVhuw3bWgExCEeut65WcLN8YMJYrfCuWrUweKiH",
  "key35": "YeAJJUZgDuyUmCEzYnFHETQMg8ooSyNFMq4z2juNbn6ZcfgqXC2bMnw2B9GEriw3njoSuNyswyHAryujCawAqTp",
  "key36": "29PJy4HudShWcWkNKg6drn1wFUT7R6x6EQGreFFxudejPYpf343LPwik9Fd4R3HCEb6EFNmDVtWfuXivGLzQFZ6M",
  "key37": "MUfCfzqdiWGT7XHmiT9H7FE4fjoK5FZRkT7c5J8azeJS1VvSDXS8tyzeQWF4ahrzHAdYg3JSuBmGdD1gwhmXQkk",
  "key38": "jxJu74WzaphHZ5eyaLnsGMjANcZuVARUUF6ijBmsLiGjXpybxufWAwNE2e4QNrt7km1ejfF9pnnk7RxD8RAkW2L",
  "key39": "cmgqceKjj4uqxsXTPYBA5JgBfbTYrxTrK4zB8GbNMKDPeJPfLZLEVJAxrKNRzi7fAnGBkfqskhVEXABnFg3JbZN",
  "key40": "59vRscnDrxSU9YNJ6HfKJ5aFcUjoo94oJgPoMyJFHqsEfzZCrS8WKq4UWB2kTmSBinCWByuvd6GUVK3TAb7PPdps",
  "key41": "3r8oKqHDxkX5mFD2uVAFduHfnsqRxAqU6LmXD2YGSczsS6NKetxR4HYVxRaGWun6kFS75vKtJ1bggQNVP9MYncCu",
  "key42": "3RsexLPRFRUWyit2MqNmchVSrsAGmGLQgLeeirTmMCePYKBS2KZmJN463HskCnd3EbFNpN43nTWhg3VbtK3NCLzY"
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
