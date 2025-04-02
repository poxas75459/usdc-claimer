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
    "5aj9vg7TLnaZrgrDvxqWntH9Qk6L2gZNVky52zjZJpMwCkcJUwZz83n4yJPike8NXAnU68NuiXB7MqUTJy1viRXP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bYtTwDAc6wiw8JJrFcspiNYN1tN9h158kwzVQv5LJYdZXSwDYw7JmEK8GyoDzHQJshHSb9pfSkXt3ke5BFYbjQm",
  "key1": "4VF4QdrT6TjrEL72g7XZxkajEVg6oAXeJpjVFoaDZiR9F6wDyXuR84m4uVTBUwq2sYEwkaeSrWN296PV6RHF2xSA",
  "key2": "3dzv2XZSR3jKBad1EH7q8fdoBnDzqyn3D4JWwzVBfepSMw42kTzUa6ThKcKM6VAiQMpGTweeQ8tx2quTEhTU2KDn",
  "key3": "ywhKD3H8dYtZ2BVNNu23aCJ2U5NhU1VEE34ZJSwFxuCg8VPR1BwGJvhs611FrKWCvtMcNvsu6ofTa5ywXj2cR7H",
  "key4": "bVqMQTYk3Qf3P2sd97GV5eiu7S61TqMiZxZDTLsLPq7X1TEB4Csa2ygpr8JA4mYn8R8JkShUuesiXBhiXcAUhPb",
  "key5": "25SzeTXimAhBCDcX8qHB9y7KxxBvgTMkPnDjwyojwEfpj7dp6fE5uibTPj189ovXqpi6d8k56q57HSBKmF7NLsjJ",
  "key6": "4TwMReojsaUWvxsRhNSEuXBqD32SnsnFhrUEVMbQQJJNjZ92dCheeyc3Wjf3U9UR825wwEDr6WQrE7WFogmgodeT",
  "key7": "5zofoDrtb4RUkZz4hiSvMuKYFAndWesh9UjT1daPxmisCReB9qSkYrZ7UyyvhjhJPSS3zMRgSJVT8Psvgzjgu2F3",
  "key8": "33n8tLZNcaQQ5wTcUV5hfr4tPChdQBZJwgU2KXvXwa3X43TGGMzw91n8iakwTQtwunq9heQseSyqKkGdrPfH2scU",
  "key9": "7ZkMrW6xJ8oSDAhGLYH6aXRespoa2arZYssZJJzQgT3eNgYaFkxskCvYZrSGKpMUdKKRt2L9FwnnubKZyLKTRyr",
  "key10": "2uSotTUiRLonzwitK2eTQPBu9y6hWguQx2TdNh7HvX3Sq1yzB7xAB7bmox4KG3zYztVSM2q8TJBnHpD5q7PYgiv3",
  "key11": "3VZhPi9Ayp8sDo6mdShhAv9mM8i7YVmZRoGyrEyxnXh8KoY8gu15zgwu3xh7pNFgjpTzZT54AHTXwynCDL7dmZW5",
  "key12": "gT7rtC9p2GZBb5S7SmsGAjD2b3Y4EGhNAGVindHj3JoQof8K3T2T3VREHG69xEe7UBA3u3BYUuK3xAZb8ehMCmD",
  "key13": "3zorgdQaPirmdRGX7eidakn5GtthmooFNXZNt8M3ARJPaDz7i4F1LtcvBLXxT6BrkWJYCpKHtHC6LAu3sgdx1UE1",
  "key14": "5gCbUS5zfErmArSSn7MU75LH8MZzYX3i7BX2BP8e8kABPTjdEVnpRYecZEp6jENPFoGwRd3n8n25LBPvv6G6pEQB",
  "key15": "2y3YAEPKo2wixHuzCCxibgeacQGqvS8QnG5Bm3GJcdwdw59HKmXqnZbn9tjAuzWi7454MdEs46KHhK5TYWBt31nP",
  "key16": "5QBK83TUVsHb1FXjvkj7KHMQuJfk3g1gBfSPbyiD6Zhabp39AtLgeWSLAoV4m55oSfZpPhL6rjf8r7QSxqLsxbbN",
  "key17": "4rhqrBYHRfoHYhXgDxzGasaFJC54CHs9p827bDYN5cSTv6XRiuH3H7HQ9vbkQk6a9sdmo15ikhEH3bCefUte2c7Y",
  "key18": "2ghCyZsrKRYzmnA13TJj7UQxJ7EQANcJc5rY1eFAzzUNMtwbgNGEXBdCQqw5JtBrPj6ZPVGSScUeuywbK11Nm2e8",
  "key19": "5XCQJ4QvHwKVjwPZgPB4yhVye4rvNL5naMuG1jmNwNuKNamjiRMcmbJfDiMK6erF5XCGQaLmg3b1mHjuVUkCBE6f",
  "key20": "4QdT8dpfNjUnVhT9LftZSUDUU2sY5wvPRyiQV1jmbc1h98L4CGYPbt1R1pxtXcHykF2Xe1zzni37kJsCUXwP7kN5",
  "key21": "5EpmNdsijh2xcihL7U2YC4vaoZDN24AJgzru64L2SWfCdcJrJz9aLVh2PxdbmLkYfKBwrjMbbHt6S8YL1XtFVndg",
  "key22": "qMJbbTrMDsiQmS6PcZZs3RWm3bwjqtBf5cCp85MA7M1Mz23wR2RVvs7TzkncxGVEixvTUEY7HffLQc3oTieQ4CV",
  "key23": "3SNW8ZmQXng9PZ92zmwoft4JW5Ytx1pM7sm35UaU6rtubSDXJsMZyVWSWN9WYNrijFKeEcegv3YkAJ8UB2ueNmJh",
  "key24": "65rVtzQfughgwAAij6jf48T24g48uSHUW2TFZCjH4183XrLJgdpZUYQdDh2DmSmympqLQ7zZtCWyCsB75pKQqst4",
  "key25": "4TYgUFzPUS2UMEN9Y5kzc34rwzcqF2rjPeA3mY9RLibrEhgivrPqh2KMsGinMroLxdAcRW4VL3rFdu3EgU4AVjvE",
  "key26": "4DSjBuVie3ouWCGzgSZAtjUrVbTggXnt4crLRLotRzFAkKwzTJiARvzqfjrxRVDF627b8iHSAW9jZFLSWJbPUhJH",
  "key27": "5zzDexEt2aBGaTZmbLMs99Y2touWQhw9GcgRe4onv5zDKqWrLaMmc6VVCPqCy8a74eW4MvN9KZChGL93HAEHTHPq",
  "key28": "2WTyqUAdRSmENLx9KcybE44boPHg8zpD1xSsZUnM3U6ZVEMRVtPoQaXDgtXNH7CGqnRqhtBK7w4GXf935LvGLpHx",
  "key29": "3umuX3PPeZ22c216ipVxcdqrd9bg4WsrUtXBsF4efPgCCaxfgkberGLtCqdyKgLKpiJ7Tq1JqcBJyB3dFKz2o9H1",
  "key30": "2HmvsdotxXY9ycfkrFY9ih36gfw2aFL9pCyBksSPws6hGq55Xc1kD6kJXAA3UobQ32zrWKMVXJCxdpFE5UtqoBB2"
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
