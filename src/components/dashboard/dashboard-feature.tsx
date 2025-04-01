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
    "5TTdsBNyKwF7KmBCLLDEiKXhf2ubjHHvMwZT97CetHr5JrvP27ha8wzMejaBRoYTJ7MrMf6iB2qrhniazwtoRxpd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54RkWcYFmdv352aU1J7d4dEmmP8Qn618pbXozpJ69iNPrxqX3PFqDZjX5LnrPTJNpe7nFFdaZyataLNt7wxxQPTP",
  "key1": "5WRsotY8McL4D3bZ7mLwWTt36Py97KF6N1Qwk33gC2XV48jg72h3qoFD7MRhK1GZVh6ZUdoku3tCgYHGrB9PTUVv",
  "key2": "2FM6k1HWVWWD1tmULaVJcCDWcBLAGxNSbG15MRUxN9cqYsFziZ2ZYED3A3ZBh9zzEeivsVta5FqNXieZSC92QaFj",
  "key3": "2zsU3hawmzRU8rSDmdHcQSRSpHQqRmmJnWbtTNXZnuLuRVyM8gaTB83c3bwo7gRuQRiZDGKfNETiGQNcswkGnJka",
  "key4": "5ULRAwUXbxuHRrJVwpQoL3R8GE6TqrbyE2Dame9t694wQhoHA8bAzq4SDhe4jq2vboeQ5zC5iUQcYDbBqnFdTS2D",
  "key5": "2CYc1WnakRT1bsqgHuyYCgbyAx1VuLioHjcMMtQWA1gNDjhYxym2b51FzkctjAtpAviH6gvSXMiw1U9eFxmE4vkv",
  "key6": "5cpfNHsYYUwaDBnbv8BWYU5F5JLoYhnfkKdC287L88RsnaHksGsofm7fn46JRHDbKuEcVHu7GSqPZV7AGg6qsHWB",
  "key7": "56bPFtxS8hQuEHFPgbhFAk6HvG1KCcWL7rJpaosKxJcTGi69C5V8VujpMT3R5QFTzCRWFXxTd8uQ1PwTuVYg3tDV",
  "key8": "2721iwqhY1BwF6e31ZLriEU1tk5JgFCGoYjXQPhgLX9M9zx9gshr4S3QKnmq2HyQ66SxhQSKMBHSsBGad2hgKSZW",
  "key9": "63p1QTj9JFF2h6TVea7Q4nAH9Kcb8h1CaSAs8JpuewYg119c5U8nmDyvSy7qgwu8DkLjxroLKapjtvJ3Lz4joiJc",
  "key10": "3DmRpQCgeF4FQVHbfk4LQ2EUcGkwjECp6dwiDpdV5H5FF2bU7gDUKGweeSvRCaHkV23YpvTLbk8bcznFcdcHPz2Q",
  "key11": "544vNEVo5M6Kc51CpaPLCMuzzMypvjKLLCS21qA5WCM5mj3C6fQoVzRdQoJYPViHWDS4ZQAcWSPD4szbi8Dfmvkz",
  "key12": "2qbhzucjqQBpKorGE6D7d1hwzMrPksgM814SwbrnF9dFhs5f3qNN5zUDQExh8vtbMJnfEo4Le7jFN5VuhxtXJ69g",
  "key13": "5kA6P67gqKwZ8gnnNS77YaCkFY8SyrsX9fD9Ubm71K7iX4dVK8mdqEHDgw1rLTjNt6yDiDAXfzZjBQNCLMQYhjVz",
  "key14": "HjsGYRAoHBigCbeVuHg2ypJYKMD51H179hyz94wHH8ot3U9niESZutfvKf5G9isbzwFagLHbR23zsVQpWphEruC",
  "key15": "5cXpM2i5E1JSbhnxojcyZwDaR3xpBSduUqrhq28nF1UXV5UFEhfFizfaQtBexpDWRjePmbh92ML1e1b6McBNX59r",
  "key16": "2wXBkRMSbduBiobcbJuEQHa1F7WYus1HpH6zcU1oAvEqg976Nees1Nxe8d2XAE1pecS8jTxiigY7ywABwDiPMfqm",
  "key17": "45qGdGkiL7CKYnQsqtZtsEwatSp93u28ZwNsJg5ZkkHAhkfap6t4Z1GjGDmarHnvpZYxZVJbr3cSW36TLEhkaAjE",
  "key18": "4S4RXy1FePMbmV2tFaX1BCudy5LboKYMBzf5MRiiewNg2FAhg7HMMvnRf28a5AH6SygKywBiHphewMJi4MSF3aUx",
  "key19": "uVvvqhjjA8xjJzRmeB5va77zU3WhDJMWNggfT3Ck4TndnbcMCKKHu1b4VfujeX4daa17u4eAs8LacyHGLHiSPQu",
  "key20": "2hHkPKQGQgFpiAoj4vzHXTQJmnXYa6Ccdh5wHs8mrCbt2npAb2UuDyp42CoxzrmhYDwmSpWG6K1qCxXenXUqa5hg",
  "key21": "j5eWcy24tagXJLQxVsJkWPdmMJKRNwFMSCLpURMtGNxHiJyPC7TXXpWoKEPMMqFApU6oKGQfDJsVAPS3SmvoShQ",
  "key22": "4qdmd9zYPwgoXvYvbpmT5wkiAijaH7CbsVFJG97Fx3mUfZV7KAS8PoWwN6MNWbvqX8t8pfovdQVbt6qp52orZR8v",
  "key23": "B7goFGmjAUi1Ly5zBfxaEHEFynEkVyouJpAPbkJwasaErT14ftENGGpjBrXHjPMDdAAhQZpZaP7sqgXeF6w5vYM",
  "key24": "2Jz8AhoGdQSEHAjgvHubfdJHgmrpiDu14R6QAni7CxjEDSyxjdBhxogG4btsDsnp4YMcSNAPtN9tz9XXSMGYiFaM",
  "key25": "2NEWanTrwFPBh4C8Eby9FouUZgq3PunanaibvziWaN1MJSR7hzoN5h1t8tvgXBqyk8Juydy5uk4VG6L2QLnwZnrB",
  "key26": "2X99MGWdBNW3STme3YM7FRHYDW6NtEx69tMRcLGhJex1YLDj9Gr5op8WrAuKWECmHHH4zkmEjpjr5GT1zxqiu8o6",
  "key27": "REGm2h9TTzNqp1tuB3GwrNCWRyW8u22u9xqYaRKpFsKpXymuKWedbEwsyx6CNQMhg6ehc89Wr7znj16BEMsNF2j",
  "key28": "3Dsg6DBYf1tYZNyWQ9UEKR1LA89QaxeebEuG7BVSGzeef2BHnkEBgEvsepHi4d3SyWDGzrPnsc4Srw9Yo7omUPAC",
  "key29": "2Lat5dKXKMe2VsbW74sPQX3X2DwxxKKengzVTKj5QkUMC5jpGyCMa6ww1FfyL8GbtW4h9ycz9gkbgTHP81Y1YMVs",
  "key30": "5hP6VAJNVZsBjU5TpvxkFwoGEcCR65yfVTrc4r1kw5ioMLPtv2oDxqprFyNSiUr1S2AqzwAGhVxzuCTbJTZnF6yt",
  "key31": "d3L4DEHf3ehgsJaPNhk55wA7e2xwiy2upKXytfd5wAAmmjsNYwL3aFkJohCXmUrwhUdofqtE1zTgrhJPGjmyf7x",
  "key32": "4aNZDzAnF4m7tPYKHWB8Dj7qfhDvWCGfbG4yucxZFyb3RQPazNq6gCxdpGNi11i1itQiSoEf4nJu8WUEgbUZkfQ4",
  "key33": "2TW5X9s1RtDFfMas2ZzFN2GaCPFDhWox8i9DUEZuGcUD37ZxeTWL9GPWx7mQco1ssydxtKKDs2tt4jxnY6uM7NFL",
  "key34": "47tcgFjJPEPxofse9pbxDKvUFGDeQj2VNUVrU2MaQRTBhrS8xDQZ3i2ozSXLCZPxuav8MC71bt7DWjGWXESsSjKP",
  "key35": "2TZraddwu23Y6hEGgh3iUNVsA6Kziw6EAXvbtSCAZt2ChpTZTAiY7xuPvYhkz92fmKATJhz2GaPa18aosFqnEn9m",
  "key36": "3tb4FVF3ukJL9bM1WUior4WdmCpQ1DQevTFcftcpEbtzybrt2TpdSeE1yfcgC2qUqD3N9FHNWPcr5QaG6kiRut1Y",
  "key37": "5PVJmjJAbQK2AvUvfniwHb3P1yD1haibdGgA2tsNo7MRKvVDgwtEVd4MgqD6nQ2nBFgrfLaHLS61cDT41aS8QQXP",
  "key38": "52qowS9kCFgHsUV3Zt4xRYsz3QpVZRx5uyX6e7nGsYho7STefLRyCjoJJHXt55zNugfH6QANYej1FwaChjVKrwYz"
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
