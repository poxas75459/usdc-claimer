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
    "a5TsFgcMY7DVhmi2iJS7mc6RtXjUwNKCkQYMXx5faUTPdYGr6sELD2cYYaumjHPQ7PkTR1NxJa4rk6XYwGKanqF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FcYfCU96zuDkj9EQti2KrGqmMQuQKgxF3h25UYfMtFsNQH29tJMQeqRp5EBQnWgRegY63dSmfF5T83H1KdZ7SNs",
  "key1": "4A9rSGMpr3UViYHnWp51XysMm9MTB38ivashmtt33836ECFwv6VbpYPon8CKtAgWwkNJDyriB3CcDu7tLETkaQth",
  "key2": "mYm7dVfaUHyEXG4WvVsFafykD2SZeST8DtyQoFqHdPCgQrzVgdLaS6xjXcnJExFY9MpdepqbcNgKEY4R6QmXz3K",
  "key3": "5EVopDLJszEWyzYduDYYXTDwbRhnJrrfqUca7wubgVQNAsqkqazoRkiefVEYN9Pm8ZLvc6q42waahJ8A7jYKRQAH",
  "key4": "4eUza7TrmBn2NEsNezsb2V2X1WZTaGNshMKHc5yBTBCT1suuuvrBWNDnTLFYQv3ah1Ci4nEBN4QUDweG5Y3urM5p",
  "key5": "5pDRTmpzGUXVaorK95kbWtovM397aKBJYtag7HyxZYQtCMYt7wak6wvFFeFpPyCmmAh1SV6UvpyVPEPbxLX8negP",
  "key6": "22TmGLa3Z3pZwGqEZpfcuk5jSxWn1vaNVe2jB2ygrQwHjax9JZXrrBK1J6a1uyK3tjdrMDpfHiRj5zRcPXUdKiZn",
  "key7": "2xat2ZGre4MGLPNs9uT8k5SsFF81zLZR22MDWQMDLHt5sFSWhUF6eukXQCh7XKsLMsnk699Yz6DNKThW2apcjtRi",
  "key8": "4TNHJmSFZyERFGP8tzbgiXu82hgjtj7pHkWpyxwpVsRqRDZdjuaUN6pzy92qNAQzmkMum2hBUaay6rg5Nvd6jEjH",
  "key9": "3r2gw74oCqDrxabGMo83T8oU23W8pHiSUmX1sF82cawQMYY6wUEZMHHqSAwsfvG4PVcymvzioUNa4vdMtjMFPEfi",
  "key10": "5Zmc6SDyEWChqSwChEcwxhKQeuxQC5S3tWK37w28BY5tueu3zKeoBNnZkwhyPyAZ8x1bj5wPUVfSzB1j6tQtccQL",
  "key11": "sgVA6GXdtvfdrXnDDRWNfcz54atXcaQjsqgCRdG4H4qogjoPfMd3ijV8YuMPwSuNqwW8eXzhCYQGhWx3Pvhc3Vx",
  "key12": "5aMbBsoESAcV5kMTwknndbPwQen75CiL2cFzPeYYwJb6jrv9YXFodn4Wpa9gX9LnNDqHfNkKou2v567hsi6voqnn",
  "key13": "3C4kzuq9ajnP7wycorMzVk3iZ9s6PAf1FUkVzbG2N8m3K3ZFqBUm2CPrgNfa6qvRZKhHSKGqQsSz9LLSGg9r2LUv",
  "key14": "46NPwgaSzpj2aqA8EYJidMb1t7aBLcdXXWKp1w3GCMg3CC8dZ79ZALBVwP85NDg8wwfTmaYMUWH6Zgi9VxmhRFHh",
  "key15": "4HdanqP2YaU4s2Fhg734RA65fgyBfvRk7smB3nsMheQHAPgNAUEn7TNfuHUjxYMi3L6x9hzE7b8UtbewDpMiYu2c",
  "key16": "4s2k4fuC44Jkq9jry1atX53ZU2kt4RL8fZiLGTLxZAA9QHDFBrcfRwYcfvdfz8cyoLT6vzLWeynQipakKXJYkeBy",
  "key17": "2Wc3Gn9nhsa676jxxUCvGYpRBtzsfwVFjEvesAbcSiUhCdzYEWK7JPvRM7upWa3UqUgyqvQjLF7bJr4qJyJSpE7P",
  "key18": "74qN4o368YQcRhZAMSv5wTs8XrE8woq1kqaXMFtA6VD9erdGNDZWkxP2XdPhfzoqrLyitqRhns6o8Wz1GDMNHUy",
  "key19": "4L2cnQKMwRQSbX8D8tUT9p9XJqAUJvioeDcu28JmQbiMbquzvP1Yc8thmyCF8znPtBYUJjZuWgzc89AMZL7QE4fE",
  "key20": "3BvhrwBjYF56oq9XCX1tDbXAKxtSYjxmSzCa3TPCvTwevUGtr1SE2XowwitPcNDwo9CJXWekSQrWpHffgFHwMMm2",
  "key21": "4ibe1jtdpmFxQ1JukPUAS8uo1Dn2apkMjNu37v4gL9iULU4xmxpU4cmz8SRWmYhjoQro5R8r76m4b5ejJN8v2KPb",
  "key22": "rqaiSoMbDL9sZxdgSWGjaoYBFrZ4LtAu8aeVTKgLEkxW3rzkK41vFHBea8SXowCyBU46f9oePFQeUqaR2GBoKDp",
  "key23": "3R2CHNUPmXFTbFAgd9Xo3Db2RiE4YPJenTaTCnD38g76TBfkywH9CGGE83Rt6WXnjUhnxtC3SHqwH1KCxPKsK1gt",
  "key24": "c6no1NTpPy9SsX3bc9biaViQ3GbNHrmAyQGNuppn6as6poRCuPZh4MygrFrxSQjxMeciCKNDd1NVCCqncEtSNUB",
  "key25": "2PnYGxUXo9fA8aNMhkrFywNF7TJMoAwcpiWfz2tFnV2d8zJuGeorEq8RDJMtCUw8c3WdxGsLPqNwhedfKox69FsT",
  "key26": "46QhsXdbPZbVHaRATUWrD8yonxKtyMgLk28cpeaG1ynUoaEpmhvK5G4SNRaQQhnHZqYtTURxSLQaL2Ddo6CmwtC6",
  "key27": "5BUarwLgX51Wmo6dXbDc6xnXFCra5sBVXhxs9cUNb72iCoJAi71yF28fBNhbTjJW4TZRBaDsBdvP2kmYqErikGs4",
  "key28": "2QXrUwqBfhE277ePcjjNKCkjnrFhYxw5WCkLieNZ4ppbQ5MiV4oQ1WEKWWBWeY6wZ2KQBTo8Ja6WrryR8evbgibW",
  "key29": "4TGb3eScWUVvH9vcGcEEMZqpfDLdkQtknnS4ySqiEkL3zMLoCk3tNxkX1yy5qFwGpphopN8Mmb76j1RNjqhaMeHV",
  "key30": "D9qRx96ApkqzcoeZZt1Z44DVfNgwxhqYminy47gjyFayzruYaxwUoj7cVnvjSSc51xWVLi2MisKFosk9vsrpEFy",
  "key31": "4b4JURnsyzX45zFE5CUik3tzSFjwkTbipq1nXu8CJDFxtgC7o7Gn23ucXWpw3mqofMrosQ4uf2mXPhniyDb6LoJf",
  "key32": "DsbYYYWituDWd98WKEF2LxSmp5ZKCqFeMzeU61onrHM6dXJ8xYJUrVwFconjK8bUgCZU8BqDBV2n3bFh99GTk3z",
  "key33": "5Fgi7SLjxWdcrmfNdtsoWZ2C7woeG3xLGPF8jPRUpT7a7g2Mj8LKJyasSqKih6HvVj7oFnPGTWxTWqe8M3fBadKg",
  "key34": "3zwkXBKYjJDg7d74kB3Qg6bPU2hKk9RP84aY9hjWN759SuWUGDcXt2KdouiJFjKUhhBmGgJGaW68jH53B4k2dY6k",
  "key35": "a71nwPDJyTz1J3jEGR98sHWdi18ybeqhpFvB5AcTvJ9rQRyKMqYj4NK2KqswF7sW76sPeYG95Bq31YkAXb1bM5N"
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
