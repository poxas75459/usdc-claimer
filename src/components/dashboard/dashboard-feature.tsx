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
    "3nUpEs6fCE8qDLmG8eYezTqKAtMJzGow9v4uQ9m5sRxZL1vHTm5oQAhfJoBq7k31ubANwiGkHf3Ut2DBBBymGzPQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26pfDHqB3c6QoG88w5tZ65Hwi3qNJxLjS4qBdw7kQDTY4Xtgynf72wQ1bqnxhMC5Zg8X5AGKvw2RDA2JGr9r3YXp",
  "key1": "4NAZp27BvvQQm5adBuTWi3JqPWAbd77bB2jkELEhfouRwNLLEpTUUJRUjbUK6rVZ7qDuJccX2WdxQcndgayFcCKi",
  "key2": "4Drjx3XpNLG3jhCn1MthSR8X7pBiMKNiMKi2p328f5oNd9ouXFvn37o95MGpBWkkFXtiDhvn3JbTuuwoGzhca6fM",
  "key3": "5CSgAA2ysn9PXX8YpZDqaUWSUJKvxA6sWxVG7oV3AY3j2hoKypmFAjVm3zWX381KvotzjXYxvnikurC8ceZMMtxc",
  "key4": "2S529D8upb7coLfnRBzPaTsLWRZc9QpkbmRGb22xtdY697rqb9Ue2wwYjNC2p2i2DnmHxkWGBwu9FwFd9vPvpcXE",
  "key5": "27EocG5CcL3Cg5q5eoLSqYYEcxzy5KP5PkZDE43GQeoRC6Xi8Ze9NXUju2cMNu4mwc2V9tGBL2KARqP2DkDXXd4x",
  "key6": "47s51wb4upPSz4TBHDux8y1PKzUrRx1vbTEi7NMUZd5gaQQ6EVxoR4vnxVc26JFxDxQ3WPX7gwQnGPN3K7Zth6UM",
  "key7": "3TGLdE4sK3918G3BErLK9KdhBEyvwFZKAns1hC3SxzVtSgdWc6s5nLnWd1eDZJC9UxPio7NFTSrHLZdfVaHc3jUS",
  "key8": "5LaKQeQuujB3kCvEcTSXLVxUY95rmTsAvXJCA3MzsAK1Fpzu7Y7NMqqFemcdM7kd4LamjfGrVvhjAUbNzNmYW1V2",
  "key9": "TXPgsV5V3DaDugr4fAZLgApfMbLXQkvDgkzYCaFCeYfdwxPMWzhgXVM2hHuHMwYQYCdU4jc3XWMGyoL4oikfcFW",
  "key10": "4Aq7SorpAiPwKJY7xTreRYzNSPTfwRR7hiHvh7aE4qafVbW2LcJt3jDErqDLowDQDuWXSi9SEuHseh3PdoAnAx5",
  "key11": "2MKhS7mMU7whaYXd2WkcvErhHVE1cWLA3R6XrtAtmNJYrghxGEBM5XckfHA23GB9vTBK6EE7ftbNC1YV1rVizaUL",
  "key12": "5TCy4QocB89MsXwUJYsA9WaiCrEZ1MuLGg9afK7YqghCHQN1ziUS3jhucPg3GZvntYDQ1Titnd6FdtJqkwkuVEv1",
  "key13": "VxCMiG6o7wWWDjYUk86UJs9rAj2FsDSKirVuE6WVkjcspTBkFEi9NHrKePupWKBdA1NwaQXQCgBkcCKcdeKMir2",
  "key14": "4XEZeN3RRYEmeoZnL5hHdJFmHfbAfKLC3KrFU9yM9kTcmegxS96NGbdSCRKdTn9ymKTwTfyRWxaKJ9GTXVuHu9V7",
  "key15": "5fyXM6dSQYCt3jKnr6FCUh3gyZmCMnbo3JsAp6dUAt9DHqY6XWrXpuASo1BVMUewjbXcrq5M4XLSg8So8uCGGpCL",
  "key16": "5BMhTJXFjd8273Cb193caUH3jbxYVyH3bDdRpQfs5iTPTXt5hkZX9gbdPBgeynoyXCaDH2R5KPtWJyYtHbnzv6xw",
  "key17": "GXXnG3pWZegbakdFz4ziUeKKvT7Q4Y9THwVpuyDjyR3BoDzdJVw8g2WYQ2rGvm2aqPoQRcwf2LMMpMBbg4A28qF",
  "key18": "BH2oLFUmMgCyf45ckzhmLtMwYR6GaUXQJDLqhmAMpgNE9VrjMs3HDVGDgF2T95LzgYuAsjEKeAQgKKa8Dea6mLY",
  "key19": "4mcum2BDCcwDH8qQ5oTs1fWyZ9ehkS6RNeJzbNMYV2nTGkYvxMFCiTcaMrbZ9RbRcWPAKmpKQfAHZwH8YSFu1Bia",
  "key20": "63mj14G636jDJeLHUbDDGCSxWN2QGYMaUEFNDyS1awgALpSyaQ7mEDzPVrQvqVH558jt7s5Vc1WTiSNZLrM7QFKS",
  "key21": "DEFd6uh4cR5KRM93FDSbeFqhG35RopR5EyqVkfm5Defhe9JDyGPhpYcW6PM7Gbh38P22SyBUxYhHiDbLw8pHYoV",
  "key22": "5ooiaVubTZvbCiHsfPQtpidMXVS9zHj5QmEe8c54b4d3o2V58dDHEqXoQ9ZkinwThLWDKCRnpJqkHxNuj4scA2Rx",
  "key23": "57owd8iKnFHdY6aDQBDJJj39uhLRm92WM9eDCLSJK14nmNBUg9Rjjy7BMtLq7y9Lwoa9S7eLVNYiRBxPeSGC8GzC",
  "key24": "25E1gXx5yxmVP5iDZ2gS5PaZG8C1hHpT3UBDqRX9vkeB8yr7jzXsuE41xbwrBC8Z4FpyFmi2PAzb2pFp9LPB6PLv",
  "key25": "2LcMkJiVSL11Y9Pt7w32Y5mkqdXZr4U5Cfc5ScrzZ3SAATB6HjXY9CN5QCbr8Nyr2QbsLiBtAdDL4QdzPpdiLMJu",
  "key26": "pvxKTTFMA1KPr6AZEJns1rict1RkR5APnu59VPJMvqSuzQt2iwYXsEdvAMVemqzztztRFNpRmSTrNYDnojmXEmc",
  "key27": "wBw53J4ep5baHKLuE9bq2fWkJCPouy8kFxvYJuZvThui7p4595SQShgy4EgrrYudvGyzRVMFYUKhptUAXns9R7n",
  "key28": "3oWcpRwexwrWpSbzLLwP9q58dS6eaT2zZ7S6viS8KTFTkw8XWT23TZxE7t9DAEPk2nYxzH794dxVCfXPfoW7Wadz",
  "key29": "5dSqof9Eas1TNFcwVZXnh44YDcZq5uyHPJE1151kzJBsWnPkMdMjgaJXagVNpXWFNpYBphEprAE7wMpu5bEeUKv2",
  "key30": "5WrgrdnS1SZ9E8Kh3P2KrV7bPXR7ibKP6TT65erX68X4MEmWb8E9A5FcwDu4DEJVb1228FcgYHGmP3kFdiURpo3G",
  "key31": "5Va97VFugQSBMwMQBejsdg65FNweN3pyRq4z5bkjQeb8h9Jx5QGGLk8CtccShzd2ojUr9qD8ASXFuguMw4e984Es",
  "key32": "2vco4V3Cp1Q8PoXp7FmPWYe2sRktemjdNfCkfLkEQFwRRdjw3j1TcReBLNwLyX8Z89uZ5sj6wCFLt4qFuxMRdq8k",
  "key33": "ezrSMTYyTFAmKDxV6gzWjCCsCM3nm4yccgG1PgvidHRBW8CDRfQLWLs12tYPVADe7kJ2PfUVkd39gVcCNteSea2",
  "key34": "2aiKQSdaK3w6jMi6VzJjKeez1M6khvhPa8nBp1CsFYorYsxnDNe6riJXdq6AQhbmFfkWhFLAy4uY49QxfmJ5w9Qq",
  "key35": "4tvSuhqZL9tBoHd2dXo9TJjT7kDPnFtmZq7Zvqo8awoJ8U41VoyUn9hMsqGFEBKMErUUN7GbQn1Hk6AA8ZrP1qiE",
  "key36": "Zkawbrwo3Pd4X88byU5i1imChng8YKgsVHn4quQqfsDA8q3XS37KePBgwteXW6b5c8AoW1egAvJQTdUfit26oZy"
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
