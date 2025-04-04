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
    "4TZY8NSmEgcGuNCPmsWBhqugYncvBayBvbePrmr9REnSFxP9t11d1H6LxUbg99UBYbcMeM73A2QmfxYS1Q8p4uKF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YUwQV5v7Qapz1otGznmAJ9tdaoEwBfSCBs8Yu5mqvnKAKr7nZTr8CPMpaVuQYYi97cUoGBbX5UdNDjGbr9VDCRS",
  "key1": "28vCRKwxGB4epiQpZmxRPnZnm8bcexkmfMqAd7rk11AC3TunKqYPNHm6cDAkV8qgDTLyWqvm5bqDubsvDYic3KwY",
  "key2": "fVQxaEudagJX4kDuSwLQbAceHafEPJrau7hDziTCXuA6AqzGuP39Fo7vVYWk4hQ4aEqxFRL54hiLyg2qFpRmgYM",
  "key3": "54hoqNFBFjXNDdNvb8Ay1brNuEEpfVozZ8CZDEkzFixV5LSkv28MCvgP52MmLFtMSoDefZ8pZoCfuvFXdNfKm1au",
  "key4": "3HSQNFFk4F3xJNiYVDCBAje2eKpigS5qk6DNfyhP3NuG6Ed14mKk4xXeDAUYd8YMEKtQgiMQxY6eNFju6PsVFoQe",
  "key5": "3wvAFWnssD9919JQQAaxxYyWRXRtxBXkeNjhkBUrcKsZvjAGRLw7UtSv6pgQzjVbGuFhUZuaNHasydgLpx7gDAUr",
  "key6": "3Lz2d2WxxV8iwAU9cg5ywdvXNMRZAsCE6SW7evD4jEMeSUSPxxxxw2FXyCKPtSYaoi5KKrei3GJ8AvwSmWw4s7CB",
  "key7": "3ixWcrrtRuunMNZ9q2odntHgy8CfBwzMvBXQBmGLMGqmpNhdRLAQzjhAgXLKSZm3XsmGTCfXHGrBY6WP4PkknAPy",
  "key8": "4LMYjudLSrJUZefXFLuv5G9h7meMshR4quRrdCvG8Am45v1mqeQ9KwnD2xysm92vZ5pzexea5t7QrkSujEjhHEyV",
  "key9": "qAmggxGkRcU1eNSmpEPTwo9YL6cNX5Z1KJvkhjjbbAcJV5N1JWExQQSBNneXsckfEbh6z8AQWA8HGYMiyJ2VhXf",
  "key10": "2EezG6nuP6MLZ21jxDNhkfUF5gpZpe9F2u4y1JdhPu2juRTTnKm41YAJM122hcBcRaWkNw2muuBM3Qx4W68rDexP",
  "key11": "jR9p6VH1kRtHMYv4EwQkREVeALNW8gRQffquqmbyXPkTyPaNCULshSUtPtEknCDug3fpu7duRE2Ld6iB9JCPVf7",
  "key12": "29EF73vpaMRV7rXEqjtzgzBfnymAibcAHqk1oWmD2BFd5nfyCaXmdcQz6tto3ejGnhCj8DvZHgzxvud8YpCKtyC2",
  "key13": "5AjhwQkTMXK8PBAJExiD3zmWqch4zhYWGwGW82kdkkfHNhNaBJsPcHoUjszk2XE58NUnVzbr2v1tWghY9hTS4u8c",
  "key14": "5ALDwF9zn6GaUfH4dz3y2iDWBtwUEckH2zByGg1xvpct1HKdDCwUkSCw1Ua7YpWcwa7RxWtzsnZ5fC7jtQ19y3w7",
  "key15": "3VFBMhV8oDsWYTte6sY2xq1sttyZ1RULkTrvcr3BwiaVctky23yxz4mb8ZXjdCfas5RPHxhiFXkWh2Jgf9zmrEJD",
  "key16": "5DRnCwHHWrsRbX8nWDTFS1kktjewZePVMbQ9sReECep5W3nfcd4G5LvrZJaqUfk65ynNGbAoHkhqJuH9JXBRoByo",
  "key17": "2kpiCd3bm9aA7phTniW1LDCKYAh8VXCB8k5AMpxxvBW67oGGLeSYRGvzHoYBnrfZVHLech9G1kXz4pt8ZTs4aYG9",
  "key18": "4ozLKofTd6XbCjYFeHboTJBPJ3xPXMgwAup8pX1DsfYd3JzsvKboNfdd7BDa6971eQJdGiKqV39XwMfMeatzHsbR",
  "key19": "ezjgjZRyG3h1NMPcM4tLqHMzUNoJt1j3LBMzoNTsHGCL4Lt6UcthC5uWHez1TjupaCTn3z6VK2wsXfi11inC99q",
  "key20": "4DvAW8vsZrWyDxDMdJffGAN28jy5CLaPE311bk5UnZcdbKjb3oDGdko3dCbtY95ZXzruUSNfvAGF9ZvPwiXXDTmB",
  "key21": "4fvdMh9iLDYBBpUNhdh6KLz6fitxFcFwjuZDEbWCGui8hhrkWi24iKGkqfV1r5HfyqxsJFiXXzyge3dqxzwR5Jtm",
  "key22": "38thNnSoYefMbAHcrvv3ri59FFT6XMpBaRtrRidvECnQ56G1yUAyh1waDA6Di3CVtnBfDMFQaCAGss6G8XePoTqZ",
  "key23": "4BuxmpTV27URHNNFw6EcrrApbkapeyuacWiUDhpKunYNKmC7dzJAHh1WxjcMLnBmNeNPVSLKYPJZ39Sz6cqDp4LT",
  "key24": "56T87DDuWmXLEqagBKGGhho5VpuoGjtfdwhVeKsryqfvJWYQ9yDaSqmtrJ1xqcnPKqsTWWzTQikzZBoj3kwK9GyQ",
  "key25": "3JEpLDLY4W9k2hjZcArP6W5fiY4dP2kgTxahCVvHwWUuBjdk4Cbsf2Nx1VDbdEcPxt6EMv8G2EHqQTSm56auX6AK",
  "key26": "JBG4JZn3LWxhCJGRxR7CPggxBf9EbmGw3Z6vNfWHeUZXSa12PfgNdjY3FAuA9TEc8Gx8uxkBiMuajg8JtE8ai9X",
  "key27": "54ykBkE1G8PSEvXJBJGeA93wQ2PrDU2HWRfKPqcYbhhWVgJ52sRiFRKW8v9Zi8HnU5gw9gYGy845PniSDwXXgUsA",
  "key28": "49TWjV15tdTw6u37yJKQ7hPPqRhiX5EkpU2xPUqM65MGiCNNrgY6QAvyj1SbhMKgKdf7gfND9TNwmEMivcMoTHMQ",
  "key29": "49YNX2uo39q52s1UmgzQ1uDuGcCioPNZvkUxsByZgZa6xvPVpUdJbpgFZh2vZbege3QsbTrbGDfxLR8SADSQ4Ves"
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
