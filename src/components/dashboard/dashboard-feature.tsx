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
    "453vE2V2qZAvQN7WkGo1EyaV8Y9kGvueftiyoTPy3TPF62NKD1DBXGqjKRcHGcLL3wqc949zAb7MVChjH4tiDKUY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vwJgRverWATy6SJ2dmP6YrREgpX11uXZas2yBrbxQmxwREJ8SsvYrpEdkmp2XfR4Lrpy4dUTpqYWYqtKcwkqqLt",
  "key1": "3EP1ztxXPpYUju58QmodGwL83ec2y1PUtzyXFCmGrTGNHHjPw77unVzeuSyuUhSE4XqPHDYbRw2s3VVZGmMgt4rV",
  "key2": "5Lj48YAg3tN6mkZnpcxF4KMjEQr4pY2pPps3jxmhGDQ8HtzmJ3cW35pKPc1VVfhLP5qkejZrd7z2DZZ4wZh29uEi",
  "key3": "2F3BwGigJp6fyNpwnzNdoYu63xgW3F2LytQm517mue35LrUQGrNZA2KsZ9QvWmbptDwK647hWwF4wqWGG4zag8hN",
  "key4": "2h4NptaoZqvsfMAU4HscU2Aj6wmdhWXSXoRCttXsv9sFPjtsjPZAcMFUjD5SBjMKThdMxWAqCpFBpxaa5BicAiZ",
  "key5": "5YdkUCQkn6SP8hPFgU7MLkKxw2xqnKdodtwfnDUjnJXb4n26u7V4MosRGFYkEe3AGt7aDecwiJbn9TnmV7h5ysVe",
  "key6": "2ugmYDHT5yqc48NorHnV43Tu7275z4t2T2f9NZUsfjPVM16s6FAp46bnBJrXHP4gMFBPS7Lcq7XnkDFiAUmJ9KZc",
  "key7": "5uHSNr54ZjnCzBPc97fQcECVsCfASmKAj7s6eft1mVauaPaAzrgESPbi7BfEahFLgUDYS3ZwPiccGXT7kpJ3D24H",
  "key8": "2jvAw1CiTSKVR49zLrM1f7vEhXdP1nSvJf1TKrRyuWHn4voHL4AqbqoN5vjF3oBdc1WLp8PFBMWv6AkNL8ECWFXA",
  "key9": "2Wxzibuwt5JCmBuYNgru6Yb2x7uYGXECMs542G81zBsTMCT6nWh7t6SvxcfYYQYBsQq8GMkfnqvMQDrDShRep5cy",
  "key10": "2STDWjuD4rFVpiU7ya92wKEoekAPJEgb2t6LnbAgDmn6A886Thzj6FPwMcCqY9V9r8iRY4ERyCqtUKkh1XvLiy3p",
  "key11": "3NvzZzuBLyUPPZtAZgFqrnkZiv9orH7aV7fTthMUv8VxHf4m999ShnpEvXnAgUgLzFehAx1cTffZyXxrEZcgQK98",
  "key12": "2wMEho8aBNfHUaxtyLtgNGFqexDRaCZXv34jEP395Ees9XtiMxW6QhPSM3mkHC6nvdPfa7rBfztaUS4jZaUAaLeF",
  "key13": "64p9hJMGbC23ZAXAGR3TwojZzSNA4LpWbuEf7FFoua8oPPDpwtmuBQfmWhVUyrEy9Pzn7E7ufVvM13DnGBsNmeCP",
  "key14": "4t7L6S7WSuceDT66ucM1z6jdPa8en54AojijpN4ZiwWNaCnvpw1PM5o1vqLg7HNpCuR6LuLC4gbtHvbPvFFHE7qe",
  "key15": "4DkJbaCVWCCG632cdVgvpB65XGaYkHmifexWVmXupai2NmxbvS1grvVTUPDfiScoony3aPrtxUNgZbx68CU69LBS",
  "key16": "2im3uiAE4ebHbResM7J8dUq3LDavyBGySyAB1LUKFQ5krSJgCzdUEsFehiu7rRFMFBzbtbR5KSnVK56w3A2hF4DE",
  "key17": "2F52exfRPBjPTfhTun7zhMfRubpPjH9bEuSSK5mrBgTFS5hJnk6Rp8D5ZySBVkAFDLuQ3mbiyn5o7BxLJsLUGytp",
  "key18": "4UpvXLu5hMVfAyGJ5Wzf3U112qSXDeEa44anK3AyLJcZGQoPSBxMf71XjvEuQzPPoT3PZWdFhFg5K3HVH5ix8UWw",
  "key19": "4pP4egMf4wTjJum7N4zTbSiyDyHbpZfGiUk9SVvhNDDSFNji34dR9jzycyWoqN46X771x5LHGb5uJtNzzH81qZj9",
  "key20": "47e3L7fincR2rrqaN7pW8mguPbDmow6vaWYhPEui6f69Zgh2jVps4MyVpjcSg8HKPbMDBjn6hDzyiBHnrPkxx2Kq",
  "key21": "4HGLTHCG6Eb4HXopWRuqxBt7S1Jy5NZMo6jkeCgNqz2RaHW2g3wWvp2DxwKLbtQUXqRLW3tHmGXePJPes6ApTyFr",
  "key22": "peN8DykkDZ1T6azN65QRVBvUoM5bKbTnG1VTVhq6G6u9c4oRuCs1HCK8EmR9cB3wAixuJWh4Ys49HkmcX6xPSoU",
  "key23": "2bG2EmYZS97Z2B2LcRzDkiXH671Bw8fonHqypctbWtU9K4sxfTZ8LnfvJz7a4x2HG41sssZLx9a3PBiWJKyGfJJr",
  "key24": "4zkq5S18kBsLopNm5z1fL2WCtrnx3Ci2EkdanegNjf5t4TZ5uDYGdaq53XYd4PjXcwBD1RxW6qyrQuf9Sbg9RzSv",
  "key25": "w3SHQ9M9sqU7a2as9Bhy5Kn6G4DnCKZywh66XrL19GWoNe8ERXgU1p2R4VLtRbP9Zic2wvXP3uAioizpFd97TfN",
  "key26": "2yqV6chWwpoxd3bxnkg9wRximagCn5QHh4KfFM9H7zDCoTgc5nyZWykXGgCnYieAKyBgEfoQCEE4NDoANji6mr6t",
  "key27": "4E6rtZ2vgvovNCVs2j1gM1kXe88ykgaHijHqwNiFxTr12DZGruyZzxrVccvpfqrViN6Jxr9HxUuTaguVKCjXx77L",
  "key28": "KkyfwE4kgwTdpX4XkXvye5unsynTow2cG1P5R1WGk79VeESPv575yuPSakAf95HzitNtsRuH6EgEUk3zuxc8tq4",
  "key29": "MFfWkRCoCGqQdjWeENBsDFXPcZPpPYmWdrzcDpdVBtaEk7dtkvbr6bavYHmp7Us6Tdk6qkR6PJTDZ4wgJbdh45N",
  "key30": "3TpNitSvHZRgkNhRYHWR5JgGTqTyuWGutQwizVnGVnYzWeRFTxRTbWncoWyEuidBF7Kwzz3JP87T74oiFdgPYYWE",
  "key31": "WqwahSYa6Frtyq3jB9P4oEJntNmXyx2Nv9544UXULjLXDtPnb9V6bDCEMrMmYenyJdWejUjbM3i5DyD3oc6M1V7",
  "key32": "5KpNGcWgzcoJAdFbjEohWHVgSxc49zg2bP2fPcDJMKPkeBc8zPGs1cxRR5U9cuGm5iPfTxgYnT4f3gKhhrMZS3XA",
  "key33": "5Rb979rRkFZqFf5zKvr8BsuQVbaVzogrXK7VXqfRw3jPWS7AaMKFRAQP2CNgWUJPvyKWWK1RZicxhLLvhGnTje7f",
  "key34": "5uoXV5HX3TL7xBbyp1aRNL2WRFvDoASbXaaAupC1pNnH8ZXYkkcmic5bALvJFB51okbx15wmpbAeowLE7CREMcwj"
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
